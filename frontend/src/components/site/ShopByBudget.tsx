import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { waLink } from "@/lib/site";
import productSilver from "@/assets/product-silver.jpg";
import productJhumka from "@/assets/product-jhumka.jpg";
import kasulaperu from "@/assets/kasulaperu-new.webp";
import vadanam from "@/assets/vadanam.webp";

gsap.registerPlugin(ScrollTrigger);

const HEX = "polygon(50% 0%, 100% 18%, 100% 82%, 50% 100%, 0% 82%, 0% 18%)";

const budgets = [
  {
    range: "Under ₹10,000",
    label: "Daily Essentials",
    desc: "Silver chains, toe rings, anklets & everyday wear",
    accentColor: "#E5E4E2",
    accentHsl: "60 4% 89%",
    shadowColor: "hsl(60 4% 89% / 0.35)",
    borderColor: "hsl(60 4% 89% / 0.55)",
    img: productSilver,
    waMsg: "Hi, I'm looking for jewellery under ₹10,000. Can you help?",
  },
  {
    range: "₹10K – ₹50K",
    label: "Gifting Picks",
    desc: "Gold earrings, small pendants, lightweight bangles",
    accentColor: "#C9A84C",
    accentHsl: "44 56% 54%",
    shadowColor: "hsl(44 56% 54% / 0.4)",
    borderColor: "hsl(44 73% 66% / 0.6)",
    img: productJhumka,
    waMsg: "Hi, I'm looking for jewellery in the ₹10K–₹50K range.",
  },
  {
    range: "₹50K – ₹2L",
    label: "Statement Pieces",
    desc: "Kasulaperu, jhumkas, chokers & heritage necklaces",
    accentColor: "#E8C96A",
    accentHsl: "44 73% 66%",
    shadowColor: "hsl(44 73% 66% / 0.4)",
    borderColor: "hsl(44 73% 66% / 0.7)",
    img: kasulaperu,
    waMsg: "Hi, I'm looking for jewellery in the ₹50K–₹2L range.",
  },
  {
    range: "₹2L – ₹5L",
    label: "Milestone Jewels",
    desc: "Vaddanam, bridal sets, heirloom collections",
    accentColor: "#B76E79",
    accentHsl: "351 33% 57%",
    shadowColor: "hsl(351 33% 57% / 0.4)",
    borderColor: "hsl(351 40% 65% / 0.6)",
    img: vadanam,
    waMsg: "Hi, I'm looking for bridal jewellery in the ₹2L–₹5L range.",
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
        { opacity: 0, y: 70, scale: 0.88 },
        {
          opacity: 1, y: 0, scale: 1,
          stagger: 0.14, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: ref.current!, start: "top 78%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 60%, hsl(44 73% 50% / 0.07) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, hsl(340 50% 60% / 0.06) 0%, transparent 50%)",
        }}
      />

      <div className="container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-rose-gold">
            Curated for every occasion
          </span>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 text-silver">
            Shop by <span className="text-gradient-gold">Budget</span>
          </h2>
          <p className="text-silver/65 mt-5 text-sm sm:text-base">
            From everyday silver to bridal heirlooms — find the perfect piece within your comfort.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {budgets.map((b) => (
            <a
              key={b.range}
              data-budget-card
              href={waLink(b.waMsg)}
              target="_blank"
              rel="noopener"
              className="group cursor-pointer block"
              style={{
                filter: `drop-shadow(0 0 4px ${b.shadowColor}) drop-shadow(0 12px 28px rgba(0,0,0,0.55))`,
              }}
            >
              {/* Hex border shell */}
              <div
                className="relative transition-all duration-500 group-hover:scale-105"
                style={{
                  clipPath: HEX,
                  aspectRatio: "4/5",
                  padding: "3px",
                  background: `linear-gradient(160deg, ${b.borderColor}, transparent 60%, ${b.borderColor})`,
                }}
              >
                {/* Inner hex content */}
                <div
                  className="relative w-full h-full overflow-hidden"
                  style={{ clipPath: HEX }}
                >
                  {/* Photo */}
                  <img
                    src={b.img}
                    alt={b.label}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient overlay */}
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(5,10,30,0.2) 0%, rgba(5,10,30,0.55) 40%, rgba(5,10,30,0.92) 100%)",
                    }}
                  />

                  {/* Accent glow top */}
                  <div
                    aria-hidden
                    className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-2xl opacity-30 group-hover:opacity-55 transition-opacity duration-500"
                    style={{ background: b.accentColor }}
                  />

                  {/* Text content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end text-center pb-[18%] px-4">
                    <p
                      className="font-display text-lg sm:text-xl lg:text-2xl text-white leading-tight font-medium"
                    >
                      {b.range}
                    </p>
                    <p
                      className="text-xs sm:text-sm font-semibold mt-1 tracking-wide"
                      style={{ color: b.accentColor }}
                    >
                      {b.label}
                    </p>
                    <p className="text-white/55 text-[10px] sm:text-xs mt-1.5 leading-relaxed line-clamp-2">
                      {b.desc}
                    </p>
                    <div
                      className="mt-3 flex items-center gap-1 text-xs font-semibold tracking-wider transition-transform duration-300 group-hover:translate-y-[-2px]"
                      style={{ color: b.accentColor }}
                    >
                      Explore
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="text-center text-silver/40 text-xs mt-12 tracking-wide">
          Prices based on prevailing gold/silver rates · BIS Hallmarked · In-store pricing may vary
        </p>
      </div>
    </section>
  );
};
