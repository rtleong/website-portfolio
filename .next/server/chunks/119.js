exports.id = 119;
exports.ids = [119];
exports.modules = {

/***/ 1491:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2829))

/***/ }),

/***/ 9487:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8782, 23))

/***/ }),

/***/ 3006:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3518));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2226));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9619));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9238));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7884));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 509))

/***/ }),

/***/ 2829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Template)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6864);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Template({ children }) {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                initial: {
                    scaleY: 1
                },
                animate: {
                    scaleY: 0
                },
                transition: {
                    duration: 0.7,
                    ease: [
                        0.76,
                        0,
                        0.24,
                        1
                    ]
                },
                style: {
                    transformOrigin: "top"
                },
                className: "fixed inset-0 z-[60] bg-ink pointer-events-none"
            }, pathname + "-curtain"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                initial: {
                    opacity: 0,
                    y: 24
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6,
                    delay: 0.35,
                    ease: [
                        0.2,
                        0.8,
                        0.2,
                        1
                    ]
                },
                children: children
            }, pathname)
        ]
    });
}


/***/ }),

/***/ 9619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5742);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Footer() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "border-t border-line",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-[100rem] mx-auto px-6 sm:px-10 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-sm text-ink-muted",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "inline-block w-2 h-2 rounded-full bg-accent"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: _lib_data__WEBPACK_IMPORTED_MODULE_2__.siteContent.footer.copyright
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-wrap gap-x-6 gap-y-2",
                    children: _lib_data__WEBPACK_IMPORTED_MODULE_2__.siteContent.contact.socials.map((s)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: s.href,
                            target: s.href.startsWith("http") ? "_blank" : undefined,
                            rel: "noopener noreferrer",
                            className: "link-line",
                            children: s.label.toLowerCase()
                        }, s.label))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-xs",
                    children: _lib_data__WEBPACK_IMPORTED_MODULE_2__.siteContent.footer.builtWith
                })
            ]
        })
    });
}


/***/ }),

/***/ 2226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4889);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8239);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8414);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6864);
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5742);
/* __next_internal_client_entry_do_not_use__ default auto */ 






function Header() {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();
    const [scrolled, setScrolled] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const { scrollY } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__/* .useScroll */ .v)();
    (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__/* .useMotionValueEvent */ .W)(scrollY, "change", (y)=>setScrolled(y > 24));
    const isActive = (href)=>href === "/" ? pathname === "/" : pathname.startsWith(href);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_8__/* .motion */ .E.header, {
        initial: {
            y: -40,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: 0.6,
            ease: [
                0.2,
                0.8,
                0.2,
                1
            ]
        },
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "bg-bg/80 backdrop-blur-md border-b border-line" : "bg-transparent border-b border-transparent"),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-[90rem] mx-auto flex items-center justify-between px-6 sm:px-10 py-5",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/",
                    className: "group flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "inline-block w-2.5 h-2.5 rounded-full bg-accent transition-transform group-hover:scale-125"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "font-display text-xl tracking-tight",
                            children: _lib_data__WEBPACK_IMPORTED_MODULE_5__.siteContent.shortName
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "flex items-center gap-1 text-sm",
                        children: _lib_data__WEBPACK_IMPORTED_MODULE_5__/* .navLinks */ .FV.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: link.href,
                                    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("relative px-4 py-2 rounded-full transition-colors", isActive(link.href) ? "text-ink" : "text-ink-muted hover:text-ink"),
                                    children: [
                                        isActive(link.href) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_8__/* .motion */ .E.span, {
                                            layoutId: "nav-pill",
                                            className: "absolute inset-0 rounded-full bg-ink/5",
                                            transition: {
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 30
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "relative",
                                            children: link.name
                                        })
                                    ]
                                })
                            }, link.href))
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    href: `mailto:${_lib_data__WEBPACK_IMPORTED_MODULE_5__.siteContent.contact.email}`,
                    className: "hidden sm:inline-flex items-center gap-2 text-sm text-ink hover:text-accent transition-colors",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "w-2 h-2 rounded-full bg-accent animate-pulse"
                        }),
                        "bookings available"
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 9238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActiveSectionContext: () => (/* binding */ ActiveSectionContext),
/* harmony export */   "default": () => (/* binding */ ActiveSectionContextProvider),
/* harmony export */   useActiveSectionContext: () => (/* binding */ useActiveSectionContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ ActiveSectionContext,default,useActiveSectionContext auto */ 

const ActiveSectionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function ActiveSectionContextProvider({ children }) {
    const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Home");
    const [timeOfLastClick, setTimeOfLastClick] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ActiveSectionContext.Provider, {
        value: {
            activeSection,
            setActiveSection,
            timeOfLastClick,
            setTimeOfLastClick
        },
        children: children
    });
}
function useActiveSectionContext() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ActiveSectionContext);
    if (context === null) {
        throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");
    }
    return context;
}


/***/ }),

/***/ 5742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $c: () => (/* binding */ experiencesData),
  FV: () => (/* binding */ navLinks),
  nD: () => (/* binding */ projectsData),
  siteContent: () => (/* binding */ siteContent),
  ZU: () => (/* binding */ skillsData)
});

// UNUSED EXPORTS: links

