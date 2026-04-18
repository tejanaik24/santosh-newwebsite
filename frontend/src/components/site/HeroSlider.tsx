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

const PeekMedia = ({ slide, className }: { slide: Slide; className: string }) =>
  slide.video ? (
    <video
      src={slide.video}
      muted
      playsInline
      preload="metadata"
      className={className}
    />
  ) : (
    <img src={slide.img} alt="" className={className} />
  );

export const HeroSlider = () => {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const [muted, setMuted] = useState(true);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const captionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const stageRef = useRef<HTMLDivElement>(null);
  const xTo = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const yTo = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const total = slides.length;

  // Set initial GSAP states + start first slide
  useEffect(() => {
    slideRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: i === 0 ? 1 : 0, scale: i === 0 ? 1 : 1.05 });
    });
    captionRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: i === 0 ? 1 : 0, x: i === 0 ? 0 : 60 });
    });
    // Ken Burns only on image slides
    if (!slides[0].video) {
      const el = slideRefs.current[0];
      if (el) gsap.to(el, { scale: 1.08, duration: 8, ease: "none" });
    }
    // Play first video slide
    videoRefs.current[0]?.play().catch(() => {});
  }, []);

  // Sync muted state to all video elements
  useEffect(() => {
    videoRefs.current.forEach((v) => {
      if (v) v.muted = muted;
    });
  }, [muted]);

  // 3D parallax — init quickTo targets once
  useEffect(() => {
    const activeCaption = captionRefs.current[0];
    if (!activeCaption) return;
    xTo.current = gsap.quickTo(activeCaption, "rotateY", { duration: 0.6, ease: "power2.out" });
    yTo.current = gsap.quickTo(activeCaption, "rotateX", { duration: 0.6, ease: "power2.out" });
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = stageRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const nx = ((e.clientX - left) / width - 0.5) * 2;
    const ny = ((e.clientY - top) / height - 0.5) * 2;
    const cap = captionRefs.current[index];
    if (cap) {
      gsap.to(cap, { rotateY: nx * 6, rotateX: -ny * 4, transformPerspective: 900, duration: 0.5, ease: "power2.out" });
    }
  };

  const handleMouseLeave = () => {
    const cap = captionRefs.current[index];
    if (cap) gsap.to(cap, { rotateY: 0, rotateX: 0, duration: 0.8, ease: "elastic.out(1,0.5)" });
  };

  // Auto-rotate
  useEffect(() => {
    if (hover) return;
    const t = setTimeout(() => goTo((index + 1) % total), 6000);
    return () => clearTimeout(t);
  }, [index, hover, total]);

  const goTo = (next: number) => {
    if (next === index) return;
    const cur = slideRefs.current[index];
    const nxt = slideRefs.current[next];
    const curCap = captionRefs.current[index];
    const nxtCap = captionRefs.current[next];
    if (!cur || !nxt || !curCap || !nxtCap) return;

    // Pause outgoing video
    const curVideo = videoRefs.current[index];
    if (curVideo) { curVideo.pause(); curVideo.currentTime = 0; }

    gsap.to(cur, { opacity: 0, duration: 0.9, ease: "power2.inOut" });
    gsap.to(curCap, { opacity: 0, x: -40, duration: 0.5, ease: "power2.in" });

    const isNextVideo = !!slides[next].video;
    gsap.fromTo(nxt, { opacity: 0, scale: isNextVideo ? 1 : 1.08 }, { opacity: 1, scale: 1, duration: 1.1, ease: "power2.out" });
    if (!isNextVideo) {
      gsap.to(nxt, { scale: 1.08, duration: 8, delay: 1.1, ease: "none" });
    }

    gsap.fromTo(nxtCap, { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.9, delay: 0.25, ease: "power3.out" });

    // Play incoming video
    const nxtVideo = videoRefs.current[next];
    if (nxtVideo) {
      nxtVideo.currentTime = 0;
      nxtVideo.muted = muted;
      setTimeout(() => nxtVideo.play().catch(() => {}), 300);
    }

    setIndex(next);
  };

  const next = () => goTo((index + 1) % total);
  const prev = () => goTo((index - 1 + total) % total);

  const prevIdx = (index - 1 + total) % total;
  const nextIdx = (index + 1) % total;
  const activeIsVideo = !!slides[index].video;

  return (
    <section
      id="home"
      className="relative h-screen min-h-[640px] flex flex-col pt-20"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Full-bleed outer gold glow ring — the "highlight" */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-4 top-20 bottom-0 rounded-3xl -z-0"
        style={{
          boxShadow: "0 0 80px -10px hsl(44 73% 50% / 0.45), 0 0 200px -40px hsl(44 73% 50% / 0.2)",
        }}
      />

      <div className="container flex-1 flex flex-col pb-4">
        <div className="relative grid grid-cols-12 gap-2 sm:gap-3 flex-1 min-h-0">

          {/* Prev peek */}
          <button
            aria-label="Previous slide"
            onClick={prev}
            className="hidden md:flex col-span-1 relative rounded-l-2xl overflow-hidden group"
          >
            <PeekMedia
              slide={slides[prevIdx]}
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition"
            />
            <div className="absolute inset-0 bg-[hsl(var(--bg-dark)/0.4)] group-hover:bg-[hsl(var(--bg-dark)/0.2)] transition" />
          </button>

          {/* Main stage — fills remaining height */}
          <div
            ref={stageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="col-span-12 md:col-span-10 relative rounded-2xl overflow-hidden bg-navy-dark"
            style={{
              border: "1px solid hsl(44 73% 50% / 0.5)",
              boxShadow: "0 0 0 1px hsl(44 73% 50% / 0.15), inset 0 0 60px -20px hsl(44 73% 50% / 0.08)",
            }}
          >
            {slides.map((s, i) => (
              <div
                key={i}
                ref={(el) => (slideRefs.current[i] = el)}
                className="absolute inset-0"
                aria-hidden={i !== index}
              >
                {s.video ? (
                  <video
                    ref={(el) => (videoRefs.current[i] = el)}
                    src={s.video}
                    muted
                    playsInline
                    loop
                    preload={i === 0 ? "auto" : "metadata"}
                    className="absolute inset-0 w-full h-full object-cover"
                    aria-label={s.alt}
                  />
                ) : (
                  <img
                    src={s.img}
                    alt={s.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading={i === 0 ? "eager" : "lazy"}
                    width={1920}
                    height={1080}
                  />
                )}

                {/* Gradient overlay */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(5,10,30,0.25) 0%, transparent 35%, hsl(213 100% 8% / 0.55) 70%, hsl(213 100% 6% / 0.88) 100%), linear-gradient(180deg, transparent 50%, rgba(5,10,30,0.7) 100%)",
                  }}
                />

                {/* Brand watermark */}
                <span className="absolute top-5 left-5 text-[10px] tracking-[0.4em] text-silver/85 uppercase border border-silver/30 px-2 py-1 rounded backdrop-blur-sm">
                  A Srivatsala Signature
                </span>

                {/* Caption */}
                <div
                  ref={(el) => (captionRefs.current[i] = el)}
                  className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 max-w-md text-right"
                >
                  <p className="text-[10px] sm:text-xs tracking-[0.4em] text-rose-gold uppercase mb-3">
                    {s.eyebrow}
                  </p>
                  <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl text-silver leading-none">
                    {s.title}
                  </h2>
                  <p className="font-display italic text-2xl sm:text-3xl text-silver/90 mt-3">
                    {s.italic}
                    <br />
                    {s.subtitle}
                  </p>
                  <div className="mt-6 inline-block text-left bg-[hsl(var(--bg-dark)/0.6)] backdrop-blur-sm border border-[hsl(var(--gold)/0.4)] rounded-lg px-5 py-4">
                    <p className="font-display text-3xl text-gold-light leading-tight">
                      {s.offerLine1}
                    </p>
                    <p className="text-xs tracking-wider text-silver/85 mt-0.5">
                      {s.offerLine2}
                    </p>
                    <p className="text-[10px] text-silver/60 mt-2">{s.offerNote}</p>
                  </div>
                  <p className="text-[10px] text-silver/55 mt-3 tracking-wide">{s.period}</p>
                  <div className="mt-5 flex justify-end">
                    <a
                      href={s.ctaHref}
                      target={s.ctaHref.startsWith("http") ? "_blank" : undefined}
                      rel="noopener"
                      className="btn-gold !py-2.5 !px-6 text-sm"
                    >
                      {s.cta}
                    </a>
                  </div>
                </div>

                {/* Eyebrow strip — bottom-left overlay */}
                {i === index && (
                  <div className="absolute bottom-16 left-5 sm:left-8">
                    <p className="text-[10px] tracking-[0.4em] uppercase text-rose-gold mb-1">
                      Madhurawada · Visakhapatnam
                    </p>
                    <h1 className="font-display text-xl sm:text-2xl text-silver leading-tight">
                      For an{" "}
                      <span className="text-gradient-gold">Auspicious Beginning</span>
                    </h1>
                  </div>
                )}
              </div>
            ))}

            {/* Mute/unmute */}
            {activeIsVideo && (
              <button
                aria-label={muted ? "Unmute video" : "Mute video"}
                onClick={() => setMuted((m) => !m)}
                className="absolute bottom-12 right-4 z-10 w-9 h-9 grid place-items-center rounded-full bg-[hsl(var(--bg-dark)/0.65)] backdrop-blur border border-silver/20 text-silver hover:text-gold-light hover:border-[hsl(var(--gold-light))] transition"
              >
                {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
            )}

            {/* Mobile arrows */}
            <button
              aria-label="Previous"
              onClick={prev}
              className="md:hidden absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 grid place-items-center rounded-full bg-[hsl(var(--bg-dark)/0.6)] backdrop-blur text-silver"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              aria-label="Next"
              onClick={next}
              className="md:hidden absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 grid place-items-center rounded-full bg-[hsl(var(--bg-dark)/0.6)] backdrop-blur text-silver"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-[hsl(var(--gold-light))]"
                      : "w-2 bg-silver/40 hover:bg-silver/70"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Next peek */}
          <button
            aria-label="Next slide"
            onClick={next}
            className="hidden md:flex col-span-1 relative rounded-r-2xl overflow-hidden group"
          >
            <PeekMedia
              slide={slides[nextIdx]}
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition"
            />
            <div className="absolute inset-0 bg-[hsl(var(--bg-dark)/0.4)] group-hover:bg-[hsl(var(--bg-dark)/0.2)] transition" />
          </button>
        </div>
      </div>
    </section>
  );
};
