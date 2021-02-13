/*! For license information please see c169b6902947a77fec05096cb4da441bfcc3d6f1-1570a12b411cd7d8ed63.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"6B1/":function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return m}));var n=r("q1tI"),a=r.n(n),i=r("TSYQ"),o=r.n(i);r("U5C+");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var l={},s=function(e,t){l[t],0},u=function(e){var t=e.className,r=e.name,i=e.content,l=e.customClasses,u=e.size,m=e.src,d=e.title,h=e.use,f=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["className","name","content","customClasses","size","src","title","use"]),p=Object(n.useState)(0),g=p[0],y=p[1];Object(n.useMemo)((function(){return y(g+1)}),[r,JSON.stringify[i]]);var b,v=Object(n.useMemo)((function(){return r&&r.includes("-")?r.replace(/([-_][a-z0-9])/gi,(function(e){return e.toUpperCase()})).replace(/-/gi,""):r}),[g]),E=d?"<title>"+d+"</title>":"",k=Object(n.useMemo)((function(){return i||(r&&a.a.icons?a.a.icons[v]?a.a.icons[v]:s(0,v):void 0)}),[g]),w=Object(n.useMemo)((function(){return Array.isArray(k)?k[1]||k[0]:k}),[g]),T=Array.isArray(k)&&k.length>1?k[0]:"64 64",x=f.viewBox||"0 0 "+T,z=(b=!u&&(f.width||f.height),"custom"===u||b?"custom-size":u),j=o()("c-icon",z&&"c-icon-"+z,t),O=l||j;return a.a.createElement(a.a.Fragment,null,!m&&!h&&a.a.createElement("svg",c({},f,{xmlns:"http://www.w3.org/2000/svg",viewBox:x,className:O,role:"img",dangerouslySetInnerHTML:{__html:E+w}})),m&&!h&&a.a.createElement("img",c({},f,{className:t,src:m,role:"img"})),!m&&h&&a.a.createElement("svg",c({},f,{xmlns:"http://www.w3.org/2000/svg",className:O,role:"img"}),a.a.createElement("use",{href:h})))};t.b=u;var m=function(e){return s(),a.a.createElement(u,e)}}).call(this,r("8oxB"))},"6Tn2":function(e,t,r){},"85Sb":function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),i=r("Wbzz");r("f7NS");t.a=function(e){return a.a.createElement("nav",null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(i.Link,{to:"/",id:"brand"},"Sam Royall")),a.a.createElement("li",null,a.a.createElement(i.Link,{to:"/projects/"},"Projects")),a.a.createElement("li",null,a.a.createElement(i.Link,{to:"/blog/"},"Blog"))))}},"8oxB":function(e,t){var r,n,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var l,s=[],u=!1,m=-1;function d(){u&&l&&(u=!1,l.length?s=l.concat(s):m=-1,s.length&&h())}function h(){if(!u){var e=c(d);u=!0;for(var t=s.length;t;){for(l=s,s=[];++m<t;)l&&l[m].run();m=-1,t=s.length}l=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new f(e,t)),1!==s.length||u||c(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=p,a.addListener=p,a.once=p,a.off=p,a.removeListener=p,a.removeAllListeners=p,a.emit=p,a.prependListener=p,a.prependOnceListener=p,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},E545:function(e,t,r){},JX7q:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,"a",(function(){return n}))},JwsL:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r("q1tI"),a=r.n(n),i=r("dgaq"),o=r("qvPz"),c=r("Wbzz"),l=r("xLU/"),s=r("JX7q"),u=r("dI71"),m={alpine:{primary:"#6c687f",light:"#9994b8",dark:"#585568"},boulder:{primary:"#d2c5b2",light:"#837364",dark:"#515151"},cyberspace:{primary:"#181c18",light:"#00ce7c",dark:"#9578d3"},"miami-nights":{primary:"#18181a",light:"#47bac0",dark:"#e4609b"},"modern-dolch":{primary:"#2d2e30",light:"#54585c",dark:"#7eddd3"},monokai:{primary:"#272822",light:"#e6db74",dark:"#f92672",text:"#a6e22e"},muted:{primary:"#d1d7da",light:"#8FC9C8",dark:"#8f90c9"},"muted-mr-sleeves":{primary:"#d1d7da",light:"#daa99b",dark:"#8fadc9"},"night-runner":{primary:"#212121",light:"#feff04",dark:"#5c4a9c"},"red-samurai":{primary:"#84202c",light:"#55131b",dark:"#c79e6e"},"red-dragon":{primary:"#1a0b0c",light:"#ff3a32",dark:"#e2a528"},retro:{primary:"#efe7da",light:"#b9b2a0",dark:"#837d70",text:"#1d1b17"},pastel:{primary:"#e0b2bd",light:"#fbf4b6",dark:"#b4e9ff"},serika:{primary:"#323437",light:"#646669",dark:"#e2b714"},shoko:{primary:"#ced7e0",light:"#81c4dd",dark:"#7599b1"},solarized:{primary:"#002b36",light:"#859900",dark:"#268bd2",text:"#2aa198"},strawberry:{primary:"#f37f83",light:"#e53c58",dark:"#fcd23f"},"synthwave-84-1":{primary:"#2b213a",light:"#36f9f6",dark:"#ff7edb"},"synthwave-84-2":{primary:"#2b213a",light:"#72f1b8",dark:"#ff8b39"},terminal:{primary:"#191a1b",light:"#48494b",dark:"#79a617"},vaporwave:{primary:"#a4a7ea",light:"#e368da",dark:"#28cafe"},"80s-after-dark":{primary:"#1b1d36",light:"#99d6ea",dark:"#fca6d1"},8008:{primary:"#333a45",dark:"#f44c7f",light:"#939eae"},9009:{primary:"#ffffff",light:"#c87e74",dark:"#7fa480",text:"black"}},d=(r("6Tn2"),function(e){function t(t){var r,n;return r=e.call(this,t)||this,n="undefined"!=typeof document?document.documentElement.style.getPropertyValue("--theme"):"retro",r.state={theme:n},r.changeTheme=r.changeTheme.bind(Object(s.a)(r)),r}Object(u.a)(t,e);var r=t.prototype;return r.changeTheme=function(e){var t=e.target.value;if(""!==t&&"undefined"!=typeof document){this.setState({theme:t});var r=m[t];document.documentElement.style.setProperty("--theme",t),document.documentElement.style.setProperty("--primary-color",r.primary),document.documentElement.style.setProperty("--light-color",r.light),document.documentElement.style.setProperty("--dark-color",r.dark),r.hasOwnProperty("text")?document.documentElement.style.setProperty("--text-color",r.text):document.documentElement.style.setProperty("--text-color","#ffffff")}},r.render=function(){for(var e=this,t=[],r=Object.keys(m).sort(),n=0;n<r.length;n++){var i=r[n],o=a.a.createElement("option",{key:n+1,value:i},i.replaceAll("-"," "));t.push(o)}return a.a.createElement("select",{id:"themeDropdown",onChange:function(t){return e.changeTheme(t)}},a.a.createElement("option",{key:0,value:""}),t)},t}(a.a.Component)),h=(r("E545"),function(e){function t(t){var r;return(r=e.call(this,t)||this).state={hidden:!0},r.hide=r.hide.bind(Object(s.a)(r)),r.handleClick=r.handleClick.bind(Object(s.a)(r)),r}Object(u.a)(t,e);var r=t.prototype;return r.hide=function(){this.setState({hidden:!0})},r.handleClick=function(){this.setState({hidden:!1}),navigator.clipboard.writeText(this.props.copyText),setTimeout(this.hide,800)},r.render=function(){return a.a.createElement("div",{onClick:this.handleClick},this.props.content,a.a.createElement("div",{className:this.state.hidden?"tooltip hide":"tooltip"},a.a.createElement("span",{className:"display"},this.props.displayText)))},t}(a.a.Component));r("WLi9");function f(e){var t=a.a.createElement(c.Link,{to:"/"+e.currPage,id:"returnToTop"},a.a.createElement(l.a,{content:i.a.cilArrowThickFromBottom,size:"2xl",name:"return to top",title:"Return to Top"})),r=a.a.createElement("a",{href:"https://github.com/samrroyall/",target:"_blank"},a.a.createElement(l.a,{content:o.a.cibGithub,size:"2xl",name:"GitHub"})),n=a.a.createElement("a",{href:"https://www.linkedin.com/in/samrroyall",target:"_blank"},a.a.createElement(l.a,{content:o.a.cibLinkedin,size:"2xl",name:"linkedin",title:"LinkedIn"})),s=a.a.createElement("a",{href:"https://angel.co/u/samrroyall",target:"_blank"},a.a.createElement(l.a,{content:o.a.cibAngellist,size:"2xl",name:"angellist",title:"Angel List"})),u=a.a.createElement("a",{href:"https://leetcode.com/fjallraver/",target:"_blank"},a.a.createElement(l.a,{content:o.a.cibLeetcode,size:"2xl",name:"leetcode",title:"Leetcode"})),m=a.a.createElement(l.a,{content:o.a.cibDiscord,id:"discord",size:"2xl",name:"discord",title:"Discord"}),f=a.a.createElement(l.a,{content:o.a.cibGatsby,size:"lg",name:"gatsby logo",title:"Gatsby"}),p=a.a.createElement(l.a,{content:o.a.cibReact,size:"lg",name:"react logo",title:"ReactJS"}),g=a.a.createElement(l.a,{content:o.a.cibNodeJs,size:"lg",name:"node.js logo",title:"Node.js"});return a.a.createElement("footer",null,a.a.createElement("div",{id:"socialsList"},r,n,s,u,a.a.createElement(h,{content:m,copyText:"fjallraver#2825",displayText:"Copied!"}),t),a.a.createElement("div",{id:"theme"},a.a.createElement("label",{htmlFor:"themeDropdown",className:"fine textWhite",id:"themePrompt"},"Choose your favorite theme!"),a.a.createElement(d,null)),a.a.createElement("div",{className:"fine",id:"copyright"},a.a.createElement("span",{className:"textWhite"},"samrroyall@gmail.com"),"   © Sam Royall. All Rights Reserved."),a.a.createElement("div",{id:"poweredBy"},a.a.createElement("span",{className:"fine"},"Powered by"),f,p,g))}},TSYQ:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var o=a.apply(null,n);o&&e.push(o)}else if("object"===i)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},TZit:function(e,t,r){},"U5C+":function(e,t,r){},WLi9:function(e,t,r){},e7bz:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),i=a.a.createElement("svg",{version:"1.0",className:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128"},a.a.createElement("metadata",null,"Created by potrace 1.16, written by Peter Selinger 2001-2019"),a.a.createElement("g",{transform:"translate(0.000000,128.000000) scale(0.100000,-0.100000)",stroke:"none"},a.a.createElement("path",{d:"M965 1268 c-11 -6 -43 -33 -70 -59 l-51 -49 -321 -3 c-444 -3 -413\r 28 -413 -410 0 -426 -14 -407 306 -407 l211 0 6 -133 c7 -147 20 -207 44 -207\r 11 0 13 5 7 18 -4 9 -9 82 -11 162 -1 84 1 137 6 125 7 -18 10 -16 29 21 22\r 43 78 98 109 108 30 10 155 180 147 201 -3 7 3 16 13 19 23 7 123 188 157 283\r 51 144 47 239 -11 304 -32 36 -39 39 -87 39 -28 0 -60 -6 -71 -12z m-241 -315\r c-37 -76 -114 -308 -118 -353 0 -8 -5 -18 -10 -21 -5 -4 -9 -32 -10 -63 l0\r -56 -176 2 -175 3 -3 274 c-2 193 1 278 9 287 9 11 63 14 268 14 l257 0 -42\r -87z"})));t.a=i},f7NS:function(e,t,r){},"xLU/":function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),i=r("6B1/");i.b,t.a=function(e){return a.a.createElement("span",{title:e.title,"aria-label":e.name},a.a.createElement(i.a,{content:e.content,size:e.size}))}},zwFM:function(e,t,r){"use strict";var n=r("JX7q"),a=r("dI71"),i=r("q1tI"),o=r.n(i),c=(r("TZit"),function(e){function t(t){var r;return(r=e.call(this,t)||this).state={focused:!1},r.handleHover=r.handleHover.bind(Object(n.a)(r)),r}Object(a.a)(t,e);var r=t.prototype;return r.handleHover=function(e){this.setState({focused:!this.state.focused})},r.render=function(){var e="";return 0===this.props.pos?e+="header":(this.props.pos>2&&(e+="notFirstRow "),this.props.pos%2==0&&(e+="notFirstCol")),o.a.createElement("section",{className:e,onMouseOver:this.handleHover,onMouseOut:this.handleHover,style:this.state.focused?{backgroundImage:"url("+this.props.background+")",backgroundSize:"cover"}:{}},o.a.createElement("div",{className:"sectionTitle"},o.a.createElement("h1",null,this.props.title)),o.a.createElement("div",{className:"wrapper"}," ",this.props.content," "))},t}(o.a.Component));t.a=c}}]);
//# sourceMappingURL=c169b6902947a77fec05096cb4da441bfcc3d6f1-1570a12b411cd7d8ed63.js.map