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
/******/ 	return __webpack_require__(__webpack_require__.s = 200);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(24)('wks');
var uid = __webpack_require__(16);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(35);
var toPrimitive = __webpack_require__(22);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(8)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */
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


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var createDesc = __webpack_require__(14);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(40);
var defined = __webpack_require__(21);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(39);
var enumBugKeys = __webpack_require__(25);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var ctx = __webpack_require__(45);
var hide = __webpack_require__(7);
var has = __webpack_require__(3);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(21);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(24)('keys');
var uid = __webpack_require__(16);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(15) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f;
var has = __webpack_require__(3);
var TAG = __webpack_require__(2)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(2);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(15);
var wksExt = __webpack_require__(27);
var defineProperty = __webpack_require__(4).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 30 */
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
/* 31 */
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
/* 32 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(15);
var $export = __webpack_require__(12);
var redefine = __webpack_require__(37);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(18);
var $iterCreate = __webpack_require__(55);
var setToStringTag = __webpack_require__(26);
var getPrototypeOf = __webpack_require__(60);
var ITERATOR = __webpack_require__(2)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(8)(function () {
  return Object.defineProperty(__webpack_require__(36)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(13);
var dPs = __webpack_require__(56);
var enumBugKeys = __webpack_require__(25);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(36)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(59).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(3);
var toIObject = __webpack_require__(9);
var arrayIndexOf = __webpack_require__(57)(false);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(32);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(39);
var hiddenKeys = __webpack_require__(25).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(33);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
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

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = camelize;
var camelizeRE = /-(\w)/g;
function camelize(str) {
  str = String(str);
  return str.replace(camelizeRE, function (m, c) {
    return c ? c.toUpperCase() : '';
  });
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(53)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(34)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(54);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(20);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 47 */
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
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isVisible),expression:"isVisible"}],staticClass:"calf-popup",class:[_vm.rootClass, _vm.centerClass],style:({'z-index': _vm.zIndex})},[_c('div',{staticClass:"calf-popup-mask",on:{"click":_vm.handleMask}}),_vm._v(" "),_c('div',{staticClass:"calf-popup-container"},[(_vm.$slots.default)?_c('div',{staticClass:"calf-popup-content"},[_vm._t("default")],2):_c('div',{staticClass:"calf-popup-content",domProps:{"innerHTML":_vm._s(_vm.content)}})])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(61), __esModule: true };

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createAPI;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lang_string__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_api_component__ = __webpack_require__(84);



function createAPI(Vue, Component, events, single) {
  var api = __WEBPACK_IMPORTED_MODULE_1__create_api_component__["a" /* default */].apply(this, arguments);
  var name = Component.name;
  var pureName = name.replace(/^calf-/i, '');
  var createName = '$' + Object(__WEBPACK_IMPORTED_MODULE_0__lang_string__["a" /* camelize */])('create-' + pureName);
  console.log(createName);
  Vue.prototype[createName] = api.create;
  Component.$create = api.create;
  return api;
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(64);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(70);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(20);
var defined = __webpack_require__(21);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(38);
var descriptor = __webpack_require__(14);
var setToStringTag = __webpack_require__(26);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(2)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var anObject = __webpack_require__(13);
var getKeys = __webpack_require__(11);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(9);
var toLength = __webpack_require__(46);
var toAbsoluteIndex = __webpack_require__(58);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(20);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(3);
var toObject = __webpack_require__(19);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(62);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(19);
var $keys = __webpack_require__(11);

__webpack_require__(63)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(12);
var core = __webpack_require__(0);
var fails = __webpack_require__(8);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(65), __esModule: true };

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(66);
module.exports = __webpack_require__(27).f('iterator');


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(67);
var global = __webpack_require__(1);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(18);
var TO_STRING_TAG = __webpack_require__(2)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(68);
var step = __webpack_require__(69);
var Iterators = __webpack_require__(18);
var toIObject = __webpack_require__(9);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(34)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(71), __esModule: true };

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(72);
__webpack_require__(78);
__webpack_require__(79);
__webpack_require__(80);
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(3);
var DESCRIPTORS = __webpack_require__(5);
var $export = __webpack_require__(12);
var redefine = __webpack_require__(37);
var META = __webpack_require__(73).KEY;
var $fails = __webpack_require__(8);
var shared = __webpack_require__(24);
var setToStringTag = __webpack_require__(26);
var uid = __webpack_require__(16);
var wks = __webpack_require__(2);
var wksExt = __webpack_require__(27);
var wksDefine = __webpack_require__(28);
var enumKeys = __webpack_require__(74);
var isArray = __webpack_require__(75);
var anObject = __webpack_require__(13);
var isObject = __webpack_require__(10);
var toIObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(22);
var createDesc = __webpack_require__(14);
var _create = __webpack_require__(38);
var gOPNExt = __webpack_require__(76);
var $GOPD = __webpack_require__(77);
var $DP = __webpack_require__(4);
var $keys = __webpack_require__(11);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(41).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(17).f = $propertyIsEnumerable;
  __webpack_require__(29).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(15)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(7)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(16)('meta');
