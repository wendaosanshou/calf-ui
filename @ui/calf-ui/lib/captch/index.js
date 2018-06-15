module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 179);
/******/ })
/************************************************************************/
/******/ ({

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_mixins_visibility__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popup_popup__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__captch_input__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__captch_panel_vue__ = __webpack_require__(185);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






var COMPONENT_NAME = 'calf-captch';
var BEFORE_VERIFY_STATUS = 0;
var AFTER_VERIFY_STATUS = 10;
var VERIFY_FAIL_STATUS = 20;

/* harmony default export */ __webpack_exports__["a"] = ({
  name: COMPONENT_NAME,
  mixins: [__WEBPACK_IMPORTED_MODULE_0__common_mixins_visibility__["a" /* default */]],
  data: function data() {
    return {
      codes: ['', '', '', '', '', ''],
      allCodes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      afterVerify: false,
      afterLoading: false,
      captchStatus: 0
    };
  },

  props: {
    mobile: {
      type: String,
      default: '***********'
    },
    type: {
      type: String,
      default: 'verify'
    }
  },
  computed: {
    rootClass: function rootClass() {
      return 'calf-captch-' + this.type;
    },
    isBeforeVerify: function isBeforeVerify() {
      return this.captchStatus === BEFORE_VERIFY_STATUS;
    },
    isAfterVerify: function isAfterVerify() {
      return this.captchStatus === AFTER_VERIFY_STATUS;
    },
    isVerifyFail: function isVerifyFail() {
      return this.captchStatus === VERIFY_FAIL_STATUS;
    },
    isVerifyCode: function isVerifyCode() {
      return this.type === 'verify';
    },
    isPassword: function isPassword() {
      return this.type === 'password';
    },
    captchTitle: function captchTitle() {
      return this.isVerifyCode ? '手机号码验证' : '请输入交易密码';
    },
    currentIndex: function currentIndex() {
      var _this = this;

      var currentIndex = 0;
      this.codes.forEach(function (code, index) {
        var prev = _this.codes[index - 1];
        var hasCompletePrev = _this.allCodes.indexOf(prev) > -1;
        var hasCompleteCurrent = _this.allCodes.indexOf(code) > -1;
        if (index === 0 && !hasCompleteCurrent) {
          currentIndex = index;
        } else if (hasCompletePrev && !hasCompleteCurrent) {
          currentIndex = index;
        } else if (index === _this.codes.length - 1 && hasCompleteCurrent) {
          currentIndex = _this.codes.length;
        }
      });
      return currentIndex;
    }
  },
  watch: {
    isVerifyFail: function isVerifyFail(newVal) {
      var _this2 = this;

      if (newVal) {
        setTimeout(function () {
          _this2.captchStatus = BEFORE_VERIFY_STATUS;
          _this2.onClear();
        }, 2 * 1000);
      }
    }
  },
  methods: {
    onClear: function onClear() {
      this.codes = this.codes.map(function (item) {
        return '';
      });
    },
    onRepeat: function onRepeat() {
      this.$emit('on-repeat');
    },
    handleMaskClick: function handleMaskClick() {
      this.hide();
    },
    handleChooseNumber: function handleChooseNumber(number) {
      var _this3 = this;

      if (this.currentIndex <= this.codes.length - 1) {
        this.codes.splice(this.currentIndex, 1, number);
      }
      if (this.currentIndex === this.codes.length) {
        this.captchStatus = AFTER_VERIFY_STATUS;
        setTimeout(function () {
          _this3.captchStatus = VERIFY_FAIL_STATUS;
        }, 1000);
      }
    },
    handleDelete: function handleDelete() {
      if (this.currentIndex > 0) {
        this.codes.splice(this.currentIndex - 1, 1, '');
      }
    }
  },
  components: {
    CalfPopup: __WEBPACK_IMPORTED_MODULE_1__popup_popup__["a" /* default */],
    CaptchInput: __WEBPACK_IMPORTED_MODULE_2__captch_input__["a" /* default */],
    CaptchPanel: __WEBPACK_IMPORTED_MODULE_3__captch_panel_vue__["a" /* default */]
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var BEFORE_VERIFY_STATUS = 0;
var AFTER_VERIFY_STATUS = 10;
var VERIFY_FAIL_STATUS = 20;

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'captch-input',
  data: function data() {
    return {
      count: 60,
      tid: '',
      afterTimeout: false
    };
  },

  props: {
    captchStatus: {
      type: Number,
      default: 0
    },
    codes: {
      type: Array,
      defaul: function defaul() {
        return [];
      }
    },
    currentIndex: {
      type: Number,
      default: 0
    },
    mobile: {
      type: String,
      default: '***********'
    },
    type: {
      type: String,
      default: 'verify'
    }
  },
  computed: {
    isVerifyFail: function isVerifyFail() {
      return this.captchStatus === VERIFY_FAIL_STATUS;
    },
    maskMobile: function maskMobile() {
      return this.mobile.slice(0, 3) + '****' + this.mobile.slice(7, 11);
    },
    isVerifyCode: function isVerifyCode() {
      return this.type === 'verify';
    },
    isPassword: function isPassword() {
      return this.type === 'password';
    }
  },
  watch: {},
  methods: {
    handleRepeat: function handleRepeat() {
      this.afterTimeout = false;
      this.$emit('on-repeat');
    },
    handleForget: function handleForget() {
      this.$emit('on-forget');
    },
    initTimeInterval: function initTimeInterval() {
      var _this = this;

      this.afterTimeout = false;
      this.tid = setInterval(function () {
        if (_this.count > 1) {
          _this.count--;
        } else {
          _this.count = 60;
          clearInterval(_this.tid);
          _this.afterTimeout = true;
        }
      }, 1 * 1000);
    }
  },
  components: {},
  mounted: function mounted() {
    this.initTimeInterval();
  }
});

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'captch-panel',
  data: function data() {
    return {};
  },

  props: {
    currentIndex: {
      type: Number,
      default: 0
    },
    codes: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {},
  watch: {},
  methods: {
    handleChooseNumber: function handleChooseNumber(number) {
      this.$emit('on-choose', number);
    },
    handleDelete: function handleDelete() {
      this.$emit('on-delete');
    }
  },
  components: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_captch_captch_vue__ = __webpack_require__(180);


__WEBPACK_IMPORTED_MODULE_0__components_captch_captch_vue__["a" /* default */].install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__components_captch_captch_vue__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__components_captch_captch_vue__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__components_captch_captch_vue__["a" /* default */]);

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_captch_vue__ = __webpack_require__(159);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_d44f880e_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_captch_vue__ = __webpack_require__(188);
function injectStyle (ssrContext) {
  __webpack_require__(181)
}
var normalizeComponent = __webpack_require__(6)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d44f880e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_captch_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_d44f880e_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_captch_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 181:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_captch_input_vue__ = __webpack_require__(160);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_64df3fd8_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_captch_input_vue__ = __webpack_require__(184);
function injectStyle (ssrContext) {
  __webpack_require__(183)
}
var normalizeComponent = __webpack_require__(6)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-64df3fd8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_captch_input_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_64df3fd8_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_captch_input_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 183:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"captch-input"},[(_vm.isVerifyCode)?_c('div',{staticClass:"captch-title-wrap"},[_c('h4',{staticClass:"captch-input-title"},[_vm._v("已向 "+_vm._s(_vm.maskMobile)+" 发送验证短信")]),_vm._v(" "),(!_vm.afterTimeout)?_c('p',{staticClass:"captch-input-desc"},[_vm._v(_vm._s(_vm.count)+"s后重新获取")]):_c('p',{staticClass:"captch-repeat",on:{"click":_vm.handleRepeat}},[_vm._v("重新获取")])]):_vm._e(),_vm._v(" "),_c('ul',{staticClass:"captch-input-list",class:{'is-verify-fail': _vm.isVerifyFail}},_vm._l((_vm.codes),function(item,index){return _c('li',{key:index,staticClass:"captch-input-item",class:{'current': index === _vm.currentIndex}},[_vm._v(_vm._s(item))])})),_vm._v(" "),(_vm.isPassword)?_c('p',{staticClass:"captch-forget",on:{"click":_vm.handleForget}},[_vm._v("忘记密码")]):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_captch_panel_vue__ = __webpack_require__(161);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_643dc1c0_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_captch_panel_vue__ = __webpack_require__(187);
function injectStyle (ssrContext) {
  __webpack_require__(186)
}
var normalizeComponent = __webpack_require__(6)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-643dc1c0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_captch_panel_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_643dc1c0_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_captch_panel_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 186:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"captch-panel"},[_vm._m(0),_vm._v(" "),_c('ul',{staticClass:"captch-panel-list"},[_c('li',{staticClass:"captch-panel-item"},[_c('div',{staticClass:"item-number",on:{"click":function($event){_vm.handleChooseNumber(1)}}},[_vm._v("1")]),_vm._v(" "),_c('div',{staticClass:"item-number",on:{"click":function($event){_vm.handleChooseNumber(2)}}},[_vm._v("2")]),_vm._v(" "),_c('div',{staticClass:"item-number",on:{"click":function($event){_vm.handleChooseNumber(3)}}},[_vm._v("3")])]),_vm._v(" "),_c('li',{staticClass:"captch-panel-item"},[_c('div',{staticClass:"item-number",on:{"click":function($event){_vm.handleChooseNumber(4)}}},[_vm._v("4")]),_vm._v(" "),_c('div',{staticClass:"item-number",on:{"click":function($event){_vm.handleChooseNumber(5)}}},[_vm._v("5")]),_vm._v(" "),_c('div',{staticClass:"item-number",on:{"click":function($event){_vm.handleChooseNumber(6)}}},[_vm._v("6")])]),_vm._v(" "),_c('li',{staticClass:"captch-panel-item"},[_c('div',{staticClass:"item-number",on:{"click":function($event){_vm.handleChooseNumber(7)}}},[_vm._v("7")]),_vm._v(" "),_c('div',{staticClass:"item-number",on:{"click":function($event){_vm.handleChooseNumber(8)}}},[_vm._v("8")]),_vm._v(" "),_c('div',{staticClass:"item-number",on:{"click":function($event){_vm.handleChooseNumber(9)}}},[_vm._v("9")])]),_vm._v(" "),_c('li',{staticClass:"captch-panel-item"},[_c('div',{staticClass:"item-number bg-gray"}),_vm._v(" "),_c('div',{staticClass:"item-number",on:{"click":function($event){_vm.handleChooseNumber(0)}}},[_vm._v("0")]),_vm._v(" "),_c('div',{staticClass:"item-number bg-gray item-icon-delete",on:{"click":_vm.handleDelete}})])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"captch-panel-title"},[_c('i',{staticClass:"title-logo"}),_vm._v(" "),_c('span',{staticClass:"title-content"},[_vm._v("数字安全键盘")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"calf-captch-fade"}},[_c('calf-popup',{directives:[{name:"show",rawName:"v-show",value:(_vm.isVisible),expression:"isVisible"}],attrs:{"type":"captch","center":false},on:{"mask-click":_vm.handleMaskClick}},[_c('div',{staticClass:"calf-captch",class:_vm.rootClass},[_c('div',{staticClass:"captch-title"},[_vm._v(_vm._s(_vm.captchTitle))]),_vm._v(" "),_c('div',{staticClass:"captch-body"},[_c('div',{staticClass:"captch-header"},[_c('captch-input',{attrs:{"captchStatus":_vm.captchStatus,"currentIndex":_vm.currentIndex,"codes":_vm.codes,"mobile":_vm.mobile,"type":_vm.type},on:{"on-repeat":_vm.onRepeat}})],1),_vm._v(" "),_c('div',{staticClass:"captch-content"},[(_vm.isBeforeVerify)?_c('captch-panel',{attrs:{"currentIndex":_vm.currentIndex,"codes":_vm.codes},on:{"on-choose":_vm.handleChooseNumber,"on-delete":_vm.handleDelete,"on-clear":_vm.onClear}}):(_vm.isAfterVerify)?_c('div',{staticClass:"captch-loading"},[_c('i',{staticClass:"icon-loading"})]):(_vm.isVerifyFail)?_c('div',{staticClass:"captch-result"},[_vm._v("验证码错误，2s后重新输入")]):_vm._e()],1)])])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var EVENT_TOGGLE = 'toggle';

/* harmony default export */ __webpack_exports__["a"] = ({
  model: {
    prop: 'visible',
    event: EVENT_TOGGLE
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      // If use the prop visible directly, the toggle will failed when user haven't set v-model as a reactive property.
      // So we use the data isVisible instead.
      isVisible: false
    };
  },

  watch: {
    isVisible: function isVisible(newVal) {
      this.$emit(EVENT_TOGGLE, newVal);
    }
  },
  methods: {
    show: function show() {
      this.isVisible = true;
    },
    hide: function hide() {
      this.isVisible = false;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$watch('visible', function (newVal, oldVal) {
      if (newVal) {
        _this.show();
      } else if (oldVal) {
        _this.hide();
      }
    }, {
      immediate: true
    });
  }
});

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_mixins_visibility__ = __webpack_require__(30);
//
//
//
//
//
//
//
//
//
//
//
//
//


var COMPONENT_NAME = 'calf-popup';
var EVENT_MASK_CLICK = 'mask-click';

/* harmony default export */ __webpack_exports__["a"] = ({
  name: COMPONENT_NAME,
  mixins: [__WEBPACK_IMPORTED_MODULE_0__common_mixins_visibility__["a" /* default */]],
  props: {
    animation: {
      type: String,
      default: 'picker'
    },
    type: {
      type: String,
      default: 'popup'
    },
    content: {
      type: String,
      default: '未知的系统错误'
    },
    zIndex: {
      type: Number,
      default: 100
    },
    center: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    rootClass: function rootClass() {
      return 'calf-popup-' + this.type;
    },
    centerClass: function centerClass() {
      return this.center ? 'calf-popup-center' : 'calf-popup-bottom';
    }
  },
  methods: {
    handleMask: function handleMask(e) {
      this.$emit(EVENT_MASK_CLICK, e);
    }
  }
});

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_popup_vue__ = __webpack_require__(31);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_60f5d601_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_popup_vue__ = __webpack_require__(49);
function injectStyle (ssrContext) {
  __webpack_require__(48)
}
var normalizeComponent = __webpack_require__(6)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-60f5d601"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_popup_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_60f5d601_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_popup_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 48:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isVisible),expression:"isVisible"}],staticClass:"calf-popup",class:[_vm.rootClass, _vm.centerClass],style:({'z-index': _vm.zIndex})},[_c('div',{staticClass:"calf-popup-mask",on:{"click":_vm.handleMask}}),_vm._v(" "),_c('div',{staticClass:"calf-popup-container"},[(_vm.$slots.default)?_c('div',{staticClass:"calf-popup-content"},[_vm._t("default")],2):_c('div',{staticClass:"calf-popup-content",domProps:{"innerHTML":_vm._s(_vm.content)}})])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ })

/******/ });