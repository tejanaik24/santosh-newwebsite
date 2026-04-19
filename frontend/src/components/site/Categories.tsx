import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import productBangles from "@/assets/product-bangles.jpg";
import productSilver from "@/assets/product-silver.jpg";
import productJhumka from "@/assets/product-jhumka.jpg";
import mangomala from "@/assets/mangomala.webp";
import gundalaharam from "@/assets/gundalaharam.jpg";
import bridalHero from "@/assets/bridal-hero.jpg";
import mangalasutram from "@/assets/mangalasutram.jpg";
import ankelets from "@/assets/ankelets.webp";
import vadanam from "@/assets/vadanam.webp";
import kasulaperu from "@/assets/kasulaperu-new.webp";
import matteelu from "@/assets/matteelu.jpeg";
import vanki from "@/assets/vanki.jpg";

const cats: { name: string; img: string }[] = [
  { name: "Rings",        img: matteelu },
  { name: "Necklaces",    img: mangomala },
  { name: "Bangles",      img: productBangles },
  { name: "Earrings",     img: productJhumka },
  { name: "Chains",       img: gundalaharam },
  { name: "Bridal Sets",  img: bridalHero },
  { name: "Silver",       img: productSilver },
  { name: "Vanki",        img: vanki },
  { name: "Mangalsutra",  img: mangalasutram },
  { name: "Anklets",      img: ankelets },
  { name: "Vaddanam",     img: vadanam },
  { name: "Kasulaperu",   img: kasulaperu },
];

gsap.registerPlugin(ScrollTrigger);

export const Categories = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const tween = gsap.from(ref.current.querySelectorAll("[data-cat]"), {
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
      opacity: 0, y: 50, stagger: 0.06, duration: 0.7, ease: "power3.out",
    });
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, []);

  return (
    <section id="collections" className="py-24 sm:py-32 relative">
      <div className="container">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-rose-gold">Shop by Category</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-3 text-silver">
              Our <span className="text-gradient-gold">Collections</span>
            </h2>
          </div>
        </div>
      </div>

      <div ref={ref} className="container">
        <div className="flex lg:grid lg:grid-cols-6 gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none -mx-6 px-6 lg:mx-0 lg:px-0">
          {cats.map((c, i) => (
            <button
              key={c.name}
              data-cat
              data-testid={`category-${c.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group snap-center shrink-0 lg:shrink flex flex-col items-center gap-3 w-28 lg:w-auto"
            >
              <div className="relative w-28 h-28 sm:w-32 sm:h-32">
                {/* Spinning gold-rose ring */}
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0%, hsl(44 73% 66% / 0.9) 35%, hsl(44 56% 54% / 0.6) 50%, hsl(351 33% 57% / 0.7) 65%, transparent 100%)",
                    animation: `spin ${3.5 + (i % 4) * 0.6}s linear infinite`,
                    animationDelay: `${-(i * 0.5)}s`,
                    padding: "2.5px",
                    willChange: "transform",
                  }}
                />
                {/* Inner circle */}
                <div className="absolute inset-[2.5px] rounded-full overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 40%, transparent 38%, rgba(5,10,30,0.55) 100%)",
                    }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                    style={{
                      background:
                        "radial-gradient(circle, hsl(44 73% 66% / 0.3), transparent 70%)",
                    }}
                  />
                </div>
              </div>
              <span className="text-sm text-silver/85 group-hover:text-gold-light transition tracking-wide">
                {c.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
