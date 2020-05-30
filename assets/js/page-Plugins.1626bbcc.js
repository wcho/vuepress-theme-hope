(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{509:function(s,t,n){s.exports=n.p+"assets/img/architecture.9a93cf6c.png"},632:function(s,t,n){"use strict";n.r(t);var e=n(1),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[s._v("#")]),s._v(" Introduction")]),s._v(" "),e("p",[s._v("Plugins generally add global-level functionality to VuePress.")]),s._v(" "),e("p",[s._v("The architecture of the whole plugin system is as follows:")]),s._v(" "),e("p",[e("img",{attrs:{src:n(509),alt:"architecture"}})]),s._v(" "),e("h2",{attrs:{id:"using-a-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-a-plugin"}},[s._v("#")]),s._v(" Using a plugin")]),s._v(" "),e("p",[s._v("You can use plugins by doing some configuration at "),e("code",[s._v(".vuepress/config.js")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./my-plugin.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"use-plugins-from-a-dependency"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-plugins-from-a-dependency"}},[s._v("#")]),s._v(" Use plugins from a dependency")]),s._v(" "),e("p",[s._v("A plugin can be published on npm in "),e("code",[s._v("CommonJS")]),s._v(" format as "),e("code",[s._v("vuepress-plugin-xxx")]),s._v(". You can use it:")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress-plugin-xx"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("If you prefix the plugin with "),e("code",[s._v("vuepress-plugin-")]),s._v(", you can use a shorthand to leave out that prefix:")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("Same with:")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress-plugin-xxx"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("This also works with "),e("a",{attrs:{href:"https://docs.npmjs.com/misc/scope",target:"_blank",rel:"noopener noreferrer"}},[s._v("Scoped Packages"),e("OutboundLink")],1),s._v(":")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@org/vuepress-plugin-xxx"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@vuepress/plugin-xxx"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("Shorthand:")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@org/xxx"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@vuepress/xxx"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),e("p",[s._v("The plugin whose name starts with "),e("code",[s._v("@vuepress/plugin-")]),s._v(" is an officially maintained plugin.")])]),s._v(" "),e("h2",{attrs:{id:"plugin-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugin-options"}},[s._v("#")]),s._v(" Plugin options")]),s._v(" "),e("p",[s._v("Config it by "),e("code",[s._v("pugins")]),s._v(" in "),e("code",[s._v("config.js")]),s._v(".")]),s._v(" "),e("h3",{attrs:{id:"babel-style"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#babel-style"}},[s._v("#")]),s._v(" Babel Style")]),s._v(" "),e("p",[s._v("Plugins can have options specified by wrapping the name and an options object in an array inside your config:")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress-plugin-xxx"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* options */")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("Since this style is consistent with "),e("a",{attrs:{href:"https://babeljs.io/docs/en/plugins#plugin-preset-options",target:"_blank",rel:"noopener noreferrer"}},[s._v("babel’s Plugin/Preset Options"),e("OutboundLink")],1),s._v(", we call it "),e("code",[s._v("Babel Style")]),s._v(".")]),s._v(" "),e("h3",{attrs:{id:"object-style"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#object-style"}},[s._v("#")]),s._v(" Object Style")]),s._v(" "),e("p",[s._v("VuePress also provides a simpler way to use plugins from a dependency:")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    xxx"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* options */")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),e("p",[s._v("Prefer "),e("strong",[s._v("Babel Style")]),s._v(" first, because some plugins can have muti instance.")])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),e("p",[s._v("The plugin can be disabled when "),e("code",[s._v("false")]),s._v(" is explicitly passed as option.")]),s._v(" "),e("ul",[e("li",[s._v("Babel style")])]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// disabled.")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("ul",[e("li",[s._v("Object style")])]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    xxx"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// disabled.")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])]),s._v(" "),e("h2",{attrs:{id:"official-plugins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#official-plugins"}},[s._v("#")]),s._v(" Official Plugins")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/official/plugin-active-header-links.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("active-header-links"),e("OutboundLink")],1),s._v(": A plugin of automatically activating sidebar links when page scrolls")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/official/plugin-back-to-top.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("back-to-top"),e("OutboundLink")],1),s._v(": Add the Back-to-top button")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/official/plugin-google-analytics.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("google-analytics"),e("OutboundLink")],1),s._v("：Add Google analytics")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/official/plugin-last-updated.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("last-updated"),e("OutboundLink")],1),s._v(": Update last edit time")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/official/plugin-medium-zoom.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("medium-zoom"),e("OutboundLink")],1),s._v(": Picture Zoom")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/official/plugin-nprogress.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("nprogress"),e("OutboundLink")],1),s._v(": A progress bar plugin based on nprogress")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/official/plugin-pwa.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("PWA"),e("OutboundLink")],1),s._v(": Surport for "),e("strong",[s._v("Progressive Web App")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/official/plugin-register-components.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("register-component"),e("OutboundLink")],1),s._v(": register components")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/official/plugin-search.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("search"),e("OutboundLink")],1),s._v(": Headers-based search plugin")])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),e("p",[s._v("More configuration, please view"),e("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vuepress Plugins"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"community-plugins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#community-plugins"}},[s._v("#")]),s._v(" Community Plugins")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://vuepress.github.io/en/plugins/clean-urls.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("clean-urls"),e("OutboundLink")],1),s._v(": Use clean urls in VuePress")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://vuepress.github.io/en/plugins/container.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("container"),e("OutboundLink")],1),s._v(": Use markdown containers in VuePress")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://vuepress.github.io/en/plugins/copyright.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("copyright"),e("OutboundLink")],1),s._v(": 在 VuePress 中处理复制行为")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://vuepress.github.io/en/plugins/dehydrate.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("dehydrate"),e("OutboundLink")],1),s._v(": Dehydrate HTML files in VuePress")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://vuepress.github.io/en/plugins/git-log.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("git-log"),e("OutboundLink")],1),s._v(": Integrate git logs into VuePress")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://vuepress.github.io/en/plugins/mathjax.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("mathjax"),e("OutboundLink")],1),s._v(": Use TeX syntax in VuePress")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://vuepress.github.io/en/plugins/migrate.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("migrate"),e("OutboundLink")],1),s._v(": Migrate another website to VuePress")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://vuepress.github.io/en/plugins/named-chunks.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("named-chunks"),e("OutboundLink")],1),s._v(": Generate named chunks in VuePress")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://vuepress.github.io/en/plugins/redirect.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("redirect"),e("OutboundLink")],1),s._v(": Handle redirections in VuePress")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://vuepress.github.io/en/plugins/serve.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("serve"),e("OutboundLink")],1),s._v(": Serve generated files in VuePress")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://vuepress.github.io/en/plugins/zooming.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("zooming"),e("OutboundLink")],1),s._v(": Make images zoomable in VuePress (with zooming)")])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),e("p",[s._v("For more infomation, please visit "),e("a",{attrs:{href:"https://vuepress.github.io/en/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vuepress Community"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);