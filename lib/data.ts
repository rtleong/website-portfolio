import healthyImg from "@/public/HealthyCommunities.png";
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
      "Innovation is where engineering meets empathy",
    // smaller line under the tagline
    subtitle:
      "Math + CS @ UCLA. Data, Product, and Engineering — exploring where science meets insight.",
    // primary call-to-action button
    primaryCta: { label: "Get in touch", href: "#contact" },
    secondaryCta: { label: "Resume", href: "/Riley_Leong's_Resume.pdf" },
  },

  // about section
  about: {
    eyebrow: "About",
    headline: "Hi, I'm Riley 👋",
    paragraphs: [
      "I'm a graduate from UCLA where I studied Mathematics of Computation — a joint Math + CS program that fuels my obsession with building useful technology.",
      "Currently, I am a Data Management Professional @ Bloomberg LP in the NY Metro Area, where I work on data pipelines, dashboards, and internal tooling for the financial data that powers the world.",
      "I've worked across data engineering, product management, and full-stack development. I love the spot where engineering, design, and business meet.",
      "Outside of work I'm usually trying a new restaurant, training for my first full marathon, or losing at chess.",
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
      "UCLA Graduate c/o 2026, B.S in Mathematics of Computation (joint Math + CS).",
      "Data Management Professional @ Bloomberg LP in the NY Metro Area",
    ],
    // Edit these freely. Each item is clickable on /about and opens a modal.
    //   • title   — required, shown on the tile
    //   • detail  — required, one-line preview on the tile
    //   • year    — required, shown on the tile
    //   • body    — optional, array of paragraphs for the modal body
    //   • photos  — optional, array of {src, alt, caption} (drop files in /public)
    //   • tags    — optional, chips at the bottom of the modal
    //   • link    — optional, external link button in the modal
    university: {
      heading: "University",
      institution: "UCLA — B.S. Mathematics of Computation",
      dateRange: "2022 — 2026",
      items: [
        {
          title: "Dean's Honors List",
          detail: "Multiple quarters of academic distinction.",
          year: "2023 — 2025",
          body: [
            "Awarded each quarter for maintaining a GPA above the College of Letters & Science threshold.",
            "Recognized across multiple terms during the program.",
          ],
          photos: [] as { src: string; alt: string; caption?: string }[],
          tags: ["UCLA", "Academic Honors"],
          link: "",
        },
        {
          title: "Undergraduate Math TA",
          detail:
            "Mentored peers in Intro to CS (C++), Intro to Stats (R), and Calculus I.",
          year: "2023",
          body: [
            "Held weekly office hours and led review sessions ahead of midterms.",
            "Worked one-on-one with students struggling with foundational concepts.",
          ],
          photos: [] as { src: string; alt: string; caption?: string }[],
          tags: ["Teaching", "C++", "R"],
          link: "",
        },
        {
          title: "DataRes — Project Lead",
          detail:
            "Led an end-to-end data project from ingestion to dashboarding.",
          year: "2024",
          body: [
            "Led a sub-team of analysts on a quarter-long project ingesting a public dataset, cleaning it, and shipping a dashboard.",
            "Owned the architecture decisions and the final presentation.",
          ],
          photos: [] as { src: string; alt: string; caption?: string }[],
          tags: ["Leadership", "Dashboards", "Python"],
          link: "",
        },
        {
          title: "Hackathon Winner",
          detail: "Built a generative-AI prototype that placed in the top 3.",
          year: "2024",
          body: [
            "Built a working prototype in 36 hours with a four-person team.",
            "Pitched live to a panel of judges; placed in the top three out of 60+ teams.",
          ],
          photos: [] as { src: string; alt: string; caption?: string }[],
          tags: ["Hackathon", "GenAI", "Prototyping"],
          link: "",
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
          body: [
            "Graduated at the top of my class with the highest cumulative GPA.",
            "Delivered the valedictorian speech at commencement.",
          ],
          photos: [] as { src: string; alt: string; caption?: string }[],
          tags: ["Academic Honors"],
          link: "",
        },
        {
          title: "AP Scholar with Distinction",
          detail: "High scores across 7 AP exams.",
          year: "2022",
          body: [
            "Earned the AP Scholar with Distinction award from the College Board.",
            "Scored 4 or higher across seven AP exams.",
          ],
          photos: [] as { src: string; alt: string; caption?: string }[],
          tags: ["AP", "College Board"],
          link: "",
        },
        {
          title: "Math Team Captain",
          detail: "Led the school's competitive math team for two years.",
          year: "2020 — 2022",
          body: [
            "Captained the team across regional and state competitions.",
            "Coordinated practice sessions and mentored newer team members.",
          ],
          photos: [] as { src: string; alt: string; caption?: string }[],
          tags: ["Leadership", "Math Competitions"],
          link: "",
        },
        {
          title: "Varsity Athletics",
          detail: "Team captain and league honors.",
          year: "2019 — 2022",
          body: [
            "Competed at the varsity level and served as team captain.",
            "Recognized with league-level honors during senior year.",
          ],
          photos: [] as { src: string; alt: string; caption?: string }[],
          tags: ["Athletics", "Leadership"],
          link: "",
        },
      ],
    },
  },

  // ---------------------------------------------------------------------
  // /hobbies page
  //
  // The left rail is auto-built from the section list (Google-Docs-style
  // outline). Each section:
  //   • id     — anchor slug; used for scroll + the outline link
  //   • title  — heading shown in the outline and on the page
  //   • body   — array of paragraphs
  //   • photos — optional [{ src, alt, caption }] (drop files in /public)
  //   • links  — optional [{ label, href }] rendered as pills
  // Reorder / add / remove freely — the outline updates automatically.
  // ---------------------------------------------------------------------
  hobbiesPage: {
    eyebrow: "Outside work",
    title: "Hobbies",
    subtitle:
      "The things I pour my off-hours into — music, books, training, games, and people.",
    sections: [
      {
        id: "mixing",
        title: "Mixing",
        body: [
          "I DJ sometimes. house, disco, and open-format sets for clubs, weddings, and private events.",
        ],
        photos: [] as { src: string; alt: string; caption?: string }[],
        links: [
          { label: "SoundCloud", href: "https://soundcloud.com/" },
          { label: "Mixcloud", href: "https://www.mixcloud.com/" },
        ],
      },
      {
        id: "reading-and-media",
        title: "Reading & Media",
        body: [
          "I read across systems thinking, product, and the occasional sci-fi tangent.",
          "Replace this with current reads, favorite essays, podcasts, or a Goodreads link.",
        ],
        photos: [] as { src: string; alt: string; caption?: string }[],
        links: [] as { label: string; href: string }[],
      },
      {
        id: "exercise",
        title: "Exercise",
        body: [
          "Currently training for my first full marathon — long runs on weekends, lifting through the week.",
          "Replace with your training routine, PRs, or races on the calendar.",
        ],
        photos: [] as { src: string; alt: string; caption?: string }[],
        links: [] as { label: string; href: string }[],
      },
      {
        id: "gaming",
        title: "Gaming",
        body: [
          "Strategy, roguelikes, and the occasional competitive grind.",
          "Replace with your go-to titles and what you love about them.",
        ],
        photos: [] as { src: string; alt: string; caption?: string }[],
        links: [] as { label: string; href: string }[],
      },
      {
        id: "mentorship",
        title: "Mentorship",
        body: [
          "I mentor students breaking into tech and data — résumé reviews, mock interviews, and career chats.",
          "Replace with the programs you're involved in or how people can reach out.",
        ],
        photos: [] as { src: string; alt: string; caption?: string }[],
        links: [] as { label: string; href: string }[],
      },
      {
        id: "speaking",
        title: "Speaking",
        body: [
          "I enjoy giving talks and panels on data, product, and the student-to-industry transition.",
          "Replace with past talks, slides, or topics you're open to speaking on.",
        ],
        photos: [] as { src: string; alt: string; caption?: string }[],
        links: [] as { label: string; href: string }[],
      },
    ],
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
  { name: "hobbies", href: "/hobbies" },
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
    company: "Bloomberg",
    logo: "/logos/Bloomberg_LP.png",
    role: "Data Management Professional",
    timeline: "2026 — Present",
    location: "New York Metro Area",
    org: "Data",
    collaborators: [],
    body: [
      "Working on the financial data that powers the world — data pipelines, dashboards, and internal tooling supporting Bloomberg's data operations.",
      "Owning quality and coverage of reference data used downstream by trading, research, and analytics teams across the Bloomberg Terminal.",
    ],
    tags: ["Financial Data", "Pipelines", "Internal Tooling", "Operations"],
    link: "",
    cover: "",
  },
  {
    company: "Fidelity Investments",
    logo: "/logos/fidelity.png",
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
    logo: "/logos/opn.png",
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
    logo: "/logos/fa_logo.png",
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
    company: "UCLA Mathematics",
    logo: "/logos/ucla.png",
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
    logo: "/logos/busd.png",
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
// Projects — split into two groups, both render on the Work section.
//
// Resting tile shows only the image/video (demo footage). Hover reveals
// "title · Try it out · Check it out" along the bottom. Click anywhere on
// the tile opens the detail modal.
//
// Fields on every project:
//   • title        — card label + modal heading
//   • description  — short blurb (shown in modal under the title)
//   • intro        — optional array of paragraphs for modal body
//   • imageUrl     — required preview image. Use an import for files in
//                    /public/* (best, automatic optimization) or a string
//                    path like "/projects/foo.png" for files you drop in later.
//   • videoUrl     — optional .mp4 / .webm; plays on hover when present
//   • link         — optional "Try it out" CTA (live demo, github, etc.)
//   • linkLabel    — optional override for the modal's primary button label
//                    (default "Visit"). Set to e.g. "View on X" / "Open repo".
//   • articleLink  — optional "Check it out" CTA (writeup, paper, blog post)
//   • stack        — optional grouped tech stack rendered in the modal:
//                    [{ label: "UI", items: ["Tailwind CSS", "Framer Motion"] }, …]
//   • tags         — flat fallback labels; used when stack is empty
//   • cover        — optional banner image path shown inside the modal
//   • year         — display year
//   • size         — currently unused; kept for future bento layout tweaks
// ---------------------------------------------------------------------------

export const projectsData = {
  client: [
    {
      title: "Poppin Data Pipeline",
      description:
        "Built the first end-to-end data pipeline for a social-media startup with Snowflake, dbt, and Airflow. Powered a Power BI dashboard used in the pitch that secured Crunchbase funding.",
      intro: [
        "Owned the data foundation for Poppin from raw event ingestion to executive-facing dashboards.",
        "Designed the Snowflake schema, modelled the metrics layer in dbt, and orchestrated the daily refresh through Airflow. The Power BI dashboard rendered the user-growth and revenue charts featured in their Crunchbase-funded pitch.",
      ],
      tags: ["Snowflake", "dbt", "Airflow", "Power BI"],
      stack: [
        { label: "Warehouse", items: ["Snowflake"] },
        { label: "Modelling", items: ["dbt"] },
        { label: "Orchestration", items: ["Airflow"] },
        { label: "BI", items: ["Power BI"] },
      ],
      imageUrl: "/logos/poppin_tab.png",
      videoUrl: "",
      cover: "",
      link: "",
      linkLabel: "",
      articleLink: "",
      year: "2024",
      size: "wide" as const,
    },
    {
      title: "Michelin",
      description:
        "Placeholder — replace with the project description, scope, and outcome.",
      intro: [
        "Placeholder — replace this paragraph with the project context: who you worked with, what problem you were solving, and over what timeline.",
        "Add a second paragraph with the technical detail and the outcome.",
      ],
      tags: ["Placeholder"],
      stack: [
        { label: "UI", items: [] },
        { label: "Frontend", items: [] },
        { label: "Backend", items: [] },
        { label: "Tools", items: [] },
      ],
      imageUrl: "/logos/michelin.png",
      videoUrl: "",
      cover: "",
      link: "",
      linkLabel: "",
      articleLink: "",
      year: "TBD",
      size: "wide" as const,
    },
    {
      title: "DENSO",
      description:
        "Placeholder — replace with the project description, scope, and outcome.",
      intro: [
        "Placeholder — replace this paragraph with the project context.",
        "Add a second paragraph with the technical detail and outcome.",
      ],
      tags: ["Placeholder"],
      stack: [
        { label: "UI", items: [] },
        { label: "Frontend", items: [] },
        { label: "Backend", items: [] },
        { label: "Tools", items: [] },
      ],
      imageUrl: "/logos/denso.png",
      videoUrl: "",
      cover: "",
      link: "",
      linkLabel: "",
      articleLink: "",
      year: "TBD",
      size: "wide" as const,
    },
  ],
  personal: [
    {
      title: "DBSU",
      description:
        "Placeholder — replace with the project description, stack, and outcome.",
      intro: [
        "Placeholder — replace this paragraph with what DBSU is, who it's for, and why it exists.",
        "Add the build story, key technical bits, and what you'd ship next.",
      ],
      tags: ["Placeholder"],
      stack: [
        { label: "UI", items: [] },
        { label: "Frontend", items: [] },
        { label: "Backend", items: [] },
        { label: "Tools", items: [] },
      ],
      imageUrl: "/projects/dbsu.png",
      videoUrl: "",
      cover: "",
      link: "",
      linkLabel: "check out the repo!",
      articleLink: "https://github.com/the-data-science-union/DSU-S2026-DBSU-Build-a-Relational-Database",
      year: "TBD",
      size: "wide" as const,
    },
    {
      title: "Nesthive",
      description:
        "A personal-finance social-media platform — share, compare, and learn from how friends manage and grow their money.",
      intro: [
        "Nesthive is a feed-style finance app where friends can compare allocations, savings goals, and habits without sharing raw account balances.",
        "Replace with the build story, stack notes, and roadmap.",
      ],
      tags: ["Placeholder", "Personal Finance", "Social"],
      stack: [
        { label: "UI", items: [] },
        { label: "Frontend", items: [] },
        { label: "Backend", items: [] },
        { label: "Data", items: [] },
      ],
      imageUrl: "/projects/nesthive.png",
      videoUrl: "",
      cover: "",
      link: "",
      linkLabel: "",
      articleLink: "",
      year: "TBD",
      size: "wide" as const,
    },
    {
      title: "Music Match",
      description:
        "A matching platform that sources vocalists, producers, and DJs for specific creative briefs — from one-off features to full projects.",
      intro: [
        "Artists post a brief — genre, BPM, deliverables, budget — and Music Match returns a ranked list of vocalists, producers, and DJs that fit the spec.",
        "Replace with the matching-logic detail, stack, and what's shipped vs. planned.",
      ],
      tags: ["Placeholder", "Music", "Marketplace"],
      stack: [
        { label: "UI", items: [] },
        { label: "Frontend", items: [] },
        { label: "Backend", items: [] },
        { label: "Audio", items: [] },
      ],
      imageUrl: "/projects/musicmatch.png",
      videoUrl: "",
      cover: "",
      link: "",
      linkLabel: "",
      articleLink: "",
      year: "TBD",
      size: "wide" as const,
    },
    {
      title: "Concept Mapper",
      description:
        "An AI-powered tool that transforms complex ideas into clear, connected maps — built for faster learning and new-hire onboarding.",
      intro: [
        "Concept Mapper takes a long-form input — a doc, a transcript, a writeup — and renders it as a navigable graph so readers can see how the ideas connect instead of skimming a wall of text.",
        "Used internally for new-hire onboarding to compress a week of context into an afternoon.",
      ],
      tags: ["TypeScript", "React", "Vite", "Supabase"],
      stack: [
        { label: "UI", items: ["Tailwind CSS"] },
        { label: "Frontend", items: ["React", "TypeScript", "Vite"] },
        { label: "Backend", items: ["Supabase"] },
        { label: "AI", items: ["OpenAI API"] },
      ],
      imageUrl: cmIMG,
      videoUrl: "",
      cover: "",
      link: "https://conceptmapper.vercel.app/",
      linkLabel: "Try it out",
      articleLink: "",
      year: "2025",
      size: "wide" as const,
    },
    {
      title: "Easy-Apostrophe",
      description:
        "A VS Code extension that makes building lists of strings, comma-delimited items, and structured snippets effortless.",
      intro: [
        "Highlight a block of identifiers, hit one chord, and Easy-Apostrophe wraps every line in quotes, drops the commas in, and hands you a ready-to-paste array.",
        "Replace with download numbers and the inspiration behind it.",
      ],
      tags: ["TypeScript", "VS Code", "GitHub"],
      stack: [
        { label: "Language", items: ["TypeScript"] },
        { label: "Platform", items: ["VS Code Extension API"] },
        { label: "Distribution", items: ["VS Code Marketplace", "GitHub"] },
      ],
      imageUrl: easyA,
      videoUrl: "",
      cover: "",
      link: "",
      linkLabel: "",
      articleLink: "",
      year: "2024",
      size: "tall" as const,
    },
    {
      title: "Healthy Communities",
      description:
        "Principal-component analysis on a county-level health dataset to surface and visualize drivers of physical inactivity.",
      intro: [
        "A class research project that pulled in CDC county-level health indicators, ran PCA to compress the feature space, and visualized the dominant components as a Tableau story.",
        "Findings supported existing literature on socioeconomic and environmental drivers of physical inactivity.",
      ],
      tags: ["Python", "Tableau", "PCA", "Machine Learning"],
      stack: [
        { label: "Language", items: ["Python", "R"] },
        { label: "Modelling", items: ["scikit-learn", "PCA"] },
        { label: "Viz", items: ["Tableau"] },
      ],
      imageUrl: healthyImg,
      videoUrl: "",
      cover: "",
      link: "",
      linkLabel: "Read the writeup",
      articleLink: "https://medium.com/@ucladsu/healthy-communties-b8e02cc8ec81", // ← paste the article URL here
      year: "2024",
      size: "tall" as const,
    },
  ],
} as const;

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------

export const skillsData = [
  "Python", "SQL", "R", "C++", "C", "TypeScript", "Java", "HTML", "CSS",
  "MATLAB", "Snowflake", "SQL Server", "MongoDB", "Kafka", "Spark", "Pandas",
  "React", "Git", "Linux", "AWS", "Kubernetes", "Tableau", "Vercel",
] as const;
