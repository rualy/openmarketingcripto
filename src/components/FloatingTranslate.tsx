import { Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

const FloatingTranslate = () => {
  const location = useLocation();
  const isSpanish = location.pathname.includes("/es");

  return (
    <Link to={isSpanish ? "/" : "/es"}>
      <Button
        variant="outline"
        size="icon"
        className="fixed right-4 bottom-20 z-50 rounded-full w-12 h-12 glass-effect hover:scale-110 transition-transform duration-200 flex items-center justify-center gap-1"
      >
        <Globe className="h-5 w-5 text-white" />
        <span className="text-xs font-bold text-white">{isSpanish ? "EN" : "ES"}</span>
      </Button>
    </Link>
  );
};

export default FloatingTranslate;