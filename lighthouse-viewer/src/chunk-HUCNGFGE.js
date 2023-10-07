var qt=Object.create;var Z=Object.defineProperty;var Zt=Object.getOwnPropertyDescriptor;var Kt=Object.getOwnPropertyNames;var Jt=Object.getPrototypeOf,Qt=Object.prototype.hasOwnProperty;var Er=(o,s)=>()=>(s||o((s={exports:{}}).exports,s),s.exports),Yt=(o,s)=>{for(var a in s)Z(o,a,{get:s[a],enumerable:!0})},er=(o,s,a,i)=>{if(s&&typeof s=="object"||typeof s=="function")for(let l of Kt(s))!Qt.call(o,l)&&l!==a&&Z(o,l,{get:()=>s[l],enumerable:!(i=Zt(s,l))||i.enumerable});return o};var _r=(o,s,a)=>(a=o!=null?qt(Jt(o)):{},er(s||!o||!o.__esModule?Z(a,"default",{value:o,enumerable:!0}):a,o));var jr={};Yt(jr,{DEFAULT_LOCALE:()=>V,_formatPathAsString:()=>Xe,collectAllCustomElementsFromICU:()=>Q,formatMessage:()=>Re,getAvailableLocales:()=>Fr,getCanonicalLocales:()=>vr,getFormatted:()=>We,getIcuMessageIdParts:()=>ze,getRendererFormattedStrings:()=>dr,hasLocale:()=>yr,isIcuMessage:()=>Y,registerLocaleData:()=>br,replaceIcuMessages:()=>$r});var Pe=function(){"use strict";function o(i,l){function t(){this.constructor=i}t.prototype=l.prototype,i.prototype=new t}function s(i,l,t,p){this.message=i,this.expected=l,this.found=t,this.location=p,this.name="SyntaxError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,s)}o(s,Error),s.buildMessage=function(i,l){var t={literal:function(d){return'"'+y(d.text)+'"'},class:function(d){var $="",b;for(b=0;b<d.parts.length;b++)$+=d.parts[b]instanceof Array?j(d.parts[b][0])+"-"+j(d.parts[b][1]):j(d.parts[b]);return"["+(d.inverted?"^":"")+$+"]"},any:function(d){return"any character"},end:function(d){return"end of input"},other:function(d){return d.description}};function p(d){return d.charCodeAt(0).toString(16).toUpperCase()}function y(d){return d.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function($){return"\\x0"+p($)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function($){return"\\x"+p($)})}function j(d){return d.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function($){return"\\x0"+p($)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function($){return"\\x"+p($)})}function x(d){return t[d.type](d)}function M(d){var $=new Array(d.length),b,E;for(b=0;b<d.length;b++)$[b]=x(d[b]);if($.sort(),$.length>0){for(b=1,E=1;b<$.length;b++)$[b-1]!==$[b]&&($[E]=$[b],E++);$.length=E}switch($.length){case 1:return $[0];case 2:return $[0]+" or "+$[1];default:return $.slice(0,-1).join(", ")+", or "+$[$.length-1]}}function I(d){return d?'"'+y(d)+'"':"end of input"}return"Expected "+M(i)+" but "+I(l)+" found."};function a(i,l){l=l!==void 0?l:{};var t={},p={start:be},y=be,j=function(e){return{type:"messageFormatPattern",elements:e,location:P()}},x=function(e){return e.reduce(function(r,f){return r.concat(f)},[]).join("")},M=function(e){return{type:"messageTextElement",value:e,location:P()}},I=function(e){return e.join("")},d="{",$=A("{",!1),b=",",E=A(",",!1),ee="}",te=A("}",!1),Ge=function(e,r){return{type:"argumentElement",id:e,format:r&&r[2],location:P()}},re="number",He=A("number",!1),ne="date",Be=A("date",!1),se="time",qe=A("time",!1),Ze=function(e,r){return{type:e+"Format",style:r&&r[2],location:P()}},oe="plural",Ke=A("plural",!1),Je=function(e){return{type:e.type,ordinal:!1,offset:e.offset||0,options:e.options,location:P()}},ie="selectordinal",Qe=A("selectordinal",!1),Ye=function(e){return{type:e.type,ordinal:!0,offset:e.offset||0,options:e.options,location:P()}},ae="select",et=A("select",!1),tt=function(e){return{type:"selectFormat",options:e,location:P()}},rt="=",nt=A("=",!1),st=function(e,r){return{type:"optionalFormatPattern",selector:e,value:r,location:P()}},fe="offset:",ot=A("offset:",!1),it=function(e){return e},at=function(e,r){return{type:"pluralFormat",offset:e,options:r,location:P()}},ft=G("whitespace"),ce=/^[ \t\n\r]/,le=O([" ","	",`
`,"\r"],!1,!1),ct=G("optionalWhitespace"),lt=/^[0-9]/,ut=O([["0","9"]],!1,!1),pt=/^[0-9a-f]/i,mt=O([["0","9"],["a","f"]],!1,!0),gt="0",ht=A("0",!1),dt=/^[1-9]/,$t=O([["1","9"]],!1,!1),yt=function(e){return parseInt(e,10)},L="'",T=A("'",!1),ue=/^[ \t\n\r,.+={}#]/,pe=O([" ","	",`
`,"\r",",",".","+","=","{","}","#"],!1,!1),vt=St(),Ft=function(e){return e},me=function(e){return e},bt=/^[^{}\\\0-\x1F\x7F \t\n\r]/,jt=O(["{","}","\\",["\0",""],"\x7F"," ","	",`
`,"\r"],!0,!1),ge="\\\\",wt=A("\\\\",!1),At=function(){return"\\"},he="\\#",xt=A("\\#",!1),Et=function(){return"\\#"},de="\\{",_t=A("\\{",!1),Ct=function(){return"{"},$e="\\}",Pt=A("\\}",!1),It=function(){return"}"},ye="\\u",Ot=A("\\u",!1),Mt=function(e){return String.fromCharCode(parseInt(e,16))},n=0,v=0,k=[{line:1,column:1}],_=0,z=[],g=0,N;if("startRule"in l){if(!(l.startRule in p))throw new Error(`Can't start parsing from rule "`+l.startRule+'".');y=p[l.startRule]}function wr(){return i.substring(v,n)}function P(){return S(v,n)}function Ar(e,r){throw r=r!==void 0?r:S(v,n),Fe([G(e)],i.substring(v,n),r)}function xr(e,r){throw r=r!==void 0?r:S(v,n),Lt(e,r)}function A(e,r){return{type:"literal",text:e,ignoreCase:r}}function O(e,r,f){return{type:"class",parts:e,inverted:r,ignoreCase:f}}function St(){return{type:"any"}}function Dt(){return{type:"end"}}function G(e){return{type:"other",description:e}}function ve(e){var r=k[e],f;if(r)return r;for(f=e-1;!k[f];)f--;for(r=k[f],r={line:r.line,column:r.column};f<e;)i.charCodeAt(f)===10?(r.line++,r.column=1):r.column++,f++;return k[e]=r,r}function S(e,r){var f=ve(e),c=ve(r);return{start:{offset:e,line:f.line,column:f.column},end:{offset:r,line:c.line,column:c.column}}}function h(e){n<_||(n>_&&(_=n,z=[]),z.push(e))}function Lt(e,r){return new s(e,null,null,r)}function Fe(e,r,f){return new s(s.buildMessage(e,r),e,r,f)}function be(){var e;return e=je(),e}function je(){var e,r,f;for(e=n,r=[],f=we();f!==t;)r.push(f),f=we();return r!==t&&(v=e,r=j(r)),e=r,e}function we(){var e;return e=kt(),e===t&&(e=Ut()),e}function Tt(){var e,r,f,c,m,u;if(e=n,r=[],f=n,c=w(),c!==t?(m=W(),m!==t?(u=w(),u!==t?(c=[c,m,u],f=c):(n=f,f=t)):(n=f,f=t)):(n=f,f=t),f!==t)for(;f!==t;)r.push(f),f=n,c=w(),c!==t?(m=W(),m!==t?(u=w(),u!==t?(c=[c,m,u],f=c):(n=f,f=t)):(n=f,f=t)):(n=f,f=t);else r=t;return r!==t&&(v=e,r=x(r)),e=r,e===t&&(e=n,r=H(),r!==t?e=i.substring(e,n):e=r),e}function kt(){var e,r;return e=n,r=Tt(),r!==t&&(v=e,r=M(r)),e=r,e}function Nt(){var e,r,f;if(e=B(),e===t){for(e=n,r=[],f=Ee();f!==t;)r.push(f),f=Ee();r!==t&&(v=e,r=I(r)),e=r}return e}function Ut(){var e,r,f,c,m,u,F,C,q;return e=n,i.charCodeAt(n)===123?(r=d,n++):(r=t,g===0&&h($)),r!==t?(f=w(),f!==t?(c=Nt(),c!==t?(m=w(),m!==t?(u=n,i.charCodeAt(n)===44?(F=b,n++):(F=t,g===0&&h(E)),F!==t?(C=w(),C!==t?(q=Rt(),q!==t?(F=[F,C,q],u=F):(n=u,u=t)):(n=u,u=t)):(n=u,u=t),u===t&&(u=null),u!==t?(F=w(),F!==t?(i.charCodeAt(n)===125?(C=ee,n++):(C=t,g===0&&h(te)),C!==t?(v=e,r=Ge(c,u),e=r):(n=e,e=t)):(n=e,e=t)):(n=e,e=t)):(n=e,e=t)):(n=e,e=t)):(n=e,e=t)):(n=e,e=t),e}function Rt(){var e;return e=Wt(),e===t&&(e=Xt(),e===t&&(e=Vt(),e===t&&(e=zt()))),e}function Wt(){var e,r,f,c,m,u,F;return e=n,i.substr(n,6)===re?(r=re,n+=6):(r=t,g===0&&h(He)),r===t&&(i.substr(n,4)===ne?(r=ne,n+=4):(r=t,g===0&&h(Be)),r===t&&(i.substr(n,4)===se?(r=se,n+=4):(r=t,g===0&&h(qe)))),r!==t?(f=w(),f!==t?(c=n,i.charCodeAt(n)===44?(m=b,n++):(m=t,g===0&&h(E)),m!==t?(u=w(),u!==t?(F=W(),F!==t?(m=[m,u,F],c=m):(n=c,c=t)):(n=c,c=t)):(n=c,c=t),c===t&&(c=null),c!==t?(v=e,r=Ze(r,c),e=r):(n=e,e=t)):(n=e,e=t)):(n=e,e=t),e}function Xt(){var e,r,f,c,m,u;return e=n,i.substr(n,6)===oe?(r=oe,n+=6):(r=t,g===0&&h(Ke)),r!==t?(f=w(),f!==t?(i.charCodeAt(n)===44?(c=b,n++):(c=t,g===0&&h(E)),c!==t?(m=w(),m!==t?(u=Ae(),u!==t?(v=e,r=Je(u),e=r):(n=e,e=t)):(n=e,e=t)):(n=e,e=t)):(n=e,e=t)):(n=e,e=t),e}function Vt(){var e,r,f,c,m,u;return e=n,i.substr(n,13)===ie?(r=ie,n+=13):(r=t,g===0&&h(Qe)),r!==t?(f=w(),f!==t?(i.charCodeAt(n)===44?(c=b,n++):(c=t,g===0&&h(E)),c!==t?(m=w(),m!==t?(u=Ae(),u!==t?(v=e,r=Ye(u),e=r):(n=e,e=t)):(n=e,e=t)):(n=e,e=t)):(n=e,e=t)):(n=e,e=t),e}function zt(){var e,r,f,c,m,u,F;if(e=n,i.substr(n,6)===ae?(r=ae,n+=6):(r=t,g===0&&h(et)),r!==t)if(f=w(),f!==t)if(i.charCodeAt(n)===44?(c=b,n++):(c=t,g===0&&h(E)),c!==t)if(m=w(),m!==t){if(u=[],F=U(),F!==t)for(;F!==t;)u.push(F),F=U();else u=t;u!==t?(v=e,r=tt(u),e=r):(n=e,e=t)}else n=e,e=t;else n=e,e=t;else n=e,e=t;else n=e,e=t;return e}function Gt(){var e,r,f,c;return e=n,r=n,i.charCodeAt(n)===61?(f=rt,n++):(f=t,g===0&&h(nt)),f!==t?(c=B(),c!==t?(f=[f,c],r=f):(n=r,r=t)):(n=r,r=t),r!==t?e=i.substring(e,n):e=r,e===t&&(e=W()),e}function U(){var e,r,f,c,m,u,F;return e=n,r=w(),r!==t?(f=Gt(),f!==t?(c=w(),c!==t?(i.charCodeAt(n)===123?(m=d,n++):(m=t,g===0&&h($)),m!==t?(u=je(),u!==t?(i.charCodeAt(n)===125?(F=ee,n++):(F=t,g===0&&h(te)),F!==t?(v=e,r=st(f,u),e=r):(n=e,e=t)):(n=e,e=t)):(n=e,e=t)):(n=e,e=t)):(n=e,e=t)):(n=e,e=t),e}function Ht(){var e,r,f,c;return e=n,i.substr(n,7)===fe?(r=fe,n+=7):(r=t,g===0&&h(ot)),r!==t?(f=w(),f!==t?(c=B(),c!==t?(v=e,r=it(c),e=r):(n=e,e=t)):(n=e,e=t)):(n=e,e=t),e}function Ae(){var e,r,f,c,m;if(e=n,r=Ht(),r===t&&(r=null),r!==t)if(f=w(),f!==t){if(c=[],m=U(),m!==t)for(;m!==t;)c.push(m),m=U();else c=t;c!==t?(v=e,r=at(r,c),e=r):(n=e,e=t)}else n=e,e=t;else n=e,e=t;return e}function H(){var e,r;if(g++,e=[],ce.test(i.charAt(n))?(r=i.charAt(n),n++):(r=t,g===0&&h(le)),r!==t)for(;r!==t;)e.push(r),ce.test(i.charAt(n))?(r=i.charAt(n),n++):(r=t,g===0&&h(le));else e=t;return g--,e===t&&(r=t,g===0&&h(ft)),e}function w(){var e,r,f;for(g++,e=n,r=[],f=H();f!==t;)r.push(f),f=H();return r!==t?e=i.substring(e,n):e=r,g--,e===t&&(r=t,g===0&&h(ct)),e}function xe(){var e;return lt.test(i.charAt(n))?(e=i.charAt(n),n++):(e=t,g===0&&h(ut)),e}function R(){var e;return pt.test(i.charAt(n))?(e=i.charAt(n),n++):(e=t,g===0&&h(mt)),e}function B(){var e,r,f,c,m,u;if(e=n,i.charCodeAt(n)===48?(r=gt,n++):(r=t,g===0&&h(ht)),r===t){if(r=n,f=n,dt.test(i.charAt(n))?(c=i.charAt(n),n++):(c=t,g===0&&h($t)),c!==t){for(m=[],u=xe();u!==t;)m.push(u),u=xe();m!==t?(c=[c,m],f=c):(n=f,f=t)}else n=f,f=t;f!==t?r=i.substring(r,n):r=f}return r!==t&&(v=e,r=yt(r)),e=r,e}function Ee(){var e,r,f;return e=n,r=n,g++,i.charCodeAt(n)===39?(f=L,n++):(f=t,g===0&&h(T)),f===t&&(ue.test(i.charAt(n))?(f=i.charAt(n),n++):(f=t,g===0&&h(pe))),g--,f===t?r=void 0:(n=r,r=t),r!==t?(i.length>n?(f=i.charAt(n),n++):(f=t,g===0&&h(vt)),f!==t?(v=e,r=Ft(f),e=r):(n=e,e=t)):(n=e,e=t),e===t&&(e=n,i.charCodeAt(n)===39?(r=L,n++):(r=t,g===0&&h(T)),r!==t?(f=Bt(),f!==t?(v=e,r=me(f),e=r):(n=e,e=t)):(n=e,e=t)),e}function _e(){var e;return i.charCodeAt(n)===39?(e=L,n++):(e=t,g===0&&h(T)),e}function Bt(){var e;return ue.test(i.charAt(n))?(e=i.charAt(n),n++):(e=t,g===0&&h(pe)),e===t&&(e=_e()),e}function Ce(){var e,r,f,c,m,u,F,C;return e=n,i.charCodeAt(n)===39?(r=L,n++):(r=t,g===0&&h(T)),r!==t?(f=_e(),f!==t?(v=e,r=me(f),e=r):(n=e,e=t)):(n=e,e=t),e===t&&(bt.test(i.charAt(n))?(e=i.charAt(n),n++):(e=t,g===0&&h(jt)),e===t&&(e=n,i.substr(n,2)===ge?(r=ge,n+=2):(r=t,g===0&&h(wt)),r!==t&&(v=e,r=At()),e=r,e===t&&(e=n,i.substr(n,2)===he?(r=he,n+=2):(r=t,g===0&&h(xt)),r!==t&&(v=e,r=Et()),e=r,e===t&&(e=n,i.substr(n,2)===de?(r=de,n+=2):(r=t,g===0&&h(_t)),r!==t&&(v=e,r=Ct()),e=r,e===t&&(e=n,i.substr(n,2)===$e?(r=$e,n+=2):(r=t,g===0&&h(Pt)),r!==t&&(v=e,r=It()),e=r,e===t&&(e=n,i.substr(n,2)===ye?(r=ye,n+=2):(r=t,g===0&&h(Ot)),r!==t?(f=n,c=n,m=R(),m!==t?(u=R(),u!==t?(F=R(),F!==t?(C=R(),C!==t?(m=[m,u,F,C],c=m):(n=c,c=t)):(n=c,c=t)):(n=c,c=t)):(n=c,c=t),c!==t?f=i.substring(f,n):f=c,f!==t?(v=e,r=Mt(f),e=r):(n=e,e=t)):(n=e,e=t))))))),e}function W(){var e,r,f;if(e=n,r=[],f=Ce(),f!==t)for(;f!==t;)r.push(f),f=Ce();else r=t;return r!==t&&(v=e,r=I(r)),e=r,e}if(N=y(),N!==t&&n===i.length)return N;throw N!==t&&n<i.length&&h(Dt()),Fe(z,_<i.length?i.charAt(_):null,_<i.length?S(_,_+1):S(_,_))}return{SyntaxError:s,parse:a}}();var Ie=function(){var o=function(s,a){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,l){i.__proto__=l}||function(i,l){for(var t in l)l.hasOwnProperty(t)&&(i[t]=l[t])},o(s,a)};return function(s,a){o(s,a);function i(){this.constructor=s}s.prototype=a===null?Object.create(a):(i.prototype=a.prototype,new i)}}(),tr=function(){function o(s,a,i){this.locales=[],this.formats={number:{},date:{},time:{}},this.pluralNumberFormat=null,this.currentPlural=null,this.pluralStack=[],this.locales=s,this.formats=a,this.formatters=i}return o.prototype.compile=function(s){return this.pluralStack=[],this.currentPlural=null,this.pluralNumberFormat=null,this.compileMessage(s)},o.prototype.compileMessage=function(s){var a=this;if(!(s&&s.type==="messageFormatPattern"))throw new Error('Message AST is not of type: "messageFormatPattern"');var i=s.elements,l=i.filter(function(t){return t.type==="messageTextElement"||t.type==="argumentElement"}).map(function(t){return t.type==="messageTextElement"?a.compileMessageText(t):a.compileArgument(t)});if(l.length!==i.length)throw new Error("Message element does not have a valid type");return l},o.prototype.compileMessageText=function(s){return this.currentPlural&&/(^|[^\\])#/g.test(s.value)?(this.pluralNumberFormat||(this.pluralNumberFormat=new Intl.NumberFormat(this.locales)),new sr(this.currentPlural.id,this.currentPlural.format.offset,this.pluralNumberFormat,s.value)):s.value.replace(/\\#/g,"#")},o.prototype.compileArgument=function(s){var a=s.format,i=s.id,l=this.formatters;if(!a)return new rr(i);var t=this,p=t.formats,y=t.locales;switch(a.type){case"numberFormat":return{id:i,format:l.getNumberFormat(y,p.number[a.style]).format};case"dateFormat":return{id:i,format:l.getDateTimeFormat(y,p.date[a.style]).format};case"timeFormat":return{id:i,format:l.getDateTimeFormat(y,p.time[a.style]).format};case"pluralFormat":return new nr(i,a.offset,this.compileOptions(s),l.getPluralRules(y,{type:a.ordinal?"ordinal":"cardinal"}));case"selectFormat":return new or(i,this.compileOptions(s));default:throw new Error("Message element does not have a valid format type")}},o.prototype.compileOptions=function(s){var a=this,i=s.format,l=i.options;this.pluralStack.push(this.currentPlural),this.currentPlural=i.type==="pluralFormat"?s:null;var t=l.reduce(function(p,y){return p[y.selector]=a.compileMessage(y.value),p},{});return this.currentPlural=this.pluralStack.pop(),t},o}(),Oe=tr,Me=function(){function o(s){this.id=s}return o}(),rr=function(o){Ie(s,o);function s(){return o!==null&&o.apply(this,arguments)||this}return s.prototype.format=function(a){return!a&&typeof a!="number"?"":typeof a=="string"?a:String(a)},s}(Me),nr=function(){function o(s,a,i,l){this.id=s,this.offset=a,this.options=i,this.pluralRules=l}return o.prototype.getOption=function(s){var a=this.options,i=a["="+s]||a[this.pluralRules.select(s-this.offset)];return i||a.other},o}(),sr=function(o){Ie(s,o);function s(a,i,l,t){var p=o.call(this,a)||this;return p.offset=i,p.numberFormat=l,p.string=t,p}return s.prototype.format=function(a){var i=this.numberFormat.format(a-this.offset);return this.string.replace(/(^|[^\\])#/g,"$1"+i).replace(/\\#/g,"#")},s}(Me);var or=function(){function o(s,a){this.id=s,this.options=a}return o.prototype.getOption=function(s){var a=this.options;return a[s]||a.other},o}();function Se(o){return!!o.options}var ir=function(){var o=function(s,a){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,l){i.__proto__=l}||function(i,l){for(var t in l)l.hasOwnProperty(t)&&(i[t]=l[t])},o(s,a)};return function(s,a){o(s,a);function i(){this.constructor=s}s.prototype=a===null?Object.create(a):(i.prototype=a.prototype,new i)}}(),D=function(){return D=Object.assign||function(o){for(var s,a=1,i=arguments.length;a<i;a++){s=arguments[a];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(o[l]=s[l])}return o},D.apply(this,arguments)};function ar(o){typeof o=="string"&&(o=[o]);try{return Intl.NumberFormat.supportedLocalesOf(o,{localeMatcher:"best fit"})[0]}catch{return Le.defaultLocale}}function De(o,s){for(var a="",i=0,l=o;i<l.length;i++){var t=l[i];if(typeof t=="string"){a+=t;continue}var p=t.id;if(!(s&&p in s))throw new lr("A value must be provided for: "+p,p);var y=s[p];Se(t)?a+=De(t.getOption(y),s):a+=t.format(y)}return a}function fr(o,s){return s?D({},o||{},s||{},Object.keys(o).reduce(function(a,i){return a[i]=D({},o[i],s[i]||{}),a},{})):o}function cr(o,s){return s?Object.keys(o).reduce(function(a,i){return a[i]=fr(o[i],s[i]),a},D({},o)):o}var lr=function(o){ir(s,o);function s(a,i){var l=o.call(this,a)||this;return l.variableId=i,l}return s}(Error);function ur(){return{getNumberFormat:function(){for(var o,s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];return new((o=Intl.NumberFormat).bind.apply(o,[void 0].concat(s)))},getDateTimeFormat:function(){for(var o,s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];return new((o=Intl.DateTimeFormat).bind.apply(o,[void 0].concat(s)))},getPluralRules:function(){for(var o,s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];return new((o=Intl.PluralRules).bind.apply(o,[void 0].concat(s)))}}}var Le=function(){function o(s,a,i,l){var t=this;if(a===void 0&&(a=o.defaultLocale),this.format=function(j){try{return De(t.pattern,j)}catch(x){throw x.variableId?new Error("The intl string context variable '"+x.variableId+"' was not provided to the string '"+t.message+"'"):x}},typeof s=="string"){if(!o.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");this.ast=o.__parse(s)}else this.ast=s;if(this.message=s,!(this.ast&&this.ast.type==="messageFormatPattern"))throw new TypeError("A message must be provided as a String or AST.");var p=cr(o.formats,i);this.locale=ar(a||[]);var y=l&&l.formatters||ur();this.pattern=new Oe(a,p,y).compile(this.ast)}return o.prototype.resolvedOptions=function(){return{locale:this.locale}},o.prototype.getAst=function(){return this.ast},o.defaultLocale="en",o.__parse=void 0,o.formats={number:{currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},o}();var K=Le;K.__parse=Pe.parse;var Te=K;function J(o){return typeof o=="object"&&o!==null&&!Array.isArray(o)}function ke(o){return typeof o=="object"&&o!==null}var Ne={};var X=Ne,V="en-US",pr=["ar-XB.json","ar.json","bg.json","ca.json","cs.json","da.json","de.json","el.json","en-GB.json","en-US.json","en-XA.json","en-XL.json","es-419.json","es.json","fi.json","fil.json","fr.json","he.json","hi.json","hr.json","hu.json","id.json","it.json","ja.json","ko.json","lt.json","lv.json","nl.json","no.json","pl.json","pt-PT.json","pt.json","ro.json","ru.json","sk.json","sl.json","sr-Latn.json","sr.json","sv.json","ta.json","te.json","th.json","tr.json","uk.json","vi.json","zh-HK.json","zh-TW.json","zh.json"].filter(o=>o.endsWith(".json")&&!o.endsWith(".ctc.json")).map(o=>o.replace(".json","")).sort(),Ue=/ | [^\s]+$/,mr={number:{bytes:{maximumFractionDigits:0},milliseconds:{maximumFractionDigits:0},seconds:{minimumFractionDigits:1,maximumFractionDigits:1},extendedPercent:{maximumFractionDigits:2,style:"percent"}}};function Q(o,s=new Map){for(let a of o)if(a.type==="argumentElement"&&(s.set(a.id,a),!(!a.format||a.format.type!=="pluralFormat")))for(let i of a.format.options)Q(i.value.elements,s);return s}function gr(o,s={},a){let l=[...Q(o.getAst().elements).values()],t={};for(let{id:p,format:y}of l){if(p&&!(p in s))throw new Error(`ICU Message "${a}" contains a value reference ("${p}") that wasn't provided`);let j=s[p];if(!y||y.type!=="numberFormat"){t[p]=j;continue}if(typeof j!="number")throw new Error(`ICU Message "${a}" contains a numeric reference ("${p}") but provided value was not a number`);y.style==="milliseconds"?t[p]=Math.round(j/10)*10:y.style==="seconds"&&p==="timeInMs"?t[p]=Math.round(j/100)/10:y.style==="bytes"?t[p]=j/1024:t[p]=j}for(let p of Object.keys(s))if(!(p in t)){if(p==="errorCode"){t.errorCode=s.errorCode;continue}throw new Error(`Provided value "${p}" does not match any placeholder in ICU message "${a}"`)}return t}function Re(o,s,a){if(!o.includes("{")&&s===void 0)return o;let i=a==="en-XA"||a==="en-XL"?"de-DE":a,l=new Te(o,i,mr),t=gr(l,s,o);return l.format(t)}function hr(o,s){let i=Ve(s)[o.i18nId];return i?Re(i.message,o.values,s):o.formattedDefault}function dr(o){let s=Ve(o),a=Object.keys(s).filter(l=>l.startsWith("report/renderer/report-utils.js")),i={};for(let l of a){let{filename:t,key:p}=ze(l);if(!t.endsWith("report-utils.js"))throw new Error(`Unexpected message: ${l}`);i[p]=s[l].message}return i}function Y(o){if(!J(o))return!1;let{i18nId:s,values:a,formattedDefault:i}=o;if(typeof s!="string"||typeof i!="string")return!1;if(a!==void 0){if(!J(a))return!1;for(let l of Object.values(a))if(typeof l!="string"&&typeof l!="number")return!1}return Ue.test(s)}function We(o,s){if(Y(o))return hr(o,s);if(typeof o=="string")return o;throw new Error("Attempted to format invalid icuMessage type")}function Xe(o){let s="";for(let a of o)if(/^[a-z]+$/i.test(a))s.length&&(s+="."),s+=a;else{if(/]|"|'|\s/.test(a))throw new Error(`Cannot handle "${a}" in i18n`);s+=`[${a}]`}return s}function $r(o,s){function a(l,t,p=[]){if(ke(l))for(let[y,j]of Object.entries(l)){let x=p.concat([y]);if(Y(j)){let M=We(j,s),I=t[j.i18nId]||[],d=Xe(x);I.push(j.values?{values:j.values,path:d}:d),l[y]=M,t[j.i18nId]=I}else a(j,t,x)}}let i={};return a(o,i),i}function Ve(o){let s=X[o];if(!s){if(o===V)return{};throw new Error(`Unsupported locale '${o}'`)}return s}function yr(o){if(o===V)return!0;let s=Intl.NumberFormat.supportedLocalesOf([o]).length>0,a=!!X[o];return s&&a}function vr(){return pr}function Fr(){return[...new Set([...Object.keys(X),V])].sort()}function br(o,s){X[o]=s}function ze(o){if(!Ue.test(o))throw Error(`"${o}" does not appear to be a valid ICU message id`);let[s,a]=o.split(" | ");return{filename:s,key:a}}export{Er as a,_r as b,Re as c,dr as d,We as e,yr as f,jr as g};
/**
 * @license Copyright 2021 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
/**
 * @license Copyright 2020 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
