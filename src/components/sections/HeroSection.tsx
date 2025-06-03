import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(Hero.webp)",
            filter: "brightness(0.7)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-black/40" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
            Fresh. Local. <br />
            <span className="text-green-400">Grown Just For You.</span>
          </h1>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Sustainable, hydroponic produce delivered weekly to your doorstep,
            straight from our urban farms to your table.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              className="animate-bounce-subtle"
            >
              Build Your Veggie Box
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white text-white hover:bg-white/20"
            >
              Learn More
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-white">
              <span className="block text-2xl font-bold">100%</span>
              <span className="text-sm text-white/80">Pesticide Free</span>
            </div>

            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-white">
              <span className="block text-2xl font-bold">24h</span>
              <span className="text-sm text-white/80">From Farm to Table</span>
            </div>

            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-white">
              <span className="block text-2xl font-bold">90%</span>
              <span className="text-sm text-white/80">Less Water Used</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto fill-white"
        >
          <path d="M0,64L60,53.3C120,43,240,21,360,32C480,43,600,85,720,96C840,107,960,85,1080,69.3C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
