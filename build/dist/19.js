(window.webpackJsonp = window.webpackJsonp || []).push([
    [19],
    {
        111: function(e, t, a) {
            "use strict";
            var n = a(0),
                o = a.n(n),
                r = a(509),
                s = a.n(r),
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
            var c = (function(e) {
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
                    })(t, o.a.Component),
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
                                    ? o.a.createElement(
                                          s.a,
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
                                    : o.a.createElement(this.props.component);
                            }
                        }
                    ]),
                    t
                );
            })();
            (c.defaultProps = {component: "span", enterTimeout: 2e3}),
                (t.a = c);
        },
        128: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return I;
            }),
                a.d(t, "b", function() {
                    return T;
                });
            var n = a(0),
                o = a.n(n),
                r = a(1),
                s = a.n(r),
                i = a(121),
                c = a(146),
                l = a(6),
                u = a(13),
                m = a(5),
                h = a(4),
                f = a(111),
                p = a(54),
                d = a.n(p),
                b = a(3),
                _ = a.n(b),
                v = a(12),
                g = a(9),
                y = a.n(g),
                E = a(2),
                k = a.n(E),
                w = (function() {
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
            function A(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function S(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function x(e, t) {
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
            var O = h.c.operations,
                N = {textAlign: "left"},
                C = {textAlign: "right"};
            function F(e, t) {
                return t.block_num === e.block_num
                    ? t.virtual_op - e.virtual_op
                    : t.block_num - e.block_num;
            }
            function j(e) {
                return e
                    ? '"' + e.textContent.replace(/[\s\t\r\n]/gi, " ") + '"'
                    : "";
            }
            var I = (function(e) {
                function t(e) {
                    A(this, t);
                    var a = S(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (a.state = {
                            limit: e.limit || 20,
                            csvExport: !1,
                            headerHeight: 85,
                            filter: "all"
                        }),
                        a
                    );
                }
                return (
                    x(t, o.a.Component),
                    w(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                if (!this.props.fullHeight) {
                                    var e = this.refs.transactions;
                                    d.a.initialize(e), this._setHeaderHeight();
                                }
                            }
                        },
                        {
                            key: "_setHeaderHeight",
                            value: function() {
                                var e = this.refs.header.offsetHeight;
                                e !== this.state.headerHeight &&
                                    this.setState({headerHeight: e});
                            }
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function(e, t) {
                                if (
                                    !m.a.are_equal_shallow(
                                        this.props.accountsList,
                                        e.accountsList
                                    )
                                )
                                    return !0;
                                if (this.props.maxHeight !== e.maxHeight)
                                    return !0;
                                if (this.state.headerHeight !== t.headerHeight)
                                    return !0;
                                if (this.state.filter !== t.filter) return !0;
                                if (
                                    this.props.customFilter &&
                                    (!m.a.are_equal_shallow(
                                        this.props.customFilter.fields,
                                        e.customFilter.fields
                                    ) ||
                                        !m.a.are_equal_shallow(
                                            this.props.customFilter.values,
                                            e.customFilter.values
                                        ))
                                )
                                    return !0;
                                if (this.props.maxHeight !== e.maxHeight)
                                    return !0;
                                if (
                                    t.limit !== this.state.limit ||
                                    t.csvExport !== this.state.csvExport
                                )
                                    return !0;
                                for (
                                    var a = 0;
                                    a < e.accountsList.length;
                                    ++a
                                ) {
                                    var n = e.accountsList[a],
                                        o = this.props.accountsList[a];
                                    if (
                                        n &&
                                        o &&
                                        n.get("history") !== o.get("history")
                                    )
                                        return !0;
                                }
                                return !1;
                            }
                        },
                        {
                            key: "componentDidUpdate",
                            value: function() {
                                if (this.state.csvExport) {
                                    this.state.csvExport = !1;
                                    var e = document.getElementById(
                                            "csv_export_container"
                                        ).childNodes,
                                        t = "",
                                        a = !0,
                                        n = !1,
                                        o = void 0;
                                    try {
                                        for (
                                            var r, s = e[Symbol.iterator]();
                                            !(a = (r = s.next()).done);
                                            a = !0
                                        ) {
                                            var c = r.value.childNodes;
                                            "" !== t && (t += "\n"),
                                                (t += [
                                                    j(c[0]),
                                                    j(c[1]),
                                                    j(c[2]),
                                                    j(c[3])
                                                ].join(","));
                                        }
                                    } catch (e) {
                                        (n = !0), (o = e);
                                    } finally {
                                        try {
                                            !a && s.return && s.return();
                                        } finally {
                                            if (n) throw o;
                                        }
                                    }
                                    var l = new Blob([t], {
                                            type: "text/csv;charset=utf-8"
                                        }),
                                        u = new Date();
                                    Object(i.saveAs)(
                                        l,
                                        "btshist-" +
                                            u.getFullYear() +
                                            "-" +
                                            ("0" + (u.getMonth() + 1)).slice(
                                                -2
                                            ) +
                                            "-" +
                                            ("0" + u.getDate()).slice(-2) +
                                            "-" +
                                            ("0" + u.getHours()).slice(-2) +
                                            ("0" + u.getMinutes()).slice(-2) +
                                            ".csv"
                                    );
                                }
                                if (!this.props.fullHeight) {
                                    var m = this.refs.transactions;
                                    d.a.update(m), this._setHeaderHeight();
                                }
                            }
                        },
                        {
                            key: "_onIncreaseLimit",
                            value: function() {
                                this.setState({limit: this.state.limit + 30});
                            }
                        },
                        {
                            key: "_getHistory",
                            value: function(e, t, a) {
                                var n = [],
                                    o = new Set(),
                                    r = !0,
                                    s = !1,
                                    i = void 0;
                                try {
                                    for (
                                        var c, l = e[Symbol.iterator]();
                                        !(r = (c = l.next()).done);
                                        r = !0
                                    ) {
                                        var u = c.value;
                                        if (u) {
                                            var m = u.get("history");
                                            m &&
                                                (n = n.concat(
                                                    m
                                                        .toJS()
                                                        .filter(function(e) {
                                                            return (
                                                                !o.has(e.id) &&
                                                                o.add(e.id)
                                                            );
                                                        })
                                                ));
                                        }
                                    }
                                } catch (e) {
                                    (s = !0), (i = e);
                                } finally {
                                    try {
                                        !r && l.return && l.return();
                                    } finally {
                                        if (s) throw i;
                                    }
                                }
                                return (
                                    t &&
                                        (n = n.filter(function(e) {
                                            return e.op[0] === O[t];
                                        })),
                                    a &&
                                        (n = n.filter(function(e) {
                                            return a.fields.reduce(function(
                                                t,
                                                n
                                            ) {
                                                switch (n) {
                                                    case "asset_id":
                                                        return (
                                                            t &&
                                                            e.op[1].amount[
                                                                n
                                                            ] === a.values[n]
                                                        );
                                                    default:
                                                        return (
                                                            t &&
                                                            e.op[1][n] ===
                                                                a.values[n]
                                                        );
                                                }
                                            },
                                            !0);
                                        })),
                                    n
                                );
                            }
                        },
                        {
                            key: "_downloadCSV",
                            value: function() {
                                this.setState({csvExport: !0});
                            }
                        },
                        {
                            key: "_onChangeFilter",
                            value: function(e) {
                                this.setState({filter: e.target.value});
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.accountsList,
                                    a = e.compactView,
                                    n = e.filter,
                                    r = e.customFilter,
                                    i = e.style,
                                    l = e.maxHeight,
                                    u = this.state,
                                    m = u.limit,
                                    h = u.headerHeight,
                                    p =
                                        1 === t.length && t[0]
                                            ? t[0].get("id")
                                            : null,
                                    d = this._getHistory(
                                        t,
                                        this.props.showFilters &&
                                        "all" !== this.state.filter
                                            ? this.state.filter
                                            : n,
                                        r
                                    ).sort(F),
                                    b = d.length,
                                    g = null;
                                g = [
                                    "all",
                                    "transfer",
                                    "limit_order_create",
                                    "limit_order_cancel",
                                    "fill_order",
                                    "account_create",
                                    "account_update",
                                    "asset_create",
                                    "witness_withdraw_pay",
                                    "vesting_balance_withdraw"
                                ].map(function(e) {
                                    return o.a.createElement(
                                        "option",
                                        {value: e, key: e},
                                        _.a.translate(
                                            "transaction.trxTypes." + e
                                        )
                                    );
                                });
                                var E = d.length
                                    ? d.slice(0, m).map(function(e) {
                                          return o.a.createElement(c.a, {
                                              includeOperationId: !0,
                                              operationId: e.id,
                                              style: N,
                                              key: e.id,
                                              op: e.op,
                                              result: e.result,
                                              block: e.block_num,
                                              current: p,
                                              hideFee: !0,
                                              inverted: !1,
                                              hideOpLabel: a,
                                              fullDate: !0
                                          });
                                      })
                                    : [
                                          o.a.createElement(
                                              "tr",
                                              {key: "no_recent"},
                                              o.a.createElement(
                                                  "td",
                                                  {colSpan: a ? "2" : "3"},
                                                  o.a.createElement(s.a, {
                                                      content:
                                                          "operation.no_recent"
                                                  })
                                              )
                                          )
                                      ];
                                return (
                                    E.push(
                                        o.a.createElement(
                                            "tr",
                                            {
                                                className: "total-value",
                                                key: "total_value"
                                            },
                                            o.a.createElement("td", {
                                                className: "column-hide-tiny"
                                            }),
                                            o.a.createElement(
                                                "td",
                                                {style: C},
                                                b > 0
                                                    ? o.a.createElement(
                                                          "span",
                                                          null,
                                                          o.a.createElement(
                                                              "a",
                                                              {
                                                                  className:
                                                                      "inline-block",
                                                                  onClick: this._downloadCSV.bind(
                                                                      this
                                                                  ),
                                                                  "data-tip": _.a.translate(
                                                                      "transaction.csv_tip"
                                                                  ),
                                                                  "data-place":
                                                                      "bottom"
                                                              },
                                                              o.a.createElement(
                                                                  v.a,
                                                                  {
                                                                      name:
                                                                          "excel",
                                                                      title:
                                                                          "icons.excel",
                                                                      className:
                                                                          "icon-14px"
                                                                  }
                                                              )
                                                          )
                                                      )
                                                    : null
                                            ),
                                            o.a.createElement(
                                                "td",
                                                {style: {textAlign: "center"}},
                                                " ",
                                                (this.props.showMore &&
                                                    b > this.props.limit) ||
                                                m < b
                                                    ? o.a.createElement(
                                                          "a",
                                                          {
                                                              onClick: this._onIncreaseLimit.bind(
                                                                  this
                                                              )
                                                          },
                                                          o.a.createElement(
                                                              v.a,
                                                              {
                                                                  name:
                                                                      "chevron-down",
                                                                  title:
                                                                      "icons.chevron_down.transactions",
                                                                  className:
                                                                      "icon-14px"
                                                              }
                                                          )
                                                      )
                                                    : null
                                            )
                                        )
                                    ),
                                    o.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "recent-transactions no-overflow",
                                            style: i
                                        },
                                        o.a.createElement(
                                            "div",
                                            {className: "generic-bordered-box"},
                                            this.props.dashboard
                                                ? null
                                                : o.a.createElement(
                                                      "div",
                                                      {ref: "header"},
                                                      o.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "block-content-header"
                                                          },
                                                          o.a.createElement(
                                                              "span",
                                                              null,
                                                              this.props.title
                                                                  ? this.props
                                                                        .title
                                                                  : o.a.createElement(
                                                                        s.a,
                                                                        {
                                                                            content:
                                                                                "account.recent"
                                                                        }
                                                                    )
                                                          )
                                                      )
                                                  ),
                                            o.a.createElement(
                                                "div",
                                                {className: "header-selector"},
                                                o.a.createElement(
                                                    "div",
                                                    {className: "selector"},
                                                    o.a.createElement(
                                                        "div",
                                                        {
                                                            className: y()(
                                                                "inline-block"
                                                            )
                                                        },
                                                        this.props.showFilters
                                                            ? o.a.createElement(
                                                                  "select",
                                                                  {
                                                                      "data-place":
                                                                          "left",
                                                                      "data-tip": _.a.translate(
                                                                          "tooltip.filter_ops"
                                                                      ),
                                                                      style: {
                                                                          paddingTop: 5,
                                                                          width:
                                                                              "auto"
                                                                      },
                                                                      className:
                                                                          "bts-select no-margin",
                                                                      value: this
                                                                          .state
                                                                          .filter,
                                                                      onChange: this._onChangeFilter.bind(
                                                                          this
                                                                      )
                                                                  },
                                                                  g
                                                              )
                                                            : null
                                                    )
                                                )
                                            ),
                                            o.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "box-content grid-block no-margin",
                                                    style: this.props.fullHeight
                                                        ? null
                                                        : {maxHeight: l - h},
                                                    ref: "transactions"
                                                },
                                                o.a.createElement(
                                                    "table",
                                                    {
                                                        className:
                                                            "table table-striped " +
                                                            (a
                                                                ? "compact"
                                                                : "") +
                                                            (this.props
                                                                .dashboard
                                                                ? " dashboard-table table-hover"
                                                                : "")
                                                    },
                                                    o.a.createElement(
                                                        "thead",
                                                        null,
                                                        o.a.createElement(
                                                            "tr",
                                                            null,
                                                            o.a.createElement(
                                                                "th",
                                                                {
                                                                    className:
                                                                        "column-hide-tiny",
                                                                    style: N
                                                                },
                                                                o.a.createElement(
                                                                    s.a,
                                                                    {
                                                                        content:
                                                                            "account.transactions.id"
                                                                    }
                                                                )
                                                            ),
                                                            o.a.createElement(
                                                                "th",
                                                                {
                                                                    className:
                                                                        "column-hide-tiny",
                                                                    style: N
                                                                },
                                                                o.a.createElement(
                                                                    s.a,
                                                                    {
                                                                        content:
                                                                            "account.transactions.type"
                                                                    }
                                                                )
                                                            ),
                                                            o.a.createElement(
                                                                "th",
                                                                {style: N},
                                                                o.a.createElement(
                                                                    s.a,
                                                                    {
                                                                        content:
                                                                            "account.transactions.info"
                                                                    }
                                                                )
                                                            ),
                                                            o.a.createElement(
                                                                "th",
                                                                {style: N},
                                                                o.a.createElement(
                                                                    s.a,
                                                                    {
                                                                        content:
                                                                            "account.transactions.time"
                                                                    }
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    o.a.createElement(
                                                        f.a,
                                                        {
                                                            component: "tbody",
                                                            transitionName:
                                                                "newrow"
                                                        },
                                                        E
                                                    )
                                                )
                                            ),
                                            b > 0 &&
                                                this.state.csvExport &&
                                                o.a.createElement(
                                                    "div",
                                                    {
                                                        id:
                                                            "csv_export_container",
                                                        style: {display: "none"}
                                                    },
                                                    o.a.createElement(
                                                        "div",
                                                        null,
                                                        o.a.createElement(
                                                            "div",
                                                            null,
                                                            "DATE"
                                                        ),
                                                        o.a.createElement(
                                                            "div",
                                                            null,
                                                            "OPERATION"
                                                        ),
                                                        o.a.createElement(
                                                            "div",
                                                            null,
                                                            "MEMO"
                                                        ),
                                                        o.a.createElement(
                                                            "div",
                                                            null,
                                                            "AMOUNT"
                                                        )
                                                    ),
                                                    d.map(function(e) {
                                                        return o.a.createElement(
                                                            c.a,
                                                            {
                                                                key: e.id,
                                                                op: e.op,
                                                                result:
                                                                    e.result,
                                                                block:
                                                                    e.block_num,
                                                                inverted: !1,
                                                                csvExportMode: !0
                                                            }
                                                        );
                                                    })
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
            (I.propTypes = {
                accountsList: l.a.ChainAccountsList.isRequired,
                compactView: k.a.bool,
                limit: k.a.number,
                maxHeight: k.a.number,
                fullHeight: k.a.bool,
                showFilters: k.a.bool
            }),
                (I.defaultProps = {
                    limit: 25,
                    maxHeight: 500,
                    fullHeight: !1,
                    showFilters: !1
                }),
                (I = Object(u.a)(I));
            var T = (function(e) {
                function t() {
                    return (
                        A(this, t),
                        S(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    x(t, o.a.Component),
                    w(t, [
                        {
                            key: "render",
                            value: function() {
                                return o.a.createElement(
                                    "span",
                                    {className: "wrapper"},
                                    this.props.children(this.props)
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (T.propTypes = {
                asset: l.a.ChainAsset.isRequired,
                to: l.a.ChainAccount.isRequired,
                fromAccount: l.a.ChainAccount.isRequired
            }),
                (T.defaultProps = {asset: "1.3.0"}),
                (T = Object(u.a)(T));
        },
        4966: function(e, t, a) {
            "use strict";
            a.r(t),
                function(e) {
                    var n = a(394),
                        o = a(76),
                        r = a(0),
                        s = a.n(r),
                        i = a(57),
                        c = a(24),
                        l = a(1),
                        u = a.n(l),
                        m = a(117),
                        h = a(101),
                        f = a(14),
                        p = a(44),
                        d = a(5),
                        b = a(3),
                        _ = a.n(b),
                        v = a(39),
                        g = a(128),
                        y = a(7),
                        E = a.n(y),
                        k = a(4),
                        w = a(15),
                        A = a(36),
                        S = a(9),
                        x = a.n(S),
                        O = a(18),
                        N = (function() {
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
                    var C = (function(t) {
                        function a(e) {
                            !(function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            })(this, a);
                            var t = (function(e, t) {
                                    if (!e)
                                        throw new ReferenceError(
                                            "this hasn't been initialised - super() hasn't been called"
                                        );
                                    return !t ||
                                        ("object" != typeof t &&
                                            "function" != typeof t)
                                        ? e
                                        : t;
                                })(
                                    this,
                                    (
                                        a.__proto__ || Object.getPrototypeOf(a)
                                    ).call(this, e)
                                ),
                                n = a.getInitialState(),
                                r = t.props.location.query;
                            r.from &&
                                ((n.from_name = r.from),
                                k.b.getAccount(r.from)),
                                r.to &&
                                    ((n.to_name = r.to), k.b.getAccount(r.to)),
                                r.amount && (n.amount = r.amount),
                                r.asset &&
                                    ((n.asset_id = r.asset),
                                    (n.asset = k.b.getAsset(r.asset))),
                                r.memo && (n.memo = r.memo);
                            var s = f.a.getState().currentAccount;
                            return (
                                n.from_name || (n.from_name = s),
                                (t.state = n),
                                (t.onTrxIncluded = t.onTrxIncluded.bind(t)),
                                (t._updateFee = Object(o.a)(
                                    t._updateFee.bind(t),
                                    250
                                )),
                                (t._checkFeeStatus = t._checkFeeStatus.bind(t)),
                                (t._checkBalance = t._checkBalance.bind(t)),
                                t
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
                            })(a, s.a.Component),
                            N(
                                a,
                                [
                                    {
                                        key: "componentWillMount",
                                        value: function() {
                                            (this.nestedRef = null),
                                                this._updateFee(),
                                                this._checkFeeStatus();
                                        }
                                    },
                                    {
                                        key: "shouldComponentUpdate",
                                        value: function(e, t) {
                                            var a = this._getAvailableAssets()
                                                    .asset_types,
                                                n = this._getAvailableAssets(t)
                                                    .asset_types;
                                            if (1 === n.length) {
                                                var o = k.b.getAsset(n[0]);
                                                1 !== a.length &&
                                                    this.onAmountChanged({
                                                        amount: t.amount,
                                                        asset: o
                                                    }),
                                                    n[0] !==
                                                        this.state
                                                            .fee_asset_id &&
                                                        o &&
                                                        this.state
                                                            .fee_asset_id !==
                                                            n[0] &&
                                                        this.setState({
                                                            feeAsset: o,
                                                            fee_asset_id: n[0]
                                                        });
                                            }
                                            return !0;
                                        }
                                    },
                                    {
                                        key: "componentWillReceiveProps",
                                        value: function(e) {
                                            var t = this;
                                            e.currentAccount !==
                                                this.state.from_name &&
                                                e.currentAccount !==
                                                    this.props.currentAccount &&
                                                this.setState(
                                                    {
                                                        from_name:
                                                            e.currentAccount,
                                                        from_account: k.b.getAccount(
                                                            e.currentAccount
                                                        ),
                                                        feeStatus: {},
                                                        fee_asset_id: "1.3.0",
                                                        feeAmount: new O.a({
                                                            amount: 0
                                                        })
                                                    },
                                                    function() {
                                                        t._updateFee(),
                                                            t._checkFeeStatus(
                                                                k.b.getAccount(
                                                                    e.currentAccount
                                                                )
                                                            );
                                                    }
                                                );
                                        }
                                    },
                                    {
                                        key: "_checkBalance",
                                        value: function() {
                                            var e = this.state,
                                                t = e.feeAmount,
                                                a = e.amount,
                                                n = e.from_account,
                                                o = e.asset;
                                            if (o && n) {
                                                var r = n.getIn([
                                                        "balances",
                                                        o.get("id")
                                                    ]),
                                                    s = n.getIn([
                                                        "balances",
                                                        t.asset_id
                                                    ]);
                                                if (o && n) {
                                                    if (!r)
                                                        return this.setState({
                                                            balanceError: !0
                                                        });
                                                    var i = k.b.getObject(r),
                                                        c = s
                                                            ? k.b.getObject(s)
                                                            : null;
                                                    if (
                                                        ((c &&
                                                            0 !==
                                                                c.get(
                                                                    "balance"
                                                                )) ||
                                                            this.setState(
                                                                {
                                                                    fee_asset_id:
                                                                        "1.3.0"
                                                                },
                                                                this._updateFee
                                                            ),
                                                        i && t)
                                                    ) {
                                                        var l = Object(A.a)(
                                                            a,
                                                            o,
                                                            t,
                                                            i
                                                        );
                                                        null !== l &&
                                                            this.setState({
                                                                balanceError: !l
                                                            });
                                                    }
                                                }
                                            }
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
                                                        : this.state
                                                              .from_account;
                                            if (t) {
                                                var a = Object.keys(
                                                        t.get("balances").toJS()
                                                    ).sort(d.a.sortID),
                                                    n = {},
                                                    o = [];
                                                a.forEach(function(a) {
                                                    o.push(
                                                        Object(A.b)({
                                                            accountID: t.get(
                                                                "id"
                                                            ),
                                                            feeID: a,
                                                            options: [
                                                                "price_per_kbyte"
                                                            ],
                                                            data: {
                                                                type: "memo",
                                                                content:
                                                                    e.state.memo
                                                            }
                                                        })
                                                    );
                                                }),
                                                    Promise.all(o)
                                                        .then(function(t) {
                                                            a.forEach(function(
                                                                e,
                                                                a
                                                            ) {
                                                                n[e] = t[a];
                                                            }),
                                                                d.a.are_equal_shallow(
                                                                    e.state
                                                                        .feeStatus,
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
                                                        : this.state,
                                                a = t.fee_asset_id,
                                                n = t.from_account,
                                                o = t.asset_id,
                                                r = this._getAvailableAssets(t)
                                                    .fee_asset_types;
                                            if (
                                                (1 === r.length &&
                                                    r[0] !== a &&
                                                    (a = r[0]),
                                                !n)
                                            )
                                                return null;
                                            Object(A.b)({
                                                accountID: n.get("id"),
                                                feeID: a,
                                                options: ["price_per_kbyte"],
                                                data: {
                                                    type: "memo",
                                                    content: t.memo
                                                }
                                            }).then(function(t) {
                                                var a = t.fee,
                                                    r = t.hasBalance,
                                                    s = t.hasPoolBalance;
                                                return Object(A.d)(n, a).then(
                                                    function(t) {
                                                        return t
                                                            ? e.setState(
                                                                  {
                                                                      fee_asset_id: o
                                                                  },
                                                                  e._updateFee
                                                              )
                                                            : e.setState({
                                                                  feeAmount: a,
                                                                  fee_asset_id:
                                                                      a.asset_id,
                                                                  hasBalance: r,
                                                                  hasPoolBalance: s,
                                                                  error:
                                                                      !r || !s
                                                              });
                                                    }
                                                );
                                            });
                                        }
                                    },
                                    {
                                        key: "fromChanged",
                                        value: function(e) {
                                            e ||
                                                this.setState({
                                                    from_account: null
                                                }),
                                                this.setState({
                                                    from_name: e,
                                                    error: null,
                                                    propose: !1,
                                                    propose_account: ""
                                                });
                                        }
                                    },
                                    {
                                        key: "toChanged",
                                        value: function(e) {
                                            this.setState({
                                                to_name: e,
                                                error: null
                                            });
                                        }
                                    },
                                    {
                                        key: "onFromAccountChanged",
                                        value: function(e) {
                                            var t = this;
                                            this.setState(
                                                {from_account: e, error: null},
                                                function() {
                                                    t._updateFee(),
                                                        t._checkFeeStatus();
                                                }
                                            );
                                        }
                                    },
                                    {
                                        key: "onToAccountChanged",
                                        value: function(e) {
                                            this.setState({
                                                to_account: e,
                                                error: null
                                            });
                                        }
                                    },
                                    {
                                        key: "onAmountChanged",
                                        value: function(e) {
                                            var t = e.amount,
                                                a = e.asset;
                                            a &&
                                                this.setState(
                                                    {
                                                        amount: t,
                                                        asset: a,
                                                        asset_id: a.get("id"),
                                                        error: null
                                                    },
                                                    this._checkBalance
                                                );
                                        }
                                    },
                                    {
                                        key: "onFeeChanged",
                                        value: function(e) {
                                            var t = e.asset;
                                            this.setState(
                                                {
                                                    feeAsset: t,
                                                    fee_asset_id: t.get("id"),
                                                    error: null
                                                },
                                                this._updateFee
                                            );
                                        }
                                    },
                                    {
                                        key: "onMemoChanged",
                                        value: function(e) {
                                            this.setState(
                                                {memo: e.target.value},
                                                this._updateFee
                                            );
                                        }
                                    },
                                    {
                                        key: "onTrxIncluded",
                                        value: function(e) {
                                            e.included &&
                                            e.broadcasted_transaction
                                                ? (v.a.unlisten(
                                                      this.onTrxIncluded
                                                  ),
                                                  v.a.reset())
                                                : e.closed &&
                                                  (v.a.unlisten(
                                                      this.onTrxIncluded
                                                  ),
                                                  v.a.reset());
                                        }
                                    },
                                    {
                                        key: "onPropose",
                                        value: function(e, t) {
                                            t.preventDefault(),
                                                this.setState({
                                                    propose: e,
                                                    propose_account: null
                                                });
                                        }
                                    },
                                    {
                                        key: "onProposeAccount",
                                        value: function(e) {
                                            this.setState({propose_account: e});
                                        }
                                    },
                                    {
                                        key: "resetForm",
                                        value: function() {
                                            this.setState({
                                                memo: "",
                                                to_name: "",
                                                amount: ""
                                            });
                                        }
                                    },
                                    {
                                        key: "onSubmit",
                                        value: function(t) {
                                            var a = this;
                                            t.preventDefault(),
                                                this.setState({error: null});
                                            var n = this.state,
                                                o = n.asset,
                                                r = n.amount,
                                                s = new O.a({
                                                    real: r,
                                                    asset_id: o.get("id"),
                                                    precision: o.get(
                                                        "precision"
                                                    )
                                                });
                                            c.a
                                                .transfer(
                                                    this.state.from_account.get(
                                                        "id"
                                                    ),
                                                    this.state.to_account.get(
                                                        "id"
                                                    ),
                                                    s.getAmount(),
                                                    o.get("id"),
                                                    this.state.memo
                                                        ? new e(
                                                              this.state.memo,
                                                              "utf-8"
                                                          )
                                                        : this.state.memo,
                                                    this.state.propose
                                                        ? this.state
                                                              .propose_account
                                                        : null,
                                                    this.state.feeAsset
                                                        ? this.state.feeAsset.get(
                                                              "id"
                                                          )
                                                        : "1.3.0"
                                                )
                                                .then(function() {
                                                    a.resetForm.call(a),
                                                        v.a.unlisten(
                                                            a.onTrxIncluded
                                                        ),
                                                        v.a.listen(
                                                            a.onTrxIncluded
                                                        );
                                                })
                                                .catch(function(e) {
                                                    var t = e.message
                                                        ? e.message.split(
                                                              "\n"
                                                          )[1] || e.message
                                                        : null;
                                                    console.log(
                                                        "error: ",
                                                        e,
                                                        t
                                                    ),
                                                        a.setState({error: t});
                                                });
                                        }
                                    },
                                    {
                                        key: "setNestedRef",
                                        value: function(e) {
                                            this.nestedRef = e;
                                        }
                                    },
                                    {
                                        key: "_setTotal",
                                        value: function(e, t) {
                                            var a = this.state.feeAmount,
                                                n = k.b.getObject(t),
                                                o = k.b.getObject(e),
                                                r = new O.a({
                                                    amount: n.get("balance"),
                                                    asset_id: o.get("id"),
                                                    precision: o.get(
                                                        "precision"
                                                    )
                                                });
                                            n &&
                                                (a.asset_id === r.asset_id &&
                                                    r.minus(a),
                                                this.setState(
                                                    {
                                                        amount: r.getAmount({
                                                            real: !0
                                                        })
                                                    },
                                                    this._checkBalance
                                                ));
                                        }
                                    },
                                    {
                                        key: "_getAvailableAssets",
                                        value: function() {
                                            var e =
                                                    arguments.length > 0 &&
                                                    void 0 !== arguments[0]
                                                        ? arguments[0]
                                                        : this.state,
                                                t = this.state.feeStatus;
                                            var a = e.from_account,
                                                n = e.from_error,
                                                o = [],
                                                r = [];
                                            if (!a || !a.get("balances") || n)
                                                return {
                                                    asset_types: o,
                                                    fee_asset_types: r
                                                };
                                            var s = e.from_account
                                                .get("balances")
                                                .toJS();
                                            for (var i in ((o = Object.keys(
                                                s
                                            ).sort(d.a.sortID)),
                                            (r = Object.keys(s).sort(
                                                d.a.sortID
                                            )),
                                            s)) {
                                                var c = k.b.getObject(s[i]);
                                                c &&
                                                    0 === c.get("balance") &&
                                                    (o.splice(o.indexOf(i), 1),
                                                    -1 !== r.indexOf(i) &&
                                                        r.splice(
                                                            r.indexOf(i),
                                                            1
                                                        ));
                                            }
                                            return {
                                                asset_types: o,
                                                fee_asset_types: (r = r.filter(
                                                    function(e) {
                                                        return (
                                                            (function(e) {
                                                                return (
                                                                    void 0 ===
                                                                        t[e] ||
                                                                    (t[e] &&
                                                                        t[e]
                                                                            .hasPoolBalance)
                                                                );
                                                            })(e) &&
                                                            (function(e) {
                                                                return (
                                                                    void 0 ===
                                                                        t[e] ||
                                                                    (t[e] &&
                                                                        t[e]
                                                                            .hasBalance)
                                                                );
                                                            })(e)
                                                        );
                                                    }
                                                ))
                                            };
                                        }
                                    },
                                    {
                                        key: "render",
                                        value: function() {
                                            var e = null,
                                                t = this.state,
                                                a = t.propose,
                                                o = t.from_account,
                                                r = t.to_account,
                                                c = t.asset,
                                                l = t.asset_id,
                                                d = t.propose_account,
                                                b = t.feeAmount,
                                                v = t.amount,
                                                y = t.error,
                                                w = t.to_name,
                                                A = t.from_name,
                                                S = t.memo,
                                                O = t.feeAsset,
                                                N = t.fee_asset_id,
                                                C = t.balanceError,
                                                F =
                                                    f.a.isMyAccount(o) ||
                                                    A ===
                                                        this.props
                                                            .passwordAccount;
                                            !o ||
                                                F ||
                                                a ||
                                                (e = s.a.createElement(
                                                    "span",
                                                    null,
                                                    _.a.translate(
                                                        "account.errors.not_yours"
                                                    ),
                                                    " (",
                                                    s.a.createElement(
                                                        "a",
                                                        {
                                                            onClick: this.onPropose.bind(
                                                                this,
                                                                !0
                                                            )
                                                        },
                                                        _.a.translate("propose")
                                                    ),
                                                    ")"
                                                ));
                                            var j = this._getAvailableAssets(),
                                                I = j.asset_types,
                                                T = j.fee_asset_types,
                                                H = null,
                                                P = this.state.feeAmount.getAmount(
                                                    {real: !0}
                                                );
                                            if (o && o.get("balances") && !e) {
                                                var B = o
                                                    .get("balances")
                                                    .toJS();
                                                if (
                                                    (1 === I.length &&
                                                        (c = k.b.getAsset(
                                                            I[0]
                                                        )),
                                                    I.length > 0)
                                                ) {
                                                    var D = c
                                                            ? c.get("id")
                                                            : I[0],
                                                        L = O
                                                            ? O.get("id")
                                                            : "1.3.0";
                                                    H = s.a.createElement(
                                                        "span",
                                                        {
                                                            style: {
                                                                borderBottom:
                                                                    "#A09F9F 1px dotted",
                                                                cursor:
                                                                    "pointer"
                                                            },
                                                            onClick: this._setTotal.bind(
                                                                this,
                                                                D,
                                                                B[D],
                                                                P,
                                                                L
                                                            )
                                                        },
                                                        s.a.createElement(u.a, {
                                                            component: "span",
                                                            content:
                                                                "transfer.available"
                                                        }),
                                                        ":",
                                                        " ",
                                                        s.a.createElement(i.a, {
                                                            balance: B[D]
                                                        })
                                                    );
                                                } else H = "No funds";
                                            }
                                            var M = a && !d,
                                                R = parseFloat(
                                                    String.prototype.replace.call(
                                                        v,
                                                        /,/g,
                                                        ""
                                                    )
                                                ),
                                                q = R && !Object(n.a)(R),
                                                J = r && r.get("name") === w,
                                                V =
                                                    !o ||
                                                    !J ||
                                                    !q ||
                                                    !c ||
                                                    e ||
                                                    M ||
                                                    C,
                                                U = E.a.Set();
                                            U = U.add(o);
                                            var z = 1;
                                            return s.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block vertical"
                                                },
                                                s.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-block shrink vertical medium-horizontal",
                                                        style: {
                                                            paddingTop: "2rem"
                                                        }
                                                    },
                                                    s.a.createElement(
                                                        "form",
                                                        {
                                                            style: {
                                                                paddingBottom: 20,
                                                                overflow:
                                                                    "visible"
                                                            },
                                                            className:
                                                                "grid-content small-12 medium-6 large-5 large-offset-1 full-width-content",
                                                            onSubmit: this.onSubmit.bind(
                                                                this
                                                            ),
                                                            noValidate: !0
                                                        },
                                                        s.a.createElement(u.a, {
                                                            content:
                                                                "transfer.header",
                                                            component: "h2"
                                                        }),
                                                        s.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "content-block"
                                                            },
                                                            s.a.createElement(
                                                                h.a,
                                                                {
                                                                    label:
                                                                        "transfer.from",
                                                                    ref: "from",
                                                                    accountName: A,
                                                                    onChange: this.fromChanged.bind(
                                                                        this
                                                                    ),
                                                                    onAccountChanged: this.onFromAccountChanged.bind(
                                                                        this
                                                                    ),
                                                                    account: o,
                                                                    size: 60,
                                                                    error: e,
                                                                    typeahead: !0,
                                                                    tabIndex: z++
                                                                }
                                                            )
                                                        ),
                                                        s.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "content-block"
                                                            },
                                                            s.a.createElement(
                                                                h.a,
                                                                {
                                                                    label:
                                                                        "transfer.to",
                                                                    ref: "to",
                                                                    accountName: w,
                                                                    onChange: this.toChanged.bind(
                                                                        this
                                                                    ),
                                                                    onAccountChanged: this.onToAccountChanged.bind(
                                                                        this
                                                                    ),
                                                                    account: r,
                                                                    size: 60,
                                                                    tabIndex: z++,
                                                                    typeahead: !0
                                                                }
                                                            )
                                                        ),
                                                        s.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "content-block transfer-input"
                                                            },
                                                            s.a.createElement(
                                                                p.a,
                                                                {
                                                                    label:
                                                                        "transfer.amount",
                                                                    amount: v,
                                                                    onChange: this.onAmountChanged.bind(
                                                                        this
                                                                    ),
                                                                    asset:
                                                                        I.length >
                                                                            0 &&
                                                                        c
                                                                            ? c.get(
                                                                                  "id"
                                                                              )
                                                                            : l ||
                                                                              I[0],
                                                                    assets: I,
                                                                    display_balance: H,
                                                                    tabIndex: z++
                                                                }
                                                            ),
                                                            this.state
                                                                .balanceError
                                                                ? s.a.createElement(
                                                                      "p",
                                                                      {
                                                                          className:
                                                                              "has-error no-margin",
                                                                          style: {
                                                                              paddingTop: 10
                                                                          }
                                                                      },
                                                                      s.a.createElement(
                                                                          u.a,
                                                                          {
                                                                              content:
                                                                                  "transfer.errors.insufficient"
                                                                          }
                                                                      )
                                                                  )
                                                                : null
                                                        ),
                                                        s.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "content-block transfer-input"
                                                            },
                                                            S && S.length
                                                                ? s.a.createElement(
                                                                      "label",
                                                                      {
                                                                          className:
                                                                              "right-label"
                                                                      },
                                                                      S.length
                                                                  )
                                                                : null,
                                                            s.a.createElement(
                                                                u.a,
                                                                {
                                                                    className:
                                                                        "left-label tooltip",
                                                                    component:
                                                                        "label",
                                                                    content:
                                                                        "transfer.memo",
                                                                    "data-place":
                                                                        "top",
                                                                    "data-tip": _.a.translate(
                                                                        "tooltip.memo_tip"
                                                                    )
                                                                }
                                                            ),
                                                            s.a.createElement(
                                                                "textarea",
                                                                {
                                                                    style: {
                                                                        marginBottom: 0
                                                                    },
                                                                    rows: "3",
                                                                    value: S,
                                                                    tabIndex: z++,
                                                                    onChange: this.onMemoChanged.bind(
                                                                        this
                                                                    )
                                                                }
                                                            ),
                                                            this.state.propose
                                                                ? s.a.createElement(
                                                                      "div",
                                                                      {
                                                                          className:
                                                                              "error-area",
                                                                          style: {
                                                                              position:
                                                                                  "absolute"
                                                                          }
                                                                      },
                                                                      s.a.createElement(
                                                                          u.a,
                                                                          {
                                                                              content:
                                                                                  "transfer.warn_name_unable_read_memo",
                                                                              name: this
                                                                                  .state
                                                                                  .from_name
                                                                          }
                                                                      )
                                                                  )
                                                                : null
                                                        ),
                                                        s.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "content-block transfer-input fee-row" +
                                                                    (this.state
                                                                        .propose
                                                                        ? " proposal"
                                                                        : "")
                                                            },
                                                            s.a.createElement(
                                                                p.a,
                                                                {
                                                                    refCallback: this.setNestedRef.bind(
                                                                        this
                                                                    ),
                                                                    label:
                                                                        "transfer.fee",
                                                                    disabled: !0,
                                                                    amount: P,
                                                                    onChange: this.onFeeChanged.bind(
                                                                        this
                                                                    ),
                                                                    asset:
                                                                        T.length &&
                                                                        b
                                                                            ? b.asset_id
                                                                            : 1 ===
                                                                              T.length
                                                                                ? T[0]
                                                                                : N ||
                                                                                  T[0],
                                                                    assets: T,
                                                                    tabIndex: z++,
                                                                    error:
                                                                        !1 ===
                                                                        this
                                                                            .state
                                                                            .hasPoolBalance
                                                                            ? "transfer.errors.insufficient"
                                                                            : null
                                                                }
                                                            ),
                                                            a
                                                                ? s.a.createElement(
                                                                      "button",
                                                                      {
                                                                          className: x()(
                                                                              "button float-right no-margin",
                                                                              {
                                                                                  disabled: V
                                                                              }
                                                                          ),
                                                                          type:
                                                                              "submit",
                                                                          value:
                                                                              "Submit",
                                                                          tabIndex: z++
                                                                      },
                                                                      s.a.createElement(
                                                                          u.a,
                                                                          {
                                                                              component:
                                                                                  "span",
                                                                              content:
                                                                                  "propose"
                                                                          }
                                                                      )
                                                                  )
                                                                : s.a.createElement(
                                                                      "button",
                                                                      {
                                                                          className: x()(
                                                                              "button float-right no-margin",
                                                                              {
                                                                                  disabled: V
                                                                              }
                                                                          ),
                                                                          type:
                                                                              "submit",
                                                                          value:
                                                                              "Submit",
                                                                          tabIndex: z++
                                                                      },
                                                                      s.a.createElement(
                                                                          u.a,
                                                                          {
                                                                              component:
                                                                                  "span",
                                                                              content:
                                                                                  "transfer.send"
                                                                          }
                                                                      )
                                                                  )
                                                        ),
                                                        a
                                                            ? s.a.createElement(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "full-width-content form-group transfer-input"
                                                                  },
                                                                  s.a.createElement(
                                                                      "label",
                                                                      {
                                                                          className:
                                                                              "left-label"
                                                                      },
                                                                      s.a.createElement(
                                                                          u.a,
                                                                          {
                                                                              content:
                                                                                  "account.propose_from"
                                                                          }
                                                                      )
                                                                  ),
                                                                  s.a.createElement(
                                                                      m.a,
                                                                      {
                                                                          account_names: f.a.getMyAccounts(),
                                                                          onChange: this.onProposeAccount.bind(
                                                                              this
                                                                          ),
                                                                          tabIndex: z++
                                                                      }
                                                                  )
                                                              )
                                                            : null,
                                                        y
                                                            ? s.a.createElement(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "content-block has-error"
                                                                  },
                                                                  y
                                                              )
                                                            : null,
                                                        s.a.createElement(
                                                            "div",
                                                            null,
                                                            a
                                                                ? s.a.createElement(
                                                                      "span",
                                                                      null,
                                                                      s.a.createElement(
                                                                          "button",
                                                                          {
                                                                              className:
                                                                                  " button",
                                                                              onClick: this.onPropose.bind(
                                                                                  this,
                                                                                  !1
                                                                              ),
                                                                              tabIndex: z++
                                                                          },
                                                                          s.a.createElement(
                                                                              u.a,
                                                                              {
                                                                                  component:
                                                                                      "span",
                                                                                  content:
                                                                                      "cancel"
                                                                              }
                                                                          )
                                                                      )
                                                                  )
                                                                : null
                                                        )
                                                    ),
                                                    s.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-content small-12 medium-6 large-4 large-offset-1 right-column"
                                                        },
                                                        s.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "grid-content no-padding"
                                                            },
                                                            s.a.createElement(
                                                                g.a,
                                                                {
                                                                    accountsList: U,
                                                                    limit: 25,
                                                                    compactView: !0,
                                                                    filter:
                                                                        "transfer",
                                                                    fullHeight: !0
                                                                }
                                                            )
                                                        )
                                                    ),
                                                    s.a.createElement("div", {
                                                        className:
                                                            "grid-content medium-6 large-4"
                                                    })
                                                )
                                            );
                                        }
                                    }
                                ],
                                [
                                    {
                                        key: "getInitialState",
                                        value: function() {
                                            return {
                                                from_name: "",
                                                to_name: "",
                                                from_account: null,
                                                to_account: null,
                                                amount: "",
                                                asset_id: null,
                                                asset: null,
                                                memo: "",
                                                error: null,
                                                propose: !1,
                                                propose_account: "",
                                                feeAsset: null,
                                                fee_asset_id: "1.3.0",
                                                feeAmount: new O.a({amount: 0}),
                                                feeStatus: {}
                                            };
                                        }
                                    }
                                ]
                            ),
                            a
                        );
                    })();
                    t.default = Object(w.connect)(C, {
                        listenTo: function() {
                            return [f.a];
                        },
                        getProps: function() {
                            return {
                                currentAccount: f.a.getState().currentAccount,
                                passwordAccount: f.a.getState().passwordAccount,
                                contactsList: f.a.getState().accountContacts
                            };
                        }
                    });
                }.call(this, a(29).Buffer);
        }
    }
]);
