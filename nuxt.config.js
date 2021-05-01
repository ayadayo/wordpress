import axios from 'axios'
export default {
  mode: 'universal',
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'app',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    routes () {
      return axios.get('http://mudanajikan.net/wp-json/wp/v2/posts')
        .then((res) => {
          // map()メソッドでパーマリンクの情報をrouteに渡します。
          return res.data.map((post) => {
            // パーマリンクの文字列をディレクトリ生成用に加工します。
            let postLInk = post.link;
            const _link = postLInk.replace( /http:\/\/mudanajikan.net/g , "" );
            postLInk = _link;
            console.log(post)
            return {
              route: `posts/${post.id}`,  // ここに入る文字列がパス情報になる。
              payload: post,    // テンプレートで値を受け取れるようデータをpayloadへ。
            }
          })
        })
    }
  },
}
