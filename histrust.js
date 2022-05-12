!function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, true) : function (t) {
      if (!t.document) throw new Error("jQuery requires a window with a document");
      return e(t);
    } : e(t);
  }("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";
    function i(t, e, i) {
      var n, s, o = (i = i || ct).createElement("script");
      if (o.text = t, e) for (n in dt) (s = e[n] || e.getAttribute && e.getAttribute(n)) && o.setAttribute(n, s);
      i.head.appendChild(o).parentNode.removeChild(o);
    }
    function n(t) {
      return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? nt[st.call(t)] || "object" : typeof t;
    }
    function s(t) {
      var e = !!t && "length" in t && t.length, i = n(t);
      return !("function" == typeof t && "number" != typeof t.nodeType) && !(null != t && t === t.window) && ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t);
    }
    function r(t, e, i) {
      return "function" == typeof e && "number" != typeof e.nodeType ? ft.grep(t, function (t, n) {
        return !!e.call(t, n, t) !== i;
      }) : e.nodeType ? ft.grep(t, function (t) {
        return t === e !== i;
      }) : "string" != typeof e ? ft.grep(t, function (t) {
        return -1 < it.call(e, t) !== i;
      }) : ft.filter(e, t, i);
    }
    function a(t, e) {
      for (; (t = t[e]) && 1 !== t.nodeType;) ;
      return t;
    }
    function h(t) {
      throw t;
    }
    function u(t, e, i, n) {
      var s;
      try {
        t && ("function" == typeof (s = t.promise) && "number" != typeof (s = t.promise).nodeType) ? s.call(t).done(e).fail(i) : t && ("function" == typeof (s = t.then) && "number" != typeof (s = t.then).nodeType) ? s.call(t, e, i) : e.apply(void 0, [t].slice(n));
      } catch (t) {
        i.apply(void 0, [t]);
      }
    }
    function c() {
      ct.removeEventListener("DOMContentLoaded", c), t.removeEventListener("load", c), ft.ready();
    }
    function f() {
      this.expando = ft.expando + f.uid++;
    }
    function g(t, e, i) {
      var n, s;
      if (void 0 === i && 1 === t.nodeType) if (n = "data-" + e.replace(Nt, "-$&").toLowerCase(), "string" == typeof (i = t.getAttribute(n))) {
        try {
          i = "true" === (s = i) || "false" !== s && ("null" === s ? null : s === +s + "" ? +s : Ht.test(s) ? JSON.parse(s) : s);
        } catch (t) {}
        Et.set(t, e, i);
      } else i = void 0;
      return i;
    }
    function m(t, e, i, n) {
      var s, o, r = 20, a = n ? function () {
        return n.cur();
      } : function () {
        return ft.css(t, e, "");
      }, l = a(), h = i && i[3] || (ft.cssNumber[e] ? "" : "px"), u = t.nodeType && (ft.cssNumber[e] || "px" !== h && +l) && zt.exec(ft.css(t, e));
      if (u && u[3] !== h) {
        for (l /= 2, h = h || u[3], u = +l || 1; r--;) ft.style(t, e, u + h), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (r = 0), u /= o;
        u *= 2, ft.style(t, e, u + h), i = i || [];
      }
      return i && (u = +u || +l || 0, s = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = h, n.start = u, n.end = s)), s;
    }
    function v(t, e) {
      for (var i, n, s, o, r, a, l, h = [], u = 0, c = t.length; u < c; u++) (n = t[u]).style && (i = n.style.display, e ? ("none" === i && (h[u] = At.get(n, "display") || null, h[u] || (n.style.display = "")), "" === n.style.display && ("none" === (n = e || n).style.display || "" === n.style.display && ft.contains(n.ownerDocument, n) && "none" === ft.css(n, "display")) && (h[u] = (l = r = o = void 0, r = (s = n).ownerDocument, a = s.nodeName, (l = qt[a]) || (o = r.body.appendChild(r.createElement(a)), l = ft.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), qt[a] = l)))) : "none" !== i && (h[u] = "none", At.set(n, "display", i)));
      for (u = 0; u < c; u++) null != h[u] && (t[u].style.display = h[u]);
      return t;
    }
    function _(t, e) {
      var i;
      return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && (t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()) ? ft.merge([t], i) : i;
    }
    function b(t, e) {
      for (var i = 0, n = t.length; i < n; i++) At.set(t[i], "globalEval", !e || At.get(e[i], "globalEval"));
    }
    function y(t, e, i, s, o) {
      for (var r, a, l, h, u, c, d = e.createDocumentFragment(), p = [], f = 0, g = t.length; f < g; f++) if ((r = t[f]) || 0 === r) if ("object" === n(r)) ft.merge(p, r.nodeType ? [r] : r); else if (Xt.test(r)) {
        for (a = a || d.appendChild(e.createElement("div")), l = ($t.exec(r) || ["", ""])[1].toLowerCase(), h = Vt[l] || Vt._default, a.innerHTML = h[1] + ft.htmlPrefilter(r) + h[2], c = h[0]; c--;) a = a.lastChild;
        ft.merge(p, a.childNodes), (a = d.firstChild).textContent = "";
      } else p.push(e.createTextNode(r));
      for (d.textContent = "", f = 0; r = p[f++];) if (s && -1 < ft.inArray(r, s)) o && o.push(r); else if (u = ft.contains(r.ownerDocument, r), a = _(d.appendChild(r), "script"), u && b(a), i) for (c = 0; r = a[c++];) Kt.test(r.type || "") && i.push(r);
      return d;
    }
    function C(t, e) {
      return t === function () {
        try {
          return ct.activeElement;
        } catch (t) {}
      }() == ("focus" === e);
    }
    function k(t, e, i, n, s, o) {
      var r, a;
      if ("object" == typeof e) {
        for (a in "string" != typeof i && (n = n || i, i = void 0), e) k(t, a, i, n, e[a], o);
        return t;
      }
      if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), false === s) s = x; else if (!s) return t;
      return 1 === o && (r = s, (s = function (t) {
        return ft().off(t), r.apply(this, arguments);
      }).guid = r.guid || (r.guid = ft.guid++)), t.each(function () {
        ft.event.add(this, e, s, n, i);
      });
    }
    function D(t, e, i) {
      i ? (At.set(t, e, false), ft.event.add(t, e, {namespace: false, handler: function (t) {
        var n, s, o = At.get(this, e);
        if (1 & t.isTrigger && this[e]) {
          if (o.length) (ft.event.special[e] || {}).delegateType && t.stopPropagation(); else if (o = Z.call(arguments), At.set(this, e, o), n = i(this, e), this[e](), o !== (s = At.get(this, e)) || n ? At.set(this, e, false) : s = {}, o !== s) return t.stopImmediatePropagation(), t.preventDefault(), s.value;
        } else o.length && (At.set(this, e, {value: ft.event.trigger(ft.extend(o[0], ft.Event.prototype), o.slice(1), this)}), t.stopImmediatePropagation());
      }})) : void 0 === At.get(t, e) && ft.event.add(t, e, w);
    }
    function P(t, e) {
      var i, n, s, o, r, a;
      if (1 === e.nodeType) {
        if (At.hasData(t) && (a = At.get(t).events)) for (s in At.remove(e, "handle events"), a) for (i = 0, n = a[s].length; i < n; i++) ft.event.add(e, s, a[s][i]);
        Et.hasData(t) && (o = Et.access(t), r = ft.extend({}, o), Et.set(e, r));
      }
    }
    function M(t, e, n, s) {
      e = tt(e);
      var o, r, a, l, h, u, c = 0, d = t.length, p = d - 1, f = e[0], g = "function" == typeof f && "number" != typeof f.nodeType;
      if (g || 1 < d && "string" == typeof f && !lt.checkClone && te.test(f)) return t.each(function (i) {
        var o = t.eq(i);
        g && (e[0] = f.call(this, i, o.html())), M(o, e, n, s);
      });
      if (d && (r = (o = y(e, t[0].ownerDocument, false, t, s)).firstChild, 1 === o.childNodes.length && (o = r), r || s)) {
        for (l = (a = ft.map(_(o, "script"), I)).length; c < d; c++) h = o, c !== p && (h = ft.clone(h, true, true), l && ft.merge(a, _(h, "script"))), n.call(t[c], h, c);
        if (l) for (u = a[a.length - 1].ownerDocument, ft.map(a, S), c = 0; c < l; c++) h = a[c], Kt.test(h.type || "") && !At.access(h, "globalEval") && ft.contains(u, h) && (h.src && "module" !== (h.type || "").toLowerCase() ? ft._evalUrl && !h.noModule && ft._evalUrl(h.src, {nonce: h.nonce || h.getAttribute("nonce")}, u) : i(h.textContent.replace(ee, ""), h, u));
      }
      return t;
    }
    function A(t, e, i) {
      for (var n, s = e ? ft.filter(e, t) : t, o = 0; null != (n = s[o]); o++) i || 1 !== n.nodeType || ft.cleanData(_(n)), n.parentNode && (i && ft.contains(n.ownerDocument, n) && b(_(n, "script")), n.parentNode.removeChild(n));
      return t;
    }
    function E(t, e, i) {
      var n, s, o, r, a = t.style;
      return (i = i || ne(t)) && ("" !== (r = i.getPropertyValue(e) || i[e]) || ft.contains(t.ownerDocument, t) || (r = ft.style(t, e)), !lt.pixelBoxStyles() && ie.test(r) && oe.test(e) && (n = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = s, a.maxWidth = o)), void 0 !== r ? r + "" : r;
    }
    function H(t, e) {
      return {get: function () {
        if (!t()) return (this.get = e).apply(this, arguments);
        delete this.get;
      }};
    }
    function N(t) {
      return ft.cssProps[t] || le[t] || (t in ae ? t : le[t] = function (t) {
        for (var e = t[0].toUpperCase() + t.slice(1), i = re.length; i--;) if ((t = re[i] + e) in ae) return t;
      }(t) || t);
    }
    function O(t, e, i) {
      var n = zt.exec(e);
      return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e;
    }
    function z(t, e, i, n, s, o) {
      var r = "width" === e ? 1 : 0, a = 0, l = 0;
      if (i === (n ? "border" : "content")) return 0;
      for (; r < 4; r += 2) "margin" === i && (l += ft.css(t, i + Lt[r], true, s)), n ? ("content" === i && (l -= ft.css(t, "padding" + Lt[r], true, s)), "margin" !== i && (l -= ft.css(t, "border" + Lt[r] + "Width", true, s))) : (l += ft.css(t, "padding" + Lt[r], true, s), "padding" !== i ? l += ft.css(t, "border" + Lt[r] + "Width", true, s) : a += ft.css(t, "border" + Lt[r] + "Width", true, s));
      return !n && 0 <= o && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5)) || 0), l;
    }
    function L(t, e, i) {
      var n = ne(t), s = (!lt.boxSizingReliable() || i) && "border-box" === ft.css(t, "boxSizing", false, n), r = s, a = E(t, e, n), l = "offset" + e[0].toUpperCase() + e.slice(1);
      if (ie.test(a)) {
        if (!i) return a;
        a = "auto";
      }
      return (!lt.boxSizingReliable() && s || !lt.reliableTrDimensions() && (t.nodeName && t.nodeName.toLowerCase() === "tr".toLowerCase()) || "auto" === a || !parseFloat(a) && "inline" === ft.css(t, "display", false, n)) && t.getClientRects().length && (s = "border-box" === ft.css(t, "boxSizing", false, n), (r = l in t) && (a = t[l])), (a = parseFloat(a) || 0) + z(t, e, i || (s ? "border" : "content"), r, n, a) + "px";
    }
    function W(t, e, i, n, s) {
      return new W.prototype.init(t, e, i, n, s);
    }
    function F() {
      fe && (false === ct.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(F) : t.setTimeout(F, ft.fx.interval), ft.fx.tick());
    }
    function R() {
      return t.setTimeout(function () {
        pe = void 0;
      }), pe = Date.now();
    }
    function j(t, e) {
      var i, n = 0, s = {height: t};
      for (e = e ? 1 : 0; n < 4; n += 2 - e) s["margin" + (i = Lt[n])] = s["padding" + i] = t;
      return e && (s.opacity = s.width = t), s;
    }
    function q(t, e, i) {
      for (var n, s = (B.tweeners[e] || []).concat(B.tweeners["*"]), o = 0, r = s.length; o < r; o++) if (n = s[o].call(i, e, t)) return n;
    }
    function B(t, e, i) {
      var n, s, o = 0, r = B.prefilters.length, a = ft.Deferred().always(function () {
        delete l.elem;
      }), l = function () {
        if (s) return false;
        for (var e = pe || R(), i = Math.max(0, h.startTime + h.duration - e), n = 1 - (i / h.duration || 0), o = 0, r = h.tweens.length; o < r; o++) h.tweens[o].run(n);
        return a.notifyWith(t, [h, n, i]), n < 1 && r ? i : (r || a.notifyWith(t, [h, 1, 0]), a.resolveWith(t, [h]), false);
      }, h = a.promise({elem: t, props: ft.extend({}, e), opts: ft.extend(true, {specialEasing: {}, easing: ft.easing._default}, i), originalProperties: e, originalOptions: i, startTime: pe || R(), duration: i.duration, tweens: [], createTween: function (e, i) {
        var n = ft.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
        return h.tweens.push(n), n;
      }, stop: function (e) {
        var i = 0, n = e ? h.tweens.length : 0;
        if (s) return this;
        for (s = true; i < n; i++) h.tweens[i].run(1);
        return e ? (a.notifyWith(t, [h, 1, 0]), a.resolveWith(t, [h, e])) : a.rejectWith(t, [h, e]), this;
      }}), u = h.props;
      for (!function (t, e) {
        var i, n, s, o, r;
        for (i in t) if (s = e[n = i.replace(St, "ms-").replace(Pt, d)], o = t[i], Array.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), (r = ft.cssHooks[n]) && "expand" in r) for (i in o = r.expand(o), delete t[n], o) i in t || (t[i] = o[i], e[i] = s); else e[n] = s;
      }(u, h.opts.specialEasing); o < r; o++) if (n = B.prefilters[o].call(h, t, u, h.opts)) return "function" == typeof n.stop && "number" != typeof n.stop.nodeType && (ft._queueHooks(h.elem, h.opts.queue).stop = n.stop.bind(n)), n;
      return ft.map(u, q, h), "function" == typeof h.opts.start && "number" != typeof h.opts.start.nodeType && h.opts.start.call(t, h), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always), ft.fx.timer(ft.extend(l, {elem: t, anim: h, queue: h.opts.queue})), h;
    }
    function $(t) {
      return Array.isArray(t) ? t : "string" == typeof t && t.match(kt) || [];
    }
    function K(t, e, i, s) {
      var o;
      if (Array.isArray(e)) ft.each(e, function (e, n) {
        i || Pe.test(t) ? s(t, n) : K(t + "[" + ("object" == typeof n && null != n ? e : "") + "]", n, i, s);
      }); else if (i || "object" !== n(e)) s(t, e); else for (o in e) K(t + "[" + o + "]", e[o], i, s);
    }
    function V(t) {
      return function (e, i) {
        "string" != typeof e && (i = e, e = "*");
        var n, s = 0, o = e.toLowerCase().match(kt) || [];
        if ("function" == typeof i && "number" != typeof i.nodeType) for (; n = o[s++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i);
      };
    }
    function X(t, e, i, n) {
      function s(a) {
        var l;
        return o[a] = true, ft.each(t[a] || [], function (t, a) {
          var h = a(e, i, n);
          return "string" != typeof h || r || o[h] ? r ? !(l = h) : void 0 : (e.dataTypes.unshift(h), s(h), false);
        }), l;
      }
      var o = {}, r = t === Re;
      return s(e.dataTypes[0]) || !o["*"] && s("*");
    }
    function G(t, e) {
      var i, n, s = ft.ajaxSettings.flatOptions || {};
      for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
      return n && ft.extend(true, t, n), t;
    }
    var Q = [], J = Object.getPrototypeOf, Z = Q.slice, tt = Q.flat ? function (t) {
      return Q.flat.call(t);
    } : function (t) {
      return Q.concat.apply([], t);
    }, et = Q.push, it = Q.indexOf, nt = {}, st = nt.toString, ot = nt.hasOwnProperty, rt = ot.toString, at = rt.call(Object), lt = {}, ct = t.document, dt = {type: true, src: true, nonce: true, noModule: true}, pt = "3.5.1", ft = function (t, e) {
      return new ft.fn.init(t, e);
    };
    ft.fn = ft.prototype = {jquery: pt, constructor: ft, length: 0, toArray: function () {
      return Z.call(this);
    }, get: function (t) {
      return null == t ? Z.call(this) : t < 0 ? this[t + this.length] : this[t];
    }, pushStack: function (t) {
      var e = ft.merge(this.constructor(), t);
      return e.prevObject = this, e;
    }, each: function (t) {
      return ft.each(this, t);
    }, map: function (t) {
      return this.pushStack(ft.map(this, function (e, i) {
        return t.call(e, i, e);
      }));
    }, slice: function () {
      return this.pushStack(Z.apply(this, arguments));
    }, first: function () {
      return this.eq(0);
    }, last: function () {
      return this.eq(-1);
    }, even: function () {
      return this.pushStack(ft.grep(this, function (t, e) {
        return (e + 1) % 2;
      }));
    }, odd: function () {
      return this.pushStack(ft.grep(this, function (t, e) {
        return e % 2;
      }));
    }, eq: function (t) {
      var e = this.length, i = +t + (t < 0 ? e : 0);
      return this.pushStack(0 <= i && i < e ? [this[i]] : []);
    }, end: function () {
      return this.prevObject || this.constructor();
    }, push: et, sort: Q.sort, splice: Q.splice}, ft.extend = ft.fn.extend = function () {
      var t, e, i, n, s, o, r = arguments[0] || {}, a = 1, l = arguments.length, h = false;
      for ("boolean" == typeof r && (h = r, r = arguments[a] || {}, a++), "object" == typeof r || "function" == typeof r && "number" != typeof r.nodeType || (r = {}), a === l && (r = this, a--); a < l; a++) if (null != (t = arguments[a])) for (e in t) n = t[e], "__proto__" !== e && r !== n && (h && n && (ft.isPlainObject(n) || (s = Array.isArray(n))) ? (i = r[e], o = s && !Array.isArray(i) ? [] : s || ft.isPlainObject(i) ? i : {}, s = false, r[e] = ft.extend(h, o, n)) : void 0 !== n && (r[e] = n));
      return r;
    }, ft.extend({expando: "jQuery" + (pt + Math.random()).replace(/\D/g, ""), isReady: true, error: function (t) {
      throw new Error(t);
    }, noop: function () {}, isPlainObject: function (t) {
      var e, i;
      return !(!t || "[object Object]" !== st.call(t) || (e = J(t)) && ("function" != typeof (i = ot.call(e, "constructor") && e.constructor) || rt.call(i) !== at));
    }, isEmptyObject: function (t) {
      var e;
      for (e in t) return false;
      return true;
    }, globalEval: function (t, e, n) {
      i(t, {nonce: e && e.nonce}, n);
    }, each: function (t, e) {
      var i, n = 0;
      if (s(t)) for (i = t.length; n < i && false !== e.call(t[n], n, t[n]); n++) ; else for (n in t) if (false === e.call(t[n], n, t[n])) break;
      return t;
    }, makeArray: function (t, e) {
      var i = e || [];
      return null != t && (s(Object(t)) ? ft.merge(i, "string" == typeof t ? [t] : t) : et.call(i, t)), i;
    }, inArray: function (t, e, i) {
      return null == e ? -1 : it.call(e, t, i);
    }, merge: function (t, e) {
      for (var i = +e.length, n = 0, s = t.length; n < i; n++) t[s++] = e[n];
      return t.length = s, t;
    }, grep: function (t, e, i) {
      for (var n = [], s = 0, o = t.length, r = !i; s < o; s++) !e(t[s], s) !== r && n.push(t[s]);
      return n;
    }, map: function (t, e, i) {
      var n, o, r = 0, a = [];
      if (s(t)) for (n = t.length; r < n; r++) null != (o = e(t[r], r, i)) && a.push(o); else for (r in t) null != (o = e(t[r], r, i)) && a.push(o);
      return tt(a);
    }, guid: 1, support: lt}), "function" == typeof Symbol && (ft.fn[Symbol.iterator] = Q[Symbol.iterator]), ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
      nt["[object " + e + "]"] = e.toLowerCase();
    });
    var gt = function (t) {
      function e(t, e, i, n) {
        var s, o, r, a, l, u, d, p = e && e.ownerDocument, f = e ? e.nodeType : 9;
        if (i = i || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return i;
        if (!n && ("true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e, e = e || P, A)) {
          if (11 !== f && (l = gt.exec(t))) if (s = l[1]) {
            if (9 === f) {
              if (!(r = e.getElementById(s))) return i;
              if (r.id === s) return i.push(r), i;
            } else if (p && (r = p.getElementById(s)) && O(e, r) && r.id === s) return i.push(r), i;
          } else {
            if (l[2]) return X.apply(i, e.getElementsByTagName(t)), i;
            if ((s = l[3]) && _.getElementsByClassName && e.getElementsByClassName) return X.apply(i, e.getElementsByClassName(s)), i;
          }
          if (_.qsa && !B[t + " "] && (!E || !E.test(t)) && (1 !== f || "object" !== e.nodeName.toLowerCase())) {
            if (d = t, p = e, 1 === f && (at.test(t) || rt.test(t))) {
              for ((p = mt.test(t) && (e.parentNode && void 0 !== e.parentNode.getElementsByTagName && e.parentNode) || e) === e && _.scope || ((a = e.getAttribute("id")) ? a = a.replace(bt, yt) : e.setAttribute("id", a = z)), o = (u = false).length; o--;) u[o] = (a ? "#" + a : ":scope") + " " + c(u[o]);
              d = u.join(",");
            }
            try {
              return X.apply(i, p.querySelectorAll(d)), i;
            } catch (e) {
              B(t, true);
            } finally {
              a === z && e.removeAttribute("id");
            }
          }
        }
        return k(t.replace(st, "$1"), e, i, n);
      }
      function i() {
        var t = [];
        return function e(i, n) {
          return t.push(i + " ") > b.cacheLength && delete e[t.shift()], e[i + " "] = n;
        };
      }
      function s(t) {
        var e = P.createElement("fieldset");
        try {
          return !!t(e);
        } catch (t) {
          return false;
        } finally {
          e.parentNode && e.parentNode.removeChild(e), e = null;
        }
      }
      function o(t, e) {
        for (var i = t.split("|"), n = i.length; n--;) b.attrHandle[i[n]] = e;
      }
      function r(t, e) {
        var i = e && t, n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
        if (n) return n;
        if (i) for (; i = i.nextSibling;) if (i === e) return -1;
        return t ? 1 : -1;
      }
      function a(t) {
        return function (e) {
          return "form" in e ? e.parentNode && false === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && xt(e) === t : e.disabled === t : "label" in e && e.disabled === t;
        };
      }
      function l(t) {
        return function (e) {
          return e = +e, (function (i, n) {
            for (var s, o = t([], i.length, e), r = o.length; r--;) i[s = o[r]] && (i[s] = !(n[s] = i[s]));
          }[z] = true, function (i, n) {
            for (var s, o = t([], i.length, e), r = o.length; r--;) i[s = o[r]] && (i[s] = !(n[s] = i[s]));
          });
        }[z] = true, function (e) {
          return e = +e, (function (i, n) {
            for (var s, o = t([], i.length, e), r = o.length; r--;) i[s = o[r]] && (i[s] = !(n[s] = i[s]));
          }[z] = true, function (i, n) {
            for (var s, o = t([], i.length, e), r = o.length; r--;) i[s = o[r]] && (i[s] = !(n[s] = i[s]));
          });
        };
      }
      function u() {}
      function c(t) {
        for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
        return n;
      }
      function d(t, e, i) {
        var n = e.dir, s = e.next, o = s || n, r = i && "parentNode" === o, a = F++;
        return e.first ? function (e, i, s) {
          for (; e = e[n];) if (1 === e.nodeType || r) return t(e, i, s);
          return false;
        } : function (e, i, l) {
          var h, u, c, d = [W, a];
          if (l) {
            for (; e = e[n];) if ((1 === e.nodeType || r) && t(e, i, l)) return true;
          } else for (; e = e[n];) if (1 === e.nodeType || r) if (u = (c = e[z] || (e[z] = {}))[e.uniqueID] || (c[e.uniqueID] = {}), s && s === e.nodeName.toLowerCase()) e = e[n] || e; else {
            if ((h = u[o]) && h[0] === W && h[1] === a) return d[2] = h[2];
            if ((u[o] = d)[2] = t(e, i, l)) return true;
          }
          return false;
        };
      }
      function p(t) {
        return 1 < t.length ? function (e, i, n) {
          for (var s = t.length; s--;) if (!t[s](e, i, n)) return false;
          return true;
        } : t[0];
      }
      function f(t, e, i, n, s) {
        for (var o, r = [], a = 0, l = t.length, h = null != e; a < l; a++) (o = t[a]) && (i && !i(o, n, s) || (r.push(o), h && e.push(a)));
        return r;
      }
      function g(t, i, s, o, r, a) {
        return o && !o[z] && (o = g(o)), r && !r[z] && (r = g(r, a)), (function (n, a, l, h) {
          var u, c, d, p = [], g = [], m = a.length, v = n || function (t, i, n) {
            for (var s = 0, o = i.length; s < o; s++) e(t, i[s], n);
            return n;
          }(i || "*", l.nodeType ? [l] : l, []), _ = !t || !n && i ? v : f(v, p, t, l, h), b = s ? r || (n ? t : m || o) ? [] : a : _;
          if (s && s(_, b, l, h), o) for (u = f(b, g), u.nodeName && u.nodeName.toLowerCase() === [].toLowerCase(), c = u.length; c--;) (d = u[c]) && (b[g[c]] = !(_[g[c]] = d));
          if (n) {
            if (r || t) {
              if (r) {
                for (u = [], c = b.length; c--;) (d = b[c]) && u.push(_[c] = d);
                r(null, b = [], u, h);
              }
              for (c = b.length; c--;) (d = b[c]) && -1 < (u = r ? Q(n, d) : p[c]) && (n[u] = !(a[u] = d));
            }
          } else b = f(b === a ? b.splice(m, b.length) : b), r ? r(null, a, b, h) : X.apply(a, b);
        }[z] = true, function (n, a, l, h) {
          var u, c, d, p = [], g = [], m = a.length, v = n || function (t, i, n) {
            for (var s = 0, o = i.length; s < o; s++) e(t, i[s], n);
            return n;
          }(i || "*", l.nodeType ? [l] : l, []), _ = !t || !n && i ? v : f(v, p, t, l, h), b = s ? r || (n ? t : m || o) ? [] : a : _;
          if (s && s(_, b, l, h), o) for (u = f(b, g), u.nodeName && u.nodeName.toLowerCase() === [].toLowerCase(), c = u.length; c--;) (d = u[c]) && (b[g[c]] = !(_[g[c]] = d));
          if (n) {
            if (r || t) {
              if (r) {
                for (u = [], c = b.length; c--;) (d = b[c]) && u.push(_[c] = d);
                r(null, b = [], u, h);
              }
              for (c = b.length; c--;) (d = b[c]) && -1 < (u = r ? Q(n, d) : p[c]) && (n[u] = !(a[u] = d));
            }
          } else b = f(b === a ? b.splice(m, b.length) : b), r ? r(null, a, b, h) : X.apply(a, b);
        });
      }
      function m(t) {
        for (var e, i, n, s = t.length, o = b.relative[t[0].type], r = o || b.relative[" "], a = o ? 1 : 0, l = r.toUpperCase(), h = r.toUpperCase(), u = [function (t, i, n) {
          var s = !o && (n || i !== D) || ((e = i).nodeType ? t : t && void 0 !== t.getElementsByTagName && t);
          return e = null, s;
        }]; a < s; a++) if (i = b.relative[t[a].type]) u = [i.toUpperCase()]; else {
          if ((i = b.filter[t[a].type].apply(null, t[a].matches))[z]) {
            for (n = ++a; n < s && !b.relative[t[n].type]; n++) ;
            return g(1 < a && u.replace(St, "ms-").replace(Pt, d), 1 < a && c(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(st, "$1"), i, a < n && m(t.slice(a, n)), n < s && m(t = t.slice(n)), n < s && c(t));
          }
          u.push(i);
        }
        return u.replace(St, "ms-").replace(Pt, d);
      }
      var v, _, b, y, w, x, C, k, D, T, I, S, P, M, A, E, H, N, O, z = "sizzle" + 1 * new Date, L = t.document, W = 0, F = 0, R = i(), j = i(), q = i(), B = i(), U = {}.hasOwnProperty, $ = [], K = $.pop, V = $.push, X = $.push, G = $.slice, Q = function (t, e) {
        for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
        return -1;
      }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", Z = "[\\x20\\t\\r\\n\\f]", tt = "(?:\\\\[\\da-fA-F]{1,6}" + Z + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^-\\x7f])+", et = "\\[" + Z + "*(" + tt + ")(?:" + Z + "*([*^$|!~]?=)" + Z + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + Z + "*\\]", it = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + et + ")*)|.*)\\)|)", nt = new RegExp(Z + "+", "g"), st = new RegExp("^" + Z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Z + "+$", "g"), ot = new RegExp("^" + Z + "*," + Z + "*"), rt = new RegExp("^" + Z + "*([>+~]|" + Z + ")" + Z + "*"), at = new RegExp(Z + "|>"), lt = new RegExp(it), ht = new RegExp("^" + tt + "$"), ut = {ID: new RegExp("^#(" + tt + ")"), CLASS: new RegExp("^\\.(" + tt + ")"), TAG: new RegExp("^(" + tt + "|[*])"), ATTR: new RegExp("^" + et), PSEUDO: new RegExp("^" + it), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + Z + "*(even|odd|(([+-]|)(\\d*)n|)" + Z + "*(?:([+-]|)" + Z + "*(\\d+)|))" + Z + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + Z + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + Z + "*((?:-\\d)?\\d*)" + Z + "*\\)|)(?=[^-]|$)", "i")}, ct = /HTML$/i, dt = /^(?:input|select|textarea|button)$/i, pt = /^h\d$/i, ft = /^[^{]+\{\s*\[native \w/, gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, mt = /[+~]/, vt = new RegExp("\\\\[\\da-fA-F]{1,6}" + Z + "?|\\\\([^\\r\\n\\f])", "g"), _t = function (t, e) {
        var i = "0x" + t.slice(1) - 65536;
        return e || (i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320));
      }, bt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, yt = function (t, e) {
        return e ? "" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
      }, wt = function () {
        "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t;
      }, xt = {dir: "parentNode", next: "legend"}.toUpperCase();
      try {
        X.apply($ = G.call(L.childNodes), L.childNodes), $[L.childNodes.length].nodeType;
      } catch (v) {
        X = {apply: $.length ? function (t, e) {
          V.apply(t, G.call(e));
        } : function (t, e) {
          for (var i = t.length, n = 0; t[i++] = e[n++];) ;
          t.length = i - 1;
        }};
      }
      for (v in _ = e.support = {}, w = e.isXML = function (t) {
        var e = t.namespaceURI, i = (t.ownerDocument || t).documentElement;
        return !ct.test(e || i && i.nodeName || "HTML");
      }, S = e.setDocument = function (t) {
        var e, i, n = t ? t.ownerDocument || t : L;
        return n != P && 9 === n.nodeType && n.documentElement && (M = (P = n).documentElement, A = !true, L != P && (i = P.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", wt, false) : i.attachEvent && i.attachEvent("onunload", wt)), _.scope = s(function (t) {
          return M.appendChild(t).appendChild(P.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length;
        }), _.attributes = s(function (t) {
          return t.className = "i", !t.getAttribute("className");
        }), _.getElementsByTagName = s(function (t) {
          return t.appendChild(P.createComment("")), !t.getElementsByTagName("*").length;
        }), _.getElementsByClassName = ft.test(P.getElementsByClassName), _.getById = s(function (t) {
          return M.appendChild(t).id = z, !P.getElementsByName || !P.getElementsByName(z).length;
        }), _.getById ? (b.filter.ID = function (t) {
          var e = t.replace(vt, _t);
          return function (t) {
            return t.getAttribute("id") === e;
          };
        }, b.find.ID = function (t, e) {
          if (void 0 !== e.getElementById && A) {
            var i = e.getElementById(t);
            return i ? [i] : [];
          }
        }) : (b.filter.ID = function (t) {
          var e = t.replace(vt, _t);
          return function (t) {
            var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
            return i && i.value === e;
          };
        }, b.find.ID = function (t, e) {
          if (void 0 !== e.getElementById && A) {
            var i, n, s, o = e.getElementById(t);
            if (o) {
              if ((i = o.getAttributeNode("id")) && i.value === t) return [o];
              for (s = e.getElementsByName(t), n = 0; o = s[n++];) if ((i = o.getAttributeNode("id")) && i.value === t) return [o];
            }
            return [];
          }
        }), b.find.TAG = _.getElementsByTagName ? function (t, e) {
          return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : _.qsa ? e.querySelectorAll(t) : void 0;
        } : function (t, e) {
          var i, n = [], s = 0, o = e.getElementsByTagName(t);
          if ("*" === t) {
            for (; i = o[s++];) 1 === i.nodeType && n.push(i);
            return n;
          }
          return o;
        }, b.find.CLASS = _.getElementsByClassName && function (t, e) {
          if (void 0 !== e.getElementsByClassName && A) return e.getElementsByClassName(t);
        }, H = [], E = [], (_.qsa = ft.test(P.querySelectorAll)) && (s(function (t) {
          var e;
          M.appendChild(t).innerHTML = "<a id='" + z + "'></a><select id='" + z + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && E.push("[*^$]=" + Z + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || E.push("\\[" + Z + "*(?:value|" + J + ")"), t.querySelectorAll("[id~=" + z + "-]").length || E.push("~="), (e = P.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || E.push("\\[" + Z + "*name" + Z + "*=" + Z + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || E.push(":checked"), t.querySelectorAll("a#" + z + "+*").length || E.push(".#.+[+~]"), t.querySelectorAll("\\"), E.push("[\\r\\n\\f]");
        }), s(function (t) {
          t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var e = P.createElement("input");
          e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && E.push("name" + Z + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && E.push(":enabled", ":disabled"), M.appendChild(t).disabled = true, 2 !== t.querySelectorAll(":disabled").length && E.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), E.push(",.*:");
        })), (_.matchesSelector = ft.test(N = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && s(function (t) {
          _.disconnectedMatch = N.call(t, "*"), N.call(t, "[s!='']:x"), H.push("!=", it);
        }), E = E.length && new RegExp(E.join("|")), H = H.length && new RegExp(H.join("|")), e = ft.test(M.compareDocumentPosition), O = e || ft.test(M.contains) ? function (t, e) {
          var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
          return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)));
        } : function (t, e) {
          if (e) for (; e = e.parentNode;) if (e === t) return true;
          return false;
        }, Y = e ? function (t, e) {
          if (t === e) return I = true, 0;
          var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
          return i || (1 & (i = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !_.sortDetached && e.compareDocumentPosition(t) === i ? t == P || t.ownerDocument == L && O(L, t) ? -1 : e == P || e.ownerDocument == L && O(L, e) ? 1 : T ? Q(T, t) - Q(T, e) : 0 : 4 & i ? -1 : 1);
        } : function (t, e) {
          if (t === e) return I = true, 0;
          var i, n = 0, s = t.parentNode, o = e.parentNode, a = [t], l = [e];
          if (!s || !o) return t == P ? -1 : e == P ? 1 : s ? -1 : o ? 1 : T ? Q(T, t) - Q(T, e) : 0;
          if (s === o) return r(t, e);
          for (i = t; i = i.parentNode;) a.unshift(i);
          for (i = e; i = i.parentNode;) l.unshift(i);
          for (; a[n] === l[n];) n++;
          return n ? r(a[n], l[n]) : a[n] == L ? -1 : l[n] == L ? 1 : 0;
        }), P;
      }, e.matches = function (t, i) {
        return e(t, null, null, i);
      }, e.matchesSelector = function (t, i) {
        if ("true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t, _.matchesSelector && A && !B[i + " "] && (!H || !H.test(i)) && (!E || !E.test(i))) try {
          var n = N.call(t, i);
          if (n || _.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n;
        } catch (t) {
          B(i, true);
        }
        return 0 < e(i, P, null, [t]).length;
      }, e.contains = function (t, e) {
        return (t.ownerDocument || t) != P && ("true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t), O(t, e);
      }, e.attr = function (t, e) {
        (t.ownerDocument || t) != P && ("true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t);
        var i = b.attrHandle[e.toLowerCase()], n = i && U.call(b.attrHandle, e.toLowerCase()) ? i(t, e, !A) : void 0;
        return void 0 !== n ? n : _.attributes || !A ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
      }, e.escape = function (t) {
        return (t + "").replace(bt, yt);
      }, e.error = function (t) {
        throw new Error("Syntax error, unrecognized expression: " + t);
      }, e.uniqueSort = function (t) {
        var e, i = [], n = 0, s = 0;
        if (I = !_.detectDuplicates, T = !_.sortStable && t.slice(0), t.sort(Y), I) {
          for (; e = t[s++];) e === t[s] && (n = i.push(s));
          for (; n--;) t.splice(i[n], 1);
        }
        return T = null, t;
      }, y = e.getText = function (t) {
        var e, i = "", n = 0, s = t.nodeType;
        if (s) {
          if (1 === s || 9 === s || 11 === s) {
            if ("string" == typeof t.textContent) return t.textContent;
            for (t = t.firstChild; t; t = t.nextSibling) i += y(t);
          } else if (3 === s || 4 === s) return t.nodeValue;
        } else for (; e = t[n++];) i += y(e);
        return i;
      }, (b = e.selectors = {cacheLength: 50, createPseudo: n, match: ut, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: true}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: true}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (t) {
        return t[1] = t[1].replace(vt, _t), t[3] = (t[3] || t[4] || t[5] || "").replace(vt, _t), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
      }, CHILD: function (t) {
        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t;
      }, PSEUDO: function (t) {
        var e, i = !t[6] && t[2];
        return ut.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && lt.test(i) && (e = false) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3));
      }}, filter: {TAG: function (t) {
        var e = t.replace(vt, _t).toLowerCase();
        return "*" === t ? function () {
          return true;
        } : function (t) {
          return t.nodeName && t.nodeName.toLowerCase() === e;
        };
      }, CLASS: function (t) {
        var e = R[t + " "];
        return e || (e = new RegExp("(^|" + Z + ")" + t + "(" + Z + "|$)")) && R(t, function (t) {
          return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "");
        });
      }, ATTR: function (t, i, n) {
        return function (s) {
          var o = e.attr(s, t);
          return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && -1 < o.indexOf(n) : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? -1 < (" " + o.replace(nt, " ") + " ").indexOf(n) : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"));
        };
      }, CHILD: function (t, e, i, n, s) {
        var o = "nth" !== t.slice(0, 3), r = "last" !== t.slice(-4), a = "of-type" === e;
        return 1 === n && 0 === s ? function (t) {
          return !!t.parentNode;
        } : function (e, i, l) {
          var h, u, c, d, p, f, g = o !== r ? "nextSibling" : "previousSibling", m = e.parentNode, v = a && e.nodeName.toLowerCase(), _ = !l && !a, b = false;
          if (m) {
            if (o) {
              for (; g;) {
                for (d = e; d = d[g];) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return false;
                f = g = "only" === t && !f && "nextSibling";
              }
              return true;
            }
            if (f = [r ? m.firstChild : m.lastChild], r && _) {
              for (b = (p = (h = (u = (c = (d = m)[z] || (d[z] = {}))[d.uniqueID] || (c[d.uniqueID] = {}))[t] || [])[0] === W && h[1]) && h[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || f.pop();) if (1 === d.nodeType && ++b && d === e) {
                u[t] = [W, p, b];
                break;
              }
            } else if (_ && (b = p = (h = (u = (c = (d = e)[z] || (d[z] = {}))[d.uniqueID] || (c[d.uniqueID] = {}))[t] || [])[0] === W && h[1]), false === b) for (; (d = ++p && d && d[g] || (b = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (_ && ((u = (c = d[z] || (d[z] = {}))[d.uniqueID] || (c[d.uniqueID] = {}))[t] = [W, b]), d !== e));) ;
            return (b -= s) === n || b % n == 0 && 0 <= b / n;
          }
        };
      }, PSEUDO: function (t, i) {
        var s, o = b.pseudos[t] || b.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
        return o[z] ? i.nodeName && i.nodeName.toLowerCase() === e.toLowerCase() : 1 < o.length ? (s = [t, t, "", i], b.setFilters.hasOwnProperty(t.toLowerCase()) ? (function (t, e) {
          for (var n, s = t.nodeName && t.nodeName.toLowerCase() === i.toLowerCase(), r = s.length; r--;) t[n = Q(t, s[r])] = !(e[n] = s[r]);
        }[z] = true, function (t, e) {
          for (var n, s = t.nodeName && t.nodeName.toLowerCase() === i.toLowerCase(), r = s.length; r--;) t[n = Q(t, s[r])] = !(e[n] = s[r]);
        }) : function (t) {
          return t.nodeName && t.nodeName.toLowerCase() === 0..toLowerCase();
        }) : o;
      }}, pseudos: {not: (function (t) {
        var e = [], i = [], s = C(t.replace(st, "$1"));
        return s[z] ? (function (t, e, i, n) {
          for (var o, r = s(t, null, n, []), a = t.length; a--;) (o = r[a]) && (t[a] = !(e[a] = o));
        }[z] = true, function (t, e, i, n) {
          for (var o, r = s(t, null, n, []), a = t.length; a--;) (o = r[a]) && (t[a] = !(e[a] = o));
        }) : function (t, n, o) {
          return e[0] = t, s(e, null, o, i), e[0] = null, !i.pop();
        };
      }[z] = true, function (t) {
        var e = [], i = [], s = C(t.replace(st, "$1"));
        return s[z] ? (function (t, e, i, n) {
          for (var o, r = s(t, null, n, []), a = t.length; a--;) (o = r[a]) && (t[a] = !(e[a] = o));
        }[z] = true, function (t, e, i, n) {
          for (var o, r = s(t, null, n, []), a = t.length; a--;) (o = r[a]) && (t[a] = !(e[a] = o));
        }) : function (t, n, o) {
          return e[0] = t, s(e, null, o, i), e[0] = null, !i.pop();
        };
      }), has: (function (t) {
        return function (i) {
          return 0 < e(t, i).length;
        };
      }[z] = true, function (t) {
        return function (i) {
          return 0 < e(t, i).length;
        };
      }), contains: (function (t) {
        return t = t.replace(vt, _t), function (e) {
          return -1 < (e.textContent || y(e)).indexOf(t);
        };
      }[z] = true, function (t) {
        return t = t.replace(vt, _t), function (e) {
          return -1 < (e.textContent || y(e)).indexOf(t);
        };
      }), lang: (function (t) {
        return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(vt, _t).toLowerCase(), function (e) {
          var i;
          do {
            if (i = A ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-");
          } while ((e = e.parentNode) && 1 === e.nodeType);
          return false;
        };
      }[z] = true, function (t) {
        return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(vt, _t).toLowerCase(), function (e) {
          var i;
          do {
            if (i = A ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-");
          } while ((e = e.parentNode) && 1 === e.nodeType);
          return false;
        };
      }), target: function (e) {
        var i = t.location && t.location.hash;
        return i && i.slice(1) === e.id;
      }, root: function (t) {
        return t === M;
      }, focus: function (t) {
        return t === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
      }, enabled: a(false), disabled: a(true), checked: function (t) {
        var e = t.nodeName.toLowerCase();
        return "input" === e && !!t.checked || "option" === e && !!t.selected;
      }, selected: function (t) {
        return t.parentNode && t.parentNode.selectedIndex, true === t.selected;
      }, empty: function (t) {
        for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return false;
        return true;
      }, parent: function (t) {
        return !b.pseudos.empty(t);
      }, header: function (t) {
        return pt.test(t.nodeName);
      }, input: function (t) {
        return dt.test(t.nodeName);
      }, button: function (t) {
        var e = t.nodeName.toLowerCase();
        return "input" === e && "button" === t.type || "button" === e;
      }, text: function (t) {
        var e;
        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
      }, first: function () {
        return [0];
      }, last: function (t, e) {
        return [e - 1];
      }, eq: function (t, e, i) {
        return [i < 0 ? i + e : i];
      }, even: function (t, e) {
        for (var i = 0; i < e; i += 2) t.push(i);
        return t;
      }, odd: function (t, e) {
        for (var i = 1; i < e; i += 2) t.push(i);
        return t;
      }, lt: function (t, e, i) {
        for (var n = i < 0 ? i + e : e < i ? e : i; 0 <= --n;) t.push(n);
        return t;
      }, gt: function (t, e, i) {
        for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
        return t;
      }}}).pseudos.nth = b.pseudos.eq, {radio: true, checkbox: true, file: true, password: true, image: true}) b.pseudos[v] = function (t) {
        return function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t;
        };
      }(v);
      for (v in {submit: true, reset: true}) b.pseudos[v] = function (t) {
        return function (e) {
          var i = e.nodeName.toLowerCase();
          return ("input" === i || "button" === i) && e.type === t;
        };
      }(v);
      return u.prototype = b.filters = b.pseudos, b.setFilters = new u, x = e.tokenize = function (t, i) {
        var n, s, o, r, a, l, h, u = j[t + " "];
        if (u) return i ? 0 : u.slice(0);
        for (a = t, l = [], h = b.preFilter; a;) {
          for (r in n && !(s = ot.exec(a)) || (s && (a = a.slice(s[0].length) || a), l.push(o = [])), n = false, (s = rt.exec(a)) && (n = s.shift(), o.push({value: n, type: s[0].replace(st, " ")}), a = a.slice(n.length)), b.filter) !(s = ut[r].exec(a)) || h[r] && !(s = h[r](s)) || (n = s.shift(), o.push({value: n, type: r, matches: s}), a = a.slice(n.length));
          if (!n) break;
        }
        return i ? a.length : a ? e.error(t) : j(t, l).slice(0);
      }, C = e.compile = function (t, i) {
        var s, o, r, a, l, h, u = [], c = [], d = q[t + " "];
        if (!d) {
          for (i || (i = false), s = i.length; s--;) (d = m(i[s]))[z] ? u.push(d) : c.push(d);
          (d = q(t, (o = c, a = 0 < (r = u).length, l = 0 < o.length, h = function (t, i, n, s, h) {
            var u, c, d, p = 0, g = "0", m = t && [], v = [], _ = D, y = t || l && b.find.TAG("*", h), w = W += null == _ ? 1 : Math.random() || .1, x = y.length;
            for (h && (D = i == P || i || h); g !== x && null != (u = y[g]); g++) {
              if (l && u) {
                for (c = 0, i || u.ownerDocument == P || ("true/" === (u.type || "").slice(0, 5) ? u.type = u.type.slice(5) : u.removeAttribute("type"), u, n = !A); d = o[c++];) if ((i || P).toUpperCase()) {
                  s.push(u);
                  break;
                }
                h && (W = w);
              }
              a && ((u = !d && u) && p--, t && m.push(u));
            }
            if (p += g, a && g !== p) {
              for (c = 0; d = r[c++];) v.toUpperCase();
              if (t) {
                if (0 < p) for (; g--;) m[g] || v[g] || (v[g] = K.call(s));
                v = f(v);
              }
              X.apply(s, v), h && !t && 0 < v.length && 1 < p + r.length && e.uniqueSort(s);
            }
            return h && (W = w, D = _), m;
          }, a ? (h[z] = true, h) : h))).selector = t;
        }
        return d;
      }, k = e.select = function (t, e, i, n) {
        var s, o, r, a, l, u = "function" == typeof t && t, d = !n && false;
        if (i = i || [], 1 === d.length) {
          if (2 < (o = d[0] = d[0].slice(0)).length && "ID" === (r = o[0]).type && 9 === e.nodeType && A && b.relative[o[1].type]) {
            if (!(e = (b.find.ID(r.matches[0].replace(vt, _t), e) || [])[0])) return i;
            u && (e = e.parentNode), t = t.slice(o.shift().value.length);
          }
          for (s = ut.needsContext.test(t) ? 0 : o.length; s-- && (r = o[s], !b.relative[a = r.type]);) if ((l = b.find[a]) && (n = r.matches[0].replace(vt, _t))) {
            if (o.splice(s, 1), !(t = n.length && c(o))) return X.apply(i, n), i;
            break;
          }
        }
        return (u || C(t, d))(n, e, !A, i, !e || mt.test(t) && (e.parentNode && void 0 !== e.parentNode.getElementsByTagName && e.parentNode) || e), i;
      }, _.sortStable = z.split("").sort(Y).join("") === z, _.detectDuplicates = !!I, ("true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t), _.sortDetached = s(function (t) {
        return 1 & t.compareDocumentPosition(P.createElement("fieldset"));
      }), s(function (t) {
        return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href");
      }) || "type|href|height|width".nodeName && "type|href|height|width".nodeName.toLowerCase() === function (t, e, i) {
        if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
      }.toLowerCase(), _.attributes && s(function (t) {
        return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
      }) || "value".nodeName && "value".nodeName.toLowerCase() === function (t, e, i) {
        if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
      }.toLowerCase(), s(function (t) {
        return null == t.getAttribute("disabled");
      }) || J.nodeName && J.nodeName.toLowerCase() === function (t, e, i) {
        var n;
        if (!i) return true === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
      }.toLowerCase(), e;
    }(t);
    ft.find = gt, ft.expr = gt.selectors, ft.expr[":"] = ft.expr.pseudos, ft.uniqueSort = ft.unique = gt.uniqueSort, ft.text = gt.getText, ft.isXMLDoc = gt.isXML, ft.contains = gt.contains, ft.escapeSelector = gt.escape;
    var mt = function (t, e, i) {
      for (var n = [], s = void 0 !== i; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
        if (s && ft(t).is(i)) break;
        n.push(t);
      }
      return n;
    }, vt = function (t, e) {
      for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
      return i;
    }, _t = ft.expr.match.needsContext, bt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    ft.filter = function (t, e, i) {
      var n = e[0];
      return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? ft.find.matchesSelector(n, t) ? [n] : [] : ft.find.matches(t, ft.grep(e, function (t) {
        return 1 === t.nodeType;
      }));
    }, ft.fn.extend({find: function (t) {
      var e, i, n = this.length, s = this;
      if ("string" != typeof t) return this.pushStack(ft(t).filter(function () {
        for (e = 0; e < n; e++) if (ft.contains(s[e], this)) return true;
      }));
      for (i = this.pushStack([]), e = 0; e < n; e++) ft.find(t, s[e], i);
      return 1 < n ? ft.uniqueSort(i) : i;
    }, filter: function (t) {
      return this.pushStack(r(this, t || [], false));
    }, not: function (t) {
      return this.pushStack(r(this, t || [], true));
    }, is: function (t) {
      return !!r(this, "string" == typeof t && _t.test(t) ? ft(t) : t || [], false).length;
    }});
    var yt, wt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ft.fn.init = function (t, e, i) {
      var n, s;
      if (!t) return this;
      if (i = i || yt, "string" == typeof t) {
        if (!(n = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : wt.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
        if (n[1]) {
          if (e = e instanceof ft ? e[0] : e, ft.merge(this, ft.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : ct, true)), bt.test(n[1]) && ft.isPlainObject(e)) for (n in e) "function" == typeof this[n] && "number" != typeof this[n].nodeType ? this[n](e[n]) : this.attr(n, e[n]);
          return this;
        }
        return (s = ct.getElementById(n[2])) && (this[0] = s, this.length = 1), this;
      }
      return t.nodeType ? (this[0] = t, this.length = 1, this) : "function" == typeof t && "number" != typeof t.nodeType ? void 0 !== i.ready ? i.ready(t) : t(ft) : ft.makeArray(t, this);
    }).prototype = ft.fn, yt = ft(ct);
    var xt = /^(?:parents|prev(?:Until|All))/, Ct = {children: true, contents: true, next: true, prev: true};
    ft.fn.extend({has: function (t) {
      var e = ft(t, this), i = e.length;
      return this.filter(function () {
        for (var t = 0; t < i; t++) if (ft.contains(this, e[t])) return true;
      });
    }, closest: function (t, e) {
      var i, n = 0, s = this.length, o = [], r = "string" != typeof t && ft(t);
      if (!_t.test(t)) for (; n < s; n++) for (i = this[n]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (r ? -1 < r.index(i) : 1 === i.nodeType && ft.find.matchesSelector(i, t))) {
        o.push(i);
        break;
      }
      return this.pushStack(1 < o.length ? ft.uniqueSort(o) : o);
    }, index: function (t) {
      return t ? "string" == typeof t ? it.call(ft(t), this[0]) : it.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function (t, e) {
      return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))));
    }, addBack: function (t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    }}), ft.each({parent: function (t) {
      var e = t.parentNode;
      return e && 11 !== e.nodeType ? e : null;
    }, parents: function (t) {
      return mt(t, "parentNode");
    }, parentsUntil: function (t, e, i) {
      return mt(t, "parentNode", i);
    }, next: function (t) {
      return a(t, "nextSibling");
    }, prev: function (t) {
      return a(t, "previousSibling");
    }, nextAll: function (t) {
      return mt(t, "nextSibling");
    }, prevAll: function (t) {
      return mt(t, "previousSibling");
    }, nextUntil: function (t, e, i) {
      return mt(t, "nextSibling", i);
    }, prevUntil: function (t, e, i) {
      return mt(t, "previousSibling", i);
    }, siblings: function (t) {
      return vt((t.parentNode || {}).firstChild, t);
    }, children: function (t) {
      return vt(t.firstChild);
    }, contents: function (t) {
      return null != t.contentDocument && J(t.contentDocument) ? t.contentDocument : (t.nodeName && t.nodeName.toLowerCase() === "template".toLowerCase() && (t = t.content || t), ft.merge([], t.childNodes));
    }}, function (t, e) {
      ft.fn[t] = function (i, n) {
        var s = ft.map(this, e, i);
        return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = ft.filter(n, s)), 1 < this.length && (Ct[t] || ft.uniqueSort(s), xt.test(t) && s.reverse()), this.pushStack(s);
      };
    });
    var kt = /[^\x20\t\r\n\f]+/g;
    ft.Callbacks = function (t) {
      var e, i;
      t = "string" == typeof t ? (e = t, i = {}, ft.each(e.match(kt) || [], function (t, e) {
        i[e] = true;
      }), i) : ft.extend({}, t);
      var s, o, r, a, l = [], h = [], u = -1, c = function () {
        for (a = a || t.once, r = s = true; h.length; u = -1) for (o = h.shift(); ++u < l.length;) false === l[u].apply(o[0], o[1]) && t.stopOnFalse && (u = l.length, o = false);
        t.memory || (o = false), s = false, a && (l = o ? [] : "");
      }, d = {add: function () {
        return l && (o && !s && (u = l.length - 1, h.push(o)), function e(i) {
          ft.each(i, function (i, s) {
            "function" == typeof s && "number" != typeof s.nodeType ? t.unique && d.has(s) || l.push(s) : s && s.length && "string" !== n(s) && e(s);
          });
        }(arguments), o && !s && c()), this;
      }, remove: function () {
        return ft.each(arguments, function (t, e) {
          for (var i; -1 < (i = ft.inArray(e, l, i));) l.splice(i, 1), i <= u && u--;
        }), this;
      }, has: function (t) {
        return t ? -1 < ft.inArray(t, l) : 0 < l.length;
      }, empty: function () {
        return l && (l = []), this;
      }, disable: function () {
        return a = h = [], l = o = "", this;
      }, disabled: function () {
        return !l;
      }, lock: function () {
        return a = h = [], o || s || (l = o = ""), this;
      }, locked: function () {
        return !!a;
      }, fireWith: function (t, e) {
        return a || (e = [t, (e = e || []).slice ? e.slice() : e], h.push(e), s || c()), this;
      }, fire: function () {
        return d.fireWith(this, arguments), this;
      }, fired: function () {
        return !!r;
      }};
      return d;
    }, ft.extend({Deferred: function (e) {
      var i = [["notify", "progress", ft.Callbacks("memory"), ft.Callbacks("memory"), 2], ["resolve", "done", ft.Callbacks("once memory"), ft.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ft.Callbacks("once memory"), ft.Callbacks("once memory"), 1, "rejected"]], n = "pending", s = {state: function () {
        return n;
      }, always: function () {
        return o.done(arguments).fail(arguments), this;
      }, catch: function (t) {
        return s.then(null, t);
      }, pipe: function () {
        var t = arguments;
        return ft.Deferred(function (e) {
          ft.each(i, function (i, n) {
            var s = "function" == typeof t[n[4]] && "number" != typeof t[n[4]].nodeType && t[n[4]];
            o[n[1]](function () {
              var t = s && s.apply(this, arguments);
              t && ("function" == typeof t.promise && "number" != typeof t.promise.nodeType) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[n[0] + "With"](this, s ? [t] : arguments);
            });
          }), t = null;
        }).promise();
      }, then: function (e, n, s) {
        function o(e, i, n, s) {
          return function () {
            var a = this, u = arguments, c = function () {
              var t, c;
              if (!(e < r)) {
                if ((t = n.apply(a, u)) === i.promise()) throw new TypeError("Thenable self-resolution");
                c = t && ("object" == typeof t || "function" == typeof t) && t.then, "function" == typeof c && "number" != typeof c.nodeType ? s ? c.call(t, r.nodeName && r.nodeName.toLowerCase() === i.toLowerCase(), r.nodeName && r.nodeName.toLowerCase() === i.toLowerCase()) : (r++, c.call(t, r.nodeName && r.nodeName.toLowerCase() === i.toLowerCase(), r.nodeName && r.nodeName.toLowerCase() === i.toLowerCase(), r.nodeName && r.nodeName.toLowerCase() === i.toLowerCase())) : (n !== l && (a = void 0, u = [t]), (s || i.resolveWith)(a, u));
              }
            }, d = s ? c : function () {
              try {
                c();
              } catch (t) {
                ft.Deferred.exceptionHook && ft.Deferred.exceptionHook(t, d.stackTrace), r <= e + 1 && (n !== h && (a = void 0, u = [t]), i.rejectWith(a, u));
              }
            };
            e ? e.toUpperCase() : (ft.Deferred.getStackHook && (d.stackTrace = ft.Deferred.getStackHook()), t.setTimeout(d));
          };
        }
        var r = 0;
        return ft.Deferred(function (t) {
          i[0][3].add(0..nodeName && 0..nodeName.toLowerCase() === t.toLowerCase()), i[1][3].add(0..nodeName && 0..nodeName.toLowerCase() === t.toLowerCase()), i[2][3].add(0..nodeName && 0..nodeName.toLowerCase() === t.toLowerCase());
        }).promise();
      }, promise: function (t) {
        return null != t ? ft.extend(t, s) : s;
      }}, o = {};
      return ft.each(i, function (t, e) {
        var r = e[2], a = e[5];
        s[e[1]] = r.add, a && r.add(function () {
          n = a;
        }, i[3 - t][2].disable, i[3 - t][3].disable, i[0][2].lock, i[0][3].lock), r.add(e[3].fire), o[e[0]] = function () {
          return o[e[0] + "With"](this === o ? void 0 : this, arguments), this;
        }, o[e[0] + "With"] = r.fireWith;
      }), s.promise(o), e && e.call(o, o), o;
    }, when: function (t) {
      var e = arguments.length, i = e, n = Array(i), s = Z.call(arguments), o = ft.Deferred(), r = function (t) {
        return function (i) {
          n[t] = this, s[t] = 1 < arguments.length ? Z.call(arguments) : i, --e || o.resolveWith(n, s);
        };
      };
      if (e <= 1 && (u(t, o.done(r(i)).resolve, o.reject, !e), "pending" === o.state() || "function" == typeof (s[i] && s[i].then) && "number" != typeof (s[i] && s[i].then).nodeType)) return o.then();
      for (; i--;) u(s[i], r(i), o.reject);
      return o.promise();
    }});
    var Dt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ft.Deferred.exceptionHook = function (e, i) {
      t.console && t.console.warn && e && Dt.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i);
    }, ft.readyException = function (e) {
      t.setTimeout(function () {
        throw e;
      });
    };
    var Tt = ft.Deferred();
    ft.fn.ready = function (t) {
      return Tt.then(t).catch(function (t) {
        ft.readyException(t);
      }), this;
    }, ft.extend({isReady: false, readyWait: 1, ready: function (t) {
      (true === t ? --ft.readyWait : ft.isReady) || (ft.isReady = true) !== t && 0 < --ft.readyWait || Tt.resolveWith(ct, [ft]);
    }}), ft.ready.then = Tt.then, "complete" === ct.readyState || "loading" !== ct.readyState && !ct.documentElement.doScroll ? t.setTimeout(ft.ready) : (ct.addEventListener("DOMContentLoaded", c), t.addEventListener("load", c));
    var It = function (t, e, i, s, o, r, a) {
      var l = 0, h = t.length, u = null == i;
      if ("object" === n(i)) for (l in o = true, i) It(t, e, l, i[l], true, r, a); else if (void 0 !== s && (o = true, "function" == typeof s && "number" != typeof s.nodeType || (a = true), u && (a ? (e.call(t, s), e = null) : (u = e, e = function (t, e, i) {
        return u.call(ft(t), i);
      })), e)) for (; l < h; l++) e(t[l], i, a ? s : s.call(t[l], l, e(t[l], i)));
      return o ? t : u ? e.call(t) : h ? e(t[0], i) : r;
    }, St = /^-ms-/, Pt = /-([a-z])/g;
    f.uid = 1, f.prototype = {cache: function (t) {
      var e = t[this.expando];
      return e || (e = {}, (1 === t.nodeType || 9 === t.nodeType || !+t.nodeType) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {value: e, configurable: true}))), e;
    }, set: function (t, e, i) {
      var n, s = this.cache(t);
      if ("string" == typeof e) s[e.replace(St, "ms-").replace(Pt, d)] = i; else for (n in e) s[n.replace(St, "ms-").replace(Pt, d)] = e[n];
      return s;
    }, get: function (t, e) {
      return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e.replace(St, "ms-").replace(Pt, d)];
    }, access: function (t, e, i) {
      return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e);
    }, remove: function (t, e) {
      var i, n = t[this.expando];
      if (void 0 !== n) {
        if (void 0 !== e) {
          i = (e = Array.isArray(e) ? e.map(p) : (e = e.replace(St, "ms-").replace(Pt, d)) in n ? [e] : e.match(kt) || []).length;
          for (; i--;) delete n[e[i]];
        }
        (void 0 === e || ft.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]);
      }
    }, hasData: function (t) {
      var e = t[this.expando];
      return void 0 !== e && !ft.isEmptyObject(e);
    }};
    var At = new f, Et = new f, Ht = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Nt = /[A-Z]/g;
    ft.extend({hasData: function (t) {
      return Et.hasData(t) || At.hasData(t);
    }, data: function (t, e, i) {
      return Et.access(t, e, i);
    }, removeData: function (t, e) {
      Et.remove(t, e);
    }, _data: function (t, e, i) {
      return At.access(t, e, i);
    }, _removeData: function (t, e) {
      At.remove(t, e);
    }}), ft.fn.extend({data: function (t, e) {
      var i, n, s, o = this[0], r = o && o.attributes;
      if (void 0 === t) {
        if (this.length && (s = Et.get(o), 1 === o.nodeType && !At.get(o, "hasDataAttrs"))) {
          for (i = r.length; i--;) r[i] && 0 === (n = r[i].name).indexOf("data-") && (n = n.slice(5).replace(St, "ms-").replace(Pt, d), g(o, n, s[n]));
          At.set(o, "hasDataAttrs", true);
        }
        return s;
      }
      return "object" == typeof t ? this.each(function () {
        Et.set(this, t);
      }) : It(this, function (e) {
        var i;
        if (o && void 0 === e) return void 0 !== (i = Et.get(o, t)) ? i : void 0 !== (i = g(o, t)) ? i : void 0;
        this.each(function () {
          Et.set(this, t, e);
        });
      }, null, e, 1 < arguments.length, null, true);
    }, removeData: function (t) {
      return this.each(function () {
        Et.remove(this, t);
      });
    }}), ft.extend({queue: function (t, e, i) {
      var n;
      if (t) return e = (e || "fx") + "queue", n = At.get(t, e), i && (!n || Array.isArray(i) ? n = At.access(t, e, ft.makeArray(i)) : n.push(i)), n || [];
    }, dequeue: function (t, e) {
      e = e || "fx";
      var i = ft.queue(t, e), n = i.length, s = i.shift(), o = ft._queueHooks(t, e);
      "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, function () {
        ft.dequeue(t, e);
      }, o)), !n && o && o.empty.fire();
    }, _queueHooks: function (t, e) {
      var i = e + "queueHooks";
      return At.get(t, i) || At.access(t, i, {empty: ft.Callbacks("once memory").add(function () {
        At.remove(t, [e + "queue", i]);
      })});
    }}), ft.fn.extend({queue: function (t, e) {
      var i = 2;
      return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? ft.queue(this[0], t) : void 0 === e ? this : this.each(function () {
        var i = ft.queue(this, t, e);
        ft._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && ft.dequeue(this, t);
      });
    }, dequeue: function (t) {
      return this.each(function () {
        ft.dequeue(this, t);
      });
    }, clearQueue: function (t) {
      return this.queue(t || "fx", []);
    }, promise: function (t, e) {
      var i, n = 1, s = ft.Deferred(), o = this, r = this.length, a = function () {
        --n || s.resolveWith(o, [o]);
      };
      for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;) (i = At.get(o[r], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
      return a(), s.promise(e);
    }});
    var Ot = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, zt = new RegExp("^(?:([+-])=|)(" + Ot + ")([a-z%]*)$", "i"), Lt = ["Top", "Right", "Bottom", "Left"], Wt = ct.documentElement, Rt = {composed: true};
    Wt.getRootNode && (Ft = function (t) {
      return ft.contains(t.ownerDocument, t) || t.getRootNode(Rt) === t.ownerDocument;
    });
    var qt = {};
    ft.fn.extend({show: function () {
      return v(this, true);
    }, hide: function () {
      return v(this);
    }, toggle: function (t) {
      return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
        "none" === (this = e || this).style.display || "" === this.style.display && ft.contains(this.ownerDocument, this) && "none" === ft.css(this, "display") ? ft(this).show() : ft(this).hide();
      });
    }});
    var Bt, Yt, Ut = /^(?:checkbox|radio)$/i, $t = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Kt = /^$|^module$|\/(?:java|ecma)script/i;
    Bt = ct.createDocumentFragment().appendChild(ct.createElement("div")), (Yt = ct.createElement("input")).setAttribute("type", "radio"), Yt.setAttribute("checked", "checked"), Yt.setAttribute("name", "t"), Bt.appendChild(Yt), lt.checkClone = Bt.cloneNode(true).cloneNode(true).lastChild.checked, Bt.innerHTML = "<textarea>x</textarea>", lt.noCloneChecked = !!Bt.cloneNode(true).lastChild.defaultValue, Bt.innerHTML = "<option></option>", lt.option = !!Bt.lastChild;
    var Vt = {thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""]};
    Vt.tbody = Vt.tfoot = Vt.colgroup = Vt.caption = Vt.thead, Vt.th = Vt.td, lt.option || (Vt.optgroup = Vt.option = [1, "<select multiple='multiple'>", "</select>"]);
    var Xt = /<|&#?\w+;/, Gt = /^key/, Qt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Jt = /^([^.]*)(?:\.(.+)|)/;
    ft.event = {global: {}, add: function (t, e, i, n, s) {
      var o, r, a, l, h, u, c, d, p, f, g, m = At.get(t);
      if (1 === t.nodeType || 9 === t.nodeType || !+t.nodeType) for (i.handler && (i = (o = i).handler, s = o.selector), s && ft.find.matchesSelector(Wt, s), i.guid || (i.guid = ft.guid++), (l = m.events) || (l = m.events = Object.create(null)), (r = m.handle) || (r = m.handle = function (e) {
        return void 0 !== ft && ft.event.triggered !== e.type ? ft.event.dispatch.apply(t, arguments) : void 0;
      }), h = (e = (e || "").match(kt) || [""]).length; h--;) p = g = (a = Jt.exec(e[h]) || [])[1], f = (a[2] || "").split(".").sort(), p && (c = ft.event.special[p] || {}, p = (s ? c.delegateType : c.bindType) || p, c = ft.event.special[p] || {}, u = ft.extend({type: p, origType: g, data: n, handler: i, guid: i.guid, selector: s, needsContext: s && ft.expr.match.needsContext.test(s), namespace: f.join(".")}, o), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, c.setup && false !== c.setup.call(t, n, f, r) || t.addEventListener && t.addEventListener(p, r)), c.add && (c.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, u) : d.push(u), ft.event.global[p] = true);
    }, remove: function (t, e, i, n, s) {
      var o, r, a, l, h, u, c, d, p, f, g, m = At.hasData(t) && At.get(t);
      if (m && (l = m.events)) {
        for (h = (e = (e || "").match(kt) || [""]).length; h--;) if (p = g = (a = Jt.exec(e[h]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
          for (c = ft.event.special[p] || {}, d = l[p = (n ? c.delegateType : c.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = d.length; o--;) u = d[o], !s && g !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, c.remove && c.remove.call(t, u));
          r && !d.length && (c.teardown && false !== c.teardown.call(t, f, m.handle) || ft.removeEvent(t, p, m.handle), delete l[p]);
        } else for (p in l) ft.event.remove(t, p + e[h], i, n, true);
        ft.isEmptyObject(l) && At.remove(t, "handle events");
      }
    }, dispatch: function (t) {
      var e, i, n, s, o, r, a = new Array(arguments.length), l = ft.event.fix(t), h = (At.get(this, "events") || Object.create(null))[l.type] || [], u = ft.event.special[l.type] || {};
      for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
      if (l.delegateTarget = this, !u.preDispatch || false !== u.preDispatch.call(this, l)) {
        for (r = ft.event.handlers.call(this, l, h), e = 0; (s = r[e++]) && !l.isPropagationStopped();) for (l.currentTarget = s.elem, i = 0; (o = s.handlers[i++]) && !l.isImmediatePropagationStopped();) l.rnamespace && false !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (n = ((ft.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, a)) && false === (l.result = n) && (l.preventDefault(), l.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, l), l.result;
      }
    }, handlers: function (t, e) {
      var i, n, s, o, r, a = [], l = e.delegateCount, h = t.target;
      if (l && h.nodeType && !("click" === t.type && 1 <= t.button)) for (; h !== this; h = h.parentNode || this) if (1 === h.nodeType && ("click" !== t.type || true !== h.disabled)) {
        for (o = [], r = {}, i = 0; i < l; i++) void 0 === r[s = (n = e[i]).selector + " "] && (r[s] = n.needsContext ? -1 < ft(s, this).index(h) : ft.find(s, this, null, [h]).length), r[s] && o.push(n);
        o.length && a.push({elem: h, handlers: o});
      }
      return h = this, l < e.length && a.push({elem: h, handlers: e.slice(l)}), a;
    }, addProp: function (t, e) {
      Object.defineProperty(ft.Event.prototype, t, {enumerable: true, configurable: true, get: "function" == typeof e && "number" != typeof e.nodeType ? function () {
        if (this.originalEvent) return e(this.originalEvent);
      } : function () {
        if (this.originalEvent) return this.originalEvent[t];
      }, set: function (e) {
        Object.defineProperty(this, t, {enumerable: true, configurable: true, writable: true, value: e});
      }});
    }, fix: function (t) {
      return t[ft.expando] ? t : new ft.Event(t);
    }, special: {load: {noBubble: true}, click: {setup: function (t) {
      var e = this || t;
      return Ut.test(e.type) && e.click && (e.nodeName && e.nodeName.toLowerCase() === "input".toLowerCase()) && D(e, "click", w), false;
    }, trigger: function (t) {
      var e = this || t;
      return Ut.test(e.type) && e.click && (e.nodeName && e.nodeName.toLowerCase() === "input".toLowerCase()) && D(e, "click"), true;
    }, _default: function (t) {
      var e = t.target;
      return Ut.test(e.type) && e.click && (e.nodeName && e.nodeName.toLowerCase() === "input".toLowerCase()) && At.get(e, "click") || e.nodeName && e.nodeName.toLowerCase() === "a".toLowerCase();
    }}, beforeunload: {postDispatch: function (t) {
      void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
    }}}}, ft.removeEvent = function (t, e, i) {
      t.removeEventListener && t.removeEventListener(e, i);
    }, ft.Event = function (t, e) {
      if (!(this instanceof ft.Event)) return new ft.Event(t, e);
      t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && false === t.returnValue ? w : x, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && ft.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[ft.expando] = true;
    }, ft.Event.prototype = {constructor: ft.Event, isDefaultPrevented: x, isPropagationStopped: x, isImmediatePropagationStopped: x, isSimulated: false, preventDefault: function () {
      var t = this.originalEvent;
      this.isDefaultPrevented = w, t && !this.isSimulated && t.preventDefault();
    }, stopPropagation: function () {
      var t = this.originalEvent;
      this.isPropagationStopped = w, t && !this.isSimulated && t.stopPropagation();
    }, stopImmediatePropagation: function () {
      var t = this.originalEvent;
      this.isImmediatePropagationStopped = w, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
    }}, ft.each({altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, char: true, code: true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: function (t) {
      var e = t.button;
      return null == t.which && Gt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Qt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which;
    }}, ft.event.addProp), ft.each({focus: "focusin", blur: "focusout"}, function (t, e) {
      ft.event.special[t] = {setup: function () {
        return D(this, t, C), false;
      }, trigger: function () {
        return D(this, t), true;
      }, delegateType: e};
    }), ft.each({mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, function (t, e) {
      ft.event.special[t] = {delegateType: e, bindType: e, handle: function (t) {
        var i, n = t.relatedTarget, s = t.handleObj;
        return n && (n === this || ft.contains(this, n)) || (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i;
      }};
    }), ft.fn.extend({on: function (t, e, i, n) {
      return k(this, t, e, i, n);
    }, one: function (t, e, i, n) {
      return k(this, t, e, i, n, 1);
    }, off: function (t, e, i) {
      var n, s;
      if (t && t.preventDefault && t.handleObj) return n = t.handleObj, ft(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
      if ("object" == typeof t) {
        for (s in t) this.off(s, e, t[s]);
        return this;
      }
      return false !== e && "function" != typeof e || (i = e, e = void 0), false === i && (i = x), this.each(function () {
        ft.event.remove(this, t, i, e);
      });
    }});
    var Zt = /<script|<style|<link/i, te = /checked\s*(?:[^=]|=\s*.checked.)/i, ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ft.extend({htmlPrefilter: function (t) {
      return t;
    }, clone: function (t, e, i) {
      var n, s, o, r, a, l, h, u = t.cloneNode(true), c = ft.contains(t.ownerDocument, t);
      if (!(lt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ft.isXMLDoc(t))) for (r = _(u), n = 0, s = (o = _(t)).length; n < s; n++) a = o[n], l = r[n], "input" === (h = l.nodeName.toLowerCase()) && Ut.test(a.type) ? l.checked = a.checked : "input" !== h && "textarea" !== h || (l.defaultValue = a.defaultValue);
      if (e) if (i) for (o = o || _(t), r = r || _(u), n = 0, s = o.length; n < s; n++) P(o[n], r[n]); else P(t, u);
      return 0 < (r = _(u, "script")).length && b(r, !c && _(t, "script")), u;
    }, cleanData: function (t) {
      for (var e, i, n, s = ft.event.special, o = 0; void 0 !== (i = t[o]); o++) if (1 === i.nodeType || 9 === i.nodeType || !+i.nodeType) {
        if (e = i[At.expando]) {
          if (e.events) for (n in e.events) s[n] ? ft.event.remove(i, n) : ft.removeEvent(i, n, e.handle);
          i[At.expando] = void 0;
        }
        i[Et.expando] && (i[Et.expando] = void 0);
      }
    }}), ft.fn.extend({detach: function (t) {
      return A(this, t, true);
    }, remove: function (t) {
      return A(this, t);
    }, text: function (t) {
      return It(this, function (t) {
        return void 0 === t ? ft.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t);
        });
      }, null, t, arguments.length);
    }, append: function () {
      return M(this, arguments, function (t) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.nodeName && this.nodeName.toLowerCase() === "table".toLowerCase() && ((11 !== t.nodeType ? t : t.firstChild).nodeName && (11 !== t.nodeType ? t : t.firstChild).nodeName.toLowerCase() === "tr".toLowerCase()) && ft(this).children("tbody")[0] || this).appendChild(t);
      });
    }, prepend: function () {
      return M(this, arguments, function (t) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var e = this.nodeName && this.nodeName.toLowerCase() === "table".toLowerCase() && ((11 !== t.nodeType ? t : t.firstChild).nodeName && (11 !== t.nodeType ? t : t.firstChild).nodeName.toLowerCase() === "tr".toLowerCase()) && ft(this).children("tbody")[0] || this;
          e.insertBefore(t, e.firstChild);
        }
      });
    }, before: function () {
      return M(this, arguments, function (t) {
        this.parentNode && this.parentNode.insertBefore(t, this);
      });
    }, after: function () {
      return M(this, arguments, function (t) {
        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
      });
    }, empty: function () {
      for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ft.cleanData(_(t, false)), t.textContent = "");
      return this;
    }, clone: function (t, e) {
      return t = null != t && t, e = null == e ? t : e, this.map(function () {
        return ft.clone(this, t, e);
      });
    }, html: function (t) {
      return It(this, function (t) {
        var e = this[0] || {}, i = 0, n = this.length;
        if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
        if ("string" == typeof t && !Zt.test(t) && !Vt[($t.exec(t) || ["", ""])[1].toLowerCase()]) {
          t = ft.htmlPrefilter(t);
          try {
            for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (ft.cleanData(_(e, false)), e.innerHTML = t);
            e = 0;
          } catch (t) {}
        }
        e && this.empty().append(t);
      }, null, t, arguments.length);
    }, replaceWith: function () {
      var t = [];
      return M(this, arguments, function (e) {
        var i = this.parentNode;
        ft.inArray(this, t) < 0 && (ft.cleanData(_(this)), i && i.replaceChild(e, this));
      }, t);
    }}), ft.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (t, e) {
      ft.fn[t] = function (t) {
        for (var i, n = [], s = ft(t), o = s.length - 1, r = 0; r <= o; r++) i = r === o ? this : this.clone(true), ft(s[r])[e](i), et.apply(n, i.get());
        return this.pushStack(n);
      };
    });
    var ie = new RegExp("^(" + Ot + ")(?!px)[a-z%]+$", "i"), ne = function (e) {
      var i = e.ownerDocument.defaultView;
      return i && i.opener || (i = t), i.getComputedStyle(e);
    }, se = function (t, e, i) {
      var n, s, o = {};
      for (s in e) o[s] = t.style[s], t.style[s] = e[s];
      for (s in n = i.call(t), e) t.style[s] = o[s];
      return n;
    }, oe = new RegExp(Lt.join("|"), "i");
    !function () {
      function e() {
        if (u) {
          h.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Wt.appendChild(h).appendChild(u);
          var e = t.getComputedStyle(u);
          n = "1%" !== e.top, l = 12 === Math.round(parseFloat(e.marginLeft)), u.style.right = "60%", r = 36 === Math.round(parseFloat(e.right)), s = 36 === Math.round(parseFloat(e.width)), u.style.position = "absolute", o = 12 === Math.round(parseFloat(u.offsetWidth / 3)), Wt.removeChild(h), u = null;
        }
      }
      var n, s, o, r, a, l, h = ct.createElement("div"), u = ct.createElement("div");
      u.style && (u.style.backgroundClip = "content-box", u.cloneNode(true).style.backgroundClip = "", lt.clearCloneStyle = "content-box" === u.style.backgroundClip, ft.extend(lt, {boxSizingReliable: function () {
        return e(), s;
      }, pixelBoxStyles: function () {
        return e(), r;
      }, pixelPosition: function () {
        return e(), n;
      }, reliableMarginLeft: function () {
        return e(), l;
      }, scrollboxSize: function () {
        return e(), o;
      }, reliableTrDimensions: function () {
        var e, i, n, s;
        return null == a && (e = ct.createElement("table"), i = ct.createElement("tr"), n = ct.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", i.style.height = "1px", n.style.height = "9px", Wt.appendChild(e).appendChild(i).appendChild(n), s = t.getComputedStyle(i), a = 3 < parseInt(s.height), Wt.removeChild(e)), a;
      }}));
    }();
    var re = ["Webkit", "Moz", "ms"], ae = ct.createElement("div").style, le = {}, he = /^(none|table(?!-c[ea]).+)/, ue = /^--/, ce = {position: "absolute", visibility: "hidden", display: "block"}, de = {letterSpacing: "0", fontWeight: "400"};
    ft.extend({cssHooks: {opacity: {get: function (t, e) {
      if (e) {
        var i = E(t, "opacity");
        return "" === i ? "1" : i;
      }
    }}}, cssNumber: {animationIterationCount: true, columnCount: true, fillOpacity: true, flexGrow: true, flexShrink: true, fontWeight: true, gridArea: true, gridColumn: true, gridColumnEnd: true, gridColumnStart: true, gridRow: true, gridRowEnd: true, gridRowStart: true, lineHeight: true, opacity: true, order: true, orphans: true, widows: true, zIndex: true, zoom: true}, cssProps: {}, style: function (t, e, i, n) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var s, o, r, a = e.replace(St, "ms-").replace(Pt, d), l = ue.test(e), h = t.style;
        if (l || (e = N(a)), r = ft.cssHooks[e] || ft.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (s = r.get(t, false, n)) ? s : h[e];
        "string" == (o = typeof i) && (s = zt.exec(i)) && s[1] && (i = m(t, e, s), o = "number"), null != i && i == i && ("number" !== o || l || (i += s && s[3] || (ft.cssNumber[a] ? "" : "px")), lt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (h[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, n)) || (l ? h.setProperty(e, i) : h[e] = i));
      }
    }, css: function (t, e, i, n) {
      var s, o, r, a = e.replace(St, "ms-").replace(Pt, d);
      return ue.test(e) || (e = N(a)), (r = ft.cssHooks[e] || ft.cssHooks[a]) && "get" in r && (s = r.get(t, true, i)), void 0 === s && (s = E(t, e, n)), "normal" === s && e in de && (s = de[e]), "" === i || i ? (o = parseFloat(s), true === i || isFinite(o) ? o || 0 : s) : s;
    }}), ft.each(["height", "width"], function (t, e) {
      ft.cssHooks[e] = {get: function (t, i, n) {
        if (i) return !he.test(ft.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? L(t, e, n) : se(t, ce, function () {
          return L(t, e, n);
        });
      }, set: function (t, i, n) {
        var s, o = ne(t), r = !lt.scrollboxSize() && "absolute" === o.position, a = (r || n) && "border-box" === ft.css(t, "boxSizing", false, o), l = n ? z(t, e, n, a, o) : 0;
        return a && r && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - z(t, e, "border", false, o) - .5)), l && (s = zt.exec(i)) && "px" !== (s[3] || "px") && (t.style[e] = i, i = ft.css(t, e)), O(0, i, l);
      }};
    }), ft.cssHooks.marginLeft = H(lt.reliableMarginLeft, function (t, e) {
      if (e) return (parseFloat(E(t, "marginLeft")) || t.getBoundingClientRect().left - se(t, {marginLeft: 0}, function () {
        return t.getBoundingClientRect().left;
      })) + "px";
    }), ft.each({margin: "", padding: "", border: "Width"}, function (t, e) {
      ft.cssHooks[t + e] = {expand: function (i) {
        for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) s[t + Lt[n] + e] = o[n] || o[n - 2] || o[0];
        return s;
      }}, "margin" !== t && (ft.cssHooks[t + e].set = O);
    }), ft.fn.extend({css: function (t, e) {
      return It(this, function (t, e, i) {
        var n, s, o = {}, r = 0;
        if (Array.isArray(e)) {
          for (n = ne(t), s = e.length; r < s; r++) o[e[r]] = ft.css(t, e[r], false, n);
          return o;
        }
        return void 0 !== i ? ft.style(t, e, i) : ft.css(t, e);
      }, t, e, 1 < arguments.length);
    }}), ((ft.Tween = W).prototype = {constructor: W, init: function (t, e, i, n, s, o) {
      this.elem = t, this.prop = i, this.easing = s || ft.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (ft.cssNumber[i] ? "" : "px");
    }, cur: function () {
      var t = W.propHooks[this.prop];
      return t && t.get ? t.get(this) : W.propHooks._default.get(this);
    }, run: function (t) {
      var e, i = W.propHooks[this.prop];
      return this.options.duration ? this.pos = e = ft.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : W.propHooks._default.set(this), this;
    }}).init.prototype = W.prototype, (W.propHooks = {_default: {get: function (t) {
      var e;
      return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ft.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0;
    }, set: function (t) {
      ft.fx.step[t.prop] ? ft.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !ft.cssHooks[t.prop] && null == t.elem.style[N(t.prop)] ? t.elem[t.prop] = t.now : ft.style(t.elem, t.prop, t.now + t.unit);
    }}}).scrollTop = W.propHooks.scrollLeft = {set: function (t) {
      t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
    }}, ft.easing = {linear: function (t) {
      return t;
    }, swing: function (t) {
      return .5 - Math.cos(t * Math.PI) / 2;
    }, _default: "swing"}, ft.fx = W.prototype.init, ft.fx.step = {};
    var pe, fe, ge, me, ve = /^(?:toggle|show|hide)$/, _e = /queueHooks$/;
    ft.Animation = ft.extend(B, {tweeners: {"*": [function (t, e) {
      var i = this.createTween(t, e);
      return m(i.elem, t, zt.exec(e), i), i;
    }]}, tweener: function (t, e) {
      "function" == typeof t && "number" != typeof t.nodeType ? (e = t, t = ["*"]) : t = t.match(kt);
      for (var i, n = 0, s = t.length; n < s; n++) i = t[n], B.tweeners[i] = B.tweeners[i] || [], B.tweeners[i].unshift(e);
    }, prefilters: [function (t, e, i) {
      var n, s, o, r, a, l, h, u, c = "width" in e || "height" in e, d = this, p = {}, f = t.style, g = t.nodeType && ("none" === (t = e || t).style.display || "" === t.style.display && ft.contains(t.ownerDocument, t) && "none" === ft.css(t, "display")), m = At.get(t, "fxshow");
      for (n in i.queue || (null == (r = ft._queueHooks(t, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function () {
        r.unqueued || a();
      }), r.unqueued++, d.always(function () {
        d.always(function () {
          r.unqueued--, ft.queue(t, "fx").length || r.empty.fire();
        });
      })), e) if (s = e[n], ve.test(s)) {
        if (delete e[n], o = o || "toggle" === s, s === (g ? "hide" : "show")) {
          if ("show" !== s || !m || void 0 === m[n]) continue;
          g = true;
        }
        p[n] = m && m[n] || ft.style(t, n);
      }
      if ((l = !ft.isEmptyObject(e)) || !ft.isEmptyObject(p)) for (n in c && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (h = m && m.display) && (h = At.get(t, "display")), "none" === (u = ft.css(t, "display")) && (h ? u = h : (v([t], true), h = t.style.display || h, u = ft.css(t, "display"), v([t]))), ("inline" === u || "inline-block" === u && null != h) && "none" === ft.css(t, "float") && (l || (d.done(function () {
        f.display = h;
      }), null == h && (u = f.display, h = "none" === u ? "" : u)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", d.always(function () {
        f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2];
      })), l = false, p) l || (m ? "hidden" in m && (g = m.hidden) : m = At.access(t, "fxshow", {display: h}), o && (m.hidden = !g), g && v([t], true), d.done(function () {
        for (n in g || v([t]), At.remove(t, "fxshow"), p) ft.style(t, n, p[n]);
      })), l = q(g ? m[n] : 0, n, d), n in m || (m[n] = l.start, g && (l.end = l.start, l.start = 0));
    }], prefilter: function (t, e) {
      e ? B.prefilters.unshift(t) : B.prefilters.push(t);
    }}), ft.speed = function (t, e, i) {
      var n = t && "object" == typeof t ? ft.extend({}, t) : {complete: i || !i && e || "function" == typeof t && "number" != typeof t.nodeType && t, duration: t, easing: i && e || e && !("function" == typeof e && "number" != typeof e.nodeType) && e};
      return ft.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in ft.fx.speeds ? n.duration = ft.fx.speeds[n.duration] : n.duration = ft.fx.speeds._default), null != n.queue && true !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
        "function" == typeof n.old && "number" != typeof n.old.nodeType && n.old.call(this), n.queue && ft.dequeue(this, n.queue);
      }, n;
    }, ft.fn.extend({fadeTo: function (t, e, i, n) {
      return this.filter(jt).css("opacity", 0).show().end().animate({opacity: e}, t, i, n);
    }, animate: function (t, e, i, n) {
      var s = ft.isEmptyObject(t), o = ft.speed(e, i, n), r = function () {
        var e = B(this, ft.extend({}, t), o);
        (s || At.get(this, "finish")) && e.stop(true);
      };
      return r.finish = r, s || false === o.queue ? this.each(r) : this.queue(o.queue, r);
    }, stop: function (t, e, i) {
      var n = function (t) {
        var e = t.stop;
        delete t.stop, e(i);
      };
      return "string" != typeof t && (i = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each(function () {
        var e = true, s = null != t && t + "queueHooks", o = ft.timers, r = At.get(this);
        if (s) r[s] && r[s].stop && n(r[s]); else for (s in r) r[s] && r[s].stop && _e.test(s) && n(r[s]);
        for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = false, o.splice(s, 1));
        !e && i || ft.dequeue(this, t);
      });
    }, finish: function (t) {
      return false !== t && (t = t || "fx"), this.each(function () {
        var e, i = At.get(this), n = i[t + "queue"], s = i[t + "queueHooks"], o = ft.timers, r = n ? n.length : 0;
        for (i.finish = true, ft.queue(this, t, []), s && s.stop && s.stop.call(this, true), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(true), o.splice(e, 1));
        for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
        delete i.finish;
      });
    }}), ft.each(["toggle", "show", "hide"], function (t, e) {
      var i = ft.fn[e];
      ft.fn[e] = function (t, n, s) {
        return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(j(e, true), t, n, s);
      };
    }), ft.each({slideDown: j("show"), slideUp: j("hide"), slideToggle: j("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (t, e) {
      ft.fn[t] = function (t, i, n) {
        return this.animate(e, t, i, n);
      };
    }), ft.timers = [], ft.fx.tick = function () {
      var t, e = 0, i = ft.timers;
      for (pe = Date.now(); e < i.length; e++) (t = i[e])() || i[e] !== t || i.splice(e--, 1);
      i.length || ft.fx.stop(), pe = void 0;
    }, ft.fx.timer = function (t) {
      ft.timers.push(t), ft.fx.start();
    }, ft.fx.interval = 13, ft.fx.start = function () {
      fe || (fe = true, F());
    }, ft.fx.stop = function () {
      fe = null;
    }, ft.fx.speeds = {slow: 600, fast: 200, _default: 400}, ft.fn.delay = function (e, i) {
      return e = ft.fx && ft.fx.speeds[e] || e, i = i || "fx", this.queue(i, function (i, n) {
        var s = t.setTimeout(i, e);
        n.stop = function () {
          t.clearTimeout(s);
        };
      });
    }, ge = ct.createElement("input"), me = ct.createElement("select").appendChild(ct.createElement("option")), ge.type = "checkbox", lt.checkOn = "" !== ge.value, lt.optSelected = me.selected, (ge = ct.createElement("input")).value = "t", ge.type = "radio", lt.radioValue = "t" === ge.value;
    var be, ye = ft.expr.attrHandle;
    ft.fn.extend({attr: function (t, e) {
      return It(this, ft.attr, t, e, 1 < arguments.length);
    }, removeAttr: function (t) {
      return this.each(function () {
        ft.removeAttr(this, t);
      });
    }}), ft.extend({attr: function (t, e, i) {
      var n, s, o = t.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? ft.prop(t, e, i) : (1 === o && ft.isXMLDoc(t) || (s = ft.attrHooks[e.toLowerCase()] || (ft.expr.match.bool.test(e) ? be : void 0)), void 0 !== i ? null === i ? void ft.removeAttr(t, e) : s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : s && "get" in s && null !== (n = s.get(t, e)) ? n : null == (n = ft.find.attr(t, e)) ? void 0 : n);
    }, attrHooks: {type: {set: function (t, e) {
      if (!lt.radioValue && "radio" === e && (t.nodeName && t.nodeName.toLowerCase() === "input".toLowerCase())) {
        var i = t.value;
        return t.setAttribute("type", e), i && (t.value = i), e;
      }
    }}}, removeAttr: function (t, e) {
      var i, n = 0, s = e && e.match(kt);
      if (s && 1 === t.nodeType) for (; i = s[n++];) t.removeAttribute(i);
    }}), be = {set: function (t, e, i) {
      return false === e ? ft.removeAttr(t, i) : t.setAttribute(i, i), i;
    }}, ft.each(ft.expr.match.bool.source.match(/\w+/g), function (t, e) {
      var i = ye[e] || ft.find.attr;
      ye[e] = function (t, e, n) {
        var s, o, r = e.toLowerCase();
        return n || (o = ye[r], ye[r] = s, s = null != i(t, e, n) ? r : null, ye[r] = o), s;
      };
    });
    var we = /^(?:input|select|textarea|button)$/i, xe = /^(?:a|area)$/i;
    ft.fn.extend({prop: function (t, e) {
      return It(this, ft.prop, t, e, 1 < arguments.length);
    }, removeProp: function (t) {
      return this.each(function () {
        delete this[ft.propFix[t] || t];
      });
    }}), ft.extend({prop: function (t, e, i) {
      var n, s, o = t.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ft.isXMLDoc(t) || (e = ft.propFix[e] || e, s = ft.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e];
    }, propHooks: {tabIndex: {get: function (t) {
      var e = ft.find.attr(t, "tabindex");
      return e ? parseInt(e, 10) : we.test(t.nodeName) || xe.test(t.nodeName) && t.href ? 0 : -1;
    }}}, propFix: {for: "htmlFor", class: "className"}}), lt.optSelected || (ft.propHooks.selected = {get: function (t) {
      var e = t.parentNode;
      return e && e.parentNode && e.parentNode.selectedIndex, null;
    }, set: function (t) {
      var e = t.parentNode;
      e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
    }}), ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      ft.propFix[this.toLowerCase()] = this;
    }), ft.fn.extend({addClass: function (t) {
      var e, i, n, s, o, r, a, l = 0;
      if ("function" == typeof t && "number" != typeof t.nodeType) return this.each(function (e) {
        ft(this).addClass(t.call(this, e, this.getAttribute && this.getAttribute("class") || ""));
      });
      if ((e = $(t)).length) for (; i = this[l++];) if (s = i.getAttribute && i.getAttribute("class") || "", n = 1 === i.nodeType && " " + (s.match(kt) || []).join(" ") + " ") {
        for (r = 0; o = e[r++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
        s !== (a = (n.match(kt) || []).join(" ")) && i.setAttribute("class", a);
      }
      return this;
    }, removeClass: function (t) {
      var e, i, n, s, o, r, a, l = 0;
      if ("function" == typeof t && "number" != typeof t.nodeType) return this.each(function (e) {
        ft(this).removeClass(t.call(this, e, this.getAttribute && this.getAttribute("class") || ""));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = $(t)).length) for (; i = this[l++];) if (s = i.getAttribute && i.getAttribute("class") || "", n = 1 === i.nodeType && " " + (s.match(kt) || []).join(" ") + " ") {
        for (r = 0; o = e[r++];) for (; -1 < n.indexOf(" " + o + " ");) n = n.replace(" " + o + " ", " ");
        s !== (a = (n.match(kt) || []).join(" ")) && i.setAttribute("class", a);
      }
      return this;
    }, toggleClass: function (t, e) {
      var i = typeof t, n = "string" === i || Array.isArray(t);
      return "boolean" == typeof e && n ? e ? this.addClass(t) : this.removeClass(t) : "function" == typeof t && "number" != typeof t.nodeType ? this.each(function (i) {
        ft(this).toggleClass(t.call(this, i, this.getAttribute && this.getAttribute("class") || "", e), e);
      }) : this.each(function () {
        var e, s, o, r;
        if (n) for (s = 0, o = ft(this), r = $(t); e = r[s++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else void 0 !== t && "boolean" !== i || ((e = this.getAttribute && this.getAttribute("class") || "") && At.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || false === t ? "" : At.get(this, "__className__") || ""));
      });
    }, hasClass: function (t) {
      var e, i, n = 0;
      for (e = " " + t + " "; i = this[n++];) if (1 === i.nodeType && -1 < (" " + ((i.getAttribute && i.getAttribute("class") || "").match(kt) || []).join(" ") + " ").indexOf(e)) return true;
      return false;
    }});
    var Ce = /\r/g;
    ft.fn.extend({val: function (t) {
      var e, i, n, s = this[0];
      return arguments.length ? (n = "function" == typeof t && "number" != typeof t.nodeType, this.each(function (i) {
        var s;
        1 === this.nodeType && (null == (s = n ? t.call(this, i, ft(this).val()) : t) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = ft.map(s, function (t) {
          return null == t ? "" : t + "";
        })), (e = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s));
      })) : s ? (e = ft.valHooks[s.type] || ft.valHooks[s.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : "string" == typeof (i = s.value) ? i.replace(Ce, "") : null == i ? "" : i : void 0;
    }}), ft.extend({valHooks: {option: {get: function (t) {
      var e = ft.find.attr(t, "value");
      return null != e ? e : (ft.text(t).match(kt) || []).join(" ");
    }}, select: {get: function (t) {
      var e, i, n, s = t.options, r = t.selectedIndex, a = "select-one" === t.type, l = a ? null : [], h = a ? r + 1 : s.length;
      for (n = r < 0 ? h : a ? r : 0; n < h; n++) if (((i = s[n]).selected || n === r) && !i.disabled && (!i.parentNode.disabled || !(i.parentNode.nodeName && i.parentNode.nodeName.toLowerCase() === "optgroup".toLowerCase()))) {
        if (e = ft(i).val(), a) return e;
        l.push(e);
      }
      return l;
    }, set: function (t, e) {
      for (var i, n, s = t.options, o = ft.makeArray(e), r = s.length; r--;) ((n = s[r]).selected = -1 < ft.inArray(ft.valHooks.option.get(n), o)) && (i = true);
      return i || (t.selectedIndex = -1), o;
    }}}}), ft.each(["radio", "checkbox"], function () {
      ft.valHooks[this] = {set: function (t, e) {
        if (Array.isArray(e)) return t.checked = -1 < ft.inArray(ft(t).val(), e);
      }}, lt.checkOn || (ft.valHooks[this].get = function (t) {
        return null === t.getAttribute("value") ? "on" : t.value;
      });
    }), lt.focusin = "onfocusin" in t;
    var ke = /^(?:focusinfocus|focusoutblur)$/, De = function (t) {
      t.stopPropagation();
    };
    ft.extend(ft.event, {trigger: function (e, i, n, s) {
      var o, r, a, l, h, u, c, d, p = [n || ct], f = ot.call(e, "type") ? e.type : e, g = ot.call(e, "namespace") ? e.namespace.split(".") : [];
      if (r = d = a = n = n || ct, 3 !== n.nodeType && 8 !== n.nodeType && !ke.test(f + ft.event.triggered) && (-1 < f.indexOf(".") && (f = (g = f.split(".")).shift(), g.sort()), h = f.indexOf(":") < 0 && "on" + f, (e = e[ft.expando] ? e : new ft.Event(f, "object" == typeof e && e)).isTrigger = s ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : ft.makeArray(i, [e]), c = ft.event.special[f] || {}, s || !c.trigger || false !== c.trigger.apply(n, i))) {
        if (!s && !c.noBubble && !(null != n && n === n.window)) {
          for (l = c.delegateType || f, ke.test(l + f) || (r = r.parentNode); r; r = r.parentNode) p.push(r), a = r;
          a === (n.ownerDocument || ct) && p.push(a.defaultView || a.parentWindow || t);
        }
        for (o = 0; (r = p[o++]) && !e.isPropagationStopped();) d = r, e.type = 1 < o ? l : c.bindType || f, (u = (At.get(r, "events") || Object.create(null))[e.type] && At.get(r, "handle")) && u.apply(r, i), (u = h && r[h]) && u.apply && (1 === r.nodeType || 9 === r.nodeType || !+r.nodeType) && (e.result = u.apply(r, i), false === e.result && e.preventDefault());
        return e.type = f, s || e.isDefaultPrevented() || c._default && false !== c._default.apply(p.pop(), i) || !(1 === n.nodeType || 9 === n.nodeType || !+n.nodeType) || h && ("function" == typeof n[f] && "number" != typeof n[f].nodeType) && !(null != n && n === n.window) && ((a = n[h]) && (n[h] = null), ft.event.triggered = f, e.isPropagationStopped() && d.addEventListener(f, De), n[f](), e.isPropagationStopped() && d.removeEventListener(f, De), ft.event.triggered = void 0, a && (n[h] = a)), e.result;
      }
    }, simulate: function (t, e, i) {
      var n = ft.extend(new ft.Event, i, {type: t, isSimulated: true});
      ft.event.trigger(n, null, e);
    }}), ft.fn.extend({trigger: function (t, e) {
      return this.each(function () {
        ft.event.trigger(t, e, this);
      });
    }, triggerHandler: function (t, e) {
      var i = this[0];
      if (i) return ft.event.trigger(t, e, i, true);
    }}), lt.focusin || ft.each({focus: "focusin", blur: "focusout"}, function (t, e) {
      var i = function (t) {
        ft.event.simulate(e, t.target, ft.event.fix(t));
      };
      ft.event.special[e] = {setup: function () {
        var n = this.ownerDocument || this.document || this, s = At.access(n, e);
        s || n.addEventListener(t, i, true), At.access(n, e, (s || 0) + 1);
      }, teardown: function () {
        var n = this.ownerDocument || this.document || this, s = At.access(n, e) - 1;
        s ? At.access(n, e, s) : (n.removeEventListener(t, i, true), At.remove(n, e));
      }};
    });
    var Te = t.location, Ie = {guid: Date.now()}, Se = /\?/;
    ft.parseXML = function (e) {
      var i;
      if (!e || "string" != typeof e) return null;
      try {
        i = (new t.DOMParser).parseFromString(e, "text/xml");
      } catch (e) {
        i = void 0;
      }
      return i && !i.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + e), i;
    };
    var Pe = /\[\]$/, Me = /\r?\n/g, Ae = /^(?:submit|button|image|reset|file)$/i, Ee = /^(?:input|select|textarea|keygen)/i;
    ft.param = function (t, e) {
      var i, n = [], s = function (t, e) {
        var i = "function" == typeof e && "number" != typeof e.nodeType ? e() : e;
        n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i);
      };
      if (null == t) return "";
      if (Array.isArray(t) || t.jquery && !ft.isPlainObject(t)) ft.each(t, function () {
        s(this.name, this.value);
      }); else for (i in t) K(i, t[i], e, s);
      return n.join("&");
    }, ft.fn.extend({serialize: function () {
      return ft.param(this.serializeArray());
    }, serializeArray: function () {
      return this.map(function () {
        var t = ft.prop(this, "elements");
        return t ? ft.makeArray(t) : this;
      }).filter(function () {
        var t = this.type;
        return this.name && !ft(this).is(":disabled") && Ee.test(this.nodeName) && !Ae.test(t) && (this.checked || !Ut.test(t));
      }).map(function (t, e) {
        var i = ft(this).val();
        return null == i ? null : Array.isArray(i) ? ft.map(i, function (t) {
          return {name: e.name, value: t.replace(Me, "\r\n")};
        }) : {name: e.name, value: i.replace(Me, "\r\n")};
      }).get();
    }});
    var He = /%20/g, Ne = /#.*$/, Oe = /([?&])_=[^&]*/, ze = /^(.*?):[ \t]*([^\r\n]*)$/gm, Le = /^(?:GET|HEAD)$/, We = /^\/\//, Fe = {}, Re = {}, je = "*/".concat("*"), qe = ct.createElement("a");
    qe.href = Te.href, ft.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: Te.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Te.protocol), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": je, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": true, "text json": JSON.parse, "text xml": ft.parseXML}, flatOptions: {url: true, context: true}}, ajaxSetup: function (t, e) {
      return e ? G(G(t, ft.ajaxSettings), e) : G(ft.ajaxSettings, t);
    }, ajaxPrefilter: V(Fe), ajaxTransport: V(Re), ajax: function (e, i) {
      function n(e, i, n, a) {
        var h, d, p, y, w, x = i;
        u || (u = true, l && t.clearTimeout(l), s = void 0, r = a || "", C.readyState = 0 < e ? 4 : 0, h = 200 <= e && e < 300 || 304 === e, n && (y = function (t, e, i) {
          for (var n, s, o, r, a = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
          if (n) for (s in a) if (a[s] && a[s].test(n)) {
            l.unshift(s);
            break;
          }
          if (l[0] in i) o = l[0]; else {
            for (s in i) {
              if (!l[0] || t.converters[s + " " + l[0]]) {
                o = s;
                break;
              }
              r || (r = s);
            }
            o = o || r;
          }
          if (o) return o !== l[0] && l.unshift(o), i[o];
        }(f, C, n)), !h && -1 < ft.inArray("script", f.dataTypes) && (f.converters["text script"] = function () {}), y = function (t, e, i, n) {
          var s, o, r, a, l, h = {}, u = t.dataTypes.slice();
          if (u[1]) for (r in t.converters) h[r.toLowerCase()] = t.converters[r];
          for (o = u.shift(); o;) if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
            if (!(r = h[l + " " + o] || h["* " + o])) for (s in h) if ((a = s.split(" "))[1] === o && (r = h[l + " " + a[0]] || h["* " + a[0]])) {
              true === r ? r = h[s] : true !== h[s] && (o = a[0], u.unshift(a[1]));
              break;
            }
            if (true !== r) if (r && t.throws) e = r(e); else try {
              e = r(e);
            } catch (t) {
              return {state: "parsererror", error: r ? t : "No conversion from " + l + " to " + o};
            }
          }
          return {state: "success", data: e};
        }(f, y, C, h), h ? (f.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (ft.lastModified[o] = w), (w = C.getResponseHeader("etag")) && (ft.etag[o] = w)), 204 === e || "HEAD" === f.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = y.state, d = y.data, h = !(p = y.error))) : (p = x, !e && x || (x = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (i || x) + "", h ? v.resolveWith(g, [d, x, C]) : v.rejectWith(g, [C, x, p]), C.statusCode(b), b = void 0, c && m.trigger(h ? "ajaxSuccess" : "ajaxError", [C, f, h ? d : p]), _.fireWith(g, [C, x]), c && (m.trigger("ajaxComplete", [C, f]), --ft.active || ft.event.trigger("ajaxStop")));
      }
      "object" == typeof e && (i = e, e = void 0), i = i || {};
      var s, o, r, a, l, h, u, c, d, p, f = ft.ajaxSetup({}, i), g = f.context || f, m = f.context && (g.nodeType || g.jquery) ? ft(g) : ft.event, v = ft.Deferred(), _ = ft.Callbacks("once memory"), b = f.statusCode || {}, y = {}, w = {}, x = "canceled", C = {readyState: 0, getResponseHeader: function (t) {
        var e;
        if (u) {
          if (!a) for (a = {}; e = ze.exec(r);) a[e[1].toLowerCase() + " "] = (a[e[1].toLowerCase() + " "] || []).concat(e[2]);
          e = a[t.toLowerCase() + " "];
        }
        return null == e ? null : e.join(", ");
      }, getAllResponseHeaders: function () {
        return u ? r : null;
      }, setRequestHeader: function (t, e) {
        return null == u && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, y[t] = e), this;
      }, overrideMimeType: function (t) {
        return null == u && (f.mimeType = t), this;
      }, statusCode: function (t) {
        var e;
        if (t) if (u) C.always(t[C.status]); else for (e in t) b[e] = [b[e], t[e]];
        return this;
      }, abort: function (t) {
        var e = t || x;
        return s && s.abort(e), n(0, e), this;
      }};
      if (v.promise(C), f.url = ((e || f.url || Te.href) + "").replace(We, Te.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(kt) || [""], null == f.crossDomain) {
        h = ct.createElement("a");
        try {
          h.href = f.url, h.href = h.href, f.crossDomain = qe.protocol + "//" + qe.host != h.protocol + "//" + h.host;
        } catch (e) {
          f.crossDomain = true;
        }
      }
      if (f.data && f.processData && "string" != typeof f.data && (f.data = ft.param(f.data, f.traditional)), X(Fe, f, i, C), u) return C;
      for (d in (c = ft.event && f.global) && 0 == ft.active++ && ft.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Le.test(f.type), o = f.url.replace(Ne, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(He, "+")) : (p = f.url.slice(o.length), f.data && (f.processData || "string" == typeof f.data) && (o += (Se.test(o) ? "&" : "?") + f.data, delete f.data), false === f.cache && (o = o.replace(Oe, "$1"), p = (Se.test(o) ? "&" : "?") + "_=" + Ie.guid++ + p), f.url = o + p), f.ifModified && (ft.lastModified[o] && C.setRequestHeader("If-Modified-Since", ft.lastModified[o]), ft.etag[o] && C.setRequestHeader("If-None-Match", ft.etag[o])), (f.data && f.hasContent && false !== f.contentType || i.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + je + "; q=0.01" : "") : f.accepts["*"]), f.headers) C.setRequestHeader(d, f.headers[d]);
      if (f.beforeSend && (false === f.beforeSend.call(g, C, f) || u)) return C.abort();
      if (x = "abort", _.add(f.complete), C.done(f.success), C.fail(f.error), s = X(Re, f, i, C)) {
        if (C.readyState = 1, c && m.trigger("ajaxSend", [C, f]), u) return C;
        f.async && 0 < f.timeout && (l = t.setTimeout(function () {
          C.abort("timeout");
        }, f.timeout));
        try {
          u = false, s.send(y, n);
        } catch (e) {
          if (u) throw e;
          n(-1, e);
        }
      } else n(-1, "No Transport");
      return C;
    }, getJSON: function (t, e, i) {
      return ft.get(t, e, i, "json");
    }, getScript: function (t, e) {
      return ft.get(t, void 0, e, "script");
    }}), ft.each(["get", "post"], function (t, e) {
      ft[e] = function (t, i, n, s) {
        return "function" == typeof i && "number" != typeof i.nodeType && (s = s || n, n = i, i = void 0), ft.ajax(ft.extend({url: t, type: e, dataType: s, data: i, success: n}, ft.isPlainObject(t) && t));
      };
    }), ft.ajaxPrefilter(function (t) {
      var e;
      for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "");
    }), ft._evalUrl = function (t, e, i) {
      return ft.ajax({url: t, type: "GET", dataType: "script", cache: true, async: false, global: false, converters: {"text script": function () {}}, dataFilter: function (t) {
        ft.globalEval(t, e, i);
      }});
    }, ft.fn.extend({wrapAll: function (t) {
      var e;
      return this[0] && ("function" == typeof t && "number" != typeof t.nodeType && (t = t.call(this[0])), e = ft(t, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
        for (var t = this; t.firstElementChild;) t = t.firstElementChild;
        return t;
      }).append(this)), this;
    }, wrapInner: function (t) {
      return "function" == typeof t && "number" != typeof t.nodeType ? this.each(function (e) {
        ft(this).wrapInner(t.call(this, e));
      }) : this.each(function () {
        var e = ft(this), i = e.contents();
        i.length ? i.wrapAll(t) : e.append(t);
      });
    }, wrap: function (t) {
      var e = "function" == typeof t && "number" != typeof t.nodeType;
      return this.each(function (i) {
        ft(this).wrapAll(e ? t.call(this, i) : t);
      });
    }, unwrap: function (t) {
      return this.parent(t).not("body").each(function () {
        ft(this).replaceWith(this.childNodes);
      }), this;
    }}), ft.expr.pseudos.hidden = function (t) {
      return !ft.expr.pseudos.visible(t);
    }, ft.expr.pseudos.visible = function (t) {
      return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
    }, ft.ajaxSettings.xhr = function () {
      try {
        return new t.XMLHttpRequest;
      } catch (t) {}
    };
    var Be = {0: 200, 1223: 204}, Ye = ft.ajaxSettings.xhr();
    lt.cors = !!Ye && "withCredentials" in Ye, lt.ajax = Ye = !!Ye, ft.ajaxTransport(function (e) {
      var i, n;
      if (lt.cors || Ye && !e.crossDomain) return {send: function (s, o) {
        var r, a = e.xhr();
        if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (r in e.xhrFields) a[r] = e.xhrFields[r];
        for (r in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s) a.setRequestHeader(r, s[r]);
        i = function (t) {
          return function () {
            i && (i = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? 0..nodeName && 0..nodeName.toLowerCase() === "error".toLowerCase() : a.status.nodeName && a.status.nodeName.toLowerCase() === a.statusText.toLowerCase() : (Be[a.status] || a.status).nodeName && (Be[a.status] || a.status).nodeName.toLowerCase() === a.statusText.toLowerCase());
          };
        }, a.onload = i(), n = a.onerror = a.ontimeout = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function () {
          4 === a.readyState && t.setTimeout(function () {
            i && n();
          });
        }, i = i("abort");
        try {
          a.send(e.hasContent && e.data || null);
        } catch (s) {
          if (i) throw s;
        }
      }, abort: function () {
        i && i();
      }};
    }), ft.ajaxPrefilter(function (t) {
      t.crossDomain && (t.contents.script = false);
    }), ft.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /\b(?:java|ecma)script\b/}, converters: {"text script": function (t) {
      return ft.globalEval(t), t;
    }}}), ft.ajaxPrefilter("script", function (t) {
      void 0 === t.cache && (t.cache = false), t.crossDomain && (t.type = "GET");
    }), ft.ajaxTransport("script", function (t) {
      var e, i;
      if (t.crossDomain || t.scriptAttrs) return {send: function (n, s) {
        e = ft("<script>").attr(t.scriptAttrs || {}).prop({charset: t.scriptCharset, src: t.url}).on("load error", i = function (t) {
          e.remove(), i = null, t && s("error" === t.type ? 404 : 200, t.type);
        }), ct.head.appendChild(e[0]);
      }, abort: function () {
        i && i();
      }};
    });
    var Ue, $e = [], Ke = /(=)\?(?=&|$)|\?\?/;
    ft.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
      var t = $e.pop() || ft.expando + "_" + Ie.guid++;
      return this[t] = true, t;
    }}), ft.ajaxPrefilter("json jsonp", function (e, i, n) {
      var s, o, r, a = false !== e.jsonp && (Ke.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ke.test(e.data) && "data");
      if (a || "jsonp" === e.dataTypes[0]) return s = e.jsonpCallback = "function" == typeof e.jsonpCallback && "number" != typeof e.jsonpCallback.nodeType ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ke, "$1" + s) : false !== e.jsonp && (e.url += (Se.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function () {
        return r || ft.error(s + " was not called"), r[0];
      }, e.dataTypes[0] = "json", o = t[s], t[s] = function () {
        r = arguments;
      }, n.always(function () {
        void 0 === o ? ft(t).removeProp(s) : t[s] = o, e[s] && (e.jsonpCallback = i.jsonpCallback, $e.push(s)), r && ("function" == typeof o && "number" != typeof o.nodeType) && (r[0].nodeName && r[0].nodeName.toLowerCase() === e.toLowerCase()), r = o = void 0;
      }), "script";
    }), lt.createHTMLDocument = ((Ue = ct.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ue.childNodes.length), ft.parseHTML = function (t, e, i) {
      return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = false), e || (lt.createHTMLDocument ? ((n = (e = ct.implementation.createHTMLDocument("")).createElement("base")).href = ct.location.href, e.head.appendChild(n)) : e = ct), o = !i && [], (s = bt.exec(t)) ? [e.createElement(s[1])] : (s = y([t], e, o), o && o.length && ft(o).remove(), ft.merge([], s.childNodes)));
      var n, s, o;
    }, ft.fn.load = function (t, e, i) {
      var n, s, o, r = this, a = t.indexOf(" ");
      return -1 < a && (n = (t.slice(a).match(kt) || []).join(" "), t = t.slice(0, a)), "function" == typeof e && "number" != typeof e.nodeType ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), 0 < r.length && ft.ajax({url: t, type: s || "GET", dataType: "html", data: e}).done(function (t) {
        o = arguments, r.html(n ? ft("<div>").append(ft.parseHTML(t)).find(n) : t);
      }).always(i && function (t, e) {
        r.each(function () {
          i.apply(this, o || [t.responseText, e, t]);
        });
      }), this;
    }, ft.expr.pseudos.animated = function (t) {
      return ft.grep(ft.timers, function (e) {
        return t === e.elem;
      }).length;
    }, ft.offset = {setOffset: function (t, e, i) {
      var n, s, o, r, a, l, h = ft.css(t, "position"), u = ft(t), c = {};
      "static" === h && (t.style.position = "relative"), a = u.offset(), o = ft.css(t, "top"), l = ft.css(t, "left"), ("absolute" === h || "fixed" === h) && -1 < (o + l).indexOf("auto") ? (r = (n = u.position()).top, s = n.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0), "function" == typeof e && "number" != typeof e.nodeType && (e = e.call(t, i, ft.extend({}, a))), null != e.top && (c.top = e.top - a.top + r), null != e.left && (c.left = e.left - a.left + s), "using" in e ? e.using.call(t, c) : ("number" == typeof c.top && (c.top += "px"), "number" == typeof c.left && (c.left += "px"), u.css(c));
    }}, ft.fn.extend({offset: function (t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        ft.offset.setOffset(this, t, e);
      });
      var e, i, n = this[0];
      return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {top: e.top + i.pageYOffset, left: e.left + i.pageXOffset}) : {top: 0, left: 0} : void 0;
    }, position: function () {
      if (this[0]) {
        var t, e, i, n = this[0], s = {top: 0, left: 0};
        if ("fixed" === ft.css(n, "position")) e = n.getBoundingClientRect(); else {
          for (e = this.offset(), i = n.ownerDocument, t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === ft.css(t, "position");) t = t.parentNode;
          t && t !== n && 1 === t.nodeType && ((s = ft(t).offset()).top += ft.css(t, "borderTopWidth", true), s.left += ft.css(t, "borderLeftWidth", true));
        }
        return {top: e.top - s.top - ft.css(n, "marginTop", true), left: e.left - s.left - ft.css(n, "marginLeft", true)};
      }
    }, offsetParent: function () {
      return this.map(function () {
        for (var t = this.offsetParent; t && "static" === ft.css(t, "position");) t = t.offsetParent;
        return t || Wt;
      });
    }}), ft.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
      var i = "pageYOffset" === e;
      ft.fn[t] = function (n) {
        return It(this, function (t, n, s) {
          var o;
          if (null != t && t === t.window ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === s) return o ? o[e] : t[n];
          o ? o.scrollTo(i ? o.pageXOffset : s, i ? s : o.pageYOffset) : t[n] = s;
        }, t, n, arguments.length);
      };
    }), ft.each(["top", "left"], function (t, e) {
      ft.cssHooks[e] = H(lt.pixelPosition, function (t, i) {
        if (i) return i = E(t, e), ie.test(i) ? ft(t).position()[e] + "px" : i;
      });
    }), ft.each({Height: "height", Width: "width"}, function (t, e) {
      ft.each({padding: "inner" + t, content: e, "": "outer" + t}, function (i, n) {
        ft.fn[n] = function (s, o) {
          var r = arguments.length && (i || "boolean" != typeof s), a = i || (true === s || true === o ? "margin" : "border");
          return It(this, function (e, i, s) {
            var o;
            return null != e && e === e.window ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === s ? ft.css(e, i, a) : ft.style(e, i, s, a);
          }, e, r ? s : void 0, r);
        };
      });
    }), ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
      ft.fn[e] = function (t) {
        return this.on(e, t);
      };
    }), ft.fn.extend({bind: function (t, e, i) {
      return this.on(t, null, e, i);
    }, unbind: function (t, e) {
      return this.off(t, null, e);
    }, delegate: function (t, e, i, n) {
      return this.on(e, t, i, n);
    }, undelegate: function (t, e, i) {
      return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i);
    }, hover: function (t, e) {
      return this.mouseenter(t).mouseleave(e || t);
    }}), ft.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
      ft.fn[e] = function (t, i) {
        return 0 < arguments.length ? this.on(e, null, t, i) : this.trigger(e);
      };
    });
    var Ve = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    ft.proxy = function (t, e) {
      var i, n, s;
      if ("string" == typeof e && (i = t[e], e = t, t = i), "function" == typeof t && "number" != typeof t.nodeType) return n = Z.call(arguments, 2), (s = function () {
        return t.apply(e || this, n.concat(Z.call(arguments)));
      }).guid = t.guid = t.guid || ft.guid++, s;
    }, ft.holdReady = function (t) {
      t ? ft.readyWait++ : ft.ready(true);
    }, ft.isArray = Array.isArray, ft.parseJSON = JSON.parse, ft.nodeName = o, ft.isFunction = ht, ft.isWindow = ut, ft.camelCase = p, ft.type = n, ft.now = Date.now, ft.isNumeric = function (t) {
      var e = ft.type(t);
      return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
    }, ft.trim = function (t) {
      return null == t ? "" : (t + "").replace(Ve, "");
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
      return ft;
    });
    var Xe = t.jQuery, Ge = t.$;
    return ft.noConflict = function (e) {
      return t.$ === ft && (t.$ = Ge), e && t.jQuery === ft && (t.jQuery = Xe), ft;
    }, void 0 === e && (t.jQuery = t.$ = ft), ft;
  }), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
  }(function (t) {
    function e(t) {
      for (var e = t.css("visibility"); "inherit" === e;) t = t.parent(), e = t.css("visibility");
      return "hidden" !== e;
    }
    function i(t) {
      for (var e, i; t.length && t[0] !== document;) {
        if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
        t = t.parent();
      }
      return 0;
    }
    function n() {
      this._curInst = null, this._keyEvent = false, this._disabledInputs = [], this._datepickerShowing = false, this._inDialog = false, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: false, showMonthAfterYear: false, yearSuffix: ""}, this._defaults = {showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: false, hideIfNoPrevNext: false, navigationAsDateFormat: false, gotoCurrent: false, changeMonth: false, changeYear: false, yearRange: "c-10:c+10", showOtherMonths: false, selectOtherMonths: false, showWeek: false, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: true, showButtonPanel: false, autoSize: false, disabled: false}, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(true, {}, this.regional[""]), this.regional["en-US"] = t.extend(true, {}, this.regional.en), this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
    }
    function s(e) {
      var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
      return e.on("mouseout", i, function () {
        t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover");
      }).on("mouseover", i, o);
    }
    function o() {
      t.datepicker._isDisabledDatepicker(g.inline ? g.dpDiv.parent()[0] : g.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"));
    }
    function r(e, i) {
      t.extend(e, i);
      for (var n in i) null == i[n] && (e[n] = i[n]);
      return e;
    }
    function a(t) {
      return function () {
        var e = this.element.val();
        t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change");
      };
    }
    t.ui = t.ui || {}, t.ui.version = "1.12.1";
    var l = 0, h = Array.prototype.slice;
    t.cleanData = function (e) {
      return function (i) {
        var n, s, o;
        for (o = 0; null != (s = i[o]); o++) try {
          (n = t._data(s, "events")) && n.remove && t(s).triggerHandler("remove");
        } catch (t) {}
        e(i);
      };
    }(t.cleanData), t.widget = function (e, i, n) {
      var s, o, r, a = {}, l = e.split(".")[0], h = l + "-" + (e = e.split(".")[1]);
      return n || (n = i, i = t.Widget), t.isArray(n) && (n = t.extend.apply(null, [{}].concat(n))), t.expr[":"][h.toLowerCase()] = function (e) {
        return !!t.data(e, h);
      }, t[l] = t[l] || {}, s = t[l][e], o = t[l][e] = function (t, e) {
        return this._createWidget ? void (arguments.length && this._createWidget(t, e)) : new o(t, e);
      }, t.extend(o, s, {version: n.version, _proto: t.extend({}, n), _childConstructors: []}), r = new i, r.options = t.widget.extend({}, r.options), t.each(n, function (e, n) {
        return t.isFunction(n) ? void (a[e] = function () {
          return function () {
            var e, i = this._super, o = this._superApply;
            return this._super = t, this._superApply = s, e = n.apply(this, arguments), this._super = i, this._superApply = o, e;
          };
        }()) : void (a[e] = n);
      }), o.prototype = t.widget.extend(r, {widgetEventPrefix: s ? r.widgetEventPrefix || e : e}, a, {constructor: o, namespace: l, widgetName: e, widgetFullName: h}), s ? (t.each(s._childConstructors, function (e, i) {
        var n = i.prototype;
        t.widget(n.namespace + "." + n.widgetName, o, i._proto);
      }), delete s._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o;
    }, t.widget.extend = function (e) {
      for (var i, n, s = h.call(arguments, 1), o = 0, r = s.length; r > o; o++) for (i in s[o]) n = s[o][i], s[o].hasOwnProperty(i) && void 0 !== n && (e[i] = t.isPlainObject(n) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n) : n);
      return e;
    }, t.widget.bridge = function (e, i) {
      var n = i.prototype.widgetFullName || e;
      t.fn[e] = function (s) {
        var o = "string" == typeof s, r = h.call(arguments, 1), a = this;
        return o ? this.length || "instance" !== s ? this.each(function () {
          var i, o = t.data(this, n);
          return "instance" === s ? (a = o, false) : o ? t.isFunction(o[s]) && "_" !== s.charAt(0) ? (i = o[s].apply(o, r)) !== o && void 0 !== i ? (a = i && i.jquery ? a.pushStack(i.get()) : i, false) : void 0 : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'");
        }) : a = void 0 : (r.length && (s = t.widget.extend.apply(null, [s].concat(r))), this.each(function () {
          var e = t.data(this, n);
          e ? (e.option(s || {}), e._init && e._init()) : t.data(this, n, new i(s, this));
        })), a;
      };
    }, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: {classes: {}, disabled: false, create: null}, _createWidget: function (e, i) {
      i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = l++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(true, this.element, {remove: function (t) {
        t.target === i && this.destroy();
      }}), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init();
    }, _getCreateOptions: function () {
      return {};
    }, _getCreateEventData: t.noop, _create: t.noop, _init: t.noop, destroy: function () {
      var e = this;
      this._destroy(), t.each(this.classesElementLookup, function (t, i) {
        e._removeClass(i, t);
      }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace);
    }, _destroy: t.noop, widget: function () {
      return this.element;
    }, option: function (e, i) {
      var n, s, o, r = e;
      if (0 === arguments.length) return t.widget.extend({}, this.options);
      if ("string" == typeof e) if (r = {}, n = e.split("."), e = n.shift(), n.length) {
        for (s = r[e] = t.widget.extend({}, this.options[e]), o = 0; n.length - 1 > o; o++) s[n[o]] = s[n[o]] || {}, s = s[n[o]];
        if (e = n.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
        s[e] = i;
      } else {
        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
        r[e] = i;
      }
      return this._setOptions(r), this;
    }, _setOptions: function (t) {
      var e;
      for (e in t) this._setOption(e, t[e]);
      return this;
    }, _setOption: function (t, e) {
      return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this;
    }, _setOptionClasses: function (e) {
      var i, n, s;
      for (i in e) s = this.classesElementLookup[i], e[i] !== this.options.classes[i] && s && s.length && (n = t(s.get()), this._removeClass(s, i), n.addClass(this._classes({element: n, keys: i, classes: e, add: true})));
    }, _setOptionDisabled: function (t) {
      this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
    }, enable: function () {
      return this._setOptions({disabled: false});
    }, disable: function () {
      return this._setOptions({disabled: true});
    }, _classes: function (e) {
      function i(i, o) {
        var r, a;
        for (a = 0; i.length > a; a++) r = s.classesElementLookup[i[a]] || t(), r = t(e.add ? t.unique(r.get().concat(e.element.get())) : r.not(e.element).get()), s.classesElementLookup[i[a]] = r, n.push(i[a]), o && e.classes[i[a]] && n.push(e.classes[i[a]]);
      }
      var n = [], s = this;
      return e = t.extend({element: this.element, classes: this.options.classes || {}}, e), this._on(e.element, {remove: "_untrackClassesElement"}), e.keys && i(e.keys.match(/\S+/g) || [], true), e.extra && i(e.extra.match(/\S+/g) || []), n.join(" ");
    }, _untrackClassesElement: function (e) {
      var i = this;
      t.each(i.classesElementLookup, function (n, s) {
        -1 !== t.inArray(e.target, s) && (i.classesElementLookup[n] = t(s.not(e.target).get()));
      });
    }, _removeClass: function (t, e, i) {
      return this._toggleClass(t, e, i, false);
    }, _addClass: function (t, e, i) {
      return this._toggleClass(t, e, i, true);
    }, _toggleClass: function (t, e, i, n) {
      n = "boolean" == typeof n ? n : i;
      var s = "string" == typeof t || null === t, o = {extra: s ? e : i, keys: s ? t : e, element: s ? this.element : t, add: n};
      return o.element.toggleClass(this._classes(o), n), this;
    }, _on: function (e, i, n) {
      var s, o = this;
      "boolean" != typeof e && (n = i, i = e, e = false), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), t.each(n, function (n, r) {
        function a() {
          return e || true !== o.options.disabled && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? o[r] : r).apply(o, arguments) : void 0;
        }
        "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
        var l = n.match(/^([\w:-]*)\s*(.*)$/), h = l[1] + o.eventNamespace, u = l[2];
        u ? s.on(h, u, a) : i.on(h, a);
      });
    }, _off: function (e, i) {
      i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get());
    }, _delay: function (t, e) {
      var i = this;
      return setTimeout(function () {
        return ("string" == typeof t ? i[t] : t).apply(i, arguments);
      }, e || 0);
    }, _hoverable: function (e) {
      this.hoverable = this.hoverable.add(e), this._on(e, {mouseenter: function (e) {
        this._addClass(t(e.currentTarget), null, "ui-state-hover");
      }, mouseleave: function (e) {
        this._removeClass(t(e.currentTarget), null, "ui-state-hover");
      }});
    }, _focusable: function (e) {
      this.focusable = this.focusable.add(e), this._on(e, {focusin: function (e) {
        this._addClass(t(e.currentTarget), null, "ui-state-focus");
      }, focusout: function (e) {
        this._removeClass(t(e.currentTarget), null, "ui-state-focus");
      }});
    }, _trigger: function (e, i, n) {
      var s, o, r = this.options[e];
      if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (s in o) s in i || (i[s] = o[s]);
      return this.element.trigger(i, n), !(t.isFunction(r) && false === r.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented());
    }}, t.each({show: "fadeIn", hide: "fadeOut"}, function (e, i) {
      t.Widget.prototype["_" + e] = function (n, s, o) {
        "string" == typeof s && (s = {effect: s});
        var r, a = s ? true === s || "number" == typeof s ? i : s.effect || i : e;
        "number" == typeof (s = s || {}) && (s = {duration: s}), r = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), r && t.effects && t.effects.effect[a] ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, o) : n.queue(function (i) {
          t(this)[e](), o && o.call(n[0]), i();
        });
      };
    }), t.widget, function () {
      function e(t, e, i) {
        return [parseFloat(t[0]) * (c.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (c.test(t[1]) ? i / 100 : 1)];
      }
      function n(e) {
        var i = e[0];
        return 9 === i.nodeType ? {width: e.width(), height: e.height(), offset: {top: 0, left: 0}} : t.isWindow(i) ? {width: e.width(), height: e.height(), offset: {top: e.scrollTop(), left: e.scrollLeft()}} : i.preventDefault ? {width: 0, height: 0, offset: {top: i.pageY, left: i.pageX}} : {width: e.outerWidth(), height: e.outerHeight(), offset: e.offset()};
      }
      var s, o = Math.max, r = Math.abs, a = /left|center|right/, l = /top|center|bottom/, h = /[\+\-]\d+(\.[\d]+)?%?/, u = /^\w+/, c = /%$/, d = t.fn.position;
      t.position = {scrollbarWidth: function () {
        if (void 0 !== s) return s;
        var e, i, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = n.children()[0];
        return t("body").append(n), e = o.offsetWidth, n.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = n[0].clientWidth), n.remove(), s = e - i;
      }, getScrollInfo: function (e) {
        var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"), n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"), s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
        return {width: "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0, height: s ? t.position.scrollbarWidth() : 0};
      }, getWithinInfo: function (e) {
        var i = t(e || window), n = t.isWindow(i[0]), s = !!i[0] && 9 === i[0].nodeType;
        return {element: i, isWindow: n, isDocument: s, offset: !n && !s ? t(e).offset() : {left: 0, top: 0}, scrollLeft: i.scrollLeft(), scrollTop: i.scrollTop(), width: i.outerWidth(), height: i.outerHeight()};
      }}, t.fn.position = function (s) {
        if (!s || !s.of) return d.apply(this, arguments);
        s = t.extend({}, s);
        var c, p, f, g, m, v, _ = t(s.of), b = t.position.getWithinInfo(s.within), y = t.position.getScrollInfo(b), w = (s.collision || "flip").split(" "), x = {};
        return v = n(_), _[0].preventDefault && (s.at = "left top"), p = v.width, f = v.height, g = v.offset, m = t.extend({}, g), t.each(["my", "at"], function () {
          var t, e, i = (s[this] || "").split(" ");
          1 === i.length && (i = a.test(i[0]) ? i.concat(["center"]) : l.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = a.test(i[0]) ? i[0] : "center", i[1] = l.test(i[1]) ? i[1] : "center", t = h.exec(i[0]), e = h.exec(i[1]), x[this] = [t ? t[0] : 0, e ? e[0] : 0], s[this] = [u.exec(i[0])[0], u.exec(i[1])[0]];
        }), 1 === w.length && (w[1] = w[0]), "right" === s.at[0] ? m.left += p : "center" === s.at[0] && (m.left += p / 2), "bottom" === s.at[1] ? m.top += f : "center" === s.at[1] && (m.top += f / 2), c = e(x.at, p, f), m.left += c[0], m.top += c[1], this.each(function () {
          var n, a, l = t(this), h = l.outerWidth(), u = l.outerHeight(), d = parseInt(t.css(this, "marginLeft"), 10) || 0, v = parseInt(t.css(this, "marginTop"), 10) || 0, C = h + d + (parseInt(t.css(this, "marginRight"), 10) || 0) + y.width, k = u + v + (parseInt(t.css(this, "marginBottom"), 10) || 0) + y.height, D = t.extend({}, m), T = e(x.my, l.outerWidth(), l.outerHeight());
          "right" === s.my[0] ? D.left -= h : "center" === s.my[0] && (D.left -= h / 2), "bottom" === s.my[1] ? D.top -= u : "center" === s.my[1] && (D.top -= u / 2), D.left += T[0], D.top += T[1], n = {marginLeft: d, marginTop: v}, t.each(["left", "top"], function (e, i) {
            t.ui.position[w[e]] && t.ui.position[w[e]][i](D, {targetWidth: p, targetHeight: f, elemWidth: h, elemHeight: u, collisionPosition: n, collisionWidth: C, collisionHeight: k, offset: [c[0] + T[0], c[1] + T[1]], my: s.my, at: s.at, within: b, elem: l});
          }), s.using && (a = function (t) {
            var e = g.left - D.left, i = e + p - h, n = g.top - D.top, a = n + f - u, c = {target: {element: _, left: g.left, top: g.top, width: p, height: f}, element: {element: l, left: D.left, top: D.top, width: h, height: u}, horizontal: 0 > i ? "left" : e > 0 ? "right" : "center", vertical: 0 > a ? "top" : n > 0 ? "bottom" : "middle"};
            h > p && p > r(e + i) && (c.horizontal = "center"), u > f && f > r(n + a) && (c.vertical = "middle"), c.important = o(r(e), r(i)) > o(r(n), r(a)) ? "horizontal" : "vertical", s.using.call(this, t, c);
          }), l.offset(t.extend(D, {using: a}));
        });
      }, t.ui.position = {fit: {left: function (t, e) {
        var i, n = e.within, s = n.isWindow ? n.scrollLeft : n.offset.left, r = n.width, a = t.left - e.collisionPosition.marginLeft, l = s - a, h = a + e.collisionWidth - r - s;
        e.collisionWidth > r ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - r - s, t.left += l - i) : t.left = h > 0 && 0 >= l ? s : l > h ? s + r - e.collisionWidth : s : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - a, t.left);
      }, top: function (t, e) {
        var i, n = e.within, s = n.isWindow ? n.scrollTop : n.offset.top, r = e.within.height, a = t.top - e.collisionPosition.marginTop, l = s - a, h = a + e.collisionHeight - r - s;
        e.collisionHeight > r ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - r - s, t.top += l - i) : t.top = h > 0 && 0 >= l ? s : l > h ? s + r - e.collisionHeight : s : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - a, t.top);
      }}, flip: {left: function (t, e) {
        var i, n, s = e.within, o = s.offset.left + s.scrollLeft, a = s.width, l = s.isWindow ? s.scrollLeft : s.offset.left, h = t.left - e.collisionPosition.marginLeft, u = h - l, c = h + e.collisionWidth - a - l, d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, f = -2 * e.offset[0];
        0 > u ? (0 > (i = t.left + d + p + f + e.collisionWidth - a - o) || r(u) > i) && (t.left += d + p + f) : c > 0 && ((n = t.left - e.collisionPosition.marginLeft + d + p + f - l) > 0 || c > r(n)) && (t.left += d + p + f);
      }, top: function (t, e) {
        var i, n, s = e.within, o = s.offset.top + s.scrollTop, a = s.height, l = s.isWindow ? s.scrollTop : s.offset.top, h = t.top - e.collisionPosition.marginTop, u = h - l, c = h + e.collisionHeight - a - l, d = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, f = -2 * e.offset[1];
        0 > u ? (0 > (n = t.top + d + p + f + e.collisionHeight - a - o) || r(u) > n) && (t.top += d + p + f) : c > 0 && ((i = t.top - e.collisionPosition.marginTop + d + p + f - l) > 0 || c > r(i)) && (t.top += d + p + f);
      }}, flipfit: {left: function () {
        t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments);
      }, top: function () {
        t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments);
      }}};
    }(), t.ui.position, t.extend(t.expr[":"], {data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
      return function (i) {
        return !!t.data(i, e);
      };
    }) : function (e, i, n) {
      return !!t.data(e, n[3]);
    }}), t.fn.extend({disableSelection: function () {
      var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
      return function () {
        return this.on(t + ".ui-disableSelection", function (t) {
          t.preventDefault();
        });
      };
    }(), enableSelection: function () {
      return this.off(".ui-disableSelection");
    }});
    var u = "ui-effects-", c = "ui-effects-style", d = "ui-effects-animated", p = t;
    t.effects = {effect: {}}, function (t, e) {
      function i(t, e, i) {
        var n = u[e.type] || {};
        return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : t > n.max ? n.max : t);
      }
      function n(i) {
        var n = l(), s = n._rgba = [];
        return i = i.toLowerCase(), p(a, function (t, o) {
          var r, a = o.re.exec(i), l = a && o.parse(a), u = o.space || "rgba";
          return l ? (r = n[u](l), n[h[u].cache] = r[h[u].cache], s = n._rgba = r._rgba, false) : e;
        }), s.length ? ("0,0,0,0" === s.join() && t.extend(s, o.transparent), n) : o[i];
      }
      function s(t, e, i) {
        return 1 > 6 * (i = (i + 1) % 1) ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (.6666666666666666 - i) : t;
      }
      var o, r = /^([\-+])=\s*(\d+\.?\d*)/, a = [{re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (t) {
        return [t[1], t[2], t[3], t[4]];
      }}, {re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (t) {
        return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
      }}, {re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (t) {
        return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)];
      }}, {re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (t) {
        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)];
      }}, {re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function (t) {
        return [t[1], t[2] / 100, t[3] / 100, t[4]];
      }}], l = t.Color = function (e, i, n, s) {
        return new t.Color.fn.parse(e, i, n, s);
      }, h = {rgba: {props: {red: {idx: 0, type: "byte"}, green: {idx: 1, type: "byte"}, blue: {idx: 2, type: "byte"}}}, hsla: {props: {hue: {idx: 0, type: "degrees"}, saturation: {idx: 1, type: "percent"}, lightness: {idx: 2, type: "percent"}}}}, u = {byte: {floor: true, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: true}}, c = l.support = {}, d = t("<p>")[0], p = t.each;
      d.style.cssText = "background-color:rgba(1,1,1,.5)", c.rgba = d.style.backgroundColor.indexOf("rgba") > -1, p(h, function (t, e) {
        e.cache = "_" + t, e.props.alpha = {idx: 3, type: "percent", def: 1};
      }), l.fn = t.extend(l.prototype, {parse: function (s, r, a, u) {
        if (s === e) return this._rgba = [null, null, null, null], this;
        (s.jquery || s.nodeType) && (s = t(s).css(r), r = e);
        var c = this, d = t.type(s), f = this._rgba = [];
        return r !== e && (s = [s, r, a, u], d = "array"), "string" === d ? this.parse(n(s) || o._default) : "array" === d ? (p(h.rgba.props, function (t, e) {
          f[e.idx] = i(s[e.idx], e);
        }), this) : "object" === d ? (s instanceof l ? p(h, function (t, e) {
          s[e.cache] && (c[e.cache] = s[e.cache].slice());
        }) : p(h, function (e, n) {
          var o = n.cache;
          p(n.props, function (t, e) {
            if (!c[o] && n.to) {
              if ("alpha" === t || null == s[t]) return;
              c[o] = n.to(c._rgba);
            }
            c[o][e.idx] = i(s[t], e, true);
          }), c[o] && 0 > t.inArray(null, c[o].slice(0, 3)) && (c[o][3] = 1, n.from && (c._rgba = n.from(c[o])));
        }), this) : e;
      }, is: function (t) {
        var i = l(t), n = true, s = this;
        return p(h, function (t, o) {
          var r, a = i[o.cache];
          return a && (r = s[o.cache] || o.to && o.to(s._rgba) || [], p(o.props, function (t, i) {
            return null != a[i.idx] ? n = a[i.idx] === r[i.idx] : e;
          })), n;
        }), n;
      }, _space: function () {
        var t = [], e = this;
        return p(h, function (i, n) {
          e[n.cache] && t.push(i);
        }), t.pop();
      }, transition: function (t, e) {
        var n = l(t), s = n._space(), o = h[s], r = 0 === this.alpha() ? l("transparent") : this, a = r[o.cache] || o.to(r._rgba), c = a.slice();
        return n = n[o.cache], p(o.props, function (t, s) {
          var o = s.idx, r = a[o], l = n[o], h = u[s.type] || {};
          null !== l && (null === r ? c[o] = l : (h.mod && (l - r > h.mod / 2 ? r += h.mod : r - l > h.mod / 2 && (r -= h.mod)), c[o] = i((l - r) * e + r, s)));
        }), this[s](c);
      }, blend: function (e) {
        if (1 === this._rgba[3]) return this;
        var i = this._rgba.slice(), n = i.pop(), s = l(e)._rgba;
        return l(t.map(i, function (t, e) {
          return (1 - n) * s[e] + n * t;
        }));
      }, toRgbaString: function () {
        var e = "rgba(", i = t.map(this._rgba, function (t, e) {
          return null == t ? e > 2 ? 1 : 0 : t;
        });
        return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")";
      }, toHslaString: function () {
        var e = "hsla(", i = t.map(this.hsla(), function (t, e) {
          return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t;
        });
        return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")";
      }, toHexString: function (e) {
        var i = this._rgba.slice(), n = i.pop();
        return e && i.push(~~(255 * n)), "#" + t.map(i, function (t) {
          return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t;
        }).join("");
      }, toString: function () {
        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
      }}), l.fn.parse.prototype = l.fn, h.hsla.to = function (t) {
        if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
        var e, i, n = t[0] / 255, s = t[1] / 255, o = t[2] / 255, r = t[3], a = Math.max(n, s, o), l = Math.min(n, s, o), h = a - l, u = a + l, c = .5 * u;
        return e = l === a ? 0 : n === a ? 60 * (s - o) / h + 360 : s === a ? 60 * (o - n) / h + 120 : 60 * (n - s) / h + 240, i = 0 === h ? 0 : .5 >= c ? h / u : h / (2 - u), [Math.round(e) % 360, i, c, null == r ? 1 : r];
      }, h.hsla.from = function (t) {
        if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
        var e = t[0] / 360, i = t[1], n = t[2], o = t[3], r = .5 >= n ? n * (1 + i) : n + i - n * i, a = 2 * n - r;
        return [Math.round(255 * s(a, r, e + .3333333333333333)), Math.round(255 * s(a, r, e)), Math.round(255 * s(a, r, e - .3333333333333333)), o];
      }, p(h, function (n, s) {
        var o = s.props, a = s.cache, h = s.to, u = s.from;
        l.fn[n] = function (n) {
          if (h && !this[a] && (this[a] = h(this._rgba)), n === e) return this[a].slice();
          var s, r = t.type(n), c = "array" === r || "object" === r ? n : arguments, d = this[a].slice();
          return p(o, function (t, e) {
            var n = c["object" === r ? t : e.idx];
            null == n && (n = d[e.idx]), d[e.idx] = i(n, e);
          }), u ? (s = l(u(d)), s[a] = d, s) : l(d);
        }, p(o, function (e, i) {
          l.fn[e] || (l.fn[e] = function (s) {
            var o, a = t.type(s), l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : n, h = this[l](), u = h[i.idx];
            return "undefined" === a ? u : ("function" === a && (s = s.call(this, u), a = t.type(s)), null == s && i.empty ? this : ("string" === a && (o = r.exec(s)) && (s = u + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1)), h[i.idx] = s, this[l](h)));
          });
        });
      }), l.hook = function (e) {
        var i = e.split(" ");
        p(i, function (e, i) {
          t.cssHooks[i] = {set: function (e, s) {
            var o, r, a = "";
            if ("transparent" !== s && ("string" !== t.type(s) || (o = n(s)))) {
              if (s = l(o || s), !c.rgba && 1 !== s._rgba[3]) {
                for (r = "backgroundColor" === i ? e.parentNode : e; ("" === a || "transparent" === a) && r && r.style;) try {
                  a = t.css(r, "backgroundColor"), r = r.parentNode;
                } catch (t) {}
                s = s.blend(a && "transparent" !== a ? a : "_default");
              }
              s = s.toRgbaString();
            }
            try {
              e.style[i] = s;
            } catch (t) {}
          }}, t.fx.step[i] = function (e) {
            e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = true), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos));
          };
        });
      }, l.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), t.cssHooks.borderColor = {expand: function (t) {
        var e = {};
        return p(["Top", "Right", "Bottom", "Left"], function (i, n) {
          e["border" + n + "Color"] = t;
        }), e;
      }}, o = t.Color.names = {aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff"};
    }(p), function () {
      function e(e) {
        var i, n, s = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, o = {};
        if (s && s.length && s[0] && s[s[0]]) for (n = s.length; n--;) i = s[n], "string" == typeof s[i] && (o[t.camelCase(i)] = s[i]); else for (i in s) "string" == typeof s[i] && (o[i] = s[i]);
        return o;
      }
      function i(e, i) {
        var n, o, r = {};
        for (n in i) o = i[n], e[n] !== o && (s[n] || (t.fx.step[n] || !isNaN(parseFloat(o))) && (r[n] = o));
        return r;
      }
      var n = ["add", "remove", "toggle"], s = {border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1};
      t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
        t.fx.step[i] = function (t) {
          ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (p.style(t.elem, i, t.end), t.setAttr = true);
        };
      }), t.fn.addBack || (t.fn.addBack = function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
      }), t.effects.animateClass = function (s, o, r, a) {
        var l = t.speed(o, r, a);
        return this.queue(function () {
          var o, r = t(this), a = r.attr("class") || "", h = l.children ? r.find("*").addBack() : r;
          h = h.map(function () {
            return {el: t(this), start: e(this)};
          }), (o = function () {
            t.each(n, function (t, e) {
              s[e] && r[e + "Class"](s[e]);
            });
          })(), h = h.map(function () {
            return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this;
          }), r.attr("class", a), h = h.map(function () {
            var e = this, i = t.Deferred(), n = t.extend({}, l, {queue: false, complete: function () {
              i.resolve(e);
            }});
            return this.el.animate(this.diff, n), i.promise();
          }), t.when.apply(t, h.get()).done(function () {
            o(), t.each(arguments, function () {
              var e = this.el;
              t.each(this.diff, function (t) {
                e.css(t, "");
              });
            }), l.complete.call(r[0]);
          });
        });
      }, t.fn.extend({addClass: function (e) {
        return function (i, n, s, o) {
          return n ? t.effects.animateClass.call(this, {add: i}, n, s, o) : e.apply(this, arguments);
        };
      }(t.fn.addClass), removeClass: function (e) {
        return function (i, n, s, o) {
          return arguments.length > 1 ? t.effects.animateClass.call(this, {remove: i}, n, s, o) : e.apply(this, arguments);
        };
      }(t.fn.removeClass), toggleClass: function (e) {
        return function (i, n, s, o, r) {
          return "boolean" == typeof n || void 0 === n ? s ? t.effects.animateClass.call(this, n ? {add: i} : {remove: i}, s, o, r) : e.apply(this, arguments) : t.effects.animateClass.call(this, {toggle: i}, n, s, o);
        };
      }(t.fn.toggleClass), switchClass: function (e, i, n, s, o) {
        return t.effects.animateClass.call(this, {add: i, remove: e}, n, s, o);
      }});
    }(), function () {
      function n(t, e) {
        var i = e.outerWidth(), n = e.outerHeight(), s = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, i, n, 0];
        return {top: parseFloat(s[1]) || 0, right: "auto" === s[2] ? i : parseFloat(s[2]), bottom: "auto" === s[3] ? n : parseFloat(s[3]), left: parseFloat(s[4]) || 0};
      }
      t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function (e) {
        return function (i) {
          return !!t(i).data(d) || (t.isPlainObject(i) && (i = i, i = i.effect), i = {effect: i}, null == i && (i = {}), t.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (s = n, n = i, i = {}), t.isFunction(n) && (s = n, n = null), i && t.extend(i, i), n = n || i.duration, i.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, i.complete = s || i.complete, i);
        };
      }(t.expr.filters.animated)), false !== t.uiBackCompat && t.extend(t.effects, {save: function (t, e) {
        for (var i = 0, n = e.length; n > i; i++) null !== e[i] && t.data(u + e[i], t[0].style[e[i]]);
      }, restore: function (t, e) {
        for (var i, n = 0, s = e.length; s > n; n++) null !== e[n] && (i = t.data(u + e[n]), t.css(e[n], i));
      }, setMode: function (t, e) {
        return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e;
      }, createWrapper: function (e) {
        if (e.parent().is(".ui-effects-wrapper")) return e.parent();
        var i = {width: e.outerWidth(true), height: e.outerHeight(true), float: e.css("float")}, n = t("<div></div>").addClass("ui-effects-wrapper").css({fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0}), s = {width: e.width(), height: e.height()}, o = document.activeElement;
        try {
          o.id;
        } catch (t) {
          o = document.body;
        }
        return e.wrap(n), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), n = e.parent(), "static" === e.css("position") ? (n.css({position: "relative"}), e.css({position: "relative"})) : (t.extend(i, {position: e.css("position"), zIndex: e.css("z-index")}), t.each(["top", "left", "bottom", "right"], function (t, n) {
          i[n] = e.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto");
        }), e.css({position: "relative", top: 0, left: 0, right: "auto", bottom: "auto"})), e.css(s), n.css(i).show();
      }, removeWrapper: function (e) {
        var i = document.activeElement;
        return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e;
      }}), t.extend(t.effects, {version: "1.12.1", define: function (e, i, n) {
        return n || (n = i, i = "effect"), t.effects.effect[e] = n, t.effects.effect[e].mode = i, n;
      }, scaledDimensions: function (t, e, i) {
        if (0 === e) return {height: 0, width: 0, outerHeight: 0, outerWidth: 0};
        var n = "horizontal" !== i ? (e || 100) / 100 : 1, s = "vertical" !== i ? (e || 100) / 100 : 1;
        return {height: t.height() * s, width: t.width() * n, outerHeight: t.outerHeight() * s, outerWidth: t.outerWidth() * n};
      }, clipToBox: function (t) {
        return {width: t.clip.right - t.clip.left, height: t.clip.bottom - t.clip.top, left: t.clip.left, top: t.clip.top};
      }, unshift: function (t, e, i) {
        var n = t.queue();
        e > 1 && n.splice.apply(n, [1, 0].concat(n.splice(e, i))), t.dequeue();
      }, saveStyle: function (t) {
        t.data(c, t[0].style.cssText);
      }, restoreStyle: function (t) {
        t[0].style.cssText = t.data(c) || "", t.removeData(c);
      }, mode: function (t, e) {
        var i = t.is(":hidden");
        return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e;
      }, getBaseline: function (t, e) {
        var i, n;
        switch (t[0]) {
          case "top":
            i = 0;
            break;
          case "middle":
            i = .5;
            break;
          case "bottom":
            i = 1;
            break;
          default:
            i = t[0] / e.height;
        }
        switch (t[1]) {
          case "left":
            n = 0;
            break;
          case "center":
            n = .5;
            break;
          case "right":
            n = 1;
            break;
          default:
            n = t[1] / e.width;
        }
        return {x: n, y: i};
      }, createPlaceholder: function (e) {
        var i, n = e.css("position"), s = e.position();
        return e.css({marginTop: e.css("marginTop"), marginBottom: e.css("marginBottom"), marginLeft: e.css("marginLeft"), marginRight: e.css("marginRight")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(n) && (n = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block", visibility: "hidden", marginTop: e.css("marginTop"), marginBottom: e.css("marginBottom"), marginLeft: e.css("marginLeft"), marginRight: e.css("marginRight"), float: e.css("float")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(u + "placeholder", i)), e.css({position: n, left: s.left, top: s.top}), i;
      }, removePlaceholder: function (t) {
        var e = u + "placeholder", i = t.data(e);
        i && (i.remove(), t.removeData(e));
      }, cleanUp: function (e) {
        t.effects.restoreStyle(e), t.effects.removePlaceholder(e);
      }, setTransition: function (e, i, n, s) {
        return s = s || {}, t.each(i, function (t, i) {
          var o = e.cssUnit(i);
          o[0] > 0 && (s[i] = o[0] * n + o[1]);
        }), s;
      }}), t.fn.extend({effect: function () {
        function i(e) {
          function i() {
            t.isFunction(l) && l.call(r[0]), t.isFunction(e) && (t.isPlainObject(e) && (i = e, e = e.effect), e = {effect: e}, null == i && (i = {}), t.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (s = n, n = i, i = {}), t.isFunction(n) && (s = n, n = null), i && t.extend(e, i), n = n || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, e.complete = s || i.complete, e);
          }
          var r = t(this);
          n.mode = u.shift(), false === t.uiBackCompat || o ? "none" === n.mode ? (r[h](), !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect))) : s.call(r[0], n, function () {
            r.removeData(d), t.effects.cleanUp(r), "hide" === n.mode && r.hide(), !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect));
          }) : (r.is(":hidden") ? "hide" === h : "show" === h) ? (r[h](), !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect))) : s.call(r[0], n, i);
        }
        var n = e.apply(this, arguments), s = t.effects.effect[n.effect], o = s.mode, r = n.queue, a = r || "fx", l = n.complete, h = n.mode, u = [], c = function (e) {
          var i = t(this), n = t.effects.mode(i, h) || o;
          i.data(d, true), u.push(n), o && ("show" === n || n === o && "hide" === n) && i.show(), o && "none" === n || t.effects.saveStyle(i), t.isFunction(e) && (t.isPlainObject(e) && (i = e, e = e.effect), e = {effect: e}, null == i && (i = {}), t.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (s = n, n = i, i = {}), t.isFunction(n) && (s = n, n = null), i && t.extend(e, i), n = n || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, e.complete = s || i.complete, e);
        };
        return t.fx.off || !s ? h ? this[h](n.duration, l) : this.each(function () {
          l && l.call(this);
        }) : false === r ? this.each(c).each(i) : this.queue(a, c).queue(a, i);
      }, show: function (t) {
        return function (n) {
          if (!(n && "number" != typeof n && !t.fx.speeds[n]) || ("string" == typeof n && !t.effects.effect[n] || (!!t.isFunction(n) || "object" == typeof n && !n.effect))) return t.apply(this, arguments);
          var s = e.apply(this, arguments);
          return s.mode = "show", this.effect.call(this, s);
        };
      }(t.fn.show), hide: function (t) {
        return function (n) {
          if (!(n && "number" != typeof n && !t.fx.speeds[n]) || ("string" == typeof n && !t.effects.effect[n] || (!!t.isFunction(n) || "object" == typeof n && !n.effect))) return t.apply(this, arguments);
          var s = e.apply(this, arguments);
          return s.mode = "hide", this.effect.call(this, s);
        };
      }(t.fn.hide), toggle: function (t) {
        return function (n) {
          if (!(n && "number" != typeof n && !t.fx.speeds[n]) || ("string" == typeof n && !t.effects.effect[n] || (!!t.isFunction(n) || "object" == typeof n && !n.effect)) || "boolean" == typeof n) return t.apply(this, arguments);
          var s = e.apply(this, arguments);
          return s.mode = "toggle", this.effect.call(this, s);
        };
      }(t.fn.toggle), cssUnit: function (e) {
        var i = this.css(e), n = [];
        return t.each(["em", "px", "%", "pt"], function (t, e) {
          i.indexOf(e) > 0 && (n = [parseFloat(i), e]);
        }), n;
      }, cssClip: function (t) {
        return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : n(this.css("clip"), this);
      }, transfer: function (e, i) {
        var n = t(this), s = t(e.to), o = "fixed" === s.css("position"), r = t("body"), a = o ? r.scrollTop() : 0, l = o ? r.scrollLeft() : 0, h = s.offset(), u = {top: h.top - a, left: h.left - l, height: s.innerHeight(), width: s.innerWidth()}, c = n.offset(), d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({top: c.top - a, left: c.left - l, height: n.innerHeight(), width: n.innerWidth(), position: o ? "fixed" : "absolute"}).animate(u, e.duration, e.easing, function () {
          d.remove(), t.isFunction(i) && (!(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect)));
        });
      }}), t.fx.step.clip = function (e) {
        e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = n(e.end, e.elem)), e.clipInit = true), t(e.elem).cssClip({top: e.pos * (e.end.top - e.start.top) + e.start.top, right: e.pos * (e.end.right - e.start.right) + e.start.right, bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom, left: e.pos * (e.end.left - e.start.left) + e.start.left});
      };
    }(), function () {
      var e = {};
      t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
        e[i] = function (e) {
          return Math.pow(e, t + 2);
        };
      }), t.extend(e, {Sine: function (t) {
        return 1 - Math.cos(t * Math.PI / 2);
      }, Circ: function (t) {
        return 1 - Math.sqrt(1 - t * t);
      }, Elastic: function (t) {
        return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15);
      }, Back: function (t) {
        return t * t * (3 * t - 2);
      }, Bounce: function (t) {
        for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t;) ;
        return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2);
      }}), t.each(e, function (e, i) {
        t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
          return 1 - i(1 - t);
        }, t.easing["easeInOut" + e] = function (t) {
          return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2;
        };
      });
    }();
    t.effects;
    t.effects.define("blind", "hide", function (e, i) {
      var n = {up: ["bottom", "top"], vertical: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], horizontal: ["right", "left"], right: ["left", "right"]}, s = t(this), o = e.direction || "up", r = s.cssClip(), a = {clip: t.extend({}, r)}, l = t.effects.createPlaceholder(s);
      a.clip[n[o][0]] = a.clip[n[o][1]], "show" === e.mode && (s.cssClip(a.clip), l && l.css(t.effects.clipToBox(a)), a.clip = r), l && l.animate(t.effects.clipToBox(a), e.duration, e.easing), s.animate(a, {queue: false, duration: e.duration, easing: e.easing, complete: i});
    }), t.effects.define("bounce", function (e, i) {
      var n, s, o, r = t(this), a = e.mode, l = "hide" === a, h = "show" === a, u = e.direction || "up", c = e.distance, d = e.times || 5, p = 2 * d + (h || l ? 1 : 0), f = e.duration / p, g = e.easing, m = "up" === u || "down" === u ? "top" : "left", v = "up" === u || "left" === u, _ = 0, b = r.queue().length;
      for (t.effects.createPlaceholder(r), o = r.css(m), c || (c = r["top" === m ? "outerHeight" : "outerWidth"]() / 3), h && (s = {opacity: 1}, s[m] = o, r.css("opacity", 0).css(m, v ? 2 * -c : 2 * c).animate(s, f, g)), l && (c /= Math.pow(2, d - 1)), (s = {})[m] = o; d > _; _++) n = {}, n[m] = (v ? "-=" : "+=") + c, r.animate(n, f, g).animate(s, f, g), c = l ? 2 * c : c / 2;
      l && (n = {opacity: 0}, n[m] = (v ? "-=" : "+=") + c, r.animate(n, f, g)), r.queue(i), t.effects.unshift(r, b, p + 1);
    }), t.effects.define("clip", "hide", function (e, i) {
      var n, s = {}, o = t(this), r = e.direction || "vertical", a = "both" === r, l = a || "horizontal" === r, h = a || "vertical" === r;
      n = o.cssClip(), s.clip = {top: h ? (n.bottom - n.top) / 2 : n.top, right: l ? (n.right - n.left) / 2 : n.right, bottom: h ? (n.bottom - n.top) / 2 : n.bottom, left: l ? (n.right - n.left) / 2 : n.left}, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(s.clip), s.clip = n), o.animate(s, {queue: false, duration: e.duration, easing: e.easing, complete: i});
    }), t.effects.define("drop", "hide", function (e, i) {
      var n, s = t(this), o = "show" === e.mode, r = e.direction || "left", a = "up" === r || "down" === r ? "top" : "left", l = "up" === r || "left" === r ? "-=" : "+=", h = "+=" === l ? "-=" : "+=", u = {opacity: 0};
      t.effects.createPlaceholder(s), n = e.distance || s["top" === a ? "outerHeight" : "outerWidth"](true) / 2, u[a] = l + n, o && (s.css(u), u[a] = h + n, u.opacity = 1), s.animate(u, {queue: false, duration: e.duration, easing: e.easing, complete: i});
    }), t.effects.define("explode", "hide", function (e, i) {
      function n() {
        d.css({visibility: "visible"}), t(v).remove(), i();
      }
      var s, o, r, a, l, h, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, c = u, d = t(this), p = "show" === e.mode, f = d.show().css("visibility", "hidden").offset(), g = Math.ceil(d.outerWidth() / c), m = Math.ceil(d.outerHeight() / u), v = [];
      for (s = 0; u > s; s++) for (a = f.top + s * m, h = s - (u - 1) / 2, o = 0; c > o; o++) r = f.left + o * g, l = o - (c - 1) / 2, d.clone().appendTo("body").wrap("<div></div>").css({position: "absolute", visibility: "visible", left: -o * g, top: -s * m}).parent().addClass("ui-effects-explode").css({position: "absolute", overflow: "hidden", width: g, height: m, left: r + (p ? l * g : 0), top: a + (p ? h * m : 0), opacity: p ? 0 : 1}).animate({left: r + (p ? 0 : l * g), top: a + (p ? 0 : h * m), opacity: p ? 1 : 0}, e.duration || 500, e.easing, function () {
        v.push(this), v.length === u * c && n();
      });
    }), t.effects.define("fade", "toggle", function (e, i) {
      var n = "show" === e.mode;
      t(this).css("opacity", n ? 0 : 1).animate({opacity: n ? 1 : 0}, {queue: false, duration: e.duration, easing: e.easing, complete: i});
    }), t.effects.define("fold", "hide", function (e, i) {
      var n = t(this), s = e.mode, o = "show" === s, r = "hide" === s, a = e.size || 15, l = /([0-9]+)%/.exec(a), h = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"], u = e.duration / 2, c = t.effects.createPlaceholder(n), d = n.cssClip(), p = {clip: t.extend({}, d)}, f = {clip: t.extend({}, d)}, g = [d[h[0]], d[h[1]]], m = n.queue().length;
      l && (a = parseInt(l[1], 10) / 100 * g[r ? 0 : 1]), p.clip[h[0]] = a, f.clip[h[0]] = a, f.clip[h[1]] = 0, o && (n.cssClip(f.clip), c && c.css(t.effects.clipToBox(f)), f.clip = d), n.queue(function (i) {
        c && c.animate(t.effects.clipToBox(p), u, e.easing).animate(t.effects.clipToBox(f), u, e.easing), i();
      }).animate(p, u, e.easing).animate(f, u, e.easing).queue(i), t.effects.unshift(n, m, 4);
    }), t.effects.define("highlight", "show", function (e, i) {
      var n = t(this), s = {backgroundColor: n.css("backgroundColor")};
      "hide" === e.mode && (s.opacity = 0), t.effects.saveStyle(n), n.css({backgroundImage: "none", backgroundColor: e.color || "#ffff99"}).animate(s, {queue: false, duration: e.duration, easing: e.easing, complete: i});
    }), t.effects.define("size", function (e, i) {
      var n, s, o, r = t(this), a = ["fontSize"], l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], u = e.mode, c = "effect" !== u, d = e.scale || "both", p = e.origin || ["middle", "center"], f = r.css("position"), g = r.position(), m = t.effects.scaledDimensions(r), v = e.from || m, _ = e.to || t.effects.scaledDimensions(r, 0);
      t.effects.createPlaceholder(r), "show" === u && (o = v, v = _, _ = o), s = {from: {y: v.height / m.height, x: v.width / m.width}, to: {y: _.height / m.height, x: _.width / m.width}}, ("box" === d || "both" === d) && (s.from.y !== s.to.y && (v = t.effects.setTransition(r, l, s.from.y, v), _ = t.effects.setTransition(r, l, s.to.y, _)), s.from.x !== s.to.x && (v = t.effects.setTransition(r, h, s.from.x, v), _ = t.effects.setTransition(r, h, s.to.x, _))), ("content" === d || "both" === d) && s.from.y !== s.to.y && (v = t.effects.setTransition(r, a, s.from.y, v), _ = t.effects.setTransition(r, a, s.to.y, _)), p && (n = t.effects.getBaseline(p, m), v.top = (m.outerHeight - v.outerHeight) * n.y + g.top, v.left = (m.outerWidth - v.outerWidth) * n.x + g.left, _.top = (m.outerHeight - _.outerHeight) * n.y + g.top, _.left = (m.outerWidth - _.outerWidth) * n.x + g.left), r.css(v), ("content" === d || "both" === d) && (l = l.concat(["marginTop", "marginBottom"]).concat(a), h = h.concat(["marginLeft", "marginRight"]), r.find("*[width]").each(function () {
        var i = t(this), n = t.effects.scaledDimensions(i), o = {height: n.height * s.from.y, width: n.width * s.from.x, outerHeight: n.outerHeight * s.from.y, outerWidth: n.outerWidth * s.from.x}, r = {height: n.height * s.to.y, width: n.width * s.to.x, outerHeight: n.height * s.to.y, outerWidth: n.width * s.to.x};
        s.from.y !== s.to.y && (o = t.effects.setTransition(i, l, s.from.y, o), r = t.effects.setTransition(i, l, s.to.y, r)), s.from.x !== s.to.x && (o = t.effects.setTransition(i, h, s.from.x, o), r = t.effects.setTransition(i, h, s.to.x, r)), c && t.effects.saveStyle(i), i.css(o), i.animate(r, e.duration, e.easing, function () {
          c && t.effects.restoreStyle(i);
        });
      })), r.animate(_, {queue: false, duration: e.duration, easing: e.easing, complete: function () {
        var e = r.offset();
        0 === _.opacity && r.css("opacity", v.opacity), c || (r.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(r)), i();
      }});
    }), t.effects.define("scale", function (e, i) {
      var n = t(this), s = e.mode, o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== s ? 0 : 100), r = t.extend(true, {from: t.effects.scaledDimensions(n), to: t.effects.scaledDimensions(n, o, e.direction || "both"), origin: e.origin || ["middle", "center"]}, e);
      e.fade && (r.from.opacity = 1, r.to.opacity = 0), t.effects.effect.size.call(this, r, i);
    }), t.effects.define("puff", "hide", function (e, i) {
      var n = t.extend(true, {}, e, {fade: true, percent: parseInt(e.percent, 10) || 150});
      t.effects.effect.scale.call(this, n, i);
    }), t.effects.define("pulsate", "show", function (e, i) {
      var n = t(this), s = e.mode, o = "show" === s, r = "hide" === s, a = o || r, l = 2 * (e.times || 5) + (a ? 1 : 0), h = e.duration / l, u = 0, c = 1, d = n.queue().length;
      for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), u = 1); l > c; c++) n.animate({opacity: u}, h, e.easing), u = 1 - u;
      n.animate({opacity: u}, h, e.easing), n.queue(i), t.effects.unshift(n, d, l + 1);
    }), t.effects.define("shake", function (e, i) {
      var n = 1, s = t(this), o = e.direction || "left", r = e.distance || 20, a = e.times || 3, l = 2 * a + 1, h = Math.round(e.duration / l), u = "up" === o || "down" === o ? "top" : "left", c = "up" === o || "left" === o, d = {}, p = {}, f = {}, g = s.queue().length;
      for (t.effects.createPlaceholder(s), d[u] = (c ? "-=" : "+=") + r, p[u] = (c ? "+=" : "-=") + 2 * r, f[u] = (c ? "-=" : "+=") + 2 * r, s.animate(d, h, e.easing); a > n; n++) s.animate(p, h, e.easing).animate(f, h, e.easing);
      s.animate(p, h, e.easing).animate(d, h / 2, e.easing).queue(i), t.effects.unshift(s, g, l + 1);
    }), t.effects.define("slide", "show", function (e, i) {
      var n, s, o = t(this), r = {up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"]}, a = e.mode, l = e.direction || "left", h = "up" === l || "down" === l ? "top" : "left", u = "up" === l || "left" === l, c = e.distance || o["top" === h ? "outerHeight" : "outerWidth"](true), d = {};
      t.effects.createPlaceholder(o), n = o.cssClip(), s = o.position()[h], d[h] = (u ? -1 : 1) * c + s, d.clip = o.cssClip(), d.clip[r[l][1]] = d.clip[r[l][0]], "show" === a && (o.cssClip(d.clip), o.css(h, d[h]), d.clip = n, d[h] = s), o.animate(d, {queue: false, duration: e.duration, easing: e.easing, complete: i});
    });
    false !== t.uiBackCompat && t.effects.define("transfer", function (e, i) {
      t(this).transfer(e, i);
    }), t.ui.focusable = function (i, n) {
      var s, o, r, a, l, h = i.nodeName.toLowerCase();
      return "area" === h ? (s = i.parentNode, o = s.name, !(!i.href || !o || "map" !== s.nodeName.toLowerCase()) && ((r = t("img[usemap='#" + o + "']")).length > 0 && r.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(h) ? (a = !i.disabled) && (l = t(i).closest("fieldset")[0]) && (a = !l.disabled) : a = "a" === h ? i.href || n : n, a && t(i).is(":visible") && e(t(i)));
    }, t.extend(t.expr[":"], {focusable: function (e) {
      return t.ui.focusable(e, null != t.attr(e, "tabindex"));
    }}), t.ui.focusable, t.fn.form = function () {
      return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form);
    }, t.ui.formResetMixin = {_formResetHandler: function () {
      var e = t(this);
      setTimeout(function () {
        var i = e.data("ui-form-reset-instances");
        t.each(i, function () {
          this.refresh();
        });
      });
    }, _bindFormResetHandler: function () {
      if (this.form = this.element.form(), this.form.length) {
        var t = this.form.data("ui-form-reset-instances") || [];
        t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t);
      }
    }, _unbindFormResetHandler: function () {
      if (this.form.length) {
        var e = this.form.data("ui-form-reset-instances");
        e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");
      }
    }}, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function (e, i) {
      function n(e, i, n, o) {
        return t.each(s, function () {
          i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0);
        }), i;
      }
      var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"], o = i.toLowerCase(), r = {innerWidth: t.fn.innerWidth, innerHeight: t.fn.innerHeight, outerWidth: t.fn.outerWidth, outerHeight: t.fn.outerHeight};
      t.fn["inner" + i] = function (e) {
        return void 0 === e ? r["inner" + i].call(this) : this.each(function () {
          t(this).css(o, n(this, e) + "px");
        });
      }, t.fn["outer" + i] = function (e, s) {
        return "number" != typeof e ? r["outer" + i].call(this, e) : this.each(function () {
          t(this).css(o, n(this, e, true, s) + "px");
        });
      };
    }), t.fn.addBack = function (t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    }), t.ui.keyCode = {BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38}, t.ui.escapeSelector = function () {
      var t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
      return function (e) {
        return e.replace(t, "\\$1");
      };
    }(), t.fn.labels = function () {
      var e, i, n, s, o;
      return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (s = this.eq(0).parents("label"), (n = this.attr("id")) && (e = this.eq(0).parents().last(), o = e.add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(n) + "']", s = s.add(o.find(i).addBack(i))), this.pushStack(s));
    }, t.fn.scrollParent = function (e) {
      var i = this.css("position"), n = "absolute" === i, s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/, o = this.parents().filter(function () {
        var e = t(this);
        return (!n || "static" !== e.css("position")) && s.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"));
      }).eq(0);
      return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document);
    }, t.extend(t.expr[":"], {tabbable: function (e) {
      var i = t.attr(e, "tabindex"), n = null != i;
      return (!n || i >= 0) && t.ui.focusable(e, n);
    }}), t.fn.extend({uniqueId: function () {
      var t = 0;
      return function () {
        return this.each(function () {
          this.id || (this.id = "ui-id-" + ++t);
        });
      };
    }(), removeUniqueId: function () {
      return this.each(function () {
        /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
      });
    }}), t.widget("ui.accordion", {version: "1.12.1", options: {active: 0, animate: {}, classes: {"ui-accordion-header": "ui-corner-top", "ui-accordion-header-collapsed": "ui-corner-all", "ui-accordion-content": "ui-corner-bottom"}, collapsible: false, event: "click", header: "> li > :first-child, > :not(li):even", heightStyle: "auto", icons: {activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e"}, activate: null, beforeActivate: null}, hideProps: {borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide"}, showProps: {borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show"}, _create: function () {
      var e = this.options;
      this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || false !== e.active && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh();
    }, _getCreateEventData: function () {
      return {header: this.active, panel: this.active.length ? this.active.next() : t()};
    }, _createIcons: function () {
      var e, i, n = this.options.icons;
      n && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + n.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, n.header)._addClass(i, null, n.activeHeader)._addClass(this.headers, "ui-accordion-icons"));
    }, _destroyIcons: function () {
      this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove();
    }, _destroy: function () {
      var t;
      this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "");
    }, _setOption: function (t, e) {
      return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || false !== this.options.active || this._activate(0), void ("icons" === t && (this._destroyIcons(), e && this._createIcons())));
    }, _setOptionDisabled: function (t) {
      this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t);
    }, _keydown: function (e) {
      if (!e.altKey && !e.ctrlKey) {
        var i = t.ui.keyCode, n = this.headers.length, s = this.headers.index(e.target), o = false;
        switch (e.keyCode) {
          case i.RIGHT:
          case i.DOWN:
            o = this.headers[(s + 1) % n];
            break;
          case i.LEFT:
          case i.UP:
            o = this.headers[(s - 1 + n) % n];
            break;
          case i.SPACE:
          case i.ENTER:
            this._eventHandler(e);
            break;
          case i.HOME:
            o = this.headers[0];
            break;
          case i.END:
            o = this.headers[n - 1];
        }
        o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault());
      }
    }, _panelKeyDown: function (e) {
      e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus");
    }, refresh: function () {
      var e = this.options;
      this._processPanels(), false === e.active && true === e.collapsible || !this.headers.length ? (e.active = false, this.active = t()) : false === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = false, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh();
    }, _processPanels: function () {
      var t = this.headers, e = this.panels;
      this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)));
    }, _refresh: function () {
      var e, i = this.options, n = i.heightStyle, s = this.element.parent();
      this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function () {
        var e = t(this), i = e.uniqueId().attr("id"), n = e.next(), s = n.uniqueId().attr("id");
        e.attr("aria-controls", s), n.attr("aria-labelledby", i);
      }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({"aria-selected": "false", "aria-expanded": "false", tabIndex: -1}).next().attr({"aria-hidden": "true"}).hide(), this.active.length ? this.active.attr({"aria-selected": "true", "aria-expanded": "true", tabIndex: 0}).next().attr({"aria-hidden": "false"}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === n ? (e = s.height(), this.element.siblings(":visible").each(function () {
        var i = t(this), n = i.css("position");
        "absolute" !== n && "fixed" !== n && (e -= i.outerHeight(true));
      }), this.headers.each(function () {
        e -= t(this).outerHeight(true);
      }), this.headers.next().each(function () {
        t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()));
      }).css("overflow", "auto")) : "auto" === n && (e = 0, this.headers.next().each(function () {
        var i = t(this).is(":visible");
        i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide();
      }).height(e));
    }, _activate: function (e) {
      var i = this._findActive(e)[0];
      i !== this.active[0] && (i = i || this.active[0], this._eventHandler({target: i, currentTarget: i, preventDefault: t.noop}));
    }, _findActive: function (e) {
      return "number" == typeof e ? this.headers.eq(e) : t();
    }, _setupEvents: function (e) {
      var i = {keydown: "_keydown"};
      e && t.each(e.split(" "), function (t, e) {
        i[e] = "_eventHandler";
      }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {keydown: "_panelKeyDown"}), this._hoverable(this.headers), this._focusable(this.headers);
    }, _eventHandler: function (e) {
      var i, n, s = this.options, o = this.active, r = t(e.currentTarget), a = r[0] === o[0], l = a && s.collapsible, h = l ? t() : r.next(), u = {oldHeader: o, oldPanel: o.next(), newHeader: l ? t() : r, newPanel: h};
      e.preventDefault(), a && !s.collapsible || false === this._trigger("beforeActivate", e, u) || (s.active = !l && this.headers.index(r), this.active = a ? t() : r, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), s.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, s.icons.activeHeader)._addClass(i, null, s.icons.header)), a || (this._removeClass(r, "ui-accordion-header-collapsed")._addClass(r, "ui-accordion-header-active", "ui-state-active"), s.icons && (n = r.children(".ui-accordion-header-icon"), this._removeClass(n, null, s.icons.header)._addClass(n, null, s.icons.activeHeader)), this._addClass(r.next(), "ui-accordion-content-active")));
    }, _toggle: function (e) {
      var i = e.newPanel, n = this.prevShow.length ? this.prevShow : e.oldPanel;
      this.prevShow.add(this.prevHide).stop(true, true), this.prevShow = i, this.prevHide = n, this.options.animate ? this._animate(i, n, e) : (n.hide(), i.show(), this._toggleComplete(e)), n.attr({"aria-hidden": "true"}), n.prev().attr({"aria-selected": "false", "aria-expanded": "false"}), i.length && n.length ? n.prev().attr({tabIndex: -1, "aria-expanded": "false"}) : i.length && this.headers.filter(function () {
        return 0 === parseInt(t(this).attr("tabIndex"), 10);
      }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({"aria-selected": "true", "aria-expanded": "true", tabIndex: 0});
    }, _animate: function (t, e, i) {
      var n, s, o, r = this, a = 0, l = t.css("box-sizing"), h = t.length && (!e.length || t.index() < e.index()), u = this.options.animate || {}, c = h && u.down || u, d = function () {
        r._toggleComplete(i);
      };
      return "number" == typeof c && (o = c), "string" == typeof c && (s = c), s = s || c.easing || u.easing, o = o || c.duration || u.duration, e.length ? t.length ? (n = t.show().outerHeight(), e.animate(this.hideProps, {duration: o, easing: s, step: function (t, e) {
        e.now = Math.round(t);
      }}), void t.hide().animate(this.showProps, {duration: o, easing: s, complete: d, step: function (t, i) {
        i.now = Math.round(t), "height" !== i.prop ? "content-box" === l && (a += i.now) : "content" !== r.options.heightStyle && (i.now = Math.round(n - e.outerHeight() - a), a = 0);
      }})) : e.animate(this.hideProps, o, s, d) : t.animate(this.showProps, o, s, d);
    }, _toggleComplete: function (t) {
      var e = t.oldPanel, i = e.prev();
      this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t);
    }}), t.ui.safeActiveElement = function (t) {
      var e;
      try {
        e = t.activeElement;
      } catch (i) {
        e = t.body;
      }
      return e || (e = t.body), e.nodeName || (e = t.body), e;
    }, t.widget("ui.menu", {version: "1.12.1", defaultElement: "<ul>", delay: 300, options: {icons: {submenu: "ui-icon-caret-1-e"}, items: "> *", menus: "ul", position: {my: "left top", at: "right top"}, role: "menu", blur: null, focus: null, select: null}, _create: function () {
      this.activeMenu = this.element, this.mouseHandled = false, this.element.uniqueId().attr({role: this.options.role, tabIndex: 0}), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({"mousedown .ui-menu-item": function (t) {
        t.preventDefault();
      }, "click .ui-menu-item": function (e) {
        var i = t(e.target), n = t(t.ui.safeActiveElement(this.document[0]));
        !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = true), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && n.closest(".ui-menu").length && (this.element.trigger("focus", [true]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
      }, "mouseenter .ui-menu-item": function (e) {
        if (!this.previousFilter) {
          var i = t(e.target).closest(".ui-menu-item"), n = t(e.currentTarget);
          i[0] === n[0] && (this._removeClass(n.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, n));
        }
      }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (t, e) {
        var i = this.active || this.element.find(this.options.items).eq(0);
        e || this.focus(t, i);
      }, blur: function (e) {
        this._delay(function () {
          !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0])) && this.collapseAll(e);
        });
      }, keydown: "_keydown"}), this.refresh(), this._on(this.document, {click: function (t) {
        this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = false;
      }});
    }, _destroy: function () {
      var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
      this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), e.children().each(function () {
        var e = t(this);
        e.data("ui-menu-submenu-caret") && e.remove();
      });
    }, _keydown: function (e) {
      var i, n, s, o, r = true;
      switch (e.keyCode) {
        case t.ui.keyCode.PAGE_UP:
          this.previousPage(e);
          break;
        case t.ui.keyCode.PAGE_DOWN:
          this.nextPage(e);
          break;
        case t.ui.keyCode.HOME:
          this._move("first", "first", e);
          break;
        case t.ui.keyCode.END:
          this._move("last", "last", e);
          break;
        case t.ui.keyCode.UP:
          this.previous(e);
          break;
        case t.ui.keyCode.DOWN:
          this.next(e);
          break;
        case t.ui.keyCode.LEFT:
          this.collapse(e);
          break;
        case t.ui.keyCode.RIGHT:
          this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
          break;
        case t.ui.keyCode.ENTER:
        case t.ui.keyCode.SPACE:
          this._activate(e);
          break;
        case t.ui.keyCode.ESCAPE:
          this.collapse(e);
          break;
        default:
          r = false, n = this.previousFilter || "", o = false, s = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), s === n ? o = true : s = n + s, i = this._filterMenuItems(s), (i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i).length || (s = String.fromCharCode(e.keyCode), i = this._filterMenuItems(s)), i.length ? (this.focus(e, i), this.previousFilter = s, this.filterTimer = this._delay(function () {
            delete this.previousFilter;
          }, 1e3)) : delete this.previousFilter;
      }
      r && e.preventDefault();
    }, _activate: function (t) {
      this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t));
    }, refresh: function () {
      var e, i, n, s, o = this, r = this.options.icons.submenu, a = this.element.find(this.options.menus);
      this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), i = a.filter(":not(.ui-menu)").hide().attr({role: this.options.role, "aria-hidden": "true", "aria-expanded": "false"}).each(function () {
        var e = t(this), i = e.prev(), n = t("<span>").data("ui-menu-submenu-caret", true);
        o._addClass(n, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", i.attr("id"));
      }), this._addClass(i, "ui-menu", "ui-widget ui-widget-content ui-front"), (e = a.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function () {
        var e = t(this);
        o._isDivider(e) && o._addClass(e, "ui-menu-divider", "ui-widget-content");
      }), s = (n = e.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({tabIndex: -1, role: this._itemRole()}), this._addClass(n, "ui-menu-item")._addClass(s, "ui-menu-item-wrapper"), e.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur();
    }, _itemRole: function () {
      return {menu: "menuitem", listbox: "option"}[this.options.role];
    }, _setOption: function (t, e) {
      if ("icons" === t) {
        var i = this.element.find(".ui-menu-icon");
        this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu);
      }
      this._super(t, e);
    }, _setOptionDisabled: function (t) {
      this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t);
    }, focus: function (t, e) {
      var i, n, s;
      this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), n = this.active.children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), s = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
        this._close();
      }, this.delay), (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {item: e});
    }, _scrollIntoView: function (e) {
      var i, n, s, o, r, a;
      this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, s = e.offset().top - this.activeMenu.offset().top - i - n, o = this.activeMenu.scrollTop(), r = this.activeMenu.height(), a = e.outerHeight(), 0 > s ? this.activeMenu.scrollTop(o + s) : s + a > r && this.activeMenu.scrollTop(o + s - r + a));
    }, blur: function (t, e) {
      e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {item: this.active}), this.active = null);
    }, _startOpening: function (t) {
      clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
        this._close(), this._open(t);
      }, this.delay));
    }, _open: function (e) {
      var i = t.extend({of: this.active}, this.options.position);
      clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i);
    }, collapseAll: function (e, i) {
      clearTimeout(this.timer), this.timer = this._delay(function () {
        var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
        n.length || (n = this.element), this._close(n), this.blur(e), this._removeClass(n.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = n;
      }, this.delay);
    }, _close: function (t) {
      t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false");
    }, _closeOnDocumentClick: function (e) {
      return !t(e.target).closest(".ui-menu").length;
    }, _isDivider: function (t) {
      return !/[^\-\u2014\u2013\s]/.test(t.text());
    }, collapse: function (t) {
      var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
      e && e.length && (this._close(), this.focus(t, e));
    }, expand: function (t) {
      var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
      e && e.length && (this._open(e.parent()), this._delay(function () {
        this.focus(t, e);
      }));
    }, next: function (t) {
      this._move("next", "first", t);
    }, previous: function (t) {
      this._move("prev", "last", t);
    }, isFirstItem: function () {
      return this.active && !this.active.prevAll(".ui-menu-item").length;
    }, isLastItem: function () {
      return this.active && !this.active.nextAll(".ui-menu-item").length;
    }, _move: function (t, e, i) {
      var n;
      this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[e]()), this.focus(i, n);
    }, nextPage: function (e) {
      var i, n, s;
      return this.active ? void (this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
        return 0 > (i = t(this)).offset().top - n - s;
      }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e);
    }, previousPage: function (e) {
      var i, n, s;
      return this.active ? void (this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
        return (i = t(this)).offset().top - n + s > 0;
      }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e);
    }, _hasScroll: function () {
      return this.element.outerHeight() < this.element.prop("scrollHeight");
    }, select: function (e) {
      this.active = this.active || t(e.target).closest(".ui-menu-item");
      var i = {item: this.active};
      this.active.has(".ui-menu").length || this.collapseAll(e, true), this._trigger("select", e, i);
    }, _filterMenuItems: function (e) {
      var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), n = RegExp("^" + i, "i");
      return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
        return n.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()));
      });
    }}), t.widget("ui.autocomplete", {version: "1.12.1", defaultElement: "<input>", options: {appendTo: null, autoFocus: false, delay: 300, minLength: 1, position: {my: "left top", at: "left bottom", collision: "none"}, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null}, requestIndex: 0, pending: 0, _create: function () {
      var e, i, n, s = this.element[0].nodeName.toLowerCase(), o = "textarea" === s, r = "input" === s;
      this.isMultiLine = o || !r && this._isContentEditable(this.element), this.valueMethod = this.element[o || r ? "val" : "text"], this.isNewMenu = true, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {keydown: function (s) {
        if (this.element.prop("readOnly")) return e = true, n = true, void (i = true);
        e = false, n = false, i = false;
        var o = t.ui.keyCode;
        switch (s.keyCode) {
          case o.PAGE_UP:
            e = true, this._move("previousPage", s);
            break;
          case o.PAGE_DOWN:
            e = true, this._move("nextPage", s);
            break;
          case o.UP:
            e = true, this._keyEvent("previous", s);
            break;
          case o.DOWN:
            e = true, this._keyEvent("next", s);
            break;
          case o.ENTER:
            this.menu.active && (e = true, s.preventDefault(), this.menu.select(s));
            break;
          case o.TAB:
            this.menu.active && this.menu.select(s);
            break;
          case o.ESCAPE:
            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(s), s.preventDefault());
            break;
          default:
            i = true, this._searchTimeout(s);
        }
      }, keypress: function (n) {
        if (e) return e = false, void ((!this.isMultiLine || this.menu.element.is(":visible")) && n.preventDefault());
        if (!i) {
          var s = t.ui.keyCode;
          switch (n.keyCode) {
            case s.PAGE_UP:
              this._move("previousPage", n);
              break;
            case s.PAGE_DOWN:
              this._move("nextPage", n);
              break;
            case s.UP:
              this._keyEvent("previous", n);
              break;
            case s.DOWN:
              this._keyEvent("next", n);
          }
        }
      }, input: function (t) {
        return n ? (n = false, void t.preventDefault()) : void this._searchTimeout(t);
      }, focus: function () {
        this.selectedItem = null, this.previous = this._value();
      }, blur: function (t) {
        return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t));
      }}), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({role: null}).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {mousedown: function (e) {
        e.preventDefault(), this.cancelBlur = true, this._delay(function () {
          delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus");
        });
      }, menufocus: function (e, i) {
        var n, s;
        return this.isNewMenu && (this.isNewMenu = false, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function () {
          t(e.target).trigger(e.originalEvent);
        })) : (s = i.item.data("ui-autocomplete-item"), false !== this._trigger("focus", e, {item: s}) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value), void ((n = i.item.attr("aria-label") || s.value) && t.trim(n).length && (this.liveRegion.children().hide(), t("<div>").text(n).appendTo(this.liveRegion))));
      }, menuselect: function (e, i) {
        var n = i.item.data("ui-autocomplete-item"), s = this.previous;
        this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = s, this._delay(function () {
          this.previous = s, this.selectedItem = n;
        })), false !== this._trigger("select", e, {item: n}) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n;
      }}), this.liveRegion = t("<div>", {role: "status", "aria-live": "assertive", "aria-relevant": "additions"}).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {beforeunload: function () {
        this.element.removeAttr("autocomplete");
      }});
    }, _destroy: function () {
      clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove();
    }, _setOption: function (t, e) {
      this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort();
    }, _isEventTargetInWidget: function (e) {
      var i = this.menu.element[0];
      return e.target === this.element[0] || e.target === i || t.contains(i, e.target);
    }, _closeOnClickOutside: function (t) {
      this._isEventTargetInWidget(t) || this.close();
    }, _appendTo: function () {
      var e = this.options.appendTo;
      return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e;
    }, _initSource: function () {
      var e, i, n = this;
      t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, n) {
        n(t.ui.autocomplete.filter(e, i.term));
      }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, s) {
        n.xhr && n.xhr.abort(), n.xhr = t.ajax({url: i, data: e, dataType: "json", success: function (t) {
          s(t);
        }, error: function () {
          s([]);
        }});
      }) : this.source = this.options.source;
    }, _searchTimeout: function (t) {
      clearTimeout(this.searching), this.searching = this._delay(function () {
        var e = this.term === this._value(), i = this.menu.element.is(":visible"), n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
        (!e || e && !i && !n) && (this.selectedItem = null, this.search(null, t));
      }, this.options.delay);
    }, search: function (t, e) {
      return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : false !== this._trigger("search", e) ? this._search(t) : void 0;
    }, _search: function (t) {
      this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = false, this.source({term: t}, this._response());
    }, _response: function () {
      var e = ++this.requestIndex;
      return t.proxy(function (t) {
        e === this.requestIndex && this.__response(t), --this.pending || this._removeClass("ui-autocomplete-loading");
      }, this);
    }, __response: function (t) {
      t && (t = this._normalize(t)), this._trigger("response", null, {content: t}), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close();
    }, close: function (t) {
      this.cancelSearch = true, this._close(t);
    }, _close: function (t) {
      this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = true, this._trigger("close", t));
    }, _change: function (t) {
      this.previous !== this._value() && this._trigger("change", t, {item: this.selectedItem});
    }, _normalize: function (e) {
      return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
        return "string" == typeof e ? {label: e, value: e} : t.extend({}, e, {label: e.label || e.value, value: e.value || e.label});
      });
    }, _suggest: function (e) {
      var i = this.menu.element.empty();
      this._renderMenu(i, e), this.isNewMenu = true, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {mousedown: "_closeOnClickOutside"});
    }, _resizeMenu: function () {
      var t = this.menu.element;
      t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()));
    }, _renderMenu: function (e, i) {
      var n = this;
      t.each(i, function (t, i) {
        n._renderItemData(e, i);
      });
    }, _renderItemData: function (t, e) {
      return this._renderItem(t, e).data("ui-autocomplete-item", e);
    }, _renderItem: function (e, i) {
      return t("<li>").append(t("<div>").text(i.label)).appendTo(e);
    }, _move: function (t, e) {
      return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e);
    }, widget: function () {
      return this.menu.element;
    }, _value: function () {
      return this.valueMethod.apply(this.element, arguments);
    }, _keyEvent: function (t, e) {
      (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault());
    }, _isContentEditable: function (t) {
      if (!t.length) return false;
      var e = t.prop("contentEditable");
      return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e;
    }}), t.extend(t.ui.autocomplete, {escapeRegex: function (t) {
      return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    }, filter: function (e, i) {
      var n = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
      return t.grep(e, function (t) {
        return n.test(t.label || t.value || t);
      });
    }}), t.widget("ui.autocomplete", t.ui.autocomplete, {options: {messages: {noResults: "No search results.", results: function (t) {
      return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
    }}}, __response: function (e) {
      var i;
      this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion));
    }}), t.ui.autocomplete;
    var f = /ui-corner-([a-z]){2,6}/g;
    t.widget("ui.controlgroup", {version: "1.12.1", defaultElement: "<div>", options: {direction: "horizontal", disabled: null, onlyVisible: true, items: {button: "input[type=button], input[type=submit], input[type=reset], button, a", controlgroupLabel: ".ui-controlgroup-label", checkboxradio: "input[type='checkbox'], input[type='radio']", selectmenu: "select", spinner: ".ui-spinner-input"}}, _create: function () {
      this._enhance();
    }, _enhance: function () {
      this.element.attr("role", "toolbar"), this.refresh();
    }, _destroy: function () {
      this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap();
    }, _initWidgets: function () {
      var e = this, i = [];
      t.each(this.options.items, function (n, s) {
        var o, r = {};
        return s ? "controlgroupLabel" === n ? ((o = e.element.find(s)).each(function () {
          var e = t(this);
          e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>");
        }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), void (i = i.concat(o.get()))) : void (t.fn[n] && (r = e["_" + n + "Options"] ? e["_" + n + "Options"]("middle") : {classes: {}}, e.element.find(s).each(function () {
          var s = t(this), o = s[n]("instance"), a = t.widget.extend({}, r);
          if ("button" !== n || !s.parent(".ui-spinner").length) {
            o || (o = s[n]()[n]("instance")), o && (a.classes = e._resolveClassesValues(a.classes, o)), s[n](a);
            var l = s[n]("widget");
            t.data(l[0], "ui-controlgroup-data", o || s[n]("instance")), i.push(l[0]);
          }
        }))) : void 0;
      }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item");
    }, _callChildMethod: function (e) {
      this.childWidgets.each(function () {
        var i = t(this).data("ui-controlgroup-data");
        i && i[e] && i[e]();
      });
    }, _updateCornerClass: function (t, e) {
      var i = this._buildSimpleOptions(e, "label").classes.label;
      this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t, null, i);
    }, _buildSimpleOptions: function (t, e) {
      var i = "vertical" === this.options.direction, n = {classes: {}};
      return n.classes[e] = {middle: "", first: "ui-corner-" + (i ? "top" : "left"), last: "ui-corner-" + (i ? "bottom" : "right"), only: "ui-corner-all"}[t], n;
    }, _spinnerOptions: function (t) {
      var e = this._buildSimpleOptions(t, "ui-spinner");
      return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e;
    }, _buttonOptions: function (t) {
      return this._buildSimpleOptions(t, "ui-button");
    }, _checkboxradioOptions: function (t) {
      return this._buildSimpleOptions(t, "ui-checkboxradio-label");
    }, _selectmenuOptions: function (t) {
      var e = "vertical" === this.options.direction;
      return {width: !!e && "auto", classes: {middle: {"ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": ""}, first: {"ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"), "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")}, last: {"ui-selectmenu-button-open": e ? "" : "ui-corner-tr", "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")}, only: {"ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all"}}[t]};
    }, _resolveClassesValues: function (e, i) {
      var n = {};
      return t.each(e, function (s) {
        var o = i.options.classes[s] || "";
        o = t.trim(o.replace(f, "")), n[s] = (o + " " + e[s]).replace(/\s+/g, " ");
      }), n;
    }, _setOption: function (t, e) {
      return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? void this._callChildMethod(e ? "disable" : "enable") : void this.refresh();
    }, refresh: function () {
      var e, i = this;
      this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function (t, n) {
        var s = e[n]().data("ui-controlgroup-data");
        if (s && i["_" + s.widgetName + "Options"]) {
          var o = i["_" + s.widgetName + "Options"](1 === e.length ? "only" : n);
          o.classes = i._resolveClassesValues(o.classes, s), s.element[s.widgetName](o);
        } else i._updateCornerClass(e[n](), n);
      }), this._callChildMethod("refresh"));
    }}), t.widget("ui.checkboxradio", [t.ui.formResetMixin, {version: "1.12.1", options: {disabled: null, label: null, icon: true, classes: {"ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all"}}, _getCreateOptions: function () {
      var e, i, n = this, s = this._super() || {};
      return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function () {
        n.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML;
      }), this.originalLabel && (s.label = this.originalLabel), null != (e = this.element[0].disabled) && (s.disabled = e), s;
    }, _create: function () {
      var t = this.element[0].checked;
      this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({change: "_toggleClasses", focus: function () {
        this._addClass(this.label, null, "ui-state-focus ui-visual-focus");
      }, blur: function () {
        this._removeClass(this.label, null, "ui-state-focus ui-visual-focus");
      }});
    }, _readType: function () {
      var e = this.element[0].nodeName.toLowerCase();
      this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type);
    }, _enhance: function () {
      this._updateIcon(this.element[0].checked);
    }, widget: function () {
      return this.label;
    }, _getRadioGroup: function () {
      var e = this.element[0].name, i = "input[name='" + t.ui.escapeSelector(e) + "']";
      return e ? (this.form.length ? t(this.form[0].elements).filter(i) : t(i).filter(function () {
        return 0 === t(this).form().length;
      })).not(this.element) : t([]);
    }, _toggleClasses: function () {
      var e = this.element[0].checked;
      this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function () {
        var e = t(this).checkboxradio("instance");
        e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active");
      });
    }, _destroy: function () {
      this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove());
    }, _setOption: function (t, e) {
      return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), void (this.element[0].disabled = e)) : void this.refresh()) : void 0;
    }, _updateIcon: function (e) {
      var i = "ui-icon ui-icon-background ";
      this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon);
    }, _updateLabel: function () {
      var t = this.label.contents().not(this.element[0]);
      this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label);
    }, refresh: function () {
      var t = this.element[0].checked, e = this.element[0].disabled;
      this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({disabled: e});
    }}]), t.ui.checkboxradio, t.widget("ui.button", {version: "1.12.1", defaultElement: "<button>", options: {classes: {"ui-button": "ui-corner-all"}, disabled: null, icon: null, iconPosition: "beginning", label: null, showLabel: true}, _getCreateOptions: function () {
      var t, e = this._super() || {};
      return this.isInput = this.element.is("input"), null != (t = this.element[0].disabled) && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e;
    }, _create: function () {
      !this.option.showLabel & !this.options.icon && (this.options.showLabel = true), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || false), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({keyup: function (e) {
        e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"));
      }});
    }, _enhance: function () {
      this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip());
    }, _updateTooltip: function () {
      this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label);
    }, _updateIcon: function (e, i) {
      var n = "iconPosition" !== e, s = n ? this.options.iconPosition : i, o = "top" === s || "bottom" === s;
      this.icon ? n && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), n && this._addClass(this.icon, null, i), this._attachIcon(s), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(s));
    }, _destroy: function () {
      this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title");
    }, _attachIconSpace: function (t) {
      this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace);
    }, _attachIcon: function (t) {
      this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon);
    }, _setOptions: function (t) {
      var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel, i = void 0 === t.icon ? this.options.icon : t.icon;
      e || i || (t.showLabel = true), this._super(t);
    }, _setOption: function (t, e) {
      "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur());
    }, refresh: function () {
      var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
      t !== this.options.disabled && this._setOptions({disabled: t}), this._updateTooltip();
    }}), false !== t.uiBackCompat && (t.widget("ui.button", t.ui.button, {options: {text: true, icons: {primary: null, secondary: null}}, _create: function () {
      this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super();
    }, _setOption: function (t, e) {
      return "text" === t ? void this._super("showLabel", e) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), void this._superApply(arguments));
    }}), t.fn.button = function (e) {
      return function () {
        return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({icon: false}) : this.checkboxradio.apply(this, arguments));
      };
    }(t.fn.button), t.fn.buttonset = function () {
      return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {button: arguments[0].items}), this.controlgroup.apply(this, arguments));
    }), t.ui.button, t.extend(t.ui, {datepicker: {version: "1.12.1"}});
    var g;
    t.extend(n.prototype, {markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function () {
      return this.dpDiv;
    }, setDefaults: function (t) {
      return r(this._defaults, t || {}), this;
    }, _attachDatepicker: function (e, i) {
      var n, s, o;
      s = "div" === (n = e.nodeName.toLowerCase()) || "span" === n, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), (o = this._newInst(t(e), s)).settings = t.extend({}, i || {}), "input" === n ? this._connectDatepicker(e, o) : s && this._inlineDatepicker(e, o);
    }, _newInst: function (e, i) {
      return {id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"), input: e, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i, dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv};
    }, _connectDatepicker: function (e, i) {
      var n = t(e);
      i.append = t([]), i.trigger = t([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e));
    }, _attachments: function (e, i) {
      var n, s, o, r = this._get(i, "appendText"), a = this._get(i, "isRTL");
      i.append && i.append.remove(), r && (i.append = t("<span class='" + this._appendClass + "'>" + r + "</span>"), e[a ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), ("focus" === (n = this._get(i, "showOn")) || "both" === n) && e.on("focus", this._showDatepicker), ("button" === n || "both" === n) && (s = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({src: o, alt: s, title: s}) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({src: o, alt: s, title: s}) : s)), e[a ? "before" : "after"](i.trigger), i.trigger.on("click", function () {
        return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), false;
      }));
    }, _autoSize: function (t) {
      if (this._get(t, "autoSize") && !t.inline) {
        var e, i, n, s, o = new Date(2009, 11, 20), r = this._get(t, "dateFormat");
        r.match(/[DM]/) && (e = function (t) {
          for (i = 0, n = 0, s = 0; t.length > s; s++) t[s].length > i && (i = t[s].length, n = s);
          return n;
        }, o.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length);
      }
    }, _inlineDatepicker: function (e, i) {
      var n = t(e);
      n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), true), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"));
    }, _dialogDatepicker: function (e, i, n, s, o) {
      var a, l, h, u, c, d = this._dialogInst;
      return d || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, false), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), r(d.settings, s || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (l = document.documentElement.clientWidth, h = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, c = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + u, h / 2 - 150 + c]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = n, this._inDialog = true, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this;
    }, _destroyDatepicker: function (e) {
      var i, n = t(e), s = t.data(e, "datepicker");
      n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (s.append.remove(), s.trigger.remove(), n.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && n.removeClass(this.markerClassName).empty(), g === s && (g = null));
    }, _enableDatepicker: function (e) {
      var i, n, s = t(e), o = t.data(e, "datepicker");
      s.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = false, o.trigger.filter("button").each(function () {
        this.disabled = false;
      }).end().filter("img").css({opacity: "1.0", cursor: ""})) : ("div" === i || "span" === i) && ((n = s.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", false)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
        return t === e ? null : t;
      }));
    }, _disableDatepicker: function (e) {
      var i, n, s = t(e), o = t.data(e, "datepicker");
      s.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = true, o.trigger.filter("button").each(function () {
        this.disabled = true;
      }).end().filter("img").css({opacity: "0.5", cursor: "default"})) : ("div" === i || "span" === i) && ((n = s.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", true)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
        return t === e ? null : t;
      }), this._disabledInputs[this._disabledInputs.length] = e);
    }, _isDisabledDatepicker: function (t) {
      if (!t) return false;
      for (var e = 0; this._disabledInputs.length > e; e++) if (this._disabledInputs[e] === t) return true;
      return false;
    }, _getInst: function (e) {
      try {
        return t.data(e, "datepicker");
      } catch (t) {
        throw "Missing instance data for this datepicker";
      }
    }, _optionDatepicker: function (e, i, n) {
      var s, o, a, l, h = this._getInst(e);
      return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : h ? "all" === i ? t.extend({}, h.settings) : this._get(h, i) : null : (s = i || {}, "string" == typeof i && (s = {}, s[i] = n), void (h && (this._curInst === h && this._hideDatepicker(), o = this._getDateDatepicker(e, true), a = this._getMinMaxDate(h, "min"), l = this._getMinMaxDate(h, "max"), r(h.settings, s), null !== a && void 0 !== s.dateFormat && void 0 === s.minDate && (h.settings.minDate = this._formatDate(h, a)), null !== l && void 0 !== s.dateFormat && void 0 === s.maxDate && (h.settings.maxDate = this._formatDate(h, l)), "disabled" in s && (s.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), h), this._autoSize(h), this._setDate(h, o), this._updateAlternate(h), this._updateDatepicker(h))));
    }, _changeDatepicker: function (t, e, i) {
      this._optionDatepicker(t, e, i);
    }, _refreshDatepicker: function (t) {
      var e = this._getInst(t);
      e && this._updateDatepicker(e);
    }, _setDateDatepicker: function (t, e) {
      var i = this._getInst(t);
      i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i));
    }, _getDateDatepicker: function (t, e) {
      var i = this._getInst(t);
      return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null;
    }, _doKeyDown: function (e) {
      var i, n, s, o = t.datepicker._getInst(e.target), r = true, a = o.dpDiv.is(".ui-datepicker-rtl");
      if (o._keyEvent = true, t.datepicker._datepickerShowing) switch (e.keyCode) {
        case 9:
          t.datepicker._hideDatepicker(), r = false;
          break;
        case 13:
          return (s = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv))[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, s[0]), (i = t.datepicker._get(o, "onSelect")) ? (n = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [n, o])) : t.datepicker._hideDatepicker(), false;
        case 27:
          t.datepicker._hideDatepicker();
          break;
        case 33:
          t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
          break;
        case 34:
          t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
          break;
        case 35:
          (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), r = e.ctrlKey || e.metaKey;
          break;
        case 36:
          (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), r = e.ctrlKey || e.metaKey;
          break;
        case 37:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? 1 : -1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
          break;
        case 38:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), r = e.ctrlKey || e.metaKey;
          break;
        case 39:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? -1 : 1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
          break;
        case 40:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), r = e.ctrlKey || e.metaKey;
          break;
        default:
          r = false;
      } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : r = false;
      r && (e.preventDefault(), e.stopPropagation());
    }, _doKeyPress: function (e) {
      var i, n, s = t.datepicker._getInst(e.target);
      return t.datepicker._get(s, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(s, "dateFormat")), n = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1) : void 0;
    }, _doKeyUp: function (e) {
      var i = t.datepicker._getInst(e.target);
      if (i.input.val() !== i.lastVal) try {
        t.datepicker.parseDate(t.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, t.datepicker._getFormatConfig(i)) && (t.datepicker._setDateFromField(i), t.datepicker._updateAlternate(i), t.datepicker._updateDatepicker(i));
      } catch (t) {}
      return true;
    }, _showDatepicker: function (e) {
      if ("input" !== (e = e.target || e).nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
        var n, s, o, a, l, h, u;
        n = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== n && (t.datepicker._curInst.dpDiv.stop(true, true), n && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), false !== (o = (s = t.datepicker._get(n, "beforeShow")) ? s.apply(e, [e, n]) : {}) && (r(n.settings, o), n.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(n), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), a = false, t(e).parents().each(function () {
          return !(a |= "fixed" === t(this).css("position"));
        }), l = {left: t.datepicker._pos[0], top: t.datepicker._pos[1]}, t.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({position: "absolute", display: "block", top: "-1000px"}), t.datepicker._updateDatepicker(n), l = t.datepicker._checkOffset(n, l, a), n.dpDiv.css({position: t.datepicker._inDialog && t.blockUI ? "static" : a ? "fixed" : "absolute", display: "none", left: l.left + "px", top: l.top + "px"}), n.inline || (h = t.datepicker._get(n, "showAnim"), u = t.datepicker._get(n, "duration"), n.dpDiv.css("z-index", i(t(e)) + 1), t.datepicker._datepickerShowing = true, t.effects && t.effects.effect[h] ? n.dpDiv.show(h, t.datepicker._get(n, "showOptions"), u) : n.dpDiv[h || "show"](h ? u : null), t.datepicker._shouldFocusInput(n) && n.input.trigger("focus"), t.datepicker._curInst = n));
      }
    }, _updateDatepicker: function (e) {
      this.maxRows = 4, g = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
      var i, n = this._getNumberOfMonths(e), s = n[1], r = e.dpDiv.find("." + this._dayOverClass + " a");
      r.length > 0 && o.apply(r.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", 17 * s + "em"), e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function () {
        i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null;
      }, 0));
    }, _shouldFocusInput: function (t) {
      return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus");
    }, _checkOffset: function (e, i, n) {
      var s = e.dpDiv.outerWidth(), o = e.dpDiv.outerHeight(), r = e.input ? e.input.outerWidth() : 0, a = e.input ? e.input.outerHeight() : 0, l = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft()), h = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop());
      return i.left -= this._get(e, "isRTL") ? s - r : 0, i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= n && i.top === e.input.offset().top + a ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0), i.top -= Math.min(i.top, i.top + o > h && h > o ? Math.abs(o + a) : 0), i;
    }, _findPos: function (e) {
      for (var i, n = this._getInst(e), s = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[s ? "previousSibling" : "nextSibling"];
      return i = t(e).offset(), [i.left, i.top];
    }, _hideDatepicker: function (e) {
      var i, n, s, o, r = this._curInst;
      !r || e && r !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(r, "showAnim"), n = this._get(r, "duration"), s = function () {
        t.datepicker._tidyDialog(r);
      }, t.effects && (t.effects.effect[i] || t.effects[i]) ? r.dpDiv.hide(i, t.datepicker._get(r, "showOptions"), n, s) : r.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, s), i || s(), this._datepickerShowing = false, (o = this._get(r, "onClose")) && o.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({position: "absolute", left: "0", top: "-100px"}), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = false);
    }, _tidyDialog: function (t) {
      t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
    }, _checkExternalClick: function (e) {
      if (t.datepicker._curInst) {
        var i = t(e.target), n = t.datepicker._getInst(i[0]);
        (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== n) && t.datepicker._hideDatepicker();
      }
    }, _adjustDate: function (e, i, n) {
      var s = t(e), o = this._getInst(s[0]);
      this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(o, i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0), n), this._updateDatepicker(o));
    }, _gotoToday: function (e) {
      var i, n = t(e), s = this._getInst(n[0]);
      this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(n);
    }, _selectMonthYear: function (e, i, n) {
      var s = t(e), o = this._getInst(s[0]);
      o["selected" + ("M" === n ? "Month" : "Year")] = o["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(s);
    }, _selectDay: function (e, i, n, s) {
      var o, r = t(e);
      t(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (o = this._getInst(r[0]), o.selectedDay = o.currentDay = t("a", s).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = n, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)));
    }, _clearDate: function (e) {
      var i = t(e);
      this._selectDate(i, "");
    }, _selectDate: function (e, i) {
      var n, s = t(e), o = this._getInst(s[0]);
      i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), (n = this._get(o, "onSelect")) ? n.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null);
    }, _updateAlternate: function (e) {
      var i, n, s, o = this._get(e, "altField");
      o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), s = this.formatDate(i, n, this._getFormatConfig(e)), t(o).val(s));
    }, noWeekends: function (t) {
      var e = t.getDay();
      return [e > 0 && 6 > e, ""];
    }, iso8601Week: function (t) {
      var e, i = new Date(t.getTime());
      return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1;
    }, parseDate: function (e, i, n) {
      if (null == e || null == i) throw "Invalid arguments";
      if ("" == (i = "object" == typeof i ? "" + i : i + "")) return null;
      var s, o, r, a, l = 0, h = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff, u = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10), c = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort, d = (n ? n.dayNames : null) || this._defaults.dayNames, p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort, f = (n ? n.monthNames : null) || this._defaults.monthNames, g = -1, m = -1, v = -1, _ = -1, b = false, y = function (t) {
        var i = e.length > s + 1 && e.charAt(s + 1) === t;
        return i && s++, i;
      }, w = function (t) {
        var e = y(t), n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2, s = "y" === t ? n : 1, o = RegExp("^\\d{" + s + "," + n + "}"), r = i.substring(l).match(o);
        if (!r) throw "Missing number at position " + l;
        return l += r[0].length, parseInt(r[0], 10);
      }, x = function (e, n, s) {
        var o = -1, r = t.map(y(e) ? s : n, function (t, e) {
          return [[e, t]];
        }).sort(function (t, e) {
          return -(t[1].length - e[1].length);
        });
        if (t.each(r, function (t, e) {
          var n = e[1];
          return i.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (o = e[0], l += n.length, false) : void 0;
        }), -1 !== o) return o + 1;
        throw "Unknown name at position " + l;
      }, C = function () {
        if (i.charAt(l) !== e.charAt(s)) throw "Unexpected literal at position " + l;
        l++;
      };
      for (s = 0; e.length > s; s++) if (b) "'" !== e.charAt(s) || y("'") ? C() : b = false; else switch (e.charAt(s)) {
        case "d":
          v = w("d");
          break;
        case "D":
          x("D", c, d);
          break;
        case "o":
          _ = w("o");
          break;
        case "m":
          m = w("m");
          break;
        case "M":
          m = x("M", p, f);
          break;
        case "y":
          g = w("y");
          break;
        case "@":
          g = (a = new Date(w("@"))).getFullYear(), m = a.getMonth() + 1, v = a.getDate();
          break;
        case "!":
          g = (a = new Date((w("!") - this._ticksTo1970) / 1e4)).getFullYear(), m = a.getMonth() + 1, v = a.getDate();
          break;
        case "'":
          y("'") ? C() : b = true;
          break;
        default:
          C();
      }
      if (i.length > l && (r = i.substr(l), !/^\s+/.test(r))) throw "Extra/unparsed characters found in date: " + r;
      if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= g ? 0 : -100)), _ > -1) for (m = 1, v = _; !((o = this._getDaysInMonth(g, m - 1)) >= v);) m++, v -= o;
      if ((a = this._daylightSavingAdjust(new Date(g, m - 1, v))).getFullYear() !== g || a.getMonth() + 1 !== m || a.getDate() !== v) throw "Invalid date";
      return a;
    }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)), formatDate: function (t, e, i) {
      if (!e) return "";
      var n, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, o = (i ? i.dayNames : null) || this._defaults.dayNames, r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, a = (i ? i.monthNames : null) || this._defaults.monthNames, l = function (e) {
        var i = t.length > n + 1 && t.charAt(n + 1) === e;
        return i && n++, i;
      }, h = function (t, e, i) {
        var n = "" + e;
        if (l(t)) for (; i > n.length;) n = "0" + n;
        return n;
      }, u = function (t, e, i, n) {
        return l(t) ? n[e] : i[e];
      }, c = "", d = false;
      if (e) for (n = 0; t.length > n; n++) if (d) "'" !== t.charAt(n) || l("'") ? c += t.charAt(n) : d = false; else switch (t.charAt(n)) {
        case "d":
          c += h("d", e.getDate(), 2);
          break;
        case "D":
          c += u("D", e.getDay(), s, o);
          break;
        case "o":
          c += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
          break;
        case "m":
          c += h("m", e.getMonth() + 1, 2);
          break;
        case "M":
          c += u("M", e.getMonth(), r, a);
          break;
        case "y":
          c += l("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;
          break;
        case "@":
          c += e.getTime();
          break;
        case "!":
          c += 1e4 * e.getTime() + this._ticksTo1970;
          break;
        case "'":
          l("'") ? c += "'" : d = true;
          break;
        default:
          c += t.charAt(n);
      }
      return c;
    }, _possibleChars: function (t) {
      var e, i = "", n = false, s = function (i) {
        var n = t.length > e + 1 && t.charAt(e + 1) === i;
        return n && e++, n;
      };
      for (e = 0; t.length > e; e++) if (n) "'" !== t.charAt(e) || s("'") ? i += t.charAt(e) : n = false; else switch (t.charAt(e)) {
        case "d":
        case "m":
        case "y":
        case "@":
          i += "0123456789";
          break;
        case "D":
        case "M":
          return null;
        case "'":
          s("'") ? i += "'" : n = true;
          break;
        default:
          i += t.charAt(e);
      }
      return i;
    }, _get: function (t, e) {
      return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
    }, _setDateFromField: function (t, e) {
      if (t.input.val() !== t.lastVal) {
        var i = this._get(t, "dateFormat"), n = t.lastVal = t.input ? t.input.val() : null, s = this._getDefaultDate(t), o = s, r = this._getFormatConfig(t);
        try {
          o = this.parseDate(i, n, r) || s;
        } catch (t) {
          n = e ? "" : n;
        }
        t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = n ? o.getDate() : 0, t.currentMonth = n ? o.getMonth() : 0, t.currentYear = n ? o.getFullYear() : 0, this._adjustInstDate(t);
      }
    }, _getDefaultDate: function (t) {
      return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date));
    }, _determineDate: function (e, i, n) {
      var s = null == i || "" === i ? n : "string" == typeof i ? function (i) {
        try {
          return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e));
        } catch (t) {}
        for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, s = n.getFullYear(), o = n.getMonth(), r = n.getDate(), a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = a.exec(i); l;) {
          switch (l[2] || "d") {
            case "d":
            case "D":
              r += parseInt(l[1], 10);
              break;
            case "w":
            case "W":
              r += 7 * parseInt(l[1], 10);
              break;
            case "m":
            case "M":
              o += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(s, o));
              break;
            case "y":
            case "Y":
              s += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(s, o));
          }
          l = a.exec(i);
        }
        return new Date(s, o, r);
      }(i) : "number" == typeof i ? isNaN(i) ? n : function (t) {
        var e = new Date;
        return e.setDate(e.getDate() + t), e;
      }(i) : new Date(i.getTime());
      return (s = s && "Invalid Date" == "" + s ? n : s) && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s);
    }, _daylightSavingAdjust: function (t) {
      return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null;
    }, _setDate: function (t, e, i) {
      var n = !e, s = t.selectedMonth, o = t.selectedYear, r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
      t.selectedDay = t.currentDay = r.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(), t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(), s === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t));
    }, _getDate: function (t) {
      return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
    }, _attachHandlers: function (e) {
      var i = this._get(e, "stepMonths"), n = "#" + e.id.replace(/\\\\/g, "\\");
      e.dpDiv.find("[data-handler]").map(function () {
        var e = {prev: function () {
          t.datepicker._adjustDate(n, -i, "M");
        }, next: function () {
          t.datepicker._adjustDate(n, +i, "M");
        }, hide: function () {
          t.datepicker._hideDatepicker();
        }, today: function () {
          t.datepicker._gotoToday(n);
        }, selectDay: function () {
          return t.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), false;
        }, selectMonth: function () {
          return t.datepicker._selectMonthYear(n, this, "M"), false;
        }, selectYear: function () {
          return t.datepicker._selectMonthYear(n, this, "Y"), false;
        }};
        t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")]);
      });
    }, _generateHTML: function (t) {
      var e, i, n, s, o, r, a, l, h, u, c, d, p, f, g, m, v, _, b, y, w, x, C, k, D, T, I, S, P, M, A, E, H, N, O, z, L, W, F, R = new Date, j = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())), q = this._get(t, "isRTL"), B = this._get(t, "showButtonPanel"), Y = this._get(t, "hideIfNoPrevNext"), U = this._get(t, "navigationAsDateFormat"), $ = this._getNumberOfMonths(t), K = this._get(t, "showCurrentAtPos"), V = this._get(t, "stepMonths"), X = 1 !== $[0] || 1 !== $[1], G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)), Q = this._getMinMaxDate(t, "min"), J = this._getMinMaxDate(t, "max"), Z = t.drawMonth - K, tt = t.drawYear;
      if (0 > Z && (Z += 12, tt--), J) for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - $[0] * $[1] + 1, J.getDate())), e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;) 0 > --Z && (Z = 11, tt--);
      for (t.drawMonth = Z, t.drawYear = tt, i = this._get(t, "prevText"), i = U ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, Z - V, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, tt, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "e" : "w") + "'>" + i + "</span></a>" : Y ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(t, "nextText"), s = U ? this.formatDate(s, this._daylightSavingAdjust(new Date(tt, Z + V, 1)), this._getFormatConfig(t)) : s, o = this._canAdjustMonth(t, 1, tt, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "w" : "e") + "'>" + s + "</span></a>" : Y ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "w" : "e") + "'>" + s + "</span></a>", r = this._get(t, "currentText"), a = this._get(t, "gotoCurrent") && t.currentDay ? G : j, r = U ? this.formatDate(r, a, this._getFormatConfig(t)) : r, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (q ? l : "") + (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (q ? "" : l) + "</div>" : "", u = parseInt(this._get(t, "firstDay"), 10), u = isNaN(u) ? 0 : u, c = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", x = 0; $[0] > x; x++) {
        for (C = "", this.maxRows = 4, k = 0; $[1] > k; k++) {
          if (D = this._daylightSavingAdjust(new Date(tt, Z, t.selectedDay)), T = " ui-corner-all", I = "", X) {
            if (I += "<div class='ui-datepicker-group", $[1] > 1) switch (k) {
              case 0:
                I += " ui-datepicker-group-first", T = " ui-corner-" + (q ? "right" : "left");
                break;
              case $[1] - 1:
                I += " ui-datepicker-group-last", T = " ui-corner-" + (q ? "left" : "right");
                break;
              default:
                I += " ui-datepicker-group-middle", T = "";
            }
            I += "'>";
          }
          for (I += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === x ? q ? o : n : "") + (/all|right/.test(T) && 0 === x ? q ? n : o : "") + this._generateMonthYearHeader(t, Z, tt, Q, J, x > 0 || k > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", S = c ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) P = (w + u) % 7, S += "<th scope='col'" + ((w + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[P] + "'>" + p[P] + "</span></th>";
          for (I += S + "</tr></thead><tbody>", M = this._getDaysInMonth(tt, Z), tt === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, M)), A = (this._getFirstDayOfMonth(tt, Z) - u + 7) % 7, E = Math.ceil((A + M) / 7), H = X && this.maxRows > E ? this.maxRows : E, this.maxRows = H, N = this._daylightSavingAdjust(new Date(tt, Z, 1 - A)), O = 0; H > O; O++) {
            for (I += "<tr>", z = c ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(N) + "</td>" : "", w = 0; 7 > w; w++) L = m ? m.apply(t.input ? t.input[0] : null, [N]) : [true, ""], W = N.getMonth() !== Z, F = W && !_ || !L[0] || Q && Q > N || J && N > J, z += "<td class='" + ((w + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (W ? " ui-datepicker-other-month" : "") + (N.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === N.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (F ? " " + this._unselectableClass + " ui-state-disabled" : "") + (W && !v ? "" : " " + L[1] + (N.getTime() === G.getTime() ? " " + this._currentClass : "") + (N.getTime() === j.getTime() ? " ui-datepicker-today" : "")) + "'" + (W && !v || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (F ? "" : " data-handler='selectDay' data-event='click' data-month='" + N.getMonth() + "' data-year='" + N.getFullYear() + "'") + ">" + (W && !v ? "&#xa0;" : F ? "<span class='ui-state-default'>" + N.getDate() + "</span>" : "<a class='ui-state-default" + (N.getTime() === j.getTime() ? " ui-state-highlight" : "") + (N.getTime() === G.getTime() ? " ui-state-active" : "") + (W ? " ui-priority-secondary" : "") + "' href='#'>" + N.getDate() + "</a>") + "</td>", N.setDate(N.getDate() + 1), N = this._daylightSavingAdjust(N);
            I += z + "</tr>";
          }
          ++Z > 11 && (Z = 0, tt++), C += I += "</tbody></table>" + (X ? "</div>" + ($[0] > 0 && k === $[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
        }
        y += C;
      }
      return y += h, t._keyEvent = false, y;
    }, _generateMonthYearHeader: function (t, e, i, n, s, o, r, a) {
      var l, h, u, c, d, p, f, g, m = this._get(t, "changeMonth"), v = this._get(t, "changeYear"), _ = this._get(t, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", y = "";
      if (o || !m) y += "<span class='ui-datepicker-month'>" + r[e] + "</span>"; else {
        for (l = n && n.getFullYear() === i, h = s && s.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++) (!l || u >= n.getMonth()) && (!h || s.getMonth() >= u) && (y += "<option value='" + u + "'" + (u === e ? " selected='selected'" : "") + ">" + a[u] + "</option>");
        y += "</select>";
      }
      if (_ || (b += y + (!o && m && v ? "" : "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", o || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>"; else {
        for (c = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), f = (p = function (t) {
          var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
          return isNaN(e) ? d : e;
        })(c[0]), g = Math.max(f, p(c[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, g = s ? Math.min(g, s.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
        t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null;
      }
      return b += this._get(t, "yearSuffix"), _ && (b += (!o && m && v ? "" : "&#xa0;") + y), b += "</div>";
    }, _adjustInstDate: function (t, e, i) {
      var n = t.selectedYear + ("Y" === i ? e : 0), s = t.selectedMonth + ("M" === i ? e : 0), o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0), r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, o)));
      t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t);
    }, _restrictMinMax: function (t, e) {
      var i = this._getMinMaxDate(t, "min"), n = this._getMinMaxDate(t, "max"), s = i && i > e ? i : e;
      return n && s > n ? n : s;
    }, _notifyChange: function (t) {
      var e = this._get(t, "onChangeMonthYear");
      e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t]);
    }, _getNumberOfMonths: function (t) {
      var e = this._get(t, "numberOfMonths");
      return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e;
    }, _getMinMaxDate: function (t, e) {
      return this._determineDate(t, this._get(t, e + "Date"), null);
    }, _getDaysInMonth: function (t, e) {
      return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
    }, _getFirstDayOfMonth: function (t, e) {
      return new Date(t, e, 1).getDay();
    }, _canAdjustMonth: function (t, e, i, n) {
      var s = this._getNumberOfMonths(t), o = this._daylightSavingAdjust(new Date(i, n + (0 > e ? e : s[0] * s[1]), 1));
      return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o);
    }, _isInRange: function (t, e) {
      var i, n, s = this._getMinMaxDate(t, "min"), o = this._getMinMaxDate(t, "max"), r = null, a = null, l = this._get(t, "yearRange");
      return l && (i = l.split(":"), n = (new Date).getFullYear(), r = parseInt(i[0], 10), a = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += n), i[1].match(/[+\-].*/) && (a += n)), (!s || e.getTime() >= s.getTime()) && (!o || e.getTime() <= o.getTime()) && (!r || e.getFullYear() >= r) && (!a || a >= e.getFullYear());
    }, _getFormatConfig: function (t) {
      var e = this._get(t, "shortYearCutoff");
      return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {shortYearCutoff: e, dayNamesShort: this._get(t, "dayNamesShort"), dayNames: this._get(t, "dayNames"), monthNamesShort: this._get(t, "monthNamesShort"), monthNames: this._get(t, "monthNames")};
    }, _formatDate: function (t, e, i, n) {
      e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
      var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
      return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t));
    }}), t.fn.datepicker = function (e) {
      if (!this.length) return this;
      t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = true), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
      var i = Array.prototype.slice.call(arguments, 1);
      return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function () {
        "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e);
      }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i));
    }, t.datepicker = new n, t.datepicker.initialized = false, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.1", t.datepicker, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var m = false;
    t(document).on("mouseup", function () {
      m = false;
    }), t.widget("ui.mouse", {version: "1.12.1", options: {cancel: "input, textarea, button, select, option", distance: 1, delay: 0}, _mouseInit: function () {
      var e = this;
      this.element.on("mousedown." + this.widgetName, function (t) {
        return e._mouseDown(t);
      }).on("click." + this.widgetName, function (i) {
        return true === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), false) : void 0;
      }), this.started = false;
    }, _mouseDestroy: function () {
      this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
    }, _mouseDown: function (e) {
      if (!m) {
        this._mouseMoved = false, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
        var i = this, n = 1 === e.which, s = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
        return !(n && !s && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
          i.mouseDelayMet = true;
        }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = false !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), true) : (true === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
          return i._mouseMove(t);
        }, this._mouseUpDelegate = function (t) {
          return i._mouseUp(t);
        }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), m = true, true));
      }
    }, _mouseMove: function (e) {
      if (this._mouseMoved) {
        if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
        if (!e.which) if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = true; else if (!this.ignoreMissingWhich) return this._mouseUp(e);
      }
      return (e.which || e.button) && (this._mouseMoved = true), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = false !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted);
    }, _mouseUp: function (e) {
      this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = false, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", true), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = false, m = false, e.preventDefault();
    }, _mouseDistanceMet: function (t) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance;
    }, _mouseDelayMet: function () {
      return this.mouseDelayMet;
    }, _mouseStart: function () {}, _mouseDrag: function () {}, _mouseStop: function () {}, _mouseCapture: function () {
      return true;
    }}), t.ui.plugin = {add: function (e, i, n) {
      var s, o = t.ui[e].prototype;
      for (s in n) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([i, n[s]]);
    }, call: function (t, e, i, n) {
      var s, o = t.plugins[e];
      if (o && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)) for (s = 0; o.length > s; s++) t.options[o[s][0]] && o[s][1].apply(t.element, i);
    }}, t.ui.safeBlur = function (e) {
      e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur");
    }, t.widget("ui.draggable", t.ui.mouse, {version: "1.12.1", widgetEventPrefix: "drag", options: {addClasses: true, appendTo: "parent", axis: false, connectToSortable: false, containment: false, cursor: "auto", cursorAt: false, grid: false, handle: false, helper: "original", iframeFix: false, opacity: false, refreshPositions: false, revert: false, revertDuration: 500, scope: "default", scroll: true, scrollSensitivity: 20, scrollSpeed: 20, snap: false, snapMode: "both", snapTolerance: 20, stack: false, zIndex: false, drag: null, start: null, stop: null}, _create: function () {
      "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit();
    }, _setOption: function (t, e) {
      this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName());
    }, _destroy: function () {
      return (this.helper || this.element).is(".ui-draggable-dragging") ? void (this.destroyOnClear = true) : (this._removeHandleClassName(), void this._mouseDestroy());
    }, _mouseCapture: function (e) {
      var i = this.options;
      return !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e), !!this.handle && (this._blurActiveElement(e), this._blockFrames(true === i.iframeFix ? "iframe" : i.iframeFix), true));
    }, _blockFrames: function (e) {
      this.iframeBlocks = this.document.find(e).map(function () {
        var e = t(this);
        return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0];
      });
    }, _unblockFrames: function () {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
    }, _blurActiveElement: function (e) {
      var i = t.ui.safeActiveElement(this.document[0]);
      t(e.target).closest(i).length || t.ui.safeBlur(i);
    }, _mouseStart: function (e) {
      var i = this.options;
      return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(true), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () {
        return "fixed" === t(this).css("position");
      }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, false), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), false === this._trigger("start", e) ? (this._clear(), false) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, true), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), true);
    }, _refreshOffsets: function (t) {
      this.offset = {top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: false, parent: this._getParentOffset(), relative: this._getRelativeOffset()}, this.offset.click = {left: t.pageX - this.offset.left, top: t.pageY - this.offset.top};
    }, _mouseDrag: function (e, i) {
      if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, true), this.positionAbs = this._convertPositionTo("absolute"), !i) {
        var n = this._uiHash();
        if (false === this._trigger("drag", e, n)) return this._mouseUp(new t.Event("mouseup", e)), false;
        this.position = n.position;
      }
      return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), false;
    }, _mouseStop: function (e) {
      var i = this, n = false;
      return t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)), this.dropped && (n = this.dropped, this.dropped = false), "invalid" === this.options.revert && !n || "valid" === this.options.revert && n || true === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
        false !== i._trigger("stop", e) && i._clear();
      }) : false !== this._trigger("stop", e) && this._clear(), false;
    }, _mouseUp: function (e) {
      return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e);
    }, cancel: function () {
      return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {target: this.element[0]})) : this._clear(), this;
    }, _getHandle: function (e) {
      return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length;
    }, _setHandleClassName: function () {
      this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle");
    }, _removeHandleClassName: function () {
      this._removeClass(this.handleElement, "ui-draggable-handle");
    }, _createHelper: function (e) {
      var i = this.options, n = t.isFunction(i.helper), s = n ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
      return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), n && s[0] === this.element[0] && this._setPositionRelative(), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s;
    }, _setPositionRelative: function () {
      /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
    }, _adjustOffsetFromHelper: function (e) {
      "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {left: +e[0], top: +e[1] || 0}), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
    }, _isRootNode: function (t) {
      return /(html|body)/i.test(t.tagName) || t === this.document[0];
    }, _getParentOffset: function () {
      var e = this.offsetParent.offset(), i = this.document[0];
      return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {top: 0, left: 0}), {top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)};
    }, _getRelativeOffset: function () {
      if ("relative" !== this.cssPosition) return {top: 0, left: 0};
      var t = this.element.position(), e = this._isRootNode(this.scrollParent[0]);
      return {top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())};
    }, _cacheMargins: function () {
      this.margins = {left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0};
    }, _cacheHelperProportions: function () {
      this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()};
    }, _setContainment: function () {
      var e, i, n, s = this.options, o = this.document[0];
      return this.relativeContainer = null, s.containment ? "window" === s.containment ? void (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === s.containment ? void (this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : s.containment.constructor === Array ? void (this.containment = s.containment) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode), i = t(s.containment), void ((n = i[0]) && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void (this.containment = null);
    }, _convertPositionTo: function (t, e) {
      e || (e = this.position);
      var i = "absolute" === t ? 1 : -1, n = this._isRootNode(this.scrollParent[0]);
      return {top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i, left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i};
    }, _generatePosition: function (t, e) {
      var i, n, s, o, r = this.options, a = this._isRootNode(this.scrollParent[0]), l = t.pageX, h = t.pageY;
      return a && this.offset.scroll || (this.offset.scroll = {top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft()}), e && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), r.grid && (s = r.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, h = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - r.grid[1] : s + r.grid[1] : s, o = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - r.grid[0] : o + r.grid[0] : o), "y" === r.axis && (l = this.originalPageX), "x" === r.axis && (h = this.originalPageY)), {top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top), left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left)};
    }, _clear: function () {
      this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = false, this.destroyOnClear && this.destroy();
    }, _trigger: function (e, i, n) {
      return n = n || this._uiHash(), t.ui.plugin.call(this, e, [i, n, this], true), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), n.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, n);
    }, plugins: {}, _uiHash: function () {
      return {helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs};
    }}), t.ui.plugin.add("draggable", "connectToSortable", {start: function (e, i, n) {
      var s = t.extend({}, i, {item: n.element});
      n.sortables = [], t(n.options.connectToSortable).each(function () {
        var i = t(this).sortable("instance");
        i && !i.options.disabled && (n.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, s));
      });
    }, stop: function (e, i, n) {
      var s = t.extend({}, i, {item: n.element});
      n.cancelHelperRemoval = false, t.each(n.sortables, function () {
        var t = this;
        t.isOver ? (t.isOver = 0, n.cancelHelperRemoval = true, t.cancelHelperRemoval = false, t._storedCSS = {position: t.placeholder.css("position"), top: t.placeholder.css("top"), left: t.placeholder.css("left")}, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = true, t._trigger("deactivate", e, s));
      });
    }, drag: function (e, i, n) {
      t.each(n.sortables, function () {
        var s = false, o = this;
        o.positionAbs = n.positionAbs, o.helperProportions = n.helperProportions, o.offset.click = n.offset.click, o._intersectsWith(o.containerCache) && (s = true, t.each(n.sortables, function () {
          return this.positionAbs = n.positionAbs, this.helperProportions = n.helperProportions, this.offset.click = n.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (s = false), s;
        })), s ? (o.isOver || (o.isOver = 1, n._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", true), o.options._helper = o.options.helper, o.options.helper = function () {
          return i.helper[0];
        }, e.target = o.currentItem[0], o._mouseCapture(e, true), o._mouseStart(e, true, true), o.offset.click.top = n.offset.click.top, o.offset.click.left = n.offset.click.left, o.offset.parent.left -= n.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= n.offset.parent.top - o.offset.parent.top, n._trigger("toSortable", e), n.dropped = o.element, t.each(n.sortables, function () {
          this.refreshPositions();
        }), n.currentItem = n.element, o.fromOutside = n), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = true, o.options._revert = o.options.revert, o.options.revert = false, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, true), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(n._parent), n._refreshOffsets(e), i.position = n._generatePosition(e, true), n._trigger("fromSortable", e), n.dropped = false, t.each(n.sortables, function () {
          this.refreshPositions();
        }));
      });
    }}), t.ui.plugin.add("draggable", "cursor", {start: function (e, i, n) {
      var s = t("body"), o = n.options;
      s.css("cursor") && (o._cursor = s.css("cursor")), s.css("cursor", o.cursor);
    }, stop: function (e, i, n) {
      var s = n.options;
      s._cursor && t("body").css("cursor", s._cursor);
    }}), t.ui.plugin.add("draggable", "opacity", {start: function (e, i, n) {
      var s = t(i.helper), o = n.options;
      s.css("opacity") && (o._opacity = s.css("opacity")), s.css("opacity", o.opacity);
    }, stop: function (e, i, n) {
      var s = n.options;
      s._opacity && t(i.helper).css("opacity", s._opacity);
    }}), t.ui.plugin.add("draggable", "scroll", {start: function (t, e, i) {
      i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(false)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset());
    }, drag: function (e, i, n) {
      var s = n.options, o = false, r = n.scrollParentNotHidden[0], a = n.document[0];
      r !== a && "HTML" !== r.tagName ? (s.axis && "x" === s.axis || (n.overflowOffset.top + r.offsetHeight - e.pageY < s.scrollSensitivity ? r.scrollTop = o = r.scrollTop + s.scrollSpeed : e.pageY - n.overflowOffset.top < s.scrollSensitivity && (r.scrollTop = o = r.scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (n.overflowOffset.left + r.offsetWidth - e.pageX < s.scrollSensitivity ? r.scrollLeft = o = r.scrollLeft + s.scrollSpeed : e.pageX - n.overflowOffset.left < s.scrollSensitivity && (r.scrollLeft = o = r.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(a).scrollTop() < s.scrollSensitivity ? o = t(a).scrollTop(t(a).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(a).scrollTop()) < s.scrollSensitivity && (o = t(a).scrollTop(t(a).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(a).scrollLeft() < s.scrollSensitivity ? o = t(a).scrollLeft(t(a).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(a).scrollLeft()) < s.scrollSensitivity && (o = t(a).scrollLeft(t(a).scrollLeft() + s.scrollSpeed)))), false !== o && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(n, e);
    }}), t.ui.plugin.add("draggable", "snap", {start: function (e, i, n) {
      var s = n.options;
      n.snapElements = [], t(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function () {
        var e = t(this), i = e.offset();
        this !== n.element[0] && n.snapElements.push({item: this, width: e.outerWidth(), height: e.outerHeight(), top: i.top, left: i.left});
      });
    }, drag: function (e, i, n) {
      var s, o, r, a, l, h, u, c, d, p, f = n.options, g = f.snapTolerance, m = i.offset.left, v = m + n.helperProportions.width, _ = i.offset.top, b = _ + n.helperProportions.height;
      for (d = n.snapElements.length - 1; d >= 0; d--) l = n.snapElements[d].left - n.margins.left, h = l + n.snapElements[d].width, u = n.snapElements[d].top - n.margins.top, c = u + n.snapElements[d].height, l - g > v || m > h + g || u - g > b || _ > c + g || !t.contains(n.snapElements[d].item.ownerDocument, n.snapElements[d].item) ? (n.snapElements[d].snapping && n.options.snap.release && n.options.snap.release.call(n.element, e, t.extend(n._uiHash(), {snapItem: n.snapElements[d].item})), n.snapElements[d].snapping = false) : ("inner" !== f.snapMode && (s = g >= Math.abs(u - b), o = g >= Math.abs(c - _), r = g >= Math.abs(l - v), a = g >= Math.abs(h - m), s && (i.position.top = n._convertPositionTo("relative", {top: u - n.helperProportions.height, left: 0}).top), o && (i.position.top = n._convertPositionTo("relative", {top: c, left: 0}).top), r && (i.position.left = n._convertPositionTo("relative", {top: 0, left: l - n.helperProportions.width}).left), a && (i.position.left = n._convertPositionTo("relative", {top: 0, left: h}).left)), p = s || o || r || a, "outer" !== f.snapMode && (s = g >= Math.abs(u - _), o = g >= Math.abs(c - b), r = g >= Math.abs(l - m), a = g >= Math.abs(h - v), s && (i.position.top = n._convertPositionTo("relative", {top: u, left: 0}).top), o && (i.position.top = n._convertPositionTo("relative", {top: c - n.helperProportions.height, left: 0}).top), r && (i.position.left = n._convertPositionTo("relative", {top: 0, left: l}).left), a && (i.position.left = n._convertPositionTo("relative", {top: 0, left: h - n.helperProportions.width}).left)), !n.snapElements[d].snapping && (s || o || r || a || p) && n.options.snap.snap && n.options.snap.snap.call(n.element, e, t.extend(n._uiHash(), {snapItem: n.snapElements[d].item})), n.snapElements[d].snapping = s || o || r || a || p);
    }}), t.ui.plugin.add("draggable", "stack", {start: function (e, i, n) {
      var s, o = n.options, r = t.makeArray(t(o.stack)).sort(function (e, i) {
        return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0);
      });
      r.length && (s = parseInt(t(r[0]).css("zIndex"), 10) || 0, t(r).each(function (e) {
        t(this).css("zIndex", s + e);
      }), this.css("zIndex", s + r.length));
    }}), t.ui.plugin.add("draggable", "zIndex", {start: function (e, i, n) {
      var s = t(i.helper), o = n.options;
      s.css("zIndex") && (o._zIndex = s.css("zIndex")), s.css("zIndex", o.zIndex);
    }, stop: function (e, i, n) {
      var s = n.options;
      s._zIndex && t(i.helper).css("zIndex", s._zIndex);
    }}), t.ui.draggable, t.widget("ui.resizable", t.ui.mouse, {version: "1.12.1", widgetEventPrefix: "resize", options: {alsoResize: false, animate: false, animateDuration: "slow", animateEasing: "swing", aspectRatio: false, autoHide: false, classes: {"ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"}, containment: false, ghost: false, grid: false, handles: "e,s,se", helper: false, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null}, _num: function (t) {
      return parseFloat(t) || 0;
    }, _isNumber: function (t) {
      return !isNaN(parseFloat(t));
    }, _hasScroll: function (e, i) {
      if ("hidden" === t(e).css("overflow")) return false;
      var n = i && "left" === i ? "scrollLeft" : "scrollTop", s = false;
      return e[n] > 0 || (e[n] = 1, s = e[n] > 0, e[n] = 0, s);
    }, _create: function () {
      var e, i = this.options, n = this;
      this._addClass("ui-resizable"), t.extend(this, {_aspectRatio: !!i.aspectRatio, aspectRatio: i.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null}), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left")})), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = true, e = {marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom"), marginLeft: this.originalElement.css("marginLeft")}, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({position: "static", zoom: 1, display: "block"})), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function () {
        i.disabled || (n._removeClass("ui-resizable-autohide"), n._handles.show());
      }).on("mouseleave", function () {
        i.disabled || n.resizing || (n._addClass("ui-resizable-autohide"), n._handles.hide());
      }), this._mouseInit();
    }, _destroy: function () {
      this._mouseDestroy();
      var e, i = function (e) {
        t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove();
      };
      return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({position: e.css("position"), width: e.outerWidth(), height: e.outerHeight(), top: e.css("top"), left: e.css("left")}).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this;
    }, _setOption: function (t, e) {
      switch (this._super(t, e), t) {
        case "handles":
          this._removeHandles(), this._setupHandles();
      }
    }, _setupHandles: function () {
      var e, i, n, s, o, r = this.options, a = this;
      if (this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? {n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw"} : "e,s,se"), this._handles = t(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), n = this.handles.split(","), this.handles = {}, i = 0; n.length > i; i++) e = t.trim(n[i]), s = "ui-resizable-" + e, o = t("<div>"), this._addClass(o, "ui-resizable-handle " + s), o.css({zIndex: r.zIndex}), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
      this._renderAxis = function (e) {
        var i, n, s, o;
        e = e || this.element;
        for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {mousedown: a._mouseDown})), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (n = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(s, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i]);
      }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function () {
        a.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a.axis = o && o[1] ? o[1] : "se");
      }), r.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"));
    }, _removeHandles: function () {
      this._handles.remove();
    }, _mouseCapture: function (e) {
      var i, n, s = false;
      for (i in this.handles) ((n = t(this.handles[i])[0]) === e.target || t.contains(n, e.target)) && (s = true);
      return !this.options.disabled && s;
    }, _mouseStart: function (e) {
      var i, n, s, o = this.options, r = this.element;
      return this.resizing = true, this._renderProxy(), i = this._num(this.helper.css("left")), n = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, n += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {left: i, top: n}, this.size = this._helper ? {width: this.helper.width(), height: this.helper.height()} : {width: r.width(), height: r.height()}, this.originalSize = this._helper ? {width: r.outerWidth(), height: r.outerHeight()} : {width: r.width(), height: r.height()}, this.sizeDiff = {width: r.outerWidth() - r.width(), height: r.outerHeight() - r.height()}, this.originalPosition = {left: i, top: n}, this.originalMousePosition = {left: e.pageX, top: e.pageY}, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), this._addClass("ui-resizable-resizing"), this._propagate("start", e), true;
    }, _mouseDrag: function (e) {
      var i, n, s = this.originalMousePosition, o = this.axis, r = e.pageX - s.left || 0, a = e.pageY - s.top || 0, l = this._change[o];
      return this._updatePrevProperties(), !!l && (i = l.apply(this, [e, r, a]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), n = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), false);
    }, _mouseStop: function (e) {
      this.resizing = false;
      var i, n, s, o, r, a, l, h = this.options, u = this;
      return this._helper && (i = this._proportionallyResizeElements, n = i.length && /textarea/i.test(i[0].nodeName), s = n && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, o = n ? 0 : u.sizeDiff.width, r = {width: u.helper.width() - o, height: u.helper.height() - s}, a = parseFloat(u.element.css("left")) + (u.position.left - u.originalPosition.left) || null, l = parseFloat(u.element.css("top")) + (u.position.top - u.originalPosition.top) || null, h.animate || this.element.css(t.extend(r, {top: l, left: a})), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !h.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), false;
    }, _updatePrevProperties: function () {
      this.prevPosition = {top: this.position.top, left: this.position.left}, this.prevSize = {width: this.size.width, height: this.size.height};
    }, _applyChanges: function () {
      var t = {};
      return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t;
    }, _updateVirtualBoundaries: function (t) {
      var e, i, n, s, o, r = this.options;
      o = {minWidth: this._isNumber(r.minWidth) ? r.minWidth : 0, maxWidth: this._isNumber(r.maxWidth) ? r.maxWidth : Infinity, minHeight: this._isNumber(r.minHeight) ? r.minHeight : 0, maxHeight: this._isNumber(r.maxHeight) ? r.maxHeight : Infinity}, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > s && (o.maxHeight = s)), this._vBoundaries = o;
    }, _updateCache: function (t) {
      this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width);
    }, _updateRatio: function (t) {
      var e = this.position, i = this.size, n = this.axis;
      return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t;
    }, _respectSize: function (t) {
      var e = this._vBoundaries, i = this.axis, n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width, s = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height, o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width, r = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height, a = this.originalPosition.left + this.originalSize.width, l = this.originalPosition.top + this.originalSize.height, h = /sw|nw|w/.test(i), u = /nw|ne|n/.test(i);
      return o && (t.width = e.minWidth), r && (t.height = e.minHeight), n && (t.width = e.maxWidth), s && (t.height = e.maxHeight), o && h && (t.left = a - e.minWidth), n && h && (t.left = a - e.maxWidth), r && u && (t.top = l - e.minHeight), s && u && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t;
    }, _getPaddingPlusBorderDimensions: function (t) {
      for (var e = 0, i = [], n = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], s = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseFloat(n[e]) || 0, i[e] += parseFloat(s[e]) || 0;
      return {height: i[0] + i[2], width: i[1] + i[3]};
    }, _proportionallyResize: function () {
      if (this._proportionallyResizeElements.length) for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({height: i.height() - this.outerDimensions.height || 0, width: i.width() - this.outerDimensions.width || 0});
    }, _renderProxy: function () {
      var e = this.element, i = this.options;
      this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({width: this.element.outerWidth(), height: this.element.outerHeight(), position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++i.zIndex}), this.helper.appendTo("body").disableSelection()) : this.helper = this.element;
    }, _change: {e: function (t, e) {
      return {width: this.originalSize.width + e};
    }, w: function (t, e) {
      var i = this.originalSize;
      return {left: this.originalPosition.left + e, width: i.width - e};
    }, n: function (t, e, i) {
      var n = this.originalSize;
      return {top: this.originalPosition.top + i, height: n.height - i};
    }, s: function (t, e, i) {
      return {height: this.originalSize.height + i};
    }, se: function (e, i, n) {
      return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n]));
    }, sw: function (e, i, n) {
      return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n]));
    }, ne: function (e, i, n) {
      return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n]));
    }, nw: function (e, i, n) {
      return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n]));
    }}, _propagate: function (e, i) {
      t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui());
    }, plugins: {}, ui: function () {
      return {originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition};
    }}), t.ui.plugin.add("resizable", "animate", {stop: function (e) {
      var i = t(this).resizable("instance"), n = i.options, s = i._proportionallyResizeElements, o = s.length && /textarea/i.test(s[0].nodeName), r = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height, a = o ? 0 : i.sizeDiff.width, l = {width: i.size.width - a, height: i.size.height - r}, h = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null, u = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
      i.element.animate(t.extend(l, u && h ? {top: u, left: h} : {}), {duration: n.animateDuration, easing: n.animateEasing, step: function () {
        var n = {width: parseFloat(i.element.css("width")), height: parseFloat(i.element.css("height")), top: parseFloat(i.element.css("top")), left: parseFloat(i.element.css("left"))};
        s && s.length && t(s[0]).css({width: n.width, height: n.height}), i._updateCache(n), i._propagate("resize", e);
      }});
    }}), t.ui.plugin.add("resizable", "containment", {start: function () {
      var e, i, n, s, o, r, a, l = t(this).resizable("instance"), h = l.options, u = l.element, c = h.containment, d = c instanceof t ? c.get(0) : /parent/.test(c) ? u.parent().get(0) : c;
      d && (l.containerElement = t(d), /document/.test(c) || c === document ? (l.containerOffset = {left: 0, top: 0}, l.containerPosition = {left: 0, top: 0}, l.parentData = {element: t(document), left: 0, top: 0, width: t(document).width(), height: t(document).height() || document.body.parentNode.scrollHeight}) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function (t, n) {
        i[t] = l._num(e.css("padding" + n));
      }), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = {height: e.innerHeight() - i[3], width: e.innerWidth() - i[1]}, n = l.containerOffset, s = l.containerSize.height, o = l.containerSize.width, r = l._hasScroll(d, "left") ? d.scrollWidth : o, a = l._hasScroll(d) ? d.scrollHeight : s, l.parentData = {element: d, left: n.left, top: n.top, width: r, height: a}));
    }, resize: function (e) {
      var i, n, s, o, r = t(this).resizable("instance"), a = r.options, l = r.containerOffset, h = r.position, u = r._aspectRatio || e.shiftKey, c = {top: 0, left: 0}, d = r.containerElement, p = true;
      d[0] !== document && /static/.test(d.css("position")) && (c = l), h.left < (r._helper ? l.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - l.left : r.position.left - c.left), u && (r.size.height = r.size.width / r.aspectRatio, p = false), r.position.left = a.helper ? l.left : 0), h.top < (r._helper ? l.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - l.top : r.position.top), u && (r.size.width = r.size.height * r.aspectRatio, p = false), r.position.top = r._helper ? l.top : 0), s = r.containerElement.get(0) === r.element.parent().get(0), o = /relative|absolute/.test(r.containerElement.css("position")), s && o ? (r.offset.left = r.parentData.left + r.position.left, r.offset.top = r.parentData.top + r.position.top) : (r.offset.left = r.element.offset().left, r.offset.top = r.element.offset().top), i = Math.abs(r.sizeDiff.width + (r._helper ? r.offset.left - c.left : r.offset.left - l.left)), n = Math.abs(r.sizeDiff.height + (r._helper ? r.offset.top - c.top : r.offset.top - l.top)), i + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - i, u && (r.size.height = r.size.width / r.aspectRatio, p = false)), n + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - n, u && (r.size.width = r.size.height * r.aspectRatio, p = false)), p || (r.position.left = r.prevPosition.left, r.position.top = r.prevPosition.top, r.size.width = r.prevSize.width, r.size.height = r.prevSize.height);
    }, stop: function () {
      var e = t(this).resizable("instance"), i = e.options, n = e.containerOffset, s = e.containerPosition, o = e.containerElement, r = t(e.helper), a = r.offset(), l = r.outerWidth() - e.sizeDiff.width, h = r.outerHeight() - e.sizeDiff.height;
      e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({left: a.left - s.left - n.left, width: l, height: h}), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({left: a.left - s.left - n.left, width: l, height: h});
    }}), t.ui.plugin.add("resizable", "alsoResize", {start: function () {
      var e = t(this).resizable("instance").options;
      t(e.alsoResize).each(function () {
        var e = t(this);
        e.data("ui-resizable-alsoresize", {width: parseFloat(e.width()), height: parseFloat(e.height()), left: parseFloat(e.css("left")), top: parseFloat(e.css("top"))});
      });
    }, resize: function (e, i) {
      var n = t(this).resizable("instance"), s = n.options, o = n.originalSize, r = n.originalPosition, a = {height: n.size.height - o.height || 0, width: n.size.width - o.width || 0, top: n.position.top - r.top || 0, left: n.position.left - r.left || 0};
      t(s.alsoResize).each(function () {
        var e = t(this), n = t(this).data("ui-resizable-alsoresize"), s = {}, o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
        t.each(o, function (t, e) {
          var i = (n[e] || 0) + (a[e] || 0);
          i && i >= 0 && (s[e] = i || null);
        }), e.css(s);
      });
    }, stop: function () {
      t(this).removeData("ui-resizable-alsoresize");
    }}), t.ui.plugin.add("resizable", "ghost", {start: function () {
      var e = t(this).resizable("instance"), i = e.size;
      e.ghost = e.originalElement.clone(), e.ghost.css({opacity: .25, display: "block", position: "relative", height: i.height, width: i.width, margin: 0, left: 0, top: 0}), e._addClass(e.ghost, "ui-resizable-ghost"), false !== t.uiBackCompat && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper);
    }, resize: function () {
      var e = t(this).resizable("instance");
      e.ghost && e.ghost.css({position: "relative", height: e.size.height, width: e.size.width});
    }, stop: function () {
      var e = t(this).resizable("instance");
      e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0));
    }}), t.ui.plugin.add("resizable", "grid", {resize: function () {
      var e, i = t(this).resizable("instance"), n = i.options, s = i.size, o = i.originalSize, r = i.originalPosition, a = i.axis, l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid, h = l[0] || 1, u = l[1] || 1, c = Math.round((s.width - o.width) / h) * h, d = Math.round((s.height - o.height) / u) * u, p = o.width + c, f = o.height + d, g = n.maxWidth && p > n.maxWidth, m = n.maxHeight && f > n.maxHeight, v = n.minWidth && n.minWidth > p, _ = n.minHeight && n.minHeight > f;
      n.grid = l, v && (p += h), _ && (f += u), g && (p -= h), m && (f -= u), /^(se|s|e)$/.test(a) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.top = r.top - d) : /^(sw)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.left = r.left - c) : ((0 >= f - u || 0 >= p - h) && (e = i._getPaddingPlusBorderDimensions(this)), f - u > 0 ? (i.size.height = f, i.position.top = r.top - d) : (f = u - e.height, i.size.height = f, i.position.top = r.top + o.height - f), p - h > 0 ? (i.size.width = p, i.position.left = r.left - c) : (p = h - e.width, i.size.width = p, i.position.left = r.left + o.width - p));
    }}), t.ui.resizable, t.widget("ui.dialog", {version: "1.12.1", options: {appendTo: "body", autoOpen: true, buttons: [], classes: {"ui-dialog": "ui-corner-all", "ui-dialog-titlebar": "ui-corner-all"}, closeOnEscape: true, closeText: "Close", draggable: true, hide: null, height: "auto", maxHeight: null, maxWidth: null, minHeight: 150, minWidth: 150, modal: false, position: {my: "center", at: "center", of: window, collision: "fit", using: function (e) {
      var i = t(this).css(e).offset().top;
      0 > i && t(this).css("top", e.top - i);
    }}, resizable: true, show: null, title: null, width: 300, beforeClose: null, close: null, drag: null, dragStart: null, dragStop: null, focus: null, open: null, resize: null, resizeStart: null, resizeStop: null}, sizeRelatedOptions: {buttons: true, height: true, maxHeight: true, maxWidth: true, minHeight: true, minWidth: true, width: true}, resizableRelatedOptions: {maxHeight: true, maxWidth: true, minHeight: true, minWidth: true}, _create: function () {
      this.originalCss = {display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height}, this.originalPosition = {parent: this.element.parent(), index: this.element.parent().children().index(this.element)}, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = false), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = false, this._trackFocus();
    }, _init: function () {
      this.options.autoOpen && this.open();
    }, _appendTo: function () {
      var e = this.options.appendTo;
      return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0);
    }, _destroy: function () {
      var t, e = this.originalPosition;
      this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element);
    }, widget: function () {
      return this.uiDialog;
    }, disable: t.noop, enable: t.noop, close: function (e) {
      var i = this;
      this._isOpen && false !== this._trigger("beforeClose", e) && (this._isOpen = false, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function () {
        i._trigger("close", e);
      }));
    }, isOpen: function () {
      return this._isOpen;
    }, moveToTop: function () {
      this._moveToTop();
    }, _moveToTop: function (e, i) {
      var n = false, s = this.uiDialog.siblings(".ui-front:visible").map(function () {
        return +t(this).css("z-index");
      }).get(), o = Math.max.apply(null, s);
      return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), n = true), n && !i && this._trigger("focus", e), n;
    }, open: function () {
      var e = this;
      return this._isOpen ? void (this._moveToTop() && this._focusTabbable()) : (this._isOpen = true, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, true), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
        e._focusTabbable(), e._trigger("focus");
      }), this._makeFocusTarget(), void this._trigger("open"));
    }, _focusTabbable: function () {
      var t = this._focusedElement;
      t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus");
    }, _keepFocus: function (e) {
      function i() {
        var e = t.ui.safeActiveElement(this.document[0]);
        this.uiDialog[0] === e || t.contains(this.uiDialog[0], e) || this._focusTabbable();
      }
      e.preventDefault(), i.call(this), this._delay(i);
    }, _createWrapper: function () {
      this.uiDialog = t("<div>").hide().attr({tabIndex: -1, role: "dialog"}).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {keydown: function (e) {
        if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
        if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
          var i = this.uiDialog.find(":tabbable"), n = i.filter(":first"), s = i.filter(":last");
          e.target !== s[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== n[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function () {
            s.trigger("focus");
          }), e.preventDefault()) : (this._delay(function () {
            n.trigger("focus");
          }), e.preventDefault());
        }
      }, mousedown: function (t) {
        this._moveToTop(t) && this._focusTabbable();
      }}), this.element.find("[aria-describedby]").length || this.uiDialog.attr({"aria-describedby": this.element.uniqueId().attr("id")});
    }, _createTitlebar: function () {
      var e;
      this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {mousedown: function (e) {
        t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus");
      }}), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({label: t("<a>").text(this.options.closeText).html(), icon: "ui-icon-closethick", showLabel: false}).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {click: function (t) {
        t.preventDefault(), this.close(t);
      }}), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({"aria-labelledby": e.attr("id")});
    }, _title: function (t) {
      this.options.title ? t.text(this.options.title) : t.html("&#160;");
    }, _createButtonPane: function () {
      this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons();
    }, _createButtons: function () {
      var e = this, i = this.options.buttons;
      return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (t.each(i, function (i, n) {
        var s, o;
        n = t.isFunction(n) ? {click: n, text: i} : n, n = t.extend({type: "button"}, n), s = n.click, o = {icon: n.icon, iconPosition: n.iconPosition, showLabel: n.showLabel, icons: n.icons, text: n.text}, delete n.click, delete n.icon, delete n.iconPosition, delete n.showLabel, delete n.icons, "boolean" == typeof n.text && delete n.text, t("<button></button>", n).button(o).appendTo(e.uiButtonSet).on("click", function () {
          s.apply(e.element[0], arguments);
        });
      }), this._addClass(this.uiDialog, "ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog));
    }, _makeDraggable: function () {
      function e(t) {
        return {position: t.position, offset: t.offset};
      }
      var i = this, n = this.options;
      this.uiDialog.draggable({cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function (n, s) {
        i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", n, e(s));
      }, drag: function (t, n) {
        i._trigger("drag", t, e(n));
      }, stop: function (s, o) {
        var r = o.offset.left - i.document.scrollLeft(), a = o.offset.top - i.document.scrollTop();
        n.position = {my: "left top", at: "left" + (r >= 0 ? "+" : "") + r + " top" + (a >= 0 ? "+" : "") + a, of: i.window}, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", s, e(o));
      }});
    }, _makeResizable: function () {
      function e(t) {
        return {originalPosition: t.originalPosition, originalSize: t.originalSize, position: t.position, size: t.size};
      }
      var i = this, n = this.options, s = n.resizable, o = this.uiDialog.css("position"), r = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
      this.uiDialog.resizable({cancel: ".ui-dialog-content", containment: "document", alsoResize: this.element, maxWidth: n.maxWidth, maxHeight: n.maxHeight, minWidth: n.minWidth, minHeight: this._minHeight(), handles: r, start: function (n, s) {
        i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", n, e(s));
      }, resize: function (t, n) {
        i._trigger("resize", t, e(n));
      }, stop: function (s, o) {
        var r = i.uiDialog.offset(), a = r.left - i.document.scrollLeft(), l = r.top - i.document.scrollTop();
        n.height = i.uiDialog.height(), n.width = i.uiDialog.width(), n.position = {my: "left top", at: "left" + (a >= 0 ? "+" : "") + a + " top" + (l >= 0 ? "+" : "") + l, of: i.window}, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", s, e(o));
      }}).css("position", o);
    }, _trackFocus: function () {
      this._on(this.widget(), {focusin: function (e) {
        this._makeFocusTarget(), this._focusedElement = t(e.target);
      }});
    }, _makeFocusTarget: function () {
      this._untrackInstance(), this._trackingInstances().unshift(this);
    }, _untrackInstance: function () {
      var e = this._trackingInstances(), i = t.inArray(this, e);
      -1 !== i && e.splice(i, 1);
    }, _trackingInstances: function () {
      var t = this.document.data("ui-dialog-instances");
      return t || (t = [], this.document.data("ui-dialog-instances", t)), t;
    }, _minHeight: function () {
      var t = this.options;
      return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height);
    }, _position: function () {
      var t = this.uiDialog.is(":visible");
      t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide();
    }, _setOptions: function (e) {
      var i = this, n = false, s = {};
      t.each(e, function (t, e) {
        i._setOption(t, e), t in i.sizeRelatedOptions && (n = true), t in i.resizableRelatedOptions && (s[t] = e);
      }), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s);
    }, _setOption: function (e, i) {
      var n, s, o = this.uiDialog;
      "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({label: t("<a>").text("" + this.options.closeText).html()}), "draggable" === e && ((n = o.is(":data(ui-draggable)")) && !i && o.draggable("destroy"), !n && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && ((s = o.is(":data(ui-resizable)")) && !i && o.resizable("destroy"), s && "string" == typeof i && o.resizable("option", "handles", i), s || false === i || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
    }, _size: function () {
      var t, e, i, n = this.options;
      this.element.show().css({width: "auto", minHeight: 0, maxHeight: "none", height: 0}), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({height: "auto", width: n.width}).outerHeight(), e = Math.max(0, n.minHeight - t), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", "auto" === n.height ? this.element.css({minHeight: e, maxHeight: i, height: "auto"}) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
    }, _blockFrames: function () {
      this.iframeBlocks = this.document.find("iframe").map(function () {
        var e = t(this);
        return t("<div>").css({position: "absolute", width: e.outerWidth(), height: e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0];
      });
    }, _unblockFrames: function () {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
    }, _allowInteraction: function (e) {
      return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length;
    }, _createOverlay: function () {
      if (this.options.modal) {
        var e = true;
        this._delay(function () {
          e = false;
        }), this.document.data("ui-dialog-overlays") || this._on(this.document, {focusin: function (t) {
          e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable());
        }}), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {mousedown: "_keepFocus"}), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1);
      }
    }, _destroyOverlay: function () {
      if (this.options.modal && this.overlay) {
        var t = this.document.data("ui-dialog-overlays") - 1;
        t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null;
      }
    }}), false !== t.uiBackCompat && t.widget("ui.dialog", t.ui.dialog, {options: {dialogClass: ""}, _createWrapper: function () {
      this._super(), this.uiDialog.addClass(this.options.dialogClass);
    }, _setOption: function (t, e) {
      "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments);
    }}), t.ui.dialog, t.widget("ui.droppable", {version: "1.12.1", widgetEventPrefix: "drop", options: {accept: "*", addClasses: true, greedy: false, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null}, _create: function () {
      var e, i = this.options, n = i.accept;
      this.isover = false, this.isout = true, this.accept = t.isFunction(n) ? n : function (t) {
        return t.is(n);
      }, this.proportions = function () {
        return arguments.length ? void (e = arguments[0]) : e || (e = {width: this.element[0].offsetWidth, height: this.element[0].offsetHeight});
      }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable");
    }, _addToManager: function (e) {
      t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this);
    }, _splice: function (t) {
      for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1);
    }, _destroy: function () {
      var e = t.ui.ddmanager.droppables[this.options.scope];
      this._splice(e);
    }, _setOption: function (e, i) {
      if ("accept" === e) this.accept = t.isFunction(i) ? i : function (t) {
        return t.is(i);
      }; else if ("scope" === e) {
        var n = t.ui.ddmanager.droppables[this.options.scope];
        this._splice(n), this._addToManager(i);
      }
      this._super(e, i);
    }, _activate: function (e) {
      var i = t.ui.ddmanager.current;
      this._addActiveClass(), i && this._trigger("activate", e, this.ui(i));
    }, _deactivate: function (e) {
      var i = t.ui.ddmanager.current;
      this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i));
    }, _over: function (e) {
      var i = t.ui.ddmanager.current;
      i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)));
    }, _out: function (e) {
      var i = t.ui.ddmanager.current;
      i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)));
    }, _drop: function (e, i) {
      var n = i || t.ui.ddmanager.current, s = false;
      return !(!n || (n.currentItem || n.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
        var i = t(this).droppable("instance");
        return i.options.greedy && !i.options.disabled && i.options.scope === n.options.scope && i.accept.call(i.element[0], n.currentItem || n.element) && v(n, t.extend(i, {offset: i.element.offset()}), i.options.tolerance, e) ? (s = true, false) : void 0;
      }), !s && (!!this.accept.call(this.element[0], n.currentItem || n.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(n)), this.element)));
    }, ui: function (t) {
      return {draggable: t.currentItem || t.element, helper: t.helper, position: t.position, offset: t.positionAbs};
    }, _addHoverClass: function () {
      this._addClass("ui-droppable-hover");
    }, _removeHoverClass: function () {
      this._removeClass("ui-droppable-hover");
    }, _addActiveClass: function () {
      this._addClass("ui-droppable-active");
    }, _removeActiveClass: function () {
      this._removeClass("ui-droppable-active");
    }});
    var v = t.ui.intersect = function () {
      return function (e, i, n, s) {
        if (!i.offset) return false;
        var o = (e.positionAbs || e.position.absolute).left + e.margins.left, r = (e.positionAbs || e.position.absolute).top + e.margins.top, a = o + e.helperProportions.width, l = r + e.helperProportions.height, h = i.offset.left, u = i.offset.top, c = h + i.proportions().width, d = u + i.proportions().height;
        switch (n) {
          case "fit":
            return o >= h && c >= a && r >= u && d >= l;
          case "intersect":
            return o + e.helperProportions.width / 2 > h && c > a - e.helperProportions.width / 2 && r + e.helperProportions.height / 2 > u && d > l - e.helperProportions.height / 2;
          case "pointer":
            return s.pageY >= u && u + i.proportions().height > s.pageY && (s.pageX >= h && h + i.proportions().width > s.pageX);
          case "touch":
            return (r >= u && d >= r || l >= u && d >= l || u > r && l > d) && (o >= h && c >= o || a >= h && c >= a || h > o && a > c);
          default:
            return false;
        }
      };
    }();
    t.ui.ddmanager = {current: null, droppables: {default: []}, prepareOffsets: function (e, i) {
      var n, s, o = t.ui.ddmanager.droppables[e.options.scope] || [], r = i ? i.type : null, a = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
      t: for (n = 0; o.length > n; n++) if (!(o[n].options.disabled || e && !o[n].accept.call(o[n].element[0], e.currentItem || e.element))) {
        for (s = 0; a.length > s; s++) if (a[s] === o[n].element[0]) {
          o[n].proportions().height = 0;
          continue t;
        }
        o[n].visible = "none" !== o[n].element.css("display"), o[n].visible && ("mousedown" === r && o[n]._activate.call(o[n], i), o[n].offset = o[n].element.offset(), o[n].proportions({width: o[n].element[0].offsetWidth, height: o[n].element[0].offsetHeight}));
      }
    }, drop: function (e, i) {
      var n = false;
      return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function () {
        this.options && (!this.options.disabled && this.visible && v(e, this, this.options.tolerance, i) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = true, this.isover = false, this._deactivate.call(this, i)));
      }), n;
    }, dragStart: function (e, i) {
      e.element.parentsUntil("body").on("scroll.droppable", function () {
        e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
      });
    }, drag: function (e, i) {
      e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
        if (!this.options.disabled && !this.greedyChild && this.visible) {
          var n, s, o, r = v(e, this, this.options.tolerance, i), a = !r && this.isover ? "isout" : r && !this.isover ? "isover" : null;
          a && (this.options.greedy && (s = this.options.scope, (o = this.element.parents(":data(ui-droppable)").filter(function () {
            return t(this).droppable("instance").options.scope === s;
          })).length && (n = t(o[0]).droppable("instance"), n.greedyChild = "isover" === a)), n && "isover" === a && (n.isover = false, n.isout = true, n._out.call(n, i)), this[a] = true, this["isout" === a ? "isover" : "isout"] = false, this["isover" === a ? "_over" : "_out"].call(this, i), n && "isout" === a && (n.isout = false, n.isover = true, n._over.call(n, i)));
        }
      });
    }, dragStop: function (e, i) {
      e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
    }}, false !== t.uiBackCompat && t.widget("ui.droppable", t.ui.droppable, {options: {hoverClass: false, activeClass: false}, _addActiveClass: function () {
      this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass);
    }, _removeActiveClass: function () {
      this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass);
    }, _addHoverClass: function () {
      this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass);
    }, _removeHoverClass: function () {
      this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass);
    }}), t.ui.droppable, t.widget("ui.progressbar", {version: "1.12.1", options: {classes: {"ui-progressbar": "ui-corner-all", "ui-progressbar-value": "ui-corner-left", "ui-progressbar-complete": "ui-corner-right"}, max: 100, value: 0, change: null, complete: null}, min: 0, _create: function () {
      this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({role: "progressbar", "aria-valuemin": this.min}), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue();
    }, _destroy: function () {
      this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove();
    }, value: function (t) {
      return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue());
    }, _constrainedValue: function (t) {
      return void 0 === t && (t = this.options.value), this.indeterminate = false === t, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t));
    }, _setOptions: function (t) {
      var e = t.value;
      delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue();
    }, _setOption: function (t, e) {
      "max" === t && (e = Math.max(this.min, e)), this._super(t, e);
    }, _setOptionDisabled: function (t) {
      this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t);
    }, _percentage: function () {
      return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
    }, _refreshValue: function () {
      var e = this.options.value, i = this._percentage();
      this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({"aria-valuemax": this.options.max, "aria-valuenow": e}), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete");
    }}), t.widget("ui.selectable", t.ui.mouse, {version: "1.12.1", options: {appendTo: "body", autoRefresh: true, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null}, _create: function () {
      var e = this;
      this._addClass("ui-selectable"), this.dragged = false, this.refresh = function () {
        e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function () {
          var i = t(this), n = i.offset(), s = {left: n.left - e.elementPos.left, top: n.top - e.elementPos.top};
          t.data(this, "selectable-item", {element: this, $element: i, left: s.left, top: s.top, right: s.left + i.outerWidth(), bottom: s.top + i.outerHeight(), startselected: false, selected: i.hasClass("ui-selected"), selecting: i.hasClass("ui-selecting"), unselecting: i.hasClass("ui-unselecting")});
        });
      }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper");
    }, _destroy: function () {
      this.selectees.removeData("selectable-item"), this._mouseDestroy();
    }, _mouseStart: function (e) {
      var i = this, n = this.options;
      this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(n.filter, this.element[0]), this._trigger("start", e), t(n.appendTo).append(this.helper), this.helper.css({left: e.pageX, top: e.pageY, width: 0, height: 0}), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
        var n = t.data(this, "selectable-item");
        n.startselected = true, e.metaKey || e.ctrlKey || (i._removeClass(n.$element, "ui-selected"), n.selected = false, i._addClass(n.$element, "ui-unselecting"), n.unselecting = true, i._trigger("unselecting", e, {unselecting: n.element}));
      }), t(e.target).parents().addBack().each(function () {
        var n, s = t.data(this, "selectable-item");
        return s ? (n = !e.metaKey && !e.ctrlKey || !s.$element.hasClass("ui-selected"), i._removeClass(s.$element, n ? "ui-unselecting" : "ui-selected")._addClass(s.$element, n ? "ui-selecting" : "ui-unselecting"), s.unselecting = !n, s.selecting = n, s.selected = n, n ? i._trigger("selecting", e, {selecting: s.element}) : i._trigger("unselecting", e, {unselecting: s.element}), false) : void 0;
      }));
    }, _mouseDrag: function (e) {
      if (this.dragged = true, !this.options.disabled) {
        var i, n = this, s = this.options, o = this.opos[0], r = this.opos[1], a = e.pageX, l = e.pageY;
        return o > a && (i = a, a = o, o = i), r > l && (i = l, l = r, r = i), this.helper.css({left: o, top: r, width: a - o, height: l - r}), this.selectees.each(function () {
          var i = t.data(this, "selectable-item"), h = false, u = {};
          i && i.element !== n.element[0] && (u.left = i.left + n.elementPos.left, u.right = i.right + n.elementPos.left, u.top = i.top + n.elementPos.top, u.bottom = i.bottom + n.elementPos.top, "touch" === s.tolerance ? h = !(u.left > a || o > u.right || u.top > l || r > u.bottom) : "fit" === s.tolerance && (h = u.left > o && a > u.right && u.top > r && l > u.bottom), h ? (i.selected && (n._removeClass(i.$element, "ui-selected"), i.selected = false), i.unselecting && (n._removeClass(i.$element, "ui-unselecting"), i.unselecting = false), i.selecting || (n._addClass(i.$element, "ui-selecting"), i.selecting = true, n._trigger("selecting", e, {selecting: i.element}))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (n._removeClass(i.$element, "ui-selecting"), i.selecting = false, n._addClass(i.$element, "ui-selected"), i.selected = true) : (n._removeClass(i.$element, "ui-selecting"), i.selecting = false, i.startselected && (n._addClass(i.$element, "ui-unselecting"), i.unselecting = true), n._trigger("unselecting", e, {unselecting: i.element}))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (n._removeClass(i.$element, "ui-selected"), i.selected = false, n._addClass(i.$element, "ui-unselecting"), i.unselecting = true, n._trigger("unselecting", e, {unselecting: i.element})))));
        }), false;
      }
    }, _mouseStop: function (e) {
      var i = this;
      return this.dragged = false, t(".ui-unselecting", this.element[0]).each(function () {
        var n = t.data(this, "selectable-item");
        i._removeClass(n.$element, "ui-unselecting"), n.unselecting = false, n.startselected = false, i._trigger("unselected", e, {unselected: n.element});
      }), t(".ui-selecting", this.element[0]).each(function () {
        var n = t.data(this, "selectable-item");
        i._removeClass(n.$element, "ui-selecting")._addClass(n.$element, "ui-selected"), n.selecting = false, n.selected = true, n.startselected = true, i._trigger("selected", e, {selected: n.element});
      }), this._trigger("stop", e), this.helper.remove(), false;
    }}), t.widget("ui.selectmenu", [t.ui.formResetMixin, {version: "1.12.1", defaultElement: "<select>", options: {appendTo: null, classes: {"ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all"}, disabled: null, icons: {button: "ui-icon-triangle-1-s"}, position: {my: "left top", at: "left bottom", collision: "none"}, width: false, change: null, close: null, focus: null, open: null, select: null}, _create: function () {
      var e = this.element.uniqueId().attr("id");
      this.ids = {element: e, button: e + "-button", menu: e + "-menu"}, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = false, this.menuItems = t();
    }, _drawButton: function () {
      var e, i = this, n = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
      this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {click: function (t) {
        this.button.focus(), t.preventDefault();
      }}), this.element.hide(), this.button = t("<span>", {tabindex: this.options.disabled ? -1 : 0, id: this.ids.button, role: "combobox", "aria-expanded": "false", "aria-autocomplete": "list", "aria-owns": this.ids.menu, "aria-haspopup": "true", title: this.element.attr("title")}).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(n).appendTo(this.button), false !== this.options.width && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () {
        i._rendered || i._refreshMenu();
      });
    }, _drawMenu: function () {
      var e = this;
      this.menu = t("<ul>", {"aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu}), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({classes: {"ui-menu": "ui-corner-bottom"}, role: "listbox", select: function (t, i) {
        t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t);
      }, focus: function (t, i) {
        var n = i.item.data("ui-selectmenu-item");
        null != e.focusIndex && n.index !== e.focusIndex && (e._trigger("focus", t, {item: n}), e.isOpen || e._select(n, t)), e.focusIndex = n.index, e.button.attr("aria-activedescendant", e.menuItems.eq(n.index).attr("id"));
      }}).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () {
        return false;
      }, this.menuInstance._isDivider = function () {
        return false;
      };
    }, refresh: function () {
      this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton();
    }, _refreshMenu: function () {
      var t, e = this.element.find("option");
      this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = true, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")));
    }, open: function (t) {
      this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = true, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)));
    }, _position: function () {
      this.menuWrap.position(t.extend({of: this.button}, this.options.position));
    }, close: function (t) {
      this.isOpen && (this.isOpen = false, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t));
    }, widget: function () {
      return this.button;
    }, menuWidget: function () {
      return this.menu;
    }, _renderButtonItem: function (e) {
      var i = t("<span>");
      return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i;
    }, _renderMenu: function (e, i) {
      var n = this, s = "";
      t.each(i, function (i, o) {
        var r;
        o.optgroup !== s && (r = t("<li>", {text: o.optgroup}), n._addClass(r, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), r.appendTo(e), s = o.optgroup), n._renderItemData(e, o);
      });
    }, _renderItemData: function (t, e) {
      return this._renderItem(t, e).data("ui-selectmenu-item", e);
    }, _renderItem: function (e, i) {
      var n = t("<li>"), s = t("<div>", {title: i.element.attr("title")});
      return i.disabled && this._addClass(n, null, "ui-state-disabled"), this._setText(s, i.label), n.append(s).appendTo(e);
    }, _setText: function (t, e) {
      e ? t.text(e) : t.html("&#160;");
    }, _move: function (t, e) {
      var i, n, s = ".ui-menu-item";
      this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), s += ":not(.ui-state-disabled)"), (n = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1) : i[t + "All"](s).eq(0)).length && this.menuInstance.focus(e, n);
    }, _getSelectedItem: function () {
      return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
    }, _toggle: function (t) {
      this[this.isOpen ? "close" : "open"](t);
    }, _setSelection: function () {
      var t;
      this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus());
    }, _documentClick: {mousedown: function (e) {
      this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e));
    }}, _buttonEvents: {mousedown: function () {
      var t;
      window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : this.range = document.selection.createRange();
    }, click: function (t) {
      this._setSelection(), this._toggle(t);
    }, keydown: function (e) {
      var i = true;
      switch (e.keyCode) {
        case t.ui.keyCode.TAB:
        case t.ui.keyCode.ESCAPE:
          this.close(e), i = false;
          break;
        case t.ui.keyCode.ENTER:
          this.isOpen && this._selectFocusedItem(e);
          break;
        case t.ui.keyCode.UP:
          e.altKey ? this._toggle(e) : this._move("prev", e);
          break;
        case t.ui.keyCode.DOWN:
          e.altKey ? this._toggle(e) : this._move("next", e);
          break;
        case t.ui.keyCode.SPACE:
          this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
          break;
        case t.ui.keyCode.LEFT:
          this._move("prev", e);
          break;
        case t.ui.keyCode.RIGHT:
          this._move("next", e);
          break;
        case t.ui.keyCode.HOME:
        case t.ui.keyCode.PAGE_UP:
          this._move("first", e);
          break;
        case t.ui.keyCode.END:
        case t.ui.keyCode.PAGE_DOWN:
          this._move("last", e);
          break;
        default:
          this.menu.trigger(e), i = false;
      }
      i && e.preventDefault();
    }}, _selectFocusedItem: function (t) {
      var e = this.menuItems.eq(this.focusIndex).parent("li");
      e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t);
    }, _select: function (t, e) {
      var i = this.element[0].selectedIndex;
      this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {item: t}), t.index !== i && this._trigger("change", e, {item: t}), this.close(e);
    }, _setAria: function (t) {
      var e = this.menuItems.eq(t.index).attr("id");
      this.button.attr({"aria-labelledby": e, "aria-activedescendant": e}), this.menu.attr("aria-activedescendant", e);
    }, _setOption: function (t, e) {
      if ("icons" === t) {
        var i = this.button.find("span.ui-icon");
        this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button);
      }
      this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton();
    }, _setOptionDisabled: function (t) {
      this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0);
    }, _appendTo: function () {
      var e = this.options.appendTo;
      return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e;
    }, _toggleAttr: function () {
      this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen);
    }, _resizeButton: function () {
      var t = this.options.width;
      return false === t ? void this.button.css("width", "") : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), void this.button.outerWidth(t));
    }, _resizeMenu: function () {
      this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
    }, _getCreateOptions: function () {
      var t = this._super();
      return t.disabled = this.element.prop("disabled"), t;
    }, _parseOptions: function (e) {
      var i = this, n = [];
      e.each(function (e, s) {
        n.push(i._parseOption(t(s), e));
      }), this.items = n;
    }, _parseOption: function (t, e) {
      var i = t.parent("optgroup");
      return {element: t, index: e, value: t.val(), label: t.text(), optgroup: i.attr("label") || "", disabled: i.prop("disabled") || t.prop("disabled")};
    }, _destroy: function () {
      this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element);
    }}]), t.widget("ui.slider", t.ui.mouse, {version: "1.12.1", widgetEventPrefix: "slide", options: {animate: false, classes: {"ui-slider": "ui-corner-all", "ui-slider-handle": "ui-corner-all", "ui-slider-range": "ui-corner-all ui-widget-header"}, distance: 0, max: 100, min: 0, orientation: "horizontal", range: false, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null}, numPages: 5, _create: function () {
      this._keySliding = false, this._mouseSliding = false, this._animateOff = true, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = false;
    }, _refresh: function () {
      this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
    }, _createHandles: function () {
      var e, i, n = this.options, s = this.element.find(".ui-slider-handle"), o = [];
      for (i = n.values && n.values.length || 1, s.length > i && (s.slice(i).remove(), s = s.slice(0, i)), e = s.length; i > e; e++) o.push("<span tabindex='0'></span>");
      this.handles = s.add(t(o.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function (e) {
        t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0);
      });
    }, _createRange: function () {
      var e = this.options;
      e.range ? (true === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({left: "", bottom: ""})) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null);
    }, _setupEvents: function () {
      this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles);
    }, _destroy: function () {
      this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
    }, _mouseCapture: function (e) {
      var i, n, s, o, r, a, l, h = this, u = this.options;
      return !u.disabled && (this.elementSize = {width: this.element.outerWidth(), height: this.element.outerHeight()}, this.elementOffset = this.element.offset(), i = {x: e.pageX, y: e.pageY}, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
        var i = Math.abs(n - h.values(e));
        (s > i || s === i && (e === h._lastChangedValue || h.values(e) === u.min)) && (s = i, o = t(this), r = e);
      }), false !== this._start(e, r) && (this._mouseSliding = true, this._handleIndex = r, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), a = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {left: 0, top: 0} : {left: e.pageX - a.left - o.width() / 2, top: e.pageY - a.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)}, this.handles.hasClass("ui-state-hover") || this._slide(e, r, n), this._animateOff = true, true));
    }, _mouseStart: function () {
      return true;
    }, _mouseDrag: function (t) {
      var e = {x: t.pageX, y: t.pageY}, i = this._normValueFromMouse(e);
      return this._slide(t, this._handleIndex, i), false;
    }, _mouseStop: function (t) {
      return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = false, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = false, false;
    }, _detectOrientation: function () {
      this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
    }, _normValueFromMouse: function (t) {
      var e, i, n, s, o;
      return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (n = i / e) > 1 && (n = 1), 0 > n && (n = 0), "vertical" === this.orientation && (n = 1 - n), s = this._valueMax() - this._valueMin(), o = this._valueMin() + n * s, this._trimAlignValue(o);
    }, _uiHash: function (t, e, i) {
      var n = {handle: this.handles[t], handleIndex: t, value: void 0 !== e ? e : this.value()};
      return this._hasMultipleValues() && (n.value = void 0 !== e ? e : this.values(t), n.values = i || this.values()), n;
    }, _hasMultipleValues: function () {
      return this.options.values && this.options.values.length;
    }, _start: function (t, e) {
      return this._trigger("start", t, this._uiHash(e));
    }, _slide: function (t, e, i) {
      var n, s = this.value(), o = this.values();
      this._hasMultipleValues() && (n = this.values(e ? 0 : 1), s = this.values(e), 2 === this.options.values.length && true === this.options.range && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), o[e] = i), i !== s && false !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i));
    }, _stop: function (t, e) {
      this._trigger("stop", t, this._uiHash(e));
    }, _change: function (t, e) {
      this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)));
    }, value: function (t) {
      return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value();
    }, values: function (e, i) {
      var n, s, o;
      if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
      if (!arguments.length) return this._values();
      if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
      for (n = this.options.values, s = arguments[0], o = 0; n.length > o; o += 1) n[o] = this._trimAlignValue(s[o]), this._change(null, o);
      this._refreshValue();
    }, _setOption: function (e, i) {
      var n, s = 0;
      switch ("range" === e && true === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (s = this.options.values.length), this._super(e, i), e) {
        case "orientation":
          this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
          break;
        case "value":
          this._animateOff = true, this._refreshValue(), this._change(null, 0), this._animateOff = false;
          break;
        case "values":
          for (this._animateOff = true, this._refreshValue(), n = s - 1; n >= 0; n--) this._change(null, n);
          this._animateOff = false;
          break;
        case "step":
        case "min":
        case "max":
          this._animateOff = true, this._calculateNewMax(), this._refreshValue(), this._animateOff = false;
          break;
        case "range":
          this._animateOff = true, this._refresh(), this._animateOff = false;
      }
    }, _setOptionDisabled: function (t) {
      this._super(t), this._toggleClass(null, "ui-state-disabled", !!t);
    }, _value: function () {
      var t = this.options.value;
      return t = this._trimAlignValue(t);
    }, _values: function (t) {
      var e, i, n;
      if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
      if (this._hasMultipleValues()) {
        for (i = this.options.values.slice(), n = 0; i.length > n; n += 1) i[n] = this._trimAlignValue(i[n]);
        return i;
      }
      return [];
    }, _trimAlignValue: function (t) {
      if (this._valueMin() >= t) return this._valueMin();
      if (t >= this._valueMax()) return this._valueMax();
      var e = this.options.step > 0 ? this.options.step : 1, i = (t - this._valueMin()) % e, n = t - i;
      return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e), parseFloat(n.toFixed(5));
    }, _calculateNewMax: function () {
      var t = this.options.max, e = this._valueMin(), i = this.options.step;
      (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()));
    }, _precision: function () {
      var t = this._precisionOf(this.options.step);
      return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t;
    }, _precisionOf: function (t) {
      var e = "" + t, i = e.indexOf(".");
      return -1 === i ? 0 : e.length - i - 1;
    }, _valueMin: function () {
      return this.options.min;
    }, _valueMax: function () {
      return this.max;
    }, _refreshRange: function (t) {
      "vertical" === t && this.range.css({width: "", left: ""}), "horizontal" === t && this.range.css({height: "", bottom: ""});
    }, _refreshValue: function () {
      var e, i, n, s, o, r = this.options.range, a = this.options, l = this, h = !this._animateOff && a.animate, u = {};
      this._hasMultipleValues() ? this.handles.each(function (n) {
        i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, u["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](u, a.animate), true === l.options.range && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({left: i + "%"}, a.animate), 1 === n && l.range[h ? "animate" : "css"]({width: i - e + "%"}, {queue: false, duration: a.animate})) : (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({bottom: i + "%"}, a.animate), 1 === n && l.range[h ? "animate" : "css"]({height: i - e + "%"}, {queue: false, duration: a.animate}))), e = i;
      }) : (n = this.value(), s = this._valueMin(), o = this._valueMax(), i = o !== s ? (n - s) / (o - s) * 100 : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](u, a.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({width: i + "%"}, a.animate), "max" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({width: 100 - i + "%"}, a.animate), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({height: i + "%"}, a.animate), "max" === r && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({height: 100 - i + "%"}, a.animate));
    }, _handleEvents: {keydown: function (e) {
      var i, n, s, o = t(e.target).data("ui-slider-handle-index");
      switch (e.keyCode) {
        case t.ui.keyCode.HOME:
        case t.ui.keyCode.END:
        case t.ui.keyCode.PAGE_UP:
        case t.ui.keyCode.PAGE_DOWN:
        case t.ui.keyCode.UP:
        case t.ui.keyCode.RIGHT:
        case t.ui.keyCode.DOWN:
        case t.ui.keyCode.LEFT:
          if (e.preventDefault(), !this._keySliding && (this._keySliding = true, this._addClass(t(e.target), null, "ui-state-active"), false === this._start(e, o))) return;
      }
      switch (s = this.options.step, i = n = this._hasMultipleValues() ? this.values(o) : this.value(), e.keyCode) {
        case t.ui.keyCode.HOME:
          n = this._valueMin();
          break;
        case t.ui.keyCode.END:
          n = this._valueMax();
          break;
        case t.ui.keyCode.PAGE_UP:
          n = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
          break;
        case t.ui.keyCode.PAGE_DOWN:
          n = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
          break;
        case t.ui.keyCode.UP:
        case t.ui.keyCode.RIGHT:
          if (i === this._valueMax()) return;
          n = this._trimAlignValue(i + s);
          break;
        case t.ui.keyCode.DOWN:
        case t.ui.keyCode.LEFT:
          if (i === this._valueMin()) return;
          n = this._trimAlignValue(i - s);
      }
      this._slide(e, o, n);
    }, keyup: function (e) {
      var i = t(e.target).data("ui-slider-handle-index");
      this._keySliding && (this._keySliding = false, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"));
    }}}), t.widget("ui.sortable", t.ui.mouse, {version: "1.12.1", widgetEventPrefix: "sort", ready: false, options: {appendTo: "parent", axis: false, connectWith: false, containment: false, cursor: "auto", cursorAt: false, dropOnEmpty: true, forcePlaceholderSize: false, forceHelperSize: false, grid: false, handle: false, helper: "original", items: "> *", opacity: false, placeholder: false, revert: false, scroll: true, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null}, _isOverAxis: function (t, e, i) {
      return t >= e && e + i > t;
    }, _isFloating: function (t) {
      return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"));
    }, _create: function () {
      this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = true;
    }, _setOption: function (t, e) {
      this._super(t, e), "handle" === t && this._setHandleClassName();
    }, _setHandleClassName: function () {
      var e = this;
      this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function () {
        e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle");
      });
    }, _destroy: function () {
      this._mouseDestroy();
      for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
      return this;
    }, _mouseCapture: function (e, i) {
      var n = null, s = false, o = this;
      return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), t(e.target).parents().each(function () {
        return t.data(this, o.widgetName + "-item") === o ? (n = t(this), false) : void 0;
      }), t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)), !!n && (!(this.options.handle && !i && (t(this.options.handle, n).find("*").addBack().each(function () {
        this === e.target && (s = true);
      }), !s)) && (this.currentItem = n, this._removeCurrentsFromItems(), true))));
    }, _mouseStart: function (e, i, n) {
      var s, o, r = this.options;
      if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left}, t.extend(this.offset, {click: {left: e.pageX - this.offset.left, top: e.pageY - this.offset.top}, parent: this._getParentOffset(), relative: this._getRelativeOffset()}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), this.domPosition = {prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0]}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), r.containment && this._setContainment(), r.cursor && "auto" !== r.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", r.cursor), this.storedStylesheet = t("<style>*{ cursor: " + r.cursor + " !important; }</style>").appendTo(o)), r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", r.opacity)), r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", r.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n) for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", e, this._uiHash(this));
      return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = true, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), true;
    }, _mouseDrag: function (e) {
      var i, n, s, o, r = this.options, a = false;
      for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + r.scrollSpeed : e.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - r.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + r.scrollSpeed : e.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - r.scrollSpeed)) : (e.pageY - this.document.scrollTop() < r.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - r.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < r.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + r.scrollSpeed)), e.pageX - this.document.scrollLeft() < r.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - r.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < r.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + r.scrollSpeed))), false !== a && t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--) if (n = this.items[i], s = n.item[0], (o = this._intersectsWithPointer(n)) && n.instance === this.currentContainer && s !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== s && !t.contains(this.placeholder[0], s) && ("semi-dynamic" !== this.options.type || !t.contains(this.element[0], s))) {
        if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
        this._rearrange(e, n), this._trigger("change", e, this._uiHash());
        break;
      }
      return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, false;
    }, _mouseStop: function (e, i) {
      if (e) {
        if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
          var n = this, s = this.placeholder.offset(), o = this.options.axis, r = {};
          o && "x" !== o || (r.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (r.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = true, t(this.helper).animate(r, parseInt(this.options.revert, 10) || 500, function () {
            n._clear(e);
          });
        } else this._clear(e, i);
        return false;
      }
    }, cancel: function () {
      if (this.dragging) {
        this._mouseUp(new t.Event("mouseup", {target: null})), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
        for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0);
      }
      return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {helper: null, dragging: false, reverting: false, _noFinalSort: null}), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this;
    }, serialize: function (e) {
      var i = this._getItemsAsjQuery(e && e.connected), n = [];
      return e = e || {}, t(i).each(function () {
        var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
        i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]));
      }), !n.length && e.key && n.push(e.key + "="), n.join("&");
    }, toArray: function (e) {
      var i = this._getItemsAsjQuery(e && e.connected), n = [];
      return e = e || {}, i.each(function () {
        n.push(t(e.item || this).attr(e.attribute || "id") || "");
      }), n;
    }, _intersectsWith: function (t) {
      var e = this.positionAbs.left, i = e + this.helperProportions.width, n = this.positionAbs.top, s = n + this.helperProportions.height, o = t.left, r = o + t.width, a = t.top, l = a + t.height, h = this.offset.click.top, u = this.offset.click.left, c = "x" === this.options.axis || n + h > a && l > n + h, d = "y" === this.options.axis || e + u > o && r > e + u, p = c && d;
      return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && r > i - this.helperProportions.width / 2 && n + this.helperProportions.height / 2 > a && l > s - this.helperProportions.height / 2;
    }, _intersectsWithPointer: function (t) {
      var e, i, n = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height), s = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
      return !!(n && s) && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1));
    }, _intersectsWithSides: function (t) {
      var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height), i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width), n = this._getDragVerticalDirection(), s = this._getDragHorizontalDirection();
      return this.floating && s ? "right" === s && i || "left" === s && !i : n && ("down" === n && e || "up" === n && !e);
    }, _getDragVerticalDirection: function () {
      var t = this.positionAbs.top - this.lastPositionAbs.top;
      return 0 !== t && (t > 0 ? "down" : "up");
    }, _getDragHorizontalDirection: function () {
      var t = this.positionAbs.left - this.lastPositionAbs.left;
      return 0 !== t && (t > 0 ? "right" : "left");
    }, refresh: function (t) {
      return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this;
    }, _connectWith: function () {
      var t = this.options;
      return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith;
    }, _getItemsAsjQuery: function (e) {
      var i, n, s, o, r = [], a = [], l = this._connectWith();
      if (l && e) for (i = l.length - 1; i >= 0; i--) for (s = t(l[i], this.document[0]), n = s.length - 1; n >= 0; n--) (o = t.data(s[n], this.widgetFullName)) && o !== this && !o.options.disabled && a.push([t.isFunction(o.options.items) ? o.options.items.call(o.element) : t(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
      for (a.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {options: this.options, item: this.currentItem}) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = a.length - 1; i >= 0; i--) a[i][0].each(function () {
        r.push(this);
      });
      return t(r);
    }, _removeCurrentsFromItems: function () {
      var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
      this.items = t.grep(this.items, function (t) {
        for (var i = 0; e.length > i; i++) if (e[i] === t.item[0]) return false;
        return true;
      });
    }, _refreshItems: function (e) {
      this.items = [], this.containers = [this];
      var i, n, s, o, r, a, l, h, u = this.items, c = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {item: this.currentItem}) : t(this.options.items, this.element), this]], d = this._connectWith();
      if (d && this.ready) for (i = d.length - 1; i >= 0; i--) for (s = t(d[i], this.document[0]), n = s.length - 1; n >= 0; n--) (o = t.data(s[n], this.widgetFullName)) && o !== this && !o.options.disabled && (c.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {item: this.currentItem}) : t(o.options.items, o.element), o]), this.containers.push(o));
      for (i = c.length - 1; i >= 0; i--) for (r = c[i][1], a = c[i][0], n = 0, h = a.length; h > n; n++) (l = t(a[n])).data(this.widgetName + "-item", r), u.push({item: l, instance: r, width: 0, height: 0, left: 0, top: 0});
    }, refreshPositions: function (e) {
      this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
      var i, n, s, o;
      for (i = this.items.length - 1; i >= 0; i--) (n = this.items[i]).instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, e || (n.width = s.outerWidth(), n.height = s.outerHeight()), o = s.offset(), n.left = o.left, n.top = o.top);
      if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
      return this;
    }, _createPlaceholder: function (e) {
      var i, n = (e = e || this).options;
      n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {element: function () {
        var n = e.currentItem[0].nodeName.toLowerCase(), s = t("<" + n + ">", e.document[0]);
        return e._addClass(s, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(s, "ui-sortable-helper"), "tbody" === n ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(s)) : "tr" === n ? e._createTrPlaceholder(e.currentItem, s) : "img" === n && s.attr("src", e.currentItem.attr("src")), i || s.css("visibility", "hidden"), s;
      }, update: function (t, s) {
        (!i || n.forcePlaceholderSize) && (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)));
      }}), e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), n.placeholder.update(e, e.placeholder);
    }, _createTrPlaceholder: function (e, i) {
      var n = this;
      e.children().each(function () {
        t("<td>&#160;</td>", n.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i);
      });
    }, _contactContainers: function (e) {
      var i, n, s, o, r, a, l, h, u, c, d = null, p = null;
      for (i = this.containers.length - 1; i >= 0; i--) if (!t.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) {
        if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
        d = this.containers[i], p = i;
      } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
      if (d) if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1); else {
        for (s = 1e4, o = null, r = (u = d.floating || this._isFloating(this.currentItem)) ? "left" : "top", a = u ? "width" : "height", c = u ? "pageX" : "pageY", n = this.items.length - 1; n >= 0; n--) t.contains(this.containers[p].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (l = this.items[n].item.offset()[r], h = false, e[c] - l > this.items[n][a] / 2 && (h = true), s > Math.abs(e[c] - l) && (s = Math.abs(e[c] - l), o = this.items[n], this.direction = h ? "up" : "down"));
        if (!o && !this.options.dropOnEmpty) return;
        if (this.currentContainer === this.containers[p]) return void (this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
        o ? this._rearrange(e, o, null, true) : this._rearrange(e, null, this.containers[p].element, true), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1;
      }
    }, _createHelper: function (e) {
      var i = this.options, n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
      return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = {width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left")}), (!n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), (!n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), n;
    }, _adjustOffsetFromHelper: function (e) {
      "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {left: +e[0], top: +e[1] || 0}), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
    }, _getParentOffset: function () {
      this.offsetParent = this.helper.offsetParent();
      var e = this.offsetParent.offset();
      return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {top: 0, left: 0}), {top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)};
    }, _getRelativeOffset: function () {
      if ("relative" === this.cssPosition) {
        var t = this.currentItem.position();
        return {top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()};
      }
      return {top: 0, left: 0};
    }, _cacheMargins: function () {
      this.margins = {left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0};
    }, _cacheHelperProportions: function () {
      this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()};
    }, _setContainment: function () {
      var e, i, n, s = this.options;
      "parent" === s.containment && (s.containment = this.helper[0].parentNode), ("document" === s.containment || "window" === s.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === s.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0], i = t(s.containment).offset(), n = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]);
    }, _convertPositionTo: function (e, i) {
      i || (i = this.position);
      var n = "absolute" === e ? 1 : -1, s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, o = /(html|body)/i.test(s[0].tagName);
      return {top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n, left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n};
    }, _generatePosition: function (e) {
      var i, n, s = this.options, o = e.pageX, r = e.pageY, a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, l = /(html|body)/i.test(a[0].tagName);
      return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), s.grid && (i = this.originalPageY + Math.round((r - this.originalPageY) / s.grid[1]) * s.grid[1], r = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i, n = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0], o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)), {top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()), left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())};
    }, _rearrange: function (t, e, i, n) {
      i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
      var s = this.counter;
      this._delay(function () {
        s === this.counter && this.refreshPositions(!n);
      });
    }, _clear: function (t, e) {
      function i(t, e, i) {
        return function (n) {
          i._trigger(t, n, e._uiHash(e));
        };
      }
      this.reverting = false;
      var n, s = [];
      if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
        for (n in this._storedCSS) ("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
        this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper");
      } else this.currentItem.show();
      for (this.fromOutside && !e && s.push(function (t) {
        this._trigger("receive", t, this._uiHash(this.fromOutside));
      }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function (t) {
        this._trigger("update", t, this._uiHash());
      }), this !== this.currentContainer && (e || (s.push(function (t) {
        this._trigger("remove", t, this._uiHash());
      }), s.push(function (t) {
        return function (e) {
          t._trigger("receive", e, this._uiHash(this));
        };
      }.call(this, this.currentContainer)), s.push(function (t) {
        return function (e) {
          t._trigger("update", e, this._uiHash(this));
        };
      }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) e || s.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
      if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = false, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
        for (n = 0; s.length > n; n++) s[n].call(this, t);
        this._trigger("stop", t, this._uiHash());
      }
      return this.fromOutside = false, !this.cancelHelperRemoval;
    }, _trigger: function () {
      false === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel();
    }, _uiHash: function (e) {
      var i = e || this;
      return {helper: i.helper, placeholder: i.placeholder || t([]), position: i.position, originalPosition: i.originalPosition, offset: i.positionAbs, item: i.currentItem, sender: e ? e.element : null};
    }}), t.widget("ui.spinner", {version: "1.12.1", defaultElement: "<input>", widgetEventPrefix: "spin", options: {classes: {"ui-spinner": "ui-corner-all", "ui-spinner-down": "ui-corner-br", "ui-spinner-up": "ui-corner-tr"}, culture: null, icons: {down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n"}, incremental: true, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null}, _create: function () {
      this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), true), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {beforeunload: function () {
        this.element.removeAttr("autocomplete");
      }});
    }, _getCreateOptions: function () {
      var e = this._super(), i = this.element;
      return t.each(["min", "max", "step"], function (t, n) {
        var s = i.attr(n);
        null != s && s.length && (e[n] = s);
      }), e;
    }, _events: {keydown: function (t) {
      this._start(t) && this._keydown(t) && t.preventDefault();
    }, keyup: "_stop", focus: function () {
      this.previous = this.element.val();
    }, blur: function (t) {
      return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void (this.previous !== this.element.val() && this._trigger("change", t)));
    }, mousewheel: function (t, e) {
      if (e) {
        if (!this.spinning && !this._start(t)) return false;
        this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
          this.spinning && this._stop(t);
        }, 100), t.preventDefault();
      }
    }, "mousedown .ui-spinner-button": function (e) {
      function i() {
        this.element[0] === t.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), this.previous = n, this._delay(function () {
          this.previous = n;
        }));
      }
      var n;
      n = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = true, this._delay(function () {
        delete this.cancelBlur, i.call(this);
      }), false !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e);
    }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (e) {
      return t(e.currentTarget).hasClass("ui-state-active") ? false !== this._start(e) && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0;
    }, "mouseleave .ui-spinner-button": "_stop"}, _enhance: function () {
      this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>");
    }, _draw: function () {
      this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", true).button({classes: {"ui-button": ""}}), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({icon: this.options.icons.up, showLabel: false}), this.buttons.last().button({icon: this.options.icons.down, showLabel: false}), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height());
    }, _keydown: function (e) {
      var i = this.options, n = t.ui.keyCode;
      switch (e.keyCode) {
        case n.UP:
          return this._repeat(null, 1, e), true;
        case n.DOWN:
          return this._repeat(null, -1, e), true;
        case n.PAGE_UP:
          return this._repeat(null, i.page, e), true;
        case n.PAGE_DOWN:
          return this._repeat(null, -i.page, e), true;
      }
      return false;
    }, _start: function (t) {
      return !(!this.spinning && false === this._trigger("start", t)) && (this.counter || (this.counter = 1), this.spinning = true, true);
    }, _repeat: function (t, e, i) {
      t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
        this._repeat(40, e, i);
      }, t), this._spin(e * this.options.step, i);
    }, _spin: function (t, e) {
      var i = this.value() || 0;
      this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && false === this._trigger("spin", e, {value: i}) || (this._value(i), this.counter++);
    }, _increment: function (e) {
      var i = this.options.incremental;
      return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1;
    }, _precision: function () {
      var t = this._precisionOf(this.options.step);
      return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t;
    }, _precisionOf: function (t) {
      var e = "" + t, i = e.indexOf(".");
      return -1 === i ? 0 : e.length - i - 1;
    }, _adjustValue: function (t) {
      var e, i, n = this.options;
      return e = null !== n.min ? n.min : 0, i = t - e, i = Math.round(i / n.step) * n.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== n.max && t > n.max ? n.max : null !== n.min && n.min > t ? n.min : t;
    }, _stop: function (t) {
      this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = false, this._trigger("stop", t));
    }, _setOption: function (t, e) {
      var i, n, s;
      return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i))) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (n = this.buttons.first().find(".ui-icon"), this._removeClass(n, null, this.options.icons.up), this._addClass(n, null, e.up), s = this.buttons.last().find(".ui-icon"), this._removeClass(s, null, this.options.icons.down), this._addClass(s, null, e.down)), void this._super(t, e));
    }, _setOptionDisabled: function (t) {
      this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable");
    }, _setOptions: a(function (t) {
      this._super(t);
    }), _parse: function (t) {
      return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t;
    }, _format: function (t) {
      return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t;
    }, _refresh: function () {
      this.element.attr({"aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val())});
    }, isValid: function () {
      var t = this.value();
      return null !== t && t === this._adjustValue(t);
    }, _value: function (t, e) {
      var i;
      "" !== t && null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i)), this.element.val(t), this._refresh();
    }, _destroy: function () {
      this.element.prop("disabled", false).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element);
    }, stepUp: a(function (t) {
      this._stepUp(t);
    }), _stepUp: function (t) {
      this._start() && (this._spin((t || 1) * this.options.step), this._stop());
    }, stepDown: a(function (t) {
      this._stepDown(t);
    }), _stepDown: function (t) {
      this._start() && (this._spin((t || 1) * -this.options.step), this._stop());
    }, pageUp: a(function (t) {
      this._stepUp((t || 1) * this.options.page);
    }), pageDown: a(function (t) {
      this._stepDown((t || 1) * this.options.page);
    }), value: function (t) {
      return arguments.length ? void a(this._value).call(this, t) : this._parse(this.element.val());
    }, widget: function () {
      return this.uiSpinner;
    }}), false !== t.uiBackCompat && t.widget("ui.spinner", t.ui.spinner, {_enhance: function () {
      this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
    }, _uiSpinnerHtml: function () {
      return "<span>";
    }, _buttonHtml: function () {
      return "<a></a><a></a>";
    }}), t.ui.spinner, t.widget("ui.tabs", {version: "1.12.1", delay: 300, options: {active: null, classes: {"ui-tabs": "ui-corner-all", "ui-tabs-nav": "ui-corner-all", "ui-tabs-panel": "ui-corner-bottom", "ui-tabs-tab": "ui-corner-top"}, collapsible: false, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null}, _isLocal: function () {
      var t = /#.*$/;
      return function (e) {
        var i, n;
        i = e.href.replace(t, ""), n = location.href.replace(t, "");
        try {
          i = decodeURIComponent(i);
        } catch (t) {}
        try {
          n = decodeURIComponent(n);
        } catch (t) {}
        return e.hash.length > 1 && i === n;
      };
    }(), _create: function () {
      var e = this, i = this.options;
      this.running = false, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
        return e.tabs.index(t);
      }))).sort()), this.active = false !== this.options.active && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active);
    }, _initialActive: function () {
      var e = this.options.active, i = this.options.collapsible, n = location.hash.substring(1);
      return null === e && (n && this.tabs.each(function (i, s) {
        return t(s).attr("aria-controls") === n ? (e = i, false) : void 0;
      }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = !!this.tabs.length && 0)), false !== e && -1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0), !i && false === e && this.anchors.length && (e = 0), e;
    }, _getCreateEventData: function () {
      return {tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t()};
    }, _tabKeydown: function (e) {
      var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"), n = this.tabs.index(i), s = true;
      if (!this._handlePageNav(e)) {
        switch (e.keyCode) {
          case t.ui.keyCode.RIGHT:
          case t.ui.keyCode.DOWN:
            n++;
            break;
          case t.ui.keyCode.UP:
          case t.ui.keyCode.LEFT:
            s = false, n--;
            break;
          case t.ui.keyCode.END:
            n = this.anchors.length - 1;
            break;
          case t.ui.keyCode.HOME:
            n = 0;
            break;
          case t.ui.keyCode.SPACE:
            return e.preventDefault(), clearTimeout(this.activating), void this._activate(n);
          case t.ui.keyCode.ENTER:
            return e.preventDefault(), clearTimeout(this.activating), void this._activate(n !== this.options.active && n);
          default:
            return;
        }
        e.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, s), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function () {
          this.option("active", n);
        }, this.delay));
      }
    }, _panelKeydown: function (e) {
      this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"));
    }, _handlePageNav: function (e) {
      return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, false)), true) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, true)), true) : void 0;
    }, _findNextTab: function (e, i) {
      for (var n = this.tabs.length - 1; -1 !== t.inArray((e > n && (e = 0), 0 > e && (e = n), e), this.options.disabled);) e = i ? e + 1 : e - 1;
      return e;
    }, _focusNextTab: function (t, e) {
      return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t;
    }, _setOption: function (t, e) {
      return "active" === t ? void this._activate(e) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || false !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), void ("heightStyle" === t && this._setupHeightStyle(e)));
    }, _sanitizeSelector: function (t) {
      return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
    }, refresh: function () {
      var e = this.options, i = this.tablist.children(":has(a[href])");
      e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
        return i.index(t);
      }), this._processTabs(), false !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = false, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), false)) : e.active = this.tabs.index(this.active) : (e.active = false, this.active = t()), this._refresh();
    }, _refresh: function () {
      this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({"aria-selected": "false", "aria-expanded": "false", tabIndex: -1}), this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden": "true"}), this.active.length ? (this.active.attr({"aria-selected": "true", "aria-expanded": "true", tabIndex: 0}), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({"aria-hidden": "false"})) : this.tabs.eq(0).attr("tabIndex", 0);
    }, _processTabs: function () {
      var e = this, i = this.tabs, n = this.anchors, s = this.panels;
      this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function (e) {
        t(this).is(".ui-state-disabled") && e.preventDefault();
      }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
        t(this).closest("li").is(".ui-state-disabled") && this.blur();
      }), this.tabs = this.tablist.find("> li:has(a[href])").attr({role: "tab", tabIndex: -1}), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function () {
        return t("a", this)[0];
      }).attr({role: "presentation", tabIndex: -1}), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function (i, n) {
        var s, o, r, a = t(n).uniqueId().attr("id"), l = t(n).closest("li"), h = l.attr("aria-controls");
        e._isLocal(n) ? (s = n.hash, r = s.substring(1), o = e.element.find(e._sanitizeSelector(s))) : (r = l.attr("aria-controls") || t({}).uniqueId()[0].id, s = "#" + r, (o = e.element.find(s)).length || (o = e._createPanel(r)).insertAfter(e.panels[i - 1] || e.tablist), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), h && l.data("ui-tabs-aria-controls", h), l.attr({"aria-controls": r, "aria-labelledby": a}), o.attr("aria-labelledby", a);
      }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(n.not(this.anchors)), this._off(s.not(this.panels)));
    }, _getList: function () {
      return this.tablist || this.element.find("ol, ul").eq(0);
    }, _createPanel: function (e) {
      return t("<div>").attr("id", e).data("ui-tabs-destroy", true);
    }, _setOptionDisabled: function (e) {
      var i, n, s;
      for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = true) : e = false), s = 0; n = this.tabs[s]; s++) i = t(n), true === e || -1 !== t.inArray(s, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
      this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, true === e);
    }, _setupEvents: function (e) {
      var i = {};
      e && t.each(e.split(" "), function (t, e) {
        i[e] = "_eventHandler";
      }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(true, this.anchors, {click: function (t) {
        t.preventDefault();
      }}), this._on(this.anchors, i), this._on(this.tabs, {keydown: "_tabKeydown"}), this._on(this.panels, {keydown: "_panelKeydown"}), this._focusable(this.tabs), this._hoverable(this.tabs);
    }, _setupHeightStyle: function (e) {
      var i, n = this.element.parent();
      "fill" === e ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
        var e = t(this), n = e.css("position");
        "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(true));
      }), this.element.children().not(this.panels).each(function () {
        i -= t(this).outerHeight(true);
      }), this.panels.each(function () {
        t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()));
      }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
        i = Math.max(i, t(this).height("").height());
      }).height(i));
    }, _eventHandler: function (e) {
      var i = this.options, n = this.active, s = t(e.currentTarget).closest("li"), o = s[0] === n[0], r = o && i.collapsible, a = r ? t() : this._getPanelForTab(s), l = n.length ? this._getPanelForTab(n) : t(), h = {oldTab: n, oldPanel: l, newTab: r ? t() : s, newPanel: a};
      e.preventDefault(), s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || false === this._trigger("beforeActivate", e, h) || (i.active = !r && this.tabs.index(s), this.active = o ? t() : s, this.xhr && this.xhr.abort(), l.length || a.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), a.length && this.load(this.tabs.index(s), e), this._toggle(e, h));
    }, _toggle: function (e, i) {
      function n() {
        o.running = false, o._trigger("activate", e, i);
      }
      function s() {
        o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.length && o.options.show ? o._show(r, o.options.show, n) : (r.show(), n());
      }
      var o = this, r = i.newPanel, a = i.oldPanel;
      this.running = true, a.length && this.options.hide ? this._hide(a, this.options.hide, function () {
        o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), s();
      }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.hide(), s()), a.attr("aria-hidden", "true"), i.oldTab.attr({"aria-selected": "false", "aria-expanded": "false"}), r.length && a.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function () {
        return 0 === t(this).attr("tabIndex");
      }).attr("tabIndex", -1), r.attr("aria-hidden", "false"), i.newTab.attr({"aria-selected": "true", "aria-expanded": "true", tabIndex: 0});
    }, _activate: function (e) {
      var i, n = this._findActive(e);
      n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({target: i, currentTarget: i, preventDefault: t.noop}));
    }, _findActive: function (e) {
      return false === e ? t() : this.tabs.eq(e);
    }, _getIndex: function (e) {
      return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e;
    }, _destroy: function () {
      this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
        t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
      }), this.tabs.each(function () {
        var e = t(this), i = e.data("ui-tabs-aria-controls");
        i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls");
      }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "");
    }, enable: function (e) {
      var i = this.options.disabled;
      false !== i && (void 0 === e ? i = false : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function (t) {
        return t !== e ? t : null;
      }) : t.map(this.tabs, function (t, i) {
        return i !== e ? i : null;
      })), this._setOptionDisabled(i));
    }, disable: function (e) {
      var i = this.options.disabled;
      if (true !== i) {
        if (void 0 === e) i = true; else {
          if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
          i = t.isArray(i) ? t.merge([e], i).sort() : [e];
        }
        this._setOptionDisabled(i);
      }
    }, load: function (e, i) {
      e = this._getIndex(e);
      var n = this, s = this.tabs.eq(e), o = s.find(".ui-tabs-anchor"), r = this._getPanelForTab(s), a = {tab: s, panel: r}, l = function (t, e) {
        "abort" === e && n.panels.stop(false, true), n._removeClass(s, "ui-tabs-loading"), r.removeAttr("aria-busy"), t === n.xhr && delete n.xhr;
      };
      this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, a)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(s, "ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.done(function (t, e, s) {
        setTimeout(function () {
          r.html(t), n._trigger("load", i, a), l(s, e);
        }, 1);
      }).fail(function (t, e) {
        setTimeout(function () {
          l(t, e);
        }, 1);
      })));
    }, _ajaxSettings: function (e, i, n) {
      var s = this;
      return {url: e.attr("href").replace(/#.*$/, ""), beforeSend: function (e, o) {
        return s._trigger("beforeLoad", i, t.extend({jqXHR: e, ajaxSettings: o}, n));
      }};
    }, _getPanelForTab: function (e) {
      var i = t(e).attr("aria-controls");
      return this.element.find(this._sanitizeSelector("#" + i));
    }}), false !== t.uiBackCompat && t.widget("ui.tabs", t.ui.tabs, {_processTabs: function () {
      this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
    }}), t.ui.tabs, t.widget("ui.tooltip", {version: "1.12.1", options: {classes: {"ui-tooltip": "ui-corner-all ui-widget-shadow"}, content: function () {
      var e = t(this).attr("title") || "";
      return t("<a>").text(e).html();
    }, hide: true, items: "[title]:not([disabled])", position: {my: "left top+15", at: "left bottom", collision: "flipfit flip"}, show: true, track: false, close: null, open: null}, _addDescribedBy: function (e, i) {
      var n = (e.attr("aria-describedby") || "").split(/\s+/);
      n.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" ")));
    }, _removeDescribedBy: function (e) {
      var i = e.data("ui-tooltip-id"), n = (e.attr("aria-describedby") || "").split(/\s+/), s = t.inArray(i, n);
      -1 !== s && n.splice(s, 1), e.removeData("ui-tooltip-id"), (n = t.trim(n.join(" "))) ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby");
    }, _create: function () {
      this._on({mouseover: "open", focusin: "open"}), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({role: "log", "aria-live": "assertive", "aria-relevant": "additions"}).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([]);
    }, _setOption: function (e, i) {
      var n = this;
      this._super(e, i), "content" === e && t.each(this.tooltips, function (t, e) {
        n._updateContent(e.element);
      });
    }, _setOptionDisabled: function (t) {
      this[t ? "_disable" : "_enable"]();
    }, _disable: function () {
      var e = this;
      t.each(this.tooltips, function (i, n) {
        var s = t.Event("blur");
        s.target = s.currentTarget = n.element[0], e.close(s, true);
      }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function () {
        var e = t(this);
        return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0;
      }));
    }, _enable: function () {
      this.disabledTitles.each(function () {
        var e = t(this);
        e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"));
      }), this.disabledTitles = t([]);
    }, open: function (e) {
      var i = this, n = t(e ? e.target : this.element).closest(this.options.items);
      n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), n.data("ui-tooltip-open", true), e && "mouseover" === e.type && n.parents().each(function () {
        var e, n = t(this);
        n.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, true)), n.attr("title") && (n.uniqueId(), i.parents[this.id] = {element: this, title: n.attr("title")}, n.attr("title", ""));
      }), this._registerCloseHandlers(e, n), this._updateContent(n, e));
    }, _updateContent: function (t, e) {
      var i, n = this.options.content, s = this, o = e ? e.type : null;
      return "string" == typeof n || n.nodeType || n.jquery ? this._open(e, t, n) : void ((i = n.call(t[0], function (i) {
        s._delay(function () {
          t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i));
        });
      })) && this._open(e, t, i));
    }, _open: function (e, i, n) {
      function s(t) {
        h.of = t, r.is(":hidden") || r.position(h);
      }
      var o, r, a, l, h = t.extend({}, this.options.position);
      if (n) {
        if (o = this._find(i)) return void o.tooltip.find(".ui-tooltip-content").html(n);
        i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), r = o.tooltip, this._addDescribedBy(i, r.attr("id")), r.find(".ui-tooltip-content").html(n), this.liveRegion.children().hide(), (l = t("<div>").html(r.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"), l.removeAttr("id").find("[id]").removeAttr("id"), l.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {mousemove: s}), s(e)) : r.position(t.extend({of: i}, this.options.position)), r.hide(), this._show(r, this.options.show), this.options.track && this.options.show && this.options.show.delay && (a = this.delayedShow = setInterval(function () {
          r.is(":visible") && (s(h.of), clearInterval(a));
        }, t.fx.interval)), this._trigger("open", e, {tooltip: r});
      }
    }, _registerCloseHandlers: function (e, i) {
      var n = {keyup: function (e) {
        if (e.keyCode === t.ui.keyCode.ESCAPE) {
          var n = t.Event(e);
          n.currentTarget = i[0], this.close(n, true);
        }
      }};
      i[0] !== this.element[0] && (n.remove = function () {
        this._removeTooltip(this._find(i).tooltip);
      }), e && "mouseover" !== e.type || (n.mouseleave = "close"), e && "focusin" !== e.type || (n.focusout = "close"), this._on(true, i, n);
    }, close: function (e) {
      var i, n = this, s = t(e ? e.currentTarget : this.element), o = this._find(s);
      return o ? (i = o.tooltip, void (o.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")), this._removeDescribedBy(s), o.hiding = true, i.stop(true), this._hide(i, this.options.hide, function () {
        n._removeTooltip(t(this));
      }), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function (e, i) {
        t(i.element).attr("title", i.title), delete n.parents[e];
      }), o.closing = true, this._trigger("close", e, {tooltip: i}), o.hiding || (o.closing = false)))) : void s.removeData("ui-tooltip-open");
    }, _tooltip: function (e) {
      var i = t("<div>").attr("role", "tooltip"), n = t("<div>").appendTo(i), s = i.uniqueId().attr("id");
      return this._addClass(n, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[s] = {element: e, tooltip: i};
    }, _find: function (t) {
      var e = t.data("ui-tooltip-id");
      return e ? this.tooltips[e] : null;
    }, _removeTooltip: function (t) {
      t.remove(), delete this.tooltips[t.attr("id")];
    }, _appendTo: function (t) {
      var e = t.closest(".ui-front, dialog");
      return e.length || (e = this.document[0].body), e;
    }, _destroy: function () {
      var e = this;
      t.each(this.tooltips, function (i, n) {
        var s = t.Event("blur"), o = n.element;
        s.target = s.currentTarget = o[0], e.close(s, true), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"));
      }), this.liveRegion.remove();
    }}), false !== t.uiBackCompat && t.widget("ui.tooltip", t.ui.tooltip, {options: {tooltipClass: null}, _tooltip: function () {
      var t = this._superApply(arguments);
      return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t;
    }}), t.ui.tooltip;
  }), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof module && module.exports ? require("jquery") : jQuery);
  }(function (t) {
    function e(e) {
      var i = {}, n = /^jQuery\d+$/;
      return t.each(e.attributes, function (t, e) {
        e.specified && !n.test(e.name) && (i[e.name] = e.value);
      }), i;
    }
    function i(e, i) {
      var n = this, o = t(this);
      if (n.value === o.attr(a ? "placeholder-x" : "placeholder") && o.hasClass(p.customClass)) if (n.value = "", o.removeClass(p.customClass), o.data("placeholder-password")) {
        if (o = o.hide().nextAll('input[type="password"]:first').show().attr("id", o.removeAttr("id").data("placeholder-id")), true === e) return o[0].value = i, i;
        o.focus();
      } else n == s() && n.select();
    }
    function n(n) {
      var s, o = this, r = t(this), l = o.id;
      if (!n || "blur" !== n.type || !r.hasClass(p.customClass)) if ("" === o.value) {
        if ("password" === o.type) {
          if (!r.data("placeholder-textinput")) {
            try {
              s = r.clone().prop({type: "text"});
            } catch (i) {
              s = t("<input>").attr(t.extend(e(this), {type: "text"}));
            }
            s.removeAttr("name").data({"placeholder-enabled": true, "placeholder-password": r, "placeholder-id": l}).bind("focus.placeholder", i), r.data({"placeholder-textinput": s, "placeholder-id": l}).before(s);
          }
          o.value = "", r = r.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", r.data("placeholder-id")).show();
        } else {
          var h = r.data("placeholder-password");
          h && (h[0].value = "", r.attr("id", r.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"));
        }
        r.addClass(p.customClass), r[0].value = r.attr(a ? "placeholder-x" : "placeholder");
      } else r.removeClass(p.customClass);
    }
    function s() {
      try {
        return document.activeElement;
      } catch (t) {}
    }
    var o, r, a = false, l = "[object OperaMini]" === Object.prototype.toString.call(window.operamini), h = "placeholder" in document.createElement("input") && !l && !a, u = "placeholder" in document.createElement("textarea") && !l && !a, c = t.valHooks, d = t.propHooks, p = {};
    h && u ? (r = t.fn.placeholder = function () {
      return this;
    }, r.input = true, r.textarea = true) : (r = t.fn.placeholder = function (e) {
      var s = {customClass: "placeholder"};
      return p = t.extend({}, s, e), this.filter((h ? "textarea" : ":input") + "[" + (a ? "placeholder-x" : "placeholder") + "]").not("." + p.customClass).not(":radio, :checkbox, [type=hidden]").bind({"focus.placeholder": i, "blur.placeholder": n}).data("placeholder-enabled", true).trigger("blur.placeholder");
    }, r.input = h, r.textarea = u, o = {get: function (e) {
      var i = t(e), n = i.data("placeholder-password");
      return n ? n[0].value : i.data("placeholder-enabled") && i.hasClass(p.customClass) ? "" : e.value;
    }, set: function (e, o) {
      var r, a, l = t(e);
      return "" !== o && (r = l.data("placeholder-textinput"), a = l.data("placeholder-password"), r ? (i.call(r[0], true, o) || (e.value = o), r[0].value = o) : a && (i.call(e, true, o) || (a[0].value = o), e.value = o)), l.data("placeholder-enabled") ? ("" === o ? (e.value = o, e != s() && n.call(e)) : (l.hasClass(p.customClass) && i.call(e), e.value = o), l) : (e.value = o, l);
    }}, h || (c.input = o, d.value = o), u || (c.textarea = o, d.value = o), t(function () {
      t(document).delegate("form", "submit.placeholder", function () {
        var e = t("." + p.customClass, this).each(function () {
          i.call(this, true, "");
        });
        setTimeout(function () {
          e.each(n);
        }, 10);
      });
    }), t(window).bind("beforeunload.placeholder", function () {
      var e = true;
      try {
        "javascript:void(0)" === document.activeElement.toString() && (e = false);
      } catch (t) {}
      e && t("." + p.customClass).each(function () {
        this.value = "";
      });
    }));
  }), void 0 === window.JSON && (window.JSON = new Object), window.JSON.stringify = window.JSON.stringify || function (t) {
    var e = typeof t;
    if ("object" != e || null === t) return "string" == e && (t = '"' + t + '"'), String(t);
    var i, n, s = [], o = t && t.constructor == Array;
    for (i in t) {
      if (n = t[i], "string" == (e = typeof n)) n = '"' + n.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/'/g, "&#039;").replace(/\t/g, " ").replace(/\n/g, " ").replace(/\r/g, " ") + '"'; else if ("object" == e && null !== n) n = stringify(n); else if ("function" == e) continue;
      s.push((o ? "" : '"' + i + '":') + String(n));
    }
    return (o ? "[" : "{") + String(s) + (o ? "]" : "}");
  }, function (t) {
    t(function () {
      t("input.date").placeholder().datepicker({dateFormat: "yy-mm-dd", changeMonth: true, changeYear: true});
    });
  }(jQuery);
  var pardot = {};
  pardot.$ = jQuery.noConflict(true);
  var piAjax = {enabled: true, ajaxCall: function (t, e, i, n, s) {
    if (0 == this.enabled) return false;
    var o = this.getHttpObject();
    return "boolean" == typeof o && 0 == o ? (this.enabled = false, false) : (o.open(s, t + "?" + e, true), o.setRequestHeader("X-REQUESTED-WITH", "XMLHttpRequest"), o.onreadystatechange = function () {
      4 == o.readyState && ("function" == typeof n && n(o.responseText), i && piUtils.evalScripts(o.responseText));
    }, o.send(e), true);
  }, auditEmailField: function (t, e, i, n) {
    var s = piUtils.getFormInputValue(t), o = document.getElementById("error_for_" + t.id), r = document.getElementById("resubscribeIndicator");
    r && this.showResubscribeLookupProgress(r, o);
    var a = "/form/checkEmailAjax/account_id/" + e + "/form_field_id/" + i + "/tracker_id/" + n + "/field_id/" + t.id, l = "param=" + encodeURIComponent(encodeURIComponent(s));
    this.postUrl(a, l, true, function (t) {
      o && (o.innerHTML = t), r && r.setAttribute("style", "display:none;");
    });
  }, showResubscribeLookupProgress: function (t, e) {
    pardot.$("#resubscribeConfirmText").remove(), t && (e && (e.innerHTML = ""), t.removeAttribute("style"));
  }, notifyForResubscribe: function (t, e, i, n, s, o) {
    var r = pardot.$("#error_for_" + t);
    if (r && e && e.link) {
      var a = e.beforeLink || "", l = e.afterLink || "", h = '<a id="resubscribeLink" href="#" style="margin:0;padding:0;cursor:pointer;">' + e.link + "</a>";
      pardot.$("<p id='resubscribeConfirmText' class='error no-label' style='color:#2B2826;'>" + a + h + l + "</p>").insertBefore(r), pardot.$("#resubscribeLink").click(function (t) {
        this.optInConfirmation(t, n, s, i, o);
      }.bind(this));
    }
  }, loadEmailIndicator: function (t, e, i) {
    var n = pardot.$("#" + t.id);
    if (n && !pardot.$("#resubscribeIndicator").length) {
      var s = pardot.$("<p/>", {style: "display:none;", id: "resubscribeIndicator", class: "error no-label"}), o = pardot.$("<img/>", {style: "margin-left:0;", src: i, alt: "indicator"});
      s.append(o).insertAfter(n.parent());
    }
  }, optInConfirmation: function (t, e, i, n, s) {
    t.preventDefault();
    var o = n || "", r = document.getElementById("resubscribeConfirmText");
    if (r) {
      r.innerHTML = o;
      var a = "/form/sendOptInConfirmationEmail/account_id/" + e + "/tracker_id/" + s, l = "param=" + encodeURIComponent(encodeURIComponent(i));
      this.postUrl(a, l, true, null);
    }
  }, zipCodeEnrich: function (t, e, i, n) {}, checkForDependentField: function () {
    var t, e, i;
    t = pardot.$, e = t(this), i = t(window.pardot.FormDependencyMap).filter(function (t, i) {
      return i.primary_field_html_id == e.attr("id");
    }), t(i).each(function (e, i) {
      var n = t(window.pardot.FormDependencyMap).filter(function (t, e) {
        return e.secondary_field_html_id == i.secondary_field_html_id;
      });
      t(n).is(function (e) {
        var i, n;
        return i = t("#" + this.primary_field_html_id), n = i.is("select") ? i.find("option:selected").text().toLowerCase() : i.val().toLowerCase(), -1 !== t.inArray(n, this.primary_field_value.toLowerCase().split(";"));
      }) ? t("[id^=" + i.secondary_field_html_id + "]").parents(".form-field-secondary:hidden").fadeIn(200) : t("[id^=" + i.secondary_field_html_id + "]").parents(".form-field-secondary:visible").hide();
    });
  }, getHttpObject: function () {
    var t = false;
    try {
      t = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        t = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
        t = false;
      }
    }
    if (!t && "undefined" != typeof XMLHttpRequest) try {
      t = new XMLHttpRequest;
    } catch (e) {
      t = false;
    }
    return t;
  }, getUrl: function (t, e, i, n) {
    return this.ajaxCall(t, e, i, n, "GET");
  }, postUrl: function (t, e, i, n) {
    return this.ajaxCall(t, e, i, n, "POST");
  }}, piUtils = {getFormInputValue: function (t) {
    switch (t.type.toLowerCase()) {
      case "select-one":
        var e = t.selectedIndex;
        return e >= 0 ? t.options[e].value : null;
      case "select-multiple":
        var i = t.length;
        if (!i) return null;
        for (var n = 0, s = []; n < i; n++) {
          var o = t.options[n];
          o.selected && s.push(o.value);
        }
        return s;
      case "checkbox":
        return t.checked ? t.value : [t.value, "unselected"];
      case "radio":
        return t.checked ? t.value : null;
      default:
        return t.value;
    }
  }, extractScripts: function (t) {
    var e = "(?:<script.*?>)((\n|\r|.)*?)(?:</script>)", i = new RegExp(e, "img"), n = new RegExp(e, "im"), s = t.match(i), o = new Array, r = new Array;
    if (null == s) return o;
    for (var a = 0; a < s.length; a++) (r = s[a].match(n)).length > 2 && o.push(r[1]);
    return o;
  }, evalScripts: function (htmlStr) {
    for (var scripts = this.extractScripts(htmlStr), x = 0; x < scripts.length; x++) eval(scripts[x]);
  }};
  