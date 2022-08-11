(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ca(this);function r(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.i=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){if(!(a instanceof Array)){a=t(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||ka});
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function u(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.P=b.prototype}
function sa(){this.A=!1;this.m=null;this.j=void 0;this.i=1;this.s=this.o=0;this.I=this.l=null}
function ua(a){if(a.A)throw new TypeError("Generator is already running");a.A=!0}
sa.prototype.D=function(a){this.j=a};
function va(a,b){a.l={Oa:b,Ta:!0};a.i=a.o||a.s}
sa.prototype.return=function(a){this.l={return:a};this.i=this.s};
function w(a,b,c){a.i=c;return{value:b}}
sa.prototype.v=function(a){this.i=a};
function wa(a,b,c){a.o=b;void 0!=c&&(a.s=c)}
function ya(a,b){a.i=b;a.o=0}
function za(a){a.o=0;var b=a.l.Oa;a.l=null;return b}
function Aa(a){a.I=[a.l];a.o=0;a.s=0}
function Ba(a){var b=a.I.splice(0)[0];(b=a.l=a.l||b)?b.Ta?a.i=a.o||a.s:void 0!=b.v&&a.s<b.v?(a.i=b.v,a.l=null):a.i=a.s:a.i=0}
function Ca(a){this.i=new sa;this.j=a}
function Da(a,b){ua(a.i);var c=a.i.m;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i.return);
a.i.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.i.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.A=!1,e;var f=e.value}catch(g){return a.i.m=null,va(a.i,g),Fa(a)}a.i.m=null;d.call(a.i,f);return Fa(a)}
function Fa(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.A=!1,{value:b.value,done:!1}}catch(c){a.i.j=void 0,va(a.i,c)}a.i.A=!1;if(a.i.l){b=a.i.l;a.i.l=null;if(b.Ta)throw b.Oa;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){ua(a.i);a.i.m?b=Ea(a,a.i.m.next,b,a.i.D):(a.i.D(b),b=Fa(a));return b};
this.throw=function(b){ua(a.i);a.i.m?b=Ea(a,a.i.m["throw"],b,a.i.D):(va(a.i,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ha(new Ga(new Ca(a)))}
function Ia(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
r("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
r("Promise",function(a){function b(g){this.i=0;this.l=void 0;this.j=[];this.A=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.s()})}this.i.push(g)};
var e=fa.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.s=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.m(l)}}}this.i=null};
c.prototype.m=function(g){this.l(function(){throw g;})};
b.prototype.m=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.xa),reject:g(this.s)}};
b.prototype.xa=function(g){if(g===this)this.s(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.cb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.wa(g):this.o(g)}};
b.prototype.wa=function(g){var h=void 0;try{h=g.then}catch(k){this.s(k);return}"function"==typeof h?this.eb(h,g):this.o(g)};
b.prototype.s=function(g){this.D(2,g)};
b.prototype.o=function(g){this.D(1,g)};
b.prototype.D=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.l=h;2===this.i&&this.ya();this.I()};
b.prototype.ya=function(){var g=this;e(function(){if(g.W()){var h=fa.console;"undefined"!==typeof h&&h.error(g.l)}},1)};
b.prototype.W=function(){if(this.A)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.l;return k(g)};
b.prototype.I=function(){if(null!=this.j){for(var g=0;g<this.j.length;++g)f.j(this.j[g]);this.j=null}};
var f=new c;b.prototype.cb=function(g){var h=this.m();g.oa(h.resolve,h.reject)};
b.prototype.eb=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(v,p){return"function"==typeof v?function(y){try{l(v(y))}catch(z){m(z)}}:p}
var l,m,q=new b(function(v,p){l=v;m=p});
this.oa(k(g,l),k(h,m));return q};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.oa=function(g,h){function k(){switch(l.i){case 1:g(l.l);break;case 2:h(l.l);break;default:throw Error("Unexpected state: "+l.i);}}
var l=this;null==this.j?f.j(k):this.j.push(k);this.A=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=t(g),m=l.next();!m.done;m=l.next())d(m.value).oa(h,k)})};
b.all=function(g){var h=t(g),k=h.next();return k.done?d([]):new b(function(l,m){function q(y){return function(z){v[y]=z;p--;0==p&&l(v)}}
var v=[],p=0;do v.push(void 0),p++,d(k.value).oa(q(v.length-1),m),k=h.next();while(!k.done)})};
return b});
r("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=t(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ja(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=l;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)?delete k[g][this.i]:!1};
return b});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.i;return ha(function(){if(l){for(;l.head!=h.i;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&ja(h.data_,l))for(h=0;h<m.length;h++){var q=m[h];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:m,index:h,entry:q}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.i=b();this.size=0;if(h){h=t(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(t([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},l.list.push(l.entry),this.i.previous.next=l.entry,this.i.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ja(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
r("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
r("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
r("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
r("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function Ka(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
r("Array.prototype.entries",function(a){return a?a:function(){return Ka(this,function(b,c){return[b,c]})}});
r("Array.prototype.keys",function(a){return a?a:function(){return Ka(this,function(b){return b})}});
r("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
r("Object.setPrototypeOf",function(a){return a||qa});
r("Set",function(a){function b(c){this.i=new Map;if(c){c=t(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.i.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(t([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.i.set(c,c);this.size=this.i.size;return this};
b.prototype.delete=function(c){c=this.i.delete(c);this.size=this.i.size;return c};
b.prototype.clear=function(){this.i.clear();this.size=0};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.entries=function(){return this.i.entries()};
b.prototype.values=function(){return this.i.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.i.forEach(function(f){return c.call(d,f,f,e)})};
return b});
r("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
r("Array.prototype.values",function(a){return a?a:function(){return Ka(this,function(b,c){return c})}});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ja(this,b,"includes").indexOf(b,c||0)}});
var A=this||self;function B(a,b,c){a=a.split(".");c=c||A;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function C(a,b){a=a.split(".");b=b||A;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function La(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ma(a){var b=La(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Na(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Va=Ta:Va=Ua;return Va.apply(null,arguments)}
function D(a,b){function c(){}
c.prototype=b.prototype;a.P=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Qb=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Wa(a){return a}
;function Xa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Xa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
D(Xa,Error);Xa.prototype.name="CustomError";function Ya(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;function Za(){}
function $a(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var bb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},E=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},cb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
E(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},db=Array.prototype.every?function(a,b){return Array.prototype.every.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&!b.call(void 0,d[e],e,a))return!1;
return!0};
function eb(a,b){b=bb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function fb(a){return Array.prototype.concat.apply([],arguments)}
function gb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function hb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ma(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ib(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function jb(a){var b=kb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function lb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function mb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=mb(a[c]);return b}
var nb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<nb.length;f++)c=nb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var qb;function rb(){}
function sb(a){return new rb(tb,a)}
var tb={};sb("");var ub=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Ab=/&/g,Bb=/</g,Cb=/>/g,Db=/"/g,Eb=/'/g,Fb=/\x00/g,Gb=/[\x00&<>"']/;function Hb(a,b){this.i=b===Ib?a:""}
Hb.prototype.toString=function(){return this.i.toString()};
var Ib={},Jb=new Hb("about:invalid#zClosurez",Ib);function Kb(){var a=A.navigator;return a&&(a=a.userAgent)?a:""}
function F(a){return-1!=Kb().indexOf(a)}
;function Lb(){return(F("Chrome")||F("CriOS"))&&!F("Edge")||F("Silk")}
;var Mb={};function Nb(a){this.i=Mb===Mb?a:""}
Nb.prototype.toString=function(){return this.i.toString()};var Ob=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pb(a){return a?decodeURI(a):a}
function Qb(a){return Pb(a.match(Ob)[3]||null)}
function Rb(a){var b=a.match(Ob);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Sb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Sb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Tb(a){var b=[],c;for(c in a)Sb(c,a[c],b);return b.join("&")}
var Ub=/#|$/;function Vb(a,b){var c=a.search(Ub);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;var Wb={};function Xb(a){if(a!==Wb)throw Error("requires a valid immutable API token");}
;function bc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function cc(a){cc[" "](a);return a}
cc[" "]=function(){};var dc=F("Opera"),ec=F("Trident")||F("MSIE"),fc=F("Edge"),gc=F("Gecko")&&!(-1!=Kb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),hc=-1!=Kb().toLowerCase().indexOf("webkit")&&!F("Edge");function ic(){var a=A.document;return a?a.documentMode:void 0}
var jc;a:{var kc="",lc=function(){var a=Kb();if(gc)return/rv:([^\);]+)(\)|;)/.exec(a);if(fc)return/Edge\/([\d\.]+)/.exec(a);if(ec)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(hc)return/WebKit\/(\S+)/.exec(a);if(dc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
lc&&(kc=lc?lc[1]:"");if(ec){var mc=ic();if(null!=mc&&mc>parseFloat(kc)){jc=String(mc);break a}}jc=kc}var nc=jc,oc;if(A.document&&ec){var pc=ic();oc=pc?pc:parseInt(nc,10)||void 0}else oc=void 0;var qc=oc;var rc=bc()||F("iPod"),sc=F("iPad");!F("Android")||Lb();Lb();var tc=F("Safari")&&!(Lb()||F("Coast")||F("Opera")||F("Edge")||F("Edg/")||F("OPR")||F("Firefox")||F("FxiOS")||F("Silk")||F("Android"))&&!(bc()||F("iPad")||F("iPod"));var uc={},vc=null;
function xc(a,b){Ma(a);void 0===b&&(b=0);if(!vc){vc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));uc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===vc[h]&&(vc[h]=g)}}}b=uc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var yc="undefined"!==typeof Uint8Array,zc={};var Ac;function Bc(a){if(zc!==zc)throw Error("illegal external caller");this.Ja=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Bc.prototype.isEmpty=function(){return null==this.Ja};var Cc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Dc(a,b){Object.isFrozen(a)||(Cc?a[Cc]|=b:void 0!==a.N?a.N|=b:Object.defineProperties(a,{N:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function Ec(a,b){Object.isExtensible(a)&&(Cc?a[Cc]&&(a[Cc]&=~b):void 0!==a.N&&(a.N&=~b))}
function Fc(a){var b;Cc?b=a[Cc]:b=a.N;return null==b?0:b}
function Gc(a,b){Cc?a[Cc]=b:void 0!==a.N?a.N=b:Object.defineProperties(a,{N:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function Hc(a){Dc(a,1);return a}
function G(a){return a?!!(Fc(a)&2):!1}
function Ic(a){Dc(a,16);return a}
function Jc(a){if(!Array.isArray(a))throw Error("cannot mark non-array as shared mutably");Ec(a,16)}
function Kc(a,b){b?Dc(a,8):Ec(a,8)}
function Lc(a,b){Gc(b,(Fc(a)|0)&-51)}
;function Pc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Qc,Rc=Object.freeze(Hc([]));function Sc(a){if(G(a.u))throw Error("Cannot mutate an immutable Message");}
var Tc="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function Uc(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function Vc(a){return a.displayName||a.name||"unknown type name"}
function Wc(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Vc(b)+" but got "+(a&&Vc(a.constructor)));return a}
function Xc(a,b,c,d){c=void 0===c?!1:c;d=void 0===d?!1:d;if(Array.isArray(a))return new b(d?Ic(a):a);if(c)return new b}
;function Yc(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(yc&&null!=a&&a instanceof Uint8Array)return xc(a);if(a instanceof Bc){var b=a.Ja;null!=b&&"string"!==typeof b&&(yc&&b instanceof Uint8Array?b=xc(b):(La(b),b=null));return null==b?"":a.Ja=b}}}return a}
;function Zc(a,b,c){if(null!=a){if(Array.isArray(a))a=$c(a,b,c);else if(Pc(a)){var d={},e;for(e in a)d[e]=Zc(a[e],b,c);a=d}else a=b(a);return a}}
function $c(a,b,c){var d=Array.prototype.slice.call(a);c(a,d);for(a=0;a<d.length;a++)d[a]=Zc(d[a],b,c);return d}
function ad(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=Yc(a);return Array.isArray(a)?$c(a,ad,bd):a}
function cd(a){if("object"===typeof a){if(yc&&null!=a&&a instanceof Uint8Array)return new Uint8Array(a);if(Array.isArray(a.u)&&a.constructor!==Object)return a.clone()}return a}
function bd(){}
;function dd(a){return a.j||(a.j=a.u[a.m+a.l]={})}
function ed(a,b,c){return-1===b?null:b>=a.m?a.j?a.j[b]:void 0:(void 0===c?0:c)&&a.j&&(c=a.j[b],null!=c)?c:a.u[b+a.l]}
function I(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||Sc(a);a.o&&(a.o=void 0);if(b>=a.m||d)return dd(a)[b]=c,a;void 0!==a.j&&a.m>=a.u.length?(d=a.u.length-1,e=b+a.l,e>=d?(a.u[d]=void 0,a.u[e]=c,a.u.push(a.j)):a.u[e]=c):a.u[b+a.l]=c;void 0!==a.j&&b in a.j&&delete a.j[b];return a}
function fd(a,b,c,d){var e=ed(a,b,d);Array.isArray(e)?e&&Fc(e)&1||Hc(e):e=Rc;if(G(a.u))c&1||(Dc(e,2),Object.freeze(e));else if(e===Rc||G(e))e=Hc(Array.prototype.slice.call(e)),I(a,b,e,d);return e}
function gd(a,b,c,d){Sc(a);(c=hd(a,c))&&c!==b&&null!=d&&(a.i&&c in a.i&&(a.i[c]=void 0),I(a,c));return I(a,b,d)}
function hd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=ed(a,e)&&(0!==c&&I(a,c,void 0,!1,!0),c=e)}return c}
function id(a,b,c,d){d=void 0===d?!1:d;var e=d;a.i||(a.i={});var f=a.i[c];if(f)b=f;else if(b=Xc(ed(a,c,e),b))a.i[c]=b,Dc(b.u,Fc(a.u)&-33);if(null==b)return b;G(b.u)&&!G(a.u)&&(b=b.Ia(),I(a,c,b.u,d),a.i[c]=b);return b}
function jd(a,b,c,d,e){e=void 0===e?!0:e;a.i||(a.i={});var f=a.i[c];d=fd(a,c,2,d);var g=!!(Fc(a.u)&16),h=G(d);h=G(a.u)||h;if(!f){f=[];for(var k=h,l=0;l<d.length;l++){var m=d[l];k=k||G(m);m=Xc(m,b,!1,g);void 0!==m&&(f.push(m),h&&Dc(m.u,2))}a.i[c]=f;Kc(d,!k)}b=h||e;e=G(f);b&&!e&&(Object.isFrozen(f)&&(a.i[c]=f=f.slice()),Dc(f,2),Object.freeze(f));!b&&e&&(a.i[c]=f=f.slice());return f}
function J(a,b,c,d){Sc(a);a.i||(a.i={});null==d?b=d=void 0:b=Wc(d,b).u;a.i[c]=d;return I(a,c,b)}
function kd(a,b,c,d,e){Sc(a);a.i||(a.i={});null!=e?b=Wc(e,b).u:b=e=void 0;a.i[c]=e;gd(a,c,d,b)}
function ld(a,b,c,d){Sc(a);if(null!=d){var e=Hc([]);for(var f=!1,g=0;g<d.length;g++)e[g]=Wc(d[g],b).u,f=f||G(e[g]);a.i||(a.i={});a.i[c]=d;Kc(e,!f)}else a.i&&(a.i[c]=void 0),e=Rc;return I(a,c,e)}
function md(a,b,c,d){Sc(a);var e=jd(a,c,b,void 0,!1);c=null!=d?Wc(d,c):new c;a=fd(a,b,2);e.push(c);a.push(c.u);Xb(Wb);G(c.u)&&Kc(a,!1)}
function nd(a,b){a=ed(a,b);return null==a?"":a}
;function od(a,b,c){a||(a=pd);pd=null;var d=this.constructor.i||0,e=0<d,f=this.constructor.j;a?Fc(a)&16&&Dc(a,32):(a=f?[f]:[],Dc(a,48));e&&0<a.length&&Pc(a[a.length-1])&&"g"in a[a.length-1]&&(d=0);this.l=(f?0:-1)-d;this.i=void 0;this.u=a;a:{f=this.u.length;d=f-1;if(f&&(f=this.u[d],Pc(f))){this.j=f;b=Object.keys(f);0<b.length&&db(b,isNaN)?this.m=Number.MAX_VALUE:this.m=d-this.l;break a}void 0!==b&&-1<b?(this.m=Math.max(b,d+1-this.l),this.j=void 0):this.m=Number.MAX_VALUE}if(!e&&this.j&&"g"in this.j)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
if(c)for(e=0;e<c.length;e++)b=c[e],b<this.m?(b+=this.l,(d=this.u[b])?Array.isArray(d)&&Hc(d):this.u[b]=Rc):(d=dd(this),(f=d[b])?Array.isArray(f)&&Hc(f):d[b]=Rc)}
od.prototype.toJSON=function(){var a=this.u;return Qc?a:$c(a,ad,bd)};
function qd(a){Qc=!0;try{return JSON.stringify(a.toJSON(),rd)}finally{Qc=!1}}
od.prototype.clone=function(){var a=$c(this.u,cd,Lc);Ic(a);pd=a;a=new this.constructor(a);pd=null;sd(a,this);return a};
od.prototype.isMutable=function(a){Xb(a);return!G(this.u)};
od.prototype.toString=function(){return this.u.toString()};
function rd(a,b){return Yc(b)}
function sd(a,b){b.s&&(a.s=b.s.slice());var c=b.i;if(c){b=b.j;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length){var h=a,k=f;k=void 0===k?!1:k;f=G(h.u);var l=jd(h,e[0].constructor,g,k,f);g=fd(h,g,0,void 0===k?!1:k);if(!(h=f)&&(h=g)){if(!g)throw Error("cannot check mutability state of non-array");h=!(Fc(g)&8)}if(h){for(h=0;h<l.length;h++)(k=l[h])&&G(k.u)&&!f&&(l[h]=l[h].Ia(),g[h]=l[h].u);Kc(g,!0)}f=l;for(l=0;l<Math.min(f.length,e.length);l++)sd(f[l],e[l])}}else(f=
id(a,e.constructor,g,f))&&sd(f,e)}}}}
var pd;function td(a,b,c,d,e,f){(a=a.i&&a.i[c])?Array.isArray(a)?(e=f.Aa?Hc(a.slice()):a,ld(b,0<e.length?e[0].constructor:void 0,c,e)):J(b,a.constructor,c,a):(yc&&d instanceof Uint8Array?e=d.length?new Bc(new Uint8Array(d)):Ac||(Ac=new Bc(null)):(Array.isArray(d)&&(e?Dc(d,2):d&&Fc(d)&1&&f.Aa?(e=Array.prototype.slice.call(d),Gc(e,(Fc(d)|0)&-51),d=e):Jc(d)),e=d),I(b,c,e))}
;function ud(){od.apply(this,arguments)}
u(ud,od);ud.prototype.Ia=function(){return this};
if(Tc){var vd={};Object.defineProperties(ud,(vd[Symbol.hasInstance]=Uc(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),vd))};function L(){ud.apply(this,arguments)}
u(L,ud);L.prototype.Ia=function(){if(G(this.u)){var a={Aa:!0};var b=G(this.u);if(b&&!a.Aa)throw Error("copyRepeatedFields must be true for frozen messages");b||Jc(this.u);var c=new this.constructor;this.s&&(c.s=this.s.slice());for(var d=this.u,e=0;e<d.length;e++){var f=d[e];if(e===d.length-1&&Pc(f))for(var g in f){var h=+g;Number.isNaN(h)?dd(c)[g]=f[g]:td(this,c,h,f[g],b,a)}else td(this,c,e-this.l,f,b,a)}c.o=this;a=c}else a=this;return a};
if(Tc){var wd={};Object.defineProperties(L,(wd[Symbol.hasInstance]=Uc(Object[Symbol.hasInstance]),wd))};var xd=window;sb("csi.gstatic.com");sb("googleads.g.doubleclick.net");sb("partner.googleadservices.com");sb("pubads.g.doubleclick.net");sb("securepubads.g.doubleclick.net");sb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var yd;try{new URL("s://g"),yd=!0}catch(a){yd=!1}var zd=yd;function Ad(a,b){a.removeAttribute("srcdoc");if(b instanceof Hb)b instanceof Hb&&b.constructor===Hb?b=b.i:(La(b),b="type_error:SafeUrl");else{a:if(zd){try{var c=new URL(b)}catch(d){c="https:";break a}c=c.protocol}else b:{c=document.createElement("a");try{c.href=b}catch(d){c=void 0;break b}c=-1!==[":",""].indexOf(c.protocol)?"https:":c.protocol}b="javascript:"===c?"about:invalid":b}a.src=b;for(b="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");0<
a.sandbox.length;)a.sandbox.remove(a.sandbox.item(0));for(c=0;c<b.length;c++)a.sandbox.supports&&!a.sandbox.supports(b[c])||a.sandbox.add(b[c])}
;function Bd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
n=Bd.prototype;n.clone=function(){return new Bd(this.x,this.y)};
n.equals=function(a){return a instanceof Bd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Cd(a,b){this.width=a;this.height=b}
n=Cd.prototype;n.clone=function(){return new Cd(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Dd(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Ed(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Fd(a){var b=Gd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Hd(){var a=[];Fd(function(b){a.push(b)});
return a}
var Gd={yb:"allow-forms",zb:"allow-modals",Ab:"allow-orientation-lock",Bb:"allow-pointer-lock",Cb:"allow-popups",Db:"allow-popups-to-escape-sandbox",Eb:"allow-presentation",Fb:"allow-same-origin",Gb:"allow-scripts",Hb:"allow-top-navigation",Ib:"allow-top-navigation-by-user-activation"},Id=$a(function(){return Hd()});
function Jd(){var a=Kd(),b={};E(Id(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Kd(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Ld(a){this.isValid=a}
function Md(a){return new Ld(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Nd=[Md("data"),Md("http"),Md("https"),Md("mailto"),Md("ftp"),new Ld(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Od(a,b){b=void 0===b?Nd:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof Ld&&d.isValid(a))return new Hb(a,Ib)}}
function Pd(a){var b=void 0===b?Nd:b;return Od(a,b)||Jb}
;var Qd=(new Date).getTime();function Rd(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var Sd="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ia(Sd);function Td(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(q){for(var v=g,p=0;64>p;p+=4)v[p/4]=q[p]<<24|q[p+1]<<16|q[p+2]<<8|q[p+3];for(p=16;80>p;p++)q=v[p-3]^v[p-8]^v[p-14]^v[p-16],v[p]=(q<<1|q>>>31)&4294967295;q=e[0];var y=e[1],z=e[2],H=e[3],K=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var M=H^y&(z^H);var O=1518500249}else M=y^z^H,O=1859775393;else 60>p?(M=y&z|H&(y|z),O=2400959708):(M=y^z^H,O=3395469782);M=((q<<5|q>>>27)&4294967295)+M+K+O+v[p]&4294967295;K=H;H=z;z=(y<<30|y>>>2)&4294967295;y=q;q=M}e[0]=e[0]+q&4294967295;e[1]=e[1]+y&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+H&4294967295;e[4]=e[4]+K&4294967295}
function c(q,v){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var p=[],y=0,z=q.length;y<z;++y)p.push(q.charCodeAt(y));q=p}v||(v=q.length);p=0;if(0==l)for(;p+64<v;)b(q.slice(p,p+64)),p+=64,m+=64;for(;p<v;)if(f[l++]=q[p++],m++,64==l)for(l=0,b(f);p+64<v;)b(q.slice(p,p+64)),p+=64,m+=64}
function d(){var q=[],v=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=v&255,v>>>=8;b(f);for(p=v=0;5>p;p++)for(var y=24;0<=y;y-=8)q[v++]=e[p]>>y&255;return q}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,hb:function(){for(var q=d(),v="",p=0;p<q.length;p++)v+="0123456789ABCDEF".charAt(Math.floor(q[p]/16))+"0123456789ABCDEF".charAt(q[p]%16);return v}}}
;function Ud(a,b,c){var d=String(A.location.href);return d&&a&&b?[b,Vd(Rd(d),a,c||null)].join(" "):null}
function Vd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],E(d,function(h){e.push(h)}),Yd(e.join(" "));
var f=[],g=[];E(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];E(d,function(h){e.push(h)});
a=Yd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Yd(a){var b=Td();b.update(a);return b.hb().toLowerCase()}
;var Zd={};function $d(a){this.i=a||{cookie:""}}
n=$d.prototype;n.isEnabled=function(){if(!A.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Ca:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Ub;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ca}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.i.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=ub(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ca:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.i.cookie};
n.clear=function(){for(var a=(this.i.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=ub(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var ae=new $d("undefined"==typeof document?null:document);function be(a){return!!Zd.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function ce(a,b,c,d){(a=A[a])||(a=(new $d(document)).get(b));return a?Ud(a,c,d):null}
function de(a){var b=void 0===b?!1:b;var c=Rd(String(A.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=A.__SAPISID||A.__APISID||A.__3PSAPISID||A.__OVERRIDE_SID;be(e)&&(f=f||A.__1PSAPISID);if(f)e=!0;else{var g=new $d(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");be(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?A.__SAPISID:A.__APISID,e||(e=new $d(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Ud(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&be(b)&&((b=ce("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=ce("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function ee(){this.l=this.l;this.s=this.s}
ee.prototype.l=!1;ee.prototype.dispose=function(){this.l||(this.l=!0,this.ba())};
ee.prototype.ba=function(){if(this.s)for(;this.s.length;)this.s.shift()()};function fe(a,b){this.type=a;this.i=this.target=b;this.defaultPrevented=this.l=!1}
fe.prototype.stopPropagation=function(){this.l=!0};
fe.prototype.preventDefault=function(){this.defaultPrevented=!0};function ge(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||A.$googDebugFname||b}catch(g){e="Not available",c=!0}b=he(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ie[c])c=ie[c];else{c=String(c);if(!ie[c]){var f=/function\s+([^\(]+)/m.exec(c);ie[c]=f?f[1]:"[Anonymous]"}c=ie[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function he(a,b){b||(b={});b[je(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[je(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=he(a,b));return c}
function je(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var ie={};var ke=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{A.addEventListener("test",function(){},b),A.removeEventListener("test",function(){},b)}catch(c){}return a}();function le(a,b){fe.call(this,a?a.type:"");this.relatedTarget=this.i=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
D(le,fe);var me={2:"touch",3:"pen",4:"mouse"};
le.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.i=b;if(b=a.relatedTarget){if(gc){a:{try{cc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:me[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&le.P.preventDefault.call(this)};
le.prototype.stopPropagation=function(){le.P.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
le.prototype.preventDefault=function(){le.P.preventDefault.call(this);var a=this.j;a.preventDefault?a.preventDefault():a.returnValue=!1};var ne="closure_listenable_"+(1E6*Math.random()|0);var oe=0;function pe(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ra=e;this.key=++oe;this.ha=this.na=!1}
function qe(a){a.ha=!0;a.listener=null;a.proxy=null;a.src=null;a.ra=null}
;function re(a){this.src=a;this.listeners={};this.i=0}
re.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=se(a,b,d,e);-1<g?(b=a[g],c||(b.na=!1)):(b=new pe(b,this.src,f,!!d,e),b.na=c,a.push(b));return b};
re.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=se(e,b,c,d);return-1<b?(qe(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function te(a,b){var c=b.type;c in a.listeners&&eb(a.listeners[c],b)&&(qe(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function se(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ha&&f.listener==b&&f.capture==!!c&&f.ra==d)return e}return-1}
;var ue="closure_lm_"+(1E6*Math.random()|0),ve={},we=0;function xe(a,b,c,d,e){if(d&&d.once)ye(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)xe(a,b[f],c,d,e);else c=ze(c),a&&a[ne]?a.X(b,c,Na(d)?!!d.capture:!!d,e):Ae(a,b,c,!1,d,e)}
function Ae(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Na(e)?!!e.capture:!!e,h=Be(a);h||(a[ue]=h=new re(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ce();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ke||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(De(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");we++}}
function Ce(){function a(c){return b.call(a.src,a.listener,c)}
var b=Ee;return a}
function ye(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ye(a,b[f],c,d,e);else c=ze(c),a&&a[ne]?a.i.add(String(b),c,!0,Na(d)?!!d.capture:!!d,e):Ae(a,b,c,!0,d,e)}
function Fe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Fe(a,b[f],c,d,e);else(d=Na(d)?!!d.capture:!!d,c=ze(c),a&&a[ne])?a.i.remove(String(b),c,d,e):a&&(a=Be(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=se(b,c,d,e)),(c=-1<a?b[a]:null)&&Ge(c))}
function Ge(a){if("number"!==typeof a&&a&&!a.ha){var b=a.src;if(b&&b[ne])te(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(De(c),d):b.addListener&&b.removeListener&&b.removeListener(d);we--;(c=Be(b))?(te(c,a),0==c.i&&(c.src=null,b[ue]=null)):qe(a)}}}
function De(a){return a in ve?ve[a]:ve[a]="on"+a}
function Ee(a,b){if(a.ha)a=!0;else{b=new le(b,this);var c=a.listener,d=a.ra||a.src;a.na&&Ge(a);a=c.call(d,b)}return a}
function Be(a){a=a[ue];return a instanceof re?a:null}
var He="__closure_events_fn_"+(1E9*Math.random()>>>0);function ze(a){if("function"===typeof a)return a;a[He]||(a[He]=function(b){return a.handleEvent(b)});
return a[He]}
;function Ie(){ee.call(this);this.i=new re(this);this.W=this;this.D=null}
D(Ie,ee);Ie.prototype[ne]=!0;Ie.prototype.addEventListener=function(a,b,c,d){xe(this,a,b,c,d)};
Ie.prototype.removeEventListener=function(a,b,c,d){Fe(this,a,b,c,d)};
function Je(a,b){var c=a.D;if(c){var d=[];for(var e=1;c;c=c.D)d.push(c),++e}a=a.W;c=b.type||b;"string"===typeof b?b=new fe(b,a):b instanceof fe?b.target=b.target||a:(e=b,b=new fe(c,a),pb(b,e));e=!0;if(d)for(var f=d.length-1;!b.l&&0<=f;f--){var g=b.i=d[f];e=Ke(g,c,!0,b)&&e}b.l||(g=b.i=a,e=Ke(g,c,!0,b)&&e,b.l||(e=Ke(g,c,!1,b)&&e));if(d)for(f=0;!b.l&&f<d.length;f++)g=b.i=d[f],e=Ke(g,c,!1,b)&&e}
Ie.prototype.ba=function(){Ie.P.ba.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,qe(d[e]);delete a.listeners[c];a.i--}}this.D=null};
Ie.prototype.X=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Ke(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ha&&g.capture==c){var h=g.listener,k=g.ra||g.src;g.na&&te(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Le(a){Ie.call(this);var b=this;this.I=this.m=0;this.K=null!=a?a:{M:function(e,f){return setTimeout(e,f)},
Z:function(e){clearTimeout(e)}};
var c,d;this.j=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.o=function(){return x(function(e){return w(e,Me(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.I||Ne(this)}
u(Le,Ie);function Oe(){var a=Pe;Le.i||(Le.i=new Le(a));return Le.i}
Le.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.K.Z(this.I);delete Le.i};
Le.prototype.G=function(){return this.j};
function Ne(a){a.I=a.K.M(function(){var b;return x(function(c){if(1==c.i)return a.j?(null==(b=window.navigator)?0:b.onLine)?c.v(3):w(c,Me(a),3):w(c,Me(a),3);Ne(a);c.i=0})},3E4)}
function Me(a,b){return a.A?a.A:a.A=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.i){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.m=a.K.M(function(){d.abort()},b||2E4)),w(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Aa(h);a.A=void 0;a.m&&(a.K.Z(a.m),a.m=0);g!==a.j&&(a.j=g,a.j?Je(a,"networkstatus-online"):Je(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:za(h),g=!1,h.v(3)}})})}
;function Qe(){this.data_=[];this.i=-1}
Qe.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.i=-1)};
Qe.prototype.get=function(a){return!!this.data_[a]};
function Re(a){-1===a.i&&(a.i=cb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function Se(a){L.call(this,a,-1,Te)}
u(Se,L);function Ue(a,b){return I(a,2,b)}
function Ve(a,b){return I(a,3,b)}
function We(a,b){return I(a,4,b)}
function Xe(a,b){return I(a,5,b)}
function Ye(a,b){return I(a,9,b)}
function Ze(a,b){return ld(a,$e,10,b)}
function af(a,b){return I(a,11,b)}
function bf(a,b){return I(a,1,b)}
function cf(a,b){return I(a,7,b)}
function $e(a){L.call(this,a)}
u($e,L);var Te=[10,6];var df="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function ef(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function ff(){var a=window,b,c;if("function"!==typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues))return null;var d=ef(a);if(d.uach_promise)return d.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(df).then(function(e){null!=d.uach||(d.uach=e);return e});
return d.uach_promise=a}
function gf(a){var b;return af(Ze(Xe(Ue(bf(We(cf(Ye(Ve(new Se,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new $e;d=I(d,1,c.brand);return I(d,2,c.version)}))||[]),a.wow64||!1)}
function hf(){var a,b;return null!=(b=null==(a=ff())?void 0:a.then(function(c){return gf(c)}))?b:null}
;function jf(a,b){this.l=a;this.m=b;this.j=0;this.i=null}
jf.prototype.get=function(){if(0<this.j){this.j--;var a=this.i;this.i=a.next;a.next=null}else a=this.l();return a};
function kf(a,b){a.m(b);100>a.j&&(a.j++,b.next=a.i,a.i=b)}
;var lf;function mf(){var a=A.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Dd();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Va(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!F("Trident")&&!F("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Ma;c.Ma=null;e()}};
return function(e){d.next={Ma:e};d=d.next;b.port2.postMessage(0)}}return function(e){A.setTimeout(e,0)}}
;function nf(a){A.setTimeout(function(){throw a;},0)}
;function of(){this.j=this.i=null}
of.prototype.add=function(a,b){var c=pf.get();c.set(a,b);this.j?this.j.next=c:this.i=c;this.j=c};
of.prototype.remove=function(){var a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.j=null),a.next=null);return a};
var pf=new jf(function(){return new qf},function(a){return a.reset()});
function qf(){this.next=this.scope=this.i=null}
qf.prototype.set=function(a,b){this.i=a;this.scope=b;this.next=null};
qf.prototype.reset=function(){this.next=this.scope=this.i=null};var rf,sf=!1,tf=new of;function uf(a,b){rf||vf();sf||(rf(),sf=!0);tf.add(a,b)}
function vf(){if(A.Promise&&A.Promise.resolve){var a=A.Promise.resolve(void 0);rf=function(){a.then(wf)}}else rf=function(){var b=wf;
"function"!==typeof A.setImmediate||A.Window&&A.Window.prototype&&!F("Edge")&&A.Window.prototype.setImmediate==A.setImmediate?(lf||(lf=mf()),lf(b)):A.setImmediate(b)}}
function wf(){for(var a;a=tf.remove();){try{a.i.call(a.scope)}catch(b){nf(b)}kf(pf,a)}sf=!1}
;function xf(a,b){this.i=a[A.Symbol.iterator]();this.j=b}
xf.prototype[Symbol.iterator]=function(){return this};
xf.prototype.next=function(){var a=this.i.next();return{value:a.done?void 0:this.j.call(void 0,a.value),done:a.done}};
function yf(a,b){return new xf(a,b)}
;function zf(){this.blockSize=-1}
;function Af(){this.blockSize=-1;this.blockSize=64;this.i=[];this.s=[];this.o=[];this.l=[];this.l[0]=128;for(var a=1;a<this.blockSize;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
D(Af,zf);Af.prototype.reset=function(){this.i[0]=1732584193;this.i[1]=4023233417;this.i[2]=2562383102;this.i[3]=271733878;this.i[4]=3285377520;this.m=this.j=0};
function Bf(a,b,c){c||(c=0);var d=a.o;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.i[0];c=a.i[1];var g=a.i[2],h=a.i[3],k=a.i[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+c&4294967295;a.i[2]=a.i[2]+g&4294967295;a.i[3]=a.i[3]+h&4294967295;a.i[4]=a.i[4]+k&4294967295}
Af.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.s,f=this.j;d<b;){if(0==f)for(;d<=c;)Bf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Bf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Bf(this,e);f=0;break}}this.j=f;this.m+=b}};
Af.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.blockSize-(this.j-56));for(var c=this.blockSize-1;56<=c;c--)this.s[c]=b&255,b/=256;Bf(this,this.s);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.i[c]>>d&255,++b;return a};function Cf(){}
Cf.prototype.next=function(){return Df};
var Df={done:!0,value:void 0};function Ef(a){return{value:a,done:!1}}
Cf.prototype.L=function(){return this};function Ff(a){if(a instanceof Gf||a instanceof Hf||a instanceof If)return a;if("function"==typeof a.next)return new Gf(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Gf(function(){return a[Symbol.iterator]()});
if("function"==typeof a.L)return new Gf(function(){return a.L()});
throw Error("Not an iterator or iterable.");}
function Gf(a){this.j=a}
Gf.prototype.L=function(){return new Hf(this.j())};
Gf.prototype[Symbol.iterator]=function(){return new If(this.j())};
Gf.prototype.i=function(){return new If(this.j())};
function Hf(a){this.j=a}
u(Hf,Cf);Hf.prototype.next=function(){return this.j.next()};
Hf.prototype[Symbol.iterator]=function(){return new If(this.j)};
Hf.prototype.i=function(){return new If(this.j)};
function If(a){Gf.call(this,function(){return a});
this.l=a}
u(If,Gf);If.prototype.next=function(){return this.l.next()};function Jf(a,b){this.j={};this.i=[];this.l=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Jf)for(c=Kf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Kf(a){Lf(a);return a.i.concat()}
n=Jf.prototype;n.has=function(a){return Mf(this.j,a)};
n.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Nf;Lf(this);for(var c,d=0;c=this.i[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Nf(a,b){return a===b}
n.isEmpty=function(){return 0==this.size};
n.clear=function(){this.j={};this.l=this.size=this.i.length=0};
n.remove=function(a){return this.delete(a)};
n.delete=function(a){return Mf(this.j,a)?(delete this.j[a],--this.size,this.l++,this.i.length>2*this.size&&Lf(this),!0):!1};
function Lf(a){if(a.size!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];Mf(a.j,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.size!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],Mf(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}}
n.get=function(a,b){return Mf(this.j,a)?this.j[a]:b};
n.set=function(a,b){Mf(this.j,a)||(this.size+=1,this.i.push(a),this.l++);this.j[a]=b};
n.forEach=function(a,b){for(var c=Kf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new Jf(this)};
n.keys=function(){return Ff(this.L(!0)).i()};
n.values=function(){return Ff(this.L(!1)).i()};
n.entries=function(){var a=this;return yf(this.keys(),function(b){return[b,a.get(b)]})};
n.L=function(a){Lf(this);var b=0,c=this.l,d=this,e=new Cf;e.next=function(){if(c!=d.l)throw Error("The map has changed since the iterator was created");if(b>=d.i.length)return Df;var f=d.i[b++];return Ef(a?f:d.j[f])};
return e};
function Mf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var Of=A.JSON.stringify;function Pf(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Qf(a){this.i=0;this.A=void 0;this.m=this.j=this.l=null;this.s=this.o=!1;if(a!=Za)try{var b=this;a.call(void 0,function(c){Rf(b,2,c)},function(c){Rf(b,3,c)})}catch(c){Rf(this,3,c)}}
function og(){this.next=this.context=this.onRejected=this.j=this.i=null;this.l=!1}
og.prototype.reset=function(){this.context=this.onRejected=this.j=this.i=null;this.l=!1};
var pg=new jf(function(){return new og},function(a){a.reset()});
function qg(a,b,c){var d=pg.get();d.j=a;d.onRejected=b;d.context=c;return d}
Qf.prototype.then=function(a,b,c){return rg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Qf.prototype.$goog_Thenable=!0;Qf.prototype.cancel=function(a){if(0==this.i){var b=new sg(a);uf(function(){tg(this,b)},this)}};
function tg(a,b){if(0==a.i)if(a.l){var c=a.l;if(c.j){for(var d=0,e=null,f=null,g=c.j;g&&(g.l||(d++,g.i==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.i&&1==d?tg(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):ug(c),vg(c,e,3,b)))}a.l=null}else Rf(a,3,b)}
function wg(a,b){a.j||2!=a.i&&3!=a.i||xg(a);a.m?a.m.next=b:a.j=b;a.m=b}
function rg(a,b,c,d){var e=qg(null,null,null);e.i=new Qf(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof sg?g(h):f(k)}catch(l){g(l)}}:g});
e.i.l=a;wg(a,e);return e.i}
Qf.prototype.I=function(a){this.i=0;Rf(this,2,a)};
Qf.prototype.W=function(a){this.i=0;Rf(this,3,a)};
function Rf(a,b,c){if(0==a.i){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.i=1;a:{var d=c,e=a.I,f=a.W;if(d instanceof Qf){wg(d,qg(e||Za,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Na(d))try{var k=d.then;if("function"===typeof k){yg(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.A=c,a.i=b,a.l=null,xg(a),3!=b||c instanceof sg||zg(a,c))}}
function yg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function xg(a){a.o||(a.o=!0,uf(a.D,a))}
function ug(a){var b=null;a.j&&(b=a.j,a.j=b.next,b.next=null);a.j||(a.m=null);return b}
Qf.prototype.D=function(){for(var a;a=ug(this);)vg(this,a,this.i,this.A);this.o=!1};
function vg(a,b,c,d){if(3==c&&b.onRejected&&!b.l)for(;a&&a.s;a=a.l)a.s=!1;if(b.i)b.i.l=null,Ag(b,c,d);else try{b.l?b.j.call(b.context):Ag(b,c,d)}catch(e){Bg.call(null,e)}kf(pg,b)}
function Ag(a,b,c){2==b?a.j.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function zg(a,b){a.s=!0;uf(function(){a.s&&Bg.call(null,b)})}
var Bg=nf;function sg(a){Xa.call(this,a)}
D(sg,Xa);sg.prototype.name="cancel";function N(a){ee.call(this);this.A=1;this.m=[];this.o=0;this.i=[];this.j={};this.D=!!a}
D(N,ee);n=N.prototype;n.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.A;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.A=e+3;d.push(e);return e};
function Cg(a,b,c){var d=Dg;if(a=d.j[a]){var e=d.i;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.la(a)}}
n.la=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.o?(this.m.push(a),this.i[a+1]=function(){}):(c&&eb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
n.da=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.D)for(e=0;e<c.length;e++){var g=c[e];Eg(this.i[g+1],this.i[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.l;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.o--,0<this.m.length&&0==this.o)for(;c=this.m.pop();)this.la(c)}}return 0!=e}return!1};
function Eg(a,b,c){uf(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.la,this),delete this.j[a])}else this.i.length=0,this.j={}};
n.ba=function(){N.P.ba.call(this);this.clear();this.m.length=0};function Fg(a){this.i=a}
Fg.prototype.set=function(a,b){void 0===b?this.i.remove(a):this.i.set(a,Of(b))};
Fg.prototype.get=function(a){try{var b=this.i.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Fg.prototype.remove=function(a){this.i.remove(a)};function Gg(a){this.i=a}
D(Gg,Fg);function Hg(a){this.data=a}
function Ig(a){return void 0===a||a instanceof Hg?a:new Hg(a)}
Gg.prototype.set=function(a,b){Gg.P.set.call(this,a,Ig(b))};
Gg.prototype.j=function(a){a=Gg.P.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Gg.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Jg(a){this.i=a}
D(Jg,Gg);Jg.prototype.set=function(a,b,c){if(b=Ig(b)){if(c){if(c<Date.now()){Jg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Jg.P.set.call(this,a,b)};
Jg.prototype.j=function(a){var b=Jg.P.j.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Jg.prototype.remove.call(this,a);else return b}};function Kg(){}
;function Lg(){}
D(Lg,Kg);Lg.prototype[Symbol.iterator]=function(){return Ff(this.L(!0)).i()};
Lg.prototype.clear=function(){var a=Array.from(this);a=t(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Mg(a){this.i=a}
D(Mg,Lg);n=Mg.prototype;n.isAvailable=function(){if(!this.i)return!1;try{return this.i.setItem("__sak","1"),this.i.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.i.setItem(a,b)}catch(c){if(0==this.i.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.i.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.i.removeItem(a)};
n.L=function(a){var b=0,c=this.i,d=new Cf;d.next=function(){if(b>=c.length)return Df;var e=c.key(b++);if(a)return Ef(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ef(e)};
return d};
n.clear=function(){this.i.clear()};
n.key=function(a){return this.i.key(a)};function Ng(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a}
D(Ng,Mg);function Og(a,b){this.j=a;this.i=null;var c;if(c=ec)c=!(9<=Number(qc));if(c){Pg||(Pg=new Jf);this.i=Pg.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),Pg.set(a,this.i));try{this.i.load(this.j)}catch(d){this.i=null}}}
D(Og,Lg);var Qg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Pg=null;function Rg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Qg[b]})}
n=Og.prototype;n.isAvailable=function(){return!!this.i};
n.set=function(a,b){this.i.setAttribute(Rg(a),b);Sg(this)};
n.get=function(a){a=this.i.getAttribute(Rg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.i.removeAttribute(Rg(a));Sg(this)};
n.L=function(a){var b=0,c=this.i.XMLDocument.documentElement.attributes,d=new Cf;d.next=function(){if(b>=c.length)return Df;var e=c[b++];if(a)return Ef(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ef(e)};
return d};
n.clear=function(){for(var a=this.i.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Sg(this)};
function Sg(a){try{a.i.save(a.j)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Tg(a,b){this.j=a;this.i=b+"::"}
D(Tg,Lg);Tg.prototype.set=function(a,b){this.j.set(this.i+a,b)};
Tg.prototype.get=function(a){return this.j.get(this.i+a)};
Tg.prototype.remove=function(a){this.j.remove(this.i+a)};
Tg.prototype.L=function(a){var b=this.j[Symbol.iterator](),c=this,d=new Cf;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.i.length)!=c.i;){e=b.next();if(e.done)return e;e=e.value}return Ef(a?e.slice(c.i.length):c.j.get(e))};
return d};function Ug(a){L.call(this,a)}
u(Ug,L);Ug.prototype.getKey=function(){return ed(this,1)};
Ug.prototype.U=function(){return ed(this,2===hd(this,Vg)?2:-1)};
Ug.prototype.setValue=function(a){return gd(this,2,Vg,a)};
var Vg=[2,3,4,5,6];function Wg(a){L.call(this,a)}
u(Wg,L);function Xg(a){L.call(this,a)}
u(Xg,L);function Yg(a){L.call(this,a,-1,Zg)}
u(Yg,L);var Zg=[2];function $g(a){L.call(this,a,-1,ah)}
u($g,L);$g.prototype.getPlayerType=function(){return ed(this,36)};
$g.prototype.setHomeGroupInfo=function(a){return J(this,Yg,81,a)};
var ah=[9,66,24,32,86,100,101];function bh(a){L.call(this,a,-1,ch)}
u(bh,L);var ch=[15,26,28];function dh(a){L.call(this,a)}
u(dh,L);dh.prototype.setToken=function(a){return I(this,2,a)};function eh(a){L.call(this,a,-1,fh)}
u(eh,L);eh.prototype.setSafetyMode=function(a){return I(this,5,a)};
var fh=[12];function gh(a){L.call(this,a,-1,hh)}
u(gh,L);var hh=[12];function ih(a){L.call(this,a,-1,jh)}
u(ih,L);function kh(a){L.call(this,a)}
u(kh,L);kh.prototype.getKey=function(){return nd(this,1)};
kh.prototype.U=function(){return nd(this,2)};
kh.prototype.setValue=function(a){return I(this,2,a)};
var jh=[4,5];function lh(a){L.call(this,a)}
u(lh,L);function mh(a){L.call(this,a)}
u(mh,L);var nh=[2,3,4];function oh(a){L.call(this,a)}
u(oh,L);function ph(a){L.call(this,a)}
u(ph,L);function qh(a){L.call(this,a)}
u(qh,L);function rh(a){L.call(this,a,-1,sh)}
u(rh,L);var sh=[10,17];function th(a){L.call(this,a)}
u(th,L);function uh(a){L.call(this,a)}
u(uh,L);function vh(a){L.call(this,a)}
u(vh,L);function wh(a){L.call(this,a,442)}
u(wh,L);
var xh=[23,24,11,6,7,5,2,3,13,20,21,22,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,148,151,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,197,198,199,200,201,402,320,203,204,205,206,258,259,260,261,327,209,219,226,227,232,233,234,240,244,247,248,249,251,256,257,266,254,255,270,272,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,334,337,338,340,344,348,350,351,352,
353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,388,389,403,410,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117,439,441];function yh(a){L.call(this,a)}
u(yh,L);function zh(a){L.call(this,a)}
u(zh,L);zh.prototype.setVideoId=function(a){return gd(this,1,Ah,a)};
zh.prototype.getPlaylistId=function(){return ed(this,2===hd(this,Ah)?2:-1)};
var Ah=[1,2];function Bh(a){L.call(this,a,-1,Ch)}
u(Bh,L);var Ch=[3];var Dh=A.window,Eh,Fh,Gh=(null==Dh?void 0:null==(Eh=Dh.yt)?void 0:Eh.config_)||(null==Dh?void 0:null==(Fh=Dh.ytcfg)?void 0:Fh.data_)||{};B("yt.config_",Gh);function Hh(){var a=arguments;1<a.length?Gh[a[0]]=a[1]:1===a.length&&Object.assign(Gh,a[0])}
function P(a,b){return a in Gh?Gh[a]:b}
function Ih(){return P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function Jh(){var a=Gh.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Kh=[];function Lh(a){Kh.forEach(function(b){return b(a)})}
function Mh(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Nh(b)}}:a}
function Nh(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=P("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Hh("ERRORS",e));Lh(a)}
function Oh(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=P("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Hh("ERRORS",e))}
;var Ph=0;B("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++Ph});var Qh={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Rh(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Qh||(this[b]=a[b]);this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?
d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.i=a.pageX;this.j=a.pageY}}catch(e){}}
function Sh(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.i=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.j=a.clientY+b}}
Rh.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Rh.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Rh.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var kb=A.ytEventsEventsListeners||{};B("ytEventsEventsListeners",kb);var Th=A.ytEventsEventsCounter||{count:0};B("ytEventsEventsCounter",Th);
function Uh(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return jb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Na(e[4])&&Na(d)&&lb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Vh(a){a&&("string"==typeof a&&(a=[a]),E(a,function(b){if(b in kb){var c=kb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Wh()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete kb[b]}}))}
var Wh=$a(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Xh(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Uh(a,b,c,d);if(e)return e;e=++Th.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Rh(h);if(!Ed(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Rh(h);
h.currentTarget=a;return c.call(a,h)};
g=Mh(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Wh()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);kb[e]=[a,b,c,g,d];return e}
;function Yh(a,b){"function"===typeof a&&(a=Mh(a));return window.setTimeout(a,b)}
function Zh(a,b){"function"===typeof a&&(a=Mh(a));return window.setInterval(a,b)}
;var $h=/^[\w.]*$/,ai={q:!0,search_query:!0};function bi(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=ci(f[0]||""),h=ci(f[1]||"");g in c?Array.isArray(c[g])?hb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(q){var k=q,l=f[0],m=String(bi);k.args=[{key:l,value:f[1],query:a,method:di==m?"unchanged":m}];ai.hasOwnProperty(l)||Oh(k)}}return c}
var di=String(bi);function ei(a){var b=[];ib(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];E(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function fi(a){"?"==a.charAt(0)&&(a=a.substr(1));return bi(a,"&")}
function gi(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=fi(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Tb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function hi(a){if(!b)var b=window.location.href;var c=a.match(Ob)[1]||null,d=Qb(a);c&&d?(a=a.match(Ob),b=b.match(Ob),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Qb(b)==d&&(Number(b.match(Ob)[4]||null)||null)==(Number(a.match(Ob)[4]||null)||null):!0;return a}
function ci(a){return a&&a.match($h)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function R(a){a=ii(a);return"string"===typeof a&&"false"===a?!1:!!a}
function ji(a,b){a=ii(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function ii(a){var b=P("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:P("EXPERIMENT_FLAGS",{})[a]}
function ki(){var a=[],b=P("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=P("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;function li(a){var b=mi;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Qd;e.flash="0";a:{try{var f=b.i.top.location.href}catch(Y){f=2;break a}f=f?f===b.j.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?xd:g;try{var h=g.history.length}catch(Y){h=0}e.u_his=h;var k;e.u_h=null==(k=xd.screen)?void 0:k.height;var l;e.u_w=null==(l=xd.screen)?void 0:l.width;var m;e.u_ah=null==(m=xd.screen)?void 0:m.availHeight;var q;e.u_aw=null==
(q=xd.screen)?void 0:q.availWidth;var v;e.u_cd=null==(v=xd.screen)?void 0:v.colorDepth}catch(Y){}h=b.i;try{var p=h.screenX;var y=h.screenY}catch(Y){}try{var z=h.outerWidth;var H=h.outerHeight}catch(Y){}try{var K=h.innerWidth;var M=h.innerHeight}catch(Y){}try{var O=h.screenLeft;var ob=h.screenTop}catch(Y){}try{K=h.innerWidth,M=h.innerHeight}catch(Y){}try{var wc=h.screen.availWidth;var xa=h.screen.availTop}catch(Y){}p=[O,ob,p,y,wc,xa,z,H,K,M];y=b.i.top;try{var ra=(y||window).document,Z="CSS1Compat"==
ra.compatMode?ra.documentElement:ra.body;var da=(new Cd(Z.clientWidth,Z.clientHeight)).round()}catch(Y){da=new Cd(-12245933,-12245933)}ra=da;da={};var ea=void 0===ea?A:ea;Z=new Qe;ea.SVGElement&&ea.document.createElementNS&&Z.set(0);y=Jd();y["allow-top-navigation-by-user-activation"]&&Z.set(1);y["allow-popups-to-escape-sandbox"]&&Z.set(2);ea.crypto&&ea.crypto.subtle&&Z.set(3);ea.TextDecoder&&ea.TextEncoder&&Z.set(4);ea=Re(Z);da.bc=ea;da.bih=ra.height;da.biw=ra.width;da.brdim=p.join();b=b.j;b=(da.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,da.wgl=!!xd.WebGLRenderingContext,da);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var mi=new function(){var a=window.document;this.i=window;this.j=a};
B("yt.ads_.signals_.getAdSignalsString",function(a){return ei(li(a))});Date.now();var ni="XMLHttpRequest"in A?function(){return new XMLHttpRequest}:null;
function oi(){if(!ni)return null;var a=ni();return"open"in a?a:null}
;var pi={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},qi="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(Sd)),ri=!1;
function si(a,b){b=void 0===b?{}:b;var c=hi(a),d=R("web_ajax_ignore_global_headers_if_set"),e;for(e in pi){var f=P(pi[e]);"X-Goog-Visitor-Id"!==e||f||(f=P("VISITOR_DATA"));!f||!c&&Qb(a)||d&&void 0!==b[e]||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Qb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Qb(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||
!Qb(a))b["X-YouTube-Ad-Signals"]=ei(li());return b}
function ti(a){var b=window.location.search,c=Qb(a);R("debug_handle_relative_url_for_query_forward_killswitch")||c||!hi(a)||(c=document.location.hostname);var d=Pb(a.match(Ob)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=fi(b),f={};E(qi,function(g){e[g]&&(f[g]=e[g])});
return gi(a,f||{},!1)}
function ui(a,b){var c=b.format||"JSON";a=vi(a,b);var d=wi(a,b),e=!1,f=xi(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,q=400<=k.status&&500>k.status,v=500<=k.status&&600>k.status;if(l||q||v)m=yi(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};q=b.context||A;l?b.onSuccess&&b.onSuccess.call(q,k,m):b.onError&&b.onError.call(q,k,m);b.onFinish&&b.onFinish.call(q,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Yh(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||A,f))},d)}}
function vi(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=gi(a,b||{},!0);return a}
function wi(a,b){var c=P("XSRF_FIELD_NAME"),d=P("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=P("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Qb(a)&&!b.withCredentials&&Qb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=fi(e),pb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):Tb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;
break a}f=!0}a=!f}!ri&&a&&"POST"!=b.method&&(ri=!0,Nh(Error("AJAX request with postData should use POST")));return e}
function yi(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Oh(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?zi(a):null)e={},E(a.getElementsByTagName("*"),function(g){e[g.tagName]=Ai(g)})}d&&Bi(e);
return e}
function Bi(a){if(Na(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;sb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b];if(void 0===qb){var e=null;var f=A.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Wa,createScript:Wa,createScriptURL:Wa})}catch(g){A.console&&A.console.error(g.message)}qb=e}else qb=e}d=(e=qb)?e.createHTML(d):d;a[c]=new Nb(d)}else Bi(a[b])}}
function zi(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ai(a){var b="";E(a.childNodes,function(c){b+=c.nodeValue});
return b}
function xi(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Mh(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=oi();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;R("debug_forward_web_query_parameters")&&(a=ti(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=si(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Ci={Nb:"WEB_DISPLAY_MODE_UNKNOWN",Jb:"WEB_DISPLAY_MODE_BROWSER",Lb:"WEB_DISPLAY_MODE_MINIMAL_UI",Mb:"WEB_DISPLAY_MODE_STANDALONE",Kb:"WEB_DISPLAY_MODE_FULLSCREEN"};function Di(){if(!A.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return A.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":A.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":A.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":A.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;B("ytglobal.prefsUserPrefsPrefs_",C("ytglobal.prefsUserPrefsPrefs_")||{});var Ei={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Fi={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Gi={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Hi={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Ii(){var a=A.navigator;return a?a.connection:void 0}
;function Ji(){return"INNERTUBE_API_KEY"in Gh&&"INNERTUBE_API_VERSION"in Gh}
function Ki(){return{innertubeApiKey:P("INNERTUBE_API_KEY"),innertubeApiVersion:P("INNERTUBE_API_VERSION"),Ba:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Qa:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),nb:P("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),Sa:P("INNERTUBE_CONTEXT_HL"),Ra:P("INNERTUBE_CONTEXT_GL"),ob:P("INNERTUBE_HOST_OVERRIDE")||"",qb:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),pb:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Li(a){var b={client:{hl:a.Sa,gl:a.Ra,clientName:a.Qa,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ba}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=A.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=ki();0<c.length&&(b.request={internalExperimentFlags:c});Mi(a,void 0,b);Ni(void 0,b);Oi(a,void 0,b);Pi(void 0,b);P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&
(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=t(Object.entries(fi(P("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=t(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Qi(a){var b=new gh,c=new $g;I(c,1,a.Sa);I(c,2,a.Ra);I(c,16,a.nb);I(c,17,a.innertubeContextClientVersion);if(a.Ba){var d=a.Ba,e=new Wg;d.coldConfigData&&I(e,1,d.coldConfigData);d.appInstallData&&I(e,6,d.appInstallData);d.coldHashData&&I(e,3,d.coldHashData);d.hotHashData&&I(e,5,d.hotHashData);J(c,Wg,62,e)}(d=A.devicePixelRatio)&&1!=d&&I(c,65,d);d=P("EXPERIMENTS_TOKEN","");""!==d&&I(c,54,d);d=ki();if(0<d.length){e=new bh;for(var f=0;f<d.length;f++){var g=new Ug;I(g,1,d[f].key);g.setValue(d[f].value);
md(e,15,Ug,g)}J(b,bh,5,e)}Mi(a,c);Ni(c);Oi(a,c);Pi(c);P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(a=new eh,I(a,3,P("DELEGATED_SESSION_ID")));a=t(Object.entries(fi(P("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=t(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?I(c,12,e):"cmodel"===d?I(c,13,e):"cbr"===d?I(c,87,e):"cbrver"===d?I(c,88,e):"cos"===d?I(c,18,e):"cosver"===d?I(c,19,e):"cplatform"===d&&I(c,42,e);J(b,$g,1,c);return b}
function Mi(a,b,c){a=a.Qa;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=id(b,Xg,96)||new Xg;var d=Di();d=Object.keys(Ci).indexOf(d);d=-1===d?null:d;null!==d&&I(c,3,d);J(b,Xg,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Di())}
function Ni(a,b){var c;if(R("web_log_memory_total_kbytes")&&(null==(c=A.navigator)?0:c.deviceMemory)){var d;c=null==(d=A.navigator)?void 0:d.deviceMemory;a?I(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Oi(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=id(b,Wg,62))?d:new Wg;I(c,6,a.appInstallData);J(b,Wg,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Pi(a,b){a:{var c=Ii();if(c){var d=Ei[c.type||"unknown"]||"CONN_UNKNOWN";c=Ei[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?I(a,61,Fi[d]):b&&(b.client.connectionType=d));R("web_log_effective_connection_type")&&(d=Ii(),d=null!=d&&d.effectiveType?Hi.hasOwnProperty(d.effectiveType)?Hi[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?I(a,94,Gi[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Ri(a,b,c){c=void 0===c?{}:c;var d={};P("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":P("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Pb||P("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Ob:b=de([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=P("SESSION_INDEX",0),R("pageid_as_header_web")&&(d["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return d}
;function Si(a){a=Object.assign({},a);delete a.Authorization;var b=de();if(b){var c=new Af;c.update(P("INNERTUBE_API_KEY"));c.update(b);a.hash=xc(c.digest(),3)}return a}
;function Ti(a){var b=new Ng;(b=b.isAvailable()?a?new Tg(b,a):b:null)||(a=new Og(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new Jg(a):null;this.j=document.domain||window.location.hostname}
Ti.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i)try{this.i.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Of(b))}catch(f){return}else e=escape(b);b=this.j;ae.set(""+a,e,{Ca:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Ti.prototype.get=function(a,b){var c=void 0,d=!this.i;if(!d)try{c=this.i.get(a)}catch(e){d=!0}if(d&&(c=ae.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Ti.prototype.remove=function(a){this.i&&this.i.remove(a);var b=this.j;ae.remove(""+a,"/",void 0===b?"youtube.com":b)};var Ui=window,T=Ui.ytcsi&&Ui.ytcsi.now?Ui.ytcsi.now:Ui.performance&&Ui.performance.timing&&Ui.performance.now&&Ui.performance.timing.navigationStart?function(){return Ui.performance.timing.navigationStart+Ui.performance.now()}:function(){return(new Date).getTime()};var Vi;function Wi(){Vi||(Vi=new Ti("yt.innertube"));return Vi}
function Xi(a,b,c,d){if(d)return null;d=Wi().get("nextId",!0)||1;var e=Wi().get("requests",!0)||{};e[d]={method:a,request:b,authState:Si(c),requestTime:Math.round(T())};Wi().set("nextId",d+1,86400,!0);Wi().set("requests",e,86400,!0);return d}
function Yi(a){var b=Wi().get("requests",!0)||{};delete b[a];Wi().set("requests",b,86400,!0)}
function Zi(a){var b=Wi().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState,f=Si(Ri(!1));lb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),$i(a,d.method,e,{}));delete b[c]}}Wi().set("requests",b,86400,!0)}}
;function aj(){}
aj.prototype.M=function(a,b){return bj(a,1,b)};
function cj(a,b){bj(a,2,b)}
;function dj(){aj.apply(this,arguments)}
u(dj,aj);function ej(){dj.i||(dj.i=new dj);return dj.i}
function bj(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Yh(a,c||0)}
dj.prototype.Z=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
dj.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};var Pe=ej();var fj=rc||sc;var gj=function(){var a;return function(){a||(a=new Ti("ytidb"));return a}}();
function hj(){var a;return null==(a=gj())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var ij=[],jj=!1;function kj(a){jj||(ij.push({type:"ERROR",payload:a}),10<ij.length&&ij.shift())}
function lj(a,b){jj||(ij.push({type:"EVENT",eventType:a,payload:b}),10<ij.length&&ij.shift())}
;function mj(a){var b=Ia.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
u(mj,Error);function nj(){try{return oj(),!0}catch(a){return!1}}
function oj(){if(void 0!==P("DATASYNC_ID"))return P("DATASYNC_ID");throw new mj("Datasync ID not set","unknown");}
;function pj(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function qj(a){return a.substr(0,a.indexOf(":"))||a}
;var rj={},sj=(rj.AUTH_INVALID="No user identifier specified.",rj.EXPLICIT_ABORT="Transaction was explicitly aborted.",rj.IDB_NOT_SUPPORTED="IndexedDB is not supported.",rj.MISSING_INDEX="Index not created.",rj.MISSING_OBJECT_STORES="Object stores not created.",rj.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",rj.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",rj.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
rj.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",rj.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",rj.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",rj.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",rj),tj={},uj=(tj.AUTH_INVALID="ERROR",tj.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",tj.EXPLICIT_ABORT="IGNORED",tj.IDB_NOT_SUPPORTED="ERROR",tj.MISSING_INDEX=
"WARNING",tj.MISSING_OBJECT_STORES="ERROR",tj.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",tj.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",tj.QUOTA_EXCEEDED="WARNING",tj.QUOTA_MAYBE_EXCEEDED="WARNING",tj.UNKNOWN_ABORT="WARNING",tj.INCOMPATIBLE_DB_VERSION="WARNING",tj),vj={},wj=(vj.AUTH_INVALID=!1,vj.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,vj.EXPLICIT_ABORT=!1,vj.IDB_NOT_SUPPORTED=!1,vj.MISSING_INDEX=!1,vj.MISSING_OBJECT_STORES=!1,vj.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,vj.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,vj.QUOTA_EXCEEDED=!1,vj.QUOTA_MAYBE_EXCEEDED=!0,vj.UNKNOWN_ABORT=!0,vj.INCOMPATIBLE_DB_VERSION=!1,vj);function U(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?sj[a]:c;d=void 0===d?uj[a]:d;e=void 0===e?wj[a]:e;mj.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.i=e;Object.setPrototypeOf(this,U.prototype)}
u(U,mj);function xj(a,b){U.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},sj.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,xj.prototype)}
u(xj,U);function yj(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,yj.prototype)}
u(yj,Error);var zj=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Aj(a,b,c,d){b=qj(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof U)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new U("QUOTA_EXCEEDED",a);if(tc&&"UnknownError"===e.name)return new U("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof yj)return new U("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&zj.some(function(f){return e.message.includes(f)}))return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new U("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Tb:e.name})];e.level="WARNING";return e}
function Bj(a,b,c){var d=hj();return new U("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Cj(a){if(!a)throw Error();throw a;}
function Dj(a){return a}
function Ej(a){this.i=a}
function V(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=t(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=t(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.i=[];this.onRejected=[];a=a.i;try{a(c,b)}catch(e){b(e)}}
V.all=function(a){return new V(new Ej(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={Y:0};f.Y<a.length;f={Y:f.Y},++f.Y)Fj(V.resolve(a[f.Y]).then(function(g){return function(h){d[g.Y]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
V.resolve=function(a){return new V(new Ej(function(b,c){a instanceof V?a.then(b,c):b(a)}))};
V.reject=function(a){return new V(new Ej(function(b,c){c(a)}))};
V.prototype.then=function(a,b){var c=this,d=null!=a?a:Dj,e=null!=b?b:Cj;return new V(new Ej(function(f,g){"PENDING"===c.state.status?(c.i.push(function(){Gj(c,c,d,f,g)}),c.onRejected.push(function(){Hj(c,c,e,f,g)})):"FULFILLED"===c.state.status?Gj(c,c,d,f,g):"REJECTED"===c.state.status&&Hj(c,c,e,f,g)}))};
function Fj(a,b){a.then(void 0,b)}
function Gj(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof V?Ij(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Hj(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof V?Ij(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ij(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof V?Ij(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Jj(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Kj(a){return new Promise(function(b,c){Jj(a,b,c)})}
function W(a){return new V(new Ej(function(b,c){Jj(a,b,c)}))}
;function Lj(a,b){return new V(new Ej(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Mj(a,b){this.i=a;this.options=b;this.transactionCount=0;this.l=Math.round(T());this.j=!1}
n=Mj.prototype;n.add=function(a,b,c){return Nj(this,[a],{mode:"readwrite",J:!0},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return Nj(this,[a],{mode:"readwrite",J:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){this.i.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
n.count=function(a,b){return Nj(this,[a],{mode:"readonly",J:!0},function(c){return c.objectStore(a).count(b)})};
function Oj(a,b,c){a=a.i.createObjectStore(b,c);return new Pj(a)}
n.delete=function(a,b){return Nj(this,[a],{mode:"readwrite",J:!0},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return Nj(this,[a],{mode:"readonly",J:!0},function(c){return c.objectStore(a).get(b)})};
function Qj(a,b){return Nj(a,["LogsRequestsStore"],{mode:"readwrite",J:!0},function(c){c=c.objectStore("LogsRequestsStore");return W(c.i.put(b,void 0))})}
n.objectStoreNames=function(){return Array.from(this.i.objectStoreNames)};
function Nj(a,b,c,d){var e,f,g,h,k,l,m,q,v,p,y,z;return x(function(H){switch(H.i){case 1:var K={mode:"readonly",J:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?K.mode=c:Object.assign(K,c);e=K;a.transactionCount++;f=e.J?3:1;g=0;case 2:if(h){H.v(3);break}g++;k=Math.round(T());wa(H,4);l=a.i.transaction(b,e.mode);K=new Rj(l);K=Sj(K,d);return w(H,K,6);case 6:return m=H.j,q=Math.round(T()),Tj(a,k,q,g,void 0,b.join(),e),H.return(m);case 4:v=za(H);p=Math.round(T());y=Aj(v,a.i.name,b.join(),a.i.version);
if((z=y instanceof U&&!y.i)||g>=f)Tj(a,k,p,g,y,b.join(),e),h=y;H.v(2);break;case 3:return H.return(Promise.reject(h))}})}
function Tj(a,b,c,d,e,f,g){b=c-b;e?(e instanceof U&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&lj("QUOTA_EXCEEDED",{dbName:qj(a.i.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof U&&"UNKNOWN_ABORT"===e.type&&(c-=a.l,0>c&&c>=Math.pow(2,31)&&(c=0),lj("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.j=!0),Ik(a,!1,d,f,b,g.tag),kj(e)):Ik(a,!0,d,f,b,g.tag)}
function Ik(a,b,c,d,e,f){lj("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.j,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.i.name};
function Pj(a){this.i=a}
n=Pj.prototype;n.add=function(a,b){return W(this.i.add(a,b))};
n.autoIncrement=function(){return this.i.autoIncrement};
n.clear=function(){return W(this.i.clear()).then(function(){})};
n.count=function(a){return W(this.i.count(a))};
function Jk(a,b){return Kk(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?Jk(this,a):W(this.i.delete(a))};
n.get=function(a){return W(this.i.get(a))};
n.index=function(a){try{return new Lk(this.i.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new yj(a,this.i.name);throw b;}};
n.getName=function(){return this.i.name};
n.keyPath=function(){return this.i.keyPath};
function Kk(a,b,c){a=a.i.openCursor(b.query,b.direction);return Mk(a).then(function(d){return Lj(d,c)})}
function Rj(a){var b=this;this.i=a;this.l=new Map;this.j=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.j){e=U;for(var f=b.i.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.i.db.name,mode:b.i.mode});d(e)}})})}
function Sj(a,b){var c=new Promise(function(d,e){try{Fj(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return t(d).next().value})}
Rj.prototype.abort=function(){this.i.abort();this.j=!0;throw new U("EXPLICIT_ABORT");};
Rj.prototype.objectStore=function(a){a=this.i.objectStore(a);var b=this.l.get(a);b||(b=new Pj(a),this.l.set(a,b));return b};
function Lk(a){this.i=a}
n=Lk.prototype;n.count=function(a){return W(this.i.count(a))};
n.delete=function(a){return Nk(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
n.get=function(a){return W(this.i.get(a))};
n.getKey=function(a){return W(this.i.getKey(a))};
n.keyPath=function(){return this.i.keyPath};
n.unique=function(){return this.i.unique};
function Nk(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Mk(a).then(function(d){return Lj(d,c)})}
function Ok(a,b){this.request=a;this.cursor=b}
function Mk(a){return W(a).then(function(b){return b?new Ok(a,b):null})}
n=Ok.prototype;n.advance=function(a){this.cursor.advance(a);return Mk(this.request)};
n.continue=function(a){this.cursor.continue(a);return Mk(this.request)};
n.delete=function(){return W(this.cursor.delete()).then(function(){})};
n.getKey=function(){return this.cursor.key};
n.U=function(){return this.cursor.value};
n.update=function(a){return W(this.cursor.update(a))};function Pk(a,b,c){return new Promise(function(d,e){function f(){v||(v=new Mj(g.result,{closed:q}));return v}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.wb,m=c.upgrade,q=c.closed,v;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&lj("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:qj(a)});var y=f(),z=new Rj(g.transaction);
m&&m(y,function(H){return p.oldVersion<H&&p.newVersion>=H},z);
z.done.catch(function(H){e(H)})}catch(H){e(H)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){lj("IDB_UNEXPECTEDLY_CLOSED",{dbName:qj(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Qk(a,b,c){c=void 0===c?{}:c;return Pk(a,b,c)}
function Rk(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.i)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),w(g,Kj(c),4);
if(2!=g.i)return ya(g,0);f=za(g);throw Aj(f,a,"",-1);})}
;function Sk(a){return new Promise(function(b){cj(function(){b()},a)})}
function Tk(a,b){this.name=a;this.options=b;this.m=!0;this.o=this.s=0;this.j=500}
Tk.prototype.l=function(a,b,c){c=void 0===c?{}:c;return Qk(a,b,c)};
Tk.prototype.delete=function(a){a=void 0===a?{}:a;return Rk(this.name,a)};
function Uk(a,b){return new U("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Vk(a,b){if(!b)throw Bj("openWithToken",qj(a.name));return Wk(a)}
function Wk(a){function b(){var f,g,h,k,l,m,q,v,p,y;return x(function(z){switch(z.i){case 1:return g=null!=(f=Error().stack)?f:"",wa(z,2),w(z,a.l(a.name,a.options.version,d),4);case 4:h=z.j;for(var H=a.options,K=[],M=t(Object.keys(H.ga)),O=M.next();!O.done;O=M.next()){O=O.value;var ob=H.ga[O],wc=void 0===ob.ub?Number.MAX_VALUE:ob.ub;!(h.i.version>=ob.za)||h.i.version>=wc||h.i.objectStoreNames.contains(O)||K.push(O)}k=K;if(0===k.length){z.v(5);break}l=Object.keys(a.options.ga);m=h.objectStoreNames();
if(a.o<ji("ytidb_reopen_db_retries",0))return a.o++,h.close(),kj(new U("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),z.return(b());if(!(a.s<ji("ytidb_remake_db_retries",1))){z.v(6);break}a.s++;if(!R("ytidb_remake_db_enable_backoff_delay")){z.v(7);break}return w(z,Sk(a.j),8);case 8:a.j*=2;case 7:return w(z,a.delete(),9);case 9:return kj(new U("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),z.return(b());
case 6:throw new xj(m,l);case 5:return z.return(h);case 2:q=za(z);if(q instanceof DOMException?"VersionError"!==q.name:"DOMError"in self&&q instanceof DOMError?"VersionError"!==q.name:!(q instanceof Object&&"message"in q)||"An attempt was made to open a database using a lower version than the existing version."!==q.message){z.v(10);break}return w(z,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:v=z.j;p=v.i.version;if(void 0!==a.options.version&&p>a.options.version+1)throw v.close(),
a.m=!1,Uk(a,p);return z.return(v);case 10:throw c(),q instanceof Error&&!R("ytidb_async_stack_killswitch")&&(q.stack=q.stack+"\n"+g.substring(g.indexOf("\n")+1)),Aj(q,a.name,"",null!=(y=a.options.version)?y:-1);}})}
function c(){a.i===e&&(a.i=void 0)}
if(!a.m)throw Uk(a);if(a.i)return a.i;var d={blocking:function(f){f.close()},
closed:c,wb:c,upgrade:a.options.upgrade};var e=b();a.i=e;return a.i}
;var Xk=new Tk("YtIdbMeta",{ga:{databases:{za:1}},upgrade:function(a,b){b(1)&&Oj(a,"databases",{keyPath:"actualName"})}});
function Yk(a,b){var c;return x(function(d){if(1==d.i)return w(d,Vk(Xk,b),2);c=d.j;return d.return(Nj(c,["databases"],{J:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return W(f.i.put(a,void 0)).then(function(){})})}))})}
function Zk(a,b){var c;return x(function(d){if(1==d.i)return a?w(d,Vk(Xk,b),2):d.return();c=d.j;return d.return(c.delete("databases",a))})}
function $k(a,b){var c,d;return x(function(e){return 1==e.i?(c=[],w(e,Vk(Xk,b),2)):3!=e.i?(d=e.j,w(e,Nj(d,["databases"],{J:!0,mode:"readonly"},function(f){c.length=0;return Kk(f.objectStore("databases"),{},function(g){a(g.U())&&c.push(g.U());return g.continue()})}),3)):e.return(c)})}
function al(a){return $k(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var bl,cl=new function(){}(new function(){});
function dl(){var a,b,c,d;return x(function(e){switch(e.i){case 1:a=hj();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=fj)f=/WebKit\/([0-9]+)/.exec(Kb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Kb()),f=!(f&&602<=parseInt(f[1],10)));if(f||fc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(e,Yk(d,cl),4);case 4:return w(e,Zk("yt-idb-test-do-not-use",cl),5);case 5:return e.return(!0);case 2:return za(e),e.return(!1)}})}
function el(){if(void 0!==bl)return bl;jj=!0;return bl=dl().then(function(a){jj=!1;var b;if(null!=(b=gj())&&b.i){var c;b={hasSucceededOnce:(null==(c=hj())?void 0:c.hasSucceededOnce)||a};var d;null==(d=gj())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function fl(){return C("ytglobal.idbToken_")||void 0}
function gl(){var a=fl();return a?Promise.resolve(a):el().then(function(b){(b=b?cl:void 0)&&B("ytglobal.idbToken_",b);return b})}
;new Pf;function hl(a){if(!nj())throw a=new U("AUTH_INVALID",{dbName:a}),kj(a),a;var b=oj();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function il(a,b,c,d){var e,f,g,h,k,l;return x(function(m){switch(m.i){case 1:return f=null!=(e=Error().stack)?e:"",w(m,gl(),2);case 2:g=m.j;if(!g)throw h=Bj("openDbImpl",a,b),R("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),kj(h),h;pj(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:hl(a);wa(m,3);return w(m,Yk(k,g),5);case 5:return w(m,Qk(k.actualName,b,d),6);case 6:return m.return(m.j);case 3:return l=za(m),wa(m,7),w(m,Zk(k.actualName,g),9);case 9:ya(m,
8);break;case 7:za(m);case 8:throw l;}})}
function jl(a,b,c){c=void 0===c?{}:c;return il(a,b,!1,c)}
function kl(a,b,c){c=void 0===c?{}:c;return il(a,b,!0,c)}
function ll(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.i)return w(e,gl(),2);if(3!=e.i){c=e.j;if(!c)return e.return();pj(a);d=hl(a);return w(e,Rk(d.actualName,b),3)}return w(e,Zk(d.actualName,c),0)})}
function ml(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.i?w(e,Rk(d.actualName,b),2):w(e,Zk(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function nl(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.i)return w(d,gl(),2);if(3!=d.i){b=d.j;if(!b)return d.return();pj("LogsDatabaseV2");return w(d,al(b),3)}c=d.j;return w(d,ml(c,a,b),0)})}
function ol(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.i)return w(d,gl(),2);if(3!=d.i){c=d.j;if(!c)return d.return();pj(a);return w(d,Rk(a,b),3)}return w(d,Zk(a,c),0)})}
;function pl(a){this.ma=this.i=!1;this.potentialEsfErrorCounter=this.j=0;this.handleError=function(){};
this.ca=function(){};
this.now=Date.now;this.fa=!1;var b;this.ab=null!=(b=a.ab)?b:100;var c;this.Za=null!=(c=a.Za)?c:1;var d;this.Xa=null!=(d=a.Xa)?d:2592E6;var e;this.Wa=null!=(e=a.Wa)?e:12E4;var f;this.Ya=null!=(f=a.Ya)?f:5E3;var g;this.B=null!=(g=a.B)?g:void 0;this.qa=!!a.qa;var h;this.pa=null!=(h=a.pa)?h:.1;var k;this.ta=null!=(k=a.ta)?k:10;a.handleError&&(this.handleError=a.handleError);a.ca&&(this.ca=a.ca);a.fa&&(this.fa=a.fa);a.ma&&(this.ma=a.ma);this.C=a.C;this.K=a.K;this.F=a.F;this.H=a.H;this.S=a.S;this.Fa=a.Fa;
this.Ea=a.Ea;ql(this)&&(!this.C||this.C("networkless_logging"))&&rl(this)}
function rl(a){ql(a)&&!a.fa&&(a.i=!0,a.qa&&Math.random()<=a.pa&&a.F.gb(a.B),sl(a),a.H.G()&&a.ka(),a.H.X(a.Fa,a.ka.bind(a)),a.H.X(a.Ea,a.La.bind(a)))}
n=pl.prototype;n.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(ql(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.F.set(d,this.B).then(function(e){d.id=e;c.H.G()&&tl(c,d)}).catch(function(e){tl(c,d);
ul(c,e)})}else this.S(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(ql(this)&&this.i){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.C&&this.C("nwl_skip_retry")&&(e.skipRetry=c);if(this.H.G()||this.C&&this.C("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.i)return w(k,d.F.set(e,d.B).catch(function(l){ul(d,l)}),2);
f(g,h);k.i=0})}}this.S(a,b,e.skipRetry)}else this.F.set(e,this.B).catch(function(g){d.S(a,b,e.skipRetry);
ul(d,g)})}else this.S(a,b,this.C&&this.C("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(ql(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.F.aa(d.id,c.B):e=!0;c.H.R&&c.C&&c.C("vss_network_hint")&&c.H.R(!0);f(g,h)};
this.S(d.url,d.options);this.F.set(d,this.B).then(function(g){d.id=g;e&&c.F.aa(d.id,c.B)}).catch(function(g){ul(c,g)})}else this.S(a,b)};
n.ka=function(){var a=this;if(!ql(this))throw Bj("throttleSend");this.j||(this.j=this.K.M(function(){var b;return x(function(c){if(1==c.i)return w(c,a.F.Pa("NEW",a.B),2);if(3!=c.i)return b=c.j,b?w(c,tl(a,b),3):(a.La(),c.return());a.j&&(a.j=0,a.ka());c.i=0})},this.ab))};
n.La=function(){this.K.Z(this.j);this.j=0};
function tl(a,b){var c,d;return x(function(e){switch(e.i){case 1:if(!ql(a))throw c=Bj("immediateSend"),c;if(void 0===b.id){e.v(2);break}return w(e,a.F.sb(b.id,a.B),3);case 3:(d=e.j)?b=d:a.ca(Error("The request cannot be found in the database."));case 2:if(vl(a,b,a.Xa)){e.v(4);break}a.ca(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.v(5);break}return w(e,a.F.aa(b.id,a.B),5);case 5:return e.return();case 4:b.skipRetry||(b=wl(a,b));if(!b){e.v(0);break}if(!b.skipRetry||
void 0===b.id){e.v(8);break}return w(e,a.F.aa(b.id,a.B),8);case 8:a.S(b.url,b.options,!!b.skipRetry),e.i=0}})}
function wl(a,b){if(!ql(a))throw Bj("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return x(function(l){switch(l.i){case 1:g=xl(f);if(!(a.C&&a.C("nwl_consider_error_code")&&g||a.C&&!a.C("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.ta)){l.v(2);break}if(!a.H.ia){l.v(3);break}return w(l,a.H.ia(),3);case 3:if(a.H.G()){l.v(2);break}c(e,f);if(!a.C||!a.C("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){l.v(6);break}return w(l,a.F.Ga(b.id,a.B,!1),6);case 6:return l.return();case 2:if(a.C&&a.C("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.ta)return l.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){l.v(8);break}return b.sendCount<a.Za?w(l,a.F.Ga(b.id,a.B),12):w(l,a.F.aa(b.id,a.B),8);case 12:a.K.M(function(){a.H.G()&&a.ka()},a.Ya);
case 8:c(e,f),l.i=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.i)return void 0===(null==(g=b)?void 0:g.id)?h.v(2):w(h,a.F.aa(b.id,a.B),2);a.H.R&&a.C&&a.C("vss_network_hint")&&a.H.R(!0);d(e,f);h.i=0})};
return b}
function vl(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function sl(a){if(!ql(a))throw Bj("retryQueuedRequests");a.F.Pa("QUEUED",a.B).then(function(b){b&&!vl(a,b,a.Wa)?a.K.M(function(){return x(function(c){if(1==c.i)return void 0===b.id?c.v(2):w(c,a.F.Ga(b.id,a.B),2);sl(a);c.i=0})}):a.H.G()&&a.ka()})}
function ul(a,b){a.bb&&!a.H.G()?a.bb(b):a.handleError(b)}
function ql(a){return!!a.B||a.ma}
function xl(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;var yl=C("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.la;N.prototype.publish=N.prototype.da;N.prototype.clear=N.prototype.clear;B("ytPubsub2Pubsub2Instance",yl);B("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});B("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});B("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});B("ytPubsub2Pubsub2SkipSubKey",null);function zl(a,b){Tk.call(this,a,b);this.options=b;pj(a)}
u(zl,Tk);function Al(a,b){var c;return function(){c||(c=new zl(a,b));return c}}
zl.prototype.l=function(a,b,c){c=void 0===c?{}:c;return(this.options.Ha?kl:jl)(a,b,Object.assign({},c))};
zl.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Ha?ol:ll)(this.name,a)};
function Bl(a,b){return Al(a,b)}
;var Cl;
function Dl(){if(Cl)return Cl();var a={};Cl=Bl("LogsDatabaseV2",{ga:(a.LogsRequestsStore={za:2},a),Ha:!1,upgrade:function(b,c,d){c(2)&&Oj(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.i.indexNames.contains("newRequest")&&d.i.deleteIndex("newRequest"),d.i.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.i.objectStoreNames.contains("sapisid")&&b.i.deleteObjectStore("sapisid");c(9)&&b.i.objectStoreNames.contains("SWHealthLog")&&b.i.deleteObjectStore("SWHealthLog")},
version:9});return Cl()}
;function El(a){return Vk(Dl(),a)}
function Fl(a,b){var c,d,e,f;return x(function(g){if(1==g.i)return c={startTime:T(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(g,El(b),2);if(3!=g.i)return d=g.j,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:P("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(g,Qj(d,e),3);f=g.j;c.xb=T();Gl(c);return g.return(f)})}
function Hl(a,b){var c,d,e,f,g,h,k;return x(function(l){if(1==l.i)return c={startTime:T(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(l,El(b),2);if(3!=l.i)return d=l.j,e=P("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,T()],h=IDBKeyRange.bound(f,g),k=void 0,w(l,Nj(d,["LogsRequestsStore"],{mode:"readwrite",J:!0},function(m){return Nk(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(q){q.U()&&(k=q.U(),"NEW"===a&&(k.status="QUEUED",q.update(k)))})}),
3);
c.xb=T();Gl(c);return l.return(k)})}
function Il(a,b){var c;return x(function(d){if(1==d.i)return w(d,El(b),2);c=d.j;return d.return(Nj(c,["LogsRequestsStore"],{mode:"readwrite",J:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",W(f.i.put(g,void 0)).then(function(){return g})})}))})}
function Jl(a,b,c){c=void 0===c?!0:c;var d;return x(function(e){if(1==e.i)return w(e,El(b),2);d=e.j;return e.return(Nj(d,["LogsRequestsStore"],{mode:"readwrite",J:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),W(g.i.put(h,void 0)).then(function(){return h})):V.resolve(void 0)})}))})}
function Kl(a,b){var c;return x(function(d){if(1==d.i)return w(d,El(b),2);c=d.j;return d.return(c.delete("LogsRequestsStore",a))})}
function Ll(a){var b,c;return x(function(d){if(1==d.i)return w(d,El(a),2);b=d.j;c=T()-2592E6;return w(d,Nj(b,["LogsRequestsStore"],{mode:"readwrite",J:!0},function(e){return Kk(e.objectStore("LogsRequestsStore"),{},function(f){if(f.U().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Ml(){x(function(a){return w(a,nl(),0)})}
function Gl(a){if(!R("nwl_csi_killswitch")&&.01>=Math.random()){var b=C("ytPubsub2Pubsub2Instance");b&&b.publish.call(b,"nwl_transaction_latency_payload".toString(),"nwl_transaction_latency_payload",a)}}
;var Nl={},Ol=Bl("ServiceWorkerLogsDatabase",{ga:(Nl.SWHealthLog={za:1},Nl),Ha:!0,upgrade:function(a,b){b(1)&&Oj(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).i.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Pl(a){return Vk(Ol(),a)}
function Ql(a){var b,c;x(function(d){if(1==d.i)return w(d,Pl(a),2);b=d.j;c=T()-2592E6;return w(d,Nj(b,["SWHealthLog"],{mode:"readwrite",J:!0},function(e){return Kk(e.objectStore("SWHealthLog"),{},function(f){if(f.U().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Rl(a){var b;return x(function(c){if(1==c.i)return w(c,Pl(a),2);b=c.j;return w(c,b.clear("SWHealthLog"),0)})}
;var Sl={},Tl=0;
function Ul(a){var b=void 0===b?"":b;var c=void 0===c?!1:c;if(a)if(b)xi(a,void 0,"POST",b);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))xi(a,void 0,"GET","",void 0,void 0,c);else{b:{try{var d=new Ya({url:a});if(d.l&&d.j||d.m){var e=Pb(a.match(Ob)[5]||null);var f=!(!e||!e.endsWith("/aclk")||"1"!==Vb(a,"ri"));break b}}catch(h){}f=!1}if(f){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var g=!0;break b}}catch(h){}g=!1}b=g?!0:!1}else b=!1;b||Vl(a)}}
function Vl(a){var b=new Image,c=""+Tl++;Sl[c]=b;b.onload=b.onerror=function(){delete Sl[c]};
b.src=a}
;function Wl(){this.i=new Map;this.j=!1}
function Xl(){if(!Wl.i){var a=C("yt.networkRequestMonitor.instance")||new Wl;B("yt.networkRequestMonitor.instance",a);Wl.i=a}return Wl.i}
Wl.prototype.requestComplete=function(a,b){b&&(this.j=!0);a=this.removeParams(a);this.i.get(a)||this.i.set(a,b)};
Wl.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.i.get(a))?!1:!1===a&&this.j?!0:null};
Wl.prototype.removeParams=function(a){return a.split("?")[0]};
Wl.prototype.removeParams=Wl.prototype.removeParams;Wl.prototype.isEndpointCFR=Wl.prototype.isEndpointCFR;Wl.prototype.requestComplete=Wl.prototype.requestComplete;Wl.getInstance=Xl;var Yl;function Zl(){Yl||(Yl=new Ti("yt.offline"));return Yl}
function $l(a){if(R("offline_error_handling")){var b=Zl().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Zl().set("errors",b,2592E3,!0)}}
;function X(){Ie.call(this);var a=this;this.m=!1;this.j=Oe();this.j.X("networkstatus-online",function(){if(a.m&&R("offline_error_handling")){var b=Zl().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new mj(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Nh(d)}Zl().set("errors",{},2592E3,!0)}}})}
u(X,Ie);function am(){if(!X.i){var a=C("yt.networkStatusManager.instance")||new X;B("yt.networkStatusManager.instance",a);X.i=a}return X.i}
n=X.prototype;n.G=function(){return this.j.G()};
n.R=function(a){this.j.j=a};
n.mb=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
n.ib=function(){this.m=!0};
n.X=function(a,b){return this.j.X(a,b)};
n.ia=function(a){a=Me(this.j,a);a.then(function(b){R("use_cfr_monitor")&&Xl().requestComplete("generate_204",b)});
return a};
X.prototype.sendNetworkCheckRequest=X.prototype.ia;X.prototype.listen=X.prototype.X;X.prototype.enableErrorFlushing=X.prototype.ib;X.prototype.getWindowStatus=X.prototype.mb;X.prototype.networkStatusHint=X.prototype.R;X.prototype.isNetworkAvailable=X.prototype.G;X.getInstance=am;function bm(a){a=void 0===a?{}:a;Ie.call(this);var b=this;this.j=this.A=0;this.m=am();var c=C("yt.networkStatusManager.instance.listen").bind(this.m);c&&(a.va?(this.va=a.va,c("networkstatus-online",function(){cm(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){cm(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Je(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Je(b,"publicytnetworkstatus-offline")})))}
u(bm,Ie);bm.prototype.G=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.m)():!0};
bm.prototype.R=function(a){var b=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.m);b&&b(a)};
bm.prototype.ia=function(a){var b=this,c;return x(function(d){c=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.m);return R("skip_network_check_if_cfr")&&Xl().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.R((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.G())})):c?d.return(c(a)):d.return(!0)})};
function cm(a,b){a.va?a.j?(Pe.Z(a.A),a.A=Pe.M(function(){a.o!==b&&(Je(a,b),a.o=b,a.j=T())},a.va-(T()-a.j))):(Je(a,b),a.o=b,a.j=T()):Je(a,b)}
;var dm;function em(){pl.call(this,{F:{gb:Ll,aa:Kl,Pa:Hl,sb:Il,Ga:Jl,set:Fl},H:fm(),handleError:Nh,ca:Oh,S:gm,now:T,bb:$l,K:ej(),Fa:"publicytnetworkstatus-online",Ea:"publicytnetworkstatus-offline",qa:!0,pa:.1,ta:ji("potential_esf_error_limit",10),C:R,fa:!(nj()&&"www.youtube-nocookie.com"!==Qb(document.location.toString()))});this.l=new Pf;R("networkless_immediately_drop_all_requests")&&Ml();ol("LogsDatabaseV2")}
u(em,pl);function hm(){var a=C("yt.networklessRequestController.instance");a||(a=new em,B("yt.networklessRequestController.instance",a),R("networkless_logging")&&gl().then(function(b){a.B=b;rl(a);a.l.resolve();a.qa&&Math.random()<=a.pa&&a.B&&Ql(a.B);R("networkless_immediately_drop_sw_health_store")&&im(a)}));
return a}
em.prototype.writeThenSend=function(a,b){b||(b={});nj()||(this.i=!1);pl.prototype.writeThenSend.call(this,a,b)};
em.prototype.sendThenWrite=function(a,b,c){b||(b={});nj()||(this.i=!1);pl.prototype.sendThenWrite.call(this,a,b,c)};
em.prototype.sendAndWrite=function(a,b){b||(b={});nj()||(this.i=!1);pl.prototype.sendAndWrite.call(this,a,b)};
em.prototype.awaitInitialization=function(){return this.l.promise};
function im(a){var b;x(function(c){if(!a.B)throw b=Bj("clearSWHealthLogsDb"),b;return c.return(Rl(a.B).catch(function(d){a.handleError(d)}))})}
function gm(a,b,c){R("use_cfr_monitor")&&jm(a,b);if(R("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(T())}c&&0===Object.keys(b).length?Ul(a):ui(a,b)}
function fm(){dm||(dm=new bm({rb:!0,jb:!0}));return dm}
function jm(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Xl().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Xl().requestComplete(a,!0);d(e,f)}}
;var km=0,lm=0,mm,nm=A.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1,potentialEsfErrorCounter:lm};B("ytNetworklessLoggingInitializationOptions",nm);function om(a,b){function c(d){var e=pm().G();if(!qm()||!d||e&&R("vss_networkless_bypass_write"))rm(a,b);else{var f={url:a,options:b,timestamp:T(),status:"NEW",sendCount:0};Fl(f,d).then(function(g){f.id=g;pm().G()&&sm(f)}).catch(function(g){sm(f);
pm().G()?Nh(g):$l(g)})}}
b=void 0===b?{}:b;R("skip_is_supported_killswitch")?gl().then(function(d){c(d)}):c(fl())}
function tm(a,b){function c(d){if(qm()&&d){var e={url:a,options:b,timestamp:T(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,l){R("use_cfr_monitor")&&Xl().requestComplete(e.url,!0);void 0!==e.id?Kl(e.id,d):f=!0;R("vss_network_hint")&&pm().R(!0);g(k,l)};
if(R("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,l){Xl().requestComplete(e.url,!1);h(k,l)}}rm(e.url,e.options);
Fl(e,d).then(function(k){e.id=k;f&&Kl(e.id,d)}).catch(function(k){pm().G()?Nh(k):$l(k)})}else rm(a,b)}
b=void 0===b?{}:b;R("skip_is_supported_killswitch")?gl().then(function(d){c(d)}):c(fl())}
function um(){var a=fl();if(!a)throw Bj("throttleSend");km||(km=Pe.M(function(){var b;return x(function(c){if(1==c.i)return w(c,Hl("NEW",a),2);if(3!=c.i)return b=c.j,b?w(c,sm(b),3):(Pe.Z(km),km=0,c.return());km&&(km=0,um());c.i=0})},100))}
function sm(a){var b,c,d;return x(function(e){switch(e.i){case 1:b=fl();if(!b)throw c=Bj("immediateSend"),c;if(void 0===a.id){e.v(2);break}return w(e,Il(a.id,b),3);case 3:(d=e.j)?a=d:Oh(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=T()-f)){e.v(4);break}Oh(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.v(5);break}return w(e,Kl(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=vm(a));f=a;if(R("use_request_time_ms_header")){var g;
if(null==f?0:null==(g=f.options)?0:g.headers)f.options.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T()))}else{var h,k;if(null==f?0:null==(h=f.options)?0:null==(k=h.postParams)?0:k.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(T())}a=f;if(!a){e.v(0);break}if(!a.skipRetry||void 0===a.id){e.v(8);break}return w(e,Kl(a.id,b),8);case 8:rm(a.url,a.options,!!a.skipRetry),e.i=0}})}
function vm(a){var b=fl();if(!b)throw Bj("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return x(function(l){switch(l.i){case 1:R("use_cfr_monitor")&&Xl().requestComplete(a.url,!1);g=xl(f);if(!(R("nwl_consider_error_code")&&g||!R("nwl_consider_error_code")&&wm()<=ji("potential_esf_error_limit",10))){l.v(2);break}if(R("skip_checking_network_on_cfr_failure")&&(!R("skip_checking_network_on_cfr_failure")||Xl().isEndpointCFR(a.url))){l.v(3);break}return w(l,pm().ia(),3);case 3:if(pm().G()){l.v(2);break}c(e,f);if(!R("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){l.v(6);break}return w(l,Jl(a.id,b,!1),6);case 6:return l.return();case 2:if(R("nwl_consider_error_code")&&!g&&wm()>ji("potential_esf_error_limit",10))return l.return();C("ytNetworklessLoggingInitializationOptions")&&nm.potentialEsfErrorCounter++;lm++;if(void 0===(null==(k=a)?void 0:k.id)){l.v(8);break}return 1>a.sendCount?w(l,Jl(a.id,b),12):w(l,Kl(a.id,b),8);case 12:Pe.M(function(){pm().G()&&um()},5E3);
case 8:c(e,f),l.i=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.i)return R("use_cfr_monitor")&&Xl().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.v(2):w(h,Kl(a.id,b),2);R("vss_network_hint")&&pm().R(!0);d(e,f);h.i=0})};
return a}
function pm(){if(R("use_new_nwl"))return fm();mm||(mm=new bm({rb:!0,jb:!0}));return mm}
function rm(a,b,c){c&&0===Object.keys(b).length?Ul(a):ui(a,b)}
function qm(){return C("ytNetworklessLoggingInitializationOptions")?nm.isNwlInitialized:!1}
function wm(){return C("ytNetworklessLoggingInitializationOptions")?nm.potentialEsfErrorCounter:lm}
;function xm(a){var b=this;this.config_=null;a?this.config_=a:Ji()&&(this.config_=Ki());bj(function(){Zi(b)},0,5E3)}
xm.prototype.isReady=function(){!this.config_&&Ji()&&(this.config_=Ki());return!!this.config_};
function $i(a,b,c,d){function e(y){y=void 0===y?!1:y;var z;if(d.retry&&"www.youtube-nocookie.com"!=h&&(y||R("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(z=Xi(b,c,l,k)),z)){var H=g.onSuccess,K=g.onFetchSuccess;g.onSuccess=function(M,O){Yi(z);H(M,O)};
c.onFetchSuccess=function(M,O){Yi(z);K(M,O)}}try{y&&d.retry&&!d.Ua.bypassNetworkless?(g.method="POST",d.Ua.writeThenSend?R("use_new_nwl_wts")?hm().writeThenSend(p,g):om(p,g):R("use_new_nwl_saw")?hm().sendAndWrite(p,g):tm(p,g)):(g.method="POST",g.postParams||(g.postParams={}),ui(p,g))}catch(M){if("InvalidAccessError"==M.name)z&&(Yi(z),z=0),Oh(Error("An extension is blocking network request."));
else throw M;}z&&bj(function(){Zi(a)},0,5E3)}
!P("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Oh(new mj("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new mj("innertube xhrclient not ready",b,c,d);Nh(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(y,z){if(d.onSuccess)d.onSuccess(z)},
onFetchSuccess:function(y){if(d.onSuccess)d.onSuccess(y)},
onError:function(y,z){if(d.onError)d.onError(z)},
onFetchError:function(y){if(d.onError)d.onError(y)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.ob)&&(h=f);var k=a.config_.qb||!1,l=Ri(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,q={alt:"json"},v=a.config_.pb&&f;v=v&&f.startsWith("Bearer");v||(q.key=a.config_.innertubeApiKey);var p=gi(""+h+m,q||{},!0);R("use_new_nwl")&&hm().i||!R("use_new_nwl")&&
qm()?el().then(function(y){e(y)}):e(!1)}
;var ym=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function zm(a){this.I=a;this.i=null;this.o=0;this.D=null;this.A=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.m=0;this.wa=Xh(window,"mousemove",Va(this.xa,this));this.ya=Zh(Va(this.W,this),25)}
D(zm,ee);zm.prototype.xa=function(a){void 0===a.i&&Sh(a);var b=a.i;void 0===a.j&&Sh(a);this.i=new Bd(b,a.j)};
zm.prototype.W=function(){if(this.i){var a=ym();if(0!=this.o){var b=this.D,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.j[this.m]=.5<Math.abs((d-this.A)/this.A)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.I();this.A=d}this.o=a;this.D=this.i;this.m=(this.m+1)%4}};
zm.prototype.ba=function(){window.clearInterval(this.ya);Vh(this.wa)};var Am={};
function Bm(){var a={},b=void 0===a.tb?!1:a.tb;a=void 0===a.kb?!0:a.kb;if(null==C("_lact",window)){var c=parseInt(P("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;B("_lact",c,window);B("_fact",c,window);-1==c&&Cm();Xh(document,"keydown",Cm);Xh(document,"keyup",Cm);Xh(document,"mousedown",Cm);Xh(document,"mouseup",Cm);b?Xh(window,"touchmove",function(){Dm("touchmove",200)},{passive:!0}):(Xh(window,"resize",function(){Dm("resize",200)}),a&&Xh(window,"scroll",function(){Dm("scroll",200)}));
new zm(function(){Dm("mouse",100)});
Xh(document,"touchstart",Cm,{passive:!0});Xh(document,"touchend",Cm,{passive:!0})}}
function Dm(a,b){Am[a]||(Am[a]=!0,Pe.M(function(){Cm();Am[a]=!1},b))}
function Cm(){null==C("_lact",window)&&Bm();var a=Date.now();B("_lact",a,window);-1==C("_fact",window)&&B("_fact",a,window);(a=C("ytglobal.ytUtilActivityCallback_"))&&a()}
function Em(){var a=C("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Fm=A.ytPubsubPubsubInstance||new N,Gm=A.ytPubsubPubsubSubscribedKeys||{},Hm=A.ytPubsubPubsubTopicToKeys||{},Im=A.ytPubsubPubsubIsSynchronous||{};N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.la;N.prototype.publish=N.prototype.da;N.prototype.clear=N.prototype.clear;B("ytPubsubPubsubInstance",Fm);B("ytPubsubPubsubTopicToKeys",Hm);B("ytPubsubPubsubIsSynchronous",Im);B("ytPubsubPubsubSubscribedKeys",Gm);function Jm(a){this.policy=a;this.store=[];this.i={}}
Jm.prototype.storePayload=function(a,b){this.store.push({payload:b,keys:a});b=[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/");this.i[b]?this.i[b]++:this.i[b]=1;this.i[b]>=this.policy.maxBatchSize&&(this.policy.onBatchSizeExceeded(a),this.i[b]=0);return b};
Jm.prototype.extractMatchingEntries=function(a){for(var b=[],c=[],d=t(this.store),e=d.next();!e.done;e=d.next()){e=e.value;a:{var f=a;var g=Object.keys(f);g=t(g);for(var h=g.next();!h.done;h=g.next())if(h=h.value,e.keys[h]!==f[h]){f=!1;break a}f=!0}f?b.push(e.payload):c.push(e)}this.store=c;c=0;a=Km(this,a);a=t(a);for(d=a.next();!d.done;d=a.next())d=d.value,c+=this.i[d],this.i[d]=0;c!==b.length&&Oh(new mj("Transport IMS extracted entries count != keyCounter sum",b.length,c));return b};
Jm.prototype.getSequenceCount=function(a){var b=Km(this,a);a=0;b=t(b);for(var c=b.next();!c.done;c=b.next())a+=this.i[c.value];return a};
function Km(a,b){var c=Object.keys(b),d="THIS_KEY_FIELD_NOT_FILLED",e="THIS_KEY_FIELD_NOT_FILLED",f="THIS_KEY_FIELD_NOT_FILLED";c=t(c);for(var g=c.next();!g.done;g=c.next())g=g.value,"auth"===g?d=Lm(b.auth):"isJspb"===g?e=JSON.stringify(b.isJspb):"cttAuthInfo"===g&&(f=Lm(b.cttAuthInfo));b=[];d=[d,e,f];a=t(Object.keys(a.i));for(e=a.next();!e.done;e=a.next()){e=e.value;f=e.split("/");c=!0;for(g=0;g<d.length;g++)if("THIS_KEY_FIELD_NOT_FILLED"!==d[g]&&d[g]!==f[g]){c=!1;break}c&&b.push(e)}return b}
Jm.prototype.getSequenceCount=Jm.prototype.getSequenceCount;Jm.prototype.extractMatchingEntries=Jm.prototype.extractMatchingEntries;Jm.prototype.storePayload=Jm.prototype.storePayload;function Lm(a){return void 0===a?"undefined":a}
;var Mm=ji("initial_gel_batch_timeout",2E3),Nm=Math.pow(2,16)-1,Om=void 0;function Pm(){this.l=this.i=this.j=0}
var Qm=new Pm,Rm=new Pm,Sm=!0,Tm=A.ytLoggingTransportGELQueue_||new Map;B("ytLoggingTransportGELQueue_",Tm);var Um=A.ytLoggingTransportGELProtoQueue_||new Map;B("ytLoggingTransportGELProtoQueue_",Um);var Vm=A.ytLoggingTransportTokensToCttTargetIds_||{};B("ytLoggingTransportTokensToCttTargetIds_",Vm);var Wm=A.ytLoggingTransportTokensToJspbCttTargetIds_||{};B("ytLoggingTransportTokensToJspbCttTargetIds_",Wm);var Xm={};
function Ym(){var a=C("yt.logging.ims");a||(a=new Jm({maxBatchSize:ji("tvhtml5_logging_max_batch")||ji("web_logging_max_batch")||100,onBatchSizeExceeded:function(b){Zm({writeThenSend:!0},void 0,b.isJspb)}}),B("yt.logging.ims",a));
return a}
function $m(a,b){if("log_event"===a.endpoint){an(a);var c=bn(a);if(R("use_new_in_memory_storage")){Xm[c]=!0;var d={cttAuthInfo:c,isJspb:!1};Ym().storePayload(d,a.payload);cn(b,[],c,!1,d)}else d=Tm.get(c)||[],Tm.set(c,d),d.push(a.payload),cn(b,d,c)}}
function dn(a,b){if("log_event"===a.endpoint){an(void 0,a);var c=bn(a,!0);if(R("use_new_in_memory_storage")){Xm[c]=!0;var d={cttAuthInfo:c,isJspb:!0};Ym().storePayload(d,a.payload.toJSON());cn(b,[],c,!0,d)}else d=Um.get(c)||[],Um.set(c,d),a=a.payload.toJSON(),d.push(a),cn(b,d,c,!0)}}
function cn(a,b,c,d,e){d=void 0===d?!1:d;a&&(Om=new a);a=ji("tvhtml5_logging_max_batch")||ji("web_logging_max_batch")||100;var f=T(),g=d?Rm.l:Qm.l;b=b.length;e&&(b=Ym().getSequenceCount(e));b>=a?Zm({writeThenSend:!0},R("flush_only_full_queue")?c:void 0,d):10<=f-g&&(en(d),d?Rm.l=f:Qm.l=f)}
function fn(a,b){if("log_event"===a.endpoint){an(a);var c=bn(a),d=new Map;d.set(c,[a.payload]);b&&(Om=new b);return new Qf(function(e,f){Om&&Om.isReady()?gn(d,Om,e,f,{bypassNetworkless:!0},!0):e()})}}
function hn(a,b){if("log_event"===a.endpoint){an(void 0,a);var c=bn(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(Om=new b);return new Qf(function(e){Om&&Om.isReady()?jn(d,Om,e,{bypassNetworkless:!0},!0):e()})}}
function bn(a,b){var c="";if(a.ea)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new zh;c.videoId?d.setVideoId(c.videoId):c.playlistId&&gd(d,2,Ah,c.playlistId);Wm[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Vm[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Zm(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new Qf(function(d,e){c?(window.clearTimeout(Rm.j),window.clearTimeout(Rm.i),Rm.i=0):(window.clearTimeout(Qm.j),window.clearTimeout(Qm.i),Qm.i=0);if(Om&&Om.isReady())if(R("use_new_in_memory_storage")){var f=a,g=c,h=Om;f=void 0===f?{}:f;g=void 0===g?!1:g;var k=new Map,l=new Map;if(void 0!==b)g?(e=Ym().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),k.set(b,e),jn(k,h,d,f)):(k=Ym().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),l.set(b,k),gn(l,
h,d,e,f));else if(g){e=t(Object.keys(Xm));for(g=e.next();!g.done;g=e.next())l=g.value,g=Ym().extractMatchingEntries({isJspb:!0,cttAuthInfo:l}),0<g.length&&k.set(l,g),Xm[l]=!1;jn(k,h,d,f)}else{k=t(Object.keys(Xm));for(g=k.next();!g.done;g=k.next()){g=g.value;var m=Ym().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0!==m.length&&l.set(g,m)}gn(l,h,d,e,f)}}else f=a,k=c,h=Om,f=void 0===f?{}:f,k=void 0===k?!1:k,void 0!==b?k?(e=new Map,k=Um.get(b)||[],e.set(b,k),jn(e,h,d,f),Um.delete(b)):(k=new Map,
l=Tm.get(b)||[],k.set(b,l),gn(k,h,d,e,f),Tm.delete(b)):k?(jn(Um,h,d,f),Um.clear()):(gn(Tm,h,d,e,f),Tm.clear());else en(c),d()})}
function en(a){a=void 0===a?!1:a;if(R("web_gel_timeout_cap")&&(!a&&!Qm.i||a&&!Rm.i)){var b=Yh(function(){Zm({writeThenSend:!0},void 0,a)},6E4);
a?Rm.i=b:Qm.i=b}window.clearTimeout(a?Rm.j:Qm.j);b=P("LOGGING_BATCH_TIMEOUT",ji("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&Sm&&(b=Mm);b=Yh(function(){Zm({writeThenSend:!0},void 0,a)},b);
a?Rm.j=b:Qm.j=b}
function gn(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(T()),h=a.size;a=t(a);for(var k=a.next();!k.done;k=a.next()){var l=t(k.value);k=l.next().value;var m=l.next().value;l=k;k=mb({context:Li(b.config_||Ki())});if(!Ma(m)&&!R("throw_err_when_logevent_malformed_killswitch")){d();break}k.events=m;(m=Vm[l])&&kn(k,l,m);delete Vm[l];l="visitorOnlyApprovedKey"===l;ln(k,g,l);mn(e);m=function(){h--;h||c()};
var q=function(){h--;h||c()};
try{$i(b,"log_event",k,nn(e,l,m,q,f)),Sm=!1}catch(v){Nh(v),d()}}}
function jn(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(T()),g=a.size,h=new Map([].concat(ia(a)));h=t(h);for(var k=h.next();!k.done;k=h.next()){var l=t(k.value).next().value,m=a.get(l);k=new Bh;var q=Qi(b.config_||Ki());J(k,gh,1,q);m=m?on(m):[];m=t(m);for(q=m.next();!q.done;q=m.next())md(k,3,wh,q.value);(m=Wm[l])&&pn(k,l,m);delete Wm[l];l="visitorOnlyApprovedKey"===l;qn(k,f,l);mn(d);k=qd(k);l=nn(d,l,function(){g--;g||c()},function(){g--;
g||c()},e);
l.headers["Content-Type"]="application/json+protobuf";l.postBodyFormat="JSPB";l.postBody=k;$i(b,"log_event","",l);Sm=!1}}
function mn(a){R("always_send_and_write")&&(a.writeThenSend=!1)}
function nn(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,Ua:a,ea:b,Rb:!!e,headers:{},postBodyFormat:"",postBody:""};R("use_request_time_ms_header")&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));return a}
function ln(a,b,c){R("use_request_time_ms_header")||(a.requestTimeMs=String(b));R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=P("EVENT_ID"))&&(c=rn(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function qn(a,b,c){R("use_request_time_ms_header")||I(a,2,b);if(!c&&(b=P("EVENT_ID"))){c=rn();var d=new yh;I(d,1,b);I(d,2,c);J(a,yh,5,d)}}
function rn(){var a=P("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Nm/2));a++;a>Nm&&(a=1);Hh("BATCH_CLIENT_COUNTER",a);return a}
function kn(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function pn(a,b,c){if(ed(c,1===hd(c,Ah)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;J(a,zh,4,c);a=id(a,gh,1)||new gh;c=id(a,eh,3)||new eh;var e=new dh;e.setToken(b);I(e,1,d);md(c,12,dh,e);J(a,eh,3,c)}
function on(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new wh(a[c]))}catch(d){Nh(new mj("Transport failed to deserialize "+String(a[c])))}return b}
function an(a,b){if(C("yt.logging.transport.enableScrapingForTest")){var c=C("yt.logging.transport.scrapedPayloadsForTesting"),d=C("yt.logging.transport.payloadToScrape","");b&&(b=C("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);a&&a.payload[d]&&c.push((null==a?void 0:a.payload)[d]);B("yt.logging.transport.scrapedPayloadsForTesting",c)}}
;var sn=A.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",sn);
function tn(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||T());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;R("enable_unknown_lact_fix_on_html5")&&Bm();a=Em();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};R("log_sequence_info_on_gel_web")&&d.ja&&(a=e.context,b=d.ja,b={index:un(b),groupKey:b},a.sequence=b,d.lb&&delete sn[d.ja]);(d.vb?fn:$m)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,ea:d.ea},c)}
function vn(a){Zm(void 0,void 0,void 0===a?!1:a)}
function un(a){sn[a]=a in sn?sn[a]+1:0;return sn[a]}
;var wn=A.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",wn);function xn(a){var b=void 0;b=void 0===b?{}:b;var c=!1;P("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);c=c?null:xm;b=void 0===b?{}:b;var d=Math.round(b.timestamp||T());I(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=Em();d=new vh;I(d,1,b.timestamp||!isFinite(e)?-1:e);if(R("log_sequence_info_on_gel_web")&&b.ja){e=b.ja;var f=un(e),g=new uh;I(g,2,f);I(g,1,e);J(d,uh,3,g);b.lb&&delete wn[b.ja]}J(a,vh,33,d);(b.vb?hn:dn)({endpoint:"log_event",payload:a,cttAuthInfo:b.cttAuthInfo,ea:b.ea},c)}
;function yn(a,b){var c=void 0===c?{}:c;if(R("migrate_events_to_ts")){c=void 0===c?{}:c;var d=xm;P("ytLoggingEventsDefaultDisabled",!1)&&xm===xm&&(d=null);tn(a,b,d,c)}else d=xm,P("ytLoggingEventsDefaultDisabled",!1)&&xm==xm&&(d=null),tn(a,b,d,c)}
;var zn=[{Da:function(a){return"Cannot read property '"+a.key+"'"},
sa:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Da:function(a){return"Cannot call '"+a.key+"'"},
sa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Da:function(a){return a.key+" is not defined"},
sa:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Bn={V:[],T:[{fb:An,weight:500}]};function An(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Cn(){this.T=[];this.V=[]}
var Dn;function En(){if(!Dn){var a=Dn=new Cn;a.V.length=0;a.T.length=0;Bn.V&&a.V.push.apply(a.V,Bn.V);Bn.T&&a.T.push.apply(a.T,Bn.T)}return Dn}
;var Fn=new N;function Gn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Hn(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Hn(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Hn(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Hn(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function In(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Jn(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Gn(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Jn(e+".ve",f,g,h):0;d+=g;d+=Jn(e,a[e],b,c);if(500<d)break}}else c[b]=Kn(a),d+=c[b].length;else c[b]=Kn(a),d+=c[b].length;return d}
function Jn(a,b,c,d){c+="."+a;a=Kn(b);d[c]=a;return c.length+a.length}
function Kn(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var Ln=new Set,Mn=0,Nn=0,On=0,Pn=[],Qn=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Rn(){for(var a=t(Qn),b=a.next();!b.done;b=a.next()){var c=Kb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
;function Sn(){var a;return x(function(b){return(a=hf())?b.return(a.then(function(c){c=qd(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return xc(d,3)})):b.return(Promise.resolve(null))})}
;var Tn={};function Un(a){return Tn[a]||(Tn[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Vn={},Wn=[],Dg=new N,Xn={};function Yn(){for(var a=t(Wn),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Zn(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Un(b)]:a.getAttribute("data-"+b):null;return c}
function $n(a){Dg.da.apply(Dg,arguments)}
;function ao(a){this.i=a||{};a=[this.i,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function bo(a,b){a=[a.i,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function co(a,b,c){eo||(eo={},Xh(window,"message",function(d){a:{if(d.origin===bo(a,"host")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}if(d=eo[e.id])d.A=!0,d.A&&(E(d.o,d.sendMessage,d),d.o.length=0),d.Ka(e)}e=void 0}return e}));
eo[c]=b}
var eo=null;var fo=window;function go(a,b,c){this.s=this.i=this.j=null;this.l=0;this.A=!1;this.o=[];this.m=null;this.I={};if(!a)throw Error("YouTube player element ID required.");this.id=Qa(this);this.D=c;this.setup(a,b)}
n=go.prototype;n.setSize=function(a,b){this.i.width=a.toString();this.i.height=b.toString();return this};
n.getIframe=function(){return this.i};
n.Ka=function(a){ho(this,a.event,a)};
n.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.m.subscribe(a,c);io(this,a);return this};
function jo(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.D===b[0]&&io(a,c)}}
n.destroy=function(){this.i&&this.i.id&&(Vn[this.i.id]=null);var a=this.m;a&&"function"==typeof a.dispose&&a.dispose();if(this.s){a=this.i;var b=a.parentNode;b&&b.replaceChild(this.s,a)}else(a=this.i)&&a.parentNode&&a.parentNode.removeChild(a);eo&&(eo[this.id]=null);this.j=null;a=this.i;for(var c in kb)kb[c][0]==a&&Vh(c);this.s=this.i=null};
n.Na=function(){return{}};
function ko(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.A?a.sendMessage(b):a.o.push(b)}
function ho(a,b,c){a.m.l||(c={target:a,data:c},a.m.da(b,c),$n(a.D+"."+b,c))}
function lo(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+bo(a.j,"title"));(b=bo(a.j,"width"))&&c.setAttribute("width",b.toString());(b=bo(a.j,"height"))&&c.setAttribute("height",
b.toString());var g=a.Na();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&E(["debugjs","debugcss"],function(k){var l=Vb(window.location.href,k);null!==l&&(g[k]=l)});
fo.yt_embedsTokenValue&&(g.embedsTokenValue=encodeURIComponent(fo.yt_embedsTokenValue),delete fo.yt_embedsTokenValue);var h=""+bo(a.j,"host")+("/embed/"+bo(a.j,"videoId"))+"?"+Tb(g);fo.yt_embedsEnableUaChProbe?Sn().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=Od(l.href).toString();Ad(c,Pd(k));return k}):
fo.yt_embedsEnableIframeSrcWithIntent?Ad(c,Pd(h)):c.src=h;
return c}
n.Va=function(){this.i&&this.i.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.l)};
function mo(a){co(a.j,a,a.id);a.l=Zh(a.Va.bind(a),250);Xh(a.i,"load",function(){window.clearInterval(a.l);a.l=Zh(a.Va.bind(a),250)})}
n.setup=function(a,b){var c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Rb(a.src):"https://www.youtube.com"),this.j=new ao(b),c||(b=lo(this,a),this.s=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.i=a,this.i.id||(this.i.id="widget"+Qa(this.i)),Vn[this.i.id]=this,window.postMessage){this.m=new N;mo(this);b=bo(this.j,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Xn)Xn.hasOwnProperty(e)&&
jo(this,e)}};
function io(a,b){a.I[b]||(a.I[b]=!0,ko(a,"addEventListener",[b]))}
n.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[Rb(this.i.src||"").replace("http:","https:")];if(this.i.contentWindow)for(var d=0;d<c.length;d++)try{this.i.contentWindow.postMessage(b,c[d])}catch(Yb){if(Yb.name&&"SyntaxError"===Yb.name){if(!(Yb.message&&0<Yb.message.indexOf("target origin ''"))){var e=void 0,f=Yb;e=void 0===e?{}:e;e.name=P("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=P("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=e||{},h="WARNING";h=void 0===h?"ERROR":
h;if(f){f.hasOwnProperty("level")&&f.level&&(h=f.level);if(R("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=Mn)){var m=void 0,q=void 0,v=f,p=g,y=ge(v),z=y.message||"Unknown Error",H=y.name||"UnknownError",
K=y.stack||v.j||"Not available";if(K.startsWith(H+": "+z)){var M=K.split("\n");M.shift();K=M.join("\n")}var O=y.lineNumber||"Not available",ob=y.fileName||"Not available",wc=K,xa=0;if(v.hasOwnProperty("args")&&v.args&&v.args.length)for(var ra=0;ra<v.args.length&&!(xa=In(v.args[ra],"params."+ra,p,xa),500<=xa);ra++);else if(v.hasOwnProperty("params")&&v.params){var Z=v.params;if("object"===typeof v.params)for(q in Z){if(Z[q]){var da="params."+q,ea=Kn(Z[q]);p[da]=ea;xa+=da.length+ea.length;if(500<xa)break}}else p.params=
Kn(Z)}if(Pn.length)for(var Y=0;Y<Pn.length&&!(xa=In(Pn[Y],"params.context."+Y,p,xa),500<=xa);Y++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var S={message:z,name:H,lineNumber:O,fileName:ob,stack:wc,params:p,sampleWeight:1},Uj=Number(v.columnNumber);isNaN(Uj)||(S.lineNumber=S.lineNumber+":"+Uj);if("IGNORED"===v.level)m=0;else a:{for(var Vj=En(),Wj=t(Vj.V),Sf=Wj.next();!Sf.done;Sf=Wj.next()){var Xj=Sf.value;if(S.message&&S.message.match(Xj.Sb)){m=Xj.weight;
break a}}for(var Yj=t(Vj.T),Tf=Yj.next();!Tf.done;Tf=Yj.next()){var Zj=Tf.value;if(Zj.fb(S)){m=Zj.weight;break a}}m=1}S.sampleWeight=m;for(var ak=t(zn),Uf=ak.next();!Uf.done;Uf=ak.next()){var Vf=Uf.value;if(Vf.sa[S.name])for(var bk=t(Vf.sa[S.name]),Wf=bk.next();!Wf.done;Wf=bk.next()){var ck=Wf.value,Wd=S.message.match(ck.regexp);if(Wd){S.params["params.error.original"]=Wd[0];for(var Xf=ck.groups,dk={},Zb=0;Zb<Xf.length;Zb++)dk[Xf[Zb]]=Wd[Zb+1],S.params["params.error."+Xf[Zb]]=Wd[Zb+1];S.message=Vf.Da(dk);
break}}}S.params||(S.params={});var ek=En();S.params["params.errorServiceSignature"]="msg="+ek.V.length+"&cb="+ek.T.length;S.params["params.serviceWorker"]="false";A.document&&A.document.querySelectorAll&&(S.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));sb("sample").constructor!==rb&&(S.params["params.fconst"]="true");var ta=S;window.yterr&&"function"===typeof window.yterr&&window.yterr(ta);if(0!==ta.sampleWeight&&!Ln.has(ta.message)){if("ERROR"===h){Fn.da("handleError",
ta);if(R("record_app_crashed_web")&&0===On&&1===ta.sampleWeight)if(On++,R("errors_via_jspb")){var Yf=new th;I(Yf,1,1);if(!R("report_client_error_with_app_crash_ks")){var fk=new oh;I(fk,1,ta.message);var gk=new ph;J(gk,oh,3,fk);var hk=new qh;J(hk,ph,5,gk);var ik=new rh;J(ik,qh,9,hk);J(Yf,rh,4,ik)}var so=Yf,jk=new wh;kd(jk,th,20,xh,so);xn(jk)}else{var kk={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};R("report_client_error_with_app_crash_ks")||(kk.systemHealth={crashData:{clientError:{logMessage:{message:ta.message}}}});
yn("appCrashed",kk)}Nn++}else"WARNING"===h&&Fn.da("handleWarning",ta);if(R("kevlar_gel_error_routing"))a:{var Zf=void 0,$f=void 0,Mc=h,Q=ta;if(R("errors_via_jspb")){if(Rn())$f=void 0;else{var $b=new lh;I($b,1,Q.stack);Q.fileName&&I($b,4,Q.fileName);var Oa=Q.lineNumber&&Q.lineNumber.split?Q.lineNumber.split(":"):[];0!==Oa.length&&(1!==Oa.length||isNaN(Number(Oa[0]))?2!==Oa.length||isNaN(Number(Oa[0]))||isNaN(Number(Oa[1]))||(I($b,2,Number(Oa[0])),I($b,3,Number(Oa[1]))):I($b,2,Number(Oa[0])));var vb=
new oh;I(vb,1,Q.message);I(vb,3,Q.name);I(vb,6,Q.sampleWeight);"ERROR"===Mc?I(vb,2,2):"WARNING"===Mc?I(vb,2,1):I(vb,2,0);var ag=new mh;I(ag,1,!0);kd(ag,lh,3,nh,$b);var wb=new ih;I(wb,3,window.location.href);for(var lk=P("FEXP_EXPERIMENTS",[]),bg=0;bg<lk.length;bg++){var mk=wb,to=lk[bg];Sc(mk);fd(mk,5,2,!1).push(to)}var cg=Ih();if(!Jh()&&cg)for(var nk=t(Object.keys(cg)),xb=nk.next();!xb.done;xb=nk.next()){var ok=xb.value,dg=new kh;I(dg,1,ok);dg.setValue(String(cg[ok]));md(wb,4,kh,dg)}var eg=Q.params;
if(eg){var pk=t(Object.keys(eg));for(xb=pk.next();!xb.done;xb=pk.next()){var qk=xb.value,fg=new kh;I(fg,1,"client."+qk);fg.setValue(String(eg[qk]));md(wb,4,kh,fg)}}var rk=P("SERVER_NAME"),sk=P("SERVER_VERSION");if(rk&&sk){var gg=new kh;I(gg,1,"server.name");gg.setValue(rk);md(wb,4,kh,gg);var hg=new kh;I(hg,1,"server.version");hg.setValue(sk);md(wb,4,kh,hg)}var Xd=new ph;J(Xd,ih,1,wb);J(Xd,mh,2,ag);J(Xd,oh,3,vb);$f=Xd}var tk=$f;if(!tk)break a;var uk=new wh;kd(uk,ph,163,xh,tk);xn(uk)}else{if(Rn())Zf=
void 0;else{var Nc={stackTrace:Q.stack};Q.fileName&&(Nc.filename=Q.fileName);var Pa=Q.lineNumber&&Q.lineNumber.split?Q.lineNumber.split(":"):[];0!==Pa.length&&(1!==Pa.length||isNaN(Number(Pa[0]))?2!==Pa.length||isNaN(Number(Pa[0]))||isNaN(Number(Pa[1]))||(Nc.lineNumber=Number(Pa[0]),Nc.columnNumber=Number(Pa[1])):Nc.lineNumber=Number(Pa[0]));var ig={level:"ERROR_LEVEL_UNKNOWN",message:Q.message,errorClassName:Q.name,sampleWeight:Q.sampleWeight};"ERROR"===Mc?ig.level="ERROR_LEVEL_ERROR":"WARNING"===
Mc&&(ig.level="ERROR_LEVEL_WARNNING");var uo={isObfuscated:!0,browserStackInfo:Nc},ac={pageUrl:window.location.href,kvPairs:[]};P("FEXP_EXPERIMENTS")&&(ac.experimentIds=P("FEXP_EXPERIMENTS"));var jg=Ih();if(!Jh()&&jg)for(var vk=t(Object.keys(jg)),yb=vk.next();!yb.done;yb=vk.next()){var wk=yb.value;ac.kvPairs.push({key:wk,value:String(jg[wk])})}var kg=Q.params;if(kg){var xk=t(Object.keys(kg));for(yb=xk.next();!yb.done;yb=xk.next()){var yk=yb.value;ac.kvPairs.push({key:"client."+yk,value:String(kg[yk])})}}var zk=
P("SERVER_NAME"),Ak=P("SERVER_VERSION");zk&&Ak&&(ac.kvPairs.push({key:"server.name",value:zk}),ac.kvPairs.push({key:"server.version",value:Ak}));Zf={errorMetadata:ac,stackTrace:uo,logMessage:ig}}var Bk=Zf;if(!Bk)break a;yn("clientError",Bk)}if("ERROR"===Mc||R("errors_flush_gel_always_killswitch"))b:if(R("migrate_events_to_ts"))c:{if(R("web_fp_via_jspb")&&(vn(!0),!R("web_fp_via_jspb_and_json")))break c;vn()}else{if(R("web_fp_via_jspb")&&(vn(!0),!R("web_fp_via_jspb_and_json")))break b;vn()}}if(!R("suppress_error_204_logging")){var zb=
ta,Oc=zb.params||{},ab={urlParams:{a:"logerror",t:"jserror",type:zb.name,msg:zb.message.substr(0,250),line:zb.lineNumber,level:h,"client.name":Oc.name},postParams:{url:P("PAGE_NAME",window.location.href),file:zb.fileName},method:"POST"};Oc.version&&(ab["client.version"]=Oc.version);if(ab.postParams){zb.stack&&(ab.postParams.stack=zb.stack);for(var Ck=t(Object.keys(Oc)),lg=Ck.next();!lg.done;lg=Ck.next()){var Dk=lg.value;ab.postParams["client."+Dk]=Oc[Dk]}var mg=Ih();if(mg)for(var Ek=t(Object.keys(mg)),
ng=Ek.next();!ng.done;ng=Ek.next()){var Fk=ng.value;ab.postParams[Fk]=mg[Fk]}var Gk=P("SERVER_NAME"),Hk=P("SERVER_VERSION");Gk&&Hk&&(ab.postParams["server.name"]=Gk,ab.postParams["server.version"]=Hk)}ui(P("ECATCHER_REPORT_HOST","")+"/error_204",ab)}try{Ln.add(ta.message)}catch(zo){}Mn++}}}}}else throw Yb;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function no(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function oo(a){return 0===a.search("get")||0===a.search("is")}
;function po(a,b){go.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.O={};this.playerInfo={};this.videoTitle=""}
u(po,go);n=po.prototype;n.Na=function(){var a=bo(this.j,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=bo(this.j,"embedConfig")){if(Na(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
n.Ka=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Na(a))for(var c in a)a.hasOwnProperty(c)&&(this.O[c]=a[c]);break;case "infoDelivery":qo(this,a);break;case "initialDelivery":Na(a)&&(window.clearInterval(this.l),this.playerInfo={},this.O={},ro(this,a.apiInterface),qo(this,a));break;default:ho(this,b,a)}};
function qo(a,b){if(Na(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.i.setAttribute("title",b))):(a.videoTitle="",a.i.setAttribute("title","YouTube "+bo(a.j,"title"))))}}
function ro(a,b){E(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:no(c)?this[c]=function(){this.playerInfo={};
this.O={};ko(this,c,arguments);return this}:oo(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){ko(this,c,arguments);
return this})},a)}
n.getVideoEmbedCode=function(){var a=bo(this.j,"host")+("/embed/"+bo(this.j,"videoId")),b=Number(bo(this.j,"width")),c=Number(bo(this.j,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;Gb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(Ab,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Bb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Cb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Db,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Eb,
"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Fb,"&#0;")));return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+((null!=d?d:"YouTube video player")+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')};
n.getOptions=function(a){return this.O.namespaces?a?this.O[a]?this.O[a].options||[]:[]:this.O.namespaces||[]:[]};
n.getOption=function(a,b){if(this.O.namespaces&&a&&b&&this.O[a])return this.O[a][b]};
function vo(a){if("iframe"!==a.tagName.toLowerCase()){var b=Zn(a,"videoid");b&&(b={videoId:b,width:Zn(a,"width"),height:Zn(a,"height")},new po(a,b))}}
;B("YT.PlayerState.UNSTARTED",-1);B("YT.PlayerState.ENDED",0);B("YT.PlayerState.PLAYING",1);B("YT.PlayerState.PAUSED",2);B("YT.PlayerState.BUFFERING",3);B("YT.PlayerState.CUED",5);B("YT.get",function(a){return Vn[a]});
B("YT.scan",Yn);B("YT.subscribe",function(a,b,c){Dg.subscribe(a,b,c);Xn[a]=!0;for(var d in Vn)Vn.hasOwnProperty(d)&&jo(Vn[d],a)});
B("YT.unsubscribe",function(a,b,c){Cg(a,b,c)});
B("YT.Player",po);go.prototype.destroy=go.prototype.destroy;go.prototype.setSize=go.prototype.setSize;go.prototype.getIframe=go.prototype.getIframe;go.prototype.addEventListener=go.prototype.addEventListener;po.prototype.getVideoEmbedCode=po.prototype.getVideoEmbedCode;po.prototype.getOptions=po.prototype.getOptions;po.prototype.getOption=po.prototype.getOption;
Wn.push(function(a){var b=a;b||(b=document);a=gb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=bb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=gb(b);E(fb(a,b),vo)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Yn();var wo=A.onYTReady;wo&&wo();var xo=A.onYouTubeIframeAPIReady;xo&&xo();var yo=A.onYouTubePlayerAPIReady;yo&&yo();}).call(this);
