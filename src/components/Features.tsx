import { Card } from "@/components/ui/card";
import { Bitcoin, Globe, Network } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Bitcoin className="w-6 h-6 text-white" />,
      title: "Crypto Payments",
      description: "Start accepting cryptocurrency payments seamlessly, reducing transaction costs, eliminating chargebacks, and appealing to tech-savvy customers."
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Global Transactions Without Borders",
      description: "Break free from traditional banking constraints—conduct international transactions quickly, securely, and without the high fees associated with traditional payment systems."
    },
    {
      icon: <Network className="w-6 h-6 text-white" />,
      title: "Secure & Transparent Operations",
      description: "Leverage blockchain technology for unmatched transparency and security, building trust with clients while protecting your business from fraud."
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden" id="business">
      <div className="absolute inset-0 bg-[#F7931A]/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              TRANSFORM YOUR BUSINESS WITH CRYPTO
            </h2>
            <p className="text-xl text-white/60">
              Embrace the future of commerce by integrating cryptocurrency and blockchain tools, unlocking new opportunities for growth and efficiency in the digital economy.
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
