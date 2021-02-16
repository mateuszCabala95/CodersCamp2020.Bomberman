/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/gamePage/gamepage.html":
/*!******************************************!*\
  !*** ./src/pages/gamePage/gamepage.html ***!
  \******************************************/
/***/ ((module) => {

// Module
var code = "<body>\n  <main class=\"gp-container\">\n    <section class=\"gp-col player1\">\n      <div class=\"sidepanel\" id=\"player1-box\">\n        <br />\n        <div class=\"player-name\" id=\"player1\"></div>\n        <div class=\"parameters\">\n          <div class=\"avatar\">\n            <img\n              src=\"https://svgshare.com/i/Thc.svg\"\n              alt=\"Player 1\"\n              width=\"50\"\n              height=\"50\"\n            />\n          </div>\n\n          <div class=\"parameter\" id=\"lives-left\">\n            <h1>LIVES: 3</h1>\n          </div>\n          <div class=\"parameter\" id=\"bombs\">\n            <h1>BOMBS: 1</h1>\n          </div>\n          <div class=\"parameter\" id=\"bomb-range\">\n            <h1>BOMB RANGE: 3</h1>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"gp-col game\">\n      <div id=\"timer\">\n        <h1>TIME: <span id=\"countdown\">120</span></h1>\n      </div>\n      <div id=\"gameboard\"></div>\n    </section>\n\n    <section class=\"gp-col player2\">\n      <div class=\"sidepanel\" id=\"player2-box\">\n        <div class=\"player-name\" id=\"player2\"></div>\n        <div class=\"parameters\">\n          <div class=\"avatar\">\n            <img\n              src=\"https://svgshare.com/i/Twu.svg\"\n              alt=\"Player 1\"\n              width=\"50\"\n              height=\"50\"\n            />\n          </div>\n          <div class=\"parameter\" id=\"lives-left\">\n            <h1>LIVES: 3</h1>\n          </div>\n          <div class=\"parameter\" id=\"bombs\">\n            <h1>BOMBS: 1</h1>\n          </div>\n          <div class=\"parameter\" id=\"bomb-range\">\n            <h1>BOMB RANGE: 3</h1>\n          </div>\n        </div>\n      </div>\n    </section>\n  </main>\n</body>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/pages/mainPage/main-page.html":
/*!*******************************************!*\
  !*** ./src/pages/mainPage/main-page.html ***!
  \*******************************************/
/***/ ((module) => {

// Module
var code = "<div id=\"main-page\" class=\"main-page\">\n  <div class=\"main-page__wrapper\">\n    <h2 class=\"main-page__title\">\n      .<span class=\"main-page__special\">Bombers</span>Crew\n    </h2>\n    <div class=\"main-page__container\">\n      <span class=\"main-page__description\" id=\"description\"></span>\n    </div>\n    <form class=\"player__form\">\n      <input\n        class=\"player__name\"\n        type=\"text\"\n        name=\"player1\"\n        id=\"player1\"\n        placeholder=\"Player 1: Nickname \"\n        required\n      />\n      <input\n        class=\"player__name\"\n        type=\"text\"\n        name=\"player2\"\n        id=\"player2\"\n        placeholder=\"Player 2: Nickname \"\n      />\n      <div class=\"player__wrapper\">\n        <label for=\"numberOfPlayers\" class=\"player__label\">Players: </label>\n        <input\n          class=\"player__checkbox\"\n          type=\"checkbox\"\n          name=\"bothPlayers\"\n          id=\"numberOfPlayers\"\n        />\n\n        <div class=\"numbers__wrapper\">\n          <span class=\"numbers__number\">1</span>\n          <span class=\"numbers__number\">2</span>\n        </div>\n      </div>\n      <button class=\"player__start\" type=\"submit\">Start</button>\n    </form>\n  </div>\n</div>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/gamePage/gamepage.scss":
/*!******************************************!*\
  !*** ./src/pages/gamePage/gamepage.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/mainPage/main-page.scss":
/*!*******************************************!*\
  !*** ./src/pages/mainPage/main-page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mobile-device-detect/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/mobile-device-detect/dist/index.js ***!
  \*********************************************************/
/***/ ((module) => {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_187__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_187__);
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
/******/ 	__nested_webpack_require_187__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_187__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_187__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_187__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_187__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_187__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_187__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_187__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_187__(__nested_webpack_require_187__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DEVICE_TYPES = {
  MOBILE: "mobile",
  TABLET: "tablet",
  SMART_TV: "smarttv",
  CONSOLE: "console",
  WEARABLE: "wearable",
  BROWSER: undefined
};

var BROWSER_TYPES = {
  CHROME: "Chrome",
  FIREFOX: "Firefox",
  OPERA: "Opera",
  YANDEX: "Yandex",
  SAFARI: "Safari",
  INTERNET_EXPLORER: "Internet Explorer",
  EDGE: "Edge",
  CHROMIUM: "Chromium",
  IE: "IE",
  MOBILE_SAFARI: "Mobile Safari",
  EDGE_CHROMIUM: "Edge Chromium"
};

var OS_TYPES = {
  IOS: "iOS",
  ANDROID: "Android",
  WINDOWS_PHONE: "Windows Phone",
  WINDOWS: "Windows",
  MAC_OS: "Mac OS"
};

var defaultData = {
  isMobile: false,
  isTablet: false,
  isBrowser: false,
  isSmartTV: false,
  isConsole: false,
  isWearable: false
};

module.exports = { BROWSER_TYPES: BROWSER_TYPES, DEVICE_TYPES: DEVICE_TYPES, OS_TYPES: OS_TYPES, defaultData: defaultData };

/***/ }),
/* 1 */
/***/ (function(module, exports, __nested_webpack_require_3397__) {

"use strict";


var UAParser = __nested_webpack_require_3397__(2);

var _require = __nested_webpack_require_3397__(0),
    BROWSER_TYPES = _require.BROWSER_TYPES,
    OS_TYPES = _require.OS_TYPES,
    DEVICE_TYPES = _require.DEVICE_TYPES;

var _require2 = __nested_webpack_require_3397__(4),
    checkType = _require2.checkType,
    broPayload = _require2.broPayload,
    mobilePayload = _require2.mobilePayload,
    wearPayload = _require2.wearPayload,
    consolePayload = _require2.consolePayload,
    stvPayload = _require2.stvPayload,
    getNavigatorInstance = _require2.getNavigatorInstance,
    isIOS13Check = _require2.isIOS13Check;

var UA = new UAParser();

var browser = UA.getBrowser();
var device = UA.getDevice();
var engine = UA.getEngine();
var os = UA.getOS();
var ua = UA.getUA();

var CHROME = BROWSER_TYPES.CHROME,
    CHROMIUM = BROWSER_TYPES.CHROMIUM,
    IE = BROWSER_TYPES.IE,
    INTERNET_EXPLORER = BROWSER_TYPES.INTERNET_EXPLORER,
    OPERA = BROWSER_TYPES.OPERA,
    FIREFOX = BROWSER_TYPES.FIREFOX,
    SAFARI = BROWSER_TYPES.SAFARI,
    EDGE = BROWSER_TYPES.EDGE,
    YANDEX = BROWSER_TYPES.YANDEX,
    MOBILE_SAFARI = BROWSER_TYPES.MOBILE_SAFARI;
var MOBILE = DEVICE_TYPES.MOBILE,
    TABLET = DEVICE_TYPES.TABLET,
    SMART_TV = DEVICE_TYPES.SMART_TV,
    BROWSER = DEVICE_TYPES.BROWSER,
    WEARABLE = DEVICE_TYPES.WEARABLE,
    CONSOLE = DEVICE_TYPES.CONSOLE;
var ANDROID = OS_TYPES.ANDROID,
    WINDOWS_PHONE = OS_TYPES.WINDOWS_PHONE,
    IOS = OS_TYPES.IOS,
    WINDOWS = OS_TYPES.WINDOWS,
    MAC_OS = OS_TYPES.MAC_OS;


var isMobileType = function isMobileType() {
  return device.type === MOBILE;
};
var isTabletType = function isTabletType() {
  return device.type === TABLET;
};

var isMobileAndTabletType = function isMobileAndTabletType() {
  switch (device.type) {
    case MOBILE:
    case TABLET:
      return true;
    default:
      return false;
  }
};

var isEdgeChromiumType = function isEdgeChromiumType() {
  if (os.name === OS_TYPES.WINDOWS && os.version === '10') {
    return typeof ua === 'string' && ua.indexOf('Edg/') !== -1;
  }

  return false;
};

var isSmartTVType = function isSmartTVType() {
  return device.type === SMART_TV;
};
var isBrowserType = function isBrowserType() {
  return device.type === BROWSER;
};
var isWearableType = function isWearableType() {
  return device.type === WEARABLE;
};
var isConsoleType = function isConsoleType() {
  return device.type === CONSOLE;
};
var isAndroidType = function isAndroidType() {
  return os.name === ANDROID;
};
var isWindowsType = function isWindowsType() {
  return os.name === WINDOWS;
};
var isMacOsType = function isMacOsType() {
  return os.name === MAC_OS;
};
var isWinPhoneType = function isWinPhoneType() {
  return os.name === WINDOWS_PHONE;
};
var isIOSType = function isIOSType() {
  return os.name === IOS;
};
var isChromeType = function isChromeType() {
  return browser.name === CHROME;
};
var isFirefoxType = function isFirefoxType() {
  return browser.name === FIREFOX;
};
var isChromiumType = function isChromiumType() {
  return browser.name === CHROMIUM;
};
var isEdgeType = function isEdgeType() {
  return browser.name === EDGE;
};
var isYandexType = function isYandexType() {
  return browser.name === YANDEX;
};
var isSafariType = function isSafariType() {
  return browser.name === SAFARI || browser.name === MOBILE_SAFARI;
};

var isMobileSafariType = function isMobileSafariType() {
  return browser.name === MOBILE_SAFARI;
};
var isOperaType = function isOperaType() {
  return browser.name === OPERA;
};
var isIEType = function isIEType() {
  return browser.name === INTERNET_EXPLORER || browser.name === IE;
};

var isElectronType = function isElectronType() {
  var nav = getNavigatorInstance();
  var ua = nav && nav.userAgent.toLowerCase();

  return typeof ua === 'string' ? /electron/.test(ua) : false;
};

var getIOS13 = function getIOS13() {
  var nav = getNavigatorInstance();
  return nav && (/iPad|iPhone|iPod/.test(nav.platform) || nav.platform === 'MacIntel' && nav.maxTouchPoints > 1) && !window.MSStream;
};

var getIPad13 = function getIPad13() {
  return isIOS13Check('iPad');
};
var getIphone13 = function getIphone13() {
  return isIOS13Check('iPhone');
};
var getIPod13 = function getIPod13() {
  return isIOS13Check('iPod');
};

var getBrowserFullVersion = function getBrowserFullVersion() {
  return browser.major;
};
var getBrowserVersion = function getBrowserVersion() {
  return browser.version;
};
var getOsVersion = function getOsVersion() {
  return os.version ? os.version : "none";
};
var getOsName = function getOsName() {
  return os.name ? os.name : "none";
};
var getBrowserName = function getBrowserName() {
  return browser.name;
};
var getMobileVendor = function getMobileVendor() {
  return device.vendor ? device.vendor : "none";
};
var getMobileModel = function getMobileModel() {
  return device.model ? device.model : "none";
};
var getEngineName = function getEngineName() {
  return engine.name;
};
var getEngineVersion = function getEngineVersion() {
  return engine.version;
};
var getUseragent = function getUseragent() {
  return ua;
};
var getDeviceType = function getDeviceType() {
  return device.type;
};

var isSmartTV = isSmartTVType();
var isConsole = isConsoleType();
var isWearable = isWearableType();
var isMobileSafari = isMobileSafariType() || getIPad13();
var isChromium = isChromiumType();
var isMobile = isMobileAndTabletType() || getIPad13();
var isMobileOnly = isMobileType();
var isTablet = isTabletType() || getIPad13();
var isBrowser = isBrowserType();
var isAndroid = isAndroidType();
var isWinPhone = isWinPhoneType();
var isIOS = isIOSType() || getIPad13();
var isChrome = isChromeType();
var isFirefox = isFirefoxType();
var isSafari = isSafariType();
var isOpera = isOperaType();
var isIE = isIEType();
var osVersion = getOsVersion();
var osName = getOsName();
var fullBrowserVersion = getBrowserFullVersion();
var browserVersion = getBrowserVersion();
var browserName = getBrowserName();
var mobileVendor = getMobileVendor();
var mobileModel = getMobileModel();
var engineName = getEngineName();
var engineVersion = getEngineVersion();
var getUA = getUseragent();
var isEdge = isEdgeType() || isEdgeChromiumType();
var isYandex = isYandexType();
var deviceType = getDeviceType();
var isIOS13 = getIOS13();
var isIPad13 = getIPad13();
var isIPhone13 = getIphone13();
var isIPod13 = getIPod13();
var isElectron = isElectronType();
var isEdgeChromium = isEdgeChromiumType();
var isLegacyEdge = isEdgeType();
var isWindows = isWindowsType();
var isMacOs = isMacOsType();

var type = checkType(device.type);

function deviceDetect() {
  var isBrowser = type.isBrowser,
      isMobile = type.isMobile,
      isTablet = type.isTablet,
      isSmartTV = type.isSmartTV,
      isConsole = type.isConsole,
      isWearable = type.isWearable;

  if (isBrowser) {
    return broPayload(isBrowser, browser, engine, os, ua);
  }

  if (isSmartTV) {
    return stvPayload(isSmartTV, engine, os, ua);
  }

  if (isConsole) {
    return consolePayload(isConsole, engine, os, ua);
  }

  if (isMobile) {
    return mobilePayload(type, device, os, ua);
  }

  if (isTablet) {
    return mobilePayload(type, device, os, ua);
  }

  if (isWearable) {
    return wearPayload(isWearable, engine, os, ua);
  }
};

module.exports = {
  deviceDetect: deviceDetect,
  isSmartTV: isSmartTV,
  isConsole: isConsole,
  isWearable: isWearable,
  isMobileSafari: isMobileSafari,
  isChromium: isChromium,
  isMobile: isMobile,
  isMobileOnly: isMobileOnly,
  isTablet: isTablet,
  isBrowser: isBrowser,
  isAndroid: isAndroid,
  isWinPhone: isWinPhone,
  isIOS: isIOS,
  isChrome: isChrome,
  isFirefox: isFirefox,
  isSafari: isSafari,
  isOpera: isOpera,
  isIE: isIE,
  osVersion: osVersion,
  osName: osName,
  fullBrowserVersion: fullBrowserVersion,
  browserVersion: browserVersion,
  browserName: browserName,
  mobileVendor: mobileVendor,
  mobileModel: mobileModel,
  engineName: engineName,
  engineVersion: engineVersion,
  getUA: getUA,
  isEdge: isEdge,
  isYandex: isYandex,
  deviceType: deviceType,
  isIOS13: isIOS13,
  isIPad13: isIPad13,
  isIPhone13: isIPhone13,
  isIPod13: isIPod13,
  isElectron: isElectron,
  isEdgeChromium: isEdgeChromium,
  isLegacyEdge: isLegacyEdge,
  isWindows: isWindows,
  isMacOs: isMacOs
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __nested_webpack_require_11768__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * UAParser.js v0.7.18
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 or MIT
 */
(function(window,undefined){"use strict";var LIBVERSION="0.7.18",EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",STR_TYPE="string",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet",SMARTTV="smarttv",WEARABLE="wearable",EMBEDDED="embedded";var util={extend:function(regexes,extensions){var margedRegexes={};for(var i in regexes){if(extensions[i]&&extensions[i].length%2===0){margedRegexes[i]=extensions[i].concat(regexes[i])}else{margedRegexes[i]=regexes[i]}}return margedRegexes},has:function(str1,str2){if(typeof str1==="string"){return str2.toLowerCase().indexOf(str1.toLowerCase())!==-1}else{return false}},lowerize:function(str){return str.toLowerCase()},major:function(version){return typeof version===STR_TYPE?version.replace(/[^\d\.]/g,"").split(".")[0]:undefined},trim:function(str){return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}};var mapper={rgx:function(ua,arrays){var i=0,j,k,p,q,matches,match;while(i<arrays.length&&!matches){var regex=arrays[i],props=arrays[i+1];j=k=0;while(j<regex.length&&!matches){matches=regex[j++].exec(ua);if(!!matches){for(p=0;p<props.length;p++){match=matches[++k];q=props[p];if(typeof q===OBJ_TYPE&&q.length>0){if(q.length==2){if(typeof q[1]==FUNC_TYPE){this[q[0]]=q[1].call(this,match)}else{this[q[0]]=q[1]}}else if(q.length==3){if(typeof q[1]===FUNC_TYPE&&!(q[1].exec&&q[1].test)){this[q[0]]=match?q[1].call(this,match,q[2]):undefined}else{this[q[0]]=match?match.replace(q[1],q[2]):undefined}}else if(q.length==4){this[q[0]]=match?q[3].call(this,match.replace(q[1],q[2])):undefined}}else{this[q]=match?match:undefined}}}}i+=2}},str:function(str,map){for(var i in map){if(typeof map[i]===OBJ_TYPE&&map[i].length>0){for(var j=0;j<map[i].length;j++){if(util.has(map[i][j],str)){return i===UNKNOWN?undefined:i}}}else if(util.has(map[i],str)){return i===UNKNOWN?undefined:i}}return str}};var maps={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}};var regexes={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[NAME,VERSION],[/(opios)[\/\s]+([\w\.]+)/i],[[NAME,"Opera Mini"],VERSION],[/\s(opr)\/([\w\.]+)/i],[[NAME,"Opera"],VERSION],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],[NAME,VERSION],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[NAME,"IE"],VERSION],[/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],[[NAME,"Edge"],VERSION],[/(yabrowser)\/([\w\.]+)/i],[[NAME,"Yandex"],VERSION],[/(puffin)\/([\w\.]+)/i],[[NAME,"Puffin"],VERSION],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[NAME,"UCBrowser"],VERSION],[/(comodo_dragon)\/([\w\.]+)/i],[[NAME,/_/g," "],VERSION],[/(micromessenger)\/([\w\.]+)/i],[[NAME,"WeChat"],VERSION],[/(qqbrowserlite)\/([\w\.]+)/i],[NAME,VERSION],[/(QQ)\/([\d\.]+)/i],[NAME,VERSION],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(BIDUBrowser)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(MetaSr)[\/\s]?([\w\.]+)/i],[NAME],[/(LBBROWSER)/i],[NAME],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[VERSION,[NAME,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[VERSION,[NAME,"Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[VERSION,[NAME,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 WebView"],VERSION],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[NAME,/(.+(?:g|us))(.+)/,"$1 $2"],VERSION],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[VERSION,[NAME,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[NAME,VERSION],[/(dolfin)\/([\w\.]+)/i],[[NAME,"Dolphin"],VERSION],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[NAME,"Chrome"],VERSION],[/(coast)\/([\w\.]+)/i],[[NAME,"Opera Coast"],VERSION],[/fxios\/([\w\.-]+)/i],[VERSION,[NAME,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[VERSION,[NAME,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[VERSION,NAME],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[NAME,"GSA"],VERSION],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[NAME,[VERSION,mapper.str,maps.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[NAME,VERSION],[/(navigator|netscape)\/([\w\.-]+)/i],[[NAME,"Netscape"],VERSION],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[NAME,VERSION]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[ARCHITECTURE,"amd64"]],[/(ia32(?=;))/i],[[ARCHITECTURE,util.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[ARCHITECTURE,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[ARCHITECTURE,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[ARCHITECTURE,/ower/,"",util.lowerize]],[/(sun4\w)[;\)]/i],[[ARCHITECTURE,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[ARCHITECTURE,util.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[MODEL,VENDOR,[TYPE,TABLET]],[/applecoremedia\/[\w\.]+ \((ipad)/],[MODEL,[VENDOR,"Apple"],[TYPE,TABLET]],[/(apple\s{0,1}tv)/i],[[MODEL,"Apple TV"],[VENDOR,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[MODEL,[VENDOR,"Amazon"],[TYPE,TABLET]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[MODEL,mapper.str,maps.device.amazon.model],[VENDOR,"Amazon"],[TYPE,MOBILE]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[MODEL,VENDOR,[TYPE,MOBILE]],[/\((ip[honed|\s\w*]+);/i],[MODEL,[VENDOR,"Apple"],[TYPE,MOBILE]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/\(bb10;\s(\w+)/i],[MODEL,[VENDOR,"BlackBerry"],[TYPE,MOBILE]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[MODEL,[VENDOR,"Asus"],[TYPE,TABLET]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[VENDOR,"Sony"],[MODEL,"Xperia Tablet"],[TYPE,TABLET]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[MODEL,[VENDOR,"Sony"],[TYPE,MOBILE]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[VENDOR,MODEL,[TYPE,CONSOLE]],[/android.+;\s(shield)\sbuild/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,CONSOLE]],[/(playstation\s[34portablevi]+)/i],[MODEL,[VENDOR,"Sony"],[TYPE,CONSOLE]],[/(sprint\s(\w+))/i],[[VENDOR,mapper.str,maps.device.sprint.vendor],[MODEL,mapper.str,maps.device.sprint.model],[TYPE,MOBILE]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[VENDOR,[MODEL,/_/g," "],[TYPE,MOBILE]],[/(nexus\s9)/i],[MODEL,[VENDOR,"HTC"],[TYPE,TABLET]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[MODEL,[VENDOR,"Huawei"],[TYPE,MOBILE]],[/(microsoft);\s(lumia[\s\w]+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[MODEL,[VENDOR,"Microsoft"],[TYPE,CONSOLE]],[/(kin\.[onetw]{3})/i],[[MODEL,/\./g," "],[VENDOR,"Microsoft"],[TYPE,MOBILE]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[MODEL,[VENDOR,"Motorola"],[TYPE,MOBILE]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[MODEL,[VENDOR,"Motorola"],[TYPE,TABLET]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[VENDOR,util.trim],[MODEL,util.trim],[TYPE,SMARTTV]],[/hbbtv.+maple;(\d+)/i],[[MODEL,/^/,"SmartTV"],[VENDOR,"Samsung"],[TYPE,SMARTTV]],[/\(dtv[\);].+(aquos)/i],[MODEL,[VENDOR,"Sharp"],[TYPE,SMARTTV]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,TABLET]],[/smart-tv.+(samsung)/i],[VENDOR,[TYPE,SMARTTV],MODEL],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,MOBILE]],[/sie-(\w*)/i],[MODEL,[VENDOR,"Siemens"],[TYPE,MOBILE]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[VENDOR,"Nokia"],MODEL,[TYPE,MOBILE]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[MODEL,[VENDOR,"Acer"],[TYPE,TABLET]],[/android.+([vl]k\-?\d{3})\s+build/i],[MODEL,[VENDOR,"LG"],[TYPE,TABLET]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[VENDOR,"LG"],MODEL,[TYPE,TABLET]],[/(lg) netcast\.tv/i],[VENDOR,MODEL,[TYPE,SMARTTV]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[MODEL,[VENDOR,"LG"],[TYPE,MOBILE]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[MODEL,[VENDOR,"Lenovo"],[TYPE,TABLET]],[/linux;.+((jolla));/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/((pebble))app\/[\d\.]+\s/i],[VENDOR,MODEL,[TYPE,WEARABLE]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/crkey/i],[[MODEL,"Chromecast"],[VENDOR,"Google"]],[/android.+;\s(glass)\s\d/i],[MODEL,[VENDOR,"Google"],[TYPE,WEARABLE]],[/android.+;\s(pixel c)\s/i],[MODEL,[VENDOR,"Google"],[TYPE,TABLET]],[/android.+;\s(pixel xl|pixel)\s/i],[MODEL,[VENDOR,"Google"],[TYPE,MOBILE]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,MOBILE]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,TABLET]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[MODEL,[VENDOR,"Meizu"],[TYPE,TABLET]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[MODEL,[VENDOR,"OnePlus"],[TYPE,MOBILE]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[MODEL,[VENDOR,"RCA"],[TYPE,TABLET]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[MODEL,[VENDOR,"Dell"],[TYPE,TABLET]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[MODEL,[VENDOR,"Verizon"],[TYPE,TABLET]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[VENDOR,"Barnes & Noble"],MODEL,[TYPE,TABLET]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[MODEL,[VENDOR,"NuVision"],[TYPE,TABLET]],[/android.+;\s(k88)\sbuild/i],[MODEL,[VENDOR,"ZTE"],[TYPE,TABLET]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[MODEL,[VENDOR,"Swiss"],[TYPE,MOBILE]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[MODEL,[VENDOR,"Swiss"],[TYPE,TABLET]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[MODEL,[VENDOR,"Zeki"],[TYPE,TABLET]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[VENDOR,"Dragon Touch"],MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[MODEL,[VENDOR,"Insignia"],[TYPE,TABLET]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[MODEL,[VENDOR,"NextBook"],[TYPE,TABLET]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[VENDOR,"Voice"],MODEL,[TYPE,MOBILE]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[VENDOR,"LvTel"],MODEL,[TYPE,MOBILE]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[MODEL,[VENDOR,"Envizen"],[TYPE,TABLET]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[VENDOR,MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[MODEL,[VENDOR,"MachSpeed"],[TYPE,TABLET]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[VENDOR,MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[MODEL,[VENDOR,"Rotor"],[TYPE,TABLET]],[/android.+(KS(.+))\s+build/i],[MODEL,[VENDOR,"Amazon"],[TYPE,TABLET]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[VENDOR,MODEL,[TYPE,TABLET]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[TYPE,util.lowerize],VENDOR,MODEL],[/(android[\w\.\s\-]{0,9});.+build/i],[MODEL,[VENDOR,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[VERSION,[NAME,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[NAME,VERSION],[/rv\:([\w\.]{1,9}).+(gecko)/i],[VERSION,NAME]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[NAME,VERSION],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[NAME,[VERSION,mapper.str,maps.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[NAME,"Windows"],[VERSION,mapper.str,maps.os.windows.version]],[/\((bb)(10);/i],[[NAME,"BlackBerry"],VERSION],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,/linux;.+(sailfish);/i],[NAME,VERSION],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[NAME,"Symbian"],VERSION],[/\((series40);/i],[NAME],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[NAME,"Firefox OS"],VERSION],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[NAME,VERSION],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[NAME,"Chromium OS"],VERSION],[/(sunos)\s?([\w\.\d]*)/i],[[NAME,"Solaris"],VERSION],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[NAME,VERSION],[/(haiku)\s(\w+)/i],[NAME,VERSION],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[VERSION,/_/g,"."],[NAME,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[NAME,"Mac OS"],[VERSION,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]*)/i],[NAME,VERSION]]};var UAParser=function(uastring,extensions){if(typeof uastring==="object"){extensions=uastring;uastring=undefined}if(!(this instanceof UAParser)){return new UAParser(uastring,extensions).getResult()}var ua=uastring||(window&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:EMPTY);var rgxmap=extensions?util.extend(regexes,extensions):regexes;this.getBrowser=function(){var browser={name:undefined,version:undefined};mapper.rgx.call(browser,ua,rgxmap.browser);browser.major=util.major(browser.version);return browser};this.getCPU=function(){var cpu={architecture:undefined};mapper.rgx.call(cpu,ua,rgxmap.cpu);return cpu};this.getDevice=function(){var device={vendor:undefined,model:undefined,type:undefined};mapper.rgx.call(device,ua,rgxmap.device);return device};this.getEngine=function(){var engine={name:undefined,version:undefined};mapper.rgx.call(engine,ua,rgxmap.engine);return engine};this.getOS=function(){var os={name:undefined,version:undefined};mapper.rgx.call(os,ua,rgxmap.os);return os};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return ua};this.setUA=function(uastring){ua=uastring;return this};return this};UAParser.VERSION=LIBVERSION;UAParser.BROWSER={NAME:NAME,MAJOR:MAJOR,VERSION:VERSION};UAParser.CPU={ARCHITECTURE:ARCHITECTURE};UAParser.DEVICE={MODEL:MODEL,VENDOR:VENDOR,TYPE:TYPE,CONSOLE:CONSOLE,MOBILE:MOBILE,SMARTTV:SMARTTV,TABLET:TABLET,WEARABLE:WEARABLE,EMBEDDED:EMBEDDED};UAParser.ENGINE={NAME:NAME,VERSION:VERSION};UAParser.OS={NAME:NAME,VERSION:VERSION};if(typeof exports!==UNDEF_TYPE){if(typeof module!==UNDEF_TYPE&&module.exports){exports=module.exports=UAParser}exports.UAParser=UAParser}else{if("function"===FUNC_TYPE&&__nested_webpack_require_11768__(3)){!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return UAParser}).call(exports, __nested_webpack_require_11768__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}else if(window){window.UAParser=UAParser}}var $=window&&(window.jQuery||window.Zepto);if(typeof $!==UNDEF_TYPE){var parser=new UAParser;$.ua=parser.getResult();$.ua.get=function(){return parser.getUA()};$.ua.set=function(uastring){parser.setUA(uastring);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop]}}}})(typeof window==="object"?window:this);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 4 */
/***/ (function(module, exports, __nested_webpack_require_29664__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _require = __nested_webpack_require_29664__(0),
    DEVICE_TYPES = _require.DEVICE_TYPES,
    defaultData = _require.defaultData;

var checkType = function checkType(type) {
    switch (type) {
        case DEVICE_TYPES.MOBILE:
            return { isMobile: true };
        case DEVICE_TYPES.TABLET:
            return { isTablet: true };
        case DEVICE_TYPES.SMART_TV:
            return { isSmartTV: true };
        case DEVICE_TYPES.CONSOLE:
            return { isConsole: true };
        case DEVICE_TYPES.WEARABLE:
            return { isWearable: true };
        case DEVICE_TYPES.BROWSER:
            return { isBrowser: true };
        default:
            return defaultData;
    }
};

var broPayload = function broPayload(isBrowser, browser, engine, os, ua) {
    return {
        isBrowser: isBrowser,
        browserMajorVersion: browser.major,
        browserFullVersion: browser.version,
        browserName: browser.name,
        engineName: engine.name || false,
        engineVersion: engine.version,
        osName: os.name,
        osVersion: os.version,
        userAgent: ua
    };
};

var mobilePayload = function mobilePayload(type, device, os, ua) {
    return _extends({}, type, {
        vendor: device.vendor,
        model: device.model,
        os: os.name,
        osVersion: os.version,
        ua: ua
    });
};

var stvPayload = function stvPayload(isSmartTV, engine, os, ua) {
    return {
        isSmartTV: isSmartTV,
        engineName: engine.name,
        engineVersion: engine.version,
        osName: os.name,
        osVersion: os.version,
        userAgent: ua
    };
};

var consolePayload = function consolePayload(isConsole, engine, os, ua) {
    return {
        isConsole: isConsole,
        engineName: engine.name,
        engineVersion: engine.version,
        osName: os.name,
        osVersion: os.version,
        userAgent: ua
    };
};

var wearPayload = function wearPayload(isWearable, engine, os, ua) {
    return {
        isWearable: isWearable,
        engineName: engine.name,
        engineVersion: engine.version,
        osName: os.name,
        osVersion: os.version,
        userAgent: ua
    };
};

var getNavigatorInstance = exports.getNavigatorInstance = function getNavigatorInstance() {
    if (typeof window !== 'undefined') {
        if (window.navigator || navigator) {
            return window.navigator || navigator;
        }
    }

    return false;
};

var isIOS13Check = exports.isIOS13Check = function isIOS13Check(type) {
    var nav = getNavigatorInstance();
    return nav && nav.platform && (nav.platform.indexOf(type) !== -1 || nav.platform === 'MacIntel' && nav.maxTouchPoints > 1 && !window.MSStream);
};

module.exports = {
    checkType: checkType,
    broPayload: broPayload,
    mobilePayload: mobilePayload,
    stvPayload: stvPayload,
    consolePayload: consolePayload,
    wearPayload: wearPayload,
    getNavigatorInstance: getNavigatorInstance,
    isIOS13Check: isIOS13Check
};

/***/ })
/******/ ]);

/***/ }),

/***/ "./src/Bomb/bomb.ts":
/*!**************************!*\
  !*** ./src/Bomb/bomb.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bomb = void 0;
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
var locomotion_1 = __webpack_require__(/*! ./components/locomotion */ "./src/Bomb/components/locomotion/index.ts");
var components_1 = __webpack_require__(/*! ./components */ "./src/Bomb/components/index.ts");
var explosionComponent_1 = __importDefault(__webpack_require__(/*! ./components/explosion/explosionComponent */ "./src/Bomb/components/explosion/explosionComponent.ts"));
var Bomb = /** @class */ (function (_super) {
    __extends(Bomb, _super);
    function Bomb(Player, grid) {
        var _this = _super.call(this) || this;
        _this.Player = Player;
        _this._locomotionComponent = new locomotion_1.BombLocomotionComponent(_this);
        _this._bombExplosionComponent = new explosionComponent_1.default(_this, grid);
        return _this;
    }
    Object.defineProperty(Bomb.prototype, "Position", {
        get: function () {
            return this._locomotionComponent.Position;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bomb.prototype, "Node", {
        get: function () {
            return this._locomotionComponent.Node;
        },
        set: function (node) {
            this._locomotionComponent.Node = node;
        },
        enumerable: false,
        configurable: true
    });
    Bomb.prototype.Awake = function () {
        this.AddComponent(this._locomotionComponent);
        this.AddComponent(new components_1.BombDrawComponent(this));
        this.AddComponent(this._bombExplosionComponent);
        _super.prototype.Awake.call(this);
    };
    Bomb.prototype.Update = function (deltaTime) {
        _super.prototype.Update.call(this, deltaTime);
    };
    return Bomb;
}(utils_1.Entity));
exports.Bomb = Bomb;


/***/ }),

/***/ "./src/Bomb/components/draw/draw.ts":
/*!******************************************!*\
  !*** ./src/Bomb/components/draw/draw.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BombDrawComponent = void 0;
var utils_1 = __webpack_require__(/*! ../../../utils */ "./src/utils/index.ts");
var canvas_layer_1 = __webpack_require__(/*! ../../../canvas-layer */ "./src/canvas-layer/index.ts");
var settings_1 = __webpack_require__(/*! ../../../settings */ "./src/settings/index.ts");
var BombDrawComponent = /** @class */ (function () {
    function BombDrawComponent(entity) {
        this.Entity = entity;
    }
    Object.defineProperty(BombDrawComponent.prototype, "Position", {
        get: function () {
            var position = this.Entity.Position;
            if (!position) {
                throw new Error("Attempt to draw a bomb that has no Position");
            }
            return position;
        },
        enumerable: false,
        configurable: true
    });
    BombDrawComponent.prototype.Awake = function () {
        return;
    };
    BombDrawComponent.prototype.Update = function () {
        if (this.Entity.Node) {
            this.Clear();
            this.Draw();
        }
    };
    BombDrawComponent.prototype.Draw = function () {
        canvas_layer_1.CanvasLayer.BombLayer.DrawBomb(this.Position);
    };
    BombDrawComponent.prototype.Clear = function () {
        canvas_layer_1.CanvasLayer.Foreground.ClearRect(new utils_1.Vector2D(this.Position.x - settings_1.Settings.grid.nodeSize / 2, this.Position.y - settings_1.Settings.grid.nodeSize / 2), new utils_1.Vector2D(settings_1.Settings.grid.nodeSize, settings_1.Settings.grid.nodeSize));
    };
    return BombDrawComponent;
}());
exports.BombDrawComponent = BombDrawComponent;


/***/ }),

/***/ "./src/Bomb/components/draw/index.ts":
/*!*******************************************!*\
  !*** ./src/Bomb/components/draw/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./draw */ "./src/Bomb/components/draw/draw.ts"), exports);


/***/ }),

/***/ "./src/Bomb/components/explosion/explosionComponent.ts":
/*!*************************************************************!*\
  !*** ./src/Bomb/components/explosion/explosionComponent.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(/*! ../../../utils */ "./src/utils/index.ts");
var settings_1 = __webpack_require__(/*! ../../../settings */ "./src/settings/index.ts");
var node_1 = __webpack_require__(/*! ../../../node */ "./src/node/index.ts");
var canvas_layer_1 = __webpack_require__(/*! ../../../canvas-layer */ "./src/canvas-layer/index.ts");
var ExplosionComponent = /** @class */ (function () {
    function ExplosionComponent(bomb, _grid) {
        this._grid = _grid;
        this.Entity = bomb;
        this._remainingTime = settings_1.Settings.bombs.duration / 1000;
    }
    ExplosionComponent.prototype.Awake = function () {
        return;
    };
    ExplosionComponent.prototype.Update = function (deltaTime) {
        if (this.Entity.Node) {
            this._remainingTime -= deltaTime;
            if (this._remainingTime <= 0) {
                this.explosionEffect();
            }
        }
        else {
            this._remainingTime = settings_1.Settings.bombs.duration / 1000;
        }
    };
    ExplosionComponent.prototype.explosionEffect = function () {
        var _this = this;
        if (this.Entity.Node) {
            var currentNodeIdx = this._grid.Nodes.indexOf(this.Entity.Node);
            var explosionNodes_1 = this.getNodesToExplode(currentNodeIdx);
            explosionNodes_1.forEach(function (node) {
                canvas_layer_1.CanvasLayer.Foreground2.DrawExplosion(node.Center);
            });
            setTimeout(function () {
                explosionNodes_1.forEach(function (node) {
                    if (node.BuildState === node_1.BuildState.ground) {
                        node.BuildState = node_1.BuildState.none;
                    }
                    if (node.Player) {
                        node.Player.IsAlive = false;
                    }
                    if (node.Bot) {
                        node.Bot.IsAlive = false;
                    }
                    _this.Clear(node.Start);
                });
            }, 500);
            this.Entity.Node = null;
        }
    };
    ExplosionComponent.prototype.getNodesToExplode = function (nodeIdx) {
        var res = new Set();
        var boardDim = settings_1.Settings.grid.dimension;
        var x = nodeIdx % boardDim;
        var y = Math.floor(nodeIdx / boardDim);
        res.add(this._grid.Nodes[x + y * boardDim]);
        for (var i = x; i >= Math.max(x - 2, 0); i--) {
            var currentNode = this._grid.Nodes[i + y * boardDim];
            if (currentNode.BuildState === node_1.BuildState.block) {
                break;
            }
            else if (currentNode.BuildState === node_1.BuildState.ground) {
                res.add(currentNode);
                break;
            }
            else {
                res.add(currentNode);
            }
        }
        for (var i = y; i >= Math.max(y - 2, 0); i--) {
            var currentNode = this._grid.Nodes[x + i * boardDim];
            if (currentNode.BuildState === node_1.BuildState.block) {
                break;
            }
            else if (currentNode.BuildState === node_1.BuildState.ground) {
                res.add(currentNode);
                break;
            }
            else {
                res.add(currentNode);
            }
        }
        for (var i = x; i <= Math.min(x + 2, boardDim - 1); i++) {
            var currentNode = this._grid.Nodes[i + y * boardDim];
            if (currentNode.BuildState === node_1.BuildState.block) {
                break;
            }
            else if (currentNode.BuildState === node_1.BuildState.ground) {
                res.add(currentNode);
                break;
            }
            else {
                res.add(currentNode);
            }
        }
        for (var i = y; i <= Math.min(y + 2, boardDim - 1); i++) {
            var currentNode = this._grid.Nodes[x + i * boardDim];
            if (currentNode.BuildState === node_1.BuildState.block) {
                break;
            }
            else if (currentNode.BuildState === node_1.BuildState.ground) {
                res.add(currentNode);
                break;
            }
            else {
                res.add(currentNode);
            }
        }
        return Array.from(res);
    };
    ExplosionComponent.prototype.Clear = function (startPosition) {
        canvas_layer_1.CanvasLayer.Foreground2.ClearRect(new utils_1.Vector2D(startPosition.x, startPosition.y), new utils_1.Vector2D(settings_1.Settings.grid.nodeSize, settings_1.Settings.grid.nodeSize));
    };
    return ExplosionComponent;
}());
exports.default = ExplosionComponent;


/***/ }),

/***/ "./src/Bomb/components/index.ts":
/*!**************************************!*\
  !*** ./src/Bomb/components/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./draw */ "./src/Bomb/components/draw/index.ts"), exports);


/***/ }),

/***/ "./src/Bomb/components/locomotion/index.ts":
/*!*************************************************!*\
  !*** ./src/Bomb/components/locomotion/index.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./locomotion */ "./src/Bomb/components/locomotion/locomotion.ts"), exports);


/***/ }),

/***/ "./src/Bomb/components/locomotion/locomotion.ts":
/*!******************************************************!*\
  !*** ./src/Bomb/components/locomotion/locomotion.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BombLocomotionComponent = void 0;
var BombLocomotionComponent = /** @class */ (function () {
    function BombLocomotionComponent(Entity) {
        this._node = null;
        this.Entity = Entity;
    }
    Object.defineProperty(BombLocomotionComponent.prototype, "Node", {
        get: function () {
            return this._node;
        },
        set: function (v) {
            this._node = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BombLocomotionComponent.prototype, "Position", {
        get: function () {
            return this.Node ? this.Node.Center : null;
        },
        enumerable: false,
        configurable: true
    });
    BombLocomotionComponent.prototype.Awake = function () {
        /* @todo */
    };
    BombLocomotionComponent.prototype.Update = function () {
        /* @todo */
    };
    return BombLocomotionComponent;
}());
exports.BombLocomotionComponent = BombLocomotionComponent;


/***/ }),

/***/ "./src/Bomb/index.ts":
/*!***************************!*\
  !*** ./src/Bomb/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./bomb */ "./src/Bomb/bomb.ts"), exports);


/***/ }),

/***/ "./src/Player/components/draw/draw.ts":
/*!********************************************!*\
  !*** ./src/Player/components/draw/draw.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerDrawComponent = void 0;
var utils_1 = __webpack_require__(/*! ../../../utils */ "./src/utils/index.ts");
var canvas_layer_1 = __webpack_require__(/*! ../../../canvas-layer */ "./src/canvas-layer/index.ts");
var settings_1 = __webpack_require__(/*! ../../../settings */ "./src/settings/index.ts");
var PlayerDrawComponent = /** @class */ (function () {
    function PlayerDrawComponent(entity) {
        this.Entity = entity;
    }
    Object.defineProperty(PlayerDrawComponent.prototype, "Position", {
        get: function () {
            var position = this.Entity.Position;
            if (!position) {
                throw new Error("Attempt to draw a player that has no Position");
            }
            return position;
        },
        enumerable: false,
        configurable: true
    });
    PlayerDrawComponent.prototype.Awake = function () {
        this.Clear();
    };
    PlayerDrawComponent.prototype.Update = function () {
        this.Clear();
        if (this.Entity.IsAlive) {
            this.Draw();
        }
    };
    PlayerDrawComponent.prototype.Draw = function () {
        canvas_layer_1.CanvasLayer.Foreground.DrawPlayer(this.Position, this.Entity.Team);
    };
    PlayerDrawComponent.prototype.Clear = function () {
        canvas_layer_1.CanvasLayer.Foreground2.ClearRect(new utils_1.Vector2D(this.Position.x - settings_1.Settings.grid.nodeSize / 2, this.Position.y - settings_1.Settings.grid.nodeSize / 2), new utils_1.Vector2D(settings_1.Settings.grid.nodeSize, settings_1.Settings.grid.nodeSize));
    };
    return PlayerDrawComponent;
}());
exports.PlayerDrawComponent = PlayerDrawComponent;


/***/ }),

/***/ "./src/Player/components/draw/index.ts":
/*!*********************************************!*\
  !*** ./src/Player/components/draw/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./draw */ "./src/Player/components/draw/draw.ts"), exports);


/***/ }),

/***/ "./src/Player/components/index.ts":
/*!****************************************!*\
  !*** ./src/Player/components/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./draw */ "./src/Player/components/draw/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./locomotion */ "./src/Player/components/locomotion/index.ts"), exports);


/***/ }),

/***/ "./src/Player/components/locomotion/index.ts":
/*!***************************************************!*\
  !*** ./src/Player/components/locomotion/index.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./locomotion */ "./src/Player/components/locomotion/locomotion.ts"), exports);


/***/ }),

