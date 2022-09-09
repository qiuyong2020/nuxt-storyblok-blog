const axios = require('axios')

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'storyblok-blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'An awesome blog for FrontEnd magics, built with Nuxt.js and Storyblok' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      //? 默认样式重置
      // { rel: 'stylesheet', href: 'https://cdn.bootcdn.net/ajax/libs/reseter.css/2.0.0/minireseter.min.css' },
      //? Google Fonts - lato字体
      { rel: 'stylesheet', href: 'https://fonts.googlefonts.cn/css?family=Lato:400,700' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "storyblok-nuxt",
      {
        // accessToken: "DxMEDt3IXXhgPqGLQNQbngtt",  //开发环境下，storublok的draft版本：preview-token
        // accessToken: "1PIqoao2M2A6A1YYInrZggtt",  //生产环境下，storublok的published版本：public-token
        //? 检测开发/生产两种环境，访问storyblok的不同版本的api，需使用不同的token
        accessToken: 
          process.env.NODE_ENV == "production" 
            ? "1PIqoao2M2A6A1YYInrZggtt" 
            : "DxMEDt3IXXhgPqGLQNQbngtt",
        cacheProvider: 'memory'
      } //storyblok账户：http://app.storyblok.com/legacy-v1/#!/me/spaces/173448/edit?tab=api
    ]
  ],

  //! 踩坑：使用yarn generate命令构建静态页面时报错 => nuxt.config.js is not in cwd
  // 原因：生成应用程序时，会跳入虚拟 Linux 机器以获取dist，由于Linux系统获取路径与windows有所不同，需要标准化路径处理
  // 解决：在node_modules@nuxt\cli\dist\cli-generate.js下的cwd: rootDir，把其替换为 cwd: upath.normalize(rootDir)

  // 使用yarn generate命令构建静态页面时，指定dist目录下生成文件的路径
  generate: {
    routes: function() {
      return axios.get(
        "https://api.storyblok.com/v1/cdn/stories?version=published&token=1PIqoao2M2A6A1YYInrZggtt&starts_with=blog&cv=" + Math.floor(Date.now() / 1e3)
      ).then(res => {
        // console.log(res);
        const blogPosts = res.data.stories.map(item => item.full_slug);  //每篇博客对应的子路径

        return [
          '/',
          '/blog',
          'about',
          ...blogPosts
        ]
      })
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
