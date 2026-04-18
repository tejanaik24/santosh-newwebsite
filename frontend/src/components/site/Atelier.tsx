import { waLink } from "@/lib/site";
import founderImg from "@/assets/founder-santosh.jpg";

export const Atelier = () => (
  <section className="py-24 sm:py-32 relative overflow-hidden">
    {/* Subtle background texture */}
    <div
      aria-hidden
      className="absolute inset-0 -z-10"
      style={{ background: "radial-gradient(ellipse at 60% 50%, hsl(213 80% 14%) 0%, hsl(213 100% 8%) 70%)" }}
    />

    <div className="container">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* Founder photo */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative w-72 sm:w-80 lg:w-96">
            {/* Gold accent line */}
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
              style={{ background: "var(--gradient-gold)", opacity: 0.25 }}
              aria-hidden
            />
            <img
              src={founderImg}
              alt="Santosh — Founder & Master Jeweller, Srivatsala Silver House"
              className="relative rounded-2xl w-full object-cover shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] gold-border"
              loading="lazy"
            />
            {/* Founder label badge */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[hsl(var(--bg-dark))] border border-[hsl(var(--gold)/0.4)] rounded-full px-6 py-2 whitespace-nowrap text-center shadow-[var(--shadow-gold)]">
              <p className="text-[10px] tracking-[0.35em] uppercase text-rose-gold">Founder · Master Jeweller</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-8 lg:mt-0">
          <span className="text-[10px] tracking-[0.4em] uppercase text-rose-gold">The Atelier</span>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 text-silver leading-tight">
            A silver house built on{" "}
            <span className="text-gradient-gold italic">trust,</span>
            <br />
            polished by fifteen years of craft.
          </h2>

          <p className="text-silver/70 mt-6 leading-relaxed">
            When Santosh opened the first Srivatsala workshop in Vizag, he had one conviction: that
            every gram of gold a family brings home must be as pure as the blessings it represents.
            That conviction is now three generations of karigars, two sons learning the trade, and
            ten thousand families who return for every life milestone.
          </p>
          <p className="text-silver/70 mt-4 leading-relaxed">
            From temple-motif vaddanam to whisper-thin daily-wear chains, every Srivatsala piece is
            hand-finished on Revallapalem Road — never outsourced, never rushed.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 luxury-card rounded-2xl p-6 gold-border">
            {[
              { value: "15+", label: "Years of craft" },
              { value: "10,000+", label: "Vizag families" },
              { value: "100%", label: "BIS Hallmark" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-2xl sm:text-3xl text-gradient-gold leading-none">{s.value}</p>
                <p className="text-[10px] uppercase tracking-widest text-silver/60 mt-2">{s.label}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={waLink("Hi Santosh, I'd like to customise a jewellery piece.")}
              target="_blank"
              rel="noopener"
              className="btn-gold"
            >
              Customise on WhatsApp
            </a>
            <a href="#why" className="btn-ghost-gold">
              Visit the Atelier
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
);
