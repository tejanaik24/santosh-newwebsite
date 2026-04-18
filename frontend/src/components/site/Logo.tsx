import logoSvg from "@/assets/srivatsala-logo.svg";

type Props = { className?: string };

export const Logo = ({ className }: Props) => (
  <img
    src={logoSvg}
    alt="Srivatsala Silver House"
    className={className}
    style={{ objectFit: "contain" }}
  />
);
