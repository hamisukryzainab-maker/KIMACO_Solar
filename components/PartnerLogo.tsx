import Image from "next/image";

export default function PartnerLogo({ name, image }: { name: string; image: string }) {
  return (
    <div className="partner-card">
      <div className="partner-image"><Image src={image} alt={`${name} logo, as supplied by KIMACO`} fill sizes="(max-width: 479px) 130px, (max-width: 1199px) 160px, 150px" /></div>
      <p>{name}</p>
    </div>
  );
}
