"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/ui/hero-parallax.tsx":
/*!*****************************************!*\
  !*** ./components/ui/hero-parallax.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: function() { return /* binding */ Header; },\n/* harmony export */   HeroParallax: function() { return /* binding */ HeroParallax; },\n/* harmony export */   ProductCard: function() { return /* binding */ ProductCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-spring.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ HeroParallax,Header,ProductCard auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst HeroParallax = (param)=>{\n    let { products } = param;\n    _s();\n    const firstRow = products.slice(0, 5);\n    const secondRow = products.slice(5, 10);\n    const thirdRow = products.slice(10, 15);\n    const ref = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)({\n        target: ref,\n        offset: [\n            \"start start\",\n            \"end start\"\n        ]\n    });\n    const springConfig = {\n        stiffness: 300,\n        damping: 30,\n        bounce: 100\n    };\n    const translateX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring)((0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0,\n        1000\n    ]), springConfig);\n    const translateXReverse = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring)((0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0,\n        -1000\n    ]), springConfig);\n    const rotateX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring)((0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform)(scrollYProgress, [\n        0,\n        0.2\n    ], [\n        15,\n        0\n    ]), springConfig);\n    const opacity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring)((0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform)(scrollYProgress, [\n        0,\n        0.2\n    ], [\n        0.2,\n        1\n    ]), springConfig);\n    const rotateZ = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring)((0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform)(scrollYProgress, [\n        0,\n        0.2\n    ], [\n        20,\n        0\n    ]), springConfig);\n    const translateY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring)((0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform)(scrollYProgress, [\n        0,\n        0.2\n    ], [\n        -700,\n        500\n    ]), springConfig);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        className: \"h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                style: {\n                    rotateX,\n                    rotateZ,\n                    translateY,\n                    opacity\n                },\n                className: \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                        className: \"flex flex-row-reverse space-x-reverse space-x-20 mb-20\",\n                        children: firstRow.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductCard, {\n                                product: product,\n                                translate: translateX\n                            }, product.title, false, {\n                                fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                        className: \"flex flex-row  mb-20 space-x-20 \",\n                        children: secondRow.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductCard, {\n                                product: product,\n                                translate: translateXReverse\n                            }, product.title, false, {\n                                fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                        className: \"flex flex-row-reverse space-x-reverse space-x-20\",\n                        children: thirdRow.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductCard, {\n                                product: product,\n                                translate: translateX\n                            }, product.title, false, {\n                                fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HeroParallax, \"R8/dTk9CmVkuZMulzDierWMPHkc=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring\n    ];\n});\n_c = HeroParallax;\nconst Header = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl md:text-7xl font-bold dark:text-white\",\n                children: [\n                    \"Top \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"max-w-2xl text-base md:text-xl mt-8 dark:text-purple-900\",\n                children: \"We strategically connect brands with thier target audience.\"\n            }, void 0, false, {\n                fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Header;\nconst ProductCard = (param)=>{\n    let { product, translate } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n        style: {\n            x: translate\n        },\n        whileHover: {\n            y: -20\n        },\n        className: \"group/product h-96 w-[30rem] relative flex-shrink-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: product.link,\n                className: \"block group-hover/product:shadow-2xl \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: product.thumbnail,\n                    height: \"600\",\n                    width: \"600\",\n                    className: \"object-cover object-left-top absolute h-full w-full inset-0\",\n                    alt: product.title\n                }, void 0, false, {\n                    fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                    lineNumber: 143,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                lineNumber: 139,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none\"\n            }, void 0, false, {\n                fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                lineNumber: 151,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white\",\n                children: product.title\n            }, void 0, false, {\n                fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                lineNumber: 152,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, product.title, true, {\n        fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n        lineNumber: 129,\n        columnNumber: 5\n    }, undefined);\n};\n_c2 = ProductCard;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"HeroParallax\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvaGVyby1wYXJhbGxheC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMwQjtBQU9IO0FBQ1E7QUFDRjtBQUV0QixNQUFNTyxlQUFlO1FBQUMsRUFDM0JDLFFBQVEsRUFPVDs7SUFDQyxNQUFNQyxXQUFXRCxTQUFTRSxLQUFLLENBQUMsR0FBRztJQUNuQyxNQUFNQyxZQUFZSCxTQUFTRSxLQUFLLENBQUMsR0FBRztJQUNwQyxNQUFNRSxXQUFXSixTQUFTRSxLQUFLLENBQUMsSUFBSTtJQUNwQyxNQUFNRyxNQUFNYixtREFBWSxDQUFDO0lBQ3pCLE1BQU0sRUFBRWUsZUFBZSxFQUFFLEdBQUdiLHdEQUFTQSxDQUFDO1FBQ3BDYyxRQUFRSDtRQUNSSSxRQUFRO1lBQUM7WUFBZTtTQUFZO0lBQ3RDO0lBRUEsTUFBTUMsZUFBZTtRQUFFQyxXQUFXO1FBQUtDLFNBQVM7UUFBSUMsUUFBUTtJQUFJO0lBRWhFLE1BQU1DLGFBQWFsQix3REFBU0EsQ0FDMUJELDJEQUFZQSxDQUFDWSxpQkFBaUI7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQUc7S0FBSyxHQUMvQ0c7SUFFRixNQUFNSyxvQkFBb0JuQix3REFBU0EsQ0FDakNELDJEQUFZQSxDQUFDWSxpQkFBaUI7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQUcsQ0FBQztLQUFLLEdBQ2hERztJQUVGLE1BQU1NLFVBQVVwQix3REFBU0EsQ0FDdkJELDJEQUFZQSxDQUFDWSxpQkFBaUI7UUFBQztRQUFHO0tBQUksRUFBRTtRQUFDO1FBQUk7S0FBRSxHQUMvQ0c7SUFFRixNQUFNTyxVQUFVckIsd0RBQVNBLENBQ3ZCRCwyREFBWUEsQ0FBQ1ksaUJBQWlCO1FBQUM7UUFBRztLQUFJLEVBQUU7UUFBQztRQUFLO0tBQUUsR0FDaERHO0lBRUYsTUFBTVEsVUFBVXRCLHdEQUFTQSxDQUN2QkQsMkRBQVlBLENBQUNZLGlCQUFpQjtRQUFDO1FBQUc7S0FBSSxFQUFFO1FBQUM7UUFBSTtLQUFFLEdBQy9DRztJQUVGLE1BQU1TLGFBQWF2Qix3REFBU0EsQ0FDMUJELDJEQUFZQSxDQUFDWSxpQkFBaUI7UUFBQztRQUFHO0tBQUksRUFBRTtRQUFDLENBQUM7UUFBSztLQUFJLEdBQ25ERztJQUVGLHFCQUNFLDhEQUFDVTtRQUNDZixLQUFLQTtRQUNMZ0IsV0FBVTs7MEJBRVYsOERBQUNDOzs7OzswQkFDRCw4REFBQzdCLGlEQUFNQSxDQUFDMkIsR0FBRztnQkFDVEcsT0FBTztvQkFDTFA7b0JBQ0FFO29CQUNBQztvQkFDQUY7Z0JBQ0Y7Z0JBQ0FJLFdBQVU7O2tDQUVWLDhEQUFDNUIsaURBQU1BLENBQUMyQixHQUFHO3dCQUFDQyxXQUFVO2tDQUNuQnBCLFNBQVN1QixHQUFHLENBQUMsQ0FBQ0Msd0JBQ2IsOERBQUNDO2dDQUNDRCxTQUFTQTtnQ0FDVEUsV0FBV2I7K0JBQ05XLFFBQVFHLEtBQUs7Ozs7Ozs7Ozs7a0NBSXhCLDhEQUFDbkMsaURBQU1BLENBQUMyQixHQUFHO3dCQUFDQyxXQUFVO2tDQUNuQmxCLFVBQVVxQixHQUFHLENBQUMsQ0FBQ0Msd0JBQ2QsOERBQUNDO2dDQUNDRCxTQUFTQTtnQ0FDVEUsV0FBV1o7K0JBQ05VLFFBQVFHLEtBQUs7Ozs7Ozs7Ozs7a0NBSXhCLDhEQUFDbkMsaURBQU1BLENBQUMyQixHQUFHO3dCQUFDQyxXQUFVO2tDQUNuQmpCLFNBQVNvQixHQUFHLENBQUMsQ0FBQ0Msd0JBQ2IsOERBQUNDO2dDQUNDRCxTQUFTQTtnQ0FDVEUsV0FBV2I7K0JBQ05XLFFBQVFHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPaEMsRUFBRTtHQXpGVzdCOztRQWFpQkwsb0RBQVNBO1FBT2xCRSxvREFBU0E7UUFJRkEsb0RBQVNBO1FBSW5CQSxvREFBU0E7UUFJVEEsb0RBQVNBO1FBSVRBLG9EQUFTQTtRQUlOQSxvREFBU0E7OztLQXhDakJHO0FBMkZOLE1BQU11QixTQUFTO0lBQ3BCLHFCQUNFLDhEQUFDRjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ1E7Z0JBQUdSLFdBQVU7O29CQUFpRDtrQ0FDekQsOERBQUNTOzs7Ozs7Ozs7OzswQkFFUCw4REFBQ0M7Z0JBQUVWLFdBQVU7MEJBQTJEOzs7Ozs7Ozs7Ozs7QUFLOUUsRUFBRTtNQVhXQztBQWFOLE1BQU1JLGNBQWM7UUFBQyxFQUMxQkQsT0FBTyxFQUNQRSxTQUFTLEVBUVY7SUFDQyxxQkFDRSw4REFBQ2xDLGlEQUFNQSxDQUFDMkIsR0FBRztRQUNURyxPQUFPO1lBQ0xTLEdBQUdMO1FBQ0w7UUFDQU0sWUFBWTtZQUNWQyxHQUFHLENBQUM7UUFDTjtRQUVBYixXQUFVOzswQkFFViw4REFBQ3ZCLGtEQUFJQTtnQkFDSHFDLE1BQU1WLFFBQVFXLElBQUk7Z0JBQ2xCZixXQUFVOzBCQUVWLDRFQUFDeEIsbURBQUtBO29CQUNKd0MsS0FBS1osUUFBUWEsU0FBUztvQkFDdEJDLFFBQU87b0JBQ1BDLE9BQU07b0JBQ05uQixXQUFVO29CQUNWb0IsS0FBS2hCLFFBQVFHLEtBQUs7Ozs7Ozs7Ozs7OzBCQUd0Qiw4REFBQ1I7Z0JBQUlDLFdBQVU7Ozs7OzswQkFDZiw4REFBQ3FCO2dCQUFHckIsV0FBVTswQkFDWEksUUFBUUcsS0FBSzs7Ozs7OztPQWpCWEgsUUFBUUcsS0FBSzs7Ozs7QUFxQnhCLEVBQUU7TUF4Q1dGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvaGVyby1wYXJhbGxheC50c3g/ZTJkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIG1vdGlvbixcbiAgdXNlU2Nyb2xsLFxuICB1c2VUcmFuc2Zvcm0sXG4gIHVzZVNwcmluZyxcbiAgTW90aW9uVmFsdWUsXG59IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGNvbnN0IEhlcm9QYXJhbGxheCA9ICh7XG4gIHByb2R1Y3RzLFxufToge1xuICBwcm9kdWN0czoge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbGluazogc3RyaW5nO1xuICAgIHRodW1ibmFpbDogc3RyaW5nO1xuICB9W107XG59KSA9PiB7XG4gIGNvbnN0IGZpcnN0Um93ID0gcHJvZHVjdHMuc2xpY2UoMCwgNSk7XG4gIGNvbnN0IHNlY29uZFJvdyA9IHByb2R1Y3RzLnNsaWNlKDUsIDEwKTtcbiAgY29uc3QgdGhpcmRSb3cgPSBwcm9kdWN0cy5zbGljZSgxMCwgMTUpO1xuICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoe1xuICAgIHRhcmdldDogcmVmLFxuICAgIG9mZnNldDogW1wic3RhcnQgc3RhcnRcIiwgXCJlbmQgc3RhcnRcIl0sXG4gIH0pO1xuXG4gIGNvbnN0IHNwcmluZ0NvbmZpZyA9IHsgc3RpZmZuZXNzOiAzMDAsIGRhbXBpbmc6IDMwLCBib3VuY2U6IDEwMCB9O1xuXG4gIGNvbnN0IHRyYW5zbGF0ZVggPSB1c2VTcHJpbmcoXG4gICAgdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDFdLCBbMCwgMTAwMF0pLFxuICAgIHNwcmluZ0NvbmZpZ1xuICApO1xuICBjb25zdCB0cmFuc2xhdGVYUmV2ZXJzZSA9IHVzZVNwcmluZyhcbiAgICB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMV0sIFswLCAtMTAwMF0pLFxuICAgIHNwcmluZ0NvbmZpZ1xuICApO1xuICBjb25zdCByb3RhdGVYID0gdXNlU3ByaW5nKFxuICAgIHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjJdLCBbMTUsIDBdKSxcbiAgICBzcHJpbmdDb25maWdcbiAgKTtcbiAgY29uc3Qgb3BhY2l0eSA9IHVzZVNwcmluZyhcbiAgICB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4yXSwgWzAuMiwgMV0pLFxuICAgIHNwcmluZ0NvbmZpZ1xuICApO1xuICBjb25zdCByb3RhdGVaID0gdXNlU3ByaW5nKFxuICAgIHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjJdLCBbMjAsIDBdKSxcbiAgICBzcHJpbmdDb25maWdcbiAgKTtcbiAgY29uc3QgdHJhbnNsYXRlWSA9IHVzZVNwcmluZyhcbiAgICB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4yXSwgWy03MDAsIDUwMF0pLFxuICAgIHNwcmluZ0NvbmZpZ1xuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHJlZj17cmVmfVxuICAgICAgY2xhc3NOYW1lPVwiaC1bMzAwdmhdIHB5LTQwIG92ZXJmbG93LWhpZGRlbiAgYW50aWFsaWFzZWQgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBzZWxmLWF1dG8gW3BlcnNwZWN0aXZlOjEwMDBweF0gW3RyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZF1cIlxuICAgID5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcm90YXRlWCxcbiAgICAgICAgICByb3RhdGVaLFxuICAgICAgICAgIHRyYW5zbGF0ZVksXG4gICAgICAgICAgb3BhY2l0eSxcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgID5cbiAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdy1yZXZlcnNlIHNwYWNlLXgtcmV2ZXJzZSBzcGFjZS14LTIwIG1iLTIwXCI+XG4gICAgICAgICAge2ZpcnN0Um93Lm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgPFByb2R1Y3RDYXJkXG4gICAgICAgICAgICAgIHByb2R1Y3Q9e3Byb2R1Y3R9XG4gICAgICAgICAgICAgIHRyYW5zbGF0ZT17dHJhbnNsYXRlWH1cbiAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93ICBtYi0yMCBzcGFjZS14LTIwIFwiPlxuICAgICAgICAgIHtzZWNvbmRSb3cubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgICA8UHJvZHVjdENhcmRcbiAgICAgICAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cbiAgICAgICAgICAgICAgdHJhbnNsYXRlPXt0cmFuc2xhdGVYUmV2ZXJzZX1cbiAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93LXJldmVyc2Ugc3BhY2UteC1yZXZlcnNlIHNwYWNlLXgtMjBcIj5cbiAgICAgICAgICB7dGhpcmRSb3cubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgICA8UHJvZHVjdENhcmRcbiAgICAgICAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cbiAgICAgICAgICAgICAgdHJhbnNsYXRlPXt0cmFuc2xhdGVYfVxuICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIHJlbGF0aXZlIG14LWF1dG8gcHktMjAgbWQ6cHktNDAgcHgtNCB3LWZ1bGwgIGxlZnQtMCB0b3AtMFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtN3hsIGZvbnQtYm9sZCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgVG9wIDxiciAvPiBcbiAgICAgIDwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYXgtdy0yeGwgdGV4dC1iYXNlIG1kOnRleHQteGwgbXQtOCBkYXJrOnRleHQtcHVycGxlLTkwMFwiPlxuICAgICAgV2Ugc3RyYXRlZ2ljYWxseSBjb25uZWN0IGJyYW5kcyB3aXRoIHRoaWVyIHRhcmdldCBhdWRpZW5jZS5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBQcm9kdWN0Q2FyZCA9ICh7XG4gIHByb2R1Y3QsXG4gIHRyYW5zbGF0ZSxcbn06IHtcbiAgcHJvZHVjdDoge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbGluazogc3RyaW5nO1xuICAgIHRodW1ibmFpbDogc3RyaW5nO1xuICB9O1xuICB0cmFuc2xhdGU6IE1vdGlvblZhbHVlPG51bWJlcj47XG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHg6IHRyYW5zbGF0ZSxcbiAgICAgIH19XG4gICAgICB3aGlsZUhvdmVyPXt7XG4gICAgICAgIHk6IC0yMCxcbiAgICAgIH19XG4gICAgICBrZXk9e3Byb2R1Y3QudGl0bGV9XG4gICAgICBjbGFzc05hbWU9XCJncm91cC9wcm9kdWN0IGgtOTYgdy1bMzByZW1dIHJlbGF0aXZlIGZsZXgtc2hyaW5rLTBcIlxuICAgID5cbiAgICAgIDxMaW5rXG4gICAgICAgIGhyZWY9e3Byb2R1Y3QubGlua31cbiAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgZ3JvdXAtaG92ZXIvcHJvZHVjdDpzaGFkb3ctMnhsIFwiXG4gICAgICA+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17cHJvZHVjdC50aHVtYm5haWx9XG4gICAgICAgICAgaGVpZ2h0PVwiNjAwXCJcbiAgICAgICAgICB3aWR0aD1cIjYwMFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIG9iamVjdC1sZWZ0LXRvcCBhYnNvbHV0ZSBoLWZ1bGwgdy1mdWxsIGluc2V0LTBcIlxuICAgICAgICAgIGFsdD17cHJvZHVjdC50aXRsZX1cbiAgICAgICAgLz5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBoLWZ1bGwgdy1mdWxsIG9wYWNpdHktMCBncm91cC1ob3Zlci9wcm9kdWN0Om9wYWNpdHktODAgYmctYmxhY2sgcG9pbnRlci1ldmVudHMtbm9uZVwiPjwvZGl2PlxuICAgICAgPGgyIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS00IGxlZnQtNCBvcGFjaXR5LTAgZ3JvdXAtaG92ZXIvcHJvZHVjdDpvcGFjaXR5LTEwMCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgIHtwcm9kdWN0LnRpdGxlfVxuICAgICAgPC9oMj5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwidXNlU2Nyb2xsIiwidXNlVHJhbnNmb3JtIiwidXNlU3ByaW5nIiwiSW1hZ2UiLCJMaW5rIiwiSGVyb1BhcmFsbGF4IiwicHJvZHVjdHMiLCJmaXJzdFJvdyIsInNsaWNlIiwic2Vjb25kUm93IiwidGhpcmRSb3ciLCJyZWYiLCJ1c2VSZWYiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJ0YXJnZXQiLCJvZmZzZXQiLCJzcHJpbmdDb25maWciLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiYm91bmNlIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVhSZXZlcnNlIiwicm90YXRlWCIsIm9wYWNpdHkiLCJyb3RhdGVaIiwidHJhbnNsYXRlWSIsImRpdiIsImNsYXNzTmFtZSIsIkhlYWRlciIsInN0eWxlIiwibWFwIiwicHJvZHVjdCIsIlByb2R1Y3RDYXJkIiwidHJhbnNsYXRlIiwidGl0bGUiLCJoMSIsImJyIiwicCIsIngiLCJ3aGlsZUhvdmVyIiwieSIsImhyZWYiLCJsaW5rIiwic3JjIiwidGh1bWJuYWlsIiwiaGVpZ2h0Iiwid2lkdGgiLCJhbHQiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/hero-parallax.tsx\n"));

/***/ })

});