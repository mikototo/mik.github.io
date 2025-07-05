import { useEffect, useRef } from "react";

type Shape = {
    x: number;
    y: number;
    size: number;
    vx: number;
    vy: number;
    rotation: number;
    vr: number; // rotation speed
    type: "triangle" | "rect";
    colorA: string;
    colorB: string;
};

const NEON = ["#39ff14", "#00ffff", "#ff10f0", "#f5ff00", "#ff6ec7"];

export default function CanvasBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animId = useRef<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // ---- create shapes -------------------------------------------------
        const rnd = (min: number, max: number) => Math.random() * (max - min) + min;
        const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

        const shapes: Shape[] = Array.from({ length: 50 }, () => ({
            x: rnd(0, canvas.width),
            y: rnd(0, canvas.height),
            size: rnd(40, 100),
            vx: rnd(-0.8, 0.8),
            vy: rnd(-0.8, 0.8),
            rotation: rnd(0, Math.PI * 2),
            vr: rnd(-0.01, 0.01),
            type: Math.random() < 0.5 ? "triangle" : "rect",
            colorA: pick(NEON),
            colorB: pick(NEON),
        }));
        // -------------------------------------------------------------------

        const drawShape = (s: Shape) => {
            ctx.save();
            ctx.translate(s.x, s.y);
            ctx.rotate(s.rotation);

            // fluorescent gradient fill
            const grad = ctx.createLinearGradient(-s.size, -s.size, s.size, s.size);
            grad.addColorStop(0, s.colorA);
            grad.addColorStop(1, s.colorB);
            ctx.fillStyle = grad;

            if (s.type === "rect") {
                ctx.fillRect(-s.size / 2, -s.size / 2, s.size, s.size);
            } else {
                ctx.beginPath();
                ctx.moveTo(0, -s.size / 2);
                ctx.lineTo(s.size / 2, s.size / 2);
                ctx.lineTo(-s.size / 2, s.size / 2);
                ctx.closePath();
                ctx.fill();
            }
            ctx.restore();
        };

        const animate = () => {
            animId.current = requestAnimationFrame(animate);

            // repaint background
            ctx.fillStyle = "#0e0e0e";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // update & draw shapes
            shapes.forEach(s => {
                s.x += s.vx;
                s.y += s.vy;
                s.rotation += s.vr;

                // bounce off edges
                if (s.x < 0 || s.x > canvas.width) s.vx *= -1;
                if (s.y < 0 || s.y > canvas.height) s.vy *= -1;

                drawShape(s);
            });
        };

        animate();

        return () => {
            if (animId.current !== null) cancelAnimationFrame(animId.current);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full z-[1]"
        />
    );
}
