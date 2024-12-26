import { Card } from "@/components/ui/card";
import { Bitcoin, Globe, Network } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Bitcoin className="w-6 h-6 text-white" />,
      title: "Crypto Payments",
      description: "Accept payments in cryptocurrencies through our unique address, OpenMarketing.crypto"
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Global Reach",
      description: "Connect with clients worldwide through decentralized technologies"
    },
    {
      icon: <Network className="w-6 h-6 text-white" />,
      title: "Innovation",
      description: "Leverage open-source innovation and blockchain technology for your business"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden" id="features">
      <div className="absolute inset-0 bg-[#F7931A]/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Revolutionizing Business Through Crypto
            </h2>
            <p className="text-xl text-white/60">
              We help businesses implement cryptocurrency and blockchain tools into their operations, optimizing processes and enhancing efficiency for the digital era.
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

export default Features;