/***/ "./src/Player/components/locomotion/locomotion.ts":
/*!********************************************************!*\
  !*** ./src/Player/components/locomotion/locomotion.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerLocomotionComponent = void 0;
var PlayerLocomotionComponent = /** @class */ (function () {
    function PlayerLocomotionComponent() {
        this._node = null;
    }
    Object.defineProperty(PlayerLocomotionComponent.prototype, "Node", {
        get: function () {
            return this._node;
        },
        set: function (v) {
            this._node = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlayerLocomotionComponent.prototype, "Position", {
        get: function () {
            return this.Node ? this.Node.Center : null;
        },
        enumerable: false,
        configurable: true
    });
    PlayerLocomotionComponent.prototype.Awake = function () {
        /* @todo */
    };
    PlayerLocomotionComponent.prototype.Update = function () {
        /* @todo */
    };
    return PlayerLocomotionComponent;
}());
exports.PlayerLocomotionComponent = PlayerLocomotionComponent;


/***/ }),

/***/ "./src/Player/index.ts":
/*!*****************************!*\
  !*** ./src/Player/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./player */ "./src/Player/player.ts"), exports);


/***/ }),

/***/ "./src/Player/player.ts":
/*!******************************!*\
  !*** ./src/Player/player.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Player = void 0;
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
var team_1 = __webpack_require__(/*! ../team */ "./src/team/index.ts");
var Bomb_1 = __webpack_require__(/*! ../Bomb */ "./src/Bomb/index.ts");
var settings_1 = __webpack_require__(/*! ../settings */ "./src/settings/index.ts");
var node_1 = __webpack_require__(/*! ../node */ "./src/node/index.ts");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(Team, grid, startNodeIdx) {
        var _this = _super.call(this) || this;
        _this.Team = Team;
        _this._entities = [];
        _this._isAlive = true;
        _this._locomotionComponent = new team_1.PlayerLocomotionComponent();
        _this._grid = grid;
        _this._locomotionComponent.Node = grid.Nodes[startNodeIdx];
        _this._currentNodeIdx = startNodeIdx;
        _this._playerDrawComponent = new team_1.PlayerDrawComponent(_this);
        _this._bomb = new Bomb_1.Bomb(_this, grid);
        _this._entities.push(_this._bomb);
        return _this;
    }
    Object.defineProperty(Player.prototype, "Entities", {
        get: function () {
            return this._entities;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "IsAlive", {
        get: function () {
            return this._isAlive;
        },
        set: function (value) {
            this._isAlive = value;
        },
        enumerable: false,
        configurable: true
    });
    Player.prototype.Move = function (x, y) {
        var currentPos = this._currentNodeIdx;
        var currentNode = this._grid.Nodes[currentPos];
        currentNode.BuildState = node_1.BuildState.none;
        currentNode.Player = undefined;
        var dim = settings_1.Settings.grid.dimension;
        var currX = currentPos % dim;
        var currY = Math.floor(currentPos / dim);
        if (currY === 0 && y === -1)
            return;
        if (currY === dim - 1 && y === 1)
            return;
        if (currX === 0 && x === -1)
            return;
        if (currX === dim - 1 && x === 1)
            return;
        this._currentNodeIdx = currentPos + x + y * dim;
        if (this._grid.Nodes[this._currentNodeIdx].BuildState !== node_1.BuildState.none) {
            this._currentNodeIdx = currentPos;
        }
        var nextNode = this._grid.Nodes[this._currentNodeIdx];
        nextNode.BuildState = node_1.BuildState.player;
        nextNode.Player = this;
        this._locomotionComponent.Node = nextNode;
    };
    Player.prototype.SetBomb = function () {
        if (!this._bomb.Node) {
            this._bomb.Node = this._locomotionComponent.Node;
        }
    };
    Object.defineProperty(Player.prototype, "Position", {
        get: function () {
            return this._locomotionComponent.Position;
        },
        enumerable: false,
        configurable: true
    });
    Player.prototype.Awake = function () {
        this.AddComponent(this._locomotionComponent);
        this.AddComponent(this._playerDrawComponent);
        _super.prototype.Awake.call(this);
        for (var _i = 0, _a = this.Entities; _i < _a.length; _i++) {
            var entity = _a[_i];
            entity.Awake();
        }
    };
    Player.prototype.Update = function (deltaTime) {
        _super.prototype.Update.call(this, deltaTime);
        for (var _i = 0, _a = this.Entities; _i < _a.length; _i++) {
            var entity = _a[_i];
            entity.Update(deltaTime);
        }
    };
    return Player;
}(utils_1.Entity));
exports.Player = Player;


