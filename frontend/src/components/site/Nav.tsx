import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Heart, Search } from "lucide-react";
import { Logo } from "./Logo";
import { SITE, waLink } from "@/lib/site";

const links = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "Andhra Traditional", href: "#andhra" },
  { label: "Bridal", href: "#bridal" },
  { label: "About", href: "#why" },
  { label: "Contact", href: "#location" },
];

export const Nav = () => {
  const ref = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  // Hide nav on scroll down, show on scroll up
  useEffect(() => {
    const yTo = gsap.quickTo(ref.current, "y", { duration: 0.4, ease: "power3.out" });
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current && y > 200;
      yTo(goingDown ? -120 : 0);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Stagger-in links when menu opens
  useEffect(() => {
    if (!overlayRef.current) return;
    if (open) {
      const items = overlayRef.current.querySelectorAll("[data-menu-item]");
      gsap.fromTo(
        items,
        { opacity: 0, x: -32 },
        { opacity: 1, x: 0, duration: 0.45, stagger: 0.07, ease: "power3.out", delay: 0.18 }
      );
    }
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        ref={ref}
        className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--bg-dark))] border-b border-[hsl(var(--gold)/0.3)]"
        style={{ boxShadow: "0 2px 24px hsl(213 100% 4% / 0.6)" }}
      >
        <div className="container flex items-center justify-between h-24">
          <a href="#home" className="flex items-center" aria-label="Srivatsala Silver House home">
            <Logo className="h-16 w-auto" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-sm tracking-wide text-silver/85 hover:text-gold-light transition-colors"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[hsl(var(--gold-light))] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              aria-label="Search"
              className="hidden sm:grid place-items-center w-10 h-10 rounded-full text-silver/80 hover:text-gold-light hover:bg-white/5 transition"
            >
              <Search size={18} />
            </button>
            <button
              aria-label="Wishlist"
              className="hidden sm:grid place-items-center w-10 h-10 rounded-full text-silver/80 hover:text-gold-light hover:bg-white/5 transition"
            >
              <Heart size={18} />
            </button>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="hidden sm:inline-flex btn-gold !py-2 !px-5 text-sm"
            >
              WhatsApp
            </a>

            {/* Animated hamburger / X */}
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid place-items-center w-10 h-10 rounded-full text-silver hover:text-gold-light transition-colors"
            >
              <span className="flex flex-col justify-center gap-[5px] w-5 h-5">
                <span
                  className="h-px bg-current rounded-full transition-all duration-300 origin-center"
                  style={{
                    transform: open ? "translateY(6px) rotate(45deg)" : "none",
                    width: "100%",
                  }}
                />
                <span
                  className="h-px bg-current rounded-full transition-all duration-300"
                  style={{
                    opacity: open ? 0 : 1,
                    transform: open ? "scaleX(0)" : "none",
                    width: "75%",
                  }}
                />
                <span
                  className="h-px bg-current rounded-full transition-all duration-300 origin-center"
                  style={{
                    transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
                    width: "100%",
                  }}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        ref={overlayRef}
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] bg-[hsl(var(--bg-dark))]/98 backdrop-blur-xl transition-all duration-500 ${
          open
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-3"
        }`}
      >
        {/* Top bar inside overlay */}
        <div className="container flex items-center justify-between h-24">
          <Logo className="h-16 w-auto" />

          {/* X button inside overlay (closes menu) */}
          <button
            aria-label="Close menu"
            onClick={close}
            className="grid place-items-center w-10 h-10 rounded-full text-silver hover:text-gold-light transition-colors"
          >
            <span className="flex flex-col justify-center gap-[5px] w-5 h-5">
              <span
                className="h-px bg-current rounded-full"
                style={{ transform: "translateY(6px) rotate(45deg)", width: "100%" }}
              />
              <span className="h-px bg-current rounded-full opacity-0" style={{ width: "75%" }} />
              <span
                className="h-px bg-current rounded-full"
                style={{ transform: "translateY(-6px) rotate(-45deg)", width: "100%" }}
              />
            </span>
          </button>
        </div>

        {/* Nav links */}
        <nav className="container mt-8 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-menu-item
              onClick={close}
              className="font-display text-3xl text-silver hover:text-gold-light transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            data-menu-item
            className="btn-gold mt-4 self-start"
            onClick={close}
          >
            WhatsApp Enquiry
          </a>
          <p data-menu-item className="text-silver/55 text-sm mt-6">
            {SITE.phone}
          </p>
        </nav>

        {/* Decorative gold accent */}
        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-px opacity-40"
          style={{ background: "var(--gradient-gold)" }}
        />
      </div>
    </>
  );
};
