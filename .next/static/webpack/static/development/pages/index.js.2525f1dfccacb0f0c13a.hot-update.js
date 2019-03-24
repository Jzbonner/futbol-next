webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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








var _jsxFileName = "C:\\Users\\jarre\\Desktop\\Repos\\futbol-next\\pages\\index.js";







TODO: {
  /*
  ✅ 1. Create different pages and routes one for the Premier League and one 
  one for the Bundesliga 
  ✅ 2. Utilize the NavLink component attributes to link to another page that utilizes getInitialProps()
  ✅ 3. Consider additional page for enhance detail on individual teams (maybe match info)
  ✅ 4. Set an Active Identifier on the NavLink Items on Page Load 
  ✅ 7. Create a new branch of the futbol-next app to test the revised API functionality
  FIXME: You can pass prop "data" to children components by passing state as props to children components
  FIXME: 5. Redo Theme for Futboll App (✅ reactstrap tables, background elements, ✅ animations, ✅ color pallette)
  FIXME: 6. Migrate this TODO to Trello Board - once completed
  */
}

var futbolApp =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(futbolApp, _React$Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(futbolApp, null, [{
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
                api = "https://api.football-data.org/v2/competitions/PL/standings?standingType=HOME";
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

  function futbolApp(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, futbolApp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(futbolApp).call(this, props));
    _this.state = {
      fadeIn: true,
      tableInfo: _this.props.data
    };
    _this.toggle = _this.toggle.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(futbolApp, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        fadeIn: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      // migrate this style to the scss page
      var logoStyle = {
        width: "30px"
      };
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container-fluid main-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, " League Table "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Raleway",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", {
        rel: "shortcut icon",
        type: "image/png",
        href: "https://github.com/Jzbonner/futbol-next/blob/master/img-media/soccer.png?raw=true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Fade"], {
        in: this.state.fadeIn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row main-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-sm-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-sm-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, " Barclay's Premier League "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Table"], {
        hover: true,
        responsive: true,
        className: "table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
        className: "table-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Pos."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Team"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Points"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Games"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Wins"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Draws"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Losses"))), this.props.data.map(function (standings) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, standings.table.map(function (value, index) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
            key: index,
            className: "table-row-view",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 105
            },
            __self: this
          }, value.position), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 106
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
            style: logoStyle,
            src: value.team.crestUrl,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            },
            __self: this
          }, value.points), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113
            },
            __self: this
          }, value.playedGames), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 114
            },
            __self: this
          }, value.won), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 115
            },
            __self: this
          }, value.draw), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 116
            },
            __self: this
          }, value.lost));
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-md-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        outline: true,
        active: true,
        color: "secondary",
        size: "sm",
        className: "league-switch",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        className: "league-logo",
        src: "https://github.com/Jzbonner/futbol-next/blob/master/img-media/premier-league.png?raw=true",
        alt: "league-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        color: "link",
        size: "sm",
        className: "league-switch",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        className: "league-logo-bl",
        src: "https://github.com/Jzbonner/futbol-next/blob/master/img-media/bundesliga.png?raw=true",
        alt: "league-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }))))));
    }
  }]);

  return futbolApp;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (futbolApp); // League Codes (BL1, BL2, BL3, DFB, PL, EL1, ELC, FAC, SA, SB, PD, SD, CDR, FL1, FL2, DED)
// League Codes Cont. (PPL, GSL, CL, EL, EC, WC)
// League Codes that work ~ PL, BL1

/***/ })

})
//# sourceMappingURL=index.js.2525f1dfccacb0f0c13a.hot-update.js.map