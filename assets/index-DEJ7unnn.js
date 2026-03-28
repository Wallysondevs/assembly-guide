function _1(a,o){for(var n=0;n<o.length;n++){const i=o[n];if(typeof i!="string"&&!Array.isArray(i)){for(const d in i)if(d!=="default"&&!(d in a)){const f=Object.getOwnPropertyDescriptor(i,d);f&&Object.defineProperty(a,d,f.get?f:{enumerable:!0,get:()=>i[d]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))i(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function n(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function i(d){if(d.ep)return;d.ep=!0;const f=n(d);fetch(d.href,f)}})();function w1(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var $c={exports:{}},Ts={};var zp;function N1(){if(zp)return Ts;zp=1;var a=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function n(i,d,f){var m=null;if(f!==void 0&&(m=""+f),d.key!==void 0&&(m=""+d.key),"key"in d){f={};for(var h in d)h!=="key"&&(f[h]=d[h])}else f=d;return d=f.ref,{$$typeof:a,type:i,key:m,ref:d!==void 0?d:null,props:f}}return Ts.Fragment=o,Ts.jsx=n,Ts.jsxs=n,Ts}var Lp;function q1(){return Lp||(Lp=1,$c.exports=N1()),$c.exports}var l=q1(),eu={exports:{}},Cs={},tu={exports:{}},au={};var Vp;function z1(){return Vp||(Vp=1,(function(a){function o(q,Y){var J=q.length;q.push(Y);e:for(;0<J;){var me=J-1>>>1,j=q[me];if(0<d(j,Y))q[me]=Y,q[J]=j,J=me;else break e}}function n(q){return q.length===0?null:q[0]}function i(q){if(q.length===0)return null;var Y=q[0],J=q.pop();if(J!==Y){q[0]=J;e:for(var me=0,j=q.length,U=j>>>1;me<U;){var Z=2*(me+1)-1,Q=q[Z],ne=Z+1,ue=q[ne];if(0>d(Q,J))ne<j&&0>d(ue,Q)?(q[me]=ue,q[ne]=J,me=ne):(q[me]=Q,q[Z]=J,me=Z);else if(ne<j&&0>d(ue,J))q[me]=ue,q[ne]=J,me=ne;else break e}}return Y}function d(q,Y){var J=q.sortIndex-Y.sortIndex;return J!==0?J:q.id-Y.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var m=Date,h=m.now();a.unstable_now=function(){return m.now()-h}}var g=[],x=[],b=1,S=null,y=3,R=!1,C=!1,N=!1,L=!1,F=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function I(q){for(var Y=n(x);Y!==null;){if(Y.callback===null)i(x);else if(Y.startTime<=q)i(x),Y.sortIndex=Y.expirationTime,o(g,Y);else break;Y=n(x)}}function P(q){if(N=!1,I(q),!C)if(n(g)!==null)C=!0,K||(K=!0,Ae());else{var Y=n(x);Y!==null&&ze(P,Y.startTime-q)}}var K=!1,ce=-1,X=5,W=-1;function je(){return L?!0:!(a.unstable_now()-W<X)}function _e(){if(L=!1,K){var q=a.unstable_now();W=q;var Y=!0;try{e:{C=!1,N&&(N=!1,G(ce),ce=-1),R=!0;var J=y;try{t:{for(I(q),S=n(g);S!==null&&!(S.expirationTime>q&&je());){var me=S.callback;if(typeof me=="function"){S.callback=null,y=S.priorityLevel;var j=me(S.expirationTime<=q);if(q=a.unstable_now(),typeof j=="function"){S.callback=j,I(q),Y=!0;break t}S===n(g)&&i(g),I(q)}else i(g);S=n(g)}if(S!==null)Y=!0;else{var U=n(x);U!==null&&ze(P,U.startTime-q),Y=!1}}break e}finally{S=null,y=J,R=!1}Y=void 0}}finally{Y?Ae():K=!1}}}var Ae;if(typeof H=="function")Ae=function(){H(_e)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,At=ft.port2;ft.port1.onmessage=_e,Ae=function(){At.postMessage(null)}}else Ae=function(){F(_e,0)};function ze(q,Y){ce=F(function(){q(a.unstable_now())},Y)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(q){q.callback=null},a.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<q?Math.floor(1e3/q):5},a.unstable_getCurrentPriorityLevel=function(){return y},a.unstable_next=function(q){switch(y){case 1:case 2:case 3:var Y=3;break;default:Y=y}var J=y;y=Y;try{return q()}finally{y=J}},a.unstable_requestPaint=function(){L=!0},a.unstable_runWithPriority=function(q,Y){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var J=y;y=q;try{return Y()}finally{y=J}},a.unstable_scheduleCallback=function(q,Y,J){var me=a.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?me+J:me):J=me,q){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=J+j,q={id:b++,callback:Y,priorityLevel:q,startTime:J,expirationTime:j,sortIndex:-1},J>me?(q.sortIndex=J,o(x,q),n(g)===null&&q===n(x)&&(N?(G(ce),ce=-1):N=!0,ze(P,J-me))):(q.sortIndex=j,o(g,q),C||R||(C=!0,K||(K=!0,Ae()))),q},a.unstable_shouldYield=je,a.unstable_wrapCallback=function(q){var Y=y;return function(){var J=y;y=Y;try{return q.apply(this,arguments)}finally{y=J}}}})(au)),au}var Pp;function L1(){return Pp||(Pp=1,tu.exports=z1()),tu.exports}var ru={exports:{}},fe={};var Bp;function V1(){if(Bp)return fe;Bp=1;var a=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),m=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),S=Symbol.iterator;function y(j){return j===null||typeof j!="object"?null:(j=S&&j[S]||j["@@iterator"],typeof j=="function"?j:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,N={};function L(j,U,Z){this.props=j,this.context=U,this.refs=N,this.updater=Z||R}L.prototype.isReactComponent={},L.prototype.setState=function(j,U){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,U,"setState")},L.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function F(){}F.prototype=L.prototype;function G(j,U,Z){this.props=j,this.context=U,this.refs=N,this.updater=Z||R}var H=G.prototype=new F;H.constructor=G,C(H,L.prototype),H.isPureReactComponent=!0;var I=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},K=Object.prototype.hasOwnProperty;function ce(j,U,Z,Q,ne,ue){return Z=ue.ref,{$$typeof:a,type:j,key:U,ref:Z!==void 0?Z:null,props:ue}}function X(j,U){return ce(j.type,U,void 0,void 0,void 0,j.props)}function W(j){return typeof j=="object"&&j!==null&&j.$$typeof===a}function je(j){var U={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(Z){return U[Z]})}var _e=/\/+/g;function Ae(j,U){return typeof j=="object"&&j!==null&&j.key!=null?je(""+j.key):U.toString(36)}function ft(){}function At(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(ft,ft):(j.status="pending",j.then(function(U){j.status==="pending"&&(j.status="fulfilled",j.value=U)},function(U){j.status==="pending"&&(j.status="rejected",j.reason=U)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function ze(j,U,Z,Q,ne){var ue=typeof j;(ue==="undefined"||ue==="boolean")&&(j=null);var re=!1;if(j===null)re=!0;else switch(ue){case"bigint":case"string":case"number":re=!0;break;case"object":switch(j.$$typeof){case a:case o:re=!0;break;case b:return re=j._init,ze(re(j._payload),U,Z,Q,ne)}}if(re)return ne=ne(j),re=Q===""?"."+Ae(j,0):Q,I(ne)?(Z="",re!=null&&(Z=re.replace(_e,"$&/")+"/"),ze(ne,U,Z,"",function(Ne){return Ne})):ne!=null&&(W(ne)&&(ne=X(ne,Z+(ne.key==null||j&&j.key===ne.key?"":(""+ne.key).replace(_e,"$&/")+"/")+re)),U.push(ne)),1;re=0;var et=Q===""?".":Q+":";if(I(j))for(var we=0;we<j.length;we++)Q=j[we],ue=et+Ae(Q,we),re+=ze(Q,U,Z,ue,ne);else if(we=y(j),typeof we=="function")for(j=we.call(j),we=0;!(Q=j.next()).done;)Q=Q.value,ue=et+Ae(Q,we++),re+=ze(Q,U,Z,ue,ne);else if(ue==="object"){if(typeof j.then=="function")return ze(At(j),U,Z,Q,ne);throw U=String(j),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return re}function q(j,U,Z){if(j==null)return j;var Q=[],ne=0;return ze(j,Q,"","",function(ue){return U.call(Z,ue,ne++)}),Q}function Y(j){if(j._status===-1){var U=j._result;U=U(),U.then(function(Z){(j._status===0||j._status===-1)&&(j._status=1,j._result=Z)},function(Z){(j._status===0||j._status===-1)&&(j._status=2,j._result=Z)}),j._status===-1&&(j._status=0,j._result=U)}if(j._status===1)return j._result.default;throw j._result}var J=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)};function me(){}return fe.Children={map:q,forEach:function(j,U,Z){q(j,function(){U.apply(this,arguments)},Z)},count:function(j){var U=0;return q(j,function(){U++}),U},toArray:function(j){return q(j,function(U){return U})||[]},only:function(j){if(!W(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},fe.Component=L,fe.Fragment=n,fe.Profiler=d,fe.PureComponent=G,fe.StrictMode=i,fe.Suspense=g,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,fe.__COMPILER_RUNTIME={__proto__:null,c:function(j){return P.H.useMemoCache(j)}},fe.cache=function(j){return function(){return j.apply(null,arguments)}},fe.cloneElement=function(j,U,Z){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var Q=C({},j.props),ne=j.key,ue=void 0;if(U!=null)for(re in U.ref!==void 0&&(ue=void 0),U.key!==void 0&&(ne=""+U.key),U)!K.call(U,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&U.ref===void 0||(Q[re]=U[re]);var re=arguments.length-2;if(re===1)Q.children=Z;else if(1<re){for(var et=Array(re),we=0;we<re;we++)et[we]=arguments[we+2];Q.children=et}return ce(j.type,ne,void 0,void 0,ue,Q)},fe.createContext=function(j){return j={$$typeof:m,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:f,_context:j},j},fe.createElement=function(j,U,Z){var Q,ne={},ue=null;if(U!=null)for(Q in U.key!==void 0&&(ue=""+U.key),U)K.call(U,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(ne[Q]=U[Q]);var re=arguments.length-2;if(re===1)ne.children=Z;else if(1<re){for(var et=Array(re),we=0;we<re;we++)et[we]=arguments[we+2];ne.children=et}if(j&&j.defaultProps)for(Q in re=j.defaultProps,re)ne[Q]===void 0&&(ne[Q]=re[Q]);return ce(j,ue,void 0,void 0,null,ne)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(j){return{$$typeof:h,render:j}},fe.isValidElement=W,fe.lazy=function(j){return{$$typeof:b,_payload:{_status:-1,_result:j},_init:Y}},fe.memo=function(j,U){return{$$typeof:x,type:j,compare:U===void 0?null:U}},fe.startTransition=function(j){var U=P.T,Z={};P.T=Z;try{var Q=j(),ne=P.S;ne!==null&&ne(Z,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(me,J)}catch(ue){J(ue)}finally{P.T=U}},fe.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},fe.use=function(j){return P.H.use(j)},fe.useActionState=function(j,U,Z){return P.H.useActionState(j,U,Z)},fe.useCallback=function(j,U){return P.H.useCallback(j,U)},fe.useContext=function(j){return P.H.useContext(j)},fe.useDebugValue=function(){},fe.useDeferredValue=function(j,U){return P.H.useDeferredValue(j,U)},fe.useEffect=function(j,U,Z){var Q=P.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Q.useEffect(j,U)},fe.useId=function(){return P.H.useId()},fe.useImperativeHandle=function(j,U,Z){return P.H.useImperativeHandle(j,U,Z)},fe.useInsertionEffect=function(j,U){return P.H.useInsertionEffect(j,U)},fe.useLayoutEffect=function(j,U){return P.H.useLayoutEffect(j,U)},fe.useMemo=function(j,U){return P.H.useMemo(j,U)},fe.useOptimistic=function(j,U){return P.H.useOptimistic(j,U)},fe.useReducer=function(j,U,Z){return P.H.useReducer(j,U,Z)},fe.useRef=function(j){return P.H.useRef(j)},fe.useState=function(j){return P.H.useState(j)},fe.useSyncExternalStore=function(j,U,Z){return P.H.useSyncExternalStore(j,U,Z)},fe.useTransition=function(){return P.H.useTransition()},fe.version="19.1.0",fe}var Xp;function qi(){return Xp||(Xp=1,ru.exports=V1()),ru.exports}var ou={exports:{}},dt={};var Up;function P1(){if(Up)return dt;Up=1;var a=qi();function o(g){var x="https://react.dev/errors/"+g;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)x+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+g+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var i={d:{f:n,r:function(){throw Error(o(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(g,x,b){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:S==null?null:""+S,children:g,containerInfo:x,implementation:b}}var m=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(g,x){if(g==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,dt.createPortal=function(g,x){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(o(299));return f(g,x,null,b)},dt.flushSync=function(g){var x=m.T,b=i.p;try{if(m.T=null,i.p=2,g)return g()}finally{m.T=x,i.p=b,i.d.f()}},dt.preconnect=function(g,x){typeof g=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,i.d.C(g,x))},dt.prefetchDNS=function(g){typeof g=="string"&&i.d.D(g)},dt.preinit=function(g,x){if(typeof g=="string"&&x&&typeof x.as=="string"){var b=x.as,S=h(b,x.crossOrigin),y=typeof x.integrity=="string"?x.integrity:void 0,R=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;b==="style"?i.d.S(g,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:S,integrity:y,fetchPriority:R}):b==="script"&&i.d.X(g,{crossOrigin:S,integrity:y,fetchPriority:R,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},dt.preinitModule=function(g,x){if(typeof g=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var b=h(x.as,x.crossOrigin);i.d.M(g,{crossOrigin:b,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&i.d.M(g)},dt.preload=function(g,x){if(typeof g=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var b=x.as,S=h(b,x.crossOrigin);i.d.L(g,b,{crossOrigin:S,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},dt.preloadModule=function(g,x){if(typeof g=="string")if(x){var b=h(x.as,x.crossOrigin);i.d.m(g,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:b,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else i.d.m(g)},dt.requestFormReset=function(g){i.d.r(g)},dt.unstable_batchedUpdates=function(g,x){return g(x)},dt.useFormState=function(g,x,b){return m.H.useFormState(g,x,b)},dt.useFormStatus=function(){return m.H.useHostTransitionStatus()},dt.version="19.1.0",dt}var kp;function B1(){if(kp)return ou.exports;kp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(o){console.error(o)}}return a(),ou.exports=P1(),ou.exports}var Fp;function X1(){if(Fp)return Cs;Fp=1;var a=L1(),o=qi(),n=B1();function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(f(e)!==e)throw Error(i(188))}function g(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(i(188));return t!==e?null:e}for(var r=e,s=t;;){var c=r.return;if(c===null)break;var u=c.alternate;if(u===null){if(s=c.return,s!==null){r=s;continue}break}if(c.child===u.child){for(u=c.child;u;){if(u===r)return h(c),e;if(u===s)return h(c),t;u=u.sibling}throw Error(i(188))}if(r.return!==s.return)r=c,s=u;else{for(var p=!1,v=c.child;v;){if(v===r){p=!0,r=c,s=u;break}if(v===s){p=!0,s=c,r=u;break}v=v.sibling}if(!p){for(v=u.child;v;){if(v===r){p=!0,r=u,s=c;break}if(v===s){p=!0,s=u,r=c;break}v=v.sibling}if(!p)throw Error(i(189))}}if(r.alternate!==s)throw Error(i(190))}if(r.tag!==3)throw Error(i(188));return r.stateNode.current===r?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),G=Symbol.for("react.consumer"),H=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),W=Symbol.for("react.activity"),je=Symbol.for("react.memo_cache_sentinel"),_e=Symbol.iterator;function Ae(e){return e===null||typeof e!="object"?null:(e=_e&&e[_e]||e["@@iterator"],typeof e=="function"?e:null)}var ft=Symbol.for("react.client.reference");function At(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ft?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case L:return"Profiler";case N:return"StrictMode";case P:return"Suspense";case K:return"SuspenseList";case W:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case H:return(e.displayName||"Context")+".Provider";case G:return(e._context.displayName||"Context")+".Consumer";case I:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ce:return t=e.displayName||null,t!==null?t:At(e.type)||"Memo";case X:t=e._payload,e=e._init;try{return At(e(t))}catch{}}return null}var ze=Array.isArray,q=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},me=[],j=-1;function U(e){return{current:e}}function Z(e){0>j||(e.current=me[j],me[j]=null,j--)}function Q(e,t){j++,me[j]=e.current,e.current=t}var ne=U(null),ue=U(null),re=U(null),et=U(null);function we(e,t){switch(Q(re,t),Q(ue,e),Q(ne,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?cp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=cp(t),e=up(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(ne),Q(ne,e)}function Ne(){Z(ne),Z(ue),Z(re)}function _r(e){e.memoizedState!==null&&Q(et,e);var t=ne.current,r=up(t,e.type);t!==r&&(Q(ue,e),Q(ne,r))}function la(e){ue.current===e&&(Z(ne),Z(ue)),et.current===e&&(Z(et),Ss._currentValue=J)}var Ta=Object.prototype.hasOwnProperty,sr=a.unstable_scheduleCallback,Ca=a.unstable_cancelCallback,c0=a.unstable_shouldYield,u0=a.unstable_requestPaint,Wt=a.unstable_now,d0=a.unstable_getCurrentPriorityLevel,kd=a.unstable_ImmediatePriority,Fd=a.unstable_UserBlockingPriority,Ys=a.unstable_NormalPriority,m0=a.unstable_LowPriority,Hd=a.unstable_IdlePriority,f0=a.log,h0=a.unstable_setDisableYieldValue,Oo=null,Et=null;function Ma(e){if(typeof f0=="function"&&h0(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Oo,e)}catch{}}var Rt=Math.clz32?Math.clz32:g0,p0=Math.log,x0=Math.LN2;function g0(e){return e>>>=0,e===0?32:31-(p0(e)/x0|0)|0}var Qs=256,Zs=4194304;function nr(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ks(e,t,r){var s=e.pendingLanes;if(s===0)return 0;var c=0,u=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var v=s&134217727;return v!==0?(s=v&~u,s!==0?c=nr(s):(p&=v,p!==0?c=nr(p):r||(r=v&~e,r!==0&&(c=nr(r))))):(v=s&~u,v!==0?c=nr(v):p!==0?c=nr(p):r||(r=s&~e,r!==0&&(c=nr(r)))),c===0?0:t!==0&&t!==c&&(t&u)===0&&(u=c&-c,r=t&-t,u>=r||u===32&&(r&4194048)!==0)?t:c}function Do(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function b0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gd(){var e=Qs;return Qs<<=1,(Qs&4194048)===0&&(Qs=256),e}function Id(){var e=Zs;return Zs<<=1,(Zs&62914560)===0&&(Zs=4194304),e}function ki(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function _o(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function v0(e,t,r,s,c,u){var p=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var v=e.entanglements,A=e.expirationTimes,D=e.hiddenUpdates;for(r=p&~r;0<r;){var V=31-Rt(r),k=1<<V;v[V]=0,A[V]=-1;var _=D[V];if(_!==null)for(D[V]=null,V=0;V<_.length;V++){var w=_[V];w!==null&&(w.lane&=-536870913)}r&=~k}s!==0&&Yd(e,s,0),u!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=u&~(p&~t))}function Yd(e,t,r){e.pendingLanes|=t,e.suspendedLanes&=~t;var s=31-Rt(t);e.entangledLanes|=t,e.entanglements[s]=e.entanglements[s]|1073741824|r&4194090}function Qd(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-Rt(r),c=1<<s;c&t|e[s]&t&&(e[s]|=t),r&=~c}}function Fi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zd(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Op(e.type))}function y0(e,t){var r=Y.p;try{return Y.p=e,t()}finally{Y.p=r}}var Oa=Math.random().toString(36).slice(2),ct="__reactFiber$"+Oa,bt="__reactProps$"+Oa,wr="__reactContainer$"+Oa,Gi="__reactEvents$"+Oa,S0="__reactListeners$"+Oa,j0="__reactHandles$"+Oa,Kd="__reactResources$"+Oa,wo="__reactMarker$"+Oa;function Ii(e){delete e[ct],delete e[bt],delete e[Gi],delete e[S0],delete e[j0]}function Nr(e){var t=e[ct];if(t)return t;for(var r=e.parentNode;r;){if(t=r[wr]||r[ct]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=hp(e);e!==null;){if(r=e[ct])return r;e=hp(e)}return t}e=r,r=e.parentNode}return null}function qr(e){if(e=e[ct]||e[wr]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function No(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function zr(e){var t=e[Kd];return t||(t=e[Kd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tt(e){e[wo]=!0}var Jd=new Set,Wd={};function ir(e,t){Lr(e,t),Lr(e+"Capture",t)}function Lr(e,t){for(Wd[e]=t,e=0;e<t.length;e++)Jd.add(t[e])}var A0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$d={},em={};function E0(e){return Ta.call(em,e)?!0:Ta.call($d,e)?!1:A0.test(e)?em[e]=!0:($d[e]=!0,!1)}function Js(e,t,r){if(E0(t))if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var s=t.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+r)}}function Ws(e,t,r){if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+r)}}function ca(e,t,r,s){if(s===null)e.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(t,r,""+s)}}var Yi,tm;function Vr(e){if(Yi===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Yi=t&&t[1]||"",tm=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yi+e+tm}var Qi=!1;function Zi(e,t){if(!e||Qi)return"";Qi=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(t){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(w){var _=w}Reflect.construct(e,[],k)}else{try{k.call()}catch(w){_=w}e.call(k.prototype)}}else{try{throw Error()}catch(w){_=w}(k=e())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(w){if(w&&_&&typeof w.stack=="string")return[w.stack,_.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=s.DetermineComponentFrameRoot(),p=u[0],v=u[1];if(p&&v){var A=p.split(`
`),D=v.split(`
`);for(c=s=0;s<A.length&&!A[s].includes("DetermineComponentFrameRoot");)s++;for(;c<D.length&&!D[c].includes("DetermineComponentFrameRoot");)c++;if(s===A.length||c===D.length)for(s=A.length-1,c=D.length-1;1<=s&&0<=c&&A[s]!==D[c];)c--;for(;1<=s&&0<=c;s--,c--)if(A[s]!==D[c]){if(s!==1||c!==1)do if(s--,c--,0>c||A[s]!==D[c]){var V=`
`+A[s].replace(" at new "," at ");return e.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",e.displayName)),V}while(1<=s&&0<=c);break}}}finally{Qi=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?Vr(r):""}function R0(e){switch(e.tag){case 26:case 27:case 5:return Vr(e.type);case 16:return Vr("Lazy");case 13:return Vr("Suspense");case 19:return Vr("SuspenseList");case 0:case 15:return Zi(e.type,!1);case 11:return Zi(e.type.render,!1);case 1:return Zi(e.type,!0);case 31:return Vr("Activity");default:return""}}function am(e){try{var t="";do t+=R0(e),e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function Nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function T0(e){var t=rm(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,u=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(p){s=""+p,u.call(this,p)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(p){s=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $s(e){e._valueTracker||(e._valueTracker=T0(e))}function om(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=rm(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function en(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var C0=/[\n"\\]/g;function qt(e){return e.replace(C0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ki(e,t,r,s,c,u,p,v){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Nt(t)):e.value!==""+Nt(t)&&(e.value=""+Nt(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?Ji(e,p,Nt(t)):r!=null?Ji(e,p,Nt(r)):s!=null&&e.removeAttribute("value"),c==null&&u!=null&&(e.defaultChecked=!!u),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+Nt(v):e.removeAttribute("name")}function sm(e,t,r,s,c,u,p,v){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||r!=null){if(!(u!=="submit"&&u!=="reset"||t!=null))return;r=r!=null?""+Nt(r):"",t=t!=null?""+Nt(t):r,v||t===e.value||(e.value=t),e.defaultValue=t}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=v?e.checked:!!s,e.defaultChecked=!!s,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p)}function Ji(e,t,r){t==="number"&&en(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Pr(e,t,r,s){if(e=e.options,t){t={};for(var c=0;c<r.length;c++)t["$"+r[c]]=!0;for(r=0;r<e.length;r++)c=t.hasOwnProperty("$"+e[r].value),e[r].selected!==c&&(e[r].selected=c),c&&s&&(e[r].defaultSelected=!0)}else{for(r=""+Nt(r),t=null,c=0;c<e.length;c++){if(e[c].value===r){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function nm(e,t,r){if(t!=null&&(t=""+Nt(t),t!==e.value&&(e.value=t),r==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=r!=null?""+Nt(r):""}function im(e,t,r,s){if(t==null){if(s!=null){if(r!=null)throw Error(i(92));if(ze(s)){if(1<s.length)throw Error(i(93));s=s[0]}r=s}r==null&&(r=""),t=r}r=Nt(t),e.defaultValue=r,s=e.textContent,s===r&&s!==""&&s!==null&&(e.value=s)}function Br(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var M0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function lm(e,t,r){var s=t.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?s?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":s?e.setProperty(t,r):typeof r!="number"||r===0||M0.has(t)?t==="float"?e.cssFloat=r:e[t]=(""+r).trim():e[t]=r+"px"}function cm(e,t,r){if(t!=null&&typeof t!="object")throw Error(i(62));if(e=e.style,r!=null){for(var s in r)!r.hasOwnProperty(s)||t!=null&&t.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in t)s=t[c],t.hasOwnProperty(c)&&r[c]!==s&&lm(e,c,s)}else for(var u in t)t.hasOwnProperty(u)&&lm(e,u,t[u])}function Wi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var O0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),D0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tn(e){return D0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var $i=null;function el(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xr=null,Ur=null;function um(e){var t=qr(e);if(t&&(e=t.stateNode)){var r=e[bt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ki(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+qt(""+t)+'"][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var c=s[bt]||null;if(!c)throw Error(i(90));Ki(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<r.length;t++)s=r[t],s.form===e.form&&om(s)}break e;case"textarea":nm(e,r.value,r.defaultValue);break e;case"select":t=r.value,t!=null&&Pr(e,!!r.multiple,t,!1)}}}var tl=!1;function dm(e,t,r){if(tl)return e(t,r);tl=!0;try{var s=e(t);return s}finally{if(tl=!1,(Xr!==null||Ur!==null)&&(Un(),Xr&&(t=Xr,e=Ur,Ur=Xr=null,um(t),e)))for(t=0;t<e.length;t++)um(e[t])}}function qo(e,t){var r=e.stateNode;if(r===null)return null;var s=r[bt]||null;if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(i(231,t,typeof r));return r}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),al=!1;if(ua)try{var zo={};Object.defineProperty(zo,"passive",{get:function(){al=!0}}),window.addEventListener("test",zo,zo),window.removeEventListener("test",zo,zo)}catch{al=!1}var Da=null,rl=null,an=null;function mm(){if(an)return an;var e,t=rl,r=t.length,s,c="value"in Da?Da.value:Da.textContent,u=c.length;for(e=0;e<r&&t[e]===c[e];e++);var p=r-e;for(s=1;s<=p&&t[r-s]===c[u-s];s++);return an=c.slice(e,1<s?1-s:void 0)}function rn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function on(){return!0}function fm(){return!1}function vt(e){function t(r,s,c,u,p){this._reactName=r,this._targetInst=c,this.type=s,this.nativeEvent=u,this.target=p,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(r=e[v],this[v]=r?r(u):u[v]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?on:fm,this.isPropagationStopped=fm,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=on)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=on)},persist:function(){},isPersistent:on}),t}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sn=vt(lr),Lo=b({},lr,{view:0,detail:0}),_0=vt(Lo),ol,sl,Vo,nn=b({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:il,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vo&&(Vo&&e.type==="mousemove"?(ol=e.screenX-Vo.screenX,sl=e.screenY-Vo.screenY):sl=ol=0,Vo=e),ol)},movementY:function(e){return"movementY"in e?e.movementY:sl}}),hm=vt(nn),w0=b({},nn,{dataTransfer:0}),N0=vt(w0),q0=b({},Lo,{relatedTarget:0}),nl=vt(q0),z0=b({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),L0=vt(z0),V0=b({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),P0=vt(V0),B0=b({},lr,{data:0}),pm=vt(B0),X0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=k0[e])?!!t[e]:!1}function il(){return F0}var H0=b({},Lo,{key:function(e){if(e.key){var t=X0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=rn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?U0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:il,charCode:function(e){return e.type==="keypress"?rn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),G0=vt(H0),I0=b({},nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xm=vt(I0),Y0=b({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:il}),Q0=vt(Y0),Z0=b({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),K0=vt(Z0),J0=b({},nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),W0=vt(J0),$0=b({},lr,{newState:0,oldState:0}),ey=vt($0),ty=[9,13,27,32],ll=ua&&"CompositionEvent"in window,Po=null;ua&&"documentMode"in document&&(Po=document.documentMode);var ay=ua&&"TextEvent"in window&&!Po,gm=ua&&(!ll||Po&&8<Po&&11>=Po),bm=" ",vm=!1;function ym(e,t){switch(e){case"keyup":return ty.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kr=!1;function ry(e,t){switch(e){case"compositionend":return Sm(t);case"keypress":return t.which!==32?null:(vm=!0,bm);case"textInput":return e=t.data,e===bm&&vm?null:e;default:return null}}function oy(e,t){if(kr)return e==="compositionend"||!ll&&ym(e,t)?(e=mm(),an=rl=Da=null,kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gm&&t.locale!=="ko"?null:t.data;default:return null}}var sy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sy[e.type]:t==="textarea"}function Am(e,t,r,s){Xr?Ur?Ur.push(s):Ur=[s]:Xr=s,t=Yn(t,"onChange"),0<t.length&&(r=new sn("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var Bo=null,Xo=null;function ny(e){op(e,0)}function ln(e){var t=No(e);if(om(t))return e}function Em(e,t){if(e==="change")return t}var Rm=!1;if(ua){var cl;if(ua){var ul="oninput"in document;if(!ul){var Tm=document.createElement("div");Tm.setAttribute("oninput","return;"),ul=typeof Tm.oninput=="function"}cl=ul}else cl=!1;Rm=cl&&(!document.documentMode||9<document.documentMode)}function Cm(){Bo&&(Bo.detachEvent("onpropertychange",Mm),Xo=Bo=null)}function Mm(e){if(e.propertyName==="value"&&ln(Xo)){var t=[];Am(t,Xo,e,el(e)),dm(ny,t)}}function iy(e,t,r){e==="focusin"?(Cm(),Bo=t,Xo=r,Bo.attachEvent("onpropertychange",Mm)):e==="focusout"&&Cm()}function ly(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ln(Xo)}function cy(e,t){if(e==="click")return ln(t)}function uy(e,t){if(e==="input"||e==="change")return ln(t)}function dy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:dy;function Uo(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var c=r[s];if(!Ta.call(t,c)||!Tt(e[c],t[c]))return!1}return!0}function Om(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dm(e,t){var r=Om(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Om(r)}}function _m(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_m(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=en(e.document);t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=en(e.document)}return t}function dl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var my=ua&&"documentMode"in document&&11>=document.documentMode,Fr=null,ml=null,ko=null,fl=!1;function Nm(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;fl||Fr==null||Fr!==en(s)||(s=Fr,"selectionStart"in s&&dl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ko&&Uo(ko,s)||(ko=s,s=Yn(ml,"onSelect"),0<s.length&&(t=new sn("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=Fr)))}function cr(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Hr={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionrun:cr("Transition","TransitionRun"),transitionstart:cr("Transition","TransitionStart"),transitioncancel:cr("Transition","TransitionCancel"),transitionend:cr("Transition","TransitionEnd")},hl={},qm={};ua&&(qm=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function ur(e){if(hl[e])return hl[e];if(!Hr[e])return e;var t=Hr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in qm)return hl[e]=t[r];return e}var zm=ur("animationend"),Lm=ur("animationiteration"),Vm=ur("animationstart"),fy=ur("transitionrun"),hy=ur("transitionstart"),py=ur("transitioncancel"),Pm=ur("transitionend"),Bm=new Map,pl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pl.push("scrollEnd");function Ht(e,t){Bm.set(e,t),ir(t,[e])}var Xm=new WeakMap;function zt(e,t){if(typeof e=="object"&&e!==null){var r=Xm.get(e);return r!==void 0?r:(t={value:e,source:t,stack:am(t)},Xm.set(e,t),t)}return{value:e,source:t,stack:am(t)}}var Lt=[],Gr=0,xl=0;function cn(){for(var e=Gr,t=xl=Gr=0;t<e;){var r=Lt[t];Lt[t++]=null;var s=Lt[t];Lt[t++]=null;var c=Lt[t];Lt[t++]=null;var u=Lt[t];if(Lt[t++]=null,s!==null&&c!==null){var p=s.pending;p===null?c.next=c:(c.next=p.next,p.next=c),s.pending=c}u!==0&&Um(r,c,u)}}function un(e,t,r,s){Lt[Gr++]=e,Lt[Gr++]=t,Lt[Gr++]=r,Lt[Gr++]=s,xl|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function gl(e,t,r,s){return un(e,t,r,s),dn(e)}function Ir(e,t){return un(e,null,null,t),dn(e)}function Um(e,t,r){e.lanes|=r;var s=e.alternate;s!==null&&(s.lanes|=r);for(var c=!1,u=e.return;u!==null;)u.childLanes|=r,s=u.alternate,s!==null&&(s.childLanes|=r),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(c=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,c&&t!==null&&(c=31-Rt(r),e=u.hiddenUpdates,s=e[c],s===null?e[c]=[t]:s.push(t),t.lane=r|536870912),u):null}function dn(e){if(50<fs)throw fs=0,Ac=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Yr={};function xy(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,t,r,s){return new xy(e,t,r,s)}function bl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function da(e,t){var r=e.alternate;return r===null?(r=Ct(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function km(e,t){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,t=r.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function mn(e,t,r,s,c,u){var p=0;if(s=e,typeof e=="function")bl(e)&&(p=1);else if(typeof e=="string")p=b1(e,r,ne.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case W:return e=Ct(31,r,t,c),e.elementType=W,e.lanes=u,e;case C:return dr(r.children,c,u,t);case N:p=8,c|=24;break;case L:return e=Ct(12,r,t,c|2),e.elementType=L,e.lanes=u,e;case P:return e=Ct(13,r,t,c),e.elementType=P,e.lanes=u,e;case K:return e=Ct(19,r,t,c),e.elementType=K,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case F:case H:p=10;break e;case G:p=9;break e;case I:p=11;break e;case ce:p=14;break e;case X:p=16,s=null;break e}p=29,r=Error(i(130,e===null?"null":typeof e,"")),s=null}return t=Ct(p,r,t,c),t.elementType=e,t.type=s,t.lanes=u,t}function dr(e,t,r,s){return e=Ct(7,e,s,t),e.lanes=r,e}function vl(e,t,r){return e=Ct(6,e,null,t),e.lanes=r,e}function yl(e,t,r){return t=Ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Qr=[],Zr=0,fn=null,hn=0,Vt=[],Pt=0,mr=null,ma=1,fa="";function fr(e,t){Qr[Zr++]=hn,Qr[Zr++]=fn,fn=e,hn=t}function Fm(e,t,r){Vt[Pt++]=ma,Vt[Pt++]=fa,Vt[Pt++]=mr,mr=e;var s=ma;e=fa;var c=32-Rt(s)-1;s&=~(1<<c),r+=1;var u=32-Rt(t)+c;if(30<u){var p=c-c%5;u=(s&(1<<p)-1).toString(32),s>>=p,c-=p,ma=1<<32-Rt(t)+c|r<<c|s,fa=u+e}else ma=1<<u|r<<c|s,fa=e}function Sl(e){e.return!==null&&(fr(e,1),Fm(e,1,0))}function jl(e){for(;e===fn;)fn=Qr[--Zr],Qr[Zr]=null,hn=Qr[--Zr],Qr[Zr]=null;for(;e===mr;)mr=Vt[--Pt],Vt[Pt]=null,fa=Vt[--Pt],Vt[Pt]=null,ma=Vt[--Pt],Vt[Pt]=null}var ht=null,ke=null,Re=!1,hr=null,$t=!1,Al=Error(i(519));function pr(e){var t=Error(i(418,""));throw Go(zt(t,e)),Al}function Hm(e){var t=e.stateNode,r=e.type,s=e.memoizedProps;switch(t[ct]=e,t[bt]=s,r){case"dialog":be("cancel",t),be("close",t);break;case"iframe":case"object":case"embed":be("load",t);break;case"video":case"audio":for(r=0;r<ps.length;r++)be(ps[r],t);break;case"source":be("error",t);break;case"img":case"image":case"link":be("error",t),be("load",t);break;case"details":be("toggle",t);break;case"input":be("invalid",t),sm(t,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),$s(t);break;case"select":be("invalid",t);break;case"textarea":be("invalid",t),im(t,s.value,s.defaultValue,s.children),$s(t)}r=s.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||t.textContent===""+r||s.suppressHydrationWarning===!0||lp(t.textContent,r)?(s.popover!=null&&(be("beforetoggle",t),be("toggle",t)),s.onScroll!=null&&be("scroll",t),s.onScrollEnd!=null&&be("scrollend",t),s.onClick!=null&&(t.onclick=Qn),t=!0):t=!1,t||pr(e)}function Gm(e){for(ht=e.return;ht;)switch(ht.tag){case 5:case 13:$t=!1;return;case 27:case 3:$t=!0;return;default:ht=ht.return}}function Fo(e){if(e!==ht)return!1;if(!Re)return Gm(e),Re=!0,!1;var t=e.tag,r;if((r=t!==3&&t!==27)&&((r=t===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Bc(e.type,e.memoizedProps)),r=!r),r&&ke&&pr(e),Gm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(t===0){ke=It(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++;e=e.nextSibling}ke=null}}else t===27?(t=ke,Ia(e.type)?(e=Fc,Fc=null,ke=e):ke=t):ke=ht?It(e.stateNode.nextSibling):null;return!0}function Ho(){ke=ht=null,Re=!1}function Im(){var e=hr;return e!==null&&(jt===null?jt=e:jt.push.apply(jt,e),hr=null),e}function Go(e){hr===null?hr=[e]:hr.push(e)}var El=U(null),xr=null,ha=null;function _a(e,t,r){Q(El,t._currentValue),t._currentValue=r}function pa(e){e._currentValue=El.current,Z(El)}function Rl(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function Tl(e,t,r,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var u=c.dependencies;if(u!==null){var p=c.child;u=u.firstContext;e:for(;u!==null;){var v=u;u=c;for(var A=0;A<t.length;A++)if(v.context===t[A]){u.lanes|=r,v=u.alternate,v!==null&&(v.lanes|=r),Rl(u.return,r,e),s||(p=null);break e}u=v.next}}else if(c.tag===18){if(p=c.return,p===null)throw Error(i(341));p.lanes|=r,u=p.alternate,u!==null&&(u.lanes|=r),Rl(p,r,e),p=null}else p=c.child;if(p!==null)p.return=c;else for(p=c;p!==null;){if(p===e){p=null;break}if(c=p.sibling,c!==null){c.return=p.return,p=c;break}p=p.return}c=p}}function Io(e,t,r,s){e=null;for(var c=t,u=!1;c!==null;){if(!u){if((c.flags&524288)!==0)u=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var p=c.alternate;if(p===null)throw Error(i(387));if(p=p.memoizedProps,p!==null){var v=c.type;Tt(c.pendingProps.value,p.value)||(e!==null?e.push(v):e=[v])}}else if(c===et.current){if(p=c.alternate,p===null)throw Error(i(387));p.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Ss):e=[Ss])}c=c.return}e!==null&&Tl(t,e,r,s),t.flags|=262144}function pn(e){for(e=e.firstContext;e!==null;){if(!Tt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gr(e){xr=e,ha=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ut(e){return Ym(xr,e)}function xn(e,t){return xr===null&&gr(e),Ym(e,t)}function Ym(e,t){var r=t._currentValue;if(t={context:t,memoizedValue:r,next:null},ha===null){if(e===null)throw Error(i(308));ha=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ha=ha.next=t;return r}var gy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(r,s){e.push(s)}};this.abort=function(){t.aborted=!0,e.forEach(function(r){return r()})}},by=a.unstable_scheduleCallback,vy=a.unstable_NormalPriority,Ke={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cl(){return{controller:new gy,data:new Map,refCount:0}}function Yo(e){e.refCount--,e.refCount===0&&by(vy,function(){e.controller.abort()})}var Qo=null,Ml=0,Kr=0,Jr=null;function yy(e,t){if(Qo===null){var r=Qo=[];Ml=0,Kr=Dc(),Jr={status:"pending",value:void 0,then:function(s){r.push(s)}}}return Ml++,t.then(Qm,Qm),t}function Qm(){if(--Ml===0&&Qo!==null){Jr!==null&&(Jr.status="fulfilled");var e=Qo;Qo=null,Kr=0,Jr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sy(e,t){var r=[],s={status:"pending",value:null,reason:null,then:function(c){r.push(c)}};return e.then(function(){s.status="fulfilled",s.value=t;for(var c=0;c<r.length;c++)(0,r[c])(t)},function(c){for(s.status="rejected",s.reason=c,c=0;c<r.length;c++)(0,r[c])(void 0)}),s}var Zm=q.S;q.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&yy(e,t),Zm!==null&&Zm(e,t)};var br=U(null);function Ol(){var e=br.current;return e!==null?e:Le.pooledCache}function gn(e,t){t===null?Q(br,br.current):Q(br,t.pool)}function Km(){var e=Ol();return e===null?null:{parent:Ke._currentValue,pool:e}}var Zo=Error(i(460)),Jm=Error(i(474)),bn=Error(i(542)),Dl={then:function(){}};function Wm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function vn(){}function $m(e,t,r){switch(r=e[r],r===void 0?e.push(t):r!==t&&(t.then(vn,vn),t=r),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,tf(e),e;default:if(typeof t.status=="string")t.then(vn,vn);else{if(e=Le,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status="pending",e.then(function(s){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=s}},function(s){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=s}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,tf(e),e}throw Ko=t,Zo}}var Ko=null;function ef(){if(Ko===null)throw Error(i(459));var e=Ko;return Ko=null,e}function tf(e){if(e===Zo||e===bn)throw Error(i(483))}var wa=!1;function _l(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Te&2)!==0){var c=s.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),s.pending=t,t=dn(e),Um(e,null,r),t}return un(e,s,t,r),dn(e)}function Jo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194048)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Qd(e,r)}}function Nl(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var c=null,u=null;if(r=r.firstBaseUpdate,r!==null){do{var p={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};u===null?c=u=p:u=u.next=p,r=r.next}while(r!==null);u===null?c=u=t:u=u.next=t}else c=u=t;r={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:u,shared:s.shared,callbacks:s.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}var ql=!1;function Wo(){if(ql){var e=Jr;if(e!==null)throw e}}function $o(e,t,r,s){ql=!1;var c=e.updateQueue;wa=!1;var u=c.firstBaseUpdate,p=c.lastBaseUpdate,v=c.shared.pending;if(v!==null){c.shared.pending=null;var A=v,D=A.next;A.next=null,p===null?u=D:p.next=D,p=A;var V=e.alternate;V!==null&&(V=V.updateQueue,v=V.lastBaseUpdate,v!==p&&(v===null?V.firstBaseUpdate=D:v.next=D,V.lastBaseUpdate=A))}if(u!==null){var k=c.baseState;p=0,V=D=A=null,v=u;do{var _=v.lane&-536870913,w=_!==v.lane;if(w?(ye&_)===_:(s&_)===_){_!==0&&_===Kr&&(ql=!0),V!==null&&(V=V.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var de=e,ie=v;_=t;var De=r;switch(ie.tag){case 1:if(de=ie.payload,typeof de=="function"){k=de.call(De,k,_);break e}k=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=ie.payload,_=typeof de=="function"?de.call(De,k,_):de,_==null)break e;k=b({},k,_);break e;case 2:wa=!0}}_=v.callback,_!==null&&(e.flags|=64,w&&(e.flags|=8192),w=c.callbacks,w===null?c.callbacks=[_]:w.push(_))}else w={lane:_,tag:v.tag,payload:v.payload,callback:v.callback,next:null},V===null?(D=V=w,A=k):V=V.next=w,p|=_;if(v=v.next,v===null){if(v=c.shared.pending,v===null)break;w=v,v=w.next,w.next=null,c.lastBaseUpdate=w,c.shared.pending=null}}while(!0);V===null&&(A=k),c.baseState=A,c.firstBaseUpdate=D,c.lastBaseUpdate=V,u===null&&(c.shared.lanes=0),ka|=p,e.lanes=p,e.memoizedState=k}}function af(e,t){if(typeof e!="function")throw Error(i(191,e));e.call(t)}function rf(e,t){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)af(r[e],t)}var Wr=U(null),yn=U(0);function of(e,t){e=ja,Q(yn,e),Q(Wr,t),ja=e|t.baseLanes}function zl(){Q(yn,ja),Q(Wr,Wr.current)}function Ll(){ja=yn.current,Z(Wr),Z(yn)}var za=0,he=null,Me=null,Ye=null,Sn=!1,$r=!1,vr=!1,jn=0,es=0,eo=null,jy=0;function Ge(){throw Error(i(321))}function Vl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Tt(e[r],t[r]))return!1;return!0}function Pl(e,t,r,s,c,u){return za=u,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,q.H=e===null||e.memoizedState===null?kf:Ff,vr=!1,u=r(s,c),vr=!1,$r&&(u=nf(t,r,s,c)),sf(e),u}function sf(e){q.H=Mn;var t=Me!==null&&Me.next!==null;if(za=0,Ye=Me=he=null,Sn=!1,es=0,eo=null,t)throw Error(i(300));e===null||at||(e=e.dependencies,e!==null&&pn(e)&&(at=!0))}function nf(e,t,r,s){he=e;var c=0;do{if($r&&(eo=null),es=0,$r=!1,25<=c)throw Error(i(301));if(c+=1,Ye=Me=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}q.H=Oy,u=t(r,s)}while($r);return u}function Ay(){var e=q.H,t=e.useState()[0];return t=typeof t.then=="function"?ts(t):t,e=e.useState()[0],(Me!==null?Me.memoizedState:null)!==e&&(he.flags|=1024),t}function Bl(){var e=jn!==0;return jn=0,e}function Xl(e,t,r){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r}function Ul(e){if(Sn){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Sn=!1}za=0,Ye=Me=he=null,$r=!1,es=jn=0,eo=null}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?he.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Qe(){if(Me===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Ye===null?he.memoizedState:Ye.next;if(t!==null)Ye=t,Me=e;else{if(e===null)throw he.alternate===null?Error(i(467)):Error(i(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Ye===null?he.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function kl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ts(e){var t=es;return es+=1,eo===null&&(eo=[]),e=$m(eo,e,t),t=he,(Ye===null?t.memoizedState:Ye.next)===null&&(t=t.alternate,q.H=t===null||t.memoizedState===null?kf:Ff),e}function An(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ts(e);if(e.$$typeof===H)return ut(e)}throw Error(i(438,String(e)))}function Fl(e){var t=null,r=he.updateQueue;if(r!==null&&(t=r.memoCache),t==null){var s=he.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(t={data:s.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),r===null&&(r=kl(),he.updateQueue=r),r.memoCache=t,r=t.data[t.index],r===void 0)for(r=t.data[t.index]=Array(e),s=0;s<e;s++)r[s]=je;return t.index++,r}function xa(e,t){return typeof t=="function"?t(e):t}function En(e){var t=Qe();return Hl(t,Me,e)}function Hl(e,t,r){var s=e.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=r;var c=e.baseQueue,u=s.pending;if(u!==null){if(c!==null){var p=c.next;c.next=u.next,u.next=p}t.baseQueue=c=u,s.pending=null}if(u=e.baseState,c===null)e.memoizedState=u;else{t=c.next;var v=p=null,A=null,D=t,V=!1;do{var k=D.lane&-536870913;if(k!==D.lane?(ye&k)===k:(za&k)===k){var _=D.revertLane;if(_===0)A!==null&&(A=A.next={lane:0,revertLane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),k===Kr&&(V=!0);else if((za&_)===_){D=D.next,_===Kr&&(V=!0);continue}else k={lane:0,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},A===null?(v=A=k,p=u):A=A.next=k,he.lanes|=_,ka|=_;k=D.action,vr&&r(u,k),u=D.hasEagerState?D.eagerState:r(u,k)}else _={lane:k,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},A===null?(v=A=_,p=u):A=A.next=_,he.lanes|=k,ka|=k;D=D.next}while(D!==null&&D!==t);if(A===null?p=u:A.next=v,!Tt(u,e.memoizedState)&&(at=!0,V&&(r=Jr,r!==null)))throw r;e.memoizedState=u,e.baseState=p,e.baseQueue=A,s.lastRenderedState=u}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Gl(e){var t=Qe(),r=t.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=e;var s=r.dispatch,c=r.pending,u=t.memoizedState;if(c!==null){r.pending=null;var p=c=c.next;do u=e(u,p.action),p=p.next;while(p!==c);Tt(u,t.memoizedState)||(at=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),r.lastRenderedState=u}return[u,s]}function lf(e,t,r){var s=he,c=Qe(),u=Re;if(u){if(r===void 0)throw Error(i(407));r=r()}else r=t();var p=!Tt((Me||c).memoizedState,r);p&&(c.memoizedState=r,at=!0),c=c.queue;var v=df.bind(null,s,c,e);if(as(2048,8,v,[e]),c.getSnapshot!==t||p||Ye!==null&&Ye.memoizedState.tag&1){if(s.flags|=2048,to(9,Rn(),uf.bind(null,s,c,r,t),null),Le===null)throw Error(i(349));u||(za&124)!==0||cf(s,t,r)}return r}function cf(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=he.updateQueue,t===null?(t=kl(),he.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function uf(e,t,r,s){t.value=r,t.getSnapshot=s,mf(t)&&ff(e)}function df(e,t,r){return r(function(){mf(t)&&ff(e)})}function mf(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Tt(e,r)}catch{return!0}}function ff(e){var t=Ir(e,2);t!==null&&wt(t,e,2)}function Il(e){var t=yt();if(typeof e=="function"){var r=e;if(e=r(),vr){Ma(!0);try{r()}finally{Ma(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:e},t}function hf(e,t,r,s){return e.baseState=r,Hl(e,Me,typeof s=="function"?s:xa)}function Ey(e,t,r,s,c){if(Cn(e))throw Error(i(485));if(e=t.action,e!==null){var u={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){u.listeners.push(p)}};q.T!==null?r(!0):u.isTransition=!1,s(u),r=t.pending,r===null?(u.next=t.pending=u,pf(t,u)):(u.next=r.next,t.pending=r.next=u)}}function pf(e,t){var r=t.action,s=t.payload,c=e.state;if(t.isTransition){var u=q.T,p={};q.T=p;try{var v=r(c,s),A=q.S;A!==null&&A(p,v),xf(e,t,v)}catch(D){Yl(e,t,D)}finally{q.T=u}}else try{u=r(c,s),xf(e,t,u)}catch(D){Yl(e,t,D)}}function xf(e,t,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(s){gf(e,t,s)},function(s){return Yl(e,t,s)}):gf(e,t,r)}function gf(e,t,r){t.status="fulfilled",t.value=r,bf(t),e.state=r,t=e.pending,t!==null&&(r=t.next,r===t?e.pending=null:(r=r.next,t.next=r,pf(e,r)))}function Yl(e,t,r){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do t.status="rejected",t.reason=r,bf(t),t=t.next;while(t!==s)}e.action=null}function bf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function vf(e,t){return t}function yf(e,t){if(Re){var r=Le.formState;if(r!==null){e:{var s=he;if(Re){if(ke){t:{for(var c=ke,u=$t;c.nodeType!==8;){if(!u){c=null;break t}if(c=It(c.nextSibling),c===null){c=null;break t}}u=c.data,c=u==="F!"||u==="F"?c:null}if(c){ke=It(c.nextSibling),s=c.data==="F!";break e}}pr(s)}s=!1}s&&(t=r[0])}}return r=yt(),r.memoizedState=r.baseState=t,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vf,lastRenderedState:t},r.queue=s,r=Bf.bind(null,he,s),s.dispatch=r,s=Il(!1),u=Wl.bind(null,he,!1,s.queue),s=yt(),c={state:t,dispatch:null,action:e,pending:null},s.queue=c,r=Ey.bind(null,he,c,u,r),c.dispatch=r,s.memoizedState=e,[t,r,!1]}function Sf(e){var t=Qe();return jf(t,Me,e)}function jf(e,t,r){if(t=Hl(e,t,vf)[0],e=En(xa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var s=ts(t)}catch(p){throw p===Zo?bn:p}else s=t;t=Qe();var c=t.queue,u=c.dispatch;return r!==t.memoizedState&&(he.flags|=2048,to(9,Rn(),Ry.bind(null,c,r),null)),[s,u,e]}function Ry(e,t){e.action=t}function Af(e){var t=Qe(),r=Me;if(r!==null)return jf(t,r,e);Qe(),t=t.memoizedState,r=Qe();var s=r.queue.dispatch;return r.memoizedState=e,[t,s,!1]}function to(e,t,r,s){return e={tag:e,create:r,deps:s,inst:t,next:null},t=he.updateQueue,t===null&&(t=kl(),he.updateQueue=t),r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e),e}function Rn(){return{destroy:void 0,resource:void 0}}function Ef(){return Qe().memoizedState}function Tn(e,t,r,s){var c=yt();s=s===void 0?null:s,he.flags|=e,c.memoizedState=to(1|t,Rn(),r,s)}function as(e,t,r,s){var c=Qe();s=s===void 0?null:s;var u=c.memoizedState.inst;Me!==null&&s!==null&&Vl(s,Me.memoizedState.deps)?c.memoizedState=to(t,u,r,s):(he.flags|=e,c.memoizedState=to(1|t,u,r,s))}function Rf(e,t){Tn(8390656,8,e,t)}function Tf(e,t){as(2048,8,e,t)}function Cf(e,t){return as(4,2,e,t)}function Mf(e,t){return as(4,4,e,t)}function Of(e,t){if(typeof t=="function"){e=e();var r=t(e);return function(){typeof r=="function"?r():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Df(e,t,r){r=r!=null?r.concat([e]):null,as(4,4,Of.bind(null,t,e),r)}function Ql(){}function _f(e,t){var r=Qe();t=t===void 0?null:t;var s=r.memoizedState;return t!==null&&Vl(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function wf(e,t){var r=Qe();t=t===void 0?null:t;var s=r.memoizedState;if(t!==null&&Vl(t,s[1]))return s[0];if(s=e(),vr){Ma(!0);try{e()}finally{Ma(!1)}}return r.memoizedState=[s,t],s}function Zl(e,t,r){return r===void 0||(za&1073741824)!==0?e.memoizedState=t:(e.memoizedState=r,e=zh(),he.lanes|=e,ka|=e,r)}function Nf(e,t,r,s){return Tt(r,t)?r:Wr.current!==null?(e=Zl(e,r,s),Tt(e,t)||(at=!0),e):(za&42)===0?(at=!0,e.memoizedState=r):(e=zh(),he.lanes|=e,ka|=e,t)}function qf(e,t,r,s,c){var u=Y.p;Y.p=u!==0&&8>u?u:8;var p=q.T,v={};q.T=v,Wl(e,!1,t,r);try{var A=c(),D=q.S;if(D!==null&&D(v,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var V=Sy(A,s);rs(e,t,V,_t(e))}else rs(e,t,s,_t(e))}catch(k){rs(e,t,{then:function(){},status:"rejected",reason:k},_t())}finally{Y.p=u,q.T=p}}function Ty(){}function Kl(e,t,r,s){if(e.tag!==5)throw Error(i(476));var c=zf(e).queue;qf(e,c,t,J,r===null?Ty:function(){return Lf(e),r(s)})}function zf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:J},next:null};var r={};return t.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:r},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Lf(e){var t=zf(e).next.queue;rs(e,t,{},_t())}function Jl(){return ut(Ss)}function Vf(){return Qe().memoizedState}function Pf(){return Qe().memoizedState}function Cy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var r=_t();e=Na(r);var s=qa(t,e,r);s!==null&&(wt(s,t,r),Jo(s,t,r)),t={cache:Cl()},e.payload=t;return}t=t.return}}function My(e,t,r){var s=_t();r={lane:s,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Cn(e)?Xf(t,r):(r=gl(e,t,r,s),r!==null&&(wt(r,e,s),Uf(r,t,s)))}function Bf(e,t,r){var s=_t();rs(e,t,r,s)}function rs(e,t,r,s){var c={lane:s,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Cn(e))Xf(t,c);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var p=t.lastRenderedState,v=u(p,r);if(c.hasEagerState=!0,c.eagerState=v,Tt(v,p))return un(e,t,c,0),Le===null&&cn(),!1}catch{}if(r=gl(e,t,c,s),r!==null)return wt(r,e,s),Uf(r,t,s),!0}return!1}function Wl(e,t,r,s){if(s={lane:2,revertLane:Dc(),action:s,hasEagerState:!1,eagerState:null,next:null},Cn(e)){if(t)throw Error(i(479))}else t=gl(e,r,s,2),t!==null&&wt(t,e,2)}function Cn(e){var t=e.alternate;return e===he||t!==null&&t===he}function Xf(e,t){$r=Sn=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Uf(e,t,r){if((r&4194048)!==0){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Qd(e,r)}}var Mn={readContext:ut,use:An,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useLayoutEffect:Ge,useInsertionEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useSyncExternalStore:Ge,useId:Ge,useHostTransitionStatus:Ge,useFormState:Ge,useActionState:Ge,useOptimistic:Ge,useMemoCache:Ge,useCacheRefresh:Ge},kf={readContext:ut,use:An,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:Rf,useImperativeHandle:function(e,t,r){r=r!=null?r.concat([e]):null,Tn(4194308,4,Of.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Tn(4194308,4,e,t)},useInsertionEffect:function(e,t){Tn(4,2,e,t)},useMemo:function(e,t){var r=yt();t=t===void 0?null:t;var s=e();if(vr){Ma(!0);try{e()}finally{Ma(!1)}}return r.memoizedState=[s,t],s},useReducer:function(e,t,r){var s=yt();if(r!==void 0){var c=r(t);if(vr){Ma(!0);try{r(t)}finally{Ma(!1)}}}else c=t;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=My.bind(null,he,e),[s.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:function(e){e=Il(e);var t=e.queue,r=Bf.bind(null,he,t);return t.dispatch=r,[e.memoizedState,r]},useDebugValue:Ql,useDeferredValue:function(e,t){var r=yt();return Zl(r,e,t)},useTransition:function(){var e=Il(!1);return e=qf.bind(null,he,e.queue,!0,!1),yt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,r){var s=he,c=yt();if(Re){if(r===void 0)throw Error(i(407));r=r()}else{if(r=t(),Le===null)throw Error(i(349));(ye&124)!==0||cf(s,t,r)}c.memoizedState=r;var u={value:r,getSnapshot:t};return c.queue=u,Rf(df.bind(null,s,u,e),[e]),s.flags|=2048,to(9,Rn(),uf.bind(null,s,u,r,t),null),r},useId:function(){var e=yt(),t=Le.identifierPrefix;if(Re){var r=fa,s=ma;r=(s&~(1<<32-Rt(s)-1)).toString(32)+r,t="«"+t+"R"+r,r=jn++,0<r&&(t+="H"+r.toString(32)),t+="»"}else r=jy++,t="«"+t+"r"+r.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Jl,useFormState:yf,useActionState:yf,useOptimistic:function(e){var t=yt();t.memoizedState=t.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=r,t=Wl.bind(null,he,!0,r),r.dispatch=t,[e,t]},useMemoCache:Fl,useCacheRefresh:function(){return yt().memoizedState=Cy.bind(null,he)}},Ff={readContext:ut,use:An,useCallback:_f,useContext:ut,useEffect:Tf,useImperativeHandle:Df,useInsertionEffect:Cf,useLayoutEffect:Mf,useMemo:wf,useReducer:En,useRef:Ef,useState:function(){return En(xa)},useDebugValue:Ql,useDeferredValue:function(e,t){var r=Qe();return Nf(r,Me.memoizedState,e,t)},useTransition:function(){var e=En(xa)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:ts(e),t]},useSyncExternalStore:lf,useId:Vf,useHostTransitionStatus:Jl,useFormState:Sf,useActionState:Sf,useOptimistic:function(e,t){var r=Qe();return hf(r,Me,e,t)},useMemoCache:Fl,useCacheRefresh:Pf},Oy={readContext:ut,use:An,useCallback:_f,useContext:ut,useEffect:Tf,useImperativeHandle:Df,useInsertionEffect:Cf,useLayoutEffect:Mf,useMemo:wf,useReducer:Gl,useRef:Ef,useState:function(){return Gl(xa)},useDebugValue:Ql,useDeferredValue:function(e,t){var r=Qe();return Me===null?Zl(r,e,t):Nf(r,Me.memoizedState,e,t)},useTransition:function(){var e=Gl(xa)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:ts(e),t]},useSyncExternalStore:lf,useId:Vf,useHostTransitionStatus:Jl,useFormState:Af,useActionState:Af,useOptimistic:function(e,t){var r=Qe();return Me!==null?hf(r,Me,e,t):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Fl,useCacheRefresh:Pf},ao=null,os=0;function On(e){var t=os;return os+=1,ao===null&&(ao=[]),$m(ao,e,t)}function ss(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Dn(e,t){throw t.$$typeof===S?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Hf(e){var t=e._init;return t(e._payload)}function Gf(e){function t(T,E){if(e){var O=T.deletions;O===null?(T.deletions=[E],T.flags|=16):O.push(E)}}function r(T,E){if(!e)return null;for(;E!==null;)t(T,E),E=E.sibling;return null}function s(T){for(var E=new Map;T!==null;)T.key!==null?E.set(T.key,T):E.set(T.index,T),T=T.sibling;return E}function c(T,E){return T=da(T,E),T.index=0,T.sibling=null,T}function u(T,E,O){return T.index=O,e?(O=T.alternate,O!==null?(O=O.index,O<E?(T.flags|=67108866,E):O):(T.flags|=67108866,E)):(T.flags|=1048576,E)}function p(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function v(T,E,O,B){return E===null||E.tag!==6?(E=vl(O,T.mode,B),E.return=T,E):(E=c(E,O),E.return=T,E)}function A(T,E,O,B){var $=O.type;return $===C?V(T,E,O.props.children,B,O.key):E!==null&&(E.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===X&&Hf($)===E.type)?(E=c(E,O.props),ss(E,O),E.return=T,E):(E=mn(O.type,O.key,O.props,null,T.mode,B),ss(E,O),E.return=T,E)}function D(T,E,O,B){return E===null||E.tag!==4||E.stateNode.containerInfo!==O.containerInfo||E.stateNode.implementation!==O.implementation?(E=yl(O,T.mode,B),E.return=T,E):(E=c(E,O.children||[]),E.return=T,E)}function V(T,E,O,B,$){return E===null||E.tag!==7?(E=dr(O,T.mode,B,$),E.return=T,E):(E=c(E,O),E.return=T,E)}function k(T,E,O){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=vl(""+E,T.mode,O),E.return=T,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case y:return O=mn(E.type,E.key,E.props,null,T.mode,O),ss(O,E),O.return=T,O;case R:return E=yl(E,T.mode,O),E.return=T,E;case X:var B=E._init;return E=B(E._payload),k(T,E,O)}if(ze(E)||Ae(E))return E=dr(E,T.mode,O,null),E.return=T,E;if(typeof E.then=="function")return k(T,On(E),O);if(E.$$typeof===H)return k(T,xn(T,E),O);Dn(T,E)}return null}function _(T,E,O,B){var $=E!==null?E.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return $!==null?null:v(T,E,""+O,B);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case y:return O.key===$?A(T,E,O,B):null;case R:return O.key===$?D(T,E,O,B):null;case X:return $=O._init,O=$(O._payload),_(T,E,O,B)}if(ze(O)||Ae(O))return $!==null?null:V(T,E,O,B,null);if(typeof O.then=="function")return _(T,E,On(O),B);if(O.$$typeof===H)return _(T,E,xn(T,O),B);Dn(T,O)}return null}function w(T,E,O,B,$){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return T=T.get(O)||null,v(E,T,""+B,$);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case y:return T=T.get(B.key===null?O:B.key)||null,A(E,T,B,$);case R:return T=T.get(B.key===null?O:B.key)||null,D(E,T,B,$);case X:var xe=B._init;return B=xe(B._payload),w(T,E,O,B,$)}if(ze(B)||Ae(B))return T=T.get(O)||null,V(E,T,B,$,null);if(typeof B.then=="function")return w(T,E,O,On(B),$);if(B.$$typeof===H)return w(T,E,O,xn(E,B),$);Dn(E,B)}return null}function de(T,E,O,B){for(var $=null,xe=null,oe=E,le=E=0,ot=null;oe!==null&&le<O.length;le++){oe.index>le?(ot=oe,oe=null):ot=oe.sibling;var Ee=_(T,oe,O[le],B);if(Ee===null){oe===null&&(oe=ot);break}e&&oe&&Ee.alternate===null&&t(T,oe),E=u(Ee,E,le),xe===null?$=Ee:xe.sibling=Ee,xe=Ee,oe=ot}if(le===O.length)return r(T,oe),Re&&fr(T,le),$;if(oe===null){for(;le<O.length;le++)oe=k(T,O[le],B),oe!==null&&(E=u(oe,E,le),xe===null?$=oe:xe.sibling=oe,xe=oe);return Re&&fr(T,le),$}for(oe=s(oe);le<O.length;le++)ot=w(oe,T,le,O[le],B),ot!==null&&(e&&ot.alternate!==null&&oe.delete(ot.key===null?le:ot.key),E=u(ot,E,le),xe===null?$=ot:xe.sibling=ot,xe=ot);return e&&oe.forEach(function(Ja){return t(T,Ja)}),Re&&fr(T,le),$}function ie(T,E,O,B){if(O==null)throw Error(i(151));for(var $=null,xe=null,oe=E,le=E=0,ot=null,Ee=O.next();oe!==null&&!Ee.done;le++,Ee=O.next()){oe.index>le?(ot=oe,oe=null):ot=oe.sibling;var Ja=_(T,oe,Ee.value,B);if(Ja===null){oe===null&&(oe=ot);break}e&&oe&&Ja.alternate===null&&t(T,oe),E=u(Ja,E,le),xe===null?$=Ja:xe.sibling=Ja,xe=Ja,oe=ot}if(Ee.done)return r(T,oe),Re&&fr(T,le),$;if(oe===null){for(;!Ee.done;le++,Ee=O.next())Ee=k(T,Ee.value,B),Ee!==null&&(E=u(Ee,E,le),xe===null?$=Ee:xe.sibling=Ee,xe=Ee);return Re&&fr(T,le),$}for(oe=s(oe);!Ee.done;le++,Ee=O.next())Ee=w(oe,T,le,Ee.value,B),Ee!==null&&(e&&Ee.alternate!==null&&oe.delete(Ee.key===null?le:Ee.key),E=u(Ee,E,le),xe===null?$=Ee:xe.sibling=Ee,xe=Ee);return e&&oe.forEach(function(D1){return t(T,D1)}),Re&&fr(T,le),$}function De(T,E,O,B){if(typeof O=="object"&&O!==null&&O.type===C&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case y:e:{for(var $=O.key;E!==null;){if(E.key===$){if($=O.type,$===C){if(E.tag===7){r(T,E.sibling),B=c(E,O.props.children),B.return=T,T=B;break e}}else if(E.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===X&&Hf($)===E.type){r(T,E.sibling),B=c(E,O.props),ss(B,O),B.return=T,T=B;break e}r(T,E);break}else t(T,E);E=E.sibling}O.type===C?(B=dr(O.props.children,T.mode,B,O.key),B.return=T,T=B):(B=mn(O.type,O.key,O.props,null,T.mode,B),ss(B,O),B.return=T,T=B)}return p(T);case R:e:{for($=O.key;E!==null;){if(E.key===$)if(E.tag===4&&E.stateNode.containerInfo===O.containerInfo&&E.stateNode.implementation===O.implementation){r(T,E.sibling),B=c(E,O.children||[]),B.return=T,T=B;break e}else{r(T,E);break}else t(T,E);E=E.sibling}B=yl(O,T.mode,B),B.return=T,T=B}return p(T);case X:return $=O._init,O=$(O._payload),De(T,E,O,B)}if(ze(O))return de(T,E,O,B);if(Ae(O)){if($=Ae(O),typeof $!="function")throw Error(i(150));return O=$.call(O),ie(T,E,O,B)}if(typeof O.then=="function")return De(T,E,On(O),B);if(O.$$typeof===H)return De(T,E,xn(T,O),B);Dn(T,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,E!==null&&E.tag===6?(r(T,E.sibling),B=c(E,O),B.return=T,T=B):(r(T,E),B=vl(O,T.mode,B),B.return=T,T=B),p(T)):r(T,E)}return function(T,E,O,B){try{os=0;var $=De(T,E,O,B);return ao=null,$}catch(oe){if(oe===Zo||oe===bn)throw oe;var xe=Ct(29,oe,null,T.mode);return xe.lanes=B,xe.return=T,xe}}}var ro=Gf(!0),If=Gf(!1),Bt=U(null),ea=null;function La(e){var t=e.alternate;Q(Je,Je.current&1),Q(Bt,e),ea===null&&(t===null||Wr.current!==null||t.memoizedState!==null)&&(ea=e)}function Yf(e){if(e.tag===22){if(Q(Je,Je.current),Q(Bt,e),ea===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(ea=e)}}else Va()}function Va(){Q(Je,Je.current),Q(Bt,Bt.current)}function ga(e){Z(Bt),ea===e&&(ea=null),Z(Je)}var Je=U(0);function _n(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||kc(r)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function $l(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:b({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ec={enqueueSetState:function(e,t,r){e=e._reactInternals;var s=_t(),c=Na(s);c.payload=t,r!=null&&(c.callback=r),t=qa(e,c,s),t!==null&&(wt(t,e,s),Jo(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=_t(),c=Na(s);c.tag=1,c.payload=t,r!=null&&(c.callback=r),t=qa(e,c,s),t!==null&&(wt(t,e,s),Jo(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=_t(),s=Na(r);s.tag=2,t!=null&&(s.callback=t),t=qa(e,s,r),t!==null&&(wt(t,e,r),Jo(t,e,r))}};function Qf(e,t,r,s,c,u,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,u,p):t.prototype&&t.prototype.isPureReactComponent?!Uo(r,s)||!Uo(c,u):!0}function Zf(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&ec.enqueueReplaceState(t,t.state,null)}function yr(e,t){var r=t;if("ref"in t){r={};for(var s in t)s!=="ref"&&(r[s]=t[s])}if(e=e.defaultProps){r===t&&(r=b({},r));for(var c in e)r[c]===void 0&&(r[c]=e[c])}return r}var wn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Kf(e){wn(e)}function Jf(e){console.error(e)}function Wf(e){wn(e)}function Nn(e,t){try{var r=e.onUncaughtError;r(t.value,{componentStack:t.stack})}catch(s){setTimeout(function(){throw s})}}function $f(e,t,r){try{var s=e.onCaughtError;s(r.value,{componentStack:r.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function tc(e,t,r){return r=Na(r),r.tag=3,r.payload={element:null},r.callback=function(){Nn(e,t)},r}function eh(e){return e=Na(e),e.tag=3,e}function th(e,t,r,s){var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var u=s.value;e.payload=function(){return c(u)},e.callback=function(){$f(t,r,s)}}var p=r.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){$f(t,r,s),typeof c!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})})}function Dy(e,t,r,s,c){if(r.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(t=r.alternate,t!==null&&Io(t,r,c,!0),r=Bt.current,r!==null){switch(r.tag){case 13:return ea===null?Rc():r.alternate===null&&Fe===0&&(Fe=3),r.flags&=-257,r.flags|=65536,r.lanes=c,s===Dl?r.flags|=16384:(t=r.updateQueue,t===null?r.updateQueue=new Set([s]):t.add(s),Cc(e,s,c)),!1;case 22:return r.flags|=65536,s===Dl?r.flags|=16384:(t=r.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([s])},r.updateQueue=t):(r=t.retryQueue,r===null?t.retryQueue=new Set([s]):r.add(s)),Cc(e,s,c)),!1}throw Error(i(435,r.tag))}return Cc(e,s,c),Rc(),!1}if(Re)return t=Bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,s!==Al&&(e=Error(i(422),{cause:s}),Go(zt(e,r)))):(s!==Al&&(t=Error(i(423),{cause:s}),Go(zt(t,r))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=zt(s,r),c=tc(e.stateNode,s,c),Nl(e,c),Fe!==4&&(Fe=2)),!1;var u=Error(i(520),{cause:s});if(u=zt(u,r),ms===null?ms=[u]:ms.push(u),Fe!==4&&(Fe=2),t===null)return!0;s=zt(s,r),r=t;do{switch(r.tag){case 3:return r.flags|=65536,e=c&-c,r.lanes|=e,e=tc(r.stateNode,s,e),Nl(r,e),!1;case 1:if(t=r.type,u=r.stateNode,(r.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Fa===null||!Fa.has(u))))return r.flags|=65536,c&=-c,r.lanes|=c,c=eh(c),th(c,e,r,s),Nl(r,c),!1}r=r.return}while(r!==null);return!1}var ah=Error(i(461)),at=!1;function st(e,t,r,s){t.child=e===null?If(t,null,r,s):ro(t,e.child,r,s)}function rh(e,t,r,s,c){r=r.render;var u=t.ref;if("ref"in s){var p={};for(var v in s)v!=="ref"&&(p[v]=s[v])}else p=s;return gr(t),s=Pl(e,t,r,p,u,c),v=Bl(),e!==null&&!at?(Xl(e,t,c),ba(e,t,c)):(Re&&v&&Sl(t),t.flags|=1,st(e,t,s,c),t.child)}function oh(e,t,r,s,c){if(e===null){var u=r.type;return typeof u=="function"&&!bl(u)&&u.defaultProps===void 0&&r.compare===null?(t.tag=15,t.type=u,sh(e,t,u,s,c)):(e=mn(r.type,null,s,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!cc(e,c)){var p=u.memoizedProps;if(r=r.compare,r=r!==null?r:Uo,r(p,s)&&e.ref===t.ref)return ba(e,t,c)}return t.flags|=1,e=da(u,s),e.ref=t.ref,e.return=t,t.child=e}function sh(e,t,r,s,c){if(e!==null){var u=e.memoizedProps;if(Uo(u,s)&&e.ref===t.ref)if(at=!1,t.pendingProps=s=u,cc(e,c))(e.flags&131072)!==0&&(at=!0);else return t.lanes=e.lanes,ba(e,t,c)}return ac(e,t,r,s,c)}function nh(e,t,r){var s=t.pendingProps,c=s.children,u=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((t.flags&128)!==0){if(s=u!==null?u.baseLanes|r:r,e!==null){for(c=t.child=e.child,u=0;c!==null;)u=u|c.lanes|c.childLanes,c=c.sibling;t.childLanes=u&~s}else t.childLanes=0,t.child=null;return ih(e,t,s,r)}if((r&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&gn(t,u!==null?u.cachePool:null),u!==null?of(t,u):zl(),Yf(t);else return t.lanes=t.childLanes=536870912,ih(e,t,u!==null?u.baseLanes|r:r,r)}else u!==null?(gn(t,u.cachePool),of(t,u),Va(),t.memoizedState=null):(e!==null&&gn(t,null),zl(),Va());return st(e,t,c,r),t.child}function ih(e,t,r,s){var c=Ol();return c=c===null?null:{parent:Ke._currentValue,pool:c},t.memoizedState={baseLanes:r,cachePool:c},e!==null&&gn(t,null),zl(),Yf(t),e!==null&&Io(e,t,s,!0),null}function qn(e,t){var r=t.ref;if(r===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(i(284));(e===null||e.ref!==r)&&(t.flags|=4194816)}}function ac(e,t,r,s,c){return gr(t),r=Pl(e,t,r,s,void 0,c),s=Bl(),e!==null&&!at?(Xl(e,t,c),ba(e,t,c)):(Re&&s&&Sl(t),t.flags|=1,st(e,t,r,c),t.child)}function lh(e,t,r,s,c,u){return gr(t),t.updateQueue=null,r=nf(t,s,r,c),sf(e),s=Bl(),e!==null&&!at?(Xl(e,t,u),ba(e,t,u)):(Re&&s&&Sl(t),t.flags|=1,st(e,t,r,u),t.child)}function ch(e,t,r,s,c){if(gr(t),t.stateNode===null){var u=Yr,p=r.contextType;typeof p=="object"&&p!==null&&(u=ut(p)),u=new r(s,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=ec,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=s,u.state=t.memoizedState,u.refs={},_l(t),p=r.contextType,u.context=typeof p=="object"&&p!==null?ut(p):Yr,u.state=t.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&($l(t,r,p,s),u.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(p=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),p!==u.state&&ec.enqueueReplaceState(u,u.state,null),$o(t,s,u,c),Wo(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),s=!0}else if(e===null){u=t.stateNode;var v=t.memoizedProps,A=yr(r,v);u.props=A;var D=u.context,V=r.contextType;p=Yr,typeof V=="object"&&V!==null&&(p=ut(V));var k=r.getDerivedStateFromProps;V=typeof k=="function"||typeof u.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,V||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v||D!==p)&&Zf(t,u,s,p),wa=!1;var _=t.memoizedState;u.state=_,$o(t,s,u,c),Wo(),D=t.memoizedState,v||_!==D||wa?(typeof k=="function"&&($l(t,r,k,s),D=t.memoizedState),(A=wa||Qf(t,r,A,s,_,D,p))?(V||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=D),u.props=s,u.state=D,u.context=p,s=A):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{u=t.stateNode,wl(e,t),p=t.memoizedProps,V=yr(r,p),u.props=V,k=t.pendingProps,_=u.context,D=r.contextType,A=Yr,typeof D=="object"&&D!==null&&(A=ut(D)),v=r.getDerivedStateFromProps,(D=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p!==k||_!==A)&&Zf(t,u,s,A),wa=!1,_=t.memoizedState,u.state=_,$o(t,s,u,c),Wo();var w=t.memoizedState;p!==k||_!==w||wa||e!==null&&e.dependencies!==null&&pn(e.dependencies)?(typeof v=="function"&&($l(t,r,v,s),w=t.memoizedState),(V=wa||Qf(t,r,V,s,_,w,A)||e!==null&&e.dependencies!==null&&pn(e.dependencies))?(D||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(s,w,A),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(s,w,A)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||p===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=w),u.props=s,u.state=w,u.context=A,s=V):(typeof u.componentDidUpdate!="function"||p===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),s=!1)}return u=s,qn(e,t),s=(t.flags&128)!==0,u||s?(u=t.stateNode,r=s&&typeof r.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&s?(t.child=ro(t,e.child,null,c),t.child=ro(t,null,r,c)):st(e,t,r,c),t.memoizedState=u.state,e=t.child):e=ba(e,t,c),e}function uh(e,t,r,s){return Ho(),t.flags|=256,st(e,t,r,s),t.child}var rc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function oc(e){return{baseLanes:e,cachePool:Km()}}function sc(e,t,r){return e=e!==null?e.childLanes&~r:0,t&&(e|=Xt),e}function dh(e,t,r){var s=t.pendingProps,c=!1,u=(t.flags&128)!==0,p;if((p=u)||(p=e!==null&&e.memoizedState===null?!1:(Je.current&2)!==0),p&&(c=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(Re){if(c?La(t):Va(),Re){var v=ke,A;if(A=v){e:{for(A=v,v=$t;A.nodeType!==8;){if(!v){v=null;break e}if(A=It(A.nextSibling),A===null){v=null;break e}}v=A}v!==null?(t.memoizedState={dehydrated:v,treeContext:mr!==null?{id:ma,overflow:fa}:null,retryLane:536870912,hydrationErrors:null},A=Ct(18,null,null,0),A.stateNode=v,A.return=t,t.child=A,ht=t,ke=null,A=!0):A=!1}A||pr(t)}if(v=t.memoizedState,v!==null&&(v=v.dehydrated,v!==null))return kc(v)?t.lanes=32:t.lanes=536870912,null;ga(t)}return v=s.children,s=s.fallback,c?(Va(),c=t.mode,v=zn({mode:"hidden",children:v},c),s=dr(s,c,r,null),v.return=t,s.return=t,v.sibling=s,t.child=v,c=t.child,c.memoizedState=oc(r),c.childLanes=sc(e,p,r),t.memoizedState=rc,s):(La(t),nc(t,v))}if(A=e.memoizedState,A!==null&&(v=A.dehydrated,v!==null)){if(u)t.flags&256?(La(t),t.flags&=-257,t=ic(e,t,r)):t.memoizedState!==null?(Va(),t.child=e.child,t.flags|=128,t=null):(Va(),c=s.fallback,v=t.mode,s=zn({mode:"visible",children:s.children},v),c=dr(c,v,r,null),c.flags|=2,s.return=t,c.return=t,s.sibling=c,t.child=s,ro(t,e.child,null,r),s=t.child,s.memoizedState=oc(r),s.childLanes=sc(e,p,r),t.memoizedState=rc,t=c);else if(La(t),kc(v)){if(p=v.nextSibling&&v.nextSibling.dataset,p)var D=p.dgst;p=D,s=Error(i(419)),s.stack="",s.digest=p,Go({value:s,source:null,stack:null}),t=ic(e,t,r)}else if(at||Io(e,t,r,!1),p=(r&e.childLanes)!==0,at||p){if(p=Le,p!==null&&(s=r&-r,s=(s&42)!==0?1:Fi(s),s=(s&(p.suspendedLanes|r))!==0?0:s,s!==0&&s!==A.retryLane))throw A.retryLane=s,Ir(e,s),wt(p,e,s),ah;v.data==="$?"||Rc(),t=ic(e,t,r)}else v.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=A.treeContext,ke=It(v.nextSibling),ht=t,Re=!0,hr=null,$t=!1,e!==null&&(Vt[Pt++]=ma,Vt[Pt++]=fa,Vt[Pt++]=mr,ma=e.id,fa=e.overflow,mr=t),t=nc(t,s.children),t.flags|=4096);return t}return c?(Va(),c=s.fallback,v=t.mode,A=e.child,D=A.sibling,s=da(A,{mode:"hidden",children:s.children}),s.subtreeFlags=A.subtreeFlags&65011712,D!==null?c=da(D,c):(c=dr(c,v,r,null),c.flags|=2),c.return=t,s.return=t,s.sibling=c,t.child=s,s=c,c=t.child,v=e.child.memoizedState,v===null?v=oc(r):(A=v.cachePool,A!==null?(D=Ke._currentValue,A=A.parent!==D?{parent:D,pool:D}:A):A=Km(),v={baseLanes:v.baseLanes|r,cachePool:A}),c.memoizedState=v,c.childLanes=sc(e,p,r),t.memoizedState=rc,s):(La(t),r=e.child,e=r.sibling,r=da(r,{mode:"visible",children:s.children}),r.return=t,r.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=r,t.memoizedState=null,r)}function nc(e,t){return t=zn({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function zn(e,t){return e=Ct(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ic(e,t,r){return ro(t,e.child,null,r),e=nc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mh(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Rl(e.return,t,r)}function lc(e,t,r,s,c){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:c}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=s,u.tail=r,u.tailMode=c)}function fh(e,t,r){var s=t.pendingProps,c=s.revealOrder,u=s.tail;if(st(e,t,s.children,r),s=Je.current,(s&2)!==0)s=s&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mh(e,r,t);else if(e.tag===19)mh(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(Q(Je,s),c){case"forwards":for(r=t.child,c=null;r!==null;)e=r.alternate,e!==null&&_n(e)===null&&(c=r),r=r.sibling;r=c,r===null?(c=t.child,t.child=null):(c=r.sibling,r.sibling=null),lc(t,!1,c,r,u);break;case"backwards":for(r=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&_n(e)===null){t.child=c;break}e=c.sibling,c.sibling=r,r=c,c=e}lc(t,!0,r,null,u);break;case"together":lc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ba(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),ka|=t.lanes,(r&t.childLanes)===0)if(e!==null){if(Io(e,t,r,!1),(r&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,r=da(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=da(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function cc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&pn(e)))}function _y(e,t,r){switch(t.tag){case 3:we(t,t.stateNode.containerInfo),_a(t,Ke,e.memoizedState.cache),Ho();break;case 27:case 5:_r(t);break;case 4:we(t,t.stateNode.containerInfo);break;case 10:_a(t,t.type,t.memoizedProps.value);break;case 13:var s=t.memoizedState;if(s!==null)return s.dehydrated!==null?(La(t),t.flags|=128,null):(r&t.child.childLanes)!==0?dh(e,t,r):(La(t),e=ba(e,t,r),e!==null?e.sibling:null);La(t);break;case 19:var c=(e.flags&128)!==0;if(s=(r&t.childLanes)!==0,s||(Io(e,t,r,!1),s=(r&t.childLanes)!==0),c){if(s)return fh(e,t,r);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Q(Je,Je.current),s)break;return null;case 22:case 23:return t.lanes=0,nh(e,t,r);case 24:_a(t,Ke,e.memoizedState.cache)}return ba(e,t,r)}function hh(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps)at=!0;else{if(!cc(e,r)&&(t.flags&128)===0)return at=!1,_y(e,t,r);at=(e.flags&131072)!==0}else at=!1,Re&&(t.flags&1048576)!==0&&Fm(t,hn,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var s=t.elementType,c=s._init;if(s=c(s._payload),t.type=s,typeof s=="function")bl(s)?(e=yr(s,e),t.tag=1,t=ch(null,t,s,e,r)):(t.tag=0,t=ac(null,t,s,e,r));else{if(s!=null){if(c=s.$$typeof,c===I){t.tag=11,t=rh(null,t,s,e,r);break e}else if(c===ce){t.tag=14,t=oh(null,t,s,e,r);break e}}throw t=At(s)||s,Error(i(306,t,""))}}return t;case 0:return ac(e,t,t.type,t.pendingProps,r);case 1:return s=t.type,c=yr(s,t.pendingProps),ch(e,t,s,c,r);case 3:e:{if(we(t,t.stateNode.containerInfo),e===null)throw Error(i(387));s=t.pendingProps;var u=t.memoizedState;c=u.element,wl(e,t),$o(t,s,null,r);var p=t.memoizedState;if(s=p.cache,_a(t,Ke,s),s!==u.cache&&Tl(t,[Ke],r,!0),Wo(),s=p.element,u.isDehydrated)if(u={element:s,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=uh(e,t,s,r);break e}else if(s!==c){c=zt(Error(i(424)),t),Go(c),t=uh(e,t,s,r);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ke=It(e.firstChild),ht=t,Re=!0,hr=null,$t=!0,r=If(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Ho(),s===c){t=ba(e,t,r);break e}st(e,t,s,r)}t=t.child}return t;case 26:return qn(e,t),e===null?(r=bp(t.type,null,t.pendingProps,null))?t.memoizedState=r:Re||(r=t.type,e=t.pendingProps,s=Zn(re.current).createElement(r),s[ct]=t,s[bt]=e,it(s,r,e),tt(s),t.stateNode=s):t.memoizedState=bp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _r(t),e===null&&Re&&(s=t.stateNode=pp(t.type,t.pendingProps,re.current),ht=t,$t=!0,c=ke,Ia(t.type)?(Fc=c,ke=It(s.firstChild)):ke=c),st(e,t,t.pendingProps.children,r),qn(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Re&&((c=s=ke)&&(s=s1(s,t.type,t.pendingProps,$t),s!==null?(t.stateNode=s,ht=t,ke=It(s.firstChild),$t=!1,c=!0):c=!1),c||pr(t)),_r(t),c=t.type,u=t.pendingProps,p=e!==null?e.memoizedProps:null,s=u.children,Bc(c,u)?s=null:p!==null&&Bc(c,p)&&(t.flags|=32),t.memoizedState!==null&&(c=Pl(e,t,Ay,null,null,r),Ss._currentValue=c),qn(e,t),st(e,t,s,r),t.child;case 6:return e===null&&Re&&((e=r=ke)&&(r=n1(r,t.pendingProps,$t),r!==null?(t.stateNode=r,ht=t,ke=null,e=!0):e=!1),e||pr(t)),null;case 13:return dh(e,t,r);case 4:return we(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=ro(t,null,s,r):st(e,t,s,r),t.child;case 11:return rh(e,t,t.type,t.pendingProps,r);case 7:return st(e,t,t.pendingProps,r),t.child;case 8:return st(e,t,t.pendingProps.children,r),t.child;case 12:return st(e,t,t.pendingProps.children,r),t.child;case 10:return s=t.pendingProps,_a(t,t.type,s.value),st(e,t,s.children,r),t.child;case 9:return c=t.type._context,s=t.pendingProps.children,gr(t),c=ut(c),s=s(c),t.flags|=1,st(e,t,s,r),t.child;case 14:return oh(e,t,t.type,t.pendingProps,r);case 15:return sh(e,t,t.type,t.pendingProps,r);case 19:return fh(e,t,r);case 31:return s=t.pendingProps,r=t.mode,s={mode:s.mode,children:s.children},e===null?(r=zn(s,r),r.ref=t.ref,t.child=r,r.return=t,t=r):(r=da(e.child,s),r.ref=t.ref,t.child=r,r.return=t,t=r),t;case 22:return nh(e,t,r);case 24:return gr(t),s=ut(Ke),e===null?(c=Ol(),c===null&&(c=Le,u=Cl(),c.pooledCache=u,u.refCount++,u!==null&&(c.pooledCacheLanes|=r),c=u),t.memoizedState={parent:s,cache:c},_l(t),_a(t,Ke,c)):((e.lanes&r)!==0&&(wl(e,t),$o(t,null,null,r),Wo()),c=e.memoizedState,u=t.memoizedState,c.parent!==s?(c={parent:s,cache:s},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),_a(t,Ke,s)):(s=u.cache,_a(t,Ke,s),s!==c.cache&&Tl(t,[Ke],r,!0))),st(e,t,t.pendingProps.children,r),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function va(e){e.flags|=4}function ph(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ap(t)){if(t=Bt.current,t!==null&&((ye&4194048)===ye?ea!==null:(ye&62914560)!==ye&&(ye&536870912)===0||t!==ea))throw Ko=Dl,Jm;e.flags|=8192}}function Ln(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Id():536870912,e.lanes|=t,io|=t)}function ns(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var c=e.child;c!==null;)r|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)r|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function wy(e,t,r){var s=t.pendingProps;switch(jl(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Be(t),null;case 3:return r=t.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),pa(Ke),Ne(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Fo(t)?va(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Im())),Be(t),null;case 26:return r=t.memoizedState,e===null?(va(t),r!==null?(Be(t),ph(t,r)):(Be(t),t.flags&=-16777217)):r?r!==e.memoizedState?(va(t),Be(t),ph(t,r)):(Be(t),t.flags&=-16777217):(e.memoizedProps!==s&&va(t),Be(t),t.flags&=-16777217),null;case 27:la(t),r=re.current;var c=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==s&&va(t);else{if(!s){if(t.stateNode===null)throw Error(i(166));return Be(t),null}e=ne.current,Fo(t)?Hm(t):(e=pp(c,s,r),t.stateNode=e,va(t))}return Be(t),null;case 5:if(la(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&va(t);else{if(!s){if(t.stateNode===null)throw Error(i(166));return Be(t),null}if(e=ne.current,Fo(t))Hm(t);else{switch(c=Zn(re.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?c.createElement(r,{is:s.is}):c.createElement(r)}}e[ct]=t,e[bt]=s;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=e;e:switch(it(e,r,s),r){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&va(t)}}return Be(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==s&&va(t);else{if(typeof s!="string"&&t.stateNode===null)throw Error(i(166));if(e=re.current,Fo(t)){if(e=t.stateNode,r=t.memoizedProps,s=null,c=ht,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[ct]=t,e=!!(e.nodeValue===r||s!==null&&s.suppressHydrationWarning===!0||lp(e.nodeValue,r)),e||pr(t)}else e=Zn(e).createTextNode(s),e[ct]=t,t.stateNode=e}return Be(t),null;case 13:if(s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Fo(t),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(i(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(i(317));c[ct]=t}else Ho(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),c=!1}else c=Im(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(ga(t),t):(ga(t),null)}if(ga(t),(t.flags&128)!==0)return t.lanes=r,t;if(r=s!==null,e=e!==null&&e.memoizedState!==null,r){s=t.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var u=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==c&&(s.flags|=2048)}return r!==e&&r&&(t.child.flags|=8192),Ln(t,t.updateQueue),Be(t),null;case 4:return Ne(),e===null&&qc(t.stateNode.containerInfo),Be(t),null;case 10:return pa(t.type),Be(t),null;case 19:if(Z(Je),c=t.memoizedState,c===null)return Be(t),null;if(s=(t.flags&128)!==0,u=c.rendering,u===null)if(s)ns(c,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=_n(e),u!==null){for(t.flags|=128,ns(c,!1),e=u.updateQueue,t.updateQueue=e,Ln(t,e),t.subtreeFlags=0,e=r,r=t.child;r!==null;)km(r,e),r=r.sibling;return Q(Je,Je.current&1|2),t.child}e=e.sibling}c.tail!==null&&Wt()>Bn&&(t.flags|=128,s=!0,ns(c,!1),t.lanes=4194304)}else{if(!s)if(e=_n(u),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Ln(t,e),ns(c,!0),c.tail===null&&c.tailMode==="hidden"&&!u.alternate&&!Re)return Be(t),null}else 2*Wt()-c.renderingStartTime>Bn&&r!==536870912&&(t.flags|=128,s=!0,ns(c,!1),t.lanes=4194304);c.isBackwards?(u.sibling=t.child,t.child=u):(e=c.last,e!==null?e.sibling=u:t.child=u,c.last=u)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=Wt(),t.sibling=null,e=Je.current,Q(Je,s?e&1|2:e&1),t):(Be(t),null);case 22:case 23:return ga(t),Ll(),s=t.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(t.flags|=8192):s&&(t.flags|=8192),s?(r&536870912)!==0&&(t.flags&128)===0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),r=t.updateQueue,r!==null&&Ln(t,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),s=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),s!==r&&(t.flags|=2048),e!==null&&Z(br),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),pa(Ke),Be(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Ny(e,t){switch(jl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pa(Ke),Ne(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return la(t),null;case 13:if(ga(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ho()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(Je),null;case 4:return Ne(),null;case 10:return pa(t.type),null;case 22:case 23:return ga(t),Ll(),e!==null&&Z(br),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return pa(Ke),null;case 25:return null;default:return null}}function xh(e,t){switch(jl(t),t.tag){case 3:pa(Ke),Ne();break;case 26:case 27:case 5:la(t);break;case 4:Ne();break;case 13:ga(t);break;case 19:Z(Je);break;case 10:pa(t.type);break;case 22:case 23:ga(t),Ll(),e!==null&&Z(br);break;case 24:pa(Ke)}}function is(e,t){try{var r=t.updateQueue,s=r!==null?r.lastEffect:null;if(s!==null){var c=s.next;r=c;do{if((r.tag&e)===e){s=void 0;var u=r.create,p=r.inst;s=u(),p.destroy=s}r=r.next}while(r!==c)}}catch(v){qe(t,t.return,v)}}function Pa(e,t,r){try{var s=t.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var u=c.next;s=u;do{if((s.tag&e)===e){var p=s.inst,v=p.destroy;if(v!==void 0){p.destroy=void 0,c=t;var A=r,D=v;try{D()}catch(V){qe(c,A,V)}}}s=s.next}while(s!==u)}}catch(V){qe(t,t.return,V)}}function gh(e){var t=e.updateQueue;if(t!==null){var r=e.stateNode;try{rf(t,r)}catch(s){qe(e,e.return,s)}}}function bh(e,t,r){r.props=yr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(s){qe(e,t,s)}}function ls(e,t){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof r=="function"?e.refCleanup=r(s):r.current=s}}catch(c){qe(e,t,c)}}function ta(e,t){var r=e.ref,s=e.refCleanup;if(r!==null)if(typeof s=="function")try{s()}catch(c){qe(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(c){qe(e,t,c)}else r.current=null}function vh(e){var t=e.type,r=e.memoizedProps,s=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":r.autoFocus&&s.focus();break e;case"img":r.src?s.src=r.src:r.srcSet&&(s.srcset=r.srcSet)}}catch(c){qe(e,e.return,c)}}function uc(e,t,r){try{var s=e.stateNode;e1(s,e.type,r,t),s[bt]=t}catch(c){qe(e,e.return,c)}}function yh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ia(e.type)||e.tag===4}function dc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mc(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,t):(t=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,t.appendChild(e),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Qn));else if(s!==4&&(s===27&&Ia(e.type)&&(r=e.stateNode,t=null),e=e.child,e!==null))for(mc(e,t,r),e=e.sibling;e!==null;)mc(e,t,r),e=e.sibling}function Vn(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(s===27&&Ia(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Vn(e,t,r),e=e.sibling;e!==null;)Vn(e,t,r),e=e.sibling}function Sh(e){var t=e.stateNode,r=e.memoizedProps;try{for(var s=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);it(t,s,r),t[ct]=e,t[bt]=r}catch(u){qe(e,e.return,u)}}var ya=!1,Ie=!1,fc=!1,jh=typeof WeakSet=="function"?WeakSet:Set,rt=null;function qy(e,t){if(e=e.containerInfo,Vc=ti,e=wm(e),dl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var c=s.anchorOffset,u=s.focusNode;s=s.focusOffset;try{r.nodeType,u.nodeType}catch{r=null;break e}var p=0,v=-1,A=-1,D=0,V=0,k=e,_=null;t:for(;;){for(var w;k!==r||c!==0&&k.nodeType!==3||(v=p+c),k!==u||s!==0&&k.nodeType!==3||(A=p+s),k.nodeType===3&&(p+=k.nodeValue.length),(w=k.firstChild)!==null;)_=k,k=w;for(;;){if(k===e)break t;if(_===r&&++D===c&&(v=p),_===u&&++V===s&&(A=p),(w=k.nextSibling)!==null)break;k=_,_=k.parentNode}k=w}r=v===-1||A===-1?null:{start:v,end:A}}else r=null}r=r||{start:0,end:0}}else r=null;for(Pc={focusedElem:e,selectionRange:r},ti=!1,rt=t;rt!==null;)if(t=rt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,rt=e;else for(;rt!==null;){switch(t=rt,u=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,r=t,c=u.memoizedProps,u=u.memoizedState,s=r.stateNode;try{var de=yr(r.type,c,r.elementType===r.type);e=s.getSnapshotBeforeUpdate(de,u),s.__reactInternalSnapshotBeforeUpdate=e}catch(ie){qe(r,r.return,ie)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,r=e.nodeType,r===9)Uc(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Uc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,rt=e;break}rt=t.return}}function Ah(e,t,r){var s=r.flags;switch(r.tag){case 0:case 11:case 15:Ba(e,r),s&4&&is(5,r);break;case 1:if(Ba(e,r),s&4)if(e=r.stateNode,t===null)try{e.componentDidMount()}catch(p){qe(r,r.return,p)}else{var c=yr(r.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){qe(r,r.return,p)}}s&64&&gh(r),s&512&&ls(r,r.return);break;case 3:if(Ba(e,r),s&64&&(e=r.updateQueue,e!==null)){if(t=null,r.child!==null)switch(r.child.tag){case 27:case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}try{rf(e,t)}catch(p){qe(r,r.return,p)}}break;case 27:t===null&&s&4&&Sh(r);case 26:case 5:Ba(e,r),t===null&&s&4&&vh(r),s&512&&ls(r,r.return);break;case 12:Ba(e,r);break;case 13:Ba(e,r),s&4&&Th(e,r),s&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=Fy.bind(null,r),i1(e,r))));break;case 22:if(s=r.memoizedState!==null||ya,!s){t=t!==null&&t.memoizedState!==null||Ie,c=ya;var u=Ie;ya=s,(Ie=t)&&!u?Xa(e,r,(r.subtreeFlags&8772)!==0):Ba(e,r),ya=c,Ie=u}break;case 30:break;default:Ba(e,r)}}function Eh(e){var t=e.alternate;t!==null&&(e.alternate=null,Eh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ii(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pe=null,St=!1;function Sa(e,t,r){for(r=r.child;r!==null;)Rh(e,t,r),r=r.sibling}function Rh(e,t,r){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Oo,r)}catch{}switch(r.tag){case 26:Ie||ta(r,t),Sa(e,t,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Ie||ta(r,t);var s=Pe,c=St;Ia(r.type)&&(Pe=r.stateNode,St=!1),Sa(e,t,r),gs(r.stateNode),Pe=s,St=c;break;case 5:Ie||ta(r,t);case 6:if(s=Pe,c=St,Pe=null,Sa(e,t,r),Pe=s,St=c,Pe!==null)if(St)try{(Pe.nodeType===9?Pe.body:Pe.nodeName==="HTML"?Pe.ownerDocument.body:Pe).removeChild(r.stateNode)}catch(u){qe(r,t,u)}else try{Pe.removeChild(r.stateNode)}catch(u){qe(r,t,u)}break;case 18:Pe!==null&&(St?(e=Pe,fp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Rs(e)):fp(Pe,r.stateNode));break;case 4:s=Pe,c=St,Pe=r.stateNode.containerInfo,St=!0,Sa(e,t,r),Pe=s,St=c;break;case 0:case 11:case 14:case 15:Ie||Pa(2,r,t),Ie||Pa(4,r,t),Sa(e,t,r);break;case 1:Ie||(ta(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"&&bh(r,t,s)),Sa(e,t,r);break;case 21:Sa(e,t,r);break;case 22:Ie=(s=Ie)||r.memoizedState!==null,Sa(e,t,r),Ie=s;break;default:Sa(e,t,r)}}function Th(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Rs(e)}catch(r){qe(t,t.return,r)}}function zy(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new jh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new jh),t;default:throw Error(i(435,e.tag))}}function hc(e,t){var r=zy(e);t.forEach(function(s){var c=Hy.bind(null,e,s);r.has(s)||(r.add(s),s.then(c,c))})}function Mt(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var c=r[s],u=e,p=t,v=p;e:for(;v!==null;){switch(v.tag){case 27:if(Ia(v.type)){Pe=v.stateNode,St=!1;break e}break;case 5:Pe=v.stateNode,St=!1;break e;case 3:case 4:Pe=v.stateNode.containerInfo,St=!0;break e}v=v.return}if(Pe===null)throw Error(i(160));Rh(u,p,c),Pe=null,St=!1,u=c.alternate,u!==null&&(u.return=null),c.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Ch(t,e),t=t.sibling}var Gt=null;function Ch(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Mt(t,e),Ot(e),s&4&&(Pa(3,e,e.return),is(3,e),Pa(5,e,e.return));break;case 1:Mt(t,e),Ot(e),s&512&&(Ie||r===null||ta(r,r.return)),s&64&&ya&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?s:r.concat(s))));break;case 26:var c=Gt;if(Mt(t,e),Ot(e),s&512&&(Ie||r===null||ta(r,r.return)),s&4){var u=r!==null?r.memoizedState:null;if(s=e.memoizedState,r===null)if(s===null)if(e.stateNode===null){e:{s=e.type,r=e.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":u=c.getElementsByTagName("title")[0],(!u||u[wo]||u[ct]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=c.createElement(s),c.head.insertBefore(u,c.querySelector("head > title"))),it(u,s,r),u[ct]=e,tt(u),s=u;break e;case"link":var p=Sp("link","href",c).get(s+(r.href||""));if(p){for(var v=0;v<p.length;v++)if(u=p[v],u.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&u.getAttribute("rel")===(r.rel==null?null:r.rel)&&u.getAttribute("title")===(r.title==null?null:r.title)&&u.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){p.splice(v,1);break t}}u=c.createElement(s),it(u,s,r),c.head.appendChild(u);break;case"meta":if(p=Sp("meta","content",c).get(s+(r.content||""))){for(v=0;v<p.length;v++)if(u=p[v],u.getAttribute("content")===(r.content==null?null:""+r.content)&&u.getAttribute("name")===(r.name==null?null:r.name)&&u.getAttribute("property")===(r.property==null?null:r.property)&&u.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&u.getAttribute("charset")===(r.charSet==null?null:r.charSet)){p.splice(v,1);break t}}u=c.createElement(s),it(u,s,r),c.head.appendChild(u);break;default:throw Error(i(468,s))}u[ct]=e,tt(u),s=u}e.stateNode=s}else jp(c,e.type,e.stateNode);else e.stateNode=yp(c,s,e.memoizedProps);else u!==s?(u===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):u.count--,s===null?jp(c,e.type,e.stateNode):yp(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&uc(e,e.memoizedProps,r.memoizedProps)}break;case 27:Mt(t,e),Ot(e),s&512&&(Ie||r===null||ta(r,r.return)),r!==null&&s&4&&uc(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Mt(t,e),Ot(e),s&512&&(Ie||r===null||ta(r,r.return)),e.flags&32){c=e.stateNode;try{Br(c,"")}catch(w){qe(e,e.return,w)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,uc(e,c,r!==null?r.memoizedProps:c)),s&1024&&(fc=!0);break;case 6:if(Mt(t,e),Ot(e),s&4){if(e.stateNode===null)throw Error(i(162));s=e.memoizedProps,r=e.stateNode;try{r.nodeValue=s}catch(w){qe(e,e.return,w)}}break;case 3:if(Wn=null,c=Gt,Gt=Kn(t.containerInfo),Mt(t,e),Gt=c,Ot(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Rs(t.containerInfo)}catch(w){qe(e,e.return,w)}fc&&(fc=!1,Mh(e));break;case 4:s=Gt,Gt=Kn(e.stateNode.containerInfo),Mt(t,e),Ot(e),Gt=s;break;case 12:Mt(t,e),Ot(e);break;case 13:Mt(t,e),Ot(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(yc=Wt()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,hc(e,s)));break;case 22:c=e.memoizedState!==null;var A=r!==null&&r.memoizedState!==null,D=ya,V=Ie;if(ya=D||c,Ie=V||A,Mt(t,e),Ie=V,ya=D,Ot(e),s&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(r===null||A||ya||Ie||Sr(e)),r=null,t=e;;){if(t.tag===5||t.tag===26){if(r===null){A=r=t;try{if(u=A.stateNode,c)p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{v=A.stateNode;var k=A.memoizedProps.style,_=k!=null&&k.hasOwnProperty("display")?k.display:null;v.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(w){qe(A,A.return,w)}}}else if(t.tag===6){if(r===null){A=t;try{A.stateNode.nodeValue=c?"":A.memoizedProps}catch(w){qe(A,A.return,w)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;r===t&&(r=null),t=t.return}r===t&&(r=null),t.sibling.return=t.return,t=t.sibling}s&4&&(s=e.updateQueue,s!==null&&(r=s.retryQueue,r!==null&&(s.retryQueue=null,hc(e,r))));break;case 19:Mt(t,e),Ot(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,hc(e,s)));break;case 30:break;case 21:break;default:Mt(t,e),Ot(e)}}function Ot(e){var t=e.flags;if(t&2){try{for(var r,s=e.return;s!==null;){if(yh(s)){r=s;break}s=s.return}if(r==null)throw Error(i(160));switch(r.tag){case 27:var c=r.stateNode,u=dc(e);Vn(e,u,c);break;case 5:var p=r.stateNode;r.flags&32&&(Br(p,""),r.flags&=-33);var v=dc(e);Vn(e,v,p);break;case 3:case 4:var A=r.stateNode.containerInfo,D=dc(e);mc(e,D,A);break;default:throw Error(i(161))}}catch(V){qe(e,e.return,V)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Mh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ba(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ah(e,t.alternate,t),t=t.sibling}function Sr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Pa(4,t,t.return),Sr(t);break;case 1:ta(t,t.return);var r=t.stateNode;typeof r.componentWillUnmount=="function"&&bh(t,t.return,r),Sr(t);break;case 27:gs(t.stateNode);case 26:case 5:ta(t,t.return),Sr(t);break;case 22:t.memoizedState===null&&Sr(t);break;case 30:Sr(t);break;default:Sr(t)}e=e.sibling}}function Xa(e,t,r){for(r=r&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var s=t.alternate,c=e,u=t,p=u.flags;switch(u.tag){case 0:case 11:case 15:Xa(c,u,r),is(4,u);break;case 1:if(Xa(c,u,r),s=u,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(D){qe(s,s.return,D)}if(s=u,c=s.updateQueue,c!==null){var v=s.stateNode;try{var A=c.shared.hiddenCallbacks;if(A!==null)for(c.shared.hiddenCallbacks=null,c=0;c<A.length;c++)af(A[c],v)}catch(D){qe(s,s.return,D)}}r&&p&64&&gh(u),ls(u,u.return);break;case 27:Sh(u);case 26:case 5:Xa(c,u,r),r&&s===null&&p&4&&vh(u),ls(u,u.return);break;case 12:Xa(c,u,r);break;case 13:Xa(c,u,r),r&&p&4&&Th(c,u);break;case 22:u.memoizedState===null&&Xa(c,u,r),ls(u,u.return);break;case 30:break;default:Xa(c,u,r)}t=t.sibling}}function pc(e,t){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Yo(r))}function xc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yo(e))}function aa(e,t,r,s){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Oh(e,t,r,s),t=t.sibling}function Oh(e,t,r,s){var c=t.flags;switch(t.tag){case 0:case 11:case 15:aa(e,t,r,s),c&2048&&is(9,t);break;case 1:aa(e,t,r,s);break;case 3:aa(e,t,r,s),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yo(e)));break;case 12:if(c&2048){aa(e,t,r,s),e=t.stateNode;try{var u=t.memoizedProps,p=u.id,v=u.onPostCommit;typeof v=="function"&&v(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(A){qe(t,t.return,A)}}else aa(e,t,r,s);break;case 13:aa(e,t,r,s);break;case 23:break;case 22:u=t.stateNode,p=t.alternate,t.memoizedState!==null?u._visibility&2?aa(e,t,r,s):cs(e,t):u._visibility&2?aa(e,t,r,s):(u._visibility|=2,oo(e,t,r,s,(t.subtreeFlags&10256)!==0)),c&2048&&pc(p,t);break;case 24:aa(e,t,r,s),c&2048&&xc(t.alternate,t);break;default:aa(e,t,r,s)}}function oo(e,t,r,s,c){for(c=c&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var u=e,p=t,v=r,A=s,D=p.flags;switch(p.tag){case 0:case 11:case 15:oo(u,p,v,A,c),is(8,p);break;case 23:break;case 22:var V=p.stateNode;p.memoizedState!==null?V._visibility&2?oo(u,p,v,A,c):cs(u,p):(V._visibility|=2,oo(u,p,v,A,c)),c&&D&2048&&pc(p.alternate,p);break;case 24:oo(u,p,v,A,c),c&&D&2048&&xc(p.alternate,p);break;default:oo(u,p,v,A,c)}t=t.sibling}}function cs(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var r=e,s=t,c=s.flags;switch(s.tag){case 22:cs(r,s),c&2048&&pc(s.alternate,s);break;case 24:cs(r,s),c&2048&&xc(s.alternate,s);break;default:cs(r,s)}t=t.sibling}}var us=8192;function so(e){if(e.subtreeFlags&us)for(e=e.child;e!==null;)Dh(e),e=e.sibling}function Dh(e){switch(e.tag){case 26:so(e),e.flags&us&&e.memoizedState!==null&&y1(Gt,e.memoizedState,e.memoizedProps);break;case 5:so(e);break;case 3:case 4:var t=Gt;Gt=Kn(e.stateNode.containerInfo),so(e),Gt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=us,us=16777216,so(e),us=t):so(e));break;default:so(e)}}function _h(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ds(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var r=0;r<t.length;r++){var s=t[r];rt=s,Nh(s,e)}_h(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wh(e),e=e.sibling}function wh(e){switch(e.tag){case 0:case 11:case 15:ds(e),e.flags&2048&&Pa(9,e,e.return);break;case 3:ds(e);break;case 12:ds(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Pn(e)):ds(e);break;default:ds(e)}}function Pn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var r=0;r<t.length;r++){var s=t[r];rt=s,Nh(s,e)}_h(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Pa(8,t,t.return),Pn(t);break;case 22:r=t.stateNode,r._visibility&2&&(r._visibility&=-3,Pn(t));break;default:Pn(t)}e=e.sibling}}function Nh(e,t){for(;rt!==null;){var r=rt;switch(r.tag){case 0:case 11:case 15:Pa(8,r,t);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var s=r.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Yo(r.memoizedState.cache)}if(s=r.child,s!==null)s.return=r,rt=s;else e:for(r=e;rt!==null;){s=rt;var c=s.sibling,u=s.return;if(Eh(s),s===r){rt=null;break e}if(c!==null){c.return=u,rt=c;break e}rt=u}}}var Ly={getCacheForType:function(e){var t=ut(Ke),r=t.data.get(e);return r===void 0&&(r=e(),t.data.set(e,r)),r}},Vy=typeof WeakMap=="function"?WeakMap:Map,Te=0,Le=null,ge=null,ye=0,Ce=0,Dt=null,Ua=!1,no=!1,gc=!1,ja=0,Fe=0,ka=0,jr=0,bc=0,Xt=0,io=0,ms=null,jt=null,vc=!1,yc=0,Bn=1/0,Xn=null,Fa=null,nt=0,Ha=null,lo=null,co=0,Sc=0,jc=null,qh=null,fs=0,Ac=null;function _t(){if((Te&2)!==0&&ye!==0)return ye&-ye;if(q.T!==null){var e=Kr;return e!==0?e:Dc()}return Zd()}function zh(){Xt===0&&(Xt=(ye&536870912)===0||Re?Gd():536870912);var e=Bt.current;return e!==null&&(e.flags|=32),Xt}function wt(e,t,r){(e===Le&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)&&(uo(e,0),Ga(e,ye,Xt,!1)),_o(e,r),((Te&2)===0||e!==Le)&&(e===Le&&((Te&2)===0&&(jr|=r),Fe===4&&Ga(e,ye,Xt,!1)),ra(e))}function Lh(e,t,r){if((Te&6)!==0)throw Error(i(327));var s=!r&&(t&124)===0&&(t&e.expiredLanes)===0||Do(e,t),c=s?Xy(e,t):Tc(e,t,!0),u=s;do{if(c===0){no&&!s&&Ga(e,t,0,!1);break}else{if(r=e.current.alternate,u&&!Py(r)){c=Tc(e,t,!1),u=!1;continue}if(c===2){if(u=t,e.errorRecoveryDisabledLanes&u)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var v=e;c=ms;var A=v.current.memoizedState.isDehydrated;if(A&&(uo(v,p).flags|=256),p=Tc(v,p,!1),p!==2){if(gc&&!A){v.errorRecoveryDisabledLanes|=u,jr|=u,c=4;break e}u=jt,jt=c,u!==null&&(jt===null?jt=u:jt.push.apply(jt,u))}c=p}if(u=!1,c!==2)continue}}if(c===1){uo(e,0),Ga(e,t,0,!0);break}e:{switch(s=e,u=c,u){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Ga(s,t,Xt,!Ua);break e;case 2:jt=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(c=yc+300-Wt(),10<c)){if(Ga(s,t,Xt,!Ua),Ks(s,0,!0)!==0)break e;s.timeoutHandle=dp(Vh.bind(null,s,r,jt,Xn,vc,t,Xt,jr,io,Ua,u,2,-0,0),c);break e}Vh(s,r,jt,Xn,vc,t,Xt,jr,io,Ua,u,0,-0,0)}}break}while(!0);ra(e)}function Vh(e,t,r,s,c,u,p,v,A,D,V,k,_,w){if(e.timeoutHandle=-1,k=t.subtreeFlags,(k&8192||(k&16785408)===16785408)&&(ys={stylesheets:null,count:0,unsuspend:v1},Dh(t),k=S1(),k!==null)){e.cancelPendingCommit=k(Hh.bind(null,e,t,u,r,s,c,p,v,A,V,1,_,w)),Ga(e,u,p,!D);return}Hh(e,t,u,r,s,c,p,v,A)}function Py(e){for(var t=e;;){var r=t.tag;if((r===0||r===11||r===15)&&t.flags&16384&&(r=t.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var s=0;s<r.length;s++){var c=r[s],u=c.getSnapshot;c=c.value;try{if(!Tt(u(),c))return!1}catch{return!1}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ga(e,t,r,s){t&=~bc,t&=~jr,e.suspendedLanes|=t,e.pingedLanes&=~t,s&&(e.warmLanes|=t),s=e.expirationTimes;for(var c=t;0<c;){var u=31-Rt(c),p=1<<u;s[u]=-1,c&=~p}r!==0&&Yd(e,r,t)}function Un(){return(Te&6)===0?(hs(0),!1):!0}function Ec(){if(ge!==null){if(Ce===0)var e=ge.return;else e=ge,ha=xr=null,Ul(e),ao=null,os=0,e=ge;for(;e!==null;)xh(e.alternate,e),e=e.return;ge=null}}function uo(e,t){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,a1(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Ec(),Le=e,ge=r=da(e.current,null),ye=t,Ce=0,Dt=null,Ua=!1,no=Do(e,t),gc=!1,io=Xt=bc=jr=ka=Fe=0,jt=ms=null,vc=!1,(t&8)!==0&&(t|=t&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=t;0<s;){var c=31-Rt(s),u=1<<c;t|=e[c],s&=~u}return ja=t,cn(),r}function Ph(e,t){he=null,q.H=Mn,t===Zo||t===bn?(t=ef(),Ce=3):t===Jm?(t=ef(),Ce=4):Ce=t===ah?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Dt=t,ge===null&&(Fe=1,Nn(e,zt(t,e.current)))}function Bh(){var e=q.H;return q.H=Mn,e===null?Mn:e}function Xh(){var e=q.A;return q.A=Ly,e}function Rc(){Fe=4,Ua||(ye&4194048)!==ye&&Bt.current!==null||(no=!0),(ka&134217727)===0&&(jr&134217727)===0||Le===null||Ga(Le,ye,Xt,!1)}function Tc(e,t,r){var s=Te;Te|=2;var c=Bh(),u=Xh();(Le!==e||ye!==t)&&(Xn=null,uo(e,t)),t=!1;var p=Fe;e:do try{if(Ce!==0&&ge!==null){var v=ge,A=Dt;switch(Ce){case 8:Ec(),p=6;break e;case 3:case 2:case 9:case 6:Bt.current===null&&(t=!0);var D=Ce;if(Ce=0,Dt=null,mo(e,v,A,D),r&&no){p=0;break e}break;default:D=Ce,Ce=0,Dt=null,mo(e,v,A,D)}}By(),p=Fe;break}catch(V){Ph(e,V)}while(!0);return t&&e.shellSuspendCounter++,ha=xr=null,Te=s,q.H=c,q.A=u,ge===null&&(Le=null,ye=0,cn()),p}function By(){for(;ge!==null;)Uh(ge)}function Xy(e,t){var r=Te;Te|=2;var s=Bh(),c=Xh();Le!==e||ye!==t?(Xn=null,Bn=Wt()+500,uo(e,t)):no=Do(e,t);e:do try{if(Ce!==0&&ge!==null){t=ge;var u=Dt;t:switch(Ce){case 1:Ce=0,Dt=null,mo(e,t,u,1);break;case 2:case 9:if(Wm(u)){Ce=0,Dt=null,kh(t);break}t=function(){Ce!==2&&Ce!==9||Le!==e||(Ce=7),ra(e)},u.then(t,t);break e;case 3:Ce=7;break e;case 4:Ce=5;break e;case 7:Wm(u)?(Ce=0,Dt=null,kh(t)):(Ce=0,Dt=null,mo(e,t,u,7));break;case 5:var p=null;switch(ge.tag){case 26:p=ge.memoizedState;case 5:case 27:var v=ge;if(!p||Ap(p)){Ce=0,Dt=null;var A=v.sibling;if(A!==null)ge=A;else{var D=v.return;D!==null?(ge=D,kn(D)):ge=null}break t}}Ce=0,Dt=null,mo(e,t,u,5);break;case 6:Ce=0,Dt=null,mo(e,t,u,6);break;case 8:Ec(),Fe=6;break e;default:throw Error(i(462))}}Uy();break}catch(V){Ph(e,V)}while(!0);return ha=xr=null,q.H=s,q.A=c,Te=r,ge!==null?0:(Le=null,ye=0,cn(),Fe)}function Uy(){for(;ge!==null&&!c0();)Uh(ge)}function Uh(e){var t=hh(e.alternate,e,ja);e.memoizedProps=e.pendingProps,t===null?kn(e):ge=t}function kh(e){var t=e,r=t.alternate;switch(t.tag){case 15:case 0:t=lh(r,t,t.pendingProps,t.type,void 0,ye);break;case 11:t=lh(r,t,t.pendingProps,t.type.render,t.ref,ye);break;case 5:Ul(t);default:xh(r,t),t=ge=km(t,ja),t=hh(r,t,ja)}e.memoizedProps=e.pendingProps,t===null?kn(e):ge=t}function mo(e,t,r,s){ha=xr=null,Ul(t),ao=null,os=0;var c=t.return;try{if(Dy(e,c,t,r,ye)){Fe=1,Nn(e,zt(r,e.current)),ge=null;return}}catch(u){if(c!==null)throw ge=c,u;Fe=1,Nn(e,zt(r,e.current)),ge=null;return}t.flags&32768?(Re||s===1?e=!0:no||(ye&536870912)!==0?e=!1:(Ua=e=!0,(s===2||s===9||s===3||s===6)&&(s=Bt.current,s!==null&&s.tag===13&&(s.flags|=16384))),Fh(t,e)):kn(t)}function kn(e){var t=e;do{if((t.flags&32768)!==0){Fh(t,Ua);return}e=t.return;var r=wy(t.alternate,t,ja);if(r!==null){ge=r;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);Fe===0&&(Fe=5)}function Fh(e,t){do{var r=Ny(e.alternate,e);if(r!==null){r.flags&=32767,ge=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!t&&(e=e.sibling,e!==null)){ge=e;return}ge=e=r}while(e!==null);Fe=6,ge=null}function Hh(e,t,r,s,c,u,p,v,A){e.cancelPendingCommit=null;do Fn();while(nt!==0);if((Te&6)!==0)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(u=t.lanes|t.childLanes,u|=xl,v0(e,r,u,p,v,A),e===Le&&(ge=Le=null,ye=0),lo=t,Ha=e,co=r,Sc=u,jc=c,qh=s,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Gy(Ys,function(){return Zh(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||s){s=q.T,q.T=null,c=Y.p,Y.p=2,p=Te,Te|=4;try{qy(e,t,r)}finally{Te=p,Y.p=c,q.T=s}}nt=1,Gh(),Ih(),Yh()}}function Gh(){if(nt===1){nt=0;var e=Ha,t=lo,r=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||r){r=q.T,q.T=null;var s=Y.p;Y.p=2;var c=Te;Te|=4;try{Ch(t,e);var u=Pc,p=wm(e.containerInfo),v=u.focusedElem,A=u.selectionRange;if(p!==v&&v&&v.ownerDocument&&_m(v.ownerDocument.documentElement,v)){if(A!==null&&dl(v)){var D=A.start,V=A.end;if(V===void 0&&(V=D),"selectionStart"in v)v.selectionStart=D,v.selectionEnd=Math.min(V,v.value.length);else{var k=v.ownerDocument||document,_=k&&k.defaultView||window;if(_.getSelection){var w=_.getSelection(),de=v.textContent.length,ie=Math.min(A.start,de),De=A.end===void 0?ie:Math.min(A.end,de);!w.extend&&ie>De&&(p=De,De=ie,ie=p);var T=Dm(v,ie),E=Dm(v,De);if(T&&E&&(w.rangeCount!==1||w.anchorNode!==T.node||w.anchorOffset!==T.offset||w.focusNode!==E.node||w.focusOffset!==E.offset)){var O=k.createRange();O.setStart(T.node,T.offset),w.removeAllRanges(),ie>De?(w.addRange(O),w.extend(E.node,E.offset)):(O.setEnd(E.node,E.offset),w.addRange(O))}}}}for(k=[],w=v;w=w.parentNode;)w.nodeType===1&&k.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<k.length;v++){var B=k[v];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}ti=!!Vc,Pc=Vc=null}finally{Te=c,Y.p=s,q.T=r}}e.current=t,nt=2}}function Ih(){if(nt===2){nt=0;var e=Ha,t=lo,r=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||r){r=q.T,q.T=null;var s=Y.p;Y.p=2;var c=Te;Te|=4;try{Ah(e,t.alternate,t)}finally{Te=c,Y.p=s,q.T=r}}nt=3}}function Yh(){if(nt===4||nt===3){nt=0,u0();var e=Ha,t=lo,r=co,s=qh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?nt=5:(nt=0,lo=Ha=null,Qh(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Fa=null),Hi(r),t=t.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Oo,t,void 0,(t.current.flags&128)===128)}catch{}if(s!==null){t=q.T,c=Y.p,Y.p=2,q.T=null;try{for(var u=e.onRecoverableError,p=0;p<s.length;p++){var v=s[p];u(v.value,{componentStack:v.stack})}}finally{q.T=t,Y.p=c}}(co&3)!==0&&Fn(),ra(e),c=e.pendingLanes,(r&4194090)!==0&&(c&42)!==0?e===Ac?fs++:(fs=0,Ac=e):fs=0,hs(0)}}function Qh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Yo(t)))}function Fn(e){return Gh(),Ih(),Yh(),Zh()}function Zh(){if(nt!==5)return!1;var e=Ha,t=Sc;Sc=0;var r=Hi(co),s=q.T,c=Y.p;try{Y.p=32>r?32:r,q.T=null,r=jc,jc=null;var u=Ha,p=co;if(nt=0,lo=Ha=null,co=0,(Te&6)!==0)throw Error(i(331));var v=Te;if(Te|=4,wh(u.current),Oh(u,u.current,p,r),Te=v,hs(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Oo,u)}catch{}return!0}finally{Y.p=c,q.T=s,Qh(e,t)}}function Kh(e,t,r){t=zt(r,t),t=tc(e.stateNode,t,2),e=qa(e,t,2),e!==null&&(_o(e,2),ra(e))}function qe(e,t,r){if(e.tag===3)Kh(e,e,r);else for(;t!==null;){if(t.tag===3){Kh(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Fa===null||!Fa.has(s))){e=zt(r,e),r=eh(2),s=qa(t,r,2),s!==null&&(th(r,s,t,e),_o(s,2),ra(s));break}}t=t.return}}function Cc(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new Vy;var c=new Set;s.set(t,c)}else c=s.get(t),c===void 0&&(c=new Set,s.set(t,c));c.has(r)||(gc=!0,c.add(r),e=ky.bind(null,e,t,r),t.then(e,e))}function ky(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Le===e&&(ye&r)===r&&(Fe===4||Fe===3&&(ye&62914560)===ye&&300>Wt()-yc?(Te&2)===0&&uo(e,0):bc|=r,io===ye&&(io=0)),ra(e)}function Jh(e,t){t===0&&(t=Id()),e=Ir(e,t),e!==null&&(_o(e,t),ra(e))}function Fy(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Jh(e,r)}function Hy(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(r=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(i(314))}s!==null&&s.delete(t),Jh(e,r)}function Gy(e,t){return sr(e,t)}var Hn=null,fo=null,Mc=!1,Gn=!1,Oc=!1,Ar=0;function ra(e){e!==fo&&e.next===null&&(fo===null?Hn=fo=e:fo=fo.next=e),Gn=!0,Mc||(Mc=!0,Yy())}function hs(e,t){if(!Oc&&Gn){Oc=!0;do for(var r=!1,s=Hn;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var u=0;else{var p=s.suspendedLanes,v=s.pingedLanes;u=(1<<31-Rt(42|e)+1)-1,u&=c&~(p&~v),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(r=!0,tp(s,u))}else u=ye,u=Ks(s,s===Le?u:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(u&3)===0||Do(s,u)||(r=!0,tp(s,u));s=s.next}while(r);Oc=!1}}function Iy(){Wh()}function Wh(){Gn=Mc=!1;var e=0;Ar!==0&&(t1()&&(e=Ar),Ar=0);for(var t=Wt(),r=null,s=Hn;s!==null;){var c=s.next,u=$h(s,t);u===0?(s.next=null,r===null?Hn=c:r.next=c,c===null&&(fo=r)):(r=s,(e!==0||(u&3)!==0)&&(Gn=!0)),s=c}hs(e)}function $h(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var p=31-Rt(u),v=1<<p,A=c[p];A===-1?((v&r)===0||(v&s)!==0)&&(c[p]=b0(v,t)):A<=t&&(e.expiredLanes|=v),u&=~v}if(t=Le,r=ye,r=Ks(e,e===t?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,r===0||e===t&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Ca(s),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Do(e,r)){if(t=r&-r,t===e.callbackPriority)return t;switch(s!==null&&Ca(s),Hi(r)){case 2:case 8:r=Fd;break;case 32:r=Ys;break;case 268435456:r=Hd;break;default:r=Ys}return s=ep.bind(null,e),r=sr(r,s),e.callbackPriority=t,e.callbackNode=r,t}return s!==null&&s!==null&&Ca(s),e.callbackPriority=2,e.callbackNode=null,2}function ep(e,t){if(nt!==0&&nt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Fn()&&e.callbackNode!==r)return null;var s=ye;return s=Ks(e,e===Le?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Lh(e,s,t),$h(e,Wt()),e.callbackNode!=null&&e.callbackNode===r?ep.bind(null,e):null)}function tp(e,t){if(Fn())return null;Lh(e,t,!0)}function Yy(){r1(function(){(Te&6)!==0?sr(kd,Iy):Wh()})}function Dc(){return Ar===0&&(Ar=Gd()),Ar}function ap(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:tn(""+e)}function rp(e,t){var r=t.ownerDocument.createElement("input");return r.name=t.name,r.value=t.value,e.id&&r.setAttribute("form",e.id),t.parentNode.insertBefore(r,t),e=new FormData(e),r.parentNode.removeChild(r),e}function Qy(e,t,r,s,c){if(t==="submit"&&r&&r.stateNode===c){var u=ap((c[bt]||null).action),p=s.submitter;p&&(t=(t=p[bt]||null)?ap(t.formAction):p.getAttribute("formAction"),t!==null&&(u=t,p=null));var v=new sn("action","action",null,s,c);e.push({event:v,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ar!==0){var A=p?rp(c,p):new FormData(c);Kl(r,{pending:!0,data:A,method:c.method,action:u},null,A)}}else typeof u=="function"&&(v.preventDefault(),A=p?rp(c,p):new FormData(c),Kl(r,{pending:!0,data:A,method:c.method,action:u},u,A))},currentTarget:c}]})}}for(var _c=0;_c<pl.length;_c++){var wc=pl[_c],Zy=wc.toLowerCase(),Ky=wc[0].toUpperCase()+wc.slice(1);Ht(Zy,"on"+Ky)}Ht(zm,"onAnimationEnd"),Ht(Lm,"onAnimationIteration"),Ht(Vm,"onAnimationStart"),Ht("dblclick","onDoubleClick"),Ht("focusin","onFocus"),Ht("focusout","onBlur"),Ht(fy,"onTransitionRun"),Ht(hy,"onTransitionStart"),Ht(py,"onTransitionCancel"),Ht(Pm,"onTransitionEnd"),Lr("onMouseEnter",["mouseout","mouseover"]),Lr("onMouseLeave",["mouseout","mouseover"]),Lr("onPointerEnter",["pointerout","pointerover"]),Lr("onPointerLeave",["pointerout","pointerover"]),ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ir("onBeforeInput",["compositionend","keypress","textInput","paste"]),ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ps="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ps));function op(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],c=s.event;s=s.listeners;e:{var u=void 0;if(t)for(var p=s.length-1;0<=p;p--){var v=s[p],A=v.instance,D=v.currentTarget;if(v=v.listener,A!==u&&c.isPropagationStopped())break e;u=v,c.currentTarget=D;try{u(c)}catch(V){wn(V)}c.currentTarget=null,u=A}else for(p=0;p<s.length;p++){if(v=s[p],A=v.instance,D=v.currentTarget,v=v.listener,A!==u&&c.isPropagationStopped())break e;u=v,c.currentTarget=D;try{u(c)}catch(V){wn(V)}c.currentTarget=null,u=A}}}}function be(e,t){var r=t[Gi];r===void 0&&(r=t[Gi]=new Set);var s=e+"__bubble";r.has(s)||(sp(t,e,2,!1),r.add(s))}function Nc(e,t,r){var s=0;t&&(s|=4),sp(r,e,s,t)}var In="_reactListening"+Math.random().toString(36).slice(2);function qc(e){if(!e[In]){e[In]=!0,Jd.forEach(function(r){r!=="selectionchange"&&(Jy.has(r)||Nc(r,!1,e),Nc(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[In]||(t[In]=!0,Nc("selectionchange",!1,t))}}function sp(e,t,r,s){switch(Op(t)){case 2:var c=E1;break;case 8:c=R1;break;default:c=Qc}r=c.bind(null,t,r,e),c=void 0,!al||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(t,r,{capture:!0,passive:c}):e.addEventListener(t,r,!0):c!==void 0?e.addEventListener(t,r,{passive:c}):e.addEventListener(t,r,!1)}function zc(e,t,r,s,c){var u=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var p=s.tag;if(p===3||p===4){var v=s.stateNode.containerInfo;if(v===c)break;if(p===4)for(p=s.return;p!==null;){var A=p.tag;if((A===3||A===4)&&p.stateNode.containerInfo===c)return;p=p.return}for(;v!==null;){if(p=Nr(v),p===null)return;if(A=p.tag,A===5||A===6||A===26||A===27){s=u=p;continue e}v=v.parentNode}}s=s.return}dm(function(){var D=u,V=el(r),k=[];e:{var _=Bm.get(e);if(_!==void 0){var w=sn,de=e;switch(e){case"keypress":if(rn(r)===0)break e;case"keydown":case"keyup":w=G0;break;case"focusin":de="focus",w=nl;break;case"focusout":de="blur",w=nl;break;case"beforeblur":case"afterblur":w=nl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=N0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Q0;break;case zm:case Lm:case Vm:w=L0;break;case Pm:w=K0;break;case"scroll":case"scrollend":w=_0;break;case"wheel":w=W0;break;case"copy":case"cut":case"paste":w=P0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=xm;break;case"toggle":case"beforetoggle":w=ey}var ie=(t&4)!==0,De=!ie&&(e==="scroll"||e==="scrollend"),T=ie?_!==null?_+"Capture":null:_;ie=[];for(var E=D,O;E!==null;){var B=E;if(O=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||O===null||T===null||(B=qo(E,T),B!=null&&ie.push(xs(E,B,O))),De)break;E=E.return}0<ie.length&&(_=new w(_,de,null,r,V),k.push({event:_,listeners:ie}))}}if((t&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",_&&r!==$i&&(de=r.relatedTarget||r.fromElement)&&(Nr(de)||de[wr]))break e;if((w||_)&&(_=V.window===V?V:(_=V.ownerDocument)?_.defaultView||_.parentWindow:window,w?(de=r.relatedTarget||r.toElement,w=D,de=de?Nr(de):null,de!==null&&(De=f(de),ie=de.tag,de!==De||ie!==5&&ie!==27&&ie!==6)&&(de=null)):(w=null,de=D),w!==de)){if(ie=hm,B="onMouseLeave",T="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(ie=xm,B="onPointerLeave",T="onPointerEnter",E="pointer"),De=w==null?_:No(w),O=de==null?_:No(de),_=new ie(B,E+"leave",w,r,V),_.target=De,_.relatedTarget=O,B=null,Nr(V)===D&&(ie=new ie(T,E+"enter",de,r,V),ie.target=O,ie.relatedTarget=De,B=ie),De=B,w&&de)t:{for(ie=w,T=de,E=0,O=ie;O;O=ho(O))E++;for(O=0,B=T;B;B=ho(B))O++;for(;0<E-O;)ie=ho(ie),E--;for(;0<O-E;)T=ho(T),O--;for(;E--;){if(ie===T||T!==null&&ie===T.alternate)break t;ie=ho(ie),T=ho(T)}ie=null}else ie=null;w!==null&&np(k,_,w,ie,!1),de!==null&&De!==null&&np(k,De,de,ie,!0)}}e:{if(_=D?No(D):window,w=_.nodeName&&_.nodeName.toLowerCase(),w==="select"||w==="input"&&_.type==="file")var $=Em;else if(jm(_))if(Rm)$=uy;else{$=ly;var xe=iy}else w=_.nodeName,!w||w.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?D&&Wi(D.elementType)&&($=Em):$=cy;if($&&($=$(e,D))){Am(k,$,r,V);break e}xe&&xe(e,_,D),e==="focusout"&&D&&_.type==="number"&&D.memoizedProps.value!=null&&Ji(_,"number",_.value)}switch(xe=D?No(D):window,e){case"focusin":(jm(xe)||xe.contentEditable==="true")&&(Fr=xe,ml=D,ko=null);break;case"focusout":ko=ml=Fr=null;break;case"mousedown":fl=!0;break;case"contextmenu":case"mouseup":case"dragend":fl=!1,Nm(k,r,V);break;case"selectionchange":if(my)break;case"keydown":case"keyup":Nm(k,r,V)}var oe;if(ll)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else kr?ym(e,r)&&(le="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(le="onCompositionStart");le&&(gm&&r.locale!=="ko"&&(kr||le!=="onCompositionStart"?le==="onCompositionEnd"&&kr&&(oe=mm()):(Da=V,rl="value"in Da?Da.value:Da.textContent,kr=!0)),xe=Yn(D,le),0<xe.length&&(le=new pm(le,e,null,r,V),k.push({event:le,listeners:xe}),oe?le.data=oe:(oe=Sm(r),oe!==null&&(le.data=oe)))),(oe=ay?ry(e,r):oy(e,r))&&(le=Yn(D,"onBeforeInput"),0<le.length&&(xe=new pm("onBeforeInput","beforeinput",null,r,V),k.push({event:xe,listeners:le}),xe.data=oe)),Qy(k,e,D,r,V)}op(k,t)})}function xs(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Yn(e,t){for(var r=t+"Capture",s=[];e!==null;){var c=e,u=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||u===null||(c=qo(e,r),c!=null&&s.unshift(xs(e,c,u)),c=qo(e,t),c!=null&&s.push(xs(e,c,u))),e.tag===3)return s;e=e.return}return[]}function ho(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function np(e,t,r,s,c){for(var u=t._reactName,p=[];r!==null&&r!==s;){var v=r,A=v.alternate,D=v.stateNode;if(v=v.tag,A!==null&&A===s)break;v!==5&&v!==26&&v!==27||D===null||(A=D,c?(D=qo(r,u),D!=null&&p.unshift(xs(r,D,A))):c||(D=qo(r,u),D!=null&&p.push(xs(r,D,A)))),r=r.return}p.length!==0&&e.push({event:t,listeners:p})}var Wy=/\r\n?/g,$y=/\u0000|\uFFFD/g;function ip(e){return(typeof e=="string"?e:""+e).replace(Wy,`
`).replace($y,"")}function lp(e,t){return t=ip(t),ip(e)===t}function Qn(){}function Oe(e,t,r,s,c,u){switch(r){case"children":typeof s=="string"?t==="body"||t==="textarea"&&s===""||Br(e,s):(typeof s=="number"||typeof s=="bigint")&&t!=="body"&&Br(e,""+s);break;case"className":Ws(e,"class",s);break;case"tabIndex":Ws(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ws(e,r,s);break;case"style":cm(e,s,u);break;case"data":if(t!=="object"){Ws(e,"data",s);break}case"src":case"href":if(s===""&&(t!=="a"||r!=="href")){e.removeAttribute(r);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(r);break}s=tn(""+s),e.setAttribute(r,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(r==="formAction"?(t!=="input"&&Oe(e,t,"name",c.name,c,null),Oe(e,t,"formEncType",c.formEncType,c,null),Oe(e,t,"formMethod",c.formMethod,c,null),Oe(e,t,"formTarget",c.formTarget,c,null)):(Oe(e,t,"encType",c.encType,c,null),Oe(e,t,"method",c.method,c,null),Oe(e,t,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(r);break}s=tn(""+s),e.setAttribute(r,s);break;case"onClick":s!=null&&(e.onclick=Qn);break;case"onScroll":s!=null&&be("scroll",e);break;case"onScrollEnd":s!=null&&be("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(i(61));if(r=s.__html,r!=null){if(c.children!=null)throw Error(i(60));e.innerHTML=r}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}r=tn(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(r,""+s):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":s===!0?e.setAttribute(r,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(r,s):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(r,s):e.removeAttribute(r);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(r):e.setAttribute(r,s);break;case"popover":be("beforetoggle",e),be("toggle",e),Js(e,"popover",s);break;case"xlinkActuate":ca(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ca(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ca(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ca(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ca(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ca(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ca(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ca(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ca(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Js(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=O0.get(r)||r,Js(e,r,s))}}function Lc(e,t,r,s,c,u){switch(r){case"style":cm(e,s,u);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(i(61));if(r=s.__html,r!=null){if(c.children!=null)throw Error(i(60));e.innerHTML=r}}break;case"children":typeof s=="string"?Br(e,s):(typeof s=="number"||typeof s=="bigint")&&Br(e,""+s);break;case"onScroll":s!=null&&be("scroll",e);break;case"onScrollEnd":s!=null&&be("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Qn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wd.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(c=r.endsWith("Capture"),t=r.slice(2,c?r.length-7:void 0),u=e[bt]||null,u=u!=null?u[r]:null,typeof u=="function"&&e.removeEventListener(t,u,c),typeof s=="function")){typeof u!="function"&&u!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(t,s,c);break e}r in e?e[r]=s:s===!0?e.setAttribute(r,""):Js(e,r,s)}}}function it(e,t,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var s=!1,c=!1,u;for(u in r)if(r.hasOwnProperty(u)){var p=r[u];if(p!=null)switch(u){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Oe(e,t,u,p,r,null)}}c&&Oe(e,t,"srcSet",r.srcSet,r,null),s&&Oe(e,t,"src",r.src,r,null);return;case"input":be("invalid",e);var v=u=p=c=null,A=null,D=null;for(s in r)if(r.hasOwnProperty(s)){var V=r[s];if(V!=null)switch(s){case"name":c=V;break;case"type":p=V;break;case"checked":A=V;break;case"defaultChecked":D=V;break;case"value":u=V;break;case"defaultValue":v=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(i(137,t));break;default:Oe(e,t,s,V,r,null)}}sm(e,u,v,A,D,p,c,!1),$s(e);return;case"select":be("invalid",e),s=p=u=null;for(c in r)if(r.hasOwnProperty(c)&&(v=r[c],v!=null))switch(c){case"value":u=v;break;case"defaultValue":p=v;break;case"multiple":s=v;default:Oe(e,t,c,v,r,null)}t=u,r=p,e.multiple=!!s,t!=null?Pr(e,!!s,t,!1):r!=null&&Pr(e,!!s,r,!0);return;case"textarea":be("invalid",e),u=c=s=null;for(p in r)if(r.hasOwnProperty(p)&&(v=r[p],v!=null))switch(p){case"value":s=v;break;case"defaultValue":c=v;break;case"children":u=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(i(91));break;default:Oe(e,t,p,v,r,null)}im(e,s,c,u),$s(e);return;case"option":for(A in r)r.hasOwnProperty(A)&&(s=r[A],s!=null)&&(A==="selected"?e.selected=s&&typeof s!="function"&&typeof s!="symbol":Oe(e,t,A,s,r,null));return;case"dialog":be("beforetoggle",e),be("toggle",e),be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(s=0;s<ps.length;s++)be(ps[s],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in r)if(r.hasOwnProperty(D)&&(s=r[D],s!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Oe(e,t,D,s,r,null)}return;default:if(Wi(t)){for(V in r)r.hasOwnProperty(V)&&(s=r[V],s!==void 0&&Lc(e,t,V,s,r,void 0));return}}for(v in r)r.hasOwnProperty(v)&&(s=r[v],s!=null&&Oe(e,t,v,s,r,null))}function e1(e,t,r,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,u=null,p=null,v=null,A=null,D=null,V=null;for(w in r){var k=r[w];if(r.hasOwnProperty(w)&&k!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":A=k;default:s.hasOwnProperty(w)||Oe(e,t,w,null,s,k)}}for(var _ in s){var w=s[_];if(k=r[_],s.hasOwnProperty(_)&&(w!=null||k!=null))switch(_){case"type":u=w;break;case"name":c=w;break;case"checked":D=w;break;case"defaultChecked":V=w;break;case"value":p=w;break;case"defaultValue":v=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(i(137,t));break;default:w!==k&&Oe(e,t,_,w,s,k)}}Ki(e,p,v,A,D,V,u,c);return;case"select":w=p=v=_=null;for(u in r)if(A=r[u],r.hasOwnProperty(u)&&A!=null)switch(u){case"value":break;case"multiple":w=A;default:s.hasOwnProperty(u)||Oe(e,t,u,null,s,A)}for(c in s)if(u=s[c],A=r[c],s.hasOwnProperty(c)&&(u!=null||A!=null))switch(c){case"value":_=u;break;case"defaultValue":v=u;break;case"multiple":p=u;default:u!==A&&Oe(e,t,c,u,s,A)}t=v,r=p,s=w,_!=null?Pr(e,!!r,_,!1):!!s!=!!r&&(t!=null?Pr(e,!!r,t,!0):Pr(e,!!r,r?[]:"",!1));return;case"textarea":w=_=null;for(v in r)if(c=r[v],r.hasOwnProperty(v)&&c!=null&&!s.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Oe(e,t,v,null,s,c)}for(p in s)if(c=s[p],u=r[p],s.hasOwnProperty(p)&&(c!=null||u!=null))switch(p){case"value":_=c;break;case"defaultValue":w=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(i(91));break;default:c!==u&&Oe(e,t,p,c,s,u)}nm(e,_,w);return;case"option":for(var de in r)_=r[de],r.hasOwnProperty(de)&&_!=null&&!s.hasOwnProperty(de)&&(de==="selected"?e.selected=!1:Oe(e,t,de,null,s,_));for(A in s)_=s[A],w=r[A],s.hasOwnProperty(A)&&_!==w&&(_!=null||w!=null)&&(A==="selected"?e.selected=_&&typeof _!="function"&&typeof _!="symbol":Oe(e,t,A,_,s,w));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in r)_=r[ie],r.hasOwnProperty(ie)&&_!=null&&!s.hasOwnProperty(ie)&&Oe(e,t,ie,null,s,_);for(D in s)if(_=s[D],w=r[D],s.hasOwnProperty(D)&&_!==w&&(_!=null||w!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(i(137,t));break;default:Oe(e,t,D,_,s,w)}return;default:if(Wi(t)){for(var De in r)_=r[De],r.hasOwnProperty(De)&&_!==void 0&&!s.hasOwnProperty(De)&&Lc(e,t,De,void 0,s,_);for(V in s)_=s[V],w=r[V],!s.hasOwnProperty(V)||_===w||_===void 0&&w===void 0||Lc(e,t,V,_,s,w);return}}for(var T in r)_=r[T],r.hasOwnProperty(T)&&_!=null&&!s.hasOwnProperty(T)&&Oe(e,t,T,null,s,_);for(k in s)_=s[k],w=r[k],!s.hasOwnProperty(k)||_===w||_==null&&w==null||Oe(e,t,k,_,s,w)}var Vc=null,Pc=null;function Zn(e){return e.nodeType===9?e:e.ownerDocument}function cp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function up(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Bc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xc=null;function t1(){var e=window.event;return e&&e.type==="popstate"?e===Xc?!1:(Xc=e,!0):(Xc=null,!1)}var dp=typeof setTimeout=="function"?setTimeout:void 0,a1=typeof clearTimeout=="function"?clearTimeout:void 0,mp=typeof Promise=="function"?Promise:void 0,r1=typeof queueMicrotask=="function"?queueMicrotask:typeof mp<"u"?function(e){return mp.resolve(null).then(e).catch(o1)}:dp;function o1(e){setTimeout(function(){throw e})}function Ia(e){return e==="head"}function fp(e,t){var r=t,s=0,c=0;do{var u=r.nextSibling;if(e.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"){if(0<s&&8>s){r=s;var p=e.ownerDocument;if(r&1&&gs(p.documentElement),r&2&&gs(p.body),r&4)for(r=p.head,gs(r),p=r.firstChild;p;){var v=p.nextSibling,A=p.nodeName;p[wo]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&p.rel.toLowerCase()==="stylesheet"||r.removeChild(p),p=v}}if(c===0){e.removeChild(u),Rs(t);return}c--}else r==="$"||r==="$?"||r==="$!"?c++:s=r.charCodeAt(0)-48;else s=0;r=u}while(r);Rs(t)}function Uc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var r=t;switch(t=t.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Uc(r),Ii(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function s1(e,t,r,s){for(;e.nodeType===1;){var c=r;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[wo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=It(e.nextSibling),e===null)break}return null}function n1(e,t,r){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=It(e.nextSibling),e===null))return null;return e}function kc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function i1(e,t){var r=e.ownerDocument;if(e.data!=="$?"||r.readyState==="complete")t();else{var s=function(){t(),r.removeEventListener("DOMContentLoaded",s)};r.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function It(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Fc=null;function hp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}function pp(e,t,r){switch(t=Zn(r),e){case"html":if(e=t.documentElement,!e)throw Error(i(452));return e;case"head":if(e=t.head,!e)throw Error(i(453));return e;case"body":if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gs(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ii(e)}var Ut=new Map,xp=new Set;function Kn(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Aa=Y.d;Y.d={f:l1,r:c1,D:u1,C:d1,L:m1,m:f1,X:p1,S:h1,M:x1};function l1(){var e=Aa.f(),t=Un();return e||t}function c1(e){var t=qr(e);t!==null&&t.tag===5&&t.type==="form"?Lf(t):Aa.r(e)}var po=typeof document>"u"?null:document;function gp(e,t,r){var s=po;if(s&&typeof t=="string"&&t){var c=qt(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof r=="string"&&(c+='[crossorigin="'+r+'"]'),xp.has(c)||(xp.add(c),e={rel:e,crossOrigin:r,href:t},s.querySelector(c)===null&&(t=s.createElement("link"),it(t,"link",e),tt(t),s.head.appendChild(t)))}}function u1(e){Aa.D(e),gp("dns-prefetch",e,null)}function d1(e,t){Aa.C(e,t),gp("preconnect",e,t)}function m1(e,t,r){Aa.L(e,t,r);var s=po;if(s&&e&&t){var c='link[rel="preload"][as="'+qt(t)+'"]';t==="image"&&r&&r.imageSrcSet?(c+='[imagesrcset="'+qt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(c+='[imagesizes="'+qt(r.imageSizes)+'"]')):c+='[href="'+qt(e)+'"]';var u=c;switch(t){case"style":u=xo(e);break;case"script":u=go(e)}Ut.has(u)||(e=b({rel:"preload",href:t==="image"&&r&&r.imageSrcSet?void 0:e,as:t},r),Ut.set(u,e),s.querySelector(c)!==null||t==="style"&&s.querySelector(bs(u))||t==="script"&&s.querySelector(vs(u))||(t=s.createElement("link"),it(t,"link",e),tt(t),s.head.appendChild(t)))}}function f1(e,t){Aa.m(e,t);var r=po;if(r&&e){var s=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+qt(s)+'"][href="'+qt(e)+'"]',u=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=go(e)}if(!Ut.has(u)&&(e=b({rel:"modulepreload",href:e},t),Ut.set(u,e),r.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(vs(u)))return}s=r.createElement("link"),it(s,"link",e),tt(s),r.head.appendChild(s)}}}function h1(e,t,r){Aa.S(e,t,r);var s=po;if(s&&e){var c=zr(s).hoistableStyles,u=xo(e);t=t||"default";var p=c.get(u);if(!p){var v={loading:0,preload:null};if(p=s.querySelector(bs(u)))v.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},r),(r=Ut.get(u))&&Hc(e,r);var A=p=s.createElement("link");tt(A),it(A,"link",e),A._p=new Promise(function(D,V){A.onload=D,A.onerror=V}),A.addEventListener("load",function(){v.loading|=1}),A.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Jn(p,t,s)}p={type:"stylesheet",instance:p,count:1,state:v},c.set(u,p)}}}function p1(e,t){Aa.X(e,t);var r=po;if(r&&e){var s=zr(r).hoistableScripts,c=go(e),u=s.get(c);u||(u=r.querySelector(vs(c)),u||(e=b({src:e,async:!0},t),(t=Ut.get(c))&&Gc(e,t),u=r.createElement("script"),tt(u),it(u,"link",e),r.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(c,u))}}function x1(e,t){Aa.M(e,t);var r=po;if(r&&e){var s=zr(r).hoistableScripts,c=go(e),u=s.get(c);u||(u=r.querySelector(vs(c)),u||(e=b({src:e,async:!0,type:"module"},t),(t=Ut.get(c))&&Gc(e,t),u=r.createElement("script"),tt(u),it(u,"link",e),r.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(c,u))}}function bp(e,t,r,s){var c=(c=re.current)?Kn(c):null;if(!c)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(t=xo(r.href),r=zr(c).hoistableStyles,s=r.get(t),s||(s={type:"style",instance:null,count:0,state:null},r.set(t,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=xo(r.href);var u=zr(c).hoistableStyles,p=u.get(e);if(p||(c=c.ownerDocument||c,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,p),(u=c.querySelector(bs(e)))&&!u._p&&(p.instance=u,p.state.loading=5),Ut.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Ut.set(e,r),u||g1(c,e,r,p.state))),t&&s===null)throw Error(i(528,""));return p}if(t&&s!==null)throw Error(i(529,""));return null;case"script":return t=r.async,r=r.src,typeof r=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=go(r),r=zr(c).hoistableScripts,s=r.get(t),s||(s={type:"script",instance:null,count:0,state:null},r.set(t,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function xo(e){return'href="'+qt(e)+'"'}function bs(e){return'link[rel="stylesheet"]['+e+"]"}function vp(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function g1(e,t,r,s){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?s.loading=1:(t=e.createElement("link"),s.preload=t,t.addEventListener("load",function(){return s.loading|=1}),t.addEventListener("error",function(){return s.loading|=2}),it(t,"link",r),tt(t),e.head.appendChild(t))}function go(e){return'[src="'+qt(e)+'"]'}function vs(e){return"script[async]"+e}function yp(e,t,r){if(t.count++,t.instance===null)switch(t.type){case"style":var s=e.querySelector('style[data-href~="'+qt(r.href)+'"]');if(s)return t.instance=s,tt(s),s;var c=b({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),tt(s),it(s,"style",c),Jn(s,r.precedence,e),t.instance=s;case"stylesheet":c=xo(r.href);var u=e.querySelector(bs(c));if(u)return t.state.loading|=4,t.instance=u,tt(u),u;s=vp(r),(c=Ut.get(c))&&Hc(s,c),u=(e.ownerDocument||e).createElement("link"),tt(u);var p=u;return p._p=new Promise(function(v,A){p.onload=v,p.onerror=A}),it(u,"link",s),t.state.loading|=4,Jn(u,r.precedence,e),t.instance=u;case"script":return u=go(r.src),(c=e.querySelector(vs(u)))?(t.instance=c,tt(c),c):(s=r,(c=Ut.get(u))&&(s=b({},r),Gc(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),tt(c),it(c,"link",s),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(i(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(s=t.instance,t.state.loading|=4,Jn(s,r.precedence,e));return t.instance}function Jn(e,t,r){for(var s=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,u=c,p=0;p<s.length;p++){var v=s[p];if(v.dataset.precedence===t)u=v;else if(u!==c)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=r.nodeType===9?r.head:r,t.insertBefore(e,t.firstChild))}function Hc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Gc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Wn=null;function Sp(e,t,r){if(Wn===null){var s=new Map,c=Wn=new Map;c.set(r,s)}else c=Wn,s=c.get(r),s||(s=new Map,c.set(r,s));if(s.has(e))return s;for(s.set(e,null),r=r.getElementsByTagName(e),c=0;c<r.length;c++){var u=r[c];if(!(u[wo]||u[ct]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var p=u.getAttribute(t)||"";p=e+p;var v=s.get(p);v?v.push(u):s.set(p,[u])}}return s}function jp(e,t,r){e=e.ownerDocument||e,e.head.insertBefore(r,t==="title"?e.querySelector("head > title"):null)}function b1(e,t,r){if(r===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ap(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ys=null;function v1(){}function y1(e,t,r){if(ys===null)throw Error(i(475));var s=ys;if(t.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var c=xo(r.href),u=e.querySelector(bs(c));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=$n.bind(s),e.then(s,s)),t.state.loading|=4,t.instance=u,tt(u);return}u=e.ownerDocument||e,r=vp(r),(c=Ut.get(c))&&Hc(r,c),u=u.createElement("link"),tt(u);var p=u;p._p=new Promise(function(v,A){p.onload=v,p.onerror=A}),it(u,"link",r),t.instance=u}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(s.count++,t=$n.bind(s),e.addEventListener("load",t),e.addEventListener("error",t))}}function S1(){if(ys===null)throw Error(i(475));var e=ys;return e.stylesheets&&e.count===0&&Ic(e,e.stylesheets),0<e.count?function(t){var r=setTimeout(function(){if(e.stylesheets&&Ic(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(r)}}:null}function $n(){if(this.count--,this.count===0){if(this.stylesheets)Ic(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ei=null;function Ic(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ei=new Map,t.forEach(j1,e),ei=null,$n.call(e))}function j1(e,t){if(!(t.state.loading&4)){var r=ei.get(e);if(r)var s=r.get(null);else{r=new Map,ei.set(e,r);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<c.length;u++){var p=c[u];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(r.set(p.dataset.precedence,p),s=p)}s&&r.set(null,s)}c=t.instance,p=c.getAttribute("data-precedence"),u=r.get(p)||s,u===s&&r.set(null,c),r.set(p,c),this.count++,s=$n.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),u?u.parentNode.insertBefore(c,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var Ss={$$typeof:H,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function A1(e,t,r,s,c,u,p,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ki(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ki(0),this.hiddenUpdates=ki(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=u,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function Ep(e,t,r,s,c,u,p,v,A,D,V,k){return e=new A1(e,t,r,p,v,A,D,k),t=1,u===!0&&(t|=24),u=Ct(3,null,null,t),e.current=u,u.stateNode=e,t=Cl(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:s,isDehydrated:r,cache:t},_l(u),e}function Rp(e){return e?(e=Yr,e):Yr}function Tp(e,t,r,s,c,u){c=Rp(c),s.context===null?s.context=c:s.pendingContext=c,s=Na(t),s.payload={element:r},u=u===void 0?null:u,u!==null&&(s.callback=u),r=qa(e,s,t),r!==null&&(wt(r,e,t),Jo(r,e,t))}function Cp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Yc(e,t){Cp(e,t),(e=e.alternate)&&Cp(e,t)}function Mp(e){if(e.tag===13){var t=Ir(e,67108864);t!==null&&wt(t,e,67108864),Yc(e,67108864)}}var ti=!0;function E1(e,t,r,s){var c=q.T;q.T=null;var u=Y.p;try{Y.p=2,Qc(e,t,r,s)}finally{Y.p=u,q.T=c}}function R1(e,t,r,s){var c=q.T;q.T=null;var u=Y.p;try{Y.p=8,Qc(e,t,r,s)}finally{Y.p=u,q.T=c}}function Qc(e,t,r,s){if(ti){var c=Zc(s);if(c===null)zc(e,t,s,ai,r),Dp(e,s);else if(C1(c,e,t,r,s))s.stopPropagation();else if(Dp(e,s),t&4&&-1<T1.indexOf(e)){for(;c!==null;){var u=qr(c);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var p=nr(u.pendingLanes);if(p!==0){var v=u;for(v.pendingLanes|=2,v.entangledLanes|=2;p;){var A=1<<31-Rt(p);v.entanglements[1]|=A,p&=~A}ra(u),(Te&6)===0&&(Bn=Wt()+500,hs(0))}}break;case 13:v=Ir(u,2),v!==null&&wt(v,u,2),Un(),Yc(u,2)}if(u=Zc(s),u===null&&zc(e,t,s,ai,r),u===c)break;c=u}c!==null&&s.stopPropagation()}else zc(e,t,s,null,r)}}function Zc(e){return e=el(e),Kc(e)}var ai=null;function Kc(e){if(ai=null,e=Nr(e),e!==null){var t=f(e);if(t===null)e=null;else{var r=t.tag;if(r===13){if(e=m(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ai=e,null}function Op(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(d0()){case kd:return 2;case Fd:return 8;case Ys:case m0:return 32;case Hd:return 268435456;default:return 32}default:return 32}}var Jc=!1,Ya=null,Qa=null,Za=null,js=new Map,As=new Map,Ka=[],T1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dp(e,t){switch(e){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":js.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":As.delete(t.pointerId)}}function Es(e,t,r,s,c,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:u,targetContainers:[c]},t!==null&&(t=qr(t),t!==null&&Mp(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function C1(e,t,r,s,c){switch(t){case"focusin":return Ya=Es(Ya,e,t,r,s,c),!0;case"dragenter":return Qa=Es(Qa,e,t,r,s,c),!0;case"mouseover":return Za=Es(Za,e,t,r,s,c),!0;case"pointerover":var u=c.pointerId;return js.set(u,Es(js.get(u)||null,e,t,r,s,c)),!0;case"gotpointercapture":return u=c.pointerId,As.set(u,Es(As.get(u)||null,e,t,r,s,c)),!0}return!1}function _p(e){var t=Nr(e.target);if(t!==null){var r=f(t);if(r!==null){if(t=r.tag,t===13){if(t=m(r),t!==null){e.blockedOn=t,y0(e.priority,function(){if(r.tag===13){var s=_t();s=Fi(s);var c=Ir(r,s);c!==null&&wt(c,r,s),Yc(r,s)}});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ri(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Zc(e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);$i=s,r.target.dispatchEvent(s),$i=null}else return t=qr(r),t!==null&&Mp(t),e.blockedOn=r,!1;t.shift()}return!0}function wp(e,t,r){ri(e)&&r.delete(t)}function M1(){Jc=!1,Ya!==null&&ri(Ya)&&(Ya=null),Qa!==null&&ri(Qa)&&(Qa=null),Za!==null&&ri(Za)&&(Za=null),js.forEach(wp),As.forEach(wp)}function oi(e,t){e.blockedOn===t&&(e.blockedOn=null,Jc||(Jc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,M1)))}var si=null;function Np(e){si!==e&&(si=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){si===e&&(si=null);for(var t=0;t<e.length;t+=3){var r=e[t],s=e[t+1],c=e[t+2];if(typeof s!="function"){if(Kc(s||r)===null)continue;break}var u=qr(r);u!==null&&(e.splice(t,3),t-=3,Kl(u,{pending:!0,data:c,method:r.method,action:s},s,c))}}))}function Rs(e){function t(A){return oi(A,e)}Ya!==null&&oi(Ya,e),Qa!==null&&oi(Qa,e),Za!==null&&oi(Za,e),js.forEach(t),As.forEach(t);for(var r=0;r<Ka.length;r++){var s=Ka[r];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ka.length&&(r=Ka[0],r.blockedOn===null);)_p(r),r.blockedOn===null&&Ka.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(s=0;s<r.length;s+=3){var c=r[s],u=r[s+1],p=c[bt]||null;if(typeof u=="function")p||Np(r);else if(p){var v=null;if(u&&u.hasAttribute("formAction")){if(c=u,p=u[bt]||null)v=p.formAction;else if(Kc(c)!==null)continue}else v=p.action;typeof v=="function"?r[s+1]=v:(r.splice(s,3),s-=3),Np(r)}}}function Wc(e){this._internalRoot=e}ni.prototype.render=Wc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var r=t.current,s=_t();Tp(r,s,e,t,null,null)},ni.prototype.unmount=Wc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tp(e.current,2,null,e,null,null),Un(),t[wr]=null}};function ni(e){this._internalRoot=e}ni.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zd();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Ka.length&&t!==0&&t<Ka[r].priority;r++);Ka.splice(r,0,e),r===0&&_p(e)}};var qp=o.version;if(qp!=="19.1.0")throw Error(i(527,qp,"19.1.0"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=g(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var O1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ii.isDisabled&&ii.supportsFiber)try{Oo=ii.inject(O1),Et=ii}catch{}}return Cs.createRoot=function(e,t){if(!d(e))throw Error(i(299));var r=!1,s="",c=Kf,u=Jf,p=Wf,v=null;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(v=t.unstable_transitionCallbacks)),t=Ep(e,1,!1,null,null,r,s,c,u,p,v,null),e[wr]=t.current,qc(e),new Wc(t)},Cs.hydrateRoot=function(e,t,r){if(!d(e))throw Error(i(299));var s=!1,c="",u=Kf,p=Jf,v=Wf,A=null,D=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(u=r.onUncaughtError),r.onCaughtError!==void 0&&(p=r.onCaughtError),r.onRecoverableError!==void 0&&(v=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(A=r.unstable_transitionCallbacks),r.formState!==void 0&&(D=r.formState)),t=Ep(e,1,!0,t,r??null,s,c,u,p,v,A,D),t.context=Rp(null),r=t.current,s=_t(),s=Fi(s),c=Na(s),c.callback=null,qa(r,c,s),r=s,t.current.lanes=r,_o(t,r),ra(t),e[wr]=t.current,qc(e),new ni(t)},Cs.version="19.1.0",Cs}var Hp;function U1(){if(Hp)return eu.exports;Hp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(o){console.error(o)}}return a(),eu.exports=X1(),eu.exports}var k1=U1(),z=qi();const F1=w1(z),Lg=_1({__proto__:null,default:F1},[z]);function H1(a,o){if(a instanceof RegExp)return{keys:!1,pattern:a};var n,i,d,f,m=[],h="",g=a.split("/");for(g[0]||g.shift();d=g.shift();)n=d[0],n==="*"?(m.push(n),h+=d[1]==="?"?"(?:/(.*))?":"/(.*)"):n===":"?(i=d.indexOf("?",1),f=d.indexOf(".",1),m.push(d.substring(1,~i?i:~f?f:d.length)),h+=~i&&!~f?"(?:/([^/]+?))?":"/([^/]+?)",~f&&(h+=(~i?"?":"")+"\\"+d.substring(f))):h+="/"+d;return{keys:m,pattern:new RegExp("^"+h+(o?"(?=$|/)":"/?$"),"i")}}var su={exports:{}},nu={};var Gp;function G1(){if(Gp)return nu;Gp=1;var a=qi();function o(S,y){return S===y&&(S!==0||1/S===1/y)||S!==S&&y!==y}var n=typeof Object.is=="function"?Object.is:o,i=a.useState,d=a.useEffect,f=a.useLayoutEffect,m=a.useDebugValue;function h(S,y){var R=y(),C=i({inst:{value:R,getSnapshot:y}}),N=C[0].inst,L=C[1];return f(function(){N.value=R,N.getSnapshot=y,g(N)&&L({inst:N})},[S,R,y]),d(function(){return g(N)&&L({inst:N}),S(function(){g(N)&&L({inst:N})})},[S]),m(R),R}function g(S){var y=S.getSnapshot;S=S.value;try{var R=y();return!n(S,R)}catch{return!0}}function x(S,y){return y()}var b=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?x:h;return nu.useSyncExternalStore=a.useSyncExternalStore!==void 0?a.useSyncExternalStore:b,nu}var Ip;function I1(){return Ip||(Ip=1,su.exports=G1()),su.exports}var Vg=I1();const Y1=Lg.useInsertionEffect,Q1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Z1=Q1?z.useLayoutEffect:z.useEffect,K1=Y1||Z1,Pg=a=>{const o=z.useRef([a,(...n)=>o[0](...n)]).current;return K1(()=>{o[0]=a}),o[1]},J1="popstate",td="pushState",ad="replaceState",W1="hashchange",Yp=[J1,td,ad,W1],$1=a=>{for(const o of Yp)addEventListener(o,a);return()=>{for(const o of Yp)removeEventListener(o,a)}},Bg=(a,o)=>Vg.useSyncExternalStore($1,a,o),Qp=()=>location.search,eS=({ssrSearch:a}={})=>Bg(Qp,a!=null?()=>a:Qp),Zp=()=>location.pathname,tS=({ssrPath:a}={})=>Bg(Zp,a!=null?()=>a:Zp),aS=(a,{replace:o=!1,state:n=null}={})=>history[o?ad:td](n,"",a),rS=(a={})=>[tS(a),aS],Kp=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[Kp]>"u"){for(const a of[td,ad]){const o=history[a];history[a]=function(){const n=o.apply(this,arguments),i=new Event(a);return i.arguments=arguments,dispatchEvent(i),n}}Object.defineProperty(window,Kp,{value:!0})}const oS=(a,o)=>o.toLowerCase().indexOf(a.toLowerCase())?"~"+o:o.slice(a.length)||"/",Xg=(a="")=>a==="/"?"":a,sS=(a,o)=>a[0]==="~"?a.slice(1):Xg(o)+a,nS=(a="",o)=>oS(Jp(Xg(a)),Jp(o)),Jp=a=>{try{return decodeURI(a)}catch{return a}},Ug={hook:rS,searchHook:eS,parser:H1,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:a=>a,aroundNav:(a,o,n)=>a(o,n)},kg=z.createContext(Ug),zi=()=>z.useContext(kg),Fg={},Hg=z.createContext(Fg),iS=()=>z.useContext(Hg),rd=a=>{const[o,n]=a.hook(a);return[nS(a.base,o),Pg((i,d)=>a.aroundNav(n,sS(i,a.base),d))]},Gg=(a,o,n,i)=>{const{pattern:d,keys:f}=o instanceof RegExp?{keys:!1,pattern:o}:a(o||"*",i),m=d.exec(n)||[],[h,...g]=m;return h!==void 0?[!0,(()=>{const x=f!==!1?Object.fromEntries(f.map((S,y)=>[S,g[y]])):m.groups;let b={...g};return x&&Object.assign(b,x),b})(),...i?[h]:[]]:[!1,null]},Ig=({children:a,...o})=>{const n=zi(),i=o.hook?Ug:n;let d=i;const[f,m=o.ssrSearch??""]=o.ssrPath?.split("?")??[];f&&(o.ssrSearch=m,o.ssrPath=f),o.hrefs=o.hrefs??o.hook?.hrefs,o.searchHook=o.searchHook??o.hook?.searchHook;let h=z.useRef({}),g=h.current,x=g;for(let b in i){const S=b==="base"?i[b]+(o[b]??""):o[b]??i[b];g===x&&S!==x[b]&&(h.current=x={...x}),x[b]=S,(S!==i[b]||S!==d[b])&&(d=x)}return z.createElement(kg.Provider,{value:d,children:a})},Wp=({children:a,component:o},n)=>o?z.createElement(o,{params:n}):typeof a=="function"?a(n):a,lS=a=>{let o=z.useRef(Fg);const n=o.current;return o.current=Object.keys(a).length!==Object.keys(n).length||Object.entries(a).some(([i,d])=>d!==n[i])?a:n},ve=({path:a,nest:o,match:n,...i})=>{const d=zi(),[f]=rd(d),[m,h,g]=n??Gg(d.parser,a,f,o),x=lS({...iS(),...h});if(!m)return null;const b=g?z.createElement(Ig,{base:g},Wp(i,x)):Wp(i,x);return z.createElement(Hg.Provider,{value:x,children:b})};z.forwardRef((a,o)=>{const n=zi(),[i,d]=rd(n),{to:f="",href:m=f,onClick:h,asChild:g,children:x,className:b,replace:S,state:y,transition:R,...C}=a,N=Pg(F=>{F.ctrlKey||F.metaKey||F.altKey||F.shiftKey||F.button!==0||(h?.(F),F.defaultPrevented||(F.preventDefault(),d(m,a)))}),L=n.hrefs(m[0]==="~"?m.slice(1):n.base+m,n);return g&&z.isValidElement(x)?z.cloneElement(x,{onClick:N,href:L}):z.createElement("a",{...C,onClick:N,href:L,className:b?.call?b(i===m):b,children:x,ref:o})});const Yg=a=>Array.isArray(a)?a.flatMap(o=>Yg(o&&o.type===z.Fragment?o.props.children:o)):[a],cS=({children:a,location:o})=>{const n=zi(),[i]=rd(n);for(const d of Yg(a)){let f=0;if(z.isValidElement(d)&&(f=Gg(n.parser,d.props.path,o||i,d.props.nest))[0])return z.cloneElement(d,{match:f})}return null},Ds={v:[]},$p=()=>Ds.v.forEach(a=>a()),uS=a=>(Ds.v.push(a)===1&&addEventListener("hashchange",$p),()=>{Ds.v=Ds.v.filter(o=>o!==a),Ds.v.length||removeEventListener("hashchange",$p)}),dS=()=>"/"+location.hash.replace(/^#?\/?/,""),mS=(a,{state:o=null,replace:n=!1}={})=>{const i=location.href,[d,f]=a.replace(/^#?\/?/,"").split("?"),m=new URL(location.href);m.hash=`/${d}`,f&&(m.search=f);const h=m.href;n?history.replaceState(o,"",h):history.pushState(o,"",h);const g=typeof HashChangeEvent<"u"?new HashChangeEvent("hashchange",{oldURL:i,newURL:h}):new Event("hashchange",{detail:{oldURL:i,newURL:h}});dispatchEvent(g)},od=({ssrPath:a="/"}={})=>[Vg.useSyncExternalStore(uS,dS,()=>a),mS];od.hrefs=a=>"#"+a;var Li=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(a){return this.listeners.add(a),this.onSubscribe(),()=>{this.listeners.delete(a),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},fS={setTimeout:(a,o)=>setTimeout(a,o),clearTimeout:a=>clearTimeout(a),setInterval:(a,o)=>setInterval(a,o),clearInterval:a=>clearInterval(a)},hS=class{#e=fS;#a=!1;setTimeoutProvider(a){this.#e=a}setTimeout(a,o){return this.#e.setTimeout(a,o)}clearTimeout(a){this.#e.clearTimeout(a)}setInterval(a,o){return this.#e.setInterval(a,o)}clearInterval(a){this.#e.clearInterval(a)}},Tu=new hS;function pS(a){setTimeout(a,0)}var Vi=typeof window>"u"||"Deno"in globalThis;function Zt(){}function xS(a,o){return typeof a=="function"?a(o):a}function gS(a){return typeof a=="number"&&a>=0&&a!==1/0}function bS(a,o){return Math.max(a+(o||0)-Date.now(),0)}function Cu(a,o){return typeof a=="function"?a(o):a}function vS(a,o){return typeof a=="function"?a(o):a}function ex(a,o){const{type:n="all",exact:i,fetchStatus:d,predicate:f,queryKey:m,stale:h}=a;if(m){if(i){if(o.queryHash!==sd(m,o.options))return!1}else if(!Vs(o.queryKey,m))return!1}if(n!=="all"){const g=o.isActive();if(n==="active"&&!g||n==="inactive"&&g)return!1}return!(typeof h=="boolean"&&o.isStale()!==h||d&&d!==o.state.fetchStatus||f&&!f(o))}function tx(a,o){const{exact:n,status:i,predicate:d,mutationKey:f}=a;if(f){if(!o.options.mutationKey)return!1;if(n){if(Ls(o.options.mutationKey)!==Ls(f))return!1}else if(!Vs(o.options.mutationKey,f))return!1}return!(i&&o.state.status!==i||d&&!d(o))}function sd(a,o){return(o?.queryKeyHashFn||Ls)(a)}function Ls(a){return JSON.stringify(a,(o,n)=>Mu(n)?Object.keys(n).sort().reduce((i,d)=>(i[d]=n[d],i),{}):n)}function Vs(a,o){return a===o?!0:typeof a!=typeof o?!1:a&&o&&typeof a=="object"&&typeof o=="object"?Object.keys(o).every(n=>Vs(a[n],o[n])):!1}var yS=Object.prototype.hasOwnProperty;function Qg(a,o,n=0){if(a===o)return a;if(n>500)return o;const i=ax(a)&&ax(o);if(!i&&!(Mu(a)&&Mu(o)))return o;const f=(i?a:Object.keys(a)).length,m=i?o:Object.keys(o),h=m.length,g=i?new Array(h):{};let x=0;for(let b=0;b<h;b++){const S=i?b:m[b],y=a[S],R=o[S];if(y===R){g[S]=y,(i?b<f:yS.call(a,S))&&x++;continue}if(y===null||R===null||typeof y!="object"||typeof R!="object"){g[S]=R;continue}const C=Qg(y,R,n+1);g[S]=C,C===y&&x++}return f===h&&x===f?a:g}function ax(a){return Array.isArray(a)&&a.length===Object.keys(a).length}function Mu(a){if(!rx(a))return!1;const o=a.constructor;if(o===void 0)return!0;const n=o.prototype;return!(!rx(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(a)!==Object.prototype)}function rx(a){return Object.prototype.toString.call(a)==="[object Object]"}function SS(a){return new Promise(o=>{Tu.setTimeout(o,a)})}function jS(a,o,n){return typeof n.structuralSharing=="function"?n.structuralSharing(a,o):n.structuralSharing!==!1?Qg(a,o):o}function AS(a,o,n=0){const i=[...a,o];return n&&i.length>n?i.slice(1):i}function ES(a,o,n=0){const i=[o,...a];return n&&i.length>n?i.slice(0,-1):i}var nd=Symbol();function Zg(a,o){return!a.queryFn&&o?.initialPromise?()=>o.initialPromise:!a.queryFn||a.queryFn===nd?()=>Promise.reject(new Error(`Missing queryFn: '${a.queryHash}'`)):a.queryFn}function RS(a,o,n){let i=!1,d;return Object.defineProperty(a,"signal",{enumerable:!0,get:()=>(d??=o(),i||(i=!0,d.aborted?n():d.addEventListener("abort",n,{once:!0})),d)}),a}var TS=class extends Li{#e;#a;#t;constructor(){super(),this.#t=a=>{if(!Vi&&window.addEventListener){const o=()=>a();return window.addEventListener("visibilitychange",o,!1),()=>{window.removeEventListener("visibilitychange",o)}}}}onSubscribe(){this.#a||this.setEventListener(this.#t)}onUnsubscribe(){this.hasListeners()||(this.#a?.(),this.#a=void 0)}setEventListener(a){this.#t=a,this.#a?.(),this.#a=a(o=>{typeof o=="boolean"?this.setFocused(o):this.onFocus()})}setFocused(a){this.#e!==a&&(this.#e=a,this.onFocus())}onFocus(){const a=this.isFocused();this.listeners.forEach(o=>{o(a)})}isFocused(){return typeof this.#e=="boolean"?this.#e:globalThis.document?.visibilityState!=="hidden"}},Kg=new TS;function CS(){let a,o;const n=new Promise((d,f)=>{a=d,o=f});n.status="pending",n.catch(()=>{});function i(d){Object.assign(n,d),delete n.resolve,delete n.reject}return n.resolve=d=>{i({status:"fulfilled",value:d}),a(d)},n.reject=d=>{i({status:"rejected",reason:d}),o(d)},n}var MS=pS;function OS(){let a=[],o=0,n=h=>{h()},i=h=>{h()},d=MS;const f=h=>{o?a.push(h):d(()=>{n(h)})},m=()=>{const h=a;a=[],h.length&&d(()=>{i(()=>{h.forEach(g=>{n(g)})})})};return{batch:h=>{let g;o++;try{g=h()}finally{o--,o||m()}return g},batchCalls:h=>(...g)=>{f(()=>{h(...g)})},schedule:f,setNotifyFunction:h=>{n=h},setBatchNotifyFunction:h=>{i=h},setScheduler:h=>{d=h}}}var pt=OS(),DS=class extends Li{#e=!0;#a;#t;constructor(){super(),this.#t=a=>{if(!Vi&&window.addEventListener){const o=()=>a(!0),n=()=>a(!1);return window.addEventListener("online",o,!1),window.addEventListener("offline",n,!1),()=>{window.removeEventListener("online",o),window.removeEventListener("offline",n)}}}}onSubscribe(){this.#a||this.setEventListener(this.#t)}onUnsubscribe(){this.hasListeners()||(this.#a?.(),this.#a=void 0)}setEventListener(a){this.#t=a,this.#a?.(),this.#a=a(this.setOnline.bind(this))}setOnline(a){this.#e!==a&&(this.#e=a,this.listeners.forEach(n=>{n(a)}))}isOnline(){return this.#e}},ji=new DS;function _S(a){return Math.min(1e3*2**a,3e4)}function Jg(a){return(a??"online")==="online"?ji.isOnline():!0}var Ou=class extends Error{constructor(a){super("CancelledError"),this.revert=a?.revert,this.silent=a?.silent}};function Wg(a){let o=!1,n=0,i;const d=CS(),f=()=>d.status!=="pending",m=N=>{if(!f()){const L=new Ou(N);y(L),a.onCancel?.(L)}},h=()=>{o=!0},g=()=>{o=!1},x=()=>Kg.isFocused()&&(a.networkMode==="always"||ji.isOnline())&&a.canRun(),b=()=>Jg(a.networkMode)&&a.canRun(),S=N=>{f()||(i?.(),d.resolve(N))},y=N=>{f()||(i?.(),d.reject(N))},R=()=>new Promise(N=>{i=L=>{(f()||x())&&N(L)},a.onPause?.()}).then(()=>{i=void 0,f()||a.onContinue?.()}),C=()=>{if(f())return;let N;const L=n===0?a.initialPromise:void 0;try{N=L??a.fn()}catch(F){N=Promise.reject(F)}Promise.resolve(N).then(S).catch(F=>{if(f())return;const G=a.retry??(Vi?0:3),H=a.retryDelay??_S,I=typeof H=="function"?H(n,F):H,P=G===!0||typeof G=="number"&&n<G||typeof G=="function"&&G(n,F);if(o||!P){y(F);return}n++,a.onFail?.(n,F),SS(I).then(()=>x()?void 0:R()).then(()=>{o?y(F):C()})})};return{promise:d,status:()=>d.status,cancel:m,continue:()=>(i?.(),d),cancelRetry:h,continueRetry:g,canStart:b,start:()=>(b()?C():R().then(C),d)}}var $g=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),gS(this.gcTime)&&(this.#e=Tu.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(a){this.gcTime=Math.max(this.gcTime||0,a??(Vi?1/0:300*1e3))}clearGcTimeout(){this.#e&&(Tu.clearTimeout(this.#e),this.#e=void 0)}},wS=class extends $g{#e;#a;#t;#o;#r;#n;#i;constructor(a){super(),this.#i=!1,this.#n=a.defaultOptions,this.setOptions(a.options),this.observers=[],this.#o=a.client,this.#t=this.#o.getQueryCache(),this.queryKey=a.queryKey,this.queryHash=a.queryHash,this.#e=sx(this.options),this.state=a.state??this.#e,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#r?.promise}setOptions(a){if(this.options={...this.#n,...a},this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const o=sx(this.options);o.data!==void 0&&(this.setState(ox(o.data,o.dataUpdatedAt)),this.#e=o)}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#t.remove(this)}setData(a,o){const n=jS(this.state.data,a,this.options);return this.#s({data:n,type:"success",dataUpdatedAt:o?.updatedAt,manual:o?.manual}),n}setState(a,o){this.#s({type:"setState",state:a,setStateOptions:o})}cancel(a){const o=this.#r?.promise;return this.#r?.cancel(a),o?o.then(Zt).catch(Zt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#e)}isActive(){return this.observers.some(a=>vS(a.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===nd||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(a=>Cu(a.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(a=>a.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(a=0){return this.state.data===void 0?!0:a==="static"?!1:this.state.isInvalidated?!0:!bS(this.state.dataUpdatedAt,a)}onFocus(){this.observers.find(o=>o.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#r?.continue()}onOnline(){this.observers.find(o=>o.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#r?.continue()}addObserver(a){this.observers.includes(a)||(this.observers.push(a),this.clearGcTimeout(),this.#t.notify({type:"observerAdded",query:this,observer:a}))}removeObserver(a){this.observers.includes(a)&&(this.observers=this.observers.filter(o=>o!==a),this.observers.length||(this.#r&&(this.#i?this.#r.cancel({revert:!0}):this.#r.cancelRetry()),this.scheduleGc()),this.#t.notify({type:"observerRemoved",query:this,observer:a}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#s({type:"invalidate"})}async fetch(a,o){if(this.state.fetchStatus!=="idle"&&this.#r?.status()!=="rejected"){if(this.state.data!==void 0&&o?.cancelRefetch)this.cancel({silent:!0});else if(this.#r)return this.#r.continueRetry(),this.#r.promise}if(a&&this.setOptions(a),!this.options.queryFn){const h=this.observers.find(g=>g.options.queryFn);h&&this.setOptions(h.options)}const n=new AbortController,i=h=>{Object.defineProperty(h,"signal",{enumerable:!0,get:()=>(this.#i=!0,n.signal)})},d=()=>{const h=Zg(this.options,o),x=(()=>{const b={client:this.#o,queryKey:this.queryKey,meta:this.meta};return i(b),b})();return this.#i=!1,this.options.persister?this.options.persister(h,x,this):h(x)},m=(()=>{const h={fetchOptions:o,options:this.options,queryKey:this.queryKey,client:this.#o,state:this.state,fetchFn:d};return i(h),h})();this.options.behavior?.onFetch(m,this),this.#a=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==m.fetchOptions?.meta)&&this.#s({type:"fetch",meta:m.fetchOptions?.meta}),this.#r=Wg({initialPromise:o?.initialPromise,fn:m.fetchFn,onCancel:h=>{h instanceof Ou&&h.revert&&this.setState({...this.#a,fetchStatus:"idle"}),n.abort()},onFail:(h,g)=>{this.#s({type:"failed",failureCount:h,error:g})},onPause:()=>{this.#s({type:"pause"})},onContinue:()=>{this.#s({type:"continue"})},retry:m.options.retry,retryDelay:m.options.retryDelay,networkMode:m.options.networkMode,canRun:()=>!0});try{const h=await this.#r.start();if(h===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(h),this.#t.config.onSuccess?.(h,this),this.#t.config.onSettled?.(h,this.state.error,this),h}catch(h){if(h instanceof Ou){if(h.silent)return this.#r.promise;if(h.revert){if(this.state.data===void 0)throw h;return this.state.data}}throw this.#s({type:"error",error:h}),this.#t.config.onError?.(h,this),this.#t.config.onSettled?.(this.state.data,h,this),h}finally{this.scheduleGc()}}#s(a){const o=n=>{switch(a.type){case"failed":return{...n,fetchFailureCount:a.failureCount,fetchFailureReason:a.error};case"pause":return{...n,fetchStatus:"paused"};case"continue":return{...n,fetchStatus:"fetching"};case"fetch":return{...n,...NS(n.data,this.options),fetchMeta:a.meta??null};case"success":const i={...n,...ox(a.data,a.dataUpdatedAt),dataUpdateCount:n.dataUpdateCount+1,...!a.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#a=a.manual?i:void 0,i;case"error":const d=a.error;return{...n,error:d,errorUpdateCount:n.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:n.fetchFailureCount+1,fetchFailureReason:d,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...n,isInvalidated:!0};case"setState":return{...n,...a.state}}};this.state=o(this.state),pt.batch(()=>{this.observers.forEach(n=>{n.onQueryUpdate()}),this.#t.notify({query:this,type:"updated",action:a})})}};function NS(a,o){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Jg(o.networkMode)?"fetching":"paused",...a===void 0&&{error:null,status:"pending"}}}function ox(a,o){return{data:a,dataUpdatedAt:o??Date.now(),error:null,isInvalidated:!1,status:"success"}}function sx(a){const o=typeof a.initialData=="function"?a.initialData():a.initialData,n=o!==void 0,i=n?typeof a.initialDataUpdatedAt=="function"?a.initialDataUpdatedAt():a.initialDataUpdatedAt:0;return{data:o,dataUpdateCount:0,dataUpdatedAt:n?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}function nx(a){return{onFetch:(o,n)=>{const i=o.options,d=o.fetchOptions?.meta?.fetchMore?.direction,f=o.state.data?.pages||[],m=o.state.data?.pageParams||[];let h={pages:[],pageParams:[]},g=0;const x=async()=>{let b=!1;const S=C=>{RS(C,()=>o.signal,()=>b=!0)},y=Zg(o.options,o.fetchOptions),R=async(C,N,L)=>{if(b)return Promise.reject();if(N==null&&C.pages.length)return Promise.resolve(C);const G=(()=>{const K={client:o.client,queryKey:o.queryKey,pageParam:N,direction:L?"backward":"forward",meta:o.options.meta};return S(K),K})(),H=await y(G),{maxPages:I}=o.options,P=L?ES:AS;return{pages:P(C.pages,H,I),pageParams:P(C.pageParams,N,I)}};if(d&&f.length){const C=d==="backward",N=C?qS:ix,L={pages:f,pageParams:m},F=N(i,L);h=await R(L,F,C)}else{const C=a??f.length;do{const N=g===0?m[0]??i.initialPageParam:ix(i,h);if(g>0&&N==null)break;h=await R(h,N),g++}while(g<C)}return h};o.options.persister?o.fetchFn=()=>o.options.persister?.(x,{client:o.client,queryKey:o.queryKey,meta:o.options.meta,signal:o.signal},n):o.fetchFn=x}}}function ix(a,{pages:o,pageParams:n}){const i=o.length-1;return o.length>0?a.getNextPageParam(o[i],o,n[i],n):void 0}function qS(a,{pages:o,pageParams:n}){return o.length>0?a.getPreviousPageParam?.(o[0],o,n[0],n):void 0}var zS=class extends $g{#e;#a;#t;#o;constructor(a){super(),this.#e=a.client,this.mutationId=a.mutationId,this.#t=a.mutationCache,this.#a=[],this.state=a.state||LS(),this.setOptions(a.options),this.scheduleGc()}setOptions(a){this.options=a,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(a){this.#a.includes(a)||(this.#a.push(a),this.clearGcTimeout(),this.#t.notify({type:"observerAdded",mutation:this,observer:a}))}removeObserver(a){this.#a=this.#a.filter(o=>o!==a),this.scheduleGc(),this.#t.notify({type:"observerRemoved",mutation:this,observer:a})}optionalRemove(){this.#a.length||(this.state.status==="pending"?this.scheduleGc():this.#t.remove(this))}continue(){return this.#o?.continue()??this.execute(this.state.variables)}async execute(a){const o=()=>{this.#r({type:"continue"})},n={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};this.#o=Wg({fn:()=>this.options.mutationFn?this.options.mutationFn(a,n):Promise.reject(new Error("No mutationFn found")),onFail:(f,m)=>{this.#r({type:"failed",failureCount:f,error:m})},onPause:()=>{this.#r({type:"pause"})},onContinue:o,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#t.canRun(this)});const i=this.state.status==="pending",d=!this.#o.canStart();try{if(i)o();else{this.#r({type:"pending",variables:a,isPaused:d}),this.#t.config.onMutate&&await this.#t.config.onMutate(a,this,n);const m=await this.options.onMutate?.(a,n);m!==this.state.context&&this.#r({type:"pending",context:m,variables:a,isPaused:d})}const f=await this.#o.start();return await this.#t.config.onSuccess?.(f,a,this.state.context,this,n),await this.options.onSuccess?.(f,a,this.state.context,n),await this.#t.config.onSettled?.(f,null,this.state.variables,this.state.context,this,n),await this.options.onSettled?.(f,null,a,this.state.context,n),this.#r({type:"success",data:f}),f}catch(f){try{await this.#t.config.onError?.(f,a,this.state.context,this,n)}catch(m){Promise.reject(m)}try{await this.options.onError?.(f,a,this.state.context,n)}catch(m){Promise.reject(m)}try{await this.#t.config.onSettled?.(void 0,f,this.state.variables,this.state.context,this,n)}catch(m){Promise.reject(m)}try{await this.options.onSettled?.(void 0,f,a,this.state.context,n)}catch(m){Promise.reject(m)}throw this.#r({type:"error",error:f}),f}finally{this.#t.runNext(this)}}#r(a){const o=n=>{switch(a.type){case"failed":return{...n,failureCount:a.failureCount,failureReason:a.error};case"pause":return{...n,isPaused:!0};case"continue":return{...n,isPaused:!1};case"pending":return{...n,context:a.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:a.isPaused,status:"pending",variables:a.variables,submittedAt:Date.now()};case"success":return{...n,data:a.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...n,data:void 0,error:a.error,failureCount:n.failureCount+1,failureReason:a.error,isPaused:!1,status:"error"}}};this.state=o(this.state),pt.batch(()=>{this.#a.forEach(n=>{n.onMutationUpdate(a)}),this.#t.notify({mutation:this,type:"updated",action:a})})}};function LS(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var VS=class extends Li{constructor(a={}){super(),this.config=a,this.#e=new Set,this.#a=new Map,this.#t=0}#e;#a;#t;build(a,o,n){const i=new zS({client:a,mutationCache:this,mutationId:++this.#t,options:a.defaultMutationOptions(o),state:n});return this.add(i),i}add(a){this.#e.add(a);const o=li(a);if(typeof o=="string"){const n=this.#a.get(o);n?n.push(a):this.#a.set(o,[a])}this.notify({type:"added",mutation:a})}remove(a){if(this.#e.delete(a)){const o=li(a);if(typeof o=="string"){const n=this.#a.get(o);if(n)if(n.length>1){const i=n.indexOf(a);i!==-1&&n.splice(i,1)}else n[0]===a&&this.#a.delete(o)}}this.notify({type:"removed",mutation:a})}canRun(a){const o=li(a);if(typeof o=="string"){const i=this.#a.get(o)?.find(d=>d.state.status==="pending");return!i||i===a}else return!0}runNext(a){const o=li(a);return typeof o=="string"?this.#a.get(o)?.find(i=>i!==a&&i.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){pt.batch(()=>{this.#e.forEach(a=>{this.notify({type:"removed",mutation:a})}),this.#e.clear(),this.#a.clear()})}getAll(){return Array.from(this.#e)}find(a){const o={exact:!0,...a};return this.getAll().find(n=>tx(o,n))}findAll(a={}){return this.getAll().filter(o=>tx(a,o))}notify(a){pt.batch(()=>{this.listeners.forEach(o=>{o(a)})})}resumePausedMutations(){const a=this.getAll().filter(o=>o.state.isPaused);return pt.batch(()=>Promise.all(a.map(o=>o.continue().catch(Zt))))}};function li(a){return a.options.scope?.id}var PS=class extends Li{constructor(a={}){super(),this.config=a,this.#e=new Map}#e;build(a,o,n){const i=o.queryKey,d=o.queryHash??sd(i,o);let f=this.get(d);return f||(f=new wS({client:a,queryKey:i,queryHash:d,options:a.defaultQueryOptions(o),state:n,defaultOptions:a.getQueryDefaults(i)}),this.add(f)),f}add(a){this.#e.has(a.queryHash)||(this.#e.set(a.queryHash,a),this.notify({type:"added",query:a}))}remove(a){const o=this.#e.get(a.queryHash);o&&(a.destroy(),o===a&&this.#e.delete(a.queryHash),this.notify({type:"removed",query:a}))}clear(){pt.batch(()=>{this.getAll().forEach(a=>{this.remove(a)})})}get(a){return this.#e.get(a)}getAll(){return[...this.#e.values()]}find(a){const o={exact:!0,...a};return this.getAll().find(n=>ex(o,n))}findAll(a={}){const o=this.getAll();return Object.keys(a).length>0?o.filter(n=>ex(a,n)):o}notify(a){pt.batch(()=>{this.listeners.forEach(o=>{o(a)})})}onFocus(){pt.batch(()=>{this.getAll().forEach(a=>{a.onFocus()})})}onOnline(){pt.batch(()=>{this.getAll().forEach(a=>{a.onOnline()})})}},BS=class{#e;#a;#t;#o;#r;#n;#i;#s;constructor(a={}){this.#e=a.queryCache||new PS,this.#a=a.mutationCache||new VS,this.#t=a.defaultOptions||{},this.#o=new Map,this.#r=new Map,this.#n=0}mount(){this.#n++,this.#n===1&&(this.#i=Kg.subscribe(async a=>{a&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#s=ji.subscribe(async a=>{a&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#n--,this.#n===0&&(this.#i?.(),this.#i=void 0,this.#s?.(),this.#s=void 0)}isFetching(a){return this.#e.findAll({...a,fetchStatus:"fetching"}).length}isMutating(a){return this.#a.findAll({...a,status:"pending"}).length}getQueryData(a){const o=this.defaultQueryOptions({queryKey:a});return this.#e.get(o.queryHash)?.state.data}ensureQueryData(a){const o=this.defaultQueryOptions(a),n=this.#e.build(this,o),i=n.state.data;return i===void 0?this.fetchQuery(a):(a.revalidateIfStale&&n.isStaleByTime(Cu(o.staleTime,n))&&this.prefetchQuery(o),Promise.resolve(i))}getQueriesData(a){return this.#e.findAll(a).map(({queryKey:o,state:n})=>{const i=n.data;return[o,i]})}setQueryData(a,o,n){const i=this.defaultQueryOptions({queryKey:a}),f=this.#e.get(i.queryHash)?.state.data,m=xS(o,f);if(m!==void 0)return this.#e.build(this,i).setData(m,{...n,manual:!0})}setQueriesData(a,o,n){return pt.batch(()=>this.#e.findAll(a).map(({queryKey:i})=>[i,this.setQueryData(i,o,n)]))}getQueryState(a){const o=this.defaultQueryOptions({queryKey:a});return this.#e.get(o.queryHash)?.state}removeQueries(a){const o=this.#e;pt.batch(()=>{o.findAll(a).forEach(n=>{o.remove(n)})})}resetQueries(a,o){const n=this.#e;return pt.batch(()=>(n.findAll(a).forEach(i=>{i.reset()}),this.refetchQueries({type:"active",...a},o)))}cancelQueries(a,o={}){const n={revert:!0,...o},i=pt.batch(()=>this.#e.findAll(a).map(d=>d.cancel(n)));return Promise.all(i).then(Zt).catch(Zt)}invalidateQueries(a,o={}){return pt.batch(()=>(this.#e.findAll(a).forEach(n=>{n.invalidate()}),a?.refetchType==="none"?Promise.resolve():this.refetchQueries({...a,type:a?.refetchType??a?.type??"active"},o)))}refetchQueries(a,o={}){const n={...o,cancelRefetch:o.cancelRefetch??!0},i=pt.batch(()=>this.#e.findAll(a).filter(d=>!d.isDisabled()&&!d.isStatic()).map(d=>{let f=d.fetch(void 0,n);return n.throwOnError||(f=f.catch(Zt)),d.state.fetchStatus==="paused"?Promise.resolve():f}));return Promise.all(i).then(Zt)}fetchQuery(a){const o=this.defaultQueryOptions(a);o.retry===void 0&&(o.retry=!1);const n=this.#e.build(this,o);return n.isStaleByTime(Cu(o.staleTime,n))?n.fetch(o):Promise.resolve(n.state.data)}prefetchQuery(a){return this.fetchQuery(a).then(Zt).catch(Zt)}fetchInfiniteQuery(a){return a.behavior=nx(a.pages),this.fetchQuery(a)}prefetchInfiniteQuery(a){return this.fetchInfiniteQuery(a).then(Zt).catch(Zt)}ensureInfiniteQueryData(a){return a.behavior=nx(a.pages),this.ensureQueryData(a)}resumePausedMutations(){return ji.isOnline()?this.#a.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#a}getDefaultOptions(){return this.#t}setDefaultOptions(a){this.#t=a}setQueryDefaults(a,o){this.#o.set(Ls(a),{queryKey:a,defaultOptions:o})}getQueryDefaults(a){const o=[...this.#o.values()],n={};return o.forEach(i=>{Vs(a,i.queryKey)&&Object.assign(n,i.defaultOptions)}),n}setMutationDefaults(a,o){this.#r.set(Ls(a),{mutationKey:a,defaultOptions:o})}getMutationDefaults(a){const o=[...this.#r.values()],n={};return o.forEach(i=>{Vs(a,i.mutationKey)&&Object.assign(n,i.defaultOptions)}),n}defaultQueryOptions(a){if(a._defaulted)return a;const o={...this.#t.queries,...this.getQueryDefaults(a.queryKey),...a,_defaulted:!0};return o.queryHash||(o.queryHash=sd(o.queryKey,o)),o.refetchOnReconnect===void 0&&(o.refetchOnReconnect=o.networkMode!=="always"),o.throwOnError===void 0&&(o.throwOnError=!!o.suspense),!o.networkMode&&o.persister&&(o.networkMode="offlineFirst"),o.queryFn===nd&&(o.enabled=!1),o}defaultMutationOptions(a){return a?._defaulted?a:{...this.#t.mutations,...a?.mutationKey&&this.getMutationDefaults(a.mutationKey),...a,_defaulted:!0}}clear(){this.#e.clear(),this.#a.clear()}},XS=z.createContext(void 0),US=({client:a,children:o})=>(z.useEffect(()=>(a.mount(),()=>{a.unmount()}),[a]),l.jsx(XS.Provider,{value:a,children:o})),kS=(a,o,n,i,d,f,m,h)=>{let g=document.documentElement,x=["light","dark"];function b(R){(Array.isArray(a)?a:[a]).forEach(C=>{let N=C==="class",L=N&&f?d.map(F=>f[F]||F):d;N?(g.classList.remove(...L),g.classList.add(f&&f[R]?f[R]:R)):g.setAttribute(C,R)}),S(R)}function S(R){h&&x.includes(R)&&(g.style.colorScheme=R)}function y(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(i)b(i);else try{let R=localStorage.getItem(o)||n,C=m&&R==="system"?y():R;b(C)}catch{}},lx=["light","dark"],eb="(prefers-color-scheme: dark)",FS=typeof window>"u",id=z.createContext(void 0),HS={setTheme:a=>{},themes:[]},GS=()=>{var a;return(a=z.useContext(id))!=null?a:HS},IS=a=>z.useContext(id)?z.createElement(z.Fragment,null,a.children):z.createElement(QS,{...a}),YS=["light","dark"],QS=({forcedTheme:a,disableTransitionOnChange:o=!1,enableSystem:n=!0,enableColorScheme:i=!0,storageKey:d="theme",themes:f=YS,defaultTheme:m=n?"system":"light",attribute:h="data-theme",value:g,children:x,nonce:b,scriptProps:S})=>{let[y,R]=z.useState(()=>KS(d,m)),[C,N]=z.useState(()=>y==="system"?iu():y),L=g?Object.values(g):f,F=z.useCallback(P=>{let K=P;if(!K)return;P==="system"&&n&&(K=iu());let ce=g?g[K]:K,X=o?JS(b):null,W=document.documentElement,je=_e=>{_e==="class"?(W.classList.remove(...L),ce&&W.classList.add(ce)):_e.startsWith("data-")&&(ce?W.setAttribute(_e,ce):W.removeAttribute(_e))};if(Array.isArray(h)?h.forEach(je):je(h),i){let _e=lx.includes(m)?m:null,Ae=lx.includes(K)?K:_e;W.style.colorScheme=Ae}X?.()},[b]),G=z.useCallback(P=>{let K=typeof P=="function"?P(y):P;R(K);try{localStorage.setItem(d,K)}catch{}},[y]),H=z.useCallback(P=>{let K=iu(P);N(K),y==="system"&&n&&!a&&F("system")},[y,a]);z.useEffect(()=>{let P=window.matchMedia(eb);return P.addListener(H),H(P),()=>P.removeListener(H)},[H]),z.useEffect(()=>{let P=K=>{K.key===d&&(K.newValue?R(K.newValue):G(m))};return window.addEventListener("storage",P),()=>window.removeEventListener("storage",P)},[G]),z.useEffect(()=>{F(a??y)},[a,y]);let I=z.useMemo(()=>({theme:y,setTheme:G,forcedTheme:a,resolvedTheme:y==="system"?C:y,themes:n?[...f,"system"]:f,systemTheme:n?C:void 0}),[y,G,a,C,n,f]);return z.createElement(id.Provider,{value:I},z.createElement(ZS,{forcedTheme:a,storageKey:d,attribute:h,enableSystem:n,enableColorScheme:i,defaultTheme:m,value:g,themes:f,nonce:b,scriptProps:S}),x)},ZS=z.memo(({forcedTheme:a,storageKey:o,attribute:n,enableSystem:i,enableColorScheme:d,defaultTheme:f,value:m,themes:h,nonce:g,scriptProps:x})=>{let b=JSON.stringify([n,o,f,a,h,m,i,d]).slice(1,-1);return z.createElement("script",{...x,suppressHydrationWarning:!0,nonce:typeof window>"u"?g:"",dangerouslySetInnerHTML:{__html:`(${kS.toString()})(${b})`}})}),KS=(a,o)=>{if(FS)return;let n;try{n=localStorage.getItem(a)||void 0}catch{}return n||o},JS=a=>{let o=document.createElement("style");return a&&o.setAttribute("nonce",a),o.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(o),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(o)},1)}},iu=a=>(a||(a=window.matchMedia(eb)),a.matches?"dark":"light");const ld=z.createContext({});function cd(a){const o=z.useRef(null);return o.current===null&&(o.current=a()),o.current}const WS=typeof window<"u",tb=WS?z.useLayoutEffect:z.useEffect,Pi=z.createContext(null);function ud(a,o){a.indexOf(o)===-1&&a.push(o)}function Ai(a,o){const n=a.indexOf(o);n>-1&&a.splice(n,1)}const ia=(a,o,n)=>n>o?o:n<a?a:n;let dd=()=>{};const Ra={},ab=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a);function rb(a){return typeof a=="object"&&a!==null}const ob=a=>/^0[^.\s]+$/u.test(a);function sb(a){let o;return()=>(o===void 0&&(o=a()),o)}const Ft=a=>a,$S=(a,o)=>n=>o(a(n)),Fs=(...a)=>a.reduce($S),Ps=(a,o,n)=>{const i=o-a;return i===0?1:(n-a)/i};class md{constructor(){this.subscriptions=[]}add(o){return ud(this.subscriptions,o),()=>Ai(this.subscriptions,o)}notify(o,n,i){const d=this.subscriptions.length;if(d)if(d===1)this.subscriptions[0](o,n,i);else for(let f=0;f<d;f++){const m=this.subscriptions[f];m&&m(o,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Kt=a=>a*1e3,kt=a=>a/1e3;function nb(a,o){return o?a*(1e3/o):0}const ib=(a,o,n)=>(((1-3*n+3*o)*a+(3*n-6*o))*a+3*o)*a,e2=1e-7,t2=12;function a2(a,o,n,i,d){let f,m,h=0;do m=o+(n-o)/2,f=ib(m,i,d)-a,f>0?n=m:o=m;while(Math.abs(f)>e2&&++h<t2);return m}function Hs(a,o,n,i){if(a===o&&n===i)return Ft;const d=f=>a2(f,0,1,a,n);return f=>f===0||f===1?f:ib(d(f),o,i)}const lb=a=>o=>o<=.5?a(2*o)/2:(2-a(2*(1-o)))/2,cb=a=>o=>1-a(1-o),ub=Hs(.33,1.53,.69,.99),fd=cb(ub),db=lb(fd),mb=a=>(a*=2)<1?.5*fd(a):.5*(2-Math.pow(2,-10*(a-1))),hd=a=>1-Math.sin(Math.acos(a)),fb=cb(hd),hb=lb(hd),r2=Hs(.42,0,1,1),o2=Hs(0,0,.58,1),pb=Hs(.42,0,.58,1),s2=a=>Array.isArray(a)&&typeof a[0]!="number",xb=a=>Array.isArray(a)&&typeof a[0]=="number",n2={linear:Ft,easeIn:r2,easeInOut:pb,easeOut:o2,circIn:hd,circInOut:hb,circOut:fb,backIn:fd,backInOut:db,backOut:ub,anticipate:mb},i2=a=>typeof a=="string",cx=a=>{if(xb(a)){dd(a.length===4);const[o,n,i,d]=a;return Hs(o,n,i,d)}else if(i2(a))return n2[a];return a},ci=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function l2(a,o){let n=new Set,i=new Set,d=!1,f=!1;const m=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function g(b){m.has(b)&&(x.schedule(b),a()),b(h)}const x={schedule:(b,S=!1,y=!1)=>{const C=y&&d?n:i;return S&&m.add(b),C.has(b)||C.add(b),b},cancel:b=>{i.delete(b),m.delete(b)},process:b=>{if(h=b,d){f=!0;return}d=!0,[n,i]=[i,n],n.forEach(g),n.clear(),d=!1,f&&(f=!1,x.process(b))}};return x}const c2=40;function gb(a,o){let n=!1,i=!0;const d={delta:0,timestamp:0,isProcessing:!1},f=()=>n=!0,m=ci.reduce((H,I)=>(H[I]=l2(f),H),{}),{setup:h,read:g,resolveKeyframes:x,preUpdate:b,update:S,preRender:y,render:R,postRender:C}=m,N=()=>{const H=Ra.useManualTiming?d.timestamp:performance.now();n=!1,Ra.useManualTiming||(d.delta=i?1e3/60:Math.max(Math.min(H-d.timestamp,c2),1)),d.timestamp=H,d.isProcessing=!0,h.process(d),g.process(d),x.process(d),b.process(d),S.process(d),y.process(d),R.process(d),C.process(d),d.isProcessing=!1,n&&o&&(i=!1,a(N))},L=()=>{n=!0,i=!0,d.isProcessing||a(N)};return{schedule:ci.reduce((H,I)=>{const P=m[I];return H[I]=(K,ce=!1,X=!1)=>(n||L(),P.schedule(K,ce,X)),H},{}),cancel:H=>{for(let I=0;I<ci.length;I++)m[ci[I]].cancel(H)},state:d,steps:m}}const{schedule:Ve,cancel:ar,state:lt,steps:lu}=gb(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ft,!0);let pi;function u2(){pi=void 0}const xt={now:()=>(pi===void 0&&xt.set(lt.isProcessing||Ra.useManualTiming?lt.timestamp:performance.now()),pi),set:a=>{pi=a,queueMicrotask(u2)}},bb=a=>o=>typeof o=="string"&&o.startsWith(a),vb=bb("--"),d2=bb("var(--"),pd=a=>d2(a)?m2.test(a.split("/*")[0].trim()):!1,m2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function ux(a){return typeof a!="string"?!1:a.split("/*")[0].includes("var(--")}const To={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},Bs={...To,transform:a=>ia(0,1,a)},ui={...To,default:1},ws=a=>Math.round(a*1e5)/1e5,xd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function f2(a){return a==null}const h2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,gd=(a,o)=>n=>!!(typeof n=="string"&&h2.test(n)&&n.startsWith(a)||o&&!f2(n)&&Object.prototype.hasOwnProperty.call(n,o)),yb=(a,o,n)=>i=>{if(typeof i!="string")return i;const[d,f,m,h]=i.match(xd);return{[a]:parseFloat(d),[o]:parseFloat(f),[n]:parseFloat(m),alpha:h!==void 0?parseFloat(h):1}},p2=a=>ia(0,255,a),cu={...To,transform:a=>Math.round(p2(a))},Cr={test:gd("rgb","red"),parse:yb("red","green","blue"),transform:({red:a,green:o,blue:n,alpha:i=1})=>"rgba("+cu.transform(a)+", "+cu.transform(o)+", "+cu.transform(n)+", "+ws(Bs.transform(i))+")"};function x2(a){let o="",n="",i="",d="";return a.length>5?(o=a.substring(1,3),n=a.substring(3,5),i=a.substring(5,7),d=a.substring(7,9)):(o=a.substring(1,2),n=a.substring(2,3),i=a.substring(3,4),d=a.substring(4,5),o+=o,n+=n,i+=i,d+=d),{red:parseInt(o,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:d?parseInt(d,16)/255:1}}const Du={test:gd("#"),parse:x2,transform:Cr.transform},Gs=a=>({test:o=>typeof o=="string"&&o.endsWith(a)&&o.split(" ").length===1,parse:parseFloat,transform:o=>`${o}${a}`}),er=Gs("deg"),na=Gs("%"),te=Gs("px"),g2=Gs("vh"),b2=Gs("vw"),dx={...na,parse:a=>na.parse(a)/100,transform:a=>na.transform(a*100)},vo={test:gd("hsl","hue"),parse:yb("hue","saturation","lightness"),transform:({hue:a,saturation:o,lightness:n,alpha:i=1})=>"hsla("+Math.round(a)+", "+na.transform(ws(o))+", "+na.transform(ws(n))+", "+ws(Bs.transform(i))+")"},Ze={test:a=>Cr.test(a)||Du.test(a)||vo.test(a),parse:a=>Cr.test(a)?Cr.parse(a):vo.test(a)?vo.parse(a):Du.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?Cr.transform(a):vo.transform(a),getAnimatableNone:a=>{const o=Ze.parse(a);return o.alpha=0,Ze.transform(o)}},v2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function y2(a){return isNaN(a)&&typeof a=="string"&&(a.match(xd)?.length||0)+(a.match(v2)?.length||0)>0}const Sb="number",jb="color",S2="var",j2="var(",mx="${}",A2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Xs(a){const o=a.toString(),n=[],i={color:[],number:[],var:[]},d=[];let f=0;const h=o.replace(A2,g=>(Ze.test(g)?(i.color.push(f),d.push(jb),n.push(Ze.parse(g))):g.startsWith(j2)?(i.var.push(f),d.push(S2),n.push(g)):(i.number.push(f),d.push(Sb),n.push(parseFloat(g))),++f,mx)).split(mx);return{values:n,split:h,indexes:i,types:d}}function Ab(a){return Xs(a).values}function Eb(a){const{split:o,types:n}=Xs(a),i=o.length;return d=>{let f="";for(let m=0;m<i;m++)if(f+=o[m],d[m]!==void 0){const h=n[m];h===Sb?f+=ws(d[m]):h===jb?f+=Ze.transform(d[m]):f+=d[m]}return f}}const E2=a=>typeof a=="number"?0:Ze.test(a)?Ze.getAnimatableNone(a):a;function R2(a){const o=Ab(a);return Eb(a)(o.map(E2))}const Jt={test:y2,parse:Ab,createTransformer:Eb,getAnimatableNone:R2};function uu(a,o,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(o-a)*6*n:n<1/2?o:n<2/3?a+(o-a)*(2/3-n)*6:a}function T2({hue:a,saturation:o,lightness:n,alpha:i}){a/=360,o/=100,n/=100;let d=0,f=0,m=0;if(!o)d=f=m=n;else{const h=n<.5?n*(1+o):n+o-n*o,g=2*n-h;d=uu(g,h,a+1/3),f=uu(g,h,a),m=uu(g,h,a-1/3)}return{red:Math.round(d*255),green:Math.round(f*255),blue:Math.round(m*255),alpha:i}}function Ei(a,o){return n=>n>0?o:a}const Xe=(a,o,n)=>a+(o-a)*n,du=(a,o,n)=>{const i=a*a,d=n*(o*o-i)+i;return d<0?0:Math.sqrt(d)},C2=[Du,Cr,vo],M2=a=>C2.find(o=>o.test(a));function fx(a){const o=M2(a);if(!o)return!1;let n=o.parse(a);return o===vo&&(n=T2(n)),n}const hx=(a,o)=>{const n=fx(a),i=fx(o);if(!n||!i)return Ei(a,o);const d={...n};return f=>(d.red=du(n.red,i.red,f),d.green=du(n.green,i.green,f),d.blue=du(n.blue,i.blue,f),d.alpha=Xe(n.alpha,i.alpha,f),Cr.transform(d))},_u=new Set(["none","hidden"]);function O2(a,o){return _u.has(a)?n=>n<=0?a:o:n=>n>=1?o:a}function D2(a,o){return n=>Xe(a,o,n)}function bd(a){return typeof a=="number"?D2:typeof a=="string"?pd(a)?Ei:Ze.test(a)?hx:N2:Array.isArray(a)?Rb:typeof a=="object"?Ze.test(a)?hx:_2:Ei}function Rb(a,o){const n=[...a],i=n.length,d=a.map((f,m)=>bd(f)(f,o[m]));return f=>{for(let m=0;m<i;m++)n[m]=d[m](f);return n}}function _2(a,o){const n={...a,...o},i={};for(const d in n)a[d]!==void 0&&o[d]!==void 0&&(i[d]=bd(a[d])(a[d],o[d]));return d=>{for(const f in i)n[f]=i[f](d);return n}}function w2(a,o){const n=[],i={color:0,var:0,number:0};for(let d=0;d<o.values.length;d++){const f=o.types[d],m=a.indexes[f][i[f]],h=a.values[m]??0;n[d]=h,i[f]++}return n}const N2=(a,o)=>{const n=Jt.createTransformer(o),i=Xs(a),d=Xs(o);return i.indexes.var.length===d.indexes.var.length&&i.indexes.color.length===d.indexes.color.length&&i.indexes.number.length>=d.indexes.number.length?_u.has(a)&&!d.values.length||_u.has(o)&&!i.values.length?O2(a,o):Fs(Rb(w2(i,d),d.values),n):Ei(a,o)};function Tb(a,o,n){return typeof a=="number"&&typeof o=="number"&&typeof n=="number"?Xe(a,o,n):bd(a)(a,o)}const q2=a=>{const o=({timestamp:n})=>a(n);return{start:(n=!0)=>Ve.update(o,n),stop:()=>ar(o),now:()=>lt.isProcessing?lt.timestamp:xt.now()}},Cb=(a,o,n=10)=>{let i="";const d=Math.max(Math.round(o/n),2);for(let f=0;f<d;f++)i+=Math.round(a(f/(d-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},Ri=2e4;function vd(a){let o=0;const n=50;let i=a.next(o);for(;!i.done&&o<Ri;)o+=n,i=a.next(o);return o>=Ri?1/0:o}function z2(a,o=100,n){const i=n({...a,keyframes:[0,o]}),d=Math.min(vd(i),Ri);return{type:"keyframes",ease:f=>i.next(d*f).value/o,duration:kt(d)}}const L2=5;function Mb(a,o,n){const i=Math.max(o-L2,0);return nb(n-a(i),o-i)}const He={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},mu=.001;function V2({duration:a=He.duration,bounce:o=He.bounce,velocity:n=He.velocity,mass:i=He.mass}){let d,f,m=1-o;m=ia(He.minDamping,He.maxDamping,m),a=ia(He.minDuration,He.maxDuration,kt(a)),m<1?(d=x=>{const b=x*m,S=b*a,y=b-n,R=wu(x,m),C=Math.exp(-S);return mu-y/R*C},f=x=>{const S=x*m*a,y=S*n+n,R=Math.pow(m,2)*Math.pow(x,2)*a,C=Math.exp(-S),N=wu(Math.pow(x,2),m);return(-d(x)+mu>0?-1:1)*((y-R)*C)/N}):(d=x=>{const b=Math.exp(-x*a),S=(x-n)*a+1;return-mu+b*S},f=x=>{const b=Math.exp(-x*a),S=(n-x)*(a*a);return b*S});const h=5/a,g=B2(d,f,h);if(a=Kt(a),isNaN(g))return{stiffness:He.stiffness,damping:He.damping,duration:a};{const x=Math.pow(g,2)*i;return{stiffness:x,damping:m*2*Math.sqrt(i*x),duration:a}}}const P2=12;function B2(a,o,n){let i=n;for(let d=1;d<P2;d++)i=i-a(i)/o(i);return i}function wu(a,o){return a*Math.sqrt(1-o*o)}const X2=["duration","bounce"],U2=["stiffness","damping","mass"];function px(a,o){return o.some(n=>a[n]!==void 0)}function k2(a){let o={velocity:He.velocity,stiffness:He.stiffness,damping:He.damping,mass:He.mass,isResolvedFromDuration:!1,...a};if(!px(a,U2)&&px(a,X2))if(o.velocity=0,a.visualDuration){const n=a.visualDuration,i=2*Math.PI/(n*1.2),d=i*i,f=2*ia(.05,1,1-(a.bounce||0))*Math.sqrt(d);o={...o,mass:He.mass,stiffness:d,damping:f}}else{const n=V2({...a,velocity:0});o={...o,...n,mass:He.mass},o.isResolvedFromDuration=!0}return o}function Ti(a=He.visualDuration,o=He.bounce){const n=typeof a!="object"?{visualDuration:a,keyframes:[0,1],bounce:o}:a;let{restSpeed:i,restDelta:d}=n;const f=n.keyframes[0],m=n.keyframes[n.keyframes.length-1],h={done:!1,value:f},{stiffness:g,damping:x,mass:b,duration:S,velocity:y,isResolvedFromDuration:R}=k2({...n,velocity:-kt(n.velocity||0)}),C=y||0,N=x/(2*Math.sqrt(g*b)),L=m-f,F=kt(Math.sqrt(g/b)),G=Math.abs(L)<5;i||(i=G?He.restSpeed.granular:He.restSpeed.default),d||(d=G?He.restDelta.granular:He.restDelta.default);let H;if(N<1){const P=wu(F,N);H=K=>{const ce=Math.exp(-N*F*K);return m-ce*((C+N*F*L)/P*Math.sin(P*K)+L*Math.cos(P*K))}}else if(N===1)H=P=>m-Math.exp(-F*P)*(L+(C+F*L)*P);else{const P=F*Math.sqrt(N*N-1);H=K=>{const ce=Math.exp(-N*F*K),X=Math.min(P*K,300);return m-ce*((C+N*F*L)*Math.sinh(X)+P*L*Math.cosh(X))/P}}const I={calculatedDuration:R&&S||null,next:P=>{const K=H(P);if(R)h.done=P>=S;else{let ce=P===0?C:0;N<1&&(ce=P===0?Kt(C):Mb(H,P,K));const X=Math.abs(ce)<=i,W=Math.abs(m-K)<=d;h.done=X&&W}return h.value=h.done?m:K,h},toString:()=>{const P=Math.min(vd(I),Ri),K=Cb(ce=>I.next(P*ce).value,P,30);return P+"ms "+K},toTransition:()=>{}};return I}Ti.applyToOptions=a=>{const o=z2(a,100,Ti);return a.ease=o.ease,a.duration=Kt(o.duration),a.type="keyframes",a};function Nu({keyframes:a,velocity:o=0,power:n=.8,timeConstant:i=325,bounceDamping:d=10,bounceStiffness:f=500,modifyTarget:m,min:h,max:g,restDelta:x=.5,restSpeed:b}){const S=a[0],y={done:!1,value:S},R=X=>h!==void 0&&X<h||g!==void 0&&X>g,C=X=>h===void 0?g:g===void 0||Math.abs(h-X)<Math.abs(g-X)?h:g;let N=n*o;const L=S+N,F=m===void 0?L:m(L);F!==L&&(N=F-S);const G=X=>-N*Math.exp(-X/i),H=X=>F+G(X),I=X=>{const W=G(X),je=H(X);y.done=Math.abs(W)<=x,y.value=y.done?F:je};let P,K;const ce=X=>{R(y.value)&&(P=X,K=Ti({keyframes:[y.value,C(y.value)],velocity:Mb(H,X,y.value),damping:d,stiffness:f,restDelta:x,restSpeed:b}))};return ce(0),{calculatedDuration:null,next:X=>{let W=!1;return!K&&P===void 0&&(W=!0,I(X),ce(X)),P!==void 0&&X>=P?K.next(X-P):(!W&&I(X),y)}}}function F2(a,o,n){const i=[],d=n||Ra.mix||Tb,f=a.length-1;for(let m=0;m<f;m++){let h=d(a[m],a[m+1]);if(o){const g=Array.isArray(o)?o[m]||Ft:o;h=Fs(g,h)}i.push(h)}return i}function H2(a,o,{clamp:n=!0,ease:i,mixer:d}={}){const f=a.length;if(dd(f===o.length),f===1)return()=>o[0];if(f===2&&o[0]===o[1])return()=>o[1];const m=a[0]===a[1];a[0]>a[f-1]&&(a=[...a].reverse(),o=[...o].reverse());const h=F2(o,i,d),g=h.length,x=b=>{if(m&&b<a[0])return o[0];let S=0;if(g>1)for(;S<a.length-2&&!(b<a[S+1]);S++);const y=Ps(a[S],a[S+1],b);return h[S](y)};return n?b=>x(ia(a[0],a[f-1],b)):x}function G2(a,o){const n=a[a.length-1];for(let i=1;i<=o;i++){const d=Ps(0,o,i);a.push(Xe(n,1,d))}}function I2(a){const o=[0];return G2(o,a.length-1),o}function Y2(a,o){return a.map(n=>n*o)}function Q2(a,o){return a.map(()=>o||pb).splice(0,a.length-1)}function Ns({duration:a=300,keyframes:o,times:n,ease:i="easeInOut"}){const d=s2(i)?i.map(cx):cx(i),f={done:!1,value:o[0]},m=Y2(n&&n.length===o.length?n:I2(o),a),h=H2(m,o,{ease:Array.isArray(d)?d:Q2(o,d)});return{calculatedDuration:a,next:g=>(f.value=h(g),f.done=g>=a,f)}}const Z2=a=>a!==null;function yd(a,{repeat:o,repeatType:n="loop"},i,d=1){const f=a.filter(Z2),h=d<0||o&&n!=="loop"&&o%2===1?0:f.length-1;return!h||i===void 0?f[h]:i}const K2={decay:Nu,inertia:Nu,tween:Ns,keyframes:Ns,spring:Ti};function Ob(a){typeof a.type=="string"&&(a.type=K2[a.type])}class Sd{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(o=>{this.resolve=o})}notifyFinished(){this.resolve()}then(o,n){return this.finished.then(o,n)}}const J2=a=>a/100;class jd extends Sd{constructor(o){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:n}=this.options;n&&n.updatedAt!==xt.now()&&this.tick(xt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=o,this.initAnimation(),this.play(),o.autoplay===!1&&this.pause()}initAnimation(){const{options:o}=this;Ob(o);const{type:n=Ns,repeat:i=0,repeatDelay:d=0,repeatType:f,velocity:m=0}=o;let{keyframes:h}=o;const g=n||Ns;g!==Ns&&typeof h[0]!="number"&&(this.mixKeyframes=Fs(J2,Tb(h[0],h[1])),h=[0,100]);const x=g({...o,keyframes:h});f==="mirror"&&(this.mirroredGenerator=g({...o,keyframes:[...h].reverse(),velocity:-m})),x.calculatedDuration===null&&(x.calculatedDuration=vd(x));const{calculatedDuration:b}=x;this.calculatedDuration=b,this.resolvedDuration=b+d,this.totalDuration=this.resolvedDuration*(i+1)-d,this.generator=x}updateTime(o){const n=Math.round(o-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(o,n=!1){const{generator:i,totalDuration:d,mixKeyframes:f,mirroredGenerator:m,resolvedDuration:h,calculatedDuration:g}=this;if(this.startTime===null)return i.next(0);const{delay:x=0,keyframes:b,repeat:S,repeatType:y,repeatDelay:R,type:C,onUpdate:N,finalKeyframe:L}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,o):this.speed<0&&(this.startTime=Math.min(o-d/this.speed,this.startTime)),n?this.currentTime=o:this.updateTime(o);const F=this.currentTime-x*(this.playbackSpeed>=0?1:-1),G=this.playbackSpeed>=0?F<0:F>d;this.currentTime=Math.max(F,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let H=this.currentTime,I=i;if(S){const X=Math.min(this.currentTime,d)/h;let W=Math.floor(X),je=X%1;!je&&X>=1&&(je=1),je===1&&W--,W=Math.min(W,S+1),W%2&&(y==="reverse"?(je=1-je,R&&(je-=R/h)):y==="mirror"&&(I=m)),H=ia(0,1,je)*h}const P=G?{done:!1,value:b[0]}:I.next(H);f&&!G&&(P.value=f(P.value));let{done:K}=P;!G&&g!==null&&(K=this.playbackSpeed>=0?this.currentTime>=d:this.currentTime<=0);const ce=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&K);return ce&&C!==Nu&&(P.value=yd(b,this.options,L,this.speed)),N&&N(P.value),ce&&this.finish(),P}then(o,n){return this.finished.then(o,n)}get duration(){return kt(this.calculatedDuration)}get iterationDuration(){const{delay:o=0}=this.options||{};return this.duration+kt(o)}get time(){return kt(this.currentTime)}set time(o){o=Kt(o),this.currentTime=o,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=o:this.driver&&(this.startTime=this.driver.now()-o/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=o,this.tick(o))}get speed(){return this.playbackSpeed}set speed(o){const n=this.playbackSpeed!==o;n&&this.driver&&this.updateTime(xt.now()),this.playbackSpeed=o,n&&this.driver&&(this.time=kt(this.currentTime))}play(){if(this.isStopped)return;const{driver:o=q2,startTime:n}=this.options;this.driver||(this.driver=o(d=>this.tick(d))),this.options.onPlay?.();const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(xt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(o){return this.startTime=0,this.tick(o,!0)}attachTimeline(o){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),o.observe(this)}}function W2(a){for(let o=1;o<a.length;o++)a[o]??(a[o]=a[o-1])}const Mr=a=>a*180/Math.PI,qu=a=>{const o=Mr(Math.atan2(a[1],a[0]));return zu(o)},$2={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:qu,rotateZ:qu,skewX:a=>Mr(Math.atan(a[1])),skewY:a=>Mr(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},zu=a=>(a=a%360,a<0&&(a+=360),a),xx=qu,gx=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),bx=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),ej={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:gx,scaleY:bx,scale:a=>(gx(a)+bx(a))/2,rotateX:a=>zu(Mr(Math.atan2(a[6],a[5]))),rotateY:a=>zu(Mr(Math.atan2(-a[2],a[0]))),rotateZ:xx,rotate:xx,skewX:a=>Mr(Math.atan(a[4])),skewY:a=>Mr(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function Lu(a){return a.includes("scale")?1:0}function Vu(a,o){if(!a||a==="none")return Lu(o);const n=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,d;if(n)i=ej,d=n;else{const h=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=$2,d=h}if(!d)return Lu(o);const f=i[o],m=d[1].split(",").map(aj);return typeof f=="function"?f(m):m[f]}const tj=(a,o)=>{const{transform:n="none"}=getComputedStyle(a);return Vu(n,o)};function aj(a){return parseFloat(a.trim())}const Co=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Mo=new Set(Co),vx=a=>a===To||a===te,rj=new Set(["x","y","z"]),oj=Co.filter(a=>!rj.has(a));function sj(a){const o=[];return oj.forEach(n=>{const i=a.getValue(n);i!==void 0&&(o.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),o}const tr={width:({x:a},{paddingLeft:o="0",paddingRight:n="0"})=>a.max-a.min-parseFloat(o)-parseFloat(n),height:({y:a},{paddingTop:o="0",paddingBottom:n="0"})=>a.max-a.min-parseFloat(o)-parseFloat(n),top:(a,{top:o})=>parseFloat(o),left:(a,{left:o})=>parseFloat(o),bottom:({y:a},{top:o})=>parseFloat(o)+(a.max-a.min),right:({x:a},{left:o})=>parseFloat(o)+(a.max-a.min),x:(a,{transform:o})=>Vu(o,"x"),y:(a,{transform:o})=>Vu(o,"y")};tr.translateX=tr.x;tr.translateY=tr.y;const Or=new Set;let Pu=!1,Bu=!1,Xu=!1;function Db(){if(Bu){const a=Array.from(Or).filter(i=>i.needsMeasurement),o=new Set(a.map(i=>i.element)),n=new Map;o.forEach(i=>{const d=sj(i);d.length&&(n.set(i,d),i.render())}),a.forEach(i=>i.measureInitialState()),o.forEach(i=>{i.render();const d=n.get(i);d&&d.forEach(([f,m])=>{i.getValue(f)?.set(m)})}),a.forEach(i=>i.measureEndState()),a.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Bu=!1,Pu=!1,Or.forEach(a=>a.complete(Xu)),Or.clear()}function _b(){Or.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(Bu=!0)})}function nj(){Xu=!0,_b(),Db(),Xu=!1}class Ad{constructor(o,n,i,d,f,m=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...o],this.onComplete=n,this.name=i,this.motionValue=d,this.element=f,this.isAsync=m}scheduleResolve(){this.state="scheduled",this.isAsync?(Or.add(this),Pu||(Pu=!0,Ve.read(_b),Ve.resolveKeyframes(Db))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:o,name:n,element:i,motionValue:d}=this;if(o[0]===null){const f=d?.get(),m=o[o.length-1];if(f!==void 0)o[0]=f;else if(i&&n){const h=i.readValue(n,m);h!=null&&(o[0]=h)}o[0]===void 0&&(o[0]=m),d&&f===void 0&&d.set(o[0])}W2(o)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(o=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,o),Or.delete(this)}cancel(){this.state==="scheduled"&&(Or.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const ij=a=>a.startsWith("--");function wb(a,o,n){ij(o)?a.style.setProperty(o,n):a.style[o]=n}const lj={};function Nb(a,o){const n=sb(a);return()=>lj[o]??n()}const cj=Nb(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),qb=Nb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),_s=([a,o,n,i])=>`cubic-bezier(${a}, ${o}, ${n}, ${i})`,yx={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:_s([0,.65,.55,1]),circOut:_s([.55,0,1,.45]),backIn:_s([.31,.01,.66,-.59]),backOut:_s([.33,1.53,.69,.99])};function zb(a,o){if(a)return typeof a=="function"?qb()?Cb(a,o):"ease-out":xb(a)?_s(a):Array.isArray(a)?a.map(n=>zb(n,o)||yx.easeOut):yx[a]}function uj(a,o,n,{delay:i=0,duration:d=300,repeat:f=0,repeatType:m="loop",ease:h="easeOut",times:g}={},x=void 0){const b={[o]:n};g&&(b.offset=g);const S=zb(h,d);Array.isArray(S)&&(b.easing=S);const y={delay:i,duration:d,easing:Array.isArray(S)?"linear":S,fill:"both",iterations:f+1,direction:m==="reverse"?"alternate":"normal"};return x&&(y.pseudoElement=x),a.animate(b,y)}function Lb(a){return typeof a=="function"&&"applyToOptions"in a}function dj({type:a,...o}){return Lb(a)&&qb()?a.applyToOptions(o):(o.duration??(o.duration=300),o.ease??(o.ease="easeOut"),o)}class Vb extends Sd{constructor(o){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!o)return;const{element:n,name:i,keyframes:d,pseudoElement:f,allowFlatten:m=!1,finalKeyframe:h,onComplete:g}=o;this.isPseudoElement=!!f,this.allowFlatten=m,this.options=o,dd(typeof o.type!="string");const x=dj(o);this.animation=uj(n,i,d,x,f),x.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!f){const b=yd(d,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(b),wb(n,i,b),this.animation.cancel()}g?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:o}=this;o==="idle"||o==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const o=this.options?.element;!this.isPseudoElement&&o?.isConnected&&this.animation.commitStyles?.()}get duration(){const o=this.animation.effect?.getComputedTiming?.().duration||0;return kt(Number(o))}get iterationDuration(){const{delay:o=0}=this.options||{};return this.duration+kt(o)}get time(){return kt(Number(this.animation.currentTime)||0)}set time(o){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Kt(o),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(o){o<0&&(this.finishedTime=null),this.animation.playbackRate=o}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(o){this.manualStartTime=this.animation.startTime=o}attachTimeline({timeline:o,rangeStart:n,rangeEnd:i,observe:d}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,o&&cj()?(this.animation.timeline=o,n&&(this.animation.rangeStart=n),i&&(this.animation.rangeEnd=i),Ft):d(this)}}const Pb={anticipate:mb,backInOut:db,circInOut:hb};function mj(a){return a in Pb}function fj(a){typeof a.ease=="string"&&mj(a.ease)&&(a.ease=Pb[a.ease])}const fu=10;class hj extends Vb{constructor(o){fj(o),Ob(o),super(o),o.startTime!==void 0&&(this.startTime=o.startTime),this.options=o}updateMotionValue(o){const{motionValue:n,onUpdate:i,onComplete:d,element:f,...m}=this.options;if(!n)return;if(o!==void 0){n.set(o);return}const h=new jd({...m,autoplay:!1}),g=Math.max(fu,xt.now()-this.startTime),x=ia(0,fu,g-fu),b=h.sample(g).value,{name:S}=this.options;f&&S&&wb(f,S,b),n.setWithVelocity(h.sample(Math.max(0,g-x)).value,b,x),h.stop()}}const Sx=(a,o)=>o==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&(Jt.test(a)||a==="0")&&!a.startsWith("url("));function pj(a){const o=a[0];if(a.length===1)return!0;for(let n=0;n<a.length;n++)if(a[n]!==o)return!0}function xj(a,o,n,i){const d=a[0];if(d===null)return!1;if(o==="display"||o==="visibility")return!0;const f=a[a.length-1],m=Sx(d,o),h=Sx(f,o);return!m||!h?!1:pj(a)||(n==="spring"||Lb(n))&&i}function Uu(a){a.duration=0,a.type="keyframes"}const gj=new Set(["opacity","clipPath","filter","transform"]),bj=sb(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function vj(a){const{motionValue:o,name:n,repeatDelay:i,repeatType:d,damping:f,type:m}=a;if(!(o?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:x}=o.owner.getProps();return bj()&&n&&gj.has(n)&&(n!=="transform"||!x)&&!g&&!i&&d!=="mirror"&&f!==0&&m!=="inertia"}const yj=40;class Sj extends Sd{constructor({autoplay:o=!0,delay:n=0,type:i="keyframes",repeat:d=0,repeatDelay:f=0,repeatType:m="loop",keyframes:h,name:g,motionValue:x,element:b,...S}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=xt.now();const y={autoplay:o,delay:n,type:i,repeat:d,repeatDelay:f,repeatType:m,name:g,motionValue:x,element:b,...S},R=b?.KeyframeResolver||Ad;this.keyframeResolver=new R(h,(C,N,L)=>this.onKeyframesResolved(C,N,y,!L),g,x,b),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(o,n,i,d){this.keyframeResolver=void 0;const{name:f,type:m,velocity:h,delay:g,isHandoff:x,onUpdate:b}=i;this.resolvedAt=xt.now(),xj(o,f,m,h)||((Ra.instantAnimations||!g)&&b?.(yd(o,i,n)),o[0]=o[o.length-1],Uu(i),i.repeat=0);const y={startTime:d?this.resolvedAt?this.resolvedAt-this.createdAt>yj?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:o},R=!x&&vj(y),C=y.motionValue?.owner?.current,N=R?new hj({...y,element:C}):new jd(y);N.finished.then(()=>{this.notifyFinished()}).catch(Ft),this.pendingTimeline&&(this.stopTimeline=N.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=N}get finished(){return this._animation?this.animation.finished:this._finished}then(o,n){return this.finished.finally(o).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),nj()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(o){this.animation.time=o}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(o){this.animation.speed=o}get startTime(){return this.animation.startTime}attachTimeline(o){return this._animation?this.stopTimeline=this.animation.attachTimeline(o):this.pendingTimeline=o,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function Bb(a,o,n,i=0,d=1){const f=Array.from(a).sort((x,b)=>x.sortNodePosition(b)).indexOf(o),m=a.size,h=(m-1)*i;return typeof n=="function"?n(f,m):d===1?f*i:h-f*i}const jj=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Aj(a){const o=jj.exec(a);if(!o)return[,];const[,n,i,d]=o;return[`--${n??i}`,d]}function Xb(a,o,n=1){const[i,d]=Aj(a);if(!i)return;const f=window.getComputedStyle(o).getPropertyValue(i);if(f){const m=f.trim();return ab(m)?parseFloat(m):m}return pd(d)?Xb(d,o,n+1):d}const Ej={type:"spring",stiffness:500,damping:25,restSpeed:10},Rj=a=>({type:"spring",stiffness:550,damping:a===0?2*Math.sqrt(550):30,restSpeed:10}),Tj={type:"keyframes",duration:.8},Cj={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Mj=(a,{keyframes:o})=>o.length>2?Tj:Mo.has(a)?a.startsWith("scale")?Rj(o[1]):Ej:Cj,Oj=a=>a!==null;function Dj(a,{repeat:o,repeatType:n="loop"},i){const d=a.filter(Oj),f=o&&n!=="loop"&&o%2===1?0:d.length-1;return d[f]}function Ub(a,o){if(a?.inherit&&o){const{inherit:n,...i}=a;return{...o,...i}}return a}function Ed(a,o){const n=a?.[o]??a?.default??a;return n!==a?Ub(n,a):n}function _j({when:a,delay:o,delayChildren:n,staggerChildren:i,staggerDirection:d,repeat:f,repeatType:m,repeatDelay:h,from:g,elapsed:x,...b}){return!!Object.keys(b).length}const Rd=(a,o,n,i={},d,f)=>m=>{const h=Ed(i,a)||{},g=h.delay||i.delay||0;let{elapsed:x=0}=i;x=x-Kt(g);const b={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:o.getVelocity(),...h,delay:-x,onUpdate:y=>{o.set(y),h.onUpdate&&h.onUpdate(y)},onComplete:()=>{m(),h.onComplete&&h.onComplete()},name:a,motionValue:o,element:f?void 0:d};_j(h)||Object.assign(b,Mj(a,b)),b.duration&&(b.duration=Kt(b.duration)),b.repeatDelay&&(b.repeatDelay=Kt(b.repeatDelay)),b.from!==void 0&&(b.keyframes[0]=b.from);let S=!1;if((b.type===!1||b.duration===0&&!b.repeatDelay)&&(Uu(b),b.delay===0&&(S=!0)),(Ra.instantAnimations||Ra.skipAnimations||d?.shouldSkipAnimations)&&(S=!0,Uu(b),b.delay=0),b.allowFlatten=!h.type&&!h.ease,S&&!f&&o.get()!==void 0){const y=Dj(b.keyframes,h);if(y!==void 0){Ve.update(()=>{b.onUpdate(y),b.onComplete()});return}}return h.isSync?new jd(b):new Sj(b)};function jx(a){const o=[{},{}];return a?.values.forEach((n,i)=>{o[0][i]=n.get(),o[1][i]=n.getVelocity()}),o}function Td(a,o,n,i){if(typeof o=="function"){const[d,f]=jx(i);o=o(n!==void 0?n:a.custom,d,f)}if(typeof o=="string"&&(o=a.variants&&a.variants[o]),typeof o=="function"){const[d,f]=jx(i);o=o(n!==void 0?n:a.custom,d,f)}return o}function Eo(a,o,n){const i=a.getProps();return Td(i,o,n!==void 0?n:i.custom,a)}const kb=new Set(["width","height","top","left","right","bottom",...Co]),Ax=30,wj=a=>!isNaN(parseFloat(a));class Nj{constructor(o,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{const d=xt.now();if(this.updatedAt!==d&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const f of this.dependents)f.dirty()},this.hasAnimated=!1,this.setCurrent(o),this.owner=n.owner}setCurrent(o){this.current=o,this.updatedAt=xt.now(),this.canTrackVelocity===null&&o!==void 0&&(this.canTrackVelocity=wj(this.current))}setPrevFrameValue(o=this.current){this.prevFrameValue=o,this.prevUpdatedAt=this.updatedAt}onChange(o){return this.on("change",o)}on(o,n){this.events[o]||(this.events[o]=new md);const i=this.events[o].add(n);return o==="change"?()=>{i(),Ve.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const o in this.events)this.events[o].clear()}attach(o,n){this.passiveEffect=o,this.stopPassiveEffect=n}set(o){this.passiveEffect?this.passiveEffect(o,this.updateAndNotify):this.updateAndNotify(o)}setWithVelocity(o,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=o,this.prevUpdatedAt=this.updatedAt-i}jump(o,n=!0){this.updateAndNotify(o),this.prev=o,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(o){this.dependents||(this.dependents=new Set),this.dependents.add(o)}removeDependent(o){this.dependents&&this.dependents.delete(o)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const o=xt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||o-this.updatedAt>Ax)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Ax);return nb(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(o){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=o(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ro(a,o){return new Nj(a,o)}const ku=a=>Array.isArray(a);function qj(a,o,n){a.hasValue(o)?a.getValue(o).set(n):a.addValue(o,Ro(n))}function zj(a){return ku(a)?a[a.length-1]||0:a}function Lj(a,o){const n=Eo(a,o);let{transitionEnd:i={},transition:d={},...f}=n||{};f={...f,...i};for(const m in f){const h=zj(f[m]);qj(a,m,h)}}const mt=a=>!!(a&&a.getVelocity);function Vj(a){return!!(mt(a)&&a.add)}function Fu(a,o){const n=a.getValue("willChange");if(Vj(n))return n.add(o);if(!n&&Ra.WillChange){const i=new Ra.WillChange("auto");a.addValue("willChange",i),i.add(o)}}function Cd(a){return a.replace(/([A-Z])/g,o=>`-${o.toLowerCase()}`)}const Pj="framerAppearId",Fb="data-"+Cd(Pj);function Hb(a){return a.props[Fb]}function Bj({protectedKeys:a,needsAnimating:o},n){const i=a.hasOwnProperty(n)&&o[n]!==!0;return o[n]=!1,i}function Gb(a,o,{delay:n=0,transitionOverride:i,type:d}={}){let{transition:f,transitionEnd:m,...h}=o;const g=a.getDefaultTransition();f=f?Ub(f,g):g;const x=f?.reduceMotion;i&&(f=i);const b=[],S=d&&a.animationState&&a.animationState.getState()[d];for(const y in h){const R=a.getValue(y,a.latestValues[y]??null),C=h[y];if(C===void 0||S&&Bj(S,y))continue;const N={delay:n,...Ed(f||{},y)},L=R.get();if(L!==void 0&&!R.isAnimating&&!Array.isArray(C)&&C===L&&!N.velocity)continue;let F=!1;if(window.MotionHandoffAnimation){const I=Hb(a);if(I){const P=window.MotionHandoffAnimation(I,y,Ve);P!==null&&(N.startTime=P,F=!0)}}Fu(a,y);const G=x??a.shouldReduceMotion;R.start(Rd(y,R,C,G&&kb.has(y)?{type:!1}:N,a,F));const H=R.animation;H&&b.push(H)}if(m){const y=()=>Ve.update(()=>{m&&Lj(a,m)});b.length?Promise.all(b).then(y):y()}return b}function Hu(a,o,n={}){const i=Eo(a,o,n.type==="exit"?a.presenceContext?.custom:void 0);let{transition:d=a.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(d=n.transitionOverride);const f=i?()=>Promise.all(Gb(a,i,n)):()=>Promise.resolve(),m=a.variantChildren&&a.variantChildren.size?(g=0)=>{const{delayChildren:x=0,staggerChildren:b,staggerDirection:S}=d;return Xj(a,o,g,x,b,S,n)}:()=>Promise.resolve(),{when:h}=d;if(h){const[g,x]=h==="beforeChildren"?[f,m]:[m,f];return g().then(()=>x())}else return Promise.all([f(),m(n.delay)])}function Xj(a,o,n=0,i=0,d=0,f=1,m){const h=[];for(const g of a.variantChildren)g.notify("AnimationStart",o),h.push(Hu(g,o,{...m,delay:n+(typeof i=="function"?0:i)+Bb(a.variantChildren,g,i,d,f)}).then(()=>g.notify("AnimationComplete",o)));return Promise.all(h)}function Uj(a,o,n={}){a.notify("AnimationStart",o);let i;if(Array.isArray(o)){const d=o.map(f=>Hu(a,f,n));i=Promise.all(d)}else if(typeof o=="string")i=Hu(a,o,n);else{const d=typeof o=="function"?Eo(a,o,n.custom):o;i=Promise.all(Gb(a,d,n))}return i.then(()=>{a.notify("AnimationComplete",o)})}const kj={test:a=>a==="auto",parse:a=>a},Ib=a=>o=>o.test(a),Yb=[To,te,na,er,b2,g2,kj],Ex=a=>Yb.find(Ib(a));function Fj(a){return typeof a=="number"?a===0:a!==null?a==="none"||a==="0"||ob(a):!0}const Hj=new Set(["brightness","contrast","saturate","opacity"]);function Gj(a){const[o,n]=a.slice(0,-1).split("(");if(o==="drop-shadow")return a;const[i]=n.match(xd)||[];if(!i)return a;const d=n.replace(i,"");let f=Hj.has(o)?1:0;return i!==n&&(f*=100),o+"("+f+d+")"}const Ij=/\b([a-z-]*)\(.*?\)/gu,Gu={...Jt,getAnimatableNone:a=>{const o=a.match(Ij);return o?o.map(Gj).join(" "):a}},Iu={...Jt,getAnimatableNone:a=>{const o=Jt.parse(a);return Jt.createTransformer(a)(o.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}},Rx={...To,transform:Math.round},Yj={rotate:er,rotateX:er,rotateY:er,rotateZ:er,scale:ui,scaleX:ui,scaleY:ui,scaleZ:ui,skew:er,skewX:er,skewY:er,distance:te,translateX:te,translateY:te,translateZ:te,x:te,y:te,z:te,perspective:te,transformPerspective:te,opacity:Bs,originX:dx,originY:dx,originZ:te},Md={borderWidth:te,borderTopWidth:te,borderRightWidth:te,borderBottomWidth:te,borderLeftWidth:te,borderRadius:te,borderTopLeftRadius:te,borderTopRightRadius:te,borderBottomRightRadius:te,borderBottomLeftRadius:te,width:te,maxWidth:te,height:te,maxHeight:te,top:te,right:te,bottom:te,left:te,inset:te,insetBlock:te,insetBlockStart:te,insetBlockEnd:te,insetInline:te,insetInlineStart:te,insetInlineEnd:te,padding:te,paddingTop:te,paddingRight:te,paddingBottom:te,paddingLeft:te,paddingBlock:te,paddingBlockStart:te,paddingBlockEnd:te,paddingInline:te,paddingInlineStart:te,paddingInlineEnd:te,margin:te,marginTop:te,marginRight:te,marginBottom:te,marginLeft:te,marginBlock:te,marginBlockStart:te,marginBlockEnd:te,marginInline:te,marginInlineStart:te,marginInlineEnd:te,fontSize:te,backgroundPositionX:te,backgroundPositionY:te,...Yj,zIndex:Rx,fillOpacity:Bs,strokeOpacity:Bs,numOctaves:Rx},Qj={...Md,color:Ze,backgroundColor:Ze,outlineColor:Ze,fill:Ze,stroke:Ze,borderColor:Ze,borderTopColor:Ze,borderRightColor:Ze,borderBottomColor:Ze,borderLeftColor:Ze,filter:Gu,WebkitFilter:Gu,mask:Iu,WebkitMask:Iu},Qb=a=>Qj[a],Zj=new Set([Gu,Iu]);function Zb(a,o){let n=Qb(a);return Zj.has(n)||(n=Jt),n.getAnimatableNone?n.getAnimatableNone(o):void 0}const Kj=new Set(["auto","none","0"]);function Jj(a,o,n){let i=0,d;for(;i<a.length&&!d;){const f=a[i];typeof f=="string"&&!Kj.has(f)&&Xs(f).values.length&&(d=a[i]),i++}if(d&&n)for(const f of o)a[f]=Zb(n,d)}class Wj extends Ad{constructor(o,n,i,d,f){super(o,n,i,d,f,!0)}readKeyframes(){const{unresolvedKeyframes:o,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let b=0;b<o.length;b++){let S=o[b];if(typeof S=="string"&&(S=S.trim(),pd(S))){const y=Xb(S,n.current);y!==void 0&&(o[b]=y),b===o.length-1&&(this.finalKeyframe=S)}}if(this.resolveNoneKeyframes(),!kb.has(i)||o.length!==2)return;const[d,f]=o,m=Ex(d),h=Ex(f),g=ux(d),x=ux(f);if(g!==x&&tr[i]){this.needsMeasurement=!0;return}if(m!==h)if(vx(m)&&vx(h))for(let b=0;b<o.length;b++){const S=o[b];typeof S=="string"&&(o[b]=parseFloat(S))}else tr[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:o,name:n}=this,i=[];for(let d=0;d<o.length;d++)(o[d]===null||Fj(o[d]))&&i.push(d);i.length&&Jj(o,i,n)}measureInitialState(){const{element:o,unresolvedKeyframes:n,name:i}=this;if(!o||!o.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=tr[i](o.measureViewportBox(),window.getComputedStyle(o.current)),n[0]=this.measuredOrigin;const d=n[n.length-1];d!==void 0&&o.getValue(i,d).jump(d,!1)}measureEndState(){const{element:o,name:n,unresolvedKeyframes:i}=this;if(!o||!o.current)return;const d=o.getValue(n);d&&d.jump(this.measuredOrigin,!1);const f=i.length-1,m=i[f];i[f]=tr[n](o.measureViewportBox(),window.getComputedStyle(o.current)),m!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=m),this.removedTransforms?.length&&this.removedTransforms.forEach(([h,g])=>{o.getValue(h).set(g)}),this.resolveNoneKeyframes()}}const $j=new Set(["opacity","clipPath","filter","transform"]);function Kb(a,o,n){if(a==null)return[];if(a instanceof EventTarget)return[a];if(typeof a=="string"){let i=document;const d=n?.[a]??i.querySelectorAll(a);return d?Array.from(d):[]}return Array.from(a).filter(i=>i!=null)}const Jb=(a,o)=>o&&typeof a=="number"?o.transform(a):a;function Yu(a){return rb(a)&&"offsetHeight"in a}const{schedule:Od}=gb(queueMicrotask,!1),Qt={x:!1,y:!1};function Wb(){return Qt.x||Qt.y}function eA(a){return a==="x"||a==="y"?Qt[a]?null:(Qt[a]=!0,()=>{Qt[a]=!1}):Qt.x||Qt.y?null:(Qt.x=Qt.y=!0,()=>{Qt.x=Qt.y=!1})}function $b(a,o){const n=Kb(a),i=new AbortController,d={passive:!0,...o,signal:i.signal};return[n,d,()=>i.abort()]}function tA(a){return!(a.pointerType==="touch"||Wb())}function aA(a,o,n={}){const[i,d,f]=$b(a,n);return i.forEach(m=>{let h=!1,g=!1,x;const b=()=>{m.removeEventListener("pointerleave",C)},S=L=>{x&&(x(L),x=void 0),b()},y=L=>{h=!1,window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",y),g&&(g=!1,S(L))},R=()=>{h=!0,window.addEventListener("pointerup",y,d),window.addEventListener("pointercancel",y,d)},C=L=>{if(L.pointerType!=="touch"){if(h){g=!0;return}S(L)}},N=L=>{if(!tA(L))return;g=!1;const F=o(m,L);typeof F=="function"&&(x=F,m.addEventListener("pointerleave",C,d))};m.addEventListener("pointerenter",N,d),m.addEventListener("pointerdown",R,d)}),f}const ev=(a,o)=>o?a===o?!0:ev(a,o.parentElement):!1,Dd=a=>a.pointerType==="mouse"?typeof a.button!="number"||a.button<=0:a.isPrimary!==!1,rA=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function oA(a){return rA.has(a.tagName)||a.isContentEditable===!0}const sA=new Set(["INPUT","SELECT","TEXTAREA"]);function nA(a){return sA.has(a.tagName)||a.isContentEditable===!0}const xi=new WeakSet;function Tx(a){return o=>{o.key==="Enter"&&a(o)}}function hu(a,o){a.dispatchEvent(new PointerEvent("pointer"+o,{isPrimary:!0,bubbles:!0}))}const iA=(a,o)=>{const n=a.currentTarget;if(!n)return;const i=Tx(()=>{if(xi.has(n))return;hu(n,"down");const d=Tx(()=>{hu(n,"up")}),f=()=>hu(n,"cancel");n.addEventListener("keyup",d,o),n.addEventListener("blur",f,o)});n.addEventListener("keydown",i,o),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),o)};function Cx(a){return Dd(a)&&!Wb()}const Mx=new WeakSet;function lA(a,o,n={}){const[i,d,f]=$b(a,n),m=h=>{const g=h.currentTarget;if(!Cx(h)||Mx.has(h))return;xi.add(g),n.stopPropagation&&Mx.add(h);const x=o(g,h),b=(R,C)=>{window.removeEventListener("pointerup",S),window.removeEventListener("pointercancel",y),xi.has(g)&&xi.delete(g),Cx(R)&&typeof x=="function"&&x(R,{success:C})},S=R=>{b(R,g===window||g===document||n.useGlobalTarget||ev(g,R.target))},y=R=>{b(R,!1)};window.addEventListener("pointerup",S,d),window.addEventListener("pointercancel",y,d)};return i.forEach(h=>{(n.useGlobalTarget?window:h).addEventListener("pointerdown",m,d),Yu(h)&&(h.addEventListener("focus",x=>iA(x,d)),!oA(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),f}function _d(a){return rb(a)&&"ownerSVGElement"in a}const gi=new WeakMap;let bi;const tv=(a,o,n)=>(i,d)=>d&&d[0]?d[0][a+"Size"]:_d(i)&&"getBBox"in i?i.getBBox()[o]:i[n],cA=tv("inline","width","offsetWidth"),uA=tv("block","height","offsetHeight");function dA({target:a,borderBoxSize:o}){gi.get(a)?.forEach(n=>{n(a,{get width(){return cA(a,o)},get height(){return uA(a,o)}})})}function mA(a){a.forEach(dA)}function fA(){typeof ResizeObserver>"u"||(bi=new ResizeObserver(mA))}function hA(a,o){bi||fA();const n=Kb(a);return n.forEach(i=>{let d=gi.get(i);d||(d=new Set,gi.set(i,d)),d.add(o),bi?.observe(i)}),()=>{n.forEach(i=>{const d=gi.get(i);d?.delete(o),d?.size||bi?.unobserve(i)})}}const vi=new Set;let yo;function pA(){yo=()=>{const a={get width(){return window.innerWidth},get height(){return window.innerHeight}};vi.forEach(o=>o(a))},window.addEventListener("resize",yo)}function xA(a){return vi.add(a),yo||pA(),()=>{vi.delete(a),!vi.size&&typeof yo=="function"&&(window.removeEventListener("resize",yo),yo=void 0)}}function Ox(a,o){return typeof a=="function"?xA(a):hA(a,o)}function gA(a){return _d(a)&&a.tagName==="svg"}const bA=[...Yb,Ze,Jt],vA=a=>bA.find(Ib(a)),Dx=()=>({translate:0,scale:1,origin:0,originPoint:0}),So=()=>({x:Dx(),y:Dx()}),_x=()=>({min:0,max:0}),$e=()=>({x:_x(),y:_x()}),yA=new WeakMap;function Bi(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function Us(a){return typeof a=="string"||Array.isArray(a)}const wd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Nd=["initial",...wd];function Xi(a){return Bi(a.animate)||Nd.some(o=>Us(a[o]))}function av(a){return!!(Xi(a)||a.variants)}function SA(a,o,n){for(const i in o){const d=o[i],f=n[i];if(mt(d))a.addValue(i,d);else if(mt(f))a.addValue(i,Ro(d,{owner:a}));else if(f!==d)if(a.hasValue(i)){const m=a.getValue(i);m.liveStyle===!0?m.jump(d):m.hasAnimated||m.set(d)}else{const m=a.getStaticValue(i);a.addValue(i,Ro(m!==void 0?m:d,{owner:a}))}}for(const i in n)o[i]===void 0&&a.removeValue(i);return o}const Qu={current:null},rv={current:!1},jA=typeof window<"u";function AA(){if(rv.current=!0,!!jA)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),o=()=>Qu.current=a.matches;a.addEventListener("change",o),o()}else Qu.current=!1}const wx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Ci={};function ov(a){Ci=a}function EA(){return Ci}class RA{scrapeMotionValuesFromProps(o,n,i){return{}}constructor({parent:o,props:n,presenceContext:i,reducedMotionConfig:d,skipAnimations:f,blockInitialAnimation:m,visualState:h},g={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Ad,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const R=xt.now();this.renderScheduledAt<R&&(this.renderScheduledAt=R,Ve.render(this.render,!1,!0))};const{latestValues:x,renderState:b}=h;this.latestValues=x,this.baseTarget={...x},this.initialValues=n.initial?{...x}:{},this.renderState=b,this.parent=o,this.props=n,this.presenceContext=i,this.depth=o?o.depth+1:0,this.reducedMotionConfig=d,this.skipAnimationsConfig=f,this.options=g,this.blockInitialAnimation=!!m,this.isControllingVariants=Xi(n),this.isVariantNode=av(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(o&&o.current);const{willChange:S,...y}=this.scrapeMotionValuesFromProps(n,{},this);for(const R in y){const C=y[R];x[R]!==void 0&&mt(C)&&C.set(x[R])}}mount(o){if(this.hasBeenMounted)for(const n in this.initialValues)this.values.get(n)?.jump(this.initialValues[n]),this.latestValues[n]=this.initialValues[n];this.current=o,yA.set(o,this),this.projection&&!this.projection.instance&&this.projection.mount(o),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(rv.current||AA(),this.shouldReduceMotion=Qu.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),ar(this.notifyUpdate),ar(this.render),this.valueSubscriptions.forEach(o=>o()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const o in this.events)this.events[o].clear();for(const o in this.features){const n=this.features[o];n&&(n.unmount(),n.isMounted=!1)}this.current=null}addChild(o){this.children.add(o),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(o)}removeChild(o){this.children.delete(o),this.enteringChildren&&this.enteringChildren.delete(o)}bindToMotionValue(o,n){if(this.valueSubscriptions.has(o)&&this.valueSubscriptions.get(o)(),n.accelerate&&$j.has(o)&&this.current instanceof HTMLElement){const{factory:m,keyframes:h,times:g,ease:x,duration:b}=n.accelerate,S=new Vb({element:this.current,name:o,keyframes:h,times:g,ease:x,duration:Kt(b)}),y=m(S);this.valueSubscriptions.set(o,()=>{y(),S.cancel()});return}const i=Mo.has(o);i&&this.onBindTransform&&this.onBindTransform();const d=n.on("change",m=>{this.latestValues[o]=m,this.props.onUpdate&&Ve.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let f;typeof window<"u"&&window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,o,n)),this.valueSubscriptions.set(o,()=>{d(),f&&f(),n.owner&&n.stop()})}sortNodePosition(o){return!this.current||!this.sortInstanceNodePosition||this.type!==o.type?0:this.sortInstanceNodePosition(this.current,o.current)}updateFeatures(){let o="animation";for(o in Ci){const n=Ci[o];if(!n)continue;const{isEnabled:i,Feature:d}=n;if(!this.features[o]&&d&&i(this.props)&&(this.features[o]=new d(this)),this.features[o]){const f=this.features[o];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):$e()}getStaticValue(o){return this.latestValues[o]}setStaticValue(o,n){this.latestValues[o]=n}update(o,n){(o.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=o,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<wx.length;i++){const d=wx[i];this.propEventSubscriptions[d]&&(this.propEventSubscriptions[d](),delete this.propEventSubscriptions[d]);const f="on"+d,m=o[f];m&&(this.propEventSubscriptions[d]=this.on(d,m))}this.prevMotionValues=SA(this,this.scrapeMotionValuesFromProps(o,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(o){return this.props.variants?this.props.variants[o]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(o){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(o),()=>n.variantChildren.delete(o)}addValue(o,n){const i=this.values.get(o);n!==i&&(i&&this.removeValue(o),this.bindToMotionValue(o,n),this.values.set(o,n),this.latestValues[o]=n.get())}removeValue(o){this.values.delete(o);const n=this.valueSubscriptions.get(o);n&&(n(),this.valueSubscriptions.delete(o)),delete this.latestValues[o],this.removeValueFromRenderState(o,this.renderState)}hasValue(o){return this.values.has(o)}getValue(o,n){if(this.props.values&&this.props.values[o])return this.props.values[o];let i=this.values.get(o);return i===void 0&&n!==void 0&&(i=Ro(n===null?void 0:n,{owner:this}),this.addValue(o,i)),i}readValue(o,n){let i=this.latestValues[o]!==void 0||!this.current?this.latestValues[o]:this.getBaseTargetFromProps(this.props,o)??this.readValueFromInstance(this.current,o,this.options);return i!=null&&(typeof i=="string"&&(ab(i)||ob(i))?i=parseFloat(i):!vA(i)&&Jt.test(n)&&(i=Zb(o,n)),this.setBaseTarget(o,mt(i)?i.get():i)),mt(i)?i.get():i}setBaseTarget(o,n){this.baseTarget[o]=n}getBaseTarget(o){const{initial:n}=this.props;let i;if(typeof n=="string"||typeof n=="object"){const f=Td(this.props,n,this.presenceContext?.custom);f&&(i=f[o])}if(n&&i!==void 0)return i;const d=this.getBaseTargetFromProps(this.props,o);return d!==void 0&&!mt(d)?d:this.initialValues[o]!==void 0&&i===void 0?void 0:this.baseTarget[o]}on(o,n){return this.events[o]||(this.events[o]=new md),this.events[o].add(n)}notify(o,...n){this.events[o]&&this.events[o].notify(...n)}scheduleRenderMicrotask(){Od.render(this.render)}}class sv extends RA{constructor(){super(...arguments),this.KeyframeResolver=Wj}sortInstanceNodePosition(o,n){return o.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(o,n){const i=o.style;return i?i[n]:void 0}removeValueFromRenderState(o,{vars:n,style:i}){delete n[o],delete i[o]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:o}=this.props;mt(o)&&(this.childSubscription=o.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class rr{constructor(o){this.isMounted=!1,this.node=o}update(){}}function nv({top:a,left:o,right:n,bottom:i}){return{x:{min:o,max:n},y:{min:a,max:i}}}function TA({x:a,y:o}){return{top:o.min,right:a.max,bottom:o.max,left:a.min}}function CA(a,o){if(!o)return a;const n=o({x:a.left,y:a.top}),i=o({x:a.right,y:a.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function pu(a){return a===void 0||a===1}function Zu({scale:a,scaleX:o,scaleY:n}){return!pu(a)||!pu(o)||!pu(n)}function Tr(a){return Zu(a)||iv(a)||a.z||a.rotate||a.rotateX||a.rotateY||a.skewX||a.skewY}function iv(a){return Nx(a.x)||Nx(a.y)}function Nx(a){return a&&a!=="0%"}function Mi(a,o,n){const i=a-n,d=o*i;return n+d}function qx(a,o,n,i,d){return d!==void 0&&(a=Mi(a,d,i)),Mi(a,n,i)+o}function Ku(a,o=0,n=1,i,d){a.min=qx(a.min,o,n,i,d),a.max=qx(a.max,o,n,i,d)}function lv(a,{x:o,y:n}){Ku(a.x,o.translate,o.scale,o.originPoint),Ku(a.y,n.translate,n.scale,n.originPoint)}const zx=.999999999999,Lx=1.0000000000001;function MA(a,o,n,i=!1){const d=n.length;if(!d)return;o.x=o.y=1;let f,m;for(let h=0;h<d;h++){f=n[h],m=f.projectionDelta;const{visualElement:g}=f.options;g&&g.props.style&&g.props.style.display==="contents"||(i&&f.options.layoutScroll&&f.scroll&&f!==f.root&&Ao(a,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),m&&(o.x*=m.x.scale,o.y*=m.y.scale,lv(a,m)),i&&Tr(f.latestValues)&&Ao(a,f.latestValues))}o.x<Lx&&o.x>zx&&(o.x=1),o.y<Lx&&o.y>zx&&(o.y=1)}function jo(a,o){a.min=a.min+o,a.max=a.max+o}function Vx(a,o,n,i,d=.5){const f=Xe(a.min,a.max,d);Ku(a,o,n,f,i)}function Px(a,o){return typeof a=="string"?parseFloat(a)/100*(o.max-o.min):a}function Ao(a,o){Vx(a.x,Px(o.x,a.x),o.scaleX,o.scale,o.originX),Vx(a.y,Px(o.y,a.y),o.scaleY,o.scale,o.originY)}function cv(a,o){return nv(CA(a.getBoundingClientRect(),o))}function OA(a,o,n){const i=cv(a,n),{scroll:d}=o;return d&&(jo(i.x,d.offset.x),jo(i.y,d.offset.y)),i}const DA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},_A=Co.length;function wA(a,o,n){let i="",d=!0;for(let f=0;f<_A;f++){const m=Co[f],h=a[m];if(h===void 0)continue;let g=!0;if(typeof h=="number")g=h===(m.startsWith("scale")?1:0);else{const x=parseFloat(h);g=m.startsWith("scale")?x===1:x===0}if(!g||n){const x=Jb(h,Md[m]);if(!g){d=!1;const b=DA[m]||m;i+=`${b}(${x}) `}n&&(o[m]=x)}}return i=i.trim(),n?i=n(o,d?"":i):d&&(i="none"),i}function qd(a,o,n){const{style:i,vars:d,transformOrigin:f}=a;let m=!1,h=!1;for(const g in o){const x=o[g];if(Mo.has(g)){m=!0;continue}else if(vb(g)){d[g]=x;continue}else{const b=Jb(x,Md[g]);g.startsWith("origin")?(h=!0,f[g]=b):i[g]=b}}if(o.transform||(m||n?i.transform=wA(o,a.transform,n):i.transform&&(i.transform="none")),h){const{originX:g="50%",originY:x="50%",originZ:b=0}=f;i.transformOrigin=`${g} ${x} ${b}`}}function uv(a,{style:o,vars:n},i,d){const f=a.style;let m;for(m in o)f[m]=o[m];d?.applyProjectionStyles(f,i);for(m in n)f.setProperty(m,n[m])}function Bx(a,o){return o.max===o.min?0:a/(o.max-o.min)*100}const Ms={correct:(a,o)=>{if(!o.target)return a;if(typeof a=="string")if(te.test(a))a=parseFloat(a);else return a;const n=Bx(a,o.target.x),i=Bx(a,o.target.y);return`${n}% ${i}%`}},NA={correct:(a,{treeScale:o,projectionDelta:n})=>{const i=a,d=Jt.parse(a);if(d.length>5)return i;const f=Jt.createTransformer(a),m=typeof d[0]!="number"?1:0,h=n.x.scale*o.x,g=n.y.scale*o.y;d[0+m]/=h,d[1+m]/=g;const x=Xe(h,g,.5);return typeof d[2+m]=="number"&&(d[2+m]/=x),typeof d[3+m]=="number"&&(d[3+m]/=x),f(d)}},Ju={borderRadius:{...Ms,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ms,borderTopRightRadius:Ms,borderBottomLeftRadius:Ms,borderBottomRightRadius:Ms,boxShadow:NA};function dv(a,{layout:o,layoutId:n}){return Mo.has(a)||a.startsWith("origin")||(o||n!==void 0)&&(!!Ju[a]||a==="opacity")}function zd(a,o,n){const i=a.style,d=o?.style,f={};if(!i)return f;for(const m in i)(mt(i[m])||d&&mt(d[m])||dv(m,a)||n?.getValue(m)?.liveStyle!==void 0)&&(f[m]=i[m]);return f}function qA(a){return window.getComputedStyle(a)}class zA extends sv{constructor(){super(...arguments),this.type="html",this.renderInstance=uv}readValueFromInstance(o,n){if(Mo.has(n))return this.projection?.isProjecting?Lu(n):tj(o,n);{const i=qA(o),d=(vb(n)?i.getPropertyValue(n):i[n])||0;return typeof d=="string"?d.trim():d}}measureInstanceViewportBox(o,{transformPagePoint:n}){return cv(o,n)}build(o,n,i){qd(o,n,i.transformTemplate)}scrapeMotionValuesFromProps(o,n,i){return zd(o,n,i)}}const LA={offset:"stroke-dashoffset",array:"stroke-dasharray"},VA={offset:"strokeDashoffset",array:"strokeDasharray"};function PA(a,o,n=1,i=0,d=!0){a.pathLength=1;const f=d?LA:VA;a[f.offset]=`${-i}`,a[f.array]=`${o} ${n}`}const BA=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function mv(a,{attrX:o,attrY:n,attrScale:i,pathLength:d,pathSpacing:f=1,pathOffset:m=0,...h},g,x,b){if(qd(a,h,x),g){a.style.viewBox&&(a.attrs.viewBox=a.style.viewBox);return}a.attrs=a.style,a.style={};const{attrs:S,style:y}=a;S.transform&&(y.transform=S.transform,delete S.transform),(y.transform||S.transformOrigin)&&(y.transformOrigin=S.transformOrigin??"50% 50%",delete S.transformOrigin),y.transform&&(y.transformBox=b?.transformBox??"fill-box",delete S.transformBox);for(const R of BA)S[R]!==void 0&&(y[R]=S[R],delete S[R]);o!==void 0&&(S.x=o),n!==void 0&&(S.y=n),i!==void 0&&(S.scale=i),d!==void 0&&PA(S,d,f,m,!1)}const fv=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),hv=a=>typeof a=="string"&&a.toLowerCase()==="svg";function XA(a,o,n,i){uv(a,o,void 0,i);for(const d in o.attrs)a.setAttribute(fv.has(d)?d:Cd(d),o.attrs[d])}function pv(a,o,n){const i=zd(a,o,n);for(const d in a)if(mt(a[d])||mt(o[d])){const f=Co.indexOf(d)!==-1?"attr"+d.charAt(0).toUpperCase()+d.substring(1):d;i[f]=a[d]}return i}class UA extends sv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=$e}getBaseTargetFromProps(o,n){return o[n]}readValueFromInstance(o,n){if(Mo.has(n)){const i=Qb(n);return i&&i.default||0}return n=fv.has(n)?n:Cd(n),o.getAttribute(n)}scrapeMotionValuesFromProps(o,n,i){return pv(o,n,i)}build(o,n,i){mv(o,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(o,n,i,d){XA(o,n,i,d)}mount(o){this.isSVGTag=hv(o.tagName),super.mount(o)}}const kA=Nd.length;function xv(a){if(!a)return;if(!a.isControllingVariants){const n=a.parent?xv(a.parent)||{}:{};return a.props.initial!==void 0&&(n.initial=a.props.initial),n}const o={};for(let n=0;n<kA;n++){const i=Nd[n],d=a.props[i];(Us(d)||d===!1)&&(o[i]=d)}return o}function gv(a,o){if(!Array.isArray(o))return!1;const n=o.length;if(n!==a.length)return!1;for(let i=0;i<n;i++)if(o[i]!==a[i])return!1;return!0}const FA=[...wd].reverse(),HA=wd.length;function GA(a){return o=>Promise.all(o.map(({animation:n,options:i})=>Uj(a,n,i)))}function IA(a){let o=GA(a),n=Xx(),i=!0,d=!1;const f=x=>(b,S)=>{const y=Eo(a,S,x==="exit"?a.presenceContext?.custom:void 0);if(y){const{transition:R,transitionEnd:C,...N}=y;b={...b,...N,...C}}return b};function m(x){o=x(a)}function h(x){const{props:b}=a,S=xv(a.parent)||{},y=[],R=new Set;let C={},N=1/0;for(let F=0;F<HA;F++){const G=FA[F],H=n[G],I=b[G]!==void 0?b[G]:S[G],P=Us(I),K=G===x?H.isActive:null;K===!1&&(N=F);let ce=I===S[G]&&I!==b[G]&&P;if(ce&&(i||d)&&a.manuallyAnimateOnMount&&(ce=!1),H.protectedKeys={...C},!H.isActive&&K===null||!I&&!H.prevProp||Bi(I)||typeof I=="boolean")continue;if(G==="exit"&&H.isActive&&K!==!0){H.prevResolvedValues&&(C={...C,...H.prevResolvedValues});continue}const X=YA(H.prevProp,I);let W=X||G===x&&H.isActive&&!ce&&P||F>N&&P,je=!1;const _e=Array.isArray(I)?I:[I];let Ae=_e.reduce(f(G),{});K===!1&&(Ae={});const{prevResolvedValues:ft={}}=H,At={...ft,...Ae},ze=J=>{W=!0,R.has(J)&&(je=!0,R.delete(J)),H.needsAnimating[J]=!0;const me=a.getValue(J);me&&(me.liveStyle=!1)};for(const J in At){const me=Ae[J],j=ft[J];if(C.hasOwnProperty(J))continue;let U=!1;ku(me)&&ku(j)?U=!gv(me,j):U=me!==j,U?me!=null?ze(J):R.add(J):me!==void 0&&R.has(J)?ze(J):H.protectedKeys[J]=!0}H.prevProp=I,H.prevResolvedValues=Ae,H.isActive&&(C={...C,...Ae}),(i||d)&&a.blockInitialAnimation&&(W=!1);const q=ce&&X;W&&(!q||je)&&y.push(..._e.map(J=>{const me={type:G};if(typeof J=="string"&&(i||d)&&!q&&a.manuallyAnimateOnMount&&a.parent){const{parent:j}=a,U=Eo(j,J);if(j.enteringChildren&&U){const{delayChildren:Z}=U.transition||{};me.delay=Bb(j.enteringChildren,a,Z)}}return{animation:J,options:me}}))}if(R.size){const F={};if(typeof b.initial!="boolean"){const G=Eo(a,Array.isArray(b.initial)?b.initial[0]:b.initial);G&&G.transition&&(F.transition=G.transition)}R.forEach(G=>{const H=a.getBaseTarget(G),I=a.getValue(G);I&&(I.liveStyle=!0),F[G]=H??null}),y.push({animation:F})}let L=!!y.length;return i&&(b.initial===!1||b.initial===b.animate)&&!a.manuallyAnimateOnMount&&(L=!1),i=!1,d=!1,L?o(y):Promise.resolve()}function g(x,b){if(n[x].isActive===b)return Promise.resolve();a.variantChildren?.forEach(y=>y.animationState?.setActive(x,b)),n[x].isActive=b;const S=h(x);for(const y in n)n[y].protectedKeys={};return S}return{animateChanges:h,setActive:g,setAnimateFunction:m,getState:()=>n,reset:()=>{n=Xx(),d=!0}}}function YA(a,o){return typeof o=="string"?o!==a:Array.isArray(o)?!gv(o,a):!1}function Er(a=!1){return{isActive:a,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Xx(){return{animate:Er(!0),whileInView:Er(),whileHover:Er(),whileTap:Er(),whileDrag:Er(),whileFocus:Er(),exit:Er()}}function Ux(a,o){a.min=o.min,a.max=o.max}function Yt(a,o){Ux(a.x,o.x),Ux(a.y,o.y)}function kx(a,o){a.translate=o.translate,a.scale=o.scale,a.originPoint=o.originPoint,a.origin=o.origin}const bv=1e-4,QA=1-bv,ZA=1+bv,vv=.01,KA=0-vv,JA=0+vv;function gt(a){return a.max-a.min}function WA(a,o,n){return Math.abs(a-o)<=n}function Fx(a,o,n,i=.5){a.origin=i,a.originPoint=Xe(o.min,o.max,a.origin),a.scale=gt(n)/gt(o),a.translate=Xe(n.min,n.max,a.origin)-a.originPoint,(a.scale>=QA&&a.scale<=ZA||isNaN(a.scale))&&(a.scale=1),(a.translate>=KA&&a.translate<=JA||isNaN(a.translate))&&(a.translate=0)}function qs(a,o,n,i){Fx(a.x,o.x,n.x,i?i.originX:void 0),Fx(a.y,o.y,n.y,i?i.originY:void 0)}function Hx(a,o,n){a.min=n.min+o.min,a.max=a.min+gt(o)}function $A(a,o,n){Hx(a.x,o.x,n.x),Hx(a.y,o.y,n.y)}function Gx(a,o,n){a.min=o.min-n.min,a.max=a.min+gt(o)}function Oi(a,o,n){Gx(a.x,o.x,n.x),Gx(a.y,o.y,n.y)}function Ix(a,o,n,i,d){return a-=o,a=Mi(a,1/n,i),d!==void 0&&(a=Mi(a,1/d,i)),a}function eE(a,o=0,n=1,i=.5,d,f=a,m=a){if(na.test(o)&&(o=parseFloat(o),o=Xe(m.min,m.max,o/100)-m.min),typeof o!="number")return;let h=Xe(f.min,f.max,i);a===f&&(h-=o),a.min=Ix(a.min,o,n,h,d),a.max=Ix(a.max,o,n,h,d)}function Yx(a,o,[n,i,d],f,m){eE(a,o[n],o[i],o[d],o.scale,f,m)}const tE=["x","scaleX","originX"],aE=["y","scaleY","originY"];function Qx(a,o,n,i){Yx(a.x,o,tE,n?n.x:void 0,i?i.x:void 0),Yx(a.y,o,aE,n?n.y:void 0,i?i.y:void 0)}function Zx(a){return a.translate===0&&a.scale===1}function yv(a){return Zx(a.x)&&Zx(a.y)}function Kx(a,o){return a.min===o.min&&a.max===o.max}function rE(a,o){return Kx(a.x,o.x)&&Kx(a.y,o.y)}function Jx(a,o){return Math.round(a.min)===Math.round(o.min)&&Math.round(a.max)===Math.round(o.max)}function Sv(a,o){return Jx(a.x,o.x)&&Jx(a.y,o.y)}function Wx(a){return gt(a.x)/gt(a.y)}function $x(a,o){return a.translate===o.translate&&a.scale===o.scale&&a.originPoint===o.originPoint}function oa(a){return[a("x"),a("y")]}function oE(a,o,n){let i="";const d=a.x.translate/o.x,f=a.y.translate/o.y,m=n?.z||0;if((d||f||m)&&(i=`translate3d(${d}px, ${f}px, ${m}px) `),(o.x!==1||o.y!==1)&&(i+=`scale(${1/o.x}, ${1/o.y}) `),n){const{transformPerspective:x,rotate:b,rotateX:S,rotateY:y,skewX:R,skewY:C}=n;x&&(i=`perspective(${x}px) ${i}`),b&&(i+=`rotate(${b}deg) `),S&&(i+=`rotateX(${S}deg) `),y&&(i+=`rotateY(${y}deg) `),R&&(i+=`skewX(${R}deg) `),C&&(i+=`skewY(${C}deg) `)}const h=a.x.scale*o.x,g=a.y.scale*o.y;return(h!==1||g!==1)&&(i+=`scale(${h}, ${g})`),i||"none"}const jv=["TopLeft","TopRight","BottomLeft","BottomRight"],sE=jv.length,eg=a=>typeof a=="string"?parseFloat(a):a,tg=a=>typeof a=="number"||te.test(a);function nE(a,o,n,i,d,f){d?(a.opacity=Xe(0,n.opacity??1,iE(i)),a.opacityExit=Xe(o.opacity??1,0,lE(i))):f&&(a.opacity=Xe(o.opacity??1,n.opacity??1,i));for(let m=0;m<sE;m++){const h=`border${jv[m]}Radius`;let g=ag(o,h),x=ag(n,h);if(g===void 0&&x===void 0)continue;g||(g=0),x||(x=0),g===0||x===0||tg(g)===tg(x)?(a[h]=Math.max(Xe(eg(g),eg(x),i),0),(na.test(x)||na.test(g))&&(a[h]+="%")):a[h]=x}(o.rotate||n.rotate)&&(a.rotate=Xe(o.rotate||0,n.rotate||0,i))}function ag(a,o){return a[o]!==void 0?a[o]:a.borderRadius}const iE=Av(0,.5,fb),lE=Av(.5,.95,Ft);function Av(a,o,n){return i=>i<a?0:i>o?1:n(Ps(a,o,i))}function cE(a,o,n){const i=mt(a)?a:Ro(a);return i.start(Rd("",i,o,n)),i.animation}function ks(a,o,n,i={passive:!0}){return a.addEventListener(o,n,i),()=>a.removeEventListener(o,n)}const uE=(a,o)=>a.depth-o.depth;class dE{constructor(){this.children=[],this.isDirty=!1}add(o){ud(this.children,o),this.isDirty=!0}remove(o){Ai(this.children,o),this.isDirty=!0}forEach(o){this.isDirty&&this.children.sort(uE),this.isDirty=!1,this.children.forEach(o)}}function mE(a,o){const n=xt.now(),i=({timestamp:d})=>{const f=d-n;f>=o&&(ar(i),a(f-o))};return Ve.setup(i,!0),()=>ar(i)}function yi(a){return mt(a)?a.get():a}class fE{constructor(){this.members=[]}add(o){ud(this.members,o);for(let n=this.members.length-1;n>=0;n--){const i=this.members[n];if(i===o||i===this.lead||i===this.prevLead)continue;const d=i.instance;(!d||d.isConnected===!1)&&!i.snapshot&&(Ai(this.members,i),i.unmount())}o.scheduleRender()}remove(o){if(Ai(this.members,o),o===this.prevLead&&(this.prevLead=void 0),o===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(o){for(let n=this.members.indexOf(o)-1;n>=0;n--){const i=this.members[n];if(i.isPresent!==!1&&i.instance?.isConnected!==!1)return this.promote(i),!0}return!1}promote(o,n){const i=this.lead;if(o!==i&&(this.prevLead=i,this.lead=o,o.show(),i)){i.updateSnapshot(),o.scheduleRender();const{layoutDependency:d}=i.options,{layoutDependency:f}=o.options;(d===void 0||d!==f)&&(o.resumeFrom=i,n&&(i.preserveOpacity=!0),i.snapshot&&(o.snapshot=i.snapshot,o.snapshot.latestValues=i.animationValues||i.latestValues),o.root?.isUpdating&&(o.isLayoutDirty=!0)),o.options.crossfade===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(o=>{o.options.onExitComplete?.(),o.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(o=>o.instance&&o.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}const Si={hasAnimatedSinceResize:!0,hasEverUpdated:!1},xu=["","X","Y","Z"],hE=1e3;let pE=0;function gu(a,o,n,i){const{latestValues:d}=o;d[a]&&(n[a]=d[a],o.setStaticValue(a,0),i&&(i[a]=0))}function Ev(a){if(a.hasCheckedOptimisedAppear=!0,a.root===a)return;const{visualElement:o}=a.options;if(!o)return;const n=Hb(o);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:d,layoutId:f}=a.options;window.MotionCancelOptimisedAnimation(n,"transform",Ve,!(d||f))}const{parent:i}=a;i&&!i.hasCheckedOptimisedAppear&&Ev(i)}function Rv({attachResizeListener:a,defaultParent:o,measureScroll:n,checkIsScrollRoot:i,resetTransform:d}){return class{constructor(m={},h=o?.()){this.id=pE++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(bE),this.nodes.forEach(jE),this.nodes.forEach(AE),this.nodes.forEach(vE)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=m,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let g=0;g<this.path.length;g++)this.path[g].shouldResetTransform=!0;this.root===this&&(this.nodes=new dE)}addEventListener(m,h){return this.eventHandlers.has(m)||this.eventHandlers.set(m,new md),this.eventHandlers.get(m).add(h)}notifyListeners(m,...h){const g=this.eventHandlers.get(m);g&&g.notify(...h)}hasListeners(m){return this.eventHandlers.has(m)}mount(m){if(this.instance)return;this.isSVG=_d(m)&&!gA(m),this.instance=m;const{layoutId:h,layout:g,visualElement:x}=this.options;if(x&&!x.current&&x.mount(m),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(g||h)&&(this.isLayoutDirty=!0),a){let b,S=0;const y=()=>this.root.updateBlockedByResize=!1;Ve.read(()=>{S=window.innerWidth}),a(m,()=>{const R=window.innerWidth;R!==S&&(S=R,this.root.updateBlockedByResize=!0,b&&b(),b=mE(y,250),Si.hasAnimatedSinceResize&&(Si.hasAnimatedSinceResize=!1,this.nodes.forEach(sg)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&x&&(h||g)&&this.addEventListener("didUpdate",({delta:b,hasLayoutChanged:S,hasRelativeLayoutChanged:y,layout:R})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const C=this.options.transition||x.getDefaultTransition()||ME,{onLayoutAnimationStart:N,onLayoutAnimationComplete:L}=x.getProps(),F=!this.targetLayout||!Sv(this.targetLayout,R),G=!S&&y;if(this.options.layoutRoot||this.resumeFrom||G||S&&(F||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const H={...Ed(C,"layout"),onPlay:N,onComplete:L};(x.shouldReduceMotion||this.options.layoutRoot)&&(H.delay=0,H.type=!1),this.startAnimation(H),this.setAnimationOrigin(b,G)}else S||sg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=R})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const m=this.getStack();m&&m.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ar(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(EE),this.animationId++)}getTransformTemplate(){const{visualElement:m}=this.options;return m&&m.getProps().transformTemplate}willUpdate(m=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Ev(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let b=0;b<this.path.length;b++){const S=this.path[b];S.shouldResetTransform=!0,S.updateScroll("snapshot"),S.options.layoutRoot&&S.willUpdate(!1)}const{layoutId:h,layout:g}=this.options;if(h===void 0&&!g)return;const x=this.getTransformTemplate();this.prevTransformTemplateValue=x?x(this.latestValues,""):void 0,this.updateSnapshot(),m&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(rg);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(og);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(SE),this.nodes.forEach(xE),this.nodes.forEach(gE)):this.nodes.forEach(og),this.clearAllSnapshots();const h=xt.now();lt.delta=ia(0,1e3/60,h-lt.timestamp),lt.timestamp=h,lt.isProcessing=!0,lu.update.process(lt),lu.preRender.process(lt),lu.render.process(lt),lt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Od.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(yE),this.sharedNodes.forEach(RE)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ve.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ve.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!gt(this.snapshot.measuredBox.x)&&!gt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let g=0;g<this.path.length;g++)this.path[g].updateScroll();const m=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=$e(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,m?m.layoutBox:void 0)}updateScroll(m="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===m&&(h=!1),h&&this.instance){const g=i(this.instance);this.scroll={animationId:this.root.animationId,phase:m,isRoot:g,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:g}}}resetTransform(){if(!d)return;const m=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!yv(this.projectionDelta),g=this.getTransformTemplate(),x=g?g(this.latestValues,""):void 0,b=x!==this.prevTransformTemplateValue;m&&this.instance&&(h||Tr(this.latestValues)||b)&&(d(this.instance,x),this.shouldResetTransform=!1,this.scheduleRender())}measure(m=!0){const h=this.measurePageBox();let g=this.removeElementScroll(h);return m&&(g=this.removeTransform(g)),OE(g),{animationId:this.root.animationId,measuredBox:h,layoutBox:g,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:m}=this.options;if(!m)return $e();const h=m.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(DE))){const{scroll:x}=this.root;x&&(jo(h.x,x.offset.x),jo(h.y,x.offset.y))}return h}removeElementScroll(m){const h=$e();if(Yt(h,m),this.scroll?.wasRoot)return h;for(let g=0;g<this.path.length;g++){const x=this.path[g],{scroll:b,options:S}=x;x!==this.root&&b&&S.layoutScroll&&(b.wasRoot&&Yt(h,m),jo(h.x,b.offset.x),jo(h.y,b.offset.y))}return h}applyTransform(m,h=!1){const g=$e();Yt(g,m);for(let x=0;x<this.path.length;x++){const b=this.path[x];!h&&b.options.layoutScroll&&b.scroll&&b!==b.root&&Ao(g,{x:-b.scroll.offset.x,y:-b.scroll.offset.y}),Tr(b.latestValues)&&Ao(g,b.latestValues)}return Tr(this.latestValues)&&Ao(g,this.latestValues),g}removeTransform(m){const h=$e();Yt(h,m);for(let g=0;g<this.path.length;g++){const x=this.path[g];if(!x.instance||!Tr(x.latestValues))continue;Zu(x.latestValues)&&x.updateSnapshot();const b=$e(),S=x.measurePageBox();Yt(b,S),Qx(h,x.latestValues,x.snapshot?x.snapshot.layoutBox:void 0,b)}return Tr(this.latestValues)&&Qx(h,this.latestValues),h}setTargetDelta(m){this.targetDelta=m,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(m){this.options={...this.options,...m,crossfade:m.crossfade!==void 0?m.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==lt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(m=!1){const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const g=!!this.resumingFrom||this!==h;if(!(m||g&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:b,layoutId:S}=this.options;if(!this.layout||!(b||S))return;this.resolvedRelativeTargetAt=lt.timestamp;const y=this.getClosestProjectingParent();y&&this.linkedParentVersion!==y.layoutVersion&&!y.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(y&&y.layout?this.createRelativeTarget(y,this.layout.layoutBox,y.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=$e(),this.targetWithTransforms=$e()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),$A(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Yt(this.target,this.layout.layoutBox),lv(this.target,this.targetDelta)):Yt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?this.createRelativeTarget(y,this.target,y.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Zu(this.parent.latestValues)||iv(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(m,h,g){this.relativeParent=m,this.linkedParentVersion=m.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$e(),this.relativeTargetOrigin=$e(),Oi(this.relativeTargetOrigin,h,g),Yt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const m=this.getLead(),h=!!this.resumingFrom||this!==m;let g=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(g=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(g=!1),this.resolvedRelativeTargetAt===lt.timestamp&&(g=!1),g)return;const{layout:x,layoutId:b}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(x||b))return;Yt(this.layoutCorrected,this.layout.layoutBox);const S=this.treeScale.x,y=this.treeScale.y;MA(this.layoutCorrected,this.treeScale,this.path,h),m.layout&&!m.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(m.target=m.layout.layoutBox,m.targetWithTransforms=$e());const{target:R}=m;if(!R){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(kx(this.prevProjectionDelta.x,this.projectionDelta.x),kx(this.prevProjectionDelta.y,this.projectionDelta.y)),qs(this.projectionDelta,this.layoutCorrected,R,this.latestValues),(this.treeScale.x!==S||this.treeScale.y!==y||!$x(this.projectionDelta.x,this.prevProjectionDelta.x)||!$x(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",R))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(m=!0){if(this.options.visualElement?.scheduleRender(),m){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=So(),this.projectionDelta=So(),this.projectionDeltaWithTransform=So()}setAnimationOrigin(m,h=!1){const g=this.snapshot,x=g?g.latestValues:{},b={...this.latestValues},S=So();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const y=$e(),R=g?g.source:void 0,C=this.layout?this.layout.source:void 0,N=R!==C,L=this.getStack(),F=!L||L.members.length<=1,G=!!(N&&!F&&this.options.crossfade===!0&&!this.path.some(CE));this.animationProgress=0;let H;this.mixTargetDelta=I=>{const P=I/1e3;ng(S.x,m.x,P),ng(S.y,m.y,P),this.setTargetDelta(S),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Oi(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox),TE(this.relativeTarget,this.relativeTargetOrigin,y,P),H&&rE(this.relativeTarget,H)&&(this.isProjectionDirty=!1),H||(H=$e()),Yt(H,this.relativeTarget)),N&&(this.animationValues=b,nE(b,x,this.latestValues,P,G,F)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(m){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(ar(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ve.update(()=>{Si.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ro(0)),this.motionValue.jump(0,!1),this.currentAnimation=cE(this.motionValue,[0,1e3],{...m,velocity:0,isSync:!0,onUpdate:h=>{this.mixTargetDelta(h),m.onUpdate&&m.onUpdate(h)},onStop:()=>{},onComplete:()=>{m.onComplete&&m.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const m=this.getStack();m&&m.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(hE),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const m=this.getLead();let{targetWithTransforms:h,target:g,layout:x,latestValues:b}=m;if(!(!h||!g||!x)){if(this!==m&&this.layout&&x&&Tv(this.options.animationType,this.layout.layoutBox,x.layoutBox)){g=this.target||$e();const S=gt(this.layout.layoutBox.x);g.x.min=m.target.x.min,g.x.max=g.x.min+S;const y=gt(this.layout.layoutBox.y);g.y.min=m.target.y.min,g.y.max=g.y.min+y}Yt(h,g),Ao(h,b),qs(this.projectionDeltaWithTransform,this.layoutCorrected,h,b)}}registerSharedNode(m,h){this.sharedNodes.has(m)||this.sharedNodes.set(m,new fE),this.sharedNodes.get(m).add(h);const x=h.options.initialPromotionConfig;h.promote({transition:x?x.transition:void 0,preserveFollowOpacity:x&&x.shouldPreserveFollowOpacity?x.shouldPreserveFollowOpacity(h):void 0})}isLead(){const m=this.getStack();return m?m.lead===this:!0}getLead(){const{layoutId:m}=this.options;return m?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:m}=this.options;return m?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:m}=this.options;if(m)return this.root.sharedNodes.get(m)}promote({needsReset:m,transition:h,preserveFollowOpacity:g}={}){const x=this.getStack();x&&x.promote(this,g),m&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const m=this.getStack();return m?m.relegate(this):!1}resetSkewAndRotation(){const{visualElement:m}=this.options;if(!m)return;let h=!1;const{latestValues:g}=m;if((g.z||g.rotate||g.rotateX||g.rotateY||g.rotateZ||g.skewX||g.skewY)&&(h=!0),!h)return;const x={};g.z&&gu("z",m,x,this.animationValues);for(let b=0;b<xu.length;b++)gu(`rotate${xu[b]}`,m,x,this.animationValues),gu(`skew${xu[b]}`,m,x,this.animationValues);m.render();for(const b in x)m.setStaticValue(b,x[b]),this.animationValues&&(this.animationValues[b]=x[b]);m.scheduleRender()}applyProjectionStyles(m,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){m.visibility="hidden";return}const g=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,m.visibility="",m.opacity="",m.pointerEvents=yi(h?.pointerEvents)||"",m.transform=g?g(this.latestValues,""):"none";return}const x=this.getLead();if(!this.projectionDelta||!this.layout||!x.target){this.options.layoutId&&(m.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,m.pointerEvents=yi(h?.pointerEvents)||""),this.hasProjected&&!Tr(this.latestValues)&&(m.transform=g?g({},""):"none",this.hasProjected=!1);return}m.visibility="";const b=x.animationValues||x.latestValues;this.applyTransformsToTarget();let S=oE(this.projectionDeltaWithTransform,this.treeScale,b);g&&(S=g(b,S)),m.transform=S;const{x:y,y:R}=this.projectionDelta;m.transformOrigin=`${y.origin*100}% ${R.origin*100}% 0`,x.animationValues?m.opacity=x===this?b.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:b.opacityExit:m.opacity=x===this?b.opacity!==void 0?b.opacity:"":b.opacityExit!==void 0?b.opacityExit:0;for(const C in Ju){if(b[C]===void 0)continue;const{correct:N,applyTo:L,isCSSVariable:F}=Ju[C],G=S==="none"?b[C]:N(b[C],x);if(L){const H=L.length;for(let I=0;I<H;I++)m[L[I]]=G}else F?this.options.visualElement.renderState.vars[C]=G:m[C]=G}this.options.layoutId&&(m.pointerEvents=x===this?yi(h?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(m=>m.currentAnimation?.stop()),this.root.nodes.forEach(rg),this.root.sharedNodes.clear()}}}function xE(a){a.updateLayout()}function gE(a){const o=a.resumeFrom?.snapshot||a.snapshot;if(a.isLead()&&a.layout&&o&&a.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:i}=a.layout,{animationType:d}=a.options,f=o.source!==a.layout.source;d==="size"?oa(b=>{const S=f?o.measuredBox[b]:o.layoutBox[b],y=gt(S);S.min=n[b].min,S.max=S.min+y}):Tv(d,o.layoutBox,n)&&oa(b=>{const S=f?o.measuredBox[b]:o.layoutBox[b],y=gt(n[b]);S.max=S.min+y,a.relativeTarget&&!a.currentAnimation&&(a.isProjectionDirty=!0,a.relativeTarget[b].max=a.relativeTarget[b].min+y)});const m=So();qs(m,n,o.layoutBox);const h=So();f?qs(h,a.applyTransform(i,!0),o.measuredBox):qs(h,n,o.layoutBox);const g=!yv(m);let x=!1;if(!a.resumeFrom){const b=a.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:S,layout:y}=b;if(S&&y){const R=$e();Oi(R,o.layoutBox,S.layoutBox);const C=$e();Oi(C,n,y.layoutBox),Sv(R,C)||(x=!0),b.options.layoutRoot&&(a.relativeTarget=C,a.relativeTargetOrigin=R,a.relativeParent=b)}}}a.notifyListeners("didUpdate",{layout:n,snapshot:o,delta:h,layoutDelta:m,hasLayoutChanged:g,hasRelativeLayoutChanged:x})}else if(a.isLead()){const{onExitComplete:n}=a.options;n&&n()}a.options.transition=void 0}function bE(a){a.parent&&(a.isProjecting()||(a.isProjectionDirty=a.parent.isProjectionDirty),a.isSharedProjectionDirty||(a.isSharedProjectionDirty=!!(a.isProjectionDirty||a.parent.isProjectionDirty||a.parent.isSharedProjectionDirty)),a.isTransformDirty||(a.isTransformDirty=a.parent.isTransformDirty))}function vE(a){a.isProjectionDirty=a.isSharedProjectionDirty=a.isTransformDirty=!1}function yE(a){a.clearSnapshot()}function rg(a){a.clearMeasurements()}function og(a){a.isLayoutDirty=!1}function SE(a){const{visualElement:o}=a.options;o&&o.getProps().onBeforeLayoutMeasure&&o.notify("BeforeLayoutMeasure"),a.resetTransform()}function sg(a){a.finishAnimation(),a.targetDelta=a.relativeTarget=a.target=void 0,a.isProjectionDirty=!0}function jE(a){a.resolveTargetDelta()}function AE(a){a.calcProjection()}function EE(a){a.resetSkewAndRotation()}function RE(a){a.removeLeadSnapshot()}function ng(a,o,n){a.translate=Xe(o.translate,0,n),a.scale=Xe(o.scale,1,n),a.origin=o.origin,a.originPoint=o.originPoint}function ig(a,o,n,i){a.min=Xe(o.min,n.min,i),a.max=Xe(o.max,n.max,i)}function TE(a,o,n,i){ig(a.x,o.x,n.x,i),ig(a.y,o.y,n.y,i)}function CE(a){return a.animationValues&&a.animationValues.opacityExit!==void 0}const ME={duration:.45,ease:[.4,0,.1,1]},lg=a=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(a),cg=lg("applewebkit/")&&!lg("chrome/")?Math.round:Ft;function ug(a){a.min=cg(a.min),a.max=cg(a.max)}function OE(a){ug(a.x),ug(a.y)}function Tv(a,o,n){return a==="position"||a==="preserve-aspect"&&!WA(Wx(o),Wx(n),.2)}function DE(a){return a!==a.root&&a.scroll?.wasRoot}const _E=Rv({attachResizeListener:(a,o)=>ks(a,"resize",o),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),bu={current:void 0},Cv=Rv({measureScroll:a=>({x:a.scrollLeft,y:a.scrollTop}),defaultParent:()=>{if(!bu.current){const a=new _E({});a.mount(window),a.setOptions({layoutScroll:!0}),bu.current=a}return bu.current},resetTransform:(a,o)=>{a.style.transform=o!==void 0?o:"none"},checkIsScrollRoot:a=>window.getComputedStyle(a).position==="fixed"}),Ld=z.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"});function dg(a,o){if(typeof a=="function")return a(o);a!=null&&(a.current=o)}function wE(...a){return o=>{let n=!1;const i=a.map(d=>{const f=dg(d,o);return!n&&typeof f=="function"&&(n=!0),f});if(n)return()=>{for(let d=0;d<i.length;d++){const f=i[d];typeof f=="function"?f():dg(a[d],null)}}}}function NE(...a){return z.useCallback(wE(...a),a)}class qE extends z.Component{getSnapshotBeforeUpdate(o){const n=this.props.childRef.current;if(n&&o.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const i=n.offsetParent,d=Yu(i)&&i.offsetWidth||0,f=Yu(i)&&i.offsetHeight||0,m=this.props.sizeRef.current;m.height=n.offsetHeight||0,m.width=n.offsetWidth||0,m.top=n.offsetTop,m.left=n.offsetLeft,m.right=d-m.width-m.left,m.bottom=f-m.height-m.top}return null}componentDidUpdate(){}render(){return this.props.children}}function zE({children:a,isPresent:o,anchorX:n,anchorY:i,root:d,pop:f}){const m=z.useId(),h=z.useRef(null),g=z.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:x}=z.useContext(Ld),b=a.props?.ref??a?.ref,S=NE(h,b);return z.useInsertionEffect(()=>{const{width:y,height:R,top:C,left:N,right:L,bottom:F}=g.current;if(o||f===!1||!h.current||!y||!R)return;const G=n==="left"?`left: ${N}`:`right: ${L}`,H=i==="bottom"?`bottom: ${F}`:`top: ${C}`;h.current.dataset.motionPopId=m;const I=document.createElement("style");x&&(I.nonce=x);const P=d??document.head;return P.appendChild(I),I.sheet&&I.sheet.insertRule(`
          [data-motion-pop-id="${m}"] {
            position: absolute !important;
            width: ${y}px !important;
            height: ${R}px !important;
            ${G}px !important;
            ${H}px !important;
          }
        `),()=>{P.contains(I)&&P.removeChild(I)}},[o]),l.jsx(qE,{isPresent:o,childRef:h,sizeRef:g,pop:f,children:f===!1?a:z.cloneElement(a,{ref:S})})}const LE=({children:a,initial:o,isPresent:n,onExitComplete:i,custom:d,presenceAffectsLayout:f,mode:m,anchorX:h,anchorY:g,root:x})=>{const b=cd(VE),S=z.useId();let y=!0,R=z.useMemo(()=>(y=!1,{id:S,initial:o,isPresent:n,custom:d,onExitComplete:C=>{b.set(C,!0);for(const N of b.values())if(!N)return;i&&i()},register:C=>(b.set(C,!1),()=>b.delete(C))}),[n,b,i]);return f&&y&&(R={...R}),z.useMemo(()=>{b.forEach((C,N)=>b.set(N,!1))},[n]),z.useEffect(()=>{!n&&!b.size&&i&&i()},[n]),a=l.jsx(zE,{pop:m==="popLayout",isPresent:n,anchorX:h,anchorY:g,root:x,children:a}),l.jsx(Pi.Provider,{value:R,children:a})};function VE(){return new Map}function Mv(a=!0){const o=z.useContext(Pi);if(o===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:d}=o,f=z.useId();z.useEffect(()=>{if(a)return d(f)},[a]);const m=z.useCallback(()=>a&&i&&i(f),[f,i,a]);return!n&&i?[!1,m]:[!0]}const di=a=>a.key||"";function mg(a){const o=[];return z.Children.forEach(a,n=>{z.isValidElement(n)&&o.push(n)}),o}const Ov=({children:a,custom:o,initial:n=!0,onExitComplete:i,presenceAffectsLayout:d=!0,mode:f="sync",propagate:m=!1,anchorX:h="left",anchorY:g="top",root:x})=>{const[b,S]=Mv(m),y=z.useMemo(()=>mg(a),[a]),R=m&&!b?[]:y.map(di),C=z.useRef(!0),N=z.useRef(y),L=cd(()=>new Map),F=z.useRef(new Set),[G,H]=z.useState(y),[I,P]=z.useState(y);tb(()=>{C.current=!1,N.current=y;for(let X=0;X<I.length;X++){const W=di(I[X]);R.includes(W)?(L.delete(W),F.current.delete(W)):L.get(W)!==!0&&L.set(W,!1)}},[I,R.length,R.join("-")]);const K=[];if(y!==G){let X=[...y];for(let W=0;W<I.length;W++){const je=I[W],_e=di(je);R.includes(_e)||(X.splice(W,0,je),K.push(je))}return f==="wait"&&K.length&&(X=K),P(mg(X)),H(y),null}const{forceRender:ce}=z.useContext(ld);return l.jsx(l.Fragment,{children:I.map(X=>{const W=di(X),je=m&&!b?!1:y===I||R.includes(W),_e=()=>{if(F.current.has(W))return;if(F.current.add(W),L.has(W))L.set(W,!0);else return;let Ae=!0;L.forEach(ft=>{ft||(Ae=!1)}),Ae&&(ce?.(),P(N.current),m&&S?.(),i&&i())};return l.jsx(LE,{isPresent:je,initial:!C.current||n?void 0:!1,custom:o,presenceAffectsLayout:d,mode:f,root:x,onExitComplete:je?void 0:_e,anchorX:h,anchorY:g,children:X},W)})})},Dv=z.createContext({strict:!1}),fg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let hg=!1;function PE(){if(hg)return;const a={};for(const o in fg)a[o]={isEnabled:n=>fg[o].some(i=>!!n[i])};ov(a),hg=!0}function _v(){return PE(),EA()}function BE(a){const o=_v();for(const n in a)o[n]={...o[n],...a[n]};ov(o)}const XE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Di(a){return a.startsWith("while")||a.startsWith("drag")&&a!=="draggable"||a.startsWith("layout")||a.startsWith("onTap")||a.startsWith("onPan")||a.startsWith("onLayout")||XE.has(a)}let wv=a=>!Di(a);function UE(a){typeof a=="function"&&(wv=o=>o.startsWith("on")?!Di(o):a(o))}try{UE(require("@emotion/is-prop-valid").default)}catch{}function kE(a,o,n){const i={};for(const d in a)d==="values"&&typeof a.values=="object"||(wv(d)||n===!0&&Di(d)||!o&&!Di(d)||a.draggable&&d.startsWith("onDrag"))&&(i[d]=a[d]);return i}const Ui=z.createContext({});function FE(a,o){if(Xi(a)){const{initial:n,animate:i}=a;return{initial:n===!1||Us(n)?n:void 0,animate:Us(i)?i:void 0}}return a.inherit!==!1?o:{}}function HE(a){const{initial:o,animate:n}=FE(a,z.useContext(Ui));return z.useMemo(()=>({initial:o,animate:n}),[pg(o),pg(n)])}function pg(a){return Array.isArray(a)?a.join(" "):a}const Vd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Nv(a,o,n){for(const i in o)!mt(o[i])&&!dv(i,n)&&(a[i]=o[i])}function GE({transformTemplate:a},o){return z.useMemo(()=>{const n=Vd();return qd(n,o,a),Object.assign({},n.vars,n.style)},[o])}function IE(a,o){const n=a.style||{},i={};return Nv(i,n,a),Object.assign(i,GE(a,o)),i}function YE(a,o){const n={},i=IE(a,o);return a.drag&&a.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=a.drag===!0?"none":`pan-${a.drag==="x"?"y":"x"}`),a.tabIndex===void 0&&(a.onTap||a.onTapStart||a.whileTap)&&(n.tabIndex=0),n.style=i,n}const qv=()=>({...Vd(),attrs:{}});function QE(a,o,n,i){const d=z.useMemo(()=>{const f=qv();return mv(f,o,hv(i),a.transformTemplate,a.style),{...f.attrs,style:{...f.style}}},[o]);if(a.style){const f={};Nv(f,a.style,a),d.style={...f,...d.style}}return d}const ZE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Pd(a){return typeof a!="string"||a.includes("-")?!1:!!(ZE.indexOf(a)>-1||/[A-Z]/u.test(a))}function KE(a,o,n,{latestValues:i},d,f=!1,m){const g=(m??Pd(a)?QE:YE)(o,i,d,a),x=kE(o,typeof a=="string",f),b=a!==z.Fragment?{...x,...g,ref:n}:{},{children:S}=o,y=z.useMemo(()=>mt(S)?S.get():S,[S]);return z.createElement(a,{...b,children:y})}function JE({scrapeMotionValuesFromProps:a,createRenderState:o},n,i,d){return{latestValues:WE(n,i,d,a),renderState:o()}}function WE(a,o,n,i){const d={},f=i(a,{});for(const y in f)d[y]=yi(f[y]);let{initial:m,animate:h}=a;const g=Xi(a),x=av(a);o&&x&&!g&&a.inherit!==!1&&(m===void 0&&(m=o.initial),h===void 0&&(h=o.animate));let b=n?n.initial===!1:!1;b=b||m===!1;const S=b?h:m;if(S&&typeof S!="boolean"&&!Bi(S)){const y=Array.isArray(S)?S:[S];for(let R=0;R<y.length;R++){const C=Td(a,y[R]);if(C){const{transitionEnd:N,transition:L,...F}=C;for(const G in F){let H=F[G];if(Array.isArray(H)){const I=b?H.length-1:0;H=H[I]}H!==null&&(d[G]=H)}for(const G in N)d[G]=N[G]}}}return d}const zv=a=>(o,n)=>{const i=z.useContext(Ui),d=z.useContext(Pi),f=()=>JE(a,o,i,d);return n?f():cd(f)},$E=zv({scrapeMotionValuesFromProps:zd,createRenderState:Vd}),eR=zv({scrapeMotionValuesFromProps:pv,createRenderState:qv}),tR=Symbol.for("motionComponentSymbol");function aR(a,o,n){const i=z.useRef(n);z.useInsertionEffect(()=>{i.current=n});const d=z.useRef(null);return z.useCallback(f=>{f&&a.onMount?.(f);const m=i.current;if(typeof m=="function")if(f){const h=m(f);typeof h=="function"&&(d.current=h)}else d.current?(d.current(),d.current=null):m(f);else m&&(m.current=f);o&&(f?o.mount(f):o.unmount())},[o])}const Lv=z.createContext({});function bo(a){return a&&typeof a=="object"&&Object.prototype.hasOwnProperty.call(a,"current")}function rR(a,o,n,i,d,f){const{visualElement:m}=z.useContext(Ui),h=z.useContext(Dv),g=z.useContext(Pi),x=z.useContext(Ld),b=x.reducedMotion,S=x.skipAnimations,y=z.useRef(null),R=z.useRef(!1);i=i||h.renderer,!y.current&&i&&(y.current=i(a,{visualState:o,parent:m,props:n,presenceContext:g,blockInitialAnimation:g?g.initial===!1:!1,reducedMotionConfig:b,skipAnimations:S,isSVG:f}),R.current&&y.current&&(y.current.manuallyAnimateOnMount=!0));const C=y.current,N=z.useContext(Lv);C&&!C.projection&&d&&(C.type==="html"||C.type==="svg")&&oR(y.current,n,d,N);const L=z.useRef(!1);z.useInsertionEffect(()=>{C&&L.current&&C.update(n,g)});const F=n[Fb],G=z.useRef(!!F&&typeof window<"u"&&!window.MotionHandoffIsComplete?.(F)&&window.MotionHasOptimisedAnimation?.(F));return tb(()=>{R.current=!0,C&&(L.current=!0,window.MotionIsMounted=!0,C.updateFeatures(),C.scheduleRenderMicrotask(),G.current&&C.animationState&&C.animationState.animateChanges())}),z.useEffect(()=>{C&&(!G.current&&C.animationState&&C.animationState.animateChanges(),G.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(F)}),G.current=!1),C.enteringChildren=void 0)}),C}function oR(a,o,n,i){const{layoutId:d,layout:f,drag:m,dragConstraints:h,layoutScroll:g,layoutRoot:x,layoutCrossfade:b}=o;a.projection=new n(a.latestValues,o["data-framer-portal-id"]?void 0:Vv(a.parent)),a.projection.setOptions({layoutId:d,layout:f,alwaysMeasureLayout:!!m||h&&bo(h),visualElement:a,animationType:typeof f=="string"?f:"both",initialPromotionConfig:i,crossfade:b,layoutScroll:g,layoutRoot:x})}function Vv(a){if(a)return a.options.allowProjection!==!1?a.projection:Vv(a.parent)}function vu(a,{forwardMotionProps:o=!1,type:n}={},i,d){i&&BE(i);const f=n?n==="svg":Pd(a),m=f?eR:$E;function h(x,b){let S;const y={...z.useContext(Ld),...x,layoutId:sR(x)},{isStatic:R}=y,C=HE(x),N=m(x,R);if(!R&&typeof window<"u"){nR();const L=iR(y);S=L.MeasureLayout,C.visualElement=rR(a,N,y,d,L.ProjectionNode,f)}return l.jsxs(Ui.Provider,{value:C,children:[S&&C.visualElement?l.jsx(S,{visualElement:C.visualElement,...y}):null,KE(a,x,aR(N,C.visualElement,b),N,R,o,f)]})}h.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const g=z.forwardRef(h);return g[tR]=a,g}function sR({layoutId:a}){const o=z.useContext(ld).id;return o&&a!==void 0?o+"-"+a:a}function nR(a,o){z.useContext(Dv).strict}function iR(a){const o=_v(),{drag:n,layout:i}=o;if(!n&&!i)return{};const d={...n,...i};return{MeasureLayout:n?.isEnabled(a)||i?.isEnabled(a)?d.MeasureLayout:void 0,ProjectionNode:d.ProjectionNode}}function lR(a,o){if(typeof Proxy>"u")return vu;const n=new Map,i=(f,m)=>vu(f,m,a,o),d=(f,m)=>i(f,m);return new Proxy(d,{get:(f,m)=>m==="create"?i:(n.has(m)||n.set(m,vu(m,void 0,a,o)),n.get(m))})}const cR=(a,o)=>o.isSVG??Pd(a)?new UA(o):new zA(o,{allowProjection:a!==z.Fragment});class uR extends rr{constructor(o){super(o),o.animationState||(o.animationState=IA(o))}updateAnimationControlsSubscription(){const{animate:o}=this.node.getProps();Bi(o)&&(this.unmountControls=o.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:o}=this.node.getProps(),{animate:n}=this.node.prevProps||{};o!==n&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let dR=0;class mR extends rr{constructor(){super(...arguments),this.id=dR++}update(){if(!this.node.presenceContext)return;const{isPresent:o,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||o===i)return;const d=this.node.animationState.setActive("exit",!o);n&&!o&&d.then(()=>{n(this.id)})}mount(){const{register:o,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),o&&(this.unmount=o(this.id))}unmount(){}}const fR={animation:{Feature:uR},exit:{Feature:mR}};function Is(a){return{point:{x:a.pageX,y:a.pageY}}}const hR=a=>o=>Dd(o)&&a(o,Is(o));function zs(a,o,n,i){return ks(a,o,hR(n),i)}const Pv=({current:a})=>a?a.ownerDocument.defaultView:null,xg=(a,o)=>Math.abs(a-o);function pR(a,o){const n=xg(a.x,o.x),i=xg(a.y,o.y);return Math.sqrt(n**2+i**2)}const gg=new Set(["auto","scroll"]);class Bv{constructor(o,n,{transformPagePoint:i,contextWindow:d=window,dragSnapToOrigin:f=!1,distanceThreshold:m=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=R=>{this.handleScroll(R.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const R=Su(this.lastMoveEventInfo,this.history),C=this.startEvent!==null,N=pR(R.offset,{x:0,y:0})>=this.distanceThreshold;if(!C&&!N)return;const{point:L}=R,{timestamp:F}=lt;this.history.push({...L,timestamp:F});const{onStart:G,onMove:H}=this.handlers;C||(G&&G(this.lastMoveEvent,R),this.startEvent=this.lastMoveEvent),H&&H(this.lastMoveEvent,R)},this.handlePointerMove=(R,C)=>{this.lastMoveEvent=R,this.lastMoveEventInfo=yu(C,this.transformPagePoint),Ve.update(this.updatePoint,!0)},this.handlePointerUp=(R,C)=>{this.end();const{onEnd:N,onSessionEnd:L,resumeAnimation:F}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&F&&F(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const G=Su(R.type==="pointercancel"?this.lastMoveEventInfo:yu(C,this.transformPagePoint),this.history);this.startEvent&&N&&N(R,G),L&&L(R,G)},!Dd(o))return;this.dragSnapToOrigin=f,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=m,this.contextWindow=d||window;const g=Is(o),x=yu(g,this.transformPagePoint),{point:b}=x,{timestamp:S}=lt;this.history=[{...b,timestamp:S}];const{onSessionStart:y}=n;y&&y(o,Su(x,this.history)),this.removeListeners=Fs(zs(this.contextWindow,"pointermove",this.handlePointerMove),zs(this.contextWindow,"pointerup",this.handlePointerUp),zs(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(o){let n=o.parentElement;for(;n;){const i=getComputedStyle(n);(gg.has(i.overflowX)||gg.has(i.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(o){const n=this.scrollPositions.get(o);if(!n)return;const i=o===window,d=i?{x:window.scrollX,y:window.scrollY}:{x:o.scrollLeft,y:o.scrollTop},f={x:d.x-n.x,y:d.y-n.y};f.x===0&&f.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=f.x,this.lastMoveEventInfo.point.y+=f.y):this.history.length>0&&(this.history[0].x-=f.x,this.history[0].y-=f.y),this.scrollPositions.set(o,d),Ve.update(this.updatePoint,!0))}updateHandlers(o){this.handlers=o}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),ar(this.updatePoint)}}function yu(a,o){return o?{point:o(a.point)}:a}function bg(a,o){return{x:a.x-o.x,y:a.y-o.y}}function Su({point:a},o){return{point:a,delta:bg(a,Xv(o)),offset:bg(a,xR(o)),velocity:gR(o,.1)}}function xR(a){return a[0]}function Xv(a){return a[a.length-1]}function gR(a,o){if(a.length<2)return{x:0,y:0};let n=a.length-1,i=null;const d=Xv(a);for(;n>=0&&(i=a[n],!(d.timestamp-i.timestamp>Kt(o)));)n--;if(!i)return{x:0,y:0};i===a[0]&&a.length>2&&d.timestamp-i.timestamp>Kt(o)*2&&(i=a[1]);const f=kt(d.timestamp-i.timestamp);if(f===0)return{x:0,y:0};const m={x:(d.x-i.x)/f,y:(d.y-i.y)/f};return m.x===1/0&&(m.x=0),m.y===1/0&&(m.y=0),m}function bR(a,{min:o,max:n},i){return o!==void 0&&a<o?a=i?Xe(o,a,i.min):Math.max(a,o):n!==void 0&&a>n&&(a=i?Xe(n,a,i.max):Math.min(a,n)),a}function vg(a,o,n){return{min:o!==void 0?a.min+o:void 0,max:n!==void 0?a.max+n-(a.max-a.min):void 0}}function vR(a,{top:o,left:n,bottom:i,right:d}){return{x:vg(a.x,n,d),y:vg(a.y,o,i)}}function yg(a,o){let n=o.min-a.min,i=o.max-a.max;return o.max-o.min<a.max-a.min&&([n,i]=[i,n]),{min:n,max:i}}function yR(a,o){return{x:yg(a.x,o.x),y:yg(a.y,o.y)}}function SR(a,o){let n=.5;const i=gt(a),d=gt(o);return d>i?n=Ps(o.min,o.max-i,a.min):i>d&&(n=Ps(a.min,a.max-d,o.min)),ia(0,1,n)}function jR(a,o){const n={};return o.min!==void 0&&(n.min=o.min-a.min),o.max!==void 0&&(n.max=o.max-a.min),n}const Wu=.35;function AR(a=Wu){return a===!1?a=0:a===!0&&(a=Wu),{x:Sg(a,"left","right"),y:Sg(a,"top","bottom")}}function Sg(a,o,n){return{min:jg(a,o),max:jg(a,n)}}function jg(a,o){return typeof a=="number"?a:a[o]||0}const ER=new WeakMap;class RR{constructor(o){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=$e(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=o}start(o,{snapToCursor:n=!1,distanceThreshold:i}={}){const{presenceContext:d}=this.visualElement;if(d&&d.isPresent===!1)return;const f=S=>{n&&this.snapToCursor(Is(S).point),this.stopAnimation()},m=(S,y)=>{const{drag:R,dragPropagation:C,onDragStart:N}=this.getProps();if(R&&!C&&(this.openDragLock&&this.openDragLock(),this.openDragLock=eA(R),!this.openDragLock))return;this.latestPointerEvent=S,this.latestPanInfo=y,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),oa(F=>{let G=this.getAxisMotionValue(F).get()||0;if(na.test(G)){const{projection:H}=this.visualElement;if(H&&H.layout){const I=H.layout.layoutBox[F];I&&(G=gt(I)*(parseFloat(G)/100))}}this.originPoint[F]=G}),N&&Ve.update(()=>N(S,y),!1,!0),Fu(this.visualElement,"transform");const{animationState:L}=this.visualElement;L&&L.setActive("whileDrag",!0)},h=(S,y)=>{this.latestPointerEvent=S,this.latestPanInfo=y;const{dragPropagation:R,dragDirectionLock:C,onDirectionLock:N,onDrag:L}=this.getProps();if(!R&&!this.openDragLock)return;const{offset:F}=y;if(C&&this.currentDirection===null){this.currentDirection=CR(F),this.currentDirection!==null&&N&&N(this.currentDirection);return}this.updateAxis("x",y.point,F),this.updateAxis("y",y.point,F),this.visualElement.render(),L&&Ve.update(()=>L(S,y),!1,!0)},g=(S,y)=>{this.latestPointerEvent=S,this.latestPanInfo=y,this.stop(S,y),this.latestPointerEvent=null,this.latestPanInfo=null},x=()=>{const{dragSnapToOrigin:S}=this.getProps();(S||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:b}=this.getProps();this.panSession=new Bv(o,{onSessionStart:f,onStart:m,onMove:h,onSessionEnd:g,resumeAnimation:x},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:b,distanceThreshold:i,contextWindow:Pv(this.visualElement),element:this.visualElement.current})}stop(o,n){const i=o||this.latestPointerEvent,d=n||this.latestPanInfo,f=this.isDragging;if(this.cancel(),!f||!d||!i)return;const{velocity:m}=d;this.startAnimation(m);const{onDragEnd:h}=this.getProps();h&&Ve.postRender(()=>h(i,d))}cancel(){this.isDragging=!1;const{projection:o,animationState:n}=this.visualElement;o&&(o.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(o,n,i){const{drag:d}=this.getProps();if(!i||!mi(o,d,this.currentDirection))return;const f=this.getAxisMotionValue(o);let m=this.originPoint[o]+i[o];this.constraints&&this.constraints[o]&&(m=bR(m,this.constraints[o],this.elastic[o])),f.set(m)}resolveConstraints(){const{dragConstraints:o,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,d=this.constraints;o&&bo(o)?this.constraints||(this.constraints=this.resolveRefConstraints()):o&&i?this.constraints=vR(i.layoutBox,o):this.constraints=!1,this.elastic=AR(n),d!==this.constraints&&!bo(o)&&i&&this.constraints&&!this.hasMutatedConstraints&&oa(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=jR(i.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:o,onMeasureDragConstraints:n}=this.getProps();if(!o||!bo(o))return!1;const i=o.current,{projection:d}=this.visualElement;if(!d||!d.layout)return!1;const f=OA(i,d.root,this.visualElement.getTransformPagePoint());let m=yR(d.layout.layoutBox,f);if(n){const h=n(TA(m));this.hasMutatedConstraints=!!h,h&&(m=nv(h))}return m}startAnimation(o){const{drag:n,dragMomentum:i,dragElastic:d,dragTransition:f,dragSnapToOrigin:m,onDragTransitionEnd:h}=this.getProps(),g=this.constraints||{},x=oa(b=>{if(!mi(b,n,this.currentDirection))return;let S=g&&g[b]||{};m&&(S={min:0,max:0});const y=d?200:1e6,R=d?40:1e7,C={type:"inertia",velocity:i?o[b]:0,bounceStiffness:y,bounceDamping:R,timeConstant:750,restDelta:1,restSpeed:10,...f,...S};return this.startAxisValueAnimation(b,C)});return Promise.all(x).then(h)}startAxisValueAnimation(o,n){const i=this.getAxisMotionValue(o);return Fu(this.visualElement,o),i.start(Rd(o,i,0,n,this.visualElement,!1))}stopAnimation(){oa(o=>this.getAxisMotionValue(o).stop())}getAxisMotionValue(o){const n=`_drag${o.toUpperCase()}`,i=this.visualElement.getProps(),d=i[n];return d||this.visualElement.getValue(o,(i.initial?i.initial[o]:void 0)||0)}snapToCursor(o){oa(n=>{const{drag:i}=this.getProps();if(!mi(n,i,this.currentDirection))return;const{projection:d}=this.visualElement,f=this.getAxisMotionValue(n);if(d&&d.layout){const{min:m,max:h}=d.layout.layoutBox[n],g=f.get()||0;f.set(o[n]-Xe(m,h,.5)+g)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:o,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!bo(n)||!i||!this.constraints)return;this.stopAnimation();const d={x:0,y:0};oa(m=>{const h=this.getAxisMotionValue(m);if(h&&this.constraints!==!1){const g=h.get();d[m]=SR({min:g,max:g},this.constraints[m])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),oa(m=>{if(!mi(m,o,null))return;const h=this.getAxisMotionValue(m),{min:g,max:x}=this.constraints[m];h.set(Xe(g,x,d[m]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;ER.set(this.visualElement,this);const o=this.visualElement.current,n=zs(o,"pointerdown",x=>{const{drag:b,dragListener:S=!0}=this.getProps(),y=x.target,R=y!==o&&nA(y);b&&S&&!R&&this.start(x)});let i;const d=()=>{const{dragConstraints:x}=this.getProps();bo(x)&&x.current&&(this.constraints=this.resolveRefConstraints(),i||(i=TR(o,x.current,()=>this.scalePositionWithinConstraints())))},{projection:f}=this.visualElement,m=f.addEventListener("measure",d);f&&!f.layout&&(f.root&&f.root.updateScroll(),f.updateLayout()),Ve.read(d);const h=ks(window,"resize",()=>this.scalePositionWithinConstraints()),g=f.addEventListener("didUpdate",(({delta:x,hasLayoutChanged:b})=>{this.isDragging&&b&&(oa(S=>{const y=this.getAxisMotionValue(S);y&&(this.originPoint[S]+=x[S].translate,y.set(y.get()+x[S].translate))}),this.visualElement.render())}));return()=>{h(),n(),m(),g&&g(),i&&i()}}getProps(){const o=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:d=!1,dragConstraints:f=!1,dragElastic:m=Wu,dragMomentum:h=!0}=o;return{...o,drag:n,dragDirectionLock:i,dragPropagation:d,dragConstraints:f,dragElastic:m,dragMomentum:h}}}function Ag(a){let o=!0;return()=>{if(o){o=!1;return}a()}}function TR(a,o,n){const i=Ox(a,Ag(n)),d=Ox(o,Ag(n));return()=>{i(),d()}}function mi(a,o,n){return(o===!0||o===a)&&(n===null||n===a)}function CR(a,o=10){let n=null;return Math.abs(a.y)>o?n="y":Math.abs(a.x)>o&&(n="x"),n}class MR extends rr{constructor(o){super(o),this.removeGroupControls=Ft,this.removeListeners=Ft,this.controls=new RR(o)}mount(){const{dragControls:o}=this.node.getProps();o&&(this.removeGroupControls=o.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ft}update(){const{dragControls:o}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};o!==n&&(this.removeGroupControls(),o&&(this.removeGroupControls=o.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const ju=a=>(o,n)=>{a&&Ve.update(()=>a(o,n),!1,!0)};class OR extends rr{constructor(){super(...arguments),this.removePointerDownListener=Ft}onPointerDown(o){this.session=new Bv(o,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Pv(this.node)})}createPanHandlers(){const{onPanSessionStart:o,onPanStart:n,onPan:i,onPanEnd:d}=this.node.getProps();return{onSessionStart:ju(o),onStart:ju(n),onMove:ju(i),onEnd:(f,m)=>{delete this.session,d&&Ve.postRender(()=>d(f,m))}}}mount(){this.removePointerDownListener=zs(this.node.current,"pointerdown",o=>this.onPointerDown(o))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Au=!1;class DR extends z.Component{componentDidMount(){const{visualElement:o,layoutGroup:n,switchLayoutGroup:i,layoutId:d}=this.props,{projection:f}=o;f&&(n.group&&n.group.add(f),i&&i.register&&d&&i.register(f),Au&&f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Si.hasEverUpdated=!0}getSnapshotBeforeUpdate(o){const{layoutDependency:n,visualElement:i,drag:d,isPresent:f}=this.props,{projection:m}=i;return m&&(m.isPresent=f,o.layoutDependency!==n&&m.setOptions({...m.options,layoutDependency:n}),Au=!0,d||o.layoutDependency!==n||n===void 0||o.isPresent!==f?m.willUpdate():this.safeToRemove(),o.isPresent!==f&&(f?m.promote():m.relegate()||Ve.postRender(()=>{const h=m.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:o}=this.props.visualElement;o&&(o.root.didUpdate(),Od.postRender(()=>{!o.currentAnimation&&o.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:o,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:d}=o;Au=!0,d&&(d.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(d),i&&i.deregister&&i.deregister(d))}safeToRemove(){const{safeToRemove:o}=this.props;o&&o()}render(){return null}}function Uv(a){const[o,n]=Mv(),i=z.useContext(ld);return l.jsx(DR,{...a,layoutGroup:i,switchLayoutGroup:z.useContext(Lv),isPresent:o,safeToRemove:n})}const _R={pan:{Feature:OR},drag:{Feature:MR,ProjectionNode:Cv,MeasureLayout:Uv}};function Eg(a,o,n){const{props:i}=a;a.animationState&&i.whileHover&&a.animationState.setActive("whileHover",n==="Start");const d="onHover"+n,f=i[d];f&&Ve.postRender(()=>f(o,Is(o)))}class wR extends rr{mount(){const{current:o}=this.node;o&&(this.unmount=aA(o,(n,i)=>(Eg(this.node,i,"Start"),d=>Eg(this.node,d,"End"))))}unmount(){}}class NR extends rr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let o=!1;try{o=this.node.current.matches(":focus-visible")}catch{o=!0}!o||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Fs(ks(this.node.current,"focus",()=>this.onFocus()),ks(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Rg(a,o,n){const{props:i}=a;if(a.current instanceof HTMLButtonElement&&a.current.disabled)return;a.animationState&&i.whileTap&&a.animationState.setActive("whileTap",n==="Start");const d="onTap"+(n==="End"?"":n),f=i[d];f&&Ve.postRender(()=>f(o,Is(o)))}class qR extends rr{mount(){const{current:o}=this.node;if(!o)return;const{globalTapTarget:n,propagate:i}=this.node.props;this.unmount=lA(o,(d,f)=>(Rg(this.node,f,"Start"),(m,{success:h})=>Rg(this.node,m,h?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:i?.tap===!1})}unmount(){}}const $u=new WeakMap,Eu=new WeakMap,zR=a=>{const o=$u.get(a.target);o&&o(a)},LR=a=>{a.forEach(zR)};function VR({root:a,...o}){const n=a||document;Eu.has(n)||Eu.set(n,{});const i=Eu.get(n),d=JSON.stringify(o);return i[d]||(i[d]=new IntersectionObserver(LR,{root:a,...o})),i[d]}function PR(a,o,n){const i=VR(o);return $u.set(a,n),i.observe(a),()=>{$u.delete(a),i.unobserve(a)}}const BR={some:0,all:1};class XR extends rr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:o={}}=this.node.getProps(),{root:n,margin:i,amount:d="some",once:f}=o,m={root:n?n.current:void 0,rootMargin:i,threshold:typeof d=="number"?d:BR[d]},h=g=>{const{isIntersecting:x}=g;if(this.isInView===x||(this.isInView=x,f&&!x&&this.hasEnteredView))return;x&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",x);const{onViewportEnter:b,onViewportLeave:S}=this.node.getProps(),y=x?b:S;y&&y(g)};return PR(this.node.current,m,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:o,prevProps:n}=this.node;["amount","margin","root"].some(UR(o,n))&&this.startObserver()}unmount(){}}function UR({viewport:a={}},{viewport:o={}}={}){return n=>a[n]!==o[n]}const kR={inView:{Feature:XR},tap:{Feature:qR},focus:{Feature:NR},hover:{Feature:wR}},FR={layout:{ProjectionNode:Cv,MeasureLayout:Uv}},HR={...fR,...kR,..._R,...FR},_i=lR(HR,cR);function kv(a){var o,n,i="";if(typeof a=="string"||typeof a=="number")i+=a;else if(typeof a=="object")if(Array.isArray(a)){var d=a.length;for(o=0;o<d;o++)a[o]&&(n=kv(a[o]))&&(i&&(i+=" "),i+=n)}else for(n in a)a[n]&&(i&&(i+=" "),i+=n);return i}function Fv(){for(var a,o,n=0,i="",d=arguments.length;n<d;n++)(a=arguments[n])&&(o=kv(a))&&(i&&(i+=" "),i+=o);return i}const GR=(a,o)=>{const n=new Array(a.length+o.length);for(let i=0;i<a.length;i++)n[i]=a[i];for(let i=0;i<o.length;i++)n[a.length+i]=o[i];return n},IR=(a,o)=>({classGroupId:a,validator:o}),Hv=(a=new Map,o=null,n)=>({nextPart:a,validators:o,classGroupId:n}),wi="-",Tg=[],YR="arbitrary..",QR=a=>{const o=KR(a),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=a;return{getClassGroupId:m=>{if(m.startsWith("[")&&m.endsWith("]"))return ZR(m);const h=m.split(wi),g=h[0]===""&&h.length>1?1:0;return Gv(h,g,o)},getConflictingClassGroupIds:(m,h)=>{if(h){const g=i[m],x=n[m];return g?x?GR(x,g):g:x||Tg}return n[m]||Tg}}},Gv=(a,o,n)=>{if(a.length-o===0)return n.classGroupId;const d=a[o],f=n.nextPart.get(d);if(f){const x=Gv(a,o+1,f);if(x)return x}const m=n.validators;if(m===null)return;const h=o===0?a.join(wi):a.slice(o).join(wi),g=m.length;for(let x=0;x<g;x++){const b=m[x];if(b.validator(h))return b.classGroupId}},ZR=a=>a.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const o=a.slice(1,-1),n=o.indexOf(":"),i=o.slice(0,n);return i?YR+i:void 0})(),KR=a=>{const{theme:o,classGroups:n}=a;return JR(n,o)},JR=(a,o)=>{const n=Hv();for(const i in a){const d=a[i];Bd(d,n,i,o)}return n},Bd=(a,o,n,i)=>{const d=a.length;for(let f=0;f<d;f++){const m=a[f];WR(m,o,n,i)}},WR=(a,o,n,i)=>{if(typeof a=="string"){$R(a,o,n);return}if(typeof a=="function"){eT(a,o,n,i);return}tT(a,o,n,i)},$R=(a,o,n)=>{const i=a===""?o:Iv(o,a);i.classGroupId=n},eT=(a,o,n,i)=>{if(aT(a)){Bd(a(i),o,n,i);return}o.validators===null&&(o.validators=[]),o.validators.push(IR(n,a))},tT=(a,o,n,i)=>{const d=Object.entries(a),f=d.length;for(let m=0;m<f;m++){const[h,g]=d[m];Bd(g,Iv(o,h),n,i)}},Iv=(a,o)=>{let n=a;const i=o.split(wi),d=i.length;for(let f=0;f<d;f++){const m=i[f];let h=n.nextPart.get(m);h||(h=Hv(),n.nextPart.set(m,h)),n=h}return n},aT=a=>"isThemeGetter"in a&&a.isThemeGetter===!0,rT=a=>{if(a<1)return{get:()=>{},set:()=>{}};let o=0,n=Object.create(null),i=Object.create(null);const d=(f,m)=>{n[f]=m,o++,o>a&&(o=0,i=n,n=Object.create(null))};return{get(f){let m=n[f];if(m!==void 0)return m;if((m=i[f])!==void 0)return d(f,m),m},set(f,m){f in n?n[f]=m:d(f,m)}}},ed="!",Cg=":",oT=[],Mg=(a,o,n,i,d)=>({modifiers:a,hasImportantModifier:o,baseClassName:n,maybePostfixModifierPosition:i,isExternal:d}),sT=a=>{const{prefix:o,experimentalParseClassName:n}=a;let i=d=>{const f=[];let m=0,h=0,g=0,x;const b=d.length;for(let N=0;N<b;N++){const L=d[N];if(m===0&&h===0){if(L===Cg){f.push(d.slice(g,N)),g=N+1;continue}if(L==="/"){x=N;continue}}L==="["?m++:L==="]"?m--:L==="("?h++:L===")"&&h--}const S=f.length===0?d:d.slice(g);let y=S,R=!1;S.endsWith(ed)?(y=S.slice(0,-1),R=!0):S.startsWith(ed)&&(y=S.slice(1),R=!0);const C=x&&x>g?x-g:void 0;return Mg(f,R,y,C)};if(o){const d=o+Cg,f=i;i=m=>m.startsWith(d)?f(m.slice(d.length)):Mg(oT,!1,m,void 0,!0)}if(n){const d=i;i=f=>n({className:f,parseClassName:d})}return i},nT=a=>{const o=new Map;return a.orderSensitiveModifiers.forEach((n,i)=>{o.set(n,1e6+i)}),n=>{const i=[];let d=[];for(let f=0;f<n.length;f++){const m=n[f],h=m[0]==="[",g=o.has(m);h||g?(d.length>0&&(d.sort(),i.push(...d),d=[]),i.push(m)):d.push(m)}return d.length>0&&(d.sort(),i.push(...d)),i}},iT=a=>({cache:rT(a.cacheSize),parseClassName:sT(a),sortModifiers:nT(a),...QR(a)}),lT=/\s+/,cT=(a,o)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:d,sortModifiers:f}=o,m=[],h=a.trim().split(lT);let g="";for(let x=h.length-1;x>=0;x-=1){const b=h[x],{isExternal:S,modifiers:y,hasImportantModifier:R,baseClassName:C,maybePostfixModifierPosition:N}=n(b);if(S){g=b+(g.length>0?" "+g:g);continue}let L=!!N,F=i(L?C.substring(0,N):C);if(!F){if(!L){g=b+(g.length>0?" "+g:g);continue}if(F=i(C),!F){g=b+(g.length>0?" "+g:g);continue}L=!1}const G=y.length===0?"":y.length===1?y[0]:f(y).join(":"),H=R?G+ed:G,I=H+F;if(m.indexOf(I)>-1)continue;m.push(I);const P=d(F,L);for(let K=0;K<P.length;++K){const ce=P[K];m.push(H+ce)}g=b+(g.length>0?" "+g:g)}return g},uT=(...a)=>{let o=0,n,i,d="";for(;o<a.length;)(n=a[o++])&&(i=Yv(n))&&(d&&(d+=" "),d+=i);return d},Yv=a=>{if(typeof a=="string")return a;let o,n="";for(let i=0;i<a.length;i++)a[i]&&(o=Yv(a[i]))&&(n&&(n+=" "),n+=o);return n},dT=(a,...o)=>{let n,i,d,f;const m=g=>{const x=o.reduce((b,S)=>S(b),a());return n=iT(x),i=n.cache.get,d=n.cache.set,f=h,h(g)},h=g=>{const x=i(g);if(x)return x;const b=cT(g,n);return d(g,b),b};return f=m,(...g)=>f(uT(...g))},mT=[],We=a=>{const o=n=>n[a]||mT;return o.isThemeGetter=!0,o},Qv=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Zv=/^\((?:(\w[\w-]*):)?(.+)\)$/i,fT=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,hT=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,pT=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,xT=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,gT=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,bT=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Wa=a=>fT.test(a),pe=a=>!!a&&!Number.isNaN(Number(a)),$a=a=>!!a&&Number.isInteger(Number(a)),Ru=a=>a.endsWith("%")&&pe(a.slice(0,-1)),Ea=a=>hT.test(a),Kv=()=>!0,vT=a=>pT.test(a)&&!xT.test(a),Xd=()=>!1,yT=a=>gT.test(a),ST=a=>bT.test(a),jT=a=>!ee(a)&&!ae(a),AT=a=>or(a,$v,Xd),ee=a=>Qv.test(a),Rr=a=>or(a,e0,vT),Og=a=>or(a,_T,pe),ET=a=>or(a,a0,Kv),RT=a=>or(a,t0,Xd),Dg=a=>or(a,Jv,Xd),TT=a=>or(a,Wv,ST),fi=a=>or(a,r0,yT),ae=a=>Zv.test(a),Os=a=>Dr(a,e0),CT=a=>Dr(a,t0),_g=a=>Dr(a,Jv),MT=a=>Dr(a,$v),OT=a=>Dr(a,Wv),hi=a=>Dr(a,r0,!0),DT=a=>Dr(a,a0,!0),or=(a,o,n)=>{const i=Qv.exec(a);return i?i[1]?o(i[1]):n(i[2]):!1},Dr=(a,o,n=!1)=>{const i=Zv.exec(a);return i?i[1]?o(i[1]):n:!1},Jv=a=>a==="position"||a==="percentage",Wv=a=>a==="image"||a==="url",$v=a=>a==="length"||a==="size"||a==="bg-size",e0=a=>a==="length",_T=a=>a==="number",t0=a=>a==="family-name",a0=a=>a==="number"||a==="weight",r0=a=>a==="shadow",wT=()=>{const a=We("color"),o=We("font"),n=We("text"),i=We("font-weight"),d=We("tracking"),f=We("leading"),m=We("breakpoint"),h=We("container"),g=We("spacing"),x=We("radius"),b=We("shadow"),S=We("inset-shadow"),y=We("text-shadow"),R=We("drop-shadow"),C=We("blur"),N=We("perspective"),L=We("aspect"),F=We("ease"),G=We("animate"),H=()=>["auto","avoid","all","avoid-page","page","left","right","column"],I=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],P=()=>[...I(),ae,ee],K=()=>["auto","hidden","clip","visible","scroll"],ce=()=>["auto","contain","none"],X=()=>[ae,ee,g],W=()=>[Wa,"full","auto",...X()],je=()=>[$a,"none","subgrid",ae,ee],_e=()=>["auto",{span:["full",$a,ae,ee]},$a,ae,ee],Ae=()=>[$a,"auto",ae,ee],ft=()=>["auto","min","max","fr",ae,ee],At=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ze=()=>["start","end","center","stretch","center-safe","end-safe"],q=()=>["auto",...X()],Y=()=>[Wa,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...X()],J=()=>[Wa,"screen","full","dvw","lvw","svw","min","max","fit",...X()],me=()=>[Wa,"screen","full","lh","dvh","lvh","svh","min","max","fit",...X()],j=()=>[a,ae,ee],U=()=>[...I(),_g,Dg,{position:[ae,ee]}],Z=()=>["no-repeat",{repeat:["","x","y","space","round"]}],Q=()=>["auto","cover","contain",MT,AT,{size:[ae,ee]}],ne=()=>[Ru,Os,Rr],ue=()=>["","none","full",x,ae,ee],re=()=>["",pe,Os,Rr],et=()=>["solid","dashed","dotted","double"],we=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Ne=()=>[pe,Ru,_g,Dg],_r=()=>["","none",C,ae,ee],la=()=>["none",pe,ae,ee],Ta=()=>["none",pe,ae,ee],sr=()=>[pe,ae,ee],Ca=()=>[Wa,"full",...X()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Ea],breakpoint:[Ea],color:[Kv],container:[Ea],"drop-shadow":[Ea],ease:["in","out","in-out"],font:[jT],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Ea],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Ea],shadow:[Ea],spacing:["px",pe],text:[Ea],"text-shadow":[Ea],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Wa,ee,ae,L]}],container:["container"],columns:[{columns:[pe,ee,ae,h]}],"break-after":[{"break-after":H()}],"break-before":[{"break-before":H()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:P()}],overflow:[{overflow:K()}],"overflow-x":[{"overflow-x":K()}],"overflow-y":[{"overflow-y":K()}],overscroll:[{overscroll:ce()}],"overscroll-x":[{"overscroll-x":ce()}],"overscroll-y":[{"overscroll-y":ce()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:W()}],"inset-x":[{"inset-x":W()}],"inset-y":[{"inset-y":W()}],start:[{"inset-s":W(),start:W()}],end:[{"inset-e":W(),end:W()}],"inset-bs":[{"inset-bs":W()}],"inset-be":[{"inset-be":W()}],top:[{top:W()}],right:[{right:W()}],bottom:[{bottom:W()}],left:[{left:W()}],visibility:["visible","invisible","collapse"],z:[{z:[$a,"auto",ae,ee]}],basis:[{basis:[Wa,"full","auto",h,...X()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[pe,Wa,"auto","initial","none",ee]}],grow:[{grow:["",pe,ae,ee]}],shrink:[{shrink:["",pe,ae,ee]}],order:[{order:[$a,"first","last","none",ae,ee]}],"grid-cols":[{"grid-cols":je()}],"col-start-end":[{col:_e()}],"col-start":[{"col-start":Ae()}],"col-end":[{"col-end":Ae()}],"grid-rows":[{"grid-rows":je()}],"row-start-end":[{row:_e()}],"row-start":[{"row-start":Ae()}],"row-end":[{"row-end":Ae()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":ft()}],"auto-rows":[{"auto-rows":ft()}],gap:[{gap:X()}],"gap-x":[{"gap-x":X()}],"gap-y":[{"gap-y":X()}],"justify-content":[{justify:[...At(),"normal"]}],"justify-items":[{"justify-items":[...ze(),"normal"]}],"justify-self":[{"justify-self":["auto",...ze()]}],"align-content":[{content:["normal",...At()]}],"align-items":[{items:[...ze(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ze(),{baseline:["","last"]}]}],"place-content":[{"place-content":At()}],"place-items":[{"place-items":[...ze(),"baseline"]}],"place-self":[{"place-self":["auto",...ze()]}],p:[{p:X()}],px:[{px:X()}],py:[{py:X()}],ps:[{ps:X()}],pe:[{pe:X()}],pbs:[{pbs:X()}],pbe:[{pbe:X()}],pt:[{pt:X()}],pr:[{pr:X()}],pb:[{pb:X()}],pl:[{pl:X()}],m:[{m:q()}],mx:[{mx:q()}],my:[{my:q()}],ms:[{ms:q()}],me:[{me:q()}],mbs:[{mbs:q()}],mbe:[{mbe:q()}],mt:[{mt:q()}],mr:[{mr:q()}],mb:[{mb:q()}],ml:[{ml:q()}],"space-x":[{"space-x":X()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":X()}],"space-y-reverse":["space-y-reverse"],size:[{size:Y()}],"inline-size":[{inline:["auto",...J()]}],"min-inline-size":[{"min-inline":["auto",...J()]}],"max-inline-size":[{"max-inline":["none",...J()]}],"block-size":[{block:["auto",...me()]}],"min-block-size":[{"min-block":["auto",...me()]}],"max-block-size":[{"max-block":["none",...me()]}],w:[{w:[h,"screen",...Y()]}],"min-w":[{"min-w":[h,"screen","none",...Y()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[m]},...Y()]}],h:[{h:["screen","lh",...Y()]}],"min-h":[{"min-h":["screen","lh","none",...Y()]}],"max-h":[{"max-h":["screen","lh",...Y()]}],"font-size":[{text:["base",n,Os,Rr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[i,DT,ET]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Ru,ee]}],"font-family":[{font:[CT,RT,o]}],"font-features":[{"font-features":[ee]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[d,ae,ee]}],"line-clamp":[{"line-clamp":[pe,"none",ae,Og]}],leading:[{leading:[f,...X()]}],"list-image":[{"list-image":["none",ae,ee]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",ae,ee]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:j()}],"text-color":[{text:j()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...et(),"wavy"]}],"text-decoration-thickness":[{decoration:[pe,"from-font","auto",ae,Rr]}],"text-decoration-color":[{decoration:j()}],"underline-offset":[{"underline-offset":[pe,"auto",ae,ee]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:X()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ae,ee]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ae,ee]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:U()}],"bg-repeat":[{bg:Z()}],"bg-size":[{bg:Q()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},$a,ae,ee],radial:["",ae,ee],conic:[$a,ae,ee]},OT,TT]}],"bg-color":[{bg:j()}],"gradient-from-pos":[{from:ne()}],"gradient-via-pos":[{via:ne()}],"gradient-to-pos":[{to:ne()}],"gradient-from":[{from:j()}],"gradient-via":[{via:j()}],"gradient-to":[{to:j()}],rounded:[{rounded:ue()}],"rounded-s":[{"rounded-s":ue()}],"rounded-e":[{"rounded-e":ue()}],"rounded-t":[{"rounded-t":ue()}],"rounded-r":[{"rounded-r":ue()}],"rounded-b":[{"rounded-b":ue()}],"rounded-l":[{"rounded-l":ue()}],"rounded-ss":[{"rounded-ss":ue()}],"rounded-se":[{"rounded-se":ue()}],"rounded-ee":[{"rounded-ee":ue()}],"rounded-es":[{"rounded-es":ue()}],"rounded-tl":[{"rounded-tl":ue()}],"rounded-tr":[{"rounded-tr":ue()}],"rounded-br":[{"rounded-br":ue()}],"rounded-bl":[{"rounded-bl":ue()}],"border-w":[{border:re()}],"border-w-x":[{"border-x":re()}],"border-w-y":[{"border-y":re()}],"border-w-s":[{"border-s":re()}],"border-w-e":[{"border-e":re()}],"border-w-bs":[{"border-bs":re()}],"border-w-be":[{"border-be":re()}],"border-w-t":[{"border-t":re()}],"border-w-r":[{"border-r":re()}],"border-w-b":[{"border-b":re()}],"border-w-l":[{"border-l":re()}],"divide-x":[{"divide-x":re()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":re()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...et(),"hidden","none"]}],"divide-style":[{divide:[...et(),"hidden","none"]}],"border-color":[{border:j()}],"border-color-x":[{"border-x":j()}],"border-color-y":[{"border-y":j()}],"border-color-s":[{"border-s":j()}],"border-color-e":[{"border-e":j()}],"border-color-bs":[{"border-bs":j()}],"border-color-be":[{"border-be":j()}],"border-color-t":[{"border-t":j()}],"border-color-r":[{"border-r":j()}],"border-color-b":[{"border-b":j()}],"border-color-l":[{"border-l":j()}],"divide-color":[{divide:j()}],"outline-style":[{outline:[...et(),"none","hidden"]}],"outline-offset":[{"outline-offset":[pe,ae,ee]}],"outline-w":[{outline:["",pe,Os,Rr]}],"outline-color":[{outline:j()}],shadow:[{shadow:["","none",b,hi,fi]}],"shadow-color":[{shadow:j()}],"inset-shadow":[{"inset-shadow":["none",S,hi,fi]}],"inset-shadow-color":[{"inset-shadow":j()}],"ring-w":[{ring:re()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:j()}],"ring-offset-w":[{"ring-offset":[pe,Rr]}],"ring-offset-color":[{"ring-offset":j()}],"inset-ring-w":[{"inset-ring":re()}],"inset-ring-color":[{"inset-ring":j()}],"text-shadow":[{"text-shadow":["none",y,hi,fi]}],"text-shadow-color":[{"text-shadow":j()}],opacity:[{opacity:[pe,ae,ee]}],"mix-blend":[{"mix-blend":[...we(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":we()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[pe]}],"mask-image-linear-from-pos":[{"mask-linear-from":Ne()}],"mask-image-linear-to-pos":[{"mask-linear-to":Ne()}],"mask-image-linear-from-color":[{"mask-linear-from":j()}],"mask-image-linear-to-color":[{"mask-linear-to":j()}],"mask-image-t-from-pos":[{"mask-t-from":Ne()}],"mask-image-t-to-pos":[{"mask-t-to":Ne()}],"mask-image-t-from-color":[{"mask-t-from":j()}],"mask-image-t-to-color":[{"mask-t-to":j()}],"mask-image-r-from-pos":[{"mask-r-from":Ne()}],"mask-image-r-to-pos":[{"mask-r-to":Ne()}],"mask-image-r-from-color":[{"mask-r-from":j()}],"mask-image-r-to-color":[{"mask-r-to":j()}],"mask-image-b-from-pos":[{"mask-b-from":Ne()}],"mask-image-b-to-pos":[{"mask-b-to":Ne()}],"mask-image-b-from-color":[{"mask-b-from":j()}],"mask-image-b-to-color":[{"mask-b-to":j()}],"mask-image-l-from-pos":[{"mask-l-from":Ne()}],"mask-image-l-to-pos":[{"mask-l-to":Ne()}],"mask-image-l-from-color":[{"mask-l-from":j()}],"mask-image-l-to-color":[{"mask-l-to":j()}],"mask-image-x-from-pos":[{"mask-x-from":Ne()}],"mask-image-x-to-pos":[{"mask-x-to":Ne()}],"mask-image-x-from-color":[{"mask-x-from":j()}],"mask-image-x-to-color":[{"mask-x-to":j()}],"mask-image-y-from-pos":[{"mask-y-from":Ne()}],"mask-image-y-to-pos":[{"mask-y-to":Ne()}],"mask-image-y-from-color":[{"mask-y-from":j()}],"mask-image-y-to-color":[{"mask-y-to":j()}],"mask-image-radial":[{"mask-radial":[ae,ee]}],"mask-image-radial-from-pos":[{"mask-radial-from":Ne()}],"mask-image-radial-to-pos":[{"mask-radial-to":Ne()}],"mask-image-radial-from-color":[{"mask-radial-from":j()}],"mask-image-radial-to-color":[{"mask-radial-to":j()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":I()}],"mask-image-conic-pos":[{"mask-conic":[pe]}],"mask-image-conic-from-pos":[{"mask-conic-from":Ne()}],"mask-image-conic-to-pos":[{"mask-conic-to":Ne()}],"mask-image-conic-from-color":[{"mask-conic-from":j()}],"mask-image-conic-to-color":[{"mask-conic-to":j()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:U()}],"mask-repeat":[{mask:Z()}],"mask-size":[{mask:Q()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",ae,ee]}],filter:[{filter:["","none",ae,ee]}],blur:[{blur:_r()}],brightness:[{brightness:[pe,ae,ee]}],contrast:[{contrast:[pe,ae,ee]}],"drop-shadow":[{"drop-shadow":["","none",R,hi,fi]}],"drop-shadow-color":[{"drop-shadow":j()}],grayscale:[{grayscale:["",pe,ae,ee]}],"hue-rotate":[{"hue-rotate":[pe,ae,ee]}],invert:[{invert:["",pe,ae,ee]}],saturate:[{saturate:[pe,ae,ee]}],sepia:[{sepia:["",pe,ae,ee]}],"backdrop-filter":[{"backdrop-filter":["","none",ae,ee]}],"backdrop-blur":[{"backdrop-blur":_r()}],"backdrop-brightness":[{"backdrop-brightness":[pe,ae,ee]}],"backdrop-contrast":[{"backdrop-contrast":[pe,ae,ee]}],"backdrop-grayscale":[{"backdrop-grayscale":["",pe,ae,ee]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[pe,ae,ee]}],"backdrop-invert":[{"backdrop-invert":["",pe,ae,ee]}],"backdrop-opacity":[{"backdrop-opacity":[pe,ae,ee]}],"backdrop-saturate":[{"backdrop-saturate":[pe,ae,ee]}],"backdrop-sepia":[{"backdrop-sepia":["",pe,ae,ee]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":X()}],"border-spacing-x":[{"border-spacing-x":X()}],"border-spacing-y":[{"border-spacing-y":X()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",ae,ee]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[pe,"initial",ae,ee]}],ease:[{ease:["linear","initial",F,ae,ee]}],delay:[{delay:[pe,ae,ee]}],animate:[{animate:["none",G,ae,ee]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[N,ae,ee]}],"perspective-origin":[{"perspective-origin":P()}],rotate:[{rotate:la()}],"rotate-x":[{"rotate-x":la()}],"rotate-y":[{"rotate-y":la()}],"rotate-z":[{"rotate-z":la()}],scale:[{scale:Ta()}],"scale-x":[{"scale-x":Ta()}],"scale-y":[{"scale-y":Ta()}],"scale-z":[{"scale-z":Ta()}],"scale-3d":["scale-3d"],skew:[{skew:sr()}],"skew-x":[{"skew-x":sr()}],"skew-y":[{"skew-y":sr()}],transform:[{transform:[ae,ee,"","none","gpu","cpu"]}],"transform-origin":[{origin:P()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Ca()}],"translate-x":[{"translate-x":Ca()}],"translate-y":[{"translate-y":Ca()}],"translate-z":[{"translate-z":Ca()}],"translate-none":["translate-none"],accent:[{accent:j()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:j()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ae,ee]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":X()}],"scroll-mx":[{"scroll-mx":X()}],"scroll-my":[{"scroll-my":X()}],"scroll-ms":[{"scroll-ms":X()}],"scroll-me":[{"scroll-me":X()}],"scroll-mbs":[{"scroll-mbs":X()}],"scroll-mbe":[{"scroll-mbe":X()}],"scroll-mt":[{"scroll-mt":X()}],"scroll-mr":[{"scroll-mr":X()}],"scroll-mb":[{"scroll-mb":X()}],"scroll-ml":[{"scroll-ml":X()}],"scroll-p":[{"scroll-p":X()}],"scroll-px":[{"scroll-px":X()}],"scroll-py":[{"scroll-py":X()}],"scroll-ps":[{"scroll-ps":X()}],"scroll-pe":[{"scroll-pe":X()}],"scroll-pbs":[{"scroll-pbs":X()}],"scroll-pbe":[{"scroll-pbe":X()}],"scroll-pt":[{"scroll-pt":X()}],"scroll-pr":[{"scroll-pr":X()}],"scroll-pb":[{"scroll-pb":X()}],"scroll-pl":[{"scroll-pl":X()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ae,ee]}],fill:[{fill:["none",...j()]}],"stroke-w":[{stroke:[pe,Os,Rr,Og]}],stroke:[{stroke:["none",...j()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},NT=dT(wT);function sa(...a){return NT(Fv(a))}const qT=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zT=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,n,i)=>i?i.toUpperCase():n.toLowerCase()),wg=a=>{const o=zT(a);return o.charAt(0).toUpperCase()+o.slice(1)},o0=(...a)=>a.filter((o,n,i)=>!!o&&o.trim()!==""&&i.indexOf(o)===n).join(" ").trim(),LT=a=>{for(const o in a)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};var VT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const PT=z.forwardRef(({color:a="currentColor",size:o=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:d="",children:f,iconNode:m,...h},g)=>z.createElement("svg",{ref:g,...VT,width:o,height:o,stroke:a,strokeWidth:i?Number(n)*24/Number(o):n,className:o0("lucide",d),...!f&&!LT(h)&&{"aria-hidden":"true"},...h},[...m.map(([x,b])=>z.createElement(x,b)),...Array.isArray(f)?f:[f]]));const Ue=(a,o)=>{const n=z.forwardRef(({className:i,...d},f)=>z.createElement(PT,{ref:f,iconNode:o,className:o0(`lucide-${qT(wg(a))}`,`lucide-${a}`,i),...d}));return n.displayName=wg(a),n};const BT=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],XT=Ue("book-open",BT);const UT=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],kT=Ue("check",UT);const FT=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],HT=Ue("chevron-down",FT);const GT=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],s0=Ue("chevron-right",GT);const IT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],YT=Ue("circle-x",IT);const QT=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ZT=Ue("clock",QT);const KT=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],JT=Ue("code-xml",KT);const WT=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],$T=Ue("copy",WT);const eC=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Ud=Ue("cpu",eC);const tC=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],aC=Ue("database",tC);const rC=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],oC=Ue("git-branch",rC);const sC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],nC=Ue("globe",sC);const iC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],lC=Ue("info",iC);const cC=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],uC=Ue("lightbulb",cC);const dC=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],mC=Ue("menu",dC);const fC=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],hC=Ue("moon",fC);const pC=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",key:"m1af9g"}],["path",{d:"M9 11.2h5.7",key:"3zgcl2"}]],xC=Ue("square-function",pC);const gC=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],bC=Ue("sun",gC);const vC=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],yC=Ue("terminal",vC);const SC=[["path",{d:"M21 5H3",key:"1fi0y6"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 19H3",key:"z6ezky"}]],jC=Ue("text-align-start",SC);const AC=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],EC=Ue("triangle-alert",AC);const RC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],n0=Ue("x",RC);const TC=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],CC=Ue("zap",TC),MC=[{label:"Introdução",icon:l.jsx(XT,{className:"w-4 h-4"}),items:[{label:"O que é Assembly?",path:"/"},{label:"História e Arquiteturas",path:"/historia"},{label:"Ferramentas Essenciais",path:"/ferramentas"},{label:"Primeiro Programa",path:"/primeiro-programa"}]},{label:"Registradores",icon:l.jsx(Ud,{className:"w-4 h-4"}),items:[{label:"Registradores x86 (32-bit)",path:"/registradores-x86"},{label:"Registradores x64 (64-bit)",path:"/registradores-x64"},{label:"FLAGS e EFLAGS",path:"/flags"},{label:"Regs. de Segmento e Especiais",path:"/regs-especiais"}]},{label:"Instruções Básicas",icon:l.jsx(JT,{className:"w-4 h-4"}),items:[{label:"MOV e Transferência de Dados",path:"/mov"},{label:"Aritmética",path:"/aritmetica"},{label:"Operações de Bit",path:"/bits"},{label:"NOP, XCHG e Utilidades",path:"/utilidades"}]},{label:"Memória e Endereçamento",icon:l.jsx(aC,{className:"w-4 h-4"}),items:[{label:"Modos de Endereçamento",path:"/endereçamento"},{label:"Segmentos de Memória",path:"/segmentos"},{label:"A Pilha (Stack)",path:"/pilha"}]},{label:"Controle de Fluxo",icon:l.jsx(oC,{className:"w-4 h-4"}),items:[{label:"Comparações e FLAGS",path:"/comparacoes"},{label:"Saltos Condicionais",path:"/saltos"},{label:"Loops",path:"/loops"},{label:"CALL e RET",path:"/call-ret"}]},{label:"Procedures e Funções",icon:l.jsx(xC,{className:"w-4 h-4"}),items:[{label:"Prólogo e Epílogo",path:"/prologo"},{label:"Convenções de Chamada",path:"/convencoes"},{label:"Passagem de Parâmetros",path:"/parametros"}]},{label:"Strings e Arrays",icon:l.jsx(jC,{className:"w-4 h-4"}),items:[{label:"Instruções de String",path:"/strings"},{label:"Arrays e Indexação",path:"/arrays"},{label:"Estruturas de Dados",path:"/structs"}]},{label:"Interface com SO",icon:l.jsx(nC,{className:"w-4 h-4"}),items:[{label:"Syscalls Linux x64",path:"/syscalls"},{label:"Interoperabilidade com C",path:"/interop"},{label:"Linking e Ligação",path:"/linking"}]},{label:"Tópicos Avançados",icon:l.jsx(CC,{className:"w-4 h-4"}),items:[{label:"FPU — Ponto Flutuante",path:"/fpu"},{label:"SSE e SIMD",path:"/simd"},{label:"Otimização",path:"/otimizacao"}]},{label:"Exemplos Práticos",icon:l.jsx(yC,{className:"w-4 h-4"}),items:[{label:"Hello World Completo",path:"/hello-world"},{label:"Calculadora",path:"/calculadora"},{label:"Algoritmos Clássicos",path:"/algoritmos"}]}];function OC({section:a,currentPath:o,onNavigate:n}){const i=a.items.some(m=>m.path===o),[d,f]=z.useState(i);return l.jsxs("div",{className:"mb-0.5",children:[l.jsxs("button",{onClick:()=>f(m=>!m),className:sa("w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wide transition-colors",i?"text-primary bg-accent/50":"text-muted-foreground hover:text-foreground hover:bg-sidebar-accent"),children:[l.jsx("span",{className:sa(i?"text-primary":"text-muted-foreground/70"),children:a.icon}),l.jsx("span",{className:"flex-1 text-left",children:a.label}),d?l.jsx(HT,{className:"w-3 h-3 shrink-0"}):l.jsx(s0,{className:"w-3 h-3 shrink-0"})]}),l.jsx(Ov,{initial:!1,children:d&&l.jsx(_i.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.15},className:"overflow-hidden",children:l.jsx("div",{className:"ml-2 pl-3 border-l-2 border-border/60 mt-0.5 mb-1 space-y-0.5",children:a.items.map(m=>l.jsx("a",{href:`#${m.path}`,onClick:n,className:sa("block px-2 py-1 rounded-md text-sm transition-colors leading-tight",o===m.path?"text-primary font-medium bg-accent":"text-muted-foreground hover:text-foreground hover:bg-sidebar-accent"),children:m.label},m.path))})})})]})}function DC({open:a,onClose:o}){const[n]=od(),i=()=>l.jsxs("div",{className:"h-full flex flex-col",children:[l.jsxs("div",{className:"px-4 py-4 border-b border-sidebar-border flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-8 h-8 bg-primary rounded-lg flex items-center justify-center",children:l.jsx(Ud,{className:"w-4 h-4 text-white"})}),l.jsxs("div",{children:[l.jsx("div",{className:"font-bold text-sm text-sidebar-foreground",children:"Assembly"}),l.jsx("div",{className:"text-xs text-muted-foreground",children:"Guia x86/x64 em Português"})]})]}),l.jsx("button",{onClick:o,className:"lg:hidden p-1 rounded-md hover:bg-sidebar-accent",children:l.jsx(n0,{className:"w-4 h-4 text-muted-foreground"})})]}),l.jsx("div",{className:"flex-1 overflow-y-auto px-2 py-3",children:MC.map(d=>l.jsx(OC,{section:d,currentPath:n,onNavigate:o},d.label))}),l.jsx("div",{className:"px-4 py-3 border-t border-sidebar-border",children:l.jsx("p",{className:"text-xs text-muted-foreground text-center",children:"34 tópicos • Português Brasileiro"})})]});return l.jsxs(l.Fragment,{children:[l.jsx("aside",{className:"hidden lg:flex flex-col w-64 shrink-0 bg-sidebar border-r border-sidebar-border h-screen sticky top-0",children:l.jsx(i,{})}),l.jsx(Ov,{children:a&&l.jsxs(l.Fragment,{children:[l.jsx(_i.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-40 bg-black/50 lg:hidden",onClick:o}),l.jsx(_i.aside,{initial:{x:-280},animate:{x:0},exit:{x:-280},transition:{type:"spring",damping:25,stiffness:250},className:"fixed left-0 top-0 z-50 w-64 h-full bg-sidebar border-r border-sidebar-border lg:hidden",children:l.jsx(i,{})})]})})]})}function Ng(a,o){if(typeof a=="function")return a(o);a!=null&&(a.current=o)}function _C(...a){return o=>{let n=!1;const i=a.map(d=>{const f=Ng(d,o);return!n&&typeof f=="function"&&(n=!0),f});if(n)return()=>{for(let d=0;d<i.length;d++){const f=i[d];typeof f=="function"?f():Ng(a[d],null)}}}}var wC=Symbol.for("react.lazy"),Ni=Lg[" use ".trim().toString()];function NC(a){return typeof a=="object"&&a!==null&&"then"in a}function i0(a){return a!=null&&typeof a=="object"&&"$$typeof"in a&&a.$$typeof===wC&&"_payload"in a&&NC(a._payload)}function qC(a){const o=LC(a),n=z.forwardRef((i,d)=>{let{children:f,...m}=i;i0(f)&&typeof Ni=="function"&&(f=Ni(f._payload));const h=z.Children.toArray(f),g=h.find(PC);if(g){const x=g.props.children,b=h.map(S=>S===g?z.Children.count(x)>1?z.Children.only(null):z.isValidElement(x)?x.props.children:null:S);return l.jsx(o,{...m,ref:d,children:z.isValidElement(x)?z.cloneElement(x,void 0,b):null})}return l.jsx(o,{...m,ref:d,children:f})});return n.displayName=`${a}.Slot`,n}var zC=qC("Slot");function LC(a){const o=z.forwardRef((n,i)=>{let{children:d,...f}=n;if(i0(d)&&typeof Ni=="function"&&(d=Ni(d._payload)),z.isValidElement(d)){const m=XC(d),h=BC(f,d.props);return d.type!==z.Fragment&&(h.ref=i?_C(i,m):m),z.cloneElement(d,h)}return z.Children.count(d)>1?z.Children.only(null):null});return o.displayName=`${a}.SlotClone`,o}var VC=Symbol("radix.slottable");function PC(a){return z.isValidElement(a)&&typeof a.type=="function"&&"__radixId"in a.type&&a.type.__radixId===VC}function BC(a,o){const n={...o};for(const i in o){const d=a[i],f=o[i];/^on[A-Z]/.test(i)?d&&f?n[i]=(...h)=>{const g=f(...h);return d(...h),g}:d&&(n[i]=d):i==="style"?n[i]={...d,...f}:i==="className"&&(n[i]=[d,f].filter(Boolean).join(" "))}return{...a,...n}}function XC(a){let o=Object.getOwnPropertyDescriptor(a.props,"ref")?.get,n=o&&"isReactWarning"in o&&o.isReactWarning;return n?a.ref:(o=Object.getOwnPropertyDescriptor(a,"ref")?.get,n=o&&"isReactWarning"in o&&o.isReactWarning,n?a.props.ref:a.props.ref||a.ref)}const qg=a=>typeof a=="boolean"?`${a}`:a===0?"0":a,zg=Fv,UC=(a,o)=>n=>{var i;if(o?.variants==null)return zg(a,n?.class,n?.className);const{variants:d,defaultVariants:f}=o,m=Object.keys(d).map(x=>{const b=n?.[x],S=f?.[x];if(b===null)return null;const y=qg(b)||qg(S);return d[x][y]}),h=n&&Object.entries(n).reduce((x,b)=>{let[S,y]=b;return y===void 0||(x[S]=y),x},{}),g=o==null||(i=o.compoundVariants)===null||i===void 0?void 0:i.reduce((x,b)=>{let{class:S,className:y,...R}=b;return Object.entries(R).every(C=>{let[N,L]=C;return Array.isArray(L)?L.includes({...f,...h}[N]):{...f,...h}[N]===L})?[...x,S,y]:x},[]);return zg(a,m,g,n?.class,n?.className)},kC=UC("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2",{variants:{variant:{default:"bg-primary text-primary-foreground border border-primary-border",destructive:"bg-destructive text-destructive-foreground shadow-sm border-destructive-border",outline:" border [border-color:var(--button-outline)] shadow-xs active:shadow-none ",secondary:"border bg-secondary text-secondary-foreground border border-secondary-border ",ghost:"border border-transparent",link:"text-primary underline-offset-4 hover:underline"},size:{default:"min-h-9 px-4 py-2",sm:"min-h-8 rounded-md px-3 text-xs",lg:"min-h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),l0=z.forwardRef(({className:a,variant:o,size:n,asChild:i=!1,...d},f)=>{const m=i?zC:"button";return l.jsx(m,{className:sa(kC({variant:o,size:n,className:a})),ref:f,...d})});l0.displayName="Button";function FC({onMenuToggle:a,menuOpen:o}){const{theme:n,setTheme:i}=GS();return l.jsxs("header",{className:"sticky top-0 z-30 h-12 flex items-center justify-between px-4 bg-background/95 backdrop-blur border-b border-border",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("button",{onClick:a,className:"lg:hidden p-1.5 rounded-md hover:bg-accent transition-colors","aria-label":"Toggle menu",children:o?l.jsx(n0,{className:"w-4 h-4"}):l.jsx(mC,{className:"w-4 h-4"})}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-6 h-6 bg-primary rounded flex items-center justify-center",children:l.jsx(Ud,{className:"w-3.5 h-3.5 text-white"})}),l.jsx("span",{className:"font-semibold text-sm text-foreground",children:"Assembly x86/x64"}),l.jsx("span",{className:"hidden sm:inline text-muted-foreground text-sm",children:"— Guia Completo"})]})]}),l.jsxs(l0,{variant:"ghost",size:"icon",className:"h-8 w-8",onClick:()=>i(n==="dark"?"light":"dark"),children:[l.jsx(bC,{className:"h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),l.jsx(hC,{className:"absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"})]})]})}const HC={iniciante:"bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",intermediário:"bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",avançado:"bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30"};function GC({difficulty:a}){return l.jsx("span",{className:sa("inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border capitalize",HC[a]),children:a.charAt(0).toUpperCase()+a.slice(1)})}function Se({title:a,subtitle:o,difficulty:n="iniciante",timeToRead:i,children:d}){return l.jsxs(_i.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.25},className:"max-w-3xl mx-auto px-6 py-8",children:[l.jsxs("div",{className:"mb-6 flex items-center gap-2 text-xs text-muted-foreground",children:[l.jsx(GC,{difficulty:n}),i&&l.jsxs(l.Fragment,{children:[l.jsx(s0,{className:"w-3 h-3"}),l.jsxs("span",{className:"flex items-center gap-1",children:[l.jsx(ZT,{className:"w-3 h-3"}),i]})]})]}),l.jsx("h1",{className:"text-3xl font-bold tracking-tight text-foreground mb-2",children:a}),l.jsx("p",{className:"text-muted-foreground text-base mb-8 leading-relaxed",children:o}),l.jsx("div",{className:`prose prose-sm max-w-none dark:prose-invert
        prose-headings:font-semibold prose-headings:tracking-tight
        prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3 prose-h2:border-b prose-h2:border-border prose-h2:pb-2
        prose-h3:text-base prose-h3:mt-5 prose-h3:mb-2
        prose-p:text-sm prose-p:leading-relaxed prose-p:text-foreground/90
        prose-ul:text-sm prose-li:my-0.5
        prose-code:text-primary prose-code:bg-accent/50 prose-code:rounded prose-code:px-1 prose-code:py-0.5 prose-code:text-xs prose-code:font-mono
        prose-pre:p-0 prose-pre:bg-transparent prose-pre:rounded-none
        prose-strong:text-foreground prose-strong:font-semibold
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        [&>*]:mb-0`,children:d})]})}const IC={info:{icon:lC,bg:"bg-blue-500/10 border-blue-500/30",text:"text-blue-600 dark:text-blue-400",title:"text-blue-700 dark:text-blue-300"},tip:{icon:uC,bg:"bg-emerald-500/10 border-emerald-500/30",text:"text-emerald-600 dark:text-emerald-400",title:"text-emerald-700 dark:text-emerald-300"},warning:{icon:EC,bg:"bg-amber-500/10 border-amber-500/30",text:"text-amber-600 dark:text-amber-400",title:"text-amber-700 dark:text-amber-300"},error:{icon:YT,bg:"bg-red-500/10 border-red-500/30",text:"text-red-600 dark:text-red-400",title:"text-red-700 dark:text-red-300"}};function se({type:a="info",title:o,children:n}){const{icon:i,bg:d,text:f,title:m}=IC[a];return l.jsxs("div",{className:sa("not-prose my-5 flex gap-3 rounded-lg border p-4 text-sm leading-relaxed",d),children:[l.jsx(i,{className:sa("w-4 h-4 mt-0.5 shrink-0",f)}),l.jsxs("div",{children:[o&&l.jsx("p",{className:sa("font-semibold mb-1 text-xs uppercase tracking-wide",m),children:o}),l.jsx("div",{className:sa("text-foreground/85",f),children:n})]})]})}function M({code:a,language:o="asm",title:n,className:i}){const[d,f]=z.useState(!1),m=()=>{navigator.clipboard.writeText(a.trim()),f(!0),setTimeout(()=>f(!1),2e3)};return l.jsxs("div",{className:sa("not-prose my-4 rounded-lg overflow-hidden border border-border",i),children:[n&&l.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-muted/60 border-b border-border",children:[l.jsx("span",{className:"text-xs font-medium text-muted-foreground font-mono",children:n}),l.jsx("span",{className:"text-xs text-muted-foreground/60 uppercase tracking-wide",children:o})]}),l.jsxs("div",{className:"relative group",children:[l.jsx("pre",{className:"overflow-x-auto bg-[hsl(224_18%_10%)] dark:bg-[hsl(224_20%_7%)] p-4 text-xs leading-relaxed",children:l.jsx("code",{className:"font-mono text-[hsl(224_10%_88%)] whitespace-pre",children:a.trim()})}),l.jsx("button",{onClick:m,className:"absolute top-2 right-2 p-1.5 rounded-md bg-white/5 hover:bg-white/15 transition-colors opacity-0 group-hover:opacity-100",title:"Copiar",children:d?l.jsx(kT,{className:"w-3.5 h-3.5 text-emerald-400"}):l.jsx($T,{className:"w-3.5 h-3.5 text-white/60"})})]})]})}function YC(){return l.jsxs(Se,{title:"O que é Assembly?",subtitle:"Aprenda a falar diretamente com o processador — sem intermediários, sem mistério.",difficulty:"iniciante",timeToRead:"8 min",children:[l.jsx(se,{type:"info",title:"Não precisa saber nada antes",children:"Este guia começa do absoluto zero. Se você nunca escreveu Assembly antes, está no lugar certo. Vamos explicar tudo com exemplos simples e analogias do dia a dia."}),l.jsx("h2",{children:"O processador só entende números"}),l.jsxs("p",{children:["Seu processador (CPU) não entende palavras como ",l.jsx("em",{children:'"some esses dois números"'}),". Ele só entende sequências de zeros e uns — o chamado ",l.jsx("strong",{children:"código de máquina"}),". Por exemplo, a instrução que soma dois números em um Intel moderno é representada pelos bytes ",l.jsx("code",{children:"01 D8"}),"."]}),l.jsxs("p",{children:["Obviamente, escrever programas como ",l.jsx("code",{children:"01 D8 83 C0 05 C3"})," seria impossível para um humano. Por isso foi criado o ",l.jsx("strong",{children:"Assembly"}),": uma linguagem que usa palavras curtas e legíveis no lugar desses números. Em vez de ",l.jsx("code",{children:"01 D8"}),", você escreve ",l.jsx("code",{children:"add eax, ebx"}),". É exatamente o mesmo para o processador — mas muito mais fácil de ler para nós."]}),l.jsx(se,{type:"tip",title:"Analogia: Assembly é como uma legenda",children:"Imagine que o processador fala só mandarim. O código de máquina (zeros e uns) é o mandarim. O Assembly é a legenda em português: você escreve na legenda, o assembler traduz para mandarim. O processador executa o mandarim — mas você escreveu em algo legível."}),l.jsx("h2",{children:"Assembly vs linguagens como Python ou Java"}),l.jsxs("p",{children:["Em Python, quando você escreve ",l.jsx("code",{children:"x = 5 + 3"}),", muita coisa acontece nos bastidores: o interpretador verifica o tipo de x, aloca memória, chama funções internas... São dezenas de operações do processador para cada linha sua."]}),l.jsxs("p",{children:["Em Assembly, cada linha que você escreve é ",l.jsx("em",{children:"exatamente uma instrução"})," do processador. Não tem mágica, não tem intermediário. Você tem controle total — e por isso Assembly é:"]}),l.jsxs("ul",{children:[l.jsxs("li",{children:[l.jsx("strong",{children:"Extremamente rápido"})," — sem camadas em cima do processador"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Extremamente pequeno"})," — você decide cada byte do programa"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Extremamente difícil no começo"})," — você faz tudo manualmente"]})]}),l.jsx("h2",{children:"Para que serve aprender Assembly hoje?"}),l.jsx("p",{children:"Em 2025, ninguém escreve programas inteiros em Assembly. Mas aprender Assembly abre portas que nenhuma outra linguagem abre:"}),l.jsxs("ul",{children:[l.jsxs("li",{children:[l.jsx("strong",{children:"Entender o que o computador realmente faz"})," — você para de usar caixas-pretas e começa a entender o que acontece quando você aperta uma tecla"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Engenharia reversa"})," — quando você tem um programa sem o código-fonte (um vírus, um jogo com proteção, um protocolo fechado), você analisa o Assembly que ele gera"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Segurança e exploits"})," — vulnerabilidades como buffer overflow só fazem sentido quando você entende a pilha e os registradores em Assembly"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Otimização extrema"})," — drivers, sistemas operacionais, codecs de vídeo — partes críticas são escritas em Assembly quando o compilador não gera código bom o suficiente"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Curiosidade pura"})," — entender como as coisas funcionam de verdade"]})]}),l.jsx("h2",{children:"Como funciona o fluxo: do seu código ao programa"}),l.jsx("p",{children:"Quando você escreve Assembly, o processo até virar um programa executável tem três etapas. Vamos entender cada uma:"}),l.jsx("div",{className:"not-prose my-4 space-y-3",children:[{num:"1",titulo:"Você escreve o código Assembly (.asm)",desc:"Um arquivo de texto normal, com extensão .asm. Você escreve instruções como mov, add, call. É legível para humanos."},{num:"2",titulo:"O Assembler converte para arquivo objeto (.o)",desc:"O NASM (ou outro assembler) lê seu .asm e gera um arquivo binário .o. Esse arquivo contém o código de máquina, mas ainda NÃO é executável — faltam informações de onde os símbolos estão."},{num:"3",titulo:"O Linker junta tudo e cria o executável",desc:"O ld (linker) pega o .o e resolve todas as referências: onde fica a função main, onde fica a string que você definiu, onde fica a função printf da biblioteca C. O resultado é um executável final que o sistema operacional consegue rodar."}].map(({num:a,titulo:o,desc:n})=>l.jsxs("div",{className:"flex gap-4 items-start border border-border rounded-lg p-3",children:[l.jsx("div",{className:"shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm",children:a}),l.jsxs("div",{children:[l.jsx("p",{className:"font-semibold text-sm mb-1",children:o}),l.jsx("p",{className:"text-xs text-muted-foreground",children:n})]})]},a))}),l.jsx(M,{title:"As três etapas no terminal (Linux)",language:"bash",code:`
# Etapa 1: você criou o arquivo hello.asm com seu editor de texto

# Etapa 2: o NASM lê hello.asm e gera hello.o (código de máquina, mas incompleto)
nasm -f elf64 hello.asm -o hello.o
#       ↑                      ↑
#   formato ELF64          nome do arquivo de saída
#   (padrão Linux 64-bit)

# Etapa 3: o linker ld pega o hello.o e cria o executável final "hello"
ld hello.o -o hello
#              ↑
#        nome do executável

# Agora sim podemos rodar!
./hello
        `}),l.jsx("h2",{children:'O que é a "árvore de símbolos" que você mencionou?'}),l.jsxs("p",{children:["Quando o NASM processa seu código, ele cria uma ",l.jsx("strong",{children:"tabela de símbolos"})," — uma lista de nomes e seus endereços. Por exemplo:"]}),l.jsxs("ul",{children:[l.jsxs("li",{children:["Você define ",l.jsx("code",{children:'msg db "Olá"'}),' → o NASM registra: "existe um símbolo chamado ',l.jsx("em",{children:"msg"}),' no endereço X"']}),l.jsxs("li",{children:["Você usa ",l.jsx("code",{children:"mov rsi, msg"}),' → o NASM anota: "aqui eu precisei do endereço de ',l.jsx("em",{children:"msg"}),'"']})]}),l.jsxs("p",{children:["O arquivo ",l.jsx("code",{children:".o"})," guarda tanto o código quanto essa tabela de símbolos. O ",l.jsx("strong",{children:"linker"}),"então olha todas as tabelas de todos os ",l.jsx("code",{children:".o"})," que você passou e ",l.jsx("em",{children:"resolve"})," as referências: substitui cada nome pelo endereço real que ele vai ocupar no executável final."]}),l.jsx("p",{children:"É como organizar uma festa: primeiro você faz a lista de convidados (tabela de símbolos), depois atribui um assento para cada um (o linker resolve os endereços)."}),l.jsx(M,{title:"Exemplo: símbolos no arquivo objeto",language:"bash",code:`
# Ver a tabela de símbolos de um arquivo .o:
nm hello.o

# Saída típica:
# 0000000000000000 T _start   ← símbolo _start está no endereço 0 (relativo)
# 0000000000000000 d msg      ← símbolo msg na seção de dados

# Depois do linker, os endereços viram reais:
nm hello
# 0000000000401000 T _start   ← agora tem endereço absoluto no executável
# 0000000000402000 d msg
        `}),l.jsx("h2",{children:'Intel vs AT&T — dois "sotaques" de Assembly'}),l.jsx("p",{children:"Assembly x86 tem dois formatos principais. É como português de Portugal vs português do Brasil: a mesma língua, escrita de formas diferentes."}),l.jsx(M,{title:"A mesma instrução nos dois formatos",language:"asm",code:`
; Formato Intel (NASM) — usado neste guia:
; Ordem: DESTINO, ORIGEM
; Ou seja: "coloque o valor X no lugar Y"
mov eax, 42       ; eax = 42   (coloque 42 no registrador eax)
add eax, 8        ; eax += 8   (some 8 ao que está em eax)

; Formato AT&T (GAS/gcc) — mesmo resultado, escrita diferente:
; Ordem: ORIGEM, DESTINO  (invertida!)
; Registradores têm % na frente, números têm $ na frente
movl $42, %eax    ; eax = 42   (mesmo resultado)
addl $8, %eax     ; eax += 8   (mesmo resultado)
        `}),l.jsxs("p",{children:["Este guia usa ",l.jsx("strong",{children:"formato Intel com o assembler NASM"})," — é o mais comum em engenharia reversa, cursos e documentação técnica."]}),l.jsxs(se,{type:"tip",title:"Por onde continuar?",children:["Agora que você entendeu o que é Assembly e como funciona o processo, vá para",l.jsx("strong",{children:" Ferramentas Essenciais"})," para instalar o NASM no seu computador. Em seguida, ",l.jsx("strong",{children:"Primeiro Programa"})," vai te guiar linha por linha pelo seu primeiro Hello World em Assembly."]})]})}function QC(){return l.jsxs(Se,{title:"História e Arquiteturas",subtitle:"Como o Assembly x86 nasceu em 1978 e chegou até os processadores modernos de 64 bits.",difficulty:"iniciante",timeToRead:"6 min",children:[l.jsx("h2",{children:"O começo: computadores que cabiam num quarto"}),l.jsxs("p",{children:["Em 1978, a Intel lançou o processador ",l.jsx("strong",{children:"8086"}),". Era um chip de 16 bits — o que significa que ele trabalhava com números de no máximo 16 dígitos binários de cada vez, o equivalente a números de 0 a 65.535."]}),l.jsxs("p",{children:["Esse processador conseguia endereçar até ",l.jsx("strong",{children:"1 megabyte de memória"}),". Parece pouco hoje (uma foto do celular tem vários megabytes), mas em 1978 era revolucionário."]}),l.jsx("p",{children:"Em 1981, a IBM lançou o IBM PC usando o chip 8088 (uma variação do 8086). Esse computador popularizou a arquitetura x86 — e é por isso que até hoje, mais de 40 anos depois, seu computador ainda é compatível com programas escritos para aquela época."}),l.jsx(se,{type:"info",title:"Por que 'x86'?",children:'O nome vem dos modelos: 8086, 80186, 80286, 80386... Todos terminavam em "86". Hoje chamamos de "x86" qualquer processador dessa família, incluindo os modernos de 64 bits.'}),l.jsx("h2",{children:"Como o processador foi evoluindo"}),l.jsx("p",{children:"Cada geração aumentou o tamanho dos números que o processador consegue processar de uma vez, a velocidade, e os recursos disponíveis. Pense em ampliar a cozinha: mais fogões, mais espaço, mais pratos sendo preparados ao mesmo tempo."}),l.jsx("div",{className:"not-prose my-4 space-y-3",children:[{ano:"1978",proc:"Intel 8086",bits:"16-bit",nota:"O avô de todos. Registradores AX, BX, CX, DX com 16 bits cada. Endereçava até 1 MB de RAM."},{ano:"1985",proc:"Intel 80386 (i386)",bits:"32-bit",nota:"Grande salto: registradores dobraram para 32 bits (EAX, EBX...). Passou a suportar até 4 GB de RAM. É a base do Windows 95/98/XP de 32 bits."},{ano:"1993",proc:"Intel Pentium",bits:"32-bit",nota:"Primeiro a ter unidade de ponto flutuante (FPU) integrada para cálculos com decimais. Ficou famoso por um bug de divisão descoberto em 1994."},{ano:"1999",proc:"Intel Pentium III",bits:"32-bit",nota:"Introduziu SSE: conjuntos de instruções para processar múltiplos números ao mesmo tempo (usado em jogos, vídeo, áudio)."},{ano:"2000",proc:"AMD Athlon 64",bits:"64-bit",nota:"A AMD saiu na frente e lançou a extensão de 64 bits (AMD64). Os registradores passaram a ter 64 bits (RAX, RBX...) e oito novos registradores apareceram (R8 a R15). A Intel copiou e chamou de EM64T."},{ano:"2011+",proc:"Intel Sandy Bridge e posteriores",bits:"64-bit",nota:"AVX: instruções que processam 256 bits de uma vez. Em gerações mais novas, AVX-512 processa 512 bits. Usado em inteligência artificial, criptografia e processamento de sinais."}].map(({ano:a,proc:o,bits:n,nota:i})=>l.jsxs("div",{className:"flex gap-4 items-start",children:[l.jsx("div",{className:"shrink-0 w-14 text-right",children:l.jsx("span",{className:"text-xs font-mono font-bold text-primary",children:a})}),l.jsx("div",{className:"w-px bg-border self-stretch"}),l.jsxs("div",{className:"pb-2",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-0.5 flex-wrap",children:[l.jsx("span",{className:"text-sm font-semibold text-foreground",children:o}),l.jsx("span",{className:"text-xs bg-accent text-accent-foreground px-1.5 py-0.5 rounded font-mono",children:n})]}),l.jsx("p",{className:"text-xs text-muted-foreground",children:i})]})]},a))}),l.jsx("h2",{children:"32 bits vs 64 bits — qual a diferença prática?"}),l.jsxs("p",{children:["O tamanho em bits determina o ",l.jsx("strong",{children:"maior número que o processador trata nativamente"}),"e, mais importante, ",l.jsx("strong",{children:"quanta memória RAM ele consegue usar"}),":"]}),l.jsxs("ul",{children:[l.jsxs("li",{children:[l.jsx("strong",{children:"32 bits:"}),' máximo de 4 GB de RAM. Registradores chamados EAX, EBX, ECX... (o E vem de "Extended" — extendido de 16 para 32 bits)']}),l.jsxs("li",{children:[l.jsx("strong",{children:"64 bits:"}),' teoricamente 16 exabytes de RAM (na prática, 128 GB a 6 TB dependendo do processador). Registradores chamados RAX, RBX, RCX... (o R vem de "Register" — a AMD escolheu esse prefixo)']})]}),l.jsx("p",{children:"A boa notícia: um processador de 64 bits consegue rodar programas de 32 bits sem problemas. Backward compatibility — compatibilidade com o passado — é uma obsessão da arquitetura x86."}),l.jsx("h2",{children:"Os modos de operação da CPU"}),l.jsx("p",{children:"O mesmo processador moderno consegue operar em modos diferentes, como um carro que tem marcha ré além das marchas normais. Isso existe por compatibilidade histórica:"}),l.jsx("div",{className:"not-prose my-4 overflow-x-auto",children:l.jsxs("table",{className:"w-full text-sm border-collapse border border-border",children:[l.jsx("thead",{children:l.jsxs("tr",{className:"bg-muted text-xs uppercase tracking-wide text-muted-foreground",children:[l.jsx("th",{className:"border border-border px-3 py-2 text-left",children:"Modo"}),l.jsx("th",{className:"border border-border px-3 py-2 text-left",children:"Bits"}),l.jsx("th",{className:"border border-border px-3 py-2 text-left",children:"Quando é usado"})]})}),l.jsx("tbody",{children:[["Real Mode","16-bit","Nos primeiros microssegundos do boot. A BIOS começa aqui. É literalmente o modo do 8086 original."],["Protected Mode","32-bit","Windows 32-bit, Linux 32-bit. Tem proteção de memória — processos não invadem memória uns dos outros."],["Long Mode","64-bit","Todos os sistemas operacionais modernos de 64 bits. O modo que você vai usar neste guia."]].map(([a,o,n])=>l.jsxs("tr",{className:"hover:bg-accent/30",children:[l.jsx("td",{className:"border border-border px-3 py-2 font-semibold text-sm",children:a}),l.jsx("td",{className:"border border-border px-3 py-2 font-mono text-xs text-primary",children:o}),l.jsx("td",{className:"border border-border px-3 py-2 text-muted-foreground text-xs",children:n})]},a))})]})}),l.jsx("h2",{children:'Existem outros "Assembly"?'}),l.jsx("p",{children:"Sim! Cada família de processador tem seu próprio Assembly. Os conceitos são parecidos (registradores, instruções, memória), mas a sintaxe e as instruções são diferentes. É como aprender espanhol depois do português: os fundamentos ajudam, mas você precisa aprender as diferenças."}),l.jsxs("ul",{children:[l.jsxs("li",{children:[l.jsx("strong",{children:"ARM / AArch64"})," — smartphones (Android, iPhone), Raspberry Pi, chips Apple M1/M2/M3"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"RISC-V"})," — arquitetura aberta e crescente, muito usada em pesquisa"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"MIPS"})," — roteadores domésticos, PlayStation 1 e 2"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"AVR"})," — Arduino e outros microcontroladores simples"]})]}),l.jsxs(se,{type:"tip",title:"Foco deste guia",children:["Todo o código aqui é em ",l.jsx("strong",{children:"x86/x64 com NASM no Linux"}),". Mas os conceitos que você vai aprender — registradores, pilha, memória, chamadas de função — existem em TODA arquitetura Assembly. Aprender x86 te dá uma base sólida para qualquer outra."]})]})}function ZC(){return l.jsxs(Se,{title:"Ferramentas Essenciais",subtitle:"O que você precisa instalar para começar a escrever e rodar Assembly no seu computador.",difficulty:"iniciante",timeToRead:"10 min",children:[l.jsxs(se,{type:"info",title:"Você precisa de três ferramentas",children:["Para escrever Assembly, você precisa de: (1) um ",l.jsx("strong",{children:"assembler"})," que traduz seu código para código de máquina, (2) um ",l.jsx("strong",{children:"linker"})," que junta tudo num executável, e (3) um ",l.jsx("strong",{children:"depurador"})," para ver o que está acontecendo quando der errado. Vamos instalar tudo de uma vez."]}),l.jsx("h2",{children:"O que é um Assembler?"}),l.jsxs("p",{children:["O assembler é um programa que lê seu arquivo ",l.jsx("code",{children:".asm"})," (texto legível) e gera um arquivo ",l.jsx("code",{children:".o"})," com o código de máquina correspondente. Pense nele como um tradutor simultâneo: você fala em Assembly, ele transcreve para bytes que o processador entende."]}),l.jsxs("p",{children:["O mais popular para aprendizado é o ",l.jsx("strong",{children:"NASM"})," (Netwide Assembler). É gratuito, funciona em Linux/Windows/Mac, e é o que usamos neste guia."]}),l.jsx("h2",{children:"O que é um Linker?"}),l.jsxs("p",{children:["O linker pega o arquivo ",l.jsx("code",{children:".o"})," gerado pelo assembler e cria o executável final. Por que precisa dessa etapa separada? Porque seu programa pode ter várias partes — por exemplo, seu código Assembly pode chamar a função ",l.jsx("code",{children:"printf"})," da biblioteca C. O linker encontra onde essa função está e conecta tudo."]}),l.jsxs("p",{children:["No Linux, o linker padrão é o ",l.jsx("code",{children:"ld"}),", que já vem instalado com as ferramentas básicas de desenvolvimento."]}),l.jsx("h2",{children:"Instalando tudo de uma vez"}),l.jsx(M,{title:"Linux (Ubuntu/Debian/Mint) — copie e cole no terminal",language:"bash",code:`
# Atualizar a lista de pacotes disponíveis
sudo apt update

# Instalar NASM (assembler), GDB (depurador) e ferramentas básicas de compilação
sudo apt install nasm gdb build-essential

# Verificar se instalou corretamente (deve mostrar a versão)
nasm --version
# Resultado esperado: NASM version 2.16.x ou similar

gdb --version
# Resultado esperado: GNU gdb (Ubuntu ...) ...
      `}),l.jsx(M,{title:"Linux (Fedora/RHEL/CentOS)",language:"bash",code:`
sudo dnf install nasm gdb gcc binutils
      `}),l.jsx(M,{title:"macOS (com Homebrew)",language:"bash",code:`
# Primeiro instale o Homebrew se não tiver: https://brew.sh
brew install nasm

# O GDB no Mac tem limitações. Para Mac, use lldb que já vem instalado:
lldb --version
      `}),l.jsx(M,{title:"Windows",language:"bash",code:`
# Opção 1: Baixar o instalador direto do site oficial:
# https://nasm.us/  →  clique em "Download" → pegue o instalador .exe
# Depois adicione o NASM ao PATH do sistema (aparece nas instruções do instalador)

# Opção 2: Via WinGet (Windows Package Manager):
winget install nasm

# Para rodar exemplos Linux no Windows, use o WSL2:
# (Windows Subsystem for Linux — instala um Ubuntu dentro do Windows)
wsl --install
      `}),l.jsx(se,{type:"tip",title:"Recomendação: use Linux ou WSL2",children:"Este guia usa exemplos do Linux x64. Se você está no Windows, o WSL2 (Ubuntu dentro do Windows) é a forma mais fácil de acompanhar todos os exemplos sem mudanças."}),l.jsx("h2",{children:"Seu primeiro teste: compilar e rodar"}),l.jsxs("p",{children:["Vamos verificar se tudo está funcionando com um programa mínimo. Crie um arquivo chamado ",l.jsx("code",{children:"teste.asm"})," com o conteúdo abaixo:"]}),l.jsx(M,{title:"teste.asm — programa que apenas termina com código 42",language:"asm",code:`
; Programa mínimo em Assembly x64 Linux
; Não faz nada, apenas encerra com código de saída 42

section .text        ; seção de código (onde ficam as instruções)
    global _start    ; diz ao linker que _start é o ponto de entrada do programa

_start:
    mov rax, 60      ; número 60 = instrução "exit" (encerrar programa) no Linux
    mov rdi, 42      ; código de saída que vamos retornar (pode ser 0 a 255)
    syscall          ; chamar o sistema operacional para executar o exit
      `}),l.jsx(M,{title:"Compilar e executar no terminal",language:"bash",code:`
# Passo 1: o NASM lê teste.asm e gera teste.o (código de máquina, mas ainda incompleto)
nasm -f elf64 teste.asm -o teste.o
#       ↑
#   elf64 = formato de arquivo Linux 64-bit

# Passo 2: o linker pega teste.o e cria o executável final "teste"
ld teste.o -o teste

# Passo 3: executar
./teste

# Verificar o código de saída (deve ser 42)
echo $?
# Resultado: 42
      `}),l.jsxs("p",{children:["Se aparecer ",l.jsx("code",{children:"42"})," no terminal, parabéns — seu ambiente está configurado e você acabou de rodar seu primeiro programa Assembly!"]}),l.jsx("h2",{children:"O GDB — seu aliado para depurar"}),l.jsx("p",{children:"O GDB (GNU Debugger) é uma ferramenta que permite executar seu programa passo a passo, ver o valor dos registradores e da memória em tempo real. É essencial quando seu programa não faz o que você esperava."}),l.jsx("p",{children:'Pense no GDB como um "câmera lenta" para seu programa — você pode pausar em qualquer instrução e ver exatamente o estado do processador naquele momento.'}),l.jsx(M,{title:"Compilar com informações de debug (necessário para o GDB)",language:"bash",code:`
# Note o -g e -F dwarf: eles adicionam informações de debug ao arquivo .o
# Isso permite que o GDB mostre qual linha do .asm está sendo executada
nasm -f elf64 -g -F dwarf teste.asm -o teste.o
ld teste.o -o teste
      `}),l.jsx(M,{title:"Comandos básicos do GDB",language:"bash",code:`
# Iniciar o GDB com seu programa:
gdb ./teste

# Dentro do GDB, você digita comandos:

# Colocar um ponto de parada no início do programa (_start)
(gdb) break _start
# Resultado: Breakpoint 1 at 0x401000

# Executar o programa até o primeiro ponto de parada
(gdb) run

# Executar UMA instrução por vez (avança linha a linha)
(gdb) stepi

# Ver o valor de todos os registradores agora
(gdb) info registers

# Ver especificamente o registrador rax
(gdb) print $rax

# Mostrar o código Assembly ao redor da instrução atual
(gdb) layout asm

# Mostrar registradores e código ao mesmo tempo
(gdb) layout regs

# Ver o conteúdo da memória no endereço que rsp aponta (10 valores em hex)
(gdb) x/10xg $rsp

# Sair do GDB
(gdb) quit
      `}),l.jsx("h2",{children:"Editor de código recomendado"}),l.jsxs("p",{children:["Use o ",l.jsx("strong",{children:"VS Code"})," (gratuito). Instale a extensão chamada",l.jsx("strong",{children:' "x86 and x86_64 Assembly"'})," — ela colore as instruções Assembly e facilita muito a leitura do código."]}),l.jsxs("p",{children:["Outra ferramenta muito útil (sem precisar instalar nada) é o site",l.jsx("strong",{children:" Compiler Explorer"})," em ",l.jsx("code",{children:"godbolt.org"}),". Você escreve código C, e ele mostra o Assembly equivalente gerado pelo compilador. Ótimo para entender o que o compilador gera."]}),l.jsx("h2",{children:"Script para compilar e rodar de uma vez"}),l.jsx("p",{children:"Cansado de digitar sempre os mesmos comandos? Crie um script que faz tudo automaticamente:"}),l.jsx(M,{title:"compilar.sh — salve esse arquivo e use: ./compilar.sh meu_programa.asm",language:"bash",code:`
#!/bin/bash
# Uso: ./compilar.sh nome_do_arquivo.asm
# Exemplo: ./compilar.sh hello.asm

# Pegar o nome do arquivo sem a extensão .asm
NOME="\${1%.asm}"

echo "Montando $NOME.asm..."
nasm -f elf64 "$NOME.asm" -o "$NOME.o"

# Se o NASM falhou (erro de sintaxe), parar aqui
if [ $? -ne 0 ]; then
    echo "ERRO: falha no assembler. Verifique a sintaxe do código."
    exit 1
fi

echo "Linkando..."
ld "$NOME.o" -o "$NOME"

echo "Executando ./$NOME"
echo "---"
./"$NOME"
echo "---"
echo "Código de saída: $?"
      `}),l.jsx(M,{title:"Tornar o script executável e usar",language:"bash",code:`
# Dar permissão de execução ao script
chmod +x compilar.sh

# Usar:
./compilar.sh hello.asm
      `}),l.jsxs(se,{type:"tip",title:"Próximo passo",children:["Com o ambiente pronto, vá para ",l.jsx("strong",{children:"Primeiro Programa"})," — lá vamos escrever um Hello World completo e explicar cada linha em detalhe."]})]})}function KC(){return l.jsxs(Se,{title:"Primeiro Programa",subtitle:"Vamos escrever um Hello World do zero, entender cada linha, e aprender a estrutura de todo programa Assembly.",difficulty:"iniciante",timeToRead:"15 min",children:[l.jsx(se,{type:"info",title:"O que você vai aprender nesta página",children:"Como um programa Assembly é organizado em seções, o que significa cada diretiva, como funciona uma syscall, e como compilar e executar tudo no terminal."}),l.jsx("h2",{children:'Todo programa Assembly tem "seções"'}),l.jsxs("p",{children:["Um programa Assembly é dividido em ",l.jsx("strong",{children:"seções"}),". Cada seção tem um propósito específico. Pense nas seções como diferentes gavetas de uma mesa:"]}),l.jsxs("ul",{children:[l.jsxs("li",{children:[l.jsx("strong",{children:".data"}),' — a gaveta dos dados prontos. Aqui ficam strings, números constantes, tudo que você definiu antes do programa começar. Por exemplo: a mensagem "Olá, Mundo!".']}),l.jsxs("li",{children:[l.jsx("strong",{children:".bss"})," — a gaveta dos espaços reservados. Aqui você reserva espaço para variáveis que ainda não têm valor (como um buffer para receber entrada do usuário). O sistema operacional preenche tudo com zeros."]}),l.jsxs("li",{children:[l.jsx("strong",{children:".text"})," — a gaveta do código. Aqui ficam as instruções que o processador vai executar. É a parte principal do programa."]})]}),l.jsx(M,{title:"Estrutura básica de todo programa NASM",language:"asm",code:`
; ============================================================
; SEÇÃO DE DADOS — itens que já têm valor definido
; ============================================================
section .data
    mensagem db "Olá, Mundo!", 10
    ;           ↑              ↑
    ;    texto da string    byte 10 = newline (o 
 do final da linha)

    tamanho equ $ - mensagem
    ;           ↑   ↑
    ;     endereço  endereço onde mensagem começou
    ;     atual     $ é a posição atual, então $ - mensagem = tamanho em bytes

; ============================================================
; SEÇÃO BSS — espaço reservado (ainda sem valor)
; ============================================================
section .bss
    buffer resb 64   ; reservar 64 bytes para uso futuro (ex: ler entrada do usuário)
    ;        ↑
    ;   "reserve bytes" — reserva espaço sem inicializar

; ============================================================
; SEÇÃO DE CÓDIGO — as instruções que o processador executa
; ============================================================
section .text
    global _start    ; _start é o nome do ponto de entrada
    ;      ↑         ; "global" significa: "avise o linker que _start existe aqui"
    ;                ; sem essa linha, o linker não sabe onde o programa começa

_start:              ; rótulo (label) — uma marca no código, como um marcador de página
    ; ... instruções aqui ...
        `}),l.jsx("h2",{children:'O que é um "rótulo" (label)?'}),l.jsxs("p",{children:["No Assembly, um rótulo (ou label) é simplesmente um ",l.jsx("strong",{children:"nome que você dá a um endereço"}),". Quando você escreve ",l.jsx("code",{children:"_start:"}),', está dizendo: "a instrução que vem logo depois deste ponto tem o nome ',l.jsx("em",{children:"_start"}),'".']}),l.jsxs("p",{children:["Isso é muito útil porque, em vez de escrever endereços de memória como ",l.jsx("code",{children:"0x401000"}),", você pode escrever nomes descritivos como ",l.jsx("code",{children:"_start"}),", ",l.jsx("code",{children:"loop_inicio"}),", ou ",l.jsx("code",{children:"fim_do_programa"}),". O assembler substitui esses nomes pelos endereços reais."]}),l.jsx("h2",{children:"O que é uma Syscall?"}),l.jsxs("p",{children:["Quando seu programa quer fazer algo que envolve o sistema operacional — imprimir texto, ler um arquivo, criar um processo — ele precisa ",l.jsx("strong",{children:"pedir permissão ao kernel"}),'. Essa "pedido formal" se chama ',l.jsx("em",{children:"syscall"})," (chamada de sistema)."]}),l.jsx("p",{children:"No Linux x64, uma syscall funciona assim:"}),l.jsxs("ul",{children:[l.jsxs("li",{children:["Você coloca o ",l.jsx("strong",{children:"número da operação"})," no registrador ",l.jsx("code",{children:"rax"})]}),l.jsxs("li",{children:["Você coloca os ",l.jsx("strong",{children:"argumentos"})," nos registradores ",l.jsx("code",{children:"rdi"}),", ",l.jsx("code",{children:"rsi"}),", ",l.jsx("code",{children:"rdx"}),"..."]}),l.jsxs("li",{children:["Você escreve a instrução ",l.jsx("code",{children:"syscall"})]}),l.jsxs("li",{children:["O kernel executa a operação e coloca o resultado de volta em ",l.jsx("code",{children:"rax"})]})]}),l.jsx("p",{children:"É como ligar para um serviço: você disca o número (rax = número da syscall), fala o que precisa (argumentos nos outros registradores), e espera a resposta."}),l.jsx(se,{type:"info",title:"Syscalls mais usadas no Linux x64",children:"Número 1 = write (escrever dados), Número 0 = read (ler dados), Número 60 = exit (encerrar o programa). Existem mais de 300 syscalls diferentes no Linux."}),l.jsx("h2",{children:"Hello World linha por linha"}),l.jsxs("p",{children:["Agora vamos escrever o Hello World completo. Mas desta vez, vamos explicar",l.jsx("em",{children:" cada linha"})," antes de mostrar o código inteiro:"]}),l.jsx(M,{title:"hello.asm — Hello World com explicação de cada linha",language:"asm",code:`
; Linhas que começam com ; são comentários — o NASM ignora tudo depois do ;
; Comentários são para você e outros humanos, não para o computador.

; ---- DADOS ----
section .data

    msg db "Olá, Mundo!", 10
    ; db significa "Define Byte(s)"
    ; msg é o rótulo (o nome que damos a esse dado)
    ; "Olá, Mundo!" são os bytes dos caracteres da string
    ; 10 é o byte com valor 10, que representa o caractere newline (
)
    ; Ou seja: msg aponta para os bytes: 79 108 225 44 32 77 117 110 100 111 33 10

    len equ $ - msg
    ; equ define uma constante (como um #define no C)
    ; $ é o endereço atual onde o NASM está no momento
    ; msg é o endereço onde a string começa
    ; $ - msg = a diferença = o número de bytes da string = o comprimento
    ; len não ocupa espaço na memória — é calculado em tempo de montagem

; ---- CÓDIGO ----
section .text
    global _start    ; exportar _start para o linker

_start:

    ; ===== Parte 1: imprimir "Olá, Mundo!" =====
    ; Vamos chamar a syscall "write" (número 1)
    ; write(fd, buffer, tamanho)
    ;   fd = 1 para stdout (saída padrão = terminal)
    ;   buffer = endereço de onde começam os dados
    ;   tamanho = quantos bytes escrever

    mov rax, 1       ; rax = 1 → syscall número 1 = write
    ;   ↑   ↑
    ;  destino  origem (valor imediato)
    ; "mova o valor 1 para dentro do registrador rax"

    mov rdi, 1       ; rdi = 1 → primeiro argumento: fd = 1 (stdout)
    ; rdi é onde vai o 1º argumento de uma syscall no Linux 64-bit

    mov rsi, msg     ; rsi = endereço de msg → segundo argumento: onde está o texto
    ; rsi é onde vai o 2º argumento
    ; msg aqui não é o conteúdo da string, é o ENDEREÇO onde ela está na memória

    mov rdx, len     ; rdx = len → terceiro argumento: quantos bytes escrever
    ; rdx é onde vai o 3º argumento

    syscall          ; executar a syscall! O kernel recebe: write(1, msg, len)
    ; O Linux vai copiar len bytes a partir do endereço em rsi para o terminal

    ; ===== Parte 2: encerrar o programa =====
    ; Precisamos chamar a syscall "exit" (número 60)
    ; exit(código_de_saída)
    ;   código 0 = sucesso, qualquer outro = erro

    mov rax, 60      ; rax = 60 → syscall número 60 = exit
    xor rdi, rdi     ; rdi = 0 → código de saída = 0 (sucesso)
    ; xor rdi, rdi é a forma eficiente de zerar rdi
    ; qualquer número XOR ele mesmo = 0
    ; é equivalente a "mov rdi, 0" mas usa menos bytes de código de máquina

    syscall          ; executar o exit — o programa termina aqui
        `}),l.jsx("h2",{children:"Compilando e executando"}),l.jsx(M,{title:"Terminal — copie e cole esses comandos",language:"bash",code:`
# 1. Criar o arquivo (use seu editor de preferência, salve como hello.asm)

# 2. Montar: NASM lê hello.asm e gera hello.o
nasm -f elf64 hello.asm -o hello.o
# Se não aparecer nenhum erro, funcionou!

# 3. Linkar: ld junta hello.o e cria o executável "hello"
ld hello.o -o hello
# Se não aparecer nenhum erro, funcionou!

# 4. Executar:
./hello
# Saída: Olá, Mundo!

# 5. Ver o código de saída (0 = sucesso)
echo $?
# Saída: 0
        `}),l.jsx("h2",{children:"Erros comuns de iniciantes"}),l.jsx("div",{className:"not-prose my-4 space-y-3",children:[{erro:"hello.asm:X: error: parser: instruction expected",causa:"Erro de sintaxe. Verifique se escreveu a instrução corretamente — geralmente é um typo (ex: 'mvo' em vez de 'mov')."},{erro:"ld: warning: cannot find entry symbol _start",causa:"Você esqueceu 'global _start' ou escreveu errado. O linker não sabe onde o programa começa."},{erro:"Segmentation fault",causa:"O programa tentou acessar memória que não pertence a ele, ou chegou ao fim do código sem chamar exit. Verifique se a syscall exit está no final."},{erro:"nasm: command not found",causa:"O NASM não está instalado. Volte para 'Ferramentas Essenciais' e siga as instruções de instalação."}].map(({erro:a,causa:o})=>l.jsxs("div",{className:"border border-border rounded-lg p-3",children:[l.jsx("code",{className:"text-xs text-red-400 block mb-1",children:a}),l.jsx("p",{className:"text-xs text-muted-foreground",children:o})]},a))}),l.jsx("h2",{children:"Tamanhos de dados: db, dw, dd, dq"}),l.jsxs("p",{children:["Na seção ",l.jsx("code",{children:".data"}),', você define dados com diferentes tamanhos. A letra depois do "d" indica o tamanho:']}),l.jsx(M,{title:"Definindo dados de diferentes tamanhos",language:"asm",code:`
section .data

    ; db = Define Byte = 1 byte (valores de 0 a 255)
    cor    db 255            ; um byte com valor 255
    texto  db "Ola", 0      ; bytes dos caracteres + byte zero (terminador)

    ; dw = Define Word = 2 bytes (valores de 0 a 65535)
    porta  dw 8080           ; número de porta de rede

    ; dd = Define Doubleword = 4 bytes (valores de 0 a ~4 bilhões)
    idade  dd 25             ; inteiro de 32 bits

    ; dq = Define Quadword = 8 bytes (valores muito grandes)
    grande dq 1000000000000  ; inteiro de 64 bits

    ; Múltiplos valores na mesma linha (cria um array):
    notas  db 10, 8, 7, 9, 6  ; 5 bytes seguidos: 10, 8, 7, 9, 6

section .bss

    ; resb = Reserve Bytes (sem valor, o SO preenche com 0)
    buffer  resb 256         ; 256 bytes para armazenar texto do usuário

    ; resd = Reserve Doublewords
    numero  resd 1           ; espaço para 1 inteiro de 32 bits

    ; resq = Reserve Quadwords
    grande  resq 1           ; espaço para 1 inteiro de 64 bits
        `}),l.jsx(se,{type:"tip",title:"Regra de ouro: sempre termine com exit",children:"Todo programa Assembly em Linux DEVE terminar com a syscall exit (número 60). Se o processador chegar ao final do seu código sem o exit, ele vai continuar executando os bytes que vierem depois — que podem ser qualquer coisa. O resultado é um Segmentation Fault ou comportamento imprevisível."})]})}function JC(){return l.jsxs(Se,{title:"Registradores x86 (32-bit)",subtitle:"Registradores são como variáveis que vivem dentro do processador — muito mais rápidas que qualquer memória.",difficulty:"iniciante",timeToRead:"10 min",children:[l.jsxs(se,{type:"info",title:"O que são registradores?",children:["Imagine que a memória RAM é um grande armazém cheio de caixas. O processador, para trabalhar, precisa pegar as caixas e colocar em sua própria mesa de trabalho. Essa mesa tem poucos espaços — mas eles são instantâneos. Esses espaços na mesa do processador são os ",l.jsx("strong",{children:"registradores"}),". Em x86, cada registrador tem 32 bits (4 bytes) de espaço."]}),l.jsx("h2",{children:"Os 4 registradores principais: EAX, EBX, ECX, EDX"}),l.jsx("p",{children:'Esses 4 registradores são os "de uso geral" — você pode usá-los para praticamente qualquer coisa. Mas cada um tem uma função tradicional que ajuda a organizar o código:'}),l.jsx("div",{className:"not-prose my-4 space-y-3",children:[{reg:"EAX",nome:"Acumulador (Accumulator)",emoji:"🧮",desc:"O mais usado de todos. Resultado de operações matemáticas vai para cá. Quando uma função retorna um valor, ele fica em EAX. Multiplicação e divisão usam EAX automaticamente.",exemplo:"mov eax, 10  ; guarda o número 10 em EAX"},{reg:"EBX",nome:"Base Register",emoji:"📦",desc:"Frequentemente usado como ponteiro para estruturas de dados ou endereços base. Em chamadas do sistema operacional mais antigas, era o primeiro argumento.",exemplo:"mov ebx, endereco_do_array  ; EBX aponta para o início do array"},{reg:"ECX",nome:"Contador (Counter)",emoji:"🔢",desc:"Registrador de contador. A instrução LOOP usa ECX automaticamente (diminui ECX e volta ao início enquanto ECX != 0). Também é o 1º argumento em algumas convenções de chamada.",exemplo:"mov ecx, 10  ; repetir o loop 10 vezes"},{reg:"EDX",nome:"Dados (Data)",emoji:"📊",desc:"Parceiro do EAX em multiplicação e divisão. Em divisão de 64 bits, os 32 bits superiores ficam em EDX e os 32 inferiores em EAX (formando um par EDX:EAX).",exemplo:"xor edx, edx  ; zerar EDX antes de uma divisão"}].map(({reg:a,nome:o,emoji:n,desc:i,exemplo:d})=>l.jsxs("div",{className:"border border-border rounded-lg p-3",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[l.jsx("span",{className:"text-lg",children:n}),l.jsx("span",{className:"font-mono font-bold text-primary",children:a}),l.jsxs("span",{className:"text-xs text-muted-foreground",children:["— ",o]})]}),l.jsx("p",{className:"text-xs text-muted-foreground mb-2",children:i}),l.jsx("code",{className:"text-xs bg-accent/40 px-2 py-1 rounded block font-mono",children:d})]},a))}),l.jsx("h2",{children:"Registradores de índice e ponteiro: ESI, EDI, EBP, ESP"}),l.jsx("p",{children:"Esses registradores têm funções mais específicas — principalmente lidar com endereços de memória:"}),l.jsx("div",{className:"not-prose my-4 space-y-3",children:[{reg:"ESI",nome:"Source Index (Índice de Origem)",desc:"Usado como ponteiro de origem em operações que copiam dados de um lugar para outro. Ex: copiar bytes de um buffer para outro."},{reg:"EDI",nome:"Destination Index (Índice de Destino)",desc:"Parceiro do ESI. Aponta para o destino nas operações de cópia. A instrução MOVS copia de [ESI] para [EDI] e avança os dois automaticamente."},{reg:"EBP",nome:"Base Pointer (Ponteiro de Base do Frame)",desc:"Marca o 'chão' da função atual na pilha. Quando você entra em uma função, EBP fica fixo apontando para aquele ponto, e você acessa variáveis locais via [EBP-4], [EBP-8] etc."},{reg:"ESP",nome:"Stack Pointer (Ponteiro da Pilha)",desc:"SEMPRE aponta para o topo da pilha. PUSH diminui ESP (pilha cresce para baixo) e coloca um valor. POP pega o valor e aumenta ESP. Nunca mexa em ESP diretamente a não ser que saiba exatamente o que está fazendo."}].map(({reg:a,nome:o,desc:n})=>l.jsxs("div",{className:"border border-border rounded-lg p-3",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsx("span",{className:"font-mono font-bold text-primary",children:a}),l.jsxs("span",{className:"text-xs text-muted-foreground",children:["— ",o]})]}),l.jsx("p",{className:"text-xs text-muted-foreground",children:n})]},a))}),l.jsx("h2",{children:'EIP — O "dedo" que aponta para a próxima instrução'}),l.jsxs("p",{children:["O registrador ",l.jsx("strong",{children:"EIP"})," (Instruction Pointer) é especial: ele contém o endereço da próxima instrução que o processador vai executar. É como um dedo seguindo a linha de um livro."]}),l.jsxs("p",{children:["Você ",l.jsx("strong",{children:"não consegue ler ou escrever EIP diretamente"}),". Ele muda automaticamente quando você usa JMP (saltar), CALL (chamar função) ou RET (retornar). Em engenharia reversa e exploits, controlar EIP é o objetivo final — porque quem controla EIP controla o que o programa executa."]}),l.jsx("h2",{children:'Registradores têm "sub-partes" — e isso é poderoso'}),l.jsx("p",{children:"Cada registrador de 32 bits pode ser acessado em partes menores. Isso existe por compatibilidade com o código de 16 bits e 8 bits do passado. Veja o EAX como exemplo:"}),l.jsxs("div",{className:"not-prose my-4",children:[l.jsxs("div",{className:"border border-border rounded-lg overflow-hidden",children:[l.jsx("div",{className:"bg-muted px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide",children:"EAX — 32 bits — exemplo com valor 0x12345678"}),l.jsxs("div",{className:"p-3 space-y-2",children:[l.jsx("div",{className:"flex items-center gap-2",children:l.jsxs("div",{className:"w-full bg-primary/20 border border-primary/40 rounded px-2 py-1.5 text-center font-mono text-primary",children:[l.jsx("span",{className:"text-xs font-bold block",children:"EAX"}),l.jsx("span",{className:"text-xs",children:"0x12345678 — todos os 32 bits"})]})}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-1/2 opacity-30 text-center text-xs text-muted-foreground py-2 border border-dashed border-border rounded",children:"bits 16-31 (não acessíveis pelo nome AX)"}),l.jsxs("div",{className:"w-1/2 bg-blue-500/20 border border-blue-500/40 rounded px-2 py-1.5 text-center font-mono text-blue-400",children:[l.jsx("span",{className:"text-xs font-bold block",children:"AX"}),l.jsx("span",{className:"text-xs",children:"0x5678 — 16 bits baixos"})]})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-3/4 opacity-0 py-2"}),l.jsxs("div",{className:"flex-1 bg-emerald-500/20 border border-emerald-500/40 rounded px-2 py-1.5 text-center font-mono text-emerald-400",children:[l.jsx("span",{className:"text-xs font-bold block",children:"AH"}),l.jsx("span",{className:"text-xs",children:"0x56"})]}),l.jsxs("div",{className:"flex-1 bg-amber-500/20 border border-amber-500/40 rounded px-2 py-1.5 text-center font-mono text-amber-400",children:[l.jsx("span",{className:"text-xs font-bold block",children:"AL"}),l.jsx("span",{className:"text-xs",children:"0x78"})]})]})]})]}),l.jsx("p",{className:"text-xs text-muted-foreground mt-2",children:"O mesmo padrão se aplica: EBX→BX→BH/BL, ECX→CX→CH/CL, EDX→DX→DH/DL"})]}),l.jsx(M,{title:"Acessando partes do registrador",language:"asm",code:`
; Colocar um valor grande em EAX
mov eax, 0x12345678
; Agora EAX = 0x12345678

; Lendo as partes (apenas leitura, sem modificar):
; AX  = 0x5678  → os 16 bits menos significativos
; AH  = 0x56    → byte da posição 8-15 (AH = "High byte" de AX)
; AL  = 0x78    → byte da posição 0-7  (AL = "Low byte" de AX)

; Escrevendo em apenas UMA parte — as outras não mudam:
mov al, 0xFF       ; só AL muda: EAX agora = 0x123456FF
mov ah, 0x00       ; só AH muda: EAX agora = 0x123400FF
mov ax, 0xAAAA     ; só AX muda: EAX agora = 0x1234AAAA

; Para comparar, escrevendo em EAX inteiro ZERA tudo:
mov eax, 0x0001    ; EAX agora = 0x00000001  (os 32 bits são reescritos)
        `}),l.jsx("h2",{children:"Quais registradores você precisa preservar?"}),l.jsx("p",{children:'Quando você chama uma função, alguns registradores podem ser modificados pela função chamada — e outros devem ser preservados. Essa combinação é chamada de "convenção de chamada". Em x86 cdecl (o padrão do Linux 32-bit):'}),l.jsx("div",{className:"not-prose my-4 overflow-x-auto",children:l.jsxs("table",{className:"w-full text-sm border-collapse border border-border",children:[l.jsx("thead",{children:l.jsxs("tr",{className:"bg-muted text-xs uppercase tracking-wide text-muted-foreground",children:[l.jsx("th",{className:"border border-border px-3 py-2 text-left",children:"Registrador"}),l.jsx("th",{className:"border border-border px-3 py-2 text-left",children:"Papel"}),l.jsx("th",{className:"border border-border px-3 py-2 text-left",children:"Precisa preservar?"})]})}),l.jsx("tbody",{children:[["EAX","Resultado da função, acumulador","Não — pode mudar livremente"],["EBX","Uso geral / base","Sim — salve antes de usar, restaure depois"],["ECX","Contador","Não — pode mudar livremente"],["EDX","Dados secundários","Não — pode mudar livremente"],["ESI","Índice de origem","Sim — salve antes de usar, restaure depois"],["EDI","Índice de destino","Sim — salve antes de usar, restaure depois"],["EBP","Base do frame","Sim — sempre restaure antes de retornar"],["ESP","Topo da pilha","Sim — deve terminar no mesmo valor que começou"]].map(([a,o,n])=>l.jsxs("tr",{className:"hover:bg-accent/30",children:[l.jsx("td",{className:"border border-border px-3 py-2 font-mono text-primary text-xs",children:a}),l.jsx("td",{className:"border border-border px-3 py-2 text-xs",children:o}),l.jsx("td",{className:`border border-border px-3 py-2 text-xs font-medium ${n.startsWith("Sim")?"text-emerald-500":"text-amber-500"}`,children:n})]},a))})]})}),l.jsxs(se,{type:"tip",title:"Dica: zerando um registrador de forma eficiente",children:["Para zerar um registrador, ",l.jsx("code",{children:"xor eax, eax"})," é melhor que ",l.jsx("code",{children:"mov eax, 0"}),". Por quê? XOR de qualquer número com ele mesmo sempre dá zero — e a instrução XOR gera apenas 2 bytes de código de máquina, enquanto MOV com zero imediato gera 5 bytes. Compiladores otimizados sempre usam XOR para zerar registradores."]})]})}function WC(){return l.jsxs(Se,{title:"Registradores x64 (64-bit)",subtitle:"No modo 64-bit, os registradores ficaram maiores e ganhamos 8 novos. Aqui entendemos tudo isso.",difficulty:"iniciante",timeToRead:"10 min",children:[l.jsx("h2",{children:"O que mudou do x86 para o x64?"}),l.jsxs("p",{children:["Quando a AMD criou a extensão de 64 bits (chamada AMD64), ela precisava de uma forma de identificar os registradores maiores sem inventar nomes totalmente novos. A solução foi simples: adicionar o prefixo ",l.jsx("strong",{children:"R"})," nos registradores existentes."]}),l.jsxs("p",{children:["Então ",l.jsx("code",{children:"EAX"})," (32 bits) virou ",l.jsx("code",{children:"RAX"})," (64 bits). ",l.jsx("code",{children:"ESP"})," virou ",l.jsx("code",{children:"RSP"}),". E assim por diante. Além disso, foram adicionados ",l.jsx("strong",{children:"8 novos registradores"}),":",l.jsx("code",{children:"R8"})," até ",l.jsx("code",{children:"R15"}),"."]}),l.jsx("div",{className:"not-prose my-4 space-y-2",children:[{x86:"EAX",x64:"RAX",uso:"Acumulador / retorno de função / 1º argumento de syscall"},{x86:"EBX",x64:"RBX",uso:"Uso geral (callee-saved — você precisa preservar)"},{x86:"ECX",x64:"RCX",uso:"4º argumento de função"},{x86:"EDX",x64:"RDX",uso:"3º argumento de função"},{x86:"ESI",x64:"RSI",uso:"2º argumento de função / índice de origem"},{x86:"EDI",x64:"RDI",uso:"1º argumento de função / índice de destino"},{x86:"EBP",x64:"RBP",uso:"Ponteiro de base do frame (callee-saved)"},{x86:"ESP",x64:"RSP",uso:"Ponteiro da pilha (sempre aponta para o topo)"},{x86:"—",x64:"R8",uso:"5º argumento de função"},{x86:"—",x64:"R9",uso:"6º argumento de função"},{x86:"—",x64:"R10–R15",uso:"Uso geral (R12-R15 são callee-saved)"}].map(({x86:a,x64:o,uso:n})=>l.jsxs("div",{className:"grid grid-cols-5 gap-2 items-center text-xs border border-border rounded px-3 py-2",children:[l.jsx("span",{className:"font-mono text-muted-foreground",children:a}),l.jsx("span",{className:"text-muted-foreground text-center",children:"→"}),l.jsx("span",{className:"font-mono font-bold text-primary",children:o}),l.jsx("span",{className:"text-muted-foreground col-span-2",children:n})]},o))}),l.jsx("h2",{children:'Cada registrador tem "tamanhos menores" — hierarquia'}),l.jsxs("p",{children:["Assim como no x86, você pode acessar partes menores de cada registrador x64. O ",l.jsx("code",{children:"RAX"})," é o maior, e você pode acessar só os 32, 16 ou 8 bits inferiores:"]}),l.jsx(M,{title:"Hierarquia de tamanhos — RAX como exemplo",language:"asm",code:`
; RAX tem 64 bits (8 bytes). Você pode acessar partes dele:

RAX      ; 64 bits — o registrador completo
EAX      ; 32 bits — os 32 bits de baixo de RAX
AX       ; 16 bits — os 16 bits de baixo de RAX
AH       ; 8 bits  — os bits 8 a 15 de RAX
AL       ; 8 bits  — os 8 bits mais baixos de RAX

; Para os novos registradores R8-R15, os sufixos são:
R8       ; 64 bits
R8D      ; 32 bits — o D vem de "Doubleword" (32-bit)
R8W      ; 16 bits — o W vem de "Word" (16-bit)
R8B      ; 8 bits  — o B vem de "Byte"

; Exemplo prático — colocar o valor 0xDEADBEEFCAFEBABE em RAX
mov rax, 0xDEADBEEFCAFEBABE

; Agora as partes são:
; RAX = 0xDEADBEEFCAFEBABE   (64 bits)
; EAX = 0xCAFEBABE            (32 bits inferiores)
; AX  = 0xBABE                (16 bits inferiores)
; AH  = 0xBA                  (byte 8-15)
; AL  = 0xBE                  (byte 0-7, o mais baixo)
        `}),l.jsxs(se,{type:"warning",title:"Cuidado: escrever em EAX zera os 32 bits superiores de RAX!",children:["Esse é um comportamento SURPRESA do x64. Quando você escreve em um registrador de 32 bits (como EAX), os 32 bits superiores de RAX são automaticamente zerados. Mas escrever em AX ou AL NÃO zera os bits superiores — eles ficam como estão. Ou seja: ",l.jsx("code",{children:"mov eax, 1"})," faz RAX = 0x0000000000000001 (funciona como esperado). Mas ",l.jsx("code",{children:"mov ax, 1"})," pode deixar lixo nos bits superiores de RAX!"]}),l.jsx("h2",{children:"Como passar argumentos para funções em x64"}),l.jsx("p",{children:"No x86, argumentos de função iam para a pilha (um por um). No x64, os primeiros 6 argumentos vão direto nos registradores — o que é muito mais rápido, porque não precisa acessar memória."}),l.jsxs("p",{children:["Essa regra se chama ",l.jsx("strong",{children:"Convenção de Chamada System V AMD64"})," (usada no Linux e macOS):"]}),l.jsx("div",{className:"not-prose my-4 space-y-2",children:[{pos:"1º argumento",reg:"RDI",ex:"write(1, msg, len) → rdi = 1"},{pos:"2º argumento",reg:"RSI",ex:"write(1, msg, len) → rsi = endereço de msg"},{pos:"3º argumento",reg:"RDX",ex:"write(1, msg, len) → rdx = len"},{pos:"4º argumento",reg:"RCX",ex:""},{pos:"5º argumento",reg:"R8",ex:""},{pos:"6º argumento",reg:"R9",ex:""},{pos:"7º em diante",reg:"Pilha",ex:"empurrados na pilha, da direita para esquerda"},{pos:"Valor de retorno",reg:"RAX",ex:"o resultado da função fica em RAX"}].map(({pos:a,reg:o,ex:n})=>l.jsxs("div",{className:"flex gap-3 items-center text-xs border border-border rounded px-3 py-2",children:[l.jsx("span",{className:"text-muted-foreground w-28 shrink-0",children:a}),l.jsx("span",{className:"font-mono font-bold text-primary w-16 shrink-0",children:o}),l.jsx("span",{className:"text-muted-foreground",children:n})]},a))}),l.jsx(M,{title:"Exemplo: chamar uma função com 3 argumentos",language:"asm",code:`
; Suponha que temos uma função em C: int soma(int a, int b, int c)
; Em Assembly, chamamos assim:

; Preparar os argumentos nos registradores:
mov rdi, 10      ; 1º argumento: a = 10
mov rsi, 20      ; 2º argumento: b = 20
mov rdx, 30      ; 3º argumento: c = 30

; Chamar a função:
call soma        ; o processador salva o endereço de retorno na pilha e pula para soma

; Depois do call, o resultado está em RAX:
; rax = 10 + 20 + 30 = 60

; Então, se quisermos guardar o resultado em RBX:
mov rbx, rax     ; rbx = resultado = 60
        `}),l.jsx("h2",{children:"Quais registradores você precisa preservar?"}),l.jsxs("p",{children:["Quando você chama uma função (com ",l.jsx("code",{children:"call"}),"), essa função pode modificar alguns registradores livremente — esses se chamam ",l.jsx("strong",{children:"caller-saved"})," (salvo por quem chama). Outros registradores a função é obrigada a preservar — ",l.jsx("strong",{children:"callee-saved"})," (salvo pela função chamada)."]}),l.jsx("div",{className:"not-prose my-4 overflow-x-auto",children:l.jsxs("table",{className:"w-full text-sm border-collapse border border-border",children:[l.jsx("thead",{children:l.jsxs("tr",{className:"bg-muted text-xs uppercase tracking-wide text-muted-foreground",children:[l.jsx("th",{className:"border border-border px-3 py-2 text-left",children:"Registrador"}),l.jsx("th",{className:"border border-border px-3 py-2 text-left",children:"Quem preserva?"}),l.jsx("th",{className:"border border-border px-3 py-2 text-left",children:"O que isso significa"})]})}),l.jsx("tbody",{children:[["RAX, RCX, RDX, RSI, RDI, R8, R9, R10, R11","caller-saved","A função chamada pode mudar esses livremente. Se você precisar do valor depois do call, salve antes."],["RBX, RBP, R12, R13, R14, R15","callee-saved","A função chamada DEVE salvar e restaurar. Se você escrever código de uma função, guarde esses antes de usar."],["RSP","callee-saved especial","Deve terminar apontando para o mesmo lugar. PUSH e POP devem estar equilibrados."]].map(([a,o,n])=>l.jsxs("tr",{className:"hover:bg-accent/30",children:[l.jsx("td",{className:"border border-border px-3 py-2 font-mono text-primary text-xs",children:a}),l.jsx("td",{className:`border border-border px-3 py-2 text-xs font-medium ${o.startsWith("callee")?"text-emerald-500":"text-amber-500"}`,children:o}),l.jsx("td",{className:"border border-border px-3 py-2 text-xs text-muted-foreground",children:n})]},a))})]})}),l.jsx("h2",{children:"Endereçamento relativo ao RIP"}),l.jsxs("p",{children:["No x64, uma novidade importante: você pode referenciar dados usando a posição da instrução atual como ponto de referência. Isso se chama ",l.jsx("strong",{children:"RIP-relative addressing"}),"."]}),l.jsx("p",{children:"Por quê isso importa? Quando o sistema operacional carrega um programa na memória, ele pode colocá-lo em endereços diferentes a cada execução (por segurança). Se você usar endereços absolutos, o programa quebra. Com RIP-relative, o código sempre funciona."}),l.jsx(M,{title:"RIP-relative — acessar dados de forma portável",language:"asm",code:`
section .data
    mensagem db "Ola!", 0

section .text
_start:
    ; Forma ERRADA (endereço absoluto — pode não funcionar em executáveis modernos):
    ; mov rdi, mensagem

    ; Forma CORRETA — relativa ao RIP (funciona em qualquer endereço):
    lea rdi, [rel mensagem]
    ;          ↑
    ;        "rel" = relativo ao RIP

    ; Dica: adicione isso no início do arquivo para usar rel automaticamente:
    ; default rel
        `}),l.jsxs(se,{type:"tip",title:"Boa prática: adicione 'default rel' no início do arquivo",children:["Com ",l.jsx("code",{children:"default rel"})," no começo do arquivo ",l.jsx("code",{children:".asm"}),", todos os acessos a memória serão automaticamente relativos ao RIP. Isso é necessário para executáveis modernos no Linux e macOS."]})]})}function $C(){return l.jsxs(Se,{title:"FLAGS e EFLAGS",subtitle:"O registrador de status da CPU — cada bit indica o resultado de uma operação aritmética ou lógica.",difficulty:"intermediário",timeToRead:"12 min",children:[l.jsxs(se,{type:"info",title:"O que são FLAGS?",children:['O registrador EFLAGS (32-bit) ou RFLAGS (64-bit) é um conjunto de bits onde cada bit é uma "flag" que indica uma condição — overflow, carry, zero, sinal, etc. Instruções de comparação (',l.jsx("code",{children:"CMP"}),", ",l.jsx("code",{children:"TEST"}),") e aritméticas atualizam essas flags, que são então usadas pelos saltos condicionais."]}),l.jsx("h2",{children:"Flags mais Importantes"}),l.jsx("div",{className:"not-prose my-4 space-y-2",children:[{flag:"ZF",nome:"Zero Flag",desc:"Setada quando o resultado de uma operação é zero. Usada por JE/JZ."},{flag:"SF",nome:"Sign Flag",desc:"Setada quando o resultado é negativo (bit mais significativo = 1). Usada por JL/JG."},{flag:"CF",nome:"Carry Flag",desc:"Setada quando há carry/borrow em aritmética sem sinal. Usada por JB/JA."},{flag:"OF",nome:"Overflow Flag",desc:"Setada quando há overflow em aritmética com sinal. Usada com SF para JL/JG."},{flag:"PF",nome:"Parity Flag",desc:"Setada se o byte menos significativo do resultado tem número par de bits 1."},{flag:"AF",nome:"Auxiliary Carry Flag",desc:"Carry do bit 3 para o bit 4. Usada em aritmética BCD."},{flag:"DF",nome:"Direction Flag",desc:"Controla direção das instruções de string (0=forward, 1=backward). CLD/STD."},{flag:"IF",nome:"Interrupt Flag",desc:"Habilita/desabilita interrupções. STI/CLI."},{flag:"TF",nome:"Trap Flag",desc:"Modo single-step para debugging (gera exceção após cada instrução)."}].map(({flag:a,nome:o,desc:n})=>l.jsxs("div",{className:"flex gap-3 p-3 border border-border rounded-lg",children:[l.jsx("div",{className:"shrink-0 w-8 h-8 bg-primary/10 border border-primary/30 rounded flex items-center justify-center",children:l.jsx("span",{className:"font-mono text-xs font-bold text-primary",children:a})}),l.jsxs("div",{children:[l.jsx("span",{className:"text-sm font-semibold",children:o}),l.jsx("p",{className:"text-xs text-muted-foreground mt-0.5",children:n})]})]},a))}),l.jsx("h2",{children:"Instruções que Atualizam FLAGS"}),l.jsx(M,{title:"Operações que modificam flags",language:"asm",code:`
; CMP — compara (subtrai, mas descarta resultado, apenas atualiza flags)
cmp rax, rbx      ; flags = resultado de (rax - rbx)
cmp rax, 0        ; ZF=1 se rax==0, SF=1 se rax<0

; TEST — AND bit a bit (descarta resultado, apenas atualiza flags)
test rax, rax     ; ZF=1 se rax==0 (forma eficiente de testar zero)
test al, 0x01     ; ZF=1 se bit 0 de AL = 0

; ADD / SUB / MUL / DIV — atualizam CF, ZF, SF, OF, PF, AF
add rax, rbx      ; todas as flags aritméticas são atualizadas
sub rax, 1        ; ZF=1 se resultado = 0

; AND / OR / XOR — atualizam ZF, SF, PF; limpam CF e OF
and rax, 0xFF
xor rax, rax      ; ZF=1 sempre (rax=0), CF=0, OF=0

; INC / DEC — NÃO atualizam CF (diferente de ADD/SUB 1)
inc rax
dec rbx
      `}),l.jsx("h2",{children:"Lendo e Modificando FLAGS"}),l.jsx(M,{title:"Manipulação direta de FLAGS",language:"asm",code:`
; Salvar EFLAGS na pilha:
pushfd             ; x86 (32-bit)
pushfq             ; x64 (64-bit)

; Restaurar EFLAGS da pilha:
popfd
popfq

; Flags individuais:
stc                ; Set Carry Flag (CF = 1)
clc                ; Clear Carry Flag (CF = 0)
cmc                ; Complement Carry (inverte CF)

std                ; Set Direction Flag (DF = 1 — strings de trás pra frente)
cld                ; Clear Direction Flag (DF = 0 — strings normais)

sti                ; Set Interrupt Flag (habilita interrupções)
cli                ; Clear Interrupt Flag (desabilita interrupções)

; Ler uma flag específica via LAHF (carrega AH com flags de status):
lahf               ; AH = SF:ZF:0:AF:0:PF:1:CF
sahf               ; Restaura flags de AH
      `}),l.jsx("h2",{children:"Como CMP + Flags + Jump funcionam juntos"}),l.jsx(M,{title:"Exemplo completo de comparação",language:"asm",code:`
; Queremos: if (rax > 10) goto maior
mov rax, 15
cmp rax, 10       ; 15 - 10 = 5
                  ; ZF=0 (não é zero)
                  ; SF=0 (resultado positivo)
                  ; CF=0 (sem borrow)
                  ; OF=0 (sem overflow)
jg maior          ; Jump if Greater: salta se ZF=0 AND SF=OF
                  ; 0=0 AND 0=0 → condição verdadeira → SALTA

; Se rax fosse 5:
; cmp rax, 10 → 5 - 10 = -5
; SF=1 (negativo), ZF=0, CF=1 (borrow), OF=0
; jg: SF=OF? → 1=0? → FALSO → não salta

maior:
    ; código quando rax > 10
      `}),l.jsx("h2",{children:"SETcc — Converter Flag em Byte"}),l.jsx(M,{title:"SETcc — resultado condicional em registrador",language:"asm",code:`
; SETcc coloca 1 ou 0 em um registrador de 8 bits com base nas flags
cmp rax, rbx
sete  al      ; AL = 1 se rax == rbx, senão AL = 0
setne al      ; AL = 1 se rax != rbx
setg  al      ; AL = 1 se rax > rbx  (com sinal)
setge al      ; AL = 1 se rax >= rbx
setl  al      ; AL = 1 se rax < rbx
setle al      ; AL = 1 se rax <= rbx
seta  al      ; AL = 1 se rax > rbx  (sem sinal)
setb  al      ; AL = 1 se rax < rbx  (sem sinal)

; Muito útil para evitar branches e gerar código branchless:
; bool result = (a > b);
cmp rax, rbx
setg al
movzx rax, al   ; RAX = 0 ou 1
      `}),l.jsxs(se,{type:"tip",title:"CMP vs SUB vs TEST",children:[l.jsx("strong",{children:"CMP"})," = SUB sem salvar resultado. ",l.jsx("strong",{children:"TEST"})," = AND sem salvar resultado. Use ",l.jsx("code",{children:"test rax, rax"})," para verificar se RAX é zero — é mais curto e rápido que ",l.jsx("code",{children:"cmp rax, 0"}),"."]})]})}function eM(){return l.jsxs(Se,{title:"Registradores de Segmento e Especiais",subtitle:"Registradores de segmento, controle, debug e ponteiros da CPU além dos de uso geral.",difficulty:"intermediário",timeToRead:"10 min",children:[l.jsx("h2",{children:"Registradores de Segmento"}),l.jsx("p",{children:"Em x86 (modo real e protegido), os registradores de segmento eram usados para endereçar diferentes regiões de memória. Em x64 no modo long, a maioria deles se tornou obsoleta, mas CS, FS e GS ainda têm usos especiais."}),l.jsx(M,{title:"Registradores de segmento",language:"asm",code:`
CS   ; Code Segment — segmento de código (aponta para o código atual)
DS   ; Data Segment — segmento de dados (padrão para acesso a dados)
ES   ; Extra Segment — segmento extra (usado por instruções de string)
SS   ; Stack Segment — segmento da pilha
FS   ; Extra Segment F — no Linux x64: aponta para TLS (Thread Local Storage)
GS   ; Extra Segment G — no Windows x64: aponta para TIB (Thread Information Block)

; Uso em x64 moderno:
; CS, DS, ES, SS = base 0 (flat memory model — ignorados)
; FS e GS ainda têm bases configuráveis via syscalls ARCH_SET_FS/GS

; Exemplo: acessar TLS no Linux
mov rax, qword [fs:0x0]   ; ler valor na base do FS (ponteiro TLS)
      `}),l.jsx("h2",{children:"Registradores de Controle (CRx)"}),l.jsx(M,{title:"Registradores de controle — nível kernel",language:"asm",code:`
; Acessíveis apenas em Ring 0 (kernel mode)

CR0   ; Flags de controle da CPU
      ; Bit 0 (PE) = Protected Mode Enable
      ; Bit 16 (WP) = Write Protect
      ; Bit 31 (PG) = Paging Enable

CR2   ; Page Fault Linear Address — endereço que causou page fault

CR3   ; Page Directory Base Register — endereço físico do page table root
      ; Trocar CR3 = trocar espaço de endereçamento (troca de processo)

CR4   ; Flags estendidas
      ; PAE, PSE, VME, SSE habilitados aqui

; Exemplo (kernel):
mov rax, cr0
or  rax, 1       ; habilitar protected mode
mov cr0, rax
      `}),l.jsx("h2",{children:"Registradores de Debug (DRx)"}),l.jsx(M,{title:"Hardware breakpoints com DRx",language:"asm",code:`
; Hardware breakpoints — acionam sem modificar código
DR0   ; Endereço do breakpoint 0
DR1   ; Endereço do breakpoint 1
DR2   ; Endereço do breakpoint 2
DR3   ; Endereço do breakpoint 3
DR6   ; Debug Status — qual breakpoint foi ativado
DR7   ; Debug Control — habilita breakpoints e define condições
      ;   (execute, write, read/write, I/O)

; Hardware breakpoints têm condições:
; - Executar instrução no endereço (execute)
; - Escrever na memória (write watchpoint)
; - Ler ou escrever (read/write watchpoint)
; - Acesso a porta I/O
      `}),l.jsx("h2",{children:"Registradores XMM / YMM / ZMM (SIMD)"}),l.jsx(M,{title:"Registradores vetoriais",language:"asm",code:`
; SSE — 16 registradores de 128 bits:
XMM0  ... XMM15   ; 128 bits cada

; AVX — expandidos para 256 bits:
YMM0  ... YMM15   ; 256 bits cada (inclui os XMM como metade baixa)

; AVX-512 — 512 bits (se suportado pela CPU):
ZMM0  ... ZMM31   ; 512 bits cada

; Usos:
; - Ponto flutuante (float e double)
; - Operações vetoriais (processar múltiplos valores de uma vez)
; - Criptografia, codecs, processamento de imagem

; Exemplos simples:
movaps xmm0, xmm1       ; mover 128 bits (4 floats) alinhados
addps xmm0, xmm1        ; somar 4 floats packed simultaneamente
      `}),l.jsx("h2",{children:"MXCSR — Controle de FP/SIMD"}),l.jsx(M,{title:"MXCSR — controle de SSE",language:"asm",code:`
; MXCSR = controla comportamento de operações SSE de ponto flutuante
; Bits importantes:
; [0]  IE  — Invalid operation exception
; [1]  DE  — Denormal exception
; [2]  ZE  — Divide by zero exception
; [3]  OE  — Overflow exception
; [5]  PE  — Precision exception
; [6]  DAZ — Denormals Are Zero
; [7-12] Mascaras de exceção
; [13-14] RC — Rounding Control (00=nearest, 01=down, 10=up, 11=truncate)
; [15] FZ  — Flush to Zero

; Ler MXCSR:
stmxcsr [meu_mxcsr]     ; salva em memória
mov eax, [meu_mxcsr]

; Escrever MXCSR:
ldmxcsr [novo_mxcsr]
      `}),l.jsxs(se,{type:"info",title:"Ring levels",children:["Os registradores CRx e DRx só são acessíveis em ",l.jsx("strong",{children:"Ring 0"})," (modo kernel). Tentar acessá-los em Ring 3 (modo usuário) causa uma exceção ",l.jsx("strong",{children:"General Protection Fault"}),". Para debugging com DRx em Ring 3, use chamadas ao kernel (ptrace no Linux, DebugActiveProcess no Windows)."]})]})}function tM(){return l.jsxs(Se,{title:"MOV — Movendo Dados",subtitle:"MOV é a instrução mais usada em Assembly. Entenda todos os jeitos de mover dados entre registradores, memória e valores fixos.",difficulty:"iniciante",timeToRead:"10 min",children:[l.jsx("h2",{children:"O que o MOV faz?"}),l.jsxs("p",{children:[l.jsx("code",{children:"MOV destino, origem"})," copia um valor de algum lugar para outro. Pense nele como o sinal de igual do Assembly: ",l.jsx("code",{children:"mov rax, 42"})," é como escrever ",l.jsx("code",{children:"rax = 42"})," em outras linguagens."]}),l.jsxs("p",{children:["Importante: ",l.jsx("strong",{children:"MOV é uma cópia"}),", não uma transferência. O valor de origem continua existindo exatamente como estava. Só o destino muda."]}),l.jsxs(se,{type:"info",title:"Lembre-se: DESTINO, ORIGEM (nessa ordem)",children:["Em Assembly com sintaxe Intel (NASM), o destino vem primeiro, a origem vem depois.",l.jsx("code",{children:"mov rax, rbx"}),' significa "copie rbx PARA rax" (rax = rbx). Muitos iniciantes invertem isso — lembre-se: é como uma atribuição: ',l.jsx("em",{children:"destino = origem"}),"."]}),l.jsx("h2",{children:"As 4 formas de usar o MOV"}),l.jsx("p",{children:"O MOV pode copiar dados de/para diferentes lugares. Aqui estão todas as combinações:"}),l.jsx(M,{title:"Forma 1: valor fixo → registrador",language:"asm",code:`
; Colocar um número diretamente em um registrador
; Esses números fixos no código se chamam "valores imediatos"

mov rax, 42          ; rax = 42         (número decimal)
mov rax, 0xFF        ; rax = 255        (número hexadecimal — 0x no início)
mov rax, 0b11001     ; rax = 25         (número binário — 0b no início)
mov al,  'A'         ; al  = 65         (código ASCII da letra A)
        `}),l.jsx(M,{title:"Forma 2: registrador → registrador",language:"asm",code:`
; Copiar o valor de um registrador para outro
; Os registradores precisam ter o mesmo tamanho

mov rbx, rax      ; rbx = rax    (ambos 64-bit: OK)
mov cl,  al       ; cl = al      (ambos 8-bit: OK)
mov ax,  bx       ; ax = bx      (ambos 16-bit: OK)

; mov rbx, eax  — INVÁLIDO: tamanhos diferentes
; Use movzx ou movsx para mudar de tamanho (veja abaixo)
        `}),l.jsx(M,{title:"Forma 3: memória → registrador (leitura)",language:"asm",code:`
; Os colchetes [ ] significam "o valor NA memória naquele endereço"
; É como o operador * (derreferência) do C

mov rax, [rbx]        ; rax = *rbx    — lê 8 bytes do endereço que está em rbx
mov al,  [rbx]        ; al  = *rbx    — lê apenas 1 byte (porque al é 8 bits)
mov eax, [rbx + 4]    ; eax = *(rbx+4) — lê 4 bytes 4 posições depois de rbx
mov rax, [rbx + rcx*8] ; índice: lê de rbx + rcx*8 (útil para arrays)

; Exemplo prático: ler o 3º elemento de um array de inteiros de 8 bytes:
; array: dq 10, 20, 30, 40, 50
; O 3º elemento (índice 2) está em array + 2*8 = array + 16
mov rax, [array + 16]   ; rax = 30
        `}),l.jsx(M,{title:"Forma 4: registrador → memória (escrita)",language:"asm",code:`
; Escrever um valor da registrador em um endereço de memória

mov [rbx], rax        ; *rbx = rax        — escreve 8 bytes
mov [rbx + 8], rcx    ; *(rbx+8) = rcx   — escreve 8 bytes com offset

; Quando o compilador não sabe o tamanho, você precisa dizer explicitamente:
mov byte  [rbx], 0xFF  ; escreve 1 byte  (8 bits)
mov word  [rbx], 1000  ; escreve 2 bytes (16 bits)
mov dword [rbx], 42    ; escreve 4 bytes (32 bits)
mov qword [rbx], 0     ; escreve 8 bytes (64 bits)
        `}),l.jsxs(se,{type:"warning",title:"Memória → Memória direto NÃO EXISTE",children:["Uma limitação importante: você não pode copiar de uma posição de memória para outra em uma única instrução. ",l.jsx("code",{children:"mov [dst], [src]"}),' é INVÁLIDO. Sempre use um registrador como "caixeiro viajante":',l.jsx("br",{}),l.jsx("code",{children:"mov rax, [src]"})," → depois → ",l.jsx("code",{children:"mov [dst], rax"})]}),l.jsx("h2",{children:"MOVZX e MOVSX — Mudando o tamanho do valor"}),l.jsxs("p",{children:["Às vezes você tem um valor de 8 bits e quer colocá-lo em um registrador de 64 bits. Só fazer ",l.jsx("code",{children:"mov rax, al"})," é inválido (tamanhos diferentes). Para isso existe o ",l.jsx("strong",{children:"MOVZX"})," e o ",l.jsx("strong",{children:"MOVSX"}),":"]}),l.jsx(M,{title:"MOVZX — copiar e preencher o resto com zeros",language:"asm",code:`
; MOVZX = "MOV with Zero eXtension"
; Copia o valor menor e preenche os bits restantes com ZEROS

mov al, 200              ; al = 200 (0xC8 em hex)
movzx rax, al            ; rax = 0x00000000000000C8 = 200
;                                ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
;                            os bits extras são preenchidos com 0

; Lendo da memória:
movzx rax, byte [rbx]    ; lê 1 byte de memória e coloca em rax (sem sinal)
movzx rax, word [rbx]    ; lê 2 bytes de memória e coloca em rax

; Útil para números sem sinal (unsigned char, unsigned short)
        `}),l.jsx(M,{title:"MOVSX — copiar e estender o sinal (números negativos)",language:"asm",code:`
; MOVSX = "MOV with Sign eXtension"
; Copia o valor menor e preenche os bits restantes com o bit de sinal
; Se o número é positivo (bit mais alto = 0) → preenche com 0
; Se o número é negativo (bit mais alto = 1) → preenche com 1

mov al, -1              ; al = 0xFF (255 sem sinal, -1 com sinal)
movsx rax, al           ; rax = 0xFFFFFFFFFFFFFFFF = -1 em 64 bits
;                                ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
;                            preenchido com 1 (porque o número é negativo)

mov al, 127             ; al = 0x7F (positivo)
movsx rax, al           ; rax = 0x000000000000007F = 127
;                            preenchido com 0 (número positivo)

; Útil para números com sinal (signed char, short)
        `}),l.jsx("h2",{children:"LEA — Carregar um Endereço (não um valor)"}),l.jsxs("p",{children:["O ",l.jsx("strong",{children:"LEA"})," (Load Effective Address) parece com o MOV, mas faz algo diferente: em vez de ler o valor na memória, ele calcula o endereço e o coloca no registrador."]}),l.jsxs("p",{children:["Pense assim: se ",l.jsx("code",{children:"mov rax, [rbx]"}),' é como dizer "me dê o que está na caixa", o ',l.jsx("code",{children:"lea rax, [rbx]"}),' é "me dê o número da caixa" (o endereço, não o conteúdo).']}),l.jsx(M,{title:"LEA — pegar endereço, não conteúdo",language:"asm",code:`
section .data
    texto db "Olá!", 0     ; definimos uma string na memória

section .text
_start:
    ; MOV leria o valor na memória (os bytes "O", "l", "á"...)
    ; Mas printf precisa do ENDEREÇO de onde a string começa.
    ; Para isso, usamos LEA:

    lea rdi, [rel texto]   ; rdi = endereço de 'texto' (não o conteúdo!)
    ;          ↑
    ;        rel = relativo ao RIP (obrigatório no Linux moderno)

    ; Agora rdi aponta para a string, podemos chamar printf:
    ; call printf

; ---- LEA para fazer contas ----
    ; LEA também é usado como um truque para multiplicação rápida:
    lea rax, [rax + rax*2]   ; rax = rax + rax*2 = rax * 3  (em 1 instrução!)
    lea rax, [rax*4 + rax]   ; rax = rax*4 + rax = rax * 5  (em 1 instrução!)
    ; Isso é mais rápido que usar MUL ou IMUL para constantes pequenas
        `}),l.jsx("h2",{children:"XCHG — Trocar dois valores"}),l.jsx(M,{title:"XCHG — swap entre dois registradores",language:"asm",code:`
; XCHG troca os valores dos dois operandos simultaneamente

mov rax, 100
mov rbx, 200
xchg rax, rbx     ; agora rax = 200 e rbx = 100

; Curiosidade: XCHG com memória é muito lento — evite se possível
; xchg [memoria], rax   ; lento! (operação atômica implícita)

; Jeito mais rápido de fazer swap sem XCHG:
push rax           ; salva rax na pilha
mov  rax, rbx      ; rax = rbx
pop  rbx           ; rbx = valor antigo de rax
        `}),l.jsx("h2",{children:"CMOV — MOV condicional (sem precisar de if/jump)"}),l.jsxs("p",{children:["O ",l.jsx("strong",{children:"CMOV"})," (Conditional MOV) executa o MOV só se uma condição for verdadeira. É usado para escrever código mais rápido sem usar JMP (saltos), que podem ser lentos."]}),l.jsx(M,{title:"CMOV — exemplo: calcular o máximo de dois números",language:"asm",code:`
; Queremos: resultado = max(rax, rbx)
; Jeito com JMP (funciona, mas pode ser mais lento):
    cmp rax, rbx
    jg  ja_e_maior    ; pula se rax > rbx
    mov rax, rbx      ; senão, rax = rbx
ja_e_maior:
    ; rax = max(rax, rbx)

; Jeito com CMOV (sem pulo — mais previsível para a CPU):
    mov rcx, rax      ; rcx = rax (candidato inicial para máximo)
    cmp rax, rbx      ; comparar rax e rbx
    cmovl rcx, rbx    ; SE rax < rbx, rcx = rbx (rbx é maior)
    ; rcx = max(rax, rbx)

; Outros CMOV disponíveis:
; cmove  → copia SE igual (Equal)
; cmovne → copia SE diferente (Not Equal)
; cmovg  → copia SE maior (Greater — com sinal)
; cmovl  → copia SE menor (Less — com sinal)
; cmova  → copia SE acima (Above — sem sinal)
; cmovb  → copia SE abaixo (Below — sem sinal)
        `}),l.jsxs(se,{type:"tip",title:"Dica: quando usar CMOV vs JMP?",children:["Use ",l.jsx("strong",{children:"CMOV"})," quando a condição é aproximadamente 50/50 (imprevisível), porque a CPU gasta ciclos tentando adivinhar qual caminho o JMP vai tomar. Para condições muito previsíveis (ex: verificar erro após 1000 operações normais), o JMP costuma ser mais rápido. No início, não se preocupe com isso — apenas conheça as opções."]})]})}function aM(){return l.jsxs(Se,{title:"Aritmética",subtitle:"Somar, subtrair, multiplicar e dividir em Assembly — com explicação de cada detalhe que iniciantes precisam saber.",difficulty:"iniciante",timeToRead:"12 min",children:[l.jsx("h2",{children:"ADD e SUB — Somar e Subtrair"}),l.jsxs("p",{children:["Simples assim: ",l.jsx("code",{children:"ADD"})," soma, ",l.jsx("code",{children:"SUB"})," subtrai. O resultado sempre fica no primeiro operando (o destino):"]}),l.jsx(M,{title:"Adição e subtração",language:"asm",code:`
; ADD destino, origem  →  destino = destino + origem

mov rax, 10        ; rax = 10
add rax, 5         ; rax = rax + 5 = 15
add rax, rbx       ; rax = rax + rbx  (soma com outro registrador)
add rax, 100       ; rax = rax + 100  (soma com número fixo)

; SUB destino, origem  →  destino = destino - origem

mov rax, 20        ; rax = 20
sub rax, 8         ; rax = rax - 8 = 12
sub rax, rbx       ; rax = rax - rbx

; Você também pode somar/subtrair diretamente na memória:
add qword [rbx], 1      ; incrementa o valor de 64-bit que está no endereço rbx
sub byte  [rbx], 5      ; subtrai 5 do byte no endereço rbx
        `}),l.jsx("h2",{children:"INC e DEC — Incrementar e Decrementar"}),l.jsxs("p",{children:[l.jsx("code",{children:"INC"})," adiciona 1, ",l.jsx("code",{children:"DEC"})," subtrai 1. São atalhos práticos muito usados em contadores e loops:"]}),l.jsx(M,{title:"Incremento e decremento",language:"asm",code:`
mov rax, 5     ; rax = 5

inc rax        ; rax = rax + 1 = 6   (equivale a: add rax, 1)
inc rax        ; rax = 7
dec rax        ; rax = 6             (equivale a: sub rax, 1)

; Funciona também em memória:
inc byte [rbx]   ; incrementa o byte no endereço que rbx aponta

; Uso clássico: contador de loop
mov rcx, 10         ; contador começa em 10
inicio_loop:
    ; ... código do loop ...
    dec rcx          ; rcx = rcx - 1
    jnz inicio_loop  ; se rcx != 0, voltar ao início
; quando rcx chegar a 0, o loop termina
        `}),l.jsx("h2",{children:"NEG — Tornar negativo"}),l.jsxs("p",{children:[l.jsx("code",{children:"NEG"})," inverte o sinal de um número (transforma positivo em negativo e vice-versa):"]}),l.jsx(M,{title:"Negação",language:"asm",code:`
mov rax, 42    ; rax = 42
neg rax        ; rax = -42

mov rax, -10   ; rax = -10 (em complemento de dois)
neg rax        ; rax = 10

; Por baixo, NEG faz: rax = 0 - rax
; É equivalente a: sub destino usando 0 como base
        `}),l.jsx("h2",{children:"MUL e IMUL — Multiplicação"}),l.jsxs("p",{children:["A multiplicação em Assembly é diferente das outras operações — o resultado pode ser o ",l.jsx("em",{children:"dobro"})," do tamanho dos operandos. Por exemplo, 64 bits × 64 bits = 128 bits de resultado. Por isso, o resultado é dividido em dois registradores:"]}),l.jsxs(se,{type:"info",title:"Onde vai o resultado da multiplicação?",children:["Quando você multiplica dois números de 64 bits, o resultado vai para ",l.jsx("strong",{children:"RDX:RAX"}),"(128 bits no total): os 64 bits superiores ficam em RDX e os 64 bits inferiores em RAX. Na prática, se os números são pequenos, RDX fica zero e o resultado todo está em RAX."]}),l.jsx(M,{title:"MUL — multiplicação sem sinal",language:"asm",code:`
; MUL multiplica RAX pelo operando dado
; Resultado: RDX:RAX = RAX × operando

mov rax, 100      ; rax = 100
mov rbx, 200      ; rbx = 200
mul rbx           ; RDX:RAX = 100 × 200 = 20000
                  ; Como 20000 cabe em 64 bits: RAX = 20000, RDX = 0

; Para números maiores:
mov rax, 1000000000     ; 1 bilhão
mov rbx, 1000000000     ; 1 bilhão
mul rbx                 ; 1 bilhão × 1 bilhão = 1 quadrilhão
; RAX = parte baixa, RDX = parte alta (se o resultado não couber em 64 bits)

; MUL só aceita UM operando explícito — o outro é sempre RAX (ou EAX, AX, AL)
        `}),l.jsx(M,{title:"IMUL — multiplicação com sinal (mais flexível)",language:"asm",code:`
; IMUL tem 3 formas de uso:

; Forma 1 (igual ao MUL, mas com sinal): resultado em RDX:RAX
mov rax, -5
mov rbx, 10
imul rbx          ; RDX:RAX = -5 × 10 = -50  (com sinal)

; Forma 2 (mais comum): resultado apenas em 64 bits (dois operandos)
mov rax, 6
mov rbx, 7
imul rax, rbx     ; rax = rax × rbx = 42   (truncado em 64 bits)
; ↑ destino = destino × origem

; Forma 3 (três operandos): resultado em registrador separado
imul rax, rbx, 5  ; rax = rbx × 5
imul rax, rcx, 10 ; rax = rcx × 10
; ↑ destino = origem × constante

; Use IMUL (forma 2 ou 3) quando não precisa de 128 bits — é mais fácil!
        `}),l.jsx("h2",{children:"DIV e IDIV — Divisão"}),l.jsxs("p",{children:["A divisão tem uma quirk importante: ela divide ",l.jsx("strong",{children:"RDX:RAX"})," pelo operando. Isso significa que você PRECISA zerar RDX antes de dividir — se esquecer, RDX pode ter lixo e o resultado será errado (ou pior: o programa vai travar)."]}),l.jsx(M,{title:"DIV — divisão sem sinal",language:"asm",code:`
; DIV divide RDX:RAX pelo operando
; Após a divisão:
;   RAX = quociente (resultado da divisão inteira)
;   RDX = resto (sobra da divisão, o "módulo")

mov rdx, 0        ; ← OBRIGATÓRIO: zerar RDX antes de dividir!
mov rax, 100      ; rax = 100
mov rbx, 7        ; vamos dividir por 7
div rbx           ; RAX = 100 / 7 = 14 (quociente)
                  ; RDX = 100 % 7 = 2  (resto)

; Outro exemplo:
mov rdx, 0
mov rax, 50
mov rbx, 3
div rbx           ; RAX = 16 (quociente: 50 ÷ 3 = 16 inteiro)
                  ; RDX = 2  (resto: 50 - 16×3 = 2)
        `}),l.jsx(M,{title:"IDIV — divisão com sinal (para números negativos)",language:"asm",code:`
; Para divisão COM SINAL, use IDIV
; Antes do IDIV, use CQO para estender o sinal de RAX para RDX:RAX

mov rax, -100     ; queremos dividir -100 por 7
cqo               ; CQO "expande" o sinal de RAX para RDX
                  ; Se RAX for negativo, RDX fica 0xFFFFFFFFFFFFFFFF
                  ; Se RAX for positivo, RDX fica 0
                  ; Isso é necessário para que RDX:RAX represente corretamente o número negativo

mov rbx, 7
idiv rbx          ; RAX = -100 / 7 = -14 (quociente)
                  ; RDX = -100 % 7 = -2  (resto — pode ser negativo!)

; Sequência completa para divisão de inteiros com sinal:
; 1. mov rax, número   → colocar o dividendo em RAX
; 2. cqo               → estender sinal de RAX para RDX:RAX
; 3. mov rX, divisor   → divisor em qualquer outro registrador
; 4. idiv rX           → RAX = quociente, RDX = resto
        `}),l.jsxs(se,{type:"warning",title:"Divisão por zero — programa trava!",children:["Se o divisor (o número que você passa para DIV/IDIV) for zero, o processador gera uma exceção que encerra o programa imediatamente. Sempre verifique se o divisor é diferente de zero antes de dividir:",l.jsx("br",{}),l.jsx("code",{children:"test rbx, rbx"})," → ",l.jsx("code",{children:"jz divisão_por_zero"})]}),l.jsx("h2",{children:"Atalhos para multiplicar e dividir por potências de 2"}),l.jsxs("p",{children:["Multiplicar ou dividir por 2, 4, 8, 16... pode ser feito muito mais rápido usando",l.jsx("strong",{children:" deslocamento de bits"})," (shift). É um truque clássico de Assembly:"]}),l.jsx(M,{title:"SHL e SHR — multiplicar e dividir por potências de 2",language:"asm",code:`
; SHL = Shift Left = deslocar bits para a esquerda = multiplicar por 2^n
mov rax, 5
shl rax, 1    ; rax = 5 × 2 = 10      (deslocar 1 bit = ×2)
shl rax, 2    ; rax = 10 × 4 = 40     (deslocar 2 bits = ×4)
shl rax, 3    ; rax = 40 × 8 = 320    (deslocar 3 bits = ×8)
; shl rax, N  ≡  rax = rax × 2^N

; SHR = Shift Right = deslocar bits para a direita = dividir por 2^n (sem sinal)
mov rax, 100
shr rax, 1    ; rax = 100 / 2 = 50    (divisão inteira por 2)
shr rax, 2    ; rax = 50 / 4 = 12     (descarta o resto)
; shr rax, N  ≡  rax = rax / 2^N  (para números sem sinal)

; SAR = Shift Arithmetic Right = divisão por 2^n para números COM SINAL
; Preserva o bit de sinal (o bit mais alto)
mov rax, -8
sar rax, 1    ; rax = -8 / 2 = -4  ← correto para números negativos
; (SHR daria resultado errado para negativos!)

; AND para calcular resto (módulo) de potências de 2:
mov rax, 17
and rax, 3    ; rax = 17 % 4 = 1   (3 em binário = 0b11 → mantém os 2 bits inferiores)
and rax, 7    ; rax = N % 8
and rax, 15   ; rax = N % 16
        `})]})}function rM(){return l.jsxs(Se,{title:"Operações de Bit",subtitle:"AND, OR, XOR, NOT, shifts e rotações — manipulação direta de bits individuais.",difficulty:"intermediário",timeToRead:"10 min",children:[l.jsx("h2",{children:"AND — E bit a bit"}),l.jsx(M,{title:"AND — mascarar bits",language:"asm",code:`
; AND: resultado = 1 apenas se AMBOS os bits são 1
;  1 AND 1 = 1    1 AND 0 = 0    0 AND 0 = 0

; Máscara — isolar bits:
mov rax, 0xFF34
and rax, 0x00FF    ; rax = 0x0034 (mantém apenas byte baixo)

; Verificar bit específico:
test rax, 0x08     ; verifica bit 3 (ZF=1 se bit 3 = 0)
jnz bit3_ativo

; Limpar bit específico:
and rax, ~(1 << 3) ; limpa bit 3  (NASM: and rax, 0xFFFFFFFFFFFFFFF7)

; AND também atualiza ZF e SF, por isso funciona com TEST/JZ:
and eax, eax       ; ZF=1 se eax=0 (igual a test eax, eax, mas modifica eax)
      `}),l.jsx("h2",{children:"OR — OU bit a bit"}),l.jsx(M,{title:"OR — ligar bits",language:"asm",code:`
; OR: resultado = 1 se QUALQUER dos bits é 1
;  1 OR 1 = 1    1 OR 0 = 1    0 OR 0 = 0

; Ligar bit específico:
or rax, 0x08       ; liga bit 3 de rax
or rax, (1 << 7)   ; liga bit 7

; Combinar valores (flags, máscaras):
mov al, 0b00001010
or  al, 0b00110000  ; al = 0b00111010

; Definir múltiplas flags ao mesmo tempo:
; Exemplo: modo de arquivo Unix (rwxr-xr-x = 0755)
mov rax, 0
or  rax, 0400      ; proprietário: leitura
or  rax, 0200      ; proprietário: escrita
or  rax, 0100      ; proprietário: execução
or  rax, 0040      ; grupo: leitura
or  rax, 0010      ; grupo: execução
or  rax, 0004      ; outros: leitura
or  rax, 0001      ; outros: execução
; equivalente a: mov rax, 0755
      `}),l.jsx("h2",{children:"XOR — OU Exclusivo"}),l.jsx(M,{title:"XOR — inverter bits e criptografia simples",language:"asm",code:`
; XOR: resultado = 1 se bits SÃO DIFERENTES
;  1 XOR 1 = 0    1 XOR 0 = 1    0 XOR 0 = 0

; Zerar registrador (idioma mais eficiente):
xor rax, rax       ; rax = 0 (menor código que mov rax, 0)
xor eax, eax       ; eax = 0 (também zera os 32 bits superiores de RAX!)

; Inverter bits específicos (toggle):
xor rax, 0x0F      ; inverte os 4 bits menos significativos

; Swap sem registrador temporário:
xor rax, rbx       ; rax = rax ^ rbx
xor rbx, rax       ; rbx = rbx ^ (rax ^ rbx) = antigo rax
xor rax, rbx       ; rax = (rax ^ rbx) ^ antigo_rax = antigo rbx

; Criptografia XOR simples (cipher):
; Para encriptar: dado XOR chave = cifrado
; Para decriptar: cifrado XOR chave = dado
mov al, 'A'        ; dado = 0x41
xor al, 0x5A       ; cifrado = 0x1B
xor al, 0x5A       ; al = 0x41 = 'A' (restaurado)
      `}),l.jsx("h2",{children:"NOT — Inversão"}),l.jsx(M,{title:"NOT — complemento de 1",language:"asm",code:`
; NOT: inverte todos os bits (complemento de 1)
not rax    ; rax = ~rax  (todos os bits invertidos)
not al     ; al  = ~al

; Diferente de NEG (que é complemento de 2 = NOT + 1):
mov rax, 5
neg rax    ; rax = -5 = 0xFFFFFFFFFFFFFFFB (complemento de 2)
not rax    ; rax =     0xFFFFFFFFFFFFFFFA (complemento de 1)

; NOT é útil com AND para criar máscaras negativas:
; Limpar bit 4:
and rax, ~(1 << 4)   ; em código: and rax, 0xFFFFFFFFFFFFFFEF
      `}),l.jsx("h2",{children:"SHL / SHR — Deslocamento Lógico"}),l.jsx(M,{title:"Shift left e right",language:"asm",code:`
; SHL (Shift Left Logical) — desloca bits para esquerda, insere 0 à direita
; Equivale a multiplicar por 2^n
shl rax, 1    ; rax *= 2   (CF recebe o bit deslocado para fora)
shl rax, 3    ; rax *= 8
shl rax, cl   ; rax <<= cl (usando registrador como contador)

; SHR (Shift Right Logical) — desloca bits para direita, insere 0 à esquerda
; Equivale a dividir por 2^n (sem sinal)
shr rax, 1    ; rax /= 2
shr rax, 4    ; rax /= 16
shr rax, cl   ; rax >>= cl

; SAR (Shift Arithmetic Right) — preserva o bit de sinal
; Equivale a divisão inteira com sinal por 2^n
sar rax, 1    ; rax = rax / 2  (com sinal, bit de sinal copiado)
; -8 >> 1 = -4 (correto), mas SHR de -8 daria um número grande positivo!

; Exemplos:
mov rax, 0b10110100
shl rax, 2    ; rax = 0b1011010000  (CF = 0, bits saíram = 0b10)
shr rax, 3    ; rax = 0b0001011010  (CF = 1, bit saiu = 1)
      `}),l.jsx("h2",{children:"ROL / ROR — Rotação"}),l.jsx(M,{title:"Rotação de bits",language:"asm",code:`
; ROL (Rotate Left) — bits que saem pela esquerda entram pela direita
rol rax, 1    ; rotaciona 1 bit para a esquerda
rol al, 4     ; troca nibbles de AL

; ROR (Rotate Right) — bits que saem pela direita entram pela esquerda
ror rax, 1
ror al, 4     ; troca nibbles de AL

; RCL / RCR — Rotate through Carry (inclui CF na rotação)
rcl rax, 1    ; rota incluindo CF (útil para big-int)
rcr rax, 1

; Exemplo: BSWAP — inverter ordem dos bytes (big-endian ↔ little-endian)
mov rax, 0x0102030405060708
bswap rax     ; rax = 0x0807060504030201

; SHA — Shift com duplo registrador (x86-64)
; shld rdx, rax, cl  ; desloca RDX:RAX à esquerda juntos
; shrd rax, rdx, cl  ; desloca RDX:RAX à direita juntos
      `}),l.jsx("h2",{children:"BSF / BSR — Scan de Bits"}),l.jsx(M,{title:"Encontrar bits",language:"asm",code:`
; BSF (Bit Scan Forward) — índice do bit 1 menos significativo
mov rax, 0b00101000
bsf rcx, rax      ; rcx = 3 (bit 3 é o primeiro bit 1)
                  ; ZF=1 se rax=0 (nenhum bit 1 encontrado)

; BSR (Bit Scan Reverse) — índice do bit 1 mais significativo
bsr rcx, rax      ; rcx = 5 (bit 5 é o último bit 1)

; POPCNT — contar bits 1 (population count)
popcnt rcx, rax   ; rcx = número de bits 1 em rax
; rax = 0b00101000 → popcnt = 2

; LZCNT — Leading Zero Count (bits zeros antes do primeiro 1)
lzcnt rcx, rax    ; rcx = número de zeros antes do primeiro 1 (da esquerda)

; TZCNT — Trailing Zero Count (zeros após o último 1)
tzcnt rcx, rax    ; rcx = 3 (para 0b00101000)
      `}),l.jsxs(se,{type:"tip",title:"XOR para zerar é o idioma correto",children:["Compiladores otimizados sempre usam ",l.jsx("code",{children:"xor rax, rax"})," em vez de ",l.jsx("code",{children:"mov rax, 0"}),"para zerar registradores. Além de gerar código menor (2 bytes vs 7), em CPUs modernas o hardware reconhece o padrão XOR-self e executa sem dependência do valor anterior de RAX, quebrando a cadeia de dependências."]})]})}function oM(){return l.jsxs(Se,{title:"NOP, XCHG e Utilidades",subtitle:"Instruções especiais: NOP, CPUID, HLT, INT, RDTSC e outras usadas em contextos específicos.",difficulty:"intermediário",timeToRead:"8 min",children:[l.jsx("h2",{children:"NOP — No Operation"}),l.jsx(M,{title:"NOP e variantes",language:"asm",code:`
; NOP padrão — 1 byte, não faz absolutamente nada
nop                  ; 0x90 — usado para alinhamento e patching

; Multi-byte NOPs — NASM gera automaticamente
nop 2                ; 2 bytes de NOP
nop 4                ; 4 bytes (0F 1F 40 00)
nop 8                ; 8 bytes

; Usos do NOP:
; 1. Alinhamento de código (loops devem estar alinhados a 16 bytes)
align 16
loop_start:
    ; loop body...

; 2. Patching binário — anular instruções sem alterar tamanho
; Original: jmp exit (5 bytes = E9 XX XX XX XX)
; Patched:  nop nop nop nop nop (5 bytes de 0x90)

; 3. Timing — criar delay em loops de hardware (geralmente obsoleto)
      `}),l.jsx("h2",{children:"HLT — Halt"}),l.jsx(M,{title:"HLT — parar a CPU",language:"asm",code:`
; HLT — para a execução até a próxima interrupção
; Disponível apenas em Ring 0 (kernel)
hlt    ; CPU entra em estado de espera de baixo consumo

; Uso típico em kernel:
idle_loop:
    hlt        ; economiza energia esperando interrupção
    jmp idle_loop
      `}),l.jsx("h2",{children:"INT — Interrupção de Software"}),l.jsx(M,{title:"INT e seus usos",language:"asm",code:`
; INT n — gera interrupção de software número n
int 0x80        ; syscall Linux x86 (modo 32-bit legado)
int 0x03        ; breakpoint (trap para debugger — equivale a INT3)
int 0x21        ; DOS API (sistema antigo)

; INT3 — breakpoint especial (1 byte: 0xCC)
int3            ; gera SIGTRAP no Linux, breakpoint exception no Windows
; Debuggers colocam 0xCC no código para criar breakpoints de software

; SYSCALL — forma moderna de syscall em x64 (mais rápida que INT 0x80)
syscall         ; chama o kernel (Ring 0) usando o número em RAX

; SYSENTER / SYSEXIT — alternativa rápida a INT 0x80 em x86
      `}),l.jsx("h2",{children:"CPUID — Identificação da CPU"}),l.jsx(M,{title:"CPUID — informações do processador",language:"asm",code:`
; CPUID preenche EAX, EBX, ECX, EDX com informações da CPU
; EAX antes da instrução = leaf (qual informação pedir)

; Leaf 0: vendor string e max leaf
mov eax, 0
cpuid
; EBX:EDX:ECX = vendor string (ex: "GenuineIntel" ou "AuthenticAMD")
; Decodificando vendor string:
; Intel: EBX=0x756E6547, EDX=0x49656E69, ECX=0x6C65746E → "GenuineIntel"

; Leaf 1: feature flags
mov eax, 1
cpuid
; EDX bit 25 = SSE suportado
; EDX bit 26 = SSE2 suportado
; ECX bit 28 = AVX suportado
; ECX bit 19 = SSE4.1 suportado

; Verificar se SSE2 está disponível:
mov eax, 1
cpuid
test edx, (1 << 26)   ; bit 26 = SSE2
jz  sem_sse2
; ... código SSE2 ...
sem_sse2:
      `}),l.jsx("h2",{children:"RDTSC — Contador de Ciclos"}),l.jsx(M,{title:"RDTSC — medir tempo em ciclos",language:"asm",code:`
; RDTSC — Read Time Stamp Counter
; Lê o contador de ciclos da CPU em EDX:EAX
rdtsc               ; EDX:EAX = número de ciclos desde o reset
; Em x64: usar RDTSC como benchmark de 64 bits:
rdtsc
shl rdx, 32
or  rax, rdx        ; RAX = contador de 64 bits

; Medir tempo de execução:
rdtsc
mov [inicio], rax

; ... código a medir ...

rdtsc
sub rax, [inicio]   ; rax = ciclos gastos

; RDTSCP — versão serializada (mais precisa para benchmarking)
rdtscp              ; EAX = ciclos, EDX = parte alta, ECX = CPU ID
      `}),l.jsx("h2",{children:"PAUSE e MFENCE — Sincronização"}),l.jsx(M,{title:"Instruções de sincronização",language:"asm",code:`
; PAUSE — hint para CPU em spinlocks (economiza energia, melhora performance)
spin_loop:
    mov rax, [lock_var]
    test rax, rax
    jnz spin_ok
    pause             ; hint: esta é uma espera ativa (spinlock)
    jmp spin_loop
spin_ok:

; Memory fences — garantem ordem de acesso à memória
lfence    ; Load Fence — todas as leituras anteriores completam antes de continuar
sfence    ; Store Fence — todas as escritas anteriores ficam visíveis
mfence    ; Memory Fence — combinação de LFENCE + SFENCE

; Uso típico: código multi-threaded, drivers, lock-free programming
      `}),l.jsx("h2",{children:"CLFLUSH — Cache"}),l.jsx(M,{title:"Manipulação de cache",language:"asm",code:`
; CLFLUSH — invalida uma linha de cache (64 bytes)
clflush [mem]         ; força flush da linha de cache contendo mem

; PREFETCH — dar hint à CPU para carregar dados antecipadamente
prefetcht0  [rsi + 256]   ; prefetch para L1 cache
prefetcht1  [rsi + 512]   ; prefetch para L2 cache
prefetcht2  [rsi + 1024]  ; prefetch para L3 cache
prefetchnta [rsi + 2048]  ; non-temporal (não polui cache — bom para streaming)
      `}),l.jsx(se,{type:"tip",title:"RDTSC para micro-benchmarks",children:"Use RDTSC para medir a performance de loops internos em ciclos de CPU. Para benchmarks mais precisos, use RDTSCP (serializado) e faça múltiplas execuções para eliminar variação de cache e branch prediction."})]})}function sM(){return l.jsxs(Se,{title:"Modos de Endereçamento",subtitle:"Como a CPU calcula o endereço de memória a acessar — dos modos mais simples ao mais complexo.",difficulty:"intermediário",timeToRead:"12 min",children:[l.jsxs(se,{type:"info",title:"O que é um modo de endereçamento?",children:["Um modo de endereçamento define como o processador calcula o endereço de memória alvo de uma instrução. A sintaxe geral em NASM é:",l.jsx("br",{}),l.jsx("code",{children:"[base + índice * escala + deslocamento]"})]}),l.jsx("h2",{children:"1. Endereçamento Imediato"}),l.jsx(M,{title:"Valor direto na instrução",language:"asm",code:`
; O operando é um valor constante embutido na instrução
mov rax, 42           ; imediato de 8 bits
mov rax, 1000         ; imediato de 32 bits
mov rax, 0xDEADBEEF   ; imediato hexadecimal
      `}),l.jsx("h2",{children:"2. Endereçamento por Registrador"}),l.jsx(M,{title:"Acesso direto a registradores",language:"asm",code:`
; O operando é um registrador
mov rax, rbx    ; rax = rbx
add rcx, rdx    ; rcx += rdx
push rsi        ; coloca RSI na pilha
      `}),l.jsx("h2",{children:"3. Endereçamento Direto (Absoluto)"}),l.jsx(M,{title:"Endereço fixo de memória",language:"asm",code:`
; Acessa um endereço de memória fixo (label)
section .data
    valor dq 42

section .text
    mov rax, [valor]        ; rax = conteúdo do endereço de 'valor'
    mov [valor], rbx        ; escreve RBX no endereço de 'valor'

; Em x64 com posição independente (use 'default rel' ou 'rel'):
    mov rax, [rel valor]    ; acesso relativo ao RIP
      `}),l.jsx("h2",{children:"4. Endereçamento Indireto por Registrador"}),l.jsx(M,{title:"Ponteiro — registrador contém o endereço",language:"asm",code:`
; O registrador contém o endereço de memória a acessar
mov rax, [rbx]       ; rax = *(long*)rbx  (lê da memória apontada por RBX)
mov [rbx], rcx       ; *(long*)rbx = rcx

; Incrementar o ponteiro para avançar:
mov rax, [rbx]       ; lê elemento
add rbx, 8           ; avança ponteiro 8 bytes (próximo qword)
mov rdx, [rbx]       ; lê próximo elemento
      `}),l.jsx("h2",{children:"5. Endereçamento Base + Deslocamento"}),l.jsx(M,{title:"Base register + offset constante",language:"asm",code:`
; Muito usado para acessar campos de structs e variáveis locais
; [base + deslocamento]

; Acessar campos de uma struct:
; struct Pessoa { int idade; int altura; char nome[32]; }
; RBX aponta para uma Pessoa
mov eax, [rbx]        ; idade   (offset 0)
mov ecx, [rbx + 4]    ; altura  (offset 4)
lea rsi, [rbx + 8]    ; &nome   (offset 8)

; Acessar variáveis locais via RBP:
mov rax, [rbp - 8]    ; variável local -8 do frame
mov rax, [rbp + 16]   ; parâmetro +16 acima do frame (x86 32-bit)

; Acessar elementos de array com offset fixo:
; int arr[5] = {10, 20, 30, 40, 50}
; RSI = &arr[0]
mov eax, [rsi]         ; arr[0] = 10
mov eax, [rsi + 4]     ; arr[1] = 20
mov eax, [rsi + 8]     ; arr[2] = 30
      `}),l.jsx("h2",{children:"6. Endereçamento Base + Índice × Escala + Deslocamento"}),l.jsx(M,{title:"Modo mais completo — arrays dinâmicos e structs",language:"asm",code:`
; [base + índice * escala + deslocamento]
; base    = registrador de base
; índice  = registrador de índice (qualquer reg exceto RSP)
; escala  = fator multiplicador: 1, 2, 4, 8 (tamanho do elemento)
; deslocamento = valor constante (offset)

; Acesso a int arr[i]:
; RSI = &arr[0], RCX = i (índice)
mov eax, [rsi + rcx*4]      ; arr[i]  (int = 4 bytes)
mov rax, [rsi + rcx*8]      ; arr[i]  (long = 8 bytes)

; Acesso a char str[i]:
mov al,  [rsi + rcx*1]      ; str[i]  (char = 1 byte)

; Struct dentro de array + campo:
; struct Item { int id; int valor; }  (8 bytes cada)
; RSI = &items[0], RCX = índice
mov eax, [rsi + rcx*8]      ; items[i].id
mov edx, [rsi + rcx*8 + 4]  ; items[i].valor

; Sem multiplicar (escala implícita de 1):
mov rax, [rsi + rcx]        ; *(rsi + rcx)  byte por byte

; RIP-relative para dados globais (x64):
mov rax, [rip + var]        ; acesso relativo ao RIP
      `}),l.jsx("h2",{children:"Regras de Endereçamento x64"}),l.jsx("div",{className:"not-prose my-4 overflow-x-auto",children:l.jsxs("table",{className:"w-full text-sm border-collapse border border-border",children:[l.jsx("thead",{children:l.jsxs("tr",{className:"bg-muted text-xs uppercase tracking-wide text-muted-foreground",children:[l.jsx("th",{className:"border border-border px-3 py-2 text-left",children:"Componente"}),l.jsx("th",{className:"border border-border px-3 py-2 text-left",children:"Opções"})]})}),l.jsx("tbody",{children:[["Base","Qualquer registrador de 64 bits (RAX, RBX, ..., R15, RIP)"],["Índice","Qualquer reg de 64 bits EXCETO RSP"],["Escala","Apenas 1, 2, 4 ou 8 (não outros valores!)"],["Deslocamento","Constante de 8 ou 32 bits (sign-extended para 64 bits)"]].map(([a,o])=>l.jsxs("tr",{className:"hover:bg-accent/30",children:[l.jsx("td",{className:"border border-border px-3 py-2 font-semibold text-primary",children:a}),l.jsx("td",{className:"border border-border px-3 py-2 text-xs text-muted-foreground",children:o})]},a))})]})}),l.jsx(se,{type:"warning",title:"RSP não pode ser índice",children:"O registrador RSP nunca pode ser usado como índice (o campo de índice codificado como RSP tem significado especial no encoding SIB). Use outros registradores como índice de array."})]})}function nM(){return l.jsxs(Se,{title:"Segmentos de Memória",subtitle:"Como a memória de um processo é organizada em segmentos: código, dados, pilha e heap.",difficulty:"iniciante",timeToRead:"10 min",children:[l.jsx("h2",{children:"Layout de Memória de um Processo"}),l.jsx("p",{children:"Quando um programa é carregado na memória, o sistema operacional organiza sua memória em regiões distintas chamadas de segmentos. Em Linux x64, o layout típico é:"}),l.jsxs("div",{className:"not-prose my-4 border border-border rounded-lg overflow-hidden",children:[l.jsx("div",{className:"bg-muted px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide",children:"Layout de Memória Virtual (Linux x64)"}),l.jsx("div",{className:"divide-y divide-border text-xs font-mono",children:[{end:"0xFFFFFFFFFFFFFFFF",label:"Kernel Space",color:"bg-red-500/10 text-red-400"},{end:"0x7FFFFFFFFFFF",label:"Stack ↓ (cresce para baixo)",color:"bg-amber-500/10 text-amber-400"},{end:"...",label:"Mmap region (bibliotecas dinâmicas)",color:"bg-purple-500/10 text-purple-400"},{end:"...",label:"Heap ↑ (cresce para cima, malloc)",color:"bg-emerald-500/10 text-emerald-400"},{end:"...",label:".bss (dados não inicializados)",color:"bg-blue-500/10 text-blue-400"},{end:"...",label:".data (dados inicializados)",color:"bg-blue-500/10 text-blue-400"},{end:"0x400000",label:".text (código executável)",color:"bg-primary/10 text-primary"}].map(({end:a,label:o,color:n})=>l.jsxs("div",{className:`flex items-center gap-3 px-3 py-2 ${n}`,children:[l.jsx("span",{className:"w-32 shrink-0 opacity-70",children:a}),l.jsx("span",{children:o})]},o))})]}),l.jsx("h2",{children:"Seções do Arquivo Assembly"}),l.jsx(M,{title:"Seções NASM e sua correspondência",language:"asm",code:`
section .text
    ; Código executável (instruções)
    ; Permissões: Read + Execute (RX) — não pode escrever!
    global _start
_start:
    nop

section .data
    ; Dados inicializados (valores conhecidos em tempo de compilação)
    ; Permissões: Read + Write (RW)
    numero  dq 42
    msg     db "Olá!", 10
    pi      dq 3.14           ; armazenado como IEEE 754

section .rodata
    ; Dados somente-leitura (constantes)
    ; Permissões: Read only (R)
    ; Strings literais vão aqui em código C
    const_msg db "Constante", 0

section .bss
    ; Dados não inicializados (reserva espaço, inicializado com 0 pelo SO)
    ; Permissões: Read + Write (RW)
    ; Não ocupa espaço no arquivo — apenas no mapa de memória
    buffer    resb 1024       ; reservar 1024 bytes
    contagem  resq 1          ; reservar 1 qword (8 bytes)
      `}),l.jsx("h2",{children:"Por que .bss não ocupa espaço no executável?"}),l.jsxs("p",{children:["O segmento ",l.jsx("code",{children:".bss"})," apenas registra ",l.jsx("em",{children:"quanta memória"})," reservar, não os valores. O sistema operacional garante que essa memória começa zerada. Isso significa que um executável com 100 KB de variáveis em ",l.jsx("code",{children:".bss"})," não tem esses 100 KB no arquivo em disco."]}),l.jsx("h2",{children:"Seções Customizadas"}),l.jsx(M,{title:"Criar seções personalizadas",language:"asm",code:`
; Seções personalizadas (úteis para kernels e embedded)
section .init
    ; Código de inicialização (executado antes de main em C)

section .fini
    ; Código de finalização (executado após main em C)

section .interp
    ; Caminho do dynamic linker (em executáveis ELF)

; No NASM, você também pode especificar permissões:
section .mydata write alloc
    dados db 0

section .mycode exec alloc
    my_func:
        ret
      `}),l.jsx("h2",{children:"Acessando Seções na Prática"}),l.jsx(M,{title:"Diferença entre .data e .bss",language:"asm",code:`
section .data
    ; variáveis com valor inicial CONHECIDO em tempo de compilação:
    contador  dd 0            ; inteiro de 32 bits = 0 (ocupa 4 bytes no arquivo)
    flag      db 1            ; byte = 1
    nome      db "Joao", 0   ; string com terminador nulo

section .bss
    ; variáveis cujo valor é CALCULADO em tempo de execução:
    input_buf resb 256        ; 256 bytes de buffer de entrada (não ocupa no arquivo)
    resultado resq 1          ; espaço para 1 número de 64 bits

section .text
    global _start
_start:
    ; Ler counter de .data:
    mov eax, [contador]       ; eax = 0
    add eax, 1
    mov [contador], eax       ; contador = 1

    ; Usar buffer de .bss:
    lea rdi, [input_buf]      ; rdi = endereço do buffer
    ; (chamar read syscall para preencher o buffer...)
      `}),l.jsxs(se,{type:"tip",title:".rodata economiza memória",children:["Strings literais que nunca mudam (mensagens de erro, formatos printf, etc.) devem ir em",l.jsx("code",{children:".rodata"}),". Como essa seção é somente-leitura, o SO pode compartilhá-la entre múltiplos processos do mesmo executável (copy-on-write), economizando RAM."]})]})}function iM(){return l.jsxs(Se,{title:"A Pilha (Stack)",subtitle:"A pilha é onde o programa guarda dados temporários, variáveis locais e endereços de retorno de funções. Entenda como ela funciona de verdade.",difficulty:"intermediário",timeToRead:"12 min",children:[l.jsx("h2",{children:"O que é a pilha?"}),l.jsx("p",{children:"A pilha é uma área de memória que funciona como uma pilha de pratos: você sempre coloca no topo e sempre pega do topo. O último que entrou é o primeiro que sai — LIFO (Last In, First Out)."}),l.jsxs("p",{children:["Uma particularidade do x86/x64: a pilha ",l.jsx("strong",{children:"cresce para baixo"}),". Isso significa que quando você empurra algo na pilha, o endereço diminui. O registrador ",l.jsx("code",{children:"RSP"})," (Stack Pointer) sempre aponta para o endereço do elemento no topo da pilha."]}),l.jsx(se,{type:"info",title:"Visualizando a pilha",children:"Imagine que a memória tem endereços de 0 a infinito (de baixo para cima). A pilha começa em um endereço alto (ex: 0x7FFFFFFF) e cresce para baixo (em direção a 0). RSP sempre aponta para o item mais recentemente colocado na pilha."}),l.jsx("h2",{children:"PUSH — colocar algo na pilha"}),l.jsxs("p",{children:[l.jsx("code",{children:"PUSH rax"})," faz duas coisas automaticamente:"]}),l.jsxs("ol",{children:[l.jsx("li",{children:"Diminui RSP em 8 (em x64, tudo na pilha tem 8 bytes)"}),l.jsx("li",{children:"Copia o valor de RAX para o endereço que RSP agora aponta"})]}),l.jsx(M,{title:"PUSH — exemplo passo a passo",language:"asm",code:`
; Suponha que RSP começa em 0x1000

mov rax, 100     ; rax = 100

push rax         ; RSP = RSP - 8 = 0x0FF8
                 ; memória[0x0FF8] = 100
                 ; agora a pilha tem: [100] no topo

push 200         ; RSP = 0x0FF0
                 ; memória[0x0FF0] = 200
                 ; pilha agora: [200, 100]  ← 200 está no topo

push 300         ; RSP = 0x0FE8
                 ; memória[0x0FE8] = 300
                 ; pilha agora: [300, 200, 100]  ← 300 está no topo
        `}),l.jsx("h2",{children:"POP — tirar algo da pilha"}),l.jsxs("p",{children:[l.jsx("code",{children:"POP rbx"})," também faz duas coisas:"]}),l.jsxs("ol",{children:[l.jsx("li",{children:"Copia o valor no endereço que RSP aponta para RBX"}),l.jsx("li",{children:'Aumenta RSP em 8 (o item "sumiu" do topo)'})]}),l.jsx(M,{title:"POP — continuando o exemplo",language:"asm",code:`
; Continuando de onde paramos: pilha = [300, 200, 100], RSP = 0x0FE8

pop rcx          ; rcx = memória[0x0FE8] = 300
                 ; RSP = 0x0FF0
                 ; pilha agora: [200, 100]  ← 200 está no topo

pop rdx          ; rdx = 200, RSP = 0x0FF8
                 ; pilha agora: [100]

pop r8           ; r8 = 100, RSP = 0x1000  ← voltou ao valor original
                 ; pilha agora: vazia (voltou ao estado inicial)

; IMPORTANTE: O último elemento que entrou (300) foi o primeiro a sair.
; LIFO: Last In, First Out.
        `}),l.jsx("h2",{children:"Para que serve a pilha?"}),l.jsx("p",{children:"Três usos principais:"}),l.jsx("div",{className:"not-prose my-4 space-y-3",children:[{titulo:"1. Salvar registradores temporariamente",desc:"Antes de chamar uma função que pode modificar registradores, você salva os valores importantes na pilha e restaura depois."},{titulo:"2. Variáveis locais da função",desc:"Cada função aloca espaço na pilha para suas variáveis locais (como int x, char buffer[100]). Quando a função termina, esse espaço é liberado."},{titulo:"3. Endereços de retorno de função",desc:"Quando você chama uma função com CALL, o processador automaticamente guarda o endereço de 'onde voltar' na pilha. RET lê esse endereço e volta para lá."}].map(({titulo:a,desc:o})=>l.jsxs("div",{className:"border border-border rounded-lg p-3",children:[l.jsx("p",{className:"font-semibold text-sm mb-1",children:a}),l.jsx("p",{className:"text-xs text-muted-foreground",children:o})]},a))}),l.jsx("h2",{children:"CALL e RET — como funções usam a pilha"}),l.jsxs("p",{children:["Quando você escreve ",l.jsx("code",{children:"call minha_funcao"}),', o processador automaticamente empurra o endereço da instrução seguinte (o "endereço de retorno") na pilha, e então salta para ',l.jsx("code",{children:"minha_funcao"}),". Quando a função termina com ",l.jsx("code",{children:"ret"}),", o processador pop esse endereço da pilha e volta para lá."]}),l.jsx(M,{title:"CALL e RET — o mecanismo de chamada de função",language:"asm",code:`
main:
    call soma           ; equivale a:
                        ;   push (endereço da próxima instrução — o "de onde voltar")
                        ;   jmp soma

    ; quando soma executar 'ret', o programa volta AQUI:
    mov rbx, rax        ; rbx = resultado de soma

soma:
    ; recebe: rdi = primeiro número, rsi = segundo número
    ; retorna: rax = soma dos dois

    mov rax, rdi        ; rax = primeiro número
    add rax, rsi        ; rax = rax + segundo número

    ret                 ; equivale a:
                        ;   pop rip  (pega o endereço de retorno da pilha)
                        ;   jmp rip  (volta para onde foi chamado)
        `}),l.jsx("h2",{children:'Stack Frame — o "espaço de trabalho" de cada função'}),l.jsxs("p",{children:['Cada função tem seu próprio "espaço de trabalho" na pilha chamado ',l.jsx("strong",{children:"stack frame"}),". Esse espaço contém as variáveis locais da função e o endereço de retorno. O registrador ",l.jsx("code",{children:"RBP"})," é usado para marcar o início desse espaço."]}),l.jsx(M,{title:"Estrutura de um stack frame — prólogo e epílogo",language:"asm",code:`
minha_funcao:
    ; === PRÓLOGO (obrigatório no início de funções que usam variáveis locais) ===

    push rbp             ; salvar o RBP da função anterior (quem nos chamou)
    mov  rbp, rsp        ; RBP agora aponta para o início do nosso frame
    ;                    ; (RBP fica fixo durante toda a função)

    sub  rsp, 32         ; reservar 32 bytes para variáveis locais
    ;                    ; (4 variáveis de 8 bytes cada)
    ;                    ; SEMPRE use múltiplos de 16 para manter alinhamento!

    ; Agora a pilha está assim:
    ; [RBP + 0]   = antigo RBP (que salvamos com push rbp)
    ; [RBP + 8]   = endereço de retorno (colocado pelo CALL)
    ; [RBP - 8]   = variável local 1
    ; [RBP - 16]  = variável local 2
    ; [RBP - 24]  = variável local 3
    ; [RBP - 32]  = variável local 4

    ; === CORPO DA FUNÇÃO ===
    mov qword [rbp - 8],  10    ; variável local 1 = 10
    mov qword [rbp - 16], 20    ; variável local 2 = 20

    mov rax, [rbp - 8]
    add rax, [rbp - 16]         ; rax = 10 + 20 = 30

    ; === EPÍLOGO (obrigatório no fim) ===
    leave                ; equivale a: mov rsp, rbp; pop rbp
    ;                    ; restaura RSP e RBP para os valores anteriores
    ret                  ; volta para quem nos chamou
        `}),l.jsx(se,{type:"warning",title:"RSP deve estar alinhado a 16 bytes ao chamar funções",children:"A convenção de chamada System V (usada no Linux) exige que RSP seja múltiplo de 16 no momento de qualquer CALL. Como o CALL empurra 8 bytes na pilha, dentro da função RSP é múltiplo de 8 mas não de 16. Por isso o sub rsp, N deve ser múltiplo de 16 (ex: 16, 32, 48...) para reequilibrar. Se RSP não estiver alinhado, funções da biblioteca C (como printf) podem travar."}),l.jsx("h2",{children:"Visualizando a pilha de chamadas completa"}),l.jsx(M,{title:"Como fica a pilha quando main chama funcao_a que chama funcao_b",language:"asm",code:`
; Quando a funcao_b está executando, a pilha tem (do topo ao fundo):
;
; RSP → [variáveis locais de funcao_b]
;        [antigo RBP de funcao_b]        ← RBP aponta aqui
;        [endereço de retorno para funcao_a]
;        [variáveis locais de funcao_a]
;        [antigo RBP de funcao_a]
;        [endereço de retorno para main]
;        [variáveis locais de main]
;        [antigo RBP de main]
;        [endereço de retorno do programa]
;
; Isso é o que o GDB chama de "backtrace" — a pilha de chamadas.
; Cada "frame" é o espaço de trabalho de uma função.

; Para ver a pilha no GDB:
; (gdb) backtrace   ← mostra todas as funções na pilha
; (gdb) info frame  ← detalhes do frame atual
; (gdb) x/10xg $rsp ← mostra 10 valores de 8 bytes a partir do RSP
        `})]})}function lM(){return l.jsxs(Se,{title:"Comparações e Flags",subtitle:"Como o processador compara valores e como você usa esse resultado para tomar decisões no código.",difficulty:"iniciante",timeToRead:"8 min",children:[l.jsx("h2",{children:"O que são as Flags?"}),l.jsxs("p",{children:["O processador tem um registrador especial chamado ",l.jsx("strong",{children:"RFLAGS"}),' que contém um monte de bits — cada bit é uma "flag" (bandeira). Cada flag responde a uma pergunta sobre a última operação realizada:']}),l.jsx("div",{className:"not-prose my-4 space-y-2",children:[{flag:"ZF (Zero Flag)",pergunta:"O resultado foi zero?",detalhe:"ZF=1 significa SIM, o resultado foi zero."},{flag:"SF (Sign Flag)",pergunta:"O resultado foi negativo?",detalhe:"SF=1 significa que o bit mais alto do resultado é 1 (negativo em complemento de dois)."},{flag:"CF (Carry Flag)",pergunta:"Houve 'vai um' ou 'pede emprestado'?",detalhe:"CF=1 em adição significa que o resultado não coube no registrador. Em subtração, significa que precisou 'pedir emprestado' (número ficou negativo se tratado sem sinal)."},{flag:"OF (Overflow Flag)",pergunta:"Houve overflow de sinal?",detalhe:"OF=1 significa que o resultado com sinal está errado — ultrapassou o limite de positivo ou negativo."}].map(({flag:a,pergunta:o,detalhe:n})=>l.jsxs("div",{className:"border border-border rounded-lg p-3",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsx("span",{className:"font-mono font-bold text-primary text-xs",children:a}),l.jsxs("span",{className:"text-xs font-medium text-foreground",children:["— ",o]})]}),l.jsx("p",{className:"text-xs text-muted-foreground",children:n})]},a))}),l.jsx("p",{children:"A maioria das instruções aritméticas (ADD, SUB, INC, DEC, AND, OR...) atualiza as flags automaticamente. Você não precisa fazer nada especial — após cada instrução, as flags refletem o resultado."}),l.jsx("h2",{children:"CMP — Comparar dois valores"}),l.jsxs("p",{children:[l.jsx("code",{children:"CMP a, b"})," é como fazer ",l.jsx("code",{children:"SUB a, b"}),", mas ",l.jsx("strong",{children:"sem guardar o resultado"}),". O único propósito do CMP é atualizar as flags — que você então usa com um salto condicional (JE, JL, JG...)."]}),l.jsx(M,{title:"CMP — o jeito de fazer 'if' em Assembly",language:"asm",code:`
; CMP a, b  →  calcula (a - b) e atualiza as flags, mas não salva o resultado

cmp rax, rbx       ; compara rax com rbx (subtrai rbx de rax nas flags)
; Depois do CMP, você usa um JMP condicional:
; se rax == rbx → ZF=1
; se rax > rbx  → ZF=0, SF=0, CF=0
; se rax < rbx  → SF=1 (ou CF=1 para sem sinal)

; Exemplo: traduzindo "if (rax == rbx)" para Assembly
cmp rax, rbx     ; comparar
jne depois       ; se NÃO igual, pular o bloco
; ---- bloco executado quando rax == rbx ----
    mov rcx, 1   ; fazer alguma coisa
; -----------
depois:          ; continua aqui sempre

; Você também pode comparar com números fixos:
cmp rax, 0       ; é rax igual a zero?
cmp rax, 100     ; é rax menor, igual ou maior que 100?
cmp byte [rbx], 0  ; o byte na memória apontada por rbx é zero?
        `}),l.jsx("h2",{children:"TEST — Verificar bits específicos"}),l.jsxs("p",{children:[l.jsx("code",{children:"TEST a, b"})," é como fazer ",l.jsx("code",{children:"AND a, b"}),", mas ",l.jsx("strong",{children:"sem guardar o resultado"}),". É muito usado para verificar se um registrador é zero, ou se um bit específico está ligado."]}),l.jsx(M,{title:"TEST — verificações rápidas",language:"asm",code:`
; TEST a, b  →  calcula (a AND b) e atualiza as flags, sem salvar o resultado

; Verificar se um registrador é zero (jeito mais eficiente que "cmp rax, 0"):
test rax, rax    ; AND de rax com ele mesmo → resultado é zero SE rax for zero
jz é_zero        ; pular se ZF=1 (rax é zero)
jnz não_é_zero   ; pular se ZF=0 (rax não é zero)

; Verificar se um número é par ou ímpar (checar bit 0):
test rax, 1      ; AND rax com 0b000...001 → verifica apenas o bit 0
jz  é_par        ; ZF=1 significa bit 0 = 0 → número é par
jnz é_ímpar      ; ZF=0 significa bit 0 = 1 → número é ímpar

; Verificar se um bit específico está ligado:
test rax, 0x04   ; checar o bit 2 (0b100 = 0x04)
jnz bit2_ligado  ; ZF=0 → bit 2 está ligado

; Verificar se a função printf retornou -1 (erro):
; printf retorna o número de caracteres escritos, ou -1 em erro
test eax, eax    ; se eax for zero, houve problema
js   erro_escrita ; JS = Jump if Sign = pular se o resultado for negativo (SF=1)
        `}),l.jsx("h2",{children:'Saltos Condicionais — o "if" do Assembly'}),l.jsxs("p",{children:["Depois de um CMP ou TEST, você usa um ",l.jsx("strong",{children:"salto condicional"}),' para decidir qual parte do código executar. Pense neles como o "if" do Assembly:']}),l.jsx(se,{type:"info",title:"Com sinal vs Sem sinal",children:"Para números COM sinal (int, char), use: JL, JLE, JG, JGE. Para números SEM sinal (unsigned, ponteiros), use: JB, JBE, JA, JAE. JE e JNE funcionam para ambos."}),l.jsx("div",{className:"not-prose my-4 overflow-x-auto",children:l.jsxs("table",{className:"w-full text-sm border-collapse border border-border",children:[l.jsx("thead",{children:l.jsxs("tr",{className:"bg-muted text-xs uppercase tracking-wide text-muted-foreground",children:[l.jsx("th",{className:"border border-border px-3 py-2 text-left",children:"Instrução"}),l.jsx("th",{className:"border border-border px-3 py-2 text-left",children:"Pula quando..."}),l.jsx("th",{className:"border border-border px-3 py-2 text-left",children:"Tipo"})]})}),l.jsx("tbody",{children:[["JE  (JZ)","rax == rbx  (igual, zero)","Ambos"],["JNE (JNZ)","rax != rbx  (diferente, não-zero)","Ambos"],["JL  (JNGE)","rax < rbx   (menor, com sinal)","Com sinal"],["JLE (JNG)","rax <= rbx  (menor ou igual, com sinal)","Com sinal"],["JG  (JNLE)","rax > rbx   (maior, com sinal)","Com sinal"],["JGE (JNL)","rax >= rbx  (maior ou igual, com sinal)","Com sinal"],["JB  (JC)","rax < rbx   (abaixo, sem sinal)","Sem sinal"],["JBE","rax <= rbx  (abaixo ou igual, sem sinal)","Sem sinal"],["JA","rax > rbx   (acima, sem sinal)","Sem sinal"],["JAE (JNC)","rax >= rbx  (acima ou igual, sem sinal)","Sem sinal"],["JS","resultado negativo (SF=1)","Especial"],["JO","overflow de sinal ocorreu (OF=1)","Especial"]].map(([a,o,n])=>l.jsxs("tr",{className:"hover:bg-accent/30",children:[l.jsx("td",{className:"border border-border px-3 py-2 font-mono text-primary text-xs font-bold",children:a}),l.jsx("td",{className:"border border-border px-3 py-2 text-xs",children:o}),l.jsx("td",{className:"border border-border px-3 py-2 text-xs",children:l.jsx("span",{className:`px-1.5 py-0.5 rounded text-xs ${n==="Com sinal"?"bg-blue-500/10 text-blue-400":n==="Sem sinal"?"bg-emerald-500/10 text-emerald-400":"bg-amber-500/10 text-amber-400"}`,children:n})})]},a))})]})}),l.jsx("h2",{children:"Exemplos práticos — traduzindo C para Assembly"}),l.jsx(M,{title:"if/else em Assembly",language:"asm",code:`
; ---- if (a == b) ----
cmp rax, rbx       ; comparar a e b
jne bloco_else     ; se NÃO igual, pular para else
; bloco if:
    mov rcx, 1     ; a == b: fazer algo
    jmp fim        ; pular o else
bloco_else:
    mov rcx, 0     ; a != b: fazer outra coisa
fim:

; ---- if (a > b) com números com sinal (int) ----
cmp rax, rbx       ; comparar
jle depois         ; JLE pula quando rax <= rbx (a NÃO é maior)
; só chega aqui quando rax > rbx:
    mov rcx, rax
depois:

; ---- if (a > b) com números sem sinal (ponteiros, unsigned) ----
cmp rax, rbx
jbe depois         ; JBE pula quando rax <= rbx (sem sinal)
    mov rcx, rax
depois:

; ---- if (a != 0) — jeito mais eficiente ----
test rax, rax      ; mais eficiente que "cmp rax, 0"
jz  depois         ; pular se for zero
    ; a != 0: fazer algo
depois:
        `}),l.jsxs(se,{type:"tip",title:"Truque: checar um intervalo com apenas uma comparação",children:["Para verificar se ",l.jsx("code",{children:"0 ≤ x < N"}),", você pode usar apenas uma comparação sem sinal: ",l.jsx("code",{children:"cmp rax, N"})," seguido de ",l.jsx("code",{children:"jae fora"}),". Isso funciona porque números negativos em complemento de dois são gigantes quando interpretados sem sinal, então qualquer número negativo automaticamente falha na comparação!"]})]})}function cM(){return l.jsxs(Se,{title:"Saltos Condicionais",subtitle:"JMP, Jcc e como implementar estruturas if/else e switch em Assembly.",difficulty:"iniciante",timeToRead:"10 min",children:[l.jsx("h2",{children:"JMP — Salto Incondicional"}),l.jsx(M,{title:"JMP — saltar sempre",language:"asm",code:`
; JMP label — salta para label (modifica RIP)
jmp meu_label       ; salto direto (para label no mesmo arquivo)
jmp rax             ; salto indireto (endereço em registrador)
jmp [rax]           ; salto indireto via memória (jump table)
jmp [rip + tabela]  ; salto via tabela relativa ao RIP

; Exemplos:
jmp fim
    mov rax, 1    ; este código NUNCA executa (dead code)
fim:
    ret
      `}),l.jsx("h2",{children:"Jcc — Saltos Condicionais"}),l.jsx(M,{title:"Saltos condicionais básicos",language:"asm",code:`
; Todos os saltos condicionais (Jcc):
; JE label   — salta se igual (ZF=1)
; JNE label  — salta se diferente (ZF=0)
; JL label   — salta se menor (com sinal)
; JLE label  — salta se ≤ (com sinal)
; JG label   — salta se maior (com sinal)
; JGE label  — salta se ≥ (com sinal)
; JB label   — salta se abaixo (sem sinal)
; JBE label  — salta se ≤ (sem sinal)
; JA label   — salta se acima (sem sinal)
; JAE label  — salta se ≥ (sem sinal)
; JS / JNS   — salta se negativo/não negativo (SF)
; JO / JNO   — salta se overflow/sem overflow (OF)
; JZ / JNZ   — aliases de JE/JNE

; Alcance: saltos curtos ±127 bytes, NASM expande automaticamente para 32-bit

; SHORT vs NEAR (NASM resolve automaticamente):
jmp short fim   ; forçar salto curto (1 byte de offset)
jmp near fim    ; forçar salto near (4 bytes de offset)
      `}),l.jsx("h2",{children:"Implementando if/else"}),l.jsx(M,{title:"if/else em Assembly",language:"asm",code:`
; C: if (rax > 10) { rbx = 1; } else { rbx = 2; }

cmp rax, 10
jle else_branch    ; se rax <= 10, vai para else
    ; bloco then:
    mov rbx, 1
    jmp fim_if     ; pular o else
else_branch:
    ; bloco else:
    mov rbx, 2
fim_if:

; C: if (rax != 0) { ... }  (sem else)
test rax, rax
jz fim_if
    ; bloco if
fim_if:

; C: if (a > 0 && b > 0) { ... }  (AND lógico)
test rax, rax
jle falso
test rbx, rbx
jle falso
    ; ambas condições verdadeiras
    jmp fim_and
falso:
fim_and:

; C: if (a == 0 || b == 0) { ... }  (OR lógico)
test rax, rax
jz é_verdade
test rbx, rbx
jnz é_falso
é_verdade:
    ; ao menos um é zero
é_falso:
      `}),l.jsx("h2",{children:"Implementando switch/case"}),l.jsx(M,{title:"Switch via jump table",language:"asm",code:`
; C: switch (rax) { case 0: ...; case 1: ...; case 2: ...; }

; Método 1: cadeia de comparações (bom para poucos casos)
cmp rax, 0
je case_0
cmp rax, 1
je case_1
cmp rax, 2
je case_2
jmp case_default

case_0:
    mov rbx, 100
    jmp switch_end
case_1:
    mov rbx, 200
    jmp switch_end
case_2:
    mov rbx, 300
    jmp switch_end
case_default:
    mov rbx, -1
switch_end:

; Método 2: jump table (O(1) — muito mais rápido para muitos casos)
section .data
jump_table:
    dq case_a, case_b, case_c, case_d   ; ponteiros para cada case

section .text
    ; rax = índice (0, 1, 2 ou 3)
    cmp rax, 3
    ja  case_default              ; fora do intervalo → default
    lea rdx, [rel jump_table]    ; rdx = endereço da tabela
    jmp [rdx + rax*8]            ; salta para tabela[rax]

case_a: mov rbx, 10 ; jmp switch_end
case_b: mov rbx, 20 ; jmp switch_end
case_c: mov rbx, 30 ; jmp switch_end
case_d: mov rbx, 40
      `}),l.jsx("h2",{children:"Short-circuit Evaluation"}),l.jsx(M,{title:"Avaliação de curto-circuito",language:"asm",code:`
; C: if (ptr != NULL && *ptr > 0) { ... }
; → Avaliar *ptr SÓ SE ptr != NULL

test rdi, rdi          ; verifica se rdi (ptr) é NULL
jz condição_falsa      ; se NULL, pula (short-circuit)
cmp dword ptr [rdi], 0 ; agora seguro acessar *ptr
jle condição_falsa     ; se ≤ 0, falso
    ; código quando ptr != NULL && *ptr > 0
condição_falsa:

; C: if (a == 0 || result()) { ... }
; → Se a == 0, NÃO chama result()
test rax, rax
jz verdadeiro       ; short-circuit
call result
test rax, rax
jz falso
verdadeiro:
    ; condição é verdadeira
falso:
      `}),l.jsx(se,{type:"tip",title:"Branch prediction",children:"CPUs modernas predizem o resultado de saltos condicionais. O default é esperar que o salto NÃO seja tomado (fall-through). Para código quente (loops, código muito executado), coloque o caminho mais comum no fall-through para maximizar acertos de predição."})]})}function uM(){return l.jsxs(Se,{title:"Loops",subtitle:"Como implementar for, while e do-while em Assembly — com analogias simples para entender cada padrão.",difficulty:"iniciante",timeToRead:"10 min",children:[l.jsx("h2",{children:"Loops em Assembly — a ideia geral"}),l.jsxs("p",{children:["Em Assembly, não existe a palavra ",l.jsx("code",{children:"for"})," ou ",l.jsx("code",{children:"while"}),". Em vez disso, você monta o loop usando saltos condicionais. A estrutura é sempre:"]}),l.jsxs("ol",{children:[l.jsx("li",{children:"Verificar a condição"}),l.jsx("li",{children:"Se a condição não for satisfeita, pular para o fim"}),l.jsx("li",{children:"Executar o corpo do loop"}),l.jsx("li",{children:"Voltar ao passo 1"})]}),l.jsx("h2",{children:"While — verificação no início"}),l.jsxs("p",{children:["O while verifica a condição ",l.jsx("em",{children:"antes"})," de executar o corpo. Se a condição for falsa desde o início, o corpo nunca executa."]}),l.jsx(M,{title:"Traduzindo 'while' de C para Assembly",language:"asm",code:`
; C: while (rax > 0) { rbx += rax; rax--; }

inicio_while:
    cmp rax, 0          ; comparar rax com 0
    jle fim_while       ; se rax <= 0, sair do loop
                        ; jle = jump if less or equal = pula se não é maior que zero

    ; --- corpo do loop (executado quando rax > 0) ---
    add rbx, rax        ; rbx = rbx + rax
    dec rax             ; rax = rax - 1

    jmp inicio_while    ; voltar ao início para verificar de novo

fim_while:
; aqui rax <= 0

; Dica: test é mais eficiente que cmp com zero:
; inicio_while:
;     test rax, rax      ; mesmo que "cmp rax, 0", mas 1 byte menor
;     jle fim_while
        `}),l.jsx("h2",{children:"do-while — verificação no final"}),l.jsxs("p",{children:["O do-while executa o corpo ",l.jsx("em",{children:"pelo menos uma vez"}),", e só verifica a condição no final. É o padrão de loop mais natural em Assembly — e o mais eficiente, porque não precisa do salto inicial:"]}),l.jsx(M,{title:"Traduzindo 'do-while' de C para Assembly",language:"asm",code:`
; C: do { rbx += rax; rax--; } while (rax > 0);

; Note que NÃO tem verificação antes de entrar — entra direto no corpo:

inicio_do_while:
    ; --- corpo do loop (sempre executa ao menos uma vez) ---
    add rbx, rax        ; rbx = rbx + rax
    dec rax             ; rax = rax - 1

    ; verificação DEPOIS do corpo:
    cmp rax, 0
    jg inicio_do_while  ; se rax > 0, repetir
                        ; jg = jump if greater = pula se maior que zero

; sai quando rax <= 0
        `}),l.jsx(se,{type:"tip",title:"Do-while é o loop mais eficiente",children:"Em Assembly, o padrão do-while usa MENOS instruções por iteração que o while, porque elimina o salto inicial. Compiladores otimizados (como GCC com -O2) sempre convertem while e for em do-while internamente quando possível."}),l.jsx("h2",{children:"For — contador com inicio, condição e incremento"}),l.jsx("p",{children:"O for nada mais é que um while com um contador explícito. Em Assembly, você simplesmente inicializa o contador, verifica a condição e incrementa manualmente:"}),l.jsx(M,{title:"Traduzindo 'for' de C para Assembly",language:"asm",code:`
; C: for (int i = 0; i < 10; i++) { rbx += i; }

    xor rcx, rcx         ; rcx = 0   (equivale a: i = 0)
                         ; xor rcx, rcx é o jeito eficiente de zerar

inicio_for:
    cmp rcx, 10          ; comparar i com 10
    jge fim_for          ; se i >= 10, sair do loop

    ; --- corpo do loop ---
    add rbx, rcx         ; rbx += i

    ; incremento:
    inc rcx              ; i++

    jmp inicio_for       ; voltar ao início

fim_for:
; aqui rcx = 10, rbx = 0+1+2+...+9 = 45
        `}),l.jsx("h2",{children:"A instrução LOOP — contador automático com RCX"}),l.jsxs("p",{children:["O Assembly x86 tem uma instrução especial chamada ",l.jsx("code",{children:"LOOP"})," que faz automaticamente: decrementa RCX e salta se RCX ainda não chegou a zero. É como um for embutido na CPU — mas só funciona com o registrador RCX:"]}),l.jsx(M,{title:"A instrução LOOP",language:"asm",code:`
; A instrução LOOP é um atalho para: dec rcx; jnz label

mov rcx, 5          ; queremos repetir 5 vezes
                    ; RCX = contador — LOOP sempre usa RCX!

inicio_loop:
    ; --- corpo do loop ---
    add rbx, 1       ; rbx++  (executado 5 vezes)

    loop inicio_loop ; equivale a: dec rcx; jnz inicio_loop
                     ; quando rcx chegar a 0, o loop termina

; Resultado: rcx = 0, rbx = 5

; Versão equivalente SEM a instrução LOOP (mais rápida em CPUs modernas!):
mov rcx, 5
inicio_loop2:
    add rbx, 1
    dec rcx
    jnz inicio_loop2  ; pula se rcx != 0
        `}),l.jsxs(se,{type:"info",title:"LOOP é lento em CPUs modernas",children:["A instrução LOOP existe desde o 8086, mas em processadores modernos ela é mais lenta que fazer ",l.jsx("code",{children:"dec rcx; jnz label"})," manualmente. Para código de aprendizado, não tem problema usar LOOP. Para código de produção, prefira dec + jnz."]}),l.jsx("h2",{children:"Loop sobre um array — percorrer todos os elementos"}),l.jsx(M,{title:"Somar todos os elementos de um array",language:"asm",code:`
; Temos um array de inteiros de 64 bits:
; array: dq 10, 20, 30, 40, 50  (5 elementos de 8 bytes cada)
; Queremos calcular a soma: 10+20+30+40+50 = 150

section .data
    array dq 10, 20, 30, 40, 50   ; 5 números de 64 bits
    tamanho equ 5                  ; quantidade de elementos

section .text
_start:
    xor rax, rax              ; rax = soma = 0 (começar do zero)
    xor rcx, rcx              ; rcx = índice = 0 (começar do elemento 0)

soma_loop:
    cmp rcx, tamanho          ; índice chegou ao fim? (rcx >= 5?)
    jge soma_fim              ; se sim, sair

    ; acessar array[rcx]:
    ; cada elemento tem 8 bytes, então o elemento rcx está em array + rcx*8
    add rax, [array + rcx*8]  ; soma += array[rcx]
    ;          ↑        ↑
    ;       endereço  índice × tamanho do elemento (8 bytes = qword)

    inc rcx                   ; próximo elemento
    jmp soma_loop

soma_fim:
    ; rax = 150 (a soma)
    mov rdi, rax              ; usar como código de saída para verificar
    mov rax, 60               ; syscall exit
    syscall
        `}),l.jsx("h2",{children:"Loop com break — saindo no meio"}),l.jsx(M,{title:"Equivalente ao 'break' em Assembly",language:"asm",code:`
; C: for (i = 0; i < 100; i++) { if (array[i] == 0) break; }
; Encontrar o primeiro zero em um array

    xor rcx, rcx              ; i = 0

busca_loop:
    cmp rcx, 100              ; i >= 100? (chegou ao fim sem encontrar)
    jge não_encontrou

    cmp qword [array + rcx*8], 0  ; array[i] == 0?
    je  encontrou             ; sim! quebrar o loop aqui (equivale ao break)

    inc rcx                   ; i++
    jmp busca_loop

encontrou:
    ; rcx = índice do primeiro zero

não_encontrou:
    ; chegou ao fim sem encontrar zero
        `})]})}function dM(){return l.jsxs(Se,{title:"CALL e RET",subtitle:"Chamadas de função em Assembly — como CALL e RET manipulam a pilha e o fluxo de execução.",difficulty:"intermediário",timeToRead:"10 min",children:[l.jsx("h2",{children:"Como CALL funciona"}),l.jsx(M,{title:"O que CALL faz internamente",language:"asm",code:`
; CALL func é equivalente a:
;   push rip_seguinte    (endereço da instrução após o CALL)
;   jmp func

; Exemplo:
call minha_funcao
; ← CALL coloca o endereço DESTA linha na pilha, depois salta para minha_funcao
mov rax, 1    ; esta linha é executada quando minha_funcao retornar

minha_funcao:
    ; RSP aponta para o endereço de retorno (endereço da linha "mov rax, 1")
    ; ...corpo da função...
    ret            ; pop rip → continua após o CALL
      `}),l.jsx("h2",{children:"Como RET funciona"}),l.jsx(M,{title:"Variantes do RET",language:"asm",code:`
; RET (sem operando): pop rip
; Retorna para o endereço no topo da pilha
ret

; RET n (com operando): pop rip; rsp += n
; Limpa n bytes adicionais da pilha após o RIP (convenção __stdcall Windows)
ret 8      ; retorna e remove mais 8 bytes da pilha
ret 16     ; retorna e remove mais 16 bytes

; RETF (far return): pop ip; pop cs
; Usado em modo real ou para retorno inter-segmento
retf

; Cuidado com stack smashing:
; Se RSP não apontar para o endereço de retorno correto ao RET,
; o programa salta para um endereço aleatório (bug ou exploit!)
      `}),l.jsx("h2",{children:"CALL Indireto"}),l.jsx(M,{title:"Chamar via ponteiro de função",language:"asm",code:`
; CALL por registrador (ponteiro de função):
mov rax, minha_funcao   ; rax = endereço da função
call rax                ; chama a função cujo endereço está em rax

; CALL por memória:
section .data
    func_ptr dq minha_funcao    ; ponteiro de função na memória

section .text
    call [func_ptr]             ; chama via ponteiro na memória

; Tabela de funções (virtual dispatch, OOP):
section .data
vtable:
    dq funcao_a
    dq funcao_b
    dq funcao_c

section .text
    ; Chamar funcao_b (índice 1):
    lea rax, [rel vtable]
    call [rax + 1*8]     ; chama vtable[1] = funcao_b
      `}),l.jsx("h2",{children:"Preservando Registradores entre Chamadas"}),l.jsx(M,{title:"Caller-saved vs callee-saved",language:"asm",code:`
; System V x64 ABI:
; Caller-saved (não preservados por chamadas): RAX, RCX, RDX, RSI, RDI, R8-R11
; Callee-saved (devem ser preservados): RBX, RBP, R12-R15

; Se você precisa de RBX, R12-R15, SALVE e RESTAURE (callee-saved):
minha_funcao:
    push rbp
    mov  rbp, rsp
    push rbx              ; salvar RBX (callee-saved)
    push r12              ; salvar R12

    ; usar rbx e r12 livremente...
    mov rbx, 100
    mov r12, 200

    pop r12               ; restaurar na ordem INVERSA!
    pop rbx
    mov rsp, rbp
    pop rbp
    ret

; Se precisar de RAX, RCX... após um CALL (caller-saved):
main:
    mov rax, 42           ; rax = 42
    push rax              ; salvar antes do CALL
    call alguma_funcao    ; rax pode ser destruído pelo CALL
    pop rax               ; restaurar rax = 42
      `}),l.jsx("h2",{children:"Funções Recursivas"}),l.jsx(M,{title:"Recursão em Assembly",language:"asm",code:`
; Fatorial recursivo: fatorial(n) = n * fatorial(n-1)
; Argumento: RDI = n, Retorno: RAX = n!

fatorial:
    push rbp
    mov  rbp, rsp
    push rbx              ; salvar RBX

    ; Caso base: if (n <= 1) return 1
    cmp  rdi, 1
    jg   caso_recursivo   ; se n > 1, recursão
    mov  rax, 1           ; retorna 1
    jmp  fatorial_fim

caso_recursivo:
    mov  rbx, rdi         ; rbx = n (preservar n para depois)
    dec  rdi              ; rdi = n-1
    call fatorial         ; rax = fatorial(n-1)
    imul rax, rbx         ; rax = n * fatorial(n-1)

fatorial_fim:
    pop rbx
    mov rsp, rbp
    pop rbp
    ret

; Chamada: fatorial(5)
; _start:
;   mov rdi, 5
;   call fatorial
;   ; rax = 120
      `}),l.jsx(se,{type:"warning",title:"Stack overflow em recursão",children:"Recursão profunda pode esgotar a pilha (geralmente 8MB no Linux). Cada chamada recursiva usa memória da pilha para o endereço de retorno e registradores salvos. Para recursão profunda, use iteração ou TCO (Tail Call Optimization)."}),l.jsx("h2",{children:"Tail Call Optimization (TCO)"}),l.jsx(M,{title:"TCO — recursão sem crescer a pilha",language:"asm",code:`
; Uma tail call é quando a última operação de uma função é CALL
; Podemos substituir CALL + RET por JMP (mais eficiente!)

; Antes da TCO:
funcao_a:
    ; ... trabalho ...
    call funcao_b    ; última operação = tail call
    ret              ; apenas retorna o que funcao_b retornou

; Depois da TCO (substitui call+ret por jmp):
funcao_a_tco:
    ; ... trabalho ...
    jmp funcao_b     ; salta diretamente — funcao_b retorna para quem chamou funcao_a!

; Para recursão de cauda (tail-recursive):
; soma_aux(acc, n) = if n==0 then acc else soma_aux(acc+n, n-1)
soma_aux:
    test rsi, rsi       ; verifica n == 0
    jz retorna_acc
    add rdi, rsi        ; acc += n
    dec rsi             ; n--
    jmp soma_aux        ; TAIL CALL → jmp (sem crescer a pilha!)
retorna_acc:
    mov rax, rdi
    ret
      `})]})}function mM(){return l.jsxs(Se,{title:"Prólogo e Epílogo de Funções",subtitle:"Estrutura padrão de entrada e saída de funções — criando e destruindo stack frames corretamente.",difficulty:"intermediário",timeToRead:"10 min",children:[l.jsx("h2",{children:"Por que Usar Prólogo/Epílogo?"}),l.jsx("p",{children:"O prólogo e o epílogo são padrões de código que toda função deve seguir para:"}),l.jsxs("ul",{children:[l.jsxs("li",{children:["Estabelecer um ",l.jsx("strong",{children:"stack frame"})," estável para acessar variáveis locais e parâmetros"]}),l.jsxs("li",{children:["Preservar registradores ",l.jsx("strong",{children:"callee-saved"})," conforme exige a ABI"]}),l.jsxs("li",{children:["Garantir que ",l.jsx("strong",{children:"RSP seja restaurado"})," corretamente antes de RET"]})]}),l.jsx("h2",{children:"Prólogo Padrão"}),l.jsx(M,{title:"Prólogo completo de uma função",language:"asm",code:`
minha_funcao:
    ; === PRÓLOGO ===
    push rbp              ; 1. Salvar frame pointer antigo
    mov  rbp, rsp         ; 2. Estabelecer novo frame (rbp = base do frame)
    sub  rsp, 32          ; 3. Reservar espaço para variáveis locais (múltiplo de 16!)

    ; Salvar registradores callee-saved se forem usados:
    push rbx              ; callee-saved
    push r12              ; callee-saved
    push r13              ; callee-saved

    ; === CORPO ===
    ; Acessar variáveis locais via RBP:
    ; [rbp - 8]   = 1ª variável local (8 bytes)
    ; [rbp - 16]  = 2ª variável local
    ; [rbp - 24]  = 3ª variável local
    ; [rbp - 32]  = 4ª variável local

    ; Acessar parâmetros via RBP (x86 32-bit com stack args):
    ; [rbp + 8]   = 1º argumento (endereço de retorno está em [rbp])
    ; [rbp + 12]  = 2º argumento
    ; [rbp + 16]  = 3º argumento

    ; (Em x64 Linux, primeiros 6 args são em RDI, RSI, RDX, RCX, R8, R9)

    ; === EPÍLOGO ===
    pop r13               ; restaurar na ordem INVERSA do prólogo!
    pop r12
    pop rbx
    mov rsp, rbp          ; restaurar RSP (cancela o sub rsp, N)
    pop rbp               ; restaurar frame pointer antigo
    ret
      `}),l.jsx("h2",{children:"A Instrução LEAVE"}),l.jsx(M,{title:"LEAVE — epílogo abreviado",language:"asm",code:`
; LEAVE é equivalente a:
;   mov rsp, rbp
;   pop rbp

; Epílogo com LEAVE (mais compacto):
minha_funcao:
    push rbp
    mov rbp, rsp
    sub rsp, 48

    ; ... corpo ...

    leave    ; restaura RSP e RBP
    ret      ; retorna

; ENTER é o análogo do LEAVE para prólogo (raramente usado):
; enter 48, 0  → equivalente a: push rbp; mov rbp, rsp; sub rsp, 48
; (lento — não use em código novo)
      `}),l.jsx("h2",{children:"Frame sem RBP (Omit Frame Pointer)"}),l.jsx(M,{title:"Função sem frame pointer — mais eficiente",language:"asm",code:`
; Em x64 com -fomit-frame-pointer (gcc padrão em otimizações),
; as funções NÃO usam RBP como frame pointer.
; Isso libera RBP como registrador de uso geral.

funcao_sem_frame:
    ; Sem push rbp / mov rbp, rsp!
    sub rsp, 32           ; apenas aloca espaço local

    ; Variáveis locais via RSP (não RBP):
    mov [rsp],    rax     ; variável em rsp+0
    mov [rsp+8],  rbx     ; variável em rsp+8
    mov [rsp+16], rcx     ; variável em rsp+16

    ; PROBLEMA: após cada push/pop, RSP muda → offsets mudam!
    ; Por isso, funções com muitas operações de pilha preferem RBP.

    add rsp, 32           ; restaura RSP
    ret

; Vantagens: 1 registrador extra (RBP), código menor
; Desvantagens: debugging mais difícil, impossível de usar com GDB frame info
      `}),l.jsx("h2",{children:"Layout do Stack Frame x64"}),l.jsxs("div",{className:"not-prose my-4 border border-border rounded-lg overflow-hidden",children:[l.jsx("div",{className:"bg-muted px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide",children:"Stack Frame de minha_funcao"}),l.jsx("div",{className:"divide-y divide-border text-xs font-mono",children:[{addr:"rbp + N",label:"Argumentos extras (7º, 8º...)",color:"text-amber-400"},{addr:"rbp + 8",label:"Endereço de retorno (push pelo CALL)",color:"text-red-400"},{addr:"rbp + 0",label:"← RBP antigo (push rbp)",color:"text-primary"},{addr:"rbp - 8",label:"Variável local 1",color:"text-emerald-400"},{addr:"rbp - 16",label:"Variável local 2",color:"text-emerald-400"},{addr:"rbp - 24",label:"Variável local 3",color:"text-emerald-400"},{addr:"rsp",label:"← Topo da pilha (atual)",color:"text-blue-400"}].map(({addr:a,label:o,color:n})=>l.jsxs("div",{className:"flex items-center gap-3 px-3 py-2 hover:bg-accent/20",children:[l.jsx("span",{className:`w-28 shrink-0 ${n}`,children:a}),l.jsx("span",{className:"text-muted-foreground",children:o})]},a))})]}),l.jsxs(se,{type:"tip",title:"Alinhamento a 16 bytes",children:["Ao entrar em uma função, ",l.jsx("code",{children:"CALL"})," empurra 8 bytes (endereço de retorno), então RSP ≡ 8 (mod 16). Após ",l.jsx("code",{children:"push rbp"}),", RSP ≡ 0 (mod 16). O ",l.jsx("code",{children:"sub rsp, N"})," deve manter esse alinhamento — use múltiplos de 16. Se você salvar um número ímpar de registradores com PUSH, ajuste com um extra",l.jsx("code",{children:"sub rsp, 8"}),"."]})]})}function fM(){return l.jsxs(Se,{title:"Convenções de Chamada",subtitle:"ABIs — como argumentos são passados, quem preserva registradores e como valores são retornados.",difficulty:"intermediário",timeToRead:"12 min",children:[l.jsx(se,{type:"info",title:"O que é uma ABI?",children:"ABI (Application Binary Interface) define como funções se comunicam em nível de código de máquina: quais registradores são usados para argumentos, quem preserva o quê, e como valores são retornados. Seguir a ABI é essencial para interoperar com código C e bibliotecas do sistema."}),l.jsx("h2",{children:"System V AMD64 ABI (Linux e macOS)"}),l.jsx(M,{title:"System V x64 — argumentos e retorno",language:"asm",code:`
; Ordem dos registradores para argumentos inteiros/ponteiros:
; 1º: RDI, 2º: RSI, 3º: RDX, 4º: RCX, 5º: R8, 6º: R9
; 7º em diante: na pilha (RTL — da direita para esquerda)

; Retorno:
; RAX  = retorno de inteiro/ponteiro de 64 bits
; RAX + RDX = retorno de 128 bits
; XMM0 = retorno de float/double
; XMM0 + XMM1 = retorno de estruturas de ponto flutuante

; Caller-saved (podem ser destruídos pelo callee):
; RAX, RCX, RDX, RSI, RDI, R8, R9, R10, R11

; Callee-saved (devem ser preservados pelo callee):
; RBX, RBP, R12, R13, R14, R15

; Exemplo — chamar printf("Número: %d\\n", 42):
section .data
    fmt db "Número: %d", 10, 0

section .text
    lea  rdi, [rel fmt]    ; 1º arg: format string
    mov  rsi, 42           ; 2º arg: o número
    xor  eax, eax          ; xmm args = 0 (necessário para variádicas!)
    call printf            ; valor retornado em RAX
      `}),l.jsx("h2",{children:"Microsoft x64 ABI (Windows)"}),l.jsx(M,{title:"Windows x64 — diferente do Linux!",language:"asm",code:`
; Windows usa UMA convenção diferente!
; Ordem dos registradores para argumentos:
; 1º: RCX, 2º: RDX, 3º: R8, 4º: R9
; 5º em diante: na pilha

; Shadow Space / Home Space (OBRIGATÓRIO no Windows!):
; O caller SEMPRE deve alocar 32 bytes de "shadow space" na pilha
; antes de qualquer CALL, mesmo que a função use apenas registradores.
; Isso permite que a função salve RCX/RDX/R8/R9 nesse espaço.

; Retorno:
; RAX = inteiro/ponteiro
; XMM0 = float/double

; Caller-saved: RAX, RCX, RDX, R8, R9, R10, R11
; Callee-saved: RBX, RBP, RDI, RSI, R12, R13, R14, R15, XMM6-XMM15

; Chamada de função no Windows x64:
sub rsp, 40            ; 32 bytes shadow space + 8 para alinhamento
mov rcx, primeiro_arg  ; 1º arg em RCX (não RDI!)
mov rdx, segundo_arg   ; 2º arg em RDX
call MinhaFuncao
add rsp, 40            ; restaurar pilha
      `}),l.jsx("h2",{children:"Comparativo das Convenções"}),l.jsx("div",{className:"not-prose my-4 overflow-x-auto",children:l.jsxs("table",{className:"w-full text-sm border-collapse border border-border",children:[l.jsx("thead",{children:l.jsxs("tr",{className:"bg-muted text-xs uppercase tracking-wide text-muted-foreground",children:[l.jsx("th",{className:"border border-border px-3 py-2 text-left",children:"Característica"}),l.jsx("th",{className:"border border-border px-3 py-2 text-left",children:"System V (Linux/Mac)"}),l.jsx("th",{className:"border border-border px-3 py-2 text-left",children:"Microsoft x64 (Win)"})]})}),l.jsx("tbody",{children:[["Args 1-4","RDI, RSI, RDX, RCX","RCX, RDX, R8, R9"],["Args 5-6","R8, R9","— (pilha)"],["Shadow space","Não existe","32 bytes obrigatórios"],["Retorno inteiro","RAX","RAX"],["Retorno float","XMM0","XMM0"],["Callee-saved","RBX, RBP, R12-R15","RBX, RBP, RDI, RSI, R12-R15, XMM6-XMM15"],["Alinhamento RSP","16 bytes antes de CALL","16 bytes antes de CALL"]].map(([a,o,n])=>l.jsxs("tr",{className:"hover:bg-accent/30",children:[l.jsx("td",{className:"border border-border px-3 py-2 font-semibold text-xs",children:a}),l.jsx("td",{className:"border border-border px-3 py-2 text-xs text-muted-foreground",children:o}),l.jsx("td",{className:"border border-border px-3 py-2 text-xs text-muted-foreground",children:n})]},a))})]})}),l.jsx("h2",{children:"cdecl (x86 32-bit)"}),l.jsx(M,{title:"cdecl — convenção C de 32 bits",language:"asm",code:`
; Convenção C padrão para x86 (32-bit):
; Argumentos: na PILHA, da direita para a esquerda (RTL)
; Retorno: EAX (32-bit), EDX:EAX (64-bit), ST(0) (float)
; Stack cleanup: pelo CALLER (por isso "cd" = caller-destructs)
; Callee-saved: EBX, ESI, EDI, EBP

; Chamada: int soma(int a, int b) → soma(10, 20)
push 20              ; 2º arg (empurrado primeiro → direita para esquerda)
push 10              ; 1º arg
call soma
add  esp, 8          ; CALLER limpa a pilha: 2 ints × 4 bytes = 8

; Implementação de soma:
soma:
    push ebp
    mov  ebp, esp
    ; [ebp + 8]  = a (10)
    ; [ebp + 12] = b (20)
    mov eax, [ebp + 8]
    add eax, [ebp + 12]   ; eax = a + b = 30
    pop ebp
    ret                   ; NÃO limpa a pilha (caller faz isso)
      `}),l.jsx("h2",{children:"__stdcall (Windows 32-bit)"}),l.jsx(M,{title:"stdcall — usado pela WinAPI",language:"asm",code:`
; __stdcall: como cdecl, mas o CALLEE limpa a pilha
; Argumentos: na pilha, da direita para a esquerda
; Stack cleanup: pelo CALLEE (via RET n)
; Muito usado pela Windows API (kernel32, user32, etc.)

; Implementação: CALLEE usa RET n para limpar n bytes
soma_stdcall:
    push ebp
    mov  ebp, esp
    mov  eax, [ebp + 8]
    add  eax, [ebp + 12]
    pop  ebp
    ret  8            ; CALLEE limpa 8 bytes (2 ints × 4)

; Chamada (sem limpeza no caller):
push 20
push 10
call soma_stdcall
; RSP já foi restaurado pelo RET 8 — sem add esp, 8
      `}),l.jsx(se,{type:"warning",title:"Mixing ABIs = crash",children:"Misturar convenções de chamada é um dos bugs mais difíceis de debugar. Se você chamar uma função Windows x64 com argumentos no estilo Linux (ou vice-versa), os argumentos estarão nos registradores errados e o programa falhará de formas imprevisíveis."})]})}function hM(){return l.jsxs(Se,{title:"Passagem de Parâmetros",subtitle:"Como passar e receber argumentos em funções — por valor, por referência, e na pilha.",difficulty:"intermediário",timeToRead:"10 min",children:[l.jsx("h2",{children:"Por Valor vs Por Referência"}),l.jsx(M,{title:"Passagem por valor (cópia)",language:"asm",code:`
; Por valor: o callee recebe uma CÓPIA do argumento
; Modificar o parâmetro NÃO afeta a variável original

; C: void incrementa_val(int x) { x++; }  // sem efeito no caller
; Assembly (System V x64):
incrementa_val:
    inc edi           ; modifica RDI (cópia local de x)
    ret               ; original do caller não foi tocado

; C: incrementa_val(minhaVar);
mov edi, [minhaVar]   ; carrega CÓPIA do valor
call incrementa_val
; minhaVar ainda tem o valor original!
      `}),l.jsx(M,{title:"Passagem por referência (ponteiro)",language:"asm",code:`
; Por referência: o callee recebe um PONTEIRO para o argumento
; Modificar via o ponteiro AFETA a variável original

; C: void incrementa_ref(int *x) { (*x)++; }
incrementa_ref:
    inc dword ptr [rdi]   ; modifica *x (a variável original!)
    ret

; C: incrementa_ref(&minhaVar);
lea rdi, [minhaVar]    ; carrega ENDEREÇO (não valor)
call incrementa_ref
; minhaVar agora vale minhaVar + 1!
      `}),l.jsx("h2",{children:"Retornando Múltiplos Valores"}),l.jsx(M,{title:"Múltiplos valores de retorno",language:"asm",code:`
; Método 1: RAX e RDX para dois valores de 64 bits
; C: pair<long,long> divide_mod(long a, long b);
divide_mod:
    mov rax, rdi       ; rax = a
    xor rdx, rdx       ; rdx = 0 (parte alta)
    div rsi            ; rax = quociente, rdx = resto
    ret                ; retorna rax = quociente, rdx = resto

; Caller:
mov rdi, 100
mov rsi, 7
call divide_mod
; rax = 14 (quociente), rdx = 2 (resto)

; Método 2: retornar struct por ponteiro (argumento extra)
; C: void divide_full(long a, long b, Result *out);
divide_full:
    ; rdi = a, rsi = b, rdx = ponteiro para Result
    mov rax, rdi
    push rdx           ; salvar ponteiro
    xor rdx, rdx
    div rsi            ; rax = quociente, rdx = resto
    pop rcx            ; rcx = ponteiro para Result
    mov [rcx],   rax   ; out->quociente = rax
    mov [rcx+8], rdx   ; out->resto = rdx
    ret
      `}),l.jsx("h2",{children:"Passagem de Structs"}),l.jsx(M,{title:"Como structs são passadas",language:"asm",code:`
; Structs pequenas (≤ 16 bytes) são passadas em registradores no System V x64:
; Uma struct de 2 x long cabe em RDI + RSI (ou RDI e RSI separados em 8 bytes)

; struct Ponto { long x; long y; };
; void usa_ponto(struct Ponto p);
; Chamada: usa_ponto({x=10, y=20})
mov rdi, 10     ; p.x no primeiro registrador de argumento
mov rsi, 20     ; p.y no segundo registrador de argumento
call usa_ponto

; Structs maiores (> 16 bytes) → passadas por ponteiro (implicitamente)
; C: void usa_grande(struct Grande g);
; Assembly: o compilador passa um ponteiro para uma cópia na pilha

; Retornando struct pequena:
; struct Ponto cria_ponto(long x, long y);
cria_ponto:
    ; rdi = x, rsi = y
    mov rax, rdi    ; retorna p.x em RAX
    mov rdx, rsi    ; retorna p.y em RDX
    ret
      `}),l.jsx("h2",{children:"Argumentos Variádicos (printf-style)"}),l.jsx(M,{title:"Funções variádicas em x64",language:"asm",code:`
; Para chamar printf (ou qualquer função variádica) no Linux x64:
; 1. Passar argumentos fixos em RDI, RSI, RDX...
; 2. Argumentos de ponto flutuante em XMM0, XMM1...
; 3. EAX deve conter o número de registradores XMM usados

section .data
    fmt1 db "%s tem %d anos.", 10, 0
    nome db "Maria", 0

section .text
    lea rdi, [rel fmt1]   ; 1º arg: formato
    lea rsi, [rel nome]   ; 2º arg: %s = endereço da string
    mov rdx, 30           ; 3º arg: %d = 30 (idade)
    xor eax, eax          ; 0 args de ponto flutuante
    call printf

; Outros exemplos:
    ; printf("Pi = %.2f
", 3.14);
    lea rdi, [rel fmt_pi]
    movsd xmm0, [rel pi_val]  ; double arg em XMM0
    mov eax, 1                ; 1 argumento XMM
    call printf
      `}),l.jsx("h2",{children:"Retorno de Ponto Flutuante"}),l.jsx(M,{title:"Float e double como retorno",language:"asm",code:`
; Funções que retornam float ou double usam XMM0
; (não RAX!)

; float calcula_media(float a, float b);
; Chamada em x64: a em XMM0, b em XMM1
calcula_media:
    addss xmm0, xmm1      ; xmm0 = a + b (single precision)
    mov eax, 2
    cvtsi2ss xmm1, eax    ; xmm1 = 2.0
    divss xmm0, xmm1      ; xmm0 = (a+b) / 2.0
    ret                   ; retorna media em XMM0

; double calcula_media_d(double a, double b);
calcula_media_d:
    addsd xmm0, xmm1      ; sd = scalar double
    mov eax, 2
    cvtsi2sd xmm1, eax
    divsd xmm0, xmm1
    ret
      `}),l.jsxs(se,{type:"tip",title:"EAX deve ser zerado para printf variádico",children:["Ao chamar funções variádicas como ",l.jsx("code",{children:"printf"})," no Linux x64, você DEVE colocar em EAX o número de registradores XMM usados como argumentos. Se não houver floats/doubles, use ",l.jsx("code",{children:"xor eax, eax"}),". Esquecer isso causa comportamento indefinido."]})]})}function pM(){return l.jsxs(Se,{title:"Instruções de String",subtitle:"MOVS, STOS, LODS, SCAS, CMPS — as instruções especializadas de string x86/x64.",difficulty:"intermediário",timeToRead:"12 min",children:[l.jsx(se,{type:"info",title:"Instruções de string x86",children:"As instruções de string x86 (MOVS, STOS, LODS, SCAS, CMPS) operam em blocos de memória usando RSI como ponteiro de origem e RDI como ponteiro de destino. O prefixo REP repete a instrução RCX vezes, tornando operações como memcpy e memset muito eficientes."}),l.jsx("h2",{children:"Direção das Strings — DF"}),l.jsx(M,{title:"Direction Flag controla o sentido",language:"asm",code:`
; DF (Direction Flag) controla o sentido das instruções de string:
; DF=0 (CLD): incrementa RSI/RDI após cada operação (forward)
; DF=1 (STD): decrementa RSI/RDI após cada operação (backward)

cld    ; Clear Direction Flag → RSI/RDI incrementam (padrão POSIX)
std    ; Set Direction Flag → RSI/RDI decrementam

; IMPORTANTE: A ABI System V x64 exige DF=0 ao chamar funções!
; Sempre use CLD antes de usar REP MOVS em código que chama funções externas.
      `}),l.jsx("h2",{children:"MOVS — Mover Bytes entre Memória"}),l.jsx(M,{title:"MOVSB, MOVSW, MOVSD, MOVSQ",language:"asm",code:`
; MOVSB — Move 1 byte de [RSI] para [RDI]; RSI++; RDI++
; MOVSW — Move 2 bytes
; MOVSD — Move 4 bytes
; MOVSQ — Move 8 bytes (quadword)

; Copiar 1 byte:
mov rsi, src
mov rdi, dst
movsb            ; [dst] = [src]; src++; dst++

; memcpy(dst, src, 16) — copiar 16 bytes:
mov rsi, src     ; RSI = origem
mov rdi, dst     ; RDI = destino
mov rcx, 2       ; contador: 2 × 8 bytes = 16 bytes
cld              ; direção: forward
rep movsq        ; repete MOVSQ 2 vezes

; memcpy(dst, src, n) genérico:
; rsi = src, rdi = dst, rcx = n (em bytes)
cld
rep movsb        ; copia rcx bytes (lento para n grande)

; Melhor: usar MOVSQ + restar com MOVSB:
mov rcx, n
shr rcx, 3         ; rcx = n / 8 (número de qwords)
rep movsq          ; copia n/8 qwords
mov rcx, n
and rcx, 7         ; rcx = n % 8 (bytes restantes)
rep movsb          ; copia bytes restantes
      `}),l.jsx("h2",{children:"STOS — Preencher Memória"}),l.jsx(M,{title:"STOSB, STOSW, STOSD, STOSQ — memset",language:"asm",code:`
; STOSB — Escreve AL em [RDI]; RDI++
; STOSW — Escreve AX em [RDI]; RDI += 2
; STOSD — Escreve EAX em [RDI]; RDI += 4
; STOSQ — Escreve RAX em [RDI]; RDI += 8

; memset(buffer, 0, 64) — zerar 64 bytes:
lea  rdi, [buffer]
xor  eax, eax      ; AL = 0 (valor a preencher)
mov  rcx, 64       ; contador: 64 bytes
cld
rep stosb          ; preenche 64 bytes com 0

; memset mais eficiente com STOSQ:
lea  rdi, [buffer]
xor  eax, eax
mov  rcx, 8        ; 8 × 8 bytes = 64 bytes
cld
rep stosq          ; preenche 64 bytes com 0 (mais rápido!)

; Preencher com valor não zero:
lea  rdi, [buffer]
mov  eax, 0xDEADBEEF  ; valor de preenchimento (32 bits)
mov  rcx, 16       ; 16 × 4 bytes = 64 bytes
rep stosd
      `}),l.jsx("h2",{children:"LODS — Carregar de String"}),l.jsx(M,{title:"LODSB, LODSW, LODSD, LODSQ",language:"asm",code:`
; LODSB — AL = [RSI]; RSI++
; LODSW — AX = [RSI]; RSI += 2
; LODSD — EAX = [RSI]; RSI += 4
; LODSQ — RAX = [RSI]; RSI += 8

; Processar string byte a byte:
lea rsi, [minha_string]
cld
processa_loop:
    lodsb              ; al = *rsi++
    test al, al        ; verifica terminador nulo
    jz fim
    ; processar AL (converter maiúsculo, etc.)
    or al, 0x20        ; converter para minúsculo (ASCII hack)
    mov [rdi], al      ; escrever resultado
    inc rdi
    jmp processa_loop
fim:
      `}),l.jsx("h2",{children:"SCAS — Buscar em String"}),l.jsx(M,{title:"SCASB — buscar byte em memória",language:"asm",code:`
; SCASB — compara AL com [RDI]; RDI++; atualiza flags
; SCASW, SCASD, SCASQ — para word, dword, qword

; strlen(str) — calcular comprimento de string nula:
lea rdi, [minha_string]
xor  al, al        ; AL = 0 (procura byte nulo)
mov  rcx, -1       ; rcx = 0xFFFFFFFFFFFFFFFF (contador grande)
cld
repne scasb        ; repete SCAS enquanto NOT EQUAL (e rcx != 0)
                   ; RDI avança até encontrar o byte 0

not  rcx           ; inverte rcx (complemento de 1)
dec  rcx           ; rcx = comprimento da string (sem o '\0')
; rcx = strlen(minha_string)

; strchr(str, 'A') — encontrar 'A' em string:
lea rdi, [minha_string]
mov  al, 'A'       ; AL = caracter a procurar
mov  rcx, max_len
cld
repne scasb
je   achado        ; ZF=1 → encontrou
; não encontrou...
achado:
dec rdi            ; RDI avança além do char → voltar um
      `}),l.jsx("h2",{children:"CMPS — Comparar Blocos de Memória"}),l.jsx(M,{title:"CMPSB — memcmp",language:"asm",code:`
; CMPSB — compara [RSI] com [RDI]; RSI++; RDI++; atualiza flags
; Útil para implementar memcmp e strcmp

; memcmp(a, b, n) — comparar n bytes:
lea rsi, [buf_a]
lea rdi, [buf_b]
mov rcx, n
cld
repe cmpsb     ; repete enquanto bytes são IGUAIS (e rcx != 0)
; Se ZF=1 após o loop: buffers são iguais nos primeiros n bytes
je  sao_iguais
; Se ZF=0: primeiro byte diferente encontrado em RSI-1 e RDI-1

; strcmp(a, b) — comparar strings nulas:
lea rsi, [str_a]
lea rdi, [str_b]
mov rcx, max_len
cld
repe cmpsb
je  strings_iguais
; AL da diferença está implícita nas flags após o último CMPSB
      `}),l.jsx(se,{type:"tip",title:"REP MOVS é mais rápido que loops manuais",children:"As instruções REP MOVS/STOS podem ser aceleradas pelo hardware para usar largura de bus interna (64-bit ou mais via micro-arquitetura). Processadores modernos as otimizam automaticamente para buffers maiores, às vezes usando operações vetoriais internas. Para memcpy de poucos bytes, loops manuais com MOV podem ser equivalentes."})]})}function xM(){return l.jsxs(Se,{title:"Arrays e Indexação",subtitle:"Acessar, percorrer e manipular arrays — do array simples a matrizes multidimensionais.",difficulty:"intermediário",timeToRead:"10 min",children:[l.jsx("h2",{children:"Arrays de Tipo Simples"}),l.jsx(M,{title:"Definindo e acessando arrays",language:"asm",code:`
section .data
    ; Array de bytes (char)
    chars  db 'A', 'B', 'C', 'D', 'E'   ; 5 bytes
    ; Array de inteiros de 32 bits
    ints   dd 10, 20, 30, 40, 50          ; 5 × 4 bytes = 20 bytes
    ; Array de qwords (long)
    longs  dq 100, 200, 300               ; 3 × 8 bytes = 24 bytes

section .text
    ; Acessar chars[2] = 'C':
    lea rsi, [rel chars]
    mov al, [rsi + 2]          ; al = 'C'

    ; Acessar ints[3] = 40:
    lea rsi, [rel ints]
    mov eax, [rsi + 3*4]       ; offset = índice × tamanho_elemento
    ; ou com índice em registrador:
    mov rcx, 3
    mov eax, [rsi + rcx*4]     ; SIB encoding: base + índice × 4
      `}),l.jsx("h2",{children:"Indexação Dinâmica"}),l.jsx(M,{title:"Acesso com índice variável",language:"asm",code:`
; Percorrer array com ponteiro (método eficiente):
lea rsi, [rel ints]          ; rsi = ponteiro para início do array
mov rcx, 5                   ; rcx = número de elementos
xor rax, rax                 ; rax = soma = 0

soma_loop:
    add eax, [rsi]           ; soma += *ptr (eax para int de 32 bits)
    add rsi, 4               ; avança ponteiro 4 bytes (sizeof int)
    dec rcx
    jnz soma_loop
; rax = 10+20+30+40+50 = 150

; Alternativa com índice explícito (SIB):
lea rsi, [rel ints]
xor rcx, rcx                 ; rcx = i = 0
xor rax, rax                 ; soma = 0
soma_idx_loop:
    add eax, [rsi + rcx*4]   ; soma += ints[i]
    inc rcx
    cmp rcx, 5
    jl soma_idx_loop
      `}),l.jsx("h2",{children:"Array 2D (Matriz)"}),l.jsx(M,{title:"Matrizes em row-major order",language:"asm",code:`
; Matriz 3×4 de ints (3 linhas, 4 colunas) em row-major order:
; matrix[i][j] = matrix + i*COLS*sizeof(int) + j*sizeof(int)

section .data
matrix dd 1,  2,  3,  4    ; linha 0
       dd 5,  6,  7,  8    ; linha 1
       dd 9, 10, 11, 12    ; linha 2

%define ROWS 3
%define COLS 4
%define ELEM_SIZE 4         ; sizeof(int)

section .text
    ; Acessar matrix[1][2] = 7:
    ; offset = i * COLS * ELEM_SIZE + j * ELEM_SIZE
    ; offset = 1 * 4 * 4         + 2 * 4
    ; offset = 16 + 8 = 24
    lea rsi, [rel matrix]
    mov eax, [rsi + 1*COLS*ELEM_SIZE + 2*ELEM_SIZE]  ; = [rsi + 24] = 7

    ; Com i e j em registradores:
    mov rax, 1               ; i = 1
    mov rbx, 2               ; j = 2
    imul rax, COLS           ; rax = i * COLS
    add  rax, rbx            ; rax = i*COLS + j
    lea  rsi, [rel matrix]
    mov  ecx, [rsi + rax*ELEM_SIZE]  ; ecx = matrix[i][j]
      `}),l.jsx("h2",{children:"Busca Linear em Array"}),l.jsx(M,{title:"Linear search — encontrar elemento",language:"asm",code:`
; int linear_search(int *arr, int n, int target)
; RDI = arr, RSI = n, RDX = target
; Retorno: RAX = índice ou -1 se não encontrado

linear_search:
    xor  rcx, rcx         ; rcx = i = 0
busca_loop:
    cmp  rcx, rsi         ; i >= n?
    jge  nao_encontrado
    cmp  dword ptr [rdi + rcx*4], edx  ; arr[i] == target?
    je   encontrado
    inc  rcx
    jmp  busca_loop

encontrado:
    mov rax, rcx          ; retorna índice
    ret

nao_encontrado:
    mov rax, -1           ; retorna -1
    ret
      `}),l.jsx("h2",{children:"Ordenação — Bubble Sort"}),l.jsx(M,{title:"Bubble sort em Assembly",language:"asm",code:`
; bubble_sort(int *arr, int n)
; RDI = arr, RSI = n

bubble_sort:
    push rbx
    push r12
    push r13

    dec rsi                ; n-1 iterações externas
outer_loop:
    test rsi, rsi
    jle  sort_done         ; n <= 0 → terminou

    xor rcx, rcx           ; i = 0
inner_loop:
    mov rax, rsi
    dec rax
    cmp rcx, rax           ; i >= n-1?
    jge next_outer

    mov ebx, [rdi + rcx*4]     ; ebx = arr[i]
    mov r12d, [rdi + rcx*4 + 4] ; r12 = arr[i+1]

    cmp ebx, r12d              ; arr[i] > arr[i+1]?
    jle sem_troca

    ; swap:
    mov [rdi + rcx*4],     r12d  ; arr[i]   = arr[i+1]
    mov [rdi + rcx*4 + 4], ebx   ; arr[i+1] = arr[i]

sem_troca:
    inc rcx
    jmp inner_loop

next_outer:
    dec rsi
    jmp outer_loop

sort_done:
    pop r13
    pop r12
    pop rbx
    ret
      `}),l.jsxs(se,{type:"tip",title:"Escalas suportadas no SIB: 1, 2, 4, 8",children:["O modo de endereçamento SIB suporta apenas as escalas 1, 2, 4 e 8. Para arrays de outros tamanhos (como structs de 3, 5, 6, 7 bytes), você precisa calcular o offset manualmente com IMUL ou LEA: ",l.jsx("code",{children:"imul rcx, 6"})," seguido de",l.jsx("code",{children:"mov eax, [rsi + rcx]"}),"."]})]})}function gM(){return l.jsxs(Se,{title:"Estruturas de Dados",subtitle:"Structs, unions, listas ligadas e como o compilador mapeia tipos compostos para memória.",difficulty:"avançado",timeToRead:"12 min",children:[l.jsx("h2",{children:"Structs em Assembly"}),l.jsx(M,{title:"Definindo structs com STRUC no NASM",language:"asm",code:`
; NASM oferece a diretiva STRUC para definir structs:
struc Pessoa
    .nome    resb 32    ; offset 0: char nome[32]
    .idade   resd 1     ; offset 32: int idade
    .altura  resd 1     ; offset 36: int altura
    .peso    resq 1     ; offset 40: double peso (8 bytes)
endstruc                ; tamanho total: 48 bytes (Pessoa_size)

; Instanciar struct na .data:
section .data
minha_pessoa:
    istruc Pessoa
        at Pessoa.nome,   db "Joao", 0, 0, 0, 0
        at Pessoa.idade,  dd 30
        at Pessoa.altura, dd 180
        at Pessoa.peso,   dq 75.5
    iend

; Instanciar struct na .bss (não inicializada):
section .bss
    outra_pessoa resb Pessoa_size   ; tamanho da struct
      `}),l.jsx("h2",{children:"Acessando Campos de Struct"}),l.jsx(M,{title:"Lendo e escrevendo campos",language:"asm",code:`
; RDI = ponteiro para uma Pessoa
section .text
    ; Ler pessoa.idade:
    mov eax, [rdi + Pessoa.idade]        ; eax = pessoa->idade

    ; Ler pessoa.nome (endereço):
    lea rsi, [rdi + Pessoa.nome]         ; rsi = &pessoa->nome

    ; Escrever pessoa.altura:
    mov dword ptr [rdi + Pessoa.altura], 175  ; pessoa->altura = 175

    ; Alternativa sem STRUC (offsets manuais):
    ; struct Pessoa { char nome[32]; int idade; int altura; double peso; }
    mov eax, [rdi + 32]   ; idade  (offset 32)
    mov eax, [rdi + 36]   ; altura (offset 36)
    movsd xmm0, [rdi + 40] ; peso  (offset 40, double)
      `}),l.jsx("h2",{children:"Alinhamento de Memória"}),l.jsx(M,{title:"Padding automático do compilador",language:"asm",code:`
; O compilador C insere padding para alinhar campos:
; struct S1 { char a; int b; char c; long d; };
; Tamanho real: 24 bytes (não 14!)

; Layout em memória com padding:
; Offset 0: char a (1 byte)
; Offset 1-3: PADDING (3 bytes para alinhar int a 4 bytes)
; Offset 4: int b (4 bytes)
; Offset 8: char c (1 byte)
; Offset 9-15: PADDING (7 bytes para alinhar long a 8 bytes)
; Offset 16: long d (8 bytes)
; Total: 24 bytes

; Struct otimizada (maior para menor):
; struct S2 { long d; int b; char a; char c; };
; Offset 0: long d (8 bytes)
; Offset 8: int b (4 bytes)
; Offset 12: char a (1 byte)
; Offset 13: char c (1 byte)
; Offset 14-15: PADDING (alinhamento de struct = 8 bytes)
; Total: 16 bytes ← mais compacto!

; Desabilitar padding com __attribute__((packed)) em GCC:
; Em Assembly, você controla totalmente — sem padding automático
struc S_packed
    .a  resb 1
    .b  resd 1
    .c  resb 1
    .d  resq 1
endstruc
; Offset .a=0, .b=1, .c=5, .d=6 — sem padding!
      `}),l.jsx("h2",{children:"Unions em Assembly"}),l.jsx(M,{title:"Unions — mesmo espaço, múltiplas interpretações",language:"asm",code:`
; Em C: union { int i; float f; unsigned char bytes[4]; };
; Em Assembly: todos os membros começam no offset 0

struc MinhaUnion
    .como_int   resd 1    ; mesmo espaço de 4 bytes
    ; .como_float = offset 0 também
endstruc

section .bss
minha_union resb MinhaUnion_size  ; 4 bytes

section .text
    ; Escrever como int:
    mov dword ptr [minha_union], 0x40490FDB  ; = 3.14159... em IEEE 754

    ; Ler como float (mesmo bytes, interpretação diferente):
    movss xmm0, [minha_union]   ; xmm0 = 3.14159...

    ; Ler como bytes individuais:
    mov al, [minha_union]       ; byte 0 (menos significativo)
    mov ah, [minha_union + 1]   ; byte 1
      `}),l.jsx("h2",{children:"Lista Ligada em Assembly"}),l.jsx(M,{title:"Linked list — percorrer nodos",language:"asm",code:`
; struct Nodo { long valor; struct Nodo *proximo; };

struc Nodo
    .valor    resq 1    ; offset 0: long valor (8 bytes)
    .proximo  resq 1    ; offset 8: ponteiro para próximo (8 bytes)
endstruc               ; Tamanho: 16 bytes

section .data
nodo3: dq 30, 0            ; {valor=30, proximo=NULL}
nodo2: dq 20, nodo3        ; {valor=20, proximo=&nodo3}
nodo1: dq 10, nodo2        ; {valor=10, proximo=&nodo2}

section .text
    ; Percorrer e somar todos os valores:
    lea rdi, [rel nodo1]   ; rdi = cabeça da lista
    xor rax, rax           ; rax = soma = 0

lista_loop:
    test rdi, rdi          ; proximo == NULL?
    jz lista_fim
    add rax, [rdi + Nodo.valor]      ; soma += nodo->valor
    mov rdi, [rdi + Nodo.proximo]    ; rdi = nodo->proximo
    jmp lista_loop

lista_fim:
; rax = 10 + 20 + 30 = 60
      `}),l.jsxs(se,{type:"warning",title:"Alinhamento afeta performance",children:["Estruturas de dados desalinhadas causam acessos de memória lentos e podem causar exceções em algumas arquiteturas. Mantenha campos de N bytes alinhados a N bytes: int a offset múltiplo de 4, long a offset múltiplo de 8, etc. Use ",l.jsx("code",{children:"align N"})," no NASM para alinhar labels de dados."]})]})}function bM(){return l.jsxs(Se,{title:"Syscalls Linux x64",subtitle:"Como se comunicar diretamente com o kernel Linux usando a instrução SYSCALL.",difficulty:"intermediário",timeToRead:"14 min",children:[l.jsxs(se,{type:"info",title:"O que é uma syscall?",children:["Uma system call (syscall) é a forma como programas em modo usuário (Ring 3) pedem serviços ao kernel (Ring 0): ler arquivos, escrever na tela, alocar memória, criar processos, etc. Em x64 Linux, a instrução ",l.jsx("code",{children:"SYSCALL"})," transfere o controle para o kernel."]}),l.jsx("h2",{children:"Convenção de Chamada de Syscall (x64 Linux)"}),l.jsx(M,{title:"Como chamar o kernel",language:"asm",code:`
; Registradores de syscall no x64 Linux:
; RAX = número da syscall
; RDI = 1º argumento
; RSI = 2º argumento
; RDX = 3º argumento
; R10 = 4º argumento  ← NOTA: R10, não RCX!
; R8  = 5º argumento
; R9  = 6º argumento

; Instrução para chamar o kernel:
syscall

; Valor de retorno: RAX
; Se RAX < 0 após syscall: errno = -RAX (erro)
; Se RAX >= 0: sucesso (valor específico de cada syscall)

; NOTA: RCX e R11 são DESTRUÍDOS pelo SYSCALL
; (o kernel usa SYSCALL/SYSRET que clobber RCX e R11)
      `}),l.jsx("h2",{children:"Tabela de Syscalls Essenciais"}),l.jsx("div",{className:"not-prose my-4 overflow-x-auto",children:l.jsxs("table",{className:"w-full text-sm border-collapse border border-border",children:[l.jsx("thead",{children:l.jsxs("tr",{className:"bg-muted text-xs uppercase tracking-wide text-muted-foreground",children:[l.jsx("th",{className:"border border-border px-3 py-2 text-left",children:"#"}),l.jsx("th",{className:"border border-border px-3 py-2 text-left",children:"Nome"}),l.jsx("th",{className:"border border-border px-3 py-2 text-left",children:"Assinatura"})]})}),l.jsx("tbody",{children:[["0","read","read(fd, buf, count)"],["1","write","write(fd, buf, count)"],["2","open","open(path, flags, mode)"],["3","close","close(fd)"],["9","mmap","mmap(addr, len, prot, flags, fd, off)"],["11","munmap","munmap(addr, len)"],["12","brk","brk(addr) — heap"],["22","pipe","pipe(pipefd)"],["39","getpid","getpid()"],["57","fork","fork()"],["59","execve","execve(path, argv, envp)"],["60","exit","exit(code)"],["61","wait4","wait4(pid, wstatus, options, rusage)"],["231","exit_group","exit_group(code) — encerra todos os threads"]].map(([a,o,n])=>l.jsxs("tr",{className:"hover:bg-accent/30",children:[l.jsx("td",{className:"border border-border px-3 py-2 font-mono text-primary font-bold text-xs",children:a}),l.jsx("td",{className:"border border-border px-3 py-2 font-mono text-xs",children:o}),l.jsx("td",{className:"border border-border px-3 py-2 text-xs text-muted-foreground",children:n})]},a))})]})}),l.jsx("h2",{children:"Exemplos de Syscalls"}),l.jsx(M,{title:"write — escrever na tela",language:"asm",code:`
; sys_write(fd=1, buf="Olá!
", len=5)
section .data
    msg db "Olá!", 10   ; 10 = newline
    len equ $ - msg

section .text
    mov rax, 1          ; syscall: write
    mov rdi, 1          ; fd: stdout (1)
    mov rsi, msg        ; buffer
    mov rdx, len        ; tamanho
    syscall
    ; rax = número de bytes escritos (ou < 0 para erro)
      `}),l.jsx(M,{title:"read — ler da entrada padrão",language:"asm",code:`
section .bss
    input_buf resb 256

section .text
    ; sys_read(fd=0, buf, count=256)
    mov rax, 0          ; syscall: read
    mov rdi, 0          ; fd: stdin (0)
    lea rsi, [input_buf]
    mov rdx, 256        ; ler até 256 bytes
    syscall
    ; rax = bytes lidos (0 = EOF, < 0 = erro)
      `}),l.jsx(M,{title:"open e close — arquivos",language:"asm",code:`
section .data
    nome_arquivo db "/tmp/teste.txt", 0

section .text
    ; sys_open(path, flags, mode)
    lea rdi, [rel nome_arquivo]
    mov rsi, 0x41     ; flags: O_WRONLY (1) | O_CREAT (0x40) = 0x41
    mov rdx, 0644o    ; mode: rw-r--r--
    mov rax, 2        ; syscall: open
    syscall
    ; rax = file descriptor (ou < 0 para erro)

    mov r15, rax      ; salvar fd

    ; Escrever no arquivo...
    mov rdi, r15
    lea rsi, [rel msg]
    mov rdx, len
    mov rax, 1
    syscall

    ; Fechar arquivo:
    mov rdi, r15
    mov rax, 3        ; syscall: close
    syscall
      `}),l.jsx(M,{title:"exit — encerrar programa",language:"asm",code:`
; sys_exit(código) — encerra apenas o thread atual
mov rdi, 0      ; código de saída (0 = sucesso)
mov rax, 60     ; syscall: exit
syscall

; sys_exit_group(código) — encerra todos os threads (mais correto)
mov rdi, 0
mov rax, 231    ; syscall: exit_group
syscall
      `}),l.jsx(M,{title:"fork + execve — criar processo",language:"asm",code:`
section .data
    prog_path db "/bin/ls", 0
    arg0      dq prog_path, 0   ; argv = ["/bin/ls", NULL]
    envp      dq 0              ; envp = [NULL]

section .text
    ; fork() → retorna 0 no filho, PID do filho no pai
    mov rax, 57        ; syscall: fork
    syscall

    test rax, rax
    jz processo_filho  ; rax == 0 → sou o filho

    ; Processo pai: aguarda filho
    ; ...

processo_filho:
    ; execve("/bin/ls", argv, envp)
    lea rdi, [rel prog_path]
    lea rsi, [rel arg0]
    lea rdx, [rel envp]
    mov rax, 59        ; syscall: execve
    syscall
    ; Se chegou aqui: erro no execve
    mov rdi, 1
    mov rax, 60
    syscall
      `}),l.jsx(se,{type:"warning",title:"R10 no lugar de RCX para syscalls",children:"A convenção de chamada de syscall usa R10 como 4º argumento, NÃO RCX como nas funções normais. Isso porque a instrução SYSCALL usa RCX internamente para salvar o RIP de retorno. Sempre use R10 para o 4º argumento de syscalls!"})]})}function vM(){return l.jsxs(Se,{title:"Interoperabilidade com C",subtitle:"Chamar funções C a partir de Assembly e escrever funções em Assembly chamadas por C.",difficulty:"intermediário",timeToRead:"12 min",children:[l.jsx("h2",{children:"Chamando Funções C de Assembly"}),l.jsx(M,{title:"Chamar printf, malloc e outras libc",language:"asm",code:`
; Para usar funções da libc, precisamos linkar com ela:
; nasm -f elf64 programa.asm -o programa.o
; gcc programa.o -o programa   ← usa gcc para linkar (não ld direto)

section .data
    fmt    db "Resultado: %ld
", 0
    prompt db "Digite um número: ", 0

section .text
    extern printf    ; declarar símbolos externos
    extern scanf
    extern malloc
    extern free
    global main      ; ponto de entrada quando linkado com libc

main:
    push rbp
    mov  rbp, rsp
    sub  rsp, 16     ; espaço para variável local + alinhamento

    ; printf("Resultado: %ld
", 42);
    lea  rdi, [rel fmt]
    mov  rsi, 42
    xor  eax, eax    ; 0 args XMM
    call printf

    ; malloc(256)
    mov  rdi, 256    ; tamanho
    call malloc
    ; rax = ponteiro alocado (ou NULL se falha)
    mov  [rsp], rax  ; salvar ponteiro

    ; free(ptr)
    mov  rdi, [rsp]
    call free

    ; return 0
    xor  eax, eax
    leave
    ret
      `}),l.jsx("h2",{children:"Escrevendo Funções Assembly para C"}),l.jsx(M,{title:"soma.asm — função chamada de C",language:"asm",code:`
; soma.asm — implementar em Assembly uma função chamada por C
; Assinatura C: long soma(long a, long b);

section .text
    global soma     ; exportar símbolo para o linker

soma:
    ; Seguir a ABI System V x64:
    ; RDI = a, RSI = b
    ; Retorno: RAX
    mov rax, rdi
    add rax, rsi
    ret

; Para usar em C:
; // main.c
; extern long soma(long a, long b);
; int main() {
;     printf("%ld
", soma(10, 20));  // → 30
; }

; Compilar:
; nasm -f elf64 soma.asm -o soma.o
; gcc main.c soma.o -o programa
; ./programa  → 30
      `}),l.jsx("h2",{children:"Exemplo Completo — strlen em Assembly"}),l.jsx(M,{title:"strlen.asm — mais rápido que a versão C",language:"asm",code:`
; size_t my_strlen(const char *s);
; Conta bytes até encontrar 0 (null terminator)

section .text
    global my_strlen

my_strlen:
    ; RDI = ponteiro para string
    xor  rax, rax        ; rax = comprimento = 0

strlen_loop:
    cmp  byte ptr [rdi + rax], 0   ; s[rax] == '\0'?
    je   strlen_done
    inc  rax
    jmp  strlen_loop

strlen_done:
    ret                  ; retorna comprimento em RAX

; Versão otimizada usando SCASB:
my_strlen_v2:
    lea  rdi, [rdi]      ; copia rdi (não destrói o ponteiro original)
    xor  rcx, rcx
    dec  rcx             ; rcx = 0xFFFFFFFFFFFFFFFF
    xor  al, al          ; buscar byte 0
    cld
    repne scasb          ; avança até encontrar 0
    not  rcx
    dec  rcx             ; rcx = comprimento
    mov  rax, rcx
    ret
      `}),l.jsx("h2",{children:"Inline Assembly em C (GCC/Clang)"}),l.jsx(M,{title:"asm volátil dentro de código C",language:"asm",code:`
// Em C com GCC, você pode embutir Assembly diretamente:

// Forma básica (cuidado — destruidor de registradores):
asm("nop");
asm("xor %eax, %eax");   // AT&T syntax no GCC

// Forma completa com restrições de operandos:
int resultado;
int a = 10, b = 20;
asm ("addl %2, %1"       // instrução: %1 += %2
     : "=r" (resultado)  // output: resultado em qualquer registrador
     : "0"  (a), "r" (b) // inputs: a no mesmo reg que resultado, b em qualquer reg
     : );                 // clobbers: nenhum

// Memória e registradores afetados:
asm volatile (
    "cpuid"              // CPUID clobbers EAX, EBX, ECX, EDX
    : "=a" (eax), "=b" (ebx), "=c" (ecx), "=d" (edx)
    : "a" (leaf_in)
    : );                 // restrições declaram os clobbers explicitamente

// asm volatile = não pode ser otimizado/reordenado pelo compilador
      `}),l.jsx("h2",{children:'Acessando C extern "C" de C++'}),l.jsx(M,{title:"Interop com C++ (name mangling)",language:"asm",code:`
// Em C++, funções têm "name mangling" — o símbolo no objeto é diferente:
// void soma(int,int) → _Z4somaII (nome mangled)

// Para usar Assembly com C++, exporte como C:
// // header.h
// #ifdef __cplusplus
// extern "C" {
// #endif
//     long soma(long a, long b);
// #ifdef __cplusplus
// }
// #endif

; Em Assembly, o símbolo já é sem mangling — funciona diretamente:
section .text
    global soma     ; símbolo "soma" (sem mangling) → extern "C" em C++

soma:
    mov rax, rdi
    add rax, rsi
    ret
      `}),l.jsxs(se,{type:"tip",title:"Use gcc para linkar (não ld diretamente)",children:["Quando seu Assembly chama funções da libc (printf, malloc, etc.), use",l.jsx("code",{children:"gcc arquivo.o -o programa"})," para linkar. O gcc adiciona automaticamente o código de inicialização da libc (crt1.o, crti.o, etc.) e o ponto de entrada correto. Se usar ",l.jsx("code",{children:"ld"})," diretamente, precisará de ",l.jsx("code",{children:"-lc"})," e outros flags manualmente."]})]})}function yM(){return l.jsxs(Se,{title:"Linking e Ligação",subtitle:"Arquivos objeto, símbolos, ligação estática e dinâmica, e o processo de criação de executáveis.",difficulty:"avançado",timeToRead:"12 min",children:[l.jsx("h2",{children:"O Processo de Build"}),l.jsx(M,{title:"Assembly → Objeto → Executável",language:"bash",code:`
# Passo 1: Assembler — .asm → .o (arquivo objeto)
nasm -f elf64 -g programa.asm -o programa.o
# -f elf64: formato ELF de 64 bits (Linux)
# -g: inclui informações de debug (símbolos DWARF)

# Passo 2: Linker — .o → executável
ld programa.o -o programa
# Ou com libc:
gcc programa.o -o programa

# Para múltiplos arquivos objeto:
nasm -f elf64 main.asm -o main.o
nasm -f elf64 utils.asm -o utils.o
ld main.o utils.o -o programa

# Com bibliotecas estáticas:
ld main.o utils.o -L/usr/lib -lm -o programa  # -lm = libm.a
      `}),l.jsx("h2",{children:"Símbolos: global e extern"}),l.jsx(M,{title:"Exportar e importar símbolos",language:"asm",code:`
; arquivo1.asm — exporta símbolos:
global minha_funcao    ; torna o símbolo visível para outros objetos
global minha_var

section .data
    minha_var dq 42

section .text
minha_funcao:
    mov rax, [rel minha_var]
    ret

; arquivo2.asm — importa símbolos:
extern minha_funcao    ; símbolo vem de outro objeto
extern minha_var       ; variável de outro objeto

section .text
    global _start
_start:
    call minha_funcao   ; linker resolve o endereço
    mov rax, [rel minha_var]
    ; ...
      `}),l.jsx("h2",{children:"Formato ELF"}),l.jsx(M,{title:"Inspecionar arquivo objeto com objdump/readelf",language:"bash",code:`
# Ver seções do arquivo objeto:
readelf -S programa.o

# Ver símbolos:
nm programa.o
# T = text (código), D = data, B = bss, U = undefined (extern)

# Disassembly:
objdump -d programa.o          # disassembly básico
objdump -d -M intel programa   # disassembly com sintaxe Intel

# Ver relocations (referências não resolvidas):
readelf -r programa.o

# Ver cabeçalho ELF:
readelf -h programa
      `}),l.jsx("h2",{children:"Ligação Dinâmica (Shared Libraries)"}),l.jsx(M,{title:"Criar e usar shared library (.so)",language:"bash",code:`
# Criar shared library:
nasm -f elf64 -fPIC minha_lib.asm -o minha_lib.o   # PIC = Position Independent Code
gcc -shared minha_lib.o -o libminha.so              # gera .so

# Usar shared library:
gcc main.c -L. -lminha -Wl,-rpath,. -o programa
# -L. = buscar .so no diretório atual
# -lminha = linkar com libminha.so
# -Wl,-rpath,. = adicionar . ao rpath (busca em tempo de execução)

# Ver dependências dinâmicas de um executável:
ldd programa
# linux-vdso.so.1 => (0x00007ffd...)
# libminha.so => ./libminha.so (0x...)
# libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6
      `}),l.jsx("h2",{children:"Ligação Estática"}),l.jsx(M,{title:"Criar binário sem dependências dinâmicas",language:"bash",code:`
# Criar biblioteca estática (.a):
ar rcs libminha.a minha_lib.o

# Usar biblioteca estática:
gcc main.o -L. -l:libminha.a -static -o programa
# -static: linkar tudo estaticamente (incluindo libc!)

# Executável estático não tem dependências:
ldd programa
# not a dynamic executable

# Tamanho maior, mas portável para qualquer sistema Linux x86_64
      `}),l.jsx("h2",{children:"Scripts de Linker"}),l.jsx(M,{title:"Controlar layout da memória com LD scripts",language:"bash",code:`
/* linker.ld — script de linker personalizado */
SECTIONS {
    . = 0x400000;                  /* endereço inicial */

    .text : {
        *(.text._start)            /* _start primeiro */
        *(.text*)                  /* todo código */
    }

    . = ALIGN(4096);               /* alinhar a página */
    .data : {
        *(.data*)
        *(.rodata*)
    }

    . = ALIGN(4096);
    .bss : {
        *(.bss*)
        *(COMMON)
    }
}

; Usar o script:
; ld -T linker.ld programa.o -o programa
      `}),l.jsxs(se,{type:"info",title:"PLT e GOT — tabelas de ligação dinâmica",children:["Quando seu programa chama ",l.jsx("code",{children:"printf"})," (função da libc), o linker cria uma entrada na ",l.jsx("strong",{children:"PLT"})," (Procedure Linkage Table) e na ",l.jsx("strong",{children:"GOT"})," (Global Offset Table). Na primeira chamada, o linker dinâmico resolve o endereço real e atualiza a GOT — chamadas subsequentes usam o endereço cacheado diretamente. Isso é chamado de ",l.jsx("em",{children:"lazy binding"}),"."]})]})}function SM(){return l.jsxs(Se,{title:"FPU — Ponto Flutuante",subtitle:"A unidade de ponto flutuante x87 e as instruções SSE para float e double.",difficulty:"avançado",timeToRead:"12 min",children:[l.jsxs(se,{type:"info",title:"x87 FPU vs SSE",children:["Existem duas formas de fazer aritmética de ponto flutuante em x86: a FPU x87 clássica (baseada em pilha de 80 bits) e as instruções SSE/SSE2 modernas (baseadas em registradores XMM). Em código moderno, ",l.jsx("strong",{children:"use SSE/SSE2"})," — são mais rápidas e previsíveis. A FPU x87 ainda é necessária para precisão de 80 bits e compatibilidade com código antigo."]}),l.jsx("h2",{children:"SSE — Float de 32 bits (Single Precision)"}),l.jsx(M,{title:"Operações com float (32 bits)",language:"asm",code:`
; Sufixos SSE:
; SS = Scalar Single (1 float de 32 bits)
; PS = Packed Single (4 floats de 32 bits no XMM)

section .data
    fa dq 3.14        ; float 32 bits em .data (usar dd para float)
    fb dd 2.0

section .text
    ; Carregar float em XMM:
    movss xmm0, [fa]       ; xmm0 = 3.14 (32 bits)
    movss xmm1, [fb]       ; xmm1 = 2.0

    ; Operações escalares:
    addss xmm0, xmm1       ; xmm0 = 3.14 + 2.0 = 5.14
    subss xmm0, xmm1       ; xmm0 = 5.14 - 2.0 = 3.14
    mulss xmm0, xmm1       ; xmm0 = 3.14 * 2.0 = 6.28
    divss xmm0, xmm1       ; xmm0 = 3.14 / 2.0 = 1.57
    sqrtss xmm0, xmm0      ; xmm0 = sqrt(1.57)

    ; Comparação de floats:
    ucomiss xmm0, xmm1     ; compara xmm0 com xmm1 (unordered compare)
    ja  maior              ; salta se xmm0 > xmm1

    ; Converter int → float:
    mov eax, 42
    cvtsi2ss xmm2, eax     ; xmm2 = 42.0 (int → float)

    ; Converter float → int (com truncamento):
    cvttss2si eax, xmm0    ; eax = (int)xmm0 (trunca)
    cvtss2si eax, xmm0     ; eax = round(xmm0) (arredonda)

    ; Salvar float em memória:
    movss [fa], xmm0
      `}),l.jsx("h2",{children:"SSE2 — Double de 64 bits"}),l.jsx(M,{title:"Operações com double (64 bits)",language:"asm",code:`
; SD = Scalar Double (1 double de 64 bits)
; PD = Packed Double (2 doubles de 64 bits no XMM)

section .data
    da dq 3.141592653589793   ; double (64 bits)
    db_ dq 2.718281828459045  ; double — outro valor

section .text
    movsd xmm0, [da]     ; xmm0 = pi
    movsd xmm1, [db_]    ; xmm1 = e

    addsd xmm0, xmm1     ; xmm0 = pi + e
    subsd xmm0, xmm1     ; xmm0 = pi + e - e = pi
    mulsd xmm0, xmm1     ; xmm0 = pi * e
    divsd xmm0, xmm1     ; xmm0 = pi * e / e = pi
    sqrtsd xmm0, xmm0    ; xmm0 = sqrt(pi)

    ; Converter int64 → double:
    mov rax, 100
    cvtsi2sd xmm2, rax   ; xmm2 = 100.0

    ; Converter double → int64:
    cvttsd2si rax, xmm0  ; rax = (int64_t)xmm0 (trunca)
    cvtsd2si  rax, xmm0  ; rax = round(xmm0)

    ; Converter float ↔ double:
    cvtss2sd xmm0, xmm0  ; float → double
    cvtsd2ss xmm0, xmm0  ; double → float
      `}),l.jsx("h2",{children:"FPU x87 (Clássica)"}),l.jsx(M,{title:"FPU x87 — pilha de 80 bits",language:"asm",code:`
; A FPU x87 usa uma pilha de 8 registradores de 80 bits: ST(0) a ST(7)
; ST(0) = topo da pilha

section .data
    val1 dq 3.14       ; double na memória
    val2 dq 2.71

section .text
    ; Carregar valores na pilha FPU:
    fld qword ptr [val1]   ; ST(0) = val1 (push na pilha FPU)
    fld qword ptr [val2]   ; ST(0) = val2, ST(1) = val1

    ; Operações:
    fadd               ; ST(0) = ST(0) + ST(1) → ST(0) = val1 + val2, pop
    ; ou fadd ST(0), ST(1)  ; sem pop

    fmul qword ptr [val2]  ; ST(0) *= val2

    ; Salvar resultado:
    fstp qword ptr [resultado]   ; pop ST(0) para memória

    ; Funções transcendentais (só x87 tem esses!):
    fldpi              ; ST(0) = pi (constante interna da FPU!)
    fsin               ; ST(0) = sin(ST(0)) = sin(pi) ≈ 0
    fcos               ; ST(0) = cos(ST(0))

    ; Carregar constantes x87:
    fldpi              ; pi
    fld1               ; 1.0
    fldz               ; 0.0
    fldl2t             ; log2(10)
    fldl2e             ; log2(e)
    fldlg2             ; log10(2)
    fldln2             ; ln(2)
      `}),l.jsx("h2",{children:"Arredondamento e Controle de Precisão"}),l.jsx(M,{title:"MXCSR e modos de arredondamento",language:"asm",code:`
; Modos de arredondamento (SSE — via MXCSR):
; RC = bits [13:14] do MXCSR:
; 00 = Round to Nearest (padrão — round half to even)
; 01 = Round Down (toward -∞, floor)
; 10 = Round Up (toward +∞, ceil)
; 11 = Round toward Zero (truncate)

; Configurar arredondamento para truncar (Round toward Zero):
stmxcsr [mxcsr_save]      ; salvar MXCSR atual
mov eax, [mxcsr_save]
or  eax, 0b11 << 13       ; ligar bits RC = 11 (truncate)
and eax, ~(1 << 12)       ; clarify: 0b11 << 13 = 0x6000
mov [mxcsr_new], eax
ldmxcsr [mxcsr_new]       ; carregar novo MXCSR

; Usando VROUNDSS/VROUNDSD (AVX) para arredondamento explícito:
; vroundss xmm0, xmm0, xmm0, 1  ; 1 = floor
; vroundss xmm0, xmm0, xmm0, 2  ; 2 = ceil
; vroundss xmm0, xmm0, xmm0, 3  ; 3 = truncate
      `}),l.jsx(se,{type:"warning",title:"Nunca compare floats com == em código crítico",children:"Ponto flutuante tem erros de arredondamento. Em Assembly, compare com uma margem de tolerância: calcule |a - b| e verifique se é menor que epsilon (ex: 1e-9). Alternativamente, trabalhe com inteiros sempre que possível."})]})}function jM(){return l.jsxs(Se,{title:"SSE e SIMD",subtitle:"Operações vetoriais — processar múltiplos valores simultaneamente com SSE, SSE2, AVX e AVX2.",difficulty:"avançado",timeToRead:"14 min",children:[l.jsxs(se,{type:"info",title:"O que é SIMD?",children:["SIMD (Single Instruction, Multiple Data) permite que ",l.jsx("strong",{children:"uma instrução"})," processe múltiplos dados simultaneamente. Com SSE (128 bits), você pode somar 4 floats de uma vez. Com AVX (256 bits), pode somar 8 floats. Com AVX-512 (512 bits), 16 floats!"]}),l.jsx("h2",{children:"Registradores XMM / YMM / ZMM"}),l.jsx("div",{className:"not-prose my-4 space-y-2",children:[{reg:"XMM0-XMM15",bits:"128 bits",uso:"SSE, SSE2, SSE3, SSE4 — 4×float ou 2×double ou 16×byte"},{reg:"YMM0-YMM15",bits:"256 bits",uso:"AVX, AVX2 — 8×float ou 4×double ou 32×byte"},{reg:"ZMM0-ZMM31",bits:"512 bits",uso:"AVX-512 — 16×float ou 8×double ou 64×byte"}].map(({reg:a,bits:o,uso:n})=>l.jsxs("div",{className:"flex gap-3 p-3 border border-border rounded-lg",children:[l.jsx("span",{className:"font-mono text-primary text-sm w-32 shrink-0",children:a}),l.jsx("span",{className:"text-xs bg-accent/50 text-accent-foreground px-1.5 py-0.5 rounded h-fit shrink-0",children:o}),l.jsx("span",{className:"text-xs text-muted-foreground",children:n})]},a))}),l.jsx("h2",{children:"SSE — Operações Vetoriais com Float"}),l.jsx(M,{title:"4 floats em paralelo com SSE",language:"asm",code:`
; PS = Packed Single (4 floats de 32 bits por XMM)

section .data
    ; Arrays de floats alinhados a 16 bytes:
    align 16
    a_arr  dd 1.0, 2.0, 3.0, 4.0    ; 4 floats
    b_arr  dd 5.0, 6.0, 7.0, 8.0    ; 4 floats
    c_arr  dd 0.0, 0.0, 0.0, 0.0    ; resultado

section .text
    ; Carregar 4 floats de uma vez:
    movaps xmm0, [a_arr]   ; xmm0 = {1.0, 2.0, 3.0, 4.0} (aligned)
    movaps xmm1, [b_arr]   ; xmm1 = {5.0, 6.0, 7.0, 8.0}

    ; Operações vetoriais (todas as 4 de uma vez!):
    addps xmm0, xmm1       ; xmm0 = {6.0, 8.0, 10.0, 12.0}
    subps xmm0, xmm1       ; xmm0 = {1.0, 2.0, 3.0, 4.0} (restaurado)
    mulps xmm0, xmm1       ; xmm0 = {5.0, 12.0, 21.0, 32.0}
    divps xmm0, xmm1       ; xmm0 = {1.0, 2.0, 3.0, 4.0}
    sqrtps xmm0, xmm0      ; xmm0 = {1.0, 1.41, 1.73, 2.0}

    ; Salvar resultado:
    movaps [c_arr], xmm0   ; aligned store

    ; MOVUPS = unaligned (mais lento):
    movups xmm2, [a_arr + 2]  ; carga não alinhada
      `}),l.jsx("h2",{children:"SSE2 — Inteiros em Vetores"}),l.jsx(M,{title:"Operações vetoriais com inteiros",language:"asm",code:`
; SSE2 suporta inteiros de 8, 16, 32 e 64 bits em XMM

; 16 bytes (chars) de uma vez:
movdqu xmm0, [string_src]   ; carregar 16 bytes não alinhados
; Converter maiúsculas para minúsculas (adicionar 32 a letras):
movdqa xmm1, [mask_32]      ; xmm1 = {32, 32, 32, ..., 32} (16 vezes)
paddb  xmm0, xmm1           ; adicionar 32 a cada byte (PADDB = packed add bytes)
movdqu [string_dst], xmm0   ; salvar 16 bytes

; 4 inteiros de 32 bits de uma vez:
movdqu xmm0, [int_arr1]     ; carrega 4 ints
movdqu xmm1, [int_arr2]
paddd  xmm0, xmm1           ; soma 4 inteiros em paralelo (PADDD = packed add dwords)
psubd  xmm0, xmm1           ; subtrai 4 inteiros
pmulld xmm0, xmm1           ; multiplica 4 inteiros (SSE4.1)

; Saturação (resultado não estoura, fica no limite):
paddsb xmm0, xmm1   ; soma com saturação para signed bytes [-128, 127]
paddusb xmm0, xmm1  ; soma com saturação para unsigned bytes [0, 255]
      `}),l.jsx("h2",{children:"AVX — 8 Floats em Paralelo"}),l.jsx(M,{title:"AVX — registradores de 256 bits",language:"asm",code:`
; AVX usa prefixo VEX — instruções começam com V
; YMM = 256 bits = 8 floats ou 4 doubles

section .data
    align 32                         ; alinhar a 32 bytes para AVX
    a8    dd 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0
    b8    dd 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0

section .text
    vmovaps ymm0, [a8]               ; carregar 8 floats (256 bits)
    vmovaps ymm1, [b8]

    vaddps  ymm0, ymm0, ymm1         ; somar 8 floats de uma vez!
    vmulps  ymm0, ymm0, ymm1         ; multiplicar 8 floats
    vsqrtps ymm0, ymm0               ; raiz quadrada de 8 floats

    ; AVX — forma não destrutiva (3 operandos):
    vaddps ymm2, ymm0, ymm1          ; ymm2 = ymm0 + ymm1 (ymm0 não muda!)
    ; Diferente de SSE: addps xmm0, xmm1  (modifica xmm0)

    ; Limpar estado AVX (evitar penalidade de transição AVX/SSE):
    vzeroupper    ; zera bits 128-255 de YMM0-YMM15 (obrigatório antes de código SSE!)
      `}),l.jsx("h2",{children:"Shuffle e Permutação"}),l.jsx(M,{title:"Reorganizar elementos de vetores",language:"asm",code:`
; SHUFPS — embaralhar 4 floats
; Imediato de 8 bits define a permutação de cada posição

movaps xmm0, [dados]      ; xmm0 = {a, b, c, d}

; Exemplo: reverter a ordem → {d, c, b, a}
shufps xmm0, xmm0, 0b00011011  ; 0x1B
; bits 7:6 = 00 → destino[3] = src[0] = a
; bits 5:4 = 01 → destino[2] = src[1] = b
; bits 3:2 = 10 → destino[1] = src[2] = c
; bits 1:0 = 11 → destino[0] = src[3] = d

; PSHUFD — embaralhar 4 inteiros de 32 bits
movdqu xmm1, [int_dados]
pshufd xmm1, xmm1, 0x1B    ; reverter ordem dos 4 ints

; PUNPCKLBW — intercalar bytes de dois registradores
; Muito útil para converter de 8 para 16 bits
pxor   xmm1, xmm1          ; xmm1 = zeros
movdqu xmm0, [bytes]        ; xmm0 = 16 bytes
punpcklbw xmm0, xmm1        ; intercalar com zeros → 8 words de 16 bits
      `}),l.jsx("h2",{children:"Comparações Vetoriais"}),l.jsx(M,{title:"Máscaras de comparação",language:"asm",code:`
; Comparações SSE retornam máscaras de bits (todos 1 = verdadeiro, 0 = falso)
movaps xmm0, [a_arr]      ; {1.0, 5.0, 3.0, 7.0}
movaps xmm1, [b_arr]      ; {4.0, 5.0, 2.0, 8.0}

cmpps  xmm0, xmm1, 1      ; 1 = less than: xmm0 = {0xFF..., 0x0, 0x0, 0xFF...}
                           ; resultado: máscara onde a < b

; Aplicar máscara para selecionar:
; min(a, b) vetorial:
movaps xmm2, [a_arr]
minps  xmm2, xmm1         ; xmm2 = {min(a[i], b[i])} — instrução específica!
; max(a, b):
movaps xmm3, [a_arr]
maxps  xmm3, xmm1         ; xmm3 = {max(a[i], b[i])}

; Mover elementos com máscara (blendv — AVX):
; vblendvps ymm0, ymm1, ymm2, ymm3  ; ymm0[i] = ymm3[i] > 0 ? ymm2[i] : ymm1[i]
      `}),l.jsxs(se,{type:"warning",title:"Vzeroupper antes de misturar SSE e AVX",children:["Ao usar código AVX (instruções ymm/vmovaps/etc.) e depois chamar funções que usam SSE (xmm sem prefixo V), você DEVE executar ",l.jsx("code",{children:"vzeroupper"})," antes. Sem isso, a CPU entra em estado de transição AVX/SSE que causa penalidades de desempenho massivas (dezenas de ciclos por instrução!)."]})]})}function AM(){return l.jsxs(Se,{title:"Otimização",subtitle:"Técnicas avançadas para escrever código Assembly mais rápido — latência, throughput, pipeline e cache.",difficulty:"avançado",timeToRead:"15 min",children:[l.jsx("h2",{children:"Latência vs Throughput"}),l.jsx("p",{children:"Cada instrução tem dois tempos importantes:"}),l.jsxs("ul",{children:[l.jsxs("li",{children:[l.jsx("strong",{children:"Latência"})," — quantos ciclos até o resultado estar disponível"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Throughput reciproco"})," — quantos ciclos entre emissões se houver dependências diferentes"]})]}),l.jsx("div",{className:"not-prose my-4 overflow-x-auto",children:l.jsxs("table",{className:"w-full text-sm border-collapse border border-border",children:[l.jsx("thead",{children:l.jsxs("tr",{className:"bg-muted text-xs uppercase tracking-wide text-muted-foreground",children:[l.jsx("th",{className:"border border-border px-3 py-2 text-left",children:"Instrução"}),l.jsx("th",{className:"border border-border px-3 py-2 text-left",children:"Latência"}),l.jsx("th",{className:"border border-border px-3 py-2 text-left",children:"Throughput"})]})}),l.jsx("tbody",{children:[["ADD, SUB, AND, OR","1 ciclo","0.25 ciclo"],["IMUL r64, r64","3 ciclos","1 ciclo"],["DIV r64","35-90 ciclos","21-74 ciclos"],["ADDSS, MULSS (SSE)","4-5 ciclos","0.5 ciclo"],["L1 Cache read","4 ciclos","0.5 ciclo"],["L2 Cache read","12 ciclos","—"],["L3 Cache read","40 ciclos","—"],["RAM read","200+ ciclos","—"]].map(([a,o,n])=>l.jsxs("tr",{className:"hover:bg-accent/30",children:[l.jsx("td",{className:"border border-border px-3 py-2 font-mono text-primary text-xs",children:a}),l.jsx("td",{className:"border border-border px-3 py-2 text-xs",children:o}),l.jsx("td",{className:"border border-border px-3 py-2 text-xs text-muted-foreground",children:n})]},a))})]})}),l.jsx("h2",{children:"Evitar Dependências de Dados"}),l.jsx(M,{title:"Chain de dependências vs instruções independentes",language:"asm",code:`
; LENTO — cadeia de dependências (cada instrução espera a anterior):
mov rax, 1
add rax, rbx       ; espera rax do mov
add rax, rcx       ; espera rax do add anterior
add rax, rdx       ; espera rax do add anterior
; Cada add tem latência de 1 ciclo → total: 4 ciclos sequenciais

; RÁPIDO — sum tree (instruções independentes em paralelo):
lea rax, [rbx + rcx]    ; rax = rbx + rcx  (independente de rdx)
add rax, rdx            ; rax += rdx (pode sobrepor com a linha acima)
add rax, 1              ; soma o valor constante
; CPUs superscalares executam linhas independentes em paralelo!

; Exemplo: somar 4 valores independentemente:
; Ruim:
add rax, rbx
add rax, rcx
add rax, rdx

; Bom:
add rbx, rcx       ; parcial 1 (independente de rdx e rax)
add rax, rdx       ; parcial 2 (independente de rbx e rcx)
add rax, rbx       ; combina (usa resultados de ambas as parciais)
      `}),l.jsx("h2",{children:"Zero Idioms — Quebrar Dependências"}),l.jsx(M,{title:"Instruções que quebram dependências",language:"asm",code:`
; Algumas instruções são reconhecidas pelo hardware como "zero-idiom"
; e não dependem do valor atual do registrador:

xor eax, eax       ; eax = 0 (SEM dependência de eax! 0 ciclos de latência)
sub eax, eax       ; eax = 0 (igual — zero idiom reconhecido)
pxor xmm0, xmm0   ; xmm0 = 0 (zero idiom para XMM)

; Versus:
mov eax, 0         ; eax = 0 MAS tem dependência lida do imediato (encode maior)
mov rax, 0         ; 7 bytes (MUITO maior que xor eax,eax = 2 bytes)

; SETcc com XOR antes para quebrar dependência falsa:
xor eax, eax       ; zerar primeiro (quebra falsa dependência de AL)
cmp rcx, rdx
sete al            ; AL = 0 ou 1
; Sem xor: sete al teria dependência falsa de todo EAX
      `}),l.jsx("h2",{children:"Otimizações de Loop"}),l.jsx(M,{title:"Técnicas para loops mais rápidos",language:"asm",code:`
; 1. Contagem regressiva (compara com zero — mais eficiente):
; Ruim:
mov rcx, 0
loop_bad:
    cmp rcx, 100
    jge loop_end
    ; ...
    inc rcx
    jmp loop_bad

; Bom (compara com zero implicitamente com DEC):
mov rcx, 100
loop_good:
    ; ...
    dec rcx
    jnz loop_good

; 2. Unrolling — reduz overhead do contador:
mov rcx, n
shr rcx, 2         ; rcx = n/4 (processar 4 por iteração)
loop_unroll:
    ; processamento 1
    ; processamento 2
    ; processamento 3
    ; processamento 4
    dec rcx
    jnz loop_unroll

; 3. Loop pipelining — intercalar instrução de memória com cálculo:
; Enquanto CPU calcula, unidade de memória carrega próximo elemento
loop_pipeline:
    prefetcht0 [rsi + 256]    ; pré-carregar 256 bytes à frente
    movaps xmm0, [rsi]        ; carregar dado atual
    addps xmm0, xmm1          ; processar
    movaps [rdi], xmm0        ; salvar resultado
    add rsi, 16
    add rdi, 16
    dec rcx
    jnz loop_pipeline
      `}),l.jsx("h2",{children:"Alinhamento de Código e Dados"}),l.jsx(M,{title:"Alinhamento para performance",language:"asm",code:`
; Alinhar loops ao início de uma linha de cache (64 bytes):
align 64
meu_loop_critico:
    ; corpo do loop

; Alinhar dados para SSE (16 bytes) e AVX (32 bytes):
section .data
    align 16
    floats_sse dd 1.0, 2.0, 3.0, 4.0    ; alinhado para MOVAPS
    align 32
    floats_avx dd 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0  ; VMOVAPS

; Sem alinhamento: MOVUPS (lento), com alinhamento: MOVAPS (rápido)

; NOP pads para alinhar instruções:
align 16        ; NASM gera NOPs para preencher até alinhamento de 16
funcao_quente:
    ; código aqui começando em endereço múltiplo de 16
      `}),l.jsx("h2",{children:"Branchless Programming"}),l.jsx(M,{title:"Evitar branches com CMOV e truques",language:"asm",code:`
; Branchful (pode causar misprediction):
cmp rax, rbx
jl use_b
    mov rcx, rax
    jmp done
use_b:
    mov rcx, rbx
done:

; Branchless com CMOV:
mov rcx, rax
cmp rax, rbx
cmovl rcx, rbx     ; rcx = (rax < rbx) ? rbx : rax = max(rax, rbx)

; Min/Max branchless:
; min(a, b) = b + (a-b) & ((a-b) >> 63)  — truque de bit manipulation
; Mas CMOV é geralmente mais claro e igualmente rápido

; Branchless com aritmética:
; if (cond) x += y
cmp rax, 0         ; define ZF
setz al            ; al = (rax == 0) ? 1 : 0
movzx rax, al      ; rax = 0 ou 1
imul rax, rcx      ; rax = cond * y
add rbx, rax       ; x += cond * y  (sem branch!)
      `}),l.jsxs(se,{type:"tip",title:"Meça antes de otimizar",children:["Use RDTSC e perf para medir o código real. Otimizações que parecem óbvias muitas vezes não fazem diferença, e às vezes tornam o código mais lento devido a efeitos de cache, alinhamento, ou interferência com o otimizador do compilador. Ferramentas úteis: ",l.jsx("strong",{children:"perf"}),", ",l.jsx("strong",{children:"Intel VTune"}),", ",l.jsx("strong",{children:"Agner Fog's instruction tables"}),"."]})]})}function EM(){return l.jsxs(Se,{title:"Hello World Completo",subtitle:"Um Hello World completo com todas as variações — puro, com printf e com argumentos da linha de comando.",difficulty:"iniciante",timeToRead:"15 min",children:[l.jsx("h2",{children:"Versão 1 — Syscall Pura (sem libc)"}),l.jsx(M,{title:"hello_pure.asm",language:"asm",code:`
; Objetivo: Imprimir "Olá, Mundo!" sem usar nenhuma biblioteca
; Apenas syscalls Linux x64

section .data
    msg db "Olá, Mundo!", 10    ; 10 = newline (
)
    len equ $ - msg             ; calcular comprimento automaticamente

section .text
    global _start               ; ponto de entrada para o linker

_start:
    ; Syscall write(stdout, msg, len)
    mov rax, 1          ; número da syscall: sys_write = 1
    mov rdi, 1          ; fd: 1 = stdout
    mov rsi, msg        ; ponteiro para a mensagem
    mov rdx, len        ; comprimento em bytes
    syscall             ; chamar kernel

    ; Syscall exit(0)
    mov rax, 60         ; número da syscall: sys_exit = 60
    xor rdi, rdi        ; código de saída: 0
    syscall

; Compilar e executar:
; nasm -f elf64 hello_pure.asm -o hello_pure.o
; ld hello_pure.o -o hello_pure
; ./hello_pure
; Saída: Olá, Mundo!
      `}),l.jsx("h2",{children:"Versão 2 — Usando printf da libc"}),l.jsx(M,{title:"hello_printf.asm",language:"asm",code:`
; Usando printf — requer libc (linkar com gcc)

section .data
    fmt db "Olá, %s! Você tem %d anos.", 10, 0    ; format string com \0
    nome db "Mundo", 0

section .text
    extern printf           ; importar de libc
    global main             ; gcc usa 'main' como ponto de entrada

main:
    push rbp
    mov  rbp, rsp
    and  rsp, ~0xF          ; garantir alinhamento a 16 bytes

    ; printf(fmt, nome, 2025)
    lea  rdi, [rel fmt]     ; 1º arg: formato
    lea  rsi, [rel nome]    ; 2º arg: nome (string)
    mov  rdx, 2025          ; 3º arg: ano
    xor  eax, eax           ; 0 argumentos XMM (obrigatório para variádicas!)
    call printf

    ; return 0
    xor  eax, eax
    leave
    ret

; Compilar:
; nasm -f elf64 hello_printf.asm -o hello_printf.o
; gcc hello_printf.o -o hello_printf
; ./hello_printf
; Saída: Olá, Mundo! Você tem 2025 anos.
      `}),l.jsx("h2",{children:"Versão 3 — Lendo Argumentos da Linha de Comando"}),l.jsx(M,{title:"hello_args.asm",language:"asm",code:`
; Processar argc e argv da linha de comando

; Quando main() é chamado pelo CRT, a pilha contém:
; [rsp]    = argc
; [rsp+8]  = argv[0] (nome do programa)
; [rsp+16] = argv[1] (primeiro argumento)
; etc.

section .data
    uso    db "Uso: programa <nome>", 10, 0
    ola    db "Olá, ", 0
    exc    db "!", 10, 0

section .text
    extern printf
    extern strlen
    global main

main:
    push rbp
    mov  rbp, rsp

    ; rdi = argc, rsi = argv
    cmp  rdi, 2                 ; argc < 2?
    jge  tem_argumento

    ; Sem argumento: mostrar mensagem de uso
    lea  rdi, [rel uso]
    xor  eax, eax
    call printf
    mov  eax, 1                 ; return 1 (erro)
    leave
    ret

tem_argumento:
    ; argv[1] = nome fornecido
    mov  r12, rsi               ; salvar argv
    mov  rbx, [rsi + 8]        ; rbx = argv[1] (ponteiro para string)

    ; Imprimir "Olá, " + nome + "!"
    lea  rdi, [rel ola]
    xor  eax, eax
    call printf

    mov  rdi, rbx               ; imprimir o nome
    xor  eax, eax
    call printf

    lea  rdi, [rel exc]
    xor  eax, eax
    call printf

    xor  eax, eax               ; return 0
    leave
    ret

; Uso:
; nasm -f elf64 hello_args.asm -o hello_args.o
; gcc hello_args.o -o hello_args
; ./hello_args Assembly
; Saída: Olá, Assembly!
      `}),l.jsx("h2",{children:"Versão 4 — Múltiplas Linhas com Loop"}),l.jsx(M,{title:"hello_loop.asm",language:"asm",code:`
; Imprimir 10 linhas com contador

section .data
    fmt db "Linha %d de 10", 10, 0

section .text
    extern printf
    global main

main:
    push rbp
    mov  rbp, rsp
    push rbx               ; salvar registrador callee-saved

    mov  rbx, 1            ; contador = 1

loop_principal:
    cmp  rbx, 11           ; contador > 10?
    jge  loop_fim

    ; printf("Linha %d de 10
", contador)
    lea  rdi, [rel fmt]
    mov  rsi, rbx
    xor  eax, eax
    call printf

    inc  rbx               ; contador++
    jmp  loop_principal

loop_fim:
    pop rbx
    xor eax, eax
    leave
    ret

; Saída:
; Linha 1 de 10
; Linha 2 de 10
; ...
; Linha 10 de 10
      `}),l.jsx("h2",{children:"Verificando o Executável"}),l.jsx(M,{title:"Inspecionar o binário gerado",language:"bash",code:`
# Verificar símbolos do executável:
nm hello_pure | head -20
# 0000000000401000 T _start

# Ver seções:
readelf -S hello_pure

# Disassembly completo:
objdump -d -M intel hello_pure

# Ver dependências dinâmicas (puro = nenhuma):
ldd hello_pure
# not a dynamic executable

# Tamanho do executável:
ls -la hello_pure hello_printf
# hello_pure é muito menor (sem libc!)

# Executar com strace para ver syscalls:
strace ./hello_pure
# write(1, "Olá, Mundo!
", 13) = 13
# exit(0)  = ?
      `}),l.jsxs(se,{type:"tip",title:"Menor executável possível",children:["O executável gerado pelo ",l.jsx("code",{children:"hello_pure.asm"})," tem menos de 1 KB. Um programa C equivalente com ",l.jsx("code",{children:"printf"})," teria vários KB a mais devido ao código de inicialização da libc. Assembly puro permite criar executáveis extremamente compactos."]})]})}function RM(){return l.jsxs(Se,{title:"Calculadora",subtitle:"Uma calculadora em Assembly com operações básicas, entrada do usuário e tratamento de erros.",difficulty:"intermediário",timeToRead:"18 min",children:[l.jsx(se,{type:"info",title:"Projeto completo",children:"Este exemplo implementa uma calculadora de linha de comando em Assembly que lê dois números e um operador do usuário, executa a operação e exibe o resultado. Cobre entrada de dados, conversão string→número, operações aritméticas e saída formatada."}),l.jsx("h2",{children:"Programa Completo — calculadora.asm"}),l.jsx(M,{title:"Calculadora interativa",language:"asm",code:`
; calculadora.asm — Calculadora interativa em Assembly x64 Linux
; Uso: ./calculadora
; Entrada: dois números inteiros e operador (+, -, *, /)

section .data
    ; Prompts
    prompt_a  db "Digite o primeiro número: ", 0
    prompt_op db "Operador (+, -, *, /): ", 0
    prompt_b  db "Digite o segundo número: ", 0

    ; Formatos de saída
    fmt_ok    db "Resultado: %ld", 10, 0
    fmt_div0  db "Erro: divisão por zero!", 10, 0
    fmt_inv   db "Erro: operador inválido!", 10, 0
    fmt_scan  db "%ld", 0          ; para scanf
    fmt_char  db " %c", 0          ; para scanf (espaço pula whitespace)

section .bss
    a_val  resq 1    ; primeiro número
    b_val  resq 1    ; segundo número
    op_val resb 4    ; operador (+, -, *, /)

section .text
    extern printf
    extern scanf
    global main

; ─── main ──────────────────────────────────────────────────
main:
    push rbp
    mov  rbp, rsp
    sub  rsp, 16         ; alinhamento

    ; --- ler primeiro número ---
    lea  rdi, [rel prompt_a]
    xor  eax, eax
    call printf

    lea  rdi, [rel fmt_scan]
    lea  rsi, [rel a_val]
    xor  eax, eax
    call scanf

    ; --- ler operador ---
    lea  rdi, [rel prompt_op]
    xor  eax, eax
    call printf

    lea  rdi, [rel fmt_char]
    lea  rsi, [rel op_val]
    xor  eax, eax
    call scanf

    ; --- ler segundo número ---
    lea  rdi, [rel prompt_b]
    xor  eax, eax
    call printf

    lea  rdi, [rel fmt_scan]
    lea  rsi, [rel b_val]
    xor  eax, eax
    call scanf

    ; --- executar operação ---
    mov  rax, [rel a_val]    ; rax = a
    mov  rbx, [rel b_val]    ; rbx = b
    movsx rcx, byte ptr [rel op_val]  ; rcx = operador

    cmp  cl, '+'
    je   op_soma
    cmp  cl, '-'
    je   op_sub
    cmp  cl, '*'
    je   op_mul
    cmp  cl, '/'
    je   op_div

    ; operador inválido:
    lea  rdi, [rel fmt_inv]
    xor  eax, eax
    call printf
    mov  eax, 1
    jmp  main_fim

op_soma:
    add  rax, rbx
    jmp  mostrar_resultado

op_sub:
    sub  rax, rbx
    jmp  mostrar_resultado

op_mul:
    imul rax, rbx
    jmp  mostrar_resultado

op_div:
    test rbx, rbx
    jz   erro_div0
    cqo                ; extender sinal de rax para rdx:rax
    idiv rbx           ; rax = rax / rbx, rdx = rax % rbx
    jmp  mostrar_resultado

erro_div0:
    lea  rdi, [rel fmt_div0]
    xor  eax, eax
    call printf
    mov  eax, 1
    jmp  main_fim

mostrar_resultado:
    ; printf("Resultado: %ld
", rax)
    lea  rdi, [rel fmt_ok]
    mov  rsi, rax
    xor  eax, eax
    call printf
    xor  eax, eax    ; return 0

main_fim:
    leave
    ret
      `}),l.jsx("h2",{children:"Compilar e Executar"}),l.jsx(M,{title:"Build e execução",language:"bash",code:`
# Compilar:
nasm -f elf64 calculadora.asm -o calculadora.o
gcc calculadora.o -o calculadora

# Executar:
./calculadora

# Exemplo de sessão:
# Digite o primeiro número: 42
# Operador (+, -, *, /): *
# Digite o segundo número: 7
# Resultado: 294

# Testar divisão por zero:
# Digite o primeiro número: 100
# Operador (+, -, *, /): /
# Digite o segundo número: 0
# Erro: divisão por zero!

# Testar operador inválido:
# Operador (+, -, *, /): ?
# Erro: operador inválido!
      `}),l.jsx("h2",{children:"Versão com Conversão Manual (sem scanf)"}),l.jsx(M,{title:"Converter string → número manualmente",language:"asm",code:`
; atoi manual — converter string ASCII para inteiro de 64 bits
; Entrada:  RSI = ponteiro para string numérica (com ou sem sinal)
; Saída:    RAX = valor numérico, RCX = bytes consumidos
; Clobbers: RDX, RBX

my_atoi:
    xor rax, rax           ; rax = resultado = 0
    xor rcx, rcx           ; rcx = comprimento = 0
    xor rbx, rbx           ; rbx = sinal: 0 = positivo
    movzx rdx, byte ptr [rsi] ; primeiro char

    ; Verificar sinal negativo:
    cmp  dl, '-'
    jne  atoi_loop
    mov  rbx, 1            ; marcador de sinal negativo
    inc  rsi
    inc  rcx

atoi_loop:
    movzx rdx, byte ptr [rsi]  ; próximo char
    cmp  dl, '0'               ; é dígito?
    jl   atoi_fim
    cmp  dl, '9'
    jg   atoi_fim

    sub  dl, '0'               ; converte '0'-'9' para 0-9
    imul rax, 10               ; resultado = resultado * 10 + dígito
    add  rax, rdx
    inc  rsi
    inc  rcx
    jmp  atoi_loop

atoi_fim:
    test rbx, rbx
    jz   atoi_ret
    neg  rax                   ; aplicar sinal negativo

atoi_ret:
    ret
      `}),l.jsx("h2",{children:"Versão: Número → String (itoa)"}),l.jsx(M,{title:"Converter inteiro para string ASCII",language:"asm",code:`
; itoa manual — converter inteiro de 64 bits para string ASCII
; Entrada:  RAX = número, RDI = buffer de saída
; Saída:    RCX = comprimento da string escrita
; Nota: buffer deve ter pelo menos 21 bytes

my_itoa:
    push rbp
    mov  rbp, rsp
    sub  rsp, 32

    ; Buffer temporário na pilha (em ordem reversa):
    lea  r8, [rsp + 20]    ; ponteiro para fim do buffer temporário
    mov  byte ptr [r8], 0  ; terminador nulo
    dec  r8

    ; Tratar zero especialmente:
    test rax, rax
    jnz  itoa_nao_zero
    mov  byte ptr [r8], '0'
    dec  r8
    mov  rcx, 1
    jmp  itoa_copiar

itoa_nao_zero:
    ; Tratar negativo:
    xor  rbx, rbx
    test rax, rax
    jns  itoa_loop
    mov  rbx, 1            ; flag negativo
    neg  rax               ; trabalhar com positivo

itoa_loop:
    test rax, rax
    jz   itoa_sinal
    xor  rdx, rdx
    mov  rcx, 10
    div  rcx               ; rdx = rax % 10, rax = rax / 10
    add  dl, '0'           ; converter para ASCII
    mov  byte ptr [r8], dl ; salvar no buffer temporário
    dec  r8
    jmp  itoa_loop

itoa_sinal:
    test rbx, rbx
    jz   itoa_calcular_len
    mov  byte ptr [r8], '-'
    dec  r8

itoa_calcular_len:
    inc  r8                ; aponta para primeiro char
    lea  rcx, [rsp + 20]
    sub  rcx, r8           ; rcx = comprimento

itoa_copiar:
    ; Copiar do buffer temp para RDI:
    mov rsi, r8
    push rdi
    rep movsb              ; copia RCX bytes de RSI para RDI
    pop rdi

    leave
    ret
      `}),l.jsxs(se,{type:"tip",title:"scanf vs leitura manual",children:["Para programas simples, usar ",l.jsx("code",{children:"scanf"})," é mais conveniente. Para programas sem libc ou com controle total, implemente sua própria conversão como o ",l.jsx("code",{children:"my_atoi"})," acima. A conversão manual é essencial para shellcodes e código embarcado."]})]})}function TM(){return l.jsxs(Se,{title:"Algoritmos Clássicos",subtitle:"Implementações de Fibonacci, fatorial, busca binária e quicksort em Assembly x64.",difficulty:"avançado",timeToRead:"20 min",children:[l.jsx("h2",{children:"Fibonacci — Iterativo e Recursivo"}),l.jsx(M,{title:"Fibonacci iterativo (mais eficiente)",language:"asm",code:`
; fib_iter(n) — n-ésimo número de Fibonacci, iterativo
; Entrada: RDI = n (0, 1, 2, ...)
; Saída:   RAX = fib(n)

fib_iter:
    ; Casos base:
    cmp rdi, 1
    jbe fib_base          ; n <= 1: retorna n

    ; Iterativo: fib(n) = fib(n-1) + fib(n-2)
    xor rax, rax           ; fib(0) = 0
    mov rcx, 1             ; fib(1) = 1
    mov rdx, 2             ; contador i = 2

fib_loop:
    cmp rdx, rdi           ; i > n?
    jg  fib_fim
    mov rbx, rcx           ; temp = fib(i-1)
    add rcx, rax           ; fib(i) = fib(i-1) + fib(i-2)
    mov rax, rbx           ; fib(i-2) = antigo fib(i-1)
    inc rdx
    jmp fib_loop

fib_base:
    mov rax, rdi           ; fib(0)=0, fib(1)=1
    ret

fib_fim:
    mov rax, rcx           ; retorna fib(n)
    ret

; Primeiros 15: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377
      `}),l.jsx(M,{title:"Fibonacci recursivo (elegante, lento)",language:"asm",code:`
; fib_rec(n) — recursivo, O(2^n)
; Só para fins didáticos — use o iterativo em produção!

fib_rec:
    cmp rdi, 1
    jbe fib_rec_base     ; fib(0)=0, fib(1)=1

    push rbp
    mov  rbp, rsp
    push rbx
    push r12

    mov  r12, rdi        ; salvar n

    ; Calcular fib(n-1):
    dec  rdi
    call fib_rec
    mov  rbx, rax        ; rbx = fib(n-1)

    ; Calcular fib(n-2):
    mov  rdi, r12
    sub  rdi, 2
    call fib_rec         ; rax = fib(n-2)

    add  rax, rbx        ; fib(n) = fib(n-1) + fib(n-2)

    pop r12
    pop rbx
    leave
    ret

fib_rec_base:
    mov rax, rdi
    ret
      `}),l.jsx("h2",{children:"Fatorial — Iterativo"}),l.jsx(M,{title:"Fatorial iterativo e com big-int",language:"asm",code:`
; fat(n) — fatorial iterativo, 64 bits
; Entrada: RDI = n
; Saída:   RAX = n!  (transborda para n > 20)

fat_iter:
    mov rax, 1           ; resultado = 1
    test rdi, rdi
    jz  fat_fim          ; fat(0) = 1

fat_loop:
    imul rax, rdi        ; resultado *= n
    dec  rdi
    jnz  fat_loop

fat_fim:
    ret

; fat(20)  = 2.432.902.008.176.640.000 (máximo que cabe em uint64)
; fat(21)  = transborda!

; Verificar overflow via OF flag:
fat_safe:
    mov rax, 1
    test rdi, rdi
    jz  fat_safe_fim

fat_safe_loop:
    imul rax, rdi
    jo   overflow_fat    ; OF=1 → houve overflow
    dec  rdi
    jnz  fat_safe_loop
    ret

overflow_fat:
    mov rax, -1          ; -1 como indicador de erro
    ret

fat_safe_fim:
    ret
      `}),l.jsx("h2",{children:"Busca Binária"}),l.jsx(M,{title:"Binary search — O(log n)",language:"asm",code:`
; bin_search(int *arr, int n, int target) → índice ou -1
; RDI = arr, RSI = n, RDX = target
; Saída: RAX = índice ou -1 se não encontrado

bin_search:
    push rbx
    xor  rax, rax          ; lo = 0
    mov  rcx, rsi
    dec  rcx               ; hi = n - 1

bin_loop:
    cmp  rax, rcx          ; lo > hi?
    jg   bin_not_found

    ; mid = (lo + hi) / 2
    mov  rbx, rax
    add  rbx, rcx
    sar  rbx, 1            ; rbx = mid

    ; Comparar arr[mid] com target:
    mov  r8d, [rdi + rbx*4]    ; r8 = arr[mid] (int de 32 bits)
    movsxd r8, r8d
    cmp  r8, rdx

    je   bin_found         ; arr[mid] == target
    jl   bin_right         ; arr[mid] < target → busca à direita

    ; arr[mid] > target → busca à esquerda:
    mov  rcx, rbx
    dec  rcx               ; hi = mid - 1
    jmp  bin_loop

bin_right:
    mov  rax, rbx
    inc  rax               ; lo = mid + 1
    jmp  bin_loop

bin_found:
    mov  rax, rbx          ; retorna índice
    pop  rbx
    ret

bin_not_found:
    mov  rax, -1           ; não encontrado
    pop  rbx
    ret
      `}),l.jsx("h2",{children:"Quicksort"}),l.jsx(M,{title:"Quicksort recursivo em Assembly",language:"asm",code:`
; quicksort(int *arr, int lo, int hi)
; RDI = arr, RSI = lo, RDX = hi

quicksort:
    push rbp
    mov  rbp, rsp
    push rbx
    push r12
    push r13
    push r14

    ; Caso base: lo >= hi
    cmp  rsi, rdx
    jge  qs_fim

    mov  r12, rdi          ; salvar arr
    mov  r13, rsi          ; salvar lo
    mov  r14, rdx          ; salvar hi

    ; === Partição (pivot = arr[hi]) ===
    mov  eax, [rdi + rdx*4]  ; pivot = arr[hi]
    movsxd rax, eax

    mov  rbx, rsi          ; i = lo - 1
    dec  rbx
    mov  rcx, rsi          ; j = lo

partition_loop:
    cmp  rcx, r14          ; j < hi
    jge  partition_done

    mov  r8d, [r12 + rcx*4]
    movsxd r8, r8d
    cmp  r8, rax           ; arr[j] <= pivot?
    jg   partition_next

    ; swap(arr[++i], arr[j])
    inc  rbx               ; i++
    ; arr[i] <-> arr[j]:
    mov  r9d, [r12 + rbx*4]   ; temp = arr[i]
    mov  [r12 + rbx*4], r8d   ; arr[i] = arr[j]
    mov  [r12 + rcx*4], r9d   ; arr[j] = temp

partition_next:
    inc  rcx
    jmp  partition_loop

partition_done:
    ; swap(arr[i+1], arr[hi]) — colocar pivot no lugar
    inc  rbx               ; i++ (posição do pivot)
    mov  r8d, [r12 + rbx*4]
    mov  r9d, [r12 + r14*4]
    mov  [r12 + rbx*4], r9d
    mov  [r12 + r14*4], r8d

    ; pivot_idx = i (= rbx)
    ; Recursão esquerda: quicksort(arr, lo, pivot_idx - 1)
    mov  rdi, r12
    mov  rsi, r13
    mov  rdx, rbx
    dec  rdx
    call quicksort

    ; Recursão direita: quicksort(arr, pivot_idx + 1, hi)
    mov  rdi, r12
    mov  rsi, rbx
    inc  rsi
    mov  rdx, r14
    call quicksort

qs_fim:
    pop r14
    pop r13
    pop r12
    pop rbx
    leave
    ret
      `}),l.jsx("h2",{children:"GCD — Máximo Divisor Comum"}),l.jsx(M,{title:"Algoritmo de Euclides",language:"asm",code:`
; gcd(a, b) — máximo divisor comum via algoritmo de Euclides
; Entrada: RDI = a, RSI = b
; Saída:   RAX = gcd(a, b)

gcd:
    ; Algoritmo: gcd(a, b) = gcd(b, a mod b) até b = 0
    test rsi, rsi
    jz   gcd_base        ; b = 0 → gcd = a

gcd_loop:
    mov  rax, rdi        ; rax = a
    xor  rdx, rdx
    div  rsi             ; rdx = a % b
    mov  rdi, rsi        ; a = b
    mov  rsi, rdx        ; b = a % b
    test rsi, rsi
    jnz  gcd_loop

gcd_base:
    mov  rax, rdi        ; retorna o GCD
    ret

; Versão iterativa otimizada (sem divisão — mais rápida!):
gcd_binary:
    ; Binary GCD — usa apenas shifts e subtrações
    test rdi, rdi
    jz   binary_ret_b
    test rsi, rsi
    jz   binary_ret_a

    ; Encontrar fator de 2 comum:
    mov  rcx, rdi
    or   rcx, rsi
    bsf  rcx, rcx        ; número de bits 0 no final (fator de 2)

    ; Remover fatores de 2:
    shr  rdi, cl
    shr  rsi, cl

binary_loop:
    ; Remover fatores de 2 de a:
    bsf  rdx, rdi
    shr  rdi, cl         ; truque: usar rdx como contador

    cmp  rdi, rsi
    jz   binary_done
    jb   binary_swap

    sub  rdi, rsi
    jmp  binary_loop

binary_swap:
    xchg rdi, rsi
    sub  rdi, rsi
    jmp  binary_loop

binary_done:
    shl  rdi, cl         ; restaurar fatores de 2
    mov  rax, rdi
    ret

binary_ret_b:
    mov rax, rsi
    ret
binary_ret_a:
    mov rax, rdi
    ret
      `}),l.jsxs(se,{type:"tip",title:"Recursos para ir mais longe",children:["Para continuar aprendendo Assembly avançado, recomendo:",l.jsx("br",{}),"• ",l.jsx("strong",{children:"Agner Fog's optimization guides"})," (agner.org) — referência definitiva de performance",l.jsx("br",{}),"• ",l.jsx("strong",{children:"Intel Software Developer Manual"})," — especificação completa do x86/x64",l.jsx("br",{}),"• ",l.jsx("strong",{children:"Compiler Explorer (godbolt.org)"})," — veja o Assembly gerado por C/C++",l.jsx("br",{}),"• ",l.jsx("strong",{children:"OSDev.org"})," — desenvolvimento de sistemas operacionais em Assembly"]})]})}function CM(){return l.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center text-center p-8",children:[l.jsx("p",{className:"font-mono text-6xl font-bold text-primary mb-4",children:"404"}),l.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Página não encontrada"}),l.jsx("p",{className:"text-muted-foreground mb-6",children:"O tópico que você está procurando não existe neste guia."}),l.jsx("a",{href:"#/",className:"text-primary hover:underline text-sm",children:"← Voltar para o início"})]})}const MM=new BS;function OM(){const[a,o]=z.useState(!1);return l.jsxs("div",{className:"min-h-screen bg-background flex flex-col",children:[l.jsx(FC,{onMenuToggle:()=>o(n=>!n),menuOpen:a}),l.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[l.jsx(DC,{open:a,onClose:()=>o(!1)}),l.jsx("div",{className:"flex-1 overflow-y-auto",children:l.jsxs(cS,{children:[l.jsx(ve,{path:"/",component:YC}),l.jsx(ve,{path:"/historia",component:QC}),l.jsx(ve,{path:"/ferramentas",component:ZC}),l.jsx(ve,{path:"/primeiro-programa",component:KC}),l.jsx(ve,{path:"/registradores-x86",component:JC}),l.jsx(ve,{path:"/registradores-x64",component:WC}),l.jsx(ve,{path:"/flags",component:$C}),l.jsx(ve,{path:"/regs-especiais",component:eM}),l.jsx(ve,{path:"/mov",component:tM}),l.jsx(ve,{path:"/aritmetica",component:aM}),l.jsx(ve,{path:"/bits",component:rM}),l.jsx(ve,{path:"/utilidades",component:oM}),l.jsx(ve,{path:"/endereçamento",component:sM}),l.jsx(ve,{path:"/segmentos",component:nM}),l.jsx(ve,{path:"/pilha",component:iM}),l.jsx(ve,{path:"/comparacoes",component:lM}),l.jsx(ve,{path:"/saltos",component:cM}),l.jsx(ve,{path:"/loops",component:uM}),l.jsx(ve,{path:"/call-ret",component:dM}),l.jsx(ve,{path:"/prologo",component:mM}),l.jsx(ve,{path:"/convencoes",component:fM}),l.jsx(ve,{path:"/parametros",component:hM}),l.jsx(ve,{path:"/strings",component:pM}),l.jsx(ve,{path:"/arrays",component:xM}),l.jsx(ve,{path:"/structs",component:gM}),l.jsx(ve,{path:"/syscalls",component:bM}),l.jsx(ve,{path:"/interop",component:vM}),l.jsx(ve,{path:"/linking",component:yM}),l.jsx(ve,{path:"/fpu",component:SM}),l.jsx(ve,{path:"/simd",component:jM}),l.jsx(ve,{path:"/otimizacao",component:AM}),l.jsx(ve,{path:"/hello-world",component:EM}),l.jsx(ve,{path:"/calculadora",component:RM}),l.jsx(ve,{path:"/algoritmos",component:TM}),l.jsx(ve,{component:CM})]})})]})]})}function DM(){return l.jsx(US,{client:MM,children:l.jsx(IS,{attribute:"class",defaultTheme:"dark",enableSystem:!0,children:l.jsx(Ig,{hook:od,children:l.jsx(OM,{})})})})}k1.createRoot(document.getElementById("root")).render(l.jsx(DM,{}));
