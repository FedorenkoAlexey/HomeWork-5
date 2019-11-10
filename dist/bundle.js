/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".container {\\r\\n  max-width: 1000px;\\r\\n  position: relative;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.slides {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  border: 2px solid black;\\r\\n  width: auto;\\r\\n  height: 300px;\\r\\n  background-color: rgb(8, 138, 214);\\r\\n}\\r\\n.two {\\r\\n  background-color: rgb(125, 231, 125);\\r\\n}\\r\\n.three {\\r\\n  background-color: rgb(204, 135, 231);\\r\\n}\\r\\n.four {\\r\\n  background-color: rgb(248, 112, 112);\\r\\n}\\r\\n.five {\\r\\n  background-color: rgb(60, 13, 121);\\r\\n}\\r\\n\\r\\n.prev,\\r\\n.next {\\r\\n  cursor: pointer;\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  width: auto;\\r\\n  /* height: 5px; */\\r\\n  margin-top: -20px;\\r\\n  /* padding: 17px; */\\r\\n  color: white;\\r\\n  font-weight: bold;\\r\\n  font-size: 18px;\\r\\n  transition: 0.6s ease;\\r\\n  /* border-radius: 50%; */\\r\\n}\\r\\n\\r\\n.next {\\r\\n  right: 0;\\r\\n  border-radius: 50%;\\r\\n}\\r\\n\\r\\n.text {\\r\\n  margin-top: 11%;\\r\\n  color: #fff;\\r\\n  font-size: 60px;\\r\\n  font-weight: bold;\\r\\n  padding: 8px 12px;\\r\\n  position: absolute;\\r\\n  width: 97%;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.numbertext {\\r\\n  color: #f2f2f2;\\r\\n  font-size: 12px;\\r\\n  padding: 8px 12px;\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n}\\r\\n\\r\\n.dot {\\r\\n  cursor: pointer;\\r\\n  height: 15px;\\r\\n  width: 15px;\\r\\n  margin: 0 2px;\\r\\n  background-color: #bbb;\\r\\n  border-radius: 50%;\\r\\n  display: inline-block;\\r\\n  transition: background-color 0.6s ease;\\r\\n}\\r\\n\\r\\n.active,\\r\\n.dot:hover {\\r\\n  background-color: rgba(8, 138, 214, 0.644);\\r\\n}\\r\\n\\r\\n.anim {\\r\\n  animation-name: anim;\\r\\n  animation-duration: 1.5s;\\r\\n}\\r\\n\\r\\n@keyframes anim {\\r\\n  from {\\r\\n    opacity: 0.4;\\r\\n  }\\r\\n  to {\\r\\n    opacity: 1;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/css/styles.css?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!doctype html> <html lang=en> <head> <meta charset=UTF-8 /> <meta name=viewport content=\\\"width=device-width,initial-scale=1\\\"/> <meta http-equiv=X-UA-Compatible content=\\\"ie=edge\\\"/> <title>Homework-5</title> </head> <body> <div class=carousel> <div class=container> <div class=\\\"slides anim one\\\"> <span class=text>1</span> </div> <div class=\\\"slides anim two\\\"> <span class=text>2</span> </div> <div class=\\\"slides anim three\\\"> <span class=text>3</span> </div> <div class=\\\"slides anim four\\\"> <span class=text>4</span> </div> <div class=\\\"slides anim five\\\"> <span class=text>5</span> </div> <a class=prev onclick=plusSlides(-1)><img src=https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/prev.png /></a> <a class=next onclick=plusSlides(1)><img src=https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/next.png /></a> </div> </div> <br/> <div class=dotsList style=text-align:center> <span class=dot onclick=currentSlide(1)></span> <span class=dot onclick=currentSlide(2)></span> <span class=dot onclick=currentSlide(3)></span> <span class=dot onclick=currentSlide(4)></span> <span class=dot onclick=currentSlide(5)></span> </div> </body> </html> \";\n\n//# sourceURL=webpack:///./src/index.html?");

/***/ }),

