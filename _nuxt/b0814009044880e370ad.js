(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{475:function(t,e,n){var content=n(479);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("d42001d0",content,!0,{sourceMap:!1})},476:function(t,e,n){var content=n(481);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("1f793060",content,!0,{sourceMap:!1})},477:function(t,e,n){var content=n(483);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("64f7c5d0",content,!0,{sourceMap:!1})},478:function(t,e,n){"use strict";var o=n(475);n.n(o).a},479:function(t,e,n){(t.exports=n(49)(!1)).push([t.i,".section-posts__content[data-v-f363261c]{text-align:left;padding-left:2.5em}.section-posts__number[data-v-f363261c]{display:block;font-size:200%;font-weight:700;margin-bottom:1em}.section-posts__title[data-v-f363261c]{font-size:120%}.section-posts__figure[data-v-f363261c]{padding-left:0;padding-right:0;box-shadow:0 0 5px #ccc}.section-posts__description[data-v-f363261c]{font-size:80%}.section-posts__meta[data-v-f363261c]{font-size:70%}.section-posts__category[data-v-f363261c],.section-posts__tag[data-v-f363261c]{background-color:#aaa;color:#fff;display:inline-block;padding:.2em 1em;margin-right:.5em;margin-bottom:.5em}.section-posts__category[data-v-f363261c]:last-child,.section-posts__tag[data-v-f363261c]:last-child{margin-right:0}.section-posts__tag[data-v-f363261c]{background-color:#d0d0d0}",""])},480:function(t,e,n){"use strict";var o=n(476);n.n(o).a},481:function(t,e,n){(t.exports=n(49)(!1)).push([t.i,".nav__wrap[data-v-0cb35081]{width:86%;height:100%;z-index:9999;position:fixed;top:0;right:-100%;opacity:0;background-color:#f0f0f0;padding:1em;box-shadow:0 0 10px hsla(0,0%,66.7%,.3)}.nav__wrap_on[data-v-0cb35081]{right:0;opacity:1}.nav__inner[data-v-0cb35081]{height:100%}.nav__icon[data-v-0cb35081]{position:fixed;z-index:10000;left:6%;top:50%;padding-top:5px;padding-bottom:5px;cursor:pointer}.nav__icon_line[data-v-0cb35081]{width:25px;height:2px;background-color:#aaa;display:block}.nav__icon_line[data-v-0cb35081]:first-child{margin-bottom:7px}.nav__icon_off:hover .nav__icon_line[data-v-0cb35081]:first-child{-webkit-transform:rotate(20deg);transform:rotate(20deg)}.nav__icon_off:hover .nav__icon_line[data-v-0cb35081]:last-child{-webkit-transform:rotate(-20deg);transform:rotate(-20deg)}.nav__icon_on .nav__icon_line[data-v-0cb35081]:first-child{margin-bottom:0}.nav__icon_on:hover .nav__icon_line[data-v-0cb35081]:first-child{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.nav__icon_on:hover .nav__icon_line[data-v-0cb35081]:last-child{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.header-nav[data-v-0cb35081]{width:100%}.header-nav__title[data-v-0cb35081]{font-size:200%;font-weight:700}.header-nav li[data-v-0cb35081]{background-color:#aaa;color:#fff;display:inline-block;padding:.2em 1em;margin-right:.5em;margin-bottom:.5em;font-size:70%}.header-nav li[data-v-0cb35081]:last-child{margin-right:0}.header-nav__categories li[data-v-0cb35081],.header-nav__tags li[data-v-0cb35081]{cursor:pointer}",""])},482:function(t,e,n){"use strict";var o=n(477);n.n(o).a},483:function(t,e,n){(t.exports=n(49)(!1)).push([t.i,".container[data-v-a391f10c]{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.container .title[data-v-a391f10c]{background:#000;color:#000}.title[data-v-a391f10c]{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle[data-v-a391f10c]{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links[data-v-a391f10c]{padding-top:15px}",""])},484:function(t,e,n){"use strict";n.r(e);var o=n(218),r=(n(36),n(9),n(64),n(6),{props:{number:{type:Number,default:0},title:{type:String,require:!0,default:""},description:{type:[String,Array],default:""},categories:{type:[String,Object,Array],default:function(){return{count:0}}},tags:{type:[Object,Array],default:function(){return{count:0}}},figure:{type:String,default:""},filteredCategory:{type:String,default:""},filteredTag:{type:String,default:""}},computed:{tagFilter:function(){var t=this;return this.$props.tags.filter(function(e){return e.fields.title===t.$props.filteredTag})}}}),c=(n(478),n(46)),l=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return""!=t.filteredCategory&&t.filteredCategory!=t.categories||""!=t.filteredTag&&!t.tagFilter.length?t._e():n("section",{staticClass:"section-posts container"},[n("div",{staticClass:"section-posts__inner row align-items-center"},[t.figure?n("figure",{staticClass:"section-posts__figure col-md-9 col-12"},[n("img",{attrs:{src:t.figure,alt:t.title}})]):t._e(),t._v(" "),n("div",{staticClass:"section-posts__content col-md-3 col-12"},[t.number?n("span",{staticClass:"section-posts__number",domProps:{textContent:t._s(t.number<10?"0"+t.number:t.number)}}):t._e(),t._v(" "),n("h3",{staticClass:"section-posts__title",domProps:{textContent:t._s(t.title)}},[t._v("\n        Title\n      ")]),t._v(" "),t.description?n("div",{staticClass:"section-posts__description",domProps:{innerHTML:t._s(t.description)}}):t._e(),t._v(" "),n("div",{staticClass:"section-posts__meta"},[t.categories&&t.categories.length?n("div",{staticClass:"section-posts__categories"},[n("span",{staticClass:"section-posts__category",domProps:{textContent:t._s(t.categories)}})]):t._e(),t._v(" "),t.tags&&t.tags.length?n("div",{staticClass:"section-posts__tags"},t._l(t.tags,function(e,o){return n("span",{key:o,staticClass:"section-posts__tag",domProps:{textContent:t._s(e.fields.title)}})}),0):t._e()])])])])},[],!1,null,"f363261c",null).exports,d={props:{categories:{type:[String,Object,Array],default:function(){return{count:0}}},tags:{type:[Object,Array],default:function(){return{count:0}}}},data:function(){return{nav:!1}},methods:{navFunc:function(){!1===this.nav?this.nav=!0:this.nav=!1},postCategory:function(t){this.$parent.category=t,this.nav=!1},postTag:function(t){this.$parent.tag=t,this.nav=!1}}},_=(n(480),Object(c.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav"},[n("div",{staticClass:"nav__icon",class:t.nav?"nav__icon_on":"nav__icon_off",on:{click:function(e){return t.navFunc()}}},[n("span",{staticClass:"nav__icon_line"}),t._v(" "),n("span",{staticClass:"nav__icon_line"})]),t._v(" "),n("div",{staticClass:"nav__wrap",class:{nav__wrap_on:t.nav}},[n("div",{staticClass:"nav__inner"},[n("nav",{staticClass:"header-nav"},[n("span",{staticClass:"header-nav__title"},[t._v("Categories")]),t._v(" "),n("ul",{staticClass:"header-nav__categories"},[n("li",{on:{click:function(e){return t.postCategory("")}}},[t._v("\n            ALL\n          ")]),t._v(" "),t._l(t.categories,function(e,o){return n("li",{key:o,domProps:{textContent:t._s(e.fields.title)},on:{click:function(n){return t.postCategory(e.fields.title)}}})})],2)]),t._v(" "),n("nav",{staticClass:"header-nav"},[n("span",{staticClass:"header-nav__title"},[t._v("Tags")]),t._v(" "),n("ul",{staticClass:"header-nav__tags"},[n("li",{on:{click:function(e){return t.postTag("")}}},[t._v("\n            ALL\n          ")]),t._v(" "),t._l(t.tags,function(e,o){return n("li",{key:o,domProps:{textContent:t._s(e.fields.title)},on:{click:function(n){return t.postTag(e.fields.title)}}})})],2)])])])])},[],!1,null,"0cb35081",null).exports),f=n(134),v=Object(f.createClient)(),h={components:{Posts:l,Nav:_},data:function(){return{category:"",tag:""}},asyncData:function(t){t.env;return Promise.all([v.getEntries({content_type:"data",order:"-sys.createdAt"}),v.getEntries({content_type:"category",order:"-sys.createdAt"}),v.getEntries({content_type:"tag",order:"-sys.createdAt"})]).then(function(t){var e=Object(o.a)(t,3),n=e[0],r=e[1],c=e[2];return{posts:n.items,categories:r.items,tags:c.items}}).catch(console.error)}},m=(n(482),Object(c.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("Nav",{attrs:{categories:t.categories,tags:t.tags}}),t._v(" "),n("article",t._l(t.posts,function(e,o){return n("Posts",{key:o,attrs:{title:e.fields.title,figure:e.fields.figure.fields.file.url,categories:e.fields.categories.fields.title,tags:e.fields.tags,description:t.$md.render(e.fields.body),number:o+1,filteredCategory:t.category,filteredTag:t.tag}})}),1)],1)},[],!1,null,"a391f10c",null));e.default=m.exports}}]);