/***/ }),

/***/ "./src/bot/bot.ts":
/*!************************!*\
  !*** ./src/bot/bot.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bot = void 0;
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
var settings_1 = __webpack_require__(/*! ../settings */ "./src/settings/index.ts");
var components_1 = __webpack_require__(/*! ./components */ "./src/bot/components/index.ts");
var node_1 = __webpack_require__(/*! ../node */ "./src/node/index.ts");
var Bot = /** @class */ (function (_super) {
    __extends(Bot, _super);
    function Bot(Team, grid, startNodeIdx) {
        var _this = _super.call(this) || this;
        _this.Team = Team;
        _this._isAlive = true;
        _this._locomotionComponent = new components_1.BotLocomotionComponent();
        _this._grid = grid;
        _this._locomotionComponent.Node = grid.Nodes[startNodeIdx];
        _this._currentNodeIdx = startNodeIdx;
        return _this;
    }
    Object.defineProperty(Bot.prototype, "IsAlive", {
        get: function () {
            return this._isAlive;
        },
        set: function (value) {
            this._isAlive = value;
        },
        enumerable: false,
        configurable: true
    });
    Bot.prototype.Move = function () {
        var _this = this;
        setInterval(function () {
            var move = [
                { x: 0, y: 1 },
                { x: 0, y: -1 },
                { x: 1, y: 0 },
                { x: -1, y: 0 },
            ];
            var rand = Math.floor(Math.random() * 4);
            var currentPos = _this._currentNodeIdx;
            var currentNode = _this._grid.Nodes[_this._currentNodeIdx];
            currentNode.BuildState = node_1.BuildState.none;
            currentNode.Bot = undefined;
            var dim = settings_1.Settings.grid.dimension;
            var currX = currentPos % dim;
            var currY = Math.floor(currentPos / dim);
            if (currY === 0 && move[rand].y === -1)
                return;
            if (currY === dim - 1 && move[rand].y === 1)
                return;
            if (currX === 0 && move[rand].x === -1)
                return;
            if (currX === dim - 1 && move[rand].x === 1)
                return;
            _this._currentNodeIdx = currentPos + move[rand].x + move[rand].y * dim;
            if (_this._grid.Nodes[_this._currentNodeIdx].BuildState !== node_1.BuildState.none) {
                _this._currentNodeIdx = currentPos;
            }
            var nextNode = _this._grid.Nodes[_this._currentNodeIdx];
            nextNode.BuildState = node_1.BuildState.player;
            nextNode.Bot = _this;
            _this._locomotionComponent.Node = nextNode;
        }, 1000);
    };
    Object.defineProperty(Bot.prototype, "Position", {
        get: function () {
            return this._locomotionComponent.Position;
        },
        enumerable: false,
        configurable: true
    });
    Bot.prototype.Awake = function () {
        this.AddComponent(this._locomotionComponent);
        this.AddComponent(new components_1.BotDrawComponent(this));
        _super.prototype.Awake.call(this);
        this.Move();
    };
    Bot.prototype.Update = function (deltaTime) {
        _super.prototype.Update.call(this, deltaTime);
    };
    return Bot;
}(utils_1.Entity));
exports.Bot = Bot;


