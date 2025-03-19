!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? module.exports = t()
        : "function" == typeof define && define.amd
            ? define(t)
            : e.AOS = t();
}(this, function () {
    "use strict";

    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        t = "Expected a function",
        n = NaN,
        o = "[object Symbol]",
        i = /^\s+|\s+$/g,
        a = /^[-+]0x[0-9a-f]+$/i,
        r = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        s = parseInt,
        u = "object" == typeof e && e && e.Object === Object && e,
        d = "object" == typeof self && self && self.Object === Object && self,
        l = u || d || Function("return this")(),
        f = Object.prototype.toString,
        m = Math.max,
        p = Math.min,
        b = function () {
            return l.Date.now();
        };

    function v(e, n, o) {
        var i, a, r, c, s, u, d = 0,
            l = !1,
            f = !1,
            v = !0;

        if ("function" != typeof e) throw new TypeError(t);

        function y(t) {
            var n = i,
                o = a;
            return i = a = void 0, d = t, c = e.apply(o, n);
        }

        function h(e) {
            var t = e - u;
            return void 0 === u || t >= n || t < 0 || f && e - d >= r;
        }

        function k() {
            var e = b();
            if (h(e)) return x(e);
            s = setTimeout(k, function (e) {
                var t = n - (e - u);
                return f ? p(t, r - (e - d)) : t;
            }(e));
        }

        function x(e) {
            return s = void 0, v && i ? y(e) : (i = a = void 0, c);
        }

        function O() {
            var e = b(),
                t = h(e);
            if (i = arguments, a = this, u = e, t) {
                if (void 0 === s) return function (e) {
                    return d = e, s = setTimeout(k, n), l ? y(e) : c;
                }(u);
                if (f) return s = setTimeout(k, n), y(u);
            }
            return void 0 === s && (s = setTimeout(k, n)), c;
        }

        return n = w(n) || 0, g(o) && (l = !!o.leading, r = (f = "maxWait" in o) ? m(w(o.maxWait) || 0, n) : r, v = "trailing" in o ? !!o.trailing : v), O.cancel = function () {
            void 0 !== s && clearTimeout(s), d = 0, i = u = a = s = void 0;
        }, O.flush = function () {
            return void 0 === s ? c : x(b());
        }, O;
    }

    function g(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
    }

    function w(e) {
        if ("number" == typeof e) return e;
        if (function (e) {
            return "symbol" == typeof e || function (e) {
                return !!e && "object" == typeof e;
            }(e) && f.call(e) == o;
        }(e)) return n;
        if (g(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = g(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(i, "");
        var u = r.test(e);
        return u || c.test(e) ? s(e.slice(2), u ? 2 : 8) : a.test(e) ? n : +e;
    }

    var y = function (e, n, o) {
        var i = !0,
            a = !0;
        if ("function" != typeof e) throw new TypeError(t);
        return g(o) && (i = "leading" in o ? !!o.leading : i, a = "trailing" in o ? !!o.trailing : a), v(e, n, {
            leading: i,
            maxWait: n,
            trailing: a
        });
    };

    // The rest of the code continues here...
});