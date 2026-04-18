type Props = { className?: string };

export const Logo = ({ className }: Props) => (
  <svg
    viewBox="0 0 220 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Srivatsala Silver House"
    className={className}
    style={{ filter: "drop-shadow(0 0 10px hsl(44 73% 66% / 0.55)) drop-shadow(0 0 24px hsl(44 56% 54% / 0.25))" }}
  >
    <defs>
      <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F0D080" />
        <stop offset="45%" stopColor="#E8C96A" />
        <stop offset="100%" stopColor="#C9A84C" />
      </linearGradient>
      <linearGradient id="logoSilver" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#D4D4D4" />
      </linearGradient>
    </defs>

    {/* Decorative S glyph */}
    <text
      x="4"
      y="38"
      fontFamily="Georgia, 'Times New Roman', serif"
      fontSize="44"
      fontStyle="italic"
      fontWeight="400"
      fill="url(#logoGold)"
    >
      S
    </text>

    {/* RIVATSALA */}
    <text
      x="38"
      y="28"
      fontFamily="Georgia, 'Times New Roman', serif"
      fontSize="18"
      fontWeight="700"
      letterSpacing="3"
      fill="url(#logoSilver)"
    >
      RIVATSALA
    </text>

    {/* SILVER HOUSE */}
    <text
      x="39"
      y="43"
      fontFamily="Georgia, 'Times New Roman', serif"
      fontSize="9"
      fontWeight="400"
      letterSpacing="4.5"
      fill="url(#logoGold)"
    >
      SILVER HOUSE
    </text>

    {/* Thin gold line under text */}
    <line x1="38" y1="47" x2="216" y2="47" stroke="url(#logoGold)" strokeWidth="0.6" strokeOpacity="0.7" />
  </svg>
);
