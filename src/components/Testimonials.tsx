import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Testimonials = () => {
  const { toast } = useToast();
  const cryptoAddress = "OpenMarketing.crypto";

  const handleCopy = () => {
    navigator.clipboard.writeText(cryptoAddress);
    toast({
      title: "Address copied!",
      description: "The crypto address has been copied to your clipboard.",
    });
  };

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We accept payments through cryptocurrencies using our unique address, OpenMarketing.crypto, eliminating intermediaries and making transactions faster and more accessible.
          </p>
          <Card className="p-6 max-w-lg mx-auto glass-effect">
            <p className="font-mono text-xl text-white mb-4">{cryptoAddress}</p>
            <Button 
              onClick={handleCopy}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy Address
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;