import{c as t,f as r}from"./main-929002d9.js";var n={},e="[object GeneratorFunction]",o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/,a=/^\./,u=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,c=/\\(\\)?/g,s=/^\[object .+?Constructor\]$/,f=/^(?:0|[1-9]\d*)$/,l="object"==typeof t&&t&&t.Object===Object&&t,p="object"==typeof self&&self&&self.Object===Object&&self,_=l||p||Function("return this")();var h,y=Array.prototype,v=Function.prototype,d=Object.prototype,g=_["__core-js_shared__"],b=(h=/[^.]+$/.exec(g&&g.keys&&g.keys.IE_PROTO||""))?"Symbol(src)_1."+h:"",j=v.toString,m=d.hasOwnProperty,O=d.toString,w=RegExp("^"+j.call(m).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),S=_.Symbol,$=y.splice,F=G(_,"Map"),E=G(Object,"create"),P=S?S.prototype:void 0,x=P?P.toString:void 0;function I(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function A(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function C(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function M(t,r,n){var e=t[r];m.call(t,r)&&U(e,n)&&(void 0!==n||r in t)||(t[r]=n)}function R(t,r){for(var n=t.length;n--;)if(U(t[n][0],r))return n;return-1}function k(t){return!(!B(t)||(r=t,b&&b in r))&&(function(t){var r=B(t)?O.call(t):"";return"[object Function]"==r||r==e}(t)||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t)?w:s).test(function(t){if(null!=t){try{return j.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var r}function T(t,r,n,e){if(!B(t))return t;for(var a=-1,u=(r=function(t,r){if(q(t))return!1;var n=typeof t;if("number"==n||"symbol"==n||"boolean"==n||null==t||H(t))return!0;return i.test(t)||!o.test(t)||null!=r&&t in Object(r)}(r,t)?[r]:function(t){return q(t)?t:N(t)}(r)).length,c=u-1,s=t;null!=s&&++a<u;){var f=z(r[a]),l=n;if(a!=c){var p=s[f];void 0===(l=e?e(p,f,s):void 0)&&(l=B(p)?p:J(r[a+1])?[]:{})}M(s,f,l),s=s[f]}return t}function L(t,r){var n,e,o=t.__data__;return("string"==(e=typeof(n=r))||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n)?o["string"==typeof r?"string":"hash"]:o.map}function G(t,r){var n=function(t,r){return null==t?void 0:t[r]}(t,r);return k(n)?n:void 0}function J(t,r){return!!(r=null==r?9007199254740991:r)&&("number"==typeof t||f.test(t))&&t>-1&&t%1==0&&t<r}I.prototype.clear=function(){this.__data__=E?E(null):{}},I.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},I.prototype.get=function(t){var r=this.__data__;if(E){var n=r[t];return"__lodash_hash_undefined__"===n?void 0:n}return m.call(r,t)?r[t]:void 0},I.prototype.has=function(t){var r=this.__data__;return E?void 0!==r[t]:m.call(r,t)},I.prototype.set=function(t,r){return this.__data__[t]=E&&void 0===r?"__lodash_hash_undefined__":r,this},A.prototype.clear=function(){this.__data__=[]},A.prototype.delete=function(t){var r=this.__data__,n=R(r,t);return!(n<0)&&(n==r.length-1?r.pop():$.call(r,n,1),!0)},A.prototype.get=function(t){var r=this.__data__,n=R(r,t);return n<0?void 0:r[n][1]},A.prototype.has=function(t){return R(this.__data__,t)>-1},A.prototype.set=function(t,r){var n=this.__data__,e=R(n,t);return e<0?n.push([t,r]):n[e][1]=r,this},C.prototype.clear=function(){this.__data__={hash:new I,map:new(F||A),string:new I}},C.prototype.delete=function(t){return L(this,t).delete(t)},C.prototype.get=function(t){return L(this,t).get(t)},C.prototype.has=function(t){return L(this,t).has(t)},C.prototype.set=function(t,r){return L(this,t).set(t,r),this};var N=D((function(t){var r;t=null==(r=t)?"":function(t){if("string"==typeof t)return t;if(H(t))return x?x.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r}(r);var n=[];return a.test(t)&&n.push(""),t.replace(u,(function(t,r,e,o){n.push(e?o.replace(c,"$1"):r||t)})),n}));function z(t){if("string"==typeof t||H(t))return t;var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r}function D(t,r){if("function"!=typeof t||r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function(){var e=arguments,o=r?r.apply(this,e):e[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,e);return n.cache=i.set(o,a),a};return n.cache=new(D.Cache||C),n}function U(t,r){return t===r||t!=t&&r!=r}D.Cache=C;var q=Array.isArray;function B(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function H(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==O.call(t)}var K=function(t,r,n){return null==t?t:T(t,r,n)},Q="[object GeneratorFunction]",V=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,W=/^\w*$/,X=/^\./,Y=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Z=/\\(\\)?/g,tt=/^\[object .+?Constructor\]$/,rt="object"==typeof t&&t&&t.Object===Object&&t,nt="object"==typeof self&&self&&self.Object===Object&&self,et=rt||nt||Function("return this")();var ot=Array.prototype,it=Function.prototype,at=Object.prototype,ut=et["__core-js_shared__"],ct=function(){var t=/[^.]+$/.exec(ut&&ut.keys&&ut.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),st=it.toString,ft=at.hasOwnProperty,lt=at.toString,pt=RegExp("^"+st.call(ft).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_t=et.Symbol,ht=ot.splice,yt=Ft(et,"Map"),vt=Ft(Object,"create"),dt=_t?_t.prototype:void 0,gt=dt?dt.toString:void 0;function bt(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function jt(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function mt(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function Ot(t,r){for(var n,e,o=t.length;o--;)if((n=t[o][0])===(e=r)||n!=n&&e!=e)return o;return-1}function wt(t,r){for(var n,e=0,o=(r=function(t,r){if(It(t))return!1;var n=typeof t;if("number"==n||"symbol"==n||"boolean"==n||null==t||Ct(t))return!0;return W.test(t)||!V.test(t)||null!=r&&t in Object(r)}(r,t)?[r]:It(n=r)?n:Et(n)).length;null!=t&&e<o;)t=t[Pt(r[e++])];return e&&e==o?t:void 0}function St(t){return!(!At(t)||(r=t,ct&&ct in r))&&(function(t){var r=At(t)?lt.call(t):"";return"[object Function]"==r||r==Q}(t)||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t)?pt:tt).test(function(t){if(null!=t){try{return st.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var r}function $t(t,r){var n,e,o=t.__data__;return("string"==(e=typeof(n=r))||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n)?o["string"==typeof r?"string":"hash"]:o.map}function Ft(t,r){var n=function(t,r){return null==t?void 0:t[r]}(t,r);return St(n)?n:void 0}bt.prototype.clear=function(){this.__data__=vt?vt(null):{}},bt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},bt.prototype.get=function(t){var r=this.__data__;if(vt){var n=r[t];return"__lodash_hash_undefined__"===n?void 0:n}return ft.call(r,t)?r[t]:void 0},bt.prototype.has=function(t){var r=this.__data__;return vt?void 0!==r[t]:ft.call(r,t)},bt.prototype.set=function(t,r){return this.__data__[t]=vt&&void 0===r?"__lodash_hash_undefined__":r,this},jt.prototype.clear=function(){this.__data__=[]},jt.prototype.delete=function(t){var r=this.__data__,n=Ot(r,t);return!(n<0)&&(n==r.length-1?r.pop():ht.call(r,n,1),!0)},jt.prototype.get=function(t){var r=this.__data__,n=Ot(r,t);return n<0?void 0:r[n][1]},jt.prototype.has=function(t){return Ot(this.__data__,t)>-1},jt.prototype.set=function(t,r){var n=this.__data__,e=Ot(n,t);return e<0?n.push([t,r]):n[e][1]=r,this},mt.prototype.clear=function(){this.__data__={hash:new bt,map:new(yt||jt),string:new bt}},mt.prototype.delete=function(t){return $t(this,t).delete(t)},mt.prototype.get=function(t){return $t(this,t).get(t)},mt.prototype.has=function(t){return $t(this,t).has(t)},mt.prototype.set=function(t,r){return $t(this,t).set(t,r),this};var Et=xt((function(t){var r;t=null==(r=t)?"":function(t){if("string"==typeof t)return t;if(Ct(t))return gt?gt.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r}(r);var n=[];return X.test(t)&&n.push(""),t.replace(Y,(function(t,r,e,o){n.push(e?o.replace(Z,"$1"):r||t)})),n}));function Pt(t){if("string"==typeof t||Ct(t))return t;var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r}function xt(t,r){if("function"!=typeof t||r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function(){var e=arguments,o=r?r.apply(this,e):e[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,e);return n.cache=i.set(o,a),a};return n.cache=new(xt.Cache||mt),n}xt.Cache=mt;var It=Array.isArray;function At(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function Ct(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==lt.call(t)}
/**
 * @license Copyright 2019 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
const Mt=K,Rt=function(t,r,n){var e=null==t?void 0:wt(t,r);return void 0===e?n:e},kt=r;var Tt=function(t,r){if(t=JSON.parse(JSON.stringify(t)),!kt.hasLocale(r))throw new Error(`Unsupported locale '${r}'`);const n=t.configSettings.locale,{icuMessagePaths:e}=t.i18n,o=[];if(!e)throw new Error("missing icuMessagePaths");for(const[i,a]of Object.entries(e))for(const e of a){let a,u;"string"==typeof e?a=e:(a=e.path,u=e.values);const c=Rt(t,a);if("string"!=typeof c)continue;const s={i18nId:i,values:u,formattedDefault:c},f=kt.getFormatted(s,r);f!==c?Mt(t,a,f):r!==n&&o.push(i)}return t.i18n.rendererFormattedStrings=kt.getRendererFormattedStrings(r),t.configSettings.locale=r,{lhr:t,missingIcuMessageIds:o}},Lt=n.swapLocale=Tt,Gt=n.format=r,Jt=Object.freeze(Object.assign(Object.create(null),n,{default:n,swapLocale:Lt,format:Gt}));
/**
 * @license Copyright 2021 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */export{Jt as i};