/***/ "./src/js/carousel.js":
/*!****************************!*\
  !*** ./src/js/carousel.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let slideIndex = 1;\r\nshowSlides(slideIndex);\r\n\r\nfunction plusSlides(n) {\r\n  showSlides((slideIndex += n));\r\n}\r\n\r\nfunction currentSlide(n) {\r\n  showSlides((slideIndex = n));\r\n}\r\n\r\nfunction showSlides(n) {\r\n  let i;\r\n  let slides = document.getElementsByClassName(\"slides\");\r\n  let dots = document.getElementsByClassName(\"dot\");\r\n  if (n > slides.length) {\r\n    slideIndex = 1;\r\n  }\r\n  if (n < 1) {\r\n    slideIndex = slides.length;\r\n  }\r\n  for (i = 0; i < slides.length; i++) {\r\n    slides[i].style.display = \"none\";\r\n  }\r\n  for (i = 0; i < dots.length; i++) {\r\n    dots[i].className = dots[i].className.replace(\" active\", \"\");\r\n  }\r\n  slides[slideIndex - 1].style.display = \"block\";\r\n  dots[slideIndex - 1].className += \" active\";\r\n}\r\n//-------------------------------------------\r\n\n\n//# sourceURL=webpack:///./src/js/carousel.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _main_funct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-funct */ \"./src/js/main-funct.js\");\n/* harmony import */ var _main_funct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_funct__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../index.html */ \"./src/index.html\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _carousel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel.js */ \"./src/js/carousel.js\");\n/* harmony import */ var _carousel_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_carousel_js__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/main-funct.js":
