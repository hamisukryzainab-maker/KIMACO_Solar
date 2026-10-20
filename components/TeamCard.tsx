import Image from "next/image";
import { Mail } from "lucide-react";
import type { TeamMember } from "@/lib/data";

export default function TeamCard({ member, featured = false }: { member: TeamMember; featured?: boolean }) {
  return (
    <article className={featured ? "founder-card" : "team-card"} data-profile={member.name}>
      <div className={featured ? "founder-portrait" : "team-portrait"}>
        <Image src={member.image} alt={`${member.name}, ${member.role}`} fill sizes={featured ? "(max-width: 599px) 152px, 224px" : "(max-width: 599px) 128px, 156px"} style={{ objectPosition: member.position }} />
      </div>
      <div className="team-profile-content">
        <h3>{member.name}</h3>
        <p className="team-role">{member.role}</p>
        <a href={`mailto:${member.email}`} className="team-email"><Mail size={14} strokeWidth={1.7} aria-hidden="true" /><span>{member.email}</span></a>
        <p className="team-biography">{member.biography}</p>
      </div>
    </article>
  );
}
