(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7evw":function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var o=n("UZsz"),r=n("Bp/N"),a=n("HhXV");t.CommentCount=o.CommentCount,t.CommentEmbed=r.CommentEmbed,t.DiscussionEmbed=a.DiscussionEmbed;var i={CommentCount:o.CommentCount,CommentEmbed:r.CommentEmbed,DiscussionEmbed:a.DiscussionEmbed};t.default=i},"Bp/N":function(e,t,n){"use strict";n("xfY5"),n("a1Th"),n("h7Nl"),n("Btvt"),n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n("q1tI"),i=(o=a)&&o.__esModule?o:{default:o};function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(t.CommentEmbed=function(e){function t(){return s(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}(i.default.Component)).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},HhXV:function(e,t,n){"use strict";n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n("q1tI"),i=(o=a)&&o.__esModule?o:{default:o},s=n("ZMnY");function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.DiscussionEmbed=function(e){function t(){return c(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,s.shallowComparison)(this.props,e)}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,s.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return i.default.createElement("div",{id:"disqus_thread"})}}]),t}(i.default.Component)},UZsz:function(e,t,n){"use strict";n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n("q1tI"),i=(o=a)&&o.__esModule?o:{default:o},s=n("ZMnY");function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=(0,s.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1);t.CommentCount=function(e){function t(){return c(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,s.shallowComparison)(this.props,e)}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?l():(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,s.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return i.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}(i.default.Component)},ZMnY:function(e,t,n){"use strict";n("rE2o"),n("ioFf"),n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("T39b"),n("dZ+Y"),n("LK8F"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var o=void 0;return function(){var r=this,a=arguments,i=function(){o=null,n||e.apply(r,a)},s=n&&!o;window.clearTimeout(o),o=setTimeout(i,t),s&&e.apply(r,a)}},t.isReactElement=i,t.shallowComparison=function(e,t){var n=new Set(Object.keys(e),Object.keys(t)),o=!0,r=!1,a=void 0;try{for(var s,c=n[Symbol.iterator]();!(o=(s=c.next()).done);o=!0){var u=s.value;if(e[u]!==t[u]&&!i(e[u]))return!0}}catch(l){r=!0,a=l}finally{try{!o&&c.return&&c.return()}finally{if(r)throw a}}return!1};var o,r=n("q1tI"),a=(o=r)&&o.__esModule?o:{default:o};function i(e){return!!a.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return a.default.isValidElement(e)}))}},xfY5:function(e,t,n){"use strict";var o=n("dyZX"),r=n("aagx"),a=n("LZWt"),i=n("Xbzi"),s=n("apmT"),c=n("eeVq"),u=n("kJMx").f,l=n("EemH").f,m=n("hswa").f,f=n("qncB").trim,p=o.Number,d=p,h=p.prototype,w="Number"==a(n("Kuth")(h)),b="trim"in String.prototype,y=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var n,o,r,a=(t=b?t.trim():f(t,3)).charCodeAt(0);if(43===a||45===a){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+t}for(var i,c=t.slice(2),u=0,l=c.length;u<l;u++)if((i=c.charCodeAt(u))<48||i>r)return NaN;return parseInt(c,o)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(w?c((function(){h.valueOf.call(n)})):"Number"!=a(n))?i(new d(y(t)),n,p):y(t)};for(var v,E=n("nh4g")?u(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),g=0;E.length>g;g++)r(d,v=E[g])&&!r(p,v)&&m(p,v,l(d,v));p.prototype=h,h.constructor=p,n("KroJ")(o,"Number",p)}},yZlL:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return u}));var o=n("q1tI"),r=n.n(o),a=n("Wbzz"),i=n("7evw"),s=n("LbRr"),c=n("W/9C");t.default=function(e){var t=e.data,n="https://www.gistoapp.com"+e.location.pathname,o=t.markdownRemark.frontmatter.title,u={url:n,title:o,identifier:o};return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null),r.a.createElement("section",{className:"is-page-blog inner post"},r.a.createElement("h1",null,o),r.a.createElement("section",{className:"whiter boxes"},r.a.createElement("div",{className:"w-container main content-container"},r.a.createElement("div",{className:"w-row w-col"},r.a.createElement(a.a,{to:"blog",className:"more btn bg-grey back"},r.a.createElement("i",{className:"fa fa-chevron-left"})," Back"),r.a.createElement("h2",null,t.markdownRemark.frontmatter.post_title),r.a.createElement("p",null,r.a.createElement("i",null,"by ",r.a.createElement("b",null,t.markdownRemark.frontmatter.author)," | ",t.markdownRemark.frontmatter.date)),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.markdownRemark.html}}),r.a.createElement("br",null)),r.a.createElement("a",{href:"javascript:sharePost('http://twitter.com/share?url="+n+"&amp;text="+o+" @gistoapp','Sahare "+o+" via Twitter',520,350);",className:"btn bg-grey twitter txt-white"},r.a.createElement("i",{className:"fa fa-twitter"}))," ",r.a.createElement("a",{href:"javascript:sharePost('http://www.facebook.com/sharer.php?p[title]=Gisto&p[summary]="+o+"&p[url]="+n+"','Sahare "+o+" via Facebook',520,350);",className:"btn bg-grey fb txt-white"},r.a.createElement("i",{className:"fa fa-facebook"}))," ",r.a.createElement("a",{href:"javascript:sharePost('https://plus.google.com/share?url="+n+"','Sahare "+o+" via Google+',520,350);",className:"btn bg-grey gplus txt-white"},r.a.createElement("i",{className:"fa fa-google-plus"}))," ",r.a.createElement("a",{href:"mailto:?Subject=Gisto: "+o+"&amp;Body="+o+" at "+n,className:"btn bg-grey txt-white"},r.a.createElement("i",{className:"fa fa-envelope"})))),r.a.createElement("h3",{className:"post"},"Comments"),r.a.createElement("section",{className:"whiter boxes"},r.a.createElement("div",{className:"w-container main content-container"},r.a.createElement("div",{className:"w-row w-col"},r.a.createElement(i.DiscussionEmbed,{shortname:"gisto",config:u}))))),r.a.createElement(c.a,null))};var u="1562271849"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-b42681f5f129b3fd4b55.js.map