/*!******************************!*\
  !*** ./src/js/main-funct.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//1. isPrime - Returns true or false, indicating whether the given number is prime.\r\nconsole.log('--1. isPrime');\r\nfunction isPrime(n) {\r\n\tlet res = 0;\r\n\tif (n <= 1) return console.log(`${n}`, false);\r\n\tfor (let i = 2; i <= n-1; i++){\r\n\t\tres = n % i;\r\n//\t\tconsole.log(n, i);\r\n\t\tif (res == 0) return console.log(`${n}`, false);\r\n\t\telse if (n ==2 || res !=0){\r\n\t\t\tlet positive = true;\r\n\t\t} \r\n\t}\r\n\tif (positive = true) console.log(`${n}`, positive);\r\n}\r\nisPrime(0);                         // false\r\nisPrime(1);                         // false\r\nisPrime(17);                        // true\r\nisPrime(9999991);\t\t\t\t\t// true\r\nisPrime(10000000000000);            // false\r\n\r\n\r\n//2. factorial - Returns a number that is the factorial of the given number.\r\nconsole.log('--2. factorial');\r\nfunction factorial(val){\r\n\tlet res = 1;\r\n\tfor (let i = 1; i <= val; i++){\r\n\t\tres *= i;\r\n\t}\r\n\treturn console.log(`factorial ${val}: ${res}`);\r\n}\r\n\r\nfactorial(6);\r\n\r\n//3. fib - Returns the nth Fibonacci number.\r\nconsole.log('--3. fib');\r\nfunction fib(n) {\r\n  let res = [0, 1];\r\n  for (let i = 0; i < n; i++) {\r\n    let sum;\r\n    sum = res[i] + res[i + 1];\r\n    res.push(sum);\r\n  }\r\n  console.log(`${n}-th Fibonacci number: ${res[n]}`);\r\n}\r\nfib(0);\r\nfib(1);\r\nfib(10);\r\nfib(20);\r\n\r\n//4. isSorted - Returns true or false, indicating whether the given array of numbers is sorted.\r\nconsole.log('--4. isSorted');\r\nfunction isSorted(array) {\r\n  let iter = 0;\r\n  let arr = array;\r\n  for (let i = 0; i < arr.length - 1; i++) {\r\n    for (let j = 0; j < arr.length - 1; j++) {\r\n      if (arr[j] > arr[j + 1]) {\r\n        let newMax = arr[j];\r\n        arr[j] = arr[j + 1];\r\n        arr[j + 1] = newMax;\r\n        iter += 1;\r\n//         console.log(iter);\r\n      }\r\n    }\r\n\r\n  }\r\n\tif (iter == 0) console.log(`For array [${arr}]:`, true);\r\n    else console.log(false); \r\n}\r\n\r\nisSorted([9, 3, 0, -Infinity, -5]);\r\nisSorted([-Infinity, -5, 0, 3, 9]);\r\n\r\n//5. reverse - Reverses the given string\r\nconsole.log('--5. reverse');\r\nfunction reverse(str) {\r\n  let res = [];\r\n  const arr = str.split(\"\");\r\n  for (let i = 0; i <= arr.length - 1; i++) {\r\n    res.unshift(arr[i]);\r\n  }\r\n  let res2 = res.join(\"\");\r\n\r\n  console.log(`reverse for ${str}: ${res2}`);\r\n}\r\nreverse(\"Hello world\");\r\n\r\n//6. indexOf - Implement the indexOf function for arrays.\r\nconsole.log('--6. indexOf');\r\nfunction indexOf(arr, i){\r\n\tarr.forEach(function(item, index){\r\n\t\tif (item == i) console.log(`For array [${arr}] elem \"${item}\" - index: ${index}`);\r\n\t})\r\n}\r\nindexOf([1, 3, 5, 8, 9, 10, 7], 8);\r\n\r\n//7. isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive)\r\nconsole.log('--7. isPalindrome');\r\nfunction isPalindrome(str){\r\n\tconst string = str.toLocaleLowerCase();\r\n\tlet res = \"\";\r\n\tlet reversStr = \"\";\r\n\tfor (let i = 0; i < string.length; i++){\r\n\t\tif (string[i] == ' ') continue;\r\n\t\telse res += string[i];\r\n\t}\r\n\treversStr = res.split(\"\").reverse().join(\"\");\r\n\tconsole.log(`${str}:`, res == reversStr);\r\n}\r\nisPalindrome('abcba');\r\n\r\n// 8. missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, \r\n//and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). \r\n//Can you do it in O(N) time? Hint: There’s a clever formula you can use.\r\nconsole.log('--8. missing');\r\nfunction missing(arr){\r\n\tconst sortArr = arr.sort();\r\n\tlet und = 0;\r\n\tlet res = 0;\r\n\tfor (let i = 0;  i < sortArr.length-1; i++){\r\n\t\tlet res = sortArr[i+1] - sortArr[i];\r\n\t\tif (res != 1) console.log(`For array [${arr}] missing: ${sortArr[i]+1}`);\r\n\t\telse \r\n\t\t\tund++;\r\n\t}\r\n\tif (und == arr.length || und == 0) console.log(undefined);\r\n}\r\nmissing([5, 1, 4, 2]);\r\n\r\n//9. isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.\r\nconsole.log('--9. isBalanced');\r\nfunction isBalanced(str){\r\n\tlet sumLeft = 0;\r\n\tlet sumRight = 0;\r\n\tlet braceIndexLeft = 0;\r\n\tlet braceIndexRight = 0;\r\n\tfor (let i = 0; i <= str.length; i++){\r\n\t\tif (str[i] == \"{\"){\r\n\t\t\tbraceIndexLeft = i;\r\n\t\t\tsumLeft --;\r\n//\t\t\tconsole.log(sumLeft, str[i], braceIndexLeft);\r\n\t\t} else if (str[i] == \"}\"){\r\n\t\t\tbraceIndexRight = i;\r\n\t\t\tsumRight++;\r\n//\t\t\tconsole.log(sumRight, str[i], braceIndexRight);\r\n\t\t}\t\r\n\t}\r\n//\t\tconsole.log(\"Left\", braceIndexLeft);\r\n//\t\tconsole.log(\"Right\", braceIndexRight);\r\n\tif (braceIndexLeft > braceIndexRight)  return console.log(`'${str}':`, false);\r\n\r\n\tconst sum = sumLeft + sumRight;\r\n\t\r\n\tif (sum ==0) console.log(`'${str}':`, true)\r\n\telse console.log(`'${str}':`, false)\r\n}\r\nisBalanced('}{');                      // false\r\nisBalanced('{{}');                     // false\r\nisBalanced('{}{}');                    // true\r\nisBalanced('foo { bar { baz } boo }'); // true\r\nisBalanced('foo { bar { baz }');       // false\r\nisBalanced('foo { bar } }'); \t\t   // false\r\n\n\n//# sourceURL=webpack:///./src/js/main-funct.js?");

/***/ })

/******/ });