import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import productBangles from "@/assets/product-bangles.jpg";
import productSilver from "@/assets/product-silver.jpg";
import productVaddanam from "@/assets/product-vaddanam.jpg";
import productKasulaperu from "@/assets/product-kasulaperu.jpg";
import bridalHero from "@/assets/bridal-hero.jpg";

const U = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=700&q=80`;

const cats: { name: string; img: string }[] = [
  { name: "Rings", img: U("1605100804763-247f67b3557e") },
  { name: "Necklaces", img: U("1599643477877-530eb83abc8e") },
  { name: "Bangles", img: productBangles },
  { name: "Earrings", img: U("1535632787350-4e68ef0ac584") },
  { name: "Chains", img: U("1602173574767-37ac01994b2a") },
  { name: "Bridal Sets", img: bridalHero },
  { name: "Silver", img: productSilver },
  { name: "Pendants", img: U("1588444837495-c6cfeb53f32d") },
  { name: "Mangalsutra", img: U("1619119069152-a2b331eb392a") },
  { name: "Anklets", img: U("1617038260897-41a1f14a8ca0") },
  { name: "Vaddanam", img: productVaddanam },
  { name: "Kasulaperu", img: productKasulaperu },
];

export const Categories = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    gsap.from(ref.current.querySelectorAll("[data-cat]"), {
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
      opacity: 0, y: 50, stagger: 0.06, duration: 0.7, ease: "power3.out",
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.trigger === ref.current && t.kill());
  }, []);

  return (
    <section id="collections" className="py-24 sm:py-32 relative">
      <div className="container">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-rose-gold">Shop by Category</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-3 text-silver">Our <span className="text-gradient-gold">Collections</span></h2>
          </div>
        </div>
      </div>

      <div ref={ref} className="container">
        <div className="flex lg:grid lg:grid-cols-6 gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none -mx-6 px-6 lg:mx-0 lg:px-0">
          {cats.map((c) => (
            <button
              key={c.name}
              data-cat
              data-testid={`category-${c.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group snap-center shrink-0 lg:shrink flex flex-col items-center gap-3 w-28 lg:w-auto"
            >
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden gold-border transition-transform duration-500 group-hover:scale-105 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{ background: "radial-gradient(circle at 50% 40%, transparent 40%, rgba(5,10,30,0.55) 100%)" }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                  style={{ background: "radial-gradient(circle, hsl(44 73% 66% / 0.28), transparent 70%)" }}
                />
              </div>
              <span className="text-sm text-silver/85 group-hover:text-gold-light transition tracking-wide">{c.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
