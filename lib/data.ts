import healthyImg from "@/public/HealthyCommunities.png";
import gxImg from "@/public/gx-preview.png";
import myerImg from "@/public/myersbriggs.png";
import easyA from "@/public/easy_apostrophe_demo.gif";
import cmIMG from "@/public/conceptmapper.png";

// ---------------------------------------------------------------------------
// EDIT-ME — everything user-visible lives in this file.
// ---------------------------------------------------------------------------

export const siteContent = {
  // shown in the header (top-left brand mark) and metadata
  name: "Riley Leong",
  shortName: "riley leong",

  // hero
  hero: {
    // The big tagline. Break lines manually with \n.
    tagline:
      "Building data-driven products\nthat turn complexity into clarity.",
    // smaller line under the tagline
    subtitle:
      "Math + CS @ UCLA. Data, full-stack, and product — exploring where engineering meets impact.",
    // primary call-to-action button
    primaryCta: { label: "Get in touch", href: "#contact" },
    secondaryCta: { label: "Resume", href: "/Riley_Leong's_Resume.pdf" },
  },

  // about section
  about: {
    eyebrow: "About",
    headline: "Hi, I'm Riley 👋",
    paragraphs: [
      "I'm a senior at UCLA studying Mathematics of Computation — a joint Math + CS program that fuels my obsession with building useful technology.",
      "I've worked across data engineering, product management, and full-stack development. I love the spot where engineering, design, and business meet.",
      "Outside of work I'm usually trying a new restaurant, training for a half-marathon, or losing at chess.",
    ],
    quote: "Innovation is where engineering meets empathy.",
  },

  // contact section
  contact: {
    eyebrow: "Contact",
    headline: "Let's make\nsomething together.",
    blurb:
      "I'm always open to internship, full-time, and side-project conversations.",
    email: "rileyleong24@g.ucla.edu",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/riley-leong/" },
      { label: "GitHub", href: "https://github.com/rtleong" },
      { label: "Email", href: "mailto:rileyleong24@g.ucla.edu" },
    ],
  },

  // ---------------------------------------------------------------------
  // /about page
  // ---------------------------------------------------------------------
  aboutPage: {
    eyebrow: "About",
    title: "A quick story",
    subtitle:
      "Math, code, music, and a habit of trying things until they work.",
    intro: [
      "I'm a senior at UCLA studying Mathematics of Computation — a joint Math + CS program that fuels my obsession with building useful technology.",
      "I love being at the intersection of engineering, design, and business. Outside of that, I DJ, run, and chase good food across LA.",
    ],
    // Edit these freely. Add or remove entries as needed.
    university: {
      heading: "University",
      institution: "UCLA — B.S. Mathematics of Computation",
      dateRange: "2022 — 2026",
      items: [
        {
          title: "Dean's Honors List",
          detail: "Multiple quarters of academic distinction.",
          year: "2023 — 2025",
        },
        {
          title: "Undergraduate Math TA",
          detail:
            "Mentored peers in Intro to CS (C++), Intro to Stats (R), and Calculus I.",
          year: "2023",
        },
        {
          title: "DataRes — Project Lead",
          detail:
            "Led an end-to-end data project from ingestion to dashboarding.",
          year: "2024",
        },
        {
          title: "Hackathon Winner",
          detail: "Built a generative-AI prototype that placed in the top 3.",
          year: "2024",
        },
      ],
    },
    highSchool: {
      heading: "High School",
      institution: "Benicia High School",
      dateRange: "2018 — 2022",
      items: [
        {
          title: "Valedictorian / Top of Class",
          detail: "Graduated with highest academic honors.",
          year: "2022",
        },
        {
          title: "AP Scholar with Distinction",
          detail: "High scores across 7 AP exams.",
          year: "2022",
        },
        {
          title: "Math Team Captain",
          detail: "Led the school's competitive math team for two years.",
          year: "2020 — 2022",
        },
        {
          title: "Varsity Athletics",
          detail: "Team captain and league honors.",
          year: "2019 — 2022",
        },
      ],
    },
  },

  // ---------------------------------------------------------------------
  // /bookings page (DJ)
  // ---------------------------------------------------------------------
  bookingsPage: {
    eyebrow: "DJ",
    title: "Bookings & sets",
    subtitle:
      "House, disco, and open-format. Available for clubs, weddings, private events, and brand activations across LA + the Bay Area.",
    djName: "RLNG",
    // Drop image paths into /public and reference them by "/file.jpg".
    photos: [
      { src: "/profile.jpg", alt: "Set at Venue 1", caption: "Sept 2025 — Los Angeles" },
      { src: "/profile.jpg", alt: "Set at Venue 2", caption: "Aug 2025 — San Francisco" },
      { src: "/profile.jpg", alt: "Set at Venue 3", caption: "Jul 2025 — Private Event" },
      { src: "/profile.jpg", alt: "Set at Venue 4", caption: "Jun 2025 — Festival" },
      { src: "/profile.jpg", alt: "Set at Venue 5", caption: "May 2025 — Wedding" },
      { src: "/profile.jpg", alt: "Set at Venue 6", caption: "Apr 2025 — Brand Activation" },
    ],
    // Past or upcoming gigs.
    gigs: [
      { date: "Oct 12, 2025", venue: "TBD",            city: "Los Angeles, CA", status: "upcoming" as const, link: "" },
      { date: "Sep 06, 2025", venue: "Sample Venue A", city: "Los Angeles, CA", status: "past" as const,     link: "" },
      { date: "Aug 22, 2025", venue: "Sample Venue B", city: "San Francisco, CA", status: "past" as const,   link: "" },
      { date: "Jul 18, 2025", venue: "Private Event",  city: "Malibu, CA",        status: "past" as const,   link: "" },
    ],
    // Where listeners can find your sets / socials.
    links: [
      { label: "SoundCloud", href: "https://soundcloud.com/" },
      { label: "Mixcloud",   href: "https://www.mixcloud.com/" },
      { label: "Instagram",  href: "https://instagram.com/" },
    ],
    bookingEmail: "rileyleong24@g.ucla.edu",
    bookingBlurb:
      "For booking inquiries, email me with the date, venue, set length, and vibe.",
  },

  // footer
  footer: {
    copyright: `© ${new Date().getFullYear()} Riley Leong`,
    builtWith: "Built with Next.js, Tailwind, and Framer Motion.",
  },
} as const;

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