// EXTERNAL MODULE: ./public/HealthyCommunities.png
var HealthyCommunities = __webpack_require__(7884);
;// CONCATENATED MODULE: ./public/easy_apostrophe_demo.gif
/* harmony default export */ const easy_apostrophe_demo = ({"src":"/_next/static/media/easy_apostrophe_demo.594a2b7c.gif","height":338,"width":600,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./public/conceptmapper.png
var conceptmapper = __webpack_require__(509);
;// CONCATENATED MODULE: ./lib/data.ts



// ---------------------------------------------------------------------------
// EDIT-ME — everything user-visible lives in this file.
// ---------------------------------------------------------------------------
const siteContent = {
    // shown in the header (top-left brand mark) and metadata
    name: "Riley Leong",
    shortName: "riley leong",
    // hero
    hero: {
        // The big tagline. Break lines manually with \n.
        tagline: "Innovation is where engineering meets empathy",
        // smaller line under the tagline
        subtitle: "Math + CS @ UCLA. Data, Product, and Engineering — exploring where science meets insight.",
        // primary call-to-action button
        primaryCta: {
            label: "Get in touch",
            href: "#contact"
        },
        secondaryCta: {
            label: "Resume",
            href: "/Riley_Leong's_Resume.pdf"
        }
    },
    // about section
    about: {
        eyebrow: "About",
        headline: "Hi, I'm Riley \uD83D\uDC4B",
        paragraphs: [
            "I'm a graduate from UCLA where I studied Mathematics of Computation — a joint Math + CS program that fuels my obsession with building useful technology.",
            "Currently, I am a Data Management Professional @ Bloomberg LP in the NY Metro Area, where I work on data pipelines, dashboards, and internal tooling for the financial data that powers the world.",
            "I've worked across data engineering, product management, and full-stack development. I love the spot where engineering, design, and business meet.",
            "Outside of work I'm usually trying a new restaurant, training for my first full marathon, or losing at chess."
        ],
        quote: "Innovation is where engineering meets empathy."
    },
    // contact section
    contact: {
        eyebrow: "Contact",
        headline: "Let's make\nsomething together.",
        blurb: "I'm always open to internship, full-time, and side-project conversations.",
        email: "rileyleong24@g.ucla.edu",
        socials: [
            {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/riley-leong/"
            },
            {
                label: "GitHub",
                href: "https://github.com/rtleong"
            },
            {
                label: "Email",
                href: "mailto:rileyleong24@g.ucla.edu"
            }
        ]
    },
    // ---------------------------------------------------------------------
    // /about page
    // ---------------------------------------------------------------------
    aboutPage: {
        eyebrow: "About",
        title: "A quick story",
        subtitle: "Math, code, music, and a habit of trying things until they work.",
        intro: [
            "UCLA Graduate c/o 2026, B.S in Mathematics of Computation (joint Math + CS).",
            "Data Management Professional @ Bloomberg LP in the NY Metro Area"
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
                        "Recognized across multiple terms during the program."
                    ],
                    photos: [],
                    tags: [
                        "UCLA",
                        "Academic Honors"
                    ],
                    link: ""
                },
                {
                    title: "Undergraduate Math TA",
                    detail: "Mentored peers in Intro to CS (C++), Intro to Stats (R), and Calculus I.",
                    year: "2023",
                    body: [
                        "Held weekly office hours and led review sessions ahead of midterms.",
                        "Worked one-on-one with students struggling with foundational concepts."
                    ],
                    photos: [],
                    tags: [
                        "Teaching",
                        "C++",
                        "R"
                    ],
                    link: ""
                },
                {
                    title: "DataRes — Project Lead",
                    detail: "Led an end-to-end data project from ingestion to dashboarding.",
                    year: "2024",
                    body: [
                        "Led a sub-team of analysts on a quarter-long project ingesting a public dataset, cleaning it, and shipping a dashboard.",
                        "Owned the architecture decisions and the final presentation."
                    ],
                    photos: [],
                    tags: [
                        "Leadership",
                        "Dashboards",
                        "Python"
                    ],
                    link: ""
                },
                {
                    title: "Hackathon Winner",
                    detail: "Built a generative-AI prototype that placed in the top 3.",
                    year: "2024",
                    body: [
                        "Built a working prototype in 36 hours with a four-person team.",
                        "Pitched live to a panel of judges; placed in the top three out of 60+ teams."
                    ],
                    photos: [],
                    tags: [
                        "Hackathon",
                        "GenAI",
                        "Prototyping"
                    ],
                    link: ""
                }
            ]
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
                        "Delivered the valedictorian speech at commencement."
                    ],
                    photos: [],
                    tags: [
                        "Academic Honors"
                    ],
                    link: ""
                },
                {
                    title: "AP Scholar with Distinction",
                    detail: "High scores across 7 AP exams.",
                    year: "2022",
                    body: [
                        "Earned the AP Scholar with Distinction award from the College Board.",
                        "Scored 4 or higher across seven AP exams."
                    ],
                    photos: [],
                    tags: [
                        "AP",
                        "College Board"
                    ],
                    link: ""
                },
                {
                    title: "Math Team Captain",
                    detail: "Led the school's competitive math team for two years.",
                    year: "2020 — 2022",
                    body: [
                        "Captained the team across regional and state competitions.",
                        "Coordinated practice sessions and mentored newer team members."
                    ],
                    photos: [],
                    tags: [
                        "Leadership",
                        "Math Competitions"
                    ],
                    link: ""
                },
                {
                    title: "Varsity Athletics",
                    detail: "Team captain and league honors.",
                    year: "2019 — 2022",
                    body: [
                        "Competed at the varsity level and served as team captain.",
                        "Recognized with league-level honors during senior year."
                    ],
                    photos: [],
                    tags: [
                        "Athletics",
                        "Leadership"
                    ],
                    link: ""
                }
            ]
        }
    },
    // ---------------------------------------------------------------------
    // /bookings page (DJ)
    // ---------------------------------------------------------------------
    bookingsPage: {
        eyebrow: "DJ",
        title: "Bookings & sets",
        subtitle: "House, disco, and open-format. Available for clubs, weddings, private events, and brand activations across LA + the Bay Area.",
        djName: "RLNG",
        // Drop image paths into /public and reference them by "/file.jpg".
        photos: [
            {
                src: "/profile.jpg",
                alt: "Set at Venue 1",
                caption: "Sept 2025 — Los Angeles"
            },
            {
                src: "/profile.jpg",
                alt: "Set at Venue 2",
                caption: "Aug 2025 — San Francisco"
            },
            {
                src: "/profile.jpg",
                alt: "Set at Venue 3",
                caption: "Jul 2025 — Private Event"
            },
            {
                src: "/profile.jpg",
                alt: "Set at Venue 4",
                caption: "Jun 2025 — Festival"
            },
            {
                src: "/profile.jpg",
                alt: "Set at Venue 5",
                caption: "May 2025 — Wedding"
            },
            {
                src: "/profile.jpg",
                alt: "Set at Venue 6",
                caption: "Apr 2025 — Brand Activation"
            }
        ],
        // Past or upcoming gigs.
        gigs: [
            {
                date: "Oct 12, 2025",
                venue: "TBD",
                city: "Los Angeles, CA",
                status: "upcoming",
                link: ""
            },
            {
                date: "Sep 06, 2025",
                venue: "Sample Venue A",
                city: "Los Angeles, CA",
                status: "past",
                link: ""
            },
            {
                date: "Aug 22, 2025",
                venue: "Sample Venue B",
                city: "San Francisco, CA",
                status: "past",
                link: ""
            },
            {
                date: "Jul 18, 2025",
                venue: "Private Event",
                city: "Malibu, CA",
                status: "past",
                link: ""
            }
        ],
        // Where listeners can find your sets / socials.
        links: [
            {
                label: "SoundCloud",
                href: "https://soundcloud.com/"
            },
            {
                label: "Mixcloud",
                href: "https://www.mixcloud.com/"
            },
            {
                label: "Instagram",
                href: "https://instagram.com/"
            }
        ],
        bookingEmail: "rileyleong24@g.ucla.edu",
        bookingBlurb: "For booking inquiries, email me with the date, venue, set length, and vibe."
    },
    // footer
    footer: {
        copyright: `© ${new Date().getFullYear()} Riley Leong`,
        builtWith: "Built with Next.js, Tailwind, and Framer Motion."
    }
};
// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------
// Route-based navigation. Each entry becomes a top-level page.
const navLinks = [
    {
        name: "experiences",
        href: "/"
    },
    {
        name: "about",
        href: "/about"
    },
    {
        name: "bookings",
        href: "/bookings"
    }
];
// Legacy in-page section links (still used by the hooks for active-section
// tracking on the experiences page).
const links = [
    {
        name: "Home",
        hash: "#home"
    },
    {
        name: "Work",
        hash: "#work"
    },
    {
        name: "Experience",
        hash: "#experience"
    },
    {
        name: "Skills",
        hash: "#skills"
    },
    {
        name: "Contact",
        hash: "#contact"
    },
    {
        name: "About",
        hash: "#about"
    }
];
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
const experiencesData = [
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
            "Owning quality and coverage of reference data used downstream by trading, research, and analytics teams across the Bloomberg Terminal."
        ],
        tags: [
            "Financial Data",
            "Pipelines",
            "Internal Tooling",
            "Operations"
        ],
        link: "",
        cover: ""
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
            "Built the retrieval pipeline end-to-end — message ingestion, embedding, vector store, and a lightweight chat surface used by on-call engineers."
        ],
        tags: [
            "Python",
            "GenAI",
            "RAG",
            "Azure"
        ],
        link: "",
        cover: ""
    },
    {
        company: "OPN Healthcare",
        logo: "/logos/opn.png",
        role: "Product Management Intern",
        timeline: "Sept 2024 — Jan 2025",
        location: "Los Angeles, CA",
        org: "Oncology Analytics",
        collaborators: [
            "13 data-science interns"
        ],
        body: [
            "Led a team of 13 data-science interns with AGILE methodology to produce a cost-modeling tool for oncology regimens.",
            "Drove the roadmap for KPI dashboards — defined metrics, ran sprint reviews, and shipped weekly updates to clinical stakeholders."
        ],
        tags: [
            "Product",
            "AGILE",
            "Healthcare",
            "Dashboards"
        ],
        link: "",
        cover: ""
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
            "Cut pipeline runtime and reduced manual handoffs between the analytics and engineering teams."
        ],
        tags: [
            "Python",
            "R",
            "SQL Server",
            "ETL"
        ],
        link: "",
        cover: ""
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
            "Ran weekly office hours and review sessions ahead of midterms."
        ],
        tags: [
            "Teaching",
            "C++",
            "R"
        ],
        link: "",
        cover: ""
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
            "Developed curriculum for K–5 students in a summer program covering elementary algebra and mathematical intuition."
        ],
        tags: [
            "Education",
            "Curriculum"
        ],
        link: "",
        cover: ""
    }
];
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
const projectsData = {
    client: [
        {
            title: "Poppin Data Pipeline",
            description: "Built the first end-to-end data pipeline for a social-media startup with Snowflake, dbt, and Airflow. Powered a Power BI dashboard used in the pitch that secured Crunchbase funding.",
            intro: [
                "Owned the data foundation for Poppin from raw event ingestion to executive-facing dashboards.",
                "Designed the Snowflake schema, modelled the metrics layer in dbt, and orchestrated the daily refresh through Airflow. The Power BI dashboard rendered the user-growth and revenue charts featured in their Crunchbase-funded pitch."
            ],
            tags: [
                "Snowflake",
                "dbt",
                "Airflow",
                "Power BI"
            ],
            stack: [
                {
                    label: "Warehouse",
                    items: [
                        "Snowflake"
                    ]
                },
                {
                    label: "Modelling",
                    items: [
                        "dbt"
                    ]
                },
                {
                    label: "Orchestration",
                    items: [
                        "Airflow"
                    ]
                },
                {
                    label: "BI",
                    items: [
                        "Power BI"
                    ]
                }
            ],
            imageUrl: "/logos/poppin_tab.png",
            videoUrl: "",
            cover: "",
            link: "",
            linkLabel: "",
            articleLink: "",
            year: "2024",
            size: "wide"
        },
        {
            title: "Michelin",
            description: "Placeholder — replace with the project description, scope, and outcome.",
            intro: [
                "Placeholder — replace this paragraph with the project context: who you worked with, what problem you were solving, and over what timeline.",
                "Add a second paragraph with the technical detail and the outcome."
            ],
            tags: [
                "Placeholder"
            ],
            stack: [
                {
                    label: "UI",
                    items: []
                },
                {
                    label: "Frontend",
                    items: []
                },
                {
                    label: "Backend",
                    items: []
                },
                {
                    label: "Tools",
                    items: []
                }
            ],
            imageUrl: "/logos/michelin.png",
            videoUrl: "",
            cover: "",
            link: "",
            linkLabel: "",
            articleLink: "",
            year: "TBD",
            size: "wide"
        },
        {
            title: "DENSO",
            description: "Placeholder — replace with the project description, scope, and outcome.",
            intro: [
                "Placeholder — replace this paragraph with the project context.",
                "Add a second paragraph with the technical detail and outcome."
            ],
            tags: [
                "Placeholder"
            ],
            stack: [
                {
                    label: "UI",
                    items: []
                },
                {
                    label: "Frontend",
                    items: []
                },
                {
                    label: "Backend",
                    items: []
                },
                {
                    label: "Tools",
                    items: []
                }
            ],
            imageUrl: "/logos/denso.png",
            videoUrl: "",
            cover: "",
            link: "",
            linkLabel: "",
            articleLink: "",
            year: "TBD",
            size: "wide"
        }
    ],
    personal: [
        {
            title: "DBSU",
            description: "Placeholder — replace with the project description, stack, and outcome.",
            intro: [
                "Placeholder — replace this paragraph with what DBSU is, who it's for, and why it exists.",
                "Add the build story, key technical bits, and what you'd ship next."
            ],
            tags: [
                "Placeholder"
            ],
            stack: [
                {
                    label: "UI",
                    items: []
                },
                {
                    label: "Frontend",
                    items: []
                },
                {
                    label: "Backend",
                    items: []
                },
                {
                    label: "Tools",
                    items: []
                }
            ],
            imageUrl: "/projects/dbsu.png",
            videoUrl: "",
            cover: "",
            link: "",
            linkLabel: "check out the repo!",
            articleLink: "https://github.com/the-data-science-union/DSU-S2026-DBSU-Build-a-Relational-Database",
            year: "TBD",
            size: "wide"
        },
        {
            title: "Nesthive",
            description: "A personal-finance social-media platform — share, compare, and learn from how friends manage and grow their money.",
            intro: [
                "Nesthive is a feed-style finance app where friends can compare allocations, savings goals, and habits without sharing raw account balances.",
                "Replace with the build story, stack notes, and roadmap."
            ],
            tags: [
                "Placeholder",
                "Personal Finance",
                "Social"
            ],
            stack: [
                {
                    label: "UI",
                    items: []
                },
                {
                    label: "Frontend",
                    items: []
                },
                {
                    label: "Backend",
                    items: []
                },
                {
                    label: "Data",
                    items: []
                }
            ],
            imageUrl: "/projects/nesthive.png",
            videoUrl: "",
            cover: "",
            link: "",
            linkLabel: "",
            articleLink: "",
            year: "TBD",
            size: "wide"
        },
        {
            title: "Music Match",
            description: "A matching platform that sources vocalists, producers, and DJs for specific creative briefs — from one-off features to full projects.",
            intro: [
                "Artists post a brief — genre, BPM, deliverables, budget — and Music Match returns a ranked list of vocalists, producers, and DJs that fit the spec.",
                "Replace with the matching-logic detail, stack, and what's shipped vs. planned."
            ],
            tags: [
                "Placeholder",
                "Music",
                "Marketplace"
            ],
            stack: [
                {
                    label: "UI",
                    items: []
                },
                {
                    label: "Frontend",
                    items: []
                },
                {
                    label: "Backend",
                    items: []
                },
                {
                    label: "Audio",
                    items: []
                }
            ],
            imageUrl: "/projects/musicmatch.png",
            videoUrl: "",
            cover: "",
            link: "",
            linkLabel: "",
            articleLink: "",
            year: "TBD",
            size: "wide"
        },
        {
            title: "Concept Mapper",
            description: "An AI-powered tool that transforms complex ideas into clear, connected maps — built for faster learning and new-hire onboarding.",
            intro: [
                "Concept Mapper takes a long-form input — a doc, a transcript, a writeup — and renders it as a navigable graph so readers can see how the ideas connect instead of skimming a wall of text.",
                "Used internally for new-hire onboarding to compress a week of context into an afternoon."
            ],
            tags: [
                "TypeScript",
                "React",
                "Vite",
                "Supabase"
            ],
            stack: [
                {
                    label: "UI",
                    items: [
                        "Tailwind CSS"
                    ]
                },
                {
                    label: "Frontend",
                    items: [
                        "React",
                        "TypeScript",
                        "Vite"
                    ]
                },
                {
                    label: "Backend",
                    items: [
                        "Supabase"
                    ]
                },
                {
                    label: "AI",
                    items: [
                        "OpenAI API"
                    ]
                }
            ],
            imageUrl: conceptmapper["default"],
            videoUrl: "",
            cover: "",
            link: "https://conceptmapper.vercel.app/",
            linkLabel: "Try it out",
            articleLink: "",
            year: "2025",
            size: "wide"
        },
        {
            title: "Easy-Apostrophe",
            description: "A VS Code extension that makes building lists of strings, comma-delimited items, and structured snippets effortless.",
            intro: [
                "Highlight a block of identifiers, hit one chord, and Easy-Apostrophe wraps every line in quotes, drops the commas in, and hands you a ready-to-paste array.",
                "Replace with download numbers and the inspiration behind it."
            ],
            tags: [
                "TypeScript",
                "VS Code",
                "GitHub"
            ],
            stack: [
                {
                    label: "Language",
                    items: [
                        "TypeScript"
                    ]
                },
                {
                    label: "Platform",
                    items: [
                        "VS Code Extension API"
                    ]
                },
                {
                    label: "Distribution",
                    items: [
                        "VS Code Marketplace",
                        "GitHub"
                    ]
                }
            ],
            imageUrl: easy_apostrophe_demo,
            videoUrl: "",
            cover: "",
            link: "",
            linkLabel: "",
            articleLink: "",
            year: "2024",
            size: "tall"
        },
        {
            title: "Healthy Communities",
            description: "Principal-component analysis on a county-level health dataset to surface and visualize drivers of physical inactivity.",
            intro: [
                "A class research project that pulled in CDC county-level health indicators, ran PCA to compress the feature space, and visualized the dominant components as a Tableau story.",
                "Findings supported existing literature on socioeconomic and environmental drivers of physical inactivity."
            ],
            tags: [
                "Python",
                "Tableau",
                "PCA",
                "Machine Learning"
            ],
            stack: [
                {
                    label: "Language",
                    items: [
                        "Python",
                        "R"
                    ]
                },
                {
                    label: "Modelling",
                    items: [
                        "scikit-learn",
                        "PCA"
                    ]
                },
                {
                    label: "Viz",
                    items: [
                        "Tableau"
                    ]
                }
            ],
            imageUrl: HealthyCommunities["default"],
            videoUrl: "",
            cover: "",
            link: "",
            linkLabel: "Read the writeup",
            articleLink: "https://medium.com/@ucladsu/healthy-communties-b8e02cc8ec81",
            year: "2024",
            size: "tall"
        }
    ]
};
// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------
const skillsData = [
    "Python",
    "SQL",
    "R",
    "C++",
    "C",
    "TypeScript",
    "Java",
    "HTML",
    "CSS",
    "MATLAB",
    "Snowflake",
    "SQL Server",
    "MongoDB",
    "Kafka",
    "Spark",
    "Pandas",
    "React",
    "Git",
    "Linux",
    "AWS",
    "Kubernetes",
    "Tableau",
    "Vercel"
];


