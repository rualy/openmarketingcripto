import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const DownloadEs = () => {
  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Contáctanos
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Para más información y contacto directo, visita nuestro sitio web oficial donde encontrarás todos los detalles sobre nuestros servicios y canales de comunicación.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://openmarketing.group/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
                Visitar Sitio Web
                <ExternalLink className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadEs;