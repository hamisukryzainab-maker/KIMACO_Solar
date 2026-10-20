"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/lib/data";
import { ACTIONS } from "@/lib/constants";
import BrandLogo from "./BrandLogo";
import Button from "./Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActive(`#${entry.target.id}`);
      }
    }, { rootMargin: "-18% 0px -66% 0px", threshold: 0 });
    navigation.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onResize = () => { if (window.innerWidth >= 1200) setIsOpen(false); };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setIsOpen(false); toggleRef.current?.focus(); }
      if (event.key === "Tab") {
        const links = Array.from(headerRef.current?.querySelectorAll<HTMLElement>(".mobile-menu a, .menu-toggle") ?? []);
        const first = links[0];
        const last = links[links.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const selectLink = (href: string) => { setActive(href); setIsOpen(false); };

  return (
    <header ref={headerRef} className="site-header" data-scrolled={scrolled} data-open={isOpen}>
      <div className="container header-inner">
        <BrandLogo />
        <nav className="desktop-navigation" aria-label="Main navigation">
          {navigation.map(({ label, href }) => (
            <a key={href} href={href} className={active === href ? "active" : ""} aria-current={active === href ? "location" : undefined} onClick={() => selectLink(href)}>{label}</a>
          ))}
        </nav>
        <Button href={ACTIONS.quote} external className="header-quote" aria-label="Get a quote on WhatsApp (opens in a new tab)">Get a Quote</Button>
        <button ref={toggleRef} type="button" className="menu-toggle" aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={25} aria-hidden="true" /> : <Menu size={25} aria-hidden="true" />}
        </button>
      </div>
      <nav id="mobile-navigation" className="mobile-menu" aria-label="Mobile navigation" hidden={!isOpen}>
        <div className="container mobile-menu-inner">
          {navigation.map(({ label, href }, index) => (
            <a key={href} href={href} className={active === href ? "active" : ""} aria-current={active === href ? "location" : undefined} onClick={() => selectLink(href)}>
              <span>{label}</span><span className="menu-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            </a>
          ))}
          <Button href={ACTIONS.quote} external onClick={() => setIsOpen(false)}>Get a Quote</Button>
          <p className="mobile-menu-caption">Solar. Power. Energy.</p>
        </div>
      </nav>
    </header>
  );
}
