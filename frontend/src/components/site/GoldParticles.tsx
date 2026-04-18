import { useEffect, useRef } from "react";

// Luxury gold dust — diamonds, circles, halos, twinkle stars
export const GoldParticles = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    let w = 0, h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Shape = "circle" | "diamond" | "star";
    type P = {
      x: number; y: number; r: number;
      vy: number; vx: number; a: number;
      tw: number; phase: number; shape: Shape; halo: boolean;
    };
    let parts: P[] = [];

    const shapes: Shape[] = ["circle", "diamond", "star"];

    const init = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(160, Math.floor((w * h) / 7000));
      parts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2.2 + 0.3,
        vy: -(Math.random() * 0.35 + 0.08),
        vx: (Math.random() - 0.5) * 0.18,
        a: Math.random() * 0.55 + 0.1,
        tw: Math.random() * 0.025 + 0.004,
        phase: Math.random() * Math.PI * 2,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        halo: Math.random() < 0.12,
      }));
    };

    const drawDiamond = (x: number, y: number, r: number) => {
      ctx.beginPath();
      ctx.moveTo(x, y - r);
      ctx.lineTo(x + r * 0.6, y);
      ctx.lineTo(x, y + r);
      ctx.lineTo(x - r * 0.6, y);
      ctx.closePath();
      ctx.fill();
    };

    const drawStar = (x: number, y: number, r: number, t: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(t * 0.0008);
      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        const angle = (i / 4) * Math.PI * 2;
        const outer = r * 1.5;
        const inner = r * 0.4;
        ctx.moveTo(Math.cos(angle) * outer, Math.sin(angle) * outer);
        ctx.lineTo(Math.cos(angle + Math.PI / 4) * inner, Math.sin(angle + Math.PI / 4) * inner);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      const t = performance.now();

      for (const p of parts) {
        p.y += p.vy;
        p.x += p.vx;
        const flicker = Math.sin(t * p.tw + p.phase) * 0.22;
        const alpha = Math.min(0.85, Math.max(0.04, p.a + flicker));

        if (p.y < -12) { p.y = h + 12; p.x = Math.random() * w; }
        if (p.x < -12) p.x = w + 12;
        if (p.x > w + 12) p.x = -12;

        // Halo glow for select particles
        if (p.halo && p.r > 1.2) {
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
          grad.addColorStop(0, `rgba(232,201,106,${alpha * 0.5})`);
          grad.addColorStop(1, "rgba(232,201,106,0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.r > 1.4 ? "rgb(255, 228, 130)" : "rgb(232, 201, 106)";

        if (p.shape === "circle") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === "diamond") {
          drawDiamond(p.x, p.y, p.r);
        } else {
          drawStar(p.x, p.y, p.r, t);
        }
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    };

    init();
    tick();
    const onResize = () => init();
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};
