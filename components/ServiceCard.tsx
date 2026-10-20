import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/data";
import { EXTERNAL_LINK_PROPS, whatsappUrl } from "@/lib/constants";
import Icon from "./Icon";

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <article className="service-card">
      <a href={whatsappUrl(`Hello KIMACO Nigeria Limited, I would like to learn more about your ${service.title.toLowerCase()} services. Please advise how we can get started.`)} {...EXTERNAL_LINK_PROPS} aria-label={`Enquire about ${service.title} on WhatsApp (opens in a new tab)`}>
        <div className="service-card-top"><Icon name={service.icon} size={34} /><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span></div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <ArrowUpRight className="service-arrow" size={20} strokeWidth={1.6} aria-hidden="true" />
      </a>
    </article>
  );
}
