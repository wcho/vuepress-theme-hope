if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-1a661b4a"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"c3564c6785c5a2a771a8900f4357441c"},{url:"api/index.html",revision:"63b4350f73ed576e7b0056c16f0ead5a"},{url:"api/page.html",revision:"d370a673c6d2f0d9030b8cfb5df04084"},{url:"api/plugin/container.html",revision:"eb75e8b333633652cceb2321922493d3"},{url:"api/plugin/copyright.html",revision:"16619c46b97f5a21b4af6604e1069435"},{url:"api/plugin/index.html",revision:"98e95792a7a2ec08a1c905861ca89fc8"},{url:"api/plugin/md-enhance.html",revision:"9be6bcc2280d1a411efaa61e473f2443"},{url:"api/plugin/medium-zoom.html",revision:"0e78aedd2445e867b90a1fe15b0ebfb4"},{url:"api/plugin/pwa.html",revision:"f82f0d5420506a166f0180ef85a9c726"},{url:"api/stylus.html",revision:"f5d2864fff00df62b1f8c615c8bfa87c"},{url:"api/themeConfig.html",revision:"b0c4e38da0043ef686c57b17df03c26d"},{url:"article/index.html",revision:"02634bb1943c41dbd3cb248880c80f2f"},{url:"assets/css/0.styles.e148176f.css",revision:"04e7b6e72c70c2839a6cb2801eace534"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.4884e842.png",revision:"4884e842d997d40ecd3d347d69801497"},{url:"assets/img/darkmode.cd6c7360.png",revision:"cd6c73602cbe64a85e784daa3caf6b58"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/106.ef91515b.js",revision:"786e08dfb0be28d4cf24ef77c9fb6052"},{url:"assets/js/app.28c938d6.js",revision:"e8e7a2f250e8e4ba362da57725cdb928"},{url:"assets/js/layout-BlogEntry.0f02dbae.js",revision:"178142ddc946bcfe9c3190c4b675c7f6"},{url:"assets/js/layout-Common.a1d6111e.js",revision:"bab74fd91afbb3a95fe9c2077295d140"},{url:"assets/js/layout-Layout.6af29809.js",revision:"89bce467582da11885d04d263c15c2fc"},{url:"assets/js/layout-NotFound.9eece5c9.js",revision:"3f837d93aaea5322f61e2ccfe048df8c"},{url:"assets/js/layout-Timeline.f9740a0c.js",revision:"160336925d352e4de7b53dcc081f1855"},{url:"assets/js/page--0ab466d2.ca58bf7f.js",revision:"cec1a659a0edcb1122b9155415e4d838"},{url:"assets/js/page--1f262314.6adebd9b.js",revision:"09f59b2652fe33e85a49fae25e130e51"},{url:"assets/js/page--5dafe67a.064f397f.js",revision:"9974a343f74e6ab024ad311e4b6b47b2"},{url:"assets/js/page--86453650.e52ae519.js",revision:"fa91b30619b58974826988b4094820a4"},{url:"assets/js/page--9108a39c.2999db1d.js",revision:"da403e3c942e62be81a60607b616d115"},{url:"assets/js/page--d7fc60dc.2738b2e8.js",revision:"75c414d5e021e44d1bcf7d2217f81a23"},{url:"assets/js/page-About Vuepress.50a2e95f.js",revision:"6e777e216b10a8e4a52ade29958738ba"},{url:"assets/js/page-API Docs.c2144394.js",revision:"4725952a9bbdfa285a505d8e41de27f3"},{url:"assets/js/page-API 文档.8be96b43.js",revision:"8896519b3af0fe09045464dfccfe4b04"},{url:"assets/js/page-Basic.82e0b2a1.js",revision:"f97542d454337eb705130662b4109197"},{url:"assets/js/page-Blog related.a7160f68.js",revision:"4dbc285e483dfb3f7e3621ae0ca71a82"},{url:"assets/js/page-Breadcrumb.4e77cb63.js",revision:"5eae3319500e393de34c6ad9d6733929"},{url:"assets/js/page-Comment Function.72c1425a.js",revision:"31a6c0bdc24265255c7f9635b4de515d"},{url:"assets/js/page-Common problems.3e387fb3.js",revision:"48802f7e7c131f655461692c14cadd6a"},{url:"assets/js/page-Custom alignment.4a838d79.js",revision:"ed9f01b06a30961b874eb5abdedd9434"},{url:"assets/js/page-Darkmode.4e86e16c.js",revision:"119e832b1e5cca08b1b7fd1f296d3a2b"},{url:"assets/js/page-Default Theme Config.132bca73.js",revision:"e19dd3b1e275a10f4457bc8acb70f3c6"},{url:"assets/js/page-Demos.53947b7e.js",revision:"6e694e1671bda0f2b7d7c4040521d95c"},{url:"assets/js/page-Emoji List.8505a6d6.js",revision:"848e3eb2b222042a0785e95a9b98db95"},{url:"assets/js/page-Emoji 列表.4d6d5625.js",revision:"9678c31bedd581aceb5a72d7424646c4"},{url:"assets/js/page-Encryption function.e67521ed.js",revision:"a0b559cce04dd5b2a9d4dabee6a04eb4"},{url:"assets/js/page-File Structure.179d4f57.js",revision:"ab8e693577e2226af4219d46b38ba819"},{url:"assets/js/page-Flowchart.7cd266fd.js",revision:"9a4aecf66836aea2a0df6aca243c31d4"},{url:"assets/js/page-Footnote.90feac5f.js",revision:"b869769b65f196de8d2c6bb818d457bd"},{url:"assets/js/page-Fullscreen Button.2cf294c5.js",revision:"b2e6b83082997a4a9e7c8b4903b4c4df"},{url:"assets/js/page-Home Page.b7ea4c5f.js",revision:"e8cc49f00658b5da4ce250fa51a105ff"},{url:"assets/js/page-Home.ee9baff8.js",revision:"95e3ea84f5f375880c874852d97c723d"},{url:"assets/js/page-Icon support.4d7abf8e.js",revision:"c6f5f5e43d8dc540a83b0cfdbae33ab0"},{url:"assets/js/page-Introduction.24f2c94c.js",revision:"23b05591c96fd764f1d18a3318b7a6f2"},{url:"assets/js/page-Layout.60e7c530.js",revision:"3ae538981935df647a93edd73a638712"},{url:"assets/js/page-Markdown DEMO.8580d62c.js",revision:"282b11435a70527917fea57e2555705b"},{url:"assets/js/page-Markdown Introduction.931a7f86.js",revision:"0eaf2d14dfedbf96a21f7c26ab5e5789"},{url:"assets/js/page-Markdown 介绍.69f1bbed.js",revision:"aa75c00cb11573e6695f7f131ad5862d"},{url:"assets/js/page-Markdown 新语法.e8c7b0b4.js",revision:"a5f9b1977929ded408c54e89a7a97ac3"},{url:"assets/js/page-Markdown示例.26d72a76.js",revision:"56fb2b9a3a09b131bbd81b9597b66851"},{url:"assets/js/page-NavBar.1478139f.js",revision:"10358c7b654c8c7592fb3ed2e94c4971"},{url:"assets/js/page-New Component.fa89073d.js",revision:"36baaf5d49b1a03326b1451377da3f0c"},{url:"assets/js/page-New feature.50c0877d.js",revision:"12fbdde868297e5de0e5407676211c90"},{url:"assets/js/page-New syntax in Markdown.dee5b71e.js",revision:"67b250c396bc8f4c93a698e5a65b85ae"},{url:"assets/js/page-Page Configuration.46128198.js",revision:"bace3e34a5e828a709af37f4ba47aa88"},{url:"assets/js/page-Page.de737839.js",revision:"80b300b80fef7ea902960260929451f8"},{url:"assets/js/page-Plugin Description.29a00cfe.js",revision:"459c5628810212fd234f82e7fb09e98c"},{url:"assets/js/page-Plugins.97a8a632.js",revision:"e6f81b1933971602b91b573be7d3896c"},{url:"assets/js/page-Sidebar.80446caa.js",revision:"24a53ed2d9fe7e39458c9b01f0de429c"},{url:"assets/js/page-stylus configuration.414f0a5b.js",revision:"d2b0522fbf3c9021b67e3752b2b4ca4c"},{url:"assets/js/page-stylus 配置.a390f3eb.js",revision:"2124b35afd43fcaeae9ee2710f8213b7"},{url:"assets/js/page-Superscript and Subscript.8b91010b.js",revision:"3bceccd4d13eee60b7d71e056631a476"},{url:"assets/js/page-Tex Support.cea87529.js",revision:"6fd6370d52191944e016bb0cf3a5f84a"},{url:"assets/js/page-Tex 语法支持.c5c06de0.js",revision:"3db595a3e5c65349bdcbfab9cb528041"},{url:"assets/js/page-Theme color.042a423c.js",revision:"d75ab3b7e3f077ab0d437f900c379860"},{url:"assets/js/page-Theme Config.2d0705b6.js",revision:"9f45b018c073f028c4d3a500fcfb7409"},{url:"assets/js/page-TS support.0ef581fc.js",revision:"d2f619316305242710affcffd1a4b2c4"},{url:"assets/js/page-TS 支持.203a3364.js",revision:"7f0284ab8adc572217b250841e742e15"},{url:"assets/js/page-Vuepress Cases.264209de.js",revision:"8cc10e52a751e0788b23ad6b67848780"},{url:"assets/js/page-Vuepress commands.7389bd24.js",revision:"99fd55aa35e6b808b3eba251c96a0ab9"},{url:"assets/js/page-Vuepress 案例.40fd3837.js",revision:"16f2de55413efc43acecc85723b18255"},{url:"assets/js/page-vuepress-plugin-container.cf08164d.js",revision:"e861a9e637c3948a71b27d4c3fc7ed86"},{url:"assets/js/page-vuepress-plugin-copyright.c131cb52.js",revision:"7718c5d5fddf80cb5acb77ba8c041d82"},{url:"assets/js/page-vuepress-plugin-md-enhance.4ee3f055.js",revision:"ed1d409cb1022e38fe827e87957e624d"},{url:"assets/js/page-Vuepress.f97c70bf.js",revision:"3644e7d50d08b5a1055999e12b914c74"},{url:"assets/js/page-Writing a theme.09a07f84.js",revision:"f26164671d24ba3433520ce45cdab981"},{url:"assets/js/page-上下角标.edb3e770.js",revision:"407bfee410501b044cf9b082a4b1fcc3"},{url:"assets/js/page-主页.d50b2738.js",revision:"6f224e79290b6c6805578f814695961f"},{url:"assets/js/page-主题色.fdf632cd.js",revision:"06e59151db2b7cb52d02af3890366417"},{url:"assets/js/page-主题配置.fa1f6a37.js",revision:"d2f51db851464c038fefbac12bfbbc77"},{url:"assets/js/page-人物.96b4a029.js",revision:"3d9d0ccf53598943eaa07d1a116f8c8c"},{url:"assets/js/page-介绍.14180626.js",revision:"68ffebd86526e5bb9017949c6f6766d5"},{url:"assets/js/page-侧边栏.5811b91e.js",revision:"85a1357afe6bc1d6466d5f8f79f3d0d3"},{url:"assets/js/page-全屏按钮.d0aa2640.js",revision:"bd27a34611833adccf0f117842bb8232"},{url:"assets/js/page-加密功能.8f8d5415.js",revision:"573a325d9b86dde7aa6c241d08064dae"},{url:"assets/js/page-博客相关.fb0d3d06.js",revision:"5cd47f6f57c9a8c79ba1893aa66f15b7"},{url:"assets/js/page-图标支持.abffece1.js",revision:"1bd5e79caa9cab508a6da4797d2a296c"},{url:"assets/js/page-地点.d9b075fd.js",revision:"7061932fdfc48ab30861ec73a36510bd"},{url:"assets/js/page-基础知识.7f0fa17d.js",revision:"bf09407baeff31f7258cead220b93a1f"},{url:"assets/js/page-对象.b5e7e4db.js",revision:"74b6d161e9fc6503654e659f61b5a828"},{url:"assets/js/page-导航栏.30a72ecf.js",revision:"2955228e6fda72d92c87ef6b13b3dde1"},{url:"assets/js/page-布局.0113f78b.js",revision:"8d49987c8c671c39766707d6f7d3bfb1"},{url:"assets/js/page-常见问题.95e51cc3.js",revision:"cde45d617b4373fede5ffa8482678fe9"},{url:"assets/js/page-开发主题.74250564.js",revision:"a0d9ba1327f689df9bdb05905c3be23c"},{url:"assets/js/page-插件.09856fd8.js",revision:"6dda215488b5f96d777ae50b50b0f870"},{url:"assets/js/page-插件说明.71745b08.js",revision:"d9bcedec3c721462a6145fb075671fae"},{url:"assets/js/page-文件结构介绍.bfcd3083.js",revision:"66b59441ab0c6027864d6fa915dbaff4"},{url:"assets/js/page-新增特性.10605603.js",revision:"423f5c99cad55b62e8e041bbe535fa9a"},{url:"assets/js/page-新增组件.ed592121.js",revision:"8e3065b31a3b5234e2948734016433f7"},{url:"assets/js/page-流程图支持.92d06dcb.js",revision:"2f1020d29ab087603b7373158ef774c4"},{url:"assets/js/page-深色模式.2d606eb9.js",revision:"33504f9745a3c88ffa0a28e1a3a2238c"},{url:"assets/js/page-符号.41ca38c0.js",revision:"d9b51e0325b4ff78adbe996c15e6513e"},{url:"assets/js/page-脚注.fd625c2d.js",revision:"c0e2d6c4ee09513d7f5a393006f5b19b"},{url:"assets/js/page-自定义对齐.4d87e0bc.js",revision:"624e19a5e5154cd5399cf0f21dff261a"},{url:"assets/js/page-自然.97cc2ccf.js",revision:"9bd5e05c11e4e76ba379edd06c89dd03"},{url:"assets/js/page-评论功能.5c5ac215.js",revision:"6481208a9521a06542895a7532916076"},{url:"assets/js/page-路径导航.0817192b.js",revision:"20a1577e84e76bc23214cb3b4cf76d8a"},{url:"assets/js/page-页面.b55de04e.js",revision:"b1a6666dde6fc1b645bf17af7be02808"},{url:"assets/js/page-页面配置.2f5258c8.js",revision:"030f7b899fece7dafc3a7c89e1fb5e13"},{url:"assets/js/page-项目指令.0a543e5d.js",revision:"625a4151db306d2d8e2088e6e1b4ecab"},{url:"assets/js/page-项目案例.42363080.js",revision:"eb79561b37075fdfff2d049b9c02aee4"},{url:"assets/js/page-默认主题配置.d3937d52.js",revision:"ecd085893d5770c72cb2332fc498eca9"},{url:"assets/js/vendors~layout-BlogEntry~layout-Common~layout-Layout~layout-Timeline.29032d25.js",revision:"3241da8305f822516ffd0dcd0e981bae"},{url:"assets/js/vendors~layout-Layout.4b46abf1.js",revision:"625d5ceab7a63bbbdf4f81ac4400792d"},{url:"basic/index.html",revision:"1c8ee3be201007c894cb42430c02ee08"},{url:"basic/markdown/demo.html",revision:"dac49c07c0f1467113805afd27cf728a"},{url:"basic/markdown/emoji/index.html",revision:"106989d49c467e8209dc8227f61ec9ba"},{url:"basic/markdown/emoji/locate.html",revision:"5dd97d220258ea3a52c0e516c39bb5e0"},{url:"basic/markdown/emoji/nature.html",revision:"61dc2ccdc5d46240b02153a7dd60d345"},{url:"basic/markdown/emoji/object.html",revision:"3b89c972dbc1a3de9ac3993a518e5775"},{url:"basic/markdown/emoji/people.html",revision:"ec9fa01a6c05fcd391945e8d2df4a872"},{url:"basic/markdown/emoji/symbol.html",revision:"d40e13e2cdd6f0dbed7597a3aa249df3"},{url:"basic/markdown/index.html",revision:"954a5800055f0c37708d4e1ed7d12e76"},{url:"basic/vuepress/case.html",revision:"385eebd20a804c464ae6387ea6dd5e82"},{url:"basic/vuepress/command.html",revision:"67e0b2f63bc05defca3100c0f63be5fc"},{url:"basic/vuepress/file.html",revision:"d06de0d6a468b7eee89042001306fd72"},{url:"basic/vuepress/index.html",revision:"1b21543da66a4e88434d67ec0c1be5d5"},{url:"basic/vuepress/plugin.html",revision:"42a83055573b0b38eed0dca43e0d0037"},{url:"basic/vuepress/theme/config.html",revision:"64ff6d296dd5540789af26ef2ca8093a"},{url:"basic/vuepress/theme/dev.html",revision:"2035f5f89c5a261f7aedee4342097b2b"},{url:"basic/vuepress/theme/index.html",revision:"a2841087d869b1dd2545e081c13640d5"},{url:"category/api/index.html",revision:"7eeb2eb648ec1c3ebc0fd4cf4694544e"},{url:"category/api/page/2/index.html",revision:"684c1ec5696b24f305850b655a21dd1c"},{url:"category/FAQ/index.html",revision:"03e2963822425e54304937b7864a3d75"},{url:"category/function/index.html",revision:"da52e7c06e0385b515ee307c0e96f99c"},{url:"category/function/page/2/index.html",revision:"b875a676724864c1fb8e49feca7ea58f"},{url:"category/index.html",revision:"dc052051d8f74e39ba36bbe376a26f68"},{url:"category/instruction/index.html",revision:"09403cd2b4fd3f9031eaab561444a1ef"},{url:"category/layout/index.html",revision:"9d65777ada52b880381ce32851168909"},{url:"category/layout/page/2/index.html",revision:"079d4f1b7a75d6e3792a2c51c0ef9bf6"},{url:"category/markdown/index.html",revision:"cb99f37c7c407b24dd2ba0f936ce5e28"},{url:"category/style/index.html",revision:"11034eba55a943975bb4b160839348c1"},{url:"demo/index.html",revision:"84638982d3a8a8308120f4aa59707222"},{url:"en/api/index.html",revision:"d6e24da5dba7ae3706ee22df90a29c57"},{url:"en/api/page.html",revision:"d1487ecfd0a6297069881ae6b24b202d"},{url:"en/api/plugin/container.html",revision:"9ba035493dbe70de73b979cba63bfc55"},{url:"en/api/plugin/copyright.html",revision:"c5735057ed0f8fd2e69dacaf9776b27e"},{url:"en/api/plugin/index.html",revision:"ee2bb37c02d80169b24a6c52bdfc4855"},{url:"en/api/plugin/md-enhance.html",revision:"aa52c91bf389ede4972a16c9f0543ed2"},{url:"en/api/plugin/medium-zoom.html",revision:"22e1358c00d6a25cedf300e429b20f0b"},{url:"en/api/plugin/pwa.html",revision:"821e1cd22d958cdaed0fb2c367db2718"},{url:"en/api/stylus.html",revision:"85192f8c58980a9bb38ce3b89553a8b3"},{url:"en/api/themeConfig.html",revision:"0599e9bdc69c2be0960f794a45aa5055"},{url:"en/basic/index.html",revision:"533bd3cae3007b60dbd930f1e209b300"},{url:"en/basic/markdown/demo.html",revision:"6476b5fdbceb92208d13abd16511c864"},{url:"en/basic/markdown/emoji.html",revision:"3dabc9da390f1899b6dc64128ad4a1b5"},{url:"en/basic/markdown/index.html",revision:"c687194dd7bde11e0786e6326ffab4cf"},{url:"en/basic/vuepress/case.html",revision:"9dc30be560a706b863d9ebaccb503007"},{url:"en/basic/vuepress/command.html",revision:"246db062d559a331096a3a2cfd22aeb9"},{url:"en/basic/vuepress/file.html",revision:"12262e706256698a3efc9cce2f0f19b6"},{url:"en/basic/vuepress/index.html",revision:"da7697dafd066304adf6396bff22a7c0"},{url:"en/basic/vuepress/plugin.html",revision:"8fee0dbeebe05621b69a79eab8248d2a"},{url:"en/basic/vuepress/theme/config.html",revision:"94941cb2ed6514e022b4dc646be93693"},{url:"en/basic/vuepress/theme/dev.html",revision:"ff3fd62bc4e54e7306da6d0c40806bfe"},{url:"en/basic/vuepress/theme/index.html",revision:"12f591f5a617cec63ec632342e2a2e96"},{url:"en/demo/index.html",revision:"44bf68afb435d799f36e40cb36f29b7f"},{url:"en/FAQ/index.html",revision:"4529534ffb0ca99c4db605a8bd7e2ab8"},{url:"en/guide/feature/blog.html",revision:"383cb36f2db455e3ae98cce1934090e3"},{url:"en/guide/feature/comment.html",revision:"4091533b97903a5203ffd77f944d9991"},{url:"en/guide/feature/component.html",revision:"8731a3875c381f5bbffa753ee9358e98"},{url:"en/guide/feature/darkmode.html",revision:"346dfe3f4160375c35330daf04c1896f"},{url:"en/guide/feature/encrypt.html",revision:"20092e9fb5f788f26a1ed55504c59c51"},{url:"en/guide/feature/fullscreen.html",revision:"cddbbdab52943817fc560a36d076f10c"},{url:"en/guide/feature/icon.html",revision:"726f2333d4e841a64efad46ac417a7c6"},{url:"en/guide/feature/index.html",revision:"c92e4206814c41306fa25338e8d0270d"},{url:"en/guide/feature/themecolor.html",revision:"4b3c8d83667d86f5cdba00db42c62b8b"},{url:"en/guide/feature/typescript.html",revision:"a2e1adf6d2ef2ca37960c272455a9dff"},{url:"en/guide/index.html",revision:"176d6c81d8f424e9935f819543f644d7"},{url:"en/guide/install.html",revision:"70303dc9698ef2ab9bc14dc2aaf21d7c"},{url:"en/guide/layout/breadcrumb.html",revision:"1bcfc49ef5fac97e4ebcf97617606bf3"},{url:"en/guide/layout/home.html",revision:"b2f3955c26cf9087aa08db6c81fa8cb7"},{url:"en/guide/layout/index.html",revision:"61af2fb8a42ca277c8d7db81a3c03300"},{url:"en/guide/layout/navbar.html",revision:"9767d0e975607a128481a890bbdfaee3"},{url:"en/guide/layout/page.html",revision:"081119e2188c6e4acdd05b49d8bf4024"},{url:"en/guide/layout/sidebar.html",revision:"14320c8d6683119037b9ee71bc157626"},{url:"en/guide/markdown/align.html",revision:"fdd54e7b59ef3ac47acb5d38888aa049"},{url:"en/guide/markdown/flowchart.html",revision:"7e8582d339848fa0f38f9ea0ac84df94"},{url:"en/guide/markdown/footnote.html",revision:"3c40eaa79ac748782a5a6ef201092735"},{url:"en/guide/markdown/index.html",revision:"01bef8e6f23b172c85655c86f722a579"},{url:"en/guide/markdown/sup-sub.html",revision:"8e30164d7a47e8cdfeba7b7f02ad4b2d"},{url:"en/guide/markdown/tex.html",revision:"c1015264d2b14edb605ffd22e26b1aea"},{url:"en/index.html",revision:"c6c0415dbaaea197777c9f95583e4691"},{url:"FAQ/index.html",revision:"b89222e560f3a1d32c8d08d85b56207b"},{url:"guide/feature/blog.html",revision:"3083972be30c5d3260f9961b0fd5d4d5"},{url:"guide/feature/comment.html",revision:"ec4eb125eaf9fbfde7b4ed22e85f63e0"},{url:"guide/feature/component.html",revision:"69b5e02936e91cc83c627344a4c4cb3f"},{url:"guide/feature/darkmode.html",revision:"d37a0524a0cbea56396461233557f256"},{url:"guide/feature/encrypt.html",revision:"8fc9811bd1fe9091979fa0f4af4741d3"},{url:"guide/feature/fullscreen.html",revision:"fff29ee3ae634a9003caa7de6421e39a"},{url:"guide/feature/icon.html",revision:"8196864f3292a2283a7f569bf9c71c9a"},{url:"guide/feature/index.html",revision:"2ac6083e041cc132ff951229304ef6ce"},{url:"guide/feature/themecolor.html",revision:"1f914174b2e60c93568fe59c6cf3fb74"},{url:"guide/feature/typescript.html",revision:"5cbc7b638613b0c74ec73cc8fd2fefa9"},{url:"guide/index.html",revision:"379c11cbe3f6a284232a09c1e79c17ba"},{url:"guide/install.html",revision:"8783d38f8a959d49fafe8f621918c0ed"},{url:"guide/layout/breadcrumb.html",revision:"3a564184f01cfbf2fc792399dbf08912"},{url:"guide/layout/home.html",revision:"f1c0271f4bbc240b0307b6b635fe4aee"},{url:"guide/layout/index.html",revision:"93d06f4535721a35aeba6b72209947ff"},{url:"guide/layout/navbar.html",revision:"4ed03a1d055cc037fcbd5d97bd8e0ab4"},{url:"guide/layout/page.html",revision:"4436d6b720ecaebafdc45b28d4fd2f6a"},{url:"guide/layout/sidebar.html",revision:"7499ba7e91c26becf1ffb4c335f55fa7"},{url:"guide/markdown/align.html",revision:"784f33d6ae51b6c3537f026293803af2"},{url:"guide/markdown/flowchart.html",revision:"374053a76be4d6776915257359c2f175"},{url:"guide/markdown/footnote.html",revision:"041f5c3e0d52e36636112128b80f6e9b"},{url:"guide/markdown/index.html",revision:"88c5b360eb70a3b1f8e97742ae65cea1"},{url:"guide/markdown/sup-sub.html",revision:"e975f714e9a48fd204975ca23ec76e32"},{url:"guide/markdown/tex.html",revision:"e838ad1196eda904e672580a6cddbbf8"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"ed38c90c6636dd3d4f0ebb5302a6a7fd"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/api/index.html",revision:"24a8d79ecb98e36b2fa52097a37a804f"},{url:"tag/api/page/2/index.html",revision:"a5240b9ebcea195e38d6e001145b4192"},{url:"tag/blog/index.html",revision:"f13fafe4cba7100a91a751886736489d"},{url:"tag/comment/index.html",revision:"af7bb471eb41417773db0dfe1f956f50"},{url:"tag/component/index.html",revision:"6dc6cdff63586549ead04a338435a451"},{url:"tag/components/index.html",revision:"2d05e71da321bf099d490ce9719ea450"},{url:"tag/emoji/index.html",revision:"357f9d1f514ca9c14af5ae4ae1cca5f5"},{url:"tag/encrypt/index.html",revision:"7471f5d93b8e3ccd147fef9560816350"},{url:"tag/enhance/index.html",revision:"3fb3c18c293be4024691cf7d95b6a669"},{url:"tag/frontmatter/index.html",revision:"6402b1ac67cf9284a1d7d45956e9f21f"},{url:"tag/fullscreen/index.html",revision:"18c35ae468da14193820ea4c6900f27f"},{url:"tag/function/index.html",revision:"7bd1b3a1b442d3951551c16f7512bd25"},{url:"tag/function/page/2/index.html",revision:"862004209d951ec8d55481b2def17974"},{url:"tag/home/index.html",revision:"d63f91aa0454ff4e90707e26f86103c0"},{url:"tag/icon/index.html",revision:"269511e1ff884ff33ceff25984e76df5"},{url:"tag/index.html",revision:"12e1d4a36c66086b3d13d75deabab672"},{url:"tag/intro/index.html",revision:"b39d35515897dd4f00f671491577929e"},{url:"tag/layout/index.html",revision:"8c09ad6ffc0217f7df7b9e60cac4edd7"},{url:"tag/markdown/index.html",revision:"79f8bf870492538ae5704851341bfb93"},{url:"tag/plugin/index.html",revision:"089338642701f9ade3d5bf81ea776b5f"},{url:"tag/plugin/page/2/index.html",revision:"db4b303acc0e92be2c469ad58f79764d"},{url:"tag/style/index.html",revision:"d64eb5a33add62701c6d0f2bdaf3ad57"},{url:"tag/themeConfig/index.html",revision:"f0140eb3b11946ee4424e028e9ab2d54"},{url:"tag/typescript/index.html",revision:"408a358f5f174b7e8b026f1e9f7a0ef1"},{url:"tag/vuepress/index.html",revision:"c827718e08ed26b3cd660a38a30bcfcb"},{url:"timeline/index.html",revision:"2f4eafc176c37fbbab9824d575616961"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener('message', (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting')
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
