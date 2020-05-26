(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{609:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mr-hope-seo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mr-hope-seo"}},[t._v("#")]),t._v(" @mr-hope/seo")]),t._v(" "),s("p",[t._v("这个插件会向你的网页注入 "),s("code",[t._v("<meta>")]),t._v("，来增强你网页的 SEO。")]),t._v(" "),s("h2",{attrs:{id:"插件选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件选项"}},[t._v("#")]),t._v(" 插件选项")]),t._v(" "),s("h3",{attrs:{id:"twitterid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#twitterid"}},[t._v("#")]),t._v(" twitterID")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("必填: 否")])]),t._v(" "),s("p",[t._v("填入你的 twitter 用户名")]),t._v(" "),s("h3",{attrs:{id:"restrictions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restrictions"}},[t._v("#")]),t._v(" restrictions")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("必填: 否")])]),t._v(" "),s("p",[t._v("内容的年龄分级，格式为 "),s("code",[t._v("[int]+")]),t._v("，如 "),s("code",[t._v("'13+'")])]),t._v(" "),s("h3",{attrs:{id:"seo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#seo"}},[t._v("#")]),t._v(" seo")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("(info: PageSeoInfo) => Record<string, string>")])])]),t._v(" "),s("p",[s("code",[t._v("PageSeoInfo")]),t._v(" 的接口类型如下:")]),t._v(" "),s("div",{staticClass:"language-ts line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PageSeoInfo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 页面对象 */")]),t._v("\n  $page"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 站点对象 */")]),t._v("\n  $site"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SiteConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 主题配置 */")]),t._v("\n  themeConfig"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ThemeConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 支持的多语言 */")]),t._v("\n  locales"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 当前页面地址 */")]),t._v("\n  path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("p",[t._v("你可以使用此选项来注入新的或覆盖掉默认生成的 SEO，你需要按照 "),s("code",[t._v("<property>: <conent>")]),t._v(" 的格式来返回一个对象。")]),t._v(" "),s("p",[t._v("比如如果你返回了 "),s("code",[t._v("{ 'og:url': 'google.com', 'og:image': 'google.com/logo.jpg' }")]),t._v("，则插件会注入以下内容到 "),s("code",[t._v("<head>")]),t._v(" 中:")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("property")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("og:url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("google.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("property")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("og:image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("google.com/logo.jpg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h4",{attrs:{id:"默认值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认值"}},[t._v("#")]),t._v(" 默认值")]),t._v(" "),s("p",[t._v("以下是会被默认注入到 "),s("code",[t._v("<head>")]),t._v(" 中的 "),s("code",[t._v("<meta>")]),t._v(" 标签及其值:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("属性名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("og:url")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("themeConfig.hostname + path")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("og:site_name")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("$site.title")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("og:title")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("$page.title")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("og:description")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("$page.frontmatter.description")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("og:type")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("'article'")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("og:image")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("themeConfig.hostname + $page.frontmatter.image")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("og:updated_time")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("$page.lastUpdatedTime")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("og:locale")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("p")]),s("mi",[t._v("a")]),s("mi",[t._v("g")]),s("mi",[t._v("e")]),s("msub",[s("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),s("mi",[t._v("c")])],1),s("mi",[t._v("o")]),s("mi",[t._v("m")]),s("mi",[t._v("p")]),s("mi",[t._v("u")]),s("mi",[t._v("t")]),s("mi",[t._v("e")]),s("mi",[t._v("d")]),s("mi",{attrs:{mathvariant:"normal"}},[t._v(".")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("page._computed.")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("p")]),s("span",{staticClass:"mord mathdefault"},[t._v("a")]),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),s("span",{staticClass:"mord mathdefault"},[t._v("e")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord"},[t._v(".")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[s("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathdefault mtight"},[t._v("c")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[s("span")])])])])]),s("span",{staticClass:"mord mathdefault"},[t._v("o")]),s("span",{staticClass:"mord mathdefault"},[t._v("m")]),s("span",{staticClass:"mord mathdefault"},[t._v("p")]),s("span",{staticClass:"mord mathdefault"},[t._v("u")]),s("span",{staticClass:"mord mathdefault"},[t._v("t")]),s("span",{staticClass:"mord mathdefault"},[t._v("e")]),s("span",{staticClass:"mord mathdefault"},[t._v("d")]),s("span",{staticClass:"mord"},[t._v(".")])])])]),t._v("lang")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("og:locale:alternate")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("$themeConfig.locales 包含的其他语言")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("twitter:card")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("'summary_large_image'")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("twitter:image:alt")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("$site.title")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("article:author")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("$page.frontmatter.author || themeConfig.author")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("article:tag")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("$page.frontmatter.tags || $page.frontmatter.tag")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("article:published_time")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("$page.frontmatter.time || $page.frontmatter.date")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("article:modified_time")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("$page.lastUpdatedTime")])])])]),t._v(" "),s("h3",{attrs:{id:"custommeta"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custommeta"}},[t._v("#")]),t._v(" customMeta")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("(meta: Meta, info: PageSeoInfo) => void")])])]),t._v(" "),s("p",[t._v("你可以使用此选项来直接向 Meta 中注入内容。"),s("code",[t._v("Meta")]),t._v(" 格式请见 "),s("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/guide/frontmatter.html#meta",target:"_blank",rel:"noopener noreferrer"}},[t._v("Front Matter → Meta"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("比如传入:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("meta"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Meta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" info"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PageSeoInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  meta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("会向当前页面的 "),s("code",[t._v("<head>")]),t._v(" 注入:")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("b")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);