import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <article className="project-card">
      <button type="button" onClick={onClick} aria-label={`View ${project.category.toLowerCase()} project image`}>
        <div className="project-image"><Image src={project.image} alt={project.alt} fill sizes="(max-width: 479px) 88vw, (max-width: 1023px) 45vw, 300px" style={{ objectPosition: project.position }} /></div>
        <div className="project-card-info"><h3>{project.category}</h3><span className="circle-arrow"><ArrowUpRight size={17} aria-hidden="true" /></span></div>
      </button>
    </article>
  );
}
