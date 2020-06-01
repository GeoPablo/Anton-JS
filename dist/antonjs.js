(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("AntonJS", [], factory);
	else if(typeof exports === 'object')
		exports["AntonJS"] = factory();
	else
		root["AntonJS"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/antonjs.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/@types/enums/errors.enum.ts":
/*!*****************************************!*\
  !*** ./src/@types/enums/errors.enum.ts ***!
  \*****************************************/
/*! exports provided: ErrorMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorMessages\", function() { return ErrorMessages; });\n/**\r\n * File: errors.enum.ts\r\n * Project: antonjs\r\n * Version:0.0.1\r\n * Created Date: Thursday, May 28th 2020, 11:40:51 pm\r\n * Author: Georgian Stan (georgian.stan8@gmail.com)\r\n * -----\r\n * Last Modified: Friday, 29th May 2020 7:56:00 am\r\n * Modified By: Georgian Stan (georgian.stan8@gmail.com>)\r\n * ------------------------------------\r\n */\nvar ErrorMessages;\n\n(function (ErrorMessages) {\n  ErrorMessages[\"IMAGE_UNREACHABLE\"] = \"Can't access the image from this url\";\n  ErrorMessages[\"BAD_PARAMS\"] = \"The parameters provided are not sufficient\";\n})(ErrorMessages || (ErrorMessages = {}));\n\n//# sourceURL=webpack://AntonJS/./src/@types/enums/errors.enum.ts?");

/***/ }),

/***/ "./src/@types/enums/index.ts":
/*!***********************************!*\
  !*** ./src/@types/enums/index.ts ***!
  \***********************************/
/*! exports provided: ErrorMessages, PixelsPickupStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _errors_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors.enum */ \"./src/@types/enums/errors.enum.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ErrorMessages\", function() { return _errors_enum__WEBPACK_IMPORTED_MODULE_0__[\"ErrorMessages\"]; });\n\n/* harmony import */ var _pixels_pickup_strategy_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pixels-pickup-strategy.enum */ \"./src/@types/enums/pixels-pickup-strategy.enum.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PixelsPickupStrategy\", function() { return _pixels_pickup_strategy_enum__WEBPACK_IMPORTED_MODULE_1__[\"PixelsPickupStrategy\"]; });\n\n/**\r\n * File: index.ts\r\n * Project: antonjs\r\n * Version:0.0.1\r\n * Created Date: Thursday, May 28th 2020, 11:42:31 pm\r\n * Author: Georgian Stan (georgian.stan8@gmail.com)\r\n * -----\r\n * Last Modified: Monday, 1st June 2020 4:28:21 pm\r\n * Modified By: Georgian Stan (georgian.stan8@gmail.com>)\r\n * ------------------------------------\r\n */\n\n\n\n//# sourceURL=webpack://AntonJS/./src/@types/enums/index.ts?");

/***/ }),

/***/ "./src/@types/enums/pixels-pickup-strategy.enum.ts":
/*!*********************************************************!*\
  !*** ./src/@types/enums/pixels-pickup-strategy.enum.ts ***!
  \*********************************************************/
/*! exports provided: PixelsPickupStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PixelsPickupStrategy\", function() { return PixelsPickupStrategy; });\n/**\r\n * File: pixels-strategy.enum.ts\r\n * Project: antonjs\r\n * Version:0.0.1\r\n * Created Date: Monday, June 1st 2020, 4:25:43 pm\r\n * Author: Georgian Stan (georgian.stan8@gmail.com)\r\n * -----\r\n * Last Modified: Monday, 1st June 2020 4:28:14 pm\r\n * Modified By: Georgian Stan (georgian.stan8@gmail.com>)\r\n * ------------------------------------\r\n */\nvar PixelsPickupStrategy;\n\n(function (PixelsPickupStrategy) {\n  PixelsPickupStrategy[PixelsPickupStrategy[\"XsInTheCorner\"] = 0] = \"XsInTheCorner\";\n})(PixelsPickupStrategy || (PixelsPickupStrategy = {}));\n\n//# sourceURL=webpack://AntonJS/./src/@types/enums/pixels-pickup-strategy.enum.ts?");

/***/ }),

/***/ "./src/@types/index.ts":
/*!*****************************!*\
  !*** ./src/@types/index.ts ***!
  \*****************************/
/*! exports provided: ErrorMessages, PixelsPickupStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ \"./src/@types/enums/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ErrorMessages\", function() { return _enums__WEBPACK_IMPORTED_MODULE_0__[\"ErrorMessages\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PixelsPickupStrategy\", function() { return _enums__WEBPACK_IMPORTED_MODULE_0__[\"PixelsPickupStrategy\"]; });\n\n/**\r\n * File: index.ts\r\n * Project: antonjs\r\n * Version:0.0.1\r\n * Created Date: Thursday, May 28th 2020, 7:16:36 pm\r\n * Author: Georgian Stan (georgian.stan8@gmail.com)\r\n * -----\r\n * Last Modified: Friday, 29th May 2020 10:41:20 pm\r\n * Modified By: Georgian Stan (georgian.stan8@gmail.com>)\r\n * ------------------------------------\r\n */\n// export * from './interfaces';\n\n\n//# sourceURL=webpack://AntonJS/./src/@types/index.ts?");

/***/ }),

