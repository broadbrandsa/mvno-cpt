export const event = {
  series: "MVNO Nation Africa",
  edition: "Cape Town 2026",
  venue: "Cape Town",
  dates: "8 June 2026",
  status: "delivered" as const,
  deckTitle: "MVNO Success Blueprint",
  deckSubtitle: "What it takes to win in 2026 and beyond.",
  tagline:
    "Six perspectives, one operating model. From the market opportunity through value propositions, customer value management, customer experience, technology and value-added services.",
  agenda: [
    "Setting the scene - the African market at its inflection point",
    "Standing out with CVPs - why price is not a strategy",
    "Growth and loyalty with CVM - the AI-operated lifecycle",
    "Customer experience - the only competitive battleground left",
    "Technology innovation - the unified business engine",
    "Differentiation with VAS - the value layered on top",
  ],
  host: {
    name: "Yaron Assabi",
    title: "Founder & CEO, Digital Solutions Group",
    email: "yaron@cxg.co.za",
  },
  commercial: {
    name: "Edward Wicks",
    title: "Chief Commercial Officer, MVNE",
    email: "edwardw@mvne.co.za",
  },
};

export const deckFile = {
  href: "/MVNO-Success-Blueprint-Cape-Town-2026.pdf",
  filename: "MVNO-Success-Blueprint-Cape-Town-2026.pdf",
  label: "PDF · MVNO Success Blueprint · Cape Town 2026",
} as const;

export const groupBrands = [
  {
    name: "DSG",
    src: "/images/dsg-logo.png",
    href: "https://www.dsg.co.za/",
    w: 64,
    h: 27,
    lead: true,
  },
  {
    name: "MDS Global",
    src: "/images/mds-logo.png",
    href: "https://mdsglobal.com/",
    w: 72,
    h: 26,
  },
  {
    name: "Broadbrand",
    src: "/images/dm-logo.png",
    href: "https://broadbrand.ai/",
    w: 60,
    h: 32,
  },
  {
    name: "MVNE",
    src: "/images/mvne-logo.png",
    href: "https://mvne.co.za/",
    w: 84,
    h: 21,
  },
  {
    name: "Xanite",
    src: "/images/xanite-logo.png",
    href: "https://xanite.ai",
    w: 84,
    h: 24,
  },
  {
    name: "CXG",
    src: "/images/cxg-logo.png",
    href: "https://cxg.co.za/",
    w: 84,
    h: 21,
  },
];

export const speakers = [
  {
    slug: "yaron-assabi",
    name: "Yaron Assabi",
    role: "Founder & CEO",
    brand: "Digital Solutions Group",
    brandUrl: "https://www.dsg.co.za/",
    bio: "Hosts the workshop and runs the agenda across all three world-tour stops. Opens with the market opportunity and closes with the value-added services that differentiate.",
    accent: "mint" as const,
  },
  {
    slug: "edward-wicks",
    name: "Edward Wicks",
    role: "Chief Commercial Officer",
    brand: "MVNE",
    brandUrl: "https://mvne.co.za/",
    bio: "Heads up DSG's MVNE platform. Makes the case against price as a primary strategy with ten cautionary tales and a commercial roadmap.",
    accent: "azure" as const,
  },
  {
    slug: "vincent-maher",
    name: "Vincent Maher",
    role: "CEO",
    brand: "Broadbrand · Founder, Xanite",
    brandUrl: "https://broadbrand.ai/",
    bio: "Runs Broadbrand and founded Xanite. Shows how AI operates the workflows, the decisioning, the content and the measurement across the customer lifecycle.",
    accent: "mint" as const,
  },
  {
    slug: "brandon-meszaros",
    name: "Brandon Meszaros",
    role: "CEO",
    brand: "CXG",
    brandUrl: "https://cxg.co.za/",
    bio: "Runs DSG's customer experience group, the contact-centre footprint behind DStv Internet and Boxer Telecom. CX is the only competitive battleground MVNOs actually own.",
    accent: "azure" as const,
  },
  {
    slug: "ryan-ohanlon",
    name: "Ryan O'Hanlon",
    role: "VP Global Sales",
    brand: "MDS Global",
    brandUrl: "https://mdsglobal.com/",
    bio: "Leads global sales at MDS Global. Co-presents the Unified Business Engine, the composable BSS and commercial layer behind a modern MVNO.",
    accent: "mint" as const,
  },
  {
    slug: "david-fielding",
    name: "David Fielding",
    role: "Head of Product",
    brand: "MDS Global",
    brandUrl: "https://mdsglobal.com/",
    bio: "Heads up product at MDS Global. Co-presents how one platform lets an MVNO evolve, scale and serve many segments without forklift upgrades.",
    accent: "azure" as const,
  },
];

export const worldTour = [
  {
    city: "Miami",
    region: "Americas",
    dates: "April 27-29, 2026",
    status: "delivered" as const,
  },
  {
    city: "Alicante",
    region: "Europe",
    dates: "Coming 2026",
    status: "upcoming" as const,
  },
  {
    city: "Cape Town",
    region: "Africa",
    dates: "8 June 2026",
    status: "delivered" as const,
  },
];

export const heroStats = [
  { value: "870M", label: "Offline or barely connected", caption: "Sub-Saharan Africa headroom" },
  { value: "US$2bn+", label: "Lost on price-led MVNOs", caption: "Near-zero investor return" },
  { value: "5.5×", label: "LTV uplift", caption: "Identity-led vs price-led" },
] as const;

export const sessions = [
  {
    n: "01",
    title: "Setting the scene",
    body: "Africa's MVNO market is passing its inflection point. The drivers, the success factors, and the operator already proving it.",
    speaker: "Yaron Assabi · Digital Solutions Group",
    accent: "mint" as const,
  },
  {
    n: "02",
    title: "Standing out with CVPs",
    body: "Why price should not be your primary MVNO strategy. A commercial blueprint for operators who want to build businesses, not churn engines.",
    speaker: "Edward Wicks · MVNE",
    accent: "rose" as const,
  },
  {
    n: "03",
    title: "Growth and loyalty with CVM",
    body: "How AI runs the workflows, the decisioning, the content and the measurement across the customer journey, operated by the enabler for every brand it carries.",
    speaker: "Vincent Maher · Broadbrand",
    accent: "azure" as const,
  },
  {
    n: "04",
    title: "Customer experience",
    body: "MVNOs do not own the network, so the competitive battleground is entirely the experience. The CX gap in Africa is the single largest growth opportunity in the market.",
    speaker: "Brandon Meszaros · CXG",
    accent: "mint" as const,
  },
  {
    n: "05",
    title: "Technology innovation",
    body: "The Unified Business Engine. A composable BSS and single commercial layer that lets an MVNO evolve, scale and serve many segments from one platform.",
    speaker: "Ryan O'Hanlon & David Fielding · MDS Global",
    accent: "azure" as const,
  },
  {
    n: "06",
    title: "Differentiation with VAS",
    body: "Connectivity is just the starting point. What defines your MVNO is the value you layer on top, and the platform that lets you move fast and scale smarter.",
    speaker: "Yaron Assabi · Digital Solutions Group",
    accent: "mint" as const,
  },
] as const;

// Kept under the `pillars` name so existing component imports continue to
// work, but the content is now the 6 sessions (Setting the scene through VAS).
export const pillars = sessions.map((s) => ({
  n: s.n,
  title: s.title,
  body: s.body,
}));

export const ltvComparison = [
  {
    label: "Price-led MVNO",
    ltv: "US$78",
    churn: "6.5%",
    arpu: "US$9 · GM 55%",
    tone: "rose" as const,
  },
  {
    label: "Experience-led MVNO",
    ltv: "US$220",
    churn: "3.0%",
    arpu: "US$12 · GM 55%",
    tone: "azure" as const,
  },
  {
    label: "Identity-led MVNO",
    ltv: "US$428",
    churn: "1.8%",
    arpu: "US$14 · GM 55%",
    tone: "mint" as const,
  },
] as const;

export const failures = [
  {
    name: "Amp'd Mobile",
    region: "USA · 2005-2007",
    headline: "US$360M",
    headlineLabel: "Investor capital burned",
    lesson:
      "When the acquisition lever is price, you inherit the customers nobody else wants.",
  },
  {
    name: "ESPN Mobile",
    region: "USA · 2005-2006",
    headline: "8 months",
    headlineLabel: "From launch to shutdown",
    lesson:
      "Even a world-class brand cannot rescue a proposition once it falls back on discounting.",
  },
  {
    name: "Helio",
    region: "USA · 2005-2008",
    headline: "US$500M+",
    headlineLabel: "Invested before sale",
    lesson:
      "Identity alone is not enough if pricing is used to rescue slow growth.",
  },
] as const;