/***/ }),

/***/ "./src/bot/components/draw/draw.ts":
/*!*****************************************!*\
  !*** ./src/bot/components/draw/draw.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BotDrawComponent = void 0;
var utils_1 = __webpack_require__(/*! ../../../utils */ "./src/utils/index.ts");
var canvas_layer_1 = __webpack_require__(/*! ../../../canvas-layer */ "./src/canvas-layer/index.ts");
var settings_1 = __webpack_require__(/*! ../../../settings */ "./src/settings/index.ts");
var BotDrawComponent = /** @class */ (function () {
    function BotDrawComponent(entity) {
        this.Entity = entity;
    }
    Object.defineProperty(BotDrawComponent.prototype, "Position", {
        get: function () {
            var position = this.Entity.Position;
            if (!position) {
                throw new Error("Attempt to draw a bot that has no Position");
            }
            return position;
        },
        enumerable: false,
        configurable: true
    });
    BotDrawComponent.prototype.Awake = function () {
        this.Clear();
    };
    BotDrawComponent.prototype.Update = function () {
        this.Clear();
        if (this.Entity.IsAlive) {
            this.Draw();
        }
    };
    BotDrawComponent.prototype.Draw = function () {
        canvas_layer_1.CanvasLayer.Foreground.DrawPlayerBot(this.Position);
    };
    BotDrawComponent.prototype.Clear = function () {
        canvas_layer_1.CanvasLayer.Foreground.ClearRect(new utils_1.Vector2D(this.Position.x - settings_1.Settings.grid.nodeSize / 2, this.Position.y - settings_1.Settings.grid.nodeSize / 2), new utils_1.Vector2D(settings_1.Settings.grid.nodeSize, settings_1.Settings.grid.nodeSize));
    };
    return BotDrawComponent;
}());
exports.BotDrawComponent = BotDrawComponent;


