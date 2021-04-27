;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    152(n, e, t) {
      let content = t(210)
      content.__esModule && (content = content.default),
        typeof content == "string" && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals)
      ;(0, t(60).default)('1239d49d', content, !0, { sourceMap: !1 })
    },
    167(n, e, t) {
      'use strict'
      const o = t(80)
      const r = t(81)
      const l = { components: { Header: o.default, Footer: r.default } }
      const c = (t(209), t(21))
      const component = Object(c.a)(
        l,
        function () {
          const n = this
          const e = n.$createElement
          const t = n._self._c || e
          return t(
            "div",
            [t("Header"), n._v(" "), t("Footer"), n._v(" "), t("Nuxt")],
            1
          )
        },
        [],
        !1,
        null,
        null,
        null
      )
      e.a = component.exports
      installComponents(component, {
        Header: t(80).default,
        Footer: t(81).default,
      })
    },
    168(n, e, t) {
      t(169), (n.exports = t(170))
    },
    209(n, e, t) {
      'use strict'
      t(152)
    },
    210(n, e, t) {
      const o = t(59)(function (i) {
        return i[1]
      })
      o.push([
        n.i,
        'html{\n  font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n  font-size:16px;\n  word-spacing:1px;\n  -ms-text-size-adjust:100%;\n  -webkit-text-size-adjust:100%;\n  -moz-osx-font-smoothing:grayscale;\n  -webkit-font-smoothing:antialiased;\n  box-sizing:border-box\n}\n*,:after,:before{\n  box-sizing:border-box;\n  margin:0\n}\n.button--green{\n  display:inline-block;\n  border-radius:4px;\n  border:1px solid #3b8070;\n  color:#3b8070;\n  text-decoration:none;\n  padding:10px 30px\n}\n.button--green:hover{\n  color:#fff;\n  background-color:#3b8070\n}\n.button--grey{\n  display:inline-block;\n  border-radius:4px;\n  border:1px solid #35495e;\n  color:#35495e;\n  text-decoration:none;\n  padding:10px 30px;\n  margin-left:15px\n}\n.button--grey:hover{\n  color:#fff;\n  background-color:#35495e\n}',
        '',
      ]),
        (n.exports = o)
    },
    80(n, e, t) {
      'use strict'
      t.r(e)
      const o = t(21)
      const component = Object(o.a)(
        {},
        function () {
          const n = this
          const e = n.$createElement
          n._self._c
          return n._m(0)
        },
        [
          function () {
            const n = this
            const e = n.$createElement
            const t = n._self._c || e
            return t("header", [t("div", [n._v("ヘッダー")])])
          },
        ],
        !1,
        null,
        null,
        null
      )
      e.default = component.exports
      installComponents(component, { Header: t(80).default })
    },
    81(n, e, t) {
      'use strict'
      t.r(e)
      const o = t(21)
      const component = Object(o.a)(
        {},
        function () {
          const n = this
          const e = n.$createElement
          n._self._c
          return n._m(0)
        },
        [
          function () {
            const n = this
            const e = n.$createElement
            const t = n._self._c || e
            return t("footer", [t("p", [n._v("footer")])])
          },
        ],
        !1,
        null,
        null,
        null
      )
      e.default = component.exports
      installComponents(component, { Footer: t(81).default })
    },
  },
  [[168, 4, 1, 5]],
])
