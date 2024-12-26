import { Whatsapp, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[#F7931A]/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">OPEN Marketing Group</h3>
            <p className="text-white/60">
              Redefining business through cryptocurrency and blockchain innovation.
            </p>
            <div className="flex space-x-4">
              <a href="https://whatsapp.com/channel/0029VawHMTJJuyALNny3oB0A" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:bg-white/10">
                  <Whatsapp className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://www.faceb/openmarketinggroup" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:bg-white/10">
                  <Facebook className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://www.facebook.com/openmarketinggroup" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:bg-white/10">
                  <Instagram className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/company/openmarketinggroup" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:bg-white/10">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Crypto Marketing</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Blockchain Solutions</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">DeFi Strategy</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Web3 Integration</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Our Vision</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
              <li><a href="openmarketing.crypto" className="text-white/60 hover:text-white transition-colors">openmarketing.crypto</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Cookies</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Licenses</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-white/60">
            © 2024 OPEN Marketing Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;