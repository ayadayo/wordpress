<template>
  <div>
    <p>{{ title }}</p>
    <!-- <div v-for="data in wpdata" :key="data.id">
      <h1>{{ data.title }}</h1>
    </div> -->
  </div>
</template>
<script>
// const axios = require('axios')
export default {
  data: () => {
    return {
      postID: '',
      wpData: null,
      title: '',
      dir: '',
    }
  },
  // mounted() {
  //   this.postID = this.$route.query.id
  //   $axios
  //     .get(`http://mudanajikan.net/wp-json/wp/v2/posts?include=${this.postID}`)
  //     .then((res) => {
  //       this.wpData = res
  //     })
  // },
  async asyncData({ $axios, store, params, error, payload }) {
    // payloadからデータを受け取ったらそこから値を変数へ入れます。
    if (payload) {
      console.log(payload)
      return {
        // ここでどんな値にアクセスするかはREST APIで返ってくるjson構造を参照
        title: payload.title.rendered,
        dir: payload.link,
      }
    } else {
      console.log('tes')
      const response = await $axios.$get(
        `http://mudanajikan.net/wp-json/wp/v2/posts`
      )
      return response
    }
  },
  // async asyncData({ $axios }) {
  //   // const id = location.search
  //   const response = await $axios.$get(
  //     `http://mudanajikan.net/wp-json/wp/v2/posts?include=5`
  //   )
  //   console.log(response)
  //   return {
  //     wpdata: response,
  //   }
  // },
  // asyncData({ route, query }) {
  //   return {
  //     postID: route.query.id,
  //   }
  // },
  // async asyncData({ $axios }) {
  //   // 取得先のURL
  //   const url = 'http://mudanajikan.net/wp-json/wp/v2/posts'
  //   // リクエスト（Get）
  //   const response = await $axios.$get(`${url}?include=${this.postID}`)
  //   console.log(response)
  //   // 配列で返ってくるのでJSONにして返却
  //   return {
  //     wpData: response,
  //   }
  // },
  // computed: {
  //   url() {
  //     return function (id) {
  //       const url = 'http://mudanajikan.net/wp-json/wp/v2/posts'
  //       const res = `${url}?include=${this.postID}`
  //     }
  //   },
  // },
}
</script>
