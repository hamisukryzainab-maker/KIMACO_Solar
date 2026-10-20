"use client";

import BrandLogo from "@/components/BrandLogo";

export default function Error({ reset }: { reset: () => void }) {
  return <main className="utility-page"><div className="utility-content"><BrandLogo /><p className="eyebrow">KIMACO Solar</p><h2>Something didn&apos;t load.</h2><p>Please try again, or return to the homepage. No request or booking has been submitted.</p><button type="button" onClick={reset} className="button button-primary">Try Again</button></div></main>;
}