/***/ "./src/antonjs.ts":
/*!************************!*\
  !*** ./src/antonjs.ts ***!
  \************************/
/*! exports provided: calculateImageIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateImageIndex\", function() { return calculateImageIndex; });\n/* harmony import */ var _image_operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-operations */ \"./src/image-operations/index.ts\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./@types */ \"./src/@types/index.ts\");\n/* harmony import */ var _image_operations_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-operations/@types */ \"./src/image-operations/@types/index.ts\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ \"./src/util/index.ts\");\n/**\r\n * File: antonjs.ts\r\n * Project: antonjs\r\n * Version:0.0.1\r\n * Created Date: Thursday, May 28th 2020, 7:04:51 pm\r\n * Author: Georgian Stan (georgian.stan8@gmail.com)\r\n * -----\r\n * Last Modified: Monday, 1st June 2020 5:15:50 pm\r\n * Modified By: Georgian Stan (georgian.stan8@gmail.com>)\r\n * ------------------------------------\r\n */\nvar __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\nvar __generator = undefined && undefined.__generator || function (thisArg, body) {\n  var _ = {\n    label: 0,\n    sent: function () {\n      if (t[0] & 1) throw t[1];\n      return t[1];\n    },\n    trys: [],\n    ops: []\n  },\n      f,\n      y,\n      t,\n      g;\n  return g = {\n    next: verb(0),\n    \"throw\": verb(1),\n    \"return\": verb(2)\n  }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function () {\n    return this;\n  }), g;\n\n  function verb(n) {\n    return function (v) {\n      return step([n, v]);\n    };\n  }\n\n  function step(op) {\n    if (f) throw new TypeError(\"Generator is already executing.\");\n\n    while (_) try {\n      if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n      if (y = 0, t) op = [op[0] & 2, t.value];\n\n      switch (op[0]) {\n        case 0:\n        case 1:\n          t = op;\n          break;\n\n        case 4:\n          _.label++;\n          return {\n            value: op[1],\n            done: false\n          };\n\n        case 5:\n          _.label++;\n          y = op[1];\n          op = [0];\n          continue;\n\n        case 7:\n          op = _.ops.pop();\n\n          _.trys.pop();\n\n          continue;\n\n        default:\n          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {\n            _ = 0;\n            continue;\n          }\n\n          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {\n            _.label = op[1];\n            break;\n          }\n\n          if (op[0] === 6 && _.label < t[1]) {\n            _.label = t[1];\n            t = op;\n            break;\n          }\n\n          if (t && _.label < t[2]) {\n            _.label = t[2];\n\n            _.ops.push(op);\n\n            break;\n          }\n\n          if (t[2]) _.ops.pop();\n\n          _.trys.pop();\n\n          continue;\n      }\n\n      op = body.call(thisArg, _);\n    } catch (e) {\n      op = [6, e];\n      y = 0;\n    } finally {\n      f = t = 0;\n    }\n\n    if (op[0] & 5) throw op[1];\n    return {\n      value: op[0] ? op[1] : void 0,\n      done: true\n    };\n  }\n};\n\nvar __spreadArrays = undefined && undefined.__spreadArrays || function () {\n  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n\n  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];\n\n  return r;\n};\n/**\r\n * * Helpres\r\n */\n\n\n\n/**\r\n * * Types\r\n */\n\n\n\n\n/**\r\n * * Get imageData\r\n * @param imageUrl - url of the image\r\n */\n\nvar getImageData = function (imageUrl) {\n  return new Promise(function (resolve, reject) {\n    return __awaiter(void 0, void 0, void 0, function () {\n      var canvas, ctx, img;\n      return __generator(this, function (_a) {\n        canvas = document.createElement('canvas');\n        ctx = canvas.getContext('2d');\n        img = new Image();\n        img.crossOrigin = 'anonymous';\n        img.src = imageUrl;\n\n        img.onload = function () {\n          try {\n            ctx.drawImage(img, 0, 0);\n            var data = ctx.getImageData(0, 0, img.naturalWidth, img.naturalHeight);\n            resolve(data);\n          } catch (err) {\n            reject(err);\n          }\n        };\n\n        img.onerror = function (err) {\n          reject(err);\n        };\n\n        return [2\n        /*return*/\n        ];\n      });\n    });\n  });\n};\n/**\r\n * * Get all the required pixels\r\n * @param imageData\r\n */\n\n\nvar getRequiredPixels = function (imageData) {\n  var tr = Object(_image_operations__WEBPACK_IMPORTED_MODULE_0__[\"getPixelsIndexFromDiagonal\"])(_image_operations_types__WEBPACK_IMPORTED_MODULE_2__[\"DiagonalOfTheImage\"].TR, imageData);\n  var tl = Object(_image_operations__WEBPACK_IMPORTED_MODULE_0__[\"getPixelsIndexFromDiagonal\"])(_image_operations_types__WEBPACK_IMPORTED_MODULE_2__[\"DiagonalOfTheImage\"].TL, imageData);\n  var br = Object(_image_operations__WEBPACK_IMPORTED_MODULE_0__[\"getPixelsIndexFromDiagonal\"])(_image_operations_types__WEBPACK_IMPORTED_MODULE_2__[\"DiagonalOfTheImage\"].BR, imageData);\n  var bl = Object(_image_operations__WEBPACK_IMPORTED_MODULE_0__[\"getPixelsIndexFromDiagonal\"])(_image_operations_types__WEBPACK_IMPORTED_MODULE_2__[\"DiagonalOfTheImage\"].BL, imageData);\n  return __spreadArrays(tr, tl, br, bl);\n};\n/**\r\n * * Formula implementation color -> index(number)\r\n */\n\n\nvar formula = function (hslValue) {\n  var h = hslValue.h,\n      s = hslValue.s,\n      l = hslValue.l;\n  var definerValue = 1;\n  return h * definerValue + s + l;\n};\n\nvar formulaRgba = function (hslValue) {\n  var r = hslValue.r,\n      g = hslValue.g,\n      b = hslValue.b;\n  var definerValue = 1;\n  return r * definerValue + g + b;\n};\n/**\r\n * * Calculate the index of the image\r\n * @param imageUrl\r\n * @param pixelsStrategy - what strategy to use to get the pixels\r\n */\n\n\nvar calculateImageIndex = function (imageUrl, pixelsStrategy) {\n  return __awaiter(void 0, void 0, void 0, function () {\n    var imageData, requiredPixels, pixelsRgba, meanRgbaValue, hslFromRgb, err_1;\n    return __generator(this, function (_a) {\n      switch (_a.label) {\n        case 0:\n          _a.trys.push([0, 2,, 3]);\n\n          return [4\n          /*yield*/\n          , getImageData(imageUrl)];\n\n        case 1:\n          imageData = _a.sent();\n          requiredPixels = getRequiredPixels(imageData);\n          pixelsRgba = Object(_image_operations__WEBPACK_IMPORTED_MODULE_0__[\"getRgbaForPixels\"])(requiredPixels, imageData);\n          meanRgbaValue = Object(_image_operations__WEBPACK_IMPORTED_MODULE_0__[\"getVibrantRgba\"])(pixelsRgba);\n          hslFromRgb = Object(_util__WEBPACK_IMPORTED_MODULE_3__[\"rgbToHsl\"])(meanRgbaValue);\n          console.log(hslFromRgb); // const index: number = formula(hslFromRgb);\n          // const index: number = formulaRgba(meanRgbaValue);\n          //@ts-ignore\n\n          return [2\n          /*return*/\n          , {\n            imageIndex: Math.round(hslFromRgb.h),\n            color: meanRgbaValue\n          }];\n\n        case 2:\n          err_1 = _a.sent();\n          throw new Error(_types__WEBPACK_IMPORTED_MODULE_1__[\"ErrorMessages\"].IMAGE_UNREACHABLE + ' ' + imageUrl);\n\n        case 3:\n          return [2\n          /*return*/\n          ];\n      }\n    });\n  });\n};\n\n\n\n//# sourceURL=webpack://AntonJS/./src/antonjs.ts?");

