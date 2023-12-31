/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/storage.ts":
/*!******************************!*\
  !*** ./src/utils/storage.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStoredCities: () => (/* binding */ getStoredCities),
/* harmony export */   getStoredOptions: () => (/* binding */ getStoredOptions),
/* harmony export */   setStoredCities: () => (/* binding */ setStoredCities),
/* harmony export */   setStoredOptions: () => (/* binding */ setStoredOptions)
/* harmony export */ });
function setStoredCities(cities) {
    const vals = {
        cities,
    };
    return new Promise((resolve) => {
        chrome.storage.local.set({
            cities: vals.cities,
        }, () => {
            resolve();
        });
    });
}
function getStoredCities() {
    const keys = ["cities"];
    return new Promise((resolve) => {
        chrome.storage.local.get(keys, (res) => {
            var _a;
            resolve((_a = res.cities) !== null && _a !== void 0 ? _a : []);
        });
    });
}
function setStoredOptions(options) {
    const vals = {
        options,
    };
    return new Promise((resolve) => {
        chrome.storage.local.set(vals, () => {
            resolve();
        });
    });
}
function getStoredOptions() {
    const keys = ["options"];
    return new Promise((resolve) => {
        chrome.storage.local.get(keys, (res) => {
            resolve(res.options);
        });
    });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/storage */ "./src/utils/storage.ts");

chrome.runtime.onInstalled.addListener(() => {
    (0,_utils_storage__WEBPACK_IMPORTED_MODULE_0__.setStoredCities)([]);
    (0,_utils_storage__WEBPACK_IMPORTED_MODULE_0__.setStoredOptions)({
        hasAutoOverlay: false,
        tempScale: "metric",
        homeCity: "",
    });
});

})();

/******/ })()
;
//# sourceMappingURL=background.js.map