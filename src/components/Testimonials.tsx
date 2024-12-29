import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Bitcoin, Ethereum, Litecoin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Testimonials = () => {
  const { toast } = useToast();
  const cryptoAddress = "openmarketing.crypto";

  const handleCopy = () => {
    navigator.clipboard.writeText(cryptoAddress);
    toast({
      title: "Address copied!",
      description: "The crypto address has been copied to your clipboard.",
    });
  };

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden" id="payments">
      <div className="absolute inset-0 bg-[#F7931A]/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">Crypto Payments</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Send payments directly through our crypto address. Fast, secure, and intermediary-free transactions.
          </p>
          <div className="flex justify-center gap-8 mb-8">
            <Bitcoin className="w-12 h-12 text-[#F7931A] animate-float" />
            <Ethereum className="w-12 h-12 text-[#627EEA] animate-float" style={{ animationDelay: "1s" }} />
            <Bitcoin className="w-12 h-12 text-[#F7931A] animate-float" style={{ animationDelay: "2s" }} />
            <Litecoin className="w-12 h-12 text-[#345D9D] animate-float" style={{ animationDelay: "3s" }} />
            <Bitcoin className="w-12 h-12 text-[#F7931A] animate-float" style={{ animationDelay: "4s" }} />
          </div>
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