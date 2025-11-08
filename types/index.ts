export interface Game {
  id: number;
  title: string;
  description: string;
  players: string;
  rating: number;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
  active: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
}