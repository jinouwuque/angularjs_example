(()=>{var t={8286:()=>{!function(){if("function"==typeof window.CustomEvent)return!1;function t(t,e){var n=document.createEvent("CustomEvent"),i=e||{bubbles:!1,cancelable:!1,detail:void 0};return n.initCustomEvent(t,i.bubbles,i.cancelable,i.detail),n}t.prototype=window.Event.prototype,window.CustomEvent=t}();var t=new CustomEvent("_COLORPK_SCRIPT_READY");window.dispatchEvent(t)}},e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}(()=>{"use strict";n(8286);var t=void 0,e=document.querySelector("[name=csrfmiddlewaretoken]").getAttribute("value"),i=function(){};document.cookie.indexOf("_csrf")>-1&&(document.cookie="_csrf=; expires=Thu, 01 Jan 1970 00:00:01 GMT;",window.location.reload());var o=function(){var t="_tls";try{return window.localStorage.setItem(t,"1"),window.localStorage.getItem(t),window.localStorage.removeItem(t),!0}catch(t){return!1}}(),r=function(t,n){!function(t){var n=t.method,i=t.url,o=t.data,r=t.success,a=t.fail,c=new XMLHttpRequest;c.onreadystatechange=function(){c.readyState===XMLHttpRequest.DONE&&(200===c.status?r(JSON.parse(c.responseText)):a())},c.open(n,i),c.setRequestHeader("X-CSRFToken",e),"GET"!==n&&c.setRequestHeader("Content-Type","application/json"),o&&Object.keys(o).length?c.send(JSON.stringify(o)):c.send()}({method:n,url:"/like/".concat(t),success:i,fail:i})},a="https://dkny.oss-cn-hangzhou.aliyuncs.com/4/";function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],i=!0,o=!1,r=void 0;try{for(var a,c=t[Symbol.iterator]();!(i=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){o=!0,r=t}finally{try{i||null==c.return||c.return()}finally{if(o)throw r}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var u=null;var d,f,h,w="hideWelcome",p=new(function(){function t(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),u||(this.sizeInfo=null,u=this),u}var e,n,i;return e=t,i=[{key:"widthUtility",value:function(t){return t>692?.9:.99}},{key:"boxSize",value:function(t){var e;return[t<321?125+2*(e=4):t<769?150+2*(e=4):220+2*(e=10),e]}}],(n=[{key:"windowWidth",set:function(e){var n=c(t.boxSize(e),2),i=n[0],o=n[1],r=t.widthUtility(e),a=Math.floor(e*r/i)*i,l=6*i,s=2*o;this.sizeInfo={containerWidth:"".concat(a,"px"),containerWidthMax:"".concat(l,"px"),helperWidth:"".concat(a-s,"px"),helperWidthMax:"".concat(l-s,"px")}}}])&&s(e.prototype,n),i&&s(e,i),t}()),y=document.querySelector(".list"),m=!!o&&"1"===window.localStorage.getItem(w)&&!1,v=document.querySelector(".help"),k=function(t){p.windowWidth=t;var e=p.sizeInfo,n=e.containerWidth,i=e.containerWidthMax,o=e.helperWidth,r=e.helperWidthMax;y.style.width=n,y.style.maxWidth=i,v&&(v.style.width=o,v.style.maxWidth=r)};function g(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}window.onresize=(d=function(t){k(t.target.innerWidth)},f=250,h=null,function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];var o=t;clearTimeout(h),h=setTimeout((function(){d.apply(o,n)}),f)}),k(window.innerWidth),!m&&v&&(v.style.display="block",window._colorpk.removeWelcome=function(){v.parentElement.removeChild(v),o&&window.localStorage.setItem(w,"1")});const b=function(){function t(e){var n=e.id,i=e.color,o=e.like,r=e.isLiked,a=e.animDelay,c=e.onLike,l=e.onUnlike,s=e.onRedir;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=n,this.color=i,this.like=o,this.isLiked=r,this.animDelay=a,this.onLike=c,this.onUnlike=l,this.onRedir=s,this.createElement()}var e,n,i;return e=t,(n=[{key:"createElement",value:function(){var t=this,e=document.createElement("div");e.classList.add("box"),e.dataset.k=this.id,e.dataset.l=this.like,e.style.animationDelay=this.animDelay;var n=document.createElement("div");n.classList.add("canvas"),this.color.split("#").map((function(t){return"#".concat(t)})).forEach((function(e){var i=document.createElement("div"),o=document.createElement("span");o.innerText=e,i.appendChild(o),i.style.backgroundColor=e,i.style.animationDelay=t.animDelay,n.appendChild(i)})),this.onRedir&&(n.onclick=function(e){"DIV"===e.target.tagName&&t.onRedir(t.id)});var i=document.createElement("button");return i.classList.add("btn"),i.setAttribute("type","button"),i.innerHTML='<img src="'.concat(a).concat(this.isLiked?"hrtr.svg":"hrt.svg",'">').concat(this.like),i.onclick=function(){if(i.innerHTML.indexOf("hrt.svg")>-1){var e=t.isLiked?t.like:t.like+1;i.innerHTML='<img src="'.concat(a,'hrtr.svg">').concat(e),t.onLike(t.id)}else{var n=t.isLiked?t.like-1:t.like;i.innerHTML='<img src="'.concat(a,'hrt.svg">').concat(n),t.onUnlike(t.id)}},e.appendChild(n),e.appendChild(i),e}}])&&g(e.prototype,n),i&&g(e,i),t}();function S(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var E="userLike";const L=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.isAuth=window._colorpk.auth,this.hasLocalStorage=o,this.likeMap=this.initLike()}var e,n,i;return e=t,(n=[{key:"initLike",value:function(){var t={};if(this.isAuth)Array.isArray(window._colorpk.list1)?window._colorpk.list1.forEach((function(e){t[e.k.toString()]=!0})):Array.isArray(window._colorpk.likes)&&window._colorpk.likes.forEach((function(e){t[e.toString()]=!0}));else if(this.hasLocalStorage){var e=JSON.parse(window.localStorage.getItem(E));Array.isArray(e)?e.forEach((function(e){t[e.toString()]=!0})):window.localStorage.setItem(E,JSON.stringify([]))}return t}},{key:"addLike",value:function(t){if(this.likeMap[t.toString()]=!0,r(t,"POST"),!this.isAuth&&this.hasLocalStorage){var e=JSON.parse(window.localStorage.getItem(E));e.push(t),window.localStorage.setItem(E,JSON.stringify(e))}}},{key:"removeLike",value:function(t){if(delete this.likeMap[t.toString()],r(t,"DELETE"),!this.isAuth&&this.hasLocalStorage){var e=JSON.parse(window.localStorage.getItem(E));e=e.filter((function(e){return e!==t})),window.localStorage.setItem(E,JSON.stringify(e))}}}])&&S(e.prototype,n),i&&S(e,i),t}());var x=document.getElementsByClassName("list")[0],O="list0",C="list1",T=O,A=function(t){var e=t===C;x.innerHTML="",window._colorpk[t].forEach((function(t,n){var i=t.k,o=t.v,r=t.s,a=new b({id:i,color:o,like:r,isLiked:e||Object.prototype.hasOwnProperty.call(L.likeMap,i),onLike:function(t){if(L.addLike(t),!e){var n=window._colorpk[O].find((function(e){return e.k===t}));window._colorpk[C].push(n)}},onUnlike:function(t){if(L.removeLike(t),window._colorpk[C]=window._colorpk[C].filter((function(e){return e.k!==t})),e){var n=document.querySelector("[data-k='".concat(t,"']"));x.removeChild(n)}},onRedir:function(t){window.location.href="/color/".concat(t)}});try{var c="".concat(45*n,"ms");a.style.animationDelay=c;for(var l=a.querySelectorAll(".canvas > div"),s=0;s<4;s+=1)l[s].style.animationDelay=c}catch(t){console.warn("browser compatible")}x.appendChild(a)})),window._colorpk[t].length<1&&(x.innerHTML="<h3>You have not ".concat(e?"saved":"created"," any color.</h3>"))};document.getElementById("switch_left").onclick=function(){T!==O&&(A(O),T=O)},document.getElementById("switch_right").onclick=function(){T!==C&&(A(C),T=C)},A(T)})()})();