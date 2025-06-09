
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Success Stories', href: '#testimonials' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'School Consulting', href: '#' },
    { name: 'Scholarship Search', href: '#' },
    { name: 'Application Support', href: '#' },
    { name: 'Training Programs', href: '#' },
    { name: 'Digital Learning', href: '#' },
    { name: 'Strategic Planning', href: '#' }
  ];

  const socialIcons = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-navy-950 border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center">
                <span className="text-navy-950 font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold text-foreground">EduConsult Global</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Transforming education worldwide through innovative consulting, 
              scholarship guidance, and comprehensive training programs.
            </p>
            
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 glass-card flex items-center justify-center hover:bg-gold-400/20 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="text-muted-foreground hover:text-gold-400 transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-400" />
                <span className="text-muted-foreground">hello@educonsultglobal.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-400" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gold-400" />
                <span className="text-muted-foreground">Global Offices</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 EduConsult Global. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-gold-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-gold-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-gold-400 text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
