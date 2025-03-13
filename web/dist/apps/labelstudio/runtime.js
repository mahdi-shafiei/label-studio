(()=>{"use strict";var e,t,r,n,o,a,i,l={},s={};function d(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={id:e,loaded:!1,exports:{}};return l[e].call(r.exports,r,r.exports,d),r.loaded=!0,r.exports}d.m=l,e=[],d.O=(t,r,n,o)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){for(var[r,n,o]=e[u],i=!0,l=0;l<r.length;l++)(!1&o||a>=o)&&Object.keys(d.O).every((e=>d.O[e](r[l])))?r.splice(l--,1):(i=!1,o<a&&(a=o));if(i){e.splice(u--,1);var s=n();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,n,o]},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);d.r(o);var a={};t=t||[null,r({}),r([]),r(r)];for(var i=2&n&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,d.d(o,a),o},d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,r)=>(d.f[r](e,t),t)),[])),d.u=e=>e+".js",d.miniCssF=e=>e+".css",d.miniCssF=e=>e+".css",d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},o="labelstudio:",d.l=(e,t,r,a)=>{if(n[e])n[e].push(t);else{var i,l;if(void 0!==r)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var c=s[u];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==o+r){i=c;break}}i||(l=!0,(i=document.createElement("script")).type="text/javascript",i.charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack",o+r),i.src=e),n[e]=[t];var f=(t,r)=>{i.onerror=i.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;d.g.importScripts&&(e=d.g.location+"");var t=d.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),d.p=e})(),a=e=>new Promise(((t,r)=>{var n=d.miniCssF(e),o=d.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===t)return i}})(n,o))return t();((e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,o.parentNode.removeChild(o),n(s)}},o.href=t,document.head.appendChild(o)})(e,o,t,r)})),i={121:0},d.f.miniCss=(e,t)=>{i[e]?t.push(i[e]):0!==i[e]&&{518:1,531:1,631:1}[e]&&t.push(i[e]=a(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))},(()=>{if("undefined"!=typeof document){var e=e=>new Promise(((t,r)=>{var n=d.miniCssF(e),o=d.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===t)return i}})(n,o))return t();((e,t,r,n,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=r=>{if(a.onerror=a.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,a.parentNode&&a.parentNode.removeChild(a),o(s)}},a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a)})(e,o,null,t,r)})),t={121:0};d.f.miniCss=(r,n)=>{t[r]?n.push(t[r]):0!==t[r]&&{518:1,531:1,631:1}[r]&&n.push(t[r]=e(r).then((()=>{t[r]=0}),(e=>{throw delete t[r],e})))}}})(),(()=>{d.b=document.baseURI||self.location.href;var e={121:0};d.f.j=(t,r)=>{var n=d.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(121!=t){var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=d.p+d.u(t),i=new Error;d.l(a,(r=>{if(d.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}else e[t]=0},d.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[a,i,l]=r,s=0;if(a.some((t=>0!==e[t]))){for(n in i)d.o(i,n)&&(d.m[n]=i[n]);if(l)var u=l(d)}for(t&&t(r);s<a.length;s++)o=a[s],d.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return d.O(u)},r=self.webpackChunklabelstudio=self.webpackChunklabelstudio||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),d.nc=void 0})();
//# sourceMappingURL=runtime.js.map