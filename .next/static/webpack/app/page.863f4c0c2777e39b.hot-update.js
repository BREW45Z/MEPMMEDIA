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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: function() { return /* binding */ Header; },\n/* harmony export */   HeroParallax: function() { return /* binding */ HeroParallax; },\n/* harmony export */   ProductCard: function() { return /* binding */ ProductCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-spring.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ HeroParallax,Header,ProductCard auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst HeroParallax = (param)=>{\n    let { products } = param;\n    _s();\n    const firstRow = products.slice(0, 5);\n    const secondRow = products.slice(5, 10);\n    const thirdRow = products.slice(10, 15);\n    const ref = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)({\n        target: ref,\n        offset: [\n            \"start start\",\n            \"end start\"\n        ]\n    });\n    const springConfig = {\n        stiffness: 300,\n        damping: 30,\n        bounce: 100\n    };\n    const translateX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring)((0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0,\n        1000\n    ]), springConfig);\n    const translateXReverse = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring)((0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0,\n        -1000\n    ]), springConfig);\n    const rotateX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring)((0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform)(scrollYProgress, [\n        0,\n        0.2\n    ], [\n        15,\n        0\n    ]), springConfig);\n    const opacity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring)((0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform)(scrollYProgress, [\n        0,\n        0.2\n    ], [\n        0.2,\n        1\n    ]), springConfig);\n    const rotateZ = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring)((0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform)(scrollYProgress, [\n        0,\n        0.2\n    ], [\n        20,\n        0\n    ]), springConfig);\n    const translateY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring)((0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform)(scrollYProgress, [\n        0,\n        0.2\n    ], [\n        -700,\n        500\n    ]), springConfig);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        className: \"h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                style: {\n                    rotateX,\n                    rotateZ,\n                    translateY,\n                    opacity\n                },\n                className: \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                        className: \"flex flex-row-reverse space-x-reverse space-x-20 mb-20\",\n                        children: firstRow.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductCard, {\n                                product: product,\n                                translate: translateX\n                            }, product.title, false, {\n                                fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                        className: \"flex flex-row  mb-20 space-x-20 \",\n                        children: secondRow.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductCard, {\n                                product: product,\n                                translate: translateXReverse\n                            }, product.title, false, {\n                                fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                        className: \"flex flex-row-reverse space-x-reverse space-x-20\",\n                        children: thirdRow.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductCard, {\n                                product: product,\n                                translate: translateX\n                            }, product.title, false, {\n                                fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HeroParallax, \"R8/dTk9CmVkuZMulzDierWMPHkc=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useSpring\n    ];\n});\n_c = HeroParallax;\nconst Header = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl md:text-7xl font-bold dark:text-purple-900\",\n                    children: [\n                        \"A Top \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 15\n                        }, undefined),\n                        \"  Multimedia Agency\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"max-w-2xl text-base md:text-xl mt- dark:text-purple-900\",\n                    children: \"Our expertise lies in crafting tailored strategies that bridge brands with their precise target audience, fostering meaningful connections and driving impactful engagement. Through meticulous planning and execution, we ensure brands resonate effectively with their intended demographic, maximizing their reach and influence in the market      \"\n                }, void 0, false, {\n                    fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n            lineNumber: 107,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Header;\nconst ProductCard = (param)=>{\n    let { product, translate } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n        style: {\n            x: translate\n        },\n        whileHover: {\n            y: -20\n        },\n        className: \"group/product h-96 w-[30rem] relative flex-shrink-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: product.link,\n                className: \"block group-hover/product:shadow-2xl \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: product.thumbnail,\n                    height: \"600\",\n                    width: \"600\",\n                    className: \"object-cover object-left-top absolute h-full w-full inset-0\",\n                    alt: product.title\n                }, void 0, false, {\n                    fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                    lineNumber: 146,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none\"\n            }, void 0, false, {\n                fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                lineNumber: 154,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white\",\n                children: product.title\n            }, void 0, false, {\n                fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n                lineNumber: 155,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, product.title, true, {\n        fileName: \"/Users/bettycharles/Desktop/MEPMMEDIA/components/ui/hero-parallax.tsx\",\n        lineNumber: 132,\n        columnNumber: 5\n    }, undefined);\n};\n_c2 = ProductCard;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"HeroParallax\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvaGVyby1wYXJhbGxheC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMwQjtBQU9IO0FBQ1E7QUFDRjtBQUV0QixNQUFNTyxlQUFlO1FBQUMsRUFDM0JDLFFBQVEsRUFPVDs7SUFDQyxNQUFNQyxXQUFXRCxTQUFTRSxLQUFLLENBQUMsR0FBRztJQUNuQyxNQUFNQyxZQUFZSCxTQUFTRSxLQUFLLENBQUMsR0FBRztJQUNwQyxNQUFNRSxXQUFXSixTQUFTRSxLQUFLLENBQUMsSUFBSTtJQUNwQyxNQUFNRyxNQUFNYixtREFBWSxDQUFDO0lBQ3pCLE1BQU0sRUFBRWUsZUFBZSxFQUFFLEdBQUdiLHdEQUFTQSxDQUFDO1FBQ3BDYyxRQUFRSDtRQUNSSSxRQUFRO1lBQUM7WUFBZTtTQUFZO0lBQ3RDO0lBRUEsTUFBTUMsZUFBZTtRQUFFQyxXQUFXO1FBQUtDLFNBQVM7UUFBSUMsUUFBUTtJQUFJO0lBRWhFLE1BQU1DLGFBQWFsQix3REFBU0EsQ0FDMUJELDJEQUFZQSxDQUFDWSxpQkFBaUI7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQUc7S0FBSyxHQUMvQ0c7SUFFRixNQUFNSyxvQkFBb0JuQix3REFBU0EsQ0FDakNELDJEQUFZQSxDQUFDWSxpQkFBaUI7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQUcsQ0FBQztLQUFLLEdBQ2hERztJQUVGLE1BQU1NLFVBQVVwQix3REFBU0EsQ0FDdkJELDJEQUFZQSxDQUFDWSxpQkFBaUI7UUFBQztRQUFHO0tBQUksRUFBRTtRQUFDO1FBQUk7S0FBRSxHQUMvQ0c7SUFFRixNQUFNTyxVQUFVckIsd0RBQVNBLENBQ3ZCRCwyREFBWUEsQ0FBQ1ksaUJBQWlCO1FBQUM7UUFBRztLQUFJLEVBQUU7UUFBQztRQUFLO0tBQUUsR0FDaERHO0lBRUYsTUFBTVEsVUFBVXRCLHdEQUFTQSxDQUN2QkQsMkRBQVlBLENBQUNZLGlCQUFpQjtRQUFDO1FBQUc7S0FBSSxFQUFFO1FBQUM7UUFBSTtLQUFFLEdBQy9DRztJQUVGLE1BQU1TLGFBQWF2Qix3REFBU0EsQ0FDMUJELDJEQUFZQSxDQUFDWSxpQkFBaUI7UUFBQztRQUFHO0tBQUksRUFBRTtRQUFDLENBQUM7UUFBSztLQUFJLEdBQ25ERztJQUVGLHFCQUNFLDhEQUFDVTtRQUNDZixLQUFLQTtRQUNMZ0IsV0FBVTs7MEJBRVYsOERBQUNDOzs7OzswQkFDRCw4REFBQzdCLGlEQUFNQSxDQUFDMkIsR0FBRztnQkFDVEcsT0FBTztvQkFDTFA7b0JBQ0FFO29CQUNBQztvQkFDQUY7Z0JBQ0Y7Z0JBQ0FJLFdBQVU7O2tDQUVWLDhEQUFDNUIsaURBQU1BLENBQUMyQixHQUFHO3dCQUFDQyxXQUFVO2tDQUNuQnBCLFNBQVN1QixHQUFHLENBQUMsQ0FBQ0Msd0JBQ2IsOERBQUNDO2dDQUNDRCxTQUFTQTtnQ0FDVEUsV0FBV2I7K0JBQ05XLFFBQVFHLEtBQUs7Ozs7Ozs7Ozs7a0NBSXhCLDhEQUFDbkMsaURBQU1BLENBQUMyQixHQUFHO3dCQUFDQyxXQUFVO2tDQUNuQmxCLFVBQVVxQixHQUFHLENBQUMsQ0FBQ0Msd0JBQ2QsOERBQUNDO2dDQUNDRCxTQUFTQTtnQ0FDVEUsV0FBV1o7K0JBQ05VLFFBQVFHLEtBQUs7Ozs7Ozs7Ozs7a0NBSXhCLDhEQUFDbkMsaURBQU1BLENBQUMyQixHQUFHO3dCQUFDQyxXQUFVO2tDQUNuQmpCLFNBQVNvQixHQUFHLENBQUMsQ0FBQ0Msd0JBQ2IsOERBQUNDO2dDQUNDRCxTQUFTQTtnQ0FDVEUsV0FBV2I7K0JBQ05XLFFBQVFHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPaEMsRUFBRTtHQXpGVzdCOztRQWFpQkwsb0RBQVNBO1FBT2xCRSxvREFBU0E7UUFJRkEsb0RBQVNBO1FBSW5CQSxvREFBU0E7UUFJVEEsb0RBQVNBO1FBSVRBLG9EQUFTQTtRQUlOQSxvREFBU0E7OztLQXhDakJHO0FBMkZOLE1BQU11QixTQUFTO0lBQ3BCLHFCQUNFLDhEQUFDRjtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDs7OEJBQ0QsOERBQUNTO29CQUFHUixXQUFVOzt3QkFBc0Q7c0NBQzVELDhEQUFDUzs7Ozs7d0JBQUs7Ozs7Ozs7OEJBRWQsOERBQUNDO29CQUFFVixXQUFVOzhCQUEwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPN0UsRUFBRTtNQWRXQztBQWdCTixNQUFNSSxjQUFjO1FBQUMsRUFDMUJELE9BQU8sRUFDUEUsU0FBUyxFQVFWO0lBQ0MscUJBQ0UsOERBQUNsQyxpREFBTUEsQ0FBQzJCLEdBQUc7UUFDVEcsT0FBTztZQUNMUyxHQUFHTDtRQUNMO1FBQ0FNLFlBQVk7WUFDVkMsR0FBRyxDQUFDO1FBQ047UUFFQWIsV0FBVTs7MEJBRVYsOERBQUN2QixrREFBSUE7Z0JBQ0hxQyxNQUFNVixRQUFRVyxJQUFJO2dCQUNsQmYsV0FBVTswQkFFViw0RUFBQ3hCLG1EQUFLQTtvQkFDSndDLEtBQUtaLFFBQVFhLFNBQVM7b0JBQ3RCQyxRQUFPO29CQUNQQyxPQUFNO29CQUNObkIsV0FBVTtvQkFDVm9CLEtBQUtoQixRQUFRRyxLQUFLOzs7Ozs7Ozs7OzswQkFHdEIsOERBQUNSO2dCQUFJQyxXQUFVOzs7Ozs7MEJBQ2YsOERBQUNxQjtnQkFBR3JCLFdBQVU7MEJBQ1hJLFFBQVFHLEtBQUs7Ozs7Ozs7T0FqQlhILFFBQVFHLEtBQUs7Ozs7O0FBcUJ4QixFQUFFO01BeENXRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpL2hlcm8tcGFyYWxsYXgudHN4P2UyZGMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBtb3Rpb24sXG4gIHVzZVNjcm9sbCxcbiAgdXNlVHJhbnNmb3JtLFxuICB1c2VTcHJpbmcsXG4gIE1vdGlvblZhbHVlLFxufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBjb25zdCBIZXJvUGFyYWxsYXggPSAoe1xuICBwcm9kdWN0cyxcbn06IHtcbiAgcHJvZHVjdHM6IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGxpbms6IHN0cmluZztcbiAgICB0aHVtYm5haWw6IHN0cmluZztcbiAgfVtdO1xufSkgPT4ge1xuICBjb25zdCBmaXJzdFJvdyA9IHByb2R1Y3RzLnNsaWNlKDAsIDUpO1xuICBjb25zdCBzZWNvbmRSb3cgPSBwcm9kdWN0cy5zbGljZSg1LCAxMCk7XG4gIGNvbnN0IHRoaXJkUm93ID0gcHJvZHVjdHMuc2xpY2UoMTAsIDE1KTtcbiAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlU2Nyb2xsKHtcbiAgICB0YXJnZXQ6IHJlZixcbiAgICBvZmZzZXQ6IFtcInN0YXJ0IHN0YXJ0XCIsIFwiZW5kIHN0YXJ0XCJdLFxuICB9KTtcblxuICBjb25zdCBzcHJpbmdDb25maWcgPSB7IHN0aWZmbmVzczogMzAwLCBkYW1waW5nOiAzMCwgYm91bmNlOiAxMDAgfTtcblxuICBjb25zdCB0cmFuc2xhdGVYID0gdXNlU3ByaW5nKFxuICAgIHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAxXSwgWzAsIDEwMDBdKSxcbiAgICBzcHJpbmdDb25maWdcbiAgKTtcbiAgY29uc3QgdHJhbnNsYXRlWFJldmVyc2UgPSB1c2VTcHJpbmcoXG4gICAgdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDFdLCBbMCwgLTEwMDBdKSxcbiAgICBzcHJpbmdDb25maWdcbiAgKTtcbiAgY29uc3Qgcm90YXRlWCA9IHVzZVNwcmluZyhcbiAgICB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4yXSwgWzE1LCAwXSksXG4gICAgc3ByaW5nQ29uZmlnXG4gICk7XG4gIGNvbnN0IG9wYWNpdHkgPSB1c2VTcHJpbmcoXG4gICAgdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMl0sIFswLjIsIDFdKSxcbiAgICBzcHJpbmdDb25maWdcbiAgKTtcbiAgY29uc3Qgcm90YXRlWiA9IHVzZVNwcmluZyhcbiAgICB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4yXSwgWzIwLCAwXSksXG4gICAgc3ByaW5nQ29uZmlnXG4gICk7XG4gIGNvbnN0IHRyYW5zbGF0ZVkgPSB1c2VTcHJpbmcoXG4gICAgdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMl0sIFstNzAwLCA1MDBdKSxcbiAgICBzcHJpbmdDb25maWdcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICByZWY9e3JlZn1cbiAgICAgIGNsYXNzTmFtZT1cImgtWzMwMHZoXSBweS00MCBvdmVyZmxvdy1oaWRkZW4gIGFudGlhbGlhc2VkIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgc2VsZi1hdXRvIFtwZXJzcGVjdGl2ZToxMDAwcHhdIFt0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2RdXCJcbiAgICA+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHJvdGF0ZVgsXG4gICAgICAgICAgcm90YXRlWixcbiAgICAgICAgICB0cmFuc2xhdGVZLFxuICAgICAgICAgIG9wYWNpdHksXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICA+XG4gICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3ctcmV2ZXJzZSBzcGFjZS14LXJldmVyc2Ugc3BhY2UteC0yMCBtYi0yMFwiPlxuICAgICAgICAgIHtmaXJzdFJvdy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICAgIDxQcm9kdWN0Q2FyZFxuICAgICAgICAgICAgICBwcm9kdWN0PXtwcm9kdWN0fVxuICAgICAgICAgICAgICB0cmFuc2xhdGU9e3RyYW5zbGF0ZVh9XG4gICAgICAgICAgICAgIGtleT17cHJvZHVjdC50aXRsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyAgbWItMjAgc3BhY2UteC0yMCBcIj5cbiAgICAgICAgICB7c2Vjb25kUm93Lm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgPFByb2R1Y3RDYXJkXG4gICAgICAgICAgICAgIHByb2R1Y3Q9e3Byb2R1Y3R9XG4gICAgICAgICAgICAgIHRyYW5zbGF0ZT17dHJhbnNsYXRlWFJldmVyc2V9XG4gICAgICAgICAgICAgIGtleT17cHJvZHVjdC50aXRsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdy1yZXZlcnNlIHNwYWNlLXgtcmV2ZXJzZSBzcGFjZS14LTIwXCI+XG4gICAgICAgICAge3RoaXJkUm93Lm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgPFByb2R1Y3RDYXJkXG4gICAgICAgICAgICAgIHByb2R1Y3Q9e3Byb2R1Y3R9XG4gICAgICAgICAgICAgIHRyYW5zbGF0ZT17dHJhbnNsYXRlWH1cbiAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCByZWxhdGl2ZSBteC1hdXRvIHB5LTIwIG1kOnB5LTQwIHB4LTQgdy1mdWxsICBsZWZ0LTAgdG9wLTBcIj5cbiAgICAgIDxkaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWQ6dGV4dC03eGwgZm9udC1ib2xkIGRhcms6dGV4dC1wdXJwbGUtOTAwXCI+XG4gICAgICAgIEEgVG9wIDxiciAvPiAgTXVsdGltZWRpYSBBZ2VuY3lcbiAgICAgIDwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYXgtdy0yeGwgdGV4dC1iYXNlIG1kOnRleHQteGwgbXQtIGRhcms6dGV4dC1wdXJwbGUtOTAwXCI+XG4gICAgICBPdXIgZXhwZXJ0aXNlIGxpZXMgaW4gY3JhZnRpbmcgdGFpbG9yZWQgc3RyYXRlZ2llcyB0aGF0IGJyaWRnZSBicmFuZHMgd2l0aCB0aGVpciBwcmVjaXNlIHRhcmdldCBhdWRpZW5jZSwgZm9zdGVyaW5nIG1lYW5pbmdmdWwgY29ubmVjdGlvbnMgYW5kIGRyaXZpbmcgaW1wYWN0ZnVsIGVuZ2FnZW1lbnQuIFRocm91Z2ggbWV0aWN1bG91cyBwbGFubmluZyBhbmQgZXhlY3V0aW9uLCB3ZSBlbnN1cmUgYnJhbmRzIHJlc29uYXRlIGVmZmVjdGl2ZWx5IHdpdGggdGhlaXIgaW50ZW5kZWRcbiAgICAgICBkZW1vZ3JhcGhpYywgbWF4aW1pemluZyB0aGVpciByZWFjaCBhbmQgaW5mbHVlbmNlIGluIHRoZSBtYXJrZXQgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFByb2R1Y3RDYXJkID0gKHtcbiAgcHJvZHVjdCxcbiAgdHJhbnNsYXRlLFxufToge1xuICBwcm9kdWN0OiB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBsaW5rOiBzdHJpbmc7XG4gICAgdGh1bWJuYWlsOiBzdHJpbmc7XG4gIH07XG4gIHRyYW5zbGF0ZTogTW90aW9uVmFsdWU8bnVtYmVyPjtcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgeDogdHJhbnNsYXRlLFxuICAgICAgfX1cbiAgICAgIHdoaWxlSG92ZXI9e3tcbiAgICAgICAgeTogLTIwLFxuICAgICAgfX1cbiAgICAgIGtleT17cHJvZHVjdC50aXRsZX1cbiAgICAgIGNsYXNzTmFtZT1cImdyb3VwL3Byb2R1Y3QgaC05NiB3LVszMHJlbV0gcmVsYXRpdmUgZmxleC1zaHJpbmstMFwiXG4gICAgPlxuICAgICAgPExpbmtcbiAgICAgICAgaHJlZj17cHJvZHVjdC5saW5rfVxuICAgICAgICBjbGFzc05hbWU9XCJibG9jayBncm91cC1ob3Zlci9wcm9kdWN0OnNoYWRvdy0yeGwgXCJcbiAgICAgID5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPXtwcm9kdWN0LnRodW1ibmFpbH1cbiAgICAgICAgICBoZWlnaHQ9XCI2MDBcIlxuICAgICAgICAgIHdpZHRoPVwiNjAwXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgb2JqZWN0LWxlZnQtdG9wIGFic29sdXRlIGgtZnVsbCB3LWZ1bGwgaW5zZXQtMFwiXG4gICAgICAgICAgYWx0PXtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAvPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGgtZnVsbCB3LWZ1bGwgb3BhY2l0eS0wIGdyb3VwLWhvdmVyL3Byb2R1Y3Q6b3BhY2l0eS04MCBiZy1ibGFjayBwb2ludGVyLWV2ZW50cy1ub25lXCI+PC9kaXY+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTQgbGVmdC00IG9wYWNpdHktMCBncm91cC1ob3Zlci9wcm9kdWN0Om9wYWNpdHktMTAwIHRleHQtd2hpdGVcIj5cbiAgICAgICAge3Byb2R1Y3QudGl0bGV9XG4gICAgICA8L2gyPlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJ1c2VTY3JvbGwiLCJ1c2VUcmFuc2Zvcm0iLCJ1c2VTcHJpbmciLCJJbWFnZSIsIkxpbmsiLCJIZXJvUGFyYWxsYXgiLCJwcm9kdWN0cyIsImZpcnN0Um93Iiwic2xpY2UiLCJzZWNvbmRSb3ciLCJ0aGlyZFJvdyIsInJlZiIsInVzZVJlZiIsInNjcm9sbFlQcm9ncmVzcyIsInRhcmdldCIsIm9mZnNldCIsInNwcmluZ0NvbmZpZyIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJib3VuY2UiLCJ0cmFuc2xhdGVYIiwidHJhbnNsYXRlWFJldmVyc2UiLCJyb3RhdGVYIiwib3BhY2l0eSIsInJvdGF0ZVoiLCJ0cmFuc2xhdGVZIiwiZGl2IiwiY2xhc3NOYW1lIiwiSGVhZGVyIiwic3R5bGUiLCJtYXAiLCJwcm9kdWN0IiwiUHJvZHVjdENhcmQiLCJ0cmFuc2xhdGUiLCJ0aXRsZSIsImgxIiwiYnIiLCJwIiwieCIsIndoaWxlSG92ZXIiLCJ5IiwiaHJlZiIsImxpbmsiLCJzcmMiLCJ0aHVtYm5haWwiLCJoZWlnaHQiLCJ3aWR0aCIsImFsdCIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/hero-parallax.tsx\n"));

/***/ })

});