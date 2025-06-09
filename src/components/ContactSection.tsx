
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

export const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20 section-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gold-400 bg-clip-text text-transparent">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take the first step towards educational excellence. Our experts are ready to guide your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="section-fade-in">
            <Card className="glass-card p-8">
              <CardContent className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-navy-950" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">hello@educonsultglobal.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-navy-950" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-navy-950" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Office</h4>
                    <p className="text-muted-foreground">New York, London, Singapore</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="section-fade-in text-center md:text-left">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Start Your Journey Today
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Schedule a free consultation with our education experts and discover how we can help you achieve your goals.
            </p>
            
            <div className="space-y-4">
              <Button className="glow-button text-lg px-12 py-6 w-full md:w-auto">
                Schedule Free Consultation
              </Button>
              <div className="text-sm text-muted-foreground">
                No commitment • 30-minute session • Expert guidance
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
