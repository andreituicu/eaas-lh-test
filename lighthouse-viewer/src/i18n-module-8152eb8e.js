import{h as t,g as r,a as n}from"./main-93abdc28.js";export{f as format}from"./main-93abdc28.js";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,i=o||a||Function("return this")(),u=i.Symbol,c=u,s=Object.prototype,l=s.hasOwnProperty,v=s.toString,p=c?c.toStringTag:void 0;var h=function(t){var r=l.call(t,p),n=t[p];try{t[p]=void 0;var e=!0}catch(t){}var o=v.call(t);return e&&(r?t[p]=n:delete t[p]),o},_=Object.prototype.toString;var y=h,d=function(t){return _.call(t)},g=u?u.toStringTag:void 0;var b=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":g&&g in Object(t)?y(t):d(t)};var j=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)},O=b,m=j;var w,S=function(t){if(!m(t))return!1;var r=O(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},z=i["__core-js_shared__"],P=(w=/[^.]+$/.exec(z&&z.keys&&z.keys.IE_PROTO||""))?"Symbol(src)_1."+w:"";var $=function(t){return!!P&&P in t},F=Function.prototype.toString;var x=S,A=$,E=j,I=function(t){if(null!=t){try{return F.call(t)}catch(t){}try{return t+""}catch(t){}}return""},T=/^\[object .+?Constructor\]$/,C=Function.prototype,M=Object.prototype,N=C.toString,k=M.hasOwnProperty,J=RegExp("^"+N.call(k).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var R=function(t){return!(!E(t)||A(t))&&(x(t)?J:T).test(I(t))},U=function(t,r){return null==t?void 0:t[r]};var D=function(t,r){var n=U(t,r);return R(n)?n:void 0},G=D,q=function(){try{var t=G(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var B=function(t,r){return t===r||t!=t&&r!=r},H=function(t,r,n){"__proto__"==r&&q?q(t,r,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[r]=n},K=B,L=Object.prototype.hasOwnProperty;var Q=function(t,r,n){var e=t[r];L.call(t,r)&&K(e,n)&&(void 0!==n||r in t)||H(t,r,n)},V=Array.isArray;var W=b,X=function(t){return null!=t&&"object"==typeof t};var Y=function(t){return"symbol"==typeof t||X(t)&&"[object Symbol]"==W(t)},Z=V,tt=Y,rt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,nt=/^\w*$/;var et=function(t,r){if(Z(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!tt(t))||(nt.test(t)||!rt.test(t)||null!=r&&t in Object(r))},ot=D(Object,"create"),at=ot;var it=function(){this.__data__=at?at(null):{},this.size=0};var ut=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},ct=ot,st=Object.prototype.hasOwnProperty;var ft=function(t){var r=this.__data__;if(ct){var n=r[t];return"__lodash_hash_undefined__"===n?void 0:n}return st.call(r,t)?r[t]:void 0},lt=ot,vt=Object.prototype.hasOwnProperty;var pt=ot;var ht=it,_t=ut,yt=ft,dt=function(t){var r=this.__data__;return lt?void 0!==r[t]:vt.call(r,t)},gt=function(t,r){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=pt&&void 0===r?"__lodash_hash_undefined__":r,this};function bt(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}bt.prototype.clear=ht,bt.prototype.delete=_t,bt.prototype.get=yt,bt.prototype.has=dt,bt.prototype.set=gt;var jt=bt;var Ot=function(){this.__data__=[],this.size=0},mt=B;var wt=function(t,r){for(var n=t.length;n--;)if(mt(t[n][0],r))return n;return-1},St=wt,zt=Array.prototype.splice;var Pt=wt;var $t=wt;var Ft=wt;var xt=Ot,At=function(t){var r=this.__data__,n=St(r,t);return!(n<0)&&(n==r.length-1?r.pop():zt.call(r,n,1),--this.size,!0)},Et=function(t){var r=this.__data__,n=Pt(r,t);return n<0?void 0:r[n][1]},It=function(t){return $t(this.__data__,t)>-1},Tt=function(t,r){var n=this.__data__,e=Ft(n,t);return e<0?(++this.size,n.push([t,r])):n[e][1]=r,this};function Ct(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}Ct.prototype.clear=xt,Ct.prototype.delete=At,Ct.prototype.get=Et,Ct.prototype.has=It,Ct.prototype.set=Tt;var Mt=Ct,Nt=D(i,"Map"),kt=jt,Jt=Mt,Rt=Nt;var Ut=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var Dt=function(t,r){var n=t.__data__;return Ut(r)?n["string"==typeof r?"string":"hash"]:n.map},Gt=Dt;var qt=Dt;var Bt=Dt;var Ht=Dt;var Kt=function(){this.size=0,this.__data__={hash:new kt,map:new(Rt||Jt),string:new kt}},Lt=function(t){var r=Gt(this,t).delete(t);return this.size-=r?1:0,r},Qt=function(t){return qt(this,t).get(t)},Vt=function(t){return Bt(this,t).has(t)},Wt=function(t,r){var n=Ht(this,t),e=n.size;return n.set(t,r),this.size+=n.size==e?0:1,this};function Xt(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}Xt.prototype.clear=Kt,Xt.prototype.delete=Lt,Xt.prototype.get=Qt,Xt.prototype.has=Vt,Xt.prototype.set=Wt;var Yt=Xt;function Zt(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function(){var e=arguments,o=r?r.apply(this,e):e[0],a=n.cache;if(a.has(o))return a.get(o);var i=t.apply(this,e);return n.cache=a.set(o,i)||a,i};return n.cache=new(Zt.Cache||Yt),n}Zt.Cache=Yt;var tr=Zt;var rr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nr=/\\(\\)?/g,er=function(t){var r=tr(t,(function(t){return 500===n.size&&n.clear(),t})),n=r.cache;return r}((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(rr,(function(t,n,e,o){r.push(e?o.replace(nr,"$1"):n||t)})),r}));var or=function(t,r){for(var n=-1,e=null==t?0:t.length,o=Array(e);++n<e;)o[n]=r(t[n],n,t);return o},ar=V,ir=Y,ur=u?u.prototype:void 0,cr=ur?ur.toString:void 0;var sr=function t(r){if("string"==typeof r)return r;if(ar(r))return or(r,t)+"";if(ir(r))return cr?cr.call(r):"";var n=r+"";return"0"==n&&1/r==-Infinity?"-0":n};var fr=V,lr=et,vr=er,pr=function(t){return null==t?"":sr(t)};var hr=function(t,r){return fr(t)?t:lr(t,r)?[t]:vr(pr(t))},_r=/^(?:0|[1-9]\d*)$/;var yr=Y;var dr=function(t){if("string"==typeof t||yr(t))return t;var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},gr=Q,br=hr,jr=function(t,r){var n=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==n||"symbol"!=n&&_r.test(t))&&t>-1&&t%1==0&&t<r},Or=j,mr=dr;var wr=function(t,r,n,e){if(!Or(t))return t;for(var o=-1,a=(r=br(r,t)).length,i=a-1,u=t;null!=u&&++o<a;){var c=mr(r[o]),s=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(o!=i){var f=u[c];void 0===(s=e?e(f,c,u):void 0)&&(s=Or(f)?f:jr(r[o+1])?[]:{})}gr(u,c,s),u=u[c]}return t};var Sr=function(t,r,n){return null==t?t:wr(t,r,n)},zr=hr,Pr=dr;var $r=function(t,r){for(var n=0,e=(r=zr(r,t)).length;null!=t&&n<e;)t=t[Pr(r[n++])];return n&&n==e?t:void 0};var Fr=function(t,r,n){var e=null==t?void 0:$r(t,r);return void 0===e?n:e};
/**
 * @license Copyright 2019 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */function xr(e,o){if(e=JSON.parse(JSON.stringify(e)),!t(o))throw new Error(`Unsupported locale '${o}'`);const a=e.configSettings.locale,{icuMessagePaths:i}=e.i18n,u=[];if(!i)throw new Error("missing icuMessagePaths");for(const[t,n]of Object.entries(i))for(const i of n){let n,c;"string"==typeof i?n=i:(n=i.path,c=i.values);const s=Fr(e,n);if("string"!=typeof s)continue;const f=r({i18nId:t,values:c,formattedDefault:s},o);f!==s?Sr(e,n,f):o!==a&&u.push(t)}return e.i18n.rendererFormattedStrings=n(o),e.configSettings.locale=o,{lhr:e,missingIcuMessageIds:u}}export{xr as swapLocale};
