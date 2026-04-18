import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";
import { waLink } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

const infos = [
  { Icon: Clock, label: "Store Hours", value: "Mon – Sat: 10 AM – 8 PM\nSunday: 11 AM – 6 PM" },
  { Icon: MapPin, label: "Location", value: "Revallapalem Road\nMadhurawada, Visakhapatnam" },
  { Icon: Phone, label: "Call Us", value: "+91 9XXXXXXXXX" },
];

export const BookAppointment = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-appt-item]",
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, stagger: 0.15, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: ref.current!, start: "top 80%" },
        }
      );
      gsap.fromTo(
        "[data-appt-cta]",
        { opacity: 0, scale: 0.94 },
        {
          opacity: 1, scale: 1, duration: 0.9, ease: "back.out(1.6)", delay: 0.3,
          scrollTrigger: { trigger: ref.current!, start: "top 75%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* radial gold bg */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, hsl(44 73% 50% / 0.08) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, hsl(213 80% 14% / 1) 0%, hsl(213 100% 6%) 100%)",
        }}
      />

      {/* decorative corner ornament */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--gold)) 0%, transparent 70%)" }}
      />

      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Info side */}
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-rose-gold">Visit Us</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-4 text-silver leading-tight">
              Book a Personal{" "}
              <span className="text-gradient-gold italic">Consultation</span>
            </h2>
            <p className="text-silver/65 mt-5 leading-relaxed">
              Let our master jeweller guide you through our collection in-store. Bring your dream, we'll craft it in gold.
            </p>

            <div className="mt-10 space-y-5">
              {infos.map(({ Icon, label, value }) => (
                <div key={label} data-appt-item className="flex gap-5 items-start">
                  <div className="w-11 h-11 rounded-xl grid place-items-center border border-[hsl(var(--gold)/0.35)] text-gold-light shrink-0"
                    style={{ background: "hsl(var(--gold)/0.08)" }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-silver/45 mb-1">{label}</p>
                    <p className="text-silver/90 text-sm whitespace-pre-line leading-relaxed">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA card */}
          <div data-appt-cta className="luxury-card rounded-3xl p-8 sm:p-10 gold-border relative overflow-hidden">
            {/* shimmer overlay */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none rounded-3xl"
              style={{
                background: "linear-gradient(135deg, hsl(var(--gold)/0.06) 0%, transparent 50%, hsl(var(--gold)/0.04) 100%)",
              }}
            />
            <Calendar size={32} className="text-gold-light mb-6" />
            <h3 className="font-display text-3xl text-silver">Ready to visit?</h3>
            <p className="text-silver/60 mt-3 text-sm leading-relaxed">
              Walk in or WhatsApp us to confirm your preferred time. We'll have your shortlist ready when you arrive.
            </p>

            <ul className="mt-7 space-y-3">
              {[
                "Personalised 1-on-1 with our jeweller",
                "Custom sizing & engraving service",
                "Bridal set consultation with family",
                "Gold rate locked for 48 hrs post-visit",
              ].map((pt) => (
                <li key={pt} className="flex items-center gap-3 text-sm text-silver/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--gold))] shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={waLink("Hi Srivatsala, I'd like to book an appointment for a jewellery consultation.")}
                target="_blank"
                rel="noopener"
                className="btn-gold flex-1 text-center"
              >
                Book via WhatsApp
              </a>
              <a href="#location" className="btn-ghost-gold flex-1 text-center">
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
