(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@reach/router"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.object.to-string"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.replace"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/es6.string.link"), require("core-js/modules/web.dom.iterable"), require("fs"), require("lodash"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["@reach/router", "core-js/modules/es6.array.iterator", "core-js/modules/es6.array.sort", "core-js/modules/es6.function.name", "core-js/modules/es6.map", "core-js/modules/es6.object.assign", "core-js/modules/es6.object.to-string", "core-js/modules/es6.regexp.constructor", "core-js/modules/es6.regexp.replace", "core-js/modules/es6.regexp.split", "core-js/modules/es6.regexp.to-string", "core-js/modules/es6.string.ends-with", "core-js/modules/es6.string.iterator", "core-js/modules/es6.string.link", "core-js/modules/web.dom.iterable", "fs", "lodash", "path", "react", "react-dom/server", "react-helmet"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("@reach/router"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.object.to-string"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.replace"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/es6.string.link"), require("core-js/modules/web.dom.iterable"), require("fs"), require("lodash"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else
		root["lib"] = factory(root["@reach/router"], root["core-js/modules/es6.array.iterator"], root["core-js/modules/es6.array.sort"], root["core-js/modules/es6.function.name"], root["core-js/modules/es6.map"], root["core-js/modules/es6.object.assign"], root["core-js/modules/es6.object.to-string"], root["core-js/modules/es6.regexp.constructor"], root["core-js/modules/es6.regexp.replace"], root["core-js/modules/es6.regexp.split"], root["core-js/modules/es6.regexp.to-string"], root["core-js/modules/es6.string.ends-with"], root["core-js/modules/es6.string.iterator"], root["core-js/modules/es6.string.link"], root["core-js/modules/web.dom.iterable"], root["fs"], root["lodash"], root["path"], root["react"], root["react-dom/server"], root["react-helmet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__reach_router__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_replace__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_link__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_helmet__) {
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var plugins = []; // During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

var apis = __webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js"); // Run the specified API in any plugins that have implemented it


module.exports = function (api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log("This API doesn't exist", api);
  } // Run each plugin in series.
  // eslint-disable-next-line no-undef


  var results = plugins.map(function (plugin) {
    if (!plugin.plugin[api]) {
      return undefined;
    }

    var result = plugin.plugin[api](args, plugin.options);

    if (result && argTransform) {
      args = argTransform({
        args: args,
        result: result
      });
    }

    return result;
  }); // Filter out undefined results.

  results = results.filter(function (result) {
    return typeof result !== "undefined";
  });

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {Object} $0
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {Object} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */
exports.replaceRenderer = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {Object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {Object} pluginOptions
 * @example
 * const { Helmet } = require("react-helmet")
 *
 * exports.onRenderBody = (
 *   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
 *   pluginOptions
 * ) => {
 *   const helmet = Helmet.renderStatic()
 *   setHtmlAttributes(helmet.htmlAttributes.toComponent())
 *   setBodyAttributes(helmet.bodyAttributes.toComponent())
 *   setHeadComponents([
 *     helmet.title.toComponent(),
 *     helmet.link.toComponent(),
 *     helmet.meta.toComponent(),
 *     helmet.noscript.toComponent(),
 *     helmet.script.toComponent(),
 *     helmet.style.toComponent(),
 *   ])
 * }
 */

exports.onRenderBody = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {Object} $0
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Object} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */

exports.onPreRenderHTML = true;
/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper component around pages that won't get
 * unmounted on page change. For setting Provider components use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapPageElement)
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @example
 * import React from "react"
 * import Layout from "./src/components/layout"
 *
 * export const wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */

exports.wrapPageElement = true;
/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to setup any Providers component that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapRootElement)
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @example
 * import React from "react"
 * import { Provider } from "react-redux"
 *
 * import createStore from "./src/state/createStore"
 * const store = createStore()
 *
 * export const wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */

exports.wrapRootElement = true;

/***/ }),

/***/ "./.cache/data.json":
/*!**************************!*\
  !*** ./.cache/data.json ***!
  \**************************/
/*! exports provided: pages, dataPaths, default */
/***/ (function(module) {

module.exports = {"pages":[{"componentChunkName":"component---src-pages-index-js","jsonName":"index","path":"/"},{"componentChunkName":"component---src-pages-blog-js","jsonName":"blog-f7a","path":"/blog/"},{"componentChunkName":"component---src-templates-blog-post-js","jsonName":"blog-gisto-enterprise-mode-777","path":"/blog/gisto-enterprise-mode"},{"componentChunkName":"component---src-templates-blog-post-js","jsonName":"blog-gisto-version-2-in-development-3ba","path":"/blog/gisto-version-2-in-development"},{"componentChunkName":"component---src-templates-blog-post-js","jsonName":"blog-nightly-builds-165","path":"/blog/nightly-builds"},{"componentChunkName":"component---src-pages-documentation-js","jsonName":"documentation-185","path":"/documentation/"},{"componentChunkName":"component---src-pages-downloads-js","jsonName":"downloads-e7e","path":"/downloads/"},{"componentChunkName":"component---src-pages-faq-js","jsonName":"faq-19a","path":"/faq/"},{"componentChunkName":"component---src-pages-features-js","jsonName":"features-0f5","path":"/features/"}],"dataPaths":{"blog-f7a":"474/path---blog-f-7-a-05d-myKfQM2Dw9sX4SV2Re9B3CJgHI","blog-gisto-enterprise-mode-777":"14/path---blog-gisto-enterprise-mode-777-260-d5p8qbv8SaY0yB33e6dTsMjE4","blog-gisto-version-2-in-development-3ba":"581/path---blog-gisto-version-2-in-development-3-ba-19a-zFcsAByekLN4l6wFIiAWAVr95pQ","blog-nightly-builds-165":"60/path---blog-nightly-builds-165-9f1-NTy8eUoAPJOE2kamueATD6pEPU","documentation-185":"620/path---documentation-185-04c-0SUcWyAf8ecbYDsMhQkEfPzV8","downloads-e7e":"360/path---downloads-e-7-e-926-0SUcWyAf8ecbYDsMhQkEfPzV8","faq-19a":"598/path---faq-19-a-275-0SUcWyAf8ecbYDsMhQkEfPzV8","features-0f5":"497/path---features-0-f-5-9fc-0SUcWyAf8ecbYDsMhQkEfPzV8","index":"140/path---index-6a9-0SUcWyAf8ecbYDsMhQkEfPzV8","sq--src-components-footer-js":66919261,"sq--src-components-header-js":182442897}};

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function HTML(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", props.htmlAttributes, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    httpEquiv: "x-ua-compatible",
    content: "ie=edge"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), props.headComponents), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", props.bodyAttributes, props.preBodyComponents, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("noscript", {
    key: "noscript",
    id: "gatsby-noscript"
  }, "This app works best with JavaScript enabled."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: "body",
    id: "___gatsby",
    dangerouslySetInnerHTML: {
      __html: props.body
    }
  }), props.postBodyComponents));
}
HTML.propTypes = {
  htmlAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  headComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  bodyAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  preBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  body: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  postBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/*! exports provided: Link, withPrefix, graphql, parsePath, navigate, push, replace, navigateTo, StaticQueryContext, StaticQuery, PageRenderer, useStaticQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticQuery", function() { return useStaticQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });




var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

var StaticQuery = function StaticQuery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer, null, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading (StaticQuery)");
    }
  });
};

var useStaticQuery = function useStaticQuery(query) {
  if (typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext !== "function" && "production" === "development") {
    throw new Error("You're likely using a version of React that doesn't support Hooks\n" + "Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.");
  }

  var context = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StaticQueryContext);

  if (context[query] && context[query].data) {
    return context[query].data;
  } else {
    throw new Error("The result of this StaticQuery could not be fetched.\n\n" + "This is likely a bug in Gatsby and if refreshing the page does not fix it, " + "please open an issue in https://github.com/gatsbyjs/gatsby/issues");
  }
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away,. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n." + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}



/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (false) {} else if (false) {} else {
  module.exports = function () {
    return null;
  };
}

/***/ }),

/***/ "./.cache/static-entry.js":
/*!********************************!*\
  !*** ./.cache/static-entry.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.ends-with */ "core-js/modules/es6.string.ends-with");
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ "core-js/modules/es6.array.sort");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "core-js/modules/es6.regexp.to-string");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "core-js/modules/es6.regexp.split");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "core-js/modules/es6.regexp.constructor");
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "core-js/modules/es6.array.iterator");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "core-js/modules/es6.object.to-string");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "core-js/modules/es6.string.iterator");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es6.map */ "core-js/modules/es6.map");
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12__);














var React = __webpack_require__(/*! react */ "react");

var fs = __webpack_require__(/*! fs */ "fs");

var _require = __webpack_require__(/*! path */ "path"),
    join = _require.join;

var _require2 = __webpack_require__(/*! react-dom/server */ "react-dom/server"),
    renderToString = _require2.renderToString,
    renderToStaticMarkup = _require2.renderToStaticMarkup;

var _require3 = __webpack_require__(/*! @reach/router */ "@reach/router"),
    ServerLocation = _require3.ServerLocation,
    Router = _require3.Router,
    isRedirect = _require3.isRedirect;

var _require4 = __webpack_require__(/*! lodash */ "lodash"),
    get = _require4.get,
    merge = _require4.merge,
    isObject = _require4.isObject,
    flatten = _require4.flatten,
    uniqBy = _require4.uniqBy;

var apiRunner = __webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");

var syncRequires = __webpack_require__(/*! ./sync-requires */ "./.cache/sync-requires.js");

var _require5 = __webpack_require__(/*! ./data.json */ "./.cache/data.json"),
    dataPaths = _require5.dataPaths,
    pages = _require5.pages;

var _require6 = __webpack_require__(/*! gatsby/package.json */ "./node_modules/gatsby/package.json"),
    gatsbyVersion = _require6.version; // Speed up looking up pages.


var pagesObjectMap = new Map();
pages.forEach(function (p) {
  return pagesObjectMap.set(p.path, p);
});
var stats = JSON.parse(fs.readFileSync(process.cwd() + "/public/webpack.stats.json", "utf-8"));
var chunkMapping = JSON.parse(fs.readFileSync(process.cwd() + "/public/chunk-map.json", "utf-8")); // const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.

var testRequireError = function testRequireError(moduleName, err) {
  var regex = new RegExp("Error: Cannot find module\\s." + moduleName);
  var firstLine = err.toString().split("\n")[0];
  return regex.test(firstLine);
};

var Html;

try {
  Html = __webpack_require__(/*! ../src/html */ "./src/html.js");
} catch (err) {
  if (testRequireError("../src/html", err)) {
    Html = __webpack_require__(/*! ./default-html */ "./.cache/default-html.js");
  } else {
    throw err;
  }
}

Html = Html && Html.__esModule ? Html.default : Html;

var getPage = function getPage(path) {
  return pagesObjectMap.get(path);
};

var createElement = React.createElement;

