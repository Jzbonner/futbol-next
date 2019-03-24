webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/standings.js":
/*!*********************************!*\
  !*** ./components/standings.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return standingsTable; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/styles.scss */ "./css/styles.scss");
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_styles_scss__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "C:\\Users\\jarre\\Desktop\\Repos\\futbol-next\\components\\standings.js";




var standingsTable =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(standingsTable, _React$Component);

  function standingsTable(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, standingsTable);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(standingsTable).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(standingsTable, [{
    key: "render",
    value: function render() {
      // migrate this style to the scss page
      var logoStyle = {
        width: "30px"
      };
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row main-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, " Barclay's Premier League "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Table"], {
        borderless: true,
        hover: true,
        responsive: true,
        className: "table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        className: "table-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Pos."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Team"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Points"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Games"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Wins"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Draws"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Losses"))), this.props.data.map(function (standings) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, standings.table.map(function (value, index) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
            key: index,
            className: "table-row-view",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }, value.position), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
            style: logoStyle,
            src: value.team.crestUrl,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          }, value.points), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          }, value.playedGames), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }, value.won), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          }, value.draw), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }, value.lost));
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        outline: true,
        active: true,
        color: "secondary",
        size: "sm",
        className: "league-switch",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "league-logo",
        src: "https://github.com/Jzbonner/futbol-next/blob/master/img-media/premier-league.png?raw=true",
        alt: "league-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        color: "link",
        size: "sm",
        className: "league-switch",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "league-logo-bl",
        src: "https://github.com/Jzbonner/futbol-next/blob/master/img-media/bundesliga.png?raw=true",
        alt: "league-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }))));
    }
  }]);

  return standingsTable;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.7fb0fe0f0da0caa3f66f.hot-update.js.map