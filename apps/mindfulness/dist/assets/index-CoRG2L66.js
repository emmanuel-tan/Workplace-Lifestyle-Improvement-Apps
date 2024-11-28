(function () {
  const H = document.createElement("link").relList;
  if (H && H.supports && H.supports("modulepreload")) return;
  for (const j of document.querySelectorAll('link[rel="modulepreload"]')) ve(j);
  new MutationObserver((j) => {
    for (const I of j)
      if (I.type === "childList")
        for (const le of I.addedNodes)
          le.tagName === "LINK" && le.rel === "modulepreload" && ve(le);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(j) {
    const I = {};
    return (
      j.integrity && (I.integrity = j.integrity),
      j.referrerPolicy && (I.referrerPolicy = j.referrerPolicy),
      j.crossOrigin === "use-credentials"
        ? (I.credentials = "include")
        : j.crossOrigin === "anonymous"
        ? (I.credentials = "omit")
        : (I.credentials = "same-origin"),
      I
    );
  }
  function ve(j) {
    if (j.ep) return;
    j.ep = !0;
    const I = m(j);
    fetch(j.href, I);
  }
})();
var xi = { exports: {} },
  gr = {},
  _i = { exports: {} },
  M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _a;
function Rf() {
  if (_a) return M;
  _a = 1;
  var T = Symbol.for("react.element"),
    H = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    ve = Symbol.for("react.strict_mode"),
    j = Symbol.for("react.profiler"),
    I = Symbol.for("react.provider"),
    le = Symbol.for("react.context"),
    ue = Symbol.for("react.forward_ref"),
    U = Symbol.for("react.suspense"),
    ee = Symbol.for("react.memo"),
    G = Symbol.for("react.lazy"),
    W = Symbol.iterator;
  function K(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = (W && c[W]) || c["@@iterator"]),
        typeof c == "function" ? c : null);
  }
  var se = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    ae = Object.assign,
    ne = {};
  function X(c, h, O) {
    (this.props = c),
      (this.context = h),
      (this.refs = ne),
      (this.updater = O || se);
  }
  (X.prototype.isReactComponent = {}),
    (X.prototype.setState = function (c, h) {
      if (typeof c != "object" && typeof c != "function" && c != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, c, h, "setState");
    }),
    (X.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, "forceUpdate");
    });
  function gn() {}
  gn.prototype = X.prototype;
  function cn(c, h, O) {
    (this.props = c),
      (this.context = h),
      (this.refs = ne),
      (this.updater = O || se);
  }
  var be = (cn.prototype = new gn());
  (be.constructor = cn), ae(be, X.prototype), (be.isPureReactComponent = !0);
  var xe = Array.isArray,
    en = Object.prototype.hasOwnProperty,
    ze = { current: null },
    Re = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ke(c, h, O) {
    var D,
      V = {},
      A = null,
      Z = null;
    if (h != null)
      for (D in (h.ref !== void 0 && (Z = h.ref),
      h.key !== void 0 && (A = "" + h.key),
      h))
        en.call(h, D) && !Re.hasOwnProperty(D) && (V[D] = h[D]);
    var Q = arguments.length - 2;
    if (Q === 1) V.children = O;
    else if (1 < Q) {
      for (var te = Array(Q), Ae = 0; Ae < Q; Ae++) te[Ae] = arguments[Ae + 2];
      V.children = te;
    }
    if (c && c.defaultProps)
      for (D in ((Q = c.defaultProps), Q)) V[D] === void 0 && (V[D] = Q[D]);
    return {
      $$typeof: T,
      type: c,
      key: A,
      ref: Z,
      props: V,
      _owner: ze.current,
    };
  }
  function zn(c, h) {
    return {
      $$typeof: T,
      type: c.type,
      key: h,
      ref: c.ref,
      props: c.props,
      _owner: c._owner,
    };
  }
  function wn(c) {
    return typeof c == "object" && c !== null && c.$$typeof === T;
  }
  function Xn(c) {
    var h = { "=": "=0", ":": "=2" };
    return (
      "$" +
      c.replace(/[=:]/g, function (O) {
        return h[O];
      })
    );
  }
  var fn = /\/+/g;
  function Ve(c, h) {
    return typeof c == "object" && c !== null && c.key != null
      ? Xn("" + c.key)
      : h.toString(36);
  }
  function nn(c, h, O, D, V) {
    var A = typeof c;
    (A === "undefined" || A === "boolean") && (c = null);
    var Z = !1;
    if (c === null) Z = !0;
    else
      switch (A) {
        case "string":
        case "number":
          Z = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case T:
            case H:
              Z = !0;
          }
      }
    if (Z)
      return (
        (Z = c),
        (V = V(Z)),
        (c = D === "" ? "." + Ve(Z, 0) : D),
        xe(V)
          ? ((O = ""),
            c != null && (O = c.replace(fn, "$&/") + "/"),
            nn(V, h, O, "", function (Ae) {
              return Ae;
            }))
          : V != null &&
            (wn(V) &&
              (V = zn(
                V,
                O +
                  (!V.key || (Z && Z.key === V.key)
                    ? ""
                    : ("" + V.key).replace(fn, "$&/") + "/") +
                  c
              )),
            h.push(V)),
        1
      );
    if (((Z = 0), (D = D === "" ? "." : D + ":"), xe(c)))
      for (var Q = 0; Q < c.length; Q++) {
        A = c[Q];
        var te = D + Ve(A, Q);
        Z += nn(A, h, O, te, V);
      }
    else if (((te = K(c)), typeof te == "function"))
      for (c = te.call(c), Q = 0; !(A = c.next()).done; )
        (A = A.value), (te = D + Ve(A, Q++)), (Z += nn(A, h, O, te, V));
    else if (A === "object")
      throw (
        ((h = String(c)),
        Error(
          "Objects are not valid as a React child (found: " +
            (h === "[object Object]"
              ? "object with keys {" + Object.keys(c).join(", ") + "}"
              : h) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return Z;
  }
  function dn(c, h, O) {
    if (c == null) return c;
    var D = [],
      V = 0;
    return (
      nn(c, D, "", "", function (A) {
        return h.call(O, A, V++);
      }),
      D
    );
  }
  function Oe(c) {
    if (c._status === -1) {
      var h = c._result;
      (h = h()),
        h.then(
          function (O) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 1), (c._result = O));
          },
          function (O) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 2), (c._result = O));
          }
        ),
        c._status === -1 && ((c._status = 0), (c._result = h));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var ce = { current: null },
    S = { transition: null },
    L = {
      ReactCurrentDispatcher: ce,
      ReactCurrentBatchConfig: S,
      ReactCurrentOwner: ze,
    };
  function x() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (M.Children = {
      map: dn,
      forEach: function (c, h, O) {
        dn(
          c,
          function () {
            h.apply(this, arguments);
          },
          O
        );
      },
      count: function (c) {
        var h = 0;
        return (
          dn(c, function () {
            h++;
          }),
          h
        );
      },
      toArray: function (c) {
        return (
          dn(c, function (h) {
            return h;
          }) || []
        );
      },
      only: function (c) {
        if (!wn(c))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return c;
      },
    }),
    (M.Component = X),
    (M.Fragment = m),
    (M.Profiler = j),
    (M.PureComponent = cn),
    (M.StrictMode = ve),
    (M.Suspense = U),
    (M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
    (M.act = x),
    (M.cloneElement = function (c, h, O) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            "."
        );
      var D = ae({}, c.props),
        V = c.key,
        A = c.ref,
        Z = c._owner;
      if (h != null) {
        if (
          (h.ref !== void 0 && ((A = h.ref), (Z = ze.current)),
          h.key !== void 0 && (V = "" + h.key),
          c.type && c.type.defaultProps)
        )
          var Q = c.type.defaultProps;
        for (te in h)
          en.call(h, te) &&
            !Re.hasOwnProperty(te) &&
            (D[te] = h[te] === void 0 && Q !== void 0 ? Q[te] : h[te]);
      }
      var te = arguments.length - 2;
      if (te === 1) D.children = O;
      else if (1 < te) {
        Q = Array(te);
        for (var Ae = 0; Ae < te; Ae++) Q[Ae] = arguments[Ae + 2];
        D.children = Q;
      }
      return { $$typeof: T, type: c.type, key: V, ref: A, props: D, _owner: Z };
    }),
    (M.createContext = function (c) {
      return (
        (c = {
          $$typeof: le,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (c.Provider = { $$typeof: I, _context: c }),
        (c.Consumer = c)
      );
    }),
    (M.createElement = Ke),
    (M.createFactory = function (c) {
      var h = Ke.bind(null, c);
      return (h.type = c), h;
    }),
    (M.createRef = function () {
      return { current: null };
    }),
    (M.forwardRef = function (c) {
      return { $$typeof: ue, render: c };
    }),
    (M.isValidElement = wn),
    (M.lazy = function (c) {
      return { $$typeof: G, _payload: { _status: -1, _result: c }, _init: Oe };
    }),
    (M.memo = function (c, h) {
      return { $$typeof: ee, type: c, compare: h === void 0 ? null : h };
    }),
    (M.startTransition = function (c) {
      var h = S.transition;
      S.transition = {};
      try {
        c();
      } finally {
        S.transition = h;
      }
    }),
    (M.unstable_act = x),
    (M.useCallback = function (c, h) {
      return ce.current.useCallback(c, h);
    }),
    (M.useContext = function (c) {
      return ce.current.useContext(c);
    }),
    (M.useDebugValue = function () {}),
    (M.useDeferredValue = function (c) {
      return ce.current.useDeferredValue(c);
    }),
    (M.useEffect = function (c, h) {
      return ce.current.useEffect(c, h);
    }),
    (M.useId = function () {
      return ce.current.useId();
    }),
    (M.useImperativeHandle = function (c, h, O) {
      return ce.current.useImperativeHandle(c, h, O);
    }),
    (M.useInsertionEffect = function (c, h) {
      return ce.current.useInsertionEffect(c, h);
    }),
    (M.useLayoutEffect = function (c, h) {
      return ce.current.useLayoutEffect(c, h);
    }),
    (M.useMemo = function (c, h) {
      return ce.current.useMemo(c, h);
    }),
    (M.useReducer = function (c, h, O) {
      return ce.current.useReducer(c, h, O);
    }),
    (M.useRef = function (c) {
      return ce.current.useRef(c);
    }),
    (M.useState = function (c) {
      return ce.current.useState(c);
    }),
    (M.useSyncExternalStore = function (c, h, O) {
      return ce.current.useSyncExternalStore(c, h, O);
    }),
    (M.useTransition = function () {
      return ce.current.useTransition();
    }),
    (M.version = "18.3.1"),
    M
  );
}
var Ca;
function zi() {
  return Ca || ((Ca = 1), (_i.exports = Rf())), _i.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Na;
function Of() {
  if (Na) return gr;
  Na = 1;
  var T = zi(),
    H = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    ve = Object.prototype.hasOwnProperty,
    j = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function le(ue, U, ee) {
    var G,
      W = {},
      K = null,
      se = null;
    ee !== void 0 && (K = "" + ee),
      U.key !== void 0 && (K = "" + U.key),
      U.ref !== void 0 && (se = U.ref);
    for (G in U) ve.call(U, G) && !I.hasOwnProperty(G) && (W[G] = U[G]);
    if (ue && ue.defaultProps)
      for (G in ((U = ue.defaultProps), U)) W[G] === void 0 && (W[G] = U[G]);
    return {
      $$typeof: H,
      type: ue,
      key: K,
      ref: se,
      props: W,
      _owner: j.current,
    };
  }
  return (gr.Fragment = m), (gr.jsx = le), (gr.jsxs = le), gr;
}
var Pa;
function Mf() {
  return Pa || ((Pa = 1), (xi.exports = Of())), xi.exports;
}
var Y = Mf(),
  We = zi(),
  Tl = {},
  Ci = { exports: {} },
  Ue = {},
  Ni = { exports: {} },
  Pi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var za;
function Df() {
  return (
    za ||
      ((za = 1),
      (function (T) {
        function H(S, L) {
          var x = S.length;
          S.push(L);
          e: for (; 0 < x; ) {
            var c = (x - 1) >>> 1,
              h = S[c];
            if (0 < j(h, L)) (S[c] = L), (S[x] = h), (x = c);
            else break e;
          }
        }
        function m(S) {
          return S.length === 0 ? null : S[0];
        }
        function ve(S) {
          if (S.length === 0) return null;
          var L = S[0],
            x = S.pop();
          if (x !== L) {
            S[0] = x;
            e: for (var c = 0, h = S.length, O = h >>> 1; c < O; ) {
              var D = 2 * (c + 1) - 1,
                V = S[D],
                A = D + 1,
                Z = S[A];
              if (0 > j(V, x))
                A < h && 0 > j(Z, V)
                  ? ((S[c] = Z), (S[A] = x), (c = A))
                  : ((S[c] = V), (S[D] = x), (c = D));
              else if (A < h && 0 > j(Z, x)) (S[c] = Z), (S[A] = x), (c = A);
              else break e;
            }
          }
          return L;
        }
        function j(S, L) {
          var x = S.sortIndex - L.sortIndex;
          return x !== 0 ? x : S.id - L.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var I = performance;
          T.unstable_now = function () {
            return I.now();
          };
        } else {
          var le = Date,
            ue = le.now();
          T.unstable_now = function () {
            return le.now() - ue;
          };
        }
        var U = [],
          ee = [],
          G = 1,
          W = null,
          K = 3,
          se = !1,
          ae = !1,
          ne = !1,
          X = typeof setTimeout == "function" ? setTimeout : null,
          gn = typeof clearTimeout == "function" ? clearTimeout : null,
          cn = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function be(S) {
          for (var L = m(ee); L !== null; ) {
            if (L.callback === null) ve(ee);
            else if (L.startTime <= S)
              ve(ee), (L.sortIndex = L.expirationTime), H(U, L);
            else break;
            L = m(ee);
          }
        }
        function xe(S) {
          if (((ne = !1), be(S), !ae))
            if (m(U) !== null) (ae = !0), Oe(en);
            else {
              var L = m(ee);
              L !== null && ce(xe, L.startTime - S);
            }
        }
        function en(S, L) {
          (ae = !1), ne && ((ne = !1), gn(Ke), (Ke = -1)), (se = !0);
          var x = K;
          try {
            for (
              be(L), W = m(U);
              W !== null && (!(W.expirationTime > L) || (S && !Xn()));

            ) {
              var c = W.callback;
              if (typeof c == "function") {
                (W.callback = null), (K = W.priorityLevel);
                var h = c(W.expirationTime <= L);
                (L = T.unstable_now()),
                  typeof h == "function"
                    ? (W.callback = h)
                    : W === m(U) && ve(U),
                  be(L);
              } else ve(U);
              W = m(U);
            }
            if (W !== null) var O = !0;
            else {
              var D = m(ee);
              D !== null && ce(xe, D.startTime - L), (O = !1);
            }
            return O;
          } finally {
            (W = null), (K = x), (se = !1);
          }
        }
        var ze = !1,
          Re = null,
          Ke = -1,
          zn = 5,
          wn = -1;
        function Xn() {
          return !(T.unstable_now() - wn < zn);
        }
        function fn() {
          if (Re !== null) {
            var S = T.unstable_now();
            wn = S;
            var L = !0;
            try {
              L = Re(!0, S);
            } finally {
              L ? Ve() : ((ze = !1), (Re = null));
            }
          } else ze = !1;
        }
        var Ve;
        if (typeof cn == "function")
          Ve = function () {
            cn(fn);
          };
        else if (typeof MessageChannel < "u") {
          var nn = new MessageChannel(),
            dn = nn.port2;
          (nn.port1.onmessage = fn),
            (Ve = function () {
              dn.postMessage(null);
            });
        } else
          Ve = function () {
            X(fn, 0);
          };
        function Oe(S) {
          (Re = S), ze || ((ze = !0), Ve());
        }
        function ce(S, L) {
          Ke = X(function () {
            S(T.unstable_now());
          }, L);
        }
        (T.unstable_IdlePriority = 5),
          (T.unstable_ImmediatePriority = 1),
          (T.unstable_LowPriority = 4),
          (T.unstable_NormalPriority = 3),
          (T.unstable_Profiling = null),
          (T.unstable_UserBlockingPriority = 2),
          (T.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (T.unstable_continueExecution = function () {
            ae || se || ((ae = !0), Oe(en));
          }),
          (T.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (zn = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (T.unstable_getCurrentPriorityLevel = function () {
            return K;
          }),
          (T.unstable_getFirstCallbackNode = function () {
            return m(U);
          }),
          (T.unstable_next = function (S) {
            switch (K) {
              case 1:
              case 2:
              case 3:
                var L = 3;
                break;
              default:
                L = K;
            }
            var x = K;
            K = L;
            try {
              return S();
            } finally {
              K = x;
            }
          }),
          (T.unstable_pauseExecution = function () {}),
          (T.unstable_requestPaint = function () {}),
          (T.unstable_runWithPriority = function (S, L) {
            switch (S) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                S = 3;
            }
            var x = K;
            K = S;
            try {
              return L();
            } finally {
              K = x;
            }
          }),
          (T.unstable_scheduleCallback = function (S, L, x) {
            var c = T.unstable_now();
            switch (
              (typeof x == "object" && x !== null
                ? ((x = x.delay),
                  (x = typeof x == "number" && 0 < x ? c + x : c))
                : (x = c),
              S)
            ) {
              case 1:
                var h = -1;
                break;
              case 2:
                h = 250;
                break;
              case 5:
                h = 1073741823;
                break;
              case 4:
                h = 1e4;
                break;
              default:
                h = 5e3;
            }
            return (
              (h = x + h),
              (S = {
                id: G++,
                callback: L,
                priorityLevel: S,
                startTime: x,
                expirationTime: h,
                sortIndex: -1,
              }),
              x > c
                ? ((S.sortIndex = x),
                  H(ee, S),
                  m(U) === null &&
                    S === m(ee) &&
                    (ne ? (gn(Ke), (Ke = -1)) : (ne = !0), ce(xe, x - c)))
                : ((S.sortIndex = h), H(U, S), ae || se || ((ae = !0), Oe(en))),
              S
            );
          }),
          (T.unstable_shouldYield = Xn),
          (T.unstable_wrapCallback = function (S) {
            var L = K;
            return function () {
              var x = K;
              K = L;
              try {
                return S.apply(this, arguments);
              } finally {
                K = x;
              }
            };
          });
      })(Pi)),
    Pi
  );
}
var Ta;
function jf() {
  return Ta || ((Ta = 1), (Ni.exports = Df())), Ni.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var La;
function If() {
  if (La) return Ue;
  La = 1;
  var T = zi(),
    H = jf();
  function m(e) {
    for (
      var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        t = 1;
      t < arguments.length;
      t++
    )
      n += "&args[]=" + encodeURIComponent(arguments[t]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var ve = new Set(),
    j = {};
  function I(e, n) {
    le(e, n), le(e + "Capture", n);
  }
  function le(e, n) {
    for (j[e] = n, e = 0; e < n.length; e++) ve.add(n[e]);
  }
  var ue = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    U = Object.prototype.hasOwnProperty,
    ee =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    G = {},
    W = {};
  function K(e) {
    return U.call(W, e)
      ? !0
      : U.call(G, e)
      ? !1
      : ee.test(e)
      ? (W[e] = !0)
      : ((G[e] = !0), !1);
  }
  function se(e, n, t, r) {
    if (t !== null && t.type === 0) return !1;
    switch (typeof n) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : t !== null
          ? !t.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function ae(e, n, t, r) {
    if (n === null || typeof n > "u" || se(e, n, t, r)) return !0;
    if (r) return !1;
    if (t !== null)
      switch (t.type) {
        case 3:
          return !n;
        case 4:
          return n === !1;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || 1 > n;
      }
    return !1;
  }
  function ne(e, n, t, r, l, u, i) {
    (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = t),
      (this.propertyName = e),
      (this.type = n),
      (this.sanitizeURL = u),
      (this.removeEmptyString = i);
  }
  var X = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      X[e] = new ne(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var n = e[0];
      X[n] = new ne(n, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      X[e] = new ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      X[e] = new ne(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        X[e] = new ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      X[e] = new ne(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      X[e] = new ne(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      X[e] = new ne(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      X[e] = new ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var gn = /[\-:]([a-z])/g;
  function cn(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var n = e.replace(gn, cn);
      X[n] = new ne(n, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var n = e.replace(gn, cn);
        X[n] = new ne(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var n = e.replace(gn, cn);
      X[n] = new ne(
        n,
        1,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1
      );
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      X[e] = new ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (X.xlinkHref = new ne(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      X[e] = new ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function be(e, n, t, r) {
    var l = X.hasOwnProperty(n) ? X[n] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < n.length) ||
        (n[0] !== "o" && n[0] !== "O") ||
        (n[1] !== "n" && n[1] !== "N")) &&
      (ae(n, t, l, r) && (t = null),
      r || l === null
        ? K(n) &&
          (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
        : l.mustUseProperty
        ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
        : ((n = l.attributeName),
          (r = l.attributeNamespace),
          t === null
            ? e.removeAttribute(n)
            : ((l = l.type),
              (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
              r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var xe = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    en = Symbol.for("react.element"),
    ze = Symbol.for("react.portal"),
    Re = Symbol.for("react.fragment"),
    Ke = Symbol.for("react.strict_mode"),
    zn = Symbol.for("react.profiler"),
    wn = Symbol.for("react.provider"),
    Xn = Symbol.for("react.context"),
    fn = Symbol.for("react.forward_ref"),
    Ve = Symbol.for("react.suspense"),
    nn = Symbol.for("react.suspense_list"),
    dn = Symbol.for("react.memo"),
    Oe = Symbol.for("react.lazy"),
    ce = Symbol.for("react.offscreen"),
    S = Symbol.iterator;
  function L(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (S && e[S]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var x = Object.assign,
    c;
  function h(e) {
    if (c === void 0)
      try {
        throw Error();
      } catch (t) {
        var n = t.stack.trim().match(/\n( *(at )?)/);
        c = (n && n[1]) || "";
      }
    return (
      `
` +
      c +
      e
    );
  }
  var O = !1;
  function D(e, n) {
    if (!e || O) return "";
    O = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n)
        if (
          ((n = function () {
            throw Error();
          }),
          Object.defineProperty(n.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(n, []);
          } catch (p) {
            var r = p;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (p) {
            r = p;
          }
          e.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == "string") {
        for (
          var l = p.stack.split(`
`),
            u = r.stack.split(`
`),
            i = l.length - 1,
            o = u.length - 1;
          1 <= i && 0 <= o && l[i] !== u[o];

        )
          o--;
        for (; 1 <= i && 0 <= o; i--, o--)
          if (l[i] !== u[o]) {
            if (i !== 1 || o !== 1)
              do
                if ((i--, o--, 0 > o || l[i] !== u[o])) {
                  var s =
                    `
` + l[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      s.includes("<anonymous>") &&
                      (s = s.replace("<anonymous>", e.displayName)),
                    s
                  );
                }
              while (1 <= i && 0 <= o);
            break;
          }
      }
    } finally {
      (O = !1), (Error.prepareStackTrace = t);
    }
    return (e = e ? e.displayName || e.name : "") ? h(e) : "";
  }
  function V(e) {
    switch (e.tag) {
      case 5:
        return h(e.type);
      case 16:
        return h("Lazy");
      case 13:
        return h("Suspense");
      case 19:
        return h("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = D(e.type, !1)), e;
      case 11:
        return (e = D(e.type.render, !1)), e;
      case 1:
        return (e = D(e.type, !0)), e;
      default:
        return "";
    }
  }
  function A(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Re:
        return "Fragment";
      case ze:
        return "Portal";
      case zn:
        return "Profiler";
      case Ke:
        return "StrictMode";
      case Ve:
        return "Suspense";
      case nn:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Xn:
          return (e.displayName || "Context") + ".Consumer";
        case wn:
          return (e._context.displayName || "Context") + ".Provider";
        case fn:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case dn:
          return (
            (n = e.displayName || null), n !== null ? n : A(e.type) || "Memo"
          );
        case Oe:
          (n = e._payload), (e = e._init);
          try {
            return A(e(n));
          } catch {}
      }
    return null;
  }
  function Z(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = n.render),
          (e = e.displayName || e.name || ""),
          n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return A(n);
      case 8:
        return n === Ke ? "StrictMode" : "Mode";
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
        if (typeof n == "function") return n.displayName || n.name || null;
        if (typeof n == "string") return n;
    }
    return null;
  }
  function Q(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function te(e) {
    var n = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function Ae(e) {
    var n = te(e) ? "checked" : "value",
      t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      r = "" + e[n];
    if (
      !e.hasOwnProperty(n) &&
      typeof t < "u" &&
      typeof t.get == "function" &&
      typeof t.set == "function"
    ) {
      var l = t.get,
        u = t.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (i) {
            (r = "" + i), u.call(this, i);
          },
        }),
        Object.defineProperty(e, n, { enumerable: t.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (i) {
            r = "" + i;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[n];
          },
        }
      );
    }
  }
  function wr(e) {
    e._valueTracker || (e._valueTracker = Ae(e));
  }
  function Ti(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(),
      r = "";
    return (
      e && (r = te(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== t ? (n.setValue(e), !0) : !1
    );
  }
  function Sr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ll(e, n) {
    var t = n.checked;
    return x({}, n, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: t ?? e._wrapperState.initialChecked,
    });
  }
  function Li(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue,
      r = n.checked != null ? n.checked : n.defaultChecked;
    (t = Q(n.value != null ? n.value : t)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: t,
        controlled:
          n.type === "checkbox" || n.type === "radio"
            ? n.checked != null
            : n.value != null,
      });
  }
  function Ri(e, n) {
    (n = n.checked), n != null && be(e, "checked", n, !1);
  }
  function Rl(e, n) {
    Ri(e, n);
    var t = Q(n.value),
      r = n.type;
    if (t != null)
      r === "number"
        ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
        : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value")
      ? Ol(e, n.type, t)
      : n.hasOwnProperty("defaultValue") && Ol(e, n.type, Q(n.defaultValue)),
      n.checked == null &&
        n.defaultChecked != null &&
        (e.defaultChecked = !!n.defaultChecked);
  }
  function Oi(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var r = n.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (n.value !== void 0 && n.value !== null)
        )
      )
        return;
      (n = "" + e._wrapperState.initialValue),
        t || n === e.value || (e.value = n),
        (e.defaultValue = n);
    }
    (t = e.name),
      t !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      t !== "" && (e.name = t);
  }
  function Ol(e, n, t) {
    (n !== "number" || Sr(e.ownerDocument) !== e) &&
      (t == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var Mt = Array.isArray;
  function st(e, n, t, r) {
    if (((e = e.options), n)) {
      n = {};
      for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
      for (t = 0; t < e.length; t++)
        (l = n.hasOwnProperty("$" + e[t].value)),
          e[t].selected !== l && (e[t].selected = l),
          l && r && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + Q(t), n = null, l = 0; l < e.length; l++) {
        if (e[l].value === t) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        n !== null || e[l].disabled || (n = e[l]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Ml(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(m(91));
    return x({}, n, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Mi(e, n) {
    var t = n.value;
    if (t == null) {
      if (((t = n.children), (n = n.defaultValue), t != null)) {
        if (n != null) throw Error(m(92));
        if (Mt(t)) {
          if (1 < t.length) throw Error(m(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), (t = n);
    }
    e._wrapperState = { initialValue: Q(t) };
  }
  function Di(e, n) {
    var t = Q(n.value),
      r = Q(n.defaultValue);
    t != null &&
      ((t = "" + t),
      t !== e.value && (e.value = t),
      n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
      r != null && (e.defaultValue = "" + r);
  }
  function ji(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue &&
      n !== "" &&
      n !== null &&
      (e.value = n);
  }
  function Ii(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Dl(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Ii(n)
      : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var kr,
    Fi = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (n, t, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(n, t, r, l);
            });
          }
        : e;
    })(function (e, n) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = n;
      else {
        for (
          kr = kr || document.createElement("div"),
            kr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
            n = kr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; n.firstChild; ) e.appendChild(n.firstChild);
      }
    });
  function Dt(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var jt = {
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
    Da = ["Webkit", "ms", "Moz", "O"];
  Object.keys(jt).forEach(function (e) {
    Da.forEach(function (n) {
      (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (jt[n] = jt[e]);
    });
  });
  function Ui(e, n, t) {
    return n == null || typeof n == "boolean" || n === ""
      ? ""
      : t || typeof n != "number" || n === 0 || (jt.hasOwnProperty(e) && jt[e])
      ? ("" + n).trim()
      : n + "px";
  }
  function Vi(e, n) {
    e = e.style;
    for (var t in n)
      if (n.hasOwnProperty(t)) {
        var r = t.indexOf("--") === 0,
          l = Ui(t, n[t], r);
        t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
      }
  }
  var ja = x(
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
    }
  );
  function jl(e, n) {
    if (n) {
      if (ja[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(m(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(m(60));
        if (
          typeof n.dangerouslySetInnerHTML != "object" ||
          !("__html" in n.dangerouslySetInnerHTML)
        )
          throw Error(m(61));
      }
      if (n.style != null && typeof n.style != "object") throw Error(m(62));
    }
  }
  function Il(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
    switch (e) {
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
  var Fl = null;
  function Ul(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Vl = null,
    at = null,
    ct = null;
  function Ai(e) {
    if ((e = rr(e))) {
      if (typeof Vl != "function") throw Error(m(280));
      var n = e.stateNode;
      n && ((n = $r(n)), Vl(e.stateNode, e.type, n));
    }
  }
  function Bi(e) {
    at ? (ct ? ct.push(e) : (ct = [e])) : (at = e);
  }
  function Hi() {
    if (at) {
      var e = at,
        n = ct;
      if (((ct = at = null), Ai(e), n)) for (e = 0; e < n.length; e++) Ai(n[e]);
    }
  }
  function Qi(e, n) {
    return e(n);
  }
  function $i() {}
  var Al = !1;
  function Wi(e, n, t) {
    if (Al) return e(n, t);
    Al = !0;
    try {
      return Qi(e, n, t);
    } finally {
      (Al = !1), (at !== null || ct !== null) && ($i(), Hi());
    }
  }
  function It(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var r = $r(t);
    if (r === null) return null;
    t = r[n];
    e: switch (n) {
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
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (t && typeof t != "function") throw Error(m(231, n, typeof t));
    return t;
  }
  var Bl = !1;
  if (ue)
    try {
      var Ft = {};
      Object.defineProperty(Ft, "passive", {
        get: function () {
          Bl = !0;
        },
      }),
        window.addEventListener("test", Ft, Ft),
        window.removeEventListener("test", Ft, Ft);
    } catch {
      Bl = !1;
    }
  function Ia(e, n, t, r, l, u, i, o, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var Ut = !1,
    Er = null,
    xr = !1,
    Hl = null,
    Fa = {
      onError: function (e) {
        (Ut = !0), (Er = e);
      },
    };
  function Ua(e, n, t, r, l, u, i, o, s) {
    (Ut = !1), (Er = null), Ia.apply(Fa, arguments);
  }
  function Va(e, n, t, r, l, u, i, o, s) {
    if ((Ua.apply(this, arguments), Ut)) {
      if (Ut) {
        var p = Er;
        (Ut = !1), (Er = null);
      } else throw Error(m(198));
      xr || ((xr = !0), (Hl = p));
    }
  }
  function Gn(e) {
    var n = e,
      t = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
      while (e);
    }
    return n.tag === 3 ? t : null;
  }
  function Ki(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function Yi(e) {
    if (Gn(e) !== e) throw Error(m(188));
  }
  function Aa(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = Gn(e)), n === null)) throw Error(m(188));
      return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
      var l = t.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (((r = l.return), r !== null)) {
          t = r;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === t) return Yi(l), e;
          if (u === r) return Yi(l), n;
          u = u.sibling;
        }
        throw Error(m(188));
      }
      if (t.return !== r.return) (t = l), (r = u);
      else {
        for (var i = !1, o = l.child; o; ) {
          if (o === t) {
            (i = !0), (t = l), (r = u);
            break;
          }
          if (o === r) {
            (i = !0), (r = l), (t = u);
            break;
          }
          o = o.sibling;
        }
        if (!i) {
          for (o = u.child; o; ) {
            if (o === t) {
              (i = !0), (t = u), (r = l);
              break;
            }
            if (o === r) {
              (i = !0), (r = u), (t = l);
              break;
            }
            o = o.sibling;
          }
          if (!i) throw Error(m(189));
        }
      }
      if (t.alternate !== r) throw Error(m(190));
    }
    if (t.tag !== 3) throw Error(m(188));
    return t.stateNode.current === t ? e : n;
  }
  function Xi(e) {
    return (e = Aa(e)), e !== null ? Gi(e) : null;
  }
  function Gi(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = Gi(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var Zi = H.unstable_scheduleCallback,
    Ji = H.unstable_cancelCallback,
    Ba = H.unstable_shouldYield,
    Ha = H.unstable_requestPaint,
    de = H.unstable_now,
    Qa = H.unstable_getCurrentPriorityLevel,
    Ql = H.unstable_ImmediatePriority,
    qi = H.unstable_UserBlockingPriority,
    _r = H.unstable_NormalPriority,
    $a = H.unstable_LowPriority,
    bi = H.unstable_IdlePriority,
    Cr = null,
    pn = null;
  function Wa(e) {
    if (pn && typeof pn.onCommitFiberRoot == "function")
      try {
        pn.onCommitFiberRoot(Cr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var tn = Math.clz32 ? Math.clz32 : Xa,
    Ka = Math.log,
    Ya = Math.LN2;
  function Xa(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Ka(e) / Ya) | 0)) | 0;
  }
  var Nr = 64,
    Pr = 4194304;
  function Vt(e) {
    switch (e & -e) {
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
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function zr(e, n) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      u = e.pingedLanes,
      i = t & 268435455;
    if (i !== 0) {
      var o = i & ~l;
      o !== 0 ? (r = Vt(o)) : ((u &= i), u !== 0 && (r = Vt(u)));
    } else (i = t & ~l), i !== 0 ? (r = Vt(i)) : u !== 0 && (r = Vt(u));
    if (r === 0) return 0;
    if (
      n !== 0 &&
      n !== r &&
      !(n & l) &&
      ((l = r & -r), (u = n & -n), l >= u || (l === 16 && (u & 4194240) !== 0))
    )
      return n;
    if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
      for (e = e.entanglements, n &= r; 0 < n; )
        (t = 31 - tn(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
    return r;
  }
  function Ga(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
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
        return n + 5e3;
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
  function Za(e, n) {
    for (
      var t = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        u = e.pendingLanes;
      0 < u;

    ) {
      var i = 31 - tn(u),
        o = 1 << i,
        s = l[i];
      s === -1
        ? (!(o & t) || o & r) && (l[i] = Ga(o, n))
        : s <= n && (e.expiredLanes |= o),
        (u &= ~o);
    }
  }
  function $l(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function eo() {
    var e = Nr;
    return (Nr <<= 1), !(Nr & 4194240) && (Nr = 64), e;
  }
  function Wl(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
  }
  function At(e, n, t) {
    (e.pendingLanes |= n),
      n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (n = 31 - tn(n)),
      (e[n] = t);
  }
  function Ja(e, n) {
    var t = e.pendingLanes & ~n;
    (e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= n),
      (e.mutableReadLanes &= n),
      (e.entangledLanes &= n),
      (n = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - tn(t),
        u = 1 << l;
      (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~u);
    }
  }
  function Kl(e, n) {
    var t = (e.entangledLanes |= n);
    for (e = e.entanglements; t; ) {
      var r = 31 - tn(t),
        l = 1 << r;
      (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
    }
  }
  var $ = 0;
  function no(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var to,
    Yl,
    ro,
    lo,
    uo,
    Xl = !1,
    Tr = [],
    Tn = null,
    Ln = null,
    Rn = null,
    Bt = new Map(),
    Ht = new Map(),
    On = [],
    qa =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function io(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Tn = null;
        break;
      case "dragenter":
      case "dragleave":
        Ln = null;
        break;
      case "mouseover":
      case "mouseout":
        Rn = null;
        break;
      case "pointerover":
      case "pointerout":
        Bt.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ht.delete(n.pointerId);
    }
  }
  function Qt(e, n, t, r, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: n,
          domEventName: t,
          eventSystemFlags: r,
          nativeEvent: u,
          targetContainers: [l],
        }),
        n !== null && ((n = rr(n)), n !== null && Yl(n)),
        e)
      : ((e.eventSystemFlags |= r),
        (n = e.targetContainers),
        l !== null && n.indexOf(l) === -1 && n.push(l),
        e);
  }
  function ba(e, n, t, r, l) {
    switch (n) {
      case "focusin":
        return (Tn = Qt(Tn, e, n, t, r, l)), !0;
      case "dragenter":
        return (Ln = Qt(Ln, e, n, t, r, l)), !0;
      case "mouseover":
        return (Rn = Qt(Rn, e, n, t, r, l)), !0;
      case "pointerover":
        var u = l.pointerId;
        return Bt.set(u, Qt(Bt.get(u) || null, e, n, t, r, l)), !0;
      case "gotpointercapture":
        return (
          (u = l.pointerId), Ht.set(u, Qt(Ht.get(u) || null, e, n, t, r, l)), !0
        );
    }
    return !1;
  }
  function oo(e) {
    var n = Zn(e.target);
    if (n !== null) {
      var t = Gn(n);
      if (t !== null) {
        if (((n = t.tag), n === 13)) {
          if (((n = Ki(t)), n !== null)) {
            (e.blockedOn = n),
              uo(e.priority, function () {
                ro(t);
              });
            return;
          }
        } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Lr(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = Zl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        (Fl = r), t.target.dispatchEvent(r), (Fl = null);
      } else return (n = rr(t)), n !== null && Yl(n), (e.blockedOn = t), !1;
      n.shift();
    }
    return !0;
  }
  function so(e, n, t) {
    Lr(e) && t.delete(n);
  }
  function ec() {
    (Xl = !1),
      Tn !== null && Lr(Tn) && (Tn = null),
      Ln !== null && Lr(Ln) && (Ln = null),
      Rn !== null && Lr(Rn) && (Rn = null),
      Bt.forEach(so),
      Ht.forEach(so);
  }
  function $t(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      Xl ||
        ((Xl = !0),
        H.unstable_scheduleCallback(H.unstable_NormalPriority, ec)));
  }
  function Wt(e) {
    function n(l) {
      return $t(l, e);
    }
    if (0 < Tr.length) {
      $t(Tr[0], e);
      for (var t = 1; t < Tr.length; t++) {
        var r = Tr[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Tn !== null && $t(Tn, e),
        Ln !== null && $t(Ln, e),
        Rn !== null && $t(Rn, e),
        Bt.forEach(n),
        Ht.forEach(n),
        t = 0;
      t < On.length;
      t++
    )
      (r = On[t]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < On.length && ((t = On[0]), t.blockedOn === null); )
      oo(t), t.blockedOn === null && On.shift();
  }
  var ft = xe.ReactCurrentBatchConfig,
    Rr = !0;
  function nc(e, n, t, r) {
    var l = $,
      u = ft.transition;
    ft.transition = null;
    try {
      ($ = 1), Gl(e, n, t, r);
    } finally {
      ($ = l), (ft.transition = u);
    }
  }
  function tc(e, n, t, r) {
    var l = $,
      u = ft.transition;
    ft.transition = null;
    try {
      ($ = 4), Gl(e, n, t, r);
    } finally {
      ($ = l), (ft.transition = u);
    }
  }
  function Gl(e, n, t, r) {
    if (Rr) {
      var l = Zl(e, n, t, r);
      if (l === null) pu(e, n, r, Or, t), io(e, r);
      else if (ba(l, e, n, t, r)) r.stopPropagation();
      else if ((io(e, r), n & 4 && -1 < qa.indexOf(e))) {
        for (; l !== null; ) {
          var u = rr(l);
          if (
            (u !== null && to(u),
            (u = Zl(e, n, t, r)),
            u === null && pu(e, n, r, Or, t),
            u === l)
          )
            break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else pu(e, n, r, null, t);
    }
  }
  var Or = null;
  function Zl(e, n, t, r) {
    if (((Or = null), (e = Ul(r)), (e = Zn(e)), e !== null))
      if (((n = Gn(e)), n === null)) e = null;
      else if (((t = n.tag), t === 13)) {
        if (((e = Ki(n)), e !== null)) return e;
        e = null;
      } else if (t === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else n !== e && (e = null);
    return (Or = e), null;
  }
  function ao(e) {
    switch (e) {
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
        switch (Qa()) {
          case Ql:
            return 1;
          case qi:
            return 4;
          case _r:
          case $a:
            return 16;
          case bi:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Mn = null,
    Jl = null,
    Mr = null;
  function co() {
    if (Mr) return Mr;
    var e,
      n = Jl,
      t = n.length,
      r,
      l = "value" in Mn ? Mn.value : Mn.textContent,
      u = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++);
    var i = t - e;
    for (r = 1; r <= i && n[t - r] === l[u - r]; r++);
    return (Mr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Dr(e) {
    var n = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function jr() {
    return !0;
  }
  function fo() {
    return !1;
  }
  function Be(e) {
    function n(t, r, l, u, i) {
      (this._reactName = t),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null);
      for (var o in e)
        e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(u) : u[o]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? jr
          : fo),
        (this.isPropagationStopped = fo),
        this
      );
    }
    return (
      x(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var t = this.nativeEvent;
          t &&
            (t.preventDefault
              ? t.preventDefault()
              : typeof t.returnValue != "unknown" && (t.returnValue = !1),
            (this.isDefaultPrevented = jr));
        },
        stopPropagation: function () {
          var t = this.nativeEvent;
          t &&
            (t.stopPropagation
              ? t.stopPropagation()
              : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
            (this.isPropagationStopped = jr));
        },
        persist: function () {},
        isPersistent: jr,
      }),
      n
    );
  }
  var dt = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ql = Be(dt),
    Kt = x({}, dt, { view: 0, detail: 0 }),
    rc = Be(Kt),
    bl,
    eu,
    Yt,
    Ir = x({}, Kt, {
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
      getModifierState: tu,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Yt &&
              (Yt && e.type === "mousemove"
                ? ((bl = e.screenX - Yt.screenX), (eu = e.screenY - Yt.screenY))
                : (eu = bl = 0),
              (Yt = e)),
            bl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : eu;
      },
    }),
    po = Be(Ir),
    lc = x({}, Ir, { dataTransfer: 0 }),
    uc = Be(lc),
    ic = x({}, Kt, { relatedTarget: 0 }),
    nu = Be(ic),
    oc = x({}, dt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    sc = Be(oc),
    ac = x({}, dt, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    cc = Be(ac),
    fc = x({}, dt, { data: 0 }),
    mo = Be(fc),
    dc = {
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
    pc = {
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
    mc = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function vc(e) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(e)
      : (e = mc[e])
      ? !!n[e]
      : !1;
  }
  function tu() {
    return vc;
  }
  var hc = x({}, Kt, {
      key: function (e) {
        if (e.key) {
          var n = dc[e.key] || e.key;
          if (n !== "Unidentified") return n;
        }
        return e.type === "keypress"
          ? ((e = Dr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? pc[e.keyCode] || "Unidentified"
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
      getModifierState: tu,
      charCode: function (e) {
        return e.type === "keypress" ? Dr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Dr(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    yc = Be(hc),
    gc = x({}, Ir, {
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
    vo = Be(gc),
    wc = x({}, Kt, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: tu,
    }),
    Sc = Be(wc),
    kc = x({}, dt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ec = Be(kc),
    xc = x({}, Ir, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    _c = Be(xc),
    Cc = [9, 13, 27, 32],
    ru = ue && "CompositionEvent" in window,
    Xt = null;
  ue && "documentMode" in document && (Xt = document.documentMode);
  var Nc = ue && "TextEvent" in window && !Xt,
    ho = ue && (!ru || (Xt && 8 < Xt && 11 >= Xt)),
    yo = " ",
    go = !1;
  function wo(e, n) {
    switch (e) {
      case "keyup":
        return Cc.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function So(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var pt = !1;
  function Pc(e, n) {
    switch (e) {
      case "compositionend":
        return So(n);
      case "keypress":
        return n.which !== 32 ? null : ((go = !0), yo);
      case "textInput":
        return (e = n.data), e === yo && go ? null : e;
      default:
        return null;
    }
  }
  function zc(e, n) {
    if (pt)
      return e === "compositionend" || (!ru && wo(e, n))
        ? ((e = co()), (Mr = Jl = Mn = null), (pt = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return ho && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Tc = {
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
  function ko(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Tc[e.type] : n === "textarea";
  }
  function Eo(e, n, t, r) {
    Bi(r),
      (n = Br(n, "onChange")),
      0 < n.length &&
        ((t = new ql("onChange", "change", null, t, r)),
        e.push({ event: t, listeners: n }));
  }
  var Gt = null,
    Zt = null;
  function Lc(e) {
    Ao(e, 0);
  }
  function Fr(e) {
    var n = gt(e);
    if (Ti(n)) return e;
  }
  function Rc(e, n) {
    if (e === "change") return n;
  }
  var xo = !1;
  if (ue) {
    var lu;
    if (ue) {
      var uu = "oninput" in document;
      if (!uu) {
        var _o = document.createElement("div");
        _o.setAttribute("oninput", "return;"),
          (uu = typeof _o.oninput == "function");
      }
      lu = uu;
    } else lu = !1;
    xo = lu && (!document.documentMode || 9 < document.documentMode);
  }
  function Co() {
    Gt && (Gt.detachEvent("onpropertychange", No), (Zt = Gt = null));
  }
  function No(e) {
    if (e.propertyName === "value" && Fr(Zt)) {
      var n = [];
      Eo(n, Zt, e, Ul(e)), Wi(Lc, n);
    }
  }
  function Oc(e, n, t) {
    e === "focusin"
      ? (Co(), (Gt = n), (Zt = t), Gt.attachEvent("onpropertychange", No))
      : e === "focusout" && Co();
  }
  function Mc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Fr(Zt);
  }
  function Dc(e, n) {
    if (e === "click") return Fr(n);
  }
  function jc(e, n) {
    if (e === "input" || e === "change") return Fr(n);
  }
  function Ic(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var rn = typeof Object.is == "function" ? Object.is : Ic;
  function Jt(e, n) {
    if (rn(e, n)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var t = Object.keys(e),
      r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!U.call(n, l) || !rn(e[l], n[l])) return !1;
    }
    return !0;
  }
  function Po(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function zo(e, n) {
    var t = Po(e);
    e = 0;
    for (var r; t; ) {
      if (t.nodeType === 3) {
        if (((r = e + t.textContent.length), e <= n && r >= n))
          return { node: t, offset: n - e };
        e = r;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = Po(t);
    }
  }
  function To(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
        ? !1
        : n && n.nodeType === 3
        ? To(e, n.parentNode)
        : "contains" in e
        ? e.contains(n)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(n) & 16)
        : !1
      : !1;
  }
  function Lo() {
    for (var e = window, n = Sr(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) e = n.contentWindow;
      else break;
      n = Sr(e.document);
    }
    return n;
  }
  function iu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        n === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Fc(e) {
    var n = Lo(),
      t = e.focusedElem,
      r = e.selectionRange;
    if (
      n !== t &&
      t &&
      t.ownerDocument &&
      To(t.ownerDocument.documentElement, t)
    ) {
      if (r !== null && iu(t)) {
        if (
          ((n = r.start),
          (e = r.end),
          e === void 0 && (e = n),
          "selectionStart" in t)
        )
          (t.selectionStart = n),
            (t.selectionEnd = Math.min(e, t.value.length));
        else if (
          ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = t.textContent.length,
            u = Math.min(r.start, l);
          (r = r.end === void 0 ? u : Math.min(r.end, l)),
            !e.extend && u > r && ((l = r), (r = u), (u = l)),
            (l = zo(t, u));
          var i = zo(t, r);
          l &&
            i &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== i.node ||
              e.focusOffset !== i.offset) &&
            ((n = n.createRange()),
            n.setStart(l.node, l.offset),
            e.removeAllRanges(),
            u > r
              ? (e.addRange(n), e.extend(i.node, i.offset))
              : (n.setEnd(i.node, i.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; (e = e.parentNode); )
        e.nodeType === 1 &&
          n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
        (e = n[t]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Uc = ue && "documentMode" in document && 11 >= document.documentMode,
    mt = null,
    ou = null,
    qt = null,
    su = !1;
  function Ro(e, n, t) {
    var r =
      t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    su ||
      mt == null ||
      mt !== Sr(r) ||
      ((r = mt),
      "selectionStart" in r && iu(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (qt && Jt(qt, r)) ||
        ((qt = r),
        (r = Br(ou, "onSelect")),
        0 < r.length &&
          ((n = new ql("onSelect", "select", null, n, t)),
          e.push({ event: n, listeners: r }),
          (n.target = mt))));
  }
  function Ur(e, n) {
    var t = {};
    return (
      (t[e.toLowerCase()] = n.toLowerCase()),
      (t["Webkit" + e] = "webkit" + n),
      (t["Moz" + e] = "moz" + n),
      t
    );
  }
  var vt = {
      animationend: Ur("Animation", "AnimationEnd"),
      animationiteration: Ur("Animation", "AnimationIteration"),
      animationstart: Ur("Animation", "AnimationStart"),
      transitionend: Ur("Transition", "TransitionEnd"),
    },
    au = {},
    Oo = {};
  ue &&
    ((Oo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete vt.animationend.animation,
      delete vt.animationiteration.animation,
      delete vt.animationstart.animation),
    "TransitionEvent" in window || delete vt.transitionend.transition);
  function Vr(e) {
    if (au[e]) return au[e];
    if (!vt[e]) return e;
    var n = vt[e],
      t;
    for (t in n) if (n.hasOwnProperty(t) && t in Oo) return (au[e] = n[t]);
    return e;
  }
  var Mo = Vr("animationend"),
    Do = Vr("animationiteration"),
    jo = Vr("animationstart"),
    Io = Vr("transitionend"),
    Fo = new Map(),
    Uo =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Dn(e, n) {
    Fo.set(e, n), I(n, [e]);
  }
  for (var cu = 0; cu < Uo.length; cu++) {
    var fu = Uo[cu],
      Vc = fu.toLowerCase(),
      Ac = fu[0].toUpperCase() + fu.slice(1);
    Dn(Vc, "on" + Ac);
  }
  Dn(Mo, "onAnimationEnd"),
    Dn(Do, "onAnimationIteration"),
    Dn(jo, "onAnimationStart"),
    Dn("dblclick", "onDoubleClick"),
    Dn("focusin", "onFocus"),
    Dn("focusout", "onBlur"),
    Dn(Io, "onTransitionEnd"),
    le("onMouseEnter", ["mouseout", "mouseover"]),
    le("onMouseLeave", ["mouseout", "mouseover"]),
    le("onPointerEnter", ["pointerout", "pointerover"]),
    le("onPointerLeave", ["pointerout", "pointerover"]),
    I(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    I(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    I("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    I(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    I(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    I(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var bt =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Bc = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(bt)
    );
  function Vo(e, n, t) {
    var r = e.type || "unknown-event";
    (e.currentTarget = t), Va(r, n, void 0, e), (e.currentTarget = null);
  }
  function Ao(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (n)
          for (var i = r.length - 1; 0 <= i; i--) {
            var o = r[i],
              s = o.instance,
              p = o.currentTarget;
            if (((o = o.listener), s !== u && l.isPropagationStopped()))
              break e;
            Vo(l, o, p), (u = s);
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((o = r[i]),
              (s = o.instance),
              (p = o.currentTarget),
              (o = o.listener),
              s !== u && l.isPropagationStopped())
            )
              break e;
            Vo(l, o, p), (u = s);
          }
      }
    }
    if (xr) throw ((e = Hl), (xr = !1), (Hl = null), e);
  }
  function q(e, n) {
    var t = n[wu];
    t === void 0 && (t = n[wu] = new Set());
    var r = e + "__bubble";
    t.has(r) || (Bo(n, e, 2, !1), t.add(r));
  }
  function du(e, n, t) {
    var r = 0;
    n && (r |= 4), Bo(t, e, r, n);
  }
  var Ar = "_reactListening" + Math.random().toString(36).slice(2);
  function er(e) {
    if (!e[Ar]) {
      (e[Ar] = !0),
        ve.forEach(function (t) {
          t !== "selectionchange" && (Bc.has(t) || du(t, !1, e), du(t, !0, e));
        });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Ar] || ((n[Ar] = !0), du("selectionchange", !1, n));
    }
  }
  function Bo(e, n, t, r) {
    switch (ao(n)) {
      case 1:
        var l = nc;
        break;
      case 4:
        l = tc;
        break;
      default:
        l = Gl;
    }
    (t = l.bind(null, n, t, e)),
      (l = void 0),
      !Bl ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(n, t, { capture: !0, passive: l })
          : e.addEventListener(n, t, !0)
        : l !== void 0
        ? e.addEventListener(n, t, { passive: l })
        : e.addEventListener(n, t, !1);
  }
  function pu(e, n, t, r, l) {
    var u = r;
    if (!(n & 1) && !(n & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var o = r.stateNode.containerInfo;
          if (o === l || (o.nodeType === 8 && o.parentNode === l)) break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var s = i.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = i.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              i = i.return;
            }
          for (; o !== null; ) {
            if (((i = Zn(o)), i === null)) return;
            if (((s = i.tag), s === 5 || s === 6)) {
              r = u = i;
              continue e;
            }
            o = o.parentNode;
          }
        }
        r = r.return;
      }
    Wi(function () {
      var p = u,
        y = Ul(t),
        g = [];
      e: {
        var v = Fo.get(e);
        if (v !== void 0) {
          var k = ql,
            _ = e;
          switch (e) {
            case "keypress":
              if (Dr(t) === 0) break e;
            case "keydown":
            case "keyup":
              k = yc;
              break;
            case "focusin":
              (_ = "focus"), (k = nu);
              break;
            case "focusout":
              (_ = "blur"), (k = nu);
              break;
            case "beforeblur":
            case "afterblur":
              k = nu;
              break;
            case "click":
              if (t.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k = po;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k = uc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k = Sc;
              break;
            case Mo:
            case Do:
            case jo:
              k = sc;
              break;
            case Io:
              k = Ec;
              break;
            case "scroll":
              k = rc;
              break;
            case "wheel":
              k = _c;
              break;
            case "copy":
            case "cut":
            case "paste":
              k = cc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k = vo;
          }
          var C = (n & 4) !== 0,
            pe = !C && e === "scroll",
            f = C ? (v !== null ? v + "Capture" : null) : v;
          C = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var w = d.stateNode;
            if (
              (d.tag === 5 &&
                w !== null &&
                ((d = w),
                f !== null &&
                  ((w = It(a, f)), w != null && C.push(nr(a, w, d)))),
              pe)
            )
              break;
            a = a.return;
          }
          0 < C.length &&
            ((v = new k(v, _, null, t, y)), g.push({ event: v, listeners: C }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (
            ((v = e === "mouseover" || e === "pointerover"),
            (k = e === "mouseout" || e === "pointerout"),
            v &&
              t !== Fl &&
              (_ = t.relatedTarget || t.fromElement) &&
              (Zn(_) || _[Sn]))
          )
            break e;
          if (
            (k || v) &&
            ((v =
              y.window === y
                ? y
                : (v = y.ownerDocument)
                ? v.defaultView || v.parentWindow
                : window),
            k
              ? ((_ = t.relatedTarget || t.toElement),
                (k = p),
                (_ = _ ? Zn(_) : null),
                _ !== null &&
                  ((pe = Gn(_)), _ !== pe || (_.tag !== 5 && _.tag !== 6)) &&
                  (_ = null))
              : ((k = null), (_ = p)),
            k !== _)
          ) {
            if (
              ((C = po),
              (w = "onMouseLeave"),
              (f = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((C = vo),
                (w = "onPointerLeave"),
                (f = "onPointerEnter"),
                (a = "pointer")),
              (pe = k == null ? v : gt(k)),
              (d = _ == null ? v : gt(_)),
              (v = new C(w, a + "leave", k, t, y)),
              (v.target = pe),
              (v.relatedTarget = d),
              (w = null),
              Zn(y) === p &&
                ((C = new C(f, a + "enter", _, t, y)),
                (C.target = d),
                (C.relatedTarget = pe),
                (w = C)),
              (pe = w),
              k && _)
            )
              n: {
                for (C = k, f = _, a = 0, d = C; d; d = ht(d)) a++;
                for (d = 0, w = f; w; w = ht(w)) d++;
                for (; 0 < a - d; ) (C = ht(C)), a--;
                for (; 0 < d - a; ) (f = ht(f)), d--;
                for (; a--; ) {
                  if (C === f || (f !== null && C === f.alternate)) break n;
                  (C = ht(C)), (f = ht(f));
                }
                C = null;
              }
            else C = null;
            k !== null && Ho(g, v, k, C, !1),
              _ !== null && pe !== null && Ho(g, pe, _, C, !0);
          }
        }
        e: {
          if (
            ((v = p ? gt(p) : window),
            (k = v.nodeName && v.nodeName.toLowerCase()),
            k === "select" || (k === "input" && v.type === "file"))
          )
            var N = Rc;
          else if (ko(v))
            if (xo) N = jc;
            else {
              N = Mc;
              var P = Oc;
            }
          else
            (k = v.nodeName) &&
              k.toLowerCase() === "input" &&
              (v.type === "checkbox" || v.type === "radio") &&
              (N = Dc);
          if (N && (N = N(e, p))) {
            Eo(g, N, t, y);
            break e;
          }
          P && P(e, v, p),
            e === "focusout" &&
              (P = v._wrapperState) &&
              P.controlled &&
              v.type === "number" &&
              Ol(v, "number", v.value);
        }
        switch (((P = p ? gt(p) : window), e)) {
          case "focusin":
            (ko(P) || P.contentEditable === "true") &&
              ((mt = P), (ou = p), (qt = null));
            break;
          case "focusout":
            qt = ou = mt = null;
            break;
          case "mousedown":
            su = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (su = !1), Ro(g, t, y);
            break;
          case "selectionchange":
            if (Uc) break;
          case "keydown":
          case "keyup":
            Ro(g, t, y);
        }
        var z;
        if (ru)
          e: {
            switch (e) {
              case "compositionstart":
                var R = "onCompositionStart";
                break e;
              case "compositionend":
                R = "onCompositionEnd";
                break e;
              case "compositionupdate":
                R = "onCompositionUpdate";
                break e;
            }
            R = void 0;
          }
        else
          pt
            ? wo(e, t) && (R = "onCompositionEnd")
            : e === "keydown" &&
              t.keyCode === 229 &&
              (R = "onCompositionStart");
        R &&
          (ho &&
            t.locale !== "ko" &&
            (pt || R !== "onCompositionStart"
              ? R === "onCompositionEnd" && pt && (z = co())
              : ((Mn = y),
                (Jl = "value" in Mn ? Mn.value : Mn.textContent),
                (pt = !0))),
          (P = Br(p, R)),
          0 < P.length &&
            ((R = new mo(R, e, null, t, y)),
            g.push({ event: R, listeners: P }),
            z ? (R.data = z) : ((z = So(t)), z !== null && (R.data = z)))),
          (z = Nc ? Pc(e, t) : zc(e, t)) &&
            ((p = Br(p, "onBeforeInput")),
            0 < p.length &&
              ((y = new mo("onBeforeInput", "beforeinput", null, t, y)),
              g.push({ event: y, listeners: p }),
              (y.data = z)));
      }
      Ao(g, n);
    });
  }
  function nr(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Br(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var l = e,
        u = l.stateNode;
      l.tag === 5 &&
        u !== null &&
        ((l = u),
        (u = It(e, t)),
        u != null && r.unshift(nr(e, u, l)),
        (u = It(e, n)),
        u != null && r.push(nr(e, u, l))),
        (e = e.return);
    }
    return r;
  }
  function ht(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ho(e, n, t, r, l) {
    for (var u = n._reactName, i = []; t !== null && t !== r; ) {
      var o = t,
        s = o.alternate,
        p = o.stateNode;
      if (s !== null && s === r) break;
      o.tag === 5 &&
        p !== null &&
        ((o = p),
        l
          ? ((s = It(t, u)), s != null && i.unshift(nr(t, s, o)))
          : l || ((s = It(t, u)), s != null && i.push(nr(t, s, o)))),
        (t = t.return);
    }
    i.length !== 0 && e.push({ event: n, listeners: i });
  }
  var Hc = /\r\n?/g,
    Qc = /\u0000|\uFFFD/g;
  function Qo(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Hc,
        `
`
      )
      .replace(Qc, "");
  }
  function Hr(e, n, t) {
    if (((n = Qo(n)), Qo(e) !== n && t)) throw Error(m(425));
  }
  function Qr() {}
  var mu = null,
    vu = null;
  function hu(e, n) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var yu = typeof setTimeout == "function" ? setTimeout : void 0,
    $c = typeof clearTimeout == "function" ? clearTimeout : void 0,
    $o = typeof Promise == "function" ? Promise : void 0,
    Wc =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof $o < "u"
        ? function (e) {
            return $o.resolve(null).then(e).catch(Kc);
          }
        : yu;
  function Kc(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function gu(e, n) {
    var t = n,
      r = 0;
    do {
      var l = t.nextSibling;
      if ((e.removeChild(t), l && l.nodeType === 8))
        if (((t = l.data), t === "/$")) {
          if (r === 0) {
            e.removeChild(l), Wt(n);
            return;
          }
          r--;
        } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
      t = l;
    } while (t);
    Wt(n);
  }
  function jn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  function Wo(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?") {
          if (n === 0) return e;
          n--;
        } else t === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var yt = Math.random().toString(36).slice(2),
    mn = "__reactFiber$" + yt,
    tr = "__reactProps$" + yt,
    Sn = "__reactContainer$" + yt,
    wu = "__reactEvents$" + yt,
    Yc = "__reactListeners$" + yt,
    Xc = "__reactHandles$" + yt;
  function Zn(e) {
    var n = e[mn];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if ((n = t[Sn] || t[mn])) {
        if (
          ((t = n.alternate),
          n.child !== null || (t !== null && t.child !== null))
        )
          for (e = Wo(e); e !== null; ) {
            if ((t = e[mn])) return t;
            e = Wo(e);
          }
        return n;
      }
      (e = t), (t = e.parentNode);
    }
    return null;
  }
  function rr(e) {
    return (
      (e = e[mn] || e[Sn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function gt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function $r(e) {
    return e[tr] || null;
  }
  var Su = [],
    wt = -1;
  function In(e) {
    return { current: e };
  }
  function b(e) {
    0 > wt || ((e.current = Su[wt]), (Su[wt] = null), wt--);
  }
  function J(e, n) {
    wt++, (Su[wt] = e.current), (e.current = n);
  }
  var Fn = {},
    _e = In(Fn),
    Me = In(!1),
    Jn = Fn;
  function St(e, n) {
    var t = e.type.contextTypes;
    if (!t) return Fn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      u;
    for (u in t) l[u] = n[u];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = n),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function De(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Wr() {
    b(Me), b(_e);
  }
  function Ko(e, n, t) {
    if (_e.current !== Fn) throw Error(m(168));
    J(_e, n), J(Me, t);
  }
  function Yo(e, n, t) {
    var r = e.stateNode;
    if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
      return t;
    r = r.getChildContext();
    for (var l in r) if (!(l in n)) throw Error(m(108, Z(e) || "Unknown", l));
    return x({}, t, r);
  }
  function Kr(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Fn),
      (Jn = _e.current),
      J(_e, e),
      J(Me, Me.current),
      !0
    );
  }
  function Xo(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    t
      ? ((e = Yo(e, n, Jn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        b(Me),
        b(_e),
        J(_e, e))
      : b(Me),
      J(Me, t);
  }
  var kn = null,
    Yr = !1,
    ku = !1;
  function Go(e) {
    kn === null ? (kn = [e]) : kn.push(e);
  }
  function Gc(e) {
    (Yr = !0), Go(e);
  }
  function Un() {
    if (!ku && kn !== null) {
      ku = !0;
      var e = 0,
        n = $;
      try {
        var t = kn;
        for ($ = 1; e < t.length; e++) {
          var r = t[e];
          do r = r(!0);
          while (r !== null);
        }
        (kn = null), (Yr = !1);
      } catch (l) {
        throw (kn !== null && (kn = kn.slice(e + 1)), Zi(Ql, Un), l);
      } finally {
        ($ = n), (ku = !1);
      }
    }
    return null;
  }
  var kt = [],
    Et = 0,
    Xr = null,
    Gr = 0,
    Ye = [],
    Xe = 0,
    qn = null,
    En = 1,
    xn = "";
  function bn(e, n) {
    (kt[Et++] = Gr), (kt[Et++] = Xr), (Xr = e), (Gr = n);
  }
  function Zo(e, n, t) {
    (Ye[Xe++] = En), (Ye[Xe++] = xn), (Ye[Xe++] = qn), (qn = e);
    var r = En;
    e = xn;
    var l = 32 - tn(r) - 1;
    (r &= ~(1 << l)), (t += 1);
    var u = 32 - tn(n) + l;
    if (30 < u) {
      var i = l - (l % 5);
      (u = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (En = (1 << (32 - tn(n) + l)) | (t << l) | r),
        (xn = u + e);
    } else (En = (1 << u) | (t << l) | r), (xn = e);
  }
  function Eu(e) {
    e.return !== null && (bn(e, 1), Zo(e, 1, 0));
  }
  function xu(e) {
    for (; e === Xr; )
      (Xr = kt[--Et]), (kt[Et] = null), (Gr = kt[--Et]), (kt[Et] = null);
    for (; e === qn; )
      (qn = Ye[--Xe]),
        (Ye[Xe] = null),
        (xn = Ye[--Xe]),
        (Ye[Xe] = null),
        (En = Ye[--Xe]),
        (Ye[Xe] = null);
  }
  var He = null,
    Qe = null,
    re = !1,
    ln = null;
  function Jo(e, n) {
    var t = qe(5, null, null, 0);
    (t.elementType = "DELETED"),
      (t.stateNode = n),
      (t.return = e),
      (n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
  }
  function qo(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return (
          (n =
            n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
              ? null
              : n),
          n !== null
            ? ((e.stateNode = n), (He = e), (Qe = jn(n.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
          n !== null ? ((e.stateNode = n), (He = e), (Qe = null), !0) : !1
        );
      case 13:
        return (
          (n = n.nodeType !== 8 ? null : n),
          n !== null
            ? ((t = qn !== null ? { id: En, overflow: xn } : null),
              (e.memoizedState = {
                dehydrated: n,
                treeContext: t,
                retryLane: 1073741824,
              }),
              (t = qe(18, null, null, 0)),
              (t.stateNode = n),
              (t.return = e),
              (e.child = t),
              (He = e),
              (Qe = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function _u(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Cu(e) {
    if (re) {
      var n = Qe;
      if (n) {
        var t = n;
        if (!qo(e, n)) {
          if (_u(e)) throw Error(m(418));
          n = jn(t.nextSibling);
          var r = He;
          n && qo(e, n)
            ? Jo(r, t)
            : ((e.flags = (e.flags & -4097) | 2), (re = !1), (He = e));
        }
      } else {
        if (_u(e)) throw Error(m(418));
        (e.flags = (e.flags & -4097) | 2), (re = !1), (He = e);
      }
    }
  }
  function bo(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    He = e;
  }
  function Zr(e) {
    if (e !== He) return !1;
    if (!re) return bo(e), (re = !0), !1;
    var n;
    if (
      ((n = e.tag !== 3) &&
        !(n = e.tag !== 5) &&
        ((n = e.type),
        (n = n !== "head" && n !== "body" && !hu(e.type, e.memoizedProps))),
      n && (n = Qe))
    ) {
      if (_u(e)) throw (es(), Error(m(418)));
      for (; n; ) Jo(e, n), (n = jn(n.nextSibling));
    }
    if ((bo(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(m(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                Qe = jn(e.nextSibling);
                break e;
              }
              n--;
            } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
          }
          e = e.nextSibling;
        }
        Qe = null;
      }
    } else Qe = He ? jn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function es() {
    for (var e = Qe; e; ) e = jn(e.nextSibling);
  }
  function xt() {
    (Qe = He = null), (re = !1);
  }
  function Nu(e) {
    ln === null ? (ln = [e]) : ln.push(e);
  }
  var Zc = xe.ReactCurrentBatchConfig;
  function lr(e, n, t) {
    if (
      ((e = t.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (t._owner) {
        if (((t = t._owner), t)) {
          if (t.tag !== 1) throw Error(m(309));
          var r = t.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r,
          u = "" + e;
        return n !== null &&
          n.ref !== null &&
          typeof n.ref == "function" &&
          n.ref._stringRef === u
          ? n.ref
          : ((n = function (i) {
              var o = l.refs;
              i === null ? delete o[u] : (o[u] = i);
            }),
            (n._stringRef = u),
            n);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!t._owner) throw Error(m(290, e));
    }
    return e;
  }
  function Jr(e, n) {
    throw (
      ((e = Object.prototype.toString.call(n)),
      Error(
        m(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(n).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function ns(e) {
    var n = e._init;
    return n(e._payload);
  }
  function ts(e) {
    function n(f, a) {
      if (e) {
        var d = f.deletions;
        d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
      }
    }
    function t(f, a) {
      if (!e) return null;
      for (; a !== null; ) n(f, a), (a = a.sibling);
      return null;
    }
    function r(f, a) {
      for (f = new Map(); a !== null; )
        a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
      return f;
    }
    function l(f, a) {
      return (f = Kn(f, a)), (f.index = 0), (f.sibling = null), f;
    }
    function u(f, a, d) {
      return (
        (f.index = d),
        e
          ? ((d = f.alternate),
            d !== null
              ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
              : ((f.flags |= 2), a))
          : ((f.flags |= 1048576), a)
      );
    }
    function i(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function o(f, a, d, w) {
      return a === null || a.tag !== 6
        ? ((a = yi(d, f.mode, w)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, w) {
      var N = d.type;
      return N === Re
        ? y(f, a, d.props.children, w, d.key)
        : a !== null &&
          (a.elementType === N ||
            (typeof N == "object" &&
              N !== null &&
              N.$$typeof === Oe &&
              ns(N) === a.type))
        ? ((w = l(a, d.props)), (w.ref = lr(f, a, d)), (w.return = f), w)
        : ((w = kl(d.type, d.key, d.props, null, f.mode, w)),
          (w.ref = lr(f, a, d)),
          (w.return = f),
          w);
    }
    function p(f, a, d, w) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = gi(d, f.mode, w)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function y(f, a, d, w, N) {
      return a === null || a.tag !== 7
        ? ((a = ot(d, f.mode, w, N)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function g(f, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return (a = yi("" + a, f.mode, d)), (a.return = f), a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case en:
            return (
              (d = kl(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = lr(f, null, a)),
              (d.return = f),
              d
            );
          case ze:
            return (a = gi(a, f.mode, d)), (a.return = f), a;
          case Oe:
            var w = a._init;
            return g(f, w(a._payload), d);
        }
        if (Mt(a) || L(a))
          return (a = ot(a, f.mode, d, null)), (a.return = f), a;
        Jr(f, a);
      }
      return null;
    }
    function v(f, a, d, w) {
      var N = a !== null ? a.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return N !== null ? null : o(f, a, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case en:
            return d.key === N ? s(f, a, d, w) : null;
          case ze:
            return d.key === N ? p(f, a, d, w) : null;
          case Oe:
            return (N = d._init), v(f, a, N(d._payload), w);
        }
        if (Mt(d) || L(d)) return N !== null ? null : y(f, a, d, w, null);
        Jr(f, d);
      }
      return null;
    }
    function k(f, a, d, w, N) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return (f = f.get(d) || null), o(a, f, "" + w, N);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case en:
            return (
              (f = f.get(w.key === null ? d : w.key) || null), s(a, f, w, N)
            );
          case ze:
            return (
              (f = f.get(w.key === null ? d : w.key) || null), p(a, f, w, N)
            );
          case Oe:
            var P = w._init;
            return k(f, a, d, P(w._payload), N);
        }
        if (Mt(w) || L(w)) return (f = f.get(d) || null), y(a, f, w, N, null);
        Jr(a, w);
      }
      return null;
    }
    function _(f, a, d, w) {
      for (
        var N = null, P = null, z = a, R = (a = 0), Se = null;
        z !== null && R < d.length;
        R++
      ) {
        z.index > R ? ((Se = z), (z = null)) : (Se = z.sibling);
        var B = v(f, z, d[R], w);
        if (B === null) {
          z === null && (z = Se);
          break;
        }
        e && z && B.alternate === null && n(f, z),
          (a = u(B, a, R)),
          P === null ? (N = B) : (P.sibling = B),
          (P = B),
          (z = Se);
      }
      if (R === d.length) return t(f, z), re && bn(f, R), N;
      if (z === null) {
        for (; R < d.length; R++)
          (z = g(f, d[R], w)),
            z !== null &&
              ((a = u(z, a, R)),
              P === null ? (N = z) : (P.sibling = z),
              (P = z));
        return re && bn(f, R), N;
      }
      for (z = r(f, z); R < d.length; R++)
        (Se = k(z, f, R, d[R], w)),
          Se !== null &&
            (e &&
              Se.alternate !== null &&
              z.delete(Se.key === null ? R : Se.key),
            (a = u(Se, a, R)),
            P === null ? (N = Se) : (P.sibling = Se),
            (P = Se));
      return (
        e &&
          z.forEach(function (Yn) {
            return n(f, Yn);
          }),
        re && bn(f, R),
        N
      );
    }
    function C(f, a, d, w) {
      var N = L(d);
      if (typeof N != "function") throw Error(m(150));
      if (((d = N.call(d)), d == null)) throw Error(m(151));
      for (
        var P = (N = null), z = a, R = (a = 0), Se = null, B = d.next();
        z !== null && !B.done;
        R++, B = d.next()
      ) {
        z.index > R ? ((Se = z), (z = null)) : (Se = z.sibling);
        var Yn = v(f, z, B.value, w);
        if (Yn === null) {
          z === null && (z = Se);
          break;
        }
        e && z && Yn.alternate === null && n(f, z),
          (a = u(Yn, a, R)),
          P === null ? (N = Yn) : (P.sibling = Yn),
          (P = Yn),
          (z = Se);
      }
      if (B.done) return t(f, z), re && bn(f, R), N;
      if (z === null) {
        for (; !B.done; R++, B = d.next())
          (B = g(f, B.value, w)),
            B !== null &&
              ((a = u(B, a, R)),
              P === null ? (N = B) : (P.sibling = B),
              (P = B));
        return re && bn(f, R), N;
      }
      for (z = r(f, z); !B.done; R++, B = d.next())
        (B = k(z, f, R, B.value, w)),
          B !== null &&
            (e && B.alternate !== null && z.delete(B.key === null ? R : B.key),
            (a = u(B, a, R)),
            P === null ? (N = B) : (P.sibling = B),
            (P = B));
      return (
        e &&
          z.forEach(function (Lf) {
            return n(f, Lf);
          }),
        re && bn(f, R),
        N
      );
    }
    function pe(f, a, d, w) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === Re &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case en:
            e: {
              for (var N = d.key, P = a; P !== null; ) {
                if (P.key === N) {
                  if (((N = d.type), N === Re)) {
                    if (P.tag === 7) {
                      t(f, P.sibling),
                        (a = l(P, d.props.children)),
                        (a.return = f),
                        (f = a);
                      break e;
                    }
                  } else if (
                    P.elementType === N ||
                    (typeof N == "object" &&
                      N !== null &&
                      N.$$typeof === Oe &&
                      ns(N) === P.type)
                  ) {
                    t(f, P.sibling),
                      (a = l(P, d.props)),
                      (a.ref = lr(f, P, d)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                  t(f, P);
                  break;
                } else n(f, P);
                P = P.sibling;
              }
              d.type === Re
                ? ((a = ot(d.props.children, f.mode, w, d.key)),
                  (a.return = f),
                  (f = a))
                : ((w = kl(d.type, d.key, d.props, null, f.mode, w)),
                  (w.ref = lr(f, a, d)),
                  (w.return = f),
                  (f = w));
            }
            return i(f);
          case ze:
            e: {
              for (P = d.key; a !== null; ) {
                if (a.key === P)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === d.containerInfo &&
                    a.stateNode.implementation === d.implementation
                  ) {
                    t(f, a.sibling),
                      (a = l(a, d.children || [])),
                      (a.return = f),
                      (f = a);
                    break e;
                  } else {
                    t(f, a);
                    break;
                  }
                else n(f, a);
                a = a.sibling;
              }
              (a = gi(d, f.mode, w)), (a.return = f), (f = a);
            }
            return i(f);
          case Oe:
            return (P = d._init), pe(f, a, P(d._payload), w);
        }
        if (Mt(d)) return _(f, a, d, w);
        if (L(d)) return C(f, a, d, w);
        Jr(f, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (t(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (t(f, a), (a = yi(d, f.mode, w)), (a.return = f), (f = a)),
          i(f))
        : t(f, a);
    }
    return pe;
  }
  var _t = ts(!0),
    rs = ts(!1),
    qr = In(null),
    br = null,
    Ct = null,
    Pu = null;
  function zu() {
    Pu = Ct = br = null;
  }
  function Tu(e) {
    var n = qr.current;
    b(qr), (e._currentValue = n);
  }
  function Lu(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
          : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
        e === t)
      )
        break;
      e = e.return;
    }
  }
  function Nt(e, n) {
    (br = e),
      (Pu = Ct = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & n && (je = !0), (e.firstContext = null));
  }
  function Ge(e) {
    var n = e._currentValue;
    if (Pu !== e)
      if (((e = { context: e, memoizedValue: n, next: null }), Ct === null)) {
        if (br === null) throw Error(m(308));
        (Ct = e), (br.dependencies = { lanes: 0, firstContext: e });
      } else Ct = Ct.next = e;
    return n;
  }
  var et = null;
  function Ru(e) {
    et === null ? (et = [e]) : et.push(e);
  }
  function ls(e, n, t, r) {
    var l = n.interleaved;
    return (
      l === null ? ((t.next = t), Ru(n)) : ((t.next = l.next), (l.next = t)),
      (n.interleaved = t),
      _n(e, r)
    );
  }
  function _n(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
      (e.childLanes |= n),
        (t = e.alternate),
        t !== null && (t.childLanes |= n),
        (t = e),
        (e = e.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Vn = !1;
  function Ou(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function us(e, n) {
    (e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Cn(e, n) {
    return {
      eventTime: e,
      lane: n,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function An(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), F & 2)) {
      var l = r.pending;
      return (
        l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
        (r.pending = n),
        _n(e, t)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((n.next = n), Ru(r)) : ((n.next = l.next), (l.next = n)),
      (r.interleaved = n),
      _n(e, t)
    );
  }
  function el(e, n, t) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
    ) {
      var r = n.lanes;
      (r &= e.pendingLanes), (t |= r), (n.lanes = t), Kl(e, t);
    }
  }
  function is(e, n) {
    var t = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), t === r)) {
      var l = null,
        u = null;
      if (((t = t.firstBaseUpdate), t !== null)) {
        do {
          var i = {
            eventTime: t.eventTime,
            lane: t.lane,
            tag: t.tag,
            payload: t.payload,
            callback: t.callback,
            next: null,
          };
          u === null ? (l = u = i) : (u = u.next = i), (t = t.next);
        } while (t !== null);
        u === null ? (l = u = n) : (u = u.next = n);
      } else l = u = n;
      (t = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: u,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = t);
      return;
    }
    (e = t.lastBaseUpdate),
      e === null ? (t.firstBaseUpdate = n) : (e.next = n),
      (t.lastBaseUpdate = n);
  }
  function nl(e, n, t, r) {
    var l = e.updateQueue;
    Vn = !1;
    var u = l.firstBaseUpdate,
      i = l.lastBaseUpdate,
      o = l.shared.pending;
    if (o !== null) {
      l.shared.pending = null;
      var s = o,
        p = s.next;
      (s.next = null), i === null ? (u = p) : (i.next = p), (i = s);
      var y = e.alternate;
      y !== null &&
        ((y = y.updateQueue),
        (o = y.lastBaseUpdate),
        o !== i &&
          (o === null ? (y.firstBaseUpdate = p) : (o.next = p),
          (y.lastBaseUpdate = s)));
    }
    if (u !== null) {
      var g = l.baseState;
      (i = 0), (y = p = s = null), (o = u);
      do {
        var v = o.lane,
          k = o.eventTime;
        if ((r & v) === v) {
          y !== null &&
            (y = y.next =
              {
                eventTime: k,
                lane: 0,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              });
          e: {
            var _ = e,
              C = o;
            switch (((v = n), (k = t), C.tag)) {
              case 1:
                if (((_ = C.payload), typeof _ == "function")) {
                  g = _.call(k, g, v);
                  break e;
                }
                g = _;
                break e;
              case 3:
                _.flags = (_.flags & -65537) | 128;
              case 0:
                if (
                  ((_ = C.payload),
                  (v = typeof _ == "function" ? _.call(k, g, v) : _),
                  v == null)
                )
                  break e;
                g = x({}, g, v);
                break e;
              case 2:
                Vn = !0;
            }
          }
          o.callback !== null &&
            o.lane !== 0 &&
            ((e.flags |= 64),
            (v = l.effects),
            v === null ? (l.effects = [o]) : v.push(o));
        } else
          (k = {
            eventTime: k,
            lane: v,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            y === null ? ((p = y = k), (s = g)) : (y = y.next = k),
            (i |= v);
        if (((o = o.next), o === null)) {
          if (((o = l.shared.pending), o === null)) break;
          (v = o),
            (o = v.next),
            (v.next = null),
            (l.lastBaseUpdate = v),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (y === null && (s = g),
        (l.baseState = s),
        (l.firstBaseUpdate = p),
        (l.lastBaseUpdate = y),
        (n = l.shared.interleaved),
        n !== null)
      ) {
        l = n;
        do (i |= l.lane), (l = l.next);
        while (l !== n);
      } else u === null && (l.shared.lanes = 0);
      (rt |= i), (e.lanes = i), (e.memoizedState = g);
    }
  }
  function os(e, n, t) {
    if (((e = n.effects), (n.effects = null), e !== null))
      for (n = 0; n < e.length; n++) {
        var r = e[n],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = t), typeof l != "function"))
            throw Error(m(191, l));
          l.call(r);
        }
      }
  }
  var ur = {},
    vn = In(ur),
    ir = In(ur),
    or = In(ur);
  function nt(e) {
    if (e === ur) throw Error(m(174));
    return e;
  }
  function Mu(e, n) {
    switch ((J(or, n), J(ir, e), J(vn, ur), (e = n.nodeType), e)) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Dl(null, "");
        break;
      default:
        (e = e === 8 ? n.parentNode : n),
          (n = e.namespaceURI || null),
          (e = e.tagName),
          (n = Dl(n, e));
    }
    b(vn), J(vn, n);
  }
  function Pt() {
    b(vn), b(ir), b(or);
  }
  function ss(e) {
    nt(or.current);
    var n = nt(vn.current),
      t = Dl(n, e.type);
    n !== t && (J(ir, e), J(vn, t));
  }
  function Du(e) {
    ir.current === e && (b(vn), b(ir));
  }
  var ie = In(0);
  function tl(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var t = n.memoizedState;
        if (
          t !== null &&
          ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  var ju = [];
  function Iu() {
    for (var e = 0; e < ju.length; e++)
      ju[e]._workInProgressVersionPrimary = null;
    ju.length = 0;
  }
  var rl = xe.ReactCurrentDispatcher,
    Fu = xe.ReactCurrentBatchConfig,
    tt = 0,
    oe = null,
    he = null,
    ge = null,
    ll = !1,
    sr = !1,
    ar = 0,
    Jc = 0;
  function Ce() {
    throw Error(m(321));
  }
  function Uu(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++)
      if (!rn(e[t], n[t])) return !1;
    return !0;
  }
  function Vu(e, n, t, r, l, u) {
    if (
      ((tt = u),
      (oe = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (rl.current = e === null || e.memoizedState === null ? nf : tf),
      (e = t(r, l)),
      sr)
    ) {
      u = 0;
      do {
        if (((sr = !1), (ar = 0), 25 <= u)) throw Error(m(301));
        (u += 1),
          (ge = he = null),
          (n.updateQueue = null),
          (rl.current = rf),
          (e = t(r, l));
      } while (sr);
    }
    if (
      ((rl.current = ol),
      (n = he !== null && he.next !== null),
      (tt = 0),
      (ge = he = oe = null),
      (ll = !1),
      n)
    )
      throw Error(m(300));
    return e;
  }
  function Au() {
    var e = ar !== 0;
    return (ar = 0), e;
  }
  function hn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ge === null ? (oe.memoizedState = ge = e) : (ge = ge.next = e), ge;
  }
  function Ze() {
    if (he === null) {
      var e = oe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = he.next;
    var n = ge === null ? oe.memoizedState : ge.next;
    if (n !== null) (ge = n), (he = e);
    else {
      if (e === null) throw Error(m(310));
      (he = e),
        (e = {
          memoizedState: he.memoizedState,
          baseState: he.baseState,
          baseQueue: he.baseQueue,
          queue: he.queue,
          next: null,
        }),
        ge === null ? (oe.memoizedState = ge = e) : (ge = ge.next = e);
    }
    return ge;
  }
  function cr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Bu(e) {
    var n = Ze(),
      t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = he,
      l = r.baseQueue,
      u = t.pending;
    if (u !== null) {
      if (l !== null) {
        var i = l.next;
        (l.next = u.next), (u.next = i);
      }
      (r.baseQueue = l = u), (t.pending = null);
    }
    if (l !== null) {
      (u = l.next), (r = r.baseState);
      var o = (i = null),
        s = null,
        p = u;
      do {
        var y = p.lane;
        if ((tt & y) === y)
          s !== null &&
            (s = s.next =
              {
                lane: 0,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null,
              }),
            (r = p.hasEagerState ? p.eagerState : e(r, p.action));
        else {
          var g = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null,
          };
          s === null ? ((o = s = g), (i = r)) : (s = s.next = g),
            (oe.lanes |= y),
            (rt |= y);
        }
        p = p.next;
      } while (p !== null && p !== u);
      s === null ? (i = r) : (s.next = o),
        rn(r, n.memoizedState) || (je = !0),
        (n.memoizedState = r),
        (n.baseState = i),
        (n.baseQueue = s),
        (t.lastRenderedState = r);
    }
    if (((e = t.interleaved), e !== null)) {
      l = e;
      do (u = l.lane), (oe.lanes |= u), (rt |= u), (l = l.next);
      while (l !== e);
    } else l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function Hu(e) {
    var n = Ze(),
      t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch,
      l = t.pending,
      u = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var i = (l = l.next);
      do (u = e(u, i.action)), (i = i.next);
      while (i !== l);
      rn(u, n.memoizedState) || (je = !0),
        (n.memoizedState = u),
        n.baseQueue === null && (n.baseState = u),
        (t.lastRenderedState = u);
    }
    return [u, r];
  }
  function as() {}
  function cs(e, n) {
    var t = oe,
      r = Ze(),
      l = n(),
      u = !rn(r.memoizedState, l);
    if (
      (u && ((r.memoizedState = l), (je = !0)),
      (r = r.queue),
      Qu(ps.bind(null, t, r, e), [e]),
      r.getSnapshot !== n || u || (ge !== null && ge.memoizedState.tag & 1))
    ) {
      if (
        ((t.flags |= 2048),
        fr(9, ds.bind(null, t, r, l, n), void 0, null),
        we === null)
      )
        throw Error(m(349));
      tt & 30 || fs(t, n, l);
    }
    return l;
  }
  function fs(e, n, t) {
    (e.flags |= 16384),
      (e = { getSnapshot: n, value: t }),
      (n = oe.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (oe.updateQueue = n),
          (n.stores = [e]))
        : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
  }
  function ds(e, n, t, r) {
    (n.value = t), (n.getSnapshot = r), ms(n) && vs(e);
  }
  function ps(e, n, t) {
    return t(function () {
      ms(n) && vs(e);
    });
  }
  function ms(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !rn(e, t);
    } catch {
      return !0;
    }
  }
  function vs(e) {
    var n = _n(e, 1);
    n !== null && an(n, e, 1, -1);
  }
  function hs(e) {
    var n = hn();
    return (
      typeof e == "function" && (e = e()),
      (n.memoizedState = n.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cr,
        lastRenderedState: e,
      }),
      (n.queue = e),
      (e = e.dispatch = ef.bind(null, oe, e)),
      [n.memoizedState, e]
    );
  }
  function fr(e, n, t, r) {
    return (
      (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
      (n = oe.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (oe.updateQueue = n),
          (n.lastEffect = e.next = e))
        : ((t = n.lastEffect),
          t === null
            ? (n.lastEffect = e.next = e)
            : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
      e
    );
  }
  function ys() {
    return Ze().memoizedState;
  }
  function ul(e, n, t, r) {
    var l = hn();
    (oe.flags |= e),
      (l.memoizedState = fr(1 | n, t, void 0, r === void 0 ? null : r));
  }
  function il(e, n, t, r) {
    var l = Ze();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (he !== null) {
      var i = he.memoizedState;
      if (((u = i.destroy), r !== null && Uu(r, i.deps))) {
        l.memoizedState = fr(n, t, u, r);
        return;
      }
    }
    (oe.flags |= e), (l.memoizedState = fr(1 | n, t, u, r));
  }
  function gs(e, n) {
    return ul(8390656, 8, e, n);
  }
  function Qu(e, n) {
    return il(2048, 8, e, n);
  }
  function ws(e, n) {
    return il(4, 2, e, n);
  }
  function Ss(e, n) {
    return il(4, 4, e, n);
  }
  function ks(e, n) {
    if (typeof n == "function")
      return (
        (e = e()),
        n(e),
        function () {
          n(null);
        }
      );
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null;
        }
      );
  }
  function Es(e, n, t) {
    return (
      (t = t != null ? t.concat([e]) : null), il(4, 4, ks.bind(null, n, e), t)
    );
  }
  function $u() {}
  function xs(e, n) {
    var t = Ze();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Uu(n, r[1])
      ? r[0]
      : ((t.memoizedState = [e, n]), e);
  }
  function _s(e, n) {
    var t = Ze();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Uu(n, r[1])
      ? r[0]
      : ((e = e()), (t.memoizedState = [e, n]), e);
  }
  function Cs(e, n, t) {
    return tt & 21
      ? (rn(t, n) ||
          ((t = eo()), (oe.lanes |= t), (rt |= t), (e.baseState = !0)),
        n)
      : (e.baseState && ((e.baseState = !1), (je = !0)), (e.memoizedState = t));
  }
  function qc(e, n) {
    var t = $;
    ($ = t !== 0 && 4 > t ? t : 4), e(!0);
    var r = Fu.transition;
    Fu.transition = {};
    try {
      e(!1), n();
    } finally {
      ($ = t), (Fu.transition = r);
    }
  }
  function Ns() {
    return Ze().memoizedState;
  }
  function bc(e, n, t) {
    var r = $n(e);
    if (
      ((t = {
        lane: r,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ps(e))
    )
      zs(n, t);
    else if (((t = ls(e, n, t, r)), t !== null)) {
      var l = Le();
      an(t, e, r, l), Ts(t, n, r);
    }
  }
  function ef(e, n, t) {
    var r = $n(e),
      l = {
        lane: r,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Ps(e)) zs(n, l);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = n.lastRenderedReducer), u !== null)
      )
        try {
          var i = n.lastRenderedState,
            o = u(i, t);
          if (((l.hasEagerState = !0), (l.eagerState = o), rn(o, i))) {
            var s = n.interleaved;
            s === null
              ? ((l.next = l), Ru(n))
              : ((l.next = s.next), (s.next = l)),
              (n.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (t = ls(e, n, l, r)),
        t !== null && ((l = Le()), an(t, e, r, l), Ts(t, n, r));
    }
  }
  function Ps(e) {
    var n = e.alternate;
    return e === oe || (n !== null && n === oe);
  }
  function zs(e, n) {
    sr = ll = !0;
    var t = e.pending;
    t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
      (e.pending = n);
  }
  function Ts(e, n, t) {
    if (t & 4194240) {
      var r = n.lanes;
      (r &= e.pendingLanes), (t |= r), (n.lanes = t), Kl(e, t);
    }
  }
  var ol = {
      readContext: Ge,
      useCallback: Ce,
      useContext: Ce,
      useEffect: Ce,
      useImperativeHandle: Ce,
      useInsertionEffect: Ce,
      useLayoutEffect: Ce,
      useMemo: Ce,
      useReducer: Ce,
      useRef: Ce,
      useState: Ce,
      useDebugValue: Ce,
      useDeferredValue: Ce,
      useTransition: Ce,
      useMutableSource: Ce,
      useSyncExternalStore: Ce,
      useId: Ce,
      unstable_isNewReconciler: !1,
    },
    nf = {
      readContext: Ge,
      useCallback: function (e, n) {
        return (hn().memoizedState = [e, n === void 0 ? null : n]), e;
      },
      useContext: Ge,
      useEffect: gs,
      useImperativeHandle: function (e, n, t) {
        return (
          (t = t != null ? t.concat([e]) : null),
          ul(4194308, 4, ks.bind(null, n, e), t)
        );
      },
      useLayoutEffect: function (e, n) {
        return ul(4194308, 4, e, n);
      },
      useInsertionEffect: function (e, n) {
        return ul(4, 2, e, n);
      },
      useMemo: function (e, n) {
        var t = hn();
        return (
          (n = n === void 0 ? null : n),
          (e = e()),
          (t.memoizedState = [e, n]),
          e
        );
      },
      useReducer: function (e, n, t) {
        var r = hn();
        return (
          (n = t !== void 0 ? t(n) : n),
          (r.memoizedState = r.baseState = n),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (r.queue = e),
          (e = e.dispatch = bc.bind(null, oe, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var n = hn();
        return (e = { current: e }), (n.memoizedState = e);
      },
      useState: hs,
      useDebugValue: $u,
      useDeferredValue: function (e) {
        return (hn().memoizedState = e);
      },
      useTransition: function () {
        var e = hs(!1),
          n = e[0];
        return (e = qc.bind(null, e[1])), (hn().memoizedState = e), [n, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, n, t) {
        var r = oe,
          l = hn();
        if (re) {
          if (t === void 0) throw Error(m(407));
          t = t();
        } else {
          if (((t = n()), we === null)) throw Error(m(349));
          tt & 30 || fs(r, n, t);
        }
        l.memoizedState = t;
        var u = { value: t, getSnapshot: n };
        return (
          (l.queue = u),
          gs(ps.bind(null, r, u, e), [e]),
          (r.flags |= 2048),
          fr(9, ds.bind(null, r, u, t, n), void 0, null),
          t
        );
      },
      useId: function () {
        var e = hn(),
          n = we.identifierPrefix;
        if (re) {
          var t = xn,
            r = En;
          (t = (r & ~(1 << (32 - tn(r) - 1))).toString(32) + t),
            (n = ":" + n + "R" + t),
            (t = ar++),
            0 < t && (n += "H" + t.toString(32)),
            (n += ":");
        } else (t = Jc++), (n = ":" + n + "r" + t.toString(32) + ":");
        return (e.memoizedState = n);
      },
      unstable_isNewReconciler: !1,
    },
    tf = {
      readContext: Ge,
      useCallback: xs,
      useContext: Ge,
      useEffect: Qu,
      useImperativeHandle: Es,
      useInsertionEffect: ws,
      useLayoutEffect: Ss,
      useMemo: _s,
      useReducer: Bu,
      useRef: ys,
      useState: function () {
        return Bu(cr);
      },
      useDebugValue: $u,
      useDeferredValue: function (e) {
        var n = Ze();
        return Cs(n, he.memoizedState, e);
      },
      useTransition: function () {
        var e = Bu(cr)[0],
          n = Ze().memoizedState;
        return [e, n];
      },
      useMutableSource: as,
      useSyncExternalStore: cs,
      useId: Ns,
      unstable_isNewReconciler: !1,
    },
    rf = {
      readContext: Ge,
      useCallback: xs,
      useContext: Ge,
      useEffect: Qu,
      useImperativeHandle: Es,
      useInsertionEffect: ws,
      useLayoutEffect: Ss,
      useMemo: _s,
      useReducer: Hu,
      useRef: ys,
      useState: function () {
        return Hu(cr);
      },
      useDebugValue: $u,
      useDeferredValue: function (e) {
        var n = Ze();
        return he === null ? (n.memoizedState = e) : Cs(n, he.memoizedState, e);
      },
      useTransition: function () {
        var e = Hu(cr)[0],
          n = Ze().memoizedState;
        return [e, n];
      },
      useMutableSource: as,
      useSyncExternalStore: cs,
      useId: Ns,
      unstable_isNewReconciler: !1,
    };
  function un(e, n) {
    if (e && e.defaultProps) {
      (n = x({}, n)), (e = e.defaultProps);
      for (var t in e) n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  function Wu(e, n, t, r) {
    (n = e.memoizedState),
      (t = t(r, n)),
      (t = t == null ? n : x({}, n, t)),
      (e.memoizedState = t),
      e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var sl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Gn(e) === e : !1;
    },
    enqueueSetState: function (e, n, t) {
      e = e._reactInternals;
      var r = Le(),
        l = $n(e),
        u = Cn(r, l);
      (u.payload = n),
        t != null && (u.callback = t),
        (n = An(e, u, l)),
        n !== null && (an(n, e, l, r), el(n, e, l));
    },
    enqueueReplaceState: function (e, n, t) {
      e = e._reactInternals;
      var r = Le(),
        l = $n(e),
        u = Cn(r, l);
      (u.tag = 1),
        (u.payload = n),
        t != null && (u.callback = t),
        (n = An(e, u, l)),
        n !== null && (an(n, e, l, r), el(n, e, l));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var t = Le(),
        r = $n(e),
        l = Cn(t, r);
      (l.tag = 2),
        n != null && (l.callback = n),
        (n = An(e, l, r)),
        n !== null && (an(n, e, r, t), el(n, e, r));
    },
  };
  function Ls(e, n, t, r, l, u, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, u, i)
        : n.prototype && n.prototype.isPureReactComponent
        ? !Jt(t, r) || !Jt(l, u)
        : !0
    );
  }
  function Rs(e, n, t) {
    var r = !1,
      l = Fn,
      u = n.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = Ge(u))
        : ((l = De(n) ? Jn : _e.current),
          (r = n.contextTypes),
          (u = (r = r != null) ? St(e, l) : Fn)),
      (n = new n(t, u)),
      (e.memoizedState =
        n.state !== null && n.state !== void 0 ? n.state : null),
      (n.updater = sl),
      (e.stateNode = n),
      (n._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      n
    );
  }
  function Os(e, n, t, r) {
    (e = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(t, r),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(t, r),
      n.state !== e && sl.enqueueReplaceState(n, n.state, null);
  }
  function Ku(e, n, t, r) {
    var l = e.stateNode;
    (l.props = t), (l.state = e.memoizedState), (l.refs = {}), Ou(e);
    var u = n.contextType;
    typeof u == "object" && u !== null
      ? (l.context = Ge(u))
      : ((u = De(n) ? Jn : _e.current), (l.context = St(e, u))),
      (l.state = e.memoizedState),
      (u = n.getDerivedStateFromProps),
      typeof u == "function" && (Wu(e, n, u, t), (l.state = e.memoizedState)),
      typeof n.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((n = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        n !== l.state && sl.enqueueReplaceState(l, l.state, null),
        nl(e, t, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function zt(e, n) {
    try {
      var t = "",
        r = n;
      do (t += V(r)), (r = r.return);
      while (r);
      var l = t;
    } catch (u) {
      l =
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
  }
  function Yu(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function Xu(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function () {
        throw t;
      });
    }
  }
  var lf = typeof WeakMap == "function" ? WeakMap : Map;
  function Ms(e, n, t) {
    (t = Cn(-1, t)), (t.tag = 3), (t.payload = { element: null });
    var r = n.value;
    return (
      (t.callback = function () {
        vl || ((vl = !0), (ai = r)), Xu(e, n);
      }),
      t
    );
  }
  function Ds(e, n, t) {
    (t = Cn(-1, t)), (t.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = n.value;
      (t.payload = function () {
        return r(l);
      }),
        (t.callback = function () {
          Xu(e, n);
        });
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (t.callback = function () {
          Xu(e, n),
            typeof r != "function" &&
              (Hn === null ? (Hn = new Set([this])) : Hn.add(this));
          var i = n.stack;
          this.componentDidCatch(n.value, {
            componentStack: i !== null ? i : "",
          });
        }),
      t
    );
  }
  function js(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new lf();
      var l = new Set();
      r.set(n, l);
    } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
    l.has(t) || (l.add(t), (e = wf.bind(null, e, n, t)), n.then(e, e));
  }
  function Is(e) {
    do {
      var n;
      if (
        ((n = e.tag === 13) &&
          ((n = e.memoizedState),
          (n = n !== null ? n.dehydrated !== null : !0)),
        n)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Fs(e, n, t, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === n
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (t.flags |= 131072),
            (t.flags &= -52805),
            t.tag === 1 &&
              (t.alternate === null
                ? (t.tag = 17)
                : ((n = Cn(-1, 1)), (n.tag = 2), An(t, n, 1))),
            (t.lanes |= 1)),
        e);
  }
  var uf = xe.ReactCurrentOwner,
    je = !1;
  function Te(e, n, t, r) {
    n.child = e === null ? rs(n, null, t, r) : _t(n, e.child, t, r);
  }
  function Us(e, n, t, r, l) {
    t = t.render;
    var u = n.ref;
    return (
      Nt(n, l),
      (r = Vu(e, n, t, r, u, l)),
      (t = Au()),
      e !== null && !je
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~l),
          Nn(e, n, l))
        : (re && t && Eu(n), (n.flags |= 1), Te(e, n, r, l), n.child)
    );
  }
  function Vs(e, n, t, r, l) {
    if (e === null) {
      var u = t.type;
      return typeof u == "function" &&
        !hi(u) &&
        u.defaultProps === void 0 &&
        t.compare === null &&
        t.defaultProps === void 0
        ? ((n.tag = 15), (n.type = u), As(e, n, u, r, l))
        : ((e = kl(t.type, null, r, n, n.mode, l)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((u = e.child), !(e.lanes & l))) {
      var i = u.memoizedProps;
      if (
        ((t = t.compare), (t = t !== null ? t : Jt), t(i, r) && e.ref === n.ref)
      )
        return Nn(e, n, l);
    }
    return (
      (n.flags |= 1),
      (e = Kn(u, r)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    );
  }
  function As(e, n, t, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Jt(u, r) && e.ref === n.ref)
        if (((je = !1), (n.pendingProps = r = u), (e.lanes & l) !== 0))
          e.flags & 131072 && (je = !0);
        else return (n.lanes = e.lanes), Nn(e, n, l);
    }
    return Gu(e, n, t, r, l);
  }
  function Bs(e, n, t) {
    var r = n.pendingProps,
      l = r.children,
      u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(n.mode & 1))
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          J(Lt, $e),
          ($e |= t);
      else {
        if (!(t & 1073741824))
          return (
            (e = u !== null ? u.baseLanes | t : t),
            (n.lanes = n.childLanes = 1073741824),
            (n.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (n.updateQueue = null),
            J(Lt, $e),
            ($e |= e),
            null
          );
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = u !== null ? u.baseLanes : t),
          J(Lt, $e),
          ($e |= r);
      }
    else
      u !== null ? ((r = u.baseLanes | t), (n.memoizedState = null)) : (r = t),
        J(Lt, $e),
        ($e |= r);
    return Te(e, n, l, t), n.child;
  }
  function Hs(e, n) {
    var t = n.ref;
    ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
      ((n.flags |= 512), (n.flags |= 2097152));
  }
  function Gu(e, n, t, r, l) {
    var u = De(t) ? Jn : _e.current;
    return (
      (u = St(n, u)),
      Nt(n, l),
      (t = Vu(e, n, t, r, u, l)),
      (r = Au()),
      e !== null && !je
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~l),
          Nn(e, n, l))
        : (re && r && Eu(n), (n.flags |= 1), Te(e, n, t, l), n.child)
    );
  }
  function Qs(e, n, t, r, l) {
    if (De(t)) {
      var u = !0;
      Kr(n);
    } else u = !1;
    if ((Nt(n, l), n.stateNode === null))
      cl(e, n), Rs(n, t, r), Ku(n, t, r, l), (r = !0);
    else if (e === null) {
      var i = n.stateNode,
        o = n.memoizedProps;
      i.props = o;
      var s = i.context,
        p = t.contextType;
      typeof p == "object" && p !== null
        ? (p = Ge(p))
        : ((p = De(t) ? Jn : _e.current), (p = St(n, p)));
      var y = t.getDerivedStateFromProps,
        g =
          typeof y == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function";
      g ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== r || s !== p) && Os(n, i, r, p)),
        (Vn = !1);
      var v = n.memoizedState;
      (i.state = v),
        nl(n, r, i, l),
        (s = n.memoizedState),
        o !== r || v !== s || Me.current || Vn
          ? (typeof y == "function" && (Wu(n, t, y, r), (s = n.memoizedState)),
            (o = Vn || Ls(n, t, o, r, v, s, p))
              ? (g ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = r),
                (n.memoizedState = s)),
            (i.props = r),
            (i.state = s),
            (i.context = p),
            (r = o))
          : (typeof i.componentDidMount == "function" && (n.flags |= 4194308),
            (r = !1));
    } else {
      (i = n.stateNode),
        us(e, n),
        (o = n.memoizedProps),
        (p = n.type === n.elementType ? o : un(n.type, o)),
        (i.props = p),
        (g = n.pendingProps),
        (v = i.context),
        (s = t.contextType),
        typeof s == "object" && s !== null
          ? (s = Ge(s))
          : ((s = De(t) ? Jn : _e.current), (s = St(n, s)));
      var k = t.getDerivedStateFromProps;
      (y =
        typeof k == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function") ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== g || v !== s) && Os(n, i, r, s)),
        (Vn = !1),
        (v = n.memoizedState),
        (i.state = v),
        nl(n, r, i, l);
      var _ = n.memoizedState;
      o !== g || v !== _ || Me.current || Vn
        ? (typeof k == "function" && (Wu(n, t, k, r), (_ = n.memoizedState)),
          (p = Vn || Ls(n, t, p, r, v, _, s) || !1)
            ? (y ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(r, _, s),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(r, _, s)),
              typeof i.componentDidUpdate == "function" && (n.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (o === e.memoizedProps && v === e.memoizedState) ||
                (n.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (o === e.memoizedProps && v === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = r),
              (n.memoizedState = _)),
          (i.props = r),
          (i.state = _),
          (i.context = s),
          (r = p))
        : (typeof i.componentDidUpdate != "function" ||
            (o === e.memoizedProps && v === e.memoizedState) ||
            (n.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (o === e.memoizedProps && v === e.memoizedState) ||
            (n.flags |= 1024),
          (r = !1));
    }
    return Zu(e, n, t, r, u, l);
  }
  function Zu(e, n, t, r, l, u) {
    Hs(e, n);
    var i = (n.flags & 128) !== 0;
    if (!r && !i) return l && Xo(n, t, !1), Nn(e, n, u);
    (r = n.stateNode), (uf.current = n);
    var o =
      i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (n.flags |= 1),
      e !== null && i
        ? ((n.child = _t(n, e.child, null, u)), (n.child = _t(n, null, o, u)))
        : Te(e, n, o, u),
      (n.memoizedState = r.state),
      l && Xo(n, t, !0),
      n.child
    );
  }
  function $s(e) {
    var n = e.stateNode;
    n.pendingContext
      ? Ko(e, n.pendingContext, n.pendingContext !== n.context)
      : n.context && Ko(e, n.context, !1),
      Mu(e, n.containerInfo);
  }
  function Ws(e, n, t, r, l) {
    return xt(), Nu(l), (n.flags |= 256), Te(e, n, t, r), n.child;
  }
  var Ju = { dehydrated: null, treeContext: null, retryLane: 0 };
  function qu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ks(e, n, t) {
    var r = n.pendingProps,
      l = ie.current,
      u = !1,
      i = (n.flags & 128) !== 0,
      o;
    if (
      ((o = i) ||
        (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      o
        ? ((u = !0), (n.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      J(ie, l & 1),
      e === null)
    )
      return (
        Cu(n),
        (e = n.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (n.mode & 1
              ? e.data === "$!"
                ? (n.lanes = 8)
                : (n.lanes = 1073741824)
              : (n.lanes = 1),
            null)
          : ((i = r.children),
            (e = r.fallback),
            u
              ? ((r = n.mode),
                (u = n.child),
                (i = { mode: "hidden", children: i }),
                !(r & 1) && u !== null
                  ? ((u.childLanes = 0), (u.pendingProps = i))
                  : (u = El(i, r, 0, null)),
                (e = ot(e, r, t, null)),
                (u.return = n),
                (e.return = n),
                (u.sibling = e),
                (n.child = u),
                (n.child.memoizedState = qu(t)),
                (n.memoizedState = Ju),
                e)
              : bu(n, i))
      );
    if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
      return of(e, n, i, r, o, l, t);
    if (u) {
      (u = r.fallback), (i = n.mode), (l = e.child), (o = l.sibling);
      var s = { mode: "hidden", children: r.children };
      return (
        !(i & 1) && n.child !== l
          ? ((r = n.child),
            (r.childLanes = 0),
            (r.pendingProps = s),
            (n.deletions = null))
          : ((r = Kn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        o !== null ? (u = Kn(o, u)) : ((u = ot(u, i, t, null)), (u.flags |= 2)),
        (u.return = n),
        (r.return = n),
        (r.sibling = u),
        (n.child = r),
        (r = u),
        (u = n.child),
        (i = e.child.memoizedState),
        (i =
          i === null
            ? qu(t)
            : {
                baseLanes: i.baseLanes | t,
                cachePool: null,
                transitions: i.transitions,
              }),
        (u.memoizedState = i),
        (u.childLanes = e.childLanes & ~t),
        (n.memoizedState = Ju),
        r
      );
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (r = Kn(u, { mode: "visible", children: r.children })),
      !(n.mode & 1) && (r.lanes = t),
      (r.return = n),
      (r.sibling = null),
      e !== null &&
        ((t = n.deletions),
        t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
      (n.child = r),
      (n.memoizedState = null),
      r
    );
  }
  function bu(e, n) {
    return (
      (n = El({ mode: "visible", children: n }, e.mode, 0, null)),
      (n.return = e),
      (e.child = n)
    );
  }
  function al(e, n, t, r) {
    return (
      r !== null && Nu(r),
      _t(n, e.child, null, t),
      (e = bu(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function of(e, n, t, r, l, u, i) {
    if (t)
      return n.flags & 256
        ? ((n.flags &= -257), (r = Yu(Error(m(422)))), al(e, n, i, r))
        : n.memoizedState !== null
        ? ((n.child = e.child), (n.flags |= 128), null)
        : ((u = r.fallback),
          (l = n.mode),
          (r = El({ mode: "visible", children: r.children }, l, 0, null)),
          (u = ot(u, l, i, null)),
          (u.flags |= 2),
          (r.return = n),
          (u.return = n),
          (r.sibling = u),
          (n.child = r),
          n.mode & 1 && _t(n, e.child, null, i),
          (n.child.memoizedState = qu(i)),
          (n.memoizedState = Ju),
          u);
    if (!(n.mode & 1)) return al(e, n, i, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
      return (
        (r = o), (u = Error(m(419))), (r = Yu(u, r, void 0)), al(e, n, i, r)
      );
    }
    if (((o = (i & e.childLanes) !== 0), je || o)) {
      if (((r = we), r !== null)) {
        switch (i & -i) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
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
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | i) ? 0 : l),
          l !== 0 &&
            l !== u.retryLane &&
            ((u.retryLane = l), _n(e, l), an(r, e, l, -1));
      }
      return vi(), (r = Yu(Error(m(421)))), al(e, n, i, r);
    }
    return l.data === "$?"
      ? ((n.flags |= 128),
        (n.child = e.child),
        (n = Sf.bind(null, e)),
        (l._reactRetry = n),
        null)
      : ((e = u.treeContext),
        (Qe = jn(l.nextSibling)),
        (He = n),
        (re = !0),
        (ln = null),
        e !== null &&
          ((Ye[Xe++] = En),
          (Ye[Xe++] = xn),
          (Ye[Xe++] = qn),
          (En = e.id),
          (xn = e.overflow),
          (qn = n)),
        (n = bu(n, r.children)),
        (n.flags |= 4096),
        n);
  }
  function Ys(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), Lu(e.return, n, t);
  }
  function ei(e, n, t, r, l) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: t,
          tailMode: l,
        })
      : ((u.isBackwards = n),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = r),
        (u.tail = t),
        (u.tailMode = l));
  }
  function Xs(e, n, t) {
    var r = n.pendingProps,
      l = r.revealOrder,
      u = r.tail;
    if ((Te(e, n, r.children, t), (r = ie.current), r & 2))
      (r = (r & 1) | 2), (n.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ys(e, t, n);
          else if (e.tag === 19) Ys(e, t, n);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((J(ie, r), !(n.mode & 1))) n.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (t = n.child, l = null; t !== null; )
            (e = t.alternate),
              e !== null && tl(e) === null && (l = t),
              (t = t.sibling);
          (t = l),
            t === null
              ? ((l = n.child), (n.child = null))
              : ((l = t.sibling), (t.sibling = null)),
            ei(n, !1, l, t, u);
          break;
        case "backwards":
          for (t = null, l = n.child, n.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && tl(e) === null)) {
              n.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = t), (t = l), (l = e);
          }
          ei(n, !0, t, null, u);
          break;
        case "together":
          ei(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function cl(e, n) {
    !(n.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
  }
  function Nn(e, n, t) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      (rt |= n.lanes),
      !(t & n.childLanes))
    )
      return null;
    if (e !== null && n.child !== e.child) throw Error(m(153));
    if (n.child !== null) {
      for (
        e = n.child, t = Kn(e, e.pendingProps), n.child = t, t.return = n;
        e.sibling !== null;

      )
        (e = e.sibling),
          (t = t.sibling = Kn(e, e.pendingProps)),
          (t.return = n);
      t.sibling = null;
    }
    return n.child;
  }
  function sf(e, n, t) {
    switch (n.tag) {
      case 3:
        $s(n), xt();
        break;
      case 5:
        ss(n);
        break;
      case 1:
        De(n.type) && Kr(n);
        break;
      case 4:
        Mu(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context,
          l = n.memoizedProps.value;
        J(qr, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = n.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (J(ie, ie.current & 1), (n.flags |= 128), null)
            : t & n.child.childLanes
            ? Ks(e, n, t)
            : (J(ie, ie.current & 1),
              (e = Nn(e, n, t)),
              e !== null ? e.sibling : null);
        J(ie, ie.current & 1);
        break;
      case 19:
        if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
          if (r) return Xs(e, n, t);
          n.flags |= 128;
        }
        if (
          ((l = n.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          J(ie, ie.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (n.lanes = 0), Bs(e, n, t);
    }
    return Nn(e, n, t);
  }
  var Gs, ni, Zs, Js;
  (Gs = function (e, n) {
    for (var t = n.child; t !== null; ) {
      if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
      else if (t.tag !== 4 && t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === n) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === n) return;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }),
    (ni = function () {}),
    (Zs = function (e, n, t, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = n.stateNode), nt(vn.current);
        var u = null;
        switch (t) {
          case "input":
            (l = Ll(e, l)), (r = Ll(e, r)), (u = []);
            break;
          case "select":
            (l = x({}, l, { value: void 0 })),
              (r = x({}, r, { value: void 0 })),
              (u = []);
            break;
          case "textarea":
            (l = Ml(e, l)), (r = Ml(e, r)), (u = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = Qr);
        }
        jl(t, r);
        var i;
        t = null;
        for (p in l)
          if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null)
            if (p === "style") {
              var o = l[p];
              for (i in o) o.hasOwnProperty(i) && (t || (t = {}), (t[i] = ""));
            } else
              p !== "dangerouslySetInnerHTML" &&
                p !== "children" &&
                p !== "suppressContentEditableWarning" &&
                p !== "suppressHydrationWarning" &&
                p !== "autoFocus" &&
                (j.hasOwnProperty(p)
                  ? u || (u = [])
                  : (u = u || []).push(p, null));
        for (p in r) {
          var s = r[p];
          if (
            ((o = l != null ? l[p] : void 0),
            r.hasOwnProperty(p) && s !== o && (s != null || o != null))
          )
            if (p === "style")
              if (o) {
                for (i in o)
                  !o.hasOwnProperty(i) ||
                    (s && s.hasOwnProperty(i)) ||
                    (t || (t = {}), (t[i] = ""));
                for (i in s)
                  s.hasOwnProperty(i) &&
                    o[i] !== s[i] &&
                    (t || (t = {}), (t[i] = s[i]));
              } else t || (u || (u = []), u.push(p, t)), (t = s);
            else
              p === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0),
                  (o = o ? o.__html : void 0),
                  s != null && o !== s && (u = u || []).push(p, s))
                : p === "children"
                ? (typeof s != "string" && typeof s != "number") ||
                  (u = u || []).push(p, "" + s)
                : p !== "suppressContentEditableWarning" &&
                  p !== "suppressHydrationWarning" &&
                  (j.hasOwnProperty(p)
                    ? (s != null && p === "onScroll" && q("scroll", e),
                      u || o === s || (u = []))
                    : (u = u || []).push(p, s));
        }
        t && (u = u || []).push("style", t);
        var p = u;
        (n.updateQueue = p) && (n.flags |= 4);
      }
    }),
    (Js = function (e, n, t, r) {
      t !== r && (n.flags |= 4);
    });
  function dr(e, n) {
    if (!re)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var t = null; n !== null; )
            n.alternate !== null && (t = n), (n = n.sibling);
          t === null ? (e.tail = null) : (t.sibling = null);
          break;
        case "collapsed":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ne(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      t = 0,
      r = 0;
    if (n)
      for (var l = e.child; l !== null; )
        (t |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (t |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = t), n;
  }
  function af(e, n, t) {
    var r = n.pendingProps;
    switch ((xu(n), n.tag)) {
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
        return Ne(n), null;
      case 1:
        return De(n.type) && Wr(), Ne(n), null;
      case 3:
        return (
          (r = n.stateNode),
          Pt(),
          b(Me),
          b(_e),
          Iu(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Zr(n)
              ? (n.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
                ((n.flags |= 1024), ln !== null && (di(ln), (ln = null)))),
          ni(e, n),
          Ne(n),
          null
        );
      case 5:
        Du(n);
        var l = nt(or.current);
        if (((t = n.type), e !== null && n.stateNode != null))
          Zs(e, n, t, r, l),
            e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(m(166));
            return Ne(n), null;
          }
          if (((e = nt(vn.current)), Zr(n))) {
            (r = n.stateNode), (t = n.type);
            var u = n.memoizedProps;
            switch (((r[mn] = n), (r[tr] = u), (e = (n.mode & 1) !== 0), t)) {
              case "dialog":
                q("cancel", r), q("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                q("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < bt.length; l++) q(bt[l], r);
                break;
              case "source":
                q("error", r);
                break;
              case "img":
              case "image":
              case "link":
                q("error", r), q("load", r);
                break;
              case "details":
                q("toggle", r);
                break;
              case "input":
                Li(r, u), q("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!u.multiple }),
                  q("invalid", r);
                break;
              case "textarea":
                Mi(r, u), q("invalid", r);
            }
            jl(t, u), (l = null);
            for (var i in u)
              if (u.hasOwnProperty(i)) {
                var o = u[i];
                i === "children"
                  ? typeof o == "string"
                    ? r.textContent !== o &&
                      (u.suppressHydrationWarning !== !0 &&
                        Hr(r.textContent, o, e),
                      (l = ["children", o]))
                    : typeof o == "number" &&
                      r.textContent !== "" + o &&
                      (u.suppressHydrationWarning !== !0 &&
                        Hr(r.textContent, o, e),
                      (l = ["children", "" + o]))
                  : j.hasOwnProperty(i) &&
                    o != null &&
                    i === "onScroll" &&
                    q("scroll", r);
              }
            switch (t) {
              case "input":
                wr(r), Oi(r, u, !0);
                break;
              case "textarea":
                wr(r), ji(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Qr);
            }
            (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
          } else {
            (i = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Ii(t)),
              e === "http://www.w3.org/1999/xhtml"
                ? t === "script"
                  ? ((e = i.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = i.createElement(t, { is: r.is }))
                  : ((e = i.createElement(t)),
                    t === "select" &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
                : (e = i.createElementNS(e, t)),
              (e[mn] = n),
              (e[tr] = r),
              Gs(e, n, !1, !1),
              (n.stateNode = e);
            e: {
              switch (((i = Il(t, r)), t)) {
                case "dialog":
                  q("cancel", e), q("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  q("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < bt.length; l++) q(bt[l], e);
                  l = r;
                  break;
                case "source":
                  q("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  q("error", e), q("load", e), (l = r);
                  break;
                case "details":
                  q("toggle", e), (l = r);
                  break;
                case "input":
                  Li(e, r), (l = Ll(e, r)), q("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = x({}, r, { value: void 0 })),
                    q("invalid", e);
                  break;
                case "textarea":
                  Mi(e, r), (l = Ml(e, r)), q("invalid", e);
                  break;
                default:
                  l = r;
              }
              jl(t, l), (o = l);
              for (u in o)
                if (o.hasOwnProperty(u)) {
                  var s = o[u];
                  u === "style"
                    ? Vi(e, s)
                    : u === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && Fi(e, s))
                    : u === "children"
                    ? typeof s == "string"
                      ? (t !== "textarea" || s !== "") && Dt(e, s)
                      : typeof s == "number" && Dt(e, "" + s)
                    : u !== "suppressContentEditableWarning" &&
                      u !== "suppressHydrationWarning" &&
                      u !== "autoFocus" &&
                      (j.hasOwnProperty(u)
                        ? s != null && u === "onScroll" && q("scroll", e)
                        : s != null && be(e, u, s, i));
                }
              switch (t) {
                case "input":
                  wr(e), Oi(e, r, !1);
                  break;
                case "textarea":
                  wr(e), ji(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Q(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (u = r.value),
                    u != null
                      ? st(e, !!r.multiple, u, !1)
                      : r.defaultValue != null &&
                        st(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Qr);
              }
              switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (n.flags |= 4);
          }
          n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
        }
        return Ne(n), null;
      case 6:
        if (e && n.stateNode != null) Js(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null) throw Error(m(166));
          if (((t = nt(or.current)), nt(vn.current), Zr(n))) {
            if (
              ((r = n.stateNode),
              (t = n.memoizedProps),
              (r[mn] = n),
              (u = r.nodeValue !== t) && ((e = He), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Hr(r.nodeValue, t, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Hr(r.nodeValue, t, (e.mode & 1) !== 0);
              }
            u && (n.flags |= 4);
          } else
            (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
              (r[mn] = n),
              (n.stateNode = r);
        }
        return Ne(n), null;
      case 13:
        if (
          (b(ie),
          (r = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (re && Qe !== null && n.mode & 1 && !(n.flags & 128))
            es(), xt(), (n.flags |= 98560), (u = !1);
          else if (((u = Zr(n)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(m(318));
              if (
                ((u = n.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(m(317));
              u[mn] = n;
            } else
              xt(),
                !(n.flags & 128) && (n.memoizedState = null),
                (n.flags |= 4);
            Ne(n), (u = !1);
          } else ln !== null && (di(ln), (ln = null)), (u = !0);
          if (!u) return n.flags & 65536 ? n : null;
        }
        return n.flags & 128
          ? ((n.lanes = t), n)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((n.child.flags |= 8192),
              n.mode & 1 &&
                (e === null || ie.current & 1 ? ye === 0 && (ye = 3) : vi())),
            n.updateQueue !== null && (n.flags |= 4),
            Ne(n),
            null);
      case 4:
        return (
          Pt(),
          ni(e, n),
          e === null && er(n.stateNode.containerInfo),
          Ne(n),
          null
        );
      case 10:
        return Tu(n.type._context), Ne(n), null;
      case 17:
        return De(n.type) && Wr(), Ne(n), null;
      case 19:
        if ((b(ie), (u = n.memoizedState), u === null)) return Ne(n), null;
        if (((r = (n.flags & 128) !== 0), (i = u.rendering), i === null))
          if (r) dr(u, !1);
          else {
            if (ye !== 0 || (e !== null && e.flags & 128))
              for (e = n.child; e !== null; ) {
                if (((i = tl(e)), i !== null)) {
                  for (
                    n.flags |= 128,
                      dr(u, !1),
                      r = i.updateQueue,
                      r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                      n.subtreeFlags = 0,
                      r = t,
                      t = n.child;
                    t !== null;

                  )
                    (u = t),
                      (e = r),
                      (u.flags &= 14680066),
                      (i = u.alternate),
                      i === null
                        ? ((u.childLanes = 0),
                          (u.lanes = e),
                          (u.child = null),
                          (u.subtreeFlags = 0),
                          (u.memoizedProps = null),
                          (u.memoizedState = null),
                          (u.updateQueue = null),
                          (u.dependencies = null),
                          (u.stateNode = null))
                        : ((u.childLanes = i.childLanes),
                          (u.lanes = i.lanes),
                          (u.child = i.child),
                          (u.subtreeFlags = 0),
                          (u.deletions = null),
                          (u.memoizedProps = i.memoizedProps),
                          (u.memoizedState = i.memoizedState),
                          (u.updateQueue = i.updateQueue),
                          (u.type = i.type),
                          (e = i.dependencies),
                          (u.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (t = t.sibling);
                  return J(ie, (ie.current & 1) | 2), n.child;
                }
                e = e.sibling;
              }
            u.tail !== null &&
              de() > Rt &&
              ((n.flags |= 128), (r = !0), dr(u, !1), (n.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = tl(i)), e !== null)) {
              if (
                ((n.flags |= 128),
                (r = !0),
                (t = e.updateQueue),
                t !== null && ((n.updateQueue = t), (n.flags |= 4)),
                dr(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !i.alternate &&
                  !re)
              )
                return Ne(n), null;
            } else
              2 * de() - u.renderingStartTime > Rt &&
                t !== 1073741824 &&
                ((n.flags |= 128), (r = !0), dr(u, !1), (n.lanes = 4194304));
          u.isBackwards
            ? ((i.sibling = n.child), (n.child = i))
            : ((t = u.last),
              t !== null ? (t.sibling = i) : (n.child = i),
              (u.last = i));
        }
        return u.tail !== null
          ? ((n = u.tail),
            (u.rendering = n),
            (u.tail = n.sibling),
            (u.renderingStartTime = de()),
            (n.sibling = null),
            (t = ie.current),
            J(ie, r ? (t & 1) | 2 : t & 1),
            n)
          : (Ne(n), null);
      case 22:
      case 23:
        return (
          mi(),
          (r = n.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
          r && n.mode & 1
            ? $e & 1073741824 &&
              (Ne(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : Ne(n),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, n.tag));
  }
  function cf(e, n) {
    switch ((xu(n), n.tag)) {
      case 1:
        return (
          De(n.type) && Wr(),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          Pt(),
          b(Me),
          b(_e),
          Iu(),
          (e = n.flags),
          e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 5:
        return Du(n), null;
      case 13:
        if (
          (b(ie), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(m(340));
          xt();
        }
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 19:
        return b(ie), null;
      case 4:
        return Pt(), null;
      case 10:
        return Tu(n.type._context), null;
      case 22:
      case 23:
        return mi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var fl = !1,
    Pe = !1,
    ff = typeof WeakSet == "function" ? WeakSet : Set,
    E = null;
  function Tt(e, n) {
    var t = e.ref;
    if (t !== null)
      if (typeof t == "function")
        try {
          t(null);
        } catch (r) {
          fe(e, n, r);
        }
      else t.current = null;
  }
  function ti(e, n, t) {
    try {
      t();
    } catch (r) {
      fe(e, n, r);
    }
  }
  var qs = !1;
  function df(e, n) {
    if (((mu = Rr), (e = Lo()), iu(e))) {
      if ("selectionStart" in e)
        var t = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          t = ((t = e.ownerDocument) && t.defaultView) || window;
          var r = t.getSelection && t.getSelection();
          if (r && r.rangeCount !== 0) {
            t = r.anchorNode;
            var l = r.anchorOffset,
              u = r.focusNode;
            r = r.focusOffset;
            try {
              t.nodeType, u.nodeType;
            } catch {
              t = null;
              break e;
            }
            var i = 0,
              o = -1,
              s = -1,
              p = 0,
              y = 0,
              g = e,
              v = null;
            n: for (;;) {
              for (
                var k;
                g !== t || (l !== 0 && g.nodeType !== 3) || (o = i + l),
                  g !== u || (r !== 0 && g.nodeType !== 3) || (s = i + r),
                  g.nodeType === 3 && (i += g.nodeValue.length),
                  (k = g.firstChild) !== null;

              )
                (v = g), (g = k);
              for (;;) {
                if (g === e) break n;
                if (
                  (v === t && ++p === l && (o = i),
                  v === u && ++y === r && (s = i),
                  (k = g.nextSibling) !== null)
                )
                  break;
                (g = v), (v = g.parentNode);
              }
              g = k;
            }
            t = o === -1 || s === -1 ? null : { start: o, end: s };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (
      vu = { focusedElem: e, selectionRange: t }, Rr = !1, E = n;
      E !== null;

    )
      if (((n = E), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = n), (E = e);
      else
        for (; E !== null; ) {
          n = E;
          try {
            var _ = n.alternate;
            if (n.flags & 1024)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (_ !== null) {
                    var C = _.memoizedProps,
                      pe = _.memoizedState,
                      f = n.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        n.elementType === n.type ? C : un(n.type, C),
                        pe
                      );
                    f.__reactInternalSnapshotBeforeUpdate = a;
                  }
                  break;
                case 3:
                  var d = n.stateNode.containerInfo;
                  d.nodeType === 1
                    ? (d.textContent = "")
                    : d.nodeType === 9 &&
                      d.documentElement &&
                      d.removeChild(d.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (w) {
            fe(n, n.return, w);
          }
          if (((e = n.sibling), e !== null)) {
            (e.return = n.return), (E = e);
            break;
          }
          E = n.return;
        }
    return (_ = qs), (qs = !1), _;
  }
  function pr(e, n, t) {
    var r = n.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          (l.destroy = void 0), u !== void 0 && ti(n, t, u);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function dl(e, n) {
    if (
      ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
    ) {
      var t = (n = n.next);
      do {
        if ((t.tag & e) === e) {
          var r = t.create;
          t.destroy = r();
        }
        t = t.next;
      } while (t !== n);
    }
  }
  function ri(e) {
    var n = e.ref;
    if (n !== null) {
      var t = e.stateNode;
      switch (e.tag) {
        case 5:
          e = t;
          break;
        default:
          e = t;
      }
      typeof n == "function" ? n(e) : (n.current = e);
    }
  }
  function bs(e) {
    var n = e.alternate;
    n !== null && ((e.alternate = null), bs(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((n = e.stateNode),
        n !== null &&
          (delete n[mn],
          delete n[tr],
          delete n[wu],
          delete n[Yc],
          delete n[Xc])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function ea(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function na(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || ea(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function li(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        n
          ? t.nodeType === 8
            ? t.parentNode.insertBefore(e, n)
            : t.insertBefore(e, n)
          : (t.nodeType === 8
              ? ((n = t.parentNode), n.insertBefore(e, t))
              : ((n = t), n.appendChild(e)),
            (t = t._reactRootContainer),
            t != null || n.onclick !== null || (n.onclick = Qr));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (li(e, n, t), e = e.sibling; e !== null; )
        li(e, n, t), (e = e.sibling);
  }
  function ui(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ui(e, n, t), e = e.sibling; e !== null; )
        ui(e, n, t), (e = e.sibling);
  }
  var ke = null,
    on = !1;
  function Bn(e, n, t) {
    for (t = t.child; t !== null; ) ta(e, n, t), (t = t.sibling);
  }
  function ta(e, n, t) {
    if (pn && typeof pn.onCommitFiberUnmount == "function")
      try {
        pn.onCommitFiberUnmount(Cr, t);
      } catch {}
    switch (t.tag) {
      case 5:
        Pe || Tt(t, n);
      case 6:
        var r = ke,
          l = on;
        (ke = null),
          Bn(e, n, t),
          (ke = r),
          (on = l),
          ke !== null &&
            (on
              ? ((e = ke),
                (t = t.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(t)
                  : e.removeChild(t))
              : ke.removeChild(t.stateNode));
        break;
      case 18:
        ke !== null &&
          (on
            ? ((e = ke),
              (t = t.stateNode),
              e.nodeType === 8
                ? gu(e.parentNode, t)
                : e.nodeType === 1 && gu(e, t),
              Wt(e))
            : gu(ke, t.stateNode));
        break;
      case 4:
        (r = ke),
          (l = on),
          (ke = t.stateNode.containerInfo),
          (on = !0),
          Bn(e, n, t),
          (ke = r),
          (on = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Pe &&
          ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var u = l,
              i = u.destroy;
            (u = u.tag),
              i !== void 0 && (u & 2 || u & 4) && ti(t, n, i),
              (l = l.next);
          } while (l !== r);
        }
        Bn(e, n, t);
        break;
      case 1:
        if (
          !Pe &&
          (Tt(t, n),
          (r = t.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = t.memoizedProps),
              (r.state = t.memoizedState),
              r.componentWillUnmount();
          } catch (o) {
            fe(t, n, o);
          }
        Bn(e, n, t);
        break;
      case 21:
        Bn(e, n, t);
        break;
      case 22:
        t.mode & 1
          ? ((Pe = (r = Pe) || t.memoizedState !== null), Bn(e, n, t), (Pe = r))
          : Bn(e, n, t);
        break;
      default:
        Bn(e, n, t);
    }
  }
  function ra(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new ff()),
        n.forEach(function (r) {
          var l = kf.bind(null, e, r);
          t.has(r) || (t.add(r), r.then(l, l));
        });
    }
  }
  function sn(e, n) {
    var t = n.deletions;
    if (t !== null)
      for (var r = 0; r < t.length; r++) {
        var l = t[r];
        try {
          var u = e,
            i = n,
            o = i;
          e: for (; o !== null; ) {
            switch (o.tag) {
              case 5:
                (ke = o.stateNode), (on = !1);
                break e;
              case 3:
                (ke = o.stateNode.containerInfo), (on = !0);
                break e;
              case 4:
                (ke = o.stateNode.containerInfo), (on = !0);
                break e;
            }
            o = o.return;
          }
          if (ke === null) throw Error(m(160));
          ta(u, i, l), (ke = null), (on = !1);
          var s = l.alternate;
          s !== null && (s.return = null), (l.return = null);
        } catch (p) {
          fe(l, n, p);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; ) la(n, e), (n = n.sibling);
  }
  function la(e, n) {
    var t = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((sn(n, e), yn(e), r & 4)) {
          try {
            pr(3, e, e.return), dl(3, e);
          } catch (C) {
            fe(e, e.return, C);
          }
          try {
            pr(5, e, e.return);
          } catch (C) {
            fe(e, e.return, C);
          }
        }
        break;
      case 1:
        sn(n, e), yn(e), r & 512 && t !== null && Tt(t, t.return);
        break;
      case 5:
        if (
          (sn(n, e),
          yn(e),
          r & 512 && t !== null && Tt(t, t.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Dt(l, "");
          } catch (C) {
            fe(e, e.return, C);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var u = e.memoizedProps,
            i = t !== null ? t.memoizedProps : u,
            o = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              o === "input" && u.type === "radio" && u.name != null && Ri(l, u),
                Il(o, i);
              var p = Il(o, u);
              for (i = 0; i < s.length; i += 2) {
                var y = s[i],
                  g = s[i + 1];
                y === "style"
                  ? Vi(l, g)
                  : y === "dangerouslySetInnerHTML"
                  ? Fi(l, g)
                  : y === "children"
                  ? Dt(l, g)
                  : be(l, y, g, p);
              }
              switch (o) {
                case "input":
                  Rl(l, u);
                  break;
                case "textarea":
                  Di(l, u);
                  break;
                case "select":
                  var v = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var k = u.value;
                  k != null
                    ? st(l, !!u.multiple, k, !1)
                    : v !== !!u.multiple &&
                      (u.defaultValue != null
                        ? st(l, !!u.multiple, u.defaultValue, !0)
                        : st(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[tr] = u;
            } catch (C) {
              fe(e, e.return, C);
            }
        }
        break;
      case 6:
        if ((sn(n, e), yn(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          (l = e.stateNode), (u = e.memoizedProps);
          try {
            l.nodeValue = u;
          } catch (C) {
            fe(e, e.return, C);
          }
        }
        break;
      case 3:
        if (
          (sn(n, e), yn(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
        )
          try {
            Wt(n.containerInfo);
          } catch (C) {
            fe(e, e.return, C);
          }
        break;
      case 4:
        sn(n, e), yn(e);
        break;
      case 13:
        sn(n, e),
          yn(e),
          (l = e.child),
          l.flags & 8192 &&
            ((u = l.memoizedState !== null),
            (l.stateNode.isHidden = u),
            !u ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (si = de())),
          r & 4 && ra(e);
        break;
      case 22:
        if (
          ((y = t !== null && t.memoizedState !== null),
          e.mode & 1 ? ((Pe = (p = Pe) || y), sn(n, e), (Pe = p)) : sn(n, e),
          yn(e),
          r & 8192)
        ) {
          if (
            ((p = e.memoizedState !== null),
            (e.stateNode.isHidden = p) && !y && e.mode & 1)
          )
            for (E = e, y = e.child; y !== null; ) {
              for (g = E = y; E !== null; ) {
                switch (((v = E), (k = v.child), v.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    pr(4, v, v.return);
                    break;
                  case 1:
                    Tt(v, v.return);
                    var _ = v.stateNode;
                    if (typeof _.componentWillUnmount == "function") {
                      (r = v), (t = v.return);
                      try {
                        (n = r),
                          (_.props = n.memoizedProps),
                          (_.state = n.memoizedState),
                          _.componentWillUnmount();
                      } catch (C) {
                        fe(r, t, C);
                      }
                    }
                    break;
                  case 5:
                    Tt(v, v.return);
                    break;
                  case 22:
                    if (v.memoizedState !== null) {
                      oa(g);
                      continue;
                    }
                }
                k !== null ? ((k.return = v), (E = k)) : oa(g);
              }
              y = y.sibling;
            }
          e: for (y = null, g = e; ; ) {
            if (g.tag === 5) {
              if (y === null) {
                y = g;
                try {
                  (l = g.stateNode),
                    p
                      ? ((u = l.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((o = g.stateNode),
                        (s = g.memoizedProps.style),
                        (i =
                          s != null && s.hasOwnProperty("display")
                            ? s.display
                            : null),
                        (o.style.display = Ui("display", i)));
                } catch (C) {
                  fe(e, e.return, C);
                }
              }
            } else if (g.tag === 6) {
              if (y === null)
                try {
                  g.stateNode.nodeValue = p ? "" : g.memoizedProps;
                } catch (C) {
                  fe(e, e.return, C);
                }
            } else if (
              ((g.tag !== 22 && g.tag !== 23) ||
                g.memoizedState === null ||
                g === e) &&
              g.child !== null
            ) {
              (g.child.return = g), (g = g.child);
              continue;
            }
            if (g === e) break e;
            for (; g.sibling === null; ) {
              if (g.return === null || g.return === e) break e;
              y === g && (y = null), (g = g.return);
            }
            y === g && (y = null),
              (g.sibling.return = g.return),
              (g = g.sibling);
          }
        }
        break;
      case 19:
        sn(n, e), yn(e), r & 4 && ra(e);
        break;
      case 21:
        break;
      default:
        sn(n, e), yn(e);
    }
  }
  function yn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (ea(t)) {
              var r = t;
              break e;
            }
            t = t.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Dt(l, ""), (r.flags &= -33));
            var u = na(e);
            ui(e, u, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              o = na(e);
            li(e, o, i);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        fe(e, e.return, s);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function pf(e, n, t) {
    (E = e), ua(e);
  }
  function ua(e, n, t) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
      var l = E,
        u = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || fl;
        if (!i) {
          var o = l.alternate,
            s = (o !== null && o.memoizedState !== null) || Pe;
          o = fl;
          var p = Pe;
          if (((fl = i), (Pe = s) && !p))
            for (E = l; E !== null; )
              (i = E),
                (s = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? sa(l)
                  : s !== null
                  ? ((s.return = i), (E = s))
                  : sa(l);
          for (; u !== null; ) (E = u), ua(u), (u = u.sibling);
          (E = l), (fl = o), (Pe = p);
        }
        ia(e);
      } else
        l.subtreeFlags & 8772 && u !== null ? ((u.return = l), (E = u)) : ia(e);
    }
  }
  function ia(e) {
    for (; E !== null; ) {
      var n = E;
      if (n.flags & 8772) {
        var t = n.alternate;
        try {
          if (n.flags & 8772)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                Pe || dl(5, n);
                break;
              case 1:
                var r = n.stateNode;
                if (n.flags & 4 && !Pe)
                  if (t === null) r.componentDidMount();
                  else {
                    var l =
                      n.elementType === n.type
                        ? t.memoizedProps
                        : un(n.type, t.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      t.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var u = n.updateQueue;
                u !== null && os(n, u, r);
                break;
              case 3:
                var i = n.updateQueue;
                if (i !== null) {
                  if (((t = null), n.child !== null))
                    switch (n.child.tag) {
                      case 5:
                        t = n.child.stateNode;
                        break;
                      case 1:
                        t = n.child.stateNode;
                    }
                  os(n, i, t);
                }
                break;
              case 5:
                var o = n.stateNode;
                if (t === null && n.flags & 4) {
                  t = o;
                  var s = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      s.autoFocus && t.focus();
                      break;
                    case "img":
                      s.src && (t.src = s.src);
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
                if (n.memoizedState === null) {
                  var p = n.alternate;
                  if (p !== null) {
                    var y = p.memoizedState;
                    if (y !== null) {
                      var g = y.dehydrated;
                      g !== null && Wt(g);
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
                throw Error(m(163));
            }
          Pe || (n.flags & 512 && ri(n));
        } catch (v) {
          fe(n, n.return, v);
        }
      }
      if (n === e) {
        E = null;
        break;
      }
      if (((t = n.sibling), t !== null)) {
        (t.return = n.return), (E = t);
        break;
      }
      E = n.return;
    }
  }
  function oa(e) {
    for (; E !== null; ) {
      var n = E;
      if (n === e) {
        E = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        (t.return = n.return), (E = t);
        break;
      }
      E = n.return;
    }
  }
  function sa(e) {
    for (; E !== null; ) {
      var n = E;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              dl(4, n);
            } catch (s) {
              fe(n, t, s);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = n.return;
              try {
                r.componentDidMount();
              } catch (s) {
                fe(n, l, s);
              }
            }
            var u = n.return;
            try {
              ri(n);
            } catch (s) {
              fe(n, u, s);
            }
            break;
          case 5:
            var i = n.return;
            try {
              ri(n);
            } catch (s) {
              fe(n, i, s);
            }
        }
      } catch (s) {
        fe(n, n.return, s);
      }
      if (n === e) {
        E = null;
        break;
      }
      var o = n.sibling;
      if (o !== null) {
        (o.return = n.return), (E = o);
        break;
      }
      E = n.return;
    }
  }
  var mf = Math.ceil,
    pl = xe.ReactCurrentDispatcher,
    ii = xe.ReactCurrentOwner,
    Je = xe.ReactCurrentBatchConfig,
    F = 0,
    we = null,
    me = null,
    Ee = 0,
    $e = 0,
    Lt = In(0),
    ye = 0,
    mr = null,
    rt = 0,
    ml = 0,
    oi = 0,
    vr = null,
    Ie = null,
    si = 0,
    Rt = 1 / 0,
    Pn = null,
    vl = !1,
    ai = null,
    Hn = null,
    hl = !1,
    Qn = null,
    yl = 0,
    hr = 0,
    ci = null,
    gl = -1,
    wl = 0;
  function Le() {
    return F & 6 ? de() : gl !== -1 ? gl : (gl = de());
  }
  function $n(e) {
    return e.mode & 1
      ? F & 2 && Ee !== 0
        ? Ee & -Ee
        : Zc.transition !== null
        ? (wl === 0 && (wl = eo()), wl)
        : ((e = $),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ao(e.type))),
          e)
      : 1;
  }
  function an(e, n, t, r) {
    if (50 < hr) throw ((hr = 0), (ci = null), Error(m(185)));
    At(e, t, r),
      (!(F & 2) || e !== we) &&
        (e === we && (!(F & 2) && (ml |= t), ye === 4 && Wn(e, Ee)),
        Fe(e, r),
        t === 1 && F === 0 && !(n.mode & 1) && ((Rt = de() + 500), Yr && Un()));
  }
  function Fe(e, n) {
    var t = e.callbackNode;
    Za(e, n);
    var r = zr(e, e === we ? Ee : 0);
    if (r === 0)
      t !== null && Ji(t), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((n = r & -r), e.callbackPriority !== n)) {
      if ((t != null && Ji(t), n === 1))
        e.tag === 0 ? Gc(ca.bind(null, e)) : Go(ca.bind(null, e)),
          Wc(function () {
            !(F & 6) && Un();
          }),
          (t = null);
      else {
        switch (no(r)) {
          case 1:
            t = Ql;
            break;
          case 4:
            t = qi;
            break;
          case 16:
            t = _r;
            break;
          case 536870912:
            t = bi;
            break;
          default:
            t = _r;
        }
        t = ga(t, aa.bind(null, e));
      }
      (e.callbackPriority = n), (e.callbackNode = t);
    }
  }
  function aa(e, n) {
    if (((gl = -1), (wl = 0), F & 6)) throw Error(m(327));
    var t = e.callbackNode;
    if (Ot() && e.callbackNode !== t) return null;
    var r = zr(e, e === we ? Ee : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || n) n = Sl(e, r);
    else {
      n = r;
      var l = F;
      F |= 2;
      var u = da();
      (we !== e || Ee !== n) && ((Pn = null), (Rt = de() + 500), ut(e, n));
      do
        try {
          yf();
          break;
        } catch (o) {
          fa(e, o);
        }
      while (!0);
      zu(),
        (pl.current = u),
        (F = l),
        me !== null ? (n = 0) : ((we = null), (Ee = 0), (n = ye));
    }
    if (n !== 0) {
      if (
        (n === 2 && ((l = $l(e)), l !== 0 && ((r = l), (n = fi(e, l)))),
        n === 1)
      )
        throw ((t = mr), ut(e, 0), Wn(e, r), Fe(e, de()), t);
      if (n === 6) Wn(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !vf(l) &&
            ((n = Sl(e, r)),
            n === 2 && ((u = $l(e)), u !== 0 && ((r = u), (n = fi(e, u)))),
            n === 1))
        )
          throw ((t = mr), ut(e, 0), Wn(e, r), Fe(e, de()), t);
        switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            it(e, Ie, Pn);
            break;
          case 3:
            if (
              (Wn(e, r),
              (r & 130023424) === r && ((n = si + 500 - de()), 10 < n))
            ) {
              if (zr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Le(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = yu(it.bind(null, e, Ie, Pn), n);
              break;
            }
            it(e, Ie, Pn);
            break;
          case 4:
            if ((Wn(e, r), (r & 4194240) === r)) break;
            for (n = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - tn(r);
              (u = 1 << i), (i = n[i]), i > l && (l = i), (r &= ~u);
            }
            if (
              ((r = l),
              (r = de() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * mf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = yu(it.bind(null, e, Ie, Pn), r);
              break;
            }
            it(e, Ie, Pn);
            break;
          case 5:
            it(e, Ie, Pn);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Fe(e, de()), e.callbackNode === t ? aa.bind(null, e) : null;
  }
  function fi(e, n) {
    var t = vr;
    return (
      e.current.memoizedState.isDehydrated && (ut(e, n).flags |= 256),
      (e = Sl(e, n)),
      e !== 2 && ((n = Ie), (Ie = t), n !== null && di(n)),
      e
    );
  }
  function di(e) {
    Ie === null ? (Ie = e) : Ie.push.apply(Ie, e);
  }
  function vf(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && ((t = t.stores), t !== null))
          for (var r = 0; r < t.length; r++) {
            var l = t[r],
              u = l.getSnapshot;
            l = l.value;
            try {
              if (!rn(u(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
        (t.return = n), (n = t);
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function Wn(e, n) {
    for (
      n &= ~oi,
        n &= ~ml,
        e.suspendedLanes |= n,
        e.pingedLanes &= ~n,
        e = e.expirationTimes;
      0 < n;

    ) {
      var t = 31 - tn(n),
        r = 1 << t;
      (e[t] = -1), (n &= ~r);
    }
  }
  function ca(e) {
    if (F & 6) throw Error(m(327));
    Ot();
    var n = zr(e, 0);
    if (!(n & 1)) return Fe(e, de()), null;
    var t = Sl(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = $l(e);
      r !== 0 && ((n = r), (t = fi(e, r)));
    }
    if (t === 1) throw ((t = mr), ut(e, 0), Wn(e, n), Fe(e, de()), t);
    if (t === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = n),
      it(e, Ie, Pn),
      Fe(e, de()),
      null
    );
  }
  function pi(e, n) {
    var t = F;
    F |= 1;
    try {
      return e(n);
    } finally {
      (F = t), F === 0 && ((Rt = de() + 500), Yr && Un());
    }
  }
  function lt(e) {
    Qn !== null && Qn.tag === 0 && !(F & 6) && Ot();
    var n = F;
    F |= 1;
    var t = Je.transition,
      r = $;
    try {
      if (((Je.transition = null), ($ = 1), e)) return e();
    } finally {
      ($ = r), (Je.transition = t), (F = n), !(F & 6) && Un();
    }
  }
  function mi() {
    ($e = Lt.current), b(Lt);
  }
  function ut(e, n) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var t = e.timeoutHandle;
    if ((t !== -1 && ((e.timeoutHandle = -1), $c(t)), me !== null))
      for (t = me.return; t !== null; ) {
        var r = t;
        switch ((xu(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Wr();
            break;
          case 3:
            Pt(), b(Me), b(_e), Iu();
            break;
          case 5:
            Du(r);
            break;
          case 4:
            Pt();
            break;
          case 13:
            b(ie);
            break;
          case 19:
            b(ie);
            break;
          case 10:
            Tu(r.type._context);
            break;
          case 22:
          case 23:
            mi();
        }
        t = t.return;
      }
    if (
      ((we = e),
      (me = e = Kn(e.current, null)),
      (Ee = $e = n),
      (ye = 0),
      (mr = null),
      (oi = ml = rt = 0),
      (Ie = vr = null),
      et !== null)
    ) {
      for (n = 0; n < et.length; n++)
        if (((t = et[n]), (r = t.interleaved), r !== null)) {
          t.interleaved = null;
          var l = r.next,
            u = t.pending;
          if (u !== null) {
            var i = u.next;
            (u.next = l), (r.next = i);
          }
          t.pending = r;
        }
      et = null;
    }
    return e;
  }
  function fa(e, n) {
    do {
      var t = me;
      try {
        if ((zu(), (rl.current = ol), ll)) {
          for (var r = oe.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          ll = !1;
        }
        if (
          ((tt = 0),
          (ge = he = oe = null),
          (sr = !1),
          (ar = 0),
          (ii.current = null),
          t === null || t.return === null)
        ) {
          (ye = 1), (mr = n), (me = null);
          break;
        }
        e: {
          var u = e,
            i = t.return,
            o = t,
            s = n;
          if (
            ((n = Ee),
            (o.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
          ) {
            var p = s,
              y = o,
              g = y.tag;
            if (!(y.mode & 1) && (g === 0 || g === 11 || g === 15)) {
              var v = y.alternate;
              v
                ? ((y.updateQueue = v.updateQueue),
                  (y.memoizedState = v.memoizedState),
                  (y.lanes = v.lanes))
                : ((y.updateQueue = null), (y.memoizedState = null));
            }
            var k = Is(i);
            if (k !== null) {
              (k.flags &= -257),
                Fs(k, i, o, u, n),
                k.mode & 1 && js(u, p, n),
                (n = k),
                (s = p);
              var _ = n.updateQueue;
              if (_ === null) {
                var C = new Set();
                C.add(s), (n.updateQueue = C);
              } else _.add(s);
              break e;
            } else {
              if (!(n & 1)) {
                js(u, p, n), vi();
                break e;
              }
              s = Error(m(426));
            }
          } else if (re && o.mode & 1) {
            var pe = Is(i);
            if (pe !== null) {
              !(pe.flags & 65536) && (pe.flags |= 256),
                Fs(pe, i, o, u, n),
                Nu(zt(s, o));
              break e;
            }
          }
          (u = s = zt(s, o)),
            ye !== 4 && (ye = 2),
            vr === null ? (vr = [u]) : vr.push(u),
            (u = i);
          do {
            switch (u.tag) {
              case 3:
                (u.flags |= 65536), (n &= -n), (u.lanes |= n);
                var f = Ms(u, s, n);
                is(u, f);
                break e;
              case 1:
                o = s;
                var a = u.type,
                  d = u.stateNode;
                if (
                  !(u.flags & 128) &&
                  (typeof a.getDerivedStateFromError == "function" ||
                    (d !== null &&
                      typeof d.componentDidCatch == "function" &&
                      (Hn === null || !Hn.has(d))))
                ) {
                  (u.flags |= 65536), (n &= -n), (u.lanes |= n);
                  var w = Ds(u, o, n);
                  is(u, w);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ma(t);
      } catch (N) {
        (n = N), me === t && t !== null && (me = t = t.return);
        continue;
      }
      break;
    } while (!0);
  }
  function da() {
    var e = pl.current;
    return (pl.current = ol), e === null ? ol : e;
  }
  function vi() {
    (ye === 0 || ye === 3 || ye === 2) && (ye = 4),
      we === null || (!(rt & 268435455) && !(ml & 268435455)) || Wn(we, Ee);
  }
  function Sl(e, n) {
    var t = F;
    F |= 2;
    var r = da();
    (we !== e || Ee !== n) && ((Pn = null), ut(e, n));
    do
      try {
        hf();
        break;
      } catch (l) {
        fa(e, l);
      }
    while (!0);
    if ((zu(), (F = t), (pl.current = r), me !== null)) throw Error(m(261));
    return (we = null), (Ee = 0), ye;
  }
  function hf() {
    for (; me !== null; ) pa(me);
  }
  function yf() {
    for (; me !== null && !Ba(); ) pa(me);
  }
  function pa(e) {
    var n = ya(e.alternate, e, $e);
    (e.memoizedProps = e.pendingProps),
      n === null ? ma(e) : (me = n),
      (ii.current = null);
  }
  function ma(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (((e = n.return), n.flags & 32768)) {
        if (((t = cf(t, n)), t !== null)) {
          (t.flags &= 32767), (me = t);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (ye = 6), (me = null);
          return;
        }
      } else if (((t = af(t, n, $e)), t !== null)) {
        me = t;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        me = n;
        return;
      }
      me = n = e;
    } while (n !== null);
    ye === 0 && (ye = 5);
  }
  function it(e, n, t) {
    var r = $,
      l = Je.transition;
    try {
      (Je.transition = null), ($ = 1), gf(e, n, t, r);
    } finally {
      (Je.transition = l), ($ = r);
    }
    return null;
  }
  function gf(e, n, t, r) {
    do Ot();
    while (Qn !== null);
    if (F & 6) throw Error(m(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
      throw Error(m(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var u = t.lanes | t.childLanes;
    if (
      (Ja(e, u),
      e === we && ((me = we = null), (Ee = 0)),
      (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
        hl ||
        ((hl = !0),
        ga(_r, function () {
          return Ot(), null;
        })),
      (u = (t.flags & 15990) !== 0),
      t.subtreeFlags & 15990 || u)
    ) {
      (u = Je.transition), (Je.transition = null);
      var i = $;
      $ = 1;
      var o = F;
      (F |= 4),
        (ii.current = null),
        df(e, t),
        la(t, e),
        Fc(vu),
        (Rr = !!mu),
        (vu = mu = null),
        (e.current = t),
        pf(t),
        Ha(),
        (F = o),
        ($ = i),
        (Je.transition = u);
    } else e.current = t;
    if (
      (hl && ((hl = !1), (Qn = e), (yl = l)),
      (u = e.pendingLanes),
      u === 0 && (Hn = null),
      Wa(t.stateNode),
      Fe(e, de()),
      n !== null)
    )
      for (r = e.onRecoverableError, t = 0; t < n.length; t++)
        (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (vl) throw ((vl = !1), (e = ai), (ai = null), e);
    return (
      yl & 1 && e.tag !== 0 && Ot(),
      (u = e.pendingLanes),
      u & 1 ? (e === ci ? hr++ : ((hr = 0), (ci = e))) : (hr = 0),
      Un(),
      null
    );
  }
  function Ot() {
    if (Qn !== null) {
      var e = no(yl),
        n = Je.transition,
        t = $;
      try {
        if (((Je.transition = null), ($ = 16 > e ? 16 : e), Qn === null))
          var r = !1;
        else {
          if (((e = Qn), (Qn = null), (yl = 0), F & 6)) throw Error(m(331));
          var l = F;
          for (F |= 4, E = e.current; E !== null; ) {
            var u = E,
              i = u.child;
            if (E.flags & 16) {
              var o = u.deletions;
              if (o !== null) {
                for (var s = 0; s < o.length; s++) {
                  var p = o[s];
                  for (E = p; E !== null; ) {
                    var y = E;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pr(8, y, u);
                    }
                    var g = y.child;
                    if (g !== null) (g.return = y), (E = g);
                    else
                      for (; E !== null; ) {
                        y = E;
                        var v = y.sibling,
                          k = y.return;
                        if ((bs(y), y === p)) {
                          E = null;
                          break;
                        }
                        if (v !== null) {
                          (v.return = k), (E = v);
                          break;
                        }
                        E = k;
                      }
                  }
                }
                var _ = u.alternate;
                if (_ !== null) {
                  var C = _.child;
                  if (C !== null) {
                    _.child = null;
                    do {
                      var pe = C.sibling;
                      (C.sibling = null), (C = pe);
                    } while (C !== null);
                  }
                }
                E = u;
              }
            }
            if (u.subtreeFlags & 2064 && i !== null) (i.return = u), (E = i);
            else
              e: for (; E !== null; ) {
                if (((u = E), u.flags & 2048))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pr(9, u, u.return);
                  }
                var f = u.sibling;
                if (f !== null) {
                  (f.return = u.return), (E = f);
                  break e;
                }
                E = u.return;
              }
          }
          var a = e.current;
          for (E = a; E !== null; ) {
            i = E;
            var d = i.child;
            if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (E = d);
            else
              e: for (i = a; E !== null; ) {
                if (((o = E), o.flags & 2048))
                  try {
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        dl(9, o);
                    }
                  } catch (N) {
                    fe(o, o.return, N);
                  }
                if (o === i) {
                  E = null;
                  break e;
                }
                var w = o.sibling;
                if (w !== null) {
                  (w.return = o.return), (E = w);
                  break e;
                }
                E = o.return;
              }
          }
          if (
            ((F = l), Un(), pn && typeof pn.onPostCommitFiberRoot == "function")
          )
            try {
              pn.onPostCommitFiberRoot(Cr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ($ = t), (Je.transition = n);
      }
    }
    return !1;
  }
  function va(e, n, t) {
    (n = zt(t, n)),
      (n = Ms(e, n, 1)),
      (e = An(e, n, 1)),
      (n = Le()),
      e !== null && (At(e, 1, n), Fe(e, n));
  }
  function fe(e, n, t) {
    if (e.tag === 3) va(e, e, t);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          va(n, e, t);
          break;
        } else if (n.tag === 1) {
          var r = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Hn === null || !Hn.has(r)))
          ) {
            (e = zt(t, e)),
              (e = Ds(n, e, 1)),
              (n = An(n, e, 1)),
              (e = Le()),
              n !== null && (At(n, 1, e), Fe(n, e));
            break;
          }
        }
        n = n.return;
      }
  }
  function wf(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n),
      (n = Le()),
      (e.pingedLanes |= e.suspendedLanes & t),
      we === e &&
        (Ee & t) === t &&
        (ye === 4 || (ye === 3 && (Ee & 130023424) === Ee && 500 > de() - si)
          ? ut(e, 0)
          : (oi |= t)),
      Fe(e, n);
  }
  function ha(e, n) {
    n === 0 &&
      (e.mode & 1
        ? ((n = Pr), (Pr <<= 1), !(Pr & 130023424) && (Pr = 4194304))
        : (n = 1));
    var t = Le();
    (e = _n(e, n)), e !== null && (At(e, n, t), Fe(e, t));
  }
  function Sf(e) {
    var n = e.memoizedState,
      t = 0;
    n !== null && (t = n.retryLane), ha(e, t);
  }
  function kf(e, n) {
    var t = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (t = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    r !== null && r.delete(n), ha(e, t);
  }
  var ya;
  ya = function (e, n, t) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps || Me.current) je = !0;
      else {
        if (!(e.lanes & t) && !(n.flags & 128)) return (je = !1), sf(e, n, t);
        je = !!(e.flags & 131072);
      }
    else (je = !1), re && n.flags & 1048576 && Zo(n, Gr, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 2:
        var r = n.type;
        cl(e, n), (e = n.pendingProps);
        var l = St(n, _e.current);
        Nt(n, t), (l = Vu(null, n, r, e, l, t));
        var u = Au();
        return (
          (n.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((n.tag = 1),
              (n.memoizedState = null),
              (n.updateQueue = null),
              De(r) ? ((u = !0), Kr(n)) : (u = !1),
              (n.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Ou(n),
              (l.updater = sl),
              (n.stateNode = l),
              (l._reactInternals = n),
              Ku(n, r, e, t),
              (n = Zu(null, n, r, !0, u, t)))
            : ((n.tag = 0), re && u && Eu(n), Te(null, n, l, t), (n = n.child)),
          n
        );
      case 16:
        r = n.elementType;
        e: {
          switch (
            (cl(e, n),
            (e = n.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (n.type = r),
            (l = n.tag = xf(r)),
            (e = un(r, e)),
            l)
          ) {
            case 0:
              n = Gu(null, n, r, e, t);
              break e;
            case 1:
              n = Qs(null, n, r, e, t);
              break e;
            case 11:
              n = Us(null, n, r, e, t);
              break e;
            case 14:
              n = Vs(null, n, r, un(r.type, e), t);
              break e;
          }
          throw Error(m(306, r, ""));
        }
        return n;
      case 0:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : un(r, l)),
          Gu(e, n, r, l, t)
        );
      case 1:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : un(r, l)),
          Qs(e, n, r, l, t)
        );
      case 3:
        e: {
          if (($s(n), e === null)) throw Error(m(387));
          (r = n.pendingProps),
            (u = n.memoizedState),
            (l = u.element),
            us(e, n),
            nl(n, r, null, t);
          var i = n.memoizedState;
          if (((r = i.element), u.isDehydrated))
            if (
              ((u = {
                element: r,
                isDehydrated: !1,
                cache: i.cache,
                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                transitions: i.transitions,
              }),
              (n.updateQueue.baseState = u),
              (n.memoizedState = u),
              n.flags & 256)
            ) {
              (l = zt(Error(m(423)), n)), (n = Ws(e, n, r, t, l));
              break e;
            } else if (r !== l) {
              (l = zt(Error(m(424)), n)), (n = Ws(e, n, r, t, l));
              break e;
            } else
              for (
                Qe = jn(n.stateNode.containerInfo.firstChild),
                  He = n,
                  re = !0,
                  ln = null,
                  t = rs(n, null, r, t),
                  n.child = t;
                t;

              )
                (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
          else {
            if ((xt(), r === l)) {
              n = Nn(e, n, t);
              break e;
            }
            Te(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return (
          ss(n),
          e === null && Cu(n),
          (r = n.type),
          (l = n.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (i = l.children),
          hu(r, l) ? (i = null) : u !== null && hu(r, u) && (n.flags |= 32),
          Hs(e, n),
          Te(e, n, i, t),
          n.child
        );
      case 6:
        return e === null && Cu(n), null;
      case 13:
        return Ks(e, n, t);
      case 4:
        return (
          Mu(n, n.stateNode.containerInfo),
          (r = n.pendingProps),
          e === null ? (n.child = _t(n, null, r, t)) : Te(e, n, r, t),
          n.child
        );
      case 11:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : un(r, l)),
          Us(e, n, r, l, t)
        );
      case 7:
        return Te(e, n, n.pendingProps, t), n.child;
      case 8:
        return Te(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return Te(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (
            ((r = n.type._context),
            (l = n.pendingProps),
            (u = n.memoizedProps),
            (i = l.value),
            J(qr, r._currentValue),
            (r._currentValue = i),
            u !== null)
          )
            if (rn(u.value, i)) {
              if (u.children === l.children && !Me.current) {
                n = Nn(e, n, t);
                break e;
              }
            } else
              for (u = n.child, u !== null && (u.return = n); u !== null; ) {
                var o = u.dependencies;
                if (o !== null) {
                  i = u.child;
                  for (var s = o.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (u.tag === 1) {
                        (s = Cn(-1, t & -t)), (s.tag = 2);
                        var p = u.updateQueue;
                        if (p !== null) {
                          p = p.shared;
                          var y = p.pending;
                          y === null
                            ? (s.next = s)
                            : ((s.next = y.next), (y.next = s)),
                            (p.pending = s);
                        }
                      }
                      (u.lanes |= t),
                        (s = u.alternate),
                        s !== null && (s.lanes |= t),
                        Lu(u.return, t, n),
                        (o.lanes |= t);
                      break;
                    }
                    s = s.next;
                  }
                } else if (u.tag === 10) i = u.type === n.type ? null : u.child;
                else if (u.tag === 18) {
                  if (((i = u.return), i === null)) throw Error(m(341));
                  (i.lanes |= t),
                    (o = i.alternate),
                    o !== null && (o.lanes |= t),
                    Lu(i, t, n),
                    (i = u.sibling);
                } else i = u.child;
                if (i !== null) i.return = u;
                else
                  for (i = u; i !== null; ) {
                    if (i === n) {
                      i = null;
                      break;
                    }
                    if (((u = i.sibling), u !== null)) {
                      (u.return = i.return), (i = u);
                      break;
                    }
                    i = i.return;
                  }
                u = i;
              }
          Te(e, n, l.children, t), (n = n.child);
        }
        return n;
      case 9:
        return (
          (l = n.type),
          (r = n.pendingProps.children),
          Nt(n, t),
          (l = Ge(l)),
          (r = r(l)),
          (n.flags |= 1),
          Te(e, n, r, t),
          n.child
        );
      case 14:
        return (
          (r = n.type),
          (l = un(r, n.pendingProps)),
          (l = un(r.type, l)),
          Vs(e, n, r, l, t)
        );
      case 15:
        return As(e, n, n.type, n.pendingProps, t);
      case 17:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : un(r, l)),
          cl(e, n),
          (n.tag = 1),
          De(r) ? ((e = !0), Kr(n)) : (e = !1),
          Nt(n, t),
          Rs(n, r, l),
          Ku(n, r, l, t),
          Zu(null, n, r, !0, e, t)
        );
      case 19:
        return Xs(e, n, t);
      case 22:
        return Bs(e, n, t);
    }
    throw Error(m(156, n.tag));
  };
  function ga(e, n) {
    return Zi(e, n);
  }
  function Ef(e, n, t, r) {
    (this.tag = e),
      (this.key = t),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function qe(e, n, t, r) {
    return new Ef(e, n, t, r);
  }
  function hi(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function xf(e) {
    if (typeof e == "function") return hi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === fn)) return 11;
      if (e === dn) return 14;
    }
    return 2;
  }
  function Kn(e, n) {
    var t = e.alternate;
    return (
      t === null
        ? ((t = qe(e.tag, n, e.key, e.mode)),
          (t.elementType = e.elementType),
          (t.type = e.type),
          (t.stateNode = e.stateNode),
          (t.alternate = e),
          (e.alternate = t))
        : ((t.pendingProps = n),
          (t.type = e.type),
          (t.flags = 0),
          (t.subtreeFlags = 0),
          (t.deletions = null)),
      (t.flags = e.flags & 14680064),
      (t.childLanes = e.childLanes),
      (t.lanes = e.lanes),
      (t.child = e.child),
      (t.memoizedProps = e.memoizedProps),
      (t.memoizedState = e.memoizedState),
      (t.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (t.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (t.sibling = e.sibling),
      (t.index = e.index),
      (t.ref = e.ref),
      t
    );
  }
  function kl(e, n, t, r, l, u) {
    var i = 2;
    if (((r = e), typeof e == "function")) hi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
      e: switch (e) {
        case Re:
          return ot(t.children, l, u, n);
        case Ke:
          (i = 8), (l |= 8);
          break;
        case zn:
          return (
            (e = qe(12, t, n, l | 2)), (e.elementType = zn), (e.lanes = u), e
          );
        case Ve:
          return (e = qe(13, t, n, l)), (e.elementType = Ve), (e.lanes = u), e;
        case nn:
          return (e = qe(19, t, n, l)), (e.elementType = nn), (e.lanes = u), e;
        case ce:
          return El(t, l, u, n);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case wn:
                i = 10;
                break e;
              case Xn:
                i = 9;
                break e;
              case fn:
                i = 11;
                break e;
              case dn:
                i = 14;
                break e;
              case Oe:
                (i = 16), (r = null);
                break e;
            }
          throw Error(m(130, e == null ? e : typeof e, ""));
      }
    return (
      (n = qe(i, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = u), n
    );
  }
  function ot(e, n, t, r) {
    return (e = qe(7, e, r, n)), (e.lanes = t), e;
  }
  function El(e, n, t, r) {
    return (
      (e = qe(22, e, r, n)),
      (e.elementType = ce),
      (e.lanes = t),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function yi(e, n, t) {
    return (e = qe(6, e, null, n)), (e.lanes = t), e;
  }
  function gi(e, n, t) {
    return (
      (n = qe(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = t),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  function _f(e, n, t, r, l) {
    (this.tag = n),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Wl(0)),
      (this.expirationTimes = Wl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Wl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function wi(e, n, t, r, l, u, i, o, s) {
    return (
      (e = new _f(e, n, t, o, s)),
      n === 1 ? ((n = 1), u === !0 && (n |= 8)) : (n = 0),
      (u = qe(3, null, null, n)),
      (e.current = u),
      (u.stateNode = e),
      (u.memoizedState = {
        element: r,
        isDehydrated: t,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ou(u),
      e
    );
  }
  function Cf(e, n, t) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ze,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: n,
      implementation: t,
    };
  }
  function wa(e) {
    if (!e) return Fn;
    e = e._reactInternals;
    e: {
      if (Gn(e) !== e || e.tag !== 1) throw Error(m(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (De(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (De(t)) return Yo(e, t, n);
    }
    return n;
  }
  function Sa(e, n, t, r, l, u, i, o, s) {
    return (
      (e = wi(t, r, !0, e, l, u, i, o, s)),
      (e.context = wa(null)),
      (t = e.current),
      (r = Le()),
      (l = $n(t)),
      (u = Cn(r, l)),
      (u.callback = n ?? null),
      An(t, u, l),
      (e.current.lanes = l),
      At(e, l, r),
      Fe(e, r),
      e
    );
  }
  function xl(e, n, t, r) {
    var l = n.current,
      u = Le(),
      i = $n(l);
    return (
      (t = wa(t)),
      n.context === null ? (n.context = t) : (n.pendingContext = t),
      (n = Cn(u, i)),
      (n.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (n.callback = r),
      (e = An(l, n, i)),
      e !== null && (an(e, l, i, u), el(e, l, i)),
      i
    );
  }
  function _l(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function ka(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function Si(e, n) {
    ka(e, n), (e = e.alternate) && ka(e, n);
  }
  function Nf() {
    return null;
  }
  var Ea =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ki(e) {
    this._internalRoot = e;
  }
  (Cl.prototype.render = ki.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(m(409));
      xl(e, n, null, null);
    }),
    (Cl.prototype.unmount = ki.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          lt(function () {
            xl(null, e, null, null);
          }),
            (n[Sn] = null);
        }
      });
  function Cl(e) {
    this._internalRoot = e;
  }
  Cl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = lo();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < On.length && n !== 0 && n < On[t].priority; t++);
      On.splice(t, 0, e), t === 0 && oo(e);
    }
  };
  function Ei(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Nl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function xa() {}
  function Pf(e, n, t, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function () {
          var p = _l(i);
          u.call(p);
        };
      }
      var i = Sa(n, r, e, 0, null, !1, !1, "", xa);
      return (
        (e._reactRootContainer = i),
        (e[Sn] = i.current),
        er(e.nodeType === 8 ? e.parentNode : e),
        lt(),
        i
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var p = _l(s);
        o.call(p);
      };
    }
    var s = wi(e, 0, !1, null, null, !1, !1, "", xa);
    return (
      (e._reactRootContainer = s),
      (e[Sn] = s.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      lt(function () {
        xl(n, s, t, r);
      }),
      s
    );
  }
  function Pl(e, n, t, r, l) {
    var u = t._reactRootContainer;
    if (u) {
      var i = u;
      if (typeof l == "function") {
        var o = l;
        l = function () {
          var s = _l(i);
          o.call(s);
        };
      }
      xl(n, i, e, l);
    } else i = Pf(t, n, e, l, r);
    return _l(i);
  }
  (to = function (e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = Vt(n.pendingLanes);
          t !== 0 &&
            (Kl(n, t | 1), Fe(n, de()), !(F & 6) && ((Rt = de() + 500), Un()));
        }
        break;
      case 13:
        lt(function () {
          var r = _n(e, 1);
          if (r !== null) {
            var l = Le();
            an(r, e, 1, l);
          }
        }),
          Si(e, 1);
    }
  }),
    (Yl = function (e) {
      if (e.tag === 13) {
        var n = _n(e, 134217728);
        if (n !== null) {
          var t = Le();
          an(n, e, 134217728, t);
        }
        Si(e, 134217728);
      }
    }),
    (ro = function (e) {
      if (e.tag === 13) {
        var n = $n(e),
          t = _n(e, n);
        if (t !== null) {
          var r = Le();
          an(t, e, n, r);
        }
        Si(e, n);
      }
    }),
    (lo = function () {
      return $;
    }),
    (uo = function (e, n) {
      var t = $;
      try {
        return ($ = e), n();
      } finally {
        $ = t;
      }
    }),
    (Vl = function (e, n, t) {
      switch (n) {
        case "input":
          if ((Rl(e, t), (n = t.name), t.type === "radio" && n != null)) {
            for (t = e; t.parentNode; ) t = t.parentNode;
            for (
              t = t.querySelectorAll(
                "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
              ),
                n = 0;
              n < t.length;
              n++
            ) {
              var r = t[n];
              if (r !== e && r.form === e.form) {
                var l = $r(r);
                if (!l) throw Error(m(90));
                Ti(r), Rl(r, l);
              }
            }
          }
          break;
        case "textarea":
          Di(e, t);
          break;
        case "select":
          (n = t.value), n != null && st(e, !!t.multiple, n, !1);
      }
    }),
    (Qi = pi),
    ($i = lt);
  var zf = { usingClientEntryPoint: !1, Events: [rr, gt, $r, Bi, Hi, pi] },
    yr = {
      findFiberByHostInstance: Zn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Tf = {
      bundleType: yr.bundleType,
      version: yr.version,
      rendererPackageName: yr.rendererPackageName,
      rendererConfig: yr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: xe.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Xi(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: yr.findFiberByHostInstance || Nf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zl.isDisabled && zl.supportsFiber)
      try {
        (Cr = zl.inject(Tf)), (pn = zl);
      } catch {}
  }
  return (
    (Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zf),
    (Ue.createPortal = function (e, n) {
      var t =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ei(n)) throw Error(m(200));
      return Cf(e, n, null, t);
    }),
    (Ue.createRoot = function (e, n) {
      if (!Ei(e)) throw Error(m(299));
      var t = !1,
        r = "",
        l = Ea;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (t = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
        (n = wi(e, 1, !1, null, null, t, !1, r, l)),
        (e[Sn] = n.current),
        er(e.nodeType === 8 ? e.parentNode : e),
        new ki(n)
      );
    }),
    (Ue.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var n = e._reactInternals;
      if (n === void 0)
        throw typeof e.render == "function"
          ? Error(m(188))
          : ((e = Object.keys(e).join(",")), Error(m(268, e)));
      return (e = Xi(n)), (e = e === null ? null : e.stateNode), e;
    }),
    (Ue.flushSync = function (e) {
      return lt(e);
    }),
    (Ue.hydrate = function (e, n, t) {
      if (!Nl(n)) throw Error(m(200));
      return Pl(null, e, n, !0, t);
    }),
    (Ue.hydrateRoot = function (e, n, t) {
      if (!Ei(e)) throw Error(m(405));
      var r = (t != null && t.hydratedSources) || null,
        l = !1,
        u = "",
        i = Ea;
      if (
        (t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (n = Sa(n, null, e, 1, t ?? null, l, !1, u, i)),
        (e[Sn] = n.current),
        er(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (t = r[e]),
            (l = t._getVersion),
            (l = l(t._source)),
            n.mutableSourceEagerHydrationData == null
              ? (n.mutableSourceEagerHydrationData = [t, l])
              : n.mutableSourceEagerHydrationData.push(t, l);
      return new Cl(n);
    }),
    (Ue.render = function (e, n, t) {
      if (!Nl(n)) throw Error(m(200));
      return Pl(null, e, n, !1, t);
    }),
    (Ue.unmountComponentAtNode = function (e) {
      if (!Nl(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (lt(function () {
            Pl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Sn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Ue.unstable_batchedUpdates = pi),
    (Ue.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
      if (!Nl(t)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return Pl(e, n, t, !1, r);
    }),
    (Ue.version = "18.3.1-next-f1338f8080-20240426"),
    Ue
  );
}
var Ra;
function Ff() {
  if (Ra) return Ci.exports;
  Ra = 1;
  function T() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T);
      } catch (H) {
        console.error(H);
      }
  }
  return T(), (Ci.exports = If()), Ci.exports;
}
var Oa;
function Uf() {
  if (Oa) return Tl;
  Oa = 1;
  var T = Ff();
  return (Tl.createRoot = T.createRoot), (Tl.hydrateRoot = T.hydrateRoot), Tl;
}
var Vf = Uf();
const Af = "./assets/forest-DZ3yAPLR.webm",
  Bf = "./assets/rain-DzaBxVLM.webm",
  Hf = "./assets/background-Bqye0HVA.mp4",
  Qf = "./assets/logo-B2uLET0L.gif";
function Ma(T) {
  return T < 10 ? "0" + T.toString() : T.toString();
}
function $f({ timerDuration: T, backToMenu: H, videoRef: m }) {
  const [ve, j] = We.useState(!1),
    [I, le] = We.useState(T * 60),
    [ue, U] = We.useState("timer-div"),
    ee = We.useRef(),
    G = () => {
      clearInterval(ee.current), H();
    },
    W = () => {
      I > 0 ? le((ae) => ae - 1) : G();
    },
    K = () => {
      var ae;
      clearInterval(ee.current), j(!0), (ae = m.current) == null || ae.pause();
    },
    se = () => {
      var ae;
      clearInterval(ee.current),
        j(!1),
        (ee.current = setTimeout(W, 1e3)),
        (ae = m.current) == null || ae.play();
    };
  return (
    We.useEffect(() => {
      se(),
        setTimeout(() => {
          U(ue + " disappearing-div");
        }, 3e3);
    }, []),
    We.useEffect(() => {
      clearInterval(ee.current), (ee.current = setTimeout(W, 1e3));
    }, [I]),
    Y.jsxs("div", {
      className: ue,
      style: { marginTop: "2rem" },
      children: [
        Y.jsxs("h2", { children: [Ma(Math.floor(I / 60)), ":", Ma(I % 60)] }),
        Y.jsxs("div", {
          style: { marginTop: "-20px" },
          children: [
            ve
              ? Y.jsx("button", { onClick: se, children: "Resume" })
              : Y.jsx("button", { onClick: K, children: "Pause" }),
            Y.jsx("button", {
              onClick: G,
              style: { marginLeft: "20px" },
              children: "Stop",
            }),
          ],
        }),
      ],
    })
  );
}
function Wf() {
  const [T, H] = We.useState(""),
    [m, ve] = We.useState("background"),
    [j, I] = We.useState(!1),
    [le, ue] = We.useState(10),
    [U, ee] = We.useState(!1),
    G = We.useRef(null),
    W = () => {
      var se;
      I(!1),
        ve("background background-fade-in"),
        (se = G.current) == null || se.pause(),
        G.current && (G.current.pause(), (G.current.currentTime = 0));
    },
    K = () => {
      I(!0), T !== "" && ve("background background-fade-out");
    };
  return Y.jsxs(Y.Fragment, {
    children: [
      Y.jsx("video", {
        className: m,
        src: Hf,
        autoPlay: !0,
        muted: !0,
        loop: !0,
      }),
      Y.jsx("video", {
        className: "mindfulness-video",
        src: T,
        ref: G,
        loop: !0,
      }),
      j
        ? Y.jsx($f, { backToMenu: W, timerDuration: le, videoRef: G })
        : Y.jsxs(Y.Fragment, {
            children: [
              Y.jsx("img", {
                src: Qf,
                width: "70%",
                style: { marginTop: "50px" },
              }),
              Y.jsxs("div", {
                className: "main-page",
                children: [
                  Y.jsxs("div", {
                    style: { fontSize: "1.5em" },
                    children: [
                      Y.jsxs("div", {
                        className: "flex-row",
                        children: [
                          "Timer (minutes):",
                          Y.jsx("input", {
                            className: "input-select",
                            type: "number",
                            min: "1",
                            max: "120",
                            value: le,
                            onChange: (se) => {
                              const ae = parseInt(se.target.value, 10) || 0;
                              ue(ae);
                            },
                          }),
                        ],
                      }),
                      Y.jsxs("div", {
                        className: "flex-row",
                        style: { marginTop: "10px" },
                        children: [
                          "Theme:",
                          Y.jsxs("select", {
                            onChange: (se) => H(se.target.value),
                            className: "input-select",
                            children: [
                              Y.jsx("option", { value: "", children: "None" }),
                              Y.jsx("option", {
                                value: Af,
                                children: "Forest",
                              }),
                              Y.jsx("option", { value: Bf, children: "Rain" }),
                            ],
                          }),
                        ],
                      }),
                      Y.jsxs("div", {
                        className: "flex-row",
                        style: { marginTop: "10px", marginBottom: "10px" },
                        children: [
                          "Show Mindful Quotes",
                          Y.jsx("input", {
                            className: "checkbox",
                            type: "checkbox",
                            checked: U,
                            onChange: () => ee(!U),
                          }),
                        ],
                      }),
                    ],
                  }),
                  Y.jsx("button", { onClick: K, children: "Start" }),
                ],
              }),
            ],
          }),
    ],
  });
}
Vf.createRoot(document.getElementById("root")).render(
  Y.jsx(We.StrictMode, { children: Y.jsx(Wf, {}) })
);  
