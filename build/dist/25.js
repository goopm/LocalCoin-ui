(window.webpackJsonp = window.webpackJsonp || []).push([
    [25],
    {
        259: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                o = a(15),
                c = a(14),
                l = a(11),
                i = a(1),
                s = a.n(i),
                u = a(32),
                p = a(286),
                m = a(10),
                d = a(46),
                h = a(130),
                g = a.n(h),
                f = a(8),
                v = a(116),
                b = a(58),
                w = a(3),
                E = a.n(w),
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
            var _ = function(e) {
                    var t = e.flag,
                        a = e.width,
                        n = void 0 === a ? 50 : a,
                        o = e.height,
                        c = void 0 === o ? 50 : o;
                    return r.a.createElement("img", {
                        height: c,
                        width: n,
                        src: "/language-dropdown/" + t.toUpperCase() + ".png"
                    });
                },
                k = (function(e) {
                    function t(e) {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                        var a = (function(e, t) {
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
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        return (
                            (a.state = {
                                step: 1,
                                locales: f.a.getState().defaults.locale,
                                currentLocale: f.a
                                    .getState()
                                    .settings.get("locale")
                            }),
                            a
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
                        y(t, [
                            {
                                key: "componentDidUpdate",
                                value: function() {
                                    var e = c.a.getMyAccounts(),
                                        t = r.a.Children.count(
                                            this.props.children
                                        );
                                    this.props.router &&
                                        Array.isArray(e) &&
                                        0 !== e.length &&
                                        0 === t &&
                                        this.props.router.push(
                                            "/account/" +
                                                this.props.currentAccount
                                        );
                                }
                            },
                            {
                                key: "componentWillMount",
                                value: function() {
                                    var e = this;
                                    Object(p.a)(function(t) {
                                        e.setState({incognito: t});
                                    });
                                }
                            },
                            {
                                key: "onSelect",
                                value: function(e) {
                                    this.props.router.push(
                                        "/create-account/" + e
                                    );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = a(3),
                                        n = r.a.Children.count(
                                            this.props.children
                                        ),
                                        o = r.a.createElement(
                                            g.a,
                                            null,
                                            r.a.createElement(
                                                g.a.Button,
                                                {
                                                    title: "",
                                                    style: {width: "64px"}
                                                },
                                                r.a.createElement(
                                                    "a",
                                                    {
                                                        style: {
                                                            padding: "1rem",
                                                            border: "none"
                                                        },
                                                        className:
                                                            "button arrow-down"
                                                    },
                                                    r.a.createElement(_, {
                                                        flag: this.state
                                                            .currentLocale
                                                    })
                                                )
                                            ),
                                            r.a.createElement(
                                                g.a.Content,
                                                null,
                                                r.a.createElement(
                                                    "ul",
                                                    {
                                                        className:
                                                            "no-first-element-top-border"
                                                    },
                                                    this.state.locales.map(
                                                        function(t) {
                                                            return r.a.createElement(
                                                                "li",
                                                                {key: t},
                                                                r.a.createElement(
                                                                    "a",
                                                                    {
                                                                        onClick: function(
                                                                            a
                                                                        ) {
                                                                            a.preventDefault(),
                                                                                v.a.switchLocale(
                                                                                    t
                                                                                ),
                                                                                e.setState(
                                                                                    {
                                                                                        currentLocale: t
                                                                                    }
                                                                                );
                                                                        }
                                                                    },
                                                                    r.a.createElement(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "table-cell"
                                                                        },
                                                                        r.a.createElement(
                                                                            _,
                                                                            {
                                                                                width:
                                                                                    "20",
                                                                                height:
                                                                                    "20",
                                                                                flag: t
                                                                            }
                                                                        )
                                                                    ),
                                                                    r.a.createElement(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "table-cell",
                                                                            style: {
                                                                                paddingLeft: 10
                                                                            }
                                                                        },
                                                                        r.a.createElement(
                                                                            s.a,
                                                                            {
                                                                                content:
                                                                                    "languages." +
                                                                                    t
                                                                            }
                                                                        )
                                                                    )
                                                                )
                                                            );
                                                        }
                                                    )
                                                )
                                            )
                                        );
                                    return r.a.createElement(
                                        "div",
                                        {className: "grid-block align-center"},
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block shrink vertical"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-content shrink text-center account-creation"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    null,
                                                    r.a.createElement("img", {
                                                        src: b.logoLight,
                                                        height: "50px",
                                                        width: "50px"
                                                    })
                                                ),
                                                0 == n
                                                    ? null
                                                    : r.a.createElement(
                                                          "div",
                                                          null,
                                                          r.a.createElement(
                                                              s.a,
                                                              {
                                                                  content:
                                                                      "header.create_account",
                                                                  component:
                                                                      "h4"
                                                              }
                                                          )
                                                      ),
                                                1 == n
                                                    ? null
                                                    : r.a.createElement(
                                                          "div",
                                                          null,
                                                          r.a.createElement(
                                                              s.a,
                                                              {
                                                                  content:
                                                                      "account.intro_text_title",
                                                                  component:
                                                                      "h4"
                                                              }
                                                          ),
                                                          r.a.createElement(
                                                              s.a,
                                                              {
                                                                  unsafe: !0,
                                                                  content:
                                                                      "account.intro_text_1",
                                                                  component: "p"
                                                              }
                                                          ),
                                                          r.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "shrink text-center"
                                                              },
                                                              r.a.createElement(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "grp-menu-item overflow-visible account-drop-down"
                                                                  },
                                                                  r.a.createElement(
                                                                      "div",
                                                                      {
                                                                          className:
                                                                              "grp-menu-item overflow-visible",
                                                                          style: {
                                                                              margin:
                                                                                  "0 auto"
                                                                          },
                                                                          "data-intro": t.translate(
                                                                              "walkthrough.language_flag"
                                                                          )
                                                                      },
                                                                      o
                                                                  )
                                                              )
                                                          )
                                                      ),
                                                n
                                                    ? null
                                                    : r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "grid-block account-login-options"
                                                          },
                                                          r.a.createElement(
                                                              l.b,
                                                              {
                                                                  id:
                                                                      "account_login_button",
                                                                  to:
                                                                      "/create-account/password",
                                                                  className:
                                                                      "button primary",
                                                                  "data-intro": t.translate(
                                                                      "walkthrough.create_cloud_wallet"
                                                                  )
                                                              },
                                                              E.a.translate(
                                                                  "header.create_account"
                                                              )
                                                          ),
                                                          r.a.createElement(
                                                              "span",
                                                              {
                                                                  id:
                                                                      "account_login_button2",
                                                                  className:
                                                                      "button primary outline",
                                                                  style: {
                                                                      color:
                                                                          "#00195b"
                                                                  },
                                                                  onClick: function() {
                                                                      m.a.changeSetting(
                                                                          {
                                                                              setting:
                                                                                  "passwordLogin",
                                                                              value: !0
                                                                          }
                                                                      ),
                                                                          d.a.unlock.defer();
                                                                  }
                                                              },
                                                              E.a.translate(
                                                                  "header.unlock_short"
                                                              )
                                                          )
                                                      ),
                                                n
                                                    ? null
                                                    : r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "additional-account-options"
                                                          },
                                                          r.a.createElement(
                                                              "h5",
                                                              {
                                                                  style: {
                                                                      textAlign:
                                                                          "center"
                                                                  }
                                                              },
                                                              r.a.createElement(
                                                                  u.a,
                                                                  {
                                                                      string:
                                                                          "account.optional.formatter",
                                                                      keys: [
                                                                          {
                                                                              type:
                                                                                  "link",
                                                                              value:
                                                                                  "/wallet/backup/restore",
                                                                              translation:
                                                                                  "account.optional.restore_link",
                                                                              dataIntro: t.translate(
                                                                                  "walkthrough.restore_account"
                                                                              ),
                                                                              arg:
                                                                                  "restore_link"
                                                                          },
                                                                          {
                                                                              type:
                                                                                  "link",
                                                                              value:
                                                                                  "/create-account/wallet",
                                                                              translation:
                                                                                  "account.optional.restore_form",
                                                                              dataIntro: t.translate(
                                                                                  "walkthrough.create_local_wallet"
                                                                              ),
                                                                              arg:
                                                                                  "restore_form"
                                                                          }
                                                                      ]
                                                                  }
                                                              )
                                                          )
                                                      ),
                                                this.props.children
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            t.default = Object(o.connect)(k, {
                listenTo: function() {
                    return [c.a];
                },
                getProps: function() {
                    return {
                        currentAccount:
                            c.a.getState().currentAccount ||
                            c.a.getState().passwordAccount
                    };
                }
            });
        }
    }
]);
