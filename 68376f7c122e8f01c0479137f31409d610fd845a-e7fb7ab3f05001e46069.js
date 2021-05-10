/*! For license information please see 68376f7c122e8f01c0479137f31409d610fd845a-e7fb7ab3f05001e46069.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"6B1/":function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return f}));var n=r("q1tI"),a=r.n(n),o=r("TSYQ"),i=r.n(o);r("U5C+");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var l={},u=function(e,t){l[t],0},s=function(e){var t=e.className,r=e.name,o=e.content,l=e.customClasses,s=e.size,f=e.src,p=e.title,d=e.use,m=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["className","name","content","customClasses","size","src","title","use"]),h=Object(n.useState)(0),y=h[0],b=h[1];Object(n.useMemo)((function(){return b(y+1)}),[r,JSON.stringify[o]]);var g,v=Object(n.useMemo)((function(){return r&&r.includes("-")?r.replace(/([-_][a-z0-9])/gi,(function(e){return e.toUpperCase()})).replace(/-/gi,""):r}),[y]),T=p?"<title>"+p+"</title>":"",w=Object(n.useMemo)((function(){return o||(r&&a.a.icons?a.a.icons[v]?a.a.icons[v]:u(0,v):void 0)}),[y]),E=Object(n.useMemo)((function(){return Array.isArray(w)?w[1]||w[0]:w}),[y]),O=Array.isArray(w)&&w.length>1?w[0]:"64 64",A=m.viewBox||"0 0 "+O,k=(g=!s&&(m.width||m.height),"custom"===s||g?"custom-size":s),C=i()("c-icon",k&&"c-icon-"+k,t),S=l||C;return a.a.createElement(a.a.Fragment,null,!f&&!d&&a.a.createElement("svg",c({},m,{xmlns:"http://www.w3.org/2000/svg",viewBox:A,className:S,role:"img",dangerouslySetInnerHTML:{__html:T+E}})),f&&!d&&a.a.createElement("img",c({},m,{className:t,src:f,role:"img"})),!f&&d&&a.a.createElement("svg",c({},m,{xmlns:"http://www.w3.org/2000/svg",className:S,role:"img"}),a.a.createElement("use",{href:d})))};t.b=s;var f=function(e){return u(),a.a.createElement(s,e)}}).call(this,r("8oxB"))},"6Tn2":function(e,t,r){},"8+s/":function(e,t,r){"use strict";var n,a=r("q1tI"),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},"85Sb":function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("Wbzz");r("f7NS");t.a=function(e){return a.a.createElement("nav",null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(o.a,{to:"/",id:"brand"},"Sam Royall")),a.a.createElement("li",null,a.a.createElement(o.a,{to:"/projects/"},"Projects")),a.a.createElement("li",null,a.a.createElement(o.a,{to:"/blog/"},"Blog"))))}},"8oxB":function(e,t){var r,n,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var l,u=[],s=!1,f=-1;function p(){s&&l&&(s=!1,l.length?u=l.concat(u):f=-1,u.length&&d())}function d(){if(!s){var e=c(p);s=!0;for(var t=u.length;t;){for(l=u,u=[];++f<t;)l&&l[f].run();f=-1,t=u.length}l=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new m(e,t)),1!==u.length||s||c(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},E545:function(e,t,r){},EYWl:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("qhky"),i=r("YwZP"),c=r("Wbzz"),l=function(e){var t=e.title,r=e.description,n=e.image,l=e.article,s=Object(i.useLocation)().pathname,f=Object(c.c)(u).site.siteMetadata,p=f.defaultTitle,d=f.defaultDescription,m=f.siteUrl,h=f.defaultImage,y={title:t||p,description:r||d,image:""+m+(n||h),url:""+m+s};return a.a.createElement(o.a,{title:y.title},a.a.createElement("meta",{name:"description",content:y.description}),a.a.createElement("meta",{name:"image",content:y.image}),y.url&&a.a.createElement("meta",{property:"og:url",content:y.url}),!l?null:a.a.createElement("meta",{property:"og.type",content:"article"}),y.title&&a.a.createElement("meta",{property:"og:title",content:y.title}),y.description&&a.a.createElement("meta",{property:"og:description",content:y.description}),y.image&&a.a.createElement("meta",{property:"og:image",content:y.image}))};t.a=l,l.defaultProps={title:null,description:null,image:null,article:!1};var u="3361508366"},JwsL:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("dgaq"),i=r("qvPz"),c=r("Wbzz"),l=r("xLU/"),u={alpine:{primary:"#6c687f",light:"#9994b8",dark:"#585568"},boulder:{primary:"#d2c5b2",light:"#837364",dark:"#515151"},cyberspace:{primary:"#181c18",light:"#00ce7c",dark:"#9578d3"},"miami-nights":{primary:"#18181a",light:"#47bac0",dark:"#e4609b"},"modern-dolch":{primary:"#2d2e30",light:"#54585c",dark:"#7eddd3"},monokai:{primary:"#272822",light:"#e6db74",dark:"#f92672",text:"#a6e22e"},muted:{primary:"#d1d7da",light:"#8FC9C8",dark:"#8f90c9"},"muted-mr-sleeves":{primary:"#d1d7da",light:"#daa99b",dark:"#8fadc9"},"night-runner":{primary:"#212121",light:"#feff04",dark:"#5c4a9c"},"red-samurai":{primary:"#84202c",light:"#55131b",dark:"#c79e6e"},"red-dragon":{primary:"#1a0b0c",light:"#ff3a32",dark:"#e2a528"},retro:{primary:"#efe7da",light:"#b9b2a0",dark:"#837d70",text:"#1d1b17"},pastel:{primary:"#e0b2bd",light:"#fbf4b6",dark:"#b4e9ff"},serika:{primary:"#323437",light:"#646669",dark:"#e2b714"},shoko:{primary:"#ced7e0",light:"#81c4dd",dark:"#7599b1"},solarized:{primary:"#002b36",light:"#859900",dark:"#268bd2",text:"#2aa198"},strawberry:{primary:"#f37f83",light:"#e53c58",dark:"#fcd23f"},"synthwave-84-1":{primary:"#2b213a",light:"#36f9f6",dark:"#ff7edb"},"synthwave-84-2":{primary:"#2b213a",light:"#72f1b8",dark:"#ff8b39"},terminal:{primary:"#191a1b",light:"#48494b",dark:"#79a617"},vaporwave:{primary:"#a4a7ea",light:"#e368da",dark:"#28cafe"},"80s-after-dark":{primary:"#1b1d36",light:"#99d6ea",dark:"#fca6d1"},8008:{primary:"#333a45",dark:"#f44c7f",light:"#939eae"},9009:{primary:"#ffffff",light:"#c87e74",dark:"#7fa480",text:"black"}},s=(r("6Tn2"),function(){var e=Object.keys(u).sort().map((function(e,t){return a.a.createElement("option",{key:t,value:e},e.replace("-"," "))}));return a.a.createElement("select",{id:"themeDropdown",onChange:function(e){return function(e){var t=e.target.value;if(""!==t&&"undefined"!=typeof document){var r=u[t];document.documentElement.style.setProperty("--theme",t),document.documentElement.style.setProperty("--primary-color",r.primary),document.documentElement.style.setProperty("--light-color",r.light),document.documentElement.style.setProperty("--dark-color",r.dark),r.hasOwnProperty("text")?document.documentElement.style.setProperty("--text-color",r.text):document.documentElement.style.setProperty("--text-color","#ffffff")}}(e)}},a.a.createElement("option",{key:0,value:""}),e)}),f=(r("E545"),function(e){var t=e.content,r=Object(n.useState)(!0),o=r[0],i=r[1],c=function(){return i(!0)},l=function(e){i(!1),navigator.clipboard.writeText((void 0).props.copyText),setTimeout(c,800)};return a.a.createElement("div",{onClick:function(e){return l()}},o?a.a.createElement(a.a.Fragment,null):a.a.createElement(a.a.Fragment,null,t,a.a.createElement("div",{className:"tooltip"},a.a.createElement("span",{className:"display"},(void 0).props.displayText))))});r("WLi9"),t.a=function(e){var t=e.currPage,r=a.a.createElement(c.a,{to:"/"+t,id:"returnToTop"},a.a.createElement(l.a,{content:o.a.cilArrowThickFromBottom,size:"2xl",name:"return to top",title:"Return to Top"})),n=a.a.createElement("a",{href:"https://github.com/samrroyall/",target:"_blank",rel:"noreferrer"},a.a.createElement(l.a,{content:i.a.cibGithub,size:"2xl",name:"GitHub"})),u=a.a.createElement("a",{href:"https://www.linkedin.com/in/samrroyall",target:"_blank",rel:"noreferrer"},a.a.createElement(l.a,{content:i.a.cibLinkedin,size:"2xl",name:"linkedin",title:"LinkedIn"})),p=a.a.createElement("a",{href:"https://angel.co/u/samrroyall",target:"_blank",rel:"noreferrer"},a.a.createElement(l.a,{content:i.a.cibAngellist,size:"2xl",name:"angellist",title:"Angel List"})),d=a.a.createElement("a",{href:"https://leetcode.com/fjallraver/",target:"_blank",rel:"noreferrer"},a.a.createElement(l.a,{content:i.a.cibLeetcode,size:"2xl",name:"leetcode",title:"Leetcode"})),m=a.a.createElement(l.a,{content:i.a.cibDiscord,id:"discord",size:"2xl",name:"discord",title:"Discord"}),h=a.a.createElement(l.a,{content:i.a.cibGatsby,size:"lg",name:"gatsby logo",title:"Gatsby"}),y=a.a.createElement(l.a,{content:i.a.cibReact,size:"lg",name:"react logo",title:"ReactJS"}),b=a.a.createElement(l.a,{content:i.a.cibNodeJs,size:"lg",name:"node.js logo",title:"Node.js"});return a.a.createElement("footer",null,a.a.createElement("div",{id:"socialsList"},n,u,p,d,a.a.createElement(f,{content:m,copyText:"fjallraver#2825",displayText:"Copied!"}),r),a.a.createElement("div",{id:"theme"},a.a.createElement("label",{htmlFor:"themeDropdown",className:"fine textWhite",id:"themePrompt"},"Choose your favorite theme!"),a.a.createElement(s,null)),a.a.createElement("div",{className:"fine",id:"copyright"},a.a.createElement("span",{className:"textWhite"},"samrroyall@gmail.com"),"   © Sam Royall. All Rights Reserved."),a.a.createElement("div",{id:"poweredBy"},a.a.createElement("span",{className:"fine"},"Powered by"),h,y,b))}},TSYQ:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===o)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},"U5C+":function(e,t,r){},WLi9:function(e,t,r){},bmMU:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,l,u,s;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(!e(t[l],i[l]))return!1;return!0}if(n&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;for(s=t.entries();!(l=s.next()).done;)if(!e(l.value[1],i.get(l.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(t[l]!==i[l])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,u[l]))return!1;if(r&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!t.$$typeof)&&!e(t[u[l]],i[u[l]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},f7NS:function(e,t,r){},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return he}));r("E9XD");var n,a,o,i,c=r("17x9"),l=r.n(c),u=r("8+s/"),s=r.n(u),f=r("bmMU"),p=r.n(f),d=r("q1tI"),m=r.n(d),h=r("YVoz"),y=r.n(h),b="bodyAttributes",g="htmlAttributes",v="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),E="cssText",O="href",A="http-equiv",k="innerHTML",C="itemprop",S="name",x="property",j="rel",P="src",L="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",M="defer",z="encodeSpecialCharacters",R="onChangeClientState",q="titleTemplate",_=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),B=[T.NOSCRIPT,T.SCRIPT,T.STYLE],D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},H=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},J=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=X(e,T.TITLE),r=X(e,q);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=X(e,N);return t||n||void 0},G=function(e){return X(e,R)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},$=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||r===j&&"canonical"===e[r].toLowerCase()||l===j&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==k&&c!==E&&c!==C||(r=c)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][u]&&(a[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=y()({},n[c],a[c]);n[c]=l}return e}),[]).reverse()},X=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Z=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:e.requestAnimationFrame||Z,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;le(T.BODY,n),le(T.HTML,a),ce(f,p);var d={baseTag:ue(T.BASE,r),linkTags:ue(T.LINK,o),metaTags:ue(T.META,i),noscriptTags:ue(T.NOSCRIPT,c),scriptTags:ue(T.SCRIPT,u),styleTags:ue(T.STYLE,s)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),l(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(T.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],u=t[l]||"";r.getAttribute(l)!==u&&r.setAttribute(l,u),-1===a.indexOf(l)&&a.push(l);var s=o.indexOf(l);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==i.join(",")&&r.setAttribute("data-react-helmet",i.join(","))}},ue=function(e,t){var r=document.head||document.querySelector(T.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===k)r.innerHTML=t.innerHTML;else if(n===E)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[I[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=fe(r,n),[m.a.createElement(T.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=se(r),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+J(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+J(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case b:case g:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=I[e]||e;if(r===k||r===E){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===k||e===E)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+J(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(T.BASE,t,n),bodyAttributes:pe(b,r,n),htmlAttributes:pe(g,a,n),link:pe(T.LINK,o,n),meta:pe(T.META,i,n),noscript:pe(T.NOSCRIPT,c,n),script:pe(T.SCRIPT,l,n),style:pe(T.STYLE,u,n),title:pe(T.TITLE,{title:f,titleAttributes:p},n)}},me=s()((function(e){return{baseTag:Q([O,L],e),bodyAttributes:V(b,e),defer:X(e,M),encode:X(e,z),htmlAttributes:V(g,e),linkTags:$(T.LINK,[j,O],e),metaTags:$(T.META,[S,w,A,x,C],e),noscriptTags:$(T.NOSCRIPT,[k],e),onChangeClientState:G(e),scriptTags:$(T.SCRIPT,[P,k],e),styleTags:$(T.STYLE,[E],e),title:K(e),titleAttributes:V(v,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),he=(a=me,i=o=function(e){function t(){return U(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return Y({},n,((t={})[r.type]=[].concat(n[r.type]||[],[Y({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case T.TITLE:return Y({},a,((t={})[n.type]=i,t.titleAttributes=Y({},o),t));case T.BODY:return Y({},a,{bodyAttributes:Y({},o)});case T.HTML:return Y({},a,{htmlAttributes:Y({},o)})}return Y({},a,((r={})[n.type]=Y({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=Y({},t);return Object.keys(e).forEach((function(t){var n;r=Y({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[_[r]||r]=e[r],t}),t)}(H(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=H(e,["children"]),n=Y({},r);return t&&(n=this.mapChildrenToProps(t,n)),m.a.createElement(a,n)},F(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),o.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,r("yLpj"))},"xLU/":function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("6B1/");o.b,t.a=function(e){var t=e.title,r=e.name,n=e.content,i=e.size;return a.a.createElement("span",{title:t,"aria-label":r},a.a.createElement(o.a,{content:n,size:i}))}}}]);
//# sourceMappingURL=68376f7c122e8f01c0479137f31409d610fd845a-e7fb7ab3f05001e46069.js.map