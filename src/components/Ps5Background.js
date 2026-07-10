import { useEffect, useRef } from "react";

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function drawBackdrop(ctx, width, height) {
  const bg = ctx.createLinearGradient(0, 0, width, height);
  bg.addColorStop(0, "#161b24");
  bg.addColorStop(0.4, "#111620");
  bg.addColorStop(1, "#0d1117");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);
}

function drawLightBeam(ctx, width, height) {
  ctx.save();
  const originX = width * 0.08;
  const originY = -height * 0.1;
  ctx.translate(originX, originY);
  ctx.rotate((16 * Math.PI) / 180);
  ctx.scale(1, 2.4);
  const radius = width * 0.5;
  const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
  grad.addColorStop(0, "rgba(255, 214, 165, 0.32)");
  grad.addColorStop(0.35, "rgba(255, 200, 140, 0.14)");
  grad.addColorStop(1, "rgba(255, 200, 140, 0)");
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function particleColor(hue, alpha) {
  const c1 = [255, 244, 222];
  const c2 = [210, 154, 72];
  const r = Math.round(c1[0] + (c2[0] - c1[0]) * hue);
  const g = Math.round(c1[1] + (c2[1] - c1[1]) * hue);
  const b = Math.round(c1[2] + (c2[2] - c1[2]) * hue);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function makeParticles(width, height) {
  const particles = [];

 
  const bandCount = 500;
  for (let i = 0; i < bandCount; i++) {
    const t = i / bandCount;
    const bandX = width * (0.12 + t * 0.88);
    const waveY = height * (0.68 - Math.sin(t * Math.PI * 1.1) * 0.12);
    const x = bandX + rand(-60, 60);
    const y = waveY + rand(-70, 100) + t * 50;
    const big = Math.random() < 0.42;
    const size = rand(0.6, 2.2) * (0.6 + t * 1.3);
    particles.push({
      x,
      y,
      r: big ? size * rand(1.4, 2.2) : size,
      alpha: rand(0.25, 0.9),
      hue: rand(0, 1),
      driftX: rand(-0.06, 0.06),
      driftY: rand(-0.05, -0.11),
      baseY: y,
    });
  }

  // large foreground bokeh clustered on the left side
  const leftCount = 70;
  for (let i = 0; i < leftCount; i++) {
    const x = rand(-width * 0.05, width * 0.35);
    const y = rand(height * 0.35, height * 1.05);
    particles.push({
      x,
      y,
      r: rand(1, 3.5),
      alpha: rand(0.1, 0.4),
      hue: rand(0, 1),
      driftX: rand(-0.02, 0.02),
      driftY: rand(-0.015, -0.03),
      baseY: y,
    });
  }

  // small bokeh accent on the top-right
  const topRightCount = 25;
  for (let i = 0; i < topRightCount; i++) {
    const x = rand(width * 0.65, width * 1.05);
    const y = rand(-height * 0.05, height * 0.35);
    particles.push({
      x,
      y,
      r: rand(1, 3),
      alpha: rand(0.15, 0.45),
      hue: rand(0, 1),
      driftX: rand(-0.02, 0.02),
      driftY: rand(-0.015, -0.03),
      baseY: y,
    });
  }

  // sparse distant sharp specks across the upper-right dark field
  const starCount = 90;
  for (let i = 0; i < starCount; i++) {
    const x = rand(width * 0.3, width);
    const y = rand(0, height);
    particles.push({
      x,
      y,
      r: rand(0.4, 1.1),
      alpha: rand(0.15, 0.55),
      hue: rand(0, 0.6),
      driftX: rand(-0.032, 0.032),
      driftY: rand(-0.032, -0.064),
      baseY: y,
    });
  }

  return particles;
}

function drawParticle(ctx, p) {
  ctx.fillStyle = particleColor(p.hue, p.alpha);
  ctx.beginPath();
  ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
  ctx.fill();
}

export default function Ps5Background({ className = "" }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const sizeRef = useRef({ width: 0, height: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sizeRef.current = { width, height };
      particlesRef.current = makeParticles(width, height);
    }

    function frame() {
      const { width, height } = sizeRef.current;
      drawBackdrop(ctx, width, height);
      drawLightBeam(ctx, width, height);
      for (const p of particlesRef.current) {
        p.x += p.driftX;
        p.y += p.driftY;
        if (p.y < -20) p.y = height + 20;
        drawParticle(ctx, p);
      }
      rafRef.current = requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener("resize", resize);
    frame();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 -z-10 h-full w-full ${className}`}
    />
  );
}