/***/ }),

/***/ "./src/image-operations/@types/enum/index.ts":
/*!***************************************************!*\
  !*** ./src/image-operations/@types/enum/index.ts ***!
  \***************************************************/
/*! exports provided: DiagonalOfTheImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DiagonalOfTheImage\", function() { return DiagonalOfTheImage; });\n/**\r\n * File: index.ts\r\n * Project: antonjs\r\n * Version:0.0.1\r\n * Created Date: Friday, May 29th 2020, 7:51:38 am\r\n * Author: Georgian Stan (georgian.stan8@gmail.com)\r\n * -----\r\n * Last Modified: Friday, 29th May 2020 8:03:29 am\r\n * Modified By: Georgian Stan (georgian.stan8@gmail.com>)\r\n * ------------------------------------\r\n */\n// * 4 diagonals, because images are non-square matrices\nvar DiagonalOfTheImage;\n\n(function (DiagonalOfTheImage) {\n  DiagonalOfTheImage[\"TR\"] = \"from-top-right-corner\";\n  DiagonalOfTheImage[\"TL\"] = \"from-top-left-corner\";\n  DiagonalOfTheImage[\"BR\"] = \"from-bottom-right-corner\";\n  DiagonalOfTheImage[\"BL\"] = \"from-bottom-left-corner\";\n})(DiagonalOfTheImage || (DiagonalOfTheImage = {}));\n\n//# sourceURL=webpack://AntonJS/./src/image-operations/@types/enum/index.ts?");