var isObject = __webpack_require__(10);
var has = __webpack_require__(3);
var setDesc = __webpack_require__(4).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(8)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(11);
var gOPS = __webpack_require__(29);
var pIE = __webpack_require__(17);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(32);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(9);
var gOPN = __webpack_require__(41).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(17);
var createDesc = __webpack_require__(14);
var toIObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(22);
var has = __webpack_require__(3);
var IE8_DOM_DEFINE = __webpack_require__(35);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(5) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 78 */
/***/ (function(module, exports) {



/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('asyncIterator');


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('observable');


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(82);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(12);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(83) });


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(11);
var gOPS = __webpack_require__(29);
var pIE = __webpack_require__(17);
var toObject = __webpack_require__(19);
var IObject = __webpack_require__(40);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(8)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createAPIComponent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instantiate_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parse_render_data__ = __webpack_require__(86);





function createAPIComponent(Vue, Component) {
  var events = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var single = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var singleComponent = void 0;
  var singleInstance = void 0;
  var beforeFns = [];
  var api = {
    before: function before(fn) {
      beforeFns.push(fn);
    },
    open: function open(data, renderFn, options) {
      if (typeof renderFn !== 'function' && options === undefined) {
        options = renderFn;
        renderFn = null;
      }
      var instanceSingle = options;
      if ((typeof options === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(options)) === 'object') {
        instanceSingle = options.single;
        delete options.single;
      }

      beforeFns.forEach(function (before) {
        before(data, renderFn, instanceSingle);
      });
      if (instanceSingle === undefined) {
        instanceSingle = single;
      }
      if (instanceSingle && singleComponent) {
        singleInstance.updateRenderData(data, renderFn);
        // visibility mixin watch visible should not hide
        singleComponent._createAPI_reuse = true;
        singleInstance.$forceUpdate();
        var oldVisible = singleComponent.visible;
        singleComponent.$nextTick(function () {
          singleComponent._createAPI_reuse = false;
          // prop visible true -> to
          if (oldVisible && singleComponent.visible) {
            singleComponent.show();
          }
        });
        // singleComponent.show && singleComponent.show()
        return singleComponent;
      }
      var component = Object(__WEBPACK_IMPORTED_MODULE_2__instantiate_component__["a" /* default */])(Vue, Component, data, renderFn, options);
      var instance = component.$parent;
      var originRemove = component.remove;

      component.remove = function () {
        if (instance.__calf__destroyed) {
          return;
        }
        originRemove && originRemove.call(this);
        instance.destroy();
        instance.__calf__destroyed = true;
        if (instanceSingle) {
          singleComponent = null;
          singleInstance = null;
        }
      };
      var originShow = component.show;
      component.show = function () {
        originShow && originShow.call(this);
        return this;
      };
      var originHide = component.hide;
      component.hide = function () {
        originHide && originHide.call(this);
        return this;
      };
      if (instanceSingle) {
        singleComponent = component;
        singleInstance = instance;
      }
      // component.show && component.show()
      return component;
    },
    create: function create(config, renderFn, single) {
      var ownerInstance = this;
      var isInVueInstance = !!ownerInstance.$on;
      var renderData = Object(__WEBPACK_IMPORTED_MODULE_3__parse_render_data__["a" /* default */])(config, events);

      cancelWatchProps();
      processProps();
      processEvents();

      if (typeof renderFn !== 'function' && single === undefined) {
        single = renderFn;
        renderFn = null;
      }
      // to get Vue options
      // store router i18n ...
      var options = {
        single: single
      };
      if (isInVueInstance) {
        options.parent = ownerInstance;
      }

      var component = api.open(renderData, renderFn, options);
      if (component.__calf__parent !== ownerInstance) {
        component.__calf__parent = ownerInstance;
        var beforeDestroy = function beforeDestroy() {
          cancelWatchProps();
          if (component.__calf__parent === ownerInstance) {
            component.remove();
          }
          ownerInstance.$off('hook:beforeDestroy', beforeDestroy);
          component.__calf__parent = null;
        };
        isInVueInstance && ownerInstance.$on('hook:beforeDestroy', beforeDestroy);
      }
      return component;

      function processProps() {
        var $props = renderData.props.$props;
        if ($props) {
          delete renderData.props.$props;

          var watchKeys = [];
          var watchPropKeys = [];
          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()($props).forEach(function (key) {
            var propKey = $props[key];
            if (typeof propKey === 'string' && propKey in ownerInstance) {
              // get instance value
              renderData.props[key] = ownerInstance[propKey];
              watchKeys.push(key);
              watchPropKeys.push(propKey);
            } else {
              renderData.props[key] = propKey;
            }
          });
          if (isInVueInstance) {
            ownerInstance.__createAPI_watcher = ownerInstance.$watch(function () {
              var props = {};
              watchKeys.forEach(function (key, i) {
                props[key] = ownerInstance[watchPropKeys[i]];
              });
              return props;
            }, function (newProps) {
              component && component.$updateProps(newProps);
            });
          }
        }
      }

      function processEvents() {
        var $events = renderData.props.$events;
        if ($events) {
          delete renderData.props.$events;

          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()($events).forEach(function (event) {
            var eventHandler = $events[event];
            if (typeof eventHandler === 'string') {
              eventHandler = ownerInstance[eventHandler];
            }
            renderData.on[event] = eventHandler;
          });
        }
      }

      function cancelWatchProps() {
        if (ownerInstance.__createAPI_watcher) {
          ownerInstance.__createAPI_watcher();
          ownerInstance.__createAPI_watcher = null;
        }
      }
    }
  };
  return api;
}

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = instantiateComponent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);


