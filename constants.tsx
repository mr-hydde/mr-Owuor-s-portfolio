
import React from 'react';
import { Project, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Vision', href: '#vision' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 'agri-1',
    category: 'Agriculture',
    title: 'Land Stewardship & Food Systems',
    description: 'Developing sustainable agricultural frameworks focused on regenerative practices and multi-generational food security.',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 're-1',
    category: 'Real Estate',
    title: 'Property Development & Infrastructure',
    description: 'A disciplined approach to the built environment, prioritizing structural integrity and long-term urban utility.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'tech-1',
    category: 'Technology',
    title: 'Applied Systems & Digital Innovation',
    description: 'Engineering scalable software solutions that solve practical logistical and administrative challenges.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'collection-1',
    category: 'Collection',
    title: 'Owuor Collection: Formalwear',
    description: 'Precise tailoring in wool and silk. Strictly limited to suits, ties, polo shirts, and caps.',
    imageUrl: 'images/collection.jpeg'
  },
  {
    id: 'strategy-1',
    category: 'Strategy',
    title: 'Strategic Deal-Making',
    description: 'Facilitating complex partnerships and negotiations through rigorous analysis and clear value-alignment.',
    imageUrl: 'images/sign.jpeg'
  }
];
