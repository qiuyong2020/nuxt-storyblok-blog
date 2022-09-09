<template>
  <section id="posts">
    <PostPreview
      v-for="post in posts" 
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :excerpt="post.previewText"
      :thumbnailImage="post.thumbnailURL"
    />
  </section>
</template>

<script>
import PostPreview from '@/components/Blog/PostPreview';

export default {
  components: {
    PostPreview
  },
  asyncData(context) {
    // console.log(context);
    // 访问storyblok的api，拉取博客总览网页
    return context.app.$storyapi.get('cdn/stories/', {
      // version: 'draft',
      version: context.isDev ? 'draft' : 'published', //开发环境下，访问storyblok的draft版本的api
      starts_with: 'blog/'
    }).then(res => {
      // console.log(res.data.stories);
      return {
        posts: res.data.stories.map(item => {
          return {
            id: item.slug,
            title: item.content.title,
            previewText: item.content.summary,
            thumbnailURL: item.content.thumbnail
          }
        })
      }
    })
  },
  // data() {
  //   return {
  //     posts: [
  //       {
  //         id: 'scope',
  //         title: '闭包与作用域',
  //         previewText: 'JavaScript interview question',
  //         thumbnailURL: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-4406b098b2858045fd7c7864f5f8f4d5_1440w.jpg%3Fsource%3D172ae18b&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665059431&t=5591f99d4a701acf521d2550b6e49feb',
  //       },
  //       {
  //         id: 'tag',
  //         title: 'HTML5新特性',
  //         previewText: 'HTML5 interview question',
  //         thumbnailURL: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.niaorenit.com%2Fuploadfile%2F2018%2F0427%2F20180427113925948.png&refer=http%3A%2F%2Fwww.niaorenit.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665059292&t=2442d7d04a48cbdd241a7d8388077a5c',
  //       }
  //     ]
  //   }
  // }
}
</script>

<style>
  #posts {
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media (min-width: 35rem) {
    #posts {
      flex-direction: row;
    }
  }
</style>