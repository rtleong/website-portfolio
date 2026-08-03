import healthyImg from "@/public/HealthyCommunities.png";
import easyA from "@/public/easy_apostrophe_demo.gif";
import cmIMG from "@/public/conceptmapper.png";

// ---------------------------------------------------------------------------
// everything user-visible lives in this file.
// ---------------------------------------------------------------------------

export const siteContent = {
  // shown in the header (top-left brand mark) and metadata
  name: "Riley Leong",
  shortName: "riley leong",

  // hero
  hero: {
    // The big tagline. Break lines manually with \n.
    tagline:
      "innovation is where engineering meets empathy",
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
      "Excited to talk about anything tech, music, or fitness!",
    email: "rileyleong24@g.ucla.edu",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/riley-leong/" },
      { label: "GitHub", href: "https://github.com/rtleong" },
      { label: "Email", href: "mailto:rileyleong24@g.ucla.edu" },
    ],
    // The drawing-pad showcase that replaces the message form.
    drawing: {
      prompt: "or draw me something ↓",
      shipLabel: "Ship it",
      successMessage: "Successfully shipped to Riley's AWS instance!!",
      throttleMessage: "Whoa, slow down. Rate limit hit, give it a second.",
      aboutLabel: "read more about this feature",
      aboutTitle: "How this ships",
      about: [
        "Every drawing you ship is flattened to a PNG and uploaded straight into an S3 bucket I connected, keyed by a timestamp so nothing overwrites.",
        "The button is rate limited with a token-bucket limiter. Spam it and you will get throttled instead of firing a hundred requests, so nobody can hammer my AWS instance or run up my bill.",
        "It is a tiny thing, because this site is not heavily trafficked and the PNG's will likely never fill the minimum instance I pay for even if someone sends 10,000 pieces of art, but the careful approach is how I like to approach all development.",
      ],
    },
  },

  // ---------------------------------------------------------------------
  // /about page
  // ---------------------------------------------------------------------
  aboutPage: {
    eyebrow: "About",
    title: "beyond the resume",
    subtitle:
      '"I think so ∴ I am."',
    intro: [
      "UCLA Graduate c/o 2026, B.S in Mathematics of Computation.",
      "Data Management Professional @ Bloomberg LP in NY Metro Area",
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
  // /blog page — a 2-up grid of post cards. Each post:
  //   • category — small eyebrow above the title (e.g. "EAT AT HOME")
  //   • title    — post headline
  //   • author   — byline shown in the meta line
  //   • date     — display date string
  //   • image    — cover image path in /public (drop files in /public/blog)
  //   • excerpt  — the opening blurb / subtitle shown under the image
  //   • href     — the Medium article URL. "Read more" (and the title / cover)
  //                open it in a new tab. Paste the real Medium link here.
  // Add / remove entries freely — the grid fills left-to-right, 2 per row.
  // ---------------------------------------------------------------------
  blogPage: {
    eyebrow: "Writing",
    title: "blog(s)",
    subtitle:
      "Posts about any thoughts, events, milestones, or personal elements I want to share.",
    posts: [
      {
        category: "Math & Science",
        title: "Linear Algebra in a labcoat: A math undergrad thoughts on the qubit",
        author: "Riley Leong",
        date: "August 1st, 2026",
        image: "/qbit.jpeg",
        excerpt:
          "This is my first literature review out of college, my take on the qubit and quantum computing and its applications within finance. from the perspective of a math undergrad.",
        // TODO: paste the real Medium URL for this post.
        href: "https://medium.com/@rileyleong24/linear-algebra-in-a-labcoat-a-math-undergrad-thoughts-on-the-qubit-f9bb54754866?postPublishedType=initial",
      },
    ] as {
      category: string;
      title: string;
      author: string;
      date: string;
      image: string;
      excerpt: string;
      href: string;
    }[],
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
    title: "hobbies",
    subtitle:
      '"It is both scary and liberating to have periods of no obligation, and what we do with that time tells us a lot about ourselves." - meh',
    // Each section has a `gallery` — a flip-through carousel. Drop image files
    // in /public/hobbies/ and add an entry per item:
    //   { src: "/hobbies/dune.jpg", title: "Dune", note: "your thoughts…" }
    // `title` shows on the image; clicking the image expands `note`. Arrows to
    // flip between items appear on hover. `galleryAspect` sets the frame shape:
    //   "3/4" (book covers / portrait), "4/3" (photos), "1/1", "16/9".
    sections: [
      {
        id: "Mixing and Producing",
        title: "Mixing",
        body: [
          "I DJ events as an amateur, usually spinning the house and hip-hop that venues request, though trance has been a personal favorite of mine for years.",
          "The production side of music is a newer hobby for me. It is fun to combine math and music into something both technical and aesthetic, and I like to think my 10 years of piano experience sneaks in there too.",
        ],
        galleryAspect: "4/3",
        gallery: [
          {
            src: "/IMG_2893.jpeg",
            title: "House Party in LA",
            note: "First House party in LA, centered around pop and hits with some bass house later in the night.",
          },
          {
            src: "/DSC01173_Original.jpg",
            title: "Venue in LA",
            note: "First 150+ person event, highlight for me was playing a song I produced myself, it was not a favorite but that's okay.",
          },
        ] as { src: string; title: string; note?: string }[],
        photos: [] as { src: string; alt: string; caption?: string }[],
        links: [
          { label: "SoundCloud", href: "https://soundcloud.com/ri_leee" },
          { label: "Spotify", href: "https://open.spotify.com/user/pandalover2457" },
        ],
      },
      {
        id: "reading-and-media",
        title: "Reading & Media",
        body: [
          "I make it a point to read for non-technical and non-academic purposes. Fiction, with its fantastical elements, often nudges me to think about the world a little differently, and I like that.",
          "Below are some of my recent reads. Feel free to click through and see a few thoughts.",
        ],
        galleryAspect: "3/4",
        gallery: [
          {
            src: "/tomorrow_book.jpeg",
            title: "Finished July 2026",
            note: "A wonderful premise about a young boy in an accident and young girl navigating having a sister with a terminal illness forming a relationship stronger than romantic, middle was a little too graphic, conclusion was fantastic.",
          },
          {
            src: "/amanssearch.jpg",
            title: "Finished May 2026",
            note: "A unique perspective on the tragedy of the Holocaust, and the author's journey of self-discovery while losing all sense of self.",
          },
          {
            src: "/theodyssey.jpg",
            title: "Finished March 2026",
            note: "Reread in preperation for the Nolan film",
          },

        ] as { src: string; title: string; note?: string }[],
        photos: [] as { src: string; alt: string; caption?: string }[],
        links: [] as { label: string; href: string }[],
      },
      {
        id: "exercise",
        title: "Exercise",
        body: [
          "I used to believe exercise was only worthwhile if it was fun. Now that I have graduated and sit for far too long, I have accepted that it is simply a necessity.",
          "I play soccer regularly, having played for most of my life. More recently I am training for my first full marathon after finishing my first half, slowly learning tennis, and trying to get back into lifting.",
        ],
        galleryAspect: "4/3",
        gallery: [] as { src: string; title: string; note?: string }[],
        photos: [] as { src: string; alt: string; caption?: string }[],
        links: [] as { label: string; href: string }[],
      },
      {
        id: "gaming",
        title: "Gaming",
        body: [
          "A big hobby of mine. Fun fact: my brother and I became competitive Fortnite players during the pandemic and earned money competing in tournaments.",
          "I am currently in a Rocket League phase, and I always look forward to a Minecraft world around Christmas time.",
        ],
        galleryAspect: "16/9",
        gallery: [] as { src: string; title: string; note?: string }[],
        photos: [] as { src: string; alt: string; caption?: string }[],
        links: [] as { label: string; href: string }[],
      },
      {
        id: "mentorship",
        title: "Mentorship",
        body: [
          "When I joined UCLA, an alumni mentor led me to a professional organization that shaped my whole path there. In that org I took on leadership positions and grew into mentorship roles myself.",
          "I still practice those skills today by mentoring UCLA students who I meet with weekly, paying forward exactly what that alumnus did for me.",
        ],
        galleryAspect: "4/3",
        gallery: [] as { src: string; title: string; note?: string }[],
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
  { name: "blog", href: "/blog" },
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
//   • projects      — optional array of deeper project breakdowns. Each is a
//                     clickable row in the modal that expands in place:
//                     [{ title, summary, body: [...], stack: [...] }]
//
export const experiencesData = [
  {
    company: "Bloomberg",
    logo: "/logos/Bloomberg_LP.png",
    role: "Data Management Professional",
    timeline: "Aug 2026 — Present",
    location: "New York, NY",
    org: "Alternative Investment Funds Data Automation Team",
    collaborators: [],
    body: [
      "Starting August 24th, 2026, I will be joining Bloomberg as a Data Management Professional in the New York City Office (Midtown).",
      "Working on the financial data that powers the world — data pipelines, dashboards, and internal tooling supporting Bloomberg's data operations.",
      "Owning quality and coverage of reference data used downstream by trading, research, and analytics teams across the Bloomberg Terminal.",
    ],
    tags: ["Financial Data", "Pipelines", "Internal Tooling", "Operations"],
    link: "",
    cover: "",
    projects: [],
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
    tags: ["Python", "GenAI", "RAG", "AWS"],
    link: "",
    cover: "",
    projects: [
      {
        title: "Production Issue Chatbot",
        summary:
          "A GenAI chatbot that turns scattered team knowledge into instant, searchable answers.",
        body: [
          "Pulled unstructured data from MS Teams, Excel, email threads, and Confluence, the team's day-to-day knowledge sources, and organized it into modeled tables and vectorized inputs stored in AWS MemoryDB.",
          "Combined vector search with GPT-4, approved for use on Fidelity's internal Lumin-8 platform, so users can ask natural-language questions and get answers pulled from past production issues.",
          "The model is retrained as new teams adopt it. My original team is still building it out, and two additional teams have since started using it.",
        ],
        stack: ["Python", "AWS MemoryDB", "Vector Search", "GPT-4", "RAG"],
      },
    ],
  },
  {
    company: "OPN Healthcare",
    logo: "/logos/opn.png",
    role: "Product Management Intern",
    timeline: "Sep 2024 — Jan 2025",
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
    projects: [],
  },
  {
    company: "First American",
    logo: "/logos/fa_logo.png",
    role: "Data Science Intern",
    timeline: "Jun 2024 — Sep 2024",
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
    projects: [],
  },
  {
    company: "UCLA Mathematics",
    logo: "/logos/ucla.png",
    role: "Undergraduate Teaching Assistant",
    timeline: "Sep 2023 — Dec 2023",
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
    projects: [],
  },
  {
    company: "Benicia Unified",
    logo: "/logos/busd.png",
    role: "Associate Substitute Instructor",
    timeline: "Jun 2023 — Sep 2023",
    location: "Benicia, CA",
    org: "K–5 Summer Program",
    collaborators: [],
    body: [
      "Developed curriculum for K–5 students in a summer program covering elementary algebra and mathematical intuition.",
    ],
    tags: ["Education", "Curriculum"],
    link: "",
    cover: "",
    projects: [],
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
        "Cut the number of brake events required to score a truck in Michelin's Connected Fleet program in half, proving with statistical significance that accuracy held at 95% confidence.",
      intro: [
        "Michelin's Connected Fleet program required 100 brake events, an arbitrary threshold, before a truck's brake score was considered reliable enough to put it back on the road.",
        "We proved the score holds within a 95% confidence interval at just 50 events, half the original requirement. Michelin adopted the new 50-event threshold starting Q2 2026, cutting the time it takes trucks to get back on the road in half.",
      ],
      tags: ["Statistics", "Fleet Analytics"],
      stack: [
        { label: "Language", items: ["Python"] },
        { label: "Methods", items: ["Hypothesis Testing", "Confidence Intervals"] },
        { label: "Domain", items: ["Connected Fleet Analytics"] },
      ],
      imageUrl: "/logos/michelin.png",
      videoUrl: "",
      cover: "",
      link: "",
      linkLabel: "",
      articleLink: "",
      year: "2026",
      size: "wide" as const,
    },
    {
      title: "DENSO",
      description:
        "Built five ML and deep learning models, including ARIMA and Holt-Winters, to forecast demand for DENSO's product lines and optimize inventory. All five are currently in production.",
      intro: [
        "Partnered with DENSO, a global auto parts manufacturer, to forecast demand across a portfolio of products with complex, seasonal ordering patterns.",
        "Built and evaluated five models in Python, spanning classical time series methods like ARIMA and Holt-Winters alongside deep learning approaches, each suited to a different demand pattern. All five models are currently in production, feeding DENSO's inventory optimization.",
      ],
      tags: ["Python", "Forecasting", "Machine Learning"],
      stack: [
        { label: "Language", items: ["Python"] },
        { label: "Time Series", items: ["ARIMA", "Holt-Winters"] },
        { label: "Modelling", items: ["Machine Learning", "Deep Learning"] },
        { label: "Domain", items: ["Demand Forecasting", "Inventory Optimization"] },
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
        "A simplified relational database built from scratch, instead of relying on Postgres or MySQL, to understand how storage, querying, and query optimization work under the hood. I led this project for 9 students in our student org to inspire a deeper understanding of database systems and systems design.",
        intro: [
        "I led this project for 9 students in our student org to inspire a deeper understanding of database systems and systems design.",
        "DBSU implements core database functionality manually: data storage, querying, and basic optimization, to bridge the gap between theoretical database concepts and real-world system design.",
        "The engine stores structured data in tables, supports basic SQL-like operations (SELECT, INSERT, DELETE), and handles simple filtering and joins, with indexing and query optimization as stretch goals.",
      ],
      tags: ["Databases", "Systems Design"],
      stack: [
        { label: "Core", items: ["Storage Engine", "Query Execution"] },
        { label: "Operations", items: ["SELECT", "INSERT", "DELETE", "Joins"] },
        { label: "Focus", items: ["Systems Design", "Query Optimization"] },
      ],
      imageUrl: "/dbsu_ss.png",
      videoUrl: "/dbsu_recording.mp4",
      cover: "",
      link: "",
      linkLabel: "check out the repo!",
      articleLink: "https://github.com/the-data-science-union/DSU-S2026-DBSU-Build-a-Relational-Database",
      year: "2026",
      size: "wide" as const,
    },
    {
      title: "Nesthive",
      description:
        "A personal-finance social-media platform — share, compare, and learn from how friends manage and grow their money.",
      intro: [
        "Nesthive is a feed-style finance app where friends can compare allocations, savings goals, and habits without sharing raw account balances.",
        "Currently in progress.",
      ],
      tags: ["Placeholder", "Personal Finance", "Social"],
      stack: [
        { label: "UI", items: [] },
        { label: "Frontend", items: [] },
        { label: "Backend", items: [] },
        { label: "Data", items: [] },
      ],
      imageUrl: "/projects/in-development.png",
      videoUrl: "",
      cover: "",
      link: "",
      linkLabel: "",
      articleLink: "https://nest-hive.vercel.app/login?next=%2F",
      year: "2026",
      size: "wide" as const,
    },
    {
      title: "Music Match",
      description:
        "A full-stack app that connects musicians, matching vocalists, producers, and DJs to creative briefs, from one-off features to full projects. In active development.",
      intro: [
        "Music Match is a full-stack platform built to connect musicians: artists post a brief covering genre, BPM, deliverables, and budget, and the platform returns a ranked list of vocalists, producers, and DJs that fit the spec.",
        "Currently in active development, with the matching logic, artist profiles, and collaboration workflow taking shape.",
      ],
      tags: ["Full-Stack", "Music", "Marketplace"],
      stack: [
        { label: "UI", items: [] },
        { label: "Frontend", items: [] },
        { label: "Backend", items: [] },
        { label: "Audio", items: [] },
      ],
      imageUrl: "/projects/in-development.png",
      videoUrl: "",
      cover: "",
      link: "",
      linkLabel: "",
      articleLink: "",
      year: "2026",
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
        "Inspired by the repetitive tedium of building lists of comma-delimited items from a MS Teams message while @ First American, used it at work and introduced it to a few co-workers.",
        "My first program with USERS, got a few downloads but nothing crazy. Not maintained and removed from Marketplace.",
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