function instantiateComponent(Vue, Component, data, renderFn, options) {
  var renderData = void 0;
  var childrenRenderFn = void 0;

  if (options === undefined) {
    options = {};
  }

  var instance = new Vue(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, options, {
    render: function render(createElement) {
      var children = childrenRenderFn && childrenRenderFn(createElement);
      if (children && !Array.isArray(children)) {
        children = [children];
      }

      // {...renderData}: fix #128, caused by vue modified the parameter in the version of 2.5.14+, which related to vue issue #7294.
      return createElement(Component, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, renderData), children || []);
    },

    methods: {
      init: function init() {
        document.body.appendChild(this.$el);
      },
      destroy: function destroy() {
        this.$destroy();
        document.body.removeChild(this.$el);
      }
    }
  }));
  instance.updateRenderData = function (data, render) {
    renderData = data;
    childrenRenderFn = render;
  };
  instance.updateRenderData(data, renderFn);
  instance.$mount();
  instance.init();
  var component = instance.$children[0];
  component.$updateProps = function (props) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(renderData.props, props);
    instance.$forceUpdate();
  };
  return component;
}

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseRenderData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang_string__ = __webpack_require__(43);



function parseRenderData() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  events = parseEvents(events);
  var props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, data);
  var on = {};
  for (var name in events) {
    if (events.hasOwnProperty(name)) {
      var handlerName = events[name];
      if (props[handlerName]) {
        on[name] = props[handlerName];
        delete props[handlerName];
      }
    }
  }
  return {
    props: props,
    on: on
  };
}

