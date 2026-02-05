
import React from 'react';
import {
  Code2,
  Layers,
  Layout,
  Zap,
  Globe,
  Monitor,
  Smartphone,
  Server,
  Palette
} from 'lucide-react';
import { Skill, Project, TimelineItem, Article } from './types';

export const SKILLS: Skill[] = [
  { name: 'Interactive UI Development', level: 95, icon: <Layout className="w-5 h-5" /> },
  { name: 'Responsive Web Design', level: 90, icon: <Smartphone className="w-5 h-5" /> },
  { name: 'UI/UX Implementation', level: 85, icon: <Palette className="w-5 h-5" /> },
  { name: 'API & Backend Integration', level: 88, icon: <Server className="w-5 h-5" /> },
  { name: 'Performance Optimization', level: 80, icon: <Zap className="w-5 h-5" /> },
  { name: 'Architecture & Wireframing', level: 82, icon: <Layers className="w-5 h-5" /> },
];

export const PROJECTS: Project[] = [
  {
    title: 'Point of Sale (POS) Web App',
    description: 'A comprehensive web-based management system for retail transactions and inventory tracking.',
    category: 'Web Application',
    image: 'https://picsum.photos/seed/pos/800/600'
  },
  {
    title: 'Class Attendance App',
    description: 'Digital attendance system for educational institutions featuring real-time reporting.',
    category: 'Web Application',
    image: 'https://picsum.photos/seed/absensi/800/600'
  },
  {
    title: 'Company Profile Website',
    description: 'Modern, high-converting corporate website with clean aesthetics and fast performance.',
    category: 'Landing Page',
    image: '/images/sindigilive.gif'
  },
  {
    title: 'Personal Portfolio',
    description: 'A showcase of skills and projects designed with a focus on personal branding.',
    category: 'Web Application',
    image: 'https://picsum.photos/seed/portfolio/800/600'
  }
];

export const EDUCATION: TimelineItem[] = [
  {
    year: '2021 - 2024',
    title: 'Vocational High School (SMK)',
    subtitle: 'Software Engineering (RPL)',
    description: 'Focused on core programming principles, web development, and software architecture.'
  }
];

export const EXPERIENCE: TimelineItem[] = [
  {
    year: '2024 - Present',
    title: 'Front End Developer',
    subtitle: 'IT Technology Company',
    description: '2 years of experience building modern web applications, integrating APIs, and ensuring high-quality UI/UX standards.'
  }
];

export const ARTICLES: Article[] = [
  {
    title: 'Cara Memahami TPS (Technology Performance Strategy)',
    summary: 'An in-depth look at understanding performance metrics in modern web environments.',
    link: 'https://apmgeeks.com/id/artikel/19-application-performance-monitoring/651-mengenal-tps-transactions-per-second-ukuran-kecepatan-transaksi-dalam-sistem.html',
    date: '2025'
  },
  {
    title: 'Pengenalan Artificial Intelligence (AI)',
    summary: 'A beginners guide to understanding AI concepts and their practical applications in development.',
    link: 'https://apmgeeks.com/id/artikel/653-mengenal-ai-definisi-dan-aplikasinya-di-kehidupan-sehari-hari.html',
    date: '2025'
  }
];
