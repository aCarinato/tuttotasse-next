"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/intertives/rendita-catastale",{

/***/ "./pages/intertives/rendita-catastale.js":
/*!***********************************************!*\
  !*** ./pages/intertives/rendita-catastale.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_intertives_rendita_catastale_ConclusionC1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/intertives/rendita-catastale/ConclusionC1 */ \"./components/intertives/rendita-catastale/ConclusionC1.js\");\n/* harmony import */ var _components_intertives_rendita_catastale_ConclusionC2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/intertives/rendita-catastale/ConclusionC2 */ \"./components/intertives/rendita-catastale/ConclusionC2.js\");\n/* harmony import */ var _components_intertives_RadioItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/intertives/RadioItems */ \"./components/intertives/RadioItems.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/alessandrocarinato/Documents/Projects/tuttotasse-next/client/pages/intertives/rendita-catastale.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar RenditaCatastale = function RenditaCatastale() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      selectionA = _useState[0],\n      setSelectionA = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      selectionB = _useState2[0],\n      setSelectionB = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      selectionC = _useState3[0],\n      setSelectionC = _useState3[1];\n\n  var handleSelectionA = function handleSelectionA(e) {\n    var selectedValue = e.target.value;\n    setSelectionA(selectedValue);\n    setSelectionB('');\n    setSelectionC('');\n  };\n\n  var handleSelectionB = function handleSelectionB(e) {\n    var selectedValue = e.target.value;\n    setSelectionB(selectedValue);\n    setSelectionC('');\n  };\n\n  var handleSelectionC = function handleSelectionC(e) {\n    var selectedValue = e.target.value;\n    setSelectionC(selectedValue);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"container-paragraph\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        id: \"intertive\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          className: \"link-h2\",\n          href: \"#intertive\",\n          children: \"Guida interattiva per conoscere la rendita catastale\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 36\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_intertives_RadioItems__WEBPACK_IMPORTED_MODULE_4__.default, {\n        onChange: handleSelectionA,\n        labelRadio: \"Propriet\\xE1 immobile\",\n        options: ['Immobile di Proprietá', 'Immobile Non di Proprietá']\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, _this), selectionA === 'Immobile di Proprietá' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_intertives_RadioItems__WEBPACK_IMPORTED_MODULE_4__.default, {\n        onChange: handleSelectionB,\n        labelRadio: \"Accesso Entratel - Fisconline (SPID/CIE/CNS/Credenziali)?:\",\n        options: ['Si', 'No']\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, _this), selectionA === 'Immobile Non di Proprietá' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_intertives_RadioItems__WEBPACK_IMPORTED_MODULE_4__.default, {\n        onChange: handleSelectionB,\n        labelRadio: \"Informazioni sull'immobile di cui \\xE9 a disposizione:\",\n        options: ['Proprietario (nome, cognome, data e luogo di nascita o codice fiscale)', 'Indirizzo', 'Identificativi catastali (foglio, particella, subalterno)']\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }, _this), selectionB === 'Si' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_intertives_rendita_catastale_ConclusionC1__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 41\n      }, _this), selectionB === 'No' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_intertives_RadioItems__WEBPACK_IMPORTED_MODULE_4__.default, {\n        onChange: handleSelectionC,\n        labelRadio: \"Informazioni sull'immobile di cui \\xE9 a disposizione:\",\n        options: ['Proprietario (nome, cognome, data e luogo di nascita o codice fiscale)', 'Indirizzo', 'Identificativi catastali (foglio, particella, subalterno)']\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 17\n      }, _this), selectionB === 'Proprietario (nome, cognome, data e luogo di nascita o codice fiscale)' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_intertives_rendita_catastale_ConclusionC2__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 109\n      }, _this), selectionC === 'Proprietario (nome, cognome, data e luogo di nascita o codice fiscale)' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_intertives_rendita_catastale_ConclusionC2__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 109\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(RenditaCatastale, \"K37zWJbHVAPBur+We5B8VqUHX8g=\");\n\n_c = RenditaCatastale;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RenditaCatastale);\n\nvar _c;\n\n$RefreshReg$(_c, \"RenditaCatastale\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbnRlcnRpdmVzL3JlbmRpdGEtY2F0YXN0YWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1JLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUFBOztBQUFBLGtCQUVTSiwrQ0FBUSxDQUFDLEVBQUQsQ0FGakI7QUFBQSxNQUVwQkssVUFGb0I7QUFBQSxNQUVSQyxhQUZROztBQUFBLG1CQUdTTiwrQ0FBUSxDQUFDLEVBQUQsQ0FIakI7QUFBQSxNQUdwQk8sVUFIb0I7QUFBQSxNQUdSQyxhQUhROztBQUFBLG1CQUlTUiwrQ0FBUSxDQUFDLEVBQUQsQ0FKakI7QUFBQSxNQUlwQlMsVUFKb0I7QUFBQSxNQUlSQyxhQUpROztBQU0zQixNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLENBQUQsRUFBTztBQUU1QixRQUFNQyxhQUFhLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUEvQjtBQUNBVCxJQUFBQSxhQUFhLENBQUNPLGFBQUQsQ0FBYjtBQUNBTCxJQUFBQSxhQUFhLENBQUMsRUFBRCxDQUFiO0FBQ0FFLElBQUFBLGFBQWEsQ0FBQyxFQUFELENBQWI7QUFDSCxHQU5EOztBQVFBLE1BQU1NLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0osQ0FBRCxFQUFPO0FBRTVCLFFBQU1DLGFBQWEsR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQS9CO0FBQ0FQLElBQUFBLGFBQWEsQ0FBQ0ssYUFBRCxDQUFiO0FBQ0FILElBQUFBLGFBQWEsQ0FBQyxFQUFELENBQWI7QUFDSCxHQUxEOztBQU9BLE1BQU1PLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0wsQ0FBRCxFQUFPO0FBRTVCLFFBQU1DLGFBQWEsR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQS9CO0FBQ0FMLElBQUFBLGFBQWEsQ0FBQ0csYUFBRCxDQUFiO0FBRUgsR0FMRDs7QUFPQSxzQkFDSTtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLHFCQUFmO0FBQUEsOEJBQ0k7QUFBSSxVQUFFLEVBQUMsV0FBUDtBQUFBLCtCQUFtQjtBQUFHLG1CQUFTLEVBQUMsU0FBYjtBQUF1QixjQUFJLEVBQUMsWUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUksOERBQUMsc0VBQUQ7QUFDSSxnQkFBUSxFQUFFRixnQkFEZDtBQUVJLGtCQUFVLEVBQUMsdUJBRmY7QUFHSSxlQUFPLEVBQUUsQ0FBQyx1QkFBRCxFQUEwQiwyQkFBMUI7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosRUFRS04sVUFBVSxLQUFLLHVCQUFmLGlCQUNELDhEQUFDLHNFQUFEO0FBQ0ksZ0JBQVEsRUFBRVcsZ0JBRGQ7QUFFSSxrQkFBVSxFQUFDLDREQUZmO0FBR0ksZUFBTyxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVA7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEosRUFnQktYLFVBQVUsS0FBSywyQkFBZixpQkFDRCw4REFBQyxzRUFBRDtBQUNJLGdCQUFRLEVBQUVXLGdCQURkO0FBRUksa0JBQVUsRUFBQyx3REFGZjtBQUdJLGVBQU8sRUFBRSxDQUNMLHdFQURLLEVBRUwsV0FGSyxFQUdMLDJEQUhLO0FBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpCSixFQTRCS1QsVUFBVSxLQUFLLElBQWYsaUJBQXVCLDhEQUFDLDBGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE1QjVCLEVBOEJLQSxVQUFVLEtBQUssSUFBZixpQkFDRCw4REFBQyxzRUFBRDtBQUNJLGdCQUFRLEVBQUVVLGdCQURkO0FBRUksa0JBQVUsRUFBQyx3REFGZjtBQUdJLGVBQU8sRUFBRSxDQUNMLHdFQURLLEVBRUwsV0FGSyxFQUdMLDJEQUhLO0FBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQS9CSixFQTBDS1YsVUFBVSxLQUFLLHdFQUFmLGlCQUEyRiw4REFBQywwRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBMUNoRyxFQTRDS0UsVUFBVSxLQUFLLHdFQUFmLGlCQUEyRiw4REFBQywwRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBNUNoRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFtREgsQ0EvRUQ7O0dBQU1MOztLQUFBQTtBQWlGTiwrREFBZUEsZ0JBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW50ZXJ0aXZlcy9yZW5kaXRhLWNhdGFzdGFsZS5qcz82NTI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29uY2x1c2lvbkMxIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ludGVydGl2ZXMvcmVuZGl0YS1jYXRhc3RhbGUvQ29uY2x1c2lvbkMxXCI7XG5pbXBvcnQgQ29uY2x1c2lvbkMyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ludGVydGl2ZXMvcmVuZGl0YS1jYXRhc3RhbGUvQ29uY2x1c2lvbkMyXCI7XG5pbXBvcnQgUmFkaW9JdGVtcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9pbnRlcnRpdmVzL1JhZGlvSXRlbXNcIjtcblxuY29uc3QgUmVuZGl0YUNhdGFzdGFsZSA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtzZWxlY3Rpb25BLCBzZXRTZWxlY3Rpb25BXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtzZWxlY3Rpb25CLCBzZXRTZWxlY3Rpb25CXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtzZWxlY3Rpb25DLCBzZXRTZWxlY3Rpb25DXSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0aW9uQSA9IChlKSA9PiB7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIHNldFNlbGVjdGlvbkEoc2VsZWN0ZWRWYWx1ZSlcbiAgICAgICAgc2V0U2VsZWN0aW9uQignJylcbiAgICAgICAgc2V0U2VsZWN0aW9uQygnJylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTZWxlY3Rpb25CID0gKGUpID0+IHtcblxuICAgICAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgc2V0U2VsZWN0aW9uQihzZWxlY3RlZFZhbHVlKVxuICAgICAgICBzZXRTZWxlY3Rpb25DKCcnKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdGlvbkMgPSAoZSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICBzZXRTZWxlY3Rpb25DKHNlbGVjdGVkVmFsdWUpXG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXBhcmFncmFwaFwiPlxuICAgICAgICAgICAgICAgIDxoMiBpZD1cImludGVydGl2ZVwiPjxhIGNsYXNzTmFtZT1cImxpbmstaDJcIiBocmVmPVwiI2ludGVydGl2ZVwiPkd1aWRhIGludGVyYXR0aXZhIHBlciBjb25vc2NlcmUgbGEgcmVuZGl0YSBjYXRhc3RhbGU8L2E+PC9oMj5cbiAgICAgICAgICAgICAgICA8UmFkaW9JdGVtcyBcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdGlvbkF9IFxuICAgICAgICAgICAgICAgICAgICBsYWJlbFJhZGlvPSdQcm9wcmlldMOhIGltbW9iaWxlJyBcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17WydJbW1vYmlsZSBkaSBQcm9wcmlldMOhJywgJ0ltbW9iaWxlIE5vbiBkaSBQcm9wcmlldMOhJ119IFxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICB7c2VsZWN0aW9uQSA9PT0gJ0ltbW9iaWxlIGRpIFByb3ByaWV0w6EnICYmIFxuICAgICAgICAgICAgICAgIDxSYWRpb0l0ZW1zIFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VsZWN0aW9uQn0gXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsUmFkaW89J0FjY2Vzc28gRW50cmF0ZWwgLSBGaXNjb25saW5lIChTUElEL0NJRS9DTlMvQ3JlZGVuemlhbGkpPzonIFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtbJ1NpJywgJ05vJ119IFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAge3NlbGVjdGlvbkEgPT09ICdJbW1vYmlsZSBOb24gZGkgUHJvcHJpZXTDoScgJiYgXG4gICAgICAgICAgICAgICAgPFJhZGlvSXRlbXMgXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3Rpb25CfSBcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxSYWRpbz1cIkluZm9ybWF6aW9uaSBzdWxsJ2ltbW9iaWxlIGRpIGN1aSDDqSBhIGRpc3Bvc2l6aW9uZTpcIiBcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1Byb3ByaWV0YXJpbyAobm9tZSwgY29nbm9tZSwgZGF0YSBlIGx1b2dvIGRpIG5hc2NpdGEgbyBjb2RpY2UgZmlzY2FsZSknLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICdJbmRpcml6em8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0lkZW50aWZpY2F0aXZpIGNhdGFzdGFsaSAoZm9nbGlvLCBwYXJ0aWNlbGxhLCBzdWJhbHRlcm5vKSdcbiAgICAgICAgICAgICAgICAgICAgXX0gXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAge3NlbGVjdGlvbkIgPT09ICdTaScgJiYgPENvbmNsdXNpb25DMSAvPn1cblxuICAgICAgICAgICAgICAgIHtzZWxlY3Rpb25CID09PSAnTm8nICYmXG4gICAgICAgICAgICAgICAgPFJhZGlvSXRlbXMgXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3Rpb25DfSBcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxSYWRpbz1cIkluZm9ybWF6aW9uaSBzdWxsJ2ltbW9iaWxlIGRpIGN1aSDDqSBhIGRpc3Bvc2l6aW9uZTpcIiBcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1Byb3ByaWV0YXJpbyAobm9tZSwgY29nbm9tZSwgZGF0YSBlIGx1b2dvIGRpIG5hc2NpdGEgbyBjb2RpY2UgZmlzY2FsZSknLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICdJbmRpcml6em8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0lkZW50aWZpY2F0aXZpIGNhdGFzdGFsaSAoZm9nbGlvLCBwYXJ0aWNlbGxhLCBzdWJhbHRlcm5vKSdcbiAgICAgICAgICAgICAgICAgICAgXX0gXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7c2VsZWN0aW9uQiA9PT0gJ1Byb3ByaWV0YXJpbyAobm9tZSwgY29nbm9tZSwgZGF0YSBlIGx1b2dvIGRpIG5hc2NpdGEgbyBjb2RpY2UgZmlzY2FsZSknICYmIDxDb25jbHVzaW9uQzIgLz59XG5cbiAgICAgICAgICAgICAgICB7c2VsZWN0aW9uQyA9PT0gJ1Byb3ByaWV0YXJpbyAobm9tZSwgY29nbm9tZSwgZGF0YSBlIGx1b2dvIGRpIG5hc2NpdGEgbyBjb2RpY2UgZmlzY2FsZSknICYmIDxDb25jbHVzaW9uQzIgLz59XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGl0YUNhdGFzdGFsZTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDb25jbHVzaW9uQzEiLCJDb25jbHVzaW9uQzIiLCJSYWRpb0l0ZW1zIiwiUmVuZGl0YUNhdGFzdGFsZSIsInNlbGVjdGlvbkEiLCJzZXRTZWxlY3Rpb25BIiwic2VsZWN0aW9uQiIsInNldFNlbGVjdGlvbkIiLCJzZWxlY3Rpb25DIiwic2V0U2VsZWN0aW9uQyIsImhhbmRsZVNlbGVjdGlvbkEiLCJlIiwic2VsZWN0ZWRWYWx1ZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU2VsZWN0aW9uQiIsImhhbmRsZVNlbGVjdGlvbkMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/intertives/rendita-catastale.js\n");

/***/ })

});