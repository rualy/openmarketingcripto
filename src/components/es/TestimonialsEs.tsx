import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Wallet } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const TestimonialsEs = () => {
  const { toast } = useToast();
  const cryptoAddress = "openmarketing.crypto";

  const handleCopy = () => {
    navigator.clipboard.writeText(cryptoAddress);
    toast({
      title: "¡Dirección copiada!",
      description: "La dirección crypto ha sido copiada al portapapeles.",
    });
  };

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden" id="payments">
      <div className="absolute inset-0 bg-[#F7931A]/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">Pagos con Criptomonedas</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Envía pagos directamente a través de nuestra dirección crypto. Transacciones rápidas, seguras y sin intermediarios.
          </p>
          <Card className="p-6 max-w-lg mx-auto glass-effect">
            <p className="font-mono text-xl text-white mb-4">{cryptoAddress}</p>
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={handleCopy}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copiar Dirección
              </Button>
              <Button 
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                <Wallet className="w-4 h-4 mr-2" />
                Conectar Billetera
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsEs;