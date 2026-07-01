// Central content source. Facts are drawn from the brief; contact details,
// figures and links are placeholders to be replaced before launch.

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Investment Approach", href: "#approach" },
  { label: "What We Like", href: "#what-we-like" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
] as const;

export const APPROACH_PILLARS = [
  {
    index: "01",
    title: "Strategic insight",
    body: "We form a clear view on each asset before committing — its position in the market, the routes to add value, and the risks that matter. Capital is one input; judgement is the other.",
  },
  {
    index: "02",
    title: "Operational involvement",
    body: "We stay close to the assets we back. Working alongside partners and operators, we help shape decisions on leasing, refurbishment, repositioning and day-to-day management.",
  },
  {
    index: "03",
    title: "A long-term view",
    body: "As a family office, we invest our own capital and are not bound by fund timelines. That lets us hold through cycles and act when the case is right rather than when a clock demands it.",
  },
] as const;

export const WHAT_WE_LIKE = [
  {
    title: "Residential and mixed-use",
    body: "Income-producing residential and mixed-use assets across UK towns and cities, including holdings with scope for refurbishment or reconfiguration.",
  },
  {
    title: "Commercial and retail",
    body: "Well-located commercial and retail property where active management, re-letting or a change of use can improve the underlying performance.",
  },
  {
    title: "Value-add and repositioning",
    body: "Assets that are underused, mismanaged or in need of capital — situations where hands-on work can move them to a stronger footing.",
  },
  {
    title: "Development and refurbishment",
    body: "Selective development and refurbishment projects, typically alongside experienced local partners and operators.",
  },
] as const;

export const TEAM = [
  {
    name: "Moses Schreiber",
    role: "Senior Director",
    bio: "Sets the group's overall direction and leads on major investment decisions.",
  },
  {
    name: "Moishe Varley",
    role: "Head of Global Asset Management",
    bio: "Oversees the portfolio and the operational plans that sit behind each asset.",
  },
  {
    name: "Benjy Dolties",
    role: "Asset Manager",
    bio: "Manages assets day to day, working on performance, leasing and refurbishment.",
  },
  {
    name: "Nathan Schreiber",
    role: "Investment Manager",
    bio: "Sources and appraises opportunities and supports transactions through to completion.",
  },
] as const;

// [PLACEHOLDER: confirm the regions Midos Group actually covers]
export const SERVICE_AREAS = [
  "London",
  "South East England",
  "The Midlands",
  "North West England",
  "Yorkshire",
  "Scotland",
] as const;

export const CONTACT = {
  // [PLACEHOLDER: real phone number]
  phone: "+44 (0)20 0000 0000",
  // [PLACEHOLDER: real email address]
  email: "enquiries@midosgroup.com",
  // [PLACEHOLDER: real email address]
  investmentEmail: "opportunities@midosgroup.com",
  // [PLACEHOLDER: real office address]
  addressLines: ["Midos Group", "Office address line", "London", "United Kingdom"],
  // [PLACEHOLDER: real LinkedIn company URL]
  linkedin: "https://www.linkedin.com/company/midos-group",
} as const;
