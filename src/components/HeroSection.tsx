
import { Button } from '@/components/ui/button';
import { ThreeDScene } from '@/components/ThreeDScene';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background Scene */}
      <div className="absolute inset-0 z-0">
        <ThreeDScene />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80 z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gold-200 to-gold-400 bg-clip-text text-transparent leading-tight">
            Empowering Global Education with Innovation
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 font-medium">
            Consulting. Scholarships. Transformation.
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your educational journey with our comprehensive consulting services, 
            scholarship guidance, and innovative training programs designed for global success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="glow-button text-lg px-12 py-6 animate-glow">
              Get Started Today
            </Button>
            <Button variant="outline" className="glass-card text-lg px-8 py-6 border-white/20 hover:bg-white/10">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
