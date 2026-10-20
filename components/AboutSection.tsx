import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { ASSETS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import Button from "./Button";

export default function AboutSection() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-copy">
          <SectionHeading label="About KIMACO Solar" title="Your Trusted Partner in Renewable Energy Solutions" id="about-title" />
          <p>KIMACO Solar is a Nigerian renewable energy company specializing in the design, supply, installation and maintenance of solar energy systems for homes, businesses, institutions and industries.</p>
          <Button href="#team" variant="outline">Learn More</Button>
        </div>
        <div className="about-visual">
          <div className="about-image-frame"><Image src={ASSETS.about} alt="KIMACO solar engineer discussing solar equipment with a client" fill sizes="(max-width: 767px) 90vw, (max-width: 1199px) 45vw, 540px" className="about-image" /></div>
          <div className="about-floating-card">
            <ShieldCheck size={33} strokeWidth={1.5} aria-hidden="true" />
            <p>Your Trusted<br />Partner in<br />Renewable Energy<br />Solutions</p>
            <span className="floating-card-line" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
