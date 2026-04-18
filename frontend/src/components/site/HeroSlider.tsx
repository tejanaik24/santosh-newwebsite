import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import { waLink } from "@/lib/site";
import slideBridal from "@/assets/slide-bridal.jpg";
import heroVideo1 from "@/assets/hero-video-1.mp4";
import heroVideo2 from "@/assets/hero-video-2.mp4";

type Slide = {
  video?: string;
  img?: string;
  alt: string;
  eyebrow: string;
  title: string;
  italic: string;
  subtitle: string;
  offerLine1: string;
  offerLine2: string;
  offerNote: string;
  period: string;
  cta: string;
  ctaHref: string;
};

const slides: Slide[] = [
  {
    video: heroVideo1,
    alt: "Srivatsala jewellery — gold and gemstone showcase",
    eyebrow: "A SRIVATSALA SIGNATURE",
    title: "Hues",
    italic: "natural gemstones,",
    subtitle: "vibrant colours",
    offerLine1: "FLAT 15% OFF",
    offerLine2: "on making charges",
    offerNote: "On gold jewellery & gemstone collections",
    period: "Offer period: 18th – 30th April 2026",
    cta: "Explore now",
    ctaHref: "#collections",
  },
  {
    img: slideBridal,
    alt: "South Indian bride in red saree with full traditional gold bridal jewellery",
    eyebrow: "FOR THE BRIDE",
    title: "Vivaah",
    italic: "bridal heirlooms,",
    subtitle: "made for forever",
    offerLine1: "UPTO 20% OFF",
    offerLine2: "on bridal sets",
    offerNote: "Vaddanam · Kasulaperu · Gundla Haram",
    period: "Book your bridal consultation today",
    cta: "Book consultation",
    ctaHref: waLink("Hi, I'd like to book a bridal consultation."),
  },
  {
    video: heroVideo2,
    alt: "Srivatsala festive silver and gold jewellery collection",
    eyebrow: "FESTIVAL OF LIGHTS",
    title: "Utsav",
    italic: "festive radiance,",
    subtitle: "timeless joy",
    offerLine1: "ZERO MAKING",
    offerLine2: "on silver collection",
    offerNote: "Free delivery across Visakhapatnam",
    period: "Limited time festive offer",
    cta: "Shop festive",
    ctaHref: "#collections",
  },
];

const AUTO_MS = 6000;

