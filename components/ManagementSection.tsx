import { management } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import TeamCard from "./TeamCard";

export default function ManagementSection() {
  const [founder, ...team] = management;
  return (
    <section id="team" className="section management-section" aria-labelledby="management-title">
      <div className="container">
        <div className="management-heading">
          <SectionHeading label="The People Behind KIMACO" title="Meet Our Management Team" id="management-title" />
          <p>Our leadership team brings together engineering expertise, operational leadership, customer relationships, and a commitment to delivering reliable energy and business solutions.</p>
        </div>
        <TeamCard member={founder} featured />
        <div className="team-grid">{team.map((member) => <TeamCard member={member} key={member.email} />)}</div>
      </div>
    </section>
  );
}
