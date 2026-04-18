import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import productVaddanam from "@/assets/product-vaddanam.jpg";
import productKasulaperu from "@/assets/product-kasulaperu.jpg";
import productJhumka from "@/assets/product-jhumka.jpg";

const U = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`;

const designs: { name: string; desc: string; img: string }[] = [
  { name: "Vaddanam", desc: "Ornate bridal waist belt", img: productVaddanam },
  { name: "Kasulaperu", desc: "Lakshmi coin necklace", img: productKasulaperu },
  { name: "Gundla Haram", desc: "Long beaded necklace", img: U("1611652022419-a9419f74343d") },
  { name: "Jhumkas", desc: "Bell-shaped earrings", img: productJhumka },
  { name: "Mango Mala", desc: "Mango motif necklace", img: U("1573408301185-9146fe634ad0") },
  { name: "Nethichutti", desc: "Forehead ornament", img: U("1600721391776-b5cd0e0048f9") },
  { name: "Vanki", desc: "Armlet with gem inlay", img: U("1580227974546-fbd48825d991") },
  { name: "Buttalu", desc: "Stud earrings", img: U("1543294001-f7cd5d7fb516") },
  { name: "Mattelu", desc: "Silver toe rings", img: U("1617038220319-276d3cfab638") },
];

export const AndhraTraditional = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const cards = ref.current.querySelectorAll("[data-card]");
    gsap.from(cards, {
      scrollTrigger: { trigger: ref.current, start: "top 75%" },
      opacity: 0, y: 60, stagger: 0.08, duration: 0.9, ease: "power3.out",
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.trigger === ref.current && t.kill());
  }, []);

  return (
    <section id="andhra" ref={ref} className="container py-24 sm:py-32">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.4em] text-rose-gold">Heritage of Andhra</span>
        <h2 className="font-display text-4xl sm:text-5xl mt-4 text-silver">Andhra Traditional <span className="text-gradient-gold">Designs</span></h2>
        <p className="text-silver/70 mt-5">Classic South Indian jewellery — crafted in the timeless temple style passed through generations.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
        {designs.map((d) => (
          <div
            key={d.name}
            data-card
            data-testid={`andhra-card-${d.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="group relative rounded-2xl gold-border overflow-hidden hover:-translate-y-1 transition-transform duration-300 aspect-[4/5] sm:aspect-[3/4]"
          >
            <img
              src={d.img}
              alt={d.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
            />
            {/* Depth gradient */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(5,10,30,0.15) 0%, rgba(5,10,30,0.45) 55%, rgba(5,10,30,0.92) 100%)",
              }}
            />
            {/* Gold glow on hover */}
            <div
              aria-hidden
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-30 blur-3xl group-hover:opacity-70 transition duration-500"
              style={{ background: "var(--gradient-gold)" }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-7">
              <h3 className="font-display text-2xl sm:text-3xl text-gold-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                {d.name}
              </h3>
              <p className="text-silver/90 text-sm mt-1.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                {d.desc}
              </p>
              <div className="mt-4 h-px w-12 bg-rose-gold/70 group-hover:w-24 transition-all duration-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
