if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}})).then(e=>{const s=c(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-60b22648"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"api/index.html",revision:"5f378cf91d5785674813e4876be52b0c"},{url:"api/page.html",revision:"6a99c49f91d4c32399098584c0bf92df"},{url:"api/plugin/container.html",revision:"ad21b5982c2c835ffc1a2f0fb1a3ea4a"},{url:"api/plugin/copyright.html",revision:"d7ef5b6169c5ac6c29cc9aad83b38a15"},{url:"api/plugin/index.html",revision:"08fc985154135c12e2c6496d2d96b5ff"},{url:"api/plugin/medium-zoom.html",revision:"1238c9a0b5bd29c63ed6175103df544e"},{url:"api/plugin/pwa.html",revision:"4e5e466d937459fbaa8bd30f76478b40"},{url:"api/stylus.html",revision:"17c7d48790a2543a4b50ad85ff2d690d"},{url:"api/themeConfig.html",revision:"136d7493a664874a91b19303f9a25829"},{url:"assets/css/0.styles.ac76a11a.css",revision:"f8a445ac9ea4a6497695434c3b650d5a"},{url:"assets/fonts/MathJax_AMS-Regular.07173fb7.woff",revision:"07173fb77d2ee655811499d40c8388e7"},{url:"assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",revision:"bc42125861bd5bfc8686deeb612dcbb3"},{url:"assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",revision:"b80e08d5a79acbd1fafb1ca6f3515664"},{url:"assets/fonts/MathJax_Main-Bold.c9423d5d.woff",revision:"c9423d5dc9d82a38ca215f74e9cdd9f2"},{url:"assets/fonts/MathJax_Main-Italic.7e83626b.woff",revision:"7e83626ba8bf2d20dc41565f1e6d0afc"},{url:"assets/fonts/MathJax_Main-Regular.9995de47.woff",revision:"9995de4787f908d8237dba7007f6c3fe"},{url:"assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",revision:"77dbcee3c3d9a82a0c04a4ae7992b895"},{url:"assets/fonts/MathJax_Math-Italic.5589d1a8.woff",revision:"5589d1a8fc62be6613020ef2fa13e410"},{url:"assets/fonts/MathJax_SansSerif-Bold.07281897.woff",revision:"07281897a98a61c3733e1670f82a9fd5"},{url:"assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",revision:"3d580bd561716bfb1f0b4fdd7063a802"},{url:"assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",revision:"bc3af04f9a671fcabd6498042c57478f"},{url:"assets/fonts/MathJax_Script-Regular.4c74e33b.woff",revision:"4c74e33b0feb1fdbda49403a5e7ed604"},{url:"assets/fonts/MathJax_Typewriter-Regular.72815766.woff",revision:"72815766b08ca24d4d29ad1f5d4ecb45"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/nightmode.73215ae2.png",revision:"73215ae22b72654917bb26f315d7d47c"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/95.26e820de.js",revision:"9589a924083730dfff4c4869d1388257"},{url:"assets/js/96.72edbade.js",revision:"ac4c77fce26f9cf7ab9e2ce28551dfdc"},{url:"assets/js/app.cd23789f.js",revision:"1d816465e5df6ec587244bb300ec8db1"},{url:"assets/js/layout-BlogEntry.e556bb87.js",revision:"b36f348b8791b990cef0c8ee05f41be0"},{url:"assets/js/layout-BlogEntry~layout-Category~layout-Layout~layout-Tag.930abc9c.js",revision:"f4cddba07934f197f54c492360814bdd"},{url:"assets/js/layout-BlogEntry~layout-Layout.812163a4.js",revision:"102045403f2dc06974fca8d8edc7c8ad"},{url:"assets/js/layout-Category.28301364.js",revision:"f0acf27d1a9ffc5d433e3dbdaa8a01c1"},{url:"assets/js/layout-Layout.965ad73a.js",revision:"80b945cdc901101ef31a19967f18fada"},{url:"assets/js/layout-NotFound.f70b4246.js",revision:"266d5de87f979cf12fcbf3436ed461af"},{url:"assets/js/layout-Tag.e1e70117.js",revision:"b9879c00095724cca4bc34abf1e75d0b"},{url:"assets/js/page--1b278726.31cd51e2.js",revision:"0237d42d90f8cda0884475f2ca4d941d"},{url:"assets/js/page--24b68849.ef086c4d.js",revision:"19905fad53bbf38b29c927045892c7ec"},{url:"assets/js/page--298eb4e9.4c146b65.js",revision:"f8424f05e77d1daaf7bf3497ec607ced"},{url:"assets/js/page--33732ef1.a2f2db56.js",revision:"960eb15c1d9c7e33ffc4b4d6089c480a"},{url:"assets/js/page--608d80cf.a32939ff.js",revision:"a13f4ad2ce9d31b0335644e91b6f29da"},{url:"assets/js/page--b64dd6ee.011557b2.js",revision:"c9dc3e242cb32df70cc2a1805ab8f635"},{url:"assets/js/page-About Vuepress.90da81c8.js",revision:"bb090ffa4606754d5662852e7f8e3f72"},{url:"assets/js/page-API Docs.9b4caddb.js",revision:"82ee5d21738b8e48cd152875e4b7c659"},{url:"assets/js/page-API 文档.a0ecb9cc.js",revision:"cff61d365da5568db76038de18a7c75b"},{url:"assets/js/page-Basic.a4126e3d.js",revision:"8cbd80243e77560043983750fbef8453"},{url:"assets/js/page-Breadcrumb.6653d5b0.js",revision:"a1d298c70cece43647e58999fe4c2adf"},{url:"assets/js/page-Comment Function.45377880.js",revision:"2f720bdaf6bbf9bd57a587d62714340e"},{url:"assets/js/page-Default Theme Config.0b11575f.js",revision:"2e02e44c320819a1c10c42db27c3be78"},{url:"assets/js/page-Emoji List.7cf0d556.js",revision:"e67d14d263c9d5e03aeb23d32937d798"},{url:"assets/js/page-Emoji列表.b6930ae6.js",revision:"0377fd81da5fc8390a150e321a1a24ef"},{url:"assets/js/page-File Structure.e4062d43.js",revision:"9b85698268e3bbcb1fc4122e3fe8432c"},{url:"assets/js/page-flowchart.117fa250.js",revision:"a55ca5d8b1e08f353076a6a0af803342"},{url:"assets/js/page-Footnote.0da39a8e.js",revision:"19d2007cd163a4da7c1e7f3227966430"},{url:"assets/js/page-Fullscreen Button.7fc971ae.js",revision:"be1c56d0cf0c742a67875ad6c8ba0816"},{url:"assets/js/page-Home Page.91ff5032.js",revision:"b9fb20e1b60f73061897e3a1c382f988"},{url:"assets/js/page-Home.364674f9.js",revision:"3dc68a5fad83f86c06a2e0c9f95797cc"},{url:"assets/js/page-Introduction.d6b4560b.js",revision:"601b1da356af99be23a9dc31b561a9ab"},{url:"assets/js/page-Markdown DEMO.0a12d8d3.js",revision:"3d187530d23298226137ace774bc4098"},{url:"assets/js/page-Markdown Introduction.75405f9e.js",revision:"4b7ec2fff4dba72662e4a33cc9ad8b79"},{url:"assets/js/page-Markdown 新语法.86418b76.js",revision:"2cadc3d18832f2b80ec326940fe8c83a"},{url:"assets/js/page-Markdown介绍.5ef3f05b.js",revision:"d28f50926a047fc7a80ffffee7d39c3f"},{url:"assets/js/page-Markdown示例.68accb74.js",revision:"855ef8ac77a755ce4ac26f064a88c629"},{url:"assets/js/page-NavBar.3230baee.js",revision:"6b3c38d27ee3879f6bd561acfc034934"},{url:"assets/js/page-New Component.f459698a.js",revision:"c5a941c264347b177e9130d4288fa611"},{url:"assets/js/page-New syntax in Markdown.488adc6e.js",revision:"1150970c228fe34eff09be9cef7120a4"},{url:"assets/js/page-Page Configuration.29fd8dd3.js",revision:"b59ad0eb5a75d19e8cf0f1bdfcbdfbd4"},{url:"assets/js/page-Page.cfe568c2.js",revision:"4a0a7f66925dd49e252be0a1c3f01dbd"},{url:"assets/js/page-Plugin Description.58215972.js",revision:"ec2244b3b432e998974ff1f4b745f795"},{url:"assets/js/page-Plugins.0d2817f5.js",revision:"047d3d9bc8d163ec6b73863a77872628"},{url:"assets/js/page-Sidebar.de985cfc.js",revision:"edb59a07315f224e642452da82bd6b20"},{url:"assets/js/page-stylus configuration.91e4d137.js",revision:"f85468db03e374c711af837996e1f30a"},{url:"assets/js/page-stylus 配置.85e1fd98.js",revision:"c9dd8e801bbcdac48e3b0b3160c154e4"},{url:"assets/js/page-Superscript and Subscript.8b1ac37d.js",revision:"4fdb295002295587dc42c0d548434c32"},{url:"assets/js/page-Tex Support.f3f86d0c.js",revision:"678c9cbb0c0474b18c78a9afd59e1f82"},{url:"assets/js/page-Tex 语法支持.4357b81a.js",revision:"5b1736ad3adef4774b659c3317ecebc3"},{url:"assets/js/page-Theme color and Night mode.02d0be59.js",revision:"b0c337ee2468a4deb86ccc801c4f3cf9"},{url:"assets/js/page-Theme Config.a6f45892.js",revision:"b0270ffd63f24d85b42943fa361d5066"},{url:"assets/js/page-TS 支持.15b9113e.js",revision:"505f30e37c7fab4714694035620afe1b"},{url:"assets/js/page-Vuepress Cases.8fe1b74c.js",revision:"2679739acd5b95e8ccc84f62a0394300"},{url:"assets/js/page-Vuepress commands.6c0e9bf1.js",revision:"82fceed0c8bb69e24e7452c34c61285e"},{url:"assets/js/page-Vuepress 案例.5d1bfcd4.js",revision:"39c01407314e3b3df46a963db3cc79ec"},{url:"assets/js/page-vuepress-plugin-container.ba14f37f.js",revision:"bb16eb3c190743ea7b9e0280dc08ff17"},{url:"assets/js/page-vuepress-plugin-copyright.00fe4503.js",revision:"3837e936e0955893de4c70b45078cfaf"},{url:"assets/js/page-vuepress-plugin-name-chunks.8aa1c932.js",revision:"a33946d4d30f98b40d2b91aee0bc19a2"},{url:"assets/js/page-Vuepress.4f6ce0aa.js",revision:"dd9200bebcd3f406e2ef710b2131136b"},{url:"assets/js/page-Writing a theme.a9b4977b.js",revision:"50f038d6e121d9d75e3b7a3ac2fba911"},{url:"assets/js/page-上下角标.be8d03c5.js",revision:"cd04c085a94b62087395ccc40346e196"},{url:"assets/js/page-主页.a1e13350.js",revision:"660d31230541451521b1068ac1e88d33"},{url:"assets/js/page-主题色与夜间模式.a37001f9.js",revision:"185cbcba3acad824b4cc205bec881af3"},{url:"assets/js/page-主题配置.1208c16c.js",revision:"86ea5e05553c2d6f460fff8101aa853c"},{url:"assets/js/page-人物.391ea72c.js",revision:"55bb64912165c8d02163f2f26f0b66c5"},{url:"assets/js/page-介绍.51b26b5b.js",revision:"47cc8ecaa9d756ffac2d70d0bbe25144"},{url:"assets/js/page-侧边栏.d9529881.js",revision:"db4b518986ca28921732730e34928990"},{url:"assets/js/page-全屏按钮.91548182.js",revision:"6a0e0b6f8c0d6e53324fe8e01f25788b"},{url:"assets/js/page-加密功能.690c6e58.js",revision:"f6b167dbb273fa5913f602a0daffc368"},{url:"assets/js/page-图标支持.0a96ed80.js",revision:"e6ba41d38db33b939694d3f68ca040bd"},{url:"assets/js/page-地点.9b339f44.js",revision:"187b192a43602c44c441b5b4cf0ec3c8"},{url:"assets/js/page-基础知识.da585964.js",revision:"eae7190ccc30c91a9e9f11527723e9ba"},{url:"assets/js/page-对象.e6240f4e.js",revision:"d72e0678d836e754d16adef4f4700392"},{url:"assets/js/page-导航栏.3a4cb2df.js",revision:"fe5643383ce8c796a81bb9edfcc9d982"},{url:"assets/js/page-布局.0986b589.js",revision:"711b9ce954c1b3227ab2541fb7b58d20"},{url:"assets/js/page-常见问题.2249e832.js",revision:"532edb1f3ca985450474fecf19f7bcc7"},{url:"assets/js/page-开发主题.5d0ca368.js",revision:"5688c937177497ac0b9101502b1143dc"},{url:"assets/js/page-插件.0639b141.js",revision:"0b21a841cc6ed238268e921a1969fd9f"},{url:"assets/js/page-插件说明.388a5262.js",revision:"ca65b38800f4f43561b75f7461bc70e1"},{url:"assets/js/page-文件结构介绍.db217629.js",revision:"011495b3d19fd5104e35a418082f030e"},{url:"assets/js/page-新增特性.7791e6c5.js",revision:"aa3227db6e09f21a5f0615fab0f26020"},{url:"assets/js/page-新增组件.fa3638f5.js",revision:"d812f9774f4f2e4bf157ea9b4eafd926"},{url:"assets/js/page-流程图支持.4161af17.js",revision:"07be4831723c36a0c22892221f1df9fd"},{url:"assets/js/page-符号.d4c88670.js",revision:"aca1ba608b4c1e9652c47b176117b1f3"},{url:"assets/js/page-脚注.a1cf1f16.js",revision:"ad653d26bd61e5c5ffdb72436fd671be"},{url:"assets/js/page-自定义对齐.9bf45399.js",revision:"7b1cba57163d7721b82c2803cdf68aa2"},{url:"assets/js/page-自然.85bc0898.js",revision:"e607a3ae1783b0f605d54920d3420d86"},{url:"assets/js/page-评论功能.db39b6de.js",revision:"51d4ad40b42a37606b8eeed1927fdeb4"},{url:"assets/js/page-路径导航.0bfaa655.js",revision:"5a119410be2062b6db7c496a93b67740"},{url:"assets/js/page-页面.ae0749ef.js",revision:"da003a237640d95ad9af0ee0f153bde8"},{url:"assets/js/page-页面配置.f39e1a28.js",revision:"fce788e09772897719f7048557afdedb"},{url:"assets/js/page-项目指令.80622edf.js",revision:"7cfdf46fbf65875c27935f8be8fb6cd5"},{url:"assets/js/page-默认主题配置.968d8ba3.js",revision:"968ec136837a7f864a9e1eb3c82498b9"},{url:"assets/js/vendors~docsearch.c496049b.js",revision:"cbff036c46b2a239f409d4bd0ab95cd3"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.9031ec46.js",revision:"92d2ae3512b6ee749873130a947c49b7"},{url:"basic/index.html",revision:"c7dcadb462bde436239dc28ca9cb65c8"},{url:"basic/markdown/demo.html",revision:"9f9498f7884e62ba3f7db9734eec91f2"},{url:"basic/markdown/emoji/index.html",revision:"39c23a4f654c5534a968296b3d5dd74f"},{url:"basic/markdown/emoji/locate.html",revision:"96bcde1421f0bdb4742327c117afb625"},{url:"basic/markdown/emoji/nature.html",revision:"ec8591350ccd1aab6a68e199b0e7bfdc"},{url:"basic/markdown/emoji/object.html",revision:"b596ab43288eb4998905454e0ab23987"},{url:"basic/markdown/emoji/people.html",revision:"26eca0fbffb8f38d1aa28643fb8093f6"},{url:"basic/markdown/emoji/symbol.html",revision:"7373d08acbdd30da59ae56df8a7a6552"},{url:"basic/markdown/index.html",revision:"7376980224138d0b4759bb6b4f1539ce"},{url:"basic/vuepress/case.html",revision:"e9106a6085e7511d1a93c80ba930ff8f"},{url:"basic/vuepress/command.html",revision:"21d6bf34736b832ed097823ab3e133a1"},{url:"basic/vuepress/file.html",revision:"6146269feb72ae02f28f0eda6b36de08"},{url:"basic/vuepress/index.html",revision:"3f7ad8cd17feba3463fc772d39c085cd"},{url:"basic/vuepress/plugin.html",revision:"b52474ee33e6a7366695300388aed031"},{url:"basic/vuepress/theme/config.html",revision:"f0a0020e45553b9c2234c4252eed4fa6"},{url:"basic/vuepress/theme/dev.html",revision:"dd86a6b9d73b3c85001991bf4ea83ebb"},{url:"basic/vuepress/theme/index.html",revision:"39188bf50f79559b7664110a31860037"},{url:"category/api/index.html",revision:"9906b6033fcbe005b0bccb2aef0f4056"},{url:"category/function/index.html",revision:"c477f1b34437c0d19d60949f12ea0360"},{url:"category/index.html",revision:"3038b24658c20f26a5aedd00730a6dcd"},{url:"category/instruction/index.html",revision:"fed1506a7e80dddf0e7e4cfb45166384"},{url:"category/layout/index.html",revision:"22df63dab1cfeddae18fe1867fcddcd2"},{url:"category/markdown/index.html",revision:"c386187461bfba5380e94ace30138828"},{url:"category/style/index.html",revision:"c17c362cdd56700c0cb1cb79bbc643bc"},{url:"en/api/index.html",revision:"11752e9a168456ccd99ba05bd6e7fef0"},{url:"en/api/page.html",revision:"97b609a7f2a1d55389f736ec1d0b706a"},{url:"en/api/plugin/container.html",revision:"d2357bce2f7880d46e18bcfe5c58f89b"},{url:"en/api/plugin/copyright.html",revision:"400dc09c6b9c0d9f3b42f9b1c979021c"},{url:"en/api/plugin/index.html",revision:"e2482e28909b25a52fc3f7732a29e134"},{url:"en/api/plugin/medium-zoom.html",revision:"9bffcf0b9ea1f926f3ebb753061c8107"},{url:"en/api/plugin/name-chunks..html",revision:"2055c341a9632ea22e96bcf0e94f1838"},{url:"en/api/plugin/pwa.html",revision:"972ab1166f077f7a3595101a014d54f8"},{url:"en/api/stylus.html",revision:"b4d7b6d7113232e8bba22beed3407e27"},{url:"en/api/themeConfig.html",revision:"c9cec77f8ad4e58793344e16a8d50329"},{url:"en/basic/index.html",revision:"ed62e48586aa892e33f8d1e646499a91"},{url:"en/basic/markdown/demo.html",revision:"8703b584e949ddcf24c9c158266c9073"},{url:"en/basic/markdown/emoji.html",revision:"9134f066f6662d64391acf768f44fa37"},{url:"en/basic/markdown/index.html",revision:"b99386bdfc88ead0b929d87cd010fc93"},{url:"en/basic/vuepress/case.html",revision:"c4e1dc4d33306b8299a88d93ff458c73"},{url:"en/basic/vuepress/command.html",revision:"cd62473c05b27b8b9355cfbd80e81224"},{url:"en/basic/vuepress/file.html",revision:"287b0ab27d610686747f2748e11af6dd"},{url:"en/basic/vuepress/index.html",revision:"d70fe19dabc78ccf2bdcfcbdfce8439a"},{url:"en/basic/vuepress/plugin.html",revision:"169227f05f7de0efe1f34a857688891c"},{url:"en/basic/vuepress/theme/config.html",revision:"19db0a39d8e59563cd3c35ac27a4b151"},{url:"en/basic/vuepress/theme/dev.html",revision:"8005d01aca73d51b9207e587a93a000b"},{url:"en/basic/vuepress/theme/index.html",revision:"cea350ca6e2aa0b7f28380f64c46bb0f"},{url:"en/guide/breadcrumb.html",revision:"c97d0459e21c423bec9de569191f1151"},{url:"en/guide/comment.html",revision:"fbc284d5678a4d10e74b464ed26d524e"},{url:"en/guide/component.html",revision:"7b401da7af2d327551240e8f05a4e93e"},{url:"en/guide/fullscreen.html",revision:"3c448cc6448435f310670b6d70a33108"},{url:"en/guide/home.html",revision:"91440d20fbeb4ccec1c485010dd8fe0c"},{url:"en/guide/index.html",revision:"fa7e88ffb1d9af7a019ebfed3b479e92"},{url:"en/guide/install.html",revision:"88f1786b6276016a49293dcd8a775fb6"},{url:"en/guide/markdown/flowchart.html",revision:"10df3084a0ed504986cb9fe2a8648573"},{url:"en/guide/markdown/footnote.html",revision:"d2bfa5f2078aed0f33d0bd990973514c"},{url:"en/guide/markdown/index.html",revision:"2515de6398bc219c6f5eead8237ed70b"},{url:"en/guide/markdown/sup-sub.html",revision:"b0225f79358bbf5cfac01e49e88671c4"},{url:"en/guide/markdown/tex.html",revision:"2a1c9bc0e916e9bd955ea9c9ef1273a5"},{url:"en/guide/navbar.html",revision:"69f41e38843cb2c6eaea2f323e7a4504"},{url:"en/guide/page.html",revision:"bad27d095cdb63d352cc65a1929ac33c"},{url:"en/guide/sidebar.html",revision:"e64d7037c86ee7d24d0bda40a3605a32"},{url:"en/guide/themecolor.html",revision:"8f70a9a18da245624a7a547b3d0b1f82"},{url:"en/index.html",revision:"44a710f622d5c55e2a2a5ceb78ed8c7b"},{url:"FAQ/index.html",revision:"22be75fbb277a7cc49bec0913f93b40a"},{url:"guide/feature/comment.html",revision:"2f3fb37a949fa81b11358aec0e3647b8"},{url:"guide/feature/component.html",revision:"6801e2cc844a1a58f778db8141164e65"},{url:"guide/feature/encrypt.html",revision:"db58b7afdc9af34fc10eba2f62153c74"},{url:"guide/feature/fullscreen.html",revision:"e6969d351809ef846413ac7ac99ffae3"},{url:"guide/feature/icon.html",revision:"94b3faecb94f51a79b4fef7612c91773"},{url:"guide/feature/index.html",revision:"e2894bcf7aa418e1c671a333b97f025a"},{url:"guide/feature/themecolor.html",revision:"78b51a146ff3cf667e6318548226791f"},{url:"guide/feature/typescript.html",revision:"6df9a8a7075e50e463bcc17212738355"},{url:"guide/index.html",revision:"0f1e05ad871c7934c51b78c83d7042e8"},{url:"guide/install.html",revision:"49c7d50cbbb524efec40148da081f656"},{url:"guide/layout/breadcrumb.html",revision:"01bb384515eb63ea79c0b3d257933b6d"},{url:"guide/layout/home.html",revision:"096b9ff1ceeb6721816974ad5fba2a36"},{url:"guide/layout/index.html",revision:"136bfcfc62f0e6ea18626e0b472e910d"},{url:"guide/layout/navbar.html",revision:"c555c564cec40a2b1cccfd9ee53ada8f"},{url:"guide/layout/page.html",revision:"80c813f48a59e872da86e870bebd2075"},{url:"guide/layout/sidebar.html",revision:"b6e535abe4fb8a5be7f1bc77176cff6e"},{url:"guide/markdown/align.html",revision:"e4cb66b404c245845006030788759824"},{url:"guide/markdown/flowchart.html",revision:"95fed35b900600cb79dff2f30c0f7680"},{url:"guide/markdown/footnote.html",revision:"bc4e6fbeb5b6232b1db5887f64b01bc6"},{url:"guide/markdown/index.html",revision:"2d9ad672cf6f83ff313fdccaf70fd5b8"},{url:"guide/markdown/sup-sub.html",revision:"b6000f409b76a01ac67b6f5a780f42af"},{url:"guide/markdown/tex.html",revision:"480ded3b9eedf4bf7e12f3ad62826ebf"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"7d305729effd8475234e87264431b183"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/api/index.html",revision:"d506bef8a6d777078578cd7751376bbd"},{url:"tag/comment/index.html",revision:"45eb9455718e8298282732bc8441fd22"},{url:"tag/component/index.html",revision:"d190965ed5745a2c599ca68a85d7e4c8"},{url:"tag/components/index.html",revision:"f56ee7c3d0f0782cae4b65686a59ad33"},{url:"tag/emoji/index.html",revision:"76b95d7940edc6cd3a008defbfa921a4"},{url:"tag/encrypt/index.html",revision:"01398a76d2211aa16d33b019e2c562d9"},{url:"tag/enhance/index.html",revision:"20474cf76e4374991b27b8af3089dacc"},{url:"tag/frontmatter/index.html",revision:"37e71a1705f8dd0b75e0de3db7353942"},{url:"tag/fullscreen/index.html",revision:"8f8d09648dcbd4137888cecd35e3f70b"},{url:"tag/function/index.html",revision:"3df3705f0c88b2407ee0a85f7f0f9eed"},{url:"tag/home/index.html",revision:"c8efbdc1cfb45ba333f31db8420b6e44"},{url:"tag/icon/index.html",revision:"c59336bdf07570808eb336371f793ccf"},{url:"tag/index.html",revision:"1181ee0bbb3416f6f3ff0bb06b50ecda"},{url:"tag/intro/index.html",revision:"0abfde4aca6240429b35b3188fe5c99d"},{url:"tag/layout/index.html",revision:"c9af2c8218b9f7e534a729c0a7d6696c"},{url:"tag/markdown/index.html",revision:"f6ac46bdf9d4b1971b93ad18b5234538"},{url:"tag/plugin/index.html",revision:"18144d2e29e8f3e9e22909669c0a13aa"},{url:"tag/style/index.html",revision:"c19bb9e6963cda6bb426dc889791b54c"},{url:"tag/themeConfig/index.html",revision:"527482122eec13a61b3e54c609a38260"},{url:"tag/typescript/index.html",revision:"457ea4350357c22730854366c1f5794d"},{url:"tag/vuepress/index.html",revision:"03a8de6522e7387f37db7bbb28b1c7af"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener('message', event => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    );
  }
});