/***/ }),

/***/ 1274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6931);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"],"display":"swap","variable":"--font-sans","fallback":["system-ui","-apple-system","Segoe UI","Roboto","sans-serif"]}],"variableName":"inter"}
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_display_swap_variable_font_sans_fallback_system_ui_apple_system_Segoe_UI_Roboto_sans_serif_variableName_inter_ = __webpack_require__(6822);
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_display_swap_variable_font_sans_fallback_system_ui_apple_system_Segoe_UI_Roboto_sans_serif_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_display_swap_variable_font_sans_fallback_system_ui_apple_system_Segoe_UI_Roboto_sans_serif_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.tsx","import":"DM_Serif_Display","arguments":[{"subsets":["latin"],"weight":"400","display":"swap","variable":"--font-serif","fallback":["Georgia","Times New Roman","serif"]}],"variableName":"dmSerif"}
var target_path_app_layout_tsx_import_DM_Serif_Display_arguments_subsets_latin_weight_400_display_swap_variable_font_serif_fallback_Georgia_Times_New_Roman_serif_variableName_dmSerif_ = __webpack_require__(7407);
var target_path_app_layout_tsx_import_DM_Serif_Display_arguments_subsets_latin_weight_400_display_swap_variable_font_serif_fallback_Georgia_Times_New_Roman_serif_variableName_dmSerif_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_tsx_import_DM_Serif_Display_arguments_subsets_latin_weight_400_display_swap_variable_font_serif_fallback_Georgia_Times_New_Roman_serif_variableName_dmSerif_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1313);
;// CONCATENATED MODULE: ./components/header.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Riley\Desktop\cursor_website\website-portfolio\components\header.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const header = (__default__);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(2817);
;// CONCATENATED MODULE: ./context/active-section-context.tsx

