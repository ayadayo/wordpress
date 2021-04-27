<template>
  <div class="container pt-4 pb-10 grid gap-x-5 max-w-screen-lg">
    <ul class="flex">
      <li
        v-for="data in wpData"
        :key="data.id"
        class="text-left p-2 m-2 flex-1 shadow-md"
      >
        <a href="">
          <h1>{{ data.title.rendered }}</h1>
          <time datetime="" class="text-sm text-gray-500">
            {{ dateMethods(data.date) }}
          </time>
          <div v-html="data.content.rendered"></div>
        </a>
      </li>
    </ul>
    <Sidebar />
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data: () => {
    return {
      wpData: null,
    }
  },
  computed: {
    dateMethods() {
      return function (number) {
        const regex = /-/g
        return number.slice(0, 10).replace(regex, '.')
      }
    },
  },
  mounted() {
    axios
      .get('http://mudanajikan.net/wp-json/wp/v2/posts/')
      .then((response) => {
        this.wpData = response.data
        console.log(response.data)
      })
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
  grid-template-columns: 1fr 300px;
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