function parseEvents(events) {
  var parsedEvents = {};
  events.forEach(function (name) {
    parsedEvents[name] = Object(__WEBPACK_IMPORTED_MODULE_1__lang_string__["a" /* camelize */])('on-' + name);
  });
  return parsedEvents;
}

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAABUtJREFUeAHtnLtrFFEUxrMi+EBRtBIE4wut7LRQFBRMESL4D9ha2FkLsRJL/S9iq3YWsdLCV61ExYCQShR8YWHi75vMbGL2nrt3du7s3pnNgY/ZvY9zz/ftPO7cx05MbJpXgY43t8bMlZWVbbg/Do6CvWB3Dg4T33N84/gBLHQ6nT8ch25DEwhBjsHuUo4zHA+BLSDElim0CF6AeQHB3nNstiHKETALFkBsk0/5Ptw4lQj6MpgHw7BlGlFbl5MXiiCnwQswKlPb08kJRVCT4OGoVHG0q1gmYwhV+SZNIDcJ5A7YMUBAn6nzDuhYPLnkpniiHeTzCaBjWftNhVvczO+VrRilPMLsA49AGXtN4btgCuwKDURl8zqqKx9lTDHuC20rSjkaPAUWA6NcotwdcDJK4ziRr9ynfIeYYj0Vq32vHxo6D74FRKWgboDtXocVMuU7byPkx1LM5ys0178qDcyA38Bnylf/RD3loZjaArdBSGwztQRF4xcCAnhFGb06jMTUNlAMPpOIcc8kHOqe0++ymqPMIE+yqGIqBqBYfCYuce5JONLTyneNqyd7KyrLCM4UE1BslolTtacbDjrA9yj/Sf7VCHxqcaHYgGK07FGlhvF60/JMun6dZMUpiCvGPFYOTlNHt7zhSq8Pv5wuVxOTu6wsloSry80ycZy06prpVPK9W82ZFRPNgI/vxv2wVNg401u5ZXqMjvxpVYoQhRUz8HUBwkcBcGQNWagPMbJ+TllRNpZX7MDqTGq0sr/hQINdls3295B2CYjNWuRI7z/oRqF5w4H6DUN7fahLZnEAVr9O4922UVFjyFbn6oZds1k5cNRLtMvE3R7jJtM6/ZbIq+2tfNjyigsQJ5fZtxFKa6bAZRoxbJVBUmNULltwEqXkMVfpPC3aYJez8REkwkuDbpZpDi+z9RN3mtRz2RvGdd+6MpqclnN6Y3DoahEi0BPDSRuSLW5OgTQd7DL/o89VozlpT41Qu1pk0z5ciOrf/ALrz6ii7m5Oxx/FlzYd4a2ZFU03bbRlEnbC+08hyHESis/rC39uqzgimXPTnNxGkxbSpCtK9669oaQm9dpuFsfsnbM4a/YYKrjUNYo2NtniqDVL3TNIU70uc12frnJNTrM4ZpoUZ9CmQL0/8X8CfenNz1I+Geljk1ycQY9hrPWA603fld528149mUA87pZQYQo8B+rz6DiVp/Ox1eYVaGtBHTFe8vlc8X2Mjtbao+yKKi6xMdKjh+qJnpTVBC0/nqi8wsxw3ojkMq8ajSBUQ5BnDZ+L3HKyhevjfoldNATqTgGNu0B6cruszUM8Lr69adx/Sg+59nppd8o1g9577j/N3wdikAtK5uwZbNonyHsLCiGQb+LwSAsoDk4BcQafeh682ebURKDbwLL+ixeaQ7V8pKhSfflL+WabUQNx4i2gagblclEi0Jx1XZFebgleuabTL40A8Rdxpk87LELEqWcZcFjzaZfKxalvIXna9P3R5ZeVtVqO7GwZXrWtCP4Q0syF+HA3s6QpgzsqxBnNdih3OOmkIoxeH7S+0loDTVZmyq9nQ106cqxFAlm9levF01rWS1bXtEcs7ka6tVDS+gRRDXZpEaa1UpWs/0wCxtlAl5YUq9FAbhfQDoC7YKjbwpOZ9oH4AeS4AiaBZjuFyn8sgI/7jBCucGyuIc5p8BXEsmh/TZGEqqjyLJIy2qUUvq0pCfYBQUDqewWB1FueB+0d7ILcIGeQtk2o79P+MWRI9rsH/aXMR/AAXAfWotOA87VckRSfYvuhoHWDgpagaJXFyP7kjbY3zafAP92g+y6ibvL2AAAAAElFTkSuQmCC"

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAB01JREFUeAHtnE+IVVUcx+cJ9g8jc5NF0MuUosRWuigUMmbAYUBpE7hsMQtXie2EcTW6MWrnrkUERkSkBFLZLCI34kAELWRSEgvbZAOWfyBn+nzf3DvO3Hd+555z37nvvqH3gy9n3vn9zu/3Pb9737nnz30zMjIUbwZaXm2NysXFxYdxvw28ADaCxzNQjNzKME95Bcy1Wq17lH2XviWIhGyld3sz7KJ8DqwDIbKA0TVwEcwIJOwXyrUtJGULmAJzILXIp3w/v+ayBOlRMAP6IQsEUazRgU8UJMfBRdCUKPb4wCUKUm1wpqmsOOKKSztFonoepCFyGCLT4NEKhH6jzWWgMn9yyU3+RHuWv18EKmPlDg2OMph/ENswiT2J2QTOghiZxfgEGAMbQonINmujtvIRI+K4KTRWEjsC7gDXAlnewG4avJQkOE7kK/Mp3yEirjtSxff6IdBuMB/ASqQOgUe8DntQyncWI+RiifPuHsKVNyXABLgDfCK95ieaKfdFFAscAyHcJmohRfA9AQQuYaOlQyOi2EAcfKIkpr2TcKgxp+xrdRqbKk+ypMkUByAuPlFf0oxJONLTyvcd10z2aNJeJnAmTkDcLFGfenu64aAFfI/yf9AfSNCfWlyIGxBHS872FBivhy3P1OvqDGxy8o6LY8aVwima6MYLrrR8uO10uVQ5cF8rq5fQ1dfNEvWxbbU162nkW1udNhsOqIL++AbuM1G0caZVuSV6jDb+tIrqEMbiDHxTgPBdABxZWxaaQzQ2z4lNStFe3IE1mdRuZbngQJtdlkyVexhsCzo2ZXWO+vJNN4xmDAeaN/Rt+VAlzeogOKLSaq8+AGtep/1uW2ioPWRrcnXIbtmsBs7rwWdgpXxiscJIi2iXqO/2HjdK6/a7ga62VbnVkZB6eK0DnwKXOO8kDLULoD65xB5GsNZJgUu0YziQAtlTLsJZ3RGLNHrtUblkztkGy60u66wu2WaXM3jFSrgd93CWynkHKRw6bbpZojO81YLlpGE9u9pyMD7BVYOxT74sY0pja/t2Mm+78mRTp54u+cZV2WQdHXuH+Cc9HC6gO+jR5yqrb925IOhV43KYt2kepZ8lHN8C/xpcVf0j2BjCCTsdHrjk6qr2WGhucN9lSV3w6cMqpzV8gMub4K7BU9V6yDwVGhrbDWrkEOXiwZyPD9sdRqq6Hhqsbju47AK3RMqQ36lvx/KgzXXD33b5yseg7lF7KZIO9RoXOvAyJM4B626+iW6MQ8JfKWPF6mNnzZkn6AnDq048o4TO7AQXgK62yp1RDgrGtG9T9S2wtkf/RreP5PxMWUWsPnbGsTxBOup1iY6Dg4XObMb4a/Aa0NVW+T31Y5TRQjuNJ0rOM0bje9QfIDlhK3G3E6uPnZwkTRDx94MnCzy0RNHmW1SSsNcVVLKtr/99dAdJzneUvUhQgnoJENI2Kkkk5zGcfgVe9TifJDlfePRJVPkd5M1iRCRtXf5l2AclieSsp/3n4HXDj6rfIzkfefQxKu/wkjRBkP4DZm+DuwZDb5JIjvh8DPYZ7VV9nDjve/SxKm+COs4gth+45HxsNNnjSDNUa2tTcaTrGpOo863M1e5UFT6+Nvg8L8cO0Xi6JCiTTxTxGZUk7K3th5y79nzyOz6n3nOJT+9EsRMAo1qWGvgNShJ2ZSvzc9hobEoq+AxbaigqxtZiteurEMMSv2VJuoeNtjot+QGFnmrJBb/i5pLlxerKW9aabL3RCzMGVG0p6PtsDdwPobPelfwJ3QQ+blPWIVbfunNBGiddqaRuNgUz/JTdScXwUSvzKhzVt2LQ7PNklz8UtW+5EiM0SZVW5l2d8lTAJW7LVb5oVPumfUCS/sTmFU/fkqiIYT013Zv2WYL6cuzjSZJ2APRDl1qFGJWPffp2cAjJUXAT5KI7Z2+tmcmcE8d3cLjFy4HGMznjQpn86Bn/m4EeDsLTXmKJlMTRnK/a0bM40FhX1pKpRDwbc0PHjlmdoz7sgALD4esvvktIgsY9Wb6E7v/9ApWSRxKGr+CV3EVtkjR8ibMkScPXgEsS1OIuGr5IXpKk4U8RfAmSjrto+GOWgCTtIVG+fWbUnfeQG3tNmPh6zVfTEJ+oD2l/DpUnD8cToCxJ0mvR++DtiNxBTaViZTFDuE3URGPJLUR0J+n3VmWi9Y4WhTrqqUXkO4thra1QL4s413PnFHtHoOGPeotJKX4mSXq6+aYAqLtEW5wngBbE1qssxVB6SOj0QW3U1tomReUUcbTeDOmKVaywNsuLds7PBFb7d8E0qLI+06snl4FKHX/nR+A67RR6/scC+PiQTf9FyuaERGlZ4lu7oe6riEu7uYwYkSGlXQBrq6QfGVLscYPe4FRDUuOFdiYXQN2iGIoVttk1OGnqzMC1xz0FrNMSVJVFPuXbv4fcY0J6GqRjYtMRvSmmTXlhzfyLrr4lqJhMEqaZ9jagpYlet8ufXPy5/ESb5+8roLF/8iYyQ/Fk4D+f2bt+mJjUWAAAAABJRU5ErkJggg=="

