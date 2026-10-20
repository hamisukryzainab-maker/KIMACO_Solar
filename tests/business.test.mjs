import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import ts from "typescript";

function moduleUrl(file, replacements = {}) {
  let { outputText } = ts.transpileModule(readFileSync(new URL(file, import.meta.url), "utf8"), {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ES2022 },
  });
  for (const [specifier, url] of Object.entries(replacements)) outputText = outputText.replaceAll(`from "${specifier}"`, `from "${url}"`);
  return `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`;
}

const constantsUrl = moduleUrl("../lib/constants.ts");
const { COMPANY, ACTIONS, ASSETS, normalizeWhatsAppNumber, whatsappUrl, EXTERNAL_LINK_PROPS } = await import(constantsUrl);
const { management, navigation, partners, products, services, projects, qualityCommitments } = await import(moduleUrl("../lib/data.ts", { "./constants": constantsUrl }));

test("official business contact details and warehouse are preserved exactly", () => {
  assert.equal(COMPANY.email, "info@kimacosolar.com.ng");
  assert.equal(COMPANY.url, "https://www.kimacosolar.com.ng/");
  assert.equal(COMPANY.website, "www.kimacosolar.com.ng");
  assert.equal(COMPANY.office, "41 Industrial Layout, Sharada Phase I, Kano, Nigeria");
  assert.equal(COMPANY.phone, "+234 806 161 7916");
  assert.equal(COMPANY.phoneHref, "tel:+2348061617916");
  assert.equal(COMPANY.warehouse, "Plot 237, Dawanau International Grains Market, Dawakin Tofa LG, Kano State");
});

test("the supplied unusual WhatsApp digits are normalized, never corrected", () => {
  assert.equal(normalizeWhatsAppNumber("+2318 10 495 9540"), "2318104959540");
  assert.equal(normalizeWhatsAppNumber("(+2318) 10-495-9540"), "2318104959540");
  assert.throws(() => normalizeWhatsAppNumber("no number"));
});

test("WhatsApp messages are safely encoded and the number is configurable", () => {
  const message = "Hello KIMACO, solar & power? 20+ years.";
  const url = new URL(whatsappUrl(message, "+2318 10 495 9540"));
  assert.equal(url.origin, "https://wa.me");
  assert.equal(url.pathname, "/2318104959540");
  assert.equal(url.searchParams.get("text"), message);
  assert.match(ACTIONS.consultation, /wa\.me\//);
  assert.match(new URL(ACTIONS.consultation).searchParams.get("text"), /request a consultation/);
  assert.match(new URL(ACTIONS.quote).searchParams.get("text"), /request a quotation/);
});

test("external links use both noopener and noreferrer", () => {
  assert.equal(EXTERNAL_LINK_PROPS.target, "_blank");
  assert.equal(EXTERNAL_LINK_PROPS.rel, "noopener noreferrer");
});

test("all five management members are complete and the CEO is first", () => {
  assert.equal(management.length, 5);
  assert.equal(management[0].name, "Engr. Abubakar Murtala");
  assert.equal(management[0].role, "Founder / CEO");
  assert.deepEqual(management.map(({ email }) => email), ["am@kimacosolar.com.ng", "si@kimacosolar.com.ng", "ri@kimacosolar.com.ng", "aa@kimacosolar.com.ng", "ys@kimacosolar.com.ng"]);
  assert.equal(management[4].name, "Yusuf Sadi");
  assert.equal(management[4].role, "Transports Officer (TO)");
  management.forEach((member) => {
    assert.ok(member.biography.length > 200);
    assert.ok(member.image.startsWith("https://res.cloudinary.com/dzsmbney4/image/upload/"));
    assert.ok(member.position);
  });
});

test("every requested content category is complete", () => {
  assert.equal(services.length, 5);
  assert.equal(products.length, 5);
  assert.equal(projects.length, 4);
  assert.equal(partners.length, 7);
  assert.equal(qualityCommitments.length, 8);
  assert.equal(ASSETS.aurora, ASSETS.itel);
});

test("every navigation anchor points to an implemented section", () => {
  const files = readdirSync(new URL("../components/", import.meta.url)).filter((name) => name.endsWith(".tsx"));
  const source = files.map((file) => readFileSync(new URL(`../components/${file}`, import.meta.url), "utf8")).join("\n");
  for (const item of navigation) assert.ok(source.includes(`id="${item.href.slice(1)}"`), `${item.href} has a target`);
  assert.ok(navigation.some(({ href }) => href === "#team"));
});

test("the homepage retains the full section order", () => {
  const source = readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8");
  const sections = ["Navbar", "Hero", "AboutSection", "ManagementSection", "ServicesSection", "ProductsSection", "QualitySection", "MissionVision", "ProjectsSection", "PartnersSection", "CTASection", "Footer"];
  let previous = -1;
  sections.forEach((section) => {
    const index = source.indexOf(`<${section}`);
    assert.ok(index > previous, `${section} appears in the correct order`);
    previous = index;
  });
});