const active_section_context_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Riley\Desktop\cursor_website\website-portfolio\context\active-section-context.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: active_section_context_esModule, $$typeof: active_section_context_$$typeof } = active_section_context_proxy;
const active_section_context_default_ = active_section_context_proxy.default;

const e0 = active_section_context_proxy["ActiveSectionContext"];


/* harmony default export */ const active_section_context = (active_section_context_default_);
const e1 = active_section_context_proxy["useActiveSectionContext"];

;// CONCATENATED MODULE: ./components/footer.tsx

const footer_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Riley\Desktop\cursor_website\website-portfolio\components\footer.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: footer_esModule, $$typeof: footer_$$typeof } = footer_proxy;
const footer_default_ = footer_proxy.default;


/* harmony default export */ const footer = (footer_default_);
// EXTERNAL MODULE: ./node_modules/react-hot-toast/dist/index.mjs
var dist = __webpack_require__(9035);
// EXTERNAL MODULE: ./lib/data.ts + 3 modules
var data = __webpack_require__(2269);
;// CONCATENATED MODULE: ./app/layout.tsx









const metadata = {
    title: `${data.siteContent.name} — Software Engineer`,
    description: data.siteContent.hero.subtitle
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        className: `!scroll-smooth ${(target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_display_swap_variable_font_sans_fallback_system_ui_apple_system_Segoe_UI_Roboto_sans_serif_variableName_inter_default()).variable} ${(target_path_app_layout_tsx_import_DM_Serif_Display_arguments_subsets_latin_weight_400_display_swap_variable_font_serif_fallback_Georgia_Times_New_Roman_serif_variableName_dmSerif_default()).variable}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: "bg-bg text-ink relative",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(active_section_context, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
                        children,
                        /*#__PURE__*/ jsx_runtime_.jsx(footer, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(dist/* Toaster */.x7, {
                            position: "bottom-center",
                            toastOptions: {
                                style: {
                                    background: "#1a1a1a",
                                    color: "#f6f4ef",
                                    borderRadius: "9999px",
                                    padding: "10px 18px",
                                    fontSize: "0.9rem"
                                }
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "noise"
                })
            ]
        })
    });
}


/***/ }),

/***/ 7821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Riley\Desktop\cursor_website\website-portfolio\app\template.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 2269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  siteContent: () => (/* binding */ siteContent)
});

// UNUSED EXPORTS: experiencesData, links, navLinks, projectsData, skillsData

;// CONCATENATED MODULE: ./public/HealthyCommunities.png
/* harmony default export */ const HealthyCommunities = ({"src":"/_next/static/media/HealthyCommunities.e277e033.png","height":934,"width":1253,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAfUlEQVR42kWMMQrCQBBFc0lvYGVtYelNRKw8hlh5ArFIZ2EIbmD9M7vOkNlMSEh+8+E9/q9KKaLaEdrYPerXs2mcmFnl9Qn1+bY93Q/7y+Z43aWcHI4iZWrDmziAv+Bg1s9CRGMEgQnpn2W9UnUxBvgxs9NlIU6JCICLaTEAWgiGB0cFnx0AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./public/easy_apostrophe_demo.gif
/* harmony default export */ const easy_apostrophe_demo = ({"src":"/_next/static/media/easy_apostrophe_demo.594a2b7c.gif","height":338,"width":600,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/conceptmapper.png
/* harmony default export */ const conceptmapper = ({"src":"/_next/static/media/conceptmapper.5ef78f74.png","height":1514,"width":3046,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAaElEQVR42iWKvQqAIBgAff/nKRqiJQiipZbEqKgh+gHzJ/1QIykhuIMbDl1gtbl/QvfDRLqRckA7FXle1g0W2lKuWtxjMjIJ6AI3rUdcFRuTynl4Xu18mFCQK8PAbvOCo4SkGT2lAPcBGfpXIRFwiLQAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./lib/data.ts



// ---------------------------------------------------------------------------
// EDIT-ME — everything user-visible lives in this file.
// ---------------------------------------------------------------------------
const siteContent = {
    // shown in the header (top-left brand mark) and metadata
    name: "Riley Leong",
    shortName: "riley leong",
    // hero
    hero: {
        // The big tagline. Break lines manually with \n.
        tagline: "Innovation is where engineering meets empathy",
        // smaller line under the tagline
        subtitle: "Math + CS @ UCLA. Data, Product, and Engineering — exploring where science meets insight.",
        // primary call-to-action button
        primaryCta: {
            label: "Get in touch",
            href: "#contact"
        },
        secondaryCta: {
            label: "Resume",
            href: "/Riley_Leong's_Resume.pdf"
        }
    },
    // about section
    about: {
        eyebrow: "About",
        headline: "Hi, I'm Riley \uD83D\uDC4B",
        paragraphs: [
            "I'm a graduate from UCLA where I studied Mathematics of Computation — a joint Math + CS program that fuels my obsession with building useful technology.",
            "Currently, I am a Data Management Professional @ Bloomberg LP in the NY Metro Area, where I work on data pipelines, dashboards, and internal tooling for the financial data that powers the world.",
            "I've worked across data engineering, product management, and full-stack development. I love the spot where engineering, design, and business meet.",
            "Outside of work I'm usually trying a new restaurant, training for my first full marathon, or losing at chess."
        ],
        quote: "Innovation is where engineering meets empathy."
    },
    // contact section
    contact: {
        eyebrow: "Contact",
        headline: "Let's make\nsomething together.",
        blurb: "I'm always open to internship, full-time, and side-project conversations.",
        email: "rileyleong24@g.ucla.edu",
        socials: [
            {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/riley-leong/"
            },
            {
                label: "GitHub",
                href: "https://github.com/rtleong"
            },
            {
                label: "Email",
                href: "mailto:rileyleong24@g.ucla.edu"
            }
        ]
    },
    // ---------------------------------------------------------------------
    // /about page
    // ---------------------------------------------------------------------
    aboutPage: {
        eyebrow: "About",
        title: "A quick story",
        subtitle: "Math, code, music, and a habit of trying things until they work.",
        intro: [
            "UCLA Graduate c/o 2026, B.S in Mathematics of Computation (joint Math + CS).",
            "Data Management Professional @ Bloomberg LP in the NY Metro Area"
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
                        "Recognized across multiple terms during the program."
                    ],
                    photos: [],
                    tags: [
                        "UCLA",
                        "Academic Honors"
                    ],
                    link: ""
                },
                {
                    title: "Undergraduate Math TA",
                    detail: "Mentored peers in Intro to CS (C++), Intro to Stats (R), and Calculus I.",
                    year: "2023",
                    body: [
                        "Held weekly office hours and led review sessions ahead of midterms.",
                        "Worked one-on-one with students struggling with foundational concepts."
                    ],
                    photos: [],
                    tags: [
                        "Teaching",
                        "C++",
                        "R"
                    ],
                    link: ""
                },
                {
                    title: "DataRes — Project Lead",
                    detail: "Led an end-to-end data project from ingestion to dashboarding.",
                    year: "2024",
                    body: [
                        "Led a sub-team of analysts on a quarter-long project ingesting a public dataset, cleaning it, and shipping a dashboard.",
                        "Owned the architecture decisions and the final presentation."
                    ],
                    photos: [],
                    tags: [
                        "Leadership",
                        "Dashboards",
                        "Python"
                    ],
                    link: ""
                },
                {
                    title: "Hackathon Winner",
                    detail: "Built a generative-AI prototype that placed in the top 3.",
                    year: "2024",
                    body: [
                        "Built a working prototype in 36 hours with a four-person team.",
                        "Pitched live to a panel of judges; placed in the top three out of 60+ teams."
                    ],
                    photos: [],
                    tags: [
                        "Hackathon",
                        "GenAI",
                        "Prototyping"
                    ],
                    link: ""
                }
            ]
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
                        "Delivered the valedictorian speech at commencement."
                    ],
                    photos: [],
                    tags: [
                        "Academic Honors"
                    ],
                    link: ""
                },
                {
                    title: "AP Scholar with Distinction",
                    detail: "High scores across 7 AP exams.",
                    year: "2022",
                    body: [
                        "Earned the AP Scholar with Distinction award from the College Board.",
                        "Scored 4 or higher across seven AP exams."
                    ],
                    photos: [],
                    tags: [
                        "AP",
                        "College Board"
                    ],
                    link: ""
                },
                {
                    title: "Math Team Captain",
                    detail: "Led the school's competitive math team for two years.",
                    year: "2020 — 2022",
                    body: [
                        "Captained the team across regional and state competitions.",
                        "Coordinated practice sessions and mentored newer team members."
                    ],
                    photos: [],
                    tags: [
                        "Leadership",
                        "Math Competitions"
                    ],
                    link: ""
                },
                {
                    title: "Varsity Athletics",
                    detail: "Team captain and league honors.",
                    year: "2019 — 2022",
                    body: [
                        "Competed at the varsity level and served as team captain.",
                        "Recognized with league-level honors during senior year."
                    ],
                    photos: [],
                    tags: [
                        "Athletics",
                        "Leadership"
                    ],
                    link: ""
                }
            ]
        }
    },
    // ---------------------------------------------------------------------
    // /bookings page (DJ)
    // ---------------------------------------------------------------------
    bookingsPage: {
        eyebrow: "DJ",
        title: "Bookings & sets",
        subtitle: "House, disco, and open-format. Available for clubs, weddings, private events, and brand activations across LA + the Bay Area.",
        djName: "RLNG",
        // Drop image paths into /public and reference them by "/file.jpg".
        photos: [
            {
                src: "/profile.jpg",
                alt: "Set at Venue 1",
                caption: "Sept 2025 — Los Angeles"
            },
            {
                src: "/profile.jpg",
                alt: "Set at Venue 2",
                caption: "Aug 2025 — San Francisco"
            },
            {
                src: "/profile.jpg",
                alt: "Set at Venue 3",
                caption: "Jul 2025 — Private Event"
            },
            {
                src: "/profile.jpg",
                alt: "Set at Venue 4",
                caption: "Jun 2025 — Festival"
            },
            {
                src: "/profile.jpg",
                alt: "Set at Venue 5",
                caption: "May 2025 — Wedding"
            },
            {
                src: "/profile.jpg",
                alt: "Set at Venue 6",
                caption: "Apr 2025 — Brand Activation"
            }
        ],
        // Past or upcoming gigs.
        gigs: [
            {
                date: "Oct 12, 2025",
                venue: "TBD",
                city: "Los Angeles, CA",
                status: "upcoming",
                link: ""
            },
            {
                date: "Sep 06, 2025",
                venue: "Sample Venue A",
                city: "Los Angeles, CA",
                status: "past",
                link: ""
            },
            {
                date: "Aug 22, 2025",
                venue: "Sample Venue B",
                city: "San Francisco, CA",
                status: "past",
                link: ""
            },
            {
                date: "Jul 18, 2025",
                venue: "Private Event",
                city: "Malibu, CA",
                status: "past",
                link: ""
            }
        ],
        // Where listeners can find your sets / socials.
        links: [
            {
                label: "SoundCloud",
                href: "https://soundcloud.com/"
            },
            {
                label: "Mixcloud",
                href: "https://www.mixcloud.com/"
            },
            {
                label: "Instagram",
                href: "https://instagram.com/"
            }
        ],
        bookingEmail: "rileyleong24@g.ucla.edu",
        bookingBlurb: "For booking inquiries, email me with the date, venue, set length, and vibe."
    },
    // footer
    footer: {
        copyright: `© ${new Date().getFullYear()} Riley Leong`,
        builtWith: "Built with Next.js, Tailwind, and Framer Motion."
    }
};
// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------
// Route-based navigation. Each entry becomes a top-level page.
const navLinks = [
    {
        name: "experiences",
        href: "/"
    },
    {
        name: "about",
        href: "/about"
    },
    {
        name: "bookings",
        href: "/bookings"
    }
];
// Legacy in-page section links (still used by the hooks for active-section
// tracking on the experiences page).
const links = [
    {
        name: "Home",
        hash: "#home"
    },
    {
        name: "Work",
        hash: "#work"
    },
    {
        name: "Experience",
        hash: "#experience"
    },
    {
        name: "Skills",
        hash: "#skills"
    },
    {
        name: "Contact",
        hash: "#contact"
    },
    {
        name: "About",
        hash: "#about"
    }
];
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
const experiencesData = [
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
            "Owning quality and coverage of reference data used downstream by trading, research, and analytics teams across the Bloomberg Terminal."
        ],
        tags: [
            "Financial Data",
            "Pipelines",
            "Internal Tooling",
            "Operations"
        ],
        link: "",
        cover: ""
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
            "Built the retrieval pipeline end-to-end — message ingestion, embedding, vector store, and a lightweight chat surface used by on-call engineers."
        ],
        tags: [
            "Python",
            "GenAI",
            "RAG",
            "Azure"
        ],
        link: "",
        cover: ""
    },
    {
        company: "OPN Healthcare",
        logo: "/logos/opn.png",
        role: "Product Management Intern",
        timeline: "Sept 2024 — Jan 2025",
        location: "Los Angeles, CA",
        org: "Oncology Analytics",
        collaborators: [
            "13 data-science interns"
        ],
        body: [
            "Led a team of 13 data-science interns with AGILE methodology to produce a cost-modeling tool for oncology regimens.",
            "Drove the roadmap for KPI dashboards — defined metrics, ran sprint reviews, and shipped weekly updates to clinical stakeholders."
        ],
        tags: [
            "Product",
            "AGILE",
            "Healthcare",
            "Dashboards"
        ],
        link: "",
        cover: ""
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
            "Cut pipeline runtime and reduced manual handoffs between the analytics and engineering teams."
        ],
        tags: [
            "Python",
            "R",
            "SQL Server",
            "ETL"
        ],
        link: "",
        cover: ""
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
            "Ran weekly office hours and review sessions ahead of midterms."
        ],
        tags: [
            "Teaching",
            "C++",
            "R"
        ],
        link: "",
        cover: ""
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
            "Developed curriculum for K–5 students in a summer program covering elementary algebra and mathematical intuition."
        ],
        tags: [
            "Education",
            "Curriculum"
        ],
        link: "",
        cover: ""
    }
];
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
const projectsData = {
    client: [
        {
            title: "Poppin Data Pipeline",
            description: "Built the first end-to-end data pipeline for a social-media startup with Snowflake, dbt, and Airflow. Powered a Power BI dashboard used in the pitch that secured Crunchbase funding.",
            intro: [
                "Owned the data foundation for Poppin from raw event ingestion to executive-facing dashboards.",
                "Designed the Snowflake schema, modelled the metrics layer in dbt, and orchestrated the daily refresh through Airflow. The Power BI dashboard rendered the user-growth and revenue charts featured in their Crunchbase-funded pitch."
            ],
            tags: [
                "Snowflake",
                "dbt",
                "Airflow",
                "Power BI"
            ],
            stack: [
                {
                    label: "Warehouse",
                    items: [
                        "Snowflake"
                    ]
                },
                {
                    label: "Modelling",
                    items: [
                        "dbt"
                    ]
                },
                {
                    label: "Orchestration",
                    items: [
                        "Airflow"
                    ]
                },
                {
                    label: "BI",
                    items: [
                        "Power BI"
                    ]
                }
            ],
            imageUrl: "/logos/poppin_tab.png",
            videoUrl: "",
            cover: "",
            link: "",
            linkLabel: "",
            articleLink: "",
            year: "2024",
            size: "wide"
        },
        {
            title: "Michelin",
            description: "Placeholder — replace with the project description, scope, and outcome.",
            intro: [
                "Placeholder — replace this paragraph with the project context: who you worked with, what problem you were solving, and over what timeline.",
                "Add a second paragraph with the technical detail and the outcome."
            ],
            tags: [
                "Placeholder"
            ],
            stack: [
                {
                    label: "UI",
                    items: []
                },
                {
                    label: "Frontend",
                    items: []
                },
                {
                    label: "Backend",
                    items: []
                },
                {
                    label: "Tools",
                    items: []
                }
            ],
            imageUrl: "/logos/michelin.png",
            videoUrl: "",
            cover: "",
            link: "",
            linkLabel: "",
            articleLink: "",
            year: "TBD",
            size: "wide"
        },
        {
            title: "DENSO",
            description: "Placeholder — replace with the project description, scope, and outcome.",
            intro: [
                "Placeholder — replace this paragraph with the project context.",
                "Add a second paragraph with the technical detail and outcome."
            ],
            tags: [
                "Placeholder"
            ],
            stack: [
                {
                    label: "UI",
                    items: []
                },
                {
                    label: "Frontend",
                    items: []
                },
                {
                    label: "Backend",
                    items: []
                },
                {
                    label: "Tools",
                    items: []
                }
            ],
            imageUrl: "/logos/denso.png",
            videoUrl: "",
            cover: "",
            link: "",
            linkLabel: "",
            articleLink: "",
            year: "TBD",
            size: "wide"
        }
    ],
    personal: [
        {
            title: "DBSU",
            description: "Placeholder — replace with the project description, stack, and outcome.",
            intro: [
                "Placeholder — replace this paragraph with what DBSU is, who it's for, and why it exists.",
                "Add the build story, key technical bits, and what you'd ship next."
            ],
            tags: [
                "Placeholder"
            ],
            stack: [
                {
                    label: "UI",
                    items: []
                },
                {
                    label: "Frontend",
                    items: []
                },
                {
                    label: "Backend",
                    items: []
                },
                {
                    label: "Tools",
                    items: []
                }
            ],
            imageUrl: "/projects/dbsu.png",
            videoUrl: "",
            cover: "",
            link: "",
            linkLabel: "check out the repo!",
            articleLink: "https://github.com/the-data-science-union/DSU-S2026-DBSU-Build-a-Relational-Database",
            year: "TBD",
            size: "wide"
        },
        {
            title: "Nesthive",
            description: "A personal-finance social-media platform — share, compare, and learn from how friends manage and grow their money.",
            intro: [
                "Nesthive is a feed-style finance app where friends can compare allocations, savings goals, and habits without sharing raw account balances.",
                "Replace with the build story, stack notes, and roadmap."
            ],
            tags: [
                "Placeholder",
                "Personal Finance",
                "Social"
            ],
            stack: [
                {
                    label: "UI",
                    items: []
                },
                {
                    label: "Frontend",
                    items: []
                },
                {
                    label: "Backend",
                    items: []
                },
                {
                    label: "Data",
                    items: []
                }
            ],
            imageUrl: "/projects/nesthive.png",
            videoUrl: "",
            cover: "",
            link: "",
            linkLabel: "",
            articleLink: "",
            year: "TBD",
            size: "wide"
        },
        {
            title: "Music Match",
            description: "A matching platform that sources vocalists, producers, and DJs for specific creative briefs — from one-off features to full projects.",
            intro: [
                "Artists post a brief — genre, BPM, deliverables, budget — and Music Match returns a ranked list of vocalists, producers, and DJs that fit the spec.",
                "Replace with the matching-logic detail, stack, and what's shipped vs. planned."
            ],
            tags: [
                "Placeholder",
                "Music",
                "Marketplace"
            ],
            stack: [
                {
                    label: "UI",
                    items: []
                },
                {
                    label: "Frontend",
                    items: []
                },
                {
                    label: "Backend",
                    items: []
                },
                {
                    label: "Audio",
                    items: []
                }
            ],
            imageUrl: "/projects/musicmatch.png",
            videoUrl: "",
            cover: "",
            link: "",
            linkLabel: "",
            articleLink: "",
            year: "TBD",
            size: "wide"
        },
        {
            title: "Concept Mapper",
            description: "An AI-powered tool that transforms complex ideas into clear, connected maps — built for faster learning and new-hire onboarding.",
            intro: [
                "Concept Mapper takes a long-form input — a doc, a transcript, a writeup — and renders it as a navigable graph so readers can see how the ideas connect instead of skimming a wall of text.",
                "Used internally for new-hire onboarding to compress a week of context into an afternoon."
            ],
            tags: [
                "TypeScript",
                "React",
                "Vite",
                "Supabase"
            ],
            stack: [
                {
                    label: "UI",
                    items: [
                        "Tailwind CSS"
                    ]
                },
                {
                    label: "Frontend",
                    items: [
                        "React",
                        "TypeScript",
                        "Vite"
                    ]
                },
                {
                    label: "Backend",
                    items: [
                        "Supabase"
                    ]
                },
                {
                    label: "AI",
                    items: [
                        "OpenAI API"
                    ]
                }
            ],
            imageUrl: conceptmapper,
            videoUrl: "",
            cover: "",
            link: "https://conceptmapper.vercel.app/",
            linkLabel: "Try it out",
            articleLink: "",
            year: "2025",
            size: "wide"
        },
        {
            title: "Easy-Apostrophe",
            description: "A VS Code extension that makes building lists of strings, comma-delimited items, and structured snippets effortless.",
            intro: [
                "Highlight a block of identifiers, hit one chord, and Easy-Apostrophe wraps every line in quotes, drops the commas in, and hands you a ready-to-paste array.",
                "Replace with download numbers and the inspiration behind it."
            ],
            tags: [
                "TypeScript",
                "VS Code",
                "GitHub"
            ],
            stack: [
                {
                    label: "Language",
                    items: [
                        "TypeScript"
                    ]
                },
                {
                    label: "Platform",
                    items: [
                        "VS Code Extension API"
                    ]
                },
                {
                    label: "Distribution",
                    items: [
                        "VS Code Marketplace",
                        "GitHub"
                    ]
                }
            ],
            imageUrl: easy_apostrophe_demo,
            videoUrl: "",
            cover: "",
            link: "",
            linkLabel: "",
            articleLink: "",
            year: "2024",
            size: "tall"
        },
        {
            title: "Healthy Communities",
            description: "Principal-component analysis on a county-level health dataset to surface and visualize drivers of physical inactivity.",
            intro: [
                "A class research project that pulled in CDC county-level health indicators, ran PCA to compress the feature space, and visualized the dominant components as a Tableau story.",
                "Findings supported existing literature on socioeconomic and environmental drivers of physical inactivity."
            ],
            tags: [
                "Python",
                "Tableau",
                "PCA",
                "Machine Learning"
            ],
            stack: [
                {
                    label: "Language",
                    items: [
                        "Python",
                        "R"
                    ]
                },
                {
                    label: "Modelling",
                    items: [
                        "scikit-learn",
                        "PCA"
                    ]
                },
                {
                    label: "Viz",
                    items: [
                        "Tableau"
                    ]
                }
            ],
            imageUrl: HealthyCommunities,
            videoUrl: "",
            cover: "",
            link: "",
            linkLabel: "Read the writeup",
            articleLink: "https://medium.com/@ucladsu/healthy-communties-b8e02cc8ec81",
            year: "2024",
            size: "tall"
        }
    ]
};
// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------
const skillsData = (/* unused pure expression or super */ null && ([
    "Python",
    "SQL",
    "R",
    "C++",
    "C",
    "TypeScript",
    "Java",
    "HTML",
    "CSS",
    "MATLAB",
    "Snowflake",
    "SQL Server",
    "MongoDB",
    "Kafka",
    "Spark",
    "Pandas",
    "React",
    "Git",
    "Linux",
    "AWS",
    "Kubernetes",
    "Tableau",
    "Vercel"
]));


/***/ }),

/***/ 7884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/HealthyCommunities.e277e033.png","height":934,"width":1253,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAfUlEQVR42kWMMQrCQBBFc0lvYGVtYelNRKw8hlh5ArFIZ2EIbmD9M7vOkNlMSEh+8+E9/q9KKaLaEdrYPerXs2mcmFnl9Qn1+bY93Q/7y+Z43aWcHI4iZWrDmziAv+Bg1s9CRGMEgQnpn2W9UnUxBvgxs9NlIU6JCICLaTEAWgiGB0cFnx0AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ 509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/conceptmapper.5ef78f74.png","height":1514,"width":3046,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAaElEQVR42iWKvQqAIBgAff/nKRqiJQiipZbEqKgh+gHzJ/1QIykhuIMbDl1gtbl/QvfDRLqRckA7FXle1g0W2lKuWtxjMjIJ6AI3rUdcFRuTynl4Xu18mFCQK8PAbvOCo4SkGT2lAPcBGfpXIRFwiLQAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ 3174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 2817:
/***/ (() => {



/***/ })

};
;