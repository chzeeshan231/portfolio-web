/**
 * BrandsSection.jsx
 * Drop-in React component. No extra dependencies beyond React itself.
 *
 * Setup:
 *   1. Add Jersey 10 to your HTML <head>:
 *      <link href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap" rel="stylesheet">
 *   2. Import and use: <BrandsSection />
 */

import { useEffect, useRef } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaTwitter,
    FaSnapchatGhost,
    FaTiktok,
    FaPinterestP,
    FaWhatsapp,
    FaTelegramPlane,
    FaDiscord,
    FaGithub,
    FaDribbble,
} from "react-icons/fa";

const ALL_BRANDS = [
    { name: "Facebook", Icon: FaFacebookF },
    { name: "Instagram", Icon: FaInstagram },
    { name: "LinkedIn", Icon: FaLinkedinIn },
    { name: "YouTube", Icon: FaYoutube },
    { name: "Twitter", Icon: FaTwitter },
    { name: "Snapchat", Icon: FaSnapchatGhost },
    { name: "TikTok", Icon: FaTiktok },
    { name: "Pinterest", Icon: FaPinterestP },
    { name: "WhatsApp", Icon: FaWhatsapp },
    { name: "Telegram", Icon: FaTelegramPlane },
    { name: "Discord", Icon: FaDiscord },
    { name: "GitHub", Icon: FaGithub },
    { name: "Dribbble", Icon: FaDribbble },
];

const BRANDS_ROW1 = [
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
];