/***/ }),
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */
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

var COMPONENT_NAME = 'calf-button';
/* harmony default export */ __webpack_exports__["a"] = ({
  name: COMPONENT_NAME,
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    invalid: {
      type: Boolean,
      default: false
    },
    minor: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconTarget: function iconTarget() {
      var icons = ['loading', 'success'];
      if (icons.indexOf(this.icon) > -1) {
        return __webpack_require__(150)("./calfic-button-" + this.icon + '.png');
      }
      return '';
    },
    hasBoxShadow: function hasBoxShadow() {
      return !(this.inline || this.invalid || this.minor);
    },
    btnClass: function btnClass() {
      return {
        'calf-button-disabled': this.disabled,
        'calf-button-invalid': this.invalid,
        'calf-button-inline': this.inline,
        'calf-button-minor': this.minor,
        'has-box-shadow': this.hasBoxShadow
      };
    }
  },
  methods: {
    handleClick: function handleClick(event) {
      if (this.disabled || this.invalid) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      this.$emit('click', event);
    }
  }
});

/***/ }),
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_button_vue__ = __webpack_require__(99);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_39bfdfea_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_button_vue__ = __webpack_require__(151);
function injectStyle (ssrContext) {
  __webpack_require__(149)
}
var normalizeComponent = __webpack_require__(6)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-39bfdfea"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_button_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_39bfdfea_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_button_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 149 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./calfic-button-loading.png": 87,
	"./calfic-button-success.png": 88
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 150;

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"calf-button",class:_vm.btnClass,on:{"click":_vm.handleClick}},[(_vm.$slots.content && _vm.$slots.desc)?_c('div',[_c('div',{staticClass:"calf-button-content"},[_vm._t("content")],2),_vm._v(" "),_c('div',{staticClass:"calf-button-desc"},[_vm._t("desc")],2)]):_c('div',{staticClass:"calf-button-icon-container"},[(_vm.iconTarget)?_c('img',{staticClass:"calf-button-icon",class:{'loading-rotation': this.icon === 'loading'},attrs:{"src":_vm.iconTarget}}):_vm._e(),_vm._v(" "),_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_mixins_visibility__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popup_popup__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__the_btns__ = __webpack_require__(203);
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





var COMPONENT_NAME = 'calf-dialog';
var EVENT_CONFIRM = 'confirm';
var EVENT_CANCEL = 'cancel';

/* harmony default export */ __webpack_exports__["a"] = ({
  name: COMPONENT_NAME,
  mixins: [__WEBPACK_IMPORTED_MODULE_0__common_mixins_visibility__["a" /* default */]],
  props: {
    title: {
      type: String,
      default: '提示'
    },
    content: {
      type: String,
      default: '未知的系统错误'
    },
    type: {
      type: String,
      default: 'default'
    },
    showClose: {
      type: Boolean,
      default: false
    },
    maskCancle: {
      type: Boolean,
      default: false
    },
    confirmBtn: {
      type: [Object, String],
      default: '确定'
    },
    cancelBtn: {
      type: [Object, String],
      default: '取消'
    },
    onlyOneBtn: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasTitle: function hasTitle() {
      return this.title && this.title.length > 0;
    },
    rootClass: function rootClass() {
      var allRootClass = ['calf-dialog-' + this.type];
      if (this.hasTitle) {
        allRootClass.push('has-title');
      }
      return allRootClass.join(' ');
    }
  },
  methods: {
    handleCancel: function handleCancel(e) {
      this.hide();
      this.$emit(EVENT_CANCEL, e);
    },
    handleConfirm: function handleConfirm(e) {
      this.hide();
      this.$emit(EVENT_CONFIRM, e);
    },
    handleMaskClick: function handleMaskClick(e) {
      if (this.maskCancle) {
        this.hide();
      }
    }
  },
  components: {
    CalfPopup: __WEBPACK_IMPORTED_MODULE_1__popup_popup__["a" /* default */],
    TheBtns: __WEBPACK_IMPORTED_MODULE_2__the_btns__["a" /* default */]
  }
});

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_button__ = __webpack_require__(148);


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



var defConfirmBtn = {
  text: '确定',
  disabled: false
};

var defCancelBtn = {
  text: '取消',
  disabled: false
};

var mergeBtn = function mergeBtn(btn, defBtn) {
  if (typeof btn === 'string') {
    btn = {
      text: btn
    };
  }
  return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, defBtn, btn);
};
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'base-btns',
  data: function data() {
    return {};
  },

  props: {
    onlyOneBtn: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
    },
    confirmBtn: {
      type: [Object, String],
      default: function _default() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, defConfirmBtn);
      }
    },
    cancelBtn: {
      type: [Object, String],
      default: function _default() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, defCancelBtn);
      }
    }
  },
  computed: {
    mergeConfirmBtn: function mergeConfirmBtn() {
      return mergeBtn(this.confirmBtn, defConfirmBtn);
    },
    mergeCancelBtn: function mergeCancelBtn() {
      return mergeBtn(this.cancelBtn, defCancelBtn);
    }
  },
  methods: {
    handleCancel: function handleCancel(e) {
      if (this.mergeCancelBtn.disabled) {
        return;
      }
      this.$emit('on-cancle', e);
    },
    handleConfirm: function handleConfirm(e) {
      if (this.mergeConfirmBtn.disabled) {
        return;
      }
      this.$emit('on-confirm', e);
    }
  },
  components: {
    CalfButton: __WEBPACK_IMPORTED_MODULE_2__button_button__["a" /* default */]
  },
  mounted: function mounted() {}
});

