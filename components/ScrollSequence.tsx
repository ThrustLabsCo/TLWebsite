"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const panels = [
  {
    label: "Design",
    heading: "Every pixel is a decision.",
    body: "We design interfaces that feel native to the platform and natural to the user. No templates, no defaults. Every screen is considered from the ground up.",
  },
  {
    label: "Engineering",
    heading: "Built to the spec. Not around it.",
    body: "Clean architecture, proper state management, and code you can hand off with confidence. We build things that work — and keep working after we leave.",
  },
  {
    label: "Performance",
    heading: "Fast. Fluid. Frustration-free.",
    body: "Smooth animations, instant load times, and a product that never makes the user wait. Performance is not an afterthought — it is part of the brief.",
  },
  {
    label: "Delivery",
    heading: "Shipped. Documented. Yours.",
    body: "From App Store submission to production deployment, we see it through completely. You get the product, the source code, and full ownership from day one.",
  },
];

export default function ScrollSequence() {
  const containerRef   = useRef<HTMLDivElement>(null);
  const videoRef       = useRef<HTMLVideoElement>(null);
  const canvasRef      = useRef<HTMLCanvasElement>(null);

  // Seek queue — avoids overlapping seek calls on the video decoder
  const isSeekingRef   = useRef(false);
  const pendingTimeRef = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ── SUPPRESS NOISE GRAIN while this section is visible ──
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      ([entry]) => document.body.classList.toggle("no-noise", entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // ── CANVAS FRAME ENGINE ──
  // Draw the current video frame to canvas, then process any queued seek.
  // Canvas always shows the last clean decoded frame — no blank flashes.
  useEffect(() => {
    const video  = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const drawFrame = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.fillStyle = "#0A0A0B";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      if (!video.videoWidth || !video.videoHeight) return;
      // Cover mode: scale video to fill canvas completely — no letterbox, no visible edges
      const vr = video.videoWidth / video.videoHeight;
      const cr = canvas.width / canvas.height;
      let dx = 0, dy = 0, dw = canvas.width, dh = canvas.height;
      if (vr > cr) {
        // video wider than canvas — fit by height, crop sides
        dw = canvas.height * vr;
        dx = (canvas.width - dw) / 2;
      } else {
        // video taller than canvas — fit by width, crop top/bottom
        dh = canvas.width / vr;
        dy = (canvas.height - dh) / 2;
      }
      ctx.drawImage(video, dx, dy, dw, dh);
    };

    const processSeek = (time: number) => {
      if (isSeekingRef.current) {
        // A seek is already running — save the latest request and apply when done
        pendingTimeRef.current = time;
        return;
      }
      isSeekingRef.current = true;
      video.currentTime = time;
    };

    const onSeeked = () => {
      drawFrame();
      isSeekingRef.current = false;
      // If scroll moved while we were decoding, apply the latest queued position
      if (pendingTimeRef.current !== null) {
        const t = pendingTimeRef.current;
        pendingTimeRef.current = null;
        processSeek(t);
      }
    };

    const onLoadedMetadata = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame();
    };

    // Wire scroll → seek queue
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      if (!video.duration) return;
      const t = video.duration * Math.max(0, Math.min(1, progress));
      processSeek(t);
    });

    const onResize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame();
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("seeked", onSeeked);
    window.addEventListener("resize", onResize);

    // If metadata is already loaded (e.g. hot-reload)
    if (video.readyState >= 1) {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame();
    }

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("seeked", onSeeked);
      window.removeEventListener("resize", onResize);
      unsubscribe();
    };
  }, [scrollYProgress]);

  // ── MOTION VALUES ──
  const videoScale = useTransform(scrollYProgress, [0, 1], [0.93, 1.04]);

  const labelOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const hintOpacity  = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  const p1Opacity = useTransform(scrollYProgress, [0.02, 0.09, 0.20, 0.27], [0, 1, 1, 0]);
  const p1Y       = useTransform(scrollYProgress, [0.02, 0.09, 0.20, 0.27], [24, 0, 0, -24]);
  const p2Opacity = useTransform(scrollYProgress, [0.25, 0.32, 0.46, 0.53], [0, 1, 1, 0]);
  const p2Y       = useTransform(scrollYProgress, [0.25, 0.32, 0.46, 0.53], [24, 0, 0, -24]);
  const p3Opacity = useTransform(scrollYProgress, [0.51, 0.58, 0.72, 0.79], [0, 1, 1, 0]);
  const p3Y       = useTransform(scrollYProgress, [0.51, 0.58, 0.72, 0.79], [24, 0, 0, -24]);
  const p4Opacity = useTransform(scrollYProgress, [0.77, 0.84, 0.97, 1.0],  [0, 1, 1, 1]);
  const p4Y       = useTransform(scrollYProgress, [0.77, 0.84, 0.97, 1.0],  [24, 0, 0, 0]);

  const dot1 = useTransform(scrollYProgress, [0.02, 0.27], [0.2, 1]);
  const dot2 = useTransform(scrollYProgress, [0.25, 0.53], [0.2, 1]);
  const dot3 = useTransform(scrollYProgress, [0.51, 0.79], [0.2, 1]);
  const dot4 = useTransform(scrollYProgress, [0.77, 1.0],  [0.2, 1]);

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const panelMotion = [
    { opacity: p1Opacity, y: p1Y },
    { opacity: p2Opacity, y: p2Y },
    { opacity: p3Opacity, y: p3Y },
    { opacity: p4Opacity, y: p4Y },
  ];
  const dots = [dot1, dot2, dot3, dot4];

  return (
    <div ref={containerRef} style={{ height: "400vh" }} className="w-full">
      <div
        className="sticky top-0 w-full overflow-hidden bg-[#0A0A0B]"
        style={{ height: "100dvh" }}
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,240,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(0,240,255,0.6) 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[#00F0FF]/4 blur-[150px]" />
          <div className="absolute bottom-0 right-[10%] w-[350px] h-[350px] rounded-full bg-[#7000FF]/6 blur-[120px]" />
        </div>

        {/* ── HIDDEN VIDEO — feeds the canvas decoder, never shown directly ── */}
        {/* visibility:hidden keeps the element active so seeking works */}
        <video
          ref={videoRef}
          src="/exploding-phone.mp4"
          muted
          playsInline
          preload="auto"
          style={{ position: "absolute", visibility: "hidden", width: 1, height: 1 }}
        />

        {/* ── CANVAS — displays cleanly decoded frames ── */}
        <motion.canvas
          ref={canvasRef}
          style={{ scale: videoScale }}
          className="absolute inset-0 w-full h-full"
        />

        {/*
          ── EDGE FADES ──
          Stay fully solid #0A0A0B for a significant portion before fading
          so the video frame edge is never visible regardless of video size.
          Canvas already fills letterbox area with #0A0A0B so these are
          purely for the vignette blend effect.
        */}

        {/* LEFT */}
        <div
          className="absolute inset-y-0 left-0 pointer-events-none z-10"
          style={{
            width: "40%",
            background:
              "linear-gradient(to right, #0A0A0B 0%, #0A0A0B 18%, rgba(10,10,11,0.85) 45%, transparent 100%)",
          }}
        />
        {/* RIGHT */}
        <div
          className="absolute inset-y-0 right-0 pointer-events-none z-10"
          style={{
            width: "40%",
            background:
              "linear-gradient(to left, #0A0A0B 0%, #0A0A0B 18%, rgba(10,10,11,0.85) 45%, transparent 100%)",
          }}
        />
        {/* TOP — stays solid until 35% then fades; eliminates the hard top line */}
        <div
          className="absolute inset-x-0 top-0 pointer-events-none z-10"
          style={{
            height: "50%",
            background:
              "linear-gradient(to bottom, #0A0A0B 0%, #0A0A0B 35%, rgba(10,10,11,0.75) 60%, transparent 100%)",
          }}
        />
        {/* BOTTOM — deep fade for text legibility */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none z-10"
          style={{
            height: "65%",
            background:
              "linear-gradient(to top, #0A0A0B 0%, #0A0A0B 22%, rgba(10,10,11,0.88) 45%, transparent 100%)",
          }}
        />

        {/* ── UI CHROME ── */}

        {/* Section label */}
        <motion.div
          style={{ opacity: labelOpacity }}
          className="absolute top-8 left-6 md:left-12 z-20 flex items-center gap-2.5"
        >
          <div className="w-4 h-px bg-[#00F0FF]" />
          <span className="text-[#00F0FF] text-xs font-mono-custom font-bold uppercase tracking-[0.15em]">
            How we build
          </span>
        </motion.div>

        {/* Step counter */}
        <motion.div
          style={{ opacity: labelOpacity }}
          className="absolute top-8 right-6 md:right-12 z-20 flex items-center gap-5"
        >
          {panels.map((_, i) => (
            <motion.span
              key={i}
              style={{ opacity: dots[i] }}
              className="font-mono-custom text-xs font-bold text-[#8A8A9A] tracking-widest"
            >
              0{i + 1}
            </motion.span>
          ))}
        </motion.div>

        {/* ── TEXT PANELS ── */}
        <div className="absolute bottom-14 left-6 md:left-14 right-6 md:right-auto md:max-w-[520px] z-20">
          {panels.map((panel, i) => (
            <motion.div
              key={panel.label}
              style={{
                opacity: panelMotion[i].opacity,
                y: panelMotion[i].y,
                position: i === 0 ? "relative" : "absolute",
                inset: i === 0 ? undefined : 0,
              }}
            >
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-[rgba(0,240,255,0.22)] bg-[rgba(0,240,255,0.08)]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
                <span className="text-[#00F0FF] text-xs font-mono-custom font-bold uppercase tracking-[0.15em]">
                  {panel.label}
                </span>
              </div>
              <h2
                className="font-display font-black text-[#E4E4E4] leading-[0.95] tracking-[-0.01em] mb-4"
                style={{ fontSize: "clamp(1.9rem, 4vw, 52px)" }}
              >
                {panel.heading}
              </h2>
              <p className="text-[#ABABBB] text-base md:text-lg leading-relaxed">
                {panel.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Scroll hint */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-14 right-8 md:right-14 flex flex-col items-center gap-2 pointer-events-none z-20"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-transparent via-[rgba(0,240,255,0.4)] to-transparent"
          />
          <span className="text-[#5A5A6A] text-[10px] font-mono-custom uppercase tracking-[0.2em]">
            scroll
          </span>
        </motion.div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[rgba(255,255,255,0.05)] z-30">
          <motion.div
            style={{ width: progressWidth, boxShadow: "0 0 8px rgba(0,240,255,0.7)" }}
            className="h-full bg-[#00F0FF]"
          />
        </div>
      </div>
    </div>
  );
}
