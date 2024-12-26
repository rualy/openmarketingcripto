import { Button } from "@/components/ui/button";
import { Bitcoin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-white">OPEN Marketing Group</div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">Services</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          <Button className="bg-[#F7931A] text-white hover:bg-[#F7931A]/90">
            Contact Us
            <Bitcoin className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;