var sanitizeComponents = function sanitizeComponents(components) {
  if (Array.isArray(components)) {
    // remove falsy items
    return components.filter(function (val) {
      return Array.isArray(val) ? val.length > 0 : val;
    });
  } else {
    // we also accept single components, so we need to handle this case as well
    return components ? [components] : [];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function (pagePath, callback) {
  var _postBodyComponents;

  var bodyHtml = "";
  var headComponents = [React.createElement("meta", {
    name: "generator",
    content: "Gatsby " + gatsbyVersion,
    key: "generator-" + gatsbyVersion
  })];
  var htmlAttributes = {};
  var bodyAttributes = {};
  var preBodyComponents = [];
  var postBodyComponents = [];
  var bodyProps = {};

  var replaceBodyHTMLString = function replaceBodyHTMLString(body) {
    bodyHtml = body;
  };

  var setHeadComponents = function setHeadComponents(components) {
    headComponents = headComponents.concat(sanitizeComponents(components));
  };

  var setHtmlAttributes = function setHtmlAttributes(attributes) {
    htmlAttributes = merge(htmlAttributes, attributes);
  };

  var setBodyAttributes = function setBodyAttributes(attributes) {
    bodyAttributes = merge(bodyAttributes, attributes);
  };

  var setPreBodyComponents = function setPreBodyComponents(components) {
    preBodyComponents = preBodyComponents.concat(sanitizeComponents(components));
  };

  var setPostBodyComponents = function setPostBodyComponents(components) {
    postBodyComponents = postBodyComponents.concat(sanitizeComponents(components));
  };

  var setBodyProps = function setBodyProps(props) {
    bodyProps = merge({}, bodyProps, props);
  };

  var getHeadComponents = function getHeadComponents() {
    return headComponents;
  };

  var replaceHeadComponents = function replaceHeadComponents(components) {
    headComponents = sanitizeComponents(components);
  };

  var getPreBodyComponents = function getPreBodyComponents() {
    return preBodyComponents;
  };

  var replacePreBodyComponents = function replacePreBodyComponents(components) {
    preBodyComponents = sanitizeComponents(components);
  };

  var getPostBodyComponents = function getPostBodyComponents() {
    return postBodyComponents;
  };

  var replacePostBodyComponents = function replacePostBodyComponents(components) {
    postBodyComponents = sanitizeComponents(components);
  };

  var page = getPage(pagePath);
  var dataAndContext = {};

  if (page.jsonName in dataPaths) {
    var pathToJsonData = join(process.cwd(), "/public/static/d", dataPaths[page.jsonName] + ".json");

    try {
      dataAndContext = JSON.parse(fs.readFileSync(pathToJsonData));
    } catch (e) {
      console.log("error", pathToJsonData, e);
      process.exit();
    }
  }

  var RouteHandler =
  /*#__PURE__*/
  function (_React$Component) {
    _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default()(RouteHandler, _React$Component);

    function RouteHandler() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = RouteHandler.prototype;

    _proto.render = function render() {
      var props = Object.assign({}, this.props, dataAndContext, {
        pathContext: dataAndContext.pageContext
      });
      var pageElement = createElement(syncRequires.components[page.componentChunkName], props);
      var wrappedPage = apiRunner("wrapPageElement", {
        element: pageElement,
        props: props
      }, pageElement, function (_ref) {
        var result = _ref.result;
        return {
          element: result,
          props: props
        };
      }).pop();
      return wrappedPage;
    };

    return RouteHandler;
  }(React.Component);

  var routerElement = createElement(ServerLocation, {
    url: "" + "" + pagePath
  }, createElement(Router, {
    baseuri: "" + ""
  }, createElement(RouteHandler, {
    path: "/*"
  })));
  var bodyComponent = apiRunner("wrapRootElement", {
    element: routerElement,
    pathname: pagePath
  }, routerElement, function (_ref2) {
    var result = _ref2.result;
    return {
      element: result,
      pathname: pagePath
    };
  }).pop(); // Let the site or plugin render the page component.

  apiRunner("replaceRenderer", {
    bodyComponent: bodyComponent,
    replaceBodyHTMLString: replaceBodyHTMLString,
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    pathPrefix: ""
  }); // If no one stepped up, we'll handle it.

  if (!bodyHtml) {
    try {
      bodyHtml = renderToString(bodyComponent);
    } catch (e) {
      // ignore @reach/router redirect errors
      if (!isRedirect(e)) throw e;
    }
  } // Create paths to scripts


  var scriptsAndStyles = flatten(["app", page.componentChunkName].map(function (s) {
    var fetchKey = "assetsByChunkName[" + s + "]";
    var chunks = get(stats, fetchKey);
    var namedChunkGroups = get(stats, "namedChunkGroups");

    if (!chunks) {
      return null;
    }

    chunks = chunks.map(function (chunk) {
      if (chunk === "/") {
        return null;
      }

      return {
        rel: "preload",
        name: chunk
      };
    });
    namedChunkGroups[s].assets.forEach(function (asset) {
      return chunks.push({
        rel: "preload",
        name: asset
      });
    });
    var childAssets = namedChunkGroups[s].childAssets;

    var _loop = function _loop(rel) {
      chunks = merge(chunks, childAssets[rel].map(function (chunk) {
        return {
          rel: rel,
          name: chunk
        };
      }));
    };

    for (var rel in childAssets) {
      _loop(rel);
    }

    return chunks;
  })).filter(function (s) {
    return isObject(s);
  }).sort(function (s1, s2) {
    return s1.rel == "preload" ? -1 : 1;
  }); // given priority to preload

  scriptsAndStyles = uniqBy(scriptsAndStyles, function (item) {
    return item.name;
  });
  var scripts = scriptsAndStyles.filter(function (script) {
    return script.name && script.name.endsWith(".js");
  });
  var styles = scriptsAndStyles.filter(function (style) {
    return style.name && style.name.endsWith(".css");
  });
  apiRunner("onRenderBody", {
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    bodyHtml: bodyHtml,
    scripts: scripts,
    styles: styles,
    pathPrefix: ""
  });
  scripts.slice(0).reverse().forEach(function (script) {
    // Add preload/prefetch <link>s for scripts.
    headComponents.push(React.createElement("link", {
      as: "script",
      rel: script.rel,
      key: script.name,
      href: "" + "/" + script.name
    }));
  });

  if (page.jsonName in dataPaths) {
    var dataPath = "" + "/static/d/" + dataPaths[page.jsonName] + ".json";
    headComponents.push(React.createElement("link", {
      as: "fetch",
      rel: "preload",
      key: dataPath,
      href: dataPath,
      crossOrigin: "use-credentials"
    }));
  }

  styles.slice(0).reverse().forEach(function (style) {
    // Add <link>s for styles that should be prefetched
    // otherwise, inline as a <style> tag
    if (style.rel === "prefetch") {
      headComponents.push(React.createElement("link", {
        as: "style",
        rel: style.rel,
        key: style.name,
        href: "" + "/" + style.name
      }));
    } else {
      headComponents.unshift(React.createElement("style", {
        "data-href": "" + "/" + style.name,
        dangerouslySetInnerHTML: {
          __html: fs.readFileSync(join(process.cwd(), "public", style.name), "utf-8")
        }
      }));
    }
  }); // Add page metadata for the current page

  var windowData = "/*<![CDATA[*/window.page=" + JSON.stringify(page) + ";" + (page.jsonName in dataPaths ? "window.dataPath=\"" + dataPaths[page.jsonName] + "\";" : "") + "/*]]>*/";
  postBodyComponents.push(React.createElement("script", {
    key: "script-loader",
    id: "gatsby-script-loader",
    dangerouslySetInnerHTML: {
      __html: windowData
    }
  })); // Add chunk mapping metadata

  var scriptChunkMapping = "/*<![CDATA[*/window.___chunkMapping=" + JSON.stringify(chunkMapping) + ";/*]]>*/";
  postBodyComponents.push(React.createElement("script", {
    key: "chunk-mapping",
    id: "gatsby-chunk-mapping",
    dangerouslySetInnerHTML: {
      __html: scriptChunkMapping
    }
  })); // Filter out prefetched bundles as adding them as a script tag
  // would force high priority fetching.

  var bodyScripts = scripts.filter(function (s) {
    return s.rel !== "prefetch";
  }).map(function (s) {
    var scriptPath = "" + "/" + JSON.stringify(s.name).slice(1, -1);
    return React.createElement("script", {
      key: scriptPath,
      src: scriptPath,
      async: true
    });
  });

  (_postBodyComponents = postBodyComponents).push.apply(_postBodyComponents, bodyScripts);

  apiRunner("onPreRenderHTML", {
    getHeadComponents: getHeadComponents,
    replaceHeadComponents: replaceHeadComponents,
    getPreBodyComponents: getPreBodyComponents,
    replacePreBodyComponents: replacePreBodyComponents,
    getPostBodyComponents: getPostBodyComponents,
    replacePostBodyComponents: replacePostBodyComponents,
    pathname: pagePath,
    pathPrefix: ""
  });
  var html = "<!DOCTYPE html>" + renderToStaticMarkup(React.createElement(Html, Object.assign({}, bodyProps, {
    headComponents: headComponents,
    htmlAttributes: htmlAttributes,
    bodyAttributes: bodyAttributes,
    preBodyComponents: preBodyComponents,
    postBodyComponents: postBodyComponents,
    body: bodyHtml,
    path: pagePath
  })));
  callback(null, html);
});

/***/ }),

/***/ "./.cache/sync-requires.js":
/*!*********************************!*\
  !*** ./.cache/sync-requires.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js"),
    hot = _require.hot; // prefer default export if available


var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(__webpack_require__(/*! ./src/templates/blog-post.js */ "./src/templates/blog-post.js"))),
  "component---src-pages-blog-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/blog.js */ "./src/pages/blog.js"))),
  "component---src-pages-documentation-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/documentation.js */ "./src/pages/documentation.js"))),
  "component---src-pages-downloads-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/downloads.js */ "./src/pages/downloads.js"))),
  "component---src-pages-faq-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/faq.js */ "./src/pages/faq.js"))),
  "component---src-pages-features-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/features.js */ "./src/pages/features.js"))),
  "component---src-pages-index-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js")))
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/disqus-react/lib/CommentCount.js":
/*!*******************************************************!*\
  !*** ./node_modules/disqus-react/lib/CommentCount.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CommentCount = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/disqus-react/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queueResetCount = (0, _utils.debounce)(function () {
    if (window.DISQUSWIDGETS) window.DISQUSWIDGETS.getCount({ reset: true });
}, 300, false); // eslint-disable-line no-magic-numbers

var CommentCount = exports.CommentCount = function (_React$Component) {
    _inherits(CommentCount, _React$Component);

    function CommentCount() {
        _classCallCheck(this, CommentCount);

        return _possibleConstructorReturn(this, (CommentCount.__proto__ || Object.getPrototypeOf(CommentCount)).apply(this, arguments));
    }

    _createClass(CommentCount, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadInstance();
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            if (this.props.shortname !== nextProps.shortname) return true;

            var nextConfig = nextProps.config;
            var config = this.props.config;
            if (nextConfig.url === config.url || nextConfig.identifier === config.identifier) return false;
            return true;
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps) {
            if (this.props.shortname !== nextProps.shortname) this.cleanInstance();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.loadInstance();
        }
    }, {
        key: 'loadInstance',
        value: function loadInstance() {
            var doc = window.document;
            if (doc.getElementById('dsq-count-scr')) queueResetCount();else (0, _utils.insertScript)('https://' + this.props.shortname + '.disqus.com/count.js', 'dsq-count-scr', doc.body);
        }
    }, {
        key: 'cleanInstance',
        value: function cleanInstance() {
            var body = window.document.body;
            (0, _utils.removeScript)('dsq-count-scr', body);

            // count.js only reassigns this window object if it's undefined.
            window.DISQUSWIDGETS = undefined;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'span',
                {
                    className: 'disqus-comment-count',
                    'data-disqus-identifier': this.props.config.identifier,
                    'data-disqus-url': this.props.config.url
                },
                this.props.children
            );
        }
    }]);

    return CommentCount;
}(_react2.default.Component);

/***/ }),

