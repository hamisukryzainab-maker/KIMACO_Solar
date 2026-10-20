import Image from "next/image";
import { ASSETS } from "@/lib/constants";

export default function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#home" className={`brand-logo ${footer ? "brand-logo-footer" : ""}`} aria-label="KIMACO Nigeria Limited — home">
      <Image src={ASSETS.logo} width={866} height={288} alt="KIMACO Nigeria Limited" sizes="(max-width: 600px) 150px, 180px" preload={!footer} />
    </a>
  );
}
