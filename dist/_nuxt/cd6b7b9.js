;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    228(n, t, e) {
      let content = e(231)
      content.__esModule && (content = content.default),
        typeof content == "string" && (content = [[n.i, content, ""]]),
        content.locals && (n.exports = content.locals)
      ;(0, e(60).default)('bad8e090', content, !0, { sourceMap: !1 })
    },
    230(n, t, e) {
      'use strict'
      e(228)
    },
    231(n, t, e) {
      const o = e(59)(function (i) {
        return i[1]
      })
      o.push([
        n.i,
        '.container{\n  margin:0 auto;\n  min-height:100vh;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  text-align:center\n}\n.title{\n  font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n  display:block;\n  font-weight:300;\n  font-size:100px;\n  color:#35495e;\n  letter-spacing:1px\n}\n.subtitle{\n  font-weight:300;\n  font-size:42px;\n  color:#526488;\n  word-spacing:5px;\n  padding-bottom:15px\n}\n.links{\n  padding-top:15px\n}',
        '',
      ]),
        (n.exports = o)
    },
    234(n, t, e) {
      'use strict'
      e.r(t)
      const o = e(6)
      const r =
        (e(48),
        {
          data() {
            return { info: null }
          },
          asyncData(n) {
            return Object(o.a)(
              regeneratorRuntime.mark(function t() {
                let e, o
                return regeneratorRuntime.wrap(function (t) {
                  for (;;) {
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (e = n.$axios),
                          'http://mudanajikan.net/wp-json/wp/v2/posts',
                          (t.next = 4),
                          e.$get('http://mudanajikan.net/wp-json/wp/v2/posts')
                        )
                      case 4:
                        return (o = t.sent), t.abrupt('return', { posts: o })
                      case 6:
                      case 'end':
                        return t.stop()
                    }
                  }
                }, t)
              })
            )()
          },
        })
      const c = (e(230), e(21))
      const component = Object(c.a)(
        r,
        function () {
          const n = this
          const t = n.$createElement
          const e = n._self._c || t
          return e("div", { staticClass: "container" }, [
            e(
              "ul",
              n._l(n.posts, function (t, o) {
                return e("li", { key: o }, [
                  n._v("\n      " + n._s(t.title) + "\n    "),
                ])
              }),
              0
            ),
          ])
        },
        [],
        !1,
        null,
        null,
        null
      )
      t.default = component.exports
    },
  },
])
