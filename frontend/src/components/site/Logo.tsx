import logoWhite from "@/assets/logo-white.png";

type Props = { className?: string };

export const Logo = ({ className }: Props) => (
  <img
    src={logoWhite}
    alt="Srivatsala Silver House"
    className={className}
    style={{
      filter:
        "drop-shadow(0 0 8px hsl(44 73% 66% / 0.5)) drop-shadow(0 0 20px hsl(44 56% 54% / 0.2)) brightness(1.1)",
    }}
  />
);
