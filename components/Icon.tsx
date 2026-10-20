import { Wrench, PackageCheck, Lightbulb, TrendingUp, UsersRound, ShieldCheck, HardHat, ClipboardCheck, Gauge, Settings2, RefreshCw, Leaf, Headset } from "lucide-react";
import type { IconName } from "@/lib/data";

const icons = {
  wrench: Wrench, package: PackageCheck, lightbulb: Lightbulb,
  trending: TrendingUp, customers: UsersRound, shield: ShieldCheck,
  hardhat: HardHat, inspection: ClipboardCheck, gauge: Gauge,
  settings: Settings2, improvement: RefreshCw, leaf: Leaf, headset: Headset,
};

export default function Icon({ name, size = 29, className = "" }: { name: IconName; size?: number; className?: string }) {
  if (name === "solar") {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M6 12h20l4 14H2l4-14ZM4 19h24M12 12l-1 14m9-14 1 14M12 30h8m-4-4v4M16 2v3M7 5l2 2m16-2-2 2" />
        <path d="M12 9a4 4 0 0 1 8 0" />
      </svg>
    );
  }
  const LucideIcon = icons[name];
  return <LucideIcon size={size} strokeWidth={1.5} className={className} aria-hidden="true" />;
}
