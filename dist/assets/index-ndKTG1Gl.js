(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = n(r);
    fetch(r.href, s);
  }
})();
function fm(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var gm = { exports: {} },
  wa = {},
  mm = { exports: {} },
  q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Co = Symbol.for("react.element"),
  H_ = Symbol.for("react.portal"),
  q_ = Symbol.for("react.fragment"),
  Q_ = Symbol.for("react.strict_mode"),
  J_ = Symbol.for("react.profiler"),
  ey = Symbol.for("react.provider"),
  ty = Symbol.for("react.context"),
  ny = Symbol.for("react.forward_ref"),
  iy = Symbol.for("react.suspense"),
  ry = Symbol.for("react.memo"),
  sy = Symbol.for("react.lazy"),
  of = Symbol.iterator;
function oy(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (of && t[of]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var pm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  _m = Object.assign,
  ym = {};
function es(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = ym),
    (this.updater = n || pm);
}
es.prototype.isReactComponent = {};
es.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
es.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function vm() {}
vm.prototype = es.prototype;
function _h(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = ym),
    (this.updater = n || pm);
}
var yh = (_h.prototype = new vm());
yh.constructor = _h;
_m(yh, es.prototype);
yh.isPureReactComponent = !0;
var lf = Array.isArray,
  Em = Object.prototype.hasOwnProperty,
  vh = { current: null },
  xm = { key: !0, ref: !0, __self: !0, __source: !0 };
function wm(t, e, n) {
  var i,
    r = {},
    s = null,
    o = null;
  if (e != null)
    for (i in (e.ref !== void 0 && (o = e.ref),
    e.key !== void 0 && (s = "" + e.key),
    e))
      Em.call(e, i) && !xm.hasOwnProperty(i) && (r[i] = e[i]);
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  if (t && t.defaultProps)
    for (i in ((l = t.defaultProps), l)) r[i] === void 0 && (r[i] = l[i]);
  return {
    $$typeof: Co,
    type: t,
    key: s,
    ref: o,
    props: r,
    _owner: vh.current,
  };
}
function ly(t, e) {
  return {
    $$typeof: Co,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function Eh(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Co;
}
function ay(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var af = /\/+/g;
function cu(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? ay("" + t.key)
    : e.toString(36);
}
function xl(t, e, n, i, r) {
  var s = typeof t;
  (s === "undefined" || s === "boolean") && (t = null);
  var o = !1;
  if (t === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case Co:
          case H_:
            o = !0;
        }
    }
  if (o)
    return (
      (o = t),
      (r = r(o)),
      (t = i === "" ? "." + cu(o, 0) : i),
      lf(r)
        ? ((n = ""),
          t != null && (n = t.replace(af, "$&/") + "/"),
          xl(r, e, n, "", function (u) {
            return u;
          }))
        : r != null &&
          (Eh(r) &&
            (r = ly(
              r,
              n +
                (!r.key || (o && o.key === r.key)
                  ? ""
                  : ("" + r.key).replace(af, "$&/") + "/") +
                t,
            )),
          e.push(r)),
      1
    );
  if (((o = 0), (i = i === "" ? "." : i + ":"), lf(t)))
    for (var l = 0; l < t.length; l++) {
      s = t[l];
      var a = i + cu(s, l);
      o += xl(s, e, n, a, r);
    }
  else if (((a = oy(t)), typeof a == "function"))
    for (t = a.call(t), l = 0; !(s = t.next()).done; )
      (s = s.value), (a = i + cu(s, l++)), (o += xl(s, e, n, a, r));
  else if (s === "object")
    throw (
      ((e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return o;
}
function Vo(t, e, n) {
  if (t == null) return t;
  var i = [],
    r = 0;
  return (
    xl(t, i, "", "", function (s) {
      return e.call(n, s, r++);
    }),
    i
  );
}
function uy(t) {
  if (t._status === -1) {
    var e = t._result;
    (e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n));
        },
      ),
      t._status === -1 && ((t._status = 0), (t._result = e));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var Je = { current: null },
  wl = { transition: null },
  cy = {
    ReactCurrentDispatcher: Je,
    ReactCurrentBatchConfig: wl,
    ReactCurrentOwner: vh,
  };
q.Children = {
  map: Vo,
  forEach: function (t, e, n) {
    Vo(
      t,
      function () {
        e.apply(this, arguments);
      },
      n,
    );
  },
  count: function (t) {
    var e = 0;
    return (
      Vo(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      Vo(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!Eh(t))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return t;
  },
};
q.Component = es;
q.Fragment = q_;
q.Profiler = J_;
q.PureComponent = _h;
q.StrictMode = Q_;
q.Suspense = iy;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cy;
q.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        ".",
    );
  var i = _m({}, t.props),
    r = t.key,
    s = t.ref,
    o = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((s = e.ref), (o = vh.current)),
      e.key !== void 0 && (r = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var l = t.type.defaultProps;
    for (a in e)
      Em.call(e, a) &&
        !xm.hasOwnProperty(a) &&
        (i[a] = e[a] === void 0 && l !== void 0 ? l[a] : e[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  return { $$typeof: Co, type: t.type, key: r, ref: s, props: i, _owner: o };
};
q.createContext = function (t) {
  return (
    (t = {
      $$typeof: ty,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: ey, _context: t }),
    (t.Consumer = t)
  );
};
q.createElement = wm;
q.createFactory = function (t) {
  var e = wm.bind(null, t);
  return (e.type = t), e;
};
q.createRef = function () {
  return { current: null };
};
q.forwardRef = function (t) {
  return { $$typeof: ny, render: t };
};
q.isValidElement = Eh;
q.lazy = function (t) {
  return { $$typeof: sy, _payload: { _status: -1, _result: t }, _init: uy };
};
q.memo = function (t, e) {
  return { $$typeof: ry, type: t, compare: e === void 0 ? null : e };
};
q.startTransition = function (t) {
  var e = wl.transition;
  wl.transition = {};
  try {
    t();
  } finally {
    wl.transition = e;
  }
};
q.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
q.useCallback = function (t, e) {
  return Je.current.useCallback(t, e);
};
q.useContext = function (t) {
  return Je.current.useContext(t);
};
q.useDebugValue = function () {};
q.useDeferredValue = function (t) {
  return Je.current.useDeferredValue(t);
};
q.useEffect = function (t, e) {
  return Je.current.useEffect(t, e);
};
q.useId = function () {
  return Je.current.useId();
};
q.useImperativeHandle = function (t, e, n) {
  return Je.current.useImperativeHandle(t, e, n);
};
q.useInsertionEffect = function (t, e) {
  return Je.current.useInsertionEffect(t, e);
};
q.useLayoutEffect = function (t, e) {
  return Je.current.useLayoutEffect(t, e);
};
q.useMemo = function (t, e) {
  return Je.current.useMemo(t, e);
};
q.useReducer = function (t, e, n) {
  return Je.current.useReducer(t, e, n);
};
q.useRef = function (t) {
  return Je.current.useRef(t);
};
q.useState = function (t) {
  return Je.current.useState(t);
};
q.useSyncExternalStore = function (t, e, n) {
  return Je.current.useSyncExternalStore(t, e, n);
};
q.useTransition = function () {
  return Je.current.useTransition();
};
q.version = "18.2.0";
mm.exports = q;
var P = mm.exports;
const hy = fm(P);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dy = P,
  fy = Symbol.for("react.element"),
  gy = Symbol.for("react.fragment"),
  my = Object.prototype.hasOwnProperty,
  py = dy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  _y = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cm(t, e, n) {
  var i,
    r = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    e.key !== void 0 && (s = "" + e.key),
    e.ref !== void 0 && (o = e.ref);
  for (i in e) my.call(e, i) && !_y.hasOwnProperty(i) && (r[i] = e[i]);
  if (t && t.defaultProps)
    for (i in ((e = t.defaultProps), e)) r[i] === void 0 && (r[i] = e[i]);
  return {
    $$typeof: fy,
    type: t,
    key: s,
    ref: o,
    props: r,
    _owner: py.current,
  };
}
wa.Fragment = gy;
wa.jsx = Cm;
wa.jsxs = Cm;
gm.exports = wa;
var C = gm.exports,
  rc = {},
  Sm = { exports: {} },
  Ct = {},
  Tm = { exports: {} },
  Rm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(R, O) {
    var F = R.length;
    R.push(O);
    e: for (; 0 < F; ) {
      var Z = (F - 1) >>> 1,
        I = R[Z];
      if (0 < r(I, O)) (R[Z] = O), (R[F] = I), (F = Z);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function i(R) {
    if (R.length === 0) return null;
    var O = R[0],
      F = R.pop();
    if (F !== O) {
      R[0] = F;
      e: for (var Z = 0, I = R.length, ye = I >>> 1; Z < ye; ) {
        var V = 2 * (Z + 1) - 1,
          ie = R[V],
          je = V + 1,
          Se = R[je];
        if (0 > r(ie, F))
          je < I && 0 > r(Se, ie)
            ? ((R[Z] = Se), (R[je] = F), (Z = je))
            : ((R[Z] = ie), (R[V] = F), (Z = V));
        else if (je < I && 0 > r(Se, F)) (R[Z] = Se), (R[je] = F), (Z = je);
        else break e;
      }
    }
    return O;
  }
  function r(R, O) {
    var F = R.sortIndex - O.sortIndex;
    return F !== 0 ? F : R.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    t.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      l = o.now();
    t.unstable_now = function () {
      return o.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    h = null,
    d = 3,
    f = !1,
    p = !1,
    _ = !1,
    v = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(R) {
    for (var O = n(u); O !== null; ) {
      if (O.callback === null) i(u);
      else if (O.startTime <= R)
        i(u), (O.sortIndex = O.expirationTime), e(a, O);
      else break;
      O = n(u);
    }
  }
  function E(R) {
    if (((_ = !1), y(R), !p))
      if (n(a) !== null) (p = !0), z(x);
      else {
        var O = n(u);
        O !== null && D(E, O.startTime - R);
      }
  }
  function x(R, O) {
    (p = !1), _ && ((_ = !1), g(T), (T = -1)), (f = !0);
    var F = d;
    try {
      for (
        y(O), h = n(a);
        h !== null && (!(h.expirationTime > O) || (R && !X()));

      ) {
        var Z = h.callback;
        if (typeof Z == "function") {
          (h.callback = null), (d = h.priorityLevel);
          var I = Z(h.expirationTime <= O);
          (O = t.unstable_now()),
            typeof I == "function" ? (h.callback = I) : h === n(a) && i(a),
            y(O);
        } else i(a);
        h = n(a);
      }
      if (h !== null) var ye = !0;
      else {
        var V = n(u);
        V !== null && D(E, V.startTime - O), (ye = !1);
      }
      return ye;
    } finally {
      (h = null), (d = F), (f = !1);
    }
  }
  var w = !1,
    S = null,
    T = -1,
    A = 5,
    M = -1;
  function X() {
    return !(t.unstable_now() - M < A);
  }
  function H() {
    if (S !== null) {
      var R = t.unstable_now();
      M = R;
      var O = !0;
      try {
        O = S(!0, R);
      } finally {
        O ? B() : ((w = !1), (S = null));
      }
    } else w = !1;
  }
  var B;
  if (typeof m == "function")
    B = function () {
      m(H);
    };
  else if (typeof MessageChannel < "u") {
    var fe = new MessageChannel(),
      U = fe.port2;
    (fe.port1.onmessage = H),
      (B = function () {
        U.postMessage(null);
      });
  } else
    B = function () {
      v(H, 0);
    };
  function z(R) {
    (S = R), w || ((w = !0), B());
  }
  function D(R, O) {
    T = v(function () {
      R(t.unstable_now());
    }, O);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      p || f || ((p = !0), z(x));
    }),
    (t.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (A = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (t.unstable_next = function (R) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = d;
      }
      var F = d;
      d = O;
      try {
        return R();
      } finally {
        d = F;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (R, O) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var F = d;
      d = R;
      try {
        return O();
      } finally {
        d = F;
      }
    }),
    (t.unstable_scheduleCallback = function (R, O, F) {
      var Z = t.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? Z + F : Z))
          : (F = Z),
        R)
      ) {
        case 1:
          var I = -1;
          break;
        case 2:
          I = 250;
          break;
        case 5:
          I = 1073741823;
          break;
        case 4:
          I = 1e4;
          break;
        default:
          I = 5e3;
      }
      return (
        (I = F + I),
        (R = {
          id: c++,
          callback: O,
          priorityLevel: R,
          startTime: F,
          expirationTime: I,
          sortIndex: -1,
        }),
        F > Z
          ? ((R.sortIndex = F),
            e(u, R),
            n(a) === null &&
              R === n(u) &&
              (_ ? (g(T), (T = -1)) : (_ = !0), D(E, F - Z)))
          : ((R.sortIndex = I), e(a, R), p || f || ((p = !0), z(x))),
        R
      );
    }),
    (t.unstable_shouldYield = X),
    (t.unstable_wrapCallback = function (R) {
      var O = d;
      return function () {
        var F = d;
        d = O;
        try {
          return R.apply(this, arguments);
        } finally {
          d = F;
        }
      };
    });
})(Rm);
Tm.exports = Rm;
var yy = Tm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Im = P,
  wt = yy;
function L(t) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1;
    n < arguments.length;
    n++
  )
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var km = new Set(),
  Vs = {};
function Hi(t, e) {
  Xr(t, e), Xr(t + "Capture", e);
}
function Xr(t, e) {
  for (Vs[t] = e, t = 0; t < e.length; t++) km.add(e[t]);
}
var Rn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  sc = Object.prototype.hasOwnProperty,
  vy =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  uf = {},
  cf = {};
function Ey(t) {
  return sc.call(cf, t)
    ? !0
    : sc.call(uf, t)
      ? !1
      : vy.test(t)
        ? (cf[t] = !0)
        : ((uf[t] = !0), !1);
}
function xy(t, e, n, i) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return i
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function wy(t, e, n, i) {
  if (e === null || typeof e > "u" || xy(t, e, n, i)) return !0;
  if (i) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function et(t, e, n, i, r, s, o) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = i),
    (this.attributeNamespace = r),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var ze = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    ze[t] = new et(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  ze[e] = new et(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  ze[t] = new et(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  ze[t] = new et(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    ze[t] = new et(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  ze[t] = new et(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  ze[t] = new et(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  ze[t] = new et(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  ze[t] = new et(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var xh = /[\-:]([a-z])/g;
function wh(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(xh, wh);
    ze[e] = new et(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(xh, wh);
    ze[e] = new et(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(xh, wh);
  ze[e] = new et(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  ze[t] = new et(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
ze.xlinkHref = new et(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (t) {
  ze[t] = new et(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function Ch(t, e, n, i) {
  var r = ze.hasOwnProperty(e) ? ze[e] : null;
  (r !== null
    ? r.type !== 0
    : i ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (wy(e, n, r, i) && (n = null),
    i || r === null
      ? Ey(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
      : r.mustUseProperty
        ? (t[r.propertyName] = n === null ? (r.type === 3 ? !1 : "") : n)
        : ((e = r.attributeName),
          (i = r.attributeNamespace),
          n === null
            ? t.removeAttribute(e)
            : ((r = r.type),
              (n = r === 3 || (r === 4 && n === !0) ? "" : "" + n),
              i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n))));
}
var Fn = Im.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ko = Symbol.for("react.element"),
  vr = Symbol.for("react.portal"),
  Er = Symbol.for("react.fragment"),
  Sh = Symbol.for("react.strict_mode"),
  oc = Symbol.for("react.profiler"),
  Pm = Symbol.for("react.provider"),
  Lm = Symbol.for("react.context"),
  Th = Symbol.for("react.forward_ref"),
  lc = Symbol.for("react.suspense"),
  ac = Symbol.for("react.suspense_list"),
  Rh = Symbol.for("react.memo"),
  Yn = Symbol.for("react.lazy"),
  Mm = Symbol.for("react.offscreen"),
  hf = Symbol.iterator;
function gs(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (hf && t[hf]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var _e = Object.assign,
  hu;
function ks(t) {
  if (hu === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      hu = (e && e[1]) || "";
    }
  return (
    `
` +
    hu +
    t
  );
}
var du = !1;
function fu(t, e) {
  if (!t || du) return "";
  du = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (u) {
          var i = u;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (u) {
          i = u;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        i = u;
      }
      t();
    }
  } catch (u) {
    if (u && i && typeof u.stack == "string") {
      for (
        var r = u.stack.split(`
`),
          s = i.stack.split(`
`),
          o = r.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && r[o] !== s[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (r[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || r[o] !== s[l])) {
                var a =
                  `
` + r[o].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", t.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (du = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : "") ? ks(t) : "";
}
function Cy(t) {
  switch (t.tag) {
    case 5:
      return ks(t.type);
    case 16:
      return ks("Lazy");
    case 13:
      return ks("Suspense");
    case 19:
      return ks("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = fu(t.type, !1)), t;
    case 11:
      return (t = fu(t.type.render, !1)), t;
    case 1:
      return (t = fu(t.type, !0)), t;
    default:
      return "";
  }
}
function uc(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case Er:
      return "Fragment";
    case vr:
      return "Portal";
    case oc:
      return "Profiler";
    case Sh:
      return "StrictMode";
    case lc:
      return "Suspense";
    case ac:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case Lm:
        return (t.displayName || "Context") + ".Consumer";
      case Pm:
        return (t._context.displayName || "Context") + ".Provider";
      case Th:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case Rh:
        return (
          (e = t.displayName || null), e !== null ? e : uc(t.type) || "Memo"
        );
      case Yn:
        (e = t._payload), (t = t._init);
        try {
          return uc(t(e));
        } catch {}
    }
  return null;
}
function Sy(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ""),
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return uc(e);
    case 8:
      return e === Sh ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function hi(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function Om(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function Ty(t) {
  var e = Om(t) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    i = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var r = n.get,
      s = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return r.call(this);
        },
        set: function (o) {
          (i = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return i;
        },
        setValue: function (o) {
          i = "" + o;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        },
      }
    );
  }
}
function Zo(t) {
  t._valueTracker || (t._valueTracker = Ty(t));
}
function Am(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    i = "";
  return (
    t && (i = Om(t) ? (t.checked ? "true" : "false") : t.value),
    (t = i),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function Fl(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function cc(t, e) {
  var n = e.checked;
  return _e({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  });
}
function df(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue,
    i = e.checked != null ? e.checked : e.defaultChecked;
  (n = hi(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: i,
      initialValue: n,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function Fm(t, e) {
  (e = e.checked), e != null && Ch(t, "checked", e, !1);
}
function hc(t, e) {
  Fm(t, e);
  var n = hi(e.value),
    i = e.type;
  if (n != null)
    i === "number"
      ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
      : t.value !== "" + n && (t.value = "" + n);
  else if (i === "submit" || i === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? dc(t, e.type, n)
    : e.hasOwnProperty("defaultValue") && dc(t, e.type, hi(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked);
}
function ff(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var i = e.type;
    if (
      !(
        (i !== "submit" && i !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e);
  }
  (n = t.name),
    n !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== "" && (t.name = n);
}
function dc(t, e, n) {
  (e !== "number" || Fl(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var Ps = Array.isArray;
function Ar(t, e, n, i) {
  if (((t = t.options), e)) {
    e = {};
    for (var r = 0; r < n.length; r++) e["$" + n[r]] = !0;
    for (n = 0; n < t.length; n++)
      (r = e.hasOwnProperty("$" + t[n].value)),
        t[n].selected !== r && (t[n].selected = r),
        r && i && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + hi(n), e = null, r = 0; r < t.length; r++) {
      if (t[r].value === n) {
        (t[r].selected = !0), i && (t[r].defaultSelected = !0);
        return;
      }
      e !== null || t[r].disabled || (e = t[r]);
    }
    e !== null && (e.selected = !0);
  }
}
function fc(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(L(91));
  return _e({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function gf(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(L(92));
      if (Ps(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), (n = e);
  }
  t._wrapperState = { initialValue: hi(n) };
}
function Nm(t, e) {
  var n = hi(e.value),
    i = hi(e.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    i != null && (t.defaultValue = "" + i);
}
function mf(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function Dm(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function gc(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? Dm(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : t;
}
var $o,
  zm = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, n, i, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, i, r);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        $o = $o || document.createElement("div"),
          $o.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = $o.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function Ks(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var Ns = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ry = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ns).forEach(function (t) {
  Ry.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Ns[e] = Ns[t]);
  });
});
function jm(t, e, n) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : n || typeof e != "number" || e === 0 || (Ns.hasOwnProperty(t) && Ns[t])
      ? ("" + e).trim()
      : e + "px";
}
function Gm(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0,
        r = jm(n, e[n], i);
      n === "float" && (n = "cssFloat"), i ? t.setProperty(n, r) : (t[n] = r);
    }
}
var Iy = _e(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function mc(t, e) {
  if (e) {
    if (Iy[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(L(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(L(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(L(62));
  }
}
function pc(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var _c = null;
function Ih(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var yc = null,
  Fr = null,
  Nr = null;
function pf(t) {
  if ((t = Ro(t))) {
    if (typeof yc != "function") throw Error(L(280));
    var e = t.stateNode;
    e && ((e = Ia(e)), yc(t.stateNode, t.type, e));
  }
}
function bm(t) {
  Fr ? (Nr ? Nr.push(t) : (Nr = [t])) : (Fr = t);
}
function Wm() {
  if (Fr) {
    var t = Fr,
      e = Nr;
    if (((Nr = Fr = null), pf(t), e)) for (t = 0; t < e.length; t++) pf(e[t]);
  }
}
function Xm(t, e) {
  return t(e);
}
function Bm() {}
var gu = !1;
function Um(t, e, n) {
  if (gu) return t(e, n);
  gu = !0;
  try {
    return Xm(t, e, n);
  } finally {
    (gu = !1), (Fr !== null || Nr !== null) && (Bm(), Wm());
  }
}
function Zs(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var i = Ia(n);
  if (i === null) return null;
  n = i[e];
  e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (i = !i.disabled) ||
        ((t = t.type),
        (i = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !i);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(L(231, e, typeof n));
  return n;
}
var vc = !1;
if (Rn)
  try {
    var ms = {};
    Object.defineProperty(ms, "passive", {
      get: function () {
        vc = !0;
      },
    }),
      window.addEventListener("test", ms, ms),
      window.removeEventListener("test", ms, ms);
  } catch {
    vc = !1;
  }
function ky(t, e, n, i, r, s, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ds = !1,
  Nl = null,
  Dl = !1,
  Ec = null,
  Py = {
    onError: function (t) {
      (Ds = !0), (Nl = t);
    },
  };
function Ly(t, e, n, i, r, s, o, l, a) {
  (Ds = !1), (Nl = null), ky.apply(Py, arguments);
}
function My(t, e, n, i, r, s, o, l, a) {
  if ((Ly.apply(this, arguments), Ds)) {
    if (Ds) {
      var u = Nl;
      (Ds = !1), (Nl = null);
    } else throw Error(L(198));
    Dl || ((Dl = !0), (Ec = u));
  }
}
function qi(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function Ym(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function _f(t) {
  if (qi(t) !== t) throw Error(L(188));
}
function Oy(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = qi(t)), e === null)) throw Error(L(188));
    return e !== t ? null : t;
  }
  for (var n = t, i = e; ; ) {
    var r = n.return;
    if (r === null) break;
    var s = r.alternate;
    if (s === null) {
      if (((i = r.return), i !== null)) {
        n = i;
        continue;
      }
      break;
    }
    if (r.child === s.child) {
      for (s = r.child; s; ) {
        if (s === n) return _f(r), t;
        if (s === i) return _f(r), e;
        s = s.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== i.return) (n = r), (i = s);
    else {
      for (var o = !1, l = r.child; l; ) {
        if (l === n) {
          (o = !0), (n = r), (i = s);
          break;
        }
        if (l === i) {
          (o = !0), (i = r), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            (o = !0), (n = s), (i = r);
            break;
          }
          if (l === i) {
            (o = !0), (i = s), (n = r);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(L(189));
      }
    }
    if (n.alternate !== i) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? t : e;
}
function Vm(t) {
  return (t = Oy(t)), t !== null ? Km(t) : null;
}
function Km(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = Km(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var Zm = wt.unstable_scheduleCallback,
  yf = wt.unstable_cancelCallback,
  Ay = wt.unstable_shouldYield,
  Fy = wt.unstable_requestPaint,
  Ce = wt.unstable_now,
  Ny = wt.unstable_getCurrentPriorityLevel,
  kh = wt.unstable_ImmediatePriority,
  $m = wt.unstable_UserBlockingPriority,
  zl = wt.unstable_NormalPriority,
  Dy = wt.unstable_LowPriority,
  Hm = wt.unstable_IdlePriority,
  Ca = null,
  rn = null;
function zy(t) {
  if (rn && typeof rn.onCommitFiberRoot == "function")
    try {
      rn.onCommitFiberRoot(Ca, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var Yt = Math.clz32 ? Math.clz32 : by,
  jy = Math.log,
  Gy = Math.LN2;
function by(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((jy(t) / Gy) | 0)) | 0;
}
var Ho = 64,
  qo = 4194304;
function Ls(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function jl(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var i = 0,
    r = t.suspendedLanes,
    s = t.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~r;
    l !== 0 ? (i = Ls(l)) : ((s &= o), s !== 0 && (i = Ls(s)));
  } else (o = n & ~r), o !== 0 ? (i = Ls(o)) : s !== 0 && (i = Ls(s));
  if (i === 0) return 0;
  if (
    e !== 0 &&
    e !== i &&
    !(e & r) &&
    ((r = i & -i), (s = e & -e), r >= s || (r === 16 && (s & 4194240) !== 0))
  )
    return e;
  if ((i & 4 && (i |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= i; 0 < e; )
      (n = 31 - Yt(e)), (r = 1 << n), (i |= t[n]), (e &= ~r);
  return i;
}
function Wy(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Xy(t, e) {
  for (
    var n = t.suspendedLanes,
      i = t.pingedLanes,
      r = t.expirationTimes,
      s = t.pendingLanes;
    0 < s;

  ) {
    var o = 31 - Yt(s),
      l = 1 << o,
      a = r[o];
    a === -1
      ? (!(l & n) || l & i) && (r[o] = Wy(l, e))
      : a <= e && (t.expiredLanes |= l),
      (s &= ~l);
  }
}
function xc(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function qm() {
  var t = Ho;
  return (Ho <<= 1), !(Ho & 4194240) && (Ho = 64), t;
}
function mu(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function So(t, e, n) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - Yt(e)),
    (t[e] = n);
}
function By(t, e) {
  var n = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var i = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var r = 31 - Yt(n),
      s = 1 << r;
    (e[r] = 0), (i[r] = -1), (t[r] = -1), (n &= ~s);
  }
}
function Ph(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var i = 31 - Yt(n),
      r = 1 << i;
    (r & e) | (t[i] & e) && (t[i] |= e), (n &= ~r);
  }
}
var oe = 0;
function Qm(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Jm,
  Lh,
  ep,
  tp,
  np,
  wc = !1,
  Qo = [],
  ni = null,
  ii = null,
  ri = null,
  $s = new Map(),
  Hs = new Map(),
  $n = [],
  Uy =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function vf(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      ni = null;
      break;
    case "dragenter":
    case "dragleave":
      ii = null;
      break;
    case "mouseover":
    case "mouseout":
      ri = null;
      break;
    case "pointerover":
    case "pointerout":
      $s.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Hs.delete(e.pointerId);
  }
}
function ps(t, e, n, i, r, s) {
  return t === null || t.nativeEvent !== s
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: s,
        targetContainers: [r],
      }),
      e !== null && ((e = Ro(e)), e !== null && Lh(e)),
      t)
    : ((t.eventSystemFlags |= i),
      (e = t.targetContainers),
      r !== null && e.indexOf(r) === -1 && e.push(r),
      t);
}
function Yy(t, e, n, i, r) {
  switch (e) {
    case "focusin":
      return (ni = ps(ni, t, e, n, i, r)), !0;
    case "dragenter":
      return (ii = ps(ii, t, e, n, i, r)), !0;
    case "mouseover":
      return (ri = ps(ri, t, e, n, i, r)), !0;
    case "pointerover":
      var s = r.pointerId;
      return $s.set(s, ps($s.get(s) || null, t, e, n, i, r)), !0;
    case "gotpointercapture":
      return (
        (s = r.pointerId), Hs.set(s, ps(Hs.get(s) || null, t, e, n, i, r)), !0
      );
  }
  return !1;
}
function ip(t) {
  var e = Ai(t.target);
  if (e !== null) {
    var n = qi(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = Ym(n)), e !== null)) {
          (t.blockedOn = e),
            np(t.priority, function () {
              ep(n);
            });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function Cl(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = Cc(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var i = new n.constructor(n.type, n);
      (_c = i), n.target.dispatchEvent(i), (_c = null);
    } else return (e = Ro(n)), e !== null && Lh(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function Ef(t, e, n) {
  Cl(t) && n.delete(e);
}
function Vy() {
  (wc = !1),
    ni !== null && Cl(ni) && (ni = null),
    ii !== null && Cl(ii) && (ii = null),
    ri !== null && Cl(ri) && (ri = null),
    $s.forEach(Ef),
    Hs.forEach(Ef);
}
function _s(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    wc ||
      ((wc = !0),
      wt.unstable_scheduleCallback(wt.unstable_NormalPriority, Vy)));
}
function qs(t) {
  function e(r) {
    return _s(r, t);
  }
  if (0 < Qo.length) {
    _s(Qo[0], t);
    for (var n = 1; n < Qo.length; n++) {
      var i = Qo[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
  }
  for (
    ni !== null && _s(ni, t),
      ii !== null && _s(ii, t),
      ri !== null && _s(ri, t),
      $s.forEach(e),
      Hs.forEach(e),
      n = 0;
    n < $n.length;
    n++
  )
    (i = $n[n]), i.blockedOn === t && (i.blockedOn = null);
  for (; 0 < $n.length && ((n = $n[0]), n.blockedOn === null); )
    ip(n), n.blockedOn === null && $n.shift();
}
var Dr = Fn.ReactCurrentBatchConfig,
  Gl = !0;
function Ky(t, e, n, i) {
  var r = oe,
    s = Dr.transition;
  Dr.transition = null;
  try {
    (oe = 1), Mh(t, e, n, i);
  } finally {
    (oe = r), (Dr.transition = s);
  }
}
function Zy(t, e, n, i) {
  var r = oe,
    s = Dr.transition;
  Dr.transition = null;
  try {
    (oe = 4), Mh(t, e, n, i);
  } finally {
    (oe = r), (Dr.transition = s);
  }
}
function Mh(t, e, n, i) {
  if (Gl) {
    var r = Cc(t, e, n, i);
    if (r === null) Tu(t, e, i, bl, n), vf(t, i);
    else if (Yy(r, t, e, n, i)) i.stopPropagation();
    else if ((vf(t, i), e & 4 && -1 < Uy.indexOf(t))) {
      for (; r !== null; ) {
        var s = Ro(r);
        if (
          (s !== null && Jm(s),
          (s = Cc(t, e, n, i)),
          s === null && Tu(t, e, i, bl, n),
          s === r)
        )
          break;
        r = s;
      }
      r !== null && i.stopPropagation();
    } else Tu(t, e, i, null, n);
  }
}
var bl = null;
function Cc(t, e, n, i) {
  if (((bl = null), (t = Ih(i)), (t = Ai(t)), t !== null))
    if (((e = qi(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = Ym(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (bl = t), null;
}
function rp(t) {
  switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Ny()) {
        case kh:
          return 1;
        case $m:
          return 4;
        case zl:
        case Dy:
          return 16;
        case Hm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var qn = null,
  Oh = null,
  Sl = null;
function sp() {
  if (Sl) return Sl;
  var t,
    e = Oh,
    n = e.length,
    i,
    r = "value" in qn ? qn.value : qn.textContent,
    s = r.length;
  for (t = 0; t < n && e[t] === r[t]; t++);
  var o = n - t;
  for (i = 1; i <= o && e[n - i] === r[s - i]; i++);
  return (Sl = r.slice(t, 1 < i ? 1 - i : void 0));
}
function Tl(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function Jo() {
  return !0;
}
function xf() {
  return !1;
}
function St(t) {
  function e(n, i, r, s, o) {
    (this._reactName = n),
      (this._targetInst = r),
      (this.type = i),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in t)
      t.hasOwnProperty(l) && ((n = t[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Jo
        : xf),
      (this.isPropagationStopped = xf),
      this
    );
  }
  return (
    _e(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Jo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Jo));
      },
      persist: function () {},
      isPersistent: Jo,
    }),
    e
  );
}
var ts = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ah = St(ts),
  To = _e({}, ts, { view: 0, detail: 0 }),
  $y = St(To),
  pu,
  _u,
  ys,
  Sa = _e({}, To, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Fh,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== ys &&
            (ys && t.type === "mousemove"
              ? ((pu = t.screenX - ys.screenX), (_u = t.screenY - ys.screenY))
              : (_u = pu = 0),
            (ys = t)),
          pu);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : _u;
    },
  }),
  wf = St(Sa),
  Hy = _e({}, Sa, { dataTransfer: 0 }),
  qy = St(Hy),
  Qy = _e({}, To, { relatedTarget: 0 }),
  yu = St(Qy),
  Jy = _e({}, ts, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  e1 = St(Jy),
  t1 = _e({}, ts, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  n1 = St(t1),
  i1 = _e({}, ts, { data: 0 }),
  Cf = St(i1),
  r1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  s1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  o1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function l1(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = o1[t]) ? !!e[t] : !1;
}
function Fh() {
  return l1;
}
var a1 = _e({}, To, {
    key: function (t) {
      if (t.key) {
        var e = r1[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = Tl(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
          ? s1[t.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fh,
    charCode: function (t) {
      return t.type === "keypress" ? Tl(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? Tl(t)
        : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
    },
  }),
  u1 = St(a1),
  c1 = _e({}, Sa, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Sf = St(c1),
  h1 = _e({}, To, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fh,
  }),
  d1 = St(h1),
  f1 = _e({}, ts, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  g1 = St(f1),
  m1 = _e({}, Sa, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
            ? -t.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  p1 = St(m1),
  _1 = [9, 13, 27, 32],
  Nh = Rn && "CompositionEvent" in window,
  zs = null;
Rn && "documentMode" in document && (zs = document.documentMode);
var y1 = Rn && "TextEvent" in window && !zs,
  op = Rn && (!Nh || (zs && 8 < zs && 11 >= zs)),
  Tf = " ",
  Rf = !1;
function lp(t, e) {
  switch (t) {
    case "keyup":
      return _1.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ap(t) {
  return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var xr = !1;
function v1(t, e) {
  switch (t) {
    case "compositionend":
      return ap(e);
    case "keypress":
      return e.which !== 32 ? null : ((Rf = !0), Tf);
    case "textInput":
      return (t = e.data), t === Tf && Rf ? null : t;
    default:
      return null;
  }
}
function E1(t, e) {
  if (xr)
    return t === "compositionend" || (!Nh && lp(t, e))
      ? ((t = sp()), (Sl = Oh = qn = null), (xr = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return op && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var x1 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function If(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!x1[t.type] : e === "textarea";
}
function up(t, e, n, i) {
  bm(i),
    (e = Wl(e, "onChange")),
    0 < e.length &&
      ((n = new Ah("onChange", "change", null, n, i)),
      t.push({ event: n, listeners: e }));
}
var js = null,
  Qs = null;
function w1(t) {
  Ep(t, 0);
}
function Ta(t) {
  var e = Sr(t);
  if (Am(e)) return t;
}
function C1(t, e) {
  if (t === "change") return e;
}
var cp = !1;
if (Rn) {
  var vu;
  if (Rn) {
    var Eu = "oninput" in document;
    if (!Eu) {
      var kf = document.createElement("div");
      kf.setAttribute("oninput", "return;"),
        (Eu = typeof kf.oninput == "function");
    }
    vu = Eu;
  } else vu = !1;
  cp = vu && (!document.documentMode || 9 < document.documentMode);
}
function Pf() {
  js && (js.detachEvent("onpropertychange", hp), (Qs = js = null));
}
function hp(t) {
  if (t.propertyName === "value" && Ta(Qs)) {
    var e = [];
    up(e, Qs, t, Ih(t)), Um(w1, e);
  }
}
function S1(t, e, n) {
  t === "focusin"
    ? (Pf(), (js = e), (Qs = n), js.attachEvent("onpropertychange", hp))
    : t === "focusout" && Pf();
}
function T1(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return Ta(Qs);
}
function R1(t, e) {
  if (t === "click") return Ta(e);
}
function I1(t, e) {
  if (t === "input" || t === "change") return Ta(e);
}
function k1(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var Zt = typeof Object.is == "function" ? Object.is : k1;
function Js(t, e) {
  if (Zt(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t),
    i = Object.keys(e);
  if (n.length !== i.length) return !1;
  for (i = 0; i < n.length; i++) {
    var r = n[i];
    if (!sc.call(e, r) || !Zt(t[r], e[r])) return !1;
  }
  return !0;
}
function Lf(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function Mf(t, e) {
  var n = Lf(t);
  t = 0;
  for (var i; n; ) {
    if (n.nodeType === 3) {
      if (((i = t + n.textContent.length), t <= e && i >= e))
        return { node: n, offset: e - t };
      t = i;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Lf(n);
  }
}
function dp(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
          ? dp(t, e.parentNode)
          : "contains" in t
            ? t.contains(e)
            : t.compareDocumentPosition
              ? !!(t.compareDocumentPosition(e) & 16)
              : !1
    : !1;
}
function fp() {
  for (var t = window, e = Fl(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = Fl(t.document);
  }
  return e;
}
function Dh(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      e === "textarea" ||
      t.contentEditable === "true")
  );
}
function P1(t) {
  var e = fp(),
    n = t.focusedElem,
    i = t.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    dp(n.ownerDocument.documentElement, n)
  ) {
    if (i !== null && Dh(n)) {
      if (
        ((e = i.start),
        (t = i.end),
        t === void 0 && (t = e),
        "selectionStart" in n)
      )
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var r = n.textContent.length,
          s = Math.min(i.start, r);
        (i = i.end === void 0 ? s : Math.min(i.end, r)),
          !t.extend && s > i && ((r = i), (i = s), (s = r)),
          (r = Mf(n, s));
        var o = Mf(n, i);
        r &&
          o &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== r.node ||
            t.anchorOffset !== r.offset ||
            t.focusNode !== o.node ||
            t.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(r.node, r.offset),
          t.removeAllRanges(),
          s > i
            ? (t.addRange(e), t.extend(o.node, o.offset))
            : (e.setEnd(o.node, o.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
      (t = e[n]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top);
  }
}
var L1 = Rn && "documentMode" in document && 11 >= document.documentMode,
  wr = null,
  Sc = null,
  Gs = null,
  Tc = !1;
function Of(t, e, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Tc ||
    wr == null ||
    wr !== Fl(i) ||
    ((i = wr),
    "selectionStart" in i && Dh(i)
      ? (i = { start: i.selectionStart, end: i.selectionEnd })
      : ((i = (
          (i.ownerDocument && i.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (i = {
          anchorNode: i.anchorNode,
          anchorOffset: i.anchorOffset,
          focusNode: i.focusNode,
          focusOffset: i.focusOffset,
        })),
    (Gs && Js(Gs, i)) ||
      ((Gs = i),
      (i = Wl(Sc, "onSelect")),
      0 < i.length &&
        ((e = new Ah("onSelect", "select", null, e, n)),
        t.push({ event: e, listeners: i }),
        (e.target = wr))));
}
function el(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n["Webkit" + t] = "webkit" + e),
    (n["Moz" + t] = "moz" + e),
    n
  );
}
var Cr = {
    animationend: el("Animation", "AnimationEnd"),
    animationiteration: el("Animation", "AnimationIteration"),
    animationstart: el("Animation", "AnimationStart"),
    transitionend: el("Transition", "TransitionEnd"),
  },
  xu = {},
  gp = {};
Rn &&
  ((gp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Cr.animationend.animation,
    delete Cr.animationiteration.animation,
    delete Cr.animationstart.animation),
  "TransitionEvent" in window || delete Cr.transitionend.transition);
function Ra(t) {
  if (xu[t]) return xu[t];
  if (!Cr[t]) return t;
  var e = Cr[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in gp) return (xu[t] = e[n]);
  return t;
}
var mp = Ra("animationend"),
  pp = Ra("animationiteration"),
  _p = Ra("animationstart"),
  yp = Ra("transitionend"),
  vp = new Map(),
  Af =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function yi(t, e) {
  vp.set(t, e), Hi(e, [t]);
}
for (var wu = 0; wu < Af.length; wu++) {
  var Cu = Af[wu],
    M1 = Cu.toLowerCase(),
    O1 = Cu[0].toUpperCase() + Cu.slice(1);
  yi(M1, "on" + O1);
}
yi(mp, "onAnimationEnd");
yi(pp, "onAnimationIteration");
yi(_p, "onAnimationStart");
yi("dblclick", "onDoubleClick");
yi("focusin", "onFocus");
yi("focusout", "onBlur");
yi(yp, "onTransitionEnd");
Xr("onMouseEnter", ["mouseout", "mouseover"]);
Xr("onMouseLeave", ["mouseout", "mouseover"]);
Xr("onPointerEnter", ["pointerout", "pointerover"]);
Xr("onPointerLeave", ["pointerout", "pointerover"]);
Hi(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Hi(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Hi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Hi(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Hi(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Hi(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Ms =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  A1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ms));
function Ff(t, e, n) {
  var i = t.type || "unknown-event";
  (t.currentTarget = n), My(i, e, void 0, t), (t.currentTarget = null);
}
function Ep(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var i = t[n],
      r = i.event;
    i = i.listeners;
    e: {
      var s = void 0;
      if (e)
        for (var o = i.length - 1; 0 <= o; o--) {
          var l = i[o],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== s && r.isPropagationStopped())) break e;
          Ff(r, l, u), (s = a);
        }
      else
        for (o = 0; o < i.length; o++) {
          if (
            ((l = i[o]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== s && r.isPropagationStopped())
          )
            break e;
          Ff(r, l, u), (s = a);
        }
    }
  }
  if (Dl) throw ((t = Ec), (Dl = !1), (Ec = null), t);
}
function he(t, e) {
  var n = e[Lc];
  n === void 0 && (n = e[Lc] = new Set());
  var i = t + "__bubble";
  n.has(i) || (xp(e, t, 2, !1), n.add(i));
}
function Su(t, e, n) {
  var i = 0;
  e && (i |= 4), xp(n, t, i, e);
}
var tl = "_reactListening" + Math.random().toString(36).slice(2);
function eo(t) {
  if (!t[tl]) {
    (t[tl] = !0),
      km.forEach(function (n) {
        n !== "selectionchange" && (A1.has(n) || Su(n, !1, t), Su(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[tl] || ((e[tl] = !0), Su("selectionchange", !1, e));
  }
}
function xp(t, e, n, i) {
  switch (rp(e)) {
    case 1:
      var r = Ky;
      break;
    case 4:
      r = Zy;
      break;
    default:
      r = Mh;
  }
  (n = r.bind(null, e, n, t)),
    (r = void 0),
    !vc ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (r = !0),
    i
      ? r !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: r })
        : t.addEventListener(e, n, !0)
      : r !== void 0
        ? t.addEventListener(e, n, { passive: r })
        : t.addEventListener(e, n, !1);
}
function Tu(t, e, n, i, r) {
  var s = i;
  if (!(e & 1) && !(e & 2) && i !== null)
    e: for (;;) {
      if (i === null) return;
      var o = i.tag;
      if (o === 3 || o === 4) {
        var l = i.stateNode.containerInfo;
        if (l === r || (l.nodeType === 8 && l.parentNode === r)) break;
        if (o === 4)
          for (o = i.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === r || (a.nodeType === 8 && a.parentNode === r))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = Ai(l)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            i = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      i = i.return;
    }
  Um(function () {
    var u = s,
      c = Ih(n),
      h = [];
    e: {
      var d = vp.get(t);
      if (d !== void 0) {
        var f = Ah,
          p = t;
        switch (t) {
          case "keypress":
            if (Tl(n) === 0) break e;
          case "keydown":
          case "keyup":
            f = u1;
            break;
          case "focusin":
            (p = "focus"), (f = yu);
            break;
          case "focusout":
            (p = "blur"), (f = yu);
            break;
          case "beforeblur":
          case "afterblur":
            f = yu;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            f = wf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            f = qy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            f = d1;
            break;
          case mp:
          case pp:
          case _p:
            f = e1;
            break;
          case yp:
            f = g1;
            break;
          case "scroll":
            f = $y;
            break;
          case "wheel":
            f = p1;
            break;
          case "copy":
          case "cut":
          case "paste":
            f = n1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            f = Sf;
        }
        var _ = (e & 4) !== 0,
          v = !_ && t === "scroll",
          g = _ ? (d !== null ? d + "Capture" : null) : d;
        _ = [];
        for (var m = u, y; m !== null; ) {
          y = m;
          var E = y.stateNode;
          if (
            (y.tag === 5 &&
              E !== null &&
              ((y = E),
              g !== null && ((E = Zs(m, g)), E != null && _.push(to(m, E, y)))),
            v)
          )
            break;
          m = m.return;
        }
        0 < _.length &&
          ((d = new f(d, p, null, n, c)), h.push({ event: d, listeners: _ }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((d = t === "mouseover" || t === "pointerover"),
          (f = t === "mouseout" || t === "pointerout"),
          d &&
            n !== _c &&
            (p = n.relatedTarget || n.fromElement) &&
            (Ai(p) || p[In]))
        )
          break e;
        if (
          (f || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          f
            ? ((p = n.relatedTarget || n.toElement),
              (f = u),
              (p = p ? Ai(p) : null),
              p !== null &&
                ((v = qi(p)), p !== v || (p.tag !== 5 && p.tag !== 6)) &&
                (p = null))
            : ((f = null), (p = u)),
          f !== p)
        ) {
          if (
            ((_ = wf),
            (E = "onMouseLeave"),
            (g = "onMouseEnter"),
            (m = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((_ = Sf),
              (E = "onPointerLeave"),
              (g = "onPointerEnter"),
              (m = "pointer")),
            (v = f == null ? d : Sr(f)),
            (y = p == null ? d : Sr(p)),
            (d = new _(E, m + "leave", f, n, c)),
            (d.target = v),
            (d.relatedTarget = y),
            (E = null),
            Ai(c) === u &&
              ((_ = new _(g, m + "enter", p, n, c)),
              (_.target = y),
              (_.relatedTarget = v),
              (E = _)),
            (v = E),
            f && p)
          )
            t: {
              for (_ = f, g = p, m = 0, y = _; y; y = ur(y)) m++;
              for (y = 0, E = g; E; E = ur(E)) y++;
              for (; 0 < m - y; ) (_ = ur(_)), m--;
              for (; 0 < y - m; ) (g = ur(g)), y--;
              for (; m--; ) {
                if (_ === g || (g !== null && _ === g.alternate)) break t;
                (_ = ur(_)), (g = ur(g));
              }
              _ = null;
            }
          else _ = null;
          f !== null && Nf(h, d, f, _, !1),
            p !== null && v !== null && Nf(h, v, p, _, !0);
        }
      }
      e: {
        if (
          ((d = u ? Sr(u) : window),
          (f = d.nodeName && d.nodeName.toLowerCase()),
          f === "select" || (f === "input" && d.type === "file"))
        )
          var x = C1;
        else if (If(d))
          if (cp) x = I1;
          else {
            x = T1;
            var w = S1;
          }
        else
          (f = d.nodeName) &&
            f.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (x = R1);
        if (x && (x = x(t, u))) {
          up(h, x, n, c);
          break e;
        }
        w && w(t, d, u),
          t === "focusout" &&
            (w = d._wrapperState) &&
            w.controlled &&
            d.type === "number" &&
            dc(d, "number", d.value);
      }
      switch (((w = u ? Sr(u) : window), t)) {
        case "focusin":
          (If(w) || w.contentEditable === "true") &&
            ((wr = w), (Sc = u), (Gs = null));
          break;
        case "focusout":
          Gs = Sc = wr = null;
          break;
        case "mousedown":
          Tc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Tc = !1), Of(h, n, c);
          break;
        case "selectionchange":
          if (L1) break;
        case "keydown":
        case "keyup":
          Of(h, n, c);
      }
      var S;
      if (Nh)
        e: {
          switch (t) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        xr
          ? lp(t, n) && (T = "onCompositionEnd")
          : t === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (op &&
          n.locale !== "ko" &&
          (xr || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && xr && (S = sp())
            : ((qn = c),
              (Oh = "value" in qn ? qn.value : qn.textContent),
              (xr = !0))),
        (w = Wl(u, T)),
        0 < w.length &&
          ((T = new Cf(T, t, null, n, c)),
          h.push({ event: T, listeners: w }),
          S ? (T.data = S) : ((S = ap(n)), S !== null && (T.data = S)))),
        (S = y1 ? v1(t, n) : E1(t, n)) &&
          ((u = Wl(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Cf("onBeforeInput", "beforeinput", null, n, c)),
            h.push({ event: c, listeners: u }),
            (c.data = S)));
    }
    Ep(h, e);
  });
}
function to(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function Wl(t, e) {
  for (var n = e + "Capture", i = []; t !== null; ) {
    var r = t,
      s = r.stateNode;
    r.tag === 5 &&
      s !== null &&
      ((r = s),
      (s = Zs(t, n)),
      s != null && i.unshift(to(t, s, r)),
      (s = Zs(t, e)),
      s != null && i.push(to(t, s, r))),
      (t = t.return);
  }
  return i;
}
function ur(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function Nf(t, e, n, i, r) {
  for (var s = e._reactName, o = []; n !== null && n !== i; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === i) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      r
        ? ((a = Zs(n, s)), a != null && o.unshift(to(n, a, l)))
        : r || ((a = Zs(n, s)), a != null && o.push(to(n, a, l)))),
      (n = n.return);
  }
  o.length !== 0 && t.push({ event: e, listeners: o });
}
var F1 = /\r\n?/g,
  N1 = /\u0000|\uFFFD/g;
function Df(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      F1,
      `
`,
    )
    .replace(N1, "");
}
function nl(t, e, n) {
  if (((e = Df(e)), Df(t) !== e && n)) throw Error(L(425));
}
function Xl() {}
var Rc = null,
  Ic = null;
function kc(t, e) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var Pc = typeof setTimeout == "function" ? setTimeout : void 0,
  D1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  zf = typeof Promise == "function" ? Promise : void 0,
  z1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof zf < "u"
        ? function (t) {
            return zf.resolve(null).then(t).catch(j1);
          }
        : Pc;
function j1(t) {
  setTimeout(function () {
    throw t;
  });
}
function Ru(t, e) {
  var n = e,
    i = 0;
  do {
    var r = n.nextSibling;
    if ((t.removeChild(n), r && r.nodeType === 8))
      if (((n = r.data), n === "/$")) {
        if (i === 0) {
          t.removeChild(r), qs(e);
          return;
        }
        i--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || i++;
    n = r;
  } while (n);
  qs(e);
}
function si(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function jf(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var ns = Math.random().toString(36).slice(2),
  Qt = "__reactFiber$" + ns,
  no = "__reactProps$" + ns,
  In = "__reactContainer$" + ns,
  Lc = "__reactEvents$" + ns,
  G1 = "__reactListeners$" + ns,
  b1 = "__reactHandles$" + ns;
function Ai(t) {
  var e = t[Qt];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[In] || n[Qt])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = jf(t); t !== null; ) {
          if ((n = t[Qt])) return n;
          t = jf(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function Ro(t) {
  return (
    (t = t[Qt] || t[In]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function Sr(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(L(33));
}
function Ia(t) {
  return t[no] || null;
}
var Mc = [],
  Tr = -1;
function vi(t) {
  return { current: t };
}
function de(t) {
  0 > Tr || ((t.current = Mc[Tr]), (Mc[Tr] = null), Tr--);
}
function ue(t, e) {
  Tr++, (Mc[Tr] = t.current), (t.current = e);
}
var di = {},
  Ke = vi(di),
  ht = vi(!1),
  Ui = di;
function Br(t, e) {
  var n = t.type.contextTypes;
  if (!n) return di;
  var i = t.stateNode;
  if (i && i.__reactInternalMemoizedUnmaskedChildContext === e)
    return i.__reactInternalMemoizedMaskedChildContext;
  var r = {},
    s;
  for (s in n) r[s] = e[s];
  return (
    i &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = r)),
    r
  );
}
function dt(t) {
  return (t = t.childContextTypes), t != null;
}
function Bl() {
  de(ht), de(Ke);
}
function Gf(t, e, n) {
  if (Ke.current !== di) throw Error(L(168));
  ue(Ke, e), ue(ht, n);
}
function wp(t, e, n) {
  var i = t.stateNode;
  if (((e = e.childContextTypes), typeof i.getChildContext != "function"))
    return n;
  i = i.getChildContext();
  for (var r in i) if (!(r in e)) throw Error(L(108, Sy(t) || "Unknown", r));
  return _e({}, n, i);
}
function Ul(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || di),
    (Ui = Ke.current),
    ue(Ke, t),
    ue(ht, ht.current),
    !0
  );
}
function bf(t, e, n) {
  var i = t.stateNode;
  if (!i) throw Error(L(169));
  n
    ? ((t = wp(t, e, Ui)),
      (i.__reactInternalMemoizedMergedChildContext = t),
      de(ht),
      de(Ke),
      ue(Ke, t))
    : de(ht),
    ue(ht, n);
}
var En = null,
  ka = !1,
  Iu = !1;
function Cp(t) {
  En === null ? (En = [t]) : En.push(t);
}
function W1(t) {
  (ka = !0), Cp(t);
}
function Ei() {
  if (!Iu && En !== null) {
    Iu = !0;
    var t = 0,
      e = oe;
    try {
      var n = En;
      for (oe = 1; t < n.length; t++) {
        var i = n[t];
        do i = i(!0);
        while (i !== null);
      }
      (En = null), (ka = !1);
    } catch (r) {
      throw (En !== null && (En = En.slice(t + 1)), Zm(kh, Ei), r);
    } finally {
      (oe = e), (Iu = !1);
    }
  }
  return null;
}
var Rr = [],
  Ir = 0,
  Yl = null,
  Vl = 0,
  kt = [],
  Pt = 0,
  Yi = null,
  xn = 1,
  wn = "";
function Pi(t, e) {
  (Rr[Ir++] = Vl), (Rr[Ir++] = Yl), (Yl = t), (Vl = e);
}
function Sp(t, e, n) {
  (kt[Pt++] = xn), (kt[Pt++] = wn), (kt[Pt++] = Yi), (Yi = t);
  var i = xn;
  t = wn;
  var r = 32 - Yt(i) - 1;
  (i &= ~(1 << r)), (n += 1);
  var s = 32 - Yt(e) + r;
  if (30 < s) {
    var o = r - (r % 5);
    (s = (i & ((1 << o) - 1)).toString(32)),
      (i >>= o),
      (r -= o),
      (xn = (1 << (32 - Yt(e) + r)) | (n << r) | i),
      (wn = s + t);
  } else (xn = (1 << s) | (n << r) | i), (wn = t);
}
function zh(t) {
  t.return !== null && (Pi(t, 1), Sp(t, 1, 0));
}
function jh(t) {
  for (; t === Yl; )
    (Yl = Rr[--Ir]), (Rr[Ir] = null), (Vl = Rr[--Ir]), (Rr[Ir] = null);
  for (; t === Yi; )
    (Yi = kt[--Pt]),
      (kt[Pt] = null),
      (wn = kt[--Pt]),
      (kt[Pt] = null),
      (xn = kt[--Pt]),
      (kt[Pt] = null);
}
var Et = null,
  yt = null,
  ge = !1,
  Bt = null;
function Tp(t, e) {
  var n = Lt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function Wf(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (Et = t), (yt = si(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (Et = t), (yt = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = Yi !== null ? { id: xn, overflow: wn } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Lt(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (Et = t),
            (yt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Oc(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function Ac(t) {
  if (ge) {
    var e = yt;
    if (e) {
      var n = e;
      if (!Wf(t, e)) {
        if (Oc(t)) throw Error(L(418));
        e = si(n.nextSibling);
        var i = Et;
        e && Wf(t, e)
          ? Tp(i, n)
          : ((t.flags = (t.flags & -4097) | 2), (ge = !1), (Et = t));
      }
    } else {
      if (Oc(t)) throw Error(L(418));
      (t.flags = (t.flags & -4097) | 2), (ge = !1), (Et = t);
    }
  }
}
function Xf(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  Et = t;
}
function il(t) {
  if (t !== Et) return !1;
  if (!ge) return Xf(t), (ge = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== "head" && e !== "body" && !kc(t.type, t.memoizedProps))),
    e && (e = yt))
  ) {
    if (Oc(t)) throw (Rp(), Error(L(418)));
    for (; e; ) Tp(t, e), (e = si(e.nextSibling));
  }
  if ((Xf(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(L(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              yt = si(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      yt = null;
    }
  } else yt = Et ? si(t.stateNode.nextSibling) : null;
  return !0;
}
function Rp() {
  for (var t = yt; t; ) t = si(t.nextSibling);
}
function Ur() {
  (yt = Et = null), (ge = !1);
}
function Gh(t) {
  Bt === null ? (Bt = [t]) : Bt.push(t);
}
var X1 = Fn.ReactCurrentBatchConfig;
function Wt(t, e) {
  if (t && t.defaultProps) {
    (e = _e({}, e)), (t = t.defaultProps);
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
var Kl = vi(null),
  Zl = null,
  kr = null,
  bh = null;
function Wh() {
  bh = kr = Zl = null;
}
function Xh(t) {
  var e = Kl.current;
  de(Kl), (t._currentValue = e);
}
function Fc(t, e, n) {
  for (; t !== null; ) {
    var i = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), i !== null && (i.childLanes |= e))
        : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function zr(t, e) {
  (Zl = t),
    (bh = kr = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && (ct = !0), (t.firstContext = null));
}
function Ot(t) {
  var e = t._currentValue;
  if (bh !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), kr === null)) {
      if (Zl === null) throw Error(L(308));
      (kr = t), (Zl.dependencies = { lanes: 0, firstContext: t });
    } else kr = kr.next = t;
  return e;
}
var Fi = null;
function Bh(t) {
  Fi === null ? (Fi = [t]) : Fi.push(t);
}
function Ip(t, e, n, i) {
  var r = e.interleaved;
  return (
    r === null ? ((n.next = n), Bh(e)) : ((n.next = r.next), (r.next = n)),
    (e.interleaved = n),
    kn(t, i)
  );
}
function kn(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    (t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Vn = !1;
function Uh(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function kp(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      });
}
function Cn(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function oi(t, e, n) {
  var i = t.updateQueue;
  if (i === null) return null;
  if (((i = i.shared), J & 2)) {
    var r = i.pending;
    return (
      r === null ? (e.next = e) : ((e.next = r.next), (r.next = e)),
      (i.pending = e),
      kn(t, n)
    );
  }
  return (
    (r = i.interleaved),
    r === null ? ((e.next = e), Bh(i)) : ((e.next = r.next), (r.next = e)),
    (i.interleaved = e),
    kn(t, n)
  );
}
function Rl(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var i = e.lanes;
    (i &= t.pendingLanes), (n |= i), (e.lanes = n), Ph(t, n);
  }
}
function Bf(t, e) {
  var n = t.updateQueue,
    i = t.alternate;
  if (i !== null && ((i = i.updateQueue), n === i)) {
    var r = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (r = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (r = s = e) : (s = s.next = e);
    } else r = s = e;
    (n = {
      baseState: i.baseState,
      firstBaseUpdate: r,
      lastBaseUpdate: s,
      shared: i.shared,
      effects: i.effects,
    }),
      (t.updateQueue = n);
    return;
  }
  (t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e);
}
function $l(t, e, n, i) {
  var r = t.updateQueue;
  Vn = !1;
  var s = r.firstBaseUpdate,
    o = r.lastBaseUpdate,
    l = r.shared.pending;
  if (l !== null) {
    r.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), o === null ? (s = u) : (o.next = u), (o = a);
    var c = t.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== o &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var h = r.baseState;
    (o = 0), (c = u = a = null), (l = s);
    do {
      var d = l.lane,
        f = l.eventTime;
      if ((i & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: f,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var p = t,
            _ = l;
          switch (((d = e), (f = n), _.tag)) {
            case 1:
              if (((p = _.payload), typeof p == "function")) {
                h = p.call(f, h, d);
                break e;
              }
              h = p;
              break e;
            case 3:
              p.flags = (p.flags & -65537) | 128;
            case 0:
              if (
                ((p = _.payload),
                (d = typeof p == "function" ? p.call(f, h, d) : p),
                d == null)
              )
                break e;
              h = _e({}, h, d);
              break e;
            case 2:
              Vn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((t.flags |= 64),
          (d = r.effects),
          d === null ? (r.effects = [l]) : d.push(l));
      } else
        (f = {
          eventTime: f,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = f), (a = h)) : (c = c.next = f),
          (o |= d);
      if (((l = l.next), l === null)) {
        if (((l = r.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (r.lastBaseUpdate = d),
          (r.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = h),
      (r.baseState = a),
      (r.firstBaseUpdate = u),
      (r.lastBaseUpdate = c),
      (e = r.shared.interleaved),
      e !== null)
    ) {
      r = e;
      do (o |= r.lane), (r = r.next);
      while (r !== e);
    } else s === null && (r.shared.lanes = 0);
    (Ki |= o), (t.lanes = o), (t.memoizedState = h);
  }
}
function Uf(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var i = t[e],
        r = i.callback;
      if (r !== null) {
        if (((i.callback = null), (i = n), typeof r != "function"))
          throw Error(L(191, r));
        r.call(i);
      }
    }
}
var Pp = new Im.Component().refs;
function Nc(t, e, n, i) {
  (e = t.memoizedState),
    (n = n(i, e)),
    (n = n == null ? e : _e({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var Pa = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? qi(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var i = qe(),
      r = ai(t),
      s = Cn(i, r);
    (s.payload = e),
      n != null && (s.callback = n),
      (e = oi(t, s, r)),
      e !== null && (Vt(e, t, r, i), Rl(e, t, r));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var i = qe(),
      r = ai(t),
      s = Cn(i, r);
    (s.tag = 1),
      (s.payload = e),
      n != null && (s.callback = n),
      (e = oi(t, s, r)),
      e !== null && (Vt(e, t, r, i), Rl(e, t, r));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = qe(),
      i = ai(t),
      r = Cn(n, i);
    (r.tag = 2),
      e != null && (r.callback = e),
      (e = oi(t, r, i)),
      e !== null && (Vt(e, t, i, n), Rl(e, t, i));
  },
};
function Yf(t, e, n, i, r, s, o) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(i, s, o)
      : e.prototype && e.prototype.isPureReactComponent
        ? !Js(n, i) || !Js(r, s)
        : !0
  );
}
function Lp(t, e, n) {
  var i = !1,
    r = di,
    s = e.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Ot(s))
      : ((r = dt(e) ? Ui : Ke.current),
        (i = e.contextTypes),
        (s = (i = i != null) ? Br(t, r) : di)),
    (e = new e(n, s)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = Pa),
    (t.stateNode = e),
    (e._reactInternals = t),
    i &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = r),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    e
  );
}
function Vf(t, e, n, i) {
  (t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(n, i),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(n, i),
    e.state !== t && Pa.enqueueReplaceState(e, e.state, null);
}
function Dc(t, e, n, i) {
  var r = t.stateNode;
  (r.props = n), (r.state = t.memoizedState), (r.refs = Pp), Uh(t);
  var s = e.contextType;
  typeof s == "object" && s !== null
    ? (r.context = Ot(s))
    : ((s = dt(e) ? Ui : Ke.current), (r.context = Br(t, s))),
    (r.state = t.memoizedState),
    (s = e.getDerivedStateFromProps),
    typeof s == "function" && (Nc(t, e, s, n), (r.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof r.getSnapshotBeforeUpdate == "function" ||
      (typeof r.UNSAFE_componentWillMount != "function" &&
        typeof r.componentWillMount != "function") ||
      ((e = r.state),
      typeof r.componentWillMount == "function" && r.componentWillMount(),
      typeof r.UNSAFE_componentWillMount == "function" &&
        r.UNSAFE_componentWillMount(),
      e !== r.state && Pa.enqueueReplaceState(r, r.state, null),
      $l(t, n, r, i),
      (r.state = t.memoizedState)),
    typeof r.componentDidMount == "function" && (t.flags |= 4194308);
}
function vs(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var i = n.stateNode;
      }
      if (!i) throw Error(L(147, t));
      var r = i,
        s = "" + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === s
        ? e.ref
        : ((e = function (o) {
            var l = r.refs;
            l === Pp && (l = r.refs = {}),
              o === null ? delete l[s] : (l[s] = o);
          }),
          (e._stringRef = s),
          e);
    }
    if (typeof t != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, t));
  }
  return t;
}
function rl(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      L(
        31,
        t === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t,
      ),
    ))
  );
}
function Kf(t) {
  var e = t._init;
  return e(t._payload);
}
function Mp(t) {
  function e(g, m) {
    if (t) {
      var y = g.deletions;
      y === null ? ((g.deletions = [m]), (g.flags |= 16)) : y.push(m);
    }
  }
  function n(g, m) {
    if (!t) return null;
    for (; m !== null; ) e(g, m), (m = m.sibling);
    return null;
  }
  function i(g, m) {
    for (g = new Map(); m !== null; )
      m.key !== null ? g.set(m.key, m) : g.set(m.index, m), (m = m.sibling);
    return g;
  }
  function r(g, m) {
    return (g = ui(g, m)), (g.index = 0), (g.sibling = null), g;
  }
  function s(g, m, y) {
    return (
      (g.index = y),
      t
        ? ((y = g.alternate),
          y !== null
            ? ((y = y.index), y < m ? ((g.flags |= 2), m) : y)
            : ((g.flags |= 2), m))
        : ((g.flags |= 1048576), m)
    );
  }
  function o(g) {
    return t && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, m, y, E) {
    return m === null || m.tag !== 6
      ? ((m = Fu(y, g.mode, E)), (m.return = g), m)
      : ((m = r(m, y)), (m.return = g), m);
  }
  function a(g, m, y, E) {
    var x = y.type;
    return x === Er
      ? c(g, m, y.props.children, E, y.key)
      : m !== null &&
          (m.elementType === x ||
            (typeof x == "object" &&
              x !== null &&
              x.$$typeof === Yn &&
              Kf(x) === m.type))
        ? ((E = r(m, y.props)), (E.ref = vs(g, m, y)), (E.return = g), E)
        : ((E = Ol(y.type, y.key, y.props, null, g.mode, E)),
          (E.ref = vs(g, m, y)),
          (E.return = g),
          E);
  }
  function u(g, m, y, E) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== y.containerInfo ||
      m.stateNode.implementation !== y.implementation
      ? ((m = Nu(y, g.mode, E)), (m.return = g), m)
      : ((m = r(m, y.children || [])), (m.return = g), m);
  }
  function c(g, m, y, E, x) {
    return m === null || m.tag !== 7
      ? ((m = Xi(y, g.mode, E, x)), (m.return = g), m)
      : ((m = r(m, y)), (m.return = g), m);
  }
  function h(g, m, y) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = Fu("" + m, g.mode, y)), (m.return = g), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ko:
          return (
            (y = Ol(m.type, m.key, m.props, null, g.mode, y)),
            (y.ref = vs(g, null, m)),
            (y.return = g),
            y
          );
        case vr:
          return (m = Nu(m, g.mode, y)), (m.return = g), m;
        case Yn:
          var E = m._init;
          return h(g, E(m._payload), y);
      }
      if (Ps(m) || gs(m))
        return (m = Xi(m, g.mode, y, null)), (m.return = g), m;
      rl(g, m);
    }
    return null;
  }
  function d(g, m, y, E) {
    var x = m !== null ? m.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return x !== null ? null : l(g, m, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Ko:
          return y.key === x ? a(g, m, y, E) : null;
        case vr:
          return y.key === x ? u(g, m, y, E) : null;
        case Yn:
          return (x = y._init), d(g, m, x(y._payload), E);
      }
      if (Ps(y) || gs(y)) return x !== null ? null : c(g, m, y, E, null);
      rl(g, y);
    }
    return null;
  }
  function f(g, m, y, E, x) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (g = g.get(y) || null), l(m, g, "" + E, x);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Ko:
          return (g = g.get(E.key === null ? y : E.key) || null), a(m, g, E, x);
        case vr:
          return (g = g.get(E.key === null ? y : E.key) || null), u(m, g, E, x);
        case Yn:
          var w = E._init;
          return f(g, m, y, w(E._payload), x);
      }
      if (Ps(E) || gs(E)) return (g = g.get(y) || null), c(m, g, E, x, null);
      rl(m, E);
    }
    return null;
  }
  function p(g, m, y, E) {
    for (
      var x = null, w = null, S = m, T = (m = 0), A = null;
      S !== null && T < y.length;
      T++
    ) {
      S.index > T ? ((A = S), (S = null)) : (A = S.sibling);
      var M = d(g, S, y[T], E);
      if (M === null) {
        S === null && (S = A);
        break;
      }
      t && S && M.alternate === null && e(g, S),
        (m = s(M, m, T)),
        w === null ? (x = M) : (w.sibling = M),
        (w = M),
        (S = A);
    }
    if (T === y.length) return n(g, S), ge && Pi(g, T), x;
    if (S === null) {
      for (; T < y.length; T++)
        (S = h(g, y[T], E)),
          S !== null &&
            ((m = s(S, m, T)), w === null ? (x = S) : (w.sibling = S), (w = S));
      return ge && Pi(g, T), x;
    }
    for (S = i(g, S); T < y.length; T++)
      (A = f(S, g, T, y[T], E)),
        A !== null &&
          (t && A.alternate !== null && S.delete(A.key === null ? T : A.key),
          (m = s(A, m, T)),
          w === null ? (x = A) : (w.sibling = A),
          (w = A));
    return (
      t &&
        S.forEach(function (X) {
          return e(g, X);
        }),
      ge && Pi(g, T),
      x
    );
  }
  function _(g, m, y, E) {
    var x = gs(y);
    if (typeof x != "function") throw Error(L(150));
    if (((y = x.call(y)), y == null)) throw Error(L(151));
    for (
      var w = (x = null), S = m, T = (m = 0), A = null, M = y.next();
      S !== null && !M.done;
      T++, M = y.next()
    ) {
      S.index > T ? ((A = S), (S = null)) : (A = S.sibling);
      var X = d(g, S, M.value, E);
      if (X === null) {
        S === null && (S = A);
        break;
      }
      t && S && X.alternate === null && e(g, S),
        (m = s(X, m, T)),
        w === null ? (x = X) : (w.sibling = X),
        (w = X),
        (S = A);
    }
    if (M.done) return n(g, S), ge && Pi(g, T), x;
    if (S === null) {
      for (; !M.done; T++, M = y.next())
        (M = h(g, M.value, E)),
          M !== null &&
            ((m = s(M, m, T)), w === null ? (x = M) : (w.sibling = M), (w = M));
      return ge && Pi(g, T), x;
    }
    for (S = i(g, S); !M.done; T++, M = y.next())
      (M = f(S, g, T, M.value, E)),
        M !== null &&
          (t && M.alternate !== null && S.delete(M.key === null ? T : M.key),
          (m = s(M, m, T)),
          w === null ? (x = M) : (w.sibling = M),
          (w = M));
    return (
      t &&
        S.forEach(function (H) {
          return e(g, H);
        }),
      ge && Pi(g, T),
      x
    );
  }
  function v(g, m, y, E) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === Er &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Ko:
          e: {
            for (var x = y.key, w = m; w !== null; ) {
              if (w.key === x) {
                if (((x = y.type), x === Er)) {
                  if (w.tag === 7) {
                    n(g, w.sibling),
                      (m = r(w, y.props.children)),
                      (m.return = g),
                      (g = m);
                    break e;
                  }
                } else if (
                  w.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === Yn &&
                    Kf(x) === w.type)
                ) {
                  n(g, w.sibling),
                    (m = r(w, y.props)),
                    (m.ref = vs(g, w, y)),
                    (m.return = g),
                    (g = m);
                  break e;
                }
                n(g, w);
                break;
              } else e(g, w);
              w = w.sibling;
            }
            y.type === Er
              ? ((m = Xi(y.props.children, g.mode, E, y.key)),
                (m.return = g),
                (g = m))
              : ((E = Ol(y.type, y.key, y.props, null, g.mode, E)),
                (E.ref = vs(g, m, y)),
                (E.return = g),
                (g = E));
          }
          return o(g);
        case vr:
          e: {
            for (w = y.key; m !== null; ) {
              if (m.key === w)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === y.containerInfo &&
                  m.stateNode.implementation === y.implementation
                ) {
                  n(g, m.sibling),
                    (m = r(m, y.children || [])),
                    (m.return = g),
                    (g = m);
                  break e;
                } else {
                  n(g, m);
                  break;
                }
              else e(g, m);
              m = m.sibling;
            }
            (m = Nu(y, g.mode, E)), (m.return = g), (g = m);
          }
          return o(g);
        case Yn:
          return (w = y._init), v(g, m, w(y._payload), E);
      }
      if (Ps(y)) return p(g, m, y, E);
      if (gs(y)) return _(g, m, y, E);
      rl(g, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        m !== null && m.tag === 6
          ? (n(g, m.sibling), (m = r(m, y)), (m.return = g), (g = m))
          : (n(g, m), (m = Fu(y, g.mode, E)), (m.return = g), (g = m)),
        o(g))
      : n(g, m);
  }
  return v;
}
var Yr = Mp(!0),
  Op = Mp(!1),
  Io = {},
  sn = vi(Io),
  io = vi(Io),
  ro = vi(Io);
function Ni(t) {
  if (t === Io) throw Error(L(174));
  return t;
}
function Yh(t, e) {
  switch ((ue(ro, e), ue(io, t), ue(sn, Io), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : gc(null, "");
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = gc(e, t));
  }
  de(sn), ue(sn, e);
}
function Vr() {
  de(sn), de(io), de(ro);
}
function Ap(t) {
  Ni(ro.current);
  var e = Ni(sn.current),
    n = gc(e, t.type);
  e !== n && (ue(io, t), ue(sn, n));
}
function Vh(t) {
  io.current === t && (de(sn), de(io));
}
var me = vi(0);
function Hl(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var ku = [];
function Kh() {
  for (var t = 0; t < ku.length; t++)
    ku[t]._workInProgressVersionPrimary = null;
  ku.length = 0;
}
var Il = Fn.ReactCurrentDispatcher,
  Pu = Fn.ReactCurrentBatchConfig,
  Vi = 0,
  pe = null,
  Ie = null,
  Le = null,
  ql = !1,
  bs = !1,
  so = 0,
  B1 = 0;
function Ge() {
  throw Error(L(321));
}
function Zh(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!Zt(t[n], e[n])) return !1;
  return !0;
}
function $h(t, e, n, i, r, s) {
  if (
    ((Vi = s),
    (pe = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (Il.current = t === null || t.memoizedState === null ? K1 : Z1),
    (t = n(i, r)),
    bs)
  ) {
    s = 0;
    do {
      if (((bs = !1), (so = 0), 25 <= s)) throw Error(L(301));
      (s += 1),
        (Le = Ie = null),
        (e.updateQueue = null),
        (Il.current = $1),
        (t = n(i, r));
    } while (bs);
  }
  if (
    ((Il.current = Ql),
    (e = Ie !== null && Ie.next !== null),
    (Vi = 0),
    (Le = Ie = pe = null),
    (ql = !1),
    e)
  )
    throw Error(L(300));
  return t;
}
function Hh() {
  var t = so !== 0;
  return (so = 0), t;
}
function qt() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Le === null ? (pe.memoizedState = Le = t) : (Le = Le.next = t), Le;
}
function At() {
  if (Ie === null) {
    var t = pe.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = Ie.next;
  var e = Le === null ? pe.memoizedState : Le.next;
  if (e !== null) (Le = e), (Ie = t);
  else {
    if (t === null) throw Error(L(310));
    (Ie = t),
      (t = {
        memoizedState: Ie.memoizedState,
        baseState: Ie.baseState,
        baseQueue: Ie.baseQueue,
        queue: Ie.queue,
        next: null,
      }),
      Le === null ? (pe.memoizedState = Le = t) : (Le = Le.next = t);
  }
  return Le;
}
function oo(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function Lu(t) {
  var e = At(),
    n = e.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = t;
  var i = Ie,
    r = i.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (r !== null) {
      var o = r.next;
      (r.next = s.next), (s.next = o);
    }
    (i.baseQueue = r = s), (n.pending = null);
  }
  if (r !== null) {
    (s = r.next), (i = i.baseState);
    var l = (o = null),
      a = null,
      u = s;
    do {
      var c = u.lane;
      if ((Vi & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (i = u.hasEagerState ? u.eagerState : t(i, u.action));
      else {
        var h = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = h), (o = i)) : (a = a.next = h),
          (pe.lanes |= c),
          (Ki |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? (o = i) : (a.next = l),
      Zt(i, e.memoizedState) || (ct = !0),
      (e.memoizedState = i),
      (e.baseState = o),
      (e.baseQueue = a),
      (n.lastRenderedState = i);
  }
  if (((t = n.interleaved), t !== null)) {
    r = t;
    do (s = r.lane), (pe.lanes |= s), (Ki |= s), (r = r.next);
    while (r !== t);
  } else r === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function Mu(t) {
  var e = At(),
    n = e.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = t;
  var i = n.dispatch,
    r = n.pending,
    s = e.memoizedState;
  if (r !== null) {
    n.pending = null;
    var o = (r = r.next);
    do (s = t(s, o.action)), (o = o.next);
    while (o !== r);
    Zt(s, e.memoizedState) || (ct = !0),
      (e.memoizedState = s),
      e.baseQueue === null && (e.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, i];
}
function Fp() {}
function Np(t, e) {
  var n = pe,
    i = At(),
    r = e(),
    s = !Zt(i.memoizedState, r);
  if (
    (s && ((i.memoizedState = r), (ct = !0)),
    (i = i.queue),
    qh(jp.bind(null, n, i, t), [t]),
    i.getSnapshot !== e || s || (Le !== null && Le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      lo(9, zp.bind(null, n, i, r, e), void 0, null),
      Oe === null)
    )
      throw Error(L(349));
    Vi & 30 || Dp(n, e, r);
  }
  return r;
}
function Dp(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = pe.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (pe.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function zp(t, e, n, i) {
  (e.value = n), (e.getSnapshot = i), Gp(e) && bp(t);
}
function jp(t, e, n) {
  return n(function () {
    Gp(e) && bp(t);
  });
}
function Gp(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !Zt(t, n);
  } catch {
    return !0;
  }
}
function bp(t) {
  var e = kn(t, 1);
  e !== null && Vt(e, t, 1, -1);
}
function Zf(t) {
  var e = qt();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: oo,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = V1.bind(null, pe, t)),
    [e.memoizedState, t]
  );
}
function lo(t, e, n, i) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: i, next: null }),
    (e = pe.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (pe.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((i = n.next), (n.next = t), (t.next = i), (e.lastEffect = t))),
    t
  );
}
function Wp() {
  return At().memoizedState;
}
function kl(t, e, n, i) {
  var r = qt();
  (pe.flags |= t),
    (r.memoizedState = lo(1 | e, n, void 0, i === void 0 ? null : i));
}
function La(t, e, n, i) {
  var r = At();
  i = i === void 0 ? null : i;
  var s = void 0;
  if (Ie !== null) {
    var o = Ie.memoizedState;
    if (((s = o.destroy), i !== null && Zh(i, o.deps))) {
      r.memoizedState = lo(e, n, s, i);
      return;
    }
  }
  (pe.flags |= t), (r.memoizedState = lo(1 | e, n, s, i));
}
function $f(t, e) {
  return kl(8390656, 8, t, e);
}
function qh(t, e) {
  return La(2048, 8, t, e);
}
function Xp(t, e) {
  return La(4, 2, t, e);
}
function Bp(t, e) {
  return La(4, 4, t, e);
}
function Up(t, e) {
  if (typeof e == "function")
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function Yp(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null), La(4, 4, Up.bind(null, e, t), n)
  );
}
function Qh() {}
function Vp(t, e) {
  var n = At();
  e = e === void 0 ? null : e;
  var i = n.memoizedState;
  return i !== null && e !== null && Zh(e, i[1])
    ? i[0]
    : ((n.memoizedState = [t, e]), t);
}
function Kp(t, e) {
  var n = At();
  e = e === void 0 ? null : e;
  var i = n.memoizedState;
  return i !== null && e !== null && Zh(e, i[1])
    ? i[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function Zp(t, e, n) {
  return Vi & 21
    ? (Zt(n, e) || ((n = qm()), (pe.lanes |= n), (Ki |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (ct = !0)), (t.memoizedState = n));
}
function U1(t, e) {
  var n = oe;
  (oe = n !== 0 && 4 > n ? n : 4), t(!0);
  var i = Pu.transition;
  Pu.transition = {};
  try {
    t(!1), e();
  } finally {
    (oe = n), (Pu.transition = i);
  }
}
function $p() {
  return At().memoizedState;
}
function Y1(t, e, n) {
  var i = ai(t);
  if (
    ((n = {
      lane: i,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Hp(t))
  )
    qp(e, n);
  else if (((n = Ip(t, e, n, i)), n !== null)) {
    var r = qe();
    Vt(n, t, i, r), Qp(n, e, i);
  }
}
function V1(t, e, n) {
  var i = ai(t),
    r = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Hp(t)) qp(e, r);
  else {
    var s = t.alternate;
    if (
      t.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = e.lastRenderedReducer), s !== null)
    )
      try {
        var o = e.lastRenderedState,
          l = s(o, n);
        if (((r.hasEagerState = !0), (r.eagerState = l), Zt(l, o))) {
          var a = e.interleaved;
          a === null
            ? ((r.next = r), Bh(e))
            : ((r.next = a.next), (a.next = r)),
            (e.interleaved = r);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ip(t, e, r, i)),
      n !== null && ((r = qe()), Vt(n, t, i, r), Qp(n, e, i));
  }
}
function Hp(t) {
  var e = t.alternate;
  return t === pe || (e !== null && e === pe);
}
function qp(t, e) {
  bs = ql = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e);
}
function Qp(t, e, n) {
  if (n & 4194240) {
    var i = e.lanes;
    (i &= t.pendingLanes), (n |= i), (e.lanes = n), Ph(t, n);
  }
}
var Ql = {
    readContext: Ot,
    useCallback: Ge,
    useContext: Ge,
    useEffect: Ge,
    useImperativeHandle: Ge,
    useInsertionEffect: Ge,
    useLayoutEffect: Ge,
    useMemo: Ge,
    useReducer: Ge,
    useRef: Ge,
    useState: Ge,
    useDebugValue: Ge,
    useDeferredValue: Ge,
    useTransition: Ge,
    useMutableSource: Ge,
    useSyncExternalStore: Ge,
    useId: Ge,
    unstable_isNewReconciler: !1,
  },
  K1 = {
    readContext: Ot,
    useCallback: function (t, e) {
      return (qt().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: Ot,
    useEffect: $f,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        kl(4194308, 4, Up.bind(null, e, t), n)
      );
    },
    useLayoutEffect: function (t, e) {
      return kl(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return kl(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = qt();
      return (
        (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
      );
    },
    useReducer: function (t, e, n) {
      var i = qt();
      return (
        (e = n !== void 0 ? n(e) : e),
        (i.memoizedState = i.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (i.queue = t),
        (t = t.dispatch = Y1.bind(null, pe, t)),
        [i.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = qt();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: Zf,
    useDebugValue: Qh,
    useDeferredValue: function (t) {
      return (qt().memoizedState = t);
    },
    useTransition: function () {
      var t = Zf(!1),
        e = t[0];
      return (t = U1.bind(null, t[1])), (qt().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var i = pe,
        r = qt();
      if (ge) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = e()), Oe === null)) throw Error(L(349));
        Vi & 30 || Dp(i, e, n);
      }
      r.memoizedState = n;
      var s = { value: n, getSnapshot: e };
      return (
        (r.queue = s),
        $f(jp.bind(null, i, s, t), [t]),
        (i.flags |= 2048),
        lo(9, zp.bind(null, i, s, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = qt(),
        e = Oe.identifierPrefix;
      if (ge) {
        var n = wn,
          i = xn;
        (n = (i & ~(1 << (32 - Yt(i) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = so++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":");
      } else (n = B1++), (e = ":" + e + "r" + n.toString(32) + ":");
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  Z1 = {
    readContext: Ot,
    useCallback: Vp,
    useContext: Ot,
    useEffect: qh,
    useImperativeHandle: Yp,
    useInsertionEffect: Xp,
    useLayoutEffect: Bp,
    useMemo: Kp,
    useReducer: Lu,
    useRef: Wp,
    useState: function () {
      return Lu(oo);
    },
    useDebugValue: Qh,
    useDeferredValue: function (t) {
      var e = At();
      return Zp(e, Ie.memoizedState, t);
    },
    useTransition: function () {
      var t = Lu(oo)[0],
        e = At().memoizedState;
      return [t, e];
    },
    useMutableSource: Fp,
    useSyncExternalStore: Np,
    useId: $p,
    unstable_isNewReconciler: !1,
  },
  $1 = {
    readContext: Ot,
    useCallback: Vp,
    useContext: Ot,
    useEffect: qh,
    useImperativeHandle: Yp,
    useInsertionEffect: Xp,
    useLayoutEffect: Bp,
    useMemo: Kp,
    useReducer: Mu,
    useRef: Wp,
    useState: function () {
      return Mu(oo);
    },
    useDebugValue: Qh,
    useDeferredValue: function (t) {
      var e = At();
      return Ie === null ? (e.memoizedState = t) : Zp(e, Ie.memoizedState, t);
    },
    useTransition: function () {
      var t = Mu(oo)[0],
        e = At().memoizedState;
      return [t, e];
    },
    useMutableSource: Fp,
    useSyncExternalStore: Np,
    useId: $p,
    unstable_isNewReconciler: !1,
  };
function Kr(t, e) {
  try {
    var n = "",
      i = e;
    do (n += Cy(i)), (i = i.return);
    while (i);
    var r = n;
  } catch (s) {
    r =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: t, source: e, stack: r, digest: null };
}
function Ou(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function zc(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var H1 = typeof WeakMap == "function" ? WeakMap : Map;
function Jp(t, e, n) {
  (n = Cn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var i = e.value;
  return (
    (n.callback = function () {
      ea || ((ea = !0), (Kc = i)), zc(t, e);
    }),
    n
  );
}
function e0(t, e, n) {
  (n = Cn(-1, n)), (n.tag = 3);
  var i = t.type.getDerivedStateFromError;
  if (typeof i == "function") {
    var r = e.value;
    (n.payload = function () {
      return i(r);
    }),
      (n.callback = function () {
        zc(t, e);
      });
  }
  var s = t.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        zc(t, e),
          typeof i != "function" &&
            (li === null ? (li = new Set([this])) : li.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Hf(t, e, n) {
  var i = t.pingCache;
  if (i === null) {
    i = t.pingCache = new H1();
    var r = new Set();
    i.set(e, r);
  } else (r = i.get(e)), r === void 0 && ((r = new Set()), i.set(e, r));
  r.has(n) || (r.add(n), (t = cv.bind(null, t, e, n)), e.then(t, t));
}
function qf(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function Qf(t, e, n, i, r) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = r), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = Cn(-1, 1)), (e.tag = 2), oi(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var q1 = Fn.ReactCurrentOwner,
  ct = !1;
function He(t, e, n, i) {
  e.child = t === null ? Op(e, null, n, i) : Yr(e, t.child, n, i);
}
function Jf(t, e, n, i, r) {
  n = n.render;
  var s = e.ref;
  return (
    zr(e, r),
    (i = $h(t, e, n, i, s, r)),
    (n = Hh()),
    t !== null && !ct
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~r),
        Pn(t, e, r))
      : (ge && n && zh(e), (e.flags |= 1), He(t, e, i, r), e.child)
  );
}
function eg(t, e, n, i, r) {
  if (t === null) {
    var s = n.type;
    return typeof s == "function" &&
      !od(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = s), t0(t, e, s, i, r))
      : ((t = Ol(n.type, null, i, e, e.mode, r)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((s = t.child), !(t.lanes & r))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Js), n(o, i) && t.ref === e.ref)
    )
      return Pn(t, e, r);
  }
  return (
    (e.flags |= 1),
    (t = ui(s, i)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function t0(t, e, n, i, r) {
  if (t !== null) {
    var s = t.memoizedProps;
    if (Js(s, i) && t.ref === e.ref)
      if (((ct = !1), (e.pendingProps = i = s), (t.lanes & r) !== 0))
        t.flags & 131072 && (ct = !0);
      else return (e.lanes = t.lanes), Pn(t, e, r);
  }
  return jc(t, e, n, i, r);
}
function n0(t, e, n) {
  var i = e.pendingProps,
    r = i.children,
    s = t !== null ? t.memoizedState : null;
  if (i.mode === "hidden")
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ue(Lr, pt),
        (pt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (t = s !== null ? s.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          ue(Lr, pt),
          (pt |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (i = s !== null ? s.baseLanes : n),
        ue(Lr, pt),
        (pt |= i);
    }
  else
    s !== null ? ((i = s.baseLanes | n), (e.memoizedState = null)) : (i = n),
      ue(Lr, pt),
      (pt |= i);
  return He(t, e, r, n), e.child;
}
function i0(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function jc(t, e, n, i, r) {
  var s = dt(n) ? Ui : Ke.current;
  return (
    (s = Br(e, s)),
    zr(e, r),
    (n = $h(t, e, n, i, s, r)),
    (i = Hh()),
    t !== null && !ct
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~r),
        Pn(t, e, r))
      : (ge && i && zh(e), (e.flags |= 1), He(t, e, n, r), e.child)
  );
}
function tg(t, e, n, i, r) {
  if (dt(n)) {
    var s = !0;
    Ul(e);
  } else s = !1;
  if ((zr(e, r), e.stateNode === null))
    Pl(t, e), Lp(e, n, i), Dc(e, n, i, r), (i = !0);
  else if (t === null) {
    var o = e.stateNode,
      l = e.memoizedProps;
    o.props = l;
    var a = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ot(u))
      : ((u = dt(n) ? Ui : Ke.current), (u = Br(e, u)));
    var c = n.getDerivedStateFromProps,
      h =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== i || a !== u) && Vf(e, o, i, u)),
      (Vn = !1);
    var d = e.memoizedState;
    (o.state = d),
      $l(e, i, o, r),
      (a = e.memoizedState),
      l !== i || d !== a || ht.current || Vn
        ? (typeof c == "function" && (Nc(e, n, c, i), (a = e.memoizedState)),
          (l = Vn || Yf(e, n, l, i, d, a, u))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = i),
              (e.memoizedState = a)),
          (o.props = i),
          (o.state = a),
          (o.context = u),
          (i = l))
        : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
          (i = !1));
  } else {
    (o = e.stateNode),
      kp(t, e),
      (l = e.memoizedProps),
      (u = e.type === e.elementType ? l : Wt(e.type, l)),
      (o.props = u),
      (h = e.pendingProps),
      (d = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ot(a))
        : ((a = dt(n) ? Ui : Ke.current), (a = Br(e, a)));
    var f = n.getDerivedStateFromProps;
    (c =
      typeof f == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== h || d !== a) && Vf(e, o, i, a)),
      (Vn = !1),
      (d = e.memoizedState),
      (o.state = d),
      $l(e, i, o, r);
    var p = e.memoizedState;
    l !== h || d !== p || ht.current || Vn
      ? (typeof f == "function" && (Nc(e, n, f, i), (p = e.memoizedState)),
        (u = Vn || Yf(e, n, u, i, d, p, a) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(i, p, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(i, p, a)),
            typeof o.componentDidUpdate == "function" && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === t.memoizedProps && d === t.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === t.memoizedProps && d === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = i),
            (e.memoizedState = p)),
        (o.props = i),
        (o.state = p),
        (o.context = a),
        (i = u))
      : (typeof o.componentDidUpdate != "function" ||
          (l === t.memoizedProps && d === t.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === t.memoizedProps && d === t.memoizedState) ||
          (e.flags |= 1024),
        (i = !1));
  }
  return Gc(t, e, n, i, s, r);
}
function Gc(t, e, n, i, r, s) {
  i0(t, e);
  var o = (e.flags & 128) !== 0;
  if (!i && !o) return r && bf(e, n, !1), Pn(t, e, s);
  (i = e.stateNode), (q1.current = e);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : i.render();
  return (
    (e.flags |= 1),
    t !== null && o
      ? ((e.child = Yr(e, t.child, null, s)), (e.child = Yr(e, null, l, s)))
      : He(t, e, l, s),
    (e.memoizedState = i.state),
    r && bf(e, n, !0),
    e.child
  );
}
function r0(t) {
  var e = t.stateNode;
  e.pendingContext
    ? Gf(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && Gf(t, e.context, !1),
    Yh(t, e.containerInfo);
}
function ng(t, e, n, i, r) {
  return Ur(), Gh(r), (e.flags |= 256), He(t, e, n, i), e.child;
}
var bc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Wc(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function s0(t, e, n) {
  var i = e.pendingProps,
    r = me.current,
    s = !1,
    o = (e.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = t !== null && t.memoizedState === null ? !1 : (r & 2) !== 0),
    l
      ? ((s = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (r |= 1),
    ue(me, r & 1),
    t === null)
  )
    return (
      Ac(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((o = i.children),
          (t = i.fallback),
          s
            ? ((i = e.mode),
              (s = e.child),
              (o = { mode: "hidden", children: o }),
              !(i & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Aa(o, i, 0, null)),
              (t = Xi(t, i, n, null)),
              (s.return = e),
              (t.return = e),
              (s.sibling = t),
              (e.child = s),
              (e.child.memoizedState = Wc(n)),
              (e.memoizedState = bc),
              t)
            : Jh(e, o))
    );
  if (((r = t.memoizedState), r !== null && ((l = r.dehydrated), l !== null)))
    return Q1(t, e, o, i, l, r, n);
  if (s) {
    (s = i.fallback), (o = e.mode), (r = t.child), (l = r.sibling);
    var a = { mode: "hidden", children: i.children };
    return (
      !(o & 1) && e.child !== r
        ? ((i = e.child),
          (i.childLanes = 0),
          (i.pendingProps = a),
          (e.deletions = null))
        : ((i = ui(r, a)), (i.subtreeFlags = r.subtreeFlags & 14680064)),
      l !== null ? (s = ui(l, s)) : ((s = Xi(s, o, n, null)), (s.flags |= 2)),
      (s.return = e),
      (i.return = e),
      (i.sibling = s),
      (e.child = i),
      (i = s),
      (s = e.child),
      (o = t.child.memoizedState),
      (o =
        o === null
          ? Wc(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = t.childLanes & ~n),
      (e.memoizedState = bc),
      i
    );
  }
  return (
    (s = t.child),
    (t = s.sibling),
    (i = ui(s, { mode: "visible", children: i.children })),
    !(e.mode & 1) && (i.lanes = n),
    (i.return = e),
    (i.sibling = null),
    t !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = i),
    (e.memoizedState = null),
    i
  );
}
function Jh(t, e) {
  return (
    (e = Aa({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function sl(t, e, n, i) {
  return (
    i !== null && Gh(i),
    Yr(e, t.child, null, n),
    (t = Jh(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function Q1(t, e, n, i, r, s, o) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (i = Ou(Error(L(422)))), sl(t, e, o, i))
      : e.memoizedState !== null
        ? ((e.child = t.child), (e.flags |= 128), null)
        : ((s = i.fallback),
          (r = e.mode),
          (i = Aa({ mode: "visible", children: i.children }, r, 0, null)),
          (s = Xi(s, r, o, null)),
          (s.flags |= 2),
          (i.return = e),
          (s.return = e),
          (i.sibling = s),
          (e.child = i),
          e.mode & 1 && Yr(e, t.child, null, o),
          (e.child.memoizedState = Wc(o)),
          (e.memoizedState = bc),
          s);
  if (!(e.mode & 1)) return sl(t, e, o, null);
  if (r.data === "$!") {
    if (((i = r.nextSibling && r.nextSibling.dataset), i)) var l = i.dgst;
    return (i = l), (s = Error(L(419))), (i = Ou(s, i, void 0)), sl(t, e, o, i);
  }
  if (((l = (o & t.childLanes) !== 0), ct || l)) {
    if (((i = Oe), i !== null)) {
      switch (o & -o) {
        case 4:
          r = 2;
          break;
        case 16:
          r = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          r = 32;
          break;
        case 536870912:
          r = 268435456;
          break;
        default:
          r = 0;
      }
      (r = r & (i.suspendedLanes | o) ? 0 : r),
        r !== 0 &&
          r !== s.retryLane &&
          ((s.retryLane = r), kn(t, r), Vt(i, t, r, -1));
    }
    return sd(), (i = Ou(Error(L(421)))), sl(t, e, o, i);
  }
  return r.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = hv.bind(null, t)),
      (r._reactRetry = e),
      null)
    : ((t = s.treeContext),
      (yt = si(r.nextSibling)),
      (Et = e),
      (ge = !0),
      (Bt = null),
      t !== null &&
        ((kt[Pt++] = xn),
        (kt[Pt++] = wn),
        (kt[Pt++] = Yi),
        (xn = t.id),
        (wn = t.overflow),
        (Yi = e)),
      (e = Jh(e, i.children)),
      (e.flags |= 4096),
      e);
}
function ig(t, e, n) {
  t.lanes |= e;
  var i = t.alternate;
  i !== null && (i.lanes |= e), Fc(t.return, e, n);
}
function Au(t, e, n, i, r) {
  var s = t.memoizedState;
  s === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: r,
      })
    : ((s.isBackwards = e),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = i),
      (s.tail = n),
      (s.tailMode = r));
}
function o0(t, e, n) {
  var i = e.pendingProps,
    r = i.revealOrder,
    s = i.tail;
  if ((He(t, e, i.children, n), (i = me.current), i & 2))
    (i = (i & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && ig(t, n, e);
        else if (t.tag === 19) ig(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    i &= 1;
  }
  if ((ue(me, i), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (r) {
      case "forwards":
        for (n = e.child, r = null; n !== null; )
          (t = n.alternate),
            t !== null && Hl(t) === null && (r = n),
            (n = n.sibling);
        (n = r),
          n === null
            ? ((r = e.child), (e.child = null))
            : ((r = n.sibling), (n.sibling = null)),
          Au(e, !1, r, n, s);
        break;
      case "backwards":
        for (n = null, r = e.child, e.child = null; r !== null; ) {
          if (((t = r.alternate), t !== null && Hl(t) === null)) {
            e.child = r;
            break;
          }
          (t = r.sibling), (r.sibling = n), (n = r), (r = t);
        }
        Au(e, !0, n, null, s);
        break;
      case "together":
        Au(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function Pl(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function Pn(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (Ki |= e.lanes),
    !(n & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(L(153));
  if (e.child !== null) {
    for (
      t = e.child, n = ui(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (n = n.sibling = ui(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function J1(t, e, n) {
  switch (e.tag) {
    case 3:
      r0(e), Ur();
      break;
    case 5:
      Ap(e);
      break;
    case 1:
      dt(e.type) && Ul(e);
      break;
    case 4:
      Yh(e, e.stateNode.containerInfo);
      break;
    case 10:
      var i = e.type._context,
        r = e.memoizedProps.value;
      ue(Kl, i._currentValue), (i._currentValue = r);
      break;
    case 13:
      if (((i = e.memoizedState), i !== null))
        return i.dehydrated !== null
          ? (ue(me, me.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
            ? s0(t, e, n)
            : (ue(me, me.current & 1),
              (t = Pn(t, e, n)),
              t !== null ? t.sibling : null);
      ue(me, me.current & 1);
      break;
    case 19:
      if (((i = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (i) return o0(t, e, n);
        e.flags |= 128;
      }
      if (
        ((r = e.memoizedState),
        r !== null &&
          ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
        ue(me, me.current),
        i)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), n0(t, e, n);
  }
  return Pn(t, e, n);
}
var l0, Xc, a0, u0;
l0 = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Xc = function () {};
a0 = function (t, e, n, i) {
  var r = t.memoizedProps;
  if (r !== i) {
    (t = e.stateNode), Ni(sn.current);
    var s = null;
    switch (n) {
      case "input":
        (r = cc(t, r)), (i = cc(t, i)), (s = []);
        break;
      case "select":
        (r = _e({}, r, { value: void 0 })),
          (i = _e({}, i, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (r = fc(t, r)), (i = fc(t, i)), (s = []);
        break;
      default:
        typeof r.onClick != "function" &&
          typeof i.onClick == "function" &&
          (t.onclick = Xl);
    }
    mc(n, i);
    var o;
    n = null;
    for (u in r)
      if (!i.hasOwnProperty(u) && r.hasOwnProperty(u) && r[u] != null)
        if (u === "style") {
          var l = r[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Vs.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in i) {
      var a = i[u];
      if (
        ((l = r != null ? r[u] : void 0),
        i.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                l[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(u, a))
            : u === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (s = s || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Vs.hasOwnProperty(u)
                  ? (a != null && u === "onScroll" && he("scroll", t),
                    s || l === a || (s = []))
                  : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
u0 = function (t, e, n, i) {
  n !== i && (e.flags |= 4);
};
function Es(t, e) {
  if (!ge)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; )
          e.alternate !== null && (n = e), (e = e.sibling);
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = t.tail;
        for (var i = null; n !== null; )
          n.alternate !== null && (i = n), (n = n.sibling);
        i === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (i.sibling = null);
    }
}
function be(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    i = 0;
  if (e)
    for (var r = t.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags & 14680064),
        (i |= r.flags & 14680064),
        (r.return = t),
        (r = r.sibling);
  else
    for (r = t.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags),
        (i |= r.flags),
        (r.return = t),
        (r = r.sibling);
  return (t.subtreeFlags |= i), (t.childLanes = n), e;
}
function ev(t, e, n) {
  var i = e.pendingProps;
  switch ((jh(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return be(e), null;
    case 1:
      return dt(e.type) && Bl(), be(e), null;
    case 3:
      return (
        (i = e.stateNode),
        Vr(),
        de(ht),
        de(Ke),
        Kh(),
        i.pendingContext &&
          ((i.context = i.pendingContext), (i.pendingContext = null)),
        (t === null || t.child === null) &&
          (il(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), Bt !== null && (Hc(Bt), (Bt = null)))),
        Xc(t, e),
        be(e),
        null
      );
    case 5:
      Vh(e);
      var r = Ni(ro.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        a0(t, e, n, i, r),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!i) {
          if (e.stateNode === null) throw Error(L(166));
          return be(e), null;
        }
        if (((t = Ni(sn.current)), il(e))) {
          (i = e.stateNode), (n = e.type);
          var s = e.memoizedProps;
          switch (((i[Qt] = e), (i[no] = s), (t = (e.mode & 1) !== 0), n)) {
            case "dialog":
              he("cancel", i), he("close", i);
              break;
            case "iframe":
            case "object":
            case "embed":
              he("load", i);
              break;
            case "video":
            case "audio":
              for (r = 0; r < Ms.length; r++) he(Ms[r], i);
              break;
            case "source":
              he("error", i);
              break;
            case "img":
            case "image":
            case "link":
              he("error", i), he("load", i);
              break;
            case "details":
              he("toggle", i);
              break;
            case "input":
              df(i, s), he("invalid", i);
              break;
            case "select":
              (i._wrapperState = { wasMultiple: !!s.multiple }),
                he("invalid", i);
              break;
            case "textarea":
              gf(i, s), he("invalid", i);
          }
          mc(n, s), (r = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "children"
                ? typeof l == "string"
                  ? i.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      nl(i.textContent, l, t),
                    (r = ["children", l]))
                  : typeof l == "number" &&
                    i.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      nl(i.textContent, l, t),
                    (r = ["children", "" + l]))
                : Vs.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  he("scroll", i);
            }
          switch (n) {
            case "input":
              Zo(i), ff(i, s, !0);
              break;
            case "textarea":
              Zo(i), mf(i);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (i.onclick = Xl);
          }
          (i = r), (e.updateQueue = i), i !== null && (e.flags |= 4);
        } else {
          (o = r.nodeType === 9 ? r : r.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = Dm(n)),
            t === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((t = o.createElement("div")),
                  (t.innerHTML = "<script></script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof i.is == "string"
                  ? (t = o.createElement(n, { is: i.is }))
                  : ((t = o.createElement(n)),
                    n === "select" &&
                      ((o = t),
                      i.multiple
                        ? (o.multiple = !0)
                        : i.size && (o.size = i.size)))
              : (t = o.createElementNS(t, n)),
            (t[Qt] = e),
            (t[no] = i),
            l0(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((o = pc(n, i)), n)) {
              case "dialog":
                he("cancel", t), he("close", t), (r = i);
                break;
              case "iframe":
              case "object":
              case "embed":
                he("load", t), (r = i);
                break;
              case "video":
              case "audio":
                for (r = 0; r < Ms.length; r++) he(Ms[r], t);
                r = i;
                break;
              case "source":
                he("error", t), (r = i);
                break;
              case "img":
              case "image":
              case "link":
                he("error", t), he("load", t), (r = i);
                break;
              case "details":
                he("toggle", t), (r = i);
                break;
              case "input":
                df(t, i), (r = cc(t, i)), he("invalid", t);
                break;
              case "option":
                r = i;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!i.multiple }),
                  (r = _e({}, i, { value: void 0 })),
                  he("invalid", t);
                break;
              case "textarea":
                gf(t, i), (r = fc(t, i)), he("invalid", t);
                break;
              default:
                r = i;
            }
            mc(n, r), (l = r);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? Gm(t, a)
                  : s === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && zm(t, a))
                    : s === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && Ks(t, a)
                        : typeof a == "number" && Ks(t, "" + a)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (Vs.hasOwnProperty(s)
                          ? a != null && s === "onScroll" && he("scroll", t)
                          : a != null && Ch(t, s, a, o));
              }
            switch (n) {
              case "input":
                Zo(t), ff(t, i, !1);
                break;
              case "textarea":
                Zo(t), mf(t);
                break;
              case "option":
                i.value != null && t.setAttribute("value", "" + hi(i.value));
                break;
              case "select":
                (t.multiple = !!i.multiple),
                  (s = i.value),
                  s != null
                    ? Ar(t, !!i.multiple, s, !1)
                    : i.defaultValue != null &&
                      Ar(t, !!i.multiple, i.defaultValue, !0);
                break;
              default:
                typeof r.onClick == "function" && (t.onclick = Xl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break e;
              case "img":
                i = !0;
                break e;
              default:
                i = !1;
            }
          }
          i && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return be(e), null;
    case 6:
      if (t && e.stateNode != null) u0(t, e, t.memoizedProps, i);
      else {
        if (typeof i != "string" && e.stateNode === null) throw Error(L(166));
        if (((n = Ni(ro.current)), Ni(sn.current), il(e))) {
          if (
            ((i = e.stateNode),
            (n = e.memoizedProps),
            (i[Qt] = e),
            (s = i.nodeValue !== n) && ((t = Et), t !== null))
          )
            switch (t.tag) {
              case 3:
                nl(i.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  nl(i.nodeValue, n, (t.mode & 1) !== 0);
            }
          s && (e.flags |= 4);
        } else
          (i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
            (i[Qt] = e),
            (e.stateNode = i);
      }
      return be(e), null;
    case 13:
      if (
        (de(me),
        (i = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (ge && yt !== null && e.mode & 1 && !(e.flags & 128))
          Rp(), Ur(), (e.flags |= 98560), (s = !1);
        else if (((s = il(e)), i !== null && i.dehydrated !== null)) {
          if (t === null) {
            if (!s) throw Error(L(318));
            if (
              ((s = e.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(L(317));
            s[Qt] = e;
          } else
            Ur(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          be(e), (s = !1);
        } else Bt !== null && (Hc(Bt), (Bt = null)), (s = !0);
        if (!s) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((i = i !== null),
          i !== (t !== null && t.memoizedState !== null) &&
            i &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || me.current & 1 ? ke === 0 && (ke = 3) : sd())),
          e.updateQueue !== null && (e.flags |= 4),
          be(e),
          null);
    case 4:
      return (
        Vr(), Xc(t, e), t === null && eo(e.stateNode.containerInfo), be(e), null
      );
    case 10:
      return Xh(e.type._context), be(e), null;
    case 17:
      return dt(e.type) && Bl(), be(e), null;
    case 19:
      if ((de(me), (s = e.memoizedState), s === null)) return be(e), null;
      if (((i = (e.flags & 128) !== 0), (o = s.rendering), o === null))
        if (i) Es(s, !1);
        else {
          if (ke !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((o = Hl(t)), o !== null)) {
                for (
                  e.flags |= 128,
                    Es(s, !1),
                    i = o.updateQueue,
                    i !== null && ((e.updateQueue = i), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    i = n,
                    n = e.child;
                  n !== null;

                )
                  (s = n),
                    (t = i),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = t),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (t = o.dependencies),
                        (s.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (n = n.sibling);
                return ue(me, (me.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          s.tail !== null &&
            Ce() > Zr &&
            ((e.flags |= 128), (i = !0), Es(s, !1), (e.lanes = 4194304));
        }
      else {
        if (!i)
          if (((t = Hl(o)), t !== null)) {
            if (
              ((e.flags |= 128),
              (i = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              Es(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !ge)
            )
              return be(e), null;
          } else
            2 * Ce() - s.renderingStartTime > Zr &&
              n !== 1073741824 &&
              ((e.flags |= 128), (i = !0), Es(s, !1), (e.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (e.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((e = s.tail),
          (s.rendering = e),
          (s.tail = e.sibling),
          (s.renderingStartTime = Ce()),
          (e.sibling = null),
          (n = me.current),
          ue(me, i ? (n & 1) | 2 : n & 1),
          e)
        : (be(e), null);
    case 22:
    case 23:
      return (
        rd(),
        (i = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== i && (e.flags |= 8192),
        i && e.mode & 1
          ? pt & 1073741824 && (be(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : be(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, e.tag));
}
function tv(t, e) {
  switch ((jh(e), e.tag)) {
    case 1:
      return (
        dt(e.type) && Bl(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        Vr(),
        de(ht),
        de(Ke),
        Kh(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return Vh(e), null;
    case 13:
      if (
        (de(me), (t = e.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(L(340));
        Ur();
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return de(me), null;
    case 4:
      return Vr(), null;
    case 10:
      return Xh(e.type._context), null;
    case 22:
    case 23:
      return rd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ol = !1,
  Ue = !1,
  nv = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function Pr(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (i) {
        Ee(t, e, i);
      }
    else n.current = null;
}
function Bc(t, e, n) {
  try {
    n();
  } catch (i) {
    Ee(t, e, i);
  }
}
var rg = !1;
function iv(t, e) {
  if (((Rc = Gl), (t = fp()), Dh(t))) {
    if ("selectionStart" in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
        var i = n.getSelection && n.getSelection();
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode;
          var r = i.anchorOffset,
            s = i.focusNode;
          i = i.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            h = t,
            d = null;
          t: for (;;) {
            for (
              var f;
              h !== n || (r !== 0 && h.nodeType !== 3) || (l = o + r),
                h !== s || (i !== 0 && h.nodeType !== 3) || (a = o + i),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (f = h.firstChild) !== null;

            )
              (d = h), (h = f);
            for (;;) {
              if (h === t) break t;
              if (
                (d === n && ++u === r && (l = o),
                d === s && ++c === i && (a = o),
                (f = h.nextSibling) !== null)
              )
                break;
              (h = d), (d = h.parentNode);
            }
            h = f;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ic = { focusedElem: t, selectionRange: n }, Gl = !1, N = e; N !== null; )
    if (((e = N), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (N = t);
    else
      for (; N !== null; ) {
        e = N;
        try {
          var p = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (p !== null) {
                  var _ = p.memoizedProps,
                    v = p.memoizedState,
                    g = e.stateNode,
                    m = g.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? _ : Wt(e.type, _),
                      v,
                    );
                  g.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var y = e.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (E) {
          Ee(e, e.return, E);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (N = t);
          break;
        }
        N = e.return;
      }
  return (p = rg), (rg = !1), p;
}
function Ws(t, e, n) {
  var i = e.updateQueue;
  if (((i = i !== null ? i.lastEffect : null), i !== null)) {
    var r = (i = i.next);
    do {
      if ((r.tag & t) === t) {
        var s = r.destroy;
        (r.destroy = void 0), s !== void 0 && Bc(e, n, s);
      }
      r = r.next;
    } while (r !== i);
  }
}
function Ma(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var i = n.create;
        n.destroy = i();
      }
      n = n.next;
    } while (n !== e);
  }
}
function Uc(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : (e.current = t);
  }
}
function c0(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), c0(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[Qt], delete e[no], delete e[Lc], delete e[G1], delete e[b1])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function h0(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function sg(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || h0(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function Yc(t, e, n) {
  var i = t.tag;
  if (i === 5 || i === 6)
    (t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = Xl));
  else if (i !== 4 && ((t = t.child), t !== null))
    for (Yc(t, e, n), t = t.sibling; t !== null; ) Yc(t, e, n), (t = t.sibling);
}
function Vc(t, e, n) {
  var i = t.tag;
  if (i === 5 || i === 6)
    (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (i !== 4 && ((t = t.child), t !== null))
    for (Vc(t, e, n), t = t.sibling; t !== null; ) Vc(t, e, n), (t = t.sibling);
}
var Fe = null,
  Xt = !1;
function Gn(t, e, n) {
  for (n = n.child; n !== null; ) d0(t, e, n), (n = n.sibling);
}
function d0(t, e, n) {
  if (rn && typeof rn.onCommitFiberUnmount == "function")
    try {
      rn.onCommitFiberUnmount(Ca, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ue || Pr(n, e);
    case 6:
      var i = Fe,
        r = Xt;
      (Fe = null),
        Gn(t, e, n),
        (Fe = i),
        (Xt = r),
        Fe !== null &&
          (Xt
            ? ((t = Fe),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : Fe.removeChild(n.stateNode));
      break;
    case 18:
      Fe !== null &&
        (Xt
          ? ((t = Fe),
            (n = n.stateNode),
            t.nodeType === 8
              ? Ru(t.parentNode, n)
              : t.nodeType === 1 && Ru(t, n),
            qs(t))
          : Ru(Fe, n.stateNode));
      break;
    case 4:
      (i = Fe),
        (r = Xt),
        (Fe = n.stateNode.containerInfo),
        (Xt = !0),
        Gn(t, e, n),
        (Fe = i),
        (Xt = r);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ue &&
        ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
      ) {
        r = i = i.next;
        do {
          var s = r,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Bc(n, e, o),
            (r = r.next);
        } while (r !== i);
      }
      Gn(t, e, n);
      break;
    case 1:
      if (
        !Ue &&
        (Pr(n, e),
        (i = n.stateNode),
        typeof i.componentWillUnmount == "function")
      )
        try {
          (i.props = n.memoizedProps),
            (i.state = n.memoizedState),
            i.componentWillUnmount();
        } catch (l) {
          Ee(n, e, l);
        }
      Gn(t, e, n);
      break;
    case 21:
      Gn(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ue = (i = Ue) || n.memoizedState !== null), Gn(t, e, n), (Ue = i))
        : Gn(t, e, n);
      break;
    default:
      Gn(t, e, n);
  }
}
function og(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new nv()),
      e.forEach(function (i) {
        var r = dv.bind(null, t, i);
        n.has(i) || (n.add(i), i.then(r, r));
      });
  }
}
function jt(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var r = n[i];
      try {
        var s = t,
          o = e,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Fe = l.stateNode), (Xt = !1);
              break e;
            case 3:
              (Fe = l.stateNode.containerInfo), (Xt = !0);
              break e;
            case 4:
              (Fe = l.stateNode.containerInfo), (Xt = !0);
              break e;
          }
          l = l.return;
        }
        if (Fe === null) throw Error(L(160));
        d0(s, o, r), (Fe = null), (Xt = !1);
        var a = r.alternate;
        a !== null && (a.return = null), (r.return = null);
      } catch (u) {
        Ee(r, e, u);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) f0(e, t), (e = e.sibling);
}
function f0(t, e) {
  var n = t.alternate,
    i = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((jt(e, t), Ht(t), i & 4)) {
        try {
          Ws(3, t, t.return), Ma(3, t);
        } catch (_) {
          Ee(t, t.return, _);
        }
        try {
          Ws(5, t, t.return);
        } catch (_) {
          Ee(t, t.return, _);
        }
      }
      break;
    case 1:
      jt(e, t), Ht(t), i & 512 && n !== null && Pr(n, n.return);
      break;
    case 5:
      if (
        (jt(e, t),
        Ht(t),
        i & 512 && n !== null && Pr(n, n.return),
        t.flags & 32)
      ) {
        var r = t.stateNode;
        try {
          Ks(r, "");
        } catch (_) {
          Ee(t, t.return, _);
        }
      }
      if (i & 4 && ((r = t.stateNode), r != null)) {
        var s = t.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = t.type,
          a = t.updateQueue;
        if (((t.updateQueue = null), a !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && Fm(r, s),
              pc(l, o);
            var u = pc(l, s);
            for (o = 0; o < a.length; o += 2) {
              var c = a[o],
                h = a[o + 1];
              c === "style"
                ? Gm(r, h)
                : c === "dangerouslySetInnerHTML"
                  ? zm(r, h)
                  : c === "children"
                    ? Ks(r, h)
                    : Ch(r, c, h, u);
            }
            switch (l) {
              case "input":
                hc(r, s);
                break;
              case "textarea":
                Nm(r, s);
                break;
              case "select":
                var d = r._wrapperState.wasMultiple;
                r._wrapperState.wasMultiple = !!s.multiple;
                var f = s.value;
                f != null
                  ? Ar(r, !!s.multiple, f, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Ar(r, !!s.multiple, s.defaultValue, !0)
                      : Ar(r, !!s.multiple, s.multiple ? [] : "", !1));
            }
            r[no] = s;
          } catch (_) {
            Ee(t, t.return, _);
          }
      }
      break;
    case 6:
      if ((jt(e, t), Ht(t), i & 4)) {
        if (t.stateNode === null) throw Error(L(162));
        (r = t.stateNode), (s = t.memoizedProps);
        try {
          r.nodeValue = s;
        } catch (_) {
          Ee(t, t.return, _);
        }
      }
      break;
    case 3:
      if (
        (jt(e, t), Ht(t), i & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          qs(e.containerInfo);
        } catch (_) {
          Ee(t, t.return, _);
        }
      break;
    case 4:
      jt(e, t), Ht(t);
      break;
    case 13:
      jt(e, t),
        Ht(t),
        (r = t.child),
        r.flags & 8192 &&
          ((s = r.memoizedState !== null),
          (r.stateNode.isHidden = s),
          !s ||
            (r.alternate !== null && r.alternate.memoizedState !== null) ||
            (nd = Ce())),
        i & 4 && og(t);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((Ue = (u = Ue) || c), jt(e, t), (Ue = u)) : jt(e, t),
        Ht(t),
        i & 8192)
      ) {
        if (
          ((u = t.memoizedState !== null),
          (t.stateNode.isHidden = u) && !c && t.mode & 1)
        )
          for (N = t, c = t.child; c !== null; ) {
            for (h = N = c; N !== null; ) {
              switch (((d = N), (f = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ws(4, d, d.return);
                  break;
                case 1:
                  Pr(d, d.return);
                  var p = d.stateNode;
                  if (typeof p.componentWillUnmount == "function") {
                    (i = d), (n = d.return);
                    try {
                      (e = i),
                        (p.props = e.memoizedProps),
                        (p.state = e.memoizedState),
                        p.componentWillUnmount();
                    } catch (_) {
                      Ee(i, n, _);
                    }
                  }
                  break;
                case 5:
                  Pr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    ag(h);
                    continue;
                  }
              }
              f !== null ? ((f.return = d), (N = f)) : ag(h);
            }
            c = c.sibling;
          }
        e: for (c = null, h = t; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                (r = h.stateNode),
                  u
                    ? ((s = r.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = h.stateNode),
                      (a = h.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = jm("display", o)));
              } catch (_) {
                Ee(t, t.return, _);
              }
            }
          } else if (h.tag === 6) {
            if (c === null)
              try {
                h.stateNode.nodeValue = u ? "" : h.memoizedProps;
              } catch (_) {
                Ee(t, t.return, _);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === t) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === t) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === t) break e;
            c === h && (c = null), (h = h.return);
          }
          c === h && (c = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      jt(e, t), Ht(t), i & 4 && og(t);
      break;
    case 21:
      break;
    default:
      jt(e, t), Ht(t);
  }
}
function Ht(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (h0(n)) {
            var i = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (i.tag) {
        case 5:
          var r = i.stateNode;
          i.flags & 32 && (Ks(r, ""), (i.flags &= -33));
          var s = sg(t);
          Vc(t, s, r);
          break;
        case 3:
        case 4:
          var o = i.stateNode.containerInfo,
            l = sg(t);
          Yc(t, l, o);
          break;
        default:
          throw Error(L(161));
      }
    } catch (a) {
      Ee(t, t.return, a);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function rv(t, e, n) {
  (N = t), g0(t);
}
function g0(t, e, n) {
  for (var i = (t.mode & 1) !== 0; N !== null; ) {
    var r = N,
      s = r.child;
    if (r.tag === 22 && i) {
      var o = r.memoizedState !== null || ol;
      if (!o) {
        var l = r.alternate,
          a = (l !== null && l.memoizedState !== null) || Ue;
        l = ol;
        var u = Ue;
        if (((ol = o), (Ue = a) && !u))
          for (N = r; N !== null; )
            (o = N),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? ug(r)
                : a !== null
                  ? ((a.return = o), (N = a))
                  : ug(r);
        for (; s !== null; ) (N = s), g0(s), (s = s.sibling);
        (N = r), (ol = l), (Ue = u);
      }
      lg(t);
    } else
      r.subtreeFlags & 8772 && s !== null ? ((s.return = r), (N = s)) : lg(t);
  }
}
function lg(t) {
  for (; N !== null; ) {
    var e = N;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Ue || Ma(5, e);
              break;
            case 1:
              var i = e.stateNode;
              if (e.flags & 4 && !Ue)
                if (n === null) i.componentDidMount();
                else {
                  var r =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : Wt(e.type, n.memoizedProps);
                  i.componentDidUpdate(
                    r,
                    n.memoizedState,
                    i.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = e.updateQueue;
              s !== null && Uf(e, s, i);
              break;
            case 3:
              var o = e.updateQueue;
              if (o !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                Uf(e, o, n);
              }
              break;
            case 5:
              var l = e.stateNode;
              if (n === null && e.flags & 4) {
                n = l;
                var a = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var u = e.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var h = c.dehydrated;
                    h !== null && qs(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(L(163));
          }
        Ue || (e.flags & 512 && Uc(e));
      } catch (d) {
        Ee(e, e.return, d);
      }
    }
    if (e === t) {
      N = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      (n.return = e.return), (N = n);
      break;
    }
    N = e.return;
  }
}
function ag(t) {
  for (; N !== null; ) {
    var e = N;
    if (e === t) {
      N = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      (n.return = e.return), (N = n);
      break;
    }
    N = e.return;
  }
}
function ug(t) {
  for (; N !== null; ) {
    var e = N;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            Ma(4, e);
          } catch (a) {
            Ee(e, n, a);
          }
          break;
        case 1:
          var i = e.stateNode;
          if (typeof i.componentDidMount == "function") {
            var r = e.return;
            try {
              i.componentDidMount();
            } catch (a) {
              Ee(e, r, a);
            }
          }
          var s = e.return;
          try {
            Uc(e);
          } catch (a) {
            Ee(e, s, a);
          }
          break;
        case 5:
          var o = e.return;
          try {
            Uc(e);
          } catch (a) {
            Ee(e, o, a);
          }
      }
    } catch (a) {
      Ee(e, e.return, a);
    }
    if (e === t) {
      N = null;
      break;
    }
    var l = e.sibling;
    if (l !== null) {
      (l.return = e.return), (N = l);
      break;
    }
    N = e.return;
  }
}
var sv = Math.ceil,
  Jl = Fn.ReactCurrentDispatcher,
  ed = Fn.ReactCurrentOwner,
  Mt = Fn.ReactCurrentBatchConfig,
  J = 0,
  Oe = null,
  Te = null,
  De = 0,
  pt = 0,
  Lr = vi(0),
  ke = 0,
  ao = null,
  Ki = 0,
  Oa = 0,
  td = 0,
  Xs = null,
  st = null,
  nd = 0,
  Zr = 1 / 0,
  yn = null,
  ea = !1,
  Kc = null,
  li = null,
  ll = !1,
  Qn = null,
  ta = 0,
  Bs = 0,
  Zc = null,
  Ll = -1,
  Ml = 0;
function qe() {
  return J & 6 ? Ce() : Ll !== -1 ? Ll : (Ll = Ce());
}
function ai(t) {
  return t.mode & 1
    ? J & 2 && De !== 0
      ? De & -De
      : X1.transition !== null
        ? (Ml === 0 && (Ml = qm()), Ml)
        : ((t = oe),
          t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : rp(t.type))),
          t)
    : 1;
}
function Vt(t, e, n, i) {
  if (50 < Bs) throw ((Bs = 0), (Zc = null), Error(L(185)));
  So(t, n, i),
    (!(J & 2) || t !== Oe) &&
      (t === Oe && (!(J & 2) && (Oa |= n), ke === 4 && Hn(t, De)),
      ft(t, i),
      n === 1 && J === 0 && !(e.mode & 1) && ((Zr = Ce() + 500), ka && Ei()));
}
function ft(t, e) {
  var n = t.callbackNode;
  Xy(t, e);
  var i = jl(t, t === Oe ? De : 0);
  if (i === 0)
    n !== null && yf(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = i & -i), t.callbackPriority !== e)) {
    if ((n != null && yf(n), e === 1))
      t.tag === 0 ? W1(cg.bind(null, t)) : Cp(cg.bind(null, t)),
        z1(function () {
          !(J & 6) && Ei();
        }),
        (n = null);
    else {
      switch (Qm(i)) {
        case 1:
          n = kh;
          break;
        case 4:
          n = $m;
          break;
        case 16:
          n = zl;
          break;
        case 536870912:
          n = Hm;
          break;
        default:
          n = zl;
      }
      n = w0(n, m0.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function m0(t, e) {
  if (((Ll = -1), (Ml = 0), J & 6)) throw Error(L(327));
  var n = t.callbackNode;
  if (jr() && t.callbackNode !== n) return null;
  var i = jl(t, t === Oe ? De : 0);
  if (i === 0) return null;
  if (i & 30 || i & t.expiredLanes || e) e = na(t, i);
  else {
    e = i;
    var r = J;
    J |= 2;
    var s = _0();
    (Oe !== t || De !== e) && ((yn = null), (Zr = Ce() + 500), Wi(t, e));
    do
      try {
        av();
        break;
      } catch (l) {
        p0(t, l);
      }
    while (!0);
    Wh(),
      (Jl.current = s),
      (J = r),
      Te !== null ? (e = 0) : ((Oe = null), (De = 0), (e = ke));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((r = xc(t)), r !== 0 && ((i = r), (e = $c(t, r)))), e === 1)
    )
      throw ((n = ao), Wi(t, 0), Hn(t, i), ft(t, Ce()), n);
    if (e === 6) Hn(t, i);
    else {
      if (
        ((r = t.current.alternate),
        !(i & 30) &&
          !ov(r) &&
          ((e = na(t, i)),
          e === 2 && ((s = xc(t)), s !== 0 && ((i = s), (e = $c(t, s)))),
          e === 1))
      )
        throw ((n = ao), Wi(t, 0), Hn(t, i), ft(t, Ce()), n);
      switch (((t.finishedWork = r), (t.finishedLanes = i), e)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          Li(t, st, yn);
          break;
        case 3:
          if (
            (Hn(t, i), (i & 130023424) === i && ((e = nd + 500 - Ce()), 10 < e))
          ) {
            if (jl(t, 0) !== 0) break;
            if (((r = t.suspendedLanes), (r & i) !== i)) {
              qe(), (t.pingedLanes |= t.suspendedLanes & r);
              break;
            }
            t.timeoutHandle = Pc(Li.bind(null, t, st, yn), e);
            break;
          }
          Li(t, st, yn);
          break;
        case 4:
          if ((Hn(t, i), (i & 4194240) === i)) break;
          for (e = t.eventTimes, r = -1; 0 < i; ) {
            var o = 31 - Yt(i);
            (s = 1 << o), (o = e[o]), o > r && (r = o), (i &= ~s);
          }
          if (
            ((i = r),
            (i = Ce() - i),
            (i =
              (120 > i
                ? 120
                : 480 > i
                  ? 480
                  : 1080 > i
                    ? 1080
                    : 1920 > i
                      ? 1920
                      : 3e3 > i
                        ? 3e3
                        : 4320 > i
                          ? 4320
                          : 1960 * sv(i / 1960)) - i),
            10 < i)
          ) {
            t.timeoutHandle = Pc(Li.bind(null, t, st, yn), i);
            break;
          }
          Li(t, st, yn);
          break;
        case 5:
          Li(t, st, yn);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return ft(t, Ce()), t.callbackNode === n ? m0.bind(null, t) : null;
}
function $c(t, e) {
  var n = Xs;
  return (
    t.current.memoizedState.isDehydrated && (Wi(t, e).flags |= 256),
    (t = na(t, e)),
    t !== 2 && ((e = st), (st = n), e !== null && Hc(e)),
    t
  );
}
function Hc(t) {
  st === null ? (st = t) : st.push.apply(st, t);
}
function ov(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var i = 0; i < n.length; i++) {
          var r = n[i],
            s = r.getSnapshot;
          r = r.value;
          try {
            if (!Zt(s(), r)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      (n.return = e), (e = n);
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function Hn(t, e) {
  for (
    e &= ~td,
      e &= ~Oa,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - Yt(e),
      i = 1 << n;
    (t[n] = -1), (e &= ~i);
  }
}
function cg(t) {
  if (J & 6) throw Error(L(327));
  jr();
  var e = jl(t, 0);
  if (!(e & 1)) return ft(t, Ce()), null;
  var n = na(t, e);
  if (t.tag !== 0 && n === 2) {
    var i = xc(t);
    i !== 0 && ((e = i), (n = $c(t, i)));
  }
  if (n === 1) throw ((n = ao), Wi(t, 0), Hn(t, e), ft(t, Ce()), n);
  if (n === 6) throw Error(L(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    Li(t, st, yn),
    ft(t, Ce()),
    null
  );
}
function id(t, e) {
  var n = J;
  J |= 1;
  try {
    return t(e);
  } finally {
    (J = n), J === 0 && ((Zr = Ce() + 500), ka && Ei());
  }
}
function Zi(t) {
  Qn !== null && Qn.tag === 0 && !(J & 6) && jr();
  var e = J;
  J |= 1;
  var n = Mt.transition,
    i = oe;
  try {
    if (((Mt.transition = null), (oe = 1), t)) return t();
  } finally {
    (oe = i), (Mt.transition = n), (J = e), !(J & 6) && Ei();
  }
}
function rd() {
  (pt = Lr.current), de(Lr);
}
function Wi(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), D1(n)), Te !== null))
    for (n = Te.return; n !== null; ) {
      var i = n;
      switch ((jh(i), i.tag)) {
        case 1:
          (i = i.type.childContextTypes), i != null && Bl();
          break;
        case 3:
          Vr(), de(ht), de(Ke), Kh();
          break;
        case 5:
          Vh(i);
          break;
        case 4:
          Vr();
          break;
        case 13:
          de(me);
          break;
        case 19:
          de(me);
          break;
        case 10:
          Xh(i.type._context);
          break;
        case 22:
        case 23:
          rd();
      }
      n = n.return;
    }
  if (
    ((Oe = t),
    (Te = t = ui(t.current, null)),
    (De = pt = e),
    (ke = 0),
    (ao = null),
    (td = Oa = Ki = 0),
    (st = Xs = null),
    Fi !== null)
  ) {
    for (e = 0; e < Fi.length; e++)
      if (((n = Fi[e]), (i = n.interleaved), i !== null)) {
        n.interleaved = null;
        var r = i.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = r), (i.next = o);
        }
        n.pending = i;
      }
    Fi = null;
  }
  return t;
}
function p0(t, e) {
  do {
    var n = Te;
    try {
      if ((Wh(), (Il.current = Ql), ql)) {
        for (var i = pe.memoizedState; i !== null; ) {
          var r = i.queue;
          r !== null && (r.pending = null), (i = i.next);
        }
        ql = !1;
      }
      if (
        ((Vi = 0),
        (Le = Ie = pe = null),
        (bs = !1),
        (so = 0),
        (ed.current = null),
        n === null || n.return === null)
      ) {
        (ke = 1), (ao = e), (Te = null);
        break;
      }
      e: {
        var s = t,
          o = n.return,
          l = n,
          a = e;
        if (
          ((e = De),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            h = c.tag;
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var f = qf(o);
          if (f !== null) {
            (f.flags &= -257),
              Qf(f, o, l, s, e),
              f.mode & 1 && Hf(s, u, e),
              (e = f),
              (a = u);
            var p = e.updateQueue;
            if (p === null) {
              var _ = new Set();
              _.add(a), (e.updateQueue = _);
            } else p.add(a);
            break e;
          } else {
            if (!(e & 1)) {
              Hf(s, u, e), sd();
              break e;
            }
            a = Error(L(426));
          }
        } else if (ge && l.mode & 1) {
          var v = qf(o);
          if (v !== null) {
            !(v.flags & 65536) && (v.flags |= 256),
              Qf(v, o, l, s, e),
              Gh(Kr(a, l));
            break e;
          }
        }
        (s = a = Kr(a, l)),
          ke !== 4 && (ke = 2),
          Xs === null ? (Xs = [s]) : Xs.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (e &= -e), (s.lanes |= e);
              var g = Jp(s, a, e);
              Bf(s, g);
              break e;
            case 1:
              l = a;
              var m = s.type,
                y = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (li === null || !li.has(y))))
              ) {
                (s.flags |= 65536), (e &= -e), (s.lanes |= e);
                var E = e0(s, l, e);
                Bf(s, E);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      v0(n);
    } catch (x) {
      (e = x), Te === n && n !== null && (Te = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function _0() {
  var t = Jl.current;
  return (Jl.current = Ql), t === null ? Ql : t;
}
function sd() {
  (ke === 0 || ke === 3 || ke === 2) && (ke = 4),
    Oe === null || (!(Ki & 268435455) && !(Oa & 268435455)) || Hn(Oe, De);
}
function na(t, e) {
  var n = J;
  J |= 2;
  var i = _0();
  (Oe !== t || De !== e) && ((yn = null), Wi(t, e));
  do
    try {
      lv();
      break;
    } catch (r) {
      p0(t, r);
    }
  while (!0);
  if ((Wh(), (J = n), (Jl.current = i), Te !== null)) throw Error(L(261));
  return (Oe = null), (De = 0), ke;
}
function lv() {
  for (; Te !== null; ) y0(Te);
}
function av() {
  for (; Te !== null && !Ay(); ) y0(Te);
}
function y0(t) {
  var e = x0(t.alternate, t, pt);
  (t.memoizedProps = t.pendingProps),
    e === null ? v0(t) : (Te = e),
    (ed.current = null);
}
function v0(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = tv(n, e)), n !== null)) {
        (n.flags &= 32767), (Te = n);
        return;
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (ke = 6), (Te = null);
        return;
      }
    } else if (((n = ev(n, e, pt)), n !== null)) {
      Te = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      Te = e;
      return;
    }
    Te = e = t;
  } while (e !== null);
  ke === 0 && (ke = 5);
}
function Li(t, e, n) {
  var i = oe,
    r = Mt.transition;
  try {
    (Mt.transition = null), (oe = 1), uv(t, e, n, i);
  } finally {
    (Mt.transition = r), (oe = i);
  }
  return null;
}
function uv(t, e, n, i) {
  do jr();
  while (Qn !== null);
  if (J & 6) throw Error(L(327));
  n = t.finishedWork;
  var r = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(L(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (By(t, s),
    t === Oe && ((Te = Oe = null), (De = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ll ||
      ((ll = !0),
      w0(zl, function () {
        return jr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Mt.transition), (Mt.transition = null);
    var o = oe;
    oe = 1;
    var l = J;
    (J |= 4),
      (ed.current = null),
      iv(t, n),
      f0(n, t),
      P1(Ic),
      (Gl = !!Rc),
      (Ic = Rc = null),
      (t.current = n),
      rv(n),
      Fy(),
      (J = l),
      (oe = o),
      (Mt.transition = s);
  } else t.current = n;
  if (
    (ll && ((ll = !1), (Qn = t), (ta = r)),
    (s = t.pendingLanes),
    s === 0 && (li = null),
    zy(n.stateNode),
    ft(t, Ce()),
    e !== null)
  )
    for (i = t.onRecoverableError, n = 0; n < e.length; n++)
      (r = e[n]), i(r.value, { componentStack: r.stack, digest: r.digest });
  if (ea) throw ((ea = !1), (t = Kc), (Kc = null), t);
  return (
    ta & 1 && t.tag !== 0 && jr(),
    (s = t.pendingLanes),
    s & 1 ? (t === Zc ? Bs++ : ((Bs = 0), (Zc = t))) : (Bs = 0),
    Ei(),
    null
  );
}
function jr() {
  if (Qn !== null) {
    var t = Qm(ta),
      e = Mt.transition,
      n = oe;
    try {
      if (((Mt.transition = null), (oe = 16 > t ? 16 : t), Qn === null))
        var i = !1;
      else {
        if (((t = Qn), (Qn = null), (ta = 0), J & 6)) throw Error(L(331));
        var r = J;
        for (J |= 4, N = t.current; N !== null; ) {
          var s = N,
            o = s.child;
          if (N.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (N = u; N !== null; ) {
                  var c = N;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ws(8, c, s);
                  }
                  var h = c.child;
                  if (h !== null) (h.return = c), (N = h);
                  else
                    for (; N !== null; ) {
                      c = N;
                      var d = c.sibling,
                        f = c.return;
                      if ((c0(c), c === u)) {
                        N = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = f), (N = d);
                        break;
                      }
                      N = f;
                    }
                }
              }
              var p = s.alternate;
              if (p !== null) {
                var _ = p.child;
                if (_ !== null) {
                  p.child = null;
                  do {
                    var v = _.sibling;
                    (_.sibling = null), (_ = v);
                  } while (_ !== null);
                }
              }
              N = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (N = o);
          else
            e: for (; N !== null; ) {
              if (((s = N), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ws(9, s, s.return);
                }
              var g = s.sibling;
              if (g !== null) {
                (g.return = s.return), (N = g);
                break e;
              }
              N = s.return;
            }
        }
        var m = t.current;
        for (N = m; N !== null; ) {
          o = N;
          var y = o.child;
          if (o.subtreeFlags & 2064 && y !== null) (y.return = o), (N = y);
          else
            e: for (o = m; N !== null; ) {
              if (((l = N), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ma(9, l);
                  }
                } catch (x) {
                  Ee(l, l.return, x);
                }
              if (l === o) {
                N = null;
                break e;
              }
              var E = l.sibling;
              if (E !== null) {
                (E.return = l.return), (N = E);
                break e;
              }
              N = l.return;
            }
        }
        if (
          ((J = r), Ei(), rn && typeof rn.onPostCommitFiberRoot == "function")
        )
          try {
            rn.onPostCommitFiberRoot(Ca, t);
          } catch {}
        i = !0;
      }
      return i;
    } finally {
      (oe = n), (Mt.transition = e);
    }
  }
  return !1;
}
function hg(t, e, n) {
  (e = Kr(n, e)),
    (e = Jp(t, e, 1)),
    (t = oi(t, e, 1)),
    (e = qe()),
    t !== null && (So(t, 1, e), ft(t, e));
}
function Ee(t, e, n) {
  if (t.tag === 3) hg(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        hg(e, t, n);
        break;
      } else if (e.tag === 1) {
        var i = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof i.componentDidCatch == "function" &&
            (li === null || !li.has(i)))
        ) {
          (t = Kr(n, t)),
            (t = e0(e, t, 1)),
            (e = oi(e, t, 1)),
            (t = qe()),
            e !== null && (So(e, 1, t), ft(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function cv(t, e, n) {
  var i = t.pingCache;
  i !== null && i.delete(e),
    (e = qe()),
    (t.pingedLanes |= t.suspendedLanes & n),
    Oe === t &&
      (De & n) === n &&
      (ke === 4 || (ke === 3 && (De & 130023424) === De && 500 > Ce() - nd)
        ? Wi(t, 0)
        : (td |= n)),
    ft(t, e);
}
function E0(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = qo), (qo <<= 1), !(qo & 130023424) && (qo = 4194304))
      : (e = 1));
  var n = qe();
  (t = kn(t, e)), t !== null && (So(t, e, n), ft(t, n));
}
function hv(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), E0(t, n);
}
function dv(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var i = t.stateNode,
        r = t.memoizedState;
      r !== null && (n = r.retryLane);
      break;
    case 19:
      i = t.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  i !== null && i.delete(e), E0(t, n);
}
var x0;
x0 = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || ht.current) ct = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (ct = !1), J1(t, e, n);
      ct = !!(t.flags & 131072);
    }
  else (ct = !1), ge && e.flags & 1048576 && Sp(e, Vl, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var i = e.type;
      Pl(t, e), (t = e.pendingProps);
      var r = Br(e, Ke.current);
      zr(e, n), (r = $h(null, e, i, t, r, n));
      var s = Hh();
      return (
        (e.flags |= 1),
        typeof r == "object" &&
        r !== null &&
        typeof r.render == "function" &&
        r.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            dt(i) ? ((s = !0), Ul(e)) : (s = !1),
            (e.memoizedState =
              r.state !== null && r.state !== void 0 ? r.state : null),
            Uh(e),
            (r.updater = Pa),
            (e.stateNode = r),
            (r._reactInternals = e),
            Dc(e, i, t, n),
            (e = Gc(null, e, i, !0, s, n)))
          : ((e.tag = 0), ge && s && zh(e), He(null, e, r, n), (e = e.child)),
        e
      );
    case 16:
      i = e.elementType;
      e: {
        switch (
          (Pl(t, e),
          (t = e.pendingProps),
          (r = i._init),
          (i = r(i._payload)),
          (e.type = i),
          (r = e.tag = gv(i)),
          (t = Wt(i, t)),
          r)
        ) {
          case 0:
            e = jc(null, e, i, t, n);
            break e;
          case 1:
            e = tg(null, e, i, t, n);
            break e;
          case 11:
            e = Jf(null, e, i, t, n);
            break e;
          case 14:
            e = eg(null, e, i, Wt(i.type, t), n);
            break e;
        }
        throw Error(L(306, i, ""));
      }
      return e;
    case 0:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : Wt(i, r)),
        jc(t, e, i, r, n)
      );
    case 1:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : Wt(i, r)),
        tg(t, e, i, r, n)
      );
    case 3:
      e: {
        if ((r0(e), t === null)) throw Error(L(387));
        (i = e.pendingProps),
          (s = e.memoizedState),
          (r = s.element),
          kp(t, e),
          $l(e, i, null, n);
        var o = e.memoizedState;
        if (((i = o.element), s.isDehydrated))
          if (
            ((s = {
              element: i,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (e.updateQueue.baseState = s),
            (e.memoizedState = s),
            e.flags & 256)
          ) {
            (r = Kr(Error(L(423)), e)), (e = ng(t, e, i, n, r));
            break e;
          } else if (i !== r) {
            (r = Kr(Error(L(424)), e)), (e = ng(t, e, i, n, r));
            break e;
          } else
            for (
              yt = si(e.stateNode.containerInfo.firstChild),
                Et = e,
                ge = !0,
                Bt = null,
                n = Op(e, null, i, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ur(), i === r)) {
            e = Pn(t, e, n);
            break e;
          }
          He(t, e, i, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        Ap(e),
        t === null && Ac(e),
        (i = e.type),
        (r = e.pendingProps),
        (s = t !== null ? t.memoizedProps : null),
        (o = r.children),
        kc(i, r) ? (o = null) : s !== null && kc(i, s) && (e.flags |= 32),
        i0(t, e),
        He(t, e, o, n),
        e.child
      );
    case 6:
      return t === null && Ac(e), null;
    case 13:
      return s0(t, e, n);
    case 4:
      return (
        Yh(e, e.stateNode.containerInfo),
        (i = e.pendingProps),
        t === null ? (e.child = Yr(e, null, i, n)) : He(t, e, i, n),
        e.child
      );
    case 11:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : Wt(i, r)),
        Jf(t, e, i, r, n)
      );
    case 7:
      return He(t, e, e.pendingProps, n), e.child;
    case 8:
      return He(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return He(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (
          ((i = e.type._context),
          (r = e.pendingProps),
          (s = e.memoizedProps),
          (o = r.value),
          ue(Kl, i._currentValue),
          (i._currentValue = o),
          s !== null)
        )
          if (Zt(s.value, o)) {
            if (s.children === r.children && !ht.current) {
              e = Pn(t, e, n);
              break e;
            }
          } else
            for (s = e.child, s !== null && (s.return = e); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === i) {
                    if (s.tag === 1) {
                      (a = Cn(-1, n & -n)), (a.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      Fc(s.return, n, e),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) o = s.type === e.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(L(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  Fc(o, n, e),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === e) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        He(t, e, r.children, n), (e = e.child);
      }
      return e;
    case 9:
      return (
        (r = e.type),
        (i = e.pendingProps.children),
        zr(e, n),
        (r = Ot(r)),
        (i = i(r)),
        (e.flags |= 1),
        He(t, e, i, n),
        e.child
      );
    case 14:
      return (
        (i = e.type),
        (r = Wt(i, e.pendingProps)),
        (r = Wt(i.type, r)),
        eg(t, e, i, r, n)
      );
    case 15:
      return t0(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : Wt(i, r)),
        Pl(t, e),
        (e.tag = 1),
        dt(i) ? ((t = !0), Ul(e)) : (t = !1),
        zr(e, n),
        Lp(e, i, r),
        Dc(e, i, r, n),
        Gc(null, e, i, !0, t, n)
      );
    case 19:
      return o0(t, e, n);
    case 22:
      return n0(t, e, n);
  }
  throw Error(L(156, e.tag));
};
function w0(t, e) {
  return Zm(t, e);
}
function fv(t, e, n, i) {
  (this.tag = t),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = i),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Lt(t, e, n, i) {
  return new fv(t, e, n, i);
}
function od(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function gv(t) {
  if (typeof t == "function") return od(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === Th)) return 11;
    if (t === Rh) return 14;
  }
  return 2;
}
function ui(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = Lt(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function Ol(t, e, n, i, r, s) {
  var o = 2;
  if (((i = t), typeof t == "function")) od(t) && (o = 1);
  else if (typeof t == "string") o = 5;
  else
    e: switch (t) {
      case Er:
        return Xi(n.children, r, s, e);
      case Sh:
        (o = 8), (r |= 8);
        break;
      case oc:
        return (
          (t = Lt(12, n, e, r | 2)), (t.elementType = oc), (t.lanes = s), t
        );
      case lc:
        return (t = Lt(13, n, e, r)), (t.elementType = lc), (t.lanes = s), t;
      case ac:
        return (t = Lt(19, n, e, r)), (t.elementType = ac), (t.lanes = s), t;
      case Mm:
        return Aa(n, r, s, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case Pm:
              o = 10;
              break e;
            case Lm:
              o = 9;
              break e;
            case Th:
              o = 11;
              break e;
            case Rh:
              o = 14;
              break e;
            case Yn:
              (o = 16), (i = null);
              break e;
          }
        throw Error(L(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = Lt(o, n, e, r)), (e.elementType = t), (e.type = i), (e.lanes = s), e
  );
}
function Xi(t, e, n, i) {
  return (t = Lt(7, t, i, e)), (t.lanes = n), t;
}
function Aa(t, e, n, i) {
  return (
    (t = Lt(22, t, i, e)),
    (t.elementType = Mm),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function Fu(t, e, n) {
  return (t = Lt(6, t, null, e)), (t.lanes = n), t;
}
function Nu(t, e, n) {
  return (
    (e = Lt(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function mv(t, e, n, i, r) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = mu(0)),
    (this.expirationTimes = mu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = mu(0)),
    (this.identifierPrefix = i),
    (this.onRecoverableError = r),
    (this.mutableSourceEagerHydrationData = null);
}
function ld(t, e, n, i, r, s, o, l, a) {
  return (
    (t = new mv(t, e, n, l, a)),
    e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
    (s = Lt(3, null, null, e)),
    (t.current = s),
    (s.stateNode = t),
    (s.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Uh(s),
    t
  );
}
function pv(t, e, n) {
  var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: vr,
    key: i == null ? null : "" + i,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
function C0(t) {
  if (!t) return di;
  t = t._reactInternals;
  e: {
    if (qi(t) !== t || t.tag !== 1) throw Error(L(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (dt(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(L(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (dt(n)) return wp(t, n, e);
  }
  return e;
}
function S0(t, e, n, i, r, s, o, l, a) {
  return (
    (t = ld(n, i, !0, t, r, s, o, l, a)),
    (t.context = C0(null)),
    (n = t.current),
    (i = qe()),
    (r = ai(n)),
    (s = Cn(i, r)),
    (s.callback = e ?? null),
    oi(n, s, r),
    (t.current.lanes = r),
    So(t, r, i),
    ft(t, i),
    t
  );
}
function Fa(t, e, n, i) {
  var r = e.current,
    s = qe(),
    o = ai(r);
  return (
    (n = C0(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = Cn(s, o)),
    (e.payload = { element: t }),
    (i = i === void 0 ? null : i),
    i !== null && (e.callback = i),
    (t = oi(r, e, o)),
    t !== null && (Vt(t, r, o, s), Rl(t, r, o)),
    o
  );
}
function ia(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function dg(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function ad(t, e) {
  dg(t, e), (t = t.alternate) && dg(t, e);
}
function _v() {
  return null;
}
var T0 =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function ud(t) {
  this._internalRoot = t;
}
Na.prototype.render = ud.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(L(409));
  Fa(t, e, null, null);
};
Na.prototype.unmount = ud.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    Zi(function () {
      Fa(null, t, null, null);
    }),
      (e[In] = null);
  }
};
function Na(t) {
  this._internalRoot = t;
}
Na.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = tp();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < $n.length && e !== 0 && e < $n[n].priority; n++);
    $n.splice(n, 0, t), n === 0 && ip(t);
  }
};
function cd(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function Da(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function fg() {}
function yv(t, e, n, i, r) {
  if (r) {
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var u = ia(o);
        s.call(u);
      };
    }
    var o = S0(e, i, t, 0, null, !1, !1, "", fg);
    return (
      (t._reactRootContainer = o),
      (t[In] = o.current),
      eo(t.nodeType === 8 ? t.parentNode : t),
      Zi(),
      o
    );
  }
  for (; (r = t.lastChild); ) t.removeChild(r);
  if (typeof i == "function") {
    var l = i;
    i = function () {
      var u = ia(a);
      l.call(u);
    };
  }
  var a = ld(t, 0, !1, null, null, !1, !1, "", fg);
  return (
    (t._reactRootContainer = a),
    (t[In] = a.current),
    eo(t.nodeType === 8 ? t.parentNode : t),
    Zi(function () {
      Fa(e, a, n, i);
    }),
    a
  );
}
function za(t, e, n, i, r) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var a = ia(o);
        l.call(a);
      };
    }
    Fa(e, o, t, r);
  } else o = yv(n, e, t, r, i);
  return ia(o);
}
Jm = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = Ls(e.pendingLanes);
        n !== 0 &&
          (Ph(e, n | 1), ft(e, Ce()), !(J & 6) && ((Zr = Ce() + 500), Ei()));
      }
      break;
    case 13:
      Zi(function () {
        var i = kn(t, 1);
        if (i !== null) {
          var r = qe();
          Vt(i, t, 1, r);
        }
      }),
        ad(t, 1);
  }
};
Lh = function (t) {
  if (t.tag === 13) {
    var e = kn(t, 134217728);
    if (e !== null) {
      var n = qe();
      Vt(e, t, 134217728, n);
    }
    ad(t, 134217728);
  }
};
ep = function (t) {
  if (t.tag === 13) {
    var e = ai(t),
      n = kn(t, e);
    if (n !== null) {
      var i = qe();
      Vt(n, t, e, i);
    }
    ad(t, e);
  }
};
tp = function () {
  return oe;
};
np = function (t, e) {
  var n = oe;
  try {
    return (oe = t), e();
  } finally {
    oe = n;
  }
};
yc = function (t, e, n) {
  switch (e) {
    case "input":
      if ((hc(t, n), (e = n.name), n.type === "radio" && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]',
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var i = n[e];
          if (i !== t && i.form === t.form) {
            var r = Ia(i);
            if (!r) throw Error(L(90));
            Am(i), hc(i, r);
          }
        }
      }
      break;
    case "textarea":
      Nm(t, n);
      break;
    case "select":
      (e = n.value), e != null && Ar(t, !!n.multiple, e, !1);
  }
};
Xm = id;
Bm = Zi;
var vv = { usingClientEntryPoint: !1, Events: [Ro, Sr, Ia, bm, Wm, id] },
  xs = {
    findFiberByHostInstance: Ai,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Ev = {
    bundleType: xs.bundleType,
    version: xs.version,
    rendererPackageName: xs.rendererPackageName,
    rendererConfig: xs.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Fn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = Vm(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: xs.findFiberByHostInstance || _v,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var al = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!al.isDisabled && al.supportsFiber)
    try {
      (Ca = al.inject(Ev)), (rn = al);
    } catch {}
}
Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vv;
Ct.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!cd(e)) throw Error(L(200));
  return pv(t, e, null, n);
};
Ct.createRoot = function (t, e) {
  if (!cd(t)) throw Error(L(299));
  var n = !1,
    i = "",
    r = T0;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (r = e.onRecoverableError)),
    (e = ld(t, 1, !1, null, null, n, !1, i, r)),
    (t[In] = e.current),
    eo(t.nodeType === 8 ? t.parentNode : t),
    new ud(e)
  );
};
Ct.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error(L(188))
      : ((t = Object.keys(t).join(",")), Error(L(268, t)));
  return (t = Vm(e)), (t = t === null ? null : t.stateNode), t;
};
Ct.flushSync = function (t) {
  return Zi(t);
};
Ct.hydrate = function (t, e, n) {
  if (!Da(e)) throw Error(L(200));
  return za(null, t, e, !0, n);
};
Ct.hydrateRoot = function (t, e, n) {
  if (!cd(t)) throw Error(L(405));
  var i = (n != null && n.hydratedSources) || null,
    r = !1,
    s = "",
    o = T0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (r = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (e = S0(e, null, t, 1, n ?? null, r, !1, s, o)),
    (t[In] = e.current),
    eo(t),
    i)
  )
    for (t = 0; t < i.length; t++)
      (n = i[t]),
        (r = n._getVersion),
        (r = r(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, r])
          : e.mutableSourceEagerHydrationData.push(n, r);
  return new Na(e);
};
Ct.render = function (t, e, n) {
  if (!Da(e)) throw Error(L(200));
  return za(null, t, e, !1, n);
};
Ct.unmountComponentAtNode = function (t) {
  if (!Da(t)) throw Error(L(40));
  return t._reactRootContainer
    ? (Zi(function () {
        za(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[In] = null);
        });
      }),
      !0)
    : !1;
};
Ct.unstable_batchedUpdates = id;
Ct.unstable_renderSubtreeIntoContainer = function (t, e, n, i) {
  if (!Da(n)) throw Error(L(200));
  if (t == null || t._reactInternals === void 0) throw Error(L(38));
  return za(t, e, n, !1, i);
};
Ct.version = "18.2.0-next-9e3b772b8-20220608";
function R0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(R0);
    } catch (t) {
      console.error(t);
    }
}
R0(), (Sm.exports = Ct);
var xv = Sm.exports,
  gg = xv;
(rc.createRoot = gg.createRoot), (rc.hydrateRoot = gg.hydrateRoot);
class Nn {
  constructor(e) {
    this.propagationStopped,
      this.defaultPrevented,
      (this.type = e),
      (this.target = null);
  }
  preventDefault() {
    this.defaultPrevented = !0;
  }
  stopPropagation() {
    this.propagationStopped = !0;
  }
}
const $r = { PROPERTYCHANGE: "propertychange" };
class hd {
  constructor() {
    this.disposed = !1;
  }
  dispose() {
    this.disposed || ((this.disposed = !0), this.disposeInternal());
  }
  disposeInternal() {}
}
function wv(t, e, n) {
  let i, r;
  n = n || fi;
  let s = 0,
    o = t.length,
    l = !1;
  for (; s < o; )
    (i = s + ((o - s) >> 1)),
      (r = +n(t[i], e)),
      r < 0 ? (s = i + 1) : ((o = i), (l = !r));
  return l ? s : ~s;
}
function fi(t, e) {
  return t > e ? 1 : t < e ? -1 : 0;
}
function dd(t, e, n) {
  if (t[0] <= e) return 0;
  const i = t.length;
  if (e <= t[i - 1]) return i - 1;
  if (typeof n == "function") {
    for (let r = 1; r < i; ++r) {
      const s = t[r];
      if (s === e) return r;
      if (s < e) return n(e, t[r - 1], s) > 0 ? r - 1 : r;
    }
    return i - 1;
  }
  if (n > 0) {
    for (let r = 1; r < i; ++r) if (t[r] < e) return r - 1;
    return i - 1;
  }
  if (n < 0) {
    for (let r = 1; r < i; ++r) if (t[r] <= e) return r;
    return i - 1;
  }
  for (let r = 1; r < i; ++r) {
    if (t[r] == e) return r;
    if (t[r] < e) return t[r - 1] - e < e - t[r] ? r - 1 : r;
  }
  return i - 1;
}
function Cv(t, e, n) {
  for (; e < n; ) {
    const i = t[e];
    (t[e] = t[n]), (t[n] = i), ++e, --n;
  }
}
function on(t, e) {
  const n = Array.isArray(e) ? e : [e],
    i = n.length;
  for (let r = 0; r < i; r++) t[t.length] = n[r];
}
function xi(t, e) {
  const n = t.length;
  if (n !== e.length) return !1;
  for (let i = 0; i < n; i++) if (t[i] !== e[i]) return !1;
  return !0;
}
function Sv(t, e, n) {
  const i = e || fi;
  return t.every(function (r, s) {
    if (s === 0) return !0;
    const o = i(t[s - 1], r);
    return !(o > 0 || (n && o === 0));
  });
}
function uo() {
  return !0;
}
function ja() {
  return !1;
}
function Hr() {}
function I0(t) {
  let e = !1,
    n,
    i,
    r;
  return function () {
    const s = Array.prototype.slice.call(arguments);
    return (
      (!e || this !== r || !xi(s, i)) &&
        ((e = !0), (r = this), (i = s), (n = t.apply(this, arguments))),
      n
    );
  };
}
function ko(t) {
  for (const e in t) delete t[e];
}
function $i(t) {
  let e;
  for (e in t) return !1;
  return !e;
}
class Ga extends hd {
  constructor(e) {
    super(),
      (this.eventTarget_ = e),
      (this.pendingRemovals_ = null),
      (this.dispatching_ = null),
      (this.listeners_ = null);
  }
  addEventListener(e, n) {
    if (!e || !n) return;
    const i = this.listeners_ || (this.listeners_ = {}),
      r = i[e] || (i[e] = []);
    r.includes(n) || r.push(n);
  }
  dispatchEvent(e) {
    const n = typeof e == "string",
      i = n ? e : e.type,
      r = this.listeners_ && this.listeners_[i];
    if (!r) return;
    const s = n ? new Nn(e) : e;
    s.target || (s.target = this.eventTarget_ || this);
    const o = this.dispatching_ || (this.dispatching_ = {}),
      l = this.pendingRemovals_ || (this.pendingRemovals_ = {});
    i in o || ((o[i] = 0), (l[i] = 0)), ++o[i];
    let a;
    for (let u = 0, c = r.length; u < c; ++u)
      if (
        ("handleEvent" in r[u]
          ? (a = r[u].handleEvent(s))
          : (a = r[u].call(this, s)),
        a === !1 || s.propagationStopped)
      ) {
        a = !1;
        break;
      }
    if (--o[i] === 0) {
      let u = l[i];
      for (delete l[i]; u--; ) this.removeEventListener(i, Hr);
      delete o[i];
    }
    return a;
  }
  disposeInternal() {
    this.listeners_ && ko(this.listeners_);
  }
  getListeners(e) {
    return (this.listeners_ && this.listeners_[e]) || void 0;
  }
  hasListener(e) {
    return this.listeners_
      ? e
        ? e in this.listeners_
        : Object.keys(this.listeners_).length > 0
      : !1;
  }
  removeEventListener(e, n) {
    if (!this.listeners_) return;
    const i = this.listeners_[e];
    if (!i) return;
    const r = i.indexOf(n);
    r !== -1 &&
      (this.pendingRemovals_ && e in this.pendingRemovals_
        ? ((i[r] = Hr), ++this.pendingRemovals_[e])
        : (i.splice(r, 1), i.length === 0 && delete this.listeners_[e]));
  }
}
const K = {
  CHANGE: "change",
  ERROR: "error",
  BLUR: "blur",
  CLEAR: "clear",
  CONTEXTMENU: "contextmenu",
  CLICK: "click",
  DBLCLICK: "dblclick",
  DRAGENTER: "dragenter",
  DRAGOVER: "dragover",
  DROP: "drop",
  FOCUS: "focus",
  KEYDOWN: "keydown",
  KEYPRESS: "keypress",
  LOAD: "load",
  RESIZE: "resize",
  TOUCHMOVE: "touchmove",
  WHEEL: "wheel",
};
function Q(t, e, n, i, r) {
  if ((i && i !== t && (n = n.bind(i)), r)) {
    const o = n;
    n = function () {
      t.removeEventListener(e, n), o.apply(this, arguments);
    };
  }
  const s = { target: t, type: e, listener: n };
  return t.addEventListener(e, n), s;
}
function ra(t, e, n, i) {
  return Q(t, e, n, i, !0);
}
function ce(t) {
  t && t.target && (t.target.removeEventListener(t.type, t.listener), ko(t));
}
class Po extends Ga {
  constructor() {
    super(),
      (this.on = this.onInternal),
      (this.once = this.onceInternal),
      (this.un = this.unInternal),
      (this.revision_ = 0);
  }
  changed() {
    ++this.revision_, this.dispatchEvent(K.CHANGE);
  }
  getRevision() {
    return this.revision_;
  }
  onInternal(e, n) {
    if (Array.isArray(e)) {
      const i = e.length,
        r = new Array(i);
      for (let s = 0; s < i; ++s) r[s] = Q(this, e[s], n);
      return r;
    }
    return Q(this, e, n);
  }
  onceInternal(e, n) {
    let i;
    if (Array.isArray(e)) {
      const r = e.length;
      i = new Array(r);
      for (let s = 0; s < r; ++s) i[s] = ra(this, e[s], n);
    } else i = ra(this, e, n);
    return (n.ol_key = i), i;
  }
  unInternal(e, n) {
    const i = n.ol_key;
    if (i) Tv(i);
    else if (Array.isArray(e))
      for (let r = 0, s = e.length; r < s; ++r)
        this.removeEventListener(e[r], n);
    else this.removeEventListener(e, n);
  }
}
Po.prototype.on;
Po.prototype.once;
Po.prototype.un;
function Tv(t) {
  if (Array.isArray(t)) for (let e = 0, n = t.length; e < n; ++e) ce(t[e]);
  else ce(t);
}
function W() {
  throw new Error("Unimplemented abstract method.");
}
let Rv = 0;
function ne(t) {
  return t.ol_uid || (t.ol_uid = String(++Rv));
}
class mg extends Nn {
  constructor(e, n, i) {
    super(e), (this.key = n), (this.oldValue = i);
  }
}
class $t extends Po {
  constructor(e) {
    super(),
      this.on,
      this.once,
      this.un,
      ne(this),
      (this.values_ = null),
      e !== void 0 && this.setProperties(e);
  }
  get(e) {
    let n;
    return (
      this.values_ && this.values_.hasOwnProperty(e) && (n = this.values_[e]), n
    );
  }
  getKeys() {
    return (this.values_ && Object.keys(this.values_)) || [];
  }
  getProperties() {
    return (this.values_ && Object.assign({}, this.values_)) || {};
  }
  getPropertiesInternal() {
    return this.values_;
  }
  hasProperties() {
    return !!this.values_;
  }
  notify(e, n) {
    let i;
    (i = `change:${e}`),
      this.hasListener(i) && this.dispatchEvent(new mg(i, e, n)),
      (i = $r.PROPERTYCHANGE),
      this.hasListener(i) && this.dispatchEvent(new mg(i, e, n));
  }
  addChangeListener(e, n) {
    this.addEventListener(`change:${e}`, n);
  }
  removeChangeListener(e, n) {
    this.removeEventListener(`change:${e}`, n);
  }
  set(e, n, i) {
    const r = this.values_ || (this.values_ = {});
    if (i) r[e] = n;
    else {
      const s = r[e];
      (r[e] = n), s !== n && this.notify(e, s);
    }
  }
  setProperties(e, n) {
    for (const i in e) this.set(i, e[i], n);
  }
  applyProperties(e) {
    e.values_ && Object.assign(this.values_ || (this.values_ = {}), e.values_);
  }
  unset(e, n) {
    if (this.values_ && e in this.values_) {
      const i = this.values_[e];
      delete this.values_[e],
        $i(this.values_) && (this.values_ = null),
        n || this.notify(e, i);
    }
  }
}
const ot = { ADD: "add", REMOVE: "remove" },
  pg = { LENGTH: "length" };
class ul extends Nn {
  constructor(e, n, i) {
    super(e), (this.element = n), (this.index = i);
  }
}
class tn extends $t {
  constructor(e, n) {
    if (
      (super(),
      this.on,
      this.once,
      this.un,
      (n = n || {}),
      (this.unique_ = !!n.unique),
      (this.array_ = e || []),
      this.unique_)
    )
      for (let i = 0, r = this.array_.length; i < r; ++i)
        this.assertUnique_(this.array_[i], i);
    this.updateLength_();
  }
  clear() {
    for (; this.getLength() > 0; ) this.pop();
  }
  extend(e) {
    for (let n = 0, i = e.length; n < i; ++n) this.push(e[n]);
    return this;
  }
  forEach(e) {
    const n = this.array_;
    for (let i = 0, r = n.length; i < r; ++i) e(n[i], i, n);
  }
  getArray() {
    return this.array_;
  }
  item(e) {
    return this.array_[e];
  }
  getLength() {
    return this.get(pg.LENGTH);
  }
  insertAt(e, n) {
    if (e < 0 || e > this.getLength())
      throw new Error("Index out of bounds: " + e);
    this.unique_ && this.assertUnique_(n),
      this.array_.splice(e, 0, n),
      this.updateLength_(),
      this.dispatchEvent(new ul(ot.ADD, n, e));
  }
  pop() {
    return this.removeAt(this.getLength() - 1);
  }
  push(e) {
    this.unique_ && this.assertUnique_(e);
    const n = this.getLength();
    return this.insertAt(n, e), this.getLength();
  }
  remove(e) {
    const n = this.array_;
    for (let i = 0, r = n.length; i < r; ++i)
      if (n[i] === e) return this.removeAt(i);
  }
  removeAt(e) {
    if (e < 0 || e >= this.getLength()) return;
    const n = this.array_[e];
    return (
      this.array_.splice(e, 1),
      this.updateLength_(),
      this.dispatchEvent(new ul(ot.REMOVE, n, e)),
      n
    );
  }
  setAt(e, n) {
    const i = this.getLength();
    if (e >= i) {
      this.insertAt(e, n);
      return;
    }
    if (e < 0) throw new Error("Index out of bounds: " + e);
    this.unique_ && this.assertUnique_(n, e);
    const r = this.array_[e];
    (this.array_[e] = n),
      this.dispatchEvent(new ul(ot.REMOVE, r, e)),
      this.dispatchEvent(new ul(ot.ADD, n, e));
  }
  updateLength_() {
    this.set(pg.LENGTH, this.array_.length);
  }
  assertUnique_(e, n) {
    for (let i = 0, r = this.array_.length; i < r; ++i)
      if (this.array_[i] === e && i !== n)
        throw new Error("Duplicate item added to a unique collection");
  }
}
function ee(t, e) {
  if (!t) throw new Error(e);
}
class is extends $t {
  constructor(e) {
    if (
      (super(),
      this.on,
      this.once,
      this.un,
      (this.id_ = void 0),
      (this.geometryName_ = "geometry"),
      (this.style_ = null),
      (this.styleFunction_ = void 0),
      (this.geometryChangeKey_ = null),
      this.addChangeListener(this.geometryName_, this.handleGeometryChanged_),
      e)
    )
      if (typeof e.getSimplifiedGeometry == "function") {
        const n = e;
        this.setGeometry(n);
      } else {
        const n = e;
        this.setProperties(n);
      }
  }
  clone() {
    const e = new is(this.hasProperties() ? this.getProperties() : null);
    e.setGeometryName(this.getGeometryName());
    const n = this.getGeometry();
    n && e.setGeometry(n.clone());
    const i = this.getStyle();
    return i && e.setStyle(i), e;
  }
  getGeometry() {
    return this.get(this.geometryName_);
  }
  getId() {
    return this.id_;
  }
  getGeometryName() {
    return this.geometryName_;
  }
  getStyle() {
    return this.style_;
  }
  getStyleFunction() {
    return this.styleFunction_;
  }
  handleGeometryChange_() {
    this.changed();
  }
  handleGeometryChanged_() {
    this.geometryChangeKey_ &&
      (ce(this.geometryChangeKey_), (this.geometryChangeKey_ = null));
    const e = this.getGeometry();
    e &&
      (this.geometryChangeKey_ = Q(
        e,
        K.CHANGE,
        this.handleGeometryChange_,
        this,
      )),
      this.changed();
  }
  setGeometry(e) {
    this.set(this.geometryName_, e);
  }
  setStyle(e) {
    (this.style_ = e),
      (this.styleFunction_ = e ? Iv(e) : void 0),
      this.changed();
  }
  setId(e) {
    (this.id_ = e), this.changed();
  }
  setGeometryName(e) {
    this.removeChangeListener(this.geometryName_, this.handleGeometryChanged_),
      (this.geometryName_ = e),
      this.addChangeListener(this.geometryName_, this.handleGeometryChanged_),
      this.handleGeometryChanged_();
  }
}
function Iv(t) {
  if (typeof t == "function") return t;
  let e;
  return (
    Array.isArray(t)
      ? (e = t)
      : (ee(
          typeof t.getZIndex == "function",
          "Expected an `ol/style/Style` or an array of `ol/style/Style.js`",
        ),
        (e = [t])),
    function () {
      return e;
    }
  );
}
const gi =
    typeof navigator < "u" && typeof navigator.userAgent < "u"
      ? navigator.userAgent.toLowerCase()
      : "",
  kv = gi.includes("firefox"),
  Pv = gi.includes("safari") && !gi.includes("chrom");
Pv &&
  (gi.includes("version/15.4") ||
    /cpu (os|iphone os) 15_4 like mac os x/.test(gi));
const Lv = gi.includes("webkit") && !gi.includes("edge"),
  k0 = gi.includes("macintosh"),
  P0 = typeof devicePixelRatio < "u" ? devicePixelRatio : 1,
  fd =
    typeof WorkerGlobalScope < "u" &&
    typeof OffscreenCanvas < "u" &&
    self instanceof WorkerGlobalScope,
  L0 = typeof Image < "u" && Image.prototype.decode,
  M0 = (function () {
    let t = !1;
    try {
      const e = Object.defineProperty({}, "passive", {
        get: function () {
          t = !0;
        },
      });
      window.addEventListener("_", null, e),
        window.removeEventListener("_", null, e);
    } catch {}
    return t;
  })();
new Array(6);
function Kt() {
  return [1, 0, 0, 1, 0, 0];
}
function Mv(t, e, n, i, r, s, o) {
  return (
    (t[0] = e), (t[1] = n), (t[2] = i), (t[3] = r), (t[4] = s), (t[5] = o), t
  );
}
function Ov(t, e) {
  return (
    (t[0] = e[0]),
    (t[1] = e[1]),
    (t[2] = e[2]),
    (t[3] = e[3]),
    (t[4] = e[4]),
    (t[5] = e[5]),
    t
  );
}
function Me(t, e) {
  const n = e[0],
    i = e[1];
  return (
    (e[0] = t[0] * n + t[2] * i + t[4]), (e[1] = t[1] * n + t[3] * i + t[5]), e
  );
}
function Av(t, e, n) {
  return Mv(t, e, 0, 0, n, 0, 0);
}
function Ln(t, e, n, i, r, s, o, l) {
  const a = Math.sin(s),
    u = Math.cos(s);
  return (
    (t[0] = i * u),
    (t[1] = r * a),
    (t[2] = -i * a),
    (t[3] = r * u),
    (t[4] = o * i * u - l * i * a + e),
    (t[5] = o * r * a + l * r * u + n),
    t
  );
}
function gd(t, e) {
  const n = Fv(e);
  ee(n !== 0, "Transformation matrix cannot be inverted");
  const i = e[0],
    r = e[1],
    s = e[2],
    o = e[3],
    l = e[4],
    a = e[5];
  return (
    (t[0] = o / n),
    (t[1] = -r / n),
    (t[2] = -s / n),
    (t[3] = i / n),
    (t[4] = (s * a - o * l) / n),
    (t[5] = -(i * a - r * l) / n),
    t
  );
}
function Fv(t) {
  return t[0] * t[3] - t[1] * t[2];
}
let _g;
function O0(t) {
  const e = "matrix(" + t.join(", ") + ")";
  if (fd) return e;
  const n = _g || (_g = document.createElement("div"));
  return (n.style.transform = e), n.style.transform;
}
const Pe = {
  UNKNOWN: 0,
  INTERSECTING: 1,
  ABOVE: 2,
  RIGHT: 4,
  BELOW: 8,
  LEFT: 16,
};
function yg(t) {
  const e = Ft();
  for (let n = 0, i = t.length; n < i; ++n) Us(e, t[n]);
  return e;
}
function Nv(t, e, n) {
  const i = Math.min.apply(null, t),
    r = Math.min.apply(null, e),
    s = Math.max.apply(null, t),
    o = Math.max.apply(null, e);
  return Mn(i, r, s, o, n);
}
function md(t, e, n) {
  return n
    ? ((n[0] = t[0] - e),
      (n[1] = t[1] - e),
      (n[2] = t[2] + e),
      (n[3] = t[3] + e),
      n)
    : [t[0] - e, t[1] - e, t[2] + e, t[3] + e];
}
function A0(t, e) {
  return e
    ? ((e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e)
    : t.slice();
}
function Qi(t, e, n) {
  let i, r;
  return (
    e < t[0] ? (i = t[0] - e) : t[2] < e ? (i = e - t[2]) : (i = 0),
    n < t[1] ? (r = t[1] - n) : t[3] < n ? (r = n - t[3]) : (r = 0),
    i * i + r * r
  );
}
function ba(t, e) {
  return pd(t, e[0], e[1]);
}
function Di(t, e) {
  return t[0] <= e[0] && e[2] <= t[2] && t[1] <= e[1] && e[3] <= t[3];
}
function pd(t, e, n) {
  return t[0] <= e && e <= t[2] && t[1] <= n && n <= t[3];
}
function qc(t, e) {
  const n = t[0],
    i = t[1],
    r = t[2],
    s = t[3],
    o = e[0],
    l = e[1];
  let a = Pe.UNKNOWN;
  return (
    o < n ? (a = a | Pe.LEFT) : o > r && (a = a | Pe.RIGHT),
    l < i ? (a = a | Pe.BELOW) : l > s && (a = a | Pe.ABOVE),
    a === Pe.UNKNOWN && (a = Pe.INTERSECTING),
    a
  );
}
function Ft() {
  return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
}
function Mn(t, e, n, i, r) {
  return r ? ((r[0] = t), (r[1] = e), (r[2] = n), (r[3] = i), r) : [t, e, n, i];
}
function rs(t) {
  return Mn(1 / 0, 1 / 0, -1 / 0, -1 / 0, t);
}
function F0(t, e) {
  const n = t[0],
    i = t[1];
  return Mn(n, i, n, i, e);
}
function _d(t, e, n, i, r) {
  const s = rs(r);
  return D0(s, t, e, n, i);
}
function co(t, e) {
  return t[0] == e[0] && t[2] == e[2] && t[1] == e[1] && t[3] == e[3];
}
function N0(t, e) {
  return (
    e[0] < t[0] && (t[0] = e[0]),
    e[2] > t[2] && (t[2] = e[2]),
    e[1] < t[1] && (t[1] = e[1]),
    e[3] > t[3] && (t[3] = e[3]),
    t
  );
}
function Us(t, e) {
  e[0] < t[0] && (t[0] = e[0]),
    e[0] > t[2] && (t[2] = e[0]),
    e[1] < t[1] && (t[1] = e[1]),
    e[1] > t[3] && (t[3] = e[1]);
}
function D0(t, e, n, i, r) {
  for (; n < i; n += r) Dv(t, e[n], e[n + 1]);
  return t;
}
function Dv(t, e, n) {
  (t[0] = Math.min(t[0], e)),
    (t[1] = Math.min(t[1], n)),
    (t[2] = Math.max(t[2], e)),
    (t[3] = Math.max(t[3], n));
}
function z0(t, e) {
  let n;
  return (
    (n = e(Wa(t))),
    n || ((n = e(Xa(t))), n) || ((n = e(Ba(t))), n) || ((n = e(Ji(t))), n)
      ? n
      : !1
  );
}
function Qc(t) {
  let e = 0;
  return Lo(t) || (e = ae(t) * xt(t)), e;
}
function Wa(t) {
  return [t[0], t[1]];
}
function Xa(t) {
  return [t[2], t[1]];
}
function mi(t) {
  return [(t[0] + t[2]) / 2, (t[1] + t[3]) / 2];
}
function zv(t, e) {
  let n;
  if (e === "bottom-left") n = Wa(t);
  else if (e === "bottom-right") n = Xa(t);
  else if (e === "top-left") n = Ji(t);
  else if (e === "top-right") n = Ba(t);
  else throw new Error("Invalid corner");
  return n;
}
function Jc(t, e, n, i, r) {
  const [s, o, l, a, u, c, h, d] = eh(t, e, n, i);
  return Mn(
    Math.min(s, l, u, h),
    Math.min(o, a, c, d),
    Math.max(s, l, u, h),
    Math.max(o, a, c, d),
    r,
  );
}
function eh(t, e, n, i) {
  const r = (e * i[0]) / 2,
    s = (e * i[1]) / 2,
    o = Math.cos(n),
    l = Math.sin(n),
    a = r * o,
    u = r * l,
    c = s * o,
    h = s * l,
    d = t[0],
    f = t[1];
  return [
    d - a + h,
    f - u - c,
    d - a - h,
    f - u + c,
    d + a - h,
    f + u + c,
    d + a + h,
    f + u - c,
    d - a + h,
    f - u - c,
  ];
}
function xt(t) {
  return t[3] - t[1];
}
function Ys(t, e, n) {
  const i = n || Ft();
  return (
    at(t, e)
      ? (t[0] > e[0] ? (i[0] = t[0]) : (i[0] = e[0]),
        t[1] > e[1] ? (i[1] = t[1]) : (i[1] = e[1]),
        t[2] < e[2] ? (i[2] = t[2]) : (i[2] = e[2]),
        t[3] < e[3] ? (i[3] = t[3]) : (i[3] = e[3]))
      : rs(i),
    i
  );
}
function Ji(t) {
  return [t[0], t[3]];
}
function Ba(t) {
  return [t[2], t[3]];
}
function ae(t) {
  return t[2] - t[0];
}
function at(t, e) {
  return t[0] <= e[2] && t[2] >= e[0] && t[1] <= e[3] && t[3] >= e[1];
}
function Lo(t) {
  return t[2] < t[0] || t[3] < t[1];
}
function jv(t, e) {
  return e
    ? ((e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e)
    : t;
}
function Gv(t, e, n) {
  let i = !1;
  const r = qc(t, e),
    s = qc(t, n);
  if (r === Pe.INTERSECTING || s === Pe.INTERSECTING) i = !0;
  else {
    const o = t[0],
      l = t[1],
      a = t[2],
      u = t[3],
      c = e[0],
      h = e[1],
      d = n[0],
      f = n[1],
      p = (f - h) / (d - c);
    let _, v;
    s & Pe.ABOVE &&
      !(r & Pe.ABOVE) &&
      ((_ = d - (f - u) / p), (i = _ >= o && _ <= a)),
      !i &&
        s & Pe.RIGHT &&
        !(r & Pe.RIGHT) &&
        ((v = f - (d - a) * p), (i = v >= l && v <= u)),
      !i &&
        s & Pe.BELOW &&
        !(r & Pe.BELOW) &&
        ((_ = d - (f - l) / p), (i = _ >= o && _ <= a)),
      !i &&
        s & Pe.LEFT &&
        !(r & Pe.LEFT) &&
        ((v = f - (d - o) * p), (i = v >= l && v <= u));
  }
  return i;
}
function bv(t, e, n, i) {
  if (Lo(t)) return rs(n);
  let r = [];
  if (i > 1) {
    const l = t[2] - t[0],
      a = t[3] - t[1];
    for (let u = 0; u < i; ++u)
      r.push(
        t[0] + (l * u) / i,
        t[1],
        t[2],
        t[1] + (a * u) / i,
        t[2] - (l * u) / i,
        t[3],
        t[0],
        t[3] - (a * u) / i,
      );
  } else r = [t[0], t[1], t[2], t[1], t[2], t[3], t[0], t[3]];
  e(r, r, 2);
  const s = [],
    o = [];
  for (let l = 0, a = r.length; l < a; l += 2) s.push(r[l]), o.push(r[l + 1]);
  return Nv(s, o, n);
}
function j0(t, e) {
  const n = e.getExtent(),
    i = mi(t);
  if (e.canWrapX() && (i[0] < n[0] || i[0] >= n[2])) {
    const r = ae(n),
      o = Math.floor((i[0] - n[0]) / r) * r;
    (t[0] -= o), (t[2] -= o);
  }
  return t;
}
function Wv(t, e) {
  if (e.canWrapX()) {
    const n = e.getExtent();
    if (!isFinite(t[0]) || !isFinite(t[2])) return [[n[0], t[1], n[2], t[3]]];
    j0(t, e);
    const i = ae(n);
    if (ae(t) > i) return [[n[0], t[1], n[2], t[3]]];
    if (t[0] < n[0])
      return [
        [t[0] + i, t[1], n[2], t[3]],
        [n[0], t[1], t[2], t[3]],
      ];
    if (t[2] > n[2])
      return [
        [t[0], t[1], n[2], t[3]],
        [n[0], t[1], t[2] - i, t[3]],
      ];
  }
  return [t];
}
const ho = {
  radians: 6370997 / (2 * Math.PI),
  degrees: (2 * Math.PI * 6370997) / 360,
  ft: 0.3048,
  m: 1,
  "us-ft": 1200 / 3937,
};
class G0 {
  constructor(e) {
    (this.code_ = e.code),
      (this.units_ = e.units),
      (this.extent_ = e.extent !== void 0 ? e.extent : null),
      (this.worldExtent_ = e.worldExtent !== void 0 ? e.worldExtent : null),
      (this.axisOrientation_ =
        e.axisOrientation !== void 0 ? e.axisOrientation : "enu"),
      (this.global_ = e.global !== void 0 ? e.global : !1),
      (this.canWrapX_ = !!(this.global_ && this.extent_)),
      (this.getPointResolutionFunc_ = e.getPointResolution),
      (this.defaultTileGrid_ = null),
      (this.metersPerUnit_ = e.metersPerUnit);
  }
  canWrapX() {
    return this.canWrapX_;
  }
  getCode() {
    return this.code_;
  }
  getExtent() {
    return this.extent_;
  }
  getUnits() {
    return this.units_;
  }
  getMetersPerUnit() {
    return this.metersPerUnit_ || ho[this.units_];
  }
  getWorldExtent() {
    return this.worldExtent_;
  }
  getAxisOrientation() {
    return this.axisOrientation_;
  }
  isGlobal() {
    return this.global_;
  }
  setGlobal(e) {
    (this.global_ = e), (this.canWrapX_ = !!(e && this.extent_));
  }
  getDefaultTileGrid() {
    return this.defaultTileGrid_;
  }
  setDefaultTileGrid(e) {
    this.defaultTileGrid_ = e;
  }
  setExtent(e) {
    (this.extent_ = e), (this.canWrapX_ = !!(this.global_ && e));
  }
  setWorldExtent(e) {
    this.worldExtent_ = e;
  }
  setGetPointResolution(e) {
    this.getPointResolutionFunc_ = e;
  }
  getPointResolutionFunc() {
    return this.getPointResolutionFunc_;
  }
}
const Mo = 6378137,
  Mr = Math.PI * Mo,
  Xv = [-Mr, -Mr, Mr, Mr],
  Bv = [-180, -85, 180, 85],
  cl = Mo * Math.log(Math.tan(Math.PI / 2));
class cr extends G0 {
  constructor(e) {
    super({
      code: e,
      units: "m",
      extent: Xv,
      global: !0,
      worldExtent: Bv,
      getPointResolution: function (n, i) {
        return n / Math.cosh(i[1] / Mo);
      },
    });
  }
}
const vg = [
  new cr("EPSG:3857"),
  new cr("EPSG:102100"),
  new cr("EPSG:102113"),
  new cr("EPSG:900913"),
  new cr("http://www.opengis.net/def/crs/EPSG/0/3857"),
  new cr("http://www.opengis.net/gml/srs/epsg.xml#3857"),
];
function Uv(t, e, n) {
  const i = t.length;
  (n = n > 1 ? n : 2),
    e === void 0 && (n > 2 ? (e = t.slice()) : (e = new Array(i)));
  for (let r = 0; r < i; r += n) {
    e[r] = (Mr * t[r]) / 180;
    let s = Mo * Math.log(Math.tan((Math.PI * (+t[r + 1] + 90)) / 360));
    s > cl ? (s = cl) : s < -cl && (s = -cl), (e[r + 1] = s);
  }
  return e;
}
function Yv(t, e, n) {
  const i = t.length;
  (n = n > 1 ? n : 2),
    e === void 0 && (n > 2 ? (e = t.slice()) : (e = new Array(i)));
  for (let r = 0; r < i; r += n)
    (e[r] = (180 * t[r]) / Mr),
      (e[r + 1] = (360 * Math.atan(Math.exp(t[r + 1] / Mo))) / Math.PI - 90);
  return e;
}
const Vv = 6378137,
  Eg = [-180, -90, 180, 90],
  Kv = (Math.PI * Vv) / 180;
class Ri extends G0 {
  constructor(e, n) {
    super({
      code: e,
      units: "degrees",
      extent: Eg,
      axisOrientation: n,
      global: !0,
      metersPerUnit: Kv,
      worldExtent: Eg,
    });
  }
}
const xg = [
  new Ri("CRS:84"),
  new Ri("EPSG:4326", "neu"),
  new Ri("urn:ogc:def:crs:OGC:1.3:CRS84"),
  new Ri("urn:ogc:def:crs:OGC:2:84"),
  new Ri("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),
  new Ri("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"),
  new Ri("http://www.opengis.net/def/crs/EPSG/0/4326", "neu"),
];
let th = {};
function Zv(t) {
  return (
    th[t] ||
    th[t.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, "EPSG:$3")] ||
    null
  );
}
function $v(t, e) {
  th[t] = e;
}
let Gr = {};
function sa(t, e, n) {
  const i = t.getCode(),
    r = e.getCode();
  i in Gr || (Gr[i] = {}), (Gr[i][r] = n);
}
function Hv(t, e) {
  let n;
  return t in Gr && e in Gr[t] && (n = Gr[t][e]), n;
}
function Re(t, e, n) {
  return Math.min(Math.max(t, e), n);
}
function qv(t, e, n, i, r, s) {
  const o = r - n,
    l = s - i;
  if (o !== 0 || l !== 0) {
    const a = ((t - n) * o + (e - i) * l) / (o * o + l * l);
    a > 1 ? ((n = r), (i = s)) : a > 0 && ((n += o * a), (i += l * a));
  }
  return Bi(t, e, n, i);
}
function Bi(t, e, n, i) {
  const r = n - t,
    s = i - e;
  return r * r + s * s;
}
function Qv(t) {
  const e = t.length;
  for (let i = 0; i < e; i++) {
    let r = i,
      s = Math.abs(t[i][i]);
    for (let l = i + 1; l < e; l++) {
      const a = Math.abs(t[l][i]);
      a > s && ((s = a), (r = l));
    }
    if (s === 0) return null;
    const o = t[r];
    (t[r] = t[i]), (t[i] = o);
    for (let l = i + 1; l < e; l++) {
      const a = -t[l][i] / t[i][i];
      for (let u = i; u < e + 1; u++)
        i == u ? (t[l][u] = 0) : (t[l][u] += a * t[i][u]);
    }
  }
  const n = new Array(e);
  for (let i = e - 1; i >= 0; i--) {
    n[i] = t[i][e] / t[i][i];
    for (let r = i - 1; r >= 0; r--) t[r][e] -= t[r][i] * n[i];
  }
  return n;
}
function Al(t) {
  return (t * Math.PI) / 180;
}
function br(t, e) {
  const n = t % e;
  return n * e < 0 ? n + e : n;
}
function _t(t, e, n) {
  return t + n * (e - t);
}
function yd(t, e) {
  const n = Math.pow(10, e);
  return Math.round(t * n) / n;
}
function hl(t, e) {
  return Math.floor(yd(t, e));
}
function dl(t, e) {
  return Math.ceil(yd(t, e));
}
function Jv(t, e) {
  return (t[0] += +e[0]), (t[1] += +e[1]), t;
}
function oa(t, e) {
  let n = !0;
  for (let i = t.length - 1; i >= 0; --i)
    if (t[i] != e[i]) {
      n = !1;
      break;
    }
  return n;
}
function vd(t, e) {
  const n = Math.cos(e),
    i = Math.sin(e),
    r = t[0] * n - t[1] * i,
    s = t[1] * n + t[0] * i;
  return (t[0] = r), (t[1] = s), t;
}
function eE(t, e) {
  return (t[0] *= e), (t[1] *= e), t;
}
function b0(t, e) {
  if (e.canWrapX()) {
    const n = ae(e.getExtent()),
      i = tE(t, e, n);
    i && (t[0] -= i * n);
  }
  return t;
}
function tE(t, e, n) {
  const i = e.getExtent();
  let r = 0;
  return (
    e.canWrapX() &&
      (t[0] < i[0] || t[0] > i[2]) &&
      ((n = n || ae(i)), (r = Math.floor((t[0] - i[0]) / n))),
    r
  );
}
const nE = 63710088e-1;
function wg(t, e, n) {
  n = n || nE;
  const i = Al(t[1]),
    r = Al(e[1]),
    s = (r - i) / 2,
    o = Al(e[0] - t[0]) / 2,
    l =
      Math.sin(s) * Math.sin(s) +
      Math.sin(o) * Math.sin(o) * Math.cos(i) * Math.cos(r);
  return 2 * n * Math.atan2(Math.sqrt(l), Math.sqrt(1 - l));
}
function W0(...t) {
  console.warn(...t);
}
let nh = !0;
function iE(t) {
  nh = !(t === void 0 ? !0 : t);
}
function Ed(t, e) {
  if (e !== void 0) {
    for (let n = 0, i = t.length; n < i; ++n) e[n] = t[n];
    e = e;
  } else e = t.slice();
  return e;
}
function X0(t, e) {
  if (e !== void 0 && t !== e) {
    for (let n = 0, i = t.length; n < i; ++n) e[n] = t[n];
    t = e;
  }
  return t;
}
function rE(t) {
  $v(t.getCode(), t), sa(t, t, Ed);
}
function sE(t) {
  t.forEach(rE);
}
function xe(t) {
  return typeof t == "string" ? Zv(t) : t || null;
}
function Cg(t, e, n, i) {
  t = xe(t);
  let r;
  const s = t.getPointResolutionFunc();
  if (s) {
    if (((r = s(e, n)), i && i !== t.getUnits())) {
      const o = t.getMetersPerUnit();
      o && (r = (r * o) / ho[i]);
    }
  } else {
    const o = t.getUnits();
    if ((o == "degrees" && !i) || i == "degrees") r = e;
    else {
      const l = Ua(t, xe("EPSG:4326"));
      if (l === X0 && o !== "degrees") r = e * t.getMetersPerUnit();
      else {
        let u = [
          n[0] - e / 2,
          n[1],
          n[0] + e / 2,
          n[1],
          n[0],
          n[1] - e / 2,
          n[0],
          n[1] + e / 2,
        ];
        u = l(u, u, 2);
        const c = wg(u.slice(0, 2), u.slice(2, 4)),
          h = wg(u.slice(4, 6), u.slice(6, 8));
        r = (c + h) / 2;
      }
      const a = i ? ho[i] : t.getMetersPerUnit();
      a !== void 0 && (r /= a);
    }
  }
  return r;
}
function Sg(t) {
  sE(t),
    t.forEach(function (e) {
      t.forEach(function (n) {
        e !== n && sa(e, n, Ed);
      });
    });
}
function oE(t, e, n, i) {
  t.forEach(function (r) {
    e.forEach(function (s) {
      sa(r, s, n), sa(s, r, i);
    });
  });
}
function xd(t, e) {
  return t ? (typeof t == "string" ? xe(t) : t) : xe(e);
}
function Oi(t, e) {
  if (t === e) return !0;
  const n = t.getUnits() === e.getUnits();
  return (t.getCode() === e.getCode() || Ua(t, e) === Ed) && n;
}
function Ua(t, e) {
  const n = t.getCode(),
    i = e.getCode();
  let r = Hv(n, i);
  return r || (r = X0), r;
}
function qr(t, e) {
  const n = xe(t),
    i = xe(e);
  return Ua(n, i);
}
function wd(t, e, n) {
  return qr(e, n)(t, void 0, t.length);
}
function B0(t, e, n, i) {
  const r = qr(e, n);
  return bv(t, r, void 0, i);
}
let Nt = null;
function lE(t) {
  Nt = xe(t);
}
function U0() {
  return Nt;
}
function aE() {
  lE("EPSG:4326");
}
function ih(t, e) {
  return Nt ? wd(t, e, Nt) : t;
}
function pn(t, e) {
  return Nt
    ? wd(t, Nt, e)
    : (nh &&
        !oa(t, [0, 0]) &&
        t[0] >= -180 &&
        t[0] <= 180 &&
        t[1] >= -90 &&
        t[1] <= 90 &&
        ((nh = !1),
        W0(
          "Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.",
        )),
      t);
}
function rh(t, e) {
  return Nt ? B0(t, e, Nt) : t;
}
function zi(t, e) {
  return Nt ? B0(t, Nt, e) : t;
}
function uE(t, e) {
  if (!Nt) return t;
  const n = xe(e).getMetersPerUnit(),
    i = Nt.getMetersPerUnit();
  return n && i ? (t * n) / i : t;
}
function cE() {
  Sg(vg), Sg(xg), oE(xg, vg, Uv, Yv);
}
cE();
function ci(t, e, n, i, r, s) {
  s = s || [];
  let o = 0;
  for (let l = e; l < n; l += i) {
    const a = t[l],
      u = t[l + 1];
    (s[o++] = r[0] * a + r[2] * u + r[4]),
      (s[o++] = r[1] * a + r[3] * u + r[5]);
  }
  return s && s.length != o && (s.length = o), s;
}
function Y0(t, e, n, i, r, s, o) {
  o = o || [];
  const l = Math.cos(r),
    a = Math.sin(r),
    u = s[0],
    c = s[1];
  let h = 0;
  for (let d = e; d < n; d += i) {
    const f = t[d] - u,
      p = t[d + 1] - c;
    (o[h++] = u + f * l - p * a), (o[h++] = c + f * a + p * l);
    for (let _ = d + 2; _ < d + i; ++_) o[h++] = t[_];
  }
  return o && o.length != h && (o.length = h), o;
}
function hE(t, e, n, i, r, s, o, l) {
  l = l || [];
  const a = o[0],
    u = o[1];
  let c = 0;
  for (let h = e; h < n; h += i) {
    const d = t[h] - a,
      f = t[h + 1] - u;
    (l[c++] = a + r * d), (l[c++] = u + s * f);
    for (let p = h + 2; p < h + i; ++p) l[c++] = t[p];
  }
  return l && l.length != c && (l.length = c), l;
}
function dE(t, e, n, i, r, s, o) {
  o = o || [];
  let l = 0;
  for (let a = e; a < n; a += i) {
    (o[l++] = t[a] + r), (o[l++] = t[a + 1] + s);
    for (let u = a + 2; u < a + i; ++u) o[l++] = t[u];
  }
  return o && o.length != l && (o.length = l), o;
}
const Tg = Kt();
class V0 extends $t {
  constructor() {
    super(),
      (this.extent_ = Ft()),
      (this.extentRevision_ = -1),
      (this.simplifiedGeometryMaxMinSquaredTolerance = 0),
      (this.simplifiedGeometryRevision = 0),
      (this.simplifyTransformedInternal = I0((e, n, i) => {
        if (!i) return this.getSimplifiedGeometry(n);
        const r = this.clone();
        return r.applyTransform(i), r.getSimplifiedGeometry(n);
      }));
  }
  simplifyTransformed(e, n) {
    return this.simplifyTransformedInternal(this.getRevision(), e, n);
  }
  clone() {
    return W();
  }
  closestPointXY(e, n, i, r) {
    return W();
  }
  containsXY(e, n) {
    const i = this.getClosestPoint([e, n]);
    return i[0] === e && i[1] === n;
  }
  getClosestPoint(e, n) {
    return (n = n || [NaN, NaN]), this.closestPointXY(e[0], e[1], n, 1 / 0), n;
  }
  intersectsCoordinate(e) {
    return this.containsXY(e[0], e[1]);
  }
  computeExtent(e) {
    return W();
  }
  getExtent(e) {
    if (this.extentRevision_ != this.getRevision()) {
      const n = this.computeExtent(this.extent_);
      (isNaN(n[0]) || isNaN(n[1])) && rs(n),
        (this.extentRevision_ = this.getRevision());
    }
    return jv(this.extent_, e);
  }
  rotate(e, n) {
    W();
  }
  scale(e, n, i) {
    W();
  }
  simplify(e) {
    return this.getSimplifiedGeometry(e * e);
  }
  getSimplifiedGeometry(e) {
    return W();
  }
  getType() {
    return W();
  }
  applyTransform(e) {
    W();
  }
  intersectsExtent(e) {
    return W();
  }
  translate(e, n) {
    W();
  }
  transform(e, n) {
    const i = xe(e),
      r =
        i.getUnits() == "tile-pixels"
          ? function (s, o, l) {
              const a = i.getExtent(),
                u = i.getWorldExtent(),
                c = xt(u) / xt(a);
              return (
                Ln(Tg, u[0], u[3], c, -c, 0, 0, 0),
                ci(s, 0, s.length, l, Tg, o),
                qr(i, n)(s, o, l)
              );
            }
          : qr(i, n);
    return this.applyTransform(r), this;
  }
}
class er extends V0 {
  constructor() {
    super(), (this.layout = "XY"), (this.stride = 2), this.flatCoordinates;
  }
  computeExtent(e) {
    return _d(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      e,
    );
  }
  getCoordinates() {
    return W();
  }
  getFirstCoordinate() {
    return this.flatCoordinates.slice(0, this.stride);
  }
  getFlatCoordinates() {
    return this.flatCoordinates;
  }
  getLastCoordinate() {
    return this.flatCoordinates.slice(
      this.flatCoordinates.length - this.stride,
    );
  }
  getLayout() {
    return this.layout;
  }
  getSimplifiedGeometry(e) {
    if (
      (this.simplifiedGeometryRevision !== this.getRevision() &&
        ((this.simplifiedGeometryMaxMinSquaredTolerance = 0),
        (this.simplifiedGeometryRevision = this.getRevision())),
      e < 0 ||
        (this.simplifiedGeometryMaxMinSquaredTolerance !== 0 &&
          e <= this.simplifiedGeometryMaxMinSquaredTolerance))
    )
      return this;
    const n = this.getSimplifiedGeometryInternal(e);
    return n.getFlatCoordinates().length < this.flatCoordinates.length
      ? n
      : ((this.simplifiedGeometryMaxMinSquaredTolerance = e), this);
  }
  getSimplifiedGeometryInternal(e) {
    return this;
  }
  getStride() {
    return this.stride;
  }
  setFlatCoordinates(e, n) {
    (this.stride = Rg(e)), (this.layout = e), (this.flatCoordinates = n);
  }
  setCoordinates(e, n) {
    W();
  }
  setLayout(e, n, i) {
    let r;
    if (e) r = Rg(e);
    else {
      for (let s = 0; s < i; ++s) {
        if (n.length === 0) {
          (this.layout = "XY"), (this.stride = 2);
          return;
        }
        n = n[0];
      }
      (r = n.length), (e = tr(r));
    }
    (this.layout = e), (this.stride = r);
  }
  applyTransform(e) {
    this.flatCoordinates &&
      (e(this.flatCoordinates, this.flatCoordinates, this.stride),
      this.changed());
  }
  rotate(e, n) {
    const i = this.getFlatCoordinates();
    if (i) {
      const r = this.getStride();
      Y0(i, 0, i.length, r, e, n, i), this.changed();
    }
  }
  scale(e, n, i) {
    n === void 0 && (n = e), i || (i = mi(this.getExtent()));
    const r = this.getFlatCoordinates();
    if (r) {
      const s = this.getStride();
      hE(r, 0, r.length, s, e, n, i, r), this.changed();
    }
  }
  translate(e, n) {
    const i = this.getFlatCoordinates();
    if (i) {
      const r = this.getStride();
      dE(i, 0, i.length, r, e, n, i), this.changed();
    }
  }
}
function tr(t) {
  let e;
  return t == 2 ? (e = "XY") : t == 3 ? (e = "XYZ") : t == 4 && (e = "XYZM"), e;
}
function Rg(t) {
  let e;
  return (
    t == "XY"
      ? (e = 2)
      : t == "XYZ" || t == "XYM"
        ? (e = 3)
        : t == "XYZM" && (e = 4),
    e
  );
}
function fE(t, e, n) {
  const i = t.getFlatCoordinates();
  if (!i) return null;
  const r = t.getStride();
  return ci(i, 0, i.length, r, e, n);
}
function Ig(t, e, n, i, r, s, o) {
  const l = t[e],
    a = t[e + 1],
    u = t[n] - l,
    c = t[n + 1] - a;
  let h;
  if (u === 0 && c === 0) h = e;
  else {
    const d = ((r - l) * u + (s - a) * c) / (u * u + c * c);
    if (d > 1) h = n;
    else if (d > 0) {
      for (let f = 0; f < i; ++f) o[f] = _t(t[e + f], t[n + f], d);
      o.length = i;
      return;
    } else h = e;
  }
  for (let d = 0; d < i; ++d) o[d] = t[h + d];
  o.length = i;
}
function Cd(t, e, n, i, r) {
  let s = t[e],
    o = t[e + 1];
  for (e += i; e < n; e += i) {
    const l = t[e],
      a = t[e + 1],
      u = Bi(s, o, l, a);
    u > r && (r = u), (s = l), (o = a);
  }
  return r;
}
function Sd(t, e, n, i, r) {
  for (let s = 0, o = n.length; s < o; ++s) {
    const l = n[s];
    (r = Cd(t, e, l, i, r)), (e = l);
  }
  return r;
}
function gE(t, e, n, i, r) {
  for (let s = 0, o = n.length; s < o; ++s) {
    const l = n[s];
    (r = Sd(t, e, l, i, r)), (e = l[l.length - 1]);
  }
  return r;
}
function Td(t, e, n, i, r, s, o, l, a, u, c) {
  if (e == n) return u;
  let h, d;
  if (r === 0) {
    if (((d = Bi(o, l, t[e], t[e + 1])), d < u)) {
      for (h = 0; h < i; ++h) a[h] = t[e + h];
      return (a.length = i), d;
    }
    return u;
  }
  c = c || [NaN, NaN];
  let f = e + i;
  for (; f < n; )
    if ((Ig(t, f - i, f, i, o, l, c), (d = Bi(o, l, c[0], c[1])), d < u)) {
      for (u = d, h = 0; h < i; ++h) a[h] = c[h];
      (a.length = i), (f += i);
    } else f += i * Math.max(((Math.sqrt(d) - Math.sqrt(u)) / r) | 0, 1);
  if (s && (Ig(t, n - i, e, i, o, l, c), (d = Bi(o, l, c[0], c[1])), d < u)) {
    for (u = d, h = 0; h < i; ++h) a[h] = c[h];
    a.length = i;
  }
  return u;
}
function Rd(t, e, n, i, r, s, o, l, a, u, c) {
  c = c || [NaN, NaN];
  for (let h = 0, d = n.length; h < d; ++h) {
    const f = n[h];
    (u = Td(t, e, f, i, r, s, o, l, a, u, c)), (e = f);
  }
  return u;
}
function mE(t, e, n, i, r, s, o, l, a, u, c) {
  c = c || [NaN, NaN];
  for (let h = 0, d = n.length; h < d; ++h) {
    const f = n[h];
    (u = Rd(t, e, f, i, r, s, o, l, a, u, c)), (e = f[f.length - 1]);
  }
  return u;
}
function pE(t, e, n, i) {
  for (let r = 0, s = n.length; r < s; ++r) t[e++] = n[r];
  return e;
}
function Ya(t, e, n, i) {
  for (let r = 0, s = n.length; r < s; ++r) {
    const o = n[r];
    for (let l = 0; l < i; ++l) t[e++] = o[l];
  }
  return e;
}
function Oo(t, e, n, i, r) {
  r = r || [];
  let s = 0;
  for (let o = 0, l = n.length; o < l; ++o) {
    const a = Ya(t, e, n[o], i);
    (r[s++] = a), (e = a);
  }
  return (r.length = s), r;
}
function K0(t, e, n, i, r) {
  r = r || [];
  let s = 0;
  for (let o = 0, l = n.length; o < l; ++o) {
    const a = Oo(t, e, n[o], i, r[s]);
    a.length === 0 && (a[0] = e), (r[s++] = a), (e = a[a.length - 1]);
  }
  return (r.length = s), r;
}
function Va(t, e, n, i, r, s, o) {
  const l = (n - e) / i;
  if (l < 3) {
    for (; e < n; e += i) (s[o++] = t[e]), (s[o++] = t[e + 1]);
    return o;
  }
  const a = new Array(l);
  (a[0] = 1), (a[l - 1] = 1);
  const u = [e, n - i];
  let c = 0;
  for (; u.length > 0; ) {
    const h = u.pop(),
      d = u.pop();
    let f = 0;
    const p = t[d],
      _ = t[d + 1],
      v = t[h],
      g = t[h + 1];
    for (let m = d + i; m < h; m += i) {
      const y = t[m],
        E = t[m + 1],
        x = qv(y, E, p, _, v, g);
      x > f && ((c = m), (f = x));
    }
    f > r &&
      ((a[(c - e) / i] = 1),
      d + i < c && u.push(d, c),
      c + i < h && u.push(c, h));
  }
  for (let h = 0; h < l; ++h)
    a[h] && ((s[o++] = t[e + h * i]), (s[o++] = t[e + h * i + 1]));
  return o;
}
function Z0(t, e, n, i, r, s, o, l) {
  for (let a = 0, u = n.length; a < u; ++a) {
    const c = n[a];
    (o = Va(t, e, c, i, r, s, o)), l.push(o), (e = c);
  }
  return o;
}
function Mi(t, e) {
  return e * Math.round(t / e);
}
function _E(t, e, n, i, r, s, o) {
  if (e == n) return o;
  let l = Mi(t[e], r),
    a = Mi(t[e + 1], r);
  (e += i), (s[o++] = l), (s[o++] = a);
  let u, c;
  do
    if (((u = Mi(t[e], r)), (c = Mi(t[e + 1], r)), (e += i), e == n))
      return (s[o++] = u), (s[o++] = c), o;
  while (u == l && c == a);
  for (; e < n; ) {
    const h = Mi(t[e], r),
      d = Mi(t[e + 1], r);
    if (((e += i), h == u && d == c)) continue;
    const f = u - l,
      p = c - a,
      _ = h - l,
      v = d - a;
    if (
      f * v == p * _ &&
      ((f < 0 && _ < f) || f == _ || (f > 0 && _ > f)) &&
      ((p < 0 && v < p) || p == v || (p > 0 && v > p))
    ) {
      (u = h), (c = d);
      continue;
    }
    (s[o++] = u), (s[o++] = c), (l = u), (a = c), (u = h), (c = d);
  }
  return (s[o++] = u), (s[o++] = c), o;
}
function Id(t, e, n, i, r, s, o, l) {
  for (let a = 0, u = n.length; a < u; ++a) {
    const c = n[a];
    (o = _E(t, e, c, i, r, s, o)), l.push(o), (e = c);
  }
  return o;
}
function yE(t, e, n, i, r, s, o, l) {
  for (let a = 0, u = n.length; a < u; ++a) {
    const c = n[a],
      h = [];
    (o = Id(t, e, c, i, r, s, o, h)), l.push(h), (e = c[c.length - 1]);
  }
  return o;
}
function Jn(t, e, n, i, r) {
  r = r !== void 0 ? r : [];
  let s = 0;
  for (let o = e; o < n; o += i) r[s++] = t.slice(o, o + i);
  return (r.length = s), r;
}
function fo(t, e, n, i, r) {
  r = r !== void 0 ? r : [];
  let s = 0;
  for (let o = 0, l = n.length; o < l; ++o) {
    const a = n[o];
    (r[s++] = Jn(t, e, a, i, r[s])), (e = a);
  }
  return (r.length = s), r;
}
function sh(t, e, n, i, r) {
  r = r !== void 0 ? r : [];
  let s = 0;
  for (let o = 0, l = n.length; o < l; ++o) {
    const a = n[o];
    (r[s++] = a.length === 1 && a[0] === e ? [] : fo(t, e, a, i, r[s])),
      (e = a[a.length - 1]);
  }
  return (r.length = s), r;
}
function $0(t, e, n, i) {
  let r = 0,
    s = t[n - i],
    o = t[n - i + 1];
  for (; e < n; e += i) {
    const l = t[e],
      a = t[e + 1];
    (r += o * l - s * a), (s = l), (o = a);
  }
  return r / 2;
}
function H0(t, e, n, i) {
  let r = 0;
  for (let s = 0, o = n.length; s < o; ++s) {
    const l = n[s];
    (r += $0(t, e, l, i)), (e = l);
  }
  return r;
}
function vE(t, e, n, i) {
  let r = 0;
  for (let s = 0, o = n.length; s < o; ++s) {
    const l = n[s];
    (r += H0(t, e, l, i)), (e = l[l.length - 1]);
  }
  return r;
}
class go extends er {
  constructor(e, n) {
    super(),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      n !== void 0 && !Array.isArray(e[0])
        ? this.setFlatCoordinates(n, e)
        : this.setCoordinates(e, n);
  }
  clone() {
    return new go(this.flatCoordinates.slice(), this.layout);
  }
  closestPointXY(e, n, i, r) {
    return r < Qi(this.getExtent(), e, n)
      ? r
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            Cd(
              this.flatCoordinates,
              0,
              this.flatCoordinates.length,
              this.stride,
              0,
            ),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        Td(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          this.maxDelta_,
          !0,
          e,
          n,
          i,
          r,
        ));
  }
  getArea() {
    return $0(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }
  getCoordinates() {
    return Jn(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }
  getSimplifiedGeometryInternal(e) {
    const n = [];
    return (
      (n.length = Va(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        e,
        n,
        0,
      )),
      new go(n, "XY")
    );
  }
  getType() {
    return "LinearRing";
  }
  intersectsExtent(e) {
    return !1;
  }
  setCoordinates(e, n) {
    this.setLayout(n, e, 1),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = Ya(
        this.flatCoordinates,
        0,
        e,
        this.stride,
      )),
      this.changed();
  }
}
class On extends er {
  constructor(e, n) {
    super(), this.setCoordinates(e, n);
  }
  clone() {
    const e = new On(this.flatCoordinates.slice(), this.layout);
    return e.applyProperties(this), e;
  }
  closestPointXY(e, n, i, r) {
    const s = this.flatCoordinates,
      o = Bi(e, n, s[0], s[1]);
    if (o < r) {
      const l = this.stride;
      for (let a = 0; a < l; ++a) i[a] = s[a];
      return (i.length = l), o;
    }
    return r;
  }
  getCoordinates() {
    return this.flatCoordinates.slice();
  }
  computeExtent(e) {
    return F0(this.flatCoordinates, e);
  }
  getType() {
    return "Point";
  }
  intersectsExtent(e) {
    return pd(e, this.flatCoordinates[0], this.flatCoordinates[1]);
  }
  setCoordinates(e, n) {
    this.setLayout(n, e, 0),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = pE(
        this.flatCoordinates,
        0,
        e,
        this.stride,
      )),
      this.changed();
  }
}
function EE(t, e, n, i, r) {
  return !z0(r, function (o) {
    return !ji(t, e, n, i, o[0], o[1]);
  });
}
function ji(t, e, n, i, r, s) {
  let o = 0,
    l = t[n - i],
    a = t[n - i + 1];
  for (; e < n; e += i) {
    const u = t[e],
      c = t[e + 1];
    a <= s
      ? c > s && (u - l) * (s - a) - (r - l) * (c - a) > 0 && o++
      : c <= s && (u - l) * (s - a) - (r - l) * (c - a) < 0 && o--,
      (l = u),
      (a = c);
  }
  return o !== 0;
}
function kd(t, e, n, i, r, s) {
  if (n.length === 0 || !ji(t, e, n[0], i, r, s)) return !1;
  for (let o = 1, l = n.length; o < l; ++o)
    if (ji(t, n[o - 1], n[o], i, r, s)) return !1;
  return !0;
}
function xE(t, e, n, i, r, s) {
  if (n.length === 0) return !1;
  for (let o = 0, l = n.length; o < l; ++o) {
    const a = n[o];
    if (kd(t, e, a, i, r, s)) return !0;
    e = a[a.length - 1];
  }
  return !1;
}
function Pd(t, e, n, i, r, s, o) {
  let l, a, u, c, h, d, f;
  const p = r[s + 1],
    _ = [];
  for (let m = 0, y = n.length; m < y; ++m) {
    const E = n[m];
    for (c = t[E - i], d = t[E - i + 1], l = e; l < E; l += i)
      (h = t[l]),
        (f = t[l + 1]),
        ((p <= d && f <= p) || (d <= p && p <= f)) &&
          ((u = ((p - d) / (f - d)) * (h - c) + c), _.push(u)),
        (c = h),
        (d = f);
  }
  let v = NaN,
    g = -1 / 0;
  for (_.sort(fi), c = _[0], l = 1, a = _.length; l < a; ++l) {
    h = _[l];
    const m = Math.abs(h - c);
    m > g && ((u = (c + h) / 2), kd(t, e, n, i, u, p) && ((v = u), (g = m))),
      (c = h);
  }
  return isNaN(v) && (v = r[s]), o ? (o.push(v, p, g), o) : [v, p, g];
}
function q0(t, e, n, i, r) {
  let s = [];
  for (let o = 0, l = n.length; o < l; ++o) {
    const a = n[o];
    (s = Pd(t, e, a, i, r, 2 * o, s)), (e = a[a.length - 1]);
  }
  return s;
}
function Q0(t, e, n, i, r) {
  let s;
  for (e += i; e < n; e += i)
    if (((s = r(t.slice(e - i, e), t.slice(e, e + i))), s)) return s;
  return !1;
}
function Ka(t, e, n, i, r) {
  const s = D0(Ft(), t, e, n, i);
  return at(r, s)
    ? Di(r, s) ||
      (s[0] >= r[0] && s[2] <= r[2]) ||
      (s[1] >= r[1] && s[3] <= r[3])
      ? !0
      : Q0(t, e, n, i, function (o, l) {
          return Gv(r, o, l);
        })
    : !1;
}
function wE(t, e, n, i, r) {
  for (let s = 0, o = n.length; s < o; ++s) {
    if (Ka(t, e, n[s], i, r)) return !0;
    e = n[s];
  }
  return !1;
}
function J0(t, e, n, i, r) {
  return !!(
    Ka(t, e, n, i, r) ||
    ji(t, e, n, i, r[0], r[1]) ||
    ji(t, e, n, i, r[0], r[3]) ||
    ji(t, e, n, i, r[2], r[1]) ||
    ji(t, e, n, i, r[2], r[3])
  );
}
function e_(t, e, n, i, r) {
  if (!J0(t, e, n[0], i, r)) return !1;
  if (n.length === 1) return !0;
  for (let s = 1, o = n.length; s < o; ++s)
    if (EE(t, n[s - 1], n[s], i, r) && !Ka(t, n[s - 1], n[s], i, r)) return !1;
  return !0;
}
function CE(t, e, n, i, r) {
  for (let s = 0, o = n.length; s < o; ++s) {
    const l = n[s];
    if (e_(t, e, l, i, r)) return !0;
    e = l[l.length - 1];
  }
  return !1;
}
function SE(t, e, n, i) {
  for (; e < n - i; ) {
    for (let r = 0; r < i; ++r) {
      const s = t[e + r];
      (t[e + r] = t[n - i + r]), (t[n - i + r] = s);
    }
    (e += i), (n -= i);
  }
}
function Ld(t, e, n, i) {
  let r = 0,
    s = t[n - i],
    o = t[n - i + 1];
  for (; e < n; e += i) {
    const l = t[e],
      a = t[e + 1];
    (r += (l - s) * (a + o)), (s = l), (o = a);
  }
  return r === 0 ? void 0 : r > 0;
}
function Md(t, e, n, i, r) {
  r = r !== void 0 ? r : !1;
  for (let s = 0, o = n.length; s < o; ++s) {
    const l = n[s],
      a = Ld(t, e, l, i);
    if (s === 0) {
      if ((r && a) || (!r && !a)) return !1;
    } else if ((r && !a) || (!r && a)) return !1;
    e = l;
  }
  return !0;
}
function t_(t, e, n, i, r) {
  for (let s = 0, o = n.length; s < o; ++s) {
    const l = n[s];
    if (!Md(t, e, l, i, r)) return !1;
    l.length && (e = l[l.length - 1]);
  }
  return !0;
}
function la(t, e, n, i, r) {
  r = r !== void 0 ? r : !1;
  for (let s = 0, o = n.length; s < o; ++s) {
    const l = n[s],
      a = Ld(t, e, l, i);
    (s === 0 ? (r && a) || (!r && !a) : (r && !a) || (!r && a)) &&
      SE(t, e, l, i),
      (e = l);
  }
  return e;
}
function oh(t, e, n, i, r) {
  for (let s = 0, o = n.length; s < o; ++s) e = la(t, e, n[s], i, r);
  return e;
}
function TE(t, e) {
  const n = [];
  let i = 0,
    r = 0,
    s;
  for (let o = 0, l = e.length; o < l; ++o) {
    const a = e[o],
      u = Ld(t, i, a, 2);
    if ((s === void 0 && (s = u), u === s)) n.push(e.slice(r, o + 1));
    else {
      if (n.length === 0) continue;
      n[n.length - 1].push(e[r]);
    }
    (r = o + 1), (i = a);
  }
  return n;
}
class pi extends er {
  constructor(e, n, i) {
    super(),
      (this.ends_ = []),
      (this.flatInteriorPointRevision_ = -1),
      (this.flatInteriorPoint_ = null),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      (this.orientedRevision_ = -1),
      (this.orientedFlatCoordinates_ = null),
      n !== void 0 && i
        ? (this.setFlatCoordinates(n, e), (this.ends_ = i))
        : this.setCoordinates(e, n);
  }
  appendLinearRing(e) {
    this.flatCoordinates
      ? on(this.flatCoordinates, e.getFlatCoordinates())
      : (this.flatCoordinates = e.getFlatCoordinates().slice()),
      this.ends_.push(this.flatCoordinates.length),
      this.changed();
  }
  clone() {
    const e = new pi(
      this.flatCoordinates.slice(),
      this.layout,
      this.ends_.slice(),
    );
    return e.applyProperties(this), e;
  }
  closestPointXY(e, n, i, r) {
    return r < Qi(this.getExtent(), e, n)
      ? r
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            Sd(this.flatCoordinates, 0, this.ends_, this.stride, 0),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        Rd(
          this.flatCoordinates,
          0,
          this.ends_,
          this.stride,
          this.maxDelta_,
          !0,
          e,
          n,
          i,
          r,
        ));
  }
  containsXY(e, n) {
    return kd(
      this.getOrientedFlatCoordinates(),
      0,
      this.ends_,
      this.stride,
      e,
      n,
    );
  }
  getArea() {
    return H0(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride);
  }
  getCoordinates(e) {
    let n;
    return (
      e !== void 0
        ? ((n = this.getOrientedFlatCoordinates().slice()),
          la(n, 0, this.ends_, this.stride, e))
        : (n = this.flatCoordinates),
      fo(n, 0, this.ends_, this.stride)
    );
  }
  getEnds() {
    return this.ends_;
  }
  getFlatInteriorPoint() {
    if (this.flatInteriorPointRevision_ != this.getRevision()) {
      const e = mi(this.getExtent());
      (this.flatInteriorPoint_ = Pd(
        this.getOrientedFlatCoordinates(),
        0,
        this.ends_,
        this.stride,
        e,
        0,
      )),
        (this.flatInteriorPointRevision_ = this.getRevision());
    }
    return this.flatInteriorPoint_;
  }
  getInteriorPoint() {
    return new On(this.getFlatInteriorPoint(), "XYM");
  }
  getLinearRingCount() {
    return this.ends_.length;
  }
  getLinearRing(e) {
    return e < 0 || this.ends_.length <= e
      ? null
      : new go(
          this.flatCoordinates.slice(
            e === 0 ? 0 : this.ends_[e - 1],
            this.ends_[e],
          ),
          this.layout,
        );
  }
  getLinearRings() {
    const e = this.layout,
      n = this.flatCoordinates,
      i = this.ends_,
      r = [];
    let s = 0;
    for (let o = 0, l = i.length; o < l; ++o) {
      const a = i[o],
        u = new go(n.slice(s, a), e);
      r.push(u), (s = a);
    }
    return r;
  }
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const e = this.flatCoordinates;
      Md(e, 0, this.ends_, this.stride)
        ? (this.orientedFlatCoordinates_ = e)
        : ((this.orientedFlatCoordinates_ = e.slice()),
          (this.orientedFlatCoordinates_.length = la(
            this.orientedFlatCoordinates_,
            0,
            this.ends_,
            this.stride,
          ))),
        (this.orientedRevision_ = this.getRevision());
    }
    return this.orientedFlatCoordinates_;
  }
  getSimplifiedGeometryInternal(e) {
    const n = [],
      i = [];
    return (
      (n.length = Id(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        Math.sqrt(e),
        n,
        0,
        i,
      )),
      new pi(n, "XY", i)
    );
  }
  getType() {
    return "Polygon";
  }
  intersectsExtent(e) {
    return e_(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, e);
  }
  setCoordinates(e, n) {
    this.setLayout(n, e, 2),
      this.flatCoordinates || (this.flatCoordinates = []);
    const i = Oo(this.flatCoordinates, 0, e, this.stride, this.ends_);
    (this.flatCoordinates.length = i.length === 0 ? 0 : i[i.length - 1]),
      this.changed();
  }
}
function kg(t) {
  if (Lo(t)) throw new Error("Cannot create polygon from empty extent");
  const e = t[0],
    n = t[1],
    i = t[2],
    r = t[3],
    s = [e, n, e, r, i, r, i, n, e, n];
  return new pi(s, "XY", [s.length]);
}
const ln = {
  PRERENDER: "prerender",
  POSTRENDER: "postrender",
  PRECOMPOSE: "precompose",
  POSTCOMPOSE: "postcompose",
  RENDERCOMPLETE: "rendercomplete",
};
class Ao {
  constructor(e) {
    (e = e || {}), (this.color_ = e.color !== void 0 ? e.color : null);
  }
  clone() {
    const e = this.getColor();
    return new Ao({ color: Array.isArray(e) ? e.slice() : e || void 0 });
  }
  getColor() {
    return this.color_;
  }
  setColor(e) {
    this.color_ = e;
  }
}
function aa(t, e, n, i, r, s, o) {
  let l, a;
  const u = (n - e) / i;
  if (u === 1) l = e;
  else if (u === 2) (l = e), (a = r);
  else if (u !== 0) {
    let c = t[e],
      h = t[e + 1],
      d = 0;
    const f = [0];
    for (let v = e + i; v < n; v += i) {
      const g = t[v],
        m = t[v + 1];
      (d += Math.sqrt((g - c) * (g - c) + (m - h) * (m - h))),
        f.push(d),
        (c = g),
        (h = m);
    }
    const p = r * d,
      _ = wv(f, p);
    _ < 0
      ? ((a = (p - f[-_ - 2]) / (f[-_ - 1] - f[-_ - 2])),
        (l = e + (-_ - 2) * i))
      : (l = e + _ * i);
  }
  (o = o > 1 ? o : 2), (s = s || new Array(o));
  for (let c = 0; c < o; ++c)
    s[c] =
      l === void 0
        ? NaN
        : a === void 0
          ? t[l + c]
          : _t(t[l + c], t[l + i + c], a);
  return s;
}
function lh(t, e, n, i, r, s) {
  if (n == e) return null;
  let o;
  if (r < t[e + i - 1])
    return s ? ((o = t.slice(e, e + i)), (o[i - 1] = r), o) : null;
  if (t[n - 1] < r)
    return s ? ((o = t.slice(n - i, n)), (o[i - 1] = r), o) : null;
  if (r == t[e + i - 1]) return t.slice(e, e + i);
  let l = e / i,
    a = n / i;
  for (; l < a; ) {
    const d = (l + a) >> 1;
    r < t[(d + 1) * i - 1] ? (a = d) : (l = d + 1);
  }
  const u = t[l * i - 1];
  if (r == u) return t.slice((l - 1) * i, (l - 1) * i + i);
  const c = t[(l + 1) * i - 1],
    h = (r - u) / (c - u);
  o = [];
  for (let d = 0; d < i - 1; ++d)
    o.push(_t(t[(l - 1) * i + d], t[l * i + d], h));
  return o.push(r), o;
}
function RE(t, e, n, i, r, s, o) {
  if (o) return lh(t, e, n[n.length - 1], i, r, s);
  let l;
  if (r < t[i - 1]) return s ? ((l = t.slice(0, i)), (l[i - 1] = r), l) : null;
  if (t[t.length - 1] < r)
    return s ? ((l = t.slice(t.length - i)), (l[i - 1] = r), l) : null;
  for (let a = 0, u = n.length; a < u; ++a) {
    const c = n[a];
    if (e != c) {
      if (r < t[e + i - 1]) return null;
      if (r <= t[c - 1]) return lh(t, e, c, i, r, !1);
      e = c;
    }
  }
  return null;
}
function n_(t, e, n, i) {
  let r = t[e],
    s = t[e + 1],
    o = 0;
  for (let l = e + i; l < n; l += i) {
    const a = t[l],
      u = t[l + 1];
    (o += Math.sqrt((a - r) * (a - r) + (u - s) * (u - s))), (r = a), (s = u);
  }
  return o;
}
class ua extends er {
  constructor(e, n) {
    super(),
      (this.flatMidpoint_ = null),
      (this.flatMidpointRevision_ = -1),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      n !== void 0 && !Array.isArray(e[0])
        ? this.setFlatCoordinates(n, e)
        : this.setCoordinates(e, n);
  }
  appendCoordinate(e) {
    on(this.flatCoordinates, e), this.changed();
  }
  clone() {
    const e = new ua(this.flatCoordinates.slice(), this.layout);
    return e.applyProperties(this), e;
  }
  closestPointXY(e, n, i, r) {
    return r < Qi(this.getExtent(), e, n)
      ? r
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            Cd(
              this.flatCoordinates,
              0,
              this.flatCoordinates.length,
              this.stride,
              0,
            ),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        Td(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          this.maxDelta_,
          !1,
          e,
          n,
          i,
          r,
        ));
  }
  forEachSegment(e) {
    return Q0(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      e,
    );
  }
  getCoordinateAtM(e, n) {
    return this.layout != "XYM" && this.layout != "XYZM"
      ? null
      : ((n = n !== void 0 ? n : !1),
        lh(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          e,
          n,
        ));
  }
  getCoordinates() {
    return Jn(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }
  getCoordinateAt(e, n) {
    return aa(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      e,
      n,
      this.stride,
    );
  }
  getLength() {
    return n_(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }
  getFlatMidpoint() {
    return (
      this.flatMidpointRevision_ != this.getRevision() &&
        ((this.flatMidpoint_ = this.getCoordinateAt(
          0.5,
          this.flatMidpoint_ ?? void 0,
        )),
        (this.flatMidpointRevision_ = this.getRevision())),
      this.flatMidpoint_
    );
  }
  getSimplifiedGeometryInternal(e) {
    const n = [];
    return (
      (n.length = Va(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        e,
        n,
        0,
      )),
      new ua(n, "XY")
    );
  }
  getType() {
    return "LineString";
  }
  intersectsExtent(e) {
    return Ka(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      e,
    );
  }
  setCoordinates(e, n) {
    this.setLayout(n, e, 1),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = Ya(
        this.flatCoordinates,
        0,
        e,
        this.stride,
      )),
      this.changed();
  }
}
const ah = ua;
class Za {
  constructor(e) {
    (e = e || {}),
      (this.color_ = e.color !== void 0 ? e.color : null),
      (this.lineCap_ = e.lineCap),
      (this.lineDash_ = e.lineDash !== void 0 ? e.lineDash : null),
      (this.lineDashOffset_ = e.lineDashOffset),
      (this.lineJoin_ = e.lineJoin),
      (this.miterLimit_ = e.miterLimit),
      (this.width_ = e.width);
  }
  clone() {
    const e = this.getColor();
    return new Za({
      color: Array.isArray(e) ? e.slice() : e || void 0,
      lineCap: this.getLineCap(),
      lineDash: this.getLineDash() ? this.getLineDash().slice() : void 0,
      lineDashOffset: this.getLineDashOffset(),
      lineJoin: this.getLineJoin(),
      miterLimit: this.getMiterLimit(),
      width: this.getWidth(),
    });
  }
  getColor() {
    return this.color_;
  }
  getLineCap() {
    return this.lineCap_;
  }
  getLineDash() {
    return this.lineDash_;
  }
  getLineDashOffset() {
    return this.lineDashOffset_;
  }
  getLineJoin() {
    return this.lineJoin_;
  }
  getMiterLimit() {
    return this.miterLimit_;
  }
  getWidth() {
    return this.width_;
  }
  setColor(e) {
    this.color_ = e;
  }
  setLineCap(e) {
    this.lineCap_ = e;
  }
  setLineDash(e) {
    this.lineDash_ = e;
  }
  setLineDashOffset(e) {
    this.lineDashOffset_ = e;
  }
  setLineJoin(e) {
    this.lineJoin_ = e;
  }
  setMiterLimit(e) {
    this.miterLimit_ = e;
  }
  setWidth(e) {
    this.width_ = e;
  }
}
const le = { IDLE: 0, LOADING: 1, LOADED: 2, ERROR: 3, EMPTY: 4 };
function Pg(t) {
  return t[0] > 0 && t[1] > 0;
}
function IE(t, e, n) {
  return (
    n === void 0 && (n = [0, 0]),
    (n[0] = (t[0] * e + 0.5) | 0),
    (n[1] = (t[1] * e + 0.5) | 0),
    n
  );
}
function vt(t, e) {
  return Array.isArray(t)
    ? t
    : (e === void 0 ? (e = [t, t]) : ((e[0] = t), (e[1] = t)), e);
}
class $a {
  constructor(e) {
    (this.opacity_ = e.opacity),
      (this.rotateWithView_ = e.rotateWithView),
      (this.rotation_ = e.rotation),
      (this.scale_ = e.scale),
      (this.scaleArray_ = vt(e.scale)),
      (this.displacement_ = e.displacement),
      (this.declutterMode_ = e.declutterMode);
  }
  clone() {
    const e = this.getScale();
    return new $a({
      opacity: this.getOpacity(),
      scale: Array.isArray(e) ? e.slice() : e,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode(),
    });
  }
  getOpacity() {
    return this.opacity_;
  }
  getRotateWithView() {
    return this.rotateWithView_;
  }
  getRotation() {
    return this.rotation_;
  }
  getScale() {
    return this.scale_;
  }
  getScaleArray() {
    return this.scaleArray_;
  }
  getDisplacement() {
    return this.displacement_;
  }
  getDeclutterMode() {
    return this.declutterMode_;
  }
  getAnchor() {
    return W();
  }
  getImage(e) {
    return W();
  }
  getHitDetectionImage() {
    return W();
  }
  getPixelRatio(e) {
    return 1;
  }
  getImageState() {
    return W();
  }
  getImageSize() {
    return W();
  }
  getOrigin() {
    return W();
  }
  getSize() {
    return W();
  }
  setDisplacement(e) {
    this.displacement_ = e;
  }
  setOpacity(e) {
    this.opacity_ = e;
  }
  setRotateWithView(e) {
    this.rotateWithView_ = e;
  }
  setRotation(e) {
    this.rotation_ = e;
  }
  setScale(e) {
    (this.scale_ = e), (this.scaleArray_ = vt(e));
  }
  listenImageChange(e) {
    W();
  }
  load() {
    W();
  }
  unlistenImageChange(e) {
    W();
  }
}
const mo = {
  name: "rgb",
  min: [0, 0, 0],
  max: [255, 255, 255],
  channel: ["red", "green", "blue"],
  alias: ["RGB"],
};
var Ne = {
  name: "xyz",
  min: [0, 0, 0],
  channel: ["X", "Y", "Z"],
  alias: ["XYZ", "ciexyz", "cie1931"],
};
Ne.whitepoint = {
  2: {
    A: [109.85, 100, 35.585],
    C: [98.074, 100, 118.232],
    D50: [96.422, 100, 82.521],
    D55: [95.682, 100, 92.149],
    D65: [95.045592705167, 100, 108.9057750759878],
    D75: [94.972, 100, 122.638],
    F2: [99.187, 100, 67.395],
    F7: [95.044, 100, 108.755],
    F11: [100.966, 100, 64.37],
    E: [100, 100, 100],
  },
  10: {
    A: [111.144, 100, 35.2],
    C: [97.285, 100, 116.145],
    D50: [96.72, 100, 81.427],
    D55: [95.799, 100, 90.926],
    D65: [94.811, 100, 107.304],
    D75: [94.416, 100, 120.641],
    F2: [103.28, 100, 69.026],
    F7: [95.792, 100, 107.687],
    F11: [103.866, 100, 65.627],
    E: [100, 100, 100],
  },
};
Ne.max = Ne.whitepoint[2].D65;
Ne.rgb = function (t, e) {
  e = e || Ne.whitepoint[2].E;
  var n = t[0] / e[0],
    i = t[1] / e[1],
    r = t[2] / e[2],
    s,
    o,
    l;
  return (
    (s = n * 3.240969941904521 + i * -1.537383177570093 + r * -0.498610760293),
    (o = n * -0.96924363628087 + i * 1.87596750150772 + r * 0.041555057407175),
    (l = n * 0.055630079696993 + i * -0.20397695888897 + r * 1.056971514242878),
    (s =
      s > 0.0031308 ? 1.055 * Math.pow(s, 1 / 2.4) - 0.055 : (s = s * 12.92)),
    (o =
      o > 0.0031308 ? 1.055 * Math.pow(o, 1 / 2.4) - 0.055 : (o = o * 12.92)),
    (l =
      l > 0.0031308 ? 1.055 * Math.pow(l, 1 / 2.4) - 0.055 : (l = l * 12.92)),
    (s = Math.min(Math.max(0, s), 1)),
    (o = Math.min(Math.max(0, o), 1)),
    (l = Math.min(Math.max(0, l), 1)),
    [s * 255, o * 255, l * 255]
  );
};
mo.xyz = function (t, e) {
  var n = t[0] / 255,
    i = t[1] / 255,
    r = t[2] / 255;
  (n = n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92),
    (i = i > 0.04045 ? Math.pow((i + 0.055) / 1.055, 2.4) : i / 12.92),
    (r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92);
  var s = n * 0.41239079926595 + i * 0.35758433938387 + r * 0.18048078840183,
    o = n * 0.21263900587151 + i * 0.71516867876775 + r * 0.072192315360733,
    l = n * 0.019330818715591 + i * 0.11919477979462 + r * 0.95053215224966;
  return (e = e || Ne.whitepoint[2].E), [s * e[0], o * e[1], l * e[2]];
};
const Od = {
  name: "luv",
  min: [0, -134, -140],
  max: [100, 224, 122],
  channel: ["lightness", "u", "v"],
  alias: ["LUV", "cieluv", "cie1976"],
  xyz: function (t, e, n) {
    var i, r, s, o, l, a, u, c, h, d, f, p, _;
    if (((s = t[0]), (o = t[1]), (l = t[2]), s === 0)) return [0, 0, 0];
    var v = 0.0011070564598794539;
    return (
      (e = e || "D65"),
      (n = n || 2),
      (h = Ne.whitepoint[n][e][0]),
      (d = Ne.whitepoint[n][e][1]),
      (f = Ne.whitepoint[n][e][2]),
      (p = (4 * h) / (h + 15 * d + 3 * f)),
      (_ = (9 * d) / (h + 15 * d + 3 * f)),
      (i = o / (13 * s) + p || 0),
      (r = l / (13 * s) + _ || 0),
      (u = s > 8 ? d * Math.pow((s + 16) / 116, 3) : d * s * v),
      (a = (u * 9 * i) / (4 * r) || 0),
      (c = (u * (12 - 3 * i - 20 * r)) / (4 * r) || 0),
      [a, u, c]
    );
  },
};
Ne.luv = function (t, e, n) {
  var i,
    r,
    s,
    o,
    l,
    a,
    u,
    c,
    h,
    d,
    f,
    p,
    _,
    v = 0.008856451679035631,
    g = 903.2962962962961;
  (e = e || "D65"),
    (n = n || 2),
    (h = Ne.whitepoint[n][e][0]),
    (d = Ne.whitepoint[n][e][1]),
    (f = Ne.whitepoint[n][e][2]),
    (p = (4 * h) / (h + 15 * d + 3 * f)),
    (_ = (9 * d) / (h + 15 * d + 3 * f)),
    (a = t[0]),
    (u = t[1]),
    (c = t[2]),
    (i = (4 * a) / (a + 15 * u + 3 * c) || 0),
    (r = (9 * u) / (a + 15 * u + 3 * c) || 0);
  var m = u / d;
  return (
    (s = m <= v ? g * m : 116 * Math.pow(m, 1 / 3) - 16),
    (o = 13 * s * (i - p)),
    (l = 13 * s * (r - _)),
    [s, o, l]
  );
};
var i_ = {
  name: "lchuv",
  channel: ["lightness", "chroma", "hue"],
  alias: ["LCHuv", "cielchuv"],
  min: [0, 0, 0],
  max: [100, 100, 360],
  luv: function (t) {
    var e = t[0],
      n = t[1],
      i = t[2],
      r,
      s,
      o;
    return (
      (o = (i / 360) * 2 * Math.PI),
      (r = n * Math.cos(o)),
      (s = n * Math.sin(o)),
      [e, r, s]
    );
  },
  xyz: function (t) {
    return Od.xyz(i_.luv(t));
  },
};
Od.lchuv = function (t) {
  var e = t[0],
    n = t[1],
    i = t[2],
    r = Math.sqrt(n * n + i * i),
    s = Math.atan2(i, n),
    o = (s * 360) / 2 / Math.PI;
  return o < 0 && (o += 360), [e, r, o];
};
Ne.lchuv = function (t) {
  return Od.lchuv(Ne.luv(t));
};
var kE = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50],
};
const Lg = fm(kE);
var Mg = {
  red: 0,
  orange: 60,
  yellow: 120,
  green: 180,
  blue: 240,
  purple: 300,
};
function PE(t) {
  var c, h;
  var e,
    n = [],
    i = 1,
    r;
  if (typeof t == "number")
    return {
      space: "rgb",
      values: [t >>> 16, (t & 65280) >>> 8, t & 255],
      alpha: 1,
    };
  if (typeof t == "number")
    return {
      space: "rgb",
      values: [t >>> 16, (t & 65280) >>> 8, t & 255],
      alpha: 1,
    };
  if (((t = String(t).toLowerCase()), Lg[t])) (n = Lg[t].slice()), (r = "rgb");
  else if (t === "transparent") (i = 0), (r = "rgb"), (n = [0, 0, 0]);
  else if (t[0] === "#") {
    var s = t.slice(1),
      o = s.length,
      l = o <= 4;
    (i = 1),
      l
        ? ((n = [
            parseInt(s[0] + s[0], 16),
            parseInt(s[1] + s[1], 16),
            parseInt(s[2] + s[2], 16),
          ]),
          o === 4 && (i = parseInt(s[3] + s[3], 16) / 255))
        : ((n = [
            parseInt(s[0] + s[1], 16),
            parseInt(s[2] + s[3], 16),
            parseInt(s[4] + s[5], 16),
          ]),
          o === 8 && (i = parseInt(s[6] + s[7], 16) / 255)),
      n[0] || (n[0] = 0),
      n[1] || (n[1] = 0),
      n[2] || (n[2] = 0),
      (r = "rgb");
  } else if (
    (e =
      /^((?:rgba?|hs[lvb]a?|hwba?|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms|oklch|oklab|color))\s*\(([^\)]*)\)/.exec(
        t,
      ))
  ) {
    var a = e[1];
    r = a.replace(/a$/, "");
    var u = r === "cmyk" ? 4 : r === "gray" ? 1 : 3;
    (n = e[2].trim().split(/\s*[,\/]\s*|\s+/)),
      r === "color" && (r = n.shift()),
      (n = n.map(function (d, f) {
        if (d[d.length - 1] === "%")
          return (
            (d = parseFloat(d) / 100),
            f === 3
              ? d
              : r === "rgb"
                ? d * 255
                : r[0] === "h" || (r[0] === "l" && !f)
                  ? d * 100
                  : r === "lab"
                    ? d * 125
                    : r === "lch"
                      ? f < 2
                        ? d * 150
                        : d * 360
                      : r[0] === "o" && !f
                        ? d
                        : r === "oklab"
                          ? d * 0.4
                          : r === "oklch"
                            ? f < 2
                              ? d * 0.4
                              : d * 360
                            : d
          );
        if (r[f] === "h" || (f === 2 && r[r.length - 1] === "h")) {
          if (Mg[d] !== void 0) return Mg[d];
          if (d.endsWith("deg")) return parseFloat(d);
          if (d.endsWith("turn")) return parseFloat(d) * 360;
          if (d.endsWith("grad")) return (parseFloat(d) * 360) / 400;
          if (d.endsWith("rad")) return (parseFloat(d) * 180) / Math.PI;
        }
        return d === "none" ? 0 : parseFloat(d);
      })),
      (i = n.length > u ? n.pop() : 1);
  } else
    /[0-9](?:\s|\/|,)/.test(t) &&
      ((n = t.match(/([0-9]+)/g).map(function (d) {
        return parseFloat(d);
      })),
      (r =
        ((h = (c = t.match(/([a-z])/gi)) == null ? void 0 : c.join("")) == null
          ? void 0
          : h.toLowerCase()) || "rgb"));
  return { space: r, values: n, alpha: i };
}
const Du = {
  name: "hsl",
  min: [0, 0, 0],
  max: [360, 100, 100],
  channel: ["hue", "saturation", "lightness"],
  alias: ["HSL"],
  rgb: function (t) {
    var e = t[0] / 360,
      n = t[1] / 100,
      i = t[2] / 100,
      r,
      s,
      o,
      l,
      a,
      u = 0;
    if (n === 0) return (a = i * 255), [a, a, a];
    for (
      s = i < 0.5 ? i * (1 + n) : i + n - i * n, r = 2 * i - s, l = [0, 0, 0];
      u < 3;

    )
      (o = e + (1 / 3) * -(u - 1)),
        o < 0 ? o++ : o > 1 && o--,
        (a =
          6 * o < 1
            ? r + (s - r) * 6 * o
            : 2 * o < 1
              ? s
              : 3 * o < 2
                ? r + (s - r) * (2 / 3 - o) * 6
                : r),
        (l[u++] = a * 255);
    return l;
  },
};
mo.hsl = function (t) {
  var e = t[0] / 255,
    n = t[1] / 255,
    i = t[2] / 255,
    r = Math.min(e, n, i),
    s = Math.max(e, n, i),
    o = s - r,
    l,
    a,
    u;
  return (
    s === r
      ? (l = 0)
      : e === s
        ? (l = (n - i) / o)
        : n === s
          ? (l = 2 + (i - e) / o)
          : i === s && (l = 4 + (e - n) / o),
    (l = Math.min(l * 60, 360)),
    l < 0 && (l += 360),
    (u = (r + s) / 2),
    s === r ? (a = 0) : u <= 0.5 ? (a = o / (s + r)) : (a = o / (2 - s - r)),
    [l, a * 100, u * 100]
  );
};
function LE(t) {
  Array.isArray(t) && t.raw && (t = String.raw(...arguments)),
    t instanceof Number && (t = +t);
  var e,
    n = PE(t);
  if (!n.space) return [];
  const i = n.space[0] === "h" ? Du.min : mo.min,
    r = n.space[0] === "h" ? Du.max : mo.max;
  return (
    (e = Array(3)),
    (e[0] = Math.min(Math.max(n.values[0], i[0]), r[0])),
    (e[1] = Math.min(Math.max(n.values[1], i[1]), r[1])),
    (e[2] = Math.min(Math.max(n.values[2], i[2]), r[2])),
    n.space[0] === "h" && (e = Du.rgb(e)),
    e.push(Math.min(Math.max(n.alpha, 0), 1)),
    e
  );
}
function r_(t) {
  return typeof t == "string" ? t : o_(t);
}
const ME = 1024,
  ws = {};
let zu = 0;
function OE(t) {
  if (t.length === 4) return t;
  const e = t.slice();
  return (e[3] = 1), e;
}
function Og(t) {
  const e = Ne.lchuv(mo.xyz(t));
  return (e[3] = t[3]), e;
}
function AE(t) {
  const e = Ne.rgb(i_.xyz(t));
  return (e[3] = t[3]), e;
}
function Ad(t) {
  if (ws.hasOwnProperty(t)) return ws[t];
  if (zu >= ME) {
    let n = 0;
    for (const i in ws) n++ & 3 || (delete ws[i], --zu);
  }
  const e = LE(t);
  if (e.length !== 4) throw new Error('Failed to parse "' + t + '" as color');
  for (const n of e)
    if (isNaN(n)) throw new Error('Failed to parse "' + t + '" as color');
  return s_(e), (ws[t] = e), ++zu, e;
}
function ca(t) {
  return Array.isArray(t) ? t : Ad(t);
}
function s_(t) {
  return (
    (t[0] = Re((t[0] + 0.5) | 0, 0, 255)),
    (t[1] = Re((t[1] + 0.5) | 0, 0, 255)),
    (t[2] = Re((t[2] + 0.5) | 0, 0, 255)),
    (t[3] = Re(t[3], 0, 1)),
    t
  );
}
function o_(t) {
  let e = t[0];
  e != (e | 0) && (e = (e + 0.5) | 0);
  let n = t[1];
  n != (n | 0) && (n = (n + 0.5) | 0);
  let i = t[2];
  i != (i | 0) && (i = (i + 0.5) | 0);
  const r = t[3] === void 0 ? 1 : Math.round(t[3] * 100) / 100;
  return "rgba(" + e + "," + n + "," + i + "," + r + ")";
}
function FE(t) {
  try {
    return Ad(t), !0;
  } catch {
    return !1;
  }
}
function nn(t) {
  return Array.isArray(t) ? o_(t) : t;
}
function Qe(t, e, n, i) {
  let r;
  return (
    n && n.length
      ? (r = n.shift())
      : fd
        ? (r = new OffscreenCanvas(t || 300, e || 300))
        : (r = document.createElement("canvas")),
    t && (r.width = t),
    e && (r.height = e),
    r.getContext("2d", i)
  );
}
function Ha(t) {
  const e = t.canvas;
  (e.width = 1), (e.height = 1), t.clearRect(0, 0, 1, 1);
}
function NE(t) {
  let e = t.offsetWidth;
  const n = getComputedStyle(t);
  return (e += parseInt(n.marginLeft, 10) + parseInt(n.marginRight, 10)), e;
}
function DE(t) {
  let e = t.offsetHeight;
  const n = getComputedStyle(t);
  return (e += parseInt(n.marginTop, 10) + parseInt(n.marginBottom, 10)), e;
}
function Ag(t, e) {
  const n = e.parentNode;
  n && n.replaceChild(t, e);
}
function ha(t) {
  return t && t.parentNode ? t.parentNode.removeChild(t) : null;
}
function l_(t) {
  for (; t.lastChild; ) t.removeChild(t.lastChild);
}
function zE(t, e) {
  const n = t.childNodes;
  for (let i = 0; ; ++i) {
    const r = n[i],
      s = e[i];
    if (!r && !s) break;
    if (r !== s) {
      if (!r) {
        t.appendChild(s);
        continue;
      }
      if (!s) {
        t.removeChild(r), --i;
        continue;
      }
      t.insertBefore(s, r);
    }
  }
}
const fl = "ol-hidden",
  jE = "ol-selectable",
  qa = "ol-unselectable",
  Fd = "ol-control",
  Fg = "ol-collapsed",
  GE = new RegExp(
    [
      "^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)",
      "(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)",
      "(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)",
      "(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?",
      "(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))",
      "(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",
      `?\\s*([-,\\"\\'\\sa-z]+?)\\s*$`,
    ].join(""),
    "i",
  ),
  Ng = ["style", "variant", "weight", "size", "lineHeight", "family"],
  a_ = function (t) {
    const e = t.match(GE);
    if (!e) return null;
    const n = {
      lineHeight: "normal",
      size: "1.2em",
      style: "normal",
      weight: "normal",
      variant: "normal",
    };
    for (let i = 0, r = Ng.length; i < r; ++i) {
      const s = e[i + 1];
      s !== void 0 && (n[Ng[i]] = s);
    }
    return (n.families = n.family.split(/,\s?/)), n;
  },
  u_ = "10px sans-serif",
  lt = "#000",
  Qr = "round",
  Sn = [],
  Tn = 0,
  Jr = "round",
  po = 10,
  _o = "#000",
  yo = "center",
  da = "middle",
  Gi = [0, 0, 0, 0],
  vo = 1,
  _n = new $t();
let mr = null,
  uh;
const ch = {},
  bE = (function () {
    const e = "32px ",
      n = ["monospace", "serif"],
      i = n.length,
      r = "wmytzilWMYTZIL@#/&?$%10";
    let s, o;
    function l(u, c, h) {
      let d = !0;
      for (let f = 0; f < i; ++f) {
        const p = n[f];
        if (((o = fa(u + " " + c + " " + e + p, r)), h != p)) {
          const _ = fa(u + " " + c + " " + e + h + "," + p, r);
          d = d && _ != o;
        }
      }
      return !!d;
    }
    function a() {
      let u = !0;
      const c = _n.getKeys();
      for (let h = 0, d = c.length; h < d; ++h) {
        const f = c[h];
        _n.get(f) < 100 &&
          (l.apply(
            this,
            f.split(`
`),
          )
            ? (ko(ch), (mr = null), (uh = void 0), _n.set(f, 100))
            : (_n.set(f, _n.get(f) + 1, !0), (u = !1)));
      }
      u && (clearInterval(s), (s = void 0));
    }
    return function (u) {
      const c = a_(u);
      if (!c) return;
      const h = c.families;
      for (let d = 0, f = h.length; d < f; ++d) {
        const p = h[d],
          _ =
            c.style +
            `
` +
            c.weight +
            `
` +
            p;
        _n.get(_) === void 0 &&
          (_n.set(_, 100, !0),
          l(c.style, c.weight, p) ||
            (_n.set(_, 0, !0), s === void 0 && (s = setInterval(a, 32))));
      }
    };
  })(),
  WE = (function () {
    let t;
    return function (e) {
      let n = ch[e];
      if (n == null) {
        if (fd) {
          const i = a_(e),
            r = c_(e, "Žg");
          n =
            (isNaN(Number(i.lineHeight)) ? 1.2 : Number(i.lineHeight)) *
            (r.actualBoundingBoxAscent + r.actualBoundingBoxDescent);
        } else
          t ||
            ((t = document.createElement("div")),
            (t.innerHTML = "M"),
            (t.style.minHeight = "0"),
            (t.style.maxHeight = "none"),
            (t.style.height = "auto"),
            (t.style.padding = "0"),
            (t.style.border = "none"),
            (t.style.position = "absolute"),
            (t.style.display = "block"),
            (t.style.left = "-99999px")),
            (t.style.font = e),
            document.body.appendChild(t),
            (n = t.offsetHeight),
            document.body.removeChild(t);
        ch[e] = n;
      }
      return n;
    };
  })();
function c_(t, e) {
  return (
    mr || (mr = Qe(1, 1)),
    t != uh && ((mr.font = t), (uh = mr.font)),
    mr.measureText(e)
  );
}
function fa(t, e) {
  return c_(t, e).width;
}
function Dg(t, e, n) {
  if (e in n) return n[e];
  const i = e
    .split(
      `
`,
    )
    .reduce((r, s) => Math.max(r, fa(t, s)), 0);
  return (n[e] = i), i;
}
function XE(t, e) {
  const n = [],
    i = [],
    r = [];
  let s = 0,
    o = 0,
    l = 0,
    a = 0;
  for (let u = 0, c = e.length; u <= c; u += 2) {
    const h = e[u];
    if (
      h ===
        `
` ||
      u === c
    ) {
      (s = Math.max(s, o)), r.push(o), (o = 0), (l += a);
      continue;
    }
    const d = e[u + 1] || t.font,
      f = fa(d, h);
    n.push(f), (o += f);
    const p = WE(d);
    i.push(p), (a = Math.max(a, p));
  }
  return { width: s, height: l, widths: n, heights: i, lineWidths: r };
}
function BE(t, e, n, i, r, s, o, l, a, u, c) {
  t.save(),
    n !== 1 && (t.globalAlpha *= n),
    e && t.transform.apply(t, e),
    i.contextInstructions
      ? (t.translate(a, u), t.scale(c[0], c[1]), UE(i, t))
      : c[0] < 0 || c[1] < 0
        ? (t.translate(a, u),
          t.scale(c[0], c[1]),
          t.drawImage(i, r, s, o, l, 0, 0, o, l))
        : t.drawImage(i, r, s, o, l, a, u, o * c[0], l * c[1]),
    t.restore();
}
function UE(t, e) {
  const n = t.contextInstructions;
  for (let i = 0, r = n.length; i < r; i += 2)
    Array.isArray(n[i + 1]) ? e[n[i]].apply(e, n[i + 1]) : (e[n[i]] = n[i + 1]);
}
class Qa extends $a {
  constructor(e) {
    const n = e.rotateWithView !== void 0 ? e.rotateWithView : !1;
    super({
      opacity: 1,
      rotateWithView: n,
      rotation: e.rotation !== void 0 ? e.rotation : 0,
      scale: e.scale !== void 0 ? e.scale : 1,
      displacement: e.displacement !== void 0 ? e.displacement : [0, 0],
      declutterMode: e.declutterMode,
    }),
      this.canvases_,
      (this.hitDetectionCanvas_ = null),
      (this.fill_ = e.fill !== void 0 ? e.fill : null),
      (this.origin_ = [0, 0]),
      (this.points_ = e.points),
      (this.radius_ = e.radius !== void 0 ? e.radius : e.radius1),
      (this.radius2_ = e.radius2),
      (this.angle_ = e.angle !== void 0 ? e.angle : 0),
      (this.stroke_ = e.stroke !== void 0 ? e.stroke : null),
      this.size_,
      this.renderOptions_,
      this.render();
  }
  clone() {
    const e = this.getScale(),
      n = new Qa({
        fill: this.getFill() ? this.getFill().clone() : void 0,
        points: this.getPoints(),
        radius: this.getRadius(),
        radius2: this.getRadius2(),
        angle: this.getAngle(),
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        scale: Array.isArray(e) ? e.slice() : e,
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode(),
      });
    return n.setOpacity(this.getOpacity()), n;
  }
  getAnchor() {
    const e = this.size_,
      n = this.getDisplacement(),
      i = this.getScaleArray();
    return [e[0] / 2 - n[0] / i[0], e[1] / 2 + n[1] / i[1]];
  }
  getAngle() {
    return this.angle_;
  }
  getFill() {
    return this.fill_;
  }
  setFill(e) {
    (this.fill_ = e), this.render();
  }
  getHitDetectionImage() {
    return (
      this.hitDetectionCanvas_ ||
        (this.hitDetectionCanvas_ = this.createHitDetectionCanvas_(
          this.renderOptions_,
        )),
      this.hitDetectionCanvas_
    );
  }
  getImage(e) {
    let n = this.canvases_[e];
    if (!n) {
      const i = this.renderOptions_,
        r = Qe(i.size * e, i.size * e);
      this.draw_(i, r, e), (n = r.canvas), (this.canvases_[e] = n);
    }
    return n;
  }
  getPixelRatio(e) {
    return e;
  }
  getImageSize() {
    return this.size_;
  }
  getImageState() {
    return le.LOADED;
  }
  getOrigin() {
    return this.origin_;
  }
  getPoints() {
    return this.points_;
  }
  getRadius() {
    return this.radius_;
  }
  getRadius2() {
    return this.radius2_;
  }
  getSize() {
    return this.size_;
  }
  getStroke() {
    return this.stroke_;
  }
  setStroke(e) {
    (this.stroke_ = e), this.render();
  }
  listenImageChange(e) {}
  load() {}
  unlistenImageChange(e) {}
  calculateLineJoinSize_(e, n, i) {
    if (n === 0 || this.points_ === 1 / 0 || (e !== "bevel" && e !== "miter"))
      return n;
    let r = this.radius_,
      s = this.radius2_ === void 0 ? r : this.radius2_;
    if (r < s) {
      const w = r;
      (r = s), (s = w);
    }
    const o = this.radius2_ === void 0 ? this.points_ : this.points_ * 2,
      l = (2 * Math.PI) / o,
      a = s * Math.sin(l),
      u = Math.sqrt(s * s - a * a),
      c = r - u,
      h = Math.sqrt(a * a + c * c),
      d = h / a;
    if (e === "miter" && d <= i) return d * n;
    const f = n / 2 / d,
      p = (n / 2) * (c / h),
      v = Math.sqrt((r + f) * (r + f) + p * p) - r;
    if (this.radius2_ === void 0 || e === "bevel") return v * 2;
    const g = r * Math.sin(l),
      m = Math.sqrt(r * r - g * g),
      y = s - m,
      x = Math.sqrt(g * g + y * y) / g;
    if (x <= i) {
      const w = (x * n) / 2 - s - r;
      return 2 * Math.max(v, w);
    }
    return v * 2;
  }
  createRenderOptions() {
    let e = Qr,
      n = Jr,
      i = 0,
      r = null,
      s = 0,
      o,
      l = 0;
    this.stroke_ &&
      ((o = nn(this.stroke_.getColor() ?? _o)),
      (l = this.stroke_.getWidth() ?? vo),
      (r = this.stroke_.getLineDash()),
      (s = this.stroke_.getLineDashOffset() ?? 0),
      (n = this.stroke_.getLineJoin() ?? Jr),
      (e = this.stroke_.getLineCap() ?? Qr),
      (i = this.stroke_.getMiterLimit() ?? po));
    const a = this.calculateLineJoinSize_(n, l, i),
      u = Math.max(this.radius_, this.radius2_ || 0),
      c = Math.ceil(2 * u + a);
    return {
      strokeStyle: o,
      strokeWidth: l,
      size: c,
      lineCap: e,
      lineDash: r,
      lineDashOffset: s,
      lineJoin: n,
      miterLimit: i,
    };
  }
  render() {
    this.renderOptions_ = this.createRenderOptions();
    const e = this.renderOptions_.size;
    (this.canvases_ = {}),
      (this.hitDetectionCanvas_ = null),
      (this.size_ = [e, e]);
  }
  draw_(e, n, i) {
    if (
      (n.scale(i, i),
      n.translate(e.size / 2, e.size / 2),
      this.createPath_(n),
      this.fill_)
    ) {
      let r = this.fill_.getColor();
      r === null && (r = lt), (n.fillStyle = nn(r)), n.fill();
    }
    e.strokeStyle &&
      ((n.strokeStyle = e.strokeStyle),
      (n.lineWidth = e.strokeWidth),
      e.lineDash &&
        (n.setLineDash(e.lineDash), (n.lineDashOffset = e.lineDashOffset)),
      (n.lineCap = e.lineCap),
      (n.lineJoin = e.lineJoin),
      (n.miterLimit = e.miterLimit),
      n.stroke());
  }
  createHitDetectionCanvas_(e) {
    let n;
    if (this.fill_) {
      let i = this.fill_.getColor(),
        r = 0;
      typeof i == "string" && (i = ca(i)),
        i === null
          ? (r = 1)
          : Array.isArray(i) && (r = i.length === 4 ? i[3] : 1),
        r === 0 &&
          ((n = Qe(e.size, e.size)), this.drawHitDetectionCanvas_(e, n));
    }
    return n ? n.canvas : this.getImage(1);
  }
  createPath_(e) {
    let n = this.points_;
    const i = this.radius_;
    if (n === 1 / 0) e.arc(0, 0, i, 0, 2 * Math.PI);
    else {
      const r = this.radius2_ === void 0 ? i : this.radius2_;
      this.radius2_ !== void 0 && (n *= 2);
      const s = this.angle_ - Math.PI / 2,
        o = (2 * Math.PI) / n;
      for (let l = 0; l < n; l++) {
        const a = s + l * o,
          u = l % 2 === 0 ? i : r;
        e.lineTo(u * Math.cos(a), u * Math.sin(a));
      }
      e.closePath();
    }
  }
  drawHitDetectionCanvas_(e, n) {
    n.translate(e.size / 2, e.size / 2),
      this.createPath_(n),
      (n.fillStyle = lt),
      n.fill(),
      e.strokeStyle &&
        ((n.strokeStyle = e.strokeStyle),
        (n.lineWidth = e.strokeWidth),
        e.lineDash &&
          (n.setLineDash(e.lineDash), (n.lineDashOffset = e.lineDashOffset)),
        (n.lineJoin = e.lineJoin),
        (n.miterLimit = e.miterLimit),
        n.stroke());
  }
}
class Ja extends Qa {
  constructor(e) {
    (e = e || { radius: 5 }),
      super({
        points: 1 / 0,
        fill: e.fill,
        radius: e.radius,
        stroke: e.stroke,
        scale: e.scale !== void 0 ? e.scale : 1,
        rotation: e.rotation !== void 0 ? e.rotation : 0,
        rotateWithView: e.rotateWithView !== void 0 ? e.rotateWithView : !1,
        displacement: e.displacement !== void 0 ? e.displacement : [0, 0],
        declutterMode: e.declutterMode,
      });
  }
  clone() {
    const e = this.getScale(),
      n = new Ja({
        fill: this.getFill() ? this.getFill().clone() : void 0,
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        radius: this.getRadius(),
        scale: Array.isArray(e) ? e.slice() : e,
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode(),
      });
    return n.setOpacity(this.getOpacity()), n;
  }
  setRadius(e) {
    (this.radius_ = e), this.render();
  }
}
class eu {
  constructor(e) {
    (e = e || {}),
      (this.geometry_ = null),
      (this.geometryFunction_ = zg),
      e.geometry !== void 0 && this.setGeometry(e.geometry),
      (this.fill_ = e.fill !== void 0 ? e.fill : null),
      (this.image_ = e.image !== void 0 ? e.image : null),
      (this.renderer_ = e.renderer !== void 0 ? e.renderer : null),
      (this.hitDetectionRenderer_ =
        e.hitDetectionRenderer !== void 0 ? e.hitDetectionRenderer : null),
      (this.stroke_ = e.stroke !== void 0 ? e.stroke : null),
      (this.text_ = e.text !== void 0 ? e.text : null),
      (this.zIndex_ = e.zIndex);
  }
  clone() {
    let e = this.getGeometry();
    return (
      e && typeof e == "object" && (e = e.clone()),
      new eu({
        geometry: e ?? void 0,
        fill: this.getFill() ? this.getFill().clone() : void 0,
        image: this.getImage() ? this.getImage().clone() : void 0,
        renderer: this.getRenderer() ?? void 0,
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        text: this.getText() ? this.getText().clone() : void 0,
        zIndex: this.getZIndex(),
      })
    );
  }
  getRenderer() {
    return this.renderer_;
  }
  setRenderer(e) {
    this.renderer_ = e;
  }
  setHitDetectionRenderer(e) {
    this.hitDetectionRenderer_ = e;
  }
  getHitDetectionRenderer() {
    return this.hitDetectionRenderer_;
  }
  getGeometry() {
    return this.geometry_;
  }
  getGeometryFunction() {
    return this.geometryFunction_;
  }
  getFill() {
    return this.fill_;
  }
  setFill(e) {
    this.fill_ = e;
  }
  getImage() {
    return this.image_;
  }
  setImage(e) {
    this.image_ = e;
  }
  getStroke() {
    return this.stroke_;
  }
  setStroke(e) {
    this.stroke_ = e;
  }
  getText() {
    return this.text_;
  }
  setText(e) {
    this.text_ = e;
  }
  getZIndex() {
    return this.zIndex_;
  }
  setGeometry(e) {
    typeof e == "function"
      ? (this.geometryFunction_ = e)
      : typeof e == "string"
        ? (this.geometryFunction_ = function (n) {
            return n.get(e);
          })
        : e
          ? e !== void 0 &&
            (this.geometryFunction_ = function () {
              return e;
            })
          : (this.geometryFunction_ = zg),
      (this.geometry_ = e);
  }
  setZIndex(e) {
    this.zIndex_ = e;
  }
}
function YE(t) {
  let e;
  if (typeof t == "function") e = t;
  else {
    let n;
    Array.isArray(t)
      ? (n = t)
      : (ee(
          typeof t.getZIndex == "function",
          "Expected an `Style` or an array of `Style`",
        ),
        (n = [t])),
      (e = function () {
        return n;
      });
  }
  return e;
}
let ju = null;
function VE(t, e) {
  if (!ju) {
    const n = new Ao({ color: "rgba(255,255,255,0.4)" }),
      i = new Za({ color: "#3399CC", width: 1.25 });
    ju = [
      new eu({
        image: new Ja({ fill: n, stroke: i, radius: 5 }),
        fill: n,
        stroke: i,
      }),
    ];
  }
  return ju;
}
function zg(t) {
  return t.getGeometry();
}
const Ae = eu,
  KE = "#333";
class Nd {
  constructor(e) {
    (e = e || {}),
      (this.font_ = e.font),
      (this.rotation_ = e.rotation),
      (this.rotateWithView_ = e.rotateWithView),
      (this.scale_ = e.scale),
      (this.scaleArray_ = vt(e.scale !== void 0 ? e.scale : 1)),
      (this.text_ = e.text),
      (this.textAlign_ = e.textAlign),
      (this.justify_ = e.justify),
      (this.repeat_ = e.repeat),
      (this.textBaseline_ = e.textBaseline),
      (this.fill_ = e.fill !== void 0 ? e.fill : new Ao({ color: KE })),
      (this.maxAngle_ = e.maxAngle !== void 0 ? e.maxAngle : Math.PI / 4),
      (this.placement_ = e.placement !== void 0 ? e.placement : "point"),
      (this.overflow_ = !!e.overflow),
      (this.stroke_ = e.stroke !== void 0 ? e.stroke : null),
      (this.offsetX_ = e.offsetX !== void 0 ? e.offsetX : 0),
      (this.offsetY_ = e.offsetY !== void 0 ? e.offsetY : 0),
      (this.backgroundFill_ = e.backgroundFill ? e.backgroundFill : null),
      (this.backgroundStroke_ = e.backgroundStroke ? e.backgroundStroke : null),
      (this.padding_ = e.padding === void 0 ? null : e.padding);
  }
  clone() {
    const e = this.getScale();
    return new Nd({
      font: this.getFont(),
      placement: this.getPlacement(),
      repeat: this.getRepeat(),
      maxAngle: this.getMaxAngle(),
      overflow: this.getOverflow(),
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      scale: Array.isArray(e) ? e.slice() : e,
      text: this.getText(),
      textAlign: this.getTextAlign(),
      justify: this.getJustify(),
      textBaseline: this.getTextBaseline(),
      fill: this.getFill() ? this.getFill().clone() : void 0,
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      offsetX: this.getOffsetX(),
      offsetY: this.getOffsetY(),
      backgroundFill: this.getBackgroundFill()
        ? this.getBackgroundFill().clone()
        : void 0,
      backgroundStroke: this.getBackgroundStroke()
        ? this.getBackgroundStroke().clone()
        : void 0,
      padding: this.getPadding() || void 0,
    });
  }
  getOverflow() {
    return this.overflow_;
  }
  getFont() {
    return this.font_;
  }
  getMaxAngle() {
    return this.maxAngle_;
  }
  getPlacement() {
    return this.placement_;
  }
  getRepeat() {
    return this.repeat_;
  }
  getOffsetX() {
    return this.offsetX_;
  }
  getOffsetY() {
    return this.offsetY_;
  }
  getFill() {
    return this.fill_;
  }
  getRotateWithView() {
    return this.rotateWithView_;
  }
  getRotation() {
    return this.rotation_;
  }
  getScale() {
    return this.scale_;
  }
  getScaleArray() {
    return this.scaleArray_;
  }
  getStroke() {
    return this.stroke_;
  }
  getText() {
    return this.text_;
  }
  getTextAlign() {
    return this.textAlign_;
  }
  getJustify() {
    return this.justify_;
  }
  getTextBaseline() {
    return this.textBaseline_;
  }
  getBackgroundFill() {
    return this.backgroundFill_;
  }
  getBackgroundStroke() {
    return this.backgroundStroke_;
  }
  getPadding() {
    return this.padding_;
  }
  setOverflow(e) {
    this.overflow_ = e;
  }
  setFont(e) {
    this.font_ = e;
  }
  setMaxAngle(e) {
    this.maxAngle_ = e;
  }
  setOffsetX(e) {
    this.offsetX_ = e;
  }
  setOffsetY(e) {
    this.offsetY_ = e;
  }
  setPlacement(e) {
    this.placement_ = e;
  }
  setRepeat(e) {
    this.repeat_ = e;
  }
  setRotateWithView(e) {
    this.rotateWithView_ = e;
  }
  setFill(e) {
    this.fill_ = e;
  }
  setRotation(e) {
    this.rotation_ = e;
  }
  setScale(e) {
    (this.scale_ = e), (this.scaleArray_ = vt(e !== void 0 ? e : 1));
  }
  setStroke(e) {
    this.stroke_ = e;
  }
  setText(e) {
    this.text_ = e;
  }
  setTextAlign(e) {
    this.textAlign_ = e;
  }
  setJustify(e) {
    this.justify_ = e;
  }
  setTextBaseline(e) {
    this.textBaseline_ = e;
  }
  setBackgroundFill(e) {
    this.backgroundFill_ = e;
  }
  setBackgroundStroke(e) {
    this.backgroundStroke_ = e;
  }
  setPadding(e) {
    this.padding_ = e;
  }
}
const se = {
  OPACITY: "opacity",
  VISIBLE: "visible",
  EXTENT: "extent",
  Z_INDEX: "zIndex",
  MAX_RESOLUTION: "maxResolution",
  MIN_RESOLUTION: "minResolution",
  MAX_ZOOM: "maxZoom",
  MIN_ZOOM: "minZoom",
  SOURCE: "source",
  MAP: "map",
};
class h_ extends $t {
  constructor(e) {
    super(), this.on, this.once, this.un, (this.background_ = e.background);
    const n = Object.assign({}, e);
    typeof e.properties == "object" &&
      (delete n.properties, Object.assign(n, e.properties)),
      (n[se.OPACITY] = e.opacity !== void 0 ? e.opacity : 1),
      ee(typeof n[se.OPACITY] == "number", "Layer opacity must be a number"),
      (n[se.VISIBLE] = e.visible !== void 0 ? e.visible : !0),
      (n[se.Z_INDEX] = e.zIndex),
      (n[se.MAX_RESOLUTION] =
        e.maxResolution !== void 0 ? e.maxResolution : 1 / 0),
      (n[se.MIN_RESOLUTION] = e.minResolution !== void 0 ? e.minResolution : 0),
      (n[se.MIN_ZOOM] = e.minZoom !== void 0 ? e.minZoom : -1 / 0),
      (n[se.MAX_ZOOM] = e.maxZoom !== void 0 ? e.maxZoom : 1 / 0),
      (this.className_ = n.className !== void 0 ? n.className : "ol-layer"),
      delete n.className,
      this.setProperties(n),
      (this.state_ = null);
  }
  getBackground() {
    return this.background_;
  }
  getClassName() {
    return this.className_;
  }
  getLayerState(e) {
    const n = this.state_ || { layer: this, managed: e === void 0 ? !0 : e },
      i = this.getZIndex();
    return (
      (n.opacity = Re(Math.round(this.getOpacity() * 100) / 100, 0, 1)),
      (n.visible = this.getVisible()),
      (n.extent = this.getExtent()),
      (n.zIndex = i === void 0 && !n.managed ? 1 / 0 : i),
      (n.maxResolution = this.getMaxResolution()),
      (n.minResolution = Math.max(this.getMinResolution(), 0)),
      (n.minZoom = this.getMinZoom()),
      (n.maxZoom = this.getMaxZoom()),
      (this.state_ = n),
      n
    );
  }
  getLayersArray(e) {
    return W();
  }
  getLayerStatesArray(e) {
    return W();
  }
  getExtent() {
    return this.get(se.EXTENT);
  }
  getMaxResolution() {
    return this.get(se.MAX_RESOLUTION);
  }
  getMinResolution() {
    return this.get(se.MIN_RESOLUTION);
  }
  getMinZoom() {
    return this.get(se.MIN_ZOOM);
  }
  getMaxZoom() {
    return this.get(se.MAX_ZOOM);
  }
  getOpacity() {
    return this.get(se.OPACITY);
  }
  getSourceState() {
    return W();
  }
  getVisible() {
    return this.get(se.VISIBLE);
  }
  getZIndex() {
    return this.get(se.Z_INDEX);
  }
  setBackground(e) {
    (this.background_ = e), this.changed();
  }
  setExtent(e) {
    this.set(se.EXTENT, e);
  }
  setMaxResolution(e) {
    this.set(se.MAX_RESOLUTION, e);
  }
  setMinResolution(e) {
    this.set(se.MIN_RESOLUTION, e);
  }
  setMaxZoom(e) {
    this.set(se.MAX_ZOOM, e);
  }
  setMinZoom(e) {
    this.set(se.MIN_ZOOM, e);
  }
  setOpacity(e) {
    ee(typeof e == "number", "Layer opacity must be a number"),
      this.set(se.OPACITY, e);
  }
  setVisible(e) {
    this.set(se.VISIBLE, e);
  }
  setZIndex(e) {
    this.set(se.Z_INDEX, e);
  }
  disposeInternal() {
    this.state_ && ((this.state_.layer = null), (this.state_ = null)),
      super.disposeInternal();
  }
}
const Be = { ANIMATING: 0, INTERACTING: 1 },
  Gt = { CENTER: "center", RESOLUTION: "resolution", ROTATION: "rotation" },
  ZE = 42,
  Dd = 256;
function jg(t, e, n) {
  return function (i, r, s, o, l) {
    if (!i) return;
    if (!r && !e) return i;
    const a = e ? 0 : s[0] * r,
      u = e ? 0 : s[1] * r,
      c = l ? l[0] : 0,
      h = l ? l[1] : 0;
    let d = t[0] + a / 2 + c,
      f = t[2] - a / 2 + c,
      p = t[1] + u / 2 + h,
      _ = t[3] - u / 2 + h;
    d > f && ((d = (f + d) / 2), (f = d)),
      p > _ && ((p = (_ + p) / 2), (_ = p));
    let v = Re(i[0], d, f),
      g = Re(i[1], p, _);
    if (o && n && r) {
      const m = 30 * r;
      (v +=
        -m * Math.log(1 + Math.max(0, d - i[0]) / m) +
        m * Math.log(1 + Math.max(0, i[0] - f) / m)),
        (g +=
          -m * Math.log(1 + Math.max(0, p - i[1]) / m) +
          m * Math.log(1 + Math.max(0, i[1] - _) / m));
    }
    return [v, g];
  };
}
function $E(t) {
  return t;
}
function zd(t, e, n, i) {
  const r = ae(e) / n[0],
    s = xt(e) / n[1];
  return i ? Math.min(t, Math.max(r, s)) : Math.min(t, Math.min(r, s));
}
function jd(t, e, n) {
  let i = Math.min(t, e);
  const r = 50;
  return (
    (i *= Math.log(1 + r * Math.max(0, t / e - 1)) / r + 1),
    n &&
      ((i = Math.max(i, n)),
      (i /= Math.log(1 + r * Math.max(0, n / t - 1)) / r + 1)),
    Re(i, n / 2, e * 2)
  );
}
function HE(t, e, n, i) {
  return (
    (e = e !== void 0 ? e : !0),
    function (r, s, o, l) {
      if (r !== void 0) {
        const a = t[0],
          u = t[t.length - 1],
          c = n ? zd(a, n, o, i) : a;
        if (l) return e ? jd(r, c, u) : Re(r, u, c);
        const h = Math.min(c, r),
          d = Math.floor(dd(t, h, s));
        return t[d] > c && d < t.length - 1 ? t[d + 1] : t[d];
      }
    }
  );
}
function qE(t, e, n, i, r, s) {
  return (
    (i = i !== void 0 ? i : !0),
    (n = n !== void 0 ? n : 0),
    function (o, l, a, u) {
      if (o !== void 0) {
        const c = r ? zd(e, r, a, s) : e;
        if (u) return i ? jd(o, c, n) : Re(o, n, c);
        const h = 1e-9,
          d = Math.ceil(Math.log(e / c) / Math.log(t) - h),
          f = -l * (0.5 - h) + 0.5,
          p = Math.min(c, o),
          _ = Math.floor(Math.log(e / p) / Math.log(t) + f),
          v = Math.max(d, _),
          g = e / Math.pow(t, v);
        return Re(g, n, c);
      }
    }
  );
}
function Gg(t, e, n, i, r) {
  return (
    (n = n !== void 0 ? n : !0),
    function (s, o, l, a) {
      if (s !== void 0) {
        const u = i ? zd(t, i, l, r) : t;
        return !n || !a ? Re(s, e, u) : jd(s, u, e);
      }
    }
  );
}
function Gd(t) {
  if (t !== void 0) return 0;
}
function bg(t) {
  if (t !== void 0) return t;
}
function QE(t) {
  const e = (2 * Math.PI) / t;
  return function (n, i) {
    if (i) return n;
    if (n !== void 0) return (n = Math.floor(n / e + 0.5) * e), n;
  };
}
function JE(t) {
  const e = t === void 0 ? Al(5) : t;
  return function (n, i) {
    return i || n === void 0 ? n : Math.abs(n) <= e ? 0 : n;
  };
}
function d_(t) {
  return Math.pow(t, 3);
}
function ss(t) {
  return 1 - d_(1 - t);
}
function ex(t) {
  return 3 * t * t - 2 * t * t * t;
}
function tx(t) {
  return t;
}
const Gu = 0;
class nx extends $t {
  constructor(e) {
    super(),
      this.on,
      this.once,
      this.un,
      (e = Object.assign({}, e)),
      (this.hints_ = [0, 0]),
      (this.animations_ = []),
      this.updateAnimationKey_,
      (this.projection_ = xd(e.projection, "EPSG:3857")),
      (this.viewportSize_ = [100, 100]),
      (this.targetCenter_ = null),
      this.targetResolution_,
      this.targetRotation_,
      (this.nextCenter_ = null),
      this.nextResolution_,
      this.nextRotation_,
      (this.cancelAnchor_ = void 0),
      e.projection && iE(),
      e.center && (e.center = pn(e.center, this.projection_)),
      e.extent && (e.extent = zi(e.extent, this.projection_)),
      this.applyOptions_(e);
  }
  applyOptions_(e) {
    const n = Object.assign({}, e);
    for (const l in Gt) delete n[l];
    this.setProperties(n, !0);
    const i = rx(e);
    (this.maxResolution_ = i.maxResolution),
      (this.minResolution_ = i.minResolution),
      (this.zoomFactor_ = i.zoomFactor),
      (this.resolutions_ = e.resolutions),
      (this.padding_ = e.padding),
      (this.minZoom_ = i.minZoom);
    const r = ix(e),
      s = i.constraint,
      o = sx(e);
    (this.constraints_ = { center: r, resolution: s, rotation: o }),
      this.setRotation(e.rotation !== void 0 ? e.rotation : 0),
      this.setCenterInternal(e.center !== void 0 ? e.center : null),
      e.resolution !== void 0
        ? this.setResolution(e.resolution)
        : e.zoom !== void 0 && this.setZoom(e.zoom);
  }
  get padding() {
    return this.padding_;
  }
  set padding(e) {
    let n = this.padding_;
    this.padding_ = e;
    const i = this.getCenterInternal();
    if (i) {
      const r = e || [0, 0, 0, 0];
      n = n || [0, 0, 0, 0];
      const s = this.getResolution(),
        o = (s / 2) * (r[3] - n[3] + n[1] - r[1]),
        l = (s / 2) * (r[0] - n[0] + n[2] - r[2]);
      this.setCenterInternal([i[0] + o, i[1] - l]);
    }
  }
  getUpdatedOptions_(e) {
    const n = this.getProperties();
    return (
      n.resolution !== void 0
        ? (n.resolution = this.getResolution())
        : (n.zoom = this.getZoom()),
      (n.center = this.getCenterInternal()),
      (n.rotation = this.getRotation()),
      Object.assign({}, n, e)
    );
  }
  animate(e) {
    this.isDef() && !this.getAnimating() && this.resolveConstraints(0);
    const n = new Array(arguments.length);
    for (let i = 0; i < n.length; ++i) {
      let r = arguments[i];
      r.center &&
        ((r = Object.assign({}, r)),
        (r.center = pn(r.center, this.getProjection()))),
        r.anchor &&
          ((r = Object.assign({}, r)),
          (r.anchor = pn(r.anchor, this.getProjection()))),
        (n[i] = r);
    }
    this.animateInternal.apply(this, n);
  }
  animateInternal(e) {
    let n = arguments.length,
      i;
    n > 1 &&
      typeof arguments[n - 1] == "function" &&
      ((i = arguments[n - 1]), --n);
    let r = 0;
    for (; r < n && !this.isDef(); ++r) {
      const c = arguments[r];
      c.center && this.setCenterInternal(c.center),
        c.zoom !== void 0
          ? this.setZoom(c.zoom)
          : c.resolution && this.setResolution(c.resolution),
        c.rotation !== void 0 && this.setRotation(c.rotation);
    }
    if (r === n) {
      i && gl(i, !0);
      return;
    }
    let s = Date.now(),
      o = this.targetCenter_.slice(),
      l = this.targetResolution_,
      a = this.targetRotation_;
    const u = [];
    for (; r < n; ++r) {
      const c = arguments[r],
        h = {
          start: s,
          complete: !1,
          anchor: c.anchor,
          duration: c.duration !== void 0 ? c.duration : 1e3,
          easing: c.easing || ex,
          callback: i,
        };
      if (
        (c.center &&
          ((h.sourceCenter = o),
          (h.targetCenter = c.center.slice()),
          (o = h.targetCenter)),
        c.zoom !== void 0
          ? ((h.sourceResolution = l),
            (h.targetResolution = this.getResolutionForZoom(c.zoom)),
            (l = h.targetResolution))
          : c.resolution &&
            ((h.sourceResolution = l),
            (h.targetResolution = c.resolution),
            (l = h.targetResolution)),
        c.rotation !== void 0)
      ) {
        h.sourceRotation = a;
        const d = br(c.rotation - a + Math.PI, 2 * Math.PI) - Math.PI;
        (h.targetRotation = a + d), (a = h.targetRotation);
      }
      ox(h) ? (h.complete = !0) : (s += h.duration), u.push(h);
    }
    this.animations_.push(u),
      this.setHint(Be.ANIMATING, 1),
      this.updateAnimations_();
  }
  getAnimating() {
    return this.hints_[Be.ANIMATING] > 0;
  }
  getInteracting() {
    return this.hints_[Be.INTERACTING] > 0;
  }
  cancelAnimations() {
    this.setHint(Be.ANIMATING, -this.hints_[Be.ANIMATING]);
    let e;
    for (let n = 0, i = this.animations_.length; n < i; ++n) {
      const r = this.animations_[n];
      if ((r[0].callback && gl(r[0].callback, !1), !e))
        for (let s = 0, o = r.length; s < o; ++s) {
          const l = r[s];
          if (!l.complete) {
            e = l.anchor;
            break;
          }
        }
    }
    (this.animations_.length = 0),
      (this.cancelAnchor_ = e),
      (this.nextCenter_ = null),
      (this.nextResolution_ = NaN),
      (this.nextRotation_ = NaN);
  }
  updateAnimations_() {
    if (
      (this.updateAnimationKey_ !== void 0 &&
        (cancelAnimationFrame(this.updateAnimationKey_),
        (this.updateAnimationKey_ = void 0)),
      !this.getAnimating())
    )
      return;
    const e = Date.now();
    let n = !1;
    for (let i = this.animations_.length - 1; i >= 0; --i) {
      const r = this.animations_[i];
      let s = !0;
      for (let o = 0, l = r.length; o < l; ++o) {
        const a = r[o];
        if (a.complete) continue;
        const u = e - a.start;
        let c = a.duration > 0 ? u / a.duration : 1;
        c >= 1 ? ((a.complete = !0), (c = 1)) : (s = !1);
        const h = a.easing(c);
        if (a.sourceCenter) {
          const d = a.sourceCenter[0],
            f = a.sourceCenter[1],
            p = a.targetCenter[0],
            _ = a.targetCenter[1];
          this.nextCenter_ = a.targetCenter;
          const v = d + h * (p - d),
            g = f + h * (_ - f);
          this.targetCenter_ = [v, g];
        }
        if (a.sourceResolution && a.targetResolution) {
          const d =
            h === 1
              ? a.targetResolution
              : a.sourceResolution +
                h * (a.targetResolution - a.sourceResolution);
          if (a.anchor) {
            const f = this.getViewportSize_(this.getRotation()),
              p = this.constraints_.resolution(d, 0, f, !0);
            this.targetCenter_ = this.calculateCenterZoom(p, a.anchor);
          }
          (this.nextResolution_ = a.targetResolution),
            (this.targetResolution_ = d),
            this.applyTargetState_(!0);
        }
        if (a.sourceRotation !== void 0 && a.targetRotation !== void 0) {
          const d =
            h === 1
              ? br(a.targetRotation + Math.PI, 2 * Math.PI) - Math.PI
              : a.sourceRotation + h * (a.targetRotation - a.sourceRotation);
          if (a.anchor) {
            const f = this.constraints_.rotation(d, !0);
            this.targetCenter_ = this.calculateCenterRotate(f, a.anchor);
          }
          (this.nextRotation_ = a.targetRotation), (this.targetRotation_ = d);
        }
        if ((this.applyTargetState_(!0), (n = !0), !a.complete)) break;
      }
      if (s) {
        (this.animations_[i] = null),
          this.setHint(Be.ANIMATING, -1),
          (this.nextCenter_ = null),
          (this.nextResolution_ = NaN),
          (this.nextRotation_ = NaN);
        const o = r[0].callback;
        o && gl(o, !0);
      }
    }
    (this.animations_ = this.animations_.filter(Boolean)),
      n &&
        this.updateAnimationKey_ === void 0 &&
        (this.updateAnimationKey_ = requestAnimationFrame(
          this.updateAnimations_.bind(this),
        ));
  }
  calculateCenterRotate(e, n) {
    let i;
    const r = this.getCenterInternal();
    return (
      r !== void 0 &&
        ((i = [r[0] - n[0], r[1] - n[1]]),
        vd(i, e - this.getRotation()),
        Jv(i, n)),
      i
    );
  }
  calculateCenterZoom(e, n) {
    let i;
    const r = this.getCenterInternal(),
      s = this.getResolution();
    if (r !== void 0 && s !== void 0) {
      const o = n[0] - (e * (n[0] - r[0])) / s,
        l = n[1] - (e * (n[1] - r[1])) / s;
      i = [o, l];
    }
    return i;
  }
  getViewportSize_(e) {
    const n = this.viewportSize_;
    if (e) {
      const i = n[0],
        r = n[1];
      return [
        Math.abs(i * Math.cos(e)) + Math.abs(r * Math.sin(e)),
        Math.abs(i * Math.sin(e)) + Math.abs(r * Math.cos(e)),
      ];
    }
    return n;
  }
  setViewportSize(e) {
    (this.viewportSize_ = Array.isArray(e) ? e.slice() : [100, 100]),
      this.getAnimating() || this.resolveConstraints(0);
  }
  getCenter() {
    const e = this.getCenterInternal();
    return e && ih(e, this.getProjection());
  }
  getCenterInternal() {
    return this.get(Gt.CENTER);
  }
  getConstraints() {
    return this.constraints_;
  }
  getConstrainResolution() {
    return this.get("constrainResolution");
  }
  getHints(e) {
    return e !== void 0
      ? ((e[0] = this.hints_[0]), (e[1] = this.hints_[1]), e)
      : this.hints_.slice();
  }
  calculateExtent(e) {
    const n = this.calculateExtentInternal(e);
    return rh(n, this.getProjection());
  }
  calculateExtentInternal(e) {
    e = e || this.getViewportSizeMinusPadding_();
    const n = this.getCenterInternal();
    ee(n, "The view center is not defined");
    const i = this.getResolution();
    ee(i !== void 0, "The view resolution is not defined");
    const r = this.getRotation();
    return ee(r !== void 0, "The view rotation is not defined"), Jc(n, i, r, e);
  }
  getMaxResolution() {
    return this.maxResolution_;
  }
  getMinResolution() {
    return this.minResolution_;
  }
  getMaxZoom() {
    return this.getZoomForResolution(this.minResolution_);
  }
  setMaxZoom(e) {
    this.applyOptions_(this.getUpdatedOptions_({ maxZoom: e }));
  }
  getMinZoom() {
    return this.getZoomForResolution(this.maxResolution_);
  }
  setMinZoom(e) {
    this.applyOptions_(this.getUpdatedOptions_({ minZoom: e }));
  }
  setConstrainResolution(e) {
    this.applyOptions_(this.getUpdatedOptions_({ constrainResolution: e }));
  }
  getProjection() {
    return this.projection_;
  }
  getResolution() {
    return this.get(Gt.RESOLUTION);
  }
  getResolutions() {
    return this.resolutions_;
  }
  getResolutionForExtent(e, n) {
    return this.getResolutionForExtentInternal(zi(e, this.getProjection()), n);
  }
  getResolutionForExtentInternal(e, n) {
    n = n || this.getViewportSizeMinusPadding_();
    const i = ae(e) / n[0],
      r = xt(e) / n[1];
    return Math.max(i, r);
  }
  getResolutionForValueFunction(e) {
    e = e || 2;
    const n = this.getConstrainedResolution(this.maxResolution_),
      i = this.minResolution_,
      r = Math.log(n / i) / Math.log(e);
    return function (s) {
      return n / Math.pow(e, s * r);
    };
  }
  getRotation() {
    return this.get(Gt.ROTATION);
  }
  getValueForResolutionFunction(e) {
    const n = Math.log(e || 2),
      i = this.getConstrainedResolution(this.maxResolution_),
      r = this.minResolution_,
      s = Math.log(i / r) / n;
    return function (o) {
      return Math.log(i / o) / n / s;
    };
  }
  getViewportSizeMinusPadding_(e) {
    let n = this.getViewportSize_(e);
    const i = this.padding_;
    return i && (n = [n[0] - i[1] - i[3], n[1] - i[0] - i[2]]), n;
  }
  getState() {
    const e = this.getProjection(),
      n = this.getResolution(),
      i = this.getRotation();
    let r = this.getCenterInternal();
    const s = this.padding_;
    if (s) {
      const o = this.getViewportSizeMinusPadding_();
      r = bu(
        r,
        this.getViewportSize_(),
        [o[0] / 2 + s[3], o[1] / 2 + s[0]],
        n,
        i,
      );
    }
    return {
      center: r.slice(0),
      projection: e !== void 0 ? e : null,
      resolution: n,
      nextCenter: this.nextCenter_,
      nextResolution: this.nextResolution_,
      nextRotation: this.nextRotation_,
      rotation: i,
      zoom: this.getZoom(),
    };
  }
  getViewStateAndExtent() {
    return { viewState: this.getState(), extent: this.calculateExtent() };
  }
  getZoom() {
    let e;
    const n = this.getResolution();
    return n !== void 0 && (e = this.getZoomForResolution(n)), e;
  }
  getZoomForResolution(e) {
    let n = this.minZoom_ || 0,
      i,
      r;
    if (this.resolutions_) {
      const s = dd(this.resolutions_, e, 1);
      (n = s),
        (i = this.resolutions_[s]),
        s == this.resolutions_.length - 1
          ? (r = 2)
          : (r = i / this.resolutions_[s + 1]);
    } else (i = this.maxResolution_), (r = this.zoomFactor_);
    return n + Math.log(i / e) / Math.log(r);
  }
  getResolutionForZoom(e) {
    if (this.resolutions_) {
      if (this.resolutions_.length <= 1) return 0;
      const n = Re(Math.floor(e), 0, this.resolutions_.length - 2),
        i = this.resolutions_[n] / this.resolutions_[n + 1];
      return this.resolutions_[n] / Math.pow(i, Re(e - n, 0, 1));
    }
    return this.maxResolution_ / Math.pow(this.zoomFactor_, e - this.minZoom_);
  }
  fit(e, n) {
    let i;
    if (
      (ee(
        Array.isArray(e) || typeof e.getSimplifiedGeometry == "function",
        "Invalid extent or geometry provided as `geometry`",
      ),
      Array.isArray(e))
    ) {
      ee(!Lo(e), "Cannot fit empty extent provided as `geometry`");
      const r = zi(e, this.getProjection());
      i = kg(r);
    } else if (e.getType() === "Circle") {
      const r = zi(e.getExtent(), this.getProjection());
      (i = kg(r)), i.rotate(this.getRotation(), mi(r));
    } else {
      const r = U0();
      r ? (i = e.clone().transform(r, this.getProjection())) : (i = e);
    }
    this.fitInternal(i, n);
  }
  rotatedExtentForGeometry(e) {
    const n = this.getRotation(),
      i = Math.cos(n),
      r = Math.sin(-n),
      s = e.getFlatCoordinates(),
      o = e.getStride();
    let l = 1 / 0,
      a = 1 / 0,
      u = -1 / 0,
      c = -1 / 0;
    for (let h = 0, d = s.length; h < d; h += o) {
      const f = s[h] * i - s[h + 1] * r,
        p = s[h] * r + s[h + 1] * i;
      (l = Math.min(l, f)),
        (a = Math.min(a, p)),
        (u = Math.max(u, f)),
        (c = Math.max(c, p));
    }
    return [l, a, u, c];
  }
  fitInternal(e, n) {
    n = n || {};
    let i = n.size;
    i || (i = this.getViewportSizeMinusPadding_());
    const r = n.padding !== void 0 ? n.padding : [0, 0, 0, 0],
      s = n.nearest !== void 0 ? n.nearest : !1;
    let o;
    n.minResolution !== void 0
      ? (o = n.minResolution)
      : n.maxZoom !== void 0
        ? (o = this.getResolutionForZoom(n.maxZoom))
        : (o = 0);
    const l = this.rotatedExtentForGeometry(e);
    let a = this.getResolutionForExtentInternal(l, [
      i[0] - r[1] - r[3],
      i[1] - r[0] - r[2],
    ]);
    (a = isNaN(a) ? o : Math.max(a, o)),
      (a = this.getConstrainedResolution(a, s ? 0 : 1));
    const u = this.getRotation(),
      c = Math.sin(u),
      h = Math.cos(u),
      d = mi(l);
    (d[0] += ((r[1] - r[3]) / 2) * a), (d[1] += ((r[0] - r[2]) / 2) * a);
    const f = d[0] * h - d[1] * c,
      p = d[1] * h + d[0] * c,
      _ = this.getConstrainedCenter([f, p], a),
      v = n.callback ? n.callback : Hr;
    n.duration !== void 0
      ? this.animateInternal(
          { resolution: a, center: _, duration: n.duration, easing: n.easing },
          v,
        )
      : ((this.targetResolution_ = a),
        (this.targetCenter_ = _),
        this.applyTargetState_(!1, !0),
        gl(v, !0));
  }
  centerOn(e, n, i) {
    this.centerOnInternal(pn(e, this.getProjection()), n, i);
  }
  centerOnInternal(e, n, i) {
    this.setCenterInternal(
      bu(e, n, i, this.getResolution(), this.getRotation()),
    );
  }
  calculateCenterShift(e, n, i, r) {
    let s;
    const o = this.padding_;
    if (o && e) {
      const l = this.getViewportSizeMinusPadding_(-i),
        a = bu(e, r, [l[0] / 2 + o[3], l[1] / 2 + o[0]], n, i);
      s = [e[0] - a[0], e[1] - a[1]];
    }
    return s;
  }
  isDef() {
    return !!this.getCenterInternal() && this.getResolution() !== void 0;
  }
  adjustCenter(e) {
    const n = ih(this.targetCenter_, this.getProjection());
    this.setCenter([n[0] + e[0], n[1] + e[1]]);
  }
  adjustCenterInternal(e) {
    const n = this.targetCenter_;
    this.setCenterInternal([n[0] + e[0], n[1] + e[1]]);
  }
  adjustResolution(e, n) {
    (n = n && pn(n, this.getProjection())), this.adjustResolutionInternal(e, n);
  }
  adjustResolutionInternal(e, n) {
    const i = this.getAnimating() || this.getInteracting(),
      r = this.getViewportSize_(this.getRotation()),
      s = this.constraints_.resolution(this.targetResolution_ * e, 0, r, i);
    n && (this.targetCenter_ = this.calculateCenterZoom(s, n)),
      (this.targetResolution_ *= e),
      this.applyTargetState_();
  }
  adjustZoom(e, n) {
    this.adjustResolution(Math.pow(this.zoomFactor_, -e), n);
  }
  adjustRotation(e, n) {
    n && (n = pn(n, this.getProjection())), this.adjustRotationInternal(e, n);
  }
  adjustRotationInternal(e, n) {
    const i = this.getAnimating() || this.getInteracting(),
      r = this.constraints_.rotation(this.targetRotation_ + e, i);
    n && (this.targetCenter_ = this.calculateCenterRotate(r, n)),
      (this.targetRotation_ += e),
      this.applyTargetState_();
  }
  setCenter(e) {
    this.setCenterInternal(e && pn(e, this.getProjection()));
  }
  setCenterInternal(e) {
    (this.targetCenter_ = e), this.applyTargetState_();
  }
  setHint(e, n) {
    return (this.hints_[e] += n), this.changed(), this.hints_[e];
  }
  setResolution(e) {
    (this.targetResolution_ = e), this.applyTargetState_();
  }
  setRotation(e) {
    (this.targetRotation_ = e), this.applyTargetState_();
  }
  setZoom(e) {
    this.setResolution(this.getResolutionForZoom(e));
  }
  applyTargetState_(e, n) {
    const i = this.getAnimating() || this.getInteracting() || n,
      r = this.constraints_.rotation(this.targetRotation_, i),
      s = this.getViewportSize_(r),
      o = this.constraints_.resolution(this.targetResolution_, 0, s, i),
      l = this.constraints_.center(
        this.targetCenter_,
        o,
        s,
        i,
        this.calculateCenterShift(this.targetCenter_, o, r, s),
      );
    this.get(Gt.ROTATION) !== r && this.set(Gt.ROTATION, r),
      this.get(Gt.RESOLUTION) !== o &&
        (this.set(Gt.RESOLUTION, o), this.set("zoom", this.getZoom(), !0)),
      (!l || !this.get(Gt.CENTER) || !oa(this.get(Gt.CENTER), l)) &&
        this.set(Gt.CENTER, l),
      this.getAnimating() && !e && this.cancelAnimations(),
      (this.cancelAnchor_ = void 0);
  }
  resolveConstraints(e, n, i) {
    e = e !== void 0 ? e : 200;
    const r = n || 0,
      s = this.constraints_.rotation(this.targetRotation_),
      o = this.getViewportSize_(s),
      l = this.constraints_.resolution(this.targetResolution_, r, o),
      a = this.constraints_.center(
        this.targetCenter_,
        l,
        o,
        !1,
        this.calculateCenterShift(this.targetCenter_, l, s, o),
      );
    if (e === 0 && !this.cancelAnchor_) {
      (this.targetResolution_ = l),
        (this.targetRotation_ = s),
        (this.targetCenter_ = a),
        this.applyTargetState_();
      return;
    }
    (i = i || (e === 0 ? this.cancelAnchor_ : void 0)),
      (this.cancelAnchor_ = void 0),
      (this.getResolution() !== l ||
        this.getRotation() !== s ||
        !this.getCenterInternal() ||
        !oa(this.getCenterInternal(), a)) &&
        (this.getAnimating() && this.cancelAnimations(),
        this.animateInternal({
          rotation: s,
          center: a,
          resolution: l,
          duration: e,
          easing: ss,
          anchor: i,
        }));
  }
  beginInteraction() {
    this.resolveConstraints(0), this.setHint(Be.INTERACTING, 1);
  }
  endInteraction(e, n, i) {
    (i = i && pn(i, this.getProjection())),
      this.endInteractionInternal(e, n, i);
  }
  endInteractionInternal(e, n, i) {
    this.getInteracting() &&
      (this.setHint(Be.INTERACTING, -1), this.resolveConstraints(e, n, i));
  }
  getConstrainedCenter(e, n) {
    const i = this.getViewportSize_(this.getRotation());
    return this.constraints_.center(e, n || this.getResolution(), i);
  }
  getConstrainedZoom(e, n) {
    const i = this.getResolutionForZoom(e);
    return this.getZoomForResolution(this.getConstrainedResolution(i, n));
  }
  getConstrainedResolution(e, n) {
    n = n || 0;
    const i = this.getViewportSize_(this.getRotation());
    return this.constraints_.resolution(e, n, i);
  }
}
function gl(t, e) {
  setTimeout(function () {
    t(e);
  }, 0);
}
function ix(t) {
  if (t.extent !== void 0) {
    const n =
      t.smoothExtentConstraint !== void 0 ? t.smoothExtentConstraint : !0;
    return jg(t.extent, t.constrainOnlyCenter, n);
  }
  const e = xd(t.projection, "EPSG:3857");
  if (t.multiWorld !== !0 && e.isGlobal()) {
    const n = e.getExtent().slice();
    return (n[0] = -1 / 0), (n[2] = 1 / 0), jg(n, !1, !1);
  }
  return $E;
}
function rx(t) {
  let e,
    n,
    i,
    o = t.minZoom !== void 0 ? t.minZoom : Gu,
    l = t.maxZoom !== void 0 ? t.maxZoom : 28;
  const a = t.zoomFactor !== void 0 ? t.zoomFactor : 2,
    u = t.multiWorld !== void 0 ? t.multiWorld : !1,
    c =
      t.smoothResolutionConstraint !== void 0
        ? t.smoothResolutionConstraint
        : !0,
    h = t.showFullExtent !== void 0 ? t.showFullExtent : !1,
    d = xd(t.projection, "EPSG:3857"),
    f = d.getExtent();
  let p = t.constrainOnlyCenter,
    _ = t.extent;
  if (
    (!u && !_ && d.isGlobal() && ((p = !1), (_ = f)), t.resolutions !== void 0)
  ) {
    const v = t.resolutions;
    (n = v[o]),
      (i = v[l] !== void 0 ? v[l] : v[v.length - 1]),
      t.constrainResolution
        ? (e = HE(v, c, !p && _, h))
        : (e = Gg(n, i, c, !p && _, h));
  } else {
    const g =
        (f
          ? Math.max(ae(f), xt(f))
          : (360 * ho.degrees) / d.getMetersPerUnit()) /
        Dd /
        Math.pow(2, Gu),
      m = g / Math.pow(2, 28 - Gu);
    (n = t.maxResolution),
      n !== void 0 ? (o = 0) : (n = g / Math.pow(a, o)),
      (i = t.minResolution),
      i === void 0 &&
        (t.maxZoom !== void 0
          ? t.maxResolution !== void 0
            ? (i = n / Math.pow(a, l))
            : (i = g / Math.pow(a, l))
          : (i = m)),
      (l = o + Math.floor(Math.log(n / i) / Math.log(a))),
      (i = n / Math.pow(a, l - o)),
      t.constrainResolution
        ? (e = qE(a, n, i, c, !p && _, h))
        : (e = Gg(n, i, c, !p && _, h));
  }
  return {
    constraint: e,
    maxResolution: n,
    minResolution: i,
    minZoom: o,
    zoomFactor: a,
  };
}
function sx(t) {
  if (t.enableRotation !== void 0 ? t.enableRotation : !0) {
    const n = t.constrainRotation;
    return n === void 0 || n === !0
      ? JE()
      : n === !1
        ? bg
        : typeof n == "number"
          ? QE(n)
          : bg;
  }
  return Gd;
}
function ox(t) {
  return !(
    (t.sourceCenter && t.targetCenter && !oa(t.sourceCenter, t.targetCenter)) ||
    t.sourceResolution !== t.targetResolution ||
    t.sourceRotation !== t.targetRotation
  );
}
function bu(t, e, n, i, r) {
  const s = Math.cos(-r);
  let o = Math.sin(-r),
    l = t[0] * s - t[1] * o,
    a = t[1] * s + t[0] * o;
  (l += (e[0] / 2 - n[0]) * i), (a += (n[1] - e[1] / 2) * i), (o = -o);
  const u = l * s - a * o,
    c = a * s + l * o;
  return [u, c];
}
const Jt = nx;
class tu extends h_ {
  constructor(e) {
    const n = Object.assign({}, e);
    delete n.source,
      super(n),
      this.on,
      this.once,
      this.un,
      (this.mapPrecomposeKey_ = null),
      (this.mapRenderKey_ = null),
      (this.sourceChangeKey_ = null),
      (this.renderer_ = null),
      (this.sourceReady_ = !1),
      (this.rendered = !1),
      e.render && (this.render = e.render),
      e.map && this.setMap(e.map),
      this.addChangeListener(se.SOURCE, this.handleSourcePropertyChange_);
    const i = e.source ? e.source : null;
    this.setSource(i);
  }
  getLayersArray(e) {
    return (e = e || []), e.push(this), e;
  }
  getLayerStatesArray(e) {
    return (e = e || []), e.push(this.getLayerState()), e;
  }
  getSource() {
    return this.get(se.SOURCE) || null;
  }
  getRenderSource() {
    return this.getSource();
  }
  getSourceState() {
    const e = this.getSource();
    return e ? e.getState() : "undefined";
  }
  handleSourceChange_() {
    this.changed(),
      !(this.sourceReady_ || this.getSource().getState() !== "ready") &&
        ((this.sourceReady_ = !0), this.dispatchEvent("sourceready"));
  }
  handleSourcePropertyChange_() {
    this.sourceChangeKey_ &&
      (ce(this.sourceChangeKey_), (this.sourceChangeKey_ = null)),
      (this.sourceReady_ = !1);
    const e = this.getSource();
    e &&
      ((this.sourceChangeKey_ = Q(e, K.CHANGE, this.handleSourceChange_, this)),
      e.getState() === "ready" &&
        ((this.sourceReady_ = !0),
        setTimeout(() => {
          this.dispatchEvent("sourceready");
        }, 0))),
      this.changed();
  }
  getFeatures(e) {
    return this.renderer_ ? this.renderer_.getFeatures(e) : Promise.resolve([]);
  }
  getData(e) {
    return !this.renderer_ || !this.rendered ? null : this.renderer_.getData(e);
  }
  isVisible(e) {
    let n;
    const i = this.getMapInternal();
    !e && i && (e = i.getView()),
      e instanceof Jt
        ? (n = { viewState: e.getState(), extent: e.calculateExtent() })
        : (n = e),
      !n.layerStatesArray &&
        i &&
        (n.layerStatesArray = i.getLayerGroup().getLayerStatesArray());
    let r;
    n.layerStatesArray
      ? (r = n.layerStatesArray.find((o) => o.layer === this))
      : (r = this.getLayerState());
    const s = this.getExtent();
    return bd(r, n.viewState) && (!s || at(s, n.extent));
  }
  getAttributions(e) {
    if (!this.isVisible(e)) return [];
    let n;
    const i = this.getSource();
    if ((i && (n = i.getAttributions()), !n)) return [];
    const r = e instanceof Jt ? e.getViewStateAndExtent() : e;
    let s = n(r);
    return Array.isArray(s) || (s = [s]), s;
  }
  render(e, n) {
    const i = this.getRenderer();
    return i.prepareFrame(e)
      ? ((this.rendered = !0), i.renderFrame(e, n))
      : null;
  }
  unrender() {
    this.rendered = !1;
  }
  setMapInternal(e) {
    e || this.unrender(), this.set(se.MAP, e);
  }
  getMapInternal() {
    return this.get(se.MAP);
  }
  setMap(e) {
    this.mapPrecomposeKey_ &&
      (ce(this.mapPrecomposeKey_), (this.mapPrecomposeKey_ = null)),
      e || this.changed(),
      this.mapRenderKey_ &&
        (ce(this.mapRenderKey_), (this.mapRenderKey_ = null)),
      e &&
        ((this.mapPrecomposeKey_ = Q(
          e,
          ln.PRECOMPOSE,
          function (n) {
            const r = n.frameState.layerStatesArray,
              s = this.getLayerState(!1);
            ee(
              !r.some(function (o) {
                return o.layer === s.layer;
              }),
              "A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both.",
            ),
              r.push(s);
          },
          this,
        )),
        (this.mapRenderKey_ = Q(this, K.CHANGE, e.render, e)),
        this.changed());
  }
  setSource(e) {
    this.set(se.SOURCE, e);
  }
  getRenderer() {
    return (
      this.renderer_ || (this.renderer_ = this.createRenderer()), this.renderer_
    );
  }
  hasRenderer() {
    return !!this.renderer_;
  }
  createRenderer() {
    return null;
  }
  disposeInternal() {
    this.renderer_ && (this.renderer_.dispose(), delete this.renderer_),
      this.setSource(null),
      super.disposeInternal();
  }
}
function bd(t, e) {
  if (!t.visible) return !1;
  const n = e.resolution;
  if (n < t.minResolution || n >= t.maxResolution) return !1;
  const i = e.zoom;
  return i > t.minZoom && i <= t.maxZoom;
}
function lx(t, e, n, i, r) {
  f_(t, e, n || 0, i || t.length - 1, r || ax);
}
function f_(t, e, n, i, r) {
  for (; i > n; ) {
    if (i - n > 600) {
      var s = i - n + 1,
        o = e - n + 1,
        l = Math.log(s),
        a = 0.5 * Math.exp((2 * l) / 3),
        u = 0.5 * Math.sqrt((l * a * (s - a)) / s) * (o - s / 2 < 0 ? -1 : 1),
        c = Math.max(n, Math.floor(e - (o * a) / s + u)),
        h = Math.min(i, Math.floor(e + ((s - o) * a) / s + u));
      f_(t, e, c, h, r);
    }
    var d = t[e],
      f = n,
      p = i;
    for (Cs(t, n, e), r(t[i], d) > 0 && Cs(t, n, i); f < p; ) {
      for (Cs(t, f, p), f++, p--; r(t[f], d) < 0; ) f++;
      for (; r(t[p], d) > 0; ) p--;
    }
    r(t[n], d) === 0 ? Cs(t, n, p) : (p++, Cs(t, p, i)),
      p <= e && (n = p + 1),
      e <= p && (i = p - 1);
  }
}
function Cs(t, e, n) {
  var i = t[e];
  (t[e] = t[n]), (t[n] = i);
}
function ax(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
let g_ = class {
  constructor(e = 9) {
    (this._maxEntries = Math.max(4, e)),
      (this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4))),
      this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(e) {
    let n = this.data;
    const i = [];
    if (!pl(e, n)) return i;
    const r = this.toBBox,
      s = [];
    for (; n; ) {
      for (let o = 0; o < n.children.length; o++) {
        const l = n.children[o],
          a = n.leaf ? r(l) : l;
        pl(e, a) &&
          (n.leaf ? i.push(l) : Xu(e, a) ? this._all(l, i) : s.push(l));
      }
      n = s.pop();
    }
    return i;
  }
  collides(e) {
    let n = this.data;
    if (!pl(e, n)) return !1;
    const i = [];
    for (; n; ) {
      for (let r = 0; r < n.children.length; r++) {
        const s = n.children[r],
          o = n.leaf ? this.toBBox(s) : s;
        if (pl(e, o)) {
          if (n.leaf || Xu(e, o)) return !0;
          i.push(s);
        }
      }
      n = i.pop();
    }
    return !1;
  }
  load(e) {
    if (!(e && e.length)) return this;
    if (e.length < this._minEntries) {
      for (let i = 0; i < e.length; i++) this.insert(e[i]);
      return this;
    }
    let n = this._build(e.slice(), 0, e.length - 1, 0);
    if (!this.data.children.length) this.data = n;
    else if (this.data.height === n.height) this._splitRoot(this.data, n);
    else {
      if (this.data.height < n.height) {
        const i = this.data;
        (this.data = n), (n = i);
      }
      this._insert(n, this.data.height - n.height - 1, !0);
    }
    return this;
  }
  insert(e) {
    return e && this._insert(e, this.data.height - 1), this;
  }
  clear() {
    return (this.data = pr([])), this;
  }
  remove(e, n) {
    if (!e) return this;
    let i = this.data;
    const r = this.toBBox(e),
      s = [],
      o = [];
    let l, a, u;
    for (; i || s.length; ) {
      if (
        (i || ((i = s.pop()), (a = s[s.length - 1]), (l = o.pop()), (u = !0)),
        i.leaf)
      ) {
        const c = ux(e, i.children, n);
        if (c !== -1)
          return i.children.splice(c, 1), s.push(i), this._condense(s), this;
      }
      !u && !i.leaf && Xu(i, r)
        ? (s.push(i), o.push(l), (l = 0), (a = i), (i = i.children[0]))
        : a
          ? (l++, (i = a.children[l]), (u = !1))
          : (i = null);
    }
    return this;
  }
  toBBox(e) {
    return e;
  }
  compareMinX(e, n) {
    return e.minX - n.minX;
  }
  compareMinY(e, n) {
    return e.minY - n.minY;
  }
  toJSON() {
    return this.data;
  }
  fromJSON(e) {
    return (this.data = e), this;
  }
  _all(e, n) {
    const i = [];
    for (; e; )
      e.leaf ? n.push(...e.children) : i.push(...e.children), (e = i.pop());
    return n;
  }
  _build(e, n, i, r) {
    const s = i - n + 1;
    let o = this._maxEntries,
      l;
    if (s <= o) return (l = pr(e.slice(n, i + 1))), hr(l, this.toBBox), l;
    r ||
      ((r = Math.ceil(Math.log(s) / Math.log(o))),
      (o = Math.ceil(s / Math.pow(o, r - 1)))),
      (l = pr([])),
      (l.leaf = !1),
      (l.height = r);
    const a = Math.ceil(s / o),
      u = a * Math.ceil(Math.sqrt(o));
    Wg(e, n, i, u, this.compareMinX);
    for (let c = n; c <= i; c += u) {
      const h = Math.min(c + u - 1, i);
      Wg(e, c, h, a, this.compareMinY);
      for (let d = c; d <= h; d += a) {
        const f = Math.min(d + a - 1, h);
        l.children.push(this._build(e, d, f, r - 1));
      }
    }
    return hr(l, this.toBBox), l;
  }
  _chooseSubtree(e, n, i, r) {
    for (; r.push(n), !(n.leaf || r.length - 1 === i); ) {
      let s = 1 / 0,
        o = 1 / 0,
        l;
      for (let a = 0; a < n.children.length; a++) {
        const u = n.children[a],
          c = Wu(u),
          h = dx(e, u) - c;
        h < o
          ? ((o = h), (s = c < s ? c : s), (l = u))
          : h === o && c < s && ((s = c), (l = u));
      }
      n = l || n.children[0];
    }
    return n;
  }
  _insert(e, n, i) {
    const r = i ? e : this.toBBox(e),
      s = [],
      o = this._chooseSubtree(r, this.data, n, s);
    for (
      o.children.push(e), As(o, r);
      n >= 0 && s[n].children.length > this._maxEntries;

    )
      this._split(s, n), n--;
    this._adjustParentBBoxes(r, s, n);
  }
  _split(e, n) {
    const i = e[n],
      r = i.children.length,
      s = this._minEntries;
    this._chooseSplitAxis(i, s, r);
    const o = this._chooseSplitIndex(i, s, r),
      l = pr(i.children.splice(o, i.children.length - o));
    (l.height = i.height),
      (l.leaf = i.leaf),
      hr(i, this.toBBox),
      hr(l, this.toBBox),
      n ? e[n - 1].children.push(l) : this._splitRoot(i, l);
  }
  _splitRoot(e, n) {
    (this.data = pr([e, n])),
      (this.data.height = e.height + 1),
      (this.data.leaf = !1),
      hr(this.data, this.toBBox);
  }
  _chooseSplitIndex(e, n, i) {
    let r,
      s = 1 / 0,
      o = 1 / 0;
    for (let l = n; l <= i - n; l++) {
      const a = Os(e, 0, l, this.toBBox),
        u = Os(e, l, i, this.toBBox),
        c = fx(a, u),
        h = Wu(a) + Wu(u);
      c < s
        ? ((s = c), (r = l), (o = h < o ? h : o))
        : c === s && h < o && ((o = h), (r = l));
    }
    return r || i - n;
  }
  _chooseSplitAxis(e, n, i) {
    const r = e.leaf ? this.compareMinX : cx,
      s = e.leaf ? this.compareMinY : hx,
      o = this._allDistMargin(e, n, i, r),
      l = this._allDistMargin(e, n, i, s);
    o < l && e.children.sort(r);
  }
  _allDistMargin(e, n, i, r) {
    e.children.sort(r);
    const s = this.toBBox,
      o = Os(e, 0, n, s),
      l = Os(e, i - n, i, s);
    let a = ml(o) + ml(l);
    for (let u = n; u < i - n; u++) {
      const c = e.children[u];
      As(o, e.leaf ? s(c) : c), (a += ml(o));
    }
    for (let u = i - n - 1; u >= n; u--) {
      const c = e.children[u];
      As(l, e.leaf ? s(c) : c), (a += ml(l));
    }
    return a;
  }
  _adjustParentBBoxes(e, n, i) {
    for (let r = i; r >= 0; r--) As(n[r], e);
  }
  _condense(e) {
    for (let n = e.length - 1, i; n >= 0; n--)
      e[n].children.length === 0
        ? n > 0
          ? ((i = e[n - 1].children), i.splice(i.indexOf(e[n]), 1))
          : this.clear()
        : hr(e[n], this.toBBox);
  }
};
function ux(t, e, n) {
  if (!n) return e.indexOf(t);
  for (let i = 0; i < e.length; i++) if (n(t, e[i])) return i;
  return -1;
}
function hr(t, e) {
  Os(t, 0, t.children.length, e, t);
}
function Os(t, e, n, i, r) {
  r || (r = pr(null)),
    (r.minX = 1 / 0),
    (r.minY = 1 / 0),
    (r.maxX = -1 / 0),
    (r.maxY = -1 / 0);
  for (let s = e; s < n; s++) {
    const o = t.children[s];
    As(r, t.leaf ? i(o) : o);
  }
  return r;
}
function As(t, e) {
  return (
    (t.minX = Math.min(t.minX, e.minX)),
    (t.minY = Math.min(t.minY, e.minY)),
    (t.maxX = Math.max(t.maxX, e.maxX)),
    (t.maxY = Math.max(t.maxY, e.maxY)),
    t
  );
}
function cx(t, e) {
  return t.minX - e.minX;
}
function hx(t, e) {
  return t.minY - e.minY;
}
function Wu(t) {
  return (t.maxX - t.minX) * (t.maxY - t.minY);
}
function ml(t) {
  return t.maxX - t.minX + (t.maxY - t.minY);
}
function dx(t, e) {
  return (
    (Math.max(e.maxX, t.maxX) - Math.min(e.minX, t.minX)) *
    (Math.max(e.maxY, t.maxY) - Math.min(e.minY, t.minY))
  );
}
function fx(t, e) {
  const n = Math.max(t.minX, e.minX),
    i = Math.max(t.minY, e.minY),
    r = Math.min(t.maxX, e.maxX),
    s = Math.min(t.maxY, e.maxY);
  return Math.max(0, r - n) * Math.max(0, s - i);
}
function Xu(t, e) {
  return (
    t.minX <= e.minX && t.minY <= e.minY && e.maxX <= t.maxX && e.maxY <= t.maxY
  );
}
function pl(t, e) {
  return (
    e.minX <= t.maxX && e.minY <= t.maxY && e.maxX >= t.minX && e.maxY >= t.minY
  );
}
function pr(t) {
  return {
    children: t,
    height: 1,
    leaf: !0,
    minX: 1 / 0,
    minY: 1 / 0,
    maxX: -1 / 0,
    maxY: -1 / 0,
  };
}
function Wg(t, e, n, i, r) {
  const s = [e, n];
  for (; s.length; ) {
    if (((n = s.pop()), (e = s.pop()), n - e <= i)) continue;
    const o = e + Math.ceil((n - e) / i / 2) * i;
    lx(t, o, e, n, r), s.push(e, o, o, n);
  }
}
function gx(t, e, n) {
  const i = t;
  let r = !0,
    s = !1,
    o = !1;
  const l = [
    ra(i, K.LOAD, function () {
      (o = !0), s || e();
    }),
  ];
  return (
    i.src && L0
      ? ((s = !0),
        i
          .decode()
          .then(function () {
            r && e();
          })
          .catch(function (a) {
            r && (o ? e() : n());
          }))
      : l.push(ra(i, K.ERROR, n)),
    function () {
      (r = !1), l.forEach(ce);
    }
  );
}
function mx(t, e) {
  return new Promise((n, i) => {
    function r() {
      o(), n(t);
    }
    function s() {
      o(), i(new Error("Image load error"));
    }
    function o() {
      t.removeEventListener("load", r), t.removeEventListener("error", s);
    }
    t.addEventListener("load", r),
      t.addEventListener("error", s),
      e && (t.src = e);
  });
}
function px(t, e) {
  return (
    e && (t.src = e),
    t.src && L0
      ? new Promise((n, i) =>
          t
            .decode()
            .then(() => n(t))
            .catch((r) => (t.complete && t.width ? n(t) : i(r))),
        )
      : mx(t)
  );
}
class _x {
  constructor() {
    (this.cache_ = {}), (this.cacheSize_ = 0), (this.maxCacheSize_ = 32);
  }
  clear() {
    (this.cache_ = {}), (this.cacheSize_ = 0);
  }
  canExpireCache() {
    return this.cacheSize_ > this.maxCacheSize_;
  }
  expire() {
    if (this.canExpireCache()) {
      let e = 0;
      for (const n in this.cache_) {
        const i = this.cache_[n];
        !(e++ & 3) &&
          !i.hasListener() &&
          (delete this.cache_[n], --this.cacheSize_);
      }
    }
  }
  get(e, n, i) {
    const r = Xg(e, n, i);
    return r in this.cache_ ? this.cache_[r] : null;
  }
  set(e, n, i, r) {
    const s = Xg(e, n, i);
    (this.cache_[s] = r), ++this.cacheSize_;
  }
  setSize(e) {
    (this.maxCacheSize_ = e), this.expire();
  }
}
function Xg(t, e, n) {
  const i = n ? r_(n) : "null";
  return e + ":" + t + ":" + i;
}
const ga = new _x();
let Ss = null;
class yx extends Ga {
  constructor(e, n, i, r, s) {
    super(),
      (this.hitDetectionImage_ = null),
      (this.image_ = e),
      (this.crossOrigin_ = i),
      (this.canvas_ = {}),
      (this.color_ = s),
      (this.imageState_ = r === void 0 ? le.IDLE : r),
      (this.size_ = e && e.width && e.height ? [e.width, e.height] : null),
      (this.src_ = n),
      this.tainted_;
  }
  initializeImage_() {
    (this.image_ = new Image()),
      this.crossOrigin_ !== null &&
        (this.image_.crossOrigin = this.crossOrigin_);
  }
  isTainted_() {
    if (this.tainted_ === void 0 && this.imageState_ === le.LOADED) {
      Ss || (Ss = Qe(1, 1, void 0, { willReadFrequently: !0 })),
        Ss.drawImage(this.image_, 0, 0);
      try {
        Ss.getImageData(0, 0, 1, 1), (this.tainted_ = !1);
      } catch {
        (Ss = null), (this.tainted_ = !0);
      }
    }
    return this.tainted_ === !0;
  }
  dispatchChangeEvent_() {
    this.dispatchEvent(K.CHANGE);
  }
  handleImageError_() {
    (this.imageState_ = le.ERROR), this.dispatchChangeEvent_();
  }
  handleImageLoad_() {
    (this.imageState_ = le.LOADED),
      (this.size_ = [this.image_.width, this.image_.height]),
      this.dispatchChangeEvent_();
  }
  getImage(e) {
    return (
      this.image_ || this.initializeImage_(),
      this.replaceColor_(e),
      this.canvas_[e] ? this.canvas_[e] : this.image_
    );
  }
  getPixelRatio(e) {
    return this.replaceColor_(e), this.canvas_[e] ? e : 1;
  }
  getImageState() {
    return this.imageState_;
  }
  getHitDetectionImage() {
    if ((this.image_ || this.initializeImage_(), !this.hitDetectionImage_))
      if (this.isTainted_()) {
        const e = this.size_[0],
          n = this.size_[1],
          i = Qe(e, n);
        i.fillRect(0, 0, e, n), (this.hitDetectionImage_ = i.canvas);
      } else this.hitDetectionImage_ = this.image_;
    return this.hitDetectionImage_;
  }
  getSize() {
    return this.size_;
  }
  getSrc() {
    return this.src_;
  }
  load() {
    if (this.imageState_ === le.IDLE) {
      this.image_ || this.initializeImage_(), (this.imageState_ = le.LOADING);
      try {
        this.src_ !== void 0 && (this.image_.src = this.src_);
      } catch {
        this.handleImageError_();
      }
      this.image_ instanceof HTMLImageElement &&
        px(this.image_, this.src_)
          .then((e) => {
            (this.image_ = e), this.handleImageLoad_();
          })
          .catch(this.handleImageError_.bind(this));
    }
  }
  replaceColor_(e) {
    if (!this.color_ || this.canvas_[e] || this.imageState_ !== le.LOADED)
      return;
    const n = this.image_,
      i = document.createElement("canvas");
    (i.width = Math.ceil(n.width * e)), (i.height = Math.ceil(n.height * e));
    const r = i.getContext("2d");
    r.scale(e, e),
      r.drawImage(n, 0, 0),
      (r.globalCompositeOperation = "multiply"),
      (r.fillStyle = r_(this.color_)),
      r.fillRect(0, 0, i.width / e, i.height / e),
      (r.globalCompositeOperation = "destination-in"),
      r.drawImage(n, 0, 0),
      (this.canvas_[e] = i);
  }
}
function vx(t, e, n, i, r) {
  let s = e === void 0 ? void 0 : ga.get(e, n, r);
  return (
    s ||
      ((s = new yx(
        t,
        t instanceof HTMLImageElement ? t.src || void 0 : e,
        n,
        i,
        r,
      )),
      ga.set(e, n, r, s)),
    s
  );
}
function Bg(t, e, n, i) {
  return n !== void 0 && i !== void 0
    ? [n / t, i / e]
    : n !== void 0
      ? n / t
      : i !== void 0
        ? i / e
        : 1;
}
class Wd extends $a {
  constructor(e) {
    e = e || {};
    const n = e.opacity !== void 0 ? e.opacity : 1,
      i = e.rotation !== void 0 ? e.rotation : 0,
      r = e.scale !== void 0 ? e.scale : 1,
      s = e.rotateWithView !== void 0 ? e.rotateWithView : !1;
    super({
      opacity: n,
      rotation: i,
      scale: r,
      displacement: e.displacement !== void 0 ? e.displacement : [0, 0],
      rotateWithView: s,
      declutterMode: e.declutterMode,
    }),
      (this.anchor_ = e.anchor !== void 0 ? e.anchor : [0.5, 0.5]),
      (this.normalizedAnchor_ = null),
      (this.anchorOrigin_ =
        e.anchorOrigin !== void 0 ? e.anchorOrigin : "top-left"),
      (this.anchorXUnits_ =
        e.anchorXUnits !== void 0 ? e.anchorXUnits : "fraction"),
      (this.anchorYUnits_ =
        e.anchorYUnits !== void 0 ? e.anchorYUnits : "fraction"),
      (this.crossOrigin_ = e.crossOrigin !== void 0 ? e.crossOrigin : null);
    const o = e.img !== void 0 ? e.img : null;
    let l = e.src;
    ee(
      !(l !== void 0 && o),
      "`image` and `src` cannot be provided at the same time",
    ),
      (l === void 0 || l.length === 0) && o && (l = o.src || ne(o)),
      ee(
        l !== void 0 && l.length > 0,
        "A defined and non-empty `src` or `image` must be provided",
      ),
      ee(
        !((e.width !== void 0 || e.height !== void 0) && e.scale !== void 0),
        "`width` or `height` cannot be provided together with `scale`",
      );
    let a;
    if (
      (e.src !== void 0
        ? (a = le.IDLE)
        : o !== void 0 &&
          (o instanceof HTMLImageElement
            ? o.complete
              ? (a = o.src ? le.LOADED : le.IDLE)
              : (a = le.LOADING)
            : (a = le.LOADED)),
      (this.color_ = e.color !== void 0 ? ca(e.color) : null),
      (this.iconImage_ = vx(o, l, this.crossOrigin_, a, this.color_)),
      (this.offset_ = e.offset !== void 0 ? e.offset : [0, 0]),
      (this.offsetOrigin_ =
        e.offsetOrigin !== void 0 ? e.offsetOrigin : "top-left"),
      (this.origin_ = null),
      (this.size_ = e.size !== void 0 ? e.size : null),
      e.width !== void 0 || e.height !== void 0)
    ) {
      let u, c;
      if (e.size) [u, c] = e.size;
      else {
        const h = this.getImage(1);
        if (h.width && h.height) (u = h.width), (c = h.height);
        else if (h instanceof HTMLImageElement) {
          this.initialOptions_ = e;
          const d = () => {
            if ((this.unlistenImageChange(d), !this.initialOptions_)) return;
            const f = this.iconImage_.getSize();
            this.setScale(Bg(f[0], f[1], e.width, e.height));
          };
          this.listenImageChange(d);
          return;
        }
      }
      u !== void 0 && this.setScale(Bg(u, c, e.width, e.height));
    }
  }
  clone() {
    let e, n, i;
    return (
      this.initialOptions_
        ? ((n = this.initialOptions_.width), (i = this.initialOptions_.height))
        : ((e = this.getScale()), (e = Array.isArray(e) ? e.slice() : e)),
      new Wd({
        anchor: this.anchor_.slice(),
        anchorOrigin: this.anchorOrigin_,
        anchorXUnits: this.anchorXUnits_,
        anchorYUnits: this.anchorYUnits_,
        color:
          this.color_ && this.color_.slice
            ? this.color_.slice()
            : this.color_ || void 0,
        crossOrigin: this.crossOrigin_,
        offset: this.offset_.slice(),
        offsetOrigin: this.offsetOrigin_,
        opacity: this.getOpacity(),
        rotateWithView: this.getRotateWithView(),
        rotation: this.getRotation(),
        scale: e,
        width: n,
        height: i,
        size: this.size_ !== null ? this.size_.slice() : void 0,
        src: this.getSrc(),
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode(),
      })
    );
  }
  getAnchor() {
    let e = this.normalizedAnchor_;
    if (!e) {
      e = this.anchor_;
      const r = this.getSize();
      if (
        this.anchorXUnits_ == "fraction" ||
        this.anchorYUnits_ == "fraction"
      ) {
        if (!r) return null;
        (e = this.anchor_.slice()),
          this.anchorXUnits_ == "fraction" && (e[0] *= r[0]),
          this.anchorYUnits_ == "fraction" && (e[1] *= r[1]);
      }
      if (this.anchorOrigin_ != "top-left") {
        if (!r) return null;
        e === this.anchor_ && (e = this.anchor_.slice()),
          (this.anchorOrigin_ == "top-right" ||
            this.anchorOrigin_ == "bottom-right") &&
            (e[0] = -e[0] + r[0]),
          (this.anchorOrigin_ == "bottom-left" ||
            this.anchorOrigin_ == "bottom-right") &&
            (e[1] = -e[1] + r[1]);
      }
      this.normalizedAnchor_ = e;
    }
    const n = this.getDisplacement(),
      i = this.getScaleArray();
    return [e[0] - n[0] / i[0], e[1] + n[1] / i[1]];
  }
  setAnchor(e) {
    (this.anchor_ = e), (this.normalizedAnchor_ = null);
  }
  getColor() {
    return this.color_;
  }
  getImage(e) {
    return this.iconImage_.getImage(e);
  }
  getPixelRatio(e) {
    return this.iconImage_.getPixelRatio(e);
  }
  getImageSize() {
    return this.iconImage_.getSize();
  }
  getImageState() {
    return this.iconImage_.getImageState();
  }
  getHitDetectionImage() {
    return this.iconImage_.getHitDetectionImage();
  }
  getOrigin() {
    if (this.origin_) return this.origin_;
    let e = this.offset_;
    if (this.offsetOrigin_ != "top-left") {
      const n = this.getSize(),
        i = this.iconImage_.getSize();
      if (!n || !i) return null;
      (e = e.slice()),
        (this.offsetOrigin_ == "top-right" ||
          this.offsetOrigin_ == "bottom-right") &&
          (e[0] = i[0] - n[0] - e[0]),
        (this.offsetOrigin_ == "bottom-left" ||
          this.offsetOrigin_ == "bottom-right") &&
          (e[1] = i[1] - n[1] - e[1]);
    }
    return (this.origin_ = e), this.origin_;
  }
  getSrc() {
    return this.iconImage_.getSrc();
  }
  getSize() {
    return this.size_ ? this.size_ : this.iconImage_.getSize();
  }
  getWidth() {
    const e = this.getScaleArray();
    if (this.size_) return this.size_[0] * e[0];
    if (this.iconImage_.getImageState() == le.LOADED)
      return this.iconImage_.getSize()[0] * e[0];
  }
  getHeight() {
    const e = this.getScaleArray();
    if (this.size_) return this.size_[1] * e[1];
    if (this.iconImage_.getImageState() == le.LOADED)
      return this.iconImage_.getSize()[1] * e[1];
  }
  setScale(e) {
    delete this.initialOptions_, super.setScale(e);
  }
  listenImageChange(e) {
    this.iconImage_.addEventListener(K.CHANGE, e);
  }
  load() {
    this.iconImage_.load();
  }
  unlistenImageChange(e) {
    this.iconImage_.removeEventListener(K.CHANGE, e);
  }
}
const Ze = Wd;
let os = 0;
const ls = 0,
  we = 1 << os++,
  j = 1 << os++,
  Ut = 1 << os++,
  Ye = 1 << os++,
  _i = 1 << os++,
  it = Math.pow(2, os) - 1,
  m_ = {
    [we]: "boolean",
    [j]: "number",
    [Ut]: "string",
    [Ye]: "color",
    [_i]: "number[]",
  },
  Ex = Object.keys(m_).map(Number).sort(fi);
function Ve(t) {
  const e = [];
  for (const n of Ex) xx(t, n) && e.push(m_[n]);
  return e.length === 0
    ? "untyped"
    : e.length < 3
      ? e.join(" or ")
      : e.slice(0, -1).join(", ") + ", or " + e[e.length - 1];
}
function xx(t, e) {
  return (t & e) === e;
}
function an(t, e) {
  return !!(t & e);
}
function nu(t, e) {
  return t === e;
}
class ei {
  constructor(e, n) {
    (this.type = e), (this.value = n);
  }
}
class wx {
  constructor(e, n, ...i) {
    (this.type = e), (this.operator = n), (this.args = i);
  }
}
function p_() {
  return {
    variables: new Set(),
    properties: new Set(),
    featureId: !1,
    style: {},
  };
}
function Cx(t) {
  switch (t) {
    case "string":
      return Ut;
    case "color":
      return Ye;
    case "number":
      return j;
    case "boolean":
      return we;
    case "number[]":
      return _i;
    default:
      throw new Error(`Unrecognized type hint: ${t}`);
  }
}
function re(t, e, n) {
  switch (typeof t) {
    case "boolean":
      return new ei(we, t);
    case "number":
      return new ei(j, t);
    case "string": {
      let r = Ut;
      return FE(t) && (r |= Ye), nu(r & n, ls) || (r &= n), new ei(r, t);
    }
  }
  if (!Array.isArray(t))
    throw new Error("Expression must be an array or a primitive value");
  if (t.length === 0) throw new Error("Empty expression");
  if (typeof t[0] == "string") return Fx(t, e, n);
  for (const r of t)
    if (typeof r != "number") throw new Error("Expected an array of numbers");
  let i = _i;
  return (
    (t.length === 3 || t.length === 4) && (i |= Ye), n && (i &= n), new ei(i, t)
  );
}
const k = {
    Get: "get",
    Var: "var",
    Concat: "concat",
    GeometryType: "geometry-type",
    Any: "any",
    All: "all",
    Not: "!",
    Resolution: "resolution",
    Zoom: "zoom",
    Time: "time",
    Equal: "==",
    NotEqual: "!=",
    GreaterThan: ">",
    GreaterThanOrEqualTo: ">=",
    LessThan: "<",
    LessThanOrEqualTo: "<=",
    Multiply: "*",
    Divide: "/",
    Add: "+",
    Subtract: "-",
    Clamp: "clamp",
    Mod: "%",
    Pow: "^",
    Abs: "abs",
    Floor: "floor",
    Ceil: "ceil",
    Round: "round",
    Sin: "sin",
    Cos: "cos",
    Atan: "atan",
    Sqrt: "sqrt",
    Match: "match",
    Between: "between",
    Interpolate: "interpolate",
    Case: "case",
    In: "in",
    Number: "number",
    String: "string",
    Array: "array",
    Color: "color",
    Id: "id",
    Band: "band",
    Palette: "palette",
  },
  Sx = {
    [k.Get]: Y(([t, e]) => (e !== void 0 ? Cx(e.value) : it), $(1, 2), Tx),
    [k.Var]: Y(([t]) => t.type, $(1, 1), Rx),
    [k.Id]: Y(j | Ut, Ts, Ix),
    [k.Concat]: Y(Ut, $(2, 1 / 0), te(it)),
    [k.GeometryType]: Y(Ut, Ts),
    [k.Resolution]: Y(j, Ts),
    [k.Zoom]: Y(j, Ts),
    [k.Time]: Y(j, Ts),
    [k.Any]: Y(we, $(2, 1 / 0), te(we)),
    [k.All]: Y(we, $(2, 1 / 0), te(we)),
    [k.Not]: Y(we, $(1, 1), te(we)),
    [k.Equal]: Y(we, $(2, 2), te(it), Ii),
    [k.NotEqual]: Y(we, $(2, 2), te(it), Ii),
    [k.GreaterThan]: Y(we, $(2, 2), te(it), Ii),
    [k.GreaterThanOrEqualTo]: Y(we, $(2, 2), te(it), Ii),
    [k.LessThan]: Y(we, $(2, 2), te(it), Ii),
    [k.LessThanOrEqualTo]: Y(we, $(2, 2), te(it), Ii),
    [k.Multiply]: Y(
      (t) => {
        let e = j | Ye;
        for (let n = 0; n < t.length; n++) e &= t[n].type;
        return e;
      },
      $(2, 1 / 0),
      te(j | Ye),
      Ii,
    ),
    [k.Divide]: Y(j, $(2, 2), te(j)),
    [k.Add]: Y(j, $(2, 1 / 0), te(j)),
    [k.Subtract]: Y(j, $(2, 2), te(j)),
    [k.Clamp]: Y(j, $(3, 3), te(j)),
    [k.Mod]: Y(j, $(2, 2), te(j)),
    [k.Pow]: Y(j, $(2, 2), te(j)),
    [k.Abs]: Y(j, $(1, 1), te(j)),
    [k.Floor]: Y(j, $(1, 1), te(j)),
    [k.Ceil]: Y(j, $(1, 1), te(j)),
    [k.Round]: Y(j, $(1, 1), te(j)),
    [k.Sin]: Y(j, $(1, 1), te(j)),
    [k.Cos]: Y(j, $(1, 1), te(j)),
    [k.Atan]: Y(j, $(1, 2), te(j)),
    [k.Sqrt]: Y(j, $(1, 1), te(j)),
    [k.Match]: Y(
      (t) => {
        let e = it;
        for (let n = 2; n < t.length; n += 2) e &= t[n].type;
        return (e &= t[t.length - 1].type), e;
      },
      $(4, 1 / 0),
      Ug,
      Px,
    ),
    [k.Between]: Y(we, $(3, 3), te(j)),
    [k.Interpolate]: Y(
      (t) => {
        let e = Ye | j;
        for (let n = 3; n < t.length; n += 2) e &= t[n].type;
        return e;
      },
      $(6, 1 / 0),
      Ug,
      Lx,
    ),
    [k.Case]: Y(
      (t) => {
        let e = it;
        for (let n = 1; n < t.length; n += 2) e &= t[n].type;
        return (e &= t[t.length - 1].type), e;
      },
      $(3, 1 / 0),
      kx,
      Mx,
    ),
    [k.In]: Y(we, $(2, 2), Ox),
    [k.Number]: Y(j, $(1, 1 / 0), te(it)),
    [k.String]: Y(Ut, $(1, 1 / 0), te(it)),
    [k.Array]: Y(
      (t) => (t.length === 3 || t.length === 4 ? _i | Ye : _i),
      $(1, 1 / 0),
      te(j),
    ),
    [k.Color]: Y(Ye, $(3, 4), te(j)),
    [k.Band]: Y(j, $(1, 3), te(j)),
    [k.Palette]: Y(Ye, $(2, 2), Ax),
  };
function Tx(t, e) {
  const n = re(t[1], e);
  if (!(n instanceof ei))
    throw new Error("Expected a literal argument for get operation");
  if (typeof n.value != "string")
    throw new Error("Expected a string argument for get operation");
  if ((e.properties.add(n.value), t.length === 3)) {
    const i = re(t[2], e);
    return [n, i];
  }
  return [n];
}
function Rx(t, e, n, i) {
  const r = t[1];
  if (typeof r != "string")
    throw new Error("Expected a string argument for var operation");
  if (
    (e.variables.add(r),
    !("variables" in e.style) || e.style.variables[r] === void 0)
  )
    return [new ei(it, r)];
  const s = e.style.variables[r],
    o = re(s, e);
  if (((o.value = r), i && !an(i, o.type)))
    throw new Error(
      `The variable ${r} has type ${Ve(o.type)} but the following type was expected: ${Ve(i)}`,
    );
  return [o];
}
function Ix(t, e) {
  e.featureId = !0;
}
function Ts(t, e) {
  const n = t[0];
  if (t.length !== 1)
    throw new Error(`Expected no arguments for ${n} operation`);
  return [];
}
function $(t, e) {
  return function (n, i) {
    const r = n[0],
      s = n.length - 1;
    if (t === e) {
      if (s !== t) {
        const o = t === 1 ? "" : "s";
        throw new Error(`Expected ${t} argument${o} for ${r}, got ${s}`);
      }
    } else if (s < t || s > e) {
      const o = e === 1 / 0 ? `${t} or more` : `${t} to ${e}`;
      throw new Error(`Expected ${o} arguments for ${r}, got ${s}`);
    }
  };
}
function te(t) {
  return function (e, n) {
    const i = e[0],
      r = e.length - 1,
      s = new Array(r);
    for (let o = 0; o < r; ++o) {
      const l = re(e[o + 1], n);
      if (!an(t, l.type)) {
        const a = Ve(t),
          u = Ve(l.type);
        throw new Error(
          `Unexpected type for argument ${o} of ${i} operation, got ${a} but expected ${u}`,
        );
      }
      (l.type &= t), (s[o] = l);
    }
    return s;
  };
}
function Ii(t, e, n) {
  const i = t[0],
    r = t.length - 1;
  let s = it;
  for (let l = 0; l < n.length; ++l) s &= n[l].type;
  if (s === ls)
    throw new Error(
      `No common type could be found for arguments of ${i} operation`,
    );
  const o = new Array(r);
  for (let l = 0; l < r; ++l) o[l] = re(t[l + 1], e, s);
  return o;
}
function kx(t, e) {
  const n = t[0],
    i = t.length - 1;
  if (i % 2 === 0)
    throw new Error(
      `An odd amount of arguments was expected for operation ${n}, got ${JSON.stringify(i)} instead`,
    );
}
function Ug(t, e) {
  const n = t[0],
    i = t.length - 1;
  if (i % 2 === 1)
    throw new Error(
      `An even amount of arguments was expected for operation ${n}, got ${JSON.stringify(i)} instead`,
    );
}
function Px(t, e, n, i) {
  const r = t.length - 1;
  let o = re(t[1], e).type;
  const l = re(t[t.length - 1], e);
  let a = i !== void 0 ? i & l.type : l.type;
  const u = new Array(r - 2);
  for (let h = 0; h < r - 2; h += 2) {
    const d = re(t[h + 2], e),
      f = re(t[h + 3], e);
    (o &= d.type), (a &= f.type), (u[h] = d), (u[h + 1] = f);
  }
  const c = Ut | j | we;
  if (!an(c, o))
    throw new Error(
      `Expected an input of type ${Ve(c)} for the interpolate operation, got ${Ve(o)} instead`,
    );
  if (nu(a, ls))
    throw new Error(
      "Could not find a common output type for the following match operation: " +
        JSON.stringify(t),
    );
  for (let h = 0; h < r - 2; h += 2) {
    const d = re(t[h + 2], e, o),
      f = re(t[h + 3], e, a);
    (u[h] = d), (u[h + 1] = f);
  }
  return [re(t[1], e, o), ...u, re(t[t.length - 1], e, a)];
}
function Lx(t, e, n, i) {
  const r = t[1];
  let s;
  switch (r[0]) {
    case "linear":
      s = 1;
      break;
    case "exponential":
      if (((s = r[1]), typeof s != "number"))
        throw new Error(
          `Expected a number base for exponential interpolation, got ${JSON.stringify(s)} instead`,
        );
      break;
    default:
      s = null;
  }
  if (!s) throw new Error(`Invalid interpolation type: ${JSON.stringify(r)}`);
  s = re(s, e);
  let o = re(t[2], e);
  if (!an(j, o.type))
    throw new Error(
      `Expected an input of type number for the interpolate operation, got ${Ve(o.type)} instead`,
    );
  o = re(t[2], e, j);
  const l = new Array(t.length - 3);
  for (let a = 0; a < l.length; a += 2) {
    let u = re(t[a + 3], e);
    if (!an(j, u.type))
      throw new Error(
        `Expected all stop input values in the interpolate operation to be of type number, got ${Ve(u.type)} at position ${a + 2} instead`,
      );
    let c = re(t[a + 4], e);
    if (!an(j | Ye, c.type))
      throw new Error(
        `Expected all stop output values in the interpolate operation to be a number or color, got ${Ve(c.type)} at position ${a + 3} instead`,
      );
    (u = re(t[a + 3], e, j)),
      (c = re(t[a + 4], e, j | Ye)),
      (l[a] = u),
      (l[a + 1] = c);
  }
  return [s, o, ...l];
}
function Mx(t, e, n, i) {
  const r = re(t[t.length - 1], e);
  let s = i !== void 0 ? i & r.type : r.type;
  const o = new Array(t.length - 1);
  for (let l = 0; l < o.length - 1; l += 2) {
    const a = re(t[l + 1], e),
      u = re(t[l + 2], e);
    if (!an(we, a.type))
      throw new Error(
        `Expected all conditions in the case operation to be of type boolean, got ${Ve(a.type)} at position ${l} instead`,
      );
    (s &= u.type), (o[l] = a), (o[l + 1] = u);
  }
  if (nu(s, ls))
    throw new Error(
      "Could not find a common output type for the following case operation: " +
        JSON.stringify(t),
    );
  for (let l = 0; l < o.length - 1; l += 2) o[l + 1] = re(t[l + 2], e, s);
  return (o[o.length - 1] = re(t[t.length - 1], e, s)), o;
}
function Ox(t, e) {
  let n = t[2];
  if (!Array.isArray(n))
    throw new Error(
      'The "in" operator was provided a literal value which was not an array as second argument.',
    );
  if (typeof n[0] == "string") {
    if (n[0] !== "literal")
      throw new Error(
        'For the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions.',
      );
    if (!Array.isArray(n[1]))
      throw new Error(
        'The "in" operator was provided a literal value which was not an array as second argument.',
      );
    n = n[1];
  }
  let i = Ut | j;
  const r = new Array(n.length);
  for (let o = 0; o < r.length; o++) {
    const l = re(n[o], e);
    (i &= l.type), (r[o] = l);
  }
  if (nu(i, ls))
    throw new Error(
      "Could not find a common type for the following in operation: " +
        JSON.stringify(t),
    );
  return [re(t[1], e, i), ...r];
}
function Ax(t, e) {
  const n = re(t[1], e, j);
  if (n.type !== j)
    throw new Error(
      `The first argument of palette must be an number, got ${Ve(n.type)} instead`,
    );
  const i = t[2];
  if (!Array.isArray(i))
    throw new Error("The second argument of palette must be an array");
  const r = new Array(i.length);
  for (let s = 0; s < r.length; s++) {
    const o = re(i[s], e, Ye);
    if (!(o instanceof ei))
      throw new Error(
        `The palette color at index ${s} must be a literal value`,
      );
    if (!an(o.type, Ye))
      throw new Error(
        `The palette color at index ${s} should be of type color, got ${Ve(o.type)} instead`,
      );
    r[s] = o;
  }
  return [n, ...r];
}
function Y(t, ...e) {
  return function (n, i, r) {
    const s = n[0];
    let o = [];
    for (let a = 0; a < e.length; a++) o = e[a](n, i, o, r) || o;
    let l = typeof t == "function" ? t(o) : t;
    if (r !== void 0) {
      if (!an(l, r))
        throw new Error(
          `The following expression was expected to return ${Ve(r)}, but returns ${Ve(l)} instead: ${JSON.stringify(n)}`,
        );
      l &= r;
    }
    if (l === ls)
      throw new Error(
        `No matching type was found for the following expression: ${JSON.stringify(n)}`,
      );
    return new wx(l, s, ...o);
  };
}
function Fx(t, e, n) {
  const i = t[0],
    r = Sx[i];
  if (!r) throw new Error(`Unknown operator: ${i}`);
  return r(t, e, n);
}
function __() {
  return { variables: {}, properties: {}, resolution: NaN, featureId: null };
}
function wi(t, e, n) {
  const i = re(t, n);
  if (!an(e, i.type)) {
    const r = Ve(e),
      s = Ve(i.type);
    throw new Error(`Expected expression to be of type ${r}, got ${s}`);
  }
  return An(i);
}
function An(t, e) {
  if (t instanceof ei) {
    if (t.type === Ye && typeof t.value == "string") {
      const i = Ad(t.value);
      return function () {
        return i;
      };
    }
    return function () {
      return t.value;
    };
  }
  const n = t.operator;
  switch (n) {
    case k.Number:
    case k.String:
      return Nx(t);
    case k.Get:
    case k.Var:
      return Dx(t);
    case k.Id:
      return (i) => i.featureId;
    case k.Concat: {
      const i = t.args.map((r) => An(r));
      return (r) => "".concat(...i.map((s) => s(r).toString()));
    }
    case k.Resolution:
      return (i) => i.resolution;
    case k.Any:
    case k.All:
    case k.Not:
      return jx(t);
    case k.Equal:
    case k.NotEqual:
    case k.LessThan:
    case k.LessThanOrEqualTo:
    case k.GreaterThan:
    case k.GreaterThanOrEqualTo:
      return zx(t);
    case k.Multiply:
    case k.Divide:
    case k.Add:
    case k.Subtract:
    case k.Clamp:
    case k.Mod:
    case k.Pow:
    case k.Abs:
    case k.Floor:
    case k.Ceil:
    case k.Round:
    case k.Sin:
    case k.Cos:
    case k.Atan:
    case k.Sqrt:
      return Gx(t);
    case k.Match:
      return bx(t);
    case k.Interpolate:
      return Wx(t);
    default:
      throw new Error(`Unsupported operator ${n}`);
  }
}
function Nx(t, e) {
  const n = t.operator,
    i = t.args.length,
    r = new Array(i);
  for (let s = 0; s < i; ++s) r[s] = An(t.args[s]);
  switch (n) {
    case k.Number:
    case k.String:
      return (s) => {
        for (let o = 0; o < i; ++o) {
          const l = r[o](s);
          if (typeof l === n) return l;
        }
        throw new Error(`Expected one of the values to be a ${n}`);
      };
    default:
      throw new Error(`Unsupported assertion operator ${n}`);
  }
}
function Dx(t, e) {
  const i = t.args[0].value;
  switch (t.operator) {
    case k.Get:
      return (r) => r.properties[i];
    case k.Var:
      return (r) => r.variables[i];
    default:
      throw new Error(`Unsupported accessor operator ${t.operator}`);
  }
}
function zx(t, e) {
  const n = t.operator,
    i = An(t.args[0]),
    r = An(t.args[1]);
  switch (n) {
    case k.Equal:
      return (s) => i(s) === r(s);
    case k.NotEqual:
      return (s) => i(s) !== r(s);
    case k.LessThan:
      return (s) => i(s) < r(s);
    case k.LessThanOrEqualTo:
      return (s) => i(s) <= r(s);
    case k.GreaterThan:
      return (s) => i(s) > r(s);
    case k.GreaterThanOrEqualTo:
      return (s) => i(s) >= r(s);
    default:
      throw new Error(`Unsupported comparison operator ${n}`);
  }
}
function jx(t, e) {
  const n = t.operator,
    i = t.args.length,
    r = new Array(i);
  for (let s = 0; s < i; ++s) r[s] = An(t.args[s]);
  switch (n) {
    case k.Any:
      return (s) => {
        for (let o = 0; o < i; ++o) if (r[o](s)) return !0;
        return !1;
      };
    case k.All:
      return (s) => {
        for (let o = 0; o < i; ++o) if (!r[o](s)) return !1;
        return !0;
      };
    case k.Not:
      return (s) => !r[0](s);
    default:
      throw new Error(`Unsupported logical operator ${n}`);
  }
}
function Gx(t, e) {
  const n = t.operator,
    i = t.args.length,
    r = new Array(i);
  for (let s = 0; s < i; ++s) r[s] = An(t.args[s]);
  switch (n) {
    case k.Multiply:
      return (s) => {
        let o = 1;
        for (let l = 0; l < i; ++l) o *= r[l](s);
        return o;
      };
    case k.Divide:
      return (s) => r[0](s) / r[1](s);
    case k.Add:
      return (s) => {
        let o = 0;
        for (let l = 0; l < i; ++l) o += r[l](s);
        return o;
      };
    case k.Subtract:
      return (s) => r[0](s) - r[1](s);
    case k.Clamp:
      return (s) => {
        const o = r[0](s),
          l = r[1](s);
        if (o < l) return l;
        const a = r[2](s);
        return o > a ? a : o;
      };
    case k.Mod:
      return (s) => r[0](s) % r[1](s);
    case k.Pow:
      return (s) => Math.pow(r[0](s), r[1](s));
    case k.Abs:
      return (s) => Math.abs(r[0](s));
    case k.Floor:
      return (s) => Math.floor(r[0](s));
    case k.Ceil:
      return (s) => Math.ceil(r[0](s));
    case k.Round:
      return (s) => Math.round(r[0](s));
    case k.Sin:
      return (s) => Math.sin(r[0](s));
    case k.Cos:
      return (s) => Math.cos(r[0](s));
    case k.Atan:
      return i === 2
        ? (s) => Math.atan2(r[0](s), r[1](s))
        : (s) => Math.atan(r[0](s));
    case k.Sqrt:
      return (s) => Math.sqrt(r[0](s));
    default:
      throw new Error(`Unsupported numeric operator ${n}`);
  }
}
function bx(t, e) {
  const n = t.args.length,
    i = new Array(n);
  for (let r = 0; r < n; ++r) i[r] = An(t.args[r]);
  return (r) => {
    const s = i[0](r);
    for (let o = 1; o < n; o += 2) if (s === i[o](r)) return i[o + 1](r);
    return i[n - 1](r);
  };
}
function Wx(t, e) {
  const n = t.args.length,
    i = new Array(n);
  for (let r = 0; r < n; ++r) i[r] = An(t.args[r]);
  return (r) => {
    const s = i[0](r),
      o = i[1](r);
    let l, a;
    for (let u = 2; u < n; u += 2) {
      const c = i[u](r);
      let h = i[u + 1](r);
      const d = Array.isArray(h);
      if ((d && (h = OE(h)), c >= o))
        return u === 2 ? h : d ? Xx(s, o, l, a, c, h) : Fs(s, o, l, a, c, h);
      (l = c), (a = h);
    }
    return a;
  };
}
function Fs(t, e, n, i, r, s) {
  const o = r - n;
  if (o === 0) return i;
  const l = e - n,
    a = t === 1 ? l / o : (Math.pow(t, l) - 1) / (Math.pow(t, o) - 1);
  return i + a * (s - i);
}
function Xx(t, e, n, i, r, s) {
  if (r - n === 0) return i;
  const l = Og(i),
    a = Og(s);
  let u = a[2] - l[2];
  u > 180 ? (u -= 360) : u < -180 && (u += 360);
  const c = [
    Fs(t, e, n, l[0], r, a[0]),
    Fs(t, e, n, l[1], r, a[1]),
    l[2] + Fs(t, e, n, 0, r, u),
    Fs(t, e, n, i[3], r, s[3]),
  ];
  return s_(AE(c));
}
function Bx(t) {
  return !0;
}
function Ux(t) {
  const e = p_(),
    n = Yx(t, e),
    i = __();
  return function (r, s) {
    if (
      ((i.properties = r.getPropertiesInternal()),
      (i.resolution = s),
      e.featureId)
    ) {
      const o = r.getId();
      o !== void 0 ? (i.featureId = o) : (i.featureId = null);
    }
    return n(i);
  };
}
function Yg(t) {
  const e = p_(),
    n = t.length,
    i = new Array(n);
  for (let o = 0; o < n; ++o) i[o] = hh(t[o], e);
  const r = __(),
    s = new Array(n);
  return function (o, l) {
    if (
      ((r.properties = o.getPropertiesInternal()),
      (r.resolution = l),
      e.featureId)
    ) {
      const u = o.getId();
      u !== void 0 ? (r.featureId = u) : (r.featureId = null);
    }
    let a = 0;
    for (let u = 0; u < n; ++u) {
      const c = i[u](r);
      c && ((s[a] = c), (a += 1));
    }
    return (s.length = a), s;
  };
}
function Yx(t, e) {
  const n = t.length,
    i = new Array(n);
  for (let r = 0; r < n; ++r) {
    const s = t[r],
      o = "filter" in s ? wi(s.filter, we, e) : Bx;
    let l;
    if (Array.isArray(s.style)) {
      const a = s.style.length;
      l = new Array(a);
      for (let u = 0; u < a; ++u) l[u] = hh(s.style[u], e);
    } else l = [hh(s.style, e)];
    i[r] = { filter: o, styles: l };
  }
  return function (r) {
    const s = [];
    let o = !1;
    for (let l = 0; l < n; ++l) {
      const a = i[l].filter;
      if (a(r) && !(t[l].else && o)) {
        o = !0;
        for (const u of i[l].styles) {
          const c = u(r);
          c && s.push(c);
        }
      }
    }
    return s;
  };
}
function hh(t, e) {
  const n = Eo(t, "", e),
    i = xo(t, "", e),
    r = Vx(t, e),
    s = Kx(t, e),
    o = ut(t, "z-index", e);
  if (!n && !i && !r && !s && !$i(t))
    throw new Error(
      "No fill, stroke, point, or text symbolizer properties in style: " +
        JSON.stringify(t),
    );
  const l = new Ae();
  return function (a) {
    let u = !0;
    if (n) {
      const c = n(a);
      c && (u = !1), l.setFill(c);
    }
    if (i) {
      const c = i(a);
      c && (u = !1), l.setStroke(c);
    }
    if (r) {
      const c = r(a);
      c && (u = !1), l.setText(c);
    }
    if (s) {
      const c = s(a);
      c && (u = !1), l.setImage(c);
    }
    return o && l.setZIndex(o(a)), u ? null : l;
  };
}
function Eo(t, e, n) {
  const i = y_(t, e + "fill-color", n);
  if (!i) return null;
  const r = new Ao();
  return function (s) {
    const o = i(s);
    return o === "none" ? null : (r.setColor(o), r);
  };
}
function xo(t, e, n) {
  const i = ut(t, e + "stroke-width", n),
    r = y_(t, e + "stroke-color", n);
  if (!i && !r) return null;
  const s = Kn(t, e + "stroke-line-cap", n),
    o = Kn(t, e + "stroke-line-join", n),
    l = v_(t, e + "stroke-line-dash", n),
    a = ut(t, e + "stroke-line-dash-offset", n),
    u = ut(t, e + "stroke-miter-limit", n),
    c = new Za();
  return function (h) {
    if (r) {
      const d = r(h);
      if (d === "none") return null;
      c.setColor(d);
    }
    if ((i && c.setWidth(i(h)), s)) {
      const d = s(h);
      if (d !== "butt" && d !== "round" && d !== "square")
        throw new Error("Expected butt, round, or square line cap");
      c.setLineCap(d);
    }
    if (o) {
      const d = o(h);
      if (d !== "bevel" && d !== "round" && d !== "miter")
        throw new Error("Expected bevel, round, or miter line join");
      c.setLineJoin(d);
    }
    return (
      l && c.setLineDash(l(h)),
      a && c.setLineDashOffset(a(h)),
      u && c.setMiterLimit(u(h)),
      c
    );
  };
}
function Vx(t, e) {
  const n = "text-",
    i = Kn(t, n + "value", e);
  if (!i) return null;
  const r = Eo(t, n, e),
    s = Eo(t, n + "background-", e),
    o = xo(t, n, e),
    l = xo(t, n + "background-", e),
    a = Kn(t, n + "font", e),
    u = ut(t, n + "max-angle", e),
    c = ut(t, n + "offset-x", e),
    h = ut(t, n + "offset-y", e),
    d = wo(t, n + "overflow", e),
    f = Kn(t, n + "placement", e),
    p = ut(t, n + "repeat", e),
    _ = iu(t, n + "scale", e),
    v = wo(t, n + "rotate-with-view", e),
    g = ut(t, n + "rotation", e),
    m = Kn(t, n + "align", e),
    y = Kn(t, n + "justify", e),
    E = Kn(t, n + "baseline", e),
    x = v_(t, n + "padding", e),
    w = new Nd({});
  return function (S) {
    if (
      (w.setText(i(S)),
      r && w.setFill(r(S)),
      s && w.setBackgroundFill(s(S)),
      o && w.setStroke(o(S)),
      l && w.setBackgroundStroke(l(S)),
      a && w.setFont(a(S)),
      u && w.setMaxAngle(u(S)),
      c && w.setOffsetX(c(S)),
      h && w.setOffsetY(h(S)),
      d && w.setOverflow(d(S)),
      f)
    ) {
      const T = f(S);
      if (T !== "point" && T !== "line")
        throw new Error("Expected point or line for text-placement");
      w.setPlacement(T);
    }
    if (
      (p && w.setRepeat(p(S)),
      _ && w.setScale(_(S)),
      v && w.setRotateWithView(v(S)),
      g && w.setRotation(g(S)),
      m)
    ) {
      const T = m(S);
      if (
        T !== "left" &&
        T !== "center" &&
        T !== "right" &&
        T !== "end" &&
        T !== "start"
      )
        throw new Error(
          "Expected left, right, center, start, or end for text-align",
        );
      w.setTextAlign(T);
    }
    if (y) {
      const T = y(S);
      if (T !== "left" && T !== "right" && T !== "center")
        throw new Error("Expected left, right, or center for text-justify");
      w.setJustify(T);
    }
    if (E) {
      const T = E(S);
      if (
        T !== "bottom" &&
        T !== "top" &&
        T !== "middle" &&
        T !== "alphabetic" &&
        T !== "hanging"
      )
        throw new Error(
          "Expected bottom, top, middle, alphabetic, or hanging for text-baseline",
        );
      w.setTextBaseline(T);
    }
    return x && w.setPadding(x(S)), w;
  };
}
function Kx(t, e) {
  return "icon-src" in t
    ? Zx(t, e)
    : "shape-points" in t
      ? $x(t, e)
      : "circle-radius" in t
        ? Hx(t, e)
        : null;
}
function Zx(t, e) {
  const n = "icon-",
    i = n + "src",
    r = E_(t[i], i),
    s = ma(t, n + "anchor", e),
    o = iu(t, n + "scale", e),
    l = ut(t, n + "opacity", e),
    a = ma(t, n + "displacement", e),
    u = ut(t, n + "rotation", e),
    c = wo(t, n + "rotate-with-view", e),
    h = Vg(t, n + "anchor-origin"),
    d = Kg(t, n + "anchor-x-units"),
    f = Kg(t, n + "anchor-y-units"),
    p = ew(t, n + "color"),
    _ = Qx(t, n + "cross-origin"),
    v = Jx(t, n + "offset"),
    g = Vg(t, n + "offset-origin"),
    m = Or(t, n + "width"),
    y = Or(t, n + "height"),
    E = qx(t, n + "size"),
    x = Xd(t, n + "declutter"),
    w = new Ze({
      src: r,
      anchorOrigin: h,
      anchorXUnits: d,
      anchorYUnits: f,
      color: p,
      crossOrigin: _,
      offset: v,
      offsetOrigin: g,
      height: y,
      width: m,
      size: E,
      declutterMode: x,
    });
  return function (S) {
    return (
      l && w.setOpacity(l(S)),
      a && w.setDisplacement(a(S)),
      u && w.setRotation(u(S)),
      c && w.setRotateWithView(c(S)),
      o && w.setScale(o(S)),
      s && w.setAnchor(s(S)),
      w
    );
  };
}
function $x(t, e) {
  const n = "shape-",
    i = n + "points",
    r = x_(t[i], i),
    s = Eo(t, n, e),
    o = xo(t, n, e),
    l = iu(t, n + "scale", e),
    a = ma(t, n + "displacement", e),
    u = ut(t, n + "rotation", e),
    c = wo(t, n + "rotate-with-view", e),
    h = Or(t, n + "radius"),
    d = Or(t, n + "radius1"),
    f = Or(t, n + "radius2"),
    p = Or(t, n + "angle"),
    _ = Xd(t, n + "declutter-mode"),
    v = new Qa({
      points: r,
      radius: h,
      radius1: d,
      radius2: f,
      angle: p,
      declutterMode: _,
    });
  return function (g) {
    return (
      s && v.setFill(s(g)),
      o && v.setStroke(o(g)),
      a && v.setDisplacement(a(g)),
      u && v.setRotation(u(g)),
      c && v.setRotateWithView(c(g)),
      l && v.setScale(l(g)),
      v
    );
  };
}
function Hx(t, e) {
  const n = "circle-",
    i = Eo(t, n, e),
    r = xo(t, n, e),
    s = ut(t, n + "radius", e),
    o = iu(t, n + "scale", e),
    l = ma(t, n + "displacement", e),
    a = ut(t, n + "rotation", e),
    u = wo(t, n + "rotate-with-view", e),
    c = Xd(t, n + "declutter-mode"),
    h = new Ja({ radius: 5, declutterMode: c });
  return function (d) {
    return (
      s && h.setRadius(s(d)),
      i && h.setFill(i(d)),
      r && h.setStroke(r(d)),
      l && h.setDisplacement(l(d)),
      a && h.setRotation(a(d)),
      u && h.setRotateWithView(u(d)),
      o && h.setScale(o(d)),
      h
    );
  };
}
function ut(t, e, n) {
  if (!(e in t)) return;
  const i = wi(t[e], j, n);
  return function (r) {
    return x_(i(r), e);
  };
}
function Kn(t, e, n) {
  if (!(e in t)) return null;
  const i = wi(t[e], Ut, n);
  return function (r) {
    return E_(i(r), e);
  };
}
function wo(t, e, n) {
  if (!(e in t)) return null;
  const i = wi(t[e], we, n);
  return function (r) {
    const s = i(r);
    if (typeof s != "boolean") throw new Error(`Expected a boolean for ${e}`);
    return s;
  };
}
function y_(t, e, n) {
  if (!(e in t)) return null;
  const i = wi(t[e], Ye | Ut, n);
  return function (r) {
    return w_(i(r), e);
  };
}
function v_(t, e, n) {
  if (!(e in t)) return null;
  const i = wi(t[e], _i, n);
  return function (r) {
    return Fo(i(r), e);
  };
}
function ma(t, e, n) {
  if (!(e in t)) return null;
  const i = wi(t[e], _i, n);
  return function (r) {
    const s = Fo(i(r), e);
    if (s.length !== 2) throw new Error(`Expected two numbers for ${e}`);
    return s;
  };
}
function iu(t, e, n) {
  if (!(e in t)) return null;
  const i = wi(t[e], _i | j, n);
  return function (r) {
    return tw(i(r), e);
  };
}
function Or(t, e) {
  const n = t[e];
  if (n !== void 0) {
    if (typeof n != "number") throw new Error(`Expected a number for ${e}`);
    return n;
  }
}
function qx(t, e) {
  const n = t[e];
  if (n !== void 0) {
    if (typeof n == "number") return vt(n);
    if (!Array.isArray(n))
      throw new Error(`Expected a number or size array for ${e}`);
    if (n.length !== 2 || typeof n[0] != "number" || typeof n[1] != "number")
      throw new Error(`Expected a number or size array for ${e}`);
    return n;
  }
}
function Qx(t, e) {
  const n = t[e];
  if (n !== void 0) {
    if (typeof n != "string") throw new Error(`Expected a string for ${e}`);
    return n;
  }
}
function Vg(t, e) {
  const n = t[e];
  if (n !== void 0) {
    if (
      n !== "bottom-left" &&
      n !== "bottom-right" &&
      n !== "top-left" &&
      n !== "top-right"
    )
      throw new Error(
        `Expected bottom-left, bottom-right, top-left, or top-right for ${e}`,
      );
    return n;
  }
}
function Kg(t, e) {
  const n = t[e];
  if (n !== void 0) {
    if (n !== "pixels" && n !== "fraction")
      throw new Error(`Expected pixels or fraction for ${e}`);
    return n;
  }
}
function Jx(t, e) {
  const n = t[e];
  if (n !== void 0) return Fo(n, e);
}
function Xd(t, e) {
  const n = t[e];
  if (n !== void 0) {
    if (typeof n != "string") throw new Error(`Expected a string for ${e}`);
    if (n !== "declutter" && n !== "obstacle" && n !== "none")
      throw new Error(`Expected declutter, obstacle, or none for ${e}`);
    return n;
  }
}
function ew(t, e) {
  const n = t[e];
  if (n !== void 0) return w_(n, e);
}
function Fo(t, e) {
  if (!Array.isArray(t)) throw new Error(`Expected an array for ${e}`);
  const n = t.length;
  for (let i = 0; i < n; ++i)
    if (typeof t[i] != "number")
      throw new Error(`Expected an array of numbers for ${e}`);
  return t;
}
function E_(t, e) {
  if (typeof t != "string") throw new Error(`Expected a string for ${e}`);
  return t;
}
function x_(t, e) {
  if (typeof t != "number") throw new Error(`Expected a number for ${e}`);
  return t;
}
function w_(t, e) {
  if (typeof t == "string") return t;
  const n = Fo(t, e),
    i = n.length;
  if (i < 3 || i > 4)
    throw new Error(`Expected a color with 3 or 4 values for ${e}`);
  return n;
}
function tw(t, e) {
  if (typeof t == "number") return t;
  const n = Fo(t, e);
  if (n.length !== 2)
    throw new Error(`Expected an array of two numbers for ${e}`);
  return n;
}
const Zg = { RENDER_ORDER: "renderOrder" };
class nw extends tu {
  constructor(e) {
    e = e || {};
    const n = Object.assign({}, e);
    delete n.style,
      delete n.renderBuffer,
      delete n.updateWhileAnimating,
      delete n.updateWhileInteracting,
      super(n),
      (this.declutter_ = e.declutter !== void 0 ? e.declutter : !1),
      (this.renderBuffer_ = e.renderBuffer !== void 0 ? e.renderBuffer : 100),
      (this.style_ = null),
      (this.styleFunction_ = void 0),
      this.setStyle(e.style),
      (this.updateWhileAnimating_ =
        e.updateWhileAnimating !== void 0 ? e.updateWhileAnimating : !1),
      (this.updateWhileInteracting_ =
        e.updateWhileInteracting !== void 0 ? e.updateWhileInteracting : !1);
  }
  getDeclutter() {
    return this.declutter_;
  }
  getFeatures(e) {
    return super.getFeatures(e);
  }
  getRenderBuffer() {
    return this.renderBuffer_;
  }
  getRenderOrder() {
    return this.get(Zg.RENDER_ORDER);
  }
  getStyle() {
    return this.style_;
  }
  getStyleFunction() {
    return this.styleFunction_;
  }
  getUpdateWhileAnimating() {
    return this.updateWhileAnimating_;
  }
  getUpdateWhileInteracting() {
    return this.updateWhileInteracting_;
  }
  renderDeclutter(e) {
    e.declutterTree || (e.declutterTree = new g_(9)),
      this.getRenderer().renderDeclutter(e);
  }
  setRenderOrder(e) {
    this.set(Zg.RENDER_ORDER, e);
  }
  setStyle(e) {
    (this.style_ = iw(e)),
      (this.styleFunction_ = e === null ? void 0 : YE(this.style_)),
      this.changed();
  }
}
function iw(t) {
  if (t === void 0) return VE;
  if (!t) return null;
  if (typeof t == "function" || t instanceof Ae) return t;
  if (!Array.isArray(t)) return Yg([t]);
  if (t.length === 0) return [];
  const e = t.length,
    n = t[0];
  if (n instanceof Ae) {
    const r = new Array(e);
    for (let s = 0; s < e; ++s) {
      const o = t[s];
      if (!(o instanceof Ae))
        throw new Error("Expected a list of style instances");
      r[s] = o;
    }
    return r;
  }
  if ("style" in n) {
    const r = new Array(e);
    for (let s = 0; s < e; ++s) {
      const o = t[s];
      if (!("style" in o))
        throw new Error("Expected a list of rules with a style property");
      r[s] = o;
    }
    return Ux(r);
  }
  return Yg(t);
}
const G = {
    BEGIN_GEOMETRY: 0,
    BEGIN_PATH: 1,
    CIRCLE: 2,
    CLOSE_PATH: 3,
    CUSTOM: 4,
    DRAW_CHARS: 5,
    DRAW_IMAGE: 6,
    END_GEOMETRY: 7,
    FILL: 8,
    MOVE_TO_LINE_TO: 9,
    SET_FILL_STYLE: 10,
    SET_STROKE_STYLE: 11,
    STROKE: 12,
  },
  _l = [G.FILL],
  ti = [G.STROKE],
  bi = [G.BEGIN_PATH],
  $g = [G.CLOSE_PATH];
class C_ {
  drawCustom(e, n, i, r) {}
  drawGeometry(e) {}
  setStyle(e) {}
  drawCircle(e, n) {}
  drawFeature(e, n) {}
  drawGeometryCollection(e, n) {}
  drawLineString(e, n) {}
  drawMultiLineString(e, n) {}
  drawMultiPoint(e, n) {}
  drawMultiPolygon(e, n) {}
  drawPoint(e, n) {}
  drawPolygon(e, n) {}
  drawText(e, n) {}
  setFillStrokeStyle(e, n) {}
  setImageStyle(e, n) {}
  setTextStyle(e, n) {}
}
class No extends C_ {
  constructor(e, n, i, r) {
    super(),
      (this.tolerance = e),
      (this.maxExtent = n),
      (this.pixelRatio = r),
      (this.maxLineWidth = 0),
      (this.resolution = i),
      (this.beginGeometryInstruction1_ = null),
      (this.beginGeometryInstruction2_ = null),
      (this.bufferedMaxExtent_ = null),
      (this.instructions = []),
      (this.coordinates = []),
      (this.tmpCoordinate_ = []),
      (this.hitDetectionInstructions = []),
      (this.state = {});
  }
  applyPixelRatio(e) {
    const n = this.pixelRatio;
    return n == 1
      ? e
      : e.map(function (i) {
          return i * n;
        });
  }
  appendFlatPointCoordinates(e, n) {
    const i = this.getBufferedMaxExtent(),
      r = this.tmpCoordinate_,
      s = this.coordinates;
    let o = s.length;
    for (let l = 0, a = e.length; l < a; l += n)
      (r[0] = e[l]),
        (r[1] = e[l + 1]),
        ba(i, r) && ((s[o++] = r[0]), (s[o++] = r[1]));
    return o;
  }
  appendFlatLineCoordinates(e, n, i, r, s, o) {
    const l = this.coordinates;
    let a = l.length;
    const u = this.getBufferedMaxExtent();
    o && (n += r);
    let c = e[n],
      h = e[n + 1];
    const d = this.tmpCoordinate_;
    let f = !0,
      p,
      _,
      v;
    for (p = n + r; p < i; p += r)
      (d[0] = e[p]),
        (d[1] = e[p + 1]),
        (v = qc(u, d)),
        v !== _
          ? (f && ((l[a++] = c), (l[a++] = h), (f = !1)),
            (l[a++] = d[0]),
            (l[a++] = d[1]))
          : v === Pe.INTERSECTING
            ? ((l[a++] = d[0]), (l[a++] = d[1]), (f = !1))
            : (f = !0),
        (c = d[0]),
        (h = d[1]),
        (_ = v);
    return ((s && f) || p === n + r) && ((l[a++] = c), (l[a++] = h)), a;
  }
  drawCustomCoordinates_(e, n, i, r, s) {
    for (let o = 0, l = i.length; o < l; ++o) {
      const a = i[o],
        u = this.appendFlatLineCoordinates(e, n, a, r, !1, !1);
      s.push(u), (n = a);
    }
    return n;
  }
  drawCustom(e, n, i, r) {
    this.beginGeometry(e, n);
    const s = e.getType(),
      o = e.getStride(),
      l = this.coordinates.length;
    let a, u, c, h, d;
    switch (s) {
      case "MultiPolygon":
        (a = e.getOrientedFlatCoordinates()), (h = []);
        const f = e.getEndss();
        d = 0;
        for (let p = 0, _ = f.length; p < _; ++p) {
          const v = [];
          (d = this.drawCustomCoordinates_(a, d, f[p], o, v)), h.push(v);
        }
        this.instructions.push([G.CUSTOM, l, h, e, i, sh]),
          this.hitDetectionInstructions.push([G.CUSTOM, l, h, e, r || i, sh]);
        break;
      case "Polygon":
      case "MultiLineString":
        (c = []),
          (a =
            s == "Polygon"
              ? e.getOrientedFlatCoordinates()
              : e.getFlatCoordinates()),
          (d = this.drawCustomCoordinates_(a, 0, e.getEnds(), o, c)),
          this.instructions.push([G.CUSTOM, l, c, e, i, fo]),
          this.hitDetectionInstructions.push([G.CUSTOM, l, c, e, r || i, fo]);
        break;
      case "LineString":
      case "Circle":
        (a = e.getFlatCoordinates()),
          (u = this.appendFlatLineCoordinates(a, 0, a.length, o, !1, !1)),
          this.instructions.push([G.CUSTOM, l, u, e, i, Jn]),
          this.hitDetectionInstructions.push([G.CUSTOM, l, u, e, r || i, Jn]);
        break;
      case "MultiPoint":
        (a = e.getFlatCoordinates()),
          (u = this.appendFlatPointCoordinates(a, o)),
          u > l &&
            (this.instructions.push([G.CUSTOM, l, u, e, i, Jn]),
            this.hitDetectionInstructions.push([
              G.CUSTOM,
              l,
              u,
              e,
              r || i,
              Jn,
            ]));
        break;
      case "Point":
        (a = e.getFlatCoordinates()),
          this.coordinates.push(a[0], a[1]),
          (u = this.coordinates.length),
          this.instructions.push([G.CUSTOM, l, u, e, i]),
          this.hitDetectionInstructions.push([G.CUSTOM, l, u, e, r || i]);
        break;
    }
    this.endGeometry(n);
  }
  beginGeometry(e, n) {
    (this.beginGeometryInstruction1_ = [G.BEGIN_GEOMETRY, n, 0, e]),
      this.instructions.push(this.beginGeometryInstruction1_),
      (this.beginGeometryInstruction2_ = [G.BEGIN_GEOMETRY, n, 0, e]),
      this.hitDetectionInstructions.push(this.beginGeometryInstruction2_);
  }
  finish() {
    return {
      instructions: this.instructions,
      hitDetectionInstructions: this.hitDetectionInstructions,
      coordinates: this.coordinates,
    };
  }
  reverseHitDetectionInstructions() {
    const e = this.hitDetectionInstructions;
    e.reverse();
    let n;
    const i = e.length;
    let r,
      s,
      o = -1;
    for (n = 0; n < i; ++n)
      (r = e[n]),
        (s = r[0]),
        s == G.END_GEOMETRY
          ? (o = n)
          : s == G.BEGIN_GEOMETRY &&
            ((r[2] = n), Cv(this.hitDetectionInstructions, o, n), (o = -1));
  }
  setFillStrokeStyle(e, n) {
    const i = this.state;
    if (e) {
      const r = e.getColor();
      i.fillStyle = nn(r || lt);
    } else i.fillStyle = void 0;
    if (n) {
      const r = n.getColor();
      i.strokeStyle = nn(r || _o);
      const s = n.getLineCap();
      i.lineCap = s !== void 0 ? s : Qr;
      const o = n.getLineDash();
      i.lineDash = o ? o.slice() : Sn;
      const l = n.getLineDashOffset();
      i.lineDashOffset = l || Tn;
      const a = n.getLineJoin();
      i.lineJoin = a !== void 0 ? a : Jr;
      const u = n.getWidth();
      i.lineWidth = u !== void 0 ? u : vo;
      const c = n.getMiterLimit();
      (i.miterLimit = c !== void 0 ? c : po),
        i.lineWidth > this.maxLineWidth &&
          ((this.maxLineWidth = i.lineWidth), (this.bufferedMaxExtent_ = null));
    } else
      (i.strokeStyle = void 0),
        (i.lineCap = void 0),
        (i.lineDash = null),
        (i.lineDashOffset = void 0),
        (i.lineJoin = void 0),
        (i.lineWidth = void 0),
        (i.miterLimit = void 0);
  }
  createFill(e) {
    const n = e.fillStyle,
      i = [G.SET_FILL_STYLE, n];
    return typeof n != "string" && i.push(!0), i;
  }
  applyStroke(e) {
    this.instructions.push(this.createStroke(e));
  }
  createStroke(e) {
    return [
      G.SET_STROKE_STYLE,
      e.strokeStyle,
      e.lineWidth * this.pixelRatio,
      e.lineCap,
      e.lineJoin,
      e.miterLimit,
      this.applyPixelRatio(e.lineDash),
      e.lineDashOffset * this.pixelRatio,
    ];
  }
  updateFillStyle(e, n) {
    const i = e.fillStyle;
    (typeof i != "string" || e.currentFillStyle != i) &&
      (i !== void 0 && this.instructions.push(n.call(this, e)),
      (e.currentFillStyle = i));
  }
  updateStrokeStyle(e, n) {
    const i = e.strokeStyle,
      r = e.lineCap,
      s = e.lineDash,
      o = e.lineDashOffset,
      l = e.lineJoin,
      a = e.lineWidth,
      u = e.miterLimit;
    (e.currentStrokeStyle != i ||
      e.currentLineCap != r ||
      (s != e.currentLineDash && !xi(e.currentLineDash, s)) ||
      e.currentLineDashOffset != o ||
      e.currentLineJoin != l ||
      e.currentLineWidth != a ||
      e.currentMiterLimit != u) &&
      (i !== void 0 && n.call(this, e),
      (e.currentStrokeStyle = i),
      (e.currentLineCap = r),
      (e.currentLineDash = s),
      (e.currentLineDashOffset = o),
      (e.currentLineJoin = l),
      (e.currentLineWidth = a),
      (e.currentMiterLimit = u));
  }
  endGeometry(e) {
    (this.beginGeometryInstruction1_[2] = this.instructions.length),
      (this.beginGeometryInstruction1_ = null),
      (this.beginGeometryInstruction2_[2] =
        this.hitDetectionInstructions.length),
      (this.beginGeometryInstruction2_ = null);
    const n = [G.END_GEOMETRY, e];
    this.instructions.push(n), this.hitDetectionInstructions.push(n);
  }
  getBufferedMaxExtent() {
    if (
      !this.bufferedMaxExtent_ &&
      ((this.bufferedMaxExtent_ = A0(this.maxExtent)), this.maxLineWidth > 0)
    ) {
      const e = (this.resolution * (this.maxLineWidth + 1)) / 2;
      md(this.bufferedMaxExtent_, e, this.bufferedMaxExtent_);
    }
    return this.bufferedMaxExtent_;
  }
}
class rw extends No {
  constructor(e, n, i, r) {
    super(e, n, i, r),
      (this.hitDetectionImage_ = null),
      (this.image_ = null),
      (this.imagePixelRatio_ = void 0),
      (this.anchorX_ = void 0),
      (this.anchorY_ = void 0),
      (this.height_ = void 0),
      (this.opacity_ = void 0),
      (this.originX_ = void 0),
      (this.originY_ = void 0),
      (this.rotateWithView_ = void 0),
      (this.rotation_ = void 0),
      (this.scale_ = void 0),
      (this.width_ = void 0),
      (this.declutterMode_ = void 0),
      (this.declutterImageWithText_ = void 0);
  }
  drawPoint(e, n) {
    if (!this.image_) return;
    this.beginGeometry(e, n);
    const i = e.getFlatCoordinates(),
      r = e.getStride(),
      s = this.coordinates.length,
      o = this.appendFlatPointCoordinates(i, r);
    this.instructions.push([
      G.DRAW_IMAGE,
      s,
      o,
      this.image_,
      this.anchorX_ * this.imagePixelRatio_,
      this.anchorY_ * this.imagePixelRatio_,
      Math.ceil(this.height_ * this.imagePixelRatio_),
      this.opacity_,
      this.originX_ * this.imagePixelRatio_,
      this.originY_ * this.imagePixelRatio_,
      this.rotateWithView_,
      this.rotation_,
      [
        (this.scale_[0] * this.pixelRatio) / this.imagePixelRatio_,
        (this.scale_[1] * this.pixelRatio) / this.imagePixelRatio_,
      ],
      Math.ceil(this.width_ * this.imagePixelRatio_),
      this.declutterMode_,
      this.declutterImageWithText_,
    ]),
      this.hitDetectionInstructions.push([
        G.DRAW_IMAGE,
        s,
        o,
        this.hitDetectionImage_,
        this.anchorX_,
        this.anchorY_,
        this.height_,
        1,
        this.originX_,
        this.originY_,
        this.rotateWithView_,
        this.rotation_,
        this.scale_,
        this.width_,
        this.declutterMode_,
        this.declutterImageWithText_,
      ]),
      this.endGeometry(n);
  }
  drawMultiPoint(e, n) {
    if (!this.image_) return;
    this.beginGeometry(e, n);
    const i = e.getFlatCoordinates(),
      r = e.getStride(),
      s = this.coordinates.length,
      o = this.appendFlatPointCoordinates(i, r);
    this.instructions.push([
      G.DRAW_IMAGE,
      s,
      o,
      this.image_,
      this.anchorX_ * this.imagePixelRatio_,
      this.anchorY_ * this.imagePixelRatio_,
      Math.ceil(this.height_ * this.imagePixelRatio_),
      this.opacity_,
      this.originX_ * this.imagePixelRatio_,
      this.originY_ * this.imagePixelRatio_,
      this.rotateWithView_,
      this.rotation_,
      [
        (this.scale_[0] * this.pixelRatio) / this.imagePixelRatio_,
        (this.scale_[1] * this.pixelRatio) / this.imagePixelRatio_,
      ],
      Math.ceil(this.width_ * this.imagePixelRatio_),
      this.declutterMode_,
      this.declutterImageWithText_,
    ]),
      this.hitDetectionInstructions.push([
        G.DRAW_IMAGE,
        s,
        o,
        this.hitDetectionImage_,
        this.anchorX_,
        this.anchorY_,
        this.height_,
        1,
        this.originX_,
        this.originY_,
        this.rotateWithView_,
        this.rotation_,
        this.scale_,
        this.width_,
        this.declutterMode_,
        this.declutterImageWithText_,
      ]),
      this.endGeometry(n);
  }
  finish() {
    return (
      this.reverseHitDetectionInstructions(),
      (this.anchorX_ = void 0),
      (this.anchorY_ = void 0),
      (this.hitDetectionImage_ = null),
      (this.image_ = null),
      (this.imagePixelRatio_ = void 0),
      (this.height_ = void 0),
      (this.scale_ = void 0),
      (this.opacity_ = void 0),
      (this.originX_ = void 0),
      (this.originY_ = void 0),
      (this.rotateWithView_ = void 0),
      (this.rotation_ = void 0),
      (this.width_ = void 0),
      super.finish()
    );
  }
  setImageStyle(e, n) {
    const i = e.getAnchor(),
      r = e.getSize(),
      s = e.getOrigin();
    (this.imagePixelRatio_ = e.getPixelRatio(this.pixelRatio)),
      (this.anchorX_ = i[0]),
      (this.anchorY_ = i[1]),
      (this.hitDetectionImage_ = e.getHitDetectionImage()),
      (this.image_ = e.getImage(this.pixelRatio)),
      (this.height_ = r[1]),
      (this.opacity_ = e.getOpacity()),
      (this.originX_ = s[0]),
      (this.originY_ = s[1]),
      (this.rotateWithView_ = e.getRotateWithView()),
      (this.rotation_ = e.getRotation()),
      (this.scale_ = e.getScaleArray()),
      (this.width_ = r[0]),
      (this.declutterMode_ = e.getDeclutterMode()),
      (this.declutterImageWithText_ = n);
  }
}
const sw = rw;
class ow extends No {
  constructor(e, n, i, r) {
    super(e, n, i, r);
  }
  drawFlatCoordinates_(e, n, i, r) {
    const s = this.coordinates.length,
      o = this.appendFlatLineCoordinates(e, n, i, r, !1, !1),
      l = [G.MOVE_TO_LINE_TO, s, o];
    return this.instructions.push(l), this.hitDetectionInstructions.push(l), i;
  }
  drawLineString(e, n) {
    const i = this.state,
      r = i.strokeStyle,
      s = i.lineWidth;
    if (r === void 0 || s === void 0) return;
    this.updateStrokeStyle(i, this.applyStroke),
      this.beginGeometry(e, n),
      this.hitDetectionInstructions.push(
        [
          G.SET_STROKE_STYLE,
          i.strokeStyle,
          i.lineWidth,
          i.lineCap,
          i.lineJoin,
          i.miterLimit,
          Sn,
          Tn,
        ],
        bi,
      );
    const o = e.getFlatCoordinates(),
      l = e.getStride();
    this.drawFlatCoordinates_(o, 0, o.length, l),
      this.hitDetectionInstructions.push(ti),
      this.endGeometry(n);
  }
  drawMultiLineString(e, n) {
    const i = this.state,
      r = i.strokeStyle,
      s = i.lineWidth;
    if (r === void 0 || s === void 0) return;
    this.updateStrokeStyle(i, this.applyStroke),
      this.beginGeometry(e, n),
      this.hitDetectionInstructions.push(
        [
          G.SET_STROKE_STYLE,
          i.strokeStyle,
          i.lineWidth,
          i.lineCap,
          i.lineJoin,
          i.miterLimit,
          Sn,
          Tn,
        ],
        bi,
      );
    const o = e.getEnds(),
      l = e.getFlatCoordinates(),
      a = e.getStride();
    let u = 0;
    for (let c = 0, h = o.length; c < h; ++c)
      u = this.drawFlatCoordinates_(l, u, o[c], a);
    this.hitDetectionInstructions.push(ti), this.endGeometry(n);
  }
  finish() {
    const e = this.state;
    return (
      e.lastStroke != null &&
        e.lastStroke != this.coordinates.length &&
        this.instructions.push(ti),
      this.reverseHitDetectionInstructions(),
      (this.state = null),
      super.finish()
    );
  }
  applyStroke(e) {
    e.lastStroke != null &&
      e.lastStroke != this.coordinates.length &&
      (this.instructions.push(ti), (e.lastStroke = this.coordinates.length)),
      (e.lastStroke = 0),
      super.applyStroke(e),
      this.instructions.push(bi);
  }
}
const lw = ow;
class aw extends No {
  constructor(e, n, i, r) {
    super(e, n, i, r);
  }
  drawFlatCoordinatess_(e, n, i, r) {
    const s = this.state,
      o = s.fillStyle !== void 0,
      l = s.strokeStyle !== void 0,
      a = i.length;
    this.instructions.push(bi), this.hitDetectionInstructions.push(bi);
    for (let u = 0; u < a; ++u) {
      const c = i[u],
        h = this.coordinates.length,
        d = this.appendFlatLineCoordinates(e, n, c, r, !0, !l),
        f = [G.MOVE_TO_LINE_TO, h, d];
      this.instructions.push(f),
        this.hitDetectionInstructions.push(f),
        l &&
          (this.instructions.push($g), this.hitDetectionInstructions.push($g)),
        (n = c);
    }
    return (
      o && (this.instructions.push(_l), this.hitDetectionInstructions.push(_l)),
      l && (this.instructions.push(ti), this.hitDetectionInstructions.push(ti)),
      n
    );
  }
  drawCircle(e, n) {
    const i = this.state,
      r = i.fillStyle,
      s = i.strokeStyle;
    if (r === void 0 && s === void 0) return;
    this.setFillStrokeStyles_(),
      this.beginGeometry(e, n),
      i.fillStyle !== void 0 &&
        this.hitDetectionInstructions.push([G.SET_FILL_STYLE, lt]),
      i.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          G.SET_STROKE_STYLE,
          i.strokeStyle,
          i.lineWidth,
          i.lineCap,
          i.lineJoin,
          i.miterLimit,
          Sn,
          Tn,
        ]);
    const o = e.getFlatCoordinates(),
      l = e.getStride(),
      a = this.coordinates.length;
    this.appendFlatLineCoordinates(o, 0, o.length, l, !1, !1);
    const u = [G.CIRCLE, a];
    this.instructions.push(bi, u),
      this.hitDetectionInstructions.push(bi, u),
      i.fillStyle !== void 0 &&
        (this.instructions.push(_l), this.hitDetectionInstructions.push(_l)),
      i.strokeStyle !== void 0 &&
        (this.instructions.push(ti), this.hitDetectionInstructions.push(ti)),
      this.endGeometry(n);
  }
  drawPolygon(e, n) {
    const i = this.state,
      r = i.fillStyle,
      s = i.strokeStyle;
    if (r === void 0 && s === void 0) return;
    this.setFillStrokeStyles_(),
      this.beginGeometry(e, n),
      i.fillStyle !== void 0 &&
        this.hitDetectionInstructions.push([G.SET_FILL_STYLE, lt]),
      i.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          G.SET_STROKE_STYLE,
          i.strokeStyle,
          i.lineWidth,
          i.lineCap,
          i.lineJoin,
          i.miterLimit,
          Sn,
          Tn,
        ]);
    const o = e.getEnds(),
      l = e.getOrientedFlatCoordinates(),
      a = e.getStride();
    this.drawFlatCoordinatess_(l, 0, o, a), this.endGeometry(n);
  }
  drawMultiPolygon(e, n) {
    const i = this.state,
      r = i.fillStyle,
      s = i.strokeStyle;
    if (r === void 0 && s === void 0) return;
    this.setFillStrokeStyles_(),
      this.beginGeometry(e, n),
      i.fillStyle !== void 0 &&
        this.hitDetectionInstructions.push([G.SET_FILL_STYLE, lt]),
      i.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          G.SET_STROKE_STYLE,
          i.strokeStyle,
          i.lineWidth,
          i.lineCap,
          i.lineJoin,
          i.miterLimit,
          Sn,
          Tn,
        ]);
    const o = e.getEndss(),
      l = e.getOrientedFlatCoordinates(),
      a = e.getStride();
    let u = 0;
    for (let c = 0, h = o.length; c < h; ++c)
      u = this.drawFlatCoordinatess_(l, u, o[c], a);
    this.endGeometry(n);
  }
  finish() {
    this.reverseHitDetectionInstructions(), (this.state = null);
    const e = this.tolerance;
    if (e !== 0) {
      const n = this.coordinates;
      for (let i = 0, r = n.length; i < r; ++i) n[i] = Mi(n[i], e);
    }
    return super.finish();
  }
  setFillStrokeStyles_() {
    const e = this.state;
    e.fillStyle !== void 0 && this.updateFillStyle(e, this.createFill),
      e.strokeStyle !== void 0 && this.updateStrokeStyle(e, this.applyStroke);
  }
}
const Hg = aw;
function uw(t, e, n, i, r) {
  const s = [];
  let o = n,
    l = 0,
    a = e.slice(n, 2);
  for (; l < t && o + r < i; ) {
    const [u, c] = a.slice(-2),
      h = e[o + r],
      d = e[o + r + 1],
      f = Math.sqrt((h - u) * (h - u) + (d - c) * (d - c));
    if (((l += f), l >= t)) {
      const p = (t - l + f) / f,
        _ = _t(u, h, p),
        v = _t(c, d, p);
      a.push(_, v), s.push(a), (a = [_, v]), l == t && (o += r), (l = 0);
    } else if (l < t) a.push(e[o + r], e[o + r + 1]), (o += r);
    else {
      const p = f - l,
        _ = _t(u, h, p / f),
        v = _t(c, d, p / f);
      a.push(_, v), s.push(a), (a = [_, v]), (l = 0), (o += r);
    }
  }
  return l > 0 && s.push(a), s;
}
function cw(t, e, n, i, r) {
  let s = n,
    o = n,
    l = 0,
    a = 0,
    u = n,
    c,
    h,
    d,
    f,
    p,
    _,
    v,
    g,
    m,
    y;
  for (h = n; h < i; h += r) {
    const E = e[h],
      x = e[h + 1];
    p !== void 0 &&
      ((m = E - p),
      (y = x - _),
      (f = Math.sqrt(m * m + y * y)),
      v !== void 0 &&
        ((a += d),
        (c = Math.acos((v * m + g * y) / (d * f))),
        c > t && (a > l && ((l = a), (s = u), (o = h)), (a = 0), (u = h - r))),
      (d = f),
      (v = m),
      (g = y)),
      (p = E),
      (_ = x);
  }
  return (a += f), a > l ? [u, h] : [s, o];
}
const pa = {
  left: 0,
  center: 0.5,
  right: 1,
  top: 0,
  middle: 0.5,
  hanging: 0.2,
  alphabetic: 0.8,
  ideographic: 0.8,
  bottom: 1,
};
class hw extends No {
  constructor(e, n, i, r) {
    super(e, n, i, r),
      (this.labels_ = null),
      (this.text_ = ""),
      (this.textOffsetX_ = 0),
      (this.textOffsetY_ = 0),
      (this.textRotateWithView_ = void 0),
      (this.textRotation_ = 0),
      (this.textFillState_ = null),
      (this.fillStates = {}),
      (this.fillStates[lt] = { fillStyle: lt }),
      (this.textStrokeState_ = null),
      (this.strokeStates = {}),
      (this.textState_ = {}),
      (this.textStates = {}),
      (this.textKey_ = ""),
      (this.fillKey_ = ""),
      (this.strokeKey_ = ""),
      (this.declutterImageWithText_ = void 0);
  }
  finish() {
    const e = super.finish();
    return (
      (e.textStates = this.textStates),
      (e.fillStates = this.fillStates),
      (e.strokeStates = this.strokeStates),
      e
    );
  }
  drawText(e, n) {
    const i = this.textFillState_,
      r = this.textStrokeState_,
      s = this.textState_;
    if (this.text_ === "" || !s || (!i && !r)) return;
    const o = this.coordinates;
    let l = o.length;
    const a = e.getType();
    let u = null,
      c = e.getStride();
    if (
      s.placement === "line" &&
      (a == "LineString" ||
        a == "MultiLineString" ||
        a == "Polygon" ||
        a == "MultiPolygon")
    ) {
      if (!at(this.getBufferedMaxExtent(), e.getExtent())) return;
      let h;
      if (((u = e.getFlatCoordinates()), a == "LineString")) h = [u.length];
      else if (a == "MultiLineString") h = e.getEnds();
      else if (a == "Polygon") h = e.getEnds().slice(0, 1);
      else if (a == "MultiPolygon") {
        const _ = e.getEndss();
        h = [];
        for (let v = 0, g = _.length; v < g; ++v) h.push(_[v][0]);
      }
      this.beginGeometry(e, n);
      const d = s.repeat,
        f = d ? void 0 : s.textAlign;
      let p = 0;
      for (let _ = 0, v = h.length; _ < v; ++_) {
        let g;
        d
          ? (g = uw(d * this.resolution, u, p, h[_], c))
          : (g = [u.slice(p, h[_])]);
        for (let m = 0, y = g.length; m < y; ++m) {
          const E = g[m];
          let x = 0,
            w = E.length;
          if (f == null) {
            const T = cw(s.maxAngle, E, 0, E.length, 2);
            (x = T[0]), (w = T[1]);
          }
          for (let T = x; T < w; T += c) o.push(E[T], E[T + 1]);
          const S = o.length;
          (p = h[_]), this.drawChars_(l, S), (l = S);
        }
      }
      this.endGeometry(n);
    } else {
      let h = s.overflow ? null : [];
      switch (a) {
        case "Point":
        case "MultiPoint":
          u = e.getFlatCoordinates();
          break;
        case "LineString":
          u = e.getFlatMidpoint();
          break;
        case "Circle":
          u = e.getCenter();
          break;
        case "MultiLineString":
          (u = e.getFlatMidpoints()), (c = 2);
          break;
        case "Polygon":
          (u = e.getFlatInteriorPoint()),
            s.overflow || h.push(u[2] / this.resolution),
            (c = 3);
          break;
        case "MultiPolygon":
          const g = e.getFlatInteriorPoints();
          u = [];
          for (let m = 0, y = g.length; m < y; m += 3)
            s.overflow || h.push(g[m + 2] / this.resolution),
              u.push(g[m], g[m + 1]);
          if (u.length === 0) return;
          c = 2;
          break;
      }
      const d = this.appendFlatPointCoordinates(u, c);
      if (d === l) return;
      if (h && (d - l) / 2 !== u.length / c) {
        let g = l / 2;
        h = h.filter((m, y) => {
          const E =
            o[(g + y) * 2] === u[y * c] && o[(g + y) * 2 + 1] === u[y * c + 1];
          return E || --g, E;
        });
      }
      this.saveTextStates_(),
        (s.backgroundFill || s.backgroundStroke) &&
          (this.setFillStrokeStyle(s.backgroundFill, s.backgroundStroke),
          s.backgroundFill && this.updateFillStyle(this.state, this.createFill),
          s.backgroundStroke &&
            (this.updateStrokeStyle(this.state, this.applyStroke),
            this.hitDetectionInstructions.push(this.createStroke(this.state)))),
        this.beginGeometry(e, n);
      let f = s.padding;
      if (f != Gi && (s.scale[0] < 0 || s.scale[1] < 0)) {
        let g = s.padding[0],
          m = s.padding[1],
          y = s.padding[2],
          E = s.padding[3];
        s.scale[0] < 0 && ((m = -m), (E = -E)),
          s.scale[1] < 0 && ((g = -g), (y = -y)),
          (f = [g, m, y, E]);
      }
      const p = this.pixelRatio;
      this.instructions.push([
        G.DRAW_IMAGE,
        l,
        d,
        null,
        NaN,
        NaN,
        NaN,
        1,
        0,
        0,
        this.textRotateWithView_,
        this.textRotation_,
        [1, 1],
        NaN,
        void 0,
        this.declutterImageWithText_,
        f == Gi
          ? Gi
          : f.map(function (g) {
              return g * p;
            }),
        !!s.backgroundFill,
        !!s.backgroundStroke,
        this.text_,
        this.textKey_,
        this.strokeKey_,
        this.fillKey_,
        this.textOffsetX_,
        this.textOffsetY_,
        h,
      ]);
      const _ = 1 / p,
        v = this.state.fillStyle;
      s.backgroundFill &&
        ((this.state.fillStyle = lt),
        this.hitDetectionInstructions.push(this.createFill(this.state))),
        this.hitDetectionInstructions.push([
          G.DRAW_IMAGE,
          l,
          d,
          null,
          NaN,
          NaN,
          NaN,
          1,
          0,
          0,
          this.textRotateWithView_,
          this.textRotation_,
          [_, _],
          NaN,
          void 0,
          this.declutterImageWithText_,
          f,
          !!s.backgroundFill,
          !!s.backgroundStroke,
          this.text_,
          this.textKey_,
          this.strokeKey_,
          this.fillKey_ ? lt : this.fillKey_,
          this.textOffsetX_,
          this.textOffsetY_,
          h,
        ]),
        s.backgroundFill &&
          ((this.state.fillStyle = v),
          this.hitDetectionInstructions.push(this.createFill(this.state))),
        this.endGeometry(n);
    }
  }
  saveTextStates_() {
    const e = this.textStrokeState_,
      n = this.textState_,
      i = this.textFillState_,
      r = this.strokeKey_;
    e &&
      (r in this.strokeStates ||
        (this.strokeStates[r] = {
          strokeStyle: e.strokeStyle,
          lineCap: e.lineCap,
          lineDashOffset: e.lineDashOffset,
          lineWidth: e.lineWidth,
          lineJoin: e.lineJoin,
          miterLimit: e.miterLimit,
          lineDash: e.lineDash,
        }));
    const s = this.textKey_;
    s in this.textStates ||
      (this.textStates[s] = {
        font: n.font,
        textAlign: n.textAlign || yo,
        justify: n.justify,
        textBaseline: n.textBaseline || da,
        scale: n.scale,
      });
    const o = this.fillKey_;
    i &&
      (o in this.fillStates ||
        (this.fillStates[o] = { fillStyle: i.fillStyle }));
  }
  drawChars_(e, n) {
    const i = this.textStrokeState_,
      r = this.textState_,
      s = this.strokeKey_,
      o = this.textKey_,
      l = this.fillKey_;
    this.saveTextStates_();
    const a = this.pixelRatio,
      u = pa[r.textBaseline],
      c = this.textOffsetY_ * a,
      h = this.text_,
      d = i ? (i.lineWidth * Math.abs(r.scale[0])) / 2 : 0;
    this.instructions.push([
      G.DRAW_CHARS,
      e,
      n,
      u,
      r.overflow,
      l,
      r.maxAngle,
      a,
      c,
      s,
      d * a,
      h,
      o,
      1,
    ]),
      this.hitDetectionInstructions.push([
        G.DRAW_CHARS,
        e,
        n,
        u,
        r.overflow,
        l && lt,
        r.maxAngle,
        a,
        c,
        s,
        d * a,
        h,
        o,
        1 / a,
      ]);
  }
  setTextStyle(e, n) {
    let i, r, s;
    if (!e) this.text_ = "";
    else {
      const o = e.getFill();
      o
        ? ((r = this.textFillState_),
          r || ((r = {}), (this.textFillState_ = r)),
          (r.fillStyle = nn(o.getColor() || lt)))
        : ((r = null), (this.textFillState_ = r));
      const l = e.getStroke();
      if (!l) (s = null), (this.textStrokeState_ = s);
      else {
        (s = this.textStrokeState_),
          s || ((s = {}), (this.textStrokeState_ = s));
        const p = l.getLineDash(),
          _ = l.getLineDashOffset(),
          v = l.getWidth(),
          g = l.getMiterLimit();
        (s.lineCap = l.getLineCap() || Qr),
          (s.lineDash = p ? p.slice() : Sn),
          (s.lineDashOffset = _ === void 0 ? Tn : _),
          (s.lineJoin = l.getLineJoin() || Jr),
          (s.lineWidth = v === void 0 ? vo : v),
          (s.miterLimit = g === void 0 ? po : g),
          (s.strokeStyle = nn(l.getColor() || _o));
      }
      i = this.textState_;
      const a = e.getFont() || u_;
      bE(a);
      const u = e.getScaleArray();
      (i.overflow = e.getOverflow()),
        (i.font = a),
        (i.maxAngle = e.getMaxAngle()),
        (i.placement = e.getPlacement()),
        (i.textAlign = e.getTextAlign()),
        (i.repeat = e.getRepeat()),
        (i.justify = e.getJustify()),
        (i.textBaseline = e.getTextBaseline() || da),
        (i.backgroundFill = e.getBackgroundFill()),
        (i.backgroundStroke = e.getBackgroundStroke()),
        (i.padding = e.getPadding() || Gi),
        (i.scale = u === void 0 ? [1, 1] : u);
      const c = e.getOffsetX(),
        h = e.getOffsetY(),
        d = e.getRotateWithView(),
        f = e.getRotation();
      (this.text_ = e.getText() || ""),
        (this.textOffsetX_ = c === void 0 ? 0 : c),
        (this.textOffsetY_ = h === void 0 ? 0 : h),
        (this.textRotateWithView_ = d === void 0 ? !1 : d),
        (this.textRotation_ = f === void 0 ? 0 : f),
        (this.strokeKey_ = s
          ? (typeof s.strokeStyle == "string"
              ? s.strokeStyle
              : ne(s.strokeStyle)) +
            s.lineCap +
            s.lineDashOffset +
            "|" +
            s.lineWidth +
            s.lineJoin +
            s.miterLimit +
            "[" +
            s.lineDash.join() +
            "]"
          : ""),
        (this.textKey_ =
          i.font +
          i.scale +
          (i.textAlign || "?") +
          (i.repeat || "?") +
          (i.justify || "?") +
          (i.textBaseline || "?")),
        (this.fillKey_ = r
          ? typeof r.fillStyle == "string"
            ? r.fillStyle
            : "|" + ne(r.fillStyle)
          : "");
    }
    this.declutterImageWithText_ = n;
  }
}
const dw = {
  Circle: Hg,
  Default: No,
  Image: sw,
  LineString: lw,
  Polygon: Hg,
  Text: hw,
};
class qg {
  constructor(e, n, i, r) {
    (this.tolerance_ = e),
      (this.maxExtent_ = n),
      (this.pixelRatio_ = r),
      (this.resolution_ = i),
      (this.buildersByZIndex_ = {});
  }
  finish() {
    const e = {};
    for (const n in this.buildersByZIndex_) {
      e[n] = e[n] || {};
      const i = this.buildersByZIndex_[n];
      for (const r in i) {
        const s = i[r].finish();
        e[n][r] = s;
      }
    }
    return e;
  }
  getBuilder(e, n) {
    const i = e !== void 0 ? e.toString() : "0";
    let r = this.buildersByZIndex_[i];
    r === void 0 && ((r = {}), (this.buildersByZIndex_[i] = r));
    let s = r[n];
    if (s === void 0) {
      const o = dw[n];
      (s = new o(
        this.tolerance_,
        this.maxExtent_,
        this.resolution_,
        this.pixelRatio_,
      )),
        (r[n] = s);
    }
    return s;
  }
}
class fw extends Po {
  constructor(e) {
    super(),
      (this.ready = !0),
      (this.boundHandleImageChange_ = this.handleImageChange_.bind(this)),
      (this.layer_ = e),
      (this.declutterExecutorGroup = null);
  }
  getFeatures(e) {
    return W();
  }
  getData(e) {
    return null;
  }
  prepareFrame(e) {
    return W();
  }
  renderFrame(e, n) {
    return W();
  }
  loadedTileCallback(e, n, i) {
    e[n] || (e[n] = {}), (e[n][i.tileCoord.toString()] = i);
  }
  createLoadedTileFinder(e, n, i) {
    return (r, s) => {
      const o = this.loadedTileCallback.bind(this, i, r);
      return e.forEachLoadedTile(n, r, s, o);
    };
  }
  forEachFeatureAtCoordinate(e, n, i, r, s) {}
  getLayer() {
    return this.layer_;
  }
  handleFontsChanged() {}
  handleImageChange_(e) {
    const n = e.target;
    (n.getState() === le.LOADED || n.getState() === le.ERROR) &&
      this.renderIfReadyAndVisible();
  }
  loadImage(e) {
    let n = e.getState();
    return (
      n != le.LOADED &&
        n != le.ERROR &&
        e.addEventListener(K.CHANGE, this.boundHandleImageChange_),
      n == le.IDLE && (e.load(), (n = e.getState())),
      n == le.LOADED
    );
  }
  renderIfReadyAndVisible() {
    const e = this.getLayer();
    e && e.getVisible() && e.getSourceState() === "ready" && e.changed();
  }
  disposeInternal() {
    delete this.layer_, super.disposeInternal();
  }
}
class S_ extends Nn {
  constructor(e, n, i, r) {
    super(e),
      (this.inversePixelTransform = n),
      (this.frameState = i),
      (this.context = r);
  }
}
const Qg = [];
let _r = null;
function gw() {
  _r = Qe(1, 1, void 0, { willReadFrequently: !0 });
}
class T_ extends fw {
  constructor(e) {
    super(e),
      (this.container = null),
      this.renderedResolution,
      (this.tempTransform = Kt()),
      (this.pixelTransform = Kt()),
      (this.inversePixelTransform = Kt()),
      (this.context = null),
      (this.containerReused = !1),
      (this.pixelContext_ = null),
      (this.frameState = null);
  }
  getImageData(e, n, i) {
    _r || gw(), _r.clearRect(0, 0, 1, 1);
    let r;
    try {
      _r.drawImage(e, n, i, 1, 1, 0, 0, 1, 1),
        (r = _r.getImageData(0, 0, 1, 1).data);
    } catch {
      return (_r = null), null;
    }
    return r;
  }
  getBackground(e) {
    let i = this.getLayer().getBackground();
    return (
      typeof i == "function" && (i = i(e.viewState.resolution)), i || void 0
    );
  }
  useContainer(e, n, i) {
    const r = this.getLayer().getClassName();
    let s, o;
    if (
      e &&
      e.className === r &&
      (!i ||
        (e &&
          e.style.backgroundColor &&
          xi(ca(e.style.backgroundColor), ca(i))))
    ) {
      const l = e.firstElementChild;
      l instanceof HTMLCanvasElement && (o = l.getContext("2d"));
    }
    if (
      (o && o.canvas.style.transform === n
        ? ((this.container = e),
          (this.context = o),
          (this.containerReused = !0))
        : this.containerReused
          ? ((this.container = null),
            (this.context = null),
            (this.containerReused = !1))
          : this.container && (this.container.style.backgroundColor = null),
      !this.container)
    ) {
      (s = document.createElement("div")), (s.className = r);
      let l = s.style;
      (l.position = "absolute"),
        (l.width = "100%"),
        (l.height = "100%"),
        (o = Qe());
      const a = o.canvas;
      s.appendChild(a),
        (l = a.style),
        (l.position = "absolute"),
        (l.left = "0"),
        (l.transformOrigin = "top left"),
        (this.container = s),
        (this.context = o);
    }
    !this.containerReused &&
      i &&
      !this.container.style.backgroundColor &&
      (this.container.style.backgroundColor = i);
  }
  clipUnrotated(e, n, i) {
    const r = Ji(i),
      s = Ba(i),
      o = Xa(i),
      l = Wa(i);
    Me(n.coordinateToPixelTransform, r),
      Me(n.coordinateToPixelTransform, s),
      Me(n.coordinateToPixelTransform, o),
      Me(n.coordinateToPixelTransform, l);
    const a = this.inversePixelTransform;
    Me(a, r),
      Me(a, s),
      Me(a, o),
      Me(a, l),
      e.save(),
      e.beginPath(),
      e.moveTo(Math.round(r[0]), Math.round(r[1])),
      e.lineTo(Math.round(s[0]), Math.round(s[1])),
      e.lineTo(Math.round(o[0]), Math.round(o[1])),
      e.lineTo(Math.round(l[0]), Math.round(l[1])),
      e.clip();
  }
  dispatchRenderEvent_(e, n, i) {
    const r = this.getLayer();
    if (r.hasListener(e)) {
      const s = new S_(e, this.inversePixelTransform, i, n);
      r.dispatchEvent(s);
    }
  }
  preRender(e, n) {
    (this.frameState = n), this.dispatchRenderEvent_(ln.PRERENDER, e, n);
  }
  postRender(e, n) {
    this.dispatchRenderEvent_(ln.POSTRENDER, e, n);
  }
  getRenderTransform(e, n, i, r, s, o, l) {
    const a = s / 2,
      u = o / 2,
      c = r / n,
      h = -c,
      d = -e[0] + l,
      f = -e[1];
    return Ln(this.tempTransform, a, u, c, h, -i, d, f);
  }
  disposeInternal() {
    delete this.frameState, super.disposeInternal();
  }
}
function mw(t, e, n, i, r, s, o, l, a, u, c, h) {
  let d = t[e],
    f = t[e + 1],
    p = 0,
    _ = 0,
    v = 0,
    g = 0;
  function m() {
    (p = d),
      (_ = f),
      (e += i),
      (d = t[e]),
      (f = t[e + 1]),
      (g += v),
      (v = Math.sqrt((d - p) * (d - p) + (f - _) * (f - _)));
  }
  do m();
  while (e < n - i && g + v < s);
  let y = v === 0 ? 0 : (s - g) / v;
  const E = _t(p, d, y),
    x = _t(_, f, y),
    w = e - i,
    S = g,
    T = s + l * a(u, r, c);
  for (; e < n - i && g + v < T; ) m();
  y = v === 0 ? 0 : (T - g) / v;
  const A = _t(p, d, y),
    M = _t(_, f, y);
  let X;
  if (h) {
    const z = [E, x, A, M];
    Y0(z, 0, 4, 2, h, z, z), (X = z[0] > z[2]);
  } else X = E > A;
  const H = Math.PI,
    B = [],
    fe = w + i === e;
  (e = w), (v = 0), (g = S), (d = t[e]), (f = t[e + 1]);
  let U;
  if (fe) {
    m(), (U = Math.atan2(f - _, d - p)), X && (U += U > 0 ? -H : H);
    const z = (A + E) / 2,
      D = (M + x) / 2;
    return (B[0] = [z, D, (T - s) / 2, U, r]), B;
  }
  r = r.replace(/\n/g, " ");
  for (let z = 0, D = r.length; z < D; ) {
    m();
    let R = Math.atan2(f - _, d - p);
    if ((X && (R += R > 0 ? -H : H), U !== void 0)) {
      let V = R - U;
      if (((V += V > H ? -2 * H : V < -H ? 2 * H : 0), Math.abs(V) > o))
        return null;
    }
    U = R;
    const O = z;
    let F = 0;
    for (; z < D; ++z) {
      const V = X ? D - z - 1 : z,
        ie = l * a(u, r[V], c);
      if (e + i < n && g + v < s + F + ie / 2) break;
      F += ie;
    }
    if (z === O) continue;
    const Z = X ? r.substring(D - O, D - z) : r.substring(O, z);
    y = v === 0 ? 0 : (s + F / 2 - g) / v;
    const I = _t(p, d, y),
      ye = _t(_, f, y);
    B.push([I, ye, F / 2, R, Z]), (s += F);
  }
  return B;
}
const dr = Ft(),
  bn = [],
  gn = [],
  mn = [],
  Wn = [];
function Jg(t) {
  return t[3].declutterBox;
}
const em = new RegExp("[֑-ࣿיִ-﷿ﹰ-ﻼࠀ-࿿-]");
function Bu(t, e) {
  return (
    e === "start"
      ? (e = em.test(t) ? "right" : "left")
      : e === "end" && (e = em.test(t) ? "left" : "right"),
    pa[e]
  );
}
function pw(t, e, n) {
  return (
    n > 0 &&
      t.push(
        `
`,
        "",
      ),
    t.push(e, ""),
    t
  );
}
class _w {
  constructor(e, n, i, r) {
    (this.overlaps = i),
      (this.pixelRatio = n),
      (this.resolution = e),
      this.alignFill_,
      (this.instructions = r.instructions),
      (this.coordinates = r.coordinates),
      (this.coordinateCache_ = {}),
      (this.renderedTransform_ = Kt()),
      (this.hitDetectionInstructions = r.hitDetectionInstructions),
      (this.pixelCoordinates_ = null),
      (this.viewRotation_ = 0),
      (this.fillStates = r.fillStates || {}),
      (this.strokeStates = r.strokeStates || {}),
      (this.textStates = r.textStates || {}),
      (this.widths_ = {}),
      (this.labels_ = {});
  }
  createLabel(e, n, i, r) {
    const s = e + n + i + r;
    if (this.labels_[s]) return this.labels_[s];
    const o = r ? this.strokeStates[r] : null,
      l = i ? this.fillStates[i] : null,
      a = this.textStates[n],
      u = this.pixelRatio,
      c = [a.scale[0] * u, a.scale[1] * u],
      h = Array.isArray(e),
      d = a.justify
        ? pa[a.justify]
        : Bu(Array.isArray(e) ? e[0] : e, a.textAlign || yo),
      f = r && o.lineWidth ? o.lineWidth : 0,
      p = h
        ? e
        : e
            .split(
              `
`,
            )
            .reduce(pw, []),
      { width: _, height: v, widths: g, heights: m, lineWidths: y } = XE(a, p),
      E = _ + f,
      x = [],
      w = (E + 2) * c[0],
      S = (v + f) * c[1],
      T = {
        width: w < 0 ? Math.floor(w) : Math.ceil(w),
        height: S < 0 ? Math.floor(S) : Math.ceil(S),
        contextInstructions: x,
      };
    (c[0] != 1 || c[1] != 1) && x.push("scale", c),
      r &&
        (x.push("strokeStyle", o.strokeStyle),
        x.push("lineWidth", f),
        x.push("lineCap", o.lineCap),
        x.push("lineJoin", o.lineJoin),
        x.push("miterLimit", o.miterLimit),
        x.push("setLineDash", [o.lineDash]),
        x.push("lineDashOffset", o.lineDashOffset)),
      i && x.push("fillStyle", l.fillStyle),
      x.push("textBaseline", "middle"),
      x.push("textAlign", "center");
    const A = 0.5 - d;
    let M = d * E + A * f;
    const X = [],
      H = [];
    let B = 0,
      fe = 0,
      U = 0,
      z = 0,
      D;
    for (let R = 0, O = p.length; R < O; R += 2) {
      const F = p[R];
      if (
        F ===
        `
`
      ) {
        (fe += B), (B = 0), (M = d * E + A * f), ++z;
        continue;
      }
      const Z = p[R + 1] || a.font;
      Z !== D && (r && X.push("font", Z), i && H.push("font", Z), (D = Z)),
        (B = Math.max(B, m[U]));
      const I = [F, M + A * g[U] + d * (g[U] - y[z]), 0.5 * (f + B) + fe];
      (M += g[U]),
        r && X.push("strokeText", I),
        i && H.push("fillText", I),
        ++U;
    }
    return (
      Array.prototype.push.apply(x, X),
      Array.prototype.push.apply(x, H),
      (this.labels_[s] = T),
      T
    );
  }
  replayTextBackground_(e, n, i, r, s, o, l) {
    e.beginPath(),
      e.moveTo.apply(e, n),
      e.lineTo.apply(e, i),
      e.lineTo.apply(e, r),
      e.lineTo.apply(e, s),
      e.lineTo.apply(e, n),
      o && ((this.alignFill_ = o[2]), this.fill_(e)),
      l && (this.setStrokeStyle_(e, l), e.stroke());
  }
  calculateImageOrLabelDimensions_(
    e,
    n,
    i,
    r,
    s,
    o,
    l,
    a,
    u,
    c,
    h,
    d,
    f,
    p,
    _,
    v,
  ) {
    (l *= d[0]), (a *= d[1]);
    let g = i - l,
      m = r - a;
    const y = s + u > e ? e - u : s,
      E = o + c > n ? n - c : o,
      x = p[3] + y * d[0] + p[1],
      w = p[0] + E * d[1] + p[2],
      S = g - p[3],
      T = m - p[0];
    (_ || h !== 0) &&
      ((bn[0] = S),
      (Wn[0] = S),
      (bn[1] = T),
      (gn[1] = T),
      (gn[0] = S + x),
      (mn[0] = gn[0]),
      (mn[1] = T + w),
      (Wn[1] = mn[1]));
    let A;
    return (
      h !== 0
        ? ((A = Ln(Kt(), i, r, 1, 1, h, -i, -r)),
          Me(A, bn),
          Me(A, gn),
          Me(A, mn),
          Me(A, Wn),
          Mn(
            Math.min(bn[0], gn[0], mn[0], Wn[0]),
            Math.min(bn[1], gn[1], mn[1], Wn[1]),
            Math.max(bn[0], gn[0], mn[0], Wn[0]),
            Math.max(bn[1], gn[1], mn[1], Wn[1]),
            dr,
          ))
        : Mn(
            Math.min(S, S + x),
            Math.min(T, T + w),
            Math.max(S, S + x),
            Math.max(T, T + w),
            dr,
          ),
      f && ((g = Math.round(g)), (m = Math.round(m))),
      {
        drawImageX: g,
        drawImageY: m,
        drawImageW: y,
        drawImageH: E,
        originX: u,
        originY: c,
        declutterBox: {
          minX: dr[0],
          minY: dr[1],
          maxX: dr[2],
          maxY: dr[3],
          value: v,
        },
        canvasTransform: A,
        scale: d,
      }
    );
  }
  replayImageOrLabel_(e, n, i, r, s, o, l) {
    const a = !!(o || l),
      u = r.declutterBox,
      c = e.canvas,
      h = l ? (l[2] * r.scale[0]) / 2 : 0;
    return (
      u.minX - h <= c.width / n &&
        u.maxX + h >= 0 &&
        u.minY - h <= c.height / n &&
        u.maxY + h >= 0 &&
        (a && this.replayTextBackground_(e, bn, gn, mn, Wn, o, l),
        BE(
          e,
          r.canvasTransform,
          s,
          i,
          r.originX,
          r.originY,
          r.drawImageW,
          r.drawImageH,
          r.drawImageX,
          r.drawImageY,
          r.scale,
        )),
      !0
    );
  }
  fill_(e) {
    if (this.alignFill_) {
      const n = Me(this.renderedTransform_, [0, 0]),
        i = 512 * this.pixelRatio;
      e.save(), e.translate(n[0] % i, n[1] % i), e.rotate(this.viewRotation_);
    }
    e.fill(), this.alignFill_ && e.restore();
  }
  setStrokeStyle_(e, n) {
    (e.strokeStyle = n[1]),
      (e.lineWidth = n[2]),
      (e.lineCap = n[3]),
      (e.lineJoin = n[4]),
      (e.miterLimit = n[5]),
      (e.lineDashOffset = n[7]),
      e.setLineDash(n[6]);
  }
  drawLabelWithPointPlacement_(e, n, i, r) {
    const s = this.textStates[n],
      o = this.createLabel(e, n, r, i),
      l = this.strokeStates[i],
      a = this.pixelRatio,
      u = Bu(Array.isArray(e) ? e[0] : e, s.textAlign || yo),
      c = pa[s.textBaseline || da],
      h = l && l.lineWidth ? l.lineWidth : 0,
      d = o.width / a - 2 * s.scale[0],
      f = u * d + 2 * (0.5 - u) * h,
      p = (c * o.height) / a + 2 * (0.5 - c) * h;
    return { label: o, anchorX: f, anchorY: p };
  }
  execute_(e, n, i, r, s, o, l, a) {
    let u;
    this.pixelCoordinates_ && xi(i, this.renderedTransform_)
      ? (u = this.pixelCoordinates_)
      : (this.pixelCoordinates_ || (this.pixelCoordinates_ = []),
        (u = ci(
          this.coordinates,
          0,
          this.coordinates.length,
          2,
          i,
          this.pixelCoordinates_,
        )),
        Ov(this.renderedTransform_, i));
    let c = 0;
    const h = r.length;
    let d = 0,
      f,
      p,
      _,
      v,
      g,
      m,
      y,
      E,
      x,
      w,
      S,
      T,
      A = 0,
      M = 0,
      X = null,
      H = null;
    const B = this.coordinateCache_,
      fe = this.viewRotation_,
      U = Math.round(Math.atan2(-i[1], i[0]) * 1e12) / 1e12,
      z = {
        context: e,
        pixelRatio: this.pixelRatio,
        resolution: this.resolution,
        rotation: fe,
      },
      D = this.instructions != r || this.overlaps ? 0 : 200;
    let R, O, F, Z;
    for (; c < h; ) {
      const I = r[c];
      switch (I[0]) {
        case G.BEGIN_GEOMETRY:
          (R = I[1]),
            (Z = I[3]),
            R.getGeometry()
              ? l !== void 0 && !at(l, Z.getExtent())
                ? (c = I[2] + 1)
                : ++c
              : (c = I[2]);
          break;
        case G.BEGIN_PATH:
          A > D && (this.fill_(e), (A = 0)),
            M > D && (e.stroke(), (M = 0)),
            !A && !M && (e.beginPath(), (v = NaN), (g = NaN)),
            ++c;
          break;
        case G.CIRCLE:
          d = I[1];
          const V = u[d],
            ie = u[d + 1],
            je = u[d + 2],
            Se = u[d + 3],
            un = je - V,
            cn = Se - ie,
            ir = Math.sqrt(un * un + cn * cn);
          e.moveTo(V + ir, ie), e.arc(V, ie, ir, 0, 2 * Math.PI, !0), ++c;
          break;
        case G.CLOSE_PATH:
          e.closePath(), ++c;
          break;
        case G.CUSTOM:
          (d = I[1]), (f = I[2]);
          const jo = I[3],
            rr = I[4],
            Go = I.length == 6 ? I[5] : void 0;
          (z.geometry = jo), (z.feature = R), c in B || (B[c] = []);
          const Dn = B[c];
          Go
            ? Go(u, d, f, 2, Dn)
            : ((Dn[0] = u[d]), (Dn[1] = u[d + 1]), (Dn.length = 2)),
            rr(Dn, z),
            ++c;
          break;
        case G.DRAW_IMAGE:
          (d = I[1]), (f = I[2]), (E = I[3]), (p = I[4]), (_ = I[5]);
          let cs = I[6];
          const zn = I[7],
            bo = I[8],
            Wo = I[9],
            Xo = I[10];
          let sr = I[11];
          const ou = I[12];
          let tt = I[13];
          const Tt = I[14],
            zt = I[15];
          if (!E && I.length >= 20) {
            (x = I[19]), (w = I[20]), (S = I[21]), (T = I[22]);
            const gt = this.drawLabelWithPointPlacement_(x, w, S, T);
            (E = gt.label), (I[3] = E);
            const ar = I[23];
            (p = (gt.anchorX - ar) * this.pixelRatio), (I[4] = p);
            const Rt = I[24];
            (_ = (gt.anchorY - Rt) * this.pixelRatio),
              (I[5] = _),
              (cs = E.height),
              (I[6] = cs),
              (tt = E.width),
              (I[13] = tt);
          }
          let hn;
          I.length > 25 && (hn = I[25]);
          let or, Ti, jn;
          I.length > 17
            ? ((or = I[16]), (Ti = I[17]), (jn = I[18]))
            : ((or = Gi), (Ti = !1), (jn = !1)),
            Xo && U ? (sr += fe) : !Xo && !U && (sr -= fe);
          let lr = 0;
          for (; d < f; d += 2) {
            if (hn && hn[lr++] < tt / this.pixelRatio) continue;
            const gt = this.calculateImageOrLabelDimensions_(
                E.width,
                E.height,
                u[d],
                u[d + 1],
                tt,
                cs,
                p,
                _,
                bo,
                Wo,
                sr,
                ou,
                s,
                or,
                Ti || jn,
                R,
              ),
              ar = [e, n, E, gt, zn, Ti ? X : null, jn ? H : null];
            if (a) {
              if (Tt === "none") continue;
              if (Tt === "obstacle") {
                a.insert(gt.declutterBox);
                continue;
              } else {
                let Rt, dn;
                if (zt) {
                  const mt = f - d;
                  if (!zt[mt]) {
                    zt[mt] = ar;
                    continue;
                  }
                  if (
                    ((Rt = zt[mt]),
                    delete zt[mt],
                    (dn = Jg(Rt)),
                    a.collides(dn))
                  )
                    continue;
                }
                if (a.collides(gt.declutterBox)) continue;
                Rt && (a.insert(dn), this.replayImageOrLabel_.apply(this, Rt)),
                  a.insert(gt.declutterBox);
              }
            }
            this.replayImageOrLabel_.apply(this, ar);
          }
          ++c;
          break;
        case G.DRAW_CHARS:
          const Bo = I[1],
            $e = I[2],
            lu = I[3],
            K_ = I[4];
          T = I[5];
          const Z_ = I[6],
            ef = I[7],
            tf = I[8];
          S = I[9];
          const au = I[10];
          (x = I[11]), (w = I[12]);
          const nf = [I[13], I[13]],
            uu = this.textStates[w],
            hs = uu.font,
            ds = [uu.scale[0] * ef, uu.scale[1] * ef];
          let fs;
          hs in this.widths_
            ? (fs = this.widths_[hs])
            : ((fs = {}), (this.widths_[hs] = fs));
          const rf = n_(u, Bo, $e, 2),
            sf = Math.abs(ds[0]) * Dg(hs, x, fs);
          if (K_ || sf <= rf) {
            const gt = this.textStates[w].textAlign,
              ar = (rf - sf) * Bu(x, gt),
              Rt = mw(
                u,
                Bo,
                $e,
                2,
                x,
                ar,
                Z_,
                Math.abs(ds[0]),
                Dg,
                hs,
                fs,
                U ? 0 : this.viewRotation_,
              );
            e: if (Rt) {
              const dn = [];
              let mt, Uo, Yo, nt, It;
              if (S)
                for (mt = 0, Uo = Rt.length; mt < Uo; ++mt) {
                  (It = Rt[mt]),
                    (Yo = It[4]),
                    (nt = this.createLabel(Yo, w, "", S)),
                    (p = It[2] + (ds[0] < 0 ? -au : au)),
                    (_ =
                      lu * nt.height +
                      ((0.5 - lu) * 2 * au * ds[1]) / ds[0] -
                      tf);
                  const fn = this.calculateImageOrLabelDimensions_(
                    nt.width,
                    nt.height,
                    It[0],
                    It[1],
                    nt.width,
                    nt.height,
                    p,
                    _,
                    0,
                    0,
                    It[3],
                    nf,
                    !1,
                    Gi,
                    !1,
                    R,
                  );
                  if (a && a.collides(fn.declutterBox)) break e;
                  dn.push([e, n, nt, fn, 1, null, null]);
                }
              if (T)
                for (mt = 0, Uo = Rt.length; mt < Uo; ++mt) {
                  (It = Rt[mt]),
                    (Yo = It[4]),
                    (nt = this.createLabel(Yo, w, T, "")),
                    (p = It[2]),
                    (_ = lu * nt.height - tf);
                  const fn = this.calculateImageOrLabelDimensions_(
                    nt.width,
                    nt.height,
                    It[0],
                    It[1],
                    nt.width,
                    nt.height,
                    p,
                    _,
                    0,
                    0,
                    It[3],
                    nf,
                    !1,
                    Gi,
                    !1,
                    R,
                  );
                  if (a && a.collides(fn.declutterBox)) break e;
                  dn.push([e, n, nt, fn, 1, null, null]);
                }
              a && a.load(dn.map(Jg));
              for (let fn = 0, $_ = dn.length; fn < $_; ++fn)
                this.replayImageOrLabel_.apply(this, dn[fn]);
            }
          }
          ++c;
          break;
        case G.END_GEOMETRY:
          if (o !== void 0) {
            R = I[1];
            const gt = o(R, Z);
            if (gt) return gt;
          }
          ++c;
          break;
        case G.FILL:
          D ? A++ : this.fill_(e), ++c;
          break;
        case G.MOVE_TO_LINE_TO:
          for (
            d = I[1],
              f = I[2],
              O = u[d],
              F = u[d + 1],
              m = (O + 0.5) | 0,
              y = (F + 0.5) | 0,
              (m !== v || y !== g) && (e.moveTo(O, F), (v = m), (g = y)),
              d += 2;
            d < f;
            d += 2
          )
            (O = u[d]),
              (F = u[d + 1]),
              (m = (O + 0.5) | 0),
              (y = (F + 0.5) | 0),
              (d == f - 2 || m !== v || y !== g) &&
                (e.lineTo(O, F), (v = m), (g = y));
          ++c;
          break;
        case G.SET_FILL_STYLE:
          (X = I),
            (this.alignFill_ = I[2]),
            A && (this.fill_(e), (A = 0), M && (e.stroke(), (M = 0))),
            (e.fillStyle = I[1]),
            ++c;
          break;
        case G.SET_STROKE_STYLE:
          (H = I), M && (e.stroke(), (M = 0)), this.setStrokeStyle_(e, I), ++c;
          break;
        case G.STROKE:
          D ? M++ : e.stroke(), ++c;
          break;
        default:
          ++c;
          break;
      }
    }
    A && this.fill_(e), M && e.stroke();
  }
  execute(e, n, i, r, s, o) {
    (this.viewRotation_ = r),
      this.execute_(e, n, i, this.instructions, s, void 0, void 0, o);
  }
  executeHitDetection(e, n, i, r, s) {
    return (
      (this.viewRotation_ = i),
      this.execute_(e, 1, n, this.hitDetectionInstructions, !0, r, s)
    );
  }
}
const Uu = ["Polygon", "Circle", "LineString", "Image", "Text", "Default"];
class tm {
  constructor(e, n, i, r, s, o) {
    (this.maxExtent_ = e),
      (this.overlaps_ = r),
      (this.pixelRatio_ = i),
      (this.resolution_ = n),
      (this.renderBuffer_ = o),
      (this.executorsByZIndex_ = {}),
      (this.hitDetectionContext_ = null),
      (this.hitDetectionTransform_ = Kt()),
      this.createExecutors_(s);
  }
  clip(e, n) {
    const i = this.getClipCoords(n);
    e.beginPath(),
      e.moveTo(i[0], i[1]),
      e.lineTo(i[2], i[3]),
      e.lineTo(i[4], i[5]),
      e.lineTo(i[6], i[7]),
      e.clip();
  }
  createExecutors_(e) {
    for (const n in e) {
      let i = this.executorsByZIndex_[n];
      i === void 0 && ((i = {}), (this.executorsByZIndex_[n] = i));
      const r = e[n];
      for (const s in r) {
        const o = r[s];
        i[s] = new _w(this.resolution_, this.pixelRatio_, this.overlaps_, o);
      }
    }
  }
  hasExecutors(e) {
    for (const n in this.executorsByZIndex_) {
      const i = this.executorsByZIndex_[n];
      for (let r = 0, s = e.length; r < s; ++r) if (e[r] in i) return !0;
    }
    return !1;
  }
  forEachFeatureAtCoordinate(e, n, i, r, s, o) {
    r = Math.round(r);
    const l = r * 2 + 1,
      a = Ln(
        this.hitDetectionTransform_,
        r + 0.5,
        r + 0.5,
        1 / n,
        -1 / n,
        -i,
        -e[0],
        -e[1],
      ),
      u = !this.hitDetectionContext_;
    u &&
      (this.hitDetectionContext_ = Qe(l, l, void 0, {
        willReadFrequently: !0,
      }));
    const c = this.hitDetectionContext_;
    c.canvas.width !== l || c.canvas.height !== l
      ? ((c.canvas.width = l), (c.canvas.height = l))
      : u || c.clearRect(0, 0, l, l);
    let h;
    this.renderBuffer_ !== void 0 &&
      ((h = Ft()), Us(h, e), md(h, n * (this.renderBuffer_ + r), h));
    const d = yw(r);
    let f;
    function p(x, w) {
      const S = c.getImageData(0, 0, l, l).data;
      for (let T = 0, A = d.length; T < A; T++)
        if (S[d[T]] > 0) {
          if (!o || (f !== "Image" && f !== "Text") || o.includes(x)) {
            const M = (d[T] - 3) / 4,
              X = r - (M % l),
              H = r - ((M / l) | 0),
              B = s(x, w, X * X + H * H);
            if (B) return B;
          }
          c.clearRect(0, 0, l, l);
          break;
        }
    }
    const _ = Object.keys(this.executorsByZIndex_).map(Number);
    _.sort(fi);
    let v, g, m, y, E;
    for (v = _.length - 1; v >= 0; --v) {
      const x = _[v].toString();
      for (m = this.executorsByZIndex_[x], g = Uu.length - 1; g >= 0; --g)
        if (
          ((f = Uu[g]),
          (y = m[f]),
          y !== void 0 && ((E = y.executeHitDetection(c, a, i, p, h)), E))
        )
          return E;
    }
  }
  getClipCoords(e) {
    const n = this.maxExtent_;
    if (!n) return null;
    const i = n[0],
      r = n[1],
      s = n[2],
      o = n[3],
      l = [i, r, i, o, s, o, s, r];
    return ci(l, 0, 8, 2, e, l), l;
  }
  isEmpty() {
    return $i(this.executorsByZIndex_);
  }
  execute(e, n, i, r, s, o, l) {
    const a = Object.keys(this.executorsByZIndex_).map(Number);
    a.sort(fi), this.maxExtent_ && (e.save(), this.clip(e, i)), (o = o || Uu);
    let u, c, h, d, f, p;
    for (l && a.reverse(), u = 0, c = a.length; u < c; ++u) {
      const _ = a[u].toString();
      for (f = this.executorsByZIndex_[_], h = 0, d = o.length; h < d; ++h) {
        const v = o[h];
        (p = f[v]), p !== void 0 && p.execute(e, n, i, r, s, l);
      }
    }
    this.maxExtent_ && e.restore();
  }
}
const Yu = {};
function yw(t) {
  if (Yu[t] !== void 0) return Yu[t];
  const e = t * 2 + 1,
    n = t * t,
    i = new Array(n + 1);
  for (let s = 0; s <= t; ++s)
    for (let o = 0; o <= t; ++o) {
      const l = s * s + o * o;
      if (l > n) break;
      let a = i[l];
      a || ((a = []), (i[l] = a)),
        a.push(((t + s) * e + (t + o)) * 4 + 3),
        s > 0 && a.push(((t - s) * e + (t + o)) * 4 + 3),
        o > 0 &&
          (a.push(((t + s) * e + (t - o)) * 4 + 3),
          s > 0 && a.push(((t - s) * e + (t - o)) * 4 + 3));
    }
  const r = [];
  for (let s = 0, o = i.length; s < o; ++s) i[s] && r.push(...i[s]);
  return (Yu[t] = r), r;
}
class vw extends C_ {
  constructor(e, n, i, r, s, o, l) {
    super(),
      (this.context_ = e),
      (this.pixelRatio_ = n),
      (this.extent_ = i),
      (this.transform_ = r),
      (this.transformRotation_ = r ? yd(Math.atan2(r[1], r[0]), 10) : 0),
      (this.viewRotation_ = s),
      (this.squaredTolerance_ = o),
      (this.userTransform_ = l),
      (this.contextFillState_ = null),
      (this.contextStrokeState_ = null),
      (this.contextTextState_ = null),
      (this.fillState_ = null),
      (this.strokeState_ = null),
      (this.image_ = null),
      (this.imageAnchorX_ = 0),
      (this.imageAnchorY_ = 0),
      (this.imageHeight_ = 0),
      (this.imageOpacity_ = 0),
      (this.imageOriginX_ = 0),
      (this.imageOriginY_ = 0),
      (this.imageRotateWithView_ = !1),
      (this.imageRotation_ = 0),
      (this.imageScale_ = [0, 0]),
      (this.imageWidth_ = 0),
      (this.text_ = ""),
      (this.textOffsetX_ = 0),
      (this.textOffsetY_ = 0),
      (this.textRotateWithView_ = !1),
      (this.textRotation_ = 0),
      (this.textScale_ = [0, 0]),
      (this.textFillState_ = null),
      (this.textStrokeState_ = null),
      (this.textState_ = null),
      (this.pixelCoordinates_ = []),
      (this.tmpLocalTransform_ = Kt());
  }
  drawImages_(e, n, i, r) {
    if (!this.image_) return;
    const s = ci(e, n, i, r, this.transform_, this.pixelCoordinates_),
      o = this.context_,
      l = this.tmpLocalTransform_,
      a = o.globalAlpha;
    this.imageOpacity_ != 1 && (o.globalAlpha = a * this.imageOpacity_);
    let u = this.imageRotation_;
    this.transformRotation_ === 0 && (u -= this.viewRotation_),
      this.imageRotateWithView_ && (u += this.viewRotation_);
    for (let c = 0, h = s.length; c < h; c += 2) {
      const d = s[c] - this.imageAnchorX_,
        f = s[c + 1] - this.imageAnchorY_;
      if (u !== 0 || this.imageScale_[0] != 1 || this.imageScale_[1] != 1) {
        const p = d + this.imageAnchorX_,
          _ = f + this.imageAnchorY_;
        Ln(l, p, _, 1, 1, u, -p, -_),
          o.save(),
          o.transform.apply(o, l),
          o.translate(p, _),
          o.scale(this.imageScale_[0], this.imageScale_[1]),
          o.drawImage(
            this.image_,
            this.imageOriginX_,
            this.imageOriginY_,
            this.imageWidth_,
            this.imageHeight_,
            -this.imageAnchorX_,
            -this.imageAnchorY_,
            this.imageWidth_,
            this.imageHeight_,
          ),
          o.restore();
      } else
        o.drawImage(
          this.image_,
          this.imageOriginX_,
          this.imageOriginY_,
          this.imageWidth_,
          this.imageHeight_,
          d,
          f,
          this.imageWidth_,
          this.imageHeight_,
        );
    }
    this.imageOpacity_ != 1 && (o.globalAlpha = a);
  }
  drawText_(e, n, i, r) {
    if (!this.textState_ || this.text_ === "") return;
    this.textFillState_ && this.setContextFillState_(this.textFillState_),
      this.textStrokeState_ &&
        this.setContextStrokeState_(this.textStrokeState_),
      this.setContextTextState_(this.textState_);
    const s = ci(e, n, i, r, this.transform_, this.pixelCoordinates_),
      o = this.context_;
    let l = this.textRotation_;
    for (
      this.transformRotation_ === 0 && (l -= this.viewRotation_),
        this.textRotateWithView_ && (l += this.viewRotation_);
      n < i;
      n += r
    ) {
      const a = s[n] + this.textOffsetX_,
        u = s[n + 1] + this.textOffsetY_;
      l !== 0 || this.textScale_[0] != 1 || this.textScale_[1] != 1
        ? (o.save(),
          o.translate(a - this.textOffsetX_, u - this.textOffsetY_),
          o.rotate(l),
          o.translate(this.textOffsetX_, this.textOffsetY_),
          o.scale(this.textScale_[0], this.textScale_[1]),
          this.textStrokeState_ && o.strokeText(this.text_, 0, 0),
          this.textFillState_ && o.fillText(this.text_, 0, 0),
          o.restore())
        : (this.textStrokeState_ && o.strokeText(this.text_, a, u),
          this.textFillState_ && o.fillText(this.text_, a, u));
    }
  }
  moveToLineTo_(e, n, i, r, s) {
    const o = this.context_,
      l = ci(e, n, i, r, this.transform_, this.pixelCoordinates_);
    o.moveTo(l[0], l[1]);
    let a = l.length;
    s && (a -= 2);
    for (let u = 2; u < a; u += 2) o.lineTo(l[u], l[u + 1]);
    return s && o.closePath(), i;
  }
  drawRings_(e, n, i, r) {
    for (let s = 0, o = i.length; s < o; ++s)
      n = this.moveToLineTo_(e, n, i[s], r, !0);
    return n;
  }
  drawCircle(e) {
    if (
      (this.squaredTolerance_ &&
        (e = e.simplifyTransformed(
          this.squaredTolerance_,
          this.userTransform_,
        )),
      !!at(this.extent_, e.getExtent()))
    ) {
      if (this.fillState_ || this.strokeState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const n = fE(e, this.transform_, this.pixelCoordinates_),
          i = n[2] - n[0],
          r = n[3] - n[1],
          s = Math.sqrt(i * i + r * r),
          o = this.context_;
        o.beginPath(),
          o.arc(n[0], n[1], s, 0, 2 * Math.PI),
          this.fillState_ && o.fill(),
          this.strokeState_ && o.stroke();
      }
      this.text_ !== "" && this.drawText_(e.getCenter(), 0, 2, 2);
    }
  }
  setStyle(e) {
    this.setFillStrokeStyle(e.getFill(), e.getStroke()),
      this.setImageStyle(e.getImage()),
      this.setTextStyle(e.getText());
  }
  setTransform(e) {
    this.transform_ = e;
  }
  drawGeometry(e) {
    switch (e.getType()) {
      case "Point":
        this.drawPoint(e);
        break;
      case "LineString":
        this.drawLineString(e);
        break;
      case "Polygon":
        this.drawPolygon(e);
        break;
      case "MultiPoint":
        this.drawMultiPoint(e);
        break;
      case "MultiLineString":
        this.drawMultiLineString(e);
        break;
      case "MultiPolygon":
        this.drawMultiPolygon(e);
        break;
      case "GeometryCollection":
        this.drawGeometryCollection(e);
        break;
      case "Circle":
        this.drawCircle(e);
        break;
    }
  }
  drawFeature(e, n) {
    const i = n.getGeometryFunction()(e);
    i && (this.setStyle(n), this.drawGeometry(i));
  }
  drawGeometryCollection(e) {
    const n = e.getGeometriesArray();
    for (let i = 0, r = n.length; i < r; ++i) this.drawGeometry(n[i]);
  }
  drawPoint(e) {
    this.squaredTolerance_ &&
      (e = e.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
    const n = e.getFlatCoordinates(),
      i = e.getStride();
    this.image_ && this.drawImages_(n, 0, n.length, i),
      this.text_ !== "" && this.drawText_(n, 0, n.length, i);
  }
  drawMultiPoint(e) {
    this.squaredTolerance_ &&
      (e = e.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
    const n = e.getFlatCoordinates(),
      i = e.getStride();
    this.image_ && this.drawImages_(n, 0, n.length, i),
      this.text_ !== "" && this.drawText_(n, 0, n.length, i);
  }
  drawLineString(e) {
    if (
      (this.squaredTolerance_ &&
        (e = e.simplifyTransformed(
          this.squaredTolerance_,
          this.userTransform_,
        )),
      !!at(this.extent_, e.getExtent()))
    ) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
        const n = this.context_,
          i = e.getFlatCoordinates();
        n.beginPath(),
          this.moveToLineTo_(i, 0, i.length, e.getStride(), !1),
          n.stroke();
      }
      if (this.text_ !== "") {
        const n = e.getFlatMidpoint();
        this.drawText_(n, 0, 2, 2);
      }
    }
  }
  drawMultiLineString(e) {
    this.squaredTolerance_ &&
      (e = e.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
    const n = e.getExtent();
    if (at(this.extent_, n)) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
        const i = this.context_,
          r = e.getFlatCoordinates();
        let s = 0;
        const o = e.getEnds(),
          l = e.getStride();
        i.beginPath();
        for (let a = 0, u = o.length; a < u; ++a)
          s = this.moveToLineTo_(r, s, o[a], l, !1);
        i.stroke();
      }
      if (this.text_ !== "") {
        const i = e.getFlatMidpoints();
        this.drawText_(i, 0, i.length, 2);
      }
    }
  }
  drawPolygon(e) {
    if (
      (this.squaredTolerance_ &&
        (e = e.simplifyTransformed(
          this.squaredTolerance_,
          this.userTransform_,
        )),
      !!at(this.extent_, e.getExtent()))
    ) {
      if (this.strokeState_ || this.fillState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const n = this.context_;
        n.beginPath(),
          this.drawRings_(
            e.getOrientedFlatCoordinates(),
            0,
            e.getEnds(),
            e.getStride(),
          ),
          this.fillState_ && n.fill(),
          this.strokeState_ && n.stroke();
      }
      if (this.text_ !== "") {
        const n = e.getFlatInteriorPoint();
        this.drawText_(n, 0, 2, 2);
      }
    }
  }
  drawMultiPolygon(e) {
    if (
      (this.squaredTolerance_ &&
        (e = e.simplifyTransformed(
          this.squaredTolerance_,
          this.userTransform_,
        )),
      !!at(this.extent_, e.getExtent()))
    ) {
      if (this.strokeState_ || this.fillState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const n = this.context_,
          i = e.getOrientedFlatCoordinates();
        let r = 0;
        const s = e.getEndss(),
          o = e.getStride();
        n.beginPath();
        for (let l = 0, a = s.length; l < a; ++l) {
          const u = s[l];
          r = this.drawRings_(i, r, u, o);
        }
        this.fillState_ && n.fill(), this.strokeState_ && n.stroke();
      }
      if (this.text_ !== "") {
        const n = e.getFlatInteriorPoints();
        this.drawText_(n, 0, n.length, 2);
      }
    }
  }
  setContextFillState_(e) {
    const n = this.context_,
      i = this.contextFillState_;
    i
      ? i.fillStyle != e.fillStyle &&
        ((i.fillStyle = e.fillStyle), (n.fillStyle = e.fillStyle))
      : ((n.fillStyle = e.fillStyle),
        (this.contextFillState_ = { fillStyle: e.fillStyle }));
  }
  setContextStrokeState_(e) {
    const n = this.context_,
      i = this.contextStrokeState_;
    i
      ? (i.lineCap != e.lineCap &&
          ((i.lineCap = e.lineCap), (n.lineCap = e.lineCap)),
        xi(i.lineDash, e.lineDash) || n.setLineDash((i.lineDash = e.lineDash)),
        i.lineDashOffset != e.lineDashOffset &&
          ((i.lineDashOffset = e.lineDashOffset),
          (n.lineDashOffset = e.lineDashOffset)),
        i.lineJoin != e.lineJoin &&
          ((i.lineJoin = e.lineJoin), (n.lineJoin = e.lineJoin)),
        i.lineWidth != e.lineWidth &&
          ((i.lineWidth = e.lineWidth), (n.lineWidth = e.lineWidth)),
        i.miterLimit != e.miterLimit &&
          ((i.miterLimit = e.miterLimit), (n.miterLimit = e.miterLimit)),
        i.strokeStyle != e.strokeStyle &&
          ((i.strokeStyle = e.strokeStyle), (n.strokeStyle = e.strokeStyle)))
      : ((n.lineCap = e.lineCap),
        n.setLineDash(e.lineDash),
        (n.lineDashOffset = e.lineDashOffset),
        (n.lineJoin = e.lineJoin),
        (n.lineWidth = e.lineWidth),
        (n.miterLimit = e.miterLimit),
        (n.strokeStyle = e.strokeStyle),
        (this.contextStrokeState_ = {
          lineCap: e.lineCap,
          lineDash: e.lineDash,
          lineDashOffset: e.lineDashOffset,
          lineJoin: e.lineJoin,
          lineWidth: e.lineWidth,
          miterLimit: e.miterLimit,
          strokeStyle: e.strokeStyle,
        }));
  }
  setContextTextState_(e) {
    const n = this.context_,
      i = this.contextTextState_,
      r = e.textAlign ? e.textAlign : yo;
    i
      ? (i.font != e.font && ((i.font = e.font), (n.font = e.font)),
        i.textAlign != r && ((i.textAlign = r), (n.textAlign = r)),
        i.textBaseline != e.textBaseline &&
          ((i.textBaseline = e.textBaseline),
          (n.textBaseline = e.textBaseline)))
      : ((n.font = e.font),
        (n.textAlign = r),
        (n.textBaseline = e.textBaseline),
        (this.contextTextState_ = {
          font: e.font,
          textAlign: r,
          textBaseline: e.textBaseline,
        }));
  }
  setFillStrokeStyle(e, n) {
    if (!e) this.fillState_ = null;
    else {
      const i = e.getColor();
      this.fillState_ = { fillStyle: nn(i || lt) };
    }
    if (!n) this.strokeState_ = null;
    else {
      const i = n.getColor(),
        r = n.getLineCap(),
        s = n.getLineDash(),
        o = n.getLineDashOffset(),
        l = n.getLineJoin(),
        a = n.getWidth(),
        u = n.getMiterLimit(),
        c = s || Sn;
      this.strokeState_ = {
        lineCap: r !== void 0 ? r : Qr,
        lineDash:
          this.pixelRatio_ === 1 ? c : c.map((h) => h * this.pixelRatio_),
        lineDashOffset: (o || Tn) * this.pixelRatio_,
        lineJoin: l !== void 0 ? l : Jr,
        lineWidth: (a !== void 0 ? a : vo) * this.pixelRatio_,
        miterLimit: u !== void 0 ? u : po,
        strokeStyle: nn(i || _o),
      };
    }
  }
  setImageStyle(e) {
    let n;
    if (!e || !(n = e.getSize())) {
      this.image_ = null;
      return;
    }
    const i = e.getPixelRatio(this.pixelRatio_),
      r = e.getAnchor(),
      s = e.getOrigin();
    (this.image_ = e.getImage(this.pixelRatio_)),
      (this.imageAnchorX_ = r[0] * i),
      (this.imageAnchorY_ = r[1] * i),
      (this.imageHeight_ = n[1] * i),
      (this.imageOpacity_ = e.getOpacity()),
      (this.imageOriginX_ = s[0]),
      (this.imageOriginY_ = s[1]),
      (this.imageRotateWithView_ = e.getRotateWithView()),
      (this.imageRotation_ = e.getRotation());
    const o = e.getScaleArray();
    (this.imageScale_ = [
      (o[0] * this.pixelRatio_) / i,
      (o[1] * this.pixelRatio_) / i,
    ]),
      (this.imageWidth_ = n[0] * i);
  }
  setTextStyle(e) {
    if (!e) this.text_ = "";
    else {
      const n = e.getFill();
      if (!n) this.textFillState_ = null;
      else {
        const f = n.getColor();
        this.textFillState_ = { fillStyle: nn(f || lt) };
      }
      const i = e.getStroke();
      if (!i) this.textStrokeState_ = null;
      else {
        const f = i.getColor(),
          p = i.getLineCap(),
          _ = i.getLineDash(),
          v = i.getLineDashOffset(),
          g = i.getLineJoin(),
          m = i.getWidth(),
          y = i.getMiterLimit();
        this.textStrokeState_ = {
          lineCap: p !== void 0 ? p : Qr,
          lineDash: _ || Sn,
          lineDashOffset: v || Tn,
          lineJoin: g !== void 0 ? g : Jr,
          lineWidth: m !== void 0 ? m : vo,
          miterLimit: y !== void 0 ? y : po,
          strokeStyle: nn(f || _o),
        };
      }
      const r = e.getFont(),
        s = e.getOffsetX(),
        o = e.getOffsetY(),
        l = e.getRotateWithView(),
        a = e.getRotation(),
        u = e.getScaleArray(),
        c = e.getText(),
        h = e.getTextAlign(),
        d = e.getTextBaseline();
      (this.textState_ = {
        font: r !== void 0 ? r : u_,
        textAlign: h !== void 0 ? h : yo,
        textBaseline: d !== void 0 ? d : da,
      }),
        (this.text_ =
          c !== void 0
            ? Array.isArray(c)
              ? c.reduce((f, p, _) => (f += _ % 2 ? " " : p), "")
              : c
            : ""),
        (this.textOffsetX_ = s !== void 0 ? this.pixelRatio_ * s : 0),
        (this.textOffsetY_ = o !== void 0 ? this.pixelRatio_ * o : 0),
        (this.textRotateWithView_ = l !== void 0 ? l : !1),
        (this.textRotation_ = a !== void 0 ? a : 0),
        (this.textScale_ = [this.pixelRatio_ * u[0], this.pixelRatio_ * u[1]]);
    }
  }
}
const en = 0.5;
function Ew(t, e, n, i, r, s, o) {
  const l = t[0] * en,
    a = t[1] * en,
    u = Qe(l, a);
  u.imageSmoothingEnabled = !1;
  const c = u.canvas,
    h = new vw(u, en, r, null, o),
    d = n.length,
    f = Math.floor((256 * 256 * 256 - 1) / d),
    p = {};
  for (let v = 1; v <= d; ++v) {
    const g = n[v - 1],
      m = g.getStyleFunction() || i;
    if (!m) continue;
    let y = m(g, s);
    if (!y) continue;
    Array.isArray(y) || (y = [y]);
    const x = (v * f).toString(16).padStart(7, "#00000");
    for (let w = 0, S = y.length; w < S; ++w) {
      const T = y[w],
        A = T.getGeometryFunction()(g);
      if (!A || !at(r, A.getExtent())) continue;
      const M = T.clone(),
        X = M.getFill();
      X && X.setColor(x);
      const H = M.getStroke();
      H && (H.setColor(x), H.setLineDash(null)), M.setText(void 0);
      const B = T.getImage();
      if (B) {
        const D = B.getImageSize();
        if (!D) continue;
        const R = Qe(D[0], D[1], void 0, { alpha: !1 }),
          O = R.canvas;
        (R.fillStyle = x),
          R.fillRect(0, 0, O.width, O.height),
          M.setImage(
            new Ze({
              img: O,
              anchor: B.getAnchor(),
              anchorXUnits: "pixels",
              anchorYUnits: "pixels",
              offset: B.getOrigin(),
              opacity: 1,
              size: B.getSize(),
              scale: B.getScale(),
              rotation: B.getRotation(),
              rotateWithView: B.getRotateWithView(),
            }),
          );
      }
      const fe = M.getZIndex() || 0;
      let U = p[fe];
      U ||
        ((U = {}),
        (p[fe] = U),
        (U.Polygon = []),
        (U.Circle = []),
        (U.LineString = []),
        (U.Point = []));
      const z = A.getType();
      if (z === "GeometryCollection") {
        const D = A.getGeometriesArrayRecursive();
        for (let R = 0, O = D.length; R < O; ++R) {
          const F = D[R];
          U[F.getType().replace("Multi", "")].push(F, M);
        }
      } else U[z.replace("Multi", "")].push(A, M);
    }
  }
  const _ = Object.keys(p).map(Number).sort(fi);
  for (let v = 0, g = _.length; v < g; ++v) {
    const m = p[_[v]];
    for (const y in m) {
      const E = m[y];
      for (let x = 0, w = E.length; x < w; x += 2) {
        h.setStyle(E[x + 1]);
        for (let S = 0, T = e.length; S < T; ++S)
          h.setTransform(e[S]), h.drawGeometry(E[x]);
      }
    }
  }
  return u.getImageData(0, 0, c.width, c.height);
}
function xw(t, e, n) {
  const i = [];
  if (n) {
    const r = Math.floor(Math.round(t[0]) * en),
      s = Math.floor(Math.round(t[1]) * en),
      o = (Re(r, 0, n.width - 1) + Re(s, 0, n.height - 1) * n.width) * 4,
      l = n.data[o],
      a = n.data[o + 1],
      c = n.data[o + 2] + 256 * (a + 256 * l),
      h = Math.floor((256 * 256 * 256 - 1) / e.length);
    c && c % h === 0 && i.push(e[c / h - 1]);
  }
  return i;
}
const ww = 0.5,
  R_ = {
    Point: Mw,
    LineString: kw,
    Polygon: Aw,
    MultiPoint: Ow,
    MultiLineString: Pw,
    MultiPolygon: Lw,
    GeometryCollection: Iw,
    Circle: Tw,
  };
function Cw(t, e) {
  return parseInt(ne(t), 10) - parseInt(ne(e), 10);
}
function Sw(t, e) {
  const n = dh(t, e);
  return n * n;
}
function dh(t, e) {
  return (ww * t) / e;
}
function Tw(t, e, n, i, r) {
  const s = n.getFill(),
    o = n.getStroke();
  if (s || o) {
    const a = t.getBuilder(n.getZIndex(), "Circle");
    a.setFillStrokeStyle(s, o), a.drawCircle(e, i);
  }
  const l = n.getText();
  if (l && l.getText()) {
    const a = (r || t).getBuilder(n.getZIndex(), "Text");
    a.setTextStyle(l), a.drawText(e, i);
  }
}
function nm(t, e, n, i, r, s, o) {
  let l = !1;
  const a = n.getImage();
  if (a) {
    const u = a.getImageState();
    u == le.LOADED || u == le.ERROR
      ? a.unlistenImageChange(r)
      : (u == le.IDLE && a.load(), a.listenImageChange(r), (l = !0));
  }
  return Rw(t, e, n, i, s, o), l;
}
function Rw(t, e, n, i, r, s) {
  const o = n.getGeometryFunction()(e);
  if (!o) return;
  const l = o.simplifyTransformed(i, r);
  if (n.getRenderer()) I_(t, l, n, e);
  else {
    const u = R_[l.getType()];
    u(t, l, n, e, s);
  }
}
function I_(t, e, n, i) {
  if (e.getType() == "GeometryCollection") {
    const s = e.getGeometries();
    for (let o = 0, l = s.length; o < l; ++o) I_(t, s[o], n, i);
    return;
  }
  t.getBuilder(n.getZIndex(), "Default").drawCustom(
    e,
    i,
    n.getRenderer(),
    n.getHitDetectionRenderer(),
  );
}
function Iw(t, e, n, i, r) {
  const s = e.getGeometriesArray();
  let o, l;
  for (o = 0, l = s.length; o < l; ++o) {
    const a = R_[s[o].getType()];
    a(t, s[o], n, i, r);
  }
}
function kw(t, e, n, i, r) {
  const s = n.getStroke();
  if (s) {
    const l = t.getBuilder(n.getZIndex(), "LineString");
    l.setFillStrokeStyle(null, s), l.drawLineString(e, i);
  }
  const o = n.getText();
  if (o && o.getText()) {
    const l = (r || t).getBuilder(n.getZIndex(), "Text");
    l.setTextStyle(o), l.drawText(e, i);
  }
}
function Pw(t, e, n, i, r) {
  const s = n.getStroke();
  if (s) {
    const l = t.getBuilder(n.getZIndex(), "LineString");
    l.setFillStrokeStyle(null, s), l.drawMultiLineString(e, i);
  }
  const o = n.getText();
  if (o && o.getText()) {
    const l = (r || t).getBuilder(n.getZIndex(), "Text");
    l.setTextStyle(o), l.drawText(e, i);
  }
}
function Lw(t, e, n, i, r) {
  const s = n.getFill(),
    o = n.getStroke();
  if (o || s) {
    const a = t.getBuilder(n.getZIndex(), "Polygon");
    a.setFillStrokeStyle(s, o), a.drawMultiPolygon(e, i);
  }
  const l = n.getText();
  if (l && l.getText()) {
    const a = (r || t).getBuilder(n.getZIndex(), "Text");
    a.setTextStyle(l), a.drawText(e, i);
  }
}
function Mw(t, e, n, i, r) {
  const s = n.getImage(),
    o = n.getText();
  let l;
  if (s) {
    if (s.getImageState() != le.LOADED) return;
    let a = t;
    if (r) {
      const c = s.getDeclutterMode();
      if (c !== "none")
        if (((a = r), c === "obstacle")) {
          const h = t.getBuilder(n.getZIndex(), "Image");
          h.setImageStyle(s, l), h.drawPoint(e, i);
        } else o && o.getText() && (l = {});
    }
    const u = a.getBuilder(n.getZIndex(), "Image");
    u.setImageStyle(s, l), u.drawPoint(e, i);
  }
  if (o && o.getText()) {
    let a = t;
    r && (a = r);
    const u = a.getBuilder(n.getZIndex(), "Text");
    u.setTextStyle(o, l), u.drawText(e, i);
  }
}
function Ow(t, e, n, i, r) {
  const s = n.getImage(),
    o = n.getText();
  let l;
  if (s) {
    if (s.getImageState() != le.LOADED) return;
    let a = t;
    if (r) {
      const c = s.getDeclutterMode();
      if (c !== "none")
        if (((a = r), c === "obstacle")) {
          const h = t.getBuilder(n.getZIndex(), "Image");
          h.setImageStyle(s, l), h.drawMultiPoint(e, i);
        } else o && o.getText() && (l = {});
    }
    const u = a.getBuilder(n.getZIndex(), "Image");
    u.setImageStyle(s, l), u.drawMultiPoint(e, i);
  }
  if (o && o.getText()) {
    let a = t;
    r && (a = r);
    const u = a.getBuilder(n.getZIndex(), "Text");
    u.setTextStyle(o, l), u.drawText(e, i);
  }
}
function Aw(t, e, n, i, r) {
  const s = n.getFill(),
    o = n.getStroke();
  if (s || o) {
    const a = t.getBuilder(n.getZIndex(), "Polygon");
    a.setFillStrokeStyle(s, o), a.drawPolygon(e, i);
  }
  const l = n.getText();
  if (l && l.getText()) {
    const a = (r || t).getBuilder(n.getZIndex(), "Text");
    a.setTextStyle(l), a.drawText(e, i);
  }
}
class Fw extends T_ {
  constructor(e) {
    super(e),
      (this.boundHandleStyleImageChange_ =
        this.handleStyleImageChange_.bind(this)),
      this.animatingOrInteracting_,
      (this.hitDetectionImageData_ = null),
      (this.renderedFeatures_ = null),
      (this.renderedRevision_ = -1),
      (this.renderedResolution_ = NaN),
      (this.renderedExtent_ = Ft()),
      (this.wrappedRenderedExtent_ = Ft()),
      this.renderedRotation_,
      (this.renderedCenter_ = null),
      (this.renderedProjection_ = null),
      (this.renderedRenderOrder_ = null),
      (this.replayGroup_ = null),
      (this.replayGroupChanged = !0),
      (this.declutterExecutorGroup = null),
      (this.clipping = !0),
      (this.compositionContext_ = null),
      (this.opacity_ = 1);
  }
  renderWorlds(e, n, i) {
    const r = n.extent,
      s = n.viewState,
      o = s.center,
      l = s.resolution,
      a = s.projection,
      u = s.rotation,
      c = a.getExtent(),
      h = this.getLayer().getSource(),
      d = n.pixelRatio,
      f = n.viewHints,
      p = !(f[Be.ANIMATING] || f[Be.INTERACTING]),
      _ = this.compositionContext_,
      v = Math.round(n.size[0] * d),
      g = Math.round(n.size[1] * d),
      m = h.getWrapX() && a.canWrapX(),
      y = m ? ae(c) : null,
      E = m ? Math.ceil((r[2] - c[2]) / y) + 1 : 1;
    let x = m ? Math.floor((r[0] - c[0]) / y) : 0;
    do {
      const w = this.getRenderTransform(o, l, u, d, v, g, x * y);
      e.execute(_, 1, w, u, p, void 0, i);
    } while (++x < E);
  }
  setupCompositionContext_() {
    if (this.opacity_ !== 1) {
      const e = Qe(this.context.canvas.width, this.context.canvas.height, Qg);
      this.compositionContext_ = e;
    } else this.compositionContext_ = this.context;
  }
  releaseCompositionContext_() {
    if (this.opacity_ !== 1) {
      const e = this.context.globalAlpha;
      (this.context.globalAlpha = this.opacity_),
        this.context.drawImage(this.compositionContext_.canvas, 0, 0),
        (this.context.globalAlpha = e),
        Ha(this.compositionContext_),
        Qg.push(this.compositionContext_.canvas),
        (this.compositionContext_ = null);
    }
  }
  renderDeclutter(e) {
    this.declutterExecutorGroup &&
      (this.setupCompositionContext_(),
      this.renderWorlds(this.declutterExecutorGroup, e, e.declutterTree),
      this.releaseCompositionContext_());
  }
  renderFrame(e, n) {
    const i = e.pixelRatio,
      r = e.layerStatesArray[e.layerIndex];
    Av(this.pixelTransform, 1 / i, 1 / i),
      gd(this.inversePixelTransform, this.pixelTransform);
    const s = O0(this.pixelTransform);
    this.useContainer(n, s, this.getBackground(e));
    const o = this.context,
      l = o.canvas,
      a = this.replayGroup_,
      u = this.declutterExecutorGroup;
    let c = (a && !a.isEmpty()) || (u && !u.isEmpty());
    if (
      !c &&
      !(
        this.getLayer().hasListener(ln.PRERENDER) ||
        this.getLayer().hasListener(ln.POSTRENDER)
      )
    )
      return null;
    const h = Math.round(e.size[0] * i),
      d = Math.round(e.size[1] * i);
    l.width != h || l.height != d
      ? ((l.width = h),
        (l.height = d),
        l.style.transform !== s && (l.style.transform = s))
      : this.containerReused || o.clearRect(0, 0, h, d),
      this.preRender(o, e);
    const f = e.viewState,
      p = f.projection;
    (this.opacity_ = r.opacity), this.setupCompositionContext_();
    let _ = !1;
    if (c && r.extent && this.clipping) {
      const v = zi(r.extent, p);
      (c = at(v, e.extent)),
        (_ = c && !Di(v, e.extent)),
        _ && this.clipUnrotated(this.compositionContext_, e, v);
    }
    return (
      c && this.renderWorlds(a, e),
      _ && this.compositionContext_.restore(),
      this.releaseCompositionContext_(),
      this.postRender(o, e),
      this.renderedRotation_ !== f.rotation &&
        ((this.renderedRotation_ = f.rotation),
        (this.hitDetectionImageData_ = null)),
      this.container
    );
  }
  getFeatures(e) {
    return new Promise((n) => {
      if (!this.hitDetectionImageData_ && !this.animatingOrInteracting_) {
        const i = [this.context.canvas.width, this.context.canvas.height];
        Me(this.pixelTransform, i);
        const r = this.renderedCenter_,
          s = this.renderedResolution_,
          o = this.renderedRotation_,
          l = this.renderedProjection_,
          a = this.wrappedRenderedExtent_,
          u = this.getLayer(),
          c = [],
          h = i[0] * en,
          d = i[1] * en;
        c.push(this.getRenderTransform(r, s, o, en, h, d, 0).slice());
        const f = u.getSource(),
          p = l.getExtent();
        if (f.getWrapX() && l.canWrapX() && !Di(p, a)) {
          let _ = a[0];
          const v = ae(p);
          let g = 0,
            m;
          for (; _ < p[0]; )
            --g,
              (m = v * g),
              c.push(this.getRenderTransform(r, s, o, en, h, d, m).slice()),
              (_ += v);
          for (g = 0, _ = a[2]; _ > p[2]; )
            ++g,
              (m = v * g),
              c.push(this.getRenderTransform(r, s, o, en, h, d, m).slice()),
              (_ -= v);
        }
        this.hitDetectionImageData_ = Ew(
          i,
          c,
          this.renderedFeatures_,
          u.getStyleFunction(),
          a,
          s,
          o,
        );
      }
      n(xw(e, this.renderedFeatures_, this.hitDetectionImageData_));
    });
  }
  forEachFeatureAtCoordinate(e, n, i, r, s) {
    if (!this.replayGroup_) return;
    const o = n.viewState.resolution,
      l = n.viewState.rotation,
      a = this.getLayer(),
      u = {},
      c = function (f, p, _) {
        const v = ne(f),
          g = u[v];
        if (g) {
          if (g !== !0 && _ < g.distanceSq) {
            if (_ === 0)
              return (u[v] = !0), s.splice(s.lastIndexOf(g), 1), r(f, a, p);
            (g.geometry = p), (g.distanceSq = _);
          }
        } else {
          if (_ === 0) return (u[v] = !0), r(f, a, p);
          s.push(
            (u[v] = {
              feature: f,
              layer: a,
              geometry: p,
              distanceSq: _,
              callback: r,
            }),
          );
        }
      };
    let h;
    const d = [this.replayGroup_];
    return (
      this.declutterExecutorGroup && d.push(this.declutterExecutorGroup),
      d.some(
        (f) =>
          (h = f.forEachFeatureAtCoordinate(
            e,
            o,
            l,
            i,
            c,
            f === this.declutterExecutorGroup && n.declutterTree
              ? n.declutterTree.all().map((p) => p.value)
              : null,
          )),
      ),
      h
    );
  }
  handleFontsChanged() {
    const e = this.getLayer();
    e.getVisible() && this.replayGroup_ && e.changed();
  }
  handleStyleImageChange_(e) {
    this.renderIfReadyAndVisible();
  }
  prepareFrame(e) {
    const n = this.getLayer(),
      i = n.getSource();
    if (!i) return !1;
    const r = e.viewHints[Be.ANIMATING],
      s = e.viewHints[Be.INTERACTING],
      o = n.getUpdateWhileAnimating(),
      l = n.getUpdateWhileInteracting();
    if ((this.ready && !o && r) || (!l && s))
      return (this.animatingOrInteracting_ = !0), !0;
    this.animatingOrInteracting_ = !1;
    const a = e.extent,
      u = e.viewState,
      c = u.projection,
      h = u.resolution,
      d = e.pixelRatio,
      f = n.getRevision(),
      p = n.getRenderBuffer();
    let _ = n.getRenderOrder();
    _ === void 0 && (_ = Cw);
    const v = u.center.slice(),
      g = md(a, p * h),
      m = g.slice(),
      y = [g.slice()],
      E = c.getExtent();
    if (i.getWrapX() && c.canWrapX() && !Di(E, e.extent)) {
      const z = ae(E),
        D = Math.max(ae(g) / 2, z);
      (g[0] = E[0] - D), (g[2] = E[2] + D), b0(v, c);
      const R = j0(y[0], c);
      R[0] < E[0] && R[2] < E[2]
        ? y.push([R[0] + z, R[1], R[2] + z, R[3]])
        : R[0] > E[0] &&
          R[2] > E[2] &&
          y.push([R[0] - z, R[1], R[2] - z, R[3]]);
    }
    if (
      this.ready &&
      this.renderedResolution_ == h &&
      this.renderedRevision_ == f &&
      this.renderedRenderOrder_ == _ &&
      Di(this.wrappedRenderedExtent_, g)
    )
      return (
        xi(this.renderedExtent_, m) ||
          ((this.hitDetectionImageData_ = null), (this.renderedExtent_ = m)),
        (this.renderedCenter_ = v),
        (this.replayGroupChanged = !1),
        !0
      );
    this.replayGroup_ = null;
    const x = new qg(dh(h, d), g, h, d);
    let w;
    this.getLayer().getDeclutter() && (w = new qg(dh(h, d), g, h, d));
    const S = U0();
    let T;
    if (S) {
      for (let z = 0, D = y.length; z < D; ++z) {
        const R = y[z],
          O = rh(R, c);
        i.loadFeatures(O, uE(h, c), S);
      }
      T = Ua(S, c);
    } else for (let z = 0, D = y.length; z < D; ++z) i.loadFeatures(y[z], h, c);
    const A = Sw(h, d);
    let M = !0;
    const X = (z) => {
        let D;
        const R = z.getStyleFunction() || n.getStyleFunction();
        if ((R && (D = R(z, h)), D)) {
          const O = this.renderFeature(z, A, D, x, T, w);
          M = M && !O;
        }
      },
      H = rh(g, c),
      B = i.getFeaturesInExtent(H);
    _ && B.sort(_);
    for (let z = 0, D = B.length; z < D; ++z) X(B[z]);
    (this.renderedFeatures_ = B), (this.ready = M);
    const fe = x.finish(),
      U = new tm(g, h, d, i.getOverlaps(), fe, n.getRenderBuffer());
    return (
      w &&
        (this.declutterExecutorGroup = new tm(
          g,
          h,
          d,
          i.getOverlaps(),
          w.finish(),
          n.getRenderBuffer(),
        )),
      (this.renderedResolution_ = h),
      (this.renderedRevision_ = f),
      (this.renderedRenderOrder_ = _),
      (this.renderedExtent_ = m),
      (this.wrappedRenderedExtent_ = g),
      (this.renderedCenter_ = v),
      (this.renderedProjection_ = c),
      (this.replayGroup_ = U),
      (this.hitDetectionImageData_ = null),
      (this.replayGroupChanged = !0),
      !0
    );
  }
  renderFeature(e, n, i, r, s, o) {
    if (!i) return !1;
    let l = !1;
    if (Array.isArray(i))
      for (let a = 0, u = i.length; a < u; ++a)
        l = nm(r, e, i[a], n, this.boundHandleStyleImageChange_, s, o) || l;
    else l = nm(r, e, i, n, this.boundHandleStyleImageChange_, s, o);
    return l;
  }
}
class Nw extends nw {
  constructor(e) {
    super(e);
  }
  createRenderer() {
    return new Fw(this);
  }
}
const Ci = Nw;
class im {
  constructor(e) {
    (this.rbush_ = new g_(e)), (this.items_ = {});
  }
  insert(e, n) {
    const i = { minX: e[0], minY: e[1], maxX: e[2], maxY: e[3], value: n };
    this.rbush_.insert(i), (this.items_[ne(n)] = i);
  }
  load(e, n) {
    const i = new Array(n.length);
    for (let r = 0, s = n.length; r < s; r++) {
      const o = e[r],
        l = n[r],
        a = { minX: o[0], minY: o[1], maxX: o[2], maxY: o[3], value: l };
      (i[r] = a), (this.items_[ne(l)] = a);
    }
    this.rbush_.load(i);
  }
  remove(e) {
    const n = ne(e),
      i = this.items_[n];
    return delete this.items_[n], this.rbush_.remove(i) !== null;
  }
  update(e, n) {
    const i = this.items_[ne(n)],
      r = [i.minX, i.minY, i.maxX, i.maxY];
    co(r, e) || (this.remove(n), this.insert(e, n));
  }
  getAll() {
    return this.rbush_.all().map(function (n) {
      return n.value;
    });
  }
  getInExtent(e) {
    const n = { minX: e[0], minY: e[1], maxX: e[2], maxY: e[3] };
    return this.rbush_.search(n).map(function (r) {
      return r.value;
    });
  }
  forEach(e) {
    return this.forEach_(this.getAll(), e);
  }
  forEachInExtent(e, n) {
    return this.forEach_(this.getInExtent(e), n);
  }
  forEach_(e, n) {
    let i;
    for (let r = 0, s = e.length; r < s; r++) if (((i = n(e[r])), i)) return i;
    return i;
  }
  isEmpty() {
    return $i(this.items_);
  }
  clear() {
    this.rbush_.clear(), (this.items_ = {});
  }
  getExtent(e) {
    const n = this.rbush_.toJSON();
    return Mn(n.minX, n.minY, n.maxX, n.maxY, e);
  }
  concat(e) {
    this.rbush_.load(e.rbush_.all());
    for (const n in e.items_) this.items_[n] = e.items_[n];
  }
}
class _a extends V0 {
  constructor(e) {
    super(),
      (this.geometries_ = e || null),
      (this.changeEventsKeys_ = []),
      this.listenGeometriesChange_();
  }
  unlistenGeometriesChange_() {
    this.changeEventsKeys_.forEach(ce), (this.changeEventsKeys_.length = 0);
  }
  listenGeometriesChange_() {
    if (this.geometries_)
      for (let e = 0, n = this.geometries_.length; e < n; ++e)
        this.changeEventsKeys_.push(
          Q(this.geometries_[e], K.CHANGE, this.changed, this),
        );
  }
  clone() {
    const e = new _a(null);
    return e.setGeometries(this.geometries_), e.applyProperties(this), e;
  }
  closestPointXY(e, n, i, r) {
    if (r < Qi(this.getExtent(), e, n)) return r;
    const s = this.geometries_;
    for (let o = 0, l = s.length; o < l; ++o)
      r = s[o].closestPointXY(e, n, i, r);
    return r;
  }
  containsXY(e, n) {
    const i = this.geometries_;
    for (let r = 0, s = i.length; r < s; ++r)
      if (i[r].containsXY(e, n)) return !0;
    return !1;
  }
  computeExtent(e) {
    rs(e);
    const n = this.geometries_;
    for (let i = 0, r = n.length; i < r; ++i) N0(e, n[i].getExtent());
    return e;
  }
  getGeometries() {
    return rm(this.geometries_);
  }
  getGeometriesArray() {
    return this.geometries_;
  }
  getGeometriesArrayRecursive() {
    let e = [];
    const n = this.geometries_;
    for (let i = 0, r = n.length; i < r; ++i)
      n[i].getType() === this.getType()
        ? (e = e.concat(n[i].getGeometriesArrayRecursive()))
        : e.push(n[i]);
    return e;
  }
  getSimplifiedGeometry(e) {
    if (
      (this.simplifiedGeometryRevision !== this.getRevision() &&
        ((this.simplifiedGeometryMaxMinSquaredTolerance = 0),
        (this.simplifiedGeometryRevision = this.getRevision())),
      e < 0 ||
        (this.simplifiedGeometryMaxMinSquaredTolerance !== 0 &&
          e < this.simplifiedGeometryMaxMinSquaredTolerance))
    )
      return this;
    const n = [],
      i = this.geometries_;
    let r = !1;
    for (let s = 0, o = i.length; s < o; ++s) {
      const l = i[s],
        a = l.getSimplifiedGeometry(e);
      n.push(a), a !== l && (r = !0);
    }
    if (r) {
      const s = new _a(null);
      return s.setGeometriesArray(n), s;
    }
    return (this.simplifiedGeometryMaxMinSquaredTolerance = e), this;
  }
  getType() {
    return "GeometryCollection";
  }
  intersectsExtent(e) {
    const n = this.geometries_;
    for (let i = 0, r = n.length; i < r; ++i)
      if (n[i].intersectsExtent(e)) return !0;
    return !1;
  }
  isEmpty() {
    return this.geometries_.length === 0;
  }
  rotate(e, n) {
    const i = this.geometries_;
    for (let r = 0, s = i.length; r < s; ++r) i[r].rotate(e, n);
    this.changed();
  }
  scale(e, n, i) {
    i || (i = mi(this.getExtent()));
    const r = this.geometries_;
    for (let s = 0, o = r.length; s < o; ++s) r[s].scale(e, n, i);
    this.changed();
  }
  setGeometries(e) {
    this.setGeometriesArray(rm(e));
  }
  setGeometriesArray(e) {
    this.unlistenGeometriesChange_(),
      (this.geometries_ = e),
      this.listenGeometriesChange_(),
      this.changed();
  }
  applyTransform(e) {
    const n = this.geometries_;
    for (let i = 0, r = n.length; i < r; ++i) n[i].applyTransform(e);
    this.changed();
  }
  translate(e, n) {
    const i = this.geometries_;
    for (let r = 0, s = i.length; r < s; ++r) i[r].translate(e, n);
    this.changed();
  }
  disposeInternal() {
    this.unlistenGeometriesChange_(), super.disposeInternal();
  }
}
function rm(t) {
  const e = [];
  for (let n = 0, i = t.length; n < i; ++n) e.push(t[n].clone());
  return e;
}
const Dw = _a;
class ya extends er {
  constructor(e, n, i) {
    if (
      (super(),
      (this.ends_ = []),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      Array.isArray(e[0]))
    )
      this.setCoordinates(e, n);
    else if (n !== void 0 && i) this.setFlatCoordinates(n, e), (this.ends_ = i);
    else {
      const r = e,
        s = [],
        o = [];
      for (let a = 0, u = r.length; a < u; ++a) {
        const c = r[a];
        on(s, c.getFlatCoordinates()), o.push(s.length);
      }
      const l = r.length === 0 ? this.getLayout() : r[0].getLayout();
      this.setFlatCoordinates(l, s), (this.ends_ = o);
    }
  }
  appendLineString(e) {
    on(this.flatCoordinates, e.getFlatCoordinates().slice()),
      this.ends_.push(this.flatCoordinates.length),
      this.changed();
  }
  clone() {
    const e = new ya(
      this.flatCoordinates.slice(),
      this.layout,
      this.ends_.slice(),
    );
    return e.applyProperties(this), e;
  }
  closestPointXY(e, n, i, r) {
    return r < Qi(this.getExtent(), e, n)
      ? r
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            Sd(this.flatCoordinates, 0, this.ends_, this.stride, 0),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        Rd(
          this.flatCoordinates,
          0,
          this.ends_,
          this.stride,
          this.maxDelta_,
          !1,
          e,
          n,
          i,
          r,
        ));
  }
  getCoordinateAtM(e, n, i) {
    return (this.layout != "XYM" && this.layout != "XYZM") ||
      this.flatCoordinates.length === 0
      ? null
      : ((n = n !== void 0 ? n : !1),
        (i = i !== void 0 ? i : !1),
        RE(this.flatCoordinates, 0, this.ends_, this.stride, e, n, i));
  }
  getCoordinates() {
    return fo(this.flatCoordinates, 0, this.ends_, this.stride);
  }
  getEnds() {
    return this.ends_;
  }
  getLineString(e) {
    return e < 0 || this.ends_.length <= e
      ? null
      : new ah(
          this.flatCoordinates.slice(
            e === 0 ? 0 : this.ends_[e - 1],
            this.ends_[e],
          ),
          this.layout,
        );
  }
  getLineStrings() {
    const e = this.flatCoordinates,
      n = this.ends_,
      i = this.layout,
      r = [];
    let s = 0;
    for (let o = 0, l = n.length; o < l; ++o) {
      const a = n[o],
        u = new ah(e.slice(s, a), i);
      r.push(u), (s = a);
    }
    return r;
  }
  getFlatMidpoints() {
    const e = [],
      n = this.flatCoordinates;
    let i = 0;
    const r = this.ends_,
      s = this.stride;
    for (let o = 0, l = r.length; o < l; ++o) {
      const a = r[o],
        u = aa(n, i, a, s, 0.5);
      on(e, u), (i = a);
    }
    return e;
  }
  getSimplifiedGeometryInternal(e) {
    const n = [],
      i = [];
    return (
      (n.length = Z0(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        e,
        n,
        0,
        i,
      )),
      new ya(n, "XY", i)
    );
  }
  getType() {
    return "MultiLineString";
  }
  intersectsExtent(e) {
    return wE(this.flatCoordinates, 0, this.ends_, this.stride, e);
  }
  setCoordinates(e, n) {
    this.setLayout(n, e, 2),
      this.flatCoordinates || (this.flatCoordinates = []);
    const i = Oo(this.flatCoordinates, 0, e, this.stride, this.ends_);
    (this.flatCoordinates.length = i.length === 0 ? 0 : i[i.length - 1]),
      this.changed();
  }
}
const zw = ya;
class Bd extends er {
  constructor(e, n) {
    super(),
      n && !Array.isArray(e[0])
        ? this.setFlatCoordinates(n, e)
        : this.setCoordinates(e, n);
  }
  appendPoint(e) {
    on(this.flatCoordinates, e.getFlatCoordinates()), this.changed();
  }
  clone() {
    const e = new Bd(this.flatCoordinates.slice(), this.layout);
    return e.applyProperties(this), e;
  }
  closestPointXY(e, n, i, r) {
    if (r < Qi(this.getExtent(), e, n)) return r;
    const s = this.flatCoordinates,
      o = this.stride;
    for (let l = 0, a = s.length; l < a; l += o) {
      const u = Bi(e, n, s[l], s[l + 1]);
      if (u < r) {
        r = u;
        for (let c = 0; c < o; ++c) i[c] = s[l + c];
        i.length = o;
      }
    }
    return r;
  }
  getCoordinates() {
    return Jn(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }
  getPoint(e) {
    const n = this.flatCoordinates.length / this.stride;
    return e < 0 || n <= e
      ? null
      : new On(
          this.flatCoordinates.slice(e * this.stride, (e + 1) * this.stride),
          this.layout,
        );
  }
  getPoints() {
    const e = this.flatCoordinates,
      n = this.layout,
      i = this.stride,
      r = [];
    for (let s = 0, o = e.length; s < o; s += i) {
      const l = new On(e.slice(s, s + i), n);
      r.push(l);
    }
    return r;
  }
  getType() {
    return "MultiPoint";
  }
  intersectsExtent(e) {
    const n = this.flatCoordinates,
      i = this.stride;
    for (let r = 0, s = n.length; r < s; r += i) {
      const o = n[r],
        l = n[r + 1];
      if (pd(e, o, l)) return !0;
    }
    return !1;
  }
  setCoordinates(e, n) {
    this.setLayout(n, e, 1),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = Ya(
        this.flatCoordinates,
        0,
        e,
        this.stride,
      )),
      this.changed();
  }
}
const k_ = Bd;
function P_(t, e, n, i) {
  const r = [];
  let s = Ft();
  for (let o = 0, l = n.length; o < l; ++o) {
    const a = n[o];
    (s = _d(t, e, a[0], i)),
      r.push((s[0] + s[2]) / 2, (s[1] + s[3]) / 2),
      (e = a[a.length - 1]);
  }
  return r;
}
class va extends er {
  constructor(e, n, i) {
    if (
      (super(),
      (this.endss_ = []),
      (this.flatInteriorPointsRevision_ = -1),
      (this.flatInteriorPoints_ = null),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      (this.orientedRevision_ = -1),
      (this.orientedFlatCoordinates_ = null),
      !i && !Array.isArray(e[0]))
    ) {
      const r = e,
        s = [],
        o = [];
      for (let l = 0, a = r.length; l < a; ++l) {
        const u = r[l],
          c = s.length,
          h = u.getEnds();
        for (let d = 0, f = h.length; d < f; ++d) h[d] += c;
        on(s, u.getFlatCoordinates()), o.push(h);
      }
      (n = r.length === 0 ? this.getLayout() : r[0].getLayout()),
        (e = s),
        (i = o);
    }
    n !== void 0 && i
      ? (this.setFlatCoordinates(n, e), (this.endss_ = i))
      : this.setCoordinates(e, n);
  }
  appendPolygon(e) {
    let n;
    if (!this.flatCoordinates)
      (this.flatCoordinates = e.getFlatCoordinates().slice()),
        (n = e.getEnds().slice()),
        this.endss_.push();
    else {
      const i = this.flatCoordinates.length;
      on(this.flatCoordinates, e.getFlatCoordinates()),
        (n = e.getEnds().slice());
      for (let r = 0, s = n.length; r < s; ++r) n[r] += i;
    }
    this.endss_.push(n), this.changed();
  }
  clone() {
    const e = this.endss_.length,
      n = new Array(e);
    for (let r = 0; r < e; ++r) n[r] = this.endss_[r].slice();
    const i = new va(this.flatCoordinates.slice(), this.layout, n);
    return i.applyProperties(this), i;
  }
  closestPointXY(e, n, i, r) {
    return r < Qi(this.getExtent(), e, n)
      ? r
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            gE(this.flatCoordinates, 0, this.endss_, this.stride, 0),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        mE(
          this.getOrientedFlatCoordinates(),
          0,
          this.endss_,
          this.stride,
          this.maxDelta_,
          !0,
          e,
          n,
          i,
          r,
        ));
  }
  containsXY(e, n) {
    return xE(
      this.getOrientedFlatCoordinates(),
      0,
      this.endss_,
      this.stride,
      e,
      n,
    );
  }
  getArea() {
    return vE(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride);
  }
  getCoordinates(e) {
    let n;
    return (
      e !== void 0
        ? ((n = this.getOrientedFlatCoordinates().slice()),
          oh(n, 0, this.endss_, this.stride, e))
        : (n = this.flatCoordinates),
      sh(n, 0, this.endss_, this.stride)
    );
  }
  getEndss() {
    return this.endss_;
  }
  getFlatInteriorPoints() {
    if (this.flatInteriorPointsRevision_ != this.getRevision()) {
      const e = P_(this.flatCoordinates, 0, this.endss_, this.stride);
      (this.flatInteriorPoints_ = q0(
        this.getOrientedFlatCoordinates(),
        0,
        this.endss_,
        this.stride,
        e,
      )),
        (this.flatInteriorPointsRevision_ = this.getRevision());
    }
    return this.flatInteriorPoints_;
  }
  getInteriorPoints() {
    return new k_(this.getFlatInteriorPoints().slice(), "XYM");
  }
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const e = this.flatCoordinates;
      t_(e, 0, this.endss_, this.stride)
        ? (this.orientedFlatCoordinates_ = e)
        : ((this.orientedFlatCoordinates_ = e.slice()),
          (this.orientedFlatCoordinates_.length = oh(
            this.orientedFlatCoordinates_,
            0,
            this.endss_,
            this.stride,
          ))),
        (this.orientedRevision_ = this.getRevision());
    }
    return this.orientedFlatCoordinates_;
  }
  getSimplifiedGeometryInternal(e) {
    const n = [],
      i = [];
    return (
      (n.length = yE(
        this.flatCoordinates,
        0,
        this.endss_,
        this.stride,
        Math.sqrt(e),
        n,
        0,
        i,
      )),
      new va(n, "XY", i)
    );
  }
  getPolygon(e) {
    if (e < 0 || this.endss_.length <= e) return null;
    let n;
    if (e === 0) n = 0;
    else {
      const s = this.endss_[e - 1];
      n = s[s.length - 1];
    }
    const i = this.endss_[e].slice(),
      r = i[i.length - 1];
    if (n !== 0) for (let s = 0, o = i.length; s < o; ++s) i[s] -= n;
    return new pi(this.flatCoordinates.slice(n, r), this.layout, i);
  }
  getPolygons() {
    const e = this.layout,
      n = this.flatCoordinates,
      i = this.endss_,
      r = [];
    let s = 0;
    for (let o = 0, l = i.length; o < l; ++o) {
      const a = i[o].slice(),
        u = a[a.length - 1];
      if (s !== 0) for (let h = 0, d = a.length; h < d; ++h) a[h] -= s;
      const c = new pi(n.slice(s, u), e, a);
      r.push(c), (s = u);
    }
    return r;
  }
  getType() {
    return "MultiPolygon";
  }
  intersectsExtent(e) {
    return CE(
      this.getOrientedFlatCoordinates(),
      0,
      this.endss_,
      this.stride,
      e,
    );
  }
  setCoordinates(e, n) {
    this.setLayout(n, e, 3),
      this.flatCoordinates || (this.flatCoordinates = []);
    const i = K0(this.flatCoordinates, 0, e, this.stride, this.endss_);
    if (i.length === 0) this.flatCoordinates.length = 0;
    else {
      const r = i[i.length - 1];
      this.flatCoordinates.length = r.length === 0 ? 0 : r[r.length - 1];
    }
    this.changed();
  }
}
const jw = va,
  sm = Kt();
class rt {
  constructor(e, n, i, r, s, o) {
    this.styleFunction,
      this.extent_,
      (this.id_ = o),
      (this.type_ = e),
      (this.flatCoordinates_ = n),
      (this.flatInteriorPoints_ = null),
      (this.flatMidpoints_ = null),
      (this.ends_ = i),
      (this.properties_ = s),
      this.squaredTolerance_,
      (this.stride_ = r),
      this.simplifiedGeometry_;
  }
  get(e) {
    return this.properties_[e];
  }
  getExtent() {
    return (
      this.extent_ ||
        (this.extent_ =
          this.type_ === "Point"
            ? F0(this.flatCoordinates_)
            : _d(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2)),
      this.extent_
    );
  }
  getFlatInteriorPoint() {
    if (!this.flatInteriorPoints_) {
      const e = mi(this.getExtent());
      this.flatInteriorPoints_ = Pd(
        this.flatCoordinates_,
        0,
        this.ends_,
        2,
        e,
        0,
      );
    }
    return this.flatInteriorPoints_;
  }
  getFlatInteriorPoints() {
    if (!this.flatInteriorPoints_) {
      const e = TE(this.flatCoordinates_, this.ends_),
        n = P_(this.flatCoordinates_, 0, e, 2);
      this.flatInteriorPoints_ = q0(this.flatCoordinates_, 0, e, 2, n);
    }
    return this.flatInteriorPoints_;
  }
  getFlatMidpoint() {
    return (
      this.flatMidpoints_ ||
        (this.flatMidpoints_ = aa(
          this.flatCoordinates_,
          0,
          this.flatCoordinates_.length,
          2,
          0.5,
        )),
      this.flatMidpoints_
    );
  }
  getFlatMidpoints() {
    if (!this.flatMidpoints_) {
      this.flatMidpoints_ = [];
      const e = this.flatCoordinates_;
      let n = 0;
      const i = this.ends_;
      for (let r = 0, s = i.length; r < s; ++r) {
        const o = i[r],
          l = aa(e, n, o, 2, 0.5);
        on(this.flatMidpoints_, l), (n = o);
      }
    }
    return this.flatMidpoints_;
  }
  getId() {
    return this.id_;
  }
  getOrientedFlatCoordinates() {
    return this.flatCoordinates_;
  }
  getGeometry() {
    return this;
  }
  getSimplifiedGeometry(e) {
    return this;
  }
  simplifyTransformed(e, n) {
    return this;
  }
  getProperties() {
    return this.properties_;
  }
  getPropertiesInternal() {
    return this.properties_;
  }
  getStride() {
    return this.stride_;
  }
  getStyleFunction() {
    return this.styleFunction;
  }
  getType() {
    return this.type_;
  }
  transform(e) {
    e = xe(e);
    const n = e.getExtent(),
      i = e.getWorldExtent();
    if (n && i) {
      const r = xt(i) / xt(n);
      Ln(sm, i[0], i[3], r, -r, 0, 0, 0),
        ci(
          this.flatCoordinates_,
          0,
          this.flatCoordinates_.length,
          2,
          sm,
          this.flatCoordinates_,
        );
    }
  }
  applyTransform(e) {
    e(this.flatCoordinates_, this.flatCoordinates_, this.stride_);
  }
  clone() {
    return new rt(
      this.type_,
      this.flatCoordinates_.slice(),
      this.ends_.slice(),
      this.stride_,
      Object.assign({}, this.properties_),
      this.id_,
    );
  }
  getEnds() {
    return this.ends_;
  }
  enableSimplifyTransformed() {
    return (
      (this.simplifyTransformed = I0((e, n) => {
        if (e === this.squaredTolerance_) return this.simplifiedGeometry_;
        (this.simplifiedGeometry_ = this.clone()),
          n && this.simplifiedGeometry_.applyTransform(n);
        const i = this.simplifiedGeometry_.getFlatCoordinates();
        let r;
        switch (this.type_) {
          case "LineString":
            (i.length = Va(
              i,
              0,
              this.simplifiedGeometry_.flatCoordinates_.length,
              this.simplifiedGeometry_.stride_,
              e,
              i,
              0,
            )),
              (r = [i.length]);
            break;
          case "MultiLineString":
            (r = []),
              (i.length = Z0(
                i,
                0,
                this.simplifiedGeometry_.ends_,
                this.simplifiedGeometry_.stride_,
                e,
                i,
                0,
                r,
              ));
            break;
          case "Polygon":
            (r = []),
              (i.length = Id(
                i,
                0,
                this.simplifiedGeometry_.ends_,
                this.simplifiedGeometry_.stride_,
                Math.sqrt(e),
                i,
                0,
                r,
              ));
            break;
        }
        return (
          r &&
            (this.simplifiedGeometry_ = new rt(
              this.type_,
              i,
              r,
              2,
              this.properties_,
              this.id_,
            )),
          (this.squaredTolerance_ = e),
          this.simplifiedGeometry_
        );
      })),
      this
    );
  }
}
rt.prototype.getFlatCoordinates = rt.prototype.getOrientedFlatCoordinates;
class L_ extends $t {
  constructor(e) {
    super(),
      (this.projection = xe(e.projection)),
      (this.attributions_ = om(e.attributions)),
      (this.attributionsCollapsible_ =
        e.attributionsCollapsible !== void 0 ? e.attributionsCollapsible : !0),
      (this.loading = !1),
      (this.state_ = e.state !== void 0 ? e.state : "ready"),
      (this.wrapX_ = e.wrapX !== void 0 ? e.wrapX : !1),
      (this.interpolate_ = !!e.interpolate),
      (this.viewResolver = null),
      (this.viewRejector = null);
    const n = this;
    this.viewPromise_ = new Promise(function (i, r) {
      (n.viewResolver = i), (n.viewRejector = r);
    });
  }
  getAttributions() {
    return this.attributions_;
  }
  getAttributionsCollapsible() {
    return this.attributionsCollapsible_;
  }
  getProjection() {
    return this.projection;
  }
  getResolutions(e) {
    return null;
  }
  getView() {
    return this.viewPromise_;
  }
  getState() {
    return this.state_;
  }
  getWrapX() {
    return this.wrapX_;
  }
  getInterpolate() {
    return this.interpolate_;
  }
  refresh() {
    this.changed();
  }
  setAttributions(e) {
    (this.attributions_ = om(e)), this.changed();
  }
  setState(e) {
    (this.state_ = e), this.changed();
  }
}
function om(t) {
  return t
    ? Array.isArray(t)
      ? function (e) {
          return t;
        }
      : typeof t == "function"
        ? t
        : function (e) {
            return [t];
          }
    : null;
}
const bt = {
  ADDFEATURE: "addfeature",
  CHANGEFEATURE: "changefeature",
  CLEAR: "clear",
  REMOVEFEATURE: "removefeature",
  FEATURESLOADSTART: "featuresloadstart",
  FEATURESLOADEND: "featuresloadend",
  FEATURESLOADERROR: "featuresloaderror",
};
function Gw(t, e) {
  return [[-1 / 0, -1 / 0, 1 / 0, 1 / 0]];
}
let bw = !1;
function Ww(t, e, n, i, r, s, o) {
  const l = new XMLHttpRequest();
  l.open("GET", typeof t == "function" ? t(n, i, r) : t, !0),
    e.getType() == "arraybuffer" && (l.responseType = "arraybuffer"),
    (l.withCredentials = bw),
    (l.onload = function (a) {
      if (!l.status || (l.status >= 200 && l.status < 300)) {
        const u = e.getType();
        let c;
        u == "json"
          ? (c = JSON.parse(l.responseText))
          : u == "text"
            ? (c = l.responseText)
            : u == "xml"
              ? ((c = l.responseXML),
                c ||
                  (c = new DOMParser().parseFromString(
                    l.responseText,
                    "application/xml",
                  )))
              : u == "arraybuffer" && (c = l.response),
          c
            ? s(
                e.readFeatures(c, { extent: n, featureProjection: r }),
                e.readProjection(c),
              )
            : o();
      } else o();
    }),
    (l.onerror = o),
    l.send();
}
function lm(t, e) {
  return function (n, i, r, s, o) {
    const l = this;
    Ww(
      t,
      e,
      n,
      i,
      r,
      function (a, u) {
        l.addFeatures(a), s !== void 0 && s(a);
      },
      o || Hr,
    );
  };
}
class Xn extends Nn {
  constructor(e, n, i) {
    super(e), (this.feature = n), (this.features = i);
  }
}
class Xw extends L_ {
  constructor(e) {
    (e = e || {}),
      super({
        attributions: e.attributions,
        interpolate: !0,
        projection: void 0,
        state: "ready",
        wrapX: e.wrapX !== void 0 ? e.wrapX : !0,
      }),
      this.on,
      this.once,
      this.un,
      (this.loader_ = Hr),
      (this.format_ = e.format),
      (this.overlaps_ = e.overlaps === void 0 ? !0 : e.overlaps),
      (this.url_ = e.url),
      e.loader !== void 0
        ? (this.loader_ = e.loader)
        : this.url_ !== void 0 &&
          (ee(this.format_, "`format` must be set when `url` is set"),
          (this.loader_ = lm(this.url_, this.format_))),
      (this.strategy_ = e.strategy !== void 0 ? e.strategy : Gw);
    const n = e.useSpatialIndex !== void 0 ? e.useSpatialIndex : !0;
    (this.featuresRtree_ = n ? new im() : null),
      (this.loadedExtentsRtree_ = new im()),
      (this.loadingExtentsCount_ = 0),
      (this.nullGeometryFeatures_ = {}),
      (this.idIndex_ = {}),
      (this.uidIndex_ = {}),
      (this.featureChangeKeys_ = {}),
      (this.featuresCollection_ = null);
    let i, r;
    Array.isArray(e.features)
      ? (r = e.features)
      : e.features && ((i = e.features), (r = i.getArray())),
      !n && i === void 0 && (i = new tn(r)),
      r !== void 0 && this.addFeaturesInternal(r),
      i !== void 0 && this.bindFeaturesCollection_(i);
  }
  addFeature(e) {
    this.addFeatureInternal(e), this.changed();
  }
  addFeatureInternal(e) {
    const n = ne(e);
    if (!this.addToIndex_(n, e)) {
      this.featuresCollection_ && this.featuresCollection_.remove(e);
      return;
    }
    this.setupChangeEvents_(n, e);
    const i = e.getGeometry();
    if (i) {
      const r = i.getExtent();
      this.featuresRtree_ && this.featuresRtree_.insert(r, e);
    } else this.nullGeometryFeatures_[n] = e;
    this.dispatchEvent(new Xn(bt.ADDFEATURE, e));
  }
  setupChangeEvents_(e, n) {
    n instanceof rt ||
      (this.featureChangeKeys_[e] = [
        Q(n, K.CHANGE, this.handleFeatureChange_, this),
        Q(n, $r.PROPERTYCHANGE, this.handleFeatureChange_, this),
      ]);
  }
  addToIndex_(e, n) {
    let i = !0;
    if (n.getId() !== void 0) {
      const r = String(n.getId());
      if (!(r in this.idIndex_)) this.idIndex_[r] = n;
      else if (n instanceof rt) {
        const s = this.idIndex_[r];
        s instanceof rt
          ? Array.isArray(s)
            ? s.push(n)
            : (this.idIndex_[r] = [s, n])
          : (i = !1);
      } else i = !1;
    }
    return (
      i &&
        (ee(
          !(e in this.uidIndex_),
          "The passed `feature` was already added to the source",
        ),
        (this.uidIndex_[e] = n)),
      i
    );
  }
  addFeatures(e) {
    this.addFeaturesInternal(e), this.changed();
  }
  addFeaturesInternal(e) {
    const n = [],
      i = [],
      r = [];
    for (let s = 0, o = e.length; s < o; s++) {
      const l = e[s],
        a = ne(l);
      this.addToIndex_(a, l) && i.push(l);
    }
    for (let s = 0, o = i.length; s < o; s++) {
      const l = i[s],
        a = ne(l);
      this.setupChangeEvents_(a, l);
      const u = l.getGeometry();
      if (u) {
        const c = u.getExtent();
        n.push(c), r.push(l);
      } else this.nullGeometryFeatures_[a] = l;
    }
    if (
      (this.featuresRtree_ && this.featuresRtree_.load(n, r),
      this.hasListener(bt.ADDFEATURE))
    )
      for (let s = 0, o = i.length; s < o; s++)
        this.dispatchEvent(new Xn(bt.ADDFEATURE, i[s]));
  }
  bindFeaturesCollection_(e) {
    let n = !1;
    this.addEventListener(bt.ADDFEATURE, function (i) {
      n || ((n = !0), e.push(i.feature), (n = !1));
    }),
      this.addEventListener(bt.REMOVEFEATURE, function (i) {
        n || ((n = !0), e.remove(i.feature), (n = !1));
      }),
      e.addEventListener(ot.ADD, (i) => {
        n || ((n = !0), this.addFeature(i.element), (n = !1));
      }),
      e.addEventListener(ot.REMOVE, (i) => {
        n || ((n = !0), this.removeFeature(i.element), (n = !1));
      }),
      (this.featuresCollection_ = e);
  }
  clear(e) {
    if (e) {
      for (const i in this.featureChangeKeys_)
        this.featureChangeKeys_[i].forEach(ce);
      this.featuresCollection_ ||
        ((this.featureChangeKeys_ = {}),
        (this.idIndex_ = {}),
        (this.uidIndex_ = {}));
    } else if (this.featuresRtree_) {
      const i = (r) => {
        this.removeFeatureInternal(r);
      };
      this.featuresRtree_.forEach(i);
      for (const r in this.nullGeometryFeatures_)
        this.removeFeatureInternal(this.nullGeometryFeatures_[r]);
    }
    this.featuresCollection_ && this.featuresCollection_.clear(),
      this.featuresRtree_ && this.featuresRtree_.clear(),
      (this.nullGeometryFeatures_ = {});
    const n = new Xn(bt.CLEAR);
    this.dispatchEvent(n), this.changed();
  }
  forEachFeature(e) {
    if (this.featuresRtree_) return this.featuresRtree_.forEach(e);
    this.featuresCollection_ && this.featuresCollection_.forEach(e);
  }
  forEachFeatureAtCoordinateDirect(e, n) {
    const i = [e[0], e[1], e[0], e[1]];
    return this.forEachFeatureInExtent(i, function (r) {
      const s = r.getGeometry();
      if (s instanceof rt || s.intersectsCoordinate(e)) return n(r);
    });
  }
  forEachFeatureInExtent(e, n) {
    if (this.featuresRtree_) return this.featuresRtree_.forEachInExtent(e, n);
    this.featuresCollection_ && this.featuresCollection_.forEach(n);
  }
  forEachFeatureIntersectingExtent(e, n) {
    return this.forEachFeatureInExtent(e, function (i) {
      const r = i.getGeometry();
      if (r instanceof rt || r.intersectsExtent(e)) {
        const s = n(i);
        if (s) return s;
      }
    });
  }
  getFeaturesCollection() {
    return this.featuresCollection_;
  }
  getFeatures() {
    let e;
    return (
      this.featuresCollection_
        ? (e = this.featuresCollection_.getArray().slice(0))
        : this.featuresRtree_ &&
          ((e = this.featuresRtree_.getAll()),
          $i(this.nullGeometryFeatures_) ||
            on(e, Object.values(this.nullGeometryFeatures_))),
      e
    );
  }
  getFeaturesAtCoordinate(e) {
    const n = [];
    return (
      this.forEachFeatureAtCoordinateDirect(e, function (i) {
        n.push(i);
      }),
      n
    );
  }
  getFeaturesInExtent(e, n) {
    if (this.featuresRtree_) {
      if (!(n && n.canWrapX() && this.getWrapX()))
        return this.featuresRtree_.getInExtent(e);
      const r = Wv(e, n);
      return [].concat(...r.map((s) => this.featuresRtree_.getInExtent(s)));
    }
    return this.featuresCollection_
      ? this.featuresCollection_.getArray().slice(0)
      : [];
  }
  getClosestFeatureToCoordinate(e, n) {
    const i = e[0],
      r = e[1];
    let s = null;
    const o = [NaN, NaN];
    let l = 1 / 0;
    const a = [-1 / 0, -1 / 0, 1 / 0, 1 / 0];
    return (
      (n = n || uo),
      this.featuresRtree_.forEachInExtent(a, function (u) {
        if (n(u)) {
          const c = u.getGeometry(),
            h = l;
          if (
            ((l = c instanceof rt ? 0 : c.closestPointXY(i, r, o, l)), l < h)
          ) {
            s = u;
            const d = Math.sqrt(l);
            (a[0] = i - d), (a[1] = r - d), (a[2] = i + d), (a[3] = r + d);
          }
        }
      }),
      s
    );
  }
  getExtent(e) {
    return this.featuresRtree_.getExtent(e);
  }
  getFeatureById(e) {
    const n = this.idIndex_[e.toString()];
    return n !== void 0 ? n : null;
  }
  getFeatureByUid(e) {
    const n = this.uidIndex_[e];
    return n !== void 0 ? n : null;
  }
  getFormat() {
    return this.format_;
  }
  getOverlaps() {
    return this.overlaps_;
  }
  getUrl() {
    return this.url_;
  }
  handleFeatureChange_(e) {
    const n = e.target,
      i = ne(n),
      r = n.getGeometry();
    if (!r)
      i in this.nullGeometryFeatures_ ||
        (this.featuresRtree_ && this.featuresRtree_.remove(n),
        (this.nullGeometryFeatures_[i] = n));
    else {
      const o = r.getExtent();
      i in this.nullGeometryFeatures_
        ? (delete this.nullGeometryFeatures_[i],
          this.featuresRtree_ && this.featuresRtree_.insert(o, n))
        : this.featuresRtree_ && this.featuresRtree_.update(o, n);
    }
    const s = n.getId();
    if (s !== void 0) {
      const o = s.toString();
      this.idIndex_[o] !== n &&
        (this.removeFromIdIndex_(n), (this.idIndex_[o] = n));
    } else this.removeFromIdIndex_(n), (this.uidIndex_[i] = n);
    this.changed(), this.dispatchEvent(new Xn(bt.CHANGEFEATURE, n));
  }
  hasFeature(e) {
    const n = e.getId();
    return n !== void 0 ? n in this.idIndex_ : ne(e) in this.uidIndex_;
  }
  isEmpty() {
    return this.featuresRtree_
      ? this.featuresRtree_.isEmpty() && $i(this.nullGeometryFeatures_)
      : this.featuresCollection_
        ? this.featuresCollection_.getLength() === 0
        : !0;
  }
  loadFeatures(e, n, i) {
    const r = this.loadedExtentsRtree_,
      s = this.strategy_(e, n, i);
    for (let o = 0, l = s.length; o < l; ++o) {
      const a = s[o];
      r.forEachInExtent(a, function (c) {
        return Di(c.extent, a);
      }) ||
        (++this.loadingExtentsCount_,
        this.dispatchEvent(new Xn(bt.FEATURESLOADSTART)),
        this.loader_.call(
          this,
          a,
          n,
          i,
          (c) => {
            --this.loadingExtentsCount_,
              this.dispatchEvent(new Xn(bt.FEATURESLOADEND, void 0, c));
          },
          () => {
            --this.loadingExtentsCount_,
              this.dispatchEvent(new Xn(bt.FEATURESLOADERROR));
          },
        ),
        r.insert(a, { extent: a.slice() }));
    }
    this.loading = this.loader_.length < 4 ? !1 : this.loadingExtentsCount_ > 0;
  }
  refresh() {
    this.clear(!0), this.loadedExtentsRtree_.clear(), super.refresh();
  }
  removeLoadedExtent(e) {
    const n = this.loadedExtentsRtree_;
    let i;
    n.forEachInExtent(e, function (r) {
      if (co(r.extent, e)) return (i = r), !0;
    }),
      i && n.remove(i);
  }
  removeFeature(e) {
    if (!e) return;
    const n = ne(e);
    n in this.nullGeometryFeatures_
      ? delete this.nullGeometryFeatures_[n]
      : this.featuresRtree_ && this.featuresRtree_.remove(e),
      this.removeFeatureInternal(e) && this.changed();
  }
  removeFeatureInternal(e) {
    const n = ne(e),
      i = this.featureChangeKeys_[n];
    if (!i) return;
    i.forEach(ce), delete this.featureChangeKeys_[n];
    const r = e.getId();
    return (
      r !== void 0 && delete this.idIndex_[r.toString()],
      delete this.uidIndex_[n],
      this.dispatchEvent(new Xn(bt.REMOVEFEATURE, e)),
      e
    );
  }
  removeFromIdIndex_(e) {
    let n = !1;
    for (const i in this.idIndex_) {
      const r = this.idIndex_[i];
      if (e instanceof rt && Array.isArray(r) && r.includes(e))
        r.splice(r.indexOf(e), 1);
      else if (this.idIndex_[i] === e) {
        delete this.idIndex_[i], (n = !0);
        break;
      }
    }
    return n;
  }
  setLoader(e) {
    this.loader_ = e;
  }
  setUrl(e) {
    ee(this.format_, "`format` must be set when `url` is set"),
      (this.url_ = e),
      this.setLoader(lm(e, this.format_));
  }
}
const Si = Xw,
  b = { IDLE: 0, LOADING: 1, LOADED: 2, ERROR: 3, EMPTY: 4 };
class M_ extends Ga {
  constructor(e, n, i) {
    super(),
      (i = i || {}),
      (this.tileCoord = e),
      (this.state = n),
      (this.interimTile = null),
      (this.key = ""),
      (this.transition_ = i.transition === void 0 ? 250 : i.transition),
      (this.transitionStarts_ = {}),
      (this.interpolate = !!i.interpolate);
  }
  changed() {
    this.dispatchEvent(K.CHANGE);
  }
  release() {
    this.state === b.ERROR && this.setState(b.EMPTY);
  }
  getKey() {
    return this.key + "/" + this.tileCoord;
  }
  getInterimTile() {
    let e = this.interimTile;
    if (!e) return this;
    do {
      if (e.getState() == b.LOADED) return (this.transition_ = 0), e;
      e = e.interimTile;
    } while (e);
    return this;
  }
  refreshInterimChain() {
    let e = this.interimTile;
    if (!e) return;
    let n = this;
    do {
      if (e.getState() == b.LOADED) {
        e.interimTile = null;
        break;
      }
      e.getState() == b.LOADING
        ? (n = e)
        : e.getState() == b.IDLE
          ? (n.interimTile = e.interimTile)
          : (n = e),
        (e = n.interimTile);
    } while (e);
  }
  getTileCoord() {
    return this.tileCoord;
  }
  getState() {
    return this.state;
  }
  setState(e) {
    if (this.state !== b.ERROR && this.state > e)
      throw new Error("Tile load sequence violation");
    (this.state = e), this.changed();
  }
  load() {
    W();
  }
  getAlpha(e, n) {
    if (!this.transition_) return 1;
    let i = this.transitionStarts_[e];
    if (!i) (i = n), (this.transitionStarts_[e] = i);
    else if (i === -1) return 1;
    const r = n - i + 1e3 / 60;
    return r >= this.transition_ ? 1 : d_(r / this.transition_);
  }
  inTransition(e) {
    return this.transition_ ? this.transitionStarts_[e] !== -1 : !1;
  }
  endTransition(e) {
    this.transition_ && (this.transitionStarts_[e] = -1);
  }
}
class O_ extends M_ {
  constructor(e, n, i, r, s, o) {
    super(e, n, o),
      (this.crossOrigin_ = r),
      (this.src_ = i),
      (this.key = i),
      (this.image_ = new Image()),
      r !== null && (this.image_.crossOrigin = r),
      (this.unlisten_ = null),
      (this.tileLoadFunction_ = s);
  }
  getImage() {
    return this.image_;
  }
  setImage(e) {
    (this.image_ = e),
      (this.state = b.LOADED),
      this.unlistenImage_(),
      this.changed();
  }
  handleImageError_() {
    (this.state = b.ERROR),
      this.unlistenImage_(),
      (this.image_ = Bw()),
      this.changed();
  }
  handleImageLoad_() {
    const e = this.image_;
    e.naturalWidth && e.naturalHeight
      ? (this.state = b.LOADED)
      : (this.state = b.EMPTY),
      this.unlistenImage_(),
      this.changed();
  }
  load() {
    this.state == b.ERROR &&
      ((this.state = b.IDLE),
      (this.image_ = new Image()),
      this.crossOrigin_ !== null &&
        (this.image_.crossOrigin = this.crossOrigin_)),
      this.state == b.IDLE &&
        ((this.state = b.LOADING),
        this.changed(),
        this.tileLoadFunction_(this, this.src_),
        (this.unlisten_ = gx(
          this.image_,
          this.handleImageLoad_.bind(this),
          this.handleImageError_.bind(this),
        )));
  }
  unlistenImage_() {
    this.unlisten_ && (this.unlisten_(), (this.unlisten_ = null));
  }
}
function Bw() {
  const t = Qe(1, 1);
  return (t.fillStyle = "rgba(0,0,0,0)"), t.fillRect(0, 0, 1, 1), t.canvas;
}
class Uw {
  constructor(e, n, i) {
    (this.decay_ = e),
      (this.minVelocity_ = n),
      (this.delay_ = i),
      (this.points_ = []),
      (this.angle_ = 0),
      (this.initialVelocity_ = 0);
  }
  begin() {
    (this.points_.length = 0), (this.angle_ = 0), (this.initialVelocity_ = 0);
  }
  update(e, n) {
    this.points_.push(e, n, Date.now());
  }
  end() {
    if (this.points_.length < 6) return !1;
    const e = Date.now() - this.delay_,
      n = this.points_.length - 3;
    if (this.points_[n + 2] < e) return !1;
    let i = n - 3;
    for (; i > 0 && this.points_[i + 2] > e; ) i -= 3;
    const r = this.points_[n + 2] - this.points_[i + 2];
    if (r < 1e3 / 60) return !1;
    const s = this.points_[n] - this.points_[i],
      o = this.points_[n + 1] - this.points_[i + 1];
    return (
      (this.angle_ = Math.atan2(o, s)),
      (this.initialVelocity_ = Math.sqrt(s * s + o * o) / r),
      this.initialVelocity_ > this.minVelocity_
    );
  }
  getDistance() {
    return (this.minVelocity_ - this.initialVelocity_) / this.decay_;
  }
  getAngle() {
    return this.angle_;
  }
}
class Yw extends hd {
  constructor(e) {
    super(), (this.map_ = e);
  }
  dispatchRenderEvent(e, n) {
    W();
  }
  calculateMatrices2D(e) {
    const n = e.viewState,
      i = e.coordinateToPixelTransform,
      r = e.pixelToCoordinateTransform;
    Ln(
      i,
      e.size[0] / 2,
      e.size[1] / 2,
      1 / n.resolution,
      -1 / n.resolution,
      -n.rotation,
      -n.center[0],
      -n.center[1],
    ),
      gd(r, i);
  }
  forEachFeatureAtCoordinate(e, n, i, r, s, o, l, a) {
    let u;
    const c = n.viewState;
    function h(E, x, w, S) {
      return s.call(o, x, E ? w : null, S);
    }
    const d = c.projection,
      f = b0(e.slice(), d),
      p = [[0, 0]];
    if (d.canWrapX() && r) {
      const E = d.getExtent(),
        x = ae(E);
      p.push([-x, 0], [x, 0]);
    }
    const _ = n.layerStatesArray,
      v = _.length,
      g = [],
      m = [];
    for (let E = 0; E < p.length; E++)
      for (let x = v - 1; x >= 0; --x) {
        const w = _[x],
          S = w.layer;
        if (S.hasRenderer() && bd(w, c) && l.call(a, S)) {
          const T = S.getRenderer(),
            A = S.getSource();
          if (T && A) {
            const M = A.getWrapX() ? f : e,
              X = h.bind(null, w.managed);
            (m[0] = M[0] + p[E][0]),
              (m[1] = M[1] + p[E][1]),
              (u = T.forEachFeatureAtCoordinate(m, n, i, X, g));
          }
          if (u) return u;
        }
      }
    if (g.length === 0) return;
    const y = 1 / g.length;
    return (
      g.forEach((E, x) => (E.distanceSq += x * y)),
      g.sort((E, x) => E.distanceSq - x.distanceSq),
      g.some((E) => (u = E.callback(E.feature, E.layer, E.geometry))),
      u
    );
  }
  hasFeatureAtCoordinate(e, n, i, r, s, o) {
    return (
      this.forEachFeatureAtCoordinate(e, n, i, r, uo, this, s, o) !== void 0
    );
  }
  getMap() {
    return this.map_;
  }
  renderFrame(e) {
    W();
  }
  flushDeclutterItems(e) {}
  scheduleExpireIconCache(e) {
    ga.canExpireCache() && e.postRenderFunctions.push(Vw);
  }
}
function Vw(t, e) {
  ga.expire();
}
class Kw extends Yw {
  constructor(e) {
    super(e),
      (this.fontChangeListenerKey_ = Q(
        _n,
        $r.PROPERTYCHANGE,
        e.redrawText.bind(e),
      )),
      (this.element_ = document.createElement("div"));
    const n = this.element_.style;
    (n.position = "absolute"),
      (n.width = "100%"),
      (n.height = "100%"),
      (n.zIndex = "0"),
      (this.element_.className = qa + " ol-layers");
    const i = e.getViewport();
    i.insertBefore(this.element_, i.firstChild || null),
      (this.children_ = []),
      (this.renderedVisible_ = !0),
      (this.declutterLayers_ = []);
  }
  dispatchRenderEvent(e, n) {
    const i = this.getMap();
    if (i.hasListener(e)) {
      const r = new S_(e, void 0, n);
      i.dispatchEvent(r);
    }
  }
  disposeInternal() {
    ce(this.fontChangeListenerKey_),
      this.element_.parentNode.removeChild(this.element_),
      super.disposeInternal();
  }
  renderFrame(e) {
    if (!e) {
      this.renderedVisible_ &&
        ((this.element_.style.display = "none"), (this.renderedVisible_ = !1));
      return;
    }
    this.calculateMatrices2D(e), this.dispatchRenderEvent(ln.PRECOMPOSE, e);
    const n = e.layerStatesArray.sort(function (o, l) {
        return o.zIndex - l.zIndex;
      }),
      i = e.viewState;
    this.children_.length = 0;
    const r = this.declutterLayers_;
    r.length = 0;
    let s = null;
    for (let o = 0, l = n.length; o < l; ++o) {
      const a = n[o];
      e.layerIndex = o;
      const u = a.layer,
        c = u.getSourceState();
      if (!bd(a, i) || (c != "ready" && c != "undefined")) {
        u.unrender();
        continue;
      }
      const h = u.render(e, s);
      h &&
        (h !== s && (this.children_.push(h), (s = h)),
        "getDeclutter" in u && r.push(u));
    }
    this.flushDeclutterItems(e),
      zE(this.element_, this.children_),
      this.dispatchRenderEvent(ln.POSTCOMPOSE, e),
      this.renderedVisible_ ||
        ((this.element_.style.display = ""), (this.renderedVisible_ = !0)),
      this.scheduleExpireIconCache(e);
  }
  flushDeclutterItems(e) {
    const n = this.declutterLayers_;
    for (let i = n.length - 1; i >= 0; --i) n[i].renderDeclutter(e);
    n.length = 0;
  }
}
class Zn extends Nn {
  constructor(e, n) {
    super(e), (this.layer = n);
  }
}
const Vu = { LAYERS: "layers" };
class as extends h_ {
  constructor(e) {
    e = e || {};
    const n = Object.assign({}, e);
    delete n.layers;
    let i = e.layers;
    super(n),
      this.on,
      this.once,
      this.un,
      (this.layersListenerKeys_ = []),
      (this.listenerKeys_ = {}),
      this.addChangeListener(Vu.LAYERS, this.handleLayersChanged_),
      i
        ? Array.isArray(i)
          ? (i = new tn(i.slice(), { unique: !0 }))
          : ee(
              typeof i.getArray == "function",
              "Expected `layers` to be an array or a `Collection`",
            )
        : (i = new tn(void 0, { unique: !0 })),
      this.setLayers(i);
  }
  handleLayerChange_() {
    this.changed();
  }
  handleLayersChanged_() {
    this.layersListenerKeys_.forEach(ce), (this.layersListenerKeys_.length = 0);
    const e = this.getLayers();
    this.layersListenerKeys_.push(
      Q(e, ot.ADD, this.handleLayersAdd_, this),
      Q(e, ot.REMOVE, this.handleLayersRemove_, this),
    );
    for (const i in this.listenerKeys_) this.listenerKeys_[i].forEach(ce);
    ko(this.listenerKeys_);
    const n = e.getArray();
    for (let i = 0, r = n.length; i < r; i++) {
      const s = n[i];
      this.registerLayerListeners_(s),
        this.dispatchEvent(new Zn("addlayer", s));
    }
    this.changed();
  }
  registerLayerListeners_(e) {
    const n = [
      Q(e, $r.PROPERTYCHANGE, this.handleLayerChange_, this),
      Q(e, K.CHANGE, this.handleLayerChange_, this),
    ];
    e instanceof as &&
      n.push(
        Q(e, "addlayer", this.handleLayerGroupAdd_, this),
        Q(e, "removelayer", this.handleLayerGroupRemove_, this),
      ),
      (this.listenerKeys_[ne(e)] = n);
  }
  handleLayerGroupAdd_(e) {
    this.dispatchEvent(new Zn("addlayer", e.layer));
  }
  handleLayerGroupRemove_(e) {
    this.dispatchEvent(new Zn("removelayer", e.layer));
  }
  handleLayersAdd_(e) {
    const n = e.element;
    this.registerLayerListeners_(n),
      this.dispatchEvent(new Zn("addlayer", n)),
      this.changed();
  }
  handleLayersRemove_(e) {
    const n = e.element,
      i = ne(n);
    this.listenerKeys_[i].forEach(ce),
      delete this.listenerKeys_[i],
      this.dispatchEvent(new Zn("removelayer", n)),
      this.changed();
  }
  getLayers() {
    return this.get(Vu.LAYERS);
  }
  setLayers(e) {
    const n = this.getLayers();
    if (n) {
      const i = n.getArray();
      for (let r = 0, s = i.length; r < s; ++r)
        this.dispatchEvent(new Zn("removelayer", i[r]));
    }
    this.set(Vu.LAYERS, e);
  }
  getLayersArray(e) {
    return (
      (e = e !== void 0 ? e : []),
      this.getLayers().forEach(function (n) {
        n.getLayersArray(e);
      }),
      e
    );
  }
  getLayerStatesArray(e) {
    const n = e !== void 0 ? e : [],
      i = n.length;
    this.getLayers().forEach(function (o) {
      o.getLayerStatesArray(n);
    });
    const r = this.getLayerState();
    let s = r.zIndex;
    !e && r.zIndex === void 0 && (s = 0);
    for (let o = i, l = n.length; o < l; o++) {
      const a = n[o];
      (a.opacity *= r.opacity),
        (a.visible = a.visible && r.visible),
        (a.maxResolution = Math.min(a.maxResolution, r.maxResolution)),
        (a.minResolution = Math.max(a.minResolution, r.minResolution)),
        (a.minZoom = Math.max(a.minZoom, r.minZoom)),
        (a.maxZoom = Math.min(a.maxZoom, r.maxZoom)),
        r.extent !== void 0 &&
          (a.extent !== void 0
            ? (a.extent = Ys(a.extent, r.extent))
            : (a.extent = r.extent)),
        a.zIndex === void 0 && (a.zIndex = s);
    }
    return n;
  }
  getSourceState() {
    return "ready";
  }
}
class yr extends Nn {
  constructor(e, n, i) {
    super(e), (this.map = n), (this.frameState = i !== void 0 ? i : null);
  }
}
class Un extends yr {
  constructor(e, n, i, r, s, o) {
    super(e, n, s),
      (this.originalEvent = i),
      (this.pixel_ = null),
      (this.coordinate_ = null),
      (this.dragging = r !== void 0 ? r : !1),
      (this.activePointers = o);
  }
  get pixel() {
    return (
      this.pixel_ || (this.pixel_ = this.map.getEventPixel(this.originalEvent)),
      this.pixel_
    );
  }
  set pixel(e) {
    this.pixel_ = e;
  }
  get coordinate() {
    return (
      this.coordinate_ ||
        (this.coordinate_ = this.map.getCoordinateFromPixel(this.pixel)),
      this.coordinate_
    );
  }
  set coordinate(e) {
    this.coordinate_ = e;
  }
  preventDefault() {
    super.preventDefault(),
      "preventDefault" in this.originalEvent &&
        this.originalEvent.preventDefault();
  }
  stopPropagation() {
    super.stopPropagation(),
      "stopPropagation" in this.originalEvent &&
        this.originalEvent.stopPropagation();
  }
}
const ve = {
    SINGLECLICK: "singleclick",
    CLICK: K.CLICK,
    DBLCLICK: K.DBLCLICK,
    POINTERDRAG: "pointerdrag",
    POINTERMOVE: "pointermove",
    POINTERDOWN: "pointerdown",
    POINTERUP: "pointerup",
    POINTEROVER: "pointerover",
    POINTEROUT: "pointerout",
    POINTERENTER: "pointerenter",
    POINTERLEAVE: "pointerleave",
    POINTERCANCEL: "pointercancel",
  },
  fh = {
    POINTERMOVE: "pointermove",
    POINTERDOWN: "pointerdown",
    POINTERUP: "pointerup",
    POINTEROVER: "pointerover",
    POINTEROUT: "pointerout",
    POINTERENTER: "pointerenter",
    POINTERLEAVE: "pointerleave",
    POINTERCANCEL: "pointercancel",
  };
class Zw extends Ga {
  constructor(e, n) {
    super(e),
      (this.map_ = e),
      this.clickTimeoutId_,
      (this.emulateClicks_ = !1),
      (this.dragging_ = !1),
      (this.dragListenerKeys_ = []),
      (this.moveTolerance_ = n === void 0 ? 1 : n),
      (this.down_ = null);
    const i = this.map_.getViewport();
    (this.activePointers_ = []),
      (this.trackedTouches_ = {}),
      (this.element_ = i),
      (this.pointerdownListenerKey_ = Q(
        i,
        fh.POINTERDOWN,
        this.handlePointerDown_,
        this,
      )),
      this.originalPointerMoveEvent_,
      (this.relayedListenerKey_ = Q(
        i,
        fh.POINTERMOVE,
        this.relayMoveEvent_,
        this,
      )),
      (this.boundHandleTouchMove_ = this.handleTouchMove_.bind(this)),
      this.element_.addEventListener(
        K.TOUCHMOVE,
        this.boundHandleTouchMove_,
        M0 ? { passive: !1 } : !1,
      );
  }
  emulateClick_(e) {
    let n = new Un(ve.CLICK, this.map_, e);
    this.dispatchEvent(n),
      this.clickTimeoutId_ !== void 0
        ? (clearTimeout(this.clickTimeoutId_),
          (this.clickTimeoutId_ = void 0),
          (n = new Un(ve.DBLCLICK, this.map_, e)),
          this.dispatchEvent(n))
        : (this.clickTimeoutId_ = setTimeout(() => {
            this.clickTimeoutId_ = void 0;
            const i = new Un(ve.SINGLECLICK, this.map_, e);
            this.dispatchEvent(i);
          }, 250));
  }
  updateActivePointers_(e) {
    const n = e,
      i = n.pointerId;
    if (n.type == ve.POINTERUP || n.type == ve.POINTERCANCEL) {
      delete this.trackedTouches_[i];
      for (const r in this.trackedTouches_)
        if (this.trackedTouches_[r].target !== n.target) {
          delete this.trackedTouches_[r];
          break;
        }
    } else
      (n.type == ve.POINTERDOWN || n.type == ve.POINTERMOVE) &&
        (this.trackedTouches_[i] = n);
    this.activePointers_ = Object.values(this.trackedTouches_);
  }
  handlePointerUp_(e) {
    this.updateActivePointers_(e);
    const n = new Un(
      ve.POINTERUP,
      this.map_,
      e,
      void 0,
      void 0,
      this.activePointers_,
    );
    this.dispatchEvent(n),
      this.emulateClicks_ &&
        !n.defaultPrevented &&
        !this.dragging_ &&
        this.isMouseActionButton_(e) &&
        this.emulateClick_(this.down_),
      this.activePointers_.length === 0 &&
        (this.dragListenerKeys_.forEach(ce),
        (this.dragListenerKeys_.length = 0),
        (this.dragging_ = !1),
        (this.down_ = null));
  }
  isMouseActionButton_(e) {
    return e.button === 0;
  }
  handlePointerDown_(e) {
    (this.emulateClicks_ = this.activePointers_.length === 0),
      this.updateActivePointers_(e);
    const n = new Un(
      ve.POINTERDOWN,
      this.map_,
      e,
      void 0,
      void 0,
      this.activePointers_,
    );
    if (
      (this.dispatchEvent(n),
      (this.down_ = new PointerEvent(e.type, e)),
      Object.defineProperty(this.down_, "target", {
        writable: !1,
        value: e.target,
      }),
      this.dragListenerKeys_.length === 0)
    ) {
      const i = this.map_.getOwnerDocument();
      this.dragListenerKeys_.push(
        Q(i, ve.POINTERMOVE, this.handlePointerMove_, this),
        Q(i, ve.POINTERUP, this.handlePointerUp_, this),
        Q(this.element_, ve.POINTERCANCEL, this.handlePointerUp_, this),
      ),
        this.element_.getRootNode &&
          this.element_.getRootNode() !== i &&
          this.dragListenerKeys_.push(
            Q(
              this.element_.getRootNode(),
              ve.POINTERUP,
              this.handlePointerUp_,
              this,
            ),
          );
    }
  }
  handlePointerMove_(e) {
    if (this.isMoving_(e)) {
      this.updateActivePointers_(e), (this.dragging_ = !0);
      const n = new Un(
        ve.POINTERDRAG,
        this.map_,
        e,
        this.dragging_,
        void 0,
        this.activePointers_,
      );
      this.dispatchEvent(n);
    }
  }
  relayMoveEvent_(e) {
    this.originalPointerMoveEvent_ = e;
    const n = !!(this.down_ && this.isMoving_(e));
    this.dispatchEvent(new Un(ve.POINTERMOVE, this.map_, e, n));
  }
  handleTouchMove_(e) {
    const n = this.originalPointerMoveEvent_;
    (!n || n.defaultPrevented) &&
      (typeof e.cancelable != "boolean" || e.cancelable === !0) &&
      e.preventDefault();
  }
  isMoving_(e) {
    return (
      this.dragging_ ||
      Math.abs(e.clientX - this.down_.clientX) > this.moveTolerance_ ||
      Math.abs(e.clientY - this.down_.clientY) > this.moveTolerance_
    );
  }
  disposeInternal() {
    this.relayedListenerKey_ &&
      (ce(this.relayedListenerKey_), (this.relayedListenerKey_ = null)),
      this.element_.removeEventListener(
        K.TOUCHMOVE,
        this.boundHandleTouchMove_,
      ),
      this.pointerdownListenerKey_ &&
        (ce(this.pointerdownListenerKey_),
        (this.pointerdownListenerKey_ = null)),
      this.dragListenerKeys_.forEach(ce),
      (this.dragListenerKeys_.length = 0),
      (this.element_ = null),
      super.disposeInternal();
  }
}
const vn = {
    POSTRENDER: "postrender",
    MOVESTART: "movestart",
    MOVEEND: "moveend",
    LOADSTART: "loadstart",
    LOADEND: "loadend",
  },
  Xe = {
    LAYERGROUP: "layergroup",
    SIZE: "size",
    TARGET: "target",
    VIEW: "view",
  },
  Ea = 1 / 0;
class $w {
  constructor(e, n) {
    (this.priorityFunction_ = e),
      (this.keyFunction_ = n),
      (this.elements_ = []),
      (this.priorities_ = []),
      (this.queuedElements_ = {});
  }
  clear() {
    (this.elements_.length = 0),
      (this.priorities_.length = 0),
      ko(this.queuedElements_);
  }
  dequeue() {
    const e = this.elements_,
      n = this.priorities_,
      i = e[0];
    e.length == 1
      ? ((e.length = 0), (n.length = 0))
      : ((e[0] = e.pop()), (n[0] = n.pop()), this.siftUp_(0));
    const r = this.keyFunction_(i);
    return delete this.queuedElements_[r], i;
  }
  enqueue(e) {
    ee(
      !(this.keyFunction_(e) in this.queuedElements_),
      "Tried to enqueue an `element` that was already added to the queue",
    );
    const n = this.priorityFunction_(e);
    return n != Ea
      ? (this.elements_.push(e),
        this.priorities_.push(n),
        (this.queuedElements_[this.keyFunction_(e)] = !0),
        this.siftDown_(0, this.elements_.length - 1),
        !0)
      : !1;
  }
  getCount() {
    return this.elements_.length;
  }
  getLeftChildIndex_(e) {
    return e * 2 + 1;
  }
  getRightChildIndex_(e) {
    return e * 2 + 2;
  }
  getParentIndex_(e) {
    return (e - 1) >> 1;
  }
  heapify_() {
    let e;
    for (e = (this.elements_.length >> 1) - 1; e >= 0; e--) this.siftUp_(e);
  }
  isEmpty() {
    return this.elements_.length === 0;
  }
  isKeyQueued(e) {
    return e in this.queuedElements_;
  }
  isQueued(e) {
    return this.isKeyQueued(this.keyFunction_(e));
  }
  siftUp_(e) {
    const n = this.elements_,
      i = this.priorities_,
      r = n.length,
      s = n[e],
      o = i[e],
      l = e;
    for (; e < r >> 1; ) {
      const a = this.getLeftChildIndex_(e),
        u = this.getRightChildIndex_(e),
        c = u < r && i[u] < i[a] ? u : a;
      (n[e] = n[c]), (i[e] = i[c]), (e = c);
    }
    (n[e] = s), (i[e] = o), this.siftDown_(l, e);
  }
  siftDown_(e, n) {
    const i = this.elements_,
      r = this.priorities_,
      s = i[n],
      o = r[n];
    for (; n > e; ) {
      const l = this.getParentIndex_(n);
      if (r[l] > o) (i[n] = i[l]), (r[n] = r[l]), (n = l);
      else break;
    }
    (i[n] = s), (r[n] = o);
  }
  reprioritize() {
    const e = this.priorityFunction_,
      n = this.elements_,
      i = this.priorities_;
    let r = 0;
    const s = n.length;
    let o, l, a;
    for (l = 0; l < s; ++l)
      (o = n[l]),
        (a = e(o)),
        a == Ea
          ? delete this.queuedElements_[this.keyFunction_(o)]
          : ((i[r] = a), (n[r++] = o));
    (n.length = r), (i.length = r), this.heapify_();
  }
}
class Hw extends $w {
  constructor(e, n) {
    super(
      function (i) {
        return e.apply(null, i);
      },
      function (i) {
        return i[0].getKey();
      },
    ),
      (this.boundHandleTileChange_ = this.handleTileChange.bind(this)),
      (this.tileChangeCallback_ = n),
      (this.tilesLoading_ = 0),
      (this.tilesLoadingKeys_ = {});
  }
  enqueue(e) {
    const n = super.enqueue(e);
    return n && e[0].addEventListener(K.CHANGE, this.boundHandleTileChange_), n;
  }
  getTilesLoading() {
    return this.tilesLoading_;
  }
  handleTileChange(e) {
    const n = e.target,
      i = n.getState();
    if (i === b.LOADED || i === b.ERROR || i === b.EMPTY) {
      i !== b.ERROR &&
        n.removeEventListener(K.CHANGE, this.boundHandleTileChange_);
      const r = n.getKey();
      r in this.tilesLoadingKeys_ &&
        (delete this.tilesLoadingKeys_[r], --this.tilesLoading_),
        this.tileChangeCallback_();
    }
  }
  loadMoreTiles(e, n) {
    let i = 0,
      r,
      s,
      o;
    for (; this.tilesLoading_ < e && i < n && this.getCount() > 0; )
      (s = this.dequeue()[0]),
        (o = s.getKey()),
        (r = s.getState()),
        r === b.IDLE &&
          !(o in this.tilesLoadingKeys_) &&
          ((this.tilesLoadingKeys_[o] = !0),
          ++this.tilesLoading_,
          ++i,
          s.load());
  }
}
function qw(t, e, n, i, r) {
  if (!t || !(n in t.wantedTiles) || !t.wantedTiles[n][e.getKey()]) return Ea;
  const s = t.viewState.center,
    o = i[0] - s[0],
    l = i[1] - s[1];
  return 65536 * Math.log(r) + Math.sqrt(o * o + l * l) / r;
}
class Ud extends $t {
  constructor(e) {
    super();
    const n = e.element;
    n &&
      !e.target &&
      !n.style.pointerEvents &&
      (n.style.pointerEvents = "auto"),
      (this.element = n || null),
      (this.target_ = null),
      (this.map_ = null),
      (this.listenerKeys = []),
      e.render && (this.render = e.render),
      e.target && this.setTarget(e.target);
  }
  disposeInternal() {
    ha(this.element), super.disposeInternal();
  }
  getMap() {
    return this.map_;
  }
  setMap(e) {
    this.map_ && ha(this.element);
    for (let n = 0, i = this.listenerKeys.length; n < i; ++n)
      ce(this.listenerKeys[n]);
    (this.listenerKeys.length = 0),
      (this.map_ = e),
      e &&
        ((this.target_
          ? this.target_
          : e.getOverlayContainerStopEvent()
        ).appendChild(this.element),
        this.render !== Hr &&
          this.listenerKeys.push(Q(e, vn.POSTRENDER, this.render, this)),
        e.render());
  }
  render(e) {}
  setTarget(e) {
    this.target_ = typeof e == "string" ? document.getElementById(e) : e;
  }
}
class Qw extends Ud {
  constructor(e) {
    (e = e || {}),
      super({
        element: document.createElement("div"),
        render: e.render,
        target: e.target,
      }),
      (this.ulElement_ = document.createElement("ul")),
      (this.collapsed_ = e.collapsed !== void 0 ? e.collapsed : !0),
      (this.userCollapsed_ = this.collapsed_),
      (this.overrideCollapsible_ = e.collapsible !== void 0),
      (this.collapsible_ = e.collapsible !== void 0 ? e.collapsible : !0),
      this.collapsible_ || (this.collapsed_ = !1);
    const n = e.className !== void 0 ? e.className : "ol-attribution",
      i = e.tipLabel !== void 0 ? e.tipLabel : "Attributions",
      r = e.expandClassName !== void 0 ? e.expandClassName : n + "-expand",
      s = e.collapseLabel !== void 0 ? e.collapseLabel : "›",
      o =
        e.collapseClassName !== void 0 ? e.collapseClassName : n + "-collapse";
    typeof s == "string"
      ? ((this.collapseLabel_ = document.createElement("span")),
        (this.collapseLabel_.textContent = s),
        (this.collapseLabel_.className = o))
      : (this.collapseLabel_ = s);
    const l = e.label !== void 0 ? e.label : "i";
    typeof l == "string"
      ? ((this.label_ = document.createElement("span")),
        (this.label_.textContent = l),
        (this.label_.className = r))
      : (this.label_ = l);
    const a =
      this.collapsible_ && !this.collapsed_ ? this.collapseLabel_ : this.label_;
    (this.toggleButton_ = document.createElement("button")),
      this.toggleButton_.setAttribute("type", "button"),
      this.toggleButton_.setAttribute(
        "aria-expanded",
        String(!this.collapsed_),
      ),
      (this.toggleButton_.title = i),
      this.toggleButton_.appendChild(a),
      this.toggleButton_.addEventListener(
        K.CLICK,
        this.handleClick_.bind(this),
        !1,
      );
    const u =
        n +
        " " +
        qa +
        " " +
        Fd +
        (this.collapsed_ && this.collapsible_ ? " " + Fg : "") +
        (this.collapsible_ ? "" : " ol-uncollapsible"),
      c = this.element;
    (c.className = u),
      c.appendChild(this.toggleButton_),
      c.appendChild(this.ulElement_),
      (this.renderedAttributions_ = []),
      (this.renderedVisible_ = !0);
  }
  collectSourceAttributions_(e) {
    const n = Array.from(
        new Set(
          this.getMap()
            .getAllLayers()
            .flatMap((r) => r.getAttributions(e)),
        ),
      ),
      i = !this.getMap()
        .getAllLayers()
        .some(
          (r) =>
            r.getSource() && r.getSource().getAttributionsCollapsible() === !1,
        );
    return this.overrideCollapsible_ || this.setCollapsible(i), n;
  }
  updateElement_(e) {
    if (!e) {
      this.renderedVisible_ &&
        ((this.element.style.display = "none"), (this.renderedVisible_ = !1));
      return;
    }
    const n = this.collectSourceAttributions_(e),
      i = n.length > 0;
    if (
      (this.renderedVisible_ != i &&
        ((this.element.style.display = i ? "" : "none"),
        (this.renderedVisible_ = i)),
      !xi(n, this.renderedAttributions_))
    ) {
      l_(this.ulElement_);
      for (let r = 0, s = n.length; r < s; ++r) {
        const o = document.createElement("li");
        (o.innerHTML = n[r]), this.ulElement_.appendChild(o);
      }
      this.renderedAttributions_ = n;
    }
  }
  handleClick_(e) {
    e.preventDefault(),
      this.handleToggle_(),
      (this.userCollapsed_ = this.collapsed_);
  }
  handleToggle_() {
    this.element.classList.toggle(Fg),
      this.collapsed_
        ? Ag(this.collapseLabel_, this.label_)
        : Ag(this.label_, this.collapseLabel_),
      (this.collapsed_ = !this.collapsed_),
      this.toggleButton_.setAttribute(
        "aria-expanded",
        String(!this.collapsed_),
      );
  }
  getCollapsible() {
    return this.collapsible_;
  }
  setCollapsible(e) {
    this.collapsible_ !== e &&
      ((this.collapsible_ = e),
      this.element.classList.toggle("ol-uncollapsible"),
      this.userCollapsed_ && this.handleToggle_());
  }
  setCollapsed(e) {
    (this.userCollapsed_ = e),
      !(!this.collapsible_ || this.collapsed_ === e) && this.handleToggle_();
  }
  getCollapsed() {
    return this.collapsed_;
  }
  render(e) {
    this.updateElement_(e.frameState);
  }
}
const Jw = Qw;
class eC extends Ud {
  constructor(e) {
    (e = e || {}),
      super({
        element: document.createElement("div"),
        render: e.render,
        target: e.target,
      });
    const n = e.className !== void 0 ? e.className : "ol-rotate",
      i = e.label !== void 0 ? e.label : "⇧",
      r = e.compassClassName !== void 0 ? e.compassClassName : "ol-compass";
    (this.label_ = null),
      typeof i == "string"
        ? ((this.label_ = document.createElement("span")),
          (this.label_.className = r),
          (this.label_.textContent = i))
        : ((this.label_ = i), this.label_.classList.add(r));
    const s = e.tipLabel ? e.tipLabel : "Reset rotation",
      o = document.createElement("button");
    (o.className = n + "-reset"),
      o.setAttribute("type", "button"),
      (o.title = s),
      o.appendChild(this.label_),
      o.addEventListener(K.CLICK, this.handleClick_.bind(this), !1);
    const l = n + " " + qa + " " + Fd,
      a = this.element;
    (a.className = l),
      a.appendChild(o),
      (this.callResetNorth_ = e.resetNorth ? e.resetNorth : void 0),
      (this.duration_ = e.duration !== void 0 ? e.duration : 250),
      (this.autoHide_ = e.autoHide !== void 0 ? e.autoHide : !0),
      (this.rotation_ = void 0),
      this.autoHide_ && this.element.classList.add(fl);
  }
  handleClick_(e) {
    e.preventDefault(),
      this.callResetNorth_ !== void 0
        ? this.callResetNorth_()
        : this.resetNorth_();
  }
  resetNorth_() {
    const n = this.getMap().getView();
    if (!n) return;
    const i = n.getRotation();
    i !== void 0 &&
      (this.duration_ > 0 && i % (2 * Math.PI) !== 0
        ? n.animate({ rotation: 0, duration: this.duration_, easing: ss })
        : n.setRotation(0));
  }
  render(e) {
    const n = e.frameState;
    if (!n) return;
    const i = n.viewState.rotation;
    if (i != this.rotation_) {
      const r = "rotate(" + i + "rad)";
      if (this.autoHide_) {
        const s = this.element.classList.contains(fl);
        !s && i === 0
          ? this.element.classList.add(fl)
          : s && i !== 0 && this.element.classList.remove(fl);
      }
      this.label_.style.transform = r;
    }
    this.rotation_ = i;
  }
}
const tC = eC;
class nC extends Ud {
  constructor(e) {
    (e = e || {}),
      super({ element: document.createElement("div"), target: e.target });
    const n = e.className !== void 0 ? e.className : "ol-zoom",
      i = e.delta !== void 0 ? e.delta : 1,
      r = e.zoomInClassName !== void 0 ? e.zoomInClassName : n + "-in",
      s = e.zoomOutClassName !== void 0 ? e.zoomOutClassName : n + "-out",
      o = e.zoomInLabel !== void 0 ? e.zoomInLabel : "+",
      l = e.zoomOutLabel !== void 0 ? e.zoomOutLabel : "–",
      a = e.zoomInTipLabel !== void 0 ? e.zoomInTipLabel : "Zoom in",
      u = e.zoomOutTipLabel !== void 0 ? e.zoomOutTipLabel : "Zoom out",
      c = document.createElement("button");
    (c.className = r),
      c.setAttribute("type", "button"),
      (c.title = a),
      c.appendChild(typeof o == "string" ? document.createTextNode(o) : o),
      c.addEventListener(K.CLICK, this.handleClick_.bind(this, i), !1);
    const h = document.createElement("button");
    (h.className = s),
      h.setAttribute("type", "button"),
      (h.title = u),
      h.appendChild(typeof l == "string" ? document.createTextNode(l) : l),
      h.addEventListener(K.CLICK, this.handleClick_.bind(this, -i), !1);
    const d = n + " " + qa + " " + Fd,
      f = this.element;
    (f.className = d),
      f.appendChild(c),
      f.appendChild(h),
      (this.duration_ = e.duration !== void 0 ? e.duration : 250);
  }
  handleClick_(e, n) {
    n.preventDefault(), this.zoomByDelta_(e);
  }
  zoomByDelta_(e) {
    const i = this.getMap().getView();
    if (!i) return;
    const r = i.getZoom();
    if (r !== void 0) {
      const s = i.getConstrainedZoom(r + e);
      this.duration_ > 0
        ? (i.getAnimating() && i.cancelAnimations(),
          i.animate({ zoom: s, duration: this.duration_, easing: ss }))
        : i.setZoom(s);
    }
  }
}
const iC = nC;
function rC(t) {
  t = t || {};
  const e = new tn();
  return (
    (t.zoom !== void 0 ? t.zoom : !0) && e.push(new iC(t.zoomOptions)),
    (t.rotate !== void 0 ? t.rotate : !0) && e.push(new tC(t.rotateOptions)),
    (t.attribution !== void 0 ? t.attribution : !0) &&
      e.push(new Jw(t.attributionOptions)),
    e
  );
}
const am = { ACTIVE: "active" };
class Do extends $t {
  constructor(e) {
    super(),
      this.on,
      this.once,
      this.un,
      e && e.handleEvent && (this.handleEvent = e.handleEvent),
      (this.map_ = null),
      this.setActive(!0);
  }
  getActive() {
    return this.get(am.ACTIVE);
  }
  getMap() {
    return this.map_;
  }
  handleEvent(e) {
    return !0;
  }
  setActive(e) {
    this.set(am.ACTIVE, e);
  }
  setMap(e) {
    this.map_ = e;
  }
}
function sC(t, e, n) {
  const i = t.getCenterInternal();
  if (i) {
    const r = [i[0] + e[0], i[1] + e[1]];
    t.animateInternal({
      duration: n !== void 0 ? n : 250,
      easing: tx,
      center: t.getConstrainedCenter(r),
    });
  }
}
function Yd(t, e, n, i) {
  const r = t.getZoom();
  if (r === void 0) return;
  const s = t.getConstrainedZoom(r + e),
    o = t.getResolutionForZoom(s);
  t.getAnimating() && t.cancelAnimations(),
    t.animate({
      resolution: o,
      anchor: n,
      duration: i !== void 0 ? i : 250,
      easing: ss,
    });
}
class oC extends Do {
  constructor(e) {
    super(),
      (e = e || {}),
      (this.delta_ = e.delta ? e.delta : 1),
      (this.duration_ = e.duration !== void 0 ? e.duration : 250);
  }
  handleEvent(e) {
    let n = !1;
    if (e.type == ve.DBLCLICK) {
      const i = e.originalEvent,
        r = e.map,
        s = e.coordinate,
        o = i.shiftKey ? -this.delta_ : this.delta_,
        l = r.getView();
      Yd(l, o, s, this.duration_), i.preventDefault(), (n = !0);
    }
    return !n;
  }
}
const lC = oC;
class zo extends Do {
  constructor(e) {
    (e = e || {}),
      super(e),
      e.handleDownEvent && (this.handleDownEvent = e.handleDownEvent),
      e.handleDragEvent && (this.handleDragEvent = e.handleDragEvent),
      e.handleMoveEvent && (this.handleMoveEvent = e.handleMoveEvent),
      e.handleUpEvent && (this.handleUpEvent = e.handleUpEvent),
      e.stopDown && (this.stopDown = e.stopDown),
      (this.handlingDownUpSequence = !1),
      (this.targetPointers = []);
  }
  getPointerCount() {
    return this.targetPointers.length;
  }
  handleDownEvent(e) {
    return !1;
  }
  handleDragEvent(e) {}
  handleEvent(e) {
    if (!e.originalEvent) return !0;
    let n = !1;
    if ((this.updateTrackedPointers_(e), this.handlingDownUpSequence)) {
      if (e.type == ve.POINTERDRAG)
        this.handleDragEvent(e), e.originalEvent.preventDefault();
      else if (e.type == ve.POINTERUP) {
        const i = this.handleUpEvent(e);
        this.handlingDownUpSequence = i && this.targetPointers.length > 0;
      }
    } else if (e.type == ve.POINTERDOWN) {
      const i = this.handleDownEvent(e);
      (this.handlingDownUpSequence = i), (n = this.stopDown(i));
    } else e.type == ve.POINTERMOVE && this.handleMoveEvent(e);
    return !n;
  }
  handleMoveEvent(e) {}
  handleUpEvent(e) {
    return !1;
  }
  stopDown(e) {
    return e;
  }
  updateTrackedPointers_(e) {
    e.activePointers && (this.targetPointers = e.activePointers);
  }
}
function Vd(t) {
  const e = t.length;
  let n = 0,
    i = 0;
  for (let r = 0; r < e; r++) (n += t[r].clientX), (i += t[r].clientY);
  return { clientX: n / e, clientY: i / e };
}
function gh(t) {
  const e = arguments;
  return function (n) {
    let i = !0;
    for (let r = 0, s = e.length; r < s && ((i = i && e[r](n)), !!i); ++r);
    return i;
  };
}
const aC = function (t) {
    const e = t.originalEvent;
    return e.altKey && !(e.metaKey || e.ctrlKey) && e.shiftKey;
  },
  uC = function (t) {
    const e = t.map.getTargetElement(),
      n = t.map.getOwnerDocument().activeElement;
    return e.contains(n);
  },
  A_ = function (t) {
    return t.map.getTargetElement().hasAttribute("tabindex") ? uC(t) : !0;
  },
  cC = uo,
  F_ = function (t) {
    const e = t.originalEvent;
    return e.button == 0 && !(Lv && k0 && e.ctrlKey);
  },
  N_ = function (t) {
    const e = t.originalEvent;
    return !e.altKey && !(e.metaKey || e.ctrlKey) && !e.shiftKey;
  },
  hC = function (t) {
    const e = t.originalEvent;
    return k0 ? e.metaKey : e.ctrlKey;
  },
  dC = function (t) {
    const e = t.originalEvent;
    return !e.altKey && !(e.metaKey || e.ctrlKey) && e.shiftKey;
  },
  D_ = function (t) {
    const e = t.originalEvent,
      n = e.target.tagName;
    return (
      n !== "INPUT" &&
      n !== "SELECT" &&
      n !== "TEXTAREA" &&
      !e.target.isContentEditable
    );
  },
  Ku = function (t) {
    const e = t.originalEvent;
    return (
      ee(e !== void 0, "mapBrowserEvent must originate from a pointer event"),
      e.pointerType == "mouse"
    );
  },
  fC = function (t) {
    const e = t.originalEvent;
    return (
      ee(e !== void 0, "mapBrowserEvent must originate from a pointer event"),
      e.isPrimary && e.button === 0
    );
  };
class gC extends zo {
  constructor(e) {
    super({ stopDown: ja }),
      (e = e || {}),
      (this.kinetic_ = e.kinetic),
      (this.lastCentroid = null),
      this.lastPointersCount_,
      (this.panning_ = !1);
    const n = e.condition ? e.condition : gh(N_, fC);
    (this.condition_ = e.onFocusOnly ? gh(A_, n) : n), (this.noKinetic_ = !1);
  }
  handleDragEvent(e) {
    const n = e.map;
    this.panning_ || ((this.panning_ = !0), n.getView().beginInteraction());
    const i = this.targetPointers,
      r = n.getEventPixel(Vd(i));
    if (i.length == this.lastPointersCount_) {
      if (
        (this.kinetic_ && this.kinetic_.update(r[0], r[1]), this.lastCentroid)
      ) {
        const s = [this.lastCentroid[0] - r[0], r[1] - this.lastCentroid[1]],
          l = e.map.getView();
        eE(s, l.getResolution()),
          vd(s, l.getRotation()),
          l.adjustCenterInternal(s);
      }
    } else this.kinetic_ && this.kinetic_.begin();
    (this.lastCentroid = r),
      (this.lastPointersCount_ = i.length),
      e.originalEvent.preventDefault();
  }
  handleUpEvent(e) {
    const n = e.map,
      i = n.getView();
    if (this.targetPointers.length === 0) {
      if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
        const r = this.kinetic_.getDistance(),
          s = this.kinetic_.getAngle(),
          o = i.getCenterInternal(),
          l = n.getPixelFromCoordinateInternal(o),
          a = n.getCoordinateFromPixelInternal([
            l[0] - r * Math.cos(s),
            l[1] - r * Math.sin(s),
          ]);
        i.animateInternal({
          center: i.getConstrainedCenter(a),
          duration: 500,
          easing: ss,
        });
      }
      return this.panning_ && ((this.panning_ = !1), i.endInteraction()), !1;
    }
    return (
      this.kinetic_ && this.kinetic_.begin(), (this.lastCentroid = null), !0
    );
  }
  handleDownEvent(e) {
    if (this.targetPointers.length > 0 && this.condition_(e)) {
      const i = e.map.getView();
      return (
        (this.lastCentroid = null),
        i.getAnimating() && i.cancelAnimations(),
        this.kinetic_ && this.kinetic_.begin(),
        (this.noKinetic_ = this.targetPointers.length > 1),
        !0
      );
    }
    return !1;
  }
}
const mC = gC;
class pC extends zo {
  constructor(e) {
    (e = e || {}),
      super({ stopDown: ja }),
      (this.condition_ = e.condition ? e.condition : aC),
      (this.lastAngle_ = void 0),
      (this.duration_ = e.duration !== void 0 ? e.duration : 250);
  }
  handleDragEvent(e) {
    if (!Ku(e)) return;
    const n = e.map,
      i = n.getView();
    if (i.getConstraints().rotation === Gd) return;
    const r = n.getSize(),
      s = e.pixel,
      o = Math.atan2(r[1] / 2 - s[1], s[0] - r[0] / 2);
    if (this.lastAngle_ !== void 0) {
      const l = o - this.lastAngle_;
      i.adjustRotationInternal(-l);
    }
    this.lastAngle_ = o;
  }
  handleUpEvent(e) {
    return Ku(e) ? (e.map.getView().endInteraction(this.duration_), !1) : !0;
  }
  handleDownEvent(e) {
    return Ku(e) && F_(e) && this.condition_(e)
      ? (e.map.getView().beginInteraction(), (this.lastAngle_ = void 0), !0)
      : !1;
  }
}
class _C extends hd {
  constructor(e) {
    super(),
      (this.geometry_ = null),
      (this.element_ = document.createElement("div")),
      (this.element_.style.position = "absolute"),
      (this.element_.style.pointerEvents = "auto"),
      (this.element_.className = "ol-box " + e),
      (this.map_ = null),
      (this.startPixel_ = null),
      (this.endPixel_ = null);
  }
  disposeInternal() {
    this.setMap(null);
  }
  render_() {
    const e = this.startPixel_,
      n = this.endPixel_,
      i = "px",
      r = this.element_.style;
    (r.left = Math.min(e[0], n[0]) + i),
      (r.top = Math.min(e[1], n[1]) + i),
      (r.width = Math.abs(n[0] - e[0]) + i),
      (r.height = Math.abs(n[1] - e[1]) + i);
  }
  setMap(e) {
    if (this.map_) {
      this.map_.getOverlayContainer().removeChild(this.element_);
      const n = this.element_.style;
      (n.left = "inherit"),
        (n.top = "inherit"),
        (n.width = "inherit"),
        (n.height = "inherit");
    }
    (this.map_ = e),
      this.map_ && this.map_.getOverlayContainer().appendChild(this.element_);
  }
  setPixels(e, n) {
    (this.startPixel_ = e),
      (this.endPixel_ = n),
      this.createOrUpdateGeometry(),
      this.render_();
  }
  createOrUpdateGeometry() {
    const e = this.startPixel_,
      n = this.endPixel_,
      r = [e, [e[0], n[1]], n, [n[0], e[1]]].map(
        this.map_.getCoordinateFromPixelInternal,
        this.map_,
      );
    (r[4] = r[0].slice()),
      this.geometry_
        ? this.geometry_.setCoordinates([r])
        : (this.geometry_ = new pi([r]));
  }
  getGeometry() {
    return this.geometry_;
  }
}
const yl = {
  BOXSTART: "boxstart",
  BOXDRAG: "boxdrag",
  BOXEND: "boxend",
  BOXCANCEL: "boxcancel",
};
class Zu extends Nn {
  constructor(e, n, i) {
    super(e), (this.coordinate = n), (this.mapBrowserEvent = i);
  }
}
class yC extends zo {
  constructor(e) {
    super(),
      this.on,
      this.once,
      this.un,
      (e = e || {}),
      (this.box_ = new _C(e.className || "ol-dragbox")),
      (this.minArea_ = e.minArea !== void 0 ? e.minArea : 64),
      e.onBoxEnd && (this.onBoxEnd = e.onBoxEnd),
      (this.startPixel_ = null),
      (this.condition_ = e.condition ? e.condition : F_),
      (this.boxEndCondition_ = e.boxEndCondition
        ? e.boxEndCondition
        : this.defaultBoxEndCondition);
  }
  defaultBoxEndCondition(e, n, i) {
    const r = i[0] - n[0],
      s = i[1] - n[1];
    return r * r + s * s >= this.minArea_;
  }
  getGeometry() {
    return this.box_.getGeometry();
  }
  handleDragEvent(e) {
    this.box_.setPixels(this.startPixel_, e.pixel),
      this.dispatchEvent(new Zu(yl.BOXDRAG, e.coordinate, e));
  }
  handleUpEvent(e) {
    this.box_.setMap(null);
    const n = this.boxEndCondition_(e, this.startPixel_, e.pixel);
    return (
      n && this.onBoxEnd(e),
      this.dispatchEvent(new Zu(n ? yl.BOXEND : yl.BOXCANCEL, e.coordinate, e)),
      !1
    );
  }
  handleDownEvent(e) {
    return this.condition_(e)
      ? ((this.startPixel_ = e.pixel),
        this.box_.setMap(e.map),
        this.box_.setPixels(this.startPixel_, this.startPixel_),
        this.dispatchEvent(new Zu(yl.BOXSTART, e.coordinate, e)),
        !0)
      : !1;
  }
  onBoxEnd(e) {}
}
class vC extends yC {
  constructor(e) {
    e = e || {};
    const n = e.condition ? e.condition : dC;
    super({
      condition: n,
      className: e.className || "ol-dragzoom",
      minArea: e.minArea,
    }),
      (this.duration_ = e.duration !== void 0 ? e.duration : 200),
      (this.out_ = e.out !== void 0 ? e.out : !1);
  }
  onBoxEnd(e) {
    const i = this.getMap().getView();
    let r = this.getGeometry();
    if (this.out_) {
      const s = i.rotatedExtentForGeometry(r),
        o = i.getResolutionForExtentInternal(s),
        l = i.getResolution() / o;
      (r = r.clone()), r.scale(l * l);
    }
    i.fitInternal(r, { duration: this.duration_, easing: ss });
  }
}
const EC = vC,
  ki = {
    LEFT: "ArrowLeft",
    UP: "ArrowUp",
    RIGHT: "ArrowRight",
    DOWN: "ArrowDown",
  };
class xC extends Do {
  constructor(e) {
    super(),
      (e = e || {}),
      (this.defaultCondition_ = function (n) {
        return N_(n) && D_(n);
      }),
      (this.condition_ =
        e.condition !== void 0 ? e.condition : this.defaultCondition_),
      (this.duration_ = e.duration !== void 0 ? e.duration : 100),
      (this.pixelDelta_ = e.pixelDelta !== void 0 ? e.pixelDelta : 128);
  }
  handleEvent(e) {
    let n = !1;
    if (e.type == K.KEYDOWN) {
      const i = e.originalEvent,
        r = i.key;
      if (
        this.condition_(e) &&
        (r == ki.DOWN || r == ki.LEFT || r == ki.RIGHT || r == ki.UP)
      ) {
        const o = e.map.getView(),
          l = o.getResolution() * this.pixelDelta_;
        let a = 0,
          u = 0;
        r == ki.DOWN
          ? (u = -l)
          : r == ki.LEFT
            ? (a = -l)
            : r == ki.RIGHT
              ? (a = l)
              : (u = l);
        const c = [a, u];
        vd(c, o.getRotation()),
          sC(o, c, this.duration_),
          i.preventDefault(),
          (n = !0);
      }
    }
    return !n;
  }
}
class wC extends Do {
  constructor(e) {
    super(),
      (e = e || {}),
      (this.condition_ = e.condition
        ? e.condition
        : function (n) {
            return !hC(n) && D_(n);
          }),
      (this.delta_ = e.delta ? e.delta : 1),
      (this.duration_ = e.duration !== void 0 ? e.duration : 100);
  }
  handleEvent(e) {
    let n = !1;
    if (e.type == K.KEYDOWN || e.type == K.KEYPRESS) {
      const i = e.originalEvent,
        r = i.key;
      if (this.condition_(e) && (r === "+" || r === "-")) {
        const s = e.map,
          o = r === "+" ? this.delta_ : -this.delta_,
          l = s.getView();
        Yd(l, o, void 0, this.duration_), i.preventDefault(), (n = !0);
      }
    }
    return !n;
  }
}
const CC = wC;
class SC extends Do {
  constructor(e) {
    (e = e || {}),
      super(e),
      (this.totalDelta_ = 0),
      (this.lastDelta_ = 0),
      (this.maxDelta_ = e.maxDelta !== void 0 ? e.maxDelta : 1),
      (this.duration_ = e.duration !== void 0 ? e.duration : 250),
      (this.timeout_ = e.timeout !== void 0 ? e.timeout : 80),
      (this.useAnchor_ = e.useAnchor !== void 0 ? e.useAnchor : !0),
      (this.constrainResolution_ =
        e.constrainResolution !== void 0 ? e.constrainResolution : !1);
    const n = e.condition ? e.condition : cC;
    (this.condition_ = e.onFocusOnly ? gh(A_, n) : n),
      (this.lastAnchor_ = null),
      (this.startTime_ = void 0),
      this.timeoutId_,
      (this.mode_ = void 0),
      (this.trackpadEventGap_ = 400),
      this.trackpadTimeoutId_,
      (this.deltaPerZoom_ = 300);
  }
  endInteraction_() {
    this.trackpadTimeoutId_ = void 0;
    const e = this.getMap();
    if (!e) return;
    e.getView().endInteraction(
      void 0,
      this.lastDelta_ ? (this.lastDelta_ > 0 ? 1 : -1) : 0,
      this.lastAnchor_,
    );
  }
  handleEvent(e) {
    if (!this.condition_(e) || e.type !== K.WHEEL) return !0;
    const i = e.map,
      r = e.originalEvent;
    r.preventDefault(), this.useAnchor_ && (this.lastAnchor_ = e.coordinate);
    let s;
    if (
      (e.type == K.WHEEL &&
        ((s = r.deltaY),
        kv && r.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (s /= P0),
        r.deltaMode === WheelEvent.DOM_DELTA_LINE && (s *= 40)),
      s === 0)
    )
      return !1;
    this.lastDelta_ = s;
    const o = Date.now();
    this.startTime_ === void 0 && (this.startTime_ = o),
      (!this.mode_ || o - this.startTime_ > this.trackpadEventGap_) &&
        (this.mode_ = Math.abs(s) < 4 ? "trackpad" : "wheel");
    const l = i.getView();
    if (
      this.mode_ === "trackpad" &&
      !(l.getConstrainResolution() || this.constrainResolution_)
    )
      return (
        this.trackpadTimeoutId_
          ? clearTimeout(this.trackpadTimeoutId_)
          : (l.getAnimating() && l.cancelAnimations(), l.beginInteraction()),
        (this.trackpadTimeoutId_ = setTimeout(
          this.endInteraction_.bind(this),
          this.timeout_,
        )),
        l.adjustZoom(-s / this.deltaPerZoom_, this.lastAnchor_),
        (this.startTime_ = o),
        !1
      );
    this.totalDelta_ += s;
    const a = Math.max(this.timeout_ - (o - this.startTime_), 0);
    return (
      clearTimeout(this.timeoutId_),
      (this.timeoutId_ = setTimeout(this.handleWheelZoom_.bind(this, i), a)),
      !1
    );
  }
  handleWheelZoom_(e) {
    const n = e.getView();
    n.getAnimating() && n.cancelAnimations();
    let i =
      -Re(
        this.totalDelta_,
        -this.maxDelta_ * this.deltaPerZoom_,
        this.maxDelta_ * this.deltaPerZoom_,
      ) / this.deltaPerZoom_;
    (n.getConstrainResolution() || this.constrainResolution_) &&
      (i = i ? (i > 0 ? 1 : -1) : 0),
      Yd(n, i, this.lastAnchor_, this.duration_),
      (this.mode_ = void 0),
      (this.totalDelta_ = 0),
      (this.lastAnchor_ = null),
      (this.startTime_ = void 0),
      (this.timeoutId_ = void 0);
  }
  setMouseAnchor(e) {
    (this.useAnchor_ = e), e || (this.lastAnchor_ = null);
  }
}
const TC = SC;
class RC extends zo {
  constructor(e) {
    e = e || {};
    const n = e;
    n.stopDown || (n.stopDown = ja),
      super(n),
      (this.anchor_ = null),
      (this.lastAngle_ = void 0),
      (this.rotating_ = !1),
      (this.rotationDelta_ = 0),
      (this.threshold_ = e.threshold !== void 0 ? e.threshold : 0.3),
      (this.duration_ = e.duration !== void 0 ? e.duration : 250);
  }
  handleDragEvent(e) {
    let n = 0;
    const i = this.targetPointers[0],
      r = this.targetPointers[1],
      s = Math.atan2(r.clientY - i.clientY, r.clientX - i.clientX);
    if (this.lastAngle_ !== void 0) {
      const a = s - this.lastAngle_;
      (this.rotationDelta_ += a),
        !this.rotating_ &&
          Math.abs(this.rotationDelta_) > this.threshold_ &&
          (this.rotating_ = !0),
        (n = a);
    }
    this.lastAngle_ = s;
    const o = e.map,
      l = o.getView();
    l.getConstraints().rotation !== Gd &&
      ((this.anchor_ = o.getCoordinateFromPixelInternal(
        o.getEventPixel(Vd(this.targetPointers)),
      )),
      this.rotating_ &&
        (o.render(), l.adjustRotationInternal(n, this.anchor_)));
  }
  handleUpEvent(e) {
    return this.targetPointers.length < 2
      ? (e.map.getView().endInteraction(this.duration_), !1)
      : !0;
  }
  handleDownEvent(e) {
    if (this.targetPointers.length >= 2) {
      const n = e.map;
      return (
        (this.anchor_ = null),
        (this.lastAngle_ = void 0),
        (this.rotating_ = !1),
        (this.rotationDelta_ = 0),
        this.handlingDownUpSequence || n.getView().beginInteraction(),
        !0
      );
    }
    return !1;
  }
}
class IC extends zo {
  constructor(e) {
    e = e || {};
    const n = e;
    n.stopDown || (n.stopDown = ja),
      super(n),
      (this.anchor_ = null),
      (this.duration_ = e.duration !== void 0 ? e.duration : 400),
      (this.lastDistance_ = void 0),
      (this.lastScaleDelta_ = 1);
  }
  handleDragEvent(e) {
    let n = 1;
    const i = this.targetPointers[0],
      r = this.targetPointers[1],
      s = i.clientX - r.clientX,
      o = i.clientY - r.clientY,
      l = Math.sqrt(s * s + o * o);
    this.lastDistance_ !== void 0 && (n = this.lastDistance_ / l),
      (this.lastDistance_ = l);
    const a = e.map,
      u = a.getView();
    n != 1 && (this.lastScaleDelta_ = n),
      (this.anchor_ = a.getCoordinateFromPixelInternal(
        a.getEventPixel(Vd(this.targetPointers)),
      )),
      a.render(),
      u.adjustResolutionInternal(n, this.anchor_);
  }
  handleUpEvent(e) {
    if (this.targetPointers.length < 2) {
      const i = e.map.getView(),
        r = this.lastScaleDelta_ > 1 ? 1 : -1;
      return i.endInteraction(this.duration_, r), !1;
    }
    return !0;
  }
  handleDownEvent(e) {
    if (this.targetPointers.length >= 2) {
      const n = e.map;
      return (
        (this.anchor_ = null),
        (this.lastDistance_ = void 0),
        (this.lastScaleDelta_ = 1),
        this.handlingDownUpSequence || n.getView().beginInteraction(),
        !0
      );
    }
    return !1;
  }
}
const kC = IC;
function PC(t) {
  t = t || {};
  const e = new tn(),
    n = new Uw(-0.005, 0.05, 100);
  return (
    (t.altShiftDragRotate !== void 0 ? t.altShiftDragRotate : !0) &&
      e.push(new pC()),
    (t.doubleClickZoom !== void 0 ? t.doubleClickZoom : !0) &&
      e.push(new lC({ delta: t.zoomDelta, duration: t.zoomDuration })),
    (t.dragPan !== void 0 ? t.dragPan : !0) &&
      e.push(new mC({ onFocusOnly: t.onFocusOnly, kinetic: n })),
    (t.pinchRotate !== void 0 ? t.pinchRotate : !0) && e.push(new RC()),
    (t.pinchZoom !== void 0 ? t.pinchZoom : !0) &&
      e.push(new kC({ duration: t.zoomDuration })),
    (t.keyboard !== void 0 ? t.keyboard : !0) &&
      (e.push(new xC()),
      e.push(new CC({ delta: t.zoomDelta, duration: t.zoomDuration }))),
    (t.mouseWheelZoom !== void 0 ? t.mouseWheelZoom : !0) &&
      e.push(new TC({ onFocusOnly: t.onFocusOnly, duration: t.zoomDuration })),
    (t.shiftDragZoom !== void 0 ? t.shiftDragZoom : !0) &&
      e.push(new EC({ duration: t.zoomDuration })),
    e
  );
}
function z_(t) {
  if (t instanceof tu) {
    t.setMapInternal(null);
    return;
  }
  t instanceof as && t.getLayers().forEach(z_);
}
function j_(t, e) {
  if (t instanceof tu) {
    t.setMapInternal(e);
    return;
  }
  if (t instanceof as) {
    const n = t.getLayers().getArray();
    for (let i = 0, r = n.length; i < r; ++i) j_(n[i], e);
  }
}
let LC = class extends $t {
  constructor(e) {
    super(), (e = e || {}), this.on, this.once, this.un;
    const n = MC(e);
    this.renderComplete_,
      (this.loaded_ = !0),
      (this.boundHandleBrowserEvent_ = this.handleBrowserEvent.bind(this)),
      (this.maxTilesLoading_ =
        e.maxTilesLoading !== void 0 ? e.maxTilesLoading : 16),
      (this.pixelRatio_ = e.pixelRatio !== void 0 ? e.pixelRatio : P0),
      this.postRenderTimeoutHandle_,
      this.animationDelayKey_,
      (this.animationDelay_ = this.animationDelay_.bind(this)),
      (this.coordinateToPixelTransform_ = Kt()),
      (this.pixelToCoordinateTransform_ = Kt()),
      (this.frameIndex_ = 0),
      (this.frameState_ = null),
      (this.previousExtent_ = null),
      (this.viewPropertyListenerKey_ = null),
      (this.viewChangeListenerKey_ = null),
      (this.layerGroupPropertyListenerKeys_ = null),
      (this.viewport_ = document.createElement("div")),
      (this.viewport_.className =
        "ol-viewport" + ("ontouchstart" in window ? " ol-touch" : "")),
      (this.viewport_.style.position = "relative"),
      (this.viewport_.style.overflow = "hidden"),
      (this.viewport_.style.width = "100%"),
      (this.viewport_.style.height = "100%"),
      (this.overlayContainer_ = document.createElement("div")),
      (this.overlayContainer_.style.position = "absolute"),
      (this.overlayContainer_.style.zIndex = "0"),
      (this.overlayContainer_.style.width = "100%"),
      (this.overlayContainer_.style.height = "100%"),
      (this.overlayContainer_.style.pointerEvents = "none"),
      (this.overlayContainer_.className = "ol-overlaycontainer"),
      this.viewport_.appendChild(this.overlayContainer_),
      (this.overlayContainerStopEvent_ = document.createElement("div")),
      (this.overlayContainerStopEvent_.style.position = "absolute"),
      (this.overlayContainerStopEvent_.style.zIndex = "0"),
      (this.overlayContainerStopEvent_.style.width = "100%"),
      (this.overlayContainerStopEvent_.style.height = "100%"),
      (this.overlayContainerStopEvent_.style.pointerEvents = "none"),
      (this.overlayContainerStopEvent_.className =
        "ol-overlaycontainer-stopevent"),
      this.viewport_.appendChild(this.overlayContainerStopEvent_),
      (this.mapBrowserEventHandler_ = null),
      (this.moveTolerance_ = e.moveTolerance),
      (this.keyboardEventTarget_ = n.keyboardEventTarget),
      (this.targetChangeHandlerKeys_ = null),
      (this.targetElement_ = null),
      (this.resizeObserver_ = new ResizeObserver(() => this.updateSize())),
      (this.controls = n.controls || rC()),
      (this.interactions = n.interactions || PC({ onFocusOnly: !0 })),
      (this.overlays_ = n.overlays),
      (this.overlayIdIndex_ = {}),
      (this.renderer_ = null),
      (this.postRenderFunctions_ = []),
      (this.tileQueue_ = new Hw(
        this.getTilePriority.bind(this),
        this.handleTileChange_.bind(this),
      )),
      this.addChangeListener(Xe.LAYERGROUP, this.handleLayerGroupChanged_),
      this.addChangeListener(Xe.VIEW, this.handleViewChanged_),
      this.addChangeListener(Xe.SIZE, this.handleSizeChanged_),
      this.addChangeListener(Xe.TARGET, this.handleTargetChanged_),
      this.setProperties(n.values);
    const i = this;
    e.view &&
      !(e.view instanceof Jt) &&
      e.view.then(function (r) {
        i.setView(new Jt(r));
      }),
      this.controls.addEventListener(ot.ADD, (r) => {
        r.element.setMap(this);
      }),
      this.controls.addEventListener(ot.REMOVE, (r) => {
        r.element.setMap(null);
      }),
      this.interactions.addEventListener(ot.ADD, (r) => {
        r.element.setMap(this);
      }),
      this.interactions.addEventListener(ot.REMOVE, (r) => {
        r.element.setMap(null);
      }),
      this.overlays_.addEventListener(ot.ADD, (r) => {
        this.addOverlayInternal_(r.element);
      }),
      this.overlays_.addEventListener(ot.REMOVE, (r) => {
        const s = r.element.getId();
        s !== void 0 && delete this.overlayIdIndex_[s.toString()],
          r.element.setMap(null);
      }),
      this.controls.forEach((r) => {
        r.setMap(this);
      }),
      this.interactions.forEach((r) => {
        r.setMap(this);
      }),
      this.overlays_.forEach(this.addOverlayInternal_.bind(this));
  }
  addControl(e) {
    this.getControls().push(e);
  }
  addInteraction(e) {
    this.getInteractions().push(e);
  }
  addLayer(e) {
    this.getLayerGroup().getLayers().push(e);
  }
  handleLayerAdd_(e) {
    j_(e.layer, this);
  }
  addOverlay(e) {
    this.getOverlays().push(e);
  }
  addOverlayInternal_(e) {
    const n = e.getId();
    n !== void 0 && (this.overlayIdIndex_[n.toString()] = e), e.setMap(this);
  }
  disposeInternal() {
    this.controls.clear(),
      this.interactions.clear(),
      this.overlays_.clear(),
      this.resizeObserver_.disconnect(),
      this.setTarget(null),
      super.disposeInternal();
  }
  forEachFeatureAtPixel(e, n, i) {
    if (!this.frameState_ || !this.renderer_) return;
    const r = this.getCoordinateFromPixelInternal(e);
    i = i !== void 0 ? i : {};
    const s = i.hitTolerance !== void 0 ? i.hitTolerance : 0,
      o = i.layerFilter !== void 0 ? i.layerFilter : uo,
      l = i.checkWrapped !== !1;
    return this.renderer_.forEachFeatureAtCoordinate(
      r,
      this.frameState_,
      s,
      l,
      n,
      null,
      o,
      null,
    );
  }
  getFeaturesAtPixel(e, n) {
    const i = [];
    return (
      this.forEachFeatureAtPixel(
        e,
        function (r) {
          i.push(r);
        },
        n,
      ),
      i
    );
  }
  getAllLayers() {
    const e = [];
    function n(i) {
      i.forEach(function (r) {
        r instanceof as ? n(r.getLayers()) : e.push(r);
      });
    }
    return n(this.getLayers()), e;
  }
  hasFeatureAtPixel(e, n) {
    if (!this.frameState_ || !this.renderer_) return !1;
    const i = this.getCoordinateFromPixelInternal(e);
    n = n !== void 0 ? n : {};
    const r = n.layerFilter !== void 0 ? n.layerFilter : uo,
      s = n.hitTolerance !== void 0 ? n.hitTolerance : 0,
      o = n.checkWrapped !== !1;
    return this.renderer_.hasFeatureAtCoordinate(
      i,
      this.frameState_,
      s,
      o,
      r,
      null,
    );
  }
  getEventCoordinate(e) {
    return this.getCoordinateFromPixel(this.getEventPixel(e));
  }
  getEventCoordinateInternal(e) {
    return this.getCoordinateFromPixelInternal(this.getEventPixel(e));
  }
  getEventPixel(e) {
    const i = this.viewport_.getBoundingClientRect(),
      r = this.getSize(),
      s = i.width / r[0],
      o = i.height / r[1],
      l = "changedTouches" in e ? e.changedTouches[0] : e;
    return [(l.clientX - i.left) / s, (l.clientY - i.top) / o];
  }
  getTarget() {
    return this.get(Xe.TARGET);
  }
  getTargetElement() {
    return this.targetElement_;
  }
  getCoordinateFromPixel(e) {
    return ih(
      this.getCoordinateFromPixelInternal(e),
      this.getView().getProjection(),
    );
  }
  getCoordinateFromPixelInternal(e) {
    const n = this.frameState_;
    return n ? Me(n.pixelToCoordinateTransform, e.slice()) : null;
  }
  getControls() {
    return this.controls;
  }
  getOverlays() {
    return this.overlays_;
  }
  getOverlayById(e) {
    const n = this.overlayIdIndex_[e.toString()];
    return n !== void 0 ? n : null;
  }
  getInteractions() {
    return this.interactions;
  }
  getLayerGroup() {
    return this.get(Xe.LAYERGROUP);
  }
  setLayers(e) {
    const n = this.getLayerGroup();
    if (e instanceof tn) {
      n.setLayers(e);
      return;
    }
    const i = n.getLayers();
    i.clear(), i.extend(e);
  }
  getLayers() {
    return this.getLayerGroup().getLayers();
  }
  getLoadingOrNotReady() {
    const e = this.getLayerGroup().getLayerStatesArray();
    for (let n = 0, i = e.length; n < i; ++n) {
      const r = e[n];
      if (!r.visible) continue;
      const s = r.layer.getRenderer();
      if (s && !s.ready) return !0;
      const o = r.layer.getSource();
      if (o && o.loading) return !0;
    }
    return !1;
  }
  getPixelFromCoordinate(e) {
    const n = pn(e, this.getView().getProjection());
    return this.getPixelFromCoordinateInternal(n);
  }
  getPixelFromCoordinateInternal(e) {
    const n = this.frameState_;
    return n ? Me(n.coordinateToPixelTransform, e.slice(0, 2)) : null;
  }
  getRenderer() {
    return this.renderer_;
  }
  getSize() {
    return this.get(Xe.SIZE);
  }
  getView() {
    return this.get(Xe.VIEW);
  }
  getViewport() {
    return this.viewport_;
  }
  getOverlayContainer() {
    return this.overlayContainer_;
  }
  getOverlayContainerStopEvent() {
    return this.overlayContainerStopEvent_;
  }
  getOwnerDocument() {
    const e = this.getTargetElement();
    return e ? e.ownerDocument : document;
  }
  getTilePriority(e, n, i, r) {
    return qw(this.frameState_, e, n, i, r);
  }
  handleBrowserEvent(e, n) {
    n = n || e.type;
    const i = new Un(n, this, e);
    this.handleMapBrowserEvent(i);
  }
  handleMapBrowserEvent(e) {
    if (!this.frameState_) return;
    const n = e.originalEvent,
      i = n.type;
    if (i === fh.POINTERDOWN || i === K.WHEEL || i === K.KEYDOWN) {
      const r = this.getOwnerDocument(),
        s = this.viewport_.getRootNode ? this.viewport_.getRootNode() : r,
        o = n.target;
      if (
        this.overlayContainerStopEvent_.contains(o) ||
        !(s === r ? r.documentElement : s).contains(o)
      )
        return;
    }
    if (((e.frameState = this.frameState_), this.dispatchEvent(e) !== !1)) {
      const r = this.getInteractions().getArray().slice();
      for (let s = r.length - 1; s >= 0; s--) {
        const o = r[s];
        if (o.getMap() !== this || !o.getActive() || !this.getTargetElement())
          continue;
        if (!o.handleEvent(e) || e.propagationStopped) break;
      }
    }
  }
  handlePostRender() {
    const e = this.frameState_,
      n = this.tileQueue_;
    if (!n.isEmpty()) {
      let r = this.maxTilesLoading_,
        s = r;
      if (e) {
        const o = e.viewHints;
        if (o[Be.ANIMATING] || o[Be.INTERACTING]) {
          const l = Date.now() - e.time > 8;
          (r = l ? 0 : 8), (s = l ? 0 : 2);
        }
      }
      n.getTilesLoading() < r && (n.reprioritize(), n.loadMoreTiles(r, s));
    }
    e &&
      this.renderer_ &&
      !e.animate &&
      (this.renderComplete_ === !0
        ? (this.hasListener(ln.RENDERCOMPLETE) &&
            this.renderer_.dispatchRenderEvent(ln.RENDERCOMPLETE, e),
          this.loaded_ === !1 &&
            ((this.loaded_ = !0),
            this.dispatchEvent(new yr(vn.LOADEND, this, e))))
        : this.loaded_ === !0 &&
          ((this.loaded_ = !1),
          this.dispatchEvent(new yr(vn.LOADSTART, this, e))));
    const i = this.postRenderFunctions_;
    for (let r = 0, s = i.length; r < s; ++r) i[r](this, e);
    i.length = 0;
  }
  handleSizeChanged_() {
    this.getView() &&
      !this.getView().getAnimating() &&
      this.getView().resolveConstraints(0),
      this.render();
  }
  handleTargetChanged_() {
    if (this.mapBrowserEventHandler_) {
      for (let i = 0, r = this.targetChangeHandlerKeys_.length; i < r; ++i)
        ce(this.targetChangeHandlerKeys_[i]);
      (this.targetChangeHandlerKeys_ = null),
        this.viewport_.removeEventListener(
          K.CONTEXTMENU,
          this.boundHandleBrowserEvent_,
        ),
        this.viewport_.removeEventListener(
          K.WHEEL,
          this.boundHandleBrowserEvent_,
        ),
        this.mapBrowserEventHandler_.dispose(),
        (this.mapBrowserEventHandler_ = null),
        ha(this.viewport_);
    }
    if (this.targetElement_) {
      this.resizeObserver_.unobserve(this.targetElement_);
      const i = this.targetElement_.getRootNode();
      i instanceof ShadowRoot && this.resizeObserver_.unobserve(i.host),
        this.setSize(void 0);
    }
    const e = this.getTarget(),
      n = typeof e == "string" ? document.getElementById(e) : e;
    if (((this.targetElement_ = n), !n))
      this.renderer_ &&
        (clearTimeout(this.postRenderTimeoutHandle_),
        (this.postRenderTimeoutHandle_ = void 0),
        (this.postRenderFunctions_.length = 0),
        this.renderer_.dispose(),
        (this.renderer_ = null)),
        this.animationDelayKey_ &&
          (cancelAnimationFrame(this.animationDelayKey_),
          (this.animationDelayKey_ = void 0));
    else {
      n.appendChild(this.viewport_),
        this.renderer_ || (this.renderer_ = new Kw(this)),
        (this.mapBrowserEventHandler_ = new Zw(this, this.moveTolerance_));
      for (const s in ve)
        this.mapBrowserEventHandler_.addEventListener(
          ve[s],
          this.handleMapBrowserEvent.bind(this),
        );
      this.viewport_.addEventListener(
        K.CONTEXTMENU,
        this.boundHandleBrowserEvent_,
        !1,
      ),
        this.viewport_.addEventListener(
          K.WHEEL,
          this.boundHandleBrowserEvent_,
          M0 ? { passive: !1 } : !1,
        );
      const i = this.keyboardEventTarget_ ? this.keyboardEventTarget_ : n;
      this.targetChangeHandlerKeys_ = [
        Q(i, K.KEYDOWN, this.handleBrowserEvent, this),
        Q(i, K.KEYPRESS, this.handleBrowserEvent, this),
      ];
      const r = n.getRootNode();
      r instanceof ShadowRoot && this.resizeObserver_.observe(r.host),
        this.resizeObserver_.observe(n);
    }
    this.updateSize();
  }
  handleTileChange_() {
    this.render();
  }
  handleViewPropertyChanged_() {
    this.render();
  }
  handleViewChanged_() {
    this.viewPropertyListenerKey_ &&
      (ce(this.viewPropertyListenerKey_),
      (this.viewPropertyListenerKey_ = null)),
      this.viewChangeListenerKey_ &&
        (ce(this.viewChangeListenerKey_), (this.viewChangeListenerKey_ = null));
    const e = this.getView();
    e &&
      (this.updateViewportSize_(this.getSize()),
      (this.viewPropertyListenerKey_ = Q(
        e,
        $r.PROPERTYCHANGE,
        this.handleViewPropertyChanged_,
        this,
      )),
      (this.viewChangeListenerKey_ = Q(
        e,
        K.CHANGE,
        this.handleViewPropertyChanged_,
        this,
      )),
      e.resolveConstraints(0)),
      this.render();
  }
  handleLayerGroupChanged_() {
    this.layerGroupPropertyListenerKeys_ &&
      (this.layerGroupPropertyListenerKeys_.forEach(ce),
      (this.layerGroupPropertyListenerKeys_ = null));
    const e = this.getLayerGroup();
    e &&
      (this.handleLayerAdd_(new Zn("addlayer", e)),
      (this.layerGroupPropertyListenerKeys_ = [
        Q(e, $r.PROPERTYCHANGE, this.render, this),
        Q(e, K.CHANGE, this.render, this),
        Q(e, "addlayer", this.handleLayerAdd_, this),
        Q(e, "removelayer", this.handleLayerRemove_, this),
      ])),
      this.render();
  }
  isRendered() {
    return !!this.frameState_;
  }
  animationDelay_() {
    (this.animationDelayKey_ = void 0), this.renderFrame_(Date.now());
  }
  renderSync() {
    this.animationDelayKey_ && cancelAnimationFrame(this.animationDelayKey_),
      this.animationDelay_();
  }
  redrawText() {
    const e = this.getLayerGroup().getLayerStatesArray();
    for (let n = 0, i = e.length; n < i; ++n) {
      const r = e[n].layer;
      r.hasRenderer() && r.getRenderer().handleFontsChanged();
    }
  }
  render() {
    this.renderer_ &&
      this.animationDelayKey_ === void 0 &&
      (this.animationDelayKey_ = requestAnimationFrame(this.animationDelay_));
  }
  flushDeclutterItems() {
    const e = this.frameState_;
    e && this.renderer_.flushDeclutterItems(e);
  }
  removeControl(e) {
    return this.getControls().remove(e);
  }
  removeInteraction(e) {
    return this.getInteractions().remove(e);
  }
  removeLayer(e) {
    return this.getLayerGroup().getLayers().remove(e);
  }
  handleLayerRemove_(e) {
    z_(e.layer);
  }
  removeOverlay(e) {
    return this.getOverlays().remove(e);
  }
  renderFrame_(e) {
    const n = this.getSize(),
      i = this.getView(),
      r = this.frameState_;
    let s = null;
    if (n !== void 0 && Pg(n) && i && i.isDef()) {
      const o = i.getHints(
          this.frameState_ ? this.frameState_.viewHints : void 0,
        ),
        l = i.getState();
      if (
        ((s = {
          animate: !1,
          coordinateToPixelTransform: this.coordinateToPixelTransform_,
          declutterTree: null,
          extent: Jc(l.center, l.resolution, l.rotation, n),
          index: this.frameIndex_++,
          layerIndex: 0,
          layerStatesArray: this.getLayerGroup().getLayerStatesArray(),
          pixelRatio: this.pixelRatio_,
          pixelToCoordinateTransform: this.pixelToCoordinateTransform_,
          postRenderFunctions: [],
          size: n,
          tileQueue: this.tileQueue_,
          time: e,
          usedTiles: {},
          viewState: l,
          viewHints: o,
          wantedTiles: {},
          mapId: ne(this),
          renderTargets: {},
        }),
        l.nextCenter && l.nextResolution)
      ) {
        const a = isNaN(l.nextRotation) ? l.rotation : l.nextRotation;
        s.nextExtent = Jc(l.nextCenter, l.nextResolution, a, n);
      }
    }
    (this.frameState_ = s),
      this.renderer_.renderFrame(s),
      s &&
        (s.animate && this.render(),
        Array.prototype.push.apply(
          this.postRenderFunctions_,
          s.postRenderFunctions,
        ),
        r &&
          (!this.previousExtent_ ||
            (!Lo(this.previousExtent_) &&
              !co(s.extent, this.previousExtent_))) &&
          (this.dispatchEvent(new yr(vn.MOVESTART, this, r)),
          (this.previousExtent_ = rs(this.previousExtent_))),
        this.previousExtent_ &&
          !s.viewHints[Be.ANIMATING] &&
          !s.viewHints[Be.INTERACTING] &&
          !co(s.extent, this.previousExtent_) &&
          (this.dispatchEvent(new yr(vn.MOVEEND, this, s)),
          A0(s.extent, this.previousExtent_))),
      this.dispatchEvent(new yr(vn.POSTRENDER, this, s)),
      (this.renderComplete_ =
        this.hasListener(vn.LOADSTART) ||
        this.hasListener(vn.LOADEND) ||
        this.hasListener(ln.RENDERCOMPLETE)
          ? !this.tileQueue_.getTilesLoading() &&
            !this.tileQueue_.getCount() &&
            !this.getLoadingOrNotReady()
          : void 0),
      this.postRenderTimeoutHandle_ ||
        (this.postRenderTimeoutHandle_ = setTimeout(() => {
          (this.postRenderTimeoutHandle_ = void 0), this.handlePostRender();
        }, 0));
  }
  setLayerGroup(e) {
    const n = this.getLayerGroup();
    n && this.handleLayerRemove_(new Zn("removelayer", n)),
      this.set(Xe.LAYERGROUP, e);
  }
  setSize(e) {
    this.set(Xe.SIZE, e);
  }
  setTarget(e) {
    this.set(Xe.TARGET, e);
  }
  setView(e) {
    if (!e || e instanceof Jt) {
      this.set(Xe.VIEW, e);
      return;
    }
    this.set(Xe.VIEW, new Jt());
    const n = this;
    e.then(function (i) {
      n.setView(new Jt(i));
    });
  }
  updateSize() {
    const e = this.getTargetElement();
    let n;
    if (e) {
      const r = getComputedStyle(e),
        s =
          e.offsetWidth -
          parseFloat(r.borderLeftWidth) -
          parseFloat(r.paddingLeft) -
          parseFloat(r.paddingRight) -
          parseFloat(r.borderRightWidth),
        o =
          e.offsetHeight -
          parseFloat(r.borderTopWidth) -
          parseFloat(r.paddingTop) -
          parseFloat(r.paddingBottom) -
          parseFloat(r.borderBottomWidth);
      !isNaN(s) &&
        !isNaN(o) &&
        ((n = [s, o]),
        !Pg(n) &&
          (e.offsetWidth || e.offsetHeight || e.getClientRects().length) &&
          W0(
            "No map visible because the map container's width or height are 0.",
          ));
    }
    const i = this.getSize();
    n && (!i || !xi(n, i)) && (this.setSize(n), this.updateViewportSize_(n));
  }
  updateViewportSize_(e) {
    const n = this.getView();
    n && n.setViewportSize(e);
  }
};
function MC(t) {
  let e = null;
  t.keyboardEventTarget !== void 0 &&
    (e =
      typeof t.keyboardEventTarget == "string"
        ? document.getElementById(t.keyboardEventTarget)
        : t.keyboardEventTarget);
  const n = {},
    i =
      t.layers && typeof t.layers.getLayers == "function"
        ? t.layers
        : new as({ layers: t.layers });
  (n[Xe.LAYERGROUP] = i),
    (n[Xe.TARGET] = t.target),
    (n[Xe.VIEW] = t.view instanceof Jt ? t.view : new Jt());
  let r;
  t.controls !== void 0 &&
    (Array.isArray(t.controls)
      ? (r = new tn(t.controls.slice()))
      : (ee(
          typeof t.controls.getArray == "function",
          "Expected `controls` to be an array or an `ol/Collection.js`",
        ),
        (r = t.controls)));
  let s;
  t.interactions !== void 0 &&
    (Array.isArray(t.interactions)
      ? (s = new tn(t.interactions.slice()))
      : (ee(
          typeof t.interactions.getArray == "function",
          "Expected `interactions` to be an array or an `ol/Collection.js`",
        ),
        (s = t.interactions)));
  let o;
  return (
    t.overlays !== void 0
      ? Array.isArray(t.overlays)
        ? (o = new tn(t.overlays.slice()))
        : (ee(
            typeof t.overlays.getArray == "function",
            "Expected `overlays` to be an array or an `ol/Collection.js`",
          ),
          (o = t.overlays))
      : (o = new tn()),
    {
      controls: r,
      interactions: s,
      keyboardEventTarget: e,
      overlays: o,
      values: n,
    }
  );
}
const OC = LC,
  We = {
    ELEMENT: "element",
    MAP: "map",
    OFFSET: "offset",
    POSITION: "position",
    POSITIONING: "positioning",
  };
class AC extends $t {
  constructor(e) {
    super(),
      this.on,
      this.once,
      this.un,
      (this.options = e),
      (this.id = e.id),
      (this.insertFirst = e.insertFirst !== void 0 ? e.insertFirst : !0),
      (this.stopEvent = e.stopEvent !== void 0 ? e.stopEvent : !0),
      (this.element = document.createElement("div")),
      (this.element.className =
        e.className !== void 0 ? e.className : "ol-overlay-container " + jE),
      (this.element.style.position = "absolute"),
      (this.element.style.pointerEvents = "auto"),
      (this.autoPan = e.autoPan === !0 ? {} : e.autoPan || void 0),
      (this.rendered = { transform_: "", visible: !0 }),
      (this.mapPostrenderListenerKey = null),
      this.addChangeListener(We.ELEMENT, this.handleElementChanged),
      this.addChangeListener(We.MAP, this.handleMapChanged),
      this.addChangeListener(We.OFFSET, this.handleOffsetChanged),
      this.addChangeListener(We.POSITION, this.handlePositionChanged),
      this.addChangeListener(We.POSITIONING, this.handlePositioningChanged),
      e.element !== void 0 && this.setElement(e.element),
      this.setOffset(e.offset !== void 0 ? e.offset : [0, 0]),
      this.setPositioning(e.positioning || "top-left"),
      e.position !== void 0 && this.setPosition(e.position);
  }
  getElement() {
    return this.get(We.ELEMENT);
  }
  getId() {
    return this.id;
  }
  getMap() {
    return this.get(We.MAP) || null;
  }
  getOffset() {
    return this.get(We.OFFSET);
  }
  getPosition() {
    return this.get(We.POSITION);
  }
  getPositioning() {
    return this.get(We.POSITIONING);
  }
  handleElementChanged() {
    l_(this.element);
    const e = this.getElement();
    e && this.element.appendChild(e);
  }
  handleMapChanged() {
    this.mapPostrenderListenerKey &&
      (ha(this.element),
      ce(this.mapPostrenderListenerKey),
      (this.mapPostrenderListenerKey = null));
    const e = this.getMap();
    if (e) {
      (this.mapPostrenderListenerKey = Q(e, vn.POSTRENDER, this.render, this)),
        this.updatePixelPosition();
      const n = this.stopEvent
        ? e.getOverlayContainerStopEvent()
        : e.getOverlayContainer();
      this.insertFirst
        ? n.insertBefore(this.element, n.childNodes[0] || null)
        : n.appendChild(this.element),
        this.performAutoPan();
    }
  }
  render() {
    this.updatePixelPosition();
  }
  handleOffsetChanged() {
    this.updatePixelPosition();
  }
  handlePositionChanged() {
    this.updatePixelPosition(), this.performAutoPan();
  }
  handlePositioningChanged() {
    this.updatePixelPosition();
  }
  setElement(e) {
    this.set(We.ELEMENT, e);
  }
  setMap(e) {
    this.set(We.MAP, e);
  }
  setOffset(e) {
    this.set(We.OFFSET, e);
  }
  setPosition(e) {
    this.set(We.POSITION, e);
  }
  performAutoPan() {
    this.autoPan && this.panIntoView(this.autoPan);
  }
  panIntoView(e) {
    const n = this.getMap();
    if (!n || !n.getTargetElement() || !this.get(We.POSITION)) return;
    const i = this.getRect(n.getTargetElement(), n.getSize()),
      r = this.getElement(),
      s = this.getRect(r, [NE(r), DE(r)]);
    e = e || {};
    const o = e.margin === void 0 ? 20 : e.margin;
    if (!Di(i, s)) {
      const l = s[0] - i[0],
        a = i[2] - s[2],
        u = s[1] - i[1],
        c = i[3] - s[3],
        h = [0, 0];
      if (
        (l < 0 ? (h[0] = l - o) : a < 0 && (h[0] = Math.abs(a) + o),
        u < 0 ? (h[1] = u - o) : c < 0 && (h[1] = Math.abs(c) + o),
        h[0] !== 0 || h[1] !== 0)
      ) {
        const d = n.getView().getCenterInternal(),
          f = n.getPixelFromCoordinateInternal(d);
        if (!f) return;
        const p = [f[0] + h[0], f[1] + h[1]],
          _ = e.animation || {};
        n.getView().animateInternal({
          center: n.getCoordinateFromPixelInternal(p),
          duration: _.duration,
          easing: _.easing,
        });
      }
    }
  }
  getRect(e, n) {
    const i = e.getBoundingClientRect(),
      r = i.left + window.pageXOffset,
      s = i.top + window.pageYOffset;
    return [r, s, r + n[0], s + n[1]];
  }
  setPositioning(e) {
    this.set(We.POSITIONING, e);
  }
  setVisible(e) {
    this.rendered.visible !== e &&
      ((this.element.style.display = e ? "" : "none"),
      (this.rendered.visible = e));
  }
  updatePixelPosition() {
    const e = this.getMap(),
      n = this.getPosition();
    if (!e || !e.isRendered() || !n) {
      this.setVisible(!1);
      return;
    }
    const i = e.getPixelFromCoordinate(n),
      r = e.getSize();
    this.updateRenderedPosition(i, r);
  }
  updateRenderedPosition(e, n) {
    const i = this.element.style,
      r = this.getOffset(),
      s = this.getPositioning();
    this.setVisible(!0);
    const o = Math.round(e[0] + r[0]) + "px",
      l = Math.round(e[1] + r[1]) + "px";
    let a = "0%",
      u = "0%";
    s == "bottom-right" || s == "center-right" || s == "top-right"
      ? (a = "-100%")
      : (s == "bottom-center" || s == "center-center" || s == "top-center") &&
        (a = "-50%"),
      s == "bottom-left" || s == "bottom-center" || s == "bottom-right"
        ? (u = "-100%")
        : (s == "center-left" || s == "center-center" || s == "center-right") &&
          (u = "-50%");
    const c = `translate(${a}, ${u}) translate(${o}, ${l})`;
    this.rendered.transform_ != c &&
      ((this.rendered.transform_ = c), (i.transform = c));
  }
  getOptions() {
    return this.options;
  }
}
const nr = AC;
class FC {
  constructor(e) {
    (this.highWaterMark = e !== void 0 ? e : 2048),
      (this.count_ = 0),
      (this.entries_ = {}),
      (this.oldest_ = null),
      (this.newest_ = null);
  }
  canExpireCache() {
    return this.highWaterMark > 0 && this.getCount() > this.highWaterMark;
  }
  expireCache(e) {
    for (; this.canExpireCache(); ) this.pop();
  }
  clear() {
    (this.count_ = 0),
      (this.entries_ = {}),
      (this.oldest_ = null),
      (this.newest_ = null);
  }
  containsKey(e) {
    return this.entries_.hasOwnProperty(e);
  }
  forEach(e) {
    let n = this.oldest_;
    for (; n; ) e(n.value_, n.key_, this), (n = n.newer);
  }
  get(e, n) {
    const i = this.entries_[e];
    return (
      ee(
        i !== void 0,
        "Tried to get a value for a key that does not exist in the cache",
      ),
      i === this.newest_ ||
        (i === this.oldest_
          ? ((this.oldest_ = this.oldest_.newer), (this.oldest_.older = null))
          : ((i.newer.older = i.older), (i.older.newer = i.newer)),
        (i.newer = null),
        (i.older = this.newest_),
        (this.newest_.newer = i),
        (this.newest_ = i)),
      i.value_
    );
  }
  remove(e) {
    const n = this.entries_[e];
    return (
      ee(
        n !== void 0,
        "Tried to get a value for a key that does not exist in the cache",
      ),
      n === this.newest_
        ? ((this.newest_ = n.older),
          this.newest_ && (this.newest_.newer = null))
        : n === this.oldest_
          ? ((this.oldest_ = n.newer),
            this.oldest_ && (this.oldest_.older = null))
          : ((n.newer.older = n.older), (n.older.newer = n.newer)),
      delete this.entries_[e],
      --this.count_,
      n.value_
    );
  }
  getCount() {
    return this.count_;
  }
  getKeys() {
    const e = new Array(this.count_);
    let n = 0,
      i;
    for (i = this.newest_; i; i = i.older) e[n++] = i.key_;
    return e;
  }
  getValues() {
    const e = new Array(this.count_);
    let n = 0,
      i;
    for (i = this.newest_; i; i = i.older) e[n++] = i.value_;
    return e;
  }
  peekLast() {
    return this.oldest_.value_;
  }
  peekLastKey() {
    return this.oldest_.key_;
  }
  peekFirstKey() {
    return this.newest_.key_;
  }
  peek(e) {
    var n;
    return (n = this.entries_[e]) == null ? void 0 : n.value_;
  }
  pop() {
    const e = this.oldest_;
    return (
      delete this.entries_[e.key_],
      e.newer && (e.newer.older = null),
      (this.oldest_ = e.newer),
      this.oldest_ || (this.newest_ = null),
      --this.count_,
      e.value_
    );
  }
  replace(e, n) {
    this.get(e), (this.entries_[e].value_ = n);
  }
  set(e, n) {
    ee(
      !(e in this.entries_),
      "Tried to set a value for a key that is used already",
    );
    const i = { key_: e, newer: null, older: this.newest_, value_: n };
    this.newest_ ? (this.newest_.newer = i) : (this.oldest_ = i),
      (this.newest_ = i),
      (this.entries_[e] = i),
      ++this.count_;
  }
  setSize(e) {
    this.highWaterMark = e;
  }
}
function um(t, e, n, i) {
  return i !== void 0 ? ((i[0] = t), (i[1] = e), (i[2] = n), i) : [t, e, n];
}
function ru(t, e, n) {
  return t + "/" + e + "/" + n;
}
function G_(t) {
  return ru(t[0], t[1], t[2]);
}
function NC(t) {
  return t.split("/").map(Number);
}
function DC(t) {
  return (t[1] << t[0]) + t[2];
}
function zC(t, e) {
  const n = t[0],
    i = t[1],
    r = t[2];
  if (e.getMinZoom() > n || n > e.getMaxZoom()) return !1;
  const s = e.getFullTileRange(n);
  return s ? s.containsXY(i, r) : !0;
}
class b_ extends FC {
  clear() {
    for (; this.getCount() > 0; ) this.pop().release();
    super.clear();
  }
  expireCache(e) {
    for (; this.canExpireCache() && !(this.peekLast().getKey() in e); )
      this.pop().release();
  }
  pruneExceptNewestZ() {
    if (this.getCount() === 0) return;
    const e = this.peekFirstKey(),
      i = NC(e)[0];
    this.forEach((r) => {
      r.tileCoord[0] !== i && (this.remove(G_(r.tileCoord)), r.release());
    });
  }
}
class Kd {
  constructor(e, n, i, r) {
    (this.minX = e), (this.maxX = n), (this.minY = i), (this.maxY = r);
  }
  contains(e) {
    return this.containsXY(e[1], e[2]);
  }
  containsTileRange(e) {
    return (
      this.minX <= e.minX &&
      e.maxX <= this.maxX &&
      this.minY <= e.minY &&
      e.maxY <= this.maxY
    );
  }
  containsXY(e, n) {
    return this.minX <= e && e <= this.maxX && this.minY <= n && n <= this.maxY;
  }
  equals(e) {
    return (
      this.minX == e.minX &&
      this.minY == e.minY &&
      this.maxX == e.maxX &&
      this.maxY == e.maxY
    );
  }
  extend(e) {
    e.minX < this.minX && (this.minX = e.minX),
      e.maxX > this.maxX && (this.maxX = e.maxX),
      e.minY < this.minY && (this.minY = e.minY),
      e.maxY > this.maxY && (this.maxY = e.maxY);
  }
  getHeight() {
    return this.maxY - this.minY + 1;
  }
  getSize() {
    return [this.getWidth(), this.getHeight()];
  }
  getWidth() {
    return this.maxX - this.minX + 1;
  }
  intersects(e) {
    return (
      this.minX <= e.maxX &&
      this.maxX >= e.minX &&
      this.minY <= e.maxY &&
      this.maxY >= e.minY
    );
  }
}
function fr(t, e, n, i, r) {
  return r !== void 0
    ? ((r.minX = t), (r.maxX = e), (r.minY = n), (r.maxY = i), r)
    : new Kd(t, e, n, i);
}
const vl = {
  PRELOAD: "preload",
  USE_INTERIM_TILES_ON_ERROR: "useInterimTilesOnError",
};
class jC extends tu {
  constructor(e) {
    e = e || {};
    const n = Object.assign({}, e);
    delete n.preload,
      delete n.useInterimTilesOnError,
      super(n),
      this.on,
      this.once,
      this.un,
      this.setPreload(e.preload !== void 0 ? e.preload : 0),
      this.setUseInterimTilesOnError(
        e.useInterimTilesOnError !== void 0 ? e.useInterimTilesOnError : !0,
      );
  }
  getPreload() {
    return this.get(vl.PRELOAD);
  }
  setPreload(e) {
    this.set(vl.PRELOAD, e);
  }
  getUseInterimTilesOnError() {
    return this.get(vl.USE_INTERIM_TILES_ON_ERROR);
  }
  setUseInterimTilesOnError(e) {
    this.set(vl.USE_INTERIM_TILES_ON_ERROR, e);
  }
  getData(e) {
    return super.getData(e);
  }
}
const GC = 0.5,
  bC = 10,
  cm = 0.25;
class WC {
  constructor(e, n, i, r, s, o) {
    (this.sourceProj_ = e), (this.targetProj_ = n);
    let l = {};
    const a = qr(this.targetProj_, this.sourceProj_);
    (this.transformInv_ = function (m) {
      const y = m[0] + "/" + m[1];
      return l[y] || (l[y] = a(m)), l[y];
    }),
      (this.maxSourceExtent_ = r),
      (this.errorThresholdSquared_ = s * s),
      (this.triangles_ = []),
      (this.wrapsXInSource_ = !1),
      (this.canWrapXInSource_ =
        this.sourceProj_.canWrapX() &&
        !!r &&
        !!this.sourceProj_.getExtent() &&
        ae(r) >= ae(this.sourceProj_.getExtent())),
      (this.sourceWorldWidth_ = this.sourceProj_.getExtent()
        ? ae(this.sourceProj_.getExtent())
        : null),
      (this.targetWorldWidth_ = this.targetProj_.getExtent()
        ? ae(this.targetProj_.getExtent())
        : null);
    const u = Ji(i),
      c = Ba(i),
      h = Xa(i),
      d = Wa(i),
      f = this.transformInv_(u),
      p = this.transformInv_(c),
      _ = this.transformInv_(h),
      v = this.transformInv_(d),
      g =
        bC +
        (o
          ? Math.max(0, Math.ceil(Math.log2(Qc(i) / (o * o * 256 * 256))))
          : 0);
    if ((this.addQuad_(u, c, h, d, f, p, _, v, g), this.wrapsXInSource_)) {
      let m = 1 / 0;
      this.triangles_.forEach(function (y, E, x) {
        m = Math.min(m, y.source[0][0], y.source[1][0], y.source[2][0]);
      }),
        this.triangles_.forEach((y) => {
          if (
            Math.max(y.source[0][0], y.source[1][0], y.source[2][0]) - m >
            this.sourceWorldWidth_ / 2
          ) {
            const E = [
              [y.source[0][0], y.source[0][1]],
              [y.source[1][0], y.source[1][1]],
              [y.source[2][0], y.source[2][1]],
            ];
            E[0][0] - m > this.sourceWorldWidth_ / 2 &&
              (E[0][0] -= this.sourceWorldWidth_),
              E[1][0] - m > this.sourceWorldWidth_ / 2 &&
                (E[1][0] -= this.sourceWorldWidth_),
              E[2][0] - m > this.sourceWorldWidth_ / 2 &&
                (E[2][0] -= this.sourceWorldWidth_);
            const x = Math.min(E[0][0], E[1][0], E[2][0]);
            Math.max(E[0][0], E[1][0], E[2][0]) - x <
              this.sourceWorldWidth_ / 2 && (y.source = E);
          }
        });
    }
    l = {};
  }
  addTriangle_(e, n, i, r, s, o) {
    this.triangles_.push({ source: [r, s, o], target: [e, n, i] });
  }
  addQuad_(e, n, i, r, s, o, l, a, u) {
    const c = yg([s, o, l, a]),
      h = this.sourceWorldWidth_ ? ae(c) / this.sourceWorldWidth_ : null,
      d = this.sourceWorldWidth_,
      f = this.sourceProj_.canWrapX() && h > 0.5 && h < 1;
    let p = !1;
    if (u > 0) {
      if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
        const v = yg([e, n, i, r]);
        p = ae(v) / this.targetWorldWidth_ > cm || p;
      }
      !f && this.sourceProj_.isGlobal() && h && (p = h > cm || p);
    }
    if (
      !p &&
      this.maxSourceExtent_ &&
      isFinite(c[0]) &&
      isFinite(c[1]) &&
      isFinite(c[2]) &&
      isFinite(c[3]) &&
      !at(c, this.maxSourceExtent_)
    )
      return;
    let _ = 0;
    if (
      !p &&
      (!isFinite(s[0]) ||
        !isFinite(s[1]) ||
        !isFinite(o[0]) ||
        !isFinite(o[1]) ||
        !isFinite(l[0]) ||
        !isFinite(l[1]) ||
        !isFinite(a[0]) ||
        !isFinite(a[1]))
    ) {
      if (u > 0) p = !0;
      else if (
        ((_ =
          (!isFinite(s[0]) || !isFinite(s[1]) ? 8 : 0) +
          (!isFinite(o[0]) || !isFinite(o[1]) ? 4 : 0) +
          (!isFinite(l[0]) || !isFinite(l[1]) ? 2 : 0) +
          (!isFinite(a[0]) || !isFinite(a[1]) ? 1 : 0)),
        _ != 1 && _ != 2 && _ != 4 && _ != 8)
      )
        return;
    }
    if (u > 0) {
      if (!p) {
        const v = [(e[0] + i[0]) / 2, (e[1] + i[1]) / 2],
          g = this.transformInv_(v);
        let m;
        f
          ? (m = (br(s[0], d) + br(l[0], d)) / 2 - br(g[0], d))
          : (m = (s[0] + l[0]) / 2 - g[0]);
        const y = (s[1] + l[1]) / 2 - g[1];
        p = m * m + y * y > this.errorThresholdSquared_;
      }
      if (p) {
        if (Math.abs(e[0] - i[0]) <= Math.abs(e[1] - i[1])) {
          const v = [(n[0] + i[0]) / 2, (n[1] + i[1]) / 2],
            g = this.transformInv_(v),
            m = [(r[0] + e[0]) / 2, (r[1] + e[1]) / 2],
            y = this.transformInv_(m);
          this.addQuad_(e, n, v, m, s, o, g, y, u - 1),
            this.addQuad_(m, v, i, r, y, g, l, a, u - 1);
        } else {
          const v = [(e[0] + n[0]) / 2, (e[1] + n[1]) / 2],
            g = this.transformInv_(v),
            m = [(i[0] + r[0]) / 2, (i[1] + r[1]) / 2],
            y = this.transformInv_(m);
          this.addQuad_(e, v, m, r, s, g, y, a, u - 1),
            this.addQuad_(v, n, i, m, g, o, l, y, u - 1);
        }
        return;
      }
    }
    if (f) {
      if (!this.canWrapXInSource_) return;
      this.wrapsXInSource_ = !0;
    }
    _ & 11 || this.addTriangle_(e, i, r, s, l, a),
      _ & 14 || this.addTriangle_(e, i, n, s, l, o),
      _ &&
        (_ & 13 || this.addTriangle_(n, r, e, o, a, s),
        _ & 7 || this.addTriangle_(n, r, i, o, a, l));
  }
  calculateSourceExtent() {
    const e = Ft();
    return (
      this.triangles_.forEach(function (n, i, r) {
        const s = n.source;
        Us(e, s[0]), Us(e, s[1]), Us(e, s[2]);
      }),
      e
    );
  }
  getTriangles() {
    return this.triangles_;
  }
}
let $u;
const Wr = [];
function hm(t, e, n, i, r) {
  t.beginPath(),
    t.moveTo(0, 0),
    t.lineTo(e, n),
    t.lineTo(i, r),
    t.closePath(),
    t.save(),
    t.clip(),
    t.fillRect(0, 0, Math.max(e, i) + 1, Math.max(n, r)),
    t.restore();
}
function Hu(t, e) {
  return (
    Math.abs(t[e * 4] - 210) > 2 || Math.abs(t[e * 4 + 3] - 0.75 * 255) > 2
  );
}
function XC() {
  if ($u === void 0) {
    const t = Qe(6, 6, Wr);
    (t.globalCompositeOperation = "lighter"),
      (t.fillStyle = "rgba(210, 0, 0, 0.75)"),
      hm(t, 4, 5, 4, 0),
      hm(t, 4, 5, 0, 5);
    const e = t.getImageData(0, 0, 3, 3).data;
    ($u = Hu(e, 0) || Hu(e, 4) || Hu(e, 8)), Ha(t), Wr.push(t.canvas);
  }
  return $u;
}
function dm(t, e, n, i) {
  const r = wd(n, e, t);
  let s = Cg(e, i, n);
  const o = e.getMetersPerUnit();
  o !== void 0 && (s *= o);
  const l = t.getMetersPerUnit();
  l !== void 0 && (s /= l);
  const a = t.getExtent();
  if (!a || ba(a, r)) {
    const u = Cg(t, s, r) / s;
    isFinite(u) && u > 0 && (s /= u);
  }
  return s;
}
function BC(t, e, n, i) {
  const r = mi(n);
  let s = dm(t, e, r, i);
  return (
    (!isFinite(s) || s <= 0) &&
      z0(n, function (o) {
        return (s = dm(t, e, o, i)), isFinite(s) && s > 0;
      }),
    s
  );
}
function UC(t, e, n, i, r, s, o, l, a, u, c, h, d) {
  const f = Qe(Math.round(n * t), Math.round(n * e), Wr);
  if ((h || (f.imageSmoothingEnabled = !1), a.length === 0)) return f.canvas;
  f.scale(n, n);
  function p(m) {
    return Math.round(m * n) / n;
  }
  f.globalCompositeOperation = "lighter";
  const _ = Ft();
  a.forEach(function (m, y, E) {
    N0(_, m.extent);
  });
  let v;
  if (!d || a.length !== 1 || u !== 0) {
    const m = ae(_),
      y = xt(_);
    (v = Qe(Math.round((n * m) / i), Math.round((n * y) / i), Wr)),
      h || (v.imageSmoothingEnabled = !1);
    const E = n / i;
    a.forEach(function (x, w, S) {
      const T = x.extent[0] - _[0],
        A = -(x.extent[3] - _[3]),
        M = ae(x.extent),
        X = xt(x.extent);
      x.image.width > 0 &&
        x.image.height > 0 &&
        v.drawImage(
          x.image,
          u,
          u,
          x.image.width - 2 * u,
          x.image.height - 2 * u,
          T * E,
          A * E,
          M * E,
          X * E,
        );
    });
  }
  const g = Ji(o);
  return (
    l.getTriangles().forEach(function (m, y, E) {
      const x = m.source,
        w = m.target;
      let S = x[0][0],
        T = x[0][1],
        A = x[1][0],
        M = x[1][1],
        X = x[2][0],
        H = x[2][1];
      const B = p((w[0][0] - g[0]) / s),
        fe = p(-(w[0][1] - g[1]) / s),
        U = p((w[1][0] - g[0]) / s),
        z = p(-(w[1][1] - g[1]) / s),
        D = p((w[2][0] - g[0]) / s),
        R = p(-(w[2][1] - g[1]) / s),
        O = S,
        F = T;
      (S = 0), (T = 0), (A -= O), (M -= F), (X -= O), (H -= F);
      const Z = [
          [A, M, 0, 0, U - B],
          [X, H, 0, 0, D - B],
          [0, 0, A, M, z - fe],
          [0, 0, X, H, R - fe],
        ],
        I = Qv(Z);
      if (!I) return;
      if ((f.save(), f.beginPath(), XC() || !h)) {
        f.moveTo(U, z);
        const V = 4,
          ie = B - U,
          je = fe - z;
        for (let Se = 0; Se < V; Se++)
          f.lineTo(U + p(((Se + 1) * ie) / V), z + p((Se * je) / (V - 1))),
            Se != V - 1 &&
              f.lineTo(
                U + p(((Se + 1) * ie) / V),
                z + p(((Se + 1) * je) / (V - 1)),
              );
        f.lineTo(D, R);
      } else f.moveTo(U, z), f.lineTo(B, fe), f.lineTo(D, R);
      f.clip(),
        f.transform(I[0], I[2], I[1], I[3], B, fe),
        f.translate(_[0] - O, _[3] - F);
      let ye;
      if (v) (ye = v.canvas), f.scale(i / n, -i / n);
      else {
        const V = a[0],
          ie = V.extent;
        (ye = V.image), f.scale(ae(ie) / ye.width, -xt(ie) / ye.height);
      }
      f.drawImage(ye, 0, 0), f.restore();
    }),
    v && (Ha(v), Wr.push(v.canvas)),
    c &&
      (f.save(),
      (f.globalCompositeOperation = "source-over"),
      (f.strokeStyle = "black"),
      (f.lineWidth = 1),
      l.getTriangles().forEach(function (m, y, E) {
        const x = m.target,
          w = (x[0][0] - g[0]) / s,
          S = -(x[0][1] - g[1]) / s,
          T = (x[1][0] - g[0]) / s,
          A = -(x[1][1] - g[1]) / s,
          M = (x[2][0] - g[0]) / s,
          X = -(x[2][1] - g[1]) / s;
        f.beginPath(),
          f.moveTo(T, A),
          f.lineTo(w, S),
          f.lineTo(M, X),
          f.closePath(),
          f.stroke();
      }),
      f.restore()),
    f.canvas
  );
}
class mh extends M_ {
  constructor(e, n, i, r, s, o, l, a, u, c, h, d) {
    super(s, b.IDLE, d),
      (this.renderEdges_ = h !== void 0 ? h : !1),
      (this.pixelRatio_ = l),
      (this.gutter_ = a),
      (this.canvas_ = null),
      (this.sourceTileGrid_ = n),
      (this.targetTileGrid_ = r),
      (this.wrappedTileCoord_ = o || s),
      (this.sourceTiles_ = []),
      (this.sourcesListenerKeys_ = null),
      (this.sourceZ_ = 0);
    const f = r.getTileCoordExtent(this.wrappedTileCoord_),
      p = this.targetTileGrid_.getExtent();
    let _ = this.sourceTileGrid_.getExtent();
    const v = p ? Ys(f, p) : f;
    if (Qc(v) === 0) {
      this.state = b.EMPTY;
      return;
    }
    const g = e.getExtent();
    g && (_ ? (_ = Ys(_, g)) : (_ = g));
    const m = r.getResolution(this.wrappedTileCoord_[0]),
      y = BC(e, i, v, m);
    if (!isFinite(y) || y <= 0) {
      this.state = b.EMPTY;
      return;
    }
    const E = c !== void 0 ? c : GC;
    if (
      ((this.triangulation_ = new WC(e, i, v, _, y * E, m)),
      this.triangulation_.getTriangles().length === 0)
    ) {
      this.state = b.EMPTY;
      return;
    }
    this.sourceZ_ = n.getZForResolution(y);
    let x = this.triangulation_.calculateSourceExtent();
    if (
      (_ &&
        (e.canWrapX()
          ? ((x[1] = Re(x[1], _[1], _[3])), (x[3] = Re(x[3], _[1], _[3])))
          : (x = Ys(x, _))),
      !Qc(x))
    )
      this.state = b.EMPTY;
    else {
      const w = n.getTileRangeForExtentAndZ(x, this.sourceZ_);
      for (let S = w.minX; S <= w.maxX; S++)
        for (let T = w.minY; T <= w.maxY; T++) {
          const A = u(this.sourceZ_, S, T, l);
          A && this.sourceTiles_.push(A);
        }
      this.sourceTiles_.length === 0 && (this.state = b.EMPTY);
    }
  }
  getImage() {
    return this.canvas_;
  }
  reproject_() {
    const e = [];
    if (
      (this.sourceTiles_.forEach((n) => {
        n &&
          n.getState() == b.LOADED &&
          e.push({
            extent: this.sourceTileGrid_.getTileCoordExtent(n.tileCoord),
            image: n.getImage(),
          });
      }),
      (this.sourceTiles_.length = 0),
      e.length === 0)
    )
      this.state = b.ERROR;
    else {
      const n = this.wrappedTileCoord_[0],
        i = this.targetTileGrid_.getTileSize(n),
        r = typeof i == "number" ? i : i[0],
        s = typeof i == "number" ? i : i[1],
        o = this.targetTileGrid_.getResolution(n),
        l = this.sourceTileGrid_.getResolution(this.sourceZ_),
        a = this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);
      (this.canvas_ = UC(
        r,
        s,
        this.pixelRatio_,
        l,
        this.sourceTileGrid_.getExtent(),
        o,
        a,
        this.triangulation_,
        e,
        this.gutter_,
        this.renderEdges_,
        this.interpolate,
      )),
        (this.state = b.LOADED);
    }
    this.changed();
  }
  load() {
    if (this.state == b.IDLE) {
      (this.state = b.LOADING), this.changed();
      let e = 0;
      (this.sourcesListenerKeys_ = []),
        this.sourceTiles_.forEach((n) => {
          const i = n.getState();
          if (i == b.IDLE || i == b.LOADING) {
            e++;
            const r = Q(
              n,
              K.CHANGE,
              function (s) {
                const o = n.getState();
                (o == b.LOADED || o == b.ERROR || o == b.EMPTY) &&
                  (ce(r),
                  e--,
                  e === 0 && (this.unlistenSources_(), this.reproject_()));
              },
              this,
            );
            this.sourcesListenerKeys_.push(r);
          }
        }),
        e === 0
          ? setTimeout(this.reproject_.bind(this), 0)
          : this.sourceTiles_.forEach(function (n, i, r) {
              n.getState() == b.IDLE && n.load();
            });
    }
  }
  unlistenSources_() {
    this.sourcesListenerKeys_.forEach(ce), (this.sourcesListenerKeys_ = null);
  }
  release() {
    this.canvas_ &&
      (Ha(this.canvas_.getContext("2d")),
      Wr.push(this.canvas_),
      (this.canvas_ = null)),
      super.release();
  }
}
class YC extends T_ {
  constructor(e) {
    super(e),
      (this.extentChanged = !0),
      (this.renderedExtent_ = null),
      this.renderedPixelRatio,
      (this.renderedProjection = null),
      this.renderedRevision,
      (this.renderedTiles = []),
      (this.newTiles_ = !1),
      (this.tmpExtent = Ft()),
      (this.tmpTileRange_ = new Kd(0, 0, 0, 0));
  }
  isDrawableTile(e) {
    const n = this.getLayer(),
      i = e.getState(),
      r = n.getUseInterimTilesOnError();
    return i == b.LOADED || i == b.EMPTY || (i == b.ERROR && !r);
  }
  getTile(e, n, i, r) {
    const s = r.pixelRatio,
      o = r.viewState.projection,
      l = this.getLayer();
    let u = l.getSource().getTile(e, n, i, s, o);
    return (
      u.getState() == b.ERROR &&
        l.getUseInterimTilesOnError() &&
        l.getPreload() > 0 &&
        (this.newTiles_ = !0),
      this.isDrawableTile(u) || (u = u.getInterimTile()),
      u
    );
  }
  getData(e) {
    const n = this.frameState;
    if (!n) return null;
    const i = this.getLayer(),
      r = Me(n.pixelToCoordinateTransform, e.slice()),
      s = i.getExtent();
    if (s && !ba(s, r)) return null;
    const o = n.pixelRatio,
      l = n.viewState.projection,
      a = n.viewState,
      u = i.getRenderSource(),
      c = u.getTileGridForProjection(a.projection),
      h = u.getTilePixelRatio(n.pixelRatio);
    for (let d = c.getZForResolution(a.resolution); d >= c.getMinZoom(); --d) {
      const f = c.getTileCoordForCoordAndZ(r, d),
        p = u.getTile(d, f[1], f[2], o, l);
      if (
        !(p instanceof O_ || p instanceof mh) ||
        (p instanceof mh && p.getState() === b.EMPTY)
      )
        return null;
      if (p.getState() !== b.LOADED) continue;
      const _ = c.getOrigin(d),
        v = vt(c.getTileSize(d)),
        g = c.getResolution(d),
        m = Math.floor(h * ((r[0] - _[0]) / g - f[1] * v[0])),
        y = Math.floor(h * ((_[1] - r[1]) / g - f[2] * v[1])),
        E = Math.round(h * u.getGutterForProjection(a.projection));
      return this.getImageData(p.getImage(), m + E, y + E);
    }
    return null;
  }
  loadedTileCallback(e, n, i) {
    return this.isDrawableTile(i) ? super.loadedTileCallback(e, n, i) : !1;
  }
  prepareFrame(e) {
    return !!this.getLayer().getSource();
  }
  renderFrame(e, n) {
    const i = e.layerStatesArray[e.layerIndex],
      r = e.viewState,
      s = r.projection,
      o = r.resolution,
      l = r.center,
      a = r.rotation,
      u = e.pixelRatio,
      c = this.getLayer(),
      h = c.getSource(),
      d = h.getRevision(),
      f = h.getTileGridForProjection(s),
      p = f.getZForResolution(o, h.zDirection),
      _ = f.getResolution(p);
    let v = e.extent;
    const g = e.viewState.resolution,
      m = h.getTilePixelRatio(u),
      y = Math.round((ae(v) / g) * u),
      E = Math.round((xt(v) / g) * u),
      x = i.extent && zi(i.extent, s);
    x && (v = Ys(v, zi(i.extent, s)));
    const w = (_ * y) / 2 / m,
      S = (_ * E) / 2 / m,
      T = [l[0] - w, l[1] - S, l[0] + w, l[1] + S],
      A = f.getTileRangeForExtentAndZ(v, p),
      M = {};
    M[p] = {};
    const X = this.createLoadedTileFinder(h, s, M),
      H = this.tmpExtent,
      B = this.tmpTileRange_;
    this.newTiles_ = !1;
    const fe = a ? eh(r.center, g, a, e.size) : void 0;
    for (let ye = A.minX; ye <= A.maxX; ++ye)
      for (let V = A.minY; V <= A.maxY; ++V) {
        if (a && !f.tileCoordIntersectsViewport([p, ye, V], fe)) continue;
        const ie = this.getTile(p, ye, V, e);
        if (this.isDrawableTile(ie)) {
          const un = ne(this);
          if (ie.getState() == b.LOADED) {
            M[p][ie.tileCoord.toString()] = ie;
            let cn = ie.inTransition(un);
            cn && i.opacity !== 1 && (ie.endTransition(un), (cn = !1)),
              !this.newTiles_ &&
                (cn || !this.renderedTiles.includes(ie)) &&
                (this.newTiles_ = !0);
          }
          if (ie.getAlpha(un, e.time) === 1) continue;
        }
        const je = f.getTileCoordChildTileRange(ie.tileCoord, B, H);
        let Se = !1;
        je && (Se = X(p + 1, je)),
          Se || f.forEachTileCoordParentTileRange(ie.tileCoord, X, B, H);
      }
    const U = ((_ / o) * u) / m;
    Ln(
      this.pixelTransform,
      e.size[0] / 2,
      e.size[1] / 2,
      1 / u,
      1 / u,
      a,
      -y / 2,
      -E / 2,
    );
    const z = O0(this.pixelTransform);
    this.useContainer(n, z, this.getBackground(e));
    const D = this.context,
      R = D.canvas;
    gd(this.inversePixelTransform, this.pixelTransform),
      Ln(this.tempTransform, y / 2, E / 2, U, U, 0, -y / 2, -E / 2),
      R.width != y || R.height != E
        ? ((R.width = y), (R.height = E))
        : this.containerReused || D.clearRect(0, 0, y, E),
      x && this.clipUnrotated(D, e, x),
      h.getInterpolate() || (D.imageSmoothingEnabled = !1),
      this.preRender(D, e),
      (this.renderedTiles.length = 0);
    let O = Object.keys(M).map(Number);
    O.sort(fi);
    let F, Z, I;
    i.opacity === 1 &&
    (!this.containerReused || h.getOpaque(e.viewState.projection))
      ? (O = O.reverse())
      : ((F = []), (Z = []));
    for (let ye = O.length - 1; ye >= 0; --ye) {
      const V = O[ye],
        ie = h.getTilePixelSize(V, u, s),
        Se = f.getResolution(V) / _,
        un = ie[0] * Se * U,
        cn = ie[1] * Se * U,
        ir = f.getTileCoordForCoordAndZ(Ji(T), V),
        jo = f.getTileCoordExtent(ir),
        rr = Me(this.tempTransform, [
          (m * (jo[0] - T[0])) / _,
          (m * (T[3] - jo[3])) / _,
        ]),
        Go = m * h.getGutterForProjection(s),
        Dn = M[V];
      for (const cs in Dn) {
        const zn = Dn[cs],
          bo = zn.tileCoord,
          Wo = ir[1] - bo[1],
          Xo = Math.round(rr[0] - (Wo - 1) * un),
          sr = ir[2] - bo[2],
          ou = Math.round(rr[1] - (sr - 1) * cn),
          tt = Math.round(rr[0] - Wo * un),
          Tt = Math.round(rr[1] - sr * cn),
          zt = Xo - tt,
          hn = ou - Tt,
          or = p === V,
          Ti = or && zn.getAlpha(ne(this), e.time) !== 1;
        let jn = !1;
        if (!Ti)
          if (F) {
            I = [tt, Tt, tt + zt, Tt, tt + zt, Tt + hn, tt, Tt + hn];
            for (let lr = 0, Bo = F.length; lr < Bo; ++lr)
              if (p !== V && V < Z[lr]) {
                const $e = F[lr];
                at([tt, Tt, tt + zt, Tt + hn], [$e[0], $e[3], $e[4], $e[7]]) &&
                  (jn || (D.save(), (jn = !0)),
                  D.beginPath(),
                  D.moveTo(I[0], I[1]),
                  D.lineTo(I[2], I[3]),
                  D.lineTo(I[4], I[5]),
                  D.lineTo(I[6], I[7]),
                  D.moveTo($e[6], $e[7]),
                  D.lineTo($e[4], $e[5]),
                  D.lineTo($e[2], $e[3]),
                  D.lineTo($e[0], $e[1]),
                  D.clip());
              }
            F.push(I), Z.push(V);
          } else D.clearRect(tt, Tt, zt, hn);
        this.drawTileImage(zn, e, tt, Tt, zt, hn, Go, or),
          F && !Ti
            ? (jn && D.restore(), this.renderedTiles.unshift(zn))
            : this.renderedTiles.push(zn),
          this.updateUsedTiles(e.usedTiles, h, zn);
      }
    }
    return (
      (this.renderedRevision = d),
      (this.renderedResolution = _),
      (this.extentChanged =
        !this.renderedExtent_ || !co(this.renderedExtent_, T)),
      (this.renderedExtent_ = T),
      (this.renderedPixelRatio = u),
      (this.renderedProjection = s),
      this.manageTilePyramid(e, h, f, u, s, v, p, c.getPreload()),
      this.scheduleExpireCache(e, h),
      this.postRender(D, e),
      i.extent && D.restore(),
      (D.imageSmoothingEnabled = !0),
      z !== R.style.transform && (R.style.transform = z),
      this.container
    );
  }
  drawTileImage(e, n, i, r, s, o, l, a) {
    const u = this.getTileImage(e);
    if (!u) return;
    const c = ne(this),
      h = n.layerStatesArray[n.layerIndex],
      d = h.opacity * (a ? e.getAlpha(c, n.time) : 1),
      f = d !== this.context.globalAlpha;
    f && (this.context.save(), (this.context.globalAlpha = d)),
      this.context.drawImage(
        u,
        l,
        l,
        u.width - 2 * l,
        u.height - 2 * l,
        i,
        r,
        s,
        o,
      ),
      f && this.context.restore(),
      d !== h.opacity ? (n.animate = !0) : a && e.endTransition(c);
  }
  getImage() {
    const e = this.context;
    return e ? e.canvas : null;
  }
  getTileImage(e) {
    return e.getImage();
  }
  scheduleExpireCache(e, n) {
    if (n.canExpireCache()) {
      const i = function (r, s, o) {
        const l = ne(r);
        l in o.usedTiles &&
          r.expireCache(o.viewState.projection, o.usedTiles[l]);
      }.bind(null, n);
      e.postRenderFunctions.push(i);
    }
  }
  updateUsedTiles(e, n, i) {
    const r = ne(n);
    r in e || (e[r] = {}), (e[r][i.getKey()] = !0);
  }
  manageTilePyramid(e, n, i, r, s, o, l, a, u) {
    const c = ne(n);
    c in e.wantedTiles || (e.wantedTiles[c] = {});
    const h = e.wantedTiles[c],
      d = e.tileQueue,
      f = i.getMinZoom(),
      p = e.viewState.rotation,
      _ = p
        ? eh(e.viewState.center, e.viewState.resolution, p, e.size)
        : void 0;
    let v = 0,
      g,
      m,
      y,
      E,
      x,
      w;
    for (w = f; w <= l; ++w)
      for (
        m = i.getTileRangeForExtentAndZ(o, w, m),
          y = i.getResolution(w),
          E = m.minX;
        E <= m.maxX;
        ++E
      )
        for (x = m.minY; x <= m.maxY; ++x)
          (p && !i.tileCoordIntersectsViewport([w, E, x], _)) ||
            (l - w <= a
              ? (++v,
                (g = n.getTile(w, E, x, r, s)),
                g.getState() == b.IDLE &&
                  ((h[g.getKey()] = !0),
                  d.isKeyQueued(g.getKey()) ||
                    d.enqueue([g, c, i.getTileCoordCenter(g.tileCoord), y])),
                u !== void 0 && u(g))
              : n.useTile(w, E, x, s));
    n.updateCacheSize(v, s);
  }
}
class VC extends jC {
  constructor(e) {
    super(e);
  }
  createRenderer() {
    return new YC(this);
  }
}
const xa = VC,
  qu = {
    TILELOADSTART: "tileloadstart",
    TILELOADEND: "tileloadend",
    TILELOADERROR: "tileloaderror",
  },
  gr = [0, 0, 0],
  Bn = 5;
class KC {
  constructor(e) {
    (this.minZoom = e.minZoom !== void 0 ? e.minZoom : 0),
      (this.resolutions_ = e.resolutions),
      ee(
        Sv(this.resolutions_, (r, s) => s - r, !0),
        "`resolutions` must be sorted in descending order",
      );
    let n;
    if (!e.origins) {
      for (let r = 0, s = this.resolutions_.length - 1; r < s; ++r)
        if (!n) n = this.resolutions_[r] / this.resolutions_[r + 1];
        else if (this.resolutions_[r] / this.resolutions_[r + 1] !== n) {
          n = void 0;
          break;
        }
    }
    (this.zoomFactor_ = n),
      (this.maxZoom = this.resolutions_.length - 1),
      (this.origin_ = e.origin !== void 0 ? e.origin : null),
      (this.origins_ = null),
      e.origins !== void 0 &&
        ((this.origins_ = e.origins),
        ee(
          this.origins_.length == this.resolutions_.length,
          "Number of `origins` and `resolutions` must be equal",
        ));
    const i = e.extent;
    i !== void 0 && !this.origin_ && !this.origins_ && (this.origin_ = Ji(i)),
      ee(
        (!this.origin_ && this.origins_) || (this.origin_ && !this.origins_),
        "Either `origin` or `origins` must be configured, never both",
      ),
      (this.tileSizes_ = null),
      e.tileSizes !== void 0 &&
        ((this.tileSizes_ = e.tileSizes),
        ee(
          this.tileSizes_.length == this.resolutions_.length,
          "Number of `tileSizes` and `resolutions` must be equal",
        )),
      (this.tileSize_ =
        e.tileSize !== void 0 ? e.tileSize : this.tileSizes_ ? null : Dd),
      ee(
        (!this.tileSize_ && this.tileSizes_) ||
          (this.tileSize_ && !this.tileSizes_),
        "Either `tileSize` or `tileSizes` must be configured, never both",
      ),
      (this.extent_ = i !== void 0 ? i : null),
      (this.fullTileRanges_ = null),
      (this.tmpSize_ = [0, 0]),
      (this.tmpExtent_ = [0, 0, 0, 0]),
      e.sizes !== void 0
        ? (this.fullTileRanges_ = e.sizes.map((r, s) => {
            const o = new Kd(
              Math.min(0, r[0]),
              Math.max(r[0] - 1, -1),
              Math.min(0, r[1]),
              Math.max(r[1] - 1, -1),
            );
            if (i) {
              const l = this.getTileRangeForExtentAndZ(i, s);
              (o.minX = Math.max(l.minX, o.minX)),
                (o.maxX = Math.min(l.maxX, o.maxX)),
                (o.minY = Math.max(l.minY, o.minY)),
                (o.maxY = Math.min(l.maxY, o.maxY));
            }
            return o;
          }))
        : i && this.calculateTileRanges_(i);
  }
  forEachTileCoord(e, n, i) {
    const r = this.getTileRangeForExtentAndZ(e, n);
    for (let s = r.minX, o = r.maxX; s <= o; ++s)
      for (let l = r.minY, a = r.maxY; l <= a; ++l) i([n, s, l]);
  }
  forEachTileCoordParentTileRange(e, n, i, r) {
    let s,
      o,
      l,
      a = null,
      u = e[0] - 1;
    for (
      this.zoomFactor_ === 2
        ? ((o = e[1]), (l = e[2]))
        : (a = this.getTileCoordExtent(e, r));
      u >= this.minZoom;

    ) {
      if (
        (o !== void 0 && l !== void 0
          ? ((o = Math.floor(o / 2)),
            (l = Math.floor(l / 2)),
            (s = fr(o, o, l, l, i)))
          : (s = this.getTileRangeForExtentAndZ(a, u, i)),
        n(u, s))
      )
        return !0;
      --u;
    }
    return !1;
  }
  getExtent() {
    return this.extent_;
  }
  getMaxZoom() {
    return this.maxZoom;
  }
  getMinZoom() {
    return this.minZoom;
  }
  getOrigin(e) {
    return this.origin_ ? this.origin_ : this.origins_[e];
  }
  getResolution(e) {
    return this.resolutions_[e];
  }
  getResolutions() {
    return this.resolutions_;
  }
  getTileCoordChildTileRange(e, n, i) {
    if (e[0] < this.maxZoom) {
      if (this.zoomFactor_ === 2) {
        const s = e[1] * 2,
          o = e[2] * 2;
        return fr(s, s + 1, o, o + 1, n);
      }
      const r = this.getTileCoordExtent(e, i || this.tmpExtent_);
      return this.getTileRangeForExtentAndZ(r, e[0] + 1, n);
    }
    return null;
  }
  getTileRangeForTileCoordAndZ(e, n, i) {
    if (n > this.maxZoom || n < this.minZoom) return null;
    const r = e[0],
      s = e[1],
      o = e[2];
    if (n === r) return fr(s, o, s, o, i);
    if (this.zoomFactor_) {
      const a = Math.pow(this.zoomFactor_, n - r),
        u = Math.floor(s * a),
        c = Math.floor(o * a);
      if (n < r) return fr(u, u, c, c, i);
      const h = Math.floor(a * (s + 1)) - 1,
        d = Math.floor(a * (o + 1)) - 1;
      return fr(u, h, c, d, i);
    }
    const l = this.getTileCoordExtent(e, this.tmpExtent_);
    return this.getTileRangeForExtentAndZ(l, n, i);
  }
  getTileRangeForExtentAndZ(e, n, i) {
    this.getTileCoordForXYAndZ_(e[0], e[3], n, !1, gr);
    const r = gr[1],
      s = gr[2];
    this.getTileCoordForXYAndZ_(e[2], e[1], n, !0, gr);
    const o = gr[1],
      l = gr[2];
    return fr(r, o, s, l, i);
  }
  getTileCoordCenter(e) {
    const n = this.getOrigin(e[0]),
      i = this.getResolution(e[0]),
      r = vt(this.getTileSize(e[0]), this.tmpSize_);
    return [n[0] + (e[1] + 0.5) * r[0] * i, n[1] - (e[2] + 0.5) * r[1] * i];
  }
  getTileCoordExtent(e, n) {
    const i = this.getOrigin(e[0]),
      r = this.getResolution(e[0]),
      s = vt(this.getTileSize(e[0]), this.tmpSize_),
      o = i[0] + e[1] * s[0] * r,
      l = i[1] - (e[2] + 1) * s[1] * r,
      a = o + s[0] * r,
      u = l + s[1] * r;
    return Mn(o, l, a, u, n);
  }
  getTileCoordForCoordAndResolution(e, n, i) {
    return this.getTileCoordForXYAndResolution_(e[0], e[1], n, !1, i);
  }
  getTileCoordForXYAndResolution_(e, n, i, r, s) {
    const o = this.getZForResolution(i),
      l = i / this.getResolution(o),
      a = this.getOrigin(o),
      u = vt(this.getTileSize(o), this.tmpSize_);
    let c = (l * (e - a[0])) / i / u[0],
      h = (l * (a[1] - n)) / i / u[1];
    return (
      r
        ? ((c = dl(c, Bn) - 1), (h = dl(h, Bn) - 1))
        : ((c = hl(c, Bn)), (h = hl(h, Bn))),
      um(o, c, h, s)
    );
  }
  getTileCoordForXYAndZ_(e, n, i, r, s) {
    const o = this.getOrigin(i),
      l = this.getResolution(i),
      a = vt(this.getTileSize(i), this.tmpSize_);
    let u = (e - o[0]) / l / a[0],
      c = (o[1] - n) / l / a[1];
    return (
      r
        ? ((u = dl(u, Bn) - 1), (c = dl(c, Bn) - 1))
        : ((u = hl(u, Bn)), (c = hl(c, Bn))),
      um(i, u, c, s)
    );
  }
  getTileCoordForCoordAndZ(e, n, i) {
    return this.getTileCoordForXYAndZ_(e[0], e[1], n, !1, i);
  }
  getTileCoordResolution(e) {
    return this.resolutions_[e[0]];
  }
  getTileSize(e) {
    return this.tileSize_ ? this.tileSize_ : this.tileSizes_[e];
  }
  getFullTileRange(e) {
    return this.fullTileRanges_
      ? this.fullTileRanges_[e]
      : this.extent_
        ? this.getTileRangeForExtentAndZ(this.extent_, e)
        : null;
  }
  getZForResolution(e, n) {
    const i = dd(this.resolutions_, e, n || 0);
    return Re(i, this.minZoom, this.maxZoom);
  }
  tileCoordIntersectsViewport(e, n) {
    return J0(n, 0, n.length, 2, this.getTileCoordExtent(e));
  }
  calculateTileRanges_(e) {
    const n = this.resolutions_.length,
      i = new Array(n);
    for (let r = this.minZoom; r < n; ++r)
      i[r] = this.getTileRangeForExtentAndZ(e, r);
    this.fullTileRanges_ = i;
  }
}
const W_ = KC;
function X_(t) {
  let e = t.getDefaultTileGrid();
  return e || ((e = qC(t)), t.setDefaultTileGrid(e)), e;
}
function ZC(t, e, n) {
  const i = e[0],
    r = t.getTileCoordCenter(e),
    s = Zd(n);
  if (!ba(s, r)) {
    const o = ae(s),
      l = Math.ceil((s[0] - r[0]) / o);
    return (r[0] += o * l), t.getTileCoordForCoordAndZ(r, i);
  }
  return e;
}
function $C(t, e, n, i) {
  i = i !== void 0 ? i : "top-left";
  const r = B_(t, e, n);
  return new W_({ extent: t, origin: zv(t, i), resolutions: r, tileSize: n });
}
function HC(t) {
  const e = t || {},
    n = e.extent || xe("EPSG:3857").getExtent(),
    i = {
      extent: n,
      minZoom: e.minZoom,
      tileSize: e.tileSize,
      resolutions: B_(n, e.maxZoom, e.tileSize, e.maxResolution),
    };
  return new W_(i);
}
function B_(t, e, n, i) {
  (e = e !== void 0 ? e : ZE), (n = vt(n !== void 0 ? n : Dd));
  const r = xt(t),
    s = ae(t);
  i = i > 0 ? i : Math.max(s / n[0], r / n[1]);
  const o = e + 1,
    l = new Array(o);
  for (let a = 0; a < o; ++a) l[a] = i / Math.pow(2, a);
  return l;
}
function qC(t, e, n, i) {
  const r = Zd(t);
  return $C(r, e, n, i);
}
function Zd(t) {
  t = xe(t);
  let e = t.getExtent();
  if (!e) {
    const n = (180 * ho.degrees) / t.getMetersPerUnit();
    e = Mn(-n, -n, n, n);
  }
  return e;
}
class QC extends L_ {
  constructor(e) {
    super({
      attributions: e.attributions,
      attributionsCollapsible: e.attributionsCollapsible,
      projection: e.projection,
      state: e.state,
      wrapX: e.wrapX,
      interpolate: e.interpolate,
    }),
      this.on,
      this.once,
      this.un,
      (this.opaque_ = e.opaque !== void 0 ? e.opaque : !1),
      (this.tilePixelRatio_ =
        e.tilePixelRatio !== void 0 ? e.tilePixelRatio : 1),
      (this.tileGrid = e.tileGrid !== void 0 ? e.tileGrid : null);
    const n = [256, 256];
    this.tileGrid &&
      vt(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()), n),
      (this.tileCache = new b_(e.cacheSize || 0)),
      (this.tmpSize = [0, 0]),
      (this.key_ = e.key || ""),
      (this.tileOptions = {
        transition: e.transition,
        interpolate: e.interpolate,
      }),
      (this.zDirection = e.zDirection ? e.zDirection : 0);
  }
  canExpireCache() {
    return this.tileCache.canExpireCache();
  }
  expireCache(e, n) {
    const i = this.getTileCacheForProjection(e);
    i && i.expireCache(n);
  }
  forEachLoadedTile(e, n, i, r) {
    const s = this.getTileCacheForProjection(e);
    if (!s) return !1;
    let o = !0,
      l,
      a,
      u;
    for (let c = i.minX; c <= i.maxX; ++c)
      for (let h = i.minY; h <= i.maxY; ++h)
        (a = ru(n, c, h)),
          (u = !1),
          s.containsKey(a) &&
            ((l = s.get(a)),
            (u = l.getState() === b.LOADED),
            u && (u = r(l) !== !1)),
          u || (o = !1);
    return o;
  }
  getGutterForProjection(e) {
    return 0;
  }
  getKey() {
    return this.key_;
  }
  setKey(e) {
    this.key_ !== e && ((this.key_ = e), this.changed());
  }
  getOpaque(e) {
    return this.opaque_;
  }
  getResolutions(e) {
    const n = e ? this.getTileGridForProjection(e) : this.tileGrid;
    return n ? n.getResolutions() : null;
  }
  getTile(e, n, i, r, s) {
    return W();
  }
  getTileGrid() {
    return this.tileGrid;
  }
  getTileGridForProjection(e) {
    return this.tileGrid ? this.tileGrid : X_(e);
  }
  getTileCacheForProjection(e) {
    const n = this.getProjection();
    return (
      ee(
        n === null || Oi(n, e),
        "A VectorTile source can only be rendered if it has a projection compatible with the view projection.",
      ),
      this.tileCache
    );
  }
  getTilePixelRatio(e) {
    return this.tilePixelRatio_;
  }
  getTilePixelSize(e, n, i) {
    const r = this.getTileGridForProjection(i),
      s = this.getTilePixelRatio(n),
      o = vt(r.getTileSize(e), this.tmpSize);
    return s == 1 ? o : IE(o, s, this.tmpSize);
  }
  getTileCoordForTileUrlFunction(e, n) {
    n = n !== void 0 ? n : this.getProjection();
    const i = this.getTileGridForProjection(n);
    return (
      this.getWrapX() && n.isGlobal() && (e = ZC(i, e, n)), zC(e, i) ? e : null
    );
  }
  clear() {
    this.tileCache.clear();
  }
  refresh() {
    this.clear(), super.refresh();
  }
  updateCacheSize(e, n) {
    const i = this.getTileCacheForProjection(n);
    e > i.highWaterMark && (i.highWaterMark = e);
  }
  useTile(e, n, i, r) {}
}
class JC extends Nn {
  constructor(e, n) {
    super(e), (this.tile = n);
  }
}
function eS(t, e) {
  const n = /\{z\}/g,
    i = /\{x\}/g,
    r = /\{y\}/g,
    s = /\{-y\}/g;
  return function (o, l, a) {
    if (o)
      return t
        .replace(n, o[0].toString())
        .replace(i, o[1].toString())
        .replace(r, o[2].toString())
        .replace(s, function () {
          const u = o[0],
            c = e.getFullTileRange(u);
          if (!c)
            throw new Error(
              "The {-y} placeholder requires a tile grid with extent",
            );
          return (c.getHeight() - o[2] - 1).toString();
        });
  };
}
function tS(t, e) {
  const n = t.length,
    i = new Array(n);
  for (let r = 0; r < n; ++r) i[r] = eS(t[r], e);
  return nS(i);
}
function nS(t) {
  return t.length === 1
    ? t[0]
    : function (e, n, i) {
        if (!e) return;
        const r = DC(e),
          s = br(r, t.length);
        return t[s](e, n, i);
      };
}
function iS(t) {
  const e = [];
  let n = /\{([a-z])-([a-z])\}/.exec(t);
  if (n) {
    const i = n[1].charCodeAt(0),
      r = n[2].charCodeAt(0);
    let s;
    for (s = i; s <= r; ++s) e.push(t.replace(n[0], String.fromCharCode(s)));
    return e;
  }
  if (((n = /\{(\d+)-(\d+)\}/.exec(t)), n)) {
    const i = parseInt(n[2], 10);
    for (let r = parseInt(n[1], 10); r <= i; r++)
      e.push(t.replace(n[0], r.toString()));
    return e;
  }
  return e.push(t), e;
}
class $d extends QC {
  constructor(e) {
    super({
      attributions: e.attributions,
      cacheSize: e.cacheSize,
      opaque: e.opaque,
      projection: e.projection,
      state: e.state,
      tileGrid: e.tileGrid,
      tilePixelRatio: e.tilePixelRatio,
      wrapX: e.wrapX,
      transition: e.transition,
      interpolate: e.interpolate,
      key: e.key,
      attributionsCollapsible: e.attributionsCollapsible,
      zDirection: e.zDirection,
    }),
      (this.generateTileUrlFunction_ =
        this.tileUrlFunction === $d.prototype.tileUrlFunction),
      (this.tileLoadFunction = e.tileLoadFunction),
      e.tileUrlFunction && (this.tileUrlFunction = e.tileUrlFunction),
      (this.urls = null),
      e.urls ? this.setUrls(e.urls) : e.url && this.setUrl(e.url),
      (this.tileLoadingKeys_ = {});
  }
  getTileLoadFunction() {
    return this.tileLoadFunction;
  }
  getTileUrlFunction() {
    return Object.getPrototypeOf(this).tileUrlFunction === this.tileUrlFunction
      ? this.tileUrlFunction.bind(this)
      : this.tileUrlFunction;
  }
  getUrls() {
    return this.urls;
  }
  handleTileChange(e) {
    const n = e.target,
      i = ne(n),
      r = n.getState();
    let s;
    r == b.LOADING
      ? ((this.tileLoadingKeys_[i] = !0), (s = qu.TILELOADSTART))
      : i in this.tileLoadingKeys_ &&
        (delete this.tileLoadingKeys_[i],
        (s =
          r == b.ERROR
            ? qu.TILELOADERROR
            : r == b.LOADED
              ? qu.TILELOADEND
              : void 0)),
      s != null && this.dispatchEvent(new JC(s, n));
  }
  setTileLoadFunction(e) {
    this.tileCache.clear(), (this.tileLoadFunction = e), this.changed();
  }
  setTileUrlFunction(e, n) {
    (this.tileUrlFunction = e),
      this.tileCache.pruneExceptNewestZ(),
      typeof n < "u" ? this.setKey(n) : this.changed();
  }
  setUrl(e) {
    const n = iS(e);
    (this.urls = n), this.setUrls(n);
  }
  setUrls(e) {
    this.urls = e;
    const n = e.join(`
`);
    this.generateTileUrlFunction_
      ? this.setTileUrlFunction(tS(e, this.tileGrid), n)
      : this.setKey(n);
  }
  tileUrlFunction(e, n, i) {}
  useTile(e, n, i) {
    const r = ru(e, n, i);
    this.tileCache.containsKey(r) && this.tileCache.get(r);
  }
}
class rS extends $d {
  constructor(e) {
    super({
      attributions: e.attributions,
      cacheSize: e.cacheSize,
      opaque: e.opaque,
      projection: e.projection,
      state: e.state,
      tileGrid: e.tileGrid,
      tileLoadFunction: e.tileLoadFunction ? e.tileLoadFunction : sS,
      tilePixelRatio: e.tilePixelRatio,
      tileUrlFunction: e.tileUrlFunction,
      url: e.url,
      urls: e.urls,
      wrapX: e.wrapX,
      transition: e.transition,
      interpolate: e.interpolate !== void 0 ? e.interpolate : !0,
      key: e.key,
      attributionsCollapsible: e.attributionsCollapsible,
      zDirection: e.zDirection,
    }),
      (this.crossOrigin = e.crossOrigin !== void 0 ? e.crossOrigin : null),
      (this.tileClass = e.tileClass !== void 0 ? e.tileClass : O_),
      (this.tileCacheForProjection = {}),
      (this.tileGridForProjection = {}),
      (this.reprojectionErrorThreshold_ = e.reprojectionErrorThreshold),
      (this.renderReprojectionEdges_ = !1);
  }
  canExpireCache() {
    if (this.tileCache.canExpireCache()) return !0;
    for (const e in this.tileCacheForProjection)
      if (this.tileCacheForProjection[e].canExpireCache()) return !0;
    return !1;
  }
  expireCache(e, n) {
    const i = this.getTileCacheForProjection(e);
    this.tileCache.expireCache(this.tileCache == i ? n : {});
    for (const r in this.tileCacheForProjection) {
      const s = this.tileCacheForProjection[r];
      s.expireCache(s == i ? n : {});
    }
  }
  getGutterForProjection(e) {
    return this.getProjection() && e && !Oi(this.getProjection(), e)
      ? 0
      : this.getGutter();
  }
  getGutter() {
    return 0;
  }
  getKey() {
    let e = super.getKey();
    return this.getInterpolate() || (e += ":disable-interpolation"), e;
  }
  getOpaque(e) {
    return this.getProjection() && e && !Oi(this.getProjection(), e)
      ? !1
      : super.getOpaque(e);
  }
  getTileGridForProjection(e) {
    const n = this.getProjection();
    if (this.tileGrid && (!n || Oi(n, e))) return this.tileGrid;
    const i = ne(e);
    return (
      i in this.tileGridForProjection ||
        (this.tileGridForProjection[i] = X_(e)),
      this.tileGridForProjection[i]
    );
  }
  getTileCacheForProjection(e) {
    const n = this.getProjection();
    if (!n || Oi(n, e)) return this.tileCache;
    const i = ne(e);
    return (
      i in this.tileCacheForProjection ||
        (this.tileCacheForProjection[i] = new b_(this.tileCache.highWaterMark)),
      this.tileCacheForProjection[i]
    );
  }
  createTile_(e, n, i, r, s, o) {
    const l = [e, n, i],
      a = this.getTileCoordForTileUrlFunction(l, s),
      u = a ? this.tileUrlFunction(a, r, s) : void 0,
      c = new this.tileClass(
        l,
        u !== void 0 ? b.IDLE : b.EMPTY,
        u !== void 0 ? u : "",
        this.crossOrigin,
        this.tileLoadFunction,
        this.tileOptions,
      );
    return (
      (c.key = o),
      c.addEventListener(K.CHANGE, this.handleTileChange.bind(this)),
      c
    );
  }
  getTile(e, n, i, r, s) {
    const o = this.getProjection();
    if (!o || !s || Oi(o, s)) return this.getTileInternal(e, n, i, r, o || s);
    const l = this.getTileCacheForProjection(s),
      a = [e, n, i];
    let u;
    const c = G_(a);
    l.containsKey(c) && (u = l.get(c));
    const h = this.getKey();
    if (u && u.key == h) return u;
    const d = this.getTileGridForProjection(o),
      f = this.getTileGridForProjection(s),
      p = this.getTileCoordForTileUrlFunction(a, s),
      _ = new mh(
        o,
        d,
        s,
        f,
        a,
        p,
        this.getTilePixelRatio(r),
        this.getGutter(),
        (v, g, m, y) => this.getTileInternal(v, g, m, y, o),
        this.reprojectionErrorThreshold_,
        this.renderReprojectionEdges_,
        this.tileOptions,
      );
    return (
      (_.key = h),
      u
        ? ((_.interimTile = u), _.refreshInterimChain(), l.replace(c, _))
        : l.set(c, _),
      _
    );
  }
  getTileInternal(e, n, i, r, s) {
    let o = null;
    const l = ru(e, n, i),
      a = this.getKey();
    if (!this.tileCache.containsKey(l))
      (o = this.createTile_(e, n, i, r, s, a)), this.tileCache.set(l, o);
    else if (((o = this.tileCache.get(l)), o.key != a)) {
      const u = o;
      (o = this.createTile_(e, n, i, r, s, a)),
        u.getState() == b.IDLE
          ? (o.interimTile = u.interimTile)
          : (o.interimTile = u),
        o.refreshInterimChain(),
        this.tileCache.replace(l, o);
    }
    return o;
  }
  setRenderReprojectionEdges(e) {
    if (this.renderReprojectionEdges_ != e) {
      this.renderReprojectionEdges_ = e;
      for (const n in this.tileCacheForProjection)
        this.tileCacheForProjection[n].clear();
      this.changed();
    }
  }
  setTileGridForProjection(e, n) {
    const i = xe(e);
    if (i) {
      const r = ne(i);
      r in this.tileGridForProjection || (this.tileGridForProjection[r] = n);
    }
  }
  clear() {
    super.clear();
    for (const e in this.tileCacheForProjection)
      this.tileCacheForProjection[e].clear();
  }
}
function sS(t, e) {
  t.getImage().src = e;
}
class U_ extends rS {
  constructor(e) {
    e = e || {};
    const n = e.projection !== void 0 ? e.projection : "EPSG:3857",
      i =
        e.tileGrid !== void 0
          ? e.tileGrid
          : HC({
              extent: Zd(n),
              maxResolution: e.maxResolution,
              maxZoom: e.maxZoom,
              minZoom: e.minZoom,
              tileSize: e.tileSize,
            });
    super({
      attributions: e.attributions,
      cacheSize: e.cacheSize,
      crossOrigin: e.crossOrigin,
      interpolate: e.interpolate,
      opaque: e.opaque,
      projection: n,
      reprojectionErrorThreshold: e.reprojectionErrorThreshold,
      tileGrid: i,
      tileLoadFunction: e.tileLoadFunction,
      tilePixelRatio: e.tilePixelRatio,
      tileUrlFunction: e.tileUrlFunction,
      url: e.url,
      urls: e.urls,
      wrapX: e.wrapX !== void 0 ? e.wrapX : !0,
      transition: e.transition,
      attributionsCollapsible: e.attributionsCollapsible,
      zDirection: e.zDirection,
    }),
      (this.gutter_ = e.gutter !== void 0 ? e.gutter : 0);
  }
  getGutter() {
    return this.gutter_;
  }
}
const Y_ =
  '&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.';
class Hd extends U_ {
  constructor(e) {
    e = e || {};
    let n;
    e.attributions !== void 0 ? (n = e.attributions) : (n = [Y_]);
    const i = e.crossOrigin !== void 0 ? e.crossOrigin : "anonymous",
      r =
        e.url !== void 0
          ? e.url
          : "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
    super({
      attributions: n,
      attributionsCollapsible: !1,
      cacheSize: e.cacheSize,
      crossOrigin: i,
      interpolate: e.interpolate,
      maxZoom: e.maxZoom !== void 0 ? e.maxZoom : 19,
      opaque: e.opaque !== void 0 ? e.opaque : !0,
      reprojectionErrorThreshold: e.reprojectionErrorThreshold,
      tileLoadFunction: e.tileLoadFunction,
      transition: e.transition,
      url: r,
      wrapX: e.wrapX,
      zDirection: e.zDirection,
    });
  }
}
const oS =
    '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a>',
  lS =
    '&copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>',
  aS = '&copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a>',
  uS = {
    stamen_terrain: { extension: "png", opaque: !0 },
    stamen_terrain_background: { extension: "png", opaque: !0 },
    stamen_terrain_labels: { extension: "png", opaque: !1 },
    stamen_terrain_lines: { extension: "png", opaque: !1 },
    stamen_toner_background: { extension: "png", opaque: !0 },
    stamen_toner: { extension: "png", opaque: !0 },
    stamen_toner_labels: { extension: "png", opaque: !1 },
    stamen_toner_lines: { extension: "png", opaque: !1 },
    stamen_toner_lite: { extension: "png", opaque: !0 },
    stamen_watercolor: { extension: "jpg", opaque: !0 },
    alidade_smooth: { extension: "png", opaque: !0 },
    alidade_smooth_dark: { extension: "png", opaque: !0 },
    outdoors: { extension: "png", opaque: !0 },
    osm_bright: { extension: "png", opaque: !0 },
  },
  cS = {
    stamen_terrain: { minZoom: 0, maxZoom: 18, retina: !0 },
    stamen_toner: { minZoom: 0, maxZoom: 20, retina: !0 },
    stamen_watercolor: { minZoom: 1, maxZoom: 18, retina: !1 },
  };
class hS extends U_ {
  constructor(e) {
    const n = e.layer.indexOf("-"),
      i = n == -1 ? e.layer : e.layer.slice(0, n),
      r = cS[i] || { minZoom: 0, maxZoom: 20, retina: !0 },
      s = uS[e.layer],
      o = e.apiKey ? "?api_key=" + e.apiKey : "",
      l = r.retina && e.retina ? "@2x" : "",
      a =
        e.url !== void 0
          ? e.url
          : "https://tiles.stadiamaps.com/tiles/" +
            e.layer +
            "/{z}/{x}/{y}" +
            l +
            "." +
            s.extension +
            o,
      u = [oS, lS, Y_];
    e.layer.startsWith("stamen_") && u.splice(1, 0, aS),
      super({
        attributions: u,
        cacheSize: e.cacheSize,
        crossOrigin: "anonymous",
        interpolate: e.interpolate,
        maxZoom: e.maxZoom !== void 0 ? e.maxZoom : r.maxZoom,
        minZoom: e.minZoom !== void 0 ? e.minZoom : r.minZoom,
        opaque: s.opaque,
        reprojectionErrorThreshold: e.reprojectionErrorThreshold,
        tileLoadFunction: e.tileLoadFunction,
        transition: e.transition,
        url: a,
        tilePixelRatio: l ? 2 : 1,
        wrapX: e.wrapX,
        zDirection: e.zDirection,
      });
  }
}
const dS = hS;
aE();
const fS = new OC({
    layers: [new xa({ source: new Hd() })],
    view: new Jt({ center: [10.7522454, 59.9138688], zoom: 12 }),
  }),
  Dt = hy.createContext({
    map: fS,
    setBaseLayer: () => {},
    setFeatureLayers: () => {},
    featureLayers: [],
    setCafeFeatureLayers: () => {},
    cafeFeatureLayers: [],
    setDrinkFeatureLayers: () => {},
    drinkFeatureLayers: [],
    setActivityFeatureLayers: () => {},
    activityFeatureLayers: [],
    setStoreFeatureLayers: () => {},
    storeFeatureLayers: [],
    setRestaurantFeatureLayers: () => {},
    restaurantFeatureLayers: [],
    setHikeFeatureLayers: () => {},
    hikeFeatureLayers: [],
  }),
  su = ({ onClick: t, children: e, className: n }) =>
    C.jsx("button", { className: `icon-button ${n}`, onClick: t, children: e }),
  gS = () => {
    const { map: t } = P.useContext(Dt),
      [e, n] = P.useState(!1),
      i = (r) => {
        r.preventDefault(),
          navigator.geolocation.getCurrentPosition(
            (s) => {
              const { latitude: o, longitude: l } = s.coords;
              t.getView().animate({ center: [l, o], zoom: 17 });
              const a = new is(new On([l, o])),
                u = new Ae({
                  image: new Ze({
                    src: "/Where-to-oslo/images/LocationBtn.svg",
                    anchor: [0.5, 1],
                    scale: 1,
                  }),
                });
              a.setStyle(u);
              const c = new Si({ features: [a] }),
                h = new Ci({ source: c });
              t.addLayer(h), n(!0);
              const d = () => {
                navigator.geolocation.getCurrentPosition(
                  (p) => {
                    const { latitude: _, longitude: v } = p.coords;
                    a.setGeometry(new On([v, _]));
                  },
                  (p) => {
                    console.error("Error getting geolocation:", p);
                  },
                );
              };
              d();
              const f = setInterval(d, 5e3);
              return () => {
                clearInterval(f);
              };
            },
            (s) => {
              console.error("Error getting geolocation:", s);
            },
          );
      };
    return C.jsx(su, {
      className: "position-button",
      onClick: i,
      children: C.jsx("img", {
        src: "images/PositionBtn.svg",
        alt: "Position Icon",
        className: "icon",
      }),
    });
  },
  mS = () => {
    const [t, e] = P.useState(!1),
      n = () => e(!1),
      i = () => e(!0);
    return C.jsxs(C.Fragment, {
      children: [
        C.jsx(su, {
          className: "favorite-button",
          onClick: i,
          children: C.jsx("img", {
            src: "images/FavoriteBtn.svg",
            alt: "Favorite Icon",
            className: "icon",
          }),
        }),
        t &&
          C.jsx("div", {
            className: "favorite-overlay show",
            onClick: n,
            children: C.jsxs("div", {
              className: "favorite-overlay-content",
              onClick: (r) => r.stopPropagation(),
              children: [
                C.jsx("button", {
                  className: "overlay-close-button",
                  onClick: n,
                  children: "×",
                }),
                C.jsx("h2", { children: "Favorite Places" }),
                C.jsx("p", {
                  children:
                    "This feature will be available in the near soon future..",
                }),
              ],
            }),
          }),
      ],
    });
  };
function pS() {
  const { setBaseLayer: t } = P.useContext(Dt),
    e = {
      osm: { name: "Open Street Map", layer: new xa({ source: new Hd() }) },
      dark: {
        name: "Stadia (dark)",
        layer: new xa({
          source: new dS({
            layer: "alidade_smooth_dark",
            apiKey: "69dfeec6-dedf-4d6d-8344-154bbd2724d9",
          }),
        }),
      },
    },
    [n, i] = P.useState("osm"),
    r = (s) => {
      var o;
      i(s), (o = e[s]) != null && o.layer && t(e[s].layer);
    };
  return C.jsxs("div", {
    className: "mapSelector",
    children: [
      C.jsx("button", {
        onClick: () => r("osm"),
        className: `light-dark-buttons ${n === "osm" ? "selected" : ""}`,
        children: "Light Map",
      }),
      C.jsx("button", {
        onClick: () => r("dark"),
        className: `light-dark-buttons ${n === "dark" ? "selected" : ""}`,
        children: "Dark Map",
      }),
    ],
  });
}
const _S = () => {
    const [t, e] = P.useState(!1),
      [n, i] = P.useState(!1),
      r = () => {
        e(!t);
      },
      s = () => {
        i(!n);
      },
      o = () => {
        e(!1);
      },
      l = (a) => {
        a.stopPropagation();
      };
    return C.jsxs("div", {
      children: [
        C.jsx(su, {
          className: "settings-button",
          onClick: r,
          children: C.jsx("img", {
            src: "images/SettingsBtn.svg",
            alt: "Settings Icon",
            className: "icon",
          }),
        }),
        t &&
          C.jsx("div", {
            className: `position-fixed settings-overlay ${t ? "show" : ""}`,
            onClick: o,
            children: C.jsxs("div", {
              className: "settings-overlay-content",
              onClick: l,
              children: [
                C.jsx("button", {
                  className: "overlay-close-button",
                  onClick: o,
                  children: "×",
                }),
                C.jsx("h3", {
                  className: "fw-bold text-center m-4",
                  children: "About",
                }),
                C.jsx("p", {
                  className: "fw-light text-center p-4",
                  children:
                    "Welcome to Where To Oslo, When you need to know where to go!",
                }),
                C.jsx("p", {
                  className: "fw-light mb-4 text-center p-4",
                  children:
                    "This application helps you find the best cafes, restaurants, and activities that you might not find elsewhere. Our goal is to make your search for great places easy and enjoyable.",
                }),
                C.jsx("button", {
                  onClick: s,
                  className: "user-agreement-button",
                  children: "User Agreement",
                }),
                n &&
                  C.jsxs("div", {
                    className: "user-agreement-scroll-container",
                    children: [
                      C.jsx(Rs, {
                        title: "1.Introduction",
                        children: C.jsx("p", {
                          children:
                            "Welcome to our application. By using our app, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this application. If you disagree with any part of these terms and conditions, please do not use our app.",
                        }),
                      }),
                      C.jsx(Rs, {
                        title: "2.Usage of the App",
                        children: C.jsx("p", {
                          children:
                            "You agree to use the app only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the app. Unauthorized use of this app may give rise to a claim for damages and/or be a criminal offense.",
                        }),
                      }),
                      C.jsx(Rs, {
                        title: "3.Intellectual Property",
                        children: C.jsx("p", {
                          children:
                            "All content included in the app, such as text, graphics, logos, images, and software, is the property of our company and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works from any of the material on this app without our explicit consent.",
                        }),
                      }),
                      C.jsx(Rs, {
                        title: "4.Termination",
                        children: C.jsx("p", {
                          children:
                            "We reserve the right to terminate your access to the app at any time, without notice, for conduct that we believe violates these terms or is harmful to other users of the app, us, or third parties.",
                        }),
                      }),
                      C.jsxs(Rs, {
                        title: "5.Privacy Information",
                        children: [
                          C.jsx("p", {
                            children:
                              "1. Data Collection We are committed to protecting your privacy. We collect and use personal information only as needed to deliver our app, its features, and services, and to communicate with you about your use of the app.",
                          }),
                          C.jsx("br", {}),
                          C.jsx("p", {
                            children:
                              "2. Information We Collect - Location Data: We collect location data solely for the period of time you are using the app to provide relevant information about nearby places and activities. Once you stop using the app, your location data is deleted. - We do not collect personal details such as your name, email address, or contact information as the app does not support user account creation.",
                          }),
                          C.jsx("br", {}),
                          C.jsx("p", {
                            children:
                              "3. Use of Information - We use the location data we collect to operate, maintain, and improve the app and our services. Your location data will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the requested service during your use of the app.",
                          }),
                          C.jsx("br", {}),
                          C.jsx("p", {
                            children:
                              "4. Data Security - We implement a variety of security measures to maintain the safety of your information. However, please be aware that no method of transmission over the internet, or method of electronic storage, is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.",
                          }),
                          C.jsx("br", {}),
                          C.jsx("p", {
                            children:
                              "5. Third-Party Services - We may employ third-party companies and individuals to facilitate our app, to provide the app on our behalf, to perform app-related services, or to assist us in analyzing how our app is used. These third parties have access to your information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.",
                          }),
                          C.jsx("br", {}),
                          C.jsx("p", {
                            children:
                              "6. Changes to This Privacy Policy - We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
                          }),
                          C.jsx("br", {}),
                          C.jsx("p", {
                            children:
                              "By using our app, you consent to our User Agreement and Privacy Policy. If you have any questions about these policies, please contact us at [contact email].",
                          }),
                        ],
                      }),
                    ],
                  }),
                C.jsxs("p", {
                  className: "mb-0 text-center mt-5",
                  children: [
                    C.jsx("strong", { children: "Version:" }),
                    " 1.0.0",
                  ],
                }),
                C.jsx("br", {}),
                C.jsx(pS, {}),
              ],
            }),
          }),
      ],
    });
  },
  Rs = ({ title: t, children: e }) => {
    const [n, i] = P.useState(!1),
      r = () => {
        i(!n);
      };
    return C.jsxs("div", {
      children: [
        C.jsxs("button", {
          onClick: r,
          className: `dropdown-button ${n ? "open" : "closed"}`,
          children: [t, " ", n ? "−" : "+"],
        }),
        n &&
          C.jsx("div", { className: "user-agreement-dropdown", children: e }),
      ],
    });
  },
  yS = ({ onClick: t }) => {
    const e = () => {
      t();
    };
    return C.jsx(su, {
      className: "search-button",
      onClick: e,
      children: C.jsx("img", {
        src: "images/SearchBtn.svg",
        alt: "Search Icon",
        className: "icon",
      }),
    });
  };
function vS({ showOverlay: t }) {
  const [e, n] = P.useState(""),
    [i, r] = P.useState([]),
    { map: s } = P.useContext(Dt),
    [o, l] = P.useState(t);
  P.useEffect(() => {
    (async () => {
      const f = [
          "json/activity.geojson",
          "json/restaurants.geojson",
          "json/drinks.geojson",
          "json/store.geojson",
          "json/cafe.geojson",
        ],
        _ = (
          await Promise.all(f.map((v) => fetch(v).then((g) => g.json())))
        ).flatMap((v) => v.features);
      r(_);
    })();
  }, []),
    P.useEffect(() => {
      l(t);
    }, [t]);
  const a = (d) => {
      const f = i.find((p) => p.properties.name === d.name);
      f &&
        (s.getView().animate({ center: f.geometry.coordinates, zoom: 14 }),
        n(""),
        l(!1));
    },
    u = (d) => {
      n(d.target.value);
    },
    c = (d) => {
      d.stopPropagation(), l(!1);
    },
    h = (d) => {
      d.stopPropagation();
    };
  return C.jsxs("div", {
    children: [
      C.jsx(yS, { onClick: () => l(!o) }),
      C.jsx("div", {
        className: `position-relative ${o ? "search-overlay show" : "search-overlay hide"}`,
        onClick: (d) => c(d),
        children: C.jsxs("div", {
          className: "search-overlay-content",
          onClick: h,
          children: [
            C.jsx("input", {
              type: "text",
              value: e,
              onChange: u,
              placeholder: "Search...",
              onClick: h,
              className: "search-input",
            }),
            C.jsx("button", {
              className: "overlay-close-button",
              onClick: (d) => c(d),
              children: "×",
            }),
            C.jsx("div", {
              className: `search-results ${e ? "show" : ""}`,
              children: i
                .filter((d) =>
                  d.properties.name.toLowerCase().startsWith(e.toLowerCase()),
                )
                .map((d, f) =>
                  C.jsx(
                    "div",
                    {
                      className: "search-result-item",
                      onClick: () => a(d.properties),
                      style: { cursor: "pointer", margin: "2px 0" },
                      children: d.properties.name,
                    },
                    f,
                  ),
                ),
            }),
          ],
        }),
      }),
    ],
  });
}
const ES = () => {
  const [t, e] = P.useState(!1),
    n = () => {
      e(!t);
    };
  return C.jsx(C.Fragment, {
    children: C.jsxs("div", {
      className: "buttons-column",
      children: [
        C.jsx(vS, { showOverlay: t, toggleOverlay: n }),
        C.jsx(gS, {}),
        C.jsx(mS, {}),
        C.jsx(_S, {}),
      ],
    }),
  });
};
class xS {
  constructor() {
    (this.dataProjection = void 0),
      (this.defaultFeatureProjection = void 0),
      (this.featureClass = is),
      (this.supportedMediaTypes = null);
  }
  getReadOptions(e, n) {
    if (n) {
      let i = n.dataProjection ? xe(n.dataProjection) : this.readProjection(e);
      n.extent &&
        i &&
        i.getUnits() === "tile-pixels" &&
        ((i = xe(i)), i.setWorldExtent(n.extent)),
        (n = { dataProjection: i, featureProjection: n.featureProjection });
    }
    return this.adaptOptions(n);
  }
  adaptOptions(e) {
    return Object.assign(
      {
        dataProjection: this.dataProjection,
        featureProjection: this.defaultFeatureProjection,
        featureClass: this.featureClass,
      },
      e,
    );
  }
  getType() {
    return W();
  }
  readFeature(e, n) {
    return W();
  }
  readFeatures(e, n) {
    return W();
  }
  readGeometry(e, n) {
    return W();
  }
  readProjection(e) {
    return W();
  }
  writeFeature(e, n) {
    return W();
  }
  writeFeatures(e, n) {
    return W();
  }
  writeGeometry(e, n) {
    return W();
  }
}
function qd(t, e, n) {
  const i = n ? xe(n.featureProjection) : null,
    r = n ? xe(n.dataProjection) : null;
  let s = t;
  if (i && r && !Oi(i, r)) {
    e && (s = t.clone());
    const o = e ? i : r,
      l = e ? r : i;
    o.getUnits() === "tile-pixels"
      ? s.transform(o, l)
      : s.applyTransform(qr(o, l));
  }
  if (e && n && n.decimals !== void 0) {
    const o = Math.pow(10, n.decimals),
      l = function (a) {
        for (let u = 0, c = a.length; u < c; ++u)
          a[u] = Math.round(a[u] * o) / o;
        return a;
      };
    s === t && (s = t.clone()), s.applyTransform(l);
  }
  return s;
}
const wS = {
  Point: On,
  LineString: ah,
  Polygon: pi,
  MultiPoint: k_,
  MultiLineString: zw,
  MultiPolygon: jw,
};
function CS(t, e, n) {
  return Array.isArray(e[0])
    ? (t_(t, 0, e, n) || ((t = t.slice()), oh(t, 0, e, n)), t)
    : (Md(t, 0, e, n) || ((t = t.slice()), la(t, 0, e, n)), t);
}
function V_(t, e) {
  var s;
  const n = t.geometry;
  if (!n) return [];
  if (Array.isArray(n)) return n.map((o) => V_({ ...t, geometry: o })).flat();
  const i = n.type === "MultiPolygon" ? "Polygon" : n.type;
  if (i === "GeometryCollection" || i === "Circle")
    throw new Error("Unsupported geometry type: " + i);
  const r = n.layout.length;
  return qd(
    new rt(
      i,
      i === "Polygon" ? CS(n.flatCoordinates, n.ends, r) : n.flatCoordinates,
      (s = n.ends) == null ? void 0 : s.flat(),
      r,
      t.properties || {},
      t.id,
    ).enableSimplifyTransformed(),
    !1,
    e,
  );
}
function Qd(t, e) {
  if (!t) return null;
  if (Array.isArray(t)) {
    const i = t.map((r) => Qd(r, e));
    return new Dw(i);
  }
  const n = wS[t.type];
  return qd(new n(t.flatCoordinates, t.layout, t.ends), !1, e);
}
class SS extends xS {
  constructor() {
    super();
  }
  getType() {
    return "json";
  }
  readFeature(e, n) {
    return this.readFeatureFromObject(El(e), this.getReadOptions(e, n));
  }
  readFeatures(e, n) {
    return this.readFeaturesFromObject(El(e), this.getReadOptions(e, n));
  }
  readFeatureFromObject(e, n) {
    return W();
  }
  readFeaturesFromObject(e, n) {
    return W();
  }
  readGeometry(e, n) {
    return this.readGeometryFromObject(El(e), this.getReadOptions(e, n));
  }
  readGeometryFromObject(e, n) {
    return W();
  }
  readProjection(e) {
    return this.readProjectionFromObject(El(e));
  }
  readProjectionFromObject(e) {
    return W();
  }
  writeFeature(e, n) {
    return JSON.stringify(this.writeFeatureObject(e, n));
  }
  writeFeatureObject(e, n) {
    return W();
  }
  writeFeatures(e, n) {
    return JSON.stringify(this.writeFeaturesObject(e, n));
  }
  writeFeaturesObject(e, n) {
    return W();
  }
  writeGeometry(e, n) {
    return JSON.stringify(this.writeGeometryObject(e, n));
  }
  writeGeometryObject(e, n) {
    return W();
  }
}
function El(t) {
  if (typeof t == "string") {
    const e = JSON.parse(t);
    return e || null;
  }
  return t !== null ? t : null;
}
class us extends SS {
  constructor(e) {
    (e = e || {}),
      super(),
      (this.dataProjection = xe(
        e.dataProjection ? e.dataProjection : "EPSG:4326",
      )),
      e.featureProjection &&
        (this.defaultFeatureProjection = xe(e.featureProjection)),
      e.featureClass && (this.featureClass = e.featureClass),
      (this.geometryName_ = e.geometryName),
      (this.extractGeometryName_ = e.extractGeometryName),
      (this.supportedMediaTypes = [
        "application/geo+json",
        "application/vnd.geo+json",
      ]);
  }
  readFeatureFromObject(e, n) {
    let i = null;
    e.type === "Feature"
      ? (i = e)
      : (i = { type: "Feature", geometry: e, properties: null });
    const r = Jd(i.geometry);
    if (this.featureClass === rt)
      return V_({ geometry: r, id: i.id, properties: i.properties }, n);
    const s = new is();
    return (
      this.geometryName_
        ? s.setGeometryName(this.geometryName_)
        : this.extractGeometryName_ &&
          "geometry_name" in i !== void 0 &&
          s.setGeometryName(i.geometry_name),
      s.setGeometry(Qd(r, n)),
      "id" in i && s.setId(i.id),
      i.properties && s.setProperties(i.properties, !0),
      s
    );
  }
  readFeaturesFromObject(e, n) {
    const i = e;
    let r = null;
    if (i.type === "FeatureCollection") {
      const s = e;
      r = [];
      const o = s.features;
      for (let l = 0, a = o.length; l < a; ++l) {
        const u = this.readFeatureFromObject(o[l], n);
        u && r.push(u);
      }
    } else r = [this.readFeatureFromObject(e, n)];
    return r.flat();
  }
  readGeometryFromObject(e, n) {
    return TS(e, n);
  }
  readProjectionFromObject(e) {
    const n = e.crs;
    let i;
    if (n)
      if (n.type == "name") i = xe(n.properties.name);
      else if (n.type === "EPSG") i = xe("EPSG:" + n.properties.code);
      else throw new Error("Unknown SRS type");
    else i = this.dataProjection;
    return i;
  }
  writeFeatureObject(e, n) {
    n = this.adaptOptions(n);
    const i = { type: "Feature", geometry: null, properties: null },
      r = e.getId();
    if ((r !== void 0 && (i.id = r), !e.hasProperties())) return i;
    const s = e.getProperties(),
      o = e.getGeometry();
    return (
      o && ((i.geometry = ph(o, n)), delete s[e.getGeometryName()]),
      $i(s) || (i.properties = s),
      i
    );
  }
  writeFeaturesObject(e, n) {
    n = this.adaptOptions(n);
    const i = [];
    for (let r = 0, s = e.length; r < s; ++r)
      i.push(this.writeFeatureObject(e[r], n));
    return { type: "FeatureCollection", features: i };
  }
  writeGeometryObject(e, n) {
    return ph(e, this.adaptOptions(n));
  }
}
function Jd(t, e) {
  if (!t) return null;
  let n;
  switch (t.type) {
    case "Point": {
      n = IS(t);
      break;
    }
    case "LineString": {
      n = kS(t);
      break;
    }
    case "Polygon": {
      n = OS(t);
      break;
    }
    case "MultiPoint": {
      n = LS(t);
      break;
    }
    case "MultiLineString": {
      n = PS(t);
      break;
    }
    case "MultiPolygon": {
      n = MS(t);
      break;
    }
    case "GeometryCollection": {
      n = RS(t);
      break;
    }
    default:
      throw new Error("Unsupported GeoJSON type: " + t.type);
  }
  return n;
}
function TS(t, e) {
  const n = Jd(t);
  return Qd(n, e);
}
function RS(t, e) {
  return t.geometries.map(function (i) {
    return Jd(i);
  });
}
function IS(t) {
  const e = t.coordinates;
  return { type: "Point", flatCoordinates: e, layout: tr(e.length) };
}
function kS(t) {
  const e = t.coordinates,
    n = e.flat();
  return {
    type: "LineString",
    flatCoordinates: n,
    ends: [n.length],
    layout: tr(e[0].length),
  };
}
function PS(t) {
  const e = t.coordinates,
    n = e[0][0].length,
    i = [],
    r = Oo(i, 0, e, n);
  return {
    type: "MultiLineString",
    flatCoordinates: i,
    ends: r,
    layout: tr(n),
  };
}
function LS(t) {
  const e = t.coordinates;
  return {
    type: "MultiPoint",
    flatCoordinates: e.flat(),
    layout: tr(e[0].length),
  };
}
function MS(t) {
  const e = t.coordinates,
    n = [],
    i = e[0][0][0].length,
    r = K0(n, 0, e, i);
  return { type: "MultiPolygon", flatCoordinates: n, ends: r, layout: tr(i) };
}
function OS(t) {
  const e = t.coordinates,
    n = [],
    i = e[0][0].length,
    r = Oo(n, 0, e, i);
  return { type: "Polygon", flatCoordinates: n, ends: r, layout: tr(i) };
}
function ph(t, e) {
  t = qd(t, !0, e);
  const n = t.getType();
  let i;
  switch (n) {
    case "Point": {
      i = jS(t);
      break;
    }
    case "LineString": {
      i = FS(t);
      break;
    }
    case "Polygon": {
      i = GS(t, e);
      break;
    }
    case "MultiPoint": {
      i = DS(t);
      break;
    }
    case "MultiLineString": {
      i = NS(t);
      break;
    }
    case "MultiPolygon": {
      i = zS(t, e);
      break;
    }
    case "GeometryCollection": {
      i = AS(t, e);
      break;
    }
    case "Circle": {
      i = { type: "GeometryCollection", geometries: [] };
      break;
    }
    default:
      throw new Error("Unsupported geometry type: " + n);
  }
  return i;
}
function AS(t, e) {
  return (
    (e = Object.assign({}, e)),
    delete e.featureProjection,
    {
      type: "GeometryCollection",
      geometries: t.getGeometriesArray().map(function (i) {
        return ph(i, e);
      }),
    }
  );
}
function FS(t, e) {
  return { type: "LineString", coordinates: t.getCoordinates() };
}
function NS(t, e) {
  return { type: "MultiLineString", coordinates: t.getCoordinates() };
}
function DS(t, e) {
  return { type: "MultiPoint", coordinates: t.getCoordinates() };
}
function zS(t, e) {
  let n;
  return (
    e && (n = e.rightHanded),
    { type: "MultiPolygon", coordinates: t.getCoordinates(n) }
  );
}
function jS(t, e) {
  return { type: "Point", coordinates: t.getCoordinates() };
}
function GS(t, e) {
  let n;
  return (
    e && (n = e.rightHanded),
    { type: "Polygon", coordinates: t.getCoordinates(n) }
  );
}
const bS = (t) => (
    t.getProperties(),
    new Ae({
      image: new Ze({
        src: "/Where-to-oslo/kafePin.png",
        anchor: [0.5, 1],
        scale: 0.05,
      }),
    })
  ),
  WS = (t) => (
    t.getProperties(),
    new Ae({
      image: new Ze({
        src: "/Where-to-oslo/kafePin.png",
        anchor: [0.5, 1],
        scale: 0.06,
      }),
    })
  ),
  Qu = new Ci({
    className: "Cafe",
    source: new Si({
      url: "/Where-to-oslo/json/cafe.geojson",
      format: new us(),
    }),
    style: bS,
  });
function XS() {
  const [t, e] = P.useState(!1),
    [n, i] = P.useState(),
    { setCafeFeatureLayers: r, map: s } = P.useContext(Dt),
    o = P.useMemo(() => new nr({}), []),
    l = P.useRef();
  P.useEffect(
    () => (
      o.setElement(l.current),
      s.addOverlay(o),
      () => {
        s.removeOverlay(o);
      }
    ),
    [o, s],
  );
  function a(u) {
    const c = [];
    s.forEachFeatureAtPixel(u.pixel, (h) => c.push(h), {
      hitTolerance: 5,
      layerFilter: (h) => h === Qu,
    }),
      c.length === 1
        ? (i(c[0]), o.setPosition(u.coordinate))
        : (i(void 0), o.setPosition(void 0));
  }
  return (
    P.useEffect(
      () => (
        n == null || n.setStyle(WS),
        () => (n == null ? void 0 : n.setStyle(void 0))
      ),
      [n],
    ),
    P.useEffect(() => {
      t
        ? (r((u) => [...u, Qu]), s == null || s.on("click", a))
        : (r((u) => u.filter((c) => c !== Qu)), s == null || s.un("click", a));
    }, [t, r, s]),
    C.jsxs("div", {
      className: `category-button ${t ? "clicked" : ""}`,
      onClick: () => e((u) => !u),
      children: [
        C.jsx("img", {
          src: "/Where-to-oslo/images/kafePin_4.svg",
          alt: "Cafe",
          className: "pin-icon",
          style: { width: "3rem", height: "3rem" },
        }),
        C.jsx("span", { children: "Cafe" }),
        C.jsx("div", {
          ref: l,
          className: "pinOverlay",
          children:
            n &&
            C.jsx("div", {
              className: "container-box",
              children: C.jsxs("p", { children: [" ", n.get("name")] }),
            }),
        }),
      ],
    })
  );
}
const BS = (t) => (
    t.getProperties(),
    new Ae({
      image: new Ze({
        src: "/Where-to-oslo/images/storePin_2.svg",
        anchor: [0.5, 1],
        scale: 0.5,
      }),
    })
  ),
  US = (t) => (
    t.getProperties(),
    new Ae({
      image: new Ze({
        src: "/Where-to-oslo/images/storePin_2.svg",
        anchor: [0.5, 1],
        scale: 0.6,
      }),
    })
  ),
  Ju = new Ci({
    className: "Store",
    source: new Si({
      url: "/Where-to-oslo/json/store.geojson",
      format: new us(),
    }),
    style: BS,
  });
function YS() {
  const [t, e] = P.useState(!1),
    [n, i] = P.useState(),
    { setStoreFeatureLayers: r, map: s } = P.useContext(Dt),
    o = P.useMemo(() => new nr({}), []),
    l = P.useRef();
  P.useEffect(
    () => (
      o.setElement(l.current),
      s.addOverlay(o),
      () => {
        s.removeOverlay(o);
      }
    ),
    [o, s],
  );
  function a(u) {
    const c = [];
    s.forEachFeatureAtPixel(u.pixel, (h) => c.push(h), {
      hitTolerance: 5,
      layerFilter: (h) => h === Ju,
    }),
      c.length === 1
        ? (i(c[0]), o.setPosition(u.coordinate))
        : (i(void 0), o.setPosition(void 0));
  }
  return (
    P.useEffect(
      () => (
        n == null || n.setStyle(US),
        () => (n == null ? void 0 : n.setStyle(void 0))
      ),
      [n],
    ),
    P.useEffect(() => {
      t
        ? (r((u) => [...u, Ju]), s == null || s.on("click", a))
        : (r((u) => u.filter((c) => c !== Ju)), s == null || s.un("click", a));
    }, [t, r, s]),
    C.jsxs("div", {
      className: `category-button ${t ? "clicked" : ""}`,
      onClick: () => e((u) => !u),
      children: [
        C.jsx("img", {
          src: "/Where-to-oslo/images/storePin_2.svg",
          alt: "Store",
          className: "pin-icon",
          style: { width: "3rem", height: "3rem" },
        }),
        C.jsx("span", { children: "Store" }),
        C.jsx("div", {
          ref: l,
          className: "pinOverlay",
          children:
            n &&
            C.jsx("div", {
              className: "container-box",
              children: C.jsxs("p", { children: [" ", n.get("name")] }),
            }),
        }),
      ],
    })
  );
}
const VS = (t) => (
    t.getProperties(),
    new Ae({
      image: new Ze({
        src: "/Where-to-oslo/activityPin.png",
        anchor: [0.5, 1],
        scale: 0.05,
      }),
    })
  ),
  KS = (t) => (
    t.getProperties(),
    new Ae({
      image: new Ze({
        src: "/Where-to-oslo/activityPin.png",
        anchor: [0.5, 1],
        scale: 0.06,
      }),
    })
  ),
  ec = new Ci({
    className: "Activity",
    source: new Si({
      url: "/Where-to-oslo/json/activity.geojson",
      format: new us(),
    }),
    style: VS,
  });
function ZS() {
  const [t, e] = P.useState(!1),
    [n, i] = P.useState(),
    { setActivityFeatureLayers: r, map: s } = P.useContext(Dt),
    o = P.useMemo(() => new nr({}), []),
    l = P.useRef();
  P.useEffect(
    () => (
      o.setElement(l.current),
      s.addOverlay(o),
      () => {
        s.removeOverlay(o);
      }
    ),
    [o, s],
  );
  function a(u) {
    const c = [];
    s.forEachFeatureAtPixel(u.pixel, (h) => c.push(h), {
      hitTolerance: 5,
      layerFilter: (h) => h === ec,
    }),
      c.length === 1
        ? (i(c[0]), o.setPosition(u.coordinate))
        : (i(void 0), o.setPosition(void 0));
  }
  return (
    P.useEffect(
      () => (
        n == null || n.setStyle(KS),
        () => (n == null ? void 0 : n.setStyle(void 0))
      ),
      [n],
    ),
    P.useEffect(() => {
      t
        ? (r((u) => [...u, ec]), s == null || s.on("click", a))
        : (r((u) => u.filter((c) => c !== ec)), s == null || s.un("click", a));
    }, [t, r, s]),
    C.jsxs("div", {
      className: `category-button ${t ? "clicked" : ""}`,
      onClick: () => e((u) => !u),
      children: [
        C.jsx("img", {
          src: "/Where-to-oslo/images/activityPin_4.svg",
          alt: "Activity",
          className: "pin-icon",
          style: { width: "3rem", height: "3rem" },
        }),
        C.jsx("span", { children: "Activity" }),
        C.jsx("div", {
          ref: l,
          className: "pinOverlay",
          children:
            n &&
            C.jsx("div", {
              className: "container-box",
              children: C.jsxs("p", { children: [" ", n.get("name")] }),
            }),
        }),
      ],
    })
  );
}
const $S = (t) => {
    const e = t.getProperties();
    let n = "/Where-to-oslo/images/drinkPin_4.svg";
    return (
      e.description === "Bar"
        ? (n = "/Where-to-oslo/images/beerPin.svg")
        : e.description === "Drink" && (n = "/Where-to-oslo/drinkPin.png"),
      new Ae({ image: new Ze({ src: n, anchor: [0.5, 1], scale: 0.06 }) })
    );
  },
  HS = (t) => {
    const e = t.getProperties();
    let n = "/Where-to-oslo/images/drinkPin_4.svg";
    return (
      e.description === "Bar"
        ? (n = "/Where-to-oslo/images/beerPin.svg")
        : e.description === "Drink" && (n = "/Where-to-oslo/drinkPin.png"),
      new Ae({ image: new Ze({ src: n, anchor: [0.5, 1], scale: 0.07 }) })
    );
  },
  tc = new Ci({
    className: "Drink",
    source: new Si({
      url: "/Where-to-oslo/json/drinks.geojson",
      format: new us(),
    }),
    style: $S,
  });
function qS() {
  const [t, e] = P.useState(!1),
    [n, i] = P.useState(),
    { setDrinkFeatureLayers: r, map: s } = P.useContext(Dt),
    o = P.useMemo(() => new nr({}), []),
    l = P.useRef();
  P.useEffect(
    () => (
      o.setElement(l.current),
      s.addOverlay(o),
      () => {
        s.removeOverlay(o);
      }
    ),
    [o, s],
  );
  function a(u) {
    const c = [];
    s.forEachFeatureAtPixel(u.pixel, (h) => c.push(h), {
      hitTolerance: 5,
      layerFilter: (h) => h === tc,
    }),
      c.length === 1
        ? (i(c[0]), o.setPosition(u.coordinate))
        : (i(void 0), o.setPosition(void 0));
  }
  return (
    P.useEffect(
      () => (
        n == null || n.setStyle(HS),
        () => (n == null ? void 0 : n.setStyle(void 0))
      ),
      [n],
    ),
    P.useEffect(() => {
      t
        ? (r((u) => [...u, tc]), s == null || s.on("click", a))
        : (r((u) => u.filter((c) => c !== tc)), s == null || s.un("click", a));
    }, [t, r, s]),
    C.jsxs("div", {
      className: `category-button ${t ? "clicked" : ""}`,
      onClick: () => e((u) => !u),
      children: [
        C.jsx("img", {
          src: "/Where-to-oslo/images/drinkPin_4.svg",
          alt: "Drink",
          className: "pin-icon",
          style: { width: "3rem", height: "3rem" },
        }),
        C.jsx("span", { children: "Drink" }),
        C.jsx("div", {
          ref: l,
          className: "pinOverlay",
          children:
            n &&
            C.jsx("div", {
              className: "container-box",
              children: C.jsxs("p", { children: [" ", n.get("name")] }),
            }),
        }),
      ],
    })
  );
}
const QS = () =>
    new Ae({
      image: new Ze({
        src: "/Where-to-oslo/restaurPin.png",
        anchor: [0.5, 1],
        scale: 0.05,
      }),
    }),
  JS = () =>
    new Ae({
      image: new Ze({
        src: "/Where-to-oslo/restaurPin.png",
        anchor: [0.5, 1],
        scale: 0.06,
      }),
    }),
  nc = new Ci({
    className: "Restaurant",
    source: new Si({
      url: "/Where-to-oslo/json/restaurants.geojson",
      format: new us(),
    }),
    style: QS,
  });
function eT() {
  const [t, e] = P.useState(!1),
    [n, i] = P.useState(),
    { setRestaurantFeatureLayers: r, map: s } = P.useContext(Dt),
    o = P.useMemo(() => new nr({}), []),
    l = P.useRef();
  P.useEffect(
    () => (
      o.setElement(l.current),
      s.addOverlay(o),
      () => {
        s.removeOverlay(o);
      }
    ),
    [o, s],
  );
  function a(u) {
    const c = [];
    s.forEachFeatureAtPixel(u.pixel, (h) => c.push(h), {
      hitTolerance: 5,
      layerFilter: (h) => h === nc,
    }),
      c.length === 1
        ? (i(c[0]), o.setPosition(u.coordinate))
        : (i(void 0), o.setPosition(void 0));
  }
  return (
    P.useEffect(
      () => (
        n == null || n.setStyle(JS),
        () => (n == null ? void 0 : n.setStyle(void 0))
      ),
      [n],
    ),
    P.useEffect(() => {
      t
        ? (r((u) => [...u, nc]), s == null || s.on("click", a))
        : (r((u) => u.filter((c) => c !== nc)), s == null || s.un("click", a));
    }, [t, r, s]),
    C.jsxs("div", {
      className: `category-button ${t ? "clicked" : ""}`,
      onClick: () => e((u) => !u),
      children: [
        C.jsx("img", {
          src: "/Where-to-oslo/images/restaurants_4.svg",
          alt: "Restaurant",
          className: "pin-icon",
          style: { width: "3rem", height: "3rem" },
        }),
        C.jsx("span", { children: "Restaurant" }),
        C.jsx("div", {
          ref: l,
          className: "pinOverlay",
          children:
            n &&
            C.jsx("div", {
              className: "container-box",
              children: C.jsxs("p", { children: [" ", n.get("name")] }),
            }),
        }),
      ],
    })
  );
}
const tT = () =>
    new Ae({
      image: new Ze({
        src: "/Where-to-oslo/images/tripPin.svg",
        anchor: [0.5, 1],
        scale: 0.4,
      }),
    }),
  nT = () =>
    new Ae({
      image: new Ze({
        src: "/Where-to-oslo/images/tripPin.svg",
        anchor: [0.5, 1],
        scale: 0.5,
      }),
    }),
  ic = new Ci({
    className: "Hike",
    source: new Si({
      url: "/Where-to-oslo/json/hike.geojson",
      format: new us(),
    }),
    style: tT,
  });
function iT() {
  const [t, e] = P.useState(!1),
    [n, i] = P.useState(),
    { setHikeFeatureLayers: r, map: s } = P.useContext(Dt),
    o = P.useMemo(() => new nr({}), []),
    l = P.useRef();
  P.useEffect(
    () => (
      o.setElement(l.current),
      s.addOverlay(o),
      () => {
        s.removeOverlay(o);
      }
    ),
    [o, s],
  );
  function a(u) {
    const c = [];
    s.forEachFeatureAtPixel(u.pixel, (h) => c.push(h), {
      hitTolerance: 5,
      layerFilter: (h) => h === ic,
    }),
      c.length === 1
        ? (i(c[0]), o.setPosition(u.coordinate))
        : (i(void 0), o.setPosition(void 0));
  }
  return (
    P.useEffect(
      () => (
        n == null || n.setStyle(nT),
        () => (n == null ? void 0 : n.setStyle(void 0))
      ),
      [n],
    ),
    P.useEffect(() => {
      t
        ? (r((u) => [...u, ic]), s == null || s.on("click", a))
        : (r((u) => u.filter((c) => c !== ic)), s == null || s.un("click", a));
    }, [t, r, s]),
    C.jsxs("div", {
      className: `category-button ${t ? "clicked" : ""}`,
      onClick: () => e((u) => !u),
      children: [
        C.jsx("img", {
          src: "/Where-to-oslo/images/tripPin.svg",
          alt: "Hike",
          className: "pin-icon",
          style: { width: "3rem", height: "3rem" },
        }),
        C.jsx("span", { children: "Hike" }),
        C.jsx("div", {
          ref: l,
          className: "pinOverlay",
          children:
            n &&
            C.jsx("div", {
              className: "container-box",
              children: C.jsxs("p", { children: [" ", n.get("name")] }),
            }),
        }),
      ],
    })
  );
}
const rT = [
    {
      name: "Restaurants",
      icon: "/WhereToOslo/images/restaurants_4.svg",
      component: eT,
    },
    {
      name: "Shopping",
      icon: "/WhereToOslo/images/storePin_2.svg",
      component: YS,
    },
    { name: "Cafes", icon: "/WhereToOslo/images/kafePin_4.svg", component: XS },
    {
      name: "Activities",
      icon: "/WhereToOslo/images/activityPin_4.svg",
      component: ZS,
    },
    { name: "Bars", icon: "/WhereToOslo/images/beerPin.svg", component: qS },
    { name: "Hikes", icon: "/WhereToOslo/images/tripPin.svg", component: iT },
  ],
  sT = ({ show: t, handleClose: e }) => {
    const [n, i] = P.useState(t),
      r = P.useRef(null);
    P.useEffect(() => {
      i(t);
    }, [t]);
    const s = (o) => {
      r.current && !r.current.contains(o.target) && (i(!1), e());
    };
    return C.jsxs(C.Fragment, {
      children: [
        n && C.jsx("div", { className: "blur-background", onClick: s }),
        C.jsx("div", {
          ref: r,
          className: n ? "overlay show" : "overlay hide",
          onClick: s,
          children: C.jsx("div", {
            className: "overlay-content",
            onClick: (o) => o.stopPropagation(),
            children: C.jsx("div", {
              className: "category-list",
              children: rT.map((o, l) =>
                C.jsx(
                  "div",
                  {
                    className: "category-item",
                    children: C.jsx(o.component, {}),
                  },
                  l,
                ),
              ),
            }),
          }),
        }),
      ],
    });
  },
  oT = 16,
  lT = 3,
  aT = 48,
  uT = (t) => {
    const n = (lT * oT) / aT;
    switch (t) {
      case "bar":
        return n * 0.0575;
      case "cafe":
        return n * 0.4;
      case "store":
        return n * 0.3;
      case "restaurant":
        return n * 0.3;
      case "activity":
        return n * 0.37;
      case "hike":
        return n * 0.3;
      default:
        return n;
    }
  },
  cT = (t) => {
    switch (t) {
      case "store":
        return "./images/storePin_2.svg";
      case "bar":
        return "./images/beerPin.svg";
      case "restaurant":
        return "./images/restaurants_4.svg";
      case "cafe":
        return "./images/kafePin_4.svg";
      case "activity":
        return "./images/activityPin_4.svg";
      case "hike":
        return "./images/tripPin.svg";
      default:
        return "";
    }
  },
  hT = ({ places: t }) => {
    const { map: e } = P.useContext(Dt),
      n = P.useMemo(() => new nr({ className: "top5-overlay" }), []),
      i = P.useRef(null),
      [r, s] = P.useState(null);
    return (
      P.useEffect(
        () => (
          n.setElement(i.current),
          e.addOverlay(n),
          () => {
            e.removeOverlay(n);
          }
        ),
        [n, e],
      ),
      P.useEffect(() => {
        const o = t.map((c) => {
            const h = new is(new On(c.coordinates));
            return (
              h.setProperties({
                name: c.name,
                description: c.description,
                type: c.type,
              }),
              h
            );
          }),
          l = new Si({ features: o }),
          a = new Ci({
            source: l,
            style: (c) => {
              const h = c.get("type"),
                d = cT(h),
                f = uT(h);
              return new Ae({
                image: new Ze({ anchor: [0.5, 1], src: d, scale: f }),
              });
            },
          });
        e.addLayer(a);
        const u = (c) => {
          const h = e.forEachFeatureAtPixel(c.pixel, (d) => d);
          if (h && h.get("type") && h.get("type") !== "category") {
            const d = h.getProperties();
            s(d), n.setPosition(h.getGeometry().getCoordinates());
          } else s(null), n.setPosition(void 0);
        };
        return (
          e.on("click", u),
          () => {
            e.removeLayer(a), e.un("click", u);
          }
        );
      }, [t, e, n]),
      C.jsx("div", {
        ref: i,
        className: "top5-pinOverlay",
        children:
          r &&
          C.jsx("div", {
            className: "top5-infoBox",
            children: C.jsx("p", { children: r.name }),
          }),
      })
    );
  },
  Is = [
    {
      name: "Top 5 pastries/cakes",
      items: [
        {
          name: "Baker Nordby Tøyen",
          description: "Great selection of pastries.",
          coordinates: [10.775941726871055, 59.91512299311516],
          type: "cafe",
        },
        {
          name: "Åpent Bakeri",
          description: "Delicious bread and cakes.",
          coordinates: [10.737271184657118, 59.914487411502705],
          type: "cafe",
        },
        {
          name: "Grains",
          description: "Healthy and tasty options.",
          coordinates: [10.715832654450786, 59.93024275618359],
          type: "cafe",
        },
        {
          name: "Svingen Kolonial og Kafe",
          description: "Charming cafe with homemade treats.",
          coordinates: [10.77666349677681, 59.90130046600219],
          type: "cafe",
        },
      ],
    },
    {
      name: "Top 5 places in summer",
      items: [
        {
          name: "Kafe Celsius",
          description: "This place is a 6/6!",
          coordinates: [10.740322354449022, 59.910406159638676],
          type: "cafe",
        },
        {
          name: "Bygdøy",
          description: "Perfect for summer outings.",
          coordinates: [10.679318305340871, 59.912086619429836],
          type: "activity",
        },
        {
          name: "Svingen- Kolonial og Kafe",
          description: "Lovely spot for a summer day.",
          coordinates: [10.77666349677681, 59.90130046600219],
          type: "cafe",
        },
      ],
    },
    {
      name: "Top 5 places to eat",
      items: [
        {
          name: "Mamma pizza",
          description: "Best pizza in town.",
          coordinates: [10.74652173182837, 59.911194234363165],
          type: "restaurant",
        },
      ],
    },
    {
      name: "Top 5 hidden gems",
      items: [
        {
          name: "Svingen Kolonial og Kafe",
          description: "A hidden gem.",
          coordinates: [10.77666349677681, 59.90130046600219],
          type: "cafe",
        },
        {
          name: "Smia Galleri",
          description: "Great atmosphere and art.",
          coordinates: [10.78569481857125, 59.91005868258227],
          type: "bar",
        },
        {
          name: "Stien ned fra Frognerparken",
          description: "Scenic walk with beautiful views.",
          coordinates: [10.703559227464755, 59.92670289745729],
          type: "activity",
        },
      ],
    },
    {
      name: "Top 5 cozy places with beer",
      items: [
        {
          name: "Schous Kjelleren",
          description: "Cozy and friendly.",
          coordinates: [10.760463728836356, 59.91838888824651],
          type: "bar",
        },
        {
          name: "Frognerseteren",
          description: "Amazing view with great beer.",
          coordinates: [10.67858636534918, 59.980599683237706],
          type: "bar",
        },
        {
          name: "Asylet",
          description: "Historic and charming.",
          coordinates: [10.761010590485542, 59.91445938035087],
          type: "bar",
        },
        {
          name: "Smia Galleri",
          description: "Art and beer together.",
          coordinates: [10.78569481857125, 59.91005868258227],
          type: "bar",
        },
      ],
    },
    {
      name: "Top 5 walks on a Sunday",
      items: [
        {
          name: "Kampen-Vålerenga",
          description: "Lovely Sunday walk.",
          coordinates: [10.77922453744859, 59.9140995579135],
          type: "hike",
        },
        {
          name: "Kvernerbyen-Svartdalsparken",
          description: "Beautiful nature trail.",
          coordinates: [10.798584496777053, 59.904053814495484],
          type: "hike",
        },
      ],
    },
  ],
  dT = ({ show: t, handleClose: e }) => {
    const [n, i] = P.useState(t),
      [r, s] = P.useState(null),
      [o, l] = P.useState(!1),
      [a, u] = P.useState([]),
      c = P.useRef(null);
    P.useEffect(() => {
      u(Is.flatMap((p) => p.items)), i(t);
    }, [t]);
    const h = (p) => {
        i(!1), e();
      },
      d = (p) => {
        c.current && !c.current.contains(p.target) && (i(!1), e());
      },
      f = () => {
        l(!0);
      };
    return C.jsxs(C.Fragment, {
      children: [
        n && C.jsx("div", { className: "blur-background", onClick: d }),
        C.jsx("div", {
          className: n ? "overlay show" : "overlay hide",
          onClick: d,
          children: C.jsx("div", {
            className: "overlay-content",
            id: "top5Overlay",
            ref: c,
            onClick: (p) => p.stopPropagation(),
            children:
              r === null
                ? C.jsxs(C.Fragment, {
                    children: [
                      C.jsx("button", {
                        className: "btn btn-success close-button",
                        onClick: h,
                        children: "x",
                      }),
                      C.jsx("h2", {
                        className: "top5-header",
                        children: "Top 5",
                      }),
                      C.jsx("hr", { className: "separator" }),
                      C.jsx("div", {
                        className: "top5-list",
                        children: Is.map((p, _) =>
                          C.jsx(
                            "div",
                            {
                              className: "top5-item",
                              children: C.jsx("button", {
                                className: "btn btn-primary",
                                onClick: () => s(_),
                                children: p.name,
                              }),
                            },
                            _,
                          ),
                        ),
                      }),
                    ],
                  })
                : C.jsxs("div", {
                    className: "top5PlacesOverlay",
                    children: [
                      C.jsx("button", {
                        className: "back-Button",
                        onClick: () => s(null),
                        children: "⬅",
                      }),
                      C.jsx("h2", {
                        className: "top5-header",
                        children: Is[r].name,
                      }),
                      C.jsx("ul", {
                        children: Is[r].items.map((p, _) =>
                          C.jsxs(
                            "li",
                            {
                              className: "top5Results",
                              children: [
                                C.jsx("strong", { children: p.name }),
                                C.jsx("p", { children: p.description }),
                              ],
                            },
                            _,
                          ),
                        ),
                      }),
                      C.jsx("button", {
                        className: "seeInMapBtn",
                        onClick: f,
                        children: "Show in map",
                      }),
                      o && C.jsx(hT, { places: Is[r].items }),
                    ],
                  }),
          }),
        }),
      ],
    });
  },
  fT = () => {
    const [t, e] = P.useState(!1),
      [n, i] = P.useState(!1),
      r = () => {
        e(!t);
      },
      s = () => {
        i(!n);
      },
      o = () => {
        e(!1);
      },
      l = () => {
        i(!1);
      };
    return C.jsxs("div", {
      className: "bottomNavbar",
      children: [
        C.jsxs("div", {
          className: "bottomNavbar-buttons",
          children: [
            C.jsxs("div", {
              className: "bottomNavbar-item",
              onClick: r,
              children: [
                C.jsx("img", {
                  src: "/Where-to-oslo/images/categoryPin.svg",
                  alt: "Category Icon",
                  className: "bottomNavbar-icon",
                  id: "categoryIcon",
                }),
                C.jsx("div", {
                  className: "bottomNavbar-text",
                  id: "bottomNavbarText",
                  children: "Category",
                }),
              ],
            }),
            C.jsxs("div", {
              className: "bottomNavbar-item",
              onClick: s,
              children: [
                C.jsx("img", {
                  src: "/Where-to-oslo/images/top5Pin.svg",
                  alt: "Top 5 Icon",
                  className: "bottomNavbar-icon",
                  id: "top5Icon",
                }),
                C.jsx("div", {
                  className: "bottomNavbar-text",
                  id: "bottomNavbarText",
                  children: "Top 5",
                }),
              ],
            }),
          ],
        }),
        C.jsx(sT, { show: t, handleClose: o }),
        C.jsx(dT, { show: n, handleClose: l }),
      ],
    });
  };
function gT() {
  const { map: t } = P.useContext(Dt),
    [e, n] = P.useState([]),
    [i, r] = P.useState([]),
    [s, o] = P.useState([]),
    [l, a] = P.useState([]),
    [u, c] = P.useState([]),
    [h, d] = P.useState([]),
    [f, p] = P.useState([]),
    [_, v] = P.useState(new xa({ source: new Hd() })),
    g = P.useMemo(
      () => [_, ...e, ...i, ...s, ...l, ...h, ...f, ...u],
      [_, e, i, s, l, h, f, u],
    );
  P.useEffect(() => t.setLayers(g), [g]);
  const m = P.useRef();
  return (
    P.useEffect(() => t.setTarget(m.current), []),
    P.useEffect(() => t.setLayers(g), [g]),
    C.jsx(Dt.Provider, {
      value: {
        map: t,
        setBaseLayer: v,
        featureLayers: e,
        setFeatureLayers: n,
        setCafeFeatureLayers: r,
        cafeFeatureLayers: i,
        setDrinkFeatureLayers: o,
        drinkFeatureLayers: s,
        storeFeatureLayers: u,
        setStoreFeatureLayers: c,
        activityFeatureLayers: l,
        setActivityFeatureLayers: a,
        restaurantFeatureLayers: h,
        setRestaurantFeatureLayers: d,
        hikeFeatureLayers: f,
        setHikeFeatureLayers: p,
      },
      children: C.jsx("div", {
        children: C.jsxs("main", {
          children: [
            C.jsx("div", {
              ref: m,
              className: "map map-container position-relative",
            }),
            C.jsx(ES, {}),
            C.jsx("div", {
              className: "navbarContainer",
              children: C.jsx(fT, {}),
            }),
          ],
        }),
      }),
    })
  );
}
const mT = rc.createRoot(document.getElementById("root"));
mT.render(C.jsx(gT, {}));