/***/ }),

/***/ "./src/bot/components/draw/index.ts":
/*!******************************************!*\
  !*** ./src/bot/components/draw/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./draw */ "./src/bot/components/draw/draw.ts"), exports);


/***/ }),

/***/ "./src/bot/components/index.ts":
/*!*************************************!*\
  !*** ./src/bot/components/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./locomotion */ "./src/bot/components/locomotion/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./draw */ "./src/bot/components/draw/index.ts"), exports);


/***/ }),

/***/ "./src/bot/components/locomotion/index.ts":
/*!************************************************!*\
  !*** ./src/bot/components/locomotion/index.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./locomotion */ "./src/bot/components/locomotion/locomotion.ts"), exports);


/***/ }),

/***/ "./src/bot/components/locomotion/locomotion.ts":
/*!*****************************************************!*\
  !*** ./src/bot/components/locomotion/locomotion.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BotLocomotionComponent = void 0;
var BotLocomotionComponent = /** @class */ (function () {
    function BotLocomotionComponent() {
        this._node = null;
    }
    Object.defineProperty(BotLocomotionComponent.prototype, "Node", {
        get: function () {
            return this._node;
        },
        set: function (v) {
            this._node = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BotLocomotionComponent.prototype, "Position", {
        get: function () {
            return this.Node ? this.Node.Center : null;
        },
        enumerable: false,
        configurable: true
    });
    BotLocomotionComponent.prototype.Awake = function () {
        /* @todo */
    };
    BotLocomotionComponent.prototype.Update = function () {
        /* @todo */
    };
    return BotLocomotionComponent;
}());
exports.BotLocomotionComponent = BotLocomotionComponent;


/***/ }),

/***/ "./src/bot/index.ts":
/*!**************************!*\
  !*** ./src/bot/index.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./bot */ "./src/bot/bot.ts"), exports);


/***/ }),

/***/ "./src/canvas-layer/canvas-layer.ts":
/*!******************************************!*\
  !*** ./src/canvas-layer/canvas-layer.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasLayer = void 0;
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
var settings_1 = __webpack_require__(/*! ../settings */ "./src/settings/index.ts");
var CanvasLayer = /** @class */ (function () {
    function CanvasLayer() {
    }
    CanvasLayer.InitCanvas = function (style) {
        var size = (settings_1.Settings.grid.nodeSize + settings_1.Settings.grid.nodeOffset) *
            settings_1.Settings.grid.dimension +
            settings_1.Settings.grid.nodeOffset;
        var canvas = new utils_1.Canvas(new utils_1.Vector2D(size, size));
        canvas.Awake();
        canvas.SetStyle(style);
        return canvas;
    };
    Object.defineProperty(CanvasLayer, "Background", {
        get: function () {
            if (!this._background) {
                this._background = this.InitCanvas({ zIndex: "0" });
            }
            return this._background;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CanvasLayer, "BombLayer", {
        get: function () {
            if (!this._bombLayer) {
                this._bombLayer = this.InitCanvas({ zIndex: "1" });
            }
            return this._bombLayer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CanvasLayer, "Foreground", {
        get: function () {
            if (!this._foreground) {
                this._foreground = this.InitCanvas({ zIndex: "2" });
            }
            return this._foreground;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CanvasLayer, "Foreground2", {
        get: function () {
            if (!this._foreground2) {
                this._foreground2 = this.InitCanvas({ zIndex: "3" });
            }
            return this._foreground2;
        },
        enumerable: false,
        configurable: true
    });
    return CanvasLayer;
}());
exports.CanvasLayer = CanvasLayer;


/***/ }),

/***/ "./src/canvas-layer/index.ts":
/*!***********************************!*\
  !*** ./src/canvas-layer/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./canvas-layer */ "./src/canvas-layer/canvas-layer.ts"), exports);


/***/ }),

/***/ "./src/game/components/index.ts":
/*!**************************************!*\
  !*** ./src/game/components/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./input */ "./src/game/components/input/index.ts"), exports);


/***/ }),

/***/ "./src/game/components/input/index.ts":
/*!********************************************!*\
  !*** ./src/game/components/input/index.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./input */ "./src/game/components/input/input.ts"), exports);


/***/ }),

/***/ "./src/game/components/input/input.ts":
/*!********************************************!*\
  !*** ./src/game/components/input/input.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameInputComponent = void 0;
var Player_1 = __webpack_require__(/*! ../../../Player */ "./src/Player/index.ts");
var settings_1 = __webpack_require__(/*! ../../../settings */ "./src/settings/index.ts");
var GameInputComponent = /** @class */ (function () {
    function GameInputComponent(game) {
        this.Entity = game;
    }
    GameInputComponent.prototype.Awake = function () {
        document.body.addEventListener("keydown", this.HandleKeyInput.bind(this));
    };
    GameInputComponent.prototype.HandleKeyInput = function (e) {
        var _this = this;
        var locomotionKeys = new Map([
            ["ArrowUp", [0, -1]],
            ["ArrowDown", [0, 1]],
            ["ArrowRight", [1, 0]],
            ["ArrowLeft", [-1, 0]],
            ["KeyW", [0, -1]],
            ["KeyS", [0, 1]],
            ["KeyD", [1, 0]],
            ["KeyA", [-1, 0]],
        ]);
        var bombKeys = new Set(["Space"]);
        var bombKeys2 = new Set(["KeyE"]);
        var playerEntities = this.Entity.Entities.filter(function (x) { return x instanceof Player_1.Player; });
        if (locomotionKeys.has(e.code)) {
            /* eslint-disable @typescript-eslint/no-non-null-assertion */
            var _a = locomotionKeys.get(e.code), x_1 = _a[0], y_1 = _a[1];
            if (playerEntities[1]) {
                var playerBKeys = ["KeyW", "KeyS", "KeyD", "KeyA"];
                if (playerBKeys.includes(e.code)) {
                    setTimeout(function () { return playerEntities[1].Move(x_1, y_1); }, settings_1.Settings.movement.delay);
                }
                else {
                    setTimeout(function () { return playerEntities[0].Move(x_1, y_1); }, settings_1.Settings.movement.delay);
                }
            }
            else {
                setTimeout(function () { return playerEntities[0].Move(x_1, y_1); }, settings_1.Settings.movement.delay);
            }
        }
        else if (bombKeys.has(e.code)) {
            playerEntities[0].SetBomb();
        }
        else if (bombKeys2.has(e.code)) {
            playerEntities[1].SetBomb();
        }
        else {
            return;
        }
        window.requestAnimationFrame(function () {
            _this.Entity.Update();
        });
    };
    GameInputComponent.prototype.Update = function () {
        /* @todo */
    };
    return GameInputComponent;
}());
exports.GameInputComponent = GameInputComponent;


/***/ }),

