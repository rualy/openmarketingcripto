import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 bg-background" id="start">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight order-1">
            We love crypto & Innovation
          </h1>
          
          <div className="relative order-2 md:hidden w-full">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://i.ibb.co/JK2BRMh/cryptocurrency.webp"
                alt="Crypto Marketing"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-[#0737b0]/20 rounded-full blur-3xl"></div>
          </div>

          <p className="text-lg text-white/80 max-w-xl order-3">
            En Open Marketing Group, abrazamos las tecnologías que están revolucionando el mundo: criptomonedas, descentralización y el poder del código abierto. Creemos que estas innovaciones no solo transforman la forma en que hacemos negocios, sino que también promueven un entorno más justo, transparente y colaborativo. Nos dedicamos a ayudar a las empresas a implementar estas herramientas en sus operaciones, optimizando procesos, mejorando su eficiencia y preparándolas para sobresalir en la era digital.
          </p>
          
          <div className="pt-8 order-4">
            <a 
              href="https://openmarketing.group/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="px-8 py-6 text-lg bg-[#0737b0] text-white hover:bg-[#0737b0]/90">
                Get Started
              </Button>
            </a>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://i.ibb.co/JK2BRMh/cryptocurrency.webp"
              alt="Crypto Marketing"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-[#0737b0]/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;