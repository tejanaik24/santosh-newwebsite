import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { waLink } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

const budgets = [
  {
    range: "Under ₹10,000",
    label: "Daily Essentials",
    desc: "Silver chains, toe rings, anklets & everyday wear",
    gradient: "from-slate-800 to-slate-700",
    accent: "hsl(var(--silver))",
    emoji: "✦",
    tag: "Silver",
  },
  {
    range: "₹10K – ₹50K",
    label: "Gifting Picks",
    desc: "Gold earrings, small pendants, lightweight bangles",
    gradient: "from-amber-950 to-yellow-900",
    accent: "hsl(var(--gold))",
    emoji: "✦",
    tag: "Gold",
  },
  {
    range: "₹50K – ₹2L",
    label: "Statement Pieces",
    desc: "Kasulaperu, jhumkas, chokers & heritage necklaces",
    gradient: "from-yellow-900 to-amber-800",
    accent: "hsl(var(--gold-light))",
    emoji: "✦",
    tag: "Andhra Traditional",
  },
  {
    range: "₹2L – ₹5L",
    label: "Milestone Jewels",
    desc: "Vaddanam, bridal sets, heirloom collections",
    gradient: "from-rose-950 to-pink-900",
    accent: "hsl(var(--rose-gold))",
    emoji: "✦",
    tag: "Bridal",
  },
];

export const ShopByBudget = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const cards = ref.current.querySelectorAll("[data-budget-card]");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60, scale: 0.94 },
        {
          opacity: 1, y: 0, scale: 1,
          stagger: 0.12, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: ref.current!, start: "top 78%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* background shimmer */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 60%, hsl(44 73% 50% / 0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, hsl(340 50% 60% / 0.05) 0%, transparent 50%)",
        }}
      />

      <div className="container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-rose-gold">Curated for every occasion</span>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 text-silver">
            Shop by <span className="text-gradient-gold">Budget</span>
          </h2>
          <p className="text-silver/65 mt-5 text-sm sm:text-base">
            From everyday silver to bridal heirlooms — find the perfect piece within your comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {budgets.map((b) => (
            <a
              key={b.range}
              data-budget-card
              href={waLink(`Hi, I'm looking for jewellery in the ${b.range} range. Can you help?`)}
              target="_blank"
              rel="noopener"
              className={`group relative rounded-2xl overflow-hidden cursor-pointer block bg-gradient-to-br ${b.gradient} border border-white/10 hover:border-[hsl(var(--gold)/0.5)] transition-all duration-500 hover:-translate-y-2 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)]`}
            >
              {/* glow */}
              <div
                aria-hidden
                className="absolute -top-6 -right-6 w-28 h-28 rounded-full blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-500"
                style={{ background: b.accent }}
              />

              <div className="relative p-7 flex flex-col gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl border border-white/10"
                  style={{ background: `${b.accent}22` }}
                >
                  <span style={{ color: b.accent }} className="font-display text-2xl">✦</span>
                </div>
                <div>
                  <p className="font-display text-2xl text-white leading-tight">{b.range}</p>
                  <p className="text-sm font-medium mt-1" style={{ color: b.accent }}>{b.label}</p>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{b.desc}</p>
                <div className="flex items-center gap-2 text-sm font-medium mt-2" style={{ color: b.accent }}>
                  Explore now
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="text-center text-silver/40 text-xs mt-10 tracking-wide">
          Prices based on prevailing gold/silver rates · BIS Hallmarked · In-store pricing may vary
        </p>
      </div>
    </section>
  );
};