/***/ "./src/game/game.ts":
/*!**************************!*\
  !*** ./src/game/game.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Game = void 0;
/* eslint-disable @typescript-eslint/no-non-null-assertion */
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
var grid_1 = __webpack_require__(/*! ../grid */ "./src/grid/index.ts");
var Player_1 = __webpack_require__(/*! ../Player */ "./src/Player/index.ts");
var bot_1 = __webpack_require__(/*! ../bot */ "./src/bot/index.ts");
var team_1 = __webpack_require__(/*! ../team */ "./src/team/index.ts");
var components_1 = __webpack_require__(/*! ./components */ "./src/game/components/index.ts");
var endgame_1 = __importDefault(__webpack_require__(/*! ../utils/game-end/endgame */ "./src/utils/game-end/endgame.ts"));
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._lastTimestamp = 0;
        _this._entities = [];
        _this._endGame = new endgame_1.default(_this);
        return _this;
    }
    Object.defineProperty(Game.prototype, "Entities", {
        get: function () {
            return this._entities;
        },
        enumerable: false,
        configurable: true
    });
    Game.prototype.Awake = function () {
        var _this = this;
        this.AddComponent(new components_1.GameInputComponent(this));
        _super.prototype.Awake.call(this);
        var grid = new grid_1.Grid();
        this._entities.push(grid, new Player_1.Player(team_1.Team.A, grid, 0));
        if (localStorage.getItem("isTwoPlayers") === "true") {
            this._entities.push(new Player_1.Player(team_1.Team.B, grid, grid.Nodes.length - 1));
        }
        this._entities.push(new bot_1.Bot(team_1.Team.B, grid, grid.Nodes.length - Math.floor(Math.random() * 63) + 1), new bot_1.Bot(team_1.Team.B, grid, grid.Nodes.length - Math.floor(Math.random() * 63) + 1));
        for (var _i = 0, _a = this.Entities; _i < _a.length; _i++) {
            var entity = _a[_i];
            entity.Awake();
        }
        window.requestAnimationFrame(function () {
            _this._lastTimestamp = Date.now();
            _this.Update();
        });
        this.countdown();
        this.showPlayersNamesOnSidePanel();
    };
    Game.prototype.countdown = function () {
        var _a;
        var seconds = (_a = document.getElementById("countdown")) === null || _a === void 0 ? void 0 : _a.textContent;
        var countdown = setInterval(function () {
            if (seconds && parseInt(seconds)) {
                seconds = (parseInt(seconds) - 1).toString();
                document.getElementById("countdown").textContent = seconds;
            }
            else {
                clearInterval(countdown);
            }
            if (seconds == "0") {
                document.body.innerHTML = "";
            }
        }, 1000);
        if (seconds == "0") {
            document.body.innerHTML = "";
        }
    };
    Game.prototype.showPlayersNamesOnSidePanel = function () {
        var player1name = document.getElementById("player1");
        var player2name = document.getElementById("player2");
        var player2div = document.querySelector("#player2-box");
        if (player1name) {
            player1name.textContent = localStorage.getItem("Player1Name");
        }
        if (localStorage.getItem("Player2Name") && player2name) {
            player2name.textContent = localStorage.getItem("Player2Name");
        }
        else {
            if (player2div && player2div.parentNode) {
                player2div.parentNode.removeChild(player2div);
            }
        }
    };
    Game.prototype.Update = function () {
        var _this = this;
        this._endGame.Update();
        var deltaTime = (Date.now() - this._lastTimestamp) / 1000;
        _super.prototype.Update.call(this, deltaTime);
        for (var _i = 0, _a = this.Entities; _i < _a.length; _i++) {
            var entity = _a[_i];
            entity.Update(deltaTime);
        }
        if (!this._endGame.EndOfGame) {
            this._lastTimestamp = Date.now();
            window.requestAnimationFrame(function () { return _this.Update(); });
        }
    };
    return Game;
}(utils_1.Entity));
exports.Game = Game;


/***/ }),

/***/ "./src/game/index.ts":
/*!***************************!*\
  !*** ./src/game/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./game */ "./src/game/game.ts"), exports);
__exportStar(__webpack_require__(/*! ./components */ "./src/game/components/index.ts"), exports);


/***/ }),

/***/ "./src/grid/grid.ts":
/*!**************************!*\
  !*** ./src/grid/grid.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Grid = void 0;
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
var node_1 = __webpack_require__(/*! ../node */ "./src/node/index.ts");
var settings_1 = __webpack_require__(/*! ../settings */ "./src/settings/index.ts");
var Grid = /** @class */ (function (_super) {
    __extends(Grid, _super);
    function Grid() {
        var _this = _super.call(this) || this;
        _this._nodes = [];
        _this.InitNodes();
        return _this;
    }
    Object.defineProperty(Grid.prototype, "Nodes", {
        get: function () {
            return this._nodes;
        },
        enumerable: false,
        configurable: true
    });
    Grid.prototype.Awake = function () {
        _super.prototype.Awake.call(this);
        for (var _i = 0, _a = this._nodes; _i < _a.length; _i++) {
            var node = _a[_i];
            node.Awake();
        }
    };
    Grid.prototype.Update = function (deltaTime) {
        _super.prototype.Update.call(this, deltaTime);
        for (var _i = 0, _a = this._nodes; _i < _a.length; _i++) {
            var node = _a[_i];
            node.Update(deltaTime);
        }
    };
    Grid.prototype.InitNodes = function () {
        var size = settings_1.Settings.grid.nodeSize;
        var offset = settings_1.Settings.grid.nodeOffset;
        for (var y = 0; y < settings_1.Settings.grid.dimension; y++) {
            for (var x = 0; x < settings_1.Settings.grid.dimension; x++) {
                var start = new utils_1.Vector2D(x * (size + offset) + offset, y * (size + offset) + offset);
                var end = new utils_1.Vector2D(start.x + size, start.y + size);
                var node = void 0;
                var index = new utils_1.Vector2D(x, y);
                if (y % 2 === 1 && x % 2 === 1 && x > 0 && x < 8) {
                    node = new node_1.Node(start, end, index, node_1.BuildState.block);
                }
                else if (y % 2 === 1 && x % 2 === 0 && x > 0 && x < 8) {
                    node = new node_1.Node(start, end, index, node_1.BuildState.ground);
                }
                else {
                    node = new node_1.Node(start, end, index, node_1.BuildState.none);
                }
                this._nodes.push(node);
            }
        }
    };
    return Grid;
}(utils_1.Entity));
exports.Grid = Grid;


/***/ }),

/***/ "./src/grid/index.ts":
/*!***************************!*\
  !*** ./src/grid/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./grid */ "./src/grid/grid.ts"), exports);


/***/ }),

/***/ "./src/index-app.ts":
/*!**************************!*\
  !*** ./src/index-app.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./index.scss */ "./src/index.scss");
var Provider_1 = __importDefault(__webpack_require__(/*! ./services/Provider */ "./src/services/Provider.ts"));
var ConsoleReporting_1 = __importDefault(__webpack_require__(/*! ./services/ErrorReporting/ConsoleReporting */ "./src/services/ErrorReporting/ConsoleReporting.ts"));
var ResourceProvider_1 = __importDefault(__webpack_require__(/*! ./services/ResourceProvider */ "./src/services/ResourceProvider/index.ts"));
var MobileDetection_1 = __importDefault(__webpack_require__(/*! ./services/MobileDetection */ "./src/services/MobileDetection/index.ts"));
var PhoneOrientation_1 = __importDefault(__webpack_require__(/*! ./services/PhoneOrientation */ "./src/services/PhoneOrientation/index.ts"));
var Router_1 = __importDefault(__webpack_require__(/*! ./services/Router */ "./src/services/Router.ts"));
var registerDependencyFunc = function () {
    Provider_1.default.provide("errorReporting", new ConsoleReporting_1.default());
    Provider_1.default.provide("resourceProvider", new ResourceProvider_1.default());
    Provider_1.default.provide("mobileDetection", new MobileDetection_1.default());
    Provider_1.default.provide("phoneOrientation", new PhoneOrientation_1.default());
    Provider_1.default.provide("router", new Router_1.default());
};
var init = function () {
    registerDependencyFunc();
    var router = Provider_1.default.get("router");
    router.render();
};
exports.default = init();


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var index_app_1 = __importDefault(__webpack_require__(/*! ./index-app */ "./src/index-app.ts"));
exports.default = index_app_1.default;


/***/ }),

/***/ "./src/node/__tests__/mocks/index.ts":
/*!*******************************************!*\
  !*** ./src/node/__tests__/mocks/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./node.mock */ "./src/node/__tests__/mocks/node.mock.ts"), exports);


/***/ }),

/***/ "./src/node/__tests__/mocks/node.mock.ts":
/*!***********************************************!*\
  !*** ./src/node/__tests__/mocks/node.mock.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mockNodeFactory = void 0;
var node_1 = __webpack_require__(/*! ../../node */ "./src/node/node.ts");
var utils_1 = __webpack_require__(/*! ../../../utils */ "./src/utils/index.ts");
var components_1 = __webpack_require__(/*! ../../components */ "./src/node/components/index.ts");
var mockNodeFactory = function (start, end, index) {
    if (start === void 0) { start = new utils_1.Vector2D(0, 0); }
    if (end === void 0) { end = new utils_1.Vector2D(1, 1); }
    if (index === void 0) { index = new utils_1.Vector2D(0, 0); }
    return new node_1.Node(start, end, index, components_1.BuildState.none);
};
exports.mockNodeFactory = mockNodeFactory;


/***/ }),

/***/ "./src/node/components/build-state/BuildState.ts":
/*!*******************************************************!*\
  !*** ./src/node/components/build-state/BuildState.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BuildState = void 0;
var BuildState;
(function (BuildState) {
    BuildState[BuildState["none"] = 0] = "none";
    BuildState[BuildState["ground"] = 1] = "ground";
    BuildState[BuildState["block"] = 2] = "block";
    BuildState[BuildState["player"] = 3] = "player";
})(BuildState = exports.BuildState || (exports.BuildState = {}));


/***/ }),

/***/ "./src/node/components/build-state/index.ts":
/*!**************************************************!*\
  !*** ./src/node/components/build-state/index.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./BuildState */ "./src/node/components/build-state/BuildState.ts"), exports);


/***/ }),

/***/ "./src/node/components/draw/draw.ts":
/*!******************************************!*\
  !*** ./src/node/components/draw/draw.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NodeDrawComponent = void 0;
var settings_1 = __webpack_require__(/*! ../../../settings */ "./src/settings/index.ts");
var canvas_layer_1 = __webpack_require__(/*! ../../../canvas-layer */ "./src/canvas-layer/index.ts");
var build_state_1 = __webpack_require__(/*! ../build-state */ "./src/node/components/build-state/index.ts");
var NodeDrawComponent = /** @class */ (function () {
    function NodeDrawComponent() {
    }
    Object.defineProperty(NodeDrawComponent.prototype, "Entity", {
        get: function () {
            return this._Entity;
        },
        set: function (value) {
            this._Entity = value;
        },
        enumerable: false,
        configurable: true
    });
    NodeDrawComponent.prototype.Awake = function () {
        this.Clear();
    };
    NodeDrawComponent.prototype.Update = function () {
        this.Clear();
        this.Draw();
        this.DrawRect();
    };
    NodeDrawComponent.prototype.Draw = function () {
        canvas_layer_1.CanvasLayer.Background.FillRect(this._Entity.Start, this._Entity.Size, settings_1.Settings.grid.color);
    };
    NodeDrawComponent.prototype.DrawRect = function () {
        canvas_layer_1.CanvasLayer.Foreground.FillRect(this._Entity.Start, this._Entity.Size, settings_1.Settings.grid.color);
        switch (this.Entity.BuildState) {
            case build_state_1.BuildState.block:
                canvas_layer_1.CanvasLayer.Foreground.DrawBlock(this.Entity.Center);
                break;
            case build_state_1.BuildState.ground:
                canvas_layer_1.CanvasLayer.Foreground.DrawGround(this.Entity.Center);
                break;
            default:
        }
    };
    NodeDrawComponent.prototype.Clear = function () {
        canvas_layer_1.CanvasLayer.Background.ClearRect(this._Entity.Start, this._Entity.Size);
    };
    return NodeDrawComponent;
}());
exports.NodeDrawComponent = NodeDrawComponent;


/***/ }),

/***/ "./src/node/components/draw/index.ts":
/*!*******************************************!*\
  !*** ./src/node/components/draw/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./draw */ "./src/node/components/draw/draw.ts"), exports);


/***/ }),

/***/ "./src/node/components/index.ts":
/*!**************************************!*\
  !*** ./src/node/components/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./draw */ "./src/node/components/draw/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./build-state */ "./src/node/components/build-state/index.ts"), exports);


/***/ }),

/***/ "./src/node/index.ts":
/*!***************************!*\
  !*** ./src/node/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./node */ "./src/node/node.ts"), exports);
__exportStar(__webpack_require__(/*! ./components */ "./src/node/components/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./__tests__/mocks */ "./src/node/__tests__/mocks/index.ts"), exports);


/***/ }),

