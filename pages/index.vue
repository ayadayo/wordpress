<template>
  <div class="container">
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      info: null,
    }
  },
  async asyncData({ $axios }) {
    // 取得先のURL
    const url = 'http://mudanajikan.net/wp-json/wp/v2/posts'
    // リクエスト（Get）
    const response = await $axios.$get(url)
    // 配列で返ってくるのでJSONにして返却
    return {
      posts: response,
    }
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
