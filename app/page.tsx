import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ManagementSection from "@/components/ManagementSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import QualitySection from "@/components/QualitySection";
import MissionVision from "@/components/MissionVision";
import ProjectsSection from "@/components/ProjectsSection";
import PartnersSection from "@/components/PartnersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { ASSETS, COMPANY } from "@/lib/constants";

const business = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${COMPANY.url}#business`,
  name: COMPANY.name,
  alternateName: COMPANY.brand,
  url: COMPANY.url,
  logo: ASSETS.logo,
  image: ASSETS.hero,
  email: COMPANY.email,
  telephone: COMPANY.phone,
  description: "Solar energy system design, equipment supply, installation and maintenance for homes, businesses, institutions and industries in Nigeria.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "41 Industrial Layout, Sharada Phase I",
    addressLocality: "Kano",
    addressCountry: "NG",
  },
};

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <AboutSection />
        <ManagementSection />
        <ServicesSection />
        <ProductsSection />
        <QualitySection />
        <MissionVision />
        <ProjectsSection />
        <PartnersSection />
        <CTASection />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business).replace(/</g, "\\u003c") }} />
    </>
  );
}
