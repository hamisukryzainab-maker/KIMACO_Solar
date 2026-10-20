import { partners } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import PartnerLogo from "./PartnerLogo";

export default function PartnersSection() {
  return (
    <section id="partners" className="section partners-section" aria-labelledby="partners-title">
      <div className="container">
        <SectionHeading label="Partners & Supply Network" title="Trusted Partnerships for Greater Impact" id="partners-title" center />
        <p className="partners-intro">We work with global and local partners to deliver the best solar equipment and solutions.</p>
        <div className="partners-grid">{partners.map((partner) => <PartnerLogo key={partner.name} {...partner} />)}</div>
      </div>
    </section>
  );
}