/***/ }),

/***/ "./src/image-operations/@types/index.ts":
/*!**********************************************!*\
  !*** ./src/image-operations/@types/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enum */ \"./src/image-operations/@types/enum/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DiagonalOfTheImage\", function() { return _enum__WEBPACK_IMPORTED_MODULE_0__[\"DiagonalOfTheImage\"]; });\n\n/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface */ \"./src/image-operations/@types/interface/index.ts\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _interface__WEBPACK_IMPORTED_MODULE_1__) if([\"DiagonalOfTheImage\",\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _interface__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/**\r\n * File: index.ts\r\n * Project: antonjs\r\n * Version:0.0.1\r\n * Created Date: Friday, May 29th 2020, 7:48:13 am\r\n * Author: Georgian Stan (georgian.stan8@gmail.com)\r\n * -----\r\n * Last Modified: Friday, 29th May 2020 3:46:13 pm\r\n * Modified By: Georgian Stan (georgian.stan8@gmail.com>)\r\n * ------------------------------------\r\n */\n\n\n\n//# sourceURL=webpack://AntonJS/./src/image-operations/@types/index.ts?");

/***/ }),

/***/ "./src/image-operations/@types/interface/index.ts":
/*!********************************************************!*\
  !*** ./src/image-operations/@types/interface/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pixels_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pixels.interface */ \"./src/image-operations/@types/interface/pixels.interface.ts\");\n/* harmony import */ var _pixels_interface__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pixels_interface__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _pixels_interface__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _pixels_interface__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/**\r\n * File: index.ts\r\n * Project: antonjs\r\n * Version:0.0.1\r\n * Created Date: Friday, May 29th 2020, 3:46:23 pm\r\n * Author: Georgian Stan (georgian.stan8@gmail.com)\r\n * -----\r\n * Last Modified: Friday, 29th May 2020 3:46:31 pm\r\n * Modified By: Georgian Stan (georgian.stan8@gmail.com>)\r\n * ------------------------------------\r\n */\n\n\n//# sourceURL=webpack://AntonJS/./src/image-operations/@types/interface/index.ts?");

/***/ }),

