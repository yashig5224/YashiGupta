import { Home, User, Briefcase, Route, Mail } from 'lucide-react';
import { NavBar } from '@/components/ui/tubelight-navbar';

const navItems = [
  { name: 'Home', url: '#home', icon: Home },
  { name: 'About', url: '#about', icon: User },
  { name: 'Projects', url: '#projects', icon: Briefcase },
  { name: 'Journey', url: '#journey', icon: Route },
  { name: 'Contact', url: '#contact', icon: Mail },
];

const Navbar = () => {
  return <NavBar items={navItems} />;
};

export default Navbar;