/***/ "./node_modules/disqus-react/lib/CommentEmbed.js":
/*!*******************************************************!*\
  !*** ./node_modules/disqus-react/lib/CommentEmbed.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CommentEmbed = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RADIX_BASE = 36;

var CommentEmbed = exports.CommentEmbed = function (_React$Component) {
    _inherits(CommentEmbed, _React$Component);

    function CommentEmbed() {
        _classCallCheck(this, CommentEmbed);

        return _possibleConstructorReturn(this, (CommentEmbed.__proto__ || Object.getPrototypeOf(CommentEmbed)).apply(this, arguments));
    }

    _createClass(CommentEmbed, [{
        key: 'getSrc',
        value: function getSrc() {
            var post = Number(this.props.commentId).toString(RADIX_BASE);
            var parentParam = this.props.showParentComment ? '1' : '0';
            var mediaParam = this.props.showMedia ? '1' : '0';

            return 'https://embed.disqus.com/p/' + post + '?p=' + parentParam + '&m=' + mediaParam;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('iframe', {
                src: this.getSrc(),
                width: this.props.width,
                height: this.props.height,
                seamless: 'seamless',
                scrolling: 'no',
                frameBorder: '0'
            });
        }
    }]);

    return CommentEmbed;
}(_react2.default.Component);

CommentEmbed.defaultProps = {
    showMedia: true,
    showParentComment: true,
    width: 420,
    height: 320
};

/***/ }),

/***/ "./node_modules/disqus-react/lib/DiscussionEmbed.js":
/*!**********************************************************!*\
  !*** ./node_modules/disqus-react/lib/DiscussionEmbed.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DiscussionEmbed = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/disqus-react/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DiscussionEmbed = exports.DiscussionEmbed = function (_React$Component) {
    _inherits(DiscussionEmbed, _React$Component);

    function DiscussionEmbed() {
        _classCallCheck(this, DiscussionEmbed);

        return _possibleConstructorReturn(this, (DiscussionEmbed.__proto__ || Object.getPrototypeOf(DiscussionEmbed)).apply(this, arguments));
    }

    _createClass(DiscussionEmbed, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (typeof window !== 'undefined' && window.disqus_shortname && window.disqus_shortname !== this.props.shortname) this.cleanInstance();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadInstance();
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            if (this.props.shortname !== nextProps.shortname) return true;

            var nextConfig = nextProps.config;
            var config = this.props.config;
            if (nextConfig.url === config.url || nextConfig.identifier === config.identifier) return false;
            return true;
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps) {
            if (this.props.shortname !== nextProps.shortname) this.cleanInstance();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.loadInstance();
        }
    }, {
        key: 'loadInstance',
        value: function loadInstance() {
            var doc = window.document;
            if (window && window.DISQUS && doc.getElementById('dsq-embed-scr')) {
                window.DISQUS.reset({
                    reload: true,
                    config: this.getDisqusConfig(this.props.config)
                });
            } else {
                window.disqus_config = this.getDisqusConfig(this.props.config);
                window.disqus_shortname = this.props.shortname;
                (0, _utils.insertScript)('https://' + this.props.shortname + '.disqus.com/embed.js', 'dsq-embed-scr', doc.body);
            }
        }
    }, {
        key: 'cleanInstance',
        value: function cleanInstance() {
            var doc = window.document;
            (0, _utils.removeScript)('dsq-embed-scr', doc.body);
            if (window && window.DISQUS) window.DISQUS.reset({});

            try {
                delete window.DISQUS;
            } catch (error) {
                window.DISQUS = undefined;
            }
            var disqusThread = doc.getElementById('disqus_thread');
            if (disqusThread) {
                while (disqusThread.hasChildNodes()) {
                    disqusThread.removeChild(disqusThread.firstChild);
                }
            }
        }
    }, {
        key: 'getDisqusConfig',
        value: function getDisqusConfig(config) {
            return function () {
                this.page.identifier = config.identifier;
                this.page.url = config.url;
                this.page.title = config.title;
                this.callbacks.onNewComment = [config.onNewComment];
            };
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { id: 'disqus_thread' });
        }
    }]);

    return DiscussionEmbed;
}(_react2.default.Component);

/***/ }),

/***/ "./node_modules/disqus-react/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/disqus-react/lib/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DiscussionEmbed = exports.CommentEmbed = exports.CommentCount = undefined;

var _CommentCount = __webpack_require__(/*! ./CommentCount */ "./node_modules/disqus-react/lib/CommentCount.js");

var _CommentEmbed = __webpack_require__(/*! ./CommentEmbed */ "./node_modules/disqus-react/lib/CommentEmbed.js");

var _DiscussionEmbed = __webpack_require__(/*! ./DiscussionEmbed */ "./node_modules/disqus-react/lib/DiscussionEmbed.js");

exports.CommentCount = _CommentCount.CommentCount;
exports.CommentEmbed = _CommentEmbed.CommentEmbed;
exports.DiscussionEmbed = _DiscussionEmbed.DiscussionEmbed;


var Disqus = {
    CommentCount: _CommentCount.CommentCount,
    CommentEmbed: _CommentEmbed.CommentEmbed,
    DiscussionEmbed: _DiscussionEmbed.DiscussionEmbed
};

exports.default = Disqus;

/***/ }),

/***/ "./node_modules/disqus-react/lib/utils.js":
/*!************************************************!*\
  !*** ./node_modules/disqus-react/lib/utils.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.insertScript = insertScript;
exports.removeScript = removeScript;
exports.debounce = debounce;
function insertScript(src, id, parentElement) {
    var script = window.document.createElement('script');
    script.async = true;
    script.src = src;
    script.id = id;
    parentElement.appendChild(script);

    return script;
}

function removeScript(id, parentElement) {
    var script = window.document.getElementById(id);
    if (script) parentElement.removeChild(script);
}

function debounce(func, wait, runOnFirstCall) {
    var timeout = void 0;
    return function () {
        var context = this; // eslint-disable-line consistent-this
        var args = arguments;

        var deferredExecution = function deferredExecution() {
            timeout = null;
            if (!runOnFirstCall) func.apply(context, args);
        };

        var callNow = runOnFirstCall && !timeout;

        window.clearTimeout(timeout);
        timeout = setTimeout(deferredExecution, wait);

        if (callNow) func.apply(context, args);
    };
}

/***/ }),

/***/ "./node_modules/font-awesome/css/font-awesome.min.css":
/*!************************************************************!*\
  !*** ./node_modules/font-awesome/css/font-awesome.min.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

var _parsePath = __webpack_require__(/*! ./parse-path */ "./node_modules/gatsby-link/parse-path.js");

exports.parsePath = _parsePath.parsePath;

/*global __PATH_PREFIX__ */
function withPrefix(path) {
  return normalizePath("" + "/" + path);
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object,
  partiallyActive: _propTypes.default.bool // Set up IntersectionObserver

};

var handleIntersection = function handleIntersection(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
};

var GatsbyLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "defaultGetProps", function (_ref) {
      var isPartiallyCurrent = _ref.isPartiallyCurrent,
          isCurrent = _ref.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    });
    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && this.props.innerRef.hasOwnProperty("current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      handleIntersection(ref, function () {
        ___loader.enqueue((0, _parsePath.parsePath)(_this2.props.to).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace"]);
    var LOCAL_URL = /^\/(?!\/)/;

    if (false) {}

    var prefixedTo = withPrefix(to);
    return _react.default.createElement(_router.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        if (_onMouseEnter) {
          _onMouseEnter(e);
        }

        ___loader.hovering((0, _parsePath.parsePath)(to).pathname);
      },
      onClick: function onClick(e) {
        if (_onClick) {
          _onClick(e);
        }

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault(); // Make sure the necessary scripts and data are
          // loaded before continuing.

          navigate(to, {
            state: state,
            replace: replace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool
});

var _default = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(GatsbyLink, (0, _extends2.default)({
    innerRef: ref
  }, props));
});

exports.default = _default;

var navigate = function navigate(to, options) {
  window.___navigate(withPrefix(to), options);
};

exports.navigate = navigate;

var push = function push(to) {
  console.warn("The \"push\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___push(withPrefix(to));
};

exports.push = push;

var replace = function replace(to) {
  console.warn("The \"replace\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___replace(withPrefix(to));
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  console.warn("The \"navigateTo\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),

/***/ "./node_modules/gatsby-link/parse-path.js":
/*!************************************************!*\
  !*** ./node_modules/gatsby-link/parse-path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ "./node_modules/gatsby/package.json":
/*!******************************************!*\
  !*** ./node_modules/gatsby/package.json ***!
  \******************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bin, bugs, bundleDependencies, dependencies, deprecated, description, devDependencies, engines, files, gitHead, homepage, keywords, license, main, module, name, peerDependencies, repository, resolutions, scripts, types, version, yargs, default */
/***/ (function(module) {

module.exports = {"_from":"gatsby@^2.1.27","_id":"gatsby@2.3.13","_inBundle":false,"_integrity":"sha512-6P56yCiOcIJxNjZucJihPc6GwrOHTcFdBgIjxt5hniqUojM5IR+wcxSiLrhYUKtIGEl/JgiuINhiHG1S7BbUSg==","_location":"/gatsby","_phantomChildren":{"@babel/code-frame":"7.0.0","@babel/runtime":"7.4.3","bluebird":"3.5.4","common-tags":"1.8.0","convert-hrtime":"2.0.0","cross-spawn":"5.1.0","decamelize":"1.2.0","envinfo":"5.12.1","fs-exists-cached":"1.0.0","gatsby-telemetry":"1.0.5","get-caller-file":"1.0.3","get-stream":"3.0.0","graceful-fs":"4.1.15","hosted-git-info":"2.7.1","is-stream":"1.1.0","jsonfile":"4.0.0","lodash":"4.17.11","map-age-cleaner":"0.1.3","meant":"1.0.1","nice-try":"1.0.5","npm-run-path":"2.0.2","opentracing":"0.14.3","p-finally":"1.0.0","p-is-promise":"2.0.0","path-exists":"3.0.0","path-key":"2.0.1","pretty-error":"2.1.1","pump":"3.0.0","require-directory":"2.1.1","require-main-filename":"1.0.1","resolve-cwd":"2.0.0","semver":"5.7.0","set-blocking":"2.0.0","shebang-command":"1.2.0","signal-exit":"3.0.2","source-map":"0.5.7","stack-trace":"0.0.10","string-width":"2.1.1","strip-eof":"1.0.0","universalify":"0.1.2","update-notifier":"2.5.0","uuid":"3.3.2","which":"1.3.1","which-module":"2.0.0","wrap-ansi":"2.1.0","y18n":"3.2.1","yurnalist":"1.0.5"},"_requested":{"type":"range","registry":true,"raw":"gatsby@^2.1.27","name":"gatsby","escapedName":"gatsby","rawSpec":"^2.1.27","saveSpec":null,"fetchSpec":"^2.1.27"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/gatsby/-/gatsby-2.3.13.tgz","_shasum":"c381ba209edff8b9716dbcc3cf63b96588225799","_spec":"gatsby@^2.1.27","_where":"/Users/travis/build/Gisto/Gisto/docs","author":{"name":"Kyle Mathews","email":"mathews.kyle@gmail.com"},"bin":{"gatsby":"./dist/bin/gatsby.js"},"bugs":{"url":"https://github.com/gatsbyjs/gatsby/issues"},"bundleDependencies":false,"dependencies":{"@babel/code-frame":"^7.0.0","@babel/core":"^7.0.0","@babel/parser":"^7.0.0","@babel/polyfill":"^7.0.0","@babel/runtime":"^7.0.0","@babel/traverse":"^7.0.0","@gatsbyjs/relay-compiler":"2.0.0-printer-fix.2","@mikaelkristiansson/domready":"^1.0.9","@pieh/friendly-errors-webpack-plugin":"1.7.0-chalk-2","@reach/router":"^1.1.1","@stefanprobst/lokijs":"^1.5.6-b","address":"1.0.3","autoprefixer":"^9.4.3","babel-core":"7.0.0-bridge.0","babel-eslint":"^9.0.0","babel-loader":"^8.0.0","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-dynamic-import-node":"^1.2.0","babel-plugin-remove-graphql-queries":"^2.6.3","babel-preset-gatsby":"^0.1.11","better-opn":"0.1.4","better-queue":"^3.8.6","bluebird":"^3.5.0","browserslist":"3.2.8","cache-manager":"^2.9.0","cache-manager-fs-hash":"^0.0.6","chalk":"^2.3.2","chokidar":"2.1.2","common-tags":"^1.4.0","compression":"^1.7.3","convert-hrtime":"^2.0.0","copyfiles":"^1.2.0","core-js":"^2.5.0","css-loader":"^1.0.0","debug":"^3.1.0","del":"^3.0.0","detect-port":"^1.2.1","devcert-san":"^0.3.3","dotenv":"^4.0.0","eslint":"^5.6.0","eslint-config-react-app":"^3.0.0","eslint-loader":"^2.1.0","eslint-plugin-flowtype":"^2.46.1","eslint-plugin-graphql":"^2.0.0","eslint-plugin-import":"^2.9.0","eslint-plugin-jsx-a11y":"^6.0.3","eslint-plugin-react":"^7.8.2","event-source-polyfill":"^1.0.5","express":"^4.16.3","express-graphql":"^0.6.12","fast-levenshtein":"~2.0.4","file-loader":"^1.1.11","flat":"^4.0.0","fs-exists-cached":"1.0.0","fs-extra":"^5.0.0","gatsby-cli":"^2.5.5","gatsby-link":"^2.0.16","gatsby-plugin-page-creator":"^2.0.12","gatsby-react-router-scroll":"^2.0.7","gatsby-telemetry":"^1.0.5","glob":"^7.1.1","graphql":"^14.1.1","graphql-compose":"^6.0.3","graphql-playground-middleware-express":"^1.7.10","graphql-relay":"^0.6.0","graphql-tools":"^3.0.4","hash-mod":"^0.0.5","invariant":"^2.2.4","is-relative":"^1.0.0","is-relative-url":"^2.0.0","is-wsl":"^1.1.0","jest-worker":"^23.2.0","joi":"12.x.x","json-loader":"^0.5.7","json-stringify-safe":"^5.0.1","kebab-hash":"^0.1.2","lodash":"^4.17.10","md5":"^2.2.1","md5-file":"^3.1.1","mime":"^2.2.0","mini-css-extract-plugin":"^0.4.0","mitt":"^1.1.2","mkdirp":"^0.5.1","moment":"^2.21.0","name-all-modules-plugin":"^1.0.1","normalize-path":"^2.1.1","null-loader":"^0.1.1","opentracing":"^0.14.3","optimize-css-assets-webpack-plugin":"^5.0.1","parseurl":"^1.3.2","physical-cpu-count":"^2.0.0","pnp-webpack-plugin":"^1.4.1","postcss-flexbugs-fixes":"^3.0.0","postcss-loader":"^2.1.3","prop-types":"^15.6.1","raw-loader":"^0.5.1","react-dev-utils":"^4.2.1","react-error-overlay":"^3.0.0","react-hot-loader":"^4.6.2","redux":"^4.0.0","request":"^2.85.0","semver":"^5.6.0","shallow-compare":"^1.2.2","sift":"^5.1.0","signal-exit":"^3.0.2","slash":"^1.0.0","socket.io":"^2.0.3","stack-trace":"^0.0.10","string-similarity":"^1.2.0","style-loader":"^0.21.0","terser-webpack-plugin":"^1.2.2","true-case-path":"^1.0.3","type-of":"^2.0.1","url-loader":"^1.0.1","util.promisify":"^1.0.0","uuid":"^3.1.0","v8-compile-cache":"^1.1.0","webpack":"~4.28.4","webpack-dev-middleware":"^3.0.1","webpack-dev-server":"^3.1.14","webpack-hot-middleware":"^2.21.0","webpack-merge":"^4.1.0","webpack-stats-plugin":"^0.1.5","xstate":"^4.3.2","yaml-loader":"^0.5.0"},"deprecated":false,"description":"Blazing fast modern site generator for React","devDependencies":{"@babel/cli":"^7.0.0","@babel/runtime":"^7.0.0","babel-preset-gatsby-package":"^0.1.4","cross-env":"^5.1.4","rimraf":"^2.6.1"},"engines":{"node":">=6.0.0"},"files":["cache-dir","dist","graphql.js","index.d.ts"],"gitHead":"0215f74f34e13aedd68f196c2184eaaa445a2d93","homepage":"https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme","keywords":["blog","generator","jekyll","markdown","react","ssg","website"],"license":"MIT","main":"cache-dir/commonjs/gatsby-browser-entry.js","module":"cache-dir/gatsby-browser-entry.js","name":"gatsby","peerDependencies":{"react":"^16.4.2","react-dom":"^16.4.2"},"repository":{"type":"git","url":"git+https://github.com/gatsbyjs/gatsby.git"},"resolutions":{"graphql":"^14.1.1"},"scripts":{"build":"npm run build:src && npm run build:internal-plugins && npm run build:rawfiles && npm run build:cjs","build:cjs":"babel cache-dir --out-dir cache-dir/commonjs --ignore **/__tests__","build:internal-plugins":"copyfiles -u 1 src/internal-plugins/**/package.json dist","build:rawfiles":"copyfiles -u 1 src/internal-plugins/**/raw_* dist","build:src":"babel src --out-dir dist --source-maps --ignore **/gatsby-cli.js,**/raw_*,**/__tests__","clean-test-bundles":"find test/ -type f -name bundle.js* -exec rm -rf {} +","prebuild":"rimraf dist && rimraf cache-dir/commonjs","prepare":"cross-env NODE_ENV=production npm run build","watch":"rimraf dist && mkdir dist && npm run build:internal-plugins && npm run build:rawfiles && npm run build:src -- --watch"},"types":"index.d.ts","version":"2.3.13","yargs":{"boolean-negation":false}};

/***/ }),

/***/ "./node_modules/invariant/invariant.js":
/*!*********************************************!*\
  !*** ./node_modules/invariant/invariant.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "production";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/json2mq/index.js":
/*!***************************************!*\
  !*** ./node_modules/json2mq/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var camel2hyphen = __webpack_require__(/*! string-convert/camel2hyphen */ "./node_modules/string-convert/camel2hyphen.js");

var isDimension = function (feature) {
  var re = /[height|width]$/;
  return re.test(feature);
};

var obj2mq = function (obj) {
  var mq = '';
  var features = Object.keys(obj);
  features.forEach(function (feature, index) {
    var value = obj[feature];
    feature = camel2hyphen(feature);
    // Add px to dimension features
    if (isDimension(feature) && typeof value === 'number') {
      value = value + 'px';
    }
    if (value === true) {
      mq += feature;
    } else if (value === false) {
      mq += 'not ' + feature;
    } else {
      mq += '(' + feature + ': ' + value + ')';
    }
    if (index < features.length-1) {
      mq += ' and '
    }
  });
  return mq;
};

var json2mq = function (query) {
  var mq = '';
  if (typeof query === 'string') {
    return query;
  }
  // Handling array of media queries
  if (query instanceof Array) {
    query.forEach(function (q, index) {
      mq += obj2mq(q);
      if (index < query.length-1) {
        mq += ', '
      }
    });
    return mq;
  }
  // Handling single media query
  return obj2mq(query);
};

module.exports = json2mq;

/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-hot-loader/root.js":
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) { var parent, cache, hot; } else {
  // prod mode
  exports.hot = function(a) {
    return a
  }
}


/***/ }),

/***/ "./node_modules/react-media/esm/react-media.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-media/esm/react-media.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var json2mq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! json2mq */ "./node_modules/json2mq/index.js");
/* harmony import */ var json2mq__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(json2mq__WEBPACK_IMPORTED_MODULE_6__);








var MediaQueryList =
/*#__PURE__*/
function () {
  function MediaQueryList(targetWindow, query, listener) {
    var _this = this;

    this.nativeMediaQueryList = targetWindow.matchMedia(query);
    this.active = true; // Safari doesn't clear up listener with removeListener
    // when the listener is already waiting in the event queue.
    // Having an active flag to make sure the listener is not called
    // after we removeListener.

    this.cancellableListener = function () {
      _this.matches = _this.nativeMediaQueryList.matches;

      if (_this.active) {
        listener.apply(void 0, arguments);
      }
    };

    this.nativeMediaQueryList.addListener(this.cancellableListener);
    this.matches = this.nativeMediaQueryList.matches;
  }

  var _proto = MediaQueryList.prototype;

  _proto.cancel = function cancel() {
    this.active = false;
    this.nativeMediaQueryList.removeListener(this.cancellableListener);
  };

  return MediaQueryList;
}();

/**
 * Conditionally renders based on whether or not a media query matches.
 */

var Media =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Media, _React$Component);

  function Media() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this)), "state", {
      matches: _this.props.defaultMatches
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this)), "updateMatches", function () {
      var matches = _this.mediaQueryList.matches;

      _this.setState({
        matches: matches
      });

      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(matches);
      }
    });

    return _this;
  }

  var _proto = Media.prototype;

  _proto.componentWillMount = function componentWillMount() {
    if (typeof window !== 'object') return;
    var targetWindow = this.props.targetWindow || window;
    !(typeof targetWindow.matchMedia === 'function') ?  false ? undefined : invariant__WEBPACK_IMPORTED_MODULE_5___default()(false) : void 0;
    var query = this.props.query;
    if (typeof query !== 'string') query = json2mq__WEBPACK_IMPORTED_MODULE_6___default()(query);
    this.mediaQueryList = new MediaQueryList(targetWindow, query, this.updateMatches);
    this.updateMatches();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mediaQueryList.cancel();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        render = _this$props.render;
    var matches = this.state.matches;
    return render ? matches ? render() : null : children ? typeof children === 'function' ? children(matches) : !Array.isArray(children) || children.length // Preact defaults to empty children array
    ? matches ? react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.only(children) : null : null : null;
  };

  return Media;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Media, "defaultProps", {
  defaultMatches: true
});

