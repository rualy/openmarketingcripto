import { MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center space-y-8">
          <img 
            src="https://openmarketing.group/wp-content/uploads/2023/11/black-logo-768x132.webp"
            alt="OPEN Marketing Group"
            className="h-12 w-auto invert"
          />
          
          <div className="flex space-x-4">
            <a href="https://whatsapp.com/channel/0029VawHMTJJuyALNny3oB0A" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <MessageCircle className="w-5 h-5" />
              </Button>
            </a>
            <a href="https://www.facebook.com/openmarketinggroup" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
            </a>
            <a href="https://www.instagram.com/openmarketinggroup" target="_blank" rel="noopener noreferrer">
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
          
          <p className="text-center text-white/60">
            © OPEN Marketing Group LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;