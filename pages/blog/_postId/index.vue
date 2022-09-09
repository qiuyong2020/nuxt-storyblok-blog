<template>
  <div id="post" ref="blok">
    <div class="post-thumbnail" :style="{backgroundImage: 'url('+ image +')'}"></div>
    <div class="post-content">
      <h1>{{title}}</h1>
      <p>{{content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    // console.log(context);
    // 访问storyblok的api，拉取博客文章
    return context.app.$storyapi.get('cdn/stories/blog/' + context.params.postId, {
      // version: 'draft'
      version: process.env.NODE_ENV == 'production' ? 'published' : 'draft' //生产环境下，storyblok使用发布版本
    }).then(res => {
      // console.log(res);
      return {
        // blok: res.data.story.content,
        image: res.data.story.content.thumbnail,
        title: res.data.story.content.title,
        content: res.data.story.content.content,
      }
    })
  },
  mounted() {
    // console.log(location);
    // console.log(this.$refs);
    this.$refs.blok.onchange = () => {
      location.reload(true);
    }
  }
}
</script>

<style scoped>
  .post-thumbnail {
    width: 100%;
    height: 500px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .post-content {
    width: 80%;
    max-width: 500px;
    margin: 1rem auto;
  }
  .post-content p {
    padding: 1rem 0;
    white-space: pre-line;
  }
</style>