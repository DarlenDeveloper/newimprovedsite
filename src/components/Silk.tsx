import React, { useEffect, useRef } from 'react';

export interface SilkProps {
  speed?: number;
  scale?: number;
  color?: string;
  noiseIntensity?: number;
  rotation?: number;
}

const Silk: React.FC<SilkProps> = ({
  speed = 5,
  scale = 1,
  color = '#f5f5f5',
  noiseIntensity = 1.5,
  rotation = 0
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationId: number;
    let time = 0;

    // Color palette for AI/Tech theme
    const colors = [
      { r: 245, g: 245, b: 245 }, // Light background
      { r: 123, g: 116, b: 129 }, // Purple accent
      { r: 100, g: 150, b: 200 }, // Blue
      { r: 150, g: 100, b: 200 }, // Violet
    ];

    const drawIcon = (x: number, y: number, size: number, type: number, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.translate(x, y);
      ctx.rotate(rotation + time * 0.1);

      switch (type % 4) {
        case 0: // Circuit pattern
          ctx.strokeStyle = `rgba(123, 116, 129, 0.3)`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(-size / 2, -size / 2);
          ctx.lineTo(size / 2, -size / 2);
          ctx.lineTo(size / 2, size / 2);
          ctx.lineTo(-size / 2, size / 2);
          ctx.closePath();
          ctx.stroke();
          for (let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.arc(-size / 2 + (i + 1) * (size / 4), 0, 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(100, 150, 200, 0.5)`;
            ctx.fill();
          }
          break;
        case 1: // AI brain/neural
          ctx.fillStyle = `rgba(150, 100, 200, 0.3)`;
          ctx.beginPath();
          ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
          ctx.fill();
          for (let i = 0; i < 5; i++) {
            const angle = (i / 5) * Math.PI * 2;
            ctx.beginPath();
            ctx.arc(
              Math.cos(angle) * (size / 3),
              Math.sin(angle) * (size / 3),
              3,
              0,
              Math.PI * 2
            );
            ctx.fillStyle = `rgba(100, 150, 200, 0.6)`;
            ctx.fill();
          }
          break;
        case 2: // Tech dots
          ctx.fillStyle = `rgba(123, 116, 129, 0.4)`;
          for (let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2;
            ctx.beginPath();
            ctx.arc(
              Math.cos(angle) * size,
              Math.sin(angle) * size,
              4,
              0,
              Math.PI * 2
            );
            ctx.fill();
          }
          break;
        case 3: // Wave pattern
          ctx.strokeStyle = `rgba(100, 150, 200, 0.3)`;
          ctx.lineWidth = 2;
          for (let i = 0; i < 3; i++) {
            ctx.beginPath();
            for (let j = 0; j < 20; j++) {
              const x = (-size / 2) + (j / 20) * size;
              const y = Math.sin(j * 0.3 + time) * (size / 6) + (i - 1) * (size / 4);
              if (j === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.stroke();
          }
          break;
      }

      ctx.restore();
    };

    const animate = () => {
      time += 0.0005 * speed;

      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#f5f5f5');
      gradient.addColorStop(0.5, '#fafafa');
      gradient.addColorStop(1, '#f0f0f0');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animated silk blobs
      for (let i = 0; i < 8; i++) {
        const x = (Math.sin(time * 0.3 + i) * canvas.width) / 2.5 + canvas.width / 2;
        const y = (Math.cos(time * 0.2 + i * 0.7) * canvas.height) / 2.5 + canvas.height / 2;
        const size = Math.sin(time * 0.1 + i) * 80 + 120;
        const colorIdx = i % colors.length;
        const col = colors[colorIdx];

        ctx.fillStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${0.08 * noiseIntensity})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Tech icons scattered
      for (let i = 0; i < 12; i++) {
        const x = (Math.sin(time * 0.15 + i * 0.5) * canvas.width) / 1.8 + canvas.width / 2;
        const y = (Math.cos(time * 0.1 + i * 0.3) * canvas.height) / 1.8 + canvas.height / 2;
        const size = 20 + Math.sin(time + i) * 10;
        const opacity = 0.15 + Math.sin(time * 0.2 + i) * 0.1;

        drawIcon(x, y, size, i, opacity);
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [speed, color, noiseIntensity, rotation]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
};

export default Silk;
