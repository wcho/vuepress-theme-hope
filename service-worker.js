if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-1a661b4a"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"fdcd2a3780714bc624eb6d5095dfb701"},{url:"article/index.html",revision:"16564b5ae5804070b451bf421081054e"},{url:"assets/css/0.styles.db7c78a4.css",revision:"14cc46f04ba7c6acb6de61d6f1358224"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"assets/icon/appleIcon152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/msIcon144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.9a633287.png",revision:"9a633287cd74c5446a945458e904868f"},{url:"assets/img/bulb.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/category.30dc2bc0.png",revision:"30dc2bc01f51b2ead2def19517a298e4"},{url:"assets/img/danger.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/img/darkmode.b09eae23.png",revision:"b09eae237bfb38394da644b422dd66cf"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/home.ab88bd60.png",revision:"ab88bd60aba3206fcfd93c7182f0fffb"},{url:"assets/img/home.fbb29418.png",revision:"fbb29418c5c550a0bccaf6e4a62d55c3"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/stop.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/js/120.e69edf41.js",revision:"6cecd076c25c46f0703fade0cc50aff4"},{url:"assets/js/app.3f1d75d7.js",revision:"1acac040a30a64fd97862b19b229f000"},{url:"assets/js/layout-Blog.bd03fc15.js",revision:"c8220c6bbfc3c6fd3671edf9c807e0cc"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.f3d221ba.js",revision:"c71b16802c481a62005d12e0d9925596"},{url:"assets/js/layout-Layout.561f2458.js",revision:"70e8ecc9dfdd7009fe195045cdf9d0b5"},{url:"assets/js/layout-NotFound.70ae315b.js",revision:"3bca02e2bda889b102fffef34c9084ea"},{url:"assets/js/page-@mr-hopelast-update--1104de32.31ae5bb6.js",revision:"f657ac6d5ddc004dc8b4554adccc5ecd"},{url:"assets/js/page-@mr-hopelast-update--ebefb430.c9ad0167.js",revision:"7c9c9e4d902c0aeedb5a48c5417e6ba4"},{url:"assets/js/page-@mr-hopeplugin-pwa--1c9738b4.c09e788c.js",revision:"040076733854c81ec97cb524ec1ec1a1"},{url:"assets/js/page-@mr-hopepwa--051692f2.f73fcba0.js",revision:"e995cf22ed45f60d1993752137c5c054"},{url:"assets/js/page-@mr-hopereading-time--36317372.14d40830.js",revision:"02e80c64dba9f62ab99ebd50d329c060"},{url:"assets/js/page-@mr-hopereading-time--36b7a178.cc83d4c0.js",revision:"b7fba69d9b78ee293a99e004732c7c44"},{url:"assets/js/page-@mr-hopeseo--44db09a4.a266f5d0.js",revision:"2412168ab25d6c606382cb21d14b6249"},{url:"assets/js/page-@mr-hopeseo--4c19db12.ad9353b0.js",revision:"1f31b367e823e65e8f622557412eb7dc"},{url:"assets/js/page-@mr-hopesitemap--4bd3dd04.c479d3ac.js",revision:"240ce36e0771ec767b4bb6dd6dec450a"},{url:"assets/js/page-@mr-hopesitemap--7a219d12.9d364e53.js",revision:"6ee100545450c3383fb03c7ae452bbc3"},{url:"assets/js/page-AboutVuepress--5d12de02.19fc8275.js",revision:"21dbea1f1262b552d71e9754f4568d2a"},{url:"assets/js/page-Basic--29b12659.59dea662.js",revision:"84251e883316b813fc16657fb08c8354"},{url:"assets/js/page-Bloghomepage--d988383c.f2a703ad.js",revision:"00b3ef1543de97532c377c56f2634aae"},{url:"assets/js/page-Blogrelated--7c1e4552.09d2affb.js",revision:"6673d1ae97f5534df30cc5623e4dbe08"},{url:"assets/js/page-CommentFunction--6884a164.5e0b4c46.js",revision:"da3998268c00ffd784f4e71b7b10a31a"},{url:"assets/js/page-Commonproblems--87e54bce.e5963d7b.js",revision:"7eab7710a4be356506aec70baff945fa"},{url:"assets/js/page-ConfigDocs--2082c612.60a39be0.js",revision:"fd1658f20a072d0bccc10896d85ed6da"},{url:"assets/js/page-Customalignment--df6a559c.c74226b0.js",revision:"333327f346e0985e8e7271cd32c9bf9b"},{url:"assets/js/page-DarkmodeandThemecolor--57fce360.440d5932.js",revision:"4b8fe513996e997d4fedc80bf20c7b86"},{url:"assets/js/page-Demos--cac80116.ac912a7f.js",revision:"4160308f37ac57e980176236d62032e7"},{url:"assets/js/page-EmojiList--b946d226.98b3c120.js",revision:"554ad343eac5d0ac5361f614a5425be1"},{url:"assets/js/page-Emoji列表--41bb29b9.20a1277a.js",revision:"ce8df72356e9bbd4343b9274444226c1"},{url:"assets/js/page-Encryptionfunction--21c8c5d8.17ed439c.js",revision:"5d6846d51775cbf6e6a90bbd683421a1"},{url:"assets/js/page-FileStructure--5dff5230.f95e6edc.js",revision:"edd23aa32e0c312e11203f4d70ef5507"},{url:"assets/js/page-Flowchart--6426e412.b60767b7.js",revision:"2207f3696514ac3953214c02949d55ac"},{url:"assets/js/page-Footnote--3a89d162.53c74ad5.js",revision:"51734bd9ebadbd472dada69c226fe87c"},{url:"assets/js/page-HomePage--37b81ca8.427efae2.js",revision:"b6089cce2e7853ec693b32462c1f7702"},{url:"assets/js/page-InstallUsage--5dafe67a.5e7a34f8.js",revision:"fa3c62af17e65ae34fa38ad991e574f6"},{url:"assets/js/page-Introduction--0b048d19.16fc72d0.js",revision:"876914c9c27a088788027cd2ff6ddc40"},{url:"assets/js/page-Layout--655201fe.06d727cd.js",revision:"da2cea6e52bd312c9f3ca0e153c759e2"},{url:"assets/js/page-MarkdownDEMO--ab10bb74.a83cdcfe.js",revision:"e606877966ced86d624dd4bfd2195097"},{url:"assets/js/page-MarkdownEnhance--ed59a9f6.98826abe.js",revision:"50a7e2460eaca7d21a4487f59f857d6a"},{url:"assets/js/page-MarkdownIntroduction--25c54f9b.2acc5e57.js",revision:"316aabf398c5a83745c39fe86a20aa33"},{url:"assets/js/page-Markdown介绍--270989ce.af76cb85.js",revision:"512dcf61ebf838085c98b0785f75593d"},{url:"assets/js/page-Markdown增强--ad9dba8e.d106c0cd.js",revision:"96c2bc05c41ac01a5d8701068ed0b2eb"},{url:"assets/js/page-Markdown示例--c3e1bfdc.5b28e8a6.js",revision:"a678bd1a1db6c7837450fed62a751933"},{url:"assets/js/page-Markup--4f1121f0.36231acd.js",revision:"03caba63857daee9c4493dd0531e12f6"},{url:"assets/js/page-Nature--5c9d3e6c.6cc2e590.js",revision:"7792c6b4ed8d30c7420e7325297e5810"},{url:"assets/js/page-NavBar--262632f4.23703188.js",revision:"214d25879da0754031f645421d82db40"},{url:"assets/js/page-NewComponent--2edd3b68.5a089a4f.js",revision:"595a14f0c1ae525a2f9356b843996445"},{url:"assets/js/page-Newfeature--3e66b879.c605a7cd.js",revision:"2ffd78ed36cf0cee0a433ea49ef18b36"},{url:"assets/js/page-Object--6d31953c.0cc9afab.js",revision:"09f716ff9a84f62379dd8268c63f8590"},{url:"assets/js/page-Page--26692570.002f7b29.js",revision:"a06ff2240f5a00866ca145beacd77453"},{url:"assets/js/page-PageConfiguration--493c56dc.9271ec1e.js",revision:"c792d3d571341314146e67fd1eb0ca7a"},{url:"assets/js/page-Pageinformation--6abfca0a.d7a8f51e.js",revision:"b4d8b164d5a919915409a695583fc716"},{url:"assets/js/page-People--f94822c8.eadb8466.js",revision:"a93df9b2251a403dfde93276f1e14c0c"},{url:"assets/js/page-photo-swipe--34ea45d2.39e262a1.js",revision:"1fa090438a5292b32bed6683decbcd3c"},{url:"assets/js/page-photo-swipe--7be1a0aa.6cfe9878.js",revision:"1d589ac5fe88adc3d4d2d46044d45100"},{url:"assets/js/page-Place--32291f32.2814cb86.js",revision:"bcb3c0b03e4effbb9431b4c7c4eddc62"},{url:"assets/js/page-PluginDescription--b08a3ace.40407c50.js",revision:"605143335e2f198481fd04db53546da0"},{url:"assets/js/page-Plugins--1a5ef242.21aaa49c.js",revision:"a19f7911aa7161ff3b069231be976a7a"},{url:"assets/js/page-SEOandSitemap--13a48dac.40513469.js",revision:"cd13010eb1207a6cd52172f0bed89ba1"},{url:"assets/js/page-SEO和Sitemap--5934b3b2.6b21ea13.js",revision:"501814510518541b33b1ee2311075d84"},{url:"assets/js/page-Sidebar--12800fd2.21b6cbe0.js",revision:"78b463e8fe8e6c9c155ceb1d4e599abb"},{url:"assets/js/page-stylusconfiguration--189ec968.c5b40e81.js",revision:"01d2cad4c0c341e128381a3dede77a4b"},{url:"assets/js/page-stylus配置--6796cdf2.29388386.js",revision:"3e6b51abe98601c20b82ab815960389c"},{url:"assets/js/page-SuperscriptandSubscript--d7f5f81c.a91648d7.js",revision:"c4849d9755575d9d77d0398275152acd"},{url:"assets/js/page-Symbol--0b92fe0a.2152b5d7.js",revision:"f8d3617f3cd0e184bfff228b0a004f99"},{url:"assets/js/page-TexSupport--f897e69c.b28786b4.js",revision:"cb374093a27ef51d4c037f79d5d424dd"},{url:"assets/js/page-Tex语法支持--64cb5e50.11c60f3e.js",revision:"8068acd5c3206acf70629d8b2e53a9a7"},{url:"assets/js/page-ThemeConfig--085c2edc.56b6b6a1.js",revision:"27f8c092de0aa1922c868c2fc56493bb"},{url:"assets/js/page-ThemeConfig--4715c95c.2b307069.js",revision:"c29eae6d0734b35e16dde068cf440bd4"},{url:"assets/js/page-TSsupport--165630b2.acb7a31a.js",revision:"71cb0eb37404dd26b9d43f06535676f5"},{url:"assets/js/page-TS支持--09728ac8.ff1b4d0c.js",revision:"1009cde212efa4fe53891055a54775ab"},{url:"assets/js/page-Vuepress--4a71114e.62f10b4b.js",revision:"ff1824518bcceda1d9b73998a1123b68"},{url:"assets/js/page-vuepress-plugin-container--31498112.5702a891.js",revision:"99268cfe2790d7ca16d1e9e841145780"},{url:"assets/js/page-vuepress-plugin-container--f45c2334.0da0c519.js",revision:"26f16e7cf8c16ec4a668e7d4742d1c25"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.94bec537.js",revision:"6048b8ad1cf433846ce151ef18670e29"},{url:"assets/js/page-vuepress-plugin-copyright--dac5744c.6d97a70d.js",revision:"7ca119243bf23cdc800acdfb3e9a5c58"},{url:"assets/js/page-vuepress-theme-hope--776d8369.7bbcbe3f.js",revision:"81a8287d7f37d23555451af7e0ff7b98"},{url:"assets/js/page-vuepress-theme-hope--7f862af9.902a2412.js",revision:"df8c971477e42853865e0347d4149980"},{url:"assets/js/page-VuepressCases--27d200c8.abc9f803.js",revision:"ccb8452983b65835c4e5eb2405881afb"},{url:"assets/js/page-Vuepresscommands--7e89705c.c84517e7.js",revision:"7173956edd7ebb34dbdfba15b15ba1a7"},{url:"assets/js/page-Vuepress案例--082972f2.1568ae27.js",revision:"ee218ddda8a14082b4a7d9816229a768"},{url:"assets/js/page-上下角标--895c91b8.e74cfa9a.js",revision:"a7a1dce0cdb93d733875880296701b92"},{url:"assets/js/page-主题配置--1120a0ce.b2ca3c88.js",revision:"0631f89447a73e06a3a76eff64fab513"},{url:"assets/js/page-主题配置--1a859dfc.f05265b1.js",revision:"bd4d4ce2fe1c62ae64dc75ddb62577f7"},{url:"assets/js/page-人物--2182769c.7d651216.js",revision:"0cef00bf90fb328c734cb5f89e31e2df"},{url:"assets/js/page-介绍--d4910962.7b884685.js",revision:"737d97f82088ea7c671fb870dfb208ff"},{url:"assets/js/page-侧边栏--2fa1ea2c.eddaf208.js",revision:"9f88cf13dfe6340ecf00de5f61ea44b8"},{url:"assets/js/page-加密功能--181bdc9c.f2a41f03.js",revision:"b53634d53a27bb6a93f0fd3d9bc151a3"},{url:"assets/js/page-博客相关--17c260a2.a7e4a3e5.js",revision:"0621125f74ffd4afedf523a45eba7b8d"},{url:"assets/js/page-博客首页--64265752.f62ddc13.js",revision:"da7938965dbdeb3f1d20498706fecc9c"},{url:"assets/js/page-地点--951cdc00.e15ac083.js",revision:"99866306db0ef69572f54b3a9654cfd0"},{url:"assets/js/page-基础知识--770cb96b.e6c3c219.js",revision:"d90580c149c1cb8d05ca7cbe38d9763e"},{url:"assets/js/page-安装使用--0ab466d2.3322afc6.js",revision:"181ddad60b8886b5b2624ad0e4f68acb"},{url:"assets/js/page-对象--16031ab2.5f63a2a2.js",revision:"b6c411db212eb787080e0312b70422d5"},{url:"assets/js/page-导航栏--c7bf87dc.25b0727d.js",revision:"39ce857a3d135218d06d2be978d36b37"},{url:"assets/js/page-布局--12bd4f0e.e5a53aff.js",revision:"080a15181eab14cff12c99efd2323ffd"},{url:"assets/js/page-常见问题--2b571e9b.99bc31ce.js",revision:"b2cdaa6d02ee3f700e7554a9a7c906b6"},{url:"assets/js/page-插件--adbf415c.9c90dad5.js",revision:"5c3d543a076be4483df26ce55945473c"},{url:"assets/js/page-插件说明--137c6c07.13f5d645.js",revision:"7692e9357a3f45d4b91529a1cbb75197"},{url:"assets/js/page-文件结构介绍--665a4f1c.0a0756c1.js",revision:"3519c728fc4e6d953280efee4c105845"},{url:"assets/js/page-新增特性--5136c541.746d019a.js",revision:"3b7028c36404e21f54c17b4b82757710"},{url:"assets/js/page-新增组件--1d138c72.3e1dcd54.js",revision:"743fcaea8a2792cf223635e46bd4a2a3"},{url:"assets/js/page-标记--6b1f341c.a45980b7.js",revision:"87553e0c1c2522065fa99a0264d54e6a"},{url:"assets/js/page-流程图支持--7ce6d974.83c00c5e.js",revision:"1976f63d4359f162086bbda5ff7560cd"},{url:"assets/js/page-深色模式与主题色--e23e731c.a05ea5d9.js",revision:"0b65aeca9829862a49127e8b3fd26d68"},{url:"assets/js/page-符号--a9259c5c.eba123f5.js",revision:"9aa6510679f2c5a0a88d75f785a0a4af"},{url:"assets/js/page-脚注--0c733e52.32d82ad4.js",revision:"a7d40e62fe55ab65de08b2334e8cd0d1"},{url:"assets/js/page-自定义对齐--4f21aa5c.1a2b4af5.js",revision:"57d0500a7069c3f9c63ece842a2f1910"},{url:"assets/js/page-自然--749fb09c.aa366ffa.js",revision:"4802a674dc16844e851d6565a3f3d970"},{url:"assets/js/page-评论功能--5bb6671c.e3aacbb3.js",revision:"39cb281d9bcd41fd4bd9a92593047e99"},{url:"assets/js/page-配置文档--35a0a7d9.edb6263e.js",revision:"2fd4af577d4aeb78fb9feb1bec2ef640"},{url:"assets/js/page-页面--af17b59c.1ba4be6b.js",revision:"c07beaafcb5871a48984aa6cd88b4b29"},{url:"assets/js/page-页面信息--71efd5d2.16ba7087.js",revision:"7c94c098e6ff4ebc1d32853d04d558ff"},{url:"assets/js/page-页面配置--0aacc152.54ea5de3.js",revision:"254bbbfa6e283722d528bc4e5adf4932"},{url:"assets/js/page-项目指令--9f3f316c.3e466805.js",revision:"ddb5dd4114dc80d1f4e0f53856e3aac0"},{url:"assets/js/page-项目案例--f328658e.7fc6eab1.js",revision:"d7bf3c6ee6f111563228a4a01f88d0f4"},{url:"assets/js/page-首页--5834599c.4fe42681.js",revision:"84547068a4f045850e8f0ebab2f4a5f0"},{url:"assets/js/vendors~docsearch.c815669b.js",revision:"d53823faa8c3c6fa28aa67a03f94337a"},{url:"assets/js/vendors~flowchart.5496fad0.js",revision:"3ce343ad5083fe32bb9311bdec205754"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.d8ea2271.js",revision:"d038c0a18a95f48f4029f397301f0d57"},{url:"assets/js/vendors~layout-Layout.8be1d9b1.js",revision:"61bdf43520ef65c98797733395d96f04"},{url:"basic/index.html",revision:"6376307b80cb80ef2c9de51dbeb4cf02"},{url:"basic/markdown/demo/index.html",revision:"2b3d049855d2d07a0a2c5028eb88db6e"},{url:"basic/markdown/emoji/index.html",revision:"50ba3c0af3650da820456db569ca9cc4"},{url:"basic/markdown/emoji/nature/index.html",revision:"e2debd0f81c4da81393bf2f14749a7d7"},{url:"basic/markdown/emoji/object/index.html",revision:"23f52a446e9eb00479dd8081898e142e"},{url:"basic/markdown/emoji/people/index.html",revision:"49d31bb81cc76896d2b55b8b19b95ef9"},{url:"basic/markdown/emoji/place/index.html",revision:"276f1bd86e4a8353e6c3fe77b47563e4"},{url:"basic/markdown/emoji/symbol/index.html",revision:"ad6f3a09f6f419a143995e0d9d24f480"},{url:"basic/markdown/index.html",revision:"da8672f4cf348ca5b3d00f039ea7e222"},{url:"basic/vuepress/case/index.html",revision:"13a8b9968aca04ec2847edc608246222"},{url:"basic/vuepress/command/index.html",revision:"5cb9d905fc4c4538756751524621e91f"},{url:"basic/vuepress/file/index.html",revision:"970eaf0a78a21ddc004fb1f89b36b078"},{url:"basic/vuepress/index.html",revision:"e372a0256219287d1d81451f9af67878"},{url:"basic/vuepress/plugin/index.html",revision:"dc6ed02afd5f41c4bb50402ff4e85945"},{url:"basic/vuepress/theme/index.html",revision:"6c4865a0128ef57ae20d2a5e441adf0f"},{url:"category/basic/index.html",revision:"e8f9cd023bf6a8514b1a79c913964a26"},{url:"category/basic/page/2/index.html",revision:"966f60502fcd1994ccdc1313346b2d23"},{url:"category/basic/page/3/index.html",revision:"30e5051a64bf88a19b4ae419e6da3311"},{url:"category/config/index.html",revision:"808b63113fa60c219f7442020309cf36"},{url:"category/config/page/2/index.html",revision:"fdda779698f796ab806638cf0a915da6"},{url:"category/config/page/3/index.html",revision:"db86b8a09183c69382b54b8705f23230"},{url:"category/demo/index.html",revision:"b90dac5bc9167759fdb12480fcd50dc8"},{url:"category/FAQ/index.html",revision:"d527a316c909d55035f2d7ceedb4412a"},{url:"category/feature/index.html",revision:"54b2cd5891290eeec65eb367fb1f0a0d"},{url:"category/feature/page/2/index.html",revision:"bbf19f7579acfc4dd27281c98c3170ba"},{url:"category/index.html",revision:"784716194293fb09a7a0c0c9ff012e87"},{url:"category/instruction/index.html",revision:"8f68f61f590600c1f89925a3c4b4cd10"},{url:"category/layout/index.html",revision:"91b4c160f5a5751ac288d9dd35e507ee"},{url:"category/layout/page/2/index.html",revision:"d32f73474b4ba2f429e58132ce24f123"},{url:"category/markdown/index.html",revision:"325540891e246501664ecbf078f48f66"},{url:"config/index.html",revision:"a3951e4b0d72675171103c70423e8fb7"},{url:"config/page/index.html",revision:"9c7742d39dbd8eb1ddb75744b66b5c42"},{url:"config/plugin/container/index.html",revision:"3449bd15f0aef5df156b9a174fb8cc24"},{url:"config/plugin/copyright/index.html",revision:"221b93fa9ce6114bb4972f4a3896722b"},{url:"config/plugin/index.html",revision:"028023ca6f6ba40a1c2421e04c820ac6"},{url:"config/plugin/last-update/index.html",revision:"55e9fa4851393ce433b852df710a949e"},{url:"config/plugin/photo-swipe/index.html",revision:"f63dda7f2d8bcffd63b5101a13a5402e"},{url:"config/plugin/pwa/index.html",revision:"8db490a72656ce76e8e0afffa0beda72"},{url:"config/plugin/reading-time/index.html",revision:"00b93e830042e0affb63497da47bfa5a"},{url:"config/plugin/seo/index.html",revision:"1a8d08056c321e3ef03cb13bbf7d7ae8"},{url:"config/plugin/sitemap/index.html",revision:"a8e4d6d3e4f666bc9f7b2af322184bf0"},{url:"config/stylus/index.html",revision:"2a964b179acc47f8dff710c0abf92840"},{url:"config/themeConfig/index.html",revision:"380c395ce5859a7d7cdbd206f9b2ebd0"},{url:"demo/index.html",revision:"f6a8f6f5819f059154f76c92dedbcb54"},{url:"en/basic/index.html",revision:"f7229018e23ff9e247ef4d207469e3ee"},{url:"en/basic/markdown/demo/index.html",revision:"36e5831a7826b71bc4110c40d9229205"},{url:"en/basic/markdown/emoji/index.html",revision:"ca9f2a969e25c67b4374027b661fafc4"},{url:"en/basic/markdown/emoji/nature/index.html",revision:"f9c2bae925981bf5b1033667ec226ced"},{url:"en/basic/markdown/emoji/object/index.html",revision:"c4fcd56236181a1450688f6a259c147b"},{url:"en/basic/markdown/emoji/people/index.html",revision:"cc3a4c2a6889b3acd9237fceb2c84435"},{url:"en/basic/markdown/emoji/place/index.html",revision:"67bada67ee9f0e51210a840516161621"},{url:"en/basic/markdown/emoji/symbol/index.html",revision:"d47b91da6ec79f7f74213ec668cd87e3"},{url:"en/basic/markdown/index.html",revision:"a086205aedd2d13279caf96f0a67e8d8"},{url:"en/basic/vuepress/case/index.html",revision:"df641de872960618d092b1e64c318499"},{url:"en/basic/vuepress/command/index.html",revision:"9ce008aa13abc65715688acd3c2f5705"},{url:"en/basic/vuepress/file/index.html",revision:"034f479f2c552c378837e8cc6776ab48"},{url:"en/basic/vuepress/index.html",revision:"12801b9f6eb6931e892c113acdf2919c"},{url:"en/basic/vuepress/plugin/index.html",revision:"f6a9006d0dea90d3ae6dac7474fc8308"},{url:"en/basic/vuepress/theme/index.html",revision:"d26f6a718b65fc92929d80d902e3afcd"},{url:"en/config/index.html",revision:"82752d1b9897a0711492f8fbcd054936"},{url:"en/config/page/index.html",revision:"e55ec46deaf466a0f7baf97acecb9131"},{url:"en/config/plugin/container/index.html",revision:"11ad9bb08932f776c5d9c9ee48f45185"},{url:"en/config/plugin/copyright/index.html",revision:"1e4731bfc3d2ae54a9aeebc3cc2c3e04"},{url:"en/config/plugin/index.html",revision:"0f77fef00bef2ca9f7356cf0bddeb2a2"},{url:"en/config/plugin/last-update/index.html",revision:"3f35ebdaecc821480e073f9d0bb5830e"},{url:"en/config/plugin/photo-swipe/index.html",revision:"8b19a68d7d137274a88ca87a76433885"},{url:"en/config/plugin/pwa/index.html",revision:"70fd6d9e5efc15826fe50a6ba396d35c"},{url:"en/config/plugin/reading-time/index.html",revision:"254a5dc366486cda6229aa166928662e"},{url:"en/config/plugin/seo/index.html",revision:"2c128e60ce4707c01a9bf83b153544ae"},{url:"en/config/plugin/sitemap/index.html",revision:"29479c4d7bd200fd2a29bdd109cacb3b"},{url:"en/config/stylus/index.html",revision:"171ad5324ae8bf8a2be6cada8512819e"},{url:"en/config/themeConfig/index.html",revision:"52b544297cfa4956f6cbdb45f7e58fea"},{url:"en/demo/index.html",revision:"09facb97c7d44e1c71c9a9725eeac59a"},{url:"en/FAQ/index.html",revision:"7734b83b754cdb62a95f7c72fb4223e6"},{url:"en/guide/feature/blog/index.html",revision:"c0d44056abcc6e47b4d723520fb67d82"},{url:"en/guide/feature/comment/index.html",revision:"b5a83708a9710148c9b3c00b3f9fffb2"},{url:"en/guide/feature/component/index.html",revision:"5510f093f27375a61d10c7d06d8edf3d"},{url:"en/guide/feature/encrypt/index.html",revision:"d3a2663bfa6b1e1493005c53a9a89126"},{url:"en/guide/feature/index.html",revision:"ad6fa1877d1de4ff0a53a873c95a0a7f"},{url:"en/guide/feature/markdown/align/index.html",revision:"f5874bc3dc9bc3d205cec6e9f07ea737"},{url:"en/guide/feature/markdown/flowchart/index.html",revision:"8014f9c17726afe52e8ec4a4b4ac767c"},{url:"en/guide/feature/markdown/footnote/index.html",revision:"1c6c778983f8b8686485088dd0d2080b"},{url:"en/guide/feature/markdown/index.html",revision:"2171d1015c8ab00a4511e48a26f3a925"},{url:"en/guide/feature/markdown/mark/index.html",revision:"1d712d4ec950152291a3199acbc36aa5"},{url:"en/guide/feature/markdown/sup-sub/index.html",revision:"2312b5cf63b63d21e3944f386dd79cb5"},{url:"en/guide/feature/markdown/tex/index.html",revision:"81b389c4d9de9556cab7018a09c37d0e"},{url:"en/guide/feature/page-info/index.html",revision:"cf3e8e8fead9d8cf163feb280be5da7e"},{url:"en/guide/feature/seoAndSitemap/index.html",revision:"35a08f6e06e53782fa5784a2609b3737"},{url:"en/guide/feature/theme/index.html",revision:"828128aef74553f1b11d0cd1c93b3fb4"},{url:"en/guide/feature/typescript/index.html",revision:"86bdace461390280c3705beed803680e"},{url:"en/guide/index.html",revision:"c2d9e35c0cee91a9f108f71ba090f236"},{url:"en/guide/install/index.html",revision:"1488fc7ac12c9c6a3d10b872b1b4232b"},{url:"en/guide/layout/blog/index.html",revision:"c50155e55f8a49ed4f1e4c9a26ab09a0"},{url:"en/guide/layout/home/index.html",revision:"dd978088b5abc3a2d76d197bcf29d200"},{url:"en/guide/layout/index.html",revision:"a8fc73198988625231f677a6dec9df82"},{url:"en/guide/layout/navbar/index.html",revision:"f4a368f980f8a111096c8c44896981ad"},{url:"en/guide/layout/page/index.html",revision:"9dc0436897e1e42d943a00dd3927f91c"},{url:"en/guide/layout/sidebar/index.html",revision:"c72b5c769ab2b245bd67ac216516d5e3"},{url:"en/index.html",revision:"ca2d67ff57d3cbcf523e45bf14af59aa"},{url:"FAQ/index.html",revision:"7dea3e28e4d9edf080ce64c249df3b70"},{url:"guide/feature/blog/index.html",revision:"d43cdbfd37fdb5024192c0476efa2913"},{url:"guide/feature/comment/index.html",revision:"1a74ccb8e0fbe4cb03e45b1d82da2ecd"},{url:"guide/feature/component/index.html",revision:"51f8a9a118f94f2c451a24d4a45091c0"},{url:"guide/feature/encrypt/index.html",revision:"6f2dd97adb860b75c4c051294870ac0f"},{url:"guide/feature/index.html",revision:"ea82bd3fe548de6f9fd9ea57637da53d"},{url:"guide/feature/markdown/align/index.html",revision:"a7eadf6e0f3cb1f7477221f384e74921"},{url:"guide/feature/markdown/flowchart/index.html",revision:"2848d0f18d8e5fe0f6c2f3744075eadc"},{url:"guide/feature/markdown/footnote/index.html",revision:"515054b1507dc1a09b147866a772956d"},{url:"guide/feature/markdown/index.html",revision:"14cf78396f3677b4826d9dc8fe6984a2"},{url:"guide/feature/markdown/mark/index.html",revision:"326ce9d912bc5d37a849e5286e66edf6"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"7b90a8b6ac4c05ad62815327ff8ea4c8"},{url:"guide/feature/markdown/tex/index.html",revision:"2866bfedda3c87573264c61a854a4083"},{url:"guide/feature/page-info/index.html",revision:"4476757187e30f1328bb5dcfd9486fc4"},{url:"guide/feature/seoAndSitemap/index.html",revision:"30e19347b554c398949ec033029bf1ad"},{url:"guide/feature/theme/index.html",revision:"57edb2f90f2c8b36c64b4a3b2c7780d0"},{url:"guide/feature/typescript/index.html",revision:"15e890b836e14e7b08c172acf2096fe4"},{url:"guide/index.html",revision:"3fc79305ce5bf68e4d05ca53e11ca13b"},{url:"guide/install/index.html",revision:"09f019697ec7e877a31fdbf1bc9066c4"},{url:"guide/layout/blog/index.html",revision:"60dc162bb56c2d77fbfe07e059f358d5"},{url:"guide/layout/home/index.html",revision:"d6afc7f738a2816ab157d8b16c5b5c4e"},{url:"guide/layout/index.html",revision:"e6b9631c9a7cddb2c366352e159f3dfb"},{url:"guide/layout/navbar/index.html",revision:"e53360f7a74329007123e654043e88d4"},{url:"guide/layout/page/index.html",revision:"f7929b554692c6bea7d29f106e19921a"},{url:"guide/layout/sidebar/index.html",revision:"ee94aefac1d877f3eecec207d8e865e2"},{url:"index.html",revision:"97a0ae13d45ee22de4210bc727c93dd7"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"tag/blog/index.html",revision:"1750c51fd3ac2c46b6cdf57955cbdc2f"},{url:"tag/comment/index.html",revision:"2e16bcaf2e6186ae3de8868b14de7cec"},{url:"tag/components/index.html",revision:"4cc5aa7c5b9e60d3b9d986742210f58e"},{url:"tag/config/index.html",revision:"d21f6b2593f98684400e90a0647cc014"},{url:"tag/config/page/2/index.html",revision:"c2aae55abdb28b8398c37eb6357b6000"},{url:"tag/config/page/3/index.html",revision:"b8e500b5df3fbaab45529797c2fb9501"},{url:"tag/emoji/index.html",revision:"1d75d658d7b1788610019e7d2562ea2f"},{url:"tag/emoji/page/2/index.html",revision:"cc0dd16a01249b861ca0c0c19b9b8a9a"},{url:"tag/encrypt/index.html",revision:"b8bf9d19025b94966efaf30f35a91ca5"},{url:"tag/feature/index.html",revision:"91dd764149afe9b2614464e95b8b1d86"},{url:"tag/feature/page/2/index.html",revision:"aa540208b43bcf4a854cef19107f3432"},{url:"tag/frontmatter/index.html",revision:"a679f5151e2d48556fef557e6d8ebff6"},{url:"tag/function/index.html",revision:"4502631c11a223618cf0da30b64e769b"},{url:"tag/function/page/2/index.html",revision:"c331fbca7060ce4a473a84515ee45be0"},{url:"tag/home/index.html",revision:"046a0f04edd80f1328d3f54f1dcce1ae"},{url:"tag/index.html",revision:"3e0f64253bc06711904bebaea4d839f8"},{url:"tag/intro/index.html",revision:"fb096e340238da1a9791aff9c75f27ce"},{url:"tag/layout/index.html",revision:"a0a5437b815ee442c70e6f799edf6b8e"},{url:"tag/layout/page/2/index.html",revision:"0f990ac7436f419e1a44db248c501d33"},{url:"tag/markdown/index.html",revision:"ed298ba64dcb02b7fd26769cfac8f6f8"},{url:"tag/markdown/page/2/index.html",revision:"7ffe0c0a9b68902cfcc41613a0eb2271"},{url:"tag/markdown/page/3/index.html",revision:"37250b1900ac2c45c7a2adfa452ec0d3"},{url:"tag/navbar/index.html",revision:"930e79bcea740845bcb138a8fed25b00"},{url:"tag/page-info/index.html",revision:"314242c6b2dad3c6b0036b435d257a3e"},{url:"tag/plugin/index.html",revision:"bf72e7e13fe4971d656f69049b3511e4"},{url:"tag/plugin/page/2/index.html",revision:"8a6bd36b88f618139df3bdeb5fa72dc5"},{url:"tag/seo/index.html",revision:"0e13036468f3acd1de240b7822999a01"},{url:"tag/sidebar/index.html",revision:"df473500523fbbbc6c5152037b3b2a54"},{url:"tag/sitemap/index.html",revision:"68f9dc2ba8916d357adce6c3855da044"},{url:"tag/style/index.html",revision:"3835915abf8e0a68e01ea9c1c9fff144"},{url:"tag/themeConfig/index.html",revision:"3f2dbedaeec445c3d52261d5e4058f95"},{url:"tag/typescript/index.html",revision:"fce2684114e543919faa538c19e85e2b"},{url:"tag/vuepress/index.html",revision:"8a56a446a2917326664f8c3975bf685a"},{url:"tag/vuepress/page/2/index.html",revision:"0420014c5fcfd6f004e6132849674ce5"},{url:"timeline/index.html",revision:"110b995ccc71ca11e7874674996b8f75"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