const BRANDS_ROW2 = [
    { name: "Adobe XD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Gatsby", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-original.svg" },
    { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
];

const ORBIT_RINGS = [
    { rXf: 0.44, rYf: 0.090, speed: 9, indices: [0, 1, 2, 3] },
    { rXf: 0.33, rYf: 0.068, speed: 13, indices: [4, 5, 6] },
    { rXf: 0.22, rYf: 0.048, speed: 18, indices: [7, 8, 9] },
    { rXf: 0.13, rYf: 0.030, speed: 24, indices: [10, 11, 12] },
];

const NUM_LINES = 9;

function easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
}

function BrandPill({ icon, name }) {
    return (
        <div
            style={{
                width: "clamp(62px, 8vw, 84px)",
                height: "clamp(62px, 8vw, 84px)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(16,16,18,0.92)",
                boxShadow: "inset 0 0 0 1px rgba(255,145,35,0.26)",
            }}
            aria-label={name}
            title={name}
        >
            <img src={icon} alt={name} style={{ width: "clamp(26px, 3.2vw, 36px)", height: "clamp(26px, 3.2vw, 36px)", display: "block" }} />
        </div>
    );
}

export default function BrandsSection() {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const chipRefs = useRef(
        ORBIT_RINGS.map((ring) => ring.indices.map(() => ({ el: null })))
    );
    const anglesRef = useRef(
        ORBIT_RINGS.map((o) => o.indices.map((_, i) => (360 / o.indices.length) * i))
    );
    const dimsRef = useRef({ W: 0, H: 0, CX: 0, CY: 0, planetSize: 160 });
    const rafRef = useRef(null);
    const lastTsRef = useRef(null);
    const motionTimeRef = useRef(0);
    const introProgressRef = useRef(1);
    const introStartedRef = useRef(true);
    const iconPosRef = useRef(
        ORBIT_RINGS.map((ring) => ring.indices.map(() => ({ x: 0, y: 0, a: 0 })))
    );

    useEffect(() => {
        const node = containerRef.current;
        if (!node) return;

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    introStartedRef.current = true;
                    obs.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        obs.observe(node);
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        const canvas = canvasRef.current;
        if (!container || !canvas) return;

        const ctx = canvas.getContext("2d");

        function measure() {
            const W = container.clientWidth;
            const H = Math.max(300, Math.min(500, W * 0.48));
            const CX = W / 2;
            const CY = H * (W < 700 ? 0.59 : 0.62);
            const planetSize = Math.max(96, Math.min(W * 0.18, 188));
            dimsRef.current = { W, H, CX, CY, planetSize };
            container.style.height = H + "px";
            canvas.width = W;
            canvas.height = H;

            // reposition planet + glow via DOM refs
            const planet = container.querySelector("#bs-planet");
            const glow = container.querySelector("#bs-glow");
            if (planet) {
                planet.style.width = planetSize + "px";
                planet.style.height = planetSize + "px";
                planet.style.left = CX + "px";
                planet.style.top = CY + "px";
                const label = planet.querySelector("span");
                if (label) label.style.fontSize = Math.max(13, planetSize * 0.155) + "px";
            }
            if (glow) {
                glow.style.top = CY + planetSize * 0.36 + "px";
            }
        }

        function draw(time) {
            const { W, H, CX, CY } = dimsRef.current;
            ctx.clearRect(0, 0, W, H);
            const intro = easeOutCubic(introProgressRef.current);

            ORBIT_RINGS.forEach((o, idx) => {
                const wobbleY = Math.sin(time * (0.9 + idx * 0.15) + idx) * H * 0.005;
                const tilt = Math.sin(time * 0.35 + idx * 0.7) * 0.09;
                ctx.beginPath();
                ctx.ellipse(CX, CY + wobbleY, o.rXf * W, o.rYf * H, tilt, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(255,140,30,${0.12 + idx * 0.035})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            });

            for (let i = 0; i < NUM_LINES; i++) {
                const t = i / (NUM_LINES - 1);
                const sway = Math.sin(time * 1.3 + i * 0.6) * W * 0.02;
                const baseX = CX + (t - 0.5) * 24 + sway * 0.28;
                const topX = CX + (t - 0.5) * W * 0.28 + sway;
                const topY = H * (0.02 + Math.cos(time * 0.9 + i * 0.4) * 0.008);
                const g = ctx.createLinearGradient(baseX, CY - 14, topX, topY);
                g.addColorStop(0, "rgba(255,150,40,0.60)");
                g.addColorStop(0.5, "rgba(255,130,20,0.20)");
                g.addColorStop(1, "rgba(255,110,0,0.00)");
                ctx.beginPath();
                ctx.moveTo(baseX, CY - 14);
                ctx.lineTo(topX, topY);
                ctx.strokeStyle = g;
                ctx.lineWidth = i === Math.floor(NUM_LINES / 2) ? 1.5 : 0.85;
                ctx.stroke();
            }

            ORBIT_RINGS.forEach((ring, ri) => {
                ring.indices.forEach((_, ii) => {
                    const pos = iconPosRef.current[ri][ii];
                    if (!pos.a) return;
                    const t = (ii + 1) / (ring.indices.length + 1);
                    const stemX = CX + (t - 0.5) * W * 0.24;
                    const stemY = H * (0.05 + t * 0.015);
                    const grad = ctx.createLinearGradient(stemX, stemY, pos.x, pos.y);
                    grad.addColorStop(0, `rgba(255,170,60,${0.22 * intro})`);
                    grad.addColorStop(1, `rgba(255,145,40,${0.5 * pos.a})`);
                    ctx.beginPath();
                    ctx.moveTo(stemX, stemY);
                    ctx.lineTo(pos.x, pos.y);
                    ctx.strokeStyle = grad;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                });
            });
        }

        function updateChips() {
            const { W, H, CX, CY } = dimsRef.current;
            ORBIT_RINGS.forEach((ring, ri) => {
                ring.indices.forEach((_, ii) => {
                    const ref = chipRefs.current[ri][ii];
                    if (!ref || !ref.el) return;
                    const angRad = (anglesRef.current[ri][ii] * Math.PI) / 180;
                    const ox = Math.cos(angRad) * ring.rXf * W;
                    const oy = Math.sin(angRad) * ring.rYf * H;
                    const depth = (Math.sin(angRad) + 1) / 2;
                    const orbitX = CX + ox;
                    const orbitY = CY + oy;
                    const stemT = (ii + 1) / (ring.indices.length + 1);
                    const spawnX = CX + (stemT - 0.5) * W * 0.24;
                    const spawnY = H * (0.05 + stemT * 0.015);
                    const intro = easeOutCubic(introProgressRef.current);
                    const x = spawnX + (orbitX - spawnX) * intro;
                    const y = spawnY + (orbitY - spawnY) * intro;
                    iconPosRef.current[ri][ii] = { x, y, a: intro };
                    ref.el.style.left = `${x}px`;
                    ref.el.style.top = `${y}px`;
                    ref.el.style.transform = `translate(-50%,-50%) scale(${(0.68 + depth * 0.48) * (0.65 + intro * 0.35)})`;
                    ref.el.style.opacity = (0.1 + depth * 0.9) * intro;
                    ref.el.style.zIndex = Math.sin(angRad) < 0 ? 10 : 30;
                });
            });
        }

        function frame(ts) {
            if (!lastTsRef.current) lastTsRef.current = ts;
            const dt = Math.min((ts - lastTsRef.current) / 1000, 0.05);
            lastTsRef.current = ts;
            motionTimeRef.current += dt;
            if (introStartedRef.current && introProgressRef.current < 1) {
                introProgressRef.current = Math.min(1, introProgressRef.current + dt * 0.52);
            }
            ORBIT_RINGS.forEach((ring, ri) => {
                ring.indices.forEach((_, ii) => {
                    anglesRef.current[ri][ii] = (anglesRef.current[ri][ii] + ring.speed * dt) % 360;
                });
            });
            draw(motionTimeRef.current);
            updateChips();
            rafRef.current = requestAnimationFrame(frame);
        }

        measure();
        rafRef.current = requestAnimationFrame(frame);

        const obs = new ResizeObserver(() => { measure(); updateChips(); });
        obs.observe(container);

        return () => {
            cancelAnimationFrame(rafRef.current);
            obs.disconnect();
        };
    }, []);

    return (
        <div style={{ background: "#000", width: "100%", overflowX: "hidden", paddingBottom: 30 }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');
        @keyframes bsPlanetPulse {
          0%,100% { box-shadow: 0 0 55px 18px rgba(255,130,15,0.42), 0 0 110px 55px rgba(255,90,0,0.16); }
          50%      { box-shadow: 0 0 80px 28px rgba(255,160,25,0.60), 0 0 160px 80px rgba(255,110,0,0.26); }
        }
      `}</style>

            {/* Header */}
            <div style={{ textAlign: "center", paddingTop: 52, paddingBottom: 14 }}>
                <h2 style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "clamp(1.4rem, 3.5vw, 2.4rem)",
                    color: "#fff", fontWeight: 400,
                    margin: "0 0 10px", letterSpacing: "0.01em",
                }}>
                    Brands I've Worked With
                </h2>
                <p style={{
                    color: "white",
                    fontSize: "clamp(0.7rem, 1.4vw, 0.88rem)",
                    maxWidth: 380, margin: "0 auto",
                    lineHeight: 1.65, fontStyle: "", padding: "0 16px",
                }}>
                    A selection of brands I've had the pleasure of collaborating with —
                    building creative solutions, strong visuals, and meaningful connections.
                </p>
            </div>

            {/* Static top icons matching reference */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, padding: "0 16px" }}>
                {[BRANDS_ROW1, BRANDS_ROW2].map((row, ri) => (
                    <div key={ri} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "clamp(6px, 1.2vw, 10px)" }}>
                        {row.map((b) => <BrandPill key={b.name} {...b} />)}
                    </div>
                ))}
            </div>

            {/* 3-D Orbital scene */}
            <div ref={containerRef} style={{ position: "relative", width: "100%", maxWidth: 1120, margin: "-10px auto 0", overflow: "hidden" }}>
                <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />

                {/* Ground glow */}
                <div id="bs-glow" style={{
                    position: "absolute", left: "50%", transform: "translateX(-50%)",
                    width: "clamp(260px,72%,800px)", height: 72,
                    background: "radial-gradient(ellipse, rgba(255,110,0,0.18) 0%, transparent 70%)",
                    borderRadius: "50%", pointerEvents: "none", zIndex: 1,
                }} />

                {/* Planet */}
                <div
                    id="bs-planet"
                    style={{
                        position: "absolute",
                        top: "80%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle at 38% 36%, #ffbe5c 0%, #ff7a00 52%, #c44d00 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 20,
                        animation: "bsPlanetPulse 3.2s ease-in-out infinite",
                    }}
                >
                    <span
                        style={{
                            fontFamily: "'Jersey 10', monospace",
                            color: "#fff",
                            textAlign: "center",
                            lineHeight: 1.2,
                            textShadow: "0 2px 10px rgba(0,0,0,0.35)",
                            letterSpacing: "0.02em",
                        }}
                    >
                        Lex Cove
                        <br />
                        Creative
                    </span>
                </div>

                {/* Orbiting chips */}
                {ORBIT_RINGS.map((ring, ri) =>
                    ring.indices.map((bi, ii) => {
                        if (bi >= ALL_BRANDS.length) return null;
                        const brand = ALL_BRANDS[bi];
                        return (
                            <div
                                key={`${ri}-${ii}`}
                                ref={(el) => { if (chipRefs.current[ri]?.[ii]) chipRefs.current[ri][ii].el = el; }}
                                style={{ position: "absolute", pointerEvents: "none", zIndex: 15, opacity: 0, left: "50%", top: "78%" }}
                            >
                                <div style={{
                                    width: "clamp(42px, 6vw, 56px)",
                                    height: "clamp(42px, 6vw, 56px)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background: "rgba(0,0,0,0.70)",
                                    borderRadius: "50%",
                                    boxShadow: "inset 0 0 0 1px rgba(255,165,70,0.45), 0 0 18px rgba(255,145,35,0.24)",
                                    backdropFilter: "blur(4px)",
                                }}>
                                    <brand.Icon
                                        title={brand.name}
                                        style={{ color: "#ffb24a", width: "clamp(20px, 3vw, 28px)", height: "clamp(20px, 3vw, 28px)", display: "block" }}
                                    />
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}