# KIMACO Solar

A responsive corporate website for KIMACO Nigeria Limited, built with Next.js App Router, strict TypeScript, React, Tailwind CSS 4, and Lucide icons. The original owner-supplied Cloudinary assets are used throughout. Manrope is self-hosted; the browser makes no third-party font requests.

## Local development

Requires Node.js 20.9 or newer and npm.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. The development server binds to `0.0.0.0` for hosted previews.

## Production checks

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

Start the production server:

```bash
npm run start
```

For a different hosting port, use `PORT=3000 npm run start` (POSIX shell), or set `PORT` in the hosting platform.

## Business information

- Official domain: **https://www.kimacosolar.com.ng/**
- General email: **info@kimacosolar.com.ng**
- Office: **41 Industrial Layout, Sharada Phase I, Kano, Nigeria**
- Phone: **+234 806 161 7916**
- Owner-supplied WhatsApp / mobile: **+2318 10 495 9540**
- Warehouse: **Plot 237, Dawanau International Grains Market, Dawakin Tofa LG, Kano State**

Business details, image URLs, and WhatsApp action messages are centralized in `lib/constants.ts`. Management, service, product, project, partner, and navigation data live in `lib/data.ts`.

Yusuf Sadi is listed as **Transports Officer (TO)**. All five original photographs, names, individual emails, and full professional statements are included. The founder has a featured, moderately sized portrait; the other management portraits are compact.

## WhatsApp configuration — verify before launch

Quote, consultation, service, and product enquiry links open WhatsApp in a new tab with an action-specific message. The exact supplied number normalizes to **2318104959540**; its digits have not been corrected. **This project does not verify that the number is registered on WhatsApp.** The business must test it on a real device before public launch.

To replace it with an owner-verified number, configure:

```dotenv
NEXT_PUBLIC_WHATSAPP_NUMBER=your_verified_international_number
```

Spaces and the plus sign are removed when constructing the link. This is public configuration, not a secret. `NEXT_PUBLIC_` values are embedded at build time: **rebuild and redeploy after changes**. If the variable is absent, the supplied number is used. An example environment file is included. No other environment variables, database, API keys, or email service are required.

There is deliberately **no fake booking form, no fake submission confirmation, no customer-data storage, and no backend**. Contact is initiated through WhatsApp, phone, or mailto links. Opening WhatsApp does not book a consultation.

## Deployment

### Managed Next.js hosting

1. Put the contents of this project in a repository and import it into a host supporting Next.js 16 and Node.js 20.9+.
2. Use the project directory as the root. Install with `npm ci`; build with `npm run build`.
3. Configure `NEXT_PUBLIC_WHATSAPP_NUMBER` only if the business has verified a replacement number.
4. Deploy and attach **www.kimacosolar.com.ng** to the deployment.
5. Apply the exact DNS records provided by your host at your domain's DNS provider. Enable HTTPS. If configuring the bare domain, redirect it to the official `www` URL.
6. Test the live site, image optimization, mail links, WhatsApp recipient, and mobile menu. Check `/robots.txt` and `/sitemap.xml` on the official domain.

### Node.js server / VPS

1. Install Node.js 20.9+ on the server and upload or clone this source.
2. Run `npm ci`, configure any public environment override, and run `npm run build`.
3. Run `npm run start` under your host's process manager (for example a system service).
4. Route the official domain to the application through your host's HTTPS reverse proxy. The application defaults to port 3000 and binds to `0.0.0.0`.
5. Apply your host's DNS and TLS instructions, then complete the live checks above.

**Do not upload only `.next` or treat this as a plain static HTML export.** A Next.js-capable host or Node server is required for the included image optimization. Do not set `output: 'export'` without adapting image handling.

## SEO, accessibility, and security

- One homepage H1, semantic sections, skip link, descriptive image alt text, accessible navigation, visible keyboard focus, and reduced-motion support.
- Native keyboard-accessible project gallery, Escape dismissal, previous/next controls, and focus restoration.
- Canonical and Open Graph URLs use the official domain. LocalBusiness JSON-LD uses the updated office address and email. Robots and sitemap routes are included.
- Existing company imagery is used for social metadata and branding for icons. No fake reviews, statistics, certifications, social profiles, or invented project specifications are included.
- Cloudinary remote image access is restricted to the supplied account and upload path. Images are responsive, below-fold imagery is lazy-loaded, and the hero is preloaded.
- Public links opened in a new tab use `noopener noreferrer`. Security response headers include nosniff, a restrictive device permissions policy, and a strict-origin referrer policy.

**Asset note:** the supplied Itel Solar and Aurora Solar URLs are identical and intentionally remain identical. The visible artwork is not substituted. The filenames for two staff photos suggest transparent backgrounds, but the supplied originals may be opaque; their pixels and backgrounds are preserved.

## Pre-launch external checks

These cannot be established by a local build:

- Owner verification that the supplied WhatsApp number receives messages.
- Actual phone routing and email delivery / mailbox setup.
- Ownership of and DNS / HTTPS configuration for the official domain.
- Continued availability of the owner-controlled Cloudinary account.

No screenshot was attached to the build request. The design follows the supplied section order, navy/orange corporate direction, asset placements, and responsive specifications rather than claiming a pixel-exact screenshot match.
