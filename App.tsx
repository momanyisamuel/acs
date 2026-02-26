import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programs from './pages/Programs';
import About from './pages/About';
import Contact from './pages/Contact';
import {
  CommunityInclusionServices,
  SupportedEmployment,
  CommunityBasedSupports,
  IndividualSupports,
  OccupationalTherapy,
} from './pages/services';

// Generic placeholder for pages not fully implemented to keep the router clean
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-300 mb-4">{title}</h1>
      <p className="text-gray-500">Coming soon</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<PlaceholderPage title="Resources" />} />
            <Route path="/careers" element={<PlaceholderPage title="Careers" />} />
            {/* Service Detail Pages */}
            <Route path="/services/community-inclusion" element={<CommunityInclusionServices />} />
            <Route path="/services/supported-employment" element={<SupportedEmployment />} />
            <Route path="/services/community-based-supports" element={<CommunityBasedSupports />} />
            <Route path="/services/individual-supports" element={<IndividualSupports />} />
            <Route path="/services/occupational-therapy" element={<OccupationalTherapy />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;