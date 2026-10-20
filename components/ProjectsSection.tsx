"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { projects } from "@/lib/data";
import { whatsappUrl } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import Button from "./Button";

export default function ProjectsSection() {
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const project = projects[selected];

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.showModal();
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isOpen]);

  function openGallery(index: number) {
    triggerRef.current = document.activeElement as HTMLElement;
    setSelected(index);
    setIsOpen(true);
  }
  function closeGallery() {
    dialogRef.current?.close();
    setIsOpen(false);
    triggerRef.current?.focus({ preventScroll: true });
  }
  function changeProject(direction: number) { setSelected((current) => (current + direction + projects.length) % projects.length); }

  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading label="Selected Success Stories" title="Our Projects" id="projects-title" />
          <button type="button" className="button button-outline" onClick={() => openGallery(0)}>View All Projects<ArrowRight size={17} aria-hidden="true" /></button>
        </div>
        <div className="projects-grid">{projects.map((item, index) => <ProjectCard project={item} onClick={() => openGallery(index)} key={item.category} />)}</div>
      </div>
      <dialog ref={dialogRef} className="project-dialog" aria-labelledby="gallery-title" onCancel={closeGallery} onClose={() => { setIsOpen(false); triggerRef.current?.focus({ preventScroll: true }); }} onClick={(event) => { if (event.target === event.currentTarget) closeGallery(); }} onKeyDown={(event) => { if (event.key === "ArrowRight") changeProject(1); if (event.key === "ArrowLeft") changeProject(-1); }}>
        <div className="gallery-container">
          <div className="gallery-header"><div><p className="eyebrow">KIMACO Solar Projects</p><h2 id="gallery-title">{project.category}</h2></div><button type="button" className="icon-button" onClick={closeGallery} aria-label="Close project gallery" autoFocus><X size={24} aria-hidden="true" /></button></div>
          <div className="gallery-image"><Image src={project.image} alt={project.alt} fill sizes="(max-width: 767px) 90vw, 850px" /></div>
          <div className="gallery-footer"><div className="gallery-controls"><button type="button" className="icon-button" onClick={() => changeProject(-1)} aria-label="Previous project"><ArrowLeft size={20} aria-hidden="true" /></button><span aria-live="polite">{String(selected + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span><button type="button" className="icon-button" onClick={() => changeProject(1)} aria-label="Next project"><ArrowRight size={20} aria-hidden="true" /></button></div><Button href={whatsappUrl(`Hello KIMACO Nigeria Limited, I would like to discuss a ${project.category.toLowerCase()} solar energy project. Please provide more information about your solutions.`)} external>Discuss Your Project</Button></div>
        </div>
      </dialog>
    </section>
  );
}
