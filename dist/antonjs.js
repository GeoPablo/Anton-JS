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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorMessages\", function() { return ErrorMessages; });\n/**\r\n * File: errors.enum.ts\r\n * Project: antonjs\r\n * Version:0.0.1\r\n * Created Date: Thursday, May 28th 2020, 11:40:51 pm\r\n * Author: Georgian Stan (georgian.stan8@gmail.com)\r\n * -----\r\n * Last Modified: Thursday, 28th May 2020 11:42:23 pm\r\n * Modified By: Georgian Stan (georgian.stan8@gmail.com>)\r\n * ------------------------------------\r\n */\nvar ErrorMessages;\n\n(function (ErrorMessages) {\n  ErrorMessages[\"IMAGE_UNREACHABLE\"] = \"Can't access the image from this url\";\n})(ErrorMessages || (ErrorMessages = {}));\n\n//# sourceURL=webpack://AntonJS/./src/@types/enums/errors.enum.ts?");

/***/ }),

/***/ "./src/@types/enums/index.ts":
/*!***********************************!*\
  !*** ./src/@types/enums/index.ts ***!
  \***********************************/
/*! exports provided: ErrorMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _errors_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors.enum */ \"./src/@types/enums/errors.enum.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ErrorMessages\", function() { return _errors_enum__WEBPACK_IMPORTED_MODULE_0__[\"ErrorMessages\"]; });\n\n/**\r\n * File: index.ts\r\n * Project: antonjs\r\n * Version:0.0.1\r\n * Created Date: Thursday, May 28th 2020, 11:42:31 pm\r\n * Author: Georgian Stan (georgian.stan8@gmail.com)\r\n * -----\r\n * Last Modified: Thursday, 28th May 2020 11:42:37 pm\r\n * Modified By: Georgian Stan (georgian.stan8@gmail.com>)\r\n * ------------------------------------\r\n */\n\n\n//# sourceURL=webpack://AntonJS/./src/@types/enums/index.ts?");

/***/ }),

/***/ "./src/@types/index.ts":
/*!*****************************!*\
  !*** ./src/@types/index.ts ***!
  \*****************************/
/*! exports provided: ErrorMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ \"./src/@types/enums/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ErrorMessages\", function() { return _enums__WEBPACK_IMPORTED_MODULE_0__[\"ErrorMessages\"]; });\n\n/**\r\n * File: index.ts\r\n * Project: antonjs\r\n * Version:0.0.1\r\n * Created Date: Thursday, May 28th 2020, 7:16:36 pm\r\n * Author: Georgian Stan (georgian.stan8@gmail.com)\r\n * -----\r\n * Last Modified: Thursday, 28th May 2020 11:42:44 pm\r\n * Modified By: Georgian Stan (georgian.stan8@gmail.com>)\r\n * ------------------------------------\r\n */\n// export * from './interfaces';\n\n\n//# sourceURL=webpack://AntonJS/./src/@types/index.ts?");

/***/ }),

/***/ "./src/antonjs.ts":
/*!************************!*\
  !*** ./src/antonjs.ts ***!
  \************************/
/*! exports provided: calculateImageIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateImageIndex\", function() { return calculateImageIndex; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./@types */ \"./src/@types/index.ts\");\n/**\r\n * File: antonjs.ts\r\n * Project: antonjs\r\n * Version:0.0.1\r\n * Created Date: Thursday, May 28th 2020, 7:04:51 pm\r\n * Author: Georgian Stan (georgian.stan8@gmail.com)\r\n * -----\r\n * Last Modified: Friday, 29th May 2020 12:09:50 am\r\n * Modified By: Georgian Stan (georgian.stan8@gmail.com>)\r\n * ------------------------------------\r\n */\nvar __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\nvar __generator = undefined && undefined.__generator || function (thisArg, body) {\n  var _ = {\n    label: 0,\n    sent: function () {\n      if (t[0] & 1) throw t[1];\n      return t[1];\n    },\n    trys: [],\n    ops: []\n  },\n      f,\n      y,\n      t,\n      g;\n  return g = {\n    next: verb(0),\n    \"throw\": verb(1),\n    \"return\": verb(2)\n  }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function () {\n    return this;\n  }), g;\n\n  function verb(n) {\n    return function (v) {\n      return step([n, v]);\n    };\n  }\n\n  function step(op) {\n    if (f) throw new TypeError(\"Generator is already executing.\");\n\n    while (_) try {\n      if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n      if (y = 0, t) op = [op[0] & 2, t.value];\n\n      switch (op[0]) {\n        case 0:\n        case 1:\n          t = op;\n          break;\n\n        case 4:\n          _.label++;\n          return {\n            value: op[1],\n            done: false\n          };\n\n        case 5:\n          _.label++;\n          y = op[1];\n          op = [0];\n          continue;\n\n        case 7:\n          op = _.ops.pop();\n\n          _.trys.pop();\n\n          continue;\n\n        default:\n          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {\n            _ = 0;\n            continue;\n          }\n\n          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {\n            _.label = op[1];\n            break;\n          }\n\n          if (op[0] === 6 && _.label < t[1]) {\n            _.label = t[1];\n            t = op;\n            break;\n          }\n\n          if (t && _.label < t[2]) {\n            _.label = t[2];\n\n            _.ops.push(op);\n\n            break;\n          }\n\n          if (t[2]) _.ops.pop();\n\n          _.trys.pop();\n\n          continue;\n      }\n\n      op = body.call(thisArg, _);\n    } catch (e) {\n      op = [6, e];\n      y = 0;\n    } finally {\n      f = t = 0;\n    }\n\n    if (op[0] & 5) throw op[1];\n    return {\n      value: op[0] ? op[1] : void 0,\n      done: true\n    };\n  }\n};\n/**\r\n * * Types\r\n */\n\n\n\n\nvar getPixelIndex = function (numToRound) {\n  //Each pixel is 4 units long: r,g,b,a\n  var remainder = numToRound % 4;\n  if (remainder == 0) return numToRound;\n  return numToRound + 4 - remainder;\n};\n\nvar getPixelsIndexFromPrincipalDiagonal = function (imageData) {\n  var pixels = [];\n\n  for (var i = 0; i < imageData.height; i++) {\n    // const pixelIndex = getPixelIndex(i * imageData.width + i);\n    pixels.push(i * imageData.width + i);\n  }\n\n  return pixels;\n};\n\nvar getImageData = function (imageUrl) {\n  return new Promise(function (resolve, reject) {\n    return __awaiter(void 0, void 0, void 0, function () {\n      var canvas, ctx, img;\n      return __generator(this, function (_a) {\n        canvas = document.createElement('canvas');\n        ctx = canvas.getContext('2d');\n        img = new Image();\n        img.crossOrigin = 'anonymous';\n        img.src = imageUrl;\n\n        img.onload = function () {\n          try {\n            ctx.drawImage(img, 0, 0);\n            var data = ctx.getImageData(0, 0, img.naturalWidth, img.naturalHeight);\n            resolve(data);\n          } catch (err) {\n            reject(err);\n          }\n        };\n\n        img.onerror = function (err) {\n          reject(err);\n        };\n\n        return [2\n        /*return*/\n        ];\n      });\n    });\n  });\n};\n\nvar calculateImageIndex = function (imageUrl) {\n  return __awaiter(void 0, void 0, void 0, function () {\n    var imageData, err_1;\n    return __generator(this, function (_a) {\n      switch (_a.label) {\n        case 0:\n          _a.trys.push([0, 2,, 3]);\n\n          return [4\n          /*yield*/\n          , getImageData(imageUrl)];\n\n        case 1:\n          imageData = _a.sent();\n          console.log(imageData);\n          console.log(getPixelsIndexFromPrincipalDiagonal(imageData));\n          return [3\n          /*break*/\n          , 3];\n\n        case 2:\n          err_1 = _a.sent();\n          throw new Error(_types__WEBPACK_IMPORTED_MODULE_0__[\"ErrorMessages\"].IMAGE_UNREACHABLE + ' ' + imageUrl);\n\n        case 3:\n          return [2\n          /*return*/\n          ];\n      }\n    });\n  });\n};\n\n\n\n//# sourceURL=webpack://AntonJS/./src/antonjs.ts?");

/***/ })

/******/ });
});