
export interface Project {
  id: string;
  category: 'Agriculture' | 'Real Estate' | 'Technology' | 'Collection' | 'Strategy';
  title: string;
  description: string;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}
