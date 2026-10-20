import BrandLogo from "@/components/BrandLogo";
import Button from "@/components/Button";

export default function NotFound() {
  return <main className="utility-page"><div className="utility-content"><BrandLogo /><p className="eyebrow">Page not found</p><h1>Let&apos;s get you back<br />on the right path.</h1><p>The page you&apos;re looking for may have moved or is no longer available.</p><Button href="/">Back to Home</Button></div></main>;
}
