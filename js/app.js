!function t(e,n,i){function r(s,a){if(!n[s]){if(!e[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(o)return o(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var h=n[s]={exports:{}};e[s][0].call(h.exports,function(t){var n=e[s][1][t];return r(n||t)},h,h.exports,t,e,n,i)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<i.length;s++)r(i[s]);return r}({1:[function(t,e,n){function i(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(c===setTimeout)return setTimeout(t,0);if((c===i||!c)&&setTimeout)return c=setTimeout,setTimeout(t,0);try{return c(t,0)}catch(e){try{return c.call(null,t,0)}catch(e){return c.call(this,t,0)}}}function s(t){if(d===clearTimeout)return clearTimeout(t);if((d===r||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{return d(t)}catch(e){try{return d.call(null,t)}catch(e){return d.call(this,t)}}}function a(){p&&m&&(p=!1,m.length?g=m.concat(g):v=-1,g.length&&l())}function l(){if(!p){var t=o(a);p=!0;for(var e=g.length;e;){for(m=g,g=[];++v<e;)m&&m[v].run();v=-1,e=g.length}m=null,p=!1,s(t)}}function u(t,e){this.fun=t,this.array=e}function h(){}var c,d,f=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:i}catch(t){c=i}try{d="function"==typeof clearTimeout?clearTimeout:r}catch(t){d=r}}();var m,g=[],p=!1,v=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];g.push(new u(t,e)),1!==g.length||p||o(l)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=h,f.addListener=h,f.once=h,f.off=h,f.removeListener=h,f.removeAllListeners=h,f.emit=h,f.prependListener=h,f.prependOnceListener=h,f.listeners=function(t){return[]},f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},{}],2:[function(t,e,n){!function(t,i){"object"==typeof n&&"object"==typeof e?e.exports=i():"function"==typeof define&&define.amd?define("Siema",[],i):"object"==typeof n?n.Siema=i():t.Siema=i()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=function(){function t(e){var n=this;i(this,t),this.config=t.mergeSettings(e),this.selector="string"==typeof this.config.selector?document.querySelector(this.config.selector):this.config.selector,this.selectorWidth=this.selector.offsetWidth,this.innerElements=[].slice.call(this.selector.children),this.currentSlide=this.config.startIndex,this.transformProperty=t.webkitOrNot(),["resizeHandler","touchstartHandler","touchendHandler","touchmoveHandler","mousedownHandler","mouseupHandler","mouseleaveHandler","mousemoveHandler"].forEach(function(t){n[t]=n[t].bind(n)}),this.init()}return o(t,[{key:"init",value:function(){if(window.addEventListener("resize",this.resizeHandler),this.config.draggable&&(this.pointerDown=!1,this.drag={startX:0,endX:0,startY:0,letItGo:null},this.selector.addEventListener("touchstart",this.touchstartHandler,{passive:!0}),this.selector.addEventListener("touchend",this.touchendHandler),this.selector.addEventListener("touchmove",this.touchmoveHandler,{passive:!0}),this.selector.addEventListener("mousedown",this.mousedownHandler),this.selector.addEventListener("mouseup",this.mouseupHandler),this.selector.addEventListener("mouseleave",this.mouseleaveHandler),this.selector.addEventListener("mousemove",this.mousemoveHandler)),null===this.selector)throw new Error("Something wrong with your selector 😭");this.resolveSlidesNumber(),this.selector.style.overflow="hidden",this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.config.draggable&&(this.selector.style.cursor="-webkit-grab");for(var t=document.createDocumentFragment(),e=0;e<this.innerElements.length;e++){var n=document.createElement("div");n.style.cssFloat="left",n.style.float="left",n.style.width=100/this.innerElements.length+"%",n.appendChild(this.innerElements[e]),t.appendChild(n)}this.sliderFrame.appendChild(t),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent(),this.config.onInit.call(this)}},{key:"resolveSlidesNumber",value:function(){if("number"==typeof this.config.perPage)this.perPage=this.config.perPage;else if("object"===r(this.config.perPage)){this.perPage=1;for(var t in this.config.perPage)window.innerWidth>=t&&(this.perPage=this.config.perPage[t])}}},{key:"prev",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments[1];if(!(this.innerElements.length<=this.perPage)){var n=this.currentSlide;0===this.currentSlide&&this.config.loop?this.currentSlide=this.innerElements.length-this.perPage:this.currentSlide=Math.max(this.currentSlide-t,0),n!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),e&&e.call(this))}}},{key:"next",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments[1];if(!(this.innerElements.length<=this.perPage)){var n=this.currentSlide;this.currentSlide===this.innerElements.length-this.perPage&&this.config.loop?this.currentSlide=0:this.currentSlide=Math.min(this.currentSlide+t,this.innerElements.length-this.perPage),n!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),e&&e.call(this))}}},{key:"goTo",value:function(t,e){if(!(this.innerElements.length<=this.perPage)){var n=this.currentSlide;this.currentSlide=Math.min(Math.max(t,0),this.innerElements.length-this.perPage),n!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),e&&e.call(this))}}},{key:"slideToCurrent",value:function(){this.sliderFrame.style[this.transformProperty]="translate3d(-"+this.currentSlide*(this.selectorWidth/this.perPage)+"px, 0, 0)"}},{key:"updateAfterDrag",value:function(){var t=this.drag.endX-this.drag.startX,e=Math.abs(t),n=Math.ceil(e/(this.selectorWidth/this.perPage));t>0&&e>this.config.threshold&&this.innerElements.length>this.perPage?this.prev(n):t<0&&e>this.config.threshold&&this.innerElements.length>this.perPage&&this.next(n),this.slideToCurrent()}},{key:"resizeHandler",value:function(){this.resolveSlidesNumber(),this.selectorWidth=this.selector.offsetWidth,this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.slideToCurrent()}},{key:"clearDrag",value:function(){this.drag={startX:0,endX:0,startY:0,letItGo:null}}},{key:"touchstartHandler",value:function(t){t.stopPropagation(),this.pointerDown=!0,this.drag.startX=t.touches[0].pageX,this.drag.startY=t.touches[0].pageY}},{key:"touchendHandler",value:function(t){t.stopPropagation(),this.pointerDown=!1,this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"touchmoveHandler",value:function(t){t.stopPropagation(),null===this.drag.letItGo&&(this.drag.letItGo=Math.abs(this.drag.startY-t.touches[0].pageY)<Math.abs(this.drag.startX-t.touches[0].pageX)),this.pointerDown&&this.drag.letItGo&&(this.drag.endX=t.touches[0].pageX,this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing,this.sliderFrame.style[this.transformProperty]="translate3d("+-1*(this.currentSlide*(this.selectorWidth/this.perPage)+(this.drag.startX-this.drag.endX))+"px, 0, 0)")}},{key:"mousedownHandler",value:function(t){t.preventDefault(),t.stopPropagation(),this.pointerDown=!0,this.drag.startX=t.pageX}},{key:"mouseupHandler",value:function(t){t.stopPropagation(),this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"mousemoveHandler",value:function(t){t.preventDefault(),this.pointerDown&&(this.drag.endX=t.pageX,this.selector.style.cursor="-webkit-grabbing",this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing,this.sliderFrame.style[this.transformProperty]="translate3d("+-1*(this.currentSlide*(this.selectorWidth/this.perPage)+(this.drag.startX-this.drag.endX))+"px, 0, 0)")}},{key:"mouseleaveHandler",value:function(t){this.pointerDown&&(this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.drag.endX=t.pageX,this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.updateAfterDrag(),this.clearDrag())}},{key:"updateFrame",value:function(){this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.config.draggable&&(this.selector.style.cursor="-webkit-grab");for(var t=document.createDocumentFragment(),e=0;e<this.innerElements.length;e++){var n=document.createElement("div");n.style.cssFloat="left",n.style.float="left",n.style.width=100/this.innerElements.length+"%",n.appendChild(this.innerElements[e]),t.appendChild(n)}this.sliderFrame.appendChild(t),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent()}},{key:"remove",value:function(t,e){if(t<0||t>=this.innerElements.length)throw new Error("Item to remove doesn't exist 😭");this.innerElements.splice(t,1),this.currentSlide=t<=this.currentSlide?this.currentSlide-1:this.currentSlide,this.updateFrame(),e&&e.call(this)}},{key:"insert",value:function(t,e,n){if(e<0||e>this.innerElements.length+1)throw new Error("Unable to inset it at this index 😭");if(-1!==this.innerElements.indexOf(t))throw new Error("The same item in a carousel? Really? Nope 😭");this.innerElements.splice(e,0,t),this.currentSlide=e<=this.currentSlide?this.currentSlide+1:this.currentSlide,this.updateFrame(),n&&n.call(this)}},{key:"prepend",value:function(t,e){this.insert(t,0),e&&e.call(this)}},{key:"append",value:function(t,e){this.insert(t,this.innerElements.length+1),e&&e.call(this)}},{key:"destroy",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments[1];if(window.removeEventListener("resize",this.resizeHandler),this.selector.style.cursor="auto",this.selector.removeEventListener("touchstart",this.touchstartHandler),this.selector.removeEventListener("touchend",this.touchendHandler),this.selector.removeEventListener("touchmove",this.touchmoveHandler),this.selector.removeEventListener("mousedown",this.mousedownHandler),this.selector.removeEventListener("mouseup",this.mouseupHandler),this.selector.removeEventListener("mouseleave",this.mouseleaveHandler),this.selector.removeEventListener("mousemove",this.mousemoveHandler),t){for(var n=document.createDocumentFragment(),i=0;i<this.innerElements.length;i++)n.appendChild(this.innerElements[i]);this.selector.innerHTML="",this.selector.appendChild(n),this.selector.removeAttribute("style")}e&&e.call(this)}}],[{key:"mergeSettings",value:function(t){var e={selector:".siema",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,threshold:20,loop:!1,onInit:function(){},onChange:function(){}},n=t;for(var i in n)e[i]=n[i];return e}},{key:"webkitOrNot",value:function(){return"string"==typeof document.documentElement.style.transform?"transform":"WebkitTransform"}}]),t}();e.default=s,t.exports=e.default}])})},{}],3:[function(t,e,n){(function(t){var i=i||function(){var t=[];return{getAll:function(){return t},removeAll:function(){t=[]},add:function(e){t.push(e)},remove:function(e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)},update:function(e,n){if(0===t.length)return!1;var r=0;for(e=void 0!==e?e:i.now();r<t.length;)t[r].update(e)||n?r++:t.splice(r,1);return!0}}}();"undefined"==typeof window&&void 0!==t?i.now=function(){var e=t.hrtime();return 1e3*e[0]+e[1]/1e6}:"undefined"!=typeof window&&void 0!==window.performance&&void 0!==window.performance.now?i.now=window.performance.now.bind(window.performance):void 0!==Date.now?i.now=Date.now:i.now=function(){return(new Date).getTime()},i.Tween=function(t){var e,n=t,r={},o={},s={},a=1e3,l=0,u=!1,h=!1,c=!1,d=0,f=null,m=i.Easing.Linear.None,g=i.Interpolation.Linear,p=[],v=null,y=!1,w=null,E=null,b=null;this.to=function(t,e){return o=t,void 0!==e&&(a=e),this},this.start=function(t){i.add(this),h=!0,y=!1,f=void 0!==t?t:i.now(),f+=d;for(var e in o){if(o[e]instanceof Array){if(0===o[e].length)continue;o[e]=[n[e]].concat(o[e])}void 0!==n[e]&&(r[e]=n[e],r[e]instanceof Array==!1&&(r[e]*=1),s[e]=r[e]||0)}return this},this.stop=function(){return h?(i.remove(this),h=!1,null!==b&&b.call(n,n),this.stopChainedTweens(),this):this},this.end=function(){return this.update(f+a),this},this.stopChainedTweens=function(){for(var t=0,e=p.length;t<e;t++)p[t].stop()},this.delay=function(t){return d=t,this},this.repeat=function(t){return l=t,this},this.repeatDelay=function(t){return e=t,this},this.yoyo=function(t){return u=t,this},this.easing=function(t){return m=t,this},this.interpolation=function(t){return g=t,this},this.chain=function(){return p=arguments,this},this.onStart=function(t){return v=t,this},this.onUpdate=function(t){return w=t,this},this.onComplete=function(t){return E=t,this},this.onStop=function(t){return b=t,this},this.update=function(t){var i,h,b;if(t<f)return!0;!1===y&&(null!==v&&v.call(n,n),y=!0),b=m(h=(h=(t-f)/a)>1?1:h);for(i in o)if(void 0!==r[i]){var I=r[i]||0,S=o[i];S instanceof Array?n[i]=g(S,b):("string"==typeof S&&(S="+"===S.charAt(0)||"-"===S.charAt(0)?I+parseFloat(S):parseFloat(S)),"number"==typeof S&&(n[i]=I+(S-I)*b))}if(null!==w&&w.call(n,b),1===h){if(l>0){isFinite(l)&&l--;for(i in s){if("string"==typeof o[i]&&(s[i]=s[i]+parseFloat(o[i])),u){var T=s[i];s[i]=o[i],o[i]=T}r[i]=s[i]}return u&&(c=!c),f=void 0!==e?t+e:t+d,!0}null!==E&&E.call(n,n);for(var k=0,P=p.length;k<P;k++)p[k].start(f+a);return!1}return!0}},i.Easing={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){return 0===t?0:1===t?1:-Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)},Out:function(t){return 0===t?0:1===t?1:Math.pow(2,-10*t)*Math.sin(5*(t-.1)*Math.PI)+1},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?-.5*Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)+1}},Back:{In:function(t){var e=1.70158;return t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)}},Bounce:{In:function(t){return 1-i.Easing.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*i.Easing.Bounce.In(2*t):.5*i.Easing.Bounce.Out(2*t-1)+.5}}},i.Interpolation={Linear:function(t,e){var n=t.length-1,r=n*e,o=Math.floor(r),s=i.Interpolation.Utils.Linear;return e<0?s(t[0],t[1],r):e>1?s(t[n],t[n-1],n-r):s(t[o],t[o+1>n?n:o+1],r-o)},Bezier:function(t,e){for(var n=0,r=t.length-1,o=Math.pow,s=i.Interpolation.Utils.Bernstein,a=0;a<=r;a++)n+=o(1-e,r-a)*o(e,a)*t[a]*s(r,a);return n},CatmullRom:function(t,e){var n=t.length-1,r=n*e,o=Math.floor(r),s=i.Interpolation.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(o=Math.floor(r=n*(1+e))),s(t[(o-1+n)%n],t[o],t[(o+1)%n],t[(o+2)%n],r-o)):e<0?t[0]-(s(t[0],t[0],t[1],t[1],-r)-t[0]):e>1?t[n]-(s(t[n],t[n],t[n-1],t[n-1],r-n)-t[n]):s(t[o?o-1:0],t[o],t[n<o+1?n:o+1],t[n<o+2?n:o+2],r-o)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=i.Interpolation.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:function(){var t=[1];return function(e){var n=1;if(t[e])return t[e];for(var i=e;i>1;i--)n*=i;return t[e]=n,n}}(),CatmullRom:function(t,e,n,i,r){var o=.5*(n-t),s=.5*(i-e),a=r*r;return(2*e-2*n+o+s)*(r*a)+(-3*e+3*n-2*o-s)*a+o*r+e}}},function(t){"function"==typeof define&&define.amd?define([],function(){return i}):void 0!==e&&"object"==typeof n?e.exports=i:void 0!==t&&(t.TWEEN=i)}(this)}).call(this,t("_process"))},{_process:1}],4:[function(t,e,n){"use strict";function i(){setTimeout(function(){r()},d)}function r(){window.delta/100/60/60>f&&h.next(),i()}function o(t,e,n){var i="-";return Math.random()<.5&&(i="+"),n+100>0&&(i="-"),n-100<=100*-e&&(i="+"),i+100}function s(t){requestAnimationFrame(s),l.update(t),window.delta+=t}function a(t,e,n){for(var i=0;i<e;i++){var r=document.createElement("div");r.style.backgroundImage="url(./images/letters/"+t+"/"+t+"-"+i+".png)",r.className="letter",n.insertBefore(r,null),H.push(n)}}var l=t("tween.js"),u=t("siema");document.querySelectorAll(".siema > img");const h=new u({perPage:{768:1,769:2,1200:3},loop:!0});var c=document.querySelector("#arrow-right"),d=3e3,f=0;document.querySelector("#arrow-left").addEventListener("click",function(){h.prev(),window.delta=0,f=15}),c.addEventListener("click",function(){h.next(),window.delta=0,f=15}),i();var m=document.getElementById("d"),g=document.getElementById("s"),p=document.getElementById("g"),v=document.getElementById("n"),y={y:0},w="-100",E={y:0},b="-100",I={y:0},S="-100",T={y:0},k="-100",P=new l.Tween(y).to({y:w},1e3).onUpdate(function(){m.style.transform="translateY("+y.y+"%)"}).onComplete(function(){w=o(0,m.children.length,y.y),C.to({y:k},1e3)}),M=new l.Tween(E).to({y:b},1e3).onUpdate(function(){g.style.transform="translateY("+E.y+"%)"}).onComplete(function(){b=o(0,g.children.length,E.y),P.to({y:w},1e3)}),F=new l.Tween(I).to({y:S},1e3).onUpdate(function(){p.style.transform="translateY("+I.y+"%)"}).onComplete(function(){S=o(0,p.children.length,I.y),M.to({y:b},1e3)}),C=new l.Tween(T).to({y:k},1e3).onUpdate(function(){v.style.transform="translateY("+T.y+"%)"}).onComplete(function(){k=o(0,v.children.length,T.y),F.to({y:S},1e3)});requestAnimationFrame(s),window.delta=0;var H=[];a("d",9,m),a("s",11,g),a("g",9,p),a("n",12,v),P.easing(l.Easing.Quadratic.In),M.easing(l.Easing.Quadratic.In),F.easing(l.Easing.Quadratic.In),C.easing(l.Easing.Quadratic.In),P.delay(300),M.delay(300),F.delay(300),C.delay(300),P.chain(M),M.chain(F),F.chain(C),C.chain(P),P.start();var O=document.querySelector("#map"),x=document.querySelector("nav");addEventListener("scroll",function(){var t=O.getBoundingClientRect().top,e=O.getBoundingClientRect().bottom,n=x.getBoundingClientRect().top,i=x.getBoundingClientRect().bottom;x.id=t<i&e>n?"white-text":""})},{siema:2,"tween.js":3}]},{},[4]);