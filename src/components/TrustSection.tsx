
import { useEffect, useRef } from 'react';

export const TrustSection = () => {
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

  const stats = [
    { number: '500+', label: 'Institutions Served' },
    { number: '10,000+', label: 'Students Guided' },
    { number: '50+', label: 'Countries Reached' },
    { number: '95%', label: 'Success Rate' }
  ];

  const partners = [
    'Harvard University',
    'Oxford University',
    'Stanford University',
    'MIT',
    'Cambridge University',
    'Yale University'
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-gradient-to-b from-navy-950/50 to-transparent">
      <div className="container mx-auto max-w-7xl">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 section-fade-in">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="text-center mb-16 section-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
            Trusted by Leading Institutions
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={partner} 
                className="glass-card p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="text-sm font-medium text-muted-foreground">
                  {partner}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center section-fade-in">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="glass-card px-6 py-3">
              <span className="text-sm font-medium text-gold-400">ISO 9001 Certified</span>
            </div>
            <div className="glass-card px-6 py-3">
              <span className="text-sm font-medium text-gold-400">NAFSA Member</span>
            </div>
            <div className="glass-card px-6 py-3">
              <span className="text-sm font-medium text-gold-400">AIRC Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
