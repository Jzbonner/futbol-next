webpackHotUpdate("static\\development\\pages\\bundesliga.js",{

/***/ "./pages/bundesliga.js":
/*!*****************************!*\
  !*** ./pages/bundesliga.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../css/styles.scss */ "./css/styles.scss");
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_css_styles_scss__WEBPACK_IMPORTED_MODULE_13__);








var _jsxFileName = "C:\\Users\\jarre\\Desktop\\Repos\\futbol-next\\pages\\bundesliga.js";







var bundesLiga =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(bundesLiga, _React$Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(bundesLiga, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var api, res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                api = "https://api.football-data.org/v2/competitions/BL1/standings?standingType=HOME";
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get(api, {
                  headers: {
                    "x-auth-token": "bb59bf677688476183511abee982ecd3"
                  }
                });

              case 3:
                res = _context.sent;
                return _context.abrupt("return", {
                  data: res.data.standings
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function bundesLiga(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, bundesLiga);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(bundesLiga).call(this, props));
    _this.state = {
      fadeIn: true
    };
    _this.toggle = _this.toggle.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(bundesLiga, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        fadeIn: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var logoStyle = {
        width: "30px"
      };
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container-fluid main-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, " League Table "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Raleway",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", {
        rel: "shortcut icon",
        type: "image/png",
        href: "https://github.com/Jzbonner/futbol-next/blob/master/img-media/soccer.png?raw=true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Fade"], {
        in: this.state.fadeIn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-sm-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-sm-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, " Bundesliga "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Table"], {
        dark: true,
        hover: true,
        responsive: true,
        className: "table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
        className: "table-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Pos."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Team"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Points"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Games"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Wins"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Draws"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Losses"))), this.props.data.map(function (standings) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, standings.table.map(function (value, index) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
            key: index,
            className: "table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            },
            __self: this
          }, value.position), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
            style: logoStyle,
            src: value.team.crestUrl,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            },
            __self: this
          }, value.points), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            },
            __self: this
          }, value.playedGames), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            },
            __self: this
          }, value.won), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          }, value.draw), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            },
            __self: this
          }, value.lost));
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-md-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        className: "league-logo-bl",
        src: "https://github.com/Jzbonner/futbol-next/blob/master/img-media/bundesliga.png?raw=true",
        alt: "league-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      })))));
    }
  }]);

  return bundesLiga;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (bundesLiga);

/***/ })

})
//# sourceMappingURL=bundesliga.js.e91c4095cad9a75b01ff.hot-update.js.map