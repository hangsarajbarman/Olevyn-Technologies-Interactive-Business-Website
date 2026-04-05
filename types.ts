import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export interface NavLink {
  name: string;
  href: string;
}