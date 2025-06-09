
import { useEffect, useRef } from 'react';

export const ThreeDScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Create animated background with CSS-only solution for now
    const scene = mountRef.current;
    
    // Create floating particles
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-gold-400/20';
      particle.style.width = Math.random() * 4 + 2 + 'px';
      particle.style.height = particle.style.width;
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
      particle.style.animationDelay = Math.random() * 4 + 's';
      scene.appendChild(particle);
    }

    // Create grid pattern
    const grid = document.createElement('div');
    grid.className = 'absolute inset-0 opacity-10';
    grid.style.backgroundImage = `
      linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)
    `;
    grid.style.backgroundSize = '50px 50px';
    scene.appendChild(grid);

    return () => {
      if (scene) {
        scene.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-full relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800"
    >
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-gold-400/5 via-transparent to-transparent" />
      
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl animate-pulse" />
    </div>
  );
};
