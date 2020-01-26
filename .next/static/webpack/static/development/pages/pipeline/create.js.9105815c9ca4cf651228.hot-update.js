webpackHotUpdate("static/development/pages/pipeline/create.js",{

/***/ "./pages/pipeline/create.js":
/*!**********************************!*\
  !*** ./pages/pipeline/create.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/modal/style */ "./node_modules/antd/lib/modal/style/index.js");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_upload_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/upload/style */ "./node_modules/antd/lib/upload/style/index.js");
/* harmony import */ var antd_lib_upload_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/upload */ "./node_modules/antd/lib/upload/index.js");
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/icon/style */ "./node_modules/antd/lib/icon/style/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/lib/select/style */ "./node_modules/antd/lib/select/style/index.js");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd/lib/layout/style */ "./node_modules/antd/lib/layout/style/index.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.js");




















var _jsxFileName = "/Users/chinmay/Projects/praemineo/flashthrough/demo-v1/pages/pipeline/create.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement;



var Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_19___default.a.Content,
    Footer = antd_lib_layout__WEBPACK_IMPORTED_MODULE_19___default.a.Footer;
var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_17___default.a.Option;
var TextArea = antd_lib_input__WEBPACK_IMPORTED_MODULE_15___default.a.TextArea;

var CreatePipelineForm = function CreatePipelineForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_20__["useState"])(false),
      isModalOpen = _useState[0],
      toggleIsModalOpen = _useState[1];

  var openYamlInput = function openYamlInput() {
    toggleIsModalOpen(true);
  };

  var acceptYamlInput = function acceptYamlInput() {
    toggleIsModalOpen(true);
  };

  var cancelYamlInput = function cancelYamlInput() {
    return toggleIsModalOpen(false);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_13___default.a, {
    layout: "vertical",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_13___default.a.Item, {
    label: "Pipeline name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_15___default.a, {
    placeholder: "Pipeline name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_13___default.a.Item, {
    label: "Select platform",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_17___default.a, {
    placeholder: "Select platform",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(Option, {
    value: "aws",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Amazon Web Services"), __jsx(Option, {
    value: "gcp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Google Cloud Platform"))), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_13___default.a.Item, {
    label: "Select machine",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_17___default.a, {
    placeholder: "Select machine",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_13___default.a.Item, {
    label: "Select docker image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_17___default.a, {
    placeholder: "Select docker image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_13___default.a.Item, {
    label: "API Endpoint name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_15___default.a, {
    placeholder: "API Endpoint name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_13___default.a.Item, {
    label: "Port number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_15___default.a, {
    placeholder: "Port number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_13___default.a.Item, {
    label: "Python version",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_17___default.a, {
    placeholder: "Python version",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(Option, {
    value: "2.7.16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "2.7.16"), __jsx(Option, {
    value: "3.7.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "3.7.3"))), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_13___default.a.Item, {
    label: "Requirements.txt path",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_15___default.a, {
    placeholder: "Requirements.txt path",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_13___default.a.Item, {
    label: "Repository link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_15___default.a, {
    placeholder: "Repository link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_13___default.a.Item, {
    label: "Commit Id",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_15___default.a, {
    placeholder: "Commit Id",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_13___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(antd_lib_upload__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default.a, {
    type: "upload",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), " Upload YAML File"))), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_13___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    type: "default",
    onClick: function onClick() {
      return openYamlInput();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Input Configuration (YAML)")), __jsx(antd_lib_modal__WEBPACK_IMPORTED_MODULE_5___default.a, {
    title: "Input Configuration (YAML)",
    style: {
      top: 20
    },
    visible: isModalOpen,
    onOk: function onOk() {
      return acceptYamlInput();
    },
    onCancel: function onCancel() {
      return cancelYamlInput();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(TextArea, {
    rows: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_13___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    type: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Deploy"))));
};

var CreatePipeline = function CreatePipeline() {
  return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_19___default.a, {
    className: "layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_21___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Create Pipeline"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_22__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), __jsx(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("div", {
    style: {
      background: '#fff',
      padding: 24,
      minHeight: 720
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 16,
    offset: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx(CreatePipelineForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }))))), __jsx(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 16,
    offset: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("center", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Footer"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CreatePipeline);

/***/ })

})
//# sourceMappingURL=create.js.9105815c9ca4cf651228.hot-update.js.map