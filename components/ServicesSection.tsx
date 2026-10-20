import { services } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section id="services" className="section services-section" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading label="Our Services" title="Comprehensive Solar Solutions" id="services-title" />
        <div className="services-grid">{services.map((service, index) => <ServiceCard service={service} index={index} key={service.title} />)}</div>
      </div>
    </section>
  );
}