/***/ "./src/node/node.ts":
/*!**************************!*\
  !*** ./src/node/node.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Node = void 0;
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
var components_1 = __webpack_require__(/*! ./components */ "./src/node/components/index.ts");
var Node = /** @class */ (function (_super) {
    __extends(Node, _super);
    function Node(Start, End, Index, buildState) {
        var _this = _super.call(this) || this;
        _this.Start = Start;
        _this.End = End;
        _this.Index = Index;
        _this._player = undefined;
        _this._bot = undefined;
        _this._buildState = buildState;
        return _this;
    }
    Object.defineProperty(Node.prototype, "Size", {
        get: function () {
            return new utils_1.Vector2D(this.End.x - this.Start.x, this.End.y - this.Start.y);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "Center", {
        get: function () {
            return new utils_1.Vector2D(this.Start.x + this.Size.x / 2, this.Start.y + this.Size.y / 2);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "Bot", {
        get: function () {
            return this._bot;
        },
        set: function (value) {
            this._bot = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "Player", {
        get: function () {
            return this._player;
        },
        set: function (value) {
            this._player = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "BuildState", {
        get: function () {
            return this._buildState;
        },
        set: function (value) {
            this._buildState = value;
        },
        enumerable: false,
        configurable: true
    });
    Node.prototype.Awake = function () {
        this.AddComponent(new components_1.NodeDrawComponent());
        _super.prototype.Awake.call(this);
    };
    return Node;
}(utils_1.Entity));
exports.Node = Node;


/***/ }),

/***/ "./src/pages/gamePage/GamePage.ts":
/*!****************************************!*\
  !*** ./src/pages/gamePage/GamePage.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
var game_1 = __webpack_require__(/*! ../../game */ "./src/game/index.ts");
__webpack_require__(/*! ../gamePage/gamepage.scss */ "./src/pages/gamePage/gamepage.scss");
var GamePage = /** @class */ (function () {
    function GamePage() {
    }
    GamePage.prototype.render = function () {
        new game_1.Game().Awake();
    };
    return GamePage;
}());
exports.default = GamePage;


/***/ }),

/***/ "./src/pages/mainPage/MainPage.ts":
/*!****************************************!*\
  !*** ./src/pages/mainPage/MainPage.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../mainPage/main-page.scss */ "./src/pages/mainPage/main-page.scss");
var MainPage = /** @class */ (function () {
    function MainPage() {
        var _this = this;
        this.player1Nickname = "";
        this.player2Nickname = "";
        this.is2Players = false;
        this.descriptions = [
            "- Brick walls -",
            "- Collect bonuses -",
            " - Explode your enemies -",
        ];
        this.typedOptions = {
            strings: __spreadArrays(this.descriptions),
            typeSpeed: 40,
            loop: true,
            smartBackspace: true,
            backSpeed: 40,
        };
        this.initVariables = function () {
            _this.player1Input = document.querySelector("#player1");
            _this.player2Input = document.querySelector("#player2");
            _this.is2PlayersCheckbox = document.querySelector("#numberOfPlayers");
            _this.playersForm = document.querySelector(".player__form");
        };
        this.initEventListeners = function () {
            localStorage.clear();
            _this.getPlayer1Name();
            _this.getPlayer2Name();
            _this.checkIs2Players();
            _this.sendForm();
        };
        this.getPlayer1Name = function () {
            var _a;
            (_a = _this.player1Input) === null || _a === void 0 ? void 0 : _a.addEventListener("keyup", function (e) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                _this.player1Nickname = e.target.value;
            });
        };
        this.getPlayer2Name = function () {
            var _a;
            (_a = _this.player2Input) === null || _a === void 0 ? void 0 : _a.addEventListener("keyup", function (e) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                _this.player2Nickname = e.target.value;
            });
        };
        this.checkIs2Players = function () {
            if (_this.is2PlayersCheckbox) {
                _this.is2PlayersCheckbox.addEventListener("input", function (e) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    _this.is2Players = e.target.checked;
                    if (_this.player2Input) {
                        _this.is2Players
                            ? _this.player2Input.classList.add("player__name--show")
                            : _this.player2Input.classList.remove("player__name--show");
                    }
                });
            }
        };
        this.sendForm = function () {
            var _a;
            (_a = _this.playersForm) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
                e.preventDefault();
                localStorage.setItem("Player1Name", _this.player1Nickname);
                localStorage.setItem("isTwoPlayers", String(_this.is2Players));
                if (_this.is2Players) {
                    localStorage.setItem("Player2Name", _this.player2Nickname);
                }
                window.location.hash = "game";
            });
        };
    }
    MainPage.prototype.render = function () {
        this.initVariables();
        this.initEventListeners();
    };
    return MainPage;
}());
exports.default = MainPage;


/***/ }),

/***/ "./src/services/ErrorReporting/ConsoleReporting.ts":
/*!*********************************************************!*\
  !*** ./src/services/ErrorReporting/ConsoleReporting.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var ErrorReporting_1 = __importDefault(__webpack_require__(/*! ./ErrorReporting */ "./src/services/ErrorReporting/ErrorReporting.ts"));
var ConsoleReporting = /** @class */ (function (_super) {
    __extends(ConsoleReporting, _super);
    function ConsoleReporting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConsoleReporting.prototype.report = function (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    };
    return ConsoleReporting;
}(ErrorReporting_1.default));
exports.default = ConsoleReporting;


/***/ }),

/***/ "./src/services/ErrorReporting/ErrorReporting.ts":
/*!*******************************************************!*\
  !*** ./src/services/ErrorReporting/ErrorReporting.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var ErrorReporting = /** @class */ (function () {
    function ErrorReporting() {
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ErrorReporting.prototype.report = function (msg) {
        throw new Error("Not implemented");
    };
    return ErrorReporting;
}());
exports.default = ErrorReporting;


/***/ }),

/***/ "./src/services/MobileDetection/MobileDetection.ts":
/*!*********************************************************!*\
  !*** ./src/services/MobileDetection/MobileDetection.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var mobile_device_detect_1 = __webpack_require__(/*! mobile-device-detect */ "./node_modules/mobile-device-detect/dist/index.js");
var MobileDetectionService = /** @class */ (function () {
    function MobileDetectionService() {
    }
    MobileDetectionService.prototype.isMobileDevice = function () {
        return mobile_device_detect_1.isMobile;
    };
    MobileDetectionService.prototype.phoneOrientation = function () {
        return screen.orientation.type === "landscape-primary"
            ? "landscape"
            : "portrait";
    };
    return MobileDetectionService;
}());
exports.default = MobileDetectionService;


/***/ }),

/***/ "./src/services/MobileDetection/index.ts":
/*!***********************************************!*\
  !*** ./src/services/MobileDetection/index.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = void 0;
var MobileDetection_1 = __webpack_require__(/*! ./MobileDetection */ "./src/services/MobileDetection/MobileDetection.ts");
Object.defineProperty(exports, "default", ({ enumerable: true, get: function () { return __importDefault(MobileDetection_1).default; } }));


/***/ }),

/***/ "./src/services/PhoneOrientation/PhoneOrientation.ts":
/*!***********************************************************!*\
  !*** ./src/services/PhoneOrientation/PhoneOrientation.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Provider_1 = __importDefault(__webpack_require__(/*! ../Provider */ "./src/services/Provider.ts"));
var PhoneOrientationService = /** @class */ (function () {
    function PhoneOrientationService() {
        this.mobile = Provider_1.default.get("mobileDetection");
    }
    PhoneOrientationService.prototype.forceLandscape = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                window.addEventListener("click", function () {
                    if (document.documentElement) {
                        document.documentElement.requestFullscreen();
                        screen.orientation.lock("landscape-primary");
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    return PhoneOrientationService;
}());
exports.default = PhoneOrientationService;


/***/ }),

/***/ "./src/services/PhoneOrientation/index.ts":
/*!************************************************!*\
  !*** ./src/services/PhoneOrientation/index.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = void 0;
var PhoneOrientation_1 = __webpack_require__(/*! ./PhoneOrientation */ "./src/services/PhoneOrientation/PhoneOrientation.ts");
Object.defineProperty(exports, "default", ({ enumerable: true, get: function () { return __importDefault(PhoneOrientation_1).default; } }));


/***/ }),

/***/ "./src/services/Provider.ts":
/*!**********************************!*\
  !*** ./src/services/Provider.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var Provider = /** @class */ (function () {
    function Provider() {
        this._providers = new Map();
    }
    Provider.prototype.provide = function (moduleName, implementation) {
        this._providers.set(moduleName, implementation);
    };
    Provider.prototype.get = function (moduleName) {
        if (this._providers.has(moduleName)) {
            return this._providers.get(moduleName);
        }
        else {
            throw new Error("Attempt to get an unregistered provider " + moduleName);
        }
    };
    return Provider;
}());
exports.default = new Provider();


/***/ }),

/***/ "./src/services/ResourceProvider/AppResourceProvider.ts":
/*!**************************************************************!*\
  !*** ./src/services/ResourceProvider/AppResourceProvider.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var ResourceProvider_1 = __importDefault(__webpack_require__(/*! ./ResourceProvider */ "./src/services/ResourceProvider/ResourceProvider.ts"));
var resources = {};
var AppResourceProvider = /** @class */ (function (_super) {
    __extends(AppResourceProvider, _super);
    function AppResourceProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppResourceProvider.prototype.get = function (resourceName) {
        return resources[resourceName];
    };
    return AppResourceProvider;
}(ResourceProvider_1.default));
exports.default = AppResourceProvider;


/***/ }),

/***/ "./src/services/ResourceProvider/ResourceProvider.ts":
/*!***********************************************************!*\
  !*** ./src/services/ResourceProvider/ResourceProvider.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var ResourceProviderService = /** @class */ (function () {
    function ResourceProviderService() {
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ResourceProviderService.prototype.get = function (resourceName) {
        throw new Error("Not implemented");
    };
    return ResourceProviderService;
}());
exports.default = ResourceProviderService;


/***/ }),

/***/ "./src/services/ResourceProvider/index.ts":
/*!************************************************!*\
  !*** ./src/services/ResourceProvider/index.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = void 0;
var AppResourceProvider_1 = __webpack_require__(/*! ./AppResourceProvider */ "./src/services/ResourceProvider/AppResourceProvider.ts");
Object.defineProperty(exports, "default", ({ enumerable: true, get: function () { return __importDefault(AppResourceProvider_1).default; } }));


/***/ }),

/***/ "./src/services/Router.ts":
/*!********************************!*\
  !*** ./src/services/Router.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var MainPage_1 = __importDefault(__webpack_require__(/*! ../pages/mainPage/MainPage */ "./src/pages/mainPage/MainPage.ts"));
var GamePage_1 = __importDefault(__webpack_require__(/*! ../pages/gamePage/GamePage */ "./src/pages/gamePage/GamePage.ts"));
var main_page_html_1 = __importDefault(__webpack_require__(/*! ../pages/mainPage/main-page.html */ "./src/pages/mainPage/main-page.html"));
var gamepage_html_1 = __importDefault(__webpack_require__(/*! ../pages/gamePage/gamepage.html */ "./src/pages/gamePage/gamepage.html"));
var Router = /** @class */ (function () {
    function Router() {
        var _this = this;
        this.initVariable = function () {
            _this.appContainer = document.querySelector("#app");
        };
        this.initPage = function () {
            var hash = window.location.hash.split("#")[1];
            switch (hash) {
                case "main": {
                    if (_this.appContainer) {
                        _this.appContainer.innerHTML = main_page_html_1.default;
                        new MainPage_1.default().render();
                    }
                    break;
                }
                case "game": {
                    if (_this.appContainer) {
                        _this.appContainer.innerHTML = gamepage_html_1.default;
                        new GamePage_1.default().render();
                    }
                    break;
                }
                case "finish": {
                    if (_this.appContainer) {
                        _this.appContainer.innerHTML = "";
                    }
                    break;
                }
                default: {
                    window.location.href = "/#main";
                    break;
                }
            }
        };
        this.render = function () {
            _this.initPage();
            _this.initVariable();
            window.location.hash = "#";
            window.addEventListener("hashchange", function () {
                _this.initPage();
            });
        };
    }
    return Router;
}());
exports.default = Router;


/***/ }),

/***/ "./src/settings/index.ts":
/*!*******************************!*\
  !*** ./src/settings/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./settings */ "./src/settings/settings.ts"), exports);


/***/ }),

