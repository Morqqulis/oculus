(() => {
    var __webpack_modules__ = {
        447: function(__unused_webpack_module, exports) {
            !function(t, e) {
                true ? e(exports) : 0;
            }(0, (function(t) {
                "use strict";
                function e(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t);
                        e && (n = n.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        }))), i.push.apply(i, n);
                    }
                    return i;
                }
                function i(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var n = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? e(Object(n), !0).forEach((function(e) {
                            r(t, e, n[e]);
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : e(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                        }));
                    }
                    return t;
                }
                function n(t) {
                    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t;
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                    }, n(t);
                }
                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function a(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                        Object.defineProperty(t, n.key, n);
                    }
                }
                function s(t, e, i) {
                    return e && a(t.prototype, e), i && a(t, i), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), t;
                }
                function r(t, e, i) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = i, t;
                }
                function l(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && h(t, e);
                }
                function c(t) {
                    return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                        return t.__proto__ || Object.getPrototypeOf(t);
                    }, c(t);
                }
                function h(t, e) {
                    return h = Object.setPrototypeOf || function(t, e) {
                        return t.__proto__ = e, t;
                    }, h(t, e);
                }
                function d(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                }
                function u(t, e) {
                    if (e && ("object" == typeof e || "function" == typeof e)) return e;
                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                    return d(t);
                }
                function f(t) {
                    var e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                            !0;
                        } catch (t) {
                            return !1;
                        }
                    }();
                    return function() {
                        var i, n = c(t);
                        if (e) {
                            var o = c(this).constructor;
                            i = Reflect.construct(n, arguments, o);
                        } else i = n.apply(this, arguments);
                        return u(this, i);
                    };
                }
                function v(t, e) {
                    for (;!Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t)); ) ;
                    return t;
                }
                function p() {
                    return p = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
                        var n = v(t, e);
                        if (n) {
                            var o = Object.getOwnPropertyDescriptor(n, e);
                            return o.get ? o.get.call(arguments.length < 3 ? t : i) : o.value;
                        }
                    }, p.apply(this, arguments);
                }
                function g(t, e) {
                    return function(t) {
                        if (Array.isArray(t)) return t;
                    }(t) || function(t, e) {
                        var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null == i) return;
                        var n, o, a = [], s = !0, r = !1;
                        try {
                            for (i = i.call(t); !(s = (n = i.next()).done) && (a.push(n.value), !e || a.length !== e); s = !0) ;
                        } catch (t) {
                            r = !0, o = t;
                        } finally {
                            try {
                                s || null == i.return || i.return();
                            } finally {
                                if (r) throw o;
                            }
                        }
                        return a;
                    }(t, e) || y(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function m(t) {
                    return function(t) {
                        if (Array.isArray(t)) return b(t);
                    }(t) || function(t) {
                        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
                    }(t) || y(t) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function y(t, e) {
                    if (t) {
                        if ("string" == typeof t) return b(t, e);
                        var i = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? b(t, e) : void 0;
                    }
                }
                function b(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                    return n;
                }
                function x(t, e) {
                    var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (!i) {
                        if (Array.isArray(t) || (i = y(t)) || e && t && "number" == typeof t.length) {
                            i && (t = i);
                            var n = 0, o = function() {};
                            return {
                                s: o,
                                n: function() {
                                    return n >= t.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t[n++]
                                    };
                                },
                                e: function(t) {
                                    throw t;
                                },
                                f: o
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var a, s = !0, r = !1;
                    return {
                        s: function() {
                            i = i.call(t);
                        },
                        n: function() {
                            var t = i.next();
                            return s = t.done, t;
                        },
                        e: function(t) {
                            r = !0, a = t;
                        },
                        f: function() {
                            try {
                                s || null == i.return || i.return();
                            } finally {
                                if (r) throw a;
                            }
                        }
                    };
                }
                var w = function(t) {
                    return "object" === n(t) && null !== t && t.constructor === Object && "[object Object]" === Object.prototype.toString.call(t);
                }, k = function t() {
                    for (var e = !1, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                    "boolean" == typeof o[0] && (e = o.shift());
                    var s = o[0];
                    if (!s || "object" !== n(s)) throw new Error("extendee must be an object");
                    for (var r = o.slice(1), l = r.length, c = 0; c < l; c++) {
                        var h = r[c];
                        for (var d in h) if (h.hasOwnProperty(d)) {
                            var u = h[d];
                            if (e && (Array.isArray(u) || w(u))) {
                                var f = Array.isArray(u) ? [] : {};
                                s[d] = t(!0, s.hasOwnProperty(d) ? s[d] : f, u);
                            } else s[d] = u;
                        }
                    }
                    return s;
                }, S = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4;
                    return t = parseFloat(t) || 0, Math.round((t + Number.EPSILON) * e) / e;
                }, C = function t(e) {
                    return !!(e && "object" === n(e) && e instanceof Element && e !== document.body) && !e.__Panzoom && (function(t) {
                        var e = getComputedStyle(t)["overflow-y"], i = getComputedStyle(t)["overflow-x"], n = ("scroll" === e || "auto" === e) && Math.abs(t.scrollHeight - t.clientHeight) > 1, o = ("scroll" === i || "auto" === i) && Math.abs(t.scrollWidth - t.clientWidth) > 1;
                        return n || o;
                    }(e) ? e : t(e.parentNode));
                }, $ = "undefined" != typeof window && window.ResizeObserver || function() {
                    function t(e) {
                        o(this, t), this.observables = [], this.boundCheck = this.check.bind(this), this.boundCheck(), 
                        this.callback = e;
                    }
                    return s(t, [ {
                        key: "observe",
                        value: function(t) {
                            if (!this.observables.some((function(e) {
                                return e.el === t;
                            }))) {
                                var e = {
                                    el: t,
                                    size: {
                                        height: t.clientHeight,
                                        width: t.clientWidth
                                    }
                                };
                                this.observables.push(e);
                            }
                        }
                    }, {
                        key: "unobserve",
                        value: function(t) {
                            this.observables = this.observables.filter((function(e) {
                                return e.el !== t;
                            }));
                        }
                    }, {
                        key: "disconnect",
                        value: function() {
                            this.observables = [];
                        }
                    }, {
                        key: "check",
                        value: function() {
                            var t = this.observables.filter((function(t) {
                                var e = t.el.clientHeight, i = t.el.clientWidth;
                                if (t.size.height !== e || t.size.width !== i) return t.size.height = e, t.size.width = i, 
                                !0;
                            })).map((function(t) {
                                return t.el;
                            }));
                            t.length > 0 && this.callback(t), window.requestAnimationFrame(this.boundCheck);
                        }
                    } ]), t;
                }(), E = s((function t(e) {
                    o(this, t), this.id = self.Touch && e instanceof Touch ? e.identifier : -1, this.pageX = e.pageX, 
                    this.pageY = e.pageY, this.clientX = e.clientX, this.clientY = e.clientY;
                })), P = function(t, e) {
                    return e ? Math.sqrt(Math.pow(e.clientX - t.clientX, 2) + Math.pow(e.clientY - t.clientY, 2)) : 0;
                }, T = function(t, e) {
                    return e ? {
                        clientX: (t.clientX + e.clientX) / 2,
                        clientY: (t.clientY + e.clientY) / 2
                    } : t;
                }, L = function(t) {
                    return "changedTouches" in t;
                }, _ = function() {
                    function t(e) {
                        var i = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = n.start, s = void 0 === a ? function() {
                            return !0;
                        } : a, r = n.move, l = void 0 === r ? function() {} : r, c = n.end, h = void 0 === c ? function() {} : c;
                        o(this, t), this._element = e, this.startPointers = [], this.currentPointers = [], 
                        this._pointerStart = function(t) {
                            if (!(t.buttons > 0 && 0 !== t.button)) {
                                var e = new E(t);
                                i.currentPointers.some((function(t) {
                                    return t.id === e.id;
                                })) || i._triggerPointerStart(e, t) && (window.addEventListener("mousemove", i._move), 
                                window.addEventListener("mouseup", i._pointerEnd));
                            }
                        }, this._touchStart = function(t) {
                            for (var e = 0, n = Array.from(t.changedTouches || []); e < n.length; e++) {
                                var o = n[e];
                                i._triggerPointerStart(new E(o), t);
                            }
                        }, this._move = function(t) {
                            var e, n = i.currentPointers.slice(), o = L(t) ? Array.from(t.changedTouches).map((function(t) {
                                return new E(t);
                            })) : [ new E(t) ], a = [], s = x(o);
                            try {
                                var r = function() {
                                    var t = e.value, n = i.currentPointers.findIndex((function(e) {
                                        return e.id === t.id;
                                    }));
                                    if (n < 0) return "continue";
                                    a.push(t), i.currentPointers[n] = t;
                                };
                                for (s.s(); !(e = s.n()).done; ) r();
                            } catch (t) {
                                s.e(t);
                            } finally {
                                s.f();
                            }
                            i._moveCallback(n, i.currentPointers.slice(), t);
                        }, this._triggerPointerEnd = function(t, e) {
                            var n = i.currentPointers.findIndex((function(e) {
                                return e.id === t.id;
                            }));
                            return !(n < 0) && (i.currentPointers.splice(n, 1), i.startPointers.splice(n, 1), 
                            i._endCallback(t, e), !0);
                        }, this._pointerEnd = function(t) {
                            t.buttons > 0 && 0 !== t.button || i._triggerPointerEnd(new E(t), t) && (window.removeEventListener("mousemove", i._move, {
                                passive: !1
                            }), window.removeEventListener("mouseup", i._pointerEnd, {
                                passive: !1
                            }));
                        }, this._touchEnd = function(t) {
                            for (var e = 0, n = Array.from(t.changedTouches || []); e < n.length; e++) {
                                var o = n[e];
                                i._triggerPointerEnd(new E(o), t);
                            }
                        }, this._startCallback = s, this._moveCallback = l, this._endCallback = h, this._element.addEventListener("mousedown", this._pointerStart, {
                            passive: !1
                        }), this._element.addEventListener("touchstart", this._touchStart, {
                            passive: !1
                        }), this._element.addEventListener("touchmove", this._move, {
                            passive: !1
                        }), this._element.addEventListener("touchend", this._touchEnd), this._element.addEventListener("touchcancel", this._touchEnd);
                    }
                    return s(t, [ {
                        key: "stop",
                        value: function() {
                            this._element.removeEventListener("mousedown", this._pointerStart, {
                                passive: !1
                            }), this._element.removeEventListener("touchstart", this._touchStart, {
                                passive: !1
                            }), this._element.removeEventListener("touchmove", this._move, {
                                passive: !1
                            }), this._element.removeEventListener("touchend", this._touchEnd), this._element.removeEventListener("touchcancel", this._touchEnd), 
                            window.removeEventListener("mousemove", this._move), window.removeEventListener("mouseup", this._pointerEnd);
                        }
                    }, {
                        key: "_triggerPointerStart",
                        value: function(t, e) {
                            return !!this._startCallback(t, e) && (this.currentPointers.push(t), this.startPointers.push(t), 
                            !0);
                        }
                    } ]), t;
                }(), A = function(t, e) {
                    return t.split(".").reduce((function(t, e) {
                        return t && t[e];
                    }), e);
                }, O = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        o(this, t), this.options = k(!0, {}, e), this.plugins = [], this.events = {};
                        for (var i = 0, n = [ "on", "once" ]; i < n.length; i++) for (var a = n[i], s = 0, r = Object.entries(this.options[a] || {}); s < r.length; s++) {
                            var l = r[s];
                            this[a].apply(this, m(l));
                        }
                    }
                    return s(t, [ {
                        key: "option",
                        value: function(t, e) {
                            t = String(t);
                            var i = A(t, this.options);
                            if ("function" == typeof i) {
                                for (var n, o = arguments.length, a = new Array(o > 2 ? o - 2 : 0), s = 2; s < o; s++) a[s - 2] = arguments[s];
                                i = (n = i).call.apply(n, [ this, this ].concat(a));
                            }
                            return void 0 === i ? e : i;
                        }
                    }, {
                        key: "localize",
                        value: function(t) {
                            var e = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                            return t = (t = String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, (function(t, n, o) {
                                var a = "";
                                o ? a = e.option("".concat(n[0] + n.toLowerCase().substring(1), ".l10n.").concat(o)) : n && (a = e.option("l10n.".concat(n))), 
                                a || (a = t);
                                for (var s = 0; s < i.length; s++) a = a.split(i[s][0]).join(i[s][1]);
                                return a;
                            }))).replace(/\{\{(.*)\}\}/, (function(t, e) {
                                return e;
                            }));
                        }
                    }, {
                        key: "on",
                        value: function(t, e) {
                            var i = this;
                            if (w(t)) {
                                for (var n = 0, o = Object.entries(t); n < o.length; n++) {
                                    var a = o[n];
                                    this.on.apply(this, m(a));
                                }
                                return this;
                            }
                            return String(t).split(" ").forEach((function(t) {
                                var n = i.events[t] = i.events[t] || [];
                                -1 == n.indexOf(e) && n.push(e);
                            })), this;
                        }
                    }, {
                        key: "once",
                        value: function(t, e) {
                            var i = this;
                            if (w(t)) {
                                for (var n = 0, o = Object.entries(t); n < o.length; n++) {
                                    var a = o[n];
                                    this.once.apply(this, m(a));
                                }
                                return this;
                            }
                            return String(t).split(" ").forEach((function(t) {
                                var n = function n() {
                                    i.off(t, n);
                                    for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++) a[s] = arguments[s];
                                    e.call.apply(e, [ i, i ].concat(a));
                                };
                                n._ = e, i.on(t, n);
                            })), this;
                        }
                    }, {
                        key: "off",
                        value: function(t, e) {
                            var i = this;
                            if (!w(t)) return t.split(" ").forEach((function(t) {
                                var n = i.events[t];
                                if (!n || !n.length) return i;
                                for (var o = -1, a = 0, s = n.length; a < s; a++) {
                                    var r = n[a];
                                    if (r && (r === e || r._ === e)) {
                                        o = a;
                                        break;
                                    }
                                }
                                -1 != o && n.splice(o, 1);
                            })), this;
                            for (var n = 0, o = Object.entries(t); n < o.length; n++) {
                                var a = o[n];
                                this.off.apply(this, m(a));
                            }
                        }
                    }, {
                        key: "trigger",
                        value: function(t) {
                            for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                            var o, a = x(m(this.events[t] || []).slice());
                            try {
                                for (a.s(); !(o = a.n()).done; ) {
                                    var s = o.value;
                                    if (s && !1 === s.call.apply(s, [ this, this ].concat(i))) return !1;
                                }
                            } catch (t) {
                                a.e(t);
                            } finally {
                                a.f();
                            }
                            var r, l = x(m(this.events["*"] || []).slice());
                            try {
                                for (l.s(); !(r = l.n()).done; ) {
                                    var c = r.value;
                                    if (c && !1 === c.call.apply(c, [ this, t, this ].concat(i))) return !1;
                                }
                            } catch (t) {
                                l.e(t);
                            } finally {
                                l.f();
                            }
                            return !0;
                        }
                    }, {
                        key: "attachPlugins",
                        value: function(t) {
                            for (var e = {}, i = 0, n = Object.entries(t || {}); i < n.length; i++) {
                                var o = g(n[i], 2), a = o[0], s = o[1];
                                !1 === this.options[a] || this.plugins[a] || (this.options[a] = k({}, s.defaults || {}, this.options[a]), 
                                e[a] = new s(this));
                            }
                            for (var r = 0, l = Object.entries(e); r < l.length; r++) {
                                var c = g(l[r], 2);
                                c[0], c[1].attach(this);
                            }
                            return this.plugins = Object.assign({}, this.plugins, e), this;
                        }
                    }, {
                        key: "detachPlugins",
                        value: function() {
                            for (var t in this.plugins) {
                                var e = void 0;
                                (e = this.plugins[t]) && "function" == typeof e.detach && e.detach(this);
                            }
                            return this.plugins = {}, this;
                        }
                    } ]), t;
                }(), z = {
                    touch: !0,
                    zoom: !0,
                    pinchToZoom: !0,
                    panOnlyZoomed: !1,
                    lockAxis: !1,
                    friction: .64,
                    decelFriction: .88,
                    zoomFriction: .74,
                    bounceForce: .2,
                    baseScale: 1,
                    minScale: 1,
                    maxScale: 2,
                    step: .5,
                    textSelection: !1,
                    click: "toggleZoom",
                    wheel: "zoom",
                    wheelFactor: 42,
                    wheelLimit: 5,
                    draggableClass: "is-draggable",
                    draggingClass: "is-dragging",
                    ratio: 1
                }, M = function(t) {
                    l(n, t);
                    var e = f(n);
                    function n(t) {
                        var i, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        o(this, n), (i = e.call(this, k(!0, {}, z, a))).state = "init", i.$container = t;
                        for (var s = 0, r = [ "onLoad", "onWheel", "onClick" ]; s < r.length; s++) {
                            var l = r[s];
                            i[l] = i[l].bind(d(i));
                        }
                        return i.initLayout(), i.resetValues(), i.attachPlugins(n.Plugins), i.trigger("init"), 
                        i.updateMetrics(), i.attachEvents(), i.trigger("ready"), !1 === i.option("centerOnStart") ? i.state = "ready" : i.panTo({
                            friction: 0
                        }), t.__Panzoom = d(i), i;
                    }
                    return s(n, [ {
                        key: "initLayout",
                        value: function() {
                            var t = this.$container;
                            if (!(t instanceof HTMLElement)) throw new Error("Panzoom: Container not found");
                            var e = this.option("content") || t.querySelector(".panzoom__content");
                            if (!e) throw new Error("Panzoom: Content not found");
                            this.$content = e;
                            var i, n = this.option("viewport") || t.querySelector(".panzoom__viewport");
                            n || !1 === this.option("wrapInner") || ((n = document.createElement("div")).classList.add("panzoom__viewport"), 
                            (i = n).append.apply(i, m(t.childNodes)), t.appendChild(n));
                            this.$viewport = n || e.parentNode;
                        }
                    }, {
                        key: "resetValues",
                        value: function() {
                            this.updateRate = this.option("updateRate", /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 250 : 24), 
                            this.container = {
                                width: 0,
                                height: 0
                            }, this.viewport = {
                                width: 0,
                                height: 0
                            }, this.content = {
                                origWidth: 0,
                                origHeight: 0,
                                width: 0,
                                height: 0,
                                x: this.option("x", 0),
                                y: this.option("y", 0),
                                scale: this.option("baseScale")
                            }, this.transform = {
                                x: 0,
                                y: 0,
                                scale: 1
                            }, this.resetDragPosition();
                        }
                    }, {
                        key: "onLoad",
                        value: function(t) {
                            this.updateMetrics(), this.panTo({
                                scale: this.option("baseScale"),
                                friction: 0
                            }), this.trigger("load", t);
                        }
                    }, {
                        key: "onClick",
                        value: function(t) {
                            if (!(t.defaultPrevented || document.activeElement && document.activeElement.closest("[contenteditable]"))) if (!this.option("textSelection") || !window.getSelection().toString().length || t.target && t.target.hasAttribute("data-fancybox-close")) {
                                var e = this.$content.getClientRects()[0];
                                if ("ready" !== this.state && (this.dragPosition.midPoint || Math.abs(e.top - this.dragStart.rect.top) > 1 || Math.abs(e.left - this.dragStart.rect.left) > 1)) return t.preventDefault(), 
                                void t.stopPropagation();
                                !1 !== this.trigger("click", t) && this.option("zoom") && "toggleZoom" === this.option("click") && (t.preventDefault(), 
                                t.stopPropagation(), this.zoomWithClick(t));
                            } else t.stopPropagation();
                        }
                    }, {
                        key: "onWheel",
                        value: function(t) {
                            !1 !== this.trigger("wheel", t) && this.option("zoom") && this.option("wheel") && this.zoomWithWheel(t);
                        }
                    }, {
                        key: "zoomWithWheel",
                        value: function(t) {
                            void 0 === this.changedDelta && (this.changedDelta = 0);
                            var e = Math.max(-1, Math.min(1, -t.deltaY || -t.deltaX || t.wheelDelta || -t.detail)), i = this.content.scale, n = i * (100 + e * this.option("wheelFactor")) / 100;
                            if (e < 0 && Math.abs(i - this.option("minScale")) < .01 || e > 0 && Math.abs(i - this.option("maxScale")) < .01 ? (this.changedDelta += Math.abs(e), 
                            n = i) : (this.changedDelta = 0, n = Math.max(Math.min(n, this.option("maxScale")), this.option("minScale"))), 
                            !(this.changedDelta > this.option("wheelLimit")) && (t.preventDefault(), n !== i)) {
                                var o = this.$content.getBoundingClientRect(), a = t.clientX - o.left, s = t.clientY - o.top;
                                this.zoomTo(n, {
                                    x: a,
                                    y: s
                                });
                            }
                        }
                    }, {
                        key: "zoomWithClick",
                        value: function(t) {
                            var e = this.$content.getClientRects()[0], i = t.clientX - e.left, n = t.clientY - e.top;
                            this.toggleZoom({
                                x: i,
                                y: n
                            });
                        }
                    }, {
                        key: "attachEvents",
                        value: function() {
                            var t = this;
                            this.$content.addEventListener("load", this.onLoad), this.$container.addEventListener("wheel", this.onWheel, {
                                passive: !1
                            }), this.$container.addEventListener("click", this.onClick, {
                                passive: !1
                            }), this.initObserver();
                            var e = new _(this.$container, {
                                start: function(i, n) {
                                    if (!t.option("touch")) return !1;
                                    if (t.velocity.scale < 0) return !1;
                                    var o = n.composedPath()[0];
                                    if (!e.currentPointers.length) {
                                        if (-1 !== [ "BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO" ].indexOf(o.nodeName)) return !1;
                                        if (t.option("textSelection") && function(t, e, i) {
                                            for (var n = t.childNodes, o = document.createRange(), a = 0; a < n.length; a++) {
                                                var s = n[a];
                                                if (s.nodeType === Node.TEXT_NODE) {
                                                    o.selectNodeContents(s);
                                                    var r = o.getBoundingClientRect();
                                                    if (e >= r.left && i >= r.top && e <= r.right && i <= r.bottom) return s;
                                                }
                                            }
                                            return !1;
                                        }(o, i.clientX, i.clientY)) return !1;
                                    }
                                    return !C(o) && !1 !== t.trigger("touchStart", n) && ("mousedown" === n.type && n.preventDefault(), 
                                    t.state = "pointerdown", t.resetDragPosition(), t.dragPosition.midPoint = null, 
                                    t.dragPosition.time = Date.now(), !0);
                                },
                                move: function(i, n, o) {
                                    if ("pointerdown" === t.state) if (!1 !== t.trigger("touchMove", o)) {
                                        if (!(n.length < 2 && !0 === t.option("panOnlyZoomed") && t.content.width <= t.viewport.width && t.content.height <= t.viewport.height && t.transform.scale <= t.option("baseScale")) && (!(n.length > 1) || t.option("zoom") && !1 !== t.option("pinchToZoom"))) {
                                            var a = T(i[0], i[1]), s = T(n[0], n[1]), r = s.clientX - a.clientX, l = s.clientY - a.clientY, c = P(i[0], i[1]), h = P(n[0], n[1]), d = c && h ? h / c : 1;
                                            t.dragOffset.x += r, t.dragOffset.y += l, t.dragOffset.scale *= d, t.dragOffset.time = Date.now() - t.dragPosition.time;
                                            var u = 1 === t.dragStart.scale && t.option("lockAxis");
                                            if (u && !t.lockAxis) {
                                                if (Math.abs(t.dragOffset.x) < 6 && Math.abs(t.dragOffset.y) < 6) return void o.preventDefault();
                                                var f = Math.abs(180 * Math.atan2(t.dragOffset.y, t.dragOffset.x) / Math.PI);
                                                t.lockAxis = f > 45 && f < 135 ? "y" : "x";
                                            }
                                            if ("xy" === u || "y" !== t.lockAxis) {
                                                if (o.preventDefault(), o.stopPropagation(), o.stopImmediatePropagation(), t.lockAxis && (t.dragOffset["x" === t.lockAxis ? "y" : "x"] = 0), 
                                                t.$container.classList.add(t.option("draggingClass")), t.transform.scale === t.option("baseScale") && "y" === t.lockAxis || (t.dragPosition.x = t.dragStart.x + t.dragOffset.x), 
                                                t.transform.scale === t.option("baseScale") && "x" === t.lockAxis || (t.dragPosition.y = t.dragStart.y + t.dragOffset.y), 
                                                t.dragPosition.scale = t.dragStart.scale * t.dragOffset.scale, n.length > 1) {
                                                    var v = T(e.startPointers[0], e.startPointers[1]), p = v.clientX - t.dragStart.rect.x, g = v.clientY - t.dragStart.rect.y, m = t.getZoomDelta(t.content.scale * t.dragOffset.scale, p, g), y = m.deltaX, b = m.deltaY;
                                                    t.dragPosition.x -= y, t.dragPosition.y -= b, t.dragPosition.midPoint = s;
                                                } else t.setDragResistance();
                                                t.transform = {
                                                    x: t.dragPosition.x,
                                                    y: t.dragPosition.y,
                                                    scale: t.dragPosition.scale
                                                }, t.startAnimation();
                                            }
                                        }
                                    } else o.preventDefault();
                                },
                                end: function(n, o) {
                                    if ("pointerdown" === t.state) if (t._dragOffset = i({}, t.dragOffset), e.currentPointers.length) t.resetDragPosition(); else if (t.state = "decel", 
                                    t.friction = t.option("decelFriction"), t.recalculateTransform(), t.$container.classList.remove(t.option("draggingClass")), 
                                    !1 !== t.trigger("touchEnd", o) && "decel" === t.state) {
                                        var a = t.option("minScale");
                                        if (t.transform.scale < a) t.zoomTo(a, {
                                            friction: .64
                                        }); else {
                                            var s = t.option("maxScale");
                                            if (t.transform.scale - s > .01) {
                                                var r = t.dragPosition.midPoint || n, l = t.$content.getClientRects()[0];
                                                t.zoomTo(s, {
                                                    friction: .64,
                                                    x: r.clientX - l.left,
                                                    y: r.clientY - l.top
                                                });
                                            }
                                        }
                                    }
                                }
                            });
                            this.pointerTracker = e;
                        }
                    }, {
                        key: "initObserver",
                        value: function() {
                            var t = this;
                            this.resizeObserver || (this.resizeObserver = new $((function() {
                                t.updateTimer || (t.updateTimer = setTimeout((function() {
                                    var e = t.$container.getBoundingClientRect();
                                    e.width && e.height ? ((Math.abs(e.width - t.container.width) > 1 || Math.abs(e.height - t.container.height) > 1) && (t.isAnimating() && t.endAnimation(!0), 
                                    t.updateMetrics(), t.panTo({
                                        x: t.content.x,
                                        y: t.content.y,
                                        scale: t.option("baseScale"),
                                        friction: 0
                                    })), t.updateTimer = null) : t.updateTimer = null;
                                }), t.updateRate));
                            })), this.resizeObserver.observe(this.$container));
                        }
                    }, {
                        key: "resetDragPosition",
                        value: function() {
                            this.lockAxis = null, this.friction = this.option("friction"), this.velocity = {
                                x: 0,
                                y: 0,
                                scale: 0
                            };
                            var t = this.content, e = t.x, n = t.y, o = t.scale;
                            this.dragStart = {
                                rect: this.$content.getBoundingClientRect(),
                                x: e,
                                y: n,
                                scale: o
                            }, this.dragPosition = i(i({}, this.dragPosition), {}, {
                                x: e,
                                y: n,
                                scale: o
                            }), this.dragOffset = {
                                x: 0,
                                y: 0,
                                scale: 1,
                                time: 0
                            };
                        }
                    }, {
                        key: "updateMetrics",
                        value: function(t) {
                            !0 !== t && this.trigger("beforeUpdate");
                            var e, n = this.$container, o = this.$content, a = this.$viewport, s = o instanceof HTMLImageElement, r = this.option("zoom"), l = this.option("resizeParent", r), c = this.option("width"), h = this.option("height"), d = c || (e = o, 
                            Math.max(parseFloat(e.naturalWidth || 0), parseFloat(e.width && e.width.baseVal && e.width.baseVal.value || 0), parseFloat(e.offsetWidth || 0), parseFloat(e.scrollWidth || 0))), u = h || function(t) {
                                return Math.max(parseFloat(t.naturalHeight || 0), parseFloat(t.height && t.height.baseVal && t.height.baseVal.value || 0), parseFloat(t.offsetHeight || 0), parseFloat(t.scrollHeight || 0));
                            }(o);
                            Object.assign(o.style, {
                                width: c ? "".concat(c, "px") : "",
                                height: h ? "".concat(h, "px") : "",
                                maxWidth: "",
                                maxHeight: ""
                            }), l && Object.assign(a.style, {
                                width: "",
                                height: ""
                            });
                            var f = this.option("ratio");
                            c = d = S(d * f), h = u = S(u * f);
                            var v = o.getBoundingClientRect(), p = a.getBoundingClientRect(), g = a == n ? p : n.getBoundingClientRect(), m = Math.max(a.offsetWidth, S(p.width)), y = Math.max(a.offsetHeight, S(p.height)), b = window.getComputedStyle(a);
                            if (m -= parseFloat(b.paddingLeft) + parseFloat(b.paddingRight), y -= parseFloat(b.paddingTop) + parseFloat(b.paddingBottom), 
                            this.viewport.width = m, this.viewport.height = y, r) {
                                if (Math.abs(d - v.width) > .1 || Math.abs(u - v.height) > .1) {
                                    var x = function(t, e, i, n) {
                                        var o = Math.min(i / t || 0, n / e);
                                        return {
                                            width: t * o || 0,
                                            height: e * o || 0
                                        };
                                    }(d, u, Math.min(d, v.width), Math.min(u, v.height));
                                    c = S(x.width), h = S(x.height);
                                }
                                Object.assign(o.style, {
                                    width: "".concat(c, "px"),
                                    height: "".concat(h, "px"),
                                    transform: ""
                                });
                            }
                            if (l && (Object.assign(a.style, {
                                width: "".concat(c, "px"),
                                height: "".concat(h, "px")
                            }), this.viewport = i(i({}, this.viewport), {}, {
                                width: c,
                                height: h
                            })), s && r && "function" != typeof this.options.maxScale) {
                                var w = this.option("maxScale");
                                this.options.maxScale = function() {
                                    return this.content.origWidth > 0 && this.content.fitWidth > 0 ? this.content.origWidth / this.content.fitWidth : w;
                                };
                            }
                            this.content = i(i({}, this.content), {}, {
                                origWidth: d,
                                origHeight: u,
                                fitWidth: c,
                                fitHeight: h,
                                width: c,
                                height: h,
                                scale: 1,
                                isZoomable: r
                            }), this.container = {
                                width: g.width,
                                height: g.height
                            }, !0 !== t && this.trigger("afterUpdate");
                        }
                    }, {
                        key: "zoomIn",
                        value: function(t) {
                            this.zoomTo(this.content.scale + (t || this.option("step")));
                        }
                    }, {
                        key: "zoomOut",
                        value: function(t) {
                            this.zoomTo(this.content.scale - (t || this.option("step")));
                        }
                    }, {
                        key: "toggleZoom",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = this.option("maxScale"), i = this.option("baseScale"), n = this.content.scale > i + .5 * (e - i) ? i : e;
                            this.zoomTo(n, t);
                        }
                    }, {
                        key: "zoomTo",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.option("baseScale"), e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = e.x, n = void 0 === i ? null : i, o = e.y, a = void 0 === o ? null : o;
                            t = Math.max(Math.min(t, this.option("maxScale")), this.option("minScale"));
                            var s = S(this.content.scale / (this.content.width / this.content.fitWidth), 1e7);
                            null === n && (n = this.content.width * s * .5), null === a && (a = this.content.height * s * .5);
                            var r = this.getZoomDelta(t, n, a), l = r.deltaX, c = r.deltaY;
                            n = this.content.x - l, a = this.content.y - c, this.panTo({
                                x: n,
                                y: a,
                                scale: t,
                                friction: this.option("zoomFriction")
                            });
                        }
                    }, {
                        key: "getZoomDelta",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n = this.content.fitWidth * this.content.scale, o = this.content.fitHeight * this.content.scale, a = e > 0 && n ? e / n : 0, s = i > 0 && o ? i / o : 0, r = this.content.fitWidth * t, l = this.content.fitHeight * t, c = (r - n) * a, h = (l - o) * s;
                            return {
                                deltaX: c,
                                deltaY: h
                            };
                        }
                    }, {
                        key: "panTo",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.x, n = void 0 === e ? this.content.x : e, o = t.y, a = void 0 === o ? this.content.y : o, s = t.scale, r = t.friction, l = void 0 === r ? this.option("friction") : r, c = t.ignoreBounds, h = void 0 !== c && c;
                            if (s = s || this.content.scale || 1, !h) {
                                var d = this.getBounds(s), u = d.boundX, f = d.boundY;
                                u && (n = Math.max(Math.min(n, u.to), u.from)), f && (a = Math.max(Math.min(a, f.to), f.from));
                            }
                            this.friction = l, this.transform = i(i({}, this.transform), {}, {
                                x: n,
                                y: a,
                                scale: s
                            }), l ? (this.state = "panning", this.velocity = {
                                x: (1 / this.friction - 1) * (n - this.content.x),
                                y: (1 / this.friction - 1) * (a - this.content.y),
                                scale: (1 / this.friction - 1) * (s - this.content.scale)
                            }, this.startAnimation()) : this.endAnimation();
                        }
                    }, {
                        key: "startAnimation",
                        value: function() {
                            var t = this;
                            this.rAF ? cancelAnimationFrame(this.rAF) : this.trigger("startAnimation"), this.rAF = requestAnimationFrame((function() {
                                return t.animate();
                            }));
                        }
                    }, {
                        key: "animate",
                        value: function() {
                            var t = this;
                            if (this.setEdgeForce(), this.setDragForce(), this.velocity.x *= this.friction, 
                            this.velocity.y *= this.friction, this.velocity.scale *= this.friction, this.content.x += this.velocity.x, 
                            this.content.y += this.velocity.y, this.content.scale += this.velocity.scale, this.isAnimating()) this.setTransform(); else if ("pointerdown" !== this.state) return void this.endAnimation();
                            this.rAF = requestAnimationFrame((function() {
                                return t.animate();
                            }));
                        }
                    }, {
                        key: "getBounds",
                        value: function(t) {
                            var e = this.boundX, i = this.boundY;
                            if (void 0 !== e && void 0 !== i) return {
                                boundX: e,
                                boundY: i
                            };
                            e = {
                                from: 0,
                                to: 0
                            }, i = {
                                from: 0,
                                to: 0
                            }, t = t || this.transform.scale;
                            var n = this.content.fitWidth * t, o = this.content.fitHeight * t, a = this.viewport.width, s = this.viewport.height;
                            if (n < a) {
                                var r = S(.5 * (a - n));
                                e.from = r, e.to = r;
                            } else e.from = S(a - n);
                            if (o < s) {
                                var l = .5 * (s - o);
                                i.from = l, i.to = l;
                            } else i.from = S(s - o);
                            return {
                                boundX: e,
                                boundY: i
                            };
                        }
                    }, {
                        key: "setEdgeForce",
                        value: function() {
                            if ("decel" === this.state) {
                                var t, e, i, n, o = this.option("bounceForce"), a = this.getBounds(Math.max(this.transform.scale, this.content.scale)), s = a.boundX, r = a.boundY;
                                if (s && (t = this.content.x < s.from, e = this.content.x > s.to), r && (i = this.content.y < r.from, 
                                n = this.content.y > r.to), t || e) {
                                    var l = ((t ? s.from : s.to) - this.content.x) * o, c = this.content.x + (this.velocity.x + l) / this.friction;
                                    c >= s.from && c <= s.to && (l += this.velocity.x), this.velocity.x = l, this.recalculateTransform();
                                }
                                if (i || n) {
                                    var h = ((i ? r.from : r.to) - this.content.y) * o, d = this.content.y + (h + this.velocity.y) / this.friction;
                                    d >= r.from && d <= r.to && (h += this.velocity.y), this.velocity.y = h, this.recalculateTransform();
                                }
                            }
                        }
                    }, {
                        key: "setDragResistance",
                        value: function() {
                            if ("pointerdown" === this.state) {
                                var t, e, i, n, o = this.getBounds(this.dragPosition.scale), a = o.boundX, s = o.boundY;
                                if (a && (t = this.dragPosition.x < a.from, e = this.dragPosition.x > a.to), s && (i = this.dragPosition.y < s.from, 
                                n = this.dragPosition.y > s.to), (t || e) && (!t || !e)) {
                                    var r = t ? a.from : a.to, l = r - this.dragPosition.x;
                                    this.dragPosition.x = r - .3 * l;
                                }
                                if ((i || n) && (!i || !n)) {
                                    var c = i ? s.from : s.to, h = c - this.dragPosition.y;
                                    this.dragPosition.y = c - .3 * h;
                                }
                            }
                        }
                    }, {
                        key: "setDragForce",
                        value: function() {
                            "pointerdown" === this.state && (this.velocity.x = this.dragPosition.x - this.content.x, 
                            this.velocity.y = this.dragPosition.y - this.content.y, this.velocity.scale = this.dragPosition.scale - this.content.scale);
                        }
                    }, {
                        key: "recalculateTransform",
                        value: function() {
                            this.transform.x = this.content.x + this.velocity.x / (1 / this.friction - 1), this.transform.y = this.content.y + this.velocity.y / (1 / this.friction - 1), 
                            this.transform.scale = this.content.scale + this.velocity.scale / (1 / this.friction - 1);
                        }
                    }, {
                        key: "isAnimating",
                        value: function() {
                            return !(!this.friction || !(Math.abs(this.velocity.x) > .05 || Math.abs(this.velocity.y) > .05 || Math.abs(this.velocity.scale) > .05));
                        }
                    }, {
                        key: "setTransform",
                        value: function(t) {
                            var e, n, o, a, s;
                            (t ? (e = S(this.transform.x), n = S(this.transform.y), o = this.transform.scale, 
                            this.content = i(i({}, this.content), {}, {
                                x: e,
                                y: n,
                                scale: o
                            })) : (e = S(this.content.x), n = S(this.content.y), o = this.content.scale / (this.content.width / this.content.fitWidth), 
                            this.content = i(i({}, this.content), {}, {
                                x: e,
                                y: n
                            })), this.trigger("beforeTransform"), e = S(this.content.x), n = S(this.content.y), 
                            t && this.option("zoom")) ? (a = S(this.content.fitWidth * o), s = S(this.content.fitHeight * o), 
                            this.content.width = a, this.content.height = s, this.transform = i(i({}, this.transform), {}, {
                                width: a,
                                height: s,
                                scale: o
                            }), Object.assign(this.$content.style, {
                                width: "".concat(a, "px"),
                                height: "".concat(s, "px"),
                                maxWidth: "none",
                                maxHeight: "none",
                                transform: "translate3d(".concat(e, "px, ").concat(n, "px, 0) scale(1)")
                            })) : this.$content.style.transform = "translate3d(".concat(e, "px, ").concat(n, "px, 0) scale(").concat(o, ")");
                            this.trigger("afterTransform");
                        }
                    }, {
                        key: "endAnimation",
                        value: function(t) {
                            cancelAnimationFrame(this.rAF), this.rAF = null, this.velocity = {
                                x: 0,
                                y: 0,
                                scale: 0
                            }, this.setTransform(!0), this.state = "ready", this.handleCursor(), !0 !== t && this.trigger("endAnimation");
                        }
                    }, {
                        key: "handleCursor",
                        value: function() {
                            var t = this.option("draggableClass");
                            t && this.option("touch") && (1 == this.option("panOnlyZoomed") && this.content.width <= this.viewport.width && this.content.height <= this.viewport.height && this.transform.scale <= this.option("baseScale") ? this.$container.classList.remove(t) : this.$container.classList.add(t));
                        }
                    }, {
                        key: "detachEvents",
                        value: function() {
                            this.$content.removeEventListener("load", this.onLoad), this.$container.removeEventListener("wheel", this.onWheel, {
                                passive: !1
                            }), this.$container.removeEventListener("click", this.onClick, {
                                passive: !1
                            }), this.pointerTracker && (this.pointerTracker.stop(), this.pointerTracker = null), 
                            this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null);
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            "destroy" !== this.state && (this.state = "destroy", clearTimeout(this.updateTimer), 
                            this.updateTimer = null, cancelAnimationFrame(this.rAF), this.rAF = null, this.detachEvents(), 
                            this.detachPlugins(), this.resetDragPosition());
                        }
                    } ]), n;
                }(O);
                M.version = "4.0.31", M.Plugins = {};
                var I = function(t, e) {
                    var i = 0;
                    return function() {
                        var n = (new Date).getTime();
                        if (!(n - i < e)) return i = n, t.apply(void 0, arguments);
                    };
                }, R = function() {
                    function t(e) {
                        o(this, t), this.$container = null, this.$prev = null, this.$next = null, this.carousel = e, 
                        this.onRefresh = this.onRefresh.bind(this);
                    }
                    return s(t, [ {
                        key: "option",
                        value: function(t) {
                            return this.carousel.option("Navigation.".concat(t));
                        }
                    }, {
                        key: "createButton",
                        value: function(t) {
                            var e, i = this, n = document.createElement("button");
                            n.setAttribute("title", this.carousel.localize("{{".concat(t.toUpperCase(), "}}")));
                            var o = this.option("classNames.button") + " " + this.option("classNames.".concat(t));
                            return (e = n.classList).add.apply(e, m(o.split(" "))), n.setAttribute("tabindex", "0"), 
                            n.innerHTML = this.carousel.localize(this.option("".concat(t, "Tpl"))), n.addEventListener("click", (function(e) {
                                e.preventDefault(), e.stopPropagation(), i.carousel["slide".concat("next" === t ? "Next" : "Prev")]();
                            })), n;
                        }
                    }, {
                        key: "build",
                        value: function() {
                            var t;
                            this.$container || (this.$container = document.createElement("div"), (t = this.$container.classList).add.apply(t, m(this.option("classNames.main").split(" "))), 
                            this.carousel.$container.appendChild(this.$container));
                            this.$next || (this.$next = this.createButton("next"), this.$container.appendChild(this.$next)), 
                            this.$prev || (this.$prev = this.createButton("prev"), this.$container.appendChild(this.$prev));
                        }
                    }, {
                        key: "onRefresh",
                        value: function() {
                            var t = this.carousel.pages.length;
                            t <= 1 || t > 1 && this.carousel.elemDimWidth < this.carousel.wrapDimWidth && !Number.isInteger(this.carousel.option("slidesPerPage")) ? this.cleanup() : (this.build(), 
                            this.$prev.removeAttribute("disabled"), this.$next.removeAttribute("disabled"), 
                            this.carousel.option("infiniteX", this.carousel.option("infinite")) || (this.carousel.page <= 0 && this.$prev.setAttribute("disabled", ""), 
                            this.carousel.page >= t - 1 && this.$next.setAttribute("disabled", "")));
                        }
                    }, {
                        key: "cleanup",
                        value: function() {
                            this.$prev && this.$prev.remove(), this.$prev = null, this.$next && this.$next.remove(), 
                            this.$next = null, this.$container && this.$container.remove(), this.$container = null;
                        }
                    }, {
                        key: "attach",
                        value: function() {
                            this.carousel.on("refresh change", this.onRefresh);
                        }
                    }, {
                        key: "detach",
                        value: function() {
                            this.carousel.off("refresh change", this.onRefresh), this.cleanup();
                        }
                    } ]), t;
                }();
                R.defaults = {
                    prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
                    nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
                    classNames: {
                        main: "carousel__nav",
                        button: "carousel__button",
                        next: "is-next",
                        prev: "is-prev"
                    }
                };
                var F = function() {
                    function t(e) {
                        o(this, t), this.carousel = e, this.$list = null, this.events = {
                            change: this.onChange.bind(this),
                            refresh: this.onRefresh.bind(this)
                        };
                    }
                    return s(t, [ {
                        key: "buildList",
                        value: function() {
                            var t = this;
                            if (!(this.carousel.pages.length < this.carousel.option("Dots.minSlideCount"))) {
                                var e = document.createElement("ol");
                                return e.classList.add("carousel__dots"), e.addEventListener("click", (function(e) {
                                    if ("page" in e.target.dataset) {
                                        e.preventDefault(), e.stopPropagation();
                                        var i = parseInt(e.target.dataset.page, 10), n = t.carousel;
                                        i !== n.page && (n.pages.length < 3 && n.option("infinite") ? n[0 == i ? "slidePrev" : "slideNext"]() : n.slideTo(i));
                                    }
                                })), this.$list = e, this.carousel.$container.appendChild(e), this.carousel.$container.classList.add("has-dots"), 
                                e;
                            }
                        }
                    }, {
                        key: "removeList",
                        value: function() {
                            this.$list && (this.$list.parentNode.removeChild(this.$list), this.$list = null), 
                            this.carousel.$container.classList.remove("has-dots");
                        }
                    }, {
                        key: "rebuildDots",
                        value: function() {
                            var t = this, e = this.$list, i = !!e, n = this.carousel.pages.length;
                            if (n < 2) i && this.removeList(); else {
                                i || (e = this.buildList());
                                var o = this.$list.children.length;
                                if (o > n) for (var a = n; a < o; a++) this.$list.removeChild(this.$list.lastChild); else {
                                    for (var s = function(e) {
                                        var i = document.createElement("li");
                                        i.classList.add("carousel__dot"), i.dataset.page = e, i.setAttribute("role", "button"), 
                                        i.setAttribute("tabindex", "0"), i.setAttribute("title", t.carousel.localize("{{GOTO}}", [ [ "%d", e + 1 ] ])), 
                                        i.addEventListener("keydown", (function(t) {
                                            var e, n = t.code;
                                            "Enter" === n || "NumpadEnter" === n ? e = i : "ArrowRight" === n ? e = i.nextSibling : "ArrowLeft" === n && (e = i.previousSibling), 
                                            e && e.click();
                                        })), t.$list.appendChild(i);
                                    }, r = o; r < n; r++) s(r);
                                    this.setActiveDot();
                                }
                            }
                        }
                    }, {
                        key: "setActiveDot",
                        value: function() {
                            if (this.$list) {
                                this.$list.childNodes.forEach((function(t) {
                                    t.classList.remove("is-selected");
                                }));
                                var t = this.$list.childNodes[this.carousel.page];
                                t && t.classList.add("is-selected");
                            }
                        }
                    }, {
                        key: "onChange",
                        value: function() {
                            this.setActiveDot();
                        }
                    }, {
                        key: "onRefresh",
                        value: function() {
                            this.rebuildDots();
                        }
                    }, {
                        key: "attach",
                        value: function() {
                            this.carousel.on(this.events);
                        }
                    }, {
                        key: "detach",
                        value: function() {
                            this.removeList(), this.carousel.off(this.events), this.carousel = null;
                        }
                    } ]), t;
                }(), N = function() {
                    function t(e) {
                        o(this, t), this.carousel = e, this.selectedIndex = null, this.friction = 0, this.onNavReady = this.onNavReady.bind(this), 
                        this.onNavClick = this.onNavClick.bind(this), this.onNavCreateSlide = this.onNavCreateSlide.bind(this), 
                        this.onTargetChange = this.onTargetChange.bind(this);
                    }
                    return s(t, [ {
                        key: "addAsTargetFor",
                        value: function(t) {
                            this.target = this.carousel, this.nav = t, this.attachEvents();
                        }
                    }, {
                        key: "addAsNavFor",
                        value: function(t) {
                            this.target = t, this.nav = this.carousel, this.attachEvents();
                        }
                    }, {
                        key: "attachEvents",
                        value: function() {
                            this.nav.options.initialSlide = this.target.options.initialPage, this.nav.on("ready", this.onNavReady), 
                            this.nav.on("createSlide", this.onNavCreateSlide), this.nav.on("Panzoom.click", this.onNavClick), 
                            this.target.on("change", this.onTargetChange), this.target.on("Panzoom.afterUpdate", this.onTargetChange);
                        }
                    }, {
                        key: "onNavReady",
                        value: function() {
                            this.onTargetChange(!0);
                        }
                    }, {
                        key: "onNavClick",
                        value: function(t, e, i) {
                            var n = i.target.closest(".carousel__slide");
                            if (n) {
                                i.stopPropagation();
                                var o = parseInt(n.dataset.index, 10), a = this.target.findPageForSlide(o);
                                this.target.page !== a && this.target.slideTo(a, {
                                    friction: this.friction
                                }), this.markSelectedSlide(o);
                            }
                        }
                    }, {
                        key: "onNavCreateSlide",
                        value: function(t, e) {
                            e.index === this.selectedIndex && this.markSelectedSlide(e.index);
                        }
                    }, {
                        key: "onTargetChange",
                        value: function() {
                            var t = this.target.pages[this.target.page].indexes[0], e = this.nav.findPageForSlide(t);
                            this.nav.slideTo(e), this.markSelectedSlide(t);
                        }
                    }, {
                        key: "markSelectedSlide",
                        value: function(t) {
                            this.selectedIndex = t, m(this.nav.slides).filter((function(t) {
                                return t.$el && t.$el.classList.remove("is-nav-selected");
                            }));
                            var e = this.nav.slides[t];
                            e && e.$el && e.$el.classList.add("is-nav-selected");
                        }
                    }, {
                        key: "attach",
                        value: function(t) {
                            var e = t.options.Sync;
                            (e.target || e.nav) && (e.target ? this.addAsNavFor(e.target) : e.nav && this.addAsTargetFor(e.nav), 
                            this.friction = e.friction);
                        }
                    }, {
                        key: "detach",
                        value: function() {
                            this.nav && (this.nav.off("ready", this.onNavReady), this.nav.off("Panzoom.click", this.onNavClick), 
                            this.nav.off("createSlide", this.onNavCreateSlide)), this.target && (this.target.off("Panzoom.afterUpdate", this.onTargetChange), 
                            this.target.off("change", this.onTargetChange));
                        }
                    } ]), t;
                }();
                N.defaults = {
                    friction: .92
                };
                var D = {
                    Navigation: R,
                    Dots: F,
                    Sync: N
                }, B = {
                    slides: [],
                    preload: 0,
                    slidesPerPage: "auto",
                    initialPage: null,
                    initialSlide: null,
                    friction: .92,
                    center: !0,
                    infinite: !0,
                    fill: !0,
                    dragFree: !1,
                    prefix: "",
                    classNames: {
                        viewport: "carousel__viewport",
                        track: "carousel__track",
                        slide: "carousel__slide",
                        slideSelected: "is-selected"
                    },
                    l10n: {
                        NEXT: "Next slide",
                        PREV: "Previous slide",
                        GOTO: "Go to slide #%d"
                    }
                }, H = function(t) {
                    l(n, t);
                    var e = f(n);
                    function n(t) {
                        var i, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (o(this, n), a = k(!0, {}, B, a), (i = e.call(this, a)).state = "init", i.$container = t, 
                        !(i.$container instanceof HTMLElement)) throw new Error("No root element provided");
                        return i.slideNext = I(i.slideNext.bind(d(i)), 250), i.slidePrev = I(i.slidePrev.bind(d(i)), 250), 
                        i.init(), t.__Carousel = d(i), i;
                    }
                    return s(n, [ {
                        key: "init",
                        value: function() {
                            this.pages = [], this.page = this.pageIndex = null, this.prevPage = this.prevPageIndex = null, 
                            this.attachPlugins(n.Plugins), this.trigger("init"), this.initLayout(), this.initSlides(), 
                            this.updateMetrics(), this.$track && this.pages.length && (this.$track.style.transform = "translate3d(".concat(-1 * this.pages[this.page].left, "px, 0px, 0) scale(1)")), 
                            this.manageSlideVisiblity(), this.initPanzoom(), this.state = "ready", this.trigger("ready");
                        }
                    }, {
                        key: "initLayout",
                        value: function() {
                            var t, e, i, n, o = this.option("prefix"), a = this.option("classNames");
                            (this.$viewport = this.option("viewport") || this.$container.querySelector(".".concat(o).concat(a.viewport)), 
                            this.$viewport) || (this.$viewport = document.createElement("div"), (t = this.$viewport.classList).add.apply(t, m((o + a.viewport).split(" "))), 
                            (e = this.$viewport).append.apply(e, m(this.$container.childNodes)), this.$container.appendChild(this.$viewport));
                            (this.$track = this.option("track") || this.$container.querySelector(".".concat(o).concat(a.track)), 
                            this.$track) || (this.$track = document.createElement("div"), (i = this.$track.classList).add.apply(i, m((o + a.track).split(" "))), 
                            (n = this.$track).append.apply(n, m(this.$viewport.childNodes)), this.$viewport.appendChild(this.$track));
                        }
                    }, {
                        key: "initSlides",
                        value: function() {
                            var t = this;
                            this.slides = [], this.$viewport.querySelectorAll(".".concat(this.option("prefix")).concat(this.option("classNames.slide"))).forEach((function(e) {
                                var i = {
                                    $el: e,
                                    isDom: !0
                                };
                                t.slides.push(i), t.trigger("createSlide", i, t.slides.length);
                            })), Array.isArray(this.options.slides) && (this.slides = k(!0, m(this.slides), this.options.slides));
                        }
                    }, {
                        key: "updateMetrics",
                        value: function() {
                            var t, e = this, n = 0, o = [];
                            this.slides.forEach((function(i, a) {
                                var s = i.$el, r = i.isDom || !t ? e.getSlideMetrics(s) : t;
                                i.index = a, i.width = r, i.left = n, t = r, n += r, o.push(a);
                            }));
                            var a = Math.max(this.$track.offsetWidth, S(this.$track.getBoundingClientRect().width)), s = getComputedStyle(this.$track);
                            a -= parseFloat(s.paddingLeft) + parseFloat(s.paddingRight), this.contentWidth = n, 
                            this.viewportWidth = a;
                            var r = [], l = this.option("slidesPerPage");
                            if (Number.isInteger(l) && n > a) for (var c = 0; c < this.slides.length; c += l) r.push({
                                indexes: o.slice(c, c + l),
                                slides: this.slides.slice(c, c + l)
                            }); else for (var h = 0, d = 0, u = 0; u < this.slides.length; u += 1) {
                                var f = this.slides[u];
                                (!r.length || d + f.width > a) && (r.push({
                                    indexes: [],
                                    slides: []
                                }), h = r.length - 1, d = 0), d += f.width, r[h].indexes.push(u), r[h].slides.push(f);
                            }
                            var v = this.option("center"), p = this.option("fill");
                            r.forEach((function(t, i) {
                                t.index = i, t.width = t.slides.reduce((function(t, e) {
                                    return t + e.width;
                                }), 0), t.left = t.slides[0].left, v && (t.left += .5 * (a - t.width) * -1), p && !e.option("infiniteX", e.option("infinite")) && n > a && (t.left = Math.max(t.left, 0), 
                                t.left = Math.min(t.left, n - a));
                            }));
                            var g, y = [];
                            r.forEach((function(t) {
                                var e = i({}, t);
                                g && e.left === g.left ? (g.width += e.width, g.slides = [].concat(m(g.slides), m(e.slides)), 
                                g.indexes = [].concat(m(g.indexes), m(e.indexes))) : (e.index = y.length, g = e, 
                                y.push(e));
                            })), this.pages = y;
                            var b = this.page;
                            if (null === b) {
                                var x = this.option("initialSlide");
                                b = null !== x ? this.findPageForSlide(x) : parseInt(this.option("initialPage", 0), 10) || 0, 
                                y[b] || (b = y.length && b > y.length ? y[y.length - 1].index : 0), this.page = b, 
                                this.pageIndex = b;
                            }
                            this.updatePanzoom(), this.trigger("refresh");
                        }
                    }, {
                        key: "getSlideMetrics",
                        value: function(t) {
                            if (!t) {
                                var e, i, n = this.slides[0];
                                if ((t = document.createElement("div")).dataset.isTestEl = 1, t.style.visibility = "hidden", 
                                (e = t.classList).add.apply(e, m((this.option("prefix") + this.option("classNames.slide")).split(" "))), 
                                n.customClass) (i = t.classList).add.apply(i, m(n.customClass.split(" ")));
                                this.$track.prepend(t);
                            }
                            var o = Math.max(t.offsetWidth, S(t.getBoundingClientRect().width)), a = t.currentStyle || window.getComputedStyle(t);
                            return o = o + (parseFloat(a.marginLeft) || 0) + (parseFloat(a.marginRight) || 0), 
                            t.dataset.isTestEl && t.remove(), o;
                        }
                    }, {
                        key: "findPageForSlide",
                        value: function(t) {
                            t = parseInt(t, 10) || 0;
                            var e = this.pages.find((function(e) {
                                return e.indexes.indexOf(t) > -1;
                            }));
                            return e ? e.index : null;
                        }
                    }, {
                        key: "slideNext",
                        value: function() {
                            this.slideTo(this.pageIndex + 1);
                        }
                    }, {
                        key: "slidePrev",
                        value: function() {
                            this.slideTo(this.pageIndex - 1);
                        }
                    }, {
                        key: "slideTo",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = e.x, n = void 0 === i ? -1 * this.setPage(t, !0) : i, o = e.y, a = void 0 === o ? 0 : o, s = e.friction, r = void 0 === s ? this.option("friction") : s;
                            this.Panzoom.content.x === n && !this.Panzoom.velocity.x && r || (this.Panzoom.panTo({
                                x: n,
                                y: a,
                                friction: r,
                                ignoreBounds: !0
                            }), "ready" === this.state && "ready" === this.Panzoom.state && this.trigger("settle"));
                        }
                    }, {
                        key: "initPanzoom",
                        value: function() {
                            var t = this;
                            this.Panzoom && this.Panzoom.destroy();
                            var e = k(!0, {}, {
                                content: this.$track,
                                wrapInner: !1,
                                resizeParent: !1,
                                zoom: !1,
                                click: !1,
                                lockAxis: "x",
                                x: this.pages.length ? -1 * this.pages[this.page].left : 0,
                                centerOnStart: !1,
                                textSelection: function() {
                                    return t.option("textSelection", !1);
                                },
                                panOnlyZoomed: function() {
                                    return this.content.width <= this.viewport.width;
                                }
                            }, this.option("Panzoom"));
                            this.Panzoom = new M(this.$container, e), this.Panzoom.on({
                                "*": function(e) {
                                    for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
                                    return t.trigger.apply(t, [ "Panzoom.".concat(e) ].concat(n));
                                },
                                afterUpdate: function() {
                                    t.updatePage();
                                },
                                beforeTransform: this.onBeforeTransform.bind(this),
                                touchEnd: this.onTouchEnd.bind(this),
                                endAnimation: function() {
                                    t.trigger("settle");
                                }
                            }), this.updateMetrics(), this.manageSlideVisiblity();
                        }
                    }, {
                        key: "updatePanzoom",
                        value: function() {
                            this.Panzoom && (this.Panzoom.content = i(i({}, this.Panzoom.content), {}, {
                                fitWidth: this.contentWidth,
                                origWidth: this.contentWidth,
                                width: this.contentWidth
                            }), this.pages.length > 1 && this.option("infiniteX", this.option("infinite")) ? this.Panzoom.boundX = null : this.pages.length && (this.Panzoom.boundX = {
                                from: -1 * this.pages[this.pages.length - 1].left,
                                to: -1 * this.pages[0].left
                            }), this.option("infiniteY", this.option("infinite")) ? this.Panzoom.boundY = null : this.Panzoom.boundY = {
                                from: 0,
                                to: 0
                            }, this.Panzoom.handleCursor());
                        }
                    }, {
                        key: "manageSlideVisiblity",
                        value: function() {
                            var t = this, e = this.contentWidth, i = this.viewportWidth, n = this.Panzoom ? -1 * this.Panzoom.content.x : this.pages.length ? this.pages[this.page].left : 0, o = this.option("preload"), a = this.option("infiniteX", this.option("infinite")), s = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-left")), r = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-right"));
                            this.slides.forEach((function(l) {
                                var c, h, d = 0;
                                c = n - s, h = n + i + r, c -= o * (i + s + r), h += o * (i + s + r);
                                var u = l.left + l.width > c && l.left < h;
                                c = n + e - s, h = n + e + i + r, c -= o * (i + s + r);
                                var f = a && l.left + l.width > c && l.left < h;
                                c = n - e - s, h = n - e + i + r, c -= o * (i + s + r);
                                var v = a && l.left + l.width > c && l.left < h;
                                f || u || v ? (t.createSlideEl(l), u && (d = 0), f && (d = -1), v && (d = 1), l.left + l.width > n && l.left <= n + i + r && (d = 0)) : t.removeSlideEl(l), 
                                l.hasDiff = d;
                            }));
                            var l = 0, c = 0;
                            this.slides.forEach((function(t, i) {
                                var n = 0;
                                t.$el ? (i !== l || t.hasDiff ? n = c + t.hasDiff * e : c = 0, t.$el.style.left = Math.abs(n) > .1 ? "".concat(c + t.hasDiff * e, "px") : "", 
                                l++) : c += t.width;
                            })), this.markSelectedSlides();
                        }
                    }, {
                        key: "createSlideEl",
                        value: function(t) {
                            var e;
                            if (t) {
                                if (!t.$el) {
                                    var i, n = document.createElement("div");
                                    if (n.dataset.index = t.index, (e = n.classList).add.apply(e, m((this.option("prefix") + this.option("classNames.slide")).split(" "))), 
                                    t.customClass) (i = n.classList).add.apply(i, m(t.customClass.split(" ")));
                                    t.html && (n.innerHTML = t.html);
                                    var o = [];
                                    this.slides.forEach((function(t, e) {
                                        t.$el && o.push(e);
                                    }));
                                    var a = t.index, s = null;
                                    if (o.length) {
                                        var r = o.reduce((function(t, e) {
                                            return Math.abs(e - a) < Math.abs(t - a) ? e : t;
                                        }));
                                        s = this.slides[r];
                                    }
                                    return this.$track.insertBefore(n, s && s.$el ? s.index < t.index ? s.$el.nextSibling : s.$el : null), 
                                    t.$el = n, this.trigger("createSlide", t, a), t;
                                }
                                var l, c = t.$el.dataset.index;
                                c && parseInt(c, 10) === t.index || (t.$el.dataset.index = t.index, t.$el.querySelectorAll("[data-lazy-srcset]").forEach((function(t) {
                                    t.srcset = t.dataset.lazySrcset;
                                })), t.$el.querySelectorAll("[data-lazy-src]").forEach((function(t) {
                                    var e = t.dataset.lazySrc;
                                    t instanceof HTMLImageElement ? t.src = e : t.style.backgroundImage = "url('".concat(e, "')");
                                })), (l = t.$el.dataset.lazySrc) && (t.$el.style.backgroundImage = "url('".concat(l, "')")), 
                                t.state = "ready");
                            }
                        }
                    }, {
                        key: "removeSlideEl",
                        value: function(t) {
                            t.$el && !t.isDom && (this.trigger("removeSlide", t), t.$el.remove(), t.$el = null);
                        }
                    }, {
                        key: "markSelectedSlides",
                        value: function() {
                            var t = this, e = this.option("classNames.slideSelected"), i = "aria-hidden";
                            this.slides.forEach((function(n, o) {
                                var a = n.$el;
                                if (a) {
                                    var s = t.pages[t.page];
                                    s && s.indexes && s.indexes.indexOf(o) > -1 ? (e && !a.classList.contains(e) && (a.classList.add(e), 
                                    t.trigger("selectSlide", n)), a.removeAttribute(i)) : (e && a.classList.contains(e) && (a.classList.remove(e), 
                                    t.trigger("unselectSlide", n)), a.setAttribute(i, !0));
                                }
                            }));
                        }
                    }, {
                        key: "updatePage",
                        value: function() {
                            this.updateMetrics(), this.slideTo(this.page, {
                                friction: 0
                            });
                        }
                    }, {
                        key: "onBeforeTransform",
                        value: function() {
                            this.option("infiniteX", this.option("infinite")) && this.manageInfiniteTrack(), 
                            this.manageSlideVisiblity();
                        }
                    }, {
                        key: "manageInfiniteTrack",
                        value: function() {
                            var t = this.contentWidth, e = this.viewportWidth;
                            if (!(!this.option("infiniteX", this.option("infinite")) || this.pages.length < 2 || t < e)) {
                                var i = this.Panzoom, n = !1;
                                return i.content.x < -1 * (t - e) && (i.content.x += t, this.pageIndex = this.pageIndex - this.pages.length, 
                                n = !0), i.content.x > e && (i.content.x -= t, this.pageIndex = this.pageIndex + this.pages.length, 
                                n = !0), n && "pointerdown" === i.state && i.resetDragPosition(), n;
                            }
                        }
                    }, {
                        key: "onTouchEnd",
                        value: function(t, e) {
                            var i = this.option("dragFree");
                            if (!i && this.pages.length > 1 && t.dragOffset.time < 350 && Math.abs(t.dragOffset.y) < 1 && Math.abs(t.dragOffset.x) > 5) this[t.dragOffset.x < 0 ? "slideNext" : "slidePrev"](); else if (i) {
                                var n = g(this.getPageFromPosition(-1 * t.transform.x), 2)[1];
                                this.setPage(n);
                            } else this.slideToClosest();
                        }
                    }, {
                        key: "slideToClosest",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = this.getPageFromPosition(-1 * this.Panzoom.content.x), i = g(e, 2), n = i[1];
                            this.slideTo(n, t);
                        }
                    }, {
                        key: "getPageFromPosition",
                        value: function(t) {
                            var e = this.pages.length;
                            this.option("center") && (t += .5 * this.viewportWidth);
                            var i = Math.floor(t / this.contentWidth);
                            t -= i * this.contentWidth;
                            var n = this.slides.find((function(e) {
                                return e.left <= t && e.left + e.width > t;
                            }));
                            if (n) {
                                var o = this.findPageForSlide(n.index);
                                return [ o, o + i * e ];
                            }
                            return [ 0, 0 ];
                        }
                    }, {
                        key: "setPage",
                        value: function(t, e) {
                            var i = 0, n = parseInt(t, 10) || 0, o = this.page, a = this.pageIndex, s = this.pages.length, r = this.contentWidth, l = this.viewportWidth;
                            if (t = (n % s + s) % s, this.option("infiniteX", this.option("infinite")) && r > l) {
                                var c = Math.floor(n / s) || 0, h = r;
                                if (i = this.pages[t].left + c * h, !0 === e && s > 2) {
                                    var d = -1 * this.Panzoom.content.x, u = i - h, f = i + h, v = Math.abs(d - i), p = Math.abs(d - u), g = Math.abs(d - f);
                                    g < v && g <= p ? (i = f, n += s) : p < v && p < g && (i = u, n -= s);
                                }
                            } else t = n = Math.max(0, Math.min(n, s - 1)), i = this.pages.length ? this.pages[t].left : 0;
                            return this.page = t, this.pageIndex = n, null !== o && t !== o && (this.prevPage = o, 
                            this.prevPageIndex = a, this.trigger("change", t, o)), i;
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var t = this;
                            this.state = "destroy", this.slides.forEach((function(e) {
                                t.removeSlideEl(e);
                            })), this.slides = [], this.Panzoom.destroy(), this.detachPlugins();
                        }
                    } ]), n;
                }(O);
                H.version = "4.0.31", H.Plugins = D;
                var W = !("undefined" == typeof window || !window.document || !window.document.createElement), j = null, X = [ "a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])' ], q = function(t) {
                    if (t && W) {
                        null === j && document.createElement("div").focus({
                            get preventScroll() {
                                return j = !0, !1;
                            }
                        });
                        try {
                            if (t.setActive) t.setActive(); else if (j) t.focus({
                                preventScroll: !0
                            }); else {
                                var e = window.pageXOffset || document.body.scrollTop, i = window.pageYOffset || document.body.scrollLeft;
                                t.focus(), document.body.scrollTo({
                                    top: e,
                                    left: i,
                                    behavior: "auto"
                                });
                            }
                        } catch (t) {}
                    }
                }, U = function() {
                    function t(e) {
                        o(this, t), this.fancybox = e, this.viewport = null, this.pendingUpdate = null;
                        for (var i = 0, n = [ "onReady", "onResize", "onTouchstart", "onTouchmove" ]; i < n.length; i++) {
                            var a = n[i];
                            this[a] = this[a].bind(this);
                        }
                    }
                    return s(t, [ {
                        key: "onReady",
                        value: function() {
                            var t = window.visualViewport;
                            t && (this.viewport = t, this.startY = 0, t.addEventListener("resize", this.onResize), 
                            this.updateViewport()), window.addEventListener("touchstart", this.onTouchstart, {
                                passive: !1
                            }), window.addEventListener("touchmove", this.onTouchmove, {
                                passive: !1
                            }), window.addEventListener("wheel", this.onWheel, {
                                passive: !1
                            });
                        }
                    }, {
                        key: "onResize",
                        value: function() {
                            this.updateViewport();
                        }
                    }, {
                        key: "updateViewport",
                        value: function() {
                            var t = this.fancybox, e = this.viewport, i = e.scale || 1, n = t.$container;
                            if (n) {
                                var o = "", a = "", s = "";
                                i - 1 > .1 && (o = "".concat(e.width * i, "px"), a = "".concat(e.height * i, "px"), 
                                s = "translate3d(".concat(e.offsetLeft, "px, ").concat(e.offsetTop, "px, 0) scale(").concat(1 / i, ")")), 
                                n.style.width = o, n.style.height = a, n.style.transform = s;
                            }
                        }
                    }, {
                        key: "onTouchstart",
                        value: function(t) {
                            this.startY = t.touches ? t.touches[0].screenY : t.screenY;
                        }
                    }, {
                        key: "onTouchmove",
                        value: function(t) {
                            var e = this.startY, i = window.innerWidth / window.document.documentElement.clientWidth;
                            if (t.cancelable && !(t.touches.length > 1 || 1 !== i)) {
                                var n = C(t.composedPath()[0]);
                                if (n) {
                                    var o = window.getComputedStyle(n), a = parseInt(o.getPropertyValue("height"), 10), s = t.touches ? t.touches[0].screenY : t.screenY, r = e <= s && 0 === n.scrollTop, l = e >= s && n.scrollHeight - n.scrollTop === a;
                                    (r || l) && t.preventDefault();
                                } else t.preventDefault();
                            }
                        }
                    }, {
                        key: "onWheel",
                        value: function(t) {
                            C(t.composedPath()[0]) || t.preventDefault();
                        }
                    }, {
                        key: "cleanup",
                        value: function() {
                            this.pendingUpdate && (cancelAnimationFrame(this.pendingUpdate), this.pendingUpdate = null);
                            var t = this.viewport;
                            t && (t.removeEventListener("resize", this.onResize), this.viewport = null), window.removeEventListener("touchstart", this.onTouchstart, !1), 
                            window.removeEventListener("touchmove", this.onTouchmove, !1), window.removeEventListener("wheel", this.onWheel, {
                                passive: !1
                            });
                        }
                    }, {
                        key: "attach",
                        value: function() {
                            this.fancybox.on("initLayout", this.onReady);
                        }
                    }, {
                        key: "detach",
                        value: function() {
                            this.fancybox.off("initLayout", this.onReady), this.cleanup();
                        }
                    } ]), t;
                }(), Y = function() {
                    function t(e) {
                        o(this, t), this.fancybox = e, this.$container = null, this.state = "init";
                        for (var i = 0, n = [ "onPrepare", "onClosing", "onKeydown" ]; i < n.length; i++) {
                            var a = n[i];
                            this[a] = this[a].bind(this);
                        }
                        this.events = {
                            prepare: this.onPrepare,
                            closing: this.onClosing,
                            keydown: this.onKeydown
                        };
                    }
                    return s(t, [ {
                        key: "onPrepare",
                        value: function() {
                            this.getSlides().length < this.fancybox.option("Thumbs.minSlideCount") ? this.state = "disabled" : !0 === this.fancybox.option("Thumbs.autoStart") && this.fancybox.Carousel.Panzoom.content.height >= this.fancybox.option("Thumbs.minScreenHeight") && this.build();
                        }
                    }, {
                        key: "onClosing",
                        value: function() {
                            this.Carousel && this.Carousel.Panzoom.detachEvents();
                        }
                    }, {
                        key: "onKeydown",
                        value: function(t, e) {
                            e === t.option("Thumbs.key") && this.toggle();
                        }
                    }, {
                        key: "build",
                        value: function() {
                            var t = this;
                            if (!this.$container) {
                                var e = document.createElement("div");
                                e.classList.add("fancybox__thumbs"), this.fancybox.$carousel.parentNode.insertBefore(e, this.fancybox.$carousel.nextSibling), 
                                this.Carousel = new H(e, k(!0, {
                                    Dots: !1,
                                    Navigation: !1,
                                    Sync: {
                                        friction: 0
                                    },
                                    infinite: !1,
                                    center: !0,
                                    fill: !0,
                                    dragFree: !0,
                                    slidesPerPage: 1,
                                    preload: 1
                                }, this.fancybox.option("Thumbs.Carousel"), {
                                    Sync: {
                                        target: this.fancybox.Carousel
                                    },
                                    slides: this.getSlides()
                                })), this.Carousel.Panzoom.on("wheel", (function(e, i) {
                                    i.preventDefault(), t.fancybox[i.deltaY < 0 ? "prev" : "next"]();
                                })), this.$container = e, this.state = "visible";
                            }
                        }
                    }, {
                        key: "getSlides",
                        value: function() {
                            var t, e = [], i = x(this.fancybox.items);
                            try {
                                for (i.s(); !(t = i.n()).done; ) {
                                    var n = t.value, o = n.thumb;
                                    o && e.push({
                                        html: this.fancybox.option("Thumbs.tpl").replace(/\{\{src\}\}/gi, o),
                                        customClass: "has-thumb has-".concat(n.type || "image")
                                    });
                                }
                            } catch (t) {
                                i.e(t);
                            } finally {
                                i.f();
                            }
                            return e;
                        }
                    }, {
                        key: "toggle",
                        value: function() {
                            "visible" === this.state ? this.hide() : "hidden" === this.state ? this.show() : this.build();
                        }
                    }, {
                        key: "show",
                        value: function() {
                            "hidden" === this.state && (this.$container.style.display = "", this.Carousel.Panzoom.attachEvents(), 
                            this.state = "visible");
                        }
                    }, {
                        key: "hide",
                        value: function() {
                            "visible" === this.state && (this.Carousel.Panzoom.detachEvents(), this.$container.style.display = "none", 
                            this.state = "hidden");
                        }
                    }, {
                        key: "cleanup",
                        value: function() {
                            this.Carousel && (this.Carousel.destroy(), this.Carousel = null), this.$container && (this.$container.remove(), 
                            this.$container = null), this.state = "init";
                        }
                    }, {
                        key: "attach",
                        value: function() {
                            this.fancybox.on(this.events);
                        }
                    }, {
                        key: "detach",
                        value: function() {
                            this.fancybox.off(this.events), this.cleanup();
                        }
                    } ]), t;
                }();
                Y.defaults = {
                    minSlideCount: 2,
                    minScreenHeight: 500,
                    autoStart: !0,
                    key: "t",
                    Carousel: {},
                    tpl: '<div class="fancybox__thumb" style="background-image:url(\'{{src}}\')"></div>'
                };
                var V = function(t, e) {
                    for (var i = new URL(t), n = new URLSearchParams(i.search), o = new URLSearchParams, a = 0, s = [].concat(m(n), m(Object.entries(e))); a < s.length; a++) {
                        var r = g(s[a], 2), l = r[0], c = r[1];
                        "t" === l ? o.set("start", parseInt(c)) : o.set(l, c);
                    }
                    o = o.toString();
                    var h = t.match(/#t=((.*)?\d+s)/);
                    return h && (o += "#t=".concat(h[1])), o;
                }, Z = {
                    video: {
                        autoplay: !0,
                        ratio: 16 / 9
                    },
                    youtube: {
                        autohide: 1,
                        fs: 1,
                        rel: 0,
                        hd: 1,
                        wmode: "transparent",
                        enablejsapi: 1,
                        html5: 1
                    },
                    vimeo: {
                        hd: 1,
                        show_title: 1,
                        show_byline: 1,
                        show_portrait: 0,
                        fullscreen: 1
                    },
                    html5video: {
                        tpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
                        format: ""
                    }
                }, G = function() {
                    function t(e) {
                        o(this, t), this.fancybox = e;
                        for (var i = 0, n = [ "onInit", "onReady", "onCreateSlide", "onRemoveSlide", "onSelectSlide", "onUnselectSlide", "onRefresh", "onMessage" ]; i < n.length; i++) {
                            var a = n[i];
                            this[a] = this[a].bind(this);
                        }
                        this.events = {
                            init: this.onInit,
                            ready: this.onReady,
                            "Carousel.createSlide": this.onCreateSlide,
                            "Carousel.removeSlide": this.onRemoveSlide,
                            "Carousel.selectSlide": this.onSelectSlide,
                            "Carousel.unselectSlide": this.onUnselectSlide,
                            "Carousel.refresh": this.onRefresh
                        };
                    }
                    return s(t, [ {
                        key: "onInit",
                        value: function() {
                            var t, e = x(this.fancybox.items);
                            try {
                                for (e.s(); !(t = e.n()).done; ) {
                                    var i = t.value;
                                    this.processType(i);
                                }
                            } catch (t) {
                                e.e(t);
                            } finally {
                                e.f();
                            }
                        }
                    }, {
                        key: "processType",
                        value: function(t) {
                            if (t.html) return t.src = t.html, t.type = "html", void delete t.html;
                            var e = t.src || "", i = t.type || this.fancybox.options.type, n = null;
                            if (!e || "string" == typeof e) {
                                if (n = e.match(/(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
                                    var o = V(e, this.fancybox.option("Html.youtube")), a = encodeURIComponent(n[1]);
                                    t.videoId = a, t.src = "https://www.youtube-nocookie.com/embed/".concat(a, "?").concat(o), 
                                    t.thumb = t.thumb || "https://i.ytimg.com/vi/".concat(a, "/mqdefault.jpg"), t.vendor = "youtube", 
                                    i = "video";
                                } else if (n = e.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/)) {
                                    var s = V(e, this.fancybox.option("Html.vimeo")), r = encodeURIComponent(n[1]);
                                    t.videoId = r, t.src = "https://player.vimeo.com/video/".concat(r, "?").concat(s), 
                                    t.vendor = "vimeo", i = "video";
                                } else (n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t.src = "//maps.google.".concat(n[1], "/?ll=").concat((n[2] ? n[2] + "&z=" + Math.floor(n[3]) + (n[4] ? n[4].replace(/^\//, "&") : "") : n[4] + "").replace(/\?/, "&"), "&output=").concat(n[4] && n[4].indexOf("layer=c") > 0 ? "svembed" : "embed"), 
                                i = "map") : (n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t.src = "//maps.google.".concat(n[1], "/maps?q=").concat(n[2].replace("query=", "q=").replace("api=1", ""), "&output=embed"), 
                                i = "map");
                                i || ("#" === e.charAt(0) ? i = "inline" : (n = e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i = "html5video", 
                                t.format = t.format || "video/" + ("ogv" === n[1] ? "ogg" : n[1])) : e.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = "image" : e.match(/\.(pdf)((\?|#).*)?$/i) && (i = "pdf")), 
                                t.type = i || this.fancybox.option("defaultType", "image"), "html5video" !== i && "video" !== i || (t.video = k({}, this.fancybox.option("Html.video"), t.video), 
                                t._width && t._height ? t.ratio = parseFloat(t._width) / parseFloat(t._height) : t.ratio = t.ratio || t.video.ratio || Z.video.ratio);
                            }
                        }
                    }, {
                        key: "onReady",
                        value: function() {
                            var t = this;
                            this.fancybox.Carousel.slides.forEach((function(e) {
                                e.$el && (t.setContent(e), e.index === t.fancybox.getSlide().index && t.playVideo(e));
                            }));
                        }
                    }, {
                        key: "onCreateSlide",
                        value: function(t, e, i) {
                            "ready" === this.fancybox.state && this.setContent(i);
                        }
                    }, {
                        key: "loadInlineContent",
                        value: function(t) {
                            var e;
                            if (t.src instanceof HTMLElement) e = t.src; else if ("string" == typeof t.src) {
                                var i = t.src.split("#", 2), n = 2 === i.length && "" === i[0] ? i[1] : i[0];
                                e = document.getElementById(n);
                            }
                            if (e) {
                                if ("clone" === t.type || e.$placeHolder) {
                                    var o = (e = e.cloneNode(!0)).getAttribute("id");
                                    o = o ? "".concat(o, "--clone") : "clone-".concat(this.fancybox.id, "-").concat(t.index), 
                                    e.setAttribute("id", o);
                                } else {
                                    var a = document.createElement("div");
                                    a.classList.add("fancybox-placeholder"), e.parentNode.insertBefore(a, e), e.$placeHolder = a;
                                }
                                this.fancybox.setContent(t, e);
                            } else this.fancybox.setError(t, "{{ELEMENT_NOT_FOUND}}");
                        }
                    }, {
                        key: "loadAjaxContent",
                        value: function(t) {
                            var e = this.fancybox, i = new XMLHttpRequest;
                            e.showLoading(t), i.onreadystatechange = function() {
                                i.readyState === XMLHttpRequest.DONE && "ready" === e.state && (e.hideLoading(t), 
                                200 === i.status ? e.setContent(t, i.responseText) : e.setError(t, 404 === i.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"));
                            };
                            var n = t.ajax || null;
                            i.open(n ? "POST" : "GET", t.src), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), 
                            i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.send(n), t.xhr = i;
                        }
                    }, {
                        key: "loadIframeContent",
                        value: function(t) {
                            var e = this, i = this.fancybox, n = document.createElement("iframe");
                            if (n.className = "fancybox__iframe", n.setAttribute("id", "fancybox__iframe_".concat(i.id, "_").concat(t.index)), 
                            n.setAttribute("allow", "autoplay; fullscreen"), n.setAttribute("scrolling", "auto"), 
                            t.$iframe = n, "iframe" !== t.type || !1 === t.preload) return n.setAttribute("src", t.src), 
                            this.fancybox.setContent(t, n), void this.resizeIframe(t);
                            i.showLoading(t);
                            var o = document.createElement("div");
                            o.style.visibility = "hidden", this.fancybox.setContent(t, o), o.appendChild(n), 
                            n.onerror = function() {
                                i.setError(t, "{{IFRAME_ERROR}}");
                            }, n.onload = function() {
                                i.hideLoading(t);
                                var o = !1;
                                n.isReady || (n.isReady = !0, o = !0), n.src.length && (n.parentNode.style.visibility = "", 
                                e.resizeIframe(t), o && i.revealContent(t));
                            }, n.setAttribute("src", t.src);
                        }
                    }, {
                        key: "setAspectRatio",
                        value: function(t) {
                            var e = t.$content, i = t.ratio;
                            if (e) {
                                var n = t._width, o = t._height;
                                if (i || n && o) {
                                    Object.assign(e.style, {
                                        width: n && o ? "100%" : "",
                                        height: n && o ? "100%" : "",
                                        maxWidth: "",
                                        maxHeight: ""
                                    });
                                    var a = e.offsetWidth, s = e.offsetHeight;
                                    if (o = o || s, (n = n || a) > a || o > s) {
                                        var r = Math.min(a / n, s / o);
                                        n *= r, o *= r;
                                    }
                                    Math.abs(n / o - i) > .01 && (i < n / o ? n = o * i : o = n / i), Object.assign(e.style, {
                                        width: "".concat(n, "px"),
                                        height: "".concat(o, "px")
                                    });
                                }
                            }
                        }
                    }, {
                        key: "resizeIframe",
                        value: function(t) {
                            var e = t.$iframe;
                            if (e) {
                                var i = t._width || 0, n = t._height || 0;
                                i && n && (t.autoSize = !1);
                                var o = e.parentNode, a = o && o.style;
                                if (!1 !== t.preload && !1 !== t.autoSize && a) try {
                                    var s = window.getComputedStyle(o), r = parseFloat(s.paddingLeft) + parseFloat(s.paddingRight), l = parseFloat(s.paddingTop) + parseFloat(s.paddingBottom), c = e.contentWindow.document, h = c.getElementsByTagName("html")[0], d = c.body;
                                    a.width = "", d.style.overflow = "hidden", i = i || h.scrollWidth + r, a.width = "".concat(i, "px"), 
                                    d.style.overflow = "", a.flex = "0 0 auto", a.height = "".concat(d.scrollHeight, "px"), 
                                    n = h.scrollHeight + l;
                                } catch (t) {}
                                if (i || n) {
                                    var u = {
                                        flex: "0 1 auto"
                                    };
                                    i && (u.width = "".concat(i, "px")), n && (u.height = "".concat(n, "px")), Object.assign(a, u);
                                }
                            }
                        }
                    }, {
                        key: "onRefresh",
                        value: function(t, e) {
                            var i = this;
                            e.slides.forEach((function(t) {
                                t.$el && (t.$iframe && i.resizeIframe(t), t.ratio && i.setAspectRatio(t));
                            }));
                        }
                    }, {
                        key: "setContent",
                        value: function(t) {
                            if (t && !t.isDom) {
                                switch (t.type) {
                                  case "html":
                                    this.fancybox.setContent(t, t.src);
                                    break;

                                  case "html5video":
                                    this.fancybox.setContent(t, this.fancybox.option("Html.html5video.tpl").replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.format || t.html5video && t.html5video.format || "").replace("{{poster}}", t.poster || t.thumb || ""));
                                    break;

                                  case "inline":
                                  case "clone":
                                    this.loadInlineContent(t);
                                    break;

                                  case "ajax":
                                    this.loadAjaxContent(t);
                                    break;

                                  case "pdf":
                                  case "video":
                                  case "map":
                                    t.preload = !1;

                                  case "iframe":
                                    this.loadIframeContent(t);
                                }
                                t.ratio && this.setAspectRatio(t);
                            }
                        }
                    }, {
                        key: "onSelectSlide",
                        value: function(t, e, i) {
                            "ready" === t.state && this.playVideo(i);
                        }
                    }, {
                        key: "playVideo",
                        value: function(t) {
                            if ("html5video" === t.type && t.video.autoplay) try {
                                var e = t.$el.querySelector("video");
                                if (e) {
                                    var i = e.play();
                                    void 0 !== i && i.then((function() {})).catch((function(t) {
                                        e.muted = !0, e.play();
                                    }));
                                }
                            } catch (t) {}
                            if ("video" === t.type && t.$iframe && t.$iframe.contentWindow) !function e() {
                                if ("done" === t.state && t.$iframe && t.$iframe.contentWindow) {
                                    var i;
                                    if (t.$iframe.isReady) return t.video && t.video.autoplay && (i = "youtube" == t.vendor ? {
                                        event: "command",
                                        func: "playVideo"
                                    } : {
                                        method: "play",
                                        value: "true"
                                    }), void (i && t.$iframe.contentWindow.postMessage(JSON.stringify(i), "*"));
                                    "youtube" === t.vendor && (i = {
                                        event: "listening",
                                        id: t.$iframe.getAttribute("id")
                                    }, t.$iframe.contentWindow.postMessage(JSON.stringify(i), "*"));
                                }
                                t.poller = setTimeout(e, 250);
                            }();
                        }
                    }, {
                        key: "onUnselectSlide",
                        value: function(t, e, i) {
                            if ("html5video" !== i.type) {
                                var n = !1;
                                "vimeo" == i.vendor ? n = {
                                    method: "pause",
                                    value: "true"
                                } : "youtube" === i.vendor && (n = {
                                    event: "command",
                                    func: "pauseVideo"
                                }), n && i.$iframe && i.$iframe.contentWindow && i.$iframe.contentWindow.postMessage(JSON.stringify(n), "*"), 
                                clearTimeout(i.poller);
                            } else try {
                                i.$el.querySelector("video").pause();
                            } catch (t) {}
                        }
                    }, {
                        key: "onRemoveSlide",
                        value: function(t, e, i) {
                            i.xhr && (i.xhr.abort(), i.xhr = null), i.$iframe && (i.$iframe.onload = i.$iframe.onerror = null, 
                            i.$iframe.src = "//about:blank", i.$iframe = null);
                            var n = i.$content;
                            "inline" === i.type && n && (n.classList.remove("fancybox__content"), "none" !== n.style.display && (n.style.display = "none")), 
                            i.$closeButton && (i.$closeButton.remove(), i.$closeButton = null);
                            var o = n && n.$placeHolder;
                            o && (o.parentNode.insertBefore(n, o), o.remove(), n.$placeHolder = null);
                        }
                    }, {
                        key: "onMessage",
                        value: function(t) {
                            try {
                                var e = JSON.parse(t.data);
                                if ("https://player.vimeo.com" === t.origin) {
                                    if ("ready" === e.event) {
                                        var i, n = x(document.getElementsByClassName("fancybox__iframe"));
                                        try {
                                            for (n.s(); !(i = n.n()).done; ) {
                                                var o = i.value;
                                                o.contentWindow === t.source && (o.isReady = 1);
                                            }
                                        } catch (t) {
                                            n.e(t);
                                        } finally {
                                            n.f();
                                        }
                                    }
                                } else "https://www.youtube-nocookie.com" === t.origin && "onReady" === e.event && (document.getElementById(e.id).isReady = 1);
                            } catch (t) {}
                        }
                    }, {
                        key: "attach",
                        value: function() {
                            this.fancybox.on(this.events), window.addEventListener("message", this.onMessage, !1);
                        }
                    }, {
                        key: "detach",
                        value: function() {
                            this.fancybox.off(this.events), window.removeEventListener("message", this.onMessage, !1);
                        }
                    } ]), t;
                }();
                G.defaults = Z;
                var K = function() {
                    function t(e) {
                        o(this, t), this.fancybox = e;
                        for (var i = 0, n = [ "onReady", "onClosing", "onDone", "onPageChange", "onCreateSlide", "onRemoveSlide", "onImageStatusChange" ]; i < n.length; i++) {
                            var a = n[i];
                            this[a] = this[a].bind(this);
                        }
                        this.events = {
                            ready: this.onReady,
                            closing: this.onClosing,
                            done: this.onDone,
                            "Carousel.change": this.onPageChange,
                            "Carousel.createSlide": this.onCreateSlide,
                            "Carousel.removeSlide": this.onRemoveSlide
                        };
                    }
                    return s(t, [ {
                        key: "onReady",
                        value: function() {
                            var t = this;
                            this.fancybox.Carousel.slides.forEach((function(e) {
                                e.$el && t.setContent(e);
                            }));
                        }
                    }, {
                        key: "onDone",
                        value: function(t, e) {
                            this.handleCursor(e);
                        }
                    }, {
                        key: "onClosing",
                        value: function(t) {
                            clearTimeout(this.clickTimer), this.clickTimer = null, t.Carousel.slides.forEach((function(t) {
                                t.$image && (t.state = "destroy"), t.Panzoom && t.Panzoom.detachEvents();
                            })), "closing" === this.fancybox.state && this.canZoom(t.getSlide()) && this.zoomOut();
                        }
                    }, {
                        key: "onCreateSlide",
                        value: function(t, e, i) {
                            "ready" === this.fancybox.state && this.setContent(i);
                        }
                    }, {
                        key: "onRemoveSlide",
                        value: function(t, e, i) {
                            i.$image && (i.$el.classList.remove(t.option("Image.canZoomInClass")), i.$image.remove(), 
                            i.$image = null), i.Panzoom && (i.Panzoom.destroy(), i.Panzoom = null), i.$el && i.$el.dataset && delete i.$el.dataset.imageFit;
                        }
                    }, {
                        key: "setContent",
                        value: function(t) {
                            var e = this;
                            if (!(t.isDom || t.html || t.type && "image" !== t.type || t.$image)) {
                                t.type = "image", t.state = "loading";
                                var i = document.createElement("div");
                                i.style.visibility = "hidden";
                                var n = document.createElement("img");
                                n.addEventListener("load", (function(i) {
                                    i.stopImmediatePropagation(), e.onImageStatusChange(t);
                                })), n.addEventListener("error", (function() {
                                    e.onImageStatusChange(t);
                                })), n.src = t.src, n.alt = "", n.draggable = !1, n.classList.add("fancybox__image"), 
                                t.srcset && n.setAttribute("srcset", t.srcset), t.sizes && n.setAttribute("sizes", t.sizes), 
                                t.$image = n;
                                var o = this.fancybox.option("Image.wrap");
                                if (o) {
                                    var a = document.createElement("div");
                                    a.classList.add("string" == typeof o ? o : "fancybox__image-wrap"), a.appendChild(n), 
                                    i.appendChild(a), t.$wrap = a;
                                } else i.appendChild(n);
                                t.$el.dataset.imageFit = this.fancybox.option("Image.fit"), this.fancybox.setContent(t, i), 
                                n.complete || n.error ? this.onImageStatusChange(t) : this.fancybox.showLoading(t);
                            }
                        }
                    }, {
                        key: "onImageStatusChange",
                        value: function(t) {
                            var e = this, i = t.$image;
                            i && "loading" === t.state && (i.complete && i.naturalWidth && i.naturalHeight ? (this.fancybox.hideLoading(t), 
                            "contain" === this.fancybox.option("Image.fit") && this.initSlidePanzoom(t), t.$el.addEventListener("wheel", (function(i) {
                                return e.onWheel(t, i);
                            }), {
                                passive: !1
                            }), t.$content.addEventListener("click", (function(i) {
                                return e.onClick(t, i);
                            }), {
                                passive: !1
                            }), this.revealContent(t)) : this.fancybox.setError(t, "{{IMAGE_ERROR}}"));
                        }
                    }, {
                        key: "initSlidePanzoom",
                        value: function(t) {
                            var e = this;
                            t.Panzoom || (t.Panzoom = new M(t.$el, k(!0, this.fancybox.option("Image.Panzoom", {}), {
                                viewport: t.$wrap,
                                content: t.$image,
                                width: t._width,
                                height: t._height,
                                wrapInner: !1,
                                textSelection: !0,
                                touch: this.fancybox.option("Image.touch"),
                                panOnlyZoomed: !0,
                                click: !1,
                                wheel: !1
                            })), t.Panzoom.on("startAnimation", (function() {
                                e.fancybox.trigger("Image.startAnimation", t);
                            })), t.Panzoom.on("endAnimation", (function() {
                                "zoomIn" === t.state && e.fancybox.done(t), e.handleCursor(t), e.fancybox.trigger("Image.endAnimation", t);
                            })), t.Panzoom.on("afterUpdate", (function() {
                                e.handleCursor(t), e.fancybox.trigger("Image.afterUpdate", t);
                            })));
                        }
                    }, {
                        key: "revealContent",
                        value: function(t) {
                            null === this.fancybox.Carousel.prevPage && t.index === this.fancybox.options.startIndex && this.canZoom(t) ? this.zoomIn() : this.fancybox.revealContent(t);
                        }
                    }, {
                        key: "getZoomInfo",
                        value: function(t) {
                            var e = t.$thumb.getBoundingClientRect(), i = e.width, n = e.height, o = t.$content.getBoundingClientRect(), a = o.width, s = o.height, r = o.top - e.top, l = o.left - e.left, c = this.fancybox.option("Image.zoomOpacity");
                            return "auto" === c && (c = Math.abs(i / n - a / s) > .1), {
                                top: r,
                                left: l,
                                scale: a && i ? i / a : 1,
                                opacity: c
                            };
                        }
                    }, {
                        key: "canZoom",
                        value: function(t) {
                            var e = this.fancybox, i = e.$container;
                            if (window.visualViewport && 1 !== window.visualViewport.scale) return !1;
                            if (t.Panzoom && !t.Panzoom.content.width) return !1;
                            if (!e.option("Image.zoom") || "contain" !== e.option("Image.fit")) return !1;
                            var n = t.$thumb;
                            if (!n || "loading" === t.state) return !1;
                            i.classList.add("fancybox__no-click");
                            var o, a = n.getBoundingClientRect();
                            if (this.fancybox.option("Image.ignoreCoveredThumbnail")) {
                                var s = document.elementFromPoint(a.left + 1, a.top + 1) === n, r = document.elementFromPoint(a.right - 1, a.bottom - 1) === n;
                                o = s && r;
                            } else o = document.elementFromPoint(a.left + .5 * a.width, a.top + .5 * a.height) === n;
                            return i.classList.remove("fancybox__no-click"), o;
                        }
                    }, {
                        key: "zoomIn",
                        value: function() {
                            var t = this.fancybox, e = t.getSlide(), i = e.Panzoom, n = this.getZoomInfo(e), o = n.top, a = n.left, s = n.scale, r = n.opacity;
                            t.trigger("reveal", e), i.panTo({
                                x: -1 * a,
                                y: -1 * o,
                                scale: s,
                                friction: 0,
                                ignoreBounds: !0
                            }), e.$content.style.visibility = "", e.state = "zoomIn", !0 === r && i.on("afterTransform", (function(t) {
                                "zoomIn" !== e.state && "zoomOut" !== e.state || (t.$content.style.opacity = Math.min(1, 1 - (1 - t.content.scale) / (1 - s)));
                            })), i.panTo({
                                x: 0,
                                y: 0,
                                scale: 1,
                                friction: this.fancybox.option("Image.zoomFriction")
                            });
                        }
                    }, {
                        key: "zoomOut",
                        value: function() {
                            var t = this, e = this.fancybox, i = e.getSlide(), n = i.Panzoom;
                            if (n) {
                                i.state = "zoomOut", e.state = "customClosing", i.$caption && (i.$caption.style.visibility = "hidden");
                                var o = this.fancybox.option("Image.zoomFriction"), a = function(e) {
                                    var a = t.getZoomInfo(i), s = a.top, r = a.left, l = a.scale, c = a.opacity;
                                    e || c || (o *= .82), n.panTo({
                                        x: -1 * r,
                                        y: -1 * s,
                                        scale: l,
                                        friction: o,
                                        ignoreBounds: !0
                                    }), o *= .98;
                                };
                                window.addEventListener("scroll", a), n.once("endAnimation", (function() {
                                    window.removeEventListener("scroll", a), e.destroy();
                                })), a();
                            }
                        }
                    }, {
                        key: "handleCursor",
                        value: function(t) {
                            if ("image" === t.type && t.$el) {
                                var e = t.Panzoom, i = this.fancybox.option("Image.click", !1, t), n = this.fancybox.option("Image.touch"), o = t.$el.classList, a = this.fancybox.option("Image.canZoomInClass"), s = this.fancybox.option("Image.canZoomOutClass");
                                if (o.remove(s), o.remove(a), e && "toggleZoom" === i) e && 1 === e.content.scale && e.option("maxScale") - e.content.scale > .01 ? o.add(a) : e.content.scale > 1 && !n && o.add(s); else "close" === i && o.add(s);
                            }
                        }
                    }, {
                        key: "onWheel",
                        value: function(t, e) {
                            if ("ready" === this.fancybox.state && !1 !== this.fancybox.trigger("Image.wheel", e)) switch (this.fancybox.option("Image.wheel")) {
                              case "zoom":
                                "done" === t.state && t.Panzoom && t.Panzoom.zoomWithWheel(e);
                                break;

                              case "close":
                                this.fancybox.close();
                                break;

                              case "slide":
                                this.fancybox[e.deltaY < 0 ? "prev" : "next"]();
                            }
                        }
                    }, {
                        key: "onClick",
                        value: function(t, e) {
                            var i = this;
                            if ("ready" === this.fancybox.state) {
                                var n = t.Panzoom;
                                if (!n || !n.dragPosition.midPoint && 0 === n.dragOffset.x && 0 === n.dragOffset.y && 1 === n.dragOffset.scale) {
                                    if (this.fancybox.Carousel.Panzoom.lockAxis) return !1;
                                    var o = function(n) {
                                        switch (n) {
                                          case "toggleZoom":
                                            e.stopPropagation(), t.Panzoom && t.Panzoom.zoomWithClick(e);
                                            break;

                                          case "close":
                                            i.fancybox.close();
                                            break;

                                          case "next":
                                            e.stopPropagation(), i.fancybox.next();
                                        }
                                    }, a = this.fancybox.option("Image.click"), s = this.fancybox.option("Image.doubleClick");
                                    s ? this.clickTimer ? (clearTimeout(this.clickTimer), this.clickTimer = null, o(s)) : this.clickTimer = setTimeout((function() {
                                        i.clickTimer = null, o(a);
                                    }), 300) : o(a);
                                }
                            }
                        }
                    }, {
                        key: "onPageChange",
                        value: function(t, e) {
                            var i = t.getSlide();
                            e.slides.forEach((function(t) {
                                t.Panzoom && "done" === t.state && t.index !== i.index && t.Panzoom.panTo({
                                    x: 0,
                                    y: 0,
                                    scale: 1,
                                    friction: .8
                                });
                            }));
                        }
                    }, {
                        key: "attach",
                        value: function() {
                            this.fancybox.on(this.events);
                        }
                    }, {
                        key: "detach",
                        value: function() {
                            this.fancybox.off(this.events);
                        }
                    } ]), t;
                }();
                K.defaults = {
                    canZoomInClass: "can-zoom_in",
                    canZoomOutClass: "can-zoom_out",
                    zoom: !0,
                    zoomOpacity: "auto",
                    zoomFriction: .82,
                    ignoreCoveredThumbnail: !1,
                    touch: !0,
                    click: "toggleZoom",
                    doubleClick: null,
                    wheel: "zoom",
                    fit: "contain",
                    wrap: !1,
                    Panzoom: {
                        ratio: 1
                    }
                };
                var J = function() {
                    function t(e) {
                        o(this, t), this.fancybox = e;
                        for (var i = 0, n = [ "onChange", "onClosing" ]; i < n.length; i++) {
                            var a = n[i];
                            this[a] = this[a].bind(this);
                        }
                        this.events = {
                            initCarousel: this.onChange,
                            "Carousel.change": this.onChange,
                            closing: this.onClosing
                        }, this.hasCreatedHistory = !1, this.origHash = "", this.timer = null;
                    }
                    return s(t, [ {
                        key: "onChange",
                        value: function(t) {
                            var e = this, i = t.Carousel;
                            this.timer && clearTimeout(this.timer);
                            var n = null === i.prevPage, o = t.getSlide(), a = new URL(document.URL).hash, s = !1;
                            if (o.slug) s = "#" + o.slug; else {
                                var r = o.$trigger && o.$trigger.dataset, l = t.option("slug") || r && r.fancybox;
                                l && l.length && "true" !== l && (s = "#" + l + (i.slides.length > 1 ? "-" + (o.index + 1) : ""));
                            }
                            n && (this.origHash = a !== s ? a : ""), s && a !== s && (this.timer = setTimeout((function() {
                                try {
                                    window.history[n ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + s), 
                                    n && (e.hasCreatedHistory = !0);
                                } catch (t) {}
                            }), 300));
                        }
                    }, {
                        key: "onClosing",
                        value: function() {
                            if (this.timer && clearTimeout(this.timer), !0 !== this.hasSilentClose) try {
                                return void window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (this.origHash || ""));
                            } catch (t) {}
                        }
                    }, {
                        key: "attach",
                        value: function(t) {
                            t.on(this.events);
                        }
                    }, {
                        key: "detach",
                        value: function(t) {
                            t.off(this.events);
                        }
                    } ], [ {
                        key: "startFromUrl",
                        value: function() {
                            var e = t.Fancybox;
                            if (e && !e.getInstance() && !1 !== e.defaults.Hash) {
                                var i = t.getParsedURL(), n = i.hash, o = i.slug, a = i.index;
                                if (o) {
                                    var s = document.querySelector('[data-slug="'.concat(n, '"]'));
                                    if (s && s.dispatchEvent(new CustomEvent("click", {
                                        bubbles: !0,
                                        cancelable: !0
                                    })), !e.getInstance()) {
                                        var r = document.querySelectorAll('[data-fancybox="'.concat(o, '"]'));
                                        r.length && (null === a && 1 === r.length ? s = r[0] : a && (s = r[a - 1]), s && s.dispatchEvent(new CustomEvent("click", {
                                            bubbles: !0,
                                            cancelable: !0
                                        })));
                                    }
                                }
                            }
                        }
                    }, {
                        key: "onHashChange",
                        value: function() {
                            var e = t.getParsedURL(), i = e.slug, n = e.index, o = t.Fancybox, a = o && o.getInstance();
                            if (a && a.plugins.Hash) {
                                if (i) {
                                    var s = a.Carousel;
                                    if (i === a.option("slug")) return s.slideTo(n - 1);
                                    var r, l = x(s.slides);
                                    try {
                                        for (l.s(); !(r = l.n()).done; ) {
                                            var c = r.value;
                                            if (c.slug && c.slug === i) return s.slideTo(c.index);
                                        }
                                    } catch (t) {
                                        l.e(t);
                                    } finally {
                                        l.f();
                                    }
                                    var h = a.getSlide(), d = h.$trigger && h.$trigger.dataset;
                                    if (d && d.fancybox === i) return s.slideTo(n - 1);
                                }
                                a.plugins.Hash.hasSilentClose = !0, a.close();
                            }
                            t.startFromUrl();
                        }
                    }, {
                        key: "create",
                        value: function(e) {
                            function i() {
                                window.addEventListener("hashchange", t.onHashChange, !1), t.startFromUrl();
                            }
                            t.Fancybox = e, W && window.requestAnimationFrame((function() {
                                /complete|interactive|loaded/.test(document.readyState) ? i() : document.addEventListener("DOMContentLoaded", i);
                            }));
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            window.removeEventListener("hashchange", t.onHashChange, !1);
                        }
                    }, {
                        key: "getParsedURL",
                        value: function() {
                            var t = window.location.hash.substr(1), e = t.split("-"), i = e.length > 1 && /^\+?\d+$/.test(e[e.length - 1]) && parseInt(e.pop(-1), 10) || null;
                            return {
                                hash: t,
                                slug: e.join("-"),
                                index: i
                            };
                        }
                    } ]), t;
                }(), Q = {
                    pageXOffset: 0,
                    pageYOffset: 0,
                    element: function() {
                        return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
                    },
                    activate: function(t) {
                        Q.pageXOffset = window.pageXOffset, Q.pageYOffset = window.pageYOffset, t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen();
                    },
                    deactivate: function() {
                        document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
                    }
                }, tt = function() {
                    function t(e) {
                        o(this, t), this.fancybox = e, this.active = !1, this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
                    }
                    return s(t, [ {
                        key: "isActive",
                        value: function() {
                            return this.active;
                        }
                    }, {
                        key: "setTimer",
                        value: function() {
                            var t = this;
                            if (this.active && !this.timer) {
                                var e = this.fancybox.option("slideshow.delay", 3e3);
                                this.timer = setTimeout((function() {
                                    t.timer = null, t.fancybox.option("infinite") || t.fancybox.getSlide().index !== t.fancybox.Carousel.slides.length - 1 ? t.fancybox.next() : t.fancybox.jumpTo(0, {
                                        friction: 0
                                    });
                                }), e);
                                var i = this.$progress;
                                i || ((i = document.createElement("div")).classList.add("fancybox__progress"), this.fancybox.$carousel.parentNode.insertBefore(i, this.fancybox.$carousel), 
                                this.$progress = i, i.offsetHeight), i.style.transitionDuration = "".concat(e, "ms"), 
                                i.style.transform = "scaleX(1)";
                            }
                        }
                    }, {
                        key: "clearTimer",
                        value: function() {
                            clearTimeout(this.timer), this.timer = null, this.$progress && (this.$progress.style.transitionDuration = "", 
                            this.$progress.style.transform = "", this.$progress.offsetHeight);
                        }
                    }, {
                        key: "activate",
                        value: function() {
                            this.active || (this.active = !0, this.fancybox.$container.classList.add("has-slideshow"), 
                            "done" === this.fancybox.getSlide().state && this.setTimer(), document.addEventListener("visibilitychange", this.handleVisibilityChange, !1));
                        }
                    }, {
                        key: "handleVisibilityChange",
                        value: function() {
                            this.deactivate();
                        }
                    }, {
                        key: "deactivate",
                        value: function() {
                            this.active = !1, this.clearTimer(), this.fancybox.$container.classList.remove("has-slideshow"), 
                            document.removeEventListener("visibilitychange", this.handleVisibilityChange, !1);
                        }
                    }, {
                        key: "toggle",
                        value: function() {
                            this.active ? this.deactivate() : this.fancybox.Carousel.slides.length > 1 && this.activate();
                        }
                    } ]), t;
                }(), et = {
                    display: [ "counter", "zoom", "slideshow", "fullscreen", "thumbs", "close" ],
                    autoEnable: !0,
                    items: {
                        counter: {
                            position: "left",
                            type: "div",
                            class: "fancybox__counter",
                            html: '<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',
                            attr: {
                                tabindex: -1
                            }
                        },
                        prev: {
                            type: "button",
                            class: "fancybox__button--prev",
                            label: "PREV",
                            html: '<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8"/></svg>',
                            attr: {
                                "data-fancybox-prev": ""
                            }
                        },
                        next: {
                            type: "button",
                            class: "fancybox__button--next",
                            label: "NEXT",
                            html: '<svg viewBox="0 0 24 24"><path d="M8 4l8 8-8 8"/></svg>',
                            attr: {
                                "data-fancybox-next": ""
                            }
                        },
                        fullscreen: {
                            type: "button",
                            class: "fancybox__button--fullscreen",
                            label: "TOGGLE_FULLSCREEN",
                            html: '<svg viewBox="0 0 24 24">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>',
                            click: function(t) {
                                t.preventDefault(), Q.element() ? Q.deactivate() : Q.activate(this.fancybox.$container);
                            }
                        },
                        slideshow: {
                            type: "button",
                            class: "fancybox__button--slideshow",
                            label: "TOGGLE_SLIDESHOW",
                            html: '<svg viewBox="0 0 24 24">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>',
                            click: function(t) {
                                t.preventDefault(), this.Slideshow.toggle();
                            }
                        },
                        zoom: {
                            type: "button",
                            class: "fancybox__button--zoom",
                            label: "TOGGLE_ZOOM",
                            html: '<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',
                            click: function(t) {
                                t.preventDefault();
                                var e = this.fancybox.getSlide().Panzoom;
                                e && e.toggleZoom();
                            }
                        },
                        download: {
                            type: "link",
                            label: "DOWNLOAD",
                            class: "fancybox__button--download",
                            html: '<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',
                            click: function(t) {
                                t.stopPropagation();
                            }
                        },
                        thumbs: {
                            type: "button",
                            label: "TOGGLE_THUMBS",
                            class: "fancybox__button--thumbs",
                            html: '<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>',
                            click: function(t) {
                                t.stopPropagation();
                                var e = this.fancybox.plugins.Thumbs;
                                e && e.toggle();
                            }
                        },
                        close: {
                            type: "button",
                            label: "CLOSE",
                            class: "fancybox__button--close",
                            html: '<svg viewBox="0 0 24 24"><path d="M20 20L4 4m16 0L4 20"></path></svg>',
                            attr: {
                                "data-fancybox-close": "",
                                tabindex: 0
                            }
                        }
                    }
                }, it = function() {
                    function t(e) {
                        var i = this;
                        o(this, t), this.fancybox = e, this.$container = null, this.state = "init";
                        for (var n = 0, a = [ "onInit", "onPrepare", "onDone", "onKeydown", "onClosing", "onChange", "onSettle", "onRefresh" ]; n < a.length; n++) {
                            var s = a[n];
                            this[s] = this[s].bind(this);
                        }
                        this.events = {
                            init: this.onInit,
                            prepare: this.onPrepare,
                            done: this.onDone,
                            keydown: this.onKeydown,
                            closing: this.onClosing,
                            "Carousel.change": this.onChange,
                            "Carousel.settle": this.onSettle,
                            "Carousel.Panzoom.touchStart": function() {
                                return i.onRefresh();
                            },
                            "Image.startAnimation": function(t, e) {
                                return i.onRefresh(e);
                            },
                            "Image.afterUpdate": function(t, e) {
                                return i.onRefresh(e);
                            }
                        };
                    }
                    return s(t, [ {
                        key: "onInit",
                        value: function() {
                            if (this.fancybox.option("Toolbar.autoEnable")) {
                                var t, e = !1, i = x(this.fancybox.items);
                                try {
                                    for (i.s(); !(t = i.n()).done; ) if ("image" === t.value.type) {
                                        e = !0;
                                        break;
                                    }
                                } catch (t) {
                                    i.e(t);
                                } finally {
                                    i.f();
                                }
                                if (!e) return void (this.state = "disabled");
                            }
                            var n, o = x(this.fancybox.option("Toolbar.display"));
                            try {
                                for (o.s(); !(n = o.n()).done; ) {
                                    var a = n.value;
                                    if ("close" === (w(a) ? a.id : a)) {
                                        this.fancybox.options.closeButton = !1;
                                        break;
                                    }
                                }
                            } catch (t) {
                                o.e(t);
                            } finally {
                                o.f();
                            }
                        }
                    }, {
                        key: "onPrepare",
                        value: function() {
                            var t = this.fancybox;
                            if ("init" === this.state && (this.build(), this.update(), this.Slideshow = new tt(t), 
                            !t.Carousel.prevPage && (t.option("slideshow.autoStart") && this.Slideshow.activate(), 
                            t.option("fullscreen.autoStart") && !Q.element()))) try {
                                Q.activate(t.$container);
                            } catch (t) {}
                        }
                    }, {
                        key: "onFsChange",
                        value: function() {
                            window.scrollTo(Q.pageXOffset, Q.pageYOffset);
                        }
                    }, {
                        key: "onSettle",
                        value: function() {
                            var t = this.fancybox, e = this.Slideshow;
                            e && e.isActive() && (t.getSlide().index !== t.Carousel.slides.length - 1 || t.option("infinite") ? "done" === t.getSlide().state && e.setTimer() : e.deactivate());
                        }
                    }, {
                        key: "onChange",
                        value: function() {
                            this.update(), this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer();
                        }
                    }, {
                        key: "onDone",
                        value: function(t, e) {
                            var i = this.Slideshow;
                            e.index === t.getSlide().index && (this.update(), i && i.isActive() && (t.option("infinite") || e.index !== t.Carousel.slides.length - 1 ? i.setTimer() : i.deactivate()));
                        }
                    }, {
                        key: "onRefresh",
                        value: function(t) {
                            t && t.index !== this.fancybox.getSlide().index || (this.update(), !this.Slideshow || !this.Slideshow.isActive() || t && "done" !== t.state || this.Slideshow.deactivate());
                        }
                    }, {
                        key: "onKeydown",
                        value: function(t, e, i) {
                            " " === e && this.Slideshow && (this.Slideshow.toggle(), i.preventDefault());
                        }
                    }, {
                        key: "onClosing",
                        value: function() {
                            this.Slideshow && this.Slideshow.deactivate(), document.removeEventListener("fullscreenchange", this.onFsChange);
                        }
                    }, {
                        key: "createElement",
                        value: function(t) {
                            var e, i;
                            ("div" === t.type ? e = document.createElement("div") : (e = document.createElement("link" === t.type ? "a" : "button")).classList.add("carousel__button"), 
                            e.innerHTML = t.html, e.setAttribute("tabindex", t.tabindex || 0), t.class) && (i = e.classList).add.apply(i, m(t.class.split(" ")));
                            for (var n in t.attr) e.setAttribute(n, t.attr[n]);
                            t.label && e.setAttribute("title", this.fancybox.localize("{{".concat(t.label, "}}"))), 
                            t.click && e.addEventListener("click", t.click.bind(this)), "prev" === t.id && e.setAttribute("data-fancybox-prev", ""), 
                            "next" === t.id && e.setAttribute("data-fancybox-next", "");
                            var o = e.querySelector("svg");
                            return o && (o.setAttribute("role", "img"), o.setAttribute("tabindex", "-1"), o.setAttribute("xmlns", "http://www.w3.org/2000/svg")), 
                            e;
                        }
                    }, {
                        key: "build",
                        value: function() {
                            var t = this;
                            this.cleanup();
                            var e, i = this.fancybox.option("Toolbar.items"), n = [ {
                                position: "left",
                                items: []
                            }, {
                                position: "center",
                                items: []
                            }, {
                                position: "right",
                                items: []
                            } ], o = this.fancybox.plugins.Thumbs, a = x(this.fancybox.option("Toolbar.display"));
                            try {
                                var s = function() {
                                    var a = e.value, s = void 0, r = void 0;
                                    if (w(a) ? (s = a.id, r = k({}, i[s], a)) : r = i[s = a], [ "counter", "next", "prev", "slideshow" ].includes(s) && t.fancybox.items.length < 2) return "continue";
                                    if ("fullscreen" === s) {
                                        if (!document.fullscreenEnabled || window.fullScreen) return "continue";
                                        document.addEventListener("fullscreenchange", t.onFsChange);
                                    }
                                    if ("thumbs" === s && (!o || "disabled" === o.state)) return "continue";
                                    if (!r) return "continue";
                                    var l = r.position || "right", c = n.find((function(t) {
                                        return t.position === l;
                                    }));
                                    c && c.items.push(r);
                                };
                                for (a.s(); !(e = a.n()).done; ) s();
                            } catch (t) {
                                a.e(t);
                            } finally {
                                a.f();
                            }
                            var r = document.createElement("div");
                            r.classList.add("fancybox__toolbar");
                            for (var l = 0, c = n; l < c.length; l++) {
                                var h = c[l];
                                if (h.items.length) {
                                    var d = document.createElement("div");
                                    d.classList.add("fancybox__toolbar__items"), d.classList.add("fancybox__toolbar__items--".concat(h.position));
                                    var u, f = x(h.items);
                                    try {
                                        for (f.s(); !(u = f.n()).done; ) {
                                            var v = u.value;
                                            d.appendChild(this.createElement(v));
                                        }
                                    } catch (t) {
                                        f.e(t);
                                    } finally {
                                        f.f();
                                    }
                                    r.appendChild(d);
                                }
                            }
                            this.fancybox.$carousel.parentNode.insertBefore(r, this.fancybox.$carousel), this.$container = r;
                        }
                    }, {
                        key: "update",
                        value: function() {
                            var t, e = this.fancybox.getSlide(), i = e.index, n = this.fancybox.items.length, o = e.downloadSrc || ("image" !== e.type || e.error ? null : e.src), a = x(this.fancybox.$container.querySelectorAll("a.fancybox__button--download"));
                            try {
                                for (a.s(); !(t = a.n()).done; ) {
                                    var s = t.value;
                                    o ? (s.removeAttribute("disabled"), s.removeAttribute("tabindex"), s.setAttribute("href", o), 
                                    s.setAttribute("download", o), s.setAttribute("target", "_blank")) : (s.setAttribute("disabled", ""), 
                                    s.setAttribute("tabindex", -1), s.removeAttribute("href"), s.removeAttribute("download"));
                                }
                            } catch (t) {
                                a.e(t);
                            } finally {
                                a.f();
                            }
                            var r, l = e.Panzoom, c = l && l.option("maxScale") > l.option("baseScale"), h = x(this.fancybox.$container.querySelectorAll(".fancybox__button--zoom"));
                            try {
                                for (h.s(); !(r = h.n()).done; ) {
                                    var d = r.value;
                                    c ? d.removeAttribute("disabled") : d.setAttribute("disabled", "");
                                }
                            } catch (t) {
                                h.e(t);
                            } finally {
                                h.f();
                            }
                            var u, f = x(this.fancybox.$container.querySelectorAll("[data-fancybox-index]"));
                            try {
                                for (f.s(); !(u = f.n()).done; ) u.value.innerHTML = e.index + 1;
                            } catch (t) {
                                f.e(t);
                            } finally {
                                f.f();
                            }
                            var v, p = x(this.fancybox.$container.querySelectorAll("[data-fancybox-count]"));
                            try {
                                for (p.s(); !(v = p.n()).done; ) v.value.innerHTML = n;
                            } catch (t) {
                                p.e(t);
                            } finally {
                                p.f();
                            }
                            if (!this.fancybox.option("infinite")) {
                                var g, m = x(this.fancybox.$container.querySelectorAll("[data-fancybox-prev]"));
                                try {
                                    for (m.s(); !(g = m.n()).done; ) {
                                        var y = g.value;
                                        0 === i ? y.setAttribute("disabled", "") : y.removeAttribute("disabled");
                                    }
                                } catch (t) {
                                    m.e(t);
                                } finally {
                                    m.f();
                                }
                                var b, w = x(this.fancybox.$container.querySelectorAll("[data-fancybox-next]"));
                                try {
                                    for (w.s(); !(b = w.n()).done; ) {
                                        var k = b.value;
                                        i === n - 1 ? k.setAttribute("disabled", "") : k.removeAttribute("disabled");
                                    }
                                } catch (t) {
                                    w.e(t);
                                } finally {
                                    w.f();
                                }
                            }
                        }
                    }, {
                        key: "cleanup",
                        value: function() {
                            this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer(), this.$container && this.$container.remove(), 
                            this.$container = null;
                        }
                    }, {
                        key: "attach",
                        value: function() {
                            this.fancybox.on(this.events);
                        }
                    }, {
                        key: "detach",
                        value: function() {
                            this.fancybox.off(this.events), this.cleanup();
                        }
                    } ]), t;
                }();
                it.defaults = et;
                var nt = {
                    ScrollLock: U,
                    Thumbs: Y,
                    Html: G,
                    Toolbar: it,
                    Image: K,
                    Hash: J
                }, ot = {
                    startIndex: 0,
                    preload: 1,
                    infinite: !0,
                    showClass: "fancybox-zoomInUp",
                    hideClass: "fancybox-fadeOut",
                    animated: !0,
                    hideScrollbar: !0,
                    parentEl: null,
                    mainClass: null,
                    autoFocus: !0,
                    trapFocus: !0,
                    placeFocusBack: !0,
                    click: "close",
                    closeButton: "inside",
                    dragToClose: !0,
                    keyboard: {
                        Escape: "close",
                        Delete: "close",
                        Backspace: "close",
                        PageUp: "next",
                        PageDown: "prev",
                        ArrowUp: "next",
                        ArrowDown: "prev",
                        ArrowRight: "next",
                        ArrowLeft: "prev"
                    },
                    template: {
                        closeButton: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>',
                        spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
                        main: null
                    },
                    l10n: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        MODAL: "You can close this modal content with the ESC key",
                        ERROR: "Something Went Wrong, Please Try Again Later",
                        IMAGE_ERROR: "Image Not Found",
                        ELEMENT_NOT_FOUND: "HTML Element Not Found",
                        AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
                        AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
                        IFRAME_ERROR: "Error Loading Page",
                        TOGGLE_ZOOM: "Toggle zoom level",
                        TOGGLE_THUMBS: "Toggle thumbnails",
                        TOGGLE_SLIDESHOW: "Toggle slideshow",
                        TOGGLE_FULLSCREEN: "Toggle full-screen mode",
                        DOWNLOAD: "Download"
                    }
                }, at = new Map, st = 0, rt = function(t) {
                    l(i, t);
                    var e = f(i);
                    function i(t) {
                        var n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return o(this, i), t = t.map((function(t) {
                            return t.width && (t._width = t.width), t.height && (t._height = t.height), t;
                        })), (n = e.call(this, k(!0, {}, ot, a))).bindHandlers(), n.state = "init", n.setItems(t), 
                        n.attachPlugins(i.Plugins), n.trigger("init"), !0 === n.option("hideScrollbar") && n.hideScrollbar(), 
                        n.initLayout(), n.initCarousel(), n.attachEvents(), at.set(n.id, d(n)), n.trigger("prepare"), 
                        n.state = "ready", n.trigger("ready"), n.$container.setAttribute("aria-hidden", "false"), 
                        n.option("trapFocus") && n.focus(), n;
                    }
                    return s(i, [ {
                        key: "option",
                        value: function(t) {
                            for (var e, n = this.getSlide(), o = n ? n[t] : void 0, a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), r = 1; r < a; r++) s[r - 1] = arguments[r];
                            if (void 0 !== o) {
                                var l;
                                if ("function" == typeof o) o = (l = o).call.apply(l, [ this, this ].concat(s));
                                return o;
                            }
                            return (e = p(c(i.prototype), "option", this)).call.apply(e, [ this, t ].concat(s));
                        }
                    }, {
                        key: "bindHandlers",
                        value: function() {
                            for (var t = 0, e = [ "onMousedown", "onKeydown", "onClick", "onFocus", "onCreateSlide", "onSettle", "onTouchMove", "onTouchEnd", "onTransform" ]; t < e.length; t++) {
                                var i = e[t];
                                this[i] = this[i].bind(this);
                            }
                        }
                    }, {
                        key: "attachEvents",
                        value: function() {
                            document.addEventListener("mousedown", this.onMousedown), document.addEventListener("keydown", this.onKeydown, !0), 
                            this.option("trapFocus") && document.addEventListener("focus", this.onFocus, !0), 
                            this.$container.addEventListener("click", this.onClick);
                        }
                    }, {
                        key: "detachEvents",
                        value: function() {
                            document.removeEventListener("mousedown", this.onMousedown), document.removeEventListener("keydown", this.onKeydown, !0), 
                            document.removeEventListener("focus", this.onFocus, !0), this.$container.removeEventListener("click", this.onClick);
                        }
                    }, {
                        key: "initLayout",
                        value: function() {
                            var t = this;
                            this.$root = this.option("parentEl") || document.body;
                            var e = this.option("template.main");
                            e && (this.$root.insertAdjacentHTML("beforeend", this.localize(e)), this.$container = this.$root.querySelector(".fancybox__container")), 
                            this.$container || (this.$container = document.createElement("div"), this.$root.appendChild(this.$container)), 
                            this.$container.onscroll = function() {
                                return t.$container.scrollLeft = 0, !1;
                            }, Object.entries({
                                class: "fancybox__container",
                                role: "dialog",
                                tabIndex: "-1",
                                "aria-modal": "true",
                                "aria-hidden": "true",
                                "aria-label": this.localize("{{MODAL}}")
                            }).forEach((function(e) {
                                var i;
                                return (i = t.$container).setAttribute.apply(i, m(e));
                            })), this.option("animated") && this.$container.classList.add("is-animated"), this.$backdrop = this.$container.querySelector(".fancybox__backdrop"), 
                            this.$backdrop || (this.$backdrop = document.createElement("div"), this.$backdrop.classList.add("fancybox__backdrop"), 
                            this.$container.appendChild(this.$backdrop)), this.$carousel = this.$container.querySelector(".fancybox__carousel"), 
                            this.$carousel || (this.$carousel = document.createElement("div"), this.$carousel.classList.add("fancybox__carousel"), 
                            this.$container.appendChild(this.$carousel)), this.$container.Fancybox = this, this.id = this.$container.getAttribute("id"), 
                            this.id || (this.id = this.options.id || ++st, this.$container.setAttribute("id", "fancybox-" + this.id));
                            var i, n = this.option("mainClass");
                            n && (i = this.$container.classList).add.apply(i, m(n.split(" ")));
                            return document.documentElement.classList.add("with-fancybox"), this.trigger("initLayout"), 
                            this;
                        }
                    }, {
                        key: "setItems",
                        value: function(t) {
                            var e, i = [], n = x(t);
                            try {
                                for (n.s(); !(e = n.n()).done; ) {
                                    var o = e.value, a = o.$trigger;
                                    if (a) {
                                        var s = a.dataset || {};
                                        o.src = s.src || a.getAttribute("href") || o.src, o.type = s.type || o.type, !o.src && a instanceof HTMLImageElement && (o.src = a.currentSrc || o.$trigger.src);
                                    }
                                    var r = o.$thumb;
                                    if (!r) {
                                        var l = o.$trigger && o.$trigger.origTarget;
                                        l && (r = l instanceof HTMLImageElement ? l : l.querySelector("img:not([aria-hidden])")), 
                                        !r && o.$trigger && (r = o.$trigger instanceof HTMLImageElement ? o.$trigger : o.$trigger.querySelector("img:not([aria-hidden])"));
                                    }
                                    o.$thumb = r || null;
                                    var c = o.thumb;
                                    !c && r && !(c = r.currentSrc || r.src) && r.dataset && (c = r.dataset.lazySrc || r.dataset.src), 
                                    c || "image" !== o.type || (c = o.src), o.thumb = c || null, o.caption = o.caption || "", 
                                    i.push(o);
                                }
                            } catch (t) {
                                n.e(t);
                            } finally {
                                n.f();
                            }
                            this.items = i;
                        }
                    }, {
                        key: "initCarousel",
                        value: function() {
                            var t = this;
                            return this.Carousel = new H(this.$carousel, k(!0, {}, {
                                prefix: "",
                                classNames: {
                                    viewport: "fancybox__viewport",
                                    track: "fancybox__track",
                                    slide: "fancybox__slide"
                                },
                                textSelection: !0,
                                preload: this.option("preload"),
                                friction: .88,
                                slides: this.items,
                                initialPage: this.options.startIndex,
                                slidesPerPage: 1,
                                infiniteX: this.option("infinite"),
                                infiniteY: !0,
                                l10n: this.option("l10n"),
                                Dots: !1,
                                Navigation: {
                                    classNames: {
                                        main: "fancybox__nav",
                                        button: "carousel__button",
                                        next: "is-next",
                                        prev: "is-prev"
                                    }
                                },
                                Panzoom: {
                                    textSelection: !0,
                                    panOnlyZoomed: function() {
                                        return t.Carousel && t.Carousel.pages && t.Carousel.pages.length < 2 && !t.option("dragToClose");
                                    },
                                    lockAxis: function() {
                                        if (t.Carousel) {
                                            var e = "x";
                                            return t.option("dragToClose") && (e += "y"), e;
                                        }
                                    }
                                },
                                on: {
                                    "*": function(e) {
                                        for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
                                        return t.trigger.apply(t, [ "Carousel.".concat(e) ].concat(n));
                                    },
                                    init: function(e) {
                                        return t.Carousel = e;
                                    },
                                    createSlide: this.onCreateSlide,
                                    settle: this.onSettle
                                }
                            }, this.option("Carousel"))), this.option("dragToClose") && this.Carousel.Panzoom.on({
                                touchMove: this.onTouchMove,
                                afterTransform: this.onTransform,
                                touchEnd: this.onTouchEnd
                            }), this.trigger("initCarousel"), this;
                        }
                    }, {
                        key: "onCreateSlide",
                        value: function(t, e) {
                            var i = e.caption || "";
                            if ("function" == typeof this.options.caption && (i = this.options.caption.call(this, this, this.Carousel, e)), 
                            "string" == typeof i && i.length) {
                                var n = document.createElement("div"), o = "fancybox__caption_".concat(this.id, "_").concat(e.index);
                                n.className = "fancybox__caption", n.innerHTML = i, n.setAttribute("id", o), e.$caption = e.$el.appendChild(n), 
                                e.$el.classList.add("has-caption"), e.$el.setAttribute("aria-labelledby", o);
                            }
                        }
                    }, {
                        key: "onSettle",
                        value: function() {
                            this.option("autoFocus") && this.focus();
                        }
                    }, {
                        key: "onFocus",
                        value: function(t) {
                            this.isTopmost() && this.focus(t);
                        }
                    }, {
                        key: "onClick",
                        value: function(t) {
                            if (!t.defaultPrevented) {
                                var e = t.composedPath()[0];
                                if (e.matches("[data-fancybox-close]")) return t.preventDefault(), void i.close(!1, t);
                                if (e.matches("[data-fancybox-next]")) return t.preventDefault(), void i.next();
                                if (e.matches("[data-fancybox-prev]")) return t.preventDefault(), void i.prev();
                                var n = document.activeElement;
                                if (n) {
                                    if (n.closest("[contenteditable]")) return;
                                    e.matches(X) || n.blur();
                                }
                                if (!e.closest(".fancybox__content")) if (!getSelection().toString().length) if (!1 !== this.trigger("click", t)) switch (this.option("click")) {
                                  case "close":
                                    this.close();
                                    break;

                                  case "next":
                                    this.next();
                                }
                            }
                        }
                    }, {
                        key: "onTouchMove",
                        value: function() {
                            var t = this.getSlide().Panzoom;
                            return !t || 1 === t.content.scale;
                        }
                    }, {
                        key: "onTouchEnd",
                        value: function(t) {
                            var e = t.dragOffset.y;
                            Math.abs(e) >= 150 || Math.abs(e) >= 35 && t.dragOffset.time < 350 ? (this.option("hideClass") && (this.getSlide().hideClass = "fancybox-throwOut".concat(t.content.y < 0 ? "Up" : "Down")), 
                            this.close()) : "y" === t.lockAxis && t.panTo({
                                y: 0
                            });
                        }
                    }, {
                        key: "onTransform",
                        value: function(t) {
                            if (this.$backdrop) {
                                var e = Math.abs(t.content.y), i = e < 1 ? "" : Math.max(.33, Math.min(1, 1 - e / t.content.fitHeight * 1.5));
                                this.$container.style.setProperty("--fancybox-ts", i ? "0s" : ""), this.$container.style.setProperty("--fancybox-opacity", i);
                            }
                        }
                    }, {
                        key: "onMousedown",
                        value: function() {
                            "ready" === this.state && document.body.classList.add("is-using-mouse");
                        }
                    }, {
                        key: "onKeydown",
                        value: function(t) {
                            if (this.isTopmost()) {
                                document.body.classList.remove("is-using-mouse");
                                var e = t.key, i = this.option("keyboard");
                                if (i && !t.ctrlKey && !t.altKey && !t.shiftKey) {
                                    var n = t.composedPath()[0], o = document.activeElement && document.activeElement.classList, a = o && o.contains("carousel__button");
                                    if ("Escape" !== e && !a) if (t.target.isContentEditable || -1 !== [ "BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO" ].indexOf(n.nodeName)) return;
                                    if (!1 !== this.trigger("keydown", e, t)) {
                                        var s = i[e];
                                        "function" == typeof this[s] && this[s]();
                                    }
                                }
                            }
                        }
                    }, {
                        key: "getSlide",
                        value: function() {
                            var t = this.Carousel;
                            if (!t) return null;
                            var e = null === t.page ? t.option("initialPage") : t.page, i = t.pages || [];
                            return i.length && i[e] ? i[e].slides[0] : null;
                        }
                    }, {
                        key: "focus",
                        value: function(t) {
                            if (!(i.ignoreFocusChange || [ "init", "closing", "customClosing", "destroy" ].indexOf(this.state) > -1)) {
                                var e = this.$container, n = this.getSlide(), o = "done" === n.state ? n.$el : null;
                                if (!o || !o.contains(document.activeElement)) {
                                    t && t.preventDefault(), i.ignoreFocusChange = !0;
                                    for (var a, s = [], r = 0, l = Array.from(e.querySelectorAll(X)); r < l.length; r++) {
                                        var c = l[r], h = c.offsetParent, d = o && o.contains(c), u = !this.Carousel.$viewport.contains(c);
                                        h && (d || u) ? (s.push(c), void 0 !== c.dataset.origTabindex && (c.tabIndex = c.dataset.origTabindex, 
                                        c.removeAttribute("data-orig-tabindex")), (c.hasAttribute("autoFocus") || !a && d && !c.classList.contains("carousel__button")) && (a = c)) : (c.dataset.origTabindex = void 0 === c.dataset.origTabindex ? c.getAttribute("tabindex") : c.dataset.origTabindex, 
                                        c.tabIndex = -1);
                                    }
                                    t ? s.indexOf(t.target) > -1 ? this.lastFocus = t.target : this.lastFocus === e ? q(s[s.length - 1]) : q(e) : this.option("autoFocus") && a ? q(a) : s.indexOf(document.activeElement) < 0 && q(e), 
                                    this.lastFocus = document.activeElement, i.ignoreFocusChange = !1;
                                }
                            }
                        }
                    }, {
                        key: "hideScrollbar",
                        value: function() {
                            if (W) {
                                var t = window.innerWidth - document.documentElement.getBoundingClientRect().width, e = "fancybox-style-noscroll", i = document.getElementById(e);
                                i || t > 0 && ((i = document.createElement("style")).id = e, i.type = "text/css", 
                                i.innerHTML = ".compensate-for-scrollbar {padding-right: ".concat(t, "px;}"), document.getElementsByTagName("head")[0].appendChild(i), 
                                document.body.classList.add("compensate-for-scrollbar"));
                            }
                        }
                    }, {
                        key: "revealScrollbar",
                        value: function() {
                            document.body.classList.remove("compensate-for-scrollbar");
                            var t = document.getElementById("fancybox-style-noscroll");
                            t && t.remove();
                        }
                    }, {
                        key: "clearContent",
                        value: function(t) {
                            this.Carousel.trigger("removeSlide", t), t.$content && (t.$content.remove(), t.$content = null), 
                            t.$closeButton && (t.$closeButton.remove(), t.$closeButton = null), t._className && t.$el.classList.remove(t._className);
                        }
                    }, {
                        key: "setContent",
                        value: function(t, e) {
                            var i, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = t.$el;
                            if (e instanceof HTMLElement) [ "img", "iframe", "video", "audio" ].indexOf(e.nodeName.toLowerCase()) > -1 ? (i = document.createElement("div")).appendChild(e) : i = e; else {
                                var a = document.createRange().createContextualFragment(e);
                                (i = document.createElement("div")).appendChild(a);
                            }
                            if (t.filter && !t.error && (i = i.querySelector(t.filter)), i instanceof Element) return t._className = "has-".concat(n.suffix || t.type || "unknown"), 
                            o.classList.add(t._className), i.classList.add("fancybox__content"), "none" !== i.style.display && "none" !== getComputedStyle(i).getPropertyValue("display") || (i.style.display = t.display || this.option("defaultDisplay") || "flex"), 
                            t.id && i.setAttribute("id", t.id), t.$content = i, o.prepend(i), this.manageCloseButton(t), 
                            "loading" !== t.state && this.revealContent(t), i;
                            this.setError(t, "{{ELEMENT_NOT_FOUND}}");
                        }
                    }, {
                        key: "manageCloseButton",
                        value: function(t) {
                            var e = this, i = void 0 === t.closeButton ? this.option("closeButton") : t.closeButton;
                            if (i && ("top" !== i || !this.$closeButton)) {
                                var n = document.createElement("button");
                                n.classList.add("carousel__button", "is-close"), n.setAttribute("title", this.options.l10n.CLOSE), 
                                n.innerHTML = this.option("template.closeButton"), n.addEventListener("click", (function(t) {
                                    return e.close(t);
                                })), "inside" === i ? (t.$closeButton && t.$closeButton.remove(), t.$closeButton = t.$content.appendChild(n)) : this.$closeButton = this.$container.insertBefore(n, this.$container.firstChild);
                            }
                        }
                    }, {
                        key: "revealContent",
                        value: function(t) {
                            var e = this;
                            this.trigger("reveal", t), t.$content.style.visibility = "";
                            var i = !1;
                            t.error || "loading" === t.state || null !== this.Carousel.prevPage || t.index !== this.options.startIndex || (i = void 0 === t.showClass ? this.option("showClass") : t.showClass), 
                            i ? (t.state = "animating", this.animateCSS(t.$content, i, (function() {
                                e.done(t);
                            }))) : this.done(t);
                        }
                    }, {
                        key: "animateCSS",
                        value: function(t, e, i) {
                            if (t && t.dispatchEvent(new CustomEvent("animationend", {
                                bubbles: !0,
                                cancelable: !0
                            })), t && e) t.addEventListener("animationend", (function n(o) {
                                o.currentTarget === this && (t.removeEventListener("animationend", n), i && i(), 
                                t.classList.remove(e));
                            })), t.classList.add(e); else "function" == typeof i && i();
                        }
                    }, {
                        key: "done",
                        value: function(t) {
                            t.state = "done", this.trigger("done", t);
                            var e = this.getSlide();
                            e && t.index === e.index && this.option("autoFocus") && this.focus();
                        }
                    }, {
                        key: "setError",
                        value: function(t, e) {
                            t.error = e, this.hideLoading(t), this.clearContent(t);
                            var i = document.createElement("div");
                            i.classList.add("fancybox-error"), i.innerHTML = this.localize(e || "<p>{{ERROR}}</p>"), 
                            this.setContent(t, i, {
                                suffix: "error"
                            });
                        }
                    }, {
                        key: "showLoading",
                        value: function(t) {
                            var e = this;
                            t.state = "loading", t.$el.classList.add("is-loading");
                            var i = t.$el.querySelector(".fancybox__spinner");
                            i || ((i = document.createElement("div")).classList.add("fancybox__spinner"), i.innerHTML = this.option("template.spinner"), 
                            i.addEventListener("click", (function() {
                                e.Carousel.Panzoom.velocity || e.close();
                            })), t.$el.prepend(i));
                        }
                    }, {
                        key: "hideLoading",
                        value: function(t) {
                            var e = t.$el && t.$el.querySelector(".fancybox__spinner");
                            e && (e.remove(), t.$el.classList.remove("is-loading")), "loading" === t.state && (this.trigger("load", t), 
                            t.state = "ready");
                        }
                    }, {
                        key: "next",
                        value: function() {
                            var t = this.Carousel;
                            t && t.pages.length > 1 && t.slideNext();
                        }
                    }, {
                        key: "prev",
                        value: function() {
                            var t = this.Carousel;
                            t && t.pages.length > 1 && t.slidePrev();
                        }
                    }, {
                        key: "jumpTo",
                        value: function() {
                            var t;
                            this.Carousel && (t = this.Carousel).slideTo.apply(t, arguments);
                        }
                    }, {
                        key: "isClosing",
                        value: function() {
                            return [ "closing", "customClosing", "destroy" ].includes(this.state);
                        }
                    }, {
                        key: "isTopmost",
                        value: function() {
                            return i.getInstance().id == this.id;
                        }
                    }, {
                        key: "close",
                        value: function(t) {
                            var e = this;
                            if (t && t.preventDefault(), !this.isClosing() && !1 !== this.trigger("shouldClose", t) && (this.state = "closing", 
                            this.Carousel.Panzoom.destroy(), this.detachEvents(), this.trigger("closing", t), 
                            "destroy" !== this.state)) {
                                this.$container.setAttribute("aria-hidden", "true"), this.$container.classList.add("is-closing");
                                var i = this.getSlide();
                                if (this.Carousel.slides.forEach((function(t) {
                                    t.$content && t.index !== i.index && e.Carousel.trigger("removeSlide", t);
                                })), "closing" === this.state) {
                                    var n = void 0 === i.hideClass ? this.option("hideClass") : i.hideClass;
                                    this.animateCSS(i.$content, n, (function() {
                                        e.destroy();
                                    }), !0);
                                }
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            if ("destroy" !== this.state) {
                                this.state = "destroy", this.trigger("destroy");
                                var t = this.option("placeFocusBack") ? this.option("triggerTarget", this.getSlide().$trigger) : null;
                                this.Carousel.destroy(), this.detachPlugins(), this.Carousel = null, this.options = {}, 
                                this.events = {}, this.$container.remove(), this.$container = this.$backdrop = this.$carousel = null, 
                                t && q(t), at.delete(this.id);
                                var e = i.getInstance();
                                e ? e.focus() : (document.documentElement.classList.remove("with-fancybox"), document.body.classList.remove("is-using-mouse"), 
                                this.revealScrollbar());
                            }
                        }
                    } ], [ {
                        key: "show",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return new i(t, e);
                        }
                    }, {
                        key: "fromEvent",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (!t.defaultPrevented && !(t.button && 0 !== t.button || t.ctrlKey || t.metaKey || t.shiftKey)) {
                                var n, o, a, s = t.composedPath()[0], r = s;
                                if ((r.matches("[data-fancybox-trigger]") || (r = r.closest("[data-fancybox-trigger]"))) && (e.triggerTarget = r, 
                                n = r && r.dataset && r.dataset.fancyboxTrigger), n) {
                                    var l = document.querySelectorAll('[data-fancybox="'.concat(n, '"]')), c = parseInt(r.dataset.fancyboxIndex, 10) || 0;
                                    r = l.length ? l[c] : r;
                                }
                                Array.from(i.openers.keys()).reverse().some((function(e) {
                                    a = r || s;
                                    var i = !1;
                                    try {
                                        a instanceof Element && ("string" == typeof e || e instanceof String) && (i = a.matches(e) || (a = a.closest(e)));
                                    } catch (t) {}
                                    return !!i && (t.preventDefault(), o = e, !0);
                                }));
                                var h = !1;
                                if (o) {
                                    e.event = t, e.target = a, a.origTarget = s, h = i.fromOpener(o, e);
                                    var d = i.getInstance();
                                    d && "ready" === d.state && t.detail && document.body.classList.add("is-using-mouse");
                                }
                                return h;
                            }
                        }
                    }, {
                        key: "fromOpener",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = function(t) {
                                for (var e = [ "false", "0", "no", "null", "undefined" ], i = [ "true", "1", "yes" ], n = Object.assign({}, t.dataset), o = {}, a = 0, s = Object.entries(n); a < s.length; a++) {
                                    var r = g(s[a], 2), l = r[0], c = r[1];
                                    if ("fancybox" !== l) if ("width" === l || "height" === l) o["_".concat(l)] = c; else if ("string" == typeof c || c instanceof String) if (e.indexOf(c) > -1) o[l] = !1; else if (i.indexOf(o[l]) > -1) o[l] = !0; else try {
                                        o[l] = JSON.parse(c);
                                    } catch (t) {
                                        o[l] = c;
                                    } else o[l] = c;
                                }
                                return t instanceof Element && (o.$trigger = t), o;
                            }, o = [], a = e.startIndex || 0, s = e.target || null, r = void 0 !== (e = k({}, e, i.openers.get(t))).groupAll && e.groupAll, l = void 0 === e.groupAttr ? "data-fancybox" : e.groupAttr, c = l && s ? s.getAttribute("".concat(l)) : "";
                            if (!s || c || r) {
                                var h = e.root || (s ? s.getRootNode() : document.body);
                                o = [].slice.call(h.querySelectorAll(t));
                            }
                            if (s && !r && (o = c ? o.filter((function(t) {
                                return t.getAttribute("".concat(l)) === c;
                            })) : [ s ]), !o.length) return !1;
                            var d = i.getInstance();
                            return !(d && o.indexOf(d.options.$trigger) > -1) && (a = s ? o.indexOf(s) : a, 
                            new i(o = o.map(n), k({}, e, {
                                startIndex: a,
                                $trigger: s
                            })));
                        }
                    }, {
                        key: "bind",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            function n() {
                                document.body.addEventListener("click", i.fromEvent, !1);
                            }
                            W && (i.openers.size || (/complete|interactive|loaded/.test(document.readyState) ? n() : document.addEventListener("DOMContentLoaded", n)), 
                            i.openers.set(t, e));
                        }
                    }, {
                        key: "unbind",
                        value: function(t) {
                            i.openers.delete(t), i.openers.size || i.destroy();
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            for (var t; t = i.getInstance(); ) t.destroy();
                            i.openers = new Map, document.body.removeEventListener("click", i.fromEvent, !1);
                        }
                    }, {
                        key: "getInstance",
                        value: function(t) {
                            return t ? at.get(t) : Array.from(at.values()).reverse().find((function(t) {
                                return !t.isClosing() && t;
                            })) || null;
                        }
                    }, {
                        key: "close",
                        value: function() {
                            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e = arguments.length > 1 ? arguments[1] : void 0;
                            if (t) {
                                var n, o = x(at.values());
                                try {
                                    for (o.s(); !(n = o.n()).done; ) {
                                        var a = n.value;
                                        a.close(e);
                                    }
                                } catch (t) {
                                    o.e(t);
                                } finally {
                                    o.f();
                                }
                            } else {
                                var s = i.getInstance();
                                s && s.close(e);
                            }
                        }
                    }, {
                        key: "next",
                        value: function() {
                            var t = i.getInstance();
                            t && t.next();
                        }
                    }, {
                        key: "prev",
                        value: function() {
                            var t = i.getInstance();
                            t && t.prev();
                        }
                    } ]), i;
                }(O);
                rt.version = "4.0.31", rt.defaults = ot, rt.openers = new Map, rt.Plugins = nt, 
                rt.bind("[data-fancybox]");
                for (var lt = 0, ct = Object.entries(rt.Plugins || {}); lt < ct.length; lt++) {
                    var ht = g(ct[lt], 2);
                    ht[0];
                    var dt = ht[1];
                    "function" == typeof dt.create && dt.create(rt);
                }
                t.Carousel = H, t.Fancybox = rt, t.Panzoom = M;
            }));
        },
        732: function(module) {
            !function(n, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                "use strict";
                function n() {
                    return n = Object.assign || function(n) {
                        for (var t = 1; t < arguments.length; t++) {
                            var e = arguments[t];
                            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
                        }
                        return n;
                    }, n.apply(this, arguments);
                }
                var t = "undefined" != typeof window, e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), i = t && "IntersectionObserver" in window, o = t && "classList" in document.createElement("p"), a = t && window.devicePixelRatio > 1, r = {
                    elements_selector: ".lazy",
                    container: e || t ? document : null,
                    threshold: 300,
                    thresholds: null,
                    data_src: "src",
                    data_srcset: "srcset",
                    data_sizes: "sizes",
                    data_bg: "bg",
                    data_bg_hidpi: "bg-hidpi",
                    data_bg_multi: "bg-multi",
                    data_bg_multi_hidpi: "bg-multi-hidpi",
                    data_bg_set: "bg-set",
                    data_poster: "poster",
                    class_applied: "applied",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    class_entered: "entered",
                    class_exited: "exited",
                    unobserve_completed: !0,
                    unobserve_entered: !1,
                    cancel_on_exit: !0,
                    callback_enter: null,
                    callback_exit: null,
                    callback_applied: null,
                    callback_loading: null,
                    callback_loaded: null,
                    callback_error: null,
                    callback_finish: null,
                    callback_cancel: null,
                    use_native: !1,
                    restore_on_error: !1
                }, c = function(t) {
                    return n({}, r, t);
                }, l = function(n, t) {
                    var e, i = "LazyLoad::Initialized", o = new n(t);
                    try {
                        e = new CustomEvent(i, {
                            detail: {
                                instance: o
                            }
                        });
                    } catch (n) {
                        (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
                            instance: o
                        });
                    }
                    window.dispatchEvent(e);
                }, u = "src", s = "srcset", d = "sizes", f = "poster", _ = "llOriginalAttrs", g = "data", v = "loading", b = "loaded", m = "applied", p = "error", h = "native", E = "data-", I = "ll-status", y = function(n, t) {
                    return n.getAttribute(E + t);
                }, k = function(n) {
                    return y(n, I);
                }, w = function(n, t) {
                    return function(n, t, e) {
                        var i = "data-ll-status";
                        null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
                    }(n, 0, t);
                }, A = function(n) {
                    return w(n, null);
                }, L = function(n) {
                    return null === k(n);
                }, O = function(n) {
                    return k(n) === h;
                }, x = [ v, b, m, p ], C = function(n, t, e, i) {
                    n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i));
                }, N = function(n, t) {
                    o ? n.classList.add(t) : n.className += (n.className ? " " : "") + t;
                }, M = function(n, t) {
                    o ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
                }, z = function(n) {
                    return n.llTempImage;
                }, T = function(n, t) {
                    if (t) {
                        var e = t._observer;
                        e && e.unobserve(n);
                    }
                }, R = function(n, t) {
                    n && (n.loadingCount += t);
                }, G = function(n, t) {
                    n && (n.toLoadCount = t);
                }, j = function(n) {
                    for (var t, e = [], i = 0; t = n.children[i]; i += 1) "SOURCE" === t.tagName && e.push(t);
                    return e;
                }, D = function(n, t) {
                    var e = n.parentNode;
                    e && "PICTURE" === e.tagName && j(e).forEach(t);
                }, H = function(n, t) {
                    j(n).forEach(t);
                }, V = [ u ], F = [ u, f ], B = [ u, s, d ], J = [ g ], P = function(n) {
                    return !!n[_];
                }, S = function(n) {
                    return n[_];
                }, U = function(n) {
                    return delete n[_];
                }, $ = function(n, t) {
                    if (!P(n)) {
                        var e = {};
                        t.forEach((function(t) {
                            e[t] = n.getAttribute(t);
                        })), n[_] = e;
                    }
                }, q = function(n, t) {
                    if (P(n)) {
                        var e = S(n);
                        t.forEach((function(t) {
                            !function(n, t, e) {
                                e ? n.setAttribute(t, e) : n.removeAttribute(t);
                            }(n, t, e[t]);
                        }));
                    }
                }, K = function(n, t, e) {
                    N(n, t.class_applied), w(n, m), e && (t.unobserve_completed && T(n, t), C(t.callback_applied, n, e));
                }, Q = function(n, t, e) {
                    N(n, t.class_loading), w(n, v), e && (R(e, 1), C(t.callback_loading, n, e));
                }, W = function(n, t, e) {
                    e && n.setAttribute(t, e);
                }, X = function(n, t) {
                    W(n, d, y(n, t.data_sizes)), W(n, s, y(n, t.data_srcset)), W(n, u, y(n, t.data_src));
                }, Y = {
                    IMG: function(n, t) {
                        D(n, (function(n) {
                            $(n, B), X(n, t);
                        })), $(n, B), X(n, t);
                    },
                    IFRAME: function(n, t) {
                        $(n, V), W(n, u, y(n, t.data_src));
                    },
                    VIDEO: function(n, t) {
                        H(n, (function(n) {
                            $(n, V), W(n, u, y(n, t.data_src));
                        })), $(n, F), W(n, f, y(n, t.data_poster)), W(n, u, y(n, t.data_src)), n.load();
                    },
                    OBJECT: function(n, t) {
                        $(n, J), W(n, g, y(n, t.data_src));
                    }
                }, Z = [ "IMG", "IFRAME", "VIDEO", "OBJECT" ], nn = function(n, t) {
                    !t || function(n) {
                        return n.loadingCount > 0;
                    }(t) || function(n) {
                        return n.toLoadCount > 0;
                    }(t) || C(n.callback_finish, t);
                }, tn = function(n, t, e) {
                    n.addEventListener(t, e), n.llEvLisnrs[t] = e;
                }, en = function(n, t, e) {
                    n.removeEventListener(t, e);
                }, on = function(n) {
                    return !!n.llEvLisnrs;
                }, an = function(n) {
                    if (on(n)) {
                        var t = n.llEvLisnrs;
                        for (var e in t) {
                            var i = t[e];
                            en(n, e, i);
                        }
                        delete n.llEvLisnrs;
                    }
                }, rn = function(n, t, e) {
                    !function(n) {
                        delete n.llTempImage;
                    }(n), R(e, -1), function(n) {
                        n && (n.toLoadCount -= 1);
                    }(e), M(n, t.class_loading), t.unobserve_completed && T(n, e);
                }, cn = function(n, t, e) {
                    var i = z(n) || n;
                    on(i) || function(n, t, e) {
                        on(n) || (n.llEvLisnrs = {});
                        var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
                        tn(n, i, t), tn(n, "error", e);
                    }(i, (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_loaded), w(t, b), C(e.callback_loaded, t, i), o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }), (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_error), w(t, p), C(e.callback_error, t, i), e.restore_on_error && q(t, B), 
                            o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }));
                }, ln = function(n, t, e) {
                    !function(n) {
                        return Z.indexOf(n.tagName) > -1;
                    }(n) ? function(n, t, e) {
                        !function(n) {
                            n.llTempImage = document.createElement("IMG");
                        }(n), cn(n, t, e), function(n) {
                            P(n) || (n[_] = {
                                backgroundImage: n.style.backgroundImage
                            });
                        }(n), function(n, t, e) {
                            var i = y(n, t.data_bg), o = y(n, t.data_bg_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = 'url("'.concat(r, '")'), z(n).setAttribute(u, r), 
                            Q(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_multi), o = y(n, t.data_bg_multi_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = r, K(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_set);
                            if (i) {
                                var o = i.split("|"), a = o.map((function(n) {
                                    return "image-set(".concat(n, ")");
                                }));
                                n.style.backgroundImage = a.join(), "" === n.style.backgroundImage && (a = o.map((function(n) {
                                    return "-webkit-image-set(".concat(n, ")");
                                })), n.style.backgroundImage = a.join()), K(n, t, e);
                            }
                        }(n, t, e);
                    }(n, t, e) : function(n, t, e) {
                        cn(n, t, e), function(n, t, e) {
                            var i = Y[n.tagName];
                            i && (i(n, t), Q(n, t, e));
                        }(n, t, e);
                    }(n, t, e);
                }, un = function(n) {
                    n.removeAttribute(u), n.removeAttribute(s), n.removeAttribute(d);
                }, sn = function(n) {
                    D(n, (function(n) {
                        q(n, B);
                    })), q(n, B);
                }, dn = {
                    IMG: sn,
                    IFRAME: function(n) {
                        q(n, V);
                    },
                    VIDEO: function(n) {
                        H(n, (function(n) {
                            q(n, V);
                        })), q(n, F), n.load();
                    },
                    OBJECT: function(n) {
                        q(n, J);
                    }
                }, fn = function(n, t) {
                    (function(n) {
                        var t = dn[n.tagName];
                        t ? t(n) : function(n) {
                            if (P(n)) {
                                var t = S(n);
                                n.style.backgroundImage = t.backgroundImage;
                            }
                        }(n);
                    })(n), function(n, t) {
                        L(n) || O(n) || (M(n, t.class_entered), M(n, t.class_exited), M(n, t.class_applied), 
                        M(n, t.class_loading), M(n, t.class_loaded), M(n, t.class_error));
                    }(n, t), A(n), U(n);
                }, _n = [ "IMG", "IFRAME", "VIDEO" ], gn = function(n) {
                    return n.use_native && "loading" in HTMLImageElement.prototype;
                }, vn = function(n, t, e) {
                    n.forEach((function(n) {
                        return function(n) {
                            return n.isIntersecting || n.intersectionRatio > 0;
                        }(n) ? function(n, t, e, i) {
                            var o = function(n) {
                                return x.indexOf(k(n)) >= 0;
                            }(n);
                            w(n, "entered"), N(n, e.class_entered), M(n, e.class_exited), function(n, t, e) {
                                t.unobserve_entered && T(n, e);
                            }(n, e, i), C(e.callback_enter, n, t, i), o || ln(n, e, i);
                        }(n.target, n, t, e) : function(n, t, e, i) {
                            L(n) || (N(n, e.class_exited), function(n, t, e, i) {
                                e.cancel_on_exit && function(n) {
                                    return k(n) === v;
                                }(n) && "IMG" === n.tagName && (an(n), function(n) {
                                    D(n, (function(n) {
                                        un(n);
                                    })), un(n);
                                }(n), sn(n), M(n, e.class_loading), R(i, -1), A(n), C(e.callback_cancel, n, t, i));
                            }(n, t, e, i), C(e.callback_exit, n, t, i));
                        }(n.target, n, t, e);
                    }));
                }, bn = function(n) {
                    return Array.prototype.slice.call(n);
                }, mn = function(n) {
                    return n.container.querySelectorAll(n.elements_selector);
                }, pn = function(n) {
                    return function(n) {
                        return k(n) === p;
                    }(n);
                }, hn = function(n, t) {
                    return function(n) {
                        return bn(n).filter(L);
                    }(n || mn(t));
                }, En = function(n, e) {
                    var o = c(n);
                    this._settings = o, this.loadingCount = 0, function(n, t) {
                        i && !gn(n) && (t._observer = new IntersectionObserver((function(e) {
                            vn(e, n, t);
                        }), function(n) {
                            return {
                                root: n.container === document ? null : n.container,
                                rootMargin: n.thresholds || n.threshold + "px"
                            };
                        }(n)));
                    }(o, this), function(n, e) {
                        t && (e._onlineHandler = function() {
                            !function(n, t) {
                                var e;
                                (e = mn(n), bn(e).filter(pn)).forEach((function(t) {
                                    M(t, n.class_error), A(t);
                                })), t.update();
                            }(n, e);
                        }, window.addEventListener("online", e._onlineHandler));
                    }(o, this), this.update(e);
                };
                return En.prototype = {
                    update: function(n) {
                        var t, o, a = this._settings, r = hn(n, a);
                        G(this, r.length), !e && i ? gn(a) ? function(n, t, e) {
                            n.forEach((function(n) {
                                -1 !== _n.indexOf(n.tagName) && function(n, t, e) {
                                    n.setAttribute("loading", "lazy"), cn(n, t, e), function(n, t) {
                                        var e = Y[n.tagName];
                                        e && e(n, t);
                                    }(n, t), w(n, h);
                                }(n, t, e);
                            })), G(e, 0);
                        }(r, a, this) : (o = r, function(n) {
                            n.disconnect();
                        }(t = this._observer), function(n, t) {
                            t.forEach((function(t) {
                                n.observe(t);
                            }));
                        }(t, o)) : this.loadAll(r);
                    },
                    destroy: function() {
                        this._observer && this._observer.disconnect(), t && window.removeEventListener("online", this._onlineHandler), 
                        mn(this._settings).forEach((function(n) {
                            U(n);
                        })), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, 
                        delete this.toLoadCount;
                    },
                    loadAll: function(n) {
                        var t = this, e = this._settings;
                        hn(n, e).forEach((function(n) {
                            T(n, t), ln(n, e, t);
                        }));
                    },
                    restoreAll: function() {
                        var n = this._settings;
                        mn(n).forEach((function(t) {
                            fn(t, n);
                        }));
                    }
                }, En.load = function(n, t) {
                    var e = c(t);
                    ln(n, e);
                }, En.resetStatus = function(n) {
                    A(n);
                }, t && function(n, t) {
                    if (t) if (t.length) for (var e, i = 0; e = t[i]; i += 1) l(n, e); else l(n, t);
                }(En, window.lazyLoadOptions), En;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(2 == webP.height);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = true === support ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
            }
        };
        function addLoadedClass() {
            window.addEventListener("load", (function() {
                setTimeout((function() {
                    document.documentElement.classList.add("loaded");
                }), 0);
            }));
        }
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        function ssr_window_esm_isObject(obj) {
            return null !== obj && "object" === typeof obj && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target = {}, src = {}) {
            Object.keys(src).forEach((key => {
                if ("undefined" === typeof target[key]) target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = "undefined" !== typeof document ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if ("undefined" === typeof setTimeout) {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if ("undefined" === typeof setTimeout) return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = "undefined" !== typeof window ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function makeReactive(obj) {
            const proto = obj.__proto__;
            Object.defineProperty(obj, "__proto__", {
                get() {
                    return proto;
                },
                set(value) {
                    proto.__proto__ = value;
                }
            });
        }
        class Dom7 extends Array {
            constructor(items) {
                if ("number" === typeof items) super(items); else {
                    super(...items || []);
                    makeReactive(this);
                }
            }
        }
        function arrayFlat(arr = []) {
            const res = [];
            arr.forEach((el => {
                if (Array.isArray(el)) res.push(...arrayFlat(el)); else res.push(el);
            }));
            return res;
        }
        function arrayFilter(arr, callback) {
            return Array.prototype.filter.call(arr, callback);
        }
        function arrayUnique(arr) {
            const uniqueArray = [];
            for (let i = 0; i < arr.length; i += 1) if (-1 === uniqueArray.indexOf(arr[i])) uniqueArray.push(arr[i]);
            return uniqueArray;
        }
        function qsa(selector, context) {
            if ("string" !== typeof selector) return [ selector ];
            const a = [];
            const res = context.querySelectorAll(selector);
            for (let i = 0; i < res.length; i += 1) a.push(res[i]);
            return a;
        }
        function dom7_esm_$(selector, context) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            let arr = [];
            if (!context && selector instanceof Dom7) return selector;
            if (!selector) return new Dom7(arr);
            if ("string" === typeof selector) {
                const html = selector.trim();
                if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
                    let toCreate = "div";
                    if (0 === html.indexOf("<li")) toCreate = "ul";
                    if (0 === html.indexOf("<tr")) toCreate = "tbody";
                    if (0 === html.indexOf("<td") || 0 === html.indexOf("<th")) toCreate = "tr";
                    if (0 === html.indexOf("<tbody")) toCreate = "table";
                    if (0 === html.indexOf("<option")) toCreate = "select";
                    const tempParent = document.createElement(toCreate);
                    tempParent.innerHTML = html;
                    for (let i = 0; i < tempParent.childNodes.length; i += 1) arr.push(tempParent.childNodes[i]);
                } else arr = qsa(selector.trim(), context || document);
            } else if (selector.nodeType || selector === window || selector === document) arr.push(selector); else if (Array.isArray(selector)) {
                if (selector instanceof Dom7) return selector;
                arr = selector;
            }
            return new Dom7(arrayUnique(arr));
        }
        dom7_esm_$.fn = Dom7.prototype;
        function addClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.add(...classNames);
            }));
            return this;
        }
        function removeClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.remove(...classNames);
            }));
            return this;
        }
        function toggleClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                classNames.forEach((className => {
                    el.classList.toggle(className);
                }));
            }));
        }
        function hasClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            return arrayFilter(this, (el => classNames.filter((className => el.classList.contains(className))).length > 0)).length > 0;
        }
        function attr(attrs, value) {
            if (1 === arguments.length && "string" === typeof attrs) {
                if (this[0]) return this[0].getAttribute(attrs);
                return;
            }
            for (let i = 0; i < this.length; i += 1) if (2 === arguments.length) this[i].setAttribute(attrs, value); else for (const attrName in attrs) {
                this[i][attrName] = attrs[attrName];
                this[i].setAttribute(attrName, attrs[attrName]);
            }
            return this;
        }
        function removeAttr(attr) {
            for (let i = 0; i < this.length; i += 1) this[i].removeAttribute(attr);
            return this;
        }
        function transform(transform) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transform = transform;
            return this;
        }
        function transition(duration) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transitionDuration = "string" !== typeof duration ? `${duration}ms` : duration;
            return this;
        }
        function on(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if ("function" === typeof args[1]) {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            function handleLiveEvent(e) {
                const target = e.target;
                if (!target) return;
                const eventData = e.target.dom7EventData || [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                if (dom7_esm_$(target).is(targetSelector)) listener.apply(target, eventData); else {
                    const parents = dom7_esm_$(target).parents();
                    for (let k = 0; k < parents.length; k += 1) if (dom7_esm_$(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
                }
            }
            function handleEvent(e) {
                const eventData = e && e.target ? e.target.dom7EventData || [] : [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                listener.apply(this, eventData);
            }
            const events = eventType.split(" ");
            let j;
            for (let i = 0; i < this.length; i += 1) {
                const el = this[i];
                if (!targetSelector) for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7Listeners) el.dom7Listeners = {};
                    if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
                    el.dom7Listeners[event].push({
                        listener,
                        proxyListener: handleEvent
                    });
                    el.addEventListener(event, handleEvent, capture);
                } else for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
                    if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
                    el.dom7LiveListeners[event].push({
                        listener,
                        proxyListener: handleLiveEvent
                    });
                    el.addEventListener(event, handleLiveEvent, capture);
                }
            }
            return this;
        }
        function off(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if ("function" === typeof args[1]) {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            const events = eventType.split(" ");
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    let handlers;
                    if (!targetSelector && el.dom7Listeners) handlers = el.dom7Listeners[event]; else if (targetSelector && el.dom7LiveListeners) handlers = el.dom7LiveListeners[event];
                    if (handlers && handlers.length) for (let k = handlers.length - 1; k >= 0; k -= 1) {
                        const handler = handlers[k];
                        if (listener && handler.listener === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (!listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        }
                    }
                }
            }
            return this;
        }
        function trigger(...args) {
            const window = ssr_window_esm_getWindow();
            const events = args[0].split(" ");
            const eventData = args[1];
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    if (window.CustomEvent) {
                        const evt = new window.CustomEvent(event, {
                            detail: eventData,
                            bubbles: true,
                            cancelable: true
                        });
                        el.dom7EventData = args.filter(((data, dataIndex) => dataIndex > 0));
                        el.dispatchEvent(evt);
                        el.dom7EventData = [];
                        delete el.dom7EventData;
                    }
                }
            }
            return this;
        }
        function transitionEnd(callback) {
            const dom = this;
            function fireCallBack(e) {
                if (e.target !== this) return;
                callback.call(this, e);
                dom.off("transitionend", fireCallBack);
            }
            if (callback) dom.on("transitionend", fireCallBack);
            return this;
        }
        function dom7_esm_outerWidth(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetWidth + parseFloat(styles.getPropertyValue("margin-right")) + parseFloat(styles.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        }
        function dom7_esm_outerHeight(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetHeight + parseFloat(styles.getPropertyValue("margin-top")) + parseFloat(styles.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        }
        function offset() {
            if (this.length > 0) {
                const window = ssr_window_esm_getWindow();
                const document = ssr_window_esm_getDocument();
                const el = this[0];
                const box = el.getBoundingClientRect();
                const body = document.body;
                const clientTop = el.clientTop || body.clientTop || 0;
                const clientLeft = el.clientLeft || body.clientLeft || 0;
                const scrollTop = el === window ? window.scrollY : el.scrollTop;
                const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
                return {
                    top: box.top + scrollTop - clientTop,
                    left: box.left + scrollLeft - clientLeft
                };
            }
            return null;
        }
        function styles() {
            const window = ssr_window_esm_getWindow();
            if (this[0]) return window.getComputedStyle(this[0], null);
            return {};
        }
        function css(props, value) {
            const window = ssr_window_esm_getWindow();
            let i;
            if (1 === arguments.length) if ("string" === typeof props) {
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
            } else {
                for (i = 0; i < this.length; i += 1) for (const prop in props) this[i].style[prop] = props[prop];
                return this;
            }
            if (2 === arguments.length && "string" === typeof props) {
                for (i = 0; i < this.length; i += 1) this[i].style[props] = value;
                return this;
            }
            return this;
        }
        function each(callback) {
            if (!callback) return this;
            this.forEach(((el, index) => {
                callback.apply(el, [ el, index ]);
            }));
            return this;
        }
        function filter(callback) {
            const result = arrayFilter(this, callback);
            return dom7_esm_$(result);
        }
        function html(html) {
            if ("undefined" === typeof html) return this[0] ? this[0].innerHTML : null;
            for (let i = 0; i < this.length; i += 1) this[i].innerHTML = html;
            return this;
        }
        function dom7_esm_text(text) {
            if ("undefined" === typeof text) return this[0] ? this[0].textContent.trim() : null;
            for (let i = 0; i < this.length; i += 1) this[i].textContent = text;
            return this;
        }
        function is(selector) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            const el = this[0];
            let compareWith;
            let i;
            if (!el || "undefined" === typeof selector) return false;
            if ("string" === typeof selector) {
                if (el.matches) return el.matches(selector);
                if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
                if (el.msMatchesSelector) return el.msMatchesSelector(selector);
                compareWith = dom7_esm_$(selector);
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            if (selector === document) return el === document;
            if (selector === window) return el === window;
            if (selector.nodeType || selector instanceof Dom7) {
                compareWith = selector.nodeType ? [ selector ] : selector;
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            return false;
        }
        function index() {
            let child = this[0];
            let i;
            if (child) {
                i = 0;
                while (null !== (child = child.previousSibling)) if (1 === child.nodeType) i += 1;
                return i;
            }
            return;
        }
        function eq(index) {
            if ("undefined" === typeof index) return this;
            const length = this.length;
            if (index > length - 1) return dom7_esm_$([]);
            if (index < 0) {
                const returnIndex = length + index;
                if (returnIndex < 0) return dom7_esm_$([]);
                return dom7_esm_$([ this[returnIndex] ]);
            }
            return dom7_esm_$([ this[index] ]);
        }
        function append(...els) {
            let newChild;
            const document = ssr_window_esm_getDocument();
            for (let k = 0; k < els.length; k += 1) {
                newChild = els[k];
                for (let i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                    const tempDiv = document.createElement("div");
                    tempDiv.innerHTML = newChild;
                    while (tempDiv.firstChild) this[i].appendChild(tempDiv.firstChild);
                } else if (newChild instanceof Dom7) for (let j = 0; j < newChild.length; j += 1) this[i].appendChild(newChild[j]); else this[i].appendChild(newChild);
            }
            return this;
        }
        function prepend(newChild) {
            const document = ssr_window_esm_getDocument();
            let i;
            let j;
            for (i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = newChild;
                for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
            } else if (newChild instanceof Dom7) for (j = 0; j < newChild.length; j += 1) this[i].insertBefore(newChild[j], this[i].childNodes[0]); else this[i].insertBefore(newChild, this[i].childNodes[0]);
            return this;
        }
        function next(selector) {
            if (this.length > 0) {
                if (selector) {
                    if (this[0].nextElementSibling && dom7_esm_$(this[0].nextElementSibling).is(selector)) return dom7_esm_$([ this[0].nextElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (this[0].nextElementSibling) return dom7_esm_$([ this[0].nextElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function nextAll(selector) {
            const nextEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (dom7_esm_$(next).is(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return dom7_esm_$(nextEls);
        }
        function prev(selector) {
            if (this.length > 0) {
                const el = this[0];
                if (selector) {
                    if (el.previousElementSibling && dom7_esm_$(el.previousElementSibling).is(selector)) return dom7_esm_$([ el.previousElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (el.previousElementSibling) return dom7_esm_$([ el.previousElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function prevAll(selector) {
            const prevEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (dom7_esm_$(prev).is(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return dom7_esm_$(prevEls);
        }
        function dom7_esm_parent(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) if (null !== this[i].parentNode) if (selector) {
                if (dom7_esm_$(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
            } else parents.push(this[i].parentNode);
            return dom7_esm_$(parents);
        }
        function parents(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) {
                let parent = this[i].parentNode;
                while (parent) {
                    if (selector) {
                        if (dom7_esm_$(parent).is(selector)) parents.push(parent);
                    } else parents.push(parent);
                    parent = parent.parentNode;
                }
            }
            return dom7_esm_$(parents);
        }
        function closest(selector) {
            let closest = this;
            if ("undefined" === typeof selector) return dom7_esm_$([]);
            if (!closest.is(selector)) closest = closest.parents(selector).eq(0);
            return closest;
        }
        function find(selector) {
            const foundElements = [];
            for (let i = 0; i < this.length; i += 1) {
                const found = this[i].querySelectorAll(selector);
                for (let j = 0; j < found.length; j += 1) foundElements.push(found[j]);
            }
            return dom7_esm_$(foundElements);
        }
        function children(selector) {
            const children = [];
            for (let i = 0; i < this.length; i += 1) {
                const childNodes = this[i].children;
                for (let j = 0; j < childNodes.length; j += 1) if (!selector || dom7_esm_$(childNodes[j]).is(selector)) children.push(childNodes[j]);
            }
            return dom7_esm_$(children);
        }
        function remove() {
            for (let i = 0; i < this.length; i += 1) if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
            return this;
        }
        const noTrigger = "resize scroll".split(" ");
        function shortcut(name) {
            function eventHandler(...args) {
                if ("undefined" === typeof args[0]) {
                    for (let i = 0; i < this.length; i += 1) if (noTrigger.indexOf(name) < 0) if (name in this[i]) this[i][name](); else dom7_esm_$(this[i]).trigger(name);
                    return this;
                }
                return this.on(name, ...args);
            }
            return eventHandler;
        }
        shortcut("click");
        shortcut("blur");
        shortcut("focus");
        shortcut("focusin");
        shortcut("focusout");
        shortcut("keyup");
        shortcut("keydown");
        shortcut("keypress");
        shortcut("submit");
        shortcut("change");
        shortcut("mousedown");
        shortcut("mousemove");
        shortcut("mouseup");
        shortcut("mouseenter");
        shortcut("mouseleave");
        shortcut("mouseout");
        shortcut("mouseover");
        shortcut("touchstart");
        shortcut("touchend");
        shortcut("touchmove");
        shortcut("resize");
        shortcut("scroll");
        const Methods = {
            addClass,
            removeClass,
            hasClass,
            toggleClass,
            attr,
            removeAttr,
            transform,
            transition,
            on,
            off,
            trigger,
            transitionEnd,
            outerWidth: dom7_esm_outerWidth,
            outerHeight: dom7_esm_outerHeight,
            styles,
            offset,
            css,
            each,
            html,
            text: dom7_esm_text,
            is,
            index,
            eq,
            append,
            prepend,
            next,
            nextAll,
            prev,
            prevAll,
            parent: dom7_esm_parent,
            parents,
            closest,
            find,
            children,
            filter,
            remove
        };
        Object.keys(Methods).forEach((methodName => {
            Object.defineProperty(dom7_esm_$.fn, methodName, {
                value: Methods[methodName],
                writable: true
            });
        }));
        const dom = dom7_esm_$;
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay = 0) {
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis = "x") {
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix("none" === curTransform ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if ("x" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (16 === matrix.length) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if ("y" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (16 === matrix.length) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return "object" === typeof o && null !== o && o.constructor && "Object" === Object.prototype.toString.call(o).slice(8, -1);
        }
        function isNode(node) {
            if ("undefined" !== typeof window && "undefined" !== typeof window.HTMLElement) return node instanceof HTMLElement;
            return node && (1 === node.nodeType || 11 === node.nodeType);
        }
        function utils_extend(...args) {
            const to = Object(args[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < args.length; i += 1) {
                const nextSource = args[i];
                if (void 0 !== nextSource && null !== nextSource && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (void 0 !== desc && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll({swiper, targetPosition, side}) {
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => "next" === dir && current >= target || "prev" === dir && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (null === startTime) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                passiveListener: function checkPassiveListener() {
                    let supportsPassive = false;
                    try {
                        const opts = Object.defineProperty({}, "passive", {
                            get() {
                                supportsPassive = true;
                            }
                        });
                        window.addEventListener("testPassiveListener", null, opts);
                    } catch (e) {}
                    return supportsPassive;
                }(),
                gestures: function checkGestures() {
                    return "ongesturestart" in window;
                }()
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice({userAgent} = {}) {
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = "Win32" === platform;
            let macos = "MacIntel" === platform;
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides = {}) {
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            return {
                isSafari: isSafari(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize({swiper, on, emit}) {
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((({contentBoxSize, contentRect, target}) => {
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && "undefined" !== typeof window.ResizeObserver) {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer({swiper, extendParams, on, emit}) {
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = (target, options = {}) => {
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (1 === mutations.length) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: "undefined" === typeof options.attributes ? true : options.attributes,
                    childList: "undefined" === typeof options.childList ? true : options.childList,
                    characterData: "undefined" === typeof options.characterData ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = swiper.$el.parents();
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.$el[0], {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.$wrapperEl[0], {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        const events_emitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                function onceHandler(...args) {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if ("undefined" === typeof handler) self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit(...args) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                if ("string" === typeof args[0] || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const $el = swiper.$el;
            if ("undefined" !== typeof swiper.params.width && null !== swiper.params.width) width = swiper.params.width; else width = $el[0].clientWidth;
            if ("undefined" !== typeof swiper.params.height && null !== swiper.params.height) height = swiper.params.height; else height = $el[0].clientHeight;
            if (0 === width && swiper.isHorizontal() || 0 === height && swiper.isVertical()) return;
            width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10);
            height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {$wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if ("function" === typeof offsetBefore) offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if ("function" === typeof offsetAfter) offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if ("undefined" === typeof swiperSize) return;
            if ("string" === typeof spaceBetween && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
            swiper.virtualSize = -spaceBetween;
            if (rtl) slides.css({
                marginLeft: "",
                marginBottom: "",
                marginTop: ""
            }); else slides.css({
                marginRight: "",
                marginBottom: "",
                marginTop: ""
            });
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            let slideSize;
            const shouldResetSlideSize = "auto" === params.slidesPerView && params.breakpoints && Object.keys(params.breakpoints).filter((key => "undefined" !== typeof params.breakpoints[key].slidesPerView)).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                const slide = slides.eq(i);
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if ("none" === slide.css("display")) continue;
                if ("auto" === params.slidesPerView) {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide[0]);
                    const currentTransform = slide[0].style.transform;
                    const currentWebKitTransform = slide[0].style.webkitTransform;
                    if (currentTransform) slide[0].style.transform = "none";
                    if (currentWebKitTransform) slide[0].style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && "border-box" === boxSizing) slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide[0];
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide[0].style.transform = currentTransform;
                    if (currentWebKitTransform) slide[0].style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (0 === prevSlideSize && 0 !== i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (0 === i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && ("slide" === params.effect || "coverflow" === params.effect)) $wrapperEl.css({
                width: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (params.setWrapperSize) $wrapperEl.css({
                [getDirectionLabel("width")]: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (0 === snapGrid.length) snapGrid = [ 0 ];
            if (0 !== params.spaceBetween) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).css({
                    [key]: `${spaceBetween}px`
                });
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap < 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (!isVirtual && !params.cssMode && ("slide" === params.effect || "fade" === params.effect)) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.$el.removeClass(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if ("number" === typeof speed) swiper.setTransition(speed); else if (true === speed) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides.filter((el => parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index))[0];
                return swiper.slides.eq(index)[0];
            };
            if ("auto" !== swiper.params.slidesPerView && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || dom([])).each((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if ("undefined" !== typeof activeSlides[i]) {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || 0 === newHeight) swiper.$wrapperEl.css("height", `${newHeight}px`);
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
        }
        function updateSlidesProgress(translate = this && this.translate || 0) {
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (0 === slides.length) return;
            if ("undefined" === typeof slides[0].swiperSlideOffset) swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.removeClass(params.slideVisibleClass);
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides.eq(i).addClass(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
            swiper.visibleSlides = dom(swiper.visibleSlides);
        }
        function updateProgress(translate) {
            const swiper = this;
            if ("undefined" === typeof translate) {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (0 === translatesDiff) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                isBeginning = progress <= 0;
                isEnd = progress >= 1;
            }
            Object.assign(swiper, {
                progress,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, $wrapperEl, activeIndex, realIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
            let activeSlide;
            if (isVirtual) activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides.eq(activeIndex);
            activeSlide.addClass(params.slideActiveClass);
            if (params.loop) if (activeSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
            let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
            if (params.loop && 0 === nextSlide.length) {
                nextSlide = slides.eq(0);
                nextSlide.addClass(params.slideNextClass);
            }
            let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
            if (params.loop && 0 === prevSlide.length) {
                prevSlide = slides.eq(-1);
                prevSlide.addClass(params.slidePrevClass);
            }
            if (params.loop) {
                if (nextSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
                if (prevSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {slidesGrid, snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            if ("undefined" === typeof activeIndex) {
                for (let i = 0; i < slidesGrid.length; i += 1) if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
                } else if (translate >= slidesGrid[i]) activeIndex = i;
                if (params.normalizeSlideIndex) if (activeIndex < 0 || "undefined" === typeof activeIndex) activeIndex = 0;
            }
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                return;
            }
            const realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
            Object.assign(swiper, {
                snapIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = dom(e).closest(`.${params.slideClass}`)[0];
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(dom(slide).attr("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && void 0 !== swiper.clickedIndex && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        const update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis = (this.isHorizontal() ? "x" : "y")) {
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, $wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate($wrapperEl[0], axis);
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, $wrapperEl, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (0 === speed) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (0 === speed) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        const translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration);
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit({swiper, runCallbacks, direction, step}) {
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if ("reset" === dir) {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if ("next" === dir) swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks = true, direction) {
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd_transitionEnd(runCallbacks = true, direction) {
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        const core_transition = {
            setTransition,
            transitionStart,
            transitionEnd: transitionEnd_transitionEnd
        };
        function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
            if ("number" !== typeof index && "string" !== typeof index) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
            if ("string" === typeof index) {
                const indexAsNumber = parseInt(index, 10);
                const isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                index = indexAsNumber;
            }
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(100 * translate);
                const normalizedGrid = Math.floor(100 * slidesGrid[i]);
                const normalizedGridNext = Math.floor(100 * slidesGrid[i + 1]);
                if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if ("slide" !== params.effect) swiper.setTranslate(translate);
                if ("reset" !== direction) {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (0 === speed) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._swiperImmediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (0 === speed) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
            if ("string" === typeof index) {
                const indexAsNumber = parseInt(index, 10);
                const isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                index = indexAsNumber;
            }
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) newIndex += swiper.loopedSlides;
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            const {animating, enabled, params} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            const {params, animating, snapGrid, slidesGrid, rtlTranslate, enabled} = swiper;
            if (!enabled) return swiper;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if ("undefined" === typeof prevSnap && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if ("undefined" !== typeof prevSnapIndex) prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if ("undefined" !== typeof prevSnap) {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = .5) {
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, $wrapperEl} = swiper;
            const slidesPerView = "auto" === params.slidesPerView ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(dom(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        const slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, $wrapperEl} = swiper;
            const $selector = $wrapperEl.children().length > 0 ? dom($wrapperEl.children()[0].parentNode) : $wrapperEl;
            $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
            let slides = $selector.children(`.${params.slideClass}`);
            if (params.loopFillGroupWithBlank) {
                const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
                if (blankSlidesNum !== params.slidesPerGroup) {
                    for (let i = 0; i < blankSlidesNum; i += 1) {
                        const blankNode = dom(document.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                        $selector.append(blankNode);
                    }
                    slides = $selector.children(`.${params.slideClass}`);
                }
            }
            if ("auto" === params.slidesPerView && !params.loopedSlides) params.loopedSlides = slides.length;
            swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
            swiper.loopedSlides += params.loopAdditionalSlides;
            if (swiper.loopedSlides > slides.length && swiper.params.loopedSlidesLimit) swiper.loopedSlides = slides.length;
            const prependSlides = [];
            const appendSlides = [];
            slides.each(((el, index) => {
                const slide = dom(el);
                slide.attr("data-swiper-slide-index", index);
            }));
            for (let i = 0; i < swiper.loopedSlides; i += 1) {
                const index = i - Math.floor(i / slides.length) * slides.length;
                appendSlides.push(slides.eq(index)[0]);
                prependSlides.unshift(slides.eq(slides.length - index - 1)[0]);
            }
            for (let i = 0; i < appendSlides.length; i += 1) $selector.append(dom(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
            for (let i = prependSlides.length - 1; i >= 0; i -= 1) $selector.prepend(dom(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
        function loopFix() {
            const swiper = this;
            swiper.emit("beforeLoopFix");
            const {activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl} = swiper;
            let newIndex;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            const snapTranslate = -snapGrid[activeIndex];
            const diff = snapTranslate - swiper.getTranslate();
            if (activeIndex < loopedSlides) {
                newIndex = slides.length - 3 * loopedSlides + activeIndex;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            } else if (activeIndex >= slides.length - loopedSlides) {
                newIndex = -slides.length + activeIndex + loopedSlides;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {$wrapperEl, params, slides} = swiper;
            $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
            slides.removeAttr("data-swiper-slide-index");
        }
        const loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = "container" === swiper.params.touchEventsTarget ? swiper.el : swiper.wrapperEl;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            swiper["container" === swiper.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "";
        }
        const grab_cursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base = this) {
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let $targetEl = dom(e.target);
            if ("wrapper" === params.touchEventsTarget) if (!$targetEl.closest(swiper.wrapperEl).length) return;
            data.isTouchEvent = "touchstart" === e.type;
            if (!data.isTouchEvent && "which" in e && 3 === e.which) return;
            if (!data.isTouchEvent && "button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && "" !== params.noSwipingClass;
            const eventPath = event.composedPath ? event.composedPath() : event.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) $targetEl = dom(eventPath[0]);
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!$targetEl.closest(params.swipeHandler)[0]) return;
            touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX;
            touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if ("prevent" === edgeSwipeDetection) event.preventDefault(); else return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            if ("touchstart" !== e.type) {
                let preventDefault = true;
                if ($targetEl.is(data.focusableElements)) {
                    preventDefault = false;
                    if ("SELECT" === $targetEl[0].nodeName) data.isTouched = false;
                }
                if (document.activeElement && dom(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) document.activeElement.blur();
                const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
                if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) e.preventDefault();
            }
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            if (data.isTouchEvent && "touchmove" !== e.type) return;
            const targetTouch = "touchmove" === e.type && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
            const pageX = "touchmove" === e.type ? targetTouch.pageX : e.pageX;
            const pageY = "touchmove" === e.type ? targetTouch.pageY : e.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!dom(e.target).is(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (data.isTouchEvent && document.activeElement) if (e.target === document.activeElement && dom(e.target).is(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if ("undefined" === typeof data.isScrolling) {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = 180 * Math.atan2(Math.abs(diffY), Math.abs(diffX)) / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if ("undefined" === typeof data.startMoving) if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            if (!data.isMoved) {
                if (params.loop && !params.cssMode) swiper.loopFix();
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
                data.allowMomentumBounce = false;
                if (params.grabCursor && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            let diff = swiper.isHorizontal() ? diffX : diffY;
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) diff = -diff;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
            } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && "next" === swiper.swipeDirection && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && "prev" === swiper.swipeDirection && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || 0 === touches.diff || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (swiper.params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if ("undefined" !== typeof slidesGrid[i + increment]) {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if ("next" === swiper.swipeDirection) if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if ("prev" === swiper.swipeDirection) if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (null !== rewindLastIndex && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if ("next" === swiper.swipeDirection) swiper.slideTo(null !== rewindFirstIndex ? rewindFirstIndex : stopIndex + increment);
                    if ("prev" === swiper.swipeDirection) swiper.slideTo(null !== rewindLastIndex ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && 0 === el.offsetWidth) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            if (("auto" === params.slidesPerView || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.run();
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (0 === swiper.translate) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        let dummyEventAttached = false;
        function dummyEventListener() {}
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, touchEvents, el, wrapperEl, device, support} = swiper;
            const capture = !!params.nested;
            const domMethod = "on" === method ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            if (!support.touch) {
                el[domMethod](touchEvents.start, swiper.onTouchStart, false);
                document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
                document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
            } else {
                const passiveListener = "touchstart" === touchEvents.start && support.passiveListener && params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
                el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
                    passive: false,
                    capture
                } : capture);
                el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
                if (touchEvents.cancel) el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
            }
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
        };
        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, support} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            if (support.touch && !dummyEventAttached) {
                document.addEventListener("touchstart", dummyEventListener);
                dummyEventAttached = true;
            }
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        const core_events = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {activeIndex, initialized, loopedSlides = 0, params, $el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && 0 === Object.keys(breakpoints).length) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                $el.addClass(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && "column" === breakpointParams.grid.fill || !breakpointParams.grid.fill && "column" === params.grid.fill) $el.addClass(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate();
                swiper.updateSlides();
                swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base = "window", containerEl) {
            if (!breakpoints || "container" === base && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = "window" === base ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if ("string" === typeof point && 0 === point.indexOf("@")) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if ("window" === base) {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        const breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if ("object" === typeof item) Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if ("string" === typeof item) resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, $el, device, support} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "pointer-events": !support.touch
            }, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && "column" === params.grid.fill
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            $el.addClass([ ...classNames ].join(" "));
            swiper.emitContainerClasses();
        }
        function removeClasses_removeClasses() {
            const swiper = this;
            const {$el, classNames} = swiper;
            $el.removeClass(classNames.join(" "));
            swiper.emitContainerClasses();
        }
        const classes = {
            addClasses,
            removeClasses: removeClasses_removeClasses
        };
        function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
            const window = ssr_window_esm_getWindow();
            let image;
            function onReady() {
                if (callback) callback();
            }
            const isPicture = dom(imageEl).parent("picture")[0];
            if (!isPicture && (!imageEl.complete || !checkForComplete)) if (src) {
                image = new window.Image;
                image.onload = onReady;
                image.onerror = onReady;
                if (sizes) image.sizes = sizes;
                if (srcset) image.srcset = srcset;
                if (src) image.src = src;
            } else onReady(); else onReady();
        }
        function preloadImages() {
            const swiper = this;
            swiper.imagesToLoad = swiper.$el.find("img");
            function onReady() {
                if ("undefined" === typeof swiper || null === swiper || !swiper || swiper.destroyed) return;
                if (void 0 !== swiper.imagesLoaded) swiper.imagesLoaded += 1;
                if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                    if (swiper.params.updateOnImagesReady) swiper.update();
                    swiper.emit("imagesReady");
                }
            }
            for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
                const imageEl = swiper.imagesToLoad[i];
                swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
            }
        }
        const core_images = {
            loadImage,
            preloadImages
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + 2 * slidesOffsetBefore;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = 1 === swiper.snapGrid.length;
            if (true === params.allowSlideNext) swiper.allowSlideNext = !swiper.isLocked;
            if (true === params.allowSlidePrev) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        const check_overflow = {
            checkOverflow
        };
        const defaults = {
            init: true,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 0,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            preloadImages: true,
            updateOnImagesReady: true,
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopedSlidesLimit: true,
            loopFillGroupWithBlank: false,
            loopPreventsSlide: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj = {}) {
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if ("object" !== typeof moduleParams || null === moduleParams) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && true === params[moduleParamName]) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (true === params[moduleParamName]) params[moduleParamName] = {
                    enabled: true
                };
                if ("object" === typeof params[moduleParamName] && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter: events_emitter,
            update,
            translate,
            transition: core_transition,
            slide,
            loop,
            grabCursor: grab_cursor,
            events: core_events,
            breakpoints,
            checkOverflow: check_overflow,
            classes,
            images: core_images
        };
        const extendedDefaults = {};
        class core_Swiper {
            constructor(...args) {
                let el;
                let params;
                if (1 === args.length && args[0].constructor && "Object" === Object.prototype.toString.call(args[0]).slice(8, -1)) params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                if (params.el && dom(params.el).length > 1) {
                    const swipers = [];
                    dom(params.el).each((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new core_Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                swiper.$ = dom;
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: dom(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return "horizontal" === swiper.params.direction;
                    },
                    isVertical() {
                        return "vertical" === swiper.params.direction;
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEvents: function touchEvents() {
                        const touch = [ "touchstart", "touchmove", "touchend", "touchcancel" ];
                        const desktop = [ "pointerdown", "pointermove", "pointerup" ];
                        swiper.touchEventsTouch = {
                            start: touch[0],
                            move: touch[1],
                            end: touch[2],
                            cancel: touch[3]
                        };
                        swiper.touchEventsDesktop = {
                            start: desktop[0],
                            move: desktop[1],
                            end: desktop[2]
                        };
                        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                    }(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: utils_now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, "undefined" === typeof speed ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => 0 === className.indexOf("swiper") || 0 === className.indexOf(swiper.params.containerModifierClass)));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => 0 === className.indexOf("swiper-slide") || 0 === className.indexOf(swiper.params.slideClass))).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.each((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view = "current", exact = false) {
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex].swiperSlideSize;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if ("current" === view) for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? -1 * swiper.translate : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
                    setTranslate();
                    if (swiper.params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if (("auto" === swiper.params.slidesPerView || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true); else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate = true) {
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = "horizontal" === currentDirection ? "vertical" : "horizontal";
                if (newDirection === currentDirection || "horizontal" !== newDirection && "vertical" !== newDirection) return swiper;
                swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.each((slideEl => {
                    if ("vertical" === newDirection) slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && "rtl" === direction || !swiper.rtl && "ltr" === direction) return;
                swiper.rtl = "rtl" === direction;
                swiper.rtlTranslate = "horizontal" === swiper.params.direction && swiper.rtl;
                if (swiper.rtl) {
                    swiper.$el.addClass(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.$el.removeClass(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(el) {
                const swiper = this;
                if (swiper.mounted) return true;
                const $el = dom(el || swiper.params.el);
                el = $el[0];
                if (!el) return false;
                el.swiper = swiper;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = dom(el.shadowRoot.querySelector(getWrapperSelector()));
                        res.children = options => $el.children(options);
                        return res;
                    }
                    if (!$el.children) return dom($el).children(getWrapperSelector());
                    return $el.children(getWrapperSelector());
                };
                let $wrapperEl = getWrapper();
                if (0 === $wrapperEl.length && swiper.params.createElements) {
                    const document = ssr_window_esm_getDocument();
                    const wrapper = document.createElement("div");
                    $wrapperEl = dom(wrapper);
                    wrapper.className = swiper.params.wrapperClass;
                    $el.append(wrapper);
                    $el.children(`.${swiper.params.slideClass}`).each((slideEl => {
                        $wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    $el,
                    el,
                    $wrapperEl,
                    wrapperEl: $wrapperEl[0],
                    mounted: true,
                    rtl: "rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction"),
                    rtlTranslate: "horizontal" === swiper.params.direction && ("rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction")),
                    wrongRTL: "-webkit-box" === $wrapperEl.css("display")
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (false === mounted) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                if (swiper.params.loop) swiper.loopCreate();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.preloadImages) swiper.preloadImages();
                if (swiper.params.loop) swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                swiper.attachEvents();
                swiper.initialized = true;
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance = true, cleanStyles = true) {
                const swiper = this;
                const {params, $el, $wrapperEl, slides} = swiper;
                if ("undefined" === typeof swiper.params || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    $el.removeAttr("style");
                    $wrapperEl.removeAttr("style");
                    if (slides && slides.length) slides.removeClass([ params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (false !== deleteInstance) {
                    swiper.$el[0].swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!core_Swiper.prototype.__modules__) core_Swiper.prototype.__modules__ = [];
                const modules = core_Swiper.prototype.__modules__;
                if ("function" === typeof mod && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => core_Swiper.installModule(m)));
                    return core_Swiper;
                }
                core_Swiper.installModule(module);
                return core_Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        core_Swiper.use([ Resize, Observer ]);
        const core = core_Swiper;
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            const document = ssr_window_esm_getDocument();
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && true === params.auto) {
                    let element = swiper.$el.children(`.${checkProps[key]}`)[0];
                    if (!element) {
                        element = document.createElement("div");
                        element.className = checkProps[key];
                        swiper.$el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function classes_to_selector_classesToSelector(classes = "") {
            return `.${classes.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
        }
        function Pagination({swiper, extendParams, on, emit}) {
            const pfx = "swiper-pagination";
            extendParams({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: "bullets",
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: number => number,
                    formatFractionTotal: number => number,
                    bulletClass: `${pfx}-bullet`,
                    bulletActiveClass: `${pfx}-bullet-active`,
                    modifierClass: `${pfx}-`,
                    currentClass: `${pfx}-current`,
                    totalClass: `${pfx}-total`,
                    hiddenClass: `${pfx}-hidden`,
                    progressbarFillClass: `${pfx}-progressbar-fill`,
                    progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                    clickableClass: `${pfx}-clickable`,
                    lockClass: `${pfx}-lock`,
                    horizontalClass: `${pfx}-horizontal`,
                    verticalClass: `${pfx}-vertical`,
                    paginationDisabledClass: `${pfx}-disabled`
                }
            });
            swiper.pagination = {
                el: null,
                $el: null,
                bullets: []
            };
            let bulletSize;
            let dynamicBulletIndex = 0;
            function isPaginationDisabled() {
                return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || 0 === swiper.pagination.$el.length;
            }
            function setSideBullets($bulletEl, position) {
                const {bulletActiveClass} = swiper.params.pagination;
                $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
            }
            function update() {
                const rtl = swiper.rtl;
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const $el = swiper.pagination.$el;
                let current;
                const total = swiper.params.loop ? Math.ceil((slidesLength - 2 * swiper.loopedSlides) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.loop) {
                    current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
                    if (current > slidesLength - 1 - 2 * swiper.loopedSlides) current -= slidesLength - 2 * swiper.loopedSlides;
                    if (current > total - 1) current -= total;
                    if (current < 0 && "bullets" !== swiper.params.paginationType) current = total + current;
                } else if ("undefined" !== typeof swiper.snapIndex) current = swiper.snapIndex; else current = swiper.activeIndex || 0;
                if ("bullets" === params.type && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    const bullets = swiper.pagination.bullets;
                    let firstIndex;
                    let lastIndex;
                    let midIndex;
                    if (params.dynamicBullets) {
                        bulletSize = bullets.eq(0)[swiper.isHorizontal() ? "outerWidth" : "outerHeight"](true);
                        $el.css(swiper.isHorizontal() ? "width" : "height", `${bulletSize * (params.dynamicMainBullets + 4)}px`);
                        if (params.dynamicMainBullets > 1 && void 0 !== swiper.previousIndex) {
                            dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);
                            if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1; else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                        }
                        firstIndex = Math.max(current - dynamicBulletIndex, 0);
                        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                        midIndex = (lastIndex + firstIndex) / 2;
                    }
                    bullets.removeClass([ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((suffix => `${params.bulletActiveClass}${suffix}`)).join(" "));
                    if ($el.length > 1) bullets.each((bullet => {
                        const $bullet = dom(bullet);
                        const bulletIndex = $bullet.index();
                        if (bulletIndex === current) $bullet.addClass(params.bulletActiveClass);
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) $bullet.addClass(`${params.bulletActiveClass}-main`);
                            if (bulletIndex === firstIndex) setSideBullets($bullet, "prev");
                            if (bulletIndex === lastIndex) setSideBullets($bullet, "next");
                        }
                    })); else {
                        const $bullet = bullets.eq(current);
                        const bulletIndex = $bullet.index();
                        $bullet.addClass(params.bulletActiveClass);
                        if (params.dynamicBullets) {
                            const $firstDisplayedBullet = bullets.eq(firstIndex);
                            const $lastDisplayedBullet = bullets.eq(lastIndex);
                            for (let i = firstIndex; i <= lastIndex; i += 1) bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
                            if (swiper.params.loop) if (bulletIndex >= bullets.length) {
                                for (let i = params.dynamicMainBullets; i >= 0; i -= 1) bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
                                bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
                            } else {
                                setSideBullets($firstDisplayedBullet, "prev");
                                setSideBullets($lastDisplayedBullet, "next");
                            } else {
                                setSideBullets($firstDisplayedBullet, "prev");
                                setSideBullets($lastDisplayedBullet, "next");
                            }
                        }
                    }
                    if (params.dynamicBullets) {
                        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                        const offsetProp = rtl ? "right" : "left";
                        bullets.css(swiper.isHorizontal() ? offsetProp : "top", `${bulletsOffset}px`);
                    }
                }
                if ("fraction" === params.type) {
                    $el.find(classes_to_selector_classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
                    $el.find(classes_to_selector_classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
                }
                if ("progressbar" === params.type) {
                    let progressbarDirection;
                    if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                    const scale = (current + 1) / total;
                    let scaleX = 1;
                    let scaleY = 1;
                    if ("horizontal" === progressbarDirection) scaleX = scale; else scaleY = scale;
                    $el.find(classes_to_selector_classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
                }
                if ("custom" === params.type && params.renderCustom) {
                    $el.html(params.renderCustom(swiper, current + 1, total));
                    emit("paginationRender", $el[0]);
                } else emit("paginationUpdate", $el[0]);
                if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
            }
            function render() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const $el = swiper.pagination.$el;
                let paginationHTML = "";
                if ("bullets" === params.type) {
                    let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - 2 * swiper.loopedSlides) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                    for (let i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
                    $el.html(paginationHTML);
                    swiper.pagination.bullets = $el.find(classes_to_selector_classesToSelector(params.bulletClass));
                }
                if ("fraction" === params.type) {
                    if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
                    $el.html(paginationHTML);
                }
                if ("progressbar" === params.type) {
                    if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                    $el.html(paginationHTML);
                }
                if ("custom" !== params.type) emit("paginationRender", swiper.pagination.$el[0]);
            }
            function init() {
                swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                    el: "swiper-pagination"
                });
                const params = swiper.params.pagination;
                if (!params.el) return;
                let $el = dom(params.el);
                if (0 === $el.length) return;
                if (swiper.params.uniqueNavElements && "string" === typeof params.el && $el.length > 1) {
                    $el = swiper.$el.find(params.el);
                    if ($el.length > 1) $el = $el.filter((el => {
                        if (dom(el).parents(".swiper")[0] !== swiper.el) return false;
                        return true;
                    }));
                }
                if ("bullets" === params.type && params.clickable) $el.addClass(params.clickableClass);
                $el.addClass(params.modifierClass + params.type);
                $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if ("bullets" === params.type && params.dynamicBullets) {
                    $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
                    dynamicBulletIndex = 0;
                    if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                }
                if ("progressbar" === params.type && params.progressbarOpposite) $el.addClass(params.progressbarOppositeClass);
                if (params.clickable) $el.on("click", classes_to_selector_classesToSelector(params.bulletClass), (function onClick(e) {
                    e.preventDefault();
                    let index = dom(this).index() * swiper.params.slidesPerGroup;
                    if (swiper.params.loop) index += swiper.loopedSlides;
                    swiper.slideTo(index);
                }));
                Object.assign(swiper.pagination, {
                    $el,
                    el: $el[0]
                });
                if (!swiper.enabled) $el.addClass(params.lockClass);
            }
            function destroy() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const $el = swiper.pagination.$el;
                $el.removeClass(params.hiddenClass);
                $el.removeClass(params.modifierClass + params.type);
                $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
                if (params.clickable) $el.off("click", classes_to_selector_classesToSelector(params.bulletClass));
            }
            on("init", (() => {
                if (false === swiper.params.pagination.enabled) disable(); else {
                    init();
                    render();
                    update();
                }
            }));
            on("activeIndexChange", (() => {
                if (swiper.params.loop) update(); else if ("undefined" === typeof swiper.snapIndex) update();
            }));
            on("snapIndexChange", (() => {
                if (!swiper.params.loop) update();
            }));
            on("slidesLengthChange", (() => {
                if (swiper.params.loop) {
                    render();
                    update();
                }
            }));
            on("snapGridLengthChange", (() => {
                if (!swiper.params.loop) {
                    render();
                    update();
                }
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                const {$el} = swiper.pagination;
                if ($el) $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.pagination.lockClass);
            }));
            on("lock unlock", (() => {
                update();
            }));
            on("click", ((_s, e) => {
                const targetEl = e.target;
                const {$el} = swiper.pagination;
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el && $el.length > 0 && !dom(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
                    if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                    const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
                    if (true === isHidden) emit("paginationShow"); else emit("paginationHide");
                    $el.toggleClass(swiper.params.pagination.hiddenClass);
                }
            }));
            const enable = () => {
                swiper.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
                if (swiper.pagination.$el) swiper.pagination.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
                init();
                render();
                update();
            };
            const disable = () => {
                swiper.$el.addClass(swiper.params.pagination.paginationDisabledClass);
                if (swiper.pagination.$el) swiper.pagination.$el.addClass(swiper.params.pagination.paginationDisabledClass);
                destroy();
            };
            Object.assign(swiper.pagination, {
                enable,
                disable,
                render,
                update,
                init,
                destroy
            });
        }
        function Lazy({swiper, extendParams, on, emit}) {
            extendParams({
                lazy: {
                    checkInView: false,
                    enabled: false,
                    loadPrevNext: false,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: false,
                    scrollingElement: "",
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            });
            swiper.lazy = {};
            let scrollHandlerAttached = false;
            let initialImageLoaded = false;
            function loadInSlide(index, loadInDuplicate = true) {
                const params = swiper.params.lazy;
                if ("undefined" === typeof index) return;
                if (0 === swiper.slides.length) return;
                const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                const $slideEl = isVirtual ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`) : swiper.slides.eq(index);
                const $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);
                if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) $images.push($slideEl[0]);
                if (0 === $images.length) return;
                $images.each((imageEl => {
                    const $imageEl = dom(imageEl);
                    $imageEl.addClass(params.loadingClass);
                    const background = $imageEl.attr("data-background");
                    const src = $imageEl.attr("data-src");
                    const srcset = $imageEl.attr("data-srcset");
                    const sizes = $imageEl.attr("data-sizes");
                    const $pictureEl = $imageEl.parent("picture");
                    swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, (() => {
                        if ("undefined" === typeof swiper || null === swiper || !swiper || swiper && !swiper.params || swiper.destroyed) return;
                        if (background) {
                            $imageEl.css("background-image", `url("${background}")`);
                            $imageEl.removeAttr("data-background");
                        } else {
                            if (srcset) {
                                $imageEl.attr("srcset", srcset);
                                $imageEl.removeAttr("data-srcset");
                            }
                            if (sizes) {
                                $imageEl.attr("sizes", sizes);
                                $imageEl.removeAttr("data-sizes");
                            }
                            if ($pictureEl.length) $pictureEl.children("source").each((sourceEl => {
                                const $source = dom(sourceEl);
                                if ($source.attr("data-srcset")) {
                                    $source.attr("srcset", $source.attr("data-srcset"));
                                    $source.removeAttr("data-srcset");
                                }
                            }));
                            if (src) {
                                $imageEl.attr("src", src);
                                $imageEl.removeAttr("data-src");
                            }
                        }
                        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
                        $slideEl.find(`.${params.preloaderClass}`).remove();
                        if (swiper.params.loop && loadInDuplicate) {
                            const slideOriginalIndex = $slideEl.attr("data-swiper-slide-index");
                            if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                                const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
                                loadInSlide(originalSlide.index(), false);
                            } else {
                                const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
                                loadInSlide(duplicatedSlide.index(), false);
                            }
                        }
                        emit("lazyImageReady", $slideEl[0], $imageEl[0]);
                        if (swiper.params.autoHeight) swiper.updateAutoHeight();
                    }));
                    emit("lazyImageLoad", $slideEl[0], $imageEl[0]);
                }));
            }
            function load() {
                const {$wrapperEl, params: swiperParams, slides, activeIndex} = swiper;
                const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
                const params = swiperParams.lazy;
                let slidesPerView = swiperParams.slidesPerView;
                if ("auto" === slidesPerView) slidesPerView = 0;
                function slideExist(index) {
                    if (isVirtual) {
                        if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) return true;
                    } else if (slides[index]) return true;
                    return false;
                }
                function slideIndex(slideEl) {
                    if (isVirtual) return dom(slideEl).attr("data-swiper-slide-index");
                    return dom(slideEl).index();
                }
                if (!initialImageLoaded) initialImageLoaded = true;
                if (swiper.params.watchSlidesProgress) $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each((slideEl => {
                    const index = isVirtual ? dom(slideEl).attr("data-swiper-slide-index") : dom(slideEl).index();
                    loadInSlide(index);
                })); else if (slidesPerView > 1) {
                    for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) if (slideExist(i)) loadInSlide(i);
                } else loadInSlide(activeIndex);
                if (params.loadPrevNext) if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
                    const amount = params.loadPrevNextAmount;
                    const spv = Math.ceil(slidesPerView);
                    const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
                    const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
                    for (let i = activeIndex + spv; i < maxIndex; i += 1) if (slideExist(i)) loadInSlide(i);
                    for (let i = minIndex; i < activeIndex; i += 1) if (slideExist(i)) loadInSlide(i);
                } else {
                    const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
                    if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
                    const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
                    if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
                }
            }
            function checkInViewOnLoad() {
                const window = ssr_window_esm_getWindow();
                if (!swiper || swiper.destroyed) return;
                const $scrollElement = swiper.params.lazy.scrollingElement ? dom(swiper.params.lazy.scrollingElement) : dom(window);
                const isWindow = $scrollElement[0] === window;
                const scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
                const scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
                const swiperOffset = swiper.$el.offset();
                const {rtlTranslate: rtl} = swiper;
                let inView = false;
                if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
                const swiperCoord = [ [ swiperOffset.left, swiperOffset.top ], [ swiperOffset.left + swiper.width, swiperOffset.top ], [ swiperOffset.left, swiperOffset.top + swiper.height ], [ swiperOffset.left + swiper.width, swiperOffset.top + swiper.height ] ];
                for (let i = 0; i < swiperCoord.length; i += 1) {
                    const point = swiperCoord[i];
                    if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
                        if (0 === point[0] && 0 === point[1]) continue;
                        inView = true;
                    }
                }
                const passiveListener = "touchstart" === swiper.touchEvents.start && swiper.support.passiveListener && swiper.params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                if (inView) {
                    load();
                    $scrollElement.off("scroll", checkInViewOnLoad, passiveListener);
                } else if (!scrollHandlerAttached) {
                    scrollHandlerAttached = true;
                    $scrollElement.on("scroll", checkInViewOnLoad, passiveListener);
                }
            }
            on("beforeInit", (() => {
                if (swiper.params.lazy.enabled && swiper.params.preloadImages) swiper.params.preloadImages = false;
            }));
            on("init", (() => {
                if (swiper.params.lazy.enabled) if (swiper.params.lazy.checkInView) checkInViewOnLoad(); else load();
            }));
            on("scroll", (() => {
                if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) load();
            }));
            on("scrollbarDragMove resize _freeModeNoMomentumRelease", (() => {
                if (swiper.params.lazy.enabled) if (swiper.params.lazy.checkInView) checkInViewOnLoad(); else load();
            }));
            on("transitionStart", (() => {
                if (swiper.params.lazy.enabled) if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded) if (swiper.params.lazy.checkInView) checkInViewOnLoad(); else load();
            }));
            on("transitionEnd", (() => {
                if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) if (swiper.params.lazy.checkInView) checkInViewOnLoad(); else load();
            }));
            on("slideChange", (() => {
                const {lazy, cssMode, watchSlidesProgress, touchReleaseOnEdges, resistanceRatio} = swiper.params;
                if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || 0 === resistanceRatio))) load();
            }));
            on("destroy", (() => {
                if (!swiper.$el) return;
                swiper.$el.find(`.${swiper.params.lazy.loadingClass}`).removeClass(swiper.params.lazy.loadingClass);
            }));
            Object.assign(swiper.lazy, {
                load,
                loadInSlide
            });
        }
        function Autoplay({swiper, extendParams, on, emit}) {
            let timeout;
            swiper.autoplay = {
                running: false,
                paused: false
            };
            extendParams({
                autoplay: {
                    enabled: false,
                    delay: 3e3,
                    waitForTransition: true,
                    disableOnInteraction: true,
                    stopOnLastSlide: false,
                    reverseDirection: false,
                    pauseOnMouseEnter: false
                }
            });
            function run() {
                if (!swiper.size) {
                    swiper.autoplay.running = false;
                    swiper.autoplay.paused = false;
                    return;
                }
                const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
                let delay = swiper.params.autoplay.delay;
                if ($activeSlideEl.attr("data-swiper-autoplay")) delay = $activeSlideEl.attr("data-swiper-autoplay") || swiper.params.autoplay.delay;
                clearTimeout(timeout);
                timeout = utils_nextTick((() => {
                    let autoplayResult;
                    if (swiper.params.autoplay.reverseDirection) if (swiper.params.loop) {
                        swiper.loopFix();
                        autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.isBeginning) {
                        autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                        emit("autoplay");
                    } else stop(); else if (swiper.params.loop) {
                        swiper.loopFix();
                        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.isEnd) {
                        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
                        emit("autoplay");
                    } else stop();
                    if (swiper.params.cssMode && swiper.autoplay.running) run(); else if (false === autoplayResult) run();
                }), delay);
            }
            function start() {
                if ("undefined" !== typeof timeout) return false;
                if (swiper.autoplay.running) return false;
                swiper.autoplay.running = true;
                emit("autoplayStart");
                run();
                return true;
            }
            function stop() {
                if (!swiper.autoplay.running) return false;
                if ("undefined" === typeof timeout) return false;
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = void 0;
                }
                swiper.autoplay.running = false;
                emit("autoplayStop");
                return true;
            }
            function pause(speed) {
                if (!swiper.autoplay.running) return;
                if (swiper.autoplay.paused) return;
                if (timeout) clearTimeout(timeout);
                swiper.autoplay.paused = true;
                if (0 === speed || !swiper.params.autoplay.waitForTransition) {
                    swiper.autoplay.paused = false;
                    run();
                } else [ "transitionend", "webkitTransitionEnd" ].forEach((event => {
                    swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
                }));
            }
            function onVisibilityChange() {
                const document = ssr_window_esm_getDocument();
                if ("hidden" === document.visibilityState && swiper.autoplay.running) pause();
                if ("visible" === document.visibilityState && swiper.autoplay.paused) {
                    run();
                    swiper.autoplay.paused = false;
                }
            }
            function onTransitionEnd(e) {
                if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
                if (e.target !== swiper.$wrapperEl[0]) return;
                [ "transitionend", "webkitTransitionEnd" ].forEach((event => {
                    swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
                }));
                swiper.autoplay.paused = false;
                if (!swiper.autoplay.running) stop(); else run();
            }
            function onMouseEnter() {
                if (swiper.params.autoplay.disableOnInteraction) stop(); else {
                    emit("autoplayPause");
                    pause();
                }
                [ "transitionend", "webkitTransitionEnd" ].forEach((event => {
                    swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
                }));
            }
            function onMouseLeave() {
                if (swiper.params.autoplay.disableOnInteraction) return;
                swiper.autoplay.paused = false;
                emit("autoplayResume");
                run();
            }
            function attachMouseEvents() {
                if (swiper.params.autoplay.pauseOnMouseEnter) {
                    swiper.$el.on("mouseenter", onMouseEnter);
                    swiper.$el.on("mouseleave", onMouseLeave);
                }
            }
            function detachMouseEvents() {
                swiper.$el.off("mouseenter", onMouseEnter);
                swiper.$el.off("mouseleave", onMouseLeave);
            }
            on("init", (() => {
                if (swiper.params.autoplay.enabled) {
                    start();
                    const document = ssr_window_esm_getDocument();
                    document.addEventListener("visibilitychange", onVisibilityChange);
                    attachMouseEvents();
                }
            }));
            on("beforeTransitionStart", ((_s, speed, internal) => {
                if (swiper.autoplay.running) if (internal || !swiper.params.autoplay.disableOnInteraction) swiper.autoplay.pause(speed); else stop();
            }));
            on("sliderFirstMove", (() => {
                if (swiper.autoplay.running) if (swiper.params.autoplay.disableOnInteraction) stop(); else pause();
            }));
            on("touchEnd", (() => {
                if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) run();
            }));
            on("destroy", (() => {
                detachMouseEvents();
                if (swiper.autoplay.running) stop();
                const document = ssr_window_esm_getDocument();
                document.removeEventListener("visibilitychange", onVisibilityChange);
            }));
            Object.assign(swiper.autoplay, {
                pause,
                run,
                start,
                stop
            });
        }
        function initSliders() {
            if (document.querySelector(".swiper")) new core(".swiper", {
                modules: [ Pagination, Autoplay, Lazy ],
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 0,
                autoHeight: false,
                speed: 800,
                simulateTouch: true,
                loop: true,
                preloadImages: false,
                lazy: true,
                autoplay: {
                    delay: 3e3,
                    disableOnInteraction: false
                },
                pagination: {
                    el: ".product__nav",
                    clickable: true,
                    hideOnClick: false,
                    bulletClass: "product__dot",
                    bulletActiveClass: "product__dot_active",
                    renderBullet: (index, className) => {
                        const items = document.querySelectorAll(".product__nav-text");
                        const itemsText = [];
                        items.forEach((item => {
                            itemsText.push(item.textContent);
                        }));
                        return `<span class="${className}">${itemsText[index]}</span>`;
                    }
                },
                on: {}
            });
        }
        window.addEventListener("load", (function(e) {
            initSliders();
        }));
        var lazyload_min = __webpack_require__(732);
        new lazyload_min({
            elements_selector: "[data-src],[data-srcset]",
            class_loaded: "_lazy-loaded",
            use_native: true
        });
        let gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    const headerElement = document.querySelector(headerItem);
                    if (!headerElement.classList.contains("_header-scroll")) {
                        headerElement.style.cssText = `transition-duration: 0s;`;
                        headerElement.classList.add("_header-scroll");
                        headerItemHeight = headerElement.offsetHeight;
                        headerElement.classList.remove("_header-scroll");
                        setTimeout((() => {
                            headerElement.style.cssText = ``;
                        }), 0);
                    } else headerItemHeight = headerElement.offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if ("undefined" !== typeof SmoothScroll) (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                FLS(`[gotoBlock]: Юхуу...едем к ${targetBlock}`);
            } else FLS(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${targetBlock}`);
        };
        class FullPage {
            constructor(element, options) {
                let config = {
                    noEventSelector: "[data-no-event]",
                    сlassInit: "fp-init",
                    wrapperAnimatedClass: "fp-switching",
                    selectorSection: "[data-fp-section]",
                    activeClass: "active-section",
                    previousClass: "previous-section",
                    nextClass: "next-section",
                    idActiveSection: 0,
                    mode: element.dataset.fpEffect ? element.dataset.fpEffect : "slider",
                    bullets: element.hasAttribute("data-fp-bullets") ? true : false,
                    bulletsClass: "fp-bullets",
                    bulletClass: "fp-bullet",
                    bulletActiveClass: "fp-bullet-active",
                    onInit: function() {},
                    onSwitching: function() {},
                    onDestroy: function() {}
                };
                this.options = Object.assign(config, options);
                this.wrapper = element;
                this.sections = this.wrapper.querySelectorAll(this.options.selectorSection);
                this.activeSection = false;
                this.activeSectionId = false;
                this.previousSection = false;
                this.previousSectionId = false;
                this.nextSection = false;
                this.nextSectionId = false;
                this.bulletsWrapper = false;
                this.stopEvent = false;
                if (this.sections.length) this.init();
            }
            init() {
                if (this.options.idActiveSection > this.sections.length - 1) return;
                this.setId();
                this.activeSectionId = this.options.idActiveSection;
                this.setEffectsClasses();
                this.setClasses();
                this.setStyle();
                if (this.options.bullets) {
                    this.setBullets();
                    this.setActiveBullet(this.activeSectionId);
                }
                this.events();
                setTimeout((() => {
                    document.documentElement.classList.add(this.options.сlassInit);
                    this.options.onInit(this);
                    document.dispatchEvent(new CustomEvent("fpinit", {
                        detail: {
                            fp: this
                        }
                    }));
                }), 0);
            }
            destroy() {
                this.removeEvents();
                this.removeClasses();
                document.documentElement.classList.remove(this.options.сlassInit);
                this.wrapper.classList.remove(this.options.wrapperAnimatedClass);
                this.removeEffectsClasses();
                this.removeZIndex();
                this.removeStyle();
                this.removeId();
                this.options.onDestroy(this);
                document.dispatchEvent(new CustomEvent("fpdestroy", {
                    detail: {
                        fp: this
                    }
                }));
            }
            setId() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    section.setAttribute("data-fp-id", index);
                }
            }
            removeId() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    section.removeAttribute("data-fp-id");
                }
            }
            setClasses() {
                this.previousSectionId = this.activeSectionId - 1 >= 0 ? this.activeSectionId - 1 : false;
                this.nextSectionId = this.activeSectionId + 1 < this.sections.length ? this.activeSectionId + 1 : false;
                this.activeSection = this.sections[this.activeSectionId];
                this.activeSection.classList.add(this.options.activeClass);
                if (false !== this.previousSectionId) {
                    this.previousSection = this.sections[this.previousSectionId];
                    this.previousSection.classList.add(this.options.previousClass);
                } else this.previousSection = false;
                if (false !== this.nextSectionId) {
                    this.nextSection = this.sections[this.nextSectionId];
                    this.nextSection.classList.add(this.options.nextClass);
                } else this.nextSection = false;
            }
            removeEffectsClasses() {
                switch (this.options.mode) {
                  case "slider":
                    this.wrapper.classList.remove("slider-mode");
                    break;

                  case "cards":
                    this.wrapper.classList.remove("cards-mode");
                    this.setZIndex();
                    break;

                  case "fade":
                    this.wrapper.classList.remove("fade-mode");
                    this.setZIndex();
                    break;

                  default:
                    break;
                }
            }
            setEffectsClasses() {
                switch (this.options.mode) {
                  case "slider":
                    this.wrapper.classList.add("slider-mode");
                    break;

                  case "cards":
                    this.wrapper.classList.add("cards-mode");
                    this.setZIndex();
                    break;

                  case "fade":
                    this.wrapper.classList.add("fade-mode");
                    this.setZIndex();
                    break;

                  default:
                    break;
                }
            }
            setStyle() {
                switch (this.options.mode) {
                  case "slider":
                    this.styleSlider();
                    break;

                  case "cards":
                    this.styleCards();
                    break;

                  case "fade":
                    this.styleFade();
                    break;

                  default:
                    break;
                }
            }
            styleSlider() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    if (index === this.activeSectionId) section.style.transform = "translate3D(0,0,0)"; else if (index < this.activeSectionId) section.style.transform = "translate3D(0,-100%,0)"; else if (index > this.activeSectionId) section.style.transform = "translate3D(0,100%,0)";
                }
            }
            styleCards() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    if (index >= this.activeSectionId) section.style.transform = "translate3D(0,0,0)"; else if (index < this.activeSectionId) section.style.transform = "translate3D(0,-100%,0)";
                }
            }
            styleFade() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    if (index === this.activeSectionId) {
                        section.style.opacity = "1";
                        section.style.visibility = "visible";
                    } else {
                        section.style.opacity = "0";
                        section.style.visibility = "hidden";
                    }
                }
            }
            removeStyle() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    section.style.opacity = "";
                    section.style.visibility = "";
                    section.style.transform = "";
                }
            }
            checkScroll(yCoord, element) {
                this.goScroll = false;
                if (!this.stopEvent && element) {
                    this.goScroll = true;
                    if (this.haveScroll(element)) {
                        this.goScroll = false;
                        const position = Math.round(element.scrollHeight - element.scrollTop);
                        if (Math.abs(position - element.scrollHeight) < 2 && yCoord <= 0 || Math.abs(position - element.clientHeight) < 2 && yCoord >= 0) this.goScroll = true;
                    }
                }
            }
            haveScroll(element) {
                return element.scrollHeight !== window.innerHeight;
            }
            removeClasses() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    section.classList.remove(this.options.activeClass);
                    section.classList.remove(this.options.previousClass);
                    section.classList.remove(this.options.nextClass);
                }
            }
            events() {
                this.events = {
                    wheel: this.wheel.bind(this),
                    touchdown: this.touchDown.bind(this),
                    touchup: this.touchUp.bind(this),
                    touchmove: this.touchMove.bind(this),
                    touchcancel: this.touchUp.bind(this),
                    transitionEnd: this.transitionend.bind(this),
                    click: this.clickBullets.bind(this)
                };
                if (isMobile.iOS()) document.addEventListener("touchmove", (e => {
                    e.preventDefault();
                }));
                this.setEvents();
            }
            setEvents() {
                this.wrapper.addEventListener("wheel", this.events.wheel);
                this.wrapper.addEventListener("touchstart", this.events.touchdown);
                if (this.options.bullets && this.bulletsWrapper) this.bulletsWrapper.addEventListener("click", this.events.click);
            }
            removeEvents() {
                this.wrapper.removeEventListener("wheel", this.events.wheel);
                this.wrapper.removeEventListener("touchdown", this.events.touchdown);
                this.wrapper.removeEventListener("touchup", this.events.touchup);
                this.wrapper.removeEventListener("touchcancel", this.events.touchup);
                this.wrapper.removeEventListener("touchmove", this.events.touchmove);
                if (this.bulletsWrapper) this.bulletsWrapper.removeEventListener("click", this.events.click);
            }
            clickBullets(e) {
                const bullet = e.target.closest(`.${this.options.bulletClass}`);
                if (bullet) {
                    const arrayChildren = Array.from(this.bulletsWrapper.children);
                    const idClickBullet = arrayChildren.indexOf(bullet);
                    this.switchingSection(idClickBullet);
                }
            }
            setActiveBullet(idButton) {
                if (!this.bulletsWrapper) return;
                const bullets = this.bulletsWrapper.children;
                for (let index = 0; index < bullets.length; index++) {
                    const bullet = bullets[index];
                    if (idButton === index) bullet.classList.add(this.options.bulletActiveClass); else bullet.classList.remove(this.options.bulletActiveClass);
                }
            }
            touchDown(e) {
                this._yP = e.changedTouches[0].pageY;
                this._eventElement = e.target.closest(`.${this.options.activeClass}`);
                if (this._eventElement) {
                    this._eventElement.addEventListener("touchend", this.events.touchup);
                    this._eventElement.addEventListener("touchcancel", this.events.touchup);
                    this._eventElement.addEventListener("touchmove", this.events.touchmove);
                    this.clickOrTouch = true;
                    if (isMobile.iOS()) {
                        if (this._eventElement.scrollHeight !== this._eventElement.clientHeight) {
                            if (0 === this._eventElement.scrollTop) this._eventElement.scrollTop = 1;
                            if (this._eventElement.scrollTop === this._eventElement.scrollHeight - this._eventElement.clientHeight) this._eventElement.scrollTop = this._eventElement.scrollHeight - this._eventElement.clientHeight - 1;
                        }
                        this.allowUp = this._eventElement.scrollTop > 0;
                        this.allowDown = this._eventElement.scrollTop < this._eventElement.scrollHeight - this._eventElement.clientHeight;
                        this.lastY = e.changedTouches[0].pageY;
                    }
                }
            }
            touchMove(e) {
                const targetElement = e.target.closest(`.${this.options.activeClass}`);
                if (isMobile.iOS()) {
                    let up = e.changedTouches[0].pageY > this.lastY;
                    let down = !up;
                    this.lastY = e.changedTouches[0].pageY;
                    if (targetElement) if (up && this.allowUp || down && this.allowDown) e.stopPropagation(); else if (e.cancelable) e.preventDefault();
                }
                if (!this.clickOrTouch || e.target.closest(this.options.noEventSelector)) return;
                let yCoord = this._yP - e.changedTouches[0].pageY;
                this.checkScroll(yCoord, targetElement);
                if (this.goScroll && Math.abs(yCoord) > 20) this.choiceOfDirection(yCoord);
            }
            touchUp(e) {
                this._eventElement.removeEventListener("touchend", this.events.touchup);
                this._eventElement.removeEventListener("touchcancel", this.events.touchup);
                this._eventElement.removeEventListener("touchmove", this.events.touchmove);
                return this.clickOrTouch = false;
            }
            transitionend(e) {
                if (e.target.closest(this.options.selectorSection)) {
                    this.stopEvent = false;
                    this.wrapper.classList.remove(this.options.wrapperAnimatedClass);
                }
            }
            wheel(e) {
                if (e.target.closest(this.options.noEventSelector)) return;
                const yCoord = e.deltaY;
                const targetElement = e.target.closest(`.${this.options.activeClass}`);
                this.checkScroll(yCoord, targetElement);
                if (this.goScroll) this.choiceOfDirection(yCoord);
            }
            choiceOfDirection(direction) {
                this.stopEvent = true;
                if (0 === this.activeSectionId && direction < 0 || this.activeSectionId === this.sections.length - 1 && direction > 0) this.stopEvent = false;
                if (direction > 0 && false !== this.nextSection) this.activeSectionId = this.activeSectionId + 1 < this.sections.length ? ++this.activeSectionId : this.activeSectionId; else if (direction < 0 && false !== this.previousSection) this.activeSectionId = this.activeSectionId - 1 >= 0 ? --this.activeSectionId : this.activeSectionId;
                if (this.stopEvent) this.switchingSection();
            }
            switchingSection(idSection = this.activeSectionId) {
                this.activeSectionId = idSection;
                this.wrapper.classList.add(this.options.wrapperAnimatedClass);
                this.wrapper.addEventListener("transitionend", this.events.transitionEnd);
                this.removeClasses();
                this.setClasses();
                this.setStyle();
                if (this.options.bullets) this.setActiveBullet(this.activeSectionId);
                this.options.onSwitching(this);
                document.dispatchEvent(new CustomEvent("fpswitching", {
                    detail: {
                        fp: this
                    }
                }));
            }
            setBullets() {
                this.bulletsWrapper = document.querySelector(`.${this.options.bulletsClass}`);
                if (!this.bulletsWrapper) {
                    const bullets = document.createElement("div");
                    bullets.classList.add(this.options.bulletsClass);
                    this.wrapper.append(bullets);
                    this.bulletsWrapper = bullets;
                }
                if (this.bulletsWrapper) for (let index = 0; index < this.sections.length; index++) {
                    const span = document.createElement("span");
                    span.classList.add(this.options.bulletClass);
                    this.bulletsWrapper.append(span);
                }
            }
            setZIndex() {
                let zIndex = this.sections.length;
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    section.style.zIndex = zIndex;
                    --zIndex;
                }
            }
            removeZIndex() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    section.style.zIndex = "";
                }
            }
        }
        if (document.querySelector("[data-fp]")) flsModules.fullpage = new FullPage(document.querySelector("[data-fp]"), "");
        let addWindowScrollEvent = false;
        function pageNavigation() {
            document.addEventListener("click", pageNavigationAction);
            document.addEventListener("watcherCallback", pageNavigationAction);
            function pageNavigationAction(e) {
                if ("click" === e.type) {
                    const targetElement = e.target;
                    if (targetElement.closest("[data-goto]")) {
                        const gotoLink = targetElement.closest("[data-goto]");
                        const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                        const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                        const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                        const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                        gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                        e.preventDefault();
                    }
                } else if ("watcherCallback" === e.type && e.detail) {
                    const entry = e.detail.entry;
                    const targetElement = entry.target;
                    if ("navigator" === targetElement.dataset.watch) {
                        document.querySelector(`[data-goto]._navigator-active`);
                        let navigatorCurrentItem;
                        if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                            const element = targetElement.classList[index];
                            if (document.querySelector(`[data-goto=".${element}"]`)) {
                                navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                                break;
                            }
                        }
                        if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                    }
                }
            }
            if (getHash()) {
                let goToHash;
                if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`; else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
                goToHash ? gotoBlock(goToHash, true, 500, 20) : null;
            }
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        function DynamicAdapt(type) {
            this.type = type;
        }
        DynamicAdapt.prototype.init = function() {
            const _this = this;
            this.оbjects = [];
            this.daClassname = "_dynamic_adapt_";
            this.nodes = document.querySelectorAll("[data-da]");
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(dataArray[0].trim());
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.оbjects.push(оbject);
            }
            this.arraySort(this.оbjects);
            this.mediaQueries = Array.prototype.map.call(this.оbjects, (function(item) {
                return "(" + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
            }), this);
            this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, (function(item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index;
            }));
            for (let i = 0; i < this.mediaQueries.length; i++) {
                const media = this.mediaQueries[i];
                const mediaSplit = String.prototype.split.call(media, ",");
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];
                const оbjectsFilter = Array.prototype.filter.call(this.оbjects, (function(item) {
                    return item.breakpoint === mediaBreakpoint;
                }));
                matchMedia.addListener((function() {
                    _this.mediaHandler(matchMedia, оbjectsFilter);
                }));
                this.mediaHandler(matchMedia, оbjectsFilter);
            }
        };
        DynamicAdapt.prototype.mediaHandler = function(matchMedia, оbjects) {
            if (matchMedia.matches) for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.moveTo(оbject.place, оbject.element, оbject.destination);
            } else for (let i = оbjects.length - 1; i >= 0; i--) {
                const оbject = оbjects[i];
                if (оbject.element.classList.contains(this.daClassname)) this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        };
        DynamicAdapt.prototype.moveTo = function(place, element, destination) {
            element.classList.add(this.daClassname);
            if ("last" === place || place >= destination.children.length) {
                destination.insertAdjacentElement("beforeend", element);
                return;
            }
            if ("first" === place) {
                destination.insertAdjacentElement("afterbegin", element);
                return;
            }
            destination.children[place].insertAdjacentElement("beforebegin", element);
        };
        DynamicAdapt.prototype.moveBack = function(parent, element, index) {
            element.classList.remove(this.daClassname);
            if (void 0 !== parent.children[index]) parent.children[index].insertAdjacentElement("beforebegin", element); else parent.insertAdjacentElement("beforeend", element);
        };
        DynamicAdapt.prototype.indexInParent = function(parent, element) {
            const array = Array.prototype.slice.call(parent.children);
            return Array.prototype.indexOf.call(array, element);
        };
        DynamicAdapt.prototype.arraySort = function(arr) {
            if ("min" === this.type) Array.prototype.sort.call(arr, (function(a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) return 0;
                    if ("first" === a.place || "last" === b.place) return -1;
                    if ("last" === a.place || "first" === b.place) return 1;
                    return a.place - b.place;
                }
                return a.breakpoint - b.breakpoint;
            })); else {
                Array.prototype.sort.call(arr, (function(a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if ("first" === a.place || "last" === b.place) return 1;
                        if ("last" === a.place || "first" === b.place) return -1;
                        return b.place - a.place;
                    }
                    return b.breakpoint - a.breakpoint;
                }));
                return;
            }
        };
        const da = new DynamicAdapt("max");
        da.init();
        var fancybox_umd = __webpack_require__(447);
        fancybox_umd.Fancybox.bind("[data-fancybox] a", {
            groupAll: true,
            autofocus: false,
            preload: false,
            keys: {
                Escape: "close",
                Delete: "close",
                Backspace: "close",
                PageUp: "next",
                PageDown: "prev",
                ArrowUp: "next",
                ArrowDown: "prev",
                ArrowRight: "next",
                ArrowLeft: "prev"
            }
        });
        window["FLS"] = true;
        isWebp();
        addLoadedClass();
        menuInit();
        pageNavigation();
    })();
})();