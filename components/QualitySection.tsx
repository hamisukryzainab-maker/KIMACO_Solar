import { qualityCommitments } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";

export default function QualitySection() {
  return (
    <section id="quality" className="section quality-section" aria-labelledby="quality-title">
      <div className="container quality-layout">
        <div className="quality-copy">
          <SectionHeading label="Why KIMACO" title="Our Commitment to Quality" id="quality-title" dark />
          <p>Reliable Solar Solutions.<br />Professional Service.<br />Lasting Performance.</p>
          <span className="quality-rule" aria-hidden="true" />
        </div>
        <div className="quality-grid">
          {qualityCommitments.map((item) => <article className="quality-card" key={item.title}><Icon name={item.icon} size={28} /><h3>{item.title}</h3></article>)}
        </div>
      </div>
    </section>
  );
}