/***/ "./src/settings/settings.ts":
/*!**********************************!*\
  !*** ./src/settings/settings.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Settings = void 0;
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
exports.Settings = Object.freeze({
    grid: {
        dimension: 9,
        nodeSize: 100,
        nodeOffset: 10,
        color: new utils_1.Color(245, 245, 245, 1),
    },
    bombs: {
        numberOfBombs: 1,
        duration: 2500,
    },
    players: {
        radius: 40,
        colors: {
            a: new utils_1.Color(187, 222, 251, 1),
            b: new utils_1.Color(255, 236, 179, 1),
        },
    },
    movement: {
        delay: 200,
    },
});


/***/ }),

/***/ "./src/team/index.ts":
/*!***************************!*\
  !*** ./src/team/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./team */ "./src/team/team.ts"), exports);
__exportStar(__webpack_require__(/*! ../Player/components */ "./src/Player/components/index.ts"), exports);


/***/ }),

/***/ "./src/team/team.ts":
/*!**************************!*\
  !*** ./src/team/team.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Team = void 0;
var Team;
(function (Team) {
    Team[Team["A"] = 0] = "A";
    Team[Team["B"] = 1] = "B";
})(Team = exports.Team || (exports.Team = {}));


/***/ }),

/***/ "./src/utils/canvas/canvas.ts":
/*!************************************!*\
  !*** ./src/utils/canvas/canvas.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Canvas = void 0;
var utils_1 = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
var player1 = new Image();
var player2 = new Image();
var block = new Image();
var bot = new Image();
var ground = new Image();
var bomb = new Image();
var explosion = new Image();
player1.src = "https://svgshare.com/i/Thc.svg";
player2.src = "https://svgshare.com/i/Twu.svg";
block.src = "https://svgshare.com/i/Tii.svg";
ground.src = "https://svgshare.com/i/Tx8.svg";
bot.src = "https://svgshare.com/i/TxT.svg";
bomb.src = "https://svgshare.com/i/U3m.svg";
explosion.src = "https://svgshare.com/i/U3U.svg";
var Canvas = /** @class */ (function () {
    function Canvas(Size) {
        this.Size = Size;
    }
    Object.defineProperty(Canvas.prototype, "Element", {
        get: function () {
            return this._elm;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "Context", {
        get: function () {
            return this._ctx;
        },
        enumerable: false,
        configurable: true
    });
    Canvas.prototype.Awake = function () {
        var canvas = document.createElement("canvas");
        canvas.setAttribute("width", this.Size.x + "px");
        canvas.setAttribute("height", this.Size.y + "px");
        var gameContainer = document.getElementById("gameboard");
        gameContainer && gameContainer.appendChild(canvas);
        this._elm = canvas;
        var ctx = this._elm.getContext("2d");
        if (!ctx) {
            throw new Error("Context identifier is not supported");
        }
        this._ctx = ctx;
    };
    Canvas.prototype.FillRect = function (start, size, color) {
        this._ctx.beginPath();
        this._ctx.fillStyle = color.AsString();
        this._ctx.rect(start.x, start.y, size.x, size.y);
        this._ctx.fill();
    };
    Canvas.prototype.DrawPlayer = function (center, team) {
        this._ctx.beginPath();
        if (team == 0) {
            this._ctx.drawImage(player1, center.x - 40, center.y - 40);
        }
        else {
            this._ctx.drawImage(player2, center.x - 40, center.y - 40);
        }
    };
    Canvas.prototype.DrawPlayerBot = function (center) {
        this._ctx.beginPath();
        this._ctx.drawImage(bot, center.x - 40, center.y - 40);
        this._ctx.fill();
    };
    Canvas.prototype.DrawBomb = function (center) {
        this._ctx.beginPath();
        this._ctx.drawImage(bomb, center.x - 40, center.y - 40);
        this._ctx.fill();
    };
    Canvas.prototype.DrawExplosion = function (center) {
        this._ctx.beginPath();
        this._ctx.drawImage(explosion, center.x - 40, center.y - 40);
        this._ctx.fill();
    };
    Canvas.prototype.DrawBlock = function (center) {
        this._ctx.beginPath();
        this._ctx.drawImage(block, center.x - 40, center.y - 40);
        this._ctx.fill();
    };
    Canvas.prototype.DrawBlocks = function () {
        this._ctx.beginPath();
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                if (i % 2 === 1 && j % 2 === 1) {
                    this._ctx.drawImage(block, i * 110 + 20, j * 110 + 20);
                }
            }
        }
        this._ctx.fill();
    };
    Canvas.prototype.DrawGround = function (center) {
        this._ctx.beginPath();
        this._ctx.drawImage(ground, center.x - 40, center.y - 40);
        this._ctx.fill();
    };
    Canvas.prototype.DrawGrounds = function () {
        this._ctx.beginPath();
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                if (i % 2 === 0 && j % 2 === 1 && i > 0 && i < 8) {
                    this._ctx.drawImage(ground, i * 110 + 20, j * 110 + 20);
                }
            }
        }
        this._ctx.fill();
    };
    Canvas.prototype.ClearRect = function (start, size) {
        this._ctx.clearRect(start.x, start.y, size.x, size.y);
    };
    Canvas.prototype.SetStyle = function (style) {
        for (var key in style) {
            if (!Object.hasOwnProperty.call(style, key)) {
                continue;
            }
            if (!style[key]) {
                continue;
            }
            this._elm.style[key] = style[key];
        }
    };
    Canvas.prototype.CalcLocalPointFrom = function (globalPoint) {
        var canvasRect = this._elm.getBoundingClientRect();
        var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var offset = {
            top: canvasRect.top + scrollTop,
            left: canvasRect.left + scrollLeft,
        };
        var x = globalPoint.x - offset.left;
        var y = globalPoint.y - offset.top;
        if (x < 0 || y < 0) {
            return null;
        }
        if (x > offset.left + canvasRect.width ||
            y > offset.top + canvasRect.height) {
            return null;
        }
        return new utils_1.Vector2D(x, y);
    };
    return Canvas;
}());
exports.Canvas = Canvas;


/***/ }),

/***/ "./src/utils/canvas/index.ts":
/*!***********************************!*\
  !*** ./src/utils/canvas/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./canvas */ "./src/utils/canvas/canvas.ts"), exports);


/***/ }),

/***/ "./src/utils/color/color.ts":
/*!**********************************!*\
  !*** ./src/utils/color/color.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Color = void 0;
var Color = /** @class */ (function () {
    function Color(r, g, b, a) {
        if (!Color.IsValidChannel(r)) {
            throw new Error("Provided incorrect value for Red channel");
        }
        if (!Color.IsValidChannel(g)) {
            throw new Error("Provided incorrect value for Green channel");
        }
        if (!Color.IsValidChannel(b)) {
            throw new Error("Provided incorrect value for Blue channel");
        }
        if (!Color.IsValidChannel(a, true)) {
            throw new Error("Provided incorrect value for Alpha channel");
        }
        this.R = r;
        this.G = g;
        this.B = b;
        this.A = a;
    }
    Color.IsValidChannel = function (v, isAlpha) {
        if (isAlpha === void 0) { isAlpha = false; }
        var max = isAlpha ? 1 : 255;
        if (v < 0 || v > max) {
            return false;
        }
        if (!isAlpha && v % 1 !== 0) {
            return false;
        }
        return true;
    };
    Color.prototype.AsString = function () {
        return "rgba(" + this.R + ", " + this.G + ", " + this.B + ", " + this.A + ")";
    };
    Color.FromString = function (str) {
        var arr = str.replace(new RegExp(/\(|\)|[A-Za-z]/g), "").split(",");
        var r = Number(arr[0]), g = Number(arr[1]), b = Number(arr[2]), a = Number(arr[3]);
        if (isNaN(r) || isNaN(g) || isNaN(b) || isNaN(a)) {
            throw new Error("Invalid string");
        }
        return new Color(r, g, b, a);
    };
    return Color;
}());
exports.Color = Color;


/***/ }),

/***/ "./src/utils/color/index.ts":
/*!**********************************!*\
  !*** ./src/utils/color/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./color */ "./src/utils/color/color.ts"), exports);


/***/ }),

/***/ "./src/utils/ecs/component.h.ts":
/*!**************************************!*\
  !*** ./src/utils/ecs/component.h.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/utils/ecs/entity.ts":
/*!*********************************!*\
  !*** ./src/utils/ecs/entity.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Entity = void 0;
var Entity = /** @class */ (function () {
    function Entity() {
        this._components = [];
    }
    Object.defineProperty(Entity.prototype, "Components", {
        get: function () {
            return this._components;
        },
        enumerable: false,
        configurable: true
    });
    Entity.prototype.AddComponent = function (component) {
        this._components.push(component);
        component.Entity = this;
    };
    Entity.prototype.GetComponent = function (constr) {
        for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
            var component = _a[_i];
            if (component instanceof constr) {
                return component;
            }
        }
        throw new Error("Component " + constr.name + " not found on Entity " + this.constructor.name);
    };
    Entity.prototype.RemoveComponent = function (constr) {
        var toRemove;
        var index;
        for (var i = 0; i < this._components.length; i++) {
            var component = this._components[i];
            if (component instanceof constr) {
                toRemove = component;
                index = i;
                break;
            }
        }
        if (toRemove && index) {
            toRemove.Entity = null;
            this._components.splice(index, 1);
        }
    };
    Entity.prototype.HasComponent = function (constr) {
        for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
            var component = _a[_i];
            if (component instanceof constr) {
                return true;
            }
        }
        return false;
    };
    Entity.prototype.Awake = function () {
        for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
            var component = _a[_i];
            component.Awake();
        }
    };
    Entity.prototype.Update = function (deltaTime) {
        for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
            var component = _a[_i];
            component.Update(deltaTime);
        }
    };
    return Entity;
}());
exports.Entity = Entity;


/***/ }),

/***/ "./src/utils/ecs/index.ts":
/*!********************************!*\
  !*** ./src/utils/ecs/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./component.h */ "./src/utils/ecs/component.h.ts"), exports);
__exportStar(__webpack_require__(/*! ./entity */ "./src/utils/ecs/entity.ts"), exports);


/***/ }),

/***/ "./src/utils/game-end/endgame.ts":
/*!***************************************!*\
  !*** ./src/utils/game-end/endgame.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var Player_1 = __webpack_require__(/*! ../../Player */ "./src/Player/index.ts");
var bot_1 = __webpack_require__(/*! ../../bot */ "./src/bot/index.ts");
var Endgame = /** @class */ (function () {
    function Endgame(game) {
        this._endOfGame = false;
        this.game = game;
    }
    Object.defineProperty(Endgame.prototype, "EndOfGame", {
        get: function () {
            return this._endOfGame;
        },
        enumerable: false,
        configurable: true
    });
    Endgame.prototype.Update = function () {
        var players = this.game.Entities.filter(function (entity) { return entity instanceof Player_1.Player && entity.IsAlive; });
        var bots = this.game.Entities.filter(function (entity) { return entity instanceof bot_1.Bot && entity.IsAlive; });
        if ((players.length === 1 && bots.length === 0) || players.length === 0) {
            this._endOfGame = true;
        }
    };
    return Endgame;
}());
exports.default = Endgame;


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./ecs */ "./src/utils/ecs/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./vector2D */ "./src/utils/vector2D/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./canvas */ "./src/utils/canvas/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./lifecycle */ "./src/utils/lifecycle/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./color */ "./src/utils/color/index.ts"), exports);


/***/ }),

/***/ "./src/utils/lifecycle/index.ts":
/*!**************************************!*\
  !*** ./src/utils/lifecycle/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./lifecycle.h */ "./src/utils/lifecycle/lifecycle.h.ts"), exports);


/***/ }),

/***/ "./src/utils/lifecycle/lifecycle.h.ts":
/*!********************************************!*\
  !*** ./src/utils/lifecycle/lifecycle.h.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/utils/vector2D/index.ts":
/*!*************************************!*\
  !*** ./src/utils/vector2D/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./vector2D */ "./src/utils/vector2D/vector2D.ts"), exports);


/***/ }),

/***/ "./src/utils/vector2D/vector2D.ts":
/*!****************************************!*\
  !*** ./src/utils/vector2D/vector2D.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector2D = void 0;
var Vector2D = /** @class */ (function () {
    function Vector2D(x, y) {
        this.x = x;
        this.y = y;
    }
    return Vector2D;
}());
exports.Vector2D = Vector2D;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.ts");
/******/ })()
;
//# sourceMappingURL=bundle.js.map