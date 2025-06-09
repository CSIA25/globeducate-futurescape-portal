
import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { School, GraduationCap, Book } from 'lucide-react';

export const ServicesSection = () => {
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

  const services = [
    {
      icon: School,
      title: 'School Consulting',
      description: 'Expert guidance for institutional development, curriculum design, and educational strategy planning.',
      features: ['Strategic Planning', 'Curriculum Development', 'Quality Assurance', 'Digital Transformation']
    },
    {
      icon: GraduationCap,
      title: 'Scholarships',
      description: 'Comprehensive scholarship search and application support for students worldwide.',
      features: ['Scholarship Matching', 'Application Support', 'Essay Writing', 'Interview Preparation']
    },
    {
      icon: Book,
      title: 'Training Programs',
      description: 'Professional development and skill-building programs for educators and students.',
      features: ['Leadership Training', 'Technology Skills', 'Career Development', 'Certification Programs']
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-32 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 section-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gold-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to transform educational experiences and create global opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`glass-card group hover:scale-105 transition-all duration-500 section-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center group-hover:animate-float">
                  <service.icon className="w-10 h-10 text-navy-950" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gold-400 rounded-full" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full mt-6 bg-white/10 hover:bg-white/20 border border-white/20 text-foreground">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