if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Media);


/***/ }),

/***/ "./node_modules/string-convert/camel2hyphen.js":
/*!*****************************************************!*\
  !*** ./node_modules/string-convert/camel2hyphen.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var camel2hyphen = function (str) {
  return str
          .replace(/[A-Z]/g, function (match) {
            return '-' + match.toLowerCase();
          })
          .toLowerCase();
};

module.exports = camel2hyphen;

/***/ }),

/***/ "./public/static/d/182442897.json":
/*!****************************************!*\
  !*** ./public/static/d/182442897.json ***!
  \****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"site":{"siteMetadata":{"navigation":[{"path":"/","displayName":"Home"},{"path":"features","displayName":"Features"},{"path":"documentation","displayName":"Docs"},{"path":"faq","displayName":"F.A.Q."},{"path":"blog","displayName":"Blog"},{"path":"downloads","displayName":"Download"}]}}}};

/***/ }),

/***/ "./public/static/d/66919261.json":
/*!***************************************!*\
  !*** ./public/static/d/66919261.json ***!
  \***************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"site":{"siteMetadata":{"contributors":[{"name":"Maayan Glikser","gravatar":"https://secure.gravatar.com/avatar/3a615b34ef2060face8fcd481c6377e1?s=80","site":"https://www.glikm.com","twitter_name":"MaayanGlikser","github_name":"morsdyce","description":"Software Developer"},{"name":"Sasha Khamkov","gravatar":"https://secure.gravatar.com/avatar/7ddad1a9a1c8de452badaf82b6c30c76?s=80","site":"https://www.sanusart.com","twitter_name":"sanusart","github_name":"sanusart","description":"Web Developer"}]}}}};

/***/ }),

/***/ "./src/components/About.js":
/*!*********************************!*\
  !*** ./src/components/About.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logo */ "./src/components/Logo.js");




var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-col w-col-4 w-clearfix"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "why")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], null), " started by fulfilling a lack of a syntax highlighted and cloud synchronized code snippet solution.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-col w-col-4 w-clearfix the-who"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "who")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], null), " is developed by a team of two web developers on their spare time."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We appreciate any suggestions or contributions to make ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], null), " better.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-col w-col-4 w-clearfix"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "how")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], null), " is built using the open web technologies using several open source projects such as React, Electron, Monaco Editor and many more"))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/components/Downloads.js":
/*!*************************************!*\
  !*** ./src/components/Downloads.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.link */ "core-js/modules/es6.string.link");
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "core-js/modules/es6.regexp.split");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);






function getFileType(file) {
  return file.split('.').reverse()[0];
}

function getOsType(file) {
  var fileExtension = getFileType(file);

  switch (fileExtension) {
    case 'snap':
    case 'AppImage':
    case 'deb':
    case 'rpm':
    case 'pacman':
      {
        return 'linux';
      }

    case 'dmg':
    case 'zip':
      {
        return 'mac';
      }

    case 'exe':
      {
        return 'windows';
      }

    default:
      return 'unknown';
  }
}

function formateDate(date) {
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var published = new Date(date);
  return published.toLocaleDateString('en-US', options);
}

function dataStructure(asset) {
  return {
    os: getOsType(asset.name),
    link: asset.browser_download_url,
    fileType: getFileType(asset.name)
  };
}

var Downloads =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Downloads, _Component);

  function Downloads() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      publishedAt: null,
      latestVersion: null,
      downloads: null
    };

    _this.renderDownloads = function (os) {
      return _this.state.downloads && _this.state.downloads.reduce(function (acc, download) {
        if (download.os === os) {
          acc.push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
            key: download.fileType,
            href: download.link
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b", null, download.fileType)));
        }

        return acc;
      }, []);
    };

    return _this;
  }

  var _proto = Downloads.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    if (!sessionStorage.getItem('gistoReleases')) {
      fetch('https://api.github.com/repos/Gisto/Gisto/releases/latest').then(function (response) {
        return response.json();
      }).then(function (data) {
        sessionStorage.setItem('gistoReleases', JSON.stringify(data));
        var latest = data;
        var downloads = latest.assets.map(function (asset) {
          return dataStructure(asset);
        }).filter(function (os) {
          return os !== 'unknown';
        });

        _this2.setState({
          publishedAt: formateDate(latest.published_at),
          latestVersion: "v" + latest.name,
          downloads: downloads
        });
      });
    } else {
      var latest = JSON.parse(sessionStorage.getItem('gistoReleases'));
      var downloads = latest.assets.map(function (asset) {
        return dataStructure(asset);
      }).filter(function (os) {
        return os !== 'unknown';
      });
      this.setState({
        publishedAt: formateDate(latest.published_at),
        latestVersion: "v" + latest.name,
        downloads: downloads
      });
    }
  };

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("section", {
      className: "whiter boxes inner"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "w-container"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "txt-grey txt-center"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b", null, "LATEST VERSION:"), "\xA0", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "latest-release-version"
    }, this.state.latestVersion), " |", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      href: "https://github.com/Gisto/Gisto/blob/master/CHANGELOG.md",
      className: "txt-red txt-underline"
    }, "Change log"), "| ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b", null, "RELEASED:"), " ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "published_at"
    }, this.state.publishedAt)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "w-container"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "w-row"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "download w-col w-col-3 w-clearfix txt-center"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "txt-center"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      className: "fa fa-windows fa-4x"
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b", null, "Windows"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), "Download"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, this.renderDownloads('windows'))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "download w-col w-col-3 w-clearfix txt-center"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "txt-center"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      className: "fa fa-apple fa-4x"
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b", null, "macOS"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), "Download"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, this.renderDownloads('mac'))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "download w-col w-col-3 w-clearfix txt-center"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "txt-center"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      className: "fa fa-linux fa-4x"
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b", null, "Linux"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), "Download"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, this.renderDownloads('linux'))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "download w-col w-col-3 w-clearfix txt-center"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "txt-center"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      className: "fa fa-cogs fa-4x"
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", null, "Latest", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), " ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b", null, "from Github")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      href: "https://github.com/Gisto/Gisto/releases"
    }, "GitHub releases"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "w-container"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "w-row"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "w-col w-col-pull-1 w-col-push-3 w-col-6 "
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, "Other install options:"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, "via ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b", null, "Homebrew cask"), ":", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("pre", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, "SHELL"), "$ brew cask install gisto"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("small", null, "Please note that it might be slightly outdated version"))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "w-row"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "txt-grey txt-center"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b", null, "PREVIOUS VERSION:"), " 0.3.2"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "w-col w-col-12 w-clearfix txt-center"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "Development of this version is stopped at \"v0.3.2\" and it should be considered obsolete. No updates, features or bugfixes will be issued.")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "download w-col w-col-12 w-clearfix txt-center"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      href: "https://github.com/Gisto/Gisto/releases/download/0.3.2-beta/Gisto-v0.3.2-windows-x64.zip"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      className: "fa fa-windows"
    }), " Windows"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      href: "https://github.com/Gisto/Gisto/releases/download/0.3.2-beta/Gisto-v0.3.2-macos-x64.dmg"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      className: "fa fa-apple"
    }), " MACOS"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      href: "https://github.com/Gisto/Gisto/releases/download/0.3.2-beta/Gisto-v0.3.2-linux-win32.zip"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      className: "fa fa-linux"
    }), " Linux 32bit"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      href: "https://github.com/Gisto/Gisto/releases/download/0.3.2-beta/Gisto-v0.3.2-linux-x64.zip"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      className: "fa fa-linux"
    }), " Linux 64bit"))))));
  };

  return Downloads;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Downloads);

/***/ }),

/***/ "./src/components/GithubButtonWithCount.js":
/*!*************************************************!*\
  !*** ./src/components/GithubButtonWithCount.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var GithubButtonWithCount = function GithubButtonWithCount(_ref) {
  var user = _ref.user,
      repo = _ref.repo,
      type = _ref.type,
      count = _ref.count;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    title: type,
    src: "https://ghbtns.com/github-btn.html?user=" + user + "&repo=" + repo + "&type=" + type + "&count=" + count,
    allowTransparency: "true",
    frameBorder: "0",
    scrolling: "0",
    width: "95",
    height: "20"
  });
};

GithubButtonWithCount.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  repo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (GithubButtonWithCount);

/***/ }),

/***/ "./src/components/Hero.js":
/*!********************************!*\
  !*** ./src/components/Hero.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider */ "./src/components/Slider.js");
/* harmony import */ var _GithubButtonWithCount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GithubButtonWithCount */ "./src/components/GithubButtonWithCount.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logo */ "./src/components/Logo.js");






