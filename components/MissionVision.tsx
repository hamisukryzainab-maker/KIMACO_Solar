import Image from "next/image";
import { Eye, Target } from "lucide-react";
import { ASSETS } from "@/lib/constants";

export default function MissionVision() {
  return (
    <section className="mission-vision" aria-label="Our mission and vision">
      <article className="mission-panel">
        <div className="mission-panel-content">
          <Target size={34} strokeWidth={1.4} aria-hidden="true" />
          <h2>Our Mission</h2>
          <p>To integrate cutting-edge technologies and exceptional service delivery in renewable energy, petroleum downstream, and power sectors while ensuring reliable and eco-friendly energy access.</p>
        </div>
      </article>
      <article className="vision-panel">
        <Image src={ASSETS.worker} alt="KIMACO professional at a rooftop solar energy installation" fill sizes="(max-width: 767px) 100vw, 50vw" />
        <div className="vision-overlay" />
        <div className="vision-panel-content">
          <Eye size={34} strokeWidth={1.4} aria-hidden="true" />
          <h2>Our Vision</h2>
          <p>To be Africa&apos;s foremost provider of innovative, sustainable energy solutions, driving economic growth and environmental stewardship.</p>
        </div>
      </article>
    </section>
  );
}
