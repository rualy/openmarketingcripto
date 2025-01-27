import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Download = () => {
  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            CONTACT US
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            For more information and direct contact, visit our official website where you'll find all the details about our services and communication channels.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://openmarketing.group/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
                Visit Website
                <ExternalLink className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;