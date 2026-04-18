type Props = { className?: string };

export const Logo = ({ className }: Props) => (
  <svg
    viewBox="0 0 230 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Srivatsala Silver House"
    className={className}
    style={{ filter: "drop-shadow(0 0 10px hsl(44 73% 66% / 0.45))" }}
  >
    <defs>
      <linearGradient id="logoSlv" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D8E6EF" />
        <stop offset="45%" stopColor="#9BAFC0" />
        <stop offset="100%" stopColor="#6D8898" />
      </linearGradient>
      <linearGradient id="logoSlvHi" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#EAF2F8" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="logoGld" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F2D878" />
        <stop offset="100%" stopColor="#C9A84C" />
      </linearGradient>
    </defs>

    {/* ── Srivatsa symbol: two interlocked ribbon loops ── */}
    <g transform="translate(2, 3)">
      {/* Shadow layer */}
      <ellipse cx="25" cy="25" rx="11" ry="22"
        transform="rotate(-32 25 25)"
        fill="none" stroke="#1A3040" strokeWidth="9" />
      <ellipse cx="25" cy="25" rx="11" ry="22"
        transform="rotate(32 25 25)"
        fill="none" stroke="#1A3040" strokeWidth="9" />

      {/* Base silver ribbon — outer edge (dark) */}
      <ellipse cx="25" cy="25" rx="11" ry="22"
        transform="rotate(-32 25 25)"
        fill="none" stroke="#607D8C" strokeWidth="7" />
      <ellipse cx="25" cy="25" rx="11" ry="22"
        transform="rotate(32 25 25)"
        fill="none" stroke="#607D8C" strokeWidth="7" />

      {/* Mid silver */}
      <ellipse cx="25" cy="25" rx="11" ry="22"
        transform="rotate(-32 25 25)"
        fill="none" stroke="url(#logoSlv)" strokeWidth="5" />
      <ellipse cx="25" cy="25" rx="11" ry="22"
        transform="rotate(32 25 25)"
        fill="none" stroke="url(#logoSlv)" strokeWidth="5" />

      {/* Inner bright highlight stripe */}
      <ellipse cx="25" cy="25" rx="11" ry="22"
        transform="rotate(-32 25 25)"
        fill="none" stroke="url(#logoSlvHi)" strokeWidth="1.8" />
      <ellipse cx="25" cy="25" rx="11" ry="22"
        transform="rotate(32 25 25)"
        fill="none" stroke="url(#logoSlvHi)" strokeWidth="1.8" />

      {/* Gold teardrop center */}
      <path
        d="M25,19 C25,19 20,26 20,30.5 A5,5 0 0 0 30,30.5 C30,26 25,19 25,19Z"
        fill="url(#logoGld)"
      />
      {/* Teardrop inner highlight */}
      <path
        d="M25,21 C25,21 22.5,25.5 22.5,28 A2.5,2.5 0 0 0 24,29.5"
        fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1" strokeLinecap="round"
      />
    </g>

    {/* ── Brand text ── */}
    {/* SRIVATSALA */}
    <text
      x="64" y="22"
      fontFamily="Georgia, 'Times New Roman', serif"
      fontSize="17.5"
      fontWeight="700"
      letterSpacing="4"
      fill="white"
    >
      SRIVATSALA
    </text>

    {/* SILVER HOUSE */}
    <text
      x="64" y="38"
      fontFamily="Georgia, 'Times New Roman', serif"
      fontSize="14"
      fontWeight="400"
      letterSpacing="4.5"
      fill="#BDD0DC"
    >
      SILVER HOUSE
    </text>

    {/* GOLD & SILVER JEWELLERY */}
    <text
      x="65" y="49"
      fontFamily="Georgia, 'Times New Roman', serif"
      fontSize="7.5"
      fontWeight="300"
      letterSpacing="3"
      fill="url(#logoGld)"
    >
      GOLD &amp; SILVER JEWELLERY
    </text>

    {/* Thin gold rule */}
    <line x1="64" y1="52.5" x2="224" y2="52.5"
      stroke="url(#logoGld)" strokeWidth="0.55" strokeOpacity="0.6" />
  </svg>
);
