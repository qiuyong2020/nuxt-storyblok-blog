(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{297:function(t,e,r){var content=r(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(80).default)("36457f6f",content,!0,{sourceMap:!1})},298:function(t,e,r){"use strict";r(297)},299:function(t,e,r){var n=r(79)(!1);n.push([t.i,"a[data-v-74814add]{text-decoration:none;color:#333}.post-preview[data-v-74814add]{border-radius:3px;box-shadow:1px 1px 5px 1px rgba(0,0,0,.5);width:80%;margin:1rem;height:20rem}.post-preview-thumbnail[data-v-74814add]{background-position:50%;background-size:cover;width:100%;height:12rem}.post-preview-content[data-v-74814add]{text-align:center;padding:1rem}@media (min-width:35rem){.post-preview[data-v-74814add]{width:25rem}}",""]),t.exports=n},300:function(t,e,r){"use strict";r.r(e);var n={props:{id:{type:String,required:!0},title:{type:String,required:!0},excerpt:{type:String,required:!0},thumbnailImage:{type:String,required:!0}}},o=(r(298),r(27)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("nuxt-link",{staticClass:"post-preview",attrs:{to:"/blog/"+t.id}},[e("article",[e("div",{staticClass:"post-preview-thumbnail",style:{backgroundImage:"url("+t.thumbnailImage+")"}}),t._v(" "),e("div",{staticClass:"post-preview-content"},[e("h1",[t._v(t._s(t.title))]),t._v(" "),e("p",[t._v(t._s(t.excerpt))])])])])}),[],!1,null,"74814add",null);e.default=component.exports},302:function(t,e,r){var content=r(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(80).default)("1c81d9d2",content,!0,{sourceMap:!1})},307:function(t,e,r){"use strict";r(302)},308:function(t,e,r){var n=r(79)(!1);n.push([t.i,"#posts{padding-top:2rem;display:flex;justify-content:center;align-items:center;flex-direction:column}@media (min-width:35rem){#posts{flex-direction:row}}",""]),t.exports=n},314:function(t,e,r){"use strict";r.r(e);r(46);var n={components:{PostPreview:r(300).default},asyncData:function(t){return t.app.$storyapi.get("cdn/stories/",{version:t.isDev?"draft":"published",starts_with:"blog/"}).then((function(t){return{posts:t.data.stories.map((function(t){return{id:t.slug,title:t.content.title,previewText:t.content.summary,thumbnailURL:t.content.thumbnail}}))}}))}},o=(r(307),r(27)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"posts"}},t._l(t.posts,(function(t){return e("PostPreview",{key:t.id,attrs:{id:t.id,title:t.title,excerpt:t.previewText,thumbnailImage:t.thumbnailURL}})})),1)}),[],!1,null,null,null);e.default=component.exports}}]);