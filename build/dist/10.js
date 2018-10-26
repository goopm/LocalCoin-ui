(window.webpackJsonp = window.webpackJsonp || []).push([
    [10],
    {
        111: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                s = a(509),
                o = a.n(s),
                i = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            var l = (function(e) {
                function t() {
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t);
                    var e = (function(e, t) {
                        if (!e)
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            );
                        return !t ||
                            ("object" != typeof t && "function" != typeof t)
                            ? e
                            : t;
                    })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.state = {animateEnter: !1}), (e.timer = null), e;
                }
                return (
                    (function(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError(
                                "Super expression must either be null or a function, not " +
                                    typeof t
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                            t &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(e, t)
                                    : (e.__proto__ = t));
                    })(t, r.a.Component),
                    i(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                this.enableAnimation();
                            }
                        },
                        {
                            key: "resetAnimation",
                            value: function() {
                                this.setState({animateEnter: !1}),
                                    this.enableAnimation();
                            }
                        },
                        {
                            key: "enableAnimation",
                            value: function() {
                                var e = this;
                                this.timer = setTimeout(function() {
                                    e.timer && e.setState({animateEnter: !0});
                                }, 2e3);
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function() {
                                clearTimeout(this.timer), (this.timer = null);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                return this.props.children
                                    ? r.a.createElement(
                                          o.a,
                                          {
                                              className: this.props.className,
                                              component: this.props.component,
                                              transitionName: this.props
                                                  .transitionName,
                                              transitionEnterTimeout: this.props
                                                  .enterTimeout,
                                              transitionEnter: this.state
                                                  .animateEnter,
                                              transitionLeave: !1
                                          },
                                          this.props.children
                                      )
                                    : r.a.createElement(this.props.component);
                            }
                        }
                    ]),
                    t
                );
            })();
            (l.defaultProps = {component: "span", enterTimeout: 2e3}),
                (t.a = l);
        },
        138: function(e, t, a) {
            "use strict";
            a.d(t, "b", function() {
                return O;
            }),
                a.d(t, "a", function() {
                    return S;
                });
            var n = a(0),
                r = a.n(n),
                s = a(17),
                o = a(6),
                i = a(13),
                l = a(50),
                c = a(5),
                u = a(15),
                p = a(31),
                m = a(1),
                d = a.n(m),
                h = a(3),
                b = a.n(h),
                f = a(44),
                _ = a.n(f),
                g = a(278),
                y = a(42),
                v =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var n in a)
                                Object.prototype.hasOwnProperty.call(a, n) &&
                                    (e[n] = a[n]);
                        }
                        return e;
                    },
                E = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function w(e, t) {
                var a = {};
                for (var n in e)
                    t.indexOf(n) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(e, n) &&
                            (a[n] = e[n]));
                return a;
            }
            function k(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function C(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function A(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var N = (function(e) {
                function t(e) {
                    return (
                        k(this, t),
                        C(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        )
                    );
                }
                return (
                    A(t, g["a"]),
                    E(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                _.a.rebuild();
                            }
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function(e) {
                                return (
                                    (function e(t, a, n) {
                                        null === t && (t = Function.prototype);
                                        var r = Object.getOwnPropertyDescriptor(
                                            t,
                                            a
                                        );
                                        if (void 0 === r) {
                                            var s = Object.getPrototypeOf(t);
                                            return null === s
                                                ? void 0
                                                : e(s, a, n);
                                        }
                                        if ("value" in r) return r.value;
                                        var o = r.get;
                                        return void 0 !== o
                                            ? o.call(n)
                                            : void 0;
                                    })(
                                        t.prototype.__proto__ ||
                                            Object.getPrototypeOf(t.prototype),
                                        "shouldComponentUpdate",
                                        this
                                    ).call(this, e) ||
                                    !c.a.are_equal_shallow(
                                        e.pulsate,
                                        this.props.pulsate
                                    ) ||
                                    e.toAsset !== this.props.toAsset ||
                                    e.fromAsset !== this.props.fromAsset ||
                                    e.amount !== this.props.amount
                                );
                            }
                        },
                        {
                            key: "getValue",
                            value: function() {
                                var e = this.props,
                                    t = e.amount,
                                    a = e.toAsset,
                                    n = e.fromAsset,
                                    r = e.fullPrecision,
                                    s = e.marketStats,
                                    o = e.coreAsset;
                                return y.a.convertValue(t, a, n, s, o, r);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.amount,
                                    a = e.toAsset,
                                    n = e.fromAsset,
                                    o = e.fullPrecision,
                                    i = w(e, [
                                        "amount",
                                        "toAsset",
                                        "fromAsset",
                                        "fullPrecision"
                                    ]),
                                    l = a.get("id"),
                                    u = a.get("symbol");
                                o || (t = c.a.get_asset_amount(t, n));
                                var p = this.getValue();
                                return p || 0 === p
                                    ? r.a.createElement(
                                          s.a,
                                          v(
                                              {
                                                  noPrefix: !0,
                                                  amount: p,
                                                  asset: l,
                                                  decimalOffset:
                                                      -1 !== u.indexOf("BTC")
                                                          ? 4
                                                          : this.props
                                                                .fullDecimals
                                                              ? 0
                                                              : this.props
                                                                    .noDecimals
                                                                  ? a.get(
                                                                        "precision"
                                                                    )
                                                                  : a.get(
                                                                        "precision"
                                                                    ) - 2
                                              },
                                              i
                                          )
                                      )
                                    : r.a.createElement(
                                          "div",
                                          {
                                              className: "tooltip inline-block",
                                              "data-place": "bottom",
                                              "data-tip": b.a.translate(
                                                  "tooltip.no_price"
                                              ),
                                              style: {fontSize: "0.9rem"}
                                          },
                                          r.a.createElement(d.a, {
                                              content: "account.no_price"
                                          })
                                      );
                            }
                        }
                    ]),
                    t
                );
            })();
            (N.defaultProps = {
                fullPrecision: !0,
                noDecimals: !1,
                fullDecimals: !1,
                hide_asset: !1
            }),
                (N = Object(l.a)(N, {
                    propNames: ["toAsset", "fromAsset", "coreAsset"],
                    defaultProps: {toAsset: "1.3.0", coreAsset: "1.3.0"}
                }));
            var O = (function(e) {
                function t() {
                    return (
                        k(this, t),
                        C(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    A(t, r.a.Component),
                    E(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.refCallback,
                                    a = w(e, ["refCallback"]);
                                return r.a.createElement(N, v({}, a, {ref: t}));
                            }
                        }
                    ]),
                    t
                );
            })();
            O = Object(u.connect)(O, {
                listenTo: function() {
                    return [p.a];
                },
                getProps: function() {
                    return {marketStats: p.a.getState().allMarketStats};
                }
            });
            var S = (function(e) {
                function t() {
                    return (
                        k(this, t),
                        C(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    A(t, r.a.Component),
                    E(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.balance,
                                    a = w(e, ["balance"]),
                                    n = !!t.getIn(["balance", "amount"]),
                                    s = Number(
                                        n
                                            ? t.getIn(["balance", "amount"])
                                            : t.get("balance")
                                    ),
                                    o = n
                                        ? t.getIn(["balance", "asset_id"])
                                        : t.get("asset_type");
                                return isNaN(s)
                                    ? r.a.createElement("span", null, "--")
                                    : r.a.createElement(
                                          O,
                                          v(
                                              {
                                                  amount: s,
                                                  fromAsset: o,
                                                  noDecimals: !0
                                              },
                                              a
                                          )
                                      );
                            }
                        }
                    ]),
                    t
                );
            })();
            (S.propTypes = {balance: o.a.ChainObject.isRequired}),
                (S = Object(i.a)(S, {keep_updating: !0}));
        },
        150: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                s = a(5),
                o = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            var i = (function(e) {
                function t() {
                    return (
                        (function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                        (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    (function(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError(
                                "Super expression must either be null or a function, not " +
                                    typeof t
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                            t &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(e, t)
                                    : (e.__proto__ = t));
                    })(t, r.a.Component),
                    o(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.price,
                                    a = e.preFormattedPrice,
                                    n = e.quote,
                                    o = e.base,
                                    i = (e.component,
                                    a || s.a.price_to_text(t, n, o));
                                return i.full >= 1
                                    ? r.a.createElement(
                                          "span",
                                          null,
                                          r.a.createElement(
                                              "span",
                                              {className: "price-integer"},
                                              i.int,
                                              "."
                                          ),
                                          i.dec
                                              ? r.a.createElement(
                                                    "span",
                                                    {
                                                        className:
                                                            "price-integer"
                                                    },
                                                    i.dec
                                                )
                                              : null,
                                          i.trailing
                                              ? r.a.createElement(
                                                    "span",
                                                    {
                                                        className:
                                                            "price-decimal"
                                                    },
                                                    i.trailing
                                                )
                                              : null
                                      )
                                    : i.full >= 0.1
                                        ? r.a.createElement(
                                              "span",
                                              null,
                                              r.a.createElement(
                                                  "span",
                                                  {className: "price-decimal"},
                                                  i.int,
                                                  "."
                                              ),
                                              i.dec
                                                  ? r.a.createElement(
                                                        "span",
                                                        {
                                                            className:
                                                                "price-integer"
                                                        },
                                                        i.dec
                                                    )
                                                  : null,
                                              i.trailing
                                                  ? r.a.createElement(
                                                        "span",
                                                        {
                                                            className:
                                                                "price-decimal"
                                                        },
                                                        i.trailing
                                                    )
                                                  : null
                                          )
                                        : r.a.createElement(
                                              "span",
                                              null,
                                              r.a.createElement(
                                                  "span",
                                                  {className: "price-decimal"},
                                                  i.int,
                                                  "."
                                              ),
                                              i.dec
                                                  ? r.a.createElement(
                                                        "span",
                                                        {
                                                            className:
                                                                "price-decimal"
                                                        },
                                                        i.dec
                                                    )
                                                  : null,
                                              i.trailing
                                                  ? r.a.createElement(
                                                        "span",
                                                        {
                                                            className:
                                                                "price-integer"
                                                        },
                                                        i.trailing
                                                    )
                                                  : null
                                          );
                            }
                        }
                    ]),
                    t
                );
            })();
            t.a = i;
        },
        222: function(e, t, a) {
            "use strict";
            var n = a(563),
                r = a(0),
                s = a.n(r),
                o = a(2),
                i = a.n(o),
                l = a(20),
                c = a.n(l),
                u = a(34),
                p = a(63),
                m = a.n(p),
                d = a(1),
                h = a.n(d),
                b = a(6),
                f = a(13),
                _ = a(17),
                g = a(5),
                y = a(9),
                v = a.n(y),
                E = a(43),
                w = a(57),
                k = a(86),
                C = a(16),
                A = a(65),
                N = a(3),
                O = a.n(N),
                S = a(69),
                P = a(7),
                j = a.n(P),
                x = a(4),
                T = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function q(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function D(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function I(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var F = (function(e) {
                function t(e) {
                    q(this, t);
                    var a = D(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (a.state = a._initialState(e)), a;
                }
                return (
                    I(t, s.a.Component),
                    T(t, [
                        {
                            key: "_initialState",
                            value: function(e) {
                                var t = e ? this._getCurrentPosition(e) : {};
                                if (t.collateral) {
                                    var a = g.a.get_asset_amount(
                                            t.debt,
                                            e.quote_asset
                                        ),
                                        n = g.a.get_asset_amount(
                                            t.collateral,
                                            e.backing_asset
                                        );
                                    return {
                                        short_amount: a ? a.toString() : null,
                                        collateral: n ? n.toString() : null,
                                        collateral_ratio: this._getCollateralRatio(
                                            a,
                                            n
                                        ),
                                        errors: this._getInitialErrors(),
                                        isValid: !1,
                                        original_position: {
                                            debt: a,
                                            collateral: n
                                        }
                                    };
                                }
                                return {
                                    short_amount: 0,
                                    collateral: 0,
                                    collateral_ratio: this._getInitialCollateralRatio(
                                        e
                                    ),
                                    errors: this._getInitialErrors(),
                                    isValid: !1,
                                    original_position: {debt: 0, collateral: 0}
                                };
                            }
                        },
                        {
                            key: "componentDidMount",
                            value: function() {
                                var e = this._initialState(this.props);
                                this.setState(e), this._setUpdatedPosition(e);
                            }
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function(e, t) {
                                return !(
                                    g.a.are_equal_shallow(t, this.state) &&
                                    j.a.is(
                                        e.quote_asset,
                                        this.props.quote_asset
                                    ) &&
                                    !e.backing_asset.get("symbol") !==
                                        this.props.backing_asset.get(
                                            "symbol"
                                        ) &&
                                    j.a.is(e.account, this.props.account) &&
                                    j.a.is(
                                        e.call_orders,
                                        this.props.call_orders
                                    )
                                );
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                var t = this.state,
                                    a = t.short_amount,
                                    n = t.collateral,
                                    r = t.collateral_ratio;
                                if (
                                    e.account !== this.props.account ||
                                    e.hasCallOrders !==
                                        this.props.hasCallOrders ||
                                    e.quote_asset.get("id") !==
                                        this.props.quote_asset.get("id")
                                ) {
                                    var s = this._initialState(e),
                                        o = !1;
                                    (a || n || r) &&
                                        ((s.short_amount = a),
                                        (s.collateral = n),
                                        (s.collateral_ratio = r),
                                        (o = !0)),
                                        this.setState(s),
                                        o && this._validateFields(s);
                                }
                            }
                        },
                        {
                            key: "_getInitialErrors",
                            value: function() {
                                return {
                                    collateral_balance: null,
                                    ratio_too_high: null
                                };
                            }
                        },
                        {
                            key: "confirmClicked",
                            value: function(e) {
                                e.preventDefault(),
                                    c.a.publish(this.props.modalId, "close");
                            }
                        },
                        {
                            key: "_onBorrowChange",
                            value: function(e) {
                                var t = this._getFeedPrice(),
                                    a = e.amount.replace(/,/g, ""),
                                    n = {
                                        short_amount: a,
                                        collateral: (
                                            this.state.collateral_ratio *
                                            (a / t)
                                        ).toFixed(
                                            this.props.backing_asset.get(
                                                "precision"
                                            )
                                        ),
                                        collateral_ratio: this.state
                                            .collateral_ratio
                                    };
                                this.setState(n),
                                    this._validateFields(n),
                                    this._setUpdatedPosition(n);
                            }
                        },
                        {
                            key: "_onCollateralChange",
                            value: function(e) {
                                var t = e.amount.replace(/,/g, ""),
                                    a = this._getFeedPrice(),
                                    r = t / (this.state.short_amount / a),
                                    s = this._isPredictionMarket(this.props)
                                        ? {
                                              short_amount: t,
                                              collateral: t,
                                              collateral_ratio: 1
                                          }
                                        : {
                                              short_amount: this.state
                                                  .short_amount,
                                              collateral: t,
                                              collateral_ratio: Object(n.a)(r)
                                                  ? r
                                                  : this._getInitialCollateralRatio(
                                                        this.props
                                                    )
                                          };
                                this.setState(s),
                                    this._validateFields(s),
                                    this._setUpdatedPosition(s);
                            }
                        },
                        {
                            key: "_onRatioChange",
                            value: function(e) {
                                var t = this._getFeedPrice(),
                                    a = e.target;
                                new RegExp(/[[:digit:]]/).test(a.value) ||
                                    (a.value = a.value.replace(/[^0-9.]/g, "")),
                                    "." == a.value.charAt(0) &&
                                        (a.value = "0.");
                                var n = a.value,
                                    r = {
                                        short_amount: this.state.short_amount,
                                        collateral: (
                                            (this.state.short_amount / t) *
                                            n
                                        ).toFixed(
                                            this.props.backing_asset.get(
                                                "precision"
                                            )
                                        ),
                                        collateral_ratio: n
                                    };
                                this.setState(r),
                                    this._validateFields(r),
                                    this._setUpdatedPosition(r);
                            }
                        },
                        {
                            key: "_maximizeCollateral",
                            value: function() {
                                var e = this.props
                                        ? this._getCurrentPosition(this.props)
                                        : {},
                                    t = 0;
                                e.collateral &&
                                    (t = g.a.get_asset_amount(
                                        e.collateral,
                                        this.props.backing_asset
                                    ));
                                var a = Math.floor(
                                    Math.min(
                                        this.props.backing_balance.get(
                                            "balance"
                                        ) /
                                            g.a.get_asset_precision(
                                                this.props.backing_asset
                                            ) +
                                            t -
                                            10,
                                        (this.state.short_amount /
                                            this._getFeedPrice()) *
                                            1e3
                                    )
                                );
                                this._onCollateralChange(
                                    new Object({amount: a.toString()})
                                );
                            }
                        },
                        {
                            key: "_maximizeDebt",
                            value: function() {
                                var e = this.props
                                        ? this._getCurrentPosition(this.props)
                                        : {},
                                    t = 0;
                                e.collateral &&
                                    (t = g.a.get_asset_amount(
                                        e.collateral,
                                        this.props.backing_asset
                                    ));
                                var a =
                                        this.props.backing_balance.get(
                                            "balance"
                                        ) /
                                            g.a.get_asset_precision(
                                                this.props.backing_asset
                                            ) +
                                        t -
                                        10,
                                    n = {
                                        short_amount:
                                            (a / this.state.collateral_ratio) *
                                            this._getFeedPrice(),
                                        collateral: a,
                                        collateral_ratio: this.state
                                            .collateral_ratio
                                    };
                                this.setState(n),
                                    this._validateFields(n),
                                    this._setUpdatedPosition(n);
                            }
                        },
                        {
                            key: "_payDebt",
                            value: function() {
                                var e = this.props
                                    ? this._getCurrentPosition(this.props)
                                    : {debt: 0};
                                if (!(e.debt <= 0)) {
                                    var t = g.a.get_asset_amount(
                                        Math.max(
                                            e.debt -
                                                this.props.bitasset_balance.get(
                                                    "balance"
                                                ),
                                            0
                                        ),
                                        this.props.quote_asset
                                    );
                                    this._onBorrowChange({
                                        amount: t.toString()
                                    });
                                }
                            }
                        },
                        {
                            key: "_setUpdatedPosition",
                            value: function(e) {
                                this.setState({
                                    newPosition:
                                        parseFloat(e.short_amount) /
                                        parseFloat(e.collateral)
                                });
                            }
                        },
                        {
                            key: "_validateFields",
                            value: function(e) {
                                var t = this._getInitialErrors(),
                                    a = this.state.original_position,
                                    n = this.props.backing_balance
                                        ? this.props.backing_balance.toJS()
                                        : {balance: 0};
                                parseFloat(e.collateral) - a.collateral >
                                    g.a.get_asset_amount(
                                        n.balance,
                                        this.props.backing_asset.toJS()
                                    ) &&
                                    (t.collateral_balance = O.a.translate(
                                        "borrow.errors.collateral"
                                    ));
                                var r =
                                        e.short_amount >= 0 &&
                                        e.collateral >= 0 &&
                                        (e.short_amount != a.debt ||
                                            e.collateral != a.collateral),
                                    s =
                                        this.props.quote_asset.getIn([
                                            "bitasset",
                                            "current_feed",
                                            "maintenance_collateral_ratio"
                                        ]) / 1e3;
                                parseFloat(e.collateral_ratio) <
                                (this._isPredictionMarket(this.props) ? 1 : s)
                                    ? ((t.below_maintenance = O.a.translate(
                                          "borrow.errors.below",
                                          {mr: s}
                                      )),
                                      (r = !1))
                                    : parseFloat(e.collateral_ratio) <
                                          (this._isPredictionMarket(this.props)
                                              ? 1
                                              : s + 0.5) &&
                                      ((t.close_maintenance = O.a.translate(
                                          "borrow.errors.close",
                                          {mr: s}
                                      )),
                                      (r = !0)),
                                    this.setState({errors: t, isValid: r});
                            }
                        },
                        {
                            key: "_onSubmit",
                            value: function(e) {
                                e.preventDefault();
                                var t = g.a.get_asset_precision(
                                        this.props.quote_asset.get("precision")
                                    ),
                                    a = g.a.get_asset_precision(
                                        this.props.backing_asset.get(
                                            "precision"
                                        )
                                    ),
                                    n = this._getCurrentPosition(this.props),
                                    r = k.a.new_transaction();
                                r.add_type_operation("call_order_update", {
                                    fee: {amount: 0, asset_id: 0},
                                    funding_account: this.props.account.get(
                                        "id"
                                    ),
                                    delta_collateral: {
                                        amount: parseInt(
                                            this.state.collateral * a -
                                                n.collateral,
                                            10
                                        ),
                                        asset_id: this.props.backing_asset.get(
                                            "id"
                                        )
                                    },
                                    delta_debt: {
                                        amount: parseInt(
                                            this.state.short_amount * t -
                                                n.debt,
                                            10
                                        ),
                                        asset_id: this.props.quote_asset.get(
                                            "id"
                                        )
                                    }
                                }),
                                    C.a
                                        .process_transaction(r, null, !0)
                                        .catch(function(e) {}),
                                    c.a.publish(this.props.modalId, "close");
                            }
                        },
                        {
                            key: "_getCurrentPosition",
                            value: function(e) {
                                var t = {collateral: null, debt: null};
                                return (
                                    e &&
                                        e.hasCallOrders &&
                                        e.call_orders &&
                                        (t = (t = e.call_orders
                                            .filter(function(e) {
                                                return !!e;
                                            })
                                            .find(function(t) {
                                                return (
                                                    t.getIn([
                                                        "call_price",
                                                        "quote",
                                                        "asset_id"
                                                    ]) ===
                                                    e.quote_asset.get("id")
                                                );
                                            }))
                                            ? t.toJS()
                                            : {collateral: null, debt: null}),
                                    t
                                );
                            }
                        },
                        {
                            key: "_getFeedPrice",
                            value: function() {
                                return this.props
                                    ? this._isPredictionMarket(this.props)
                                        ? 1
                                        : 1 /
                                          g.a.get_asset_price(
                                              this.props.quote_asset.getIn([
                                                  "bitasset",
                                                  "current_feed",
                                                  "settlement_price",
                                                  "quote",
                                                  "amount"
                                              ]),
                                              this.props.backing_asset,
                                              this.props.quote_asset.getIn([
                                                  "bitasset",
                                                  "current_feed",
                                                  "settlement_price",
                                                  "base",
                                                  "amount"
                                              ]),
                                              this.props.quote_asset
                                          )
                                    : 1;
                            }
                        },
                        {
                            key: "_getInitialCollateralRatio",
                            value: function(e) {
                                return this._isPredictionMarket(e) ? 1 : 0;
                            }
                        },
                        {
                            key: "_getCollateralRatio",
                            value: function(e, t) {
                                return t / (e / this._getFeedPrice());
                            }
                        },
                        {
                            key: "_isPredictionMarket",
                            value: function(e) {
                                return e.quote_asset.getIn([
                                    "bitasset",
                                    "is_prediction_market"
                                ]);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    a = t.quote_asset,
                                    n = t.bitasset_balance,
                                    r = t.backing_asset,
                                    o = t.backing_balance,
                                    i = this.state,
                                    l = i.short_amount,
                                    c = i.collateral,
                                    u = i.collateral_ratio,
                                    p = i.errors,
                                    d = i.isValid,
                                    b = g.a.get_asset_precision(
                                        this.props.quote_asset.get("precision")
                                    ),
                                    f = g.a.get_asset_precision(
                                        this.props.backing_asset.get(
                                            "precision"
                                        )
                                    );
                                (u && !isNaN(u) && u > 0 && u < 1e3) || (u = 0),
                                    (n = n ? n.toJS() : {balance: 0, id: null}),
                                    (o = o ? o.toJS() : {balance: 0, id: null});
                                var y = v()("form-group", {
                                        "has-error": p.collateral_balance
                                    }),
                                    k = v()(
                                        "form-group",
                                        {"has-error": p.below_maintenance},
                                        {"has-warning": p.close_maintenance}
                                    ),
                                    C = v()(
                                        "button",
                                        {disabled: p.collateral_balance || !d},
                                        {success: d}
                                    ),
                                    N = this._getCurrentPosition(this.props),
                                    P = o.id ? x.b.getObject(o.id) : null,
                                    j =
                                        (P ? P.get("balance") : 0) -
                                        parseInt(
                                            this.state.collateral * f -
                                                N.collateral,
                                            10
                                        ),
                                    T = s.a.createElement(
                                        "span",
                                        null,
                                        s.a.createElement(
                                            "span",
                                            null,
                                            s.a.createElement(h.a, {
                                                component: "span",
                                                content: "transfer.available"
                                            }),
                                            ":",
                                            " ",
                                            n.id
                                                ? s.a.createElement(w.a, {
                                                      balance: n.id
                                                  })
                                                : s.a.createElement(_.a, {
                                                      amount: 0,
                                                      asset: a.get("id")
                                                  })
                                        ),
                                        s.a.createElement(
                                            "a",
                                            {onClick: this._payDebt.bind(this)},
                                            s.a.createElement(h.a, {
                                                content: "borrow.pay_max_debt"
                                            })
                                        ),
                                        "|",
                                        0 != u
                                            ? s.a.createElement(
                                                  "a",
                                                  {
                                                      onClick: this._maximizeDebt.bind(
                                                          this
                                                      )
                                                  },
                                                  s.a.createElement(h.a, {
                                                      content: "borrow.use_max"
                                                  })
                                              )
                                            : s.a.createElement(
                                                  "span",
                                                  {
                                                      className:
                                                          "disabled-link",
                                                      "data-place": "left",
                                                      "data-tip": O.a.translate(
                                                          "borrow.maximize_debt_set_ratio_slider"
                                                      )
                                                  },
                                                  s.a.createElement(h.a, {
                                                      content: "borrow.use_max"
                                                  })
                                              )
                                    ),
                                    q = s.a.createElement(
                                        "span",
                                        null,
                                        s.a.createElement(
                                            "span",
                                            null,
                                            s.a.createElement(h.a, {
                                                component: "span",
                                                content: "transfer.available"
                                            }),
                                            ":",
                                            " ",
                                            o.id
                                                ? s.a.createElement(_.a, {
                                                      amount: j,
                                                      asset: r.get("id")
                                                  })
                                                : s.a.createElement(_.a, {
                                                      amount: 0,
                                                      asset: r.get("id")
                                                  })
                                        ),
                                        s.a.createElement(
                                            "a",
                                            {
                                                onClick: this._maximizeCollateral.bind(
                                                    this
                                                )
                                            },
                                            s.a.createElement(h.a, {
                                                content: "borrow.use_max"
                                            })
                                        )
                                    ),
                                    D = this._getFeedPrice(),
                                    I =
                                        this.props.quote_asset.getIn([
                                            "bitasset",
                                            "current_feed",
                                            "maintenance_collateral_ratio"
                                        ]) / 1e3,
                                    F = (this.props.quote_asset.getIn([
                                        "bitasset",
                                        "current_feed",
                                        "maximum_short_squeeze_ratio"
                                    ]),
                                    this._isPredictionMarket(this.props));
                                return !F && isNaN(D)
                                    ? s.a.createElement(
                                          "div",
                                          null,
                                          s.a.createElement(
                                              "form",
                                              {
                                                  className:
                                                      "grid-container text-center no-overflow",
                                                  noValidate: !0
                                              },
                                              s.a.createElement(h.a, {
                                                  component: "h3",
                                                  content: "borrow.no_valid",
                                                  asset_symbol: a.get("symbol")
                                              })
                                          ),
                                          s.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "grid-content button-group text-center no-overflow"
                                              },
                                              s.a.createElement(
                                                  m.a,
                                                  {close: this.props.modalId},
                                                  s.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              " button warning"
                                                      },
                                                      s.a.createElement(h.a, {
                                                          content:
                                                              "account.perm.cancel"
                                                      })
                                                  )
                                              )
                                          )
                                      )
                                    : s.a.createElement(
                                          "div",
                                          null,
                                          s.a.createElement(
                                              "form",
                                              {
                                                  className:
                                                      "grid-container small-10 small-offset-1 no-overflow",
                                                  noValidate: !0
                                              },
                                              s.a.createElement(h.a, {
                                                  component: "h3",
                                                  content: "borrow.title",
                                                  asset_symbol: a.get("symbol")
                                              }),
                                              s.a.createElement(
                                                  "div",
                                                  {style: {textAlign: "left"}},
                                                  this.props.hide_help
                                                      ? null
                                                      : s.a.createElement(S.a, {
                                                            path:
                                                                "components/" +
                                                                (F
                                                                    ? "BorrowModalPrediction"
                                                                    : "BorrowModal"),
                                                            debt: a.get(
                                                                "symbol"
                                                            ),
                                                            collateral: r.get(
                                                                "symbol"
                                                            ),
                                                            borrower: this.props.account.get(
                                                                "name"
                                                            ),
                                                            mr: I
                                                        }),
                                                  F
                                                      ? null
                                                      : s.a.createElement(
                                                            "div",
                                                            {
                                                                style: {
                                                                    paddingBottom:
                                                                        "1rem"
                                                                }
                                                            },
                                                            s.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "borrow-price-feeds"
                                                                },
                                                                s.a.createElement(
                                                                    "span",
                                                                    {
                                                                        className:
                                                                            "borrow-price-label"
                                                                    },
                                                                    s.a.createElement(
                                                                        h.a,
                                                                        {
                                                                            content:
                                                                                "transaction.feed_price"
                                                                        }
                                                                    ),
                                                                    ": "
                                                                ),
                                                                s.a.createElement(
                                                                    A.a,
                                                                    {
                                                                        noPopOver: !0,
                                                                        quote_amount: a.getIn(
                                                                            [
                                                                                "bitasset",
                                                                                "current_feed",
                                                                                "settlement_price",
                                                                                "base",
                                                                                "amount"
                                                                            ]
                                                                        ),
                                                                        quote_asset: a.getIn(
                                                                            [
                                                                                "bitasset",
                                                                                "current_feed",
                                                                                "settlement_price",
                                                                                "base",
                                                                                "asset_id"
                                                                            ]
                                                                        ),
                                                                        base_asset: a.getIn(
                                                                            [
                                                                                "bitasset",
                                                                                "current_feed",
                                                                                "settlement_price",
                                                                                "quote",
                                                                                "asset_id"
                                                                            ]
                                                                        ),
                                                                        base_amount: a.getIn(
                                                                            [
                                                                                "bitasset",
                                                                                "current_feed",
                                                                                "settlement_price",
                                                                                "quote",
                                                                                "amount"
                                                                            ]
                                                                        )
                                                                    }
                                                                )
                                                            ),
                                                            s.a.createElement(
                                                                "b",
                                                                null
                                                            ),
                                                            s.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "borrow-price-final " +
                                                                        (p.below_maintenance
                                                                            ? "has-error"
                                                                            : p.close_maintenance
                                                                                ? "has-warning"
                                                                                : "")
                                                                },
                                                                s.a.createElement(
                                                                    "span",
                                                                    {
                                                                        className:
                                                                            "borrow-price-label"
                                                                    },
                                                                    s.a.createElement(
                                                                        h.a,
                                                                        {
                                                                            content:
                                                                                "exchange.your_price"
                                                                        }
                                                                    ),
                                                                    ": "
                                                                ),
                                                                this.state
                                                                    .newPosition
                                                                    ? s.a.createElement(
                                                                          A.a,
                                                                          {
                                                                              noPopOver: !0,
                                                                              quote_amount:
                                                                                  I *
                                                                                  this
                                                                                      .state
                                                                                      .short_amount *
                                                                                  b,
                                                                              quote_asset: a.get(
                                                                                  "id"
                                                                              ),
                                                                              base_asset: r.get(
                                                                                  "id"
                                                                              ),
                                                                              base_amount:
                                                                                  this
                                                                                      .state
                                                                                      .collateral *
                                                                                  f
                                                                          }
                                                                      )
                                                                    : null
                                                            )
                                                        ),
                                                  s.a.createElement(
                                                      "div",
                                                      {className: "form-group"},
                                                      s.a.createElement(E.a, {
                                                          label:
                                                              "transaction.borrow_amount",
                                                          amount: l.toString(),
                                                          onChange: this._onBorrowChange.bind(
                                                              this
                                                          ),
                                                          asset: a.get("id"),
                                                          assets: [a.get("id")],
                                                          display_balance: T,
                                                          placeholder: "0.0",
                                                          tabIndex: 1
                                                      })
                                                  ),
                                                  s.a.createElement(
                                                      "div",
                                                      {className: y},
                                                      s.a.createElement(E.a, {
                                                          label:
                                                              "transaction.collateral",
                                                          amount: c.toString(),
                                                          onChange: this._onCollateralChange.bind(
                                                              this
                                                          ),
                                                          asset: r.get("id"),
                                                          assets: [r.get("id")],
                                                          display_balance: q,
                                                          placeholder: "0.0",
                                                          tabIndex: 1
                                                      }),
                                                      p.collateral_balance
                                                          ? s.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "float-left",
                                                                    style: {
                                                                        paddingTop: 5
                                                                    }
                                                                },
                                                                p.collateral_balance
                                                            )
                                                          : null
                                                  ),
                                                  F
                                                      ? null
                                                      : s.a.createElement(
                                                            "div",
                                                            null,
                                                            s.a.createElement(
                                                                "div",
                                                                {
                                                                    className: k,
                                                                    style: {
                                                                        marginBottom:
                                                                            "3.5rem"
                                                                    }
                                                                },
                                                                s.a.createElement(
                                                                    h.a,
                                                                    {
                                                                        component:
                                                                            "label",
                                                                        content:
                                                                            "borrow.coll_ratio"
                                                                    }
                                                                ),
                                                                s.a.createElement(
                                                                    "span",
                                                                    null,
                                                                    s.a.createElement(
                                                                        "input",
                                                                        {
                                                                            value:
                                                                                0 ==
                                                                                u
                                                                                    ? null
                                                                                    : u,
                                                                            onChange: this._onRatioChange.bind(
                                                                                this
                                                                            ),
                                                                            type:
                                                                                "text",
                                                                            style: {
                                                                                width:
                                                                                    "12%",
                                                                                float:
                                                                                    "right",
                                                                                marginTop: -10
                                                                            }
                                                                        }
                                                                    ),
                                                                    s.a.createElement(
                                                                        "input",
                                                                        {
                                                                            style: {
                                                                                width:
                                                                                    "85%"
                                                                            },
                                                                            min:
                                                                                "0",
                                                                            max:
                                                                                "6",
                                                                            step:
                                                                                "0.01",
                                                                            onChange: this._onRatioChange.bind(
                                                                                this
                                                                            ),
                                                                            value: u,
                                                                            type:
                                                                                "range"
                                                                        }
                                                                    )
                                                                ),
                                                                p.below_maintenance ||
                                                                p.close_maintenance
                                                                    ? s.a.createElement(
                                                                          "div",
                                                                          {
                                                                              style: {
                                                                                  height:
                                                                                      "1em",
                                                                                  maxWidth:
                                                                                      "85%"
                                                                              },
                                                                              className:
                                                                                  "float-left"
                                                                          },
                                                                          p.below_maintenance,
                                                                          p.close_maintenance
                                                                      )
                                                                    : null
                                                            )
                                                        ),
                                                  s.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "no-padding grid-content button-group no-overflow"
                                                      },
                                                      s.a.createElement(
                                                          "div",
                                                          {
                                                              onClick: this._onSubmit.bind(
                                                                  this
                                                              ),
                                                              className: C
                                                          },
                                                          s.a.createElement(
                                                              h.a,
                                                              {
                                                                  content:
                                                                      "borrow.adjust"
                                                              }
                                                          )
                                                      ),
                                                      s.a.createElement(
                                                          "div",
                                                          {
                                                              onClick: function(
                                                                  t
                                                              ) {
                                                                  t.preventDefault(),
                                                                      e.setState(
                                                                          e._initialState(
                                                                              e.props
                                                                          )
                                                                      );
                                                              },
                                                              className:
                                                                  "button hollow primary"
                                                          },
                                                          s.a.createElement(
                                                              h.a,
                                                              {
                                                                  content:
                                                                      "wallet.reset"
                                                              }
                                                          )
                                                      )
                                                  )
                                              )
                                          )
                                      );
                            }
                        }
                    ]),
                    t
                );
            })();
            (F.propTypes = {
                quote_asset: b.a.ChainAsset.isRequired,
                bitasset_balance: b.a.ChainObject,
                backing_asset: b.a.ChainAsset.isRequired,
                backing_balance: b.a.ChainObject,
                call_orders: b.a.ChainObjectsList,
                hasCallOrders: i.a.bool
            }),
                (F = Object(f.a)(F));
            var B = (function(e) {
                function t() {
                    q(this, t);
                    var e = D(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.state = {smallScreen: !1, open: !1}), e;
                }
                return (
                    I(t, s.a.Component),
                    T(t, [
                        {
                            key: "show",
                            value: function() {
                                var e = this;
                                this.setState({open: !0}, function() {
                                    c.a.publish(e.props.modalId, "open");
                                });
                            }
                        },
                        {
                            key: "onClose",
                            value: function() {
                                this.setState({open: !1});
                            }
                        },
                        {
                            key: "componentWillMount",
                            value: function() {
                                this.setState({
                                    smallScreen: window.innerHeight <= 800
                                });
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.quote_asset,
                                    a = e.backing_asset,
                                    n = e.account,
                                    r = n.get("balances").toJS(),
                                    o = void 0,
                                    i = void 0;
                                if (r)
                                    for (var l in r)
                                        l === a && (o = r[l]),
                                            l === t && (i = r[l]);
                                return this.state.open
                                    ? s.a.createElement(
                                          u.a,
                                          {
                                              id: this.props.modalId,
                                              overlay: !0,
                                              onClose: this.onClose.bind(this),
                                              ref: this.props.modalId
                                          },
                                          s.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "grid-block vertical"
                                              },
                                              s.a.createElement(F, {
                                                  quote_asset: t,
                                                  call_orders: n
                                                      .get(
                                                          "call_orders",
                                                          Object(P.List)()
                                                      )
                                                      .toList(),
                                                  hasCallOrders:
                                                      n.get("call_orders") &&
                                                      n.get("call_orders")
                                                          .size > 0,
                                                  modalId: this.props.modalId,
                                                  bitasset_balance: i,
                                                  backing_balance: o,
                                                  backing_asset: a,
                                                  hide_help: this.state
                                                      .smallScreen,
                                                  account: n
                                              })
                                          )
                                      )
                                    : null;
                            }
                        }
                    ]),
                    t
                );
            })();
            t.a = B;
        },
        333: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return v;
            }),
                a.d(t, "b", function() {
                    return g;
                });
            var n = a(0),
                r = a.n(n),
                s = a(50),
                o = a(9),
                i = a.n(o),
                l = a(35),
                c = a(31),
                u = a(15),
                p = a(5),
                m = a(65),
                d = a(42),
                h = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function b(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function f(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function _(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var g = (function(e) {
                    function t(e) {
                        b(this, t);
                        var a = f(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        a.statsInterval = null;
                        var n = d.a.getMarketName(e.base, e.quote).marketName;
                        return (a.state = {marketName: n}), a;
                    }
                    return (
                        _(t, r.a.Component),
                        h(t, [
                            {
                                key: "_checkStats",
                                value: function() {
                                    var e =
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0]
                                                ? arguments[0]
                                                : {close: {}},
                                        t =
                                            arguments.length > 1 &&
                                            void 0 !== arguments[1]
                                                ? arguments[1]
                                                : {close: {}};
                                    return (
                                        e.volumeBase !== t.volumeBase ||
                                        !p.a.are_equal_shallow(
                                            e.close && e.close.base,
                                            t.close && t.close.base
                                        ) ||
                                        !p.a.are_equal_shallow(
                                            e.close && e.close.quote,
                                            t.close && t.close.quote
                                        )
                                    );
                                }
                            },
                            {
                                key: "shouldComponentUpdate",
                                value: function(e) {
                                    return (
                                        this._checkStats(
                                            e.allMarketStats.get(
                                                this.state.marketName
                                            ),
                                            this.props.allMarketStats.get(
                                                this.state.marketName
                                            )
                                        ) ||
                                        e.base.get("id") !==
                                            this.props.base.get("id") ||
                                        e.quote.get("id") !==
                                            this.props.quote.get("id")
                                    );
                                }
                            },
                            {
                                key: "componentWillMount",
                                value: function() {
                                    l.a.getMarketStats(
                                        this.props.base,
                                        this.props.quote
                                    ),
                                        (this.statsChecked = new Date()),
                                        (this.statsInterval = setInterval(
                                            l.a.getMarketStats.bind(
                                                this,
                                                this.props.base,
                                                this.props.quote
                                            ),
                                            35e3
                                        ));
                                }
                            },
                            {
                                key: "componentWillUnmount",
                                value: function() {
                                    clearInterval(this.statsInterval);
                                }
                            }
                        ]),
                        t
                    );
                })(),
                y = (function(e) {
                    function t(e) {
                        return (
                            b(this, t),
                            f(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).call(
                                    this,
                                    e
                                )
                            )
                        );
                    }
                    return (
                        _(t, g),
                        h(t, [
                            {
                                key: "shouldComponentUpdate",
                                value: function(e) {
                                    return (function e(t, a, n) {
                                        null === t && (t = Function.prototype);
                                        var r = Object.getOwnPropertyDescriptor(
                                            t,
                                            a
                                        );
                                        if (void 0 === r) {
                                            var s = Object.getPrototypeOf(t);
                                            return null === s
                                                ? void 0
                                                : e(s, a, n);
                                        }
                                        if ("value" in r) return r.value;
                                        var o = r.get;
                                        return void 0 !== o
                                            ? o.call(n)
                                            : void 0;
                                    })(
                                        t.prototype.__proto__ ||
                                            Object.getPrototypeOf(t.prototype),
                                        "shouldComponentUpdate",
                                        this
                                    ).call(this, e);
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props.allMarketStats,
                                        t = this.state.marketName,
                                        a = e.get(t),
                                        n = a && a.price ? a.price : null;
                                    return r.a.createElement(
                                        "span",
                                        {
                                            className: i()(
                                                "",
                                                this.props.className
                                            )
                                        },
                                        n
                                            ? r.a.createElement(m.a, {
                                                  base_amount: n.base.amount,
                                                  base_asset: n.base.asset_id,
                                                  quote_amount: n.quote.amount,
                                                  quote_asset: n.quote.asset_id,
                                                  force_direction: this.props
                                                      .force_direction,
                                                  hide_symbols: this.props
                                                      .hide_symbols
                                              })
                                            : "n/a"
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            y = Object(s.a)(y, {propNames: ["quote", "base"]});
            var v = (function(e) {
                function t() {
                    return (
                        b(this, t),
                        f(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    _(t, r.a.Component),
                    h(t, [
                        {
                            key: "render",
                            value: function() {
                                return r.a.createElement(y, this.props);
                            }
                        }
                    ]),
                    t
                );
            })();
            v = Object(u.connect)(v, {
                listenTo: function() {
                    return [c.a];
                },
                getProps: function() {
                    return {allMarketStats: c.a.getState().allMarketStats};
                }
            });
        },
        334: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                s = a(2),
                o = a.n(s),
                i = a(11),
                l = a(3),
                c = a.n(l),
                u = a(54),
                p = a.n(u),
                m = a(5),
                d = a(1),
                h = a.n(d),
                b = a(22),
                f = a(279),
                _ = a.n(f),
                g = a(111),
                y = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function v(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function E(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function w(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            (function(e) {
                function t() {
                    return (
                        v(this, t),
                        E(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    w(t, r.a.Component),
                    y(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.baseSymbol,
                                    a = e.quoteSymbol;
                                return r.a.createElement(
                                    "thead",
                                    null,
                                    r.a.createElement(
                                        "tr",
                                        null,
                                        r.a.createElement(
                                            "th",
                                            {style: {textAlign: "right"}},
                                            r.a.createElement(h.a, {
                                                content: "exchange.price"
                                            }),
                                            r.a.createElement("br", null),
                                            t
                                                ? r.a.createElement(
                                                      "span",
                                                      {
                                                          className:
                                                              "header-sub-title"
                                                      },
                                                      "(",
                                                      r.a.createElement(b.a, {
                                                          name: t
                                                      }),
                                                      "/",
                                                      r.a.createElement(b.a, {
                                                          name: a
                                                      }),
                                                      ")"
                                                  )
                                                : null
                                        ),
                                        r.a.createElement(
                                            "th",
                                            {style: {textAlign: "right"}},
                                            r.a.createElement(h.a, {
                                                content: "transfer.amount"
                                            }),
                                            r.a.createElement("br", null),
                                            a
                                                ? r.a.createElement(
                                                      "span",
                                                      {
                                                          className:
                                                              "header-sub-title"
                                                      },
                                                      "(",
                                                      r.a.createElement(b.a, {
                                                          name: a
                                                      }),
                                                      ")"
                                                  )
                                                : null
                                        ),
                                        r.a.createElement(
                                            "th",
                                            {style: {textAlign: "right"}},
                                            r.a.createElement(h.a, {
                                                content:
                                                    "transaction.settlement_date"
                                            }),
                                            r.a.createElement("br", null),
                                            r.a.createElement(
                                                "span",
                                                {
                                                    style: {
                                                        visibility: "hidden"
                                                    },
                                                    className:
                                                        "header-sub-title"
                                                },
                                                "d"
                                            )
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })().defaultProps = {quoteSymbol: null, baseSymbol: null};
            var k = (function(e) {
                function t() {
                    return (
                        v(this, t),
                        E(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    w(t, r.a.Component),
                    y(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.base,
                                    a = e.quote,
                                    n = e.order,
                                    s = e.showSymbols,
                                    o =
                                        "1.3.0" == t.get("id")
                                            ? n.getPrice() /
                                              (1 + n.offset_percent / 1e4)
                                            : n.getPrice() *
                                              (1 + n.offset_percent / 1e4),
                                    i = s ? " " + a.get("symbol") : null;
                                return r.a.createElement(
                                    "tr",
                                    {style: {paddingRight: 5}},
                                    r.a.createElement(
                                        "td",
                                        {
                                            style: {
                                                textAlign: "right",
                                                width: "25%"
                                            }
                                        },
                                        m.a.format_number(
                                            o,
                                            a.get("precision")
                                        ),
                                        " ",
                                        i
                                    ),
                                    r.a.createElement(
                                        "td",
                                        {
                                            style: {
                                                textAlign: "right",
                                                width: "25%"
                                            }
                                        },
                                        m.a.format_number(
                                            n[
                                                n.isBid()
                                                    ? "amountToReceive"
                                                    : "amountForSale"
                                            ]().getAmount({real: !0}),
                                            a.get("precision")
                                        )
                                    ),
                                    r.a.createElement(
                                        "td",
                                        {
                                            style: {
                                                textAlign: "right",
                                                width: "25%"
                                            }
                                        },
                                        m.a.format_number(
                                            n[
                                                n.isBid()
                                                    ? "amountForSale"
                                                    : "amountToReceive"
                                            ]().getAmount({real: !0}),
                                            t.get("precision")
                                        )
                                    ),
                                    r.a.createElement(
                                        "td",
                                        {
                                            style: {
                                                textAlign: "right",
                                                width: "25%"
                                            },
                                            className: "tooltip",
                                            "data-tip": new Date(
                                                n.settlement_date
                                            )
                                        },
                                        c.a.localize(
                                            new Date(n.settlement_date),
                                            {
                                                type: "date",
                                                format:
                                                    -1 !==
                                                    _()()
                                                        .toLowerCase()
                                                        .indexOf("en-us")
                                                        ? "market_history_us"
                                                        : "market_history"
                                            }
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            k.defaultProps = {showSymbols: !1, invert: !1};
            var C = (function(e) {
                function t() {
                    return (
                        v(this, t),
                        E(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    w(t, r.a.Component),
                    y(t, [
                        {
                            key: "shouldComponentUpdate",
                            value: function(e) {
                                return (
                                    e.currentAccount !==
                                        this.props.currentAccount ||
                                    e.orders !== this.props.orders
                                );
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.orders,
                                    a = e.base,
                                    n = e.quote,
                                    s = null;
                                if (!(t.size > 0 && a && n)) return null;
                                var o = 0;
                                return (
                                    (s = t
                                        .sort(function(e, t) {
                                            return e.isBefore(t) ? -1 : 1;
                                        })
                                        .map(function(e) {
                                            return Date.now() <
                                                e.settlement_date
                                                ? r.a.createElement(k, {
                                                      key: o++,
                                                      order: e,
                                                      base: a,
                                                      quote: n
                                                  })
                                                : null;
                                        })
                                        .toArray()),
                                    r.a.createElement(
                                        g.a,
                                        {
                                            component: "tbody",
                                            transitionName: "newrow"
                                        },
                                        s
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (C.defaultProps = {
                base: {},
                quote: {},
                orders: {},
                quoteSymbol: "",
                baseSymbol: ""
            }),
                (C.propTypes = {
                    base: o.a.object.isRequired,
                    quote: o.a.object.isRequired,
                    orders: o.a.object.isRequired,
                    quoteSymbol: o.a.string.isRequired,
                    baseSymbol: o.a.string.isRequired
                });
            var A = C,
                N = a(150),
                O = a(10),
                S = a(9),
                P = a.n(S),
                j = a(12),
                x = a(4),
                T = a(18),
                q = a(138),
                D = a(333),
                I = a(65),
                F = a(44),
                B = a.n(F);
            a.d(t, "b", function() {
                return J;
            }),
                a.d(t, "c", function() {
                    return W;
                }),
                a.d(t, "a", function() {
                    return H;
                });
            var R = (function() {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var n = t[a];
                        (n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n);
                    }
                }
                return function(t, a, n) {
                    return a && e(t.prototype, a), n && e(t, n), t;
                };
            })();
            function L(e, t, a) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a),
                    e
                );
            }
            function M(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function z(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function U(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var V = {textAlign: "left"},
                W = (function(e) {
                    function t() {
                        return (
                            M(this, t),
                            z(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        U(t, r.a.Component),
                        R(t, [
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.baseSymbol,
                                        a = e.quoteSymbol,
                                        n = e.dashboard,
                                        s = e.isMyAccount;
                                    return n
                                        ? r.a.createElement(
                                              "thead",
                                              null,
                                              r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "th",
                                                      {style: V, colSpan: "5"},
                                                      r.a.createElement(h.a, {
                                                          content:
                                                              "exchange.description"
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "th",
                                                      {style: V},
                                                      r.a.createElement(h.a, {
                                                          content:
                                                              "exchange.price"
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "th",
                                                      {style: V},
                                                      r.a.createElement(h.a, {
                                                          content:
                                                              "exchange.price_market"
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "th",
                                                      {
                                                          style: {
                                                              textAlign: "right"
                                                          }
                                                      },
                                                      r.a.createElement(h.a, {
                                                          content:
                                                              "exchange.value"
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "th",
                                                      null,
                                                      r.a.createElement(h.a, {
                                                          content:
                                                              "account.trade"
                                                      })
                                                  ),
                                                  s
                                                      ? r.a.createElement(
                                                            "th",
                                                            {
                                                                id:
                                                                    "cancelAllOrders",
                                                                style: {
                                                                    cursor:
                                                                        "pointer"
                                                                }
                                                            },
                                                            r.a.createElement(
                                                                h.a,
                                                                {
                                                                    content:
                                                                        "wallet.cancel"
                                                                }
                                                            )
                                                        )
                                                      : null
                                              )
                                          )
                                        : r.a.createElement(
                                              "thead",
                                              null,
                                              r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "th",
                                                      {
                                                          style: {
                                                              textAlign: this
                                                                  .props
                                                                  .leftAlign
                                                                  ? "left"
                                                                  : ""
                                                          }
                                                      },
                                                      r.a.createElement(h.a, {
                                                          className:
                                                              "header-sub-title",
                                                          content:
                                                              "exchange.price"
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "th",
                                                      {
                                                          style: this.props
                                                              .leftAlign
                                                              ? {
                                                                    textAlign:
                                                                        "left"
                                                                }
                                                              : null
                                                      },
                                                      t
                                                          ? r.a.createElement(
                                                                "span",
                                                                {
                                                                    className:
                                                                        "header-sub-title"
                                                                },
                                                                r.a.createElement(
                                                                    b.a,
                                                                    {
                                                                        dataPlace:
                                                                            "top",
                                                                        name: a
                                                                    }
                                                                )
                                                            )
                                                          : null
                                                  ),
                                                  r.a.createElement(
                                                      "th",
                                                      {
                                                          style: this.props
                                                              .leftAlign
                                                              ? {
                                                                    textAlign:
                                                                        "left"
                                                                }
                                                              : null
                                                      },
                                                      t
                                                          ? r.a.createElement(
                                                                "span",
                                                                {
                                                                    className:
                                                                        "header-sub-title"
                                                                },
                                                                r.a.createElement(
                                                                    b.a,
                                                                    {
                                                                        dataPlace:
                                                                            "top",
                                                                        name: t
                                                                    }
                                                                )
                                                            )
                                                          : null
                                                  ),
                                                  r.a.createElement(
                                                      "th",
                                                      {
                                                          style: {
                                                              textAlign: this
                                                                  .props
                                                                  .leftAlign
                                                                  ? "left"
                                                                  : ""
                                                          }
                                                      },
                                                      r.a.createElement(h.a, {
                                                          className:
                                                              "header-sub-title",
                                                          content:
                                                              "transaction.expiration"
                                                      })
                                                  ),
                                                  r.a.createElement("th", {
                                                      style: {width: "6%"}
                                                  })
                                              )
                                          );
                                }
                            }
                        ]),
                        t
                    );
                })();
            W.defaultProps = {quoteSymbol: null, baseSymbol: null};
            var J = (function(e) {
                function t() {
                    return (
                        M(this, t),
                        z(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    U(t, r.a.Component),
                    R(t, [
                        {
                            key: "shouldComponentUpdate",
                            value: function(e) {
                                return (
                                    e.order.for_sale !==
                                        this.props.order.for_sale ||
                                    e.order.id !== this.props.order.id ||
                                    e.quote !== this.props.quote ||
                                    e.base !== this.props.base ||
                                    e.order.market_base !==
                                        this.props.order.market_base
                                );
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.base,
                                    a = e.quote,
                                    n = e.order,
                                    s = e.showSymbols,
                                    o = e.dashboard,
                                    l = e.isMyAccount,
                                    u = e.settings,
                                    p = n.isBid(),
                                    d = n.isCall(),
                                    f = d
                                        ? "orderHistoryCall"
                                        : p
                                            ? "orderHistoryBid"
                                            : "orderHistoryAsk",
                                    _ = s
                                        ? r.a.createElement(
                                              "span",
                                              null,
                                              " " +
                                                  t.get("symbol") +
                                                  "/" +
                                                  a.get("symbol")
                                          )
                                        : null,
                                    g = s ? " " + t.get("symbol") : null,
                                    y = s ? " " + a.get("symbol") : null,
                                    v = u ? u.get("unit") : "1.3.0",
                                    E = p ? "value positive" : "value negative",
                                    w = p ? "value negative" : "value positive";
                                return o
                                    ? r.a.createElement(
                                          "tr",
                                          {key: n.id, className: "clickable"},
                                          r.a.createElement(
                                              "td",
                                              {
                                                  colSpan: "5",
                                                  style: V,
                                                  onClick: this.props.onFlip
                                              },
                                              p
                                                  ? r.a.createElement(h.a, {
                                                        content:
                                                            "exchange.buy_description",
                                                        baseAsset: m.a.format_number(
                                                            n[
                                                                p
                                                                    ? "amountToReceive"
                                                                    : "amountForSale"
                                                            ]().getAmount({
                                                                real: !0
                                                            }),
                                                            t.get("precision"),
                                                            !1
                                                        ),
                                                        quoteAsset: m.a.format_number(
                                                            n[
                                                                p
                                                                    ? "amountForSale"
                                                                    : "amountToReceive"
                                                            ]().getAmount({
                                                                real: !0
                                                            }),
                                                            a.get("precision"),
                                                            !1
                                                        ),
                                                        baseName: r.a.createElement(
                                                            b.a,
                                                            {
                                                                noTip: !0,
                                                                customClass: E,
                                                                name: a.get(
                                                                    "symbol"
                                                                )
                                                            }
                                                        ),
                                                        quoteName: r.a.createElement(
                                                            b.a,
                                                            {
                                                                noTip: !0,
                                                                customClass: w,
                                                                name: t.get(
                                                                    "symbol"
                                                                )
                                                            }
                                                        )
                                                    })
                                                  : r.a.createElement(h.a, {
                                                        content:
                                                            "exchange.sell_description",
                                                        baseAsset: m.a.format_number(
                                                            n[
                                                                p
                                                                    ? "amountToReceive"
                                                                    : "amountForSale"
                                                            ]().getAmount({
                                                                real: !0
                                                            }),
                                                            t.get("precision"),
                                                            !1
                                                        ),
                                                        quoteAsset: m.a.format_number(
                                                            n[
                                                                p
                                                                    ? "amountForSale"
                                                                    : "amountToReceive"
                                                            ]().getAmount({
                                                                real: !0
                                                            }),
                                                            a.get("precision"),
                                                            !1
                                                        ),
                                                        baseName: r.a.createElement(
                                                            b.a,
                                                            {
                                                                noTip: !0,
                                                                customClass: E,
                                                                name: a.get(
                                                                    "symbol"
                                                                )
                                                            }
                                                        ),
                                                        quoteName: r.a.createElement(
                                                            b.a,
                                                            {
                                                                noTip: !0,
                                                                customClass: w,
                                                                name: t.get(
                                                                    "symbol"
                                                                )
                                                            }
                                                        )
                                                    })
                                          ),
                                          r.a.createElement(
                                              "td",
                                              {
                                                  style: V,
                                                  onClick: this.props.onFlip
                                              },
                                              r.a.createElement(I.a, {
                                                  base_amount: n.sellPrice()
                                                      .base.amount,
                                                  base_asset: n.sellPrice().base
                                                      .asset_id,
                                                  quote_amount: n.sellPrice()
                                                      .quote.amount,
                                                  quote_asset: n.sellPrice()
                                                      .quote.asset_id,
                                                  force_direction: t.get(
                                                      "symbol"
                                                  ),
                                                  hide_symbols: !0
                                              })
                                          ),
                                          r.a.createElement(
                                              "td",
                                              {
                                                  style: V,
                                                  onClick: this.props.onFlip
                                              },
                                              r.a.createElement(D.a, {
                                                  base: t.get("id"),
                                                  quote: a.get("id"),
                                                  force_direction: t.get(
                                                      "symbol"
                                                  ),
                                                  hide_symbols: !0,
                                                  hide_asset: !0
                                              })
                                          ),
                                          r.a.createElement(
                                              "td",
                                              {
                                                  style: {textAlign: "right"},
                                                  onClick: this.props.onFlip
                                              },
                                              r.a.createElement(q.b, {
                                                  hide_asset: !0,
                                                  amount: n
                                                      .amountForSale()
                                                      .getAmount(),
                                                  fromAsset: n.amountForSale()
                                                      .asset_id,
                                                  noDecimals: !0,
                                                  toAsset: v
                                              }),
                                              " ",
                                              r.a.createElement(b.a, {name: v})
                                          ),
                                          r.a.createElement(
                                              "td",
                                              null,
                                              r.a.createElement(
                                                  i.b,
                                                  {
                                                      to:
                                                          "/market/" +
                                                          a.get("symbol") +
                                                          "_" +
                                                          t.get("symbol")
                                                  },
                                                  r.a.createElement(j.a, {
                                                      name: "trade",
                                                      title:
                                                          "icons.trade.trade",
                                                      className: "icon-14px"
                                                  })
                                              )
                                          ),
                                          l
                                              ? r.a.createElement(
                                                    "td",
                                                    {
                                                        className:
                                                            "text-center",
                                                        style: {
                                                            padding: "2px 5px"
                                                        }
                                                    },
                                                    d
                                                        ? null
                                                        : r.a.createElement(
                                                              "span",
                                                              {
                                                                  style: {
                                                                      marginRight: 0
                                                                  },
                                                                  className:
                                                                      "order-cancel"
                                                              },
                                                              r.a.createElement(
                                                                  "input",
                                                                  {
                                                                      type:
                                                                          "checkbox",
                                                                      className:
                                                                          "orderCancel",
                                                                      onChange: this
                                                                          .props
                                                                          .onCheckCancel
                                                                  }
                                                              )
                                                          )
                                                )
                                              : null
                                      )
                                    : r.a.createElement(
                                          "tr",
                                          {key: n.id},
                                          r.a.createElement(
                                              "td",
                                              {
                                                  className: f,
                                                  style: {paddingLeft: 10}
                                              },
                                              r.a.createElement(N.a, {
                                                  price: n.getPrice(),
                                                  base: t,
                                                  quote: a
                                              }),
                                              _
                                          ),
                                          r.a.createElement(
                                              "td",
                                              null,
                                              m.a.format_number(
                                                  n[
                                                      p
                                                          ? "amountToReceive"
                                                          : "amountForSale"
                                                  ]().getAmount({real: !0}),
                                                  a.get("precision")
                                              ),
                                              " ",
                                              y
                                          ),
                                          r.a.createElement(
                                              "td",
                                              null,
                                              m.a.format_number(
                                                  n[
                                                      p
                                                          ? "amountForSale"
                                                          : "amountToReceive"
                                                  ]().getAmount({real: !0}),
                                                  t.get("precision")
                                              ),
                                              " ",
                                              g
                                          ),
                                          r.a.createElement(
                                              "td",
                                              {
                                                  style: {
                                                      width: "25%",
                                                      textAlign: "right"
                                                  },
                                                  className: "tooltip",
                                                  "data-tip": new Date(
                                                      n.expiration
                                                  )
                                              },
                                              d
                                                  ? null
                                                  : c.a.localize(
                                                        new Date(n.expiration),
                                                        {
                                                            type: "date",
                                                            format:
                                                                "short_custom"
                                                        }
                                                    )
                                          ),
                                          r.a.createElement(
                                              "td",
                                              {
                                                  className: "text-center",
                                                  style: {width: "6%"}
                                              },
                                              d
                                                  ? null
                                                  : r.a.createElement(
                                                        "a",
                                                        {
                                                            style: {
                                                                marginRight: 0
                                                            },
                                                            className:
                                                                "order-cancel",
                                                            onClick: this.props
                                                                .onCancel
                                                        },
                                                        r.a.createElement(j.a, {
                                                            name:
                                                                "cross-circle",
                                                            title:
                                                                "icons.cross_circle.cancel_order",
                                                            className:
                                                                "icon-14px"
                                                        })
                                                    )
                                          )
                                      );
                            }
                        }
                    ]),
                    t
                );
            })();
            J.defaultProps = {showSymbols: !1};
            var H = (function(e) {
                function t(e) {
                    M(this, t);
                    var a = z(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (a.state = {activeTab: e.activeTab}),
                        (a._getOrders = a._getOrders.bind(a)),
                        a
                    );
                }
                return (
                    U(t, r.a.Component),
                    R(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                var e = this.refs.container;
                                e && p.a.initialize(e);
                            }
                        },
                        {
                            key: "componentDidUpdate",
                            value: function() {
                                var e = this.refs.container;
                                e && p.a.update(e);
                            }
                        },
                        {
                            key: "_getOrders",
                            value: function() {
                                var e,
                                    t = this.props,
                                    a = t.currentAccount,
                                    n = t.base,
                                    r = t.quote,
                                    s = t.feedPrice,
                                    o = a.get("orders"),
                                    i = a.get("call_orders"),
                                    l = n.get("id"),
                                    c = r.get("id"),
                                    u = (L((e = {}), n.get("id"), {
                                        precision: n.get("precision")
                                    }),
                                    L(e, r.get("id"), {
                                        precision: r.get("precision")
                                    }),
                                    e),
                                    p = o
                                        .toArray()
                                        .map(function(e) {
                                            var t = x.b.getObject(e);
                                            if (!t) return null;
                                            var a = t.getIn([
                                                    "sell_price",
                                                    "base",
                                                    "asset_id"
                                                ]),
                                                n = t.getIn([
                                                    "sell_price",
                                                    "quote",
                                                    "asset_id"
                                                ]);
                                            return (a === l && n === c) ||
                                                (a === c && n === l)
                                                ? new T.d(
                                                      t.toJS(),
                                                      u,
                                                      r.get("id")
                                                  )
                                                : void 0;
                                        })
                                        .filter(function(e) {
                                            return !!e;
                                        }),
                                    m = i
                                        .toArray()
                                        .map(function(e) {
                                            try {
                                                var t = x.b.getObject(e);
                                                if (!t) return null;
                                                var a = t.getIn([
                                                        "call_price",
                                                        "base",
                                                        "asset_id"
                                                    ]),
                                                    n = t.getIn([
                                                        "call_price",
                                                        "quote",
                                                        "asset_id"
                                                    ]);
                                                if (
                                                    (a === l && n === c) ||
                                                    (a === c && n === l)
                                                )
                                                    return s
                                                        ? new T.b(
                                                              t.toJS(),
                                                              u,
                                                              r.get("id"),
                                                              s
                                                          )
                                                        : null;
                                            } catch (e) {
                                                return null;
                                            }
                                        })
                                        .filter(function(e) {
                                            return !!e;
                                        })
                                        .filter(function(e) {
                                            try {
                                                return e.isMarginCalled();
                                            } catch (e) {
                                                return !1;
                                            }
                                        });
                                return p.concat(m);
                            }
                        },
                        {
                            key: "_changeTab",
                            value: function(e) {
                                O.a.changeViewSetting({ordersTab: e}),
                                    this.setState({activeTab: e});
                                var t = this.refs.container;
                                (t.scrollTop = 0),
                                    p.a.update(t),
                                    setTimeout(B.a.rebuild, 1e3);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    a = t.base,
                                    n = t.quote,
                                    s = t.quoteSymbol,
                                    o = t.baseSymbol,
                                    i = t.settleOrders,
                                    l = this.state.activeTab;
                                if (!a || !n) return null;
                                var c = void 0,
                                    u = !!(
                                        a.get("bitasset_data_id") && i.size > 0
                                    ),
                                    p = !!(
                                        n.get("bitasset_data_id") && i.size > 0
                                    );
                                if (
                                    ((l && (u || p)) || (l = "my_orders"),
                                    "my_orders" == l)
                                ) {
                                    var m = this._getOrders(),
                                        d = r.a.createElement(
                                            "tr",
                                            null,
                                            r.a.createElement(
                                                "td",
                                                {
                                                    style: {
                                                        textAlign: "center"
                                                    },
                                                    colSpan: "5"
                                                },
                                                r.a.createElement(h.a, {
                                                    content: "account.no_orders"
                                                })
                                            )
                                        ),
                                        f = m
                                            .filter(function(e) {
                                                return e.isBid();
                                            })
                                            .sort(function(e, t) {
                                                return (
                                                    t.getPrice() - e.getPrice()
                                                );
                                            })
                                            .map(function(t) {
                                                var s = t.getPrice();
                                                return r.a.createElement(J, {
                                                    price: s,
                                                    key: t.id,
                                                    order: t,
                                                    base: a,
                                                    quote: n,
                                                    onCancel: e.props.onCancel.bind(
                                                        e,
                                                        t.id
                                                    )
                                                });
                                            }),
                                        _ = m
                                            .filter(function(e) {
                                                return !e.isBid();
                                            })
                                            .sort(function(e, t) {
                                                return (
                                                    e.getPrice() - t.getPrice()
                                                );
                                            })
                                            .map(function(t) {
                                                var s = t.getPrice();
                                                return r.a.createElement(J, {
                                                    price: s,
                                                    key: t.id,
                                                    order: t,
                                                    base: a,
                                                    quote: n,
                                                    onCancel: e.props.onCancel.bind(
                                                        e,
                                                        t.id
                                                    )
                                                });
                                            }),
                                        y = [];
                                    _.length && (y = y.concat(_)),
                                        f.length && (y = y.concat(f)),
                                        y.sort(function(e, t) {
                                            return (
                                                e.props.price - t.props.price
                                            );
                                        }),
                                        (c = r.a.createElement(
                                            g.a,
                                            {
                                                component: "tbody",
                                                transitionName: "newrow"
                                            },
                                            y.length ? y : d
                                        ));
                                }
                                l &&
                                    "open_settlement" == l &&
                                    (c = r.a.createElement(A, {
                                        key: "settle_orders",
                                        orders: i,
                                        base: a,
                                        quote: n,
                                        baseSymbol: o,
                                        quoteSymbol: s
                                    }));
                                var v = "mymarkets-header clickable",
                                    E = P()(v, {inactive: "my_orders" !== l}),
                                    w = P()(v, {
                                        inactive: "open_settlement" !== l
                                    }),
                                    k = u || p ? "50%" : "100%",
                                    C = u || p ? "inherit" : "none";
                                return r.a.createElement(
                                    "div",
                                    {
                                        style: {marginBottom: "15px"},
                                        key: "open_orders",
                                        className: this.props.className
                                    },
                                    r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "exchange-bordered small-12",
                                            style: {height: 266}
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block shrink left-orderbook-header"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    style: {width: k},
                                                    className: E,
                                                    onClick: this._changeTab.bind(
                                                        this,
                                                        "my_orders"
                                                    )
                                                },
                                                r.a.createElement(h.a, {
                                                    content:
                                                        "exchange.my_orders"
                                                })
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    style: {display: C},
                                                    className: w,
                                                    onClick: this._changeTab.bind(
                                                        this,
                                                        "open_settlement"
                                                    )
                                                },
                                                r.a.createElement(h.a, {
                                                    content:
                                                        "exchange.settle_orders"
                                                })
                                            )
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block shrink left-orderbook-header market-right-padding-only"
                                            },
                                            r.a.createElement(
                                                "table",
                                                {
                                                    className:
                                                        "table order-table text-right fixed-table market-right-padding"
                                                },
                                                "my_orders" == l
                                                    ? r.a.createElement(W, {
                                                          rightAlign: !0,
                                                          type: "sell",
                                                          baseSymbol: o,
                                                          quoteSymbol: s
                                                      })
                                                    : r.a.createElement(
                                                          "thead",
                                                          null,
                                                          r.a.createElement(
                                                              "tr",
                                                              null,
                                                              r.a.createElement(
                                                                  "th",
                                                                  null,
                                                                  r.a.createElement(
                                                                      h.a,
                                                                      {
                                                                          className:
                                                                              "header-sub-title",
                                                                          content:
                                                                              "exchange.price"
                                                                      }
                                                                  )
                                                              ),
                                                              r.a.createElement(
                                                                  "th",
                                                                  null,
                                                                  r.a.createElement(
                                                                      "span",
                                                                      {
                                                                          className:
                                                                              "header-sub-title"
                                                                      },
                                                                      r.a.createElement(
                                                                          b.a,
                                                                          {
                                                                              dataPlace:
                                                                                  "top",
                                                                              name: s
                                                                          }
                                                                      )
                                                                  )
                                                              ),
                                                              r.a.createElement(
                                                                  "th",
                                                                  null,
                                                                  r.a.createElement(
                                                                      "span",
                                                                      {
                                                                          className:
                                                                              "header-sub-title"
                                                                      },
                                                                      r.a.createElement(
                                                                          b.a,
                                                                          {
                                                                              dataPlace:
                                                                                  "top",
                                                                              name: o
                                                                          }
                                                                      )
                                                                  )
                                                              ),
                                                              r.a.createElement(
                                                                  "th",
                                                                  null
                                                              )
                                                          )
                                                      )
                                            )
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "table-container grid-block market-right-padding-only no-overflow",
                                                ref: "container",
                                                style: {
                                                    overflow: "hidden",
                                                    maxHeight: 200
                                                }
                                            },
                                            r.a.createElement(
                                                "table",
                                                {
                                                    className:
                                                        "table order-table text-right fixed-table market-right-padding"
                                                },
                                                c
                                            )
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (H.defaultProps = {
                base: {},
                quote: {},
                orders: {},
                quoteSymbol: "",
                baseSymbol: ""
            }),
                (H.propTypes = {
                    base: o.a.object.isRequired,
                    quote: o.a.object.isRequired,
                    orders: o.a.object.isRequired,
                    quoteSymbol: o.a.string.isRequired,
                    baseSymbol: o.a.string.isRequired
                });
        },
        450: function(e, t, a) {
            "use strict";
            (function(e) {
                var n = a(76),
                    r = a(0),
                    s = a.n(r),
                    o = a(20),
                    i = a.n(o),
                    l = a(34),
                    c = a(1),
                    u = a.n(c),
                    p = a(18),
                    m = a(5),
                    d = a(13),
                    h = a(6),
                    b = a(24),
                    f = a(44),
                    _ = a.n(f),
                    g = a(3),
                    y = a.n(g),
                    v = a(25),
                    E = a(164),
                    w = a(12),
                    k = a(37),
                    C = a(36),
                    A = a(22),
                    N = a(4),
                    O = a(184),
                    S = a(23),
                    P =
                        Object.assign ||
                        function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = arguments[t];
                                for (var n in a)
                                    Object.prototype.hasOwnProperty.call(
                                        a,
                                        n
                                    ) && (e[n] = a[n]);
                            }
                            return e;
                        },
                    j = (function() {
                        function e(e, t) {
                            for (var a = 0; a < t.length; a++) {
                                var n = t[a];
                                (n.enumerable = n.enumerable || !1),
                                    (n.configurable = !0),
                                    "value" in n && (n.writable = !0),
                                    Object.defineProperty(e, n.key, n);
                            }
                        }
                        return function(t, a, n) {
                            return a && e(t.prototype, a), n && e(t, n), t;
                        };
                    })();
                function x(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError(
                            "Cannot call a class as a function"
                        );
                }
                function T(e, t) {
                    if (!e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return !t ||
                        ("object" != typeof t && "function" != typeof t)
                        ? e
                        : t;
                }
                function q(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError(
                            "Super expression must either be null or a function, not " +
                                typeof t
                        );
                    (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    })),
                        t &&
                            (Object.setPrototypeOf
                                ? Object.setPrototypeOf(e, t)
                                : (e.__proto__ = t));
                }
                var D = (function(t) {
                    function a(e) {
                        x(this, a);
                        var t = T(
                            this,
                            (a.__proto__ || Object.getPrototypeOf(a)).call(this)
                        );
                        return (
                            (t.state = {
                                toAddress: v.a.getLast(e.walletType),
                                withdrawValue: "",
                                amountError: null,
                                symbol: e.asset.get("symbol"),
                                to_withdraw: new p.a({
                                    asset_id: e.asset.get("id"),
                                    precision: e.asset.get("precision")
                                }),
                                fee_asset_id: "1.3.0",
                                feeStatus: {},
                                loading: !1,
                                emptyAddressDeposit: !1
                            }),
                            t._validateAddress(t.state.toAddress, e),
                            (t.addDepositAddress = t.addDepositAddress.bind(t)),
                            (t._checkFeeStatus = t._checkFeeStatus.bind(t)),
                            (t._checkBalance = t._checkBalance.bind(t)),
                            (t._getCurrentBalance = t._getCurrentBalance.bind(
                                t
                            )),
                            (t._getFee = t._getFee.bind(t)),
                            (t._updateFee = Object(n.a)(
                                t._updateFee.bind(t),
                                250
                            )),
                            t
                        );
                    }
                    return (
                        q(a, O["a"]),
                        j(a, [
                            {
                                key: "componentWillMount",
                                value: function() {
                                    this._getDepositAddress(),
                                        this._updateFee(),
                                        this._checkFeeStatus();
                                }
                            },
                            {
                                key: "componentWillReceiveProps",
                                value: function(e) {
                                    e.asset &&
                                        this.props.asset &&
                                        e.asset.get("id") !==
                                            this.props.asset.get("id") &&
                                        this.setState(
                                            {
                                                to_withdraw: new p.a({
                                                    asset_id: e.asset.get("id"),
                                                    precision: e.asset.get(
                                                        "precision"
                                                    )
                                                }),
                                                gateFee: e.asset.get("gateFee"),
                                                intermediateAccount: e.asset.get(
                                                    "intermediateAccount"
                                                ),
                                                symbol: e.asset.get("symbol"),
                                                memo: "",
                                                withdrawValue: "",
                                                receive_address: null,
                                                toAddress: v.a.getLast(
                                                    e.walletType
                                                )
                                            },
                                            this._getDepositAddress
                                        );
                                }
                            },
                            {
                                key: "_getDepositAddress",
                                value: function() {
                                    if (this.props.backingCoinType) {
                                        var e = Object(v.j)({
                                            coin:
                                                "open." +
                                                this.props.backingCoinType.toLowerCase(),
                                            account: this.props.account,
                                            stateCallback: this
                                                .addDepositAddress
                                        });
                                        e
                                            ? this.setState({
                                                  receive_address: e
                                              })
                                            : Object(v.l)(
                                                  this._getDepositObject()
                                              );
                                    }
                                }
                            },
                            {
                                key: "_getDepositObject",
                                value: function() {
                                    return {
                                        inputCoinType: this.props.backingCoinType.toLowerCase(),
                                        outputCoinType: this.props.symbol.toLowerCase(),
                                        outputAddress: this.props.sender.get(
                                            "name"
                                        ),
                                        stateCallback: this.addDepositAddress
                                    };
                                }
                            },
                            {
                                key: "requestDepositAddressLoad",
                                value: function() {
                                    this.setState({
                                        loading: !0,
                                        emptyAddressDeposit: !1
                                    }),
                                        Object(v.l)(this._getDepositObject());
                                }
                            },
                            {
                                key: "addDepositAddress",
                                value: function(e) {
                                    e.error &&
                                        ("no_address" === e.error.message
                                            ? this.setState({
                                                  emptyAddressDeposit: !0
                                              })
                                            : this.setState({
                                                  emptyAddressDeposit: !1
                                              })),
                                        this.setState({
                                            receive_address: e,
                                            loading: !1
                                        });
                                }
                            },
                            {
                                key: "componentDidUpdate",
                                value: function() {
                                    _.a.rebuild();
                                }
                            },
                            {
                                key: "onSubmit",
                                value: function(t) {
                                    if (
                                        (t.preventDefault(),
                                        0 ===
                                            this.state.to_withdraw.getAmount())
                                    )
                                        return this.setState({
                                            amountError: "transfer.errors.pos"
                                        });
                                    if (this.props.intermediateAccount) {
                                        var a = this._getFee(),
                                            n = this._getGateFee(),
                                            r = this.state.to_withdraw.clone(),
                                            s = r.clone(
                                                this._getCurrentBalance().get(
                                                    "balance"
                                                )
                                            );
                                        r.plus(n),
                                            s.lt(r) &&
                                                (r = this.state.to_withdraw.clone()),
                                            b.a.transfer(
                                                this.props.sender.get("id"),
                                                this.props.intermediateAccount,
                                                this.state.to_withdraw.getAmount(),
                                                this.state.to_withdraw.asset_id,
                                                this.props.backingCoinType.toLowerCase() +
                                                    ":" +
                                                    this.state.toAddress +
                                                    (this.state.memo
                                                        ? ":" +
                                                          new e(
                                                              this.state.memo,
                                                              "utf-8"
                                                          )
                                                        : ""),
                                                null,
                                                a.asset_id
                                            );
                                    }
                                }
                            },
                            {
                                key: "_updateAmount",
                                value: function() {
                                    var e = this._getFee(),
                                        t = this._getCurrentBalance(),
                                        a = new p.a({
                                            amount: t ? t.get("balance") : 0,
                                            asset_id: this.props.asset.get(
                                                "id"
                                            ),
                                            precision: this.props.asset.get(
                                                "precision"
                                            )
                                        });
                                    a.asset_id === e.asset_id && a.minus(e),
                                        this.state.to_withdraw.setAmount({
                                            sats: a.getAmount()
                                        }),
                                        this.setState(
                                            {
                                                withdrawValue: a.getAmount({
                                                    real: !0
                                                }),
                                                amountError: null
                                            },
                                            this._checkBalance
                                        );
                                }
                            },
                            {
                                key: "_checkFeeStatus",
                                value: function() {
                                    var e = this,
                                        t =
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0]
                                                ? arguments[0]
                                                : this.props.sender;
                                    if (t) {
                                        var a = [
                                                "1.3.0",
                                                this.state.to_withdraw.asset_id
                                            ],
                                            n = {},
                                            r = [];
                                        a.forEach(function(a) {
                                            r.push(
                                                Object(C.b)({
                                                    accountID: t.get("id"),
                                                    feeID: a,
                                                    options: [
                                                        "price_per_kbyte"
                                                    ],
                                                    data: {
                                                        type: "memo",
                                                        content:
                                                            e.props.backingCoinType.toLowerCase() +
                                                            ":" +
                                                            e.state.toAddress +
                                                            (e.state.memo
                                                                ? ":" +
                                                                  e.state.memo
                                                                : "")
                                                    }
                                                })
                                            );
                                        }),
                                            Promise.all(r)
                                                .then(function(t) {
                                                    a.forEach(function(e, a) {
                                                        n[e] = t[a];
                                                    }),
                                                        m.a.are_equal_shallow(
                                                            e.state.feeStatus,
                                                            n
                                                        ) ||
                                                            e.setState({
                                                                feeStatus: n
                                                            }),
                                                        e._checkBalance();
                                                })
                                                .catch(function(e) {
                                                    console.error(e);
                                                });
                                    }
                                }
                            },
                            {
                                key: "_updateFee",
                                value: function() {
                                    var e = this,
                                        t =
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0]
                                                ? arguments[0]
                                                : this.state.fee_asset_id;
                                    if (!this.props.sender) return null;
                                    Object(C.b)({
                                        accountID: this.props.sender.get("id"),
                                        feeID: t,
                                        options: ["price_per_kbyte"],
                                        data: {
                                            type: "memo",
                                            content:
                                                this.props.backingCoinType.toLowerCase() +
                                                ":" +
                                                this.state.toAddress +
                                                (this.state.memo
                                                    ? ":" + this.state.memo
                                                    : "")
                                        }
                                    }).then(function(t) {
                                        var a = t.fee,
                                            n = t.hasBalance,
                                            r = t.hasPoolBalance;
                                        e.setState(
                                            {
                                                feeAmount: a,
                                                hasBalance: n,
                                                hasPoolBalance: r,
                                                error: !n || !r
                                            },
                                            e._checkFeeStatus
                                        );
                                    });
                                }
                            },
                            {
                                key: "_getCurrentBalance",
                                value: function() {
                                    var e = this;
                                    return this.props.balances.find(function(
                                        t
                                    ) {
                                        return (
                                            t &&
                                            t.get("asset_type") ===
                                                e.props.asset.get("id")
                                        );
                                    });
                                }
                            },
                            {
                                key: "_checkBalance",
                                value: function() {
                                    var e = this.state,
                                        t = e.feeAmount,
                                        a = e.to_withdraw,
                                        n = this.props.asset,
                                        r = this._getCurrentBalance();
                                    if (r && t) {
                                        var s = Object(C.a)(
                                            a.getAmount({real: !0}),
                                            n,
                                            this._getFee(),
                                            r,
                                            this._getGateFee()
                                        );
                                        if (null !== s)
                                            return (
                                                this.state.balanceError !==
                                                    !s &&
                                                    this.setState({
                                                        balanceError: !s
                                                    }),
                                                s
                                            );
                                    }
                                }
                            },
                            {
                                key: "_getFee",
                                value: function() {
                                    var e = {
                                        getAmount: function() {
                                            return 0;
                                        },
                                        asset_id: this.state.fee_asset_id
                                    };
                                    if (
                                        !this.state.feeStatus ||
                                        !this.state.feeAmount
                                    )
                                        return e;
                                    var t = this.state.feeStatus["1.3.0"],
                                        a = this.state.feeStatus[
                                            this.state.to_withdraw.asset_id
                                        ];
                                    return t && t.hasBalance
                                        ? t.fee
                                        : t &&
                                          !t.hasBalance &&
                                          a &&
                                          a.hasBalance
                                            ? a.fee
                                            : t
                                                ? t.fee
                                                : e;
                                }
                            },
                            {
                                key: "_onInputAmount",
                                value: function(e) {
                                    try {
                                        this.state.to_withdraw.setAmount({
                                            real: parseFloat(
                                                e.target.value || 0
                                            )
                                        }),
                                            this.setState(
                                                {
                                                    withdrawValue:
                                                        e.target.value,
                                                    amountError: null
                                                },
                                                this._checkBalance
                                            );
                                    } catch (e) {
                                        console.error("err:", e);
                                    }
                                }
                            },
                            {
                                key: "_onInputTo",
                                value: function(e) {
                                    var t = e.target.value.trim();
                                    this.setState({
                                        withdraw_address_check_in_progress: !0,
                                        withdraw_address_selected: t,
                                        validAddress: null,
                                        toAddress: t
                                    }),
                                        this._validateAddress(t);
                                }
                            },
                            {
                                key: "_onMemoChanged",
                                value: function(e) {
                                    this.setState(
                                        {memo: e.target.value},
                                        this._updateFee
                                    );
                                }
                            },
                            {
                                key: "_validateAddress",
                                value: function(e) {
                                    var t = this,
                                        a =
                                            arguments.length > 1 &&
                                            void 0 !== arguments[1]
                                                ? arguments[1]
                                                : this.props;
                                    Object(v.m)({
                                        url: S.e.BASE,
                                        walletType: a.walletType,
                                        newAddress: e
                                    })
                                        .then(function(a) {
                                            t.state.toAddress === e &&
                                                t.setState({
                                                    withdraw_address_check_in_progress: !1,
                                                    validAddress: !!a
                                                });
                                        })
                                        .catch(function(e) {
                                            console.error(
                                                "Error when validating address:",
                                                e
                                            );
                                        });
                                }
                            },
                            {
                                key: "_openRegistrarSite",
                                value: function(e) {
                                    e.preventDefault(),
                                        (window.open(
                                            SettingsStore.site_registr,
                                            "_blank"
                                        ).opener = null);
                                }
                            },
                            {
                                key: "_getGateFee",
                                value: function() {
                                    var e = this.props,
                                        t = e.gateFee,
                                        a = e.asset;
                                    return new p.a({
                                        real: parseFloat(
                                            t ? t.replace(",", "") : 0
                                        ),
                                        asset_id: a.get("id"),
                                        precision: a.get("precision")
                                    });
                                }
                            },
                            {
                                key: "_renderWithdraw",
                                value: function() {
                                    var e = this.state.amountError,
                                        t = m.a.replaceName(this.props.asset)
                                            .name,
                                        a = 1,
                                        n = this.props.supportsMemos,
                                        r = this._getFee(),
                                        o = this._getGateFee(),
                                        i = this.state.feeStatus[r.asset_id],
                                        l = N.b.getAsset(r.asset_id),
                                        c =
                                            (i && !i.hasBalance) ||
                                            this.state.balanceError ||
                                            !this.state.toAddress ||
                                            !this.state.withdrawValue;
                                    return s.a.createElement(
                                        "div",
                                        null,
                                        s.a.createElement(
                                            "p",
                                            null,
                                            s.a.createElement(u.a, {
                                                content:
                                                    "gateway.withdraw_funds",
                                                asset: t
                                            })
                                        ),
                                        this._renderCurrentBalance(),
                                        s.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "SimpleTrade__withdraw-row"
                                            },
                                            s.a.createElement(
                                                "label",
                                                {className: "left-label"},
                                                y.a.translate(
                                                    "modal.withdraw.amount"
                                                )
                                            ),
                                            s.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "inline-label input-wrapper"
                                                },
                                                s.a.createElement("input", {
                                                    tabIndex: a++,
                                                    type: "number",
                                                    min: "0",
                                                    onKeyPress: this.onKeyPress.bind(
                                                        this
                                                    ),
                                                    value: this.state
                                                        .withdrawValue,
                                                    onChange: this._onInputAmount.bind(
                                                        this
                                                    )
                                                }),
                                                s.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "form-label select floating-dropdown"
                                                    },
                                                    s.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "dropdown-wrapper inactive"
                                                        },
                                                        s.a.createElement(
                                                            "div",
                                                            null,
                                                            t
                                                        )
                                                    )
                                                )
                                            ),
                                            e
                                                ? s.a.createElement(
                                                      "p",
                                                      {
                                                          className:
                                                              "has-error no-margin",
                                                          style: {
                                                              paddingTop: 10
                                                          }
                                                      },
                                                      s.a.createElement(u.a, {
                                                          content: e
                                                      })
                                                  )
                                                : null,
                                            this.state.balanceError
                                                ? s.a.createElement(
                                                      "p",
                                                      {
                                                          className:
                                                              "has-error no-margin",
                                                          style: {
                                                              paddingTop: 10
                                                          }
                                                      },
                                                      s.a.createElement(u.a, {
                                                          content:
                                                              "transfer.errors.insufficient"
                                                      })
                                                  )
                                                : null
                                        ),
                                        s.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "SimpleTrade__withdraw-row"
                                            },
                                            s.a.createElement(
                                                "label",
                                                {className: "left-label"},
                                                y.a.translate("transfer.fee")
                                            ),
                                            s.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "inline-label input-wrapper"
                                                },
                                                s.a.createElement("input", {
                                                    type: "text",
                                                    disabled: !0,
                                                    value: r.getAmount({
                                                        real: !0
                                                    })
                                                }),
                                                s.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "form-label select floating-dropdown"
                                                    },
                                                    s.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "dropdown-wrapper inactive"
                                                        },
                                                        s.a.createElement(
                                                            "div",
                                                            null,
                                                            l
                                                                ? s.a.createElement(
                                                                      A.a,
                                                                      {
                                                                          name: l.get(
                                                                              "symbol"
                                                                          )
                                                                      }
                                                                  )
                                                                : null
                                                        )
                                                    )
                                                )
                                            ),
                                            i && !i.hasBalance
                                                ? s.a.createElement(
                                                      "p",
                                                      {
                                                          className:
                                                              "has-error no-margin",
                                                          style: {
                                                              paddingTop: 10
                                                          }
                                                      },
                                                      s.a.createElement(u.a, {
                                                          content:
                                                              "transfer.errors.insufficient"
                                                      })
                                                  )
                                                : null
                                        ),
                                        s.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "SimpleTrade__withdraw-row"
                                            },
                                            s.a.createElement(
                                                "label",
                                                {className: "left-label"},
                                                y.a.translate("gateway.fee")
                                            ),
                                            s.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "inline-label input-wrapper"
                                                },
                                                s.a.createElement("input", {
                                                    type: "text",
                                                    disabled: !0,
                                                    value: o.getAmount({
                                                        real: !0
                                                    })
                                                }),
                                                s.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "form-label select floating-dropdown"
                                                    },
                                                    s.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "dropdown-wrapper inactive"
                                                        },
                                                        s.a.createElement(
                                                            "div",
                                                            null,
                                                            s.a.createElement(
                                                                A.a,
                                                                {
                                                                    name: this.props.asset.get(
                                                                        "symbol"
                                                                    )
                                                                }
                                                            )
                                                        )
                                                    )
                                                )
                                            ),
                                            i && !i.hasBalance
                                                ? s.a.createElement(
                                                      "p",
                                                      {
                                                          className:
                                                              "has-error no-margin",
                                                          style: {
                                                              paddingTop: 10
                                                          }
                                                      },
                                                      s.a.createElement(u.a, {
                                                          content:
                                                              "transfer.errors.insufficient"
                                                      })
                                                  )
                                                : null
                                        ),
                                        s.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "SimpleTrade__withdraw-row"
                                            },
                                            s.a.createElement(
                                                "label",
                                                {className: "left-label"},
                                                y.a.translate(
                                                    "modal.withdraw.address"
                                                )
                                            ),
                                            s.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "inline-label input-wrapper"
                                                },
                                                s.a.createElement("input", {
                                                    placeholder: y.a.translate(
                                                        "gateway.withdraw_placeholder",
                                                        {asset: t}
                                                    ),
                                                    tabIndex: a++,
                                                    type: "text",
                                                    value: this.state.toAddress,
                                                    onChange: this._onInputTo.bind(
                                                        this
                                                    )
                                                }),
                                                s.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "form-label select floating-dropdown"
                                                    },
                                                    s.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "dropdown-wrapper inactive"
                                                        },
                                                        s.a.createElement(
                                                            "div",
                                                            {
                                                                "data-place":
                                                                    "right",
                                                                "data-tip": y.a.translate(
                                                                    "tooltip.withdraw_address",
                                                                    {asset: t}
                                                                )
                                                            },
                                                            "?"
                                                        )
                                                    )
                                                )
                                            ),
                                            !this.state.validAddress &&
                                            this.state.toAddress
                                                ? s.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "has-error",
                                                          style: {
                                                              paddingTop: 10
                                                          }
                                                      },
                                                      s.a.createElement(u.a, {
                                                          content:
                                                              "gateway.valid_address",
                                                          coin_type: t
                                                      })
                                                  )
                                                : null
                                        ),
                                        n
                                            ? s.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "SimpleTrade__withdraw-row"
                                                  },
                                                  s.a.createElement(
                                                      "label",
                                                      {className: "left-label"},
                                                      y.a.translate(
                                                          "transfer.memo"
                                                      )
                                                  ),
                                                  s.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "inline-label input-wrapper"
                                                      },
                                                      s.a.createElement(
                                                          "textarea",
                                                          {
                                                              rows: "3",
                                                              value: this.state
                                                                  .memo,
                                                              tabIndex: a++,
                                                              onChange: this._onMemoChanged.bind(
                                                                  this
                                                              )
                                                          }
                                                      )
                                                  ),
                                                  !this.state.validAddress &&
                                                  this.state.toAddress
                                                      ? s.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "has-error",
                                                                style: {
                                                                    paddingTop: 10
                                                                }
                                                            },
                                                            s.a.createElement(
                                                                u.a,
                                                                {
                                                                    content:
                                                                        "gateway.valid_address",
                                                                    coin_type: t
                                                                }
                                                            )
                                                        )
                                                      : null
                                              )
                                            : null,
                                        s.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "button-group SimpleTrade__withdraw-row"
                                            },
                                            s.a.createElement(
                                                "button",
                                                {
                                                    tabIndex: a++,
                                                    className:
                                                        "button" +
                                                        (c ? " disabled" : ""),
                                                    onClick: this.onSubmit.bind(
                                                        this
                                                    ),
                                                    type: "submit"
                                                },
                                                s.a.createElement(u.a, {
                                                    content:
                                                        "gateway.withdraw_now"
                                                })
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "_renderDeposit",
                                value: function() {
                                    var e = this.state,
                                        t = e.receive_address,
                                        a = e.loading,
                                        n = e.emptyAddressDeposit,
                                        r = m.a.replaceName(this.props.asset)
                                            .name,
                                        o = t && "memo" in t && t.memo,
                                        i = (t && t.address) || "",
                                        l = 1;
                                    return s.a.createElement(
                                        "div",
                                        {className: i ? "" : "no-overflow"},
                                        s.a.createElement(
                                            "p",
                                            null,
                                            s.a.createElement(u.a, {
                                                unsafe: !0,
                                                content: "gateway.add_funds",
                                                account: this.props.sender.get(
                                                    "name"
                                                )
                                            })
                                        ),
                                        this._renderCurrentBalance(),
                                        s.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "SimpleTrade__withdraw-row"
                                            },
                                            s.a.createElement(
                                                "p",
                                                {
                                                    style: {marginBottom: 10},
                                                    "data-place": "right",
                                                    "data-tip": y.a.translate(
                                                        "tooltip.deposit_tip",
                                                        {asset: r}
                                                    )
                                                },
                                                s.a.createElement(u.a, {
                                                    className: "help-tooltip",
                                                    content:
                                                        "gateway.deposit_to",
                                                    asset: r
                                                }),
                                                ":",
                                                s.a.createElement(
                                                    "label",
                                                    {
                                                        className:
                                                            "fz_12 left-label"
                                                    },
                                                    s.a.createElement(u.a, {
                                                        content:
                                                            "gateway.deposit_notice_delay"
                                                    })
                                                )
                                            ),
                                            i
                                                ? s.a.createElement(
                                                      "label",
                                                      null,
                                                      n
                                                          ? s.a.createElement(
                                                                u.a,
                                                                {
                                                                    content:
                                                                        "gateway.please_generate_address"
                                                                }
                                                            )
                                                          : s.a.createElement(
                                                                "span",
                                                                {
                                                                    className:
                                                                        "inline-label"
                                                                },
                                                                s.a.createElement(
                                                                    "input",
                                                                    {
                                                                        readOnly: !0,
                                                                        type:
                                                                            "text",
                                                                        value: i
                                                                    }
                                                                ),
                                                                s.a.createElement(
                                                                    E.a,
                                                                    {text: i}
                                                                ),
                                                                " "
                                                            )
                                                  )
                                                : s.a.createElement(k.a, {
                                                      type: "three-bounce"
                                                  }),
                                            o
                                                ? s.a.createElement(
                                                      "label",
                                                      null,
                                                      s.a.createElement(
                                                          "span",
                                                          {
                                                              className:
                                                                  "inline-label"
                                                          },
                                                          s.a.createElement(
                                                              "input",
                                                              {
                                                                  readOnly: !0,
                                                                  type: "text",
                                                                  value:
                                                                      y.a.translate(
                                                                          "transfer.memo"
                                                                      ) +
                                                                      ": " +
                                                                      t.memo
                                                              }
                                                          ),
                                                          s.a.createElement(
                                                              E.a,
                                                              {text: t.memo}
                                                          )
                                                      )
                                                  )
                                                : null,
                                            t && t.error
                                                ? s.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "has-error",
                                                          style: {
                                                              paddingTop: 10
                                                          }
                                                      },
                                                      t.error.message
                                                  )
                                                : null
                                        ),
                                        s.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "button-group SimpleTrade__withdraw-row"
                                            },
                                            s.a.createElement(
                                                "button",
                                                {
                                                    tabIndex: l++,
                                                    className:
                                                        "button spinner-button-circle",
                                                    onClick: this.requestDepositAddressLoad.bind(
                                                        this
                                                    ),
                                                    type: "submit"
                                                },
                                                a
                                                    ? s.a.createElement(k.a, {
                                                          type: "circle"
                                                      })
                                                    : null,
                                                s.a.createElement(u.a, {
                                                    content:
                                                        "gateway.generate_new"
                                                })
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "_renderCurrentBalance",
                                value: function() {
                                    var e = m.a.replaceName(this.props.asset)
                                            .name,
                                        t = "deposit" === this.props.action,
                                        a = this._getCurrentBalance(),
                                        n = a
                                            ? new p.a({
                                                  asset_id: a.get("asset_type"),
                                                  precision: this.props.asset.get(
                                                      "precision"
                                                  ),
                                                  amount: a.get("balance")
                                              })
                                            : null,
                                        r = t
                                            ? s.a.createElement(
                                                  "span",
                                                  {
                                                      style: {
                                                          border:
                                                              "2px solid black",
                                                          borderLeft: "none"
                                                      },
                                                      className: "form-label"
                                                  },
                                                  e
                                              )
                                            : s.a.createElement(
                                                  "button",
                                                  {
                                                      "data-place": "right",
                                                      "data-tip": y.a.translate(
                                                          "tooltip.withdraw_full"
                                                      ),
                                                      className: "button",
                                                      style: {
                                                          border:
                                                              "2px solid black",
                                                          borderLeft: "none"
                                                      },
                                                      onClick: this._updateAmount.bind(
                                                          this,
                                                          a
                                                              ? parseInt(
                                                                    a.get(
                                                                        "balance"
                                                                    ),
                                                                    10
                                                                )
                                                              : 0
                                                      )
                                                  },
                                                  s.a.createElement(w.a, {
                                                      name: "clippy",
                                                      title:
                                                          "icons.clippy.withdraw_full"
                                                  })
                                              );
                                    return s.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "SimpleTrade__withdraw-row",
                                            style: {fontSize: "1rem"}
                                        },
                                        s.a.createElement(
                                            "label",
                                            {style: {fontSize: "1rem"}},
                                            y.a.translate(
                                                "gateway.balance_asset",
                                                {asset: e}
                                            ),
                                            ":",
                                            s.a.createElement(
                                                "span",
                                                {className: "inline-label"},
                                                s.a.createElement("input", {
                                                    disabled: !0,
                                                    style: {
                                                        color: "black",
                                                        border:
                                                            "2px solid black",
                                                        padding: 10,
                                                        width: "100%"
                                                    },
                                                    value: n
                                                        ? n.getAmount({
                                                              real: !0
                                                          })
                                                        : 0
                                                }),
                                                r
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.asset,
                                        a = "deposit" === e.action;
                                    if (!t) return null;
                                    var n = m.a.replaceName(t).name,
                                        r = this.props.isDown
                                            ? s.a.createElement(
                                                  "div",
                                                  null,
                                                  s.a.createElement(u.a, {
                                                      className:
                                                          "txtlabel cancel",
                                                      content:
                                                          "gateway.unavailable_OPEN",
                                                      component: "p"
                                                  })
                                              )
                                            : this.props.isAvailable
                                                ? a
                                                    ? this._renderDeposit()
                                                    : this._renderWithdraw()
                                                : s.a.createElement(
                                                      "div",
                                                      null,
                                                      s.a.createElement(u.a, {
                                                          className:
                                                              "txtlabel cancel",
                                                          content:
                                                              "gateway.unavailable",
                                                          component: "p"
                                                      })
                                                  );
                                    return s.a.createElement(
                                        "div",
                                        {className: "SimpleTrade__modal"},
                                        s.a.createElement(
                                            "div",
                                            {className: "Modal__header"},
                                            s.a.createElement(
                                                "h3",
                                                null,
                                                s.a.createElement(u.a, {
                                                    content: a
                                                        ? "gateway.deposit"
                                                        : "modal.withdraw.submit"
                                                }),
                                                " ",
                                                n
                                            )
                                        ),
                                        s.a.createElement("div", {
                                            className: "Modal__divider"
                                        }),
                                        s.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block vertical no-overflow",
                                                style: {
                                                    zIndex: 1002,
                                                    paddingLeft: "2rem",
                                                    paddingRight: "2rem",
                                                    paddingTop: "1rem"
                                                }
                                            },
                                            r
                                        )
                                    );
                                }
                            }
                        ]),
                        a
                    );
                })();
                (D.propTypes = {
                    sender: h.a.ChainAccount.isRequired,
                    asset: h.a.ChainAsset.isRequired,
                    coreAsset: h.a.ChainAsset.isRequired,
                    globalObject: h.a.ChainAsset.isRequired
                }),
                    (D.defaultProps = {
                        coreAsset: "1.3.0",
                        globalObject: "2.0.0"
                    }),
                    (D = Object(d.a)(D));
                var I = (function(e) {
                    function t() {
                        x(this, t);
                        var e = T(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (e.state = {open: !1}), e;
                    }
                    return (
                        q(t, s.a.Component),
                        j(t, [
                            {
                                key: "show",
                                value: function() {
                                    var e = this;
                                    this.setState({open: !0}, function() {
                                        i.a.publish(e.props.modalId, "open");
                                    });
                                }
                            },
                            {
                                key: "onClose",
                                value: function() {
                                    this.setState({open: !1});
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    return this.state.open
                                        ? s.a.createElement(
                                              l.a,
                                              {
                                                  className: "test",
                                                  onClose: this.onClose.bind(
                                                      this
                                                  ),
                                                  overlay: !0,
                                                  id: this.props.modalId
                                              },
                                              this.state.open
                                                  ? s.a.createElement(
                                                        D,
                                                        P({}, this.props, {
                                                            open: this.state
                                                                .open
                                                        })
                                                    )
                                                  : null
                                          )
                                        : null;
                                }
                            }
                        ]),
                        t
                    );
                })();
                t.a = I;
            }.call(this, a(29).Buffer));
        },
        451: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                s = a(20),
                o = a.n(s),
                i = a(34),
                l = a(1),
                c = a.n(l),
                u = a(18),
                p = a(5),
                m = a(13),
                d = a(6),
                h = a(44),
                b = a.n(h),
                f = a(3),
                _ = a.n(f),
                g = a(25),
                y = a(221),
                v = a(164),
                E = a(12),
                w = a(37),
                k = a(23),
                C = a(181),
                A = a(15),
                N = a(8),
                O = a(10),
                S = a(148),
                P = a.n(S),
                j =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var n in a)
                                Object.prototype.hasOwnProperty.call(a, n) &&
                                    (e[n] = a[n]);
                        }
                        return e;
                    },
                x = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function T(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function q(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function D(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var I = (function(e) {
                function t(e) {
                    T(this, t);
                    var a = q(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (a.state = {
                            toAddress: g.a.getLast(e.walletType),
                            withdrawValue: "",
                            amountError: null,
                            inputAmount: 0,
                            receiveLoading: !1,
                            limitLoading: !0,
                            apiError: !1
                        }),
                        a._validateAddress(a.state.toAddress, e),
                        (a.deposit_address_cache = new y.a()),
                        a
                    );
                }
                return (
                    D(t, r.a.Component),
                    x(t, [
                        {
                            key: "onClose",
                            value: function() {
                                o.a.publish(this.props.modalId, "close");
                            }
                        },
                        {
                            key: "componentWillMount",
                            value: function() {
                                this._getDepositAddress();
                            }
                        },
                        {
                            key: "componentDidMount",
                            value: function() {
                                this._getDepositLimit(), this._estimateOutput();
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                (e.inputCoinType === this.props.inputCoinType &&
                                    e.outputCoinType ===
                                        this.props.outputCoinType) ||
                                    (this._getDepositLimit(e),
                                    this._estimateOutput(e),
                                    this._getDepositAddress(e));
                            }
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function(e, t) {
                                return (
                                    e.inputCoinType !==
                                        this.props.inputCoinType ||
                                    e.outputCoinType !==
                                        this.props.outputCoinType ||
                                    e.sender !== this.props.sender ||
                                    e.asset !== this.props.asset ||
                                    e.isAvailable !== this.props.isAvailable ||
                                    e.isDown !== this.props.isDown ||
                                    !p.a.are_equal_shallow(t, this.state)
                                );
                            }
                        },
                        {
                            key: "_getDepositLimit",
                            value: function() {
                                var e = this,
                                    t =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : this.props;
                                this.setState({limitLoading: !0}),
                                    Object(g.k)(
                                        t.inputCoinType,
                                        t.outputCoinType
                                    )
                                        .then(function(t) {
                                            e.setState({
                                                depositLimit: t.depositLimit,
                                                limitLoading: !1
                                            });
                                        })
                                        .catch(function(t) {
                                            console.log(
                                                "deposit limit error:",
                                                t
                                            ),
                                                e.setState({
                                                    depositLimit: null,
                                                    limitLoading: !1
                                                });
                                        });
                            }
                        },
                        {
                            key: "_onAmountChange",
                            value: function(e, t) {
                                var a = new RegExp(/[[:digit:]]/),
                                    n = t.target;
                                switch (
                                    (a.test(n.value) ||
                                        (n.value = n.value.replace(
                                            /[^0-9.]/g,
                                            ""
                                        )),
                                    "." == n.value.charAt(0) &&
                                        (n.value = "0."),
                                    n.value.charAt(n.value.length) !=
                                        n.value.search(".") &&
                                        n.value.substr(1),
                                    (n.value = p.a.limitByPrecision(
                                        n.value,
                                        8
                                    )),
                                    e)
                                ) {
                                    case "input":
                                        this.setState(
                                            {inputAmount: n.value},
                                            this._estimateOutput.bind(this)
                                        );
                                        break;
                                    case "output":
                                        this.setState(
                                            {outputAmount: n.value},
                                            this._estimateInput.bind(this)
                                        );
                                }
                            }
                        },
                        {
                            key: "_estimateOutput",
                            value: function() {
                                var e = this,
                                    t =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : this.props;
                                this.setState({
                                    receiveAmount: 0,
                                    sendAmount: this.state.inputAmount
                                }),
                                    this.state.inputAmount &&
                                        (this.setState({receiveLoading: !0}),
                                        Object(g.c)(
                                            this.state.inputAmount,
                                            t.inputCoinType,
                                            t.outputCoinType
                                        )
                                            .then(function(t) {
                                                e.setState({
                                                    inputAmount: t.inputAmount,
                                                    receiveAmount:
                                                        t.outputAmount,
                                                    receiveLoading: !1
                                                });
                                            })
                                            .catch(function(t) {
                                                console.log(
                                                    "receive amount err:",
                                                    t
                                                ),
                                                    e.setState({
                                                        receiveLoading: !1,
                                                        apiError: !0
                                                    });
                                            }));
                            }
                        },
                        {
                            key: "_estimateInput",
                            value: function() {
                                var e = this,
                                    t =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : this.props;
                                this.setState({
                                    receiveAmount: this.state.outputAmount,
                                    sendAmount: 0
                                }),
                                    this.state.outputAmount &&
                                        (this.setState({receiveLoading: !0}),
                                        Object(g.b)(
                                            this.state.outputAmount,
                                            t.inputCoinType,
                                            t.outputCoinType
                                        )
                                            .then(function(t) {
                                                e.setState({
                                                    inputAmount: t.inputAmount,
                                                    sendAmount: p.a.limitByPrecision(
                                                        t.inputAmount,
                                                        8
                                                    ),
                                                    receiveLoading: !1
                                                });
                                            })
                                            .catch(function(t) {
                                                console.log(
                                                    "send amount err:",
                                                    t
                                                ),
                                                    e.setState({
                                                        receiveLoading: !1,
                                                        apiError: !0
                                                    });
                                            }));
                            }
                        },
                        {
                            key: "_getDepositAddress",
                            value: function() {
                                var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : this.props;
                                if (e.inputCoinType) {
                                    this.setState({receive_address: null}),
                                        Object(g.l)(this._getDepositObject(e));
                                }
                            }
                        },
                        {
                            key: "_getDepositObject",
                            value: function() {
                                var e = this,
                                    t =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : this.props;
                                return {
                                    inputCoinType: t.inputCoinType.toLowerCase(),
                                    outputCoinType: t.outputCoinType.toLowerCase(),
                                    outputAddress: t.sender.get("name"),
                                    url: k.a.BASE,
                                    stateCallback: function(a) {
                                        e.addDepositAddress(
                                            t.inputCoinType.toLowerCase(),
                                            t.outputCoinType.toLowerCase(),
                                            t.sender.get("name"),
                                            a
                                        );
                                    }
                                };
                            }
                        },
                        {
                            key: "addDepositAddress",
                            value: function(e, t, a, n) {
                                this.deposit_address_cache.cacheInputAddress(
                                    "blocktrades",
                                    a,
                                    e,
                                    t,
                                    n.address,
                                    n.memo
                                ),
                                    this.setState({receive_address: n});
                            }
                        },
                        {
                            key: "componentDidUpdate",
                            value: function() {
                                b.a.rebuild();
                            }
                        },
                        {
                            key: "_validateAddress",
                            value: function(e) {
                                var t = this,
                                    a =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : this.props;
                                Object(g.m)({
                                    walletType: a.walletType,
                                    newAddress: e
                                })
                                    .then(function(a) {
                                        t.state.toAddress === e &&
                                            t.setState({
                                                withdraw_address_check_in_progress: !1,
                                                validAddress: a
                                            });
                                    })
                                    .catch(function(e) {
                                        console.error(
                                            "Error when validating address:",
                                            e
                                        );
                                    });
                            }
                        },
                        {
                            key: "_openRegistrarSite",
                            value: function(e) {
                                e.preventDefault(),
                                    (window.open(
                                        N.a.site_registr,
                                        "_blank"
                                    ).opener = null);
                            }
                        },
                        {
                            key: "_onDropDownSelect",
                            value: function(e) {
                                O.a.changeViewSetting({preferredBridge: e});
                            }
                        },
                        {
                            key: "onBlockTradesContact",
                            value: function() {
                                console.log("Open New Tab"),
                                    window
                                        .open(
                                            "https://www.blocktrades.us/contact",
                                            "_blank"
                                        )
                                        .focus();
                            }
                        },
                        {
                            key: "_renderDeposit",
                            value: function() {
                                var e = p.a.replaceName(this.props.asset),
                                    t = e.name,
                                    a = e.prefix,
                                    n = this.state,
                                    s = n.receive_address,
                                    o = n.apiError,
                                    i = s && "memo" in s && s.memo,
                                    l = (s && s.address) || "",
                                    u = r.a.createElement(
                                        "div",
                                        {
                                            className: "QR",
                                            style: {textAlign: "center"}
                                        },
                                        r.a.createElement(P.a, {
                                            size: 140,
                                            value: l
                                        })
                                    ),
                                    m = Object.keys(this.props.bridges.toJS()),
                                    d = this.props.inputCoinType.toUpperCase(),
                                    h = (a || "") + t,
                                    b = (
                                        this.state.receiveAmount /
                                        this.state.inputAmount
                                    ).toFixed(4),
                                    f = h + "/" + d,
                                    g =
                                        this.state.inputAmount >
                                            parseFloat(
                                                this.state.depositLimit
                                            ) ||
                                        this.state.sendAmount >
                                            parseFloat(this.state.depositLimit),
                                    y = g
                                        ? {border: "1px solid #a94442"}
                                        : null;
                                return r.a.createElement(
                                    "div",
                                    {className: "modal__body"},
                                    r.a.createElement(
                                        "div",
                                        {className: "container-row"},
                                        r.a.createElement(
                                            "label",
                                            {className: "left-label"},
                                            r.a.createElement(c.a, {
                                                content: "modal.buy.asset"
                                            })
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "inline-label input-wrapper"
                                            },
                                            r.a.createElement("input", {
                                                disabled: !0,
                                                type: "text",
                                                defaultValue: h
                                            })
                                        )
                                    ),
                                    r.a.createElement(
                                        "div",
                                        {className: "container-row"},
                                        r.a.createElement(
                                            "div",
                                            {className: "grid-block"},
                                            r.a.createElement(
                                                "label",
                                                {className: "left-label"},
                                                r.a.createElement(c.a, {
                                                    content: "modal.buy.bridge"
                                                })
                                            ),
                                            r.a.createElement(
                                                "span",
                                                {
                                                    "data-tip": _.a.translate(
                                                        "tooltip.bridge_TRADE"
                                                    ),
                                                    className:
                                                        "inline-block tooltip",
                                                    onClick: this.onBlockTradesContact.bind(
                                                        this
                                                    )
                                                },
                                                " ",
                                                r.a.createElement(E.a, {
                                                    style: {
                                                        position: "relative",
                                                        top: 0
                                                    },
                                                    name: "question-circle",
                                                    title:
                                                        "icons.question_circle"
                                                })
                                            )
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "inline-label input-wrapper"
                                            },
                                            r.a.createElement("input", {
                                                disabled: !0,
                                                type: "text",
                                                defaultValue: "BLOCKTRADES"
                                            }),
                                            " "
                                        )
                                    ),
                                    r.a.createElement(
                                        "span",
                                        {
                                            style: o
                                                ? {display: "none"}
                                                : {display: ""}
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "container-row double-row"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "no-margin no-padding"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className: "small-6",
                                                        style: {
                                                            paddingRight: 10
                                                        }
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block"
                                                        },
                                                        r.a.createElement(
                                                            "label",
                                                            {
                                                                className:
                                                                    "left-label"
                                                            },
                                                            r.a.createElement(
                                                                c.a,
                                                                {
                                                                    content:
                                                                        "transfer.send"
                                                                }
                                                            )
                                                        ),
                                                        g
                                                            ? r.a.createElement(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "error-msg inline-block tooltip",
                                                                      "data-tip": _.a.translate(
                                                                          "tooltip.over_limit"
                                                                      )
                                                                  },
                                                                  r.a.createElement(
                                                                      c.a,
                                                                      {
                                                                          content:
                                                                              "gateway.over_limit"
                                                                      }
                                                                  ),
                                                                  " ",
                                                                  r.a.createElement(
                                                                      E.a,
                                                                      {
                                                                          name:
                                                                              "question-circle",
                                                                          title:
                                                                              "icons.question_circle"
                                                                      }
                                                                  )
                                                              )
                                                            : null
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "inline-label input-wrapper"
                                                        },
                                                        r.a.createElement(
                                                            "input",
                                                            {
                                                                style: y,
                                                                type: "text",
                                                                value: this
                                                                    .state
                                                                    .sendAmount,
                                                                onInput: this._onAmountChange.bind(
                                                                    this,
                                                                    "input"
                                                                )
                                                            }
                                                        ),
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "form-label select floating-dropdown"
                                                            },
                                                            r.a.createElement(
                                                                C.a,
                                                                {
                                                                    entries: m,
                                                                    values: m.reduce(
                                                                        function(
                                                                            e,
                                                                            t
                                                                        ) {
                                                                            return (
                                                                                t &&
                                                                                    (e[
                                                                                        t
                                                                                    ] = t),
                                                                                e
                                                                            );
                                                                        },
                                                                        {}
                                                                    ),
                                                                    singleEntry:
                                                                        m[0],
                                                                    value:
                                                                        this
                                                                            .props
                                                                            .preferredBridge ||
                                                                        m[0],
                                                                    onChange: this
                                                                        ._onDropDownSelect,
                                                                    upperCase: !0
                                                                }
                                                            )
                                                        )
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className: "small-6",
                                                        style: {paddingLeft: 10}
                                                    },
                                                    r.a.createElement(
                                                        "label",
                                                        {
                                                            className:
                                                                "left-label"
                                                        },
                                                        r.a.createElement(c.a, {
                                                            content:
                                                                "gateway.deposit_limit"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "inline-label input-wrapper"
                                                        },
                                                        r.a.createElement(
                                                            "input",
                                                            {
                                                                disabled: !0,
                                                                type: "number",
                                                                value:
                                                                    (this.state
                                                                        .depositLimit &&
                                                                        parseFloat(
                                                                            this
                                                                                .state
                                                                                .depositLimit
                                                                        ).toFixed(
                                                                            4
                                                                        )) ||
                                                                    0
                                                            }
                                                        ),
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "input-right-symbol"
                                                            },
                                                            d
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "container-row double-row"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "no-margin no-padding"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className: "small-6",
                                                        style: {
                                                            paddingRight: 10
                                                        }
                                                    },
                                                    r.a.createElement(
                                                        "label",
                                                        {
                                                            className:
                                                                "left-label"
                                                        },
                                                        r.a.createElement(c.a, {
                                                            content:
                                                                "exchange.receive"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "inline-label input-wrapper"
                                                        },
                                                        r.a.createElement(
                                                            "input",
                                                            {
                                                                style: y,
                                                                type: "text",
                                                                value: this
                                                                    .state
                                                                    .receiveAmount,
                                                                onInput: this._onAmountChange.bind(
                                                                    this,
                                                                    "output"
                                                                )
                                                            }
                                                        ),
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "input-right-symbol"
                                                            },
                                                            h
                                                        )
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className: "small-6",
                                                        style: {paddingLeft: 10}
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block"
                                                        },
                                                        r.a.createElement(
                                                            "label",
                                                            {
                                                                className:
                                                                    "left-label"
                                                            },
                                                            r.a.createElement(
                                                                c.a,
                                                                {
                                                                    content:
                                                                        "exchange.price"
                                                                }
                                                            ),
                                                            "  ",
                                                            this.state
                                                                .receiveLoading
                                                                ? r.a.createElement(
                                                                      c.a,
                                                                      {
                                                                          content:
                                                                              "footer.loading"
                                                                      }
                                                                  )
                                                                : ""
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "inline-label input-wrapper"
                                                        },
                                                        r.a.createElement(
                                                            "input",
                                                            {
                                                                disabled: !0,
                                                                type: "number",
                                                                value: g ? 0 : b
                                                            }
                                                        ),
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "input-right-symbol"
                                                            },
                                                            f
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        l
                                            ? r.a.createElement(
                                                  "div",
                                                  {className: "container-row"},
                                                  i ? null : u,
                                                  r.a.createElement(
                                                      "div",
                                                      {className: "grid-block"},
                                                      r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "copyIcon"
                                                          },
                                                          r.a.createElement(
                                                              v.a,
                                                              {
                                                                  text: l,
                                                                  className:
                                                                      "copyIcon"
                                                              }
                                                          )
                                                      ),
                                                      r.a.createElement(
                                                          "div",
                                                          null,
                                                          r.a.createElement(
                                                              c.a,
                                                              {
                                                                  component:
                                                                      "div",
                                                                  style: {
                                                                      fontSize:
                                                                          "0.8rem",
                                                                      fontWeight:
                                                                          "bold",
                                                                      paddingBottom:
                                                                          "0.3rem"
                                                                  },
                                                                  content:
                                                                      "gateway.purchase_notice",
                                                                  inputAsset: d,
                                                                  outputAsset: h
                                                              }
                                                          ),
                                                          r.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "modal__highlight"
                                                              },
                                                              l
                                                          )
                                                      )
                                                  ),
                                                  i
                                                      ? r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "grid-block",
                                                                style: {
                                                                    marginTop:
                                                                        "10px"
                                                                }
                                                            },
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "copyIcon"
                                                                },
                                                                r.a.createElement(
                                                                    v.a,
                                                                    {
                                                                        text:
                                                                            s.memo,
                                                                        className:
                                                                            "copyIcon"
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                null,
                                                                r.a.createElement(
                                                                    c.a,
                                                                    {
                                                                        unsafe: !0,
                                                                        content:
                                                                            "gateway.purchase_notice_memo",
                                                                        component:
                                                                            "div",
                                                                        style: {
                                                                            fontSize:
                                                                                "0.8rem",
                                                                            fontWeight:
                                                                                "bold",
                                                                            paddingBottom:
                                                                                "0.3rem"
                                                                        }
                                                                    }
                                                                ),
                                                                r.a.createElement(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "modal__highlight"
                                                                    },
                                                                    s.memo
                                                                )
                                                            )
                                                        )
                                                      : null
                                              )
                                            : r.a.createElement(
                                                  "div",
                                                  {
                                                      style: {
                                                          textAlign: "center"
                                                      }
                                                  },
                                                  r.a.createElement(w.a, {
                                                      type: "three-bounce"
                                                  })
                                              ),
                                        r.a.createElement(
                                            "div",
                                            null,
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "no-margin no-padding"
                                                },
                                                r.a.createElement(
                                                    "button",
                                                    {
                                                        className:
                                                            "button primary hollow",
                                                        onClick: this.onClose.bind(
                                                            this
                                                        )
                                                    },
                                                    r.a.createElement(c.a, {
                                                        content:
                                                            "transfer.close"
                                                    })
                                                )
                                            )
                                        )
                                    ),
                                    r.a.createElement(
                                        "span",
                                        {
                                            style: o
                                                ? {display: ""}
                                                : {display: "none"}
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "container-row double-row"
                                            },
                                            r.a.createElement(c.a, {
                                                className: "txtlabel cancel",
                                                content:
                                                    "gateway.unavailable_TRADE",
                                                component: "h3"
                                            }),
                                            r.a.createElement(
                                                "button",
                                                {
                                                    className:
                                                        "button primary hollow",
                                                    onClick: this.onClose.bind(
                                                        this
                                                    )
                                                },
                                                r.a.createElement(c.a, {
                                                    content: "transfer.close"
                                                })
                                            )
                                        )
                                    )
                                );
                            }
                        },
                        {
                            key: "_renderCurrentBalance",
                            value: function() {
                                var e = this,
                                    t = p.a.replaceName(this.props.asset).name,
                                    a = "deposit" === this.props.action,
                                    n = this.props.balances.find(function(t) {
                                        return (
                                            t &&
                                            t.get("asset_type") ===
                                                e.props.asset.get("id")
                                        );
                                    }),
                                    s = n
                                        ? new u.a({
                                              asset_id: n.get("asset_type"),
                                              precision: this.props.asset.get(
                                                  "precision"
                                              ),
                                              amount: n.get("balance")
                                          })
                                        : null,
                                    o = a
                                        ? r.a.createElement(
                                              "span",
                                              {
                                                  style: {
                                                      border: "2px solid black",
                                                      borderLeft: "none"
                                                  },
                                                  className: "form-label"
                                              },
                                              t
                                          )
                                        : r.a.createElement(
                                              "button",
                                              {
                                                  "data-place": "right",
                                                  "data-tip": _.a.translate(
                                                      "tooltip.withdraw_full"
                                                  ),
                                                  className: "button",
                                                  style: {
                                                      border: "2px solid black",
                                                      borderLeft: "none"
                                                  },
                                                  onClick: this._updateAmount.bind(
                                                      this,
                                                      n
                                                          ? parseInt(
                                                                n.get(
                                                                    "balance"
                                                                ),
                                                                10
                                                            )
                                                          : 0
                                                  )
                                              },
                                              r.a.createElement(E.a, {
                                                  name: "clippy",
                                                  title:
                                                      "icons.clippy.withdraw_full"
                                              })
                                          );
                                return r.a.createElement(
                                    "div",
                                    {
                                        className: "SimpleTrade__withdraw-row",
                                        style: {fontSize: "1rem"}
                                    },
                                    r.a.createElement(
                                        "label",
                                        {style: {fontSize: "1rem"}},
                                        _.a.translate("gateway.balance_asset", {
                                            asset: t
                                        }),
                                        ":",
                                        r.a.createElement(
                                            "span",
                                            {className: "inline-label"},
                                            r.a.createElement("input", {
                                                disabled: !0,
                                                style: {
                                                    color: "black",
                                                    border: "2px solid black",
                                                    padding: 10,
                                                    width: "100%"
                                                },
                                                value: s
                                                    ? s.getAmount({real: !0})
                                                    : 0
                                            }),
                                            o
                                        )
                                    )
                                );
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                return this.props.asset
                                    ? r.a.createElement(
                                          "div",
                                          {
                                              className:
                                                  "grid-block vertical no-overflow"
                                          },
                                          r.a.createElement(
                                              "div",
                                              {className: "modal__header"},
                                              r.a.createElement(c.a, {
                                                  component: "p",
                                                  content: "modal.buy.title"
                                              })
                                          ),
                                          this.props.isDown
                                              ? r.a.createElement(
                                                    "div",
                                                    {
                                                        style: {
                                                            textAlign: "center"
                                                        }
                                                    },
                                                    r.a.createElement(c.a, {
                                                        className:
                                                            "txtlabel cancel",
                                                        content:
                                                            "gateway.unavailable_TRADE",
                                                        component: "p"
                                                    })
                                                )
                                              : this.props.isAvailable
                                                  ? this._renderDeposit()
                                                  : r.a.createElement(
                                                        "div",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "center"
                                                            }
                                                        },
                                                        r.a.createElement(c.a, {
                                                            className:
                                                                "txtlabel cancel",
                                                            content:
                                                                "gateway.unavailable",
                                                            component: "p"
                                                        })
                                                    )
                                      )
                                    : null;
                            }
                        }
                    ]),
                    t
                );
            })();
            (I.propTypes = {
                sender: d.a.ChainAccount.isRequired,
                asset: d.a.ChainAsset.isRequired
            }),
                (I = Object(m.a)(I));
            var F = (function(e) {
                function t() {
                    return (
                        T(this, t),
                        q(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    D(t, r.a.Component),
                    x(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.preferredBridge,
                                    a = (function(e, t) {
                                        var a = {};
                                        for (var n in e)
                                            t.indexOf(n) >= 0 ||
                                                (Object.prototype.hasOwnProperty.call(
                                                    e,
                                                    n
                                                ) &&
                                                    (a[n] = e[n]));
                                        return a;
                                    })(e, ["preferredBridge"]),
                                    n = this.props.bridges.get(
                                        this.props.preferredBridge
                                    );
                                return (
                                    n ||
                                        (t = (n = this.props.bridges.first())
                                            .inputCoinType),
                                    r.a.createElement(
                                        I,
                                        j({}, a, {preferredBridge: t}, n.toJS())
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            F = Object(A.connect)(F, {
                listenTo: function() {
                    return [N.a];
                },
                getProps: function() {
                    return {
                        preferredBridge: N.a
                            .getState()
                            .viewSettings.get("preferredBridge", "btc")
                    };
                }
            });
            var B = (function(e) {
                function t() {
                    T(this, t);
                    var e = q(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.state = {open: !1}), e;
                }
                return (
                    D(t, r.a.Component),
                    x(t, [
                        {
                            key: "show",
                            value: function() {
                                var e = this;
                                this.setState({open: !0}, function() {
                                    o.a.publish(e.props.modalId, "open");
                                });
                            }
                        },
                        {
                            key: "onClose",
                            value: function() {
                                this.setState({open: !1});
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                return this.props.bridges && this.state.open
                                    ? r.a.createElement(
                                          i.a,
                                          {
                                              id: this.props.modalId,
                                              onClose: this.onClose.bind(this),
                                              overlay: !0
                                          },
                                          this.state.open
                                              ? r.a.createElement(
                                                    F,
                                                    j({}, this.props, {
                                                        open: this.state.open
                                                    })
                                                )
                                              : null
                                      )
                                    : null;
                            }
                        }
                    ]),
                    t
                );
            })();
            t.a = B;
        }
    }
]);