var Hero = function Hero() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-col w-col-6 w-clearfix not-a-player"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], null), " is a code snippet manager that runs on GitHub Gists and adds additional features such as searching, tagging and sharing gists while including a rich code editor."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "All your data is stored on GitHub and you can access it from GitHub Gists at any time with changes carrying over to ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], null), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/Gisto/Gisto",
    className: "btn bg-grey txt-white"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-github"
  })), "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://twitter.com/gistoapp",
    className: "btn bg-grey twitter txt-white"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-twitter"
  })), "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/Gisto/Gisto/blob/master/CHANGELOG.md",
    className: "btn bg-grey txt-white"
  }, "Changelog ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-chevron-right"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-col w-col-6 w-clearfix app-image"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Slider__WEBPACK_IMPORTED_MODULE_2__["default"], null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "boxes"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "features",
    className: "w-col w-col-4 w-clearfix box bg-grey txt-white uppercase"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-fire-extinguisher fa-4x pull-left"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Features"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "List of features and new additions"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-chevron-right"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://web.gistoapp.com",
    className: "w-col w-col-4 w-clearfix box bg-greyer txt-white uppercase"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-laptop fa-4x pull-left"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Web client"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "Full featured web client is now available"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-chevron-right"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#download",
    className: "w-col w-col-4 w-clearfix box bg-tomato txt-white uppercase innsite"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-download fa-4x pull-left"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Downloads"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "Mirrors, nightly builds and prev. versions"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-chevron-right"
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "social w-clearfix"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GithubButtonWithCount__WEBPACK_IMPORTED_MODULE_3__["default"], {
    repo: "gisto",
    user: "gisto",
    type: "fork",
    count: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GithubButtonWithCount__WEBPACK_IMPORTED_MODULE_3__["default"], {
    repo: "gisto",
    user: "gisto",
    type: "watch",
    count: true
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/components/Logo.js":
/*!********************************!*\
  !*** ./src/components/Logo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Logo = function Logo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "gisto",
    style: {
      fontWeight: 400
    }
  }, '{ Gisto }');
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./src/components/Slider.js":
/*!**********************************!*\
  !*** ./src/components/Slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_colours2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/colours2.png */ "./src/images/colours2.png");
/* harmony import */ var _images_colours2_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_colours2_png__WEBPACK_IMPORTED_MODULE_2__);



var images = ['https://camo.githubusercontent.com/5d6d4a596d8a290f34c3d4997314076d27c68683/68747470733a2f2f696d6775722e636f6d2f4a7838546339732e706e67', 'https://camo.githubusercontent.com/167453afa79d0f2b3eee9b5436be08682976f5b9/68747470733a2f2f696d6775722e636f6d2f4f777365796b562e706e67', 'https://camo.githubusercontent.com/7c6db3c04ccbc2b60b41a079016a40a3edc687b8/68747470733a2f2f696d6775722e636f6d2f7969454a524e742e706e67', 'https://camo.githubusercontent.com/3ab6b0d1da376692ee05e5096cc0f1481c75563a/68747470733a2f2f696d6775722e636f6d2f4a7455437366492e706e67', 'https://camo.githubusercontent.com/d878121736eb99225f5449cf3f5b8e65e324893c/68747470733a2f2f696d6775722e636f6d2f31796c695968522e706e67', 'https://camo.githubusercontent.com/2a727b8251db908fa58552b631786e96c84a5019/68747470733a2f2f696d6775722e636f6d2f616f57355638452e706e67', _images_colours2_png__WEBPACK_IMPORTED_MODULE_2___default.a];

var Slider =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Slider, _React$Component);

  function Slider() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      current: images[0]
    };

    _this.setImage = function (current) {
      return _this.setState({
        current: current
      });
    };

    return _this;
  }

  var _proto = Slider.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "app-image",
      className: "shadow"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      alt: "Gisto",
      className: "opaque",
      width: "460",
      height: "288",
      src: this.state.current
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      id: "app-image-controls"
    }, images.map(function (name, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        key: name
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: _this2.state.current === images[index] ? 'selected' : '',
        onClick: function onClick() {
          return _this2.setImage(images[index]);
        }
      }), "\xA0");
    })));
  };

  return Slider;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "core-js/modules/es6.regexp.replace");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_static_d_66919261_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/static/d/66919261.json */ "./public/static/d/66919261.json");
var _public_static_d_66919261_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/66919261.json */ "./public/static/d/66919261.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Logo */ "./src/components/Logo.js");









var Footer = function Footer(_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "push"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("footer", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "w-container"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "w-row"
  }, data.site.siteMetadata.contributors.map(function (contributor) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
      key: contributor.name
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "w-col w-col-1 w-clearfix"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
      src: contributor.gravatar,
      alt: contributor.name
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "w-col w-col-5 w-clearfix"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", null, contributor.name), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      href: contributor.site
    }, contributor.site.replace('https://', '')), " |\xA0", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      href: "https://twitter.com/" + contributor.twitter_name
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      className: "fa fa-twitter"
    })), " |\xA0", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      href: "https://github.com/" + contributor.github_name
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
      className: "fa fa-github"
    })))));
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "txt-center"
  }, "\xA9 ", new Date().getFullYear(), " ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], null))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "#top",
    className: "top innsite"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
    className: "fa fa-arrow-up"
  })));
};

Footer.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_6__["StaticQuery"], {
    query: "66919261",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Footer, Object.assign({
        data: data
      }, props));
    },
    data: _public_static_d_66919261_json__WEBPACK_IMPORTED_MODULE_3__
  });
});

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_d_182442897_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/static/d/182442897.json */ "./public/static/d/182442897.json");
var _public_static_d_182442897_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/182442897.json */ "./public/static/d/182442897.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-media */ "./node_modules/react-media/esm/react-media.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Logo */ "./src/components/Logo.js");








var Header =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Header, _Component);

  function Header() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      open: false
    };

    _this.handleMenu = function (open) {
      return _this.setState({
        open: open
      });
    };

    return _this;
  }

  var _proto = Header.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var data = this.props.data;
    var menu = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, data.site.siteMetadata && data.site.siteMetadata.navigation.map(function (link) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        onClick: function onClick() {
          return _this2.handleMenu(false);
        }
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["Link"], {
        to: link.path,
        key: link.path,
        activeClassName: "active",
        className: "nav-link first current"
      }, link.displayName));
    }));
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("header", {
      className: "section header"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "header"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_media__WEBPACK_IMPORTED_MODULE_4__["default"], {
      query: {
        maxWidth: 599
      }
    }, function (matches) {
      return matches ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "mobile-menu",
        onClick: function onClick() {
          return _this2.handleMenu(_this2.state.open = !_this2.state.open);
        }
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
        className: "fa " + (_this2.state.open ? 'fa-times' : 'fa-bars') + " fa-2x"
      })), _this2.state.open && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, menu)) : null;
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("strong", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "/"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], null))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "w-container"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "w-row"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("nav", {
      className: "w-col w-col-12 w-clearfix nav-column"
    }, menu))));
  };

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["StaticQuery"], {
    query: "182442897",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Header, Object.assign({
        data: data
      }, props));
    },
    data: _public_static_d_182442897_json__WEBPACK_IMPORTED_MODULE_2__
  });
});

/***/ }),

/***/ "./src/html.js":
/*!*********************!*\
  !*** ./src/html.js ***!
  \*********************/
/*! exports provided: HTML, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML", function() { return HTML; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var HTML = function HTML(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", props.htmlAttributes, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    httpEquiv: "x-ua-compatible",
    content: "ie=edge"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), props.headComponents, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:site",
    content: "@gistoapp"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:creator",
    content: "@gistoapp"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:title",
    content: "Gisto - Manage your github gists on desktop"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:description",
    content: "Cross-platform gist snippets management desktop application that allows you and your team share code snippets fast and easily #gistoapp"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:image",
    content: "https://raw.githubusercontent.com/Gisto/Gisto/master/app/icon.png"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: "Gisto - Manage your github gists on desktop"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:url",
    content: "https://www.gistoapp.com"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image",
    content: "https://raw.githubusercontent.com/Gisto/Gisto/master/app/icon.png"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:site_name",
    content: "Gistoapp"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:description",
    content: "Cross-platform gist snippets management desktop application that allows you and your team share code snippets fast and easily #gistoapp"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    type: "text/javascript",
    dangerouslySetInnerHTML: {
      __html: "\n          //<![CDATA[\n              var _gaq = _gaq || [];\n              _gaq.push(['_setAccount', 'UA-40972813-1']);\n              _gaq.push(['_trackPageview']);\n              (function () {\n                var ga = document.createElement('script');\n                ga.type = 'text/javascript';\n                ga.async = true;\n                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';\n                var s = document.getElementsByTagName('script')[0];\n                s.parentNode.insertBefore(ga, s);\n              })();\n              //]]>\n          "
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "\n             WebFont.load({\n                google: {\n                families: [\"Open Sans:300,400,600,700,800\", \"Roboto:300,400,600,700,800\"]\n            }\n            });\n            "
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    type: "text/javascript",
    src: "https://ws.sharethis.com/button/buttons.js"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "\n            stLight.options({publisher: \"6ccdc1be-66dc-486b-bd54-e41e194e96d5\", doNotHash: false, doNotCopy: false, hashAddressBar: false});\n            "
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    type: "text/javascript",
    dangerouslySetInnerHTML: {
      __html: "\n        function sharePost(wUrl, wTitle, wWidth, wHeight) {\n          var wTop = (screen.height / 2) - (wHeight / 2);\n          var wLeft = (screen.width / 2) - (wWidth / 2);\n          window.open(wUrl, wTitle, 'top=' + wTop + ',left=' + wLeft + ',toolbar=0,status=0,width=' + wWidth + ',height=' + wHeight);\n        }\n        "
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", props.bodyAttributes, props.preBodyComponents, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: "body",
    id: "___gatsby",
    dangerouslySetInnerHTML: {
      __html: props.body
    }
  }), props.postBodyComponents));
};
HTML.propTypes = {
  htmlAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  headComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  bodyAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  preBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  body: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  postBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (HTML);

/***/ }),

/***/ "./src/images/QWERTY_keyboard.jpg":
/*!****************************************!*\
  !*** ./src/images/QWERTY_keyboard.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/QWERTY_keyboard-7bc2c9de9cfa99a1563eb8cfb88b41be.jpg";

/***/ }),

/***/ "./src/images/add-new-snippet.png":
/*!****************************************!*\
  !*** ./src/images/add-new-snippet.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/add-new-snippet-5b387267078c67a39e27c7d83b039dde.png";

/***/ }),

/***/ "./src/images/colours.png":
/*!********************************!*\
  !*** ./src/images/colours.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/colours-7e64bec52f4f5d7076395b414968145f.png";

/***/ }),

/***/ "./src/images/colours2.png":
/*!*********************************!*\
  !*** ./src/images/colours2.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/colours2-78ccd60797813bb71b9e4b1073060987.png";

/***/ }),

/***/ "./src/images/dashboard.png":
/*!**********************************!*\
  !*** ./src/images/dashboard.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/dashboard-e06edc3a06bdc95b4d63a3f2dd2ac6e7.png";

/***/ }),

/***/ "./src/images/drag.png":
/*!*****************************!*\
  !*** ./src/images/drag.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/drag-93b58e9d5a77a7a5a568c7fc0f662dc2.png";

/***/ }),

/***/ "./src/images/edit.png":
/*!*****************************!*\
  !*** ./src/images/edit.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/edit-0208387549100db11339e4e75dd15c03.png";

/***/ }),

/***/ "./src/images/monaco.png":
/*!*******************************!*\
  !*** ./src/images/monaco.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/monaco-a42cd22646fc7f1f1738cb931ac8c046.png";

/***/ }),

/***/ "./src/images/options.png":
/*!********************************!*\
  !*** ./src/images/options.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/options-d7f2682c5881b3c86bbfb93f4fab21b0.png";

/***/ }),

