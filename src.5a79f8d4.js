parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"d2e6":[function(require,module,exports) {
var r=Math.ceil,a=Math.max;function t(t,e,o,n){for(var u=-1,c=a(r((e-t)/(o||1)),0),f=Array(c);c--;)f[n?c:++u]=t,t+=o;return f}module.exports=t;
},{}],"LaH9":[function(require,module,exports) {
function e(e,n){return e===n||e!=e&&n!=n}module.exports=e;
},{}],"PrXa":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3],t="object"==typeof e&&e&&e.Object===Object&&e;module.exports=t;
},{}],"M4cY":[function(require,module,exports) {
var e=require("./_freeGlobal"),t="object"==typeof self&&self&&self.Object===Object&&self,l=e||t||Function("return this")();module.exports=l;
},{"./_freeGlobal":"PrXa"}],"ydxh":[function(require,module,exports) {
var o=require("./_root"),r=o.Symbol;module.exports=r;
},{"./_root":"M4cY"}],"+MKx":[function(require,module,exports) {
var r=require("./_Symbol"),t=Object.prototype,e=t.hasOwnProperty,o=t.toString,a=r?r.toStringTag:void 0;function l(r){var t=e.call(r,a),l=r[a];try{r[a]=void 0;var c=!0}catch(r){}var i=o.call(r);return c&&(t?r[a]=l:delete r[a]),i}module.exports=l;
},{"./_Symbol":"ydxh"}],"+SM0":[function(require,module,exports) {
var t=Object.prototype,o=t.toString;function r(t){return o.call(t)}module.exports=r;
},{}],"fk/T":[function(require,module,exports) {
var e=require("./_Symbol"),r=require("./_getRawTag"),o=require("./_objectToString"),t="[object Null]",i="[object Undefined]",n=e?e.toStringTag:void 0;function u(e){return null==e?void 0===e?i:t:n&&n in Object(e)?r(e):o(e)}module.exports=u;
},{"./_Symbol":"ydxh","./_getRawTag":"+MKx","./_objectToString":"+SM0"}],"ihtJ":[function(require,module,exports) {
function n(n){var o=typeof n;return null!=n&&("object"==o||"function"==o)}module.exports=n;
},{}],"CqcF":[function(require,module,exports) {
var e=require("./_baseGetTag"),r=require("./isObject"),t="[object AsyncFunction]",n="[object Function]",o="[object GeneratorFunction]",c="[object Proxy]";function u(u){if(!r(u))return!1;var i=e(u);return i==n||i==o||i==t||i==c}module.exports=u;
},{"./_baseGetTag":"fk/T","./isObject":"ihtJ"}],"Lm6w":[function(require,module,exports) {
var e=9007199254740991;function r(r){return"number"==typeof r&&r>-1&&r%1==0&&r<=e}module.exports=r;
},{}],"8XeS":[function(require,module,exports) {
var e=require("./isFunction"),n=require("./isLength");function r(r){return null!=r&&n(r.length)&&!e(r)}module.exports=r;
},{"./isFunction":"CqcF","./isLength":"Lm6w"}],"XqZz":[function(require,module,exports) {
var e=9007199254740991,r=/^(?:0|[1-9]\d*)$/;function t(t,n){var o=typeof t;return!!(n=null==n?e:n)&&("number"==o||"symbol"!=o&&r.test(t))&&t>-1&&t%1==0&&t<n}module.exports=t;
},{}],"zT1p":[function(require,module,exports) {
var e=require("./eq"),r=require("./isArrayLike"),i=require("./_isIndex"),n=require("./isObject");function u(u,t,q){if(!n(q))return!1;var s=typeof t;return!!("number"==s?r(q)&&i(t,q.length):"string"==s&&t in q)&&e(q[t],u)}module.exports=u;
},{"./eq":"LaH9","./isArrayLike":"8XeS","./_isIndex":"XqZz","./isObject":"ihtJ"}],"cwaR":[function(require,module,exports) {
function e(e){return null!=e&&"object"==typeof e}module.exports=e;
},{}],"DFEd":[function(require,module,exports) {
var e=require("./_baseGetTag"),r=require("./isObjectLike"),o="[object Symbol]";function t(t){return"symbol"==typeof t||r(t)&&e(t)==o}module.exports=t;
},{"./_baseGetTag":"fk/T","./isObjectLike":"cwaR"}],"K9rX":[function(require,module,exports) {
var e=require("./isObject"),r=require("./isSymbol"),t=NaN,i=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,n=/^0o[0-7]+$/i,s=parseInt;function a(a){if("number"==typeof a)return a;if(r(a))return t;if(e(a)){var o="function"==typeof a.valueOf?a.valueOf():a;a=e(o)?o+"":o}if("string"!=typeof a)return 0===a?a:+a;a=a.replace(i,"");var l=u.test(a);return l||n.test(a)?s(a.slice(2),l?2:8):f.test(a)?t:+a}module.exports=a;
},{"./isObject":"ihtJ","./isSymbol":"DFEd"}],"j/W8":[function(require,module,exports) {
var e=require("./toNumber"),r=1/0,u=1.7976931348623157e308;function o(o){return o?(o=e(o))===r||o===-r?(o<0?-1:1)*u:o==o?o:0:0===o?o:0}module.exports=o;
},{"./toNumber":"K9rX"}],"fitT":[function(require,module,exports) {
var e=require("./_baseRange"),r=require("./_isIterateeCall"),i=require("./toFinite");function t(t){return function(n,o,u){return u&&"number"!=typeof u&&r(n,o,u)&&(o=u=void 0),n=i(n),void 0===o?(o=n,n=0):o=i(o),u=void 0===u?n<o?1:-1:i(u),e(n,o,u,t)}}module.exports=t;
},{"./_baseRange":"d2e6","./_isIterateeCall":"zT1p","./toFinite":"j/W8"}],"TKv6":[function(require,module,exports) {
var e=require("./_createRange"),r=e();module.exports=r;
},{"./_createRange":"fitT"}],"z9Vv":[function(require,module,exports) {
var o=Math.floor,r=Math.random;function t(t,a){return t+o(r()*(a-t+1))}module.exports=t;
},{}],"0jfV":[function(require,module,exports) {
var e=require("./_baseRandom");function r(r){var n=r.length;return n?r[e(0,n-1)]:void 0}module.exports=r;
},{"./_baseRandom":"z9Vv"}],"oCpU":[function(require,module,exports) {
function r(r,n){for(var e=-1,l=null==r?0:r.length,o=Array(l);++e<l;)o[e]=n(r[e],e,r);return o}module.exports=r;
},{}],"nK3/":[function(require,module,exports) {
var r=require("./_arrayMap");function e(e,n){return r(n,function(r){return e[r]})}module.exports=e;
},{"./_arrayMap":"oCpU"}],"z+W8":[function(require,module,exports) {
function r(r,o){for(var e=-1,n=Array(r);++e<r;)n[e]=o(e);return n}module.exports=r;
},{}],"4rx9":[function(require,module,exports) {
var e=require("./_baseGetTag"),r=require("./isObjectLike"),t="[object Arguments]";function u(u){return r(u)&&e(u)==t}module.exports=u;
},{"./_baseGetTag":"fk/T","./isObjectLike":"cwaR"}],"9oh3":[function(require,module,exports) {
var e=require("./_baseIsArguments"),r=require("./isObjectLike"),t=Object.prototype,l=t.hasOwnProperty,n=t.propertyIsEnumerable,u=e(function(){return arguments}())?e:function(e){return r(e)&&l.call(e,"callee")&&!n.call(e,"callee")};module.exports=u;
},{"./_baseIsArguments":"4rx9","./isObjectLike":"cwaR"}],"+F0h":[function(require,module,exports) {
var r=Array.isArray;module.exports=r;
},{}],"i9YA":[function(require,module,exports) {
function e(){return!1}module.exports=e;
},{}],"+Cdu":[function(require,module,exports) {

var e=require("./_root"),o=require("./stubFalse"),r="object"==typeof exports&&exports&&!exports.nodeType&&exports,t=r&&"object"==typeof module&&module&&!module.nodeType&&module,p=t&&t.exports===r,u=p?e.Buffer:void 0,d=u?u.isBuffer:void 0,s=d||o;module.exports=s;
},{"./_root":"M4cY","./stubFalse":"i9YA"}],"IQli":[function(require,module,exports) {
var e=require("./_baseGetTag"),t=require("./isLength"),r=require("./isObjectLike"),o="[object Arguments]",b="[object Array]",c="[object Boolean]",j="[object Date]",a="[object Error]",n="[object Function]",i="[object Map]",A="[object Number]",y="[object Object]",u="[object RegExp]",g="[object Set]",l="[object String]",p="[object WeakMap]",s="[object ArrayBuffer]",m="[object DataView]",U="[object Float32Array]",f="[object Float64Array]",q="[object Int8Array]",F="[object Int16Array]",I="[object Int32Array]",d="[object Uint8Array]",h="[object Uint8ClampedArray]",k="[object Uint16Array]",x="[object Uint32Array]",B={};function D(o){return r(o)&&t(o.length)&&!!B[e(o)]}B[U]=B[f]=B[q]=B[F]=B[I]=B[d]=B[h]=B[k]=B[x]=!0,B[o]=B[b]=B[s]=B[c]=B[m]=B[j]=B[a]=B[n]=B[i]=B[A]=B[y]=B[u]=B[g]=B[l]=B[p]=!1,module.exports=D;
},{"./_baseGetTag":"fk/T","./isLength":"Lm6w","./isObjectLike":"cwaR"}],"kFVy":[function(require,module,exports) {
function n(n){return function(r){return n(r)}}module.exports=n;
},{}],"a9Sd":[function(require,module,exports) {
var e=require("./_freeGlobal"),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,r=o&&"object"==typeof module&&module&&!module.nodeType&&module,t=r&&r.exports===o,p=t&&e.process,u=function(){try{var e=r&&r.require&&r.require("util").types;return e||p&&p.binding&&p.binding("util")}catch(e){}}();module.exports=u;
},{"./_freeGlobal":"PrXa"}],"pKgN":[function(require,module,exports) {
var e=require("./_baseIsTypedArray"),r=require("./_baseUnary"),a=require("./_nodeUtil"),i=a&&a.isTypedArray,s=i?r(i):e;module.exports=s;
},{"./_baseIsTypedArray":"IQli","./_baseUnary":"kFVy","./_nodeUtil":"a9Sd"}],"Fz1h":[function(require,module,exports) {
var e=require("./_baseTimes"),r=require("./isArguments"),t=require("./isArray"),i=require("./isBuffer"),n=require("./_isIndex"),s=require("./isTypedArray"),u=Object.prototype,f=u.hasOwnProperty;function a(u,a){var o=t(u),p=!o&&r(u),y=!o&&!p&&i(u),g=!o&&!p&&!y&&s(u),h=o||p||y||g,l=h?e(u.length,String):[],q=l.length;for(var b in u)!a&&!f.call(u,b)||h&&("length"==b||y&&("offset"==b||"parent"==b)||g&&("buffer"==b||"byteLength"==b||"byteOffset"==b)||n(b,q))||l.push(b);return l}module.exports=a;
},{"./_baseTimes":"z+W8","./isArguments":"9oh3","./isArray":"+F0h","./isBuffer":"+Cdu","./_isIndex":"XqZz","./isTypedArray":"pKgN"}],"GRYO":[function(require,module,exports) {
var t=Object.prototype;function o(o){var r=o&&o.constructor;return o===("function"==typeof r&&r.prototype||t)}module.exports=o;
},{}],"Sosh":[function(require,module,exports) {
function n(n,r){return function(t){return n(r(t))}}module.exports=n;
},{}],"NtzY":[function(require,module,exports) {
var e=require("./_overArg"),r=e(Object.keys,Object);module.exports=r;
},{"./_overArg":"Sosh"}],"61st":[function(require,module,exports) {
var r=require("./_isPrototype"),e=require("./_nativeKeys"),t=Object.prototype,o=t.hasOwnProperty;function n(t){if(!r(t))return e(t);var n=[];for(var u in Object(t))o.call(t,u)&&"constructor"!=u&&n.push(u);return n}module.exports=n;
},{"./_isPrototype":"GRYO","./_nativeKeys":"NtzY"}],"6svo":[function(require,module,exports) {
var e=require("./_arrayLikeKeys"),r=require("./_baseKeys"),i=require("./isArrayLike");function u(u){return i(u)?e(u):r(u)}module.exports=u;
},{"./_arrayLikeKeys":"Fz1h","./_baseKeys":"61st","./isArrayLike":"8XeS"}],"LOMw":[function(require,module,exports) {
var e=require("./_baseValues"),r=require("./keys");function u(u){return null==u?[]:e(u,r(u))}module.exports=u;
},{"./_baseValues":"nK3/","./keys":"6svo"}],"Px+M":[function(require,module,exports) {
var r=require("./_arraySample"),e=require("./values");function u(u){return r(e(u))}module.exports=u;
},{"./_arraySample":"0jfV","./values":"LOMw"}],"wLew":[function(require,module,exports) {
var r=require("./_arraySample"),e=require("./_baseSample"),a=require("./isArray");function u(u){return(a(u)?r:e)(u)}module.exports=u;
},{"./_arraySample":"0jfV","./_baseSample":"Px+M","./isArray":"+F0h"}],"6Fwg":[function(require,module,exports) {
var r=require("./_root"),e=r["__core-js_shared__"];module.exports=e;
},{"./_root":"M4cY"}],"4VZN":[function(require,module,exports) {
var e=require("./_coreJsData"),r=function(){var r=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();function n(e){return!!r&&r in e}module.exports=n;
},{"./_coreJsData":"6Fwg"}],"1+25":[function(require,module,exports) {
var t=Function.prototype,r=t.toString;function n(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}module.exports=n;
},{}],"0tEm":[function(require,module,exports) {
var e=require("./isFunction"),r=require("./_isMasked"),t=require("./isObject"),o=require("./_toSource"),n=/[\\^$.*+?()[\]{}|]/g,c=/^\[object .+?Constructor\]$/,i=Function.prototype,u=Object.prototype,p=i.toString,s=u.hasOwnProperty,a=RegExp("^"+p.call(s).replace(n,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function l(n){return!(!t(n)||r(n))&&(e(n)?a:c).test(o(n))}module.exports=l;
},{"./isFunction":"CqcF","./_isMasked":"4VZN","./isObject":"ihtJ","./_toSource":"1+25"}],"O+Na":[function(require,module,exports) {
function n(n,o){return null==n?void 0:n[o]}module.exports=n;
},{}],"b5xW":[function(require,module,exports) {
var e=require("./_baseIsNative"),r=require("./_getValue");function u(u,a){var i=r(u,a);return e(i)?i:void 0}module.exports=u;
},{"./_baseIsNative":"0tEm","./_getValue":"O+Na"}],"Shes":[function(require,module,exports) {
var e=require("./_getNative"),r=e(Object,"create");module.exports=r;
},{"./_getNative":"b5xW"}],"1w7U":[function(require,module,exports) {
var e=require("./_nativeCreate");function t(){this.__data__=e?e(null):{},this.size=0}module.exports=t;
},{"./_nativeCreate":"Shes"}],"iOZZ":[function(require,module,exports) {
function t(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}module.exports=t;
},{}],"/hBF":[function(require,module,exports) {
var e=require("./_nativeCreate"),r="__lodash_hash_undefined__",t=Object.prototype,a=t.hasOwnProperty;function _(t){var _=this.__data__;if(e){var o=_[t];return o===r?void 0:o}return a.call(_,t)?_[t]:void 0}module.exports=_;
},{"./_nativeCreate":"Shes"}],"CKBs":[function(require,module,exports) {
var e=require("./_nativeCreate"),r=Object.prototype,t=r.hasOwnProperty;function a(r){var a=this.__data__;return e?void 0!==a[r]:t.call(a,r)}module.exports=a;
},{"./_nativeCreate":"Shes"}],"rh+C":[function(require,module,exports) {
var e=require("./_nativeCreate"),_="__lodash_hash_undefined__";function i(i,t){var a=this.__data__;return this.size+=this.has(i)?0:1,a[i]=e&&void 0===t?_:t,this}module.exports=i;
},{"./_nativeCreate":"Shes"}],"GyRm":[function(require,module,exports) {
var e=require("./_hashClear"),r=require("./_hashDelete"),t=require("./_hashGet"),h=require("./_hashHas"),o=require("./_hashSet");function a(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var h=e[r];this.set(h[0],h[1])}}a.prototype.clear=e,a.prototype.delete=r,a.prototype.get=t,a.prototype.has=h,a.prototype.set=o,module.exports=a;
},{"./_hashClear":"1w7U","./_hashDelete":"iOZZ","./_hashGet":"/hBF","./_hashHas":"CKBs","./_hashSet":"rh+C"}],"UuqP":[function(require,module,exports) {
function t(){this.__data__=[],this.size=0}module.exports=t;
},{}],"TrJy":[function(require,module,exports) {
var r=require("./eq");function e(e,n){for(var t=e.length;t--;)if(r(e[t][0],n))return t;return-1}module.exports=e;
},{"./eq":"LaH9"}],"UjAu":[function(require,module,exports) {
var e=require("./_assocIndexOf"),r=Array.prototype,t=r.splice;function a(r){var a=this.__data__,o=e(a,r);return!(o<0)&&(o==a.length-1?a.pop():t.call(a,o,1),--this.size,!0)}module.exports=a;
},{"./_assocIndexOf":"TrJy"}],"bvw3":[function(require,module,exports) {
var r=require("./_assocIndexOf");function e(e){var a=this.__data__,o=r(a,e);return o<0?void 0:a[o][1]}module.exports=e;
},{"./_assocIndexOf":"TrJy"}],"0Yob":[function(require,module,exports) {
var e=require("./_assocIndexOf");function r(r){return e(this.__data__,r)>-1}module.exports=r;
},{"./_assocIndexOf":"TrJy"}],"afRd":[function(require,module,exports) {
var s=require("./_assocIndexOf");function e(e,r){var t=this.__data__,i=s(t,e);return i<0?(++this.size,t.push([e,r])):t[i][1]=r,this}module.exports=e;
},{"./_assocIndexOf":"TrJy"}],"hCml":[function(require,module,exports) {
var e=require("./_listCacheClear"),t=require("./_listCacheDelete"),r=require("./_listCacheGet"),l=require("./_listCacheHas"),o=require("./_listCacheSet");function a(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var l=e[t];this.set(l[0],l[1])}}a.prototype.clear=e,a.prototype.delete=t,a.prototype.get=r,a.prototype.has=l,a.prototype.set=o,module.exports=a;
},{"./_listCacheClear":"UuqP","./_listCacheDelete":"UjAu","./_listCacheGet":"bvw3","./_listCacheHas":"0Yob","./_listCacheSet":"afRd"}],"ztLC":[function(require,module,exports) {
var e=require("./_getNative"),r=require("./_root"),o=e(r,"Map");module.exports=o;
},{"./_getNative":"b5xW","./_root":"M4cY"}],"+UOH":[function(require,module,exports) {
var e=require("./_Hash"),i=require("./_ListCache"),r=require("./_Map");function a(){this.size=0,this.__data__={hash:new e,map:new(r||i),string:new e}}module.exports=a;
},{"./_Hash":"GyRm","./_ListCache":"hCml","./_Map":"ztLC"}],"MmTn":[function(require,module,exports) {
function o(o){var n=typeof o;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==o:null===o}module.exports=o;
},{}],"19us":[function(require,module,exports) {
var r=require("./_isKeyable");function e(e,a){var t=e.__data__;return r(a)?t["string"==typeof a?"string":"hash"]:t.map}module.exports=e;
},{"./_isKeyable":"MmTn"}],"QjAw":[function(require,module,exports) {
var e=require("./_getMapData");function t(t){var r=e(this,t).delete(t);return this.size-=r?1:0,r}module.exports=t;
},{"./_getMapData":"19us"}],"X/Tf":[function(require,module,exports) {
var e=require("./_getMapData");function t(t){return e(this,t).get(t)}module.exports=t;
},{"./_getMapData":"19us"}],"jqgC":[function(require,module,exports) {
var e=require("./_getMapData");function r(r){return e(this,r).has(r)}module.exports=r;
},{"./_getMapData":"19us"}],"QE4m":[function(require,module,exports) {
var e=require("./_getMapData");function t(t,i){var s=e(this,t),r=s.size;return s.set(t,i),this.size+=s.size==r?0:1,this}module.exports=t;
},{"./_getMapData":"19us"}],"ZmWn":[function(require,module,exports) {
var e=require("./_mapCacheClear"),r=require("./_mapCacheDelete"),t=require("./_mapCacheGet"),a=require("./_mapCacheHas"),p=require("./_mapCacheSet");function o(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var a=e[r];this.set(a[0],a[1])}}o.prototype.clear=e,o.prototype.delete=r,o.prototype.get=t,o.prototype.has=a,o.prototype.set=p,module.exports=o;
},{"./_mapCacheClear":"+UOH","./_mapCacheDelete":"QjAw","./_mapCacheGet":"X/Tf","./_mapCacheHas":"jqgC","./_mapCacheSet":"QE4m"}],"2wZp":[function(require,module,exports) {
var _="__lodash_hash_undefined__";function t(t){return this.__data__.set(t,_),this}module.exports=t;
},{}],"FeTq":[function(require,module,exports) {
function t(t){return this.__data__.has(t)}module.exports=t;
},{}],"Ne64":[function(require,module,exports) {
var e=require("./_MapCache"),t=require("./_setCacheAdd"),r=require("./_setCacheHas");function a(t){var r=-1,a=null==t?0:t.length;for(this.__data__=new e;++r<a;)this.add(t[r])}a.prototype.add=a.prototype.push=t,a.prototype.has=r,module.exports=a;
},{"./_MapCache":"ZmWn","./_setCacheAdd":"2wZp","./_setCacheHas":"FeTq"}],"InoQ":[function(require,module,exports) {
function r(r,e,n,t){for(var o=r.length,u=n+(t?1:-1);t?u--:++u<o;)if(e(r[u],u,r))return u;return-1}module.exports=r;
},{}],"YsmI":[function(require,module,exports) {
function e(e){return e!=e}module.exports=e;
},{}],"auMB":[function(require,module,exports) {
function r(r,e,n){for(var t=n-1,o=r.length;++t<o;)if(r[t]===e)return t;return-1}module.exports=r;
},{}],"EzxW":[function(require,module,exports) {
var e=require("./_baseFindIndex"),r=require("./_baseIsNaN"),i=require("./_strictIndexOf");function n(n,u,s){return u==u?i(n,u,s):e(n,r,s)}module.exports=n;
},{"./_baseFindIndex":"InoQ","./_baseIsNaN":"YsmI","./_strictIndexOf":"auMB"}],"o0At":[function(require,module,exports) {
var e=require("./_baseIndexOf");function n(n,r){return!!(null==n?0:n.length)&&e(n,r,0)>-1}module.exports=n;
},{"./_baseIndexOf":"EzxW"}],"ypAf":[function(require,module,exports) {
function r(r,n,e){for(var t=-1,u=null==r?0:r.length;++t<u;)if(e(n,r[t]))return!0;return!1}module.exports=r;
},{}],"q/ow":[function(require,module,exports) {
function e(e,n){return e.has(n)}module.exports=e;
},{}],"nxyS":[function(require,module,exports) {
var r=require("./_SetCache"),e=require("./_arrayIncludes"),a=require("./_arrayIncludesWith"),u=require("./_arrayMap"),n=require("./_baseUnary"),i=require("./_cacheHas"),t=200;function l(l,h,s,c){var f=-1,o=e,q=!0,_=l.length,p=[],v=h.length;if(!_)return p;s&&(h=u(h,n(s))),c?(o=a,q=!1):h.length>=t&&(o=i,q=!1,h=new r(h));r:for(;++f<_;){var y=l[f],d=null==s?y:s(y);if(y=c||0!==y?y:0,q&&d==d){for(var g=v;g--;)if(h[g]===d)continue r;p.push(y)}else o(h,d,c)||p.push(y)}return p}module.exports=l;
},{"./_SetCache":"Ne64","./_arrayIncludes":"o0At","./_arrayIncludesWith":"ypAf","./_arrayMap":"oCpU","./_baseUnary":"kFVy","./_cacheHas":"q/ow"}],"FRcP":[function(require,module,exports) {
function e(e){return e}module.exports=e;
},{}],"GLgw":[function(require,module,exports) {
function e(e,l,r){switch(r.length){case 0:return e.call(l);case 1:return e.call(l,r[0]);case 2:return e.call(l,r[0],r[1]);case 3:return e.call(l,r[0],r[1],r[2])}return e.apply(l,r)}module.exports=e;
},{}],"T5gA":[function(require,module,exports) {
var r=require("./_apply"),t=Math.max;function a(a,e,n){return e=t(void 0===e?a.length-1:e,0),function(){for(var o=arguments,u=-1,i=t(o.length-e,0),f=Array(i);++u<i;)f[u]=o[e+u];u=-1;for(var h=Array(e+1);++u<e;)h[u]=o[u];return h[e]=n(f),r(a,this,h)}}module.exports=a;
},{"./_apply":"GLgw"}],"wtQr":[function(require,module,exports) {
function n(n){return function(){return n}}module.exports=n;
},{}],"kGbX":[function(require,module,exports) {
var e=require("./_getNative"),r=function(){try{var r=e(Object,"defineProperty");return r({},"",{}),r}catch(e){}}();module.exports=r;
},{"./_getNative":"b5xW"}],"ct23":[function(require,module,exports) {
var e=require("./constant"),r=require("./_defineProperty"),t=require("./identity"),i=r?function(t,i){return r(t,"toString",{configurable:!0,enumerable:!1,value:e(i),writable:!0})}:t;module.exports=i;
},{"./constant":"wtQr","./_defineProperty":"kGbX","./identity":"FRcP"}],"uyNX":[function(require,module,exports) {
var r=800,e=16,n=Date.now;function t(t){var o=0,u=0;return function(){var a=n(),i=e-(a-u);if(u=a,i>0){if(++o>=r)return arguments[0]}else o=0;return t.apply(void 0,arguments)}}module.exports=t;
},{}],"jbtL":[function(require,module,exports) {
var e=require("./_baseSetToString"),r=require("./_shortOut"),t=r(e);module.exports=t;
},{"./_baseSetToString":"ct23","./_shortOut":"uyNX"}],"qSD8":[function(require,module,exports) {
var e=require("./identity"),r=require("./_overRest"),t=require("./_setToString");function i(i,u){return t(r(i,u,e),i+"")}module.exports=i;
},{"./identity":"FRcP","./_overRest":"T5gA","./_setToString":"jbtL"}],"APpx":[function(require,module,exports) {
var e=require("./isArrayLike"),r=require("./isObjectLike");function i(i){return r(i)&&e(i)}module.exports=i;
},{"./isArrayLike":"8XeS","./isObjectLike":"cwaR"}],"95m+":[function(require,module,exports) {
var e=require("./_baseDifference"),r=require("./_baseRest"),i=require("./isArrayLikeObject"),u=r(function(r,u){return i(r)?e(r,u):[]});module.exports=u;
},{"./_baseDifference":"nxyS","./_baseRest":"qSD8","./isArrayLikeObject":"APpx"}],"Bhgs":[function(require,module,exports) {
var e=require("./isArray"),r=require("./isSymbol"),t=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,n=/^\w*$/;function u(u,l){if(e(u))return!1;var o=typeof u;return!("number"!=o&&"symbol"!=o&&"boolean"!=o&&null!=u&&!r(u))||(n.test(u)||!t.test(u)||null!=l&&u in Object(l))}module.exports=u;
},{"./isArray":"+F0h","./isSymbol":"DFEd"}],"wFGW":[function(require,module,exports) {
var e=require("./_MapCache"),r="Expected a function";function t(n,a){if("function"!=typeof n||null!=a&&"function"!=typeof a)throw new TypeError(r);var c=function(){var e=arguments,r=a?a.apply(this,e):e[0],t=c.cache;if(t.has(r))return t.get(r);var o=n.apply(this,e);return c.cache=t.set(r,o)||t,o};return c.cache=new(t.Cache||e),c}t.Cache=e,module.exports=t;
},{"./_MapCache":"ZmWn"}],"CquK":[function(require,module,exports) {
var e=require("./memoize"),r=500;function n(n){var u=e(n,function(e){return c.size===r&&c.clear(),e}),c=u.cache;return u}module.exports=n;
},{"./memoize":"wFGW"}],"pYME":[function(require,module,exports) {
var e=require("./_memoizeCapped"),r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,p=/\\(\\)?/g,u=e(function(e){var u=[];return 46===e.charCodeAt(0)&&u.push(""),e.replace(r,function(e,r,a,o){u.push(a?o.replace(p,"$1"):r||e)}),u});module.exports=u;
},{"./_memoizeCapped":"CquK"}],"e/2l":[function(require,module,exports) {
var r=require("./_Symbol"),e=require("./_arrayMap"),i=require("./isArray"),t=require("./isSymbol"),o=1/0,u=r?r.prototype:void 0,n=u?u.toString:void 0;function a(r){if("string"==typeof r)return r;if(i(r))return e(r,a)+"";if(t(r))return n?n.call(r):"";var u=r+"";return"0"==u&&1/r==-o?"-0":u}module.exports=a;
},{"./_Symbol":"ydxh","./_arrayMap":"oCpU","./isArray":"+F0h","./isSymbol":"DFEd"}],"QWoG":[function(require,module,exports) {
var r=require("./_baseToString");function e(e){return null==e?"":r(e)}module.exports=e;
},{"./_baseToString":"e/2l"}],"0RbE":[function(require,module,exports) {
var r=require("./isArray"),e=require("./_isKey"),i=require("./_stringToPath"),t=require("./toString");function u(u,n){return r(u)?u:e(u,n)?[u]:i(t(u))}module.exports=u;
},{"./isArray":"+F0h","./_isKey":"Bhgs","./_stringToPath":"pYME","./toString":"QWoG"}],"BA1W":[function(require,module,exports) {
var r=require("./isSymbol"),e=1/0;function t(t){if("string"==typeof t||r(t))return t;var i=t+"";return"0"==i&&1/t==-e?"-0":i}module.exports=t;
},{"./isSymbol":"DFEd"}],"Ws9z":[function(require,module,exports) {
var r=require("./_castPath"),e=require("./_toKey");function t(t,o){for(var u=0,n=(o=r(o,t)).length;null!=t&&u<n;)t=t[e(o[u++])];return u&&u==n?t:void 0}module.exports=t;
},{"./_castPath":"0RbE","./_toKey":"BA1W"}],"/BBF":[function(require,module,exports) {
var e=require("./_baseGet");function r(r,o,u){var i=null==r?void 0:e(r,o);return void 0===i?u:i}module.exports=r;
},{"./_baseGet":"Ws9z"}],"SvBf":[function(require,module,exports) {
var global = arguments[3];
var t=arguments[3];Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),n=require("lodash/get"),a=i(n);function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function n(e,a,i,r){s(this,n),this.canvas=t.document.getElementById(e),this.context=this.canvas.getContext("2d"),this.setOptions(a,i,r),this.sentence=this.axiom,this.stateStack=[],this.paintStack=[],this.generateSentence(),this.buildPaintStack()}return e(n,[{key:"setOptions",value:function(){return function(t,e,n){this.axiom=t,this.rules=e,this.iterations=(0,a.default)(n,"iterations",2),this.startX=(0,a.default)(n,"x",this.canvas.width/2),this.startY=(0,a.default)(n,"y",this.canvas.height),this.distance=(0,a.default)(n,"distance",15),this.angle=(0,a.default)(n,"angle",20),this.colour=(0,a.default)(n,"colour","white")}}()},{key:"generateSentence",value:function(){return function(){for(var t=0;t<this.iterations;t+=1){for(var e="",n=0;n<this.sentence.length;n+=1){for(var a=this.sentence.charAt(n),i=!1,s=0;s<this.rules.length;s+=1)a===this.rules[s].from&&(i=!0,e+=this.rules[s].to);i||(e+=a)}this.sentence=e}}}()},{key:"buildPaintStack",value:function(){return function(){for(var t=0,e=this.startX,n=this.startY,a=0;a<this.sentence.length;a+=1)switch(this.sentence.charAt(a)){case"F":var i=e,s=n;e+=Math.sin(t)*this.distance,n-=Math.cos(t)*this.distance,this.paintStack.push({oldX:i,oldY:s,x:e,y:n});break;case"-":t-=this.angle*Math.PI/180;break;case"+":t+=this.angle*Math.PI/180;break;case"[":this.stateStack.push({x:e,y:n,heading:t});break;case"]":var r=this.stateStack.pop();e=r.x,n=r.y,t=r.heading}}}()},{key:"paintTree",value:function(){return function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t.requestAnimationFrame(function(){for(var t=n,a=0;a<4;a+=1)if(e.paintBranch(e.paintStack[t]),(t+=1)>=e.paintStack.length)return;e.paintTree(t)})}}()},{key:"paintBranch",value:function(){return function(t){this.context.beginPath(),this.context.strokeStyle=this.colour,this.context.moveTo(t.oldX,t.oldY),this.context.lineTo(t.x,t.y),this.context.stroke(),this.context.closePath()}}()}]),n}();exports.default=r;
},{"lodash/get":"/BBF"}],"LXul":[function(require,module,exports) {
"use strict";module.exports={trees:[{iterations:4,angle:[15,25],distance:[6,12],axiom:"X",rules:[{from:"F",to:"FX[FX[+XF]]"},{from:"X",to:"FF[+XZ++X-F[+ZX]][-X++F-X]"},{from:"Z",to:"[+F-X-F][++ZX]"}]},{iterations:4,angle:[15,25],distance:[6,12],axiom:"X",rules:[{from:"F",to:"FF"},{from:"X",to:"F+[-F-XF-X][+FF][--XF[+X]][++F-X]"}]},{iterations:4,angle:[15,25],distance:[6,12],axiom:"F",rules:[{from:"F",to:"FF+[+F-F-F]-[-F+F+F]"}]},{iterations:7,angle:25,distance:[1,2],axiom:"X",rules:[{from:"X",to:"F[+X][-X]FX"},{from:"F",to:"FF"}]},{iterations:5,angle:[15,25],distance:[6,12],axiom:"F",rules:[{from:"F",to:"F[+F]F[-F]F"}]},{iterations:5,angle:[15,25],distance:[6,12],axiom:"X",rules:[{from:"X",to:"F-[[X]+X]+F[+FX]-X"},{from:"F",to:"FF"}]},{iterations:7,angle:20,distance:[1,2],axiom:"X",rules:[{from:"X",to:"F[+X]F[-X]+X"},{from:"F",to:"FF"}]},{iterations:4,angle:30,distance:[4,6],axiom:"X",rules:[{from:"X",to:"FF[+X][FX-X[+F-F]XF-F]"},{from:"F",to:"FXF"}]},{iterations:6,angle:30,distance:[1,2],axiom:"X",rules:[{from:"X",to:"F[+F+X][-F-X]FX"},{from:"F",to:"FF"}]}]};
},{}],"Hovs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){return function(e,t){var o=e.getContext("2d");o.save(),o.beginPath();var r=o.createLinearGradient(0,0,0,t);r.addColorStop(0,"steelblue"),r.addColorStop(1,"midnightblue"),o.fillStyle=r,o.fillRect(0,0,e.width,e.height);var l=o.createLinearGradient(0,t,0,e.height);l.addColorStop(0,"burlywood"),l.addColorStop(1,"hotpink"),o.fillStyle=l,o.fillRect(0,t,e.width,e.height),o.closePath(),o.restore()}}();exports.default=e;
},{}],"Pj0L":[function(require,module,exports) {
var e=require("./_baseRandom"),o=require("./_isIterateeCall"),i=require("./toFinite"),r=parseFloat,a=Math.min,t=Math.random;function n(n,d,v){if(v&&"boolean"!=typeof v&&o(n,d,v)&&(d=v=void 0),void 0===v&&("boolean"==typeof d?(v=d,d=void 0):"boolean"==typeof n&&(v=n,n=void 0)),void 0===n&&void 0===d?(n=0,d=1):(n=i(n),void 0===d?(d=n,n=0):d=i(d)),n>d){var l=n;n=d,d=l}if(v||n%1||d%1){var u=t();return a(n+u*(d-n+r("1e-"+((u+"").length-1))),d)}return e(n,d)}module.exports=n;
},{"./_baseRandom":"z9Vv","./_isIterateeCall":"zT1p","./toFinite":"j/W8"}],"s49y":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getDistance=exports.getAngle=exports.getX=exports.getLoops=void 0;var e=require("lodash/random"),t=r(e);function r(e){return e&&e.__esModule?e:{default:e}}var n=200,o=exports.getLoops=function(){return function(e){return Math.floor(e.width/n)-1}}(),u=exports.getX=function(){return function(e){var r=e*n,o=r+n;return(0,t.default)(r,o)}}(),a=exports.getAngle=function(){return function(e){return e?e.push?2===e.length?(0,t.default)(e[0],e[1]):console.error("angle array must have exactly 2 values"):e:console.error("tree must have an angle defined")}}(),s=exports.getDistance=function(){return function(e,r){if(!e)return console.error("tree must have a distance defined");var n=void 0;if(e.push){if(2!==e.length)return console.error("distance array must have exactly 2 values");n=(0,t.default)(e[0],e[1])}else n=e;return Math.min(.01*r.height,n)}}();
},{"lodash/random":"Pj0L"}],"H99C":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3],t=require("lodash/range"),a=f(t),n=require("lodash/sample"),r=f(n),i=require("lodash/without"),u=f(i),l=require("./tree"),o=f(l),d=require("./trees.json"),c=f(d),s=require("./scene"),g=f(s),h=require("./helpers");function f(e){return e&&e.__esModule?e:{default:e}}var m="ft",q=["white","greenyellow","magenta","aquamarine","fuchsia","coral","yellow","indianred"];e.window.onload=function(){var t=e.document.getElementById(m);t.width=e.document.documentElement.clientWidth,t.height=e.document.documentElement.clientHeight;var n=[].concat(q),i=.9*t.height;(0,g.default)(t,i),(0,a.default)(0,(0,h.getLoops)(t)).forEach(function(e){var a=(0,r.default)(c.default.trees),l=(0,r.default)(n),d={y:i,x:(0,h.getX)(e),distance:(0,h.getDistance)(a.distance,t),angle:(0,h.getAngle)(a.angle),iterations:a.iterations,colour:l};n=(0,u.default)(n,l),new o.default(m,a.axiom,a.rules,d).paintTree()})};
},{"lodash/range":"TKv6","lodash/sample":"wLew","lodash/without":"95m+","./tree":"SvBf","./trees.json":"LXul","./scene":"Hovs","./helpers":"s49y"}]},{},["H99C"], null)
//# sourceMappingURL=/Lindenmayer-Aquarium/src.5a79f8d4.map