export const HeroSlider = () => {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const [muted, setMuted] = useState(true);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const captionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const total = slides.length;

  // Initial setup — stagger-reveal first caption on mount
  useEffect(() => {
    slideRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: i === 0 ? 1 : 0, scale: i === 0 ? 1 : 1.04 });
    });
    captionRefs.current.forEach((el, i) => {
      if (!el) return;
      const kids = Array.from(el.children);
      if (i === 0) {
        gsap.fromTo(kids,
          { opacity: 0, y: 38 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.13, delay: 0.5, ease: "power3.out" }
        );
      } else {
        gsap.set(kids, { opacity: 0, y: 38 });
      }
    });
    if (!slides[0].video) {
      const el = slideRefs.current[0];
      if (el) gsap.to(el, { scale: 1.09, duration: 9, ease: "none" });
    }
    videoRefs.current[0]?.play().catch(() => {});
  }, []);

  // Mute sync
  useEffect(() => {
    videoRefs.current.forEach((v) => { if (v) v.muted = muted; });
  }, [muted]);

  // Progress bar — animate on each index change
  useEffect(() => {
    const bar = progressRef.current;
    if (!bar) return;
    gsap.killTweensOf(bar);
    gsap.fromTo(bar,
      { scaleX: 0 },
      { scaleX: 1, duration: AUTO_MS / 1000, ease: "none", transformOrigin: "left center" }
    );
  }, [index]);

  // Auto-rotate
  useEffect(() => {
    if (hover) return;
    const t = setTimeout(() => goTo((index + 1) % total), AUTO_MS);
    return () => clearTimeout(t);
  }, [index, hover, total]);

  // 3D parallax on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const nx = ((e.clientX - left) / width - 0.5) * 2;
    const ny = ((e.clientY - top) / height - 0.5) * 2;
    const cap = captionRefs.current[index];
    if (cap) {
      gsap.to(cap, {
        rotateY: nx * 5,
        rotateX: -ny * 3,
        transformPerspective: 1100,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    const cap = captionRefs.current[index];
    if (cap) gsap.to(cap, { rotateY: 0, rotateX: 0, duration: 0.9, ease: "elastic.out(1, 0.5)" });
  };

  const goTo = (next: number) => {
    if (next === index) return;
    const cur = slideRefs.current[index];
    const nxt = slideRefs.current[next];
    const curCap = captionRefs.current[index];
    const nxtCap = captionRefs.current[next];
    if (!cur || !nxt || !curCap || !nxtCap) return;

    // Kill progress tween on current bar before index change
    if (progressRef.current) gsap.killTweensOf(progressRef.current);

    // Pause outgoing video
    const curVideo = videoRefs.current[index];
    if (curVideo) { curVideo.pause(); curVideo.currentTime = 0; }

    // Outgoing: quick fade + slight scale out
    gsap.to(cur, { opacity: 0, scale: 1.03, duration: 0.42, ease: "power2.in" });
    gsap.to(Array.from(curCap.children), {
      opacity: 0, y: -22, duration: 0.28, stagger: 0.04, ease: "power2.in",
    });

    // Incoming: cross-fade + staggered caption elements
    const isNextVideo = !!slides[next].video;
    gsap.fromTo(nxt,
      { opacity: 0, scale: isNextVideo ? 1 : 1.06 },
      { opacity: 1, scale: 1, duration: 0.68, delay: 0.28, ease: "power2.out" }
    );
    if (!isNextVideo) {
      gsap.to(nxt, { scale: 1.09, duration: 9, delay: 0.96, ease: "none" });
    }
    gsap.fromTo(Array.from(nxtCap.children),
      { opacity: 0, y: 42 },
      { opacity: 1, y: 0, duration: 0.82, stagger: 0.11, delay: 0.44, ease: "power3.out" }
    );

    // Play incoming video
    const nxtVideo = videoRefs.current[next];
    if (nxtVideo) {
      nxtVideo.currentTime = 0;
      nxtVideo.muted = muted;
      setTimeout(() => nxtVideo.play().catch(() => {}), 340);
    }

    setIndex(next);
  };

  const next = () => goTo((index + 1) % total);
  const prev = () => goTo((index - 1 + total) % total);
  const activeIsVideo = !!slides[index].video;

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); handleMouseLeave(); }}
      onMouseMove={handleMouseMove}
    >
      {/* ── Slides ──────────────────────────────────────── */}
      {slides.map((s, i) => (
        <div
          key={i}
          ref={(el) => { slideRefs.current[i] = el; }}
          className="absolute inset-0"
          aria-hidden={i !== index}
        >
          {s.video ? (
            <video
              ref={(el) => { videoRefs.current[i] = el; }}
              src={s.video}
              muted playsInline loop
              preload={i === 0 ? "auto" : "metadata"}
              className="absolute inset-0 w-full h-full object-cover"
              aria-label={s.alt}
            />
          ) : (
            <img
              src={s.img} alt={s.alt}
              className="absolute inset-0 w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
              width={1920} height={1080}
            />
          )}

          {/* Multi-layer cinematic overlay */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background: [
                /* right-side dark panel for caption legibility */
                "linear-gradient(to right, hsl(213 100% 8% / 0.1) 0%, transparent 28%, hsl(213 100% 6% / 0.62) 62%, hsl(213 100% 5% / 0.94) 100%)",
                /* top vignette — nav readability */
                "linear-gradient(to bottom, hsl(213 100% 5% / 0.52) 0%, transparent 18%)",
                /* bottom vignette — store tag */
                "linear-gradient(to top, hsl(213 100% 4% / 0.9) 0%, transparent 28%)",
              ].join(", "),
            }}
          />

          {/* Brand stamp */}
          <span className="absolute top-24 left-8 sm:left-14 text-[9px] tracking-[0.5em] text-silver/65 uppercase border border-silver/18 px-3 py-1 rounded-sm backdrop-blur-sm z-10 font-medium">
            Srivatsala · Est. 1998
          </span>
        </div>
      ))}

      {/* ── Captions (one per slide, staggered per-element) ── */}
      {slides.map((s, i) => (
        <div
          key={i}
          ref={(el) => { captionRefs.current[i] = el; }}
          className="absolute right-8 sm:right-14 lg:right-20 xl:right-28 top-1/2 -translate-y-1/2 max-w-xs sm:max-w-sm lg:max-w-md text-right z-10"
          aria-hidden={i !== index}
        >
          {/* Eyebrow */}
          <p className="text-[10px] sm:text-[11px] tracking-[0.5em] text-rose-gold uppercase mb-4 font-semibold">
            {s.eyebrow}
          </p>

          {/* Hero title */}
          <h2 className="font-display text-[4.5rem] sm:text-8xl lg:text-9xl xl:text-[10rem] text-silver leading-[0.88] tracking-tight">
            {s.title}
          </h2>

          {/* Subtitle italic */}
          <p className="font-display italic text-xl sm:text-2xl lg:text-3xl text-silver/80 mt-4 lg:mt-5 leading-snug">
            {s.italic}
            <br />
            {s.subtitle}
          </p>

          {/* Offer card */}
          <div
            className="mt-6 lg:mt-8 inline-block text-left rounded-xl px-5 py-4 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(213 100% 8% / 0.8) 0%, hsl(213 80% 12% / 0.65) 100%)",
              backdropFilter: "blur(14px)",
              border: "1px solid hsl(44 73% 58% / 0.45)",
              boxShadow:
                "0 12px 40px -10px hsl(44 56% 54% / 0.28), inset 0 1px 0 hsl(44 73% 80% / 0.12)",
            }}
          >
            {/* Top shimmer line */}
            <div
              aria-hidden
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, hsl(44 73% 72% / 0.9) 50%, transparent 100%)",
              }}
            />
            <p className="font-display text-3xl sm:text-4xl text-gold-light leading-tight">
              {s.offerLine1}
            </p>
            <p className="text-[11px] tracking-widest text-silver/80 mt-1 font-medium uppercase">
              {s.offerLine2}
            </p>
            <p className="text-[10px] sm:text-[11px] text-silver/55 mt-2.5 leading-relaxed">
              {s.offerNote}
            </p>
          </div>

          {/* Period */}
          <p className="text-[10px] text-silver/45 mt-3 tracking-wide">{s.period}</p>

          {/* CTA */}
          <div className="mt-6 flex justify-end">
            <a
              href={s.ctaHref}
              target={s.ctaHref.startsWith("http") ? "_blank" : undefined}
              rel="noopener"
              className="btn-gold !py-3 !px-8 text-[13px] cursor-pointer"
            >
              {s.cta}
            </a>
          </div>
        </div>
      ))}

      {/* ── Bottom-left store identity ───────────────────── */}
      <div className="absolute bottom-[5.5rem] sm:bottom-[6.5rem] left-8 sm:left-14 lg:left-20 z-10">
        <p className="text-[9px] tracking-[0.5em] uppercase text-rose-gold mb-1.5 font-medium">
          Madhurawada · Visakhapatnam
        </p>
        <h1 className="font-display text-lg sm:text-xl lg:text-2xl text-silver leading-tight">
          For an{" "}
          <span className="text-gradient-gold">Auspicious Beginning</span>
        </h1>
      </div>

      {/* ── Arrow controls ──────────────────────────────── */}
      <button
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 grid place-items-center rounded-full bg-[hsl(var(--bg-dark)/0.5)] backdrop-blur border border-silver/15 text-silver/70 hover:text-gold-light hover:border-[hsl(var(--gold)/0.55)] hover:bg-[hsl(var(--bg-dark)/0.75)] transition-all duration-200 cursor-pointer"
      >
        <ChevronLeft size={19} />
      </button>
      <button
        aria-label="Next slide"
        onClick={next}
        className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 grid place-items-center rounded-full bg-[hsl(var(--bg-dark)/0.5)] backdrop-blur border border-silver/15 text-silver/70 hover:text-gold-light hover:border-[hsl(var(--gold)/0.55)] hover:bg-[hsl(var(--bg-dark)/0.75)] transition-all duration-200 cursor-pointer"
      >
        <ChevronRight size={19} />
      </button>

      {/* ── Mute toggle ─────────────────────────────────── */}
      {activeIsVideo && (
        <button
          aria-label={muted ? "Unmute video" : "Mute video"}
          onClick={() => setMuted((m) => !m)}
          className="absolute bottom-[5.5rem] sm:bottom-[6.5rem] right-8 sm:right-14 z-20 w-9 h-9 grid place-items-center rounded-full bg-[hsl(var(--bg-dark)/0.6)] backdrop-blur border border-silver/20 text-silver/70 hover:text-gold-light hover:border-[hsl(var(--gold-light))] transition-all duration-200 cursor-pointer"
        >
          {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        </button>
      )}

      {/* ── Slide counter + progress dots ───────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        <p className="text-[9px] tracking-[0.35em] text-silver/35 tabular-nums font-medium">
          0{index + 1}&nbsp;/&nbsp;0{total}
        </p>
        <div className="flex items-center gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`relative h-[3px] rounded-full overflow-hidden cursor-pointer transition-all duration-300 ${
                i === index ? "w-12" : "w-3.5 bg-silver/25 hover:bg-silver/45"
              }`}
              style={
                i === index
                  ? { background: "hsl(var(--bg-dark) / 0.4)" }
                  : {}
              }
            >
              {i === index && (
                <div
                  ref={progressRef}
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, hsl(44 73% 66%), hsl(44 56% 54%))",
                    transformOrigin: "left center",
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Scroll nudge ────────────────────────────────── */}
      <div className="absolute bottom-3 left-8 sm:left-14 z-10 flex items-center gap-2 opacity-30">
        <div
          aria-hidden
          className="w-px h-7"
          style={{
            background: "linear-gradient(to bottom, transparent, hsl(60 4% 89% / 0.7))",
          }}
        />
        <svg width="9" height="5" viewBox="0 0 9 5" className="text-silver animate-bounce-soft">
          <path d="M1 1l3.5 3L8 1" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
};