export const winners = [
  {
    name: "Tesco Mobile",
    region: "UK & Ireland",
    headline: "4M+",
    headlineLabel: "Subscribers",
    insight:
      "Clubcard loyalty plus retail footprint. Churn materially below MNO averages. Price competitive but never the lead message.",
  },
  {
    name: "giffgaff",
    region: "UK",
    headline: "#1",
    headlineLabel: "UK customer satisfaction",
    insight:
      "Community-owned model where members earn payback for support and referrals. ARPU comparable to MNOs despite being a value brand.",
  },
  {
    name: "Lebara & Lycamobile",
    region: "Europe-wide",
    headline: "10M+",
    headlineLabel: "Combined subscribers",
    insight:
      "Diaspora-focused: specific calling destinations, local-language service and ethnic retail footprint.",
  },
  {
    name: "Consumer Cellular",
    region: "USA",
    headline: "18×",
    headlineLabel: "JD Power #1 Customer Care",
    insight:
      "Over-50 segment. Real human agents, simple billing, age-appropriate devices. Price is not the headline.",
  },
  {
    name: "FRiENDi Mobile",
    region: "Gulf States",
    headline: "Profitable",
    headlineLabel: "In a price-sensitive region",
    insight:
      "Migrant workers: tailored international calling, Arabic and Hindi support, remittance-linked products.",
  },
] as const;

// Two production MVNOs run by DSG, both presented in the CX session by
// Brandon (CXG). Numbers verbatim from the deck.
export const caseStudies = [
  {
    name: "DStv Internet",
    headline: "250,000 active subscribers · integrated CX excellence",
    metrics: [
      { value: "16s", label: "First response time" },
      { value: "85.8%", label: "CSAT score (target 80%)" },
      { value: "4.75/5", label: "Average star rating" },
      { value: "99.5%", label: "Tickets resolved 24h" },
      { value: "90%", label: "QA score" },
      { value: "250k", label: "Active subscribers" },
    ],
    bullets: [
      "Technical support & helpdesk · 7am-11pm, 7 days/week",
      "Sales activations & onboarding",
      "Network Operations Centre (NOC)",
      "AI-powered sentiment & auto QA",
    ],
  },
  {
    name: "Boxer Telecom",
    headline: "45% BOT deflection · omnichannel CX with self-service at scale",
    metrics: [
      { value: "95.95%", label: "SLA within 20s" },
      { value: "92.31%", label: "CSAT (target 80%)" },
      { value: "4.77/5", label: "Star rating (target 4.0)" },
      { value: "98%", label: "Tickets resolved 24h" },
      { value: "45%", label: "BOT deflection" },
      { value: "24/7", label: "Self-service availability" },
    ],
    bullets: [
      "WhatsApp, voice, live chat, email, app - single customer view",
      "Integrated middleware API for full self-service",
      "BOT manages nearly half of interactions with no agent",
      "Capacity scales dynamically with subscriber growth",
    ],
  },
] as const;

