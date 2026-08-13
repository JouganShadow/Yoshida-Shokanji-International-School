/**
 * ============================================================================
 * INTERACTIVE CURSOR TRAIL COMPONENT (ui/CursorTrail.tsx)
 * ============================================================================
 * Generates an isometric 3D voxel particle trail following cursor/touch
 * movement inside the hero section.
 * ============================================================================
 */

import React, { useEffect, useRef } from 'react';

/**
 * Interface defining a 3D isometric voxel particle state.
 */
interface Voxel {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rot: number;
  vRot: number;
  type: 'slate' | 'platinum' | 'maroon' | 'darkSlate';
  alpha: number;
  life: number;
  maxLife: number;
}

export const CursorTrail: React.FC<{ containerRef: React.RefObject<HTMLDivElement | null> }> = ({ containerRef }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const voxels: Voxel[] = [];

    // Resize canvas dynamically to match container element bounds
    const resizeCanvas = () => {
      const container = containerRef.current;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Color palette distribution for spawned voxels
    const voxelTypes: Array<'slate' | 'platinum' | 'maroon' | 'darkSlate'> = [
      'slate',
      'platinum',
      'maroon',
      'darkSlate',
      'slate',
      'maroon',
    ];

    // Spawn new voxels on cursor move
    const addVoxels = (x: number, y: number) => {
      const count = 2; // Number of voxels per move event
      for (let i = 0; i < count; i++) {
        const type = voxelTypes[Math.floor(Math.random() * voxelTypes.length)];
        const maxLife = 35 + Math.random() * 25;
        voxels.push({
          x: x + (Math.random() - 0.5) * 12,
          y: y + (Math.random() - 0.5) * 12,
          vx: (Math.random() - 0.5) * 2.2,
          vy: (Math.random() - 0.5) * 2.2 - 0.8,
          size: 11 + Math.random() * 9,
          rot: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 0.08,
          type,
          alpha: 1,
          life: 0,
          maxLife,
        });
      }
    };

    // Track mouse move coordinates
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        addVoxels(x, y);
      }
    };

    // Track touch move coordinates
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const container = containerRef.current;
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          addVoxels(x, y);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Draw an isometric 3D Voxel block onto canvas context
    const drawVoxel = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      s: number,
      rot: number,
      type: 'slate' | 'platinum' | 'maroon' | 'darkSlate',
      alpha: number
    ) => {
      let topColor = '#94a3b8';
      let leftColor = '#64748b';
      let rightColor = '#475569';

      if (type === 'platinum') {
        topColor = '#f1f5f9';
        leftColor = '#cbd5e1';
        rightColor = '#94a3b8';
      } else if (type === 'maroon') {
        topColor = '#9E1B42';
        leftColor = '#8B1538';
        rightColor = '#580c23';
      } else if (type === 'darkSlate') {
        topColor = '#475569';
        leftColor = '#334155';
        rightColor = '#1e293b';
      }

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.globalAlpha = Math.max(0, alpha);

      const h = s * 0.86;

      // Isometric Top Face
      ctx.fillStyle = topColor;
      ctx.beginPath();
      ctx.moveTo(0, -h / 2);
      ctx.lineTo(s / 2, 0);
      ctx.lineTo(0, h / 2);
      ctx.lineTo(-s / 2, 0);
      ctx.closePath();
      ctx.fill();

      // Isometric Left Face
      ctx.fillStyle = leftColor;
      ctx.beginPath();
      ctx.moveTo(-s / 2, 0);
      ctx.lineTo(0, h / 2);
      ctx.lineTo(0, h / 2 + h / 2);
      ctx.lineTo(-s / 2, h / 2);
      ctx.closePath();
      ctx.fill();

      // Isometric Right Face
      ctx.fillStyle = rightColor;
      ctx.beginPath();
      ctx.moveTo(0, h / 2);
      ctx.lineTo(s / 2, 0);
      ctx.lineTo(s / 2, h / 2);
      ctx.lineTo(0, h / 2 + h / 2);
      ctx.closePath();
      ctx.fill();

      // Edge border stroke
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.restore();
    };

    // Render frame loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'source-over';

      for (let i = voxels.length - 1; i >= 0; i--) {
        const v = voxels[i];
        v.life++;
        v.x += v.vx;
        v.y += v.vy;
        v.rot += v.vRot;
        v.alpha = 1 - v.life / v.maxLife;
        v.size *= 0.985;

        if (v.alpha <= 0 || v.size <= 2) {
          voxels.splice(i, 1);
          continue;
        }

        drawVoxel(ctx, v.x, v.y, v.size, v.rot, v.type, v.alpha);
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animId);
    };
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-20"
      style={{ opacity: 0.95 }}
    />
  );
};
