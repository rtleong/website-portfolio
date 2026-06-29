"use strict";
exports.id = 4;
exports.ids = [4];
exports.modules = {

/***/ 8093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6864);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function PageHeader({ eyebrow, title, subtitle }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "relative pt-28 sm:pt-32 pb-12 sm:pb-16 px-6 sm:px-10 max-w-[90rem] mx-auto",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .E.span, {
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.5
                },
                className: "text-xs uppercase tracking-[0.25em] text-ink-muted block",
                children: [
                    "(",
                    eyebrow,
                    ")"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .E.h1, {
                initial: {
                    opacity: 0,
                    y: 24
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.7,
                    delay: 0.05,
                    ease: [
                        0.2,
                        0.8,
                        0.2,
                        1
                    ]
                },
                className: "font-display text-[clamp(2rem,5.5vw,5.25rem)] tracking-tight leading-[1.05] mt-3 max-w-[20ch]",
                children: [
                    title,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-accent",
                        children: "."
                    })
                ]
            }),
            subtitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .E.p, {
                initial: {
                    opacity: 0,
                    y: 16
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6,
                    delay: 0.18
                },
                className: "mt-6 text-base sm:text-lg text-ink-muted max-w-2xl leading-relaxed",
                children: subtitle
            })
        ]
    });
}


/***/ }),

/***/ 2018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Riley\Desktop\cursor_website\website-portfolio\components\page-header.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;