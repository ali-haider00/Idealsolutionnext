'use client';

import { useEffect, useRef } from 'react';

interface SparklesProps {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}

export default function SparklesCore({ 
  id = 'sparkles',
  background = 'transparent',
  minSize = 0.6,
  maxSize = 1.4,
  particleDensity = 500,
  className = '',
  particleColor = 'var(--primary-500)'
}: SparklesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create particles
    for (let i = 0; i < particleDensity; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full';
      
      const size = Math.random() * (maxSize - minSize) + minSize;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = particleColor;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.opacity = String(Math.random() * 0.8 + 0.2);
      
      // Add animation
      particle.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
      
      container.appendChild(particle);
    }

    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes twinkle {
        0%, 100% { opacity: inherit; }
        50% { opacity: 0.3; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [particleDensity, minSize, maxSize, particleColor]);

  return (
    <div
      ref={containerRef}
      id={id}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ background }}
    />
  );
}
