(()=>{"use strict";var n={874:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type="button"],\n  [type="reset"],\n  [type="submit"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type="checkbox"],\n  [type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }',""]);const s=a},365:(n,e,t)=>{t.d(e,{A:()=>g});var o=t(601),r=t.n(o),i=t(314),a=t.n(i),s=t(417),c=t.n(s),d=new URL(t(847),t.b),l=new URL(t(837),t.b),p=new URL(t(433),t.b),u=a()(r()),m=c()(d),h=c()(l),f=c()(p);u.push([n.id,`body {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 16px;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.content {\n    width: 80%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n.header {\n    width: 80%;\n}\n\n.navBar {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.navButtons {\n    display: flex;\n    flex-direction: row;\n    align-items: stretch;\n    gap: 15px;\n}\n\n.navButton {\n    background-color: goldenrod;\n    border-radius: 10px;\n    color: white;\n    border: none;\n    padding: 8px 14px 8px 14px;\n    font-size: 1.2rem;\n}\n\n.logoName {\n    font-size: 2.2rem;\n}\n\n.hero {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${m});\n    height: 50%;\n    background-size: 1000px;\n    background-position: 100% 50%;\n    display: flex;\n    flex-direction: row;\n    align-items: end;\n    justify-content: start;\n}\n\n.menuHero {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${h});\n    height: 50%;\n    background-size: 1000px;\n    background-position: 100% 50%;\n    display: flex;\n    flex-direction: row;\n    align-items: end;\n    justify-content: start;\n}\n\n.aboutHero {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${f});\n    height: 40%;\n    background-size: 1000px;\n    background-position: 100% 60%;\n    display: flex;\n    flex-direction: row;\n    align-items: end;\n    justify-content: start;\n}\n\n.heroText {\n    color: white;\n    font-size: 1.4rem;\n    font-weight: bold;\n    padding-left: 30px;\n}\n\n.menuItem {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 0 50px 0 50px;\n    font-weight: 500;\n    \n}`,""]);const g=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],d=o.base?c[0]+o.base:c[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=r(m,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=o(n,r),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},847:(n,e,t)=>{n.exports=t.p+"e3dc8673117082680864.jpeg"},837:(n,e,t)=>{n.exports=t.p+"8931daae5aee3855590c.jpeg"},433:(n,e,t)=>{n.exports=t.p+"aa09cd85eeca043cf06d.jpeg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),o=t(825),r=t.n(o),i=t(659),a=t.n(i),s=t(56),c=t.n(s),d=t(540),l=t.n(d),p=t(113),u=t.n(p),m=t(874),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),e()(m.A,h),m.A&&m.A.locals&&m.A.locals;var f=t(365),g={};function b(){const n=document.querySelector(".content");n.innerHTML="",n.classList.add("content");const e=document.createElement("div");e.classList.add("hero");const t=document.createElement("p");t.innerText="Welcome to Dining Excellence",t.classList.add("heroText"),e.appendChild(t),n.appendChild(e);const o=document.createElement("p");o.innerText="We are bringing you fine dining in a romantic setting within the Elmwood Village. Sit down with our world class Italian cuisine, enjoy our stellar beverage program, and finish with our 5-Star Gelato.",o.classList.add("description"),n.appendChild(o)}function v(){const n=document.querySelector(".content");n.innerHTML="",n.classList.add("content");const e=document.createElement("div");e.classList.add("menuHero");const t=document.createElement("p");t.innerText="Excellent Menu that is rated 5-Stars",t.classList.add("heroText"),e.appendChild(t),n.appendChild(e);const o=document.createElement("h2");o.innerText="Dining Menu",o.classList.add("description"),n.appendChild(o);const r=document.createElement("div");r.classList.add("menuItem");const i=document.createElement("p");i.innerText="Pasta";const a=document.createElement("p");a.innerText="$26",r.appendChild(i),r.appendChild(a),n.appendChild(r);const s=document.createElement("div");s.classList.add("menuItem");const c=document.createElement("p");c.innerText="Pizza";const d=document.createElement("p");d.innerText="$19",s.appendChild(c),s.appendChild(d),n.appendChild(s);const l=document.createElement("div");l.classList.add("menuItem");const p=document.createElement("p");p.innerText="Chocolate Sundae";const u=document.createElement("p");u.innerText="$12",l.appendChild(p),l.appendChild(u),n.appendChild(l)}function y(){const n=document.querySelector(".content");n.innerHTML="",n.classList.add("content");const e=document.createElement("div");e.classList.add("aboutHero");const t=document.createElement("p");t.innerText="Our Founding Story",t.classList.add("heroText"),e.appendChild(t),n.appendChild(e);const o=document.createElement("p");o.innerText="The restaurant started in 2015 when a vision came to me in my dreams. The Kool Aid man ran through a brick wall and instead of saying his trademark OH YEAH, he said to me, follow your dreams. And since becoming an astronaut was out of the question, starting a restaurant became my goal!",o.classList.add("description"),n.appendChild(o)}g.styleTagTransform=u(),g.setAttributes=c(),g.insert=a().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=l(),e()(f.A,g),f.A&&f.A.locals&&f.A.locals,function(){const n=document.querySelector(".header"),e=document.createElement("nav");e.classList.add("navBar");const t=document.createElement("p");t.innerText="Daniela's",t.classList.add("logoName"),e.appendChild(t);const o=document.createElement("div");o.classList.add("navButtons");for(let n=1;n<=3;n++){const e=document.createElement("button");e.setAttribute("type","button"),e.classList.add("navButton"),1==n?(e.innerText="Home",e.addEventListener("click",b)):2==n?(e.innerText="Menu",e.addEventListener("click",v)):(e.innerText="About",e.addEventListener("click",y)),o.appendChild(e)}e.appendChild(o),n.appendChild(e)}(),b()})()})();