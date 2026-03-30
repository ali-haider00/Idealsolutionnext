'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface GlobeProps {
  scale?: number;
  baseColor?: [number, number, number];
  markerColor?: [number, number, number];
  glowColor?: [number, number, number];
  className?: string;
}

export default function Globe({ 
  scale = 1, 
  baseColor = [0.07, 0.31, 0.64], 
  markerColor = [0.18, 0.62, 0.31], 
  glowColor = [0.23, 0.51, 0.94],
  className = ''
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.3 * scale;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw glow
    const glowGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
    glowGradient.addColorStop(0, `rgba(${glowColor.join(',')}, 0.3)`);
    glowGradient.addColorStop(1, `rgba(${glowColor.join(',')}, 0)`);
    ctx.fillStyle = glowGradient;
    ctx.fillRect(0, 0, width, height);

    // Draw globe circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    const globeGradient = ctx.createRadialGradient(centerX - radius/3, centerY - radius/3, 0, centerX, centerY, radius);
    globeGradient.addColorStop(0, `rgba(${baseColor.join(',')}, 0.8)`);
    globeGradient.addColorStop(1, `rgba(${baseColor.join(',')}, 0.4)`);
    ctx.fillStyle = globeGradient;
    ctx.fill();

    // Draw marker
    ctx.beginPath();
    ctx.arc(centerX + radius * 0.3, centerY - radius * 0.2, radius * 0.1, 0, Math.PI * 2);
    ctx.fillStyle = `rgb(${markerColor.join(',')})`;
    ctx.fill();

    // Draw grid lines
    ctx.strokeStyle = `rgba(${baseColor.join(',')}, 0.2)`;
    ctx.lineWidth = 1;
    
    // Horizontal lines
    for (let i = 0; i < 6; i++) {
      const y = centerY - radius + (radius * 2 * i) / 5;
      ctx.beginPath();
      ctx.moveTo(centerX - radius, y);
      ctx.lineTo(centerX + radius, y);
      ctx.stroke();
    }

    // Vertical lines
    for (let i = 0; i < 8; i++) {
      const angle = (Math.PI * 2 * i) / 8;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

  }, [scale, baseColor, markerColor, glowColor]);

  return (
    <canvas
      ref={canvasRef}
      width={200}
      height={200}
      className={className}
      style={{ width: '200px', height: '200px' }}
    />
  );
}