export const deckChapters = [
  {
    part: "Section 01",
    title: "Setting the scene",
    summary:
      "Africa's MVNO market is at its inflection point. What is driving the change, what success looks like, and Capitec Connect as the operator already proving it.",
    highlights: [
      "870M people in sub-Saharan Africa offline or barely connected",
      "Regulatory change and technology advancement as twin drivers",
      "Carrier-agnostic, operator-agnostic, product-agnostic platforms",
      "Four success factors: commercial strategy, technical flexibility, converged platform, beyond telco",
      "Capitec Connect: 41% of South Africa's airtime data, profitable in 8 months",
    ],
  },
  {
    part: "Section 02",
    title: "Standing out with CVPs",
    summary:
      "A commercial blueprint. Why price is not a strategy, ten cautionary tales worth US$2bn+, and the CVP pyramid that wins retention.",
    highlights: [
      "1,900+ MVNOs live globally · ARPU CAGR -4% since 2021",
      "Churn, not wholesale rate, decides profitability · LTV math at constant 55% GM",
      "Two restaurants, two destinies · the same lesson off the telco page",
      "Ten price-led failures across USA, UK, SA and Australia",
      "Six identity-led segments: community, SME, youth, diaspora, agri, affinity",
      "The CVP pyramid: functional, experiential, identity",
      "Winners: Tesco, giffgaff, Lebara, Consumer Cellular, FRiENDi, Visible",
      "A commercial roadmap: 0-3, 3-12 and 12+ months",
    ],
  },
  {
    part: "Section 03",
    title: "Growth and loyalty with CVM",
    summary:
      "Customer Value Management as a discipline, not a campaign. How AI lifts the constraint so a small team runs personalised value management across millions.",
    highlights: [
      "2,100+ MVNOs worldwide · $84-92B global market 2024",
      "5-10× more expensive to acquire than retain · 25-95% profit lift from +5% retention",
      "Five CVM stages: acquire, onboard, grow, retain, win back",
      "Four AI levers: workflows, decisioning, content, measurement",
      "Xanite: a CVM operating system for telco · CDP + automation + decisioning + measurement",
      "Seven explainable scores · next best action inside every journey",
      "A prepaid churn save, running on its own",
      "The whole lifecycle, on one shared platform",
    ],
  },
  {
    part: "Section 04",
    title: "Customer experience",
    summary:
      "MVNOs do not own the network. The competitive battleground is entirely the experience, and the CX gap in Africa is the single largest growth opportunity in the market.",
    highlights: [
      "Why CX is the only moat an MVNO actually owns",
      "DStv Internet: 250k subscribers · 85.8% CSAT · 16s FRT · 99.5% resolved in 24h",
      "Boxer Telecom: 92.31% CSAT · 45% BOT deflection · 24/7 self-service",
      "CXG's Johannesburg and Cape Town contact-centre footprint (1,180+ seats)",
      "AI-powered sentiment, auto QA and network operations from one operating model",
    ],
  },
  {
    part: "Section 05",
    title: "Technology innovation",
    summary:
      "The Unified Business Engine. A composable BSS and single commercial layer that lets an MVNO evolve, scale and serve many segments from one platform.",
    highlights: [
      "Why connectivity-only BSS is no longer fit for purpose",
      "A composable architecture: catalog, order, billing, mediation, charging",
      "One commercial layer across mobile, fixed wireless, fibre and satellite",
      "Multi-brand, multi-tenant from day one - no forklift upgrades",
      "From legacy stack to launch-anything in weeks",
    ],
  },
  {
    part: "Section 06",
    title: "Differentiation with VAS",
    summary:
      "Connectivity is just the starting point. The MVNOs that win the next decade layer real services on top - and the light MVNO platform that makes it possible in 90 days.",
    highlights: [
      "Value-added services as the engine of CVM",
      "The light MVNO: brand it, layer your VAS, launch in 90 days",
      "Multi-network eSIM in 190+ countries from day one",
      "VAS roadmap: digital security, cyber insurance, travel, device finance",
      "eInsurer: cyber, crypto and identity cover, embedded inside M-Pesa and the Digital Mobile app",
    ],
  },
] as const;

// Kept for the LATAM/Africa platforms strip - the new deck features the
// same two platforms.
export const platforms = [
  {
    name: "Xanite",
    tagline: "CVM operating system for telco",
    body: "Marketing Automation and a Customer Data Platform in one, designed for telcos and MVNOs and run by the enabler on behalf of every brand on it. One profile, seven explainable scores, generated content and holdout measurement.",
    metrics: [
      { value: "7", label: "Explainable scores · NBA in every journey" },
      { value: "7", label: "Channels: SMS, email, push, WhatsApp, USSD, in-app, social" },
      { value: "+40%", label: "Campaign conversion lift on gen-AI content" },
      { value: "POPIA", label: "Native consent per channel & purpose" },
    ],
  },
  {
    name: "Digital Mobile",
    tagline: "Light MVNO platform · eSIM-first",
    body: "BSS, OSS, MNO wholesale, app and support, pre-integrated and supplied as a service. Brand it, layer in your VAS, launch in 90 days.",
    metrics: [
      { value: "90 days", label: "Time-to-market vs 18-month norm" },
      { value: "190+", label: "Countries · global eSIM day one" },
      { value: "Dual eSIM", label: "Local + global from one SIM" },
      { value: "App-first", label: "Sign-up, activation, support" },
    ],
  },
] as const;
