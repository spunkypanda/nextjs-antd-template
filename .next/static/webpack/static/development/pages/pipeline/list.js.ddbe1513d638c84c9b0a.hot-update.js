webpackHotUpdate("static/development/pages/pipeline/list.js",{

/***/ "./components/PipelineList.js":
/*!************************************!*\
  !*** ./components/PipelineList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/table/style */ "./node_modules/antd/lib/table/style/index.js");
/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/table */ "./node_modules/antd/lib/table/index.js");
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/badge/style */ "./node_modules/antd/lib/badge/style/index.js");
/* harmony import */ var antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/badge */ "./node_modules/antd/lib/badge/index.js");
/* harmony import */ var antd_lib_badge__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_badge__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _DeleteButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DeleteButton */ "./components/DeleteButton.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);












var _jsxFileName = "/Users/chinmay/Projects/praemineo/flashthrough/demo-v1/components/PipelineList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement;



var Search = antd_lib_input__WEBPACK_IMPORTED_MODULE_11___default.a.Search;
var StatusMap = {
  running: {
    status: 'success',
    text: 'OK'
  },
  idle: {
    status: 'default',
    text: 'Idle'
  },
  processing: {
    status: 'processing',
    text: 'Processing'
  },
  stopped: {
    status: 'error',
    text: 'Stopped'
  },
  warning: {
    status: 'warning',
    text: 'Warning'
  }
};

var getStatusBadge = function getStatusBadge() {
  var statusCode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'running';
  var statusObject = StatusMap[statusCode];
  return __jsx(antd_lib_badge__WEBPACK_IMPORTED_MODULE_9___default.a, {
    status: statusObject.status,
    text: statusObject.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  });
};

var columns = [{
  title: 'Pipeline',
  dataIndex: 'pipeline_name',
  key: 'pipeline_name',
  render: function render(value, record) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
      href: "/pipeline/details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, value));
  }
}, {
  title: 'Workstream',
  dataIndex: 'workstream',
  key: 'workstream' // render: text => <a>{text}</a>,

}, {
  title: 'Scheduler',
  dataIndex: 'scheduler_name',
  key: 'scheduler_name'
}, {
  title: 'Schedule',
  dataIndex: 'schedule',
  key: 'schedule',
  render: function render() {
    return '30 11 * * 5';
  }
}, {
  title: 'Region',
  dataIndex: 'region',
  key: 'region' // render: text => <a>{text}</a>,

}, {
  title: 'Status',
  dataIndex: 'status',
  key: 'status',
  render: function render() {
    return getStatusBadge();
  }
}, {
  title: 'Actions',
  dataIndex: '',
  key: 'x',
  render: function render() {
    return __jsx(_DeleteButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
      title: "Are you sure you want to delete this pipeline?",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    });
  }
}];
var defaultData = [{
  key: '1',
  workstream: 'Demand',
  region: 'US East (Ohio)',
  scheduler_name: 32,
  pipeline_name: 'customer_rfm_weekly',
  address: 'New York No. 1 Lake Park'
}, {
  key: '2',
  workstream: 'Demand',
  region: 'US East (N. Virginia)',
  scheduler_name: 42,
  pipeline_name: 'customer_rfm_monthly',
  address: 'London No. 1 Lake Park'
}, {
  key: '3',
  workstream: 'Revenue',
  region: 'US West (N. California)',
  scheduler_name: 42,
  pipeline_name: 'weekly_revenue',
  address: 'London No. 1 Lake Park'
}, {
  key: '4',
  workstream: 'Revenue',
  region: 'US West (Oregon)',
  scheduler_name: 42,
  pipeline_name: 'monthly_revenue',
  address: 'London No. 1 Lake Park'
}]; // Search by pipeline name
// Filter by Region
// Filter by Workstream 

var PipelineList = function PipelineList(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? defaultData : _ref$data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_12__["useState"])(),
      filteredInfo = _useState[0],
      setFilteredInfo = _useState[1]; // const [sortedInfo, setSortedInfo] = useState();


  var handleChange = function handleChange(pagination, filters, sorter) {
    console.log('Parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
  };

  var clearFilters = function clearFilters() {
    setFilteredInfo(null);
  };

  var clearAll = function clearAll() {
    setFilteredInfo(null);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("div", {
    className: "table-operations",
    style: {
      marginBottom: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
    span: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx(Search, {
    placeholder: "Search",
    onSearch: function onSearch(value) {
      return console.log(value);
    } // style={{ width:  }}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  })), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
    span: 2,
    offset: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: clearFilters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "Clear filters")))), __jsx(antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default.a, {
    columns: columns,
    dataSource: data,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PipelineList);

/***/ })

})
//# sourceMappingURL=list.js.ddbe1513d638c84c9b0a.hot-update.js.map