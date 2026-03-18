function X1(n,i){for(var r=0;r<i.length;r++){const o=i[r];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in n)){const u=Object.getOwnPropertyDescriptor(o,s);u&&Object.defineProperty(n,s,u.get?u:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(s){if(s.ep)return;s.ep=!0;const u=r(s);fetch(s.href,u)}})();function by(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var sf={exports:{}},el={};var Zg;function Q1(){if(Zg)return el;Zg=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(o,s,u){var d=null;if(u!==void 0&&(d=""+u),s.key!==void 0&&(d=""+s.key),"key"in s){u={};for(var p in s)p!=="key"&&(u[p]=s[p])}else u=s;return s=u.ref,{$$typeof:n,type:o,key:d,ref:s!==void 0?s:null,props:u}}return el.Fragment=i,el.jsx=r,el.jsxs=r,el}var Wg;function Z1(){return Wg||(Wg=1,sf.exports=Q1()),sf.exports}var x=Z1(),cf={exports:{}},xe={};var Jg;function W1(){if(Jg)return xe;Jg=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),C=Symbol.iterator;function T(R){return R===null||typeof R!="object"?null:(R=C&&R[C]||R["@@iterator"],typeof R=="function"?R:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,E={};function N(R,V,Q){this.props=R,this.context=V,this.refs=E,this.updater=Q||_}N.prototype.isReactComponent={},N.prototype.setState=function(R,V){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,V,"setState")},N.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function M(){}M.prototype=N.prototype;function D(R,V,Q){this.props=R,this.context=V,this.refs=E,this.updater=Q||_}var H=D.prototype=new M;H.constructor=D,w(H,N.prototype),H.isPureReactComponent=!0;var G=Array.isArray;function W(){}var U={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function J(R,V,Q){var ee=Q.ref;return{$$typeof:n,type:R,key:V,ref:ee!==void 0?ee:null,props:Q}}function te(R,V){return J(R.type,V,R.props)}function ae(R){return typeof R=="object"&&R!==null&&R.$$typeof===n}function ne(R){var V={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(Q){return V[Q]})}var re=/\/+/g;function ie(R,V){return typeof R=="object"&&R!==null&&R.key!=null?ne(""+R.key):V.toString(36)}function ue(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(W,W):(R.status="pending",R.then(function(V){R.status==="pending"&&(R.status="fulfilled",R.value=V)},function(V){R.status==="pending"&&(R.status="rejected",R.reason=V)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function L(R,V,Q,ee,fe){var me=typeof R;(me==="undefined"||me==="boolean")&&(R=null);var X=!1;if(R===null)X=!0;else switch(me){case"bigint":case"string":case"number":X=!0;break;case"object":switch(R.$$typeof){case n:case i:X=!0;break;case b:return X=R._init,L(X(R._payload),V,Q,ee,fe)}}if(X)return fe=fe(R),X=ee===""?"."+ie(R,0):ee,G(fe)?(Q="",X!=null&&(Q=X.replace(re,"$&/")+"/"),L(fe,V,Q,"",function(Ee){return Ee})):fe!=null&&(ae(fe)&&(fe=te(fe,Q+(fe.key==null||R&&R.key===fe.key?"":(""+fe.key).replace(re,"$&/")+"/")+X)),V.push(fe)),1;X=0;var ye=ee===""?".":ee+":";if(G(R))for(var be=0;be<R.length;be++)ee=R[be],me=ye+ie(ee,be),X+=L(ee,V,Q,me,fe);else if(be=T(R),typeof be=="function")for(R=be.call(R),be=0;!(ee=R.next()).done;)ee=ee.value,me=ye+ie(ee,be++),X+=L(ee,V,Q,me,fe);else if(me==="object"){if(typeof R.then=="function")return L(ue(R),V,Q,ee,fe);throw V=String(R),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return X}function K(R,V,Q){if(R==null)return R;var ee=[],fe=0;return L(R,ee,"","",function(me){return V.call(Q,me,fe++)}),ee}function I(R){if(R._status===-1){var V=R._result;V=V(),V.then(function(Q){(R._status===0||R._status===-1)&&(R._status=1,R._result=Q)},function(Q){(R._status===0||R._status===-1)&&(R._status=2,R._result=Q)}),R._status===-1&&(R._status=0,R._result=V)}if(R._status===1)return R._result.default;throw R._result}var Z=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)},pe={map:K,forEach:function(R,V,Q){K(R,function(){V.apply(this,arguments)},Q)},count:function(R){var V=0;return K(R,function(){V++}),V},toArray:function(R){return K(R,function(V){return V})||[]},only:function(R){if(!ae(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return xe.Activity=v,xe.Children=pe,xe.Component=N,xe.Fragment=r,xe.Profiler=s,xe.PureComponent=D,xe.StrictMode=o,xe.Suspense=h,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,xe.__COMPILER_RUNTIME={__proto__:null,c:function(R){return U.H.useMemoCache(R)}},xe.cache=function(R){return function(){return R.apply(null,arguments)}},xe.cacheSignal=function(){return null},xe.cloneElement=function(R,V,Q){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var ee=w({},R.props),fe=R.key;if(V!=null)for(me in V.key!==void 0&&(fe=""+V.key),V)!Y.call(V,me)||me==="key"||me==="__self"||me==="__source"||me==="ref"&&V.ref===void 0||(ee[me]=V[me]);var me=arguments.length-2;if(me===1)ee.children=Q;else if(1<me){for(var X=Array(me),ye=0;ye<me;ye++)X[ye]=arguments[ye+2];ee.children=X}return J(R.type,fe,ee)},xe.createContext=function(R){return R={$$typeof:d,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:u,_context:R},R},xe.createElement=function(R,V,Q){var ee,fe={},me=null;if(V!=null)for(ee in V.key!==void 0&&(me=""+V.key),V)Y.call(V,ee)&&ee!=="key"&&ee!=="__self"&&ee!=="__source"&&(fe[ee]=V[ee]);var X=arguments.length-2;if(X===1)fe.children=Q;else if(1<X){for(var ye=Array(X),be=0;be<X;be++)ye[be]=arguments[be+2];fe.children=ye}if(R&&R.defaultProps)for(ee in X=R.defaultProps,X)fe[ee]===void 0&&(fe[ee]=X[ee]);return J(R,me,fe)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(R){return{$$typeof:p,render:R}},xe.isValidElement=ae,xe.lazy=function(R){return{$$typeof:b,_payload:{_status:-1,_result:R},_init:I}},xe.memo=function(R,V){return{$$typeof:m,type:R,compare:V===void 0?null:V}},xe.startTransition=function(R){var V=U.T,Q={};U.T=Q;try{var ee=R(),fe=U.S;fe!==null&&fe(Q,ee),typeof ee=="object"&&ee!==null&&typeof ee.then=="function"&&ee.then(W,Z)}catch(me){Z(me)}finally{V!==null&&Q.types!==null&&(V.types=Q.types),U.T=V}},xe.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},xe.use=function(R){return U.H.use(R)},xe.useActionState=function(R,V,Q){return U.H.useActionState(R,V,Q)},xe.useCallback=function(R,V){return U.H.useCallback(R,V)},xe.useContext=function(R){return U.H.useContext(R)},xe.useDebugValue=function(){},xe.useDeferredValue=function(R,V){return U.H.useDeferredValue(R,V)},xe.useEffect=function(R,V){return U.H.useEffect(R,V)},xe.useEffectEvent=function(R){return U.H.useEffectEvent(R)},xe.useId=function(){return U.H.useId()},xe.useImperativeHandle=function(R,V,Q){return U.H.useImperativeHandle(R,V,Q)},xe.useInsertionEffect=function(R,V){return U.H.useInsertionEffect(R,V)},xe.useLayoutEffect=function(R,V){return U.H.useLayoutEffect(R,V)},xe.useMemo=function(R,V){return U.H.useMemo(R,V)},xe.useOptimistic=function(R,V){return U.H.useOptimistic(R,V)},xe.useReducer=function(R,V,Q){return U.H.useReducer(R,V,Q)},xe.useRef=function(R){return U.H.useRef(R)},xe.useState=function(R){return U.H.useState(R)},xe.useSyncExternalStore=function(R,V,Q){return U.H.useSyncExternalStore(R,V,Q)},xe.useTransition=function(){return U.H.useTransition()},xe.version="19.2.3",xe}var ev;function Cs(){return ev||(ev=1,cf.exports=W1()),cf.exports}var g=Cs();const ma=by(g),id=X1({__proto__:null,default:ma},[g]);var uf={exports:{}},tl={},ff={exports:{}},df={};var tv;function J1(){return tv||(tv=1,(function(n){function i(L,K){var I=L.length;L.push(K);e:for(;0<I;){var Z=I-1>>>1,pe=L[Z];if(0<s(pe,K))L[Z]=K,L[I]=pe,I=Z;else break e}}function r(L){return L.length===0?null:L[0]}function o(L){if(L.length===0)return null;var K=L[0],I=L.pop();if(I!==K){L[0]=I;e:for(var Z=0,pe=L.length,R=pe>>>1;Z<R;){var V=2*(Z+1)-1,Q=L[V],ee=V+1,fe=L[ee];if(0>s(Q,I))ee<pe&&0>s(fe,Q)?(L[Z]=fe,L[ee]=I,Z=ee):(L[Z]=Q,L[V]=I,Z=V);else if(ee<pe&&0>s(fe,I))L[Z]=fe,L[ee]=I,Z=ee;else break e}}return K}function s(L,K){var I=L.sortIndex-K.sortIndex;return I!==0?I:L.id-K.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();n.unstable_now=function(){return d.now()-p}}var h=[],m=[],b=1,v=null,C=3,T=!1,_=!1,w=!1,E=!1,N=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function H(L){for(var K=r(m);K!==null;){if(K.callback===null)o(m);else if(K.startTime<=L)o(m),K.sortIndex=K.expirationTime,i(h,K);else break;K=r(m)}}function G(L){if(w=!1,H(L),!_)if(r(h)!==null)_=!0,W||(W=!0,ne());else{var K=r(m);K!==null&&ue(G,K.startTime-L)}}var W=!1,U=-1,Y=5,J=-1;function te(){return E?!0:!(n.unstable_now()-J<Y)}function ae(){if(E=!1,W){var L=n.unstable_now();J=L;var K=!0;try{e:{_=!1,w&&(w=!1,M(U),U=-1),T=!0;var I=C;try{t:{for(H(L),v=r(h);v!==null&&!(v.expirationTime>L&&te());){var Z=v.callback;if(typeof Z=="function"){v.callback=null,C=v.priorityLevel;var pe=Z(v.expirationTime<=L);if(L=n.unstable_now(),typeof pe=="function"){v.callback=pe,H(L),K=!0;break t}v===r(h)&&o(h),H(L)}else o(h);v=r(h)}if(v!==null)K=!0;else{var R=r(m);R!==null&&ue(G,R.startTime-L),K=!1}}break e}finally{v=null,C=I,T=!1}K=void 0}}finally{K?ne():W=!1}}}var ne;if(typeof D=="function")ne=function(){D(ae)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=ae,ne=function(){ie.postMessage(null)}}else ne=function(){N(ae,0)};function ue(L,K){U=N(function(){L(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return C},n.unstable_next=function(L){switch(C){case 1:case 2:case 3:var K=3;break;default:K=C}var I=C;C=K;try{return L()}finally{C=I}},n.unstable_requestPaint=function(){E=!0},n.unstable_runWithPriority=function(L,K){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var I=C;C=L;try{return K()}finally{C=I}},n.unstable_scheduleCallback=function(L,K,I){var Z=n.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?Z+I:Z):I=Z,L){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=I+pe,L={id:b++,callback:K,priorityLevel:L,startTime:I,expirationTime:pe,sortIndex:-1},I>Z?(L.sortIndex=I,i(m,L),r(h)===null&&L===r(m)&&(w?(M(U),U=-1):w=!0,ue(G,I-Z))):(L.sortIndex=pe,i(h,L),_||T||(_=!0,W||(W=!0,ne()))),L},n.unstable_shouldYield=te,n.unstable_wrapCallback=function(L){var K=C;return function(){var I=C;C=K;try{return L.apply(this,arguments)}finally{C=I}}}})(df)),df}var nv;function eC(){return nv||(nv=1,ff.exports=J1()),ff.exports}var pf={exports:{}},pt={};var av;function tC(){if(av)return pt;av=1;var n=Cs();function i(h){var m="https://react.dev/errors/"+h;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)m+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+h+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var o={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},s=Symbol.for("react.portal");function u(h,m,b){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:v==null?null:""+v,children:h,containerInfo:m,implementation:b}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(h,m){if(h==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,pt.createPortal=function(h,m){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(i(299));return u(h,m,null,b)},pt.flushSync=function(h){var m=d.T,b=o.p;try{if(d.T=null,o.p=2,h)return h()}finally{d.T=m,o.p=b,o.d.f()}},pt.preconnect=function(h,m){typeof h=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(h,m))},pt.prefetchDNS=function(h){typeof h=="string"&&o.d.D(h)},pt.preinit=function(h,m){if(typeof h=="string"&&m&&typeof m.as=="string"){var b=m.as,v=p(b,m.crossOrigin),C=typeof m.integrity=="string"?m.integrity:void 0,T=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;b==="style"?o.d.S(h,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:C,fetchPriority:T}):b==="script"&&o.d.X(h,{crossOrigin:v,integrity:C,fetchPriority:T,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},pt.preinitModule=function(h,m){if(typeof h=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var b=p(m.as,m.crossOrigin);o.d.M(h,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(h)},pt.preload=function(h,m){if(typeof h=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var b=m.as,v=p(b,m.crossOrigin);o.d.L(h,b,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},pt.preloadModule=function(h,m){if(typeof h=="string")if(m){var b=p(m.as,m.crossOrigin);o.d.m(h,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(h)},pt.requestFormReset=function(h){o.d.r(h)},pt.unstable_batchedUpdates=function(h,m){return h(m)},pt.useFormState=function(h,m,b){return d.H.useFormState(h,m,b)},pt.useFormStatus=function(){return d.H.useHostTransitionStatus()},pt.version="19.2.3",pt}var iv;function Sy(){if(iv)return pf.exports;iv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),pf.exports=tC(),pf.exports}var rv;function nC(){if(rv)return tl;rv=1;var n=eC(),i=Cs(),r=Sy();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(u(e)!==e)throw Error(o(188))}function m(e){var t=e.alternate;if(!t){if(t=u(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,l=t;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(l=c.return,l!==null){a=l;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return h(c),e;if(f===l)return h(c),t;f=f.sibling}throw Error(o(188))}if(a.return!==l.return)a=c,l=f;else{for(var y=!1,S=c.child;S;){if(S===a){y=!0,a=c,l=f;break}if(S===l){y=!0,l=c,a=f;break}S=S.sibling}if(!y){for(S=f.child;S;){if(S===a){y=!0,a=f,l=c;break}if(S===l){y=!0,l=f,a=c;break}S=S.sibling}if(!y)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,C=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),D=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),J=Symbol.for("react.activity"),te=Symbol.for("react.memo_cache_sentinel"),ae=Symbol.iterator;function ne(e){return e===null||typeof e!="object"?null:(e=ae&&e[ae]||e["@@iterator"],typeof e=="function"?e:null)}var re=Symbol.for("react.client.reference");function ie(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===re?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case N:return"Profiler";case E:return"StrictMode";case G:return"Suspense";case W:return"SuspenseList";case J:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case _:return"Portal";case D:return e.displayName||"Context";case M:return(e._context.displayName||"Context")+".Consumer";case H:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U:return t=e.displayName||null,t!==null?t:ie(e.type)||"Memo";case Y:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}var ue=Array.isArray,L=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},Z=[],pe=-1;function R(e){return{current:e}}function V(e){0>pe||(e.current=Z[pe],Z[pe]=null,pe--)}function Q(e,t){pe++,Z[pe]=e.current,e.current=t}var ee=R(null),fe=R(null),me=R(null),X=R(null);function ye(e,t){switch(Q(me,t),Q(fe,e),Q(ee,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?bg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=bg(t),e=Sg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(ee),Q(ee,e)}function be(){V(ee),V(fe),V(me)}function Ee(e){e.memoizedState!==null&&Q(X,e);var t=ee.current,a=Sg(t,e.type);t!==a&&(Q(fe,e),Q(ee,a))}function Me(e){fe.current===e&&(V(ee),V(fe)),X.current===e&&(V(X),Qr._currentValue=I)}var ze,yt;function xt(e){if(ze===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ze=t&&t[1]||"",yt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ze+e+yt}var _a=!1;function Ea(e,t){if(!e||_a)return"";_a=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(B){var P=B}Reflect.construct(e,[],q)}else{try{q.call()}catch(B){P=B}e.call(q.prototype)}}else{try{throw Error()}catch(B){P=B}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(B){if(B&&P&&typeof B.stack=="string")return[B.stack,P.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),y=f[0],S=f[1];if(y&&S){var A=y.split(`
`),z=S.split(`
`);for(c=l=0;l<A.length&&!A[l].includes("DetermineComponentFrameRoot");)l++;for(;c<z.length&&!z[c].includes("DetermineComponentFrameRoot");)c++;if(l===A.length||c===z.length)for(l=A.length-1,c=z.length-1;1<=l&&0<=c&&A[l]!==z[c];)c--;for(;1<=l&&0<=c;l--,c--)if(A[l]!==z[c]){if(l!==1||c!==1)do if(l--,c--,0>c||A[l]!==z[c]){var F=`
`+A[l].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=l&&0<=c);break}}}finally{_a=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?xt(a):""}function or(e,t){switch(e.tag){case 26:case 27:case 5:return xt(e.type);case 16:return xt("Lazy");case 13:return e.child!==t&&t!==null?xt("Suspense Fallback"):xt("Suspense");case 19:return xt("SuspenseList");case 0:case 15:return Ea(e.type,!1);case 11:return Ea(e.type.render,!1);case 1:return Ea(e.type,!0);case 31:return xt("Activity");default:return""}}function Zd(e){try{var t="",a=null;do t+=or(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ys=Object.prototype.hasOwnProperty,$s=n.unstable_scheduleCallback,qs=n.unstable_cancelCallback,Rb=n.unstable_shouldYield,Ab=n.unstable_requestPaint,At=n.unstable_now,Nb=n.unstable_getCurrentPriorityLevel,Wd=n.unstable_ImmediatePriority,Jd=n.unstable_UserBlockingPriority,Ol=n.unstable_NormalPriority,Ob=n.unstable_LowPriority,ep=n.unstable_IdlePriority,Mb=n.log,Db=n.unstable_setDisableYieldValue,sr=null,Nt=null;function Vn(e){if(typeof Mb=="function"&&Db(e),Nt&&typeof Nt.setStrictMode=="function")try{Nt.setStrictMode(sr,e)}catch{}}var Ot=Math.clz32?Math.clz32:kb,Lb=Math.log,jb=Math.LN2;function kb(e){return e>>>=0,e===0?32:31-(Lb(e)/jb|0)|0}var Ml=256,Dl=262144,Ll=4194304;function Ra(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function jl(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var c=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var S=l&134217727;return S!==0?(l=S&~f,l!==0?c=Ra(l):(y&=S,y!==0?c=Ra(y):a||(a=S&~e,a!==0&&(c=Ra(a))))):(S=l&~f,S!==0?c=Ra(S):y!==0?c=Ra(y):a||(a=l&~e,a!==0&&(c=Ra(a)))),c===0?0:t!==0&&t!==c&&(t&f)===0&&(f=c&-c,a=t&-t,f>=a||f===32&&(a&4194048)!==0)?t:c}function cr(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function zb(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tp(){var e=Ll;return Ll<<=1,(Ll&62914560)===0&&(Ll=4194304),e}function Xs(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function ur(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ib(e,t,a,l,c,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var S=e.entanglements,A=e.expirationTimes,z=e.hiddenUpdates;for(a=y&~a;0<a;){var F=31-Ot(a),q=1<<F;S[F]=0,A[F]=-1;var P=z[F];if(P!==null)for(z[F]=null,F=0;F<P.length;F++){var B=P[F];B!==null&&(B.lane&=-536870913)}a&=~q}l!==0&&np(e,l,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~t))}function np(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Ot(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function ap(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-Ot(a),c=1<<l;c&t|e[l]&t&&(e[l]|=t),a&=~c}}function ip(e,t){var a=t&-t;return a=(a&42)!==0?1:Qs(a),(a&(e.suspendedLanes|t))!==0?0:a}function Qs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Zs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function rp(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:Fg(e.type))}function lp(e,t){var a=K.p;try{return K.p=e,t()}finally{K.p=a}}var Fn=Math.random().toString(36).slice(2),ot="__reactFiber$"+Fn,St="__reactProps$"+Fn,ni="__reactContainer$"+Fn,Ws="__reactEvents$"+Fn,Pb="__reactListeners$"+Fn,Hb="__reactHandles$"+Fn,op="__reactResources$"+Fn,fr="__reactMarker$"+Fn;function Js(e){delete e[ot],delete e[St],delete e[Ws],delete e[Pb],delete e[Hb]}function ai(e){var t=e[ot];if(t)return t;for(var a=e.parentNode;a;){if(t=a[ni]||a[ot]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Ag(e);e!==null;){if(a=e[ot])return a;e=Ag(e)}return t}e=a,a=e.parentNode}return null}function ii(e){if(e=e[ot]||e[ni]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function dr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function ri(e){var t=e[op];return t||(t=e[op]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function rt(e){e[fr]=!0}var sp=new Set,cp={};function Aa(e,t){li(e,t),li(e+"Capture",t)}function li(e,t){for(cp[e]=t,e=0;e<t.length;e++)sp.add(t[e])}var Ub=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),up={},fp={};function Bb(e){return Ys.call(fp,e)?!0:Ys.call(up,e)?!1:Ub.test(e)?fp[e]=!0:(up[e]=!0,!1)}function kl(e,t,a){if(Bb(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function zl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function bn(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function Bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gb(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var c=l.get,f=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ec(e){if(!e._valueTracker){var t=dp(e)?"checked":"value";e._valueTracker=Gb(e,t,""+e[t])}}function pp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=dp(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Il(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Vb=/[\n"\\]/g;function Gt(e){return e.replace(Vb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function tc(e,t,a,l,c,f,y,S){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),t!=null?y==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Bt(t)):e.value!==""+Bt(t)&&(e.value=""+Bt(t)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),t!=null?nc(e,y,Bt(t)):a!=null?nc(e,y,Bt(a)):l!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.name=""+Bt(S):e.removeAttribute("name")}function hp(e,t,a,l,c,f,y,S){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),t!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||t!=null)){ec(e);return}a=a!=null?""+Bt(a):"",t=t!=null?""+Bt(t):a,S||t===e.value||(e.value=t),e.defaultValue=t}l=l??c,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=S?e.checked:!!l,e.defaultChecked=!!l,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),ec(e)}function nc(e,t,a){t==="number"&&Il(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function oi(e,t,a,l){if(e=e.options,t){t={};for(var c=0;c<a.length;c++)t["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=t.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Bt(a),t=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,l&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function mp(e,t,a){if(t!=null&&(t=""+Bt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Bt(a):""}function gp(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(o(92));if(ue(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=Bt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),ec(e)}function si(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Fb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vp(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Fb.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function yp(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var c in t)l=t[c],t.hasOwnProperty(c)&&a[c]!==l&&vp(e,c,l)}else for(var f in t)t.hasOwnProperty(f)&&vp(e,f,t[f])}function ac(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Yb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pl(e){return Yb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Sn(){}var ic=null;function rc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ci=null,ui=null;function xp(e){var t=ii(e);if(t&&(e=t.stateNode)){var a=e[St]||null;e:switch(e=t.stateNode,t.type){case"input":if(tc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Gt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var c=l[St]||null;if(!c)throw Error(o(90));tc(l,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&pp(l)}break e;case"textarea":mp(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&oi(e,!!a.multiple,t,!1)}}}var lc=!1;function bp(e,t,a){if(lc)return e(t,a);lc=!0;try{var l=e(t);return l}finally{if(lc=!1,(ci!==null||ui!==null)&&(Eo(),ci&&(t=ci,e=ui,ui=ci=null,xp(t),e)))for(t=0;t<e.length;t++)xp(e[t])}}function pr(e,t){var a=e.stateNode;if(a===null)return null;var l=a[St]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oc=!1;if(Cn)try{var hr={};Object.defineProperty(hr,"passive",{get:function(){oc=!0}}),window.addEventListener("test",hr,hr),window.removeEventListener("test",hr,hr)}catch{oc=!1}var Kn=null,sc=null,Hl=null;function Sp(){if(Hl)return Hl;var e,t=sc,a=t.length,l,c="value"in Kn?Kn.value:Kn.textContent,f=c.length;for(e=0;e<a&&t[e]===c[e];e++);var y=a-e;for(l=1;l<=y&&t[a-l]===c[f-l];l++);return Hl=c.slice(e,1<l?1-l:void 0)}function Ul(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bl(){return!0}function Cp(){return!1}function Ct(e){function t(a,l,c,f,y){this._reactName=a,this._targetInst=c,this.type=l,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(a=e[S],this[S]=a?a(f):f[S]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Bl:Cp,this.isPropagationStopped=Cp,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bl)},persist:function(){},isPersistent:Bl}),t}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gl=Ct(Na),mr=v({},Na,{view:0,detail:0}),$b=Ct(mr),cc,uc,gr,Vl=v({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gr&&(gr&&e.type==="mousemove"?(cc=e.screenX-gr.screenX,uc=e.screenY-gr.screenY):uc=cc=0,gr=e),cc)},movementY:function(e){return"movementY"in e?e.movementY:uc}}),wp=Ct(Vl),qb=v({},Vl,{dataTransfer:0}),Xb=Ct(qb),Qb=v({},mr,{relatedTarget:0}),fc=Ct(Qb),Zb=v({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),Wb=Ct(Zb),Jb=v({},Na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),eS=Ct(Jb),tS=v({},Na,{data:0}),Tp=Ct(tS),nS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=iS[e])?!!t[e]:!1}function dc(){return rS}var lS=v({},mr,{key:function(e){if(e.key){var t=nS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?aS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dc,charCode:function(e){return e.type==="keypress"?Ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),oS=Ct(lS),sS=v({},Vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_p=Ct(sS),cS=v({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dc}),uS=Ct(cS),fS=v({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),dS=Ct(fS),pS=v({},Vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hS=Ct(pS),mS=v({},Na,{newState:0,oldState:0}),gS=Ct(mS),vS=[9,13,27,32],pc=Cn&&"CompositionEvent"in window,vr=null;Cn&&"documentMode"in document&&(vr=document.documentMode);var yS=Cn&&"TextEvent"in window&&!vr,Ep=Cn&&(!pc||vr&&8<vr&&11>=vr),Rp=" ",Ap=!1;function Np(e,t){switch(e){case"keyup":return vS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Op(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fi=!1;function xS(e,t){switch(e){case"compositionend":return Op(t);case"keypress":return t.which!==32?null:(Ap=!0,Rp);case"textInput":return e=t.data,e===Rp&&Ap?null:e;default:return null}}function bS(e,t){if(fi)return e==="compositionend"||!pc&&Np(e,t)?(e=Sp(),Hl=sc=Kn=null,fi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ep&&t.locale!=="ko"?null:t.data;default:return null}}var SS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!SS[e.type]:t==="textarea"}function Dp(e,t,a,l){ci?ui?ui.push(l):ui=[l]:ci=l,t=Lo(t,"onChange"),0<t.length&&(a=new Gl("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var yr=null,xr=null;function CS(e){hg(e,0)}function Fl(e){var t=dr(e);if(pp(t))return e}function Lp(e,t){if(e==="change")return t}var jp=!1;if(Cn){var hc;if(Cn){var mc="oninput"in document;if(!mc){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),mc=typeof kp.oninput=="function"}hc=mc}else hc=!1;jp=hc&&(!document.documentMode||9<document.documentMode)}function zp(){yr&&(yr.detachEvent("onpropertychange",Ip),xr=yr=null)}function Ip(e){if(e.propertyName==="value"&&Fl(xr)){var t=[];Dp(t,xr,e,rc(e)),bp(CS,t)}}function wS(e,t,a){e==="focusin"?(zp(),yr=t,xr=a,yr.attachEvent("onpropertychange",Ip)):e==="focusout"&&zp()}function TS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fl(xr)}function _S(e,t){if(e==="click")return Fl(t)}function ES(e,t){if(e==="input"||e==="change")return Fl(t)}function RS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mt=typeof Object.is=="function"?Object.is:RS;function br(e,t){if(Mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var c=a[l];if(!Ys.call(t,c)||!Mt(e[c],t[c]))return!1}return!0}function Pp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hp(e,t){var a=Pp(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Pp(a)}}function Up(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Up(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Il(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Il(e.document)}return t}function gc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var AS=Cn&&"documentMode"in document&&11>=document.documentMode,di=null,vc=null,Sr=null,yc=!1;function Gp(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yc||di==null||di!==Il(l)||(l=di,"selectionStart"in l&&gc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Sr&&br(Sr,l)||(Sr=l,l=Lo(vc,"onSelect"),0<l.length&&(t=new Gl("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=di)))}function Oa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var pi={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionrun:Oa("Transition","TransitionRun"),transitionstart:Oa("Transition","TransitionStart"),transitioncancel:Oa("Transition","TransitionCancel"),transitionend:Oa("Transition","TransitionEnd")},xc={},Vp={};Cn&&(Vp=document.createElement("div").style,"AnimationEvent"in window||(delete pi.animationend.animation,delete pi.animationiteration.animation,delete pi.animationstart.animation),"TransitionEvent"in window||delete pi.transitionend.transition);function Ma(e){if(xc[e])return xc[e];if(!pi[e])return e;var t=pi[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Vp)return xc[e]=t[a];return e}var Fp=Ma("animationend"),Kp=Ma("animationiteration"),Yp=Ma("animationstart"),NS=Ma("transitionrun"),OS=Ma("transitionstart"),MS=Ma("transitioncancel"),$p=Ma("transitionend"),qp=new Map,bc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bc.push("scrollEnd");function Wt(e,t){qp.set(e,t),Aa(t,[e])}var Kl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Vt=[],hi=0,Sc=0;function Yl(){for(var e=hi,t=Sc=hi=0;t<e;){var a=Vt[t];Vt[t++]=null;var l=Vt[t];Vt[t++]=null;var c=Vt[t];Vt[t++]=null;var f=Vt[t];if(Vt[t++]=null,l!==null&&c!==null){var y=l.pending;y===null?c.next=c:(c.next=y.next,y.next=c),l.pending=c}f!==0&&Xp(a,c,f)}}function $l(e,t,a,l){Vt[hi++]=e,Vt[hi++]=t,Vt[hi++]=a,Vt[hi++]=l,Sc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Cc(e,t,a,l){return $l(e,t,a,l),ql(e)}function Da(e,t){return $l(e,null,null,t),ql(e)}function Xp(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,l=f.alternate,l!==null&&(l.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&t!==null&&(c=31-Ot(a),e=f.hiddenUpdates,l=e[c],l===null?e[c]=[t]:l.push(t),t.lane=a|536870912),f):null}function ql(e){if(50<Vr)throw Vr=0,Mu=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mi={};function DS(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,a,l){return new DS(e,t,a,l)}function wc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wn(e,t){var a=e.alternate;return a===null?(a=Dt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Qp(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Xl(e,t,a,l,c,f){var y=0;if(l=e,typeof e=="function")wc(e)&&(y=1);else if(typeof e=="string")y=I1(e,a,ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case J:return e=Dt(31,a,t,c),e.elementType=J,e.lanes=f,e;case w:return La(a.children,c,f,t);case E:y=8,c|=24;break;case N:return e=Dt(12,a,t,c|2),e.elementType=N,e.lanes=f,e;case G:return e=Dt(13,a,t,c),e.elementType=G,e.lanes=f,e;case W:return e=Dt(19,a,t,c),e.elementType=W,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:y=10;break e;case M:y=9;break e;case H:y=11;break e;case U:y=14;break e;case Y:y=16,l=null;break e}y=29,a=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=Dt(y,a,t,c),t.elementType=e,t.type=l,t.lanes=f,t}function La(e,t,a,l){return e=Dt(7,e,l,t),e.lanes=a,e}function Tc(e,t,a){return e=Dt(6,e,null,t),e.lanes=a,e}function Zp(e){var t=Dt(18,null,null,0);return t.stateNode=e,t}function _c(e,t,a){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Wp=new WeakMap;function Ft(e,t){if(typeof e=="object"&&e!==null){var a=Wp.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Zd(t)},Wp.set(e,t),t)}return{value:e,source:t,stack:Zd(t)}}var gi=[],vi=0,Ql=null,Cr=0,Kt=[],Yt=0,Yn=null,sn=1,cn="";function Tn(e,t){gi[vi++]=Cr,gi[vi++]=Ql,Ql=e,Cr=t}function Jp(e,t,a){Kt[Yt++]=sn,Kt[Yt++]=cn,Kt[Yt++]=Yn,Yn=e;var l=sn;e=cn;var c=32-Ot(l)-1;l&=~(1<<c),a+=1;var f=32-Ot(t)+c;if(30<f){var y=c-c%5;f=(l&(1<<y)-1).toString(32),l>>=y,c-=y,sn=1<<32-Ot(t)+c|a<<c|l,cn=f+e}else sn=1<<f|a<<c|l,cn=e}function Ec(e){e.return!==null&&(Tn(e,1),Jp(e,1,0))}function Rc(e){for(;e===Ql;)Ql=gi[--vi],gi[vi]=null,Cr=gi[--vi],gi[vi]=null;for(;e===Yn;)Yn=Kt[--Yt],Kt[Yt]=null,cn=Kt[--Yt],Kt[Yt]=null,sn=Kt[--Yt],Kt[Yt]=null}function eh(e,t){Kt[Yt++]=sn,Kt[Yt++]=cn,Kt[Yt++]=Yn,sn=t.id,cn=t.overflow,Yn=e}var st=null,Ke=null,Oe=!1,$n=null,$t=!1,Ac=Error(o(519));function qn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wr(Ft(t,e)),Ac}function th(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[ot]=e,t[St]=l,a){case"dialog":_e("cancel",t),_e("close",t);break;case"iframe":case"object":case"embed":_e("load",t);break;case"video":case"audio":for(a=0;a<Kr.length;a++)_e(Kr[a],t);break;case"source":_e("error",t);break;case"img":case"image":case"link":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"input":_e("invalid",t),hp(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":_e("invalid",t);break;case"textarea":_e("invalid",t),gp(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||yg(t.textContent,a)?(l.popover!=null&&(_e("beforetoggle",t),_e("toggle",t)),l.onScroll!=null&&_e("scroll",t),l.onScrollEnd!=null&&_e("scrollend",t),l.onClick!=null&&(t.onclick=Sn),t=!0):t=!1,t||qn(e,!0)}function nh(e){for(st=e.return;st;)switch(st.tag){case 5:case 31:case 13:$t=!1;return;case 27:case 3:$t=!0;return;default:st=st.return}}function yi(e){if(e!==st)return!1;if(!Oe)return nh(e),Oe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Yu(e.type,e.memoizedProps)),a=!a),a&&Ke&&qn(e),nh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ke=Rg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ke=Rg(e)}else t===27?(t=Ke,sa(e.type)?(e=Zu,Zu=null,Ke=e):Ke=t):Ke=st?Xt(e.stateNode.nextSibling):null;return!0}function ja(){Ke=st=null,Oe=!1}function Nc(){var e=$n;return e!==null&&(Et===null?Et=e:Et.push.apply(Et,e),$n=null),e}function wr(e){$n===null?$n=[e]:$n.push(e)}var Oc=R(null),ka=null,_n=null;function Xn(e,t,a){Q(Oc,t._currentValue),t._currentValue=a}function En(e){e._currentValue=Oc.current,V(Oc)}function Mc(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Dc(e,t,a,l){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;e:for(;f!==null;){var S=f;f=c;for(var A=0;A<t.length;A++)if(S.context===t[A]){f.lanes|=a,S=f.alternate,S!==null&&(S.lanes|=a),Mc(f.return,a,e),l||(y=null);break e}f=S.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(o(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),Mc(y,a,e),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function xi(e,t,a,l){e=null;for(var c=t,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(o(387));if(y=y.memoizedProps,y!==null){var S=c.type;Mt(c.pendingProps.value,y.value)||(e!==null?e.push(S):e=[S])}}else if(c===X.current){if(y=c.alternate,y===null)throw Error(o(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Qr):e=[Qr])}c=c.return}e!==null&&Dc(t,e,a,l),t.flags|=262144}function Zl(e){for(e=e.firstContext;e!==null;){if(!Mt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function za(e){ka=e,_n=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ct(e){return ah(ka,e)}function Wl(e,t){return ka===null&&za(e),ah(e,t)}function ah(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},_n===null){if(e===null)throw Error(o(308));_n=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else _n=_n.next=t;return a}var LS=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},jS=n.unstable_scheduleCallback,kS=n.unstable_NormalPriority,Je={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lc(){return{controller:new LS,data:new Map,refCount:0}}function Tr(e){e.refCount--,e.refCount===0&&jS(kS,function(){e.controller.abort()})}var _r=null,jc=0,bi=0,Si=null;function zS(e,t){if(_r===null){var a=_r=[];jc=0,bi=Iu(),Si={status:"pending",value:void 0,then:function(l){a.push(l)}}}return jc++,t.then(ih,ih),t}function ih(){if(--jc===0&&_r!==null){Si!==null&&(Si.status="fulfilled");var e=_r;_r=null,bi=0,Si=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function IS(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var c=0;c<a.length;c++)(0,a[c])(t)},function(c){for(l.status="rejected",l.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),l}var rh=L.S;L.S=function(e,t){Gm=At(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&zS(e,t),rh!==null&&rh(e,t)};var Ia=R(null);function kc(){var e=Ia.current;return e!==null?e:Ve.pooledCache}function Jl(e,t){t===null?Q(Ia,Ia.current):Q(Ia,t.pool)}function lh(){var e=kc();return e===null?null:{parent:Je._currentValue,pool:e}}var Ci=Error(o(460)),zc=Error(o(474)),eo=Error(o(542)),to={then:function(){}};function oh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sh(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Sn,Sn),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uh(e),e;default:if(typeof t.status=="string")t.then(Sn,Sn);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=l}},function(l){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uh(e),e}throw Ha=t,Ci}}function Pa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ha=a,Ci):a}}var Ha=null;function ch(){if(Ha===null)throw Error(o(459));var e=Ha;return Ha=null,e}function uh(e){if(e===Ci||e===eo)throw Error(o(483))}var wi=null,Er=0;function no(e){var t=Er;return Er+=1,wi===null&&(wi=[]),sh(wi,e,t)}function Rr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ao(e,t){throw t.$$typeof===C?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function fh(e){function t(j,O){if(e){var k=j.deletions;k===null?(j.deletions=[O],j.flags|=16):k.push(O)}}function a(j,O){if(!e)return null;for(;O!==null;)t(j,O),O=O.sibling;return null}function l(j){for(var O=new Map;j!==null;)j.key!==null?O.set(j.key,j):O.set(j.index,j),j=j.sibling;return O}function c(j,O){return j=wn(j,O),j.index=0,j.sibling=null,j}function f(j,O,k){return j.index=k,e?(k=j.alternate,k!==null?(k=k.index,k<O?(j.flags|=67108866,O):k):(j.flags|=67108866,O)):(j.flags|=1048576,O)}function y(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function S(j,O,k,$){return O===null||O.tag!==6?(O=Tc(k,j.mode,$),O.return=j,O):(O=c(O,k),O.return=j,O)}function A(j,O,k,$){var he=k.type;return he===w?F(j,O,k.props.children,$,k.key):O!==null&&(O.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Y&&Pa(he)===O.type)?(O=c(O,k.props),Rr(O,k),O.return=j,O):(O=Xl(k.type,k.key,k.props,null,j.mode,$),Rr(O,k),O.return=j,O)}function z(j,O,k,$){return O===null||O.tag!==4||O.stateNode.containerInfo!==k.containerInfo||O.stateNode.implementation!==k.implementation?(O=_c(k,j.mode,$),O.return=j,O):(O=c(O,k.children||[]),O.return=j,O)}function F(j,O,k,$,he){return O===null||O.tag!==7?(O=La(k,j.mode,$,he),O.return=j,O):(O=c(O,k),O.return=j,O)}function q(j,O,k){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Tc(""+O,j.mode,k),O.return=j,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case T:return k=Xl(O.type,O.key,O.props,null,j.mode,k),Rr(k,O),k.return=j,k;case _:return O=_c(O,j.mode,k),O.return=j,O;case Y:return O=Pa(O),q(j,O,k)}if(ue(O)||ne(O))return O=La(O,j.mode,k,null),O.return=j,O;if(typeof O.then=="function")return q(j,no(O),k);if(O.$$typeof===D)return q(j,Wl(j,O),k);ao(j,O)}return null}function P(j,O,k,$){var he=O!==null?O.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return he!==null?null:S(j,O,""+k,$);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case T:return k.key===he?A(j,O,k,$):null;case _:return k.key===he?z(j,O,k,$):null;case Y:return k=Pa(k),P(j,O,k,$)}if(ue(k)||ne(k))return he!==null?null:F(j,O,k,$,null);if(typeof k.then=="function")return P(j,O,no(k),$);if(k.$$typeof===D)return P(j,O,Wl(j,k),$);ao(j,k)}return null}function B(j,O,k,$,he){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return j=j.get(k)||null,S(O,j,""+$,he);if(typeof $=="object"&&$!==null){switch($.$$typeof){case T:return j=j.get($.key===null?k:$.key)||null,A(O,j,$,he);case _:return j=j.get($.key===null?k:$.key)||null,z(O,j,$,he);case Y:return $=Pa($),B(j,O,k,$,he)}if(ue($)||ne($))return j=j.get(k)||null,F(O,j,$,he,null);if(typeof $.then=="function")return B(j,O,k,no($),he);if($.$$typeof===D)return B(j,O,k,Wl(O,$),he);ao(O,$)}return null}function le(j,O,k,$){for(var he=null,De=null,ce=O,Ce=O=0,Ae=null;ce!==null&&Ce<k.length;Ce++){ce.index>Ce?(Ae=ce,ce=null):Ae=ce.sibling;var Le=P(j,ce,k[Ce],$);if(Le===null){ce===null&&(ce=Ae);break}e&&ce&&Le.alternate===null&&t(j,ce),O=f(Le,O,Ce),De===null?he=Le:De.sibling=Le,De=Le,ce=Ae}if(Ce===k.length)return a(j,ce),Oe&&Tn(j,Ce),he;if(ce===null){for(;Ce<k.length;Ce++)ce=q(j,k[Ce],$),ce!==null&&(O=f(ce,O,Ce),De===null?he=ce:De.sibling=ce,De=ce);return Oe&&Tn(j,Ce),he}for(ce=l(ce);Ce<k.length;Ce++)Ae=B(ce,j,Ce,k[Ce],$),Ae!==null&&(e&&Ae.alternate!==null&&ce.delete(Ae.key===null?Ce:Ae.key),O=f(Ae,O,Ce),De===null?he=Ae:De.sibling=Ae,De=Ae);return e&&ce.forEach(function(pa){return t(j,pa)}),Oe&&Tn(j,Ce),he}function ge(j,O,k,$){if(k==null)throw Error(o(151));for(var he=null,De=null,ce=O,Ce=O=0,Ae=null,Le=k.next();ce!==null&&!Le.done;Ce++,Le=k.next()){ce.index>Ce?(Ae=ce,ce=null):Ae=ce.sibling;var pa=P(j,ce,Le.value,$);if(pa===null){ce===null&&(ce=Ae);break}e&&ce&&pa.alternate===null&&t(j,ce),O=f(pa,O,Ce),De===null?he=pa:De.sibling=pa,De=pa,ce=Ae}if(Le.done)return a(j,ce),Oe&&Tn(j,Ce),he;if(ce===null){for(;!Le.done;Ce++,Le=k.next())Le=q(j,Le.value,$),Le!==null&&(O=f(Le,O,Ce),De===null?he=Le:De.sibling=Le,De=Le);return Oe&&Tn(j,Ce),he}for(ce=l(ce);!Le.done;Ce++,Le=k.next())Le=B(ce,j,Ce,Le.value,$),Le!==null&&(e&&Le.alternate!==null&&ce.delete(Le.key===null?Ce:Le.key),O=f(Le,O,Ce),De===null?he=Le:De.sibling=Le,De=Le);return e&&ce.forEach(function(q1){return t(j,q1)}),Oe&&Tn(j,Ce),he}function Be(j,O,k,$){if(typeof k=="object"&&k!==null&&k.type===w&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case T:e:{for(var he=k.key;O!==null;){if(O.key===he){if(he=k.type,he===w){if(O.tag===7){a(j,O.sibling),$=c(O,k.props.children),$.return=j,j=$;break e}}else if(O.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Y&&Pa(he)===O.type){a(j,O.sibling),$=c(O,k.props),Rr($,k),$.return=j,j=$;break e}a(j,O);break}else t(j,O);O=O.sibling}k.type===w?($=La(k.props.children,j.mode,$,k.key),$.return=j,j=$):($=Xl(k.type,k.key,k.props,null,j.mode,$),Rr($,k),$.return=j,j=$)}return y(j);case _:e:{for(he=k.key;O!==null;){if(O.key===he)if(O.tag===4&&O.stateNode.containerInfo===k.containerInfo&&O.stateNode.implementation===k.implementation){a(j,O.sibling),$=c(O,k.children||[]),$.return=j,j=$;break e}else{a(j,O);break}else t(j,O);O=O.sibling}$=_c(k,j.mode,$),$.return=j,j=$}return y(j);case Y:return k=Pa(k),Be(j,O,k,$)}if(ue(k))return le(j,O,k,$);if(ne(k)){if(he=ne(k),typeof he!="function")throw Error(o(150));return k=he.call(k),ge(j,O,k,$)}if(typeof k.then=="function")return Be(j,O,no(k),$);if(k.$$typeof===D)return Be(j,O,Wl(j,k),$);ao(j,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,O!==null&&O.tag===6?(a(j,O.sibling),$=c(O,k),$.return=j,j=$):(a(j,O),$=Tc(k,j.mode,$),$.return=j,j=$),y(j)):a(j,O)}return function(j,O,k,$){try{Er=0;var he=Be(j,O,k,$);return wi=null,he}catch(ce){if(ce===Ci||ce===eo)throw ce;var De=Dt(29,ce,null,j.mode);return De.lanes=$,De.return=j,De}}}var Ua=fh(!0),dh=fh(!1),Qn=!1;function Ic(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Zn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wn(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(je&2)!==0){var c=l.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),l.pending=t,t=ql(e),Xp(e,null,a),t}return $l(e,l,t,a),ql(e)}function Ar(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ap(e,a)}}function Hc(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?c=f=t:f=f.next=t}else c=f=t;a={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Uc=!1;function Nr(){if(Uc){var e=Si;if(e!==null)throw e}}function Or(e,t,a,l){Uc=!1;var c=e.updateQueue;Qn=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,S=c.shared.pending;if(S!==null){c.shared.pending=null;var A=S,z=A.next;A.next=null,y===null?f=z:y.next=z,y=A;var F=e.alternate;F!==null&&(F=F.updateQueue,S=F.lastBaseUpdate,S!==y&&(S===null?F.firstBaseUpdate=z:S.next=z,F.lastBaseUpdate=A))}if(f!==null){var q=c.baseState;y=0,F=z=A=null,S=f;do{var P=S.lane&-536870913,B=P!==S.lane;if(B?(Re&P)===P:(l&P)===P){P!==0&&P===bi&&(Uc=!0),F!==null&&(F=F.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var le=e,ge=S;P=t;var Be=a;switch(ge.tag){case 1:if(le=ge.payload,typeof le=="function"){q=le.call(Be,q,P);break e}q=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ge.payload,P=typeof le=="function"?le.call(Be,q,P):le,P==null)break e;q=v({},q,P);break e;case 2:Qn=!0}}P=S.callback,P!==null&&(e.flags|=64,B&&(e.flags|=8192),B=c.callbacks,B===null?c.callbacks=[P]:B.push(P))}else B={lane:P,tag:S.tag,payload:S.payload,callback:S.callback,next:null},F===null?(z=F=B,A=q):F=F.next=B,y|=P;if(S=S.next,S===null){if(S=c.shared.pending,S===null)break;B=S,S=B.next,B.next=null,c.lastBaseUpdate=B,c.shared.pending=null}}while(!0);F===null&&(A=q),c.baseState=A,c.firstBaseUpdate=z,c.lastBaseUpdate=F,f===null&&(c.shared.lanes=0),aa|=y,e.lanes=y,e.memoizedState=q}}function ph(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function hh(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ph(a[e],t)}var Ti=R(null),io=R(0);function mh(e,t){e=kn,Q(io,e),Q(Ti,t),kn=e|t.baseLanes}function Bc(){Q(io,kn),Q(Ti,Ti.current)}function Gc(){kn=io.current,V(Ti),V(io)}var Lt=R(null),qt=null;function Jn(e){var t=e.alternate;Q(Ze,Ze.current&1),Q(Lt,e),qt===null&&(t===null||Ti.current!==null||t.memoizedState!==null)&&(qt=e)}function Vc(e){Q(Ze,Ze.current),Q(Lt,e),qt===null&&(qt=e)}function gh(e){e.tag===22?(Q(Ze,Ze.current),Q(Lt,e),qt===null&&(qt=e)):ea()}function ea(){Q(Ze,Ze.current),Q(Lt,Lt.current)}function jt(e){V(Lt),qt===e&&(qt=null),V(Ze)}var Ze=R(0);function ro(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Xu(a)||Qu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Rn=0,Se=null,He=null,et=null,lo=!1,_i=!1,Ba=!1,oo=0,Mr=0,Ei=null,PS=0;function Xe(){throw Error(o(321))}function Fc(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Mt(e[a],t[a]))return!1;return!0}function Kc(e,t,a,l,c,f){return Rn=f,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=e===null||e.memoizedState===null?Jh:lu,Ba=!1,f=a(l,c),Ba=!1,_i&&(f=yh(t,a,l,c)),vh(e),f}function vh(e){L.H=jr;var t=He!==null&&He.next!==null;if(Rn=0,et=He=Se=null,lo=!1,Mr=0,Ei=null,t)throw Error(o(300));e===null||tt||(e=e.dependencies,e!==null&&Zl(e)&&(tt=!0))}function yh(e,t,a,l){Se=e;var c=0;do{if(_i&&(Ei=null),Mr=0,_i=!1,25<=c)throw Error(o(301));if(c+=1,et=He=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=em,f=t(a,l)}while(_i);return f}function HS(){var e=L.H,t=e.useState()[0];return t=typeof t.then=="function"?Dr(t):t,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(Se.flags|=1024),t}function Yc(){var e=oo!==0;return oo=0,e}function $c(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function qc(e){if(lo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}lo=!1}Rn=0,et=He=Se=null,_i=!1,Mr=oo=0,Ei=null}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Se.memoizedState=et=e:et=et.next=e,et}function We(){if(He===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var t=et===null?Se.memoizedState:et.next;if(t!==null)et=t,He=e;else{if(e===null)throw Se.alternate===null?Error(o(467)):Error(o(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},et===null?Se.memoizedState=et=e:et=et.next=e}return et}function so(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Dr(e){var t=Mr;return Mr+=1,Ei===null&&(Ei=[]),e=sh(Ei,e,t),t=Se,(et===null?t.memoizedState:et.next)===null&&(t=t.alternate,L.H=t===null||t.memoizedState===null?Jh:lu),e}function co(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Dr(e);if(e.$$typeof===D)return ct(e)}throw Error(o(438,String(e)))}function Xc(e){var t=null,a=Se.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=Se.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=so(),Se.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=te;return t.index++,a}function An(e,t){return typeof t=="function"?t(e):t}function uo(e){var t=We();return Qc(t,He,e)}function Qc(e,t,a){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var c=e.baseQueue,f=l.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}t.baseQueue=c=f,l.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{t=c.next;var S=y=null,A=null,z=t,F=!1;do{var q=z.lane&-536870913;if(q!==z.lane?(Re&q)===q:(Rn&q)===q){var P=z.revertLane;if(P===0)A!==null&&(A=A.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),q===bi&&(F=!0);else if((Rn&P)===P){z=z.next,P===bi&&(F=!0);continue}else q={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},A===null?(S=A=q,y=f):A=A.next=q,Se.lanes|=P,aa|=P;q=z.action,Ba&&a(f,q),f=z.hasEagerState?z.eagerState:a(f,q)}else P={lane:q,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},A===null?(S=A=P,y=f):A=A.next=P,Se.lanes|=q,aa|=q;z=z.next}while(z!==null&&z!==t);if(A===null?y=f:A.next=S,!Mt(f,e.memoizedState)&&(tt=!0,F&&(a=Si,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=A,l.lastRenderedState=f}return c===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Zc(e){var t=We(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var l=a.dispatch,c=a.pending,f=t.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do f=e(f,y.action),y=y.next;while(y!==c);Mt(f,t.memoizedState)||(tt=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),a.lastRenderedState=f}return[f,l]}function xh(e,t,a){var l=Se,c=We(),f=Oe;if(f){if(a===void 0)throw Error(o(407));a=a()}else a=t();var y=!Mt((He||c).memoizedState,a);if(y&&(c.memoizedState=a,tt=!0),c=c.queue,eu(Ch.bind(null,l,c,e),[e]),c.getSnapshot!==t||y||et!==null&&et.memoizedState.tag&1){if(l.flags|=2048,Ri(9,{destroy:void 0},Sh.bind(null,l,c,a,t),null),Ve===null)throw Error(o(349));f||(Rn&127)!==0||bh(l,t,a)}return a}function bh(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Se.updateQueue,t===null?(t=so(),Se.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Sh(e,t,a,l){t.value=a,t.getSnapshot=l,wh(t)&&Th(e)}function Ch(e,t,a){return a(function(){wh(t)&&Th(e)})}function wh(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Mt(e,a)}catch{return!0}}function Th(e){var t=Da(e,2);t!==null&&Rt(t,e,2)}function Wc(e){var t=bt();if(typeof e=="function"){var a=e;if(e=a(),Ba){Vn(!0);try{a()}finally{Vn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:e},t}function _h(e,t,a,l){return e.baseState=a,Qc(e,He,typeof l=="function"?l:An)}function US(e,t,a,l,c){if(ho(e))throw Error(o(485));if(e=t.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};L.T!==null?a(!0):f.isTransition=!1,l(f),a=t.pending,a===null?(f.next=t.pending=f,Eh(t,f)):(f.next=a.next,t.pending=a.next=f)}}function Eh(e,t){var a=t.action,l=t.payload,c=e.state;if(t.isTransition){var f=L.T,y={};L.T=y;try{var S=a(c,l),A=L.S;A!==null&&A(y,S),Rh(e,t,S)}catch(z){Jc(e,t,z)}finally{f!==null&&y.types!==null&&(f.types=y.types),L.T=f}}else try{f=a(c,l),Rh(e,t,f)}catch(z){Jc(e,t,z)}}function Rh(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Ah(e,t,l)},function(l){return Jc(e,t,l)}):Ah(e,t,a)}function Ah(e,t,a){t.status="fulfilled",t.value=a,Nh(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Eh(e,a)))}function Jc(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Nh(t),t=t.next;while(t!==l)}e.action=null}function Nh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Oh(e,t){return t}function Mh(e,t){if(Oe){var a=Ve.formState;if(a!==null){e:{var l=Se;if(Oe){if(Ke){t:{for(var c=Ke,f=$t;c.nodeType!==8;){if(!f){c=null;break t}if(c=Xt(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ke=Xt(c.nextSibling),l=c.data==="F!";break e}}qn(l)}l=!1}l&&(t=a[0])}}return a=bt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oh,lastRenderedState:t},a.queue=l,a=Qh.bind(null,Se,l),l.dispatch=a,l=Wc(!1),f=ru.bind(null,Se,!1,l.queue),l=bt(),c={state:t,dispatch:null,action:e,pending:null},l.queue=c,a=US.bind(null,Se,c,f,a),c.dispatch=a,l.memoizedState=e,[t,a,!1]}function Dh(e){var t=We();return Lh(t,He,e)}function Lh(e,t,a){if(t=Qc(e,t,Oh)[0],e=uo(An)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Dr(t)}catch(y){throw y===Ci?eo:y}else l=t;t=We();var c=t.queue,f=c.dispatch;return a!==t.memoizedState&&(Se.flags|=2048,Ri(9,{destroy:void 0},BS.bind(null,c,a),null)),[l,f,e]}function BS(e,t){e.action=t}function jh(e){var t=We(),a=He;if(a!==null)return Lh(t,a,e);We(),t=t.memoizedState,a=We();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Ri(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=Se.updateQueue,t===null&&(t=so(),Se.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function kh(){return We().memoizedState}function fo(e,t,a,l){var c=bt();Se.flags|=e,c.memoizedState=Ri(1|t,{destroy:void 0},a,l===void 0?null:l)}function po(e,t,a,l){var c=We();l=l===void 0?null:l;var f=c.memoizedState.inst;He!==null&&l!==null&&Fc(l,He.memoizedState.deps)?c.memoizedState=Ri(t,f,a,l):(Se.flags|=e,c.memoizedState=Ri(1|t,f,a,l))}function zh(e,t){fo(8390656,8,e,t)}function eu(e,t){po(2048,8,e,t)}function GS(e){Se.flags|=4;var t=Se.updateQueue;if(t===null)t=so(),Se.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Ih(e){var t=We().memoizedState;return GS({ref:t,nextImpl:e}),function(){if((je&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Ph(e,t){return po(4,2,e,t)}function Hh(e,t){return po(4,4,e,t)}function Uh(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bh(e,t,a){a=a!=null?a.concat([e]):null,po(4,4,Uh.bind(null,t,e),a)}function tu(){}function Gh(e,t){var a=We();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Fc(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Vh(e,t){var a=We();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Fc(t,l[1]))return l[0];if(l=e(),Ba){Vn(!0);try{e()}finally{Vn(!1)}}return a.memoizedState=[l,t],l}function nu(e,t,a){return a===void 0||(Rn&1073741824)!==0&&(Re&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Fm(),Se.lanes|=e,aa|=e,a)}function Fh(e,t,a,l){return Mt(a,t)?a:Ti.current!==null?(e=nu(e,a,l),Mt(e,t)||(tt=!0),e):(Rn&42)===0||(Rn&1073741824)!==0&&(Re&261930)===0?(tt=!0,e.memoizedState=a):(e=Fm(),Se.lanes|=e,aa|=e,t)}function Kh(e,t,a,l,c){var f=K.p;K.p=f!==0&&8>f?f:8;var y=L.T,S={};L.T=S,ru(e,!1,t,a);try{var A=c(),z=L.S;if(z!==null&&z(S,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var F=IS(A,l);Lr(e,t,F,It(e))}else Lr(e,t,l,It(e))}catch(q){Lr(e,t,{then:function(){},status:"rejected",reason:q},It())}finally{K.p=f,y!==null&&S.types!==null&&(y.types=S.types),L.T=y}}function VS(){}function au(e,t,a,l){if(e.tag!==5)throw Error(o(476));var c=Yh(e).queue;Kh(e,c,t,I,a===null?VS:function(){return $h(e),a(l)})}function Yh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:I},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function $h(e){var t=Yh(e);t.next===null&&(t=e.alternate.memoizedState),Lr(e,t.next.queue,{},It())}function iu(){return ct(Qr)}function qh(){return We().memoizedState}function Xh(){return We().memoizedState}function FS(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=It();e=Zn(a);var l=Wn(t,e,a);l!==null&&(Rt(l,t,a),Ar(l,t,a)),t={cache:Lc()},e.payload=t;return}t=t.return}}function KS(e,t,a){var l=It();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ho(e)?Zh(t,a):(a=Cc(e,t,a,l),a!==null&&(Rt(a,e,l),Wh(a,t,l)))}function Qh(e,t,a){var l=It();Lr(e,t,a,l)}function Lr(e,t,a,l){var c={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ho(e))Zh(t,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var y=t.lastRenderedState,S=f(y,a);if(c.hasEagerState=!0,c.eagerState=S,Mt(S,y))return $l(e,t,c,0),Ve===null&&Yl(),!1}catch{}if(a=Cc(e,t,c,l),a!==null)return Rt(a,e,l),Wh(a,t,l),!0}return!1}function ru(e,t,a,l){if(l={lane:2,revertLane:Iu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ho(e)){if(t)throw Error(o(479))}else t=Cc(e,a,l,2),t!==null&&Rt(t,e,2)}function ho(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function Zh(e,t){_i=lo=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Wh(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ap(e,a)}}var jr={readContext:ct,use:co,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe};jr.useEffectEvent=Xe;var Jh={readContext:ct,use:co,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:zh,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,fo(4194308,4,Uh.bind(null,t,e),a)},useLayoutEffect:function(e,t){return fo(4194308,4,e,t)},useInsertionEffect:function(e,t){fo(4,2,e,t)},useMemo:function(e,t){var a=bt();t=t===void 0?null:t;var l=e();if(Ba){Vn(!0);try{e()}finally{Vn(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=bt();if(a!==void 0){var c=a(t);if(Ba){Vn(!0);try{a(t)}finally{Vn(!1)}}}else c=t;return l.memoizedState=l.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},l.queue=e,e=e.dispatch=KS.bind(null,Se,e),[l.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:function(e){e=Wc(e);var t=e.queue,a=Qh.bind(null,Se,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:tu,useDeferredValue:function(e,t){var a=bt();return nu(a,e,t)},useTransition:function(){var e=Wc(!1);return e=Kh.bind(null,Se,e.queue,!0,!1),bt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=Se,c=bt();if(Oe){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),Ve===null)throw Error(o(349));(Re&127)!==0||bh(l,t,a)}c.memoizedState=a;var f={value:a,getSnapshot:t};return c.queue=f,zh(Ch.bind(null,l,f,e),[e]),l.flags|=2048,Ri(9,{destroy:void 0},Sh.bind(null,l,f,a,t),null),a},useId:function(){var e=bt(),t=Ve.identifierPrefix;if(Oe){var a=cn,l=sn;a=(l&~(1<<32-Ot(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=oo++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=PS++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:iu,useFormState:Mh,useActionState:Mh,useOptimistic:function(e){var t=bt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=ru.bind(null,Se,!0,a),a.dispatch=t,[e,t]},useMemoCache:Xc,useCacheRefresh:function(){return bt().memoizedState=FS.bind(null,Se)},useEffectEvent:function(e){var t=bt(),a={impl:e};return t.memoizedState=a,function(){if((je&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},lu={readContext:ct,use:co,useCallback:Gh,useContext:ct,useEffect:eu,useImperativeHandle:Bh,useInsertionEffect:Ph,useLayoutEffect:Hh,useMemo:Vh,useReducer:uo,useRef:kh,useState:function(){return uo(An)},useDebugValue:tu,useDeferredValue:function(e,t){var a=We();return Fh(a,He.memoizedState,e,t)},useTransition:function(){var e=uo(An)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Dr(e),t]},useSyncExternalStore:xh,useId:qh,useHostTransitionStatus:iu,useFormState:Dh,useActionState:Dh,useOptimistic:function(e,t){var a=We();return _h(a,He,e,t)},useMemoCache:Xc,useCacheRefresh:Xh};lu.useEffectEvent=Ih;var em={readContext:ct,use:co,useCallback:Gh,useContext:ct,useEffect:eu,useImperativeHandle:Bh,useInsertionEffect:Ph,useLayoutEffect:Hh,useMemo:Vh,useReducer:Zc,useRef:kh,useState:function(){return Zc(An)},useDebugValue:tu,useDeferredValue:function(e,t){var a=We();return He===null?nu(a,e,t):Fh(a,He.memoizedState,e,t)},useTransition:function(){var e=Zc(An)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Dr(e),t]},useSyncExternalStore:xh,useId:qh,useHostTransitionStatus:iu,useFormState:jh,useActionState:jh,useOptimistic:function(e,t){var a=We();return He!==null?_h(a,He,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Xc,useCacheRefresh:Xh};em.useEffectEvent=Ih;function ou(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:v({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var su={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=It(),c=Zn(l);c.payload=t,a!=null&&(c.callback=a),t=Wn(e,c,l),t!==null&&(Rt(t,e,l),Ar(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=It(),c=Zn(l);c.tag=1,c.payload=t,a!=null&&(c.callback=a),t=Wn(e,c,l),t!==null&&(Rt(t,e,l),Ar(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=It(),l=Zn(a);l.tag=2,t!=null&&(l.callback=t),t=Wn(e,l,a),t!==null&&(Rt(t,e,a),Ar(t,e,a))}};function tm(e,t,a,l,c,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,y):t.prototype&&t.prototype.isPureReactComponent?!br(a,l)||!br(c,f):!0}function nm(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&su.enqueueReplaceState(t,t.state,null)}function Ga(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=v({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function am(e){Kl(e)}function im(e){console.error(e)}function rm(e){Kl(e)}function mo(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function lm(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function cu(e,t,a){return a=Zn(a),a.tag=3,a.payload={element:null},a.callback=function(){mo(e,t)},a}function om(e){return e=Zn(e),e.tag=3,e}function sm(e,t,a,l){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=l.value;e.payload=function(){return c(f)},e.callback=function(){lm(t,a,l)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){lm(t,a,l),typeof c!="function"&&(ia===null?ia=new Set([this]):ia.add(this));var S=l.stack;this.componentDidCatch(l.value,{componentStack:S!==null?S:""})})}function YS(e,t,a,l,c){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&xi(t,a,c,!0),a=Lt.current,a!==null){switch(a.tag){case 31:case 13:return qt===null?Ro():a.alternate===null&&Qe===0&&(Qe=3),a.flags&=-257,a.flags|=65536,a.lanes=c,l===to?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),ju(e,l,c)),!1;case 22:return a.flags|=65536,l===to?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),ju(e,l,c)),!1}throw Error(o(435,a.tag))}return ju(e,l,c),Ro(),!1}if(Oe)return t=Lt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,l!==Ac&&(e=Error(o(422),{cause:l}),wr(Ft(e,a)))):(l!==Ac&&(t=Error(o(423),{cause:l}),wr(Ft(t,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,l=Ft(l,a),c=cu(e.stateNode,l,c),Hc(e,c),Qe!==4&&(Qe=2)),!1;var f=Error(o(520),{cause:l});if(f=Ft(f,a),Gr===null?Gr=[f]:Gr.push(f),Qe!==4&&(Qe=2),t===null)return!0;l=Ft(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=cu(a.stateNode,l,e),Hc(a,e),!1;case 1:if(t=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ia===null||!ia.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=om(c),sm(c,e,a,l),Hc(a,c),!1}a=a.return}while(a!==null);return!1}var uu=Error(o(461)),tt=!1;function ut(e,t,a,l){t.child=e===null?dh(t,null,a,l):Ua(t,e.child,a,l)}function cm(e,t,a,l,c){a=a.render;var f=t.ref;if("ref"in l){var y={};for(var S in l)S!=="ref"&&(y[S]=l[S])}else y=l;return za(t),l=Kc(e,t,a,y,f,c),S=Yc(),e!==null&&!tt?($c(e,t,c),Nn(e,t,c)):(Oe&&S&&Ec(t),t.flags|=1,ut(e,t,l,c),t.child)}function um(e,t,a,l,c){if(e===null){var f=a.type;return typeof f=="function"&&!wc(f)&&f.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=f,fm(e,t,f,l,c)):(e=Xl(a.type,null,l,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,!yu(e,c)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:br,a(y,l)&&e.ref===t.ref)return Nn(e,t,c)}return t.flags|=1,e=wn(f,l),e.ref=t.ref,e.return=t,t.child=e}function fm(e,t,a,l,c){if(e!==null){var f=e.memoizedProps;if(br(f,l)&&e.ref===t.ref)if(tt=!1,t.pendingProps=l=f,yu(e,c))(e.flags&131072)!==0&&(tt=!0);else return t.lanes=e.lanes,Nn(e,t,c)}return fu(e,t,a,l,c)}function dm(e,t,a,l){var c=l.children,f=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(l=t.child=e.child,c=0;l!==null;)c=c|l.lanes|l.childLanes,l=l.sibling;l=c&~f}else l=0,t.child=null;return pm(e,t,f,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Jl(t,f!==null?f.cachePool:null),f!==null?mh(t,f):Bc(),gh(t);else return l=t.lanes=536870912,pm(e,t,f!==null?f.baseLanes|a:a,a,l)}else f!==null?(Jl(t,f.cachePool),mh(t,f),ea(),t.memoizedState=null):(e!==null&&Jl(t,null),Bc(),ea());return ut(e,t,c,a),t.child}function kr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pm(e,t,a,l,c){var f=kc();return f=f===null?null:{parent:Je._currentValue,pool:f},t.memoizedState={baseLanes:a,cachePool:f},e!==null&&Jl(t,null),Bc(),gh(t),e!==null&&xi(e,t,l,!0),t.childLanes=c,null}function go(e,t){return t=yo({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hm(e,t,a){return Ua(t,e.child,null,a),e=go(t,t.pendingProps),e.flags|=2,jt(t),t.memoizedState=null,e}function $S(e,t,a){var l=t.pendingProps,c=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Oe){if(l.mode==="hidden")return e=go(t,l),t.lanes=536870912,kr(null,e);if(Vc(t),(e=Ke)?(e=Eg(e,$t),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yn!==null?{id:sn,overflow:cn}:null,retryLane:536870912,hydrationErrors:null},a=Zp(e),a.return=t,t.child=a,st=t,Ke=null)):e=null,e===null)throw qn(t);return t.lanes=536870912,null}return go(t,l)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if(Vc(t),c)if(t.flags&256)t.flags&=-257,t=hm(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(tt||xi(e,t,a,!1),c=(a&e.childLanes)!==0,tt||c){if(l=Ve,l!==null&&(y=ip(l,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,Da(e,y),Rt(l,e,y),uu;Ro(),t=hm(e,t,a)}else e=f.treeContext,Ke=Xt(y.nextSibling),st=t,Oe=!0,$n=null,$t=!1,e!==null&&eh(t,e),t=go(t,l),t.flags|=4096;return t}return e=wn(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vo(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function fu(e,t,a,l,c){return za(t),a=Kc(e,t,a,l,void 0,c),l=Yc(),e!==null&&!tt?($c(e,t,c),Nn(e,t,c)):(Oe&&l&&Ec(t),t.flags|=1,ut(e,t,a,c),t.child)}function mm(e,t,a,l,c,f){return za(t),t.updateQueue=null,a=yh(t,l,a,c),vh(e),l=Yc(),e!==null&&!tt?($c(e,t,f),Nn(e,t,f)):(Oe&&l&&Ec(t),t.flags|=1,ut(e,t,a,f),t.child)}function gm(e,t,a,l,c){if(za(t),t.stateNode===null){var f=mi,y=a.contextType;typeof y=="object"&&y!==null&&(f=ct(y)),f=new a(l,f),t.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=su,t.stateNode=f,f._reactInternals=t,f=t.stateNode,f.props=l,f.state=t.memoizedState,f.refs={},Ic(t),y=a.contextType,f.context=typeof y=="object"&&y!==null?ct(y):mi,f.state=t.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(ou(t,a,y,l),f.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&su.enqueueReplaceState(f,f.state,null),Or(t,l,f,c),Nr(),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){f=t.stateNode;var S=t.memoizedProps,A=Ga(a,S);f.props=A;var z=f.context,F=a.contextType;y=mi,typeof F=="object"&&F!==null&&(y=ct(F));var q=a.getDerivedStateFromProps;F=typeof q=="function"||typeof f.getSnapshotBeforeUpdate=="function",S=t.pendingProps!==S,F||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S||z!==y)&&nm(t,f,l,y),Qn=!1;var P=t.memoizedState;f.state=P,Or(t,l,f,c),Nr(),z=t.memoizedState,S||P!==z||Qn?(typeof q=="function"&&(ou(t,a,q,l),z=t.memoizedState),(A=Qn||tm(t,a,A,l,P,z,y))?(F||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=z),f.props=l,f.state=z,f.context=y,l=A):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{f=t.stateNode,Pc(e,t),y=t.memoizedProps,F=Ga(a,y),f.props=F,q=t.pendingProps,P=f.context,z=a.contextType,A=mi,typeof z=="object"&&z!==null&&(A=ct(z)),S=a.getDerivedStateFromProps,(z=typeof S=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==q||P!==A)&&nm(t,f,l,A),Qn=!1,P=t.memoizedState,f.state=P,Or(t,l,f,c),Nr();var B=t.memoizedState;y!==q||P!==B||Qn||e!==null&&e.dependencies!==null&&Zl(e.dependencies)?(typeof S=="function"&&(ou(t,a,S,l),B=t.memoizedState),(F=Qn||tm(t,a,F,l,P,B,A)||e!==null&&e.dependencies!==null&&Zl(e.dependencies))?(z||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,B,A),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,B,A)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&P===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&P===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=B),f.props=l,f.state=B,f.context=A,l=F):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&P===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&P===e.memoizedState||(t.flags|=1024),l=!1)}return f=l,vo(e,t),l=(t.flags&128)!==0,f||l?(f=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:f.render(),t.flags|=1,e!==null&&l?(t.child=Ua(t,e.child,null,c),t.child=Ua(t,null,a,c)):ut(e,t,a,c),t.memoizedState=f.state,e=t.child):e=Nn(e,t,c),e}function vm(e,t,a,l){return ja(),t.flags|=256,ut(e,t,a,l),t.child}var du={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pu(e){return{baseLanes:e,cachePool:lh()}}function hu(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=zt),e}function ym(e,t,a){var l=t.pendingProps,c=!1,f=(t.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(Ze.current&2)!==0),y&&(c=!0,t.flags&=-129),y=(t.flags&32)!==0,t.flags&=-33,e===null){if(Oe){if(c?Jn(t):ea(),(e=Ke)?(e=Eg(e,$t),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yn!==null?{id:sn,overflow:cn}:null,retryLane:536870912,hydrationErrors:null},a=Zp(e),a.return=t,t.child=a,st=t,Ke=null)):e=null,e===null)throw qn(t);return Qu(e)?t.lanes=32:t.lanes=536870912,null}var S=l.children;return l=l.fallback,c?(ea(),c=t.mode,S=yo({mode:"hidden",children:S},c),l=La(l,c,a,null),S.return=t,l.return=t,S.sibling=l,t.child=S,l=t.child,l.memoizedState=pu(a),l.childLanes=hu(e,y,a),t.memoizedState=du,kr(null,l)):(Jn(t),mu(t,S))}var A=e.memoizedState;if(A!==null&&(S=A.dehydrated,S!==null)){if(f)t.flags&256?(Jn(t),t.flags&=-257,t=gu(e,t,a)):t.memoizedState!==null?(ea(),t.child=e.child,t.flags|=128,t=null):(ea(),S=l.fallback,c=t.mode,l=yo({mode:"visible",children:l.children},c),S=La(S,c,a,null),S.flags|=2,l.return=t,S.return=t,l.sibling=S,t.child=l,Ua(t,e.child,null,a),l=t.child,l.memoizedState=pu(a),l.childLanes=hu(e,y,a),t.memoizedState=du,t=kr(null,l));else if(Jn(t),Qu(S)){if(y=S.nextSibling&&S.nextSibling.dataset,y)var z=y.dgst;y=z,l=Error(o(419)),l.stack="",l.digest=y,wr({value:l,source:null,stack:null}),t=gu(e,t,a)}else if(tt||xi(e,t,a,!1),y=(a&e.childLanes)!==0,tt||y){if(y=Ve,y!==null&&(l=ip(y,a),l!==0&&l!==A.retryLane))throw A.retryLane=l,Da(e,l),Rt(y,e,l),uu;Xu(S)||Ro(),t=gu(e,t,a)}else Xu(S)?(t.flags|=192,t.child=e.child,t=null):(e=A.treeContext,Ke=Xt(S.nextSibling),st=t,Oe=!0,$n=null,$t=!1,e!==null&&eh(t,e),t=mu(t,l.children),t.flags|=4096);return t}return c?(ea(),S=l.fallback,c=t.mode,A=e.child,z=A.sibling,l=wn(A,{mode:"hidden",children:l.children}),l.subtreeFlags=A.subtreeFlags&65011712,z!==null?S=wn(z,S):(S=La(S,c,a,null),S.flags|=2),S.return=t,l.return=t,l.sibling=S,t.child=l,kr(null,l),l=t.child,S=e.child.memoizedState,S===null?S=pu(a):(c=S.cachePool,c!==null?(A=Je._currentValue,c=c.parent!==A?{parent:A,pool:A}:c):c=lh(),S={baseLanes:S.baseLanes|a,cachePool:c}),l.memoizedState=S,l.childLanes=hu(e,y,a),t.memoizedState=du,kr(e.child,l)):(Jn(t),a=e.child,e=a.sibling,a=wn(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(y=t.deletions,y===null?(t.deletions=[e],t.flags|=16):y.push(e)),t.child=a,t.memoizedState=null,a)}function mu(e,t){return t=yo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function yo(e,t){return e=Dt(22,e,null,t),e.lanes=0,e}function gu(e,t,a){return Ua(t,e.child,null,a),e=mu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xm(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Mc(e.return,t,a)}function vu(e,t,a,l,c,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:c,treeForkCount:f}:(y.isBackwards=t,y.rendering=null,y.renderingStartTime=0,y.last=l,y.tail=a,y.tailMode=c,y.treeForkCount=f)}function bm(e,t,a){var l=t.pendingProps,c=l.revealOrder,f=l.tail;l=l.children;var y=Ze.current,S=(y&2)!==0;if(S?(y=y&1|2,t.flags|=128):y&=1,Q(Ze,y),ut(e,t,l,a),l=Oe?Cr:0,!S&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xm(e,a,t);else if(e.tag===19)xm(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=t.child,c=null;a!==null;)e=a.alternate,e!==null&&ro(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=t.child,t.child=null):(c=a.sibling,a.sibling=null),vu(t,!1,c,a,f,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&ro(e)===null){t.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}vu(t,!0,a,null,f,l);break;case"together":vu(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Nn(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),aa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(xi(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=wn(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=wn(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function yu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Zl(e)))}function qS(e,t,a){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),Xn(t,Je,e.memoizedState.cache),ja();break;case 27:case 5:Ee(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:Xn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Vc(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Jn(t),t.flags|=128,null):(a&t.child.childLanes)!==0?ym(e,t,a):(Jn(t),e=Nn(e,t,a),e!==null?e.sibling:null);Jn(t);break;case 19:var c=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(xi(e,t,a,!1),l=(a&t.childLanes)!==0),c){if(l)return bm(e,t,a);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Q(Ze,Ze.current),l)break;return null;case 22:return t.lanes=0,dm(e,t,a,t.pendingProps);case 24:Xn(t,Je,e.memoizedState.cache)}return Nn(e,t,a)}function Sm(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)tt=!0;else{if(!yu(e,a)&&(t.flags&128)===0)return tt=!1,qS(e,t,a);tt=(e.flags&131072)!==0}else tt=!1,Oe&&(t.flags&1048576)!==0&&Jp(t,Cr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Pa(t.elementType),t.type=e,typeof e=="function")wc(e)?(l=Ga(e,l),t.tag=1,t=gm(null,t,e,l,a)):(t.tag=0,t=fu(null,t,e,l,a));else{if(e!=null){var c=e.$$typeof;if(c===H){t.tag=11,t=cm(null,t,e,l,a);break e}else if(c===U){t.tag=14,t=um(null,t,e,l,a);break e}}throw t=ie(e)||e,Error(o(306,t,""))}}return t;case 0:return fu(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,c=Ga(l,t.pendingProps),gm(e,t,l,c,a);case 3:e:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var f=t.memoizedState;c=f.element,Pc(e,t),Or(t,l,null,a);var y=t.memoizedState;if(l=y.cache,Xn(t,Je,l),l!==f.cache&&Dc(t,[Je],a,!0),Nr(),l=y.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:y.cache},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){t=vm(e,t,l,a);break e}else if(l!==c){c=Ft(Error(o(424)),t),wr(c),t=vm(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ke=Xt(e.firstChild),st=t,Oe=!0,$n=null,$t=!0,a=dh(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ja(),l===c){t=Nn(e,t,a);break e}ut(e,t,l,a)}t=t.child}return t;case 26:return vo(e,t),e===null?(a=Dg(t.type,null,t.pendingProps,null))?t.memoizedState=a:Oe||(a=t.type,e=t.pendingProps,l=jo(me.current).createElement(a),l[ot]=t,l[St]=e,ft(l,a,e),rt(l),t.stateNode=l):t.memoizedState=Dg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ee(t),e===null&&Oe&&(l=t.stateNode=Ng(t.type,t.pendingProps,me.current),st=t,$t=!0,c=Ke,sa(t.type)?(Zu=c,Ke=Xt(l.firstChild)):Ke=c),ut(e,t,t.pendingProps.children,a),vo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Oe&&((c=l=Ke)&&(l=T1(l,t.type,t.pendingProps,$t),l!==null?(t.stateNode=l,st=t,Ke=Xt(l.firstChild),$t=!1,c=!0):c=!1),c||qn(t)),Ee(t),c=t.type,f=t.pendingProps,y=e!==null?e.memoizedProps:null,l=f.children,Yu(c,f)?l=null:y!==null&&Yu(c,y)&&(t.flags|=32),t.memoizedState!==null&&(c=Kc(e,t,HS,null,null,a),Qr._currentValue=c),vo(e,t),ut(e,t,l,a),t.child;case 6:return e===null&&Oe&&((e=a=Ke)&&(a=_1(a,t.pendingProps,$t),a!==null?(t.stateNode=a,st=t,Ke=null,e=!0):e=!1),e||qn(t)),null;case 13:return ym(e,t,a);case 4:return ye(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ua(t,null,l,a):ut(e,t,l,a),t.child;case 11:return cm(e,t,t.type,t.pendingProps,a);case 7:return ut(e,t,t.pendingProps,a),t.child;case 8:return ut(e,t,t.pendingProps.children,a),t.child;case 12:return ut(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,Xn(t,t.type,l.value),ut(e,t,l.children,a),t.child;case 9:return c=t.type._context,l=t.pendingProps.children,za(t),c=ct(c),l=l(c),t.flags|=1,ut(e,t,l,a),t.child;case 14:return um(e,t,t.type,t.pendingProps,a);case 15:return fm(e,t,t.type,t.pendingProps,a);case 19:return bm(e,t,a);case 31:return $S(e,t,a);case 22:return dm(e,t,a,t.pendingProps);case 24:return za(t),l=ct(Je),e===null?(c=kc(),c===null&&(c=Ve,f=Lc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),t.memoizedState={parent:l,cache:c},Ic(t),Xn(t,Je,c)):((e.lanes&a)!==0&&(Pc(e,t),Or(t,null,null,a),Nr()),c=e.memoizedState,f=t.memoizedState,c.parent!==l?(c={parent:l,cache:l},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),Xn(t,Je,l)):(l=f.cache,Xn(t,Je,l),l!==c.cache&&Dc(t,[Je],a,!0))),ut(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function On(e){e.flags|=4}function xu(e,t,a,l,c){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(qm())e.flags|=8192;else throw Ha=to,zc}else e.flags&=-16777217}function Cm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ig(t))if(qm())e.flags|=8192;else throw Ha=to,zc}function xo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?tp():536870912,e.lanes|=t,Mi|=t)}function zr(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,l|=c.subtreeFlags&65011712,l|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function XS(e,t,a){var l=t.pendingProps;switch(Rc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return Ye(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),En(Je),be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(yi(t)?On(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Nc())),Ye(t),null;case 26:var c=t.type,f=t.memoizedState;return e===null?(On(t),f!==null?(Ye(t),Cm(t,f)):(Ye(t),xu(t,c,null,l,a))):f?f!==e.memoizedState?(On(t),Ye(t),Cm(t,f)):(Ye(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&On(t),Ye(t),xu(t,c,e,l,a)),null;case 27:if(Me(t),a=me.current,c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&On(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Ye(t),null}e=ee.current,yi(t)?th(t):(e=Ng(c,l,a),t.stateNode=e,On(t))}return Ye(t),null;case 5:if(Me(t),c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&On(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Ye(t),null}if(f=ee.current,yi(t))th(t);else{var y=jo(me.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof l.is=="string"?y.createElement("select",{is:l.is}):y.createElement("select"),l.multiple?f.multiple=!0:l.size&&(f.size=l.size);break;default:f=typeof l.is=="string"?y.createElement(c,{is:l.is}):y.createElement(c)}}f[ot]=t,f[St]=l;e:for(y=t.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}t.stateNode=f;e:switch(ft(f,c,l),c){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&On(t)}}return Ye(t),xu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&On(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=me.current,yi(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,c=st,c!==null)switch(c.tag){case 27:case 5:l=c.memoizedProps}e[ot]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||yg(e.nodeValue,a)),e||qn(t,!0)}else e=jo(e).createTextNode(l),e[ot]=t,t.stateNode=e}return Ye(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=yi(t),a!==null){if(e===null){if(!l)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[ot]=t}else ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),e=!1}else a=Nc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(jt(t),t):(jt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Ye(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=yi(t),l!==null&&l.dehydrated!==null){if(e===null){if(!c)throw Error(o(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(o(317));c[ot]=t}else ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),c=!1}else c=Nc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(jt(t),t):(jt(t),null)}return jt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,c=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(c=l.alternate.memoizedState.cachePool.pool),f=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==c&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),xo(t,t.updateQueue),Ye(t),null);case 4:return be(),e===null&&Bu(t.stateNode.containerInfo),Ye(t),null;case 10:return En(t.type),Ye(t),null;case 19:if(V(Ze),l=t.memoizedState,l===null)return Ye(t),null;if(c=(t.flags&128)!==0,f=l.rendering,f===null)if(c)zr(l,!1);else{if(Qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=ro(e),f!==null){for(t.flags|=128,zr(l,!1),e=f.updateQueue,t.updateQueue=e,xo(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Qp(a,e),a=a.sibling;return Q(Ze,Ze.current&1|2),Oe&&Tn(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&At()>To&&(t.flags|=128,c=!0,zr(l,!1),t.lanes=4194304)}else{if(!c)if(e=ro(f),e!==null){if(t.flags|=128,c=!0,e=e.updateQueue,t.updateQueue=e,xo(t,e),zr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!f.alternate&&!Oe)return Ye(t),null}else 2*At()-l.renderingStartTime>To&&a!==536870912&&(t.flags|=128,c=!0,zr(l,!1),t.lanes=4194304);l.isBackwards?(f.sibling=t.child,t.child=f):(e=l.last,e!==null?e.sibling=f:t.child=f,l.last=f)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=At(),e.sibling=null,a=Ze.current,Q(Ze,c?a&1|2:a&1),Oe&&Tn(t,l.treeForkCount),e):(Ye(t),null);case 22:case 23:return jt(t),Gc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),a=t.updateQueue,a!==null&&xo(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&V(Ia),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),En(Je),Ye(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function QS(e,t){switch(Rc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return En(Je),be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Me(t),null;case 31:if(t.memoizedState!==null){if(jt(t),t.alternate===null)throw Error(o(340));ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(jt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Ze),null;case 4:return be(),null;case 10:return En(t.type),null;case 22:case 23:return jt(t),Gc(),e!==null&&V(Ia),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return En(Je),null;case 25:return null;default:return null}}function wm(e,t){switch(Rc(t),t.tag){case 3:En(Je),be();break;case 26:case 27:case 5:Me(t);break;case 4:be();break;case 31:t.memoizedState!==null&&jt(t);break;case 13:jt(t);break;case 19:V(Ze);break;case 10:En(t.type);break;case 22:case 23:jt(t),Gc(),e!==null&&V(Ia);break;case 24:En(Je)}}function Ir(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var c=l.next;a=c;do{if((a.tag&e)===e){l=void 0;var f=a.create,y=a.inst;l=f(),y.destroy=l}a=a.next}while(a!==c)}}catch(S){Pe(t,t.return,S)}}function ta(e,t,a){try{var l=t.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var f=c.next;l=f;do{if((l.tag&e)===e){var y=l.inst,S=y.destroy;if(S!==void 0){y.destroy=void 0,c=t;var A=a,z=S;try{z()}catch(F){Pe(c,A,F)}}}l=l.next}while(l!==f)}}catch(F){Pe(t,t.return,F)}}function Tm(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{hh(t,a)}catch(l){Pe(e,e.return,l)}}}function _m(e,t,a){a.props=Ga(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Pe(e,t,l)}}function Pr(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(c){Pe(e,t,c)}}function un(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(c){Pe(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Pe(e,t,c)}else a.current=null}function Em(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(c){Pe(e,e.return,c)}}function bu(e,t,a){try{var l=e.stateNode;y1(l,e.type,a,t),l[St]=t}catch(c){Pe(e,e.return,c)}}function Rm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&sa(e.type)||e.tag===4}function Su(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&sa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cu(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Sn));else if(l!==4&&(l===27&&sa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Cu(e,t,a),e=e.sibling;e!==null;)Cu(e,t,a),e=e.sibling}function bo(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&sa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(bo(e,t,a),e=e.sibling;e!==null;)bo(e,t,a),e=e.sibling}function Am(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);ft(t,l,a),t[ot]=e,t[St]=a}catch(f){Pe(e,e.return,f)}}var Mn=!1,nt=!1,wu=!1,Nm=typeof WeakSet=="function"?WeakSet:Set,lt=null;function ZS(e,t){if(e=e.containerInfo,Fu=Bo,e=Bp(e),gc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var c=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var y=0,S=-1,A=-1,z=0,F=0,q=e,P=null;t:for(;;){for(var B;q!==a||c!==0&&q.nodeType!==3||(S=y+c),q!==f||l!==0&&q.nodeType!==3||(A=y+l),q.nodeType===3&&(y+=q.nodeValue.length),(B=q.firstChild)!==null;)P=q,q=B;for(;;){if(q===e)break t;if(P===a&&++z===c&&(S=y),P===f&&++F===l&&(A=y),(B=q.nextSibling)!==null)break;q=P,P=q.parentNode}q=B}a=S===-1||A===-1?null:{start:S,end:A}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ku={focusedElem:e,selectionRange:a},Bo=!1,lt=t;lt!==null;)if(t=lt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,lt=e;else for(;lt!==null;){switch(t=lt,f=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=t,c=f.memoizedProps,f=f.memoizedState,l=a.stateNode;try{var le=Ga(a.type,c);e=l.getSnapshotBeforeUpdate(le,f),l.__reactInternalSnapshotBeforeUpdate=e}catch(ge){Pe(a,a.return,ge)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)qu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,lt=e;break}lt=t.return}}function Om(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Ln(e,a),l&4&&Ir(5,a);break;case 1:if(Ln(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(y){Pe(a,a.return,y)}else{var c=Ga(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Pe(a,a.return,y)}}l&64&&Tm(a),l&512&&Pr(a,a.return);break;case 3:if(Ln(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{hh(e,t)}catch(y){Pe(a,a.return,y)}}break;case 27:t===null&&l&4&&Am(a);case 26:case 5:Ln(e,a),t===null&&l&4&&Em(a),l&512&&Pr(a,a.return);break;case 12:Ln(e,a);break;case 31:Ln(e,a),l&4&&Lm(e,a);break;case 13:Ln(e,a),l&4&&jm(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=l1.bind(null,a),E1(e,a))));break;case 22:if(l=a.memoizedState!==null||Mn,!l){t=t!==null&&t.memoizedState!==null||nt,c=Mn;var f=nt;Mn=l,(nt=t)&&!f?jn(e,a,(a.subtreeFlags&8772)!==0):Ln(e,a),Mn=c,nt=f}break;case 30:break;default:Ln(e,a)}}function Mm(e){var t=e.alternate;t!==null&&(e.alternate=null,Mm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Js(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,wt=!1;function Dn(e,t,a){for(a=a.child;a!==null;)Dm(e,t,a),a=a.sibling}function Dm(e,t,a){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(sr,a)}catch{}switch(a.tag){case 26:nt||un(a,t),Dn(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:nt||un(a,t);var l=$e,c=wt;sa(a.type)&&($e=a.stateNode,wt=!1),Dn(e,t,a),$r(a.stateNode),$e=l,wt=c;break;case 5:nt||un(a,t);case 6:if(l=$e,c=wt,$e=null,Dn(e,t,a),$e=l,wt=c,$e!==null)if(wt)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(f){Pe(a,t,f)}else try{$e.removeChild(a.stateNode)}catch(f){Pe(a,t,f)}break;case 18:$e!==null&&(wt?(e=$e,Tg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Hi(e)):Tg($e,a.stateNode));break;case 4:l=$e,c=wt,$e=a.stateNode.containerInfo,wt=!0,Dn(e,t,a),$e=l,wt=c;break;case 0:case 11:case 14:case 15:ta(2,a,t),nt||ta(4,a,t),Dn(e,t,a);break;case 1:nt||(un(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&_m(a,t,l)),Dn(e,t,a);break;case 21:Dn(e,t,a);break;case 22:nt=(l=nt)||a.memoizedState!==null,Dn(e,t,a),nt=l;break;default:Dn(e,t,a)}}function Lm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hi(e)}catch(a){Pe(t,t.return,a)}}}function jm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hi(e)}catch(a){Pe(t,t.return,a)}}function WS(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Nm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Nm),t;default:throw Error(o(435,e.tag))}}function So(e,t){var a=WS(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var c=o1.bind(null,e,l);l.then(c,c)}})}function Tt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var c=a[l],f=e,y=t,S=y;e:for(;S!==null;){switch(S.tag){case 27:if(sa(S.type)){$e=S.stateNode,wt=!1;break e}break;case 5:$e=S.stateNode,wt=!1;break e;case 3:case 4:$e=S.stateNode.containerInfo,wt=!0;break e}S=S.return}if($e===null)throw Error(o(160));Dm(f,y,c),$e=null,wt=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)km(t,e),t=t.sibling}var Jt=null;function km(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Tt(t,e),_t(e),l&4&&(ta(3,e,e.return),Ir(3,e),ta(5,e,e.return));break;case 1:Tt(t,e),_t(e),l&512&&(nt||a===null||un(a,a.return)),l&64&&Mn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var c=Jt;if(Tt(t,e),_t(e),l&512&&(nt||a===null||un(a,a.return)),l&4){var f=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(l){case"title":f=c.getElementsByTagName("title")[0],(!f||f[fr]||f[ot]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(l),c.head.insertBefore(f,c.querySelector("head > title"))),ft(f,l,a),f[ot]=e,rt(f),l=f;break e;case"link":var y=kg("link","href",c).get(l+(a.href||""));if(y){for(var S=0;S<y.length;S++)if(f=y[S],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(S,1);break t}}f=c.createElement(l),ft(f,l,a),c.head.appendChild(f);break;case"meta":if(y=kg("meta","content",c).get(l+(a.content||""))){for(S=0;S<y.length;S++)if(f=y[S],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(S,1);break t}}f=c.createElement(l),ft(f,l,a),c.head.appendChild(f);break;default:throw Error(o(468,l))}f[ot]=e,rt(f),l=f}e.stateNode=l}else zg(c,e.type,e.stateNode);else e.stateNode=jg(c,l,e.memoizedProps);else f!==l?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,l===null?zg(c,e.type,e.stateNode):jg(c,l,e.memoizedProps)):l===null&&e.stateNode!==null&&bu(e,e.memoizedProps,a.memoizedProps)}break;case 27:Tt(t,e),_t(e),l&512&&(nt||a===null||un(a,a.return)),a!==null&&l&4&&bu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Tt(t,e),_t(e),l&512&&(nt||a===null||un(a,a.return)),e.flags&32){c=e.stateNode;try{si(c,"")}catch(le){Pe(e,e.return,le)}}l&4&&e.stateNode!=null&&(c=e.memoizedProps,bu(e,c,a!==null?a.memoizedProps:c)),l&1024&&(wu=!0);break;case 6:if(Tt(t,e),_t(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(le){Pe(e,e.return,le)}}break;case 3:if(Io=null,c=Jt,Jt=ko(t.containerInfo),Tt(t,e),Jt=c,_t(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Hi(t.containerInfo)}catch(le){Pe(e,e.return,le)}wu&&(wu=!1,zm(e));break;case 4:l=Jt,Jt=ko(e.stateNode.containerInfo),Tt(t,e),_t(e),Jt=l;break;case 12:Tt(t,e),_t(e);break;case 31:Tt(t,e),_t(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,So(e,l)));break;case 13:Tt(t,e),_t(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(wo=At()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,So(e,l)));break;case 22:c=e.memoizedState!==null;var A=a!==null&&a.memoizedState!==null,z=Mn,F=nt;if(Mn=z||c,nt=F||A,Tt(t,e),nt=F,Mn=z,_t(e),l&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(a===null||A||Mn||nt||Va(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){A=a=t;try{if(f=A.stateNode,c)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{S=A.stateNode;var q=A.memoizedProps.style,P=q!=null&&q.hasOwnProperty("display")?q.display:null;S.style.display=P==null||typeof P=="boolean"?"":(""+P).trim()}}catch(le){Pe(A,A.return,le)}}}else if(t.tag===6){if(a===null){A=t;try{A.stateNode.nodeValue=c?"":A.memoizedProps}catch(le){Pe(A,A.return,le)}}}else if(t.tag===18){if(a===null){A=t;try{var B=A.stateNode;c?_g(B,!0):_g(A.stateNode,!1)}catch(le){Pe(A,A.return,le)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,So(e,a))));break;case 19:Tt(t,e),_t(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,So(e,l)));break;case 30:break;case 21:break;default:Tt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Rm(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var c=a.stateNode,f=Su(e);bo(e,f,c);break;case 5:var y=a.stateNode;a.flags&32&&(si(y,""),a.flags&=-33);var S=Su(e);bo(e,S,y);break;case 3:case 4:var A=a.stateNode.containerInfo,z=Su(e);Cu(e,z,A);break;default:throw Error(o(161))}}catch(F){Pe(e,e.return,F)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;zm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ln(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Om(e,t.alternate,t),t=t.sibling}function Va(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ta(4,t,t.return),Va(t);break;case 1:un(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&_m(t,t.return,a),Va(t);break;case 27:$r(t.stateNode);case 26:case 5:un(t,t.return),Va(t);break;case 22:t.memoizedState===null&&Va(t);break;case 30:Va(t);break;default:Va(t)}e=e.sibling}}function jn(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,c=e,f=t,y=f.flags;switch(f.tag){case 0:case 11:case 15:jn(c,f,a),Ir(4,f);break;case 1:if(jn(c,f,a),l=f,c=l.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(z){Pe(l,l.return,z)}if(l=f,c=l.updateQueue,c!==null){var S=l.stateNode;try{var A=c.shared.hiddenCallbacks;if(A!==null)for(c.shared.hiddenCallbacks=null,c=0;c<A.length;c++)ph(A[c],S)}catch(z){Pe(l,l.return,z)}}a&&y&64&&Tm(f),Pr(f,f.return);break;case 27:Am(f);case 26:case 5:jn(c,f,a),a&&l===null&&y&4&&Em(f),Pr(f,f.return);break;case 12:jn(c,f,a);break;case 31:jn(c,f,a),a&&y&4&&Lm(c,f);break;case 13:jn(c,f,a),a&&y&4&&jm(c,f);break;case 22:f.memoizedState===null&&jn(c,f,a),Pr(f,f.return);break;case 30:break;default:jn(c,f,a)}t=t.sibling}}function Tu(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Tr(a))}function _u(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Tr(e))}function en(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Im(e,t,a,l),t=t.sibling}function Im(e,t,a,l){var c=t.flags;switch(t.tag){case 0:case 11:case 15:en(e,t,a,l),c&2048&&Ir(9,t);break;case 1:en(e,t,a,l);break;case 3:en(e,t,a,l),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Tr(e)));break;case 12:if(c&2048){en(e,t,a,l),e=t.stateNode;try{var f=t.memoizedProps,y=f.id,S=f.onPostCommit;typeof S=="function"&&S(y,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(A){Pe(t,t.return,A)}}else en(e,t,a,l);break;case 31:en(e,t,a,l);break;case 13:en(e,t,a,l);break;case 23:break;case 22:f=t.stateNode,y=t.alternate,t.memoizedState!==null?f._visibility&2?en(e,t,a,l):Hr(e,t):f._visibility&2?en(e,t,a,l):(f._visibility|=2,Ai(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),c&2048&&Tu(y,t);break;case 24:en(e,t,a,l),c&2048&&_u(t.alternate,t);break;default:en(e,t,a,l)}}function Ai(e,t,a,l,c){for(c=c&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var f=e,y=t,S=a,A=l,z=y.flags;switch(y.tag){case 0:case 11:case 15:Ai(f,y,S,A,c),Ir(8,y);break;case 23:break;case 22:var F=y.stateNode;y.memoizedState!==null?F._visibility&2?Ai(f,y,S,A,c):Hr(f,y):(F._visibility|=2,Ai(f,y,S,A,c)),c&&z&2048&&Tu(y.alternate,y);break;case 24:Ai(f,y,S,A,c),c&&z&2048&&_u(y.alternate,y);break;default:Ai(f,y,S,A,c)}t=t.sibling}}function Hr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,c=l.flags;switch(l.tag){case 22:Hr(a,l),c&2048&&Tu(l.alternate,l);break;case 24:Hr(a,l),c&2048&&_u(l.alternate,l);break;default:Hr(a,l)}t=t.sibling}}var Ur=8192;function Ni(e,t,a){if(e.subtreeFlags&Ur)for(e=e.child;e!==null;)Pm(e,t,a),e=e.sibling}function Pm(e,t,a){switch(e.tag){case 26:Ni(e,t,a),e.flags&Ur&&e.memoizedState!==null&&P1(a,Jt,e.memoizedState,e.memoizedProps);break;case 5:Ni(e,t,a);break;case 3:case 4:var l=Jt;Jt=ko(e.stateNode.containerInfo),Ni(e,t,a),Jt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Ur,Ur=16777216,Ni(e,t,a),Ur=l):Ni(e,t,a));break;default:Ni(e,t,a)}}function Hm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Br(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];lt=l,Bm(l,e)}Hm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Um(e),e=e.sibling}function Um(e){switch(e.tag){case 0:case 11:case 15:Br(e),e.flags&2048&&ta(9,e,e.return);break;case 3:Br(e);break;case 12:Br(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Co(e)):Br(e);break;default:Br(e)}}function Co(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];lt=l,Bm(l,e)}Hm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ta(8,t,t.return),Co(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Co(t));break;default:Co(t)}e=e.sibling}}function Bm(e,t){for(;lt!==null;){var a=lt;switch(a.tag){case 0:case 11:case 15:ta(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Tr(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,lt=l;else e:for(a=e;lt!==null;){l=lt;var c=l.sibling,f=l.return;if(Mm(l),l===a){lt=null;break e}if(c!==null){c.return=f,lt=c;break e}lt=f}}}var JS={getCacheForType:function(e){var t=ct(Je),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return ct(Je).controller.signal}},e1=typeof WeakMap=="function"?WeakMap:Map,je=0,Ve=null,Te=null,Re=0,Ie=0,kt=null,na=!1,Oi=!1,Eu=!1,kn=0,Qe=0,aa=0,Fa=0,Ru=0,zt=0,Mi=0,Gr=null,Et=null,Au=!1,wo=0,Gm=0,To=1/0,_o=null,ia=null,at=0,ra=null,Di=null,zn=0,Nu=0,Ou=null,Vm=null,Vr=0,Mu=null;function It(){return(je&2)!==0&&Re!==0?Re&-Re:L.T!==null?Iu():rp()}function Fm(){if(zt===0)if((Re&536870912)===0||Oe){var e=Dl;Dl<<=1,(Dl&3932160)===0&&(Dl=262144),zt=e}else zt=536870912;return e=Lt.current,e!==null&&(e.flags|=32),zt}function Rt(e,t,a){(e===Ve&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(Li(e,0),la(e,Re,zt,!1)),ur(e,a),((je&2)===0||e!==Ve)&&(e===Ve&&((je&2)===0&&(Fa|=a),Qe===4&&la(e,Re,zt,!1)),fn(e))}function Km(e,t,a){if((je&6)!==0)throw Error(o(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||cr(e,t),c=l?a1(e,t):Lu(e,t,!0),f=l;do{if(c===0){Oi&&!l&&la(e,t,0,!1);break}else{if(a=e.current.alternate,f&&!t1(a)){c=Lu(e,t,!1),f=!1;continue}if(c===2){if(f=t,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){t=y;e:{var S=e;c=Gr;var A=S.current.memoizedState.isDehydrated;if(A&&(Li(S,y).flags|=256),y=Lu(S,y,!1),y!==2){if(Eu&&!A){S.errorRecoveryDisabledLanes|=f,Fa|=f,c=4;break e}f=Et,Et=c,f!==null&&(Et===null?Et=f:Et.push.apply(Et,f))}c=y}if(f=!1,c!==2)continue}}if(c===1){Li(e,0),la(e,t,0,!0);break}e:{switch(l=e,f=c,f){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:la(l,t,zt,!na);break e;case 2:Et=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(c=wo+300-At(),10<c)){if(la(l,t,zt,!na),jl(l,0,!0)!==0)break e;zn=t,l.timeoutHandle=Cg(Ym.bind(null,l,a,Et,_o,Au,t,zt,Fa,Mi,na,f,"Throttled",-0,0),c);break e}Ym(l,a,Et,_o,Au,t,zt,Fa,Mi,na,f,null,-0,0)}}break}while(!0);fn(e)}function Ym(e,t,a,l,c,f,y,S,A,z,F,q,P,B){if(e.timeoutHandle=-1,q=t.subtreeFlags,q&8192||(q&16785408)===16785408){q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Sn},Pm(t,f,q);var le=(f&62914560)===f?wo-At():(f&4194048)===f?Gm-At():0;if(le=H1(q,le),le!==null){zn=f,e.cancelPendingCommit=le(eg.bind(null,e,t,f,a,l,c,y,S,A,F,q,null,P,B)),la(e,f,y,!z);return}}eg(e,t,f,a,l,c,y,S,A)}function t1(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var c=a[l],f=c.getSnapshot;c=c.value;try{if(!Mt(f(),c))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function la(e,t,a,l){t&=~Ru,t&=~Fa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var c=t;0<c;){var f=31-Ot(c),y=1<<f;l[f]=-1,c&=~y}a!==0&&np(e,a,t)}function Eo(){return(je&6)===0?(Fr(0),!1):!0}function Du(){if(Te!==null){if(Ie===0)var e=Te.return;else e=Te,_n=ka=null,qc(e),wi=null,Er=0,e=Te;for(;e!==null;)wm(e.alternate,e),e=e.return;Te=null}}function Li(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,S1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),zn=0,Du(),Ve=e,Te=a=wn(e.current,null),Re=t,Ie=0,kt=null,na=!1,Oi=cr(e,t),Eu=!1,Mi=zt=Ru=Fa=aa=Qe=0,Et=Gr=null,Au=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var c=31-Ot(l),f=1<<c;t|=e[c],l&=~f}return kn=t,Yl(),a}function $m(e,t){Se=null,L.H=jr,t===Ci||t===eo?(t=ch(),Ie=3):t===zc?(t=ch(),Ie=4):Ie=t===uu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,kt=t,Te===null&&(Qe=1,mo(e,Ft(t,e.current)))}function qm(){var e=Lt.current;return e===null?!0:(Re&4194048)===Re?qt===null:(Re&62914560)===Re||(Re&536870912)!==0?e===qt:!1}function Xm(){var e=L.H;return L.H=jr,e===null?jr:e}function Qm(){var e=L.A;return L.A=JS,e}function Ro(){Qe=4,na||(Re&4194048)!==Re&&Lt.current!==null||(Oi=!0),(aa&134217727)===0&&(Fa&134217727)===0||Ve===null||la(Ve,Re,zt,!1)}function Lu(e,t,a){var l=je;je|=2;var c=Xm(),f=Qm();(Ve!==e||Re!==t)&&(_o=null,Li(e,t)),t=!1;var y=Qe;e:do try{if(Ie!==0&&Te!==null){var S=Te,A=kt;switch(Ie){case 8:Du(),y=6;break e;case 3:case 2:case 9:case 6:Lt.current===null&&(t=!0);var z=Ie;if(Ie=0,kt=null,ji(e,S,A,z),a&&Oi){y=0;break e}break;default:z=Ie,Ie=0,kt=null,ji(e,S,A,z)}}n1(),y=Qe;break}catch(F){$m(e,F)}while(!0);return t&&e.shellSuspendCounter++,_n=ka=null,je=l,L.H=c,L.A=f,Te===null&&(Ve=null,Re=0,Yl()),y}function n1(){for(;Te!==null;)Zm(Te)}function a1(e,t){var a=je;je|=2;var l=Xm(),c=Qm();Ve!==e||Re!==t?(_o=null,To=At()+500,Li(e,t)):Oi=cr(e,t);e:do try{if(Ie!==0&&Te!==null){t=Te;var f=kt;t:switch(Ie){case 1:Ie=0,kt=null,ji(e,t,f,1);break;case 2:case 9:if(oh(f)){Ie=0,kt=null,Wm(t);break}t=function(){Ie!==2&&Ie!==9||Ve!==e||(Ie=7),fn(e)},f.then(t,t);break e;case 3:Ie=7;break e;case 4:Ie=5;break e;case 7:oh(f)?(Ie=0,kt=null,Wm(t)):(Ie=0,kt=null,ji(e,t,f,7));break;case 5:var y=null;switch(Te.tag){case 26:y=Te.memoizedState;case 5:case 27:var S=Te;if(y?Ig(y):S.stateNode.complete){Ie=0,kt=null;var A=S.sibling;if(A!==null)Te=A;else{var z=S.return;z!==null?(Te=z,Ao(z)):Te=null}break t}}Ie=0,kt=null,ji(e,t,f,5);break;case 6:Ie=0,kt=null,ji(e,t,f,6);break;case 8:Du(),Qe=6;break e;default:throw Error(o(462))}}i1();break}catch(F){$m(e,F)}while(!0);return _n=ka=null,L.H=l,L.A=c,je=a,Te!==null?0:(Ve=null,Re=0,Yl(),Qe)}function i1(){for(;Te!==null&&!Rb();)Zm(Te)}function Zm(e){var t=Sm(e.alternate,e,kn);e.memoizedProps=e.pendingProps,t===null?Ao(e):Te=t}function Wm(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=mm(a,t,t.pendingProps,t.type,void 0,Re);break;case 11:t=mm(a,t,t.pendingProps,t.type.render,t.ref,Re);break;case 5:qc(t);default:wm(a,t),t=Te=Qp(t,kn),t=Sm(a,t,kn)}e.memoizedProps=e.pendingProps,t===null?Ao(e):Te=t}function ji(e,t,a,l){_n=ka=null,qc(t),wi=null,Er=0;var c=t.return;try{if(YS(e,c,t,a,Re)){Qe=1,mo(e,Ft(a,e.current)),Te=null;return}}catch(f){if(c!==null)throw Te=c,f;Qe=1,mo(e,Ft(a,e.current)),Te=null;return}t.flags&32768?(Oe||l===1?e=!0:Oi||(Re&536870912)!==0?e=!1:(na=e=!0,(l===2||l===9||l===3||l===6)&&(l=Lt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Jm(t,e)):Ao(t)}function Ao(e){var t=e;do{if((t.flags&32768)!==0){Jm(t,na);return}e=t.return;var a=XS(t.alternate,t,kn);if(a!==null){Te=a;return}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);Qe===0&&(Qe=5)}function Jm(e,t){do{var a=QS(e.alternate,e);if(a!==null){a.flags&=32767,Te=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Te=e;return}Te=e=a}while(e!==null);Qe=6,Te=null}function eg(e,t,a,l,c,f,y,S,A){e.cancelPendingCommit=null;do No();while(at!==0);if((je&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(f=t.lanes|t.childLanes,f|=Sc,Ib(e,a,f,y,S,A),e===Ve&&(Te=Ve=null,Re=0),Di=t,ra=e,zn=a,Nu=f,Ou=c,Vm=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,s1(Ol,function(){return rg(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=L.T,L.T=null,c=K.p,K.p=2,y=je,je|=4;try{ZS(e,t,a)}finally{je=y,K.p=c,L.T=l}}at=1,tg(),ng(),ag()}}function tg(){if(at===1){at=0;var e=ra,t=Di,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var l=K.p;K.p=2;var c=je;je|=4;try{km(t,e);var f=Ku,y=Bp(e.containerInfo),S=f.focusedElem,A=f.selectionRange;if(y!==S&&S&&S.ownerDocument&&Up(S.ownerDocument.documentElement,S)){if(A!==null&&gc(S)){var z=A.start,F=A.end;if(F===void 0&&(F=z),"selectionStart"in S)S.selectionStart=z,S.selectionEnd=Math.min(F,S.value.length);else{var q=S.ownerDocument||document,P=q&&q.defaultView||window;if(P.getSelection){var B=P.getSelection(),le=S.textContent.length,ge=Math.min(A.start,le),Be=A.end===void 0?ge:Math.min(A.end,le);!B.extend&&ge>Be&&(y=Be,Be=ge,ge=y);var j=Hp(S,ge),O=Hp(S,Be);if(j&&O&&(B.rangeCount!==1||B.anchorNode!==j.node||B.anchorOffset!==j.offset||B.focusNode!==O.node||B.focusOffset!==O.offset)){var k=q.createRange();k.setStart(j.node,j.offset),B.removeAllRanges(),ge>Be?(B.addRange(k),B.extend(O.node,O.offset)):(k.setEnd(O.node,O.offset),B.addRange(k))}}}}for(q=[],B=S;B=B.parentNode;)B.nodeType===1&&q.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<q.length;S++){var $=q[S];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}Bo=!!Fu,Ku=Fu=null}finally{je=c,K.p=l,L.T=a}}e.current=t,at=2}}function ng(){if(at===2){at=0;var e=ra,t=Di,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var l=K.p;K.p=2;var c=je;je|=4;try{Om(e,t.alternate,t)}finally{je=c,K.p=l,L.T=a}}at=3}}function ag(){if(at===4||at===3){at=0,Ab();var e=ra,t=Di,a=zn,l=Vm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?at=5:(at=0,Di=ra=null,ig(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(ia=null),Zs(a),t=t.stateNode,Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(sr,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=L.T,c=K.p,K.p=2,L.T=null;try{for(var f=e.onRecoverableError,y=0;y<l.length;y++){var S=l[y];f(S.value,{componentStack:S.stack})}}finally{L.T=t,K.p=c}}(zn&3)!==0&&No(),fn(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===Mu?Vr++:(Vr=0,Mu=e):Vr=0,Fr(0)}}function ig(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Tr(t)))}function No(){return tg(),ng(),ag(),rg()}function rg(){if(at!==5)return!1;var e=ra,t=Nu;Nu=0;var a=Zs(zn),l=L.T,c=K.p;try{K.p=32>a?32:a,L.T=null,a=Ou,Ou=null;var f=ra,y=zn;if(at=0,Di=ra=null,zn=0,(je&6)!==0)throw Error(o(331));var S=je;if(je|=4,Um(f.current),Im(f,f.current,y,a),je=S,Fr(0,!1),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(sr,f)}catch{}return!0}finally{K.p=c,L.T=l,ig(e,t)}}function lg(e,t,a){t=Ft(a,t),t=cu(e.stateNode,t,2),e=Wn(e,t,2),e!==null&&(ur(e,2),fn(e))}function Pe(e,t,a){if(e.tag===3)lg(e,e,a);else for(;t!==null;){if(t.tag===3){lg(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ia===null||!ia.has(l))){e=Ft(a,e),a=om(2),l=Wn(t,a,2),l!==null&&(sm(a,l,t,e),ur(l,2),fn(l));break}}t=t.return}}function ju(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new e1;var c=new Set;l.set(t,c)}else c=l.get(t),c===void 0&&(c=new Set,l.set(t,c));c.has(a)||(Eu=!0,c.add(a),e=r1.bind(null,e,t,a),t.then(e,e))}function r1(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ve===e&&(Re&a)===a&&(Qe===4||Qe===3&&(Re&62914560)===Re&&300>At()-wo?(je&2)===0&&Li(e,0):Ru|=a,Mi===Re&&(Mi=0)),fn(e)}function og(e,t){t===0&&(t=tp()),e=Da(e,t),e!==null&&(ur(e,t),fn(e))}function l1(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),og(e,a)}function o1(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),og(e,a)}function s1(e,t){return $s(e,t)}var Oo=null,ki=null,ku=!1,Mo=!1,zu=!1,oa=0;function fn(e){e!==ki&&e.next===null&&(ki===null?Oo=ki=e:ki=ki.next=e),Mo=!0,ku||(ku=!0,u1())}function Fr(e,t){if(!zu&&Mo){zu=!0;do for(var a=!1,l=Oo;l!==null;){if(e!==0){var c=l.pendingLanes;if(c===0)var f=0;else{var y=l.suspendedLanes,S=l.pingedLanes;f=(1<<31-Ot(42|e)+1)-1,f&=c&~(y&~S),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,fg(l,f))}else f=Re,f=jl(l,l===Ve?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||cr(l,f)||(a=!0,fg(l,f));l=l.next}while(a);zu=!1}}function c1(){sg()}function sg(){Mo=ku=!1;var e=0;oa!==0&&b1()&&(e=oa);for(var t=At(),a=null,l=Oo;l!==null;){var c=l.next,f=cg(l,t);f===0?(l.next=null,a===null?Oo=c:a.next=c,c===null&&(ki=a)):(a=l,(e!==0||(f&3)!==0)&&(Mo=!0)),l=c}at!==0&&at!==5||Fr(e),oa!==0&&(oa=0)}function cg(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-Ot(f),S=1<<y,A=c[y];A===-1?((S&a)===0||(S&l)!==0)&&(c[y]=zb(S,t)):A<=t&&(e.expiredLanes|=S),f&=~S}if(t=Ve,a=Re,a=jl(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&qs(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||cr(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&qs(l),Zs(a)){case 2:case 8:a=Jd;break;case 32:a=Ol;break;case 268435456:a=ep;break;default:a=Ol}return l=ug.bind(null,e),a=$s(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&qs(l),e.callbackPriority=2,e.callbackNode=null,2}function ug(e,t){if(at!==0&&at!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(No()&&e.callbackNode!==a)return null;var l=Re;return l=jl(e,e===Ve?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Km(e,l,t),cg(e,At()),e.callbackNode!=null&&e.callbackNode===a?ug.bind(null,e):null)}function fg(e,t){if(No())return null;Km(e,t,!0)}function u1(){C1(function(){(je&6)!==0?$s(Wd,c1):sg()})}function Iu(){if(oa===0){var e=bi;e===0&&(e=Ml,Ml<<=1,(Ml&261888)===0&&(Ml=256)),oa=e}return oa}function dg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Pl(""+e)}function pg(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function f1(e,t,a,l,c){if(t==="submit"&&a&&a.stateNode===c){var f=dg((c[St]||null).action),y=l.submitter;y&&(t=(t=y[St]||null)?dg(t.formAction):y.getAttribute("formAction"),t!==null&&(f=t,y=null));var S=new Gl("action","action",null,l,c);e.push({event:S,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(oa!==0){var A=y?pg(c,y):new FormData(c);au(a,{pending:!0,data:A,method:c.method,action:f},null,A)}}else typeof f=="function"&&(S.preventDefault(),A=y?pg(c,y):new FormData(c),au(a,{pending:!0,data:A,method:c.method,action:f},f,A))},currentTarget:c}]})}}for(var Pu=0;Pu<bc.length;Pu++){var Hu=bc[Pu],d1=Hu.toLowerCase(),p1=Hu[0].toUpperCase()+Hu.slice(1);Wt(d1,"on"+p1)}Wt(Fp,"onAnimationEnd"),Wt(Kp,"onAnimationIteration"),Wt(Yp,"onAnimationStart"),Wt("dblclick","onDoubleClick"),Wt("focusin","onFocus"),Wt("focusout","onBlur"),Wt(NS,"onTransitionRun"),Wt(OS,"onTransitionStart"),Wt(MS,"onTransitionCancel"),Wt($p,"onTransitionEnd"),li("onMouseEnter",["mouseout","mouseover"]),li("onMouseLeave",["mouseout","mouseover"]),li("onPointerEnter",["pointerout","pointerover"]),li("onPointerLeave",["pointerout","pointerover"]),Aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Aa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Kr));function hg(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],c=l.event;l=l.listeners;e:{var f=void 0;if(t)for(var y=l.length-1;0<=y;y--){var S=l[y],A=S.instance,z=S.currentTarget;if(S=S.listener,A!==f&&c.isPropagationStopped())break e;f=S,c.currentTarget=z;try{f(c)}catch(F){Kl(F)}c.currentTarget=null,f=A}else for(y=0;y<l.length;y++){if(S=l[y],A=S.instance,z=S.currentTarget,S=S.listener,A!==f&&c.isPropagationStopped())break e;f=S,c.currentTarget=z;try{f(c)}catch(F){Kl(F)}c.currentTarget=null,f=A}}}}function _e(e,t){var a=t[Ws];a===void 0&&(a=t[Ws]=new Set);var l=e+"__bubble";a.has(l)||(mg(t,e,2,!1),a.add(l))}function Uu(e,t,a){var l=0;t&&(l|=4),mg(a,e,l,t)}var Do="_reactListening"+Math.random().toString(36).slice(2);function Bu(e){if(!e[Do]){e[Do]=!0,sp.forEach(function(a){a!=="selectionchange"&&(h1.has(a)||Uu(a,!1,e),Uu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Do]||(t[Do]=!0,Uu("selectionchange",!1,t))}}function mg(e,t,a,l){switch(Fg(t)){case 2:var c=G1;break;case 8:c=V1;break;default:c=nf}a=c.bind(null,t,a,e),c=void 0,!oc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),l?c!==void 0?e.addEventListener(t,a,{capture:!0,passive:c}):e.addEventListener(t,a,!0):c!==void 0?e.addEventListener(t,a,{passive:c}):e.addEventListener(t,a,!1)}function Gu(e,t,a,l,c){var f=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var S=l.stateNode.containerInfo;if(S===c)break;if(y===4)for(y=l.return;y!==null;){var A=y.tag;if((A===3||A===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;S!==null;){if(y=ai(S),y===null)return;if(A=y.tag,A===5||A===6||A===26||A===27){l=f=y;continue e}S=S.parentNode}}l=l.return}bp(function(){var z=f,F=rc(a),q=[];e:{var P=qp.get(e);if(P!==void 0){var B=Gl,le=e;switch(e){case"keypress":if(Ul(a)===0)break e;case"keydown":case"keyup":B=oS;break;case"focusin":le="focus",B=fc;break;case"focusout":le="blur",B=fc;break;case"beforeblur":case"afterblur":B=fc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Xb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=uS;break;case Fp:case Kp:case Yp:B=Wb;break;case $p:B=dS;break;case"scroll":case"scrollend":B=$b;break;case"wheel":B=hS;break;case"copy":case"cut":case"paste":B=eS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=_p;break;case"toggle":case"beforetoggle":B=gS}var ge=(t&4)!==0,Be=!ge&&(e==="scroll"||e==="scrollend"),j=ge?P!==null?P+"Capture":null:P;ge=[];for(var O=z,k;O!==null;){var $=O;if(k=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||k===null||j===null||($=pr(O,j),$!=null&&ge.push(Yr(O,$,k))),Be)break;O=O.return}0<ge.length&&(P=new B(P,le,null,a,F),q.push({event:P,listeners:ge}))}}if((t&7)===0){e:{if(P=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",P&&a!==ic&&(le=a.relatedTarget||a.fromElement)&&(ai(le)||le[ni]))break e;if((B||P)&&(P=F.window===F?F:(P=F.ownerDocument)?P.defaultView||P.parentWindow:window,B?(le=a.relatedTarget||a.toElement,B=z,le=le?ai(le):null,le!==null&&(Be=u(le),ge=le.tag,le!==Be||ge!==5&&ge!==27&&ge!==6)&&(le=null)):(B=null,le=z),B!==le)){if(ge=wp,$="onMouseLeave",j="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(ge=_p,$="onPointerLeave",j="onPointerEnter",O="pointer"),Be=B==null?P:dr(B),k=le==null?P:dr(le),P=new ge($,O+"leave",B,a,F),P.target=Be,P.relatedTarget=k,$=null,ai(F)===z&&(ge=new ge(j,O+"enter",le,a,F),ge.target=k,ge.relatedTarget=Be,$=ge),Be=$,B&&le)t:{for(ge=m1,j=B,O=le,k=0,$=j;$;$=ge($))k++;$=0;for(var he=O;he;he=ge(he))$++;for(;0<k-$;)j=ge(j),k--;for(;0<$-k;)O=ge(O),$--;for(;k--;){if(j===O||O!==null&&j===O.alternate){ge=j;break t}j=ge(j),O=ge(O)}ge=null}else ge=null;B!==null&&gg(q,P,B,ge,!1),le!==null&&Be!==null&&gg(q,Be,le,ge,!0)}}e:{if(P=z?dr(z):window,B=P.nodeName&&P.nodeName.toLowerCase(),B==="select"||B==="input"&&P.type==="file")var De=Lp;else if(Mp(P))if(jp)De=ES;else{De=TS;var ce=wS}else B=P.nodeName,!B||B.toLowerCase()!=="input"||P.type!=="checkbox"&&P.type!=="radio"?z&&ac(z.elementType)&&(De=Lp):De=_S;if(De&&(De=De(e,z))){Dp(q,De,a,F);break e}ce&&ce(e,P,z),e==="focusout"&&z&&P.type==="number"&&z.memoizedProps.value!=null&&nc(P,"number",P.value)}switch(ce=z?dr(z):window,e){case"focusin":(Mp(ce)||ce.contentEditable==="true")&&(di=ce,vc=z,Sr=null);break;case"focusout":Sr=vc=di=null;break;case"mousedown":yc=!0;break;case"contextmenu":case"mouseup":case"dragend":yc=!1,Gp(q,a,F);break;case"selectionchange":if(AS)break;case"keydown":case"keyup":Gp(q,a,F)}var Ce;if(pc)e:{switch(e){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else fi?Np(e,a)&&(Ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(Ep&&a.locale!=="ko"&&(fi||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&fi&&(Ce=Sp()):(Kn=F,sc="value"in Kn?Kn.value:Kn.textContent,fi=!0)),ce=Lo(z,Ae),0<ce.length&&(Ae=new Tp(Ae,e,null,a,F),q.push({event:Ae,listeners:ce}),Ce?Ae.data=Ce:(Ce=Op(a),Ce!==null&&(Ae.data=Ce)))),(Ce=yS?xS(e,a):bS(e,a))&&(Ae=Lo(z,"onBeforeInput"),0<Ae.length&&(ce=new Tp("onBeforeInput","beforeinput",null,a,F),q.push({event:ce,listeners:Ae}),ce.data=Ce)),f1(q,e,z,a,F)}hg(q,t)})}function Yr(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Lo(e,t){for(var a=t+"Capture",l=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=pr(e,a),c!=null&&l.unshift(Yr(e,c,f)),c=pr(e,t),c!=null&&l.push(Yr(e,c,f))),e.tag===3)return l;e=e.return}return[]}function m1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function gg(e,t,a,l,c){for(var f=t._reactName,y=[];a!==null&&a!==l;){var S=a,A=S.alternate,z=S.stateNode;if(S=S.tag,A!==null&&A===l)break;S!==5&&S!==26&&S!==27||z===null||(A=z,c?(z=pr(a,f),z!=null&&y.unshift(Yr(a,z,A))):c||(z=pr(a,f),z!=null&&y.push(Yr(a,z,A)))),a=a.return}y.length!==0&&e.push({event:t,listeners:y})}var g1=/\r\n?/g,v1=/\u0000|\uFFFD/g;function vg(e){return(typeof e=="string"?e:""+e).replace(g1,`
`).replace(v1,"")}function yg(e,t){return t=vg(t),vg(e)===t}function Ue(e,t,a,l,c,f){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||si(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&si(e,""+l);break;case"className":zl(e,"class",l);break;case"tabIndex":zl(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":zl(e,a,l);break;case"style":yp(e,l,f);break;case"data":if(t!=="object"){zl(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Pl(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(t!=="input"&&Ue(e,t,"name",c.name,c,null),Ue(e,t,"formEncType",c.formEncType,c,null),Ue(e,t,"formMethod",c.formMethod,c,null),Ue(e,t,"formTarget",c.formTarget,c,null)):(Ue(e,t,"encType",c.encType,c,null),Ue(e,t,"method",c.method,c,null),Ue(e,t,"target",c.target,c,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Pl(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Sn);break;case"onScroll":l!=null&&_e("scroll",e);break;case"onScrollEnd":l!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(c.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Pl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":_e("beforetoggle",e),_e("toggle",e),kl(e,"popover",l);break;case"xlinkActuate":bn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":bn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":bn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":bn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":bn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":bn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":bn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":bn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":bn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":kl(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Kb.get(a)||a,kl(e,a,l))}}function Vu(e,t,a,l,c,f){switch(a){case"style":yp(e,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(c.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof l=="string"?si(e,l):(typeof l=="number"||typeof l=="bigint")&&si(e,""+l);break;case"onScroll":l!=null&&_e("scroll",e);break;case"onScrollEnd":l!=null&&_e("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Sn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!cp.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),t=a.slice(2,c?a.length-7:void 0),f=e[St]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(t,f,c),typeof l=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,c);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):kl(e,a,l)}}}function ft(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var l=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":l=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ue(e,t,f,y,a,null)}}c&&Ue(e,t,"srcSet",a.srcSet,a,null),l&&Ue(e,t,"src",a.src,a,null);return;case"input":_e("invalid",e);var S=f=y=c=null,A=null,z=null;for(l in a)if(a.hasOwnProperty(l)){var F=a[l];if(F!=null)switch(l){case"name":c=F;break;case"type":y=F;break;case"checked":A=F;break;case"defaultChecked":z=F;break;case"value":f=F;break;case"defaultValue":S=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(o(137,t));break;default:Ue(e,t,l,F,a,null)}}hp(e,f,S,A,z,y,c,!1);return;case"select":_e("invalid",e),l=y=f=null;for(c in a)if(a.hasOwnProperty(c)&&(S=a[c],S!=null))switch(c){case"value":f=S;break;case"defaultValue":y=S;break;case"multiple":l=S;default:Ue(e,t,c,S,a,null)}t=f,a=y,e.multiple=!!l,t!=null?oi(e,!!l,t,!1):a!=null&&oi(e,!!l,a,!0);return;case"textarea":_e("invalid",e),f=c=l=null;for(y in a)if(a.hasOwnProperty(y)&&(S=a[y],S!=null))switch(y){case"value":l=S;break;case"defaultValue":c=S;break;case"children":f=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(o(91));break;default:Ue(e,t,y,S,a,null)}gp(e,l,c,f);return;case"option":for(A in a)a.hasOwnProperty(A)&&(l=a[A],l!=null)&&(A==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ue(e,t,A,l,a,null));return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(l=0;l<Kr.length;l++)_e(Kr[l],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(l=a[z],l!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ue(e,t,z,l,a,null)}return;default:if(ac(t)){for(F in a)a.hasOwnProperty(F)&&(l=a[F],l!==void 0&&Vu(e,t,F,l,a,void 0));return}}for(S in a)a.hasOwnProperty(S)&&(l=a[S],l!=null&&Ue(e,t,S,l,a,null))}function y1(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,S=null,A=null,z=null,F=null;for(B in a){var q=a[B];if(a.hasOwnProperty(B)&&q!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":A=q;default:l.hasOwnProperty(B)||Ue(e,t,B,null,l,q)}}for(var P in l){var B=l[P];if(q=a[P],l.hasOwnProperty(P)&&(B!=null||q!=null))switch(P){case"type":f=B;break;case"name":c=B;break;case"checked":z=B;break;case"defaultChecked":F=B;break;case"value":y=B;break;case"defaultValue":S=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(o(137,t));break;default:B!==q&&Ue(e,t,P,B,l,q)}}tc(e,y,S,A,z,F,f,c);return;case"select":B=y=S=P=null;for(f in a)if(A=a[f],a.hasOwnProperty(f)&&A!=null)switch(f){case"value":break;case"multiple":B=A;default:l.hasOwnProperty(f)||Ue(e,t,f,null,l,A)}for(c in l)if(f=l[c],A=a[c],l.hasOwnProperty(c)&&(f!=null||A!=null))switch(c){case"value":P=f;break;case"defaultValue":S=f;break;case"multiple":y=f;default:f!==A&&Ue(e,t,c,f,l,A)}t=S,a=y,l=B,P!=null?oi(e,!!a,P,!1):!!l!=!!a&&(t!=null?oi(e,!!a,t,!0):oi(e,!!a,a?[]:"",!1));return;case"textarea":B=P=null;for(S in a)if(c=a[S],a.hasOwnProperty(S)&&c!=null&&!l.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:Ue(e,t,S,null,l,c)}for(y in l)if(c=l[y],f=a[y],l.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":P=c;break;case"defaultValue":B=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(o(91));break;default:c!==f&&Ue(e,t,y,c,l,f)}mp(e,P,B);return;case"option":for(var le in a)P=a[le],a.hasOwnProperty(le)&&P!=null&&!l.hasOwnProperty(le)&&(le==="selected"?e.selected=!1:Ue(e,t,le,null,l,P));for(A in l)P=l[A],B=a[A],l.hasOwnProperty(A)&&P!==B&&(P!=null||B!=null)&&(A==="selected"?e.selected=P&&typeof P!="function"&&typeof P!="symbol":Ue(e,t,A,P,l,B));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in a)P=a[ge],a.hasOwnProperty(ge)&&P!=null&&!l.hasOwnProperty(ge)&&Ue(e,t,ge,null,l,P);for(z in l)if(P=l[z],B=a[z],l.hasOwnProperty(z)&&P!==B&&(P!=null||B!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(o(137,t));break;default:Ue(e,t,z,P,l,B)}return;default:if(ac(t)){for(var Be in a)P=a[Be],a.hasOwnProperty(Be)&&P!==void 0&&!l.hasOwnProperty(Be)&&Vu(e,t,Be,void 0,l,P);for(F in l)P=l[F],B=a[F],!l.hasOwnProperty(F)||P===B||P===void 0&&B===void 0||Vu(e,t,F,P,l,B);return}}for(var j in a)P=a[j],a.hasOwnProperty(j)&&P!=null&&!l.hasOwnProperty(j)&&Ue(e,t,j,null,l,P);for(q in l)P=l[q],B=a[q],!l.hasOwnProperty(q)||P===B||P==null&&B==null||Ue(e,t,q,P,l,B)}function xg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function x1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var c=a[l],f=c.transferSize,y=c.initiatorType,S=c.duration;if(f&&S&&xg(y)){for(y=0,S=c.responseEnd,l+=1;l<a.length;l++){var A=a[l],z=A.startTime;if(z>S)break;var F=A.transferSize,q=A.initiatorType;F&&xg(q)&&(A=A.responseEnd,y+=F*(A<S?1:(S-z)/(A-z)))}if(--l,t+=8*(f+y)/(c.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Fu=null,Ku=null;function jo(e){return e.nodeType===9?e:e.ownerDocument}function bg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Yu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $u=null;function b1(){var e=window.event;return e&&e.type==="popstate"?e===$u?!1:($u=e,!0):($u=null,!1)}var Cg=typeof setTimeout=="function"?setTimeout:void 0,S1=typeof clearTimeout=="function"?clearTimeout:void 0,wg=typeof Promise=="function"?Promise:void 0,C1=typeof queueMicrotask=="function"?queueMicrotask:typeof wg<"u"?function(e){return wg.resolve(null).then(e).catch(w1)}:Cg;function w1(e){setTimeout(function(){throw e})}function sa(e){return e==="head"}function Tg(e,t){var a=t,l=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(c),Hi(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")$r(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,$r(a);for(var f=a.firstChild;f;){var y=f.nextSibling,S=f.nodeName;f[fr]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&$r(e.ownerDocument.body);a=c}while(a);Hi(t)}function _g(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function qu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qu(a),Js(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function T1(e,t,a,l){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[fr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Xt(e.nextSibling),e===null)break}return null}function _1(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Xt(e.nextSibling),e===null))return null;return e}function Eg(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Xt(e.nextSibling),e===null))return null;return e}function Xu(e){return e.data==="$?"||e.data==="$~"}function Qu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function E1(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Zu=null;function Rg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Xt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Ag(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Ng(e,t,a){switch(t=jo(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function $r(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Js(e)}var Qt=new Map,Og=new Set;function ko(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var In=K.d;K.d={f:R1,r:A1,D:N1,C:O1,L:M1,m:D1,X:j1,S:L1,M:k1};function R1(){var e=In.f(),t=Eo();return e||t}function A1(e){var t=ii(e);t!==null&&t.tag===5&&t.type==="form"?$h(t):In.r(e)}var zi=typeof document>"u"?null:document;function Mg(e,t,a){var l=zi;if(l&&typeof t=="string"&&t){var c=Gt(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Og.has(c)||(Og.add(c),e={rel:e,crossOrigin:a,href:t},l.querySelector(c)===null&&(t=l.createElement("link"),ft(t,"link",e),rt(t),l.head.appendChild(t)))}}function N1(e){In.D(e),Mg("dns-prefetch",e,null)}function O1(e,t){In.C(e,t),Mg("preconnect",e,t)}function M1(e,t,a){In.L(e,t,a);var l=zi;if(l&&e&&t){var c='link[rel="preload"][as="'+Gt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Gt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Gt(a.imageSizes)+'"]')):c+='[href="'+Gt(e)+'"]';var f=c;switch(t){case"style":f=Ii(e);break;case"script":f=Pi(e)}Qt.has(f)||(e=v({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Qt.set(f,e),l.querySelector(c)!==null||t==="style"&&l.querySelector(qr(f))||t==="script"&&l.querySelector(Xr(f))||(t=l.createElement("link"),ft(t,"link",e),rt(t),l.head.appendChild(t)))}}function D1(e,t){In.m(e,t);var a=zi;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+Gt(l)+'"][href="'+Gt(e)+'"]',f=c;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Pi(e)}if(!Qt.has(f)&&(e=v({rel:"modulepreload",href:e},t),Qt.set(f,e),a.querySelector(c)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Xr(f)))return}l=a.createElement("link"),ft(l,"link",e),rt(l),a.head.appendChild(l)}}}function L1(e,t,a){In.S(e,t,a);var l=zi;if(l&&e){var c=ri(l).hoistableStyles,f=Ii(e);t=t||"default";var y=c.get(f);if(!y){var S={loading:0,preload:null};if(y=l.querySelector(qr(f)))S.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Qt.get(f))&&Wu(e,a);var A=y=l.createElement("link");rt(A),ft(A,"link",e),A._p=new Promise(function(z,F){A.onload=z,A.onerror=F}),A.addEventListener("load",function(){S.loading|=1}),A.addEventListener("error",function(){S.loading|=2}),S.loading|=4,zo(y,t,l)}y={type:"stylesheet",instance:y,count:1,state:S},c.set(f,y)}}}function j1(e,t){In.X(e,t);var a=zi;if(a&&e){var l=ri(a).hoistableScripts,c=Pi(e),f=l.get(c);f||(f=a.querySelector(Xr(c)),f||(e=v({src:e,async:!0},t),(t=Qt.get(c))&&Ju(e,t),f=a.createElement("script"),rt(f),ft(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(c,f))}}function k1(e,t){In.M(e,t);var a=zi;if(a&&e){var l=ri(a).hoistableScripts,c=Pi(e),f=l.get(c);f||(f=a.querySelector(Xr(c)),f||(e=v({src:e,async:!0,type:"module"},t),(t=Qt.get(c))&&Ju(e,t),f=a.createElement("script"),rt(f),ft(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(c,f))}}function Dg(e,t,a,l){var c=(c=me.current)?ko(c):null;if(!c)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ii(a.href),a=ri(c).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ii(a.href);var f=ri(c).hoistableStyles,y=f.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=c.querySelector(qr(e)))&&!f._p&&(y.instance=f,y.state.loading=5),Qt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Qt.set(e,a),f||z1(c,e,a,y.state))),t&&l===null)throw Error(o(528,""));return y}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Pi(a),a=ri(c).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Ii(e){return'href="'+Gt(e)+'"'}function qr(e){return'link[rel="stylesheet"]['+e+"]"}function Lg(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function z1(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),ft(t,"link",a),rt(t),e.head.appendChild(t))}function Pi(e){return'[src="'+Gt(e)+'"]'}function Xr(e){return"script[async]"+e}function jg(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Gt(a.href)+'"]');if(l)return t.instance=l,rt(l),l;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),rt(l),ft(l,"style",c),zo(l,a.precedence,e),t.instance=l;case"stylesheet":c=Ii(a.href);var f=e.querySelector(qr(c));if(f)return t.state.loading|=4,t.instance=f,rt(f),f;l=Lg(a),(c=Qt.get(c))&&Wu(l,c),f=(e.ownerDocument||e).createElement("link"),rt(f);var y=f;return y._p=new Promise(function(S,A){y.onload=S,y.onerror=A}),ft(f,"link",l),t.state.loading|=4,zo(f,a.precedence,e),t.instance=f;case"script":return f=Pi(a.src),(c=e.querySelector(Xr(f)))?(t.instance=c,rt(c),c):(l=a,(c=Qt.get(f))&&(l=v({},a),Ju(l,c)),e=e.ownerDocument||e,c=e.createElement("script"),rt(c),ft(c,"link",l),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,zo(l,a.precedence,e));return t.instance}function zo(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=l.length?l[l.length-1]:null,f=c,y=0;y<l.length;y++){var S=l[y];if(S.dataset.precedence===t)f=S;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Wu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ju(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Io=null;function kg(e,t,a){if(Io===null){var l=new Map,c=Io=new Map;c.set(a,l)}else c=Io,l=c.get(a),l||(l=new Map,c.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[fr]||f[ot]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(t)||"";y=e+y;var S=l.get(y);S?S.push(f):l.set(y,[f])}}return l}function zg(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function I1(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ig(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function P1(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Ii(l.href),f=t.querySelector(qr(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Po.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=f,rt(f);return}f=t.ownerDocument||t,l=Lg(l),(c=Qt.get(c))&&Wu(l,c),f=f.createElement("link"),rt(f);var y=f;y._p=new Promise(function(S,A){y.onload=S,y.onerror=A}),ft(f,"link",l),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Po.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var ef=0;function H1(e,t){return e.stylesheets&&e.count===0&&Uo(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Uo(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+t);0<e.imgBytes&&ef===0&&(ef=62500*x1());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Uo(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>ef?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(c)}}:null}function Po(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Uo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ho=null;function Uo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ho=new Map,t.forEach(U1,e),Ho=null,Po.call(e))}function U1(e,t){if(!(t.state.loading&4)){var a=Ho.get(e);if(a)var l=a.get(null);else{a=new Map,Ho.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),l=y)}l&&a.set(null,l)}c=t.instance,y=c.getAttribute("data-precedence"),f=a.get(y)||l,f===l&&a.set(null,c),a.set(y,c),this.count++,l=Po.bind(this),c.addEventListener("load",l),c.addEventListener("error",l),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var Qr={$$typeof:D,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function B1(e,t,a,l,c,f,y,S,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xs(0),this.hiddenUpdates=Xs(null),this.identifierPrefix=l,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Pg(e,t,a,l,c,f,y,S,A,z,F,q){return e=new B1(e,t,a,y,A,z,F,q,S),t=1,f===!0&&(t|=24),f=Dt(3,null,null,t),e.current=f,f.stateNode=e,t=Lc(),t.refCount++,e.pooledCache=t,t.refCount++,f.memoizedState={element:l,isDehydrated:a,cache:t},Ic(f),e}function Hg(e){return e?(e=mi,e):mi}function Ug(e,t,a,l,c,f){c=Hg(c),l.context===null?l.context=c:l.pendingContext=c,l=Zn(t),l.payload={element:a},f=f===void 0?null:f,f!==null&&(l.callback=f),a=Wn(e,l,t),a!==null&&(Rt(a,e,t),Ar(a,e,t))}function Bg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function tf(e,t){Bg(e,t),(e=e.alternate)&&Bg(e,t)}function Gg(e){if(e.tag===13||e.tag===31){var t=Da(e,67108864);t!==null&&Rt(t,e,67108864),tf(e,67108864)}}function Vg(e){if(e.tag===13||e.tag===31){var t=It();t=Qs(t);var a=Da(e,t);a!==null&&Rt(a,e,t),tf(e,t)}}var Bo=!0;function G1(e,t,a,l){var c=L.T;L.T=null;var f=K.p;try{K.p=2,nf(e,t,a,l)}finally{K.p=f,L.T=c}}function V1(e,t,a,l){var c=L.T;L.T=null;var f=K.p;try{K.p=8,nf(e,t,a,l)}finally{K.p=f,L.T=c}}function nf(e,t,a,l){if(Bo){var c=af(l);if(c===null)Gu(e,t,l,Go,a),Kg(e,l);else if(K1(c,e,t,a,l))l.stopPropagation();else if(Kg(e,l),t&4&&-1<F1.indexOf(e)){for(;c!==null;){var f=ii(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Ra(f.pendingLanes);if(y!==0){var S=f;for(S.pendingLanes|=2,S.entangledLanes|=2;y;){var A=1<<31-Ot(y);S.entanglements[1]|=A,y&=~A}fn(f),(je&6)===0&&(To=At()+500,Fr(0))}}break;case 31:case 13:S=Da(f,2),S!==null&&Rt(S,f,2),Eo(),tf(f,2)}if(f=af(l),f===null&&Gu(e,t,l,Go,a),f===c)break;c=f}c!==null&&l.stopPropagation()}else Gu(e,t,l,null,a)}}function af(e){return e=rc(e),rf(e)}var Go=null;function rf(e){if(Go=null,e=ai(e),e!==null){var t=u(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=d(t),e!==null)return e;e=null}else if(a===31){if(e=p(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Go=e,null}function Fg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nb()){case Wd:return 2;case Jd:return 8;case Ol:case Ob:return 32;case ep:return 268435456;default:return 32}default:return 32}}var lf=!1,ca=null,ua=null,fa=null,Zr=new Map,Wr=new Map,da=[],F1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kg(e,t){switch(e){case"focusin":case"focusout":ca=null;break;case"dragenter":case"dragleave":ua=null;break;case"mouseover":case"mouseout":fa=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wr.delete(t.pointerId)}}function Jr(e,t,a,l,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:f,targetContainers:[c]},t!==null&&(t=ii(t),t!==null&&Gg(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function K1(e,t,a,l,c){switch(t){case"focusin":return ca=Jr(ca,e,t,a,l,c),!0;case"dragenter":return ua=Jr(ua,e,t,a,l,c),!0;case"mouseover":return fa=Jr(fa,e,t,a,l,c),!0;case"pointerover":var f=c.pointerId;return Zr.set(f,Jr(Zr.get(f)||null,e,t,a,l,c)),!0;case"gotpointercapture":return f=c.pointerId,Wr.set(f,Jr(Wr.get(f)||null,e,t,a,l,c)),!0}return!1}function Yg(e){var t=ai(e.target);if(t!==null){var a=u(t);if(a!==null){if(t=a.tag,t===13){if(t=d(a),t!==null){e.blockedOn=t,lp(e.priority,function(){Vg(a)});return}}else if(t===31){if(t=p(a),t!==null){e.blockedOn=t,lp(e.priority,function(){Vg(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=af(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);ic=l,a.target.dispatchEvent(l),ic=null}else return t=ii(a),t!==null&&Gg(t),e.blockedOn=a,!1;t.shift()}return!0}function $g(e,t,a){Vo(e)&&a.delete(t)}function Y1(){lf=!1,ca!==null&&Vo(ca)&&(ca=null),ua!==null&&Vo(ua)&&(ua=null),fa!==null&&Vo(fa)&&(fa=null),Zr.forEach($g),Wr.forEach($g)}function Fo(e,t){e.blockedOn===t&&(e.blockedOn=null,lf||(lf=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Y1)))}var Ko=null;function qg(e){Ko!==e&&(Ko=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Ko===e&&(Ko=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],c=e[t+2];if(typeof l!="function"){if(rf(l||a)===null)continue;break}var f=ii(a);f!==null&&(e.splice(t,3),t-=3,au(f,{pending:!0,data:c,method:a.method,action:l},l,c))}}))}function Hi(e){function t(A){return Fo(A,e)}ca!==null&&Fo(ca,e),ua!==null&&Fo(ua,e),fa!==null&&Fo(fa,e),Zr.forEach(t),Wr.forEach(t);for(var a=0;a<da.length;a++){var l=da[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<da.length&&(a=da[0],a.blockedOn===null);)Yg(a),a.blockedOn===null&&da.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var c=a[l],f=a[l+1],y=c[St]||null;if(typeof f=="function")y||qg(a);else if(y){var S=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[St]||null)S=y.formAction;else if(rf(c)!==null)continue}else S=y.action;typeof S=="function"?a[l+1]=S:(a.splice(l,3),l-=3),qg(a)}}}function Xg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return c=y})},focusReset:"manual",scroll:"manual"})}function t(){c!==null&&(c(),c=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),c!==null&&(c(),c=null)}}}function of(e){this._internalRoot=e}Yo.prototype.render=of.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,l=It();Ug(a,l,e,t,null,null)},Yo.prototype.unmount=of.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ug(e.current,2,null,e,null,null),Eo(),t[ni]=null}};function Yo(e){this._internalRoot=e}Yo.prototype.unstable_scheduleHydration=function(e){if(e){var t=rp();e={blockedOn:null,target:e,priority:t};for(var a=0;a<da.length&&t!==0&&t<da[a].priority;a++);da.splice(a,0,e),a===0&&Yg(e)}};var Qg=i.version;if(Qg!=="19.2.3")throw Error(o(527,Qg,"19.2.3"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=m(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var $1={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{sr=$o.inject($1),Nt=$o}catch{}}return tl.createRoot=function(e,t){if(!s(e))throw Error(o(299));var a=!1,l="",c=am,f=im,y=rm;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(f=t.onCaughtError),t.onRecoverableError!==void 0&&(y=t.onRecoverableError)),t=Pg(e,1,!1,null,null,a,l,null,c,f,y,Xg),e[ni]=t.current,Bu(e),new of(t)},tl.hydrateRoot=function(e,t,a){if(!s(e))throw Error(o(299));var l=!1,c="",f=am,y=im,S=rm,A=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(S=a.onRecoverableError),a.formState!==void 0&&(A=a.formState)),t=Pg(e,1,!0,t,a??null,l,c,A,f,y,S,Xg),t.context=Hg(null),a=t.current,l=It(),l=Qs(l),c=Zn(l),c.callback=null,Wn(a,c,l),a=l,t.current.lanes=a,ur(t,a),fn(t),e[ni]=t.current,Bu(e),new Yo(t)},tl.version="19.2.3",tl}var lv;function aC(){if(lv)return uf.exports;lv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),uf.exports=nC(),uf.exports}var iC=aC();var ov="popstate";function sv(n){return typeof n=="object"&&n!=null&&"pathname"in n&&"search"in n&&"hash"in n&&"state"in n&&"key"in n}function rC(n={}){function i(o,s){let u=s.state?.masked,{pathname:d,search:p,hash:h}=u||o.location;return kf("",{pathname:d,search:p,hash:h},s.state&&s.state.usr||null,s.state&&s.state.key||"default",u?{pathname:o.location.pathname,search:o.location.search,hash:o.location.hash}:void 0)}function r(o,s){return typeof s=="string"?s:fl(s)}return oC(i,r,null,n)}function qe(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function nn(n,i){if(!n){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function lC(){return Math.random().toString(36).substring(2,10)}function cv(n,i){return{usr:n.state,key:n.key,idx:i,masked:n.unstable_mask?{pathname:n.pathname,search:n.search,hash:n.hash}:void 0}}function kf(n,i,r=null,o,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof i=="string"?Zi(i):i,state:r,key:i&&i.key||o||lC(),unstable_mask:s}}function fl({pathname:n="/",search:i="",hash:r=""}){return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Zi(n){let i={};if(n){let r=n.indexOf("#");r>=0&&(i.hash=n.substring(r),n=n.substring(0,r));let o=n.indexOf("?");o>=0&&(i.search=n.substring(o),n=n.substring(0,o)),n&&(i.pathname=n)}return i}function oC(n,i,r,o={}){let{window:s=document.defaultView,v5Compat:u=!1}=o,d=s.history,p="POP",h=null,m=b();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function b(){return(d.state||{idx:null}).idx}function v(){p="POP";let E=b(),N=E==null?null:E-m;m=E,h&&h({action:p,location:w.location,delta:N})}function C(E,N){p="PUSH";let M=sv(E)?E:kf(w.location,E,N);m=b()+1;let D=cv(M,m),H=w.createHref(M.unstable_mask||M);try{d.pushState(D,"",H)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;s.location.assign(H)}u&&h&&h({action:p,location:w.location,delta:1})}function T(E,N){p="REPLACE";let M=sv(E)?E:kf(w.location,E,N);m=b();let D=cv(M,m),H=w.createHref(M.unstable_mask||M);d.replaceState(D,"",H),u&&h&&h({action:p,location:w.location,delta:0})}function _(E){return sC(E)}let w={get action(){return p},get location(){return n(s,d)},listen(E){if(h)throw new Error("A history only accepts one active listener");return s.addEventListener(ov,v),h=E,()=>{s.removeEventListener(ov,v),h=null}},createHref(E){return i(s,E)},createURL:_,encodeLocation(E){let N=_(E);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:C,replace:T,go(E){return d.go(E)}};return w}function sC(n,i=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),qe(r,"No window.location.(origin|href) available to create URL");let o=typeof n=="string"?n:fl(n);return o=o.replace(/ $/,"%20"),!i&&o.startsWith("//")&&(o=r+o),new URL(o,r)}function Cy(n,i,r="/"){return cC(n,i,r,!1)}function cC(n,i,r,o){let s=typeof i=="string"?Zi(i):i,u=Hn(s.pathname||"/",r);if(u==null)return null;let d=wy(n);uC(d);let p=null;for(let h=0;p==null&&h<d.length;++h){let m=SC(u);p=xC(d[h],m,o)}return p}function wy(n,i=[],r=[],o="",s=!1){let u=(d,p,h=s,m)=>{let b={relativePath:m===void 0?d.path||"":m,caseSensitive:d.caseSensitive===!0,childrenIndex:p,route:d};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(o)&&h)return;qe(b.relativePath.startsWith(o),`Absolute route path "${b.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(o.length)}let v=mn([o,b.relativePath]),C=r.concat(b);d.children&&d.children.length>0&&(qe(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),wy(d.children,i,C,v,h)),!(d.path==null&&!d.index)&&i.push({path:v,score:vC(v,d.index),routesMeta:C})};return n.forEach((d,p)=>{if(d.path===""||!d.path?.includes("?"))u(d,p);else for(let h of Ty(d.path))u(d,p,!0,h)}),i}function Ty(n){let i=n.split("/");if(i.length===0)return[];let[r,...o]=i,s=r.endsWith("?"),u=r.replace(/\?$/,"");if(o.length===0)return s?[u,""]:[u];let d=Ty(o.join("/")),p=[];return p.push(...d.map(h=>h===""?u:[u,h].join("/"))),s&&p.push(...d),p.map(h=>n.startsWith("/")&&h===""?"/":h)}function uC(n){n.sort((i,r)=>i.score!==r.score?r.score-i.score:yC(i.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}var fC=/^:[\w-]+$/,dC=3,pC=2,hC=1,mC=10,gC=-2,uv=n=>n==="*";function vC(n,i){let r=n.split("/"),o=r.length;return r.some(uv)&&(o+=gC),i&&(o+=pC),r.filter(s=>!uv(s)).reduce((s,u)=>s+(fC.test(u)?dC:u===""?hC:mC),o)}function yC(n,i){return n.length===i.length&&n.slice(0,-1).every((o,s)=>o===i[s])?n[n.length-1]-i[i.length-1]:0}function xC(n,i,r=!1){let{routesMeta:o}=n,s={},u="/",d=[];for(let p=0;p<o.length;++p){let h=o[p],m=p===o.length-1,b=u==="/"?i:i.slice(u.length)||"/",v=cs({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},b),C=h.route;if(!v&&m&&r&&!o[o.length-1].route.index&&(v=cs({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},b)),!v)return null;Object.assign(s,v.params),d.push({params:s,pathname:mn([u,v.pathname]),pathnameBase:_C(mn([u,v.pathnameBase])),route:C}),v.pathnameBase!=="/"&&(u=mn([u,v.pathnameBase]))}return d}function cs(n,i){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[r,o]=bC(n.path,n.caseSensitive,n.end),s=i.match(r);if(!s)return null;let u=s[0],d=u.replace(/(.)\/+$/,"$1"),p=s.slice(1);return{params:o.reduce((m,{paramName:b,isOptional:v},C)=>{if(b==="*"){let _=p[C]||"";d=u.slice(0,u.length-_.length).replace(/(.)\/+$/,"$1")}const T=p[C];return v&&!T?m[b]=void 0:m[b]=(T||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:d,pattern:n}}function bC(n,i=!1,r=!0){nn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let o=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,h,m,b)=>{if(o.push({paramName:p,isOptional:h!=null}),h){let v=b.charAt(m+d.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(o.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,i?void 0:"i"),o]}function SC(n){try{return n.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return nn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),n}}function Hn(n,i){if(i==="/")return n;if(!n.toLowerCase().startsWith(i.toLowerCase()))return null;let r=i.endsWith("/")?i.length-1:i.length,o=n.charAt(r);return o&&o!=="/"?null:n.slice(r)||"/"}var CC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function wC(n,i="/"){let{pathname:r,search:o="",hash:s=""}=typeof n=="string"?Zi(n):n,u;return r?(r=r.replace(/\/\/+/g,"/"),r.startsWith("/")?u=fv(r.substring(1),"/"):u=fv(r,i)):u=i,{pathname:u,search:EC(o),hash:RC(s)}}function fv(n,i){let r=i.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function hf(n,i,r,o){return`Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function TC(n){return n.filter((i,r)=>r===0||i.route.path&&i.route.path.length>0)}function rd(n){let i=TC(n);return i.map((r,o)=>o===i.length-1?r.pathname:r.pathnameBase)}function ws(n,i,r,o=!1){let s;typeof n=="string"?s=Zi(n):(s={...n},qe(!s.pathname||!s.pathname.includes("?"),hf("?","pathname","search",s)),qe(!s.pathname||!s.pathname.includes("#"),hf("#","pathname","hash",s)),qe(!s.search||!s.search.includes("#"),hf("#","search","hash",s)));let u=n===""||s.pathname==="",d=u?"/":s.pathname,p;if(d==null)p=r;else{let v=i.length-1;if(!o&&d.startsWith("..")){let C=d.split("/");for(;C[0]==="..";)C.shift(),v-=1;s.pathname=C.join("/")}p=v>=0?i[v]:"/"}let h=wC(s,p),m=d&&d!=="/"&&d.endsWith("/"),b=(u||d===".")&&r.endsWith("/");return!h.pathname.endsWith("/")&&(m||b)&&(h.pathname+="/"),h}var mn=n=>n.join("/").replace(/\/\/+/g,"/"),_C=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),EC=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,RC=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,AC=class{constructor(n,i,r,o=!1){this.status=n,this.statusText=i||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function NC(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function OC(n){return n.map(i=>i.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var _y=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ey(n,i){let r=n;if(typeof r!="string"||!CC.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let o=r,s=!1;if(_y)try{let u=new URL(window.location.href),d=r.startsWith("//")?new URL(u.protocol+r):new URL(r),p=Hn(d.pathname,i);d.origin===u.origin&&p!=null?r=p+d.search+d.hash:s=!0}catch{nn(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:s,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ry=["POST","PUT","PATCH","DELETE"];new Set(Ry);var MC=["GET",...Ry];new Set(MC);var Wi=g.createContext(null);Wi.displayName="DataRouter";var Ts=g.createContext(null);Ts.displayName="DataRouterState";var DC=g.createContext(!1),Ay=g.createContext({isTransitioning:!1});Ay.displayName="ViewTransition";var LC=g.createContext(new Map);LC.displayName="Fetchers";var jC=g.createContext(null);jC.displayName="Await";var Ut=g.createContext(null);Ut.displayName="Navigation";var Sl=g.createContext(null);Sl.displayName="Location";var on=g.createContext({outlet:null,matches:[],isDataRoute:!1});on.displayName="Route";var ld=g.createContext(null);ld.displayName="RouteError";var Ny="REACT_ROUTER_ERROR",kC="REDIRECT",zC="ROUTE_ERROR_RESPONSE";function IC(n){if(n.startsWith(`${Ny}:${kC}:{`))try{let i=JSON.parse(n.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function PC(n){if(n.startsWith(`${Ny}:${zC}:{`))try{let i=JSON.parse(n.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new AC(i.status,i.statusText,i.data)}catch{}}function HC(n,{relative:i}={}){qe(Ji(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:o}=g.useContext(Ut),{hash:s,pathname:u,search:d}=Cl(n,{relative:i}),p=u;return r!=="/"&&(p=u==="/"?r:mn([r,u])),o.createHref({pathname:p,search:d,hash:s})}function Ji(){return g.useContext(Sl)!=null}function yn(){return qe(Ji(),"useLocation() may be used only in the context of a <Router> component."),g.useContext(Sl).location}var Oy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function My(n){g.useContext(Ut).static||g.useLayoutEffect(n)}function Dy(){let{isDataRoute:n}=g.useContext(on);return n?WC():UC()}function UC(){qe(Ji(),"useNavigate() may be used only in the context of a <Router> component.");let n=g.useContext(Wi),{basename:i,navigator:r}=g.useContext(Ut),{matches:o}=g.useContext(on),{pathname:s}=yn(),u=JSON.stringify(rd(o)),d=g.useRef(!1);return My(()=>{d.current=!0}),g.useCallback((h,m={})=>{if(nn(d.current,Oy),!d.current)return;if(typeof h=="number"){r.go(h);return}let b=ws(h,JSON.parse(u),s,m.relative==="path");n==null&&i!=="/"&&(b.pathname=b.pathname==="/"?i:mn([i,b.pathname])),(m.replace?r.replace:r.push)(b,m.state,m)},[i,r,u,s,n])}g.createContext(null);function Ly(){let{matches:n}=g.useContext(on),i=n[n.length-1];return i?i.params:{}}function Cl(n,{relative:i}={}){let{matches:r}=g.useContext(on),{pathname:o}=yn(),s=JSON.stringify(rd(r));return g.useMemo(()=>ws(n,JSON.parse(s),o,i==="path"),[n,s,o,i])}function BC(n,i){return jy(n,i)}function jy(n,i,r){qe(Ji(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=g.useContext(Ut),{matches:s}=g.useContext(on),u=s[s.length-1],d=u?u.params:{},p=u?u.pathname:"/",h=u?u.pathnameBase:"/",m=u&&u.route;{let E=m&&m.path||"";zy(p,!m||E.endsWith("*")||E.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E==="/"?"*":`${E}/*`}">.`)}let b=yn(),v;if(i){let E=typeof i=="string"?Zi(i):i;qe(h==="/"||E.pathname?.startsWith(h),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${E.pathname}" was given in the \`location\` prop.`),v=E}else v=b;let C=v.pathname||"/",T=C;if(h!=="/"){let E=h.replace(/^\//,"").split("/");T="/"+C.replace(/^\//,"").split("/").slice(E.length).join("/")}let _=Cy(n,{pathname:T});nn(m||_!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),nn(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=YC(_&&_.map(E=>Object.assign({},E,{params:Object.assign({},d,E.params),pathname:mn([h,o.encodeLocation?o.encodeLocation(E.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?h:mn([h,o.encodeLocation?o.encodeLocation(E.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathnameBase])})),s,r);return i&&w?g.createElement(Sl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...v},navigationType:"POP"}},w):w}function GC(){let n=ZC(),i=NC(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),r=n instanceof Error?n.stack:null,o="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:o},u={padding:"2px 4px",backgroundColor:o},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=g.createElement(g.Fragment,null,g.createElement("p",null,"💿 Hey developer 👋"),g.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",g.createElement("code",{style:u},"ErrorBoundary")," or"," ",g.createElement("code",{style:u},"errorElement")," prop on your route.")),g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},i),r?g.createElement("pre",{style:s},r):null,d)}var VC=g.createElement(GC,null),ky=class extends g.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){this.props.onError?this.props.onError(n,i):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const r=PC(n.digest);r&&(n=r)}let i=n!==void 0?g.createElement(on.Provider,{value:this.props.routeContext},g.createElement(ld.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?g.createElement(FC,{error:n},i):i}};ky.contextType=DC;var mf=new WeakMap;function FC({children:n,error:i}){let{basename:r}=g.useContext(Ut);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let o=IC(i.digest);if(o){let s=mf.get(i);if(s)throw s;let u=Ey(o.location,r);if(_y&&!mf.get(i))if(u.isExternal||o.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:o.replace}));throw mf.set(i,d),d}return g.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return n}function KC({routeContext:n,match:i,children:r}){let o=g.useContext(Wi);return o&&o.static&&o.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=i.route.id),g.createElement(on.Provider,{value:n},r)}function YC(n,i=[],r){let o=r?.state;if(n==null){if(!o)return null;if(o.errors)n=o.matches;else if(i.length===0&&!o.initialized&&o.matches.length>0)n=o.matches;else return null}let s=n,u=o?.errors;if(u!=null){let b=s.findIndex(v=>v.route.id&&u?.[v.route.id]!==void 0);qe(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),s=s.slice(0,Math.min(s.length,b+1))}let d=!1,p=-1;if(r&&o){d=o.renderFallback;for(let b=0;b<s.length;b++){let v=s[b];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=b),v.route.id){let{loaderData:C,errors:T}=o,_=v.route.loader&&!C.hasOwnProperty(v.route.id)&&(!T||T[v.route.id]===void 0);if(v.route.lazy||_){r.isStatic&&(d=!0),p>=0?s=s.slice(0,p+1):s=[s[0]];break}}}}let h=r?.onError,m=o&&h?(b,v)=>{h(b,{location:o.location,params:o.matches?.[0]?.params??{},unstable_pattern:OC(o.matches),errorInfo:v})}:void 0;return s.reduceRight((b,v,C)=>{let T,_=!1,w=null,E=null;o&&(T=u&&v.route.id?u[v.route.id]:void 0,w=v.route.errorElement||VC,d&&(p<0&&C===0?(zy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,E=null):p===C&&(_=!0,E=v.route.hydrateFallbackElement||null)));let N=i.concat(s.slice(0,C+1)),M=()=>{let D;return T?D=w:_?D=E:v.route.Component?D=g.createElement(v.route.Component,null):v.route.element?D=v.route.element:D=b,g.createElement(KC,{match:v,routeContext:{outlet:b,matches:N,isDataRoute:o!=null},children:D})};return o&&(v.route.ErrorBoundary||v.route.errorElement||C===0)?g.createElement(ky,{location:o.location,revalidation:o.revalidation,component:w,error:T,children:M(),routeContext:{outlet:null,matches:N,isDataRoute:!0},onError:m}):M()},null)}function od(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $C(n){let i=g.useContext(Wi);return qe(i,od(n)),i}function qC(n){let i=g.useContext(Ts);return qe(i,od(n)),i}function XC(n){let i=g.useContext(on);return qe(i,od(n)),i}function sd(n){let i=XC(n),r=i.matches[i.matches.length-1];return qe(r.route.id,`${n} can only be used on routes that contain a unique "id"`),r.route.id}function QC(){return sd("useRouteId")}function ZC(){let n=g.useContext(ld),i=qC("useRouteError"),r=sd("useRouteError");return n!==void 0?n:i.errors?.[r]}function WC(){let{router:n}=$C("useNavigate"),i=sd("useNavigate"),r=g.useRef(!1);return My(()=>{r.current=!0}),g.useCallback(async(s,u={})=>{nn(r.current,Oy),r.current&&(typeof s=="number"?await n.navigate(s):await n.navigate(s,{fromRouteId:i,...u}))},[n,i])}var dv={};function zy(n,i,r){!i&&!dv[n]&&(dv[n]=!0,nn(!1,r))}g.memo(JC);function JC({routes:n,future:i,state:r,isStatic:o,onError:s}){return jy(n,void 0,{state:r,isStatic:o,onError:s})}function Iy({to:n,replace:i,state:r,relative:o}){qe(Ji(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=g.useContext(Ut);nn(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=g.useContext(on),{pathname:d}=yn(),p=Dy(),h=ws(n,rd(u),d,o==="path"),m=JSON.stringify(h);return g.useEffect(()=>{p(JSON.parse(m),{replace:i,state:r,relative:o})},[p,m,o,i,r]),null}function rl(n){qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ew({basename:n="/",children:i=null,location:r,navigationType:o="POP",navigator:s,static:u=!1,unstable_useTransitions:d}){qe(!Ji(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=n.replace(/^\/*/,"/"),h=g.useMemo(()=>({basename:p,navigator:s,static:u,unstable_useTransitions:d,future:{}}),[p,s,u,d]);typeof r=="string"&&(r=Zi(r));let{pathname:m="/",search:b="",hash:v="",state:C=null,key:T="default",unstable_mask:_}=r,w=g.useMemo(()=>{let E=Hn(m,p);return E==null?null:{location:{pathname:E,search:b,hash:v,state:C,key:T,unstable_mask:_},navigationType:o}},[p,m,b,v,C,T,o,_]);return nn(w!=null,`<Router basename="${p}"> is not able to match the URL "${m}${b}${v}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:g.createElement(Ut.Provider,{value:h},g.createElement(Sl.Provider,{children:i,value:w}))}function tw({children:n,location:i}){return BC(zf(n),i)}function zf(n,i=[]){let r=[];return g.Children.forEach(n,(o,s)=>{if(!g.isValidElement(o))return;let u=[...i,s];if(o.type===g.Fragment){r.push.apply(r,zf(o.props.children,u));return}qe(o.type===rl,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),qe(!o.props.index||!o.props.children,"An index route cannot have child routes.");let d={id:o.props.id||u.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(d.children=zf(o.props.children,u)),r.push(d)}),r}var is="get",rs="application/x-www-form-urlencoded";function _s(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function nw(n){return _s(n)&&n.tagName.toLowerCase()==="button"}function aw(n){return _s(n)&&n.tagName.toLowerCase()==="form"}function iw(n){return _s(n)&&n.tagName.toLowerCase()==="input"}function rw(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function lw(n,i){return n.button===0&&(!i||i==="_self")&&!rw(n)}var qo=null;function ow(){if(qo===null)try{new FormData(document.createElement("form"),0),qo=!1}catch{qo=!0}return qo}var sw=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gf(n){return n!=null&&!sw.has(n)?(nn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${rs}"`),null):n}function cw(n,i){let r,o,s,u,d;if(aw(n)){let p=n.getAttribute("action");o=p?Hn(p,i):null,r=n.getAttribute("method")||is,s=gf(n.getAttribute("enctype"))||rs,u=new FormData(n)}else if(nw(n)||iw(n)&&(n.type==="submit"||n.type==="image")){let p=n.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||p.getAttribute("action");if(o=h?Hn(h,i):null,r=n.getAttribute("formmethod")||p.getAttribute("method")||is,s=gf(n.getAttribute("formenctype"))||gf(p.getAttribute("enctype"))||rs,u=new FormData(p,n),!ow()){let{name:m,type:b,value:v}=n;if(b==="image"){let C=m?`${m}.`:"";u.append(`${C}x`,"0"),u.append(`${C}y`,"0")}else m&&u.append(m,v)}}else{if(_s(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=is,o=null,s=rs,d=n}return u&&s==="text/plain"&&(d=u,u=void 0),{action:o,method:r.toLowerCase(),encType:s,formData:u,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function cd(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function uw(n,i,r,o){let s=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return r?s.pathname.endsWith("/")?s.pathname=`${s.pathname}_.${o}`:s.pathname=`${s.pathname}.${o}`:s.pathname==="/"?s.pathname=`_root.${o}`:i&&Hn(s.pathname,i)==="/"?s.pathname=`${i.replace(/\/$/,"")}/_root.${o}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${o}`,s}async function fw(n,i){if(n.id in i)return i[n.id];try{let r=await import(n.module);return i[n.id]=r,r}catch(r){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function dw(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function pw(n,i,r){let o=await Promise.all(n.map(async s=>{let u=i.routes[s.route.id];if(u){let d=await fw(u,r);return d.links?d.links():[]}return[]}));return vw(o.flat(1).filter(dw).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function pv(n,i,r,o,s,u){let d=(h,m)=>r[m]?h.route.id!==r[m].route.id:!0,p=(h,m)=>r[m].pathname!==h.pathname||r[m].route.path?.endsWith("*")&&r[m].params["*"]!==h.params["*"];return u==="assets"?i.filter((h,m)=>d(h,m)||p(h,m)):u==="data"?i.filter((h,m)=>{let b=o.routes[h.route.id];if(!b||!b.hasLoader)return!1;if(d(h,m)||p(h,m))return!0;if(h.route.shouldRevalidate){let v=h.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function hw(n,i,{includeHydrateFallback:r}={}){return mw(n.map(o=>{let s=i.routes[o.route.id];if(!s)return[];let u=[s.module];return s.clientActionModule&&(u=u.concat(s.clientActionModule)),s.clientLoaderModule&&(u=u.concat(s.clientLoaderModule)),r&&s.hydrateFallbackModule&&(u=u.concat(s.hydrateFallbackModule)),s.imports&&(u=u.concat(s.imports)),u}).flat(1))}function mw(n){return[...new Set(n)]}function gw(n){let i={},r=Object.keys(n).sort();for(let o of r)i[o]=n[o];return i}function vw(n,i){let r=new Set;return new Set(i),n.reduce((o,s)=>{let u=JSON.stringify(gw(s));return r.has(u)||(r.add(u),o.push({key:u,link:s})),o},[])}function Py(){let n=g.useContext(Wi);return cd(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function yw(){let n=g.useContext(Ts);return cd(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var ud=g.createContext(void 0);ud.displayName="FrameworkContext";function Hy(){let n=g.useContext(ud);return cd(n,"You must render this element inside a <HydratedRouter> element"),n}function xw(n,i){let r=g.useContext(ud),[o,s]=g.useState(!1),[u,d]=g.useState(!1),{onFocus:p,onBlur:h,onMouseEnter:m,onMouseLeave:b,onTouchStart:v}=i,C=g.useRef(null);g.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let w=N=>{N.forEach(M=>{d(M.isIntersecting)})},E=new IntersectionObserver(w,{threshold:.5});return C.current&&E.observe(C.current),()=>{E.disconnect()}}},[n]),g.useEffect(()=>{if(o){let w=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(w)}}},[o]);let T=()=>{s(!0)},_=()=>{s(!1),d(!1)};return r?n!=="intent"?[u,C,{}]:[u,C,{onFocus:nl(p,T),onBlur:nl(h,_),onMouseEnter:nl(m,T),onMouseLeave:nl(b,_),onTouchStart:nl(v,T)}]:[!1,C,{}]}function nl(n,i){return r=>{n&&n(r),r.defaultPrevented||i(r)}}function bw({page:n,...i}){let{router:r}=Py(),o=g.useMemo(()=>Cy(r.routes,n,r.basename),[r.routes,n,r.basename]);return o?g.createElement(Cw,{page:n,matches:o,...i}):null}function Sw(n){let{manifest:i,routeModules:r}=Hy(),[o,s]=g.useState([]);return g.useEffect(()=>{let u=!1;return pw(n,i,r).then(d=>{u||s(d)}),()=>{u=!0}},[n,i,r]),o}function Cw({page:n,matches:i,...r}){let o=yn(),{future:s,manifest:u,routeModules:d}=Hy(),{basename:p}=Py(),{loaderData:h,matches:m}=yw(),b=g.useMemo(()=>pv(n,i,m,u,o,"data"),[n,i,m,u,o]),v=g.useMemo(()=>pv(n,i,m,u,o,"assets"),[n,i,m,u,o]),C=g.useMemo(()=>{if(n===o.pathname+o.search+o.hash)return[];let w=new Set,E=!1;if(i.forEach(M=>{let D=u.routes[M.route.id];!D||!D.hasLoader||(!b.some(H=>H.route.id===M.route.id)&&M.route.id in h&&d[M.route.id]?.shouldRevalidate||D.hasClientLoader?E=!0:w.add(M.route.id))}),w.size===0)return[];let N=uw(n,p,s.unstable_trailingSlashAwareDataRequests,"data");return E&&w.size>0&&N.searchParams.set("_routes",i.filter(M=>w.has(M.route.id)).map(M=>M.route.id).join(",")),[N.pathname+N.search]},[p,s.unstable_trailingSlashAwareDataRequests,h,o,u,b,i,n,d]),T=g.useMemo(()=>hw(v,u),[v,u]),_=Sw(v);return g.createElement(g.Fragment,null,C.map(w=>g.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...r})),T.map(w=>g.createElement("link",{key:w,rel:"modulepreload",href:w,...r})),_.map(({key:w,link:E})=>g.createElement("link",{key:w,nonce:r.nonce,...E,crossOrigin:E.crossOrigin??r.crossOrigin})))}function ww(...n){return i=>{n.forEach(r=>{typeof r=="function"?r(i):r!=null&&(r.current=i)})}}var Tw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Tw&&(window.__reactRouterVersion="7.13.1")}catch{}function _w({basename:n,children:i,unstable_useTransitions:r,window:o}){let s=g.useRef();s.current==null&&(s.current=rC({window:o,v5Compat:!0}));let u=s.current,[d,p]=g.useState({action:u.action,location:u.location}),h=g.useCallback(m=>{r===!1?p(m):g.startTransition(()=>p(m))},[r]);return g.useLayoutEffect(()=>u.listen(h),[u,h]),g.createElement(ew,{basename:n,children:i,location:d.location,navigationType:d.action,navigator:u,unstable_useTransitions:r})}var Uy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ge=g.forwardRef(function({onClick:i,discover:r="render",prefetch:o="none",relative:s,reloadDocument:u,replace:d,unstable_mask:p,state:h,target:m,to:b,preventScrollReset:v,viewTransition:C,unstable_defaultShouldRevalidate:T,..._},w){let{basename:E,navigator:N,unstable_useTransitions:M}=g.useContext(Ut),D=typeof b=="string"&&Uy.test(b),H=Ey(b,E);b=H.to;let G=HC(b,{relative:s}),W=yn(),U=null;if(p){let ue=ws(p,[],W.unstable_mask?W.unstable_mask.pathname:"/",!0);E!=="/"&&(ue.pathname=ue.pathname==="/"?E:mn([E,ue.pathname])),U=N.createHref(ue)}let[Y,J,te]=xw(o,_),ae=Nw(b,{replace:d,unstable_mask:p,state:h,target:m,preventScrollReset:v,relative:s,viewTransition:C,unstable_defaultShouldRevalidate:T,unstable_useTransitions:M});function ne(ue){i&&i(ue),ue.defaultPrevented||ae(ue)}let re=!(H.isExternal||u),ie=g.createElement("a",{..._,...te,href:(re?U:void 0)||H.absoluteURL||G,onClick:re?ne:i,ref:ww(w,J),target:m,"data-discover":!D&&r==="render"?"true":void 0});return Y&&!D?g.createElement(g.Fragment,null,ie,g.createElement(bw,{page:G})):ie});Ge.displayName="Link";var Ew=g.forwardRef(function({"aria-current":i="page",caseSensitive:r=!1,className:o="",end:s=!1,style:u,to:d,viewTransition:p,children:h,...m},b){let v=Cl(d,{relative:m.relative}),C=yn(),T=g.useContext(Ts),{navigator:_,basename:w}=g.useContext(Ut),E=T!=null&&jw(v)&&p===!0,N=_.encodeLocation?_.encodeLocation(v).pathname:v.pathname,M=C.pathname,D=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;r||(M=M.toLowerCase(),D=D?D.toLowerCase():null,N=N.toLowerCase()),D&&w&&(D=Hn(D,w)||D);const H=N!=="/"&&N.endsWith("/")?N.length-1:N.length;let G=M===N||!s&&M.startsWith(N)&&M.charAt(H)==="/",W=D!=null&&(D===N||!s&&D.startsWith(N)&&D.charAt(N.length)==="/"),U={isActive:G,isPending:W,isTransitioning:E},Y=G?i:void 0,J;typeof o=="function"?J=o(U):J=[o,G?"active":null,W?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let te=typeof u=="function"?u(U):u;return g.createElement(Ge,{...m,"aria-current":Y,className:J,ref:b,style:te,to:d,viewTransition:p},typeof h=="function"?h(U):h)});Ew.displayName="NavLink";var Rw=g.forwardRef(({discover:n="render",fetcherKey:i,navigate:r,reloadDocument:o,replace:s,state:u,method:d=is,action:p,onSubmit:h,relative:m,preventScrollReset:b,viewTransition:v,unstable_defaultShouldRevalidate:C,...T},_)=>{let{unstable_useTransitions:w}=g.useContext(Ut),E=Dw(),N=Lw(p,{relative:m}),M=d.toLowerCase()==="get"?"get":"post",D=typeof p=="string"&&Uy.test(p),H=G=>{if(h&&h(G),G.defaultPrevented)return;G.preventDefault();let W=G.nativeEvent.submitter,U=W?.getAttribute("formmethod")||d,Y=()=>E(W||G.currentTarget,{fetcherKey:i,method:U,navigate:r,replace:s,state:u,relative:m,preventScrollReset:b,viewTransition:v,unstable_defaultShouldRevalidate:C});w&&r!==!1?g.startTransition(()=>Y()):Y()};return g.createElement("form",{ref:_,method:M,action:N,onSubmit:o?h:H,...T,"data-discover":!D&&n==="render"?"true":void 0})});Rw.displayName="Form";function Aw(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function By(n){let i=g.useContext(Wi);return qe(i,Aw(n)),i}function Nw(n,{target:i,replace:r,unstable_mask:o,state:s,preventScrollReset:u,relative:d,viewTransition:p,unstable_defaultShouldRevalidate:h,unstable_useTransitions:m}={}){let b=Dy(),v=yn(),C=Cl(n,{relative:d});return g.useCallback(T=>{if(lw(T,i)){T.preventDefault();let _=r!==void 0?r:fl(v)===fl(C),w=()=>b(n,{replace:_,unstable_mask:o,state:s,preventScrollReset:u,relative:d,viewTransition:p,unstable_defaultShouldRevalidate:h});m?g.startTransition(()=>w()):w()}},[v,b,C,r,o,s,i,n,u,d,p,h,m])}var Ow=0,Mw=()=>`__${String(++Ow)}__`;function Dw(){let{router:n}=By("useSubmit"),{basename:i}=g.useContext(Ut),r=QC(),o=n.fetch,s=n.navigate;return g.useCallback(async(u,d={})=>{let{action:p,method:h,encType:m,formData:b,body:v}=cw(u,i);if(d.navigate===!1){let C=d.fetcherKey||Mw();await o(C,r,d.action||p,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:b,body:v,formMethod:d.method||h,formEncType:d.encType||m,flushSync:d.flushSync})}else await s(d.action||p,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:b,body:v,formMethod:d.method||h,formEncType:d.encType||m,replace:d.replace,state:d.state,fromRouteId:r,flushSync:d.flushSync,viewTransition:d.viewTransition})},[o,s,i,r])}function Lw(n,{relative:i}={}){let{basename:r}=g.useContext(Ut),o=g.useContext(on);qe(o,"useFormAction must be used inside a RouteContext");let[s]=o.matches.slice(-1),u={...Cl(n||".",{relative:i})},d=yn();if(n==null){u.search=d.search;let p=new URLSearchParams(u.search),h=p.getAll("index");if(h.some(b=>b==="")){p.delete("index"),h.filter(v=>v).forEach(v=>p.append("index",v));let b=p.toString();u.search=b?`?${b}`:""}}return(!n||n===".")&&s.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(u.pathname=u.pathname==="/"?r:mn([r,u.pathname])),fl(u)}function jw(n,{relative:i}={}){let r=g.useContext(Ay);qe(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=By("useViewTransitionState"),s=Cl(n,{relative:i});if(!r.isTransitioning)return!1;let u=Hn(r.currentLocation.pathname,o)||r.currentLocation.pathname,d=Hn(r.nextLocation.pathname,o)||r.nextLocation.pathname;return cs(s.pathname,d)!=null||cs(s.pathname,u)!=null}var wl=Sy();const kw=by(wl),ve=n=>typeof n=="string",al=()=>{let n,i;const r=new Promise((o,s)=>{n=o,i=s});return r.resolve=n,r.reject=i,r},hv=n=>n==null?"":""+n,zw=(n,i,r)=>{n.forEach(o=>{i[o]&&(r[o]=i[o])})},Iw=/###/g,mv=n=>n&&n.indexOf("###")>-1?n.replace(Iw,"."):n,gv=n=>!n||ve(n),sl=(n,i,r)=>{const o=ve(i)?i.split("."):i;let s=0;for(;s<o.length-1;){if(gv(n))return{};const u=mv(o[s]);!n[u]&&r&&(n[u]=new r),Object.prototype.hasOwnProperty.call(n,u)?n=n[u]:n={},++s}return gv(n)?{}:{obj:n,k:mv(o[s])}},vv=(n,i,r)=>{const{obj:o,k:s}=sl(n,i,Object);if(o!==void 0||i.length===1){o[s]=r;return}let u=i[i.length-1],d=i.slice(0,i.length-1),p=sl(n,d,Object);for(;p.obj===void 0&&d.length;)u=`${d[d.length-1]}.${u}`,d=d.slice(0,d.length-1),p=sl(n,d,Object),p?.obj&&typeof p.obj[`${p.k}.${u}`]<"u"&&(p.obj=void 0);p.obj[`${p.k}.${u}`]=r},Pw=(n,i,r,o)=>{const{obj:s,k:u}=sl(n,i,Object);s[u]=s[u]||[],s[u].push(r)},us=(n,i)=>{const{obj:r,k:o}=sl(n,i);if(r&&Object.prototype.hasOwnProperty.call(r,o))return r[o]},Hw=(n,i,r)=>{const o=us(n,r);return o!==void 0?o:us(i,r)},Gy=(n,i,r)=>{for(const o in i)o!=="__proto__"&&o!=="constructor"&&(o in n?ve(n[o])||n[o]instanceof String||ve(i[o])||i[o]instanceof String?r&&(n[o]=i[o]):Gy(n[o],i[o],r):n[o]=i[o]);return n},Ka=n=>n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Uw={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Bw=n=>ve(n)?n.replace(/[&<>"'\/]/g,i=>Uw[i]):n;class Gw{constructor(i){this.capacity=i,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(i){const r=this.regExpMap.get(i);if(r!==void 0)return r;const o=new RegExp(i);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(i,o),this.regExpQueue.push(i),o}}const Vw=[" ",",","?","!",";"],Fw=new Gw(20),Kw=(n,i,r)=>{i=i||"",r=r||"";const o=Vw.filter(d=>i.indexOf(d)<0&&r.indexOf(d)<0);if(o.length===0)return!0;const s=Fw.getRegExp(`(${o.map(d=>d==="?"?"\\?":d).join("|")})`);let u=!s.test(n);if(!u){const d=n.indexOf(r);d>0&&!s.test(n.substring(0,d))&&(u=!0)}return u},If=(n,i,r=".")=>{if(!n)return;if(n[i])return Object.prototype.hasOwnProperty.call(n,i)?n[i]:void 0;const o=i.split(r);let s=n;for(let u=0;u<o.length;){if(!s||typeof s!="object")return;let d,p="";for(let h=u;h<o.length;++h)if(h!==u&&(p+=r),p+=o[h],d=s[p],d!==void 0){if(["string","number","boolean"].indexOf(typeof d)>-1&&h<o.length-1)continue;u+=h-u+1;break}s=d}return s},dl=n=>n?.replace(/_/g,"-"),Yw={type:"logger",log(n){this.output("log",n)},warn(n){this.output("warn",n)},error(n){this.output("error",n)},output(n,i){console?.[n]?.apply?.(console,i)}};class fs{constructor(i,r={}){this.init(i,r)}init(i,r={}){this.prefix=r.prefix||"i18next:",this.logger=i||Yw,this.options=r,this.debug=r.debug}log(...i){return this.forward(i,"log","",!0)}warn(...i){return this.forward(i,"warn","",!0)}error(...i){return this.forward(i,"error","")}deprecate(...i){return this.forward(i,"warn","WARNING DEPRECATED: ",!0)}forward(i,r,o,s){return s&&!this.debug?null:(ve(i[0])&&(i[0]=`${o}${this.prefix} ${i[0]}`),this.logger[r](i))}create(i){return new fs(this.logger,{prefix:`${this.prefix}:${i}:`,...this.options})}clone(i){return i=i||this.options,i.prefix=i.prefix||this.prefix,new fs(this.logger,i)}}var pn=new fs;class Es{constructor(){this.observers={}}on(i,r){return i.split(" ").forEach(o=>{this.observers[o]||(this.observers[o]=new Map);const s=this.observers[o].get(r)||0;this.observers[o].set(r,s+1)}),this}off(i,r){if(this.observers[i]){if(!r){delete this.observers[i];return}this.observers[i].delete(r)}}emit(i,...r){this.observers[i]&&Array.from(this.observers[i].entries()).forEach(([s,u])=>{for(let d=0;d<u;d++)s(...r)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([s,u])=>{for(let d=0;d<u;d++)s.apply(s,[i,...r])})}}class yv extends Es{constructor(i,r={ns:["translation"],defaultNS:"translation"}){super(),this.data=i||{},this.options=r,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(i){this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}removeNamespaces(i){const r=this.options.ns.indexOf(i);r>-1&&this.options.ns.splice(r,1)}getResource(i,r,o,s={}){const u=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,d=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let p;i.indexOf(".")>-1?p=i.split("."):(p=[i,r],o&&(Array.isArray(o)?p.push(...o):ve(o)&&u?p.push(...o.split(u)):p.push(o)));const h=us(this.data,p);return!h&&!r&&!o&&i.indexOf(".")>-1&&(i=p[0],r=p[1],o=p.slice(2).join(".")),h||!d||!ve(o)?h:If(this.data?.[i]?.[r],o,u)}addResource(i,r,o,s,u={silent:!1}){const d=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator;let p=[i,r];o&&(p=p.concat(d?o.split(d):o)),i.indexOf(".")>-1&&(p=i.split("."),s=r,r=p[1]),this.addNamespaces(r),vv(this.data,p,s),u.silent||this.emit("added",i,r,o,s)}addResources(i,r,o,s={silent:!1}){for(const u in o)(ve(o[u])||Array.isArray(o[u]))&&this.addResource(i,r,u,o[u],{silent:!0});s.silent||this.emit("added",i,r,o)}addResourceBundle(i,r,o,s,u,d={silent:!1,skipCopy:!1}){let p=[i,r];i.indexOf(".")>-1&&(p=i.split("."),s=o,o=r,r=p[1]),this.addNamespaces(r);let h=us(this.data,p)||{};d.skipCopy||(o=JSON.parse(JSON.stringify(o))),s?Gy(h,o,u):h={...h,...o},vv(this.data,p,h),d.silent||this.emit("added",i,r,o)}removeResourceBundle(i,r){this.hasResourceBundle(i,r)&&delete this.data[i][r],this.removeNamespaces(r),this.emit("removed",i,r)}hasResourceBundle(i,r){return this.getResource(i,r)!==void 0}getResourceBundle(i,r){return r||(r=this.options.defaultNS),this.getResource(i,r)}getDataByLanguage(i){return this.data[i]}hasLanguageSomeTranslations(i){const r=this.getDataByLanguage(i);return!!(r&&Object.keys(r)||[]).find(s=>r[s]&&Object.keys(r[s]).length>0)}toJSON(){return this.data}}var Vy={processors:{},addPostProcessor(n){this.processors[n.name]=n},handle(n,i,r,o,s){return n.forEach(u=>{i=this.processors[u]?.process(i,r,o,s)??i}),i}};const Fy=Symbol("i18next/PATH_KEY");function $w(){const n=[],i=Object.create(null);let r;return i.get=(o,s)=>(r?.revoke?.(),s===Fy?n:(n.push(s),r=Proxy.revocable(o,i),r.proxy)),Proxy.revocable(Object.create(null),i).proxy}function cl(n,i){const{[Fy]:r}=n($w()),o=i?.keySeparator??".",s=i?.nsSeparator??":";if(r.length>1&&s){const u=i?.ns;if((u?Array.isArray(u)?u:[u]:[]).includes(r[0]))return`${r[0]}${s}${r.slice(1).join(o)}`}return r.join(o)}const xv={},vf=n=>!ve(n)&&typeof n!="boolean"&&typeof n!="number";class ds extends Es{constructor(i,r={}){super(),zw(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],i,this),this.options=r,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=pn.create("translator")}changeLanguage(i){i&&(this.language=i)}exists(i,r={interpolation:{}}){const o={...r};if(i==null)return!1;const s=this.resolve(i,o);if(s?.res===void 0)return!1;const u=vf(s.res);return!(o.returnObjects===!1&&u)}extractFromKey(i,r){let o=r.nsSeparator!==void 0?r.nsSeparator:this.options.nsSeparator;o===void 0&&(o=":");const s=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let u=r.ns||this.options.defaultNS||[];const d=o&&i.indexOf(o)>-1,p=!this.options.userDefinedKeySeparator&&!r.keySeparator&&!this.options.userDefinedNsSeparator&&!r.nsSeparator&&!Kw(i,o,s);if(d&&!p){const h=i.match(this.interpolator.nestingRegexp);if(h&&h.length>0)return{key:i,namespaces:ve(u)?[u]:u};const m=i.split(o);(o!==s||o===s&&this.options.ns.indexOf(m[0])>-1)&&(u=m.shift()),i=m.join(s)}return{key:i,namespaces:ve(u)?[u]:u}}translate(i,r,o){let s=typeof r=="object"?{...r}:r;if(typeof s!="object"&&this.options.overloadTranslationOptionHandler&&(s=this.options.overloadTranslationOptionHandler(arguments)),typeof s=="object"&&(s={...s}),s||(s={}),i==null)return"";typeof i=="function"&&(i=cl(i,{...this.options,...s})),Array.isArray(i)||(i=[String(i)]),i=i.map(re=>typeof re=="function"?cl(re,{...this.options,...s}):String(re));const u=s.returnDetails!==void 0?s.returnDetails:this.options.returnDetails,d=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,{key:p,namespaces:h}=this.extractFromKey(i[i.length-1],s),m=h[h.length-1];let b=s.nsSeparator!==void 0?s.nsSeparator:this.options.nsSeparator;b===void 0&&(b=":");const v=s.lng||this.language,C=s.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(v?.toLowerCase()==="cimode")return C?u?{res:`${m}${b}${p}`,usedKey:p,exactUsedKey:p,usedLng:v,usedNS:m,usedParams:this.getUsedParamsDetails(s)}:`${m}${b}${p}`:u?{res:p,usedKey:p,exactUsedKey:p,usedLng:v,usedNS:m,usedParams:this.getUsedParamsDetails(s)}:p;const T=this.resolve(i,s);let _=T?.res;const w=T?.usedKey||p,E=T?.exactUsedKey||p,N=["[object Number]","[object Function]","[object RegExp]"],M=s.joinArrays!==void 0?s.joinArrays:this.options.joinArrays,D=!this.i18nFormat||this.i18nFormat.handleAsObject,H=s.count!==void 0&&!ve(s.count),G=ds.hasDefaultValue(s),W=H?this.pluralResolver.getSuffix(v,s.count,s):"",U=s.ordinal&&H?this.pluralResolver.getSuffix(v,s.count,{ordinal:!1}):"",Y=H&&!s.ordinal&&s.count===0,J=Y&&s[`defaultValue${this.options.pluralSeparator}zero`]||s[`defaultValue${W}`]||s[`defaultValue${U}`]||s.defaultValue;let te=_;D&&!_&&G&&(te=J);const ae=vf(te),ne=Object.prototype.toString.apply(te);if(D&&te&&ae&&N.indexOf(ne)<0&&!(ve(M)&&Array.isArray(te))){if(!s.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const re=this.options.returnedObjectHandler?this.options.returnedObjectHandler(w,te,{...s,ns:h}):`key '${p} (${this.language})' returned an object instead of string.`;return u?(T.res=re,T.usedParams=this.getUsedParamsDetails(s),T):re}if(d){const re=Array.isArray(te),ie=re?[]:{},ue=re?E:w;for(const L in te)if(Object.prototype.hasOwnProperty.call(te,L)){const K=`${ue}${d}${L}`;G&&!_?ie[L]=this.translate(K,{...s,defaultValue:vf(J)?J[L]:void 0,joinArrays:!1,ns:h}):ie[L]=this.translate(K,{...s,joinArrays:!1,ns:h}),ie[L]===K&&(ie[L]=te[L])}_=ie}}else if(D&&ve(M)&&Array.isArray(_))_=_.join(M),_&&(_=this.extendTranslation(_,i,s,o));else{let re=!1,ie=!1;!this.isValidLookup(_)&&G&&(re=!0,_=J),this.isValidLookup(_)||(ie=!0,_=p);const L=(s.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&ie?void 0:_,K=G&&J!==_&&this.options.updateMissing;if(ie||re||K){if(this.logger.log(K?"updateKey":"missingKey",v,m,p,K?J:_),d){const R=this.resolve(p,{...s,keySeparator:!1});R&&R.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let I=[];const Z=this.languageUtils.getFallbackCodes(this.options.fallbackLng,s.lng||this.language);if(this.options.saveMissingTo==="fallback"&&Z&&Z[0])for(let R=0;R<Z.length;R++)I.push(Z[R]);else this.options.saveMissingTo==="all"?I=this.languageUtils.toResolveHierarchy(s.lng||this.language):I.push(s.lng||this.language);const pe=(R,V,Q)=>{const ee=G&&Q!==_?Q:L;this.options.missingKeyHandler?this.options.missingKeyHandler(R,m,V,ee,K,s):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(R,m,V,ee,K,s),this.emit("missingKey",R,m,V,_)};this.options.saveMissing&&(this.options.saveMissingPlurals&&H?I.forEach(R=>{const V=this.pluralResolver.getSuffixes(R,s);Y&&s[`defaultValue${this.options.pluralSeparator}zero`]&&V.indexOf(`${this.options.pluralSeparator}zero`)<0&&V.push(`${this.options.pluralSeparator}zero`),V.forEach(Q=>{pe([R],p+Q,s[`defaultValue${Q}`]||J)})}):pe(I,p,J))}_=this.extendTranslation(_,i,s,T,o),ie&&_===p&&this.options.appendNamespaceToMissingKey&&(_=`${m}${b}${p}`),(ie||re)&&this.options.parseMissingKeyHandler&&(_=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${m}${b}${p}`:p,re?_:void 0,s))}return u?(T.res=_,T.usedParams=this.getUsedParamsDetails(s),T):_}extendTranslation(i,r,o,s,u){if(this.i18nFormat?.parse)i=this.i18nFormat.parse(i,{...this.options.interpolation.defaultVariables,...o},o.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!o.skipInterpolation){o.interpolation&&this.interpolator.init({...o,interpolation:{...this.options.interpolation,...o.interpolation}});const h=ve(i)&&(o?.interpolation?.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let m;if(h){const v=i.match(this.interpolator.nestingRegexp);m=v&&v.length}let b=o.replace&&!ve(o.replace)?o.replace:o;if(this.options.interpolation.defaultVariables&&(b={...this.options.interpolation.defaultVariables,...b}),i=this.interpolator.interpolate(i,b,o.lng||this.language||s.usedLng,o),h){const v=i.match(this.interpolator.nestingRegexp),C=v&&v.length;m<C&&(o.nest=!1)}!o.lng&&s&&s.res&&(o.lng=this.language||s.usedLng),o.nest!==!1&&(i=this.interpolator.nest(i,(...v)=>u?.[0]===v[0]&&!o.context?(this.logger.warn(`It seems you are nesting recursively key: ${v[0]} in key: ${r[0]}`),null):this.translate(...v,r),o)),o.interpolation&&this.interpolator.reset()}const d=o.postProcess||this.options.postProcess,p=ve(d)?[d]:d;return i!=null&&p?.length&&o.applyPostProcessor!==!1&&(i=Vy.handle(p,i,r,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(o)},...o}:o,this)),i}resolve(i,r={}){let o,s,u,d,p;return ve(i)&&(i=[i]),Array.isArray(i)&&(i=i.map(h=>typeof h=="function"?cl(h,{...this.options,...r}):h)),i.forEach(h=>{if(this.isValidLookup(o))return;const m=this.extractFromKey(h,r),b=m.key;s=b;let v=m.namespaces;this.options.fallbackNS&&(v=v.concat(this.options.fallbackNS));const C=r.count!==void 0&&!ve(r.count),T=C&&!r.ordinal&&r.count===0,_=r.context!==void 0&&(ve(r.context)||typeof r.context=="number")&&r.context!=="",w=r.lngs?r.lngs:this.languageUtils.toResolveHierarchy(r.lng||this.language,r.fallbackLng);v.forEach(E=>{this.isValidLookup(o)||(p=E,!xv[`${w[0]}-${E}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(p)&&(xv[`${w[0]}-${E}`]=!0,this.logger.warn(`key "${s}" for languages "${w.join(", ")}" won't get resolved as namespace "${p}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),w.forEach(N=>{if(this.isValidLookup(o))return;d=N;const M=[b];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(M,b,N,E,r);else{let H;C&&(H=this.pluralResolver.getSuffix(N,r.count,r));const G=`${this.options.pluralSeparator}zero`,W=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(C&&(r.ordinal&&H.indexOf(W)===0&&M.push(b+H.replace(W,this.options.pluralSeparator)),M.push(b+H),T&&M.push(b+G)),_){const U=`${b}${this.options.contextSeparator||"_"}${r.context}`;M.push(U),C&&(r.ordinal&&H.indexOf(W)===0&&M.push(U+H.replace(W,this.options.pluralSeparator)),M.push(U+H),T&&M.push(U+G))}}let D;for(;D=M.pop();)this.isValidLookup(o)||(u=D,o=this.getResource(N,E,D,r))}))})}),{res:o,usedKey:s,exactUsedKey:u,usedLng:d,usedNS:p}}isValidLookup(i){return i!==void 0&&!(!this.options.returnNull&&i===null)&&!(!this.options.returnEmptyString&&i==="")}getResource(i,r,o,s={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(i,r,o,s):this.resourceStore.getResource(i,r,o,s)}getUsedParamsDetails(i={}){const r=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],o=i.replace&&!ve(i.replace);let s=o?i.replace:i;if(o&&typeof i.count<"u"&&(s.count=i.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!o){s={...s};for(const u of r)delete s[u]}return s}static hasDefaultValue(i){const r="defaultValue";for(const o in i)if(Object.prototype.hasOwnProperty.call(i,o)&&r===o.substring(0,r.length)&&i[o]!==void 0)return!0;return!1}}class bv{constructor(i){this.options=i,this.supportedLngs=this.options.supportedLngs||!1,this.logger=pn.create("languageUtils")}getScriptPartFromCode(i){if(i=dl(i),!i||i.indexOf("-")<0)return null;const r=i.split("-");return r.length===2||(r.pop(),r[r.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(r.join("-"))}getLanguagePartFromCode(i){if(i=dl(i),!i||i.indexOf("-")<0)return i;const r=i.split("-");return this.formatLanguageCode(r[0])}formatLanguageCode(i){if(ve(i)&&i.indexOf("-")>-1){let r;try{r=Intl.getCanonicalLocales(i)[0]}catch{}return r&&this.options.lowerCaseLng&&(r=r.toLowerCase()),r||(this.options.lowerCaseLng?i.toLowerCase():i)}return this.options.cleanCode||this.options.lowerCaseLng?i.toLowerCase():i}isSupportedCode(i){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(i=this.getLanguagePartFromCode(i)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(i)>-1}getBestMatchFromCodes(i){if(!i)return null;let r;return i.forEach(o=>{if(r)return;const s=this.formatLanguageCode(o);(!this.options.supportedLngs||this.isSupportedCode(s))&&(r=s)}),!r&&this.options.supportedLngs&&i.forEach(o=>{if(r)return;const s=this.getScriptPartFromCode(o);if(this.isSupportedCode(s))return r=s;const u=this.getLanguagePartFromCode(o);if(this.isSupportedCode(u))return r=u;r=this.options.supportedLngs.find(d=>{if(d===u)return d;if(!(d.indexOf("-")<0&&u.indexOf("-")<0)&&(d.indexOf("-")>0&&u.indexOf("-")<0&&d.substring(0,d.indexOf("-"))===u||d.indexOf(u)===0&&u.length>1))return d})}),r||(r=this.getFallbackCodes(this.options.fallbackLng)[0]),r}getFallbackCodes(i,r){if(!i)return[];if(typeof i=="function"&&(i=i(r)),ve(i)&&(i=[i]),Array.isArray(i))return i;if(!r)return i.default||[];let o=i[r];return o||(o=i[this.getScriptPartFromCode(r)]),o||(o=i[this.formatLanguageCode(r)]),o||(o=i[this.getLanguagePartFromCode(r)]),o||(o=i.default),o||[]}toResolveHierarchy(i,r){const o=this.getFallbackCodes((r===!1?[]:r)||this.options.fallbackLng||[],i),s=[],u=d=>{d&&(this.isSupportedCode(d)?s.push(d):this.logger.warn(`rejecting language code not found in supportedLngs: ${d}`))};return ve(i)&&(i.indexOf("-")>-1||i.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&u(this.formatLanguageCode(i)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&u(this.getScriptPartFromCode(i)),this.options.load!=="currentOnly"&&u(this.getLanguagePartFromCode(i))):ve(i)&&u(this.formatLanguageCode(i)),o.forEach(d=>{s.indexOf(d)<0&&u(this.formatLanguageCode(d))}),s}}const Sv={zero:0,one:1,two:2,few:3,many:4,other:5},Cv={select:n=>n===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class qw{constructor(i,r={}){this.languageUtils=i,this.options=r,this.logger=pn.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(i,r={}){const o=dl(i==="dev"?"en":i),s=r.ordinal?"ordinal":"cardinal",u=JSON.stringify({cleanedCode:o,type:s});if(u in this.pluralRulesCache)return this.pluralRulesCache[u];let d;try{d=new Intl.PluralRules(o,{type:s})}catch{if(typeof Intl>"u")return this.logger.error("No Intl support, please use an Intl polyfill!"),Cv;if(!i.match(/-|_/))return Cv;const h=this.languageUtils.getLanguagePartFromCode(i);d=this.getRule(h,r)}return this.pluralRulesCache[u]=d,d}needsPlural(i,r={}){let o=this.getRule(i,r);return o||(o=this.getRule("dev",r)),o?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(i,r,o={}){return this.getSuffixes(i,o).map(s=>`${r}${s}`)}getSuffixes(i,r={}){let o=this.getRule(i,r);return o||(o=this.getRule("dev",r)),o?o.resolvedOptions().pluralCategories.sort((s,u)=>Sv[s]-Sv[u]).map(s=>`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${s}`):[]}getSuffix(i,r,o={}){const s=this.getRule(i,o);return s?`${this.options.prepend}${o.ordinal?`ordinal${this.options.prepend}`:""}${s.select(r)}`:(this.logger.warn(`no plural rule found for: ${i}`),this.getSuffix("dev",r,o))}}const wv=(n,i,r,o=".",s=!0)=>{let u=Hw(n,i,r);return!u&&s&&ve(r)&&(u=If(n,r,o),u===void 0&&(u=If(i,r,o))),u},yf=n=>n.replace(/\$/g,"$$$$");class Tv{constructor(i={}){this.logger=pn.create("interpolator"),this.options=i,this.format=i?.interpolation?.format||(r=>r),this.init(i)}init(i={}){i.interpolation||(i.interpolation={escapeValue:!0});const{escape:r,escapeValue:o,useRawValueToEscape:s,prefix:u,prefixEscaped:d,suffix:p,suffixEscaped:h,formatSeparator:m,unescapeSuffix:b,unescapePrefix:v,nestingPrefix:C,nestingPrefixEscaped:T,nestingSuffix:_,nestingSuffixEscaped:w,nestingOptionsSeparator:E,maxReplaces:N,alwaysFormat:M}=i.interpolation;this.escape=r!==void 0?r:Bw,this.escapeValue=o!==void 0?o:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=u?Ka(u):d||"{{",this.suffix=p?Ka(p):h||"}}",this.formatSeparator=m||",",this.unescapePrefix=b?"":v||"-",this.unescapeSuffix=this.unescapePrefix?"":b||"",this.nestingPrefix=C?Ka(C):T||Ka("$t("),this.nestingSuffix=_?Ka(_):w||Ka(")"),this.nestingOptionsSeparator=E||",",this.maxReplaces=N||1e3,this.alwaysFormat=M!==void 0?M:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const i=(r,o)=>r?.source===o?(r.lastIndex=0,r):new RegExp(o,"g");this.regexp=i(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=i(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=i(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(i,r,o,s){let u,d,p;const h=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},m=T=>{if(T.indexOf(this.formatSeparator)<0){const N=wv(r,h,T,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(N,void 0,o,{...s,...r,interpolationkey:T}):N}const _=T.split(this.formatSeparator),w=_.shift().trim(),E=_.join(this.formatSeparator).trim();return this.format(wv(r,h,w,this.options.keySeparator,this.options.ignoreJSONStructure),E,o,{...s,...r,interpolationkey:w})};this.resetRegExp();const b=s?.missingInterpolationHandler||this.options.missingInterpolationHandler,v=s?.interpolation?.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:T=>yf(T)},{regex:this.regexp,safeValue:T=>this.escapeValue?yf(this.escape(T)):yf(T)}].forEach(T=>{for(p=0;u=T.regex.exec(i);){const _=u[1].trim();if(d=m(_),d===void 0)if(typeof b=="function"){const E=b(i,u,s);d=ve(E)?E:""}else if(s&&Object.prototype.hasOwnProperty.call(s,_))d="";else if(v){d=u[0];continue}else this.logger.warn(`missed to pass in variable ${_} for interpolating ${i}`),d="";else!ve(d)&&!this.useRawValueToEscape&&(d=hv(d));const w=T.safeValue(d);if(i=i.replace(u[0],w),v?(T.regex.lastIndex+=d.length,T.regex.lastIndex-=u[0].length):T.regex.lastIndex=0,p++,p>=this.maxReplaces)break}}),i}nest(i,r,o={}){let s,u,d;const p=(h,m)=>{const b=this.nestingOptionsSeparator;if(h.indexOf(b)<0)return h;const v=h.split(new RegExp(`${Ka(b)}[ ]*{`));let C=`{${v[1]}`;h=v[0],C=this.interpolate(C,d);const T=C.match(/'/g),_=C.match(/"/g);((T?.length??0)%2===0&&!_||(_?.length??0)%2!==0)&&(C=C.replace(/'/g,'"'));try{d=JSON.parse(C),m&&(d={...m,...d})}catch(w){return this.logger.warn(`failed parsing options string in nesting for key ${h}`,w),`${h}${b}${C}`}return d.defaultValue&&d.defaultValue.indexOf(this.prefix)>-1&&delete d.defaultValue,h};for(;s=this.nestingRegexp.exec(i);){let h=[];d={...o},d=d.replace&&!ve(d.replace)?d.replace:d,d.applyPostProcessor=!1,delete d.defaultValue;const m=/{.*}/.test(s[1])?s[1].lastIndexOf("}")+1:s[1].indexOf(this.formatSeparator);if(m!==-1&&(h=s[1].slice(m).split(this.formatSeparator).map(b=>b.trim()).filter(Boolean),s[1]=s[1].slice(0,m)),u=r(p.call(this,s[1].trim(),d),d),u&&s[0]===i&&!ve(u))return u;ve(u)||(u=hv(u)),u||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${i}`),u=""),h.length&&(u=h.reduce((b,v)=>this.format(b,v,o.lng,{...o,interpolationkey:s[1].trim()}),u.trim())),i=i.replace(s[0],u),this.regexp.lastIndex=0}return i}}const Xw=n=>{let i=n.toLowerCase().trim();const r={};if(n.indexOf("(")>-1){const o=n.split("(");i=o[0].toLowerCase().trim();const s=o[1].substring(0,o[1].length-1);i==="currency"&&s.indexOf(":")<0?r.currency||(r.currency=s.trim()):i==="relativetime"&&s.indexOf(":")<0?r.range||(r.range=s.trim()):s.split(";").forEach(d=>{if(d){const[p,...h]=d.split(":"),m=h.join(":").trim().replace(/^'+|'+$/g,""),b=p.trim();r[b]||(r[b]=m),m==="false"&&(r[b]=!1),m==="true"&&(r[b]=!0),isNaN(m)||(r[b]=parseInt(m,10))}})}return{formatName:i,formatOptions:r}},_v=n=>{const i={};return(r,o,s)=>{let u=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(u={...u,[s.interpolationkey]:void 0});const d=o+JSON.stringify(u);let p=i[d];return p||(p=n(dl(o),s),i[d]=p),p(r)}},Qw=n=>(i,r,o)=>n(dl(r),o)(i);class Zw{constructor(i={}){this.logger=pn.create("formatter"),this.options=i,this.init(i)}init(i,r={interpolation:{}}){this.formatSeparator=r.interpolation.formatSeparator||",";const o=r.cacheInBuiltFormats?_v:Qw;this.formats={number:o((s,u)=>{const d=new Intl.NumberFormat(s,{...u});return p=>d.format(p)}),currency:o((s,u)=>{const d=new Intl.NumberFormat(s,{...u,style:"currency"});return p=>d.format(p)}),datetime:o((s,u)=>{const d=new Intl.DateTimeFormat(s,{...u});return p=>d.format(p)}),relativetime:o((s,u)=>{const d=new Intl.RelativeTimeFormat(s,{...u});return p=>d.format(p,u.range||"day")}),list:o((s,u)=>{const d=new Intl.ListFormat(s,{...u});return p=>d.format(p)})}}add(i,r){this.formats[i.toLowerCase().trim()]=r}addCached(i,r){this.formats[i.toLowerCase().trim()]=_v(r)}format(i,r,o,s={}){const u=r.split(this.formatSeparator);if(u.length>1&&u[0].indexOf("(")>1&&u[0].indexOf(")")<0&&u.find(p=>p.indexOf(")")>-1)){const p=u.findIndex(h=>h.indexOf(")")>-1);u[0]=[u[0],...u.splice(1,p)].join(this.formatSeparator)}return u.reduce((p,h)=>{const{formatName:m,formatOptions:b}=Xw(h);if(this.formats[m]){let v=p;try{const C=s?.formatParams?.[s.interpolationkey]||{},T=C.locale||C.lng||s.locale||s.lng||o;v=this.formats[m](p,T,{...b,...s,...C})}catch(C){this.logger.warn(C)}return v}else this.logger.warn(`there was no format function for ${m}`);return p},i)}}const Ww=(n,i)=>{n.pending[i]!==void 0&&(delete n.pending[i],n.pendingCount--)};class Jw extends Es{constructor(i,r,o,s={}){super(),this.backend=i,this.store=r,this.services=o,this.languageUtils=o.languageUtils,this.options=s,this.logger=pn.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(o,s.backend,s)}queueLoad(i,r,o,s){const u={},d={},p={},h={};return i.forEach(m=>{let b=!0;r.forEach(v=>{const C=`${m}|${v}`;!o.reload&&this.store.hasResourceBundle(m,v)?this.state[C]=2:this.state[C]<0||(this.state[C]===1?d[C]===void 0&&(d[C]=!0):(this.state[C]=1,b=!1,d[C]===void 0&&(d[C]=!0),u[C]===void 0&&(u[C]=!0),h[v]===void 0&&(h[v]=!0)))}),b||(p[m]=!0)}),(Object.keys(u).length||Object.keys(d).length)&&this.queue.push({pending:d,pendingCount:Object.keys(d).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(u),pending:Object.keys(d),toLoadLanguages:Object.keys(p),toLoadNamespaces:Object.keys(h)}}loaded(i,r,o){const s=i.split("|"),u=s[0],d=s[1];r&&this.emit("failedLoading",u,d,r),!r&&o&&this.store.addResourceBundle(u,d,o,void 0,void 0,{skipCopy:!0}),this.state[i]=r?-1:2,r&&o&&(this.state[i]=0);const p={};this.queue.forEach(h=>{Pw(h.loaded,[u],d),Ww(h,i),r&&h.errors.push(r),h.pendingCount===0&&!h.done&&(Object.keys(h.loaded).forEach(m=>{p[m]||(p[m]={});const b=h.loaded[m];b.length&&b.forEach(v=>{p[m][v]===void 0&&(p[m][v]=!0)})}),h.done=!0,h.errors.length?h.callback(h.errors):h.callback())}),this.emit("loaded",p),this.queue=this.queue.filter(h=>!h.done)}read(i,r,o,s=0,u=this.retryTimeout,d){if(!i.length)return d(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:i,ns:r,fcName:o,tried:s,wait:u,callback:d});return}this.readingCalls++;const p=(m,b)=>{if(this.readingCalls--,this.waitingReads.length>0){const v=this.waitingReads.shift();this.read(v.lng,v.ns,v.fcName,v.tried,v.wait,v.callback)}if(m&&b&&s<this.maxRetries){setTimeout(()=>{this.read.call(this,i,r,o,s+1,u*2,d)},u);return}d(m,b)},h=this.backend[o].bind(this.backend);if(h.length===2){try{const m=h(i,r);m&&typeof m.then=="function"?m.then(b=>p(null,b)).catch(p):p(null,m)}catch(m){p(m)}return}return h(i,r,p)}prepareLoading(i,r,o={},s){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();ve(i)&&(i=this.languageUtils.toResolveHierarchy(i)),ve(r)&&(r=[r]);const u=this.queueLoad(i,r,o,s);if(!u.toLoad.length)return u.pending.length||s(),null;u.toLoad.forEach(d=>{this.loadOne(d)})}load(i,r,o){this.prepareLoading(i,r,{},o)}reload(i,r,o){this.prepareLoading(i,r,{reload:!0},o)}loadOne(i,r=""){const o=i.split("|"),s=o[0],u=o[1];this.read(s,u,"read",void 0,void 0,(d,p)=>{d&&this.logger.warn(`${r}loading namespace ${u} for language ${s} failed`,d),!d&&p&&this.logger.log(`${r}loaded namespace ${u} for language ${s}`,p),this.loaded(i,d,p)})}saveMissing(i,r,o,s,u,d={},p=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(r)){this.logger.warn(`did not save key "${o}" as the namespace "${r}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(o==null||o==="")){if(this.backend?.create){const h={...d,isUpdate:u},m=this.backend.create.bind(this.backend);if(m.length<6)try{let b;m.length===5?b=m(i,r,o,s,h):b=m(i,r,o,s),b&&typeof b.then=="function"?b.then(v=>p(null,v)).catch(p):p(null,b)}catch(b){p(b)}else m(i,r,o,s,p,h)}!i||!i[0]||this.store.addResource(i[0],r,o,s)}}}const xf=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:n=>{let i={};if(typeof n[1]=="object"&&(i=n[1]),ve(n[1])&&(i.defaultValue=n[1]),ve(n[2])&&(i.tDescription=n[2]),typeof n[2]=="object"||typeof n[3]=="object"){const r=n[3]||n[2];Object.keys(r).forEach(o=>{i[o]=r[o]})}return i},interpolation:{escapeValue:!0,format:n=>n,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Ev=n=>(ve(n.ns)&&(n.ns=[n.ns]),ve(n.fallbackLng)&&(n.fallbackLng=[n.fallbackLng]),ve(n.fallbackNS)&&(n.fallbackNS=[n.fallbackNS]),n.supportedLngs?.indexOf?.("cimode")<0&&(n.supportedLngs=n.supportedLngs.concat(["cimode"])),typeof n.initImmediate=="boolean"&&(n.initAsync=n.initImmediate),n),Xo=()=>{},eT=n=>{Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach(r=>{typeof n[r]=="function"&&(n[r]=n[r].bind(n))})},Ky="__i18next_supportNoticeShown",tT=()=>typeof globalThis<"u"&&!!globalThis[Ky],nT=()=>{typeof globalThis<"u"&&(globalThis[Ky]=!0)},aT=n=>!!(n?.modules?.backend?.name?.indexOf("Locize")>0||n?.modules?.backend?.constructor?.name?.indexOf("Locize")>0||n?.options?.backend?.backends&&n.options.backend.backends.some(i=>i?.name?.indexOf("Locize")>0||i?.constructor?.name?.indexOf("Locize")>0)||n?.options?.backend?.projectId||n?.options?.backend?.backendOptions&&n.options.backend.backendOptions.some(i=>i?.projectId));class ul extends Es{constructor(i={},r){if(super(),this.options=Ev(i),this.services={},this.logger=pn,this.modules={external:[]},eT(this),r&&!this.isInitialized&&!i.isClone){if(!this.options.initAsync)return this.init(i,r),this;setTimeout(()=>{this.init(i,r)},0)}}init(i={},r){this.isInitializing=!0,typeof i=="function"&&(r=i,i={}),i.defaultNS==null&&i.ns&&(ve(i.ns)?i.defaultNS=i.ns:i.ns.indexOf("translation")<0&&(i.defaultNS=i.ns[0]));const o=xf();this.options={...o,...this.options,...Ev(i)},this.options.interpolation={...o.interpolation,...this.options.interpolation},i.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=i.keySeparator),i.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=i.nsSeparator),typeof this.options.overloadTranslationOptionHandler!="function"&&(this.options.overloadTranslationOptionHandler=o.overloadTranslationOptionHandler),this.options.showSupportNotice!==!1&&!aT(this)&&!tT()&&(typeof console<"u"&&typeof console.info<"u"&&console.info("🌐 i18next is made possible by our own product, Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙"),nT());const s=m=>m?typeof m=="function"?new m:m:null;if(!this.options.isClone){this.modules.logger?pn.init(s(this.modules.logger),this.options):pn.init(null,this.options);let m;this.modules.formatter?m=this.modules.formatter:m=Zw;const b=new bv(this.options);this.store=new yv(this.options.resources,this.options);const v=this.services;v.logger=pn,v.resourceStore=this.store,v.languageUtils=b,v.pluralResolver=new qw(b,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),this.options.interpolation.format&&this.options.interpolation.format!==o.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),m&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(v.formatter=s(m),v.formatter.init&&v.formatter.init(v,this.options),this.options.interpolation.format=v.formatter.format.bind(v.formatter)),v.interpolator=new Tv(this.options),v.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},v.backendConnector=new Jw(s(this.modules.backend),v.resourceStore,v,this.options),v.backendConnector.on("*",(T,..._)=>{this.emit(T,..._)}),this.modules.languageDetector&&(v.languageDetector=s(this.modules.languageDetector),v.languageDetector.init&&v.languageDetector.init(v,this.options.detection,this.options)),this.modules.i18nFormat&&(v.i18nFormat=s(this.modules.i18nFormat),v.i18nFormat.init&&v.i18nFormat.init(this)),this.translator=new ds(this.services,this.options),this.translator.on("*",(T,..._)=>{this.emit(T,..._)}),this.modules.external.forEach(T=>{T.init&&T.init(this)})}if(this.format=this.options.interpolation.format,r||(r=Xo),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const m=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);m.length>0&&m[0]!=="dev"&&(this.options.lng=m[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(m=>{this[m]=(...b)=>this.store[m](...b)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(m=>{this[m]=(...b)=>(this.store[m](...b),this)});const p=al(),h=()=>{const m=(b,v)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),p.resolve(v),r(b,v)};if(this.languages&&!this.isInitialized)return m(null,this.t.bind(this));this.changeLanguage(this.options.lng,m)};return this.options.resources||!this.options.initAsync?h():setTimeout(h,0),p}loadResources(i,r=Xo){let o=r;const s=ve(i)?i:this.language;if(typeof i=="function"&&(o=i),!this.options.resources||this.options.partialBundledLanguages){if(s?.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return o();const u=[],d=p=>{if(!p||p==="cimode")return;this.services.languageUtils.toResolveHierarchy(p).forEach(m=>{m!=="cimode"&&u.indexOf(m)<0&&u.push(m)})};s?d(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(h=>d(h)),this.options.preload?.forEach?.(p=>d(p)),this.services.backendConnector.load(u,this.options.ns,p=>{!p&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),o(p)})}else o(null)}reloadResources(i,r,o){const s=al();return typeof i=="function"&&(o=i,i=void 0),typeof r=="function"&&(o=r,r=void 0),i||(i=this.languages),r||(r=this.options.ns),o||(o=Xo),this.services.backendConnector.reload(i,r,u=>{s.resolve(),o(u)}),s}use(i){if(!i)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!i.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return i.type==="backend"&&(this.modules.backend=i),(i.type==="logger"||i.log&&i.warn&&i.error)&&(this.modules.logger=i),i.type==="languageDetector"&&(this.modules.languageDetector=i),i.type==="i18nFormat"&&(this.modules.i18nFormat=i),i.type==="postProcessor"&&Vy.addPostProcessor(i),i.type==="formatter"&&(this.modules.formatter=i),i.type==="3rdParty"&&this.modules.external.push(i),this}setResolvedLanguage(i){if(!(!i||!this.languages)&&!(["cimode","dev"].indexOf(i)>-1)){for(let r=0;r<this.languages.length;r++){const o=this.languages[r];if(!(["cimode","dev"].indexOf(o)>-1)&&this.store.hasLanguageSomeTranslations(o)){this.resolvedLanguage=o;break}}!this.resolvedLanguage&&this.languages.indexOf(i)<0&&this.store.hasLanguageSomeTranslations(i)&&(this.resolvedLanguage=i,this.languages.unshift(i))}}changeLanguage(i,r){this.isLanguageChangingTo=i;const o=al();this.emit("languageChanging",i);const s=p=>{this.language=p,this.languages=this.services.languageUtils.toResolveHierarchy(p),this.resolvedLanguage=void 0,this.setResolvedLanguage(p)},u=(p,h)=>{h?this.isLanguageChangingTo===i&&(s(h),this.translator.changeLanguage(h),this.isLanguageChangingTo=void 0,this.emit("languageChanged",h),this.logger.log("languageChanged",h)):this.isLanguageChangingTo=void 0,o.resolve((...m)=>this.t(...m)),r&&r(p,(...m)=>this.t(...m))},d=p=>{!i&&!p&&this.services.languageDetector&&(p=[]);const h=ve(p)?p:p&&p[0],m=this.store.hasLanguageSomeTranslations(h)?h:this.services.languageUtils.getBestMatchFromCodes(ve(p)?[p]:p);m&&(this.language||s(m),this.translator.language||this.translator.changeLanguage(m),this.services.languageDetector?.cacheUserLanguage?.(m)),this.loadResources(m,b=>{u(b,m)})};return!i&&this.services.languageDetector&&!this.services.languageDetector.async?d(this.services.languageDetector.detect()):!i&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(d):this.services.languageDetector.detect(d):d(i),o}getFixedT(i,r,o){const s=(u,d,...p)=>{let h;typeof d!="object"?h=this.options.overloadTranslationOptionHandler([u,d].concat(p)):h={...d},h.lng=h.lng||s.lng,h.lngs=h.lngs||s.lngs,h.ns=h.ns||s.ns,h.keyPrefix!==""&&(h.keyPrefix=h.keyPrefix||o||s.keyPrefix);const m=this.options.keySeparator||".";let b;return h.keyPrefix&&Array.isArray(u)?b=u.map(v=>(typeof v=="function"&&(v=cl(v,{...this.options,...d})),`${h.keyPrefix}${m}${v}`)):(typeof u=="function"&&(u=cl(u,{...this.options,...d})),b=h.keyPrefix?`${h.keyPrefix}${m}${u}`:u),this.t(b,h)};return ve(i)?s.lng=i:s.lngs=i,s.ns=r,s.keyPrefix=o,s}t(...i){return this.translator?.translate(...i)}exists(...i){return this.translator?.exists(...i)}setDefaultNamespace(i){this.options.defaultNS=i}hasLoadedNamespace(i,r={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const o=r.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,u=this.languages[this.languages.length-1];if(o.toLowerCase()==="cimode")return!0;const d=(p,h)=>{const m=this.services.backendConnector.state[`${p}|${h}`];return m===-1||m===0||m===2};if(r.precheck){const p=r.precheck(this,d);if(p!==void 0)return p}return!!(this.hasResourceBundle(o,i)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||d(o,i)&&(!s||d(u,i)))}loadNamespaces(i,r){const o=al();return this.options.ns?(ve(i)&&(i=[i]),i.forEach(s=>{this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}),this.loadResources(s=>{o.resolve(),r&&r(s)}),o):(r&&r(),Promise.resolve())}loadLanguages(i,r){const o=al();ve(i)&&(i=[i]);const s=this.options.preload||[],u=i.filter(d=>s.indexOf(d)<0&&this.services.languageUtils.isSupportedCode(d));return u.length?(this.options.preload=s.concat(u),this.loadResources(d=>{o.resolve(),r&&r(d)}),o):(r&&r(),Promise.resolve())}dir(i){if(i||(i=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!i)return"rtl";try{const s=new Intl.Locale(i);if(s&&s.getTextInfo){const u=s.getTextInfo();if(u&&u.direction)return u.direction}}catch{}const r=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],o=this.services?.languageUtils||new bv(xf());return i.toLowerCase().indexOf("-latn")>1?"ltr":r.indexOf(o.getLanguagePartFromCode(i))>-1||i.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(i={},r){const o=new ul(i,r);return o.createInstance=ul.createInstance,o}cloneInstance(i={},r=Xo){const o=i.forkResourceStore;o&&delete i.forkResourceStore;const s={...this.options,...i,isClone:!0},u=new ul(s);if((i.debug!==void 0||i.prefix!==void 0)&&(u.logger=u.logger.clone(i)),["store","services","language"].forEach(p=>{u[p]=this[p]}),u.services={...this.services},u.services.utils={hasLoadedNamespace:u.hasLoadedNamespace.bind(u)},o){const p=Object.keys(this.store.data).reduce((h,m)=>(h[m]={...this.store.data[m]},h[m]=Object.keys(h[m]).reduce((b,v)=>(b[v]={...h[m][v]},b),h[m]),h),{});u.store=new yv(p,s),u.services.resourceStore=u.store}if(i.interpolation){const h={...xf().interpolation,...this.options.interpolation,...i.interpolation},m={...s,interpolation:h};u.services.interpolator=new Tv(m)}return u.translator=new ds(u.services,s),u.translator.on("*",(p,...h)=>{u.emit(p,...h)}),u.init(s,r),u.translator.options=s,u.translator.backendConnector.services.utils={hasLoadedNamespace:u.hasLoadedNamespace.bind(u)},u}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const gt=ul.createInstance();gt.createInstance;gt.dir;gt.init;gt.loadResources;gt.reloadResources;gt.use;gt.changeLanguage;gt.getFixedT;gt.t;gt.exists;gt.setDefaultNamespace;gt.hasLoadedNamespace;gt.loadNamespaces;gt.loadLanguages;const iT=(n,i,r,o)=>{const s=[r,{code:i,...o||{}}];if(n?.services?.logger?.forward)return n.services.logger.forward(s,"warn","react-i18next::",!0);qa(s[0])&&(s[0]=`react-i18next:: ${s[0]}`),n?.services?.logger?.warn?n.services.logger.warn(...s):console?.warn&&console.warn(...s)},Rv={},Yy=(n,i,r,o)=>{qa(r)&&Rv[r]||(qa(r)&&(Rv[r]=new Date),iT(n,i,r,o))},$y=(n,i)=>()=>{if(n.isInitialized)i();else{const r=()=>{setTimeout(()=>{n.off("initialized",r)},0),i()};n.on("initialized",r)}},Pf=(n,i,r)=>{n.loadNamespaces(i,$y(n,r))},Av=(n,i,r,o)=>{if(qa(r)&&(r=[r]),n.options.preload&&n.options.preload.indexOf(i)>-1)return Pf(n,r,o);r.forEach(s=>{n.options.ns.indexOf(s)<0&&n.options.ns.push(s)}),n.loadLanguages(i,$y(n,o))},rT=(n,i,r={})=>!i.languages||!i.languages.length?(Yy(i,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:i.languages}),!0):i.hasLoadedNamespace(n,{lng:r.lng,precheck:(o,s)=>{if(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!s(o.isLanguageChangingTo,n))return!1}}),qa=n=>typeof n=="string",lT=n=>typeof n=="object"&&n!==null,oT=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,sT={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},cT=n=>sT[n],uT=n=>n.replace(oT,cT);let Hf={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:uT,transDefaultProps:void 0};const fT=(n={})=>{Hf={...Hf,...n}},dT=()=>Hf;let qy;const pT=n=>{qy=n},hT=()=>qy,mT={type:"3rdParty",init(n){fT(n.options.react),pT(n)}},Xy=g.createContext();class gT{constructor(){this.usedNamespaces={}}addUsedNamespaces(i){i.forEach(r=>{this.usedNamespaces[r]||(this.usedNamespaces[r]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}var bf={exports:{}},Sf={};var Nv;function vT(){if(Nv)return Sf;Nv=1;var n=Cs();function i(v,C){return v===C&&(v!==0||1/v===1/C)||v!==v&&C!==C}var r=typeof Object.is=="function"?Object.is:i,o=n.useState,s=n.useEffect,u=n.useLayoutEffect,d=n.useDebugValue;function p(v,C){var T=C(),_=o({inst:{value:T,getSnapshot:C}}),w=_[0].inst,E=_[1];return u(function(){w.value=T,w.getSnapshot=C,h(w)&&E({inst:w})},[v,T,C]),s(function(){return h(w)&&E({inst:w}),v(function(){h(w)&&E({inst:w})})},[v]),d(T),T}function h(v){var C=v.getSnapshot;v=v.value;try{var T=C();return!r(v,T)}catch{return!0}}function m(v,C){return C()}var b=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?m:p;return Sf.useSyncExternalStore=n.useSyncExternalStore!==void 0?n.useSyncExternalStore:b,Sf}var Ov;function yT(){return Ov||(Ov=1,bf.exports=vT()),bf.exports}var xT=yT();const bT=(n,i)=>{if(qa(i))return i;if(lT(i)&&qa(i.defaultValue))return i.defaultValue;if(typeof n=="function")return"";if(Array.isArray(n)){const r=n[n.length-1];return typeof r=="function"?"":r}return n},ST={t:bT,ready:!1},CT=()=>()=>{},er=(n,i={})=>{const{i18n:r}=i,{i18n:o,defaultNS:s}=g.useContext(Xy)||{},u=r||o||hT();u&&!u.reportNamespaces&&(u.reportNamespaces=new gT),u||Yy(u,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const d=g.useMemo(()=>({...dT(),...u?.options?.react,...i}),[u,i]),{useSuspense:p,keyPrefix:h}=d,m=s||u?.options?.defaultNS,b=qa(m)?[m]:m||["translation"],v=g.useMemo(()=>b,b);u?.reportNamespaces?.addUsedNamespaces?.(v);const C=g.useRef(0),T=g.useCallback(J=>{if(!u)return CT;const{bindI18n:te,bindI18nStore:ae}=d,ne=()=>{C.current+=1,J()};return te&&u.on(te,ne),ae&&u.store.on(ae,ne),()=>{te&&te.split(" ").forEach(re=>u.off(re,ne)),ae&&ae.split(" ").forEach(re=>u.store.off(re,ne))}},[u,d]),_=g.useRef(),w=g.useCallback(()=>{if(!u)return ST;const J=!!(u.isInitialized||u.initializedStoreOnce)&&v.every(ue=>rT(ue,u,d)),te=i.lng||u.language,ae=C.current,ne=_.current;if(ne&&ne.ready===J&&ne.lng===te&&ne.keyPrefix===h&&ne.revision===ae)return ne;const ie={t:u.getFixedT(te,d.nsMode==="fallback"?v:v[0],h),ready:J,lng:te,keyPrefix:h,revision:ae};return _.current=ie,ie},[u,v,h,d,i.lng]),[E,N]=g.useState(0),{t:M,ready:D}=xT.useSyncExternalStore(T,w,w);g.useEffect(()=>{if(u&&!D&&!p){const J=()=>N(te=>te+1);i.lng?Av(u,i.lng,v,J):Pf(u,v,J)}},[u,i.lng,v,D,p,E]);const H=u||{},G=g.useRef(null),W=g.useRef(),U=J=>{const te=Object.getOwnPropertyDescriptors(J);te.__original&&delete te.__original;const ae=Object.create(Object.getPrototypeOf(J),te);if(!Object.prototype.hasOwnProperty.call(ae,"__original"))try{Object.defineProperty(ae,"__original",{value:J,writable:!1,enumerable:!1,configurable:!1})}catch{}return ae},Y=g.useMemo(()=>{const J=H,te=J?.language;let ae=J;J&&(G.current&&G.current.__original===J?W.current!==te?(ae=U(J),G.current=ae,W.current=te):ae=G.current:(ae=U(J),G.current=ae,W.current=te));const ne=[M,ae,D];return ne.t=M,ne.i18n=ae,ne.ready=D,ne},[M,H,D,H.resolvedLanguage,H.language,H.languages]);if(u&&p&&!D)throw new Promise(J=>{const te=()=>J();i.lng?Av(u,i.lng,v,te):Pf(u,v,te)});return Y};function wT({i18n:n,defaultNS:i,children:r}){const o=g.useMemo(()=>({i18n:n,defaultNS:i}),[n,i]);return g.createElement(Xy.Provider,{value:o},r)}const TT={zh:{translation:{nav:{home:"首页",notes:"笔记",about:"关于"},home:{title:"技术笔记",subtitle:"记录学习，分享知识",description:"这里是我整理的技术笔记，涵盖前端、后端、AI、DevOps 等多个领域。",viewAll:"查看全部笔记",latestNotes:"最新笔记",categories:"分类浏览"},notes:{title:"全部笔记",search:"搜索笔记...",filterByCategory:"按分类筛选",allCategories:"全部分类",readMore:"阅读更多",noNotes:"暂无笔记",publishedOn:"发布于",updatedOn:"更新于",viewMode:"视图",cardView:"卡片视图",listView:"列表视图",sortBy:"排序",newest:"最新发布",oldest:"最早发布",sortTitle:"标题",recentlyUpdated:"最近更新"},note:{backToList:"返回列表",tags:"标签",relatedNotes:"相关笔记"},categories:{title:"分类",viewNotes:"查看笔记",noteCount:"{{count}} 篇笔记"},footer:{copyright:"© 2024 技术笔记. All rights reserved.",poweredBy:"Powered by React + Vite"},language:{zh:"中文",en:"English",switch:"切换语言"}}},en:{translation:{nav:{home:"Home",notes:"Notes",about:"About"},home:{title:"Tech Notes",subtitle:"Learn, Record, Share",description:"Here are my organized technical notes covering frontend, backend, AI, DevOps and more.",viewAll:"View All Notes",latestNotes:"Latest Notes",categories:"Browse by Category"},notes:{title:"All Notes",search:"Search notes...",filterByCategory:"Filter by Category",allCategories:"All Categories",readMore:"Read More",noNotes:"No notes yet",publishedOn:"Published on",updatedOn:"Updated on",viewMode:"View",cardView:"Card View",listView:"List View",sortBy:"Sort by",newest:"Newest First",oldest:"Oldest First",sortTitle:"Title",recentlyUpdated:"Recently Updated"},note:{backToList:"Back to List",tags:"Tags",relatedNotes:"Related Notes"},categories:{title:"Categories",viewNotes:"View Notes",noteCount:"{{count}} notes"},footer:{copyright:"© 2024 Tech Notes. All rights reserved.",poweredBy:"Powered by React + Vite"},language:{zh:"中文",en:"English",switch:"Switch Language"}}}};gt.use(mT).init({resources:TT,lng:"zh",fallbackLng:"zh",interpolation:{escapeValue:!1}});function Mv(n,i){if(typeof n=="function")return n(i);n!=null&&(n.current=i)}function Sa(...n){return i=>{let r=!1;const o=n.map(s=>{const u=Mv(s,i);return!r&&typeof u=="function"&&(r=!0),u});if(r)return()=>{for(let s=0;s<o.length;s++){const u=o[s];typeof u=="function"?u():Mv(n[s],null)}}}}function Fe(...n){return g.useCallback(Sa(...n),n)}var _T=Symbol.for("react.lazy"),ps=id[" use ".trim().toString()];function ET(n){return typeof n=="object"&&n!==null&&"then"in n}function Qy(n){return n!=null&&typeof n=="object"&&"$$typeof"in n&&n.$$typeof===_T&&"_payload"in n&&ET(n._payload)}function RT(n){const i=AT(n),r=g.forwardRef((o,s)=>{let{children:u,...d}=o;Qy(u)&&typeof ps=="function"&&(u=ps(u._payload));const p=g.Children.toArray(u),h=p.find(OT);if(h){const m=h.props.children,b=p.map(v=>v===h?g.Children.count(m)>1?g.Children.only(null):g.isValidElement(m)?m.props.children:null:v);return x.jsx(i,{...d,ref:s,children:g.isValidElement(m)?g.cloneElement(m,void 0,b):null})}return x.jsx(i,{...d,ref:s,children:u})});return r.displayName=`${n}.Slot`,r}var Zy=RT("Slot");function AT(n){const i=g.forwardRef((r,o)=>{let{children:s,...u}=r;if(Qy(s)&&typeof ps=="function"&&(s=ps(s._payload)),g.isValidElement(s)){const d=DT(s),p=MT(u,s.props);return s.type!==g.Fragment&&(p.ref=o?Sa(o,d):d),g.cloneElement(s,p)}return g.Children.count(s)>1?g.Children.only(null):null});return i.displayName=`${n}.SlotClone`,i}var NT=Symbol("radix.slottable");function OT(n){return g.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===NT}function MT(n,i){const r={...i};for(const o in i){const s=n[o],u=i[o];/^on[A-Z]/.test(o)?s&&u?r[o]=(...p)=>{const h=u(...p);return s(...p),h}:s&&(r[o]=s):o==="style"?r[o]={...s,...u}:o==="className"&&(r[o]=[s,u].filter(Boolean).join(" "))}return{...n,...r}}function DT(n){let i=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning;return r?n.ref:(i=Object.getOwnPropertyDescriptor(n,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning,r?n.props.ref:n.props.ref||n.ref)}function Wy(n){var i,r,o="";if(typeof n=="string"||typeof n=="number")o+=n;else if(typeof n=="object")if(Array.isArray(n)){var s=n.length;for(i=0;i<s;i++)n[i]&&(r=Wy(n[i]))&&(o&&(o+=" "),o+=r)}else for(r in n)n[r]&&(o&&(o+=" "),o+=r);return o}function Jy(){for(var n,i,r=0,o="",s=arguments.length;r<s;r++)(n=arguments[r])&&(i=Wy(n))&&(o&&(o+=" "),o+=i);return o}const Dv=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,Lv=Jy,e0=(n,i)=>r=>{var o;if(i?.variants==null)return Lv(n,r?.class,r?.className);const{variants:s,defaultVariants:u}=i,d=Object.keys(s).map(m=>{const b=r?.[m],v=u?.[m];if(b===null)return null;const C=Dv(b)||Dv(v);return s[m][C]}),p=r&&Object.entries(r).reduce((m,b)=>{let[v,C]=b;return C===void 0||(m[v]=C),m},{}),h=i==null||(o=i.compoundVariants)===null||o===void 0?void 0:o.reduce((m,b)=>{let{class:v,className:C,...T}=b;return Object.entries(T).every(_=>{let[w,E]=_;return Array.isArray(E)?E.includes({...u,...p}[w]):{...u,...p}[w]===E})?[...m,v,C]:m},[]);return Lv(n,d,h,r?.class,r?.className)},LT=(n,i)=>{const r=new Array(n.length+i.length);for(let o=0;o<n.length;o++)r[o]=n[o];for(let o=0;o<i.length;o++)r[n.length+o]=i[o];return r},jT=(n,i)=>({classGroupId:n,validator:i}),t0=(n=new Map,i=null,r)=>({nextPart:n,validators:i,classGroupId:r}),hs="-",jv=[],kT="arbitrary..",zT=n=>{const i=PT(n),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=n;return{getClassGroupId:d=>{if(d.startsWith("[")&&d.endsWith("]"))return IT(d);const p=d.split(hs),h=p[0]===""&&p.length>1?1:0;return n0(p,h,i)},getConflictingClassGroupIds:(d,p)=>{if(p){const h=o[d],m=r[d];return h?m?LT(m,h):h:m||jv}return r[d]||jv}}},n0=(n,i,r)=>{if(n.length-i===0)return r.classGroupId;const s=n[i],u=r.nextPart.get(s);if(u){const m=n0(n,i+1,u);if(m)return m}const d=r.validators;if(d===null)return;const p=i===0?n.join(hs):n.slice(i).join(hs),h=d.length;for(let m=0;m<h;m++){const b=d[m];if(b.validator(p))return b.classGroupId}},IT=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const i=n.slice(1,-1),r=i.indexOf(":"),o=i.slice(0,r);return o?kT+o:void 0})(),PT=n=>{const{theme:i,classGroups:r}=n;return HT(r,i)},HT=(n,i)=>{const r=t0();for(const o in n){const s=n[o];fd(s,r,o,i)}return r},fd=(n,i,r,o)=>{const s=n.length;for(let u=0;u<s;u++){const d=n[u];UT(d,i,r,o)}},UT=(n,i,r,o)=>{if(typeof n=="string"){BT(n,i,r);return}if(typeof n=="function"){GT(n,i,r,o);return}VT(n,i,r,o)},BT=(n,i,r)=>{const o=n===""?i:a0(i,n);o.classGroupId=r},GT=(n,i,r,o)=>{if(FT(n)){fd(n(o),i,r,o);return}i.validators===null&&(i.validators=[]),i.validators.push(jT(r,n))},VT=(n,i,r,o)=>{const s=Object.entries(n),u=s.length;for(let d=0;d<u;d++){const[p,h]=s[d];fd(h,a0(i,p),r,o)}},a0=(n,i)=>{let r=n;const o=i.split(hs),s=o.length;for(let u=0;u<s;u++){const d=o[u];let p=r.nextPart.get(d);p||(p=t0(),r.nextPart.set(d,p)),r=p}return r},FT=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,KT=n=>{if(n<1)return{get:()=>{},set:()=>{}};let i=0,r=Object.create(null),o=Object.create(null);const s=(u,d)=>{r[u]=d,i++,i>n&&(i=0,o=r,r=Object.create(null))};return{get(u){let d=r[u];if(d!==void 0)return d;if((d=o[u])!==void 0)return s(u,d),d},set(u,d){u in r?r[u]=d:s(u,d)}}},Uf="!",kv=":",YT=[],zv=(n,i,r,o,s)=>({modifiers:n,hasImportantModifier:i,baseClassName:r,maybePostfixModifierPosition:o,isExternal:s}),$T=n=>{const{prefix:i,experimentalParseClassName:r}=n;let o=s=>{const u=[];let d=0,p=0,h=0,m;const b=s.length;for(let w=0;w<b;w++){const E=s[w];if(d===0&&p===0){if(E===kv){u.push(s.slice(h,w)),h=w+1;continue}if(E==="/"){m=w;continue}}E==="["?d++:E==="]"?d--:E==="("?p++:E===")"&&p--}const v=u.length===0?s:s.slice(h);let C=v,T=!1;v.endsWith(Uf)?(C=v.slice(0,-1),T=!0):v.startsWith(Uf)&&(C=v.slice(1),T=!0);const _=m&&m>h?m-h:void 0;return zv(u,T,C,_)};if(i){const s=i+kv,u=o;o=d=>d.startsWith(s)?u(d.slice(s.length)):zv(YT,!1,d,void 0,!0)}if(r){const s=o;o=u=>r({className:u,parseClassName:s})}return o},qT=n=>{const i=new Map;return n.orderSensitiveModifiers.forEach((r,o)=>{i.set(r,1e6+o)}),r=>{const o=[];let s=[];for(let u=0;u<r.length;u++){const d=r[u],p=d[0]==="[",h=i.has(d);p||h?(s.length>0&&(s.sort(),o.push(...s),s=[]),o.push(d)):s.push(d)}return s.length>0&&(s.sort(),o.push(...s)),o}},XT=n=>({cache:KT(n.cacheSize),parseClassName:$T(n),sortModifiers:qT(n),...zT(n)}),QT=/\s+/,ZT=(n,i)=>{const{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:s,sortModifiers:u}=i,d=[],p=n.trim().split(QT);let h="";for(let m=p.length-1;m>=0;m-=1){const b=p[m],{isExternal:v,modifiers:C,hasImportantModifier:T,baseClassName:_,maybePostfixModifierPosition:w}=r(b);if(v){h=b+(h.length>0?" "+h:h);continue}let E=!!w,N=o(E?_.substring(0,w):_);if(!N){if(!E){h=b+(h.length>0?" "+h:h);continue}if(N=o(_),!N){h=b+(h.length>0?" "+h:h);continue}E=!1}const M=C.length===0?"":C.length===1?C[0]:u(C).join(":"),D=T?M+Uf:M,H=D+N;if(d.indexOf(H)>-1)continue;d.push(H);const G=s(N,E);for(let W=0;W<G.length;++W){const U=G[W];d.push(D+U)}h=b+(h.length>0?" "+h:h)}return h},WT=(...n)=>{let i=0,r,o,s="";for(;i<n.length;)(r=n[i++])&&(o=i0(r))&&(s&&(s+=" "),s+=o);return s},i0=n=>{if(typeof n=="string")return n;let i,r="";for(let o=0;o<n.length;o++)n[o]&&(i=i0(n[o]))&&(r&&(r+=" "),r+=i);return r},JT=(n,...i)=>{let r,o,s,u;const d=h=>{const m=i.reduce((b,v)=>v(b),n());return r=XT(m),o=r.cache.get,s=r.cache.set,u=p,p(h)},p=h=>{const m=o(h);if(m)return m;const b=ZT(h,r);return s(h,b),b};return u=d,(...h)=>u(WT(...h))},e_=[],it=n=>{const i=r=>r[n]||e_;return i.isThemeGetter=!0,i},r0=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,l0=/^\((?:(\w[\w-]*):)?(.+)\)$/i,t_=/^\d+\/\d+$/,n_=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,a_=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,i_=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,r_=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,l_=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ui=n=>t_.test(n),we=n=>!!n&&!Number.isNaN(Number(n)),ha=n=>!!n&&Number.isInteger(Number(n)),Cf=n=>n.endsWith("%")&&we(n.slice(0,-1)),Pn=n=>n_.test(n),o_=()=>!0,s_=n=>a_.test(n)&&!i_.test(n),o0=()=>!1,c_=n=>r_.test(n),u_=n=>l_.test(n),f_=n=>!oe(n)&&!se(n),d_=n=>tr(n,u0,o0),oe=n=>r0.test(n),Ya=n=>tr(n,f0,s_),wf=n=>tr(n,v_,we),Iv=n=>tr(n,s0,o0),p_=n=>tr(n,c0,u_),Qo=n=>tr(n,d0,c_),se=n=>l0.test(n),il=n=>nr(n,f0),h_=n=>nr(n,y_),Pv=n=>nr(n,s0),m_=n=>nr(n,u0),g_=n=>nr(n,c0),Zo=n=>nr(n,d0,!0),tr=(n,i,r)=>{const o=r0.exec(n);return o?o[1]?i(o[1]):r(o[2]):!1},nr=(n,i,r=!1)=>{const o=l0.exec(n);return o?o[1]?i(o[1]):r:!1},s0=n=>n==="position"||n==="percentage",c0=n=>n==="image"||n==="url",u0=n=>n==="length"||n==="size"||n==="bg-size",f0=n=>n==="length",v_=n=>n==="number",y_=n=>n==="family-name",d0=n=>n==="shadow",x_=()=>{const n=it("color"),i=it("font"),r=it("text"),o=it("font-weight"),s=it("tracking"),u=it("leading"),d=it("breakpoint"),p=it("container"),h=it("spacing"),m=it("radius"),b=it("shadow"),v=it("inset-shadow"),C=it("text-shadow"),T=it("drop-shadow"),_=it("blur"),w=it("perspective"),E=it("aspect"),N=it("ease"),M=it("animate"),D=()=>["auto","avoid","all","avoid-page","page","left","right","column"],H=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],G=()=>[...H(),se,oe],W=()=>["auto","hidden","clip","visible","scroll"],U=()=>["auto","contain","none"],Y=()=>[se,oe,h],J=()=>[Ui,"full","auto",...Y()],te=()=>[ha,"none","subgrid",se,oe],ae=()=>["auto",{span:["full",ha,se,oe]},ha,se,oe],ne=()=>[ha,"auto",se,oe],re=()=>["auto","min","max","fr",se,oe],ie=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ue=()=>["start","end","center","stretch","center-safe","end-safe"],L=()=>["auto",...Y()],K=()=>[Ui,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...Y()],I=()=>[n,se,oe],Z=()=>[...H(),Pv,Iv,{position:[se,oe]}],pe=()=>["no-repeat",{repeat:["","x","y","space","round"]}],R=()=>["auto","cover","contain",m_,d_,{size:[se,oe]}],V=()=>[Cf,il,Ya],Q=()=>["","none","full",m,se,oe],ee=()=>["",we,il,Ya],fe=()=>["solid","dashed","dotted","double"],me=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],X=()=>[we,Cf,Pv,Iv],ye=()=>["","none",_,se,oe],be=()=>["none",we,se,oe],Ee=()=>["none",we,se,oe],Me=()=>[we,se,oe],ze=()=>[Ui,"full",...Y()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Pn],breakpoint:[Pn],color:[o_],container:[Pn],"drop-shadow":[Pn],ease:["in","out","in-out"],font:[f_],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Pn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Pn],shadow:[Pn],spacing:["px",we],text:[Pn],"text-shadow":[Pn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ui,oe,se,E]}],container:["container"],columns:[{columns:[we,oe,se,p]}],"break-after":[{"break-after":D()}],"break-before":[{"break-before":D()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:G()}],overflow:[{overflow:W()}],"overflow-x":[{"overflow-x":W()}],"overflow-y":[{"overflow-y":W()}],overscroll:[{overscroll:U()}],"overscroll-x":[{"overscroll-x":U()}],"overscroll-y":[{"overscroll-y":U()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:J()}],"inset-x":[{"inset-x":J()}],"inset-y":[{"inset-y":J()}],start:[{start:J()}],end:[{end:J()}],top:[{top:J()}],right:[{right:J()}],bottom:[{bottom:J()}],left:[{left:J()}],visibility:["visible","invisible","collapse"],z:[{z:[ha,"auto",se,oe]}],basis:[{basis:[Ui,"full","auto",p,...Y()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[we,Ui,"auto","initial","none",oe]}],grow:[{grow:["",we,se,oe]}],shrink:[{shrink:["",we,se,oe]}],order:[{order:[ha,"first","last","none",se,oe]}],"grid-cols":[{"grid-cols":te()}],"col-start-end":[{col:ae()}],"col-start":[{"col-start":ne()}],"col-end":[{"col-end":ne()}],"grid-rows":[{"grid-rows":te()}],"row-start-end":[{row:ae()}],"row-start":[{"row-start":ne()}],"row-end":[{"row-end":ne()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":re()}],"auto-rows":[{"auto-rows":re()}],gap:[{gap:Y()}],"gap-x":[{"gap-x":Y()}],"gap-y":[{"gap-y":Y()}],"justify-content":[{justify:[...ie(),"normal"]}],"justify-items":[{"justify-items":[...ue(),"normal"]}],"justify-self":[{"justify-self":["auto",...ue()]}],"align-content":[{content:["normal",...ie()]}],"align-items":[{items:[...ue(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ue(),{baseline:["","last"]}]}],"place-content":[{"place-content":ie()}],"place-items":[{"place-items":[...ue(),"baseline"]}],"place-self":[{"place-self":["auto",...ue()]}],p:[{p:Y()}],px:[{px:Y()}],py:[{py:Y()}],ps:[{ps:Y()}],pe:[{pe:Y()}],pt:[{pt:Y()}],pr:[{pr:Y()}],pb:[{pb:Y()}],pl:[{pl:Y()}],m:[{m:L()}],mx:[{mx:L()}],my:[{my:L()}],ms:[{ms:L()}],me:[{me:L()}],mt:[{mt:L()}],mr:[{mr:L()}],mb:[{mb:L()}],ml:[{ml:L()}],"space-x":[{"space-x":Y()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":Y()}],"space-y-reverse":["space-y-reverse"],size:[{size:K()}],w:[{w:[p,"screen",...K()]}],"min-w":[{"min-w":[p,"screen","none",...K()]}],"max-w":[{"max-w":[p,"screen","none","prose",{screen:[d]},...K()]}],h:[{h:["screen","lh",...K()]}],"min-h":[{"min-h":["screen","lh","none",...K()]}],"max-h":[{"max-h":["screen","lh",...K()]}],"font-size":[{text:["base",r,il,Ya]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,se,wf]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Cf,oe]}],"font-family":[{font:[h_,oe,i]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,se,oe]}],"line-clamp":[{"line-clamp":[we,"none",se,wf]}],leading:[{leading:[u,...Y()]}],"list-image":[{"list-image":["none",se,oe]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",se,oe]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:I()}],"text-color":[{text:I()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...fe(),"wavy"]}],"text-decoration-thickness":[{decoration:[we,"from-font","auto",se,Ya]}],"text-decoration-color":[{decoration:I()}],"underline-offset":[{"underline-offset":[we,"auto",se,oe]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:Y()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",se,oe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",se,oe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Z()}],"bg-repeat":[{bg:pe()}],"bg-size":[{bg:R()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},ha,se,oe],radial:["",se,oe],conic:[ha,se,oe]},g_,p_]}],"bg-color":[{bg:I()}],"gradient-from-pos":[{from:V()}],"gradient-via-pos":[{via:V()}],"gradient-to-pos":[{to:V()}],"gradient-from":[{from:I()}],"gradient-via":[{via:I()}],"gradient-to":[{to:I()}],rounded:[{rounded:Q()}],"rounded-s":[{"rounded-s":Q()}],"rounded-e":[{"rounded-e":Q()}],"rounded-t":[{"rounded-t":Q()}],"rounded-r":[{"rounded-r":Q()}],"rounded-b":[{"rounded-b":Q()}],"rounded-l":[{"rounded-l":Q()}],"rounded-ss":[{"rounded-ss":Q()}],"rounded-se":[{"rounded-se":Q()}],"rounded-ee":[{"rounded-ee":Q()}],"rounded-es":[{"rounded-es":Q()}],"rounded-tl":[{"rounded-tl":Q()}],"rounded-tr":[{"rounded-tr":Q()}],"rounded-br":[{"rounded-br":Q()}],"rounded-bl":[{"rounded-bl":Q()}],"border-w":[{border:ee()}],"border-w-x":[{"border-x":ee()}],"border-w-y":[{"border-y":ee()}],"border-w-s":[{"border-s":ee()}],"border-w-e":[{"border-e":ee()}],"border-w-t":[{"border-t":ee()}],"border-w-r":[{"border-r":ee()}],"border-w-b":[{"border-b":ee()}],"border-w-l":[{"border-l":ee()}],"divide-x":[{"divide-x":ee()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ee()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...fe(),"hidden","none"]}],"divide-style":[{divide:[...fe(),"hidden","none"]}],"border-color":[{border:I()}],"border-color-x":[{"border-x":I()}],"border-color-y":[{"border-y":I()}],"border-color-s":[{"border-s":I()}],"border-color-e":[{"border-e":I()}],"border-color-t":[{"border-t":I()}],"border-color-r":[{"border-r":I()}],"border-color-b":[{"border-b":I()}],"border-color-l":[{"border-l":I()}],"divide-color":[{divide:I()}],"outline-style":[{outline:[...fe(),"none","hidden"]}],"outline-offset":[{"outline-offset":[we,se,oe]}],"outline-w":[{outline:["",we,il,Ya]}],"outline-color":[{outline:I()}],shadow:[{shadow:["","none",b,Zo,Qo]}],"shadow-color":[{shadow:I()}],"inset-shadow":[{"inset-shadow":["none",v,Zo,Qo]}],"inset-shadow-color":[{"inset-shadow":I()}],"ring-w":[{ring:ee()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:I()}],"ring-offset-w":[{"ring-offset":[we,Ya]}],"ring-offset-color":[{"ring-offset":I()}],"inset-ring-w":[{"inset-ring":ee()}],"inset-ring-color":[{"inset-ring":I()}],"text-shadow":[{"text-shadow":["none",C,Zo,Qo]}],"text-shadow-color":[{"text-shadow":I()}],opacity:[{opacity:[we,se,oe]}],"mix-blend":[{"mix-blend":[...me(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":me()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[we]}],"mask-image-linear-from-pos":[{"mask-linear-from":X()}],"mask-image-linear-to-pos":[{"mask-linear-to":X()}],"mask-image-linear-from-color":[{"mask-linear-from":I()}],"mask-image-linear-to-color":[{"mask-linear-to":I()}],"mask-image-t-from-pos":[{"mask-t-from":X()}],"mask-image-t-to-pos":[{"mask-t-to":X()}],"mask-image-t-from-color":[{"mask-t-from":I()}],"mask-image-t-to-color":[{"mask-t-to":I()}],"mask-image-r-from-pos":[{"mask-r-from":X()}],"mask-image-r-to-pos":[{"mask-r-to":X()}],"mask-image-r-from-color":[{"mask-r-from":I()}],"mask-image-r-to-color":[{"mask-r-to":I()}],"mask-image-b-from-pos":[{"mask-b-from":X()}],"mask-image-b-to-pos":[{"mask-b-to":X()}],"mask-image-b-from-color":[{"mask-b-from":I()}],"mask-image-b-to-color":[{"mask-b-to":I()}],"mask-image-l-from-pos":[{"mask-l-from":X()}],"mask-image-l-to-pos":[{"mask-l-to":X()}],"mask-image-l-from-color":[{"mask-l-from":I()}],"mask-image-l-to-color":[{"mask-l-to":I()}],"mask-image-x-from-pos":[{"mask-x-from":X()}],"mask-image-x-to-pos":[{"mask-x-to":X()}],"mask-image-x-from-color":[{"mask-x-from":I()}],"mask-image-x-to-color":[{"mask-x-to":I()}],"mask-image-y-from-pos":[{"mask-y-from":X()}],"mask-image-y-to-pos":[{"mask-y-to":X()}],"mask-image-y-from-color":[{"mask-y-from":I()}],"mask-image-y-to-color":[{"mask-y-to":I()}],"mask-image-radial":[{"mask-radial":[se,oe]}],"mask-image-radial-from-pos":[{"mask-radial-from":X()}],"mask-image-radial-to-pos":[{"mask-radial-to":X()}],"mask-image-radial-from-color":[{"mask-radial-from":I()}],"mask-image-radial-to-color":[{"mask-radial-to":I()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":H()}],"mask-image-conic-pos":[{"mask-conic":[we]}],"mask-image-conic-from-pos":[{"mask-conic-from":X()}],"mask-image-conic-to-pos":[{"mask-conic-to":X()}],"mask-image-conic-from-color":[{"mask-conic-from":I()}],"mask-image-conic-to-color":[{"mask-conic-to":I()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Z()}],"mask-repeat":[{mask:pe()}],"mask-size":[{mask:R()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",se,oe]}],filter:[{filter:["","none",se,oe]}],blur:[{blur:ye()}],brightness:[{brightness:[we,se,oe]}],contrast:[{contrast:[we,se,oe]}],"drop-shadow":[{"drop-shadow":["","none",T,Zo,Qo]}],"drop-shadow-color":[{"drop-shadow":I()}],grayscale:[{grayscale:["",we,se,oe]}],"hue-rotate":[{"hue-rotate":[we,se,oe]}],invert:[{invert:["",we,se,oe]}],saturate:[{saturate:[we,se,oe]}],sepia:[{sepia:["",we,se,oe]}],"backdrop-filter":[{"backdrop-filter":["","none",se,oe]}],"backdrop-blur":[{"backdrop-blur":ye()}],"backdrop-brightness":[{"backdrop-brightness":[we,se,oe]}],"backdrop-contrast":[{"backdrop-contrast":[we,se,oe]}],"backdrop-grayscale":[{"backdrop-grayscale":["",we,se,oe]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[we,se,oe]}],"backdrop-invert":[{"backdrop-invert":["",we,se,oe]}],"backdrop-opacity":[{"backdrop-opacity":[we,se,oe]}],"backdrop-saturate":[{"backdrop-saturate":[we,se,oe]}],"backdrop-sepia":[{"backdrop-sepia":["",we,se,oe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":Y()}],"border-spacing-x":[{"border-spacing-x":Y()}],"border-spacing-y":[{"border-spacing-y":Y()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",se,oe]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[we,"initial",se,oe]}],ease:[{ease:["linear","initial",N,se,oe]}],delay:[{delay:[we,se,oe]}],animate:[{animate:["none",M,se,oe]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[w,se,oe]}],"perspective-origin":[{"perspective-origin":G()}],rotate:[{rotate:be()}],"rotate-x":[{"rotate-x":be()}],"rotate-y":[{"rotate-y":be()}],"rotate-z":[{"rotate-z":be()}],scale:[{scale:Ee()}],"scale-x":[{"scale-x":Ee()}],"scale-y":[{"scale-y":Ee()}],"scale-z":[{"scale-z":Ee()}],"scale-3d":["scale-3d"],skew:[{skew:Me()}],"skew-x":[{"skew-x":Me()}],"skew-y":[{"skew-y":Me()}],transform:[{transform:[se,oe,"","none","gpu","cpu"]}],"transform-origin":[{origin:G()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:ze()}],"translate-x":[{"translate-x":ze()}],"translate-y":[{"translate-y":ze()}],"translate-z":[{"translate-z":ze()}],"translate-none":["translate-none"],accent:[{accent:I()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:I()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",se,oe]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":Y()}],"scroll-mx":[{"scroll-mx":Y()}],"scroll-my":[{"scroll-my":Y()}],"scroll-ms":[{"scroll-ms":Y()}],"scroll-me":[{"scroll-me":Y()}],"scroll-mt":[{"scroll-mt":Y()}],"scroll-mr":[{"scroll-mr":Y()}],"scroll-mb":[{"scroll-mb":Y()}],"scroll-ml":[{"scroll-ml":Y()}],"scroll-p":[{"scroll-p":Y()}],"scroll-px":[{"scroll-px":Y()}],"scroll-py":[{"scroll-py":Y()}],"scroll-ps":[{"scroll-ps":Y()}],"scroll-pe":[{"scroll-pe":Y()}],"scroll-pt":[{"scroll-pt":Y()}],"scroll-pr":[{"scroll-pr":Y()}],"scroll-pb":[{"scroll-pb":Y()}],"scroll-pl":[{"scroll-pl":Y()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",se,oe]}],fill:[{fill:["none",...I()]}],"stroke-w":[{stroke:[we,il,Ya,wf]}],stroke:[{stroke:["none",...I()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},b_=JT(x_);function ht(...n){return b_(Jy(n))}const S_=e0("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function dt({className:n,variant:i="default",size:r="default",asChild:o=!1,...s}){const u=o?Zy:"button";return x.jsx(u,{"data-slot":"button","data-variant":i,"data-size":r,className:ht(S_({variant:i,size:r,className:n})),...s})}function de(n,i,{checkForDefaultPrevented:r=!0}={}){return function(s){if(n?.(s),r===!1||!s.defaultPrevented)return i?.(s)}}function Wa(n,i=[]){let r=[];function o(u,d){const p=g.createContext(d),h=r.length;r=[...r,d];const m=v=>{const{scope:C,children:T,..._}=v,w=C?.[n]?.[h]||p,E=g.useMemo(()=>_,Object.values(_));return x.jsx(w.Provider,{value:E,children:T})};m.displayName=u+"Provider";function b(v,C){const T=C?.[n]?.[h]||p,_=g.useContext(T);if(_)return _;if(d!==void 0)return d;throw new Error(`\`${v}\` must be used within \`${u}\``)}return[m,b]}const s=()=>{const u=r.map(d=>g.createContext(d));return function(p){const h=p?.[n]||u;return g.useMemo(()=>({[`__scope${n}`]:{...p,[n]:h}}),[p,h])}};return s.scopeName=n,[o,C_(s,...i)]}function C_(...n){const i=n[0];if(n.length===1)return i;const r=()=>{const o=n.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(u){const d=o.reduce((p,{useScope:h,scopeName:m})=>{const v=h(u)[`__scope${m}`];return{...p,...v}},{});return g.useMemo(()=>({[`__scope${i.scopeName}`]:d}),[d])}};return r.scopeName=i.scopeName,r}var mt=globalThis?.document?g.useLayoutEffect:()=>{},w_=id[" useInsertionEffect ".trim().toString()]||mt;function $i({prop:n,defaultProp:i,onChange:r=()=>{},caller:o}){const[s,u,d]=T_({defaultProp:i,onChange:r}),p=n!==void 0,h=p?n:s;{const b=g.useRef(n!==void 0);g.useEffect(()=>{const v=b.current;v!==p&&console.warn(`${o} is changing from ${v?"controlled":"uncontrolled"} to ${p?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),b.current=p},[p,o])}const m=g.useCallback(b=>{if(p){const v=__(b)?b(n):b;v!==n&&d.current?.(v)}else u(b)},[p,n,u,d]);return[h,m]}function T_({defaultProp:n,onChange:i}){const[r,o]=g.useState(n),s=g.useRef(r),u=g.useRef(i);return w_(()=>{u.current=i},[i]),g.useEffect(()=>{s.current!==r&&(u.current?.(r),s.current=r)},[r,s]),[r,o,u]}function __(n){return typeof n=="function"}function E_(n){const i=R_(n),r=g.forwardRef((o,s)=>{const{children:u,...d}=o,p=g.Children.toArray(u),h=p.find(N_);if(h){const m=h.props.children,b=p.map(v=>v===h?g.Children.count(m)>1?g.Children.only(null):g.isValidElement(m)?m.props.children:null:v);return x.jsx(i,{...d,ref:s,children:g.isValidElement(m)?g.cloneElement(m,void 0,b):null})}return x.jsx(i,{...d,ref:s,children:u})});return r.displayName=`${n}.Slot`,r}function R_(n){const i=g.forwardRef((r,o)=>{const{children:s,...u}=r;if(g.isValidElement(s)){const d=M_(s),p=O_(u,s.props);return s.type!==g.Fragment&&(p.ref=o?Sa(o,d):d),g.cloneElement(s,p)}return g.Children.count(s)>1?g.Children.only(null):null});return i.displayName=`${n}.SlotClone`,i}var A_=Symbol("radix.slottable");function N_(n){return g.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===A_}function O_(n,i){const r={...i};for(const o in i){const s=n[o],u=i[o];/^on[A-Z]/.test(o)?s&&u?r[o]=(...p)=>{const h=u(...p);return s(...p),h}:s&&(r[o]=s):o==="style"?r[o]={...s,...u}:o==="className"&&(r[o]=[s,u].filter(Boolean).join(" "))}return{...n,...r}}function M_(n){let i=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning;return r?n.ref:(i=Object.getOwnPropertyDescriptor(n,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning,r?n.props.ref:n.props.ref||n.ref)}var D_=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],ke=D_.reduce((n,i)=>{const r=E_(`Primitive.${i}`),o=g.forwardRef((s,u)=>{const{asChild:d,...p}=s,h=d?r:i;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),x.jsx(h,{...p,ref:u})});return o.displayName=`Primitive.${i}`,{...n,[i]:o}},{});function p0(n,i){n&&wl.flushSync(()=>n.dispatchEvent(i))}function Hv(n){const i=L_(n),r=g.forwardRef((o,s)=>{const{children:u,...d}=o,p=g.Children.toArray(u),h=p.find(k_);if(h){const m=h.props.children,b=p.map(v=>v===h?g.Children.count(m)>1?g.Children.only(null):g.isValidElement(m)?m.props.children:null:v);return x.jsx(i,{...d,ref:s,children:g.isValidElement(m)?g.cloneElement(m,void 0,b):null})}return x.jsx(i,{...d,ref:s,children:u})});return r.displayName=`${n}.Slot`,r}function L_(n){const i=g.forwardRef((r,o)=>{const{children:s,...u}=r;if(g.isValidElement(s)){const d=I_(s),p=z_(u,s.props);return s.type!==g.Fragment&&(p.ref=o?Sa(o,d):d),g.cloneElement(s,p)}return g.Children.count(s)>1?g.Children.only(null):null});return i.displayName=`${n}.SlotClone`,i}var j_=Symbol("radix.slottable");function k_(n){return g.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===j_}function z_(n,i){const r={...i};for(const o in i){const s=n[o],u=i[o];/^on[A-Z]/.test(o)?s&&u?r[o]=(...p)=>{const h=u(...p);return s(...p),h}:s&&(r[o]=s):o==="style"?r[o]={...s,...u}:o==="className"&&(r[o]=[s,u].filter(Boolean).join(" "))}return{...n,...r}}function I_(n){let i=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning;return r?n.ref:(i=Object.getOwnPropertyDescriptor(n,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning,r?n.props.ref:n.props.ref||n.ref)}function dd(n){const i=n+"CollectionProvider",[r,o]=Wa(i),[s,u]=r(i,{collectionRef:{current:null},itemMap:new Map}),d=w=>{const{scope:E,children:N}=w,M=ma.useRef(null),D=ma.useRef(new Map).current;return x.jsx(s,{scope:E,itemMap:D,collectionRef:M,children:N})};d.displayName=i;const p=n+"CollectionSlot",h=Hv(p),m=ma.forwardRef((w,E)=>{const{scope:N,children:M}=w,D=u(p,N),H=Fe(E,D.collectionRef);return x.jsx(h,{ref:H,children:M})});m.displayName=p;const b=n+"CollectionItemSlot",v="data-radix-collection-item",C=Hv(b),T=ma.forwardRef((w,E)=>{const{scope:N,children:M,...D}=w,H=ma.useRef(null),G=Fe(E,H),W=u(b,N);return ma.useEffect(()=>(W.itemMap.set(H,{ref:H,...D}),()=>{W.itemMap.delete(H)})),x.jsx(C,{[v]:"",ref:G,children:M})});T.displayName=b;function _(w){const E=u(n+"CollectionConsumer",w);return ma.useCallback(()=>{const M=E.collectionRef.current;if(!M)return[];const D=Array.from(M.querySelectorAll(`[${v}]`));return Array.from(E.itemMap.values()).sort((W,U)=>D.indexOf(W.ref.current)-D.indexOf(U.ref.current))},[E.collectionRef,E.itemMap])}return[{Provider:d,Slot:m,ItemSlot:T},_,o]}var P_=g.createContext(void 0);function pd(n){const i=g.useContext(P_);return n||i||"ltr"}function an(n){const i=g.useRef(n);return g.useEffect(()=>{i.current=n}),g.useMemo(()=>(...r)=>i.current?.(...r),[])}function H_(n,i=globalThis?.document){const r=an(n);g.useEffect(()=>{const o=s=>{s.key==="Escape"&&r(s)};return i.addEventListener("keydown",o,{capture:!0}),()=>i.removeEventListener("keydown",o,{capture:!0})},[r,i])}var U_="DismissableLayer",Bf="dismissableLayer.update",B_="dismissableLayer.pointerDownOutside",G_="dismissableLayer.focusOutside",Uv,h0=g.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Rs=g.forwardRef((n,i)=>{const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:u,onInteractOutside:d,onDismiss:p,...h}=n,m=g.useContext(h0),[b,v]=g.useState(null),C=b?.ownerDocument??globalThis?.document,[,T]=g.useState({}),_=Fe(i,U=>v(U)),w=Array.from(m.layers),[E]=[...m.layersWithOutsidePointerEventsDisabled].slice(-1),N=w.indexOf(E),M=b?w.indexOf(b):-1,D=m.layersWithOutsidePointerEventsDisabled.size>0,H=M>=N,G=K_(U=>{const Y=U.target,J=[...m.branches].some(te=>te.contains(Y));!H||J||(s?.(U),d?.(U),U.defaultPrevented||p?.())},C),W=Y_(U=>{const Y=U.target;[...m.branches].some(te=>te.contains(Y))||(u?.(U),d?.(U),U.defaultPrevented||p?.())},C);return H_(U=>{M===m.layers.size-1&&(o?.(U),!U.defaultPrevented&&p&&(U.preventDefault(),p()))},C),g.useEffect(()=>{if(b)return r&&(m.layersWithOutsidePointerEventsDisabled.size===0&&(Uv=C.body.style.pointerEvents,C.body.style.pointerEvents="none"),m.layersWithOutsidePointerEventsDisabled.add(b)),m.layers.add(b),Bv(),()=>{r&&m.layersWithOutsidePointerEventsDisabled.size===1&&(C.body.style.pointerEvents=Uv)}},[b,C,r,m]),g.useEffect(()=>()=>{b&&(m.layers.delete(b),m.layersWithOutsidePointerEventsDisabled.delete(b),Bv())},[b,m]),g.useEffect(()=>{const U=()=>T({});return document.addEventListener(Bf,U),()=>document.removeEventListener(Bf,U)},[]),x.jsx(ke.div,{...h,ref:_,style:{pointerEvents:D?H?"auto":"none":void 0,...n.style},onFocusCapture:de(n.onFocusCapture,W.onFocusCapture),onBlurCapture:de(n.onBlurCapture,W.onBlurCapture),onPointerDownCapture:de(n.onPointerDownCapture,G.onPointerDownCapture)})});Rs.displayName=U_;var V_="DismissableLayerBranch",F_=g.forwardRef((n,i)=>{const r=g.useContext(h0),o=g.useRef(null),s=Fe(i,o);return g.useEffect(()=>{const u=o.current;if(u)return r.branches.add(u),()=>{r.branches.delete(u)}},[r.branches]),x.jsx(ke.div,{...n,ref:s})});F_.displayName=V_;function K_(n,i=globalThis?.document){const r=an(n),o=g.useRef(!1),s=g.useRef(()=>{});return g.useEffect(()=>{const u=p=>{if(p.target&&!o.current){let h=function(){m0(B_,r,m,{discrete:!0})};const m={originalEvent:p};p.pointerType==="touch"?(i.removeEventListener("click",s.current),s.current=h,i.addEventListener("click",s.current,{once:!0})):h()}else i.removeEventListener("click",s.current);o.current=!1},d=window.setTimeout(()=>{i.addEventListener("pointerdown",u)},0);return()=>{window.clearTimeout(d),i.removeEventListener("pointerdown",u),i.removeEventListener("click",s.current)}},[i,r]),{onPointerDownCapture:()=>o.current=!0}}function Y_(n,i=globalThis?.document){const r=an(n),o=g.useRef(!1);return g.useEffect(()=>{const s=u=>{u.target&&!o.current&&m0(G_,r,{originalEvent:u},{discrete:!1})};return i.addEventListener("focusin",s),()=>i.removeEventListener("focusin",s)},[i,r]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function Bv(){const n=new CustomEvent(Bf);document.dispatchEvent(n)}function m0(n,i,r,{discrete:o}){const s=r.originalEvent.target,u=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:r});i&&s.addEventListener(n,i,{once:!0}),o?p0(s,u):s.dispatchEvent(u)}var Tf=0;function g0(){g.useEffect(()=>{const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",n[0]??Gv()),document.body.insertAdjacentElement("beforeend",n[1]??Gv()),Tf++,()=>{Tf===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(i=>i.remove()),Tf--}},[])}function Gv(){const n=document.createElement("span");return n.setAttribute("data-radix-focus-guard",""),n.tabIndex=0,n.style.outline="none",n.style.opacity="0",n.style.position="fixed",n.style.pointerEvents="none",n}var _f="focusScope.autoFocusOnMount",Ef="focusScope.autoFocusOnUnmount",Vv={bubbles:!1,cancelable:!0},$_="FocusScope",hd=g.forwardRef((n,i)=>{const{loop:r=!1,trapped:o=!1,onMountAutoFocus:s,onUnmountAutoFocus:u,...d}=n,[p,h]=g.useState(null),m=an(s),b=an(u),v=g.useRef(null),C=Fe(i,w=>h(w)),T=g.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;g.useEffect(()=>{if(o){let w=function(D){if(T.paused||!p)return;const H=D.target;p.contains(H)?v.current=H:ga(v.current,{select:!0})},E=function(D){if(T.paused||!p)return;const H=D.relatedTarget;H!==null&&(p.contains(H)||ga(v.current,{select:!0}))},N=function(D){if(document.activeElement===document.body)for(const G of D)G.removedNodes.length>0&&ga(p)};document.addEventListener("focusin",w),document.addEventListener("focusout",E);const M=new MutationObserver(N);return p&&M.observe(p,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",w),document.removeEventListener("focusout",E),M.disconnect()}}},[o,p,T.paused]),g.useEffect(()=>{if(p){Kv.add(T);const w=document.activeElement;if(!p.contains(w)){const N=new CustomEvent(_f,Vv);p.addEventListener(_f,m),p.dispatchEvent(N),N.defaultPrevented||(q_(J_(v0(p)),{select:!0}),document.activeElement===w&&ga(p))}return()=>{p.removeEventListener(_f,m),setTimeout(()=>{const N=new CustomEvent(Ef,Vv);p.addEventListener(Ef,b),p.dispatchEvent(N),N.defaultPrevented||ga(w??document.body,{select:!0}),p.removeEventListener(Ef,b),Kv.remove(T)},0)}}},[p,m,b,T]);const _=g.useCallback(w=>{if(!r&&!o||T.paused)return;const E=w.key==="Tab"&&!w.altKey&&!w.ctrlKey&&!w.metaKey,N=document.activeElement;if(E&&N){const M=w.currentTarget,[D,H]=X_(M);D&&H?!w.shiftKey&&N===H?(w.preventDefault(),r&&ga(D,{select:!0})):w.shiftKey&&N===D&&(w.preventDefault(),r&&ga(H,{select:!0})):N===M&&w.preventDefault()}},[r,o,T.paused]);return x.jsx(ke.div,{tabIndex:-1,...d,ref:C,onKeyDown:_})});hd.displayName=$_;function q_(n,{select:i=!1}={}){const r=document.activeElement;for(const o of n)if(ga(o,{select:i}),document.activeElement!==r)return}function X_(n){const i=v0(n),r=Fv(i,n),o=Fv(i.reverse(),n);return[r,o]}function v0(n){const i=[],r=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const s=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||s?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)i.push(r.currentNode);return i}function Fv(n,i){for(const r of n)if(!Q_(r,{upTo:i}))return r}function Q_(n,{upTo:i}){if(getComputedStyle(n).visibility==="hidden")return!0;for(;n;){if(i!==void 0&&n===i)return!1;if(getComputedStyle(n).display==="none")return!0;n=n.parentElement}return!1}function Z_(n){return n instanceof HTMLInputElement&&"select"in n}function ga(n,{select:i=!1}={}){if(n&&n.focus){const r=document.activeElement;n.focus({preventScroll:!0}),n!==r&&Z_(n)&&i&&n.select()}}var Kv=W_();function W_(){let n=[];return{add(i){const r=n[0];i!==r&&r?.pause(),n=Yv(n,i),n.unshift(i)},remove(i){n=Yv(n,i),n[0]?.resume()}}}function Yv(n,i){const r=[...n],o=r.indexOf(i);return o!==-1&&r.splice(o,1),r}function J_(n){return n.filter(i=>i.tagName!=="A")}var eE=id[" useId ".trim().toString()]||(()=>{}),tE=0;function Un(n){const[i,r]=g.useState(eE());return mt(()=>{r(o=>o??String(tE++))},[n]),n||(i?`radix-${i}`:"")}const nE=["top","right","bottom","left"],xa=Math.min,Pt=Math.max,ms=Math.round,Wo=Math.floor,gn=n=>({x:n,y:n}),aE={left:"right",right:"left",bottom:"top",top:"bottom"},iE={start:"end",end:"start"};function Gf(n,i,r){return Pt(n,xa(i,r))}function Bn(n,i){return typeof n=="function"?n(i):n}function Gn(n){return n.split("-")[0]}function ar(n){return n.split("-")[1]}function md(n){return n==="x"?"y":"x"}function gd(n){return n==="y"?"height":"width"}const rE=new Set(["top","bottom"]);function hn(n){return rE.has(Gn(n))?"y":"x"}function vd(n){return md(hn(n))}function lE(n,i,r){r===void 0&&(r=!1);const o=ar(n),s=vd(n),u=gd(s);let d=s==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return i.reference[u]>i.floating[u]&&(d=gs(d)),[d,gs(d)]}function oE(n){const i=gs(n);return[Vf(n),i,Vf(i)]}function Vf(n){return n.replace(/start|end/g,i=>iE[i])}const $v=["left","right"],qv=["right","left"],sE=["top","bottom"],cE=["bottom","top"];function uE(n,i,r){switch(n){case"top":case"bottom":return r?i?qv:$v:i?$v:qv;case"left":case"right":return i?sE:cE;default:return[]}}function fE(n,i,r,o){const s=ar(n);let u=uE(Gn(n),r==="start",o);return s&&(u=u.map(d=>d+"-"+s),i&&(u=u.concat(u.map(Vf)))),u}function gs(n){return n.replace(/left|right|bottom|top/g,i=>aE[i])}function dE(n){return{top:0,right:0,bottom:0,left:0,...n}}function y0(n){return typeof n!="number"?dE(n):{top:n,right:n,bottom:n,left:n}}function vs(n){const{x:i,y:r,width:o,height:s}=n;return{width:o,height:s,top:r,left:i,right:i+o,bottom:r+s,x:i,y:r}}function Xv(n,i,r){let{reference:o,floating:s}=n;const u=hn(i),d=vd(i),p=gd(d),h=Gn(i),m=u==="y",b=o.x+o.width/2-s.width/2,v=o.y+o.height/2-s.height/2,C=o[p]/2-s[p]/2;let T;switch(h){case"top":T={x:b,y:o.y-s.height};break;case"bottom":T={x:b,y:o.y+o.height};break;case"right":T={x:o.x+o.width,y:v};break;case"left":T={x:o.x-s.width,y:v};break;default:T={x:o.x,y:o.y}}switch(ar(i)){case"start":T[d]-=C*(r&&m?-1:1);break;case"end":T[d]+=C*(r&&m?-1:1);break}return T}const pE=async(n,i,r)=>{const{placement:o="bottom",strategy:s="absolute",middleware:u=[],platform:d}=r,p=u.filter(Boolean),h=await(d.isRTL==null?void 0:d.isRTL(i));let m=await d.getElementRects({reference:n,floating:i,strategy:s}),{x:b,y:v}=Xv(m,o,h),C=o,T={},_=0;for(let w=0;w<p.length;w++){const{name:E,fn:N}=p[w],{x:M,y:D,data:H,reset:G}=await N({x:b,y:v,initialPlacement:o,placement:C,strategy:s,middlewareData:T,rects:m,platform:d,elements:{reference:n,floating:i}});b=M??b,v=D??v,T={...T,[E]:{...T[E],...H}},G&&_<=50&&(_++,typeof G=="object"&&(G.placement&&(C=G.placement),G.rects&&(m=G.rects===!0?await d.getElementRects({reference:n,floating:i,strategy:s}):G.rects),{x:b,y:v}=Xv(m,C,h)),w=-1)}return{x:b,y:v,placement:C,strategy:s,middlewareData:T}};async function pl(n,i){var r;i===void 0&&(i={});const{x:o,y:s,platform:u,rects:d,elements:p,strategy:h}=n,{boundary:m="clippingAncestors",rootBoundary:b="viewport",elementContext:v="floating",altBoundary:C=!1,padding:T=0}=Bn(i,n),_=y0(T),E=p[C?v==="floating"?"reference":"floating":v],N=vs(await u.getClippingRect({element:(r=await(u.isElement==null?void 0:u.isElement(E)))==null||r?E:E.contextElement||await(u.getDocumentElement==null?void 0:u.getDocumentElement(p.floating)),boundary:m,rootBoundary:b,strategy:h})),M=v==="floating"?{x:o,y:s,width:d.floating.width,height:d.floating.height}:d.reference,D=await(u.getOffsetParent==null?void 0:u.getOffsetParent(p.floating)),H=await(u.isElement==null?void 0:u.isElement(D))?await(u.getScale==null?void 0:u.getScale(D))||{x:1,y:1}:{x:1,y:1},G=vs(u.convertOffsetParentRelativeRectToViewportRelativeRect?await u.convertOffsetParentRelativeRectToViewportRelativeRect({elements:p,rect:M,offsetParent:D,strategy:h}):M);return{top:(N.top-G.top+_.top)/H.y,bottom:(G.bottom-N.bottom+_.bottom)/H.y,left:(N.left-G.left+_.left)/H.x,right:(G.right-N.right+_.right)/H.x}}const hE=n=>({name:"arrow",options:n,async fn(i){const{x:r,y:o,placement:s,rects:u,platform:d,elements:p,middlewareData:h}=i,{element:m,padding:b=0}=Bn(n,i)||{};if(m==null)return{};const v=y0(b),C={x:r,y:o},T=vd(s),_=gd(T),w=await d.getDimensions(m),E=T==="y",N=E?"top":"left",M=E?"bottom":"right",D=E?"clientHeight":"clientWidth",H=u.reference[_]+u.reference[T]-C[T]-u.floating[_],G=C[T]-u.reference[T],W=await(d.getOffsetParent==null?void 0:d.getOffsetParent(m));let U=W?W[D]:0;(!U||!await(d.isElement==null?void 0:d.isElement(W)))&&(U=p.floating[D]||u.floating[_]);const Y=H/2-G/2,J=U/2-w[_]/2-1,te=xa(v[N],J),ae=xa(v[M],J),ne=te,re=U-w[_]-ae,ie=U/2-w[_]/2+Y,ue=Gf(ne,ie,re),L=!h.arrow&&ar(s)!=null&&ie!==ue&&u.reference[_]/2-(ie<ne?te:ae)-w[_]/2<0,K=L?ie<ne?ie-ne:ie-re:0;return{[T]:C[T]+K,data:{[T]:ue,centerOffset:ie-ue-K,...L&&{alignmentOffset:K}},reset:L}}}),mE=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(i){var r,o;const{placement:s,middlewareData:u,rects:d,initialPlacement:p,platform:h,elements:m}=i,{mainAxis:b=!0,crossAxis:v=!0,fallbackPlacements:C,fallbackStrategy:T="bestFit",fallbackAxisSideDirection:_="none",flipAlignment:w=!0,...E}=Bn(n,i);if((r=u.arrow)!=null&&r.alignmentOffset)return{};const N=Gn(s),M=hn(p),D=Gn(p)===p,H=await(h.isRTL==null?void 0:h.isRTL(m.floating)),G=C||(D||!w?[gs(p)]:oE(p)),W=_!=="none";!C&&W&&G.push(...fE(p,w,_,H));const U=[p,...G],Y=await pl(i,E),J=[];let te=((o=u.flip)==null?void 0:o.overflows)||[];if(b&&J.push(Y[N]),v){const ie=lE(s,d,H);J.push(Y[ie[0]],Y[ie[1]])}if(te=[...te,{placement:s,overflows:J}],!J.every(ie=>ie<=0)){var ae,ne;const ie=(((ae=u.flip)==null?void 0:ae.index)||0)+1,ue=U[ie];if(ue&&(!(v==="alignment"?M!==hn(ue):!1)||te.every(I=>hn(I.placement)===M?I.overflows[0]>0:!0)))return{data:{index:ie,overflows:te},reset:{placement:ue}};let L=(ne=te.filter(K=>K.overflows[0]<=0).sort((K,I)=>K.overflows[1]-I.overflows[1])[0])==null?void 0:ne.placement;if(!L)switch(T){case"bestFit":{var re;const K=(re=te.filter(I=>{if(W){const Z=hn(I.placement);return Z===M||Z==="y"}return!0}).map(I=>[I.placement,I.overflows.filter(Z=>Z>0).reduce((Z,pe)=>Z+pe,0)]).sort((I,Z)=>I[1]-Z[1])[0])==null?void 0:re[0];K&&(L=K);break}case"initialPlacement":L=p;break}if(s!==L)return{reset:{placement:L}}}return{}}}};function Qv(n,i){return{top:n.top-i.height,right:n.right-i.width,bottom:n.bottom-i.height,left:n.left-i.width}}function Zv(n){return nE.some(i=>n[i]>=0)}const gE=function(n){return n===void 0&&(n={}),{name:"hide",options:n,async fn(i){const{rects:r}=i,{strategy:o="referenceHidden",...s}=Bn(n,i);switch(o){case"referenceHidden":{const u=await pl(i,{...s,elementContext:"reference"}),d=Qv(u,r.reference);return{data:{referenceHiddenOffsets:d,referenceHidden:Zv(d)}}}case"escaped":{const u=await pl(i,{...s,altBoundary:!0}),d=Qv(u,r.floating);return{data:{escapedOffsets:d,escaped:Zv(d)}}}default:return{}}}}},x0=new Set(["left","top"]);async function vE(n,i){const{placement:r,platform:o,elements:s}=n,u=await(o.isRTL==null?void 0:o.isRTL(s.floating)),d=Gn(r),p=ar(r),h=hn(r)==="y",m=x0.has(d)?-1:1,b=u&&h?-1:1,v=Bn(i,n);let{mainAxis:C,crossAxis:T,alignmentAxis:_}=typeof v=="number"?{mainAxis:v,crossAxis:0,alignmentAxis:null}:{mainAxis:v.mainAxis||0,crossAxis:v.crossAxis||0,alignmentAxis:v.alignmentAxis};return p&&typeof _=="number"&&(T=p==="end"?_*-1:_),h?{x:T*b,y:C*m}:{x:C*m,y:T*b}}const yE=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(i){var r,o;const{x:s,y:u,placement:d,middlewareData:p}=i,h=await vE(i,n);return d===((r=p.offset)==null?void 0:r.placement)&&(o=p.arrow)!=null&&o.alignmentOffset?{}:{x:s+h.x,y:u+h.y,data:{...h,placement:d}}}}},xE=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(i){const{x:r,y:o,placement:s}=i,{mainAxis:u=!0,crossAxis:d=!1,limiter:p={fn:E=>{let{x:N,y:M}=E;return{x:N,y:M}}},...h}=Bn(n,i),m={x:r,y:o},b=await pl(i,h),v=hn(Gn(s)),C=md(v);let T=m[C],_=m[v];if(u){const E=C==="y"?"top":"left",N=C==="y"?"bottom":"right",M=T+b[E],D=T-b[N];T=Gf(M,T,D)}if(d){const E=v==="y"?"top":"left",N=v==="y"?"bottom":"right",M=_+b[E],D=_-b[N];_=Gf(M,_,D)}const w=p.fn({...i,[C]:T,[v]:_});return{...w,data:{x:w.x-r,y:w.y-o,enabled:{[C]:u,[v]:d}}}}}},bE=function(n){return n===void 0&&(n={}),{options:n,fn(i){const{x:r,y:o,placement:s,rects:u,middlewareData:d}=i,{offset:p=0,mainAxis:h=!0,crossAxis:m=!0}=Bn(n,i),b={x:r,y:o},v=hn(s),C=md(v);let T=b[C],_=b[v];const w=Bn(p,i),E=typeof w=="number"?{mainAxis:w,crossAxis:0}:{mainAxis:0,crossAxis:0,...w};if(h){const D=C==="y"?"height":"width",H=u.reference[C]-u.floating[D]+E.mainAxis,G=u.reference[C]+u.reference[D]-E.mainAxis;T<H?T=H:T>G&&(T=G)}if(m){var N,M;const D=C==="y"?"width":"height",H=x0.has(Gn(s)),G=u.reference[v]-u.floating[D]+(H&&((N=d.offset)==null?void 0:N[v])||0)+(H?0:E.crossAxis),W=u.reference[v]+u.reference[D]+(H?0:((M=d.offset)==null?void 0:M[v])||0)-(H?E.crossAxis:0);_<G?_=G:_>W&&(_=W)}return{[C]:T,[v]:_}}}},SE=function(n){return n===void 0&&(n={}),{name:"size",options:n,async fn(i){var r,o;const{placement:s,rects:u,platform:d,elements:p}=i,{apply:h=()=>{},...m}=Bn(n,i),b=await pl(i,m),v=Gn(s),C=ar(s),T=hn(s)==="y",{width:_,height:w}=u.floating;let E,N;v==="top"||v==="bottom"?(E=v,N=C===(await(d.isRTL==null?void 0:d.isRTL(p.floating))?"start":"end")?"left":"right"):(N=v,E=C==="end"?"top":"bottom");const M=w-b.top-b.bottom,D=_-b.left-b.right,H=xa(w-b[E],M),G=xa(_-b[N],D),W=!i.middlewareData.shift;let U=H,Y=G;if((r=i.middlewareData.shift)!=null&&r.enabled.x&&(Y=D),(o=i.middlewareData.shift)!=null&&o.enabled.y&&(U=M),W&&!C){const te=Pt(b.left,0),ae=Pt(b.right,0),ne=Pt(b.top,0),re=Pt(b.bottom,0);T?Y=_-2*(te!==0||ae!==0?te+ae:Pt(b.left,b.right)):U=w-2*(ne!==0||re!==0?ne+re:Pt(b.top,b.bottom))}await h({...i,availableWidth:Y,availableHeight:U});const J=await d.getDimensions(p.floating);return _!==J.width||w!==J.height?{reset:{rects:!0}}:{}}}};function As(){return typeof window<"u"}function ir(n){return b0(n)?(n.nodeName||"").toLowerCase():"#document"}function Ht(n){var i;return(n==null||(i=n.ownerDocument)==null?void 0:i.defaultView)||window}function xn(n){var i;return(i=(b0(n)?n.ownerDocument:n.document)||window.document)==null?void 0:i.documentElement}function b0(n){return As()?n instanceof Node||n instanceof Ht(n).Node:!1}function rn(n){return As()?n instanceof Element||n instanceof Ht(n).Element:!1}function vn(n){return As()?n instanceof HTMLElement||n instanceof Ht(n).HTMLElement:!1}function Wv(n){return!As()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof Ht(n).ShadowRoot}const CE=new Set(["inline","contents"]);function Tl(n){const{overflow:i,overflowX:r,overflowY:o,display:s}=ln(n);return/auto|scroll|overlay|hidden|clip/.test(i+o+r)&&!CE.has(s)}const wE=new Set(["table","td","th"]);function TE(n){return wE.has(ir(n))}const _E=[":popover-open",":modal"];function Ns(n){return _E.some(i=>{try{return n.matches(i)}catch{return!1}})}const EE=["transform","translate","scale","rotate","perspective"],RE=["transform","translate","scale","rotate","perspective","filter"],AE=["paint","layout","strict","content"];function yd(n){const i=xd(),r=rn(n)?ln(n):n;return EE.some(o=>r[o]?r[o]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!i&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!i&&(r.filter?r.filter!=="none":!1)||RE.some(o=>(r.willChange||"").includes(o))||AE.some(o=>(r.contain||"").includes(o))}function NE(n){let i=ba(n);for(;vn(i)&&!qi(i);){if(yd(i))return i;if(Ns(i))return null;i=ba(i)}return null}function xd(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const OE=new Set(["html","body","#document"]);function qi(n){return OE.has(ir(n))}function ln(n){return Ht(n).getComputedStyle(n)}function Os(n){return rn(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.scrollX,scrollTop:n.scrollY}}function ba(n){if(ir(n)==="html")return n;const i=n.assignedSlot||n.parentNode||Wv(n)&&n.host||xn(n);return Wv(i)?i.host:i}function S0(n){const i=ba(n);return qi(i)?n.ownerDocument?n.ownerDocument.body:n.body:vn(i)&&Tl(i)?i:S0(i)}function hl(n,i,r){var o;i===void 0&&(i=[]),r===void 0&&(r=!0);const s=S0(n),u=s===((o=n.ownerDocument)==null?void 0:o.body),d=Ht(s);if(u){const p=Ff(d);return i.concat(d,d.visualViewport||[],Tl(s)?s:[],p&&r?hl(p):[])}return i.concat(s,hl(s,[],r))}function Ff(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function C0(n){const i=ln(n);let r=parseFloat(i.width)||0,o=parseFloat(i.height)||0;const s=vn(n),u=s?n.offsetWidth:r,d=s?n.offsetHeight:o,p=ms(r)!==u||ms(o)!==d;return p&&(r=u,o=d),{width:r,height:o,$:p}}function bd(n){return rn(n)?n:n.contextElement}function Ki(n){const i=bd(n);if(!vn(i))return gn(1);const r=i.getBoundingClientRect(),{width:o,height:s,$:u}=C0(i);let d=(u?ms(r.width):r.width)/o,p=(u?ms(r.height):r.height)/s;return(!d||!Number.isFinite(d))&&(d=1),(!p||!Number.isFinite(p))&&(p=1),{x:d,y:p}}const ME=gn(0);function w0(n){const i=Ht(n);return!xd()||!i.visualViewport?ME:{x:i.visualViewport.offsetLeft,y:i.visualViewport.offsetTop}}function DE(n,i,r){return i===void 0&&(i=!1),!r||i&&r!==Ht(n)?!1:i}function Xa(n,i,r,o){i===void 0&&(i=!1),r===void 0&&(r=!1);const s=n.getBoundingClientRect(),u=bd(n);let d=gn(1);i&&(o?rn(o)&&(d=Ki(o)):d=Ki(n));const p=DE(u,r,o)?w0(u):gn(0);let h=(s.left+p.x)/d.x,m=(s.top+p.y)/d.y,b=s.width/d.x,v=s.height/d.y;if(u){const C=Ht(u),T=o&&rn(o)?Ht(o):o;let _=C,w=Ff(_);for(;w&&o&&T!==_;){const E=Ki(w),N=w.getBoundingClientRect(),M=ln(w),D=N.left+(w.clientLeft+parseFloat(M.paddingLeft))*E.x,H=N.top+(w.clientTop+parseFloat(M.paddingTop))*E.y;h*=E.x,m*=E.y,b*=E.x,v*=E.y,h+=D,m+=H,_=Ht(w),w=Ff(_)}}return vs({width:b,height:v,x:h,y:m})}function Ms(n,i){const r=Os(n).scrollLeft;return i?i.left+r:Xa(xn(n)).left+r}function T0(n,i){const r=n.getBoundingClientRect(),o=r.left+i.scrollLeft-Ms(n,r),s=r.top+i.scrollTop;return{x:o,y:s}}function LE(n){let{elements:i,rect:r,offsetParent:o,strategy:s}=n;const u=s==="fixed",d=xn(o),p=i?Ns(i.floating):!1;if(o===d||p&&u)return r;let h={scrollLeft:0,scrollTop:0},m=gn(1);const b=gn(0),v=vn(o);if((v||!v&&!u)&&((ir(o)!=="body"||Tl(d))&&(h=Os(o)),vn(o))){const T=Xa(o);m=Ki(o),b.x=T.x+o.clientLeft,b.y=T.y+o.clientTop}const C=d&&!v&&!u?T0(d,h):gn(0);return{width:r.width*m.x,height:r.height*m.y,x:r.x*m.x-h.scrollLeft*m.x+b.x+C.x,y:r.y*m.y-h.scrollTop*m.y+b.y+C.y}}function jE(n){return Array.from(n.getClientRects())}function kE(n){const i=xn(n),r=Os(n),o=n.ownerDocument.body,s=Pt(i.scrollWidth,i.clientWidth,o.scrollWidth,o.clientWidth),u=Pt(i.scrollHeight,i.clientHeight,o.scrollHeight,o.clientHeight);let d=-r.scrollLeft+Ms(n);const p=-r.scrollTop;return ln(o).direction==="rtl"&&(d+=Pt(i.clientWidth,o.clientWidth)-s),{width:s,height:u,x:d,y:p}}const Jv=25;function zE(n,i){const r=Ht(n),o=xn(n),s=r.visualViewport;let u=o.clientWidth,d=o.clientHeight,p=0,h=0;if(s){u=s.width,d=s.height;const b=xd();(!b||b&&i==="fixed")&&(p=s.offsetLeft,h=s.offsetTop)}const m=Ms(o);if(m<=0){const b=o.ownerDocument,v=b.body,C=getComputedStyle(v),T=b.compatMode==="CSS1Compat"&&parseFloat(C.marginLeft)+parseFloat(C.marginRight)||0,_=Math.abs(o.clientWidth-v.clientWidth-T);_<=Jv&&(u-=_)}else m<=Jv&&(u+=m);return{width:u,height:d,x:p,y:h}}const IE=new Set(["absolute","fixed"]);function PE(n,i){const r=Xa(n,!0,i==="fixed"),o=r.top+n.clientTop,s=r.left+n.clientLeft,u=vn(n)?Ki(n):gn(1),d=n.clientWidth*u.x,p=n.clientHeight*u.y,h=s*u.x,m=o*u.y;return{width:d,height:p,x:h,y:m}}function ey(n,i,r){let o;if(i==="viewport")o=zE(n,r);else if(i==="document")o=kE(xn(n));else if(rn(i))o=PE(i,r);else{const s=w0(n);o={x:i.x-s.x,y:i.y-s.y,width:i.width,height:i.height}}return vs(o)}function _0(n,i){const r=ba(n);return r===i||!rn(r)||qi(r)?!1:ln(r).position==="fixed"||_0(r,i)}function HE(n,i){const r=i.get(n);if(r)return r;let o=hl(n,[],!1).filter(p=>rn(p)&&ir(p)!=="body"),s=null;const u=ln(n).position==="fixed";let d=u?ba(n):n;for(;rn(d)&&!qi(d);){const p=ln(d),h=yd(d);!h&&p.position==="fixed"&&(s=null),(u?!h&&!s:!h&&p.position==="static"&&!!s&&IE.has(s.position)||Tl(d)&&!h&&_0(n,d))?o=o.filter(b=>b!==d):s=p,d=ba(d)}return i.set(n,o),o}function UE(n){let{element:i,boundary:r,rootBoundary:o,strategy:s}=n;const d=[...r==="clippingAncestors"?Ns(i)?[]:HE(i,this._c):[].concat(r),o],p=d[0],h=d.reduce((m,b)=>{const v=ey(i,b,s);return m.top=Pt(v.top,m.top),m.right=xa(v.right,m.right),m.bottom=xa(v.bottom,m.bottom),m.left=Pt(v.left,m.left),m},ey(i,p,s));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function BE(n){const{width:i,height:r}=C0(n);return{width:i,height:r}}function GE(n,i,r){const o=vn(i),s=xn(i),u=r==="fixed",d=Xa(n,!0,u,i);let p={scrollLeft:0,scrollTop:0};const h=gn(0);function m(){h.x=Ms(s)}if(o||!o&&!u)if((ir(i)!=="body"||Tl(s))&&(p=Os(i)),o){const T=Xa(i,!0,u,i);h.x=T.x+i.clientLeft,h.y=T.y+i.clientTop}else s&&m();u&&!o&&s&&m();const b=s&&!o&&!u?T0(s,p):gn(0),v=d.left+p.scrollLeft-h.x-b.x,C=d.top+p.scrollTop-h.y-b.y;return{x:v,y:C,width:d.width,height:d.height}}function Rf(n){return ln(n).position==="static"}function ty(n,i){if(!vn(n)||ln(n).position==="fixed")return null;if(i)return i(n);let r=n.offsetParent;return xn(n)===r&&(r=r.ownerDocument.body),r}function E0(n,i){const r=Ht(n);if(Ns(n))return r;if(!vn(n)){let s=ba(n);for(;s&&!qi(s);){if(rn(s)&&!Rf(s))return s;s=ba(s)}return r}let o=ty(n,i);for(;o&&TE(o)&&Rf(o);)o=ty(o,i);return o&&qi(o)&&Rf(o)&&!yd(o)?r:o||NE(n)||r}const VE=async function(n){const i=this.getOffsetParent||E0,r=this.getDimensions,o=await r(n.floating);return{reference:GE(n.reference,await i(n.floating),n.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function FE(n){return ln(n).direction==="rtl"}const KE={convertOffsetParentRelativeRectToViewportRelativeRect:LE,getDocumentElement:xn,getClippingRect:UE,getOffsetParent:E0,getElementRects:VE,getClientRects:jE,getDimensions:BE,getScale:Ki,isElement:rn,isRTL:FE};function R0(n,i){return n.x===i.x&&n.y===i.y&&n.width===i.width&&n.height===i.height}function YE(n,i){let r=null,o;const s=xn(n);function u(){var p;clearTimeout(o),(p=r)==null||p.disconnect(),r=null}function d(p,h){p===void 0&&(p=!1),h===void 0&&(h=1),u();const m=n.getBoundingClientRect(),{left:b,top:v,width:C,height:T}=m;if(p||i(),!C||!T)return;const _=Wo(v),w=Wo(s.clientWidth-(b+C)),E=Wo(s.clientHeight-(v+T)),N=Wo(b),D={rootMargin:-_+"px "+-w+"px "+-E+"px "+-N+"px",threshold:Pt(0,xa(1,h))||1};let H=!0;function G(W){const U=W[0].intersectionRatio;if(U!==h){if(!H)return d();U?d(!1,U):o=setTimeout(()=>{d(!1,1e-7)},1e3)}U===1&&!R0(m,n.getBoundingClientRect())&&d(),H=!1}try{r=new IntersectionObserver(G,{...D,root:s.ownerDocument})}catch{r=new IntersectionObserver(G,D)}r.observe(n)}return d(!0),u}function $E(n,i,r,o){o===void 0&&(o={});const{ancestorScroll:s=!0,ancestorResize:u=!0,elementResize:d=typeof ResizeObserver=="function",layoutShift:p=typeof IntersectionObserver=="function",animationFrame:h=!1}=o,m=bd(n),b=s||u?[...m?hl(m):[],...hl(i)]:[];b.forEach(N=>{s&&N.addEventListener("scroll",r,{passive:!0}),u&&N.addEventListener("resize",r)});const v=m&&p?YE(m,r):null;let C=-1,T=null;d&&(T=new ResizeObserver(N=>{let[M]=N;M&&M.target===m&&T&&(T.unobserve(i),cancelAnimationFrame(C),C=requestAnimationFrame(()=>{var D;(D=T)==null||D.observe(i)})),r()}),m&&!h&&T.observe(m),T.observe(i));let _,w=h?Xa(n):null;h&&E();function E(){const N=Xa(n);w&&!R0(w,N)&&r(),w=N,_=requestAnimationFrame(E)}return r(),()=>{var N;b.forEach(M=>{s&&M.removeEventListener("scroll",r),u&&M.removeEventListener("resize",r)}),v?.(),(N=T)==null||N.disconnect(),T=null,h&&cancelAnimationFrame(_)}}const qE=yE,XE=xE,QE=mE,ZE=SE,WE=gE,ny=hE,JE=bE,e2=(n,i,r)=>{const o=new Map,s={platform:KE,...r},u={...s.platform,_c:o};return pE(n,i,{...s,platform:u})};var t2=typeof document<"u",n2=function(){},ls=t2?g.useLayoutEffect:n2;function ys(n,i){if(n===i)return!0;if(typeof n!=typeof i)return!1;if(typeof n=="function"&&n.toString()===i.toString())return!0;let r,o,s;if(n&&i&&typeof n=="object"){if(Array.isArray(n)){if(r=n.length,r!==i.length)return!1;for(o=r;o--!==0;)if(!ys(n[o],i[o]))return!1;return!0}if(s=Object.keys(n),r=s.length,r!==Object.keys(i).length)return!1;for(o=r;o--!==0;)if(!{}.hasOwnProperty.call(i,s[o]))return!1;for(o=r;o--!==0;){const u=s[o];if(!(u==="_owner"&&n.$$typeof)&&!ys(n[u],i[u]))return!1}return!0}return n!==n&&i!==i}function A0(n){return typeof window>"u"?1:(n.ownerDocument.defaultView||window).devicePixelRatio||1}function ay(n,i){const r=A0(n);return Math.round(i*r)/r}function Af(n){const i=g.useRef(n);return ls(()=>{i.current=n}),i}function a2(n){n===void 0&&(n={});const{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:s,elements:{reference:u,floating:d}={},transform:p=!0,whileElementsMounted:h,open:m}=n,[b,v]=g.useState({x:0,y:0,strategy:r,placement:i,middlewareData:{},isPositioned:!1}),[C,T]=g.useState(o);ys(C,o)||T(o);const[_,w]=g.useState(null),[E,N]=g.useState(null),M=g.useCallback(I=>{I!==W.current&&(W.current=I,w(I))},[]),D=g.useCallback(I=>{I!==U.current&&(U.current=I,N(I))},[]),H=u||_,G=d||E,W=g.useRef(null),U=g.useRef(null),Y=g.useRef(b),J=h!=null,te=Af(h),ae=Af(s),ne=Af(m),re=g.useCallback(()=>{if(!W.current||!U.current)return;const I={placement:i,strategy:r,middleware:C};ae.current&&(I.platform=ae.current),e2(W.current,U.current,I).then(Z=>{const pe={...Z,isPositioned:ne.current!==!1};ie.current&&!ys(Y.current,pe)&&(Y.current=pe,wl.flushSync(()=>{v(pe)}))})},[C,i,r,ae,ne]);ls(()=>{m===!1&&Y.current.isPositioned&&(Y.current.isPositioned=!1,v(I=>({...I,isPositioned:!1})))},[m]);const ie=g.useRef(!1);ls(()=>(ie.current=!0,()=>{ie.current=!1}),[]),ls(()=>{if(H&&(W.current=H),G&&(U.current=G),H&&G){if(te.current)return te.current(H,G,re);re()}},[H,G,re,te,J]);const ue=g.useMemo(()=>({reference:W,floating:U,setReference:M,setFloating:D}),[M,D]),L=g.useMemo(()=>({reference:H,floating:G}),[H,G]),K=g.useMemo(()=>{const I={position:r,left:0,top:0};if(!L.floating)return I;const Z=ay(L.floating,b.x),pe=ay(L.floating,b.y);return p?{...I,transform:"translate("+Z+"px, "+pe+"px)",...A0(L.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:Z,top:pe}},[r,p,L.floating,b.x,b.y]);return g.useMemo(()=>({...b,update:re,refs:ue,elements:L,floatingStyles:K}),[b,re,ue,L,K])}const i2=n=>{function i(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:n,fn(r){const{element:o,padding:s}=typeof n=="function"?n(r):n;return o&&i(o)?o.current!=null?ny({element:o.current,padding:s}).fn(r):{}:o?ny({element:o,padding:s}).fn(r):{}}}},r2=(n,i)=>({...qE(n),options:[n,i]}),l2=(n,i)=>({...XE(n),options:[n,i]}),o2=(n,i)=>({...JE(n),options:[n,i]}),s2=(n,i)=>({...QE(n),options:[n,i]}),c2=(n,i)=>({...ZE(n),options:[n,i]}),u2=(n,i)=>({...WE(n),options:[n,i]}),f2=(n,i)=>({...i2(n),options:[n,i]});var d2="Arrow",N0=g.forwardRef((n,i)=>{const{children:r,width:o=10,height:s=5,...u}=n;return x.jsx(ke.svg,{...u,ref:i,width:o,height:s,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:n.asChild?r:x.jsx("polygon",{points:"0,0 30,0 15,10"})})});N0.displayName=d2;var p2=N0;function h2(n){const[i,r]=g.useState(void 0);return mt(()=>{if(n){r({width:n.offsetWidth,height:n.offsetHeight});const o=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const u=s[0];let d,p;if("borderBoxSize"in u){const h=u.borderBoxSize,m=Array.isArray(h)?h[0]:h;d=m.inlineSize,p=m.blockSize}else d=n.offsetWidth,p=n.offsetHeight;r({width:d,height:p})});return o.observe(n,{box:"border-box"}),()=>o.unobserve(n)}else r(void 0)},[n]),i}var Sd="Popper",[O0,rr]=Wa(Sd),[m2,M0]=O0(Sd),D0=n=>{const{__scopePopper:i,children:r}=n,[o,s]=g.useState(null);return x.jsx(m2,{scope:i,anchor:o,onAnchorChange:s,children:r})};D0.displayName=Sd;var L0="PopperAnchor",j0=g.forwardRef((n,i)=>{const{__scopePopper:r,virtualRef:o,...s}=n,u=M0(L0,r),d=g.useRef(null),p=Fe(i,d),h=g.useRef(null);return g.useEffect(()=>{const m=h.current;h.current=o?.current||d.current,m!==h.current&&u.onAnchorChange(h.current)}),o?null:x.jsx(ke.div,{...s,ref:p})});j0.displayName=L0;var Cd="PopperContent",[g2,v2]=O0(Cd),k0=g.forwardRef((n,i)=>{const{__scopePopper:r,side:o="bottom",sideOffset:s=0,align:u="center",alignOffset:d=0,arrowPadding:p=0,avoidCollisions:h=!0,collisionBoundary:m=[],collisionPadding:b=0,sticky:v="partial",hideWhenDetached:C=!1,updatePositionStrategy:T="optimized",onPlaced:_,...w}=n,E=M0(Cd,r),[N,M]=g.useState(null),D=Fe(i,X=>M(X)),[H,G]=g.useState(null),W=h2(H),U=W?.width??0,Y=W?.height??0,J=o+(u!=="center"?"-"+u:""),te=typeof b=="number"?b:{top:0,right:0,bottom:0,left:0,...b},ae=Array.isArray(m)?m:[m],ne=ae.length>0,re={padding:te,boundary:ae.filter(x2),altBoundary:ne},{refs:ie,floatingStyles:ue,placement:L,isPositioned:K,middlewareData:I}=a2({strategy:"fixed",placement:J,whileElementsMounted:(...X)=>$E(...X,{animationFrame:T==="always"}),elements:{reference:E.anchor},middleware:[r2({mainAxis:s+Y,alignmentAxis:d}),h&&l2({mainAxis:!0,crossAxis:!1,limiter:v==="partial"?o2():void 0,...re}),h&&s2({...re}),c2({...re,apply:({elements:X,rects:ye,availableWidth:be,availableHeight:Ee})=>{const{width:Me,height:ze}=ye.reference,yt=X.floating.style;yt.setProperty("--radix-popper-available-width",`${be}px`),yt.setProperty("--radix-popper-available-height",`${Ee}px`),yt.setProperty("--radix-popper-anchor-width",`${Me}px`),yt.setProperty("--radix-popper-anchor-height",`${ze}px`)}}),H&&f2({element:H,padding:p}),b2({arrowWidth:U,arrowHeight:Y}),C&&u2({strategy:"referenceHidden",...re})]}),[Z,pe]=P0(L),R=an(_);mt(()=>{K&&R?.()},[K,R]);const V=I.arrow?.x,Q=I.arrow?.y,ee=I.arrow?.centerOffset!==0,[fe,me]=g.useState();return mt(()=>{N&&me(window.getComputedStyle(N).zIndex)},[N]),x.jsx("div",{ref:ie.setFloating,"data-radix-popper-content-wrapper":"",style:{...ue,transform:K?ue.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:fe,"--radix-popper-transform-origin":[I.transformOrigin?.x,I.transformOrigin?.y].join(" "),...I.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:n.dir,children:x.jsx(g2,{scope:r,placedSide:Z,onArrowChange:G,arrowX:V,arrowY:Q,shouldHideArrow:ee,children:x.jsx(ke.div,{"data-side":Z,"data-align":pe,...w,ref:D,style:{...w.style,animation:K?void 0:"none"}})})})});k0.displayName=Cd;var z0="PopperArrow",y2={top:"bottom",right:"left",bottom:"top",left:"right"},I0=g.forwardRef(function(i,r){const{__scopePopper:o,...s}=i,u=v2(z0,o),d=y2[u.placedSide];return x.jsx("span",{ref:u.onArrowChange,style:{position:"absolute",left:u.arrowX,top:u.arrowY,[d]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[u.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[u.placedSide],visibility:u.shouldHideArrow?"hidden":void 0},children:x.jsx(p2,{...s,ref:r,style:{...s.style,display:"block"}})})});I0.displayName=z0;function x2(n){return n!==null}var b2=n=>({name:"transformOrigin",options:n,fn(i){const{placement:r,rects:o,middlewareData:s}=i,d=s.arrow?.centerOffset!==0,p=d?0:n.arrowWidth,h=d?0:n.arrowHeight,[m,b]=P0(r),v={start:"0%",center:"50%",end:"100%"}[b],C=(s.arrow?.x??0)+p/2,T=(s.arrow?.y??0)+h/2;let _="",w="";return m==="bottom"?(_=d?v:`${C}px`,w=`${-h}px`):m==="top"?(_=d?v:`${C}px`,w=`${o.floating.height+h}px`):m==="right"?(_=`${-h}px`,w=d?v:`${T}px`):m==="left"&&(_=`${o.floating.width+h}px`,w=d?v:`${T}px`),{data:{x:_,y:w}}}});function P0(n){const[i,r="center"]=n.split("-");return[i,r]}var Ds=D0,wd=j0,Td=k0,_d=I0,S2="Portal",Ls=g.forwardRef((n,i)=>{const{container:r,...o}=n,[s,u]=g.useState(!1);mt(()=>u(!0),[]);const d=r||s&&globalThis?.document?.body;return d?kw.createPortal(x.jsx(ke.div,{...o,ref:i}),d):null});Ls.displayName=S2;function C2(n,i){return g.useReducer((r,o)=>i[r][o]??r,n)}var Ja=n=>{const{present:i,children:r}=n,o=w2(i),s=typeof r=="function"?r({present:o.isPresent}):g.Children.only(r),u=Fe(o.ref,T2(s));return typeof r=="function"||o.isPresent?g.cloneElement(s,{ref:u}):null};Ja.displayName="Presence";function w2(n){const[i,r]=g.useState(),o=g.useRef(null),s=g.useRef(n),u=g.useRef("none"),d=n?"mounted":"unmounted",[p,h]=C2(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return g.useEffect(()=>{const m=Jo(o.current);u.current=p==="mounted"?m:"none"},[p]),mt(()=>{const m=o.current,b=s.current;if(b!==n){const C=u.current,T=Jo(m);n?h("MOUNT"):T==="none"||m?.display==="none"?h("UNMOUNT"):h(b&&C!==T?"ANIMATION_OUT":"UNMOUNT"),s.current=n}},[n,h]),mt(()=>{if(i){let m;const b=i.ownerDocument.defaultView??window,v=T=>{const w=Jo(o.current).includes(CSS.escape(T.animationName));if(T.target===i&&w&&(h("ANIMATION_END"),!s.current)){const E=i.style.animationFillMode;i.style.animationFillMode="forwards",m=b.setTimeout(()=>{i.style.animationFillMode==="forwards"&&(i.style.animationFillMode=E)})}},C=T=>{T.target===i&&(u.current=Jo(o.current))};return i.addEventListener("animationstart",C),i.addEventListener("animationcancel",v),i.addEventListener("animationend",v),()=>{b.clearTimeout(m),i.removeEventListener("animationstart",C),i.removeEventListener("animationcancel",v),i.removeEventListener("animationend",v)}}else h("ANIMATION_END")},[i,h]),{isPresent:["mounted","unmountSuspended"].includes(p),ref:g.useCallback(m=>{o.current=m?getComputedStyle(m):null,r(m)},[])}}function Jo(n){return n?.animationName||"none"}function T2(n){let i=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning;return r?n.ref:(i=Object.getOwnPropertyDescriptor(n,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning,r?n.props.ref:n.props.ref||n.ref)}var Nf="rovingFocusGroup.onEntryFocus",_2={bubbles:!1,cancelable:!0},_l="RovingFocusGroup",[Kf,H0,E2]=dd(_l),[R2,U0]=Wa(_l,[E2]),[A2,N2]=R2(_l),B0=g.forwardRef((n,i)=>x.jsx(Kf.Provider,{scope:n.__scopeRovingFocusGroup,children:x.jsx(Kf.Slot,{scope:n.__scopeRovingFocusGroup,children:x.jsx(O2,{...n,ref:i})})}));B0.displayName=_l;var O2=g.forwardRef((n,i)=>{const{__scopeRovingFocusGroup:r,orientation:o,loop:s=!1,dir:u,currentTabStopId:d,defaultCurrentTabStopId:p,onCurrentTabStopIdChange:h,onEntryFocus:m,preventScrollOnEntryFocus:b=!1,...v}=n,C=g.useRef(null),T=Fe(i,C),_=pd(u),[w,E]=$i({prop:d,defaultProp:p??null,onChange:h,caller:_l}),[N,M]=g.useState(!1),D=an(m),H=H0(r),G=g.useRef(!1),[W,U]=g.useState(0);return g.useEffect(()=>{const Y=C.current;if(Y)return Y.addEventListener(Nf,D),()=>Y.removeEventListener(Nf,D)},[D]),x.jsx(A2,{scope:r,orientation:o,dir:_,loop:s,currentTabStopId:w,onItemFocus:g.useCallback(Y=>E(Y),[E]),onItemShiftTab:g.useCallback(()=>M(!0),[]),onFocusableItemAdd:g.useCallback(()=>U(Y=>Y+1),[]),onFocusableItemRemove:g.useCallback(()=>U(Y=>Y-1),[]),children:x.jsx(ke.div,{tabIndex:N||W===0?-1:0,"data-orientation":o,...v,ref:T,style:{outline:"none",...n.style},onMouseDown:de(n.onMouseDown,()=>{G.current=!0}),onFocus:de(n.onFocus,Y=>{const J=!G.current;if(Y.target===Y.currentTarget&&J&&!N){const te=new CustomEvent(Nf,_2);if(Y.currentTarget.dispatchEvent(te),!te.defaultPrevented){const ae=H().filter(L=>L.focusable),ne=ae.find(L=>L.active),re=ae.find(L=>L.id===w),ue=[ne,re,...ae].filter(Boolean).map(L=>L.ref.current);F0(ue,b)}}G.current=!1}),onBlur:de(n.onBlur,()=>M(!1))})})}),G0="RovingFocusGroupItem",V0=g.forwardRef((n,i)=>{const{__scopeRovingFocusGroup:r,focusable:o=!0,active:s=!1,tabStopId:u,children:d,...p}=n,h=Un(),m=u||h,b=N2(G0,r),v=b.currentTabStopId===m,C=H0(r),{onFocusableItemAdd:T,onFocusableItemRemove:_,currentTabStopId:w}=b;return g.useEffect(()=>{if(o)return T(),()=>_()},[o,T,_]),x.jsx(Kf.ItemSlot,{scope:r,id:m,focusable:o,active:s,children:x.jsx(ke.span,{tabIndex:v?0:-1,"data-orientation":b.orientation,...p,ref:i,onMouseDown:de(n.onMouseDown,E=>{o?b.onItemFocus(m):E.preventDefault()}),onFocus:de(n.onFocus,()=>b.onItemFocus(m)),onKeyDown:de(n.onKeyDown,E=>{if(E.key==="Tab"&&E.shiftKey){b.onItemShiftTab();return}if(E.target!==E.currentTarget)return;const N=L2(E,b.orientation,b.dir);if(N!==void 0){if(E.metaKey||E.ctrlKey||E.altKey||E.shiftKey)return;E.preventDefault();let D=C().filter(H=>H.focusable).map(H=>H.ref.current);if(N==="last")D.reverse();else if(N==="prev"||N==="next"){N==="prev"&&D.reverse();const H=D.indexOf(E.currentTarget);D=b.loop?j2(D,H+1):D.slice(H+1)}setTimeout(()=>F0(D))}}),children:typeof d=="function"?d({isCurrentTabStop:v,hasTabStop:w!=null}):d})})});V0.displayName=G0;var M2={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function D2(n,i){return i!=="rtl"?n:n==="ArrowLeft"?"ArrowRight":n==="ArrowRight"?"ArrowLeft":n}function L2(n,i,r){const o=D2(n.key,r);if(!(i==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(i==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return M2[o]}function F0(n,i=!1){const r=document.activeElement;for(const o of n)if(o===r||(o.focus({preventScroll:i}),document.activeElement!==r))return}function j2(n,i){return n.map((r,o)=>n[(i+o)%n.length])}var k2=B0,z2=V0;function I2(n){const i=P2(n),r=g.forwardRef((o,s)=>{const{children:u,...d}=o,p=g.Children.toArray(u),h=p.find(U2);if(h){const m=h.props.children,b=p.map(v=>v===h?g.Children.count(m)>1?g.Children.only(null):g.isValidElement(m)?m.props.children:null:v);return x.jsx(i,{...d,ref:s,children:g.isValidElement(m)?g.cloneElement(m,void 0,b):null})}return x.jsx(i,{...d,ref:s,children:u})});return r.displayName=`${n}.Slot`,r}function P2(n){const i=g.forwardRef((r,o)=>{const{children:s,...u}=r;if(g.isValidElement(s)){const d=G2(s),p=B2(u,s.props);return s.type!==g.Fragment&&(p.ref=o?Sa(o,d):d),g.cloneElement(s,p)}return g.Children.count(s)>1?g.Children.only(null):null});return i.displayName=`${n}.SlotClone`,i}var H2=Symbol("radix.slottable");function U2(n){return g.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===H2}function B2(n,i){const r={...i};for(const o in i){const s=n[o],u=i[o];/^on[A-Z]/.test(o)?s&&u?r[o]=(...p)=>{const h=u(...p);return s(...p),h}:s&&(r[o]=s):o==="style"?r[o]={...s,...u}:o==="className"&&(r[o]=[s,u].filter(Boolean).join(" "))}return{...n,...r}}function G2(n){let i=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning;return r?n.ref:(i=Object.getOwnPropertyDescriptor(n,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning,r?n.props.ref:n.props.ref||n.ref)}var V2=function(n){if(typeof document>"u")return null;var i=Array.isArray(n)?n[0]:n;return i.ownerDocument.body},Bi=new WeakMap,es=new WeakMap,ts={},Of=0,K0=function(n){return n&&(n.host||K0(n.parentNode))},F2=function(n,i){return i.map(function(r){if(n.contains(r))return r;var o=K0(r);return o&&n.contains(o)?o:(console.error("aria-hidden",r,"in not contained inside",n,". Doing nothing"),null)}).filter(function(r){return!!r})},K2=function(n,i,r,o){var s=F2(i,Array.isArray(n)?n:[n]);ts[r]||(ts[r]=new WeakMap);var u=ts[r],d=[],p=new Set,h=new Set(s),m=function(v){!v||p.has(v)||(p.add(v),m(v.parentNode))};s.forEach(m);var b=function(v){!v||h.has(v)||Array.prototype.forEach.call(v.children,function(C){if(p.has(C))b(C);else try{var T=C.getAttribute(o),_=T!==null&&T!=="false",w=(Bi.get(C)||0)+1,E=(u.get(C)||0)+1;Bi.set(C,w),u.set(C,E),d.push(C),w===1&&_&&es.set(C,!0),E===1&&C.setAttribute(r,"true"),_||C.setAttribute(o,"true")}catch(N){console.error("aria-hidden: cannot operate on ",C,N)}})};return b(i),p.clear(),Of++,function(){d.forEach(function(v){var C=Bi.get(v)-1,T=u.get(v)-1;Bi.set(v,C),u.set(v,T),C||(es.has(v)||v.removeAttribute(o),es.delete(v)),T||v.removeAttribute(r)}),Of--,Of||(Bi=new WeakMap,Bi=new WeakMap,es=new WeakMap,ts={})}},Y0=function(n,i,r){r===void 0&&(r="data-aria-hidden");var o=Array.from(Array.isArray(n)?n:[n]),s=V2(n);return s?(o.push.apply(o,Array.from(s.querySelectorAll("[aria-live], script"))),K2(o,s,r,"aria-hidden")):function(){return null}},dn=function(){return dn=Object.assign||function(i){for(var r,o=1,s=arguments.length;o<s;o++){r=arguments[o];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(i[u]=r[u])}return i},dn.apply(this,arguments)};function $0(n,i){var r={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&i.indexOf(o)<0&&(r[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(n);s<o.length;s++)i.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(n,o[s])&&(r[o[s]]=n[o[s]]);return r}function Y2(n,i,r){if(r||arguments.length===2)for(var o=0,s=i.length,u;o<s;o++)(u||!(o in i))&&(u||(u=Array.prototype.slice.call(i,0,o)),u[o]=i[o]);return n.concat(u||Array.prototype.slice.call(i))}var os="right-scroll-bar-position",ss="width-before-scroll-bar",$2="with-scroll-bars-hidden",q2="--removed-body-scroll-bar-size";function Mf(n,i){return typeof n=="function"?n(i):n&&(n.current=i),n}function X2(n,i){var r=g.useState(function(){return{value:n,callback:i,facade:{get current(){return r.value},set current(o){var s=r.value;s!==o&&(r.value=o,r.callback(o,s))}}}})[0];return r.callback=i,r.facade}var Q2=typeof window<"u"?g.useLayoutEffect:g.useEffect,iy=new WeakMap;function Z2(n,i){var r=X2(null,function(o){return n.forEach(function(s){return Mf(s,o)})});return Q2(function(){var o=iy.get(r);if(o){var s=new Set(o),u=new Set(n),d=r.current;s.forEach(function(p){u.has(p)||Mf(p,null)}),u.forEach(function(p){s.has(p)||Mf(p,d)})}iy.set(r,n)},[n]),r}function W2(n){return n}function J2(n,i){i===void 0&&(i=W2);var r=[],o=!1,s={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:n},useMedium:function(u){var d=i(u,o);return r.push(d),function(){r=r.filter(function(p){return p!==d})}},assignSyncMedium:function(u){for(o=!0;r.length;){var d=r;r=[],d.forEach(u)}r={push:function(p){return u(p)},filter:function(){return r}}},assignMedium:function(u){o=!0;var d=[];if(r.length){var p=r;r=[],p.forEach(u),d=r}var h=function(){var b=d;d=[],b.forEach(u)},m=function(){return Promise.resolve().then(h)};m(),r={push:function(b){d.push(b),m()},filter:function(b){return d=d.filter(b),r}}}};return s}function eR(n){n===void 0&&(n={});var i=J2(null);return i.options=dn({async:!0,ssr:!1},n),i}var q0=function(n){var i=n.sideCar,r=$0(n,["sideCar"]);if(!i)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=i.read();if(!o)throw new Error("Sidecar medium not found");return g.createElement(o,dn({},r))};q0.isSideCarExport=!0;function tR(n,i){return n.useMedium(i),q0}var X0=eR(),Df=function(){},js=g.forwardRef(function(n,i){var r=g.useRef(null),o=g.useState({onScrollCapture:Df,onWheelCapture:Df,onTouchMoveCapture:Df}),s=o[0],u=o[1],d=n.forwardProps,p=n.children,h=n.className,m=n.removeScrollBar,b=n.enabled,v=n.shards,C=n.sideCar,T=n.noRelative,_=n.noIsolation,w=n.inert,E=n.allowPinchZoom,N=n.as,M=N===void 0?"div":N,D=n.gapMode,H=$0(n,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),G=C,W=Z2([r,i]),U=dn(dn({},H),s);return g.createElement(g.Fragment,null,b&&g.createElement(G,{sideCar:X0,removeScrollBar:m,shards:v,noRelative:T,noIsolation:_,inert:w,setCallbacks:u,allowPinchZoom:!!E,lockRef:r,gapMode:D}),d?g.cloneElement(g.Children.only(p),dn(dn({},U),{ref:W})):g.createElement(M,dn({},U,{className:h,ref:W}),p))});js.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};js.classNames={fullWidth:ss,zeroRight:os};var nR=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function aR(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var i=nR();return i&&n.setAttribute("nonce",i),n}function iR(n,i){n.styleSheet?n.styleSheet.cssText=i:n.appendChild(document.createTextNode(i))}function rR(n){var i=document.head||document.getElementsByTagName("head")[0];i.appendChild(n)}var lR=function(){var n=0,i=null;return{add:function(r){n==0&&(i=aR())&&(iR(i,r),rR(i)),n++},remove:function(){n--,!n&&i&&(i.parentNode&&i.parentNode.removeChild(i),i=null)}}},oR=function(){var n=lR();return function(i,r){g.useEffect(function(){return n.add(i),function(){n.remove()}},[i&&r])}},Q0=function(){var n=oR(),i=function(r){var o=r.styles,s=r.dynamic;return n(o,s),null};return i},sR={left:0,top:0,right:0,gap:0},Lf=function(n){return parseInt(n||"",10)||0},cR=function(n){var i=window.getComputedStyle(document.body),r=i[n==="padding"?"paddingLeft":"marginLeft"],o=i[n==="padding"?"paddingTop":"marginTop"],s=i[n==="padding"?"paddingRight":"marginRight"];return[Lf(r),Lf(o),Lf(s)]},uR=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return sR;var i=cR(n),r=document.documentElement.clientWidth,o=window.innerWidth;return{left:i[0],top:i[1],right:i[2],gap:Math.max(0,o-r+i[2]-i[0])}},fR=Q0(),Yi="data-scroll-locked",dR=function(n,i,r,o){var s=n.left,u=n.top,d=n.right,p=n.gap;return r===void 0&&(r="margin"),`
  .`.concat($2,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(p,"px ").concat(o,`;
  }
  body[`).concat(Yi,`] {
    overflow: hidden `).concat(o,`;
    overscroll-behavior: contain;
    `).concat([i&&"position: relative ".concat(o,";"),r==="margin"&&`
    padding-left: `.concat(s,`px;
    padding-top: `).concat(u,`px;
    padding-right: `).concat(d,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(p,"px ").concat(o,`;
    `),r==="padding"&&"padding-right: ".concat(p,"px ").concat(o,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(os,` {
    right: `).concat(p,"px ").concat(o,`;
  }
  
  .`).concat(ss,` {
    margin-right: `).concat(p,"px ").concat(o,`;
  }
  
  .`).concat(os," .").concat(os,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(ss," .").concat(ss,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(Yi,`] {
    `).concat(q2,": ").concat(p,`px;
  }
`)},ry=function(){var n=parseInt(document.body.getAttribute(Yi)||"0",10);return isFinite(n)?n:0},pR=function(){g.useEffect(function(){return document.body.setAttribute(Yi,(ry()+1).toString()),function(){var n=ry()-1;n<=0?document.body.removeAttribute(Yi):document.body.setAttribute(Yi,n.toString())}},[])},hR=function(n){var i=n.noRelative,r=n.noImportant,o=n.gapMode,s=o===void 0?"margin":o;pR();var u=g.useMemo(function(){return uR(s)},[s]);return g.createElement(fR,{styles:dR(u,!i,s,r?"":"!important")})},Yf=!1;if(typeof window<"u")try{var ns=Object.defineProperty({},"passive",{get:function(){return Yf=!0,!0}});window.addEventListener("test",ns,ns),window.removeEventListener("test",ns,ns)}catch{Yf=!1}var Gi=Yf?{passive:!1}:!1,mR=function(n){return n.tagName==="TEXTAREA"},Z0=function(n,i){if(!(n instanceof Element))return!1;var r=window.getComputedStyle(n);return r[i]!=="hidden"&&!(r.overflowY===r.overflowX&&!mR(n)&&r[i]==="visible")},gR=function(n){return Z0(n,"overflowY")},vR=function(n){return Z0(n,"overflowX")},ly=function(n,i){var r=i.ownerDocument,o=i;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var s=W0(n,o);if(s){var u=J0(n,o),d=u[1],p=u[2];if(d>p)return!0}o=o.parentNode}while(o&&o!==r.body);return!1},yR=function(n){var i=n.scrollTop,r=n.scrollHeight,o=n.clientHeight;return[i,r,o]},xR=function(n){var i=n.scrollLeft,r=n.scrollWidth,o=n.clientWidth;return[i,r,o]},W0=function(n,i){return n==="v"?gR(i):vR(i)},J0=function(n,i){return n==="v"?yR(i):xR(i)},bR=function(n,i){return n==="h"&&i==="rtl"?-1:1},SR=function(n,i,r,o,s){var u=bR(n,window.getComputedStyle(i).direction),d=u*o,p=r.target,h=i.contains(p),m=!1,b=d>0,v=0,C=0;do{if(!p)break;var T=J0(n,p),_=T[0],w=T[1],E=T[2],N=w-E-u*_;(_||N)&&W0(n,p)&&(v+=N,C+=_);var M=p.parentNode;p=M&&M.nodeType===Node.DOCUMENT_FRAGMENT_NODE?M.host:M}while(!h&&p!==document.body||h&&(i.contains(p)||i===p));return(b&&Math.abs(v)<1||!b&&Math.abs(C)<1)&&(m=!0),m},as=function(n){return"changedTouches"in n?[n.changedTouches[0].clientX,n.changedTouches[0].clientY]:[0,0]},oy=function(n){return[n.deltaX,n.deltaY]},sy=function(n){return n&&"current"in n?n.current:n},CR=function(n,i){return n[0]===i[0]&&n[1]===i[1]},wR=function(n){return`
  .block-interactivity-`.concat(n,` {pointer-events: none;}
  .allow-interactivity-`).concat(n,` {pointer-events: all;}
`)},TR=0,Vi=[];function _R(n){var i=g.useRef([]),r=g.useRef([0,0]),o=g.useRef(),s=g.useState(TR++)[0],u=g.useState(Q0)[0],d=g.useRef(n);g.useEffect(function(){d.current=n},[n]),g.useEffect(function(){if(n.inert){document.body.classList.add("block-interactivity-".concat(s));var w=Y2([n.lockRef.current],(n.shards||[]).map(sy),!0).filter(Boolean);return w.forEach(function(E){return E.classList.add("allow-interactivity-".concat(s))}),function(){document.body.classList.remove("block-interactivity-".concat(s)),w.forEach(function(E){return E.classList.remove("allow-interactivity-".concat(s))})}}},[n.inert,n.lockRef.current,n.shards]);var p=g.useCallback(function(w,E){if("touches"in w&&w.touches.length===2||w.type==="wheel"&&w.ctrlKey)return!d.current.allowPinchZoom;var N=as(w),M=r.current,D="deltaX"in w?w.deltaX:M[0]-N[0],H="deltaY"in w?w.deltaY:M[1]-N[1],G,W=w.target,U=Math.abs(D)>Math.abs(H)?"h":"v";if("touches"in w&&U==="h"&&W.type==="range")return!1;var Y=window.getSelection(),J=Y&&Y.anchorNode,te=J?J===W||J.contains(W):!1;if(te)return!1;var ae=ly(U,W);if(!ae)return!0;if(ae?G=U:(G=U==="v"?"h":"v",ae=ly(U,W)),!ae)return!1;if(!o.current&&"changedTouches"in w&&(D||H)&&(o.current=G),!G)return!0;var ne=o.current||G;return SR(ne,E,w,ne==="h"?D:H)},[]),h=g.useCallback(function(w){var E=w;if(!(!Vi.length||Vi[Vi.length-1]!==u)){var N="deltaY"in E?oy(E):as(E),M=i.current.filter(function(G){return G.name===E.type&&(G.target===E.target||E.target===G.shadowParent)&&CR(G.delta,N)})[0];if(M&&M.should){E.cancelable&&E.preventDefault();return}if(!M){var D=(d.current.shards||[]).map(sy).filter(Boolean).filter(function(G){return G.contains(E.target)}),H=D.length>0?p(E,D[0]):!d.current.noIsolation;H&&E.cancelable&&E.preventDefault()}}},[]),m=g.useCallback(function(w,E,N,M){var D={name:w,delta:E,target:N,should:M,shadowParent:ER(N)};i.current.push(D),setTimeout(function(){i.current=i.current.filter(function(H){return H!==D})},1)},[]),b=g.useCallback(function(w){r.current=as(w),o.current=void 0},[]),v=g.useCallback(function(w){m(w.type,oy(w),w.target,p(w,n.lockRef.current))},[]),C=g.useCallback(function(w){m(w.type,as(w),w.target,p(w,n.lockRef.current))},[]);g.useEffect(function(){return Vi.push(u),n.setCallbacks({onScrollCapture:v,onWheelCapture:v,onTouchMoveCapture:C}),document.addEventListener("wheel",h,Gi),document.addEventListener("touchmove",h,Gi),document.addEventListener("touchstart",b,Gi),function(){Vi=Vi.filter(function(w){return w!==u}),document.removeEventListener("wheel",h,Gi),document.removeEventListener("touchmove",h,Gi),document.removeEventListener("touchstart",b,Gi)}},[]);var T=n.removeScrollBar,_=n.inert;return g.createElement(g.Fragment,null,_?g.createElement(u,{styles:wR(s)}):null,T?g.createElement(hR,{noRelative:n.noRelative,gapMode:n.gapMode}):null)}function ER(n){for(var i=null;n!==null;)n instanceof ShadowRoot&&(i=n.host,n=n.host),n=n.parentNode;return i}const RR=tR(X0,_R);var Ed=g.forwardRef(function(n,i){return g.createElement(js,dn({},n,{ref:i,sideCar:RR}))});Ed.classNames=js.classNames;var $f=["Enter"," "],AR=["ArrowDown","PageUp","Home"],ex=["ArrowUp","PageDown","End"],NR=[...AR,...ex],OR={ltr:[...$f,"ArrowRight"],rtl:[...$f,"ArrowLeft"]},MR={ltr:["ArrowLeft"],rtl:["ArrowRight"]},El="Menu",[ml,DR,LR]=dd(El),[ei,tx]=Wa(El,[LR,rr,U0]),Rl=rr(),nx=U0(),[ax,Ca]=ei(El),[jR,Al]=ei(El),ix=n=>{const{__scopeMenu:i,open:r=!1,children:o,dir:s,onOpenChange:u,modal:d=!0}=n,p=Rl(i),[h,m]=g.useState(null),b=g.useRef(!1),v=an(u),C=pd(s);return g.useEffect(()=>{const T=()=>{b.current=!0,document.addEventListener("pointerdown",_,{capture:!0,once:!0}),document.addEventListener("pointermove",_,{capture:!0,once:!0})},_=()=>b.current=!1;return document.addEventListener("keydown",T,{capture:!0}),()=>{document.removeEventListener("keydown",T,{capture:!0}),document.removeEventListener("pointerdown",_,{capture:!0}),document.removeEventListener("pointermove",_,{capture:!0})}},[]),x.jsx(Ds,{...p,children:x.jsx(ax,{scope:i,open:r,onOpenChange:v,content:h,onContentChange:m,children:x.jsx(jR,{scope:i,onClose:g.useCallback(()=>v(!1),[v]),isUsingKeyboardRef:b,dir:C,modal:d,children:o})})})};ix.displayName=El;var kR="MenuAnchor",Rd=g.forwardRef((n,i)=>{const{__scopeMenu:r,...o}=n,s=Rl(r);return x.jsx(wd,{...s,...o,ref:i})});Rd.displayName=kR;var Ad="MenuPortal",[zR,rx]=ei(Ad,{forceMount:void 0}),lx=n=>{const{__scopeMenu:i,forceMount:r,children:o,container:s}=n,u=Ca(Ad,i);return x.jsx(zR,{scope:i,forceMount:r,children:x.jsx(Ja,{present:r||u.open,children:x.jsx(Ls,{asChild:!0,container:s,children:o})})})};lx.displayName=Ad;var Zt="MenuContent",[IR,Nd]=ei(Zt),ox=g.forwardRef((n,i)=>{const r=rx(Zt,n.__scopeMenu),{forceMount:o=r.forceMount,...s}=n,u=Ca(Zt,n.__scopeMenu),d=Al(Zt,n.__scopeMenu);return x.jsx(ml.Provider,{scope:n.__scopeMenu,children:x.jsx(Ja,{present:o||u.open,children:x.jsx(ml.Slot,{scope:n.__scopeMenu,children:d.modal?x.jsx(PR,{...s,ref:i}):x.jsx(HR,{...s,ref:i})})})})}),PR=g.forwardRef((n,i)=>{const r=Ca(Zt,n.__scopeMenu),o=g.useRef(null),s=Fe(i,o);return g.useEffect(()=>{const u=o.current;if(u)return Y0(u)},[]),x.jsx(Od,{...n,ref:s,trapFocus:r.open,disableOutsidePointerEvents:r.open,disableOutsideScroll:!0,onFocusOutside:de(n.onFocusOutside,u=>u.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>r.onOpenChange(!1)})}),HR=g.forwardRef((n,i)=>{const r=Ca(Zt,n.__scopeMenu);return x.jsx(Od,{...n,ref:i,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>r.onOpenChange(!1)})}),UR=I2("MenuContent.ScrollLock"),Od=g.forwardRef((n,i)=>{const{__scopeMenu:r,loop:o=!1,trapFocus:s,onOpenAutoFocus:u,onCloseAutoFocus:d,disableOutsidePointerEvents:p,onEntryFocus:h,onEscapeKeyDown:m,onPointerDownOutside:b,onFocusOutside:v,onInteractOutside:C,onDismiss:T,disableOutsideScroll:_,...w}=n,E=Ca(Zt,r),N=Al(Zt,r),M=Rl(r),D=nx(r),H=DR(r),[G,W]=g.useState(null),U=g.useRef(null),Y=Fe(i,U,E.onContentChange),J=g.useRef(0),te=g.useRef(""),ae=g.useRef(0),ne=g.useRef(null),re=g.useRef("right"),ie=g.useRef(0),ue=_?Ed:g.Fragment,L=_?{as:UR,allowPinchZoom:!0}:void 0,K=Z=>{const pe=te.current+Z,R=H().filter(X=>!X.disabled),V=document.activeElement,Q=R.find(X=>X.ref.current===V)?.textValue,ee=R.map(X=>X.textValue),fe=WR(ee,pe,Q),me=R.find(X=>X.textValue===fe)?.ref.current;(function X(ye){te.current=ye,window.clearTimeout(J.current),ye!==""&&(J.current=window.setTimeout(()=>X(""),1e3))})(pe),me&&setTimeout(()=>me.focus())};g.useEffect(()=>()=>window.clearTimeout(J.current),[]),g0();const I=g.useCallback(Z=>re.current===ne.current?.side&&eA(Z,ne.current?.area),[]);return x.jsx(IR,{scope:r,searchRef:te,onItemEnter:g.useCallback(Z=>{I(Z)&&Z.preventDefault()},[I]),onItemLeave:g.useCallback(Z=>{I(Z)||(U.current?.focus(),W(null))},[I]),onTriggerLeave:g.useCallback(Z=>{I(Z)&&Z.preventDefault()},[I]),pointerGraceTimerRef:ae,onPointerGraceIntentChange:g.useCallback(Z=>{ne.current=Z},[]),children:x.jsx(ue,{...L,children:x.jsx(hd,{asChild:!0,trapped:s,onMountAutoFocus:de(u,Z=>{Z.preventDefault(),U.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:d,children:x.jsx(Rs,{asChild:!0,disableOutsidePointerEvents:p,onEscapeKeyDown:m,onPointerDownOutside:b,onFocusOutside:v,onInteractOutside:C,onDismiss:T,children:x.jsx(k2,{asChild:!0,...D,dir:N.dir,orientation:"vertical",loop:o,currentTabStopId:G,onCurrentTabStopIdChange:W,onEntryFocus:de(h,Z=>{N.isUsingKeyboardRef.current||Z.preventDefault()}),preventScrollOnEntryFocus:!0,children:x.jsx(Td,{role:"menu","aria-orientation":"vertical","data-state":Tx(E.open),"data-radix-menu-content":"",dir:N.dir,...M,...w,ref:Y,style:{outline:"none",...w.style},onKeyDown:de(w.onKeyDown,Z=>{const R=Z.target.closest("[data-radix-menu-content]")===Z.currentTarget,V=Z.ctrlKey||Z.altKey||Z.metaKey,Q=Z.key.length===1;R&&(Z.key==="Tab"&&Z.preventDefault(),!V&&Q&&K(Z.key));const ee=U.current;if(Z.target!==ee||!NR.includes(Z.key))return;Z.preventDefault();const me=H().filter(X=>!X.disabled).map(X=>X.ref.current);ex.includes(Z.key)&&me.reverse(),QR(me)}),onBlur:de(n.onBlur,Z=>{Z.currentTarget.contains(Z.target)||(window.clearTimeout(J.current),te.current="")}),onPointerMove:de(n.onPointerMove,gl(Z=>{const pe=Z.target,R=ie.current!==Z.clientX;if(Z.currentTarget.contains(pe)&&R){const V=Z.clientX>ie.current?"right":"left";re.current=V,ie.current=Z.clientX}}))})})})})})})});ox.displayName=Zt;var BR="MenuGroup",Md=g.forwardRef((n,i)=>{const{__scopeMenu:r,...o}=n;return x.jsx(ke.div,{role:"group",...o,ref:i})});Md.displayName=BR;var GR="MenuLabel",sx=g.forwardRef((n,i)=>{const{__scopeMenu:r,...o}=n;return x.jsx(ke.div,{...o,ref:i})});sx.displayName=GR;var xs="MenuItem",cy="menu.itemSelect",ks=g.forwardRef((n,i)=>{const{disabled:r=!1,onSelect:o,...s}=n,u=g.useRef(null),d=Al(xs,n.__scopeMenu),p=Nd(xs,n.__scopeMenu),h=Fe(i,u),m=g.useRef(!1),b=()=>{const v=u.current;if(!r&&v){const C=new CustomEvent(cy,{bubbles:!0,cancelable:!0});v.addEventListener(cy,T=>o?.(T),{once:!0}),p0(v,C),C.defaultPrevented?m.current=!1:d.onClose()}};return x.jsx(cx,{...s,ref:h,disabled:r,onClick:de(n.onClick,b),onPointerDown:v=>{n.onPointerDown?.(v),m.current=!0},onPointerUp:de(n.onPointerUp,v=>{m.current||v.currentTarget?.click()}),onKeyDown:de(n.onKeyDown,v=>{const C=p.searchRef.current!=="";r||C&&v.key===" "||$f.includes(v.key)&&(v.currentTarget.click(),v.preventDefault())})})});ks.displayName=xs;var cx=g.forwardRef((n,i)=>{const{__scopeMenu:r,disabled:o=!1,textValue:s,...u}=n,d=Nd(xs,r),p=nx(r),h=g.useRef(null),m=Fe(i,h),[b,v]=g.useState(!1),[C,T]=g.useState("");return g.useEffect(()=>{const _=h.current;_&&T((_.textContent??"").trim())},[u.children]),x.jsx(ml.ItemSlot,{scope:r,disabled:o,textValue:s??C,children:x.jsx(z2,{asChild:!0,...p,focusable:!o,children:x.jsx(ke.div,{role:"menuitem","data-highlighted":b?"":void 0,"aria-disabled":o||void 0,"data-disabled":o?"":void 0,...u,ref:m,onPointerMove:de(n.onPointerMove,gl(_=>{o?d.onItemLeave(_):(d.onItemEnter(_),_.defaultPrevented||_.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:de(n.onPointerLeave,gl(_=>d.onItemLeave(_))),onFocus:de(n.onFocus,()=>v(!0)),onBlur:de(n.onBlur,()=>v(!1))})})})}),VR="MenuCheckboxItem",ux=g.forwardRef((n,i)=>{const{checked:r=!1,onCheckedChange:o,...s}=n;return x.jsx(mx,{scope:n.__scopeMenu,checked:r,children:x.jsx(ks,{role:"menuitemcheckbox","aria-checked":bs(r)?"mixed":r,...s,ref:i,"data-state":jd(r),onSelect:de(s.onSelect,()=>o?.(bs(r)?!0:!r),{checkForDefaultPrevented:!1})})})});ux.displayName=VR;var fx="MenuRadioGroup",[FR,KR]=ei(fx,{value:void 0,onValueChange:()=>{}}),dx=g.forwardRef((n,i)=>{const{value:r,onValueChange:o,...s}=n,u=an(o);return x.jsx(FR,{scope:n.__scopeMenu,value:r,onValueChange:u,children:x.jsx(Md,{...s,ref:i})})});dx.displayName=fx;var px="MenuRadioItem",hx=g.forwardRef((n,i)=>{const{value:r,...o}=n,s=KR(px,n.__scopeMenu),u=r===s.value;return x.jsx(mx,{scope:n.__scopeMenu,checked:u,children:x.jsx(ks,{role:"menuitemradio","aria-checked":u,...o,ref:i,"data-state":jd(u),onSelect:de(o.onSelect,()=>s.onValueChange?.(r),{checkForDefaultPrevented:!1})})})});hx.displayName=px;var Dd="MenuItemIndicator",[mx,YR]=ei(Dd,{checked:!1}),gx=g.forwardRef((n,i)=>{const{__scopeMenu:r,forceMount:o,...s}=n,u=YR(Dd,r);return x.jsx(Ja,{present:o||bs(u.checked)||u.checked===!0,children:x.jsx(ke.span,{...s,ref:i,"data-state":jd(u.checked)})})});gx.displayName=Dd;var $R="MenuSeparator",vx=g.forwardRef((n,i)=>{const{__scopeMenu:r,...o}=n;return x.jsx(ke.div,{role:"separator","aria-orientation":"horizontal",...o,ref:i})});vx.displayName=$R;var qR="MenuArrow",yx=g.forwardRef((n,i)=>{const{__scopeMenu:r,...o}=n,s=Rl(r);return x.jsx(_d,{...s,...o,ref:i})});yx.displayName=qR;var Ld="MenuSub",[XR,xx]=ei(Ld),bx=n=>{const{__scopeMenu:i,children:r,open:o=!1,onOpenChange:s}=n,u=Ca(Ld,i),d=Rl(i),[p,h]=g.useState(null),[m,b]=g.useState(null),v=an(s);return g.useEffect(()=>(u.open===!1&&v(!1),()=>v(!1)),[u.open,v]),x.jsx(Ds,{...d,children:x.jsx(ax,{scope:i,open:o,onOpenChange:v,content:m,onContentChange:b,children:x.jsx(XR,{scope:i,contentId:Un(),triggerId:Un(),trigger:p,onTriggerChange:h,children:r})})})};bx.displayName=Ld;var ll="MenuSubTrigger",Sx=g.forwardRef((n,i)=>{const r=Ca(ll,n.__scopeMenu),o=Al(ll,n.__scopeMenu),s=xx(ll,n.__scopeMenu),u=Nd(ll,n.__scopeMenu),d=g.useRef(null),{pointerGraceTimerRef:p,onPointerGraceIntentChange:h}=u,m={__scopeMenu:n.__scopeMenu},b=g.useCallback(()=>{d.current&&window.clearTimeout(d.current),d.current=null},[]);return g.useEffect(()=>b,[b]),g.useEffect(()=>{const v=p.current;return()=>{window.clearTimeout(v),h(null)}},[p,h]),x.jsx(Rd,{asChild:!0,...m,children:x.jsx(cx,{id:s.triggerId,"aria-haspopup":"menu","aria-expanded":r.open,"aria-controls":s.contentId,"data-state":Tx(r.open),...n,ref:Sa(i,s.onTriggerChange),onClick:v=>{n.onClick?.(v),!(n.disabled||v.defaultPrevented)&&(v.currentTarget.focus(),r.open||r.onOpenChange(!0))},onPointerMove:de(n.onPointerMove,gl(v=>{u.onItemEnter(v),!v.defaultPrevented&&!n.disabled&&!r.open&&!d.current&&(u.onPointerGraceIntentChange(null),d.current=window.setTimeout(()=>{r.onOpenChange(!0),b()},100))})),onPointerLeave:de(n.onPointerLeave,gl(v=>{b();const C=r.content?.getBoundingClientRect();if(C){const T=r.content?.dataset.side,_=T==="right",w=_?-5:5,E=C[_?"left":"right"],N=C[_?"right":"left"];u.onPointerGraceIntentChange({area:[{x:v.clientX+w,y:v.clientY},{x:E,y:C.top},{x:N,y:C.top},{x:N,y:C.bottom},{x:E,y:C.bottom}],side:T}),window.clearTimeout(p.current),p.current=window.setTimeout(()=>u.onPointerGraceIntentChange(null),300)}else{if(u.onTriggerLeave(v),v.defaultPrevented)return;u.onPointerGraceIntentChange(null)}})),onKeyDown:de(n.onKeyDown,v=>{const C=u.searchRef.current!=="";n.disabled||C&&v.key===" "||OR[o.dir].includes(v.key)&&(r.onOpenChange(!0),r.content?.focus(),v.preventDefault())})})})});Sx.displayName=ll;var Cx="MenuSubContent",wx=g.forwardRef((n,i)=>{const r=rx(Zt,n.__scopeMenu),{forceMount:o=r.forceMount,...s}=n,u=Ca(Zt,n.__scopeMenu),d=Al(Zt,n.__scopeMenu),p=xx(Cx,n.__scopeMenu),h=g.useRef(null),m=Fe(i,h);return x.jsx(ml.Provider,{scope:n.__scopeMenu,children:x.jsx(Ja,{present:o||u.open,children:x.jsx(ml.Slot,{scope:n.__scopeMenu,children:x.jsx(Od,{id:p.contentId,"aria-labelledby":p.triggerId,...s,ref:m,align:"start",side:d.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:b=>{d.isUsingKeyboardRef.current&&h.current?.focus(),b.preventDefault()},onCloseAutoFocus:b=>b.preventDefault(),onFocusOutside:de(n.onFocusOutside,b=>{b.target!==p.trigger&&u.onOpenChange(!1)}),onEscapeKeyDown:de(n.onEscapeKeyDown,b=>{d.onClose(),b.preventDefault()}),onKeyDown:de(n.onKeyDown,b=>{const v=b.currentTarget.contains(b.target),C=MR[d.dir].includes(b.key);v&&C&&(u.onOpenChange(!1),p.trigger?.focus(),b.preventDefault())})})})})})});wx.displayName=Cx;function Tx(n){return n?"open":"closed"}function bs(n){return n==="indeterminate"}function jd(n){return bs(n)?"indeterminate":n?"checked":"unchecked"}function QR(n){const i=document.activeElement;for(const r of n)if(r===i||(r.focus(),document.activeElement!==i))return}function ZR(n,i){return n.map((r,o)=>n[(i+o)%n.length])}function WR(n,i,r){const s=i.length>1&&Array.from(i).every(m=>m===i[0])?i[0]:i,u=r?n.indexOf(r):-1;let d=ZR(n,Math.max(u,0));s.length===1&&(d=d.filter(m=>m!==r));const h=d.find(m=>m.toLowerCase().startsWith(s.toLowerCase()));return h!==r?h:void 0}function JR(n,i){const{x:r,y:o}=n;let s=!1;for(let u=0,d=i.length-1;u<i.length;d=u++){const p=i[u],h=i[d],m=p.x,b=p.y,v=h.x,C=h.y;b>o!=C>o&&r<(v-m)*(o-b)/(C-b)+m&&(s=!s)}return s}function eA(n,i){if(!i)return!1;const r={x:n.clientX,y:n.clientY};return JR(r,i)}function gl(n){return i=>i.pointerType==="mouse"?n(i):void 0}var tA=ix,nA=Rd,aA=lx,iA=ox,rA=Md,lA=sx,oA=ks,sA=ux,cA=dx,uA=hx,fA=gx,dA=vx,pA=yx,hA=bx,mA=Sx,gA=wx,zs="DropdownMenu",[vA]=Wa(zs,[tx]),vt=tx(),[yA,_x]=vA(zs),Ex=n=>{const{__scopeDropdownMenu:i,children:r,dir:o,open:s,defaultOpen:u,onOpenChange:d,modal:p=!0}=n,h=vt(i),m=g.useRef(null),[b,v]=$i({prop:s,defaultProp:u??!1,onChange:d,caller:zs});return x.jsx(yA,{scope:i,triggerId:Un(),triggerRef:m,contentId:Un(),open:b,onOpenChange:v,onOpenToggle:g.useCallback(()=>v(C=>!C),[v]),modal:p,children:x.jsx(tA,{...h,open:b,onOpenChange:v,dir:o,modal:p,children:r})})};Ex.displayName=zs;var Rx="DropdownMenuTrigger",Ax=g.forwardRef((n,i)=>{const{__scopeDropdownMenu:r,disabled:o=!1,...s}=n,u=_x(Rx,r),d=vt(r);return x.jsx(nA,{asChild:!0,...d,children:x.jsx(ke.button,{type:"button",id:u.triggerId,"aria-haspopup":"menu","aria-expanded":u.open,"aria-controls":u.open?u.contentId:void 0,"data-state":u.open?"open":"closed","data-disabled":o?"":void 0,disabled:o,...s,ref:Sa(i,u.triggerRef),onPointerDown:de(n.onPointerDown,p=>{!o&&p.button===0&&p.ctrlKey===!1&&(u.onOpenToggle(),u.open||p.preventDefault())}),onKeyDown:de(n.onKeyDown,p=>{o||(["Enter"," "].includes(p.key)&&u.onOpenToggle(),p.key==="ArrowDown"&&u.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(p.key)&&p.preventDefault())})})})});Ax.displayName=Rx;var xA="DropdownMenuPortal",Nx=n=>{const{__scopeDropdownMenu:i,...r}=n,o=vt(i);return x.jsx(aA,{...o,...r})};Nx.displayName=xA;var Ox="DropdownMenuContent",Mx=g.forwardRef((n,i)=>{const{__scopeDropdownMenu:r,...o}=n,s=_x(Ox,r),u=vt(r),d=g.useRef(!1);return x.jsx(iA,{id:s.contentId,"aria-labelledby":s.triggerId,...u,...o,ref:i,onCloseAutoFocus:de(n.onCloseAutoFocus,p=>{d.current||s.triggerRef.current?.focus(),d.current=!1,p.preventDefault()}),onInteractOutside:de(n.onInteractOutside,p=>{const h=p.detail.originalEvent,m=h.button===0&&h.ctrlKey===!0,b=h.button===2||m;(!s.modal||b)&&(d.current=!0)}),style:{...n.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Mx.displayName=Ox;var bA="DropdownMenuGroup",SA=g.forwardRef((n,i)=>{const{__scopeDropdownMenu:r,...o}=n,s=vt(r);return x.jsx(rA,{...s,...o,ref:i})});SA.displayName=bA;var CA="DropdownMenuLabel",wA=g.forwardRef((n,i)=>{const{__scopeDropdownMenu:r,...o}=n,s=vt(r);return x.jsx(lA,{...s,...o,ref:i})});wA.displayName=CA;var TA="DropdownMenuItem",Dx=g.forwardRef((n,i)=>{const{__scopeDropdownMenu:r,...o}=n,s=vt(r);return x.jsx(oA,{...s,...o,ref:i})});Dx.displayName=TA;var _A="DropdownMenuCheckboxItem",EA=g.forwardRef((n,i)=>{const{__scopeDropdownMenu:r,...o}=n,s=vt(r);return x.jsx(sA,{...s,...o,ref:i})});EA.displayName=_A;var RA="DropdownMenuRadioGroup",AA=g.forwardRef((n,i)=>{const{__scopeDropdownMenu:r,...o}=n,s=vt(r);return x.jsx(cA,{...s,...o,ref:i})});AA.displayName=RA;var NA="DropdownMenuRadioItem",OA=g.forwardRef((n,i)=>{const{__scopeDropdownMenu:r,...o}=n,s=vt(r);return x.jsx(uA,{...s,...o,ref:i})});OA.displayName=NA;var MA="DropdownMenuItemIndicator",DA=g.forwardRef((n,i)=>{const{__scopeDropdownMenu:r,...o}=n,s=vt(r);return x.jsx(fA,{...s,...o,ref:i})});DA.displayName=MA;var LA="DropdownMenuSeparator",jA=g.forwardRef((n,i)=>{const{__scopeDropdownMenu:r,...o}=n,s=vt(r);return x.jsx(dA,{...s,...o,ref:i})});jA.displayName=LA;var kA="DropdownMenuArrow",zA=g.forwardRef((n,i)=>{const{__scopeDropdownMenu:r,...o}=n,s=vt(r);return x.jsx(pA,{...s,...o,ref:i})});zA.displayName=kA;var IA=n=>{const{__scopeDropdownMenu:i,children:r,open:o,onOpenChange:s,defaultOpen:u}=n,d=vt(i),[p,h]=$i({prop:o,defaultProp:u??!1,onChange:s,caller:"DropdownMenuSub"});return x.jsx(hA,{...d,open:p,onOpenChange:h,children:r})},PA="DropdownMenuSubTrigger",Lx=g.forwardRef((n,i)=>{const{__scopeDropdownMenu:r,...o}=n,s=vt(r);return x.jsx(mA,{...s,...o,ref:i})});Lx.displayName=PA;var HA="DropdownMenuSubContent",jx=g.forwardRef((n,i)=>{const{__scopeDropdownMenu:r,...o}=n,s=vt(r);return x.jsx(gA,{...s,...o,ref:i,style:{...n.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});jx.displayName=HA;var UA=Ex,BA=Ax,GA=Nx,VA=Mx,FA=Dx,KA=IA,YA=Lx,$A=jx;const qA=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),XA=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,r,o)=>o?o.toUpperCase():r.toLowerCase()),uy=n=>{const i=XA(n);return i.charAt(0).toUpperCase()+i.slice(1)},kx=(...n)=>n.filter((i,r,o)=>!!i&&i.trim()!==""&&o.indexOf(i)===r).join(" ").trim(),QA=n=>{for(const i in n)if(i.startsWith("aria-")||i==="role"||i==="title")return!0};var ZA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const WA=g.forwardRef(({color:n="currentColor",size:i=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:s="",children:u,iconNode:d,...p},h)=>g.createElement("svg",{ref:h,...ZA,width:i,height:i,stroke:n,strokeWidth:o?Number(r)*24/Number(i):r,className:kx("lucide",s),...!u&&!QA(p)&&{"aria-hidden":"true"},...p},[...d.map(([m,b])=>g.createElement(m,b)),...Array.isArray(u)?u:[u]]));const Ne=(n,i)=>{const r=g.forwardRef(({className:o,...s},u)=>g.createElement(WA,{ref:u,iconNode:i,className:kx(`lucide-${qA(uy(n))}`,`lucide-${n}`,o),...s}));return r.displayName=uy(n),r};const JA=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],zx=Ne("arrow-left",JA);const eN=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],fy=Ne("arrow-right",eN);const tN=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],nN=Ne("arrow-up-down",tN);const aN=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Xi=Ne("book-open",aN);const iN=[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]],rN=Ne("bug",iN);const lN=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],kd=Ne("calculator",lN);const oN=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Is=Ne("calendar",oN);const sN=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],zd=Ne("car",sN);const cN=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],uN=Ne("check",cN);const fN=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Id=Ne("chevron-down",fN);const dN=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],$a=Ne("chevron-right",dN);const pN=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],hN=Ne("chevron-up",pN);const mN=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]],Pd=Ne("circuit-board",mN);const gN=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Ix=Ne("clock",gN);const vN=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],vl=Ne("code",vN);const yN=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Ps=Ne("cpu",yN);const xN=[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",key:"1iv0i2"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],Hd=Ne("factory",xN);const bN=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],Ud=Ne("file-code",bN);const SN=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Px=Ne("folder-open",SN);const CN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],qf=Ne("globe",CN);const wN=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Bd=Ne("grid-3x3",wN);const TN=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Xf=Ne("house",TN);const _N=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],EN=Ne("layout-grid",_N);const RN=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],AN=Ne("list",RN);const NN=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],ON=Ne("menu",NN);const MN=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 17h4",key:"pvmtpo"}],["path",{d:"M10 7h4",key:"1vgcok"}],["path",{d:"M18 12h2",key:"quuxs7"}],["path",{d:"M18 18h2",key:"4scel"}],["path",{d:"M18 6h2",key:"1ptzki"}],["path",{d:"M4 12h2",key:"1ltxp0"}],["path",{d:"M4 18h2",key:"1xrofg"}],["path",{d:"M4 6h2",key:"1cx33n"}],["rect",{x:"6",y:"2",width:"12",height:"20",rx:"2",key:"749fme"}]],yl=Ne("microchip",MN);const DN=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Gd=Ne("network",DN);const LN=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],jN=Ne("panels-top-left",LN);const kN=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Vd=Ne("radio",kN);const zN=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],IN=Ne("search",zN);const PN=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Fd=Ne("tag",PN);const HN=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Kd=Ne("terminal",HN);const UN=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],Yd=Ne("timer",UN);const BN=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],$d=Ne("wifi",BN);const GN=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],xl=Ne("wrench",GN);const VN=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],FN=Ne("x",VN);function KN({...n}){return x.jsx(UA,{"data-slot":"dropdown-menu",...n})}function YN({...n}){return x.jsx(BA,{"data-slot":"dropdown-menu-trigger",...n})}function $N({className:n,sideOffset:i=4,...r}){return x.jsx(GA,{children:x.jsx(VA,{"data-slot":"dropdown-menu-content",sideOffset:i,className:ht("bg-popover text-popover-foreground z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",n),...r})})}function Qf({className:n,inset:i,variant:r="default",...o}){return x.jsx(FA,{"data-slot":"dropdown-menu-item","data-inset":i,"data-variant":r,className:ht("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...o})}function qN({...n}){return x.jsx(KA,{"data-slot":"dropdown-menu-sub",...n})}function XN({className:n,inset:i,children:r,...o}){return x.jsxs(YA,{"data-slot":"dropdown-menu-sub-trigger","data-inset":i,className:ht("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...o,children:[r,x.jsx($a,{className:"ml-auto size-4"})]})}function QN({className:n,...i}){return x.jsx($A,{"data-slot":"dropdown-menu-sub-content",className:ht("bg-popover text-popover-foreground z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg",n),...i})}const Hx=[{id:"hardware",slug:"hardware",icon:"Cpu",order:1,zh:{name:"硬件",description:"硬件平台与芯片"},en:{name:"Hardware",description:"Hardware platforms and chips"},children:[{id:"mcu",slug:"mcu",icon:"Cpu",parentId:"hardware",order:1,zh:{name:"单片机/MCU",description:"STM32、ESP32、Arduino 等微控制器"},en:{name:"MCU",description:"STM32, ESP32, Arduino microcontrollers"},children:[{id:"stm32",slug:"stm32",icon:"Cpu",parentId:"mcu",order:1,zh:{name:"STM32",description:"意法半导体 ARM Cortex-M"},en:{name:"STM32",description:"ST ARM Cortex-M"}},{id:"esp32",slug:"esp32",icon:"Wifi",parentId:"mcu",order:2,zh:{name:"ESP32",description:"乐鑫 WiFi/蓝牙芯片"},en:{name:"ESP32",description:"Espressif WiFi/Bluetooth"}},{id:"gd32",slug:"gd32",icon:"Microchip",parentId:"mcu",order:3,zh:{name:"GD32",description:"兆易创新 MCU"},en:{name:"GD32",description:"GigaDevice MCU"}}]},{id:"mpu",slug:"mpu",icon:"Microchip",parentId:"hardware",order:2,zh:{name:"嵌入式处理器",description:"ARM Cortex-A、RISC-V Linux 平台"},en:{name:"MPU",description:"ARM Cortex-A, RISC-V Linux platforms"},children:[{id:"raspberry-pi",slug:"raspberry-pi",icon:"CircuitBoard",parentId:"mpu",order:1,zh:{name:"树莓派",description:"Raspberry Pi 开发"},en:{name:"Raspberry Pi",description:"Raspberry Pi development"}},{id:"rockchip",slug:"rockchip",icon:"Microchip",parentId:"mpu",order:2,zh:{name:"瑞芯微",description:"RK3566/RK3588 等"},en:{name:"Rockchip",description:"RK3566/RK3588 etc."}}]},{id:"fpga",slug:"fpga",icon:"Grid3x3",parentId:"hardware",order:3,zh:{name:"FPGA",description:"Xilinx、Altera 可编程逻辑"},en:{name:"FPGA",description:"Xilinx, Altera programmable logic"}}]},{id:"software",slug:"software",icon:"Code",order:2,zh:{name:"软件",description:"嵌入式软件开发"},en:{name:"Software",description:"Embedded software development"},children:[{id:"rtos",slug:"rtos",icon:"Timer",parentId:"software",order:1,zh:{name:"实时操作系统",description:"FreeRTOS、RT-Thread、Zephyr"},en:{name:"RTOS",description:"FreeRTOS, RT-Thread, Zephyr"},children:[{id:"freertos",slug:"freertos",icon:"Timer",parentId:"rtos",order:1,zh:{name:"FreeRTOS",description:"开源实时操作系统"},en:{name:"FreeRTOS",description:"Open source RTOS"}},{id:"rt-thread",slug:"rt-thread",icon:"Timer",parentId:"rtos",order:2,zh:{name:"RT-Thread",description:"国产实时操作系统"},en:{name:"RT-Thread",description:"Chinese RTOS"}}]},{id:"embedded-linux",slug:"embedded-linux",icon:"Terminal",parentId:"software",order:2,zh:{name:"嵌入式 Linux",description:"内核、驱动、Yocto"},en:{name:"Embedded Linux",description:"Kernel, drivers, Yocto"},children:[{id:"linux-kernel",slug:"linux-kernel",icon:"Terminal",parentId:"embedded-linux",order:1,zh:{name:"内核移植",description:"Linux 内核裁剪与移植"},en:{name:"Kernel Porting",description:"Linux kernel customization"}},{id:"linux-driver",slug:"linux-driver",icon:"Terminal",parentId:"embedded-linux",order:2,zh:{name:"驱动开发",description:"字符设备、块设备、网络驱动"},en:{name:"Driver Dev",description:"Character, block, network drivers"}}]},{id:"firmware",slug:"firmware",icon:"FileCode",parentId:"software",order:3,zh:{name:"固件开发",description:"Bare-metal、Bootloader"},en:{name:"Firmware",description:"Bare-metal, Bootloader"}}]},{id:"protocols",slug:"protocols",icon:"Network",order:3,zh:{name:"协议",description:"通信协议与接口"},en:{name:"Protocols",description:"Communication protocols"},children:[{id:"fieldbus",slug:"fieldbus",icon:"Network",parentId:"protocols",order:1,zh:{name:"现场总线",description:"CAN、Modbus、RS485"},en:{name:"Fieldbus",description:"CAN, Modbus, RS485"},children:[{id:"can",slug:"can",icon:"Network",parentId:"fieldbus",order:1,zh:{name:"CAN 总线",description:"控制器局域网通信"},en:{name:"CAN Bus",description:"Controller Area Network"}},{id:"modbus",slug:"modbus",icon:"Network",parentId:"fieldbus",order:2,zh:{name:"Modbus",description:"工业通信协议"},en:{name:"Modbus",description:"Industrial protocol"}}]},{id:"wireless",slug:"wireless",icon:"Wifi",parentId:"protocols",order:2,zh:{name:"无线通信",description:"BLE、LoRa、Zigbee"},en:{name:"Wireless",description:"BLE, LoRa, Zigbee"}},{id:"network-stack",slug:"network-stack",icon:"Globe",parentId:"protocols",order:3,zh:{name:"网络协议",description:"TCP/IP、MQTT、LwIP"},en:{name:"Network",description:"TCP/IP, MQTT, LwIP"}}]},{id:"tools",slug:"tools",icon:"Wrench",order:4,zh:{name:"工具",description:"开发工具与调试"},en:{name:"Tools",description:"Development tools"},children:[{id:"ide",slug:"ide",icon:"Code",parentId:"tools",order:1,zh:{name:"IDE",description:"Keil、IAR、VS Code"},en:{name:"IDE",description:"Keil, IAR, VS Code"}},{id:"debug",slug:"debug",icon:"Bug",parentId:"tools",order:2,zh:{name:"调试工具",description:"JTAG、SWD、逻辑分析仪"},en:{name:"Debug",description:"JTAG, SWD, Logic Analyzer"}}]},{id:"hardware-design",slug:"hardware-design",icon:"CircuitBoard",order:5,zh:{name:"硬件设计",description:"PCB 与电路设计"},en:{name:"Hardware Design",description:"PCB and circuit design"},children:[{id:"pcb",slug:"pcb",icon:"CircuitBoard",parentId:"hardware-design",order:1,zh:{name:"PCB 设计",description:"Layout、布线、信号完整性"},en:{name:"PCB Design",description:"Layout, routing, SI"}},{id:"eda",slug:"eda",icon:"Layout",parentId:"hardware-design",order:2,zh:{name:"EDA 工具",description:"Altium、KiCad、Cadence"},en:{name:"EDA Tools",description:"Altium, KiCad, Cadence"}}]},{id:"application",slug:"application",icon:"Factory",order:6,zh:{name:"应用",description:"行业应用方案"},en:{name:"Applications",description:"Industry solutions"},children:[{id:"automotive",slug:"automotive",icon:"Car",parentId:"application",order:1,zh:{name:"汽车电子",description:"CAN、UDS、AutoSAR"},en:{name:"Automotive",description:"CAN, UDS, AutoSAR"}},{id:"iot",slug:"iot",icon:"Radio",parentId:"application",order:2,zh:{name:"物联网",description:"传感器、边缘计算、OTA"},en:{name:"IoT",description:"Sensors, edge computing, OTA"}},{id:"industrial",slug:"industrial",icon:"Factory",parentId:"application",order:3,zh:{name:"工业控制",description:"PLC、运动控制、PID"},en:{name:"Industrial",description:"PLC, motion control, PID"}}]}];function ZN(n){const i=[];function r(o){for(const s of o)i.push(s),s.children&&r(s.children)}return r(n),i}const ti=ZN(Hx),WN=n=>ti.find(i=>i.slug===n),JN=()=>Hx.sort((n,i)=>(n.order||0)-(i.order||0)),eO={Cpu:Ps,Microchip:yl,Grid3x3:Bd,Timer:Yd,Terminal:Kd,FileCode:Ud,Network:Gd,Wifi:$d,Wrench:xl,CircuitBoard:Pd,Car:zd,Radio:Vd,Factory:Hd,Code:vl,Calculator:kd,Globe:qf,Bug:rN,Layout:jN,BookOpen:Xi,Home:Xf};function tO(n){return eO[n]||Xi}function Ux({category:n,lang:i,onNavigate:r}){const o=tO(n.icon);return n.children&&n.children.length>0?x.jsxs(qN,{children:[x.jsxs(XN,{className:"flex items-center gap-2 cursor-pointer",children:[x.jsx(o,{className:"w-4 h-4"}),x.jsx("span",{children:n[i].name})]}),x.jsxs(QN,{className:"w-48",children:[x.jsx(Qf,{asChild:!0,onClick:r,children:x.jsx(Ge,{to:`/category/${n.slug}`,className:"flex items-center gap-2 font-medium",children:x.jsxs("span",{children:["查看全部 ",n[i].name]})})}),x.jsx("div",{className:"h-px bg-slate-200 my-1"}),n.children?.map(u=>x.jsx(Ux,{category:u,lang:i,onNavigate:r},u.id))]})]}):x.jsx(Qf,{asChild:!0,onClick:r,children:x.jsxs(Ge,{to:`/category/${n.slug}`,className:"flex items-center gap-2",children:[x.jsx(o,{className:"w-4 h-4"}),x.jsx("span",{children:n[i].name})]})})}function nO(){const{t:n,i18n:i}=er(),r=yn(),[o,s]=g.useState(!1),u=()=>{const m=i.language==="zh"?"en":"zh";i.changeLanguage(m)},d=i.language,p=JN(),h=m=>m==="/"?r.pathname==="/":r.pathname.startsWith(m);return x.jsx("nav",{className:"sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200",children:x.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[x.jsxs("div",{className:"flex items-center justify-between h-16",children:[x.jsxs(Ge,{to:"/",className:"flex items-center gap-2",children:[x.jsx("div",{className:"w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center",children:x.jsx(Ps,{className:"w-5 h-5 text-white"})}),x.jsx("span",{className:"text-xl font-bold text-slate-800 hidden sm:block",children:n("home.title")})]}),x.jsxs("div",{className:"hidden lg:flex items-center gap-1",children:[x.jsx(Ge,{to:"/",children:x.jsxs(dt,{variant:h("/")?"default":"ghost",className:h("/")?"bg-indigo-500 hover:bg-indigo-600":"",size:"sm",children:[x.jsx(Xf,{className:"w-4 h-4 mr-1"}),n("nav.home")]})}),p.map(m=>x.jsxs(KN,{children:[x.jsx(YN,{asChild:!0,children:x.jsxs(dt,{variant:h(`/category/${m.slug}`)?"default":"ghost",className:h(`/category/${m.slug}`)?"bg-indigo-500 hover:bg-indigo-600":"",size:"sm",children:[m[d].name,x.jsx(Id,{className:"w-3 h-3 ml-1"})]})}),x.jsxs($N,{className:"w-48",align:"start",children:[x.jsx(Qf,{asChild:!0,children:x.jsxs(Ge,{to:`/category/${m.slug}`,className:"font-medium",children:["全部 ",m[d].name]})}),x.jsx("div",{className:"h-px bg-slate-200 my-1"}),m.children?.map(b=>x.jsx(Ux,{category:b,lang:d,onNavigate:()=>{}},b.id))]})]},m.id)),x.jsx(Ge,{to:"/notes",children:x.jsxs(dt,{variant:h("/notes")?"default":"ghost",className:h("/notes")?"bg-indigo-500 hover:bg-indigo-600":"",size:"sm",children:[x.jsx(Xi,{className:"w-4 h-4 mr-1"}),n("nav.notes")]})})]}),x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsxs(dt,{variant:"ghost",size:"sm",onClick:u,className:"hidden md:flex items-center gap-2",children:[x.jsx(qf,{className:"w-4 h-4"}),x.jsx("span",{children:i.language==="zh"?"EN":"中文"})]}),x.jsx(dt,{variant:"ghost",size:"icon",className:"lg:hidden",onClick:()=>s(!o),children:o?x.jsx(FN,{className:"w-5 h-5"}):x.jsx(ON,{className:"w-5 h-5"})})]})]}),o&&x.jsx("div",{className:"lg:hidden py-4 border-t border-slate-100",children:x.jsxs("div",{className:"flex flex-col gap-2",children:[x.jsx(Ge,{to:"/",onClick:()=>s(!1),children:x.jsxs(dt,{variant:h("/")?"default":"ghost",className:`w-full justify-start ${h("/")?"bg-indigo-500 hover:bg-indigo-600":""}`,children:[x.jsx(Xf,{className:"w-4 h-4 mr-2"}),n("nav.home")]})}),p.map(m=>x.jsxs("div",{className:"space-y-1",children:[x.jsx(Ge,{to:`/category/${m.slug}`,onClick:()=>s(!1),children:x.jsx(dt,{variant:"ghost",className:"w-full justify-start font-medium",children:m[d].name})}),m.children?.map(b=>x.jsx(Ge,{to:`/category/${b.slug}`,onClick:()=>s(!1),children:x.jsx(dt,{variant:"ghost",className:"w-full justify-start pl-8 text-sm text-slate-600",children:b[d].name})},b.id))]},m.id)),x.jsx(Ge,{to:"/notes",onClick:()=>s(!1),children:x.jsxs(dt,{variant:h("/notes")?"default":"ghost",className:`w-full justify-start ${h("/notes")?"bg-indigo-500 hover:bg-indigo-600":""}`,children:[x.jsx(Xi,{className:"w-4 h-4 mr-2"}),n("nav.notes")]})}),x.jsxs(dt,{variant:"ghost",className:"w-full justify-start",onClick:()=>{u(),s(!1)},children:[x.jsx(qf,{className:"w-4 h-4 mr-2"}),n("language.switch")," (",i.language==="zh"?"EN":"中文",")"]})]})})]})})}function aO(){const{t:n}=er();return x.jsx("footer",{className:"bg-white border-t border-slate-200",children:x.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:x.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[x.jsx("p",{className:"text-sm text-slate-500",children:n("footer.copyright")}),x.jsx("p",{className:"text-sm text-slate-400",children:n("footer.poweredBy")})]})})})}function iO({children:n}){return x.jsxs("div",{className:"min-h-screen flex flex-col bg-slate-50",children:[x.jsx(nO,{}),x.jsx("main",{className:"flex-1",children:n}),x.jsx(aO,{})]})}function va({className:n,...i}){return x.jsx("div",{"data-slot":"card",className:ht("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",n),...i})}function ya({className:n,...i}){return x.jsx("div",{"data-slot":"card-content",className:ht("px-6",n),...i})}const rO=e0("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function Hs({className:n,variant:i,asChild:r=!1,...o}){const s=r?Zy:"span";return x.jsx(s,{"data-slot":"badge",className:ht(rO({variant:i}),n),...o})}const lO=`# PCB Design Practical Guide

## PCB Design Flow

\`\`\`
1. Schematic → 2. Footprint → 3. Layout → 4. Routing → 5. Verification → 6. Manufacturing
     ↓              ↓           ↓            ↓             ↓
   Component      3D Model    Thermal      Signal       DRC Check
   Selection      Pad Design   EMC         Integrity    Gerber Output
\`\`\`

![PCB Design Flow](/images/pcb-design.jpg)

## Layout Principles

### Zoning

\`\`\`
┌─────────────────────────────────────┐
│  Analog Circuit    │  Digital Circuit│
│  (Sensitive)       │  (High Speed)   │
├────────────────────┼─────────────────┤
│                    │                 │
│  Power Input       │  Power Output   │
│  Filter Circuit    │  Driver Circuit │
│                    │                 │
├────────────────────┴─────────────────┤
│         Connector / Interface        │
└─────────────────────────────────────┘
\`\`\`

### Layout Priority

1. **Mechanical parts** - Connectors, mounting holes, buttons
2. **Critical ICs** - MCU, power ICs, crystals
3. **Sensitive circuits** - Analog, RF, high-speed
4. **Heat sources** - Power devices, LDOs
5. **Common parts** - Resistors, capacitors, LEDs

## Routing Techniques

### Power Routing

\`\`\`
❌ Wrong: Star topology
     VCC
      │
   ┌──┼──┐
   ↓  ↓  ↓
  IC1 IC2 IC3

✅ Correct: Power tree
  Input → LDO → Bulk Cap
                  │
          ┌───────┼───────┐
          ↓       ↓       ↓
        Small   Small   Small
        Cap     Cap     Cap
          │       │       │
         IC1     IC2     IC3
\`\`\`

### Decoupling Capacitor Placement

\`\`\`
Best (capacitor close to chip):
         VCC
          │
      ┌───┴───┐
      │  Chip  │
      └───┬───┘
          │
        ┌─┴─┐
        │0.1│
        │µF │
        └─┬─┘
          │
         GND

Worst (capacitor far from chip):
         VCC
          │
        ┌─┴─┐
        │10µ│
        │ F │
        └─┬─┘
          │
      ┌───┴───┐
      │  Chip  │
      └───────┘
\`\`\`

### High-Speed Signal Routing

| Rule | Description |
|------|-------------|
| 3W Rule | Spacing ≥ 3× trace width, reduces crosstalk |
| 20H Rule | Power layer inset 20× dielectric thickness |
| Length matching | DDR, USB differential pairs need matching |
| Avoid right angles | Use 45° or arcs |
| Reference plane | High-speed signals need continuous reference |

![High Speed Routing](/images/pcb-design.jpg)

## Ground Design

### Single vs Multi-Point Grounding

\`\`\`
Low frequency (<1MHz) - Single point:

    IC1    IC2    IC3
     │      │      │
     └──────┼──────┘
            │
           GND

High frequency (>10MHz) - Multi-point:

    IC1 ──┬── GND Plane
          │
    IC2 ──┤
          │
    IC3 ──┘
\`\`\`

## Power Integrity

### Power Plane Splitting

\`\`\`
4-Layer Stackup:

Top:     Signal + small power traces
Inner1:  Complete ground plane (priority)
Inner2:  Power plane (5V, 3.3V split)
Bottom:  Signal + power traces

Split Example:
┌─────────────────────────────┐
│  3.3V  │  5V  │     3.3V    │
│ Analog │ Dig  │    I/O      │
│ Power  │Power │             │
└─────────────────────────────┘
\`\`\`

## EMC Design

### Reducing Radiation

\`\`\`
High-speed signal routing:

✅ Correct:
    Signal ───────┬───────
               │
    GND ───────┴───────
    
    Continuous reference plane under signal

❌ Wrong:
    Signal ─────╱╲╱╲─────
              
    GND ───────────────
    
    Signal crossing split, broken return path
\`\`\`

![EMC Design](/images/pcb-design.jpg)

## Summary

High-quality PCB design essentials:

1. **Reasonable layout** - Clear zones, good signal flow
2. **Power integrity** - Proper decoupling, low impedance
3. **Signal integrity** - Impedance matching, reference planes
4. **EMC consideration** - Reduce radiation, improve immunity
5. **Manufacturability** - Follow fab capabilities, easy assembly
`,oO=`# PCB 设计实战指南

## PCB 设计流程

\`\`\`
1. 原理图设计 → 2. 封装选择 → 3. 布局 → 4. 布线 → 5. 验证 → 6. 制板
     ↓              ↓           ↓          ↓          ↓
   元件选型      3D 模型      散热考虑   信号完整性  DRC 检查
   网络表生成    焊盘设计     EMC 考虑   电源完整性  Gerber 输出
\`\`\`

![PCB 设计流程](/images/pcb-design.jpg)

## 布局原则

### 分区规划

\`\`\`
┌─────────────────────────────────────┐
│  模拟电路区        │    数字电路区    │
│  (敏感信号)        │    (高速信号)    │
├────────────────────┼─────────────────┤
│                    │                 │
│    电源输入        │    功率输出     │
│    滤波电路        │    驱动电路     │
│                    │                 │
├────────────────────┴─────────────────┤
│           连接器 / 接口区域           │
└─────────────────────────────────────┘
\`\`\`

### 布局优先级

1. **结构件定位** - 连接器、安装孔、按键
2. **关键芯片** - MCU、电源芯片、晶体
3. **敏感电路** - 模拟、RF、高速
4. **发热元件** - 功率器件、LDO
5. **普通元件** - 电阻、电容、LED

## 布线技巧

### 电源布线

\`\`\`
❌ 错误：星型辐射
     VCC
      │
   ┌──┼──┐
   ↓  ↓  ↓
  IC1 IC2 IC3

✅ 正确：电源树
  输入 → LDO → 大电容
                  │
          ┌───────┼───────┐
          ↓       ↓       ↓
        小电容  小电容  小电容\\n          │       │       │
         IC1     IC2     IC3
\`\`\`

### 退耦电容布局

\`\`\`
最佳（电容紧贴芯片）：
         VCC
          │
      ┌───┴───┐
      │  芯片  │
      └───┬───┘
          │
        ┌─┴─┐
        │0.1│
        │µF │
        └─┬─┘
          │
         GND

最差（电容远离芯片）：
         VCC
          │
        ┌─┴─┐
        │10µ│  ← 只在电源入口
        │ F │
        └─┬─┘
          │
      ┌───┴───┐
      │  芯片  │
      └───────┘
\`\`\`

### 高速信号布线

| 规则 | 说明 |
|------|------|
| 3W 原则 | 线间距 ≥ 3 倍线宽，减少串扰 |
| 20H 原则 | 电源层内缩 20 倍层间距，减少边缘辐射 |
| 等长布线 | DDR、USB 差分对需等长 |
| 避免直角 | 用 45° 斜角或圆弧走线 |
| 参考平面 | 高速信号下方需有完整参考平面 |

\`\`\`
USB 差分对等长示例：

    ┌──────┐
    │ D+  ─┼──────╱╲╱╲╱╲───────┐
    │      │                    │
    │ D-  ─┼───────────────────┘
    └──────┘
    
    蛇形线用于补偿长度差
\`\`\`

![高速布线](/images/pcb-design.jpg)

## 接地设计

### 单点接地 vs 多点接地

\`\`\`
低频（<1MHz）- 单点接地：

    IC1    IC2    IC3
     │      │      │
     └──────┼──────┘
            │
           GND

高频（>10MHz）- 多点接地：

    IC1 ──┬── GND 平面
          │
    IC2 ──┤
          │
    IC3 ──┘
\`\`\`

### 混合接地策略

\`\`\`
数模混合电路接地：

模拟区              数字区
┌─────┐            ┌─────┐
│ ADC │            │ MCU │
└──┬──┘            └──┬──┘
   │                  │
   └────┐        ┌────┘
        │  桥接点 │
   ┌────┴────────┴────┐
   │    模拟地平面     │
   └───────────────────┘
   
   在 ADC 下方单点连接数字地
\`\`\`

## 电源完整性

### 电源层分割

\`\`\`
多层板电源规划：

顶层：    信号 + 小电源走线
内层1：   完整地平面（优先保证）
内层2：   电源层（5V、3.3V分割）
底层：    信号 + 电源走线

分割示例：
┌─────────────────────────────┐
│  3.3V  │  5V  │     3.3V    │
│  模拟  │ 数字 │    IO区域   │
│  电源  │ 电源 │             │
└─────────────────────────────┘
       ↑分割处保持足够间隙
\`\`\`

### 去耦电容选择

| 频率范围 | 电容值 | 类型 |
|---------|--------|------|
| < 100 KHz | 10-100 µF | 电解/钽电容 |
| 100 KHz - 10 MHz | 0.1-1 µF | 陶瓷 X7R |
| 10 MHz - 100 MHz | 10-100 nF | 陶瓷 X7R |
| > 100 MHz | 1-10 nF | 陶瓷 NP0 |

\`\`\`
典型配置（每个电源引脚）：

VCC ──┬── 10µF（大电容，储能用）
      │
      ├── 0.1µF（小电容，滤高频）
      │
     IC
      │
     GND
\`\`\`

## EMC 设计

### 减少辐射

\`\`\`
高速信号走线：

✅ 正确：
    信号 ───────┬───────
               │
    GND ───────┴───────
    
    信号下方有完整参考平面

❌ 错误：
    信号 ─────╱╲╱╲─────
              
    GND ───────────────
    
    信号跨越分割线，回流路径断裂
\`\`\`

### 滤波设计

\`\`\`
电源入口 EMI 滤波：

L ──┬──┬──┬────┬──┬──┬──→ 板内
    │  │  │    │  │  │
   C1 L1 C2   C3 L2 C4
    │  │  │    │  │  │
N ──┴──┴──┴────┴──┴──┴──

C1,C4 = X 电容（跨 L-N）
C2,C3 = Y 电容（跨 L-地, N-地）
L1,L2 = 共模电感
\`\`\`

![EMC 设计](/images/pcb-design.jpg)

## DRC 检查清单

### 电气规则

- [ ] 最小线宽/间距符合工艺要求
- [ ] 过孔尺寸符合工艺要求
- [ ] 网络连通性 100%
- [ ] 无短路网络
- [ ] 丝印不压在焊盘上

### 制造规则

- [ ] 板厚、层数明确标注
- [ ] 阻抗控制要求标注
- [ ] 最小孔径符合板厂能力
- [ ] 保留工艺边（如需 V-cut）

### 装配规则

- [ ] 元件间距满足贴片机要求
- [ ] 极性元件方向一致
- [ ] 丝印位号清晰可读
- [ ] 定位孔、光学点齐全

## 常用软件对比

| 软件 | 特点 | 价格 | 适用场景 |
|------|------|------|---------|
| Altium Designer | 功能最全 | 贵 | 专业公司 |
| KiCad | 开源免费 | 免费 | 个人/开源 |
| EasyEDA | 云端使用 | 免费 | 快速打样 |
| PADS | 中小项目 | 中 | 中小企业 |
| Allegro | 高速设计 | 很贵 | 高端产品 |

## 打样文件输出

\`\`\`
必需文件：
├── Gerber 文件
│   ├── 顶层铜 (GTL)
│   ├── 底层铜 (GBL)
│   ├── 顶层丝印 (GTO)
│   ├── 底层丝印 (GBO)
│   ├── 顶层阻焊 (GTS)
│   ├── 底层阻焊 (GBS)
│   ├── 钻孔 (DRL)
│   └── 板框 (GKO)
├── 钻孔文件 (.drl)
└── 制板说明 (README.txt)

可选文件：
├── 贴片坐标文件 (.pos/.csv)
├── BOM 清单
└── 装配图 (PDF)
\`\`\`

## 总结

高质量 PCB 设计要点：

1. **布局合理** - 分区明确，信号流向清晰
2. **电源完整** - 去耦到位，低阻抗路径
3. **信号完整** - 阻抗匹配，参考平面完整
4. **EMC 考虑** - 减少辐射，增强抗干扰
5. **可制造性** - 符合板厂工艺，便于装配
`,sO=`# STM32 Getting Started Guide

## STM32 Introduction

STM32 is a series of 32-bit microcontrollers based on ARM Cortex-M cores, launched by STMicroelectronics. Widely used in industrial control, consumer electronics, and automotive applications.

![STM32 Development Board](/images/stm32.jpg)

## Development Environment Setup

### 1. Hardware Requirements

| Device | Recommended | Description |
|--------|-------------|-------------|
| Dev Board | STM32F103C8T6 (Blue Pill) | Best value for beginners |
| Debugger | ST-Link V2 | Original or compatible |
| USB-UART | CH340/CP2102 | For serial debugging |

### 2. Software Installation

**Keil MDK** (Recommended for beginners):
\`\`\`
1. Download Keil MDK 5.38+
2. Install STM32F1/F4 series Pack
3. Install ST-Link driver
\`\`\`

**VS Code + PlatformIO** (Recommended for advanced):
\`\`\`json
// platformio.ini
[env:stm32f103c8]
platform = ststm32
board = genericSTM32F103C8
framework = stm32cube
upload_protocol = stlink
debug_tool = stlink
\`\`\`

### 3. First Program - LED Blink

\`\`\`c
#include "stm32f1xx_hal.h"

int main(void) {
    HAL_Init();
    SystemClock_Config();
    
    // Enable GPIOA clock
    __HAL_RCC_GPIOA_CLK_ENABLE();
    
    GPIO_InitTypeDef GPIO_InitStruct = {0};
    GPIO_InitStruct.Pin = GPIO_PIN_5;          // LED on PA5
    GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP; // Push-pull output
    GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
    HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);
    
    while (1) {
        HAL_GPIO_TogglePin(GPIOA, GPIO_PIN_5);
        HAL_Delay(500);  // Delay 500ms
    }
}
\`\`\`

![Code Compilation](/images/stm32.jpg)

## Clock System Deep Dive

### Clock Tree Structure

\`\`\`
HSI (8MHz) ──┬──> SYSCLK ──> AHB Prescaler ──> HCLK
             │                    │
HSE (8MHz) ──┘                    ├──> APB1 Prescaler ──> PCLK1 (36MHz max)
             ┌──> PLLCLK           │
PLL ─────────┘ (72MHz max)         └──> APB2 Prescaler ──> PCLK2 (72MHz max)
\`\`\`

### Clock Configuration Code

\`\`\`c
void SystemClock_Config(void) {
    RCC_OscInitTypeDef RCC_OscInitStruct = {0};
    RCC_ClkInitTypeDef RCC_ClkInitStruct = {0};
    
    // Enable HSE
    RCC_OscInitStruct.OscillatorType = RCC_OSCILLATORTYPE_HSE;
    RCC_OscInitStruct.HSEState = RCC_HSE_ON;
    RCC_OscInitStruct.PLL.PLLState = RCC_PLL_ON;
    RCC_OscInitStruct.PLL.PLLSource = RCC_PLLSOURCE_HSE;
    RCC_OscInitStruct.PLL.PLLMUL = RCC_PLL_MUL9;  // 8MHz * 9 = 72MHz
    HAL_RCC_OscConfig(&RCC_OscInitStruct);
    
    // Configure bus dividers
    RCC_ClkInitStruct.ClockType = RCC_CLOCKTYPE_HCLK|RCC_CLOCKTYPE_SYSCLK
                                  |RCC_CLOCKTYPE_PCLK1|RCC_CLOCKTYPE_PCLK2;
    RCC_ClkInitStruct.SYSCLKSource = RCC_SYSCLKSOURCE_PLLCLK;
    RCC_ClkInitStruct.AHBCLKDivider = RCC_SYSCLK_DIV1;
    RCC_ClkInitStruct.APB1CLKDivider = RCC_HCLK_DIV2;  // APB1 max 36MHz
    RCC_ClkInitStruct.APB2CLKDivider = RCC_HCLK_DIV1;
    HAL_RCC_ClockConfig(&RCC_ClkInitStruct, FLASH_LATENCY_2);
}
\`\`\`

## GPIO Deep Understanding

### 8 Working Modes

| Mode | Direction | Characteristics | Use Case |
|------|-----------|-----------------|----------|
| Input Floating | Input | High impedance | Button detection |
| Input Pull-up | Input | Internal pull-up | I2C data line |
| Input Pull-down | Input | Internal pull-down | Default low detection |
| Analog | Input | Direct to ADC | ADC sampling |
| Open-drain Output | Output | Needs external pull-up | I2C SDA/SCL |
| Push-pull Output | Output | Strong drive | LED, relay |
| Alternate Open-drain | Output | Peripheral use | USART TX/RX |
| Alternate Push-pull | Output | Peripheral use | SPI, PWM |

![GPIO Structure](/images/stm32.jpg)

## Interrupts and NVIC

### External Interrupt Configuration

\`\`\`c
// Configure external interrupt - button detection
void EXTI0_Init(void) {
    GPIO_InitTypeDef GPIO_InitStruct = {0};
    
    // PA0 as input pull-up
    __HAL_RCC_GPIOA_CLK_ENABLE();
    GPIO_InitStruct.Pin = GPIO_PIN_0;
    GPIO_InitStruct.Mode = GPIO_MODE_IT_FALLING;  // Falling edge trigger
    GPIO_InitStruct.Pull = GPIO_PULLUP;
    HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);
    
    // Configure NVIC
    HAL_NVIC_SetPriority(EXTI0_IRQn, 2, 0);
    HAL_NVIC_EnableIRQ(EXTI0_IRQn);
}

// Interrupt handler
void EXTI0_IRQHandler(void) {
    HAL_GPIO_EXTI_IRQHandler(GPIO_PIN_0);
}

// Callback function
void HAL_GPIO_EXTI_Callback(uint16_t GPIO_Pin) {
    if (GPIO_Pin == GPIO_PIN_0) {
        // Button press handling
        key_flag = 1;
    }
}
\`\`\`

## Debugging Tips

### 1. Using SWD Debug

\`\`\`
ST-Link Connection:
- VCC  -> 3.3V
- GND  -> GND
- SWDIO -> SWDIO (PA13)
- SWCLK -> SWCLK (PA14)
- NRST  -> NRST
\`\`\`

### 2. Serial Print Debug

\`\`\`c
// Redirect printf to USART1
int _write(int file, char *ptr, int len) {
    HAL_UART_Transmit(&huart1, (uint8_t*)ptr, len, HAL_MAX_DELAY);
    return len;
}

// Usage
printf("ADC Value: %d\\n", adc_value);
\`\`\`

### 3. Using ITM/SWO Single Wire Output

\`\`\`c
// Insert at key points
ITM_SendChar('A');
ITM_SendWord(0x12345678);
\`\`\`

![Debug Interface](/images/stm32.jpg)

## Common Issues

### 1. Cannot Download Program
- Check BOOT0/BOOT1 pin levels
- Confirm SWD pins not remapped
- Try holding reset then click download

### 2. Clock Configuration Error
- Use STM32CubeMX to generate init code
- Check Flash wait states
- Confirm APB1 clock not exceeding 36MHz

### 3. HardFault Exception
\`\`\`c
// Add error handling
void HardFault_Handler(void) {
    __ASM volatile("BKPT #01");  // Trigger breakpoint
    while(1);
}
\`\`\`

## Learning Path

1. **Basic**: GPIO, Clock, Interrupt, Timer
2. **Advanced**: DMA, ADC, USART, I2C, SPI
3. **Expert**: RTOS, USB, Ethernet, FSMC
4. **Project**: Complete a real project

## Recommended Resources

- **Official Docs**: RM0008 Reference Manual, Datasheet
- **Tools**: STM32CubeMX, STM32CubeIDE
- **Communities**: ST Forum, Zhengdian Atom, Wildfire
`,cO=`# STM32 入门完全指南

## STM32 简介

STM32 是意法半导体（STMicroelectronics）推出的基于 ARM Cortex-M 内核的 32 位微控制器系列，广泛应用于工业控制、消费电子、汽车电子等领域。

![STM32 开发板](/images/stm32.jpg)

## 开发环境搭建

### 1. 硬件准备

| 设备 | 推荐型号 | 说明 |
|------|---------|------|
| 开发板 | STM32F103C8T6（蓝色药丸） | 性价比最高，适合入门 |
| 调试器 | ST-Link V2 | 正版或兼容版均可 |
| USB转串口 | CH340/CP2102 | 串口调试必备 |

### 2. 软件安装

**Keil MDK**（推荐新手）：
\`\`\`
1. 下载 Keil MDK 5.38+
2. 安装 STM32F1/F4 系列 Pack
3. 安装 ST-Link 驱动
\`\`\`

**VS Code + PlatformIO**（推荐进阶）：
\`\`\`json
// platformio.ini
[env:stm32f103c8]
platform = ststm32
board = genericSTM32F103C8
framework = stm32cube
upload_protocol = stlink
debug_tool = stlink
\`\`\`

### 3. 第一个程序 - LED 闪烁

\`\`\`c
#include "stm32f1xx_hal.h"

int main(void) {
    HAL_Init();
    SystemClock_Config();
    
    // 使能 GPIOA 时钟
    __HAL_RCC_GPIOA_CLK_ENABLE();
    
    GPIO_InitTypeDef GPIO_InitStruct = {0};
    GPIO_InitStruct.Pin = GPIO_PIN_5;          // LED 在 PA5
    GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP; // 推挽输出
    GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
    HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);
    
    while (1) {
        HAL_GPIO_TogglePin(GPIOA, GPIO_PIN_5);
        HAL_Delay(500);  // 延时 500ms
    }
}
\`\`\`

![代码编译](/images/stm32.jpg)

## 时钟系统详解

### 时钟树结构

\`\`\`
HSI (8MHz) ──┬──> SYSCLK (系统时钟) ──> AHB Prescaler ──> HCLK
             │                              │
HSE (8MHz) ──┘                              ├──> APB1 Prescaler ──> PCLK1 (36MHz max)
             ┌──> PLLCLK                     │
PLL ─────────┘ (72MHz max)                   └──> APB2 Prescaler ──> PCLK2 (72MHz max)
\`\`\`

### 时钟配置代码

\`\`\`c
void SystemClock_Config(void) {
    RCC_OscInitTypeDef RCC_OscInitStruct = {0};
    RCC_ClkInitTypeDef RCC_ClkInitStruct = {0};
    
    // 使能 HSE
    RCC_OscInitStruct.OscillatorType = RCC_OSCILLATORTYPE_HSE;
    RCC_OscInitStruct.HSEState = RCC_HSE_ON;
    RCC_OscInitStruct.PLL.PLLState = RCC_PLL_ON;
    RCC_OscInitStruct.PLL.PLLSource = RCC_PLLSOURCE_HSE;
    RCC_OscInitStruct.PLL.PLLMUL = RCC_PLL_MUL9;  // 8MHz * 9 = 72MHz
    HAL_RCC_OscConfig(&RCC_OscInitStruct);
    
    // 配置总线分频
    RCC_ClkInitStruct.ClockType = RCC_CLOCKTYPE_HCLK|RCC_CLOCKTYPE_SYSCLK
                                  |RCC_CLOCKTYPE_PCLK1|RCC_CLOCKTYPE_PCLK2;
    RCC_ClkInitStruct.SYSCLKSource = RCC_SYSCLKSOURCE_PLLCLK;
    RCC_ClkInitStruct.AHBCLKDivider = RCC_SYSCLK_DIV1;
    RCC_ClkInitStruct.APB1CLKDivider = RCC_HCLK_DIV2;  // APB1 max 36MHz
    RCC_ClkInitStruct.APB2CLKDivider = RCC_HCLK_DIV1;
    HAL_RCC_ClockConfig(&RCC_ClkInitStruct, FLASH_LATENCY_2);
}
\`\`\`

## GPIO 深入理解

### 8 种工作模式

| 模式 | 方向 | 特点 | 应用场景 |
|------|------|------|---------|
| 输入浮空 | 输入 | 高阻态 | 按键检测 |
| 输入上拉 | 输入 | 内部上拉 | I2C 数据线 |
| 输入下拉 | 输入 | 内部下拉 | 默认低电平检测 |
| 模拟输入 | 输入 | 直连 ADC | ADC 采样 |
| 开漏输出 | 输出 | 需外接上拉 | I2C SDA/SCL |
| 推挽输出 | 输出 | 驱动能力强 | LED、继电器 |
| 复用开漏 | 输出 | 外设使用 | USART TX/RX |
| 复用推挽 | 输出 | 外设使用 | SPI、PWM |

![GPIO 结构](/images/stm32.jpg)

## 中断与 NVIC

### 外部中断配置

\`\`\`c
// 配置外部中断 - 按键检测
void EXTI0_Init(void) {
    GPIO_InitTypeDef GPIO_InitStruct = {0};
    
    // PA0 配置为输入上拉
    __HAL_RCC_GPIOA_CLK_ENABLE();
    GPIO_InitStruct.Pin = GPIO_PIN_0;
    GPIO_InitStruct.Mode = GPIO_MODE_IT_FALLING;  // 下降沿触发
    GPIO_InitStruct.Pull = GPIO_PULLUP;
    HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);
    
    // 配置 NVIC
    HAL_NVIC_SetPriority(EXTI0_IRQn, 2, 0);
    HAL_NVIC_EnableIRQ(EXTI0_IRQn);
}

// 中断服务函数
void EXTI0_IRQHandler(void) {
    HAL_GPIO_EXTI_IRQHandler(GPIO_PIN_0);
}

// 回调函数
void HAL_GPIO_EXTI_Callback(uint16_t GPIO_Pin) {
    if (GPIO_Pin == GPIO_PIN_0) {
        // 按键按下处理
        key_flag = 1;
    }
}
\`\`\`

## 调试技巧

### 1. 使用 SWD 调试

\`\`\`
ST-Link 连接：
- VCC  -> 3.3V
- GND  -> GND
- SWDIO -> SWDIO (PA13)
- SWCLK -> SWCLK (PA14)
- NRST  -> NRST
\`\`\`

### 2. 串口打印调试

\`\`\`c
// 重定向 printf 到 USART1
int _write(int file, char *ptr, int len) {
    HAL_UART_Transmit(&huart1, (uint8_t*)ptr, len, HAL_MAX_DELAY);
    return len;
}

// 使用
printf("ADC Value: %d\\n", adc_value);
\`\`\`

### 3. 使用 ITM/SWO 单线输出

\`\`\`c
// 在关键位置插入
ITM_SendChar('A');
ITM_SendWord(0x12345678);
\`\`\`

![调试界面](/images/stm32.jpg)

## 常见问题

### 1. 程序无法下载
- 检查 BOOT0/BOOT1 引脚电平
- 确认 SWD 引脚未被复用
- 尝试按住复位键再点击下载

### 2. 时钟配置错误
- 使用 STM32CubeMX 生成初始化代码
- 检查 Flash 等待周期设置
- 确认 APB1 时钟不超过 36MHz

### 3. HardFault 异常
\`\`\`c
// 添加错误处理
void HardFault_Handler(void) {
    __ASM volatile("BKPT #01");  // 触发断点
    while(1);
}
\`\`\`

## 学习路线建议

1. **基础阶段**：GPIO、时钟、中断、定时器
2. **进阶阶段**：DMA、ADC、USART、I2C、SPI
3. **高级阶段**：RTOS、USB、以太网、FSMC
4. **实战阶段**：完成一个完整项目

## 推荐资源

- **官方文档**：RM0008 参考手册、数据手册
- **开发工具**：STM32CubeMX、STM32CubeIDE
- **社区**：ST 官方论坛、正点原子、野火
`,uO=`# CAN Bus Protocol Detailed Guide

## What is CAN

CAN (Controller Area Network) is a serial communication protocol developed by Bosch in 1986, specifically designed for automotive electronics with high reliability and real-time performance.

![CAN Bus Topology](/images/can-bus.jpg)

## CAN Features

| Feature | Description |
|---------|-------------|
| Multi-master | Any node can transmit when bus is idle |
| Non-destructive arbitration | Lower ID has priority, no data loss |
| High reliability | CRC check, error detection, auto-retransmit |
| Distance | 40m at 1Mbps, 1km at 50Kbps |
| Node count | Theoretically unlimited (limited by driver capability) |

## Physical Layer

### Differential Signaling

CAN uses twisted pair for differential signaling:

\`\`\`
CAN_H ───┬───────────────┬───────
         │    Recessive(1)    │ Dominant(0)
         │   2.5V/2.5V   │ 3.5V/1.5V
CAN_L ───┴───────────────┴───────
\`\`\`

- **Dominant (0)**: CAN_H = 3.5V, CAN_L = 1.5V, diff = 2V
- **Recessive (1)**: CAN_H = CAN_L = 2.5V, diff = 0V

### Termination Resistors

\`\`\`
      120Ω                    120Ω
CAN_H ──\\/\\/\\──────────────────\\/\\/\\───
        |                          |
CAN_L ──\\/\\/\\──────────────────\\/\\/\\───
      Node1                      NodeN
      
// Termination resistors eliminate signal reflection
\`\`\`

## Data Link Layer

### Standard Frame Format (CAN 2.0A)

\`\`\`
Field          Length    Description
─────────────────────────────────
SOF            1         Dominant, frame start
Arbitration
  ├─ ID        11        Message ID, lower = higher priority
  └─ RTR       1         Remote transmission request
Control
  ├─ IDE       1         Identifier extension
  ├─ Reserved  1
  └─ DLC       4         Data length code (0-8)
Data           0-64      Actual data (0-8 bytes)
CRC            16        Cyclic redundancy check
ACK            2         Acknowledge
EOF            7         Recessive, frame end
\`\`\`

![CAN Frame Format](/images/can-bus.jpg)

### Arbitration Mechanism

\`\`\`
Node A: ID = 0x123 (0 0010 0100 011)
       ↓↓↓↓↓↓↓↓↓↓↓
Bus:   0 0010 0100 011...
       ↓↓↓↓↓↓↓↓↓↓↓
Node B: ID = 0x156 (0 0010 1010 110)
                 ↑
                 Difference here, Node B detects dominant, stops

Result: Node A wins arbitration, continues transmission
\`\`\`

## STM32 CAN Programming

### Initialization

\`\`\`c
#include "stm32f1xx_hal.h"

CAN_HandleTypeDef hcan;

void CAN_Init(void) {
    // Enable clocks
    __HAL_RCC_CAN1_CLK_ENABLE();
    __HAL_RCC_GPIOA_CLK_ENABLE();
    
    // GPIO config PA11-CAN_RX, PA12-CAN_TX
    GPIO_InitTypeDef GPIO_InitStruct = {0};
    GPIO_InitStruct.Pin = GPIO_PIN_11;
    GPIO_InitStruct.Mode = GPIO_MODE_INPUT;
    GPIO_InitStruct.Pull = GPIO_PULLUP;
    HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);
    
    GPIO_InitStruct.Pin = GPIO_PIN_12;
    GPIO_InitStruct.Mode = GPIO_MODE_AF_PP;
    GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_HIGH;
    HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);
    
    // CAN init
    hcan.Instance = CAN1;
    hcan.Init.Prescaler = 9;
    hcan.Init.Mode = CAN_MODE_NORMAL;
    hcan.Init.SyncJumpWidth = CAN_SJW_1TQ;
    hcan.Init.TimeSeg1 = CAN_BS1_13TQ;
    hcan.Init.TimeSeg2 = CAN_BS2_2TQ;
    // Baud rate = 36MHz / 9 / (1+13+2) = 250Kbps
    HAL_CAN_Init(&hcan);
    
    // Filter config - accept all
    CAN_FilterTypeDef canfilterconfig = {0};
    canfilterconfig.FilterBank = 0;
    canfilterconfig.FilterMode = CAN_FILTERMODE_IDMASK;
    canfilterconfig.FilterScale = CAN_FILTERSCALE_32BIT;
    canfilterconfig.FilterIdHigh = 0x0000;
    canfilterconfig.FilterIdLow = 0x0000;
    canfilterconfig.FilterMaskIdHigh = 0x0000;
    canfilterconfig.FilterMaskIdLow = 0x0000;
    canfilterconfig.FilterFIFOAssignment = CAN_RX_FIFO0;
    canfilterconfig.FilterActivation = ENABLE;
    HAL_CAN_ConfigFilter(&hcan, &canfilterconfig);
}
\`\`\`

### Sending Data

\`\`\`c
void CAN_Send(uint16_t id, uint8_t *data, uint8_t len) {
    CAN_TxHeaderTypeDef TxHeader = {0};
    uint8_t TxData[8];
    uint32_t TxMailbox;
    
    TxHeader.StdId = id;
    TxHeader.ExtId = 0;
    TxHeader.IDE = CAN_ID_STD;
    TxHeader.RTR = CAN_RTR_DATA;
    TxHeader.DLC = len;
    TxHeader.TransmitGlobalTime = DISABLE;
    
    memcpy(TxData, data, len);
    
    if(HAL_CAN_AddTxMessage(&hcan, &TxHeader, TxData, &TxMailbox) == HAL_OK) {
        printf("CAN TX: ID=0x%03X, ", id);
        for(int i=0; i<len; i++) {
            printf("%02X ", data[i]);
        }
        printf("\\n");
    }
}
\`\`\`

### Receiving Data (Interrupt)

\`\`\`c
void CAN_StartReception(void) {
    HAL_CAN_ActivateNotification(&hcan, CAN_IT_RX_FIFO0_MSG_PENDING);
    HAL_CAN_Start(&hcan);
}

void HAL_CAN_RxFifo0MsgPendingCallback(CAN_HandleTypeDef *hcan) {
    CAN_RxHeaderTypeDef RxHeader;
    uint8_t RxData[8];
    
    if(HAL_CAN_GetRxMessage(hcan, CAN_RX_FIFO0, &RxHeader, RxData) == HAL_OK) {
        printf("CAN RX: ID=0x%03X, ", RxHeader.StdId);
        for(int i=0; i<RxHeader.DLC; i++) {
            printf("%02X ", RxData[i]);
        }
        printf("\\n");
    }
}
\`\`\`

## CAN FD (Flexible Data Rate)

### Advantages

\`\`\`
              CAN 2.0       CAN FD
Data length   8 bytes       64 bytes
Data bitrate  1 Mbps        8 Mbps
Efficiency    ~50%          ~85%
\`\`\`

### Frame Format

\`\`\`
Arbitration: Fixed 1Mbps (for reliable arbitration)
       ↓
Control: BRS (Bit Rate Switch)
       ↓
Data: Up to 8Mbps (for efficiency)
       ↓
CRC: Back to 1Mbps
\`\`\`

## Summary

CAN bus design essentials:

1. **Physical**: Twisted pair, 120Ω termination, differential signaling
2. **Arbitration**: Non-destructive, lower ID = higher priority
3. **Reliability**: CRC, ACK, error detection, auto-retransmit
4. **Baud rate**: All nodes must match
5. **Wiring**: Short stubs, hand-in-hand topology
`,fO=`# CAN 总线协议详解

## 什么是 CAN

CAN（Controller Area Network）是博世公司于 1986 年开发的串行通信协议，专为汽车电子设计，具有高可靠性和实时性。

![CAN 总线拓扑](/images/can-bus.jpg)

## CAN 的特点

| 特性 | 说明 |
|------|------|
| 多主架构 | 任何节点都可以在总线空闲时发送 |
| 非破坏性仲裁 | ID 小的优先级高，不会丢失数据 |
| 高可靠性 | CRC 校验、错误检测、自动重发 |
| 传输距离 | 1Mbps 时 40m，50Kbps 时 1km |
| 节点数量 | 理论上无限制（实际受限于驱动能力）|

## 物理层

### 差分信号

CAN 使用双绞线传输差分信号：

\`\`\`
CAN_H ───┬───────────────┬───────
         │    隐性(1)    │ 显性(0)
         │   2.5V/2.5V   │ 3.5V/1.5V
CAN_L ───┴───────────────┴───────
\`\`\`

- **显性位（0）**：CAN_H = 3.5V，CAN_L = 1.5V，差分 2V
- **隐性位（1）**：CAN_H = CAN_L = 2.5V，差分 0V

### 终端电阻

\`\`\`
      120Ω                    120Ω
CAN_H ──\\/\\/\\──────────────────\\/\\/\\───
        |                          |
CAN_L ──\\/\\/\\──────────────────\\/\\/\\───
      节点1                      节点N
      
// 终端电阻用于消除信号反射，必须接在总线两端
\`\`\`

## 数据链路层

### 标准帧格式（CAN 2.0A）

\`\`\`
位域           长度    说明
─────────────────────────────────
起始位(SOF)     1      显性位，表示帧开始
仲裁场(Arbitration)
  ├─ 标识符     11     消息 ID，越小优先级越高
  └─ RTR        1      远程传输请求位
控制场(Control)
  ├─ IDE        1      标识符扩展位
  ├─ 保留位     1
  └─ DLC        4      数据长度码(0-8)
数据场(Data)    0-64   实际数据(0-8字节)
CRC 场          16     循环冗余校验
ACK 场          2      应答位
帧结束(EOF)     7      隐性位，表示帧结束
\`\`\`

![CAN 帧格式](/images/can-bus.jpg)

### 仲裁机制

\`\`\`
节点A: ID = 0x123 (0 0010 0100 011)
       ↓↓↓↓↓↓↓↓↓↓↓
总线:  0 0010 0100 011...
       ↓↓↓↓↓↓↓↓↓↓↓
节点B: ID = 0x156 (0 0010 1010 110)
                 ↑
                 这里不同，节点B 检测到显性位，自动退出发送

结果：节点A 赢得仲裁，继续发送
\`\`\`

## STM32 CAN 编程

### 初始化配置

\`\`\`c
#include "stm32f1xx_hal.h"

CAN_HandleTypeDef hcan;

void CAN_Init(void) {
    // 使能时钟
    __HAL_RCC_CAN1_CLK_ENABLE();
    __HAL_RCC_GPIOA_CLK_ENABLE();
    
    // GPIO 配置 PA11-CAN_RX, PA12-CAN_TX
    GPIO_InitTypeDef GPIO_InitStruct = {0};
    GPIO_InitStruct.Pin = GPIO_PIN_11;
    GPIO_InitStruct.Mode = GPIO_MODE_INPUT;
    GPIO_InitStruct.Pull = GPIO_PULLUP;
    HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);
    
    GPIO_InitStruct.Pin = GPIO_PIN_12;
    GPIO_InitStruct.Mode = GPIO_MODE_AF_PP;
    GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_HIGH;
    HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);
    
    // CAN 初始化
    hcan.Instance = CAN1;
    hcan.Init.Prescaler = 9;           // 预分频
    hcan.Init.Mode = CAN_MODE_NORMAL;  // 正常模式
    hcan.Init.SyncJumpWidth = CAN_SJW_1TQ;
    hcan.Init.TimeSeg1 = CAN_BS1_13TQ; // 时间段1
    hcan.Init.TimeSeg2 = CAN_BS2_2TQ;  // 时间段2
    // 波特率 = 36MHz / 9 / (1+13+2) = 250Kbps
    HAL_CAN_Init(&hcan);
    
    // 配置过滤器 - 接收所有消息
    CAN_FilterTypeDef canfilterconfig = {0};
    canfilterconfig.FilterBank = 0;
    canfilterconfig.FilterMode = CAN_FILTERMODE_IDMASK;
    canfilterconfig.FilterScale = CAN_FILTERSCALE_32BIT;
    canfilterconfig.FilterIdHigh = 0x0000;
    canfilterconfig.FilterIdLow = 0x0000;
    canfilterconfig.FilterMaskIdHigh = 0x0000;
    canfilterconfig.FilterMaskIdLow = 0x0000;
    canfilterconfig.FilterFIFOAssignment = CAN_RX_FIFO0;
    canfilterconfig.FilterActivation = ENABLE;
    HAL_CAN_ConfigFilter(&hcan, &canfilterconfig);
}
\`\`\`

### 发送数据

\`\`\`c
void CAN_Send(uint16_t id, uint8_t *data, uint8_t len) {
    CAN_TxHeaderTypeDef TxHeader = {0};
    uint8_t TxData[8];
    uint32_t TxMailbox;
    
    TxHeader.StdId = id;        // 标准 ID
    TxHeader.ExtId = 0;         // 扩展 ID
    TxHeader.IDE = CAN_ID_STD;  // 标准帧
    TxHeader.RTR = CAN_RTR_DATA;// 数据帧
    TxHeader.DLC = len;         // 数据长度
    TxHeader.TransmitGlobalTime = DISABLE;
    
    memcpy(TxData, data, len);
    
    if(HAL_CAN_AddTxMessage(&hcan, &TxHeader, TxData, &TxMailbox) == HAL_OK) {
        printf("CAN TX: ID=0x%03X, ", id);
        for(int i=0; i<len; i++) {
            printf("%02X ", data[i]);
        }
        printf("\\n");
    }
}

// 使用示例
uint8_t data[] = {0x01, 0x02, 0x03, 0x04};
CAN_Send(0x123, data, 4);
\`\`\`

### 接收数据（中断方式）

\`\`\`c
void CAN_StartReception(void) {
    // 开启 FIFO0 消息挂起中断
    HAL_CAN_ActivateNotification(&hcan, CAN_IT_RX_FIFO0_MSG_PENDING);
    HAL_CAN_Start(&hcan);
}

// 中断回调
void HAL_CAN_RxFifo0MsgPendingCallback(CAN_HandleTypeDef *hcan) {
    CAN_RxHeaderTypeDef RxHeader;
    uint8_t RxData[8];
    
    if(HAL_CAN_GetRxMessage(hcan, CAN_RX_FIFO0, &RxHeader, RxData) == HAL_OK) {
        printf("CAN RX: ID=0x%03X, ", RxHeader.StdId);
        for(int i=0; i<RxHeader.DLC; i++) {
            printf("%02X ", RxData[i]);
        }
        printf("\\n");
        
        // 处理接收到的数据
        Process_CAN_Message(RxHeader.StdId, RxData, RxHeader.DLC);
    }
}
\`\`\`

## CAN FD（灵活数据速率）

### CAN FD 的优势

\`\`\`
              CAN 2.0       CAN FD
数据长度       8 字节        64 字节
数据段波特率   1 Mbps        8 Mbps
有效载荷      ~50%          ~85%
\`\`\`

### CAN FD 帧格式

\`\`\`
仲裁段: 固定 1Mbps（保证仲裁可靠性）
       ↓
控制位: BRS (Bit Rate Switch) - 切换波特率
       ↓
数据段: 最高 8Mbps（提高传输效率）
       ↓
CRC 段: 回到 1Mbps
\`\`\`

## 应用层协议

### J1939（商用车）

\`\`\`c
// J1939 29 位扩展 ID 结构
typedef union {
    uint32_t ExtId;
    struct {
        uint8_t SourceAddress;      // 源地址 (8 bit)
        uint8_t PDUSpecific;        // PDU 特定字段 (8 bit)
        uint8_t PDUF:5;             // PDU 格式 (5 bit)
        uint8_t DataPage:1;         // 数据页 (1 bit)
        uint8_t ExtendedDataPage:1; // 扩展数据页 (1 bit)
        uint8_t Priority:3;         // 优先级 (3 bit)
        uint8_t Reserved:5;         // 保留 (5 bit)
    };
} J1939_ID_t;

// 示例：发动机转速 (PGN 61444)
// Priority = 3, PGN = 0xF004, SA = 0x00
uint32_t rpm_msg_id = (3 << 26) | (0xF004 << 8) | 0x00;
\`\`\`

### CANopen（工业控制）

\`\`\`c
// CANopen COB-ID 分配
#define COB_ID_NMT      0x000   // 网络管理
#define COB_ID_SYNC     0x080   // 同步对象
#define COB_ID_EMCY     0x080   // 紧急报文 (Node ID + 0x80)
#define COB_ID_TPDO1    0x180   // TPDO1 (Node ID + 0x180)
#define COB_ID_RPDO1    0x200   // RPDO1 (Node ID + 0x200)
#define COB_ID_TSDO     0x580   // SDO 应答 (Node ID + 0x580)
#define COB_ID_RSDO     0x600   // SDO 请求 (Node ID + 0x600)
#define COB_ID_HEARTBEAT 0x700  // 心跳报文 (Node ID + 0x700)
\`\`\`

## 故障排查

### 常见错误

| 错误类型 | 原因 | 解决 |
|---------|------|------|
| 位错误 | 发送的位与回读的位不一致 | 检查物理连接、终端电阻 |
| 填充错误 | 连续 6 个相同位 | 检查波特率配置 |
| CRC 错误 | 校验失败 | 检查干扰、线缆质量 |
| 格式错误 | 固定格式位错误 | 检查收发器 |
| 应答错误 | 无 ACK | 检查是否有其他节点在线 |

### 调试工具

- **CAN 分析仪**：PCAN、周立功 CANalyst-II
- **示波器**：查看波形质量
- **逻辑分析仪**：解码 CAN 协议

![CAN 波形分析](/images/can-bus.jpg)

## 总结

CAN 总线设计要点：

1. **物理层**：双绞线、终端电阻 120Ω、差分信号
2. **仲裁**：非破坏性，ID 小优先级高
3. **可靠性**：CRC、ACK、错误检测、自动重发
4. **波特率**：所有节点必须一致
5. **布线**：支线尽量短，手牵手拓扑
`,dO=`## useState Tips

\`\`\`jsx
const [count, setCount] = useState(0);
const [user, setUser] = useState({ name: '', age: 0 });
\`\`\`

### Functional Updates

When the new state depends on the old state, use functional updates:

\`\`\`jsx
setCount(prevCount => prevCount + 1);
\`\`\`

## useEffect Dependency Management

Proper dependency management is key to avoiding infinite loops and stale closures:

\`\`\`jsx
useEffect(() => {
  console.log('Component mounted');
  return () => {
    console.log('Component will unmount');
  };
}, []);
\`\`\`

## useCallback and useMemo

Used for performance optimization, but overuse may be counterproductive:

\`\`\`jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
\`\`\`

## Custom Hooks

Extract logic into custom Hooks to improve code reusability:

\`\`\`jsx
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    const updateSize = () => setSize([window.innerWidth, window.innerHeight]);
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
\`\`\`
`,pO=`## useState 使用技巧

\`\`\`jsx
const [count, setCount] = useState(0);
const [user, setUser] = useState({ name: '', age: 0 });
\`\`\`

### 函数式更新

当新状态依赖于旧状态时，使用函数式更新：

\`\`\`jsx
setCount(prevCount => prevCount + 1);
\`\`\`

## useEffect 依赖管理

正确管理依赖数组是避免无限循环和过期闭包的关键：

\`\`\`jsx
useEffect(() => {
  console.log('Component mounted');
  return () => {
    console.log('Component will unmount');
  };
}, []);
\`\`\`

## useCallback 和 useMemo

用于性能优化，但过度使用可能适得其反：

\`\`\`jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
\`\`\`

## 自定义 Hooks

将逻辑抽离到自定义 Hooks 中，提高代码复用性：

\`\`\`jsx
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    const updateSize = () => setSize([window.innerWidth, window.innerHeight]);
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
\`\`\`
`,hO=`# RESTful API Design Best Practices

## What is RESTful API

REST (Representational State Transfer) is a software architectural style for designing communication interfaces for network applications.

![API Architecture](/images/api-design.jpg)

## Core Principles

### 1. Use HTTP Methods for Operations

| Method | Operation | Idempotent |
|--------|-----------|------------|
| GET | Retrieve resource | ✅ |
| POST | Create resource | ❌ |
| PUT | Full update | ✅ |
| PATCH | Partial update | ❌ |
| DELETE | Delete resource | ✅ |

\`\`\`
GET    /api/users          # Get user list
GET    /api/users/123      # Get specific user
POST   /api/users          # Create new user
PUT    /api/users/123      # Update user (full)
PATCH  /api/users/123      # Partial update (e.g., only email)
DELETE /api/users/123      # Delete user
\`\`\`

### 2. Resource Naming Conventions

Use plural nouns, avoid verbs:

\`\`\`
✅ GET /api/articles
✅ GET /api/articles/123/comments

❌ GET /api/getArticles
❌ GET /api/getArticleById
\`\`\`

![Resource Hierarchy](/images/api-design.jpg)

## URL Design

### Hierarchical Relationships

\`\`\`
GET /api/authors/123/articles           # Get all articles by author
GET /api/authors/123/articles/456       # Get specific article by author
GET /api/articles/456/comments          # Get article comments
POST /api/articles/456/comments         # Add comment to article
\`\`\`

### Filtering, Sorting, Pagination

\`\`\`
GET /api/users?role=admin&status=active
GET /api/articles?sort=-createdAt       # Sort by creation time desc
GET /api/articles?page=2&limit=10       # Pagination
GET /api/articles?fields=title,summary  # Field selection
\`\`\`

## Status Codes

### 2xx Success

\`\`\`
200 OK           - Request successful
201 Created      - Creation successful
204 No Content   - Deletion successful (no content)
\`\`\`

### 4xx Client Errors

\`\`\`
400 Bad Request           - Invalid parameters
401 Unauthorized          - Not authenticated
403 Forbidden             - No permission
404 Not Found             - Resource not found
409 Conflict              - Resource conflict (e.g., duplicate)
422 Unprocessable Entity  - Validation failed
\`\`\`

### 5xx Server Errors

\`\`\`
500 Internal Server Error - Server error
502 Bad Gateway           - Gateway error
503 Service Unavailable   - Service unavailable
\`\`\`

![Status Code Distribution](/images/api-design.jpg)

## Response Format

### Success Response

\`\`\`json
{
  "data": {
    "id": 123,
    "name": "John Doe",
    "email": "john@example.com"
  },
  "meta": {
    "timestamp": "2024-03-20T10:30:00Z",
    "requestId": "uuid-123"
  }
}
\`\`\`

### List Response

\`\`\`json
{
  "data": [
    { "id": 1, "name": "User 1" },
    { "id": 2, "name": "User 2" }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  }
}
\`\`\`

### Error Response

\`\`\`json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Request validation failed",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ]
  }
}
\`\`\`

## Versioning

### URL Path Version

\`\`\`
/api/v1/users
/api/v2/users
\`\`\`

### Header Version

\`\`\`
Accept: application/vnd.api.v1+json
\`\`\`

![Version Evolution](/images/api-design.jpg)

## Security

### Authentication

\`\`\`
Authorization: Bearer <token>
\`\`\`

### HTTPS

Enforce HTTPS, reject plain HTTP requests.

### Rate Limiting

\`\`\`
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 99
X-RateLimit-Reset: 1647865200
\`\`\`

## Documentation

Use OpenAPI (Swagger) specification:

\`\`\`yaml
openapi: 3.0.0
info:
  title: User API
  version: 1.0.0

paths:
  /api/users:
    get:
      summary: Get user list
      parameters:
        - name: page
          in: query
          schema:
            type: integer
            default: 1
      responses:
        200:
          description: Success
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'
\`\`\`

## Summary

Excellent RESTful API characteristics:

- ✅ Use correct HTTP methods
- ✅ Clear resource naming
- ✅ Appropriate status codes
- ✅ Unified response format
- ✅ Comprehensive error handling
- ✅ Version control strategy
- ✅ Complete security mechanisms
`,mO=`# RESTful API 设计最佳实践

## 什么是 RESTful API

REST（Representational State Transfer）是一种软件架构风格，用于设计网络应用程序的通信接口。

![API 架构](/images/api-design.jpg)

## 核心原则

### 1. 使用 HTTP 方法表示操作

| 方法 | 操作 | 幂等性 |
|------|------|--------|
| GET | 获取资源 | ✅ |
| POST | 创建资源 | ❌ |
| PUT | 全量更新 | ✅ |
| PATCH | 部分更新 | ❌ |
| DELETE | 删除资源 | ✅ |

\`\`\`
GET    /api/users          # 获取用户列表
GET    /api/users/123      # 获取特定用户
POST   /api/users          # 创建新用户
PUT    /api/users/123      # 更新用户信息（全量）
PATCH  /api/users/123      # 部分更新（如只改邮箱）
DELETE /api/users/123      # 删除用户
\`\`\`

### 2. 资源命名规范

使用名词的复数形式，避免动词：

\`\`\`
✅ GET /api/articles
✅ GET /api/articles/123/comments

❌ GET /api/getArticles
❌ GET /api/getArticleById
\`\`\`

![资源层级](/images/api-design.jpg)

## URL 设计

### 层级关系

\`\`\`
GET /api/authors/123/articles           # 获取某作者的所有文章
GET /api/authors/123/articles/456       # 获取某作者的特定文章
GET /api/articles/456/comments          # 获取文章的评论
POST /api/articles/456/comments         # 为文章添加评论
\`\`\`

### 过滤、排序、分页

\`\`\`
GET /api/users?role=admin&status=active
GET /api/articles?sort=-createdAt       # 按创建时间倒序
GET /api/articles?page=2&limit=10       # 分页
GET /api/articles?fields=title,summary  # 字段筛选
\`\`\`

## 状态码规范

### 2xx 成功

\`\`\`
200 OK           - 请求成功
201 Created      - 创建成功
204 No Content   - 删除成功（无返回内容）
\`\`\`

### 4xx 客户端错误

\`\`\`
400 Bad Request           - 请求参数错误
401 Unauthorized          - 未认证
403 Forbidden             - 无权限
404 Not Found             - 资源不存在
409 Conflict              - 资源冲突（如重复创建）
422 Unprocessable Entity  - 验证失败
\`\`\`

### 5xx 服务端错误

\`\`\`
500 Internal Server Error - 服务器内部错误
502 Bad Gateway           - 网关错误
503 Service Unavailable   - 服务不可用
\`\`\`

![状态码分布](/images/api-design.jpg)

## 响应格式

### 成功响应

\`\`\`json
{
  "data": {
    "id": 123,
    "name": "张三",
    "email": "zhangsan@example.com"
  },
  "meta": {
    "timestamp": "2024-03-20T10:30:00Z",
    "requestId": "uuid-123"
  }
}
\`\`\`

### 列表响应

\`\`\`json
{
  "data": [
    { "id": 1, "name": "用户1" },
    { "id": 2, "name": "用户2" }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  }
}
\`\`\`

### 错误响应

\`\`\`json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "请求参数验证失败",
    "details": [
      {
        "field": "email",
        "message": "邮箱格式不正确"
      }
    ]
  }
}
\`\`\`

## 版本控制

### URL 路径版本

\`\`\`
/api/v1/users
/api/v2/users
\`\`\`

### Header 版本

\`\`\`
Accept: application/vnd.api.v1+json
\`\`\`

![版本演进](/images/api-design.jpg)

## 安全性

### 认证

\`\`\`
Authorization: Bearer <token>
\`\`\`

### HTTPS

强制使用 HTTPS，拒绝明文 HTTP 请求。

### 限流

\`\`\`
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 99
X-RateLimit-Reset: 1647865200
\`\`\`

## 文档规范

使用 OpenAPI (Swagger) 规范文档：

\`\`\`yaml
openapi: 3.0.0
info:
  title: 用户 API
  version: 1.0.0

paths:
  /api/users:
    get:
      summary: 获取用户列表
      parameters:
        - name: page
          in: query
          schema:
            type: integer
            default: 1
      responses:
        200:
          description: 成功
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'
\`\`\`

## 总结

优秀的 RESTful API：

- ✅ 使用正确的 HTTP 方法
- ✅ 清晰的资源命名
- ✅ 合适的状态码
- ✅ 统一的响应格式
- ✅ 完善的错误处理
- ✅ 版本控制策略
- ✅ 完善的安全机制
`,gO=`# FreeRTOS Real-Time Operating System Basics

## What is RTOS

RTOS (Real-Time Operating System) is designed for real-time applications, ensuring tasks complete within deterministic time constraints.

![FreeRTOS Architecture](/images/freertos.jpg)

## Why FreeRTOS

- **Open Source**: MIT license, commercial use allowed
- **Lightweight**: Minimum 4-9KB ROM
- **Portable**: Supports 35+ processor architectures
- **Widely Used**: AWS, Tesla, and more

## Core Concepts

### Tasks

In FreeRTOS, a task is the basic unit of execution:

\`\`\`c
// Task function prototype
void vTaskFunction(void *pvParameters) {
    while(1) {
        // Task body
        printf("Task running\\n");
        
        // Delay 1000 ticks
        vTaskDelay(pdMS_TO_TICKS(1000));
    }
}

// Create task
int main(void) {
    xTaskCreate(
        vTaskFunction,      // Task function
        "TaskName",         // Task name
        256,                // Stack size (words)
        NULL,               // Parameter
        1,                  // Priority
        NULL                // Task handle
    );
    
    vTaskStartScheduler();  // Start scheduler
    return 0;
}
\`\`\`

### Task States

\`\`\`
Running ←────────────────┐
     ↓                   │
Ready ←──────────────────┤←── Scheduler selects highest priority
     ↓                   │
Blocked ─────────────────┘
(waiting delay/semaphore/event)
     ↓
Suspended
(vTaskSuspend called)
\`\`\`

![Task State Machine](/images/freertos.jpg)

## Task Scheduling

### Preemptive Priority Scheduling

\`\`\`c
// Create tasks with different priorities
void vHighPriorityTask(void *pv) {
    while(1) {
        printf("High priority task\\n");
        vTaskDelay(1);  // Yield CPU
    }
}

void vLowPriorityTask(void *pv) {
    while(1) {
        printf("Low priority task\\n");
        // Without delay, high priority can't run
        vTaskDelay(1);
    }
}

// Higher number = higher priority
xTaskCreate(vHighPriorityTask, "High", 128, NULL, 2, NULL);
xTaskCreate(vLowPriorityTask, "Low", 128, NULL, 1, NULL);
\`\`\`

## Synchronization

### Binary Semaphore

\`\`\`c
SemaphoreHandle_t xBinarySemaphore;

void vProducerTask(void *pv) {
    while(1) {
        // Produce data
        xSemaphoreGive(xBinarySemaphore);  // Release semaphore
        vTaskDelay(pdMS_TO_TICKS(100));
    }
}

void vConsumerTask(void *pv) {
    while(1) {
        // Wait for semaphore
        if(xSemaphoreTake(xBinarySemaphore, portMAX_DELAY) == pdTRUE) {
            printf("Data received\\n");
        }
    }
}
\`\`\`

### Mutex

\`\`\`c
SemaphoreHandle_t xMutex;
int sharedResource = 0;

void vSafeAccessTask(void *pv) {
    while(1) {
        // Take mutex
        if(xSemaphoreTake(xMutex, portMAX_DELAY) == pdTRUE) {
            // Critical section - access shared resource
            sharedResource++;
            
            // Release mutex
            xSemaphoreGive(xMutex);
        }
    }
}
\`\`\`

![Synchronization](/images/freertos.jpg)

## Queue Communication

\`\`\`c
QueueHandle_t xQueue;

typedef struct {
    uint8_t sensorId;
    int16_t value;
    uint32_t timestamp;
} SensorData_t;

void vSensorTask(void *pv) {
    SensorData_t data;
    while(1) {
        data.sensorId = 1;
        data.value = read_sensor();
        data.timestamp = xTaskGetTickCount();
        
        // Send to queue (wait 100ms)
        xQueueSend(xQueue, &data, pdMS_TO_TICKS(100));
        
        vTaskDelay(pdMS_TO_TICKS(50));
    }
}

void vProcessTask(void *pv) {
    SensorData_t receivedData;
    while(1) {
        // Receive from queue (wait forever)
        if(xQueueReceive(xQueue, &receivedData, portMAX_DELAY) == pdTRUE) {
            printf("Sensor %d: %d at %lu\\n", 
                   receivedData.sensorId,
                   receivedData.value,
                   receivedData.timestamp);
        }
    }
}
\`\`\`

## Interrupt and Task Interaction

\`\`\`c
// Interrupt service routine
void TIM2_IRQHandler(void) {
    BaseType_t xHigherPriorityTaskWoken = pdFALSE;
    
    // Give semaphore from ISR
    xSemaphoreGiveFromISR(xBinarySemaphore, &xHigherPriorityTaskWoken);
    
    // Context switch if higher priority task ready
    portYIELD_FROM_ISR(xHigherPriorityTaskWoken);
}
\`\`\`

## Memory Management

FreeRTOS provides 5 heap management schemes:

| Scheme | Characteristics | Use Case |
|--------|-----------------|----------|
| Heap_1 | Allocate only, no free | Apps without task deletion |
| Heap_2 | Best fit (fragmentation) | Not recommended |
| Heap_3 | Uses C library malloc | Simple porting |
| Heap_4 | First fit + coalesce | **Recommended** |
| Heap_5 | Heap_4 + multiple regions | Multiple RAM blocks |

\`\`\`c
// Heap_4 usage
void *ptr = pvPortMalloc(100);  // Allocate
vPortFree(ptr);                  // Free

// Check heap info
size_t freeHeap = xPortGetFreeHeapSize();
size_t minFreeHeap = xPortGetMinimumEverFreeHeapSize();
\`\`\`

![Memory Allocation](/images/freertos.jpg)

## Low Power Design

\`\`\`c
// Enable Tickless mode
#define configUSE_TICKLESS_IDLE  1
#define configEXPECTED_IDLE_TIME_BEFORE_SLEEP 2

// Configure idle hook for sleep
void vApplicationIdleHook(void) {
    // Check if can enter sleep
    if(canEnterSleep()) {
        __WFI();  // Wait for interrupt
    }
}
\`\`\`

## Debugging Tips

### View Task Status

\`\`\`c
// Print task list
void vPrintTaskList(void) {
    char buffer[512];
    vTaskList(buffer);
    printf("Task Name    State  Priority  Stack\\n");
    printf("%s\\n", buffer);
}

// Output example:
// TaskName    X   2   120
// IDLE        R   0   60
// Tmr Svc     B   5   80
\`\`\`

### Runtime Statistics

\`\`\`c
#define configGENERATE_RUN_TIME_STATS 1
#define configUSE_TRACE_FACILITY 1

void vPrintRunTimeStats(void) {
    char buffer[512];
    vTaskGetRunTimeStats(buffer);
    printf("Task Name    Abs Time    %%Time\\n");
    printf("%s\\n", buffer);
}
\`\`\`

## Common Issues

### 1. Stack Overflow
- Use \`uxTaskGetStackHighWaterMark()\` to check stack usage
- Enable \`configCHECK_FOR_STACK_OVERFLOW\`
- Increase task stack size appropriately

### 2. Priority Inversion
- Use mutex instead of binary semaphore for resource protection
- FreeRTOS mutex has priority inheritance

### 3. Interrupt Latency
- ISR only sets flags, actual processing in tasks
- Use \`FromISR\` suffix APIs

## Summary

FreeRTOS key points:

1. **Tasks** - Independent threads with separate stacks
2. **Scheduler** - Preemptive priority + time slicing
3. **Sync** - Semaphores, mutexes, event groups
4. **Comm** - Queues, stream buffers, message buffers
5. **Interrupts** - Use FromISR version APIs
`,vO=`# FreeRTOS 实时操作系统入门

## 什么是 RTOS

RTOS（Real-Time Operating System）是专为实时应用设计的操作系统，能够保证任务在确定的时间内完成响应。

![FreeRTOS 架构](/images/freertos.jpg)

## 为什么选择 FreeRTOS

- **开源免费**：MIT 许可证，可商用
- **轻量级**：最小仅需 4-9KB ROM
- **可移植性**：支持 35+ 种处理器架构
- **广泛应用**：AWS、特斯拉等都在使用

## 核心概念

### 任务（Task）

FreeRTOS 中，任务是最基本的执行单元：

\`\`\`c
// 任务函数原型
void vTaskFunction(void *pvParameters) {
    while(1) {
        // 任务主体
        printf("Task running\\n");
        
        // 延时 1000 个 tick
        vTaskDelay(pdMS_TO_TICKS(1000));
    }
}

// 创建任务
int main(void) {
    xTaskCreate(
        vTaskFunction,      // 任务函数
        "TaskName",         // 任务名称
        256,                // 栈大小（字）
        NULL,               // 参数
        1,                  // 优先级
        NULL                // 任务句柄
    );
    
    vTaskStartScheduler();  // 启动调度器
    return 0;
}
\`\`\`

### 任务状态

\`\`\`
运行态(Running) ←────┐
     ↓               │
就绪态(Ready) ←──────┤←── 调度器选择最高优先级任务
     ↓               │
阻塞态(Blocked) ─────┘
（等待延时/信号量/事件）
     ↓
挂起态(Suspended)
（调用 vTaskSuspend）
\`\`\`

![任务状态机](/images/freertos.jpg)

## 任务调度

### 优先级抢占式调度

\`\`\`c
// 创建不同优先级的任务
void vHighPriorityTask(void *pv) {
    while(1) {
        printf("High priority task\\n");
        vTaskDelay(1);  // 主动让出 CPU
    }
}

void vLowPriorityTask(void *pv) {
    while(1) {
        printf("Low priority task\\n");
        // 如果不加延时，高优先级任务无法运行
        vTaskDelay(1);
    }
}

// 优先级数字越大，优先级越高
xTaskCreate(vHighPriorityTask, "High", 128, NULL, 2, NULL);
xTaskCreate(vLowPriorityTask, "Low", 128, NULL, 1, NULL);
\`\`\`

## 同步机制

### 二值信号量

\`\`\`c
SemaphoreHandle_t xBinarySemaphore;

void vProducerTask(void *pv) {
    while(1) {
        // 产生数据
        xSemaphoreGive(xBinarySemaphore);  // 释放信号量
        vTaskDelay(pdMS_TO_TICKS(100));
    }
}

void vConsumerTask(void *pv) {
    while(1) {
        // 等待信号量
        if(xSemaphoreTake(xBinarySemaphore, portMAX_DELAY) == pdTRUE) {
            printf("Data received\\n");
        }
    }
}
\`\`\`

### 互斥量（Mutex）

\`\`\`c
SemaphoreHandle_t xMutex;
int sharedResource = 0;

void vSafeAccessTask(void *pv) {
    while(1) {
        // 获取互斥量
        if(xSemaphoreTake(xMutex, portMAX_DELAY) == pdTRUE) {
            // 临界区 - 访问共享资源
            sharedResource++;
            
            // 释放互斥量
            xSemaphoreGive(xMutex);
        }
    }
}
\`\`\`

![同步机制](/images/freertos.jpg)

## 队列通信

\`\`\`c
QueueHandle_t xQueue;

typedef struct {
    uint8_t sensorId;
    int16_t value;
    uint32_t timestamp;
} SensorData_t;

void vSensorTask(void *pv) {
    SensorData_t data;
    while(1) {
        data.sensorId = 1;
        data.value = read_sensor();
        data.timestamp = xTaskGetTickCount();
        
        // 发送到队列（等待 100ms）
        xQueueSend(xQueue, &data, pdMS_TO_TICKS(100));
        
        vTaskDelay(pdMS_TO_TICKS(50));
    }
}

void vProcessTask(void *pv) {
    SensorData_t receivedData;
    while(1) {
        // 从队列接收（永久等待）
        if(xQueueReceive(xQueue, &receivedData, portMAX_DELAY) == pdTRUE) {
            printf("Sensor %d: %d at %lu\\n", 
                   receivedData.sensorId,
                   receivedData.value,
                   receivedData.timestamp);
        }
    }
}
\`\`\`

## 中断与任务交互

\`\`\`c
// 中断服务程序
void TIM2_IRQHandler(void) {
    BaseType_t xHigherPriorityTaskWoken = pdFALSE;
    
    // 从 ISR 释放信号量
    xSemaphoreGiveFromISR(xBinarySemaphore, &xHigherPriorityTaskWoken);
    
    // 上下文切换（如果有更高优先级任务就绪）
    portYIELD_FROM_ISR(xHigherPriorityTaskWoken);
}
\`\`\`

## 内存管理

FreeRTOS 提供 5 种堆管理方案：

| 方案 | 特点 | 适用场景 |
|------|------|---------|
| Heap_1 | 只分配不释放 | 任务不删除的应用 |
| Heap_2 | 最佳匹配（有碎片） | 不推荐 |
| Heap_3 | 使用 C 库 malloc | 简单移植 |
| Heap_4 | 首次匹配 + 合并 | **推荐使用** |
| Heap_5 | Heap_4 + 多内存区 | 有多个 RAM 块 |

\`\`\`c
// Heap_4 使用示例
void *ptr = pvPortMalloc(100);  // 分配
vPortFree(ptr);                  // 释放

// 查看堆信息
size_t freeHeap = xPortGetFreeHeapSize();
size_t minFreeHeap = xPortGetMinimumEverFreeHeapSize();
\`\`\`

![内存分配](/images/freertos.jpg)

## 低功耗设计

\`\`\`c
// 启用 Tickless 模式
#define configUSE_TICKLESS_IDLE  1
#define configEXPECTED_IDLE_TIME_BEFORE_SLEEP 2

// 配置进入睡眠的钩子函数
void vApplicationIdleHook(void) {
    // 检查是否可以进入睡眠
    if(canEnterSleep()) {
        __WFI();  // 等待中断唤醒
    }
}
\`\`\`

## 调试技巧

### 查看任务状态

\`\`\`c
// 打印任务列表
void vPrintTaskList(void) {
    char buffer[512];
    vTaskList(buffer);
    printf("Task Name    State  Priority  Stack\\n");
    printf("%s\\n", buffer);
}

// 输出示例：
// TaskName    X   2   120
// IDLE        R   0   60
// Tmr Svc     B   5   80
\`\`\`

### 运行时统计

\`\`\`c
#define configGENERATE_RUN_TIME_STATS 1
#define configUSE_TRACE_FACILITY 1

void vPrintRunTimeStats(void) {
    char buffer[512];
    vTaskGetRunTimeStats(buffer);
    printf("Task Name    Abs Time    %%Time\\n");
    printf("%s\\n", buffer);
}
\`\`\`

## 常见问题

### 1. 栈溢出
- 使用 \`uxTaskGetStackHighWaterMark()\` 检查栈使用情况
- 启用 \`configCHECK_FOR_STACK_OVERFLOW\`
- 适当增加任务栈大小

### 2. 优先级反转
- 使用互斥量而非二值信号量保护资源
- FreeRTOS 互斥量有优先级继承机制

### 3. 中断延迟
- ISR 中只设置标志，具体处理在任务中完成
- 使用 \`FromISR\` 结尾的 API

## 总结

FreeRTOS 核心要点：

1. **任务** - 独立执行的线程，有独立栈
2. **调度器** - 优先级抢占 + 时间片轮转
3. **同步** - 信号量、互斥量、事件组
4. **通信** - 队列、流缓冲区、消息缓冲区
5. **中断** - 使用 FromISR 版本 API
`,yO=`# TypeScript Advanced Usage

## Why Use TypeScript

TypeScript is a superset of JavaScript that provides a powerful type system for more robust and efficient development.

![TypeScript Type System](/images/typescript.jpg)

## Advanced Types

### 1. Generics

Generics make code more flexible while maintaining type safety:

\`\`\`typescript
// Generic function
function identity<T>(arg: T): T {
  return arg;
}

// Generic interface
interface GenericResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Usage
const userResponse: GenericResponse<User> = {
  data: { id: 1, name: 'John' },
  status: 200,
  message: 'success'
};
\`\`\`

### 2. Conditional Types

Select types based on conditions:

\`\`\`typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<string>;  // true
type B = IsString<number>;  // false

// Practical: Extract Promise return type
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type Result = UnwrapPromise<Promise<string>>;  // string
\`\`\`

### 3. Mapped Types

Transform type properties in bulk:

\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Custom: Make all properties optional and readonly
type ReadonlyPartial<T> = {
  readonly [P in keyof T]?: T[P];
};
\`\`\`

![Type Transformation](/images/typescript.jpg)

## Utility Types

### Record<K, T>

Create key-value pair types:

\`\`\`typescript
type PageInfo = {
  title: string;
  path: string;
};

const pages: Record<string, PageInfo> = {
  home: { title: 'Home', path: '/' },
  about: { title: 'About', path: '/about' }
};
\`\`\`

### ReturnType<T>

Extract function return type:

\`\`\`typescript
function createUser(name: string, age: number) {
  return { id: Math.random(), name, age };
}

type User = ReturnType<typeof createUser>;
// { id: number; name: string; age: number }
\`\`\`

### Parameters<T>

Extract function parameter types:

\`\`\`typescript
type UserParams = Parameters<typeof createUser>;
// [name: string, age: number]
\`\`\`

## Type Guards

Runtime type checking:

\`\`\`typescript
// typeof type guard
function processValue(value: string | number) {
  if (typeof value === 'string') {
    // TypeScript knows value is string here
    return value.toUpperCase();
  }
  // Here value is number
  return value.toFixed(2);
}

// instanceof type guard
class Dog {
  bark() { console.log('Woof!'); }
}

class Cat {
  meow() { console.log('Meow!'); }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// Custom type guard
interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
\`\`\`

![Type Guards](/images/typescript.jpg)

## Decorators

Decorators are special declarations that can be attached to classes, methods, properties, etc.:

\`\`\`typescript
// Method decorator
function measure(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  
  descriptor.value = async function (...args: any[]) {
    const start = performance.now();
    const result = await originalMethod.apply(this, args);
    const end = performance.now();
    console.log(\`\${propertyKey} execution time: \${end - start}ms\`);
    return result;
  };
}

class DataService {
  @measure
  async fetchData() {
    // Time-consuming operation
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { data: [] };
  }
}
\`\`\`

## Summary

TypeScript advanced features:

- **Generics** - Code reuse + type safety
- **Conditional Types** - Dynamic type selection
- **Mapped Types** - Bulk type transformation
- **Utility Types** - Improve development efficiency
- **Type Guards** - Runtime type safety
`,xO=`# TypeScript 高级用法

## 为什么使用 TypeScript

TypeScript 是 JavaScript 的超集，为代码提供了强大的类型系统，让开发更加稳健高效。

![TypeScript 类型系统](/images/typescript.jpg)

## 高级类型

### 1. 泛型（Generics）

泛型让代码更灵活且保持类型安全：

\`\`\`typescript
// 泛型函数
function identity<T>(arg: T): T {
  return arg;
}

// 泛型接口
interface GenericResponse<T> {
  data: T;
  status: number;
  message: string;
}

// 使用
const userResponse: GenericResponse<User> = {
  data: { id: 1, name: '张三' },
  status: 200,
  message: 'success'
};
\`\`\`

### 2. 条件类型

根据条件选择类型：

\`\`\`typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<string>;  // true
type B = IsString<number>;  // false

// 实际应用：提取 Promise 返回值
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type Result = UnwrapPromise<Promise<string>>;  // string
\`\`\`

### 3. 映射类型

批量转换类型属性：

\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// 自定义：将所有属性变为可选且只读
type ReadonlyPartial<T> = {
  readonly [P in keyof T]?: T[P];
};
\`\`\`

![类型转换示意图](/images/typescript.jpg)

## 实用工具类型

### Record<K, T>

创建键值对类型：

\`\`\`typescript
type PageInfo = {
  title: string;
  path: string;
};

const pages: Record<string, PageInfo> = {
  home: { title: '首页', path: '/' },
  about: { title: '关于', path: '/about' }
};
\`\`\`

### ReturnType<T>

提取函数返回值类型：

\`\`\`typescript
function createUser(name: string, age: number) {
  return { id: Math.random(), name, age };
}

type User = ReturnType<typeof createUser>;
// { id: number; name: string; age: number }
\`\`\`

### Parameters<T>

提取函数参数类型：

\`\`\`typescript
type UserParams = Parameters<typeof createUser>;
// [name: string, age: number]
\`\`\`

## 类型守卫

运行时检查类型：

\`\`\`typescript
// typeof 类型守卫
function processValue(value: string | number) {
  if (typeof value === 'string') {
    // TypeScript 知道这里 value 是 string
    return value.toUpperCase();
  }
  // 这里 value 是 number
  return value.toFixed(2);
}

// instanceof 类型守卫
class Dog {
  bark() { console.log('Woof!'); }
}

class Cat {
  meow() { console.log('Meow!'); }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// 自定义类型守卫
interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
\`\`\`

![类型守卫](/images/typescript.jpg)

## 装饰器

装饰器是一种特殊的声明，可以附加到类、方法、属性等：

\`\`\`typescript
// 方法装饰器
function measure(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  
  descriptor.value = async function (...args: any[]) {
    const start = performance.now();
    const result = await originalMethod.apply(this, args);
    const end = performance.now();
    console.log(\`\${propertyKey} 执行时间: \${end - start}ms\`);
    return result;
  };
}

class DataService {
  @measure
  async fetchData() {
    // 耗时操作
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { data: [] };
  }
}
\`\`\`

## 总结

TypeScript 高级特性：

- **泛型** - 代码复用 + 类型安全
- **条件类型** - 动态类型选择
- **映射类型** - 批量类型转换
- **工具类型** - 提高开发效率
- **类型守卫** - 运行时类型安全
`,Bx=Object.assign({"./markdown/hardware-design/pcb/pcb-design-guide.en.md":lO,"./markdown/hardware-design/pcb/pcb-design-guide.zh.md":oO,"./markdown/mcu/stm32/stm32-getting-started.en.md":sO,"./markdown/mcu/stm32/stm32-getting-started.zh.md":cO,"./markdown/protocols/can/can-bus-protocol.en.md":uO,"./markdown/protocols/can/can-bus-protocol.zh.md":fO,"./markdown/react-hooks.en.md":dO,"./markdown/react-hooks.zh.md":pO,"./markdown/restful-api.en.md":hO,"./markdown/restful-api.zh.md":mO,"./markdown/rtos/freertos/freertos-basics.en.md":gO,"./markdown/rtos/freertos/freertos-basics.zh.md":vO,"./markdown/typescript-advanced.en.md":yO,"./markdown/typescript-advanced.zh.md":xO});console.log("📄 扫描到的 Markdown 文件:",Object.keys(Bx));function bO(n,i){const r=n.match(/^\.\/markdown\/(.+)\.([a-z]{2})\.md$/);if(!r)return null;const o=r[1],s=r[2],u=o.split("/"),d=u[u.length-1];let p="uncategorized";if(u.length>=1){const h=u[0];p={mcu:"mcu",rtos:"rtos",protocols:"protocols","hardware-design":"hardware-design",tools:"tools","embedded-linux":"embedded-linux",automotive:"automotive",iot:"iot",industrial:"industrial","embedded-c":"embedded-c",algorithms:"algorithms"}[h]||h}return{path:n,slug:d,lang:s,category:p,subCategory:u.length>2?u[1]:void 0,content:i}}function SO(){const n=new Map;for(const[o,s]of Object.entries(Bx)){const d=bO(o,s);if(!d)continue;n.has(d.slug)||n.set(d.slug,{});const p=n.get(d.slug);p[d.lang]=d}const i=[];let r=1;for(const[o,{zh:s,en:u}]of n){if(!s){console.warn(`⚠️ 跳过 ${o}: 缺少中文版本`);continue}const d=s.content.match(/^#\s+(.+)$/m),p=d?d[1].trim():o,h=s.content.match(/^#\s+.+\n+(.+?)(?:\n\n|\n#{1,6}\s)/s),m=h?h[1].replace(/\n/g," ").substring(0,100)+"...":"暂无摘要";i.push({id:String(r++),slug:o,status:"published",category:s.category,tags:[s.category,s.subCategory].filter(Boolean),createdAt:new Date().toISOString().split("T")[0],updatedAt:new Date().toISOString().split("T")[0],zh:{title:p,summary:m,content:s.content},en:{title:u&&u.content.match(/^#\s+(.+)$/m)?.[1].trim()||p,summary:u&&u.content.match(/^#\s+.+\n+(.+?)(?:\n\n|\n#{1,6}\s)/s)?.[1].replace(/\n/g," ").substring(0,100)+"..."||m,content:u?.content||s.content}})}return console.log(`✅ 自动生成 ${i.length} 篇笔记`),i}const Gx=SO();function Us(){return Gx.filter(n=>n.status==="published")}function CO(n){return Gx.find(i=>i.slug===n)}function wO(n){return Us().filter(i=>i.category===n)}const TO={mcu:Ps,mpu:yl,fpga:Bd,rtos:Yd,"embedded-linux":Kd,firmware:Ud,protocols:Gd,network:$d,tools:xl,"hardware-design":Pd,automotive:zd,iot:Vd,industrial:Hd,"embedded-c":vl,algorithms:kd,frontend:vl,backend:yl,devops:xl};function _O(){const{t:n,i18n:i}=er(),r=i.language,o=Us().slice(0,6);return x.jsxs("div",{children:[x.jsxs("section",{className:"relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 text-white py-20 md:py-32",children:[x.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"}),x.jsxs("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[x.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-6",children:n("home.title")}),x.jsx("p",{className:"text-xl md:text-2xl text-indigo-100 mb-4",children:n("home.subtitle")}),x.jsx("p",{className:"text-lg text-indigo-200 mb-8 max-w-2xl mx-auto",children:n("home.description")}),x.jsx(Ge,{to:"/notes",children:x.jsxs(dt,{size:"lg",className:"bg-white text-indigo-600 hover:bg-indigo-50",children:[n("home.viewAll"),x.jsx(fy,{className:"w-4 h-4 ml-2"})]})})]})]}),x.jsx("section",{className:"py-16 bg-white",children:x.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[x.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center",children:n("home.categories")}),x.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:ti.map(s=>{const u=TO[s.slug]||Xi;return x.jsx(Ge,{to:`/category/${s.slug}`,children:x.jsx(va,{className:"h-full hover:shadow-lg transition-shadow cursor-pointer group",children:x.jsx(ya,{className:"p-6",children:x.jsxs("div",{className:"flex items-start gap-4",children:[x.jsx("div",{className:"w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-500 transition-colors",children:x.jsx(u,{className:"w-6 h-6 text-indigo-500 group-hover:text-white transition-colors"})}),x.jsxs("div",{children:[x.jsx("h3",{className:"text-lg font-semibold text-slate-800 mb-1",children:s[r].name}),x.jsx("p",{className:"text-sm text-slate-500",children:s[r].description})]})]})})})},s.id)})})]})}),x.jsx("section",{className:"py-16 bg-slate-50",children:x.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[x.jsxs("div",{className:"flex items-center justify-between mb-8",children:[x.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-slate-800",children:n("home.latestNotes")}),x.jsx(Ge,{to:"/notes",children:x.jsxs(dt,{variant:"ghost",className:"text-indigo-600",children:[n("home.viewAll"),x.jsx(fy,{className:"w-4 h-4 ml-1"})]})})]}),x.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:o.map(s=>x.jsx(EO,{note:s,lang:r},s.id))})]})})]})}function EO({note:n,lang:i}){const r=ti.find(o=>o.slug===n.category);return x.jsx(Ge,{to:`/notes/${n.slug}`,children:x.jsx(va,{className:"h-full hover:shadow-lg transition-shadow cursor-pointer",children:x.jsxs(ya,{className:"p-6",children:[x.jsx("div",{className:"flex items-center gap-2 mb-3",children:x.jsx(Hs,{variant:"secondary",className:"text-xs",children:r?.[i].name})}),x.jsx("h3",{className:"text-lg font-semibold text-slate-800 mb-2 line-clamp-2",children:n[i].title}),x.jsx("p",{className:"text-sm text-slate-500 mb-4 line-clamp-3",children:n[i].summary}),x.jsxs("div",{className:"flex items-center justify-between",children:[x.jsx("div",{className:"flex flex-wrap gap-1",children:n.tags.slice(0,2).map(o=>x.jsxs("span",{className:"text-xs text-slate-400",children:["#",o]},o))}),x.jsx("span",{className:"text-xs text-slate-400",children:n.createdAt})]})]})})})}function RO({className:n,type:i,...r}){return x.jsx("input",{type:i,"data-slot":"input",className:ht("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",n),...r})}function dy(n,[i,r]){return Math.min(r,Math.max(i,n))}function AO(n){const i=NO(n),r=g.forwardRef((o,s)=>{const{children:u,...d}=o,p=g.Children.toArray(u),h=p.find(MO);if(h){const m=h.props.children,b=p.map(v=>v===h?g.Children.count(m)>1?g.Children.only(null):g.isValidElement(m)?m.props.children:null:v);return x.jsx(i,{...d,ref:s,children:g.isValidElement(m)?g.cloneElement(m,void 0,b):null})}return x.jsx(i,{...d,ref:s,children:u})});return r.displayName=`${n}.Slot`,r}function NO(n){const i=g.forwardRef((r,o)=>{const{children:s,...u}=r;if(g.isValidElement(s)){const d=LO(s),p=DO(u,s.props);return s.type!==g.Fragment&&(p.ref=o?Sa(o,d):d),g.cloneElement(s,p)}return g.Children.count(s)>1?g.Children.only(null):null});return i.displayName=`${n}.SlotClone`,i}var OO=Symbol("radix.slottable");function MO(n){return g.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===OO}function DO(n,i){const r={...i};for(const o in i){const s=n[o],u=i[o];/^on[A-Z]/.test(o)?s&&u?r[o]=(...p)=>{const h=u(...p);return s(...p),h}:s&&(r[o]=s):o==="style"?r[o]={...s,...u}:o==="className"&&(r[o]=[s,u].filter(Boolean).join(" "))}return{...n,...r}}function LO(n){let i=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning;return r?n.ref:(i=Object.getOwnPropertyDescriptor(n,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning,r?n.props.ref:n.props.ref||n.ref)}function jO(n){const i=g.useRef({value:n,previous:n});return g.useMemo(()=>(i.current.value!==n&&(i.current.previous=i.current.value,i.current.value=n),i.current.previous),[n])}var Vx=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),kO="VisuallyHidden",Fx=g.forwardRef((n,i)=>x.jsx(ke.span,{...n,ref:i,style:{...Vx,...n.style}}));Fx.displayName=kO;var zO=Fx,IO=[" ","Enter","ArrowUp","ArrowDown"],PO=[" ","Enter"],Qa="Select",[Bs,Gs,HO]=dd(Qa),[lr]=Wa(Qa,[HO,rr]),Vs=rr(),[UO,wa]=lr(Qa),[BO,GO]=lr(Qa),Kx=n=>{const{__scopeSelect:i,children:r,open:o,defaultOpen:s,onOpenChange:u,value:d,defaultValue:p,onValueChange:h,dir:m,name:b,autoComplete:v,disabled:C,required:T,form:_}=n,w=Vs(i),[E,N]=g.useState(null),[M,D]=g.useState(null),[H,G]=g.useState(!1),W=pd(m),[U,Y]=$i({prop:o,defaultProp:s??!1,onChange:u,caller:Qa}),[J,te]=$i({prop:d,defaultProp:p,onChange:h,caller:Qa}),ae=g.useRef(null),ne=E?_||!!E.closest("form"):!0,[re,ie]=g.useState(new Set),ue=Array.from(re).map(L=>L.props.value).join(";");return x.jsx(Ds,{...w,children:x.jsxs(UO,{required:T,scope:i,trigger:E,onTriggerChange:N,valueNode:M,onValueNodeChange:D,valueNodeHasChildren:H,onValueNodeHasChildrenChange:G,contentId:Un(),value:J,onValueChange:te,open:U,onOpenChange:Y,dir:W,triggerPointerDownPosRef:ae,disabled:C,children:[x.jsx(Bs.Provider,{scope:i,children:x.jsx(BO,{scope:n.__scopeSelect,onNativeOptionAdd:g.useCallback(L=>{ie(K=>new Set(K).add(L))},[]),onNativeOptionRemove:g.useCallback(L=>{ie(K=>{const I=new Set(K);return I.delete(L),I})},[]),children:r})}),ne?x.jsxs(pb,{"aria-hidden":!0,required:T,tabIndex:-1,name:b,autoComplete:v,value:J,onChange:L=>te(L.target.value),disabled:C,form:_,children:[J===void 0?x.jsx("option",{value:""}):null,Array.from(re)]},ue):null]})})};Kx.displayName=Qa;var Yx="SelectTrigger",$x=g.forwardRef((n,i)=>{const{__scopeSelect:r,disabled:o=!1,...s}=n,u=Vs(r),d=wa(Yx,r),p=d.disabled||o,h=Fe(i,d.onTriggerChange),m=Gs(r),b=g.useRef("touch"),[v,C,T]=mb(w=>{const E=m().filter(D=>!D.disabled),N=E.find(D=>D.value===d.value),M=gb(E,w,N);M!==void 0&&d.onValueChange(M.value)}),_=w=>{p||(d.onOpenChange(!0),T()),w&&(d.triggerPointerDownPosRef.current={x:Math.round(w.pageX),y:Math.round(w.pageY)})};return x.jsx(wd,{asChild:!0,...u,children:x.jsx(ke.button,{type:"button",role:"combobox","aria-controls":d.contentId,"aria-expanded":d.open,"aria-required":d.required,"aria-autocomplete":"none",dir:d.dir,"data-state":d.open?"open":"closed",disabled:p,"data-disabled":p?"":void 0,"data-placeholder":hb(d.value)?"":void 0,...s,ref:h,onClick:de(s.onClick,w=>{w.currentTarget.focus(),b.current!=="mouse"&&_(w)}),onPointerDown:de(s.onPointerDown,w=>{b.current=w.pointerType;const E=w.target;E.hasPointerCapture(w.pointerId)&&E.releasePointerCapture(w.pointerId),w.button===0&&w.ctrlKey===!1&&w.pointerType==="mouse"&&(_(w),w.preventDefault())}),onKeyDown:de(s.onKeyDown,w=>{const E=v.current!=="";!(w.ctrlKey||w.altKey||w.metaKey)&&w.key.length===1&&C(w.key),!(E&&w.key===" ")&&IO.includes(w.key)&&(_(),w.preventDefault())})})})});$x.displayName=Yx;var qx="SelectValue",Xx=g.forwardRef((n,i)=>{const{__scopeSelect:r,className:o,style:s,children:u,placeholder:d="",...p}=n,h=wa(qx,r),{onValueNodeHasChildrenChange:m}=h,b=u!==void 0,v=Fe(i,h.onValueNodeChange);return mt(()=>{m(b)},[m,b]),x.jsx(ke.span,{...p,ref:v,style:{pointerEvents:"none"},children:hb(h.value)?x.jsx(x.Fragment,{children:d}):u})});Xx.displayName=qx;var VO="SelectIcon",Qx=g.forwardRef((n,i)=>{const{__scopeSelect:r,children:o,...s}=n;return x.jsx(ke.span,{"aria-hidden":!0,...s,ref:i,children:o||"▼"})});Qx.displayName=VO;var FO="SelectPortal",Zx=n=>x.jsx(Ls,{asChild:!0,...n});Zx.displayName=FO;var Za="SelectContent",Wx=g.forwardRef((n,i)=>{const r=wa(Za,n.__scopeSelect),[o,s]=g.useState();if(mt(()=>{s(new DocumentFragment)},[]),!r.open){const u=o;return u?wl.createPortal(x.jsx(Jx,{scope:n.__scopeSelect,children:x.jsx(Bs.Slot,{scope:n.__scopeSelect,children:x.jsx("div",{children:n.children})})}),u):null}return x.jsx(eb,{...n,ref:i})});Wx.displayName=Za;var tn=10,[Jx,Ta]=lr(Za),KO="SelectContentImpl",YO=AO("SelectContent.RemoveScroll"),eb=g.forwardRef((n,i)=>{const{__scopeSelect:r,position:o="item-aligned",onCloseAutoFocus:s,onEscapeKeyDown:u,onPointerDownOutside:d,side:p,sideOffset:h,align:m,alignOffset:b,arrowPadding:v,collisionBoundary:C,collisionPadding:T,sticky:_,hideWhenDetached:w,avoidCollisions:E,...N}=n,M=wa(Za,r),[D,H]=g.useState(null),[G,W]=g.useState(null),U=Fe(i,X=>H(X)),[Y,J]=g.useState(null),[te,ae]=g.useState(null),ne=Gs(r),[re,ie]=g.useState(!1),ue=g.useRef(!1);g.useEffect(()=>{if(D)return Y0(D)},[D]),g0();const L=g.useCallback(X=>{const[ye,...be]=ne().map(ze=>ze.ref.current),[Ee]=be.slice(-1),Me=document.activeElement;for(const ze of X)if(ze===Me||(ze?.scrollIntoView({block:"nearest"}),ze===ye&&G&&(G.scrollTop=0),ze===Ee&&G&&(G.scrollTop=G.scrollHeight),ze?.focus(),document.activeElement!==Me))return},[ne,G]),K=g.useCallback(()=>L([Y,D]),[L,Y,D]);g.useEffect(()=>{re&&K()},[re,K]);const{onOpenChange:I,triggerPointerDownPosRef:Z}=M;g.useEffect(()=>{if(D){let X={x:0,y:0};const ye=Ee=>{X={x:Math.abs(Math.round(Ee.pageX)-(Z.current?.x??0)),y:Math.abs(Math.round(Ee.pageY)-(Z.current?.y??0))}},be=Ee=>{X.x<=10&&X.y<=10?Ee.preventDefault():D.contains(Ee.target)||I(!1),document.removeEventListener("pointermove",ye),Z.current=null};return Z.current!==null&&(document.addEventListener("pointermove",ye),document.addEventListener("pointerup",be,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",ye),document.removeEventListener("pointerup",be,{capture:!0})}}},[D,I,Z]),g.useEffect(()=>{const X=()=>I(!1);return window.addEventListener("blur",X),window.addEventListener("resize",X),()=>{window.removeEventListener("blur",X),window.removeEventListener("resize",X)}},[I]);const[pe,R]=mb(X=>{const ye=ne().filter(Me=>!Me.disabled),be=ye.find(Me=>Me.ref.current===document.activeElement),Ee=gb(ye,X,be);Ee&&setTimeout(()=>Ee.ref.current.focus())}),V=g.useCallback((X,ye,be)=>{const Ee=!ue.current&&!be;(M.value!==void 0&&M.value===ye||Ee)&&(J(X),Ee&&(ue.current=!0))},[M.value]),Q=g.useCallback(()=>D?.focus(),[D]),ee=g.useCallback((X,ye,be)=>{const Ee=!ue.current&&!be;(M.value!==void 0&&M.value===ye||Ee)&&ae(X)},[M.value]),fe=o==="popper"?Zf:tb,me=fe===Zf?{side:p,sideOffset:h,align:m,alignOffset:b,arrowPadding:v,collisionBoundary:C,collisionPadding:T,sticky:_,hideWhenDetached:w,avoidCollisions:E}:{};return x.jsx(Jx,{scope:r,content:D,viewport:G,onViewportChange:W,itemRefCallback:V,selectedItem:Y,onItemLeave:Q,itemTextRefCallback:ee,focusSelectedItem:K,selectedItemText:te,position:o,isPositioned:re,searchRef:pe,children:x.jsx(Ed,{as:YO,allowPinchZoom:!0,children:x.jsx(hd,{asChild:!0,trapped:M.open,onMountAutoFocus:X=>{X.preventDefault()},onUnmountAutoFocus:de(s,X=>{M.trigger?.focus({preventScroll:!0}),X.preventDefault()}),children:x.jsx(Rs,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:u,onPointerDownOutside:d,onFocusOutside:X=>X.preventDefault(),onDismiss:()=>M.onOpenChange(!1),children:x.jsx(fe,{role:"listbox",id:M.contentId,"data-state":M.open?"open":"closed",dir:M.dir,onContextMenu:X=>X.preventDefault(),...N,...me,onPlaced:()=>ie(!0),ref:U,style:{display:"flex",flexDirection:"column",outline:"none",...N.style},onKeyDown:de(N.onKeyDown,X=>{const ye=X.ctrlKey||X.altKey||X.metaKey;if(X.key==="Tab"&&X.preventDefault(),!ye&&X.key.length===1&&R(X.key),["ArrowUp","ArrowDown","Home","End"].includes(X.key)){let Ee=ne().filter(Me=>!Me.disabled).map(Me=>Me.ref.current);if(["ArrowUp","End"].includes(X.key)&&(Ee=Ee.slice().reverse()),["ArrowUp","ArrowDown"].includes(X.key)){const Me=X.target,ze=Ee.indexOf(Me);Ee=Ee.slice(ze+1)}setTimeout(()=>L(Ee)),X.preventDefault()}})})})})})})});eb.displayName=KO;var $O="SelectItemAlignedPosition",tb=g.forwardRef((n,i)=>{const{__scopeSelect:r,onPlaced:o,...s}=n,u=wa(Za,r),d=Ta(Za,r),[p,h]=g.useState(null),[m,b]=g.useState(null),v=Fe(i,U=>b(U)),C=Gs(r),T=g.useRef(!1),_=g.useRef(!0),{viewport:w,selectedItem:E,selectedItemText:N,focusSelectedItem:M}=d,D=g.useCallback(()=>{if(u.trigger&&u.valueNode&&p&&m&&w&&E&&N){const U=u.trigger.getBoundingClientRect(),Y=m.getBoundingClientRect(),J=u.valueNode.getBoundingClientRect(),te=N.getBoundingClientRect();if(u.dir!=="rtl"){const Me=te.left-Y.left,ze=J.left-Me,yt=U.left-ze,xt=U.width+yt,_a=Math.max(xt,Y.width),Ea=window.innerWidth-tn,or=dy(ze,[tn,Math.max(tn,Ea-_a)]);p.style.minWidth=xt+"px",p.style.left=or+"px"}else{const Me=Y.right-te.right,ze=window.innerWidth-J.right-Me,yt=window.innerWidth-U.right-ze,xt=U.width+yt,_a=Math.max(xt,Y.width),Ea=window.innerWidth-tn,or=dy(ze,[tn,Math.max(tn,Ea-_a)]);p.style.minWidth=xt+"px",p.style.right=or+"px"}const ae=C(),ne=window.innerHeight-tn*2,re=w.scrollHeight,ie=window.getComputedStyle(m),ue=parseInt(ie.borderTopWidth,10),L=parseInt(ie.paddingTop,10),K=parseInt(ie.borderBottomWidth,10),I=parseInt(ie.paddingBottom,10),Z=ue+L+re+I+K,pe=Math.min(E.offsetHeight*5,Z),R=window.getComputedStyle(w),V=parseInt(R.paddingTop,10),Q=parseInt(R.paddingBottom,10),ee=U.top+U.height/2-tn,fe=ne-ee,me=E.offsetHeight/2,X=E.offsetTop+me,ye=ue+L+X,be=Z-ye;if(ye<=ee){const Me=ae.length>0&&E===ae[ae.length-1].ref.current;p.style.bottom="0px";const ze=m.clientHeight-w.offsetTop-w.offsetHeight,yt=Math.max(fe,me+(Me?Q:0)+ze+K),xt=ye+yt;p.style.height=xt+"px"}else{const Me=ae.length>0&&E===ae[0].ref.current;p.style.top="0px";const yt=Math.max(ee,ue+w.offsetTop+(Me?V:0)+me)+be;p.style.height=yt+"px",w.scrollTop=ye-ee+w.offsetTop}p.style.margin=`${tn}px 0`,p.style.minHeight=pe+"px",p.style.maxHeight=ne+"px",o?.(),requestAnimationFrame(()=>T.current=!0)}},[C,u.trigger,u.valueNode,p,m,w,E,N,u.dir,o]);mt(()=>D(),[D]);const[H,G]=g.useState();mt(()=>{m&&G(window.getComputedStyle(m).zIndex)},[m]);const W=g.useCallback(U=>{U&&_.current===!0&&(D(),M?.(),_.current=!1)},[D,M]);return x.jsx(XO,{scope:r,contentWrapper:p,shouldExpandOnScrollRef:T,onScrollButtonChange:W,children:x.jsx("div",{ref:h,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:H},children:x.jsx(ke.div,{...s,ref:v,style:{boxSizing:"border-box",maxHeight:"100%",...s.style}})})})});tb.displayName=$O;var qO="SelectPopperPosition",Zf=g.forwardRef((n,i)=>{const{__scopeSelect:r,align:o="start",collisionPadding:s=tn,...u}=n,d=Vs(r);return x.jsx(Td,{...d,...u,ref:i,align:o,collisionPadding:s,style:{boxSizing:"border-box",...u.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Zf.displayName=qO;var[XO,qd]=lr(Za,{}),Wf="SelectViewport",nb=g.forwardRef((n,i)=>{const{__scopeSelect:r,nonce:o,...s}=n,u=Ta(Wf,r),d=qd(Wf,r),p=Fe(i,u.onViewportChange),h=g.useRef(0);return x.jsxs(x.Fragment,{children:[x.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:o}),x.jsx(Bs.Slot,{scope:r,children:x.jsx(ke.div,{"data-radix-select-viewport":"",role:"presentation",...s,ref:p,style:{position:"relative",flex:1,overflow:"hidden auto",...s.style},onScroll:de(s.onScroll,m=>{const b=m.currentTarget,{contentWrapper:v,shouldExpandOnScrollRef:C}=d;if(C?.current&&v){const T=Math.abs(h.current-b.scrollTop);if(T>0){const _=window.innerHeight-tn*2,w=parseFloat(v.style.minHeight),E=parseFloat(v.style.height),N=Math.max(w,E);if(N<_){const M=N+T,D=Math.min(_,M),H=M-D;v.style.height=D+"px",v.style.bottom==="0px"&&(b.scrollTop=H>0?H:0,v.style.justifyContent="flex-end")}}}h.current=b.scrollTop})})})]})});nb.displayName=Wf;var ab="SelectGroup",[QO,ZO]=lr(ab),WO=g.forwardRef((n,i)=>{const{__scopeSelect:r,...o}=n,s=Un();return x.jsx(QO,{scope:r,id:s,children:x.jsx(ke.div,{role:"group","aria-labelledby":s,...o,ref:i})})});WO.displayName=ab;var ib="SelectLabel",JO=g.forwardRef((n,i)=>{const{__scopeSelect:r,...o}=n,s=ZO(ib,r);return x.jsx(ke.div,{id:s.id,...o,ref:i})});JO.displayName=ib;var Ss="SelectItem",[eM,rb]=lr(Ss),lb=g.forwardRef((n,i)=>{const{__scopeSelect:r,value:o,disabled:s=!1,textValue:u,...d}=n,p=wa(Ss,r),h=Ta(Ss,r),m=p.value===o,[b,v]=g.useState(u??""),[C,T]=g.useState(!1),_=Fe(i,M=>h.itemRefCallback?.(M,o,s)),w=Un(),E=g.useRef("touch"),N=()=>{s||(p.onValueChange(o),p.onOpenChange(!1))};if(o==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return x.jsx(eM,{scope:r,value:o,disabled:s,textId:w,isSelected:m,onItemTextChange:g.useCallback(M=>{v(D=>D||(M?.textContent??"").trim())},[]),children:x.jsx(Bs.ItemSlot,{scope:r,value:o,disabled:s,textValue:b,children:x.jsx(ke.div,{role:"option","aria-labelledby":w,"data-highlighted":C?"":void 0,"aria-selected":m&&C,"data-state":m?"checked":"unchecked","aria-disabled":s||void 0,"data-disabled":s?"":void 0,tabIndex:s?void 0:-1,...d,ref:_,onFocus:de(d.onFocus,()=>T(!0)),onBlur:de(d.onBlur,()=>T(!1)),onClick:de(d.onClick,()=>{E.current!=="mouse"&&N()}),onPointerUp:de(d.onPointerUp,()=>{E.current==="mouse"&&N()}),onPointerDown:de(d.onPointerDown,M=>{E.current=M.pointerType}),onPointerMove:de(d.onPointerMove,M=>{E.current=M.pointerType,s?h.onItemLeave?.():E.current==="mouse"&&M.currentTarget.focus({preventScroll:!0})}),onPointerLeave:de(d.onPointerLeave,M=>{M.currentTarget===document.activeElement&&h.onItemLeave?.()}),onKeyDown:de(d.onKeyDown,M=>{h.searchRef?.current!==""&&M.key===" "||(PO.includes(M.key)&&N(),M.key===" "&&M.preventDefault())})})})})});lb.displayName=Ss;var ol="SelectItemText",ob=g.forwardRef((n,i)=>{const{__scopeSelect:r,className:o,style:s,...u}=n,d=wa(ol,r),p=Ta(ol,r),h=rb(ol,r),m=GO(ol,r),[b,v]=g.useState(null),C=Fe(i,N=>v(N),h.onItemTextChange,N=>p.itemTextRefCallback?.(N,h.value,h.disabled)),T=b?.textContent,_=g.useMemo(()=>x.jsx("option",{value:h.value,disabled:h.disabled,children:T},h.value),[h.disabled,h.value,T]),{onNativeOptionAdd:w,onNativeOptionRemove:E}=m;return mt(()=>(w(_),()=>E(_)),[w,E,_]),x.jsxs(x.Fragment,{children:[x.jsx(ke.span,{id:h.textId,...u,ref:C}),h.isSelected&&d.valueNode&&!d.valueNodeHasChildren?wl.createPortal(u.children,d.valueNode):null]})});ob.displayName=ol;var sb="SelectItemIndicator",cb=g.forwardRef((n,i)=>{const{__scopeSelect:r,...o}=n;return rb(sb,r).isSelected?x.jsx(ke.span,{"aria-hidden":!0,...o,ref:i}):null});cb.displayName=sb;var Jf="SelectScrollUpButton",ub=g.forwardRef((n,i)=>{const r=Ta(Jf,n.__scopeSelect),o=qd(Jf,n.__scopeSelect),[s,u]=g.useState(!1),d=Fe(i,o.onScrollButtonChange);return mt(()=>{if(r.viewport&&r.isPositioned){let p=function(){const m=h.scrollTop>0;u(m)};const h=r.viewport;return p(),h.addEventListener("scroll",p),()=>h.removeEventListener("scroll",p)}},[r.viewport,r.isPositioned]),s?x.jsx(db,{...n,ref:d,onAutoScroll:()=>{const{viewport:p,selectedItem:h}=r;p&&h&&(p.scrollTop=p.scrollTop-h.offsetHeight)}}):null});ub.displayName=Jf;var ed="SelectScrollDownButton",fb=g.forwardRef((n,i)=>{const r=Ta(ed,n.__scopeSelect),o=qd(ed,n.__scopeSelect),[s,u]=g.useState(!1),d=Fe(i,o.onScrollButtonChange);return mt(()=>{if(r.viewport&&r.isPositioned){let p=function(){const m=h.scrollHeight-h.clientHeight,b=Math.ceil(h.scrollTop)<m;u(b)};const h=r.viewport;return p(),h.addEventListener("scroll",p),()=>h.removeEventListener("scroll",p)}},[r.viewport,r.isPositioned]),s?x.jsx(db,{...n,ref:d,onAutoScroll:()=>{const{viewport:p,selectedItem:h}=r;p&&h&&(p.scrollTop=p.scrollTop+h.offsetHeight)}}):null});fb.displayName=ed;var db=g.forwardRef((n,i)=>{const{__scopeSelect:r,onAutoScroll:o,...s}=n,u=Ta("SelectScrollButton",r),d=g.useRef(null),p=Gs(r),h=g.useCallback(()=>{d.current!==null&&(window.clearInterval(d.current),d.current=null)},[]);return g.useEffect(()=>()=>h(),[h]),mt(()=>{p().find(b=>b.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[p]),x.jsx(ke.div,{"aria-hidden":!0,...s,ref:i,style:{flexShrink:0,...s.style},onPointerDown:de(s.onPointerDown,()=>{d.current===null&&(d.current=window.setInterval(o,50))}),onPointerMove:de(s.onPointerMove,()=>{u.onItemLeave?.(),d.current===null&&(d.current=window.setInterval(o,50))}),onPointerLeave:de(s.onPointerLeave,()=>{h()})})}),tM="SelectSeparator",nM=g.forwardRef((n,i)=>{const{__scopeSelect:r,...o}=n;return x.jsx(ke.div,{"aria-hidden":!0,...o,ref:i})});nM.displayName=tM;var td="SelectArrow",aM=g.forwardRef((n,i)=>{const{__scopeSelect:r,...o}=n,s=Vs(r),u=wa(td,r),d=Ta(td,r);return u.open&&d.position==="popper"?x.jsx(_d,{...s,...o,ref:i}):null});aM.displayName=td;var iM="SelectBubbleInput",pb=g.forwardRef(({__scopeSelect:n,value:i,...r},o)=>{const s=g.useRef(null),u=Fe(o,s),d=jO(i);return g.useEffect(()=>{const p=s.current;if(!p)return;const h=window.HTMLSelectElement.prototype,b=Object.getOwnPropertyDescriptor(h,"value").set;if(d!==i&&b){const v=new Event("change",{bubbles:!0});b.call(p,i),p.dispatchEvent(v)}},[d,i]),x.jsx(ke.select,{...r,style:{...Vx,...r.style},ref:u,defaultValue:i})});pb.displayName=iM;function hb(n){return n===""||n===void 0}function mb(n){const i=an(n),r=g.useRef(""),o=g.useRef(0),s=g.useCallback(d=>{const p=r.current+d;i(p),(function h(m){r.current=m,window.clearTimeout(o.current),m!==""&&(o.current=window.setTimeout(()=>h(""),1e3))})(p)},[i]),u=g.useCallback(()=>{r.current="",window.clearTimeout(o.current)},[]);return g.useEffect(()=>()=>window.clearTimeout(o.current),[]),[r,s,u]}function gb(n,i,r){const s=i.length>1&&Array.from(i).every(m=>m===i[0])?i[0]:i,u=r?n.indexOf(r):-1;let d=rM(n,Math.max(u,0));s.length===1&&(d=d.filter(m=>m!==r));const h=d.find(m=>m.textValue.toLowerCase().startsWith(s.toLowerCase()));return h!==r?h:void 0}function rM(n,i){return n.map((r,o)=>n[(i+o)%n.length])}var lM=Kx,oM=$x,sM=Xx,cM=Qx,uM=Zx,fM=Wx,dM=nb,pM=lb,hM=ob,mM=cb,gM=ub,vM=fb;function py({...n}){return x.jsx(lM,{"data-slot":"select",...n})}function hy({...n}){return x.jsx(sM,{"data-slot":"select-value",...n})}function my({className:n,size:i="default",children:r,...o}){return x.jsxs(oM,{"data-slot":"select-trigger","data-size":i,className:ht("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...o,children:[r,x.jsx(cM,{asChild:!0,children:x.jsx(Id,{className:"size-4 opacity-50"})})]})}function gy({className:n,children:i,position:r="item-aligned",align:o="center",...s}){return x.jsx(uM,{children:x.jsxs(fM,{"data-slot":"select-content",className:ht("bg-popover text-popover-foreground relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md",r==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",n),position:r,align:o,...s,children:[x.jsx(yM,{}),x.jsx(dM,{className:ht("p-1",r==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),children:i}),x.jsx(xM,{})]})})}function jf({className:n,children:i,...r}){return x.jsxs(pM,{"data-slot":"select-item",className:ht("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",n),...r,children:[x.jsx("span",{"data-slot":"select-item-indicator",className:"absolute right-2 flex size-3.5 items-center justify-center",children:x.jsx(mM,{children:x.jsx(uN,{className:"size-4"})})}),x.jsx(hM,{children:i})]})}function yM({className:n,...i}){return x.jsx(gM,{"data-slot":"select-scroll-up-button",className:ht("flex cursor-default items-center justify-center py-1",n),...i,children:x.jsx(hN,{className:"size-4"})})}function xM({className:n,...i}){return x.jsx(vM,{"data-slot":"select-scroll-down-button",className:ht("flex cursor-default items-center justify-center py-1",n),...i,children:x.jsx(Id,{className:"size-4"})})}var bM=Symbol("radix.slottable");function SM(n){const i=({children:r})=>x.jsx(x.Fragment,{children:r});return i.displayName=`${n}.Slottable`,i.__radixId=bM,i}var[Fs]=Wa("Tooltip",[rr]),Ks=rr(),vb="TooltipProvider",CM=700,nd="tooltip.open",[wM,Xd]=Fs(vb),yb=n=>{const{__scopeTooltip:i,delayDuration:r=CM,skipDelayDuration:o=300,disableHoverableContent:s=!1,children:u}=n,d=g.useRef(!0),p=g.useRef(!1),h=g.useRef(0);return g.useEffect(()=>{const m=h.current;return()=>window.clearTimeout(m)},[]),x.jsx(wM,{scope:i,isOpenDelayedRef:d,delayDuration:r,onOpen:g.useCallback(()=>{window.clearTimeout(h.current),d.current=!1},[]),onClose:g.useCallback(()=>{window.clearTimeout(h.current),h.current=window.setTimeout(()=>d.current=!0,o)},[o]),isPointerInTransitRef:p,onPointerInTransitChange:g.useCallback(m=>{p.current=m},[]),disableHoverableContent:s,children:u})};yb.displayName=vb;var bl="Tooltip",[TM,Nl]=Fs(bl),xb=n=>{const{__scopeTooltip:i,children:r,open:o,defaultOpen:s,onOpenChange:u,disableHoverableContent:d,delayDuration:p}=n,h=Xd(bl,n.__scopeTooltip),m=Ks(i),[b,v]=g.useState(null),C=Un(),T=g.useRef(0),_=d??h.disableHoverableContent,w=p??h.delayDuration,E=g.useRef(!1),[N,M]=$i({prop:o,defaultProp:s??!1,onChange:U=>{U?(h.onOpen(),document.dispatchEvent(new CustomEvent(nd))):h.onClose(),u?.(U)},caller:bl}),D=g.useMemo(()=>N?E.current?"delayed-open":"instant-open":"closed",[N]),H=g.useCallback(()=>{window.clearTimeout(T.current),T.current=0,E.current=!1,M(!0)},[M]),G=g.useCallback(()=>{window.clearTimeout(T.current),T.current=0,M(!1)},[M]),W=g.useCallback(()=>{window.clearTimeout(T.current),T.current=window.setTimeout(()=>{E.current=!0,M(!0),T.current=0},w)},[w,M]);return g.useEffect(()=>()=>{T.current&&(window.clearTimeout(T.current),T.current=0)},[]),x.jsx(Ds,{...m,children:x.jsx(TM,{scope:i,contentId:C,open:N,stateAttribute:D,trigger:b,onTriggerChange:v,onTriggerEnter:g.useCallback(()=>{h.isOpenDelayedRef.current?W():H()},[h.isOpenDelayedRef,W,H]),onTriggerLeave:g.useCallback(()=>{_?G():(window.clearTimeout(T.current),T.current=0)},[G,_]),onOpen:H,onClose:G,disableHoverableContent:_,children:r})})};xb.displayName=bl;var ad="TooltipTrigger",bb=g.forwardRef((n,i)=>{const{__scopeTooltip:r,...o}=n,s=Nl(ad,r),u=Xd(ad,r),d=Ks(r),p=g.useRef(null),h=Fe(i,p,s.onTriggerChange),m=g.useRef(!1),b=g.useRef(!1),v=g.useCallback(()=>m.current=!1,[]);return g.useEffect(()=>()=>document.removeEventListener("pointerup",v),[v]),x.jsx(wd,{asChild:!0,...d,children:x.jsx(ke.button,{"aria-describedby":s.open?s.contentId:void 0,"data-state":s.stateAttribute,...o,ref:h,onPointerMove:de(n.onPointerMove,C=>{C.pointerType!=="touch"&&!b.current&&!u.isPointerInTransitRef.current&&(s.onTriggerEnter(),b.current=!0)}),onPointerLeave:de(n.onPointerLeave,()=>{s.onTriggerLeave(),b.current=!1}),onPointerDown:de(n.onPointerDown,()=>{s.open&&s.onClose(),m.current=!0,document.addEventListener("pointerup",v,{once:!0})}),onFocus:de(n.onFocus,()=>{m.current||s.onOpen()}),onBlur:de(n.onBlur,s.onClose),onClick:de(n.onClick,s.onClose)})})});bb.displayName=ad;var Qd="TooltipPortal",[_M,EM]=Fs(Qd,{forceMount:void 0}),Sb=n=>{const{__scopeTooltip:i,forceMount:r,children:o,container:s}=n,u=Nl(Qd,i);return x.jsx(_M,{scope:i,forceMount:r,children:x.jsx(Ja,{present:r||u.open,children:x.jsx(Ls,{asChild:!0,container:s,children:o})})})};Sb.displayName=Qd;var Qi="TooltipContent",Cb=g.forwardRef((n,i)=>{const r=EM(Qi,n.__scopeTooltip),{forceMount:o=r.forceMount,side:s="top",...u}=n,d=Nl(Qi,n.__scopeTooltip);return x.jsx(Ja,{present:o||d.open,children:d.disableHoverableContent?x.jsx(wb,{side:s,...u,ref:i}):x.jsx(RM,{side:s,...u,ref:i})})}),RM=g.forwardRef((n,i)=>{const r=Nl(Qi,n.__scopeTooltip),o=Xd(Qi,n.__scopeTooltip),s=g.useRef(null),u=Fe(i,s),[d,p]=g.useState(null),{trigger:h,onClose:m}=r,b=s.current,{onPointerInTransitChange:v}=o,C=g.useCallback(()=>{p(null),v(!1)},[v]),T=g.useCallback((_,w)=>{const E=_.currentTarget,N={x:_.clientX,y:_.clientY},M=MM(N,E.getBoundingClientRect()),D=DM(N,M),H=LM(w.getBoundingClientRect()),G=kM([...D,...H]);p(G),v(!0)},[v]);return g.useEffect(()=>()=>C(),[C]),g.useEffect(()=>{if(h&&b){const _=E=>T(E,b),w=E=>T(E,h);return h.addEventListener("pointerleave",_),b.addEventListener("pointerleave",w),()=>{h.removeEventListener("pointerleave",_),b.removeEventListener("pointerleave",w)}}},[h,b,T,C]),g.useEffect(()=>{if(d){const _=w=>{const E=w.target,N={x:w.clientX,y:w.clientY},M=h?.contains(E)||b?.contains(E),D=!jM(N,d);M?C():D&&(C(),m())};return document.addEventListener("pointermove",_),()=>document.removeEventListener("pointermove",_)}},[h,b,d,m,C]),x.jsx(wb,{...n,ref:u})}),[AM,NM]=Fs(bl,{isInside:!1}),OM=SM("TooltipContent"),wb=g.forwardRef((n,i)=>{const{__scopeTooltip:r,children:o,"aria-label":s,onEscapeKeyDown:u,onPointerDownOutside:d,...p}=n,h=Nl(Qi,r),m=Ks(r),{onClose:b}=h;return g.useEffect(()=>(document.addEventListener(nd,b),()=>document.removeEventListener(nd,b)),[b]),g.useEffect(()=>{if(h.trigger){const v=C=>{C.target?.contains(h.trigger)&&b()};return window.addEventListener("scroll",v,{capture:!0}),()=>window.removeEventListener("scroll",v,{capture:!0})}},[h.trigger,b]),x.jsx(Rs,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:u,onPointerDownOutside:d,onFocusOutside:v=>v.preventDefault(),onDismiss:b,children:x.jsxs(Td,{"data-state":h.stateAttribute,...m,...p,ref:i,style:{...p.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[x.jsx(OM,{children:o}),x.jsx(AM,{scope:r,isInside:!0,children:x.jsx(zO,{id:h.contentId,role:"tooltip",children:s||o})})]})})});Cb.displayName=Qi;var Tb="TooltipArrow",_b=g.forwardRef((n,i)=>{const{__scopeTooltip:r,...o}=n,s=Ks(r);return NM(Tb,r).isInside?null:x.jsx(_d,{...s,...o,ref:i})});_b.displayName=Tb;function MM(n,i){const r=Math.abs(i.top-n.y),o=Math.abs(i.bottom-n.y),s=Math.abs(i.right-n.x),u=Math.abs(i.left-n.x);switch(Math.min(r,o,s,u)){case u:return"left";case s:return"right";case r:return"top";case o:return"bottom";default:throw new Error("unreachable")}}function DM(n,i,r=5){const o=[];switch(i){case"top":o.push({x:n.x-r,y:n.y+r},{x:n.x+r,y:n.y+r});break;case"bottom":o.push({x:n.x-r,y:n.y-r},{x:n.x+r,y:n.y-r});break;case"left":o.push({x:n.x+r,y:n.y-r},{x:n.x+r,y:n.y+r});break;case"right":o.push({x:n.x-r,y:n.y-r},{x:n.x-r,y:n.y+r});break}return o}function LM(n){const{top:i,right:r,bottom:o,left:s}=n;return[{x:s,y:i},{x:r,y:i},{x:r,y:o},{x:s,y:o}]}function jM(n,i){const{x:r,y:o}=n;let s=!1;for(let u=0,d=i.length-1;u<i.length;d=u++){const p=i[u],h=i[d],m=p.x,b=p.y,v=h.x,C=h.y;b>o!=C>o&&r<(v-m)*(o-b)/(C-b)+m&&(s=!s)}return s}function kM(n){const i=n.slice();return i.sort((r,o)=>r.x<o.x?-1:r.x>o.x?1:r.y<o.y?-1:r.y>o.y?1:0),zM(i)}function zM(n){if(n.length<=1)return n.slice();const i=[];for(let o=0;o<n.length;o++){const s=n[o];for(;i.length>=2;){const u=i[i.length-1],d=i[i.length-2];if((u.x-d.x)*(s.y-d.y)>=(u.y-d.y)*(s.x-d.x))i.pop();else break}i.push(s)}i.pop();const r=[];for(let o=n.length-1;o>=0;o--){const s=n[o];for(;r.length>=2;){const u=r[r.length-1],d=r[r.length-2];if((u.x-d.x)*(s.y-d.y)>=(u.y-d.y)*(s.x-d.x))r.pop();else break}r.push(s)}return r.pop(),i.length===1&&r.length===1&&i[0].x===r[0].x&&i[0].y===r[0].y?i:i.concat(r)}var IM=yb,PM=xb,HM=bb,UM=Sb,BM=Cb,GM=_b;function Eb({delayDuration:n=0,...i}){return x.jsx(IM,{"data-slot":"tooltip-provider",delayDuration:n,...i})}function vy({...n}){return x.jsx(Eb,{children:x.jsx(PM,{"data-slot":"tooltip",...n})})}function yy({...n}){return x.jsx(HM,{"data-slot":"tooltip-trigger",...n})}function xy({className:n,sideOffset:i=0,children:r,...o}){return x.jsx(UM,{children:x.jsxs(BM,{"data-slot":"tooltip-content",sideOffset:i,className:ht("bg-foreground text-background z-50 w-fit rounded-md px-3 py-1.5 text-xs",n),...o,children:[r,x.jsx(GM,{className:"bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"})]})})}function VM(){const{t:n,i18n:i}=er(),r=i.language,[o,s]=g.useState(""),[u,d]=g.useState("all"),[p,h]=g.useState("card"),[m,b]=g.useState("newest"),v=Us(),C=[{value:"newest",label:n("notes.newest")},{value:"oldest",label:n("notes.oldest")},{value:"title",label:n("notes.title")},{value:"updated",label:n("notes.recentlyUpdated")}],T=g.useMemo(()=>{let _=v.filter(w=>{const E=w[r].title.toLowerCase().includes(o.toLowerCase())||w[r].summary.toLowerCase().includes(o.toLowerCase())||w.tags.some(M=>M.toLowerCase().includes(o.toLowerCase())),N=u==="all"||w.category===u;return E&&N});return _=[..._].sort((w,E)=>{switch(m){case"newest":return new Date(E.createdAt).getTime()-new Date(w.createdAt).getTime();case"oldest":return new Date(w.createdAt).getTime()-new Date(E.createdAt).getTime();case"title":return w[r].title.localeCompare(E[r].title,r);case"updated":return new Date(E.updatedAt).getTime()-new Date(w.updatedAt).getTime();default:return 0}}),_},[v,o,u,m,r]);return x.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[x.jsxs("div",{className:"mb-8",children:[x.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-slate-800 mb-4",children:n("notes.title")}),x.jsxs("div",{className:"flex flex-col lg:flex-row gap-4",children:[x.jsxs("div",{className:"relative flex-1",children:[x.jsx(IN,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"}),x.jsx(RO,{placeholder:n("notes.search"),value:o,onChange:_=>s(_.target.value),className:"pl-10"})]}),x.jsxs(py,{value:u,onValueChange:d,children:[x.jsx(my,{className:"w-full lg:w-48",children:x.jsx(hy,{placeholder:n("notes.filterByCategory")})}),x.jsxs(gy,{children:[x.jsx(jf,{value:"all",children:n("notes.allCategories")}),ti.map(_=>x.jsx(jf,{value:_.slug,children:_[r].name},_.id))]})]}),x.jsxs(py,{value:m,onValueChange:_=>b(_),children:[x.jsxs(my,{className:"w-full lg:w-44",children:[x.jsx(nN,{className:"w-4 h-4 mr-2"}),x.jsx(hy,{placeholder:n("notes.sortBy")})]}),x.jsx(gy,{children:C.map(_=>x.jsx(jf,{value:_.value,children:_.label},_.value))})]}),x.jsx(Eb,{children:x.jsxs("div",{className:"flex items-center gap-1 border rounded-lg p-1 bg-white",children:[x.jsxs(vy,{children:[x.jsx(yy,{asChild:!0,children:x.jsx(dt,{variant:p==="card"?"default":"ghost",size:"icon",className:"h-9 w-9",onClick:()=>h("card"),children:x.jsx(EN,{className:"w-4 h-4"})})}),x.jsx(xy,{children:x.jsx("p",{children:n("notes.cardView")})})]}),x.jsxs(vy,{children:[x.jsx(yy,{asChild:!0,children:x.jsx(dt,{variant:p==="list"?"default":"ghost",size:"icon",className:"h-9 w-9",onClick:()=>h("list"),children:x.jsx(AN,{className:"w-4 h-4"})})}),x.jsx(xy,{children:x.jsx("p",{children:n("notes.listView")})})]})]})})]}),x.jsxs("div",{className:"mt-4 text-sm text-slate-500",children:[T.length," ",r==="zh"?"篇笔记":"notes"]})]}),T.length===0?x.jsx("div",{className:"text-center py-16",children:x.jsx("p",{className:"text-slate-400 text-lg",children:n("notes.noNotes")})}):x.jsx("div",{className:p==="card"?"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6":"flex flex-col gap-4",children:T.map(_=>p==="card"?x.jsx(FM,{note:_,lang:r},_.id):x.jsx(KM,{note:_,lang:r},_.id))})]})}function FM({note:n,lang:i}){const r=ti.find(o=>o.slug===n.category);return x.jsx(Ge,{to:`/notes/${n.slug}`,children:x.jsx(va,{className:"h-full hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1",children:x.jsxs(ya,{className:"p-6",children:[x.jsx("div",{className:"flex items-center gap-2 mb-3",children:x.jsx(Hs,{className:"bg-indigo-100 text-indigo-700 hover:bg-indigo-100",children:r?.[i].name})}),x.jsx("h3",{className:"text-lg font-semibold text-slate-800 mb-3 line-clamp-2",children:n[i].title}),x.jsx("p",{className:"text-sm text-slate-500 mb-4 line-clamp-3",children:n[i].summary}),x.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-slate-100",children:[x.jsx("div",{className:"flex items-center gap-4 text-xs text-slate-400",children:x.jsxs("span",{className:"flex items-center gap-1",children:[x.jsx(Is,{className:"w-3 h-3"}),n.createdAt]})}),x.jsx("div",{className:"flex gap-1",children:n.tags.slice(0,2).map(o=>x.jsxs("span",{className:"text-xs text-slate-400 flex items-center gap-0.5",children:[x.jsx(Fd,{className:"w-3 h-3"}),o]},o))})]})]})})})}function KM({note:n,lang:i}){const r=ti.find(o=>o.slug===n.category);return x.jsx(Ge,{to:`/notes/${n.slug}`,children:x.jsx(va,{className:"hover:shadow-md transition-all cursor-pointer group",children:x.jsx(ya,{className:"p-4",children:x.jsxs("div",{className:"flex items-center gap-4",children:[x.jsx("div",{className:"flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center",children:x.jsx("span",{className:"text-xs font-medium text-indigo-600",children:r?.[i].name.slice(0,2)})}),x.jsxs("div",{className:"flex-1 min-w-0",children:[x.jsx("h3",{className:"text-base font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors",children:n[i].title}),x.jsx("p",{className:"text-sm text-slate-500 line-clamp-1 mt-1",children:n[i].summary})]}),x.jsxs("div",{className:"hidden sm:flex flex-col items-end gap-1 text-xs text-slate-400",children:[x.jsxs("span",{className:"flex items-center gap-1",children:[x.jsx(Is,{className:"w-3 h-3"}),n.createdAt]}),x.jsxs("span",{className:"flex items-center gap-1",children:[x.jsx(Ix,{className:"w-3 h-3"}),n.updatedAt]})]}),x.jsx("div",{className:"hidden md:flex flex-wrap gap-1 max-w-[150px] justify-end",children:n.tags.map(o=>x.jsx(Hs,{variant:"outline",className:"text-xs",children:o},o))}),x.jsx($a,{className:"w-5 h-5 text-slate-300 group-hover:text-indigo-500 transition-colors"})]})})})})}function YM({content:n}){const i=n.split(`
`),r=[];let o=!1,s="";return i.forEach((u,d)=>{if(u.startsWith("```")){o?(r.push(x.jsx("pre",{className:"bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto my-4",children:x.jsx("code",{className:"text-sm font-mono",children:s.trim()})},`code-${d}`)),s="",o=!1):o=!0;return}if(o){s+=u+`
`;return}if(u.startsWith("# ")){r.push(x.jsx("h1",{className:"text-3xl font-bold text-slate-800 mt-8 mb-4",children:Fi(u.slice(2))},d));return}if(u.startsWith("## ")){r.push(x.jsx("h2",{className:"text-2xl font-semibold text-slate-800 mt-6 mb-3",children:Fi(u.slice(3))},d));return}if(u.startsWith("### ")){r.push(x.jsx("h3",{className:"text-xl font-semibold text-slate-800 mt-5 mb-2",children:Fi(u.slice(4))},d));return}if(u.startsWith("- ")||u.startsWith("* ")){r.push(x.jsx("li",{className:"ml-6 text-slate-700 leading-relaxed list-disc",children:Fi(u.slice(2))},d));return}const p=u.match(/^(\d+)\.\s(.+)$/);if(p){r.push(x.jsx("li",{className:"ml-6 text-slate-700 leading-relaxed list-decimal",children:Fi(p[2])},d));return}const h=u.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);if(h){const m=h[1],b=h[2];r.push(x.jsx("img",{src:b,alt:m,className:"w-full rounded-lg my-6 shadow-md",loading:"lazy"},`img-${d}`));return}if(u.trim()===""){r.push(x.jsx("div",{className:"h-4"},d));return}r.push(x.jsx("p",{className:"text-slate-700 leading-relaxed mb-4",children:Fi(u)},d))}),x.jsx(x.Fragment,{children:r})}function Fi(n){const i=[];let r=0;const o=/(\*\*|\*|`)(.+?)\1/g;let s;for(;(s=o.exec(n))!==null;){s.index>r&&i.push(n.slice(r,s.index));const u=s[1],d=s[2];u==="**"?i.push(x.jsx("strong",{className:"font-semibold text-slate-800",children:d},s.index)):u==="*"?i.push(x.jsx("em",{className:"italic",children:d},s.index)):u==="`"&&i.push(x.jsx("code",{className:"bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-sm font-mono",children:d},s.index)),r=s.index+s[0].length}return r<n.length&&i.push(n.slice(r)),x.jsx(x.Fragment,{children:i})}function $M(){const{slug:n}=Ly(),{t:i,i18n:r}=er(),o=r.language,s=n?CO(n):void 0;if(!s||s.status!=="published")return x.jsx(Iy,{to:"/notes",replace:!0});const u=ti.find(p=>p.slug===s.category),d=Us().filter(p=>p.category===s.category&&p.id!==s.id).slice(0,3);return x.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[x.jsxs("nav",{className:"flex items-center gap-2 text-sm text-slate-500 mb-6",children:[x.jsx(Ge,{to:"/",className:"hover:text-indigo-600",children:i("nav.home")}),x.jsx($a,{className:"w-4 h-4"}),x.jsx(Ge,{to:"/notes",className:"hover:text-indigo-600",children:i("nav.notes")}),x.jsx($a,{className:"w-4 h-4"}),x.jsx("span",{className:"text-slate-800",children:s[o].title})]}),x.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[x.jsx("div",{className:"lg:col-span-3",children:x.jsx(va,{children:x.jsxs(ya,{className:"p-8",children:[x.jsxs("div",{className:"mb-8",children:[x.jsx(Ge,{to:`/category/${s.category}`,children:x.jsxs(Hs,{className:"mb-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-200",children:[x.jsx(Px,{className:"w-3 h-3 mr-1"}),u?.[o].name]})}),x.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-slate-800 mb-4",children:s[o].title}),x.jsxs("div",{className:"flex flex-wrap items-center gap-4 text-sm text-slate-500",children:[x.jsxs("span",{className:"flex items-center gap-1",children:[x.jsx(Is,{className:"w-4 h-4"}),i("notes.publishedOn")," ",s.createdAt]}),x.jsxs("span",{className:"flex items-center gap-1",children:[x.jsx(Ix,{className:"w-4 h-4"}),i("notes.updatedOn")," ",s.updatedAt]})]}),x.jsx("div",{className:"flex flex-wrap gap-2 mt-4",children:s.tags.map(p=>x.jsxs("span",{className:"inline-flex items-center gap-1 text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded",children:[x.jsx(Fd,{className:"w-3 h-3"}),p]},p))})]}),x.jsx("div",{className:"prose prose-slate max-w-none",children:x.jsx(YM,{content:s[o].content||""})}),x.jsx("div",{className:"mt-12 pt-8 border-t border-slate-100",children:x.jsx(Ge,{to:"/notes",children:x.jsxs(dt,{variant:"outline",children:[x.jsx(zx,{className:"w-4 h-4 mr-2"}),i("note.backToList")]})})})]})})}),x.jsx("div",{className:"lg:col-span-1",children:x.jsxs("div",{className:"sticky top-24 space-y-6",children:[d.length>0&&x.jsx(va,{children:x.jsxs(ya,{className:"p-4",children:[x.jsx("h3",{className:"font-semibold text-slate-800 mb-4",children:i("note.relatedNotes")}),x.jsx("div",{className:"space-y-3",children:d.map(p=>x.jsxs(Ge,{to:`/notes/${p.slug}`,className:"block p-3 rounded-lg hover:bg-slate-50 transition-colors",children:[x.jsx("p",{className:"text-sm font-medium text-slate-700 line-clamp-2",children:p[o].title}),x.jsx("p",{className:"text-xs text-slate-400 mt-1",children:p.createdAt})]},p.id))})]})}),x.jsx(va,{children:x.jsxs(ya,{className:"p-4",children:[x.jsx("h3",{className:"font-semibold text-slate-800 mb-2",children:u?.[o].name}),x.jsx("p",{className:"text-sm text-slate-500",children:u?.[o].description}),x.jsx(Ge,{to:`/category/${s.category}`,children:x.jsxs(dt,{variant:"ghost",size:"sm",className:"mt-3 text-indigo-600",children:[i("categories.viewNotes"),x.jsx($a,{className:"w-4 h-4 ml-1"})]})})]})})]})})]})]})}const qM={mcu:Ps,mpu:yl,fpga:Bd,rtos:Yd,"embedded-linux":Kd,firmware:Ud,protocols:Gd,network:$d,tools:xl,"hardware-design":Pd,automotive:zd,iot:Vd,industrial:Hd,"embedded-c":vl,algorithms:kd,frontend:vl,backend:yl,devops:xl};function XM(){const{slug:n}=Ly(),{t:i,i18n:r}=er(),o=r.language,s=n?WN(n):void 0;if(!s)return x.jsx(Iy,{to:"/notes",replace:!0});const u=wO(n),d=qM[s.slug]||Px;return x.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[x.jsxs("nav",{className:"flex items-center gap-2 text-sm text-slate-500 mb-6",children:[x.jsx(Ge,{to:"/",className:"hover:text-indigo-600",children:i("nav.home")}),x.jsx($a,{className:"w-4 h-4"}),x.jsx(Ge,{to:"/notes",className:"hover:text-indigo-600",children:i("nav.notes")}),x.jsx($a,{className:"w-4 h-4"}),x.jsx("span",{className:"text-slate-800",children:s[o].name})]}),x.jsxs("div",{className:"mb-8",children:[x.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[x.jsx("div",{className:"w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center",children:x.jsx(d,{className:"w-7 h-7 text-indigo-500"})}),x.jsxs("div",{children:[x.jsx("h1",{className:"text-3xl font-bold text-slate-800",children:s[o].name}),x.jsx("p",{className:"text-slate-500 mt-1",children:s[o].description})]})]}),x.jsx("div",{className:"flex items-center gap-4 text-sm text-slate-500",children:x.jsxs("span",{className:"flex items-center gap-1",children:[x.jsx(Xi,{className:"w-4 h-4"}),i("categories.noteCount",{count:u.length})]})})]}),u.length===0?x.jsx("div",{className:"text-center py-16",children:x.jsx("p",{className:"text-slate-400 text-lg",children:i("notes.noNotes")})}):x.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:u.map(p=>x.jsx(QM,{note:p,lang:o},p.id))}),x.jsx("div",{className:"mt-12",children:x.jsx(Ge,{to:"/notes",children:x.jsxs(dt,{variant:"outline",children:[x.jsx(zx,{className:"w-4 h-4 mr-2"}),i("note.backToList")]})})})]})}function QM({note:n,lang:i}){return x.jsx(Ge,{to:`/notes/${n.slug}`,children:x.jsx(va,{className:"h-full hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1",children:x.jsxs(ya,{className:"p-6",children:[x.jsx("h3",{className:"text-lg font-semibold text-slate-800 mb-3 line-clamp-2",children:n[i].title}),x.jsx("p",{className:"text-sm text-slate-500 mb-4 line-clamp-3",children:n[i].summary}),x.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-slate-100",children:[x.jsx("div",{className:"flex items-center gap-4 text-xs text-slate-400",children:x.jsxs("span",{className:"flex items-center gap-1",children:[x.jsx(Is,{className:"w-3 h-3"}),n.createdAt]})}),x.jsx("div",{className:"flex gap-1",children:n.tags.slice(0,2).map(r=>x.jsxs("span",{className:"text-xs text-slate-400 flex items-center gap-0.5",children:[x.jsx(Fd,{className:"w-3 h-3"}),r]},r))})]})]})})})}function ZM(){return x.jsx(wT,{i18n:gt,children:x.jsx(_w,{children:x.jsx(iO,{children:x.jsxs(tw,{children:[x.jsx(rl,{path:"/",element:x.jsx(_O,{})}),x.jsx(rl,{path:"/notes",element:x.jsx(VM,{})}),x.jsx(rl,{path:"/notes/:slug",element:x.jsx($M,{})}),x.jsx(rl,{path:"/category/:slug",element:x.jsx(XM,{})})]})})})})}iC.createRoot(document.getElementById("root")).render(x.jsx(g.StrictMode,{children:x.jsx(ZM,{})}));
