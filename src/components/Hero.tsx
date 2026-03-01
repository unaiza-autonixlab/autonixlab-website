import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import FlickerTriangle from "./FlickerTriangle";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-32 sm:pt-36 overflow-hidden">
      <GlitchGrid />

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6">
            We Build Zero-Touch Systems That Replace Your{" "}
            <span className="text-gradient-orange">Operational Chaos</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 font-sans">
            AI automation for marketing agencies ready to scale
          </p>
          <div className="inline-flex flex-col items-center">
            <FlickerTriangle className="mb-2" />
            <a
              href="https://calendar.app.google/vqvbuzMFhMSxbn5a8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-glow inline-block text-sm md:text-base px-6 sm:px-8 py-3 sm:py-4"
            >
              [ Book a Diagnostic Call ]
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const GlitchGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const cellSize = 40;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / cellSize) + 1;
      const rows = Math.ceil(canvas.height / cellSize) + 1;

      // Draw grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
      ctx.lineWidth = 1;

      for (let i = 0; i <= cols; i++) {
        const x = i * cellSize;
        // Occasional horizontal glitch offset
        const glitch = Math.sin(time * 3 + i * 0.5) > 0.95 ? (Math.random() - 0.5) * 8 : 0;
        ctx.beginPath();
        ctx.moveTo(x + glitch, 0);
        ctx.lineTo(x + glitch, canvas.height);
        ctx.stroke();
      }

      for (let j = 0; j <= rows; j++) {
        const y = j * cellSize;
        const glitch = Math.sin(time * 2.5 + j * 0.7) > 0.95 ? (Math.random() - 0.5) * 8 : 0;
        ctx.beginPath();
        ctx.moveTo(0, y + glitch);
        ctx.lineTo(canvas.width, y + glitch);
        ctx.stroke();
      }

      // Orange pulse waves traveling across grid
      for (let i = 0; i < 3; i++) {
        const wavePos = ((time * 0.4 + i * 0.33) % 1) * (cols + 10) - 5;
        for (let j = 0; j <= rows; j++) {
          const col = Math.floor(wavePos);
          if (col >= 0 && col <= cols) {
            const intensity = Math.max(0, 1 - Math.abs(wavePos - col) * 0.5);
            ctx.fillStyle = `rgba(255, 120, 50, ${intensity * 0.12})`;
            ctx.fillRect(col * cellSize, j * cellSize, cellSize, cellSize);
          }
        }
      }

      // Random glitch blocks
      if (Math.random() > 0.96) {
        const gx = Math.floor(Math.random() * cols) * cellSize;
        const gy = Math.floor(Math.random() * rows) * cellSize;
        const gw = (Math.floor(Math.random() * 3) + 1) * cellSize;
        const gh = (Math.floor(Math.random() * 2) + 1) * cellSize;
        ctx.fillStyle = `rgba(255, 120, 50, ${Math.random() * 0.08 + 0.02})`;
        ctx.fillRect(gx, gy, gw, gh);
      }

      // Intersection dots
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const dist = Math.sin(time + i * 0.3 + j * 0.3);
          if (dist > 0.7) {
            ctx.fillStyle = `rgba(255, 120, 50, ${(dist - 0.7) * 0.5})`;
            ctx.beginPath();
            ctx.arc(i * cellSize, j * cellSize, 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default Hero;