/***/ "./src/image-operations/@types/interface/pixels.interface.ts":
/*!*******************************************************************!*\
  !*** ./src/image-operations/@types/interface/pixels.interface.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * File: pixels.interface.ts\r\n * Project: antonjs\r\n * Version:0.0.1\r\n * Created Date: Friday, May 29th 2020, 3:45:09 pm\r\n * Author: Georgian Stan (georgian.stan8@gmail.com)\r\n * -----\r\n * Last Modified: Friday, 29th May 2020 8:25:04 pm\r\n * Modified By: Georgian Stan (georgian.stan8@gmail.com>)\r\n * ------------------------------------\r\n */\n\n//# sourceURL=webpack://AntonJS/./src/image-operations/@types/interface/pixels.interface.ts?");

/***/ }),

/***/ "./src/image-operations/index.ts":
/*!***************************************!*\
  !*** ./src/image-operations/index.ts ***!
  \***************************************/
/*! exports provided: getPixelsIndexFromDiagonal, getRgbaForPixels, getMeanRgba, getVibrantRgba */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPixelsIndexFromDiagonal\", function() { return getPixelsIndexFromDiagonal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRgbaForPixels\", function() { return getRgbaForPixels; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMeanRgba\", function() { return getMeanRgba; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getVibrantRgba\", function() { return getVibrantRgba; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./@types */ \"./src/image-operations/@types/index.ts\");\n/**\r\n * File: index.ts\r\n * Project: antonjs\r\n * Version:0.0.1\r\n * Created Date: Friday, May 29th 2020, 7:43:40 am\r\n * Author: Georgian Stan (georgian.stan8@gmail.com)\r\n * -----\r\n * Last Modified: Monday, 1st June 2020 4:21:47 pm\r\n * Modified By: Georgian Stan (georgian.stan8@gmail.com>)\r\n * ------------------------------------\r\n */\n\n/**\r\n * * Each pixel is 4 units long: r,g,b,a\r\n * @param pixelIndex - pixel index\r\n */\n//\n\nvar getPixelIndexInImageData = function (pixelIndex) {\n  return pixelIndex * 4;\n};\n/**\r\n * * Return am array with the index of the desired pixels\r\n * @param diagonal - one of the 4 diagonals of a image\r\n * @param imageData - data about the image\r\n * @param offest - from how many in how many pixels to count\r\n */\n\n\nvar getPixelsIndexFromDiagonal = function (diagonal, imageData, offset) {\n  if (offset === void 0) {\n    offset = 1;\n  }\n\n  var lineLength = Math.min(imageData.height, imageData.width);\n  var pixels = [];\n\n  switch (diagonal) {\n    case _types__WEBPACK_IMPORTED_MODULE_0__[\"DiagonalOfTheImage\"].TL:\n      {\n        for (var i = 0; i < lineLength; i += offset) {\n          pixels.push(i * imageData.width + i);\n        }\n\n        break;\n      }\n\n    case _types__WEBPACK_IMPORTED_MODULE_0__[\"DiagonalOfTheImage\"].TR:\n      {\n        for (var i = 1; i <= lineLength; i += offset) {\n          pixels.push((imageData.width - 1) * i);\n        }\n\n        break;\n      }\n\n    case _types__WEBPACK_IMPORTED_MODULE_0__[\"DiagonalOfTheImage\"].BL:\n      {\n        for (var i = 0; i < lineLength; i += offset) {\n          pixels.push((imageData.height - 1 - i) * imageData.width + i);\n        }\n\n        break;\n      }\n\n    case _types__WEBPACK_IMPORTED_MODULE_0__[\"DiagonalOfTheImage\"].BR:\n      {\n        for (var i = 0; i < lineLength; i += offset) {\n          pixels.push((imageData.height - i) * imageData.width - i - 1);\n        }\n\n        break;\n      }\n  }\n\n  return pixels;\n};\n/**\r\n * * Get {r,g,b,a} values as object for certain positions\r\n * @param imageData - data about the image\r\n * @param pixelsIndex - array with the position of the desired pixels\r\n */\n\n\nvar getRgbaForPixels = function (pixelsIndex, imageData) {\n  var output = {};\n  var pixelsAsPairOf4 = Array.from(imageData.data);\n  pixelsIndex.forEach(function (pixelIndex) {\n    var pixelIndexInImageData = getPixelIndexInImageData(pixelIndex); // ? Each pixel is 4 units long: r,g,b,a\n\n    output[pixelIndex] = {\n      r: pixelsAsPairOf4[pixelIndexInImageData],\n      g: pixelsAsPairOf4[pixelIndexInImageData + 1],\n      b: pixelsAsPairOf4[pixelIndexInImageData + 2],\n      a: pixelsAsPairOf4[pixelIndexInImageData + 3]\n    };\n  });\n  return output;\n};\n/**\r\n * * Get the mean rgba value from multiple pixels\r\n * @param rgbaValues - pixels index with their rga values\r\n */\n\n\nvar getMeanRgba = function (rgbaValues) {\n  var totalRed = 0;\n  var totalGreen = 0;\n  var totalBlack = 0;\n  var totalAplha = 0;\n  var pixelsNum = Object.keys(rgbaValues).length;\n  Object.keys(rgbaValues).forEach(function (pixelIndex) {\n    totalRed += rgbaValues[pixelIndex].r;\n    totalGreen += rgbaValues[pixelIndex].g;\n    totalBlack += rgbaValues[pixelIndex].b;\n    totalAplha += rgbaValues[pixelIndex].a;\n  });\n  return {\n    r: Math.floor(totalRed / pixelsNum),\n    g: Math.floor(totalGreen / pixelsNum),\n    b: Math.floor(totalBlack / pixelsNum),\n    a: Math.floor(totalAplha / pixelsNum)\n  };\n};\n/**\r\n * * Get the vibrant rgba value from multiple pixels\r\n * * higher red, higher green ...\r\n * @param rgbaValues - pixels index with their rga values\r\n */\n\n\nvar getVibrantRgba = function (rgbaValues) {\n  var min = 0;\n  var output = {\n    r: min,\n    g: min,\n    b: min,\n    a: min\n  };\n  Object.keys(rgbaValues).forEach(function (pixelIndex) {\n    var _a = rgbaValues[pixelIndex],\n        r = _a.r,\n        g = _a.g,\n        b = _a.b,\n        a = _a.a;\n    output.r = r > output.r ? r : output.r;\n    output.g = g > output.g ? g : output.g;\n    output.b = b > output.b ? b : output.b;\n    output.a = a > output.a ? a : output.a;\n  });\n  return output;\n};\n\n\n\n//# sourceURL=webpack://AntonJS/./src/image-operations/index.ts?");

