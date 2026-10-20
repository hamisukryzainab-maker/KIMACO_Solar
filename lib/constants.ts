export const COMPANY = {
  name: "KIMACO Nigeria Limited",
  brand: "KIMACO Solar",
  tagline: "Solar | Power | Energy",
  email: "info@kimacosolar.com.ng",
  website: "www.kimacosolar.com.ng",
  url: "https://www.kimacosolar.com.ng/",
  phone: "+234 806 161 7916",
  phoneHref: "tel:+2348061617916",
  // This is the exact owner-supplied number. Registration on WhatsApp is not verified.
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+2318 10 495 9540",
  office: "41 Industrial Layout, Sharada Phase I, Kano, Nigeria",
  warehouse: "Plot 237, Dawanau International Grains Market, Dawakin Tofa LG, Kano State",
} as const;

const cloudinary = "https://res.cloudinary.com/dzsmbney4/image/upload/";

export const ASSETS = {
  logo: `${cloudinary}v1790398702/IMG_6887_gtxgg4.png`,
  hero: `${cloudinary}v1790398979/9010ec5e-c8c4-41f3-b13f-d8b852e8754d_s2f7fw.jpg`,
  about: `${cloudinary}v1790399509/4F1C9803-53B1-45AE-BEAA-0B04361F040C_x0oab4.png`,
  panels: `${cloudinary}v1790399899/IMG_7784_hkvasp.jpg`,
  inverters: `${cloudinary}v1790399899/IMG_7783_nridml.jpg`,
  hybrid: `${cloudinary}v1790399899/IMG_7772_dyfsfl.webp`,
  battery: `${cloudinary}v1790399899/IMG_7794_dumbft.jpg`,
  complete: `${cloudinary}v1790399758/e01ffe90-3b83-493e-945a-da08bff25941_p6hzp3.jpg`,
  worker: `${cloudinary}v1790400586/D0C1CED3-B633-4886-B73C-8797824D80BB_eiwcy1.png`,
  commercial: `${cloudinary}v1790400585/edbda4a0-cfea-4fc3-8286-1c65c4ff4044_yc0zq0.jpg`,
  institutional: `${cloudinary}v1790400585/93549ff9-788b-41f5-a598-e623c827c930_skql4n.jpg`,
  industrial: `${cloudinary}v1790400587/949BA47A-6F2B-45FD-9FA0-0AF1AF0657CB_svllwh.png`,
  whc: `${cloudinary}v1790401116/IMG_7914_cmgruv.jpg`,
  dalkiranlar: `${cloudinary}v1790401116/IMG_7915_p6pldw.png`,
  beve: `${cloudinary}v1790401117/IMG_7790_nuompa.jpg`,
  sako: `${cloudinary}v1790401117/IMG_7795_uvlkjt.png`,
  tera: `${cloudinary}v1790401117/IMG_7792_uysml6.png`,
  itel: `${cloudinary}v1790401118/IMG_7793_vjqwkn.png`,
  // The same image was deliberately supplied for both partners. Do not substitute it.
  aurora: `${cloudinary}v1790401118/IMG_7793_vjqwkn.png`,
  ceo: `${cloudinary}v1791727747/WhatsApp_Image_2026-10-11_at_15.08.33_evcmla.jpg`,
  saminu: `${cloudinary}v1791727903/WhatsApp_Image_2026-10-11_at_14.50.38_1_khnypu.jpg`,
  rabiu: `${cloudinary}v1791728076/WhatsApp_Image_2026-10-11_at_15.08.33__1_-removebg-preview_fyvrqe.png`,
  anisa: `${cloudinary}v1791728218/WhatsApp_Image_2026-10-11_at_14.50.48-removebg-preview_jfovys.png`,
  yusuf: `${cloudinary}v1791728260/WhatsApp_Image_2026-10-11_at_14.50.37_fgdock.jpg`,
} as const;

export function normalizeWhatsAppNumber(number: string): string {
  const digits = number.replace(/\D/g, "");
  if (!digits) throw new Error("A WhatsApp number must contain digits.");
  return digits;
}

export function whatsappUrl(message: string, number: string = COMPANY.whatsapp): string {
  return `https://wa.me/${normalizeWhatsAppNumber(number)}?text=${encodeURIComponent(message)}`;
}

export const ACTIONS = {
  consultation: whatsappUrl(
    "Hello KIMACO Nigeria Limited, I would like to request a consultation about your solar energy solutions. Please provide more information about your services and how we can get started.",
  ),
  quote: whatsappUrl(
    "Hello KIMACO Nigeria Limited, I would like to request a quotation for your solar products and solutions. Please contact me with further information.",
  ),
} as const;

export const EXTERNAL_LINK_PROPS = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
