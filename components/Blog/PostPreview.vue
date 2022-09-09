<template>
  <nuxt-link 
      :to="'/blog/' + id"
      class="post-preview">
    <article>
      <div 
        :style="{backgroundImage: 'url(' + thumbnailImage + ')'}"
        class="post-preview-thumbnail"></div>
      <div class="post-preview-content">
        <h1>{{title}}</h1>
        <p>{{excerpt}}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: true
    },
    thumbnailImage: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #333;
  }
  .post-preview {
    border-radius: 3px;
    box-shadow: 1px 1px 5px 1px rgba(0,0,0,.5);
    width: 80%;  
    margin: 1rem;
    height: 20rem;
  }
  .post-preview-thumbnail {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 12rem;
  }
  .post-preview-content {
    text-align: center;
    padding: 1rem;
  }
  /* 移动端窗口适配 */
  @media (min-width: 35rem) {
    .post-preview {
      width: 25rem;
      
    }
  }
</style>