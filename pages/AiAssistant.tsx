import React, { useState } from 'react';
import { generateActivityPlan } from '../services/geminiService';
import { ActivityPlanResponse } from '../types';
import { Sparkles, Book, Clock, Target, Box, Loader2, AlertTriangle, Heart } from 'lucide-react';

const AiAssistant: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [targetGroup, setTargetGroup] = useState('Adults with Developmental Disabilities');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ActivityPlanResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      if (!process.env.API_KEY) {
        throw new Error("API Key is missing. This feature requires a valid Gemini API key.");
      }
      const data = await generateActivityPlan(topic, targetGroup);
      setResult(data);
    } catch (err: any) {
      setError(err.message || "An error occurred while generating the activity plan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-4">
            <Sparkles className="h-8 w-8 text-[#004b8d]" />
          </div>
          <h1 className="text-4xl font-extrabold text-[#004b8d] mb-4">Community Support Assistant</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leverage AI to create structured, therapeutic, and engaging activity plans for individuals with special needs.
          </p>
        </div>

        {/* Input Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10 border-t-4 border-[#e31837]">
          <form onSubmit={handleGenerate} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase">Activity Topic</label>
                <input
                  type="text"
                  required
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., Social Skills, Art Therapy, Gardening"
                  className="w-full border-gray-300 rounded-lg border p-3 focus:ring-2 focus:ring-[#004b8d] focus:border-[#004b8d] outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase">Target Group</label>
                <select
                  value={targetGroup}
                  onChange={(e) => setTargetGroup(e.target.value)}
                  className="w-full border-gray-300 rounded-lg border p-3 focus:ring-2 focus:ring-[#004b8d] focus:border-[#004b8d] outline-none transition-all bg-white"
                >
                  <option>Children (5-12) with ASD</option>
                  <option>Teens with Learning Disabilities</option>
                  <option>Adults with Developmental Disabilities</option>
                  <option>Seniors with Cognitive Decline</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center bg-[#e31837] hover:bg-[#c41530] text-white font-bold py-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-5 w-5" /> Designing Plan...
                </>
              ) : (
                <>
                  Generate Activity Plan <Sparkles className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Error State */}
        {error && (
           <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-r-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-red-500" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Results Display */}
        {result && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-fade-in">
            <div className="bg-[#004b8d] px-8 py-6 text-white">
              <h2 className="text-2xl font-bold">{result.title}</h2>
              <div className="flex items-center gap-6 mt-2 text-blue-100 text-sm">
                <span className="flex items-center"><Heart className="h-4 w-4 mr-1"/> {result.targetGroup}</span>
                <span className="flex items-center"><Clock className="h-4 w-4 mr-1"/> {result.duration}</span>
              </div>
            </div>
            
            <div className="p-8 space-y-8">
              
              {/* Objectives */}
              <div className="space-y-3">
                <h3 className="flex items-center text-lg font-bold text-[#e31837] uppercase tracking-wide">
                  <Target className="h-5 w-5 mr-2" /> Therapeutic Goals
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                  {result.goals.map((obj, i) => <li key={i}>{obj}</li>)}
                </ul>
              </div>

              {/* Materials */}
              <div className="space-y-3">
                <h3 className="flex items-center text-lg font-bold text-[#e31837] uppercase tracking-wide">
                  <Box className="h-5 w-5 mr-2" /> Needed Materials
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.materials.map((mat, i) => (
                    <span key={i} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm border border-gray-200">{mat}</span>
                  ))}
                </div>
              </div>

              {/* Activities */}
              <div className="space-y-4">
                <h3 className="flex items-center text-lg font-bold text-[#e31837] uppercase tracking-wide">
                  <Book className="h-5 w-5 mr-2" /> Session Flow
                </h3>
                <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
                  {result.steps.map((act, i) => (
                    <div key={i} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-[#004b8d]">{act.name}</h4>
                        <span className="text-xs font-mono bg-blue-50 text-[#004b8d] px-2 py-1 rounded">{act.time}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{act.description}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AiAssistant;