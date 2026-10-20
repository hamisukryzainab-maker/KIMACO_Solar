import Image from "next/image";
import { ACTIONS, ASSETS } from "@/lib/constants";
import Button from "./Button";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <Image src={ASSETS.hero} alt="Solar installation professional fitting rooftop solar panels in Nigeria" fill sizes="100vw" preload quality={85} className="hero-image" />
      <div className="hero-overlay" />
      <div className="container hero-stage">
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow"><span aria-hidden="true" />KIMACO Solar</p>
          <h1 id="hero-title"><span>Reliable Solar Power.</span><span className="hero-highlight">Built for Your Future.</span></h1>
          <p className="hero-description">KIMACO Solar provides reliable, affordable and sustainable solar solutions for homes, businesses, institutions and industries.</p>
          <div className="button-row">
            <Button href={ACTIONS.consultation} external aria-label="Get a free consultation on WhatsApp (opens in a new tab)">Get a Free Consultation</Button>
            <Button href="#products" variant="glass">Explore Solutions</Button>
          </div>
        </div>
        <div className="hero-caption" aria-hidden="true"><span />SOLAR · POWER · ENERGY</div>
      </div>
      <div className="trust-strip">
        <div className="container trust-grid">
          <div className="trust-feature"><Icon name="hardhat" size={30} /><span>Professional Installation</span></div>
          <div className="trust-feature"><Icon name="shield" size={30} /><span>Quality Equipment</span></div>
          <div className="trust-feature"><Icon name="headset" size={30} /><span>After-Sales Support</span></div>
        </div>
      </div>
    </section>
  );
}