/***/ "./src/images/regular-and-enterprise-login.png":
/*!*****************************************************!*\
  !*** ./src/images/regular-and-enterprise-login.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/regular-and-enterprise-login-91c6e3809c227ff536162957e8df3d74.png";

/***/ }),

/***/ "./src/images/revisions.png":
/*!**********************************!*\
  !*** ./src/images/revisions.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/revisions-5e881235dcea3b8d12d2be061225a13d.png";

/***/ }),

/***/ "./src/images/search.png":
/*!*******************************!*\
  !*** ./src/images/search.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/search-c9c0f0140fc0b214eca2401fbf07f83e.png";

/***/ }),

/***/ "./src/images/tagging.png":
/*!********************************!*\
  !*** ./src/images/tagging.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/tagging-2001f951a6e032365fd285621498b770.png";

/***/ }),

/***/ "./src/images/themes.png":
/*!*******************************!*\
  !*** ./src/images/themes.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/themes-804034f92435c351871387b5727aa099.png";

/***/ }),

/***/ "./src/images/web.png":
/*!****************************!*\
  !*** ./src/images/web.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/web-9e8fc727c24abfef054c6dabd66c0881.png";

/***/ }),

/***/ "./src/pages/blog.js":
/*!***************************!*\
  !*** ./src/pages/blog.js ***!
  \***************************/
/*! exports provided: query, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/header */ "./src/components/header.js");
/* harmony import */ var components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/footer */ "./src/components/footer.js");






var Blog = function Blog(_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Blog")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_header__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Blog"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "whiter boxes is-page-blog page-docs"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-container content-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-row w-col"
  }, data.allMarkdownRemark.edges.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, post.node.frontmatter.date), post.node.frontmatter.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, post.node.excerpt), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      className: "more",
      to: post.node.frontmatter.path
    }, " Read more ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-chevron-right"
    })));
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};

var query = "3473231669";
/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ }),

/***/ "./src/pages/documentation.js":
/*!************************************!*\
  !*** ./src/pages/documentation.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/header */ "./src/components/header.js");
/* harmony import */ var components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/footer */ "./src/components/footer.js");
/* harmony import */ var _images_add_new_snippet_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/add-new-snippet.png */ "./src/images/add-new-snippet.png");
/* harmony import */ var _images_add_new_snippet_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_add_new_snippet_png__WEBPACK_IMPORTED_MODULE_4__);






var Docs = function Docs() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Documentation")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Documentation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "whiter boxes page-docs inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-container content-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-col w-col-3 w-clearfix side-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "NAV"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "innsite",
    href: "#tags"
  }, "Tag gist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "innsite",
    href: "#proxy"
  }, "Usage via proxy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "innsite",
    href: "#new-snippet"
  }, "Add new snippet")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "innsite",
    href: "#devs"
  }, "For developers"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-col w-col-9 w-clearfix main"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "tags"
  }, "Tag gist"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Every gist can be tagged by adding hash-tag to it's title."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "For example: You have a gist titled"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "TEXT"), "Simple html template"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "and you'd like to tag it with \"template\" and \"html\" tags. All you need to do, is to add these tags as hash-tags to the end of the title like so:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "TEXT"), "Simple html template #html #template"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Gisto will then use the hash-tags to display tags in the gist list and search by this tags."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "proxy"
  }, "Usage via proxy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "To run Gisto via proxy you'll have to start gisto with command line arguments:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "SHELL"), "./Gisto-x.x.x.exe --args --proxy-server=proxyhost:port"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "new-snippet"
  }, "Add new snippet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "To add new snippet, simply click the \"+ New snippet\" button on the top of the app."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_add_new_snippet_png__WEBPACK_IMPORTED_MODULE_4___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "devs"
  }, "Setting up for development"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Pre-installed requirements:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "fa-ul"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "icons-li"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-chevron-circle-right"
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://git-scm.com/downloads"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "GIT")), "- distributed version control"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "icons-li"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-chevron-circle-right"
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://nodejs.org/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Node.js"), " and ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "npm")), " - server-side software system written in JavaScript")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Set it all to work together:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-chevron-circle-right"
  }), " Clone the latest \"next\" branch: with the following command to a directory of your choice:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "SHELL"), "git clone -b next --single-branch https://github.com/Gisto/Gisto.git"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-chevron-circle-right"
  }), " Install dependencies in the directory created by cloning:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "SHELL"), "npm install"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-chevron-circle-right"
  }), " Run the local application (electron mode):"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "SHELL"), "npm run dev"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-chevron-circle-right"
  }), " Run the local application (webapp):"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "SHELL"), "npm run start:web"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "(for more commands, check-out package.json's script section)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Congratulations!"), " If all went well, you are now have set-up local version of Gisto in your machine."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Docs);

/***/ }),

/***/ "./src/pages/downloads.js":
/*!********************************!*\
  !*** ./src/pages/downloads.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/header */ "./src/components/header.js");
/* harmony import */ var components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/footer */ "./src/components/footer.js");
/* harmony import */ var components_Downloads__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Downloads */ "./src/components/Downloads.js");





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Downloads")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Downloads"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Downloads__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
});

/***/ }),

/***/ "./src/pages/faq.js":
/*!**************************!*\
  !*** ./src/pages/faq.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/header */ "./src/components/header.js");
/* harmony import */ var components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/footer */ "./src/components/footer.js");





var Faq = function Faq() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "F.A.Q.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "F.A.Q."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "whiter boxes page-faq inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-container content-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-col w-col-3 w-clearfix side-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "QUESTIONS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "innsite",
    href: "#what-is-gisto"
  }, "What is Gisto?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "innsite",
    href: "#auth"
  }, "Authentication")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "innsite",
    href: "#do-you-use-server"
  }, "Do you use backend server?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "innsite",
    href: "#who-can-see-my-gists"
  }, "Who can see my gists?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "innsite",
    href: "#run-as-portable"
  }, "Use gisto as portable application in windows.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "innsite",
    href: "#do-you-plan-to-add-feature"
  }, "Do you plan to support / add support for [future-name-here]?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "innsite",
    href: "#issues-bugs-features"
  }, "Issues, bug reporting, pull and feature requests")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "innsite",
    href: "#how-to-contact"
  }, "How to contact us"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-col w-col-9 w-clearfix"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "what-is-gisto"
  }, "What is Gisto?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Gisto is a code snippet manager that runs on GitHub Gists and adds additional features such as searching, tagging and sharing gists while including a rich code editor."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Gisto is cross platform and is in constant sync with GitHub so you can view and edit your Gists via both Gisto and GitHub."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "auth"
  }, "Authentication"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Gisto authenticates to GitHub by using basic authentication over SSL and retrieving an oAuth2 token thus the need for your GitHub user and password."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Gisto only saves the oAuth2 token received after authenticating and nothing else. If you would rather to supply your own access token without providing Gisto your login details you may manually create an access token from the account settings at GitHub and login using the generated token."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This token will be saved permanently until you log out."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "do-you-use-server"
  }, "Do you use backend server?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Gisto is using GitHub gist API and communicates directly with Github, no 3rd party server or database involved in gist management."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "However we do use a backend server for \"notifications and sharing service\", the only data stored is username and gist ID and this is to allow Gisto to notify user if there are Gists shared with him."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You also have the option of running your own notification server so you can be sure your data is secure."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "who-can-see-my-gists"
  }, "Who can see my Gists?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "As per GitHub Guidelines Gists are not private and are available to the public."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The difference between secret and public Gists is that public Gists are listed on GitHub website for public viewing and searching while secret Gists are not"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "run-as-portable"
  }, "Use gisto as portable application on windows?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "For a non-installer version of Gisto, you can:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "fa-ul"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "icons-li"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-chevron-circle-right"
  }), " Download a ZIP file of Windows Version from Gisto \"Nightly\" builds: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://build.gistoapp.com"
  }, "build.gistoapp.com"), " and extract it to some directory of your choosing."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "icons-li"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-chevron-circle-right"
  }), " Create a empty file in directory you've extracted Gisto ZIP named ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null, "gisto.bat")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "icons-li"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-chevron-circle-right"
  }), " Edit ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null, "gisto.bat"), " file and add the following content: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "gisto.exe --data-path=\"./gistoData\"")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "icons-li"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-chevron-circle-right"
  }), " Start Gisto by double-click the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null, "gisto.bat"), " file.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You have now your portable version of Gisto and all data will be saved in directory named ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null, "gistoData"), ", relative to path where you are running Gisto from."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "In order to update portable Gisto - just download new version ZIP and extract it by overwriting the existing files."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "do-you-plan-to-add-feature"
  }, "Do you plan to support / add support for [", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "future-name-here"), "]?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Please open a feature request in our ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/Gisto/Gisto/issues"
  }, "issue tracker"), ", we appreciate and strive for suggestions on how to improve Gisto."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "issues-bugs-features"
  }, "Issues, bug reporting, pull and feature requests"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Please feel free to add a bug / feature request / suggestions to the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/Gisto/Gisto/issues"
  }, "issue tracker"), ". Pull requests are also very welcome as well."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "how-to-contact"
  }, "How to contact us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Twitter: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://twitter.com/gistoapp"
  }, "@gistoapp")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Email: contact@gistoapp.com"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Issue tracker: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/Gisto/Gisto/issues"
  }, "Issue tracker at GitHub")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Faq);

/***/ }),

/***/ "./src/pages/features.js":
/*!*******************************!*\
  !*** ./src/pages/features.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/header */ "./src/components/header.js");
/* harmony import */ var components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/footer */ "./src/components/footer.js");
/* harmony import */ var images_search_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! images/search.png */ "./src/images/search.png");
/* harmony import */ var images_search_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(images_search_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var images_tagging_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! images/tagging.png */ "./src/images/tagging.png");
/* harmony import */ var images_tagging_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(images_tagging_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var images_options_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! images/options.png */ "./src/images/options.png");
/* harmony import */ var images_options_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(images_options_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var images_regular_and_enterprise_login_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! images/regular-and-enterprise-login.png */ "./src/images/regular-and-enterprise-login.png");
/* harmony import */ var images_regular_and_enterprise_login_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(images_regular_and_enterprise_login_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var images_dashboard_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! images/dashboard.png */ "./src/images/dashboard.png");
/* harmony import */ var images_dashboard_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(images_dashboard_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var images_web_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! images/web.png */ "./src/images/web.png");
/* harmony import */ var images_web_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(images_web_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var images_revisions_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! images/revisions.png */ "./src/images/revisions.png");
/* harmony import */ var images_revisions_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(images_revisions_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var images_drag_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! images/drag.png */ "./src/images/drag.png");
/* harmony import */ var images_drag_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(images_drag_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var images_themes_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! images/themes.png */ "./src/images/themes.png");
/* harmony import */ var images_themes_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(images_themes_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var images_colours_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! images/colours.png */ "./src/images/colours.png");
/* harmony import */ var images_colours_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(images_colours_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var images_monaco_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! images/monaco.png */ "./src/images/monaco.png");
/* harmony import */ var images_monaco_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(images_monaco_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var images_QWERTY_keyboard_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! images/QWERTY_keyboard.jpg */ "./src/images/QWERTY_keyboard.jpg");
/* harmony import */ var images_QWERTY_keyboard_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(images_QWERTY_keyboard_jpg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Logo */ "./src/components/Logo.js");


















