
export interface Skill {
  name: string;
  level: number;
  icon?: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  category: string;
  image: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description?: string;
}

export interface Article {
  title: string;
  summary: string;
  link: string;
  date: string;
}
