import { useEffect, useRef } from "react";

export default function CanvasBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Example drawing logic – customize as needed or copy your scripts.js logic here
        ctx.fillStyle = "#0e0e0e";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Optionally, add animations or more drawing code here.
    }, []);

    return <canvas id="background" ref={canvasRef} />;
}
