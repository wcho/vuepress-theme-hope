if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,d,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(d.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-1a661b4a"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"6e7322262ab389a835bd50cc9ec02ccd"},{url:"article/index.html",revision:"849ac192ba6cc48ce31fe1f1ad9303d3"},{url:"assets/css/0.styles.db7c78a4.css",revision:"14cc46f04ba7c6acb6de61d6f1358224"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"assets/icon/appleIcon152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/msIcon144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.9a633287.png",revision:"9a633287cd74c5446a945458e904868f"},{url:"assets/img/bulb.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/category.30dc2bc0.png",revision:"30dc2bc01f51b2ead2def19517a298e4"},{url:"assets/img/danger.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/img/darkmode.b09eae23.png",revision:"b09eae237bfb38394da644b422dd66cf"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/home.ab88bd60.png",revision:"ab88bd60aba3206fcfd93c7182f0fffb"},{url:"assets/img/home.fbb29418.png",revision:"fbb29418c5c550a0bccaf6e4a62d55c3"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/stop.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/js/120.e69edf41.js",revision:"6cecd076c25c46f0703fade0cc50aff4"},{url:"assets/js/app.0821cbd1.js",revision:"4fbf2019773eba1b0dc041229f58f987"},{url:"assets/js/layout-Blog.b721cc37.js",revision:"ebb042a887d67379027502d5d057d416"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.91c12318.js",revision:"119e17ed754d19617e9f991ea340120e"},{url:"assets/js/layout-Layout.af5840e2.js",revision:"175f228df1c3a1065ad2b9723ca03ee8"},{url:"assets/js/layout-NotFound.768c84cb.js",revision:"784b4bf9b6affedef31013f0b2885bfb"},{url:"assets/js/page-@mr-hopelast-update--1104de32.5977bf1a.js",revision:"f657ac6d5ddc004dc8b4554adccc5ecd"},{url:"assets/js/page-@mr-hopelast-update--ebefb430.52050866.js",revision:"4f0570fe7b8284e752cf506e3278f8c3"},{url:"assets/js/page-@mr-hopeplugin-pwa--1c9738b4.a5f04750.js",revision:"040076733854c81ec97cb524ec1ec1a1"},{url:"assets/js/page-@mr-hopepwa--051692f2.efedd61f.js",revision:"e995cf22ed45f60d1993752137c5c054"},{url:"assets/js/page-@mr-hopereading-time--36317372.3f8fc8cf.js",revision:"02e80c64dba9f62ab99ebd50d329c060"},{url:"assets/js/page-@mr-hopereading-time--36b7a178.0ff151b9.js",revision:"b7fba69d9b78ee293a99e004732c7c44"},{url:"assets/js/page-@mr-hopeseo--44db09a4.28709b26.js",revision:"3c47b93c61d06cae09ae6e4aa251ef07"},{url:"assets/js/page-@mr-hopeseo--4c19db12.3ed20c81.js",revision:"bf0c5543b650a32c1c72294f8afbf46c"},{url:"assets/js/page-@mr-hopesitemap--4bd3dd04.b6f981e7.js",revision:"240ce36e0771ec767b4bb6dd6dec450a"},{url:"assets/js/page-@mr-hopesitemap--7a219d12.11f9a0d6.js",revision:"6ee100545450c3383fb03c7ae452bbc3"},{url:"assets/js/page-AboutVuepress--5d12de02.99c606fa.js",revision:"21dbea1f1262b552d71e9754f4568d2a"},{url:"assets/js/page-Basic--29b12659.99cdc09c.js",revision:"84251e883316b813fc16657fb08c8354"},{url:"assets/js/page-Bloghomepage--d988383c.2ac662f2.js",revision:"00b3ef1543de97532c377c56f2634aae"},{url:"assets/js/page-Blogrelated--7c1e4552.ca1b2653.js",revision:"6673d1ae97f5534df30cc5623e4dbe08"},{url:"assets/js/page-CommentFunction--6884a164.6616c629.js",revision:"47b7dec9046b7cba7b035b2c67d4c61e"},{url:"assets/js/page-Commonproblems--87e54bce.fae02626.js",revision:"08e969568cf40c863736bbd88e04ae62"},{url:"assets/js/page-ConfigDocs--2082c612.24fa6445.js",revision:"fd1658f20a072d0bccc10896d85ed6da"},{url:"assets/js/page-Customalignment--df6a559c.0357a9b6.js",revision:"333327f346e0985e8e7271cd32c9bf9b"},{url:"assets/js/page-DarkmodeandThemecolor--57fce360.b5444f08.js",revision:"8fbf3b99b3a53f96ae7714bbb8c326be"},{url:"assets/js/page-Demos--cac80116.e7664ece.js",revision:"d7d6221eb7d5066b2d2e201510c586fa"},{url:"assets/js/page-EmojiList--b946d226.7e49fb27.js",revision:"0a22202cd27ea3019c3ef16032658425"},{url:"assets/js/page-Emoji列表--41bb29b9.b5e52cf7.js",revision:"ce8df72356e9bbd4343b9274444226c1"},{url:"assets/js/page-Encryptionfunction--21c8c5d8.d73bc292.js",revision:"5d6846d51775cbf6e6a90bbd683421a1"},{url:"assets/js/page-FileStructure--5dff5230.10d53966.js",revision:"edd23aa32e0c312e11203f4d70ef5507"},{url:"assets/js/page-Flowchart--6426e412.78b330e3.js",revision:"2207f3696514ac3953214c02949d55ac"},{url:"assets/js/page-Footnote--3a89d162.1c630011.js",revision:"51734bd9ebadbd472dada69c226fe87c"},{url:"assets/js/page-HomePage--37b81ca8.52029981.js",revision:"b6089cce2e7853ec693b32462c1f7702"},{url:"assets/js/page-InstallUsage--5dafe67a.5b3014ca.js",revision:"fa3c62af17e65ae34fa38ad991e574f6"},{url:"assets/js/page-Introduction--0b048d19.1fc3437d.js",revision:"876914c9c27a088788027cd2ff6ddc40"},{url:"assets/js/page-Layout--655201fe.85255ced.js",revision:"da2cea6e52bd312c9f3ca0e153c759e2"},{url:"assets/js/page-MarkdownDEMO--ab10bb74.c01adb79.js",revision:"d65332e6074167ebb55c4fd15502ceb0"},{url:"assets/js/page-MarkdownEnhance--ed59a9f6.23ddab48.js",revision:"50a7e2460eaca7d21a4487f59f857d6a"},{url:"assets/js/page-MarkdownIntroduction--25c54f9b.57d8a5e3.js",revision:"316aabf398c5a83745c39fe86a20aa33"},{url:"assets/js/page-Markdown介绍--270989ce.98a95d7d.js",revision:"512dcf61ebf838085c98b0785f75593d"},{url:"assets/js/page-Markdown增强--ad9dba8e.12ad57ee.js",revision:"96c2bc05c41ac01a5d8701068ed0b2eb"},{url:"assets/js/page-Markdown示例--c3e1bfdc.0beddc70.js",revision:"a678bd1a1db6c7837450fed62a751933"},{url:"assets/js/page-Markup--4f1121f0.d525bd11.js",revision:"03caba63857daee9c4493dd0531e12f6"},{url:"assets/js/page-Nature--5c9d3e6c.dc96d886.js",revision:"af8e6a270d9885eb5be7d5f72193e888"},{url:"assets/js/page-NavBar--262632f4.714b459a.js",revision:"214d25879da0754031f645421d82db40"},{url:"assets/js/page-NewComponent--2edd3b68.667df086.js",revision:"595a14f0c1ae525a2f9356b843996445"},{url:"assets/js/page-Newfeature--3e66b879.1eb8a9cd.js",revision:"2ffd78ed36cf0cee0a433ea49ef18b36"},{url:"assets/js/page-Object--6d31953c.36da1e4a.js",revision:"eb660401ad62b5ba75492941dac9d302"},{url:"assets/js/page-Page--26692570.9e1ccf16.js",revision:"1dc243c7b5adb7679a00588a2679f54e"},{url:"assets/js/page-PageConfiguration--493c56dc.968fa374.js",revision:"c792d3d571341314146e67fd1eb0ca7a"},{url:"assets/js/page-Pageinformation--6abfca0a.824d43d6.js",revision:"b4d8b164d5a919915409a695583fc716"},{url:"assets/js/page-People--f94822c8.bc4da851.js",revision:"ab79d9828443b3d3add1a45ea7a2c378"},{url:"assets/js/page-photo-swipe--34ea45d2.00bd5220.js",revision:"1fa090438a5292b32bed6683decbcd3c"},{url:"assets/js/page-photo-swipe--7be1a0aa.4f6e1c26.js",revision:"78090f189ee661246c85ac79f5c80598"},{url:"assets/js/page-Place--32291f32.2186f1fc.js",revision:"1b20922529e7ae8b0d62b1b178f7ac4c"},{url:"assets/js/page-PluginDescription--b08a3ace.91e22d80.js",revision:"605143335e2f198481fd04db53546da0"},{url:"assets/js/page-Plugins--1a5ef242.b1d9c57d.js",revision:"a19f7911aa7161ff3b069231be976a7a"},{url:"assets/js/page-SEOandSitemap--13a48dac.a8148210.js",revision:"cd13010eb1207a6cd52172f0bed89ba1"},{url:"assets/js/page-SEO和Sitemap--5934b3b2.139a2633.js",revision:"6b24cb62aa75d14ea747e3d7d835e274"},{url:"assets/js/page-Sidebar--12800fd2.c602fd1c.js",revision:"78b463e8fe8e6c9c155ceb1d4e599abb"},{url:"assets/js/page-stylusconfiguration--189ec968.ffa851dc.js",revision:"78a1fb177f19bf8c47a4dd2894420baf"},{url:"assets/js/page-stylus配置--6796cdf2.5bf67106.js",revision:"fa971b2fc52346a00c3f3931cad9e3f9"},{url:"assets/js/page-SuperscriptandSubscript--d7f5f81c.36b4f8c1.js",revision:"c4849d9755575d9d77d0398275152acd"},{url:"assets/js/page-Symbol--0b92fe0a.64cb2b05.js",revision:"69b8d716e629b9888744d0b046f1c2e5"},{url:"assets/js/page-TexSupport--f897e69c.d515a8df.js",revision:"cb374093a27ef51d4c037f79d5d424dd"},{url:"assets/js/page-Tex语法支持--64cb5e50.b7d6da96.js",revision:"8068acd5c3206acf70629d8b2e53a9a7"},{url:"assets/js/page-ThemeConfig--085c2edc.c0941986.js",revision:"27f8c092de0aa1922c868c2fc56493bb"},{url:"assets/js/page-ThemeConfig--4715c95c.77e958b9.js",revision:"4a98385b5c7efec2ce32d87c0a612433"},{url:"assets/js/page-TSsupport--165630b2.68006dbc.js",revision:"71cb0eb37404dd26b9d43f06535676f5"},{url:"assets/js/page-TS支持--09728ac8.aa87e537.js",revision:"1009cde212efa4fe53891055a54775ab"},{url:"assets/js/page-Vuepress--4a71114e.06ddbf04.js",revision:"ff1824518bcceda1d9b73998a1123b68"},{url:"assets/js/page-vuepress-plugin-container--31498112.57de2662.js",revision:"99268cfe2790d7ca16d1e9e841145780"},{url:"assets/js/page-vuepress-plugin-container--f45c2334.7495dd9b.js",revision:"1cd36b54ae73d7edd80af3bc48daba4c"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.431bdd63.js",revision:"6048b8ad1cf433846ce151ef18670e29"},{url:"assets/js/page-vuepress-plugin-copyright--dac5744c.49b9830b.js",revision:"f4ce08a3743147ee3660668bf59d3e47"},{url:"assets/js/page-vuepress-theme-hope--776d8369.8d2918cd.js",revision:"81a8287d7f37d23555451af7e0ff7b98"},{url:"assets/js/page-vuepress-theme-hope--7f862af9.acdb7dbf.js",revision:"df8c971477e42853865e0347d4149980"},{url:"assets/js/page-VuepressCases--27d200c8.cd678133.js",revision:"ccb8452983b65835c4e5eb2405881afb"},{url:"assets/js/page-Vuepresscommands--7e89705c.6242d4f6.js",revision:"7173956edd7ebb34dbdfba15b15ba1a7"},{url:"assets/js/page-Vuepress案例--082972f2.3e657685.js",revision:"ee218ddda8a14082b4a7d9816229a768"},{url:"assets/js/page-上下角标--895c91b8.d4d5202b.js",revision:"a7a1dce0cdb93d733875880296701b92"},{url:"assets/js/page-主题配置--1120a0ce.b01ffb70.js",revision:"0631f89447a73e06a3a76eff64fab513"},{url:"assets/js/page-主题配置--1a859dfc.14b16b67.js",revision:"bd4d4ce2fe1c62ae64dc75ddb62577f7"},{url:"assets/js/page-人物--2182769c.b617682b.js",revision:"0cef00bf90fb328c734cb5f89e31e2df"},{url:"assets/js/page-介绍--d4910962.f8fc7091.js",revision:"723d86dd7f3e05f5b59c9d78480657f1"},{url:"assets/js/page-侧边栏--2fa1ea2c.41d53915.js",revision:"9f88cf13dfe6340ecf00de5f61ea44b8"},{url:"assets/js/page-加密功能--181bdc9c.653b1e8c.js",revision:"b53634d53a27bb6a93f0fd3d9bc151a3"},{url:"assets/js/page-博客相关--17c260a2.6f507c22.js",revision:"0621125f74ffd4afedf523a45eba7b8d"},{url:"assets/js/page-博客首页--64265752.7f6e441e.js",revision:"da7938965dbdeb3f1d20498706fecc9c"},{url:"assets/js/page-地点--951cdc00.eee0d34f.js",revision:"99866306db0ef69572f54b3a9654cfd0"},{url:"assets/js/page-基础知识--770cb96b.b5e13e53.js",revision:"d90580c149c1cb8d05ca7cbe38d9763e"},{url:"assets/js/page-安装使用--0ab466d2.bf6e8337.js",revision:"181ddad60b8886b5b2624ad0e4f68acb"},{url:"assets/js/page-对象--16031ab2.ad12928d.js",revision:"b6c411db212eb787080e0312b70422d5"},{url:"assets/js/page-导航栏--c7bf87dc.0e70fa69.js",revision:"39ce857a3d135218d06d2be978d36b37"},{url:"assets/js/page-布局--12bd4f0e.dc255300.js",revision:"97c94439cac4428437c0a443d4af42aa"},{url:"assets/js/page-常见问题--2b571e9b.dea28e13.js",revision:"b2cdaa6d02ee3f700e7554a9a7c906b6"},{url:"assets/js/page-插件--adbf415c.1be7941b.js",revision:"5c3d543a076be4483df26ce55945473c"},{url:"assets/js/page-插件说明--137c6c07.64e978cf.js",revision:"7692e9357a3f45d4b91529a1cbb75197"},{url:"assets/js/page-文件结构介绍--665a4f1c.e1481b20.js",revision:"3519c728fc4e6d953280efee4c105845"},{url:"assets/js/page-新增特性--5136c541.6cfcf3f7.js",revision:"df383f50803fac21aaa371abb7e0d2f0"},{url:"assets/js/page-新增组件--1d138c72.4caceb4f.js",revision:"743fcaea8a2792cf223635e46bd4a2a3"},{url:"assets/js/page-标记--6b1f341c.24ac2dfb.js",revision:"87553e0c1c2522065fa99a0264d54e6a"},{url:"assets/js/page-流程图支持--7ce6d974.245df2e7.js",revision:"1976f63d4359f162086bbda5ff7560cd"},{url:"assets/js/page-深色模式与主题色--e23e731c.54d33cdc.js",revision:"d1d0389a38a33ed298a12cb5e6385bbb"},{url:"assets/js/page-符号--a9259c5c.b3be3267.js",revision:"9aa6510679f2c5a0a88d75f785a0a4af"},{url:"assets/js/page-脚注--0c733e52.554eacee.js",revision:"a7d40e62fe55ab65de08b2334e8cd0d1"},{url:"assets/js/page-自定义对齐--4f21aa5c.4fc6f3ee.js",revision:"57d0500a7069c3f9c63ece842a2f1910"},{url:"assets/js/page-自然--749fb09c.ad62076e.js",revision:"4802a674dc16844e851d6565a3f3d970"},{url:"assets/js/page-评论功能--5bb6671c.6f9f11ab.js",revision:"2ac00d561dc742db29874c3a0f97b8c4"},{url:"assets/js/page-配置文档--35a0a7d9.0cf4c0df.js",revision:"2fd4af577d4aeb78fb9feb1bec2ef640"},{url:"assets/js/page-页面--af17b59c.8ecdf6dc.js",revision:"d72e4f0b6fd7c660b76e2b651ec4d57d"},{url:"assets/js/page-页面信息--71efd5d2.9675983f.js",revision:"16529e9d9a8afac07c7acc0e56e9667f"},{url:"assets/js/page-页面配置--0aacc152.3f2a8a8e.js",revision:"254bbbfa6e283722d528bc4e5adf4932"},{url:"assets/js/page-项目指令--9f3f316c.ceec52aa.js",revision:"ddb5dd4114dc80d1f4e0f53856e3aac0"},{url:"assets/js/page-项目案例--f328658e.1d96e48b.js",revision:"021138385bfeb43c18e8bb33470e5ff9"},{url:"assets/js/page-首页--5834599c.eef91513.js",revision:"84547068a4f045850e8f0ebab2f4a5f0"},{url:"assets/js/vendors~docsearch.c815669b.js",revision:"d53823faa8c3c6fa28aa67a03f94337a"},{url:"assets/js/vendors~flowchart.b4792c47.js",revision:"04aef69302a73c3971062bec38134195"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.e772bad8.js",revision:"4015238a404d5dd9889968f137264e4f"},{url:"assets/js/vendors~layout-Layout.8be1d9b1.js",revision:"61bdf43520ef65c98797733395d96f04"},{url:"basic/index.html",revision:"344e7d02ae601ee615a18f5a1ed33394"},{url:"basic/markdown/demo/index.html",revision:"818d49ce76ad54df00fdc6b95ef297ec"},{url:"basic/markdown/emoji/index.html",revision:"369de9370db4de7b5418e2dc21250bfc"},{url:"basic/markdown/emoji/nature/index.html",revision:"85329eac898dfacaedadba0fd495450e"},{url:"basic/markdown/emoji/object/index.html",revision:"a85f48b53d0162af5c69181bacb88330"},{url:"basic/markdown/emoji/people/index.html",revision:"98c5eb2afe3998357aedf51e07ec1d2c"},{url:"basic/markdown/emoji/place/index.html",revision:"41dcd2d2991cfc63dd839ab0a907c085"},{url:"basic/markdown/emoji/symbol/index.html",revision:"0a8f35e4e2af0569d1235b7506a03802"},{url:"basic/markdown/index.html",revision:"299a6d49d4e36ccc7d5e5cbf2b4ef60d"},{url:"basic/vuepress/case/index.html",revision:"7a0c52ad2db94829c917c0efa5ae057d"},{url:"basic/vuepress/command/index.html",revision:"7af64d373c2970995868c2f1c6383f16"},{url:"basic/vuepress/file/index.html",revision:"7c03a0321d80c588783a866b6fa2bc7e"},{url:"basic/vuepress/index.html",revision:"927a20f0b48bab3335f691e6af4ce62c"},{url:"basic/vuepress/plugin/index.html",revision:"ab7e04575d082787cb5daae4cbd27595"},{url:"basic/vuepress/theme/index.html",revision:"fdef5fcf72e078cf340c2e8dfdf64680"},{url:"category/basic/index.html",revision:"cdf5e986165664caa1fcc98eba66cfcd"},{url:"category/basic/page/2/index.html",revision:"d1f0224891b643e04eb1df6a8a72321c"},{url:"category/basic/page/3/index.html",revision:"b1520d35b5eba4630944368611e968d0"},{url:"category/config/index.html",revision:"27f1fac3793298f9ac1ffb1f0573034e"},{url:"category/config/page/2/index.html",revision:"82dcd3bb1e43b3fa3fc69d2f2faa540a"},{url:"category/config/page/3/index.html",revision:"37826881a5e020d5c22c6794ab40f47b"},{url:"category/demo/index.html",revision:"51319e6d6a45388b3ad45705455fd122"},{url:"category/FAQ/index.html",revision:"c2117cdd926af5bedacea409d52bac58"},{url:"category/feature/index.html",revision:"99c4ed79c0d69a12fb1e0b5832e31121"},{url:"category/feature/page/2/index.html",revision:"b6358e92f430c183aede5f3f8b18ca7e"},{url:"category/index.html",revision:"efcef14b13d933d44a1859c286686434"},{url:"category/instruction/index.html",revision:"a2d5314d0868ce7724e0811d57484b52"},{url:"category/layout/index.html",revision:"b83fc5c84d98f42cafe5446d20768ac1"},{url:"category/layout/page/2/index.html",revision:"2b5dbe40341811773a6a4aa122279df0"},{url:"category/markdown/index.html",revision:"c810d35a5f12a1c5c6d972c5d939e734"},{url:"config/index.html",revision:"e7f219a445d8ea33bafe492655a7ccf5"},{url:"config/page/index.html",revision:"f79131023fc2b202a33e9a72801514ad"},{url:"config/plugin/container/index.html",revision:"a6d5fecb96ccb4ea166a128b4a7d7181"},{url:"config/plugin/copyright/index.html",revision:"92981bf963c27ca3dbe4ba3efbaf70b3"},{url:"config/plugin/index.html",revision:"c247b4f90bb803ee6083a891aaf07745"},{url:"config/plugin/last-update/index.html",revision:"7cf6d690389a0e317f8e67933cd4aebe"},{url:"config/plugin/photo-swipe/index.html",revision:"7596f2917f283e4bdb109c811eef9cfd"},{url:"config/plugin/pwa/index.html",revision:"188d3ca0c261c6d6b768311035573034"},{url:"config/plugin/reading-time/index.html",revision:"5ae2750796aa6f471c632511ecd2eb9b"},{url:"config/plugin/seo/index.html",revision:"6401a6b99e1458e7e21a7b460bb7befc"},{url:"config/plugin/sitemap/index.html",revision:"bc18b2fbc4e11398dcc1704ed042d1b6"},{url:"config/stylus/index.html",revision:"946ed5f97339e044c12de751788ba458"},{url:"config/themeConfig/index.html",revision:"6208fb2335a45129cac052568f355b19"},{url:"demo/index.html",revision:"0e481f6f16669c7531e74b5706b3aa1a"},{url:"en/basic/index.html",revision:"6344f445154f6d0df59727ef48d2c1df"},{url:"en/basic/markdown/demo/index.html",revision:"1a52cda15f6372c7e1adcad866c7e2bf"},{url:"en/basic/markdown/emoji/index.html",revision:"55090bd0f0a38b9abe9278efbd406400"},{url:"en/basic/markdown/emoji/nature/index.html",revision:"9a9edf4e71954ac0417273d41fbd4a0d"},{url:"en/basic/markdown/emoji/object/index.html",revision:"82dc1e54181f619b925bbb8221dc1a8a"},{url:"en/basic/markdown/emoji/people/index.html",revision:"37177d648b82a49a12746966d7f76c0c"},{url:"en/basic/markdown/emoji/place/index.html",revision:"b91939ffaebbac0d912a052e2f6cacd8"},{url:"en/basic/markdown/emoji/symbol/index.html",revision:"8c3f12d83a1fb06d098e4f839b035dd6"},{url:"en/basic/markdown/index.html",revision:"333c901bc960821e7d44ea9c1d18557e"},{url:"en/basic/vuepress/case/index.html",revision:"178cc006f2af1bd1ae52058a7bdcbf35"},{url:"en/basic/vuepress/command/index.html",revision:"698644c072cbd06d90d555db1bcfa736"},{url:"en/basic/vuepress/file/index.html",revision:"d75ea86d709f2362aac1855bb2498c3b"},{url:"en/basic/vuepress/index.html",revision:"50537df598c82cf87ed8746429a9a49d"},{url:"en/basic/vuepress/plugin/index.html",revision:"363bcc77d4bca0fa1639f15227480268"},{url:"en/basic/vuepress/theme/index.html",revision:"63c1078f87f996b1ed997e0a97fdb18d"},{url:"en/config/index.html",revision:"57982665e5e46bd761fda0f0ff8f2d02"},{url:"en/config/page/index.html",revision:"da2e9c289e4825cf7f54c45c523862a1"},{url:"en/config/plugin/container/index.html",revision:"bf345d1db47fb0daae4ca0b58f62798a"},{url:"en/config/plugin/copyright/index.html",revision:"be701018889e01143a8b2d7ae6e9cdd8"},{url:"en/config/plugin/index.html",revision:"a40243d03e5fd7999037632c88a48026"},{url:"en/config/plugin/last-update/index.html",revision:"d8e6bccc1589d5c30308c1f630967d13"},{url:"en/config/plugin/photo-swipe/index.html",revision:"a4ee223ec95cc1528c1ed6f982ddbe94"},{url:"en/config/plugin/pwa/index.html",revision:"628298ffd958afc054d20cc860c4b0a7"},{url:"en/config/plugin/reading-time/index.html",revision:"cb10968b8b250fd466e79024e2c86a44"},{url:"en/config/plugin/seo/index.html",revision:"e229e8370193d297ada4a474fc22d345"},{url:"en/config/plugin/sitemap/index.html",revision:"1ea4942c3b3620060dde372b219490de"},{url:"en/config/stylus/index.html",revision:"13fdb58f5790a21e95d3cea76451aebb"},{url:"en/config/themeConfig/index.html",revision:"249b4387461f99d71a2ac869400a68ca"},{url:"en/demo/index.html",revision:"5d9461bfe7d1c6e41072c563e760a4fc"},{url:"en/FAQ/index.html",revision:"57fb80ddcf07f084d26ffad180d9f4d0"},{url:"en/guide/feature/blog/index.html",revision:"fa9c9875c700ddc4e9573964236b8f59"},{url:"en/guide/feature/comment/index.html",revision:"402c68f216a22d7f0c4d621ccde334fb"},{url:"en/guide/feature/component/index.html",revision:"ad6115b5349b4a55e88f79e1b209e468"},{url:"en/guide/feature/encrypt/index.html",revision:"f41cd3bb807705f5145581705f2cc175"},{url:"en/guide/feature/index.html",revision:"8de59af475def47aa4f4e0be8a4b16f8"},{url:"en/guide/feature/markdown/align/index.html",revision:"e065de98d591ff79e6aed6582e213c04"},{url:"en/guide/feature/markdown/flowchart/index.html",revision:"f726324b5e6646ca2342f0843999d768"},{url:"en/guide/feature/markdown/footnote/index.html",revision:"7b9a318073a7a31e1c6a6bfe6a6b17df"},{url:"en/guide/feature/markdown/index.html",revision:"b532d2f7360f0fe279452d09099a9263"},{url:"en/guide/feature/markdown/mark/index.html",revision:"858374e04c12d780b8661c8a3fd74535"},{url:"en/guide/feature/markdown/sup-sub/index.html",revision:"70d4e40018cf87366dababf9436416bd"},{url:"en/guide/feature/markdown/tex/index.html",revision:"ce721b2337958a6338eafc2a1e948e1a"},{url:"en/guide/feature/page-info/index.html",revision:"5cb984209932f99bc598225a91c3b8ed"},{url:"en/guide/feature/seoAndSitemap/index.html",revision:"ed73523d6437bab129697d7dea5b782c"},{url:"en/guide/feature/theme/index.html",revision:"7a93a99ef76a2df20369f82fc1b0f313"},{url:"en/guide/feature/typescript/index.html",revision:"da29ad9e2f61860f247c33f2ea555473"},{url:"en/guide/index.html",revision:"7a935188481c8450b97e958cb3d35d7d"},{url:"en/guide/install/index.html",revision:"0533de782e57197c5b76950eee6bdcec"},{url:"en/guide/layout/blog/index.html",revision:"7392277a0df24e426a0184aafabdc62b"},{url:"en/guide/layout/home/index.html",revision:"8d7ede3223cbb310740b29c4b19f600f"},{url:"en/guide/layout/index.html",revision:"ed98f3e427b1da792edb8a26ad2558a8"},{url:"en/guide/layout/navbar/index.html",revision:"df5419e0af457573f74db042e553bfc8"},{url:"en/guide/layout/page/index.html",revision:"0478860f74a410645c73c0daa411ed3a"},{url:"en/guide/layout/sidebar/index.html",revision:"81760d336ef422f8957c21754cbecf81"},{url:"en/index.html",revision:"8086b28d6f11b10b421f3a8e703596bb"},{url:"FAQ/index.html",revision:"8f07a57dbd35ba442518f93d2674a23b"},{url:"guide/feature/blog/index.html",revision:"c123a1e6517847c2a3c6ff7b25d4ea4a"},{url:"guide/feature/comment/index.html",revision:"e08059c452942051e2f780e03ef9ed7f"},{url:"guide/feature/component/index.html",revision:"a5cdd045d743bf1dc84a129629606869"},{url:"guide/feature/encrypt/index.html",revision:"1c9bee7f62bd37c2ce111235c7f1132c"},{url:"guide/feature/index.html",revision:"1a655774b1121e62c17b9afc69f2dfe7"},{url:"guide/feature/markdown/align/index.html",revision:"f2887934c20c88be045606e6acf6a245"},{url:"guide/feature/markdown/flowchart/index.html",revision:"09b247af1f0fd88f36f45fcb92ecb4a5"},{url:"guide/feature/markdown/footnote/index.html",revision:"87225542adb9163e91c2b248d72377a9"},{url:"guide/feature/markdown/index.html",revision:"185a6ce55b15dad842ff7627ec018640"},{url:"guide/feature/markdown/mark/index.html",revision:"4d96aec7c63d0e0648fa419538dc69de"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"9165d7ff885e6c2c6aa102390e97169a"},{url:"guide/feature/markdown/tex/index.html",revision:"8f21b62b0d73a29e3165cf18c6958160"},{url:"guide/feature/page-info/index.html",revision:"55b60a36474a46d0dd2705d4825bd20a"},{url:"guide/feature/seoAndSitemap/index.html",revision:"7e6a0568317aa239e5014243ac0d73eb"},{url:"guide/feature/theme/index.html",revision:"be7966a0d2f2f5ff3c90b07d120636ee"},{url:"guide/feature/typescript/index.html",revision:"f6efc9172387ace5662ac45eaec5d60f"},{url:"guide/index.html",revision:"bb39a63293ed83152f6fd7d674791876"},{url:"guide/install/index.html",revision:"3386cbdac0e5bb2fe0601eb4c2514d82"},{url:"guide/layout/blog/index.html",revision:"fcd729e6758a0977407f50e11e296e22"},{url:"guide/layout/home/index.html",revision:"f815a4fb584d580ac9d588a3f2bba4f2"},{url:"guide/layout/index.html",revision:"e487e2638ec56ad7e0d29629a700bb13"},{url:"guide/layout/navbar/index.html",revision:"53c1d4f3031190c3eb84c0f13ba5e4ec"},{url:"guide/layout/page/index.html",revision:"35cc8d8d43d9b05d38f9884567c91840"},{url:"guide/layout/sidebar/index.html",revision:"98183a8a1dca1881ce918766309c59fd"},{url:"index.html",revision:"f40907f2341f6863a4a223beca04240e"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"tag/blog/index.html",revision:"0593c7131be775f4fe2fc0b38b8d2632"},{url:"tag/comment/index.html",revision:"bcdba2a61720c3b3be017bc1ce7a8afb"},{url:"tag/components/index.html",revision:"ee4b8e269ba21c6461af03d887b23da0"},{url:"tag/config/index.html",revision:"fdf84786c33fa5422d11ceab20eec787"},{url:"tag/config/page/2/index.html",revision:"277733fad683f523252230049ec5bf31"},{url:"tag/config/page/3/index.html",revision:"a3141a3afec9bc5a7e2eb011ddffd625"},{url:"tag/emoji/index.html",revision:"c3a24d2999c7c7925ad0bb9a4ed920f1"},{url:"tag/emoji/page/2/index.html",revision:"ca583f970424cc6cd07fc75ed200c454"},{url:"tag/encrypt/index.html",revision:"663ab7e623d7476ddb1c858d1d3395a8"},{url:"tag/feature/index.html",revision:"1e83c48f36ea0ad7872bd8201861ba12"},{url:"tag/feature/page/2/index.html",revision:"3f4dccf7978dd5f442169fce49d1b3c8"},{url:"tag/frontmatter/index.html",revision:"26db2affd2b9dac6dfb8841159d2cdff"},{url:"tag/function/index.html",revision:"3aa76da5051f81e1fb36b0665ee259df"},{url:"tag/function/page/2/index.html",revision:"494792ab797bf7019b7f2b88c96fe667"},{url:"tag/home/index.html",revision:"30a0f91b1a4e489983d1730bee39d2fd"},{url:"tag/index.html",revision:"8e30fe0cf9256517912cfc1c3b85e453"},{url:"tag/intro/index.html",revision:"444e38546774752afbf0e9c96ed5ba9a"},{url:"tag/layout/index.html",revision:"5cc62e64151559162b6a81c659f98852"},{url:"tag/layout/page/2/index.html",revision:"d9e63d7a8b36f92f0de61a6f2b3c0f71"},{url:"tag/markdown/index.html",revision:"a0ac0e8bcbac8a71d9ca69c174808f14"},{url:"tag/markdown/page/2/index.html",revision:"df09c730110899e5e2d5265faa850c2a"},{url:"tag/markdown/page/3/index.html",revision:"0ade799d25b2380655d7c0f369d4c99f"},{url:"tag/navbar/index.html",revision:"84271d851140b6b265edede1b63df750"},{url:"tag/page-info/index.html",revision:"b593bdd6dba81bff3731c798b4452746"},{url:"tag/plugin/index.html",revision:"8af26d2ed9fd06ff194097c95b491b58"},{url:"tag/plugin/page/2/index.html",revision:"1c8709b7cc86ae08f14151690e9e692a"},{url:"tag/seo/index.html",revision:"96342a2cfcf3cc4df4aa6f9fb69199a3"},{url:"tag/sidebar/index.html",revision:"c163feccb49516f2733b3d255e397f9f"},{url:"tag/sitemap/index.html",revision:"8e3703ca3cf66c88d35f1946477f6624"},{url:"tag/style/index.html",revision:"624061595d0eef605af665e38cb27e83"},{url:"tag/themeConfig/index.html",revision:"f94065a75a5237a0236182cbd7454598"},{url:"tag/typescript/index.html",revision:"5068d7fe6e67c9a085af06234590a314"},{url:"tag/vuepress/index.html",revision:"e9d0c7e65fa352831d7b64d49d930786"},{url:"tag/vuepress/page/2/index.html",revision:"06f2ec07f47982ea29e167d82f26d883"},{url:"timeline/index.html",revision:"ece79e6eb1b632244e117ac906f7904d"}],{})}));
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
