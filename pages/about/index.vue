<template>
  <section id="about-page" ref="about">
    <h1>{{title}}</h1>
    <p>{{content}}</p>
  </section>
</template>

<script>
export default {
  asyncData(context) {
    // console.log(context);
    return context.app.$storyapi.get('cdn/stories/about', {
      // version: 'draft',
      version: context.isDev ? 'draft' : 'published', //开发环境下，访问storyblok的draft版本的api
    }).then(res => {
      // console.log(res);
      return {
        title: res.data.story.content.title,
        content: res.data.story.content.content
      }
    })
  },
  mounted() {
    this.$refs.about.onchange = () => {
      console.log("刷新About页")
      location.reload();
    }
  }
}
</script>

<style scoped>
  #about-page {
    width: 80%;
    max-width: 500px;
    margin: auto;
  }
  #about-page p {
    padding: 1rem 0;
    white-space: pre-line;
  }
</style>