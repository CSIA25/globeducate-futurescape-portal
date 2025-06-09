
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'University Dean',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face',
      content: 'EduConsult Global transformed our institution with their innovative approach. The strategic guidance was exceptional.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Scholarship Recipient',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      content: 'Thanks to their scholarship program, I achieved my dream of studying abroad. The support was comprehensive.',
      rating: 5
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Education Director',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      content: 'The training programs elevated our team\'s capabilities. Truly world-class educational consulting.',
      rating: 5
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.section-fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-32 px-6 bg-gradient-to-b from-transparent to-navy-950/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gold-400 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted by institutions and students worldwide
          </p>
        </div>

        <div className="relative section-fade-in">
          <Card className="glass-card overflow-hidden">
            <CardContent className="p-12">
              <div className="text-center">
                <img 
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 border-4 border-gold-400/50"
                />
                
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-gold-400 text-2xl">★</span>
                  ))}
                </div>
                
                <blockquote className="text-2xl font-medium text-foreground mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gold-400 font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-card p-3 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-card p-3 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-gold-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