/***/ }),

/***/ "./src/util/index.ts":
/*!***************************!*\
  !*** ./src/util/index.ts ***!
  \***************************/
/*! exports provided: rgbToHsl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rgbToHsl\", function() { return rgbToHsl; });\n/**\r\n * File: index.ts\r\n * Project: antonjs\r\n * Version:0.0.1\r\n * Created Date: Friday, May 29th 2020, 7:44:27 am\r\n * Author: Georgian Stan (georgian.stan8@gmail.com)\r\n * -----\r\n * Last Modified: Friday, 29th May 2020 11:52:23 pm\r\n * Modified By: Georgian Stan (georgian.stan8@gmail.com>)\r\n * ------------------------------------\r\n */\n\n/* *\r\n * Converts an RGB color value to HSL. Conversion formula\r\n * adapted from http://en.wikipedia.org/wiki/HSL_color_space.\r\n * Assumes r, g, and b are contained in the set [0, 255] and\r\n * returns h, s, and l in the set [360,100,100].\r\n *\r\n * @param   Number  r       The red color value\r\n * @param   Number  g       The green color value\r\n * @param   Number  b       The blue color value\r\n * @return  Array           The HSL representation\r\n */\nvar rgbToHsl = function (rgb) {\n  var r = rgb.r,\n      g = rgb.g,\n      b = rgb.b;\n  r /= 255, g /= 255, b /= 255;\n  var max = Math.max(r, g, b),\n      min = Math.min(r, g, b);\n  var h,\n      s,\n      l = (max + min) / 2;\n\n  if (max == min) {\n    h = s = 0; // achromatic\n  } else {\n    var d = max - min;\n    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);\n\n    switch (max) {\n      case r:\n        h = (g - b) / d + (g < b ? 6 : 0);\n        break;\n\n      case g:\n        h = (b - r) / d + 2;\n        break;\n\n      case b:\n        h = (r - g) / d + 4;\n        break;\n    }\n\n    h /= 6;\n  }\n\n  return {\n    h: h * 60,\n    s: s * 100,\n    l: l * 100\n  };\n};\n\n\n\n//# sourceURL=webpack://AntonJS/./src/util/index.ts?");

/***/ })

/******/ });
});