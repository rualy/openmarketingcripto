import { Card } from "@/components/ui/card";
import { Bitcoin, Globe, Network } from "lucide-react";

const FeaturesEs = () => {
  const features = [
    {
      icon: <Bitcoin className="w-6 h-6 text-white" />,
      title: "Pagos con Criptomonedas",
      description: "Comienza a aceptar pagos con criptomonedas sin problemas, reduciendo costos de transacción, eliminando contracargos y atrayendo a clientes tecnológicamente avanzados."
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Transacciones Globales Sin Fronteras",
      description: "Libérate de las restricciones bancarias tradicionales: realiza transacciones internacionales de manera rápida, segura y sin las altas comisiones asociadas con los sistemas de pago tradicionales."
    },
    {
      icon: <Network className="w-6 h-6 text-white" />,
      title: "Operaciones Seguras y Transparentes",
      description: "Aprovecha la tecnología blockchain para una transparencia y seguridad sin igual, construyendo confianza con los clientes mientras proteges tu negocio del fraude."
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden" id="business">
      <div className="absolute inset-0 bg-[#F7931A]/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              TRANSFORMA TU NEGOCIO CON CRIPTO
            </h2>
            <p className="text-xl text-white/60">
              Abraza el futuro del comercio integrando herramientas de criptomonedas y blockchain, desbloqueando nuevas oportunidades de crecimiento y eficiencia en la economía digital.
            </p>
          </div>
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover-lift glass-effect flex items-start gap-4 group transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F7931A]/10 flex items-center justify-center group-hover:bg-[#F7931A]/20 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesEs;
