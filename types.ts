export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceCardProps {
  title: string;
  image: string;
  link: string;
}

export interface ActivityPlanResponse {
  title: string;
  targetGroup: string;
  duration: string;
  goals: string[];
  materials: string[];
  steps: {
    name: string;
    description: string;
    time: string;
  }[];
}