/***/ }),
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_dialog_dialog_vue__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(207);



__WEBPACK_IMPORTED_MODULE_0__components_dialog_dialog_vue__["a" /* default */].install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__components_dialog_dialog_vue__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__components_dialog_dialog_vue__["a" /* default */]);
  Object(__WEBPACK_IMPORTED_MODULE_1__api__["a" /* default */])(Vue, __WEBPACK_IMPORTED_MODULE_0__components_dialog_dialog_vue__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__components_dialog_dialog_vue__["a" /* default */]);

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_dialog_vue__ = __webpack_require__(164);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_9357b388_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_dialog_vue__ = __webpack_require__(206);
function injectStyle (ssrContext) {
  __webpack_require__(202)
}
var normalizeComponent = __webpack_require__(6)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9357b388"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_dialog_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_9357b388_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_dialog_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 202 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_the_btns_vue__ = __webpack_require__(165);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_eaf5b95a_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_the_btns_vue__ = __webpack_require__(205);
function injectStyle (ssrContext) {
  __webpack_require__(204)
}
var normalizeComponent = __webpack_require__(6)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-eaf5b95a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_the_btns_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_eaf5b95a_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_the_btns_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 204 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"base-btns"},[(_vm.type === 'default')?_c('div',{staticClass:"calf-btns-default",class:{'only-one-btn': _vm.onlyOneBtn}},[(!_vm.onlyOneBtn)?_c('button',{staticClass:"calf-dialog-button calf-button-default-cancel",on:{"click":_vm.handleCancel}},[_vm._v(_vm._s(_vm.mergeCancelBtn.text))]):_vm._e(),_vm._v(" "),_c('button',{staticClass:"calf-dialog-button calf-button-default-confirm",on:{"click":_vm.handleConfirm}},[_vm._v(_vm._s(_vm.mergeConfirmBtn.text))])]):(_vm.type === 'primary')?_c('div',{staticClass:"calf-btns-primary",class:{'only-one-btn': _vm.onlyOneBtn}},[(!_vm.onlyOneBtn)?_c('calf-button',{attrs:{"inline":true,"minor":true,"disabled":_vm.mergeCancelBtn.disabled},on:{"click":_vm.handleCancel}},[_vm._v(_vm._s(_vm.mergeCancelBtn.text))]):_vm._e(),_vm._v(" "),_c('calf-button',{staticClass:"calf-btn-confirm",attrs:{"inline":true,"disabled":_vm.mergeConfirmBtn.disabled},on:{"click":_vm.handleConfirm}},[_vm._v(_vm._s(_vm.mergeConfirmBtn.text))])],1):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"calf-dialog-fade"}},[_c('calf-popup',{directives:[{name:"show",rawName:"v-show",value:(_vm.isVisible),expression:"isVisible"}],attrs:{"animation":"dialog","type":"dialog"},on:{"mask-click":_vm.handleMaskClick}},[_c('div',{staticClass:"calf-dialog calf-dialog-container",class:_vm.rootClass},[_c('h1',{staticClass:"calf-header"},[_vm._v("\n        "+_vm._s(_vm.title)+"\n        "),(_vm.showClose || !_vm.hasTitle)?_c('i',{staticClass:"icon-close",on:{"click":_vm.handleCancel}}):_vm._e()]),_vm._v(" "),(_vm.$slots.default)?_c('div',{staticClass:"calf-content"},[_vm._t("default")],2):_c('div',{staticClass:"calf-content",domProps:{"innerHTML":_vm._s(_vm.content)}}),_vm._v(" "),_c('the-btns',{attrs:{"type":_vm.type,"confirmBtn":_vm.confirmBtn,"cancelBtn":_vm.cancelBtn,"onlyOneBtn":_vm.onlyOneBtn},on:{"on-cancle":_vm.handleCancel,"on-confirm":_vm.handleConfirm}})],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addDialog;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_helpers_create_api__ = __webpack_require__(51);


function addDialog(Vue, Dialog) {
  Object(__WEBPACK_IMPORTED_MODULE_0__common_helpers_create_api__["a" /* default */])(Vue, Dialog, ['confirm', 'cancel'], true);
}

/***/ })
/******/ ]);