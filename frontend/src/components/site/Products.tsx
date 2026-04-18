import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart } from "lucide-react";
import vaddanam from "@/assets/product-vaddanam.jpg";
import jhumka from "@/assets/product-jhumka.jpg";
import kasulaperu from "@/assets/product-kasulaperu.jpg";
import bangles from "@/assets/product-bangles.jpg";
import silver from "@/assets/product-silver.jpg";
import hero from "@/assets/hero-jewellery.jpg";
import { waLink } from "@/lib/site";

type Tag = "Gold" | "Silver" | "Bridal" | "Andhra Traditional" | "Daily Wear";
type Badge = "New Arrival" | "Best Seller" | "Limited" | "Trending";

const products: { name: string; img: string; weight: string; price: string; badge?: Badge; tags: Tag[] }[] = [
  { name: "Lakshmi Kasulaperu", img: kasulaperu, weight: "42g", price: "₹2.94L – ₹3.2L", badge: "Best Seller", tags: ["Gold", "Andhra Traditional", "Bridal"] },
  { name: "Bridal Vaddanam", img: vaddanam, weight: "165g", price: "₹11.5L – ₹12.8L", badge: "Trending", tags: ["Gold", "Bridal", "Andhra Traditional"] },
  { name: "Temple Jhumkas", img: jhumka, weight: "18g", price: "₹1.26L – ₹1.4L", badge: "New Arrival", tags: ["Gold", "Andhra Traditional"] },
  { name: "Royal Gold Bangles", img: bangles, weight: "78g", price: "₹5.46L – ₹6.1L", tags: ["Gold", "Daily Wear"] },
  { name: "Signature Choker", img: hero, weight: "55g", price: "₹3.85L – ₹4.3L", badge: "Limited", tags: ["Gold", "Bridal"] },
  { name: "Silver Bangle Pair", img: silver, weight: "62g", price: "₹5,400 – ₹6,200", badge: "Best Seller", tags: ["Silver", "Daily Wear"] },
  { name: "Gundla Haram", img: kasulaperu, weight: "92g", price: "₹6.44L – ₹7.2L", tags: ["Gold", "Andhra Traditional", "Bridal"] },
  { name: "Mango Mala", img: hero, weight: "48g", price: "₹3.36L – ₹3.75L", badge: "New Arrival", tags: ["Gold", "Andhra Traditional"] },
  { name: "Pearl Drop Jhumkas", img: jhumka, weight: "14g", price: "₹98,000 – ₹1.1L", tags: ["Gold", "Daily Wear"] },
  { name: "Antique Vaddanam", img: vaddanam, weight: "180g", price: "₹12.6L – ₹14L", badge: "Limited", tags: ["Gold", "Bridal", "Andhra Traditional"] },
  { name: "Silver Anklets", img: silver, weight: "85g", price: "₹7,400 – ₹8,500", tags: ["Silver", "Daily Wear"] },
  { name: "Heritage Necklace", img: hero, weight: "60g", price: "₹4.2L – ₹4.8L", badge: "Trending", tags: ["Gold", "Andhra Traditional"] },
];

const filters: ("All" | Tag)[] = ["All", "Gold", "Silver", "Bridal", "Andhra Traditional", "Daily Wear"];

export const Products = () => {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const gridRef = useRef<HTMLDivElement>(null);

  const list = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.tags.includes(active as Tag))),
    [active]
  );

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll("[data-product]");
    const tween = gsap.fromTo(
      cards,
      { opacity: 0, y: 40, scale: 0.97 },
      {
        opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.05, ease: "power3.out",
        scrollTrigger: { trigger: gridRef.current, start: "top 85%", once: false },
      }
    );
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, [active]);

  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.4em] text-rose-gold">Featured</span>
          <h2 className="font-display text-4xl sm:text-5xl mt-3 text-silver">Signature <span className="text-gradient-gold">Pieces</span></h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm tracking-wide border transition-all ${
                active === f
                  ? "bg-[hsl(var(--gold))] text-[hsl(var(--bg-dark))] border-transparent shadow-[var(--shadow-gold)]"
                  : "border-[hsl(var(--gold)/0.4)] text-silver/80 hover:text-gold-light hover:border-[hsl(var(--gold-light))]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {list.map((p, i) => (
            <article
              key={`${p.name}-${i}`}
              data-product
              className="group luxury-card rounded-2xl overflow-hidden gold-border hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative aspect-square overflow-hidden bg-navy-dark">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Badge */}
                {p.badge && (
                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] tracking-widest uppercase backdrop-blur font-medium ${
                    p.badge === "New Arrival" ? "bg-emerald-900/80 text-emerald-300 border border-emerald-500/40" :
                    p.badge === "Best Seller" ? "bg-[hsl(var(--bg-dark)/0.8)] text-gold-light border border-[hsl(var(--gold)/0.5)]" :
                    p.badge === "Limited" ? "bg-rose-900/80 text-rose-300 border border-rose-500/40" :
                    "bg-purple-900/80 text-purple-300 border border-purple-500/40"
                  }`}>
                    {p.badge}
                  </span>
                )}
                {!p.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] tracking-widest uppercase bg-[hsl(var(--bg-dark)/0.7)] text-gold-light border border-[hsl(var(--gold)/0.4)] backdrop-blur">
                    BIS Hallmark
                  </span>
                )}
                <button
                  onClick={() => setLiked((s) => ({ ...s, [p.name + i]: !s[p.name + i] }))}
                  aria-label="Wishlist"
                  className="absolute top-3 right-3 w-9 h-9 rounded-full grid place-items-center bg-[hsl(var(--bg-dark)/0.7)] backdrop-blur border border-[hsl(var(--gold)/0.3)] transition hover:scale-110"
                >
                  <Heart
                    size={16}
                    className={liked[p.name + i] ? "fill-[hsl(var(--rose-gold))] text-[hsl(var(--rose-gold))]" : "text-silver"}
                  />
                </button>
                {/* Price overlay on hover */}
                <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[hsl(var(--bg-dark)/0.9)] to-transparent flex items-end px-4 pb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-display text-sm text-gold-light">{p.price}</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg text-silver leading-snug">{p.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-sm font-medium text-gold-light">{p.price}</p>
                  <p className="text-xs text-silver/45 tracking-wide">{p.weight}</p>
                </div>
                <a
                  href={waLink(`Hi Srivatsala Silver House, I'd like to enquire about: ${p.name} (${p.price})`)}
                  target="_blank"
                  rel="noopener"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-gold-light group/link"
                >
                  Enquire on WhatsApp
                  <span className="transition-transform group-hover/link:translate-x-1">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
