import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/data";
import { EXTERNAL_LINK_PROPS, whatsappUrl } from "@/lib/constants";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <a href={whatsappUrl(`Hello KIMACO Nigeria Limited, I would like to request more information and a quotation for ${product.title.toLowerCase()}. Please help me find the right solution.`)} {...EXTERNAL_LINK_PROPS} aria-label={`Enquire about ${product.title} on WhatsApp (opens in a new tab)`}>
        <div className={`product-image ${product.contain ? "product-image-contain" : ""}`}><Image src={product.image} alt={product.alt} fill sizes="(max-width: 479px) 88vw, (max-width: 767px) 45vw, (max-width: 1199px) 30vw, 240px" /></div>
        <div className="product-card-info"><h3>{product.title}</h3><span className="circle-arrow"><ArrowUpRight size={16} aria-hidden="true" /></span></div>
      </a>
    </article>
  );
}
