"use strict";
self["webpackHotUpdate_N_E"]("pages/loans",{

/***/ "./pages/loans/index.js":
/*!******************************!*\
  !*** ./pages/loans/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ loans; }
/* harmony export */ });
/* harmony import */ var D_Projekty_chain_wave_ChainWaveLoans_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Projekty_chain_wave_ChainWaveLoans_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Projekty_chain_wave_ChainWaveLoans_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Projekty_chain_wave_ChainWaveLoans_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_artifacts_contracts_ChainWaveLoans_sol_LoanFactory_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ethereum/artifacts/contracts/ChainWaveLoans.sol/LoanFactory.json */ "../ethereum/artifacts/contracts/ChainWaveLoans.sol/LoanFactory.json");
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../web3 */ "./web3.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Projekty\\chain-wave\\ChainWaveLoans\\frontend\\pages\\loans\\index.js",
    _s = $RefreshSig$();








var getFactoryData = /*#__PURE__*/function () {
  var _ref = (0,D_Projekty_chain_wave_ChainWaveLoans_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Projekty_chain_wave_ChainWaveLoans_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var instance;
    return D_Projekty_chain_wave_ChainWaveLoans_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            instance = new _web3__WEBPACK_IMPORTED_MODULE_4__.default.eth.Contract(_ethereum_artifacts_contracts_ChainWaveLoans_sol_LoanFactory_json__WEBPACK_IMPORTED_MODULE_3__.abi, "0x3Bfd7d095c31d1642f501595f1dfEd8D4C63C9D7");
            return _context.abrupt("return", instance);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getFactoryData() {
    return _ref.apply(this, arguments);
  };
}();

var getDeployedLoans = /*#__PURE__*/function () {
  var _ref2 = (0,D_Projekty_chain_wave_ChainWaveLoans_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Projekty_chain_wave_ChainWaveLoans_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
    var instance, requests;
    return D_Projekty_chain_wave_ChainWaveLoans_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getFactoryData();

          case 2:
            instance = _context2.sent;
            _context2.next = 5;
            return instance.methods.getDeployedLoanRequests().call();

          case 5:
            requests = _context2.sent;
            return _context2.abrupt("return", requests);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getDeployedLoans() {
    return _ref2.apply(this, arguments);
  };
}();

function loans() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      loading = _useState[0],
      setLoading = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)( /*#__PURE__*/(0,D_Projekty_chain_wave_ChainWaveLoans_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Projekty_chain_wave_ChainWaveLoans_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4() {
    var getLoansData, data;
    return D_Projekty_chain_wave_ChainWaveLoans_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            getLoansData = /*#__PURE__*/function () {
              var _ref4 = (0,D_Projekty_chain_wave_ChainWaveLoans_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Projekty_chain_wave_ChainWaveLoans_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
                var data;
                return D_Projekty_chain_wave_ChainWaveLoans_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return getDeployedLoans();

                      case 2:
                        data = _context3.sent;
                        return _context3.abrupt("return", data);

                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function getLoansData() {
                return _ref4.apply(this, arguments);
              };
            }();

            _context4.next = 3;
            return getLoansData();

          case 3:
            data = _context4.sent;
            setLoading(false);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })), []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {
    className: "wrapper",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Dimmer, {
      active: loading,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Loader, {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), "Loans"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

_s(loans, "J7PPXooW06IQ11rfabbvgk72KFw=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9hbnMuMDk2M2I3ODhhZTYwNTUzOWJmNzIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTVEsY0FBYztBQUFBLDJTQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNmQyxZQUFBQSxRQURlLEdBQ0osSUFBSUYsdURBQUosQ0FDZkQsa0dBRGUsRUFFZiw0Q0FGZSxDQURJO0FBQUEsNkNBS2RHLFFBTGM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZEQsY0FBYztBQUFBO0FBQUE7QUFBQSxHQUFwQjs7QUFRQSxJQUFNSyxnQkFBZ0I7QUFBQSw0U0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNBTCxjQUFjLEVBRGQ7O0FBQUE7QUFDakJDLFlBQUFBLFFBRGlCO0FBQUE7QUFBQSxtQkFFQUEsUUFBUSxDQUFDSyxPQUFULENBQWlCQyx1QkFBakIsR0FBMkNDLElBQTNDLEVBRkE7O0FBQUE7QUFFakJDLFlBQUFBLFFBRmlCO0FBQUEsOENBR2hCQSxRQUhnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFoQkosZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLEdBQXRCOztBQU1lLFNBQVNLLEtBQVQsR0FBaUI7QUFBQTs7QUFDOUIsa0JBQThCaEIsK0NBQVEsQ0FBQyxJQUFELENBQXRDO0FBQUEsTUFBT2lCLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBRUFuQixFQUFBQSxnREFBUyw2U0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRm9CLFlBQUFBLFlBREU7QUFBQSx3VEFDYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUNBUixnQkFBZ0IsRUFEaEI7O0FBQUE7QUFDYlMsd0JBQUFBLElBRGE7QUFBQSwwREFFWkEsSUFGWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURiOztBQUFBLDhCQUNGRCxZQURFO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBS1dBLFlBQVksRUFMdkI7O0FBQUE7QUFLRkMsWUFBQUEsSUFMRTtBQU1SRixZQUFBQSxVQUFVLENBQUMsS0FBRCxDQUFWOztBQU5RO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFPTixFQVBNLENBQVQ7QUFRQSxzQkFDRSw4REFBQyx3REFBRDtBQUFXLGFBQVMsRUFBQyxTQUFyQjtBQUFBLDRCQUNFLDhEQUFDLHFEQUFEO0FBQVEsWUFBTSxFQUFFRCxPQUFoQjtBQUFBLDZCQUNFLDhEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O0dBbkJ1QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9hbnMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBEaW1tZXIsIExvYWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgTG9hbkZhY3RvcnkgZnJvbSBcIi4uLy4uLy4uL2V0aGVyZXVtL2FydGlmYWN0cy9jb250cmFjdHMvQ2hhaW5XYXZlTG9hbnMuc29sL0xvYW5GYWN0b3J5Lmpzb25cIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uL3dlYjNcIjtcclxuXHJcbmNvbnN0IGdldEZhY3RvcnlEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgTG9hbkZhY3RvcnkuYWJpLFxyXG4gICAgXCIweDNCZmQ3ZDA5NWMzMWQxNjQyZjUwMTU5NWYxZGZFZDhENEM2M0M5RDdcIlxyXG4gICk7XHJcbiAgcmV0dXJuIGluc3RhbmNlO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0RGVwbG95ZWRMb2FucyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBpbnN0YW5jZSA9IGF3YWl0IGdldEZhY3RvcnlEYXRhKCk7XHJcbiAgY29uc3QgcmVxdWVzdHMgPSBhd2FpdCBpbnN0YW5jZS5tZXRob2RzLmdldERlcGxveWVkTG9hblJlcXVlc3RzKCkuY2FsbCgpO1xyXG4gIHJldHVybiByZXF1ZXN0cztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYW5zKCkge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0TG9hbnNEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGVwbG95ZWRMb2FucygpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH07XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0TG9hbnNEYXRhKCk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICA8RGltbWVyIGFjdGl2ZT17bG9hZGluZ30+XHJcbiAgICAgICAgPExvYWRlcj5Mb2FkaW5nLi4uPC9Mb2FkZXI+XHJcbiAgICAgIDwvRGltbWVyPlxyXG4gICAgICBMb2Fuc1xyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lciIsIkRpbW1lciIsIkxvYWRlciIsIkxvYW5GYWN0b3J5Iiwid2ViMyIsImdldEZhY3RvcnlEYXRhIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsImFiaSIsImdldERlcGxveWVkTG9hbnMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRMb2FuUmVxdWVzdHMiLCJjYWxsIiwicmVxdWVzdHMiLCJsb2FucyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZ2V0TG9hbnNEYXRhIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=