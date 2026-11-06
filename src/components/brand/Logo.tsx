import Image from "next/image";
import { siteConfig } from "@/config/site";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  size?: number;
};

export function Logo({ className = "", showWordmark = true, size = 36 }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/logo.svg"
        alt={`${siteConfig.name} logo`}
        width={size}
        height={size}
        priority
      />
      {showWordmark ? (
        <span className="text-lg font-semibold tracking-tight text-teal-950">
          {siteConfig.name}
        </span>
      ) : null}
    </div>
  );
}