// Route-based navigation. Each entry becomes a top-level page.
export const navLinks = [
  { name: "experiences", href: "/" },
  { name: "about", href: "/about" },
  { name: "bookings", href: "/bookings" },
] as const;

// Legacy in-page section links (still used by the hooks for active-section
// tracking on the experiences page).
export const links = [
  { name: "Home", hash: "#home" },
  { name: "Work", hash: "#work" },
  { name: "Experience", hash: "#experience" },
  { name: "Skills", hash: "#skills" },
  { name: "Contact", hash: "#contact" },
  { name: "About", hash: "#about" },
] as const;

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

// Experience entries — each renders as a small logo tile on the home page.
// Clicking opens a detail modal with the long-form info below.
//
// Fields:
//   • company       — display name (used on the tile and modal)
//   • logo          — image path in /public, e.g. "/logos/fidelity.png".
//                     Leave "" to fall back to company initials.
//   • role          — your title
//   • timeline      — date range string
//   • location      — city, state
//   • org           — team / department (shown in modal "Org" column)
//   • collaborators — array shown under "With" in modal (optional)
//   • body          — array of paragraphs for the modal body
//   • tags          — chips at the bottom of the modal (optional)
//   • link          — optional external link button in the modal
//   • cover         — optional banner image path for the modal hero
//
export const experiencesData = [
  {
    company: "Fidelity Investments",
    logo: "",
    role: "Data Engineer Intern",
    timeline: "May 2025 — Aug 2025",
    location: "Durham, NC",
    org: "Asset Management Technology",
    collaborators: [],
    body: [
      "Engineered a generative-AI tool that lets internal teams quickly search for common production issues based on past MS Teams messages.",
      "Built the retrieval pipeline end-to-end — message ingestion, embedding, vector store, and a lightweight chat surface used by on-call engineers.",
    ],
    tags: ["Python", "GenAI", "RAG", "Azure"],
    link: "",
    cover: "",
  },
  {
    company: "OPN Healthcare",
    logo: "",
    role: "Product Management Intern",
    timeline: "Sept 2024 — Jan 2025",
    location: "Los Angeles, CA",
    org: "Oncology Analytics",
    collaborators: ["13 data-science interns"],
    body: [
      "Led a team of 13 data-science interns with AGILE methodology to produce a cost-modeling tool for oncology regimens.",
      "Drove the roadmap for KPI dashboards — defined metrics, ran sprint reviews, and shipped weekly updates to clinical stakeholders.",
    ],
    tags: ["Product", "AGILE", "Healthcare", "Dashboards"],
    link: "",
    cover: "",
  },
  {
    company: "First American",
    logo: "",
    role: "Data Science Intern",
    timeline: "Jun 2024 — Sept 2024",
    location: "Santa Ana, CA",
    org: "Data Platform",
    collaborators: [],
    body: [
      "Developed Python scripts to innovate the ETL process and reformed the data-integration workflow using R and SQL Server.",
      "Cut pipeline runtime and reduced manual handoffs between the analytics and engineering teams.",
    ],
    tags: ["Python", "R", "SQL Server", "ETL"],
    link: "",
    cover: "",
  },
  {
    company: "Poppin",
    logo: "",
    role: "Student Data Science Intern",
    timeline: "Jan 2024 — Apr 2024",
    location: "Los Angeles, CA",
    org: "Growth",
    collaborators: ["Founders"],
    body: [
      "Engineered the first data pipeline for a social-media startup with Snowflake, dbt, and Airflow.",
      "Visualized user and financial metrics in a Power BI dashboard used directly in the pitch that secured Crunchbase funding.",
    ],
    tags: ["Snowflake", "dbt", "Airflow", "Power BI"],
    link: "",
    cover: "",
  },
  {
    company: "UCLA Mathematics",
    logo: "",
    role: "Undergraduate Teaching Assistant",
    timeline: "Sept 2023 — Dec 2023",
    location: "Los Angeles, CA",
    org: "Mathematics Department",
    collaborators: [],
    body: [
      "Mentored peers in Introduction to Computer Science (C++), Introduction to Statistics (R), and Calculus I.",
      "Ran weekly office hours and review sessions ahead of midterms.",
    ],
    tags: ["Teaching", "C++", "R"],
    link: "",
    cover: "",
  },
  {
    company: "Benicia Unified",
    logo: "",
    role: "Associate Substitute Instructor",
    timeline: "Jun 2023 — Sept 2023",
    location: "Benicia, CA",
    org: "K–5 Summer Program",
    collaborators: [],
    body: [
      "Developed curriculum for K–5 students in a summer program covering elementary algebra and mathematical intuition.",
    ],
    tags: ["Education", "Curriculum"],
    link: "",
    cover: "",
  },
] as const;

