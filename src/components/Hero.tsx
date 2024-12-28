import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight order-1">
            Crypto & Innovation
          </h1>
          
          <div className="relative order-2 md:hidden w-full mb-8">
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
            Empowering businesses with cryptocurrency solutions and blockchain technology. We make digital transformation simple and accessible.
          </p>
          
          <div className="pt-4 order-4">
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