import logoCropped from "@/assets/logo-cropped.png";

type Props = { className?: string };

export const Logo = ({ className }: Props) => (
  <img
    src={logoCropped}
    alt="Srivatsala Silver House"
    className={className}
    style={{ objectFit: "contain", mixBlendMode: "screen" }}
  />
);
