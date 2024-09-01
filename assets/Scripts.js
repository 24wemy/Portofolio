(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i=>{
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity),
        i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
}
)();
function ym(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Af = {
    exports: {}
}
  , So = {}
  , _f = {
    exports: {}
}
  , N = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xr = Symbol.for("react.element")
  , vm = Symbol.for("react.portal")
  , wm = Symbol.for("react.fragment")
  , xm = Symbol.for("react.strict_mode")
  , Sm = Symbol.for("react.profiler")
  , Pm = Symbol.for("react.provider")
  , km = Symbol.for("react.context")
  , Tm = Symbol.for("react.forward_ref")
  , Cm = Symbol.for("react.suspense")
  , Em = Symbol.for("react.memo")
  , Rm = Symbol.for("react.lazy")
  , fu = Symbol.iterator;
function Mm(e) {
    return e === null || typeof e != "object" ? null : (e = fu && e[fu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var jf = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Nf = Object.assign
  , Ff = {};
function Xn(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Ff,
    this.updater = n || jf
}
Xn.prototype.isReactComponent = {};
Xn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Xn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Of() {}
Of.prototype = Xn.prototype;
function Bl(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Ff,
    this.updater = n || jf
}
var Ul = Bl.prototype = new Of;
Ul.constructor = Bl;
Nf(Ul, Xn.prototype);
Ul.isPureReactComponent = !0;
var du = Array.isArray
  , zf = Object.prototype.hasOwnProperty
  , $l = {
    current: null
}
  , If = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Bf(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            zf.call(t, r) && !If.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        i.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        i.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            i[r] === void 0 && (i[r] = l[r]);
    return {
        $$typeof: Xr,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: $l.current
    }
}
function Lm(e, t) {
    return {
        $$typeof: Xr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Wl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Xr
}
function Vm(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var hu = /\/+/g;
function Ko(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Vm("" + e.key) : t.toString(36)
}
function Ei(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Xr:
            case vm:
                s = !0
            }
        }
    if (s)
        return s = e,
        i = i(s),
        e = r === "" ? "." + Ko(s, 0) : r,
        du(i) ? (n = "",
        e != null && (n = e.replace(hu, "$&/") + "/"),
        Ei(i, t, n, "", function(u) {
            return u
        })) : i != null && (Wl(i) && (i = Lm(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(hu, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    du(e))
        for (var l = 0; l < e.length; l++) {
            o = e[l];
            var a = r + Ko(o, l);
            s += Ei(o, t, n, a, i)
        }
    else if (a = Mm(e),
    typeof a == "function")
        for (e = a.call(e),
        l = 0; !(o = e.next()).done; )
            o = o.value,
            a = r + Ko(o, l++),
            s += Ei(o, t, n, a, i);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function si(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return Ei(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }),
    r
}
function Dm(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var we = {
    current: null
}
  , Ri = {
    transition: null
}
  , Am = {
    ReactCurrentDispatcher: we,
    ReactCurrentBatchConfig: Ri,
    ReactCurrentOwner: $l
};
function Uf() {
    throw Error("act(...) is not supported in production builds of React.")
}
N.Children = {
    map: si,
    forEach: function(e, t, n) {
        si(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return si(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return si(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Wl(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
N.Component = Xn;
N.Fragment = wm;
N.Profiler = Sm;
N.PureComponent = Bl;
N.StrictMode = xm;
N.Suspense = Cm;
N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Am;
N.act = Uf;
N.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Nf({}, e.props)
      , i = e.key
      , o = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        s = $l.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (a in t)
            zf.call(t, a) && !If.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: Xr,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
}
;
N.createContext = function(e) {
    return e = {
        $$typeof: km,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Pm,
        _context: e
    },
    e.Consumer = e
}
;
N.createElement = Bf;
N.createFactory = function(e) {
    var t = Bf.bind(null, e);
    return t.type = e,
    t
}
;
N.createRef = function() {
    return {
        current: null
    }
}
;
N.forwardRef = function(e) {
    return {
        $$typeof: Tm,
        render: e
    }
}
;
N.isValidElement = Wl;
N.lazy = function(e) {
    return {
        $$typeof: Rm,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Dm
    }
}
;
N.memo = function(e, t) {
    return {
        $$typeof: Em,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
N.startTransition = function(e) {
    var t = Ri.transition;
    Ri.transition = {};
    try {
        e()
    } finally {
        Ri.transition = t
    }
}
;
N.unstable_act = Uf;
N.useCallback = function(e, t) {
    return we.current.useCallback(e, t)
}
;
N.useContext = function(e) {
    return we.current.useContext(e)
}
;
N.useDebugValue = function() {}
;
N.useDeferredValue = function(e) {
    return we.current.useDeferredValue(e)
}
;
N.useEffect = function(e, t) {
    return we.current.useEffect(e, t)
}
;
N.useId = function() {
    return we.current.useId()
}
;
N.useImperativeHandle = function(e, t, n) {
    return we.current.useImperativeHandle(e, t, n)
}
;
N.useInsertionEffect = function(e, t) {
    return we.current.useInsertionEffect(e, t)
}
;
N.useLayoutEffect = function(e, t) {
    return we.current.useLayoutEffect(e, t)
}
;
N.useMemo = function(e, t) {
    return we.current.useMemo(e, t)
}
;
N.useReducer = function(e, t, n) {
    return we.current.useReducer(e, t, n)
}
;
N.useRef = function(e) {
    return we.current.useRef(e)
}
;
N.useState = function(e) {
    return we.current.useState(e)
}
;
N.useSyncExternalStore = function(e, t, n) {
    return we.current.useSyncExternalStore(e, t, n)
}
;
N.useTransition = function() {
    return we.current.useTransition()
}
;
N.version = "18.3.1";
_f.exports = N;
var E = _f.exports;
const sn = ym(E);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _m = E
  , jm = Symbol.for("react.element")
  , Nm = Symbol.for("react.fragment")
  , Fm = Object.prototype.hasOwnProperty
  , Om = _m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , zm = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function $f(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        Fm.call(t, r) && !zm.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: jm,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: Om.current
    }
}
So.Fragment = Nm;
So.jsx = $f;
So.jsxs = $f;
Af.exports = So;
var k = Af.exports
  , Im = "@vercel/analytics"
  , Bm = "1.2.2"
  , Um = ()=>{
    window.va || (window.va = function(...t) {
        (window.vaq = window.vaq || []).push(t)
    }
    )
}
;
function Wf() {
    return typeof window < "u"
}
function Hf() {
    try {
        const e = "production"
    } catch {}
    return "production"
}
function $m(e="auto") {
    if (e === "auto") {
        window.vam = Hf();
        return
    }
    window.vam = e
}
function Wm() {
    return (Wf() ? window.vam : Hf()) || "production"
}
function Go() {
    return Wm() === "development"
}
var Hm = "https://va.vercel-scripts.com/v1/script.debug.js"
  , Km = "/_vercel/insights/script.js";
function Gm(e={
    debug: !0
}) {
    var t;
    if (!Wf())
        return;
    $m(e.mode),
    Um(),
    e.beforeSend && ((t = window.va) == null || t.call(window, "beforeSend", e.beforeSend));
    const n = e.scriptSrc || (Go() ? Hm : Km);
    if (document.head.querySelector(`script[src*="${n}"]`))
        return;
    const r = document.createElement("script");
    r.src = n,
    r.defer = !0,
    r.dataset.sdkn = Im + (e.framework ? `/${e.framework}` : ""),
    r.dataset.sdkv = Bm,
    e.disableAutoTrack && (r.dataset.disableAutoTrack = "1"),
    e.endpoint && (r.dataset.endpoint = e.endpoint),
    e.dsn && (r.dataset.dsn = e.dsn),
    r.onerror = ()=>{
        const i = Go() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
        console.log(`[Vercel Web Analytics] Failed to load script from ${n}. ${i}`)
    }
    ,
    Go() && e.debug === !1 && (r.dataset.debug = "false"),
    document.head.appendChild(r)
}
function Qm({route: e, path: t}) {
    var n;
    (n = window.va) == null || n.call(window, "pageview", {
        route: e,
        path: t
    })
}
function Ym(e) {
    return E.useEffect(()=>{
        Gm({
            framework: e.framework || "react",
            ...e.route !== void 0 && {
                disableAutoTrack: !0
            },
            ...e
        })
    }
    , []),
    E.useEffect(()=>{
        e.route && e.path && Qm({
            route: e.route,
            path: e.path
        })
    }
    , [e.route, e.path]),
    null
}
var As = {}
  , Kf = {
    exports: {}
}
  , Ae = {}
  , Gf = {
    exports: {}
}
  , Qf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(M, A) {
        var j = M.length;
        M.push(A);
        e: for (; 0 < j; ) {
            var X = j - 1 >>> 1
              , ne = M[X];
            if (0 < i(ne, A))
                M[X] = A,
                M[j] = ne,
                j = X;
            else
                break e
        }
    }
    function n(M) {
        return M.length === 0 ? null : M[0]
    }
    function r(M) {
        if (M.length === 0)
            return null;
        var A = M[0]
          , j = M.pop();
        if (j !== A) {
            M[0] = j;
            e: for (var X = 0, ne = M.length, ii = ne >>> 1; X < ii; ) {
                var Gt = 2 * (X + 1) - 1
                  , Ho = M[Gt]
                  , Qt = Gt + 1
                  , oi = M[Qt];
                if (0 > i(Ho, j))
                    Qt < ne && 0 > i(oi, Ho) ? (M[X] = oi,
                    M[Qt] = j,
                    X = Qt) : (M[X] = Ho,
                    M[Gt] = j,
                    X = Gt);
                else if (Qt < ne && 0 > i(oi, j))
                    M[X] = oi,
                    M[Qt] = j,
                    X = Qt;
                else
                    break e
            }
        }
        return A
    }
    function i(M, A) {
        var j = M.sortIndex - A.sortIndex;
        return j !== 0 ? j : M.id - A.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var s = Date
          , l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = []
      , u = []
      , c = 1
      , f = null
      , d = 3
      , g = !1
      , y = !1
      , v = !1
      , T = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function p(M) {
        for (var A = n(u); A !== null; ) {
            if (A.callback === null)
                r(u);
            else if (A.startTime <= M)
                r(u),
                A.sortIndex = A.expirationTime,
                t(a, A);
            else
                break;
            A = n(u)
        }
    }
    function w(M) {
        if (v = !1,
        p(M),
        !y)
            if (n(a) !== null)
                y = !0,
                Ee(x);
            else {
                var A = n(u);
                A !== null && Kt(w, A.startTime - M)
            }
    }
    function x(M, A) {
        y = !1,
        v && (v = !1,
        m(P),
        P = -1),
        g = !0;
        var j = d;
        try {
            for (p(A),
            f = n(a); f !== null && (!(f.expirationTime > A) || M && !te()); ) {
                var X = f.callback;
                if (typeof X == "function") {
                    f.callback = null,
                    d = f.priorityLevel;
                    var ne = X(f.expirationTime <= A);
                    A = e.unstable_now(),
                    typeof ne == "function" ? f.callback = ne : f === n(a) && r(a),
                    p(A)
                } else
                    r(a);
                f = n(a)
            }
            if (f !== null)
                var ii = !0;
            else {
                var Gt = n(u);
                Gt !== null && Kt(w, Gt.startTime - A),
                ii = !1
            }
            return ii
        } finally {
            f = null,
            d = j,
            g = !1
        }
    }
    var C = !1
      , R = null
      , P = -1
      , _ = 5
      , V = -1;
    function te() {
        return !(e.unstable_now() - V < _)
    }
    function mt() {
        if (R !== null) {
            var M = e.unstable_now();
            V = M;
            var A = !0;
            try {
                A = R(!0, M)
            } finally {
                A ? Ht() : (C = !1,
                R = null)
            }
        } else
            C = !1
    }
    var Ht;
    if (typeof h == "function")
        Ht = function() {
            h(mt)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var er = new MessageChannel
          , oe = er.port2;
        er.port1.onmessage = mt,
        Ht = function() {
            oe.postMessage(null)
        }
    } else
        Ht = function() {
            T(mt, 0)
        }
        ;
    function Ee(M) {
        R = M,
        C || (C = !0,
        Ht())
    }
    function Kt(M, A) {
        P = T(function() {
            M(e.unstable_now())
        }, A)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(M) {
        M.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        y || g || (y = !0,
        Ee(x))
    }
    ,
    e.unstable_forceFrameRate = function(M) {
        0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < M ? Math.floor(1e3 / M) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return d
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(M) {
        switch (d) {
        case 1:
        case 2:
        case 3:
            var A = 3;
            break;
        default:
            A = d
        }
        var j = d;
        d = A;
        try {
            return M()
        } finally {
            d = j
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(M, A) {
        switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            M = 3
        }
        var j = d;
        d = M;
        try {
            return A()
        } finally {
            d = j
        }
    }
    ,
    e.unstable_scheduleCallback = function(M, A, j) {
        var X = e.unstable_now();
        switch (typeof j == "object" && j !== null ? (j = j.delay,
        j = typeof j == "number" && 0 < j ? X + j : X) : j = X,
        M) {
        case 1:
            var ne = -1;
            break;
        case 2:
            ne = 250;
            break;
        case 5:
            ne = 1073741823;
            break;
        case 4:
            ne = 1e4;
            break;
        default:
            ne = 5e3
        }
        return ne = j + ne,
        M = {
            id: c++,
            callback: A,
            priorityLevel: M,
            startTime: j,
            expirationTime: ne,
            sortIndex: -1
        },
        j > X ? (M.sortIndex = j,
        t(u, M),
        n(a) === null && M === n(u) && (v ? (m(P),
        P = -1) : v = !0,
        Kt(w, j - X))) : (M.sortIndex = ne,
        t(a, M),
        y || g || (y = !0,
        Ee(x))),
        M
    }
    ,
    e.unstable_shouldYield = te,
    e.unstable_wrapCallback = function(M) {
        var A = d;
        return function() {
            var j = d;
            d = A;
            try {
                return M.apply(this, arguments)
            } finally {
                d = j
            }
        }
    }
}
)(Qf);
Gf.exports = Qf;
var Xm = Gf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zm = E
  , Ve = Xm;
function S(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Yf = new Set
  , Mr = {};
function mn(e, t) {
    Un(e, t),
    Un(e + "Capture", t)
}
function Un(e, t) {
    for (Mr[e] = t,
    e = 0; e < t.length; e++)
        Yf.add(t[e])
}
var ct = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , _s = Object.prototype.hasOwnProperty
  , Jm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , pu = {}
  , mu = {};
function qm(e) {
    return _s.call(mu, e) ? !0 : _s.call(pu, e) ? !1 : Jm.test(e) ? mu[e] = !0 : (pu[e] = !0,
    !1)
}
function bm(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function eg(e, t, n, r) {
    if (t === null || typeof t > "u" || bm(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function xe(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = s
}
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ue[e] = new xe(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ue[t] = new xe(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ue[e] = new xe(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ue[e] = new xe(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ue[e] = new xe(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ue[e] = new xe(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ue[e] = new xe(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ue[e] = new xe(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ue[e] = new xe(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Hl = /[\-:]([a-z])/g;
function Kl(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Hl, Kl);
    ue[t] = new xe(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Hl, Kl);
    ue[t] = new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Hl, Kl);
    ue[t] = new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ue[e] = new xe(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ue.xlinkHref = new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ue[e] = new xe(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Gl(e, t, n, r) {
    var i = ue.hasOwnProperty(t) ? ue[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (eg(t, n, i, r) && (n = null),
    r || i === null ? qm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var pt = Zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , li = Symbol.for("react.element")
  , wn = Symbol.for("react.portal")
  , xn = Symbol.for("react.fragment")
  , Ql = Symbol.for("react.strict_mode")
  , js = Symbol.for("react.profiler")
  , Xf = Symbol.for("react.provider")
  , Zf = Symbol.for("react.context")
  , Yl = Symbol.for("react.forward_ref")
  , Ns = Symbol.for("react.suspense")
  , Fs = Symbol.for("react.suspense_list")
  , Xl = Symbol.for("react.memo")
  , vt = Symbol.for("react.lazy")
  , Jf = Symbol.for("react.offscreen")
  , gu = Symbol.iterator;
function tr(e) {
    return e === null || typeof e != "object" ? null : (e = gu && e[gu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Q = Object.assign, Qo;
function cr(e) {
    if (Qo === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Qo = t && t[1] || ""
        }
    return `
` + Qo + e
}
var Yo = !1;
function Xo(e, t) {
    if (!e || Yo)
        return "";
    Yo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, l = o.length - 1; 1 <= s && 0 <= l && i[s] !== o[l]; )
                l--;
            for (; 1 <= s && 0 <= l; s--,
            l--)
                if (i[s] !== o[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--,
                            l--,
                            0 > l || i[s] !== o[l]) {
                                var a = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        Yo = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? cr(e) : ""
}
function tg(e) {
    switch (e.tag) {
    case 5:
        return cr(e.type);
    case 16:
        return cr("Lazy");
    case 13:
        return cr("Suspense");
    case 19:
        return cr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Xo(e.type, !1),
        e;
    case 11:
        return e = Xo(e.type.render, !1),
        e;
    case 1:
        return e = Xo(e.type, !0),
        e;
    default:
        return ""
    }
}
function Os(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case xn:
        return "Fragment";
    case wn:
        return "Portal";
    case js:
        return "Profiler";
    case Ql:
        return "StrictMode";
    case Ns:
        return "Suspense";
    case Fs:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Zf:
            return (e.displayName || "Context") + ".Consumer";
        case Xf:
            return (e._context.displayName || "Context") + ".Provider";
        case Yl:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Xl:
            return t = e.displayName || null,
            t !== null ? t : Os(e.type) || "Memo";
        case vt:
            t = e._payload,
            e = e._init;
            try {
                return Os(e(t))
            } catch {}
        }
    return null
}
function ng(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Os(t);
    case 8:
        return t === Ql ? "StrictMode" : "Mode";
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
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Nt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function qf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function rg(e) {
    var t = qf(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(s) {
                r = "" + s,
                o.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function ai(e) {
    e._valueTracker || (e._valueTracker = rg(e))
}
function bf(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = qf(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Ui(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function zs(e, t) {
    var n = t.checked;
    return Q({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function yu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Nt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function ed(e, t) {
    t = t.checked,
    t != null && Gl(e, "checked", t, !1)
}
function Is(e, t) {
    ed(e, t);
    var n = Nt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Bs(e, t.type, n) : t.hasOwnProperty("defaultValue") && Bs(e, t.type, Nt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function vu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Bs(e, t, n) {
    (t !== "number" || Ui(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var fr = Array.isArray;
function Nn(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Nt(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function Us(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(S(91));
    return Q({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function wu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(S(92));
            if (fr(n)) {
                if (1 < n.length)
                    throw Error(S(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Nt(n)
    }
}
function td(e, t) {
    var n = Nt(t.value)
      , r = Nt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function xu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function nd(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function $s(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? nd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ui, rd = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (ui = ui || document.createElement("div"),
        ui.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = ui.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Lr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var mr = {
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
    strokeWidth: !0
}
  , ig = ["Webkit", "ms", "Moz", "O"];
Object.keys(mr).forEach(function(e) {
    ig.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        mr[t] = mr[e]
    })
});
function id(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || mr.hasOwnProperty(e) && mr[e] ? ("" + t).trim() : t + "px"
}
function od(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = id(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var og = Q({
    menuitem: !0
}, {
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
    wbr: !0
});
function Ws(e, t) {
    if (t) {
        if (og[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(S(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(S(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(S(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(S(62))
    }
}
function Hs(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
        return !0
    }
}
var Ks = null;
function Zl(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Gs = null
  , Fn = null
  , On = null;
function Su(e) {
    if (e = qr(e)) {
        if (typeof Gs != "function")
            throw Error(S(280));
        var t = e.stateNode;
        t && (t = Eo(t),
        Gs(e.stateNode, e.type, t))
    }
}
function sd(e) {
    Fn ? On ? On.push(e) : On = [e] : Fn = e
}
function ld() {
    if (Fn) {
        var e = Fn
          , t = On;
        if (On = Fn = null,
        Su(e),
        t)
            for (e = 0; e < t.length; e++)
                Su(t[e])
    }
}
function ad(e, t) {
    return e(t)
}
function ud() {}
var Zo = !1;
function cd(e, t, n) {
    if (Zo)
        return e(t, n);
    Zo = !0;
    try {
        return ad(e, t, n)
    } finally {
        Zo = !1,
        (Fn !== null || On !== null) && (ud(),
        ld())
    }
}
function Vr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Eo(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
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
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(S(231, t, typeof n));
    return n
}
var Qs = !1;
if (ct)
    try {
        var nr = {};
        Object.defineProperty(nr, "passive", {
            get: function() {
                Qs = !0
            }
        }),
        window.addEventListener("test", nr, nr),
        window.removeEventListener("test", nr, nr)
    } catch {
        Qs = !1
    }
function sg(e, t, n, r, i, o, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var gr = !1
  , $i = null
  , Wi = !1
  , Ys = null
  , lg = {
    onError: function(e) {
        gr = !0,
        $i = e
    }
};
function ag(e, t, n, r, i, o, s, l, a) {
    gr = !1,
    $i = null,
    sg.apply(lg, arguments)
}
function ug(e, t, n, r, i, o, s, l, a) {
    if (ag.apply(this, arguments),
    gr) {
        if (gr) {
            var u = $i;
            gr = !1,
            $i = null
        } else
            throw Error(S(198));
        Wi || (Wi = !0,
        Ys = u)
    }
}
function gn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function fd(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Pu(e) {
    if (gn(e) !== e)
        throw Error(S(188))
}
function cg(e) {
    var t = e.alternate;
    if (!t) {
        if (t = gn(e),
        t === null)
            throw Error(S(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n)
                    return Pu(i),
                    e;
                if (o === r)
                    return Pu(i),
                    t;
                o = o.sibling
            }
            throw Error(S(188))
        }
        if (n.return !== r.return)
            n = i,
            r = o;
        else {
            for (var s = !1, l = i.child; l; ) {
                if (l === n) {
                    s = !0,
                    n = i,
                    r = o;
                    break
                }
                if (l === r) {
                    s = !0,
                    r = i,
                    n = o;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = o.child; l; ) {
                    if (l === n) {
                        s = !0,
                        n = o,
                        r = i;
                        break
                    }
                    if (l === r) {
                        s = !0,
                        r = o,
                        n = i;
                        break
                    }
                    l = l.sibling
                }
                if (!s)
                    throw Error(S(189))
            }
        }
        if (n.alternate !== r)
            throw Error(S(190))
    }
    if (n.tag !== 3)
        throw Error(S(188));
    return n.stateNode.current === n ? e : t
}
function dd(e) {
    return e = cg(e),
    e !== null ? hd(e) : null
}
function hd(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = hd(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var pd = Ve.unstable_scheduleCallback
  , ku = Ve.unstable_cancelCallback
  , fg = Ve.unstable_shouldYield
  , dg = Ve.unstable_requestPaint
  , J = Ve.unstable_now
  , hg = Ve.unstable_getCurrentPriorityLevel
  , Jl = Ve.unstable_ImmediatePriority
  , md = Ve.unstable_UserBlockingPriority
  , Hi = Ve.unstable_NormalPriority
  , pg = Ve.unstable_LowPriority
  , gd = Ve.unstable_IdlePriority
  , Po = null
  , qe = null;
function mg(e) {
    if (qe && typeof qe.onCommitFiberRoot == "function")
        try {
            qe.onCommitFiberRoot(Po, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Ge = Math.clz32 ? Math.clz32 : vg
  , gg = Math.log
  , yg = Math.LN2;
function vg(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (gg(e) / yg | 0) | 0
}
var ci = 64
  , fi = 4194304;
function dr(e) {
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
        return e
    }
}
function Ki(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , o = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var l = s & ~i;
        l !== 0 ? r = dr(l) : (o &= s,
        o !== 0 && (r = dr(o)))
    } else
        s = n & ~i,
        s !== 0 ? r = dr(s) : o !== 0 && (r = dr(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    o = t & -t,
    i >= o || i === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Ge(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function wg(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
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
        return t + 5e3;
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
        return -1
    }
}
function xg(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var s = 31 - Ge(o)
          , l = 1 << s
          , a = i[s];
        a === -1 ? (!(l & n) || l & r) && (i[s] = wg(l, t)) : a <= t && (e.expiredLanes |= l),
        o &= ~l
    }
}
function Xs(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function yd() {
    var e = ci;
    return ci <<= 1,
    !(ci & 4194240) && (ci = 64),
    e
}
function Jo(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Zr(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Ge(t),
    e[t] = n
}
function Sg(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - Ge(n)
          , o = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~o
    }
}
function ql(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Ge(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var O = 0;
function vd(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var wd, bl, xd, Sd, Pd, Zs = !1, di = [], Ct = null, Et = null, Rt = null, Dr = new Map, Ar = new Map, St = [], Pg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Tu(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Ct = null;
        break;
    case "dragenter":
    case "dragleave":
        Et = null;
        break;
    case "mouseover":
    case "mouseout":
        Rt = null;
        break;
    case "pointerover":
    case "pointerout":
        Dr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Ar.delete(t.pointerId)
    }
}
function rr(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
    t !== null && (t = qr(t),
    t !== null && bl(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function kg(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return Ct = rr(Ct, e, t, n, r, i),
        !0;
    case "dragenter":
        return Et = rr(Et, e, t, n, r, i),
        !0;
    case "mouseover":
        return Rt = rr(Rt, e, t, n, r, i),
        !0;
    case "pointerover":
        var o = i.pointerId;
        return Dr.set(o, rr(Dr.get(o) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return o = i.pointerId,
        Ar.set(o, rr(Ar.get(o) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function kd(e) {
    var t = tn(e.target);
    if (t !== null) {
        var n = gn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = fd(n),
                t !== null) {
                    e.blockedOn = t,
                    Pd(e.priority, function() {
                        xd(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Mi(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Js(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Ks = r,
            n.target.dispatchEvent(r),
            Ks = null
        } else
            return t = qr(n),
            t !== null && bl(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Cu(e, t, n) {
    Mi(e) && n.delete(t)
}
function Tg() {
    Zs = !1,
    Ct !== null && Mi(Ct) && (Ct = null),
    Et !== null && Mi(Et) && (Et = null),
    Rt !== null && Mi(Rt) && (Rt = null),
    Dr.forEach(Cu),
    Ar.forEach(Cu)
}
function ir(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Zs || (Zs = !0,
    Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, Tg)))
}
function _r(e) {
    function t(i) {
        return ir(i, e)
    }
    if (0 < di.length) {
        ir(di[0], e);
        for (var n = 1; n < di.length; n++) {
            var r = di[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Ct !== null && ir(Ct, e),
    Et !== null && ir(Et, e),
    Rt !== null && ir(Rt, e),
    Dr.forEach(t),
    Ar.forEach(t),
    n = 0; n < St.length; n++)
        r = St[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < St.length && (n = St[0],
    n.blockedOn === null); )
        kd(n),
        n.blockedOn === null && St.shift()
}
var zn = pt.ReactCurrentBatchConfig
  , Gi = !0;
function Cg(e, t, n, r) {
    var i = O
      , o = zn.transition;
    zn.transition = null;
    try {
        O = 1,
        ea(e, t, n, r)
    } finally {
        O = i,
        zn.transition = o
    }
}
function Eg(e, t, n, r) {
    var i = O
      , o = zn.transition;
    zn.transition = null;
    try {
        O = 4,
        ea(e, t, n, r)
    } finally {
        O = i,
        zn.transition = o
    }
}
function ea(e, t, n, r) {
    if (Gi) {
        var i = Js(e, t, n, r);
        if (i === null)
            ls(e, t, r, Qi, n),
            Tu(e, r);
        else if (kg(i, e, t, n, r))
            r.stopPropagation();
        else if (Tu(e, r),
        t & 4 && -1 < Pg.indexOf(e)) {
            for (; i !== null; ) {
                var o = qr(i);
                if (o !== null && wd(o),
                o = Js(e, t, n, r),
                o === null && ls(e, t, r, Qi, n),
                o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            ls(e, t, r, null, n)
    }
}
var Qi = null;
function Js(e, t, n, r) {
    if (Qi = null,
    e = Zl(r),
    e = tn(e),
    e !== null)
        if (t = gn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = fd(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Qi = e,
    null
}
function Td(e) {
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
        switch (hg()) {
        case Jl:
            return 1;
        case md:
            return 4;
        case Hi:
        case pg:
            return 16;
        case gd:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var kt = null
  , ta = null
  , Li = null;
function Cd() {
    if (Li)
        return Li;
    var e, t = ta, n = t.length, r, i = "value"in kt ? kt.value : kt.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++)
        ;
    return Li = i.slice(e, 1 < r ? 1 - r : void 0)
}
function Vi(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function hi() {
    return !0
}
function Eu() {
    return !1
}
function _e(e) {
    function t(n, r, i, o, s) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = o,
        this.target = s,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(o) : o[l]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? hi : Eu,
        this.isPropagationStopped = Eu,
        this
    }
    return Q(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = hi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = hi)
        },
        persist: function() {},
        isPersistent: hi
    }),
    t
}
var Zn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, na = _e(Zn), Jr = Q({}, Zn, {
    view: 0,
    detail: 0
}), Rg = _e(Jr), qo, bo, or, ko = Q({}, Jr, {
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
    getModifierState: ra,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== or && (or && e.type === "mousemove" ? (qo = e.screenX - or.screenX,
        bo = e.screenY - or.screenY) : bo = qo = 0,
        or = e),
        qo)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : bo
    }
}), Ru = _e(ko), Mg = Q({}, ko, {
    dataTransfer: 0
}), Lg = _e(Mg), Vg = Q({}, Jr, {
    relatedTarget: 0
}), es = _e(Vg), Dg = Q({}, Zn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Ag = _e(Dg), _g = Q({}, Zn, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), jg = _e(_g), Ng = Q({}, Zn, {
    data: 0
}), Mu = _e(Ng), Fg = {
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
    MozPrintableKey: "Unidentified"
}, Og = {
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
    224: "Meta"
}, zg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Ig(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = zg[e]) ? !!t[e] : !1
}
function ra() {
    return Ig
}
var Bg = Q({}, Jr, {
    key: function(e) {
        if (e.key) {
            var t = Fg[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Vi(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Og[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ra,
    charCode: function(e) {
        return e.type === "keypress" ? Vi(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Vi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Ug = _e(Bg)
  , $g = Q({}, ko, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Lu = _e($g)
  , Wg = Q({}, Jr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ra
})
  , Hg = _e(Wg)
  , Kg = Q({}, Zn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Gg = _e(Kg)
  , Qg = Q({}, ko, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Yg = _e(Qg)
  , Xg = [9, 13, 27, 32]
  , ia = ct && "CompositionEvent"in window
  , yr = null;
ct && "documentMode"in document && (yr = document.documentMode);
var Zg = ct && "TextEvent"in window && !yr
  , Ed = ct && (!ia || yr && 8 < yr && 11 >= yr)
  , Vu = " "
  , Du = !1;
function Rd(e, t) {
    switch (e) {
    case "keyup":
        return Xg.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Md(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Sn = !1;
function Jg(e, t) {
    switch (e) {
    case "compositionend":
        return Md(t);
    case "keypress":
        return t.which !== 32 ? null : (Du = !0,
        Vu);
    case "textInput":
        return e = t.data,
        e === Vu && Du ? null : e;
    default:
        return null
    }
}
function qg(e, t) {
    if (Sn)
        return e === "compositionend" || !ia && Rd(e, t) ? (e = Cd(),
        Li = ta = kt = null,
        Sn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Ed && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var bg = {
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
    week: !0
};
function Au(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!bg[e.type] : t === "textarea"
}
function Ld(e, t, n, r) {
    sd(r),
    t = Yi(t, "onChange"),
    0 < t.length && (n = new na("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var vr = null
  , jr = null;
function ey(e) {
    Bd(e, 0)
}
function To(e) {
    var t = Tn(e);
    if (bf(t))
        return e
}
function ty(e, t) {
    if (e === "change")
        return t
}
var Vd = !1;
if (ct) {
    var ts;
    if (ct) {
        var ns = "oninput"in document;
        if (!ns) {
            var _u = document.createElement("div");
            _u.setAttribute("oninput", "return;"),
            ns = typeof _u.oninput == "function"
        }
        ts = ns
    } else
        ts = !1;
    Vd = ts && (!document.documentMode || 9 < document.documentMode)
}
function ju() {
    vr && (vr.detachEvent("onpropertychange", Dd),
    jr = vr = null)
}
function Dd(e) {
    if (e.propertyName === "value" && To(jr)) {
        var t = [];
        Ld(t, jr, e, Zl(e)),
        cd(ey, t)
    }
}
function ny(e, t, n) {
    e === "focusin" ? (ju(),
    vr = t,
    jr = n,
    vr.attachEvent("onpropertychange", Dd)) : e === "focusout" && ju()
}
function ry(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return To(jr)
}
function iy(e, t) {
    if (e === "click")
        return To(t)
}
function oy(e, t) {
    if (e === "input" || e === "change")
        return To(t)
}
function sy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ye = typeof Object.is == "function" ? Object.is : sy;
function Nr(e, t) {
    if (Ye(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!_s.call(t, i) || !Ye(e[i], t[i]))
            return !1
    }
    return !0
}
function Nu(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Fu(e, t) {
    var n = Nu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Nu(n)
    }
}
function Ad(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ad(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function _d() {
    for (var e = window, t = Ui(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Ui(e.document)
    }
    return t
}
function oa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function ly(e) {
    var t = _d()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ad(n.ownerDocument.documentElement, n)) {
        if (r !== null && oa(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i),
                !e.extend && o > r && (i = r,
                r = o,
                o = i),
                i = Fu(n, o);
                var s = Fu(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var ay = ct && "documentMode"in document && 11 >= document.documentMode
  , Pn = null
  , qs = null
  , wr = null
  , bs = !1;
function Ou(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    bs || Pn == null || Pn !== Ui(r) || (r = Pn,
    "selectionStart"in r && oa(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    wr && Nr(wr, r) || (wr = r,
    r = Yi(qs, "onSelect"),
    0 < r.length && (t = new na("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Pn)))
}
function pi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var kn = {
    animationend: pi("Animation", "AnimationEnd"),
    animationiteration: pi("Animation", "AnimationIteration"),
    animationstart: pi("Animation", "AnimationStart"),
    transitionend: pi("Transition", "TransitionEnd")
}
  , rs = {}
  , jd = {};
ct && (jd = document.createElement("div").style,
"AnimationEvent"in window || (delete kn.animationend.animation,
delete kn.animationiteration.animation,
delete kn.animationstart.animation),
"TransitionEvent"in window || delete kn.transitionend.transition);
function Co(e) {
    if (rs[e])
        return rs[e];
    if (!kn[e])
        return e;
    var t = kn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in jd)
            return rs[e] = t[n];
    return e
}
var Nd = Co("animationend")
  , Fd = Co("animationiteration")
  , Od = Co("animationstart")
  , zd = Co("transitionend")
  , Id = new Map
  , zu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Bt(e, t) {
    Id.set(e, t),
    mn(t, [e])
}
for (var is = 0; is < zu.length; is++) {
    var os = zu[is]
      , uy = os.toLowerCase()
      , cy = os[0].toUpperCase() + os.slice(1);
    Bt(uy, "on" + cy)
}
Bt(Nd, "onAnimationEnd");
Bt(Fd, "onAnimationIteration");
Bt(Od, "onAnimationStart");
Bt("dblclick", "onDoubleClick");
Bt("focusin", "onFocus");
Bt("focusout", "onBlur");
Bt(zd, "onTransitionEnd");
Un("onMouseEnter", ["mouseout", "mouseover"]);
Un("onMouseLeave", ["mouseout", "mouseover"]);
Un("onPointerEnter", ["pointerout", "pointerover"]);
Un("onPointerLeave", ["pointerout", "pointerover"]);
mn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
mn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
mn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
mn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var hr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , fy = new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));
function Iu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    ug(r, t, void 0, e),
    e.currentTarget = null
}
function Bd(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== o && i.isPropagationStopped())
                        break e;
                    Iu(i, l, u),
                    o = a
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (l = r[s],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== o && i.isPropagationStopped())
                        break e;
                    Iu(i, l, u),
                    o = a
                }
        }
    }
    if (Wi)
        throw e = Ys,
        Wi = !1,
        Ys = null,
        e
}
function B(e, t) {
    var n = t[il];
    n === void 0 && (n = t[il] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Ud(t, e, 2, !1),
    n.add(r))
}
function ss(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Ud(n, e, r, t)
}
var mi = "_reactListening" + Math.random().toString(36).slice(2);
function Fr(e) {
    if (!e[mi]) {
        e[mi] = !0,
        Yf.forEach(function(n) {
            n !== "selectionchange" && (fy.has(n) || ss(n, !1, e),
            ss(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[mi] || (t[mi] = !0,
        ss("selectionchange", !1, t))
    }
}
function Ud(e, t, n, r) {
    switch (Td(t)) {
    case 1:
        var i = Cg;
        break;
    case 4:
        i = Eg;
        break;
    default:
        i = ea
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !Qs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function ls(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var l = r.stateNode.containerInfo;
                if (l === i || l.nodeType === 8 && l.parentNode === i)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var a = s.tag;
                        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo,
                        a === i || a.nodeType === 8 && a.parentNode === i))
                            return;
                        s = s.return
                    }
                for (; l !== null; ) {
                    if (s = tn(l),
                    s === null)
                        return;
                    if (a = s.tag,
                    a === 5 || a === 6) {
                        r = o = s;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    cd(function() {
        var u = o
          , c = Zl(n)
          , f = [];
        e: {
            var d = Id.get(e);
            if (d !== void 0) {
                var g = na
                  , y = e;
                switch (e) {
                case "keypress":
                    if (Vi(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    g = Ug;
                    break;
                case "focusin":
                    y = "focus",
                    g = es;
                    break;
                case "focusout":
                    y = "blur",
                    g = es;
                    break;
                case "beforeblur":
                case "afterblur":
                    g = es;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    g = Ru;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    g = Lg;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    g = Hg;
                    break;
                case Nd:
                case Fd:
                case Od:
                    g = Ag;
                    break;
                case zd:
                    g = Gg;
                    break;
                case "scroll":
                    g = Rg;
                    break;
                case "wheel":
                    g = Yg;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    g = jg;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    g = Lu
                }
                var v = (t & 4) !== 0
                  , T = !v && e === "scroll"
                  , m = v ? d !== null ? d + "Capture" : null : d;
                v = [];
                for (var h = u, p; h !== null; ) {
                    p = h;
                    var w = p.stateNode;
                    if (p.tag === 5 && w !== null && (p = w,
                    m !== null && (w = Vr(h, m),
                    w != null && v.push(Or(h, w, p)))),
                    T)
                        break;
                    h = h.return
                }
                0 < v.length && (d = new g(d,y,null,n,c),
                f.push({
                    event: d,
                    listeners: v
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (d = e === "mouseover" || e === "pointerover",
                g = e === "mouseout" || e === "pointerout",
                d && n !== Ks && (y = n.relatedTarget || n.fromElement) && (tn(y) || y[ft]))
                    break e;
                if ((g || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window,
                g ? (y = n.relatedTarget || n.toElement,
                g = u,
                y = y ? tn(y) : null,
                y !== null && (T = gn(y),
                y !== T || y.tag !== 5 && y.tag !== 6) && (y = null)) : (g = null,
                y = u),
                g !== y)) {
                    if (v = Ru,
                    w = "onMouseLeave",
                    m = "onMouseEnter",
                    h = "mouse",
                    (e === "pointerout" || e === "pointerover") && (v = Lu,
                    w = "onPointerLeave",
                    m = "onPointerEnter",
                    h = "pointer"),
                    T = g == null ? d : Tn(g),
                    p = y == null ? d : Tn(y),
                    d = new v(w,h + "leave",g,n,c),
                    d.target = T,
                    d.relatedTarget = p,
                    w = null,
                    tn(c) === u && (v = new v(m,h + "enter",y,n,c),
                    v.target = p,
                    v.relatedTarget = T,
                    w = v),
                    T = w,
                    g && y)
                        t: {
                            for (v = g,
                            m = y,
                            h = 0,
                            p = v; p; p = vn(p))
                                h++;
                            for (p = 0,
                            w = m; w; w = vn(w))
                                p++;
                            for (; 0 < h - p; )
                                v = vn(v),
                                h--;
                            for (; 0 < p - h; )
                                m = vn(m),
                                p--;
                            for (; h--; ) {
                                if (v === m || m !== null && v === m.alternate)
                                    break t;
                                v = vn(v),
                                m = vn(m)
                            }
                            v = null
                        }
                    else
                        v = null;
                    g !== null && Bu(f, d, g, v, !1),
                    y !== null && T !== null && Bu(f, T, y, v, !0)
                }
            }
            e: {
                if (d = u ? Tn(u) : window,
                g = d.nodeName && d.nodeName.toLowerCase(),
                g === "select" || g === "input" && d.type === "file")
                    var x = ty;
                else if (Au(d))
                    if (Vd)
                        x = oy;
                    else {
                        x = ry;
                        var C = ny
                    }
                else
                    (g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (x = iy);
                if (x && (x = x(e, u))) {
                    Ld(f, x, n, c);
                    break e
                }
                C && C(e, d, u),
                e === "focusout" && (C = d._wrapperState) && C.controlled && d.type === "number" && Bs(d, "number", d.value)
            }
            switch (C = u ? Tn(u) : window,
            e) {
            case "focusin":
                (Au(C) || C.contentEditable === "true") && (Pn = C,
                qs = u,
                wr = null);
                break;
            case "focusout":
                wr = qs = Pn = null;
                break;
            case "mousedown":
                bs = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                bs = !1,
                Ou(f, n, c);
                break;
            case "selectionchange":
                if (ay)
                    break;
            case "keydown":
            case "keyup":
                Ou(f, n, c)
            }
            var R;
            if (ia)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                    }
                    P = void 0
                }
            else
                Sn ? Rd(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
            P && (Ed && n.locale !== "ko" && (Sn || P !== "onCompositionStart" ? P === "onCompositionEnd" && Sn && (R = Cd()) : (kt = c,
            ta = "value"in kt ? kt.value : kt.textContent,
            Sn = !0)),
            C = Yi(u, P),
            0 < C.length && (P = new Mu(P,e,null,n,c),
            f.push({
                event: P,
                listeners: C
            }),
            R ? P.data = R : (R = Md(n),
            R !== null && (P.data = R)))),
            (R = Zg ? Jg(e, n) : qg(e, n)) && (u = Yi(u, "onBeforeInput"),
            0 < u.length && (c = new Mu("onBeforeInput","beforeinput",null,n,c),
            f.push({
                event: c,
                listeners: u
            }),
            c.data = R))
        }
        Bd(f, t)
    })
}
function Or(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Yi(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
        o = Vr(e, n),
        o != null && r.unshift(Or(e, o, i)),
        o = Vr(e, t),
        o != null && r.push(Or(e, o, i))),
        e = e.return
    }
    return r
}
function vn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Bu(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        i ? (a = Vr(n, o),
        a != null && s.unshift(Or(n, a, l))) : i || (a = Vr(n, o),
        a != null && s.push(Or(n, a, l)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var dy = /\r\n?/g
  , hy = /\u0000|\uFFFD/g;
function Uu(e) {
    return (typeof e == "string" ? e : "" + e).replace(dy, `
`).replace(hy, "")
}
function gi(e, t, n) {
    if (t = Uu(t),
    Uu(e) !== t && n)
        throw Error(S(425))
}
function Xi() {}
var el = null
  , tl = null;
function nl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var rl = typeof setTimeout == "function" ? setTimeout : void 0
  , py = typeof clearTimeout == "function" ? clearTimeout : void 0
  , $u = typeof Promise == "function" ? Promise : void 0
  , my = typeof queueMicrotask == "function" ? queueMicrotask : typeof $u < "u" ? function(e) {
    return $u.resolve(null).then(e).catch(gy)
}
: rl;
function gy(e) {
    setTimeout(function() {
        throw e
    })
}
function as(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    _r(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    _r(t)
}
function Mt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Wu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Jn = Math.random().toString(36).slice(2)
  , Je = "__reactFiber$" + Jn
  , zr = "__reactProps$" + Jn
  , ft = "__reactContainer$" + Jn
  , il = "__reactEvents$" + Jn
  , yy = "__reactListeners$" + Jn
  , vy = "__reactHandles$" + Jn;
function tn(e) {
    var t = e[Je];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[ft] || n[Je]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Wu(e); e !== null; ) {
                    if (n = e[Je])
                        return n;
                    e = Wu(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function qr(e) {
    return e = e[Je] || e[ft],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Tn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(S(33))
}
function Eo(e) {
    return e[zr] || null
}
var ol = []
  , Cn = -1;
function Ut(e) {
    return {
        current: e
    }
}
function U(e) {
    0 > Cn || (e.current = ol[Cn],
    ol[Cn] = null,
    Cn--)
}
function I(e, t) {
    Cn++,
    ol[Cn] = e.current,
    e.current = t
}
var Ft = {}
  , ge = Ut(Ft)
  , ke = Ut(!1)
  , cn = Ft;
function $n(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Ft;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
        i[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function Te(e) {
    return e = e.childContextTypes,
    e != null
}
function Zi() {
    U(ke),
    U(ge)
}
function Hu(e, t, n) {
    if (ge.current !== Ft)
        throw Error(S(168));
    I(ge, t),
    I(ke, n)
}
function $d(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(S(108, ng(e) || "Unknown", i));
    return Q({}, n, r)
}
function Ji(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ft,
    cn = ge.current,
    I(ge, e),
    I(ke, ke.current),
    !0
}
function Ku(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(S(169));
    n ? (e = $d(e, t, cn),
    r.__reactInternalMemoizedMergedChildContext = e,
    U(ke),
    U(ge),
    I(ge, e)) : U(ke),
    I(ke, n)
}
var nt = null
  , Ro = !1
  , us = !1;
function Wd(e) {
    nt === null ? nt = [e] : nt.push(e)
}
function wy(e) {
    Ro = !0,
    Wd(e)
}
function $t() {
    if (!us && nt !== null) {
        us = !0;
        var e = 0
          , t = O;
        try {
            var n = nt;
            for (O = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            nt = null,
            Ro = !1
        } catch (i) {
            throw nt !== null && (nt = nt.slice(e + 1)),
            pd(Jl, $t),
            i
        } finally {
            O = t,
            us = !1
        }
    }
    return null
}
var En = []
  , Rn = 0
  , qi = null
  , bi = 0
  , Fe = []
  , Oe = 0
  , fn = null
  , rt = 1
  , it = "";
function Xt(e, t) {
    En[Rn++] = bi,
    En[Rn++] = qi,
    qi = e,
    bi = t
}
function Hd(e, t, n) {
    Fe[Oe++] = rt,
    Fe[Oe++] = it,
    Fe[Oe++] = fn,
    fn = e;
    var r = rt;
    e = it;
    var i = 32 - Ge(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var o = 32 - Ge(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32),
        r >>= s,
        i -= s,
        rt = 1 << 32 - Ge(t) + i | n << i | r,
        it = o + e
    } else
        rt = 1 << o | n << i | r,
        it = e
}
function sa(e) {
    e.return !== null && (Xt(e, 1),
    Hd(e, 1, 0))
}
function la(e) {
    for (; e === qi; )
        qi = En[--Rn],
        En[Rn] = null,
        bi = En[--Rn],
        En[Rn] = null;
    for (; e === fn; )
        fn = Fe[--Oe],
        Fe[Oe] = null,
        it = Fe[--Oe],
        Fe[Oe] = null,
        rt = Fe[--Oe],
        Fe[Oe] = null
}
var Le = null
  , Me = null
  , W = !1
  , Ke = null;
function Kd(e, t) {
    var n = ze(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Gu(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Le = e,
        Me = Mt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Le = e,
        Me = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = fn !== null ? {
            id: rt,
            overflow: it
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = ze(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Le = e,
        Me = null,
        !0) : !1;
    default:
        return !1
    }
}
function sl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ll(e) {
    if (W) {
        var t = Me;
        if (t) {
            var n = t;
            if (!Gu(e, t)) {
                if (sl(e))
                    throw Error(S(418));
                t = Mt(n.nextSibling);
                var r = Le;
                t && Gu(e, t) ? Kd(r, n) : (e.flags = e.flags & -4097 | 2,
                W = !1,
                Le = e)
            }
        } else {
            if (sl(e))
                throw Error(S(418));
            e.flags = e.flags & -4097 | 2,
            W = !1,
            Le = e
        }
    }
}
function Qu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Le = e
}
function yi(e) {
    if (e !== Le)
        return !1;
    if (!W)
        return Qu(e),
        W = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !nl(e.type, e.memoizedProps)),
    t && (t = Me)) {
        if (sl(e))
            throw Gd(),
            Error(S(418));
        for (; t; )
            Kd(e, t),
            t = Mt(t.nextSibling)
    }
    if (Qu(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(S(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Me = Mt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Me = null
        }
    } else
        Me = Le ? Mt(e.stateNode.nextSibling) : null;
    return !0
}
function Gd() {
    for (var e = Me; e; )
        e = Mt(e.nextSibling)
}
function Wn() {
    Me = Le = null,
    W = !1
}
function aa(e) {
    Ke === null ? Ke = [e] : Ke.push(e)
}
var xy = pt.ReactCurrentBatchConfig;
function sr(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(S(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(S(147, e));
            var i = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
                var l = i.refs;
                s === null ? delete l[o] : l[o] = s
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(S(284));
        if (!n._owner)
            throw Error(S(290, e))
    }
    return e
}
function vi(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Yu(e) {
    var t = e._init;
    return t(e._payload)
}
function Qd(e) {
    function t(m, h) {
        if (e) {
            var p = m.deletions;
            p === null ? (m.deletions = [h],
            m.flags |= 16) : p.push(h)
        }
    }
    function n(m, h) {
        if (!e)
            return null;
        for (; h !== null; )
            t(m, h),
            h = h.sibling;
        return null
    }
    function r(m, h) {
        for (m = new Map; h !== null; )
            h.key !== null ? m.set(h.key, h) : m.set(h.index, h),
            h = h.sibling;
        return m
    }
    function i(m, h) {
        return m = At(m, h),
        m.index = 0,
        m.sibling = null,
        m
    }
    function o(m, h, p) {
        return m.index = p,
        e ? (p = m.alternate,
        p !== null ? (p = p.index,
        p < h ? (m.flags |= 2,
        h) : p) : (m.flags |= 2,
        h)) : (m.flags |= 1048576,
        h)
    }
    function s(m) {
        return e && m.alternate === null && (m.flags |= 2),
        m
    }
    function l(m, h, p, w) {
        return h === null || h.tag !== 6 ? (h = gs(p, m.mode, w),
        h.return = m,
        h) : (h = i(h, p),
        h.return = m,
        h)
    }
    function a(m, h, p, w) {
        var x = p.type;
        return x === xn ? c(m, h, p.props.children, w, p.key) : h !== null && (h.elementType === x || typeof x == "object" && x !== null && x.$$typeof === vt && Yu(x) === h.type) ? (w = i(h, p.props),
        w.ref = sr(m, h, p),
        w.return = m,
        w) : (w = Oi(p.type, p.key, p.props, null, m.mode, w),
        w.ref = sr(m, h, p),
        w.return = m,
        w)
    }
    function u(m, h, p, w) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== p.containerInfo || h.stateNode.implementation !== p.implementation ? (h = ys(p, m.mode, w),
        h.return = m,
        h) : (h = i(h, p.children || []),
        h.return = m,
        h)
    }
    function c(m, h, p, w, x) {
        return h === null || h.tag !== 7 ? (h = an(p, m.mode, w, x),
        h.return = m,
        h) : (h = i(h, p),
        h.return = m,
        h)
    }
    function f(m, h, p) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = gs("" + h, m.mode, p),
            h.return = m,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case li:
                return p = Oi(h.type, h.key, h.props, null, m.mode, p),
                p.ref = sr(m, null, h),
                p.return = m,
                p;
            case wn:
                return h = ys(h, m.mode, p),
                h.return = m,
                h;
            case vt:
                var w = h._init;
                return f(m, w(h._payload), p)
            }
            if (fr(h) || tr(h))
                return h = an(h, m.mode, p, null),
                h.return = m,
                h;
            vi(m, h)
        }
        return null
    }
    function d(m, h, p, w) {
        var x = h !== null ? h.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return x !== null ? null : l(m, h, "" + p, w);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case li:
                return p.key === x ? a(m, h, p, w) : null;
            case wn:
                return p.key === x ? u(m, h, p, w) : null;
            case vt:
                return x = p._init,
                d(m, h, x(p._payload), w)
            }
            if (fr(p) || tr(p))
                return x !== null ? null : c(m, h, p, w, null);
            vi(m, p)
        }
        return null
    }
    function g(m, h, p, w, x) {
        if (typeof w == "string" && w !== "" || typeof w == "number")
            return m = m.get(p) || null,
            l(h, m, "" + w, x);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
            case li:
                return m = m.get(w.key === null ? p : w.key) || null,
                a(h, m, w, x);
            case wn:
                return m = m.get(w.key === null ? p : w.key) || null,
                u(h, m, w, x);
            case vt:
                var C = w._init;
                return g(m, h, p, C(w._payload), x)
            }
            if (fr(w) || tr(w))
                return m = m.get(p) || null,
                c(h, m, w, x, null);
            vi(h, w)
        }
        return null
    }
    function y(m, h, p, w) {
        for (var x = null, C = null, R = h, P = h = 0, _ = null; R !== null && P < p.length; P++) {
            R.index > P ? (_ = R,
            R = null) : _ = R.sibling;
            var V = d(m, R, p[P], w);
            if (V === null) {
                R === null && (R = _);
                break
            }
            e && R && V.alternate === null && t(m, R),
            h = o(V, h, P),
            C === null ? x = V : C.sibling = V,
            C = V,
            R = _
        }
        if (P === p.length)
            return n(m, R),
            W && Xt(m, P),
            x;
        if (R === null) {
            for (; P < p.length; P++)
                R = f(m, p[P], w),
                R !== null && (h = o(R, h, P),
                C === null ? x = R : C.sibling = R,
                C = R);
            return W && Xt(m, P),
            x
        }
        for (R = r(m, R); P < p.length; P++)
            _ = g(R, m, P, p[P], w),
            _ !== null && (e && _.alternate !== null && R.delete(_.key === null ? P : _.key),
            h = o(_, h, P),
            C === null ? x = _ : C.sibling = _,
            C = _);
        return e && R.forEach(function(te) {
            return t(m, te)
        }),
        W && Xt(m, P),
        x
    }
    function v(m, h, p, w) {
        var x = tr(p);
        if (typeof x != "function")
            throw Error(S(150));
        if (p = x.call(p),
        p == null)
            throw Error(S(151));
        for (var C = x = null, R = h, P = h = 0, _ = null, V = p.next(); R !== null && !V.done; P++,
        V = p.next()) {
            R.index > P ? (_ = R,
            R = null) : _ = R.sibling;
            var te = d(m, R, V.value, w);
            if (te === null) {
                R === null && (R = _);
                break
            }
            e && R && te.alternate === null && t(m, R),
            h = o(te, h, P),
            C === null ? x = te : C.sibling = te,
            C = te,
            R = _
        }
        if (V.done)
            return n(m, R),
            W && Xt(m, P),
            x;
        if (R === null) {
            for (; !V.done; P++,
            V = p.next())
                V = f(m, V.value, w),
                V !== null && (h = o(V, h, P),
                C === null ? x = V : C.sibling = V,
                C = V);
            return W && Xt(m, P),
            x
        }
        for (R = r(m, R); !V.done; P++,
        V = p.next())
            V = g(R, m, P, V.value, w),
            V !== null && (e && V.alternate !== null && R.delete(V.key === null ? P : V.key),
            h = o(V, h, P),
            C === null ? x = V : C.sibling = V,
            C = V);
        return e && R.forEach(function(mt) {
            return t(m, mt)
        }),
        W && Xt(m, P),
        x
    }
    function T(m, h, p, w) {
        if (typeof p == "object" && p !== null && p.type === xn && p.key === null && (p = p.props.children),
        typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case li:
                e: {
                    for (var x = p.key, C = h; C !== null; ) {
                        if (C.key === x) {
                            if (x = p.type,
                            x === xn) {
                                if (C.tag === 7) {
                                    n(m, C.sibling),
                                    h = i(C, p.props.children),
                                    h.return = m,
                                    m = h;
                                    break e
                                }
                            } else if (C.elementType === x || typeof x == "object" && x !== null && x.$$typeof === vt && Yu(x) === C.type) {
                                n(m, C.sibling),
                                h = i(C, p.props),
                                h.ref = sr(m, C, p),
                                h.return = m,
                                m = h;
                                break e
                            }
                            n(m, C);
                            break
                        } else
                            t(m, C);
                        C = C.sibling
                    }
                    p.type === xn ? (h = an(p.props.children, m.mode, w, p.key),
                    h.return = m,
                    m = h) : (w = Oi(p.type, p.key, p.props, null, m.mode, w),
                    w.ref = sr(m, h, p),
                    w.return = m,
                    m = w)
                }
                return s(m);
            case wn:
                e: {
                    for (C = p.key; h !== null; ) {
                        if (h.key === C)
                            if (h.tag === 4 && h.stateNode.containerInfo === p.containerInfo && h.stateNode.implementation === p.implementation) {
                                n(m, h.sibling),
                                h = i(h, p.children || []),
                                h.return = m,
                                m = h;
                                break e
                            } else {
                                n(m, h);
                                break
                            }
                        else
                            t(m, h);
                        h = h.sibling
                    }
                    h = ys(p, m.mode, w),
                    h.return = m,
                    m = h
                }
                return s(m);
            case vt:
                return C = p._init,
                T(m, h, C(p._payload), w)
            }
            if (fr(p))
                return y(m, h, p, w);
            if (tr(p))
                return v(m, h, p, w);
            vi(m, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p,
        h !== null && h.tag === 6 ? (n(m, h.sibling),
        h = i(h, p),
        h.return = m,
        m = h) : (n(m, h),
        h = gs(p, m.mode, w),
        h.return = m,
        m = h),
        s(m)) : n(m, h)
    }
    return T
}
var Hn = Qd(!0)
  , Yd = Qd(!1)
  , eo = Ut(null)
  , to = null
  , Mn = null
  , ua = null;
function ca() {
    ua = Mn = to = null
}
function fa(e) {
    var t = eo.current;
    U(eo),
    e._currentValue = t
}
function al(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function In(e, t) {
    to = e,
    ua = Mn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Pe = !0),
    e.firstContext = null)
}
function Be(e) {
    var t = e._currentValue;
    if (ua !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Mn === null) {
            if (to === null)
                throw Error(S(308));
            Mn = e,
            to.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Mn = Mn.next = e;
    return t
}
var nn = null;
function da(e) {
    nn === null ? nn = [e] : nn.push(e)
}
function Xd(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    da(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    dt(e, r)
}
function dt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var wt = !1;
function ha(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Zd(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function st(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Lt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    F & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        dt(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    da(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    dt(e, n)
}
function Di(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        ql(e, n)
    }
}
function Xu(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s,
                n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else
            i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function no(e, t, n, r) {
    var i = e.updateQueue;
    wt = !1;
    var o = i.firstBaseUpdate
      , s = i.lastBaseUpdate
      , l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        s === null ? o = u : s.next = u,
        s = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        l = c.lastBaseUpdate,
        l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u,
        c.lastBaseUpdate = a))
    }
    if (o !== null) {
        var f = i.baseState;
        s = 0,
        c = u = a = null,
        l = o;
        do {
            var d = l.lane
              , g = l.eventTime;
            if ((r & d) === d) {
                c !== null && (c = c.next = {
                    eventTime: g,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var y = e
                      , v = l;
                    switch (d = t,
                    g = n,
                    v.tag) {
                    case 1:
                        if (y = v.payload,
                        typeof y == "function") {
                            f = y.call(g, f, d);
                            break e
                        }
                        f = y;
                        break e;
                    case 3:
                        y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = v.payload,
                        d = typeof y == "function" ? y.call(g, f, d) : y,
                        d == null)
                            break e;
                        f = Q({}, f, d);
                        break e;
                    case 2:
                        wt = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                d = i.effects,
                d === null ? i.effects = [l] : d.push(l))
            } else
                g = {
                    eventTime: g,
                    lane: d,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                c === null ? (u = c = g,
                a = f) : c = c.next = g,
                s |= d;
            if (l = l.next,
            l === null) {
                if (l = i.shared.pending,
                l === null)
                    break;
                d = l,
                l = d.next,
                d.next = null,
                i.lastBaseUpdate = d,
                i.shared.pending = null
            }
        } while (!0);
        if (c === null && (a = f),
        i.baseState = a,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = c,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                s |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            o === null && (i.shared.lanes = 0);
        hn |= s,
        e.lanes = s,
        e.memoizedState = f
    }
}
function Zu(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(S(191, i));
                i.call(r)
            }
        }
}
var br = {}
  , be = Ut(br)
  , Ir = Ut(br)
  , Br = Ut(br);
function rn(e) {
    if (e === br)
        throw Error(S(174));
    return e
}
function pa(e, t) {
    switch (I(Br, t),
    I(Ir, e),
    I(be, br),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : $s(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = $s(t, e)
    }
    U(be),
    I(be, t)
}
function Kn() {
    U(be),
    U(Ir),
    U(Br)
}
function Jd(e) {
    rn(Br.current);
    var t = rn(be.current)
      , n = $s(t, e.type);
    t !== n && (I(Ir, e),
    I(be, n))
}
function ma(e) {
    Ir.current === e && (U(be),
    U(Ir))
}
var H = Ut(0);
function ro(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var cs = [];
function ga() {
    for (var e = 0; e < cs.length; e++)
        cs[e]._workInProgressVersionPrimary = null;
    cs.length = 0
}
var Ai = pt.ReactCurrentDispatcher
  , fs = pt.ReactCurrentBatchConfig
  , dn = 0
  , G = null
  , b = null
  , re = null
  , io = !1
  , xr = !1
  , Ur = 0
  , Sy = 0;
function ce() {
    throw Error(S(321))
}
function ya(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ye(e[n], t[n]))
            return !1;
    return !0
}
function va(e, t, n, r, i, o) {
    if (dn = o,
    G = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Ai.current = e === null || e.memoizedState === null ? Cy : Ey,
    e = n(r, i),
    xr) {
        o = 0;
        do {
            if (xr = !1,
            Ur = 0,
            25 <= o)
                throw Error(S(301));
            o += 1,
            re = b = null,
            t.updateQueue = null,
            Ai.current = Ry,
            e = n(r, i)
        } while (xr)
    }
    if (Ai.current = oo,
    t = b !== null && b.next !== null,
    dn = 0,
    re = b = G = null,
    io = !1,
    t)
        throw Error(S(300));
    return e
}
function wa() {
    var e = Ur !== 0;
    return Ur = 0,
    e
}
function Ze() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return re === null ? G.memoizedState = re = e : re = re.next = e,
    re
}
function Ue() {
    if (b === null) {
        var e = G.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = b.next;
    var t = re === null ? G.memoizedState : re.next;
    if (t !== null)
        re = t,
        b = e;
    else {
        if (e === null)
            throw Error(S(310));
        b = e,
        e = {
            memoizedState: b.memoizedState,
            baseState: b.baseState,
            baseQueue: b.baseQueue,
            queue: b.queue,
            next: null
        },
        re === null ? G.memoizedState = re = e : re = re.next = e
    }
    return re
}
function $r(e, t) {
    return typeof t == "function" ? t(e) : t
}
function ds(e) {
    var t = Ue()
      , n = t.queue;
    if (n === null)
        throw Error(S(311));
    n.lastRenderedReducer = e;
    var r = b
      , i = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next,
            o.next = s
        }
        r.baseQueue = i = o,
        n.pending = null
    }
    if (i !== null) {
        o = i.next,
        r = r.baseState;
        var l = s = null
          , a = null
          , u = o;
        do {
            var c = u.lane;
            if ((dn & c) === c)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = f,
                s = r) : a = a.next = f,
                G.lanes |= c,
                hn |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        a === null ? s = r : a.next = l,
        Ye(r, t.memoizedState) || (Pe = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            o = i.lane,
            G.lanes |= o,
            hn |= o,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function hs(e) {
    var t = Ue()
      , n = t.queue;
    if (n === null)
        throw Error(S(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do
            o = e(o, s.action),
            s = s.next;
        while (s !== i);
        Ye(o, t.memoizedState) || (Pe = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function qd() {}
function bd(e, t) {
    var n = G
      , r = Ue()
      , i = t()
      , o = !Ye(r.memoizedState, i);
    if (o && (r.memoizedState = i,
    Pe = !0),
    r = r.queue,
    xa(nh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || re !== null && re.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Wr(9, th.bind(null, n, r, i, t), void 0, null),
        ie === null)
            throw Error(S(349));
        dn & 30 || eh(n, t, i)
    }
    return i
}
function eh(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = G.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    G.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function th(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    rh(t) && ih(e)
}
function nh(e, t, n) {
    return n(function() {
        rh(t) && ih(e)
    })
}
function rh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ye(e, n)
    } catch {
        return !0
    }
}
function ih(e) {
    var t = dt(e, 1);
    t !== null && Qe(t, e, 1, -1)
}
function Ju(e) {
    var t = Ze();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $r,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Ty.bind(null, G, e),
    [t.memoizedState, e]
}
function Wr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = G.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    G.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function oh() {
    return Ue().memoizedState
}
function _i(e, t, n, r) {
    var i = Ze();
    G.flags |= e,
    i.memoizedState = Wr(1 | t, n, void 0, r === void 0 ? null : r)
}
function Mo(e, t, n, r) {
    var i = Ue();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (b !== null) {
        var s = b.memoizedState;
        if (o = s.destroy,
        r !== null && ya(r, s.deps)) {
            i.memoizedState = Wr(t, n, o, r);
            return
        }
    }
    G.flags |= e,
    i.memoizedState = Wr(1 | t, n, o, r)
}
function qu(e, t) {
    return _i(8390656, 8, e, t)
}
function xa(e, t) {
    return Mo(2048, 8, e, t)
}
function sh(e, t) {
    return Mo(4, 2, e, t)
}
function lh(e, t) {
    return Mo(4, 4, e, t)
}
function ah(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function uh(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Mo(4, 4, ah.bind(null, t, e), n)
}
function Sa() {}
function ch(e, t) {
    var n = Ue();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ya(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function fh(e, t) {
    var n = Ue();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ya(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function dh(e, t, n) {
    return dn & 21 ? (Ye(n, t) || (n = yd(),
    G.lanes |= n,
    hn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Pe = !0),
    e.memoizedState = n)
}
function Py(e, t) {
    var n = O;
    O = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = fs.transition;
    fs.transition = {};
    try {
        e(!1),
        t()
    } finally {
        O = n,
        fs.transition = r
    }
}
function hh() {
    return Ue().memoizedState
}
function ky(e, t, n) {
    var r = Dt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    ph(e))
        mh(t, n);
    else if (n = Xd(e, t, n, r),
    n !== null) {
        var i = ve();
        Qe(n, e, r, i),
        gh(n, t, r)
    }
}
function Ty(e, t, n) {
    var r = Dt(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (ph(e))
        mh(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var s = t.lastRenderedState
                  , l = o(s, n);
                if (i.hasEagerState = !0,
                i.eagerState = l,
                Ye(l, s)) {
                    var a = t.interleaved;
                    a === null ? (i.next = i,
                    da(t)) : (i.next = a.next,
                    a.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = Xd(e, t, i, r),
        n !== null && (i = ve(),
        Qe(n, e, r, i),
        gh(n, t, r))
    }
}
function ph(e) {
    var t = e.alternate;
    return e === G || t !== null && t === G
}
function mh(e, t) {
    xr = io = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function gh(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        ql(e, n)
    }
}
var oo = {
    readContext: Be,
    useCallback: ce,
    useContext: ce,
    useEffect: ce,
    useImperativeHandle: ce,
    useInsertionEffect: ce,
    useLayoutEffect: ce,
    useMemo: ce,
    useReducer: ce,
    useRef: ce,
    useState: ce,
    useDebugValue: ce,
    useDeferredValue: ce,
    useTransition: ce,
    useMutableSource: ce,
    useSyncExternalStore: ce,
    useId: ce,
    unstable_isNewReconciler: !1
}
  , Cy = {
    readContext: Be,
    useCallback: function(e, t) {
        return Ze().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Be,
    useEffect: qu,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        _i(4194308, 4, ah.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return _i(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return _i(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Ze();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Ze();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = ky.bind(null, G, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Ze();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Ju,
    useDebugValue: Sa,
    useDeferredValue: function(e) {
        return Ze().memoizedState = e
    },
    useTransition: function() {
        var e = Ju(!1)
          , t = e[0];
        return e = Py.bind(null, e[1]),
        Ze().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = G
          , i = Ze();
        if (W) {
            if (n === void 0)
                throw Error(S(407));
            n = n()
        } else {
            if (n = t(),
            ie === null)
                throw Error(S(349));
            dn & 30 || eh(r, t, n)
        }
        i.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return i.queue = o,
        qu(nh.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        Wr(9, th.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Ze()
          , t = ie.identifierPrefix;
        if (W) {
            var n = it
              , r = rt;
            n = (r & ~(1 << 32 - Ge(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Ur++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = Sy++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Ey = {
    readContext: Be,
    useCallback: ch,
    useContext: Be,
    useEffect: xa,
    useImperativeHandle: uh,
    useInsertionEffect: sh,
    useLayoutEffect: lh,
    useMemo: fh,
    useReducer: ds,
    useRef: oh,
    useState: function() {
        return ds($r)
    },
    useDebugValue: Sa,
    useDeferredValue: function(e) {
        var t = Ue();
        return dh(t, b.memoizedState, e)
    },
    useTransition: function() {
        var e = ds($r)[0]
          , t = Ue().memoizedState;
        return [e, t]
    },
    useMutableSource: qd,
    useSyncExternalStore: bd,
    useId: hh,
    unstable_isNewReconciler: !1
}
  , Ry = {
    readContext: Be,
    useCallback: ch,
    useContext: Be,
    useEffect: xa,
    useImperativeHandle: uh,
    useInsertionEffect: sh,
    useLayoutEffect: lh,
    useMemo: fh,
    useReducer: hs,
    useRef: oh,
    useState: function() {
        return hs($r)
    },
    useDebugValue: Sa,
    useDeferredValue: function(e) {
        var t = Ue();
        return b === null ? t.memoizedState = e : dh(t, b.memoizedState, e)
    },
    useTransition: function() {
        var e = hs($r)[0]
          , t = Ue().memoizedState;
        return [e, t]
    },
    useMutableSource: qd,
    useSyncExternalStore: bd,
    useId: hh,
    unstable_isNewReconciler: !1
};
function We(e, t) {
    if (e && e.defaultProps) {
        t = Q({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function ul(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : Q({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Lo = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? gn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ve()
          , i = Dt(e)
          , o = st(r, i);
        o.payload = t,
        n != null && (o.callback = n),
        t = Lt(e, o, i),
        t !== null && (Qe(t, e, i, r),
        Di(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ve()
          , i = Dt(e)
          , o = st(r, i);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = Lt(e, o, i),
        t !== null && (Qe(t, e, i, r),
        Di(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ve()
          , r = Dt(e)
          , i = st(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = Lt(e, i, r),
        t !== null && (Qe(t, e, r, n),
        Di(t, e, r))
    }
};
function bu(e, t, n, r, i, o, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Nr(n, r) || !Nr(i, o) : !0
}
function yh(e, t, n) {
    var r = !1
      , i = Ft
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = Be(o) : (i = Te(t) ? cn : ge.current,
    r = t.contextTypes,
    o = (r = r != null) ? $n(e, i) : Ft),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Lo,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function ec(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Lo.enqueueReplaceState(t, t.state, null)
}
function cl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = {},
    ha(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = Be(o) : (o = Te(t) ? cn : ge.current,
    i.context = $n(e, o)),
    i.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (ul(e, t, o, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && Lo.enqueueReplaceState(i, i.state, null),
    no(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function Gn(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += tg(r),
            r = r.return;
        while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function ps(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function fl(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var My = typeof WeakMap == "function" ? WeakMap : Map;
function vh(e, t, n) {
    n = st(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        lo || (lo = !0,
        Sl = r),
        fl(e, t)
    }
    ,
    n
}
function wh(e, t, n) {
    n = st(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            fl(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        fl(e, t),
        typeof r != "function" && (Vt === null ? Vt = new Set([this]) : Vt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function tc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new My;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = $y.bind(null, e, t, n),
    t.then(e, e))
}
function nc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function rc(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = st(-1, 1),
    t.tag = 2,
    Lt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Ly = pt.ReactCurrentOwner
  , Pe = !1;
function ye(e, t, n, r) {
    t.child = e === null ? Yd(t, null, n, r) : Hn(t, e.child, n, r)
}
function ic(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return In(t, i),
    r = va(e, t, n, r, o, i),
    n = wa(),
    e !== null && !Pe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    ht(e, t, i)) : (W && n && sa(t),
    t.flags |= 1,
    ye(e, t, r, i),
    t.child)
}
function oc(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !La(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        xh(e, t, o, r, i)) : (e = Oi(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Nr,
        n(s, r) && e.ref === t.ref)
            return ht(e, t, i)
    }
    return t.flags |= 1,
    e = At(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function xh(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Nr(o, r) && e.ref === t.ref)
            if (Pe = !1,
            t.pendingProps = r = o,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (Pe = !0);
            else
                return t.lanes = e.lanes,
                ht(e, t, i)
    }
    return dl(e, t, n, r, i)
}
function Sh(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            I(Vn, Re),
            Re |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                I(Vn, Re),
                Re |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            I(Vn, Re),
            Re |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        I(Vn, Re),
        Re |= r;
    return ye(e, t, i, n),
    t.child
}
function Ph(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function dl(e, t, n, r, i) {
    var o = Te(n) ? cn : ge.current;
    return o = $n(t, o),
    In(t, i),
    n = va(e, t, n, r, o, i),
    r = wa(),
    e !== null && !Pe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    ht(e, t, i)) : (W && r && sa(t),
    t.flags |= 1,
    ye(e, t, n, i),
    t.child)
}
function sc(e, t, n, r, i) {
    if (Te(n)) {
        var o = !0;
        Ji(t)
    } else
        o = !1;
    if (In(t, i),
    t.stateNode === null)
        ji(e, t),
        yh(t, n, r),
        cl(t, n, r, i),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , l = t.memoizedProps;
        s.props = l;
        var a = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = Be(u) : (u = Te(n) ? cn : ge.current,
        u = $n(t, u));
        var c = n.getDerivedStateFromProps
          , f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && ec(t, s, r, u),
        wt = !1;
        var d = t.memoizedState;
        s.state = d,
        no(t, r, s, i),
        a = t.memoizedState,
        l !== r || d !== a || ke.current || wt ? (typeof c == "function" && (ul(t, n, c, r),
        a = t.memoizedState),
        (l = wt || bu(t, n, l, r, d, a, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        s.props = r,
        s.state = a,
        s.context = u,
        r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        Zd(e, t),
        l = t.memoizedProps,
        u = t.type === t.elementType ? l : We(t.type, l),
        s.props = u,
        f = t.pendingProps,
        d = s.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = Be(a) : (a = Te(n) ? cn : ge.current,
        a = $n(t, a));
        var g = n.getDerivedStateFromProps;
        (c = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== f || d !== a) && ec(t, s, r, a),
        wt = !1,
        d = t.memoizedState,
        s.state = d,
        no(t, r, s, i);
        var y = t.memoizedState;
        l !== f || d !== y || ke.current || wt ? (typeof g == "function" && (ul(t, n, g, r),
        y = t.memoizedState),
        (u = wt || bu(t, n, u, r, d, y, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, a),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, a)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = y),
        s.props = r,
        s.state = y,
        s.context = a,
        r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return hl(e, t, n, r, o, i)
}
function hl(e, t, n, r, i, o) {
    Ph(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return i && Ku(t, n, !1),
        ht(e, t, o);
    r = t.stateNode,
    Ly.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = Hn(t, e.child, null, o),
    t.child = Hn(t, null, l, o)) : ye(e, t, l, o),
    t.memoizedState = r.state,
    i && Ku(t, n, !0),
    t.child
}
function kh(e) {
    var t = e.stateNode;
    t.pendingContext ? Hu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Hu(e, t.context, !1),
    pa(e, t.containerInfo)
}
function lc(e, t, n, r, i) {
    return Wn(),
    aa(i),
    t.flags |= 256,
    ye(e, t, n, r),
    t.child
}
var pl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function ml(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Th(e, t, n) {
    var r = t.pendingProps, i = H.current, o = !1, s = (t.flags & 128) !== 0, l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    I(H, i & 1),
    e === null)
        return ll(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = s) : o = Ao(s, r, 0, null),
        e = an(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = ml(n),
        t.memoizedState = pl,
        e) : Pa(t, s));
    if (i = e.memoizedState,
    i !== null && (l = i.dehydrated,
    l !== null))
        return Vy(e, t, s, r, l, i, n);
    if (o) {
        o = r.fallback,
        s = t.mode,
        i = e.child,
        l = i.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = At(i, a),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        l !== null ? o = At(l, o) : (o = an(o, s, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        s = e.child.memoizedState,
        s = s === null ? ml(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        o.memoizedState = s,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = pl,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = At(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Pa(e, t) {
    return t = Ao({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function wi(e, t, n, r) {
    return r !== null && aa(r),
    Hn(t, e.child, null, n),
    e = Pa(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Vy(e, t, n, r, i, o, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = ps(Error(S(422))),
        wi(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        i = t.mode,
        r = Ao({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        o = an(o, i, s, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && Hn(t, e.child, null, s),
        t.child.memoizedState = ml(s),
        t.memoizedState = pl,
        o);
    if (!(t.mode & 1))
        return wi(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        o = Error(S(419)),
        r = ps(o, r, void 0),
        wi(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0,
    Pe || l) {
        if (r = ie,
        r !== null) {
            switch (s & -s) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
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
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i,
            i !== 0 && i !== o.retryLane && (o.retryLane = i,
            dt(e, i),
            Qe(r, e, i, -1))
        }
        return Ma(),
        r = ps(Error(S(421))),
        wi(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Wy.bind(null, e),
    i._reactRetry = t,
    null) : (e = o.treeContext,
    Me = Mt(i.nextSibling),
    Le = t,
    W = !0,
    Ke = null,
    e !== null && (Fe[Oe++] = rt,
    Fe[Oe++] = it,
    Fe[Oe++] = fn,
    rt = e.id,
    it = e.overflow,
    fn = t),
    t = Pa(t, r.children),
    t.flags |= 4096,
    t)
}
function ac(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    al(e.return, t, n)
}
function ms(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = i)
}
function Ch(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , o = r.tail;
    if (ye(e, t, r.children, n),
    r = H.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && ac(e, n, t);
                else if (e.tag === 19)
                    ac(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (I(H, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && ro(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            ms(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && ro(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            ms(t, !0, n, null, o);
            break;
        case "together":
            ms(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function ji(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function ht(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    hn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(S(153));
    if (t.child !== null) {
        for (e = t.child,
        n = At(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = At(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Dy(e, t, n) {
    switch (t.tag) {
    case 3:
        kh(t),
        Wn();
        break;
    case 5:
        Jd(t);
        break;
    case 1:
        Te(t.type) && Ji(t);
        break;
    case 4:
        pa(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        I(eo, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (I(H, H.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Th(e, t, n) : (I(H, H.current & 1),
            e = ht(e, t, n),
            e !== null ? e.sibling : null);
        I(H, H.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Ch(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        I(H, H.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Sh(e, t, n)
    }
    return ht(e, t, n)
}
var Eh, gl, Rh, Mh;
Eh = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
gl = function() {}
;
Rh = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        rn(be.current);
        var o = null;
        switch (n) {
        case "input":
            i = zs(e, i),
            r = zs(e, r),
            o = [];
            break;
        case "select":
            i = Q({}, i, {
                value: void 0
            }),
            r = Q({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            i = Us(e, i),
            r = Us(e, r),
            o = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Xi)
        }
        Ws(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var l = i[u];
                    for (s in l)
                        l.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Mr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l)
                            !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in a)
                            a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}),
                            n[s] = a[s])
                    } else
                        n || (o || (o = []),
                        o.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Mr.hasOwnProperty(u) ? (a != null && u === "onScroll" && B("scroll", e),
                    o || l === a || (o = [])) : (o = o || []).push(u, a))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
Mh = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function lr(e, t) {
    if (!W)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function fe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Ay(e, t, n) {
    var r = t.pendingProps;
    switch (la(t),
    t.tag) {
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
        return fe(t),
        null;
    case 1:
        return Te(t.type) && Zi(),
        fe(t),
        null;
    case 3:
        return r = t.stateNode,
        Kn(),
        U(ke),
        U(ge),
        ga(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (yi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Ke !== null && (Tl(Ke),
        Ke = null))),
        gl(e, t),
        fe(t),
        null;
    case 5:
        ma(t);
        var i = rn(Br.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Rh(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(S(166));
                return fe(t),
                null
            }
            if (e = rn(be.current),
            yi(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[Je] = t,
                r[zr] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    B("cancel", r),
                    B("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    B("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < hr.length; i++)
                        B(hr[i], r);
                    break;
                case "source":
                    B("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    B("error", r),
                    B("load", r);
                    break;
                case "details":
                    B("toggle", r);
                    break;
                case "input":
                    yu(r, o),
                    B("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    B("invalid", r);
                    break;
                case "textarea":
                    wu(r, o),
                    B("invalid", r)
                }
                Ws(n, o),
                i = null;
                for (var s in o)
                    if (o.hasOwnProperty(s)) {
                        var l = o[s];
                        s === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && gi(r.textContent, l, e),
                        i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && gi(r.textContent, l, e),
                        i = ["children", "" + l]) : Mr.hasOwnProperty(s) && l != null && s === "onScroll" && B("scroll", r)
                    }
                switch (n) {
                case "input":
                    ai(r),
                    vu(r, o, !0);
                    break;
                case "textarea":
                    ai(r),
                    xu(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = Xi)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = nd(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[Je] = t,
                e[zr] = r,
                Eh(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = Hs(n, r),
                    n) {
                    case "dialog":
                        B("cancel", e),
                        B("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        B("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < hr.length; i++)
                            B(hr[i], e);
                        i = r;
                        break;
                    case "source":
                        B("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        B("error", e),
                        B("load", e),
                        i = r;
                        break;
                    case "details":
                        B("toggle", e),
                        i = r;
                        break;
                    case "input":
                        yu(e, r),
                        i = zs(e, r),
                        B("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = Q({}, r, {
                            value: void 0
                        }),
                        B("invalid", e);
                        break;
                    case "textarea":
                        wu(e, r),
                        i = Us(e, r),
                        B("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    Ws(n, i),
                    l = i;
                    for (o in l)
                        if (l.hasOwnProperty(o)) {
                            var a = l[o];
                            o === "style" ? od(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && rd(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Lr(e, a) : typeof a == "number" && Lr(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Mr.hasOwnProperty(o) ? a != null && o === "onScroll" && B("scroll", e) : a != null && Gl(e, o, a, s))
                        }
                    switch (n) {
                    case "input":
                        ai(e),
                        vu(e, r, !1);
                        break;
                    case "textarea":
                        ai(e),
                        xu(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Nt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? Nn(e, !!r.multiple, o, !1) : r.defaultValue != null && Nn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = Xi)
                    }
                    switch (n) {
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
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return fe(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Mh(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(S(166));
            if (n = rn(Br.current),
            rn(be.current),
            yi(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Je] = t,
                (o = r.nodeValue !== n) && (e = Le,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        gi(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && gi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Je] = t,
                t.stateNode = r
        }
        return fe(t),
        null;
    case 13:
        if (U(H),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (W && Me !== null && t.mode & 1 && !(t.flags & 128))
                Gd(),
                Wn(),
                t.flags |= 98560,
                o = !1;
            else if (o = yi(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(S(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(S(317));
                    o[Je] = t
                } else
                    Wn(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                fe(t),
                o = !1
            } else
                Ke !== null && (Tl(Ke),
                Ke = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || H.current & 1 ? ee === 0 && (ee = 3) : Ma())),
        t.updateQueue !== null && (t.flags |= 4),
        fe(t),
        null);
    case 4:
        return Kn(),
        gl(e, t),
        e === null && Fr(t.stateNode.containerInfo),
        fe(t),
        null;
    case 10:
        return fa(t.type._context),
        fe(t),
        null;
    case 17:
        return Te(t.type) && Zi(),
        fe(t),
        null;
    case 19:
        if (U(H),
        o = t.memoizedState,
        o === null)
            return fe(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = o.rendering,
        s === null)
            if (r)
                lr(o, !1);
            else {
                if (ee !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = ro(e),
                        s !== null) {
                            for (t.flags |= 128,
                            lr(o, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                s = o.alternate,
                                s === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = s.childLanes,
                                o.lanes = s.lanes,
                                o.child = s.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = s.memoizedProps,
                                o.memoizedState = s.memoizedState,
                                o.updateQueue = s.updateQueue,
                                o.type = s.type,
                                e = s.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return I(H, H.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && J() > Qn && (t.flags |= 128,
                r = !0,
                lr(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = ro(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    lr(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !s.alternate && !W)
                        return fe(t),
                        null
                } else
                    2 * J() - o.renderingStartTime > Qn && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    lr(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = o.last,
            n !== null ? n.sibling = s : t.child = s,
            o.last = s)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = J(),
        t.sibling = null,
        n = H.current,
        I(H, r ? n & 1 | 2 : n & 1),
        t) : (fe(t),
        null);
    case 22:
    case 23:
        return Ra(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Re & 1073741824 && (fe(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : fe(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(S(156, t.tag))
}
function _y(e, t) {
    switch (la(t),
    t.tag) {
    case 1:
        return Te(t.type) && Zi(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Kn(),
        U(ke),
        U(ge),
        ga(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return ma(t),
        null;
    case 13:
        if (U(H),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(S(340));
            Wn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return U(H),
        null;
    case 4:
        return Kn(),
        null;
    case 10:
        return fa(t.type._context),
        null;
    case 22:
    case 23:
        return Ra(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var xi = !1
  , he = !1
  , jy = typeof WeakSet == "function" ? WeakSet : Set
  , L = null;
function Ln(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Y(e, t, r)
            }
        else
            n.current = null
}
function yl(e, t, n) {
    try {
        n()
    } catch (r) {
        Y(e, t, r)
    }
}
var uc = !1;
function Ny(e, t) {
    if (el = Gi,
    e = _d(),
    oa(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , l = -1
                      , a = -1
                      , u = 0
                      , c = 0
                      , f = e
                      , d = null;
                    t: for (; ; ) {
                        for (var g; f !== n || i !== 0 && f.nodeType !== 3 || (l = s + i),
                        f !== o || r !== 0 && f.nodeType !== 3 || (a = s + r),
                        f.nodeType === 3 && (s += f.nodeValue.length),
                        (g = f.firstChild) !== null; )
                            d = f,
                            f = g;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (d === n && ++u === i && (l = s),
                            d === o && ++c === r && (a = s),
                            (g = f.nextSibling) !== null)
                                break;
                            f = d,
                            d = f.parentNode
                        }
                        f = g
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (tl = {
        focusedElem: e,
        selectionRange: n
    },
    Gi = !1,
    L = t; L !== null; )
        if (t = L,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            L = e;
        else
            for (; L !== null; ) {
                t = L;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var v = y.memoizedProps
                                  , T = y.memoizedState
                                  , m = t.stateNode
                                  , h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : We(t.type, v), T);
                                m.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var p = t.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(S(163))
                        }
                } catch (w) {
                    Y(t, t.return, w)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    L = e;
                    break
                }
                L = t.return
            }
    return y = uc,
    uc = !1,
    y
}
function Sr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0,
                o !== void 0 && yl(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function Vo(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function vl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Lh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Lh(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Je],
    delete t[zr],
    delete t[il],
    delete t[yy],
    delete t[vy])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Vh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function cc(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Vh(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function wl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Xi));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (wl(e, t, n),
        e = e.sibling; e !== null; )
            wl(e, t, n),
            e = e.sibling
}
function xl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (xl(e, t, n),
        e = e.sibling; e !== null; )
            xl(e, t, n),
            e = e.sibling
}
var se = null
  , He = !1;
function gt(e, t, n) {
    for (n = n.child; n !== null; )
        Dh(e, t, n),
        n = n.sibling
}
function Dh(e, t, n) {
    if (qe && typeof qe.onCommitFiberUnmount == "function")
        try {
            qe.onCommitFiberUnmount(Po, n)
        } catch {}
    switch (n.tag) {
    case 5:
        he || Ln(n, t);
    case 6:
        var r = se
          , i = He;
        se = null,
        gt(e, t, n),
        se = r,
        He = i,
        se !== null && (He ? (e = se,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : se.removeChild(n.stateNode));
        break;
    case 18:
        se !== null && (He ? (e = se,
        n = n.stateNode,
        e.nodeType === 8 ? as(e.parentNode, n) : e.nodeType === 1 && as(e, n),
        _r(e)) : as(se, n.stateNode));
        break;
    case 4:
        r = se,
        i = He,
        se = n.stateNode.containerInfo,
        He = !0,
        gt(e, t, n),
        se = r,
        He = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!he && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var o = i
                  , s = o.destroy;
                o = o.tag,
                s !== void 0 && (o & 2 || o & 4) && yl(n, t, s),
                i = i.next
            } while (i !== r)
        }
        gt(e, t, n);
        break;
    case 1:
        if (!he && (Ln(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                Y(n, t, l)
            }
        gt(e, t, n);
        break;
    case 21:
        gt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (he = (r = he) || n.memoizedState !== null,
        gt(e, t, n),
        he = r) : gt(e, t, n);
        break;
    default:
        gt(e, t, n)
    }
}
function fc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new jy),
        t.forEach(function(r) {
            var i = Hy.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function $e(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e
                  , s = t
                  , l = s;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        se = l.stateNode,
                        He = !1;
                        break e;
                    case 3:
                        se = l.stateNode.containerInfo,
                        He = !0;
                        break e;
                    case 4:
                        se = l.stateNode.containerInfo,
                        He = !0;
                        break e
                    }
                    l = l.return
                }
                if (se === null)
                    throw Error(S(160));
                Dh(o, s, i),
                se = null,
                He = !1;
                var a = i.alternate;
                a !== null && (a.return = null),
                i.return = null
            } catch (u) {
                Y(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Ah(t, e),
            t = t.sibling
}
function Ah(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if ($e(t, e),
        Xe(e),
        r & 4) {
            try {
                Sr(3, e, e.return),
                Vo(3, e)
            } catch (v) {
                Y(e, e.return, v)
            }
            try {
                Sr(5, e, e.return)
            } catch (v) {
                Y(e, e.return, v)
            }
        }
        break;
    case 1:
        $e(t, e),
        Xe(e),
        r & 512 && n !== null && Ln(n, n.return);
        break;
    case 5:
        if ($e(t, e),
        Xe(e),
        r & 512 && n !== null && Ln(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                Lr(i, "")
            } catch (v) {
                Y(e, e.return, v)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var o = e.memoizedProps
              , s = n !== null ? n.memoizedProps : o
              , l = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    l === "input" && o.type === "radio" && o.name != null && ed(i, o),
                    Hs(l, s);
                    var u = Hs(l, o);
                    for (s = 0; s < a.length; s += 2) {
                        var c = a[s]
                          , f = a[s + 1];
                        c === "style" ? od(i, f) : c === "dangerouslySetInnerHTML" ? rd(i, f) : c === "children" ? Lr(i, f) : Gl(i, c, f, u)
                    }
                    switch (l) {
                    case "input":
                        Is(i, o);
                        break;
                    case "textarea":
                        td(i, o);
                        break;
                    case "select":
                        var d = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var g = o.value;
                        g != null ? Nn(i, !!o.multiple, g, !1) : d !== !!o.multiple && (o.defaultValue != null ? Nn(i, !!o.multiple, o.defaultValue, !0) : Nn(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[zr] = o
                } catch (v) {
                    Y(e, e.return, v)
                }
        }
        break;
    case 6:
        if ($e(t, e),
        Xe(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(S(162));
            i = e.stateNode,
            o = e.memoizedProps;
            try {
                i.nodeValue = o
            } catch (v) {
                Y(e, e.return, v)
            }
        }
        break;
    case 3:
        if ($e(t, e),
        Xe(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                _r(t.containerInfo)
            } catch (v) {
                Y(e, e.return, v)
            }
        break;
    case 4:
        $e(t, e),
        Xe(e);
        break;
    case 13:
        $e(t, e),
        Xe(e),
        i = e.child,
        i.flags & 8192 && (o = i.memoizedState !== null,
        i.stateNode.isHidden = o,
        !o || i.alternate !== null && i.alternate.memoizedState !== null || (Ca = J())),
        r & 4 && fc(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (he = (u = he) || c,
        $e(t, e),
        he = u) : $e(t, e),
        Xe(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (L = e,
                c = e.child; c !== null; ) {
                    for (f = L = c; L !== null; ) {
                        switch (d = L,
                        g = d.child,
                        d.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Sr(4, d, d.return);
                            break;
                        case 1:
                            Ln(d, d.return);
                            var y = d.stateNode;
                            if (typeof y.componentWillUnmount == "function") {
                                r = d,
                                n = d.return;
                                try {
                                    t = r,
                                    y.props = t.memoizedProps,
                                    y.state = t.memoizedState,
                                    y.componentWillUnmount()
                                } catch (v) {
                                    Y(r, n, v)
                                }
                            }
                            break;
                        case 5:
                            Ln(d, d.return);
                            break;
                        case 22:
                            if (d.memoizedState !== null) {
                                hc(f);
                                continue
                            }
                        }
                        g !== null ? (g.return = d,
                        L = g) : hc(f)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (c === null) {
                        c = f;
                        try {
                            i = f.stateNode,
                            u ? (o = i.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = f.stateNode,
                            a = f.memoizedProps.style,
                            s = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = id("display", s))
                        } catch (v) {
                            Y(e, e.return, v)
                        }
                    }
                } else if (f.tag === 6) {
                    if (c === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (v) {
                            Y(e, e.return, v)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    c === f && (c = null),
                    f = f.return
                }
                c === f && (c = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        $e(t, e),
        Xe(e),
        r & 4 && fc(e);
        break;
    case 21:
        break;
    default:
        $e(t, e),
        Xe(e)
    }
}
function Xe(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Vh(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(S(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (Lr(i, ""),
                r.flags &= -33);
                var o = cc(e);
                xl(e, o, i);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , l = cc(e);
                wl(e, l, s);
                break;
            default:
                throw Error(S(161))
            }
        } catch (a) {
            Y(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Fy(e, t, n) {
    L = e,
    _h(e)
}
function _h(e, t, n) {
    for (var r = (e.mode & 1) !== 0; L !== null; ) {
        var i = L
          , o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || xi;
            if (!s) {
                var l = i.alternate
                  , a = l !== null && l.memoizedState !== null || he;
                l = xi;
                var u = he;
                if (xi = s,
                (he = a) && !u)
                    for (L = i; L !== null; )
                        s = L,
                        a = s.child,
                        s.tag === 22 && s.memoizedState !== null ? pc(i) : a !== null ? (a.return = s,
                        L = a) : pc(i);
                for (; o !== null; )
                    L = o,
                    _h(o),
                    o = o.sibling;
                L = i,
                xi = l,
                he = u
            }
            dc(e)
        } else
            i.subtreeFlags & 8772 && o !== null ? (o.return = i,
            L = o) : dc(e)
    }
}
function dc(e) {
    for (; L !== null; ) {
        var t = L;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        he || Vo(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !he)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : We(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && Zu(t, o, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Zu(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
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
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && _r(f)
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
                        throw Error(S(163))
                    }
                he || t.flags & 512 && vl(t)
            } catch (d) {
                Y(t, t.return, d)
            }
        }
        if (t === e) {
            L = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            L = n;
            break
        }
        L = t.return
    }
}
function hc(e) {
    for (; L !== null; ) {
        var t = L;
        if (t === e) {
            L = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            L = n;
            break
        }
        L = t.return
    }
}
function pc(e) {
    for (; L !== null; ) {
        var t = L;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Vo(4, t)
                } catch (a) {
                    Y(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        Y(t, i, a)
                    }
                }
                var o = t.return;
                try {
                    vl(t)
                } catch (a) {
                    Y(t, o, a)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    vl(t)
                } catch (a) {
                    Y(t, s, a)
                }
            }
        } catch (a) {
            Y(t, t.return, a)
        }
        if (t === e) {
            L = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            L = l;
            break
        }
        L = t.return
    }
}
var Oy = Math.ceil
  , so = pt.ReactCurrentDispatcher
  , ka = pt.ReactCurrentOwner
  , Ie = pt.ReactCurrentBatchConfig
  , F = 0
  , ie = null
  , q = null
  , ae = 0
  , Re = 0
  , Vn = Ut(0)
  , ee = 0
  , Hr = null
  , hn = 0
  , Do = 0
  , Ta = 0
  , Pr = null
  , Se = null
  , Ca = 0
  , Qn = 1 / 0
  , tt = null
  , lo = !1
  , Sl = null
  , Vt = null
  , Si = !1
  , Tt = null
  , ao = 0
  , kr = 0
  , Pl = null
  , Ni = -1
  , Fi = 0;
function ve() {
    return F & 6 ? J() : Ni !== -1 ? Ni : Ni = J()
}
function Dt(e) {
    return e.mode & 1 ? F & 2 && ae !== 0 ? ae & -ae : xy.transition !== null ? (Fi === 0 && (Fi = yd()),
    Fi) : (e = O,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Td(e.type)),
    e) : 1
}
function Qe(e, t, n, r) {
    if (50 < kr)
        throw kr = 0,
        Pl = null,
        Error(S(185));
    Zr(e, n, r),
    (!(F & 2) || e !== ie) && (e === ie && (!(F & 2) && (Do |= n),
    ee === 4 && Pt(e, ae)),
    Ce(e, r),
    n === 1 && F === 0 && !(t.mode & 1) && (Qn = J() + 500,
    Ro && $t()))
}
function Ce(e, t) {
    var n = e.callbackNode;
    xg(e, t);
    var r = Ki(e, e === ie ? ae : 0);
    if (r === 0)
        n !== null && ku(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && ku(n),
        t === 1)
            e.tag === 0 ? wy(mc.bind(null, e)) : Wd(mc.bind(null, e)),
            my(function() {
                !(F & 6) && $t()
            }),
            n = null;
        else {
            switch (vd(r)) {
            case 1:
                n = Jl;
                break;
            case 4:
                n = md;
                break;
            case 16:
                n = Hi;
                break;
            case 536870912:
                n = gd;
                break;
            default:
                n = Hi
            }
            n = Uh(n, jh.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function jh(e, t) {
    if (Ni = -1,
    Fi = 0,
    F & 6)
        throw Error(S(327));
    var n = e.callbackNode;
    if (Bn() && e.callbackNode !== n)
        return null;
    var r = Ki(e, e === ie ? ae : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = uo(e, r);
    else {
        t = r;
        var i = F;
        F |= 2;
        var o = Fh();
        (ie !== e || ae !== t) && (tt = null,
        Qn = J() + 500,
        ln(e, t));
        do
            try {
                By();
                break
            } catch (l) {
                Nh(e, l)
            }
        while (!0);
        ca(),
        so.current = o,
        F = i,
        q !== null ? t = 0 : (ie = null,
        ae = 0,
        t = ee)
    }
    if (t !== 0) {
        if (t === 2 && (i = Xs(e),
        i !== 0 && (r = i,
        t = kl(e, i))),
        t === 1)
            throw n = Hr,
            ln(e, 0),
            Pt(e, r),
            Ce(e, J()),
            n;
        if (t === 6)
            Pt(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !zy(i) && (t = uo(e, r),
            t === 2 && (o = Xs(e),
            o !== 0 && (r = o,
            t = kl(e, o))),
            t === 1))
                throw n = Hr,
                ln(e, 0),
                Pt(e, r),
                Ce(e, J()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(S(345));
            case 2:
                Zt(e, Se, tt);
                break;
            case 3:
                if (Pt(e, r),
                (r & 130023424) === r && (t = Ca + 500 - J(),
                10 < t)) {
                    if (Ki(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        ve(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = rl(Zt.bind(null, e, Se, tt), t);
                    break
                }
                Zt(e, Se, tt);
                break;
            case 4:
                if (Pt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var s = 31 - Ge(r);
                    o = 1 << s,
                    s = t[s],
                    s > i && (i = s),
                    r &= ~o
                }
                if (r = i,
                r = J() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Oy(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = rl(Zt.bind(null, e, Se, tt), r);
                    break
                }
                Zt(e, Se, tt);
                break;
            case 5:
                Zt(e, Se, tt);
                break;
            default:
                throw Error(S(329))
            }
        }
    }
    return Ce(e, J()),
    e.callbackNode === n ? jh.bind(null, e) : null
}
function kl(e, t) {
    var n = Pr;
    return e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
    e = uo(e, t),
    e !== 2 && (t = Se,
    Se = n,
    t !== null && Tl(t)),
    e
}
function Tl(e) {
    Se === null ? Se = e : Se.push.apply(Se, e)
}
function zy(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Ye(o(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Pt(e, t) {
    for (t &= ~Ta,
    t &= ~Do,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Ge(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function mc(e) {
    if (F & 6)
        throw Error(S(327));
    Bn();
    var t = Ki(e, 0);
    if (!(t & 1))
        return Ce(e, J()),
        null;
    var n = uo(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Xs(e);
        r !== 0 && (t = r,
        n = kl(e, r))
    }
    if (n === 1)
        throw n = Hr,
        ln(e, 0),
        Pt(e, t),
        Ce(e, J()),
        n;
    if (n === 6)
        throw Error(S(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Zt(e, Se, tt),
    Ce(e, J()),
    null
}
function Ea(e, t) {
    var n = F;
    F |= 1;
    try {
        return e(t)
    } finally {
        F = n,
        F === 0 && (Qn = J() + 500,
        Ro && $t())
    }
}
function pn(e) {
    Tt !== null && Tt.tag === 0 && !(F & 6) && Bn();
    var t = F;
    F |= 1;
    var n = Ie.transition
      , r = O;
    try {
        if (Ie.transition = null,
        O = 1,
        e)
            return e()
    } finally {
        O = r,
        Ie.transition = n,
        F = t,
        !(F & 6) && $t()
    }
}
function Ra() {
    Re = Vn.current,
    U(Vn)
}
function ln(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    py(n)),
    q !== null)
        for (n = q.return; n !== null; ) {
            var r = n;
            switch (la(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Zi();
                break;
            case 3:
                Kn(),
                U(ke),
                U(ge),
                ga();
                break;
            case 5:
                ma(r);
                break;
            case 4:
                Kn();
                break;
            case 13:
                U(H);
                break;
            case 19:
                U(H);
                break;
            case 10:
                fa(r.type._context);
                break;
            case 22:
            case 23:
                Ra()
            }
            n = n.return
        }
    if (ie = e,
    q = e = At(e.current, null),
    ae = Re = t,
    ee = 0,
    Hr = null,
    Ta = Do = hn = 0,
    Se = Pr = null,
    nn !== null) {
        for (t = 0; t < nn.length; t++)
            if (n = nn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i,
                    r.next = s
                }
                n.pending = r
            }
        nn = null
    }
    return e
}
function Nh(e, t) {
    do {
        var n = q;
        try {
            if (ca(),
            Ai.current = oo,
            io) {
                for (var r = G.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                io = !1
            }
            if (dn = 0,
            re = b = G = null,
            xr = !1,
            Ur = 0,
            ka.current = null,
            n === null || n.return === null) {
                ee = 1,
                Hr = t,
                q = null;
                break
            }
            e: {
                var o = e
                  , s = n.return
                  , l = n
                  , a = t;
                if (t = ae,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , c = l
                      , f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var d = c.alternate;
                        d ? (c.updateQueue = d.updateQueue,
                        c.memoizedState = d.memoizedState,
                        c.lanes = d.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var g = nc(s);
                    if (g !== null) {
                        g.flags &= -257,
                        rc(g, s, l, o, t),
                        g.mode & 1 && tc(o, u, t),
                        t = g,
                        a = u;
                        var y = t.updateQueue;
                        if (y === null) {
                            var v = new Set;
                            v.add(a),
                            t.updateQueue = v
                        } else
                            y.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            tc(o, u, t),
                            Ma();
                            break e
                        }
                        a = Error(S(426))
                    }
                } else if (W && l.mode & 1) {
                    var T = nc(s);
                    if (T !== null) {
                        !(T.flags & 65536) && (T.flags |= 256),
                        rc(T, s, l, o, t),
                        aa(Gn(a, l));
                        break e
                    }
                }
                o = a = Gn(a, l),
                ee !== 4 && (ee = 2),
                Pr === null ? Pr = [o] : Pr.push(o),
                o = s;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var m = vh(o, a, t);
                        Xu(o, m);
                        break e;
                    case 1:
                        l = a;
                        var h = o.type
                          , p = o.stateNode;
                        if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Vt === null || !Vt.has(p)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var w = wh(o, l, t);
                            Xu(o, w);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            zh(n)
        } catch (x) {
            t = x,
            q === n && n !== null && (q = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Fh() {
    var e = so.current;
    return so.current = oo,
    e === null ? oo : e
}
function Ma() {
    (ee === 0 || ee === 3 || ee === 2) && (ee = 4),
    ie === null || !(hn & 268435455) && !(Do & 268435455) || Pt(ie, ae)
}
function uo(e, t) {
    var n = F;
    F |= 2;
    var r = Fh();
    (ie !== e || ae !== t) && (tt = null,
    ln(e, t));
    do
        try {
            Iy();
            break
        } catch (i) {
            Nh(e, i)
        }
    while (!0);
    if (ca(),
    F = n,
    so.current = r,
    q !== null)
        throw Error(S(261));
    return ie = null,
    ae = 0,
    ee
}
function Iy() {
    for (; q !== null; )
        Oh(q)
}
function By() {
    for (; q !== null && !fg(); )
        Oh(q)
}
function Oh(e) {
    var t = Bh(e.alternate, e, Re);
    e.memoizedProps = e.pendingProps,
    t === null ? zh(e) : q = t,
    ka.current = null
}
function zh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = _y(n, t),
            n !== null) {
                n.flags &= 32767,
                q = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                ee = 6,
                q = null;
                return
            }
        } else if (n = Ay(n, t, Re),
        n !== null) {
            q = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            q = t;
            return
        }
        q = t = e
    } while (t !== null);
    ee === 0 && (ee = 5)
}
function Zt(e, t, n) {
    var r = O
      , i = Ie.transition;
    try {
        Ie.transition = null,
        O = 1,
        Uy(e, t, n, r)
    } finally {
        Ie.transition = i,
        O = r
    }
    return null
}
function Uy(e, t, n, r) {
    do
        Bn();
    while (Tt !== null);
    if (F & 6)
        throw Error(S(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(S(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Sg(e, o),
    e === ie && (q = ie = null,
    ae = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Si || (Si = !0,
    Uh(Hi, function() {
        return Bn(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = Ie.transition,
        Ie.transition = null;
        var s = O;
        O = 1;
        var l = F;
        F |= 4,
        ka.current = null,
        Ny(e, n),
        Ah(n, e),
        ly(tl),
        Gi = !!el,
        tl = el = null,
        e.current = n,
        Fy(n),
        dg(),
        F = l,
        O = s,
        Ie.transition = o
    } else
        e.current = n;
    if (Si && (Si = !1,
    Tt = e,
    ao = i),
    o = e.pendingLanes,
    o === 0 && (Vt = null),
    mg(n.stateNode),
    Ce(e, J()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (lo)
        throw lo = !1,
        e = Sl,
        Sl = null,
        e;
    return ao & 1 && e.tag !== 0 && Bn(),
    o = e.pendingLanes,
    o & 1 ? e === Pl ? kr++ : (kr = 0,
    Pl = e) : kr = 0,
    $t(),
    null
}
function Bn() {
    if (Tt !== null) {
        var e = vd(ao)
          , t = Ie.transition
          , n = O;
        try {
            if (Ie.transition = null,
            O = 16 > e ? 16 : e,
            Tt === null)
                var r = !1;
            else {
                if (e = Tt,
                Tt = null,
                ao = 0,
                F & 6)
                    throw Error(S(331));
                var i = F;
                for (F |= 4,
                L = e.current; L !== null; ) {
                    var o = L
                      , s = o.child;
                    if (L.flags & 16) {
                        var l = o.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (L = u; L !== null; ) {
                                    var c = L;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Sr(8, c, o)
                                    }
                                    var f = c.child;
                                    if (f !== null)
                                        f.return = c,
                                        L = f;
                                    else
                                        for (; L !== null; ) {
                                            c = L;
                                            var d = c.sibling
                                              , g = c.return;
                                            if (Lh(c),
                                            c === u) {
                                                L = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = g,
                                                L = d;
                                                break
                                            }
                                            L = g
                                        }
                                }
                            }
                            var y = o.alternate;
                            if (y !== null) {
                                var v = y.child;
                                if (v !== null) {
                                    y.child = null;
                                    do {
                                        var T = v.sibling;
                                        v.sibling = null,
                                        v = T
                                    } while (v !== null)
                                }
                            }
                            L = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null)
                        s.return = o,
                        L = s;
                    else
                        e: for (; L !== null; ) {
                            if (o = L,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Sr(9, o, o.return)
                                }
                            var m = o.sibling;
                            if (m !== null) {
                                m.return = o.return,
                                L = m;
                                break e
                            }
                            L = o.return
                        }
                }
                var h = e.current;
                for (L = h; L !== null; ) {
                    s = L;
                    var p = s.child;
                    if (s.subtreeFlags & 2064 && p !== null)
                        p.return = s,
                        L = p;
                    else
                        e: for (s = h; L !== null; ) {
                            if (l = L,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Vo(9, l)
                                    }
                                } catch (x) {
                                    Y(l, l.return, x)
                                }
                            if (l === s) {
                                L = null;
                                break e
                            }
                            var w = l.sibling;
                            if (w !== null) {
                                w.return = l.return,
                                L = w;
                                break e
                            }
                            L = l.return
                        }
                }
                if (F = i,
                $t(),
                qe && typeof qe.onPostCommitFiberRoot == "function")
                    try {
                        qe.onPostCommitFiberRoot(Po, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            O = n,
            Ie.transition = t
        }
    }
    return !1
}
function gc(e, t, n) {
    t = Gn(n, t),
    t = vh(e, t, 1),
    e = Lt(e, t, 1),
    t = ve(),
    e !== null && (Zr(e, 1, t),
    Ce(e, t))
}
function Y(e, t, n) {
    if (e.tag === 3)
        gc(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                gc(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Vt === null || !Vt.has(r))) {
                    e = Gn(n, e),
                    e = wh(t, e, 1),
                    t = Lt(t, e, 1),
                    e = ve(),
                    t !== null && (Zr(t, 1, e),
                    Ce(t, e));
                    break
                }
            }
            t = t.return
        }
}
function $y(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = ve(),
    e.pingedLanes |= e.suspendedLanes & n,
    ie === e && (ae & n) === n && (ee === 4 || ee === 3 && (ae & 130023424) === ae && 500 > J() - Ca ? ln(e, 0) : Ta |= n),
    Ce(e, t)
}
function Ih(e, t) {
    t === 0 && (e.mode & 1 ? (t = fi,
    fi <<= 1,
    !(fi & 130023424) && (fi = 4194304)) : t = 1);
    var n = ve();
    e = dt(e, t),
    e !== null && (Zr(e, t, n),
    Ce(e, n))
}
function Wy(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Ih(e, n)
}
function Hy(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(S(314))
    }
    r !== null && r.delete(t),
    Ih(e, n)
}
var Bh;
Bh = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ke.current)
            Pe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Pe = !1,
                Dy(e, t, n);
            Pe = !!(e.flags & 131072)
        }
    else
        Pe = !1,
        W && t.flags & 1048576 && Hd(t, bi, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        ji(e, t),
        e = t.pendingProps;
        var i = $n(t, ge.current);
        In(t, n),
        i = va(null, t, r, e, i, n);
        var o = wa();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Te(r) ? (o = !0,
        Ji(t)) : o = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        ha(t),
        i.updater = Lo,
        t.stateNode = i,
        i._reactInternals = t,
        cl(t, r, e, n),
        t = hl(null, t, r, !0, o, n)) : (t.tag = 0,
        W && o && sa(t),
        ye(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (ji(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = Gy(r),
            e = We(r, e),
            i) {
            case 0:
                t = dl(null, t, r, e, n);
                break e;
            case 1:
                t = sc(null, t, r, e, n);
                break e;
            case 11:
                t = ic(null, t, r, e, n);
                break e;
            case 14:
                t = oc(null, t, r, We(r.type, e), n);
                break e
            }
            throw Error(S(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : We(r, i),
        dl(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : We(r, i),
        sc(e, t, r, i, n);
    case 3:
        e: {
            if (kh(t),
            e === null)
                throw Error(S(387));
            r = t.pendingProps,
            o = t.memoizedState,
            i = o.element,
            Zd(e, t),
            no(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    i = Gn(Error(S(423)), t),
                    t = lc(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = Gn(Error(S(424)), t),
                    t = lc(e, t, r, n, i);
                    break e
                } else
                    for (Me = Mt(t.stateNode.containerInfo.firstChild),
                    Le = t,
                    W = !0,
                    Ke = null,
                    n = Yd(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Wn(),
                r === i) {
                    t = ht(e, t, n);
                    break e
                }
                ye(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Jd(t),
        e === null && ll(t),
        r = t.type,
        i = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        s = i.children,
        nl(r, i) ? s = null : o !== null && nl(r, o) && (t.flags |= 32),
        Ph(e, t),
        ye(e, t, s, n),
        t.child;
    case 6:
        return e === null && ll(t),
        null;
    case 13:
        return Th(e, t, n);
    case 4:
        return pa(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Hn(t, null, r, n) : ye(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : We(r, i),
        ic(e, t, r, i, n);
    case 7:
        return ye(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return ye(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return ye(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            o = t.memoizedProps,
            s = i.value,
            I(eo, r._currentValue),
            r._currentValue = s,
            o !== null)
                if (Ye(o.value, s)) {
                    if (o.children === i.children && !ke.current) {
                        t = ht(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var l = o.dependencies;
                        if (l !== null) {
                            s = o.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (o.tag === 1) {
                                        a = st(-1, n & -n),
                                        a.tag = 2;
                                        var u = o.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? a.next = a : (a.next = c.next,
                                            c.next = a),
                                            u.pending = a
                                        }
                                    }
                                    o.lanes |= n,
                                    a = o.alternate,
                                    a !== null && (a.lanes |= n),
                                    al(o.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (o.tag === 10)
                            s = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (s = o.return,
                            s === null)
                                throw Error(S(341));
                            s.lanes |= n,
                            l = s.alternate,
                            l !== null && (l.lanes |= n),
                            al(s, n, t),
                            s = o.sibling
                        } else
                            s = o.child;
                        if (s !== null)
                            s.return = o;
                        else
                            for (s = o; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (o = s.sibling,
                                o !== null) {
                                    o.return = s.return,
                                    s = o;
                                    break
                                }
                                s = s.return
                            }
                        o = s
                    }
            ye(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        In(t, n),
        i = Be(i),
        r = r(i),
        t.flags |= 1,
        ye(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = We(r, t.pendingProps),
        i = We(r.type, i),
        oc(e, t, r, i, n);
    case 15:
        return xh(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : We(r, i),
        ji(e, t),
        t.tag = 1,
        Te(r) ? (e = !0,
        Ji(t)) : e = !1,
        In(t, n),
        yh(t, r, i),
        cl(t, r, i, n),
        hl(null, t, r, !0, e, n);
    case 19:
        return Ch(e, t, n);
    case 22:
        return Sh(e, t, n)
    }
    throw Error(S(156, t.tag))
}
;
function Uh(e, t) {
    return pd(e, t)
}
function Ky(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function ze(e, t, n, r) {
    return new Ky(e,t,n,r)
}
function La(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Gy(e) {
    if (typeof e == "function")
        return La(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Yl)
            return 11;
        if (e === Xl)
            return 14
    }
    return 2
}
function At(e, t) {
    var n = e.alternate;
    return n === null ? (n = ze(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Oi(e, t, n, r, i, o) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        La(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case xn:
            return an(n.children, i, o, t);
        case Ql:
            s = 8,
            i |= 8;
            break;
        case js:
            return e = ze(12, n, t, i | 2),
            e.elementType = js,
            e.lanes = o,
            e;
        case Ns:
            return e = ze(13, n, t, i),
            e.elementType = Ns,
            e.lanes = o,
            e;
        case Fs:
            return e = ze(19, n, t, i),
            e.elementType = Fs,
            e.lanes = o,
            e;
        case Jf:
            return Ao(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Xf:
                    s = 10;
                    break e;
                case Zf:
                    s = 9;
                    break e;
                case Yl:
                    s = 11;
                    break e;
                case Xl:
                    s = 14;
                    break e;
                case vt:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(S(130, e == null ? e : typeof e, ""))
        }
    return t = ze(s, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function an(e, t, n, r) {
    return e = ze(7, e, r, t),
    e.lanes = n,
    e
}
function Ao(e, t, n, r) {
    return e = ze(22, e, r, t),
    e.elementType = Jf,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function gs(e, t, n) {
    return e = ze(6, e, null, t),
    e.lanes = n,
    e
}
function ys(e, t, n) {
    return t = ze(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Qy(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Jo(0),
    this.expirationTimes = Jo(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Jo(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function Va(e, t, n, r, i, o, s, l, a) {
    return e = new Qy(e,t,n,l,a),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = ze(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    ha(o),
    e
}
function Yy(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: wn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function $h(e) {
    if (!e)
        return Ft;
    e = e._reactInternals;
    e: {
        if (gn(e) !== e || e.tag !== 1)
            throw Error(S(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Te(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(S(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Te(n))
            return $d(e, n, t)
    }
    return t
}
function Wh(e, t, n, r, i, o, s, l, a) {
    return e = Va(n, r, !0, e, i, o, s, l, a),
    e.context = $h(null),
    n = e.current,
    r = ve(),
    i = Dt(n),
    o = st(r, i),
    o.callback = t ?? null,
    Lt(n, o, i),
    e.current.lanes = i,
    Zr(e, i, r),
    Ce(e, r),
    e
}
function _o(e, t, n, r) {
    var i = t.current
      , o = ve()
      , s = Dt(i);
    return n = $h(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = st(o, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Lt(i, t, s),
    e !== null && (Qe(e, i, s, o),
    Di(e, i, s)),
    s
}
function co(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function yc(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Da(e, t) {
    yc(e, t),
    (e = e.alternate) && yc(e, t)
}
function Xy() {
    return null
}
var Hh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Aa(e) {
    this._internalRoot = e
}
jo.prototype.render = Aa.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(S(409));
    _o(e, t, null, null)
}
;
jo.prototype.unmount = Aa.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        pn(function() {
            _o(null, e, null, null)
        }),
        t[ft] = null
    }
}
;
function jo(e) {
    this._internalRoot = e
}
jo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Sd();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < St.length && t !== 0 && t < St[n].priority; n++)
            ;
        St.splice(n, 0, e),
        n === 0 && kd(e)
    }
}
;
function _a(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function No(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function vc() {}
function Zy(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = co(s);
                o.call(u)
            }
        }
        var s = Wh(t, r, e, 0, null, !1, !1, "", vc);
        return e._reactRootContainer = s,
        e[ft] = s.current,
        Fr(e.nodeType === 8 ? e.parentNode : e),
        pn(),
        s
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = co(a);
            l.call(u)
        }
    }
    var a = Va(e, 0, !1, null, null, !1, !1, "", vc);
    return e._reactRootContainer = a,
    e[ft] = a.current,
    Fr(e.nodeType === 8 ? e.parentNode : e),
    pn(function() {
        _o(t, a, n, r)
    }),
    a
}
function Fo(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var l = i;
            i = function() {
                var a = co(s);
                l.call(a)
            }
        }
        _o(t, s, e, i)
    } else
        s = Zy(n, t, e, i, r);
    return co(s)
}
wd = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = dr(t.pendingLanes);
            n !== 0 && (ql(t, n | 1),
            Ce(t, J()),
            !(F & 6) && (Qn = J() + 500,
            $t()))
        }
        break;
    case 13:
        pn(function() {
            var r = dt(e, 1);
            if (r !== null) {
                var i = ve();
                Qe(r, e, 1, i)
            }
        }),
        Da(e, 1)
    }
}
;
bl = function(e) {
    if (e.tag === 13) {
        var t = dt(e, 134217728);
        if (t !== null) {
            var n = ve();
            Qe(t, e, 134217728, n)
        }
        Da(e, 134217728)
    }
}
;
xd = function(e) {
    if (e.tag === 13) {
        var t = Dt(e)
          , n = dt(e, t);
        if (n !== null) {
            var r = ve();
            Qe(n, e, t, r)
        }
        Da(e, t)
    }
}
;
Sd = function() {
    return O
}
;
Pd = function(e, t) {
    var n = O;
    try {
        return O = e,
        t()
    } finally {
        O = n
    }
}
;
Gs = function(e, t, n) {
    switch (t) {
    case "input":
        if (Is(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = Eo(r);
                    if (!i)
                        throw Error(S(90));
                    bf(r),
                    Is(r, i)
                }
            }
        }
        break;
    case "textarea":
        td(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Nn(e, !!n.multiple, t, !1)
    }
}
;
ad = Ea;
ud = pn;
var Jy = {
    usingClientEntryPoint: !1,
    Events: [qr, Tn, Eo, sd, ld, Ea]
}
  , ar = {
    findFiberByHostInstance: tn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , qy = {
    bundleType: ar.bundleType,
    version: ar.version,
    rendererPackageName: ar.rendererPackageName,
    rendererConfig: ar.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: pt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = dd(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: ar.findFiberByHostInstance || Xy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pi.isDisabled && Pi.supportsFiber)
        try {
            Po = Pi.inject(qy),
            qe = Pi
        } catch {}
}
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jy;
Ae.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!_a(t))
        throw Error(S(200));
    return Yy(e, t, null, n)
}
;
Ae.createRoot = function(e, t) {
    if (!_a(e))
        throw Error(S(299));
    var n = !1
      , r = ""
      , i = Hh;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = Va(e, 1, !1, null, null, n, !1, r, i),
    e[ft] = t.current,
    Fr(e.nodeType === 8 ? e.parentNode : e),
    new Aa(t)
}
;
Ae.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","),
        Error(S(268, e)));
    return e = dd(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Ae.flushSync = function(e) {
    return pn(e)
}
;
Ae.hydrate = function(e, t, n) {
    if (!No(t))
        throw Error(S(200));
    return Fo(null, e, t, !0, n)
}
;
Ae.hydrateRoot = function(e, t, n) {
    if (!_a(e))
        throw Error(S(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , o = ""
      , s = Hh;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = Wh(t, null, e, 1, n ?? null, i, !1, o, s),
    e[ft] = t.current,
    Fr(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new jo(t)
}
;
Ae.render = function(e, t, n) {
    if (!No(t))
        throw Error(S(200));
    return Fo(null, e, t, !1, n)
}
;
Ae.unmountComponentAtNode = function(e) {
    if (!No(e))
        throw Error(S(40));
    return e._reactRootContainer ? (pn(function() {
        Fo(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[ft] = null
        })
    }),
    !0) : !1
}
;
Ae.unstable_batchedUpdates = Ea;
Ae.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!No(n))
        throw Error(S(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(S(38));
    return Fo(e, t, n, !1, r)
}
;
Ae.version = "18.3.1-next-f1338f8080-20240426";
function Kh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kh)
        } catch (e) {
            console.error(e)
        }
}
Kh(),
Kf.exports = Ae;
var by = Kf.exports
  , wc = by;
As.createRoot = wc.createRoot,
As.hydrateRoot = wc.hydrateRoot;
var Gh = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
}
  , xc = sn.createContext && sn.createContext(Gh)
  , ev = ["attr", "size", "title"];
function tv(e, t) {
    if (e == null)
        return {};
    var n = nv(e, t), r, i;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++)
            r = o[i],
            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}
function nv(e, t) {
    if (e == null)
        return {};
    var n = {};
    for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) >= 0)
                continue;
            n[r] = e[r]
        }
    return n
}
function fo() {
    return fo = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    fo.apply(this, arguments)
}
function Sc(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function ho(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Sc(Object(n), !0).forEach(function(r) {
            rv(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sc(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function rv(e, t, n) {
    return t = iv(t),
    t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function iv(e) {
    var t = ov(e, "string");
    return typeof t == "symbol" ? t : t + ""
}
function ov(e, t) {
    if (typeof e != "object" || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function Qh(e) {
    return e && e.map((t,n)=>sn.createElement(t.tag, ho({
        key: n
    }, t.attr), Qh(t.child)))
}
function qn(e) {
    return t=>sn.createElement(sv, fo({
        attr: ho({}, e.attr)
    }, t), Qh(e.child))
}
function sv(e) {
    var t = n=>{
        var {attr: r, size: i, title: o} = e, s = tv(e, ev), l = i || n.size || "1em", a;
        return n.className && (a = n.className),
        e.className && (a = (a ? a + " " : "") + e.className),
        sn.createElement("svg", fo({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, n.attr, r, s, {
            className: a,
            style: ho(ho({
                color: e.color || n.color
            }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg"
        }), o && sn.createElement("title", null, o), e.children)
    }
    ;
    return xc !== void 0 ? sn.createElement(xc.Consumer, null, n=>t(n)) : t(Gh)
}
function Yh(e) {
    return qn({
        tag: "svg",
        attr: {
            viewBox: "0 0 496 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            },
            child: []
        }]
    })(e)
}
function lv(e) {
    return qn({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            },
            child: []
        }]
    })(e)
}
function av(e) {
    return qn({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
            },
            child: []
        }]
    })(e)
}
function uv(e) {
    return qn({
        tag: "svg",
        attr: {
            viewBox: "0 0 576 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
            },
            child: []
        }]
    })(e)
}
function cv(e) {
    return qn({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
            },
            child: []
        }]
    })(e)
}
function fv(e) {
    return qn({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
            },
            child: []
        }]
    })(e)
}
var $ = (e=>(e.React = "React",
e.NextJs = "Next.js",
e.Vue = "Vue",
e.Tauri = "Tauri",
e.Typescript = "Typescript",
e.Tailwind = "Tailwind",
e.Express = "Express",
e.Flask = "Flask",
e.Python = "Python",
e.Javascript = "Javascript",
e.Storybook = "Storybook",
e.ReactNative = "React Native",
e.Firebase = "Firebase",
e.Sentry = "Sentry",
e))($ || {});
const dv = [{
    title: "food-classification-model",
    desc: "A simple web application to detect types of food using a classification machine learning model.",
    techs: ['Pyhton','streamlit', 'CNN model'],
    live: void 0,
    repository: "https://github.com/24wemy/food-classification-model.git"
}, {
    title: "bike-share",
    desc: "A simple web application for data analysis related to bike rentals.",
    techs: ['Notebook','streamlit', 'Python'],
    live: void 0,
    repository: "https://github.com/24wemy/bike-share.git",
}, {
    title: "YogaScan",
    desc: "A collaborative project focused on developing YogaScan, an Android application that leverages machine learning for pose detection and utilizes Google Cloud for backend services.",
    techs: ['Machine Learning', 'Android', 'Google Cloud'],
    live: void 0,
    repository: "https://github.com/Yogascan",
},{
    title: "Fine Tuning LLM",
    desc: "This repository contains code for fine-tuning a Large Language Model (LLM) on the Universitas Klabat Academic Guidebook dataset using Google Colab and the unsloth library, with the model hosted on Hugging Face.",
    techs: ['Python', 'Natural Language Processing', 'Google Colab', 'unsloth', 'Hugging Face'],
    live: void 0,
    repository: "https://github.com/24wemy/llm_finetuning_klaris"
}, {
    title: "Chatbot_demo",
    desc: "A web application that uses a chatbot as customer service for a restaurant.",
    techs: ['ReactJs', 'Html', 'Css'],
    live: void 0,
    repository: "https://github.com/24wemy/Chatbot_demo.git"
}, {
    title: "s1_theology",
    desc: "The webpage layout for the Faculty of Theology at Universitas Klabat.",
    techs: ['Html','JavaScripts', 'Css'],
    live: void 0,
    repository: "https://github.com/24wemy/s1_theology.git",
}, {
    title: "STT-LLM-TTS",
    desc: "This project develops an advanced voice assistant that uses Whisper for ASR, Phi-3-mini for NLU, and MMS-TTS for text-to-speech to handle and respond to complex user queries.",
    techs: ['Large Language Model', 'Text-To-Speech', 'Python', 'Automatic Speech Recognition', ],
    live: void 0,
    repository: "https://github.com/24wemy/STT-LLM-TTS",
}]
  , Xh = ({badge: e})=>k.jsx("div", {
    className: "border-orange-main border-[1px] px-2 rounded-xl flex items-center justify-center",
    children: k.jsx("span", {
        className: "font-mono text-[10px] font-bold text-orange-main",
        children: e
    })
})
  , hv = "_button_byecn_1"
  , pv = "_slideOut_byecn_1"
  , mv = "_slideIn_byecn_1"
  , gv = {
    button: hv,
    slideOut: pv,
    slideIn: mv
}
  , yv = ({text: e, onClick: t, mainRef: n})=>k.jsx("button", {
    onClick: t,
    className: gv.button,
    onMouseEnter: ()=>{
        var r;
        (r = n.current) == null || r.style.setProperty("--scale", "4")
    }
    ,
    onMouseLeave: ()=>{
        var r;
        (r = n.current) == null || r.style.setProperty("--scale", "1")
    }
    ,
    children: e
})
  , ja = E.createContext({
    transformPagePoint: e=>e,
    isStatic: !1,
    reducedMotion: "never"
})
  , Oo = E.createContext({})
  , zo = E.createContext(null)
  , Na = typeof document < "u"
  , Fa = Na ? E.useLayoutEffect : E.useEffect
  , Zh = E.createContext({
    strict: !1
})
  , Oa = e=>e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , vv = "framerAppearId"
  , Jh = "data-" + Oa(vv)
  , wv = {
    skipAnimations: !1,
    useManualTiming: !1
};
class Pc {
    constructor() {
        this.order = [],
        this.scheduled = new Set
    }
    add(t) {
        if (!this.scheduled.has(t))
            return this.scheduled.add(t),
            this.order.push(t),
            !0
    }
    remove(t) {
        const n = this.order.indexOf(t);
        n !== -1 && (this.order.splice(n, 1),
        this.scheduled.delete(t))
    }
    clear() {
        this.order.length = 0,
        this.scheduled.clear()
    }
}
function xv(e) {
    let t = new Pc
      , n = new Pc
      , r = 0
      , i = !1
      , o = !1;
    const s = new WeakSet
      , l = {
        schedule: (a,u=!1,c=!1)=>{
            const f = c && i
              , d = f ? t : n;
            return u && s.add(a),
            d.add(a) && f && i && (r = t.order.length),
            a
        }
        ,
        cancel: a=>{
            n.remove(a),
            s.delete(a)
        }
        ,
        process: a=>{
            if (i) {
                o = !0;
                return
            }
            if (i = !0,
            [t,n] = [n, t],
            n.clear(),
            r = t.order.length,
            r)
                for (let u = 0; u < r; u++) {
                    const c = t.order[u];
                    s.has(c) && (l.schedule(c),
                    e()),
                    c(a)
                }
            i = !1,
            o && (o = !1,
            l.process(a))
        }
    };
    return l
}
const ki = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , Sv = 40;
function qh(e, t) {
    let n = !1
      , r = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , o = ki.reduce((f,d)=>(f[d] = xv(()=>n = !0),
    f), {})
      , s = f=>{
        o[f].process(i)
    }
      , l = ()=>{
        const f = performance.now();
        n = !1,
        i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, Sv), 1),
        i.timestamp = f,
        i.isProcessing = !0,
        ki.forEach(s),
        i.isProcessing = !1,
        n && t && (r = !1,
        e(l))
    }
      , a = ()=>{
        n = !0,
        r = !0,
        i.isProcessing || e(l)
    }
    ;
    return {
        schedule: ki.reduce((f,d)=>{
            const g = o[d];
            return f[d] = (y,v=!1,T=!1)=>(n || a(),
            g.schedule(y, v, T)),
            f
        }
        , {}),
        cancel: f=>ki.forEach(d=>o[d].cancel(f)),
        state: i,
        steps: o
    }
}
const {schedule: za, cancel: Gx} = qh(queueMicrotask, !1);
function Pv(e, t, n, r) {
    const {visualElement: i} = E.useContext(Oo)
      , o = E.useContext(Zh)
      , s = E.useContext(zo)
      , l = E.useContext(ja).reducedMotion
      , a = E.useRef();
    r = r || o.renderer,
    !a.current && r && (a.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: l
    }));
    const u = a.current;
    E.useInsertionEffect(()=>{
        u && u.update(n, s)
    }
    );
    const c = E.useRef(!!(n[Jh] && !window.HandoffComplete));
    return Fa(()=>{
        u && (za.postRender(u.render),
        c.current && u.animationState && u.animationState.animateChanges())
    }
    ),
    E.useEffect(()=>{
        u && (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        c.current && (c.current = !1,
        window.HandoffComplete = !0))
    }
    ),
    u
}
function Dn(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function kv(e, t, n) {
    return E.useCallback(r=>{
        r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Dn(n) && (n.current = r))
    }
    , [t])
}
function Kr(e) {
    return typeof e == "string" || Array.isArray(e)
}
function Io(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const Ia = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Ba = ["initial", ...Ia];
function Bo(e) {
    return Io(e.animate) || Ba.some(t=>Kr(e[t]))
}
function bh(e) {
    return !!(Bo(e) || e.variants)
}
function Tv(e, t) {
    if (Bo(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || Kr(n) ? n : void 0,
            animate: Kr(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function Cv(e) {
    const {initial: t, animate: n} = Tv(e, E.useContext(Oo));
    return E.useMemo(()=>({
        initial: t,
        animate: n
    }), [kc(t), kc(n)])
}
function kc(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Tc = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , Gr = {};
for (const e in Tc)
    Gr[e] = {
        isEnabled: t=>Tc[e].some(n=>!!t[n])
    };
function Ev(e) {
    for (const t in e)
        Gr[t] = {
            ...Gr[t],
            ...e[t]
        }
}
const Ua = E.createContext({})
  , ep = E.createContext({})
  , Rv = Symbol.for("motionComponentSymbol");
function Mv({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i}) {
    e && Ev(e);
    function o(l, a) {
        let u;
        const c = {
            ...E.useContext(ja),
            ...l,
            layoutId: Lv(l)
        }
          , {isStatic: f} = c
          , d = Cv(l)
          , g = r(l, f);
        if (!f && Na) {
            d.visualElement = Pv(i, g, c, t);
            const y = E.useContext(ep)
              , v = E.useContext(Zh).strict;
            d.visualElement && (u = d.visualElement.loadFeatures(c, v, e, y))
        }
        return k.jsxs(Oo.Provider, {
            value: d,
            children: [u && d.visualElement ? k.jsx(u, {
                visualElement: d.visualElement,
                ...c
            }) : null, n(i, l, kv(g, d.visualElement, a), g, f, d.visualElement)]
        })
    }
    const s = E.forwardRef(o);
    return s[Rv] = i,
    s
}
function Lv({layoutId: e}) {
    const t = E.useContext(Ua).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function Vv(e) {
    function t(r, i={}) {
        return Mv(e(r, i))
    }
    if (typeof Proxy > "u")
        return t;
    const n = new Map;
    return new Proxy(t,{
        get: (r,i)=>(n.has(i) || n.set(i, t(i)),
        n.get(i))
    })
}
const Dv = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function $a(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(Dv.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
const po = {};
function Av(e) {
    Object.assign(po, e)
}
const ei = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , yn = new Set(ei);
function tp(e, {layout: t, layoutId: n}) {
    return yn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!po[e] || e === "opacity")
}
const pe = e=>!!(e && e.getVelocity)
  , _v = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , jv = ei.length;
function Nv(e, {enableHardwareAcceleration: t=!0, allowTransformNone: n=!0}, r, i) {
    let o = "";
    for (let s = 0; s < jv; s++) {
        const l = ei[s];
        if (e[l] !== void 0) {
            const a = _v[l] || l;
            o += `${a}(${e[l]}) `
        }
    }
    return t && !e.z && (o += "translateZ(0)"),
    o = o.trim(),
    i ? o = i(e, r ? "" : o) : n && r && (o = "none"),
    o
}
const np = e=>t=>typeof t == "string" && t.startsWith(e)
  , rp = np("--")
  , Fv = np("var(--")
  , Wa = e=>Fv(e) ? Ov.test(e.split("/*")[0].trim()) : !1
  , Ov = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , zv = (e,t)=>t && typeof e == "number" ? t.transform(e) : e
  , Ot = (e,t,n)=>n > t ? t : n < e ? e : n
  , bn = {
    test: e=>typeof e == "number",
    parse: parseFloat,
    transform: e=>e
}
  , Tr = {
    ...bn,
    transform: e=>Ot(0, 1, e)
}
  , Ti = {
    ...bn,
    default: 1
}
  , Cr = e=>Math.round(e * 1e5) / 1e5
  , Ha = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
  , Iv = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
  , Bv = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function ti(e) {
    return typeof e == "string"
}
const ni = e=>({
    test: t=>ti(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t=>`${t}${e}`
})
  , yt = ni("deg")
  , et = ni("%")
  , D = ni("px")
  , Uv = ni("vh")
  , $v = ni("vw")
  , Cc = {
    ...et,
    parse: e=>et.parse(e) / 100,
    transform: e=>et.transform(e * 100)
}
  , Ec = {
    ...bn,
    transform: Math.round
}
  , ip = {
    borderWidth: D,
    borderTopWidth: D,
    borderRightWidth: D,
    borderBottomWidth: D,
    borderLeftWidth: D,
    borderRadius: D,
    radius: D,
    borderTopLeftRadius: D,
    borderTopRightRadius: D,
    borderBottomRightRadius: D,
    borderBottomLeftRadius: D,
    width: D,
    maxWidth: D,
    height: D,
    maxHeight: D,
    size: D,
    top: D,
    right: D,
    bottom: D,
    left: D,
    padding: D,
    paddingTop: D,
    paddingRight: D,
    paddingBottom: D,
    paddingLeft: D,
    margin: D,
    marginTop: D,
    marginRight: D,
    marginBottom: D,
    marginLeft: D,
    rotate: yt,
    rotateX: yt,
    rotateY: yt,
    rotateZ: yt,
    scale: Ti,
    scaleX: Ti,
    scaleY: Ti,
    scaleZ: Ti,
    skew: yt,
    skewX: yt,
    skewY: yt,
    distance: D,
    translateX: D,
    translateY: D,
    translateZ: D,
    x: D,
    y: D,
    z: D,
    perspective: D,
    transformPerspective: D,
    opacity: Tr,
    originX: Cc,
    originY: Cc,
    originZ: D,
    zIndex: Ec,
    backgroundPositionX: D,
    backgroundPositionY: D,
    fillOpacity: Tr,
    strokeOpacity: Tr,
    numOctaves: Ec
};
function Ka(e, t, n, r) {
    const {style: i, vars: o, transform: s, transformOrigin: l} = e;
    let a = !1
      , u = !1
      , c = !0;
    for (const f in t) {
        const d = t[f];
        if (rp(f)) {
            o[f] = d;
            continue
        }
        const g = ip[f]
          , y = zv(d, g);
        if (yn.has(f)) {
            if (a = !0,
            s[f] = y,
            !c)
                continue;
            d !== (g.default || 0) && (c = !1)
        } else
            f.startsWith("origin") ? (u = !0,
            l[f] = y) : i[f] = y
    }
    if (t.transform || (a || r ? i.transform = Nv(e.transform, n, c, r) : i.transform && (i.transform = "none")),
    u) {
        const {originX: f="50%", originY: d="50%", originZ: g=0} = l;
        i.transformOrigin = `${f} ${d} ${g}`
    }
}
const Ga = ()=>({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function op(e, t, n) {
    for (const r in t)
        !pe(t[r]) && !tp(r, n) && (e[r] = t[r])
}
function Wv({transformTemplate: e}, t, n) {
    return E.useMemo(()=>{
        const r = Ga();
        return Ka(r, t, {
            enableHardwareAcceleration: !n
        }, e),
        Object.assign({}, r.vars, r.style)
    }
    , [t])
}
function Hv(e, t, n) {
    const r = e.style || {}
      , i = {};
    return op(i, r, e),
    Object.assign(i, Wv(e, t, n)),
    i
}
function Kv(e, t, n) {
    const r = {}
      , i = Hv(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1,
    i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
    i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
    r.style = i,
    r
}
const Gv = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function mo(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Gv.has(e)
}
let sp = e=>!mo(e);
function Qv(e) {
    e && (sp = t=>t.startsWith("on") ? !mo(t) : e(t))
}
try {
    Qv(require("@emotion/is-prop-valid").default)
} catch {}
function Yv(e, t, n) {
    const r = {};
    for (const i in e)
        i === "values" && typeof e.values == "object" || (sp(i) || n === !0 && mo(i) || !t && !mo(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
function Rc(e, t, n) {
    return typeof e == "string" ? e : D.transform(t + n * e)
}
function Xv(e, t, n) {
    const r = Rc(t, e.x, e.width)
      , i = Rc(n, e.y, e.height);
    return `${r} ${i}`
}
const Zv = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , Jv = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function qv(e, t, n=1, r=0, i=!0) {
    e.pathLength = 1;
    const o = i ? Zv : Jv;
    e[o.offset] = D.transform(-r);
    const s = D.transform(t)
      , l = D.transform(n);
    e[o.array] = `${s} ${l}`
}
function Qa(e, {attrX: t, attrY: n, attrScale: r, originX: i, originY: o, pathLength: s, pathSpacing: l=1, pathOffset: a=0, ...u}, c, f, d) {
    if (Ka(e, u, c, d),
    f) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: g, style: y, dimensions: v} = e;
    g.transform && (v && (y.transform = g.transform),
    delete g.transform),
    v && (i !== void 0 || o !== void 0 || y.transform) && (y.transformOrigin = Xv(v, i !== void 0 ? i : .5, o !== void 0 ? o : .5)),
    t !== void 0 && (g.x = t),
    n !== void 0 && (g.y = n),
    r !== void 0 && (g.scale = r),
    s !== void 0 && qv(g, s, l, a, !1)
}
const lp = ()=>({
    ...Ga(),
    attrs: {}
})
  , Ya = e=>typeof e == "string" && e.toLowerCase() === "svg";
function bv(e, t, n, r) {
    const i = E.useMemo(()=>{
        const o = lp();
        return Qa(o, t, {
            enableHardwareAcceleration: !1
        }, Ya(r), e.transformTemplate),
        {
            ...o.attrs,
            style: {
                ...o.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const o = {};
        op(o, e.style, e),
        i.style = {
            ...o,
            ...i.style
        }
    }
    return i
}
function e0(e=!1) {
    return (n,r,i,{latestValues: o},s)=>{
        const a = ($a(n) ? bv : Kv)(r, o, s, n)
          , u = Yv(r, typeof n == "string", e)
          , c = n !== E.Fragment ? {
            ...u,
            ...a,
            ref: i
        } : {}
          , {children: f} = r
          , d = E.useMemo(()=>pe(f) ? f.get() : f, [f]);
        return E.createElement(n, {
            ...c,
            children: d
        })
    }
}
function ap(e, {style: t, vars: n}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const o in n)
        e.style.setProperty(o, n[o])
}
const up = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function cp(e, t, n, r) {
    ap(e, t, void 0, r);
    for (const i in t.attrs)
        e.setAttribute(up.has(i) ? i : Oa(i), t.attrs[i])
}
function Xa(e, t, n) {
    var r;
    const {style: i} = e
      , o = {};
    for (const s in i)
        (pe(i[s]) || t.style && pe(t.style[s]) || tp(s, e) || ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[s] = i[s]);
    return o
}
function fp(e, t, n) {
    const r = Xa(e, t, n);
    for (const i in e)
        if (pe(e[i]) || pe(t[i])) {
            const o = ei.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[o] = e[i]
        }
    return r
}
function Za(e, t, n, r={}, i={}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
}
function dp(e) {
    const t = E.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const Cl = e=>Array.isArray(e)
  , t0 = e=>!!(e && typeof e == "object" && e.mix && e.toValue)
  , n0 = e=>Cl(e) ? e[e.length - 1] || 0 : e;
function zi(e) {
    const t = pe(e) ? e.get() : e;
    return t0(t) ? t.toValue() : t
}
function r0({scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n}, r, i, o) {
    const s = {
        latestValues: i0(r, i, o, e),
        renderState: t()
    };
    return n && (s.mount = l=>n(r, l, s)),
    s
}
const hp = e=>(t,n)=>{
    const r = E.useContext(Oo)
      , i = E.useContext(zo)
      , o = ()=>r0(e, t, r, i);
    return n ? o() : dp(o)
}
;
function i0(e, t, n, r) {
    const i = {}
      , o = r(e, {});
    for (const d in o)
        i[d] = zi(o[d]);
    let {initial: s, animate: l} = e;
    const a = Bo(e)
      , u = bh(e);
    t && u && !a && e.inherit !== !1 && (s === void 0 && (s = t.initial),
    l === void 0 && (l = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const f = c ? l : s;
    return f && typeof f != "boolean" && !Io(f) && (Array.isArray(f) ? f : [f]).forEach(g=>{
        const y = Za(e, g);
        if (!y)
            return;
        const {transitionEnd: v, transition: T, ...m} = y;
        for (const h in m) {
            let p = m[h];
            if (Array.isArray(p)) {
                const w = c ? p.length - 1 : 0;
                p = p[w]
            }
            p !== null && (i[h] = p)
        }
        for (const h in v)
            i[h] = v[h]
    }
    ),
    i
}
const me = e=>e
  , {schedule: z, cancel: zt, state: le, steps: vs} = qh(typeof requestAnimationFrame < "u" ? requestAnimationFrame : me, !0)
  , o0 = {
    useVisualState: hp({
        scrapeMotionValuesFromProps: fp,
        createRenderState: lp,
        onMount: (e,t,{renderState: n, latestValues: r})=>{
            z.read(()=>{
                try {
                    n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }
            ),
            z.render(()=>{
                Qa(n, r, {
                    enableHardwareAcceleration: !1
                }, Ya(t.tagName), e.transformTemplate),
                cp(t, n)
            }
            )
        }
    })
}
  , s0 = {
    useVisualState: hp({
        scrapeMotionValuesFromProps: Xa,
        createRenderState: Ga
    })
};
function l0(e, {forwardMotionProps: t=!1}, n, r) {
    return {
        ...$a(e) ? o0 : s0,
        preloadedFeatures: n,
        useRender: e0(t),
        createVisualElement: r,
        Component: e
    }
}
function ot(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    ()=>e.removeEventListener(t, n)
}
const pp = e=>e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Uo(e, t="page") {
    return {
        point: {
            x: e[`${t}X`],
            y: e[`${t}Y`]
        }
    }
}
const a0 = e=>t=>pp(t) && e(t, Uo(t));
function lt(e, t, n, r) {
    return ot(e, t, a0(n), r)
}
const u0 = (e,t)=>n=>t(e(n))
  , at = (...e)=>e.reduce(u0);
function mp(e) {
    let t = null;
    return ()=>{
        const n = ()=>{
            t = null
        }
        ;
        return t === null ? (t = e,
        n) : !1
    }
}
const Mc = mp("dragHorizontal")
  , Lc = mp("dragVertical");
function gp(e) {
    let t = !1;
    if (e === "y")
        t = Lc();
    else if (e === "x")
        t = Mc();
    else {
        const n = Mc()
          , r = Lc();
        n && r ? t = ()=>{
            n(),
            r()
        }
        : (n && n(),
        r && r())
    }
    return t
}
function yp() {
    const e = gp(!0);
    return e ? (e(),
    !1) : !0
}
class Wt {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
function Vc(e, t) {
    const n = t ? "pointerenter" : "pointerleave"
      , r = t ? "onHoverStart" : "onHoverEnd"
      , i = (o,s)=>{
        if (o.pointerType === "touch" || yp())
            return;
        const l = e.getProps();
        e.animationState && l.whileHover && e.animationState.setActive("whileHover", t);
        const a = l[r];
        a && z.postRender(()=>a(o, s))
    }
    ;
    return lt(e.current, n, i, {
        passive: !e.getProps()[r]
    })
}
class c0 extends Wt {
    mount() {
        this.unmount = at(Vc(this.node, !0), Vc(this.node, !1))
    }
    unmount() {}
}
class f0 extends Wt {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = at(ot(this.node.current, "focus", ()=>this.onFocus()), ot(this.node.current, "blur", ()=>this.onBlur()))
    }
    unmount() {}
}
const vp = (e,t)=>t ? e === t ? !0 : vp(e, t.parentElement) : !1;
function ws(e, t) {
    if (!t)
        return;
    const n = new PointerEvent("pointer" + e);
    t(n, Uo(n))
}
class d0 extends Wt {
    constructor() {
        super(...arguments),
        this.removeStartListeners = me,
        this.removeEndListeners = me,
        this.removeAccessibleListeners = me,
        this.startPointerPress = (t,n)=>{
            if (this.isPressing)
                return;
            this.removeEndListeners();
            const r = this.node.getProps()
              , o = lt(window, "pointerup", (l,a)=>{
                if (!this.checkPressEnd())
                    return;
                const {onTap: u, onTapCancel: c, globalTapTarget: f} = this.node.getProps()
                  , d = !f && !vp(this.node.current, l.target) ? c : u;
                d && z.update(()=>d(l, a))
            }
            , {
                passive: !(r.onTap || r.onPointerUp)
            })
              , s = lt(window, "pointercancel", (l,a)=>this.cancelPress(l, a), {
                passive: !(r.onTapCancel || r.onPointerCancel)
            });
            this.removeEndListeners = at(o, s),
            this.startPress(t, n)
        }
        ,
        this.startAccessiblePress = ()=>{
            const t = o=>{
                if (o.key !== "Enter" || this.isPressing)
                    return;
                const s = l=>{
                    l.key !== "Enter" || !this.checkPressEnd() || ws("up", (a,u)=>{
                        const {onTap: c} = this.node.getProps();
                        c && z.postRender(()=>c(a, u))
                    }
                    )
                }
                ;
                this.removeEndListeners(),
                this.removeEndListeners = ot(this.node.current, "keyup", s),
                ws("down", (l,a)=>{
                    this.startPress(l, a)
                }
                )
            }
              , n = ot(this.node.current, "keydown", t)
              , r = ()=>{
                this.isPressing && ws("cancel", (o,s)=>this.cancelPress(o, s))
            }
              , i = ot(this.node.current, "blur", r);
            this.removeAccessibleListeners = at(n, i)
        }
    }
    startPress(t, n) {
        this.isPressing = !0;
        const {onTapStart: r, whileTap: i} = this.node.getProps();
        i && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
        r && z.postRender(()=>r(t, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(),
        this.isPressing = !1,
        this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
        !yp()
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd())
            return;
        const {onTapCancel: r} = this.node.getProps();
        r && z.postRender(()=>r(t, n))
    }
    mount() {
        const t = this.node.getProps()
          , n = lt(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
            passive: !(t.onTapStart || t.onPointerStart)
        })
          , r = ot(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = at(n, r)
    }
    unmount() {
        this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners()
    }
}
const El = new WeakMap
  , xs = new WeakMap
  , h0 = e=>{
    const t = El.get(e.target);
    t && t(e)
}
  , p0 = e=>{
    e.forEach(h0)
}
;
function m0({root: e, ...t}) {
    const n = e || document;
    xs.has(n) || xs.set(n, {});
    const r = xs.get(n)
      , i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(p0,{
        root: e,
        ...t
    })),
    r[i]
}
function g0(e, t, n) {
    const r = m0(t);
    return El.set(e, n),
    r.observe(e),
    ()=>{
        El.delete(e),
        r.unobserve(e)
    }
}
const y0 = {
    some: 0,
    all: 1
};
class v0 extends Wt {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: i="some", once: o} = t
          , s = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : y0[i]
        }
          , l = a=>{
            const {isIntersecting: u} = a;
            if (this.isInView === u || (this.isInView = u,
            o && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: c, onViewportLeave: f} = this.node.getProps()
              , d = u ? c : f;
            d && d(a)
        }
        ;
        return g0(this.node.current, s, l)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(w0(t, n)) && this.startObserver()
    }
    unmount() {}
}
function w0({viewport: e={}}, {viewport: t={}}={}) {
    return n=>e[n] !== t[n]
}
const x0 = {
    inView: {
        Feature: v0
    },
    tap: {
        Feature: d0
    },
    focus: {
        Feature: f0
    },
    hover: {
        Feature: c0
    }
};
function wp(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function S0(e) {
    const t = {};
    return e.values.forEach((n,r)=>t[r] = n.get()),
    t
}
function P0(e) {
    const t = {};
    return e.values.forEach((n,r)=>t[r] = n.getVelocity()),
    t
}
function $o(e, t, n) {
    const r = e.getProps();
    return Za(r, t, n !== void 0 ? n : r.custom, S0(e), P0(e))
}
const _t = e=>e * 1e3
  , ut = e=>e / 1e3
  , k0 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , T0 = e=>({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , C0 = {
    type: "keyframes",
    duration: .8
}
  , E0 = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , R0 = (e,{keyframes: t})=>t.length > 2 ? C0 : yn.has(e) ? e.startsWith("scale") ? T0(t[1]) : k0 : E0;
function M0({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: l, from: a, elapsed: u, ...c}) {
    return !!Object.keys(c).length
}
function Ja(e, t) {
    return e[t] || e.default || e
}
const L0 = e=>e !== null;
function Wo(e, {repeat: t, repeatType: n="loop"}, r) {
    const i = e.filter(L0)
      , o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !o || r === void 0 ? i[o] : r
}
let Ii;
function V0() {
    Ii = void 0
}
const jt = {
    now: ()=>(Ii === void 0 && jt.set(le.isProcessing || wv.useManualTiming ? le.timestamp : performance.now()),
    Ii),
    set: e=>{
        Ii = e,
        queueMicrotask(V0)
    }
}
  , xp = e=>/^0[^.\s]+$/u.test(e);
function D0(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || xp(e) : !0
}
let Rl = me;
const Sp = e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
  , A0 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function _0(e) {
    const t = A0.exec(e);
    if (!t)
        return [, ];
    const [,n,r,i] = t;
    return [`--${n ?? r}`, i]
}
function Pp(e, t, n=1) {
    const [r,i] = _0(e);
    if (!r)
        return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    if (o) {
        const s = o.trim();
        return Sp(s) ? parseFloat(s) : s
    }
    return Wa(i) ? Pp(i, t, n + 1) : i
}
const j0 = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
  , Dc = e=>e === bn || e === D
  , Ac = (e,t)=>parseFloat(e.split(", ")[t])
  , _c = (e,t)=>(n,{transform: r})=>{
    if (r === "none" || !r)
        return 0;
    const i = r.match(/^matrix3d\((.+)\)$/u);
    if (i)
        return Ac(i[1], t);
    {
        const o = r.match(/^matrix\((.+)\)$/u);
        return o ? Ac(o[1], e) : 0
    }
}
  , N0 = new Set(["x", "y", "z"])
  , F0 = ei.filter(e=>!N0.has(e));
function O0(e) {
    const t = [];
    return F0.forEach(n=>{
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t
}
const Yn = {
    width: ({x: e},{paddingLeft: t="0", paddingRight: n="0"})=>e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e},{paddingTop: t="0", paddingBottom: n="0"})=>e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e,{top: t})=>parseFloat(t),
    left: (e,{left: t})=>parseFloat(t),
    bottom: ({y: e},{top: t})=>parseFloat(t) + (e.max - e.min),
    right: ({x: e},{left: t})=>parseFloat(t) + (e.max - e.min),
    x: _c(4, 13),
    y: _c(5, 14)
};
Yn.translateX = Yn.x;
Yn.translateY = Yn.y;
const kp = e=>t=>t.test(e)
  , z0 = {
    test: e=>e === "auto",
    parse: e=>e
}
  , Tp = [bn, D, et, yt, $v, Uv, z0]
  , jc = e=>Tp.find(kp(e))
  , un = new Set;
let Ml = !1
  , Ll = !1;
function Cp() {
    if (Ll) {
        const e = Array.from(un).filter(r=>r.needsMeasurement)
          , t = new Set(e.map(r=>r.element))
          , n = new Map;
        t.forEach(r=>{
            const i = O0(r);
            i.length && (n.set(r, i),
            r.render())
        }
        ),
        e.forEach(r=>r.measureInitialState()),
        t.forEach(r=>{
            r.render();
            const i = n.get(r);
            i && i.forEach(([o,s])=>{
                var l;
                (l = r.getValue(o)) === null || l === void 0 || l.set(s)
            }
            )
        }
        ),
        e.forEach(r=>r.measureEndState()),
        e.forEach(r=>{
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    Ll = !1,
    Ml = !1,
    un.forEach(e=>e.complete()),
    un.clear()
}
function Ep() {
    un.forEach(e=>{
        e.readKeyframes(),
        e.needsMeasurement && (Ll = !0)
    }
    )
}
function I0() {
    Ep(),
    Cp()
}
class qa {
    constructor(t, n, r, i, o, s=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...t],
        this.onComplete = n,
        this.name = r,
        this.motionValue = i,
        this.element = o,
        this.isAsync = s
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (un.add(this),
        Ml || (Ml = !0,
        z.read(Ep),
        z.resolveKeyframes(Cp))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, name: n, element: r, motionValue: i} = this;
        for (let o = 0; o < t.length; o++)
            if (t[o] === null)
                if (o === 0) {
                    const s = i == null ? void 0 : i.get()
                      , l = t[t.length - 1];
                    if (s !== void 0)
                        t[0] = s;
                    else if (r && n) {
                        const a = r.readValue(n, l);
                        a != null && (t[0] = a)
                    }
                    t[0] === void 0 && (t[0] = l),
                    i && s === void 0 && i.set(t[0])
                } else
                    t[o] = t[o - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        un.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        un.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const ba = (e,t)=>n=>!!(ti(n) && Bv.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
  , Rp = (e,t,n)=>r=>{
    if (!ti(r))
        return r;
    const [i,o,s,l] = r.match(Ha);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(o),
        [n]: parseFloat(s),
        alpha: l !== void 0 ? parseFloat(l) : 1
    }
}
  , B0 = e=>Ot(0, 255, e)
  , Ss = {
    ...bn,
    transform: e=>Math.round(B0(e))
}
  , on = {
    test: ba("rgb", "red"),
    parse: Rp("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1})=>"rgba(" + Ss.transform(e) + ", " + Ss.transform(t) + ", " + Ss.transform(n) + ", " + Cr(Tr.transform(r)) + ")"
};
function U0(e) {
    let t = ""
      , n = ""
      , r = ""
      , i = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    i = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    i = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Vl = {
    test: ba("#"),
    parse: U0,
    transform: on.transform
}
  , An = {
    test: ba("hsl", "hue"),
    parse: Rp("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1})=>"hsla(" + Math.round(e) + ", " + et.transform(Cr(t)) + ", " + et.transform(Cr(n)) + ", " + Cr(Tr.transform(r)) + ")"
}
  , de = {
    test: e=>on.test(e) || Vl.test(e) || An.test(e),
    parse: e=>on.test(e) ? on.parse(e) : An.test(e) ? An.parse(e) : Vl.parse(e),
    transform: e=>ti(e) ? e : e.hasOwnProperty("red") ? on.transform(e) : An.transform(e)
};
function $0(e) {
    var t, n;
    return isNaN(e) && ti(e) && (((t = e.match(Ha)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Iv)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Mp = "number"
  , Lp = "color"
  , W0 = "var"
  , H0 = "var("
  , Nc = "${}"
  , K0 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function go(e) {
    const t = e.toString()
      , n = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , i = [];
    let o = 0;
    const l = t.replace(K0, a=>(de.test(a) ? (r.color.push(o),
    i.push(Lp),
    n.push(de.parse(a))) : a.startsWith(H0) ? (r.var.push(o),
    i.push(W0),
    n.push(a)) : (r.number.push(o),
    i.push(Mp),
    n.push(parseFloat(a))),
    ++o,
    Nc)).split(Nc);
    return {
        values: n,
        split: l,
        indexes: r,
        types: i
    }
}
function Vp(e) {
    return go(e).values
}
function Dp(e) {
    const {split: t, types: n} = go(e)
      , r = t.length;
    return i=>{
        let o = "";
        for (let s = 0; s < r; s++)
            if (o += t[s],
            i[s] !== void 0) {
                const l = n[s];
                l === Mp ? o += Cr(i[s]) : l === Lp ? o += de.transform(i[s]) : o += i[s]
            }
        return o
    }
}
const G0 = e=>typeof e == "number" ? 0 : e;
function Q0(e) {
    const t = Vp(e);
    return Dp(e)(t.map(G0))
}
const It = {
    test: $0,
    parse: Vp,
    createTransformer: Dp,
    getAnimatableNone: Q0
}
  , Y0 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function X0(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(Ha) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let o = Y0.has(t) ? 1 : 0;
    return r !== n && (o *= 100),
    t + "(" + o + i + ")"
}
const Z0 = /\b([a-z-]*)\(.*?\)/gu
  , Dl = {
    ...It,
    getAnimatableNone: e=>{
        const t = e.match(Z0);
        return t ? t.map(X0).join(" ") : e
    }
}
  , J0 = {
    ...ip,
    color: de,
    backgroundColor: de,
    outlineColor: de,
    fill: de,
    stroke: de,
    borderColor: de,
    borderTopColor: de,
    borderRightColor: de,
    borderBottomColor: de,
    borderLeftColor: de,
    filter: Dl,
    WebkitFilter: Dl
}
  , eu = e=>J0[e];
function Ap(e, t) {
    let n = eu(e);
    return n !== Dl && (n = It),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const q0 = new Set(["auto", "none", "0"]);
function b0(e, t, n) {
    let r = 0, i;
    for (; r < e.length && !i; ) {
        const o = e[r];
        typeof o == "string" && !q0.has(o) && (i = e[r]),
        r++
    }
    if (i && n)
        for (const o of t)
            e[o] = Ap(n, i)
}
class _p extends qa {
    constructor(t, n, r, i) {
        super(t, n, r, i, i == null ? void 0 : i.owner, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, element: n, name: r} = this;
        if (!n.current)
            return;
        super.readKeyframes();
        for (let a = 0; a < t.length; a++) {
            const u = t[a];
            if (typeof u == "string" && Wa(u)) {
                const c = Pp(u, n.current);
                c !== void 0 && (t[a] = c),
                a === t.length - 1 && (this.finalKeyframe = u)
            }
        }
        if (this.resolveNoneKeyframes(),
        !j0.has(r) || t.length !== 2)
            return;
        const [i,o] = t
          , s = jc(i)
          , l = jc(o);
        if (s !== l)
            if (Dc(s) && Dc(l))
                for (let a = 0; a < t.length; a++) {
                    const u = t[a];
                    typeof u == "string" && (t[a] = parseFloat(u))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: t, name: n} = this
          , r = [];
        for (let i = 0; i < t.length; i++)
            D0(t[i]) && r.push(i);
        r.length && b0(t, r, n)
    }
    measureInitialState() {
        const {element: t, unresolvedKeyframes: n, name: r} = this;
        if (!t.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = Yn[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
        n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var t;
        const {element: n, name: r, unresolvedKeyframes: i} = this;
        if (!n.current)
            return;
        const o = n.getValue(r);
        o && o.jump(this.measuredOrigin, !1);
        const s = i.length - 1
          , l = i[s];
        i[s] = Yn[r](n.measureViewportBox(), window.getComputedStyle(n.current)),
        l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
        !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([a,u])=>{
            n.getValue(a).set(u)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function e1(e) {
    let t;
    return ()=>(t === void 0 && (t = e()),
    t)
}
const Fc = (e,t)=>t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (It.test(e) || e === "0") && !e.startsWith("url("));
function t1(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function n1(e, t, n, r) {
    const i = e[0];
    if (i === null)
        return !1;
    const o = e[e.length - 1]
      , s = Fc(i, t)
      , l = Fc(o, t);
    return !s || !l ? !1 : t1(e) || n === "spring" && r
}
class jp {
    constructor({autoplay: t=!0, delay: n=0, type: r="keyframes", repeat: i=0, repeatDelay: o=0, repeatType: s="loop", ...l}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.options = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: o,
            repeatType: s,
            ...l
        },
        this.updateFinishedPromise()
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && I0(),
        this._resolved
    }
    onKeyframesResolved(t, n) {
        this.hasAttemptedResolve = !0;
        const {name: r, type: i, velocity: o, delay: s, onComplete: l, onUpdate: a, isGenerator: u} = this.options;
        if (!u && !n1(t, r, i, o))
            if (s)
                this.options.duration = 0;
            else {
                a == null || a(Wo(t, this.options, n)),
                l == null || l(),
                this.resolveFinishedPromise();
                return
            }
        const c = this.initPlayback(t, n);
        c !== !1 && (this._resolved = {
            keyframes: t,
            finalKeyframe: n,
            ...c
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(t, n) {
        return this.currentFinishedPromise.then(t, n)
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(t=>{
            this.resolveFinishedPromise = t
        }
        )
    }
}
function Np(e, t) {
    return t ? e * (1e3 / t) : 0
}
const r1 = 5;
function Fp(e, t, n) {
    const r = Math.max(t - r1, 0);
    return Np(n - e(r), t - r)
}
const Ps = .001
  , i1 = .01
  , o1 = 10
  , s1 = .05
  , l1 = 1;
function a1({duration: e=800, bounce: t=.25, velocity: n=0, mass: r=1}) {
    let i, o, s = 1 - t;
    s = Ot(s1, l1, s),
    e = Ot(i1, o1, ut(e)),
    s < 1 ? (i = u=>{
        const c = u * s
          , f = c * e
          , d = c - n
          , g = Al(u, s)
          , y = Math.exp(-f);
        return Ps - d / g * y
    }
    ,
    o = u=>{
        const f = u * s * e
          , d = f * n + n
          , g = Math.pow(s, 2) * Math.pow(u, 2) * e
          , y = Math.exp(-f)
          , v = Al(Math.pow(u, 2), s);
        return (-i(u) + Ps > 0 ? -1 : 1) * ((d - g) * y) / v
    }
    ) : (i = u=>{
        const c = Math.exp(-u * e)
          , f = (u - n) * e + 1;
        return -Ps + c * f
    }
    ,
    o = u=>{
        const c = Math.exp(-u * e)
          , f = (n - u) * (e * e);
        return c * f
    }
    );
    const l = 5 / e
      , a = c1(i, o, l);
    if (e = _t(e),
    isNaN(a))
        return {
            stiffness: 100,
            damping: 10,
            duration: e
        };
    {
        const u = Math.pow(a, 2) * r;
        return {
            stiffness: u,
            damping: s * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const u1 = 12;
function c1(e, t, n) {
    let r = n;
    for (let i = 1; i < u1; i++)
        r = r - e(r) / t(r);
    return r
}
function Al(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const f1 = ["duration", "bounce"]
  , d1 = ["stiffness", "damping", "mass"];
function Oc(e, t) {
    return t.some(n=>e[n] !== void 0)
}
function h1(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Oc(e, d1) && Oc(e, f1)) {
        const n = a1(e);
        t = {
            ...t,
            ...n,
            mass: 1
        },
        t.isResolvedFromDuration = !0
    }
    return t
}
function Op({keyframes: e, restDelta: t, restSpeed: n, ...r}) {
    const i = e[0]
      , o = e[e.length - 1]
      , s = {
        done: !1,
        value: i
    }
      , {stiffness: l, damping: a, mass: u, duration: c, velocity: f, isResolvedFromDuration: d} = h1({
        ...r,
        velocity: -ut(r.velocity || 0)
    })
      , g = f || 0
      , y = a / (2 * Math.sqrt(l * u))
      , v = o - i
      , T = ut(Math.sqrt(l / u))
      , m = Math.abs(v) < 5;
    n || (n = m ? .01 : 2),
    t || (t = m ? .005 : .5);
    let h;
    if (y < 1) {
        const p = Al(T, y);
        h = w=>{
            const x = Math.exp(-y * T * w);
            return o - x * ((g + y * T * v) / p * Math.sin(p * w) + v * Math.cos(p * w))
        }
    } else if (y === 1)
        h = p=>o - Math.exp(-T * p) * (v + (g + T * v) * p);
    else {
        const p = T * Math.sqrt(y * y - 1);
        h = w=>{
            const x = Math.exp(-y * T * w)
              , C = Math.min(p * w, 300);
            return o - x * ((g + y * T * v) * Math.sinh(C) + p * v * Math.cosh(C)) / p
        }
    }
    return {
        calculatedDuration: d && c || null,
        next: p=>{
            const w = h(p);
            if (d)
                s.done = p >= c;
            else {
                let x = g;
                p !== 0 && (y < 1 ? x = Fp(h, p, w) : x = 0);
                const C = Math.abs(x) <= n
                  , R = Math.abs(o - w) <= t;
                s.done = C && R
            }
            return s.value = s.done ? o : w,
            s
        }
    }
}
function zc({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: o=500, modifyTarget: s, min: l, max: a, restDelta: u=.5, restSpeed: c}) {
    const f = e[0]
      , d = {
        done: !1,
        value: f
    }
      , g = P=>l !== void 0 && P < l || a !== void 0 && P > a
      , y = P=>l === void 0 ? a : a === void 0 || Math.abs(l - P) < Math.abs(a - P) ? l : a;
    let v = n * t;
    const T = f + v
      , m = s === void 0 ? T : s(T);
    m !== T && (v = m - f);
    const h = P=>-v * Math.exp(-P / r)
      , p = P=>m + h(P)
      , w = P=>{
        const _ = h(P)
          , V = p(P);
        d.done = Math.abs(_) <= u,
        d.value = d.done ? m : V
    }
    ;
    let x, C;
    const R = P=>{
        g(d.value) && (x = P,
        C = Op({
            keyframes: [d.value, y(d.value)],
            velocity: Fp(p, P, d.value),
            damping: i,
            stiffness: o,
            restDelta: u,
            restSpeed: c
        }))
    }
    ;
    return R(0),
    {
        calculatedDuration: null,
        next: P=>{
            let _ = !1;
            return !C && x === void 0 && (_ = !0,
            w(P),
            R(P)),
            x !== void 0 && P >= x ? C.next(P - x) : (!_ && w(P),
            d)
        }
    }
}
const zp = (e,t,n)=>(((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , p1 = 1e-7
  , m1 = 12;
function g1(e, t, n, r, i) {
    let o, s, l = 0;
    do
        s = t + (n - t) / 2,
        o = zp(s, r, i) - e,
        o > 0 ? n = s : t = s;
    while (Math.abs(o) > p1 && ++l < m1);
    return s
}
function ri(e, t, n, r) {
    if (e === t && n === r)
        return me;
    const i = o=>g1(o, 0, 1, e, n);
    return o=>o === 0 || o === 1 ? o : zp(i(o), t, r)
}
const y1 = ri(.42, 0, 1, 1)
  , v1 = ri(0, 0, .58, 1)
  , tu = ri(.42, 0, .58, 1)
  , w1 = e=>Array.isArray(e) && typeof e[0] != "number"
  , Ip = e=>t=>t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , Bp = e=>t=>1 - e(1 - t)
  , nu = e=>1 - Math.sin(Math.acos(e))
  , Up = Bp(nu)
  , x1 = Ip(nu)
  , $p = ri(.33, 1.53, .69, .99)
  , ru = Bp($p)
  , S1 = Ip(ru)
  , P1 = e=>(e *= 2) < 1 ? .5 * ru(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , Ic = {
    linear: me,
    easeIn: y1,
    easeInOut: tu,
    easeOut: v1,
    circIn: nu,
    circInOut: x1,
    circOut: Up,
    backIn: ru,
    backInOut: S1,
    backOut: $p,
    anticipate: P1
}
  , Bc = e=>{
    if (Array.isArray(e)) {
        Rl(e.length === 4);
        const [t,n,r,i] = e;
        return ri(t, n, r, i)
    } else if (typeof e == "string")
        return Rl(Ic[e] !== void 0),
        Ic[e];
    return e
}
  , Qr = (e,t,n)=>{
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , K = (e,t,n)=>e + (t - e) * n;
function ks(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function k1({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let i = 0
      , o = 0
      , s = 0;
    if (!t)
        i = o = s = n;
    else {
        const l = n < .5 ? n * (1 + t) : n + t - n * t
          , a = 2 * n - l;
        i = ks(a, l, e + 1 / 3),
        o = ks(a, l, e),
        s = ks(a, l, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
const Ts = (e,t,n)=>{
    const r = e * e
      , i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i)
}
  , T1 = [Vl, on, An]
  , C1 = e=>T1.find(t=>t.test(e));
function Uc(e) {
    const t = C1(e);
    let n = t.parse(e);
    return t === An && (n = k1(n)),
    n
}
const $c = (e,t)=>{
    const n = Uc(e)
      , r = Uc(t)
      , i = {
        ...n
    };
    return o=>(i.red = Ts(n.red, r.red, o),
    i.green = Ts(n.green, r.green, o),
    i.blue = Ts(n.blue, r.blue, o),
    i.alpha = K(n.alpha, r.alpha, o),
    on.transform(i))
}
;
function _l(e, t) {
    return n=>n > 0 ? t : e
}
function E1(e, t) {
    return n=>K(e, t, n)
}
function iu(e) {
    return typeof e == "number" ? E1 : typeof e == "string" ? Wa(e) ? _l : de.test(e) ? $c : L1 : Array.isArray(e) ? Wp : typeof e == "object" ? de.test(e) ? $c : R1 : _l
}
function Wp(e, t) {
    const n = [...e]
      , r = n.length
      , i = e.map((o,s)=>iu(o)(o, t[s]));
    return o=>{
        for (let s = 0; s < r; s++)
            n[s] = i[s](o);
        return n
    }
}
function R1(e, t) {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = iu(e[i])(e[i], t[i]));
    return i=>{
        for (const o in r)
            n[o] = r[o](i);
        return n
    }
}
function M1(e, t) {
    var n;
    const r = []
      , i = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let o = 0; o < t.values.length; o++) {
        const s = t.types[o]
          , l = e.indexes[s][i[s]]
          , a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
        r[o] = a,
        i[s]++
    }
    return r
}
const L1 = (e,t)=>{
    const n = It.createTransformer(t)
      , r = go(e)
      , i = go(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? at(Wp(M1(r, i), i.values), n) : _l(e, t)
}
;
function Hp(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? K(e, t, n) : iu(e)(e, t)
}
function V1(e, t, n) {
    const r = []
      , i = n || Hp
      , o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let l = i(e[s], e[s + 1]);
        if (t) {
            const a = Array.isArray(t) ? t[s] || me : t;
            l = at(a, l)
        }
        r.push(l)
    }
    return r
}
function D1(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const o = e.length;
    if (Rl(o === t.length),
    o === 1)
        return ()=>t[0];
    if (o === 2 && e[0] === e[1])
        return ()=>t[1];
    e[0] > e[o - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const s = V1(t, r, i)
      , l = s.length
      , a = u=>{
        let c = 0;
        if (l > 1)
            for (; c < e.length - 2 && !(u < e[c + 1]); c++)
                ;
        const f = Qr(e[c], e[c + 1], u);
        return s[c](f)
    }
    ;
    return n ? u=>a(Ot(e[0], e[o - 1], u)) : a
}
function A1(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = Qr(0, t, r);
        e.push(K(n, 1, i))
    }
}
function _1(e) {
    const t = [0];
    return A1(t, e.length - 1),
    t
}
function j1(e, t) {
    return e.map(n=>n * t)
}
function N1(e, t) {
    return e.map(()=>t || tu).splice(0, e.length - 1)
}
function yo({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const i = w1(r) ? r.map(Bc) : Bc(r)
      , o = {
        done: !1,
        value: t[0]
    }
      , s = j1(n && n.length === t.length ? n : _1(t), e)
      , l = D1(s, t, {
        ease: Array.isArray(i) ? i : N1(t, i)
    });
    return {
        calculatedDuration: e,
        next: a=>(o.value = l(a),
        o.done = a >= e,
        o)
    }
}
const Wc = 2e4;
function F1(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Wc; )
        t += n,
        r = e.next(t);
    return t >= Wc ? 1 / 0 : t
}
const O1 = e=>{
    const t = ({timestamp: n})=>e(n);
    return {
        start: ()=>z.update(t, !0),
        stop: ()=>zt(t),
        now: ()=>le.isProcessing ? le.timestamp : jt.now()
    }
}
  , z1 = {
    decay: zc,
    inertia: zc,
    tween: yo,
    keyframes: yo,
    spring: Op
}
  , I1 = e=>e / 100;
class ou extends jp {
    constructor({KeyframeResolver: t=qa, ...n}) {
        super(n),
        this.holdTime = null,
        this.startTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.state = "idle",
        this.stop = ()=>{
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            const {onStop: l} = this.options;
            l && l()
        }
        ;
        const {name: r, motionValue: i, keyframes: o} = this.options
          , s = (l,a)=>this.onKeyframesResolved(l, a);
        r && i && i.owner ? this.resolver = i.owner.resolveKeyframes(o, s, r, i) : this.resolver = new t(o,s,r,i),
        this.resolver.scheduleResolve()
    }
    initPlayback(t) {
        const {type: n="keyframes", repeat: r=0, repeatDelay: i=0, repeatType: o, velocity: s=0} = this.options
          , l = z1[n] || yo;
        let a, u;
        l !== yo && typeof t[0] != "number" && (a = at(I1, Hp(t[0], t[1])),
        t = [0, 100]);
        const c = l({
            ...this.options,
            keyframes: t
        });
        o === "mirror" && (u = l({
            ...this.options,
            keyframes: [...t].reverse(),
            velocity: -s
        })),
        c.calculatedDuration === null && (c.calculatedDuration = F1(c));
        const {calculatedDuration: f} = c
          , d = f + i
          , g = d * (r + 1) - i;
        return {
            generator: c,
            mirroredGenerator: u,
            mapPercentToKeyframes: a,
            calculatedDuration: f,
            resolvedDuration: d,
            totalDuration: g
        }
    }
    onPostResolved() {
        const {autoplay: t=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
    }
    tick(t, n=!1) {
        const {resolved: r} = this;
        if (!r) {
            const {keyframes: P} = this.options;
            return {
                done: !0,
                value: P[P.length - 1]
            }
        }
        const {finalKeyframe: i, generator: o, mirroredGenerator: s, mapPercentToKeyframes: l, keyframes: a, calculatedDuration: u, totalDuration: c, resolvedDuration: f} = r;
        if (this.startTime === null)
            return o.next(0);
        const {delay: d, repeat: g, repeatType: y, repeatDelay: v, onUpdate: T} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)),
        n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const m = this.currentTime - d * (this.speed >= 0 ? 1 : -1)
          , h = this.speed >= 0 ? m < 0 : m > c;
        this.currentTime = Math.max(m, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let p = this.currentTime
          , w = o;
        if (g) {
            const P = Math.min(this.currentTime, c) / f;
            let _ = Math.floor(P)
              , V = P % 1;
            !V && P >= 1 && (V = 1),
            V === 1 && _--,
            _ = Math.min(_, g + 1),
            !!(_ % 2) && (y === "reverse" ? (V = 1 - V,
            v && (V -= v / f)) : y === "mirror" && (w = s)),
            p = Ot(0, 1, V) * f
        }
        const x = h ? {
            done: !1,
            value: a[0]
        } : w.next(p);
        l && (x.value = l(x.value));
        let {done: C} = x;
        !h && u !== null && (C = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const R = this.holdTime === null && (this.state === "finished" || this.state === "running" && C);
        return R && i !== void 0 && (x.value = Wo(a, this.options, i)),
        T && T(x.value),
        R && this.finish(),
        x
    }
    get duration() {
        const {resolved: t} = this;
        return t ? ut(t.calculatedDuration) : 0
    }
    get time() {
        return ut(this.currentTime)
    }
    set time(t) {
        t = _t(t),
        this.currentTime = t,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t,
        n && (this.time = ut(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const {driver: t=O1, onPlay: n} = this.options;
        this.driver || (this.driver = t(i=>this.tick(i))),
        n && n();
        const r = this.driver.now();
        this.holdTime !== null ? this.startTime = r - this.holdTime : (!this.startTime || this.state === "finished") && (this.startTime = r),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var t;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: t} = this.options;
        t && t()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
        this.tick(t, !0)
    }
}
const Kp = e=>Array.isArray(e) && typeof e[0] == "number";
function Gp(e) {
    return !!(!e || typeof e == "string" && e in su || Kp(e) || Array.isArray(e) && e.every(Gp))
}
const pr = ([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , su = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: pr([0, .65, .55, 1]),
    circOut: pr([.55, 0, 1, .45]),
    backIn: pr([.31, .01, .66, -.59]),
    backOut: pr([.33, 1.53, .69, .99])
};
function B1(e) {
    return Qp(e) || su.easeOut
}
function Qp(e) {
    if (e)
        return Kp(e) ? pr(e) : Array.isArray(e) ? e.map(B1) : su[e]
}
function U1(e, t, n, {delay: r=0, duration: i=300, repeat: o=0, repeatType: s="loop", ease: l, times: a}={}) {
    const u = {
        [t]: n
    };
    a && (u.offset = a);
    const c = Qp(l);
    return Array.isArray(c) && (u.easing = c),
    e.animate(u, {
        delay: r,
        duration: i,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: o + 1,
        direction: s === "reverse" ? "alternate" : "normal"
    })
}
const $1 = e1(()=>Object.hasOwnProperty.call(Element.prototype, "animate"))
  , W1 = new Set(["opacity", "clipPath", "filter", "transform"])
  , vo = 10
  , H1 = 2e4;
function K1(e) {
    return e.type === "spring" || e.name === "backgroundColor" || !Gp(e.ease)
}
function G1(e, t) {
    const n = new ou({
        ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let r = {
        done: !1,
        value: e[0]
    };
    const i = [];
    let o = 0;
    for (; !r.done && o < H1; )
        r = n.sample(o),
        i.push(r.value),
        o += vo;
    return {
        times: void 0,
        keyframes: i,
        duration: o - vo,
        ease: "linear"
    }
}
class Hc extends jp {
    constructor(t) {
        super(t);
        const {name: n, motionValue: r, keyframes: i} = this.options;
        this.resolver = new _p(i,(o,s)=>this.onKeyframesResolved(o, s),n,r),
        this.resolver.scheduleResolve()
    }
    initPlayback(t, n) {
        var r;
        let {duration: i=300, times: o, ease: s, type: l, motionValue: a, name: u} = this.options;
        if (!(!((r = a.owner) === null || r === void 0) && r.current))
            return !1;
        if (K1(this.options)) {
            const {onComplete: f, onUpdate: d, motionValue: g, ...y} = this.options
              , v = G1(t, y);
            t = v.keyframes,
            t.length === 1 && (t[1] = t[0]),
            i = v.duration,
            o = v.times,
            s = v.ease,
            l = "keyframes"
        }
        const c = U1(a.owner.current, u, t, {
            ...this.options,
            duration: i,
            times: o,
            ease: s
        });
        return c.startTime = jt.now(),
        this.pendingTimeline ? (c.timeline = this.pendingTimeline,
        this.pendingTimeline = void 0) : c.onfinish = ()=>{
            const {onComplete: f} = this.options;
            a.set(Wo(t, this.options, n)),
            f && f(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: c,
            duration: i,
            times: o,
            type: l,
            ease: s,
            keyframes: t
        }
    }
    get duration() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {duration: n} = t;
        return ut(n)
    }
    get time() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {animation: n} = t;
        return ut(n.currentTime || 0)
    }
    set time(t) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: r} = n;
        r.currentTime = _t(t)
    }
    get speed() {
        const {resolved: t} = this;
        if (!t)
            return 1;
        const {animation: n} = t;
        return n.playbackRate
    }
    set speed(t) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: r} = n;
        r.playbackRate = t
    }
    get state() {
        const {resolved: t} = this;
        if (!t)
            return "idle";
        const {animation: n} = t;
        return n.playState
    }
    attachTimeline(t) {
        if (!this._resolved)
            this.pendingTimeline = t;
        else {
            const {resolved: n} = this;
            if (!n)
                return me;
            const {animation: r} = n;
            r.timeline = t,
            r.onfinish = null
        }
        return me
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.playState === "finished" && this.updateFinishedPromise(),
        n.play()
    }
    pause() {
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n, keyframes: r, duration: i, type: o, ease: s, times: l} = t;
        if (!(n.playState === "idle" || n.playState === "finished")) {
            if (this.time) {
                const {motionValue: a, onUpdate: u, onComplete: c, ...f} = this.options
                  , d = new ou({
                    ...f,
                    keyframes: r,
                    duration: i,
                    type: o,
                    ease: s,
                    times: l,
                    isGenerator: !0
                })
                  , g = _t(this.time);
                a.setWithVelocity(d.sample(g - vo).value, d.sample(g).value, vo)
            }
            this.cancel()
        }
    }
    complete() {
        const {resolved: t} = this;
        t && t.animation.finish()
    }
    cancel() {
        const {resolved: t} = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const {motionValue: n, name: r, repeatDelay: i, repeatType: o, damping: s, type: l} = t;
        return $1() && r && W1.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate && !i && o !== "mirror" && s !== 0 && l !== "inertia"
    }
}
const lu = (e,t,n,r={},i,o)=>s=>{
    const l = Ja(r, e) || {}
      , a = l.delay || r.delay || 0;
    let {elapsed: u=0} = r;
    u = u - _t(a);
    let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...l,
        delay: -u,
        onUpdate: d=>{
            t.set(d),
            l.onUpdate && l.onUpdate(d)
        }
        ,
        onComplete: ()=>{
            s(),
            l.onComplete && l.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: o ? void 0 : i
    };
    M0(l) || (c = {
        ...c,
        ...R0(e, c)
    }),
    c.duration && (c.duration = _t(c.duration)),
    c.repeatDelay && (c.repeatDelay = _t(c.repeatDelay)),
    c.from !== void 0 && (c.keyframes[0] = c.from);
    let f = !1;
    if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0,
    c.delay === 0 && (f = !0)),
    f && !o && t.get() !== void 0) {
        const d = Wo(c.keyframes, l);
        if (d !== void 0) {
            z.update(()=>{
                c.onUpdate(d),
                c.onComplete()
            }
            );
            return
        }
    }
    return !o && Hc.supports(c) ? new Hc(c) : new ou(c)
}
;
function wo(e) {
    return !!(pe(e) && e.add)
}
function au(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function uu(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class cu {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return au(this.subscriptions, t),
        ()=>uu(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let o = 0; o < i; o++) {
                    const s = this.subscriptions[o];
                    s && s(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const Kc = 30
  , Q1 = e=>!isNaN(parseFloat(e));
class Y1 {
    constructor(t, n={}) {
        this.version = "11.1.9",
        this.canTrackVelocity = !1,
        this.events = {},
        this.updateAndNotify = (r,i=!0)=>{
            const o = jt.now();
            this.updatedAt !== o && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.canTrackVelocity = Q1(this.current),
        this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
        this.updatedAt = jt.now()
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new cu);
        const r = this.events[t].add(n);
        return t === "change" ? ()=>{
            r(),
            z.read(()=>{
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n=!0) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = jt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Kc)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Kc);
        return Np(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
        new Promise(n=>{
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then(()=>{
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Yr(e, t) {
    return new Y1(e,t)
}
function X1(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Yr(n))
}
function Z1(e, t) {
    const n = $o(e, t);
    let {transitionEnd: r={}, transition: i={}, ...o} = n || {};
    o = {
        ...o,
        ...r
    };
    for (const s in o) {
        const l = n0(o[s]);
        X1(e, s, l)
    }
}
function J1({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function Yp(e, t, {delay: n=0, transitionOverride: r, type: i}={}) {
    var o;
    let {transition: s=e.getDefaultTransition(), transitionEnd: l, ...a} = t;
    const u = e.getValue("willChange");
    r && (s = r);
    const c = []
      , f = i && e.animationState && e.animationState.getState()[i];
    for (const d in a) {
        const g = e.getValue(d, (o = e.latestValues[d]) !== null && o !== void 0 ? o : null)
          , y = a[d];
        if (y === void 0 || f && J1(f, d))
            continue;
        const v = {
            delay: n,
            elapsed: 0,
            ...Ja(s || {}, d)
        };
        let T = !1;
        if (window.HandoffAppearAnimations) {
            const p = e.getProps()[Jh];
            if (p) {
                const w = window.HandoffAppearAnimations(p, d);
                w !== null && (v.elapsed = w,
                T = !0)
            }
        }
        g.start(lu(d, g, y, e.shouldReduceMotion && yn.has(d) ? {
            type: !1
        } : v, e, T));
        const m = g.animation;
        m && (wo(u) && (u.add(d),
        m.then(()=>u.remove(d))),
        c.push(m))
    }
    return l && Promise.all(c).then(()=>{
        z.update(()=>{
            l && Z1(e, l)
        }
        )
    }
    ),
    c
}
function jl(e, t, n={}) {
    var r;
    const i = $o(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
    let {transition: o=e.getDefaultTransition() || {}} = i || {};
    n.transitionOverride && (o = n.transitionOverride);
    const s = i ? ()=>Promise.all(Yp(e, i, n)) : ()=>Promise.resolve()
      , l = e.variantChildren && e.variantChildren.size ? (u=0)=>{
        const {delayChildren: c=0, staggerChildren: f, staggerDirection: d} = o;
        return q1(e, t, c + u, f, d, n)
    }
    : ()=>Promise.resolve()
      , {when: a} = o;
    if (a) {
        const [u,c] = a === "beforeChildren" ? [s, l] : [l, s];
        return u().then(()=>c())
    } else
        return Promise.all([s(), l(n.delay)])
}
function q1(e, t, n=0, r=0, i=1, o) {
    const s = []
      , l = (e.variantChildren.size - 1) * r
      , a = i === 1 ? (u=0)=>u * r : (u=0)=>l - u * r;
    return Array.from(e.variantChildren).sort(b1).forEach((u,c)=>{
        u.notify("AnimationStart", t),
        s.push(jl(u, t, {
            ...o,
            delay: n + a(c)
        }).then(()=>u.notify("AnimationComplete", t)))
    }
    ),
    Promise.all(s)
}
function b1(e, t) {
    return e.sortNodePosition(t)
}
function ew(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(o=>jl(e, o, n));
        r = Promise.all(i)
    } else if (typeof t == "string")
        r = jl(e, t, n);
    else {
        const i = typeof t == "function" ? $o(e, t, n.custom) : t;
        r = Promise.all(Yp(e, i, n))
    }
    return r.then(()=>{
        z.postRender(()=>{
            e.notify("AnimationComplete", t)
        }
        )
    }
    )
}
const tw = [...Ia].reverse()
  , nw = Ia.length;
function rw(e) {
    return t=>Promise.all(t.map(({animation: n, options: r})=>ew(e, n, r)))
}
function iw(e) {
    let t = rw(e);
    const n = sw();
    let r = !0;
    const i = a=>(u,c)=>{
        var f;
        const d = $o(e, c, a === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
        if (d) {
            const {transition: g, transitionEnd: y, ...v} = d;
            u = {
                ...u,
                ...v,
                ...y
            }
        }
        return u
    }
    ;
    function o(a) {
        t = a(e)
    }
    function s(a) {
        const u = e.getProps()
          , c = e.getVariantContext(!0) || {}
          , f = []
          , d = new Set;
        let g = {}
          , y = 1 / 0;
        for (let T = 0; T < nw; T++) {
            const m = tw[T]
              , h = n[m]
              , p = u[m] !== void 0 ? u[m] : c[m]
              , w = Kr(p)
              , x = m === a ? h.isActive : null;
            x === !1 && (y = T);
            let C = p === c[m] && p !== u[m] && w;
            if (C && r && e.manuallyAnimateOnMount && (C = !1),
            h.protectedKeys = {
                ...g
            },
            !h.isActive && x === null || !p && !h.prevProp || Io(p) || typeof p == "boolean")
                continue;
            let P = ow(h.prevProp, p) || m === a && h.isActive && !C && w || T > y && w
              , _ = !1;
            const V = Array.isArray(p) ? p : [p];
            let te = V.reduce(i(m), {});
            x === !1 && (te = {});
            const {prevResolvedValues: mt={}} = h
              , Ht = {
                ...mt,
                ...te
            }
              , er = oe=>{
                P = !0,
                d.has(oe) && (_ = !0,
                d.delete(oe)),
                h.needsAnimating[oe] = !0;
                const Ee = e.getValue(oe);
                Ee && (Ee.liveStyle = !1)
            }
            ;
            for (const oe in Ht) {
                const Ee = te[oe]
                  , Kt = mt[oe];
                if (g.hasOwnProperty(oe))
                    continue;
                let M = !1;
                Cl(Ee) && Cl(Kt) ? M = !wp(Ee, Kt) : M = Ee !== Kt,
                M ? Ee != null ? er(oe) : d.add(oe) : Ee !== void 0 && d.has(oe) ? er(oe) : h.protectedKeys[oe] = !0
            }
            h.prevProp = p,
            h.prevResolvedValues = te,
            h.isActive && (g = {
                ...g,
                ...te
            }),
            r && e.blockInitialAnimation && (P = !1),
            P && (!C || _) && f.push(...V.map(oe=>({
                animation: oe,
                options: {
                    type: m
                }
            })))
        }
        if (d.size) {
            const T = {};
            d.forEach(m=>{
                const h = e.getBaseTarget(m)
                  , p = e.getValue(m);
                p && (p.liveStyle = !0),
                T[m] = h ?? null
            }
            ),
            f.push({
                animation: T
            })
        }
        let v = !!f.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (v = !1),
        r = !1,
        v ? t(f) : Promise.resolve()
    }
    function l(a, u) {
        var c;
        if (n[a].isActive === u)
            return Promise.resolve();
        (c = e.variantChildren) === null || c === void 0 || c.forEach(d=>{
            var g;
            return (g = d.animationState) === null || g === void 0 ? void 0 : g.setActive(a, u)
        }
        ),
        n[a].isActive = u;
        const f = s(a);
        for (const d in n)
            n[d].protectedKeys = {};
        return f
    }
    return {
        animateChanges: s,
        setActive: l,
        setAnimateFunction: o,
        getState: ()=>n
    }
}
function ow(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !wp(t, e) : !1
}
function Yt(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function sw() {
    return {
        animate: Yt(!0),
        whileInView: Yt(),
        whileHover: Yt(),
        whileTap: Yt(),
        whileDrag: Yt(),
        whileFocus: Yt(),
        exit: Yt()
    }
}
class lw extends Wt {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = iw(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        this.unmount(),
        Io(t) && (this.unmount = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
let aw = 0;
class uw extends Wt {
    constructor() {
        super(...arguments),
        this.id = aw++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r)
            return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then(()=>n(this.id))
    }
    mount() {
        const {register: t} = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const cw = {
    animation: {
        Feature: lw
    },
    exit: {
        Feature: uw
    }
}
  , Gc = (e,t)=>Math.abs(e - t);
function fw(e, t) {
    const n = Gc(e.x, t.x)
      , r = Gc(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class Xp {
    constructor(t, n, {transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = ()=>{
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const f = Es(this.lastMoveEventInfo, this.history)
              , d = this.startEvent !== null
              , g = fw(f.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!d && !g)
                return;
            const {point: y} = f
              , {timestamp: v} = le;
            this.history.push({
                ...y,
                timestamp: v
            });
            const {onStart: T, onMove: m} = this.handlers;
            d || (T && T(this.lastMoveEvent, f),
            this.startEvent = this.lastMoveEvent),
            m && m(this.lastMoveEvent, f)
        }
        ,
        this.handlePointerMove = (f,d)=>{
            this.lastMoveEvent = f,
            this.lastMoveEventInfo = Cs(d, this.transformPagePoint),
            z.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (f,d)=>{
            this.end();
            const {onEnd: g, onSessionEnd: y, resumeAnimation: v} = this.handlers;
            if (this.dragSnapToOrigin && v && v(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const T = Es(f.type === "pointercancel" ? this.lastMoveEventInfo : Cs(d, this.transformPagePoint), this.history);
            this.startEvent && g && g(f, T),
            y && y(f, T)
        }
        ,
        !pp(t))
            return;
        this.dragSnapToOrigin = o,
        this.handlers = n,
        this.transformPagePoint = r,
        this.contextWindow = i || window;
        const s = Uo(t)
          , l = Cs(s, this.transformPagePoint)
          , {point: a} = l
          , {timestamp: u} = le;
        this.history = [{
            ...a,
            timestamp: u
        }];
        const {onSessionStart: c} = n;
        c && c(t, Es(l, this.history)),
        this.removeListeners = at(lt(this.contextWindow, "pointermove", this.handlePointerMove), lt(this.contextWindow, "pointerup", this.handlePointerUp), lt(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        zt(this.updatePoint)
    }
}
function Cs(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function Qc(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Es({point: e}, t) {
    return {
        point: e,
        delta: Qc(e, Zp(t)),
        offset: Qc(e, dw(t)),
        velocity: hw(t, .1)
    }
}
function dw(e) {
    return e[0]
}
function Zp(e) {
    return e[e.length - 1]
}
function hw(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const i = Zp(e);
    for (; n >= 0 && (r = e[n],
    !(i.timestamp - r.timestamp > _t(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const o = ut(i.timestamp - r.timestamp);
    if (o === 0)
        return {
            x: 0,
            y: 0
        };
    const s = {
        x: (i.x - r.x) / o,
        y: (i.y - r.y) / o
    };
    return s.x === 1 / 0 && (s.x = 0),
    s.y === 1 / 0 && (s.y = 0),
    s
}
function De(e) {
    return e.max - e.min
}
function Nl(e, t=0, n=.01) {
    return Math.abs(e - t) <= n
}
function Yc(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = K(t.min, t.max, e.origin),
    e.scale = De(n) / De(t),
    (Nl(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    e.translate = K(n.min, n.max, e.origin) - e.originPoint,
    (Nl(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}
function Er(e, t, n, r) {
    Yc(e.x, t.x, n.x, r ? r.originX : void 0),
    Yc(e.y, t.y, n.y, r ? r.originY : void 0)
}
function Xc(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + De(t)
}
function pw(e, t, n) {
    Xc(e.x, t.x, n.x),
    Xc(e.y, t.y, n.y)
}
function Zc(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + De(t)
}
function Rr(e, t, n) {
    Zc(e.x, t.x, n.x),
    Zc(e.y, t.y, n.y)
}
function mw(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? K(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? K(n, e, r.max) : Math.min(e, n)),
    e
}
function Jc(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function gw(e, {top: t, left: n, bottom: r, right: i}) {
    return {
        x: Jc(e.x, n, i),
        y: Jc(e.y, t, r)
    }
}
function qc(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function yw(e, t) {
    return {
        x: qc(e.x, t.x),
        y: qc(e.y, t.y)
    }
}
function vw(e, t) {
    let n = .5;
    const r = De(e)
      , i = De(t);
    return i > r ? n = Qr(t.min, t.max - r, e.min) : r > i && (n = Qr(e.min, e.max - i, t.min)),
    Ot(0, 1, n)
}
function ww(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const Fl = .35;
function xw(e=Fl) {
    return e === !1 ? e = 0 : e === !0 && (e = Fl),
    {
        x: bc(e, "left", "right"),
        y: bc(e, "top", "bottom")
    }
}
function bc(e, t, n) {
    return {
        min: ef(e, t),
        max: ef(e, n)
    }
}
function ef(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const tf = ()=>({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , _n = ()=>({
    x: tf(),
    y: tf()
})
  , nf = ()=>({
    min: 0,
    max: 0
})
  , Z = ()=>({
    x: nf(),
    y: nf()
});
function Ne(e) {
    return [e("x"), e("y")]
}
function Jp({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function Sw({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function Pw(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function Rs(e) {
    return e === void 0 || e === 1
}
function Ol({scale: e, scaleX: t, scaleY: n}) {
    return !Rs(e) || !Rs(t) || !Rs(n)
}
function Jt(e) {
    return Ol(e) || qp(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function qp(e) {
    return rf(e.x) || rf(e.y)
}
function rf(e) {
    return e && e !== "0%"
}
function xo(e, t, n) {
    const r = e - n
      , i = t * r;
    return n + i
}
function of(e, t, n, r, i) {
    return i !== void 0 && (e = xo(e, i, r)),
    xo(e, n, r) + t
}
function zl(e, t=0, n=1, r, i) {
    e.min = of(e.min, t, n, r, i),
    e.max = of(e.max, t, n, r, i)
}
function bp(e, {x: t, y: n}) {
    zl(e.x, t.translate, t.scale, t.originPoint),
    zl(e.y, n.translate, n.scale, n.originPoint)
}
function kw(e, t, n, r=!1) {
    const i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let o, s;
    for (let l = 0; l < i; l++) {
        o = n[l],
        s = o.projectionDelta;
        const a = o.instance;
        a && a.style && a.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && jn(e, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }),
        s && (t.x *= s.x.scale,
        t.y *= s.y.scale,
        bp(e, s)),
        r && Jt(o.latestValues) && jn(e, o.latestValues))
    }
    t.x = sf(t.x),
    t.y = sf(t.y)
}
function sf(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
}
function xt(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function lf(e, t, [n,r,i]) {
    const o = t[i] !== void 0 ? t[i] : .5
      , s = K(e.min, e.max, o);
    zl(e, t[n], t[r], s, t.scale)
}
const Tw = ["x", "scaleX", "originX"]
  , Cw = ["y", "scaleY", "originY"];
function jn(e, t) {
    lf(e.x, t, Tw),
    lf(e.y, t, Cw)
}
function em(e, t) {
    return Jp(Pw(e.getBoundingClientRect(), t))
}
function Ew(e, t, n) {
    const r = em(e, n)
      , {scroll: i} = t;
    return i && (xt(r.x, i.offset.x),
    xt(r.y, i.offset.y)),
    r
}
const tm = ({current: e})=>e ? e.ownerDocument.defaultView : null
  , Rw = new WeakMap;
class Mw {
    constructor(t) {
        this.openGlobalLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Z(),
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1}={}) {
        const {presenceContext: r} = this.visualElement;
        if (r && r.isPresent === !1)
            return;
        const i = c=>{
            const {dragSnapToOrigin: f} = this.getProps();
            f ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(Uo(c, "page").point)
        }
          , o = (c,f)=>{
            const {drag: d, dragPropagation: g, onDragStart: y} = this.getProps();
            if (d && !g && (this.openGlobalLock && this.openGlobalLock(),
            this.openGlobalLock = gp(d),
            !this.openGlobalLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Ne(T=>{
                let m = this.getAxisMotionValue(T).get() || 0;
                if (et.test(m)) {
                    const {projection: h} = this.visualElement;
                    if (h && h.layout) {
                        const p = h.layout.layoutBox[T];
                        p && (m = De(p) * (parseFloat(m) / 100))
                    }
                }
                this.originPoint[T] = m
            }
            ),
            y && z.postRender(()=>y(c, f));
            const {animationState: v} = this.visualElement;
            v && v.setActive("whileDrag", !0)
        }
          , s = (c,f)=>{
            const {dragPropagation: d, dragDirectionLock: g, onDirectionLock: y, onDrag: v} = this.getProps();
            if (!d && !this.openGlobalLock)
                return;
            const {offset: T} = f;
            if (g && this.currentDirection === null) {
                this.currentDirection = Lw(T),
                this.currentDirection !== null && y && y(this.currentDirection);
                return
            }
            this.updateAxis("x", f.point, T),
            this.updateAxis("y", f.point, T),
            this.visualElement.render(),
            v && v(c, f)
        }
          , l = (c,f)=>this.stop(c, f)
          , a = ()=>Ne(c=>{
            var f;
            return this.getAnimationState(c) === "paused" && ((f = this.getAxisMotionValue(c).animation) === null || f === void 0 ? void 0 : f.play())
        }
        )
          , {dragSnapToOrigin: u} = this.getProps();
        this.panSession = new Xp(t,{
            onSessionStart: i,
            onStart: o,
            onMove: s,
            onSessionEnd: l,
            resumeAnimation: a
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: tm(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(),
        !r)
            return;
        const {velocity: i} = n;
        this.startAnimation(i);
        const {onDragEnd: o} = this.getProps();
        o && z.postRender(()=>o(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(),
        this.openGlobalLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {drag: i} = this.getProps();
        if (!r || !Ci(t, i, this.currentDirection))
            return;
        const o = this.getAxisMotionValue(t);
        let s = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (s = mw(s, this.constraints[t], this.elastic[t])),
        o.set(s)
    }
    resolveConstraints() {
        var t;
        const {dragConstraints: n, dragElastic: r} = this.getProps()
          , i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout
          , o = this.constraints;
        n && Dn(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = gw(i.layoutBox, n) : this.constraints = !1,
        this.elastic = xw(r),
        o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && Ne(s=>{
            this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = ww(i.layoutBox[s], this.constraints[s]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !Dn(t))
            return !1;
        const r = t.current
          , {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const o = Ew(r, i.root, this.visualElement.getTransformPagePoint());
        let s = yw(i.layout.layoutBox, o);
        if (n) {
            const l = n(Sw(s));
            this.hasMutatedConstraints = !!l,
            l && (s = Jp(l))
        }
        return s
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: l} = this.getProps()
          , a = this.constraints || {}
          , u = Ne(c=>{
            if (!Ci(c, n, this.currentDirection))
                return;
            let f = a && a[c] || {};
            s && (f = {
                min: 0,
                max: 0
            });
            const d = i ? 200 : 1e6
              , g = i ? 40 : 1e7
              , y = {
                type: "inertia",
                velocity: r ? t[c] : 0,
                bounceStiffness: d,
                bounceDamping: g,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...o,
                ...f
            };
            return this.startAxisValueAnimation(c, y)
        }
        );
        return Promise.all(u).then(l)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return r.start(lu(t, r, 0, n, this.visualElement))
    }
    stopAnimation() {
        Ne(t=>this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        Ne(t=>{
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`
          , r = this.visualElement.getProps()
          , i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Ne(n=>{
            const {drag: r} = this.getProps();
            if (!Ci(n, r, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: s, max: l} = i.layout.layoutBox[n];
                o.set(t[n] - K(s, l, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!Dn(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        Ne(s=>{
            const l = this.getAxisMotionValue(s);
            if (l && this.constraints !== !1) {
                const a = l.get();
                i[s] = vw({
                    min: a,
                    max: a
                }, this.constraints[s])
            }
        }
        );
        const {transformTemplate: o} = this.visualElement.getProps();
        this.visualElement.current.style.transform = o ? o({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        Ne(s=>{
            if (!Ci(s, t, null))
                return;
            const l = this.getAxisMotionValue(s)
              , {min: a, max: u} = this.constraints[s];
            l.set(K(a, u, i[s]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        Rw.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = lt(t, "pointerdown", a=>{
            const {drag: u, dragListener: c=!0} = this.getProps();
            u && c && this.start(a)
        }
        )
          , r = ()=>{
            const {dragConstraints: a} = this.getProps();
            Dn(a) && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: i} = this.visualElement
          , o = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(),
        i.updateLayout()),
        r();
        const s = ot(window, "resize", ()=>this.scalePositionWithinConstraints())
          , l = i.addEventListener("didUpdate", ({delta: a, hasLayoutChanged: u})=>{
            this.isDragging && u && (Ne(c=>{
                const f = this.getAxisMotionValue(c);
                f && (this.originPoint[c] += a[c].translate,
                f.set(f.get() + a[c].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return ()=>{
            s(),
            n(),
            o(),
            l && l()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: i=!1, dragConstraints: o=!1, dragElastic: s=Fl, dragMomentum: l=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: s,
            dragMomentum: l
        }
    }
}
function Ci(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function Lw(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class Vw extends Wt {
    constructor(t) {
        super(t),
        this.removeGroupControls = me,
        this.removeListeners = me,
        this.controls = new Mw(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || me
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const af = e=>(t,n)=>{
    e && z.postRender(()=>e(t, n))
}
;
class Dw extends Wt {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = me
    }
    onPointerDown(t) {
        this.session = new Xp(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: tm(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: af(t),
            onStart: af(n),
            onMove: r,
            onEnd: (o,s)=>{
                delete this.session,
                i && z.postRender(()=>i(o, s))
            }
        }
    }
    mount() {
        this.removePointerDownListener = lt(this.node.current, "pointerdown", t=>this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
function Aw() {
    const e = E.useContext(zo);
    if (e === null)
        return [!0, null];
    const {isPresent: t, onExitComplete: n, register: r} = e
      , i = E.useId();
    return E.useEffect(()=>r(i), []),
    !t && n ? [!1, ()=>n && n(i)] : [!0]
}
const Bi = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function uf(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const ur = {
    correct: (e,t)=>{
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (D.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = uf(e, t.target.x)
          , r = uf(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , _w = {
    correct: (e,{treeScale: t, projectionDelta: n})=>{
        const r = e
          , i = It.parse(e);
        if (i.length > 5)
            return r;
        const o = It.createTransformer(e)
          , s = typeof i[0] != "number" ? 1 : 0
          , l = n.x.scale * t.x
          , a = n.y.scale * t.y;
        i[0 + s] /= l,
        i[1 + s] /= a;
        const u = K(l, a, .5);
        return typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
    }
};
class jw extends E.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i} = this.props
          , {projection: o} = t;
        Av(Nw),
        o && (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", ()=>{
            this.safeToRemove()
        }
        ),
        o.setOptions({
            ...o.options,
            onExitComplete: ()=>this.safeToRemove()
        })),
        Bi.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: i, isPresent: o} = this.props
          , s = r.projection;
        return s && (s.isPresent = o,
        i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(),
        t.isPresent !== o && (o ? s.promote() : s.relegate() || z.postRender(()=>{
            const l = s.getStack();
            (!l || !l.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        za.postRender(()=>{
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: i} = t;
        i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function nm(e) {
    const [t,n] = Aw()
      , r = E.useContext(Ua);
    return k.jsx(jw, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: E.useContext(ep),
        isPresent: t,
        safeToRemove: n
    })
}
const Nw = {
    borderRadius: {
        ...ur,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: ur,
    borderTopRightRadius: ur,
    borderBottomLeftRadius: ur,
    borderBottomRightRadius: ur,
    boxShadow: _w
}
  , rm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , Fw = rm.length
  , cf = e=>typeof e == "string" ? parseFloat(e) : e
  , ff = e=>typeof e == "number" || D.test(e);
function Ow(e, t, n, r, i, o) {
    i ? (e.opacity = K(0, n.opacity !== void 0 ? n.opacity : 1, zw(r)),
    e.opacityExit = K(t.opacity !== void 0 ? t.opacity : 1, 0, Iw(r))) : o && (e.opacity = K(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < Fw; s++) {
        const l = `border${rm[s]}Radius`;
        let a = df(t, l)
          , u = df(n, l);
        if (a === void 0 && u === void 0)
            continue;
        a || (a = 0),
        u || (u = 0),
        a === 0 || u === 0 || ff(a) === ff(u) ? (e[l] = Math.max(K(cf(a), cf(u), r), 0),
        (et.test(u) || et.test(a)) && (e[l] += "%")) : e[l] = u
    }
    (t.rotate || n.rotate) && (e.rotate = K(t.rotate || 0, n.rotate || 0, r))
}
function df(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const zw = im(0, .5, Up)
  , Iw = im(.5, .95, me);
function im(e, t, n) {
    return r=>r < e ? 0 : r > t ? 1 : n(Qr(e, t, r))
}
function hf(e, t) {
    e.min = t.min,
    e.max = t.max
}
function je(e, t) {
    hf(e.x, t.x),
    hf(e.y, t.y)
}
function pf(e, t, n, r, i) {
    return e -= t,
    e = xo(e, 1 / n, r),
    i !== void 0 && (e = xo(e, 1 / i, r)),
    e
}
function Bw(e, t=0, n=1, r=.5, i, o=e, s=e) {
    if (et.test(t) && (t = parseFloat(t),
    t = K(s.min, s.max, t / 100) - s.min),
    typeof t != "number")
        return;
    let l = K(o.min, o.max, r);
    e === o && (l -= t),
    e.min = pf(e.min, t, n, l, i),
    e.max = pf(e.max, t, n, l, i)
}
function mf(e, t, [n,r,i], o, s) {
    Bw(e, t[n], t[r], t[i], t.scale, o, s)
}
const Uw = ["x", "scaleX", "originX"]
  , $w = ["y", "scaleY", "originY"];
function gf(e, t, n, r) {
    mf(e.x, t, Uw, n ? n.x : void 0, r ? r.x : void 0),
    mf(e.y, t, $w, n ? n.y : void 0, r ? r.y : void 0)
}
function yf(e) {
    return e.translate === 0 && e.scale === 1
}
function om(e) {
    return yf(e.x) && yf(e.y)
}
function Ww(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}
function sm(e, t) {
    return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max)
}
function vf(e) {
    return De(e.x) / De(e.y)
}
class Hw {
    constructor() {
        this.members = []
    }
    add(t) {
        au(this.members, t),
        t.scheduleRender()
    }
    remove(t) {
        if (uu(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i=>t === i);
        if (n === 0)
            return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i];
            if (o.isPresent !== !1) {
                r = o;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.instance && r.scheduleRender(),
            t.scheduleRender(),
            t.resumeFrom = r,
            n && (t.resumeFrom.preserveOpacity = !0),
            r.snapshot && (t.snapshot = r.snapshot,
            t.snapshot.latestValues = r.animationValues || r.latestValues),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {crossfade: i} = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t=>{
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t=>{
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function wf(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x
      , o = e.y.translate / t.y
      , s = (n == null ? void 0 : n.z) || 0;
    if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {transformPerspective: u, rotate: c, rotateX: f, rotateY: d, skewX: g, skewY: y} = n;
        u && (r = `perspective(${u}px) ${r}`),
        c && (r += `rotate(${c}deg) `),
        f && (r += `rotateX(${f}deg) `),
        d && (r += `rotateY(${d}deg) `),
        g && (r += `skewX(${g}deg) `),
        y && (r += `skewY(${y}deg) `)
    }
    const l = e.x.scale * t.x
      , a = e.y.scale * t.y;
    return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`),
    r || "none"
}
const Kw = (e,t)=>e.depth - t.depth;
class Gw {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        au(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        uu(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(Kw),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function Qw(e, t) {
    const n = jt.now()
      , r = ({timestamp: i})=>{
        const o = i - n;
        o >= t && (zt(r),
        e(o - t))
    }
    ;
    return z.read(r, !0),
    ()=>zt(r)
}
function Yw(e) {
    window.MotionDebug && window.MotionDebug.record(e)
}
function Xw(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
function Zw(e, t, n) {
    const r = pe(e) ? e : Yr(e);
    return r.start(lu("", r, t, n)),
    r.animation
}
const Ms = ["", "X", "Y", "Z"]
  , Jw = {
    visibility: "hidden"
}
  , xf = 1e3;
let qw = 0;
const qt = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};
function Ls(e, t, n, r) {
    const {latestValues: i} = t;
    i[e] && (n[e] = i[e],
    t.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function lm({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(s={}, l=t == null ? void 0 : t()) {
            this.id = qw++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = ()=>{
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = ()=>{
                this.projectionUpdateScheduled = !1,
                qt.totalNodes = qt.resolvedTargetDeltas = qt.recalculatedProjection = 0,
                this.nodes.forEach(tx),
                this.nodes.forEach(sx),
                this.nodes.forEach(lx),
                this.nodes.forEach(nx),
                Yw(qt)
            }
            ,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = s,
            this.root = l ? l.root || l : this,
            this.path = l ? [...l.path, l] : [],
            this.parent = l,
            this.depth = l ? l.depth + 1 : 0;
            for (let a = 0; a < this.path.length; a++)
                this.path[a].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Gw)
        }
        addEventListener(s, l) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new cu),
            this.eventHandlers.get(s).add(l)
        }
        notifyListeners(s, ...l) {
            const a = this.eventHandlers.get(s);
            a && a.notify(...l)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        mount(s, l=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = Xw(s),
            this.instance = s;
            const {layoutId: a, layout: u, visualElement: c} = this.options;
            if (c && !c.current && c.mount(s),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            l && (u || a) && (this.isLayoutDirty = !0),
            e) {
                let f;
                const d = ()=>this.root.updateBlockedByResize = !1;
                e(s, ()=>{
                    this.root.updateBlockedByResize = !0,
                    f && f(),
                    f = Qw(d, 250),
                    Bi.hasAnimatedSinceResize && (Bi.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Pf))
                }
                )
            }
            a && this.root.registerSharedNode(a, this),
            this.options.animate !== !1 && c && (a || u) && this.addEventListener("didUpdate", ({delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: g, layout: y})=>{
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const v = this.options.transition || c.getDefaultTransition() || dx
                  , {onLayoutAnimationStart: T, onLayoutAnimationComplete: m} = c.getProps()
                  , h = !this.targetLayout || !sm(this.targetLayout, y) || g
                  , p = !d && g;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || p || d && (h || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(f, p);
                    const w = {
                        ...Ja(v, "layout"),
                        onPlay: T,
                        onComplete: m
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0,
                    w.type = !1),
                    this.startAnimation(w)
                } else
                    d || Pf(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = y
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            zt(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(ax),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: s} = this.options;
            return s && s.getProps().transformTemplate
        }
        willUpdate(s=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const f = this.path[c];
                f.shouldResetTransform = !0,
                f.updateScroll("snapshot"),
                f.options.layoutRoot && f.willUpdate(!1)
            }
            const {layoutId: l, layout: a} = this.options;
            if (l === void 0 && !a)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            s && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Sf);
                return
            }
            this.isUpdating || this.nodes.forEach(ix),
            this.isUpdating = !1,
            window.HandoffCancelAllAnimations && window.HandoffCancelAllAnimations(),
            this.nodes.forEach(ox),
            this.nodes.forEach(bw),
            this.nodes.forEach(ex),
            this.clearAllSnapshots();
            const l = jt.now();
            le.delta = Ot(0, 1e3 / 60, l - le.timestamp),
            le.timestamp = l,
            le.isProcessing = !0,
            vs.update.process(le),
            vs.preRender.process(le),
            vs.render.process(le),
            le.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            za.read(()=>this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(rx),
            this.sharedNodes.forEach(ux)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            z.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            z.postRender(()=>{
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let a = 0; a < this.path.length; a++)
                    this.path[a].updateScroll();
            const s = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = Z(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: l} = this.options;
            l && l.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }
        updateScroll(s="measure") {
            let l = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (l = !1),
            l && (this.scroll = {
                animationId: this.root.animationId,
                phase: s,
                isRoot: r(this.instance),
                offset: n(this.instance)
            })
        }
        resetTransform() {
            if (!i)
                return;
            const s = this.isLayoutDirty || this.shouldResetTransform
              , l = this.projectionDelta && !om(this.projectionDelta)
              , a = this.getTransformTemplate()
              , u = a ? a(this.latestValues, "") : void 0
              , c = u !== this.prevTransformTemplateValue;
            s && (l || Jt(this.latestValues) || c) && (i(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(s=!0) {
            const l = this.measurePageBox();
            let a = this.removeElementScroll(l);
            return s && (a = this.removeTransform(a)),
            hx(a),
            {
                animationId: this.root.animationId,
                measuredBox: l,
                layoutBox: a,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {visualElement: s} = this.options;
            if (!s)
                return Z();
            const l = s.measureViewportBox()
              , {scroll: a} = this.root;
            return a && (xt(l.x, a.offset.x),
            xt(l.y, a.offset.y)),
            l
        }
        removeElementScroll(s) {
            const l = Z();
            je(l, s);
            for (let a = 0; a < this.path.length; a++) {
                const u = this.path[a]
                  , {scroll: c, options: f} = u;
                if (u !== this.root && c && f.layoutScroll) {
                    if (c.isRoot) {
                        je(l, s);
                        const {scroll: d} = this.root;
                        d && (xt(l.x, -d.offset.x),
                        xt(l.y, -d.offset.y))
                    }
                    xt(l.x, c.offset.x),
                    xt(l.y, c.offset.y)
                }
            }
            return l
        }
        applyTransform(s, l=!1) {
            const a = Z();
            je(a, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !l && c.options.layoutScroll && c.scroll && c !== c.root && jn(a, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }),
                Jt(c.latestValues) && jn(a, c.latestValues)
            }
            return Jt(this.latestValues) && jn(a, this.latestValues),
            a
        }
        removeTransform(s) {
            const l = Z();
            je(l, s);
            for (let a = 0; a < this.path.length; a++) {
                const u = this.path[a];
                if (!u.instance || !Jt(u.latestValues))
                    continue;
                Ol(u.latestValues) && u.updateSnapshot();
                const c = Z()
                  , f = u.measurePageBox();
                je(c, f),
                gf(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return Jt(this.latestValues) && gf(l, this.latestValues),
            l
        }
        setTargetDelta(s) {
            this.targetDelta = s,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(s) {
            this.options = {
                ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== le.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(s=!1) {
            var l;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== a;
            if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget))
                return;
            const {layout: f, layoutId: d} = this.options;
            if (!(!this.layout || !(f || d))) {
                if (this.resolvedRelativeTargetAt = le.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const g = this.getClosestProjectingParent();
                    g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = Z(),
                    this.relativeTargetOrigin = Z(),
                    Rr(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox),
                    je(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = Z(),
                    this.targetWithTransforms = Z()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    pw(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : je(this.target, this.layout.layoutBox),
                    bp(this.target, this.targetDelta)) : je(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const g = this.getClosestProjectingParent();
                        g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = Z(),
                        this.relativeTargetOrigin = Z(),
                        Rr(this.relativeTargetOrigin, this.target, g.target),
                        je(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    qt.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Ol(this.parent.latestValues) || qp(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var s;
            const l = this.getLead()
              , a = !!this.resumingFrom || this !== l;
            let u = !0;
            if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1),
            a && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
            this.resolvedRelativeTargetAt === le.timestamp && (u = !1),
            u)
                return;
            const {layout: c, layoutId: f} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(c || f))
                return;
            je(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x
              , g = this.treeScale.y;
            kw(this.layoutCorrected, this.treeScale, this.path, a),
            l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox,
            l.targetWithTransforms = Z());
            const {target: y} = l;
            if (!y) {
                this.projectionTransform && (this.projectionDelta = _n(),
                this.projectionTransform = "none",
                this.scheduleRender());
                return
            }
            this.projectionDelta || (this.projectionDelta = _n(),
            this.projectionDeltaWithTransform = _n());
            const v = this.projectionTransform;
            Er(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
            this.projectionTransform = wf(this.projectionDelta, this.treeScale),
            (this.projectionTransform !== v || this.treeScale.x !== d || this.treeScale.y !== g) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", y)),
            qt.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s=!0) {
            if (this.options.scheduleRender && this.options.scheduleRender(),
            s) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(s, l=!1) {
            const a = this.snapshot
              , u = a ? a.latestValues : {}
              , c = {
                ...this.latestValues
            }
              , f = _n();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !l;
            const d = Z()
              , g = a ? a.source : void 0
              , y = this.layout ? this.layout.source : void 0
              , v = g !== y
              , T = this.getStack()
              , m = !T || T.members.length <= 1
              , h = !!(v && !m && this.options.crossfade === !0 && !this.path.some(fx));
            this.animationProgress = 0;
            let p;
            this.mixTargetDelta = w=>{
                const x = w / 1e3;
                kf(f.x, s.x, x),
                kf(f.y, s.y, x),
                this.setTargetDelta(f),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Rr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                cx(this.relativeTarget, this.relativeTargetOrigin, d, x),
                p && Ww(this.relativeTarget, p) && (this.isProjectionDirty = !1),
                p || (p = Z()),
                je(p, this.relativeTarget)),
                v && (this.animationValues = c,
                Ow(c, u, this.latestValues, x, h, m)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = x
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(s) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (zt(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = z.update(()=>{
                Bi.hasAnimatedSinceResize = !0,
                this.currentAnimation = Zw(0, xf, {
                    ...s,
                    onUpdate: l=>{
                        this.mixTargetDelta(l),
                        s.onUpdate && s.onUpdate(l)
                    }
                    ,
                    onComplete: ()=>{
                        s.onComplete && s.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const s = this.getStack();
            s && s.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(xf),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let {targetWithTransforms: l, target: a, layout: u, latestValues: c} = s;
            if (!(!l || !a || !u)) {
                if (this !== s && this.layout && u && am(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    a = this.target || Z();
                    const f = De(this.layout.layoutBox.x);
                    a.x.min = s.target.x.min,
                    a.x.max = a.x.min + f;
                    const d = De(this.layout.layoutBox.y);
                    a.y.min = s.target.y.min,
                    a.y.max = a.y.min + d
                }
                je(l, a),
                jn(l, c),
                Er(this.projectionDeltaWithTransform, this.layoutCorrected, l, c)
            }
        }
        registerSharedNode(s, l) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new Hw),
            this.sharedNodes.get(s).add(l);
            const u = l.options.initialPromotionConfig;
            l.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0
            })
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0
        }
        getLead() {
            var s;
            const {layoutId: l} = this.options;
            return l ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
        }
        getPrevLead() {
            var s;
            const {layoutId: l} = this.options;
            return l ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
        }
        getStack() {
            const {layoutId: s} = this.options;
            if (s)
                return this.root.sharedNodes.get(s)
        }
        promote({needsReset: s, transition: l, preserveFollowOpacity: a}={}) {
            const u = this.getStack();
            u && u.promote(this, a),
            s && (this.projectionDelta = void 0,
            this.needsReset = !0),
            l && this.setOptions({
                transition: l
            })
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: s} = this.options;
            if (!s)
                return;
            let l = !1;
            const {latestValues: a} = s;
            if ((a.z || a.rotate || a.rotateX || a.rotateY || a.rotateZ || a.skewX || a.skewY) && (l = !0),
            !l)
                return;
            const u = {};
            a.z && Ls("z", s, u, this.animationValues);
            for (let c = 0; c < Ms.length; c++)
                Ls(`rotate${Ms[c]}`, s, u, this.animationValues),
                Ls(`skew${Ms[c]}`, s, u, this.animationValues);
            s.render();
            for (const c in u)
                s.setStaticValue(c, u[c]),
                this.animationValues && (this.animationValues[c] = u[c]);
            s.scheduleRender()
        }
        getProjectionStyles(s) {
            var l, a;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return Jw;
            const u = {
                visibility: ""
            }
              , c = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                u.opacity = "",
                u.pointerEvents = zi(s == null ? void 0 : s.pointerEvents) || "",
                u.transform = c ? c(this.latestValues, "") : "none",
                u;
            const f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                const v = {};
                return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                v.pointerEvents = zi(s == null ? void 0 : s.pointerEvents) || ""),
                this.hasProjected && !Jt(this.latestValues) && (v.transform = c ? c({}, "") : "none",
                this.hasProjected = !1),
                v
            }
            const d = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(),
            u.transform = wf(this.projectionDeltaWithTransform, this.treeScale, d),
            c && (u.transform = c(d, u.transform));
            const {x: g, y} = this.projectionDelta;
            u.transformOrigin = `${g.origin * 100}% ${y.origin * 100}% 0`,
            f.animationValues ? u.opacity = f === this ? (a = (l = d.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && a !== void 0 ? a : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
            for (const v in po) {
                if (d[v] === void 0)
                    continue;
                const {correct: T, applyTo: m} = po[v]
                  , h = u.transform === "none" ? d[v] : T(d[v], f);
                if (m) {
                    const p = m.length;
                    for (let w = 0; w < p; w++)
                        u[m[w]] = h
                } else
                    u[v] = h
            }
            return this.options.layoutId && (u.pointerEvents = f === this ? zi(s == null ? void 0 : s.pointerEvents) || "" : "none"),
            u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(s=>{
                var l;
                return (l = s.currentAnimation) === null || l === void 0 ? void 0 : l.stop()
            }
            ),
            this.root.nodes.forEach(Sf),
            this.root.sharedNodes.clear()
        }
    }
}
function bw(e) {
    e.updateLayout()
}
function ex(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: i} = e.layout
          , {animationType: o} = e.options
          , s = n.source !== e.layout.source;
        o === "size" ? Ne(f=>{
            const d = s ? n.measuredBox[f] : n.layoutBox[f]
              , g = De(d);
            d.min = r[f].min,
            d.max = d.min + g
        }
        ) : am(o, n.layoutBox, r) && Ne(f=>{
            const d = s ? n.measuredBox[f] : n.layoutBox[f]
              , g = De(r[f]);
            d.max = d.min + g,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[f].max = e.relativeTarget[f].min + g)
        }
        );
        const l = _n();
        Er(l, r, n.layoutBox);
        const a = _n();
        s ? Er(a, e.applyTransform(i, !0), n.measuredBox) : Er(a, r, n.layoutBox);
        const u = !om(l);
        let c = !1;
        if (!e.resumeFrom) {
            const f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const {snapshot: d, layout: g} = f;
                if (d && g) {
                    const y = Z();
                    Rr(y, n.layoutBox, d.layoutBox);
                    const v = Z();
                    Rr(v, r, g.layoutBox),
                    sm(y, v) || (c = !0),
                    f.options.layoutRoot && (e.relativeTarget = v,
                    e.relativeTargetOrigin = y,
                    e.relativeParent = f)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: a,
            layoutDelta: l,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function tx(e) {
    qt.totalNodes++,
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function nx(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function rx(e) {
    e.clearSnapshot()
}
function Sf(e) {
    e.clearMeasurements()
}
function ix(e) {
    e.isLayoutDirty = !1
}
function ox(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function Pf(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function sx(e) {
    e.resolveTargetDelta()
}
function lx(e) {
    e.calcProjection()
}
function ax(e) {
    e.resetSkewAndRotation()
}
function ux(e) {
    e.removeLeadSnapshot()
}
function kf(e, t, n) {
    e.translate = K(t.translate, 0, n),
    e.scale = K(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function Tf(e, t, n, r) {
    e.min = K(t.min, n.min, r),
    e.max = K(t.max, n.max, r)
}
function cx(e, t, n, r) {
    Tf(e.x, t.x, n.x, r),
    Tf(e.y, t.y, n.y, r)
}
function fx(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const dx = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Cf = e=>typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , Ef = Cf("applewebkit/") && !Cf("chrome/") ? Math.round : me;
function Rf(e) {
    e.min = Ef(e.min),
    e.max = Ef(e.max)
}
function hx(e) {
    Rf(e.x),
    Rf(e.y)
}
function am(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !Nl(vf(t), vf(n), .2)
}
const px = lm({
    attachResizeListener: (e,t)=>ot(e, "resize", t),
    measureScroll: ()=>({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: ()=>!0
})
  , Vs = {
    current: void 0
}
  , um = lm({
    measureScroll: e=>({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: ()=>{
        if (!Vs.current) {
            const e = new px({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            Vs.current = e
        }
        return Vs.current
    }
    ,
    resetTransform: (e,t)=>{
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e=>window.getComputedStyle(e).position === "fixed"
})
  , mx = {
    pan: {
        Feature: Dw
    },
    drag: {
        Feature: Vw,
        ProjectionNode: um,
        MeasureLayout: nm
    }
}
  , Il = {
    current: null
}
  , cm = {
    current: !1
};
function gx() {
    if (cm.current = !0,
    !!Na)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = ()=>Il.current = e.matches;
            e.addListener(t),
            t()
        } else
            Il.current = !1
}
function yx(e, t, n) {
    const {willChange: r} = t;
    for (const i in t) {
        const o = t[i]
          , s = n[i];
        if (pe(o))
            e.addValue(i, o),
            wo(r) && r.add(i);
        else if (pe(s))
            e.addValue(i, Yr(o, {
                owner: e
            })),
            wo(r) && r.remove(i);
        else if (s !== o)
            if (e.hasValue(i)) {
                const l = e.getValue(i);
                l.liveStyle === !0 ? l.jump(o) : l.hasAnimated || l.set(o)
            } else {
                const l = e.getStaticValue(i);
                e.addValue(i, Yr(l !== void 0 ? l : o, {
                    owner: e
                }))
            }
    }
    for (const i in n)
        t[i] === void 0 && e.removeValue(i);
    return t
}
const Mf = new WeakMap
  , vx = [...Tp, de, It]
  , wx = e=>vx.find(kp(e))
  , fm = Object.keys(Gr)
  , xx = fm.length
  , Lf = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
  , Sx = Ba.length;
function dm(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : dm(e.parent)
}
class Px {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: o, visualState: s}, l={}) {
        this.resolveKeyframes = (d,g,y,v)=>new this.KeyframeResolver(d,g,y,v,this),
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = qa,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = ()=>this.notify("Update", this.latestValues),
        this.render = ()=>{
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.scheduleRender = ()=>z.render(this.render, !1, !0);
        const {latestValues: a, renderState: u} = s;
        this.latestValues = a,
        this.baseTarget = {
            ...a
        },
        this.initialValues = n.initial ? {
            ...a
        } : {},
        this.renderState = u,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.options = l,
        this.blockInitialAnimation = !!o,
        this.isControllingVariants = Bo(n),
        this.isVariantNode = bh(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: c, ...f} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const d in f) {
            const g = f[d];
            a[d] !== void 0 && pe(g) && (g.set(a[d], !1),
            wo(c) && c.add(d))
        }
    }
    mount(t) {
        this.current = t,
        Mf.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((n,r)=>this.bindToMotionValue(r, n)),
        cm.current || gx(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Il.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        var t;
        Mf.delete(this.current),
        this.projection && this.projection.unmount(),
        zt(this.notifyUpdate),
        zt(this.render),
        this.valueSubscriptions.forEach(n=>n()),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const n in this.events)
            this.events[n].clear();
        for (const n in this.features)
            (t = this.features[n]) === null || t === void 0 || t.unmount();
        this.current = null
    }
    bindToMotionValue(t, n) {
        const r = yn.has(t)
          , i = n.on("change", s=>{
            this.latestValues[t] = s,
            this.props.onUpdate && z.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , o = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(t, ()=>{
            i(),
            o(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    loadFeatures({children: t, ...n}, r, i, o) {
        let s, l;
        for (let a = 0; a < xx; a++) {
            const u = fm[a]
              , {isEnabled: c, Feature: f, ProjectionNode: d, MeasureLayout: g} = Gr[u];
            d && (s = d),
            c(n) && (!this.features[u] && f && (this.features[u] = new f(this)),
            g && (l = g))
        }
        if ((this.type === "html" || this.type === "svg") && !this.projection && s) {
            this.projection = new s(this.latestValues,dm(this.parent));
            const {layoutId: a, layout: u, drag: c, dragConstraints: f, layoutScroll: d, layoutRoot: g} = n;
            this.projection.setOptions({
                layoutId: a,
                layout: u,
                alwaysMeasureLayout: !!c || f && Dn(f),
                visualElement: this,
                scheduleRender: ()=>this.scheduleRender(),
                animationType: typeof u == "string" ? u : "both",
                initialPromotionConfig: o,
                layoutScroll: d,
                layoutRoot: g
            })
        }
        return l
    }
    updateFeatures() {
        for (const t in this.features) {
            const n = this.features[t];
            n.isMounted ? n.update() : (n.mount(),
            n.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Z()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < Lf.length; r++) {
            const i = Lf[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const o = "on" + i
              , s = t[o];
            s && (this.propEventSubscriptions[i] = this.on(i, s))
        }
        this.prevMotionValues = yx(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(t=!1) {
        if (t)
            return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const r = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (r.initial = this.props.initial),
            r
        }
        const n = {};
        for (let r = 0; r < Sx; r++) {
            const i = Ba[r]
              , o = this.props[i];
            (Kr(o) || o === !1) && (n[i] = o)
        }
        return n
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            ()=>n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = Yr(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t, n) {
        var r;
        let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
        return i != null && (typeof i == "string" && (Sp(i) || xp(i)) ? i = parseFloat(i) : !wx(i) && It.test(n) && (i = Ap(t, n)),
        this.setBaseTarget(t, pe(i) ? i.get() : i)),
        pe(i) ? i.get() : i
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {initial: r} = this.props;
        let i;
        if (typeof r == "string" || typeof r == "object") {
            const s = Za(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            s && (i = s[t])
        }
        if (r && i !== void 0)
            return i;
        const o = this.getBaseTargetFromProps(this.props, t);
        return o !== void 0 && !pe(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new cu),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class hm extends Px {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = _p
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
}
function kx(e) {
    return window.getComputedStyle(e)
}
class Tx extends hm {
    constructor() {
        super(...arguments),
        this.type = "html"
    }
    readValueFromInstance(t, n) {
        if (yn.has(n)) {
            const r = eu(n);
            return r && r.default || 0
        } else {
            const r = kx(t)
              , i = (rp(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return em(t, n)
    }
    build(t, n, r, i) {
        Ka(t, n, r, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Xa(t, n, r)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        pe(t) && (this.childSubscription = t.on("change", n=>{
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
    renderInstance(t, n, r, i) {
        ap(t, n, r, i)
    }
}
class Cx extends hm {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (yn.has(n)) {
            const r = eu(n);
            return r && r.default || 0
        }
        return n = up.has(n) ? n : Oa(n),
        t.getAttribute(n)
    }
    measureInstanceViewportBox() {
        return Z()
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return fp(t, n, r)
    }
    build(t, n, r, i) {
        Qa(t, n, r, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(t, n, r, i) {
        cp(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = Ya(t.tagName),
        super.mount(t)
    }
}
const Ex = (e,t)=>$a(e) ? new Cx(t,{
    enableHardwareAcceleration: !1
}) : new Tx(t,{
    allowProjection: e !== E.Fragment,
    enableHardwareAcceleration: !0
})
  , Rx = {
    layout: {
        ProjectionNode: um,
        MeasureLayout: nm
    }
}
  , Mx = {
    ...cw,
    ...x0,
    ...mx,
    ...Rx
}
  , pm = Vv((e,t)=>l0(e, t, Mx, Ex));
function mm() {
    const e = E.useRef(!1);
    return Fa(()=>(e.current = !0,
    ()=>{
        e.current = !1
    }
    ), []),
    e
}
function Lx() {
    const e = mm()
      , [t,n] = E.useState(0)
      , r = E.useCallback(()=>{
        e.current && n(t + 1)
    }
    , [t]);
    return [E.useCallback(()=>z.postRender(r), [r]), t]
}
class Vx extends E.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            r.height = n.offsetHeight || 0,
            r.width = n.offsetWidth || 0,
            r.top = n.offsetTop,
            r.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function Dx({children: e, isPresent: t}) {
    const n = E.useId()
      , r = E.useRef(null)
      , i = E.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    })
      , {nonce: o} = E.useContext(ja);
    return E.useInsertionEffect(()=>{
        const {width: s, height: l, top: a, left: u} = i.current;
        if (t || !r.current || !s || !l)
            return;
        r.current.dataset.motionPopId = n;
        const c = document.createElement("style");
        return o && (c.nonce = o),
        document.head.appendChild(c),
        c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${l}px !important;
            top: ${a}px !important;
            left: ${u}px !important;
          }
        `),
        ()=>{
            document.head.removeChild(c)
        }
    }
    , [t]),
    k.jsx(Vx, {
        isPresent: t,
        childRef: r,
        sizeRef: i,
        children: E.cloneElement(e, {
            ref: r
        })
    })
}
const Ds = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: o, mode: s})=>{
    const l = dp(Ax)
      , a = E.useId()
      , u = E.useMemo(()=>({
        id: a,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: c=>{
            l.set(c, !0);
            for (const f of l.values())
                if (!f)
                    return;
            r && r()
        }
        ,
        register: c=>(l.set(c, !1),
        ()=>l.delete(c))
    }), o ? [Math.random()] : [n]);
    return E.useMemo(()=>{
        l.forEach((c,f)=>l.set(f, !1))
    }
    , [n]),
    E.useEffect(()=>{
        !n && !l.size && r && r()
    }
    , [n]),
    s === "popLayout" && (e = k.jsx(Dx, {
        isPresent: n,
        children: e
    })),
    k.jsx(zo.Provider, {
        value: u,
        children: e
    })
}
;
function Ax() {
    return new Map
}
function _x(e) {
    return E.useEffect(()=>()=>e(), [])
}
const bt = e=>e.key || "";
function jx(e, t) {
    e.forEach(n=>{
        const r = bt(n);
        t.set(r, n)
    }
    )
}
function Nx(e) {
    const t = [];
    return E.Children.forEach(e, n=>{
        E.isValidElement(n) && t.push(n)
    }
    ),
    t
}
const gm = ({children: e, custom: t, initial: n=!0, onExitComplete: r, exitBeforeEnter: i, presenceAffectsLayout: o=!0, mode: s="sync"})=>{
    const l = E.useContext(Ua).forceRender || Lx()[0]
      , a = mm()
      , u = Nx(e);
    let c = u;
    const f = E.useRef(new Map).current
      , d = E.useRef(c)
      , g = E.useRef(new Map).current
      , y = E.useRef(!0);
    if (Fa(()=>{
        y.current = !1,
        jx(u, g),
        d.current = c
    }
    ),
    _x(()=>{
        y.current = !0,
        g.clear(),
        f.clear()
    }
    ),
    y.current)
        return k.jsx(k.Fragment, {
            children: c.map(h=>k.jsx(Ds, {
                isPresent: !0,
                initial: n ? void 0 : !1,
                presenceAffectsLayout: o,
                mode: s,
                children: h
            }, bt(h)))
        });
    c = [...c];
    const v = d.current.map(bt)
      , T = u.map(bt)
      , m = v.length;
    for (let h = 0; h < m; h++) {
        const p = v[h];
        T.indexOf(p) === -1 && !f.has(p) && f.set(p, void 0)
    }
    return s === "wait" && f.size && (c = []),
    f.forEach((h,p)=>{
        if (T.indexOf(p) !== -1)
            return;
        const w = g.get(p);
        if (!w)
            return;
        const x = v.indexOf(p);
        let C = h;
        if (!C) {
            const R = ()=>{
                f.delete(p);
                const P = Array.from(g.keys()).filter(_=>!T.includes(_));
                if (P.forEach(_=>g.delete(_)),
                d.current = u.filter(_=>{
                    const V = bt(_);
                    return V === p || P.includes(V)
                }
                ),
                !f.size) {
                    if (a.current === !1)
                        return;
                    l(),
                    r && r()
                }
            }
            ;
            C = k.jsx(Ds, {
                isPresent: !1,
                onExitComplete: R,
                custom: t,
                presenceAffectsLayout: o,
                mode: s,
                children: w
            }, bt(w)),
            f.set(p, C)
        }
        c.splice(x, 0, C)
    }
    ),
    c = c.map(h=>{
        const p = h.key;
        return f.has(p) ? h : k.jsx(Ds, {
            isPresent: !0,
            presenceAffectsLayout: o,
            mode: s,
            children: h
        }, bt(h))
    }
    ),
    k.jsx(k.Fragment, {
        children: f.size ? c : c.map(h=>E.cloneElement(h))
    })
}
  , Vf = ["HELLO.", "HI.", "HALO.", "你好."]
  , Fx = ()=>{
    const [e,t] = E.useState("HELLO.");
    return E.useLayoutEffect(()=>{
        setInterval(()=>{
            t(Vf[Math.floor(Math.random() * Vf.length)])
        }
        , 1500)
    }
    , []),
    k.jsx(k.Fragment, {
        children: k.jsx("div", {
            className: "text-black text-xs items-center transition-all duration-300 relative flex w-fit",
            children: k.jsx(gm, {
                children: k.jsx(pm.h4, {
                    className: "px-1.5 py-0.5 bg-white text-black absolute left-0 text-nowrap",
                    initial: {
                        y: 0,
                        opacity: 0,
                        scale: .8
                    },
                    animate: {
                        y: [10, 0],
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        y: [0, -15],
                        opacity: 0,
                        scale: .5
                    },
                    transition: {
                        duration: .5,
                        ease: "easeOut"
                    },
                    children: e
                }, Math.random())
            })
        })
    })
}
  , Ox = "_iconButton_mofbo_1"
  , zx = {
    iconButton: Ox
}
  , en = ({icon: e, href: t, mainRef: n})=>k.jsx("a", {
    role: "button",
    target: "_blank",
    rel: "noopener noreferrer",
    href: t,
    className: zx.iconButton,
    onMouseEnter: ()=>{
        var r;
        (r = n.current) == null || r.style.setProperty("--scale", "2")
    }
    ,
    onMouseLeave: ()=>{
        var r;
        (r = n.current) == null || r.style.setProperty("--scale", "1")
    }
    ,
    children: e
})
  , Ix = ({title: e, techs: t, desc: n, repository: r, live: i, mainRef: o, img: s, setProjectImage: l})=>(E.useEffect(()=>{
    const a = new Image;
    a.src = `./projects/${s}`
}
, []),
k.jsx("div", {
    className: "flex flex-col border-[0.25px] object-cover gap-2 overflow-hidden border-neutral-300 rounded-md group",
    onMouseEnter: ()=>l(s),
    onMouseLeave: ()=>l(void 0),
    children: k.jsxs("div", {
        className: "flex flex-col w-full h-full gap-1 p-4 transition-all",
        children: [k.jsxs("div", {
            className: "flex items-center justify-between",
            children: [k.jsx("h3", {
                children: e
            }), k.jsxs("div", {
                className: "flex items-center gap-3 text-xl",
                children: [r && k.jsx(en, {
                    href: r,
                    mainRef: o,
                    icon: k.jsx(Yh, {})
                }), i && k.jsx(en, {
                    href: i,
                    mainRef: o,
                    icon: k.jsx(cv, {})
                })]
            })]
        }), k.jsx("div", {
            className: "flex gap-2 mb-2",
            children: t.map(a=>k.jsx(Xh, {
                badge: a
            }, a))
        }), k.jsx("p", {
            className: "text-sm text-balance",
            children: n
        })]
    })
}))
  , Bx = ({imgSrc: e})=>k.jsx(gm, {
    children: e && k.jsx(pm.div, {
        initial: {
            opacity: 0,
            scale: .9
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        exit: {
            opacity: 0,
            scale: .9
        },
        transition: {
            duration: .2,
            ease: tu
        },
        className: "absolute top-[-2rem] w-full object-cover xl:block md:hidden sm:hidden",
        children: k.jsx("img", {
            alt: "",
            src: `./projects/${e}`,
            className: "object-cover opacity-90 aspect-[16/9] rounded-xl"
        })
    }, Math.random())
})
  , Ux = [{
    company: "Bangkit Academy",
    position: "Machine Learning",
    period: "Feb 2024 - Jul 2024",
    tech: ['Python', 'Version Control', 'Tensorflow', 'NLP', 'Generative AI']
}, {
    company: "Bank Indonesia",
    position: "scholarship",
    period: "Apr 2023 - Now",
    tech: ['Public Relation', 'Team Work', 'Critical Thinking']
}, {
    company: "PT. Klabat Tekno Perkasa",
    position: "AI Researcher",
    period: "jul 2024 - Now",
    tech: ['LLM', 'Artificial intelligence', 'Python', 'PyTorch', 'Data Analysis',]

},
 ]
  , $x = "_container_1osp9_1"
  , Wx = "_experience_1osp9_8"
  , Df = {
    container: $x,
    experience: Wx
}
  , Hx = ()=>k.jsx("div", {
    className: Df.container,
    children: Ux.map(e=>{
        var t;
        return k.jsxs("div", {
            className: `${Df.experience}`,
            children: [k.jsxs("div", {
                className: "flex items-start justify-between font-mono",
                children: [k.jsxs("div", {
                    children: [k.jsx("h3", {
                        className: "text-base",
                        children: e.company
                    }), k.jsx("p", {
                        className: "text-sm",
                        children: e.position
                    })]
                }), k.jsx("p", {
                    className: "text-sm text-right",
                    children: e.period
                })]
            }), k.jsx("div", {
                className: "flex gap-2",
                children: (t = e.tech) == null ? void 0 : t.map(n=>k.jsx(Xh, {
                    badge: n
                }, n))
            })]
        }, e.company)
    }
    )
});
function Kx() {
    const e = E.useRef(null)
      , [t,n] = E.useState(void 0);
    return E.useEffect(()=>{
        const r = i=>{
            var o, s;
            (o = e.current) == null || o.style.setProperty("--x", `${i.clientX}px`),
            (s = e.current) == null || s.style.setProperty("--y", `${i.clientY}px`)
        }
        ;
        return window.addEventListener("mousemove", r),
        ()=>{
            window.removeEventListener("mousemove", r)
        }
    }
    , []),
    k.jsxs("main", {
        ref: e,
        className: "transition main",
        children: [k.jsx("div", {
            className: "dotted"
        }), k.jsxs("div", {
            className: "relative min-h-screen flex flex-col max-w-[1000px] px-4 mx-auto py-10 md:px-8",
            children: [k.jsxs("div", {
                className: "flex items-center justify-between",
                children: [k.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [k.jsx("div", {
                        className: "caret"
                    }), k.jsx("h3", {
                        children: "OGI WEMY CORINTA"
                    }), k.jsx(Fx, {})]
                }), k.jsx(yv, {
                    text: "Resume",
                    onClick: ()=>{
                        window.open("https://drive.google.com/file/d/1UgiUf1iFCpV0onxxa-4dxFfHAXq-qV6D/view?usp=sharing", "_blank")
                    }
                    ,
                    mainRef: e
                })]
            }), k.jsxs("div", {
                className: "relative flex flex-col w-full gap-10 mt-16 text-balance",
                children: [k.jsxs("div", {
                    className: `flex flex-col gap-10 scale-100 transition delay-75 ${t ? "md:scale-95" : ""}`,
                    children: [k.jsxs("div", {
                        children: [k.jsx("h2", {
                            className: "mb-4",
                            children: "About."
                        }), k.jsxs("p", {
                            className: "w-3/4 text-zinc-200",
                            children: ["I am a Computer Engineering student at Universitas Klabat, currently in my 7th semester. I am passionate about learning and working with", " ", k.jsx("span", {
                                className: "font-mono text-sm font-bold text-orange-main",
                                children: "machine learning and artificial intelligence (AI)"
                            }), " ", " and I am dedicated to expanding my knowledge and skills in these fields. My career aspiration is to become an AI Engineer, where I aim to develop innovative and impactful technology solutions. I am enthusiastic about leveraging my technical expertise to solve complex problems and contribute to advancements in AI and machine learning."]
                        }), k.jsxs("div", {
                            className: "flex gap-4 mt-2 text-xl",
                            children: [k.jsx(en, {
                                icon: k.jsx(Yh, {}),
                                href: "https://github.com/24wemy",
                                mainRef: e
                            }), k.jsx(en, {
                                icon: k.jsx(av, {}),
                                href: "https://www.linkedin.com/in/ogi-wemy-corinta-045767261/",
                                mainRef: e
                            }), k.jsx(en, {
                                icon: k.jsx(lv, {}),
                                href: "https://www.instagram.com/ogiwemy/",
                                mainRef: e
                            }), k.jsx(en, {
                                icon: k.jsx(fv, {}),
                                href: "https://x.com/WemyOgi",
                                mainRef: e
                            }), k.jsx(en, {
                                icon: k.jsx(uv, {}),
                                href: "https://www.youtube.com/channel/UCqssqvPPzcRujaFjGPQxB5g",
                                mainRef: e
                            })]
                        })]
                    }), k.jsxs("div", {
                        children: [k.jsx("h2", {
                            className: "mb-4",
                            children: "Experiences."
                        }), k.jsx(Hx, {})]
                    })]
                }), k.jsx(Bx, {
                    imgSrc: t
                }), k.jsxs("div", {
                    children: [k.jsx("h2", {
                        className: "mb-4",
                    }), k.jsx("div", {
                        className: "grid gap-2 xl:grid-cols-3 projects md:grid-cols-2 sm:grid-cols-1",
                        children: dv.map(r=>E.createElement(Ix, {
                            ...r,
                            setProjectImage: i=>n(i),
                            mainRef: e,
                            key: r.title
                        }))
                    })]
                })]
            })]
        })]
    })
}
As.createRoot(document.getElementById("root")).render(k.jsxs(k.Fragment, {
    children: [k.jsx(Kx, {}), k.jsx(Ym, {})]
}));