// ---------------------------------------------------------------------------
// Projects
//   • imageUrl  — required preview image
//   • videoUrl  — optional .mp4 / .webm; if present, plays on hover
//   • link      — optional CTA link (e.g. live demo, github)
//   • year      — optional display year
//   • size      — "wide" projects take 2 columns on desktop, others take 1
// ---------------------------------------------------------------------------

export const projectsData = [
  {
    title: "Concept Mapper",
    description:
      "An AI-powered tool that transforms complex ideas into clear, connected maps — built for faster learning and new-hire onboarding.",
    tags: ["TypeScript", "React", "Vite", "Supabase"],
    imageUrl: cmIMG,
    videoUrl: "",
    link: "https://conceptmapper.vercel.app/",
    year: "2025",
    size: "wide" as const,
  },
  {
    title: "Easy-Apostrophe",
    description:
      "A VS Code extension that makes building lists of strings, comma-delimited items, and structured snippets effortless.",
    tags: ["TypeScript", "VS Code", "GitHub"],
    imageUrl: easyA,
    videoUrl: "",
    link: "",
    year: "2024",
    size: "tall" as const,
  },
  {
    title: "Healthy Communities",
    description:
      "Principal-component analysis on a county-level health dataset to surface and visualize drivers of physical inactivity.",
    tags: ["Python", "Tableau", "PCA", "Machine Learning"],
    imageUrl: healthyImg,
    videoUrl: "",
    link: "",
    year: "2024",
    size: "tall" as const,
  },
  {
    title: "Data-Valex",
    description:
      "A React Native + Python app for running binary and boolean validations on uploaded datasets, powered by Great Expectations.",
    tags: ["React Native", "TypeScript", "Python", "Great Expectations"],
    imageUrl: gxImg,
    videoUrl: "",
    link: "",
    year: "2023",
    size: "wide" as const,
  },
  {
    title: "NLP Personality Classifier",
    description:
      "A Flask + PyTorch framework that classifies Myers-Briggs personality types from social-media captions via regression and classification.",
    tags: ["MongoDB", "Flask", "OpenAI API", "PyTorch"],
    imageUrl: myerImg,
    videoUrl: "",
    link: "",
    year: "2023",
    size: "wide" as const,
  },
] as const;

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------

export const skillsData = [
  "Python", "SQL", "R", "C++", "C", "TypeScript", "Java", "HTML", "CSS",
  "MATLAB", "Snowflake", "SQL Server", "MongoDB", "Kafka", "Spark", "Pandas",
  "React", "Git", "Linux", "AWS", "Kubernetes", "Tableau", "Vercel",
] as const;
