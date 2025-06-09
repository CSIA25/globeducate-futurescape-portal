
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export const StickyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glass-card border-t border-white/20 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1">
          <p className="text-foreground font-medium">
            <span className="text-gold-400">Limited Time:</span> Get 50% off your first consultation session
          </p>
          <p className="text-sm text-muted-foreground">
            Transform your educational journey today with expert guidance
          </p>
        </div>
        
        <div className="flex items-center space-x-4 ml-6">
          <Button className="glow-button animate-glow">
            Claim Offer
          </Button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