var Features = function Features() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Features")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Features"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "whiter boxes"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-container main content-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-col w-col-4 w-clearfix feat"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: images_search_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Search"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Search"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Gists can be found quickly using our search and can be filtered by gist description, file names, tags and more.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-col w-col-4 w-clearfix feat"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "Tagging",
    src: images_tagging_png__WEBPACK_IMPORTED_MODULE_5___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Gist tagging"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Logo__WEBPACK_IMPORTED_MODULE_16__["default"], null), " allows you to tag Gists with custom tags to help you find your Gists easily.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-col w-col-4 w-clearfix feat"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "Options",
    src: images_options_png__WEBPACK_IMPORTED_MODULE_6___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Quick actions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Logo__WEBPACK_IMPORTED_MODULE_16__["default"], null), " allows you to quickly download,copy and view your Gists on GitHub, in addition you can also generate embed links or view your Gists on plunkr, jsbin or jsfiddle."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-col w-col-4 w-clearfix feat"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "regular and enterprise login",
    src: images_regular_and_enterprise_login_png__WEBPACK_IMPORTED_MODULE_7___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Enterprise mode"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Enterprise mode in ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Logo__WEBPACK_IMPORTED_MODULE_16__["default"], null), " allows connecting to your GitHub enterprise (on-premise) instead of public github")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-col w-col-4 w-clearfix feat"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: images_dashboard_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "Dashboard"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Dashboard"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Feature rich, informative dashboard will show active, private, starred and untitled snippets count. List tags, languages and starred snippets with quick search.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-col w-col-4 w-clearfix feat"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: images_web_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "Web app"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Web app"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Since version ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "v1.9.84"), ", ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Logo__WEBPACK_IMPORTED_MODULE_16__["default"], null), " available as a full featured web app. You can navigate your browser to", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://web.gistoapp.com"
  }, "web.gistoapp.com"), " to access web app."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-col w-col-4 w-clearfix feat"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: images_revisions_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "Revisions"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Revision browser"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The revision browser enables you to see all previous changes to the gist as well as change statistics and viewing the revision as it were at that time")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-col w-col-4 w-clearfix feat"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: images_drag_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "Drag and drop"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Drag & Drop"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Logo__WEBPACK_IMPORTED_MODULE_16__["default"], null), " supports drag and drop support for your files, you can drop files or directories into existing or new gists alike to add new files to gists")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-col w-col-4 w-clearfix feat"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: images_themes_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "Themes"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Color SWITCHING"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You can chose app color via the settings menu. Any color can be used as a base collor for ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Logo__WEBPACK_IMPORTED_MODULE_16__["default"], null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-col w-col-4 w-clearfix feat"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: images_colours_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: "App color"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Choose any color"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Logo__WEBPACK_IMPORTED_MODULE_16__["default"], null), " can be set to any color using system color selector from the settings menu")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-col w-col-4 w-clearfix feat"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: images_monaco_png__WEBPACK_IMPORTED_MODULE_14___default.a,
    alt: "Editor"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Rich editor"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Logo__WEBPACK_IMPORTED_MODULE_16__["default"], null), " includes open-source", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://microsoft.github.io/monaco-editor/"
  }, "monaco editor"), ". A rich code editor for editing your Gists and includes features such as syntax highlighting auto-completion emmet and more.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-col w-col-4 w-clearfix feat"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: images_QWERTY_keyboard_jpg__WEBPACK_IMPORTED_MODULE_15___default.a,
    alt: "Keyboard shortcuts"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Keyboard shortcuts"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Logo__WEBPACK_IMPORTED_MODULE_16__["default"], null), " also has a variety of keyboard shortcuts, just press ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "?"), " to view them."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Features);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/header */ "./src/components/header.js");
/* harmony import */ var components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/footer */ "./src/components/footer.js");
/* harmony import */ var components_Slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Slider */ "./src/components/Slider.js");
/* harmony import */ var styles_grid_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/grid.css */ "./src/styles/grid.css");
/* harmony import */ var styles_grid_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styles_grid_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! font-awesome/css/font-awesome.min.css */ "./node_modules/font-awesome/css/font-awesome.min.css");
/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styles_gisto_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styles/gisto.scss */ "./src/styles/gisto.scss");
/* harmony import */ var styles_gisto_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styles_gisto_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var images_edit_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! images/edit.png */ "./src/images/edit.png");
/* harmony import */ var images_edit_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(images_edit_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var images_search_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! images/search.png */ "./src/images/search.png");
/* harmony import */ var images_search_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(images_search_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var images_tagging_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! images/tagging.png */ "./src/images/tagging.png");
/* harmony import */ var images_tagging_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(images_tagging_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var components_Downloads__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Downloads */ "./src/components/Downloads.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Hero */ "./src/components/Hero.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/About */ "./src/components/About.js");
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Logo */ "./src/components/Logo.js");
















/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _React$createElement;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Gisto - Snippets Made Awesome")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_header__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "home"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "under-nav"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Snippets Made Awesome"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Features"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "whiter boxes features-boxes"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-col w-col-4 w-clearfix feat"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", (_React$createElement = {
    alt: "Gisto",
    src: images_edit_png__WEBPACK_IMPORTED_MODULE_9___default.a
  }, _React$createElement["alt"] = "Edit", _React$createElement)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Rich Editor"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Logo__WEBPACK_IMPORTED_MODULE_15__["default"], null), " includes open-source ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://microsoft.github.io/monaco-editor/"
  }, "monaco editor"), ". A rich code editor for editing your Gists and includes features such as syntax highlighting auto-completion emmet and more.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-col w-col-4 w-clearfix feat"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: images_search_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "Edit"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Search"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Gists can be found quickly using our search and can be filtered by gist description, file names, tag or multiple tags, language and more.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-col w-col-4 w-clearfix feat"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: images_tagging_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "Edit"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Tags"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Logo__WEBPACK_IMPORTED_MODULE_15__["default"], null), " allows you to tag Gists with custom tags to help you find your Gists easily. Just add hashtag to snippet title and you done. Later gitsts can be found by typing hash-tag into search or from the tag list on the dashboard."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "center-holder"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "features",
    className: "btn bg-grey txt-white btn-center"
  }, "More features ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-chevron-right"
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: "about"
  }, "About ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Logo__WEBPACK_IMPORTED_MODULE_15__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "whiter boxes"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_About__WEBPACK_IMPORTED_MODULE_14__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: "download"
  }, "Downloads"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Downloads__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
});

/***/ }),

/***/ "./src/styles/gisto.scss":
/*!*******************************!*\
  !*** ./src/styles/gisto.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/styles/grid.css":
/*!*****************************!*\
  !*** ./src/styles/grid.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/templates/blog-post.js":
/*!************************************!*\
  !*** ./src/templates/blog-post.js ***!
  \************************************/
/*! exports provided: default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! disqus-react */ "./node_modules/disqus-react/lib/index.js");
/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(disqus_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/header */ "./src/components/header.js");
/* harmony import */ var components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/footer */ "./src/components/footer.js");






var BlogPost = function BlogPost(_ref) {
  var data = _ref.data,
      location = _ref.location;
  var url = "https://www.gistoapp.com" + location.pathname;
  var title = data.markdownRemark.frontmatter.title;
  var disqusShortname = 'gisto';
  var disqusConfig = {
    url: url,
    title: title,
    identifier: title
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_header__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "is-page-blog inner post"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "whiter boxes"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-container main content-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-row w-col"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "blog",
    className: "more btn bg-grey back"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-chevron-left"
  }), " Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, data.markdownRemark.frontmatter.post_title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "by ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, data.markdownRemark.frontmatter.author), " | ", data.markdownRemark.frontmatter.date)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: data.markdownRemark.html
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "javascript:sharePost('http://twitter.com/share?url=" + url + "&amp;text=" + title + " @gistoapp','Sahare " + title + " via Twitter',520,350);",
    className: "btn bg-grey twitter txt-white"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-twitter"
  })), "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "javascript:sharePost('http://www.facebook.com/sharer.php?p[title]=Gisto&p[summary]=" + title + "&p[url]=" + url + "','Sahare " + title + " via Facebook',520,350);",
    className: "btn bg-grey fb txt-white"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-facebook"
  })), "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "javascript:sharePost('https://plus.google.com/share?url=" + url + "','Sahare " + title + " via Google+',520,350);",
    className: "btn bg-grey gplus txt-white"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-google-plus"
  })), "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:?Subject=Gisto: " + title + "&amp;Body=" + title + " at " + url,
    className: "btn bg-grey txt-white"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-envelope"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "post"
  }, "Comments"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "whiter boxes"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-container main content-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-row w-col"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(disqus_react__WEBPACK_IMPORTED_MODULE_2__["DiscussionEmbed"], {
    shortname: disqusShortname,
    config: disqusConfig
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogPost);
var pageQuery = "1562271849";

/***/ }),

/***/ "@reach/router":
/*!********************************!*\
  !*** external "@reach/router" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__reach_router__;

/***/ }),

/***/ "core-js/modules/es6.array.iterator":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__;

/***/ }),

/***/ "core-js/modules/es6.array.sort":
/*!*************************************************!*\
  !*** external "core-js/modules/es6.array.sort" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__;

/***/ }),

/***/ "core-js/modules/es6.function.name":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.function.name" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__;

/***/ }),

/***/ "core-js/modules/es6.map":
/*!******************************************!*\
  !*** external "core-js/modules/es6.map" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__;

/***/ }),

/***/ "core-js/modules/es6.object.assign":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.object.assign" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__;

/***/ }),

/***/ "core-js/modules/es6.object.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.object.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_to_string__;

/***/ }),

/***/ "core-js/modules/es6.regexp.constructor":
/*!*********************************************************!*\
  !*** external "core-js/modules/es6.regexp.constructor" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__;

/***/ }),

/***/ "core-js/modules/es6.regexp.replace":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.regexp.replace" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_replace__;

/***/ }),

/***/ "core-js/modules/es6.regexp.split":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.regexp.split" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__;

/***/ }),

/***/ "core-js/modules/es6.regexp.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.regexp.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__;

/***/ }),

/***/ "core-js/modules/es6.string.ends-with":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.string.ends-with" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__;

/***/ }),

/***/ "core-js/modules/es6.string.iterator":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.string.iterator" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__;

/***/ }),

/***/ "core-js/modules/es6.string.link":
/*!**************************************************!*\
  !*** external "core-js/modules/es6.string.link" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_link__;

/***/ }),

/***/ "core-js/modules/web.dom.iterable":
/*!***************************************************!*\
  !*** external "core-js/modules/web.dom.iterable" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_path__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_helmet__;

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map