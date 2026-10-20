import Image from "next/image";
import { ArrowUpRight, Globe, Mail, MapPin, MessageCircle, Phone, Warehouse } from "lucide-react";
import { ACTIONS, ASSETS, COMPANY, EXTERNAL_LINK_PROPS } from "@/lib/constants";
import Button from "./Button";

export default function CTASection() {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.office)}`;
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="final-cta">
        <div className="cta-photograph"><Image src={ASSETS.worker} alt="KIMACO solar professional helping to build a sustainable energy future" fill sizes="(max-width: 767px) 100vw, 55vw" /></div>
        <div className="cta-overlay" />
        <div className="container cta-inner">
          <p className="eyebrow"><span aria-hidden="true" />Your Future. Our Energy.</p>
          <h2 id="contact-title">Ready to Power<br />Your Future?</h2>
          <p className="cta-description">Let&apos;s build a cleaner, brighter and more sustainable tomorrow together.</p>
          <div className="button-row"><Button href={ACTIONS.consultation} variant="navy" external>Request a Consultation</Button><Button href={ACTIONS.quote} variant="white" external>Get a Quote</Button></div>
        </div>
      </div>
      <div className="container contact-information">
        <div className="contact-direct">
          <h3>Get in touch</h3>
          <a className="contact-link" href={COMPANY.phoneHref}><Phone size={17} aria-hidden="true" /><span>{COMPANY.phone}</span></a>
          <a className="contact-link" href={ACTIONS.consultation} {...EXTERNAL_LINK_PROPS} aria-label={`Start a WhatsApp chat at ${COMPANY.whatsapp} (opens in a new tab)`}><MessageCircle size={17} aria-hidden="true" /><span>{COMPANY.whatsapp}<small>WhatsApp / Mobile</small></span></a>
          <a className="contact-link" href={`mailto:${COMPANY.email}`}><Mail size={17} aria-hidden="true" /><span>{COMPANY.email}</span></a>
          <a className="contact-link" href={COMPANY.url} {...EXTERNAL_LINK_PROPS}><Globe size={17} aria-hidden="true" /><span>{COMPANY.website}</span></a>
        </div>
        <div className="address-card">
          <span className="address-icon"><MapPin size={25} strokeWidth={1.5} aria-hidden="true" /></span>
          <h3>Our Office</h3>
          <address>{COMPANY.office}</address>
          <a className="text-link" href={directionsUrl} {...EXTERNAL_LINK_PROPS}>Get Directions<ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
        <div className="address-card">
          <span className="address-icon"><Warehouse size={25} strokeWidth={1.5} aria-hidden="true" /></span>
          <h3>Our Warehouse</h3>
          <address>{COMPANY.warehouse}</address>
          <a className="text-link" href={ACTIONS.consultation} {...EXTERNAL_LINK_PROPS}>Contact Our Team<ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
