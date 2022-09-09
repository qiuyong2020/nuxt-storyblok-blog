# storyblok-blog

## 简介

🌞 使用 `Vue.js` 和 `Nuxt.js`（服务端渲染），借助 [storyblok](https://www.storyblok.com/) 快速构建一个**多语言博客网站**。

👉 完整开发指南：https://www.storyblok.com/tp/nuxt-js-multilanguage-website-tutorial#creating-an-articles-overview-page

👉 视频教程：[Youtube](https://www.youtube.com/watch?v=Dc_5BpIB4X4&t=626s) 或 [B 站](https://www.bilibili.com/video/BV1eW411g7mP)

👉 项目中使用的 [storyblok](http://app.storyblok.com/legacy-v1/#!/me/spaces/173448/edit?tab=api)

👉 项目部署到阿里云：[视频教程](https://www.bilibili.com/video/BV1aV411n7SH)

👉 该网站已上线，在线访问地址：http://39.108.59.198

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
//! 踩坑：使用yarn generate命令构建静态页面时报错 => nuxt.config.js is not in cwd
// 原因：生成应用程序时，会跳入虚拟 Linux 机器以获取dist，由于Linux系统获取路径与windows有所不同，需要标准化路径处理
// 解决：在node_modules@nuxt\cli\dist\cli-generate.js下的cwd: rootDir，把其替换为 cwd: upath.normalize(rootDir)
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
