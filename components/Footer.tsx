import { Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { navigation, services } from "@/lib/data";
import { ACTIONS, COMPANY, EXTERNAL_LINK_PROPS } from "@/lib/constants";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about"><BrandLogo footer /><p>KIMACO Solar is a Nigerian renewable energy company providing reliable, affordable and sustainable solar solutions for homes, businesses, institutions and industries.</p><span className="footer-brand-category">Solar <i /> Power <i /> Energy</span></div>
        <div className="footer-column"><h2>Quick Links</h2><nav aria-label="Footer navigation">{navigation.map(({ label, href }) => <a href={href} key={href}>{label}</a>)}</nav></div>
        <div className="footer-column"><h2>Our Services</h2><ul>{services.map((service) => <li key={service.title}><a href="#services">{service.shortTitle}</a></li>)}</ul></div>
        <div className="footer-column footer-contact"><h2>Get In Touch</h2><a href={COMPANY.phoneHref}><Phone size={15} aria-hidden="true" /><span>{COMPANY.phone}</span></a><a href={ACTIONS.consultation} {...EXTERNAL_LINK_PROPS}><MessageCircle size={15} aria-hidden="true" /><span>{COMPANY.whatsapp}</span></a><a href={`mailto:${COMPANY.email}`}><Mail size={15} aria-hidden="true" /><span>{COMPANY.email}</span></a><a href="#contact"><MapPin size={15} aria-hidden="true" /><span>{COMPANY.office}</span></a><a href={COMPANY.url} {...EXTERNAL_LINK_PROPS}><Globe size={15} aria-hidden="true" /><span>{COMPANY.website}</span></a></div>
      </div>
      <div className="copyright"><div className="container copyright-inner"><p>© 2026 KIMACO Nigeria Limited. All rights reserved.</p><p className="copyright-tagline"><span aria-hidden="true" />Clean Energy for a Brighter Tomorrow</p></div></div>
    </footer>
  );
}
