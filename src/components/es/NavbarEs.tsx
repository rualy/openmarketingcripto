import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NavbarEs = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <img 
            src="https://openmarketing.group/wp-content/uploads/2023/11/black-logo-768x132.webp"
            alt="OPEN Marketing Group"
            className="h-8 md:h-10 w-auto invert"
          />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#start" className="text-white/80 hover:text-white transition-colors">Inicio</a>
          <a href="#business" className="text-white/80 hover:text-white transition-colors">Negocios</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contacto</a>
          <a href="#payments" className="text-white/80 hover:text-white transition-colors">Pagos</a>
          <Link to="/" className="text-white/80 hover:text-white transition-colors">EN</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarEs;